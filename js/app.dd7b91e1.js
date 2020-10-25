(function(t){function e(e){for(var r,i,d=e[0],u=e[1],o=e[2],l=0,f=[];l<d.length;l++)i=d[l],s[i]&&f.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);while(f.length)f.shift()();return a.push.apply(a,o||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,d=1;d<n.length;d++){var u=n[d];0!==s[u]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},s={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-week-3-student-sign-in/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=e,d=d.slice();for(var o=0;o<d.length;o++)e(d[o]);var c=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"197b":function(t,e,n){},"399b":function(t,e,n){"use strict";var r=n("fa92"),s=n.n(r);s.a},5054:function(t,e,n){"use strict";var r=n("bc16"),s=n.n(r);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NewStudentForm",{on:{"student-added":t.newStudentAdded}}),n("StudentTable",{attrs:{students:t.students},on:{"student-present":t.studentArrivedOrLeft,"delete-student":t.studentDeleted}}),n("StudentMessage",{attrs:{student:t.mostRecentStudent}})],1)},a=[],i=(n("7514"),n("7f7f"),n("55dd"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.errors.length>0,expression:"errors.length > 0"}],staticClass:"alert alert-danger"},t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0),n("div",{staticClass:"card add-student m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Add new student")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v("Name")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStudentName,expression:"newStudentName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"name"},domProps:{value:t.newStudentName},on:{input:function(e){e.target.composing||(t.newStudentName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"starID"}},[t._v("Star ID")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.newStarID,expression:"newStarID",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"starID"},domProps:{value:t.newStarID},on:{input:function(e){e.target.composing||(t.newStarID=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),n("button",{staticClass:"btn btn-primary",on:{click:t.addStudent}},[t._v("Add")])])])}),d=[],u={name:"NewStudentForm",data:function(){return{newStudentName:"",newStarID:"",errors:[]}},methods:{addStudent:function(){if(this.errors=[],this.newStudentName||this.errors.push("Student name is required"),this.newStarID||this.errors.push("StarID is required"),0==this.errors.length){var t={name:this.newStudentName,starID:this.newStarID,present:!1};this.$emit("student-added",t),this.newStudentName="",this.newStarID=""}}}},o=u,c=(n("399b"),n("2877")),l=Object(c["a"])(o,i,d,!1,null,"6cf00ba1",null),f=l.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"card student-list m-2 p-2"},[n("h4",{staticClass:"card-title"},[t._v("Students")]),n("div",{staticClass:"edit-table-toggle form-check"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.editTable,expression:"editTable"}],staticClass:"form-check-input",attrs:{id:"edit-table",type:"checkbox"},domProps:{checked:Array.isArray(t.editTable)?t._i(t.editTable,null)>-1:t.editTable},on:{change:function(e){var n=t.editTable,r=e.target,s=!!r.checked;if(Array.isArray(n)){var a=null,i=t._i(n,a);r.checked?i<0&&(t.editTable=n.concat([a])):i>-1&&(t.editTable=n.slice(0,i).concat(n.slice(i+1)))}else t.editTable=s}}}),n("label",{staticClass:"form-check-label",attrs:{for:"edit-table"}},[t._v("Edit table?")])]),n("div",{attrs:{id:"student-table"}},[n("table",{staticClass:"table"},[n("tr",[n("th",[t._v("Name")]),n("th",[t._v("StarID")]),n("th",[t._v("Present?")]),n("th",{directives:[{name:"show",rawName:"v-show",value:t.editTable,expression:"editTable"}]},[t._v("Delete")])]),t._l(t.students,function(e){return n("StudentRow",{key:e.name,attrs:{student:e,edit:t.editTable},on:{"student-arrived-or-left":t.arrivedOrLeft,"delete-student":t.studentDeleted}})})],2)])])])},p=[],v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{class:{present:t.student.present,absent:!t.student.present}},[r("td",[t._v(t._s(t.student.name))]),r("td",[t._v(t._s(t.student.starID))]),r("td",[r("input",{attrs:{type:"checkbox"},domProps:{checked:t.student.present},on:{change:function(e){return t.arrivedOrLeft(t.student,e.srcElement.checked)}}})]),r("td",{directives:[{name:"show",rawName:"v-show",value:t.edit,expression:"edit"}]},[r("img",{staticClass:"delete-icon",attrs:{src:n("ed3a")},on:{click:t.deleteStudent}})])])},h=[],b={name:"StudentRow",props:{student:Object,edit:Boolean},methods:{arrivedOrLeft:function(t,e){this.$emit("student-arrived-or-left",t,e)},deleteStudent:function(){confirm("Delete ".concat(this.student.name,"?"))&&this.$emit("delete-student",this.student)}}},A=b,w=(n("5054"),Object(c["a"])(A,v,h,!1,null,null,null)),S=w.exports,g={name:"StudentTable",components:{StudentRow:S},data:function(){return{editTable:!1}},props:{students:Array},methods:{arrivedOrLeft:function(t,e){this.$emit("student-present",t,e)},studentDeleted:function(t){this.$emit("delete-student",t)}}},y=g,C=(n("b1d5"),Object(c["a"])(y,m,p,!1,null,null,null)),I=C.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.student.name,expression:"student.name"}]},[t.student.present?n("div",{staticClass:"alert alert-success"},[t._v("\n            Welcome, "+t._s(t.student.name)+"!\n        ")]):n("div",{staticClass:"alert alert-info"},[t._v("\n            Goodbye, "+t._s(t.student.name)+". See you later!\n        ")])])])},D=[],_={name:"StudentMessage",props:{student:Object}},M=_,O=(n("94c5"),Object(c["a"])(M,x,D,!1,null,"6b8cf6a4",null)),k=O.exports,j={name:"app",data:function(){return{students:[{name:"Example",starID:"aa1234aa",present:!0},{name:"Test",starID:"bb5678bb",present:!1}],mostRecentStudent:{}}},components:{NewStudentForm:f,StudentTable:I,StudentMessage:k},methods:{newStudentAdded:function(t){this.students.push(t),this.students.sort(function(t,e){return t.name.toLowerCase()<e.name.toLowerCase()?-1:1})},studentArrivedOrLeft:function(t,e){var n=this.students.find(function(e){if(e.name===t.name&&e.starID===t.starID)return!0});n&&(n.present=e,this.mostRecentStudent=t)},studentDeleted:function(t){this.students=this.students.filter(function(e){return e!=t}),this.mostRecentStudent={}}}},T=j,N=Object(c["a"])(T,s,a,!1,null,null,null),E=N.exports,R=n("9f7b"),U=n.n(R);n("f9e3"),n("2dd8");r["a"].use(U.a),r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},"68c9":function(t,e,n){},"94c5":function(t,e,n){"use strict";var r=n("68c9"),s=n.n(r);s.a},b1d5:function(t,e,n){"use strict";var r=n("197b"),s=n.n(r);s.a},bc16:function(t,e,n){},ed3a:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAM2SURBVGhD7ZnLbtNAFIYjbgt23FbAC7BCSmYIUqWIcalYsCTitoMtrItgwQKJdE0rlcsjoCJVFCQeAygPAJQNAVTiJCqgZjhneiyF5Iztie1JkfxLnxTLM+f8x554xuNKqVKlsks3m3t7s7LeVfIusNINxAfgRxjI3wj+7gZy3ZyDNthW36/soe7TU3+udhIMLoRKfAGD2oUwEBvYt9eQJyicP3Ua1aOhkk+BX5w5FzAGFLKMMSl8sYIrd62rxHfOTEbaGJvS5C/dPHUArtQzJnGuQBGPdbW6n9LmI32xehDMv+YSFgEU8QpzUvpsoivvzXwEFLGay53wMWxs4HAiG5MJAlznAvskDGqXyY6bOhdOH4NJ5xsX1DPtn4E4QrbSC28fE2xKiCWylU5mhnWZpM7Xdf/2Tf4cg2kLfbhzHOilp+rHyV6y4I+7wAViASN/3qxpvb2ttx7c49sMgW2wLfZxLKJF9uKFiywYPhtckDEi85ESiojMR3IpAgr4lGoB2A/EWS4AR//WjX8MGVmKGDVvBMcYY7StjZ6qSrJpl1kSM51t2IwNF5GmTSpmxR2yaReM/xds5xjiDOZm3iCek027oOH6eMdkWKMDOB4M6IA0sXlAyfdk0y56e+IDJMAWMaws5hGYWMmmXU7PfwZTBF75UcGdyGQeQG9k0658ChgZNigoyksB//0Qwj8K2zkB1jzeidHhlKUIJd6RTbuggBW2cwyseTIad46LFU+ax+hunsiUmCebdpkNKq4zg/elRFATZNMuWsx95gKMsRsXcyho3OKCsERFJJiPiIpwMY+ESjwke8nC7T6n+QCMFPxCs+X0QoOCRd0yF2w6iEWylV74Io0TBx/QI0p+3ZyrHyZbbgrPyatsUI/A8GmSnckEf54nXGAvKPmIbEyuna1FscomKBDMiR9OyEY2mc1dJda4REUAw+Zlbpu7kXCj1c9ml1jUjcY+Spu/QnXmCiRqjyfOTLuj5CVKU6zMIzYQS06TnQWcpPCqb87MHKLw/kQzdgv4yJmLA/vg8sB5hi1CuMjCTSfct8E1O7544Hc0vEPIzjc18ZbOzeOqMvXCrFSpUjGqVP4C/xYkeiCFjZAAAAAASUVORK5CYII="},fa92:function(t,e,n){}});
//# sourceMappingURL=app.dd7b91e1.js.map