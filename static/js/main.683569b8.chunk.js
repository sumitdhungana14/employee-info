(this["webpackJsonpemployee-info"]=this["webpackJsonpemployee-info"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(14),a(1)),l=a(2),o=a(4),m=a(3),u=a(5),p=(a(15),function(e){var t=e.firstName,a=e.lastName,n=e.profileImage,s=e.onClick,i=e.id;return r.a.createElement("div",{className:"list-item",onClick:function(){return s(i)}},r.a.createElement("img",{src:n,alt:"employee"}),r.a.createElement("span",null,t," ",a))}),d=function(e){var t=e.employees,a=e.onClick,n=t.map((function(e,t){return r.a.createElement(p,{firstName:e.firstName,lastName:e.lastName,profileImage:e.profileImage,key:e.id,id:e.id,onClick:a})}));return r.a.createElement("div",{className:"list-container"},n)},f=function(e){var t=e.requiresBackButton,a=e.onBackClick,n=e.title;return r.a.createElement("div",{className:"header"},t?r.a.createElement("button",{onClick:function(){return a()}},"Back"):"",r.a.createElement("span",{style:{marginLeft:e.marginLeft}},n))},h=a(8),E=function(e){return function(t){var a=t.onBackClick,n=t.requiresBackButton,s=Object(h.a)(t,["onBackClick","requiresBackButton"]);return n?r.a.createElement(e,Object.assign({},s,{requiresBackButton:n,onBackClick:a})):r.a.createElement(e,Object.assign({},s,{requiresBackButton:n,marginLeft:"700px"}))}},k=E(f),y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,{onBackClick:this.props.onBackClick,requiresBackButton:!0,title:"Employee Info"}),r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"image-holder"},r.a.createElement("img",{src:this.props.currentEmployee.profileImage,alt:"display-profile"})),r.a.createElement("div",{className:"info-holder"},r.a.createElement("div",{className:"first-name"},"Name : ",r.a.createElement("span",null,this.props.currentEmployee.firstName," ",this.props.currentEmployee.lastName)),r.a.createElement("div",{className:"email"},"Email : ",r.a.createElement("span",null,this.props.currentEmployee.email," ")),r.a.createElement("div",{className:"phone"},"Phone : ",r.a.createElement("span",null,this.props.currentEmployee.phone)),r.a.createElement("div",{className:"address"},"Address : ",r.a.createElement("span",null,this.props.currentEmployee.address.state," , ",this.props.currentEmployee.address.country)))))}}]),t}(r.a.Component),v=function(){return r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading...")))},B=E(f),N=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).showEmployeeInfo=function(t){e.setState({isListDisplayed:!e.state.isListDisplayed,currentID:t-1})},e.onBackClick=function(){e.setState({isListDisplayed:!e.state.isListDisplayed})},e.state={employees:[],isListDisplayed:!0,currentID:0},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mock-io.herokuapp.com/users").then((function(e){return e.json()})).then((function(e){return e.slice(0,20)})).then((function(t){return e.setState({employees:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.state.isListDisplayed?r.a.createElement(B,{requiresBackButton:!1,title:"Employee List"}):"",this.state.isListDisplayed?this.state.employees.length?r.a.createElement(d,{employees:this.state.employees,onClick:this.showEmployeeInfo}):r.a.createElement(v,null):r.a.createElement(y,{currentEmployee:this.state.employees[this.state.currentID],onBackClick:this.onBackClick}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.683569b8.chunk.js.map