Topic to cover
write file [syntax->fs.writeFile(filename,data,callback)]
fs.writeFile("abcd.txt","Hello callback",function(err , data){
    if(err) console.log(err)
        else console.log("File created")
})
read file [syntax->fs.readFile(filename,utf-8,callback)]
fs.readFile('abcd.txt','utf-8'-(use this to see data in alphabet form), function(err,data){
    if(err) console.log(err);
    else console.log(data);
    
});

append file [syntax->fs.appendFile(filename,data,callback)]
fs.appendFile('index.txt','Kaise ho aap',function(err){
    if(err) console.log(err)
    else console.log("The data is append succesfully")
})

delete file Known as Unlink  [syntax=>fs.unlink(path,callback)]
fs.unlink("abcd.txt",(err)=>{
    if(err) console.log(err)
    else console.log("unlink Completed")
})

folder creation [syntax=>fs.mkdir(path,callback)]
fs.mkdir("lulu",function(err){
    if(err)console.log(err)
        else console.log("Folder created")
})

folder read[syntax=>fs.readdir(path,callback)]
fs.readdir("lulu",function(err){
//     if(err)console.log(err)
//         else console.log(files)
// }) it give us brief intro about files and folders but there is a mistake if we want to see or want to distinguished about folder and files we have to use {withFileTypes:true} by default it's value is false


folder delete [syntax=>fs.rmdir(path,callback)]
fs.rmdir("iamalsofolder",function(err){
    if(err)console.log(err)
    else console.log("removed folder")
}) this command only work if there is no data inside a folder and if we want to delete a folder with having data we have to use recursion and run this command => fs.rm("iamfolder.txt",{recursive:true},function(err){
    if(err)console.log(err)
    else console.log("removed folder")
})
 
rename [syntax=>fs.rename(oldpath,newpath,callback)]
fs.rename('index.txt',"rename.txt",(err)=>{
    if(err) console.log(err)
    else console.log("Rename completed")
})
  



// Second part synchronous API 
// these function only run after completetion and there is no callback inside it same as asynchronous all funciton were used but after there name we have to write Sync to make them synchronous

// fs.writeFileSync("sync.txt","I am sync file");
// console.log("createdFile")

// let data = fs.readFileSync("sync.txt","utf-8")
// console.log("Reading")



//Third part Routing
Routing = aap alag alag urls bana skte ho aur unpar kya hoga ye bhi tay kr skte ho




//MiddleWare
any function who pass the param of req res next is Known as middleware
like 
app.getfunction(req, res, next){
    res.send("this is request")
    next()
}