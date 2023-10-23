import React from 'react'
import styles from './styles.module.css'
import phoneIcon from '../../assets/phone-icon.svg'
import emailIcon from '../../assets/email-icon.svg'
import PropTypes from 'prop-types'
import { Card } from "../card/index.jsx";

export const List = ({ data, handleClick }) => {
  return (
    <main className={styles.main}>
      {data.map((card) => {
        const { email, name, phone } = card
        const id = `${email}${name}${phone}`
        return (
          <Card
            key={id}
            phoneIcon={phoneIcon}
            emailIcon={emailIcon}
            card={card}
            handleClick={handleClick}
          />
        )
      })}
    </main>
  )
}

List.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      hire_date: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      position_name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
}
