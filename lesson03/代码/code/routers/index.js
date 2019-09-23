//此index.js集中处理路由
const {addRouter} = require('../libs/router');
const list = require('./list');
const add = require('./add');
const del = require('./del');
addRouter('get','/list',list);
addRouter('post','/add',add);
addRouter('post','/del',del);