import { memo, useState, useEffect } from "react";
import AxiosInstance from "utils/apiServers";
import { Select } from 'antd';
import { useAddress } from "components/address";

const UpdateAddress = ({ onClose, setSelectedAddress, address }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [deliveryAddressId, setDeliveryAddressId] = useState(null);

    const [error, setError] = useState({});

    const { user, updateUser } = useAddress();

    const [formAddress, setFormAddress] = useState({
        email: address?.email || "",
        user_id: user?.id || "",
        last_name: address?.last_name || "",
        first_name: address?.first_name || "",
        phone: address?.phone || "",
        province: "",
        district: "",
        ward: "",
        address: "",
        address_id: address?.id || "",
    });

    const fetchProvinces = async () => {
        try {
            const response = await AxiosInstance.get("/get-delivery-area");
            if (response?.data?.delivery_area) {
                const provinceOptions =
                    response.data.delivery_area.map((province) => ({
                        value: province.id,
                        label: province.area_name,
                    })) || [];
                setProvinces(provinceOptions);
            } else {
                console.error("No delivery_area found in the response");
                setProvinces([]);
            }
        } catch (error) {
            console.error("Error fetching provinces:", error);
            setProvinces([]);
        }
    };

    const fetchDistricts = async (provinceId) => {
        if (!provinceId) return;
        try {
            const response = await fetch(
                "https://api.npoint.io/34608ea16bebc5cffd42"
            );
            const data = await response.json();
            if (Array.isArray(data)) {
                const districtOptions = data
                    .filter((district) => district.ProvinceId === provinceId)
                    .map((district) => ({
                        value: district.Id,
                        label: district.Name,
                    }));
                setDistricts(districtOptions);
                setWards([]);
            } else {
                console.error("Invalid data format for districts");
                setDistricts([]);
            }
        } catch (error) {
            console.error("Error fetching districts:", error);
            setDistricts([]);
        }
    };

    const fetchWards = async (districtId) => {
        if (!districtId) return;
        try {
            const response = await fetch(
                "https://api.npoint.io/dd278dc276e65c68cdf5"
            );
            const data = await response.json();
            if (Array.isArray(data)) {
                const wardOptions = data
                    .filter((ward) => ward.DistrictId === districtId)
                    .map((ward) => ({
                        value: ward.Id,
                        label: ward.Name,
                    }));
                setWards(wardOptions);
            } else {
                console.error("Invalid data format for wards");
                setWards([]);
            }
        } catch (error) {
            console.error("Error fetching wards:", error);
            setWards([]);
        }
    };

    useEffect(() => {
        fetchProvinces();
    }, []);

    const handleProvinceChange = (value) => {
        if (!value) return;
        const province = provinces.find(prov => prov.value === value); // Tìm tỉnh theo value
        setSelectedProvince(province);
        setSelectedDistrict(null);
        setSelectedWard(null);
        setDistricts([]);
        setWards([]);

        setDeliveryAddressId(value);
        setFormAddress((prev) => ({
            ...prev,
            province: province.label, // Gán label của tỉnh vào formAddress
            district: "",
            ward: "",
            address: "",
        }));

        fetchDistricts(value);  // Truyền value của tỉnh vào fetchDistricts
        setError((prev) => ({ ...prev, province: null }));
    };

    const handleDistrictChange = (value) => {
        if (!value) return;
        const district = districts.find(d => d.value === value); // Tìm quận theo value
        setSelectedDistrict(district);
        setSelectedWard(null);
        setWards([]);

        setFormAddress((prev) => ({
            ...prev,
            district: district.label, // Gán label của quận vào formAddress
            ward: "",
            address: "",
        }));

        fetchWards(value); // Truyền value của quận vào fetchWards
        setError((prev) => ({ ...prev, district: null }));
    };

    const handleWardChange = (value) => {
        if (!value) return;
        const ward = wards.find(w => w.value === value); // Tìm phường theo value
        setSelectedWard(ward);

        setFormAddress((prev) => ({
            ...prev,
            ward: ward.label, // Gán label của phường vào formAddress
        }));
        setError((prev) => ({ ...prev, ward: null }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let errors = {};
        if (!formAddress.province) errors.province = "Bạn phải chọn Tỉnh/Thành phố!";
        if (!formAddress.district) errors.district = "Bạn phải chọn Quận/Huyện!";
        if (!formAddress.ward) errors.ward = "Bạn phải chọn Phường/Xã!";
        if (!formAddress.address) errors.address = "Vui lòng điền địa chỉ!";

        setError(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            alert("Vui lòng nhập địa chỉ!");
            return;
        };

        const { address, ward, district, province } = formAddress;
        const fullAddress = [address, ward, district, province]
            .filter(Boolean)
            .join(", ");

        const data = new FormData();
        data.append('address_id', formAddress.address_id);
        data.append('email', formAddress.email);
        data.append('user_id', formAddress.user_id);
        data.append('delivery_area_id', deliveryAddressId);
        data.append('last_name', formAddress.last_name);
        data.append('first_name', formAddress.first_name);
        data.append('phone', formAddress.phone);
        data.append('address', fullAddress);

        try {
            const response = await AxiosInstance.put(
                `/update-addresses/${formAddress.address_id}`,
                data
            );
            if (response?.status === 200) {
                const updatedAddress = response?.data.address;

                // Cập nhật danh sách địa chỉ trong useAddress
                const updatedAddresses = user.address.map((addr) =>
                    addr.id === updatedAddress.id ? updatedAddress : addr
                );

                updateUser({
                    ...user,
                    address: updatedAddresses,
                });

                // Đặt địa chỉ được chọn
                setSelectedAddress(updatedAddress);
                console.log("Updated address:", updatedAddress);
                
                alert("Cập nhật địa chỉ thành công");
                onClose();
            }
        } catch (error) {
            console.error("Failed to submit:", error);
        }
    };

    return (
        <div className="popup-address__overlay">
            <div className="form__content" data-aos="fade-down">
                <h2 className="title mb-3 text-[20px] font-bold">Cập nhật địa chỉ mua hàng</h2>
                <div className="input">
                    <div className="input__field">
                        <input
                            type="email"
                            name="email"
                            value={formAddress.email}
                            placeholder="Email (tùy chọn)"
                            onChange={handleChange}
                        />
                    </div>
                    <span className="text-red-600">{error?.email}</span>
                </div>
                <div className="input mt-4 flex gap-2">
                    <div className="input__field flex-1">
                        <input
                            type="text"
                            name="last_name"
                            value={formAddress.last_name}
                            placeholder="Họ"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input__field flex-1">
                        <input
                            type="text"
                            name="first_name"
                            value={formAddress.first_name}
                            placeholder="Tên"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="flex gap-2">
                    <span className="flex-1 text-red-600">{error?.last_name}</span>
                    <span className="flex-1 text-red-600">{error?.first_name}</span>
                </div>
                <div className="input mt-4">
                    <div className="input__field">
                        <input
                            type="text"
                            name="phone"
                            value={formAddress.phone}
                            placeholder="Số điện thoại"
                            onChange={handleChange}
                        />
                    </div>
                    <span className="text-red-600">{error?.phone}</span>
                </div>
                <div className="flex justify-between mt-4">
                    <div className="input">
                        <Select
                            showSearch
                            style={{ width: 200, height: 38.4 }}
                            placeholder="Tỉnh/Thành phố"
                            optionFilterProp="label"
                            value={selectedProvince}
                            onChange={handleProvinceChange}
                            options={provinces}
                            getPopupContainer={(trigger) => trigger.parentNode}
                        />
                    </div>
                    <div className="input">
                        <Select
                            showSearch
                            style={{ width: 200, height: 38.4 }}
                            placeholder="Quận/Huyện"
                            optionFilterProp="label"
                            value={selectedDistrict}
                            onChange={handleDistrictChange}
                            options={districts}
                            disabled={!selectedProvince}
                            getPopupContainer={(trigger) => trigger.parentNode}
                        />
                    </div>
                    <div className="input">
                        <Select
                            showSearch
                            style={{ width: 200, height: 38.4 }}
                            placeholder="Phường/Xã"
                            optionFilterProp="label"
                            options={wards}
                            onChange={handleWardChange}
                            disabled={!selectedDistrict}
                            value={selectedWard}
                            getPopupContainer={(trigger) => trigger.parentNode}
                        />
                    </div>
                </div>
                <div className="input mt-4">
                    <div className="input__field">
                        <input
                            type="text"
                            name="address"
                            value={formAddress.address}
                            placeholder="Đường, số nhà ..."
                            onChange={handleChange}
                        />
                    </div>
                    <span className="text-red-600">{error?.address}</span>
                </div>
                <div className="input mt-4">
                    <div className="textarea__field">
                        <textarea
                            cols="50"
                            rows="5"
                            name="note"
                            placeholder="Ghi chú (Tùy chọn)"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        type="button"
                        className="border border-[#000000]-300 py-2 px-4 rounded-md text-[#cccccc]"
                    >
                        Hủy
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="ms-3 border border-[#BC9A6C]-300 bg-[#BC9A6C] py-2 px-4 rounded-md text-[#fff]"
                    >
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(UpdateAddress);
