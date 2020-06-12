import * as React from 'react';
//import 'react-native';
import {AppRegistry,StyleSheet,Text,View,VrButton,Image} from 'react-360';
import {NativeModules} from 'react-360';

//native modules
const {CustomLinkModule} = NativeModules.LinkingManager;

//greeting surface
export default class VRindex extends React.Component {
  render() {
    return (
      // greeting panel      
      <View style={styles.panel}>
        {/* background image */}
        <View style={styles.greetingBox}>
          <Image style={styles.greetingbg}
            source={require('./static_assets/blog-cover-ps.jpg')} />
        </View>
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
          <Text style={styles.greetingtext}>
            Good designs, not just beautiful
          </Text>
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

//left surface
export class leftsurface extends React.Component {
  render() {
    return (
      <View style={styles.leftpanel}>
        <View style={styles.lcontainer}>

          {/* <View style={styles.labelView}>
            <Text style={styles.labelText}>Personal Projects</Text>
          </View> */}

          {/* flex container for each row */}
          <View style={styles.projectFlexBox}>
            {/* box for each project */}
            <View style={styles.projectFlexCol}>
              <VrButton onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://qeclock.ellaqi.com/')}}>
                <View style={styles.projectImgView}>
                  <Image style={styles.projectImg}
                    source={require('./static_assets/qeclockF.png')} />
                </View>
              </VrButton>
              <View style={styles.projectTextView}>
                <Text style={styles.projectText}>Q.E.Clock</Text> 
                {/* {"\n"} */}
              </View>
            </View>
            {/* box for each project */}
            <View style={styles.projectFlexCol}>
              <VrButton onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://qerecipe.ellaqi.com/')}}>
                <View style={styles.projectImgView}>
                  <Image style={styles.projectImg}
                    source={require('./static_assets/qerecipeF.png')} />
                  </View>
              </VrButton>
              <View style={styles.projectTextView}>
                <Text style={styles.projectText}>Q.E.Recipe</Text>
              </View>
            </View>
            {/* box for each project */}
            <View style={styles.projectFlexCol}>
              <VrButton onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://pokemongame.ellaqi.com/')}}>
                <View style={styles.projectImgView}>
                  <Image style={styles.projectImg}
                    source={require('./static_assets/pokemonF.png')} />
                </View>
                </VrButton>
                <View style={styles.projectTextView}>
                  <Text style={styles.projectText}>Run Pokemon!</Text>
                </View>
              </View>
           </View>

          {/* <View style={styles.labelView}>
            <Text style={styles.labelText}>Team Projects</Text>
          </View> */}

          {/* flex container for each row */}
          <View style={styles.projectFlexBox}>

            <View style={styles.projectFlexCol}>
            <VrButton onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://chrisjones.codes/ticketdodger/')}}>
              <View style={styles.projectImgView}>
                <Image style={styles.projectImg}
                  source={require('./static_assets/tdF.png')} />
              </View>
              </VrButton>
              <View style={styles.projectTextView}>
                <Text style={styles.projectText}>TicketDodger</Text>
              </View>
            </View>

            <View style={styles.projectFlexCol}>
            <VrButton onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://2019restaurant.ellaqi.com/')}}>
              <View style={styles.projectImgView}>
                <Image style={styles.projectImg}
                  source={require('./static_assets/bbqhome.png')} />
              </View>
              </VrButton>
              <View style={styles.projectTextView}>
                <Text style={styles.projectText}>Pompeii BBQ Restaurant</Text>
              </View>
            </View>

            <View style={styles.projectFlexCol}>
            <VrButton onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://berryteam-4u.com/MotivationQuote/motivation.php')}}>
              <View style={styles.projectImgView}>
                <Image style={styles.projectImg}
                  source={require('./static_assets/berryF.png')} />
              </View>
              </VrButton>
              <View style={styles.projectTextView}>
                <Text style={styles.projectText}>BerryTeam</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
};

// example for creating a View that wraps two colored boxes and a text component in a row with padding.
export class rightsurface extends React.Component {
  render() {
    return (
      <View style={styles.rightpanel} >
        <View style={styles.rcontainer} >
          <View>
            <Text style={styles.righttitle}>Who is Ella</Text>
          </View>
          <Text style={styles.righttext}>Ella Qi is a web developer, designer, painter with a background in design and communication engineering. She is passionate about designing beautiful websites' visual effects and targeted in creating functional and creative websites. It is proud that she is doing the work she dreamed of when she was eight years old. 
            {"\n"}Contact her by
          </Text>
          
          {/* <VrButton style={styles.rightbutton} onClick={e =>{NativeModules.LinkingManager.openURL('https://ellaqi.com/contact-me/')}}></VrButton> */}
          <View style={{paddingTop: 15, paddingLeft: 50, paddingBottom: 15}}>
            <VrButton style={styles.rightbutton} onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('me@ellaqi.com')}}>
              <Text style={styles.righttext}>me@ellaqi.com (email)</Text>
            </VrButton>
            <VrButton style={styles.rightbutton} onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://www.linkedin.com/in/ella-qi-b09037177/')}}>
              <Text style={styles.righttext}>LinkedIn</Text>
            </VrButton>
            <VrButton style={styles.rightbutton} onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://github.com/Ellaqi-tech')}}>
              <Text style={styles.righttext}>GitHub</Text>
            </VrButton>
          </View>

          <Text style={styles.rightSmallText}>She is not very busy lately, especially during the quarantine. So just contact her.</Text>
          <Text style={styles.rightSmallText}>Click on the links to see what could happed</Text>
          
        </View>
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
    opacity: 0.75,
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
    //backgroundColor: '#000000',
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

  //right panel 
  rightbutton: {
    width:300,
    height: 30,
    padding: 9,
  },
  righttext: {
    fontSize: 26,
    color: '#FFFFFF',
    lineHeight: 60,
    fontWeight: 'bold',
  },
  righttitle: {
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
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
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    alignItems: 'center',
    zIndex: 0,
  },
  rcontainer: {
    width: 800,
    height: 600,
    padding: 20,
  },
//right panel ends
//left panel
leftpanel: {
  width: 1400,
  height: 700,
  backgroundColor: 'rgba(255, 255, 255, 0)',
  alignItems: 'center',
  zIndex: 0,
},
lcontainer: {
  width: 1080,
  height: 680,
  padding: 10,
},
projectImgView: {
  width: 290,
  height: 210,
  alignItems: 'center',
  justifyContent: 'center',
},
  projectImg: {
      resizeMode: "cover",
      width: 280,
      height: 200,
  },
  projectText: {
    fontSize: 24,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  projectFlexBox: {
    flex:1,
    flexDirection: 'row',
    padding: 0,
  },
  projectFlexCol: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  projectTextView: {
    width: 290,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // labelView: {
  //   width: 1080,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // labelText: {
  //   fontWeight: 'bold',
  //   fontSize: 24,
  // }


  
});

AppRegistry.registerComponent('VRindex', () => VRindex);
AppRegistry.registerComponent('rightsurface', () => rightsurface);
AppRegistry.registerComponent('leftsurface', () => leftsurface);