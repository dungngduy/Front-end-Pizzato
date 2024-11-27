import { memo, useState, useEffect } from "react";
import "assets/user/scss/tracking.scss";
import AxiosInstance from "utils/apiServers";
import { formatCurrencyVND } from "utils/format";

const RefundCash = ({ order }) => {
    const [banks, setBanks] = useState([]);
    const [selectedBank, setSelectedBank] = useState("");

    const user = JSON.parse(localStorage.getItem("user"));
    
    const [dataRefund, setDataRefund] = useState({
        email: user.email,
        name: user.name,
        invoice_id: order?.invoice_id || "",
        refund_amount: order?.grand_total || "",
        refund_reason: "",
        bank_number: "",
        bank_type: selectedBank,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataRefund((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleRefund = () => {
        AxiosInstance.post("/refund-request", dataRefund)
            .then(() => {
                console.log("Thanh cong");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        AxiosInstance.get("https://api.vietqr.io/v2/banks")
            .then((response) => {
                if (Array.isArray(response.data.data)) {
                    setBanks(response.data.data);
                } else {
                    console.error("Dữ liệu không phải là mảng");
                }
            })
            .catch((error) => {
                console.log("Error fetching banks:", error);
            });
    }, []);

    useEffect(() => {
        setDataRefund((prevData) => ({
            ...prevData,
            bank_type: selectedBank,
        }));
    }, [selectedBank]);

    return (
        <div className="popup-rating__overlay">
            <div className="flex justify-center items-center min-h-screen bg-gray-800 bg-opacity-50" data-aos="fade-down">
                <div
                    className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
                        Yêu Cầu Hoàn Tiền
                    </h2>

                    {/* Chia form thành 2 cột */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Tên người dùng
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={dataRefund.name}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={dataRefund.email}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Mã hóa đơn
                                </label>
                                <input
                                    type="text"
                                    name="invoice_id"
                                    value={dataRefund.invoice_id}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Số tiền hoàn trả
                                </label>
                                <input
                                    type="text"
                                    name="refund_amount"
                                    value={formatCurrencyVND(dataRefund.refund_amount)}
                                    readOnly
                                    className="w-full px-4 py-2 border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
                                />
                            </div>
                        </div>

                        {/* Cột 2: Thông tin cần nhập */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Lý do hoàn tiền
                                </label>
                                <textarea
                                    rows="4"
                                    name="refund_reason"
                                    value={dataRefund.refund_reason}
                                    onChange={handleChange}
                                    placeholder="Nhập lý do..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Số tài khoản ngân hàng
                                </label>
                                <input
                                    type="text"
                                    name="bank_number"
                                    value={dataRefund.bank_number}
                                    onChange={handleChange}
                                    placeholder="Nhập số tài khoản..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600">
                                    Loại ngân hàng
                                </label>
                                <select
                                    value={selectedBank}
                                    onChange={(e) => setSelectedBank(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                >
                                    <option value="">--Chọn ngân hàng--</option>
                                    {banks.map((bank) => (
                                        <option key={bank.id} value={bank.code}>
                                            {bank.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Nút gửi yêu cầu */}
                    <button
                        onClick={handleRefund}
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Gửi yêu cầu
                    </button>
                </div>
            </div>
        </div>
    );
};

export default memo(RefundCash);