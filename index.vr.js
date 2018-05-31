import React from 'react';
import {
  AppRegistry,
  AmbientLight,
  asset,
  Pano,
  Model,
  Text,
  View,
  VrButton,
} from 'react-vr';

export default class SpaceVR extends React.Component {
  state = {
    rotation: 90
  }
  rotate = () => {
    this.setState({
      rotation: this.state.rotation + 1,
    })
    requestAnimationFrame(this.rotate)
  }

  componentDidMount() {
    this.rotate()
  }

  render() {
    return (
      <View>
        <VrButton onClick={() => this.rotate() }/>
        <AmbientLight intensity={2.5} />
        <Model 
        style={{
          transform:[
            {translate:[-25,0,-70]},
            {scale:0.05},
            {rotateX:0},
            {rotateY:this.state.rotation},
            {rotateZ:-10}
          ]
        }}
        source={{obj:asset('earth.obj'), mtl: asset('earth.mtl')}}
        lit={true}
        />
        <Model
        style={{
          transform: [
            {translate: [30,10,-100]},
            {scale: 0.05},
          ]
        }}
        source={{
          obj:asset('moon.obj'), mtl:asset('moon.mtl')
        }}
        lit={true}
         />
        <Pano source={{
          uri: [
            '../static_assets/space_right.png',
            '../static_assets/space_left.png',
            '../static_assets/space_up.png',
            '../static_assets/space_down.png',
            '../static_assets/space_front.png',
            '../static_assets/space_back.png',
          ]
        }}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('SpaceVR', () => SpaceVR);
