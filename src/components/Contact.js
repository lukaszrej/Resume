import React from "react";
import usePersonalData from "../hooks/usePersonalData";

export default () => {
    const { contact } = usePersonalData();

    return (
        <article className="p-main__contact">
            <h2 className="p-main__contact-title">Contact</h2>
            <section className="p-main__contact-content">
                <p>{ contact.phone }</p>
                <p>{ contact.email }</p>
            </section>
        </article>
    );
};