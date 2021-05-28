// Standalone example to demonstrate codeflow.
// Start the server, hit localhost:3000 on the browser, and click through.
// On the server logs, you should have the auth code, as well as the token
// from exchanging it. This exchange is invisible to the app user

const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();

// Setup app
const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// POST route
app.post('/dbx', (req, res) => {
  const file = req.body;

  console.log('REQ:', file)
  
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(error);
          res.sendStatus(500);
      });
}); // End POST

app.use(express.static("build"));

// Setup port to listen for requests
const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`Listening on ${port}!`);
});

// const fetch = require('node-fetch');
// const app = require('express')();

// const hostname = 'localhost';
// const port = 3000;

// const config = {
//   fetch,
//   clientId: 'dszfbs3udepp5c5',
//   clientSecret: 'p6m1pkpe7e1f2gv',
// };

// const { Dropbox } = require('dropbox'); // eslint-disable-line import/no-unresolved

// const dbx = new Dropbox(config);

// const redirectUri = `http://${hostname}:${port}/auth`;
// app.get('/', (req, res) => {
//   dbx.auth.getAuthenticationUrl(redirectUri, null, 'code', 'offline', null, 'none', false)
//     .then((authUrl) => {
//       res.writeHead(302, { Location: authUrl });
//       res.end();
//     });
// });

// // POST route
// app.post('/dbx', (req, res) => {
//   const file = req.body;
//   console.log('REQ:', file);
  
//   dbx.filesUpload({path: '/' + file.name, contents: file})
//       .then((result) => {
//           res.sendStatus(201);
//       })
//       .catch((error) => {
//           console.log(error);
//           res.sendStatus(500);
//       });
// }); // End POST

// app.get('/auth', (req, res) => { // eslint-disable-line no-unused-vars
//   const { code } = req.query;
//   console.log(`code:${code}`);

//   dbx.auth.getAccessTokenFromCode(redirectUri, code)
//     .then((token) => {
//       console.log(`Token Result:${JSON.stringify(token)}`);
//       dbx.auth.setRefreshToken(token.result.refresh_token);
//       dbx.usersGetCurrentAccount()
//         .then((response) => {
//           console.log('response', response);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// function uploadFile() {
        
//   const UPLOAD_FILE_SIZE_LIMIT = 150 * 1024 * 1024;
//   var dbx = new Dropbox.Dropbox({ accessToken: 'sl.AwsxpYBS_fgv7aD-u_MAfaN9xu3t5veSIR_2QuihCldfo1h1__2vhjFfCT_Qy-NmmTPYxOs9Y8jT-BWX49AIq8nqpfW-b5QTDztv6mhB-SKW07_HEfe_UviD4yO2VUD7--5qzJcK' });
//   var fileInput = document.getElementById('file-upload');
//   var file = fileInput.files[0];
  
//   if (file.size < UPLOAD_FILE_SIZE_LIMIT) { // File is smaller than 150 Mb - use filesUpload API
//     dbx.filesUpload({path: '/' + file.name, contents: file})
//       .then(function(response) {
//         var results = document.getElementById('results');
//         var br = document.createElement("br");
//         results.appendChild(document.createTextNode('File uploaded!'));
//         results.appendChild(br);
//         console.log(response);
//       })
//       .catch(function(error) {
//         console.error(error);
//       });
//   } else { // File is bigger than 150 Mb - use filesUploadSession* API
//     const maxBlob = 8 * 1000 * 1000; // 8Mb - Dropbox JavaScript API suggested max file / chunk size

//     var workItems = [];     
  
//     var offset = 0;

//     while (offset < file.size) {
//       var chunkSize = Math.min(maxBlob, file.size - offset);
//       workItems.push(file.slice(offset, offset + chunkSize));
//       offset += chunkSize;
//     } 
      
//     const task = workItems.reduce((acc, blob, idx, items) => {
//       if (idx == 0) {
//         // Starting multipart upload of file
//         return acc.then(function() {
//           return dbx.filesUploadSessionStart({ close: false, contents: blob})
//                     .then(response => response.session_id)
//         });          
//       } else if (idx < items.length-1) {  
//         // Append part to the upload session
//         return acc.then(function(sessionId) {
//          var cursor = { session_id: sessionId, offset: idx * maxBlob };
//          return dbx.filesUploadSessionAppendV2({ cursor: cursor, close: false, contents: blob }).then(() => sessionId); 
//         });
//       } else {
//         // Last chunk of data, close session
//         return acc.then(function(sessionId) {
//           var cursor = { session_id: sessionId, offset: file.size - blob.size };
//           var commit = { path: '/' + file.name, mode: 'add', autorename: true, mute: false };              
//           return dbx.filesUploadSessionFinish({ cursor: cursor, commit: commit, contents: blob });           
//         });
//       }          
//     }, Promise.resolve());
    
//     task.then(function(result) {
//       var results = document.getElementById('results');
//       results.appendChild(document.createTextNode('File uploaded!'));
//     }).catch(function(error) {
//       console.error(error);
//     });
    
//   }
//   return false;
// }

// app.listen(port);