import { BrowserWindow, ipcMain } from "electron";
import { windowActions } from "../constants/IpcConstants";

/**
 *
 * @param {BrowserWindow} window
 */
export const setIpcListeners = (window) => {
  ipcMain.on(windowActions.CLOSE, function () {
    console.log("close clicked");
    window.close();
  });
  ipcMain.on(windowActions.MINIMIZE, function () {
    window.minimize();
  });
  ipcMain.on(windowActions.TOGGLEFULLSCREEN, function () {
    console.log("close clicked");
    window.isMaximized() ? window.unmaximize() : window.maximize();
  });
};
