import { memo, useState, useEffect } from 'react';
import { Select } from 'antd';
import 'assets/user/scss/checkout.scss';
import AxiosInstance from 'utils/apiServers';
import { useAddress } from 'components/address';

const Address = ({ onClose, setSelectedAddress }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [deliveryAddressId, setDeliveryAddressId] = useState(null);
    const [error, setError] = useState(null);
    const [errorAddress, setErrorAddress] = useState({
        province: null,
        district: null,
        ward: null
    });
    const { updateUser } = useAddress();

    // Fetch tỉnh
    const fetchProvinces = async () => {
        try {
            const response = await AxiosInstance.get('/get-delivery-area'); // API tỉnh
            const data = await response.data.delivery_area;
            const provinceOptions = data.map(province => ({
                value: province.id,
                label: province.area_name,
            }));

            setProvinces(provinceOptions);
        } catch (error) {
            console.error('Error fetching provinces:', error);
        }
    };

    // Fetch huyện
    const fetchDistricts = async (provinceId) => {
        try {
            const response = await fetch('https://api.npoint.io/34608ea16bebc5cffd42'); // API huyện
            const data = await response.json();
            const districtOptions = data
                .filter(district => district.ProvinceId === provinceId) // Lọc huyện theo ID tỉnh
                .map(district => ({
                    value: district.Id,
                    label: district.Name,
                }));
            setDistricts(districtOptions);
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    };

    // Fetch xã
    const fetchWards = async (districtId) => {
        try {
            const response = await fetch('https://api.npoint.io/dd278dc276e65c68cdf5'); // API xã
            const data = await response.json();
            const wardOptions = data
                .filter(ward => ward.DistrictId === districtId) // Lọc xã theo ID huyện
                .map(ward => ({
                    value: ward.Id,
                    label: ward.Name,
                }));
            setWards(wardOptions);
        } catch (error) {
            console.error('Error fetching wards:', error);
        }
    };

    // Gọi API tỉnh khi component render
    useEffect(() => {
        fetchProvinces();
    }, []);

    // Xử lý khi chọn tỉnh
    const handleProvinceChange = (provinceId, option) => {
        if (!provinceId) {
            setErrorAddress(prev => ({ ...prev, province: 'Bạn phải chọn Tỉnh/Thành phố!' }));
            return;
        }
        setSelectedProvince(provinceId);
        setSelectedDistrict(null); // Reset huyện và xã
        setWards([]);
        fetchDistricts(provinceId); // Gọi API lấy huyện

        setDeliveryAddressId(option.value);
        setFormAddress(prev => ({
            ...prev,
            province: option.label,
            district: '',
            ward: ''
        }));

        setErrorAddress(prev => ({ ...prev, province: null }));
    };

    // Xử lý khi chọn huyện
    const handleDistrictChange = (districtId, option) => {
        if (!districtId) {
            setErrorAddress(prev => ({ ...prev, district: 'Bạn phải chọn Quận/Huyện!' }));
            return;
        }
        setSelectedDistrict(districtId);
        fetchWards(districtId); // Gọi API lấy xã

        setFormAddress(prev => ({
            ...prev,
            district: option.label,
            ward: ''
        }));

        setErrorAddress(prev => ({ ...prev, district: null }));
    };

    const handleWardChange = (wardId, option) => {
        if (!wardId) {
            setErrorAddress(prev => ({ ...prev, ward: 'Bạn phải chọn Phường/Xã!' }));
            return;
        }
        fetchWards(wardId);
        setFormAddress(prev => ({
            ...prev,
            ward: option.label
        }));

        setErrorAddress(prev => ({ ...prev, ward: null }));
    };

    const user = JSON.parse(localStorage.getItem('user'));

    const [formAddress, setFormAddress] = useState({
        email: '',
        user_id: user.id,
        last_name: '',
        first_name: '',
        phone: '',
        province: '',
        district: '',
        ward: '',
        address: '',
    });

    const handleSubmitAddress = (e) => {
        e.preventDefault();

        if (!formAddress.province || !formAddress.district || !formAddress.ward) {
            setErrorAddress(prev => ({
                ...prev,
                province: !formAddress.province ? 'Bạn phải chọn Tỉnh/Thành phố!' : null,
                district: !formAddress.district ? 'Bạn phải chọn Quận/Huyện!' : null,
                ward: !formAddress.ward ? 'Bạn phải chọn Phường/Xã!' : null,
            }));
            return;
        }

        const { address, ward, district, province } = formAddress;
        const fullAddress = [address, ward, district, province]
        .filter(Boolean)
        .join(", ");

        const data = new FormData();
        data.append('email', formAddress.email);
        data.append('user_id', formAddress.user_id);
        data.append('delivery_area_id', deliveryAddressId);
        data.append('last_name', formAddress.last_name);
        data.append('first_name', formAddress.first_name);
        data.append('phone', formAddress.phone);
        data.append('address', fullAddress);

        AxiosInstance.post('/add-to-address', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        })
            .then((res) => {
                if (res.status === 200) {
                    const newAddress = {
                        id: res.data.addressId,
                        address: fullAddress,
                        first_name: formAddress.first_name,
                        last_name: formAddress.last_name,
                        phone: formAddress.phone,
                        email: formAddress.email,
                        user_id: formAddress.user_id,
                        delivery_area_id: deliveryAddressId,
                    };
                    if (user) {
                        const updatedUser = { ...user, address: [...user.address, newAddress] };
                        updateUser(updatedUser);
                    }
                    setSelectedAddress(newAddress);

                    alert('Thêm địa chỉ giao hàng thành công');
                    onClose();
                } else {
                    setError(res.data.errors);
                    console.log(errorAddress);
                    alert('Thêm địa chỉ giao hàng thất bại');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormAddress({
            ...formAddress,
            [name]: value
        });
    };

    return (
        <div className="popup-address__overlay">
            <div className="form__content" data-aos="fade-down">
                <h2 className="title mb-3 text-[20px] font-bold">Thông tin mua hàng</h2>
                <div className="input">
                    <div className="input__field">
                        <input type="email" name="email" value={formAddress.email} placeholder="Email (tùy chọn)" onChange={handleChange} />
                    </div>
                    <span className="text-red-600">{error?.email}</span>
                </div>
                <div className="input mt-4 flex gap-2">
                    <div className="input__field flex-1">
                        <input type="text" name="last_name" value={formAddress.last_name} placeholder="Họ" onChange={handleChange} />
                    </div>
                    <div className="input__field flex-1">
                        <input type="text" name="first_name" value={formAddress.first_name} placeholder="Tên" onChange={handleChange} />
                    </div>
                </div>
                <div className="flex gap-2">
                    <span className="flex-1 text-red-600">{error?.last_name}</span>
                    <span className="flex-1 text-red-600">{error?.first_name}</span>
                </div>
                <div className="input mt-4">
                    <div className="input__field">
                        <input type="text" name="phone" value={formAddress.phone} placeholder="Số điện thoại" onChange={handleChange} />
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
                            getPopupContainer={trigger => trigger.parentNode}
                        />
                        <br />
                        {errorAddress.province && <span className="text-red-500">{errorAddress.province}</span>}
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
                            getPopupContainer={trigger => trigger.parentNode}
                        />
                        <br />
                        {errorAddress.district && <span className="text-red-500">{errorAddress.district}</span>}
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
                            getPopupContainer={trigger => trigger.parentNode}
                        />
                        <br />
                        {errorAddress.ward && <span className="text-red-500">{errorAddress.ward}</span>}
                    </div>
                </div>
                <div className="input mt-4">
                    <div className="input__field">
                        <input type="text" name="address" value={formAddress.address} placeholder="Đường, số nhà ..." onChange={handleChange} />
                    </div>
                    <span className="text-red-600">{error?.address}</span>
                </div>
                <div className="input mt-4">
                    <div className="textarea__field">
                        <textarea cols="50" rows="5" name="note" placeholder="Ghi chú (Tùy chọn)" onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button type="button" className="border border-[#000000]-300 py-2 px-4 rounded-md text-[#cccccc]" onClick={onClose}>
                        Huỷ
                    </button>
                    <button onClick={handleSubmitAddress} type="submit" className="ms-3 border border-[#BC9A6C]-300 bg-[#BC9A6C] py-2 px-4 rounded-md text-[#fff]">
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Address);