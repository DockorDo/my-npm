#!/usr/bin/env node

var argv = process.argv;

argv.shift();

var file_path = __dirname;
// 输出当前目录路径
var current_path = process.cwd();
console.log(current_path)

// 遍历查找到对应的指令，执行命令。
for(let i in argv){
    let _argv = argv[i];
    if(_argv == '-h' || _argv == '--help'){
        console.log('这是一个help info')
    }
}