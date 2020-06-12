// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import {ReactInstance, Surface, Location} from 'react-360-web';
import {Module} from 'react-360-web';

function init(bundle, parent, options = {}) {

  class CustomLinkModule extends Module {
    constructor() {
      super('CustomLinkModule'); // Makes this module available at NativeModules.MyModule
    }
    openInNewTab(url) {     // This method will be exposed to the React app
      window.open(url, '_blank');
    }

  };

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    //NativeModules:
    //Register custom modules at init time
    nativeModules: [
      new CustomLinkModule(),
    ],
    ...options,
  });

// const r360 = new ReactInstance(bundle, parent, {
//   // Add custom options here
//   fullScreen: true,
//   ...options,
// }
// );

   //NativeModules:
  // Register custom modules at init time
//   const r360Module = new ReactInstance(
//     'VRindex.bundle?platform=vr',
//     document.getElementById('container'), {
//     nativeModules: [
//       new CustomLinkModule(),
//     ]
//   }
// );

  //left panel
  const leftPanel = new Surface(
    3700,
    700,
    Surface.SurfaceShape.Cylinder
  );
  leftPanel.setAngle(-60, 0);
  r360.renderToSurface(
    r360.createRoot('leftsurface'),
    leftPanel,
  );
  
  //right panel
  const rightPanel = new Surface(
    1000,
    600,
    Surface.SurfaceShape.Flat
  );
  rightPanel.setAngle(1.51,0);
  r360.renderToSurface(
    r360.createRoot('rightsurface'),
    rightPanel,
  )

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('VRindex', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('nikita-taparia-wRcuI89O-_Q-unsplash.jpg',{ format: '2D', } //specify the layout of the background image with a second options argument.
  ));
  
}

window.React360 = {init};
