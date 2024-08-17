interface ValidReturn {
    continueWork: boolean;
    message: string;
}

export const validateValues = (inputKey: string, inputValue: string
): ValidReturn => {
    switch (inputKey) {
        case "userName":
            if (inputValue.length === 0 
            ) return {
                continueWork: false, message: "נא למלא את השם המלא"
            };
            break;
        case "userEmail":
            const emailRegex: RegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gi;
            const validEmail = emailRegex.test(inputValue);

            if (inputValue.length === 0) return {
                continueWork: false, message: "נא למלא אימייל"
            };

            if (!validEmail) return {
                continueWork: false, message: "אימייל לא תקין"
            };

            break;
        case "userPhone":
            const phoneRegex: RegExp =
                /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/gi;

            const validPhone = phoneRegex.test(inputValue);

            if (inputValue.length === 0) return {
                continueWork: false,
                message: "נא למלא מספר טלפון",
            };

            if (!validPhone) return {
                continueWork: false,
                message: "מספר טלפון לא תקין",
            };

            break;
        default:
            return {
                continueWork: false,
                message: "ישנה שגיאה, נסא שנית",
            };
    }
    return { continueWork: true, message: "" };
};
