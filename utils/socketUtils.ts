import { Expedition } from "../models";

const socketUtils = {
  getRoom: async (roomName: String) => {
    try {
      const foundRoom = await Expedition.findOne({ name: roomName });
      if (!foundRoom) {
        return;
      }
      return foundRoom;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};

export default socketUtils;
