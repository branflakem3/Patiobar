
const exec = require('child_process').exec;

startPan = function() {
  exec('panstart',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
};


restartPB = function() {
  exec('pbstart',
        (error, stdout, stderr) => {
            console.log(`${stdout}`);
            console.log(`${stderr}`);
            if (error !== null) {
                console.log(`exec error: ${error}`);
            }
        });
};

callScript = function(action) {
   switch(action){
      case'start':
         startPan();
         break;
      case'restart':
         restartPB();
   }     
};

exports.callScript = callScript;