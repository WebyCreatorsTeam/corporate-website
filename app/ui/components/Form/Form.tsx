'use client';

import { handleSendData } from '@/app/lib/actions';
import Image from 'next/image';
import React, { FC, useEffect, useRef, useState } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import { useActionState } from 'react';
import { validateValues } from './fornValidation';

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
        <button className="form-btn" type="submit" disabled={pending}>{pending ? "פרטים נשלחים..." : "שלח"}</button>
    )
}

interface I_Input {
    type: string,
    name: string,
    placeholder: string,
    autoComp: string,
}

export interface InputsList {
    type: string
    name: string
    placeholder: string
    autoComp: string
}

export const inputs: Array<InputsList> = [
    { type: "text", name: "userName", placeholder: "*שם מלא", autoComp: "name" },
    { type: "email", name: "userEmail", placeholder: "*אימייל", autoComp: "email" },
    { type: "tel", name: "userPhone", placeholder: "מספר טלפון*", autoComp: "tel" },
];

const Input: FC<I_Input> = ({ type, name, placeholder, autoComp }) => {
    const [error, setError] = useState("")

    const hendleFillInput = (ev: any) => {
        const { continueWork, message } = validateValues(ev.target.name, ev.target.value)
        if (!continueWork) return setError(message)
        if (continueWork) {
            return setError("")
        }
    }

    return (
        <div className='inputField'>
            <p>{error}</p>
            <input
                required
                type={type}
                name={name}
                placeholder={placeholder}
                onBlur={hendleFillInput}
                aria-label={placeholder}
                autoComplete={autoComp}
                style={{ borderColor: error.length > 0 ? "red" : "black" }}
            />
        </div>)

}

const Form = () => {
    // const [state, formAction] = useFormState(handleSendData, initialState)
    const [state, formAction] = useActionState(handleSendData, initialState);

    const ref = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (ref.current && state.success) {
            ref.current.reset();
        }
    }, [state])

    return (
        <section id="contact" className='elementWidth contact-form__element'>
            <div className="contact-form__element--form">
                <h2>מוכנים לקדם את העסק שלכם? </h2>
                <p>השאירו פרטים ונחזור אליכם בהקדם האפשרי</p>
                <form action={formAction} ref={ref} >
                    {state!.message && <p className='error-massege' style={{ color: state.success ? "green" : "red" }}>{state.message}</p>}
                    {inputs.map((int, idx) => (
                        <Input key={idx} {...int} />
                    ))}
                    <select name="userHelp" aria-label="במה אנחנו יכולים לעזור" required defaultValue={"dev"}>
                        {options.map((opt, idx) => (
                            <option key={idx} defaultValue={opt.value} disabled={opt.value === ""}>{opt.text}</option>
                        ))}
                    </select>
                    <SubminBtn />
                </form>
            </div>
            <div className="contact-form__element--image">
                <Image className="hidden sm:block" src={"/images/callUs/call-us-desc.webp"} alt="איור של מחשב על השולחן" width={700} height={394} />
                <Image className="block sm:hidden" src={"/images/callUs/call-us-mob.webp"} alt="איור של מחשב על השולחן" width={300} height={169} />
            </div>
        </section>
    )
}

export default Form;