(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,a,t){e.exports=t(34)},25:function(e,a,t){},31:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(18),s=t.n(l),c=(t(25),t(7)),i=t(8),m=t(10),o=t(9),d=t(1),u=t(6),p=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"navbar navbar-expand-md navbar-dark bg-light",id:"navbar"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement(u.b,{to:"/portfolio"},n.a.createElement("img",{className:"logo rounded-circle",src:this.props.user.logo,alt:"logo"})),n.a.createElement("h1",{className:"navbar-brand ml-3",style:{color:"white"}},this.props.user.name)),n.a.createElement("ul",{className:"navbar-nav w-100 float-right"},n.a.createElement("li",{className:"navbar-item"},n.a.createElement(u.b,{className:" col-2 nav-link lin",to:"/portfolio/projects"},"Projects")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(u.b,{className:"nav-link lin",to:"/portfolio/resume"},"Resume")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(u.b,{className:"nav-link lin",to:"/portfolio/videos"},"Videos")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(u.b,{className:"nav-link lin",to:"/portfolio/about"},"About")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(u.b,{className:"nav-link lin",to:"/portfolio/contact"},"Contact Us"))))}}]),t}(r.Component),E=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"jumbotron p-4",id:"jumbo"},n.a.createElement("h1",{className:"col-12"},"Sumit Kumar"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"sumit col-md-4 col-sm-12 offset-md-1 shadow-lg p-3 mb-5 rounded"},n.a.createElement("img",{className:"w-100",id:"sumit",src:this.props.user.image,alt:"sumit"})),n.a.createElement("div",{className:"info col-md-6 offset-md-1 col-sm-12  "},n.a.createElement("h3",{className:"lead"},"A front-end web developer with combine patience, determination and persistence to troubleshoot client issues. Also,I love to Dance."),n.a.createElement("div",{className:"row mt-3"},n.a.createElement("img",{className:"col-12 w-100",src:this.props.user.image2,alt:"basic"}))))),n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Featured projects"),n.a.createElement("hr",null),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-md-7 col-sm-12 shadow-lg p-3 mb-5 rounded"},n.a.createElement("img",{className:"w-100",src:this.props.projects[0].image,alt:"ourblog"})),n.a.createElement("div",{className:"col-md-4 col-sm-12 offset-1 col-sm-12"},n.a.createElement("h2",{className:"display-4 text-center",style:{color:"blue"}},this.props.projects[0].name),n.a.createElement("hr",null),n.a.createElement("h5",{className:"lead"},this.props.projects[0].description),n.a.createElement("strong",null,"Technology used:"),n.a.createElement("ul",null,this.props.projects[0].tech.map((function(a){return n.a.createElement("li",{key:e.props.projects[0].tech.indexOf(a)},a)}))))),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},n.a.createElement("h2",{className:"ml-3"},"Dance")),n.a.createElement("hr",null),n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-md-4 col-sm-12"},n.a.createElement("h2",{className:"display-4 text-center",style:{color:"blue"}},this.props.videos[0].name),n.a.createElement("hr",null),n.a.createElement("h5",{className:"lead"},"A lyrical dance performace by me on one of the best song of ",this.props.videos[0].artist,"."),n.a.createElement("ul",null,n.a.createElement("li",null,"Dance-style: Lyrical"),n.a.createElement("li",null,"Song: ",this.props.videos[0].name," by ",this.props.videos[0].artist),n.a.createElement("li",null,"Performed by: Sumit Kumar"))),n.a.createElement("div",{className:"col-md-7 offset-1 col-sm-12 shadow-lg p-3 mb-5 rounded"},n.a.createElement("video",{className:"w-100",controls:!0},n.a.createElement("source",{src:this.props.videos[0].video,type:"video/mp4"}),n.a.createElement("source",{src:this.props.videos[0].video,type:"video/ogg"}))))))}}]),t}(r.Component),h=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"footer p-5"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-4"},n.a.createElement("h1",null,"Sumit Kumar")),n.a.createElement("div",{className:"col-5 offset-3"},n.a.createElement("div",{className:"row mb-2"},n.a.createElement("a",{href:"https://github.com/Sumit3107",target:"_blank"},n.a.createElement("i",{className:"fa fa-github ","aria-hidden":"true"}),n.a.createElement("span",{className:"ml-2"},"Github"))),n.a.createElement("div",{className:"row mb-2"},n.a.createElement("a",{href:"https://www.linkedin.com/in/sumit-kumar-938326148",target:"_blank"},n.a.createElement("i",{className:"fa fa-linkedin ","aria-hidden":"true"}),n.a.createElement("span",{className:"ml-2"},"Linkdein"))),n.a.createElement("div",{className:"row mb-2"},n.a.createElement("a",{href:"https://instagram.com/roy.sumit31?igshid=1l8cmlxx4svca",target:"_blank"},n.a.createElement("i",{className:"fa fa-instagram ","aria-hidden":"true"}),n.a.createElement("span",{className:"ml-2"},"Instagram"))))))),n.a.createElement("div",{id:"copy"},n.a.createElement("center",null,n.a.createElement("i",{className:"fa fa-copyright"}),n.a.createElement("span",{className:"ml-1"},"2020. All rights reserved."))))}}]),t}(r.Component),v=[{id:0,name:"Our Blog",image:"/images/ourblog.png",description:"A simple blog including different kinds of cupcakes, icecreams and cakes.",tech:["HTML","CSS","Javascript"]},{id:1,name:"Time Tracker",image:"/images/timetracker.png",description:"Front End of a time tracker website made using React.",tech:["HTML","CSS","Javascript","React"]},{id:2,name:"Tour",image:"/images/timetracker.png",description:"Front End of a Tour website.",tech:["HTML","CSS","SASS"]}],b=[{id:0,name:"Dil",video:"/videos/diltobaccha.mp4",artist:"Rahat Fateh Ali Khan"},{id:1,name:"Ek Tarfa",video:"/videos/ektarfa.mp4",artist:"Darshan Raval"}],f=(t(31),{name:"Sumit Kumar",description:"",image:"/images/sumit.jpg",logo:"/images/logo.jpg",image2:"/images/basic.jpg"}),g=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=a.call(this,e)).state={projects:v,videos:b,user:f},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(p,{user:this.state.user}),n.a.createElement(d.d,null,n.a.createElement(d.b,{exact:!0,path:"/portfolio",render:function(a){return n.a.createElement(E,Object.assign({projects:e.state.projects,videos:e.state.videos,user:e.state.user},a))}}),n.a.createElement(d.a,{from:"/",to:"/portfolio"})),n.a.createElement(h,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(32),t(33);s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u.a,null,n.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.41f05d73.chunk.js.map