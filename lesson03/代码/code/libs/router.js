//封装路由模块
//封装思路 根据请求的方式，不同的url对应不同的处理方法
// 路由表  
/* {
    get: {
        "/aaa":fn1,
        "/bbb":fn2
    },
    post: {

    }
}

*/
let router = {};//创建一个路由的空对象
//封装添加路由的方法
function addRouter(method,url,fn){
    //将method和url转换为小写
    method = method.toLowerCase();
    url = url.toLowerCase();
    router[method] = router[method] || {};
    router[method][url] = fn;
}
//封装寻找路由的方法
function findRouter(method,url){
    method = method.toLowerCase();
    url = url.toLowerCase();
    //对于并没有配置的其他请求方式或者并不存在的url作出反应
    if(!router[method] || !router[method][url]){
        return null;
    }else{
        return router[method][url];
    }
}
//将路由模块导出
module.exports = {
    addRouter,
    findRouter
}