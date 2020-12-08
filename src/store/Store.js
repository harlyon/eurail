import React, {useState, useEffect} from 'react'
import './ContactList.css'
import {HttpService} from "../../services/http";
import {ContactItem} from "../contact-item/ContactItem";
import {ExpandedContactContext} from "../../services/providers";

import config from "./config"

export const ContactList = () => {
    const [tabs, setTabs] = useState()
    const [selectedTab, setSelectedTab] = useState(config.tabs[0])
    const [selectedContact, setSelectedContact] = useState()

    return (
        <ExpandedContactContext.Provider value={[selectedContact, setSelectedContact]}>

        </ExpandedContactContext.Provider>
    )
}
