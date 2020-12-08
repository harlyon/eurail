import React, {useContext} from 'react';
import './ContactItem.css'
import {ContactCard} from "../contact-card/ContactCard";
import {ExpandedContactContext} from "../../services/providers";

export const toggleNextContact = (contact,expandedContact) => expandedContact === contact ? undefined : contact;

export const ContactItem = ({contact}) => {
    const [selectedContact, setSelectedContact] = useContext(ExpandedContactContext);

    const show = contact === selectedContact;

    const handleClick = () => setSelectedContact(toggleNextContact(contact,selectedContact))

    return (
        <li className={'ContactItem-li'}>
            <div className={'ContactItem-container'}>
                <div className={'ContactItem'}>
                    <button onClick={handleClick}>
                        {contact.name.first} {" "}
                        <span className={'ContactItem-surname'}>{contact.name.last}</span>
                    </button>
                </div>
                {show && <ContactCard contact={contact}/>}
            </div>
        </li>
    )
}