import styles from './NewGroup.module.css'
import { useState } from 'react'
import clouds from '../../assets/clouds.jpg'

const NewGroup = (props) => {
  const [form, setForm] = useState({
    groupName: '',
    description: '',
    imgUrl: 'https://images.unsplash.com/photo-1560803262-95a9de00a057?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  })

  const [photoData, setPhotoData] = useState({})

  const handleChangePhoto = (evt) => {
    setPhotoData({ imgUrl: evt.target.files[0] })
  }


  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddGroup(form)
  }

  return (
    <>
      <main className={styles.newGroupMain}>
        <form onSubmit={handleSubmit}
          className={styles.newGroupForm}>
          <label htmlFor="group-name-input">Group Name</label>
          <input
            required
            type="text"
            name="groupName"
            id="group-name-input"
            value={form.groupName}
            placeholder="Group Name"
            onChange={handleChange}
          />
          <label htmlFor="desc-input">Description</label>
          <textarea
            required
            type="text"
            name="description"
            id="desc-input"
            value={form.description}
            placeholder="Description"
            onChange={handleChange} />

          <div className={styles.inputContainer}>
            <label htmlFor="photo-upload" className={styles.label}>
              Upload Photo
            </label>
            <input
              type="file"
              id="photo-upload"
              name="photo"
              onChange={handleChangePhoto}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </main>
    </>
  );
}

export default NewGroup;