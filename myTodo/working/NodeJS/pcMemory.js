const os = require('node:os');
console.log(os);
const totalMemory = os.totalmem();
console.log(`TOTAL MEMORY: ${totalMemory} MB`);

const convertBytes = function(bytes) {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  
    if (bytes == 0) {
      return "n/a"
    }
  
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
  
    if (i == 0) {
      return bytes + " " + sizes[i]
    }
  
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i]
  }

  const x = convertBytes(totalMemory);

  console.log(x);