(()=>{var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var r in s)e.o(s,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:s[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};(()=>{"use strict";const t=flarum.core.compat["forum/app"];var s=e.n(t);const r=flarum.core.compat["common/extend"],o=flarum.core.compat["forum/components/PostStream"];var n=e.n(o);function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}const i=flarum.core.compat["common/Component"];var c=e.n(i);const l=flarum.core.compat["common/components/Link"];var u=e.n(l);const p=flarum.core.compat["common/components/Tooltip"];var d=e.n(p);const v=flarum.core.compat["common/helpers/avatar"];var f=e.n(v),h=function(e){function t(){for(var t,s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).discussion=void 0,t}var r,o;o=e,(r=t).prototype=Object.create(o.prototype),r.prototype.constructor=r,a(r,o);var n=t.prototype;return n.oninit=function(t){e.prototype.oninit.call(this,t),this.discussion=this.attrs.discussion},n.view=function(){var e=this.discussion,t=e.posts(),r=e.attribute("participantCount"),o=null==t?void 0:t[t.length-1],n=new Set;return t.forEach((function(e){var t=e.user();t&&n.add(t)})),m("[",null,m("ul",{className:"DiscussionOverview-list"},m("li",{className:"created-at"},m("h4",null,s().translator.trans("datlechin-discussion-overview.forum.created")),m("div",{className:"time"},dayjs(e.createdAt()).fromNow())),m("li",{className:"last-reply"},m("h4",null,s().translator.trans("datlechin-discussion-overview.forum.last_reply")),m(u(),{href:s().route.post(o)},m("div",{className:"time"},f()(o.user()),dayjs(e.lastPostedAt()).fromNow()))),m("li",{className:"replies"},m("span",{className:"number"},e.replyCount()),m("h4",null,s().translator.trans("datlechin-discussion-overview.forum.replies"))),s().initializers.has("michaelbelgium-discussion-views")?m("li",{className:"views"},m("span",{className:"number"},e.viewCount()),m("h4",null,s().translator.trans("datlechin-discussion-overview.forum.views"))):null,m("li",{className:"users"},m("span",{className:"number"},r),m("h4",null,s().translator.trans("datlechin-discussion-overview.forum.users"))),m("li",{className:"likes"},m("span",{className:"number"},t[0].attribute("likesCount")||0),m("h4",null,s().translator.trans("datlechin-discussion-overview.forum.likes"))),m("li",{className:"avatars"},m("div",{className:"user-list"},Array.from(n).map((function(e){return m(d(),{key:e.id(),text:e.attribute("username")},m(u(),{href:s().route.user(e)},f()(e)))}))))))},t}(c());s().initializers.add("datlechin/flarum-discussion-overview",(function(){(0,r.extend)(n().prototype,"oncreate",(function(){var e=document.querySelector(".CommentPost div");if(e){var t=this.discussion,s=document.createElement("div");s.className="DiscussionOverview",m.mount(e.appendChild(s),{view:function(){return m(h,{discussion:t})}})}}))}))})(),module.exports={}})();
//# sourceMappingURL=forum.js.map