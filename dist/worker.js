(function(){"use strict";var j=Object.defineProperty,Q=(i,s,n)=>s in i?j(i,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[s]=n,t=(i,s,n)=>(Q(i,typeof s!="symbol"?s+"":s,n),n),v=(i,s,n)=>{if(!s.has(i))throw TypeError("Cannot "+n)},E=(i,s,n)=>(v(i,s,"read from private field"),n?n.call(i):s.get(i)),O=(i,s,n)=>{if(s.has(i))throw TypeError("Cannot add the same private member more than once");s instanceof WeakSet?s.add(i):s.set(i,n)},T=(i,s,n,o)=>(v(i,s,"write to private field"),o?o.call(i,n):s.set(i,n),n);const B=self,d=!!B.WorkerGlobalScope,Y=d||`${self.name??""}`.startsWith("portal"),Z={MAXIMIZE:"maximize",MINIMIZE:"minimize",RESTORE:"restore",SET_BADGE:"setBadge",CLOSE:"closeApp",ON_MAXIMIZE:"maximize",ON_MINIMIZE:"minimize",ON_RESTORE:"restore"},L="connection",$={DISCONNECT:L+".disconnect",ON_DISCONNECT:L+".onDisconnect"},a="element",z={ADD:a+".add",FIND:a+".find",EXISTS:a+".exists",REMOVE:a+".remove",REPLACE:a+".replace",ADD_STYLES:a+".addStyles",RESTORE_STYLES:a+".restoreStyles",REMOVE_CLASSES:a+".removeClasses",QUERY:a+".query",ON_TOGGLE:a+".onToggle",ON_MUTATION:a+".onMutation",ON_CLICK:a+".onClick",ON_MOUSE_OVER:a+".onMouseOver",ON_HOVER:a+".onHover",ON_MOUSEDOWN:a+".onMouseDown",ON_MOUSEUP:a+".onMouseUp"},M="cookie",m="sessionStorage",A="localStorage",x="cookieStore",X={GET_COOKIE:M+".getItem",SET_COOKIE:M+".setItem",GET_SESSION_STORAGE_ITEM:m+".getItem",SET_SESSION_STORAGE_ITEM:m+".setItem",GET_LOCAL_STORAGE_ITEM:A+".getItem",SET_LOCAL_STORAGE_ITEM:A+".setItem",GET_COOKIE_STORE_ITEM:x+".get",SET_COOKIE_STORE_ITEM:x+".set",ON_COOKIE_CHANGE:M+".onChange",ON_SESSION_STORAGE_CHANGE:m+".onChange",ON_LOCAL_STORAGE_CHANGE:A+".onChange",ON_COOKIE_STORE_CHANGE:x+".onChange"},H="window",F={GET_URL:H+".getUrl",ON_URL_CHANGE:H+".onUrlChange"},G=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(i){var s=Math.random()*16|0,n=i=="x"?s:s&3|8;return n.toString(16)}),w={PUSH:"pushNotification",CLEAR:"clearNotifications",ON_CLICK:"notificationClick"},f={SET_RESOURCE:"setResource",CLEAR_RESOURCE:"clearResource",ON_CHANGE:"resourceChange"},k={GET_SESSION:"getSession",ON_CHANGE:"sessionChange"},U={SET_ITEM:"setStoreItem",GET_ITEM:"getStoreItem",REMOVE_ITEM:"removeStoreItem",...X},R={ECHO:"echo",REQUEST_PERMISSIONS:"requestPermissions",SEND_MESSAGE:"sendMessage",OPEN_APP:"openApp",ON_MESSAGE:"message"},D={SET_USER:"setUser",ON_CHANGE:"userChange"},W="0.4.2";var p,_,N,g,I,P,u,b,C;class J{constructor(s,n,o){t(this,"id"),O(this,p,null),O(this,_,[]),O(this,N,new Map),O(this,g,new Map),O(this,I,0),O(this,P,"*"),O(this,u,void 0),t(this,"openApp",(e,r)=>this.sendRequest(R.OPEN_APP,{appId:e,message:r})),O(this,b,(e,r,h=E(this,I))=>new Promise((S,c)=>{let l=null;h&&(l=setTimeout(()=>{c(new Error("timeout"))},h)),E(this,N).set(e,{path:r,timer:l,resolve:S,reject:c})})),O(this,C,async e=>{if(E(this,_).push(e),clearTimeout(E(this,p)),E(this,_).length>=10){this.postMessage({batch:E(this,_)}),E(this,_).length=0;return}T(this,p,setTimeout(()=>{this.postMessage({batch:E(this,_)}),E(this,_).length=0},1))}),t(this,"postMessage",e=>{d?E(this,u).postMessage(e):Y&&E(this,u).postMessage(e,E(this,P))}),t(this,"setContext",e=>{T(this,u,e)}),t(this,"sendRequest",async(e,...r)=>{const h=G();return E(this,C).call(this,{id:h,path:e,version:W,args:r}),E(this,b).call(this,h,e)}),t(this,"subscribe",(e,r="*",h)=>{const S=G();return E(this,g).set(S,h),E(this,C).call(this,{id:S,version:W,path:"on."+e,args:[r]}),()=>{E(this,g).delete(S),setTimeout(()=>{this.postMessage({id:S,path:"off."+e,args:[r]})},0)}}),t(this,"disconnect",()=>{E(this,u)&&this.postMessage({id:this.id,path:$.DISCONNECT})}),t(this,"echo",e=>this.sendRequest(R.ECHO,e)),t(this,"requestPermissions",e=>this.sendRequest(R.REQUEST_PERMISSIONS,e)),t(this,"getSession",async()=>this.sendRequest(k.GET_SESSION)),t(this,"setBadge",e=>this.sendRequest(Z.SET_BADGE,e)),t(this,"pushNotification",e=>this.sendRequest(w.PUSH,e)),t(this,"clearNotifications",e=>this.sendRequest(w.CLEAR,e)),t(this,"setStoreItem",(e,r,h)=>this.sendRequest(U.SET_ITEM,e,r,h)),t(this,"getStoreItem",async(e,r,h)=>this.sendRequest(U.GET_ITEM,e,h).then(S=>S??r?r:S)),t(this,"removeStoreItem",(e,r)=>this.sendRequest(U.REMOVE_ITEM,e,r)),t(this,"onSessionChange",e=>this.subscribe(k.ON_CHANGE,"*",e)),t(this,"onResourceChange",(e="*",r)=>this.subscribe(f.ON_CHANGE,e,r)),t(this,"onMessage",e=>this.subscribe(w.ON_CLICK,"*",e)),t(this,"onUserChange",e=>()=>this.subscribe(D.ON_CHANGE,"*",e)),o&&T(this,I,o.requestTimeout||0),this.id=G(),T(this,u,s),n.addEventListener("message",e=>{const{id:r,data:h,error:S}=e.data,c=E(this,N).get(r);if(c)c.timer&&clearTimeout(c.timer),E(this,N).delete(r),S?c.reject(S):c.resolve(h);else{const l=E(this,g).get(r);l&&l(h)}})}}p=new WeakMap,_=new WeakMap,N=new WeakMap,g=new WeakMap,I=new WeakMap,P=new WeakMap,u=new WeakMap,b=new WeakMap,C=new WeakMap;class ee extends J{constructor(s,n){super(s,s,n),t(this,"query",async o=>{const e=typeof o=="string"?o:o.toString();return await this.sendRequest(z.QUERY,e)}),t(this,"openApp",(o,e)=>this.sendRequest(R.OPEN_APP,{appId:o,message:e})),t(this,"setResource",o=>this.sendRequest(f.SET_RESOURCE,o)),t(this,"clearResource",o=>this.sendRequest(f.CLEAR_RESOURCE,o)),t(this,"setUser",o=>this.sendRequest(D.SET_USER,o)),t(this,"sendMessage",o=>this.sendRequest(R.SEND_MESSAGE,o)),t(this,"generatePathFromProxy",o=>{const e=[],r={get(h,S){return e.push(S.toString()),new Proxy(()=>{},r)},apply(h,S,c){const l=c.map(te=>JSON.stringify(te)).join(", "),V=e[e.length-1];return V==="toString"?e.slice(0,-1).join("."):(e[e.length-1]=`${V}(${l})`,new Proxy(()=>{},r))}};return new Proxy(()=>{},r)}),t(this,"requestPermissions",o=>this.sendRequest(R.REQUEST_PERMISSIONS,o))}}let q;const se=()=>{if(!d)throw new Error("usePortalService must be called from a web worker");return q||(q=new ee(self)),q},K="patient",y=se();y.subscribe(F.ON_URL_CHANGE,"*",i=>{if(!i)return;console.log("📦 url",i);const s=new RegExp("/\\d+$"),n=i.match(s),o=(n!=null&&n.length?n[0]:"").substring(1);console.log("📦 patientId",o),o?y.setResource({id:o,type:K}):y.clearResource(K)})})();
