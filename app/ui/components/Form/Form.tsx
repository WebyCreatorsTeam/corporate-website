'use client';

import { handleSendData } from '@/app/lib/actions';
import React, { useEffect, useRef } from 'react'
import { useFormStatus, useFormState } from 'react-dom'

export interface OptionsList {
    value: string
    text: string
}

export const options: Array<OptionsList> = [
    { value: "", text: "במה נוכל לעזור *" },
    { value: "dev", text: "פיתוח אתר" },
    { value: "uxui", text: "UX/UI ופיתוח אתר" },
    { value: "support", text: "תחזוקה של אתר" },
    { value: "other", text: "אחר" },
];

const initialState: any = {
    message: null,
    success: null
}

const SubminBtn = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending}>{pending ? "פרטים נשלחים..." : "שלח"}</button>
    )
}

const Form = () => {
    const [state, formAction] = useFormState(handleSendData, initialState)
    const ref = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (ref.current && state.success) {
            ref.current.reset();
        }
    }, [state])

    return (
        <section id="contact">
            <h2>מוכנים לקדם את העסק שלכם? </h2>
            <p>השאירו פרטים ונחזור אליכם בהקדם האפשרי</p>
            <form action={formAction} ref={ref} >
                {state!.message && <p className='error-massege'>{state.message}</p>}
                <input type="text" placeholder="שם מלא*" name="userName" required />
                <input type="email" placeholder="אימייל*" name="userEmail" required />
                <input type="tel" placeholder="מספר טלפון*" name="userPhone" required />
                <select name="userHelp" aria-label="במה אנחנו יכולים לעזור" required >
                    {options.map((opt, idx) => (
                        <option key={idx} defaultValue={opt.value} disabled={opt.value === ""}>{opt.text}</option>
                    ))}
                </select>
                <SubminBtn />
            </form>
        </section>
    )
}

export default Form