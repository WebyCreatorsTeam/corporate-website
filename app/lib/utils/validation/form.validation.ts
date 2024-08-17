import { z } from 'zod';

export const FormSchema = z.object({
    userName: z.string({
        required_error: "נא למלא את השם המלא.",
        invalid_type_error: "השם צריך להיות מורכב מאותיות בלבד"
    }).min(5, {
        message: "השם המלא צריך להיות מינימום 5 תווים"
    }),
    userEmail: z.string().email({ message: "כתובת אימייל אינה תקינה" }),
    userPhone: z.string().min(10, {
        message: "מספר טלפון אינו תקין"
    }).regex(new RegExp(
        /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/
    ), "מספר טלפון אינו תקין"),
    userHelp: z.string({
        required_error: "נא לבחור במה אנחנו יכולים לעזור",
    })
});