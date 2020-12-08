import React, {useContext} from 'react'
import './ContactCard.css'
import {ExpandedContactContext} from "../../services/providers";
import {Avatar} from "../avatar/Avatar"
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";


fontawesome.library.add(faTimes);

export const ContactCard = ({contact}) => {
    const [, setSelectedContact] = useContext(ExpandedContactContext);

    const handleClose = () => setSelectedContact(undefined)

    return (
        <div className={'ContactCard'}>
            <button className={'ContactCard-close-button'} onClick={handleClose}>
                <FontAwesomeIcon icon="times" />
            </button>
            <Avatar contact={contact}/>
            <div className={'info'}>
                <div className={'row'}>
                    <span className={'ContactItem-surname'}>{contact.name.last}</span> {" "} {contact.name.first}
                </div>
                <table>
                    <tbody>
                    <tr className={'row'}>
                        <th className={'ContactCard-label'}>e-mail</th>
                        <td>{contact.email}</td>
                    </tr>
                    <tr className={'row'}>
                        <th className={'ContactCard-label'}>phone</th>
                        <td>{contact.phone}</td>
                    </tr>
                    <tr className={'row'}>
                        <th className={'ContactCard-label'}>street</th>
                        <td>{contact.location.street.name} {contact.location.street.number}</td>
                    </tr>
                    <tr className={'row'}>
                        <th className={'ContactCard-label'}>city</th>
                        <td>{contact.location.city}</td>
                    </tr>
                    <tr className={'row'}>
                        <th className={'ContactCard-label'}>state</th>
                        <td>{contact.location.state}</td>
                    </tr>
                    <tr className={'row'}>
                        <th className={'ContactCard-label'}>postcode</th>
                        <td>{contact.location.postcode}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}