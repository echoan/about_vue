//创建http服务模块
//引入http模块
const http = require('http');
//引入url模块
const url = require('url');
//引入querystring模块
const querystring = require('querystring');
//引入文件读取模块
const fs = require('fs');
//引入multiparty模块
const {Form} = require('multiparty');
//引入封装的路由模块
const router = require('./router');
//引入文件的压缩模块
const zlib = require('zlib');
const {HTTP_PORT,HTTP_ROOT,HTTP_UPLOAD} = require('../config');
console.log(querystring);

//创建服务
http.createServer((req,res)=>{
    res.setHeader("access-control-allow-origin","*");
    // console.log(req.method);
    res.writeJson = function(json){
        //提示发送的是json格式数据
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify(json));
    }
   //针对get post 或者上传文件分别处理
   //解析数据
   //对于get请求获取pathname（相当于请求时候的url参数)和query（包含请求参数）
   let {pathname,query} = url.parse(req.url,true);
   console.log(query);
   console.log(pathname);
   //如果是post请求
   if(req.method == 'POST'){
      console.log(req.headers['content-type']);
    //如果是普通的post请求（没有上传文件）
       if(req.headers['content-type'].startsWith("application/x-www-form-urlencoded")){
           let arr = [];
           req.on('data',(buffer)=>{
               arr.push(buffer);
           });
           req.on('end',()=>{
               //得到请求的参数
               let postdata = querystring.parse(Buffer.concat(arr).toString());
               console.log(postdata);
               console.log(pathname);
               //寻找路由
               handle(req.method,pathname,{},postdata,{});
           })
       }else{
           //文件路由
           let form = new Form({
               uploadDir:HTTP_UPLOAD
           });
           form.parse(req);
           let post = {};
           let files = {};
           form.on('field',(name,value)=>{
               post[name] = value;
           });
           form.on('file',(name,file)=>{
               files[name] = value
           });
           form.on('error',(err)=>{
               console.log(err);
           });
           form.on('close',()=>{
               //找路由
               handle(req.method,pathname,query,post,files);
           })
       }
   }else{
       //处理get请求
       handle(req.method,pathname,query,{},{});
   }
   //封装的handel函数
   function handle(method,url,get,post,files){
          let fn = router.findRouter(method,url);
          //如果返回的是null
          if(!fn){
             //应该是读取文件的操作  // 文件   localhost:8080/index.html
             let filePath = HTTP_ROOT+pathname;
             fs.stat(filePath,(err,stat)=>{
                 if(err){
                     res.writeHead('404');
                     res.write('Not Found');
                     res.end();
                 }else{
                     //流的形式操作文件
                     let rs = fs.createReadStream(filePath);
                     let gz = zlib.createGzip();
                     rs.on('error',()=>{
                         console.log('出错了')
                     });
                     res.setHeader('content-encoding','gzip');
                     rs.pipe(gz).pipe(res);
                 }
             })
          }else{
              //请求接口
              fn(get,post,files,res);
          }
   }
}).listen(HTTP_PORT);
console.log('server is running at'+HTTP_PORT);

