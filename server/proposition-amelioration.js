// coyright olivier 

let id = 0;
io.on('connection', function(socket) {
  console.log('>> socket.io - connected');

  socket.on('whoIsTyping', function(user) {
    //console.log(user);
    io.emit('whoIsTyping', user);
  })

  socket.on('logManager', function({type ,user}) {
    let info ;
    if ( type === 'login' ) {
      info = `${user} vient de se connecter`;
    }
    if ( type === 'logout' ) {
      info = `${user} vient de se déconnecter`;
    }

    const message = {
      id: ++id,
      owner: 'Chatroom',
      content:  info,
      time: getCurrentHourMin(),
    }
    io.emit('send_message', message);
  })


  socket.on('send_message', function(message) {    
    message.time = getCurrentHourMin();
    message.id = ++id;
    //console.log(message)
    io.emit('send_message', message);
  });
});
