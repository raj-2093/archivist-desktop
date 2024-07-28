import { ipcMain } from "electron";
import { dataActions } from "../../constants/IpcConstants";

export const setDataActionListeners = () => {
  ipcMain.on(dataActions.ADD_BOOK);
};
