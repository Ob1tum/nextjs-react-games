import { io } from 'socket.io-client';

let token =
  'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJxQHEucSIsImlhdCI6MTY3NzgxNTYzNCwiZXhwIjoxNjc3OTAyMDM0fQ.omxxJlRa_K1blICsG1rePG9a8JQFmShPb44gUGbAfp5hJ303BQPuYTKyv34o7J28R6f2tLLmTpCrUTFQem7mEg';

export default class ChatService {
  socket = io('http://91.241.64.78:8088/ws', {
    extraHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  start = () => {
    console.log('Connecting to websocket');

    this.socket.on('connect', () => {
      console.log('Connected', this.socket.id);
    });

    //method for getting the messages
    // this.socket.on('message', (data) => {
    //   console.log(data);
    // });

    // socket.on('disconnect', () => {
    //   console.log('Disconnected', socket.id); // undefined
    // });
  };
  //method for sending the message
  // emit = (message: any) => {
  //   this.socket.emit('send', { message });
  // };
}
