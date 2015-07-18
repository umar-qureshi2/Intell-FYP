/*!
	Colorbox v1.4.27 - 2013-07-16
	jQuery lightbox and modal window plugin
	(c) 2013 Jack Moore - http://www.jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(t,e,i){function o(i,o,n){var r=e.createElement(i);return o&&(r.id=te+o),n&&(r.style.cssText=n),t(r)}function n(){return i.innerHeight?i.innerHeight:t(i).height()}function r(t){var e=E.length,i=(j+t)%e;return 0>i?e+i:i}function l(t,e){return Math.round((/%/.test(t)?("x"===e?H.width():n())/100:1)*parseInt(t,10))}function h(t,e){return t.photo||t.photoRegex.test(e)}function s(t,e){return t.retinaUrl&&i.devicePixelRatio>1?e.replace(t.photoRegex,t.retinaSuffix):e}function a(t){"contains"in v[0]&&!v[0].contains(t.target)&&(t.stopPropagation(),v.focus())}function d(){var e,i=t.data(A,Z);null==i?(O=t.extend({},Y),console&&console.log&&console.log("Error: cboxElement missing settings object")):O=t.extend({},i);for(e in O)t.isFunction(O[e])&&"on"!==e.slice(0,2)&&(O[e]=O[e].call(A));O.rel=O.rel||A.rel||t(A).data("rel")||"nofollow",O.href=O.href||t(A).attr("href"),O.title=O.title||A.title,"string"==typeof O.href&&(O.href=t.trim(O.href))}function c(i,o){t(e).trigger(i),se.trigger(i),t.isFunction(o)&&o.call(A)}function u(){var t,e,i,o,n,r=te+"Slideshow_",l="click."+te;O.slideshow&&E[1]?(e=function(){clearTimeout(t)},i=function(){(O.loop||E[j+1])&&(t=setTimeout(J.next,O.slideshowSpeed))},o=function(){R.html(O.slideshowStop).unbind(l).one(l,n),se.bind(ne,i).bind(oe,e).bind(re,n),v.removeClass(r+"off").addClass(r+"on")},n=function(){e(),se.unbind(ne,i).unbind(oe,e).unbind(re,n),R.html(O.slideshowStart).unbind(l).one(l,function(){J.next(),o()}),v.removeClass(r+"on").addClass(r+"off")},O.slideshowAuto?o():n()):v.removeClass(r+"off "+r+"on")}function p(i){G||(A=i,d(),E=t(A),j=0,"nofollow"!==O.rel&&(E=t("."+ee).filter(function(){var e,i=t.data(this,Z);return i&&(e=t(this).data("rel")||i.rel||this.rel),e===O.rel}),j=E.index(A),-1===j&&(E=E.add(A),j=E.length-1)),g.css({opacity:parseFloat(O.opacity),cursor:O.overlayClose?"pointer":"auto",visibility:"visible"}).show(),V&&v.add(g).removeClass(V),O.className&&v.add(g).addClass(O.className),V=O.className,O.closeButton?P.html(O.close).appendTo(x):P.appendTo("<div/>"),$||($=q=!0,v.css({visibility:"hidden",display:"block"}),W=o(ae,"LoadedContent","width:0; height:0; overflow:hidden"),x.css({width:"",height:""}).append(W),_=b.height()+k.height()+x.outerHeight(!0)-x.height(),D=T.width()+C.width()+x.outerWidth(!0)-x.width(),N=W.outerHeight(!0),z=W.outerWidth(!0),O.w=l(O.initialWidth,"x"),O.h=l(O.initialHeight,"y"),J.position(),u(),c(ie,O.onOpen),B.add(S).hide(),v.focus(),O.trapFocus&&e.addEventListener&&(e.addEventListener("focus",a,!0),se.one(le,function(){e.removeEventListener("focus",a,!0)})),O.returnFocus&&se.one(le,function(){t(A).focus()})),w())}function f(){!v&&e.body&&(X=!1,H=t(i),v=o(ae).attr({id:Z,"class":t.support.opacity===!1?te+"IE":"",role:"dialog",tabindex:"-1"}).hide(),g=o(ae,"Overlay").hide(),L=t([o(ae,"LoadingOverlay")[0],o(ae,"LoadingGraphic")[0]]),y=o(ae,"Wrapper"),x=o(ae,"Content").append(S=o(ae,"Title"),M=o(ae,"Current"),K=t('<button type="button"/>').attr({id:te+"Previous"}),I=t('<button type="button"/>').attr({id:te+"Next"}),R=o("button","Slideshow"),L),P=t('<button type="button"/>').attr({id:te+"Close"}),y.append(o(ae).append(o(ae,"TopLeft"),b=o(ae,"TopCenter"),o(ae,"TopRight")),o(ae,!1,"clear:left").append(T=o(ae,"MiddleLeft"),x,C=o(ae,"MiddleRight")),o(ae,!1,"clear:left").append(o(ae,"BottomLeft"),k=o(ae,"BottomCenter"),o(ae,"BottomRight"))).find("div div").css({"float":"left"}),F=o(ae,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),B=I.add(K).add(M).add(R),t(e.body).append(g,v.append(y,F)))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),p(this))}return v?(X||(X=!0,I.click(function(){J.next()}),K.click(function(){J.prev()}),P.click(function(){J.close()}),g.click(function(){O.overlayClose&&J.close()}),t(e).bind("keydown."+te,function(t){var e=t.keyCode;$&&O.escKey&&27===e&&(t.preventDefault(),J.close()),$&&O.arrowKey&&E[1]&&!t.altKey&&(37===e?(t.preventDefault(),K.click()):39===e&&(t.preventDefault(),I.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+te,"."+ee,i):t("."+ee).live("click."+te,i)),!0):!1}function w(){var n,r,a,u=J.prep,p=++de;q=!0,U=!1,A=E[j],d(),c(he),c(oe,O.onLoad),O.h=O.height?l(O.height,"y")-N-_:O.innerHeight&&l(O.innerHeight,"y"),O.w=O.width?l(O.width,"x")-z-D:O.innerWidth&&l(O.innerWidth,"x"),O.mw=O.w,O.mh=O.h,O.maxWidth&&(O.mw=l(O.maxWidth,"x")-z-D,O.mw=O.w&&O.w<O.mw?O.w:O.mw),O.maxHeight&&(O.mh=l(O.maxHeight,"y")-N-_,O.mh=O.h&&O.h<O.mh?O.h:O.mh),n=O.href,Q=setTimeout(function(){L.show()},100),O.inline?(a=o(ae).hide().insertBefore(t(n)[0]),se.one(he,function(){a.replaceWith(W.children())}),u(t(n))):O.iframe?u(" "):O.html?u(O.html):h(O,n)?(n=s(O,n),U=e.createElement("img"),t(U).addClass(te+"Photo").bind("error",function(){O.title=!1,u(o(ae,"Error").html(O.imgError))}).one("load",function(){var e;p===de&&(U.alt=t(A).attr("alt")||t(A).attr("data-alt")||"",O.retinaImage&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),O.scalePhotos&&(r=function(){U.height-=U.height*e,U.width-=U.width*e},O.mw&&U.width>O.mw&&(e=(U.width-O.mw)/U.width,r()),O.mh&&U.height>O.mh&&(e=(U.height-O.mh)/U.height,r())),O.h&&(U.style.marginTop=Math.max(O.mh-U.height,0)/2+"px"),E[1]&&(O.loop||E[j+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",setTimeout(function(){u(U)},1))}),setTimeout(function(){U.src=n},1)):n&&F.load(n,O.data,function(e,i){p===de&&u("error"===i?o(ae,"Error").html(O.xhrError):t(this).contents())})}var g,v,y,x,b,T,C,k,E,H,W,F,L,S,M,R,I,K,P,B,O,_,D,N,z,A,j,U,$,q,G,Q,J,V,X,Y={transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,trapFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp)((#|\?).*)?$/i,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0},Z="colorbox",te="cbox",ee=te+"Element",ie=te+"_open",oe=te+"_load",ne=te+"_complete",re=te+"_cleanup",le=te+"_closed",he=te+"_purge",se=t("<a/>"),ae="div",de=0,ce={};t.colorbox||(t(f),J=t.fn[Z]=t[Z]=function(e,i){var o=this;if(e=e||{},f(),m()){if(t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;i&&(e.onComplete=i),o.each(function(){t.data(this,Z,t.extend({},t.data(this,Z)||Y,e))}).addClass(ee),(t.isFunction(e.open)&&e.open.call(o)||e.open)&&p(o[0])}return o},J.position=function(e,i){function o(){b[0].style.width=k[0].style.width=x[0].style.width=parseInt(v[0].style.width,10)-D+"px",x[0].style.height=T[0].style.height=C[0].style.height=parseInt(v[0].style.height,10)-_+"px"}var r,h,s,a=0,d=0,c=v.offset();if(H.unbind("resize."+te),v.css({top:-9e4,left:-9e4}),h=H.scrollTop(),s=H.scrollLeft(),O.fixed?(c.top-=h,c.left-=s,v.css({position:"fixed"})):(a=h,d=s,v.css({position:"absolute"})),d+=O.right!==!1?Math.max(H.width()-O.w-z-D-l(O.right,"x"),0):O.left!==!1?l(O.left,"x"):Math.round(Math.max(H.width()-O.w-z-D,0)/2),a+=O.bottom!==!1?Math.max(n()-O.h-N-_-l(O.bottom,"y"),0):O.top!==!1?l(O.top,"y"):Math.round(Math.max(n()-O.h-N-_,0)/2),v.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:O.w+z+D,height:O.h+N+_,top:a,left:d},e){var u=0;t.each(r,function(t){return r[t]!==ce[t]?(u=e,void 0):void 0}),e=u}ce=r,e||v.css(r),v.dequeue().animate(r,{duration:e||0,complete:function(){o(),q=!1,y[0].style.width=O.w+z+D+"px",y[0].style.height=O.h+N+_+"px",O.reposition&&setTimeout(function(){H.bind("resize."+te,J.position)},1),i&&i()},step:o})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(O.w=l(t.width,"x")-z-D),t.innerWidth&&(O.w=l(t.innerWidth,"x")),W.css({width:O.w}),t.height&&(O.h=l(t.height,"y")-N-_),t.innerHeight&&(O.h=l(t.innerHeight,"y")),t.innerHeight||t.height||(e=W.scrollTop(),W.css({height:"auto"}),O.h=W.height()),W.css({height:O.h}),e&&W.scrollTop(e),J.position("none"===O.transition?0:O.speed))},J.prep=function(i){function n(){return O.w=O.w||W.width(),O.w=O.mw&&O.mw<O.w?O.mw:O.w,O.w}function l(){return O.h=O.h||W.height(),O.h=O.mh&&O.mh<O.h?O.mh:O.h,O.h}if($){var a,d="none"===O.transition?0:O.speed;W.empty().remove(),W=o(ae,"LoadedContent").append(i),W.hide().appendTo(F.show()).css({width:n(),overflow:O.scrolling?"auto":"hidden"}).css({height:l()}).prependTo(x),F.hide(),t(U).css({"float":"none"}),a=function(){function i(){t.support.opacity===!1&&v[0].style.removeAttribute("filter")}var n,l,a=E.length,u="frameBorder",p="allowTransparency";$&&(l=function(){clearTimeout(Q),L.hide(),c(ne,O.onComplete)},S.html(O.title).add(W).show(),a>1?("string"==typeof O.current&&M.html(O.current.replace("{current}",j+1).replace("{total}",a)).show(),I[O.loop||a-1>j?"show":"hide"]().html(O.next),K[O.loop||j?"show":"hide"]().html(O.previous),O.slideshow&&R.show(),O.preloading&&t.each([r(-1),r(1)],function(){var i,o,n=E[this],r=t.data(n,Z);r&&r.href?(i=r.href,t.isFunction(i)&&(i=i.call(n))):i=t(n).attr("href"),i&&h(r,i)&&(i=s(r,i),o=e.createElement("img"),o.src=i)})):B.hide(),O.iframe?(n=o("iframe")[0],u in n&&(n[u]=0),p in n&&(n[p]="true"),O.scrolling||(n.scrolling="no"),t(n).attr({src:O.href,name:(new Date).getTime(),"class":te+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",l).appendTo(W),se.one(he,function(){n.src="//about:blank"}),O.fastIframe&&t(n).trigger("load")):l(),"fade"===O.transition?v.fadeTo(d,1,i):i())},"fade"===O.transition?v.fadeTo(d,0,function(){J.position(0,a)}):J.position(d,a)}},J.next=function(){!q&&E[1]&&(O.loop||E[j+1])&&(j=r(1),p(E[j]))},J.prev=function(){!q&&E[1]&&(O.loop||j)&&(j=r(-1),p(E[j]))},J.close=function(){$&&!G&&(G=!0,$=!1,c(re,O.onCleanup),H.unbind("."+te),g.fadeTo(O.fadeOut||0,0),v.stop().fadeTo(O.fadeOut||0,0,function(){v.add(g).css({opacity:1,cursor:"auto"}).hide(),c(he),W.empty().remove(),setTimeout(function(){G=!1,c(le,O.onClosed)},1)}))},J.remove=function(){v&&(v.stop(),t.colorbox.close(),v.stop().remove(),g.remove(),G=!1,v=null,t("."+ee).removeData(Z).removeClass(ee),t(e).unbind("click."+te))},J.element=function(){return t(A)},J.settings=Y)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {
  Drupal.behaviors.ageVerification = {
    attach: function(context,settings) {
      if($('.node-app .group-overview').length > 0 && $('.node-app .field-name-field-screenshot').length > 0) {
        replace = $('.node-app .field-name-field-screenshot .field-label').text().replace(':','');
        $('.node-app .field-name-field-screenshot .field-label').text(replace);
      }
      
      if($('.node-app .group-overview').length > 0 && $('.node-app .field-name-field-videos').length > 0) {
        replace = $('.node-app .field-name-field-videos .field-label').text().replace(':','');
        $('.node-app .field-name-field-videos .field-label').text(replace);
      }
      
      if($('.node-app .group-overview').length > 0 && $('.node-app .field-name-field-downloads').length > 0) {
        replace = $('.node-app .field-name-field-downloads .field-label').text().replace(':','');
        $('.node-app .field-name-field-downloads .field-label').text(replace);
      }
    }
  };
})(jQuery);;
(function($) {
  
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "%26")
      .replace(/\?/g, "%3F")
  }
  
  $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  //RVC utilize a softer enforcement for using proxy, previous was fully qualified domain.
    if(options.url.indexOf('http://gfws') == 0) {
      var addOn = '';
      if(options.url.indexOf('?') == -1 && typeof(options.data) != 'undefined' && options.type == 'GET') {
        options.url += '?' + options.data;
        options.data = null;
      }
      options.url = '/proxy?proxy_url=' + escapeHtml(encodeURIComponent(options.url));
    }
  });
})(jQuery);;
(function ($) {

Drupal.behaviors.viewsextras = {
  attach: function (context, settings) {	
	  //this makes the ctools autosubmit work for checkboxes and radios - not just selects
	  //borrowed from patch - http://drupal.org/node/1181692
	  //should be in ctools module, but isn't yet
	  $('*[type!=input].ctools-auto-submit:not(.ctools-auto-submit-processed)')
		.addClass('.ctools-auto-submit-processed')
		.change(function() {
		  $(this.form).find('.ctools-auto-submit-click').click();
	  });  
    
    $('.ctools-auto-submit-full-form').children('[type!=input]:not(.ctools-auto-submit-processed)')
		.addClass('.ctools-auto-submit-processed')
		.change(function() {
		  $(this.form).find('.ctools-auto-submit-click').click();
	  });
	
	  //make collapsed fieldset inline if inline option is set
	  $('.veft-collapsed legend').each(function(){
		  $widget = $(this).parent().parent().parent();
		  if ($(this).parent().hasClass('collapsed')) {
			  $widget.addClass('veft-collapsed');
			  $widget.removeClass('veft-expanded');
		  }
		  else {
			  $widget.addClass('veft-expanded');
			  $widget.removeClass('veft-collapsed');
		  }
		  
		  $(this).mouseup(function(){
			  if ($(this).parent().hasClass('collapsed')) {
				  $widget.addClass('veft-expanded');
				  $widget.removeClass('veft-collapsed');
			  }
			  else {
				  $widget.addClass('veft-collapsed');
				  $widget.removeClass('veft-expanded');
			  }
		  });
	  });
  }
}
	
}(jQuery));;
(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            }
            
            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            }
          
            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
            
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }

  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    }

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;

(function($){$.toJSON=function(o)
{if(typeof(JSON)=='object'&&JSON.stringify)
return JSON.stringify(o);var type=typeof(o);if(o===null)
return"null";if(type=="undefined")
return undefined;if(type=="number"||type=="boolean")
return o+"";if(type=="string")
return $.quoteString(o);if(type=='object')
{if(typeof o.toJSON=="function")
return $.toJSON(o.toJSON());if(o.constructor===Date)
{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array)
{var ret=[];for(var i=0;i<o.length;i++)
ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;if(typeof o[k]=="function")
continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};$.quoteString=function(string)
{if(string.match(_escapeable))
{return'"'+string.replace(_escapeable,function(a)
{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(jQuery);;
/*jshint eqnull:true */
/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (value === null) {
				options.expires = -1;
			}

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				encodeURIComponent(key), '=', config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
			if (decode(parts.shift()) === key) {
				var cookie = decode(parts.join('='));
				return config.json ? JSON.parse(cookie) : cookie;
			}
		}

		return null;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== null) {
			$.cookie(key, null, options);
			return true;
		}
		return false;
	};

})(jQuery, document);
;

// set global variables "site" as array
var site=new Array();

// multiple items display related data
site['global']=new Array();
site['global']['siteDomain']="http://"+document.domain;
site['global']['defaultTemplate']='';
site['global']['disqus_pub_key']='PF65qmhbbj8AUE9juCwygZyRXnwP4kTkXPW87rqOEai2N6iEacLh1g4MVetq5vYv';

// initiate variable for dynamic module loading
site['activeModule']=new Array();

// STK related data - YOU NEED TO ALSO SET PATH! otherwise it will break!
site['services']=new Array();
site['services']['path']=Drupal.settings.nv_services_url + '/controller.php/com.nvidia.services';
site['services']['errorNoData']=Drupal.t('Sorry, your search did not match any documents');
site['services']['errorFailed']=Drupal.t('Sorry, this functionality is temporarily unavailable');
site['services']['paginationTip']=Drupal.t('click here and enter page #');

// CI settings for service
site['services']['CIlink']='http://nvidia.links.channelintelligence.com/oemsites/7240466/ws/CDI_PL_Feed/CDI_PL_JSON_function.asp';

site['services']['Optimize']=new Array();
site['services']['Optimize'][0]=Drupal.t('Optimize');
site['services']['Optimize']['OPS']='getAllOPS';
site['services']['Optimize']['Guides']='getAllGuides';

site['services']['Hardware']=new Array();
site['services']['Hardware'][0]=Drupal.t('Hardware');
site['services']['Hardware']['GPUs']='getAllGPUs';
site['services']['Hardware']['Desktops']='getAllDesktops';
site['services']['Hardware']['Notebooks']='getAllNotebooks';
site['services']['Hardware']['Netbooks']='getAllNetbooks';
site['services']['Hardware']['Motherboards']='getAllMotherboards';
site['services']['Hardware']['PowerSupplies']='getAllPowerSupply';
site['services']['Hardware']['Cases']='getAllCases';
site['services']['Hardware']['threeDKits']='get3DKits';
site['services']['Hardware']['threeDMonitors']='getAllMonitors';

site['services']['GamesandApps']=new Array();
site['services']['GamesandApps'][0]=Drupal.t('GamesAndApps');
site['services']['GamesandApps']['Items']='getAllItems';

site['services']['Feedback']=new Array();
site['services']['Feedback'][0]=Drupal.t('Feedback');
site['services']['Feedback']['Reviews']='getReviews';

site['services']['News']=new Array();
site['services']['News'][0]=Drupal.t('News');
site['services']['News']['News']='getAllNews_old';

// translated paths
site['path']=new Array();
site['path']['Optimize']=new Array();
site['path']['Optimize'][0]='/optimize';
site['path']['Optimize']['OPS']='/optimize/optimal-game-settings';
site['path']['Optimize']['Guides']='/optimize/guides';

site['path']['Hardware']=new Array();
site['path']['Hardware'][0]='/hardware';
site['path']['Hardware']['GPUs']='/hardware/desktop-gpus';
site['path']['Hardware']['Desktops']='/hardware/desktop-pcs';
site['path']['Hardware']['Notebooks']='/hardware/notebooks';
site['path']['Hardware']['Netbooks']='/hardware/netbooks';
site['path']['Hardware']['Motherboards']='/hardware/motherboards';
site['path']['Hardware']['PowerSupplies']='/hardware/power-supplies';
site['path']['Hardware']['Cases']='/hardware/power-supplies';
site['path']['Hardware']['threeDKits']='/hardware/3d-vision-kits';
site['path']['Hardware']['threeDMonitors']='/hardware/3DMonitors';
site['path']['Hardware']['Technologies']='/hardware/technology';

site['path']['GamesandApps']=new Array();
site['path']['GamesandApps'][0]='/games-applications';
site['path']['GamesandApps']['Items']='/games-applications';
site['path']['GamesandApps']['Apps']='/games-applications/pc-applications';
site['path']['GamesandApps']['Games']='/games-applications/pc-games';

site['path']['Feedback']=new Array();
site['path']['Feedback'][0]='';
site['path']['Feedback']['Reviews']='';

site['path']['News']=new Array();
site['path']['News'][0]='/whats-new';	
site['path']['News']['News']='/whats-new/articles';	

site['path']['Drivers']=new Array();
site['path']['Drivers'][0]='/drivers';
site['path']['Drivers']['Results']='/drivers/results';

site['path']['Community']=new Array();
site['path']['Community'][0]='/community';

site['path']['Support']=new Array();
site['path']['Support'][0]='/support';
site['path']['Support']['Feedback']='/support/feedback';

site['path']['Search']=new Array();
site['path']['Search'][0]='/search';

// dummy images that will be inserted if actual images is not available
site['dummyImage']=new Array();
site['dummyImage']['SELECTED']=''; // here we will populate whatever has been selected (set in document.ready in header.js)

// translated labes of section, used for example in SEARCH functionality
site['label']=new Array();
site['label']['Optimize']=new Array();
site['label']['Optimize'][0]=Drupal.t('Optimize');

site['label']['Hardware']=new Array();
site['label']['Hardware'][0]=Drupal.t('Hardware');

site['label']['GamesandApps']=new Array();
site['label']['GamesandApps'][0]=Drupal.t('Games &amp; Apps');

site['label']['News']=new Array();
site['label']['News'][0]=Drupal.t('What\'s New');	


// text translations
site['translation']=new Array();
site['translation']['Optimize']=new Array();
site['translation']['Optimize']['SelectGame']=Drupal.t('Select a game title');
site['translation']['Optimize']['SelectGPU']=Drupal.t('Select your GPU model');
site['translation']['Optimize']['DriverScanner'] = new Array();
site['translation']['Optimize']['DriverScanner']['Supported']=Drupal.t('Your GPU Supports');
site['translation']['Optimize']['DriverScanner']['Unsupported']=Drupal.t('Your GPU does not support');
site['translation']['Optimize']['DriverScanner']['Scanning']=Drupal.t('Scanning features');
site['translation']['Optimize']['DriverScanner']['Info']=Drupal.t('Info');
site['translation']['Optimize']['DriverScanner']['NoFeatures']=Drupal.t('No features available');	
site['translation']['Optimize']['DriverScanner']['Unrecognised']=Drupal.t('Unrecognised Device');	
site['translation']['Optimize']['DriverScanner']['YourCoreSpecs']=Drupal.t('Your core specs');	
site['translation']['Optimize']['DriverScanner']['PerGPU']=Drupal.t('per GPU');	
site['translation']['Optimize']['DriverScanner']['Cores']=Drupal.t('Cores');	
site['translation']['Optimize']['DriverScanner']['Memory']=Drupal.t('Memory');	
site['translation']['Optimize']['DriverScanner']['GraphicsClock']=Drupal.t('Graphics clock');	
site['translation']['Optimize']['DriverScanner']['GB']=Drupal.t('');	
site['translation']['Optimize']['DriverScanner']['MB']=Drupal.t('');	

site['translation']['Drivers']=new Array();
site['translation']['Drivers']['showFeatures']=Drupal.t('Show Driver Features');
site['translation']['Drivers']['hideFeatures']=Drupal.t('Hide Driver Features');
site['translation']['Drivers']['genericError']=Drupal.t('An error has occured. Please select a different combination or use the automatic driver detection option.');
site['translation']['Drivers']['javaError']=Drupal.t('Java is required. Click the icon to install. After installation, the browser may refresh.');
site['translation']['Drivers']['OEMDriver']=Drupal.t('Please download your device driver from your OEM manufacturer.');
site['translation']['Drivers']['OEMRequiredDriver']=Drupal.t('~subVendorDetailsName~ requires that you download the driver for your GPU from their support site.');
site['translation']['Drivers']['OEMRequiredDriverSupportURL']=Drupal.t('You can find more information at:');
site['translation']['Drivers']['OEMRequiredDriverAgnostic']=Drupal.t('The manufacturer of this system requires that you download the driver for your GPU from their support site.');
site['translation']['Drivers']['CurrentDriver']=Drupal.t('Your current driver is');
site['translation']['Drivers']['LatestDriver']=Drupal.t('Latest Driver Version');
site['translation']['Drivers']['LatestDriver3DKit']=Drupal.t('Latest 3D Driver CD Kit Version');
site['translation']['Drivers']['UpToDate']=Drupal.t('Your driver is up to date, %x download anyway');
site['translation']['Drivers']['Detected']=Drupal.t('Has been detected in your system.');
site['translation']['Drivers']['AllDrivers']=Drupal.t('View all drivers for your devices');
site['translation']['Drivers']['NoDriverID']=Drupal.t('A driver cannot be found for this device.%z If you believe this is in error, please %x send us feedback %y');
site['translation']['Drivers']['NoGPUManualSearch']=Drupal.t('Unfortunately we were unable to detect your GPU. Please try again using the manual search');
site['translation']['Drivers']['Results']=new Array();
site['translation']['Drivers']['Results']['MoreInfo']=Drupal.t('More info');
site['translation']['Drivers']['Results']['GPUSupported']=Drupal.t('Your GPU supports');
site['translation']['Drivers']['Results']['GPUUnsupported']=Drupal.t('Your GPU does not support');
site['translation']['Drivers']['Results']['ThankYou']=Drupal.t('Thank you! Your driver download should be completed soon.');
site['translation']['Drivers']['Results']['BackToList']=Drupal.t('Click to return to the driver detail page');

site['translation']['BuyNow']=new Array();
site['translation']['BuyNow']['AjaxStatus']=Drupal.t('... downloading data ...');
site['translation']['BuyNow']['DataProcessStatus']=Drupal.t('... proccessing data ...');
site['translation']['BuyNow']['LayoutStatus']=Drupal.t('... generating layout ...');
site['translation']['BuyNow']['noProducts']=Drupal.t('Sorry, no products found!');
site['translation']['BuyNow']['noProductsonFiltering']=Drupal.t('Sorry, no products found!&lt;br/&gt;Please try other filtering options');
site['translation']['BuyNow']['clearFilters']=Drupal.t('Clear all filters');
site['translation']['BuyNow']['layoutItemNoImage']='/template/_images/main_rightNav_CIbuyNow_dummy.png';
site['translation']['BuyNow']['productTypeComponents']=Drupal.t('Graphics Cards');
site['translation']['BuyNow']['productTypeDesktops']=Drupal.t('Desktop PCs');
site['translation']['BuyNow']['productTypeNotebooks']=Drupal.t('Notebooks');

site['translation']['Shared']=new Array();
site['translation']['Shared']['Next']=Drupal.t('Next');
site['translation']['Shared']['Previous']=Drupal.t('Previous');
site['translation']['Shared']['SortBy']=Drupal.t('Sort by');
site['translation']['Shared']['comments']=Drupal.t('Comments');
site['translation']['News']=new Array();
site['translation']['News']['learnMore']=Drupal.t('Learn More');
site['translation']['News']['DriverInfoTooltip']=Drupal.t('Get information about this driver release');

site['translation']['Search']=new Array();
site['translation']['Search']['noResults']=Drupal.t('Sorry, your search did not match any documents in this category.');

site['translation']['Forms']=new Array();
site['translation']['Forms'][1]=Drupal.t('Please fill in all required fields');
site['translation']['Forms'][2]=Drupal.t('Please provide a valid email address');
site['translation']['Forms'][4]=Drupal.t('One or more uploaded files are invalid');
site['translation']['Forms'][100]=Drupal.t('Please enter the correct text in the captcha box');
site['translation']['Forms'][101]=Drupal.t('Sorry! Based on the information you have provided, you are not eligible for this newsletter or competition. For more information, please refer to the NVIDIA Privacy Policy');
site['translation']['Forms'][102]=Drupal.t('An unexpected error occurred. Please try again');
site['translation']['Forms']['ThankYou']=Drupal.t('Thank you.');
site['translation']['Forms']['resetAll']=Drupal.t('Reset All');
site['translation']['Comments']=new Array();
site['translation']['Comments']['Comment']=Drupal.t('Comments');
site['translation']['Comments']['CommentSingle']=Drupal.t('Comment');
// all localised technology links
site['technologies']=new Array();
site['technologies']['3D Vision']='/hardware/technology/3d-vision';
site['technologies']['3D Vision Surround']='/hardware/technology/3dvision-surround';
site['technologies']['CUDA']='/hardware/technology/cuda';
site['technologies']['DirectX 11']='/hardware/technology/dx11';
site['technologies']['Optimus']='/hardware/technology/optimus';
site['technologies']['PhysX']='/hardware/technology/physx';
site['technologies']['SLI']='/hardware/technology/sli';
site['technologies']['3D Surround']='/hardware/technology/3dvision-surround';

// links by type for AJAX calls in news and gamesandapps sections. This is pulled in automatically from config file
site['pathByType']=new Array();
site['pathByType']['nv_game']=function(incoming) { return '/games-applications/pc-games/'+incoming; }
site['pathByType']['nv_app']=function(incoming) { return '/games-applications/pc-applications/'+incoming; }
site['pathByType']['application']=function(incoming) { return '/games-applications/pc-applications/'+incoming; }
site['pathByType']['article-interview']=function(incoming) { return '/whats-new/articles/'+incoming; }
site['pathByType']['article-itt']=function(incoming) { return '/whats-new/articles/'+incoming; }
site['pathByType']['article-other']=function(incoming) { return '/whats-new/articles/'+incoming; }
site['pathByType']['article-news']=function(incoming) { return '/whats-new/articles/'+incoming; }
site['pathByType']['article-ops']=function(incoming) { return '/optimize/optimal-game-settings/'+incoming; }
site['pathByType']['article-guide']=function(incoming) { return '/optimize/guides/'+incoming; }
site['pathByType']['game']=function(incoming) { return '/games-applications/pc-games/'+incoming; }
site['pathByType']['gpu']=function(incoming) { return '/hardware/desktop-gpus/'+incoming; }
site['pathByType']['driver']=function(incoming) { return '/drivers/results/'+incoming; }
site['pathByType']['notebookgpu']=function(incoming) { return '/hardware/notebook-gpus/'+incoming; }
site['pathByType']['technology']=function(incoming) { return '/hardware/technology/'+incoming; }
site['pathByType']['top-level-section']=function(incoming) { return '/'+incoming; }
site['pathByType']['redirect']=function(incoming) { return '/'+incoming; }
site['pathByType']['landing-page']=function(incoming) { return '/landing-page/'+incoming; }
site['pathByType']['Desktop']=function(incoming) { return '/hardware/desktop-gpus/'+incoming; }
site['pathByType']['Mobile']=function(incoming) { return '/hardware/notebook-gpus/'+incoming; }

// and we have to overwrite one behaviour 
site['pathByType']['top-level-section']=function(incoming) { return site['path'][incoming]; };
// multiple items display related data
site['global']['itemsPerPage']='24';
site['global']['currency']='&#36;';
site['global']['SearchGeForce']='009029091075083507105:on56w2q30cs';
site['global']['SearchRegion']='009029091075083507105:9leknaf7r_8';
site['global']['LanguageIntCode']='1033';
site['global']['disqus_short_name']='geforcecom';  	

// STK related data - YOU NEED TO ALSO SET PATH! otherwise it will break!
site['services']['language']='en_us';
site['services']['randomForAjax']='1344324782';

// CI settings for service
site['services']['CIlink']='http://nvidia.links.channelintelligence.com/oemsites/7240466/ws/CDI_PL_Feed/CDI_PL_JSON_function.asp';
site['services']['CIcountryID']='2304';

// TEMPLATES
site['cmsTemplate'] = '/Active/en_us/en_us/template/';
site['localTemplate'] = '/Active/en_us/en_us/template/';;
jQuery.support.cors = true;


var extraData = {
  isResultsSection : false,
  isBetaSection : false
}
var isIE6 = false;
var isIE7 = false;

// Add in IE7 check
if(jQuery.browser.msie && jQuery.browser.version == 7) {
  isIE7 = true;
}

var eraseCookie, createCookie, readCookie, clone_obj, ActivateButton;

(function($) {

  // check if IE6 and redirect to proper page
  if ((jQuery.browser.msie && jQuery.browser.version == 6) || isIE7) { 
	  var pathname = window.location.pathname;
	  if(pathname.indexOf('noie6') != 1){
		  setTimeout(function() {
	          window.location = window.location = "/noie6";
	      }, 0);
	  }
  }

  // FUNCTIONS: header country selector
  var countryVisible = false;
  function showCountryList() {
      if(!countryVisible){
          document.getElementById("countryList").style.display = "block";
          document.getElementById("downArrow").src = "/sites/all/themes/geforce/images/rate-this-page/bttn_close.png";
          countryVisible = true;
      } else {
          document.getElementById("countryList").style.display = "none";
          document.getElementById("downArrow").src = "/sites/all/themes/geforce/images/rate-this-page/bttn_arrow_down.png";
          countryVisible = false;
      }
  }

  //checks whether a string contains double byte characters - this will be used as a switch on shortened text lengths
  function isDoubleByte(str) {
      for (var i = 0, n = str.length; i < n; i++) {
          if (str[i].charCodeAt() > 255) { return true; }
      }
      return false;
  }

  // stuff to detect mobile phones, don't touch it!
  var deviceIphone="iphone";var deviceIpod="ipod";var uagent=navigator.userAgent.toLowerCase();function DetectIphone(){if(uagent.search(deviceIphone)>-1)return true;else return false}function DetectIpod(){if(uagent.search(deviceIpod)>-1)return true;else return false}function DetectIphoneOrIpod(){if(DetectIphone())return true;else if(DetectIpod())return true;else return false}var deviceS60="series60";var deviceSymbian="symbian";var engineWebKit="webkit";function DetectS60OssBrowser(){if(uagent.search(engineWebKit)>-1){if((uagent.search(deviceS60)>-1||uagent.search(deviceSymbian)>-1))return true;else return false}else return false}var deviceAndroid="android";function DetectAndroid(){if(uagent.search(deviceAndroid)>-1)return true;else return false}function DetectAndroidWebKit(){if(DetectAndroid()){if(DetectWebkit())return true;else return false}else return false}var deviceWinMob="windows ce";function DetectWindowsMobile(){if(uagent.search(deviceWinMob)>-1)return true;else return false}var deviceBB="blackberry";function DetectBlackBerry(){if(uagent.search(deviceBB)>-1)return true;else return false}var devicePalm="palm";function DetectPalmOS(){if(uagent.search(devicePalm)>-1)return true;else return false}

  // FUNCTION: clone objects function because STUPID js cannot do it !!!!! aaaaaaa
  clone_obj = function(obj){if(typeof obj!=='object'||obj==null){return obj;}
  var c=obj instanceof Array?[]:{};for(var i in obj){var prop=obj[i];if(typeof prop=='object'){if(prop instanceof Array){c[i]=[];for(var j=0;j<prop.length;j++){if(typeof prop[j]!='object'){c[i].push(prop[j]);}else{c[i].push(clone_obj(prop[j]));}}}else{c[i]=clone_obj(prop);}}else{c[i]=prop;}}
  return c;}

  // FUNCTION: to show/hide siteLoader
  function showLoader(newLink) {
      // jQuery('#siteLoader').fadeIn(200);
  }
  function hideLoader() {
      // jQuery('#siteLoader').fadeOut(200);
  }

  // FUNCTION: ActivateButton - part of active button function, needs to be here. 
  ActivateButton = function (incoming) {
      var stateNormal=jQuery(incoming).attr('src');

      var noExtensions=stateNormal.replace(".png", "");

      var stateHover = new Image();
      stateHover.src=noExtensions+'_hover.png';

      var stateClick = new Image();
      stateClick.src=noExtensions+'_click.png';

      jQuery(incoming).bind('mouseover mouseout mousedown mouseup', function(event) {
          switch(event.type) {
              case 'mouseover':
                  jQuery(incoming).attr({"src":stateHover.src});
                  break;
              case 'mouseout':
                  jQuery(incoming).attr({"src":stateNormal});
                  break;
              case 'mousedown':
                  jQuery(incoming).attr({"src":stateClick.src});
                  break;  
              case 'mouseup':
                  jQuery(incoming).attr({"src":stateHover.src});
                  break;
          }       
      });
  }

  // FUNCTION: imageLoadError - just pass jquery object here and image you want to default it, it will use this image IF loading of an image will fail (like in hardware/motherboard sections).
  // you need to bind error as soon it has been insetrted to DOM in order to capture fault.
  function imageLoadError (item, replaceTo) {
      jQuery(item).error(function(){
          jQuery(this).attr({"src":replaceTo});
      });

  }

  // Replace HTML Useful Character Entities
  function htmlEntityToCharacter(input) {
    return input.replace(/&nbsp;/g, ' ')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&amp;/g, '&')
                .replace(/&cent;/g, 'Â¢')
                .replace(/&pound;/g, 'Â£')
                .replace(/&yen;/g, 'Â¥')
                .replace(/&euro;/g, 'â‚¬')
                .replace(/&sect;/g, 'Â§')
                .replace(/&copy;/g, 'Â©')
                .replace(/&reg;/g, 'Â®')
                .replace(/&trade;/g, 'â„¢');
  }

  // Strip HTML tags from string
  function stripHtmlTags(string) {
      return string.replace(/(<([^>]+)>)/ig,"");
  }

  // Image Replacement: on 404 error replace with default image
  function replaceWithDefaultImage(imgObject, replacementImage) {
      replacementImage = replacementImage || '/sites/all/themes/geforce/images/main_rightNav_pill_default.png';
      imgObject.src = replacementImage;
  }

  // FUNCTION: to do something! (it says what it does!!!)
  function clearStartCookie(){
      createCookie("geForceStartPage",true,7);
  }


  // FUNCTION: moduleLoader - to load different JS modules on fly, depends if page needs it.
  /*var position=20; // just for debug (top position change of notifiction box)
  function moduleLoader(moduleName) {
      jQuery.ajax({
          type: "GET",
          data: "unique="+site.services.randomForAjax,
          url: 'http://www.geforce.com/template/_includes/js/module-'+moduleName+'.js',
          dataType: 'script',
          success: function(){
              //jQuery('<div style="position:fixed; top:'+position+'px; left:20px; height:20px; width:200px; background-color:#76b900; color:#000;">'+moduleName+' module</div>').appendTo("body");
              position=position+30; // just for debug (top position change of notifiction box)
          }
      });
  }

  // FUNCTION: cssLoader - just call it when you want to load any css file dynamically
  function cssLoaderAndModule(cssName, moduleName) {
      jQuery.ajax({
          type: "GET",
          data: "unique="+site.services.randomForAjax,
          url: 'http://www.geforce.com/template/_includes/styles/'+cssName+'.css',
          success: function(cssTemplate){
              jQuery('<style type="text/css">'+cssTemplate+'</style>').appendTo("head");
              moduleLoader(moduleName);
              //jQuery('<div style="position:fixed; top:'+position+'px; left:20px; height:20px; width:200px; background-color:#ccc; color:#000;">'+cssName+' CSS</div>').appendTo("body");
              position=position+30; // just for debug (top position change of notifiction box)
              return true;
          }
      });
  }*/

  /* Handles cookie baking and nomming */
  createCookie = function (name,value,days) {
      if (days) {
          var date = new Date();
          date.setTime(date.getTime()+(days*24*60*60*1000));
          var expires = "; expires="+date.toGMTString();
      }
      else var expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
  }
  readCookie = function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
  }
  eraseCookie = function(name) {
      createCookie(name,"",-1);
  }

  // Geforce Background - Functions to set & change site background image.
  var geforceBackground = new Function();
  
  
// JWPlayer - Global function to load movie.
var loadMovie = new Function();

  // Guide or Article page that has multiple sections.
  var navigableArticle = new Function();

  // THESE VARS SUPPORT THE FORM CONTROLLER
  var formPrefix = 'mainForm'; // prefix to new items to prevent ID conflicts
  var optionSplit = '~~~'; // splits options and values
  var formProcessorLoaded = false;

  var modal = {
      // modalWindow  : $('#modalWindow'),
      // windowMask   : $('#mask'),
      config: {
          // maskEffect  : 'fadeToggle',
          // maskSpeed   : 'fast',
          // modalEffect : 'fadeToggle',
          // modalSpeed  : 'fast'
      },
      init: function(config) {
          var that = this;
          $.extend(this.config, config);
          if (!$('#modalWindow').length) {
              $('<div></div>', {
                  id      : 'modalWindow'
              }).insertAfter('.contentHolder');
              $('<div></div>', {
                  id      : 'mask',
                  style   : 'display:none;'
              }).appendTo('#modalWindow');
              $('#mask').click(function() {
                  that.removeBGMask();
              });
          }
      },
      addToModalWindow: function(id) {
          $(id).appendTo($('#modalWindow'));
      },
      applyBGMask: function() {
          $('#mask').css({'width':$(window).width(),'height':$(document).height()});
          $('#mask').stop(true, true).fadeTo(100,0.8);
      },
      close: function(id) {
          $(id).fadeOut('fast');//[this.config.modalEffect](this.config.modalSpeed);
          this.removeBGMask();
      },
      removeBGMask: function() {
          $('#mask').siblings().fadeOut('fast');//[this.config.modalEffect](this.config.modalSpeed);
          $('#mask').fadeOut('slow');//[this.config.maskEffect](this.config.maskSpeed);
      },
      show: function(id, callback) {
          this.applyBGMask();
          $id = $(id);
          $window = $(window);
          $id.css('top', ($window.height()/2-$id.height()/2)+$window.scrollTop());
          $id.css('left', $window.width()/2-$id.width()/2);
          $id.fadeIn('slow');//[this.config.modalEffect](this.config.modalSpeed);
          //if (typeof callback == 'function') callback();
      }
  };

  // DOM READY - LOAD ADDITIONAL STUFF HERE! ----------------------------------------------------------------------------------------------
  Drupal.behaviors.headerLoad = {
    attach: function(context, settings) {
      jQuery('#scrolltop').click(function(){
          jQuery('html, body').animate({scrollTop:$("html").offset().top});
      })
      //var svcLangCode = jQuery('#gfDataLangCode').text();
      //var svcTotalItems = jQuery('#gfDataTotalItems').text();

      // INITIATE - START: filterThis functions when it is required
      /*CMP*/ //@todo - no dynamic loading of javascript  
      if (jQuery("#filterThis").length) {
          // find what image is default for filterThis functionality and set it globally
          site['dummyImage']['SELECTED']=jQuery('#filterThis').next().children('.dataTemplate').find('var.dummyImage').text();
          jQuery('#filterThis').next().children('.dataTemplate').find('var.dummyImage').remove();

          moduleLoader('filterThis');
      }
      // INITIATE - END: filterThis functions when it is required

      // INITIATE - START: miniNav pagination for PAGE classes (articles, guides etc) when it is required
      // if (jQuery(".contentMiddle .page").length) {
      //     moduleLoader('miniNav');
      // }
      if (jQuery('.navigable-article-navigation').length) {
          navigableArticle = new NavigableArticle();
      }
      // INITIATE - END: miniNav pagination for PAGE classes (articles, guides etc) when it is required   

      // INITIATE - START: CI buy now solution (hardware, pdps etc)
      if (jQuery("#dynamicBuyNow").length || jQuery(".dynamicBuyNowLeftNav").length || jQuery(".dynamicComparePrices").length) {
          $.getScript('/' + Drupal.settings.gfcore_path + '/js/module-dynamicBuyNow.js', function() {});
          $.getScript('/' + Drupal.settings.gfcore_path + '/js/module-form-dropdowns.js', function() {});
      }
      // INITIATE - END: CI buy now solution (hardware, pdps etc) 

      // INITIATE - START: forms controller
      /*if (jQuery("form[action=http://www.nvidia.eu/forms/processor.php]").length){
          cssLoaderAndModule("form-module-formprocessor", "form-formprocessor");
      } else {
          formProcessorLoaded = true; // it hasn't really loaded, but the modules may need to load regardless
      }*/
      // INITIATE - START: forms controller       

      // INITIATE - START: dropdowns controller
      /*if (jQuery("select").length){
          var timerDropDownCount = 0;
          var timerDropDowns = setInterval(function(){
              if (formProcessorLoaded || timerDropDownCount > 5){
                  cssLoaderAndModule("form-module-dropdowns", "form-dropdowns");
                  clearInterval(timerDropDowns);
              } else {
                  timerDropDownCount++;
              }
          }, 100);
      }*/
      var dropdownintervalCount;
          var loadDropdowns = setInterval(function(){
        if(formProcessorLoaded || dropdownintervalCount == 10){
          clearInterval(loadDropdowns);
          $("select").each(function(){
            $(this).selectBox({menuTransition:'slide',menuSpeed:200});
          });
        }
        dropdownintervalCount++;
      },1000);
      // INITIATE - START: dropdowns controller   


      // INITIATE - START: checkboxes controller
      // do we need this for anything? It's really problematic.
      // cp - 3/9 - this is needed for all hardware dropdowns.  we need another solution here, or possibly a check in the form-checkbox that won't transform certain ones.
      if (jQuery("input[type=checkbox]").length){

        //if(myURL=='whats-new' && myURL!='')
          var timerCheckboxes = setInterval(function(){
              if (formProcessorLoaded){
                  $.getScript('/' + Drupal.settings.gfcore_path + '/js/module-form-checkbox.js', function() {});
                  clearInterval(timerCheckboxes);
              }
          }, 100);
      }
      // INITIATE - START: checkboxes controller      

      // INITIATE - START: radio-button controller
      //if (jQuery("input[type=checkbox]").length){
      //  cssLoaderAndModule("form-module-checkbox", "form-checkbox");
      //}
      // INITIATE - START: radio-button controller    

      // INITIATE - START: GPU Feature Scanner Initialisation
      if (jQuery("#gpuFeatureScanner").length) {
          // var timerFeatureScanner = setInterval(function(){
              // if (formProcessorLoaded){
                  moduleLoader('gpu-feature-scanner');
                  // clearInterval(timerFeatureScanner);
              // }
          // }, 100);
      }
      // INITIATE - END: GPU Feature Scanner Initialisation       

      // START: Change z-index to 1 on youtube iframes
      if(jQuery('iframe').length){
          jQuery('iframe').each(function() {
            try{
                var frameUrl = jQuery(this).attr('src');
                if (frameUrl.search(/youtube\.com\/embed\/.*/) != -1 && frameUrl.search("wmode=transparent") == -1) {
                    jQuery(this).attr('src',frameUrl+'?wmode=transparent');
                    jQuery(this).css('z-index', '1');
                }
            }catch(e){
              // do nothing - was causing error in UK site.

            }
          });
      }
      // END: Change z-index to 1 on youtube iframes

      // -------------------------------------------------------------------------------------------
      // START: This is old onLoad content, now moved to document.ready 
      // -------------------------------------------------------------------------------------------
      if (!DetectBlackBerry() && !DetectS60OssBrowser() && !DetectWindowsMobile() && !DetectAndroid()) {

          /* CLICKABLE BACKGROUND */
          if ($('#clickable-background.right').length === 1) {
              var $contentHolder = $('.contentHolder'),
                  $backgroundRight = $('#clickable-background.right');
              $contentHolder.after($backgroundRight);
          }

      /* ########## FEEDBACK (RATE THIS PAGE) TAB START ########## */
          /*if (site['services']['language'].toLowerCase() === 'en_us' || site['services']['language'].toLowerCase() === 'en_gb') {
              var feedbackTabImg = '';
              if (site['services']['language'].toLowerCase() === 'en_us') {
                  feedbackTabImg = '<img alt="feedback" src="/sites/all/themes/geforce/images/rate-this-page/feedback_tab.png"/>';
              } else {
                  feedbackTabImg = '<img alt="feedback" src="/sites/all/themes/geforce/images/rate-this-page/feedback_tab_uk.png"/>';
              }
              $('<div></div>', {
                  html  : feedbackTabImg,
                  id    : 'feedback-tab'
              }).insertBefore('#header');
              modal.init();
              modal.addToModalWindow('#rate-this-page');
              // FEEDBACK (RATE THIS PAGE) TAB EVENTS
              $('#feedback-tab')
                  .on('mouseenter', function() {
                      $(this).css('left','0');
                  })
                  .on('mouseleave', function() {
                      $(this).css('left','-5px');
                  })
                  .on('click', function() {
                          modal.show('#rate-this-page', function() {
                              $('#rate-this-page').css({
                                  'position':'fixed',
                                  'top':'30%'});
                          });
                  });
              $('#rate-this-page .close').on('click', function() {
                  modal.close($(this).closest('#rate-this-page'));
              });
          }*/
      /* ########## FEEDBACK (RATE THIS PAGE) TAB END ########## */

          // left nav hover animations 
          jQuery('.middle .mainItemOff a, .middle .mainItemOn a').live('mouseenter mouseleave', function(event) {             
              switch(event.type) {
                  case 'mouseenter':
                      if (!jQuery(this).parent().hasClass('mainItemOn')) {
                          jQuery(this).children('.mainItemOverlay').stop().fadeTo(200, 0.2);
                      }
                      break;
                  case 'mouseleave':
                      jQuery(this).children('.mainItemOverlay').stop().fadeTo(200, 0);
                      break;
              }       
          });

          // top RightNav items
          jQuery('#countriesCollapsed').hover(
              function() { $(this).children('.overlay').stop().fadeTo(200, 0.3); }, 
              function() { $(this).children('.overlay').stop().fadeTo(200, 0); }
          );
          // top RightNav items
          jQuery('.support').hover(
              function() { $(this).children('a').children('.TopMenuOverlay').stop().fadeTo(200, 0.3); }, 
              function() { $(this).children('a').children('.TopMenuOverlay').stop().fadeTo(200, 0); }
          );

          // left menu PROMO BOX overlay action - all except IE browsers!
          if (!jQuery.browser.msie) {
              jQuery('.promobox a').hover(
                  function() { jQuery(this).children('.promoboxOverlay').stop().fadeTo(200, 0.2); }, 
                  function() { jQuery(this).children('.promoboxOverlay').stop().fadeTo(200, 0); }
              );
          }

          // main content - pill hover action
          jQuery('.pill').live('mouseenter mouseleave', function(event) {
              switch(event.type) {
                  case 'mouseenter':
                      jQuery(this).children('a').children('.OverlayHover').stop().fadeTo(200, 0.7);
                      jQuery(this).children('div.desc').stop().fadeTo(200, 1);
                      break;
                  case 'mouseleave':
                      jQuery(this).children('a').children('.OverlayHover').stop().fadeTo(200, 0);
                      jQuery(this).children('div.desc').stop().fadeTo(200, 0.5);
                      break;
              }       
          });
          //jQuery('.capsule a').children('.capsuleOverlay').css('display','none');

          // main content - capsule hover action
          jQuery('.capsule a, .allGPUs, .subcapsule a').live('mouseenter mouseleave', function(event) {
              switch(event.type) {
                  case 'mouseenter':
                      jQuery(this).children('.capsuleOverlay').stop().fadeTo(200,1);
                      break;
                  case 'mouseleave':
                      jQuery(this).children('.capsuleOverlay').stop().fadeTo(200,0);
                      break;
              }
          });

          // ratesSelector actions setup
          jQuery('.ratesSelector').each(function() {
              jQuery(this).children('div').bind({
                  mouseenter: function() {
                      var currentItems=jQuery(this).index()+1;                        
                      jQuery(this).parent().children('div:lt('+currentItems+')').addClass('optionHover');
                  },
                  mouseleave: function() {
                      jQuery(this).parent().children('div').removeClass('optionHover');
                  },
                  click: function() {
                      var currentItems=jQuery(this).index()+1;
                      var thisRaterID = jQuery(this).parent().attr("id");
                      jQuery('input[name="'+thisRaterID+'"]').val(currentItems);
                      jQuery(this).parent().children('div').removeClass('optionHover');
                      jQuery(this).parent().children('div:lt('+currentItems+')').addClass('optionOn');
                      jQuery(this).parent().children('div:gt('+jQuery(this).index()+')').removeClass('optionOn');
                  }
              });
          });
      }
 

      // BELOW ITEMS WILL BE ALWAYS PROCESSED------------------------------------------
      // will be executed on all phones and browsers, move up if shouldn't on be mobile devices

      // TOP NAVIGATION------------------------------
      // add animation stuff here
      var lastItem=0;
      jQuery('#topNavTable').find("td").each(function(index) {
          var thisItem=index;
          lastItem=thisItem;
          jQuery(this).hover(
              function () {
                  $(this).children("a").children('.overlay').stop().fadeTo(200,0.3);
                  if (thisItem==1) $(this).parent().children("td:eq(0)").children("div").children('.overlay').stop().fadeTo(200,0.3);
                  if (thisItem==lastItem-1) $(this).parent().children("td:eq("+lastItem+")").children("div").children('.overlay').stop().fadeTo(200,0.3);
              }, 
              function () {
                  $(this).children("a").children('.overlay').stop().fadeTo(200,0);
                  if (thisItem==1) $(this).parent().children("td:eq(0)").children("div").children('.overlay').stop().fadeTo(200,0);
                  if (thisItem==lastItem-1) $(this).parent().children("td:eq("+lastItem+")").children("div").children('.overlay').stop().fadeTo(200,0);
              }
          );
      });

      // left menu moving animation
      jQuery('.mainItemOff').each(function() {
          var currentMenu = jQuery(this).children('div');
          if (!currentMenu.is('.mainItemOn'))
              jQuery(this).children('.mainItemSub').hide();
      });
      
      // Movie player trigger. Requires html template in dom with ID=videoBox
    loadMovie = function(url, title, description, autoplay, autoscroll, hd, placeHolderImage) {
        if (jQuery('#videoBox').length) {   
            jQuery('#videoBox h2').text(title);
            jQuery('#videoBox #videoDesc').text(description);

            if (autoscroll) {
                jQuery('html, body').animate({scrollTop: $("#videoBox").offset().top}, 500);
            }

            //jwplayer("videoContainer").remove();
            //check to see if hd exists, and begins with http: , else assign a boolean of false.  
            if (hd)
                if (hd.substr(0,5)!='http:')
                    hd=false;

            // if we have a url, we want to use the player setup() method that contains the "extensions" argument.
            if (hd) {
                var hdPath = Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + '/hdswitcher.swf';
                jwplayer('videoContainer').setup({
                    flashplayer: Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + '/player.swf',
                    autostart: autoplay,
                    image: placeHolderImage,
                    file: url,
                    width: 620,
                    height: 352,
                    icons: true,
                    plugins: {
                        hdPath: {
                            image: placeHolderImage,
                            hd: hd,
                            sd: url,
                            state: 'sd'
                        }
                    },
                    smoothing: 'true',
                    skin: Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + 'skins/nvidia.zip'
                }); 
            } else {
                jwplayer('videoContainer').setup({
                    flashplayer: Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + '/player.swf',
                    autostart: autoplay,
                    image: placeHolderImage,
                    file: url,
                    width: 620,
                    height: 352,
                    icons: true,
                    smoothing: 'true',
                    skin: Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + '/skins/nvidia.zip'
                }); 
            }
        }   
    };
    
    loadMovie2 = function(url, title, description, autoplay, autoscroll, hd, placeHolderImage) {
        if (jQuery('#videoBoxModal').length) {   
            jQuery('#videoBoxModal h2').text(title);
            jQuery('#videoBoxModal #videoDescModal').text(description);

            if (autoscroll) {
                jQuery('html, body').animate({scrollTop: $("#videoBoxModal").offset().top}, 500);
            }
            
            //jwplayer("videoContainer").remove();
            //check to see if hd exists, and begins with http: , else assign a boolean of false.  
            if (hd)
                if (hd.substr(0,5)!='http:')
                    hd=false;

            // if we have a url, we want to use the player setup() method that contains the "extensions" argument.
            if (hd) {
                var hdPath = Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + '/hdswitcher.swf';
                jwplayer('videoContainerModal').setup({
                    flashplayer: Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + '/player.swf',
                    autostart: autoplay,
                    image: placeHolderImage,
                    file: url,
                    width: 652,
                    height: 370,
                    plugins: {
                        '/sites/all/libraries/jwplayer/hdswitcher.swf': {
                            image: placeHolderImage,
                            hd: hd,
                            sd: url,
                            state: 'sd'
                        }
                    },
                    smoothing: 'true',
                    skin: Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + 'skins/nvidia.zip'
                }); 
            } else {
                jwplayer('videoContainerModal').setup({
                    flashplayer: Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + '/player.swf',
                    autostart: autoplay,
                    image: placeHolderImage,
                    file: url,
                    width: 652,
                    height: 370,
                    smoothing: 'true',
                    skin: Drupal.settings.base_url + '/' 
                      + Drupal.settings.jwplayer_library_path + '/skins/nvidia.zip'
                }); 
            }
        }   
    };

    jQuery('a.playVideo').click(function(event) { // add click hanlder
        event.preventDefault();
        loadMovie(jQuery(this).attr('href'), jQuery(this).attr('title'), jQuery(this).find('span.content').text(), true, true, jQuery(this).attr('alt'), jQuery(this).children('.thumb').children('img').attr('src'));
    });

    if (jQuery('a.playVideo').length) { 
      // AUTO RRIGGER THE FIRST MOVIE
        var firstVid = jQuery('a.playVideo').first().attr('alt');
        loadMovie(jQuery('a.playVideo').first().attr('href'), jQuery('a.playVideo').first().attr('title'), jQuery('a.playVideo').first().find('span.content').text(),false,false,jQuery('a.playVideo').first().attr('alt'), jQuery('a.playVideo').first().children('.thumb').children('img').attr('src'));
    }

    if (jQuery('#video-player-modal').length) {
        modal.init();
        modal.addToModalWindow('#video-player-modal');
        jQuery('.open-video').click(function(event) { // add click hanlder
            event.preventDefault();
            modal.show('#video-player-modal', function() {
                $('#video-player-modal').css({
                        'position':'fixed',
                        'top':'30%'});
            });
            $('#video-player-modal .close').on('click', function() {
                modal.close($(this).closest('#video-player-modal'));
            });
            $this = jQuery(this);
            loadMovie2($this.attr('href'), $this.attr('title'), $this.find('span.content').text(), false, false, $this.attr('alt'), $this.children('.thumb').children('img').attr('src'));
        });
    }
      

      /* CMP */ //@todo this should be handled on the PHP Level.
      // color ColoredTable styles. All odd will be ligther, just chanings background image
      jQuery('.coloredTable').children('.row:even').css("background-image", "url(/template/_images/main_rightNav_coloredTable_even.png)");
      jQuery('.coloredTable').children('.row').append('<div class="clear"></div>');

      // SHARE functionality
      jQuery('.shareExpand').click(function() {
          jQuery('.shareExpanded').fadeIn(400);
          jQuery(this).fadeOut(400);  
      });
      jQuery('.closeShare').click(function() {
          jQuery('.shareExpand').fadeIn(400);
          jQuery('.shareExpanded').fadeOut(400);      
      });

      // ActiveButtons initiator
      // remember button needs to be set to .activeButton and in the same folder you need to have the same files with *_hover and *_click filename.
      jQuery('.activeButton').each(function() {
          ActivateButton(this);                     
      });

      // GLOBAL SEARCH INITAITE 
      jQuery('#search').submit(function() {
          if (jQuery(this).find('#searchBoxTop').val()=='') {
              window.location = site['path']['Search'][0];
              return false; // prevent default autosubmit
          }
      });

      // IMAGE BROWSER START--------------------------------------------------
      (function($) {
          var imageRendition = {
              ORIGINAL: '',
              PREVIEW: '_gallery_preview',
              THUMB: '_gallery_thumb'
          };
          var imageBrowser = {
              colorboxElements: '',
              imageBox: $('#imageBox'),
              imageContainerDefault:  $('#imageContainer').html('<a></a><img />'),
              imageContainer: $('#imageContainer'),
              imageAnchor: $('#imageContainer a'),
              imageImg: $('#imageContainer img'),
              nextButton: $('#imageControls .next'),
              previousButton: $('#imageControls .previous'),
              screenshotIndex: 0,
              screenshotNumbers: $('#pageNumbers'),
              screenshotTitle:  $('#imageBox h2'),
              screenshots: []
          };
          imageBrowser.cycleImage = function(title, index) {
              this.screenshotIndex = index;
              var url = this.screenshots[index];
              this.updateNavigationState(title, index);
              this.imageAnchor.attr('href', this.getBaseImage(url));
              this.imageImg.attr('src', this.getRendition(url, imageRendition.PREVIEW));
          };
          imageBrowser.getBaseImage = function(url) {
              if (url.indexOf(imageRendition.PREVIEW) !== -1) {
                  return url.replace(imageRendition.PREVIEW, '');
              } else if (url.indexOf(imageRendition.THUMB) !== -1) {
                  return url.replace(imageRendition.THUMB, '');
              } else {
                  return url;
              }
          };
          imageBrowser.getRendition = function(url, version) {
              var origImage = this.getBaseImage(url);
              var imageType = /[^.]+$/.exec(origImage);
              var index = origImage.lastIndexOf(imageType);
              return origImage.substring(0, --index) + ((imageType == 'png') ? version : version + '_th') + origImage.substring(index);
          };
          imageBrowser.updateNavigationState = function(title, index) {
              var totalScreenshots = this.screenshots.length;
              this.screenshotTitle.html(title || this.screenshotTitle.html() || $('.screenshotHolder a:first').attr('title'));
              this.screenshotNumbers.html(++index + ' / ' + totalScreenshots);
              var buttonImageBase = '/template/_images/button_page_';
              if (index == 1) {
                  this.previousButton.attr('src', buttonImageBase+'back_off.png');
                  this.previousButton.css('cursor', 'default');
                  this.nextButton.attr('src', buttonImageBase+'forward_on.png');
                  this.nextButton.css('cursor', 'pointer');
              } else if (index < totalScreenshots) {
                  this.previousButton.attr('src', buttonImageBase+'back_on.png');
                  this.previousButton.css('cursor', 'pointer');
                  this.nextButton.attr('src', buttonImageBase+'forward_on.png');
                  this.nextButton.css('cursor', 'pointer');
              } else if (index >= totalScreenshots) {
                  this.previousButton.attr('src', buttonImageBase+'back_on.png');
                  this.previousButton.css('cursor', 'pointer');
                  this.nextButton.attr('src', buttonImageBase+'forward_off.png');
                  this.nextButton.css('cursor', 'default');
              }

              if(totalScreenshots==1){
                this.previousButton.attr('src', buttonImageBase+'back_off.png');
                  this.previousButton.css('cursor', 'default');
                  this.nextButton.attr('src', buttonImageBase+'forward_off.png');
                  this.nextButton.css('cursor', 'default');
              }
          };
          if (imageBrowser.imageBox.length) {
              $('.screenshot').each(function() {
                  imageBrowser.screenshots.push($('a', this).attr('href'));
                  imageBrowser.colorboxElements += '<a href="' + $('a', this).attr('href') + '" rel="colorbox" title="'+ $('a', this).attr('title')+'"></a>';
              });
              imageBrowser.nextButton.live('click', function() {
                  if (imageBrowser.nextButton.css('cursor') === 'pointer') {
                      imageBrowser.cycleImage(null, imageBrowser.screenshotIndex + 1);
                  }
              });
              imageBrowser.previousButton.live('click', function() {
                  if (imageBrowser.previousButton.css('cursor') === 'pointer') {
                      imageBrowser.cycleImage(null, imageBrowser.screenshotIndex - 1);
                  }
              });
              $('a.openScreenshot').click(function(e) {
                  e.preventDefault();
                  e.returnValue = false;
                  var index = $(this).parent().parent('.screenshot').index();
                  imageBrowser.cycleImage($(this).attr('title'), index);
                  $('html, body').animate({scrollTop: $("#imageBox").offset().top}, 500);
              });
              imageBrowser.imageContainer.css('cursor', 'pointer');
              imageBrowser.imageContainer.click(function() {
                  imageBrowser.imageBox.append('<div id="colorboxElementContainer" style="display:none;">'+imageBrowser.colorboxElements+'</div>');
                  var theColorBox = $('a[rel=colorbox]').colorbox({
                      onCleanup : function(){
                          $('#colorboxElementContainer').remove();
                      },
                      opacity:"0.7",
                      width:"70%"
                  });
                  theColorBox.eq(imageBrowser.screenshotIndex).click();
              });
              // Initial Image should be displayed in the imageBox
              imageBrowser.cycleImage(null, 0);
          } else {
              $(".screenshot a").length && ($(".screenshot a").attr("rel", "colorbox"), $("a[rel='colorbox']").colorbox({width:"70%", opacity:"0.7"}))
          }
      })(jQuery);
      // IMAGE BROWSER END-------------------------------------------------------

      if (jQuery('#most_commented').length) {
          jQuery('#most_commented').hide();
          jQuery.ajax({
              type: 'get',
              dataType: 'json',
              //url: 'http://disqus.com/api/3.0/threads/list.json?api_key=PF65qmhbbj8AUE9juCwygZyRXnwP4kTkXPW87rqOEai2N6iEacLh1g4MVetq5vYv&forum=geforcecom' + objectNames,
              url: Drupal.settings.nv_services_url + '/controller.php/com.nvidia.services.Disqus.get_hot_threads/{"shortName":"'+site.global.disqus_short_name+'","api":"'+site.global.disqus_pub_key+'","time":"'+Math.round(new Date().getTime() / 1000)+'"}',
              success: function(mydata){
                  //  console.log(mydata);
                if(mydata){
                    if(mydata.length>1){
                    var className;
            try{
                      for (var i=0;i<6; i++) {
                        if(parseInt(mydata[i].total_comments) > 99){
                          className = 'total_comments';
                        }else{
                          className = 'total_comments_2';
                        }
                          $('.comment_'+i).find('span.comment_count').html('<span class="'+className+'">'+mydata[i].total_comments+'</span>');
                          $('.comment_'+i).find('a.commented-on-link').attr('href',mydata[i].link.substring(0,mydata[i].link.indexOf('#')));//.text(mydata[i].total_comments);
                          $('.comment_'+i).find('a.disqus-thread-link').attr('href',mydata[i].link);
                          $('.comment_'+i).find('div.top').text(mydata[i].title);
                          //console.log(mydata.response[i]);
                      }
                      jQuery('#most_commented').slideDown();
                      }
                      catch(err){
                      jQuery('#most_commented').slideDown();
                      }

                    } 
                  }else{
                    //console.log(jQuery('#most_commented'));
                    jQuery('#most_commented').parent().fadeOut();
                  }

                  //if(mydata==null){
                  //total = "0";
                  //}else{
                  //total = mydata;
                  //}
                  //jQuery($item).nextAll('.commentCount').html(total + ' ' + site.translation.Shared.comments);
              },
              error: function(data){
                  return 0;
                  //console.log(data);
              }
          });
      }
        if(jQuery('#most_commented_small').length){
          jQuery.ajax({
              type: 'get',
              dataType: 'json',
              //url: 'http://disqus.com/api/3.0/threads/list.json?api_key=PF65qmhbbj8AUE9juCwygZyRXnwP4kTkXPW87rqOEai2N6iEacLh1g4MVetq5vYv&forum=geforcecom' + objectNames,
              url: Drupal.settings.nv_services_url + '/controller.php/com.nvidia.services.Disqus.get_hot_threads/{"shortName":"'+site.global.disqus_short_name+'","api":"'+site.global.disqus_pub_key+'","time":"'+Math.round(new Date().getTime() / 1000)+'"}',
              success: function(mydata){
                  //  console.log(mydata);
          try{
          var className;
                  for (var i=0;i<6; i++) {
                    if(parseInt(mydata[i].total_comments) > 99){
                      className = 'total_comments';
                    }else{
                      className = 'total_comments_2';
                    }
                      $('.comment_small_'+i).find('span.comment_count').html('<span class="'+className+'">'+mydata[i].total_comments+'</span>');
                      $('.comment_small_'+i).find('a.commented-on-link').attr('href',mydata[i].link.substring(0,mydata[i].link.indexOf('#')));//.text(mydata[i].total_comments);
                      $('.comment_small_'+i).find('a.disqus-thread-link').attr('href',mydata[i].link);
                      $('.comment_small_'+i).find('div.top').html(mydata[i].title);
                      //console.log(mydata.response[i]);
                  }
          }
          catch(err){

          }
                  // if(mydata==null){
                  //     total = "0";
                  // }else{
                  //     total = mydata;
                  // }
                  // jQuery($item).nextAll('.commentCount').html(total + ' ' + site.translation.Shared.comments);
              },
              error: function(data){
                  return 0;
                  //console.log(data);
              }
          });
      }

      if(jQuery('#twitter_widget').length){
          var twitter_username = $('#twitter_username').attr('value');
          jQuery.ajax({
              type: 'get',
              dataType: 'json',
              //url: 'http://disqus.com/api/3.0/threads/list.json?api_key=PF65qmhbbj8AUE9juCwygZyRXnwP4kTkXPW87rqOEai2N6iEacLh1g4MVetq5vYv&forum=geforcecom' + objectNames,
              url: Drupal.settings.nv_services_url + '/controller.php/com.nvidia.services.Twitter.getTweets/{"user":"'+twitter_username+'"}',
              success: function(mydata){
                  //console.log(mydata);
                if(mydata){
                    html = build_twitter_widget(mydata);
                    $('#twitter_widget').children('.top_divider').after(html).slideDown();
                }
              },
              error: function(data){
                  return 0;
                  //console.log(data);
              }
          });
      }

      if(jQuery('#gf-debug-toggle').length){
          jQuery('#gf-debug').slideUp();
      }

      jQuery('#gf-debug-toggle').click(function(){
          //alert('clicked');
          jQuery('#gf-debug').slideToggle();
      });
      
     // updateDisqusCommentCount();

      // ------------------------------------------------------------------------
      // END: This is old onLoad content, now moved to document.ready 
      // ------------------------------------------------------------------------
  }
};


function build_twitter_widget(twitterData){
    var html='';
    for(i=0;i<twitterData.length -1; i++){
        html+='<div class="twitter-large">';
            html+='<img width="40px" style="padding-top: 8px;padding-left: 5px;" align="left" src="'+twitterData[i].image+'">';
            html+='<div class="leftnav_large_right_content">';
            html+='<a href="http://twitter.com/#!/'+twitterData[i].user+'" target="_blank" style="text-decoration: none; font-size: 16px; color: white; font-weight: bold;">'+twitterData[i].user+'</a>';
            html+='<p style="color:#999;">'+twitterData[i].date+'</p>';
            html+='<p>'+twitterData[i].title+'</p>';
        html+='</div>';
        html+='</div>';
        if(i!=(twitterData.length-2)){
        	html+='<div class="divider_grey"></div>';	
        }
        
    }
    return html;
}


// DOM READY end --------------------------------------------------------------

// US Facebook/Twitter Header Widgets
$(document).ready(function(){
    if ($('.share-widget-container').length == 1) {
        if (navigator.platform.match('Mac')) $('.facebook-icon').css('width','90px');
        $('<div></div>',{ id:'fb-root', style:'display:none;' }).appendTo('body');
        $('.facebook-icon').html('<iframe src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Fwww.facebook.com%2FNVIDIAGeForce&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:21px;" allowTransparency="true"></iframe>');
        if (jQuery.browser.msie && jQuery.browser.version == 7) {
        } else {
          $('.twitter-icon').html('<a href="//twitter.com/NVIDIAGeForce" class="twitter-follow-button" data-button="grey" data-width="150px" data-text-color="#FFFFFF" data-link-color="#76b900" data-show-count="false" data-show-screen-name="false">Follow @NVIDIAGeForce</a>');
          !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

        }
        var facebookScript  = document.createElement( 'script' ),
            twitterScript   = document.createElement( 'script' );
        facebookScript.src  = '//connect.facebook.net/en_US/all.js#appId=175786449158108&amp;xfbml=1';
        facebookScript.type = 'text/javascript';
        twitterScript.src   = '//platform.twitter.com/widgets.js';
        twitterScript.type  = 'text/javascript';
        if (jQuery.browser.msie && jQuery.browser.version == 7) twitterScript = null;
        $('body').append(facebookScript)
                 .append(twitterScript);
    }
    
    checkDisqus();
});
// US Facebook/Twitter Header Widgets

// JAVA Detection, returns bool
function checkJava(){
    var javaBrowser = deployJava.getBrowser();
    var jre = deployJava.getJREs();
    if (jre == '') {
        return false;
    } else {
        var jre2 = jre[0].substr(0,3);
        if (jre2 >= 1) {
            return true;
        } else {
            return false;
        }
    }
}

// This will enconce all code to be HTML safe and display correctly on the page. 
function HtmlEncode(str) {
    try {
      str = str.replace(/&/g, "&amp;");
      str = str.replace(/>/g, "&gt;");
      str = str.replace(/</g, "&lt;");
      str = str.replace(/"/g, "&quot;");
      str = str.replace(/'/g, "&#039;");
    } catch(e) {
    
    }
    return str;
}



function checkDisqus(){
	if(jQuery('.disqus-comments-link').length != 0){
		if(typeof DISQUSWIDGETS != 'undefined' && typeof DISQUSWIDGETS.displayCount != 'undefined'){
			updateComments();
		}else{
			setTimeout(function(){checkDisqus()},500);
		}
	}
}

var commentIterate = 0;
function updateComments(){
	//if (typeof console !== "undefined"){console.log("update attempt #"+commentIterate)};
	// first test if the comments were updated by disqus
	var firstItem = jQuery('.disqus-comments-link').first().text().toString();
	var numSplit = firstItem.split(' ');
	if (numSplit.length == 2){// if the result of the split gives us 2 items- a number and a string- then we know we have numbers from Disqus
		cleanupComments();
	}else{
		if(commentIterate < 10){ // only try 10 times (arbitrary number)
			commentIterate++;
			setTimeout(function(){updateComments()},1000);
		}	else{
			//if (typeof console !== "undefined"){console.log("stop trying")};
			cleanupComments();
		}
	}
	
}

function cleanupComments(){
	//if (typeof console !== "undefined"){console.log("removing comments")};
	jQuery('.disqus-comments-link').each(function(){
		var text = jQuery(this).text().toString();
		var commentArray = text.split(' ');
		//if (typeof console !== "undefined"){console.log(commentArray)};
		var numComments;
		var removeAnyway = false;
		if(commentArray.length == 2){ // we have a number and 'Comments' as separate items in the array.
			numComments = parseInt(commentArray[0]);
		}else{ 
			// means you have a an array with just "Comments" in it
			// (use case: when Disqus never returns a result for whatever reason, we still remove "Comments" link)
			removeAnyway = true;
		}

		if(numComments === 0 || removeAnyway){
			jQuery(this).remove();
		}

	});
}

jQuery(document).on('nvFrame-ready', function(e) {
	require(['Core'], function(Core) {
		jQuery('select').each(function(){
			Core.improveFormLook($(this).parent());
		});
	});
});

})(jQuery);

var ddTranslation = {
    searchButton : Drupal.t("Start Search"),
		currentDriverVersion : Drupal.t("Current Driver Version"),
		latestDriverVersion : Drupal.t("Latest Driver Version"),
		driver3DVision : Drupal.t("Latest 3D Vision Kit"),
		driverUpToDate : Drupal.t("Your driver is up to date with version %x"),
		downloadAnyway : Drupal.t("Download anyway"),
		OEMDriver : Drupal.t("Your product manufacturer requires you to download a driver for your device from %x"),
		OEMWebsite : Drupal.t("their website"),
		integratedGraphics : Drupal.t("Integrated Graphics"),
		downloadDriver : Drupal.t("Download Driver"),
		downloadDriverOptional : Drupal.t("Optional Driver"),
		cores : Drupal.t("Cores"),
		clock : Drupal.t("Clock"),
		baseclock : Drupal.t("Base Clock"),
		boostclock : Drupal.t("Boost Clock"),
		memory : Drupal.t("Memory"),
		supported : Drupal.t("Your device supports"),
		unsupported : Drupal.t("Your device does not support"),
		perGPU : Drupal.t("per GPU"),
		more : Drupal.t("more"),
		rescanSystem : Drupal.t("Rescan System"),
		downloadAllDrivers : Drupal.t("Download All Drivers"),
		autoDriverNotFound : Drupal.t("A driver cannot be found for this device"),
		noProductFoundTitle : Drupal.t("NVIDIA Products Not Found"),
		noProductFoundText : Drupal.t("We could not find any NVIDIA products within your system. Please try again or use the manual search."),
		noDriversFoundTitle : Drupal.t("No Drivers Found"),
		noDriversFoundText : Drupal.t("No drivers found. Please select a different combination or use the automatic driver detection option."),
		autoScanFailedTitle : Drupal.t("Autoscan Failed"),
		autoScanFailedText : Drupal.t("There was a problem automatically scanning your system.") + '<br/>' + Drupal.t("Please try again or use the manual search."),
		javaRequiredTitle : Drupal.t("Java Required"),
		javaRequiredText : "<a href=\"http://www.java.com/getjava\" id=\"installJava\"><img src=\"/sites/all/themes/geforce/images/java-logo.png\" alt=\"\" style=\"float:left;margin-right:5px;\" /></a>" + Drupal.t("Java is required. Click the icon to install.") + '<br/>' + Drupal.t("After installation, the browser may refresh."),
		manualSearchText : Drupal.t("Manually search for drivers for my NVIDIA products"),
		version : Drupal.t("Version"),
		releaseDate : Drupal.t("Release Date"),
		type : Drupal.t("Type"),
		series : Drupal.t("Series"),
		product : Drupal.t("Product"),
		download : Drupal.t("Download"),
		system : Drupal.t("System"),
		language : Drupal.t("Language"),
		driverType : Drupal.t("Driver Type"),
		downloadThankYou : Drupal.t("Thank you, your download for %x should start soon..."),
		downloadReturn : Drupal.t("Return to your driver results"),
		showDriverInfo : Drupal.t("Show Driver Information"),
		hideDriverInfo : Drupal.t("Hide Driver Information"),
		featuresSupported : Drupal.t("Features supported by your %x"),
		featuresUnsupported : Drupal.t("Features unsupported by your %x"),
		discoverFeatures : Drupal.t("Discovering features"),
		moreInformation : Drupal.t("More information"),
		primaryDevice : Drupal.t("This product has been detected as your primary device"),
		manualDriverSearchErrorTitle : Drupal.t("Unexpected error"),
		manualDriverSearchErrorText : Drupal.t("Unfortunately we cannot provide driver results at this time. Please try again later."),
		deployJavaFailedText : Drupal.t("There was a problem automatically scanning your system.")
	};
;
/**
 * Javascript code to store data as JSON strings in cookies. 
 * 
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/jsoncookies
 * License: Apache Software License 2
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.5
 * Updated: Jan 26, 2009 
 * 
 * Chnage Log:
 *   v 0.5
 *   -  Changed License from CC to Apache 2
 *   v 0.4
 *   -  Removed a extra comma in options (was breaking in IE and Opera). (Thanks Jason)
 *   -  Removed the parameter name from the initialize function
 *   -  Changed the way expires date was being calculated. (Thanks David)
 *   v 0.3
 *   -  Removed dependancy on json.js (http://www.json.org/json.js)
 *   -  empty() function only deletes the cookies set by CookieJar
 */

var CookieJar = function(options) {
	this.appendString = "__NV_";
	this.options = options;
	if (this.options.expires != '') {
		var date = new Date();
		date = new Date(date.getTime() + (this.options.expires * 1000));
		this.options.expires = '; expires=' + date.toGMTString();
	}
	if (this.options.path != '') {
		this.options.path = '; path=' + escape(this.options.path);
	}
	if (this.options.domain != '') {
		this.options.domain = '; domain=' + escape(this.options.domain);
	}
	if (this.options.secure == 'secure') {
		this.options.secure = '; secure';
	} else {
		this.options.secure = '';
	}
}

CookieJar.prototype = {

	/**
	 * Adds a name values pair.
	 */
	put: function(name, value) {
		name = this.appendString + name;
		cookie = this.options;
		var type = typeof value;
		switch(type) {
		  case 'undefined':
		  case 'function' :
		  case 'unknown'  : return false;
		  case 'boolean'  : 
		  case 'string'   : 
		  case 'number'   : value = String(value.toString());
		}
		
		/**
		 * Commenting this out because of prototype dependency
		 * If needed replace Object.toJSON(value) with the jQuery equivilent
		 **/
		//var cookie_str = name + "=" + escape(Object.toJSON(value));
		
		try {
			document.cookie = cookie_str + cookie.expires + cookie.path + cookie.secure;
		} catch (e) {
			return false;
		}
		return true;
	},
	
	putDelimitedCarat: function(name, value) {
		name = this.appendString + name;
		cookie = this.options;
		var cookieValues = '';
		for (var i = 0; i < value.length; i++) {
			cookieValues += (i == value.length - 1) ?  value[i] : value[i] + ',';
		}
		var cookie_str = name + "=" + escape(cookieValues);
		try {
			document.cookie = cookie_str + cookie.expires + cookie.path + cookie.secure;
		} catch (e) {
			alert(e);
			return false;
		}
		return true;
	},

	/**
	 * Added by shaworth
	 * Need this for our delimited usage
	 * @param name - The name of the cookie | String
	 * @param value - The value(s) | Array 
	 */
	putDelimited: function(name, value) {
		name = this.appendString + name;
		cookie = this.options;
		var cookieValues = '';
		for (var i = 0; i < value.length; i++) {
			cookieValues += (i == value.length - 1) ?  value[i] : value[i] + ',';
		}
		var cookie_str = name + "=" + escape(cookieValues);
		try {
			document.cookie = cookie_str + cookie.expires + cookie.path + cookie.secure;
		} catch (e) {
			alert(e);
			return false;
		}
		return true;
	},
	
	/**
	 * Added by shaworth
	 * Need this for delimited usage
	 * @param name - The name of the cookie you are retrieving | String
	 */
	getDelimited: function(name) {
		name = this.appendString + name;
		var cookies = document.cookie.match(name + '=(.*?)(;|$)');
		if (cookies) {
			return unescape(cookies[1]);
		} else {
			return null;
		}
	},

	/**
	 * Removes a particular cookie (name value pair) form the Cookie Jar.
	 */
	remove: function(name) {
		name = this.appendString + name;
		cookie = this.options;
		try {
			var date = new Date();
			date.setTime(date.getTime() - (3600 * 1000));
			var expires = '; expires=' + date.toGMTString();
			document.cookie = name + "=" + expires + cookie.path + cookie.secure;
		} catch (e) {
			return false;
		}
		return true;
	},

	/**
	 * Return a particular cookie by name;
	 */
	get: function(name) {
		name = this.appendString + name;
	
		var cookies = document.cookie.match(name + '=(.*?)(;|$)');
		
		if (cookies) {
			var cookie =   unescape(cookies[1]);
			return cookie;
		} else {
			return null;
		}
	},

	/**
	 * Empties the Cookie Jar. Deletes all the cookies.
	 */
	empty: function() {
		keys = this.getKeys();
		size = keys.size();
		for(i=0; i<size; i++) {
			this.remove(keys[i]);
		}
	},

	/**
	 * Returns all cookies as a single object
	 */
	getPack: function() {
		pack = {};
		try{
		keys = this.getKeys();
		}catch(e){
			console.log(e);
		}
		size = keys.size();
		for(i=0; i<size; i++) {
			pack[keys[i]] = this.get(keys[i]);
		}
		return pack;
	},

	/**
	 * Returns all keys.
	 */
	getKeys: function() {
		keys = $A();
		keyRe= /[^=; ]+(?=\=)/g;
		str  = document.cookie;
		CJRe = new RegExp("^" + this.appendString);
		while((match = keyRe.exec(str)) != undefined) {
			if (CJRe.test(match[0].strip())) {
				keys.push(match[0].strip().gsub("^" + this.appendString,""));
			}
		}
		return keys;
	}
};
;
/* SiteCatalyst code version: H.17.
Copyright 1997-2008 Omniture, Inc. More info available at
http://www.omniture.com */
/************************ ADDITIONAL FEATURES ************************
     Plugins
*/

var s_account="nvnvidiacomdev"
var s=s_gi(s_account)
s.dynamicAccountSelection=true
if (window.location.href == "http://www.nvidia.com.br") {
 s.dynamicAccountMatch="http://br.nvidia.com";
} 
else if (window.location.href == "http://www.nvidia.com.tw") {
 s.dynamicAccountMatch="http://tw.nvidia.com";
} 
else if (window.location.href == "http://www.nvidia.com.mx") {
 s.dynamicAccountMatch="nvidiala";
} 
else if (window.location.href == "http://www.nvidia.in") {
 s.dynamicAccountMatch="http://www.nvidia.co.in";
}
else if (window.location.href == "http://kr.nvidia.com") {
 s.dynamicAccountMatch="http://www.nvidia.co.kr";
}
else if (window.location.href == "http://th.nvidia.com") {
s.dynamicAccountMatch="http://www.nvidia.co.th";
}
else if (window.location.href == "http://cn.geforce.com") {
s.dynamicAccountMatch="http://www.geforce.cn";
}
else if (window.location.href == "http://www.geforce.com.tw") {
 s.dynamicAccountMatch="http://tw.geforce.com";
} 
else if (window.location.href == "http://jp.tegrazone.com") {
s.dynamicAccountMatch="http://www.tegrazone.jp";
}
else {
 s.dynamicAccountMatch=window.location.href
s.dynamicAccountList="nvidiabr=http://www.nvidia.com.br; nvidiatw=http://www.nvidia.com.tw; nvidiala=http://www.nvidia.com.mx; nvidiatr=http://www.nvidia.com.tr; nvidiaus=http://www.nvidia.com; nvidiabr=http://br.nvidia.com; nvidiacn=http://www.nvidia.cn; nvidiacn=http://cn.nvidia.com; nvidiade=http://www.nvidia.de; nvidiaes=http://www.nvidia.es; nvidiaes=http://es.nvidia.com; nvidiafr=http://www.nvidia.fr; nvidiain=http://www.nvidia.in; nvidiain=http://www.nvidia.co.in; nvidiait=http://www.nvidia.it; nvidiajp=http://www.nvidia.co.jp; nvidiajp=http://jp.nvidia.com; nvidiakr=http://www.nvidia.co.kr; nvidiala=http://ven.nvidia.com; nvidiala=http://la.nvidia.com; nvidiala=http://arg.nvidia.com; nvidiala=http://chl.nvidia.com; nvidiala=http://clm.nvidia.com; nvidiapl=http://www.nvidia.pl; nvidiaru=http://www.nvidia.ru; nvidiasg=http://sg.nvidia.com; nvidiatw=http://www.nvidia.com.tw; nvidiatw=http://tw.nvidia.com; nvidiauk=http://www.nvidia.co.uk; nvidianzoneus=http://www.nzone.com; nvidianzonede=http://de.nzone.com; nvidianzonees=http://es.nzone.com; nvidianzonefr=http://fr.nzone.com; nvidianzonefr=http://www.nzone.fr; nvidianzonein=http://in.nzone.com; nvidianzonein=http://www.nzone.in; nvidianzoneit=http://it.nzone.com; nvidianzoneuk=http://uk.nzone.com; nvidianzoneus=nzone.com; nvidiaslizoneus=http://www.slizone.com; nvidiaslizonecn=http://cn.slizone.com; nvidiaslizonecn=http://www.slizone.cn; nvidiaslizonede=http://de.slizone.com; nvidiaslizonees=http://es.slizone.com; nvidiaslizonefr=http://fr.slizone.com; nvidiaslizonein=http://in.slizone.com; nvidiaslizoneit=http://it.slizone.com; nvidiaslizonejp=http://jp.slizone.com; nvidiaslizonekr=http://kr.slizone.com; nvidiaslizonepl=http://pl.slizone.com; nvidiaslizoneru=http://www.slizone.ru; nvidiaslizoneru=http://ru.slizone.com; nvidiaslizonesg=http://sg.slizone.com; nvidiaslizonetw=http://tw.slizone.com; nvidiaslizoneuk=http://uk.slizone.com; nvidianvidiausstore=http://store.nvidia.com; nvidiaspeakvisual=http://www.speakvisual.com; nvidiadeveloperus=http://developer.nvidia.com; nvidiadeveloperus=https://developer.nvidia.com; nvidiadeveloperus=http://nvdeveloper.nvidia.com; nvidianvinfo=http://em3.nvidia.com; nvidiauk=http://www.nvidia.se; nvidiablogs=http://blogs.nvidia.com; nvidiaintelsinsides=http://www.intelsinsides.com; nvnvidiacomdev=http://developer.download.nvidia.com; nvnvidiacomdev=http://developer.download.nvidia.com; nvidianvidiaasia=http://www.nvidia.asia; nvidiageforceuk=http://uk.geforce.com; nvidiageforceuk=http://www.geforce.co.uk; nvidiaus=http://pressroom.nvidia.com; nvidiath=http://www.nvidia.co.th; nvidiageforcecn=http://www.geforce.cn; nvidiageforcecn=http://cn.geforce.com; nvidiageforcetw=http://tw.geforce.com; nvidiageforcetw=http://www.geforce.com.tw; nvidiageforceus=http://www.geforce.com; nvidiageforceus=http://geforce.com; nvidiagputechconf=http://www.gputechconf.com; nvidiaforums=http://forums.nvidia.com; nvidiategrazonede=http://de.tegrazone.com; nvidiategrazonees=http://es.tegrazone.com; nvidiategrazonefr=http://fr.tegrazone.com; nvidiategrazonein=http://in.tegrazone.com; nvidiategrazoneit=http://it.tegrazone.com; nvidiategrazonepl=http://pl.tegrazone.com; nvidiategrazoneru=http://ru.tegrazone.com; nvidiategrazoneuk=http://uk.tegrazone.com; nvidiategrazonecn=http://cn.tegrazone.com; nvidiategrazonejp=http://www.tegrazone.jp; nvidiategrazonekr=http://kr.tegrazone.com; nvidiategrazonetw=http://tw.tegrazone.com; nvidiategrazonebr=http://br.tegrazone.com; nvidiategrazonela=http://la.tegrazone.com; nvidiategrazoneus=http://www.tegrazone.com; nvidiategrazoneus=http://tegrazone.com; nvidiagputechconfcn=http://www.gputechconf.cn; nvidiagputechconfjp=http://www.gputechconf.jp; nvidiagputechconfreg=https://registration.gputechconf.com; nvidiategrazonela=http://ar.tegrazone.com; nvidiategrazonela=http://cl.tegrazone.com; nvidiategrazonela=http://co.tegrazone.com; nvidiategrazonela=http://mx.tegrazone.com; nvidiategrazonela=http://ve.tegrazone.com; nvidiacudadocs=http://docs.nvidia.com; nvidia3dvisionlive=http://www.3dvisionlive.com; nvidia3dvisionlive=http://photos.3dvisionlive.com"
}
/*s.dynamicAccountMatch=window.location.href*/
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,gz,run,tgz,rar,txt,pkg,m4v,swf"
s.linkInternalFilters="javascript:,nvidia.com,slizone.com,nzone.com,nvidia.cn,nvidia.de,nvidia.es,nvidia.fr,nvidia.in,nvidia.co.in,nvidia.it,nvidia.co.jp,nvidia.pl,nvidia.ru,nvidia.co.uk,nzone.fr,nzone.in,slizone.cn,slizone.ru,nvidia.se,nvidia.com.tw,speakvisual.com,intelsinsides.com,geforce.com,uk.geforce.com,nvidia.co.th,tegrazone.com,tegrazone.jp,gputechconf.com,gputechconf.cn"
s.linkLeaveQueryString=true
s.linkTrackVars="None"
s.linkTrackEvents="None"

/* For GeForce html tracking */
if(window.location.hostname == 'www.geforce.com' || window.location.hostname == 'nvidianews.nvidia.com')
s.pageName = window.location.href;

/*CookieDomainPeriod*/
var d = window.location.hostname;
if(d.indexOf('.com.br')>-1||d.indexOf('.co.in')>-1||d.indexOf('.co.jp')>-1||d.indexOf('.com.mx')>-1||d.indexOf('.com.tw')>-1||d.indexOf('.co.uk')>-1||d.indexOf('.co.kr')>-1||d.indexOf('.co.th')>-1)
s.cookieDomainPeriods="3";
else
s.cookieDomainPeriods="2";


/* Page Name Plugin Config */
s.siteID=""            // leftmost value in pagename
s.defaultPage=""       // filename to add when none exists
s.queryVarsList="partner,CMP,rssid,cid,gclid,seid,prid,game"     // query parameters to keep
s.pathExcludeDelim=";" // portion of the path to exclude
s.pathConcatDelim=""   // page name component separator
s.pathExcludeList=""   // elements to exclude from the path



/* Plugin Config */

/*Generic Event tracking*/
function genericTrackEvent(obj, Category, Action, label, site )
{
	//Pass on the parameters to GA
	try {		
		/*var Category = Category;
		var Action = Action;
		var label = label;*/
		//pageTracker._trackEvent(Category, Action, label);
		_gaq.push(['_trackEvent',Category,Action,label]); 
	}
	catch(err) {}

	//Pass on the parameters to Omniture
	if(Category != '') var customid = Category;
	else customid = '';
	if(Action != '') var eventName = " | " + Action;
	else eventName = '';
	if(label != '') var lbl =  " | " + label;
	else lbl = '';
	if(site != '') var url =  " | " + site;
	else url = '';
	
	omnTrack= customid + eventName + lbl + url;  
	customTracking(obj, omnTrack );
}

function featuresTracking(obj, featureId) {
var link_Name = featureId;
s.linkTrackVars='prop4';
//s.linkTrackEvents='event1';
if(link_Name){
s.prop4 = link_Name;
//s.eVar4 = s.prop4;
}
s.tl(obj,'o',link_Name);
}


/* tpl tracking */
function customTracking(obj, customId) {
var link_Name = customId;
s.linkTrackVars='prop4';
//s.linkTrackEvents='event1';
if(link_Name){
s.prop4 = link_Name;
//s.eVar4 = s.prop4;
}
s.tl(obj,'o',link_Name);
}

/* Videos Tracking */
function videosTracking(obj, videoId) {
var link_Name = videoId;

s.tl(obj,'o',link_Name);
}


/* DynamicObjectIDs config */
function s_getObjectID(o) {
var ID=o.href;
return ID;
}
s.getObjectID=s_getObjectID;

s.usePlugins=true
function s_doPlugins(s) {
	s.setupDynamicObjectIDs();


	/* Add calls to plugins here */

/* Plugin Example: getPagename v2.1*/	
	if(!s.pageType && !s.pageName)
		s.pageName=s.getPageName();
		s.prop30=window.location.href;

/* Plugin Examples: downloadLinkHandler  */
	/*s.downloadLinkHandler("pdf,ppt,doc")*/
	s.downloadLinkHandler()

	/* Plugin Example: ExitLinkHandler */

s.exitLinkHandler("javascript:,nvidia.com,slizone.com,nzone.com,www.slizone.com,www.nvidia.com,www.nzone.com,nvidia.cn,nvidia.de,nvidia.es,nvidia.fr,nvidia.in,nvidia.co.in,nvidia.it,nvidia.co.jp,nvidia.co.kr,nvidia.pl,nvidia.ru,nvidia.co.uk,nzone.fr,nzone.in,slizone.cn,slizone.ru,nvidia.se,nvidia.com.tw,speakvisual.com,intelsinsides.com,geforce.com,uk.geforce.com,nvidia.co.th,tegrazone.com,tegrazone.jp,gputechconf.com,gputechconf.cn")

/* Plugin Example: getNewRepeat 1.0 */
	s.prop15=s.getNewRepeat();

	s.prop3=navigator.userAgent;


	/* External Campaigns */
	if(!s.campaign)
		s.campaign=s.getQueryParam('cid,CMP,id,siteid,pageid,adid,creativeid,rssid,gclid,seid,prid,game');

	/* Plugin Example: setCustomPath v1.0 */
if(!s.campaign) s.campaign=s.getQueryParam('cid')
s.campaign=s.getValOnce(s.campaign,'s_campaign',0)
s.prop19=s.setCustomPath(s.campaign,'s_campaign','ExtCmp=',s.pageName);
	
/*Campaign ID into s.prop for Visits and Unique Visitors and into eVar*/
if(s.campaign){
	s.eVar20=s.prop20=s.campaign;
	}
	

/*Get and Persist Campaign ID and concat with Page Name - Place into s.prop for Path*/
var getCampaign = s.getAndPersistValue(s.campaign,'s_cp_persist',0);
var NoCampaignPageName = 'Non CMP : ' + s.pageName;
var CampaignandPage= getCampaign + ' : ' + s.pageName;
if(!getCampaign){
	s.prop21=NoCampaignPageName;
} else {
	s.prop21=CampaignandPage;
}	
	
	/* Site Search 
	if(s.prop6){
		s.prop6=s.prop6.toLowerCase();
		s.eVar4=s.prop6;
		var t_search=s.getValOnce(s.eVar4,'ev4',0);
		if(t_search){
			s.events=s.apl(s.events,"event5",",",2);
		}
	}


*/

	/* Based on the name of the page - choose query param to populate IS (search term), set to lowercase, copy to evar, and set deduped event */
if(s.pageName=='object/nv_search_us.html' || 'object/nv_search_sg.html' || 'object/nv_search_jp.html' || 'object/nv_search_cn.html' || 'object/nv_search_tw.html' || 'object/nv_search_kr.html' || 'object/nv_search_uk.html' || 'object/nv_search_de.html' || 'object/nv_search_fr.html' || 'object/nv_search_it.html' || 'object/nv_search_la.html ' || 'object/nv_search_br.html' || 'object/nv_search_in.html' || 'object/nv_search_pl.html' || 'object/nv_search_ru.html' || 'object/nv_search_es.html' || 'object/search_cn.html' || 'object/search_fr.html ' || 'object/search_de.html ' || 'object/search_in.html ' || 'object/search_it.html ' || 'object/search_jp.html' || 'object/search_kr.html' || 'object/search_pl.html' || 'object/search_ru.html' || 'object/search_sg.html' || 'object/search_es.html ' || 'object/search_tw.html' || 'object/search_uk.html ' || 'object/search_us.html' ){
	s.prop31=s.getQueryParam('q');
	s.prop31=s.prop31.toLowerCase();
	s.eVar31=s.prop31;
	var t_search=s.getValOnce(s.eVar31,'ev1',0);
	if(t_search){
		s.events=s.apl(s.events,'event1',',',1);}
}else if(s.pageName=='Search/SearchResults'){
s.prop31=s.getQueryParam('keywords');
s.prop31=s.prop31.toLowerCase();
	s.eVar31=s.prop31;
	var t_search=s.getValOnce(s.eVar31,'ev1',0);
	if(t_search){
		s.events=s.apl(s.events,'event1',',',1);}
}
}
s.doPlugins=s_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */




/*********************************************************************
 *
 *  Plugins
 *
 ********************************************************************/
/*
 * Plugin: downloadLinkHandler 0.5 - identify and report download links
 */
s.downloadLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+"ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+"if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");

/* 
 * Plugin: setCustomPath v1.0 
 */
s.setCustomPath=new Function("v","c","p","pt",""
+"var s=this,pt=pt?pt:'no value sent',k=s.c_r(c);if(v){return p+v+':'"
+"+pt} else return k?pt:'';");

/*
 * Plugin: exitLinkHandler 0.5 - identify and report exit links
 */
s.exitLinkHandler=new Function("p",""
+"var s=this,h=s.p_gh(),n='linkInternalFilters',i,t;if(!h||(s.linkTyp"
+"e&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;h="
+"s.linkLeaveQueryString||i<0?h:h.substring(0,i);if(s.lt(h)=='e')s.li"
+"nkType='e';else h='';s[n]=t;return h;");

/*
 * Plugin: getNewRepeat 1.0 - Return whether user is new or repeat
 */
s.getNewRepeat=new Function(""
+"var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime"
+"(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w("
+"'s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s"
+".c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cv"
+"al+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else retur"
+"n 'Repeat';");

/*
 * Plugin: linkHandler 0.5 - identify and report custom links
 */
s.linkHandler=new Function("p","t",""
+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");
s.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");

/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");
/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*
 * Plugin: getPageName v2.1 - parse URL and return
 */
s.getPageName=new Function("u",""
+"var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+"x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+"queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+"string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+"ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+"efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+"z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+"substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+"ubstring(x+1)}return n");

/*
* Plugin Utility: Replace v1.0
*/
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
* DynamicObjectIDs v1.4: Setup Dynamic Object IDs based on URL
*/
s.setupDynamicObjectIDs=new Function(""
+"var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv"
+">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else"
+" if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa"
+"lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho"
+"re=1}");
s.setOIDs=new Function("e",""
+"var s=s_c_il["+s._in+"],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i"
+",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)"
+"{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b"
+"=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_"
+"objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re"
+"pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';"
+"if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0"
+")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this."
+"s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o"
+"]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");

/****************************** MODULES *****************************/
/* Module: Media */
s.m_Media_c="(`OWhilePlaying~='s_media_'+m._in+'_~unc^D(~;`E~m.ae(mn,l,\"'+p+'\",~){var m=this~o;w.percent=((w.off^e+1)/w`X)*100;w.percent=w.percent>1~o.'+f~=new ~o.Get~:Math.floor(w.percent);w.timeP"
+"layed=i.t~}`x p');p=tcf(o)~Time~x,x!=2?p:-1,o)}~if(~m.monitor)m.monitor(m.s,w)}~m.s.d.getElementsByTagName~ersionInfo~'^N_c_il['+m._in+'],~'o','var e,p=~else~i.to~=Math.floor(~}catch(e){p=~m.track~"
+"s.wd.addEventListener~.name~m.s.rep(~layState~||^8~Object~m.s.wd[f1]~^A+=i.t+d+i.s+d+~.length~parseInt(~Player '+~s.wd.attachEvent~'a','b',c~Media~pe='m~;o[f1]~m.s.isie~.current~);i.~p<p2||p-p2>5)~"
+".event=~m.close~i.lo~vo.linkTrack~=v+',n,~.open~){w.off^e=~;n=m.cn(n);~){this.e(n,~v=e='None';~Quick~MovieName()~);o[f~out(\"'+v+';~return~1000~i.lx~m.ol~o.controls~m.s.ape(i.~load',m.as~)}};m.~scr"
+"ipt';x.~,t;try{t=~Version()~n==~'--**--',~pev3~o.id~i.ts~tion~){mn=~1;o[f7]=~();~(x==~){p='~&&m.l~l[n])~:'')+i.e~':'E')+o~var m=s~!p){tcf~xc=m.s.~Title()~()/~7+'~+1)/i.l~;i.e=''~3,p,o);~m.l[n]=~Dat"
+"e~5000~;if~i.lt~';c2='~tm.get~Events~set~Change~)};m~',f~(x!=~4+'=n;~~^N.m_i('`c');m.cn=f`2n`5;`x `Rm.s.rep(`Rn,\"\\n\",''),\"\\r\",''),^9''^g`o=f`2n,l,p,b`5,i`8`U,tm`8^X,a='',x`ql=`Yl)`3!l)l=1`3n&"
+"&p){`E!m.l)m.l`8`U`3m.^K`k(n)`3b&&b.id)a=b.id;for (x in m.l)`Em.l[x]^J[x].a==a)`k(m.l[x].n`hn=n;i.l=l;i.p=m.cn(p`ha=a;i.t=0;^C=0;i.s`M^c`C^R`y`hlx=0;^a=i.s;`l=0^U;`L=-1;^Wi}};`k=f`2n`r0,-1^g.play=f"
+"`2n,o`5,i;i=m.e(n,1,o`hm`8F`2`Ii`3m.l){i=m.l[\"'+`Ri.n,'\"','\\\\\"')+'\"]`3i){`E`z==1)m.e(i.n,3,-1`hmt=^e`Cout(i.m,^Y)}}'`hm(^g.stop=f`2n,o`r2,o)};`O=f`2n`5^Z `0) {m.e(n,4,-1^4e=f`2n,x,o`5,i,tm`8^"
+"X,ts`M^c`C^R`y),ti=`OSeconds,tp=`OMilestones,z`8Array,j,d=^9t=1,b,v=`OVars,e=`O^d,`dedia',^A,w`8`U,vo`8`U`qi=n^J&&m.l[n]?m.l[n]:0`3i){w`Q=n;w`X=i.l;w.playerName=i.p`3`L<0)w`j\"OPEN\";`K w`j^H1?\"PL"
+"AY\":^H2?\"STOP\":^H3?\"MONITOR\":\"CLOSE\")));w`o`C`8^X^Gw`o`C.^e`C(i.s*`y)`3x>2||^i`z&&^i2||`z==1))) {b=\"`c.\"+name;^A = ^2n)+d+i.l+d+^2p)+d`3x){`Eo<0&&^a>0){o=(ts-^a)+`l;o=o<i.l?o:i.l-1}o`Mo)`3"
+"x>=2&&`l<o){i.t+=o-`l;^C+=o-`l;}`Ex<=2){i.e+=^H1?'S^M;`z=x;}`K `E`z!=1)m.e(n,1,o`hlt=ts;`l=o;`W`0&&`L>=0?'L'+`L^L+^i2?`0?'L^M:'')^Z`0){b=0;`d_o'`3x!=4`p`600?100`A`3`F`E`L<0)`d_s';`K `Ex==4)`d_i';`K"
+"{t=0;`sti=ti?`Yti):0;z=tp?m.s.sp(tp,','):0`3ti&&^C>=ti)t=1;`K `Ez){`Eo<`L)`L=o;`K{for(j=0;j<z`X;j++){ti=z[j]?`Yz[j]):0`3ti&&((`L^T<ti/100)&&((o^T>=ti/100)){t=1;j=z`X}}}}}}}`K{m.e(n,2,-1)^Z`0`pi.l`6"
+"00?100`A`3`F^W0`3i.e){`W`0&&`L>=0?'L'+`L^L^Z`0){`s`d_o'}`K{t=0;m.s.fbr(b)}}`K t=0;b=0}`Et){`mVars=v;`m^d=e;vo.pe=pe;vo.^A=^A;m.s.t(vo,b)^Z`0){^C=0;`L=o^U}}}}`x i};m.ae=f`2n,l,p,x,o,b){`En&&p`5`3!m."
+"l||!m.^Km`o(n,l,p,b);m.e(n,x,o^4a=f`2o,t`5,i=^B?^B:o`Q,n=o`Q,p=0,v,c,c1,c2,^Ph,x,e,f1,f2`1oc^h3`1t^h4`1s^h5`1l^h6`1m^h7`1c',tcf,w`3!i){`E!m.c)m.c=0;i`1'+m.c;m.c++}`E!^B)^B=i`3!o`Q)o`Q=n=i`3!^0)^0`8"
+"`U`3^0[i])`x;^0[i]=o`3!xc)^Pb;tcf`8F`2`J0;try{`Eo.v`H&&o`g`c&&^1)p=1`N0`B`3^O`8F`2`J0^6`9`t`C^7`3t)p=2`N0`B`3^O`8F`2`J0^6`9V`H()`3t)p=3`N0`B}}v=\"^N_c_il[\"+m._in+\"],o=^0['\"+i+\"']\"`3p==1^IWindo"
+"ws `c `Zo.v`H;c1`np,l,x=-1,cm,c,mn`3o){cm=o`g`c;c=^1`3cm&&c^Ecm`Q?cm`Q:c.URL;l=cm.dura^D;p=c`gPosi^D;n=o.p`S`3n){`E^88)x=0`3^83)x=1`3^81`T2`T4`T5`T6)x=2;}^b`Ex>=0)`4`D}';c=c1+c2`3`f&&xc){x=m.s.d.cr"
+"eateElement('script');x.language='j^5type='text/java^5htmlFor=i;x`j'P`S^f(NewState)';x.defer=true;x.text=c;xc.appendChild(x`v6]`8F`2c1+'`E^83){x=3;'+c2+'}^e`Cout(`76+',^Y)'`v6]()}}`Ep==2^I`t`C `Z(`"
+"9Is`t`CRegistered()?'Pro ':'')+`9`t`C^7;f1=f2;c`nx,t,l,p,p2,mn`3o^E`9`u?`9`u:`9URL^Gn=`9Rate^Gt=`9`CScale^Gl=`9Dura^D^Rt;p=`9`C^Rt;p2=`75+'`3n!=`74+'||`i{x=2`3n!=0)x=1;`K `Ep>=l)x=0`3`i`42,p2,o);`4"
+"`D`En>0&&`7^S>=10){`4^V`7^S=0}`7^S++;`7^j`75+'=p;^e`C`w`72+'(0,0)\",500)}'`e`8F`2`b`v4]=-^F0`e(0,0)}`Ep==3^IReal`Z`9V`H^Gf1=n+'_OnP`S^f';c1`nx=-1,l,p,mn`3o^E`9^Q?`9^Q:`9Source^Gn=`9P`S^Gl=`9Length^"
+"R`y;p=`9Posi^D^R`y`3n!=`74+'){`E^83)x=1`3^80`T2`T4`T5)x=2`3^80&&(p>=l||p==0))x=0`3x>=0)`4`D`E^83&&(`7^S>=10||!`73+')){`4^V`7^S=0}`7^S++;`7^j^b`E`72+')`72+'(o,n)}'`3`V)o[f2]=`V;`V`8F`2`b1+c2)`e`8F`2"
+"`b1+'^e`C`w`71+'(0,0)\",`73+'?500:^Y);'+c2`v4]=-1`3`f)o[f3]=^F0`e(0,0^4as`8F`2'e',`Il,n`3m.autoTrack&&`G){l=`G(`f?\"OBJECT\":\"EMBED\")`3l)for(n=0;n<l`X;n++)m.a(^K;}')`3`a)`a('on^3);`K `E`P)`P('^3,"
+"false)";
s.m_i("Media");

 /* Utility Function: p_gh*/
s.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");

/*
 * Utility Function: p_c
 */
s.p_c=new Function("v","c",""
+"var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+"ngth:x).toLowerCase()?v:0");

/*
 * Plugin: getAndPersistValue 0.3 - get a value on every page
 */
s.getAndPersistValue=new Function("v","c","e",""
	+"var s=this,a=new Date;"
	+"e=e?e:0;"
	+"a.setTime(a.getTime()+e*86400000);"
	+"if(v)s.c_w(c,v,e?a:0);"
	+"return s.c_r(c);"
);



s.loadModule("Media")
s.Media.autoTrack=true
s.Media.trackVars="None"
s.Media.trackEvents="None"


/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace="nvidia"
s.trackingServer="nsomniture.nvidia.com"
s.trackingServerSecure="omniture.nvidia.com"
s.dc=122

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="=fun@6(~){`Ks=^S~$h ~.substring(~.indexOf(~;@t~';`Bt`t~=new Fun@6(~.toLowerCase()~s_c_il['+s^sn+']~};s.~`m@t~.length~.toUpperCase~=new Object~s"
+".wd~','~){@t~')q='~.location~var ~s.pt(~dynamicAccount~link~s.apv~='+@y(~)@tx^m!Object$eObject.prototype$eObject.prototype[x])~);s.~Element~.getTime()~=new Array~ookieDomainPeriods~s.m_~referrer~.p"
+"rotocol~=new Date~BufferedRequests~}c$s(e){~visitor~;@X^js[k],255)}~=''~javaEnabled~conne@6^M~@0c_i~Name~:'')~onclick~}@t~else ~ternalFilters~javascript~s.dl~@Os.b.addBehavior(\"# default# ~=parseF"
+"loat(~'+tm.get~=='~cookie~s.rep(~s.^T~track~o@0oid~browser~.parent~window~colorDepth~String~while(~.host~.lastIndexOf('~s.sq~s.maxDelay~s.vl_g~r=s.m(f)?s[f](~for(~s.un~s.eo~&&s.~parseInt(~t=s.ot(o)"
+"~j='1.~#4URL~lugins~dynamicVariablePrefix~document~Type~Sampling~s.rc[un]~Download~Event~');~this~tfs~resolution~s.c_r(~s.c_w(~s.eh~s.isie~s.vl_l~s.vl_t~Height~t,h){t=t?t~tcf~isopera~ismac~escape(~"
+".href~screen.~s.fl(~Version~harCode~&&(~_'+~variableProvider~s.pe~)?'Y':'N'~:'';h=h?h~._i~e&&l$HSESSION'~f',~onload~name~home#4~objectID~}else{~.s_~s.rl[u~Width~s.ssl~o.type~Timeout(~ction~Lifetime"
+"~.mrq(\"'+un+'\")~sEnabled~;i++)~'){q='~&&l$HNONE'){~ExternalLinks~charSet~onerror~lnk~currencyCode~.src~s=s_gi(~etYear(~&&!~Opera~'s_~;try{~Math.~s.fsg~s.ns6~s.oun~InlineStats~Track~'0123456789~&&"
+"t~s[k]=~s.epa(~m._d~n=s.oid(o)~,'sqs',q);~LeaveQuery~')>=~'=')~)+'/~){n=~\",''),~vo)~s.sampled~=s.oh(o);~+(y<1900?~s.disable~ingServer~n]=~true~sess~campaign~lif~if(~'http~,100)~s.co(~x in ~s.ape~f"
+"fset~s.c_d~s.br~'&pe~s.gg(~s.gv(~s[mn]~s.qav~,'vo~s.pl~=(apn~Listener~\"s_gs(\")~vo._t~b.attach~d.create~=s.n.app~(''+~!='~'||t~'+n~s()+'~){p=~():''~a):f(~+1))~a['!'+t]~){v=s.n.~channel~un)~.target"
+"~o.value~g+\"_c\"]~\".tl(\")~etscape~(ns?ns:~s_')t=t~k',s.bc~omePage~s.d.get~')<~||!~[b](e);~m[t+1](~return~mobile~height~events~random~code~'MSIE ~rs,~un,~,pev~floor(~atch~s.num(~[\"s_\"+~s.c_gd~s"
+".dc~s.pg~,'lt~.inner~transa~;s.gl(~\"m_\"+n~idt='+~page~Group,~.fromC~sByTag~?'&~+';'~t&&~1);~){s.~[t]=~>=5)~[t](~=l[n];~!a[t])~~s._c=@Nc';`F=^1`5!`F`hn){`F`hl`U;`F`hn=0;}s^sl=`F`hl;s^sn=`F`hn;s^sl"
+"[s^s@os;`F`hn++;s.m`0m){`2$Gm)`4'{$d0`Afl`0x,l){`2x?$Gx)`30,l):x`Aco`0o`H!o)`2o;`Kn`E,x;^B@xo)@tx`4'select$d0&&x`4'filter$d0)n[x]=o[x];`2n`Anum`0x){x`e+x;^B`Kp=0;p<x`C;p++)@t(@V')`4x`3p,p$O<0)`20;`"
+"21`Arep=s_r;@y`0x`1,h=@VABCDEF',i,c=s.@E,n,l,e,y`e;c=c?c`D$M`5x){x`e+x`5c`tAUTO'^m'').c^lAt){^Bi=0;i<x`C@A{c=x`3i,i+#Bn=x.c^lAt(i)`5n>127){l=0;e`e;^4n||l<4){e=h`3n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+"
+"='%u'+e}`Bc`t+')y+='%2B';`my+=^gc)}x=y^zx=x?`v^g''+x),'+`G%2B'):x`5x&&c^Eem==1&&x`4'%u$d0&&x`4'%U$d0){i=x`4'%^R^4i>=0){i++`5h`38)`4x`3i,i+1)`D())>=0)`2x`30,i)+'u00'+x`3i);i=x`4'%',i)}}}}`2x`Aepa`0x"
+"`1;`2x?un^g`v''+x,'+`G ')):x`Apt`0x,d,f,a`1,t=x,z=0,y,r;^4t){y=t`4d);y=y<0?t`C:y;t=t`30,y);^At,$Nt,a)`5r)`2r;z+=y+d`C;t=x`3z,x`C);t=z<x`C?t:''}`2''`Aisf`0t,a){`Kc=a`4':')`5c>=0)a=a`30,c)`5t`30,2)`t"
+"$Z`32);`2(t!`e@W==a)`Afsf`0t,a`1`5`La,`G,'is^ut))@Q+=(@Q!`e?`G`j+t;`20`Afs`0x,f`1;@Q`e;`Lx,`G,'fs^uf);`2@Q`Ac_d`e;$vf`0t,a`1`5!$tt))`21;`20`Ac_gd`0`1,d=`F`J^5^w,n=s.fpC`V,p`5!n)n=s.c`V`5d@L$0@gn?^F"
+"n):2;n=n>2?n:2;p=d^6.')`5p>=0){^4p>=0&&n>1$Ld^6.',p-#Bn--}$0=p>0&&`Ld,'.`Gc_gd^u0)?d`3p):d}}`2$0`Ac_r`0k`1;k=@y(k);`Kc=' '+s.d.`u,i=c`4' '+k+@e,e=i<0?i:c`4';',i),v=i<0?'':@Yc`3i+2+k`C,e<0?c`C:e));`"
+"2v$H[[B]]'?v:''`Ac_w`0k,v,e`1,d=$v(),l=s.`u@7,t;v`e+v;l=l?$Gl)`D$M`5^t@Ct=(v!`e?^Fl?l:0):-60)`5t){e`Z;e.setTime(e`T+(t*1000))}`lk@Cs.d.`u=k+'`Pv!`e?v:'[[B]]')+'; path=/;'+(^t?' expires='+e.toGMT^3("
+")#9`j+(d?' domain='+d#9`j;`2^Vk)==v}`20`Aeh`0o,e,r,f`1,b='s^ne+'^ns^sn,n=-1,l,i,x`5!^Xl)^Xl`U;l=^Xl;^Bi=0;i<l`C&&n<0;i++`Hl[i].o==o&&l[i].e==e)n=i`ln<0@gi;l[n]`E}x#Gx.o=o;x.e=e;f=r?x.b:f`5r||f){x.b"
+"=r?0:o[e];x.o[e]=f`lx.b){x.o[b]=x.b;`2b}`20`Acet`0f,a,t,o,b`1,r,^d`5`O>=5^m!s.^e||`O>=7)){^d`7's`Gf`Ga`Gt`G`Ke,r@O^A$Na)`br=s.m(t)?s#Fe):t(e)}`2r^Rr=^d(s,f,a,t)^z@ts.^f^Eu`4$n4@d0)r=s.m(b)?s[b](a):"
+"b(a);else{^X(`F,'@F',0,o);^A$Na`Reh(`F,'@F',1)}}`2r`Ag^Tet`0e`1;`2`w`Ag^Toe`7'e`G`Ks=`9,c;^X(^1,\"@F\",1`Re^T=1;c=s.t()`5c)s.d.write(c`Re^T=0;`2@p'`Rg^Tfb`0a){`2^1`Ag^Tf`0w`1,p=w^0,l=w`J;`w=w`5p&&p"
+"`J!=l&&p`J^5==l^5){`w=p;`2s.g^Tf(`w)}`2`w`Ag^T`0`1`5!`w){`w=`F`5!s.e^T)`w=s.cet('g^T^u`w,'g^Tet',s.g^Toe,'g^Tfb')}`2`w`Amrq`0u`1,l=@1],n,r;@1]=0`5l)^Bn=0;n<l`C;n++){r#Gs.mr(0,0,r.r,0,r.t,r.u)}`Abr`"
+"0id,rs`1`5@m`a$e^W@Nbr',rs))$1l=rs`Aflush`a`0`1;s.fbr(0)`Afbr`0id`1,br=^V@Nbr')`5!br)br=$1l`5br`H!@m`a)^W@Nbr`G'`Rmr(0,0,br)}$1l=0`Amr`0@q,q,$oid,ta,u`1,dc=$w,t1=s.`x@n,t2=s.`x@nSecure,ns=s.`c`ispa"
+"ce,un=u?u:$Ys.f$S,unc=`v$p'_`G-'),r`E,l,imn=@Ni^n($S,im,b,e`5!rs){rs=@u'+(@3?'s'`j+'://'+(t1?(@3@W2?t2:t1):($Y(@3?'102':unc))+'.'+($w?$w:112)+'.2o7.net')@fb/ss/'+^C+'/'+(s.$i?'5.1':'1'@fH.17/'+@q+'"
+"?AQB=1&ndh=1'+(q?q`j+'&AQE=1'`5^Y@Ls.^f`H`O>5.5)rs=^j$o4095);`mrs=^j$o2047)`lid){$1(id,rs);$h}`ls.d.images&&`O>=3^m!s.^e||`O>=7)^m@R<0||`O>=6.1)`H!s.rc)s.rc`E`5!^O){^O=1`5!s.rl)s.rl`E;@1n]`U;set@5'"
+"@t^1`hl)^1.`9@8',750)^zl=@1n]`5l){r.t=ta;r.u=un;r.r=rs;l[l`C]=r;`2''}imn+='^n^O;^O++}im=`F[imn]`5!im)im=`F[im@onew Image;im@0l=0;im.^v`7'e`G^S@0l=1`5^1`hl)^1.`9@8^Rim@I=rs`5rs`4$2=@d0^m!ta||ta`t_se"
+"lf$Ia`t_top'||(`F.^w@Wa==`F.^w))){b=e`Z;^4!im@0l&&e`T-b`T<500)e`Z}`2''}`2'<im'+'g sr'+'c=\"'+rs+'\" width=1 $j=1 border=0 alt=\"\">'`Agg`0v`1`5!`F['s^nv])`F['s^nv]`e;`2`F['s^nv]`Aglf`0t,a`Ht`30,2)`"
+"t$Z`32);`Ks=^S,v=$3t)`5v)s#Dv`Agl`0v`1`5$x)`Lv,`G,'gl^u0)`Agv`0v`1;`2s['vpm^nv]?s['vpv^nv]:(s[v]?s[v]`j`Ahavf`0t,a`1,b=t`30,4),x=t`34),n=^Fx),k='g^nt,m='vpm^nt,q=t,v=s.`N@UVa$oe=s.`N@U^Qs,mn;@X$4t)"
+"`5s.@G||^D||^p`H^p^Epe`30,4)$H@G_'){mn=^p`30,1)`D()+^p`31)`5$5){v=$5.`xVars;e=$5.`x^Qs}}v=v?v+`G+^Z+`G+^Z2:''`5v@L`Lv,`G,'is^ut))s[k]`e`5t`t$k'&&e)@Xs.fs(s[k],e)}s[m]=0`5t`t^K`ID`6`cID`Ivid`6^I@Bg'"
+"`d`Bt`t`X@Br'`d`Bt`tvmk`Ivmt`6@E@Bce'`5s[k]&&s[k]`D()`tAUTO')@X'ISO8859-1';`Bs[k]^Eem==2)@X'UTF-8'}`Bt`t`c`ispace`Ins`6c`V`Icdp`6`u@7`Icl`6^o`Ivvp`6@H`Icc`6$R`Ich`6#0@6ID`Ixact`6@r`Iv0`6^U`Is`6^2`I"
+"c`6`o^k`Ij`6`f`Iv`6`u@9`Ik`6`z@2`Ibw`6`z^b`Ibh`6`g`Ict`6^x`Ihp`6p^J`Ip';`B$tx)`Hb`tprop`Ic$J;`Bb`teVar`Iv$J;`Bb`thier@Bh$J`d`ls[k]@W$H`N`i'@W$H`N^M')$6+='&'+q+'`Ps[k]);`2''`Ahav`0`1;$6`e;`L^a,`G,'h"
+"av^u0);`2$6`Alnf`0^c`8^r`8:'';`Kte=t`4@e`5t@We>0&&h`4t`3te$O>=0)`2t`30,te);`2''`Aln`0h`1,n=s.`N`is`5n)`2`Ln,`G,'ln^uh);`2''`Altdf`0^c`8^r`8:'';`Kqi=h`4'?^Rh=qi>=0?h`30,qi):h`5#Ah`3h`C-(t`C$O`t.'+t)"
+"`21;`20`Altef`0^c`8^r`8:''`5#Ah`4t)>=0)`21;`20`Alt`0h`1,lft=s.`N^PFile^Ms,lef=s.`NEx`n,@s=s.`NIn`n;@s=@s?@s:`F`J^5^w;h=h`8`5s.`x^PLinks&&lf#A`Llft,`G$yd^uh))`2'd'`5s.`x@D&&h`30,1)$H# '^mlef||@s)^m!"
+"lef||`Llef,`G$ye^uh))^m!@s$e`L@s,`G$ye^uh)))`2'e';`2''`Alc`7'e`G`Ks=`9,b=^X(^S,\"`k\"`R@G=@w^S`Rt(`R@G=0`5b)`2^S$f`2@p'`Rbc`7'e`G`Ks=`9,f,^d`5s.d^Ed.all^Ed.all.cppXYctnr)$h;^D=e@I`S?e@I`S:e$T;^d`7"
+"\"s\",\"`Ke@O@t^D^m^D.tag`i||^D^0`S||^D^0Node))s.t()`b}\");^d(s`Reo=0'`Roh`0o`1,l=`F`J,h=o^h?o^h:'',i,j,k,p;i=h`4':^Rj=h`4'?^Rk=h`4'/')`5h^mi<0||(j>=0&&i>j)||(k>=0&&i>k))$Lo`Y&&o`Y`C>1?o`Y:(l`Y?l`Y"
+"`j;i=l.path^w^6/^Rh=(p?p+'//'`j+(o^5?o^5:(l^5?l^5`j)+(h`30,1)$H/'?l.path^w`30,i<0?0:i@f'`j+h}`2h`Aot`0o){`Kt=o.tag`i;t=t@W`D?t`D$M`5t`tSHAPE')t`e`5t`Ht`tINPUT'&&@4&&@4`D)t=@4`D();`B!#Ao^h)t='A';}`2"
+"t`Aoid`0o`1,^G,p,c,n`e,x=0`5t@L`y$Lo`Y;c=o.`k`5o^h^mt`tA$I`tAREA')^m!c$ep||p`8`4'`o$d0))n@k`Bc@g`vs.rep(`vs.rep$Gc,\"\\r@h\"\\n@h\"\\t@h' `G^Rx=2}`B$U^mt`tINPUT$I`tSUBMIT')@g$U;x=3}`Bo@I@W`tIMAGE')"
+"n=o@I`5n){`y=^jn@v;`yt=x}}`2`y`Arqf`0t,un`1,e=t`4@e,u=e>=0?`G+t`30,e)+`G:'';`2u&&u`4`G+un+`G)>=0?@Yt`3e$O:''`Arq`0un`1,c=un`4`G),v=^V@Nsq'),q`e`5c<0)`2`Lv,'&`Grq^u$S;`2`L$p`G,'rq',0)`Asqp`0t,a`1,e="
+"t`4@e,q=e<0?'':@Yt`3e+1)`Rsqq[q]`e`5e>=0)`Lt`30,e),`G@b`20`Asqs`0$pq`1;^7u[u@oq;`20`Asq`0q`1,k=@Nsq',v=^Vk),x,c=0;^7q`E;^7u`E;^7q[q]`e;`Lv,'&`Gsqp',0);`L^C,`G@bv`e;^B@x^7u`Q)^7q[^7u[x]]+=(^7q[^7u[x"
+"]]?`G`j+x;^B@x^7q`Q&&^7q[x]^mx==q||c<2)){v+=(v#8'`j+^7q[x]+'`Px);c++}`2^Wk,v,0)`Awdl`7'e`G`Ks=`9,r=@p,b=^X(`F,\"^v\"),i,o,oc`5b)r=^S$f^Bi=0;i<s.d.`Ns`C@A{o=s.d.`Ns[i];oc=o.`k?\"\"+o.`k:\"\"`5(oc`4$"
+"B<0||oc`4\"@0oc(\")>=0)&&oc`4$W<0)^X(o,\"`k\",0,s.lc);}`2r^R`Fs`0`1`5`O>3^m!^Y$es.^f||`O#E`Hs.b^E$D^Q)s.$D^Q('`k',s.bc);`Bs.b^Eb.add^Q$A)s.b.add^Q$A('clic$a,false);`m^X(`F,'^v',0,`Fl)}`Avs`0x`1,v=s"
+".`c^N,g=s.`c^N#5k=@Nvsn^n^C+(g?'^ng`j,n=^Vk),e`Z,y=e.g@K);e.s@Ky+10@l1900:0))`5v){v*=100`5!n`H!^Wk,x,e))`20;n=x`ln%10000>v)`20}`21`Adyasmf`0t,m`H#Am&&m`4t)>=0)`21;`20`Adyasf`0t,m`1,i=t?t`4@e:-1,n,x"
+"`5i>=0&&m){`Kn=t`30,i),x=t`3i+1)`5`Lx,`G,'dyasm^um))`2n}`20`Auns`0`1,x=s.`MSele@6,l=s.`MList,m=s.`MM$s,n,i;^C=^C`8`5x&&l`H!m)m=`F`J^5`5!m.toLowerCase)m`e+m;l=l`8;m=m`8;n=`Ll,';`Gdyas^um)`5n)^C=n}i="
+"^C`4`G`Rfun=i<0?^C:^C`30,i)`Asa`0un`1;^C=un`5!@S)@S=un;`B(`G+@S+`G)`4$S<0)@S+=`G+un;^Cs()`Am_i`0n,a`1,m,f=n`30,1),r,l,i`5!`Wl)`Wl`E`5!`Wnl)`Wnl`U;m=`Wl[n]`5!a&&m&&m._e@Lm^s)`Wa(n)`5!m){m`E,m._c=@Nm"
+"';m^sn=`F`hn;m^sl=s^sl;m^sl[m^s@om;`F`hn++;m.s=s;m._n=n;m._l`U('_c`G_in`G_il`G_i`G_e`G_d`G_dl`Gs`Gn`G_r`G_g`G_g1`G_t`G_t1`G_x`G_x1`G_l'`Rm_l[@om;`Wnl[`Wnl`C]=n}`Bm._r@Lm._m){r=m._r;r._m=m;l=m._l;^B"
+"i=0;i<l`C@A@tm[l[i]])r[l[i]]=m[l[i]];r^sl[r^s@or;m=`Wl[@or`lf==f`D())s[@om;`2m`Am_a`7'n`Gg`G@t!g)g=#2;`Ks=`9,c=s[$V,m,x,f=0`5!c)c=`F$u$V`5c&&s_d)s[g]`7\"s\",s_ft(s_d(c)));x=s[g]`5!x)x=`F$ug];m=`Wi("
+"n,1)`5x){m^s=f=1`5(\"\"+x)`4\"fun@6\")>=0)x(s);`m`Wm(\"x\",n,x)}m=`Wi(n,1)`5@Zl)@Zl=@Z=0;`pt();`2f'`Rm_m`0t,n,d){t='^nt;`Ks=^S,i,x,m,f='^nt`5`Wl&&`Wnl)^Bi=0;i<`Wnl`C@A{x=`Wnl[i]`5!n||x==n){m=`Wi(x)"
+"`5m[t]`Ht`t_d')`21`5d)m#Fd);`mm#F)`lm[t+1]@Lm[f]`Hd)$gd);`m$g)}m[f]=1}}`20`AloadModule`0n,u,d,l`1,m,i=n`4':'),g=i<0?#2:n`3i+1),o=0,f,c=s.h?s.h:s.b,^d`5i>=0)n=n`30,i);m=`Wi(n)`5(l$e`Wa(n,g))&&u^Ed&&"
+"c^E$E`S`Hd){@Z=1;@Zl=1`l@3)u=`vu,@u:`Ghttps:^Rf`7'e`G`9.m_a(\"$J+'\",\"'+g+'\")^R^d`7's`Gf`Gu`Gc`G`Ke,o=0@Oo=s.$E`S(\"script\")`5o){@4=\"text/`o\"`5f)o.^v=f;o@I=u;c.appendChild(o)}`bo=0}`2o^Ro=^d(s"
+",f,u,c)}`mm=`Wi(n);m._e=1;`2m`Avo1`0t,a`Ha[t]||$P)^S#Da[t]`Avo2`0t,a`H#H{a#D^S[t]`5#H$P=1}`Adlt`7'`Ks=`9,d`Z,i,vo,f=0`5`pl)^Bi=0;i<`pl`C@A{vo=`pl[i]`5vo`H!`Wm(\"d\")||d`T-$C>=^8){`pl[i]=0;s.t(@i}`m"
+"f=1}`l`pi)clear@5`pi`Rdli=0`5f`H!`pi)`pi=set@5`pt,^8)}`m`pl=0'`Rdl`0vo`1,d`Z`5!@ivo`E;`L^9,`G$72',@i;$C=d`T`5!`pl)`pl`U;`pl[`pl`C]=vo`5!^8)^8=250;`pt()`At`0vo,id`1,trk=1,tm`Z,sed=Math&&@P$l?@P$r@P$"
+"l()*10000000000000):tm`T,@q='s'+@P$rtm`T/10800000)%10+sed,y=tm.g@K),vt=tm.getDate(@f`sMonth(@f'@ly+1900:y)+' `sHour$K:`sMinute$K:`sSecond$K `sDay()+' `sTimezoneO@z(),^d,^T=s.g^T(),ta`e,q`e,qs`e,$m`"
+"e,vb`E#1^9`Runs()`5!s.td){`Ktl=^T`J,a,o,i,x`e,c`e,v`e,p`e,bw`e,bh`e,^H0',k=^W@Ncc`G@p',0^q,hp`e,ct`e,pn=0,ps`5^3&&^3.prototype){^H1'`5j.m$s){^H2'`5tm.setUTCDate){^H3'`5^Y^E^f&&`O#E^H4'`5pn.toPrecis"
+"ion){^H5';a`U`5a.forEach){^H6';i=0;o`E;^d`7'o`G`Ke,i=0@Oi=new Iterator(o)`b}`2i^Ri=^d(o)`5i&&i.next)^H7'}}}}`l`O>=4)x=^iwidth+'x'+^i$j`5s.isns||s.^e`H`O>=3$Q`f(^q`5`O>=4){c=^ipixelDepth;bw=`F$z@2;b"
+"h=`F$z^b}}$8=s.n.p^J}`B^Y`H`O>=4$Q`f(^q;c=^i^2`5`O#E{bw=s.d.^L`S.o@z@2;bh=s.d.^L`S.o@z^b`5!s.^f^Eb){^d`7's`Gtl`G`Ke,hp=0`qh$b\");hp=s.b.isH$b(tl)?\"Y\":\"N\"`b}`2hp^Rhp=^d(s,tl);^d`7's`G`Ke,ct=0`qc"
+"lientCaps\");ct=s.b.`g`b}`2ct^Rct=^d(s)}}}`mr`e`l$8)^4pn<$8`C&&pn<30){ps=^j$8[pn].^w@v#9`5p`4ps)<0)p+=ps;pn++}s.^U=x;s.^2=c;s.`o^k=j;s.`f=v;s.`u@9=k;s.`z@2=bw;s.`z^b=bh;s.`g=ct;s.^x=hp;s.p^J=p;s.td"
+"=1`l@i{`L^9,`G$72',vb);`L^9,`G$71',@i`ls.useP^J)s.doP^J(s);`Kl=`F`J,r=^T.^L.`X`5!s.^I)s.^I=l^h?l^h:l`5!s.`X@Ls._1_`X#C`X=r;s._1_`X=1}`Wm('g')`5(vo&&$C)$e`Wm('d')`Hs.@G||^D){`Ko=^D?^D:s.@G`5!o)`2'';"
+"`Kp=$4'#4`i'),w=1,^G,@a,x=`yt,h,l,i,oc`5^D&&o==^D){^4o@Ln@W$HBODY'){o=o^0`S?o^0`S:o^0Node`5!o)`2'';^G;@a;x=`yt}oc=o.`k?''+o.`k:''`5(oc`4$B>=0&&oc`4\"@0oc(\")<0)||oc`4$W>=0)`2''}ta=n?o$T:1;h@ki=h`4'"
+"?^Rh=s.`N@c^3||i<0?h:h`30,i);l=s.`N`i?s.`N`i:s.ln(h);t=s.`N^M?s.`N^M`8:s.lt(h)`5t^mh||l))q+=$2=@G^n(t`td$I`te'?@y(t):'o')+(h?$2v1`Ph)`j+(l?$2v2`Pl)`j;`mtrk=0`5s.`x@T`H!p$L$4'^I^Rw=0}^G;i=o.sourceIn"
+"dex`5$3'^y')@g$3'^y^Rx=1;i=1`lp&&n@W)qs='&pid`P^jp,255))+(w#8p#3w`j+'&oid`P^jn@v)+(x#8o#3x`j+'&ot`Pt)+(i#8oi='+i`j}`l!trk@Lqs)`2'';@j=s.vs(sed)`5trk`H@j)$m=s.mr(@q,(vt#8t`Pvt)`j+s.hav()+q+(qs?qs:s."
+"rq(^C)),0,id,ta);qs`e;`Wm('t')`5s.p_r)s.p_r(`R`X`e}^7(qs);^z`p(@i;`l@i`L^9,`G$71',vb`R@G=^D=s.`N`i=s.`N^M=`F@0^y=s.ppu=^p=^pv1=^pv2=^pv3`e`5$x)`F@0@G=`F@0eo=`F@0`N`i=`F@0`N^M`e`5!id@Ls.tc#Ctc=1;s.f"
+"lush`a()}`2$m`Atl`0o,t,n,vo`1;s.@G=@wo`R`N^M=t;s.`N`i=n;s.t(@i}`5pg){`F@0co`0o){`K@J\"_\",1,#B`2@wo)`Awd@0gs`0$S{`K@J$p1,#B`2s.t()`Awd@0dc`0$S{`K@J$p#B`2s.t()}}@3=(`F`J`Y`8`4@us@d0`Rd=^L;s.b=s.d.bo"
+"dy`5$c`S#7`i#Ch=$c`S#7`i('HEAD')`5s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;@R=s.u`4'N$X6/^R`Kapn$F`i,v$F^k,ie=v`4$n'),o=s.u`4'@M '),i`5v`4'@M@d0||o>0)apn='@M';^Y$9`tMicrosoft Internet Explore"
+"r'`Risns$9`tN$X'`R^e$9`t@M'`R^f=(s.u`4'Mac@d0)`5o>0)`O`rs.u`3o+6));`Bie>0){`O=^Fi=v`3ie+5))`5`O>3)`O`ri)}`B@R>0)`O`rs.u`3@R+10));`m`O`rv`Rem=0`5^3#6^l){i=^g^3#6^l(256))`D(`Rem=(i`t%C4%80'?2:(i`t%U0"
+"100'?1:0))}s.sa(un`Rvl_l='^K,`cID,vmk,ppu,@E,`c`ispace,c`V,`u@7,#4`i,^I,`X,@H';^a=^Z+',^o,$R,server,#4^M,#0@6ID,purchaseID,@r,state,zip,$k,products,`N`i,`N^M';^B`Kn=1;n<51;n++)^a+=',prop$J+',eVar$J"
+"+',hier$J;^Z2=',^U,^2,`o^k,`f,`u@9,`z@2,`z^b,`g,^x,pe$q1$q2$q3,p^J';^a+=^Z2;^9=^a+',$i,`c^N,`c^N#5`MSele@6,`MList,`MM$s,`x^PLinks,`x@D,`x@T,`N@c^3,`N^PFile^Ms,`NEx`n,`NIn`n,`N@UVa$o`N@U^Qs,`N`is,@G"
+",eo';$x=pg#1^9)`5!ss)`Fs()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}
w.s_r=new Function("x","o","n","var i=x.indexOf(o);if(i>=0&&x.split)x=(x.split(o)).join(n);else while(i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o)}return x");
w.s_d=new Function("x","var t='`^@$#',l='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',d,n=0,b,k,w,i=x.lastIndexOf('~~');if(i>0){d=x.substring(0,i);x=x.substring(i+2);while(d){w=d;i"
+"=d.indexOf('~');if(i>0){w=d.substring(0,i);d=d.substring(i+1)}else d='';b=(n-n%62)/62;k=n-b*62;k=t.substring(b,b+1)+l.substring(k,k+1);x=s_r(x,k,w);n++}for(i=0;i<5;i++){w=t.substring(i,i+1);x=s_r(x"
+",w+' ',w)}}return x");
w.s_fe=new Function("c","return s_r(s_r(s_r(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)};
(function ($) {

$(document).ready(function() {

  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      var ga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (ga.trackDomainMode == 2 && isCrossDomain($(this).attr('hostname'), ga.trackCrossDomains)) {
            // Top-level cross domain clicked. document.location is handled by _link internally.
            event.preventDefault();
            _gaq.push(["_link", this.href]);
          }
          else {
            // External link clicked.
            _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
          }
        }
      }
    });
  });

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
function isCrossDomain(hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
}

})(jQuery);
;
Drupal.behaviors.gpu_feature = {
  attach: function(context, settings) {
    (function ($) {
      if($('.group_product_images h2 span').length > 0) {
        if($('.group_product_images h2 span').html() == Drupal.t('Product Images')) {
          $('.group_product_images h2 span').html(Drupal.t('Product Images') + ' - ' + Drupal.settings.gpu_title)
        }
      }
      
      // Add active class to product family
      if($('.product-family a').length > 0) {
        $('.product-family a').each(function() {
          if(location.href.indexOf($(this).attr('href')) != -1 && $(this).attr('class').indexOf('active') == -1) {
            if($(this).attr('class') == '') {
              $(this).attr('class', 'active');
            } else {
              $(this).attr('class', $(this).attr('class') + ' active');
            }
          }
        });
      }
      
      // Open review urls in new tab / page
      if($('.field-name-field-review-url a').length > 0) {
        $('.field-name-field-review-url a').each(function() {
          $(this).attr('target', '_blank');
        });
      }
      
    })(jQuery);
  }
};;
