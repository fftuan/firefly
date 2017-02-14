require('../../node_modules/bootstrap/dist/css/bootstrap.css');
//css文件引入
require('./css/list.css');


//--------- 加载测试用图片 ---------
var test_img = require('./images/little-whitches.jpg');
$('.content-left').find('img').attr('src', test_img);
$('.preview').find('img').attr('src', test_img);

// 设置body高度和paddingTop，让列表居中
var contentHeight = $('body').height();
var clientHeight = document.documentElement.clientHeight;
var bodyHeight = contentHeight > clientHeight? contentHeight: clientHeight;  // 取body或可见区域最大值作为body的高
var containerHeight = $('.container').height();  // 内容区域的高度
var bodyPaddingTop = Math.round((bodyHeight - $('.container').height()) / 2);

$('body').height(bodyHeight).css('paddingTop', bodyPaddingTop);