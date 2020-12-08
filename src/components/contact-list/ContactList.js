import React, {useState, useEffect} from 'react'
import './ContactList.css'
import {HttpService} from "../../services/http";
import {ContactItem} from "../contact-item/ContactItem";
import {ExpandedContactContext} from "../../services/providers";

import config from "../../config";

const http = new HttpService();

const ContactListTabButton = ({tab, count, handleClick, active}) => {
    const classNames = 'ContactList-TabButton' + (active ? ' active': '')
    console.log(classNames)
    return (
        <button onClick={handleClick}
                className={classNames}
                disabled={count < 1}>
            {tab} <sub>{count}</sub>
        </button>
    )
}

export const ContactList = () => {
    const [tabs, setTabs] = useState()
    const [selectedTab, setSelectedTab] = useState(config.tabs[0])
    const [selectedContact, setSelectedContact] = useState()

    useEffect(() => {
        const splitIntoTabs = (contacts) => {
            const tabs = {}
            config.tabs.forEach(tabKey => tabs[tabKey] = []);
            contacts.forEach((contact) => {
                const tab = tabs[contact.name.last.substring(0, 1).toLocaleLowerCase()]
                tab && tab.push(contact)
            })
            return tabs
        }

        http.get(config.userUrl, {results: config.numberCards})
            .then(data => data.results)
            .then(data => splitIntoTabs(data))
            .then(data => setTabs(data))
    }, [])

    return (
        <ExpandedContactContext.Provider value={[selectedContact, setSelectedContact]}>
            <div>
                <h1>List Of Contacts</h1>
                <div className={'ContactList'}>
                    <div className={'ContactList-tabs-row'}>
                    {tabs && Object.keys(tabs).map((key, i) =>
                        <ContactListTabButton
                            key={key} tab={key}
                            count={tabs[key].length}
                            handleClick={() => setSelectedTab(key)}
                            active={key === selectedTab}
                        />
                    )}
                    </div>
                    <ul className={'ContactList-list'}>
                        {selectedTab && tabs && tabs[selectedTab].map((contact, i) =>
                            <ContactItem key={i} contact={contact}/>
                        )}
                    </ul>
                </div>
            </div>
        </ExpandedContactContext.Provider>
    )
}
