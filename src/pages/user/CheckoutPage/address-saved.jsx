import { memo, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import FormAddress from "./form-address";
import { Link } from "react-router-dom";

const AddressSaved = ({ onClose, onSelectAddress, setSelectedAddress }) => {
    const [isPopupAddressVisible, setIsPopupAddressVisible] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const savedAddresses = user?.address || [];

    const togglePopupAddress = () => {
        setIsPopupAddressVisible(!isPopupAddressVisible);
    }

    const handleSelectAddress = (address) => {
        onSelectAddress(address);
        onClose();
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
                                    <div className="w-[100px]">
                                        <button
                                            className="w-full cursor-pointer py-3 bg-[#BC9A6C] text-white font-semibold rounded-lg hover:bg-[#676767] transition duration-300"
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

            {isPopupAddressVisible && <FormAddress onClose={togglePopupAddress} setSelectedAddress={setSelectedAddress} />}
        </div>
    );
};

export default memo(AddressSaved);