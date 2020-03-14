import React from "react";

const MessageForm = () => {

    return (
        <form className="contact-form" action="#">
            <label className="contact-form__field" htmlFor="name">
                <input
                    required
                    className="contact-form__input"
                    pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                    id="name"
                    name="name"
                    type="text" />
                    <span>Jméno</span>
            </label>
            <label className="contact-form__field" htmlFor="email">
                <input required
                       className="contact-form__input"
                       id="email"
                       name="email"
                       type="email" />
                    <span>E-mail</span>
            </label>
            <label className="contact-form__field" htmlFor="message">
                <textarea required
                          pattern=".+"
                          className="contact-form__text-area"
                          name="message" id="message" cols="30"
                          rows="10"/>
                <span>Zpráva</span>
            </label>
            <button className="contact-form__btn" type="submit">Odeslat</button>
        </form>
        )
}

export default MessageForm;

