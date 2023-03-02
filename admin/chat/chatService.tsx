import { io } from 'socket.io-client';

export default class ChatService {
  socket = io('http://localhost:3010');

  start = () => {
    console.log('Connecting to websocket');

    this.socket.on('connect', () => {
      console.log('Connected', this.socket.id);
    });

    this.socket.on('message', (data) => {
      console.log(data);
    });

    // socket.on('disconnect', () => {
    //   console.log('Disconnected', socket.id); // undefined
    // });
  };

  emit = (message: any) => {
    console.log('EMIT');
    this.socket.emit('send', { message });
  };
}
