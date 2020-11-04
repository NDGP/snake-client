const { write } = require('fs');
const { Server } = require('http');
const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
    
    
  });

  conn.on('connect', () =>{
      console.log('a conetion has been made')
      conn.write('Name: Np')
      
      //setInterval(()=> {conn.write("Move: up")},1000)
  })
  
  conn.on(`data`, function(data){
    console.log(`${data}`) 
  })
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}


module.exports = {connect}