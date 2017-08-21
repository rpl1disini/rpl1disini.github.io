/* ======================================================= 
 * Grid Responsive Gallery
 * By David Blanco
 *
 * Contact: http://codecanyon.net/user/davidbo90
 *
 * Created: June 26, 2013
 *
 * Copyright (c) 2013, David Blanco. All rights reserved.
 * Released under CodeCanyon License http://codecanyon.net/
 *
 * Note: Script based in jQuery Masonry v2.1.07 made by David DeSandro http://masonry.desandro.com/ (under MIT)
 *
 * ======================================================= */


(function(e,f,g){var b=f.event,a=f.event.handle?"handle":"dispatch",d;b.special.smartresize={setup:function(){f(this).bind("resize",b.special.smartresize.handler)},teardown:function(){f(this).unbind("resize",b.special.smartresize.handler)},handler:function(k,h){var j=this,i=arguments;k.type="smartresize";if(d){clearTimeout(d)}d=setTimeout(function(){b[a].apply(j,i)},h==="execAsap"?0:100)}};f.fn.smartresize=function(h){return h?this.bind("smartresize",h):this.trigger("smartresize",["execAsap"])};f.Gri=function(h,i){this.element=f(i);this._create(h);this._init()};f.Gri.settings={isResizable:true,isAnimated:false,animationOptions:{queue:false,duration:500},gutterWidth:0,isRTL:false,isFitWidth:false,containerStyle:{position:"relative"}};f.Gri.prototype={_filterFindBricks:function(i){var h=this.options.itemSelector;return !h?i:i.filter(h).add(i.find(h))},_getBricks:function(i){var h=this._filterFindBricks(i).css({position:"absolute"}).addClass("grid-brick");return h},_create:function(k){this.options=f.extend(true,{},f.Gri.settings,k);this.styleQueue=[];var j=this.element[0].style;this.originalStyle={height:j.height||""};var l=this.options.containerStyle;for(var n in l){this.originalStyle[n]=j[n]||""}this.element.css(l);this.horizontalDirection=this.options.isRTL?"right":"left";var i=this.element.css("padding-"+this.horizontalDirection);var m=this.element.css("padding-top");this.offset={x:i?parseInt(i,10):0,y:m?parseInt(m,10):0};this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth==="function";var h=this;setTimeout(function(){h.element.addClass("grid")},0);if(this.options.isResizable){f(e).bind("smartresize.grid",function(){h.resize()})}this.reloadItems()},_init:function(h){this._getColumns();this._reLayout(h)},option:function(h,i){if(f.isPlainObject(h)){this.options=f.extend(true,this.options,h)}},layout:function(p,q){for(var n=0,o=p.length;n<o;n++){this._placeBrick(p[n])}var h={};h.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var l=0;n=this.cols;while(--n){if(this.colYs[n]!==0){break}l++}h.width=(this.cols-l)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:h});var j=!this.isLaidOut?"css":(this.options.isAnimated?"animate":"css"),k=this.options.animationOptions;var m;for(n=0,o=this.styleQueue.length;n<o;n++){m=this.styleQueue[n];m.$el[j](m.style,k)}this.styleQueue=[];if(q){q.call(p)}this.isLaidOut=true},_getColumns:function(){var h=this.options.isFitWidth?this.element.parent():this.element,i=h.width();this.columnWidth=this.isFluid?this.options.columnWidth(i):this.options.columnWidth||this.$bricks.outerWidth(true)||i;this.columnWidth+=this.options.gutterWidth;this.cols=Math.floor((i+this.options.gutterWidth)/this.columnWidth);this.cols=Math.max(this.cols,1)},_placeBrick:function(q){var o=f(q),s,w,l,u,m;s=Math.ceil(o.outerWidth(true)/this.columnWidth);s=Math.min(s,this.cols);if(s===1){l=this.colYs}else{w=this.cols+1-s;l=[];for(m=0;m<w;m++){u=this.colYs.slice(m,m+s);l[m]=Math.max.apply(Math,u)}}var h=Math.min.apply(Math,l),v=0;for(var n=0,r=l.length;n<r;n++){if(l[n]===h){v=n;break}}var p={top:h+this.offset.y};p[this.horizontalDirection]=this.columnWidth*v+this.offset.x;this.styleQueue.push({$el:o,style:p});var t=h+o.outerHeight(true),k=this.cols+1-r;for(n=0;n<k;n++){this.colYs[v+n]=t}},resize:function(){var h=this.cols;this._getColumns();if(this.isFluid||this.cols!==h){this._reLayout()}},_reLayout:function(j){var h=this.cols;this.colYs=[];while(h--){this.colYs.push(0)}this.layout(this.$bricks,j)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(h){this.reloadItems();this._init(h)},appended:function(i,k,l){var j=this.element.width();this.options.columnWidth(j);if(k){this._filterFindBricks(i).css({top:this.element.height()});var h=this;setTimeout(function(){h._appended(i,l)},1)}else{this._appended(i,l)}},_appended:function(h,j){var i=this._getBricks(h);this.$bricks=this.$bricks.add(i);this.layout(i,j)},remove:function(h){this.$bricks=this.$bricks.not(h);h.remove()},destroy:function(){this.$bricks.removeClass("grid-brick").each(function(){this.style.position="";this.style.top="";this.style.left=""});var h=this.element[0].style;for(var i in this.originalStyle){h[i]=this.originalStyle[i]}this.element.unbind(".grid").removeClass("grid").removeData("grid");f(e).unbind(".grid")}};
/*!
   * jQuery imagesLoaded plugin v1.1.0
   * http://github.com/desandro/imagesloaded
   *
   * MIT License. by Paul Irish et al.
   */
;f.fn.imagesLoaded=function(o){var m=this,k=m.children().children("img").add(m.filter("img")),h=k.length,n="#",j=[];function l(){o.call(m,k)}function i(q){var p=q.target;if(p.src!==n&&f.inArray(p,j)===-1){j.push(p);if(--h<=0){setTimeout(l);k.unbind(".imagesLoaded",i)}}}if(!h){l()}k.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var p=this.src;this.src=n;this.src=p});return m};var c=function(h){if(e.console){e.console.error(h)}};f.fn.grid=function(j){var i=function(n){var l=f.extend({},f.fn.grid.defaults,j);if(j==g){j={}}j.isFitWidth=l.isFitWidth;j.isAnimated=l.isAnimated;j.itemSelector=".box";j.gutterWidth=l.horizontalSpaceBetweenThumbnails;var o=f(n).addClass("centered").addClass("grid-clearfix");var m=l.columnWidth;if(m=="auto"){j.columnWidth=function(q){var r=-999;for(var p=l.columns;p>=1;p--){if(r<l.columnMinWidth){r=(((q-(p-1)*j.gutterWidth)/p)|0)}}o.find("div.box").width(r);return r}}else{if((typeof m)!="function"){j.columnWidth=function(p){var q=m;o.find("div.box").width(q);return q}}}o.find("div.box").css("margin-bottom",l.verticalSpaceBetweenThumbnails)};var k=function(z){var G=f.extend({},f.fn.grid.defaults,j);var u=f(z);var ac=u.find(".box");var x=Array();function aa(aw,av){this.category=aw;this.index=av}ac.each(function(aw){z=f(this);var av=z.data("category");if(av==g){av="all"}var ax=new aa(av,aw);x.push(ax)});var M=Array();for(var v in x){var p=x[v];if(p.category=="all"){continue}var y=false;for(var ao=0;ao<M.length;ao++){if(M[ao]==p.category){y=true}}if(y==false){M.push(p.category)}}f(".grid-extracategories").each(function(){M.push(f(this).data("category"))});var F=f('<ul class="category-navbar" />').hide().insertBefore(u);var L=f("<li />").data("category","all").appendTo(F).addClass("select");var L=f("<a />").html("All").appendTo(L);for(var ao=0;ao<M.length;ao++){var L=f("<li />").data("category",M[ao]).appendTo(F);var L=f("<a />").html(M[ao]).appendTo(L)}F.on("click","a",function(av){av.preventDefault();var ay=jQuery(this);if(ay.parent("li").hasClass("select")){return}ay.parent("li").addClass("select").siblings("li").removeClass("select");var ax=u;var aw=ay.parent("li").data("category");if(aw=="all"){ax.children('div[data-show="yes"]').show().addClass("box grid-brick").css({top:200,left:200})}else{ax.children('div[data-others*="-'+aw+'-"][data-show="yes"]').show().addClass("box grid-brick").css({top:200,left:200});ax.children('div[data-category="'+aw+'"][data-show="yes"]').show().addClass("box grid-brick").css({top:200,left:200});ax.children("div").not('.box[data-others*="-'+aw+'-"]').not('.box[data-category="'+aw+'"]').removeClass("box grid-brick").hide()}u.grid("reload");w(s(al()))});if(typeof M!="object"||M.length==0||G.showFilterBar==false){}else{if(G.noAll){F.children("li").eq(0).hide()}F.slideDown(400)}var ap=f("<div />").insertAfter(u);var Q=false;var K=function(){ap.addClass("grid-loader").removeClass("grid-loadMore").html("")};var U=function(){ap.removeClass("grid-loader")};var w=function(av){if(av){ap.addClass("grid-loadMore").html("LOAD MORE")}else{ap.removeClass("grid-loadMore").html("")}};var s=function(ax){var av=0;for(var aw in x){if(ax=="all"){av++}else{var ay=x[aw];if(ay.category==ax){av++}}}if(av>0){Q=false;return true}else{return false}};var al=function(){var av=F.find("li[class=select]").data("category");return av};var l=function(){var av=al();if(av!="all"){u.children("div").not('.box[data-others*="-'+av+'-"]').not('.box[data-category="'+av+'"]').removeClass("box grid-brick").hide()}};var o=true;var at=function(ax){var aC=al();K();var aD=0;var aA=f.extend({},x);for(var az in aA){var ay=aA[az];if(aC=="all"){}else{if(aC!=ay.category){continue}}aD++;if(aD>ax){break}z=ac.eq(ay.index);z.addClass("box grid-brick").attr("data-show","yes").hide().css({top:200,left:200});var av=z.find("div[data-thumbnail]").data("thumbnail");var aw=z.find("div[data-image]").data("image");if(av==g){av=aw}if(aw==g){aw=av}var aB=f('<img src="'+av+'" data-lightbox="'+aw+'" />');z.prepend(aB);delete x[az]}u.imagesLoaded(function(){if(o&&G.noAll){if(G.defaultCategory=="all"){F.children("li").eq(1).css("marginLeft","7px").addClass("select").siblings("li").removeClass("select")}else{F.children("li").each(function(){var aE=f(this);if(aE.data("category")==G.defaultCategory){aE.css("marginLeft","7px").addClass("select").siblings("li").removeClass("select")}})}o=false}else{if(o&&G.defaultCategory!="all"){F.children("li").each(function(){var aE=f(this);if(aE.data("category")==G.defaultCategory){aE.addClass("select").siblings("li").removeClass("select")}});o=false}}ac.filter(":hidden").css({top:200,left:200}).show();l();Q=false;U();w(s(al()));u.grid("reload")})};ac.removeClass("box grid-brick").hide();ac.attr("data-show","no");at(G.imagesToLoadStart);var an=function(){if(ap.hasClass("grid-loadMore")){at(G.imagesToLoad)}};ap.on("click",function(){an()});if(G.lazyLoad){f(e).scroll(function(){if(ap.closest("html").length){if((f(e).scrollTop()==(f(document).height()-f(e)[0].innerHeight))&&Q==false){Q=true;an()}}})}u.on("mouseenter.hoverdir, mouseleave.hoverdir","div.box",function(aA){if(!G.caption){return}var ay=f(this),az=aA.type,ax=ay.find("div.thumbnail-caption"),aB=n(ay,{x:aA.pageX,y:aA.pageY}),aw=ai(aB,ay);var aC=ax.children("div.aligment");if(aC[0]==g){var av=ax.html();ax.html("<div class='aligment'><div class='aligment'>"+av+"</div></div>")}if(az==="mouseenter"){if(G.captionType=="classic"){ax.css({left:0,top:0});ax.fadeIn(300);return}ax.css({left:aw.from,top:aw.to});ax.stop().show().fadeTo(0,1,function(){f(this).stop().animate({top:0,left:0},200,"linear")})}else{if(G.captionType=="classic"){ax.css({left:0,top:0});ax.fadeOut(300);return}if(G.captionType=="grid-fade"){ax.fadeOut(700)}else{ax.stop().animate({left:aw.from,top:aw.to},200,"linear",function(){ax.hide()})}}});var n=function(ax,aA){var aw=ax.width(),ay=ax.height(),av=(aA.x-ax.offset().left-(aw/2))*(aw>ay?(ay/aw):1),aB=(aA.y-ax.offset().top-(ay/2))*(ay>aw?(aw/ay):1),az=Math.round((((Math.atan2(aB,av)*(180/Math.PI))+180)/90)+3)%4;return az};var ai=function(ax,aw){var ay,av;switch(ax){case 0:if(!G.reverse){ay=0,av=-aw.height()}else{ay=0,av=-aw.height()}break;case 1:if(!G.reverse){ay=aw.width(),av=0}else{ay=-aw.width(),av=0}break;case 2:if(!G.reverse){ay=0,av=aw.height()}else{ay=0,av=-aw.height()}break;case 3:if(!G.reverse){ay=-aw.width(),av=0}else{ay=aw.width(),av=0}break}return{from:ay,to:av}};var X=f("body");var ag={interval:"none"};var r=0;var R=f('<div class="autoGrid-lightbox" />').appendTo(X);var W=f('<div class="autoGrid-nav" />').appendTo(R);var Z=f('<div class="autoGrid-close" />').appendTo(W);var V=f('<i class="iconClose" />').appendTo(Z);var B=f('<div class="autoGrid-play" />');if(G.lightboxPlayBtn){B.appendTo(W)}var H=f('<i class="iconPlay" />').appendTo(B);var ae=f('<div class="autoGrid-lbcaption" />').appendTo(W).html("Here will go the text for the lightbox");var aj=f('<div class="autoGrid-next" />').appendTo(W);var ar=f('<i class="iconNext" />').appendTo(aj);var E=f('<div class="autoGrid-prev" />').appendTo(W);var J=f('<i class="iconPrev" />').appendTo(E);var ad=f('<div class="lightbox-timer" />').appendTo(R);var t=Z.width();var Y=3;if(G.lightboxPlayBtn){Y=4}var m=function(){var ax=R.outerWidth();if(ax<650){ae.hide();aj.css("width",(ax/Y));E.css("width",(ax/Y));B.css("width",(ax/Y));Z.css("width",ax-((ax/Y)*(Y-1)))}else{ae.show();aj.css("width",t);E.css("width",t);B.css("width",t);Z.css("width",t)}var av=R.find("img");var aw=R.outerHeight()-W.outerHeight()-10;av.css("max-height",aw)};jQuery(e).resize(function(){m()});var T=new Image();var am=function(){T.onload=null;T=null;R.find("img").remove()};var O=function(){R.find(".lb-loader").remove()};var D=function(){R.append('<div class="lb-loader"/>')};R.attr("unselectable","on").css("user-select","none").on("selectstart",false);var N=function(){ad.stop(true,true).width(0)};var aq=function(){clearInterval(ag.interval)};var C=function(){if(G.lightBoxShowTimer==false){return}ad.css({position:"absolute",bottom:0}).animate({width:"100%"},G.lightBoxPlayInterval,"linear",function(){N()})};var au=false;var ab=false;var P=function(){ag.interval=setTimeout(function(){q()},G.lightBoxPlayInterval);C()};var A=function(){if(au&&ab==false){N();aq();P()}};var ah=f("<span />");var I=function(aB,aw){am();O();D();var az=0;var aA=0;if(aw!=true){az=0.9;aA=G.lightBoxSpeedFx}if(G.lightBoxZoomAnim==false){az=1}var ax=aB;var ay=ax.data("lightbox");if(ay==g){ay=ax.attr("src")}var aE=ax.siblings("div.lightbox-text").html();if(G.lightBoxText==false){aE=""}var aD="<div><div>"+aE+"</div></div>";ae.html(aD);T=new Image();var av=f(T);var aC=T;T.onload=function(){if(aC!=T){return}O();R.append(av.hide().scale(az));av.fadeIn(aA).animate({scale:"1"},{duration:G.lightBoxSpeedFx,complete:function(){A()}});m()};T.src=ay;ah.stop(true);ah=f(T)};var ak=false;u.on("click","div.box",function(){ak=true;var ax=f(this);var aw=ax.data("url");if(aw!=g){location.href=aw;return}if(G.lightBox==false){return}ab=false;X.css("overflow","hidden");r=u.find(".box").index(this);var av=ax.children("img");W.animate({"margin-top":0},G.lightBoxSpeedFx);R.fadeIn(G.lightBoxSpeedFx);I(av,true)});R.on("click","div",function(av){av.stopPropagation()});R.on("click","img",function(av){av.stopPropagation()});R.on("click",function(){af()});Z.on("click",function(){af()});var af=function(){if(G.lightBoxStopPlayOnClose){B.removeClass("selected");au=false}ak=false;ab=true;N();aq();R.find(".lb-loader").remove();var aw=0;if(G.lightBoxZoomAnim==false){aw=1}var av=R.find("img").stop().show();W.animate({"margin-top":-W.outerHeight()},G.lightBoxSpeedFx);if(av[0]!=g){av.animate({scale:aw},G.lightBoxSpeedFx,function(){R.fadeOut(100);X.css("overflow","auto")})}else{R.fadeOut(100);X.css("overflow","auto")}};var q=function(){ab=false;var ay=u.find(".box");r+=1;if(r>=ay.length){r=0}if(!ay.eq(r).is(":visible")){var av=r;for(var ax=0;ax<ay.length;ax++){av++;if(av>=ay.length){av=0}if(ay.eq(av).is(":visible")){r=av;break}}}var aw=ay.eq(r).children("img");I(aw)};var S=function(){ab=false;var ay=u.find(".box");r-=1;if(r<0){r=ay.length-1}if(!ay.eq(r).is(":visible")){var av=r;for(var ax=0;ax<ay.length;ax++){av--;if(av<0){av=ay.length-1}if(ay.eq(av).is(":visible")){r=av;break}}}var aw=ay.eq(r).children("img");I(aw)};aj.on("click",function(){N();aq();q()});R.on("click","img",function(){N();aq();q()});E.on("click",function(){N();aq();S()});f(document).keyup(function(av){if(!G.lightboxKeyboardNav){return}if(av.keyCode=="37"){if(ak==false){return}N();aq();S()}if(av.keyCode=="39"){if(ak==false){return}N();aq();q()}if(av.keyCode==27){af()}});if(G.lightBoxAutoPlay){B.addClass("selected");au=true}B.on("click",function(){z=f(this);if(z.hasClass("selected")){z.removeClass("selected");au=false;N();aq()}else{z.addClass("selected");au=true;P()}})};if(typeof j==="string"){var h=Array.prototype.slice.call(arguments,1);this.each(function(){var l=f.data(this,"grid");if(!l){c("cannot call methods on grid prior to initialization; attempted to call method '"+j+"'");return}if(!f.isFunction(l[j])||j.charAt(0)==="_"){c("no such method '"+j+"' for grid instance");return}l[j].apply(l,h)})}else{this.each(function(){var l=f.data(this,"grid");if(l){l.option(j||{});l._init()}else{i(this);f.data(this,"grid",new f.Gri(j,this));k(this)}})}return this};f.fn.grid.defaults={showFilterBar:true,imagesToLoad:5,imagesToLoadStart:15,lazyLoad:false,isFitWidth:true,horizontalSpaceBetweenThumbnails:5,verticalSpaceBetweenThumbnails:5,columnWidth:"auto",columns:5,columnMinWidth:220,isAnimated:true,caption:true,captionType:"grid",lightBox:true,lightboxKeyboardNav:true,lightBoxSpeedFx:500,lightBoxZoomAnim:true,lightBoxText:true,lightboxPlayBtn:true,lightBoxAutoPlay:false,lightBoxPlayInterval:4000,lightBoxShowTimer:true,lightBoxStopPlayOnClose:false,noAll:false,defaultCategory:"all"}})(window,jQuery);