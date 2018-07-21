if (self.CavalryLogger) { CavalryLogger.start_js(["3jpxS"]); }

__d("UFIAddCommentController",["Parent","PrivateCommentsConfig","React","ReactDOM","UFIAddComment.react","UFIAddCommentActionType","UFIAsyncWrapper","UFICallbackStore","UFICommentEditIDStore","UFIDispatcher","UFIDispatcherContext.react","UFIFeedbackContext.react","UFINewCommentNotifier"],(function(a,b,c,d,e,f){"use strict";__p&&__p();g.factory=function(a,b){b.rootid=a.id;return new g(a,Object.freeze(b))};function g(a,c){this.renderAddComment=function(a,c){return this.$5!==null||!c||!c.cancomment||!c.actorforpost?null:b("React").createElement(b("UFIAddComment.react"),{viewerActorID:c.actorforpost,targetID:c.ownerid,targetName:c.actorname,groupID:c.grouporeventid,initialData:null,ref:null,withoutSeparator:!1,editingComment:{},isEditing:!1,allowLiveVideoCommentReplyMode:!0,mentionsDataSource:c.mentionsdatasource,showSendOnEnterTip:c.showsendonentertip,peopleOutsideCommunityInCommentNotice:c.peopleoutsidecommunityincommentnotice,allowAudienceSelector:!!a.friendConversationsParams,allowPhotoAttachments:c.allowphotoattachments&&!a.islivestreaming,allowVideoAttachments:c.allowvideoattachments&&!a.islivestreaming,allowFileAttachments:c.allowfileattachments&&!a.islivestreaming,allowStickerAttachments:c.allowstickerattachments&&(!a.islivestreaming||c.allowLiveVideoStickerAttachments),allowCustomStickerAttachments:c.allowgaminglivestreamcustomstickers,allowGifAttachments:c.allowgifattachments&&(!a.islivestreaming||c.allowgaminglivestreamgifattachments),allowNativeTipJar:c.isnativetipjarenabled,tipJarModule:c.tipjarmodule,allowTogglePrivateComments:(b("PrivateCommentsConfig").composer_lock_enabled||b("PrivateCommentsConfig").composer_unlocked_lock_enabled)&&c.canviewercommentinprivate,privateCommentTarget:c.actorname,contextArgs:a,feedback:c,subtitle:c.subtitle,commentsTargetID:c.commentstargetfbid})}.bind(this),this.$1=a,this.$2=c,this.$3=new(b("UFIDispatcher"))(),this.$4={UFICallbackStore:new(b("UFICallbackStore"))(this.$3)},this.$4.UFICallbackStore.on(b("UFIAddCommentActionType").SUBMIT_NEW,function(c){return b("UFINewCommentNotifier").onNewComment(b("Parent").byTag(a,"form"),this.$2,c.comment,c.target,c.replyCommentID,c.timestamp)}.bind(this)),this.$5=b("UFICommentEditIDStore").getForInstance(this.$2.instanceid),b("UFICommentEditIDStore").addListener(function(){var a=b("UFICommentEditIDStore").getForInstance(this.$2.instanceid);a!=this.$5&&(this.$5=a,this.render())}.bind(this)),this.render()}g.prototype.render=function(){var a=b("React").createElement(b("UFIDispatcherContext.react"),{dispatcher:this.$3,stores:this.$4},b("React").createElement(b("UFIFeedbackContext.react"),{contextArgs:this.$2,render:this.renderAddComment}));b("ReactDOM").render(b("React").createElement(b("UFIAsyncWrapper"),null,a),this.$1)};g.prototype.disable=function(){this.$4.UFICallbackStore.remove()};e.exports=g}),null);
__d("PlatformDialogOauthWrite",["Arbiter","PrivacyConst","SelectorDeprecated"],(function(a,b,c,d,e,f){a={subscribeAudienceText:function(a,c,d){b("Arbiter").subscribe("platform/privacy/app-audience",function(b,e){a.show(c[e]||d)}),b("Arbiter").subscribe("AudienceSelector/changed",function(e,f){e=b("SelectorDeprecated").getOptionValue(f.option);e!=b("PrivacyConst").BaseValue.CUSTOM&&a.show(c[e]||d)}),b("Arbiter").subscribe("CustomPrivacyOptionController/update",function(e,f){a.show(c[b("SelectorDeprecated").getOptionValue(f.option)]||d)})}};e.exports=a}),null);
__d("PlatformDialogStack",["CSS","ge"],(function(a,b,c,d,e,f){__p&&__p();function a(a,b){this._root=a,this._showing=b}Object.assign(a.prototype,{getRoot:function(){return this._root},getShowing:function(){return this._showing},show:function(a){Array.from(this._root.childNodes).forEach(b("CSS").hide,b("CSS"));b("CSS").show(b("ge")(a,this._root));this._showing=a;return this}});e.exports=a}),null);
__d("legacy:AudienceSelector",["AudienceSelector"],(function(a,b,c,d,e,f){b("AudienceSelector")}),3);
__d("FriendListPrivacyOptions",["Arbiter","AsyncDialog","AsyncRequest","DOMQuery","PageTransitions","Parent","SelectorDeprecated","$","ge","nullthrows"],(function(a,b,c,d,e,f){__p&&__p();var g=!1,h=!1,i=null,j={},k=function(a){__p&&__p();Object.keys(j).length||b("PageTransitions").registerHandler(function(){j={},g=!1,h=!1});var c=a.getAttribute("data-name");j[c]=a;b("SelectorDeprecated").listen(a,"select",function(a){a=a.option;var c=b("DOMQuery").find(a,"a.itemAnchor"),d=c.getAttribute("data-flid");if(!d)return;c=c.getAttribute("data-dynamic");c&&g?l.showSmartListNux(a,d):!c&&h&&l.showDumbListNux([d])})},l={listen:function(a,c,d){a=b("ge")(a);if(!a)return;a=b("Parent").byClass(a,"audienceSelector");a&&(k(a),g=c,h=d)},showSmartListNux:function(a,c){a=b("$")(a);new(b("AsyncRequest"))("/ajax/friends/lists/smart_list_publish_nux.php").setData({option_id:a.id,flid:c}).send();g=!1},setContextualDialog:function(a,c){__p&&__p();c=b("$")(c);c=b("Parent").byClass(c,"audienceSelector");if(c){a.setContext(c);a.show();var d=b("Arbiter").subscribe("composer/publish",function(){a.hide()});a.subscribe("hide",function(){d.unsubscribe()})}},showDumbListNux:function(a){b("AsyncDialog").send(new(b("AsyncRequest"))("/ajax/friends/lists/dumb_list_publish_nux.php").setData({flids:a})),h=!1},showBothListsNux:function(a,c){i=b("$")(a),l.showDumbListNux(c)},setDialogX:function(a){if(!i)return;a.subscribe("hide",function(){l.showSmartListNux(b("nullthrows")(i)),i=null})}};e.exports=l}),null);
__d("VideoChainingToken",["Base64"],(function(a,b,c,d,e,f){__p&&__p();function g(a){"use strict";this.$1=a}g.encode=function(a){"use strict";return new g(b("Base64").encode(JSON.stringify(a)))};g.prototype.decode=function(){"use strict";return JSON.parse(b("Base64").decode(this.$1))};e.exports=g}),null);
__d("TahoeShareButton.react",["React","UFIShareNowMenuBootloader.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.render=function(){var a=this.props,c=a.endpoint;a=a.endpointData;return b("React").createElement(b("UFIShareNowMenuBootloader.react"),{endpoint:c,endpointData:a,openOnInitOverride:!1})};function a(){g.apply(this,arguments)}e.exports=a}),null);