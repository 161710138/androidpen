if (self.CavalryLogger) { CavalryLogger.start_js(["nSPYR"]); }

__d("SeeFirstProfilePopoverMenu",["PopoverMenu"],(function(a,b,c,d,e,f){var g;g=babelHelpers.inherits(a,b("PopoverMenu"));g&&g.prototype;a.prototype._onMenuDone=function(a){"use strict"};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("getInlineBoundingRect",["Rect"],(function(a,b,c,d,e,f){__p&&__p();function a(a,c){__p&&__p();var d=a.getClientRects();if(!c||d.length===0)return b("Rect").getElementBounds(a);var e,f=!1;for(var g=0;g<d.length;g++){var h=new(b("Rect"))(Math.round(d[g].top),Math.round(d[g].right),Math.round(d[g].bottom),Math.round(d[g].left),"viewport").convertTo("document"),i=h.getPositionVector(),j=i.add(h.getDimensionVector());if(!e||i.x<=e.l&&i.y>e.t){if(f)break;e=new(b("Rect"))(i.y,j.x,j.y,i.x,"document")}else e.t=Math.min(e.t,i.y),e.b=Math.max(e.b,j.y),e.r=j.x;h.contains(c)&&(f=!0)}e||(e=b("Rect").getElementBounds(a));return e}e.exports=a}),null);
__d("Tooltip",["fbt","Arbiter","AsyncRequest","ContextualLayer","ContextualLayerAutoFlip","CSS","DOM","Event","Style","TooltipData","Vector","emptyFunction","getElementText","getInlineBoundingRect","getOrCreateDOMID","nl2br","setImmediate"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=null,j=null,k=null,l=null,m=null,n=null,o=!1,p=[],q=[];function r(){if(!l){m=b("DOM").create("div",{className:"tooltipContent","data-testid":"tooltip_testid"});n=b("getOrCreateDOMID")(m);var a=b("DOM").create("i",{className:"arrow"});a=b("DOM").create("div",{className:"uiTooltipX"},[m,a]);l=new(b("ContextualLayer"))({},a);l.shouldSetARIAProperties(!1);l.enableBehavior(b("ContextualLayerAutoFlip"))}}function s(a,c){u._show(a,g._("Memuat...")),new(b("AsyncRequest"))(c).setHandler(function(b){u._show(a,b.getPayload())}).setErrorHandler(b("emptyFunction")).send()}var t;b("Event").listen(document.documentElement,"mouseover",function(event){t=event,b("setImmediate")(function(){t=null})});var u=babelHelpers["extends"]({},b("TooltipData"),{isActive:function(a){return a===h},process:function(a,c){if(!b("DOM").contains(a,c))return;if(a!==h){u.fetchIfNecessary(a);c=u._get(a);if(c.suppress)return;c.delay?u._showWithDelay(a,c.delay):u.show(a)}},fetchIfNecessary:function(a){var b=a.getAttribute("data-tooltip-uri");b&&(a.removeAttribute("data-tooltip-uri"),s(a,b))},suspend:function(){o=!0},hide:function(){var a=h,c,d=o;o=!1;try{b("Arbiter").inform("tooltip/requesthide",{context:a}),c=o}finally{o=d}c||u.commitHide(a)},commitHide:function(a){if(!i||a!==i){if(a){l.hide();h=null;while(p.length)p.pop().remove()}b("Arbiter").inform("tooltip/hide",{context:a})}},_show:function(a,b){u._store({context:a,content:b}),u.isActive(a)&&u.show(a)},show:function(a){var c,d=o;o=!1;try{b("Arbiter").inform("tooltip/requestshow",{context:a}),c=o}finally{o=d}c||u.commitShow(a)},commitShow:function(a){__p&&__p();var c=function(){a.removeAttribute("aria-describedby");var c=u._get(a);c.className&&b("CSS").removeClass(l.getRoot(),c.className);u.hide()},d=function(a){b("DOM").contains(h,a.getTarget())||c()};i=a;r();a!==h&&u.commitHide(a);i=null;a!==h&&b("Arbiter").inform("tooltip/beforeshow",{context:a});var e=u._get(a);if(e.suppress||u.allSuppressed)return;var f=e.content;if(e.overflowDisplay){if(a.offsetWidth>=a.scrollWidth)return;f||(f=b("getElementText")(a))}var g=f?function(){a.setAttribute("aria-describedby",n),l.show()}:function(){},j=0,k=e.offsetY?parseInt(e.offsetY,10):0;if(e.position==="left"||e.position==="right")k=(a.offsetHeight-28)/2;else if(e.alignH!=="center"){var o=a.offsetWidth;o<32&&(j=(o-32)/2*(e.alignH==="right"?-1:1))}l.setContextWithBounds(a,b("getInlineBoundingRect")(a,t&&b("Vector").getEventPosition(t))).setOffsetX(j).setOffsetY(k).setPosition(e.position).setAlignment(e.alignH);if(typeof f==="string"){b("CSS").addClass(l.getRoot(),"invisible_elem");o=b("DOM").create("span",{},b("nl2br")(f));j=b("DOM").create("div",{className:"tooltipText"},o);b("DOM").setContent(m,j);g();b("CSS").removeClass(l.getRoot(),"invisible_elem")}else b("DOM").setContent(m,f),g();p.push(b("Event").listen(document.documentElement,"mouseover",d),b("Event").listen(document.documentElement,"focusin",d));k=b("Style").getScrollParent(a);k!==window&&p.push(b("Event").listen(k,"scroll",c));e.persistOnClick||p.push(b("Event").listen(a,"click",c));e.className&&b("CSS").addClass(l.getRoot(),e.className);h=a},_showWithDelay:function(a,c){a!==j&&u._clearDelay();if(!k){var d=function(a){b("DOM").contains(j,a.getTarget())||u._clearDelay()};q.push(b("Event").listen(document.documentElement,"mouseover",d),b("Event").listen(document.documentElement,"focusin",d));j=a;k=setTimeout(function(){u._clearDelay(),u.show(a)},c)}},_clearDelay:function(){clearTimeout(k);j=null;k=null;while(q.length)q.pop().remove()}});b("Event").listen(window,"scroll",u.hide);e.exports=u}),null);
__d("FacebarPlaceholderShortcut",["fbt","KeyboardShortcuts","translateKey"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){this._input=a,this._listener=null}a.prototype.enable=function(){this._registerListener()};a.prototype._registerListener=function(){this._listener&&this._listener.remove(),this._listener=b("KeyboardShortcuts").register("SLASH",this._handleKeydown.bind(this),{filter:function(a,b){return!a.getModifiers().shift},persistOnTransition:!0,shortcutInfo:{displayKeys:[b("translateKey")("/")],description:g._("Cari")}})};a.prototype.disable=function(){this._listener&&this._listener.remove(),this._listener=null};a.prototype._handleKeydown=function(a){this._input.focus();return!1};e.exports=a}),null);
__d("XFacebarBootloadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/typeahead/search/facebar/bootload/",{placeholder_id:{type:"String"}})}),null);
__d("FacebarBootloader",["AsyncRequest","BanzaiODS","CSS","Event","FacebarPlaceholderShortcut","Run","SubscriptionsHandler","XFacebarBootloadController","getActiveElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="facebar_bootloader",h=g+"_";a={isRequested:!1,isFocused:!1,isInitialized:!1,init:function(a,c,d,e){this.reset(),this.subscriptions=new(b("SubscriptionsHandler"))(),this.placeholder=d,this.searchInput=a,this.shortcutHandler=new(b("FacebarPlaceholderShortcut"))(a),this.loadingIndicator=c,this.shortcutHandler.enable(),this.subscriptions.addSubscriptions(b("Event").listen(a,"focus",function(){this.requestSearch(),this.showLoadingIndicator()}.bind(this)),b("Event").listen(d,"mouseover",this.requestSearch.bind(this)),b("Event").listen(a,"invalid",function(event){return event.preventDefault()})),e&&this.subscriptions.addSubscriptions(b("Event").listen(window,"load",this.requestSearch.bind(this))),b("Run").onUnload(this.reset.bind(this)),this.isInitialized=!0,(a.value||b("getActiveElement")()==a)&&(this.requestSearch(),this.showLoadingIndicator())},showLoadingIndicator:function(){this.loadingIndicator&&b("CSS").show(this.loadingIndicator)},reset:function(){this.subscriptions&&this.subscriptions.release(),this.shortcutHandler&&this.shortcutHandler.disable(),this.searchInput=this.subscriptions=this.shortcutHandler=null,this.loadingIndicator=null,this.isRequested=!1,this.isFocused=!1,this.isInitialized=!1},requestSearch:function(){b("getActiveElement")()==this.searchInput&&!this.isFocused&&(this.isFocused=!0,this.focusTime=Date.now());if(this.isRequested||!this.isInitialized)return;this.isRequested=!0;var a=b("XFacebarBootloadController").getURIBuilder().setString("placeholder_id",this.placeholder.getAttribute("id")).getURI(),c=new(b("AsyncRequest"))();c.setURI(a).setMethod("GET").setReadOnly(!0).setAllowCrossPageTransition(!0).setErrorHandler(function(a){b("BanzaiODS").bumpEntityKey(g,h+"request_failed"),a&&a.errorSummary?b("BanzaiODS").bumpEntityKey(g,h+"request_failed_"+a.errorSummary):b("BanzaiODS").bumpEntityKey(g,h+"request_failed_no_error_summary"),this.isRequested=!1}).send()},setFocus:function(a,c,d){if(!this.searchInput)return;b("BanzaiODS").bumpEntityKey(g,h+"response_arrived");(this.searchInput.value||this.isFocused)&&(a.getCore().isFocused=!0,a.getCore().input.setValue(d.fromString(this.searchInput.value),!0),a.getCore().setStartTime(this.focusTime),c.focus(),c.setSelection({length:this.searchInput.selectionEnd-this.searchInput.selectionStart,offset:this.searchInput.selectionStart}),c.togglePlaceHolder&&c.togglePlaceholder());this.reset()}};e.exports=a}),null);
__d("QueryHistory",[],(function(a,b,c,d,e,f){var g={};a={set:function(a,b){g[this._key(a)]=b},get:function(a){return g[this._key(a)]},_key:function(a){return"uri-"+a.getQualifiedURI().toString()}};e.exports=a}),null);
__d("SimpleSearchNavigation",["Arbiter","DOMQuery","Input","QueryHistory","URI"],(function(a,b,c,d,e,f){__p&&__p();var g=null,h=null;a={registerInput:function(a,c){h=b("DOMQuery").scry(a,"input")[0],g&&this._updateTitle(g,c),b("Arbiter").subscribe("page_transition",function(a,c){this._updateTitle(b("QueryHistory").get(c.uri))}.bind(this))},_updateTitle:function(a,c){h&&(b("Input").setValue(h,a||""),h.setAttribute("singlestate",a&&c),h.blur())},setPageTitle:function(a,c){b("QueryHistory").set(b("URI").getNextURI(),a);h?this._updateTitle(a,c):g=a;c={};b("Arbiter").inform("search/updateNullState",c,b("Arbiter").BEHAVIOR_STATE)},setPageQuery:function(a){b("Arbiter").inform("search/updateNullState",a,b("Arbiter").BEHAVIOR_STATE)}};e.exports=a}),null);
__d("UITinyViewportAction",["Arbiter","ArbiterMixin","BanzaiScuba","CSS","Event","getDocumentScrollElement","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=document.documentElement,h,i,j,k,l=!1,m=!1,n=!1,o=!1,p={init:function(a){__p&&__p();a=b("queryThenMutateDOM").bind(null,function(){k=k||b("getDocumentScrollElement")(),i=g.clientWidth<k.scrollWidth-1,j=g.clientHeight<400,h=j||i},function(){(h!==l||i!==m||j!==n)&&(b("CSS").conditionClass(g,"tinyViewport",h),b("CSS").conditionClass(g,"tinyWidth",i),b("CSS").conditionClass(g,"tinyHeight",j),b("CSS").conditionClass(g,"canHaveFixedElements",!h),p.inform("change",h),b("Arbiter").inform("tinyViewport/change",{tiny:h,tinyWidth:i,tinyHeight:j},b("Arbiter").BEHAVIOR_STATE),l=h,m=i,n=j);if(!o){var a=new(b("BanzaiScuba"))("www_tinyview_port",null,{addBrowserFields:!0});a.addInteger("clientWidth",g.clientWidth);a.addInteger("clientHeight",g.clientHeight);a.addNormal("view",h?"tiny":"normal");a.post();o=!0}},"TinyViewport");a();b("Arbiter").subscribe("quickling/response",a);b("Event").listen(window,"resize",a)},isTiny:function(){return h},isTinyWidth:function(){return i},isTinyHeight:function(){return j}};Object.assign(p,b("ArbiterMixin"));e.exports=p}),null);
__d("HTMLMediaElementReadyStates",[],(function(a,b,c,d,e,f){a={HAVE_NOTHING:0,HAVE_METADATA:1,HAVE_CURRENT_DATA:2,HAVE_FUTURE_DATA:3,HAVE_ENOUGH_DATA:4};e.exports=a}),null);
__d("VideoFrameBuffer",["HTMLMediaElementReadyStates"],(function(a,b,c,d,e,f){__p&&__p();function a(a,b,c){"use strict";this.$2=b,this.$1=a,this.$3=c||"contain"}a.prototype.updateFrameBuffer=function(){"use strict";__p&&__p();this.$4&&(this.$1.width=this.$4,this.$4=null);this.$5&&(this.$1.height=this.$5,this.$5=null);if(this.$2.readyState<b("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA)return;var a=this.$1.clientWidth||this.$1.width,c=this.$1.clientHeight||this.$1.height,d=a,e=c,f=this.$2.videoWidth/this.$2.videoHeight,g=d/e;this.$3==="cover"&&(g*=-1,f*=-1);g>f?d=e*f:g<f&&(e=d/f);g=this.$1.getContext("2d");if(!(g instanceof window.CanvasRenderingContext2D))return;try{g.drawImage(this.$2,(a-d)/2,(c-e)/2,d,e)}catch(a){if(a.name!=="NS_ERROR_NOT_AVAILABLE")throw a}};a.prototype.getDOMNode=function(){"use strict";return this.$1};a.prototype.updateDimensions=function(a,b){"use strict";this.$4=a,this.$5=b};e.exports=a}),null);
__d("classWithMixins",[],(function(a,b,c,d,e,f){function a(a,b){var c=function(){a.apply(this,arguments)};c.prototype=Object.assign(Object.create(a.prototype),b.prototype);return c}e.exports=a}),null);
__d("promiseFinally",["Promise"],(function(a,b,c,d,e,f){function a(a,c){return a.then(function(a){return b("Promise").resolve(c()).then(function(){return a})},function(a){return b("Promise").resolve(c()).then(function(){throw a})})}e.exports=a}),null);