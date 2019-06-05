const fs = require('fs')
let path = './'
let str = process.argv[2] //获取输入的参数

/**
替换函数
filename -- 需要替换的文件名称
str -- 替换规则，由命令行输入获得
**/
function replaceName(filename,str='',index){
  let newName = str + index +'.png' //去掉括号
  return newName
}

//读取文件目录内容
fs.readdir(path,(err,files)=>{
	  files = files.filter(m=>m.substring(m.lastIndexOf(".")+1)!=='js')  //过滤图片文件
  	files.map((filename,index)=>{
    let oldPath = path + filename
		let newName = replaceName(filename,str,index)
    let newPath = path + newName
    fs.rename(oldPath,newPath,(err)=>{
      if(!err){
        console.log(filename + ' => ' + newName)
      }
    })
  })
})
