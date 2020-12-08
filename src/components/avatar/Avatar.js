import React from 'react'
import './Avatar.css'

export const Avatar = ({contact}) => {
    return (
        <div className={'Avatar'}>
            <img alt={'contact avatar'} src={contact.picture.medium}/>
        </div>
    )
}
