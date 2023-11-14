import { Component } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse, CurrentRecordingStatus } from 'capacitor-voice-recorder';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  audio: any;
  async som() {

    const url = await Filesystem.getUri({
      directory: Directory.Documents,
      path: '../../assets/beth.mp3',
    })

    this.audio = new Audio(url.uri);
    this.audio.play();
  }

  parar() {
    this.audio.pause();
  }

  async startRecording() {
    try {
      const result = await VoiceRecorder.startRecording();
      console.log('Recording started', result);
    } catch (error) {
      console.error('Error starting recording', error);
    }
  }

  async stopRecording() {
    try {
      const result = await VoiceRecorder.stopRecording();
      console.log('Recording stopped', result);
    } catch (error) {
      console.error('Error stopping recording', error);
    }
  }
  
}
