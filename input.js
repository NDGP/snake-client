let conection
const stdin = process.stdin;

const setupInput = function(conn) {
  conection = conn
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = () => {
    stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    } 
    if (key === 'w'){
      setInterval(()=> {conn.write("Move: up")},500)
    }
    if (key === 's'){
  
      setInterval(()=> {conn.write("Move: down")},500)
    }
    if (key === 'a'){
  
      setInterval(()=> {conn.write("Move: left")},500)
    }
    if (key === 'd'){
    
      setInterval(()=> {conn.write("Move: right")},500)
    }
    if (key === 'b'){
      conn.write("Say: ass")
    }
  })   
}
handleUserInput()
return stdin;
}


module.exports = {setupInput}