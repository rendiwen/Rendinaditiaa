(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3228,1317],{89550:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pelatihan-mandiri/daftar-aksi-nyata",function(){return a(32309)}])},72351:function(e,n,a){"use strict";a.d(n,{S_:function(){return f},nc:function(){return k}});var i=a(47568),t=a(70655),r=a(85893),s=a(11163),c=a(5152),o=a.n(c),l=a(89140),d=a(21958),u=a(89004),h="/pelatihan-mandiri",p={FOR_YOU:o()(function(){return Promise.all([a.e(4842),a.e(1547),a.e(1700),a.e(3530),a.e(6315),a.e(9583)]).then(a.bind(a,86315))},{loadableGenerated:{webpack:function(){return[86315]}},ssr:!1}),TOPIK:o()(function(){return Promise.all([a.e(1651),a.e(4088),a.e(4842),a.e(1700),a.e(3530),a.e(5888)]).then(a.bind(a,92629))},{loadableGenerated:{webpack:function(){return[92629]}},ssr:!1}),AKSI_NYATA:o()(function(){return Promise.all([a.e(4842),a.e(6683),a.e(1700),a.e(9103),a.e(1317)]).then(a.bind(a,69103)).then(function(e){return e.AksiNyataList})},{loadableGenerated:{webpack:function(){return[69103]}},ssr:!1}),MODUL:o()(function(){return Promise.all([a.e(1651),a.e(9291),a.e(6721),a.e(6426),a.e(6014)]).then(a.bind(a,17422))},{loadableGenerated:{webpack:function(){return[17422]}},ssr:!1})},f=function(e){var n=e.children,a=e.submenu,c=(0,s.useRouter)(),o=c.pathname,p=c.query,f=[{label:"Seri Pelatihan",icon:"book",href:"/pelatihan-mandiri",active:"/pelatihan-mandiri"===o||o.includes("/pelatihan-mandiri/seri-pelatihan")||"learning-series"===p.from},{label:"Topik",icon:"topic",href:"/pelatihan-mandiri/daftar-topik",active:"/pelatihan-mandiri/daftar-topik"===o||o==="".concat(h,"/modul/[modul]")||o==="".concat(h,"/text/[id]")||o==="".concat(h,"/video/[id]")||o==="".concat(h,"/quiz/[id]")||o==="".concat(h,"/refleksi/[id]")||o.includes("/pelatihan-mandiri/topik/[topik]")&&"learning-series"!==p.from},{label:"Webinar",icon:"live_tv",href:"/pelatihan-mandiri/webinar",active:o.includes("/pelatihan-mandiri/webinar")},{label:"Aksi nyata",icon:"batch_prediction",href:"/pelatihan-mandiri/daftar-aksi-nyata",active:"/pelatihan-mandiri/daftar-aksi-nyata"===o||o.includes("/pelatihan-mandiri/aksi-nyata")},];return(0,r.jsxs)("div",{className:"flex flex-col h-screen w-full",children:[(0,r.jsxs)("div",{className:"fixed w-full p-4 flex flex-row items-center bg-white z-20",children:[(0,r.jsx)(l.l8,{icon:(0,r.jsx)(d.J,{as:"i",color:"default",children:"arrow_back"}),onClick:(0,i.Z)(function(){return(0,t.__generator)(this,function(e){switch(e.label){case 0:return[4,c.push("/home")];case 1:return e.sent(),[2]}})})}),(0,r.jsx)(l.rF,{children:"Merdeka Mengajar"})]}),(0,r.jsxs)("div",{className:"flex flex-row bg-gray-10 overflow-hidden h-full",children:[(0,r.jsx)("div",{className:"flex flex-col w-64 border-r border-gray-200 mt-[80px] px-4",children:f.map(function(e,n){return(0,r.jsxs)("div",{className:"flex flex-row items-center p-2 mt-4 rounded-lg cursor-pointer hover:bg-gray-5 ".concat(e.active?"bg-gray-20":""),onClick:(0,i.Z)(function(){return(0,t.__generator)(this,function(n){switch(n.label){case 0:return[4,c.push(e.href)];case 1:return n.sent(),[2]}})}),children:[(0,r.jsx)(d.J,{as:"i",color:e.active?"informational":"default",className:"mr-4",children:e.icon}),(0,r.jsx)(u.x,{color:e.active?"primary":"default",variant:"heading-sm",children:e.label})]},"sidemenu-".concat(n))})}),(0,r.jsx)("div",{className:"overflow-y-scroll w-[380px]",children:(0,r.jsx)("main",{className:"mt-8",children:a})}),(0,r.jsx)("div",{className:"flex-1 overflow-y-scroll p-2 max-w-6xl mx-auto md:px-8 lg:px-16",children:(0,r.jsx)("main",{className:"mt-[80px]",children:n&&n})})]})]})},m=function(e){var n=(0,s.useRouter)(),a=n.pathname,i=n.query,t=i.id,c=i.from,o=i.menuId,l=i.topik;return e?[{path:"".concat(h,"/seri-pelatihan/[id]"),components:(0,r.jsx)("div",{children:(0,r.jsx)(p.FOR_YOU,{isDesktop:!0,currentId:t})},"seri-pelatihan-dekstop-submenu")},{path:"".concat(h,"/topik/[topik]"),components:o&&"learning-series"===c?(0,r.jsx)("div",{children:(0,r.jsx)(p.FOR_YOU,{isDesktop:!0,currentId:o})},"topik-desktop-submenu"):(0,r.jsx)("div",{children:(0,r.jsx)(p.TOPIK,{isDesktop:!0,currentId:l})},"topik-desktop-submenu")},{path:"".concat(h,"/daftar-aksi-nyata"),components:(0,r.jsx)("div",{children:(0,r.jsx)(p.AKSI_NYATA,{isDesktop:!0})},"daftar-aksi-nyata-desktop-submenu")},{path:"".concat(h,"/aksi-nyata/[id]"),components:(0,r.jsx)("div",{children:(0,r.jsx)(p.AKSI_NYATA,{isDesktop:!0})},"aksi-nyata-desktop-submenu")},{path:["".concat(h,"/modul/[modul]"),"".concat(h,"/text/[id]"),"".concat(h,"/video/[id]"),"".concat(h,"/quiz/[id]"),"".concat(h,"/refleksi/[id]"),],components:(0,r.jsx)("div",{children:(0,r.jsx)(p.MODUL,{})},"modul-desktop-submenu")},].map(function(e){if("string"==typeof e.path&&a.includes(e.path)||Array.isArray(e.path)&&e.path.some(function(e){return a.includes(e)}))return e.components}):null},x=function(e){var n=e.children,a=m(!0);return(0,r.jsx)(f,{submenu:a,children:n})},k=function(e){var n=e.children;return e.isDesktop?(0,r.jsx)(x,{children:n}):n}},32309:function(e,n,a){"use strict";a.r(n);var i=a(85893),t=a(11163);a(67294);var r=a(89140),s=a(21958),c=a(72955),o=a(30469),l=a(69103),d=a(72351),u=function(e){var n=e.isDesktopScreenSize;return(0,i.jsx)(d.nc,{isDesktop:n,children:(0,i.jsx)(l.AksiNyataList,{isDesktop:n})})},h=function(){var e=(0,t.useRouter)();return(0,i.jsxs)(r.h_,{borderless:!0,fixed:!0,className:"z-10",children:[(0,i.jsx)(r.l8,{icon:(0,i.jsx)(s.J,{as:"i",color:"default",children:"arrow_back"}),onClick:function(){return c.NU(e.back)}}),(0,i.jsx)(r.rF,{children:"Pelatihan Mandiri"})]})};u.layoutOpts={hasHeader:!(0,o.J8)(),className:"text-default bg-gray-5",header:h,enableDesktopLayout:!0},n.default=u}},function(e){e.O(0,[1958,8189,4842,6683,1529,1700,9103,9774,2888,179],function(){return e(e.s=89550)}),_N_E=e.O()}]);
//# sourceMappingURL=daftar-aksi-nyata-6da93c721b4d24c5.js.map