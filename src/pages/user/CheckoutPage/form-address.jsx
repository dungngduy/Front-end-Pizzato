import { memo, useState, useEffect } from 'react';
import { Select } from 'antd';
import 'assets/user/scss/checkout.scss';
import AxiosInstance from 'utils/apiServers';
import { useAddress } from 'components/address';

const Address = ({ onClose }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [deliveryAddressId, setDeliveryAddressId] = useState(null);
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
    };

    // Xử lý khi chọn huyện
    const handleDistrictChange = (districtId, option) => {
        setSelectedDistrict(districtId);
        fetchWards(districtId); // Gọi API lấy xã

        setFormAddress(prev => ({
            ...prev,
            district: option.label,
            ward: ''
        }));
    };

    const handleWardChange = (wardId, option) => {
        fetchWards(wardId);
        setFormAddress(prev => ({
            ...prev,
            ward: option.label
        }));
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

        const fullAddress = `${formAddress.address}, ${formAddress.ward}, ${formAddress.district}, ${formAddress.province}`;
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
                    if (user) {
                        const newAddress = {
                            address: fullAddress,
                            first_name: formAddress.first_name,
                            last_name: formAddress.last_name,
                            phone: formAddress.phone,
                            email: formAddress.email,
                            user_id: formAddress.user_id,
                            delivery_area_id: deliveryAddressId,
                        };
                        const updatedUser = { ...user, address: [...user.address, newAddress] };
                        updateUser(updatedUser);
                    }

                    alert('Thêm địa chỉ giao hàng thành công');
                } else {
                    // setLoginError(res.data.message);
                    alert('Thêm địa chỉ giao hàng thất bại');
                }
            })
            .catch((error) => {
                // setError(error.response.data.message);
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
                    <div className="input__field mt-2">
                        <input type="email" name="email" value={formAddress.email} placeholder="Email (tùy chọn)" onChange={handleChange} />
                    </div>
                </div>
                <div className="input flex justify-between gap-5">
                    <div className="input__field mt-2">
                        <input type="text" name="last_name" value={formAddress.last_name} placeholder="Họ" onChange={handleChange} />
                    </div>
                    <div className="input__field mt-2">
                        <input type="text" name="first_name" value={formAddress.first_name} placeholder="Tên" onChange={handleChange} />
                    </div>
                </div>
                <div className="input">
                    <div className="input__field mt-2">
                        <input type="text" name="phone" value={formAddress.phone} placeholder="Số điện thoại" onChange={handleChange} />
                    </div>
                </div>
                <div className="select__group flex justify-between">
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
                    </div>
                </div>
                <div className="input">
                    <div className="input__field mt-2">
                        <input type="text" name="address" value={formAddress.address} placeholder="Địa chỉ (tùy chọn)" onChange={handleChange} />
                    </div>
                </div>
                <div className="input">
                    <div className="textarea__field mt-2">
                        <textarea cols="50" rows="5" name="note" placeholder="Ghi chú (Tùy chọn)" onChange={handleChange}></textarea>
                    </div>
                </div>
                <div className="flex justify-end mt-2">
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