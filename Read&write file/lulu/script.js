const fs = require('fs')

// fs.writeFile("abcd.txt","Hello callback",function(err , data){
//     if(err) console.log(err)
//         else console.log("File created")
// })


// fs.readFile('abcd.txt','utf8', function(err,data){
//     if(err) console.log(err);
//     else console.log(data);
    
// });


// fs.appendFile('index.txt','Kaise ho aap',function(err){
//     if(err) console.log(err)
//     else console.log("The data is append succesfully")
// })


// fs.rename('index.txt',"rename.txt",(err)=>{
//     if(err) console.log(err)
//     else console.log("Rename completed")
// })

// fs.unlink("abcd.txt",(err)=>{
//     if(err) console.log(err)
//     else console.log("unlink Completed")
// })

// fs.mkdir("lulu",function(err){
//     if(err)console.log(err)
//         else console.log("Folder created")
// })

// fs.readdir("lulu", {withFileTypes: true}, function(err, files){
//     if(err)console.log(err)
//         else console.log(files)
// })


// fs.rm("iamfolder.txt",{recursive:true},function(err){
//     if(err)console.log(err)
//     else console.log("removed folder")
// })




/////////////////////////////////////////////

// Second part synchronous API  

// fs.writeFileSync("sync.txt","I am sync file");
// console.log("createdFile")

// let data = fs.readFileSync("sync.txt","utf-8")
// console.log("Reading")