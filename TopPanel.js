import * as React from 'react';
import {StyleSheet,Text,View,VrButton,Image} from 'react-360';
import {NativeModules} from 'react-360';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect, setCurrent} from './Store';
//native modules
const {CustomLinkModule} = NativeModules.LinkingManager;

// projectIntroPanel
class TopPanel extends React.Component {
    render() {
      return(
        <View style={styles.textView}>
          <Text style={styles.text}>What are you looking up?</Text>
          <Text style={styles.text}>A developer/designer? Look what you found! I'm right here!</Text>
          <Text style={styles.text}>Click on the contact link to contact me!</Text>
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
});

const ConnectedTopPanel= connect (TopPanel);

export default ConnectedTopPanel;