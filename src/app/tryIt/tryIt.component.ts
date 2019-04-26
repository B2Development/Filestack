import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './try_it/try_it.html',
  styleUrls: ['./app.component.css']
})
export class TryITComponent {
  title = 'Try It';
}


const filestack = require('filestack-js');

const apikey = 'AuPpl6K6vTRqLCW8qPHyVz';
const options = {
  security: {
    policy: 'eyJleHBpcnkiOiAxNTU2Mjg5OTg2LCAiY2FsbCI6IFsicmVhZCIsICJzdGF0IiwgImNvbnZlcnQiLCAicGljayIsICJzdG9yZSJdfQ==',
    signature: '004841647dc63172fa3754e4ca11a64f1654d50cb42b0b2233aad22c2a47f8f1'
  }
};
const client = filestack.init(apikey, options);
const token = {};

const onProgress = (evt) => {
  console.log('Progress: ' + evt.totalPercent);
};

client.upload(__dirname + '/path/to/file', { onProgress }, {}, token)
  .then(res => {
    console.log('success: ', res)
  })
  .catch(err => {
    console.log(err);
  });
