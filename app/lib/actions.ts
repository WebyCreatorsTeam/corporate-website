"use server"

import User from '../model/user.model';
import connectToDatabase from './mongodb';
import { transporter } from './utils/nodemailer/transporter';
import { mailOptions } from './utils/nodemailer/mail';
import { FormSchema } from './utils/validation/form.validation';

export const handleSendData = async (prevState: any, formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    try {
        const { userName, userEmail, userPhone, userHelp } = FormSchema.parse({
            userName: formData.get('userName'),
            userEmail: formData.get('userEmail'),
            userPhone: formData.get('userPhone'),
            userHelp: formData.get('userHelp'),
        });

        console.log(userName, userEmail, userPhone, userHelp)

        await connectToDatabase();
        await User.create({ userName, userEmail, userPhone, userHelp })

        await new Promise((resolve, reject) => {
            transporter.sendMail(mailOptions(userName, userEmail, userPhone, userHelp), (error, info) => {
                // console.log(`email transporter enter`)
                if (error) {
                    // console.log(`email transporter enter error`)
                    console.error("Error sending email: ", error);
                    reject(error)
                } else {
                    console.log("Email sent: ", info.response);
                    // console.log(`email transporter enter sent`)
                    resolve(info.response)
                }
            });
            transporter.close();
        })

        return { message: "תודה על השארת הפרטים", success: true }
    } catch (error: any) {
        console.log(error)
        return { message: error.errors[0].message || 'Something went wrong', success: false }
    }
}