import React from 'react'
import { contactList, socialList } from '../../../../utils/cardList'
import FormTitle from '../../../UI/Title/FormTitle'
import cls from './Contacts.module.scss'


const Contacts = () => {
  return (
    <>
      <div className={cls.contactInfoBlock}>
        <div className={cls.contacts}>
          <FormTitle title='Contacts us:' />
          <ul className={cls.contactList}>
            {
              contactList.map(({ id, url, content, alt }) => (
                <li key={id}>
                  <img src={url} alt={alt} />
                  <span>{content}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={cls.socialLinks}>
          <FormTitle title='Follow us' />
          <div className={cls.socialIconsWrapper}>
            {
              socialList.map(({ id, url, route, alt }) => (
                <a href={route} key={id}>
                  <img src={url} alt={alt} />
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts