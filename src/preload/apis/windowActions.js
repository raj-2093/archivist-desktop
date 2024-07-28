import { contextBridge, ipcRenderer } from "electron";
import {
  exposedElectronApis,
  windowActions,
} from "../../constants/IpcConstants";

export const initWindowActions = () => {
  contextBridge.exposeInMainWorld(exposedElectronApis.WINDOW_ACTIONS, {
    closeApp: () => {
      ipcRenderer.send(windowActions.CLOSE);
    },
    minimizeApp: () => {
      ipcRenderer.send(windowActions.MINIMIZE);
    },
    toggleFullScreen: () => {
      ipcRenderer.send(windowActions.TOGGLEFULLSCREEN);
    },
  });
};
