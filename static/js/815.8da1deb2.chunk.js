"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[815],{5815:function(t,s,e){e.r(s),e.d(s,{default:function(){return B},withRouter:function(){return R}});var n=e(5671),r=e(3144),o=e(136),a=e(3668),i=e(8683),u=e(2791),l="ProfileInfo_avaBlock__mzsHR",c=e(493),p=e(885),d=e(184),f=function(t){var s=(0,u.useState)(!1),e=(0,p.Z)(s,2),n=e[0],r=e[1],o=(0,u.useState)(t.status),a=(0,p.Z)(o,2),i=a[0],l=a[1];(0,u.useEffect)((function(){l(t.status)}),[t.status]);return(0,d.jsxs)("div",{children:[!n&&(0,d.jsx)("div",{children:(0,d.jsxs)("span",{onDoubleClick:function(){r(!0)},children:[t.status||"-----"," "]})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("input",{onChange:function(t){l(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(i)},value:i})})]})},h=function(t){return t.profile?(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:l,children:(0,d.jsx)("img",{src:"https://mgprojectcsgo.ru/templates/default/img/g_logog.png"})}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("img",{src:t.profile.photos.large}),(0,d.jsxs)("div",{children:[" ",t.profile.fullName]}),(0,d.jsx)(f,{status:t.status,updateStatus:t.updateStatus})]})]}):(0,d.jsx)(c.Z,{})},m=e(6070),x="MyPosts_postsBlock__jSZdM",j="MyPosts_posts__ldHUt",v="MyPosts_button__jOJN8",g="MyPosts_post__pnAY6",P="Post_item__oSg3x",_=function(t){return(0,d.jsxs)("div",{className:P,children:[(0,d.jsx)("img",{src:"https://www.easy-profile.com/support.html?controller=attachment&task=download&tmpl=component&id=2883"}),t.message," ",t.Like]})},S=e(5705),y=e(132),k=y.Ry().shape({newPostText:y.Z_().min(1,"Too Short!").max(100,"Too Long!").required("Required")}),w=u.memo((function(t){var s=t.profilePage.posts.map((function(t){return(0,d.jsx)(_,{message:t.message,Like:t.like})}));return(0,d.jsxs)("div",{className:x,children:[(0,d.jsx)("h2",{children:"My posts "}),(0,d.jsx)("div",{children:(0,d.jsx)(Z,{addPost:t.addPost})}),(0,d.jsx)("div",{className:j,children:s})]})})),Z=function(t){return(0,d.jsx)(S.J9,{initialValues:{newPostText:""},validationSchema:k,onSubmit:function(s,e){var n=e.resetForm;!function(s){t.addPost(s)}(s.newPostText),n({values:""})},children:function(){return(0,d.jsxs)(S.l0,{children:[(0,d.jsxs)("div",{className:g,children:[(0,d.jsx)(S.gN,{component:"textarea",name:"newPostText",placeholder:"Enter your post",validate:k}),(0,d.jsx)(S.Bc,{name:"newPostText",component:"div"})]}),(0,d.jsx)("div",{className:v,children:(0,d.jsx)("button",{type:"submit",children:" New Post "})})]})}})},N=w,T=e(6434),b=e(7781),C=e(1548),M=(0,b.qC)((0,T.$j)((function(t){return{profilePage:t.profilePage}}),(function(t){return{addPost:function(s){t((0,m.Wl)(s))}}})),C.S)(N),U=function(t){return(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,d.jsx)(M,{})]})},I=e(6871);function R(t){return function(s){var e={params:(0,I.UO)()};return(0,d.jsx)(t,(0,i.Z)((0,i.Z)({},s),{},{match:e}))}}var q=function(t){(0,o.Z)(e,t);var s=(0,a.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,d.jsx)(U,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(u.Component),B=(0,b.qC)((0,T.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId}}),{getUserProfile:m.et,getStatus:m.lR,updateStatus:m.Nf}),R,C.S)(q)}}]);
//# sourceMappingURL=815.8da1deb2.chunk.js.map