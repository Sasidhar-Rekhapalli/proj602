import React from "react";
import axios from 'axios';


class UploadFile extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      filename : '',
      selectedFile: null
    }
  }
  
  fileSelectedHandler = async event => {
    let file = event.target.files[0].name;
    this.setState({
      filename: document.getElementById('file').value,
      selectedFile: event.target.files[0]
    });
  }

  fileUploadHandler = async event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append('filename', this.state.filename);
    formData.append('file', this.state.selectedFile);
  
    const config = {     
        headers: { 'content-type': 'multipart/form-data' }
    }
    
    axios.post("http://localhost:3001/isms/updateFile/1", formData, config)
        .then (res => {
            console.log(res.data);
            console.log(this.state.filename);
            console.log(formData);
        });
  }


  render(){
    return(
      <div>
        <form encType="multipart/form">
        <input type="file" name="file" id="file" placeholder="Upload Document" onChange={this.fileSelectedHandler}/>
        <button type="submit" onClick={this.fileUploadHandler}>Add File</button>
        </form>
      </div>
    );
  }
}

export default UploadFile;
