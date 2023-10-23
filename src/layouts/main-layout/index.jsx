import styles from './styles.module.css'

import PropTypes from 'prop-types'

export const MainLayout = ({ children }) => {
  return <main className={styles.layout}>{children}</main>
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
