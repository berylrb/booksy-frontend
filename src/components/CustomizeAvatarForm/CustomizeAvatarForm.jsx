import styles from './CustomizeAvatarForm.module.css'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Avatar, { genConfig } from 'react-nice-avatar'

const CustomizeAvatarForm = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState({
    shape: 'circle',
    sex: props.profile.photo.sex,
    faceColor: props.profile.photo.faceColor,
    hairColor: props.profile.photo.hairColor,
    hairStyle: props.profile.photo.hairStyle,
    hatStyle: props.profile.photo.hatStyle,
    hatColor: props.profile.photo.hatColor,
    eyeStyle: props.profile.photo.eyeStyle,
    glassesStyle: props.profile.photo.glassesStyle,
    mouthStyle: props.profile.photo.mouthStyle,
    shirtStyle: props.profile.photo.shirtStyle,
    shirtColor: props.profile.photo.shirtColor,
    bgColor: props.profile.photo.bgColor,
    noseStyle: props.profile.photo.noseStyle,
    isGradient: false,
    eyeBrowStyle: props.profile.photo.eyeBrowStyle,
    earSize: props.profile.photo.earSize
  })

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  

  
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      props.handleUpdateProfile(form, props.profile)
    } catch (error) {
      console.log(error)
    }
  }
  
  const avConfig = genConfig(form)

  return (
    <>
      <Avatar style={{ width: '8rem', height: '8rem' }} {...avConfig} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="skin-color-input">Skin Color</label>
        <input
          name="faceColor"
          id="face-color-input"
          value={form.faceColor}
          type="color"
          onChange={handleChange}
        />
        <label htmlFor="group-name-input">Hair Color</label>
        <input
          name="hairColor"
          id="hair-color-input"
          value={form.hairColor}
          type="color"
          onChange={handleChange}
        />
        <label htmlFor="group-name-input">Hair Style</label>
        <select
          name="hairStyle"
          id="hair-style-input"
          onChange={handleChange}
          value={form.hairStyle}
        >
          <option
            value='thick'
          >
            Crew Cut
          </option>
          <option
            value='normal'
          >
            Mullet
          </option>
          <option
            value='womanShort'
          >
            Shoulder Length
          </option>
          <option
            value='womanLong'
          >
            Long
          </option>
        </select>
        <label htmlFor="group-name-input">Head Wear</label>
        <select
          name="hatStyle"
          id="hat-style-input"
          onChange={handleChange}
          value={form.hatStyle}
        >
          <option
            value='none'
          >
            None
          </option>
          <option
            value='turban'
          >
            Turban
          </option>
          <option
            value='beanie'
          >
            Beanie
          </option>
        </select>
        <label htmlFor="group-name-input">Head Wear Color</label>
        <input
          name="hatColor"
          id="hat-color-input"
          onChange={handleChange}
          value={form.hatColor}
          type='color'
        />
        <label htmlFor="eyebrow-input">Eyelashes</label>
        <select
          name="eyeBrowStyle"
          id="eyebrow-input"
          onChange={handleChange}
          value={form.eyeBrowStyle}
        >
          <option
            value='up'
          >
            No
          </option>
          <option
            value='upWoman'
          >
            Yes
          </option>
        </select>
        <label htmlFor="group-name-input">Eye Style</label>
        <select
          name="eyeStyle"
          id="eye-style-input"
          onChange={handleChange}
          value={form.eyeStyle}
        >
          <option
            value='smile'
          >
            Smiling
          </option>
          <option
            value='oval'
          >
            Oval
          </option>
        </select>
        <label htmlFor="group-name-input">Glasses</label>
        <select
          name="glassesStyle"
          id="glasses-style-input"
          onChange={handleChange}
          value={form.glassesStyle}
        >
          <option
            value='none'
          >
            None
          </option>
          <option
            value='round'
          >
            Round
          </option>
          <option
            value='square'
          >
            Square
          </option>
        </select>
        <label htmlFor="group-name-input">Mouth Style</label>
        <select
          name="mouthStyle"
          id="moyth-style-input"
          onChange={handleChange}
          value={form.mouthStyle}
        >
          <option
            value='laugh'
          >
            Laughing
          </option>
          <option
            value='smile'
          >
            Smiling
          </option>
          <option
            value='peace'
          >
            Gentle Smile
          </option>
        </select>
        <label htmlFor="group-name-input">Nose Style</label>
        <select
          name="noseStyle"
          id="nose-style-input"
          onChange={handleChange}
          value={form.noseStyle}
        >
          <option
            value='short'
          >
            Short
          </option>
          <option
            value='round'
          >
            Round
          </option>
          <option
            value='long'
          >
            Long
          </option>
        </select>
        <label htmlFor="group-name-input">Shirt Style</label>
        <select
          name="shirtStyle"
          id="hat-style-input"
          onChange={handleChange}
          value={form.shirtStyle}
        >
          <option
            value='hoody'
          >
            Hoodie
          </option>
          <option
            value='short'
          >
            T-Shirt
          </option>
          <option
            value='polo'
          >
            Polo
          </option>
        </select>
        <label htmlFor="shirt-color-input">Shirt Color</label>
        <input
          name="shirtColor"
          id="shirt-color-input"
          value={form.shirtColor}
          type="color"
          onChange={handleChange}
        />
        <label htmlFor="bg-color-input">Background Color</label>
        <input
          name="bgColor"
          id="bg-color-input"
          value={form.bgColor}
          type="color"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default CustomizeAvatarForm;
