import React, { useState } from 'react'
import templateImage from '../../../assets/template.png'

const DevImage = () => {
  const [file, setFile] = useState(null)

  const handleOnFileChange = (e) => {
    console.log('event', e.target.files)
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="image-section">
      <input
        type="file"
        id="devImageFile"
        onChange={handleOnFileChange}
        accept="image/*"
        multiple={false}
      />
      <label htmlFor="devImageFile">
        <img
          src={file || templateImage} alt="Template"
        />
        <span className="edit-icon">
          <i className="fa fa-edit" />
        </span>
      </label>
    </div>
  )
}

export default DevImage