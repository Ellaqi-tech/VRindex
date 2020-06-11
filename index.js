import * as React from 'react';
import {AppRegistry,StyleSheet,Text,View,VrButton,Image} from 'react-360';
import { YellowBox } from 'react-native';
//import {connect, setCurrent} from './Store';

export default class VRindex extends React.Component {
  render() {
    return (
      // greeting panel
      <View style={styles.panel}>
        <View style={styles.greetingtextContainer}>
          <Text style={styles.greetingtext}>
            Good designs, not just beautiful
          </Text>
        </View>
        {/* background image */}
        <View style={styles.greetingBox}>
          <Image style={{
              resizeMode: "cover",
              width: 1000,
              height: 800,
              opacity: 0.5,
              zIndex: 0,
            }}
            source={require('./static_assets/blog-cover-ps.jpg')} />
        </View>
        {/* arrow icons */}
        <View style={styles.greetingIconContainerLeft}>
          <Image style={{
              resizeMode: "cover",
              width: 40,
              height: 40,
            }}
            source={require('./static_assets/left-arrow.png')} />
        </View>
        <View style={styles.greetingIconContainerRight}>
          <Image style={{
              resizeMode: "cover",
              width: 40,
              height: 40,
            }}
            source={require('./static_assets/right-arrow.png')} />
        </View>
      </View>
    );
  }
};

//left surface
export class leftsurface extends React.Component {
  render() {
    return (
      <View style={styles.rightpanel}>
        <View style={styles.rcontainer}>
          {/* title */}
          <View>
            <Text>Web Projects</Text>
          </View>

          <View>
            <Text>Personal Projects</Text>
          </View>

          {/* flex container for each row */}
          <View style={{
            flex:1,
            flexDirection: 'row',
          }}>

              {/* box for each project */}
              <View style={{
                flex:1,
                flexDirection: 'colunm',
              }}>
                <View style={{
                  width: 200,
                  height: 160,
                }}>
                  <Image style={{
                      resizeMode: "cover",
                      width: 200,
                      height: 155,
                    }}
                    source={require('./static_assets/qeclockF.png')} />
                </View>
                <View style={{
                  width: 200,
                  height: 100,
                }}>
                  <Text style={styles.projectText}>Q.E.Clock{"\n"}
                  Get more detail
                  </Text>
                </View>
              </View>


              {/* box for each project */}
              <View style={{
                flex:1,
                flexDirection: 'colunm',
              }}>
                <View style={{
                  width: 200,
                  height: 160,
                }}>
                  <Image style={{
                      resizeMode: "cover",
                      width: 200,
                      height: 155,
                    }}
                    source={require('./static_assets/qerecipeF.png')} />
                </View>
                <View style={{
                  width: 200,
                  height: 100,
                }}>
                  <Text style={styles.projectText}>Q.E.Recipe{"\n"}
                    Get more detail
                  </Text>
                </View>
              </View>

              {/* box for each project */}
              <View style={{
                flex:1,
                flexDirection: 'colunm',
              }}>
                <View style={{
                  width: 200,
                  height: 160,
                }}>
                  <Image style={{
                      resizeMode: "cover",
                      width: 200,
                      height: 155,
                    }}
                    source={require('./static_assets/pokemonF.png')} />
                </View>
                <View style={{
                  width: 200,
                  height: 100,
                }}>
                  <Text style={styles.projectText}>Run Pokemon!{"\n"}
                    Get more detail
                  </Text>
                </View>
              </View>
          </View>

          <View>
            <Text>Team Projects</Text>
          </View>

          {/* flex container for each row */}
          <View style={{
            flex:1,
            flexDirection: 'row',
          }}>

              {/* box for each project */}
              <View style={{
                flex:1,
                flexDirection: 'colunm',
              }}>
                <View style={{
                  width: 200,
                  height: 160,
                }}>
                  <Image style={{
                      resizeMode: "cover",
                      width: 200,
                      height: 155,
                    }}
                    source={require('./static_assets/tdF.png')} />
                </View>
                <View style={{
                  width: 200,
                  height: 100,
                }}>
                  <Text style={styles.projectText}>TicketDodger{"\n"}
                  Get more detail
                  </Text>
                </View>
              </View>

              {/* box for each project */}
              <View style={{
                flex:1,
                flexDirection: 'colunm',
              }}>
                <View style={{
                  width: 200,
                  height: 160,
                }}>
                  <Image style={{
                      resizeMode: "cover",
                      width: 200,
                      height: 155,
                    }}
                    source={require('./static_assets/bbqhome.png')} />
                </View>
                <View style={{
                  width: 200,
                  height: 100,
                }}>
                  <Text style={styles.projectText}>BBQ{"\n"}
                    Get more detail
                  </Text>
                </View>
                </View>

                {/* box for each project */}
                <View style={{
                  flex:1,
                  flexDirection: 'colunm',
                }}>
                  <View style={{
                    width: 200,
                    height: 160,
                  }}>
                    <Image style={{
                        resizeMode: "cover",
                        width: 200,
                        height: 155,
                      }}
                      source={require('./static_assets/berryF.png')} />
                  </View>
                  <View style={{
                    width: 200,
                    height: 100,
                  }}>
                    <Text style={styles.projectText}>BerryTeam{"\n"}
                      Get more detail
                    </Text>
                  </View>
                </View>
              </View>
        </View>
      </View>
    );
  }
}


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
          <Text style={styles.rightSmallText}>She is not very busy lately, especially during the quarantine. So just contact her.</Text>
        </View>
      </View>
    );
  }
}
              {/* <VrButton style={styles.rightbutton}>me@ellaqi.com</VrButton>
              <VrButton style={styles.rightbutton}>LinkedIn</VrButton>
              <VrButton style={styles.rightbutton}>GitHub</VrButton> */}





const styles = StyleSheet.create({
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
    top: 300,
    padding: 10,
    zIndex: 1,
    backgroundColor: '#000000',
  },
  greetingtext: {
    fontSize: 35,
    textAlign: 'center',
    // color: '#000000',
    zIndex: 1,
  },
  greetingBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 0,
    margin: 0,
    zIndex: 0,
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
    height: 120,
    backgroundColor: '#000000',
  },
  righttext: {
    fontSize: 26,
    color: 'white',
    lineHeight: 60,
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
  },
  rightpanel: {
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    zIndex: 0,
  },
  rcontainer: {
    width: 800,
    height: 600,
    padding: 50,
  },
//right panel ends
//left panel
  projectText: {
    fontSize: 14,
    textAlign: 'center',
  },



  
});

AppRegistry.registerComponent('VRindex', () => VRindex);
AppRegistry.registerComponent('rightsurface', () => rightsurface);
AppRegistry.registerComponent('leftsurface', () => leftsurface);