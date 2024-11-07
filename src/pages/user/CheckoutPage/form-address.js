import { memo, useState, useEffect } from 'react';
import { Select } from 'antd';
import 'assets/user/scss/checkout.scss';

const Address = ({ onClose }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    // Fetch tỉnh
    const fetchProvinces = async () => {
        try {
            const response = await fetch('https://api.npoint.io/ac646cb54b295b9555be'); // API tỉnh
            const data = await response.json();
            const provinceOptions = data.map(province => ({
                value: province.Id,
                label: province.Name,
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
    const handleProvinceChange = (provinceId) => {
        setSelectedProvince(provinceId);
        setSelectedDistrict(null); // Reset huyện và xã
        setWards([]);
        fetchDistricts(provinceId); // Gọi API lấy huyện
    };
    

    // Xử lý khi chọn huyện
    const handleDistrictChange = (districtId) => {
        setSelectedDistrict(districtId);
        fetchWards(districtId); // Gọi API lấy xã
    };

    return (
        <div className="popup-address__overlay">
            <div className="form__content" data-aos="fade-down">
                <h2 className="title mb-3 text-[20px] font-bold">Thông tin mua hàng</h2>
                <div className="input">
                    <div className="input__field mt-2">
                        <input type="email" name="email" placeholder="Email (tùy chọn)" />
                    </div>
                </div>
                <div className="input">
                    <div className="input__field mt-2">
                        <input type="text" name="name" placeholder="Họ và tên" />
                    </div>
                </div>
                <div className="input">
                    <div className="input__field mt-2">
                        <input type="text" name="phone" placeholder="Số điện thoại" />
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
                            disabled={!selectedDistrict}
                            getPopupContainer={trigger => trigger.parentNode}
                        />
                    </div>
                </div>
                <div className="input">
                    <div className="input__field mt-2">
                        <input type="text" name="address" placeholder="Địa chỉ (tùy chọn)" />
                    </div>
                </div>
                <div className="input">
                    <div className="textarea__field mt-2">
                        <textarea cols="50" rows="5" name="note" placeholder="Ghi chú (Tùy chọn)"></textarea>
                    </div>
                </div>
                <div className="flex justify-end mt-2">
                    <button type="button" className="border border-[#000000]-300 py-2 px-4 rounded-md text-[#cccccc]" onClick={onClose}>
                        Huỷ
                    </button>
                    <button type="submit" className="ms-3 border border-[#BC9A6C]-300 bg-[#BC9A6C] py-2 px-4 rounded-md text-[#fff]">
                        Lưu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(Address);