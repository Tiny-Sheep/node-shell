process.stdout.write('hello');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  //check what is cmd is?
  //if data != pwd
  ////output an error message
  
  if(cmd != 'pwd'){
    //output error
    process.stdout.write('\nbash: '+ cmd + ': command not found');
  }
  if(cmd === 'pwd'){
    //get path
     process.stdout.write(process.cwd());   
  }
  //process.stdout.cwd();
  
  //process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

//

