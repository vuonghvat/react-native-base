import {MMKV} from "react-native-mmkv";
import {log} from "./log";

const storage = new MMKV();

class Storage {
  static getString(key: string) {
    try {
      const value: string | undefined = storage.getString(key);
      // log("Get Value", key, "Successes!", value)

      return value;
    } catch (error) {
      throw error;
    }
  }

  static getNumber(key: string) {
    try {
      const value: number = storage.getNumber(key)!;
      // log("Get Value", key, "Successes!", value)

      return value;
    } catch (error) {
      throw error;
    }
  }

  static getBoolean(key: string) {
    try {
      const value: boolean = storage.getBoolean(key)!;
      // log("Get Value", key, "Successes!", value)

      return value;
    } catch (error) {
      throw error;
    }
  }

  static getAllKeys() {
    try {
      const value: Array<string> = storage.getAllKeys();
      // log("Get All Keys Successes!", value)

      return value;
    } catch (error) {
      throw error;
    }
  }

  static set(key: string, value: boolean | string | number) {
    try {
      return storage.set(key, value);
    } catch (error) {
      throw error;
    }
  }

  static delete(key: string) {
    try {
      log("Delete Successes!", key);

      return storage.delete(key);
    } catch (error) {
      throw error;
    }
  }

  static async clearAll() {
    try {
      storage.clearAll();
      log("ClearAll Successes!");
    } catch (e) {
      log("clearAllError:", e);
    }
  }
}

export default Storage;
