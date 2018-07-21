if (self.CavalryLogger) { CavalryLogger.start_js(["SkldN"]); }

__d("ReactComposerCreateNoteController.react",["ActorURI","AsyncRequest","Bootloader","ExtensibleSproutsItemType","React","ReactComposerAttachmentActions","ReactComposerContextTypes","ReactComposerLoggingName","ReactComposerStore","XNotesComposerController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerCreateNoteController",contextTypes:b("ReactComposerContextTypes"),propTypes:{onClick:a.func,isEntryPointComposer:a.bool},getDefaultProps:function(){return{isEntryPointComposer:!1}},render:function(){return b("React").createElement("span",{onClick:this._onClick,role:"presentation"},this.props.children)},_onClick:function(event){this.props.isEntryPointComposer&&b("ReactComposerAttachmentActions").selectAttachmentLoggingOnlyDoNotUse(this.context.composerID,b("ExtensibleSproutsItemType").NOTE,b("ReactComposerLoggingName").NOTES_SPROUT,b("ReactComposerStore").getSproutSurface(this.context.composerID)),b("Bootloader").loadModules(["AsyncDialog"],function(a){var c=b("XNotesComposerController").getURIBuilder().setString("composer_id",this.context.composerID).getURI();c=new(b("AsyncRequest"))(b("ActorURI").create(c,this.context.actorID)).setMethod("POST").setStatusElement(this.context.composerID);a.send(c)}.bind(this),"ReactComposerCreateNoteController.react"),this.props.onClick&&this.props.onClick(event)}});e.exports=c}),null);
__d("ReactComposerTaggerToggleController.react",["React","ReactComponentWithPureRenderMixin","ReactComposerContextTypes","ReactComposerLoggingName","ReactComposerTaggerActions"],(function(a,b,c,d,e,f){"use strict";a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerTaggerToggleController",contextTypes:b("ReactComposerContextTypes"),mixins:[b("ReactComponentWithPureRenderMixin")],propTypes:{taggerID:a.string.isRequired,loggingName:a.oneOf(Object.values(b("ReactComposerLoggingName"))).isRequired,onSelect:a.func},render:function(){return b("React").createElement("span",{onClick:this.props.onSelect||this._onSelect,role:"presentation"},this.props.children)},_onSelect:function(){b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.loggingName,this.props.taggerID,!1)}});e.exports=c}),null);
__d("ReactComposerTaggerSproutContainer.react",["FluxContainer","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerSproutItem.react","ReactComposerTaggerStore","ReactComposerTaggerToggleController.react"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){return{highlighted:b("ReactComposerTaggerStore").hasData(d.composerID,c.taggerID),isDisabled:b("ReactComposerTaggerStore").isDisabled(d.composerID,c.taggerID),selectedTagger:b("ReactComposerTaggerStore").getSelectedTagger(d.composerID)}};a.prototype.componentDidUpdate=function(a,b){b.selectedTagger===this.props.taggerID&&this.state.selectedTagger===null&&this.refs.sproutItem&&this.refs.sproutItem.focus()};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ReactComposerTaggerToggleController.react"),babelHelpers["extends"]({},this.props,{loggingName:this.props.uiConfig.loggingName}),b("React").createElement(b("ReactComposerSproutItem.react"),{highlighted:this.state.highlighted,ref:"sproutItem",uiConfig:this.props.uiConfig}))};function a(){g.apply(this,arguments)}a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerActivitySproutContainer.react",["ExtensibleSproutsItemType","FluxContainer","React","ReactComposerContextTypes","ReactComposerDisabledSproutItem.react","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerStore","ReactComposerTaggerType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.getStores=function(){return[b("ReactComposerTaggerStore")]};a.calculateState=function(a,c,d){a=d.composerID;return{isDisabled:b("ReactComposerTaggerStore").isDisabled(a,b("ReactComposerTaggerType").ACTIVITY)}};a.prototype.render=function(){return this.state.isDisabled?b("React").createElement(b("ReactComposerDisabledSproutItem.react"),{uiConfig:this.props.uiConfig}):b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").ACTIVITY})};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").MINUTIAE]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a,{withContext:!0,withProps:!0})}),null);
__d("ReactComposerNoteSproutContainer.react",["ExtensibleSproutsItemType","React","ReactComposerCreateNoteController.react","ReactComposerSproutItem.react","ReactComposerSproutsDefaultUIConfig"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;g=babelHelpers.inherits(a,b("React").PureComponent);g&&g.prototype;a.prototype.render=function(){return b("React").createElement(b("ReactComposerCreateNoteController.react"),{onClick:this.$1,isEntryPointComposer:!0},b("React").createElement(b("ReactComposerSproutItem.react"),{uiConfig:this.props.uiConfig}))};a.prototype.$1=function(event){event.stopPropagation()};function a(){g.apply(this,arguments)}a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").NOTE]};e.exports=a}),null);
__d("ReactComposerSponsorSproutContainer.react",["fbt","ExtensibleSproutsItemType","FluxContainer","React","ReactComposerContextTypes","ReactComposerSproutsDefaultUIConfig","ReactComposerTaggerActions","ReactComposerTaggerSproutContainer.react","ReactComposerTaggerType","SimpleXUIDialog","SponsorTagsOptInActionTypes","SponsorTagsOptInDialogContainer.react","SponsorTagsOptInDispatcher","SponsorTagsOptInStore"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").PureComponent);h=c&&c.prototype;a.getStores=function(){return[b("SponsorTagsOptInStore")]};a.calculateState=function(){return{isOptedIn:b("SponsorTagsOptInStore").getState().isOptedIn}};function a(){h.constructor.call(this),this.state={isOptedIn:null}}a.prototype.UNSAFE_componentWillMount=function(){b("SponsorTagsOptInDispatcher").explicitlyRegisterStores([b("SponsorTagsOptInStore")]),b("SponsorTagsOptInDispatcher").dispatch({type:b("SponsorTagsOptInActionTypes").QUERY_STATUS,profileID:this.context.targetID})};a.prototype.componentDidUpdate=function(a,c){c.isOptedIn===!1&&this.state.isOptedIn===!0&&b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.uiConfig.loggingName,b("ReactComposerTaggerType").SPONSOR,!1)};a.prototype.render=function(){var a=this.state.isOptedIn===!1?b("React").createElement(b("SponsorTagsOptInDialogContainer.react"),null):null;return b("React").createElement("div",null,b("React").createElement(b("ReactComposerTaggerSproutContainer.react"),{uiConfig:this.props.uiConfig,taggerID:b("ReactComposerTaggerType").SPONSOR,onSelect:this.$1.bind(this)}),a)};a.prototype.$1=function(){this.state.isOptedIn===!0?b("ReactComposerTaggerActions").selectTagger(this.context.composerID,this.props.uiConfig.loggingName,b("ReactComposerTaggerType").SPONSOR,!1):this.state.isOptedIn===!1?b("SponsorTagsOptInDispatcher").dispatch({type:b("SponsorTagsOptInActionTypes").SHOW}):b("SimpleXUIDialog").show(g._("Sponsor Tags are currently unavailable. We appreciate your patience as we resolve the issue. Please try again later."),g._("Sorry, an Error has Occurred..."))};a.defaultProps={uiConfig:b("ReactComposerSproutsDefaultUIConfig")[b("ExtensibleSproutsItemType").SPONSOR_TAG]};a.contextTypes=b("ReactComposerContextTypes");e.exports=b("FluxContainer").create(a)}),null);