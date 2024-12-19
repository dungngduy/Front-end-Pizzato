import { memo, useState } from "react";
import { AiOutlineCloseCircle, AiFillEdit, AiFillDelete } from "react-icons/ai";
import FormAddress from "./form-address";
import { Link } from "react-router-dom";
import UpdateAddress from "./update-address";
import AxiosInstance from "utils/apiServers";
import { useAddress } from "components/address";

const AddressSaved = ({ onClose, onSelectAddress, setSelectedAddress }) => {
    const [isPopupAddressVisible, setIsPopupAddressVisible] = useState(false);
    const [isPopupAddressVisibleEdit, setIsPopupAddressVisibleEdit] = useState(false);
    const [selectedAddress, setSelectedAddressLocal] = useState(null); // Lưu địa chỉ chọn để cập nhật
    const { user, updateUser } = useAddress();
    const savedAddresses = user?.address || [];

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
            AxiosInstance.delete(`delete-address/${addressId}`, {
                data: { address_id: addressId }
            });
            alert("Địa chỉ đã được xóa thành công!");
            const updatedAddresses = user.address.filter(address => address.id !== addressId);

            if (selectedAddress?.id === addressId) {
                setSelectedAddress(null);
            }

            // Cập nhật user qua updateUser
            updateUser({
                ...user,
                address: updatedAddresses
            });
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
                                    <div className="flex gap-2 w-[200px]">
                                        <button
                                            className="w-full text-sm font-semibold py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                                            onClick={() => handleSelectAddress(address)}
                                        >
                                            Sử dụng
                                        </button>
                                        <Link>
                                            <button
                                                onClick={() => togglePopupAddressEdit(address)}
                                                className="py-2 px-2 bg-orange-400 text-white rounded-lg"
                                            >
                                                <AiFillEdit />
                                            </button>
                                        </Link>
                                        <button
                                            className="py-2 px-2 bg-red-600 text-white rounded-lg"
                                            onClick={() => handleDeleteAddress(address.id)}
                                        >
                                            <AiFillDelete />
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
                    address={selectedAddress}
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
