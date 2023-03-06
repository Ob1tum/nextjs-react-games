import axios from 'axios';

export default class ChatCreation {
  async createChat(userId?: number, token?: string) {
    let header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    let res = await axios.get(
      `http://91.241.64.78:8088/api/chats/single-chats/user/${userId}`,
      header,
    );
    return res;
  }
}
