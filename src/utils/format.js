export const formatCurrencyVND = (amount, decimalCount = 0) => {
    // Kiểm tra xem amount có phải là số hợp lệ không
    if (isNaN(amount)) {
        throw new Error('Invalid amount: Please provide a valid number');
    }
    
    const formattedAmount = parseFloat(amount).toFixed(decimalCount);

    // Tách phần nguyên và phần thập phân
    const [integerPart, decimalPart] = formattedAmount.split(".");

    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${formattedIntegerPart}${decimalPart ? '.' + decimalPart : ''} ₫`;
};