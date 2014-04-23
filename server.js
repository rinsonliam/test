//var http = require("http");
//http.createServer(function (request, response) {
//    console.log(request);
//  console.log('Hello');
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World123456");
//  response.end();
//}).listen(8888);

var fs = require('fs');
fs.readdir(process.cwd(), function (err, files) {
    console.log('');
    if (!files.length) {
        return cosole.log('   \033[31m No files to show!\033[39m\n');
    }
    console.log('   Select which file or directory you want to see\n');
    function file(i) {
        var filename = files[i];
        fs.stat(__dirname + '/' + filename, function (err, stat) {
            if (stat.isDirectory()) {
                console.log('   ' + i + '   \033[36m' + filename + '/\033[39m');
            } else {
                console.log('   ' + i + '   \033[90m' + filename + '\033[39m');
            }

            i++;
            if (i == files.length) {
                console.log('');
                process.stdout.write('   \033[33m Enter your choice: \033[39m');
                process.stdin.resume();
                process.stdin.setEncoding('utf8');
            } else {
                file(i);
            }
        });
    }
    file(0);
});