import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

// import {ClarifaiStub} from "clarifai-nodejs-grpc";
// import grpc from "@grpc/grpc-js";

// // Construct one of the stubs you want to use
// const stub = ClarifaiStub.json();

// // This will be used by every Clarifai endpoint call.
// const metadata = new grpc.Metadata();
// metadata.set("authorization", "Key {1c0e2280785b457ba129737e9410b9df}");

const particlesOptions = {
 particles: {
  number: {
    value: 100,
    density: {
      enable: true,
      value_area: 800
    }
  }
 }
}

class App extends Component {
  constructor(){
    super();
    this.state ={
      input: ''
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    
  //   stub.PostModelOutputs(
  //     {
  //         model_id: "aaa03c23b3724a16a56b629203edc62c",
  //         inputs: [{data: {image: {url: "https://samples.clarifai.com/face-det.jpg"}}}]
  //     },
  //     metadata,
  //     (err, response) => {
  //         if (err) {
  //             console.log("Error: " + err);
  //             return;
  //         }
  
  //         if (response.status.code !== 10000) {
  //             console.log("Received failed status: " + response.status.description + "\n" + response.status.details);
  //             return;
  //         }
  
  //         for (const c of response.outputs[0].data.concepts) {
  //             console.log(c.name + ": " + c.value);
  //         }
  //     }
  // );
  }

  render(){
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm  onInputChange={this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
        {/*<FaceRecognition />*/}
      </div>
    );
  }
  
}

export default App;
