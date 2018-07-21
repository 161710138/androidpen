if (self.CavalryLogger) { CavalryLogger.start_js(["jHZhQ"]); }

__d("FundsAvailability",[],(function(a,b,c,d,e,f){e.exports={NONE:0,FUNDS_AVAILABILITY_NA:65,FUNDS_AVAILABILITY_IMMEDIATE:73,FUNDS_AVAILABILITY_SAME_DAY:83,FUNDS_AVAILABILITY_NEXT_DAY:78,FUNDS_AVAILABILITY_FIVE_DAY:70,FUNDS_AVAILABILITY_UNKNOWN:85,FUNDS_AVAILABILITY_ONE_THREE_DAY:79,FUNDS_AVAILABILITY_CROSS_BORDER:66,FUNDS_AVAILABILITY_CROSS_BORDER_FAST_FUNDS:67,FUNDS_AVAILABILITY_DOMESTIC:68,FUNDS_AVAILABILITY_DOMESTIC_FAST_FUNDS:69}}),null);
__d("DockTabsViewportFantaTabUtils",["gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=284,h=260,i=9;b=b("gkx")("AT7HdSIkhS9TSQx6PWXopj-NxmSus9nuXkEu6XM1WdZJElXpLdnQNN92q5iZdzYJyRUbbjoWOgsBC8RH9ivzcfSt")?g:h;var j=b+i;function a(){return j+1}function c(a){return Math.floor(a/j)}function d(a){if(!a)return null;a=a.fantaTabModelStateGetter;return a?a():null}function f(a){return a?a.size:0}e.exports={getTabCountToFitWidth:c,getMinRequiredWidthForFirstFantaTab:a,getFantaTabModelFromCallbacks:d,getNumFantaTabsFromModel:f}}),null);
__d("DockTabsViewportPinnedConversationTabUtils",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=496+9+2,h=210+9+2,i=52;function j(){return g}function k(){return h}function a(){return i}function b(a){return a.getIsRaised()?j():k()}function c(){return j()+i}function d(a){a=a||{};a=a.pinnedConvoTabStateGetter;return a?a():null}function f(a){return a?a.getTotalTabCount():0}e.exports={getRaisedPinnedConvoTabWidth:j,getLoweredPinnedConvoTabWidth:k,getPinnedConvoSelectorWidth:a,getPinnedConvoTabWidth:b,getMinRequiredWidthForFirstConvoTab:c,getPinnedConvoTabsStateFromCallbacks:d,getNumPinnedConvoTabsFromModel:f}}),null);
__d("DockTabsViewportCalculator",["csx","Arbiter","DataStore","Dock","DockTabsViewportFantaTabUtils","DockTabsViewportPinnedConversationTabUtils","DOM","Event","FullScreen","SubscriptionsHandler","Vector","ViewportBounds","ge","getViewportDimensions","setImmediate"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=50;a=35;var i=a,j="dock-tab-viewport-inst",k=b("DockTabsViewportFantaTabUtils").getMinRequiredWidthForFirstFantaTab,l=b("DockTabsViewportFantaTabUtils").getFantaTabModelFromCallbacks,m=b("DockTabsViewportFantaTabUtils").getNumFantaTabsFromModel,n=b("DockTabsViewportPinnedConversationTabUtils").getMinRequiredWidthForFirstConvoTab,o=b("DockTabsViewportPinnedConversationTabUtils").getNumPinnedConvoTabsFromModel,p=b("DockTabsViewportPinnedConversationTabUtils").getPinnedConvoTabsStateFromCallbacks;function q(a){return a?b("Vector").getElementDimensions(a).x:0}function r(a){this.$1=a,this.$3=0,this.$4=0,this.$5=null,this.$6=null,this.$7=!1,this.$8=!1,this.$9=!1,this.$2=new(b("SubscriptionsHandler"))(),this.$10(),this.$11()}r.prototype.$10=function(){var a=this.$12.bind(this);this.$2.addSubscriptions(b("Event").listen(window,"resize",a),b("Dock").subscribe("resize",a),b("Arbiter").subscribeOnce("sidebar/initialized",a,b("Arbiter").SUBSCRIBE_NEW),b("FullScreen").subscribe("changed",function(){b("FullScreen").isFullScreen()?(this.$7=!0,this.$8=!1):(this.$7=!1,this.$8&&(b("setImmediate")(function(){a()}),this.$8=!1))}.bind(this)))};r.prototype.registerFantaTabCallbacks=function(a){this.$5=a};r.prototype.registerPinnedConvoTabCallbacks=function(a){this.$6=a};r.prototype.forceRecalculateFBDockWidth=function(){this.$11(),this.$13({forceRecalculateChatTabs:!1,pinnedConvoUpdateData:null})};r.prototype.forceRecalculateChatTabs=function(){this.$13({forceRecalculateChatTabs:!0,pinnedConvoUpdateData:null})};r.prototype.forceRecalculatePinnedConvoTabs=function(a){this.$13({forceRecalculateChatTabs:!0,pinnedConvoUpdateData:a})};r.prototype.$12=function(){if(b("FullScreen").isFullScreen()||this.$7){this.$8=!0;return}this.forceRecalculateFBDockWidth()};r.prototype.$13=function(a){var b=a.forceRecalculateChatTabs;a=a.pinnedConvoUpdateData;var c=this.$14(),d=c.chatTabAvailableWidth;c=c.pinnedConvoTabAvailableWidth;this.$15(d,!!b);this.$16(c,a)};r.prototype.$16=function(a,b){var c=this.$6||{};c=c.onAvailableWidthChanged;c&&c(a,b)};r.prototype.$15=function(a,b){b=this.$5||{};b=b.onAvailableWidthChanged;b&&b(a)};r.prototype.$17=function(){var a=l(this.$5);return m(a)};r.prototype.$18=function(){return k()};r.prototype.$14=function(){__p&&__p();var a=this.$3,b={chatTabAvailableWidth:a,pinnedConvoTabAvailableWidth:0},c={chatTabAvailableWidth:0,pinnedConvoTabAvailableWidth:a},d=this.$17(),e=p(this.$6),f=o(e);if(!e||f===0)return b;else if(d===0)return c;e=this.$18();if(a<=e)return b;f=n();d=a-e;if(d<f)return b;else c=f;d=c;b=Math.max(e,a-c);return{chatTabAvailableWidth:b,pinnedConvoTabAvailableWidth:d}};r.prototype.$11=function(){this.$3=this.$19(),this.$20("DockTabsViewportCalculator/recalcTotalDock_FOR_TEST_ONLY")};r.prototype.$21=function(){var a=this.$1;if(!a)return{buddyListNubWidth:0,employeeNubsWidth:0};var c=q(a),d=q(b("DOM").find(a,"._56ox")),e=q(b("DOM").scry(a,"._56oy")[0]);a=q(b("DOM").scry(a,"._ph1")[0]);c=Math.max(c-d-e-a,0);return{buddyListNubWidth:d,employeeNubsWidth:c}};r.prototype.$19=function(){__p&&__p();var a=b("getViewportDimensions").withoutScrollbars().width;a-=b("ViewportBounds").getLeft()+b("ViewportBounds").getRight();a-=h;var c=this.$21(),d=c.buddyListNubWidth;c=c.employeeNubsWidth;a-=d;this.$4=Math.max(this.$4,c);a-=this.$4;a-=i;return Math.max(a,0)};r.prototype.enableTestInforms_FOR_TEST_ONLY=function(){this.$9=!0};r.prototype.$20=function(a){this.$9&&b("Arbiter").inform(a)};r.prototype.getChatTabAvailableDockWidth_FOR_TEST_ONLY=function(){return this.$14().chatTabAvailableWidth};r.prototype.getPinnedConvoTabAvailableDockWidth_FOR_TEST_ONLY=function(){return this.$14().pinnedConvoTabAvailableWidth};r.prototype.getAvailableTotalWidth_FOR_TEST_ONLY=function(){return this.$3};e.exports={getInstance:function(a){__p&&__p();var c=b("ge")("pagelet_dock");if(!c||!b("DOM").contains(c,a))return null;a=b("DataStore").get(c,j);if(a instanceof r)return a;var d=b("DOM").scry(c,".fbDockWrapperRight .fbDock")[0];a=new r(d);b("DataStore").set(c,j,a);return a}}}),null);
__d("ChatActivity",["Arbiter","ArbiterMixin","Event","JSLogger","MercuryConfig","PresenceState","UserActivity","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("MercuryConfig").activity_limit||6e4,i=b("MercuryConfig").idle_limit||18e5,j=b("MercuryConfig").idle_poll_interval||3e5,k=b("JSLogger").create("chat_activity"),l=Date.now(),m=!0;function n(){var a=Date.now();return!!(m&&a-l<h)}c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.isActive=n,b}var o=new a();function p(){var a=l;l=Date.now();l-a>i&&(k.debug("idle_to_active",a),b("PresenceState").doSync());o.inform("activity")}b("Event").listen(window,"focus",function(){m=!0,p()});b("Event").listen(window,"blur",function(){m=!1});b("UserActivity").subscribe(function(){p()});function q(a){a=a&&a.at&&b("PresenceState").verifyNumber(a.at);typeof a!=="number"&&(a=null);return a||0}setInterval(function(){var a=Date.now(),c=q(b("PresenceState").get()),d=Math.max(l,c);a-d>i&&(k.debug("idle",{cookie:c,local:l}),o.inform("idle",a-d))},j);b("PresenceState").registerStateStorer(function(a){var b=q(a);b<l&&(a.at=l);return a});b("Arbiter").subscribe(b("JSLogger").DUMP_EVENT,function(a,b){b.chat_activity={activity_limit:h,idle_limit:i,idle_poll_interval:j,last_active_time:l}});e.exports=o}),null);
__d("MercuryAssert",["MercuryIDs"],(function(a,b,c,d,e,f){__p&&__p();e.exports={isParticipantID:function(a){if(!b("MercuryIDs").isValid(a))throw new Error("bad_participant_id "+a)},allParticipantIDs:function(a){a.forEach(this.isParticipantID)},isUserParticipantID:function(a){var c=b("MercuryIDs").tokenize(a);if(c.type!="fbid")throw new Error("bad_user_id "+a)},isEmailParticipantID:function(a){var c=b("MercuryIDs").tokenize(a);if(c.type!="email")throw new Error("bad_email_id "+a)},allThreadID:function(a){a.forEach(this.isThreadID)},isThreadID:function(a){if(!b("MercuryIDs").isValid(a))throw new Error("bad_thread_id "+a)}}}),null);
__d("EmojiLikeConstants",["EmojiStaticConfig"],(function(a,b,c,d,e,f){"use strict";a=b("EmojiStaticConfig").sizeMap;c=Object.freeze({XSMALL:"xsmall",SMALL:"small",MEDIUM:"medium",LARGE:"large"});d={dp16:"xsmall",dp32:"small",dp64:"medium",db64:"medium",dp128:"large"};f=Object.freeze({PICKER:"picker",HOT_LIKE:"hot_like"});b=[983040];var g="hot_emoji_source",h="hot_emoji_size",i="emoji_like",j="\ud83d\udc4d",k=[128077];e.exports={FB_THUMBS_UP_EMOJI:b,size:c,sizeMap:a,sizeMapTransfer:d,source:f,SOURCE_TAG_PREFIX:g,TAG_PREFIX_NEW:h,TAG_PREFIX_OLD:i,THUMBS_UP_EMOJI:j,THUMBS_UP_EMOJI_CODES:k}}),null);
__d("MercurySourceType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CHAT_ORCA:"source:chat:orca",CHAT_LIGHT_SPEED:"source:chat:light_speed",CHAT_IPHONE:"source:chat:iphone",CHAT_JABBER:"source:chat:jabber",CHAT_MEEBO:"source:chat:meebo",CHAT_WEB:"source:chat:web",CHAT_TEST:"source:chat:test",CHAT_FORWARD_DIALOG:"source:chat:forward",CHAT:"source:chat",CONTACT_ADD_MUTATION:"source:contact_add:graphql_mutation",CONTACT_ADD_CYMK:"source:contact_add:cymk_suggestion",CUSTOMER_CHAT_PLUGIN:"source:discovery:customer_chat_plugin",EMAIL:"source:email",EVENT_MESSAGE_BLAST:"source:event_message_blast",EVENT_TICKETING:"source:event_ticket",EVENT_REMINDERS:"source:event_reminders",FUNDRAISER_MESSAGE_BLAST:"source:fundraiser_message_blast",GENERIC_ADMIN_TEXT:"source:generic_admin_text",GIGABOXX_API:"source:gigaboxx:api",GIGABOXX_BLAST:"source:gigaboxx:blast",GIGABOXX_EMAIL_REPLY:"source:gigaboxx:emailreply",GIGABOXX_MOBILE:"source:gigaboxx:mobile",GIGABOXX_WAP:"source:gigaboxx:wap",GIGABOXX_WEB:"source:gigaboxx:web",INVITE:"source:invite",LEIA:"source:leia",MESSENGER_WEB:"source:messenger:web",MESSENGER_WEB_SEARCH:"source:messenger:web_search",SAM_UFI:"source:sam:ufi",SHARE_DIALOG:"source:share:dialog",SEND_PLUGIN:"source:sendplugin",SMS:"source:sms",TEST:"source:test",TITAN_WAP:"source:titan:wap",TITAN_M_BASIC:"source:titan:m_basic",TITAN_M_FREE:"source:titan:m_free_basic",TITAN_M_JAPAN:"source:titan:m_japan",TITAN_M_MINI:"source:titan:m_mini",TITAN_M_TOUCH:"source:titan:m_touch",TITAN_M_APP:"source:titan:m_app",TITAN_M_TABLET:"source:titan:m_tablet",TITAN_M_ZERO:"source:titan:m_zero",TITAN_M_TALK:"source:titan:m_talk",TITAN_WEB:"source:titan:web",TITAN_FACEWEB_ANDROID:"source:titan:faceweb_android",TITAN_FACEWEB_BUFFY:"source:titan:faceweb_buffy",TITAN_FACEWEB_IPAD:"source:titan:faceweb_ipad",TITAN_FACEWEB_IPHONE:"source:titan:faceweb_iphone",TITAN_FACEWEB_UNKNOWN:"source:titan:faceweb_unknown",TITAN_API:"source:titan:api",TITAN_API_MOBILE:"source:titan:api_mobile",TITAN_ORCA:"source:titan:orca",TITAN_EMAIL_REPLY:"source:titan:emailreply",MOBILE:"source:mobile",PAGE_PLATFORM_API:"source:page_platform_api",PAGE_UNIFIED_INBOX:"source:page_unified_inbox",UNKNOWN:"source:unknown",WEB:"source:web",HELPCENTER:"source:helpcenter",NEW_SHARE_DIALOG:"source:share:dialog:new",PAID_PROMOTION:"source:paid_promotion",BUFFY_SMS:"source:buffy:sms",WEBRTC_MOBILE:"source:webrtc:mobile",MESSENGER_COMMERCE:"source:messenger:commerce",MESSENGER_BOT:"source:bot",MESSENGER_EMPLOYEE_ONLY_BOT:"source:bot:employee_only",MESSENGER_OMNIM:"source:messenger:omnim",PAGES_PRIVATE_REPLY:"source:pages:private_reply",MESSENGER_FORWARD_DIALOG:"source:messenger:forward",MESSENGER_AD:"source:messenger:ad",MARKETPLACE:"source:marketplace",MARKETPLACE_BOT:"source:marketplace:bot",MESSENGER_LEAD_GEN:"source:messenger:lead_gen",PAGES_MESSAGE_SHORTLINK:"source:pages:message_shortlink",STICKER_SUBSCRIBE:"source:messenger:sticker_subscribe",PHOTO_TAG:"source:messenger:photo_tag",INTERNAL_TEST_PENDING:"source:internal:test_pending",JOB_SEARCH_APPLICATION:"source:job_search:application",MESSENGER_JOINABLE_LINK:"source:messenger:joinable_link",MESSENGER_ADD_WITH_APPROVAL:"source:messenger:add_with_approval",MESSENGER_SMS_BRIDGE_CONVERT:"source:messenger:sms_bridge_conversion",TINCAN_ORCA:"source:tincan:orca",TINCAN_IOS:"source:tincan:ios",TINCAN_UNKNOWN:"source:tincan:unknown",FACEBOOK_GROUPS_CHANNELS:"source:groups:channels",GROUP_COMMERCE:"source:group_commerce",INTERNAL_TOOL:"source:internal:tool",PAGES_PLATFORM:"source:pages:platform",PAGES_RECOMMENDATION:"source:pages:recommendation",PAGES_ORDER_MANAGEMENT:"source:pages:order_management",PAGE_AUTO_RESPONSE:"source:pages:auto_response",PAGES_INVITE:"source:pages:invite",PAGES_CHAT_EXTENSION:"source:pages:chat_extension",PAGES_COMPOSER:"source:pages:composer",SAVED_CHAT_EXTENSION:"source:saved:chat_extension",CREATOR_PAGE_INITIATE_TO_CREATOR_PAGE:"source:pages:creator_page_initiate_to_creator_page",LIVE_VIDEO_CHAT:"source:live_video_chat",GEMSTONE:"source:gemstone",FRIENDING_ADMIN_BUMP:"source:messenger_growth:friending_admin_bump",NEW_MESSENGER_USER_ADMIN_BUMP:"source:messenger_growth:new_messenger_user_admin_bump",EVENT_UPCOMING_BUMP:"source:messenger_growth:event_upcoming_bump",PHOTO_TAG_BUMP:"source:messenger_growth:photo_tag_bump",WALL_POST_BUMP:"source:messenger_growth:wall_post_bump",FRIENDVERSARY_BUMP:"source:messenger_growth:friendversary_bump",CUSTOMIZATION_UPSELL_BUMP:"source:messenger_growth:customization_upsell_bump",MESSENGER_BROADCASTFLOW:"source:messenger:broadcastflow",PAGE_COMMENT_MSG:"source:pages:question_triggered_convo",COMMENT_PIVOT:"source:messenger_growth:comment_pivot",PAGE_HOVERCARD:"source:pages:hovercard",INSTANT_GAMES:"source:instant_games",PAGE_EMAIL_REPLY:"source:pages:email_reply",PAGE_HOME_PAGE_PANEL:"source:page_home_page_panel",GROUPSYNC_MESSENGER_GROUP_CREATE:"source:groupsync:messenger_group_create",GROUPSYNC_SYNC_FROM_FB:"source:groupsync:sync_from_fb",GROUPSYNC_NAMING:"source:groupsync:naming",GROUPSYNC_THREAD_INFO_SYNC_FROM_FB:"source:groupsync:thread_info_sync",WORK_GROUP_SYNCED_CHAT_CREATION:"source:work:groupchat:creation",WORK_GROUP_SYNCED_CHAT_MEMBER_SYNC:"source:work:groupchat:member_sync",WORK_GROUP_SYNCED_CHAT_NAME_SYNC:"source:work:groupchat:name_sync",PAGE_PQI_MESSAGE:"source:pages:pqi_message",PAGE_PLUGIN_MESSAGE:"source:pages:page_plugin_message",WORKPLACE_CHAT_DESKTOP:"source:workchat:desktop",CREATOR_STUDIO:"source:creator_studio"})}),null);
__d("bs_caml_builtin_exceptions",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=["Out_of_memory",0];b=["Sys_error",-1];c=["Failure",-2];d=["Invalid_argument",-3];e=["End_of_file",-4];var g=["