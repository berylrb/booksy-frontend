import styles from './Loading.module.css'
import LoadingIcon from '../../assets/loading-gif.gif'

const Loading = () => {
  return (
    <main className={styles.container}>
      <img src={LoadingIcon} alt="A cute owl" />
    </main>
  )
}

export default Loading