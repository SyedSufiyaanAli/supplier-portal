import React from 'react'
import '../../style/UploadFile.css'

function UploadButton() {
  return (
    <div class="upload-btn-wrapper">
      <button class="Uploadbtn">Upload a file <i class="fa"> &#xf093; </i></button>
      <input type="file" name="myfile" />
  </div>
  )
}

export default UploadButton