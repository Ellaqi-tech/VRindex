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

  class ProjectPanelModule extends Module {
    constructor() {
      super('ProjectPanelModule');
    }
    showProjectIntroPanel() {
    }
  }

  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    //NativeModules:
    //Register custom modules at init time
    nativeModules: [
      new CustomLinkModule(),
      new ProjectPanelModule(),
    ],
    ...options,
  });

  const leftPanel = new Surface(
    3700,
    700,
    Surface.SurfaceShape.Cylinder
  );
  leftPanel.setAngle(-60, 0);
  r360.renderToSurface(
    r360.createRoot('ProjectList'),
    leftPanel,
  );
  
  const rightPanel = new Surface(
    1000,
    800,
    Surface.SurfaceShape.Flat
  );
  rightPanel.setAngle(1.36,0);
  r360.renderToSurface(
    r360.createRoot('AboutMe'),
    rightPanel,
  )

  //projects intro panels
  const projectIntroPanel = new Surface(
    750,
    500,
    Surface.SurfaceShape.Flat
  );
  projectIntroPanel.setAngle(-3,-0.13);
  r360.renderToSurface(
    r360.createRoot('ProjectIntro'),
    projectIntroPanel,
  )

  const BottomPanel = new Surface(
    500,
    500,
    Surface.SurfaceShape.Flat
  );
  BottomPanel.setAngle(
    Math.PI / 1, /* yaw angle */
    -Math.PI / 2, /* pitch angle */
  );
  r360.renderToSurface(
    r360.createRoot('BottomPanel'),
    BottomPanel,
  )

//TopPanel
  const TopPanel = new Surface(
    500,
    500,
    Surface.SurfaceShape.Flat
  );
  TopPanel.setAngle(
    Math.PI / 1, /* yaw angle */
    Math.PI / 2, /* pitch angle */
  );
  r360.renderToSurface(
    r360.createRoot('TopPanel'),
    TopPanel,
  )

  r360.renderToSurface(
    r360.createRoot('GreetingPanel', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground('../assets/static_assets/vrbg5.png'); //specify the layout of the background image with a second options argument.
  
  
}

window.React360 = {init};
