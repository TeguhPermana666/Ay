import roomsData from './data.json';

export const getRooms = () => {
  return roomsData.rooms;
};

export const getRoomDetails = (roomType) => {
  return roomsData.rooms.find(room => room.type === roomType);
};
