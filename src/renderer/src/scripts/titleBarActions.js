import { exposedElectronApis } from "../../../constants/IpcConstants";

export const handleWindowClose = () => {
  console.log("handleWindowClose");
  window[exposedElectronApis.WINDOW_ACTIONS].closeApp();
};

export const handleMinimizeApp = () => {
  console.log("handleWindowClose");
  window[exposedElectronApis.WINDOW_ACTIONS].minimizeApp();
};

export const handleToggleFullScreen = () => {
  console.log("handleWindowClose");
  window[exposedElectronApis.WINDOW_ACTIONS].toggleFullScreen();
};
