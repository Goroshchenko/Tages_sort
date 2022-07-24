
const fs = require('fs'),
    spawn = require('child_process').spawn,
    sort = spawn('./sort.sh'),
    writer = fs.createWriteStream('output.txt');

    sort.stdout.on('data', function (data) {
        writer.write(data)
    });

    sort.on('exit', function (code) {
        if (code) console.log(code);
        writer.end();
    });


