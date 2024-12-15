import { memo, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FormAddress from "./form-address";
import { Link } from "react-router-dom";
import axios from "axios";
import UpdateAddress from "./update-address";

const AddressSaved = ({ onClose, onSelectAddress, setSelectedAddress }) => {
    const [isPopupAddressVisible, setIsPopupAddressVisible] = useState(false);
    const [isPopupAddressVisibleEdit, setIsPopupAddressVisibleEdit] = useState(false);
    const [selectedAddress, setSelectedAddressLocal] = useState(null); // Lưu địa chỉ chọn để cập nhật
    const user = JSON.parse(localStorage.getItem("user"));
    const savedAddresses = user?.address || [];
    const [addresses, setAddresses] = useState(user?.address || []);

    const togglePopupAddress = () => {
        setIsPopupAddressVisible(!isPopupAddressVisible);
    };

    const togglePopupAddressEdit = (address) => {
        setSelectedAddressLocal(address);  
        setIsPopupAddressVisibleEdit(!isPopupAddressVisibleEdit);
    };

    const handleSelectAddress = (address) => {
        onSelectAddress(address);
        onClose();
    };
    
    const handleDeleteAddress = async (addressId) => {
        try {
            await axios.delete(`http://localhost:8000/api/delete-address/${addressId}`, {
                data: { address_id: addressId }
            });
            alert("Địa chỉ đã được xóa thành công!");
            const updatedAddresses = addresses.filter(address => address.id !== addressId);
            setAddresses(updatedAddresses);
            user.address = updatedAddresses;
            localStorage.setItem("user", JSON.stringify(user));
        } catch (error) {
            console.error("Lỗi khi xóa địa chỉ:", error.response?.data || error.message);
            alert("Lỗi khi xóa địa chỉ.");
        }
    };
    
    return (
        <div className="popup-address__overlay">
            <div className="form__content" data-aos="fade-down">
                <div className="flex justify-end">
                    <AiOutlineCloseCircle onClick={onClose} style={{ cursor: 'pointer', fontSize: '25px' }} />
                </div>
                <div className="mx-auto">
                    <div className="mb-6">
                        <div className="mb-4 flex justify-between items-center">
                            <h3 className="text-xl font-medium">Địa chỉ đã lưu</h3>
                            <Link
                                onClick={togglePopupAddress}
                                className="cursor-pointer font-semibold text-[#BC9A6C] underline"
                            >
                                Thêm địa chỉ mới
                            </Link>
                        </div>
                        <div className="space-y-4 max-h-[433px] overflow-y-auto custom-scrollbar">
                            {savedAddresses.map((address, index) => (
                                <div key={index} className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50">
                                    <div>
                                        <h4 className="text-lg font-semibold">{address.last_name} {address.first_name}</h4>
                                        <p>{address.address}</p>
                                        <p>{address.phone}</p>
                                        <p>{address.email}</p>
                                    </div>
                                    <div className="flex gap-2 w-[190px]">
                                        <button>
                                             <Link
                                             onClick={() => togglePopupAddressEdit(address)}
                                            className="w-full text-sm font-semibold py-2 bg-[#BC9A6C] text-white rounded-lg hover:bg-[#676767] transition duration-300"
                                                >
                                            Sửa
                                        </Link>
                                        </button>
                                            <p
                                                 className=" text-center w-full text-sm font-semibold py-2 bg-[#BC9A6C] text-white rounded-lg hover:bg-[#676767] transition duration-300"
                                                onClick={() => handleDeleteAddress(address.id)}
                                                >
                                             Xóa
                                            </p>
                                        <button
                                             className="w-full text-sm font-semibold py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                                            onClick={() => handleSelectAddress(address)}
                                        >
                                            Sử dụng
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {isPopupAddressVisibleEdit && (
                <UpdateAddress 
                    onClose={togglePopupAddressEdit} 
                    setSelectedAddress={setSelectedAddress} 
                    address={selectedAddress} // Truyền địa chỉ cần cập nhật vào UpdateAddress
                />
            )}
            {isPopupAddressVisible && (
                <FormAddress 
                    onClose={togglePopupAddress} 
                    setSelectedAddress={setSelectedAddress} 
                />
            )}
        </div>
    );
};

export default memo(AddressSaved);
