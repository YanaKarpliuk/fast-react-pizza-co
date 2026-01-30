import styles from './Container.module.scss'

export default function Container({ narrow, children }) {
  return (
      <div className={`${styles.container} ${narrow ? styles.narrow : ''}`}>
        {children}
      </div>
  )
}
