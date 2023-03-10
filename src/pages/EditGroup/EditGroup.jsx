import styles from './EditGroup.module.css'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const EditGroup = (props) => {
  const { state } = useLocation()
  const [form, setForm] = useState(state)
  const [photoData, setPhotoData] = useState({})

  const handleChangePhoto = (evt) => {
    setPhotoData({ imgUrl: evt.target.files[0] })
  }


  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }


  return (
    <>
      <main className={styles.updateGroupContainer}>
        <h1>Edit Group</h1>
        <form onSubmit={handleSubmit}>
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

export default EditGroup;