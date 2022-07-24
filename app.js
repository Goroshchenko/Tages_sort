const fs = require("fs"),
    readline = require('readline'),
    array = []

     readline.createInterface({
         input: fs.createReadStream('input.txt'),
         terminal: false
     })
         .on('line', function(line) {
             array.push(line)
         })
         .on('close', function(){
             array.sort()                           // алгоритм внешней сортировки слиянием

             const output = fs.createWriteStream('output.txt')
             array.forEach(value => output.write(`${value}\n`));
             output.on('finish', () => {  });
             output.end();
         });




















