/* 
process.argv是命令行参数数组，第一个元素是 node，第二个元素是脚本文件名，
从第三个元素开始每个元素是一个运行参数。
*/
console.log(process.argv);

process.stdin.resume();

process.stdin.on('data', function(data) {
  process.stdout.write('read from console: ' + data.toString())
})