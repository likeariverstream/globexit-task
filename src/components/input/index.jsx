import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import searchIcon from '../../assets/search-icon.svg'
import { debounce } from '../../utils/debounce.js'

export const Input = ({ value, onChange }) => {
  const [inputValue, setInputValue] = React.useState(value || '')
  const handleChange = (e) => {
    const { value } = e.target
    setInputValue(value)
    debounce(onChange, 800)(value.trim())
  }
  return (
    <div className={styles.container}>
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        className={styles.input}
      />
      <button className={styles.button}>
        <img src={searchIcon} alt="Поиск" className={styles.icon} />
        <div className={styles.icon} />
      </button>
    </div>
  )
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
