import * as React from 'react';
import {StyleSheet,Text,View,VrButton,Image} from 'react-360';
import {NativeModules} from 'react-360';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';
import {connect, setCurrent} from './Store';
//native modules
const {CustomLinkModule} = NativeModules.LinkingManager;

//left surface
class ProjectList extends React.Component {
    showIntroPanel() {
    }
    render() {
      return (
        <View style={styles.leftpanel}>
          <View style={styles.lcontainer}>
            {/* flex container for each row */}
            <View style={styles.projectFlexBox}>
              {/* box for each project */}
              <AmbientLight intensity={1.0} color={'#ffffff'} />
          <PointLight
            intensity={0.8}
            style={{transform: [{translate: [0, 4, -1]}]}} />
              <View style={styles.projectFlexCol}>
                <VrButton onClick={e =>{NativeModules.CustomLinkModule.openInNewTab('https://qeclock.ellaqi.com/')}}>
                  <View style={styles.projectImgView}>
                    <Image style={styles.projectImg}
                      source={require('./static_assets/qeclockF.png')} />
                  </View>
                </VrButton>
                <View style={styles.projectTextView}>
                  <VrButton onClick={this.showIntroPanel}>
                    <Text style={styles.projectText}>Q.E.Clock</Text> 
                  </VrButton>
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

            <View style={{alignItems: 'center',justifyContent: 'center',}}>
                <Text style={styles.projectText}>Click on project picture to visit site</Text>
            </View>
          </View>
        </View>
      );
    }
  };

const styles = StyleSheet.create({
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
      color: '#caf0f8',
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
  });

const ConnectedProjectList= connect (ProjectList);

export default ConnectedProjectList;