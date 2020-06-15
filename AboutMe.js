import * as React from 'react';
import {StyleSheet,Text,View,VrButton,Image} from 'react-360';
import {NativeModules} from 'react-360';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect, setCurrent} from './Store';
//native modules
const {CustomLinkModule} = NativeModules.LinkingManager;

class AboutMe extends React.Component {
    render() {
      return (
        <View style={styles.rightpanel} >
          <View style={styles.rcontainer} >
            <View style={{padding: 15,}}>
              <Text style={styles.righttitle}>Who is Ella</Text>
            </View>
            <Text style={styles.righttext}>Ella C. Qi is a web developer, designer, painter with a background in design and communication engineering. She is passionate about designing beautiful websites' visual effects and targeted in creating functional and creative websites. It is proud that she is doing the work she dreamed of when she was eight years old. 
              {"\n"} &nbsp;Contact her by
            </Text>
            <View style={styles.greetingBox}>
                <Image style={styles.greetingbg}
                source={require('./static_assets/ella.png')} />
            </View> 
            <View style={{paddingTop: 15, paddingLeft: 50, paddingBottom: 30}}>
              <VrButton style={styles.rightbutton} onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('me@ellaqi.com')}}>
                <Text style={styles.righttextlink}>me@ellaqi.com (email)</Text>
              </VrButton>
              <VrButton style={styles.rightbutton} onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://www.linkedin.com/in/ella-qi-b09037177/')}}>
                <Text style={styles.righttextlink}>LinkedIn</Text>
              </VrButton>
              <VrButton style={styles.rightbutton} onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://github.com/Ellaqi-tech')}}>
                <Text style={styles.righttextlink}>GitHub</Text>
              </VrButton>
            </View>
            <Text style={styles.rightSmallText}>She is not very busy lately, especially during the quarantine. So just contact her.</Text>
            <Text style={styles.righttext}>Click on contact links to contact your next developer/designer</Text> 
          </View>
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    greetingbg: {
        resizeMode: "cover",
        width: 420,
        height: 450,
        position: 'absolute',
        top:-90,
        left:550,
        right:0,
        bottom:0,
        opacity: 0.45,
        zIndex: -1,
      },
    rightbutton: {
      width:500,
      height: 35,
      paddingTop: 5,
      paddingLeft: 100,
    },
    righttext: {
      fontSize: 26,
      color: '#caf0f8',
      lineHeight: 60,
      fontWeight: 'bold',
    },
    righttextlink: {
      textDecorationLine: 'underline',
      fontSize: 26,
      color: '#48bfe3',
      lineHeight: 60,
      fontWeight: 'bold',
    },
    righttitle: {
      fontSize: 60,
      color: '#caf0f8',
      textAlign: 'center',
      fontWeight: '400',
    },
    rightVtitle: {
      width: 1000,
      height: 150,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightSmallText: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingTop: 10,
    },
    rightpanel: {
      width: 1000,
      height: 800,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      alignItems: 'center',
      zIndex: 0,
      position: 'relative',
      margin: 0,
      paddingTop: 150,
    },
    rcontainer: {
      width: 1000,
      height: 700,
      padding: 20,
    },
  });

const ConnectedAboutMe= connect (AboutMe);

export default ConnectedAboutMe;