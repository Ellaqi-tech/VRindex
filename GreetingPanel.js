import * as React from 'react';
import {StyleSheet,Text,View,VrButton,Image} from 'react-360';
import {NativeModules} from 'react-360';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect, setCurrent} from './Store';
//native modules
const {CustomLinkModule} = NativeModules.LinkingManager;

//greeting surface
class GreetingPanel extends React.Component {
  render() {
    return (
      // greeting panel      
      <View style={styles.panel}>
        {/* background image */}
        <AmbientLight intensity={1.0} color={'#ffffff'} />
        <PointLight
          intensity={0.8}
          style={{transform: [{translate: [0, 4, -1]}]}}
        />
        {/* arrow icons */}
        <View style={styles.greetingIconContainerLeft}>
          <Image style={styles.iconimg}
            source={require('./static_assets/left-arrow.png')} />
        </View>
        <View style={styles.greetingIconContainerRight}>
          <Image style={styles.iconimg}
            source={require('./static_assets/right-arrow.png')} />
        </View>

        <View style={styles.greetingtextContainer}>
          <Text style={styles.greetingtextBlock1}>
            <Text style={styles.greetingtext5}>Good&nbsp;</Text>
            <Text style={styles.greetingtext4}>designs</Text>
          </Text>
          <View style={{position:'absolute', width: 850, top: 150,}}>
          <Text style={styles.greetingtextBlock2}>
            <Text style={styles.greetingtext3}>not&nbsp;</Text>
            <Text style={styles.greetingtext2}>just&nbsp;</Text>
            <Text style={styles.greetingtext1}>beautiful</Text>
          </Text>
          </View>
        </View>

        <View style={{paddingTop: 70,justifyContent: 'center', alignItems: 'center',}}>
            <Text style={styles.backLinkText}>swipe left to view my projects</Text>
            <Text style={styles.backLinkText}>swipe right to meet designer Ella</Text>
        </View>
        <VrButton style={styles.backlink} onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://ellaqi.com/')}}>
          <View style={styles.linkView}>
            <Text style={styles.backLinkText}>Click here to back to flat world</Text>
          </View>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
    iconimg: {
      resizeMode: "cover",
      width: 40,
      height: 40,
      opacity: 0.90,
      margin: 10,
    },
    backLinkText: {
      color: '#757575',
      fontSize: 40,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      justifyContent: 'center',
      alignItems: 'center',
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
      opacity: 0.75,
      zIndex: -1,
    },
    backlink: {
      position: 'absolute',
      top: 490,
      padding: 5,
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
      top: 50,
      padding: 0,
      zIndex: 1,
    },
    greetingtext: {
      textAlign: 'center',
      color: '#caf0f8',
      zIndex: 1,
      padding: 0,
    },
    greetingtextBlock1: {
        fontSize:150,
        textAlign: 'center',
        zIndex: 1,
        fontWeight: '400',
        padding: 0,
    },
    greetingtextBlock2: {
        fontSize:90,
        textAlign: 'center',
        zIndex: 1,
        fontWeight: '400',
        alignItems:'center', 
        justifyContent:'center',
    },
    greetingtext1: {
        textAlign: 'center',
        color: '#5e60ce',
        zIndex: 1,
        fontWeight: 'bold',
        padding: 10,
        fontFamily: 'Roboto',
    },
    greetingtext2: {
    textAlign: 'center',
    color: '#5390d9',
    zIndex: 1,
    fontWeight: 'bold',
    padding: 10,
    fontFamily: 'Roboto',
    },
    greetingtext3: {
    textAlign: 'center',
    color: '#4ea8de',
    zIndex: 1,
    fontWeight: 'bold',
    padding: 10,
    fontFamily: 'Roboto',
    },
    greetingtext4: {
    textAlign: 'center',
    color: '#48bfe3',
    zIndex: 1,
    fontWeight: 'bold',
    padding: 10,
    fontFamily: 'Roboto',
    },
    greetingtext5: {
    textAlign: 'center',
    color: '#56cfe1',
    zIndex: 1,
    fontWeight: 'bold',
    padding: 10,
    fontFamily: 'Roboto',
    },
    greetingtext6: {
    fontSize:60,
    textAlign: 'center',
    color: '#0096C7',
    zIndex: 1,
    fontWeight: 'bold',
    padding: 10,
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
    top: 380,
    left: 150,
   },
    greetingIconContainerRight: {
    position: 'absolute',
    top: 430,
    right: 150,
   },
});

const ConnectedGreetingPanel = connect (GreetingPanel);

export default ConnectedGreetingPanel;