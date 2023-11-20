import React from 'react'
import '../../style/UploadFile.css'
import { FaFileUpload } from "react-icons/fa";

function UploadButton() {
  return (
    <div class="upload-btn-wrapper">
      <button class="btn">Upload a file<i style="font-size:18px" class="fa">&#xf093;</i></button>
      <input type="file" name="myfile" />
  </div>
  )
}

export default UploadButton