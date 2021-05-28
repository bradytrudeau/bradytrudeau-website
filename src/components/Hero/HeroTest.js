import React, { Component } from 'react';
import './HeroTest.css';
import { Dropbox } from 'dropbox';
import Logo from '../../Images/rbc-logo.png';
import Button from '@material-ui/core/Button';
import { FaCameraRetro } from 'react-icons/fa';
import VideoRecorder from 'react-video-recorder';
import RecordView from '../RecordView/RecordView';
import WebCam from '../WebCam/WebCam';

class HeroTest extends Component {
  state = {
    file: '',

  }

  // componentDidMount = () => {
  //   this.onPageLoad();
  // }

  // onPageLoad = () => {
  //   let constraintObj = { 
  //     audio: true, 
  //     video: true
  // }; 
  
  // //handle older browsers that might implement getUserMedia in some way
  // if (navigator.mediaDevices === undefined) {
  //     navigator.mediaDevices = {};
  //     navigator.mediaDevices.getUserMedia = function(constraintObj) {
  //         let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  //         if (!getUserMedia) {
  //             return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
  //         }
  //         return new Promise(function(resolve, reject) {
  //             getUserMedia.call(navigator, constraintObj, resolve, reject);
  //         });
  //     }
  // }else{
  //     navigator.mediaDevices.enumerateDevices()
  //     .then(devices => {
  //         devices.forEach(device=>{
  //             console.log(device.kind.toUpperCase(), device.label);
  //             //, device.deviceId
  //         })
  //     })
  //     .catch(err=>{
  //         console.log(err.name, err.message);
  //     })
  // }
  
  // navigator.mediaDevices.getUserMedia(constraintObj)
  // .then(function(mediaStreamObj) {
  //     //connect the media stream to the first video element
  //     let video = document.querySelector('video');
  //     if ("srcObject" in video) {
  //         video.srcObject = mediaStreamObj;
  //     } else {
  //         //old version
  //         video.src = window.URL.createObjectURL(mediaStreamObj);
  //     }
      
  //     video.onloadedmetadata = function(ev) {
  //         //show in the video element what is being captured by the webcam
  //         video.play();
  //     };
      
  //     //add listeners for saving video/audio
  //     let start = document.getElementById('btnStart');
  //     let stop = document.getElementById('btnStop');
  //     let vidSave = document.getElementById('vid2');
  //     let mediaRecorder = new MediaRecorder(mediaStreamObj);
  //     let chunks = [];
      
  //     start.addEventListener('click', (ev)=>{
  //         mediaRecorder.start();
  //         console.log(mediaRecorder.state);
  //     })
  //     stop.addEventListener('click', (ev)=>{
  //         mediaRecorder.stop();
  //         console.log(mediaRecorder.state);
  //     });
  //     mediaRecorder.ondataavailable = function(ev) {
  //         chunks.push(ev.data);
  //     }
  //     mediaRecorder.onstop = (ev)=>{
  //         let blob = new Blob(chunks, { 'type' : 'video/mp4;' });
  //         chunks = [];
  //         let videoURL = window.URL.createObjectURL(blob);
  //         vidSave.src = videoURL;
  //     }
  // })
  // .catch(function(err) { 
  //     console.log(err.name, err.message); 
  // });
  // };


  logStuff = () => {
  //   console.log('State:', this.state.file);
  //   const dbx = new Dropbox({
  //     accessToken: 'sl.Awyxz5fBo6AtWjDfvZHnn6RWn6wFl3tTEa5P7rN78lQQYc3-EkSMjD5UNoTOmr2W2LZUG4oCPSZHV8J_gK49ulibn_X1aet-kOTR9rsoi6O4c8n0Ye8dZBENhF-4vFFmewVwd1hT'
  //   });
  //   dbx.filesListFolder({
  //     path: ''
  //   }).then(res => console.log('Stuff:', res));
  const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;
  var ACCESS_TOKEN = 'sl.Awyxz5fBo6AtWjDfvZHnn6RWn6wFl3tTEa5P7rN78lQQYc3-EkSMjD5UNoTOmr2W2LZUG4oCPSZHV8J_gK49ulibn_X1aet-kOTR9rsoi6O4c8n0Ye8dZBENhF-4vFFmewVwd1hT';
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
  

  
  
  // if (file.size < UPLOAD_FILE_SIZE_LIMIT) { // File is smaller than 150 Mb - use filesUpload API
  //   dbx.filesUpload({path: '/' + file, contents: file})
  //     .then(function(response) {
  //       console.log(response);
  //     })
  //     .catch(function(error) {
  //       console.error(error);
  //     });
  // } else { // File is bigger than 150 Mb - use filesUploadSession* API
  //   const maxBlob = 8 * 1000 * 1000; // 8Mb - Dropbox JavaScript API suggested max file / chunk size

  //   var workItems = [];     
  
  //   var offset = 0;

  //   while (offset < file.size) {
  //     var chunkSize = Math.min(maxBlob, file.size - offset);
  //     workItems.push(file.slice(offset, offset + chunkSize));
  //     offset += chunkSize;
  //   } 
      
  //   const task = workItems.reduce((acc, blob, idx, items) => {
  //     if (idx === 0) {
  //       // Starting multipart upload of file
  //       return acc.then(function() {
  //         return dbx.filesUploadSessionStart({ close: false, contents: blob})
  //                   .then(response => response.session_id)
  //       });          
  //     } else if (idx < items.length-1) {  
  //       // Append part to the upload session
  //       return acc.then(function(sessionId) {
  //        var cursor = { session_id: sessionId, offset: idx * maxBlob };
  //        return dbx.filesUploadSessionAppendV2({ cursor: cursor, close: false, contents: blob }).then(() => sessionId); 
  //       });
  //     } else {
  //       // Last chunk of data, close session
  //       return acc.then(function(sessionId) {
  //         var cursor = { session_id: sessionId, offset: file.size - blob.size };
  //         var commit = { path: '/' + file.name, mode: 'add', autorename: true, mute: false };              
  //         return dbx.filesUploadSessionFinish({ cursor: cursor, commit: commit, contents: blob });           
  //       });
  //     }          
  //   }, Promise.resolve());
    
  //   task.then(function(result) {
  //     console.log('Result:', result);
      
  //   }).catch(function(error) {
  //     console.error(error);
  //   });
    
  // }
  // return false;
  }

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });   
  };

  render() {
    return (
      <div id="HeroTest">
        <img src={Logo} className="logo"></img>
        <h1
          className="icon"
        >
          <FaCameraRetro/>
        </h1> 
        <label
          className="video-record" 
          for="video-record">
            RECORD VIDEO
        </label>
        <input 
          id="video-record"
          type="file"
          accept="video/*" 
          capture="camera"
          // onChange={this.handleInputChangeFor('file')}
        />
        <label 
          className="file-upload"
          for="file-upload">
            UPLOAD VIDEO
        </label>
        <input 
          id="file-upload"
          type="file"
          onChange={this.handleInputChangeFor('file')}
        />
      </div>
    );
  }
}

export default HeroTest;