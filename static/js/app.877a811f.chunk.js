(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return fe}));var o=n(0),a=n.n(o),r=n(472),i=n(460),c=n(465),l=n(12),s=n(13),u=n(26),d=n(84),f=n(98),b=n(35),j=n(459),h=n(10),y=l.default.create({heading1:{fontSize:20,fontFamily:"RobotoMono_500Medium",padding:4,alignSelf:"center"},heading2:{fontSize:20,fontFamily:"RobotoMono_700Bold",padding:4},droidSafeArea:{flex:1,paddingTop:"android"===h.default.OS?50:0,backgroundColor:"#F5F8F3"}}),x=n(7),p=n.n(x),O=n(15),m=n.n(O),g=n(295),S=n(296),C=n(40),R=n(16);function v(){var e=Object(o.useState)(null),t=p()(e,2),n=t[0],a=t[1];return Object(R.jsxs)(s.default,{style:{height:28,backgroundColor:"thistle",flexDirection:"row",justifyContent:"center"},children:[Object(R.jsx)(d.default,{style:M.button,onPress:function(){var e;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(g.openBrowserAsync("https://example.com"));case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),null,null,null,Promise)},children:Object(R.jsx)(u.default,{style:M.text,children:"Terms of Service "})}),Object(R.jsx)(d.default,{style:M.button,onPress:function(){var e;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(S.openURL("https://example.com"));case 2:e=t.sent,a(e);case 4:case"end":return t.stop()}}),null,null,null,Promise)},children:Object(R.jsx)(u.default,{style:M.text,children:"Privacy Policy"})}),Object(R.jsx)(u.default,{children:n&&" "})]})}var M=l.default.create({button:{alignItems:"center",justifyContent:"center",paddingVertical:4,paddingHorizontal:4,borderRadius:4,elevation:3},text:{fontSize:14,lineHeight:14,letterSpacing:.25},container:{flex:1,alignItems:"center",justifyContent:"center",paddingTop:C.default.statusBarHeight,backgroundColor:"#ecf0f1"}}),_=[{id:1,name:"Luke Skywalker",birth_year:"19BBY"},{id:2,name:"C-3PO",birth_year:"112BBY"},{id:3,name:"R2-D2",birth_year:"33BBY"},{id:4,name:"Darth Vader",birth_year:"41.9BBY"},{id:5,name:"Leia Organa",birth_year:"19BBY"}],B=function(){var e=Object(b.useNavigation)();return Object(R.jsxs)(j.SafeAreaView,{style:{flex:1},children:[Object(R.jsxs)(s.default,{style:y.droidSafeArea,contentContainerStyle:{flexGrow:1},children:[Object(R.jsx)(u.default,{style:y.heading1,children:"Contacts "}),Object(R.jsx)(f.default,{data:_,renderItem:function(t){var n=t.item;return Object(R.jsxs)(d.default,{onPress:function(){return e.navigate("Details",{name:n.name,birthYear:n.birth_year})},children:[Object(R.jsx)(u.default,{style:{fontSize:18,paddingHorizontal:12,paddingVertical:12},children:n.name}),Object(R.jsx)(s.default,{style:{borderWidth:l.default.hairlineWidth,borderColor:"#ccc"}})]})}}),Object(R.jsx)(d.default,{onPress:function(){return e.navigate("Settings")},style:{padding:8,borderWidth:1,borderRadius:4,borderColor:"red",margin:12,alignItems:"center"},children:Object(R.jsx)(u.default,{style:{fontSize:16,fontWeight:"600"},children:"Go to Settings screen"})})]}),Object(R.jsx)(v,{})]})},A=n(52),w=function(){var e=Object(b.useRoute)().params,t=e.name,n=e.birthYear;return Object(R.jsxs)(A.default,{style:y.droidSafeArea,contentContainerStyle:{flexGrow:1},children:[Object(R.jsx)(u.default,{style:y.heading1,children:"Contact Details"}),Object(R.jsxs)(s.default,{style:{flex:1,backgroundColor:"#FBEEC6",paddingTop:12,paddingHorizontal:10},children:[Object(R.jsx)(u.default,{style:{fontSize:18,paddingBottom:24},children:"This is the Details screen."}),Object(R.jsxs)(u.default,{style:{fontSize:18,paddingBottom:12},children:["Name: ",t]}),Object(R.jsxs)(u.default,{style:{fontSize:18},children:["Birth Year: ",n]})]})]})},D=Object(i.default)(),I=function(){return Object(R.jsxs)(D.Navigator,{children:[Object(R.jsx)(D.Screen,{name:"Contact Screen",options:{headerShown:!1},component:B}),Object(R.jsx)(D.Screen,{name:"Details",options:{headerShown:!1},component:w})]})},z=n(3),F=n.n(z),k=n(4),E=n.n(k),L=n(5),P=n.n(L),N=n(8),T=n.n(N),G=n(2),H=n.n(G),W=n(96),Y=n(62),V=n(127),U=function(){return Object(R.jsx)(s.default,{style:{height:0}})},J=n(210);function K(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=H()(e);if(t){var a=H()(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return T()(this,n)}}var q={RobotoMono_500Medium:Y.RobotoMono_500Medium,RobotoMono_700Bold:Y.RobotoMono_700Bold,Creepster_400Regular:V.Creepster_400Regular},Q=function(e){P()(n,e);var t=K(n);function n(){var e;F()(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={fontsLoaded:!1},e}return E()(n,[{key:"_loadFontsAsync",value:function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.awrap(J.loadAsync(q));case 2:this.setState({fontsLoaded:!0});case 3:case"end":return e.stop()}}),null,this,null,Promise)}},{key:"componentDidMount",value:function(){this._loadFontsAsync()}},{key:"render",value:function(){return this.state.fontsLoaded?Object(R.jsxs)(W.default,{style:{flex:1},children:[Object(R.jsx)(U,{}),Object(R.jsxs)(A.default,{style:y.droidSafeArea,contentContainerStyle:{flex:10},children:[Object(R.jsx)(u.default,{style:y.heading1,children:"Profile"}),Object(R.jsxs)(s.default,{style:X.container,children:[Object(R.jsx)(u.default,{style:X.copy,children:"This is the Profile screen."}),Object(R.jsx)(u.default,{style:[X.copy,{fontSize:36,fontFamily:"Creepster_400Regular"}],children:"I'm So Sorry"}),Object(R.jsx)(u.default,{style:X.copy,children:"Maybe next time things will go better."})]})]}),Object(R.jsx)(v,{})]}):null}}]),n}(a.a.Component),X=l.default.create({container:{flex:1,height:"100%",backgroundColor:"#F2EFC9",alignItems:"center",justifyContent:"center"},copy:{color:"black",fontSize:18,paddingVertical:10,fontFamily:"RobotoMono_500Medium"}}),Z=n(77),$=n(176),ee=function(){var e=Object(o.useState)(!1),t=p()(e,2),n=t[0],a=t[1],r=Object(Y.useFonts)({RobotoMono_500Medium:Y.RobotoMono_500Medium,RobotoMono_700Bold:Y.RobotoMono_700Bold});return p()(r,1)[0]?Object(R.jsxs)(W.default,{style:{flex:1},children:[Object(R.jsx)(A.default,{style:y.droidSafeArea,contentContainerStyle:{flexGrow:1},children:Object(R.jsxs)(s.default,{style:te.container,children:[Object(R.jsx)(u.default,{style:y.heading1,children:"Settings "}),Object(R.jsxs)(s.default,{style:te.fieldset,children:[Object(R.jsx)(u.default,{style:y.heading2,children:"Appearance "}),Object(R.jsx)(Z.default,{style:te.buttons,title:"Display Name",accessibilityLabel:"SChange the display name that is visible to contacts you authorize."}),Object(R.jsx)(Z.default,{style:te.buttons,title:"Icon",accessibilityLabel:"Change the icon image that is visible to contacts you authorize."}),Object(R.jsx)(u.default,{style:te.labels,children:"Enable Dark Mode: "}),Object(R.jsx)($.default,{trackColor:{false:"#767577",true:"#81b0ff"},thumbColor:n?"#f5dd4b":"#f4f3f4",onValueChange:function(){return a((function(e){return!e}))},value:n})]}),Object(R.jsxs)(s.default,{style:te.fieldset,children:[Object(R.jsx)(u.default,{style:y.heading2,children:"Security"}),Object(R.jsx)(Z.default,{style:te.buttons,title:"Email Address",accessibilityLabel:"Change the display name that is visible to contacts you authorize. "}),Object(R.jsx)(Z.default,{style:te.buttons,title:"Secret Key",accessibilityLabel:"Change the secret key used to secure your account. "}),Object(R.jsx)(Z.default,{style:te.buttons,title:"Password",accessibilityLabel:"Change the password used to secure your account."})]}),Object(R.jsxs)(s.default,{style:te.fieldset,children:[Object(R.jsx)(u.default,{style:y.heading2,children:"General "}),Object(R.jsx)(u.default,{style:te.labels,children:"You are logged in. "}),Object(R.jsx)(Z.default,{title:"Sign Out",style:te.buttons,accessibilityLabel:"Sign Out of the application."})]})]})}),Object(R.jsx)(v,{})]}):null},te=l.default.create({container:{flex:1,gap:10,backgroundColor:"#D1E6D5"},fieldset:{flex:1,padding:2,gap:10,justifyContent:"flex-start",alignItems:"flex-start"},labels:{padding:2,fontFamily:"RobotoMono_500Medium"},buttons:{fontFamily:"RobotoMono_500Medium",paddingBottom:10}});var ne,oe=function(){var e=Object(b.useNavigation)(),t=Object(Y.useFonts)({RobotoMono_500Medium:Y.RobotoMono_500Medium,RobotoMono_700Bold:Y.RobotoMono_700Bold,Creepster_400Regular:V.Creepster_400Regular});return p()(t,1)[0]?Object(R.jsxs)(W.default,{style:{flex:1},children:[Object(R.jsxs)(A.default,{style:y.droidSafeArea,contentContainerStyle:{flexGrow:1},children:[Object(R.jsx)(u.default,{style:y.heading1,children:"Home"}),Object(R.jsxs)(s.default,{style:ae.container,children:[Object(R.jsx)(u.default,{style:ae.copy,children:" This is the Home screen."}),Object(R.jsx)(u.default,{style:ae.copy,children:"Whew! So far so good. "}),Object(R.jsx)(Z.default,{title:"Sign Out",onPress:function(){return e.navigate("Welcome")}})]})]}),Object(R.jsx)(v,{})]}):null},ae=l.default.create({container:{flex:1,backgroundColor:"#E0C1D2",alignItems:"center",justifyContent:"center"},copy:{color:"black",fontSize:20,paddingVertical:10,fontFamily:"RobotoMono_500Medium"}}),re=n(471),ie=function(){var e=Object(c.default)();return Object(R.jsxs)(e.Navigator,{screenOptions:{headerShown:!1,tabBarActiveTintColor:"#e91e63"},children:[Object(R.jsx)(e.Screen,{name:"Home",component:oe,options:{tabBarLabel:"Home",tabBarIcon:function(e){var t=e.color,n=e.size;return Object(R.jsx)(re.default,{name:"home",size:n,color:t})}}}),Object(R.jsx)(e.Screen,{name:"Contacts",component:I,options:{tabBarLabel:"Contacts",tabBarIcon:function(e){var t=e.color,n=e.size;return Object(R.jsx)(re.default,{name:"contacts",size:n,color:t})}}}),Object(R.jsx)(e.Screen,{name:"Profile",component:Q,options:{tabBarLabel:"Profile",tabBarIcon:function(e){var t=e.color,n=e.size;return Object(R.jsx)(re.default,{name:"user",size:n,color:t})}}}),Object(R.jsx)(e.Screen,{name:"Settings",component:ee,options:{tabBarLabel:"Settings",tabBarIcon:function(e){var t=e.color,n=e.size;return Object(R.jsx)(re.default,{name:"setting",size:n,color:t})}}})]})},ce=n(209),le=n(139);!function(e){e.CANCELLED="CANCELLED",e.DISABLED="DISABLED",e.ERROR="ERROR",e.SUCCESS="SUCCESS"}(ne||(ne={}));var se=function(){var e,t,n=Object(b.useNavigation)(),o=Object(Y.useFonts)({RobotoMono_400Regular:Y.RobotoMono_400Regular,RobotoMono_500Medium:Y.RobotoMono_500Medium,RobotoMono_700Bold:Y.RobotoMono_700Bold,Creepster_400Regular:V.Creepster_400Regular}),r=p()(o,1)[0],i=a.a.useState(!1),c=p()(i,2),l=c[0],d=c[1],f=a.a.useState(!1),j=p()(f,2),h=j[0],x=j[1],O=a.a.useState(!1),g=p()(O,2),S=g[0],C=g[1],M=a.a.useState(!1),_=p()(M,2),B=_[0],w=_[1],D=a.a.useState(),I=p()(D,2),z=I[0],F=I[1];switch(a.a.useEffect((function(){!function(){var e;m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.awrap(ce.supportedAuthenticationTypesAsync());case 2:(e=t.sent)&&e.length&&(d(e.includes(le.AuthenticationType.FACIAL_RECOGNITION)),x(e.includes(le.AuthenticationType.FINGERPRINT)),C(e.includes(le.AuthenticationType.IRIS)));case 4:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),z){case ne.CANCELLED:e="Authentication process has been cancelled";break;case ne.DISABLED:e="Biometric authentication has been disabled";break;case ne.ERROR:e="There was an error in authentication";break;case ne.SUCCESS:e="Successfully authenticated";break;default:e=""}return t=l&&h&&S?"Authenticate with Face ID, touch ID or iris ID":l&&h?"Authenticate with Face ID or touch ID":l&&S?"Authenticate with Face ID or iris ID":h&&S?"Authenticate with touch ID or iris ID":l?"Authenticate with Face ID":h?"Authenticate with Touch ID ":S?"Authenticate with iris ID":"Biometric authentication is not supported on this device.",r?Object(R.jsxs)(W.default,{style:{flex:1},children:[Object(R.jsx)(A.default,{style:y.droidSafeArea,contentContainerStyle:{flexGrow:1},children:Object(R.jsxs)(s.default,{style:ue.container,children:[Object(R.jsx)(u.default,{style:[ue.text,{fontSize:32,paddingBottom:30,fontFamily:"RobotoMono_700Bold"}],children:"Welcome to the Demo"}),Object(R.jsx)(u.default,{style:[ue.text,{fontSize:42,paddingBottom:30,fontFamily:"Creepster_400Regular"}],children:"Congratulations"}),Object(R.jsx)(u.default,{style:[ue.text,{fontSize:22,paddingBottom:30,fontFamily:"RobotoMono_500Medium"}],children:"What will happen next?"}),Object(R.jsxs)(u.default,{style:[ue.text,{fontSize:14,fontFamily:"RobotoMono_500Medium"}],children:[t,"."," "]}),Object(R.jsx)(u.default,{style:[ue.text,{fontSize:14,fontFamily:"RobotoMono_500Medium"}],children:l||h||S?Object(R.jsx)(Z.default,{title:"Authenticate",onPress:function(){var e;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!B){t.next=2;break}return t.abrupt("return");case 2:return w(!0),t.prev=3,t.next=6,m.a.awrap(ce.authenticateAsync());case 6:(e=t.sent).success?(F(ne.SUCCESS),n.navigate("Main")):"unknown"===e.error?F(ne.DISABLED):"user_cancel"!==e.error&&"system_cancel"!==e.error&&"app_cancel"!==e.error||F(ne.CANCELLED),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),F(ne.ERROR);case 13:w(!1);case 14:case"end":return t.stop()}}),null,null,[[3,10]],Promise)}}):null}),Object(R.jsx)(u.default,{style:[ue.text,{fontSize:14,fontFamily:"RobotoMono_500Medium"}],children:e?Object(R.jsx)(u.default,{children:" Authenticated. "}):null}),Object(R.jsx)(u.default,{style:[ue.text,{fontSize:14,fontFamily:"RobotoMono_500Medium"}],children:"Similate a login by clicking the button!"}),Object(R.jsx)(Z.default,{title:"Sign In",style:[ue.text,{fontSize:24,fontFamily:"RobotoMono_500Medium"}],onPress:function(){n.navigate("Main")}})]})}),Object(R.jsx)(v,{})]}):null},ue=l.default.create({container:{flex:1,backgroundColor:"#C5D8AB",alignItems:"center",justifyContent:"center"},text:{color:"black",paddingVertical:10}}),de=(n(452),n(240),Object(i.default)());function fe(){return Object(R.jsx)(r.default,{children:Object(R.jsxs)(de.Navigator,{screenOptions:{headerShown:!1},children:[Object(R.jsx)(de.Screen,{name:"Welcome",component:se}),Object(R.jsx)(de.Screen,{name:"Main",component:ie})]})})}},304:function(e,t,n){e.exports=n(453)},320:function(e,t){}},[[304,1,2]]]);
//# sourceMappingURL=app.877a811f.chunk.js.map