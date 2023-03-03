import axios from 'axios';

let token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxQHEucSIsImlhdCI6MTY3NzgxNTYzNCwiZXhwIjoxNjc3OTAyMDM0fQ.omxxJlRa_K1blICsG1rePG9a8JQFmShPb44gUGbAfp5hJ303BQPuYTKyv34o7J28R6f2tLLmTpCrUTFQem7mEg';

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
