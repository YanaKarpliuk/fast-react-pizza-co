import styles from './Container.module.scss'

export default function Container({ grid, children }) {
  return (
      <div className={styles.container}>
        <div className={`${styles.layout} ${grid === 'two-col' && styles.twoCol}`}>
          {children}
        </div>
      </div>
  )
}
