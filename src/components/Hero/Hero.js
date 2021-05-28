import React, { Component } from 'react';
import './Hero.css';
import { Dropbox } from 'dropbox';
import Logo from '../../Images/rbc-logo.png';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import RecordView from '../RecordView/RecordView';


class Hero extends Component {
  state = {
    file: '',
    uploadedVideo: ''
  }


  submitFileToDropbox = () => {
  const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;
  // var ACCESS_TOKEN = 'MDHmJIOU_MAAAAAAAAAAAbDv7vMfIjhv0gQexpG-UfwIPGaWRE2DvTu6F9Es0N_P';
  var ACCESS_TOKEN = 'sl.AxuAvN9xOeuB-kp6McDD4go1gVq_ZJSar4AFtlEZ28MDwEnvVO-Vwe7fRKigttuaH_UBfC20RYKD9pbT53A_DmLl_2nPuJ8M1QN0BzvBbI3iQSUKXb35LSfILx84wYjem85vAQ7j';
  var dbx = new Dropbox({ accessToken: ACCESS_TOKEN });
  // var file = this.state.file;
  var fileInput = document.getElementById('file-upload');
  var file = fileInput.files[0];
  console.log('FILE:', file);
      dbx.filesUpload({path: '/' + file.name, contents: file})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });   
  };

  render() {
    return (
      <div id="hero">
        <img src={Logo} className="logo"></img>
        <MobileView>
          <RecordView/>
        </MobileView> 
        {/* <MobileView> */}
          {/* <label
            className="video-record" 
            for="video-record">
              RECORD VIDEO
          </label>
          <input 
            id="video-record"
            type="file"
            accept="video/*" 
            capture="camera"
            onChange={this.handleInputChangeFor('file')}
          /> */}
        {/* </MobileView> */}
        {/* <label 
          className="file-upload"
          for="file-upload">
            UPLOAD VIDEO
        </label>
        <input 
          id="file-upload"
          type="file"
          onChange={this.handleInputChangeFor('file')}
        />
        <button
          onClick={() => this.logStuff()}>
            Upload
        </button> */}
      </div>
    );
  }
}

export default Hero;