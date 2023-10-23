import styles from './styles.module.css'
import PropTypes from 'prop-types'

export const Card = ({ card, phoneIcon, emailIcon, handleClick }) => {
  const { name, phone, email } = card
  const onClick = () => {
    console.log(card)
    handleClick(card)
  }
  return (
    <div className={styles.card} onClick={onClick}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.container}>
        <div className={styles.phone}>
          <img src={phoneIcon} alt="Телефон" className={styles.image} />
          <p className={styles.text}>{phone}</p>
        </div>
        <div  className={styles.email}>
          <img src={emailIcon} alt="Email" className={styles.image} />
          <p className={styles.text}>{email}</p>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    address: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    hire_date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    position_name: PropTypes.string.isRequired,
  }).isRequired,
  phoneIcon: PropTypes.string.isRequired,
  emailIcon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}
