"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[246],{97618:(t,e,s)=>{s.d(e,{Z:()=>r});const r=(0,s(51900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 50 50"}},[s("g",{attrs:{id:"Icon",transform:"translate(13 344)"}},[s("g",{attrs:{id:"circle",transform:"translate(-29 -361.14)"}},[s("circle",{attrs:{id:"bg_circle",cx:"25",cy:"25",r:"25",transform:"translate(16 17.14)",fill:"#25c16f"}}),t._v(" "),s("path",{attrs:{id:"white_ring",d:"M20,0A19.969,19.969,0,0,1,37.151,30.248c-.712,1.229-2.946,1.654-4.181,2.926-1.2,1.235-1.426,3.291-3.258,4.338A20.011,20.011,0,1,1,20,0Z",transform:"translate(21 22.14)",fill:"#fff"}}),t._v(" "),s("circle",{attrs:{id:"green_ring",cx:"15",cy:"15",r:"15",transform:"translate(26 27.14)",fill:"#25c16f"}})]),t._v(" "),s("g",{attrs:{id:"cursor",transform:"matrix(1, -0.017, 0.017, 1, 10.797, -319.593)"}},[s("path",{attrs:{id:"right",d:"M10.286,23.465a.687.687,0,0,1-.63-.413L.057.962a.687.687,0,0,1,.9-.9l22.09,9.6a.687.687,0,0,1-.073,1.288L16.249,13A4.885,4.885,0,0,0,13,16.249l-2.058,6.73a.687.687,0,0,1-.619.485Z",transform:"translate(0 0)",fill:"#fff"}}),t._v(" "),s("path",{attrs:{id:"left",d:"M27.244,9.657,5.154.058A.688.688,0,0,0,4.394.2h0L18.412,14.221A4.887,4.887,0,0,1,20.441,13l6.73-2.058a.687.687,0,0,0,.073-1.288Z",transform:"translate(-4.192 -0.001)",fill:"#fff"}})])])])}),[],!1,null,null,null).exports},8012:(t,e,s)=>{s.d(e,{Z:()=>a});const r={methods:{goBack:function(){window.history.back()}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"text-gray-400 flex ltr:flex-row rtl:flex-row-reverse items-center ltr:mr-4 rtl:ml-4 focus:outline-none",on:{click:t.goBack}},[s("svg",{staticClass:"w-6 h-6 rtl:flip",attrs:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"}})]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports},60651:(t,e,s)=>{s.d(e,{Z:()=>a});const r={data:function(){return{show:!0}},computed:{style:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.bannerStyle)||"success"},message:function(){var t;return(null===(t=this.$page.props.jetstream.flash)||void 0===t?void 0:t.banner)||""}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.show&&t.message?s("div",{class:{"bg-indigo-500":"success"==t.style,"bg-red-700":"danger"==t.style}},[s("div",{staticClass:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},[s("div",{staticClass:"flex items-center justify-between flex-wrap"},[s("div",{staticClass:"w-0 flex-1 flex items-center min-w-0"},[s("span",{staticClass:"flex p-2 rounded-md",class:{"bg-indigo-600":"success"==t.style,"bg-red-600":"danger"==t.style}},["success"==t.style?s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"}})]):t._e(),t._v(" "),"danger"==t.style?s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"}})]):t._e()]),t._v(" "),s("p",{staticClass:"ml-3 font-medium text-white truncate"},[t._v("\n                        "+t._s(t.message)+"\n                    ")])]),t._v(" "),s("div",{staticClass:"flex-shrink-0 sm:ml-3"},[s("button",{staticClass:"-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition ease-in-out duration-150",class:{"hover:bg-indigo-600 focus:bg-indigo-600":"success"==t.style,"hover:bg-red-600 focus:bg-red-600":"danger"==t.style},attrs:{type:"button","aria-label":"Dismiss"},on:{click:function(e){e.preventDefault(),t.show=!1}}},[s("svg",{staticClass:"h-5 w-5 text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])])]):t._e()])}),[],!1,null,null,null).exports},16446:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"rtl:origin-top-left rtl:left-0 ltr:origin-top-right ltr:right-0":"origin-top"}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),s("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 shadow rounded",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[s("div",{staticClass:"rounded-sm ring-1 ring-black ring-opacity-5",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports},93210:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:["href","as"]};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"===t.as?s("button",{staticClass:"block text-sm w-full px-4 py-2 leading-5 text-gray-700 ltr:text-left rtl:text-right hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._t("default")],2):s("inertia-link",{staticClass:"text-sm block px-4 py-2 leading-5 text-gray-700 hover:bg-gray-100 ltr:text-left rtl:text-right focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},57850:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:["href","active"],computed:{classes:function(){return this.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)}),[],!1,null,null,null).exports},37760:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:["active","href","as"],computed:{classes:function(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"==t.as?s("button",{staticClass:"w-full text-left",class:t.classes},[t._t("default")],2):s("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},78589:(t,e,s)=>{s.d(e,{Z:()=>a});const r={name:"RewardBadge",props:{points:{type:[Number,String],default:0},textColor:{type:String,default:"text-gray-400"},iconSize:{type:String,default:"w-7 h-7"}}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex group gap-2 items-center"},[s("svg",{staticClass:"transition duration-300 ease-in-out transform group-hover:scale-110",class:t.iconSize,attrs:{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300","enable-background":"new 0 0 300 300","xml:space":"preserve"}},[s("g",[s("ellipse",{attrs:{fill:"#FFC843",cx:"149.833",cy:"149.501",rx:"147.833",ry:"146.166"}}),s("ellipse",{attrs:{fill:"#D38700",cx:"150",cy:"150.168",rx:"113.667",ry:"113.833"}}),t._v(" "),s("polygon",{attrs:{fill:"#FFC843",points:"192.716,211.945 151.021,190.203 109.476,212.222 117.27,165.852 83.489,133.142 129.999,126.226\n                                        150.667,83.991 171.618,126.086 218.172,132.693 184.611,165.626"}})])]),t._v(" "),s("span",{staticClass:"font-semibold ",class:t.textColor},[t._v(t._s(t.points)+" XP")])])}),[],!1,null,null,null).exports},6077:(t,e,s)=>{s.d(e,{Z:()=>a});const r={name:"SectionHeader",props:{title:String}};const a=(0,s(51900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex justify-between items-center mb-2"},[s("div",{staticClass:"relative inline-flex"},[s("h4",{staticClass:"py-4 text-xl font-semibold leading-tight text-primary"},[t._v(t._s(t.__(t.title)))]),t._v(" "),t.$slots.icon?t._t("icon"):t._e()],2),t._v(" "),t.$slots.action?t._t("action"):t._e()],2)}),[],!1,null,null,null).exports},91455:(t,e,s)=>{s.d(e,{Z:()=>x});var r=s(97618),a=s(60651),o=s(16446),i=s(93210),n=s(57850),l=s(37760),c=s(50298),d=s(78589),u=s(15366);const p={name:"SideBarNav",props:{isMobile:Boolean}};var v=s(51900);const h=(0,v.Z)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"relative px-4 space-y-3",class:{"flex-1 bg-primary":!t.isMobile}},[s("div",{staticClass:"bg-gray-100 bg-opacity-10 rounded-md py-3 px-4"},[s("h4",{staticClass:"text-white text-base font-semibold"},[t._v(t._s(t.$page.props.currentCategory?t.$page.props.currentCategory.name:t.__("No Syllabus Selected")))]),t._v(" "),s("inertia-link",{staticClass:"text-secondary underline text-sm",attrs:{href:t.route("change_syllabus")}},[t._v("\n            "+t._s(t.$page.props.currentCategory?t.__("Change Syllabus"):t.__("Choose Syllabus"))+"\n        ")])],1),t._v(" "),s("inertia-link",{staticClass:"group rounded-md md py-3 px-4 flex items-center text-base font-semibold",class:["user_dashboard"===t.route().current()?"bg-secondary text-white":"text-white hover:bg-secondary hover:text-white"],attrs:{href:t.route("user_dashboard")}},[s("svg",{staticClass:"group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",class:["user_dashboard"===t.route().current()?"text-white":"text-secondary"],attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{d:"M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"}})]),t._v("\n        "+t._s(t.__("Dashboard"))+"\n    ")]),t._v(" "),s("inertia-link",{staticClass:"group rounded-md py-3 px-4 flex items-center text-base font-semibold",class:["learn_practice"===t.route().current()?"bg-secondary text-white":"text-white hover:bg-secondary hover:text-white"],attrs:{href:t.route("learn_practice")}},[s("svg",{staticClass:"group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",class:["learn_practice"===t.route().current()?"text-white":"text-secondary"],attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"}},[s("g",[s("path",{attrs:{d:"M0,0h24v24H0V0z",fill:"none"}})]),s("g",[s("path",{attrs:{d:"M5,20V4h2v7l2.5-1.5L12,11V4h5v7.08c0.33-0.05,0.66-0.08,1-0.08s0.67,0.03,1,0.08V4c0-1.1-0.9-2-2-2H5C3.9,2,3,2.9,3,4v16 c0,1.1,0.9,2,2,2h7.26c-0.42-0.6-0.75-1.28-0.97-2H5z M18,13c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S20.76,13,18,13z M16.75,20.5v-5l4,2.5L16.75,20.5z"}})])]),t._v("\n        "+t._s(t.__("Learn & Practice"))+"\n    ")]),t._v(" "),s("inertia-link",{staticClass:"group rounded-md py-3 px-4 flex items-center text-base font-semibold",class:["exam_dashboard"===t.route().current()?"bg-secondary text-white":"text-white hover:bg-secondary hover:text-white"],attrs:{href:t.route("exam_dashboard")}},[s("svg",{staticClass:"group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",class:["exam_dashboard"===t.route().current()?"text-white":"text-secondary"],attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{d:"M10 11H18V9H10ZM10 14H14V12H10ZM10 8H18V6H10ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM8 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16ZM8 4Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16Q8 16 8 16Q8 16 8 16V4Q8 4 8 4Q8 4 8 4ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6H4V20Q4 20 4 20Q4 20 4 20H18V22Z"}})]),t._v("\n        "+t._s(t.__("Exams"))+"\n    ")]),t._v(" "),s("inertia-link",{staticClass:"group rounded-md py-3 px-4 flex items-center text-base font-semibold",class:["quiz_dashboard"===t.route().current()?"bg-secondary text-white":"text-white hover:bg-secondary hover:text-white"],attrs:{href:t.route("quiz_dashboard")}},[s("svg",{staticClass:"group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",class:["quiz_dashboard"===t.route().current()?"text-white":"text-secondary"],attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"}},[s("g",[s("path",{attrs:{d:"M0,0h24v24H0V0z",fill:"none"}})]),s("g",[s("path",{attrs:{d:"M4,6H2v14c0,1.1,0.9,2,2,2h14v-2H4V6z M20,2H8C6.9,2,6,2.9,6,4v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4 C22,2.9,21.1,2,20,2z M20,16H8V4h12V16z M13.51,10.16c0.41-0.73,1.18-1.16,1.63-1.8c0.48-0.68,0.21-1.94-1.14-1.94 c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57C11.51,5.96,12.52,5,13.99,5c1.23,0,2.08,0.56,2.51,1.26c0.37,0.6,0.58,1.73,0.01,2.57 c-0.63,0.93-1.23,1.21-1.56,1.81c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52C13.26,11.41,13.19,10.74,13.51,10.16z M12.95,13.95 c0-0.59,0.47-1.04,1.05-1.04c0.59,0,1.04,0.45,1.04,1.04c0,0.58-0.44,1.05-1.04,1.05C13.42,15,12.95,14.53,12.95,13.95z"}})])]),t._v("\n        "+t._s(t.__("Quizzes"))+"\n    ")]),t._v(" "),s("inertia-link",{staticClass:"group rounded-md py-3 px-4 flex items-center text-base font-semibold",class:["my_progress"===t.route().current()?"bg-secondary text-white":"text-white hover:bg-secondary hover:text-white"],attrs:{href:t.route("my_progress")}},[s("svg",{staticClass:"group-hover:text-white ltr:mr-3 rtl:ml-3 flex-shrink-0 h-6 w-6",class:["my_progress"===t.route().current()?"text-white":"text-secondary"],attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"}})]),t._v("\n        "+t._s(t.__("My Progress"))+"\n    ")])],1)}),[],!1,null,null,null).exports;var g=s(44943);const f={components:{ArcApplicationMark:r.Z,ArcBanner:a.Z,ArcDropdown:o.Z,ArcDropdownLink:i.Z,ArcNavLink:n.Z,ArcResponsiveNavLink:l.Z,Toast:c.default,Message:u.default,RewardsBadge:d.Z,SideBarNav:h,PerfectScrollbar:g.PerfectScrollbar},props:{canLogin:Boolean,canRegister:Boolean},data:function(){return{showingNavigationDropdown:!1,sidebar:!1,scrollbarOptions:{swipeEasing:!0,suppressScrollX:!0,maxScrollbarLength:100}}},methods:{switchToTeam:function(t){this.$inertia.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},toggleMenu:function(t){var e=document.getElementById("menu");t?e.classList.remove("hidden"):e.classList.add("hidden")},logout:function(){this.$inertia.post(route("logout"))}}};const x=(0,v.Z)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"h-screen overflow-hidden flex bg-gray-100",on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"window",void 0,e.key,void 0)&&t._k(e.keyCode,"escape",void 0,e.key,void 0))return null;t.sidebar=!1}}},[s("arc-banner"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.sidebar,expression:"sidebar"}],ref:"dialog",staticClass:"fixed inset-0 z-40 flex md:hidden",attrs:{"aria-modal":"true"}},[s("transition",{attrs:{"enter-class":"transition-opacity ease-linear duration-300","enter-active-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"transition-opacity ease-linear duration-300","leave-active-class":"opacity-100","leave-to-class":"opacity-0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.sidebar,expression:"sidebar"}],staticClass:"fixed inset-0 bg-gray-600 bg-opacity-75",attrs:{"aria-hidden":"true"},on:{click:function(e){t.sidebar=!1}}})]),t._v(" "),s("transition",{attrs:{"enter-class":"transition ease-in-out duration-300 transform","enter-active-class":"-translate-x-full","enter-to-class":"translate-x-0","leave-class":"transition ease-in-out duration-300 transform","leave-active-class":"translate-x-0","leave-to-class":"-translate-x-full"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.sidebar,expression:"sidebar"}],staticClass:"relative max-w-xs w-full bg-primary pt-5 pb-4 flex-1 flex flex-col"},[s("transition",{attrs:{"enter-class":"ease-in-out duration-300","enter-active-class":"opacity-0","enter-to-class":"opacity-100","leave-class":"ease-in-out duration-300","leave-active-class":"opacity-100","leave-to-class":"opacity-0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.sidebar,expression:"sidebar"}],staticClass:"absolute top-0 right-0 -mr-12 pt-2"},[s("button",{staticClass:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",attrs:{type:"button"},on:{click:function(e){t.sidebar=!1}}},[s("span",{staticClass:"sr-only"},[t._v(t._s(t.__("Close sidebar")))]),t._v(" "),s("svg",{staticClass:"h-6 w-6 text-white",attrs:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])]),t._v(" "),s("div",{staticClass:"flex-shrink-0 px-4 pb-4 border-b border-gray-100 border-opacity-10 flex items-center"},[s("a",{attrs:{href:t.route("welcome")}},[s("img",{staticClass:"h-8 w-auto",attrs:{src:t.$page.props.assetUrl+t.$page.props.general.white_logo_path,alt:t.$page.props.general.app_name}})])]),t._v(" "),s("div",{staticClass:"mt-4 flex-1 h-0 overflow-y-auto"},[s("side-bar-nav",{attrs:{"is-mobile":!0}})],1)],1)]),t._v(" "),s("div",{staticClass:"flex-shrink-0 w-14"})],1),t._v(" "),s("div",{staticClass:"hidden bg-primary md:flex md:flex-shrink-0"},[s("div",{staticClass:"w-72 flex flex-col"},[s("div",{staticClass:"border-r border-gray-200 pb-4 flex flex-col flex-grow overflow-y-auto"},[s("div",{staticClass:"flex-shrink-0 h-16 px-6 border-b border-gray-100 border-opacity-10 flex items-center"},[s("a",{attrs:{href:t.route("welcome")}},[s("img",{staticClass:"h-8 w-auto",attrs:{src:t.$page.props.assetUrl+t.$page.props.general.white_logo_path,alt:t.$page.props.general.app_name}})])]),t._v(" "),s("div",{staticClass:"flex-grow mt-4 flex flex-col"},[s("side-bar-nav",{attrs:{"is-mobile":!1}})],1)])])]),t._v(" "),s("div",{staticClass:"flex-1 w-full mx-auto w-0 flex flex-col md:px-0"},[s("div",{staticClass:"relative z-20 flex-shrink-0 flex h-16 bg-white sm:border-b border-gray-200 lg:border-none"},[s("button",{staticClass:"border-b border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden",attrs:{type:"button"},on:{click:function(e){t.sidebar=!0}}},[s("span",{staticClass:"sr-only"},[t._v(t._s(t.__("Open sidebar")))]),t._v(" "),s("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h7"}})])]),t._v(" "),s("div",{staticClass:"flex-1 max-w-5xl mx-auto border-b border-gray-200 flex justify-between px-4 md:px-0"},[s("div",{staticClass:"flex-1 flex"},[s("form",{staticClass:"w-full flex md:ml-0",attrs:{action:"#",method:"GET"}},[s("label",{staticClass:"sr-only",attrs:{for:"search-field"}},[t._v(t._s(t.__("Search")))]),t._v(" "),s("div",{staticClass:"relative w-full text-gray-400 focus-within:text-gray-600"},[s("div",{staticClass:"pointer-events-none absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center"},[s("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"}})])]),t._v(" "),s("input",{staticClass:"block h-full w-full border-transparent py-2 ltr:pl-8 rtl:pr-8 ltr:pr-3 rtl:pl-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm",attrs:{id:"search-field",placeholder:"Search",type:"search",name:"search"}})])])]),t._v(" "),s("div",{staticClass:"ltr:ml-4 rtl:mr-4 flex items-center md:ltr:ml-6 md:rtl:mr-6"},[s("rewards-badge",{attrs:{"text-color":"text-primary",points:t.$page.props.user.wallet_balance}}),t._v(" "),s("button",{staticClass:"ltr:ml-3 rtl:mr-3 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",attrs:{type:"button"}},[s("span",{staticClass:"sr-only"},[t._v(t._s(t.__("View notifications")))]),t._v(" "),s("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"}})])]),t._v(" "),s("div",{staticClass:"ltr:ml-3 rtl:mr-3 relative"},[s("arc-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[t.$page.props.jetstream.managesProfilePhotos?s("button",{staticClass:"flex border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"},[s("img",{staticClass:"h-8 w-8 rounded-full object-cover",attrs:{src:t.$page.props.user.profile_photo_url,alt:t.$page.props.user.first_name}})]):s("span",{staticClass:"inline-flex rounded-md"},[s("button",{staticClass:"inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button"}},[t._v("\n                                                                "+t._s(t.$page.props.user.first_name)+"\n\n                                                                "),s("svg",{staticClass:"ml-2 -mr-0.5 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                                    "+t._s(t.$page.props.user.first_name)+" "+t._s(t.$page.props.user.last_name)+"\n                                ")]),t._v(" "),s("arc-dropdown-link",{attrs:{href:t.route("profile.show")}},[t._v("\n                                    "+t._s(t.__("Profile"))+"\n                                ")]),t._v(" "),s("arc-dropdown-link",{attrs:{href:t.route("user_subscriptions")}},[t._v("\n                                    "+t._s(t.__("My Subscriptions"))+"\n                                ")]),t._v(" "),s("arc-dropdown-link",{attrs:{href:t.route("user_payments")}},[t._v("\n                                    "+t._s(t.__("My Payments"))+"\n                                ")]),t._v(" "),t.$page.props.jetstream.hasApiFeatures?s("arc-dropdown-link",{attrs:{href:t.route("api-tokens.index")}},[t._v("\n                                    "+t._s(t.__("API Tokens"))+"\n                                ")]):t._e(),t._v(" "),s("div",{staticClass:"border-t border-gray-100"}),t._v(" "),s("form",{attrs:{method:"post",action:t.route("logout")}},[s("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:t.$page.props.csrf_token}}),t._v(" "),s("arc-dropdown-link",{attrs:{as:"button"}},[t._v("\n                                        "+t._s(t.__("Logout"))+"\n                                    ")])],1)]},proxy:!0}])})],1)],1)])]),t._v(" "),s("div",{staticClass:"bg-white z-10 shadow"},[s("div",{staticClass:"max-w-5xl mx-auto"},[s("div",{staticClass:"py-4"},[s("div",{staticClass:"px-4 sm:px-6 md:px-0"},[s("div",{staticClass:"flex flex-col md:flex-row items-start md:items-center justify-between"},[s("div",[t._t("header")],2),t._v(" "),t.$slots.actions?s("div",{staticClass:"sm:mb-0 sm:mt-0"},[t._t("actions")],2):t._e()])])])])]),t._v(" "),s("perfect-scrollbar",{ref:"scroll",staticClass:"flex-1 relative h-full z-0 overflow-hidden focus:outline-none",attrs:{options:t.scrollbarOptions}},[s("main",{staticClass:"max-w-5xl mx-auto"},[s("div",{staticClass:"px-4 sm:px-6 md:px-0"},[s("Message",{directives:[{name:"show",rawName:"v-show",value:t.$page.props.successMessage,expression:"$page.props.successMessage"}],attrs:{severity:"success",closable:!1}},[t._v("\n                        "+t._s(t.$page.props.successMessage)+"\n                    ")]),t._v(" "),t.$page.props.errorMessage?s("Message",{attrs:{severity:"error",closable:!1}},[t._v("\n                        "+t._s(t.$page.props.errorMessage)+"\n                    ")]):t._e(),t._v(" "),t._t("default")],2)])]),t._v(" "),s("Toast",{attrs:{position:"top-right"}}),t._v(" "),s("portal-target",{attrs:{name:"modal",multiple:""}})],1)],1)}),[],!1,null,null,null).exports},40246:(t,e,s)=>{s.r(e),s.d(e,{default:()=>d});var r=s(91455),a=s(6077),o=s(8012);const i={name:"SkillCard",props:{skill:Object,categorySlug:String,sectionSlug:String,sno:Number},computed:{serial:function(){return String(this.sno).padStart(2,"0")}}};var n=s(51900);const l=(0,n.Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white"},[s("div",{staticClass:"p-6 flex"},[s("div",{staticClass:"w-full flex gap-4"},[s("h3",{staticClass:"text-xl text-secondary font-bold"},[t._v(t._s(t.serial))]),t._v(" "),s("div",{staticClass:"w-full flex flex-col"},[s("h4",{staticClass:"text-lg font-semibold text-primary mb-3"},[t._v(t._s(t.skill.name))]),t._v(" "),s("div",{staticClass:"flex flex-col sm:flex-row gap-4"},[s("div",{staticClass:"w-full sm:w-48 rounded shadow-inner border border-gray-200 group hover:bg-primary cursor-pointer"},[s("inertia-link",{attrs:{href:t.route("skill_videos",{category:t.categorySlug,section:t.sectionSlug,skill:t.skill.slug})}},[s("div",{staticClass:"card-body flex flex-col items-center gap-1"},[s("svg",{staticClass:"w-6 h-6 text-gray-500 group-hover:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z"}})]),t._v(" "),s("span",{staticClass:"text-gray-500 group-hover:text-white"},[t._v(t._s(0===t.skill.practice_videos_count?"No":t.skill.practice_videos_count)+" "+t._s(t.__("Videos")))])])])],1),t._v(" "),s("div",{staticClass:"w-full sm:w-48 rounded shadow-inner border border-gray-200 group hover:bg-primary cursor-pointer"},[s("inertia-link",{attrs:{href:t.route("skill_lessons",{category:t.categorySlug,section:t.sectionSlug,skill:t.skill.slug})}},[s("div",{staticClass:"card-body flex flex-col items-center gap-1"},[s("svg",{staticClass:"w-6 h-6 text-gray-500 group-hover:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{d:"M0,0h24v24H0V0z",fill:"none"}}),s("g",[s("path",{attrs:{d:"M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z"}}),s("rect",{attrs:{height:"2",width:"6",x:"9",y:"7"}}),s("rect",{attrs:{height:"2",width:"2",x:"16",y:"7"}}),s("rect",{attrs:{height:"2",width:"6",x:"9",y:"10"}}),s("rect",{attrs:{height:"2",width:"2",x:"16",y:"10"}})])]),t._v(" "),s("span",{staticClass:"text-gray-500 group-hover:text-white"},[t._v(t._s(0===t.skill.practice_lessons_count?"No":t.skill.practice_lessons_count)+" "+t._s(t.__("Lessons")))])])])],1),t._v(" "),s("div",{staticClass:"w-full sm:w-48 rounded shadow-inner border border-gray-200 group hover:bg-primary cursor-pointer"},[s("inertia-link",{attrs:{href:t.route("skill_practice_sets",{category:t.categorySlug,section:t.sectionSlug,skill:t.skill.slug})}},[s("div",{staticClass:"card-body flex flex-col items-center gap-1"},[s("svg",{staticClass:"w-6 h-6 text-gray-500 group-hover:text-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[s("path",{attrs:{d:"M0 0h24v24H0V0z",fill:"none"}}),s("path",{attrs:{d:"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-8-3h2v2h-2zm1-8c1.1 0 2 .9 2 2 0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4S8 6.79 8 9h2c0-1.1.9-2 2-2z"}})]),t._v(" "),s("span",{staticClass:"text-gray-500 group-hover:text-white"},[t._v(t._s(0===t.skill.practice_sets_count?"No":t.skill.practice_sets_count)+" "+t._s(t.__("Practice Sets")))])])])],1)])])])])])}),[],!1,null,null,null).exports,c={components:{AppLayout:r.Z,SectionHeader:a.Z,BackButton:o.Z,SkillCard:l},props:{category:Object,section:Object},metaInfo:function(){return{title:this.title}},computed:{title:function(){return this.category.name+" "+this.section.name+" - "+this.$page.props.general.app_name}}};const d=(0,n.Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("app-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"flex items-center"},[s("back-button"),t._v(" "),s("h1",{staticClass:"app-heading"},[t._v(t._s(t.category.name)+" "+t._s(t.section.name))])],1)]},proxy:!0},{key:"actions",fn:function(){return[s("div",{staticClass:"uppercase font-semibold text-secondary"},[t._v(t._s(t.section.skills.length)+" "+t._s(t.__("Skills")))])]},proxy:!0}])},[t._v(" "),t._v(" "),s("div",{staticClass:"py-8"},[s("div",{staticClass:"card flex flex-col justify-center items-center"},[s("div",{staticClass:"card-body w-full grid grid-cols-1 divide-y divide-gray-200"},[t._l(t.section.skills,(function(e,r){return[s("skill-card",{attrs:{skill:e,"category-slug":t.category.slug,"section-slug":t.section.slug,sno:r+1}})]}))],2)])])])}),[],!1,null,null,null).exports}}]);