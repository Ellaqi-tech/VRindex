import * as React from 'react';
import {StyleSheet,Text,View,VrButton,Image} from 'react-360';
import {NativeModules} from 'react-360';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect, setCurrent} from './Store';
//native modules
const {CustomLinkModule} = NativeModules.LinkingManager;

// projectIntroPanel
class BottomPanel extends React.Component {
    render() {
      return(
        <View style={styles.textView}>
          <Text style={styles.text}>You're on the top of the world.</Text>
          <Text style={styles.text}>Why not look up?</Text>
          <Text style={styles.smallText}>(if you find the font is upside down, rotate the screen by mouse (not the animal). Tracking the camera to automatically adjust the font orientation is the next step. Out of that service today.)</Text>
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    textView: {
      justifyContent: 'center',
      textAlign: 'center',
      width: 500,
      height: 200,
      borderColor: 'red', 
      marginTop: 150,
    },
    text:{
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 30,
      lineHeight: 200,
    },
    smallText: {
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 200,
    },
});

const ConnectedBottomPanel= connect (BottomPanel);

export default ConnectedBottomPanel;