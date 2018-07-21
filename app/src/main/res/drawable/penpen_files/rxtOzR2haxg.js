if (self.CavalryLogger) { CavalryLogger.start_js(["hZckB"]); }

__d("AlbumFeedGridSwitcher",["cx","Arbiter","CSS","Event","PageTransitions","ReactComposerEvents","Run","SimpleNUXMessage","SimpleNUXMessageTypes","SubscriptionsHandler","URI","ge"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=7;function a(a,c,d,e){__p&&__p();this.$6=function(a){var c=b("URI").getRequestURI(!1).getQueryData();if(c.needsRefresh==="true"&&a.getQueryData().feed!==c.feed||!Object.prototype.hasOwnProperty.call(a.getQueryData(),"feed")&&!Object.prototype.hasOwnProperty.call(a.getQueryData(),"needsRefresh")){Object.prototype.hasOwnProperty.call(a.getQueryData(),"theater")&&b("Arbiter").subscribeOnce("PhotoSnowlift.CLOSE",function(){return b("PageTransitions").registerHandler(this.$6,h)}.bind(this));return!1}b("PageTransitions").transitionComplete();return!0}.bind(this);this.activateFeedView=function(){b("URI").getMostRecentURI().getQueryData().needsRefresh!=="true"&&(b("CSS").addClass(b("ge")("album_photos_pagelet"),"hidden_elem"),b("CSS").removeClass(this.$3,"_aqp"),b("CSS").removeClass(b("ge")("album_feed_pagelet"),"hidden_elem"),b("CSS").addClass(this.$2,"_aqp"),b("CSS").addClass(b("ge")("album_feedback_pagelet"),"hidden_elem"),b("CSS").addClass(b("ge")("shared_album_nux"),"hidden_elem")),this.updateFeedURI("true")}.bind(this);this.activateGridView=function(){b("URI").getMostRecentURI().getQueryData().needsRefresh!=="true"&&(b("CSS").addClass(b("ge")("album_feed_pagelet"),"hidden_elem"),b("CSS").removeClass(this.$2,"_aqp"),b("CSS").removeClass(b("ge")("album_photos_pagelet"),"hidden_elem"),b("CSS").addClass(this.$3,"_aqp"),b("CSS").removeClass(b("ge")("album_feedback_pagelet"),"hidden_elem"),b("CSS").removeClass(b("ge")("shared_album_nux"),"hidden_elem")),this.updateFeedURI("false")}.bind(this);this.$1=a;this.$2=c;this.$3=d;this.$4=e;this.$5=new(b("SubscriptionsHandler"))();this.$5.addSubscriptions(b("Event").listen(this.$2,"click",this.activateFeedView),b("Event").listen(this.$3,"click",this.activateGridView));this.$2.removeAttribute("disabled");this.$3.removeAttribute("disabled");b("CSS").removeClass(this.$3,"_42fr");b("CSS").removeClass(this.$2,"_42fr");b("Arbiter").subscribeOnce(b("ReactComposerEvents").POST_FINALLY,function(){var a=b("URI").getMostRecentURI(),c=a.getQueryData();c.needsRefresh="true";a.setQueryData(c);b("PageTransitions").go(a)});this.$4&&(this.$4.subscribe("hide",function(){b("SimpleNUXMessage").markMessageSeenByUser(b("SimpleNUXMessageTypes").ALBUMSV2_FEED_VIEW_SWITCHER)}),this.$4&&this.$4.show());b("Run").onLeave(this.cleanUp.bind(this));b("PageTransitions").registerHandler(this.$6,h);a=b("URI").getRequestURI(!1);c=a.getQueryData();c.needsRefresh&&(delete c.needsRefresh,b("PageTransitions").go(a.setQueryData(c)))}a.prototype.cleanUp=function(){this.$5&&this.$5.release(),b("PageTransitions").removeHandler(this.$6)};a.prototype.updateFeedURI=function(a){var c=b("URI").getMostRecentURI(),d=c.getQueryData();d.feed=a;c.setQueryData(d);b("PageTransitions").go(c)};e.exports=a}),null);
__d("OGHovercardLayerHideOnBlur",["ContextualThing","DOM","Event"],(function(a,b,c,d,e,f){__p&&__p();function a(a){this._layer=a}Object.assign(a.prototype,{_subscriptions:null,_clickListener:null,enable:function(){this._subscriptions=[this._layer.subscribe("show",this._attach.bind(this)),this._layer.subscribe("hide",this._detach.bind(this))],this._layer.isShown()&&this._attach()},disable:function(){this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null},_detach:function(){this._clickListener&&this._clickListener.remove(),this._clickListener=null},_attach:function(){setTimeout(function(){this._clickListener=b("Event").listen(document.documentElement,"click",this._maybeHide.bind(this))}.bind(this),0)},_maybeHide:function(event){var a=event.getTarget();if(b("DOM").contains(this._layer.getContent(),a)||b("ContextualThing").containsIncludingLayers(this._layer.getContentRoot(),a))return;this._shouldHide(event)&&this._layer.hide()},_shouldHide:function(event){return!0}});e.exports=a}),null);
__d("OGAggregationHovercardTarget",["cx","fbt","ArbiterMixin","AsyncRequest","ContextualDialog","ContextualDialogArrow","CSS","DOM","Event","LayerHideOnBlur","LayerHideOnEscape","OGHovercardLayerHideOnBlur"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=350,j={};function k(a){return new(b("ContextualDialog"))({addedBehaviors:[b("LayerHideOnBlur"),b("LayerHideOnEscape")],arrowBehavior:b("ContextualDialogArrow"),classNames:[a]},b("DOM").create("div",{className:"_4q1"},h._("Memuat..."))).setWidth(i)}Object.assign(a,{setHovercard:function(a,b){a=j[a];a&&a.setHovercard(b)}});function a(a,b,c,d,e,f,g,h,i){__p&&__p();j[b]=this;this._targetID=b;this._endpoint=c;this._preventClose=e||[];this._position=g||"below";this._dialogClass=h||"";this._fetchOnHover=i;this.init(a);for(var b=0,c=d.length;b<c;b++){e=d[b];this.addTrigger(e.element,e.trigger_class,e.context)}f&&this.showHovercard(null,null)}Object.assign(a.prototype,b("ArbiterMixin"),{init:function(a){__p&&__p();this._hovercardShown=!1;this._hovercardScheduled=!1;this._target=a;this._triggers=[];this._hovercard=null;this._fetching=!1;this._placeholder=null;this._placeholderListener=null;this._shownClass="hover_shown";this._triggerClass=null;this._currentTrigger=null;this._context=null;return this},addTrigger:function(a,c,d){this._triggers.push(a),b("Event").listen(a,"click",this._onTriggerClick.bind(this,a,c,d)),this._fetchOnHover&&b("Event").listen(a,"mouseover",this._onTriggerMouseOver.bind(this))},_onTriggerMouseOver:function(){this._fetch()},_onTriggerClick:function(a,b,c){c=c||this._target;if(this._hovercardShown&&this._hovercard.getContext()===c||this._hovercardScheduled&&this._placeholder.getContext()===c||(this._hovercardShown||this._hovercardScheduled)&&this._currentTrigger===a){this._currentTrigger=null;this.hideHovercard();return}this.hideHovercard();this._currentTrigger=a;this.showHovercard(b,c)},_fetch:function(){if(this._hovercard!=null||this._fetching)return;this._fetching=!0;var a=function(){this._fetching=!1},c=function(){this.hideHovercard()};new(b("AsyncRequest"))(this._endpoint).setData({hover_target:this._targetID}).setMethod("GET").setReadOnly(!0).setErrorHandler(c.bind(this)).setTransportErrorHandler(c.bind(this)).setFinallyHandler(a.bind(this)).send()},setHovercard:function(a){__p&&__p();var c,d=this;this._hovercard=a;c=babelHelpers.inherits(e,b("OGHovercardLayerHideOnBlur"));c&&c.prototype;e.prototype.$conditionalHideOnBlur1=function(event){"use strict";var a=event.getTarget();for(var c=0,e=d.$conditionalHideOnBlur2.length;c<e;c++)if(b("DOM").contains(d.$conditionalHideOnBlur2[c],a))return!1;return!0};function e(){"use strict";c.apply(this,arguments)}this._hovercard.setPosition(this._position).setAlignment("center").enableBehaviors([e,b("LayerHideOnEscape")]);this._hovercard.subscribe("aftershow",this._onHovercardShow.bind(this));this._hovercard.subscribe("hide",this._onHovercardHide.bind(this));this._hovercard.subscribe("destroy",this._onHovercardDestroy.bind(this));this._hovercardScheduled&&this.showHovercard(this._triggerClass,this._context)},showHovercard:function(a,c){b("CSS").addClass(this._target,this._shownClass),this._triggerClass&&this._triggerClass!==a&&b("CSS").removeClass(this._target,this._triggerClass),this._triggerClass=a,this._triggerClass&&b("CSS").addClass(this._target,this._triggerClass),this._context=c,this._hovercard?(this._hovercard.setContext(c||this._target).show(),this._hovercardShown=!0,this._hovercardScheduled=!1,this._hidePlaceholder()):(this._hovercardScheduled=!0,this._fetch(),this._showPlaceholder()),this.inform("showhovercard")},hideHovercard:function(){this._hovercardScheduled=!1,this._hidePlaceholder(),this._hovercard?this._hovercard.hide():this._onHovercardHide()},_showPlaceholder:function(){this._placeholder||(this._placeholder=k(this._dialogClass),this._placeholder.setContext(this._context||this._target).setPosition(this._position).setAlignment("center").show(),this._placeholderListener=this._placeholder.subscribe("hide",this._onPlaceholderHide.bind(this)))},_hidePlaceholder:function(){this._placeholder&&this._placeholder.hide()},_onPlaceholderHide:function(){this._placeholder&&(this._hovercardScheduled=!1,this._placeholderListener&&this._placeholder.unsubscribe(this._placeholderListener),this._placeholder=null,this._hovercardShown||this._removeTriggerClasses())},_onHovercardShow:function(){var a=this._hovercard.getContent();a=b("DOM").scry(a,"textarea.mentionsTextarea")[0];a&&a.focus()},_onHovercardHide:function(){this._hovercardShown=!1,this._removeTriggerClasses(),this.inform("hidehovercard")},_onHovercardDestroy:function(){this._hovercard=null},_removeTriggerClasses:function(){b("CSS").removeClass(this._target,this._shownClass),this._triggerClass&&b("CSS").removeClass(this._target,this._triggerClass)}});e.exports=a}),null);
__d("PhotoMultiPhotosThumb",["Event","Style"],(function(a,b,c,d,e,f){__p&&__p();var g=1200;a={init:function(a,c){__p&&__p();var d=null,e=0;function f(a){e=a,c.forEach(function(c,d){b("Style").set(c,"opacity",d===a?1:0)})}function h(){f((e+1)%c.length),d=setTimeout(h,g)}b("Event").listen(a,"mouseenter",function(){if(d)return;e=0;h()});b("Event").listen(a,"mouseleave",function(){f(0),window.clearTimeout(d),d=null})}};e.exports=a}),null);
__d("BulkTagLoader",["AsyncRequest","emptyFunction"],(function(a,b,c,d,e,f){var g=!1;function a(){}Object.assign(a,{loadForSet:function(a){g||(g=!0,new(b("AsyncRequest"))("/ajax/photos/sets/tags_fetch.php").setHandler(b("emptyFunction")).setData({set:a}).send())},loadForAlbum:function(a){g||(g=!0,new(b("AsyncRequest"))("/ajax/photos/album/tags_fetch.php").setHandler(b("emptyFunction")).setData({fbid:a}).send())},reset:function(){g=!1}});e.exports=a}),null);
__d("FlexGrid",["csx","DOM","PageTransitions","URI"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a={removePhoto:function(a){a=b("DOM").scry(document.body,'._vor[data-fbid="'+a+'"]')[0];if(a){b("DOM").remove(a);a=b("URI").getMostRecentURI();var c=a.getQueryData();c.needsRefresh="true";a.setQueryData(c);b("PageTransitions").go(a)}}};e.exports=a}),null);
__d("PhotoCurationControl",["csx","Event","Parent","Toggler"],(function(a,b,c,d,e,f,g){a={init:function(a){a=b("Parent").bySelector(a,"._vor, .fbPhotoStarGridElement");b("Event").listen(a,"mouseleave",function(){b("Toggler").hide()})}};e.exports=a}),null);
__d("PhotoInlineActions",["csx","cx","Arbiter","AsyncRequest","CSS","Event","Nectar","Parent"],(function(a,b,c,d,e,f,g,h){__p&&__p();a={init:function(a,c,d,e,f,g,h,i,j,k){__p&&__p();var l=!1;b("Arbiter").subscribe(["UFI/CommentAddedActive","UFI/CommentDeletedActive","UFI/LikeActive"],function(c,d){if(parseInt(a.getAttribute("data-fbid"),10)!==d)return;c==="UFI/LikeActive"&&b("CSS").toggleClass(a,"_53a");new(b("AsyncRequest"))().setURI("/ajax/photos/photo/refresh.php").setData({fbid:a.getAttribute("data-fbid")}).setRelativeTo(a).send()});b("Event").listen(a,"click",function(event){__p&&__p();var m=event.getTarget();if(l||!b("Parent").bySelector(m,"._53b"))return;event.prevent();b("CSS").toggleClass(a,"_53a");m={};b("Nectar").addModuleData(m,a);l=new(b("AsyncRequest"))().setURI("/ajax/photos/photo/like.php").setData(babelHelpers["extends"]({fbid:a.getAttribute("data-fbid"),relatedid:c,hovercardendpoint:d,includecommentlink:e,hovercardposition:f,includeleadingseparator:g,dialogClass:h,fetchOnHover:i,includeSocialContext:j,tagURI:k},m)).setRelativeTo(a).setErrorHandler(function(){b("CSS").toggleClass(a,"_53a")}).setFinallyHandler(function(){l=!1}).send()})}};e.exports=a}),null);
__d("StarGridLayout",["Vector","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();function g(a){"use strict";Object.assign(this,a)}g.prototype.getShortestColumn=function(a){"use strict";return a[0]<=a[1]?0:1};g.prototype.getDangling=function(a){"use strict";a=a.filter(function(a){return!this.isStarred(a)}.bind(this));return a.length%2===1?a[a.length-1]:null};g.prototype.mangleOrder=function(a){"use strict";__p&&__p();if(a.length<3||!(this.isFixed(a[0])&&this.isStarred(a[1])))return a;var c=this.nextNonStarred(a,2);if(!c)return a;a=a.concat();b("removeFromArray")(a,c);a.splice(1,0,c);return a};g.prototype.layout=function(a){"use strict";var c=[0,0],d=0,e=this.getDangling(a),f=[];a=this.mangleOrder(a);for(var g=0;g<a.length;++g){var h=this.getShortestColumn(c),i=a[g];this.isStarred(i)?(this.renderStarred(this._grid,c,h,i),c[h]+=2,d=Math.max(d,h*2+2)):(f.push(i),(f.length===2||i===e)&&(this.renderNonStarred(this._grid,c,h,f),d=Math.max(d,h*2+f.length),f=[],c[h]+=1))}return new(b("Vector"))(d,Math.max.apply(null,c))};g.prototype.inNonStarredBlock=function(a,b,c,d){"use strict";return b===c[d]&&Math.floor(a/2)===d};g.prototype.inStarredBlock=function(a,b,c,d){"use strict";return(b===c[d]||b===c[d]+1)&&Math.floor(a/2)===d};g.prototype.nextNonStarred=function(a,b){"use strict";for(;b<a.length;++b)if(!this.isStarred(a[b]))return a[b];return null};g.prototype.layoutReorder=function(a,c,d,e){"use strict";__p&&__p();a=a.concat();d=Math.max(0,Math.min(3,d));e=Math.max(0,e);b("removeFromArray")(a,c);a.push(c);var f=[0,0],g=this.getDangling(a),h=!1,i=[];for(var j=0;j<a.length;++j){var k=this.getShortestColumn(f),l=a[j];if(this.isStarred(l)){l===c&&(h=!0);!h&&this.isStarred(c)&&this.inStarredBlock(d,e,f,k)&&this.inNonStarredBlock(d,e,f,k)&&(b("removeFromArray")(a,c),this.renderStarred(this._grid,f,k,c),f[k]+=2,k=this.getShortestColumn(f),h=!0);if(!h&&!this.isStarred(c)&&this.inStarredBlock(d,e,f,k)&&this.inNonStarredBlock(d,e,f,k)){b("removeFromArray")(a,c);if(i.length===1)i.splice(d%2,0,c);else{var m=this.nextNonStarred(a,j);m?(b("removeFromArray")(a,m),i.push(m),i.splice(d%2,0,c)):i.push(c)}this.renderNonStarred(this._grid,f,k,i);i=[];f[k]+=1;g=this.getDangling(a.slice(j+1));k=this.getShortestColumn(f);h=!0}if(!h&&this.inStarredBlock(d,e,f,k)&&!this.inNonStarredBlock(d,e,f,k)){b("removeFromArray")(a,c);var m=this.nextNonStarred(a,j);a.push(c);if(m){b("removeFromArray")(a,m);a.splice(j,0,m);j--;continue}e-=1;j--;continue}this.renderStarred(this._grid,f,k,l);f[k]+=2}else i.push(l),(i.length===2||l===g)&&(!h&&!this.isStarred(c)&&this.inNonStarredBlock(d,e,f,k)&&(b("removeFromArray")(i,c),b("removeFromArray")(a,c),i.splice(d%2,0,c),i.length===3&&(b("removeFromArray")(a,i[2]),a.splice(j,0,i[2]),j=a.indexOf(i[2])-1,i.pop()),g=this.getDangling(a.slice(j+1)),h=!0),!h&&this.isStarred(c)&&this.inNonStarredBlock(d,e,f,k)&&(b("removeFromArray")(a,c),this.renderStarred(this._grid,f,k,c),f[k]+=2,k=this.getShortestColumn(f),h=!0),this.renderNonStarred(this._grid,f,k,i),i=[],f[k]+=1)}};g.prototype.getStoringLayout=function(a){"use strict";return new g({grid:this._grid,isStarred:this.isStarred,isFixed:this.isFixed,renderStarred:function(b,c,d,e){a.push(e)},renderNonStarred:function(b,c,d,e){a.push(e[0]),e.length>1&&a.push(e[1])}})};g.prototype.reorder=function(a,b,c,d){"use strict";var e=[];this.getStoringLayout(e).layoutReorder(a,b,c,d);return e};g.prototype.canonicalize=function(a){"use strict";var b=[];this.getStoringLayout(b).layout(a);return b};e.exports=g}),null);
__d("StarGrid",["Arbiter","CSS","DataStore","DOM","Locale","Parent","StarGridLayout","Style","removeFromArray"],(function(a,b,c,d,e,f){__p&&__p();var g={MARGIN:5,isStarred:function(a){return b("CSS").hasClass(a,"fbPhotoStarGridStarred")},isFixed:function(a){return b("CSS").hasClass(a,"fbPhotoStarGridFixed")},setPosition:function(a,c,d){var e=b("Locale").isRTL()?"margin-right":"margin-left";b("Style").set(a,"position","absolute");b("Style").set(a,"margin-top",c+"px");b("Style").set(a,e,d+"px")},renderNonStarred:function(a,b,c,d){for(var e=0;e<d.length;++e){var f=b[c]*g.getSize(a),h=(c*2+e)*g.getSize(a);g.setPosition(d[e],f,h)}},renderStarred:function(a,b,c,d){b=b[c]*g.getSize(a);c=c*2*g.getSize(a);g.setPosition(d,b,c)},mergeWithPreviousGrid:function(a){var c=a.previousSibling;if(c&&b("CSS").hasClass(c,"fbStarGrid")){b("CSS").addClass(c,"fbStarGridAppendedTo");while(a.firstChild)c.appendChild(a.firstChild);b("DOM").remove(a);a=c}return a},addPhotos:function(a){var c=b("DOM").scry(document.body,".fbStarGrid")[0];if(!c)return;b("DOM").prependContent(c,a);a=this.getSize(c);this.mergeAndLayoutGrid(c,a)},removeFromGrid:function(a){var c=b("Parent").byClass(a,"fbStarGrid"),d=g.getElements(c);b("removeFromArray")(d,a);b("DOM").remove(a);g.layoutGrid(c,d);b("Arbiter").inform("StarGrid/UPDATE",c)},removePhoto:function(a){a=b("DOM").scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+a+'"]')[0];a&&this.removeFromGrid(a)},removeUntaggedPhoto:function(a){a=b("DOM").scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+a+'"][data-in-photos-of="1"]');a.length>0&&this.removeFromGrid(a[0])},removePhotos:function(a){__p&&__p();var c,d;for(var e=0;e<a.length;e++){var f=a[e];f=b("DOM").scry(document.body,'.fbPhotoStarGridElement[data-fbid="'+f+'"]')[0];c=b("Parent").byClass(f,"fbStarGrid");d=g.getElements(c);b("removeFromArray")(d,f);b("DOM").remove(f)}g.layoutGrid(c,d);b("Arbiter").inform("StarGrid/UPDATE",c)},layoutGrid:function(a,c){var d=new(b("StarGridLayout"))({_grid:a,isStarred:g.isStarred,isFixed:g.isFixed,renderNonStarred:g.renderNonStarred,renderStarred:g.renderStarred});g.setElements(a,c);d=d.layout(c);b("Style").set(a,"width",d.x*g.getSize(a)+"px");b("Style").set(a,"height",d.y*g.getSize(a)+"px")},mergeAndLayoutGrid:function(a,c){var d=b("DOM").scry(a,".fbPhotoStarGridElement"),e=g.mergeWithPreviousGrid(a),f=d;a!==e&&(f=g.getElements(e).concat(d));g.setElements(a,f);b("DataStore").set(a,"size",c);g.layoutGrid(e,f);b("Arbiter").subscribe("PhotosBulkEditablePhoto.MOVED",function(a,b){g.removePhoto(b)}.bind(this));b("Arbiter").inform("StarGrid/UPDATE",a)},getSize:function(a){return b("DataStore").get(a,"size")}};Object.assign(g,{getElements:function(a){var c=b("DataStore").get(a,"elements");c||(c=b("DOM").scry(a,"div.fbPhotoStarGridElement"),g.setElements(a,c));return c},setElements:function(a,c){b("DataStore").set(a,"elements",c)}});e.exports=g}),null);
__d("TagSuggestionsDrawer",["AsyncRequest","PhotosAppSection"],(function(a,b,c,d,e,f){var g=!1,h={init:function(){if(g)return;g=!0;b("PhotosAppSection").subscribe("toggle_drawer",h._onToggle)},_onToggle:function(a,b){b.button_clicked=="show"?h._notify(!1):h._notify(!0)},_notify:function(a){new(b("AsyncRequest"))("/ajax/medley/tag_suggestions_drawer.php").setData({is_closed:a}).send()}};e.exports=h}),null);
__d("ScrollLoader",["AsyncRequest","OnVisible"],(function(a,b,c,d,e,f){function a(a,c,d,e){"use strict";this.$1=new(b("OnVisible"))(a,function(){new(b("AsyncRequest"))(c).setRelativeTo(a).send()},d,e)}a.prototype.destroy=function(){"use strict";this.$1.remove(),this.$1=null};e.exports=a}),null);