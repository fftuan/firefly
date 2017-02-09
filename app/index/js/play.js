// 封装播放器插件

(function(factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }

}(function($) {
  var pluginName = 'danmuPlayer';
  // 默认参数配置
  var defaults = {};

  // 缓存参数
  function Plugin(element, options) {
    this.options = $.extend({}, defaults, options);
    this.init();
  };

  // 原型功能
  Plugin.prototype.init = function() {
    console.log($('#danmuPlayer '));
  };

  // 暴露接口
  $.fn[pluginName] = function(options) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
      var $this = $(this),
        data = $this.data('plugin_' + pluginName);
      if (!data) {
        $this.data('plugin_' + pluginName, (data = new Plugin(this, options)));
      };
      if (typeof options === 'string') {
        data[options].apply(data, args);
      };
    });
  };

}));


var $media = $('#danmuPlayer');

$media.on('timeupdate',function(e){
  console.log(this.currentTime);
});

$media.on('play',function(){
  console.log('It is play event');
});

$media.on('pause',function(){
  console.log('It is pause event');
});
