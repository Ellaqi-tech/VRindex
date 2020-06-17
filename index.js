import {AppRegistry} from 'react-360';
import GreetingPanel from './GreetingPanel';
import AboutMe from './AboutMe';
import ProjectList from './ProjectList';
import ProjectIntro from './ProjectIntro';
import BottomPanel from './BottomPanel';
import TopPanel from './TopPanel';
import * as Store from './Store';
// import React from 'react';
// import Heart from '@bit/joshk.react-spinners-css.heart';

// export default <Heart color="#be97e8" />


AppRegistry.registerComponent('GreetingPanel', () => GreetingPanel);
AppRegistry.registerComponent('AboutMe', () => AboutMe);
AppRegistry.registerComponent('ProjectList', () => ProjectList);
AppRegistry.registerComponent('ProjectIntro', () => ProjectIntro);
AppRegistry.registerComponent('BottomPanel', () => BottomPanel);
AppRegistry.registerComponent('TopPanel', () => TopPanel);