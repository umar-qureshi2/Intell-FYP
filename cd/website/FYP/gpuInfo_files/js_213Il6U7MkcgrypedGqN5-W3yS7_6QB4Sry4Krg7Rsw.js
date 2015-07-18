/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-borderradius-opacity-rgba-textshadow-cssgradients-csstransforms-csstransforms3d-csstransitions-shiv-cssclasses-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.rgba=function(){return z("background-color:rgba(150,255,150,.5)"),C(j.backgroundColor,"rgba")},q.borderradius=function(){return F("borderRadius")},q.textshadow=function(){return b.createElement("div").style.textShadow===""},q.opacity=function(){return A("opacity:.55"),/^0.55$/.test(j.opacity)},q.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return z((a+"-webkit- ".split(" ").join(b+a)+m.join(c+a)).slice(0,-a.length)),C(j.backgroundImage,"gradient")},q.csstransforms=function(){return!!F("transform")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};;
var FORMALIZE=function(e,t,n,r){function i(e){var t=n.createElement("b");return t.innerHTML="<!--[if IE "+e+"]><br><![endif]-->",!!t.getElementsByTagName("br").length}var s="placeholder"in n.createElement("input"),o="autofocus"in n.createElement("input"),u=i(6),a=i(7);return{go:function(){var e,t=this.init;for(e in t)t.hasOwnProperty(e)&&t[e]()},init:{disable_link_button:function(){e(n.documentElement).on("click","a.button_disabled",function(){return!1})},full_input_size:function(){if(!a||!e("textarea, input.input_full").length)return;e("textarea, input.input_full").wrap('<span class="input_full_wrap"></span>')},ie6_skin_inputs:function(){if(!u||!e("input, select, textarea").length)return;var t=/button|submit|reset/,n=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;e("input").each(function(){var r=e(this);this.getAttribute("type").match(t)?(r.addClass("ie6_button"),this.disabled&&r.addClass("ie6_button_disabled")):this.getAttribute("type").match(n)&&(r.addClass("ie6_input"),this.disabled&&r.addClass("ie6_input_disabled"))}),e("textarea, select").each(function(){this.disabled&&e(this).addClass("ie6_input_disabled")})},autofocus:function(){if(o||!e(":input[autofocus]").length)return;var t=e("[autofocus]")[0];t.disabled||t.focus()},placeholder:function(){if(s||!e(":input[placeholder]").length)return;FORMALIZE.misc.add_placeholder(),e(":input[placeholder]").each(function(){if(this.type==="password")return;var t=e(this),n=t.attr("placeholder");t.focus(function(){t.val()===n&&t.val("").removeClass("placeholder_text")}).blur(function(){FORMALIZE.misc.add_placeholder()}),t.closest("form").submit(function(){t.val()===n&&t.val("").removeClass("placeholder_text")}).on("reset",function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})})}},misc:{add_placeholder:function(){if(s||!e(":input[placeholder]").length)return;e(":input[placeholder]").each(function(){if(this.type==="password")return;var t=e(this),n=t.attr("placeholder");(!t.val()||t.val()===n)&&t.val(n).addClass("placeholder_text")})}}}}(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()});
/**
 * Written by Jack Franklin
 **/

(function($) {
    $.fn.splitList = function(newListClass) {
        var newListClass = newListClass || "",
            list = this,
            topNewList = $("<ul></ul>", {
                "class": newListClass
            }),
            bttmNewList = $("<ul></ul>", {
                "class": newListClass
            }),
            listItems = list.children("li"),
            listLength = listItems.size(),
            splitPoint = Math.ceil(listLength / 2);

        listItems.each(function(i, item) {
            (i < splitPoint) ? topNewList.append(item) : bttmNewList.append(item);
        });

        list.after(bttmNewList).after(topNewList).remove();
    }

})(jQuery);;
var temp = {};

var _same_height = function(i) {
  'use strict';

  var sh_height = 0;

  i.each(function(){
    if (jQuery(this).outerHeight() > sh_height) {
      sh_height = jQuery(this).outerHeight();
    }
  });

  i.attr('style','min-height:'+ sh_height + 'px !important');
};

var _init_selectboxes = function() {
  'use strict';
  try{
  jQuery('select').selectBox({menuTransition:'slide',menuSpeed:200});
  }catch(e){}
};


jQuery(document).ready(function($){
  'use strict';
  
  // this is necessary because for some reason the GA module does not get inserted on subpages of PDPs, Games or Tech minisites
  // not sure where else to do this at the moment other than to turn off that module and do it manually in the template
  /*var paths = ["performance","architecture","features","buy-online","product-images","deals-promotions","description","downloads","gpu-analyzer","news","reviews","screenshots","system-requirements","videos","3d-cameras","3d-desktops","3d-games","3d-games-gear-up","3d-kits","3d-monitors","3d-movies","3d-notebooks","3d-pictures","about","applications","club-sli","buzz","demos","desktops","faq","games-apps","get-started","gpus","help-me-choose","images","motherboards","notebooks","online-retailers","pc-cases","pc-games","power-supplies","product-demo","rig-browser","sli-guides","supported-gpus","technology","whats-new","where-to-buy"];
  for(var i=0; i<paths.length; i++){
	  if(window.location.pathname.indexOf(paths[i]) > -1){ 
		  var gaq = '<!-- \r\n var _gaq = _gaq || [];_gaq.push(["_setAccount", "'+Drupal.settings.ga_accounts[Drupal.settings.language]+'"]);_gaq.push(["_trackPageview"]);(function() {var ga = document.createElement("script");ga.type = "text/javascript";ga.async = true;ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(ga, s);})(); \r\n//-->';
		  var script = document.createElement("script");
		  script.type = "text/javascript";
		  script.text = gaq;
		  document.head.appendChild(script);
		  var script2 = document.createElement("script");
		  script2.type="text/javascript";
		  script2.src = "/sites/all/modules/contrib/google_analytics/googleanalytics.js";
		  document.head.appendChild(script2);
	  }
  }*/
   
  
  
  
  function ctools_autosubmit_fix (view_id) {
    if ($(view_id + ' .views-exposed-widget').length > 0) {
	
	
	
	
      // Loop through all exposed filters
      $(view_id + ' .views-exposed-widget').each(function() {
	  
	  if ($(this).find('input').length > 0) {
		$(this).find('input').attr('placeholder', $.trim($(this).find('label').text())); 
		
	  $(this).find('label').hide(); 
	  }
	  
	  
	  
        // if this is an input and the val is empty then grap the label
     /*   if ($(this).find('input').length > 0) {
          if($(this).find('input').val() === '' || $(this).find('input').val() === $.trim($(this).find('label').text())) {
            temp.keys = $(this);

            // IE hack I believe
            if(Modernizr.textshadow && typeof(temp.keys) !== 'undefined') {
              $(temp.keys).find('input').val($.trim($(temp.keys).find('label').text()));
              $(temp.keys).find('input').blur(function(){
                if ($(this).val() === '') {
                  $(this).val($.trim($(temp.keys).find('label').text()));
                }
              });

              $(temp.keys).find('input').focus(function(){
                if ($(this).val() === $.trim($(temp.keys).find('label').text())) {
                  $(this).val('');
                }
              });

            }
          }
          $(this).find('label').hide(); 
        }
	
    */
        // is a select
        if($(this).find('select').length > 0) {
          if(Modernizr.textshadow && typeof(temp.keys) !== 'undefined'){
            $(this).find('select').focus(function() {
              if ($(temp.keys).find('input').val() === $.trim($(temp.keys).find('label').text())) {
                $(temp.keys).find('input').val('');
              }
            });

            $(this).find('select').blur(function() {
              if ($(temp.keys).find('input').val() === '') {
                $(temp.keys).find('input').val($.trim($(temp.keys).find('label').text()));
              }
            });
          }
		 
          $(this).find('label').hide();
          $(this).find('option:eq(0)').text($.trim($(this).find('label').text()));
        }
		
      });
      
      // Add the reset button
      //$(view_id).find('.views-reset-button').css('right', ($(view_id + ' .view-filters > .item-list').width() + 30) + 'px');

      if (window.location.href.indexOf('?') != -1) {
        $(view_id).find('.views-reset-button').show();
	$(view_id).find('.views-reset-button').find('#edit-reset').click(function() {
	  if ($(temp.keys).find('input').val() === $.trim($(temp.keys).find('label').text())) {
            $(temp.keys).find('input').val('');
          }
        });
      }
    }
  }

  $(document).delegate('button.close', 'click', function(){
    $(this).closest('.messages').remove();
  });

  $('.menu-block-gfcore-4 ul.menu li').each(function(){
	  var anchorID = $(this).attr('id');
	  //console.log(anchorID);
	  if(anchorID != "main-menu-gfe" && anchorID != "main-menu-drivers"){
		  $(this).width((100 / $('.menu-block-gfcore-4 ul.menu li').length) + '%');
	  }else{
		  if(anchorID == "main-menu-gfe"){
			  $(this).width(((100 / $('.menu-block-gfcore-4 ul.menu li').length)+ 4) + '%');
		  }else{
			  $(this).width(((100 / $('.menu-block-gfcore-4 ul.menu li').length)-4) + '%');
		  }
	  }
	  
  });

  $('ul.language-switcher-link li.first').click(function(){
    if ($(this).hasClass('open')) {
      $(this).removeClass('open').children('ul').hide();
    } else {
      $(this).addClass('open').children('ul').show();
    }
    
  });

  $('.form-item-search-block-form').append('<span class="btn-search-clear"></span>');

  $('.language-switcher-link span.language-link').append('<span class="icon-language-state"></span>');

  $('.btn-search-clear').click(function(){
    $(this).siblings('input').val('Search');
  });

  //$('select').wrap('<span class="select-wrapper" />');

  $('.view-mode-ops_teaser').hover(
    function(){
      $(this).addClass('ops-hover');
    },
    function(){
      $(this).removeClass('ops-hover');
    }
  );

  $('.view-id-games .views-view-grid.cols-3 .view-mode-grid_teaser').hover(
    function(){
      $(this).addClass('game-hover');
    },
    function(){
      $(this).removeClass('game-hover');
    }
  );

  $('.field-name-field-ops-grid table tbody tr:last').addClass('tr-last');

  if ($('.view-mode-hero_teaser .field-name-field-thumbnail-image a').length > 0) {
    $('.view-mode-hero_teaser').wrapInner('<a href="' + $('.view-mode-hero_teaser .field-name-field-thumbnail-image a').attr('href') + '" />');
  }

  if ($('.view-mode-hero_teaser .field-name-field-featured-image a').length > 0) {
    $('.view-mode-hero_teaser').wrapInner('<a href="' + $('.view-mode-hero_teaser .field-name-field-featured-image a').attr('href') + '" />');
  }

  $('.view-id-games .pager-first a, .view-id-games .pager-previous a, .view-id-games .pager-next a, .view-id-games .pager-last a').text('');

  $('.view-mode-full .field-name-field-videos, .view-mode-full .field-name-field-downloads').addClass('games-pod');
  $('.view-mode-full .field-name-field-videos.games-pod:even, .view-mode-full .field-name-field-downloads.games-pod:even').addClass('games-pod-even');

  $('.view-mode-full .field-name-field-feature-items .overview_item').addClass('games-pod');
  $('.view-mode-full .field-name-field-feature-items .overview_item.games-pod:odd').addClass('games-pod-odd');

  
  /* Hardware */
  /* Hardware home page hover FX */
  $('.node-gpu.node-promoted.view-mode-grid_teaser a img').after('<span class="img-217x116-hover"></span>');
  $('.view-technologies .field-item a img').after('<span class="img-157x100-hover"></span>');

  /* Hardware product page left nav menu styles */
  $('.view-mode-leftnav_item .field-item a').each(function() {
    var text = $(this).text();
    $(this).html(text + "<span></span>");
  });
  // information page left hand nav
  $('body.information #block-vme-vmeblock-otherlinks .field-item a').each(function() {
    var text = $(this).text();
    $(this).html(text + "<span></span>");
  });
  // Games - Overview Page Screenshots
  //$('.node-type-app .field-name-field-screenshot li a img').after('<span class="img-150x87-hover"></span>');
  // Games - Screenshots Page
  $('.page-node-screenshots .gallery-thumbs-container li a img').after('<span class="img-150x87-hover"></span>');

  /* Hardware product images styles */
  $('.page-node-product-images.node-type-gpu .gallery-thumbs-container li a img').after(
    '<span class="img-150x87-hover"></span>'
  );
  $('div.gallery-slides').removeAttr('style');

  _same_height($('.node.node-product-lineup.node-promoted .field-name-field-desktop-gpu'));
  _same_height($('.node-product-lineup .field-name-field-description'));
/*
  $('.node-gpu .group-middle .field-name-field-short-description').each(
    function(index, object) {
      var descText = $(object).text();
      if(descText.length > 103){
        $(object).replaceWith(
          "<div class='field field-name-field-short-description field-type-text-long field-label-hidden'>"+descText.substr(0,100)+"...</div>"
        );
      }
    }
  );
*/
//Hardware / technology / ... / videos - Title attributes added for mouse over text
 $('#gfjwplayer_gallery_list ul li a').each(
    function(index, object) {
      var descTextLayer = $(object).find('.gfjwplayer_video_caption');
      var descText = descTextLayer.text();
      $(object).attr('title', descText);
      //Shorten description below, if needed just uncomment and fix the replacewith html
      /*
      if(descText.length > 103){
        $(descTextLayer).replaceWith(
          "<div class='field-item'>"+descText.substr(0,161)+"...</div>"
        );
      }
*/
    }
  );

  // /games-applications/pc-games/ ... /news 
  $('.page-node-news.node-type-app .view-id-app_references .views-row').each(
    function(index, object) {
      var descTextLayer = $(object).find('.group-right .field-name-field-short-description .field-item');
      var descText = descTextLayer.text();
      $(object).attr('title', descText);
      if(descText.length > 103){
        $(descTextLayer).replaceWith(
          "<div class='field-item'>"+descText.substr(0,161)+"...</div>"
        );
      }
    }
  );

  $('.page-hardware .views-row').each(
    function(index, object) {
      var descTextLayer = $(object).find('.group-middle .field-name-field-short-description');
      var descText = descTextLayer.text();
      $(object).attr('title', descText);
      if(descText.length > 103){
        $(descTextLayer).replaceWith(
          "<div class='field field-name-field-short-description field-type-text-long field-label-hidden'>"+descText.substr(0,100)+"...</div>"
        );
      }
    }
  );
  $('.page-hardware .views-row .node-notebook').each(
    function(index, object) {
      /*var descTextLayer = $(object).find('.group-middle .field-name-title div div div');*/
      var descTextLayer2 = $(object).find('.group-middle .field-name-field-gpu div div');
      var vision3d = $(object).find('.group-middle .field-name-field-3d-vision-capable .field-item');
      var optimus = $(object).find('.group-middle .field-name-field-optimus-support-built-in .field-item');
      var descText = descTextLayer2.text();
      if(optimus.text() === "Optimus") {
        descText = descText + " / Optimus";
      }
      if(vision3d.text() === "3D Vision") {
        descText = descText + " / 3D Vision";
      }
      $(object).attr('title', descText);
      vision3d.css({'visibility': 'hidden', 'display': 'none'});
      optimus.css({'visibility': 'hidden', 'display': 'none'});
      descTextLayer2.html(descText);
    });
  $('.page-hardware .views-row .node-psu, .page-node-7061 .views-row .node-psu').each(
    function(index, object) {
      var modular = $(object).find('.group-middle .field-name-field-modular .field-item');
      var maximum = $(object).find('.group-middle .field-name-field-maximum-power .field-item');
      var descText = "";
      if(modular.text() === "Yes") {
        descText = "Modular: Yes // ";
      } else {
        descText = "Modular: No // ";
      }
      descText = descText + "Maximum Power: " + maximum.text();
      $(object).attr('title', descText);
      modular.html(descText);
      maximum.css({'visibility': 'hidden', 'display': 'none'});
      $(object).find('.field-label').html("");
    });
  $('.page-hardware .views-row .node-mcp, .page-node-7062 .views-row .node-mcp').each(
    function(index, object) {
      var socketType = $(object).find('.group-middle .field-name-field-socket-type .field-item');
      var SLI = $(object).find('.group-middle .field-name-field-sli-support .field-item');
      var descText = "Socket Type: " + socketType.text() + " // SLI Support: " + SLI.text();
      $(object).attr('title', descText);
      SLI.css({'visibility': 'hidden', 'display': 'none'});
      socketType.html(descText);
      $(object).find('.field-label').html("");
    });
  $('.page-hardware .views-row .node-case, .page-node-7063 .views-row .node-case').each(
    function(index, object) {
      var formFactor = $(object).find('.group-middle .field-name-field-form-factor .field-item');
      var caseWindow = $(object).find('.group-middle .field-name-field-case-window .field-item');
      var descText = "Form Factor: " + formFactor.text() + " // Case Window: " + caseWindow.text();
      $(object).attr('title', descText);
      caseWindow.css({'visibility': 'hidden', 'display': 'none'});
      formFactor.html(descText);
      $(object).find('.field-label').html("");
    });
  /* Hardware / technology / .... / whats-new */
  $('.page-node-whats-new .field-name-field-short-description').each(
    function(index, object) {
      var descText = $(object).text();
      if(descText.length > 103){
        $(object).replaceWith(
          "<div class='field field-name-field-short-description field-type-text-long field-label-hidden'>"+descText.substr(0,100)+"...</div>"
        );
      }
    }
  );
  /* Hardware / technology / .... / games */
  // REMOVED because it was selecting the wrong item (anchor tag text) and blowing it away when the text exceeded the desired length
  $('.view-mode-vmepage_games .field-item, .view-technology-references .field-name-field-short-description .field-item').each(
    function(index, object) {
      var descText = $(object).text();
      if(descText.length > 103){
        $(object).replaceWith(
          "<div class='field-item'>"+descText.substr(0,100)+"...</div>"
        );
      }
    }
  );
  /* Hardware / (notebook / desktop) gpus / (product name) / tech-demos */
  $('.page-node-tech-demos  .group-right .field-name-field-summary .field-item').each(
    function(index, object) {
      var descText = $(object).text();
      if(descText.length > 103){
        $(object).replaceWith(
          "<div class='field-item'>"+descText.substr(0,100)+"...</div>"
        );
      }
    }
  );

  $('#block-disqusextras-gfdisqus-most-popular').siblings('p').hide();

  $('.page-hardware .view-filters .views-reset-button').css('right', ($('.page-hardware .view-filters > .item-list').width() + 30) + 'px');
  
  $('.view-id-notebooks .view-filters .views-reset-button').css('right', ($('.view-id-notebooks .view-filters > .item-list').width() + 30) + 'px');

  if (window.location.href.indexOf('?') > 0) {
    $('.page-hardware .view-filters .views-reset-button, .view-id-notebooks .view-filters .views-reset-button').show();
  }


  $('.page-hardware .pager-first a, .page-hardware .pager-previous a, .page-hardware .pager-next a, .page-hardware .pager-last a').text('');

/* All pages with exposed widgets */
  if ($('* .views-exposed-widgets').length > 0) {
    ctools_autosubmit_fix(
      '.views-exposed-form'
    );
  }
  // Center images vertically in js.
  /*
  $('.page-hardware .view-content .group-left .field-item img').each(
    function(index, obj){
      var imgHeight = $(obj).height();
      var topMargin = ( (78 - imgHeight) / 2);
      $(obj).css('margin-top', topMargin);
    }
  );
  /* Center images vertically on - hardware / technology / ... / supported-gpus */
  /*
  $('.page-node-supported-gpus .view-mode-vmepage_supported_gpus .group-left .field-item img, .page-node-7061 .field-name-field-featured-image img, .page-node-7062 .field-name-field-featured-image img, .page-node-7063 .field-name-field-featured-image img').each(
    function(index, obj){
      var imgHeight = $(obj).height();
      var topMargin = ( (86 - imgHeight) / 2);
      $(obj).css('margin-top', topMargin);
    }
  );
  // */
  $('.node-product-lineup h3 a').each(
    function(index, content){
      $(this).replaceWith($(this).text());
    }
  );
  $('.view-gpus .views-row').click(function(){
    var link_path = $(this).find('.group-right a').attr('href');
    window.location = link_path;
  });
  $('.view-newsletters-archive .views-row').click(function(){
    var link_path = $(this).find('.views-field-title a').attr('href');
    window.location = link_path;
  });
  $('.view-notebooks .views-row, .view-power-supplies .views-row, .view-motherboards .views-row, .view-cases .views-row').click(function(){
    var link_path = $(this).find('.group-right a').attr('href');
    window.open(link_path);
  });
  /* Rename More Info buttons to Buy Now */
  $('.page-hardware-notebooks .field-name-field-buy-now-link .field-item a').each(function(){
    var link  = $(this).attr('href');
    $(this).replaceWith('<a href="'+link+'">BUY NOW</a>');
  });
  // fix to make clicking on more info only fire one window open
  $('.view-motherboards .field-name-field-buy-now-link a, .view-notebooks .field-name-field-buy-now-link a, .view-power-supplies .field-name-field-buy-now-link a, .view-cases .field-name-field-buy-now-link a').click(function(e){
    e.preventDefault();
  });

  /*
  if($('.page-hardware .field-item a')){
    $('.views-row').each(
      function(index, content){
        //var link = $(content).find('h3 a');
        var outerHTML = content.outerHTML;
        outerHTML = $(outerHTML).html();
        var link = content.children[0].children[2].children[0].children[0].children[0].children[0].href;
        $(this).replaceWith('<a href="'+link+'" />'+outerHTML+'</a>');
      }
    );
  }
  */
/*
  $('.node-promoted .field-name-field-short-description').each(
    function(index, object) {
      var descText = $(object).text();
      if(descText.length > 100){
        $(object).replaceWith(
          "<div class='field field-name-field-long-description field-type-text-long field-label-hidden'>"+descText.substr(0,100)+"...</div>"
        );
      }
    }
  );
// */


/* */
  if ($('.ops-list').length > 0){
    //var ops_width = $('.ops-list ul').width();
    $('.view-mode-ops_teaser .view-display-id-ops').addClass('hide-ops-list');
    //$('.ops-list').css('min-width', ((ops_width * 2) + 15) + 'px');
    $('.ops-list ul').each(function(){
      $(this).splitList('ops-list-split');
    });
  }

  $('.view-mode-vmepage_news .views-row').click(function(){
    var link_path = $(this).find('.field-name-title a').attr('href');
    window.location = link_path;
  });

  // Change target for links with outside urls
  $('.field-collection-item-field-main-links a').each(function() {
    if($(this).attr('href').indexOf('http://') !== -1 && $(this).attr('href').indexOf(location.hostname) === -1) {
      $(this).attr('target', '_blank');
    }
  });
  
  $('.page-community .field-name-field-main-links .field-collection-item-field-main-links').click(function(e) {
    e.preventDefault();
    var link_path = $(this).find('.field-name-field-main-link a').attr('href');
    if($(this).find('.field-name-field-main-link a').attr('href').indexOf('http://') !== -1 && $(this).find('.field-name-field-main-link a').attr('href').indexOf(location.hostname) === -1)
    {
      window.open(link_path);
    } else {
      window.location = link_path;
    }
  });

  $('.node-app.view-mode-grid_teaser a img').after('<span class="img-220x150-hover"></span>');
  //Hardware / overview
  $('.view-nodelist-featured .field-name-field-thumbnail-image a img').after('<span class="img-210x110-hover"></span>');
  // Hardware hero
  $('.view-display-id-hero_hardware .ds-row-1 .field-item a img').after('<span class="img-668x258-hover"></span>');
  // Hardware / technology / ...(3d vision surround) / overview
  $('.node-technology .field-name-field-screenshot ul li a img').after('<span class="img-150x87-square-hover"></span>');
  $('.view-mode-vmepage_images .gallery-thumbs-container li a img').after(
    '<span class="img-150x87-square-hover"></span>'
  ).parent().css({
    'display': 'block',
    'position': 'relative'
  });
  // Home
   $('.view-id-whats_new .view-id-nodelist_hero .ds-row-1 .field-item a img').after('<span class="img-650x250-hover"></span>');
  // Games Hero hover
  //$('.view-display-id-hero_games .ds-row-1 .field-item a img').after('<span class="img-680x260-hover"></span>');

  _init_selectboxes();
  $(document).ajaxComplete(function(){
    setTimeout(_init_selectboxes, 500);
  });

  $('.menu-block-gfcore-4 ul.menu li.active-trail').prev('li').children('a').css('border-right', 'none');
  $('.menu-block-gfcore-4 ul.menu li.active-trail').next('li').children('a').css('border-left', 'none');

  $('#scroll-to-top').click(function() {
    $('html, body').animate({
      scrollTop: $('html').offset().top
    });
  });
  if( $('.page-node-specifications').length > 0 ) {
    $('.group-engine-specs div.field').filter(':odd').addClass('bgDarkGrey');
    $('.group-memory-specs div.field').filter(':odd').addClass('bgDarkGrey');
    $('.group-support div.field').filter(':odd').addClass('bgDarkGrey');

    $('.group-display-support div.field').filter(':odd').addClass('bgDarkGrey');

    $('.group-graphics-card-dimensions div.field').filter(':odd').addClass('bgDarkGrey');

    $('.group-thermal-and-power-specs div.field').filter(':odd').addClass('bgDarkGrey');

    $('.group-legacy-specs div.field').filter(':odd').addClass('bgDarkGrey');

    /*$('.field-name-field-alternate-spec-content div.field').filter(':odd').addClass('bgDarkGrey');*/
    var lblMaxLength = 0;
    var lblCurrLength = 0;
    $('.view-mode-vmepage_specifications .field-label').each(function() {
      lblCurrLength = $(this).width();
      if(lblCurrLength > lblMaxLength) {
        lblMaxLength = lblCurrLength;
      }
    });
    lblMaxLength += 20;
    $('.view-mode-vmepage_specifications .field-label').css('min-width', lblMaxLength);
    $('.view-mode-vmepage_specifications .group-specifications-main .field-items').css('max-width', ($('.group-specifications-main').width() - lblMaxLength) - 20);
  }

  $('#newsletterGeForceUS').change(function(){
    if($(this).is(':checked')) {
      $('.newsletterItem .subContent').slideDown('normal');
    } else {
      $('.newsletterItem .subContent').slideUp('normal');
    }
  });

  if ( $('#block-views-leftnav-block .view-id-leftnav').length > 0 && $.trim($('#block-views-leftnav-block .view-id-leftnav').html()) === '' ) {
    $('#block-views-leftnav-block').hide();
  }
  
  $('.page-node-6446 .btnRow').click(function() {
    window.location = '/rss/news';
  });

  if($('#block-gfcore-gfcore-callback-extra-leftnav').length > 0) {
    $('body').addClass('extra-left-nav');
  }
/* //WHAT IS THIS?   DEFECT # 411 -  Removed this to fix defect. http://chn.editorial.geforce.vmldev.com/hardware/desktop-gpus/geforce-gtx-690/buy-online
  if ($('#sidebar-first').height() > $('#content').height()) {
    $('#content').css('min-height', $('#sidebar-first').height() + 'px');
  }
// */
  $('.article-author-name').each(function(){
    if($(this).text() === 'By '){
      $(this).closest('.field-name-field-article-author-name').hide();
      $(this).hide();
    }
  });

  $('.article-author-date').each(function(){
    if($(this).text() === 'On '){
      $(this).closest('.field-name-field-article-authored-date').hide();
      $(this).hide();
      $(this).next('.field-name-field-tags').css('border-left', 'none');
    }
  });

  if ($('.HMCitem').length) {
		// set peformance bar based on REL attribute. We are setting Overlay green band.
		var perfBars=new Array();
		$('.relativePerf .overlay').each(function() {
			perfBars.push($(this).children('var').text());
		});
		
		perfBars.sort(function(a,b){return a - b;});
		perfBars.reverse();
		var perfBarsHigh=perfBars[0];
			
		// apply width based on meassured values
		$('.relativePerf .overlay').each(function() {
			var lenght=1.8 * ($(this).children('var').text() * 100 / perfBarsHigh) ;
			$(this).animate({width : lenght+'px' }, 'slow');
		});
		
		// attach click actions for show more specification button
		$('.HMCitem .toggleSpecs').toggle(
			function() {
				$(this).next('.specsDetails').slideDown(200);
				$(this).parent().children('.quickSpecs').fadeOut(200);
				$(this).children('.show').fadeOut(100, function() {
					$(this).parent().children('.hide').fadeIn(100);
				});
			},
      function () {
				$(this).next('.specsDetails').slideUp(200);
				$(this).parent().children('.quickSpecs').fadeIn(200);
				$(this).children('.hide').fadeOut(100, function() {
					$(this).parent().children('.show').fadeIn(100);
      });
    });
  }
  
  if(Drupal.settings.background_link){
    $('body').prepend('<a href="' + Drupal.settings.background_link + '" id="background-link-left"></a><a href="' + Drupal.settings.background_link + '" id="background-link-right"></a>');
  }
  /* Advanced Search Box */
  $('.page-search .searchForm .form-type-textfield').find('input').focus(function(){
    if ($(this).val() === "Enter Query") {
      $(this).val('');
    }
  });
  /* Supported Technologies text - left nav - hardware / gpu */
 // $('#block-gpu-feature-gpu-feature-info-leftrail #product_info_technologies').before('<div id="supportedTechnologies">Supported Technologies</div>');
  
  var adjustHeight = function (height)
  {

    var newHeight = parseInt(height);
    $('#rigBrowserObject').height(newHeight);
    $('#rigBrowserObject').parent().height(newHeight);

  };
  window.adjustHeight = adjustHeight;
  /* */

  /* Support / Feedback */
  /* Recaptcha Refresh Image */
  $('.recaptcha_get_another_captcha a').html('<div class="small-icons-refresh">');
  $('.recaptcha_only_if_image').first().html('<span style="color:#76b900">*</span><b>' + Drupal.t('Please enter the text in the box below') + '</b>');
  $('.recaptcha_only_if_image').last().html('');
  $('.recaptcha_help').html('');
  
if($('.form-item-Issues label span')[0]){
  var asterisk = $('.form-item-Issues label span')[0].outerHTML;
  $('.block-gfsupport .page-content strong').replaceWith(asterisk + "<strong> " + $('.block-gfsupport .page-content strong')[0].outerHTML + "</strong>");
  $('.form-item-HowOftenYouVisit label span').remove();
}
  
  /* Feedback Form /support/feedback/ */
  if($('.form-item-Issues label span').length > 0) {
    var asterisk = $('.form-item-Issues label span')[0].outerHTML;
    $('.form-item-Issues label span').remove();
    $('.form-item-Issues label').html(asterisk + $('.form-item-Issues label').html());
    if($('.block-gfsupport .recaptcha_only_if_image b')[0]) {
      var boldText = $('.block-gfsupport .recaptcha_only_if_image b')[0].outerHTML;
      asterisk = $(asterisk).attr('style', 'float: none !important')[0].outerHTML;
      $('.block-gfsupport .recaptcha_only_if_image').first().html(
        boldText + " " + asterisk
      );
    }
  }
  $('.page-node-product-images .group-product-images .galleryview h3').replaceWith('<h3>' + Drupal.t('Product Images') + '</h3>');

  /* */
  //     TITLE TAGS
  //
  // TOP NAV
  $('.menu-name-main-menu ul.menu li a').each(
    function(index, object) {
      var href = $(object).attr('href');
      href = href.replace(document.domain, "");
      href = href.replace("http://www.", ""); //for non www requests 
      var anchorTitle = "";
      switch( href ) {
        case '/whats-new':
          anchorTitle = "Geforce Home";
          break;
        case '/drivers':
          anchorTitle = "Download Drivers";
          break;
        case '/optimize':
        case '/optimise':
          anchorTitle = "Optimal Playable Settings";
          break;
        case '/hardware':
          anchorTitle = "Hardware: Graphics cards, power supplies, motherboards, cases";
          break;
        case '/games-applications':
          anchorTitle = "PC Games";
          break;
        case '/community':
          anchorTitle = "Community";
          break;

      }
      $(object).attr('title', anchorTitle);
    }
  );
  
  // LOGO
  $('h1 a#logo').attr('title', 'GeForce – Fastest GPUs in the world for cutting edge PC game playing');

  // HOME PAGE
  if($('body.front')) {
    // Hero
    var heroTitle = $('.view-content .views-slideshow-cycle-main-frame-row-item .view-mode-hero_teaser a .ds-row .field-name-title h2 a').text();
    $('.view-content .views-slideshow-cycle-main-frame-row-item .view-mode-hero_teaser a').attr('Title', heroTitle);
    
    // Thumbnails
    $('.view-nodelist-featured tr td').each(
      function(index, object) {
        var thumbTitle = $(object).find('.ds-row-2 a').text();
        $(object).find('.ds-row-1 a').attr('title', thumbTitle);
      }
    );
  } 
  // Hardware Section
  if($('.page-hardware .view-display-id-hero_hardware')) {
    // Hero
    var textHero = $('.page-hardware .view-display-id-hero_hardware .ds-row-2 .field-name-title h2 a').text();
    $('.page-hardware .view-display-id-hero_hardware .ds-row-1 a').attr('title', textHero);
    // Thumbnails
    $('.page-hardware .view-id-nodelist_featured table.cols-3 tr td').each(
      function(index, object) {
        var thumbTitle = $(object).find('ds-row-2 a').text();
        $(object).find('ds-row-1 a').attr('title', thumbTitle);
      }
    );
  }

  // GPU Page features Titles
  if($('.node-type-gpu .field-name-field-featured-games')) {
    $('.node-type-gpu .field-name-field-featured-games .overview_item li').each(function (index, object) {
      var gameText = $(object).find('span.title').text();
      $(object).find('a').attr('title', gameText);
    });
  }

  // Games Overview page Titles
  if($('.page-games-applications .view-display-id-hero_games #views_slideshow_cycle_teaser_section_nodelist_hero-hero_games')) {
    // Hero
    $('.page-games-applications .view-display-id-hero_games #views_slideshow_cycle_teaser_section_nodelist_hero-hero_games .views_slideshow_slide').each(function (index, object) {
        var gameTitle = $(object).find('.ds-row-2 h2 a').text();
        $(object).find('.ds-row-1 a').attr('title', gameTitle);
        // shorten hero description if it's too long.
        var descText = $(object).find('.ds-row-2 .field-name-field-summary .field-item').text();
        $(object).find('.ds-row-2 .field-name-field-summary .field-item').text(descText.substr(0, 420) + "...");
    });
    // Thumbnails
    $('.view-id-games .cols-3 tr td').each(function(index, object) {
      var gamesTitle = $(object).find('.field-name-title .field-item a').text();
      $(object).find('.field-name-field-featured-image a').attr('title', gamesTitle);
    });
  }
  if($('.field-name-field-videos.field-type-field-collection .field-label')) {
    if($('.field-name-field-videos.field-type-field-collection .field-label').text().indexOf("Videos:") !== -1) {
      $('.field-name-field-videos.field-type-field-collection .field-label').text("Videos");
    }
  }
  $('.page-node-7332 .view-id-newsletters_archive .field-item table tbody tr').first().find('td').css('padding-top', '10px'); // Add padding before social icons on GBR Latest newsletter
  //Remove 
  $(function() {
    if ( document.location.href.indexOf('/information/newsletter/latest-newsletter') > -1 ) {
        $('body').attr('style', '').css('background', '#14171C');
    }
  });
  
  if($('.page-node-images').length > 0 && $('.group-images h2 span').length > 0) {
    $('.group-images h2 span').text(Drupal.t('Images') + ' - ' + $('#page-title').text());
  }
  //Newsletter form submission fail:
  window.fpFailed = function(data) {
    for(var key in data.responseData.fields) {
      if($('select[name="' + key  + '"]').length > 0) {
        var field = data.responseData.fields[key];
        var label = $('select[name="' + key  + '"]').children('option[value="' + field.value + '"]').text();
        $('select[name="' + key  + '"]').next("a").find('span.selectBox-label').text(label);
      }
    }
    jQuery("select.error").next("a").addClass("error");
	try{
		customFpFailed(data);
	} catch(e){}
  }
  
  _same_height($('.field-name-field-feature-items .overview_item_body, .field-name-field-reviews .overview_item_body, .field-name-field-videos .field-items, .field-name-field-downloads .field-item'));

  //Remove margin if nothing to the left of the videos pod
  /*if( $('.node-type-app .field-name-field-feature-items .field-items .field-item').children().length === 0 ) {
    $('.games-pod.games-pod-even').css('margin-left', '0px');
  }*/
  
  // more margin stuff - too broad
  if( $('.field-name-field-feature-items .field-item .games-pod').length > 0){
	  if( (($('.field-name-field-feature-items .field-item .games-pod').length)%2) == 0) {
		  //Even number
		  $('.field-name-field-videos, .field-name-field-downloads').attr('style','margin-left:5px');
	  } else {
		  // odd number
		  $('.field-name-field-videos, .field-name-field-downloads').attr('style','margin-left:0px');
	  }
  }else{
    $('.field-name-field-videos').attr('style','margin-left:5px');
    // check if videos are present. If so, adjust downloads
    if( $('.field-name-field-videos').length > 0 ){
    	$('.field-name-field-downloads').attr('style','margin-left:13px');
    }else{
    	$('.field-name-field-downloads').attr('style','margin-left:0px');
    }
  }
  
  
  // separating technologies from everyone else
  if( $('.node-type-technology #content-area #content .node-technology .field-name-field-feature-items .overview_item').length > 0){
	  if( (($('.node-type-technology #content-area #content .node-technology .field-name-field-feature-items .overview_item').length)%2) == 0) {
		//Even number
		// now check if there are videos
		  if($('.node-type-technology #content-area #content .node-technology .field-name-field-videos').length > 0){
			  // adjust videos
			  $('.node-type-technology #content-area #content .node-technology .field-name-field-videos').attr('style','margin-left:0px!important');
			  // now check if there are downloads
			  if($('.node-type-technology #content-area #content .node-technology .field-name-field-downloads').length > 0){
				  // adjust downloads
				  $('.node-type-technology #content-area #content .node-technology .field-name-field-downloads').attr('style','margin-left:13px!important');
			  }
		  }else{
			  // no videos
			  if($('.node-type-technology #content-area #content .node-technology .field-name-field-downloads').length > 0){
				  // adjust downloads
				  $('.node-type-technology #content-area #content .node-technology .field-name-field-downloads').attr('style','margin-left:0px!important');
			  }
		  }
	  }else{
		// odd number
		// now check if there are videos
		  if($('.node-type-technology #content-area #content .node-technology .field-name-field-videos').length > 0){
			  // adjust videos
			  $('.node-type-technology #content-area #content .node-technology .field-name-field-videos').attr('style','margin-left:13px!important');
			  // now check if there are downloads
			  if($('.node-type-technology #content-area #content .node-technology .field-name-field-downloads').length > 0){
				  // adjust downloads
				  $('.node-type-technology #content-area #content .node-technology .field-name-field-downloads').attr('style','margin-left:0px!important');
			  }
		  }else{
			  // no videos
			  if($('.node-type-technology #content-area #content .node-technology .field-name-field-downloads').length > 0){
				  // adjust downloads
				  $('.node-type-technology #content-area #content .node-technology .field-name-field-downloads').attr('style','margin-left:13px!important');
			  }
		  }
	  }
  }
  
  
  //Add margin to left side of downloads pod if a video exists
  if( $('.node-type-app .ds-1col .field-name-field-videos').length != 0 ) {
    $('.node-type-app .ds-1col .field-name-field-downloads').css('margin-left', '13px!important');
  }
  if($('.coloredTable .additionalInfo')) {
    $('.coloredTable').after($('.coloredTable .additionalInfo'));
  }
/*
  $('#block-system-main').find('div.field').each(function(){ 
    if($(this).find('.field-items').children().length == 0){
      $(this).hide()
    }else{
      if($(this).find('.field-items').children().children().length == 0){
        $(this).hide()
      }
    }
  });
  // */
  // testing for future
  /*if ((jQuery.browser.msie && jQuery.browser.version == 6) || isIE7) { 
	  var IESupportMsg = '<div id="IESupportMsg" class="clearfix">';
	  IESupportMsg += '<div class="icon"><img alt="" src="//www.nvidia.com/content/includes/redesign2010/images/redesign10/ui-elements/exclamation-circle.png"/></div>';
	  IESupportMsg += '<div class="text">';
	  IESupportMsg += 'We have detected that you may be using an unsupported version of Internet Explorer, or that you are viewing this site in Compatibility Mode.';
	  IESupportMsg += ' We recommend upgrading to one of the following browsers:<p>';
	  IESupportMsg += '<a target="_blank" href="http://www.google.com/chrome?brand=CHFV">Google Chrome</a>';
	  IESupportMsg += '<a target="_blank" href="http://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a>';
	  IESupportMsg += '<a target="_blank" href="http://www.apple.com/safari/">Safari</a>';
	  IESupportMsg += '<a target="_blank" href="http://windows.microsoft.com/en-US/internet-explorer/products/ie/home">Microsoft Internet Explorer</a>';
	  IESupportMsg += '</p></div></div>';
	  jQuery('body').prepend(IESupportMsg);
	  console.log(IESupportMsg);
	  if(jQuery('#background-link-left')){
		  jQuery('#background-link-left').css('top','120px');
		  jQuery('#background-link-right').css('top','120px');
	  }
  }*/
  
});
;
