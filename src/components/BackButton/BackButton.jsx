import { IoArrowBackCircle } from "react-icons/io5"
import styles from './BackButton.module.css'
import { Link } from "react-router-dom";

import Back from '../../assets/back.png'


const BackButton = (props) => {

  const path = props.path


  return (
    <>
      <Link to={path} className={styles.link}>
        <IoArrowBackCircle className={styles.backButton} />
      </Link>
    </>
  )

}

export default BackButton
