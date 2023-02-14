import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'
import Avatar, { genConfig } from 'react-nice-avatar'

const SignupForm = props => {
  const navigate = useNavigate()
  const [config, setConfig] = useState({
    shape: 'circle',
    sex: '',
    faceColor: '',
    hairColor: '',
    hairStyle: '',
    hatStyle: 'none',
    hatColor: '',
    eyeStyle: '',
    glassesStyle: 'none',
    mouthStyle: '',
    shirtStyle: '',
    shirtColor: '',
    bgColor: '',
    noseStyle: '',
    isGradient: false
  })
  
  let avConfig = genConfig(config)
  console.log(avConfig)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    photo: avConfig,
  })



  const handleChangeAvatar = e => {
    props.updateMessage('')
    setConfig({
      ...config,
      [e.target.name]: e.target.value,
    })
  }


  // const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  console.log(avConfig)

  const handleChangePhoto = (evt) => {
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      // setPhotoData({ photo: avConfig })
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }


  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className={styles.container}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="confirm" className={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputContainer}>
          <button disabled={isFormInvalid()} className={styles.button}>
            Sign Up
          </button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </>
  )
}

export default SignupForm
