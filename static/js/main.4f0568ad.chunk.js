(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e){e.exports={desayuno:{"caf\xe9 americano":5,"caf\xe9 con leche":7,"Sandwich de jam\xf3n y queso":10,"Jugo natural":7},almuerzo:{"hamburguesa de pollo sencilla":10,"hamburguesa de pollo doble":15,"hamburguesa de res sencilla":10,"hamburguesa de res doble":15,"hamburguesa vegetariana sencilla":10,"hamburguesa vegetariana doble":15,papas:5,"onion rings":5,queso:1,huevo:1,"agua 500ml":5,"agua 750":8,"refresco 500ml":7,"reresco 750ml":10}}},23:function(e,a,t){e.exports=t(50)},28:function(e,a,t){},30:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(10),l=t.n(o),s=(t(28),t(14)),c=t(5),i=t(6),u=t(8),m=t(7),d=t(9),h=(t(30),t(12)),g=t.n(h),p=t(4),b=(n.Component,t(18)),f=function(e){return r.a.createElement("div",null,e.meal.map(function(e,a){return r.a.createElement("div",{key:a},r.a.createElement(p.b,{className:"meal-buttons",size:"lg"},Object.keys(e),": $",Object.values(e)))}))},E=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).desayunobtn=function(){var e=[];console.log(e);var a=b.desayuno;for(var n in a){var r=a[n],o=Object(s.a)({},n,r);e.push(o)}t.setState({meal:e})},t.almuerzobtn=function(){var e=[],a=b.almuerzo;for(var n in a){var r=a[n],o=Object(s.a)({},n,r);e.push(o)}t.setState({meal:e})},t.state={meal:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.e,null,r.a.createElement(p.d,{className:"col-s-6 col-md-6",placeholder:"Nombre del cliente"}),r.a.createElement(p.f,null,r.a.createElement("i",{class:"fas fa-check check"}))),r.a.createElement("div",null,r.a.createElement(p.b,{color:"primary",onClick:this.desayunobtn,className:"almuerzo-desayuno-btn",size:"lg"},"Desayuno"),r.a.createElement(p.b,{color:"secondary",onClick:this.almuerzobtn,className:"almuerzo-desayuno-btn",size:"lg"},"Almuerzo y cena")),r.a.createElement(f,{meal:this.state.meal}),r.a.createElement(p.b,{color:"secondary",className:"logout-btn",onClick:this.props.logout,size:"lg"},"Cerrar sesi\xf3n"))}}]),a}(n.Component),v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).toggle=function(){t.setState({modal:!t.state.modal})},console.log(e),t.state={modal:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("form",{center:!0,className:"col-md-8 col-s-4 form-align"},r.a.createElement(p.c,null,r.a.createElement(p.g,{for:"exampleEmail",hidden:!0},"Email"),r.a.createElement(p.d,{type:"email",name:"email",id:"exampleEmail",placeholder:"Email",onChange:this.props.handleChange})),r.a.createElement(p.c,null,r.a.createElement(p.g,{for:"examplePassword",hidden:!0},"Password"),r.a.createElement(p.d,{type:"password",name:"password",id:"examplePassword",placeholder:"Password",onChange:this.props.handleChange})),r.a.createElement(p.b,{onClick:this.props.login,size:"lg"},"Iniciar Sesi\xf3n"),r.a.createElement("div",null,r.a.createElement(p.a,{className:"badge-link",href:"#",onClick:this.toggle,color:"white"},"Olvid\xe9 la contrase\xf1a"),r.a.createElement(p.h,{isOpen:this.state.modal,modalTransition:{timeout:700},backdropTransition:{timeout:1300},toggle:this.toggle,className:this.props.className},r.a.createElement(p.k,{toggle:this.toggle},"Restaurar contrase\xf1a"),r.a.createElement(p.i,null,r.a.createElement("p",null,"Escribe el correo para recibir la restauraci\xf3n de contrase\xf1a"),r.a.createElement(p.d,{type:"email",name:"email",id:"EmailRest",placeholder:"Email"})),r.a.createElement(p.j,null,r.a.createElement(p.b,{color:"primary",onClick:this.props.restaurarPassword,size:"lg"},"Enviar correo")," ",r.a.createElement(p.b,{color:"secondary",onClick:this.toggle,size:"lg"},"Cancelar"))))))}}]),a}(n.Component),w=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(u.a)(this,Object(m.a)(a).call(this))).handleChange=function(a){e.setState(Object(s.a)({},a.target.name,a.target.value))},e.login=function(a){a.preventDefault(),g.a.auth().signInWithEmailAndPassword(e.state.email,e.state.password).then(function(e){console.log("el usuario ".concat(e," ha iniciado sesi\xf3n"))}).catch(function(e){alert(e)})},e.handleLogout=function(){g.a.auth().signOut().then(function(e){return console.log("".concat(e.user.email," ha salido"))}).catch(function(e){return console.log("Error ".concat(e.code,": ").concat(e.message))})},e.restaurarPassword=function(){g.a.auth().sendPasswordResetEmail(e.state.email).then(function(){return alert("se ha enviado el correo")}).catch(function(e){console.log(e)})},e.renderLoginButton=function(){return e.state.user?r.a.createElement("div",{className:"container"},r.a.createElement(E,{logout:e.handleLogout})):r.a.createElement(v,{handleChange:e.handleChange,login:e.login,restaurarPassword:e.restaurarPassword,state:e.state.user})},e.state={email:"",password:"",user:null},e}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;g.a.auth().onAuthStateChanged(function(a){e.setState({user:a})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Burger Queen")),r.a.createElement("div",{className:"App-intro"},this.renderLoginButton()))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(48);g.a.initializeApp({apiKey:"AIzaSyAjovfnX7-siC6oHVe-b1qsCSHEwR_g3Cs",authDomain:"burger-queen-35f47.firebaseapp.com",databaseURL:"https://burger-queen-35f47.firebaseio.com",projectId:"burger-queen-35f47",storageBucket:"burger-queen-35f47.appspot.com",messagingSenderId:"611708104239"}),l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.4f0568ad.chunk.js.map