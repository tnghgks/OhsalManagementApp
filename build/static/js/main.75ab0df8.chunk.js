(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(72)},51:function(e,t,n){e.exports=n.p+"static/media/ohsal_logo.d4b79d34.jpg"},52:function(e,t,n){e.exports=n.p+"static/media/backgorund_video.035f2104.mp4"},72:function(e,t,n){"use strict";n.r(t);var a,r,l,c,o,i,u,d,s,m,p,b,h,f,g,x,E=n(0),j=n.n(E),O=n(35),v=n.n(O),y=n(8),w=n(9),k=n(11),z=n(10),B=n(12),C=n(14),F=n(1),S=n(3),A=n(2),M=A.c.header(a||(a=Object(S.a)(["\n\tcolor: white;\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 50px;\n\tdisplay: flex;\n\tjustify-content:space-between;\n\talign-items: center;\n\tbackground-color: rgba(20, 20, 20, 0.8);\n\tz-index: 10;\n"]))),U=A.c.li(r||(r=Object(S.a)(["\n\tdisplay:inline;\n\tmargin-right:30px;\n"]))),_=A.c.img(l||(l=Object(S.a)(["\n\twidth:50px;\n\theight:50px;\n"]))),D=function(){return j.a.createElement(M,null,j.a.createElement(C.b,{to:"/"},j.a.createElement(_,{src:n(51)})),j.a.createElement("ul",null,j.a.createElement(U,null,j.a.createElement(C.b,{to:"/"},"\uba54\uc778\uc73c\ub85c")),j.a.createElement(U,null,j.a.createElement(C.b,{to:"/currentEvent"},"\uc9c4\ud589\uc911\uc778 \uc774\ubca4\ud2b8")),j.a.createElement(U,null,j.a.createElement(C.b,{to:"/battle"},"\ub0b4\uc804"))))},H=A.c.div(c||(c=Object(S.a)(["\n\tposition:absolute;\n\ttop:-50px\n\tleft:0px;\n\twidth:100%;\n\theight:calc(100vh - 50px);\n\toverflow:hidden;\n\tbackground-color:background-color:rgba(20, 20, 20, 1);\n\tz-index:2;\n"]))),I=A.c.section(o||(o=Object(S.a)(["\n\tposition:absolute;\n\tbottom:50px;\n\tleft:50px;\n\tz-index:3;\n\tmargin-left:50px;\n"]))),J=A.c.div(i||(i=Object(S.a)(["\n\tpadding-left:15px;\n\tborder-left:5px solid #fff;\n"]))),L=A.c.h1(u||(u=Object(S.a)(["\n\tfont-size:45px;\n\tmargin-bottom:15px;\n"]))),N=A.c.h2(d||(d=Object(S.a)(["\n\tfont-size:16px;\n"]))),R=function(e){e.error,e.loading;return j.a.createElement(H,null,j.a.createElement("video",{autoplay:"autoplay",muted:"muted",loop:"true",style:{position:"absolute",top:0,left:0,height:"100%",overflow:"hidden",opacity:.3,z_index:1}},j.a.createElement("source",{src:n(52),type:"video/mp4"})),j.a.createElement(I,null,j.a.createElement(J,null,j.a.createElement(L,null,"O H S A L"),j.a.createElement(N,null,"\ubc30\ud2c0\uadf8\ub77c\uc6b4\ub4dc \ub514\uc2a4\ucf54\ub4dc \ucc44\ub110"))))},T=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(k.a)(this,Object(z.a)(t).call(this,e))).state={error:null,loading:!0},n}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.error,n=e.loading;return j.a.createElement(R,{error:t,loading:n})}}]),t}(j.a.Component),q=n(22),G=n.n(q),K=n(39),P=A.c.div(s||(s=Object(S.a)(["\n\twidth:100%;\n\theight:50px;\n"]))),Q=A.c.div(m||(m=Object(S.a)(["\n\tdisplay:flex;\n\tjustify-content:space-between;\n\talign-items:center;\n\tcolor:#000;\n\tbackground-color:white;\n\tbox-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),V=A.c.div(p||(p=Object(S.a)(["\n\tpadding:10px;\n"]))),W=function(e){var t=e.title,n=e.createAt,a=e.createBy;return j.a.createElement(P,null,j.a.createElement(Q,null,j.a.createElement(V,null,t),j.a.createElement(V,null,n),j.a.createElement(V,null,a)))},X=A.c.div(b||(b=Object(S.a)(["\n\tdisplay:flex;\n\twidth:100%;\n\theight:calc(100vh - 50px);\n\tbackground-color:#FFF;\n"]))),Y=A.c.div(h||(h=Object(S.a)(["\n\twidth:50%;\n\theight:100%;\n\tpadding:15px;\n\tborder:5px solid #fff;\n\tz-index:5;\n"]))),Z=function(e){var t=e.result;e.error,e.loading;return j.a.createElement(X,null,j.a.createElement(Y,null,t&&t.map(function(e){return j.a.createElement(W,{title:e.title,createAt:e.createAt,createBy:e.createBy})})),j.a.createElement(Y,null,"ss"))},$=n(19),ee=n.n($),te=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(k.a)(this,Object(z.a)(t).call(this,e))).state={result:null,error:null,loading:!0},n}return Object(B.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=Object(K.a)(G.a.mark(function e(){var t,n;return G.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.a.get("/getBattle");case 2:t=e.sent,n=t.data,this.setState({result:n}),console.log(this.state.result);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return j.a.createElement(Z,{result:t,error:n,loading:a})}}]),t}(j.a.Component),ne=A.c.div(f||(f=Object(S.a)(["\n\twidth:100%;\n\theight:100%;\n\tbackground-color:red;\n"]))),ae=function(e){var t=e.name;e.error,e.loading;return j.a.createElement(ne,null,t)},re=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(k.a)(this,Object(z.a)(t).call(this,e))).state={name:null,error:null,loading:!0},n}return Object(B.a)(t,e),Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/getUser").then(function(e){return e.json()}).then(function(t){return e.setState({name:t.name})})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.error,a=e.loading;return j.a.createElement(ae,{name:t,error:n,loading:a})}}]),t}(j.a.Component),le=A.c.div(g||(g=Object(S.a)(["\n\twidth:100%;\n\theight:100%;\n\tbackground-color:red;\n"]))),ce=function(e){e.error,e.loading;return j.a.createElement(le,null)},oe=function(e){function t(e){var n;return Object(y.a)(this,t),(n=Object(k.a)(this,Object(z.a)(t).call(this,e))).state={error:null,loading:!0},n}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){var e=this.state,t=e.error,n=e.loading;return j.a.createElement(ce,{error:t,loading:n})}}]),t}(j.a.Component),ie=function(){return j.a.createElement(C.a,null,j.a.createElement(j.a.Fragment,null,j.a.createElement(D,null),j.a.createElement(F.d,null,j.a.createElement(F.b,{path:"/",exact:!0,component:T}),j.a.createElement(F.b,{path:"/battle",exact:!0,component:te}),j.a.createElement(F.b,{path:"/currentEvent",exact:!0,component:re}),j.a.createElement(F.b,{path:"/randomTeam",exact:!0,component:oe}),j.a.createElement(F.a,{from:"*",to:"/"}))))},ue=n(40),de=Object(A.a)(x||(x=Object(S.a)(["\n\t",";\n\ta {\n\t\ttext-decoration:none;\n\t\tcolor:inherit;\n\t}\n\t*{\n\t\tbox-sizing:border-box;\n\t}\n\tbody {\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20, 20, 20, 1);\n        color:white;\n        padding-top:50px;\n\t}\n"])),ue.a),se=function(e){function t(){return Object(y.a)(this,t),Object(k.a)(this,Object(z.a)(t).apply(this,arguments))}return Object(B.a)(t,e),Object(w.a)(t,[{key:"render",value:function(){return j.a.createElement(j.a.Fragment,null,j.a.createElement(ie,null),j.a.createElement(de,null))}}]),t}(j.a.Component);v.a.render(j.a.createElement(se,null),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.75ab0df8.chunk.js.map