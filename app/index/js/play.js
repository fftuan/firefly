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

//JQ返回对象
var $media = $('#danmuPlayer');
//返回原生对象
var media = $('#danmuPlayer')[0];

var _totalTime = 0;

$media.on('timeupdate', function(e) {
  //播放器进度条
  var time = parseInt(this.currentTime, 10);
  // console.log(totalTime);
  $('#progressBar').css('width', (100 * time / _totalTime).toFixed(1) + '%');
  $('#nowTimeMinute').text(time);
  //遍历数据
  $.map(data.danmu, function(data) {
    if (data.setTime < time && data.played == 0) {
      danmuRoll(data.text, data.color, data.fontSize);
      data.played = 1;
    }
  });

  $('#displayDanmu').find('span').css('animation-play-state', 'running');

});

//弹幕池

function danmuchi() {
  var _addContent = '';
  $.map(data.danmu, function(data) {
    var thisDanmu = '<li class="clearfix">' +
      '<p class="danmuchi-text">' + data.text + '</p><p class="danmuchi-time">' + data.setTime + '</p>' +
      '</li>';
    _addContent += thisDanmu;
  });
  $('#danmuchi').append(_addContent);
};

danmuchi();

//播放器控件(H5的播放器可以使用原生来操作)

//播放/暂停
$('#controls-play').on('click', function() {
  if (media.paused) {
    media.play();
  } else {
    media.pause();
  }
});

//能播放获取总时间
$media.on('canplay', function() {
  _totalTime = parseInt(media.duration,10);
  var _totalTimeHour = Math.floor( _totalTime / 60);
  var _totalTimeMinute = parseInt(( _totalTime % 60) ,10);
  $('#totalTimeHour').text(_totalTimeHour);
  $('#totalTimeMinute').text(_totalTimeMinute);
});

//静音开关
$('#muted').on('click', function() {
  media.muted = !media.muted;
  if(media.muted){
    $('#volume').text('静音');
    $(this).text('开启');
  } else {
    $('#volume').text(parseInt($('#volume').width() * 100 / $('#volumeBar').width(),10) + '%');
    $(this).text('静音');
  }
  return false;
});

//音量控制
$('#volumeBar').on('mouseup', function(e) {
  media.muted = false;
  var $volume = $('#volume');
  var _mouseVal = e.pageX - $volume.offset().left;
  var _moveVal = 100 * _mouseVal / $('#volumeBar').width();
  $volume.css('width', _moveVal + '%');
  $volume.text(parseInt(_moveVal,10) + '%');
  media.volume = _moveVal / 100;
});

//全屏

$('#fullScreen').on('click',function(e){
  media.webkitEnterFullscreen();
  return;
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

$media.on('ended', function() {
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
