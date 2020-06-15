import * as React from 'react';
import {StyleSheet,Text,View,VrButton,Image} from 'react-360';
import {NativeModules} from 'react-360';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect, setCurrent} from './Store';
//native modules
const {CustomLinkModule} = NativeModules.LinkingManager;

// projectIntroPanel
class ProjectIntro extends React.Component {
    render() {
      return(
        <View>
          <View style={styles.greetingBox}>
            <Image style={styles.greetingbg}
              source={require('./static_assets/greeting-bg.jpg')} />
          </View>
          <View style={styles.introTextView}>
            <Text style={styles.introText}>
              This VR website has four surfaces, including two cylinder surface, two flat surfaces, gallery function and used VrButton to achieve user interaction with external links.
            </Text>
            <Text style={styles.introText}>Built with React 360</Text>
          </View>
          <VrButton style={styles.backlink} onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://ellaqi.com/')}}>
            <View style={styles.linkView}>
              <Text style={styles.backLinkText}>Click to back to flat world</Text>
            </View>
          </VrButton>
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    introTextView:{
      width: 700,
      padding:100,
    },
    introText: {
      fontSize: 24,
      padding: 15,
    },
    backLinkText: {
      color: '#FFFFFF',
    },
    linkView: {
      zIndex: 10,
    },
    greetingbg: {
      resizeMode: "cover",
      width: 1000,
      height: 800,
      position: 'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      opacity: 0.6,
      zIndex: -1,
    },
    backlink: {
      borderColor: '#5B5A5A',
      borderWidth: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      position: 'absolute',
      top: 430,
      padding: 10,
      opacity: 1,
      zIndex: 1,
    },
    shadowStyle: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      
      elevation: 24,
    },
    shadowText: {
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    textColor: {
      color: '#C0C0C0',
    },
    //greeting panel
    panel: {
      // Fill the entire surface
      width: 1000,
      height: 800,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 0,
    },
    greetingtextContainer: {
      position: 'absolute',
      top: 250,
      padding: 10,
      zIndex: 1,
    },
    greetingtext: {
      fontSize:45,
      textAlign: 'center',
      color: '#FFFFFF',
      zIndex: 1,
    },
    greetingBox: {
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 0,
      margin: 0,
      zIndex: -1,
    },
   greetingIconContainerLeft: {
    position: 'absolute',
    top: 300,
    left: 50,
   },
   greetingIconContainerRight: {
    position: 'absolute',
    top: 300,
    right: 50,
   },
});

const ConnectedProjectIntro= connect (ProjectIntro);

export default ConnectedProjectIntro;