import React, { useContext, useState } from 'react';
import style from './PageSendMe.module.scss';

export const MySendForm = ({sendForm, setModal, language}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = () => {
        const data = {
            name,
            email,
            text
        };

        if (name && email && text) {
            sendForm(data);
            setModal(false);
        }
    };

    const closeHandler = ({target}) => {
        if (!target.closest('div[class*="form"]')) {
            setModal(false);
        }
    };

    return (
        <div className={style.modal} onClick={closeHandler}>
            <div className={style.form}>

                <div className={style["block__name"]}>
                    <input value={name} onChange={({target}) => setName(target.value)} 
                    component={'input'} name={'username'} placeholder={language.form.name} required/>
                    <span className={style["line"]}></span>
                </div>

                <div className={style["block__email"]}>
                    <input value={email} onChange={({target}) => setEmail(target.value)} 
                    type={'email'} name={'email'} component={'input'} placeholder="Email" required/>
                    <span className={style["line"]}></span>
                </div>

                <div className={style["block__message"]}>
                    <textarea value={text} 
                    onChange={({target}) => setText(target.value)} component={'textarea'} name={'text'} 
                    placeholder={language.form.message} required/>
                    <span className={style["line"]}></span>
                </div>
                
                <button className={style["btn-form"]} onClick={handleSubmit}>{language.form.btn}</button>
                
            </div>
        </div>
    )
};