var danmuRoll = require('./danmu.js');

window.data = {
  "danmu": [{
      "id": 1,
      "text": "2333",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 0.5
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 2,
      "text": "66666",
      "color": "#fff",
      "fontSize": "30px",
      "played": 0,
      "setTime": 9
    },
    {
      "id": 3,
      "text": "9999",
      "color": "#fff",
      "fontSize": "30px",
      "setTime": 8.5,
      "played": 0
    },
    {
      "id": 4,
      "text": "1111111",
      "color": "#fff",
      "fontSize": "30px",
      "setTime": 7.5,
      "played": 0
    },
    {
      "id": 5,
      "text": "444444",
      "color": "#fff",
      "fontSize": "30px",
      "setTime": 2.5,
      "played": 0
    },
    {
      "id": 6,
      "text": "444444",
      "color": "#fff",
      "fontSize": "30px",
      "setTime": 6.5,
      "played": 0
    },
    {
      "id": 7,
      "text": "6666",
      "color": "#fff",
      "fontSize": "30px",
      "setTime": 1.5,
      "played": 0
    },
    {
      "id": 8,
      "text": "99999",
      "color": "#fff",
      "fontSize": "30px",
      "setTime": 3.5,
      "played": 0
    },
    {
      "id": 9,
      "text": "444444",
      "color": "#fff",
      "fontSize": "30px",
      "setTime": 4.5,
      "played": 0
    },
    {
      "id": 10,
      "text": "444444",
      "color": "#fff",
      "fontSize": "30px",
      "setTime": 5.5,
      "played": 0
    }
  ]
}

window.$media = $('#danmuPlayer');

$media.on('timeupdate', function(e) {
  //播放器进度条
  var time = this.currentTime;
  //遍历数据
  $.map(data.danmu, function(data) {
    if (data.setTime < time && data.played == 0) {
      danmuRoll(data.text, data.color, data.fontSize,running);
      data.played = 1;
    }
  });

});


//bug
// $media.on('timeupdate',function(e){
//   //播放器进度条
//   var time = this.currentTime;
//   //遍历数据
//   $.map(data.danmu,function(data){
//     if(data.setTime < time){
//       console.log('ok');
//       danmuRoll(data.text, data.color, data.fontSize);
//       window.data.danmu.splice(data.id,1);
//     }
//   });
//
// });

//弹幕池
$.map(data.danmu, function(data) {
  var thisDanmu = $('<li class="clearfix">' +
    '<p class="danmuchi-text">' + data.text + '</p><p class="danmuchi-time">' + data.setTime + '</p>' +
    '</li>');
  $('#danmuchi').append(thisDanmu);
});

//播放器事件
$media.on('play', function() {
  console.log('It is play event');
  $('#displayDanmu').find('span').css('animation-play-state', 'running');
});

$media.on('pause', function() {
  console.log('It is pause event');
  $('#displayDanmu').find('span').css('animation-play-state', 'paused');
});

$media.on('ended',function(){
  console.log('It is ended event');
  $.map(data.danmu, function(data) {
    data.setTime = 0;
  });
});

// 封装播放器插件
//
// (function(factory) {
//   'use strict';
//   if (typeof define === 'function' && define.amd) {
//     define(['jquery'], factory);
//   } else if (typeof exports !== 'undefined') {
//     module.exports = factory(require('jquery'));
//   } else {
//     factory(jQuery);
//   }
//
// }(function($) {
//   var pluginName = 'danmuPlayer';
//   // 默认参数配置
//   var defaults = {};
//
//   // 缓存参数
//   function Plugin(element, options) {
//     this.options = $.extend({}, defaults, options);
//     this.init();
//   };
//
//   // 原型功能
//   Plugin.prototype.init = function() {
//     console.log($('#danmuPlayer '));
//   };
//
//   // 暴露接口
//   $.fn[pluginName] = function(options) {
//     var args = Array.prototype.slice.call(arguments, 1);
//     return this.each(function() {
//       var $this = $(this),
//         data = $this.data('plugin_' + pluginName);
//       if (!data) {
//         $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));
//       };
//       if (typeof options === 'string') {
//         data[options].apply(data, args);
//       }
//     });
//   };
//
// }));
