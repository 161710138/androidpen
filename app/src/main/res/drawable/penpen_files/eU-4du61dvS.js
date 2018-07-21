if (self.CavalryLogger) { CavalryLogger.start_js(["vW6a0"]); }

__d("XProfileTilesLogDismissController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/tiles/log/dismiss/",{section_type:{type:"Enum",required:!0,enumType:1}})}),null);
__d("ProfileTileActions",["csx","cx","AsyncRequest","CSS","Event","XProfileTilesLogDismissController","tidyEvent"],(function(a,b,c,d,e,f,g,h){a={addCollapseListeners:function(a,c){var d=a.querySelector("._3vay");d!==null&&b("tidyEvent")(b("Event").listen(d,"click",function(event){b("CSS").addClass(a,"_65tv");var d=b("XProfileTilesLogDismissController").getURIBuilder().setEnum("section_type",c);new(b("AsyncRequest"))().setURI(d.getURI()).setMethod("POST").send()}))}};e.exports=a}),null);
__d("TimelineCapsule",["csx","Arbiter","DataStore","DOM","DOMQuery","FbFeedKeyboardController","Parent","TimelineConstants","TimelineLegacySections","findTag"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!1;function i(a,c){a=b("Parent").byAttribute(a,"data-size");a&&c(a)}a={removeUnit:function(a){i(a,function(a){b("DOM").remove(a)})},loadTwoColumnUnits:function(a){__p&&__p();var c=b("findTag")(a);b("DOMQuery").scry(c,"._3ram").forEach(function(a){__p&&__p();var d=a.getAttribute("data-endmarker"),e=parseInt(a.getAttribute("data-pageindex"),10),f=function(){if(!a.parentNode)return;b("DataStore").set(b("TimelineConstants").DS_LOADED,c.id,e);b("DOM").remove(a);b("Arbiter").inform(b("TimelineConstants").SECTION_FULLY_LOADED,{scrubberKey:d,pageIndex:e,capsuleID:c.id,childCount:c.childNodes.length})};if(b("TimelineLegacySections").get(d))f();else var g=b("Arbiter").subscribe(b("TimelineConstants").SECTION_REGISTERED,function(a,b){b.scrubberKey===d&&(f(),g.unsubscribe())})});h||(h=!0,b("FbFeedKeyboardController").init(c))}};e.exports=a}),null);
__d("TimelineStickyHeader",["Animation","Arbiter","BlueBar","Bootloader","CSS","DOM","DOMQuery","Event","ProfileTabConst","ProfileTabUtils","ProfileTimelineUILogger","Style","TimelineComponentKeys","TimelineController","UITinyViewportAction","Vector","ViewportBounds","emptyFunction","ge","getOrCreateDOMID","nullthrows","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=200,h=358,i=48;!1;var j=!1,k,l,m,n=!1,o=0,p,q,r=!1,s={},t={VISIBLE:"TimelineStickyHeader/visible",ADJUST_WIDTH:"TimelineStickyHeader/adjustWidth",init:function(a){__p&&__p();k=a;t.reset();!0;k=a;l=b("DOM").find(a,"div.name");b("DOM").find(a,"div.actions");j=b("CSS").hasClass(a,"fbTimelineStickyHeaderVisible");var c,d=!1,e=!0;b("queryThenMutateDOM")(function(){var a=b("BlueBar").getBar();a&&a.offsetTop&&!b("ge")("page_admin_panel")&&b("TimelineController").getCurrentKey()!==b("ProfileTabConst").TIMELINE&&(c=b("Vector").getElementDimensions(a).y,d=!0);e=b("BlueBar").hasFixedBlueBar()},function(){d?b("Bootloader").loadModules(["StickyController"],function(b){new b(a,c).start()},"TimelineStickyHeader"):b("CSS").addClass(a,"fixed_elem"),e||b("CSS").addClass(a,"fbTimelineStickyHeaderNonFixedBlueBar"),t.updateBounds(),t.toggleVisibilityOnFocus(),b("queryThenMutateDOM")(b("emptyFunction"),function(){t.check(b("Vector").getScrollPosition().y)},"TimelineStickyHeader/afterInit"),b("TimelineController").register(b("TimelineComponentKeys").STICKY_HEADER,t)},"TimelineStickyHeader/init")},reset:function(){!1,j=!1,k=null,l=null,s={},m&&m.remove(),m=null},toggleVisibilityOnFocus:function(){b("Event").listen(k,"focusin",function(){t.toggle(!0)}),b("Event").listen(k,"focusout",function(event){var a=event.relatedTarget||null;b("DOMQuery").contains(k,a)||t.check(b("Vector").getScrollPosition().y)})},handleTabChange:function(a){var c=b("nullthrows")(k);r=b("ProfileTabUtils").tabHasStickyHeader(a);o=r?h-i:0;if(!r){t.toggle(!1,function(){b("CSS").hide(c)});return}else b("CSS").show(c)},updateBounds:function(){b("queryThenMutateDOM")(function(){k&&(p=k.offsetTop,q=k.scrollHeight)},function(){m=b("ViewportBounds").addTop(function(){return j?p+q:0})},"TimelineStickyHeader/init")},check:function(a){a=!b("UITinyViewportAction").isTiny()&&(o===0||a>=o);t.toggle(a)},toggle:function(a,c){__p&&__p();if(!k)return;if(a===j||!r&&a){c&&c();return}b("ge")("private_sharing_confirmation_bar")?b("CSS").addClass(k,"privateSharingConfirmationBar"):p=k.offsetTop;var d=a?p-q:p,e=a?p:p-q;b("Style").set(k,"top",d+"px");b("CSS").addClass(k,"fbTimelineStickyHeaderAnimating");var f=b("getOrCreateDOMID")(k);s[f]&&s[f].stop();s[f]=new(b("Animation"))(k).from("top",d).to("top",e).duration(g).ondone(function(){__p&&__p();s[f]=null,a&&!n&&(b("ProfileTimelineUILogger").logStickyHeaderImpression(),n=!0),b("queryThenMutateDOM")(b("emptyFunction"),function(){if(!k)return;b("CSS").conditionClass(k,"fbTimelineStickyHeaderHidden",!a);k.setAttribute("aria-hidden",a?"false":"true");b("CSS").removeClass(k,"fbTimelineStickyHeaderAnimating");b("Style").set(k,"top","");t.updateBounds();b("Arbiter").inform(t.VISIBLE,a);c&&c()})}).go();j=a;j&&t.adjustWidth()},adjustWidth:function(){b("Arbiter").inform(t.ADJUST_WIDTH,l,b("Arbiter").BEHAVIOR_STATE)},dismissConfirmationBar:function(){k&&b("CSS").removeClass(k,"privateSharingConfirmationBar")}};e.exports=t}),null);
__d("ButtonGroup",["CSS","DataStore","Parent"],(function(a,b,c,d,e,f){__p&&__p();var g="firstItem",h="lastItem";function i(a,c){a=b("Parent").byClass(a,c);if(!a)throw new Error("invalid use case");return a}function j(a){return b("CSS").shown(a)&&Array.from(a.childNodes).some(b("CSS").shown)}function k(a){var c,d,e;Array.from(a.childNodes).forEach(function(a){e=j(a),b("CSS").removeClass(a,g),b("CSS").removeClass(a,h),b("CSS").conditionShow(a,e),e&&(c=c||a,d=a)});c&&b("CSS").addClass(c,g);d&&b("CSS").addClass(d,h);b("CSS").conditionShow(a,c)}function a(a,b){b=i(b,"uiButtonGroupItem");a(b);k(b.parentNode)}function l(a){"use strict";this._root=i(a,"uiButtonGroup"),b("DataStore").set(this._root,"ButtonGroup",this),k(this._root)}l.getInstance=function(a){"use strict";a=i(a,"uiButtonGroup");var c=b("DataStore").get(a,"ButtonGroup");return c||new l(a)};Object.assign(l.prototype,{hideItem:a.bind(null,b("CSS").hide),showItem:a.bind(null,b("CSS").show),toggleItem:a.bind(null,b("CSS").toggle)});e.exports=l}),null);
__d("TimelineStickyHeaderNav",["Arbiter","BlueBar","ButtonGroup","CSS","DataStore","DateStrings","DOM","Event","Parent","ProfileTabUtils","ProfileTimelineUILogger","SelectorDeprecated","Style","SubscriptionsHandler","TimelineComponentKeys","TimelineConstants","TimelineController","UITinyViewportAction","URI","Vector","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h,i,j,k,l,m,n,o,p;({});({});[];!1;var q=[],r,s=80;function t(){if(!k||!r)return;var a=b("SelectorDeprecated").getSelectorMenu(k);r.addSubscriptions(b("Event").listen(a,"click",u),b("Arbiter").subscribe(b("TimelineConstants").SECTION_REGISTERED,w))}function u(event){var a=b("Parent").byTag(event.getTarget(),"a");a=a&&b("DataStore").get(a,"key");a&&(b("TimelineController").stickyHeaderNavWasClicked(a),b("TimelineController").navigateToSection(a),b("ProfileTimelineUILogger").logStickyHeaderScrubberClick(a),event.prevent())}function v(a){p===a&&Object.prototype.hasOwnProperty.call(n,a)&&!h.custom_subsection_menu?B(a):x(),b("TimelineController").adjustStickyHeaderWidth()}function w(a,c){__p&&__p();a=c.section;c=a&&a.getParentKey();if(!c)return;var d=A(c);if(!d)return;var e=b("TimelineController").getCurrentScrubber();a=a.getScrubberKey();e=e?e.getLabelForSubnav(c,a):y(a);e&&(Object.prototype.hasOwnProperty.call(n,a)||(n[c]=[]),C(d,{key:a,label:e,sectionKey:c,month:z(a)}),v(c))}function x(){i&&l&&i.hideItem(l)}function y(a){a=z(a);return b("DateStrings").getMonthName(a)}function z(a){a=a.split("_");return parseInt(a.pop(),10)}function A(a){__p&&__p();if(!l||!r)return null;var c=m[a];if(!c){c=m[a]=l.cloneNode(!0);var d=b("DOM").scry(c,"li.activityLog a")[0];d&&(d.href=new(b("URI"))(d.href).addQueryData({key:a}));r.addSubscriptions(b("Event").listen(c,"click",u))}return c}function B(a){__p&&__p();if(!l)return;a=A(a);b("DOM").insertAfter(l,a);b("CSS").hide(l);for(var c in m){var d=m[c];b("CSS").conditionShow(d,d===a)}i&&i.showItem(l)}function C(a,c){__p&&__p();var d=b("DOM").create("a",{href:"#",rel:"ignore",className:"itemAnchor",tabIndex:0},b("DOM").create("span",{className:"itemLabel fsm"},c.label));d.setAttribute("data-key",c.key);d.setAttribute("aria-checked",!1);d=b("DOM").create("li",{className:"uiMenuItem uiMenuItemRadio uiSelectorOption"},d);d.setAttribute("data-label",c.label);var e=b("DOM").find(a,"ul.uiMenuInner"),f=b("DOM").create("option",{value:c.key},c.label);a=b("DOM").find(a,"select");if(c.key==="recent")b("DOM").prependContent(e,d),b("DOM").insertAfter(a.options[0],f);else if(c.sectionKey!==undefined&&c.sectionKey!==null&&c.month!==undefined&&c.month!==null){var g=n[c.sectionKey];if(g.length<1)b("DOM").appendContent(e,d),b("DOM").appendContent(a,f);else{var h=null;g.forEach(function(a,b){b<c.month&&(h=a)});h!==null?(b("DOM").insertAfter(h.menuItem,d),b("DOM").insertAfter(h.selectOption,f)):(b("DOM").insertBefore(g[0].menuItem,d),b("DOM").insertBefore(g[0].selectOption,f))}g[c.month]={menuItem:d,selectOption:f}}else b("DOM").appendContent(e,d),b("DOM").appendContent(a,f)}function D(a,c){__p&&__p();var d=b("DOM").scry(a,"li.uiMenuItem");if(!d)return;for(var e=0;e<d.length;e++){var f=d[e];if(b("CSS").hasClass(f,c)||f.firstChild.getAttribute("data-key")===c){b("DOM").remove(f);break}}f=b("DOM").find(a,"select");e=b("DOM").scry(f,"option");for(var d=0;d<e.length;d++)if(e[d].value===c){b("DOM").remove(e[d]);return}}function E(event){var a=b("Parent").byClass(event.target,"itemAnchor");if(a){a=b("DataStore").get(a,"tab-key");a&&b("ProfileTimelineUILogger").logStickyHeaderNavItemClick(a)}}var F={init:function(c,d){a=c,F.reset(),g=!0,a=c,h=d||{},j=b("DOM").scry(a,"div.pageMenu")[0],k=b("DOM").scry(a,"div.sectionMenu")[0],l=b("DOM").scry(a,"div.subsectionMenu")[0],j&&(b("DOM").find(j,"li.uiMenuSeparator"),i=b("ButtonGroup").getInstance(j)),r=new(b("SubscriptionsHandler"))(),m={},n={},o={},F.adjustMenuHeights(),t(),b("TimelineController").register(b("TimelineComponentKeys").STICKY_HEADER_NAV,F),q.forEach(function(a){a()}),j&&r.addSubscriptions(b("Event").listen(j,"click",E))},reset:function(){g=!1,h={},[],({}),({}),!1,a=null,j=null,k=null,l=null,m={},n={},o={},r&&r.release(),r=null},addTimePeriod:function(a){__p&&__p();if(!k)return;var c=b("TimelineController").getCurrentScrubber();if(!c)return;c=c.getLabelForNav(a);if(!c)return;C(k,{key:a,label:c});if(!k)return;c=b("DOM").find(k,"ul.uiMenuInner");(a==="recent"||c.children.length<2)&&b("SelectorDeprecated").setSelected(k,a,!0)},updateSection:function(a,c){if(c){var d=A(a);b("SelectorDeprecated").setSelected(d,c)}else o[a]=!0;p=a;k&&(b("SelectorDeprecated").setSelected(k,a,!0),v(a))},adjustMenuHeights:function(){__p&&__p();if(!j||!k)return;var a="";b("queryThenMutateDOM")(function(){if(!b("UITinyViewportAction").isTiny()){var c=b("BlueBar").getBar();a=b("Vector").getViewportDimensions().y-(c?b("Vector").getElementDimensions(c).y:0)-s;a+="px"}},function(){[j,k].map(function(c){c&&b("Style").set(b("DOM").find(c,"ul.uiMenuInner"),"maxHeight",a)})})},removeTimePeriod:function(a){k&&D(k,a)},hideSectionMenu:function(){g&&k&&b("CSS").hide(k)},handleTabChange:function(a){a=b("ProfileTabUtils").isTimelineTab(a);j&&b("CSS").conditionShow(j,a);k&&b("CSS").conditionShow(k,a);if(!a)for(var c in m){a=m[c];b("CSS").hide(a)}}};e.exports=F}),null);
__d("ButtonGroupMonitor",["ContextualDialog","ContextualLayer","CSS","DataStore","Layer","Parent","SelectorDeprecated"],(function(a,b,c,d,e,f){function g(a,c){a=b("Parent").byClass(a,"bg_stat_elem")||b("Parent").byClass(a,"uiButtonGroup");!a&&c&&(a=b("DataStore").get(c,"toggleElement",null));a&&(c&&b("DataStore").set(c,"toggleElement",a),b("CSS").toggleClass(a,"uiButtonGroupActive"))}b("Layer").subscribe(["hide","show"],function(a,c){(c instanceof b("ContextualLayer")||c instanceof b("ContextualDialog"))&&g(c.getCausalElement(),c)});b("SelectorDeprecated").subscribe(["close","open"],function(a,b){g(b.selector)})}),null);