import { contextBridge, ipcRenderer } from "electron";
import { dataActions, exposedElectronApis } from "../../constants/IpcConstants";

const initDataActions = () => {
  contextBridge.exposeInMainWorld(exposedElectronApis.DATA_ACTIONS, {
    getAllBooks: async function () {
      ipcRenderer.send(dataActions.GET_ALL_BOOKS);
    },
  });
};
