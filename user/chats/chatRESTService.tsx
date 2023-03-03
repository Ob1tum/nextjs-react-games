import axios from 'axios';

export default class ChatCreation {
  async createChat(userId?: number, token?: string) {
    let header = {
      headers: {
        Authorization: `${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTAwQG1haWwucnUiLCJpYXQiOjE2Nzc3NTc2NDcsImV4cCI6MTY3Nzg0NDA0N30.npv54EWA0Oef9zt2zHi3_YSkrcx98ffGX_BxscCCx1HEG0E6C0hRsyyN6pwoPowFvNjIqeud_9ULzjZD8dZIbw'}`,
      },
    };
    let res = await axios.get(
      `http://91.241.64.78:8088/api/chats/single-chats/user/${userId}`,
      header,
    );
    console.log(res);
    return res.data;
  }
}
