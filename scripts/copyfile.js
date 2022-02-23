
// 复制 package.json 文件
const targetFileP = path.resolve(__dirname, "../dist/package.json");
const originFileP = path.resolve(__dirname, "../package.json");
// 复制 redame 文件
const targetFileR = path.resolve(__dirname, "../dist/README.md");
const originFileR = path.resolve(__dirname, "../README.md");


fs.copyFile(originFileP,targetFileP,(err)=>{
  if (err) throw err;
    console.log('package.json 复制成功')
  
})

fs.copyFile(originFileR,targetFileR,(err)=>{
  if (err) throw err;
    console.log('README.md 复制成功')
  
})