import styles from './styles.module.css'
import PropTypes from 'prop-types'
export const UserInfo = ({ card }) => {
  const { address, department, email, hire_date, name, phone, position_name } =
    card

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.info}>
        <p className={styles.field}>Телефон:</p>
        <p className={styles.value}>{phone}</p>
        <p className={styles.field}>Почта:</p>
        <p className={styles.value}>{email}</p>
        <p className={styles.field}>Дата приема:</p>
        <p className={styles.value}>{hire_date}</p>
        <p className={styles.field}>Должность:</p>
        <p className={styles.value}>{position_name}</p>
        <p className={styles.field}>Подразделение:</p>
        <p className={styles.value}>{department}</p>
      </div>
      <div className={styles.additional}>
        <h4 className={styles.subtitle}>Дополнительная информация:</h4>
        <p className={styles.text}>{address}</p>
      </div>
    </div>
  )
}

UserInfo.propTypes = {
  card: PropTypes.shape({
    address: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    hire_date: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    position_name: PropTypes.string.isRequired,
  }).isRequired,
}
