import Axios from 'axios';
import { SERVER } from '../configs/const';

const Room = {
  create: () => Axios.get(
    `${SERVER.BOSH_URL}/chat/rooms`,
    {
      roomName: 'teste',
      naturalName: 'teste-1',
      description: 'testando criacao de sala',
    }
  ),
  // create: () => Axios.post(`${SERVER.BOSH_URL}/plugins/restapi/v1/chatrooms`)
}

export default Room;
