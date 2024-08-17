export const mailOptions = (userName: string, userEmail: string, userPhone: string, userHelp: string) => {
    return {
        from: process.env.MAIL,
        to: process.env.MAIL,
        cc: [
            `"Katya Ru" <${process.env.MAIL_CC}>`
        ],
        subject: "✨✨Weby - פרטים חדשים התקבלו ✨✨",
        html: `
        <div style="text-align: center;" dir="rtl">
        <h2 style="color: rgb(145, 2, 254)">התקבלה פניה חדשה מאתר של וובי</h2>
        <p>שם: <b>${userName}</b></p>
        <p>מספר טלפון: <a href="tel:${userPhone}"><b>${userPhone}</b></a></p>
        <p>אימייל: <b>${userEmail}</b></p>
        <p>רוצה עזרה ב: <b>${userHelp}</b></p>
        </div>
        `,
        // attachments: [{
            // <img style="width: 100px;height: 71px;" src="cid:logo" alt="weby-logo" />
        //     filename: 'weby-logo',
        //     // path: /weby-logo.png',
        //     cid: 'logo'
        // }]
    }
}