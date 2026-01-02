(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))p(E);new MutationObserver(E=>{for(const x of E)if(x.type==="childList")for(const q of x.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&p(q)}).observe(document,{childList:!0,subtree:!0});function C(E){const x={};return E.integrity&&(x.integrity=E.integrity),E.referrerPolicy&&(x.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?x.credentials="include":E.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(E){if(E.ep)return;E.ep=!0;const x=C(E);fetch(E.href,x)}})();var oo={exports:{}},_a={};var bf;function rm(){if(bf)return _a;bf=1;var v=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function C(p,E,x){var q=null;if(x!==void 0&&(q=""+x),E.key!==void 0&&(q=""+E.key),"key"in E){x={};for(var P in E)P!=="key"&&(x[P]=E[P])}else x=E;return E=x.ref,{$$typeof:v,type:p,key:q,ref:E!==void 0?E:null,props:x}}return _a.Fragment=w,_a.jsx=C,_a.jsxs=C,_a}var Sf;function cm(){return Sf||(Sf=1,oo.exports=rm()),oo.exports}var d=cm(),ro={exports:{}},Q={};var zf;function gm(){if(zf)return Q;zf=1;var v=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),q=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),K=Symbol.iterator;function yl(g){return g===null||typeof g!="object"?null:(g=K&&g[K]||g["@@iterator"],typeof g=="function"?g:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ul={};function bl(g,M,O){this.props=g,this.context=M,this.refs=Ul,this.updater=O||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(g,M){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,M,"setState")},bl.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function El(){}El.prototype=bl.prototype;function ul(g,M,O){this.props=g,this.context=M,this.refs=Ul,this.updater=O||vl}var Tl=ul.prototype=new El;Tl.constructor=ul,_l(Tl,bl.prototype),Tl.isPureReactComponent=!0;var Vl=Array.isArray;function Sl(){}var $={H:null,A:null,T:null,S:null},Bl=Object.prototype.hasOwnProperty;function Jl(g,M,O){var B=O.ref;return{$$typeof:v,type:g,key:M,ref:B!==void 0?B:null,props:O}}function Ft(g,M){return Jl(g.type,M,g.props)}function pt(g){return typeof g=="object"&&g!==null&&g.$$typeof===v}function kl(g){var M={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(O){return M[O]})}var Mn=/\/+/g;function xt(g,M){return typeof g=="object"&&g!==null&&g.key!=null?kl(""+g.key):M.toString(36)}function At(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Sl,Sl):(g.status="pending",g.then(function(M){g.status==="pending"&&(g.status="fulfilled",g.value=M)},function(M){g.status==="pending"&&(g.status="rejected",g.reason=M)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function z(g,M,O,B,L){var J=typeof g;(J==="undefined"||J==="boolean")&&(g=null);var al=!1;if(g===null)al=!0;else switch(J){case"bigint":case"string":case"number":al=!0;break;case"object":switch(g.$$typeof){case v:case w:al=!0;break;case D:return al=g._init,z(al(g._payload),M,O,B,L)}}if(al)return L=L(g),al=B===""?"."+xt(g,0):B,Vl(L)?(O="",al!=null&&(O=al.replace(Mn,"$&/")+"/"),z(L,M,O,"",function(De){return De})):L!=null&&(pt(L)&&(L=Ft(L,O+(L.key==null||g&&g.key===L.key?"":(""+L.key).replace(Mn,"$&/")+"/")+al)),M.push(L)),1;al=0;var Kl=B===""?".":B+":";if(Vl(g))for(var wl=0;wl<g.length;wl++)B=g[wl],J=Kl+xt(B,wl),al+=z(B,M,O,J,L);else if(wl=yl(g),typeof wl=="function")for(g=wl.call(g),wl=0;!(B=g.next()).done;)B=B.value,J=Kl+xt(B,wl++),al+=z(B,M,O,J,L);else if(J==="object"){if(typeof g.then=="function")return z(At(g),M,O,B,L);throw M=String(g),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return al}function j(g,M,O){if(g==null)return g;var B=[],L=0;return z(g,B,"","",function(J){return M.call(O,J,L++)}),B}function G(g){if(g._status===-1){var M=g._result;M=M(),M.then(function(O){(g._status===0||g._status===-1)&&(g._status=1,g._result=O)},function(O){(g._status===0||g._status===-1)&&(g._status=2,g._result=O)}),g._status===-1&&(g._status=0,g._result=M)}if(g._status===1)return g._result.default;throw g._result}var ol=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},fl={map:j,forEach:function(g,M,O){j(g,function(){M.apply(this,arguments)},O)},count:function(g){var M=0;return j(g,function(){M++}),M},toArray:function(g){return j(g,function(M){return M})||[]},only:function(g){if(!pt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return Q.Activity=N,Q.Children=fl,Q.Component=bl,Q.Fragment=C,Q.Profiler=E,Q.PureComponent=ul,Q.StrictMode=p,Q.Suspense=U,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,Q.__COMPILER_RUNTIME={__proto__:null,c:function(g){return $.H.useMemoCache(g)}},Q.cache=function(g){return function(){return g.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(g,M,O){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var B=_l({},g.props),L=g.key;if(M!=null)for(J in M.key!==void 0&&(L=""+M.key),M)!Bl.call(M,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&M.ref===void 0||(B[J]=M[J]);var J=arguments.length-2;if(J===1)B.children=O;else if(1<J){for(var al=Array(J),Kl=0;Kl<J;Kl++)al[Kl]=arguments[Kl+2];B.children=al}return Jl(g.type,L,B)},Q.createContext=function(g){return g={$$typeof:q,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:x,_context:g},g},Q.createElement=function(g,M,O){var B,L={},J=null;if(M!=null)for(B in M.key!==void 0&&(J=""+M.key),M)Bl.call(M,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(L[B]=M[B]);var al=arguments.length-2;if(al===1)L.children=O;else if(1<al){for(var Kl=Array(al),wl=0;wl<al;wl++)Kl[wl]=arguments[wl+2];L.children=Kl}if(g&&g.defaultProps)for(B in al=g.defaultProps,al)L[B]===void 0&&(L[B]=al[B]);return Jl(g,J,L)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(g){return{$$typeof:P,render:g}},Q.isValidElement=pt,Q.lazy=function(g){return{$$typeof:D,_payload:{_status:-1,_result:g},_init:G}},Q.memo=function(g,M){return{$$typeof:T,type:g,compare:M===void 0?null:M}},Q.startTransition=function(g){var M=$.T,O={};$.T=O;try{var B=g(),L=$.S;L!==null&&L(O,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(Sl,ol)}catch(J){ol(J)}finally{M!==null&&O.types!==null&&(M.types=O.types),$.T=M}},Q.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},Q.use=function(g){return $.H.use(g)},Q.useActionState=function(g,M,O){return $.H.useActionState(g,M,O)},Q.useCallback=function(g,M){return $.H.useCallback(g,M)},Q.useContext=function(g){return $.H.useContext(g)},Q.useDebugValue=function(){},Q.useDeferredValue=function(g,M){return $.H.useDeferredValue(g,M)},Q.useEffect=function(g,M){return $.H.useEffect(g,M)},Q.useEffectEvent=function(g){return $.H.useEffectEvent(g)},Q.useId=function(){return $.H.useId()},Q.useImperativeHandle=function(g,M,O){return $.H.useImperativeHandle(g,M,O)},Q.useInsertionEffect=function(g,M){return $.H.useInsertionEffect(g,M)},Q.useLayoutEffect=function(g,M){return $.H.useLayoutEffect(g,M)},Q.useMemo=function(g,M){return $.H.useMemo(g,M)},Q.useOptimistic=function(g,M){return $.H.useOptimistic(g,M)},Q.useReducer=function(g,M,O){return $.H.useReducer(g,M,O)},Q.useRef=function(g){return $.H.useRef(g)},Q.useState=function(g){return $.H.useState(g)},Q.useSyncExternalStore=function(g,M,O){return $.H.useSyncExternalStore(g,M,O)},Q.useTransition=function(){return $.H.useTransition()},Q.version="19.2.3",Q}var _f;function ho(){return _f||(_f=1,ro.exports=gm()),ro.exports}var zl=ho(),co={exports:{}},Ta={},go={exports:{}},fo={};var Tf;function fm(){return Tf||(Tf=1,(function(v){function w(z,j){var G=z.length;z.push(j);l:for(;0<G;){var ol=G-1>>>1,fl=z[ol];if(0<E(fl,j))z[ol]=j,z[G]=fl,G=ol;else break l}}function C(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var j=z[0],G=z.pop();if(G!==j){z[0]=G;l:for(var ol=0,fl=z.length,g=fl>>>1;ol<g;){var M=2*(ol+1)-1,O=z[M],B=M+1,L=z[B];if(0>E(O,G))B<fl&&0>E(L,O)?(z[ol]=L,z[B]=G,ol=B):(z[ol]=O,z[M]=G,ol=M);else if(B<fl&&0>E(L,G))z[ol]=L,z[B]=G,ol=B;else break l}}return j}function E(z,j){var G=z.sortIndex-j.sortIndex;return G!==0?G:z.id-j.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;v.unstable_now=function(){return x.now()}}else{var q=Date,P=q.now();v.unstable_now=function(){return q.now()-P}}var U=[],T=[],D=1,N=null,K=3,yl=!1,vl=!1,_l=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,El=typeof clearTimeout=="function"?clearTimeout:null,ul=typeof setImmediate<"u"?setImmediate:null;function Tl(z){for(var j=C(T);j!==null;){if(j.callback===null)p(T);else if(j.startTime<=z)p(T),j.sortIndex=j.expirationTime,w(U,j);else break;j=C(T)}}function Vl(z){if(_l=!1,Tl(z),!vl)if(C(U)!==null)vl=!0,Sl||(Sl=!0,kl());else{var j=C(T);j!==null&&At(Vl,j.startTime-z)}}var Sl=!1,$=-1,Bl=5,Jl=-1;function Ft(){return Ul?!0:!(v.unstable_now()-Jl<Bl)}function pt(){if(Ul=!1,Sl){var z=v.unstable_now();Jl=z;var j=!0;try{l:{vl=!1,_l&&(_l=!1,El($),$=-1),yl=!0;var G=K;try{t:{for(Tl(z),N=C(U);N!==null&&!(N.expirationTime>z&&Ft());){var ol=N.callback;if(typeof ol=="function"){N.callback=null,K=N.priorityLevel;var fl=ol(N.expirationTime<=z);if(z=v.unstable_now(),typeof fl=="function"){N.callback=fl,Tl(z),j=!0;break t}N===C(U)&&p(U),Tl(z)}else p(U);N=C(U)}if(N!==null)j=!0;else{var g=C(T);g!==null&&At(Vl,g.startTime-z),j=!1}}break l}finally{N=null,K=G,yl=!1}j=void 0}}finally{j?kl():Sl=!1}}}var kl;if(typeof ul=="function")kl=function(){ul(pt)};else if(typeof MessageChannel<"u"){var Mn=new MessageChannel,xt=Mn.port2;Mn.port1.onmessage=pt,kl=function(){xt.postMessage(null)}}else kl=function(){bl(pt,0)};function At(z,j){$=bl(function(){z(v.unstable_now())},j)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(z){z.callback=null},v.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Bl=0<z?Math.floor(1e3/z):5},v.unstable_getCurrentPriorityLevel=function(){return K},v.unstable_next=function(z){switch(K){case 1:case 2:case 3:var j=3;break;default:j=K}var G=K;K=j;try{return z()}finally{K=G}},v.unstable_requestPaint=function(){Ul=!0},v.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=K;K=z;try{return j()}finally{K=G}},v.unstable_scheduleCallback=function(z,j,G){var ol=v.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ol+G:ol):G=ol,z){case 1:var fl=-1;break;case 2:fl=250;break;case 5:fl=1073741823;break;case 4:fl=1e4;break;default:fl=5e3}return fl=G+fl,z={id:D++,callback:j,priorityLevel:z,startTime:G,expirationTime:fl,sortIndex:-1},G>ol?(z.sortIndex=G,w(T,z),C(U)===null&&z===C(T)&&(_l?(El($),$=-1):_l=!0,At(Vl,G-ol))):(z.sortIndex=fl,w(U,z),vl||yl||(vl=!0,Sl||(Sl=!0,kl()))),z},v.unstable_shouldYield=Ft,v.unstable_wrapCallback=function(z){var j=K;return function(){var G=K;K=j;try{return z.apply(this,arguments)}finally{K=G}}}})(fo)),fo}var Af;function pm(){return Af||(Af=1,go.exports=fm()),go.exports}var po={exports:{}},Zl={};var Mf;function dm(){if(Mf)return Zl;Mf=1;var v=ho();function w(U){var T="https://react.dev/errors/"+U;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)T+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+U+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(){}var p={d:{f:C,r:function(){throw Error(w(522))},D:C,C,L:C,m:C,X:C,S:C,M:C},p:0,findDOMNode:null},E=Symbol.for("react.portal");function x(U,T,D){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:N==null?null:""+N,children:U,containerInfo:T,implementation:D}}var q=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,T){if(U==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Zl.createPortal=function(U,T){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(w(299));return x(U,T,null,D)},Zl.flushSync=function(U){var T=q.T,D=p.p;try{if(q.T=null,p.p=2,U)return U()}finally{q.T=T,p.p=D,p.d.f()}},Zl.preconnect=function(U,T){typeof U=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,p.d.C(U,T))},Zl.prefetchDNS=function(U){typeof U=="string"&&p.d.D(U)},Zl.preinit=function(U,T){if(typeof U=="string"&&T&&typeof T.as=="string"){var D=T.as,N=P(D,T.crossOrigin),K=typeof T.integrity=="string"?T.integrity:void 0,yl=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;D==="style"?p.d.S(U,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:N,integrity:K,fetchPriority:yl}):D==="script"&&p.d.X(U,{crossOrigin:N,integrity:K,fetchPriority:yl,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Zl.preinitModule=function(U,T){if(typeof U=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var D=P(T.as,T.crossOrigin);p.d.M(U,{crossOrigin:D,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&p.d.M(U)},Zl.preload=function(U,T){if(typeof U=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var D=T.as,N=P(D,T.crossOrigin);p.d.L(U,D,{crossOrigin:N,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Zl.preloadModule=function(U,T){if(typeof U=="string")if(T){var D=P(T.as,T.crossOrigin);p.d.m(U,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:D,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else p.d.m(U)},Zl.requestFormReset=function(U){p.d.r(U)},Zl.unstable_batchedUpdates=function(U,T){return U(T)},Zl.useFormState=function(U,T,D){return q.H.useFormState(U,T,D)},Zl.useFormStatus=function(){return q.H.useHostTransitionStatus()},Zl.version="19.2.3",Zl}var Ef;function mm(){if(Ef)return po.exports;Ef=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(w){console.error(w)}}return v(),po.exports=dm(),po.exports}var wf;function hm(){if(wf)return Ta;wf=1;var v=pm(),w=ho(),C=mm();function p(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function x(l){var t=l,n=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(n=t.return),l=t.return;while(l)}return t.tag===3?n:null}function q(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(x(l)!==l)throw Error(p(188))}function T(l){var t=l.alternate;if(!t){if(t=x(l),t===null)throw Error(p(188));return t!==l?null:l}for(var n=l,e=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(e=a.return,e!==null){n=e;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return U(a),l;if(i===e)return U(a),t;i=i.sibling}throw Error(p(188))}if(n.return!==e.return)n=a,e=i;else{for(var s=!1,u=a.child;u;){if(u===n){s=!0,n=a,e=i;break}if(u===e){s=!0,e=a,n=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===n){s=!0,n=i,e=a;break}if(u===e){s=!0,e=i,n=a;break}u=u.sibling}if(!s)throw Error(p(189))}}if(n.alternate!==e)throw Error(p(190))}if(n.tag!==3)throw Error(p(188));return n.stateNode.current===n?l:t}function D(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=D(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,K=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),El=Symbol.for("react.consumer"),ul=Symbol.for("react.context"),Tl=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Bl=Symbol.for("react.lazy"),Jl=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function kl(l){return l===null||typeof l!="object"?null:(l=pt&&l[pt]||l["@@iterator"],typeof l=="function"?l:null)}var Mn=Symbol.for("react.client.reference");function xt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Mn?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case _l:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case Vl:return"Suspense";case Sl:return"SuspenseList";case Jl:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case ul:return l.displayName||"Context";case El:return(l._context.displayName||"Context")+".Consumer";case Tl:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case $:return t=l.displayName||null,t!==null?t:xt(l.type)||"Memo";case Bl:t=l._payload,l=l._init;try{return xt(l(t))}catch{}}return null}var At=Array.isArray,z=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ol=[],fl=-1;function g(l){return{current:l}}function M(l){0>fl||(l.current=ol[fl],ol[fl]=null,fl--)}function O(l,t){fl++,ol[fl]=l.current,l.current=t}var B=g(null),L=g(null),J=g(null),al=g(null);function Kl(l,t){switch(O(J,t),O(L,l),O(B,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Gg(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Gg(t),l=Qg(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}M(B),O(B,l)}function wl(){M(B),M(L),M(J)}function De(l){l.memoizedState!==null&&O(al,l);var t=B.current,n=Qg(t,l.type);t!==n&&(O(L,l),O(B,n))}function Aa(l){L.current===l&&(M(B),M(L)),al.current===l&&(M(al),va._currentValue=G)}var Vi,yo;function En(l){if(Vi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||"",yo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vi+l+yo}var Zi=!1;function Ki(l,t){if(!l||Zi)return"";Zi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var y=b}Reflect.construct(l,[],A)}else{try{A.call()}catch(b){y=b}l.call(A.prototype)}}else{try{throw Error()}catch(b){y=b}(A=l())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),s=i[0],u=i[1];if(s&&u){var o=s.split(`
`),h=u.split(`
`);for(a=e=0;e<o.length&&!o[e].includes("DetermineComponentFrameRoot");)e++;for(;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;if(e===o.length||a===h.length)for(e=o.length-1,a=h.length-1;1<=e&&0<=a&&o[e]!==h[a];)a--;for(;1<=e&&0<=a;e--,a--)if(o[e]!==h[a]){if(e!==1||a!==1)do if(e--,a--,0>a||o[e]!==h[a]){var S=`
`+o[e].replace(" at new "," at ");return l.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",l.displayName)),S}while(1<=e&&0<=a);break}}}finally{Zi=!1,Error.prepareStackTrace=n}return(n=l?l.displayName||l.name:"")?En(n):""}function Xf(l,t){switch(l.tag){case 26:case 27:case 5:return En(l.type);case 16:return En("Lazy");case 13:return l.child!==t&&t!==null?En("Suspense Fallback"):En("Suspense");case 19:return En("SuspenseList");case 0:case 15:return Ki(l.type,!1);case 11:return Ki(l.type.render,!1);case 1:return Ki(l.type,!0);case 31:return En("Activity");default:return""}}function vo(l){try{var t="",n=null;do t+=Xf(l,n),n=l,l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var $i=Object.prototype.hasOwnProperty,Ji=v.unstable_scheduleCallback,ki=v.unstable_cancelCallback,Gf=v.unstable_shouldYield,Qf=v.unstable_requestPaint,et=v.unstable_now,Lf=v.unstable_getCurrentPriorityLevel,bo=v.unstable_ImmediatePriority,So=v.unstable_UserBlockingPriority,Ma=v.unstable_NormalPriority,Vf=v.unstable_LowPriority,zo=v.unstable_IdlePriority,Zf=v.log,Kf=v.unstable_setDisableYieldValue,Oe=null,at=null;function It(l){if(typeof Zf=="function"&&Kf(l),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Oe,l)}catch{}}var it=Math.clz32?Math.clz32:kf,$f=Math.log,Jf=Math.LN2;function kf(l){return l>>>=0,l===0?32:31-($f(l)/Jf|0)|0}var Ea=256,wa=262144,ja=4194304;function wn(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Da(l,t,n){var e=l.pendingLanes;if(e===0)return 0;var a=0,i=l.suspendedLanes,s=l.pingedLanes;l=l.warmLanes;var u=e&134217727;return u!==0?(e=u&~i,e!==0?a=wn(e):(s&=u,s!==0?a=wn(s):n||(n=u&~l,n!==0&&(a=wn(n))))):(u=e&~i,u!==0?a=wn(u):s!==0?a=wn(s):n||(n=e&~l,n!==0&&(a=wn(n)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Ce(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wf(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var l=ja;return ja<<=1,(ja&62914560)===0&&(ja=4194304),l}function Wi(l){for(var t=[],n=0;31>n;n++)t.push(l);return t}function xe(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Ff(l,t,n,e,a,i){var s=l.pendingLanes;l.pendingLanes=n,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=n,l.entangledLanes&=n,l.errorRecoveryDisabledLanes&=n,l.shellSuspendCounter=0;var u=l.entanglements,o=l.expirationTimes,h=l.hiddenUpdates;for(n=s&~n;0<n;){var S=31-it(n),A=1<<S;u[S]=0,o[S]=-1;var y=h[S];if(y!==null)for(h[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}n&=~A}e!==0&&To(l,e,0),i!==0&&a===0&&l.tag!==0&&(l.suspendedLanes|=i&~(s&~t))}function To(l,t,n){l.pendingLanes|=t,l.suspendedLanes&=~t;var e=31-it(t);l.entangledLanes|=t,l.entanglements[e]=l.entanglements[e]|1073741824|n&261930}function Ao(l,t){var n=l.entangledLanes|=t;for(l=l.entanglements;n;){var e=31-it(n),a=1<<e;a&t|l[e]&t&&(l[e]|=t),n&=~a}}function Mo(l,t){var n=t&-t;return n=(n&42)!==0?1:Fi(n),(n&(l.suspendedLanes|t))!==0?0:n}function Fi(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ii(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Eo(){var l=j.p;return l!==0?l:(l=window.event,l===void 0?32:ff(l.type))}function wo(l,t){var n=j.p;try{return j.p=l,t()}finally{j.p=n}}var Pt=Math.random().toString(36).slice(2),Yl="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,Zn="__reactContainer$"+Pt,Pi="__reactEvents$"+Pt,If="__reactListeners$"+Pt,Pf="__reactHandles$"+Pt,jo="__reactResources$"+Pt,Ne="__reactMarker$"+Pt;function ls(l){delete l[Yl],delete l[Wl],delete l[Pi],delete l[If],delete l[Pf]}function Kn(l){var t=l[Yl];if(t)return t;for(var n=l.parentNode;n;){if(t=n[Zn]||n[Yl]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(l=kg(l);l!==null;){if(n=l[Yl])return n;l=kg(l)}return t}l=n,n=l.parentNode}return null}function $n(l){if(l=l[Yl]||l[Zn]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ue(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(p(33))}function Jn(l){var t=l[jo];return t||(t=l[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Hl(l){l[Ne]=!0}var Do=new Set,Oo={};function jn(l,t){kn(l,t),kn(l+"Capture",t)}function kn(l,t){for(Oo[l]=t,l=0;l<t.length;l++)Do.add(t[l])}var lp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},xo={};function tp(l){return $i.call(xo,l)?!0:$i.call(Co,l)?!1:lp.test(l)?xo[l]=!0:(Co[l]=!0,!1)}function Oa(l,t,n){if(tp(t))if(n===null)l.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+n)}}function Ca(l,t,n){if(n===null)l.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+n)}}function Nt(l,t,n,e){if(e===null)l.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(n);return}l.setAttributeNS(t,n,""+e)}}function dt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function No(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function np(l,t,n){var e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var a=e.get,i=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){n=""+s,i.call(this,s)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ts(l){if(!l._valueTracker){var t=No(l)?"checked":"value";l._valueTracker=np(l,t,""+l[t])}}function Uo(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var n=t.getValue(),e="";return l&&(e=No(l)?l.checked?"true":"false":l.value),l=e,l!==n?(t.setValue(l),!0):!1}function xa(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ep=/[\n"\\]/g;function mt(l){return l.replace(ep,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ns(l,t,n,e,a,i,s,u){l.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.type=s:l.removeAttribute("type"),t!=null?s==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+dt(t)):l.value!==""+dt(t)&&(l.value=""+dt(t)):s!=="submit"&&s!=="reset"||l.removeAttribute("value"),t!=null?es(l,s,dt(t)):n!=null?es(l,s,dt(n)):e!=null&&l.removeAttribute("value"),a==null&&i!=null&&(l.defaultChecked=!!i),a!=null&&(l.checked=a&&typeof a!="function"&&typeof a!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?l.name=""+dt(u):l.removeAttribute("name")}function Ro(l,t,n,e,a,i,s,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ts(l);return}n=n!=null?""+dt(n):"",t=t!=null?""+dt(t):n,u||t===l.value||(l.value=t),l.defaultValue=t}e=e??a,e=typeof e!="function"&&typeof e!="symbol"&&!!e,l.checked=u?l.checked:!!e,l.defaultChecked=!!e,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(l.name=s),ts(l)}function es(l,t,n){t==="number"&&xa(l.ownerDocument)===l||l.defaultValue===""+n||(l.defaultValue=""+n)}function Wn(l,t,n,e){if(l=l.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<l.length;n++)a=t.hasOwnProperty("$"+l[n].value),l[n].selected!==a&&(l[n].selected=a),a&&e&&(l[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<l.length;a++){if(l[a].value===n){l[a].selected=!0,e&&(l[a].defaultSelected=!0);return}t!==null||l[a].disabled||(t=l[a])}t!==null&&(t.selected=!0)}}function Bo(l,t,n){if(t!=null&&(t=""+dt(t),t!==l.value&&(l.value=t),n==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=n!=null?""+dt(n):""}function Ho(l,t,n,e){if(t==null){if(e!=null){if(n!=null)throw Error(p(92));if(At(e)){if(1<e.length)throw Error(p(93));e=e[0]}n=e}n==null&&(n=""),t=n}n=dt(t),l.defaultValue=n,e=l.textContent,e===n&&e!==""&&e!==null&&(l.value=e),ts(l)}function Fn(l,t){if(t){var n=l.firstChild;if(n&&n===l.lastChild&&n.nodeType===3){n.nodeValue=t;return}}l.textContent=t}var ap=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qo(l,t,n){var e=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?e?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":e?l.setProperty(t,n):typeof n!="number"||n===0||ap.has(t)?t==="float"?l.cssFloat=n:l[t]=(""+n).trim():l[t]=n+"px"}function Yo(l,t,n){if(t!=null&&typeof t!="object")throw Error(p(62));if(l=l.style,n!=null){for(var e in n)!n.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="");for(var a in t)e=t[a],t.hasOwnProperty(a)&&n[a]!==e&&qo(l,a,e)}else for(var i in t)t.hasOwnProperty(i)&&qo(l,i,t[i])}function as(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Na(l){return sp.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var is=null;function ss(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var In=null,Pn=null;function Xo(l){var t=$n(l);if(t&&(l=t.stateNode)){var n=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(ns(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=l;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var e=n[t];if(e!==l&&e.form===l.form){var a=e[Wl]||null;if(!a)throw Error(p(90));ns(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)e=n[t],e.form===l.form&&Uo(e)}break l;case"textarea":Bo(l,n.value,n.defaultValue);break l;case"select":t=n.value,t!=null&&Wn(l,!!n.multiple,t,!1)}}}var us=!1;function Go(l,t,n){if(us)return l(t,n);us=!0;try{var e=l(t);return e}finally{if(us=!1,(In!==null||Pn!==null)&&(Si(),In&&(t=In,l=Pn,Pn=In=null,Xo(t),l)))for(t=0;t<l.length;t++)Xo(l[t])}}function Re(l,t){var n=l.stateNode;if(n===null)return null;var e=n[Wl]||null;if(e===null)return null;n=e[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(l=l.type,e=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!e;break l;default:l=!1}if(l)return null;if(n&&typeof n!="function")throw Error(p(231,t,typeof n));return n}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=!1;if(Rt)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){os=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch{os=!1}var ln=null,rs=null,Ua=null;function Qo(){if(Ua)return Ua;var l,t=rs,n=t.length,e,a="value"in ln?ln.value:ln.textContent,i=a.length;for(l=0;l<n&&t[l]===a[l];l++);var s=n-l;for(e=1;e<=s&&t[n-e]===a[i-e];e++);return Ua=a.slice(l,1<e?1-e:void 0)}function Ra(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Ba(){return!0}function Lo(){return!1}function Fl(l){function t(n,e,a,i,s){this._reactName=n,this._targetInst=a,this.type=e,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var u in l)l.hasOwnProperty(u)&&(n=l[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ba:Lo,this.isPropagationStopped=Lo,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ha=Fl(Dn),He=N({},Dn,{view:0,detail:0}),up=Fl(He),cs,gs,qe,qa=N({},He,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==qe&&(qe&&l.type==="mousemove"?(cs=l.screenX-qe.screenX,gs=l.screenY-qe.screenY):gs=cs=0,qe=l),cs)},movementY:function(l){return"movementY"in l?l.movementY:gs}}),Vo=Fl(qa),op=N({},qa,{dataTransfer:0}),rp=Fl(op),cp=N({},He,{relatedTarget:0}),fs=Fl(cp),gp=N({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=Fl(gp),pp=N({},Dn,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),dp=Fl(pp),mp=N({},Dn,{data:0}),Zo=Fl(mp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vp[l])?!!t[l]:!1}function ps(){return bp}var Sp=N({},He,{key:function(l){if(l.key){var t=hp[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Ra(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yp[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(l){return l.type==="keypress"?Ra(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Ra(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),zp=Fl(Sp),_p=N({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Fl(_p),Tp=N({},He,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Ap=Fl(Tp),Mp=N({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ep=Fl(Mp),wp=N({},qa,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=Fl(wp),Dp=N({},Dn,{newState:0,oldState:0}),Op=Fl(Dp),Cp=[9,13,27,32],ds=Rt&&"CompositionEvent"in window,Ye=null;Rt&&"documentMode"in document&&(Ye=document.documentMode);var xp=Rt&&"TextEvent"in window&&!Ye,$o=Rt&&(!ds||Ye&&8<Ye&&11>=Ye),Jo=" ",ko=!1;function Wo(l,t){switch(l){case"keyup":return Cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fo(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var le=!1;function Np(l,t){switch(l){case"compositionend":return Fo(t);case"keypress":return t.which!==32?null:(ko=!0,Jo);case"textInput":return l=t.data,l===Jo&&ko?null:l;default:return null}}function Up(l,t){if(le)return l==="compositionend"||!ds&&Wo(l,t)?(l=Qo(),Ua=rs=ln=null,le=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $o&&t.locale!=="ko"?null:t.data;default:return null}}var Rp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Io(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Rp[l.type]:t==="textarea"}function Po(l,t,n,e){In?Pn?Pn.push(e):Pn=[e]:In=e,t=wi(t,"onChange"),0<t.length&&(n=new Ha("onChange","change",null,n,e),l.push({event:n,listeners:t}))}var Xe=null,Ge=null;function Bp(l){Rg(l,0)}function Ya(l){var t=Ue(l);if(Uo(t))return l}function lr(l,t){if(l==="change")return t}var tr=!1;if(Rt){var ms;if(Rt){var hs="oninput"in document;if(!hs){var nr=document.createElement("div");nr.setAttribute("oninput","return;"),hs=typeof nr.oninput=="function"}ms=hs}else ms=!1;tr=ms&&(!document.documentMode||9<document.documentMode)}function er(){Xe&&(Xe.detachEvent("onpropertychange",ar),Ge=Xe=null)}function ar(l){if(l.propertyName==="value"&&Ya(Ge)){var t=[];Po(t,Ge,l,ss(l)),Go(Bp,t)}}function Hp(l,t,n){l==="focusin"?(er(),Xe=t,Ge=n,Xe.attachEvent("onpropertychange",ar)):l==="focusout"&&er()}function qp(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Ya(Ge)}function Yp(l,t){if(l==="click")return Ya(t)}function Xp(l,t){if(l==="input"||l==="change")return Ya(t)}function Gp(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var st=typeof Object.is=="function"?Object.is:Gp;function Qe(l,t){if(st(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var n=Object.keys(l),e=Object.keys(t);if(n.length!==e.length)return!1;for(e=0;e<n.length;e++){var a=n[e];if(!$i.call(t,a)||!st(l[a],t[a]))return!1}return!0}function ir(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function sr(l,t){var n=ir(l);l=0;for(var e;n;){if(n.nodeType===3){if(e=l+n.textContent.length,l<=t&&e>=t)return{node:n,offset:t-l};l=e}l:{for(;n;){if(n.nextSibling){n=n.nextSibling;break l}n=n.parentNode}n=void 0}n=ir(n)}}function ur(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?ur(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function or(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=xa(l.document);t instanceof l.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)l=t.contentWindow;else break;t=xa(l.document)}return t}function ys(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Qp=Rt&&"documentMode"in document&&11>=document.documentMode,te=null,vs=null,Le=null,bs=!1;function rr(l,t,n){var e=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bs||te==null||te!==xa(e)||(e=te,"selectionStart"in e&&ys(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Le&&Qe(Le,e)||(Le=e,e=wi(vs,"onSelect"),0<e.length&&(t=new Ha("onSelect","select",null,t,n),l.push({event:t,listeners:e}),t.target=te)))}function On(l,t){var n={};return n[l.toLowerCase()]=t.toLowerCase(),n["Webkit"+l]="webkit"+t,n["Moz"+l]="moz"+t,n}var ne={animationend:On("Animation","AnimationEnd"),animationiteration:On("Animation","AnimationIteration"),animationstart:On("Animation","AnimationStart"),transitionrun:On("Transition","TransitionRun"),transitionstart:On("Transition","TransitionStart"),transitioncancel:On("Transition","TransitionCancel"),transitionend:On("Transition","TransitionEnd")},Ss={},cr={};Rt&&(cr=document.createElement("div").style,"AnimationEvent"in window||(delete ne.animationend.animation,delete ne.animationiteration.animation,delete ne.animationstart.animation),"TransitionEvent"in window||delete ne.transitionend.transition);function Cn(l){if(Ss[l])return Ss[l];if(!ne[l])return l;var t=ne[l],n;for(n in t)if(t.hasOwnProperty(n)&&n in cr)return Ss[l]=t[n];return l}var gr=Cn("animationend"),fr=Cn("animationiteration"),pr=Cn("animationstart"),Lp=Cn("transitionrun"),Vp=Cn("transitionstart"),Zp=Cn("transitioncancel"),dr=Cn("transitionend"),mr=new Map,zs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zs.push("scrollEnd");function Mt(l,t){mr.set(l,t),jn(t,[l])}var Xa=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ht=[],ee=0,_s=0;function Ga(){for(var l=ee,t=_s=ee=0;t<l;){var n=ht[t];ht[t++]=null;var e=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,e!==null&&a!==null){var s=e.pending;s===null?a.next=a:(a.next=s.next,s.next=a),e.pending=a}i!==0&&hr(n,a,i)}}function Qa(l,t,n,e){ht[ee++]=l,ht[ee++]=t,ht[ee++]=n,ht[ee++]=e,_s|=e,l.lanes|=e,l=l.alternate,l!==null&&(l.lanes|=e)}function Ts(l,t,n,e){return Qa(l,t,n,e),La(l)}function xn(l,t){return Qa(l,null,null,t),La(l)}function hr(l,t,n){l.lanes|=n;var e=l.alternate;e!==null&&(e.lanes|=n);for(var a=!1,i=l.return;i!==null;)i.childLanes|=n,e=i.alternate,e!==null&&(e.childLanes|=n),i.tag===22&&(l=i.stateNode,l===null||l._visibility&1||(a=!0)),l=i,i=i.return;return l.tag===3?(i=l.stateNode,a&&t!==null&&(a=31-it(n),l=i.hiddenUpdates,e=l[a],e===null?l[a]=[t]:e.push(t),t.lane=n|536870912),i):null}function La(l){if(50<ga)throw ga=0,xu=null,Error(p(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ae={};function Kp(l,t,n,e){this.tag=l,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(l,t,n,e){return new Kp(l,t,n,e)}function As(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Bt(l,t){var n=l.alternate;return n===null?(n=ut(l.tag,t,l.key,l.mode),n.elementType=l.elementType,n.type=l.type,n.stateNode=l.stateNode,n.alternate=l,l.alternate=n):(n.pendingProps=t,n.type=l.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=l.flags&65011712,n.childLanes=l.childLanes,n.lanes=l.lanes,n.child=l.child,n.memoizedProps=l.memoizedProps,n.memoizedState=l.memoizedState,n.updateQueue=l.updateQueue,t=l.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=l.sibling,n.index=l.index,n.ref=l.ref,n.refCleanup=l.refCleanup,n}function yr(l,t){l.flags&=65011714;var n=l.alternate;return n===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,l.type=n.type,t=n.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Va(l,t,n,e,a,i){var s=0;if(e=l,typeof l=="function")As(l)&&(s=1);else if(typeof l=="string")s=Fd(l,n,B.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Jl:return l=ut(31,n,t,a),l.elementType=Jl,l.lanes=i,l;case _l:return Nn(n.children,a,i,t);case Ul:s=8,a|=24;break;case bl:return l=ut(12,n,t,a|2),l.elementType=bl,l.lanes=i,l;case Vl:return l=ut(13,n,t,a),l.elementType=Vl,l.lanes=i,l;case Sl:return l=ut(19,n,t,a),l.elementType=Sl,l.lanes=i,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case ul:s=10;break l;case El:s=9;break l;case Tl:s=11;break l;case $:s=14;break l;case Bl:s=16,e=null;break l}s=29,n=Error(p(130,l===null?"null":typeof l,"")),e=null}return t=ut(s,n,t,a),t.elementType=l,t.type=e,t.lanes=i,t}function Nn(l,t,n,e){return l=ut(7,l,e,t),l.lanes=n,l}function Ms(l,t,n){return l=ut(6,l,null,t),l.lanes=n,l}function vr(l){var t=ut(18,null,null,0);return t.stateNode=l,t}function Es(l,t,n){return t=ut(4,l.children!==null?l.children:[],l.key,t),t.lanes=n,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var br=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var n=br.get(l);return n!==void 0?n:(t={value:l,source:t,stack:vo(t)},br.set(l,t),t)}return{value:l,source:t,stack:vo(t)}}var ie=[],se=0,Za=null,Ve=0,vt=[],bt=0,tn=null,jt=1,Dt="";function Ht(l,t){ie[se++]=Ve,ie[se++]=Za,Za=l,Ve=t}function Sr(l,t,n){vt[bt++]=jt,vt[bt++]=Dt,vt[bt++]=tn,tn=l;var e=jt;l=Dt;var a=32-it(e)-1;e&=~(1<<a),n+=1;var i=32-it(t)+a;if(30<i){var s=a-a%5;i=(e&(1<<s)-1).toString(32),e>>=s,a-=s,jt=1<<32-it(t)+a|n<<a|e,Dt=i+l}else jt=1<<i|n<<a|e,Dt=l}function ws(l){l.return!==null&&(Ht(l,1),Sr(l,1,0))}function js(l){for(;l===Za;)Za=ie[--se],ie[se]=null,Ve=ie[--se],ie[se]=null;for(;l===tn;)tn=vt[--bt],vt[bt]=null,Dt=vt[--bt],vt[bt]=null,jt=vt[--bt],vt[bt]=null}function zr(l,t){vt[bt++]=jt,vt[bt++]=Dt,vt[bt++]=tn,jt=t.id,Dt=t.overflow,tn=l}var Xl=null,dl=null,ll=!1,nn=null,St=!1,Ds=Error(p(519));function en(l){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ze(yt(t,l)),Ds}function _r(l){var t=l.stateNode,n=l.type,e=l.memoizedProps;switch(t[Yl]=l,t[Wl]=e,n){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(n=0;n<pa.length;n++)W(pa[n],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Ro(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Ho(t,e.value,e.defaultValue,e.children)}n=e.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||e.suppressHydrationWarning===!0||Yg(t.textContent,n)?(e.popover!=null&&(W("beforetoggle",t),W("toggle",t)),e.onScroll!=null&&W("scroll",t),e.onScrollEnd!=null&&W("scrollend",t),e.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||en(l,!0)}function Tr(l){for(Xl=l.return;Xl;)switch(Xl.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Xl=Xl.return}}function ue(l){if(l!==Xl)return!1;if(!ll)return Tr(l),ll=!0,!1;var t=l.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=l.type,n=!(n!=="form"&&n!=="button")||$u(l.type,l.memoizedProps)),n=!n),n&&dl&&en(l),Tr(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));dl=Jg(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));dl=Jg(l)}else t===27?(t=dl,vn(l.type)?(l=Iu,Iu=null,dl=l):dl=t):dl=Xl?_t(l.stateNode.nextSibling):null;return!0}function Un(){dl=Xl=null,ll=!1}function Os(){var l=nn;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),nn=null),l}function Ze(l){nn===null?nn=[l]:nn.push(l)}var Cs=g(null),Rn=null,qt=null;function an(l,t,n){O(Cs,t._currentValue),t._currentValue=n}function Yt(l){l._currentValue=Cs.current,M(Cs)}function xs(l,t,n){for(;l!==null;){var e=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),l===n)break;l=l.return}}function Ns(l,t,n,e){var a=l.child;for(a!==null&&(a.return=l);a!==null;){var i=a.dependencies;if(i!==null){var s=a.child;i=i.firstContext;l:for(;i!==null;){var u=i;i=a;for(var o=0;o<t.length;o++)if(u.context===t[o]){i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),xs(i.return,n,l),e||(s=null);break l}i=u.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(p(341));s.lanes|=n,i=s.alternate,i!==null&&(i.lanes|=n),xs(s,n,l),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===l){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function oe(l,t,n,e){l=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(p(387));if(s=s.memoizedProps,s!==null){var u=a.type;st(a.pendingProps.value,s.value)||(l!==null?l.push(u):l=[u])}}else if(a===al.current){if(s=a.alternate,s===null)throw Error(p(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(l!==null?l.push(va):l=[va])}a=a.return}l!==null&&Ns(t,l,n,e),t.flags|=262144}function Ka(l){for(l=l.firstContext;l!==null;){if(!st(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Bn(l){Rn=l,qt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Gl(l){return Ar(Rn,l)}function $a(l,t){return Rn===null&&Bn(l),Ar(l,t)}function Ar(l,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},qt===null){if(l===null)throw Error(p(308));qt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else qt=qt.next=t;return n}var $p=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(n,e){l.push(e)}};this.abort=function(){t.aborted=!0,l.forEach(function(n){return n()})}},Jp=v.unstable_scheduleCallback,kp=v.unstable_NormalPriority,Ol={$$typeof:ul,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Us(){return{controller:new $p,data:new Map,refCount:0}}function Ke(l){l.refCount--,l.refCount===0&&Jp(kp,function(){l.controller.abort()})}var $e=null,Rs=0,re=0,ce=null;function Wp(l,t){if($e===null){var n=$e=[];Rs=0,re=qu(),ce={status:"pending",value:void 0,then:function(e){n.push(e)}}}return Rs++,t.then(Mr,Mr),t}function Mr(){if(--Rs===0&&$e!==null){ce!==null&&(ce.status="fulfilled");var l=$e;$e=null,re=0,ce=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fp(l,t){var n=[],e={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return l.then(function(){e.status="fulfilled",e.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(e.status="rejected",e.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),e}var Er=z.S;z.S=function(l,t){rg=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wp(l,t),Er!==null&&Er(l,t)};var Hn=g(null);function Bs(){var l=Hn.current;return l!==null?l:pl.pooledCache}function Ja(l,t){t===null?O(Hn,Hn.current):O(Hn,t.pool)}function wr(){var l=Bs();return l===null?null:{parent:Ol._currentValue,pool:l}}var ge=Error(p(460)),Hs=Error(p(474)),ka=Error(p(542)),Wa={then:function(){}};function jr(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Dr(l,t,n){switch(n=l[n],n===void 0?l.push(t):n!==t&&(t.then(Ut,Ut),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Cr(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=pl,l!==null&&100<l.shellSuspendCounter)throw Error(p(482));l=t,l.status="pending",l.then(function(e){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=e}},function(e){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Cr(l),l}throw Yn=t,ge}}function qn(l){try{var t=l._init;return t(l._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Yn=n,ge):n}}var Yn=null;function Or(){if(Yn===null)throw Error(p(459));var l=Yn;return Yn=null,l}function Cr(l){if(l===ge||l===ka)throw Error(p(483))}var fe=null,Je=0;function Fa(l){var t=Je;return Je+=1,fe===null&&(fe=[]),Dr(fe,l,t)}function ke(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Ia(l,t){throw t.$$typeof===K?Error(p(525)):(l=Object.prototype.toString.call(t),Error(p(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function xr(l){function t(f,c){if(l){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!l)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function e(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function a(f,c){return f=Bt(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,l?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=67108866,c):m):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function s(f){return l&&f.alternate===null&&(f.flags|=67108866),f}function u(f,c,m,_){return c===null||c.tag!==6?(c=Ms(m,f.mode,_),c.return=f,c):(c=a(c,m),c.return=f,c)}function o(f,c,m,_){var Y=m.type;return Y===_l?S(f,c,m.props.children,_,m.key):c!==null&&(c.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Bl&&qn(Y)===c.type)?(c=a(c,m.props),ke(c,m),c.return=f,c):(c=Va(m.type,m.key,m.props,null,f.mode,_),ke(c,m),c.return=f,c)}function h(f,c,m,_){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Es(m,f.mode,_),c.return=f,c):(c=a(c,m.children||[]),c.return=f,c)}function S(f,c,m,_,Y){return c===null||c.tag!==7?(c=Nn(m,f.mode,_,Y),c.return=f,c):(c=a(c,m),c.return=f,c)}function A(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ms(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yl:return m=Va(c.type,c.key,c.props,null,f.mode,m),ke(m,c),m.return=f,m;case vl:return c=Es(c,f.mode,m),c.return=f,c;case Bl:return c=qn(c),A(f,c,m)}if(At(c)||kl(c))return c=Nn(c,f.mode,m,null),c.return=f,c;if(typeof c.then=="function")return A(f,Fa(c),m);if(c.$$typeof===ul)return A(f,$a(f,c),m);Ia(f,c)}return null}function y(f,c,m,_){var Y=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return Y!==null?null:u(f,c,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:return m.key===Y?o(f,c,m,_):null;case vl:return m.key===Y?h(f,c,m,_):null;case Bl:return m=qn(m),y(f,c,m,_)}if(At(m)||kl(m))return Y!==null?null:S(f,c,m,_,null);if(typeof m.then=="function")return y(f,c,Fa(m),_);if(m.$$typeof===ul)return y(f,c,$a(f,m),_);Ia(f,m)}return null}function b(f,c,m,_,Y){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(m)||null,u(c,f,""+_,Y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yl:return f=f.get(_.key===null?m:_.key)||null,o(c,f,_,Y);case vl:return f=f.get(_.key===null?m:_.key)||null,h(c,f,_,Y);case Bl:return _=qn(_),b(f,c,m,_,Y)}if(At(_)||kl(_))return f=f.get(m)||null,S(c,f,_,Y,null);if(typeof _.then=="function")return b(f,c,m,Fa(_),Y);if(_.$$typeof===ul)return b(f,c,m,$a(c,_),Y);Ia(c,_)}return null}function R(f,c,m,_){for(var Y=null,tl=null,H=c,Z=c=0,I=null;H!==null&&Z<m.length;Z++){H.index>Z?(I=H,H=null):I=H.sibling;var nl=y(f,H,m[Z],_);if(nl===null){H===null&&(H=I);break}l&&H&&nl.alternate===null&&t(f,H),c=i(nl,c,Z),tl===null?Y=nl:tl.sibling=nl,tl=nl,H=I}if(Z===m.length)return n(f,H),ll&&Ht(f,Z),Y;if(H===null){for(;Z<m.length;Z++)H=A(f,m[Z],_),H!==null&&(c=i(H,c,Z),tl===null?Y=H:tl.sibling=H,tl=H);return ll&&Ht(f,Z),Y}for(H=e(H);Z<m.length;Z++)I=b(H,f,Z,m[Z],_),I!==null&&(l&&I.alternate!==null&&H.delete(I.key===null?Z:I.key),c=i(I,c,Z),tl===null?Y=I:tl.sibling=I,tl=I);return l&&H.forEach(function(Tn){return t(f,Tn)}),ll&&Ht(f,Z),Y}function X(f,c,m,_){if(m==null)throw Error(p(151));for(var Y=null,tl=null,H=c,Z=c=0,I=null,nl=m.next();H!==null&&!nl.done;Z++,nl=m.next()){H.index>Z?(I=H,H=null):I=H.sibling;var Tn=y(f,H,nl.value,_);if(Tn===null){H===null&&(H=I);break}l&&H&&Tn.alternate===null&&t(f,H),c=i(Tn,c,Z),tl===null?Y=Tn:tl.sibling=Tn,tl=Tn,H=I}if(nl.done)return n(f,H),ll&&Ht(f,Z),Y;if(H===null){for(;!nl.done;Z++,nl=m.next())nl=A(f,nl.value,_),nl!==null&&(c=i(nl,c,Z),tl===null?Y=nl:tl.sibling=nl,tl=nl);return ll&&Ht(f,Z),Y}for(H=e(H);!nl.done;Z++,nl=m.next())nl=b(H,f,Z,nl.value,_),nl!==null&&(l&&nl.alternate!==null&&H.delete(nl.key===null?Z:nl.key),c=i(nl,c,Z),tl===null?Y=nl:tl.sibling=nl,tl=nl);return l&&H.forEach(function(om){return t(f,om)}),ll&&Ht(f,Z),Y}function gl(f,c,m,_){if(typeof m=="object"&&m!==null&&m.type===_l&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:l:{for(var Y=m.key;c!==null;){if(c.key===Y){if(Y=m.type,Y===_l){if(c.tag===7){n(f,c.sibling),_=a(c,m.props.children),_.return=f,f=_;break l}}else if(c.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Bl&&qn(Y)===c.type){n(f,c.sibling),_=a(c,m.props),ke(_,m),_.return=f,f=_;break l}n(f,c);break}else t(f,c);c=c.sibling}m.type===_l?(_=Nn(m.props.children,f.mode,_,m.key),_.return=f,f=_):(_=Va(m.type,m.key,m.props,null,f.mode,_),ke(_,m),_.return=f,f=_)}return s(f);case vl:l:{for(Y=m.key;c!==null;){if(c.key===Y)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),_=a(c,m.children||[]),_.return=f,f=_;break l}else{n(f,c);break}else t(f,c);c=c.sibling}_=Es(m,f.mode,_),_.return=f,f=_}return s(f);case Bl:return m=qn(m),gl(f,c,m,_)}if(At(m))return R(f,c,m,_);if(kl(m)){if(Y=kl(m),typeof Y!="function")throw Error(p(150));return m=Y.call(m),X(f,c,m,_)}if(typeof m.then=="function")return gl(f,c,Fa(m),_);if(m.$$typeof===ul)return gl(f,c,$a(f,m),_);Ia(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),_=a(c,m),_.return=f,f=_):(n(f,c),_=Ms(m,f.mode,_),_.return=f,f=_),s(f)):n(f,c)}return function(f,c,m,_){try{Je=0;var Y=gl(f,c,m,_);return fe=null,Y}catch(H){if(H===ge||H===ka)throw H;var tl=ut(29,H,null,f.mode);return tl.lanes=_,tl.return=f,tl}}}var Xn=xr(!0),Nr=xr(!1),sn=!1;function qs(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ys(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function un(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function on(l,t,n){var e=l.updateQueue;if(e===null)return null;if(e=e.shared,(el&2)!==0){var a=e.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t,t=La(l),hr(l,null,n),t}return Qa(l,e,t,n),La(l)}function We(l,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var e=t.lanes;e&=l.pendingLanes,n|=e,t.lanes=n,Ao(l,n)}}function Xs(l,t){var n=l.updateQueue,e=l.alternate;if(e!==null&&(e=e.updateQueue,n===e)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:e.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},l.updateQueue=n;return}l=n.lastBaseUpdate,l===null?n.firstBaseUpdate=t:l.next=t,n.lastBaseUpdate=t}var Gs=!1;function Fe(){if(Gs){var l=ce;if(l!==null)throw l}}function Ie(l,t,n,e){Gs=!1;var a=l.updateQueue;sn=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var o=u,h=o.next;o.next=null,s===null?i=h:s.next=h,s=o;var S=l.alternate;S!==null&&(S=S.updateQueue,u=S.lastBaseUpdate,u!==s&&(u===null?S.firstBaseUpdate=h:u.next=h,S.lastBaseUpdate=o))}if(i!==null){var A=a.baseState;s=0,S=h=o=null,u=i;do{var y=u.lane&-536870913,b=y!==u.lane;if(b?(F&y)===y:(e&y)===y){y!==0&&y===re&&(Gs=!0),S!==null&&(S=S.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});l:{var R=l,X=u;y=t;var gl=n;switch(X.tag){case 1:if(R=X.payload,typeof R=="function"){A=R.call(gl,A,y);break l}A=R;break l;case 3:R.flags=R.flags&-65537|128;case 0:if(R=X.payload,y=typeof R=="function"?R.call(gl,A,y):R,y==null)break l;A=N({},A,y);break l;case 2:sn=!0}}y=u.callback,y!==null&&(l.flags|=64,b&&(l.flags|=8192),b=a.callbacks,b===null?a.callbacks=[y]:b.push(y))}else b={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},S===null?(h=S=b,o=A):S=S.next=b,s|=y;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;b=u,u=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);S===null&&(o=A),a.baseState=o,a.firstBaseUpdate=h,a.lastBaseUpdate=S,i===null&&(a.shared.lanes=0),pn|=s,l.lanes=s,l.memoizedState=A}}function Ur(l,t){if(typeof l!="function")throw Error(p(191,l));l.call(t)}function Rr(l,t){var n=l.callbacks;if(n!==null)for(l.callbacks=null,l=0;l<n.length;l++)Ur(n[l],t)}var pe=g(null),Pa=g(0);function Br(l,t){l=Jt,O(Pa,l),O(pe,t),Jt=l|t.baseLanes}function Qs(){O(Pa,Jt),O(pe,pe.current)}function Ls(){Jt=Pa.current,M(pe),M(Pa)}var ot=g(null),zt=null;function rn(l){var t=l.alternate;O(jl,jl.current&1),O(ot,l),zt===null&&(t===null||pe.current!==null||t.memoizedState!==null)&&(zt=l)}function Vs(l){O(jl,jl.current),O(ot,l),zt===null&&(zt=l)}function Hr(l){l.tag===22?(O(jl,jl.current),O(ot,l),zt===null&&(zt=l)):cn()}function cn(){O(jl,jl.current),O(ot,ot.current)}function rt(l){M(ot),zt===l&&(zt=null),M(jl)}var jl=g(0);function li(l){for(var t=l;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Wu(n)||Fu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,V=null,rl=null,Cl=null,ti=!1,de=!1,Gn=!1,ni=0,Pe=0,me=null,Ip=0;function Al(){throw Error(p(321))}function Zs(l,t){if(t===null)return!1;for(var n=0;n<t.length&&n<l.length;n++)if(!st(l[n],t[n]))return!1;return!0}function Ks(l,t,n,e,a,i){return Xt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=l===null||l.memoizedState===null?Sc:uu,Gn=!1,i=n(e,a),Gn=!1,de&&(i=Yr(t,n,e,a)),qr(l),i}function qr(l){z.H=na;var t=rl!==null&&rl.next!==null;if(Xt=0,Cl=rl=V=null,ti=!1,Pe=0,me=null,t)throw Error(p(300));l===null||xl||(l=l.dependencies,l!==null&&Ka(l)&&(xl=!0))}function Yr(l,t,n,e){V=l;var a=0;do{if(de&&(me=null),Pe=0,de=!1,25<=a)throw Error(p(301));if(a+=1,Cl=rl=null,l.updateQueue!=null){var i=l.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=zc,i=t(n,e)}while(de);return i}function Pp(){var l=z.H,t=l.useState()[0];return t=typeof t.then=="function"?la(t):t,l=l.useState()[0],(rl!==null?rl.memoizedState:null)!==l&&(V.flags|=1024),t}function $s(){var l=ni!==0;return ni=0,l}function Js(l,t,n){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~n}function ks(l){if(ti){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ti=!1}Xt=0,Cl=rl=V=null,de=!1,Pe=ni=0,me=null}function $l(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cl===null?V.memoizedState=Cl=l:Cl=Cl.next=l,Cl}function Dl(){if(rl===null){var l=V.alternate;l=l!==null?l.memoizedState:null}else l=rl.next;var t=Cl===null?V.memoizedState:Cl.next;if(t!==null)Cl=t,rl=l;else{if(l===null)throw V.alternate===null?Error(p(467)):Error(p(310));rl=l,l={memoizedState:rl.memoizedState,baseState:rl.baseState,baseQueue:rl.baseQueue,queue:rl.queue,next:null},Cl===null?V.memoizedState=Cl=l:Cl=Cl.next=l}return Cl}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function la(l){var t=Pe;return Pe+=1,me===null&&(me=[]),l=Dr(me,l,t),t=V,(Cl===null?t.memoizedState:Cl.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Sc:uu),l}function ai(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return la(l);if(l.$$typeof===ul)return Gl(l)}throw Error(p(438,String(l)))}function Ws(l){var t=null,n=V.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var e=V.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ei(),V.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(l),e=0;e<l;e++)n[e]=Ft;return t.index++,n}function Gt(l,t){return typeof t=="function"?t(l):t}function ii(l){var t=Dl();return Fs(t,rl,l)}function Fs(l,t,n){var e=l.queue;if(e===null)throw Error(p(311));e.lastRenderedReducer=n;var a=l.baseQueue,i=e.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}t.baseQueue=a=i,e.pending=null}if(i=l.baseState,a===null)l.memoizedState=i;else{t=a.next;var u=s=null,o=null,h=t,S=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(F&A)===A:(Xt&A)===A){var y=h.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===re&&(S=!0);else if((Xt&y)===y){h=h.next,y===re&&(S=!0);continue}else A={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(u=o=A,s=i):o=o.next=A,V.lanes|=y,pn|=y;A=h.action,Gn&&n(i,A),i=h.hasEagerState?h.eagerState:n(i,A)}else y={lane:A,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(u=o=y,s=i):o=o.next=y,V.lanes|=A,pn|=A;h=h.next}while(h!==null&&h!==t);if(o===null?s=i:o.next=u,!st(i,l.memoizedState)&&(xl=!0,S&&(n=ce,n!==null)))throw n;l.memoizedState=i,l.baseState=s,l.baseQueue=o,e.lastRenderedState=i}return a===null&&(e.lanes=0),[l.memoizedState,e.dispatch]}function Is(l){var t=Dl(),n=t.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=l;var e=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do i=l(i,s.action),s=s.next;while(s!==a);st(i,t.memoizedState)||(xl=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,e]}function Xr(l,t,n){var e=V,a=Dl(),i=ll;if(i){if(n===void 0)throw Error(p(407));n=n()}else n=t();var s=!st((rl||a).memoizedState,n);if(s&&(a.memoizedState=n,xl=!0),a=a.queue,tu(Lr.bind(null,e,a,l),[l]),a.getSnapshot!==t||s||Cl!==null&&Cl.memoizedState.tag&1){if(e.flags|=2048,he(9,{destroy:void 0},Qr.bind(null,e,a,n,t),null),pl===null)throw Error(p(349));i||(Xt&127)!==0||Gr(e,t,n)}return n}function Gr(l,t,n){l.flags|=16384,l={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t=ei(),V.updateQueue=t,t.stores=[l]):(n=t.stores,n===null?t.stores=[l]:n.push(l))}function Qr(l,t,n,e){t.value=n,t.getSnapshot=e,Vr(t)&&Zr(l)}function Lr(l,t,n){return n(function(){Vr(t)&&Zr(l)})}function Vr(l){var t=l.getSnapshot;l=l.value;try{var n=t();return!st(l,n)}catch{return!0}}function Zr(l){var t=xn(l,2);t!==null&&nt(t,l,2)}function Ps(l){var t=$l();if(typeof l=="function"){var n=l;if(l=n(),Gn){It(!0);try{n()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Kr(l,t,n,e){return l.baseState=n,Fs(l,rl,typeof e=="function"?e:Gt)}function ld(l,t,n,e,a){if(oi(l))throw Error(p(485));if(l=t.action,l!==null){var i={payload:a,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};z.T!==null?n(!0):i.isTransition=!1,e(i),n=t.pending,n===null?(i.next=t.pending=i,$r(t,i)):(i.next=n.next,t.pending=n.next=i)}}function $r(l,t){var n=t.action,e=t.payload,a=l.state;if(t.isTransition){var i=z.T,s={};z.T=s;try{var u=n(a,e),o=z.S;o!==null&&o(s,u),Jr(l,t,u)}catch(h){lu(l,t,h)}finally{i!==null&&s.types!==null&&(i.types=s.types),z.T=i}}else try{i=n(a,e),Jr(l,t,i)}catch(h){lu(l,t,h)}}function Jr(l,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(e){kr(l,t,e)},function(e){return lu(l,t,e)}):kr(l,t,n)}function kr(l,t,n){t.status="fulfilled",t.value=n,Wr(t),l.state=n,t=l.pending,t!==null&&(n=t.next,n===t?l.pending=null:(n=n.next,t.next=n,$r(l,n)))}function lu(l,t,n){var e=l.pending;if(l.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=n,Wr(t),t=t.next;while(t!==e)}l.action=null}function Wr(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fr(l,t){return t}function Ir(l,t){if(ll){var n=pl.formState;if(n!==null){l:{var e=V;if(ll){if(dl){t:{for(var a=dl,i=St;a.nodeType!==8;){if(!i){a=null;break t}if(a=_t(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){dl=_t(a.nextSibling),e=a.data==="F!";break l}}en(e)}e=!1}e&&(t=n[0])}}return n=$l(),n.memoizedState=n.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:t},n.queue=e,n=yc.bind(null,V,e),e.dispatch=n,e=Ps(!1),i=su.bind(null,V,!1,e.queue),e=$l(),a={state:t,dispatch:null,action:l,pending:null},e.queue=a,n=ld.bind(null,V,a,i,n),a.dispatch=n,e.memoizedState=l,[t,n,!1]}function Pr(l){var t=Dl();return lc(t,rl,l)}function lc(l,t,n){if(t=Fs(l,t,Fr)[0],l=ii(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=la(t)}catch(s){throw s===ge?ka:s}else e=t;t=Dl();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(V.flags|=2048,he(9,{destroy:void 0},td.bind(null,a,n),null)),[e,i,l]}function td(l,t){l.action=t}function tc(l){var t=Dl(),n=rl;if(n!==null)return lc(t,n,l);Dl(),t=t.memoizedState,n=Dl();var e=n.queue.dispatch;return n.memoizedState=l,[t,e,!1]}function he(l,t,n,e){return l={tag:l,create:n,deps:e,inst:t,next:null},t=V.updateQueue,t===null&&(t=ei(),V.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=l.next=l:(e=n.next,n.next=l,l.next=e,t.lastEffect=l),l}function nc(){return Dl().memoizedState}function si(l,t,n,e){var a=$l();V.flags|=l,a.memoizedState=he(1|t,{destroy:void 0},n,e===void 0?null:e)}function ui(l,t,n,e){var a=Dl();e=e===void 0?null:e;var i=a.memoizedState.inst;rl!==null&&e!==null&&Zs(e,rl.memoizedState.deps)?a.memoizedState=he(t,i,n,e):(V.flags|=l,a.memoizedState=he(1|t,i,n,e))}function ec(l,t){si(8390656,8,l,t)}function tu(l,t){ui(2048,8,l,t)}function nd(l){V.flags|=4;var t=V.updateQueue;if(t===null)t=ei(),V.updateQueue=t,t.events=[l];else{var n=t.events;n===null?t.events=[l]:n.push(l)}}function ac(l){var t=Dl().memoizedState;return nd({ref:t,nextImpl:l}),function(){if((el&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function ic(l,t){return ui(4,2,l,t)}function sc(l,t){return ui(4,4,l,t)}function uc(l,t){if(typeof t=="function"){l=l();var n=t(l);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function oc(l,t,n){n=n!=null?n.concat([l]):null,ui(4,4,uc.bind(null,t,l),n)}function nu(){}function rc(l,t){var n=Dl();t=t===void 0?null:t;var e=n.memoizedState;return t!==null&&Zs(t,e[1])?e[0]:(n.memoizedState=[l,t],l)}function cc(l,t){var n=Dl();t=t===void 0?null:t;var e=n.memoizedState;if(t!==null&&Zs(t,e[1]))return e[0];if(e=l(),Gn){It(!0);try{l()}finally{It(!1)}}return n.memoizedState=[e,t],e}function eu(l,t,n){return n===void 0||(Xt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=n,l=gg(),V.lanes|=l,pn|=l,n)}function gc(l,t,n,e){return st(n,t)?n:pe.current!==null?(l=eu(l,n,e),st(l,t)||(xl=!0),l):(Xt&42)===0||(Xt&1073741824)!==0&&(F&261930)===0?(xl=!0,l.memoizedState=n):(l=gg(),V.lanes|=l,pn|=l,t)}function fc(l,t,n,e,a){var i=j.p;j.p=i!==0&&8>i?i:8;var s=z.T,u={};z.T=u,su(l,!1,t,n);try{var o=a(),h=z.S;if(h!==null&&h(u,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=Fp(o,e);ta(l,t,S,ft(l))}else ta(l,t,e,ft(l))}catch(A){ta(l,t,{then:function(){},status:"rejected",reason:A},ft())}finally{j.p=i,s!==null&&u.types!==null&&(s.types=u.types),z.T=s}}function ed(){}function au(l,t,n,e){if(l.tag!==5)throw Error(p(476));var a=pc(l).queue;fc(l,a,t,G,n===null?ed:function(){return dc(l),n(e)})}function pc(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:G},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:n},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function dc(l){var t=pc(l);t.next===null&&(t=l.alternate.memoizedState),ta(l,t.next.queue,{},ft())}function iu(){return Gl(va)}function mc(){return Dl().memoizedState}function hc(){return Dl().memoizedState}function ad(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var n=ft();l=un(n);var e=on(t,l,n);e!==null&&(nt(e,t,n),We(e,t,n)),t={cache:Us()},l.payload=t;return}t=t.return}}function id(l,t,n){var e=ft();n={lane:e,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},oi(l)?vc(t,n):(n=Ts(l,t,n,e),n!==null&&(nt(n,l,e),bc(n,t,e)))}function yc(l,t,n){var e=ft();ta(l,t,n,e)}function ta(l,t,n,e){var a={lane:e,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(oi(l))vc(t,a);else{var i=l.alternate;if(l.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,u=i(s,n);if(a.hasEagerState=!0,a.eagerState=u,st(u,s))return Qa(l,t,a,0),pl===null&&Ga(),!1}catch{}if(n=Ts(l,t,a,e),n!==null)return nt(n,l,e),bc(n,t,e),!0}return!1}function su(l,t,n,e){if(e={lane:2,revertLane:qu(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},oi(l)){if(t)throw Error(p(479))}else t=Ts(l,n,e,2),t!==null&&nt(t,l,2)}function oi(l){var t=l.alternate;return l===V||t!==null&&t===V}function vc(l,t){de=ti=!0;var n=l.pending;n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t}function bc(l,t,n){if((n&4194048)!==0){var e=t.lanes;e&=l.pendingLanes,n|=e,t.lanes=n,Ao(l,n)}}var na={readContext:Gl,use:ai,useCallback:Al,useContext:Al,useEffect:Al,useImperativeHandle:Al,useLayoutEffect:Al,useInsertionEffect:Al,useMemo:Al,useReducer:Al,useRef:Al,useState:Al,useDebugValue:Al,useDeferredValue:Al,useTransition:Al,useSyncExternalStore:Al,useId:Al,useHostTransitionStatus:Al,useFormState:Al,useActionState:Al,useOptimistic:Al,useMemoCache:Al,useCacheRefresh:Al};na.useEffectEvent=Al;var Sc={readContext:Gl,use:ai,useCallback:function(l,t){return $l().memoizedState=[l,t===void 0?null:t],l},useContext:Gl,useEffect:ec,useImperativeHandle:function(l,t,n){n=n!=null?n.concat([l]):null,si(4194308,4,uc.bind(null,t,l),n)},useLayoutEffect:function(l,t){return si(4194308,4,l,t)},useInsertionEffect:function(l,t){si(4,2,l,t)},useMemo:function(l,t){var n=$l();t=t===void 0?null:t;var e=l();if(Gn){It(!0);try{l()}finally{It(!1)}}return n.memoizedState=[e,t],e},useReducer:function(l,t,n){var e=$l();if(n!==void 0){var a=n(t);if(Gn){It(!0);try{n(t)}finally{It(!1)}}}else a=t;return e.memoizedState=e.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:a},e.queue=l,l=l.dispatch=id.bind(null,V,l),[e.memoizedState,l]},useRef:function(l){var t=$l();return l={current:l},t.memoizedState=l},useState:function(l){l=Ps(l);var t=l.queue,n=yc.bind(null,V,t);return t.dispatch=n,[l.memoizedState,n]},useDebugValue:nu,useDeferredValue:function(l,t){var n=$l();return eu(n,l,t)},useTransition:function(){var l=Ps(!1);return l=fc.bind(null,V,l.queue,!0,!1),$l().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,n){var e=V,a=$l();if(ll){if(n===void 0)throw Error(p(407));n=n()}else{if(n=t(),pl===null)throw Error(p(349));(F&127)!==0||Gr(e,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,ec(Lr.bind(null,e,i,l),[l]),e.flags|=2048,he(9,{destroy:void 0},Qr.bind(null,e,i,n,t),null),n},useId:function(){var l=$l(),t=pl.identifierPrefix;if(ll){var n=Dt,e=jt;n=(e&~(1<<32-it(e)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ni++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ip++,t="_"+t+"r_"+n.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:iu,useFormState:Ir,useActionState:Ir,useOptimistic:function(l){var t=$l();t.memoizedState=t.baseState=l;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=su.bind(null,V,!0,n),n.dispatch=t,[l,t]},useMemoCache:Ws,useCacheRefresh:function(){return $l().memoizedState=ad.bind(null,V)},useEffectEvent:function(l){var t=$l(),n={impl:l};return t.memoizedState=n,function(){if((el&2)!==0)throw Error(p(440));return n.impl.apply(void 0,arguments)}}},uu={readContext:Gl,use:ai,useCallback:rc,useContext:Gl,useEffect:tu,useImperativeHandle:oc,useInsertionEffect:ic,useLayoutEffect:sc,useMemo:cc,useReducer:ii,useRef:nc,useState:function(){return ii(Gt)},useDebugValue:nu,useDeferredValue:function(l,t){var n=Dl();return gc(n,rl.memoizedState,l,t)},useTransition:function(){var l=ii(Gt)[0],t=Dl().memoizedState;return[typeof l=="boolean"?l:la(l),t]},useSyncExternalStore:Xr,useId:mc,useHostTransitionStatus:iu,useFormState:Pr,useActionState:Pr,useOptimistic:function(l,t){var n=Dl();return Kr(n,rl,l,t)},useMemoCache:Ws,useCacheRefresh:hc};uu.useEffectEvent=ac;var zc={readContext:Gl,use:ai,useCallback:rc,useContext:Gl,useEffect:tu,useImperativeHandle:oc,useInsertionEffect:ic,useLayoutEffect:sc,useMemo:cc,useReducer:Is,useRef:nc,useState:function(){return Is(Gt)},useDebugValue:nu,useDeferredValue:function(l,t){var n=Dl();return rl===null?eu(n,l,t):gc(n,rl.memoizedState,l,t)},useTransition:function(){var l=Is(Gt)[0],t=Dl().memoizedState;return[typeof l=="boolean"?l:la(l),t]},useSyncExternalStore:Xr,useId:mc,useHostTransitionStatus:iu,useFormState:tc,useActionState:tc,useOptimistic:function(l,t){var n=Dl();return rl!==null?Kr(n,rl,l,t):(n.baseState=l,[l,n.queue.dispatch])},useMemoCache:Ws,useCacheRefresh:hc};zc.useEffectEvent=ac;function ou(l,t,n,e){t=l.memoizedState,n=n(e,t),n=n==null?t:N({},t,n),l.memoizedState=n,l.lanes===0&&(l.updateQueue.baseState=n)}var ru={enqueueSetState:function(l,t,n){l=l._reactInternals;var e=ft(),a=un(e);a.payload=t,n!=null&&(a.callback=n),t=on(l,a,e),t!==null&&(nt(t,l,e),We(t,l,e))},enqueueReplaceState:function(l,t,n){l=l._reactInternals;var e=ft(),a=un(e);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=on(l,a,e),t!==null&&(nt(t,l,e),We(t,l,e))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var n=ft(),e=un(n);e.tag=2,t!=null&&(e.callback=t),t=on(l,e,n),t!==null&&(nt(t,l,n),We(t,l,n))}};function _c(l,t,n,e,a,i,s){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(e,i,s):t.prototype&&t.prototype.isPureReactComponent?!Qe(n,e)||!Qe(a,i):!0}function Tc(l,t,n,e){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,e),t.state!==l&&ru.enqueueReplaceState(t,t.state,null)}function Qn(l,t){var n=t;if("ref"in t){n={};for(var e in t)e!=="ref"&&(n[e]=t[e])}if(l=l.defaultProps){n===t&&(n=N({},n));for(var a in l)n[a]===void 0&&(n[a]=l[a])}return n}function Ac(l){Xa(l)}function Mc(l){console.error(l)}function Ec(l){Xa(l)}function ri(l,t){try{var n=l.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function wc(l,t,n){try{var e=l.onCaughtError;e(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function cu(l,t,n){return n=un(n),n.tag=3,n.payload={element:null},n.callback=function(){ri(l,t)},n}function jc(l){return l=un(l),l.tag=3,l}function Dc(l,t,n,e){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=e.value;l.payload=function(){return a(i)},l.callback=function(){wc(t,n,e)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(l.callback=function(){wc(t,n,e),typeof a!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var u=e.stack;this.componentDidCatch(e.value,{componentStack:u!==null?u:""})})}function sd(l,t,n,e,a){if(n.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=n.alternate,t!==null&&oe(t,n,a,!0),n=ot.current,n!==null){switch(n.tag){case 31:case 13:return zt===null?zi():n.alternate===null&&Ml===0&&(Ml=3),n.flags&=-257,n.flags|=65536,n.lanes=a,e===Wa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([e]):t.add(e),Ru(l,e,a)),!1;case 22:return n.flags|=65536,e===Wa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([e]):n.add(e)),Ru(l,e,a)),!1}throw Error(p(435,n.tag))}return Ru(l,e,a),zi(),!1}if(ll)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,e!==Ds&&(l=Error(p(422),{cause:e}),Ze(yt(l,n)))):(e!==Ds&&(t=Error(p(423),{cause:e}),Ze(yt(t,n))),l=l.current.alternate,l.flags|=65536,a&=-a,l.lanes|=a,e=yt(e,n),a=cu(l.stateNode,e,a),Xs(l,a),Ml!==4&&(Ml=2)),!1;var i=Error(p(520),{cause:e});if(i=yt(i,n),ca===null?ca=[i]:ca.push(i),Ml!==4&&(Ml=2),t===null)return!0;e=yt(e,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,l=a&-a,n.lanes|=l,l=cu(n.stateNode,e,l),Xs(n,l),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(dn===null||!dn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=jc(a),Dc(a,l,n,e),Xs(n,a),!1}n=n.return}while(n!==null);return!1}var gu=Error(p(461)),xl=!1;function Ql(l,t,n,e){t.child=l===null?Nr(t,null,n,e):Xn(t,l.child,n,e)}function Oc(l,t,n,e,a){n=n.render;var i=t.ref;if("ref"in e){var s={};for(var u in e)u!=="ref"&&(s[u]=e[u])}else s=e;return Bn(t),e=Ks(l,t,n,s,i,a),u=$s(),l!==null&&!xl?(Js(l,t,a),Qt(l,t,a)):(ll&&u&&ws(t),t.flags|=1,Ql(l,t,e,a),t.child)}function Cc(l,t,n,e,a){if(l===null){var i=n.type;return typeof i=="function"&&!As(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,xc(l,t,i,e,a)):(l=Va(n.type,null,e,t,t.mode,a),l.ref=t.ref,l.return=t,t.child=l)}if(i=l.child,!bu(l,a)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Qe,n(s,e)&&l.ref===t.ref)return Qt(l,t,a)}return t.flags|=1,l=Bt(i,e),l.ref=t.ref,l.return=t,t.child=l}function xc(l,t,n,e,a){if(l!==null){var i=l.memoizedProps;if(Qe(i,e)&&l.ref===t.ref)if(xl=!1,t.pendingProps=e=i,bu(l,a))(l.flags&131072)!==0&&(xl=!0);else return t.lanes=l.lanes,Qt(l,t,a)}return fu(l,t,n,e,a)}function Nc(l,t,n,e){var a=e.children,i=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,l!==null){for(e=t.child=l.child,a=0;e!==null;)a=a|e.lanes|e.childLanes,e=e.sibling;e=a&~i}else e=0,t.child=null;return Uc(l,t,i,n,e)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Ja(t,i!==null?i.cachePool:null),i!==null?Br(t,i):Qs(),Hr(t);else return e=t.lanes=536870912,Uc(l,t,i!==null?i.baseLanes|n:n,n,e)}else i!==null?(Ja(t,i.cachePool),Br(t,i),cn(),t.memoizedState=null):(l!==null&&Ja(t,null),Qs(),cn());return Ql(l,t,a,n),t.child}function ea(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(l,t,n,e,a){var i=Bs();return i=i===null?null:{parent:Ol._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},l!==null&&Ja(t,null),Qs(),Hr(t),l!==null&&oe(l,t,e,!0),t.childLanes=a,null}function ci(l,t){return t=fi({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Rc(l,t,n){return Xn(t,l.child,null,n),l=ci(t,t.pendingProps),l.flags|=2,rt(t),t.memoizedState=null,l}function ud(l,t,n){var e=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(e.mode==="hidden")return l=ci(t,e),t.lanes=536870912,ea(null,l);if(Vs(t),(l=dl)?(l=$g(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:tn!==null?{id:jt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},n=vr(l),n.return=t,t.child=n,Xl=t,dl=null)):l=null,l===null)throw en(t);return t.lanes=536870912,null}return ci(t,e)}var i=l.memoizedState;if(i!==null){var s=i.dehydrated;if(Vs(t),a)if(t.flags&256)t.flags&=-257,t=Rc(l,t,n);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(p(558));else if(xl||oe(l,t,n,!1),a=(n&l.childLanes)!==0,xl||a){if(e=pl,e!==null&&(s=Mo(e,n),s!==0&&s!==i.retryLane))throw i.retryLane=s,xn(l,s),nt(e,l,s),gu;zi(),t=Rc(l,t,n)}else l=i.treeContext,dl=_t(s.nextSibling),Xl=t,ll=!0,nn=null,St=!1,l!==null&&zr(t,l),t=ci(t,e),t.flags|=4096;return t}return l=Bt(l.child,{mode:e.mode,children:e.children}),l.ref=t.ref,t.child=l,l.return=t,l}function gi(l,t){var n=t.ref;if(n===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(p(284));(l===null||l.ref!==n)&&(t.flags|=4194816)}}function fu(l,t,n,e,a){return Bn(t),n=Ks(l,t,n,e,void 0,a),e=$s(),l!==null&&!xl?(Js(l,t,a),Qt(l,t,a)):(ll&&e&&ws(t),t.flags|=1,Ql(l,t,n,a),t.child)}function Bc(l,t,n,e,a,i){return Bn(t),t.updateQueue=null,n=Yr(t,e,n,a),qr(l),e=$s(),l!==null&&!xl?(Js(l,t,i),Qt(l,t,i)):(ll&&e&&ws(t),t.flags|=1,Ql(l,t,n,i),t.child)}function Hc(l,t,n,e,a){if(Bn(t),t.stateNode===null){var i=ae,s=n.contextType;typeof s=="object"&&s!==null&&(i=Gl(s)),i=new n(e,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ru,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=e,i.state=t.memoizedState,i.refs={},qs(t),s=n.contextType,i.context=typeof s=="object"&&s!==null?Gl(s):ae,i.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(ou(t,n,s,e),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&ru.enqueueReplaceState(i,i.state,null),Ie(t,e,i,a),Fe(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(l===null){i=t.stateNode;var u=t.memoizedProps,o=Qn(n,u);i.props=o;var h=i.context,S=n.contextType;s=ae,typeof S=="object"&&S!==null&&(s=Gl(S));var A=n.getDerivedStateFromProps;S=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||h!==s)&&Tc(t,i,e,s),sn=!1;var y=t.memoizedState;i.state=y,Ie(t,e,i,a),Fe(),h=t.memoizedState,u||y!==h||sn?(typeof A=="function"&&(ou(t,n,A,e),h=t.memoizedState),(o=sn||_c(t,n,o,e,y,h,s))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=h),i.props=e,i.state=h,i.context=s,e=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{i=t.stateNode,Ys(l,t),s=t.memoizedProps,S=Qn(n,s),i.props=S,A=t.pendingProps,y=i.context,h=n.contextType,o=ae,typeof h=="object"&&h!==null&&(o=Gl(h)),u=n.getDerivedStateFromProps,(h=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==A||y!==o)&&Tc(t,i,e,o),sn=!1,y=t.memoizedState,i.state=y,Ie(t,e,i,a),Fe();var b=t.memoizedState;s!==A||y!==b||sn||l!==null&&l.dependencies!==null&&Ka(l.dependencies)?(typeof u=="function"&&(ou(t,n,u,e),b=t.memoizedState),(S=sn||_c(t,n,S,e,y,b,o)||l!==null&&l.dependencies!==null&&Ka(l.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,b,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=b),i.props=e,i.state=b,i.context=o,e=S):(typeof i.componentDidUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),e=!1)}return i=e,gi(l,t),e=(t.flags&128)!==0,i||e?(i=t.stateNode,n=e&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,l!==null&&e?(t.child=Xn(t,l.child,null,a),t.child=Xn(t,null,n,a)):Ql(l,t,n,a),t.memoizedState=i.state,l=t.child):l=Qt(l,t,a),l}function qc(l,t,n,e){return Un(),t.flags|=256,Ql(l,t,n,e),t.child}var pu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function du(l){return{baseLanes:l,cachePool:wr()}}function mu(l,t,n){return l=l!==null?l.childLanes&~n:0,t&&(l|=gt),l}function Yc(l,t,n){var e=t.pendingProps,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=l!==null&&l.memoizedState===null?!1:(jl.current&2)!==0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(a?rn(t):cn(),(l=dl)?(l=$g(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:tn!==null?{id:jt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},n=vr(l),n.return=t,t.child=n,Xl=t,dl=null)):l=null,l===null)throw en(t);return Fu(l)?t.lanes=32:t.lanes=536870912,null}var u=e.children;return e=e.fallback,a?(cn(),a=t.mode,u=fi({mode:"hidden",children:u},a),e=Nn(e,a,n,null),u.return=t,e.return=t,u.sibling=e,t.child=u,e=t.child,e.memoizedState=du(n),e.childLanes=mu(l,s,n),t.memoizedState=pu,ea(null,e)):(rn(t),hu(t,u))}var o=l.memoizedState;if(o!==null&&(u=o.dehydrated,u!==null)){if(i)t.flags&256?(rn(t),t.flags&=-257,t=yu(l,t,n)):t.memoizedState!==null?(cn(),t.child=l.child,t.flags|=128,t=null):(cn(),u=e.fallback,a=t.mode,e=fi({mode:"visible",children:e.children},a),u=Nn(u,a,n,null),u.flags|=2,e.return=t,u.return=t,e.sibling=u,t.child=e,Xn(t,l.child,null,n),e=t.child,e.memoizedState=du(n),e.childLanes=mu(l,s,n),t.memoizedState=pu,t=ea(null,e));else if(rn(t),Fu(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var h=s.dgst;s=h,e=Error(p(419)),e.stack="",e.digest=s,Ze({value:e,source:null,stack:null}),t=yu(l,t,n)}else if(xl||oe(l,t,n,!1),s=(n&l.childLanes)!==0,xl||s){if(s=pl,s!==null&&(e=Mo(s,n),e!==0&&e!==o.retryLane))throw o.retryLane=e,xn(l,e),nt(s,l,e),gu;Wu(u)||zi(),t=yu(l,t,n)}else Wu(u)?(t.flags|=192,t.child=l.child,t=null):(l=o.treeContext,dl=_t(u.nextSibling),Xl=t,ll=!0,nn=null,St=!1,l!==null&&zr(t,l),t=hu(t,e.children),t.flags|=4096);return t}return a?(cn(),u=e.fallback,a=t.mode,o=l.child,h=o.sibling,e=Bt(o,{mode:"hidden",children:e.children}),e.subtreeFlags=o.subtreeFlags&65011712,h!==null?u=Bt(h,u):(u=Nn(u,a,n,null),u.flags|=2),u.return=t,e.return=t,e.sibling=u,t.child=e,ea(null,e),e=t.child,u=l.child.memoizedState,u===null?u=du(n):(a=u.cachePool,a!==null?(o=Ol._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=wr(),u={baseLanes:u.baseLanes|n,cachePool:a}),e.memoizedState=u,e.childLanes=mu(l,s,n),t.memoizedState=pu,ea(l.child,e)):(rn(t),n=l.child,l=n.sibling,n=Bt(n,{mode:"visible",children:e.children}),n.return=t,n.sibling=null,l!==null&&(s=t.deletions,s===null?(t.deletions=[l],t.flags|=16):s.push(l)),t.child=n,t.memoizedState=null,n)}function hu(l,t){return t=fi({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function fi(l,t){return l=ut(22,l,null,t),l.lanes=0,l}function yu(l,t,n){return Xn(t,l.child,null,n),l=hu(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Xc(l,t,n){l.lanes|=t;var e=l.alternate;e!==null&&(e.lanes|=t),xs(l.return,t,n)}function vu(l,t,n,e,a,i){var s=l.memoizedState;s===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:n,tailMode:a,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=e,s.tail=n,s.tailMode=a,s.treeForkCount=i)}function Gc(l,t,n){var e=t.pendingProps,a=e.revealOrder,i=e.tail;e=e.children;var s=jl.current,u=(s&2)!==0;if(u?(s=s&1|2,t.flags|=128):s&=1,O(jl,s),Ql(l,t,e,n),e=ll?Ve:0,!u&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Xc(l,n,t);else if(l.tag===19)Xc(l,n,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)l=n.alternate,l!==null&&li(l)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),vu(t,!1,a,n,i,e);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(l=a.alternate,l!==null&&li(l)===null){t.child=a;break}l=a.sibling,a.sibling=n,n=a,a=l}vu(t,!0,n,null,i,e);break;case"together":vu(t,!1,null,null,void 0,e);break;default:t.memoizedState=null}return t.child}function Qt(l,t,n){if(l!==null&&(t.dependencies=l.dependencies),pn|=t.lanes,(n&t.childLanes)===0)if(l!==null){if(oe(l,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(p(153));if(t.child!==null){for(l=t.child,n=Bt(l,l.pendingProps),t.child=n,n.return=t;l.sibling!==null;)l=l.sibling,n=n.sibling=Bt(l,l.pendingProps),n.return=t;n.sibling=null}return t.child}function bu(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Ka(l)))}function od(l,t,n){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),an(t,Ol,l.memoizedState.cache),Un();break;case 27:case 5:De(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:an(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vs(t),null;break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(rn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?Yc(l,t,n):(rn(t),l=Qt(l,t,n),l!==null?l.sibling:null);rn(t);break;case 19:var a=(l.flags&128)!==0;if(e=(n&t.childLanes)!==0,e||(oe(l,t,n,!1),e=(n&t.childLanes)!==0),a){if(e)return Gc(l,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),O(jl,jl.current),e)break;return null;case 22:return t.lanes=0,Nc(l,t,n,t.pendingProps);case 24:an(t,Ol,l.memoizedState.cache)}return Qt(l,t,n)}function Qc(l,t,n){if(l!==null)if(l.memoizedProps!==t.pendingProps)xl=!0;else{if(!bu(l,n)&&(t.flags&128)===0)return xl=!1,od(l,t,n);xl=(l.flags&131072)!==0}else xl=!1,ll&&(t.flags&1048576)!==0&&Sr(t,Ve,t.index);switch(t.lanes=0,t.tag){case 16:l:{var e=t.pendingProps;if(l=qn(t.elementType),t.type=l,typeof l=="function")As(l)?(e=Qn(l,e),t.tag=1,t=Hc(null,t,l,e,n)):(t.tag=0,t=fu(null,t,l,e,n));else{if(l!=null){var a=l.$$typeof;if(a===Tl){t.tag=11,t=Oc(null,t,l,e,n);break l}else if(a===$){t.tag=14,t=Cc(null,t,l,e,n);break l}}throw t=xt(l)||l,Error(p(306,t,""))}}return t;case 0:return fu(l,t,t.type,t.pendingProps,n);case 1:return e=t.type,a=Qn(e,t.pendingProps),Hc(l,t,e,a,n);case 3:l:{if(Kl(t,t.stateNode.containerInfo),l===null)throw Error(p(387));e=t.pendingProps;var i=t.memoizedState;a=i.element,Ys(l,t),Ie(t,e,null,n);var s=t.memoizedState;if(e=s.cache,an(t,Ol,e),e!==i.cache&&Ns(t,[Ol],n,!0),Fe(),e=s.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qc(l,t,e,n);break l}else if(e!==a){a=yt(Error(p(424)),t),Ze(a),t=qc(l,t,e,n);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(dl=_t(l.firstChild),Xl=t,ll=!0,nn=null,St=!0,n=Nr(t,null,e,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Un(),e===a){t=Qt(l,t,n);break l}Ql(l,t,e,n)}t=t.child}return t;case 26:return gi(l,t),l===null?(n=Pg(t.type,null,t.pendingProps,null))?t.memoizedState=n:ll||(n=t.type,l=t.pendingProps,e=ji(J.current).createElement(n),e[Yl]=t,e[Wl]=l,Ll(e,n,l),Hl(e),t.stateNode=e):t.memoizedState=Pg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return De(t),l===null&&ll&&(e=t.stateNode=Wg(t.type,t.pendingProps,J.current),Xl=t,St=!0,a=dl,vn(t.type)?(Iu=a,dl=_t(e.firstChild)):dl=a),Ql(l,t,t.pendingProps.children,n),gi(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((a=e=dl)&&(e=qd(e,t.type,t.pendingProps,St),e!==null?(t.stateNode=e,Xl=t,dl=_t(e.firstChild),St=!1,a=!0):a=!1),a||en(t)),De(t),a=t.type,i=t.pendingProps,s=l!==null?l.memoizedProps:null,e=i.children,$u(a,i)?e=null:s!==null&&$u(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Ks(l,t,Pp,null,null,n),va._currentValue=a),gi(l,t),Ql(l,t,e,n),t.child;case 6:return l===null&&ll&&((l=n=dl)&&(n=Yd(n,t.pendingProps,St),n!==null?(t.stateNode=n,Xl=t,dl=null,l=!0):l=!1),l||en(t)),null;case 13:return Yc(l,t,n);case 4:return Kl(t,t.stateNode.containerInfo),e=t.pendingProps,l===null?t.child=Xn(t,null,e,n):Ql(l,t,e,n),t.child;case 11:return Oc(l,t,t.type,t.pendingProps,n);case 7:return Ql(l,t,t.pendingProps,n),t.child;case 8:return Ql(l,t,t.pendingProps.children,n),t.child;case 12:return Ql(l,t,t.pendingProps.children,n),t.child;case 10:return e=t.pendingProps,an(t,t.type,e.value),Ql(l,t,e.children,n),t.child;case 9:return a=t.type._context,e=t.pendingProps.children,Bn(t),a=Gl(a),e=e(a),t.flags|=1,Ql(l,t,e,n),t.child;case 14:return Cc(l,t,t.type,t.pendingProps,n);case 15:return xc(l,t,t.type,t.pendingProps,n);case 19:return Gc(l,t,n);case 31:return ud(l,t,n);case 22:return Nc(l,t,n,t.pendingProps);case 24:return Bn(t),e=Gl(Ol),l===null?(a=Bs(),a===null&&(a=pl,i=Us(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:e,cache:a},qs(t),an(t,Ol,a)):((l.lanes&n)!==0&&(Ys(l,t),Ie(t,null,null,n),Fe()),a=l.memoizedState,i=t.memoizedState,a.parent!==e?(a={parent:e,cache:e},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),an(t,Ol,e)):(e=i.cache,an(t,Ol,e),e!==a.cache&&Ns(t,[Ol],n,!0))),Ql(l,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Lt(l){l.flags|=4}function Su(l,t,n,e,a){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(a&335544128)===a)if(l.stateNode.complete)l.flags|=8192;else if(mg())l.flags|=8192;else throw Yn=Wa,Hs}else l.flags&=-16777217}function Lc(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!af(t))if(mg())l.flags|=8192;else throw Yn=Wa,Hs}function pi(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?_o():536870912,l.lanes|=t,Se|=t)}function aa(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?l.tail=null:n.sibling=null;break;case"collapsed":n=l.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:e.sibling=null}}function ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,n=0,e=0;if(t)for(var a=l.child;a!==null;)n|=a.lanes|a.childLanes,e|=a.subtreeFlags&65011712,e|=a.flags&65011712,a.return=l,a=a.sibling;else for(a=l.child;a!==null;)n|=a.lanes|a.childLanes,e|=a.subtreeFlags,e|=a.flags,a.return=l,a=a.sibling;return l.subtreeFlags|=e,l.childLanes=n,t}function rd(l,t,n){var e=t.pendingProps;switch(js(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return n=t.stateNode,e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Yt(Ol),wl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(l===null||l.child===null)&&(ue(t)?Lt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Os())),ml(t),null;case 26:var a=t.type,i=t.memoizedState;return l===null?(Lt(t),i!==null?(ml(t),Lc(t,i)):(ml(t),Su(t,a,null,e,n))):i?i!==l.memoizedState?(Lt(t),ml(t),Lc(t,i)):(ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==e&&Lt(t),ml(t),Su(t,a,l,e,n)),null;case 27:if(Aa(t),n=J.current,a=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Lt(t);else{if(!e){if(t.stateNode===null)throw Error(p(166));return ml(t),null}l=B.current,ue(t)?_r(t):(l=Wg(a,e,n),t.stateNode=l,Lt(t))}return ml(t),null;case 5:if(Aa(t),a=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Lt(t);else{if(!e){if(t.stateNode===null)throw Error(p(166));return ml(t),null}if(i=B.current,ue(t))_r(t);else{var s=ji(J.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof e.is=="string"?s.createElement("select",{is:e.is}):s.createElement("select"),e.multiple?i.multiple=!0:e.size&&(i.size=e.size);break;default:i=typeof e.is=="string"?s.createElement(a,{is:e.is}):s.createElement(a)}}i[Yl]=t,i[Wl]=e;l:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break l;for(;s.sibling===null;){if(s.return===null||s.return===t)break l;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;l:switch(Ll(i,a,e),a){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break l;case"img":e=!0;break l;default:e=!1}e&&Lt(t)}}return ml(t),Su(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,n),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==e&&Lt(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(p(166));if(l=J.current,ue(t)){if(l=t.stateNode,n=t.memoizedProps,e=null,a=Xl,a!==null)switch(a.tag){case 27:case 5:e=a.memoizedProps}l[Yl]=t,l=!!(l.nodeValue===n||e!==null&&e.suppressHydrationWarning===!0||Yg(l.nodeValue,n)),l||en(t,!0)}else l=ji(l).createTextNode(e),l[Yl]=t,t.stateNode=l}return ml(t),null;case 31:if(n=t.memoizedState,l===null||l.memoizedState!==null){if(e=ue(t),n!==null){if(l===null){if(!e)throw Error(p(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(557));l[Yl]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),l=!1}else n=Os(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),l=!0;if(!l)return t.flags&256?(rt(t),t):(rt(t),null);if((t.flags&128)!==0)throw Error(p(558))}return ml(t),null;case 13:if(e=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(a=ue(t),e!==null&&e.dehydrated!==null){if(l===null){if(!a)throw Error(p(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(p(317));a[Yl]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),a=!1}else a=Os(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(rt(t),t):(rt(t),null)}return rt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=e!==null,l=l!==null&&l.memoizedState!==null,n&&(e=t.child,a=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(a=e.alternate.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==a&&(e.flags|=2048)),n!==l&&n&&(t.child.flags|=8192),pi(t,t.updateQueue),ml(t),null);case 4:return wl(),l===null&&Qu(t.stateNode.containerInfo),ml(t),null;case 10:return Yt(t.type),ml(t),null;case 19:if(M(jl),e=t.memoizedState,e===null)return ml(t),null;if(a=(t.flags&128)!==0,i=e.rendering,i===null)if(a)aa(e,!1);else{if(Ml!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(i=li(l),i!==null){for(t.flags|=128,aa(e,!1),l=i.updateQueue,t.updateQueue=l,pi(t,l),t.subtreeFlags=0,l=n,n=t.child;n!==null;)yr(n,l),n=n.sibling;return O(jl,jl.current&1|2),ll&&Ht(t,e.treeForkCount),t.child}l=l.sibling}e.tail!==null&&et()>vi&&(t.flags|=128,a=!0,aa(e,!1),t.lanes=4194304)}else{if(!a)if(l=li(i),l!==null){if(t.flags|=128,a=!0,l=l.updateQueue,t.updateQueue=l,pi(t,l),aa(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!ll)return ml(t),null}else 2*et()-e.renderingStartTime>vi&&n!==536870912&&(t.flags|=128,a=!0,aa(e,!1),t.lanes=4194304);e.isBackwards?(i.sibling=t.child,t.child=i):(l=e.last,l!==null?l.sibling=i:t.child=i,e.last=i)}return e.tail!==null?(l=e.tail,e.rendering=l,e.tail=l.sibling,e.renderingStartTime=et(),l.sibling=null,n=jl.current,O(jl,a?n&1|2:n&1),ll&&Ht(t,e.treeForkCount),l):(ml(t),null);case 22:case 23:return rt(t),Ls(),e=t.memoizedState!==null,l!==null?l.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(n&536870912)!==0&&(t.flags&128)===0&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),n=t.updateQueue,n!==null&&pi(t,n.retryQueue),n=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(t.flags|=2048),l!==null&&M(Hn),null;case 24:return n=null,l!==null&&(n=l.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(Ol),ml(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function cd(l,t){switch(js(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Yt(Ol),wl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Aa(t),null;case 31:if(t.memoizedState!==null){if(rt(t),t.alternate===null)throw Error(p(340));Un()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(rt(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(p(340));Un()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return M(jl),null;case 4:return wl(),null;case 10:return Yt(t.type),null;case 22:case 23:return rt(t),Ls(),l!==null&&M(Hn),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Yt(Ol),null;case 25:return null;default:return null}}function Vc(l,t){switch(js(t),t.tag){case 3:Yt(Ol),wl();break;case 26:case 27:case 5:Aa(t);break;case 4:wl();break;case 31:t.memoizedState!==null&&rt(t);break;case 13:rt(t);break;case 19:M(jl);break;case 10:Yt(t.type);break;case 22:case 23:rt(t),Ls(),l!==null&&M(Hn);break;case 24:Yt(Ol)}}function ia(l,t){try{var n=t.updateQueue,e=n!==null?n.lastEffect:null;if(e!==null){var a=e.next;n=a;do{if((n.tag&l)===l){e=void 0;var i=n.create,s=n.inst;e=i(),s.destroy=e}n=n.next}while(n!==a)}}catch(u){sl(t,t.return,u)}}function gn(l,t,n){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var i=a.next;e=i;do{if((e.tag&l)===l){var s=e.inst,u=s.destroy;if(u!==void 0){s.destroy=void 0,a=t;var o=n,h=u;try{h()}catch(S){sl(a,o,S)}}}e=e.next}while(e!==i)}}catch(S){sl(t,t.return,S)}}function Zc(l){var t=l.updateQueue;if(t!==null){var n=l.stateNode;try{Rr(t,n)}catch(e){sl(l,l.return,e)}}}function Kc(l,t,n){n.props=Qn(l.type,l.memoizedProps),n.state=l.memoizedState;try{n.componentWillUnmount()}catch(e){sl(l,t,e)}}function sa(l,t){try{var n=l.ref;if(n!==null){switch(l.tag){case 26:case 27:case 5:var e=l.stateNode;break;case 30:e=l.stateNode;break;default:e=l.stateNode}typeof n=="function"?l.refCleanup=n(e):n.current=e}}catch(a){sl(l,t,a)}}function Ot(l,t){var n=l.ref,e=l.refCleanup;if(n!==null)if(typeof e=="function")try{e()}catch(a){sl(l,t,a)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){sl(l,t,a)}else n.current=null}function $c(l){var t=l.type,n=l.memoizedProps,e=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();break l;case"img":n.src?e.src=n.src:n.srcSet&&(e.srcset=n.srcSet)}}catch(a){sl(l,l.return,a)}}function zu(l,t,n){try{var e=l.stateNode;xd(e,l.type,n,t),e[Wl]=t}catch(a){sl(l,l.return,a)}}function Jc(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&vn(l.type)||l.tag===4}function _u(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Jc(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&vn(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Tu(l,t,n){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(l),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ut));else if(e!==4&&(e===27&&vn(l.type)&&(n=l.stateNode,t=null),l=l.child,l!==null))for(Tu(l,t,n),l=l.sibling;l!==null;)Tu(l,t,n),l=l.sibling}function di(l,t,n){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?n.insertBefore(l,t):n.appendChild(l);else if(e!==4&&(e===27&&vn(l.type)&&(n=l.stateNode),l=l.child,l!==null))for(di(l,t,n),l=l.sibling;l!==null;)di(l,t,n),l=l.sibling}function kc(l){var t=l.stateNode,n=l.memoizedProps;try{for(var e=l.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ll(t,e,n),t[Yl]=l,t[Wl]=n}catch(i){sl(l,l.return,i)}}var Vt=!1,Nl=!1,Au=!1,Wc=typeof WeakSet=="function"?WeakSet:Set,ql=null;function gd(l,t){if(l=l.containerInfo,Zu=Ri,l=or(l),ys(l)){if("selectionStart"in l)var n={start:l.selectionStart,end:l.selectionEnd};else l:{n=(n=l.ownerDocument)&&n.defaultView||window;var e=n.getSelection&&n.getSelection();if(e&&e.rangeCount!==0){n=e.anchorNode;var a=e.anchorOffset,i=e.focusNode;e=e.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break l}var s=0,u=-1,o=-1,h=0,S=0,A=l,y=null;t:for(;;){for(var b;A!==n||a!==0&&A.nodeType!==3||(u=s+a),A!==i||e!==0&&A.nodeType!==3||(o=s+e),A.nodeType===3&&(s+=A.nodeValue.length),(b=A.firstChild)!==null;)y=A,A=b;for(;;){if(A===l)break t;if(y===n&&++h===a&&(u=s),y===i&&++S===e&&(o=s),(b=A.nextSibling)!==null)break;A=y,y=A.parentNode}A=b}n=u===-1||o===-1?null:{start:u,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ku={focusedElem:l,selectionRange:n},Ri=!1,ql=t;ql!==null;)if(t=ql,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,ql=l;else for(;ql!==null;){switch(t=ql,i=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(n=0;n<l.length;n++)a=l[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&i!==null){l=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,e=n.stateNode;try{var R=Qn(n.type,a);l=e.getSnapshotBeforeUpdate(R,i),e.__reactInternalSnapshotBeforeUpdate=l}catch(X){sl(n,n.return,X)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,n=l.nodeType,n===9)ku(l);else if(n===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ku(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(p(163))}if(l=t.sibling,l!==null){l.return=t.return,ql=l;break}ql=t.return}}function Fc(l,t,n){var e=n.flags;switch(n.tag){case 0:case 11:case 15:Kt(l,n),e&4&&ia(5,n);break;case 1:if(Kt(l,n),e&4)if(l=n.stateNode,t===null)try{l.componentDidMount()}catch(s){sl(n,n.return,s)}else{var a=Qn(n.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(a,t,l.__reactInternalSnapshotBeforeUpdate)}catch(s){sl(n,n.return,s)}}e&64&&Zc(n),e&512&&sa(n,n.return);break;case 3:if(Kt(l,n),e&64&&(l=n.updateQueue,l!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Rr(l,t)}catch(s){sl(n,n.return,s)}}break;case 27:t===null&&e&4&&kc(n);case 26:case 5:Kt(l,n),t===null&&e&4&&$c(n),e&512&&sa(n,n.return);break;case 12:Kt(l,n);break;case 31:Kt(l,n),e&4&&lg(l,n);break;case 13:Kt(l,n),e&4&&tg(l,n),e&64&&(l=n.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(n=Sd.bind(null,n),Xd(l,n))));break;case 22:if(e=n.memoizedState!==null||Vt,!e){t=t!==null&&t.memoizedState!==null||Nl,a=Vt;var i=Nl;Vt=e,(Nl=t)&&!i?$t(l,n,(n.subtreeFlags&8772)!==0):Kt(l,n),Vt=a,Nl=i}break;case 30:break;default:Kt(l,n)}}function Ic(l){var t=l.alternate;t!==null&&(l.alternate=null,Ic(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&ls(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var hl=null,Il=!1;function Zt(l,t,n){for(n=n.child;n!==null;)Pc(l,t,n),n=n.sibling}function Pc(l,t,n){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Oe,n)}catch{}switch(n.tag){case 26:Nl||Ot(n,t),Zt(l,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Nl||Ot(n,t);var e=hl,a=Il;vn(n.type)&&(hl=n.stateNode,Il=!1),Zt(l,t,n),ma(n.stateNode),hl=e,Il=a;break;case 5:Nl||Ot(n,t);case 6:if(e=hl,a=Il,hl=null,Zt(l,t,n),hl=e,Il=a,hl!==null)if(Il)try{(hl.nodeType===9?hl.body:hl.nodeName==="HTML"?hl.ownerDocument.body:hl).removeChild(n.stateNode)}catch(i){sl(n,t,i)}else try{hl.removeChild(n.stateNode)}catch(i){sl(n,t,i)}break;case 18:hl!==null&&(Il?(l=hl,Zg(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,n.stateNode),je(l)):Zg(hl,n.stateNode));break;case 4:e=hl,a=Il,hl=n.stateNode.containerInfo,Il=!0,Zt(l,t,n),hl=e,Il=a;break;case 0:case 11:case 14:case 15:gn(2,n,t),Nl||gn(4,n,t),Zt(l,t,n);break;case 1:Nl||(Ot(n,t),e=n.stateNode,typeof e.componentWillUnmount=="function"&&Kc(n,t,e)),Zt(l,t,n);break;case 21:Zt(l,t,n);break;case 22:Nl=(e=Nl)||n.memoizedState!==null,Zt(l,t,n),Nl=e;break;default:Zt(l,t,n)}}function lg(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{je(l)}catch(n){sl(t,t.return,n)}}}function tg(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{je(l)}catch(n){sl(t,t.return,n)}}function fd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wc),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wc),t;default:throw Error(p(435,l.tag))}}function mi(l,t){var n=fd(l);t.forEach(function(e){if(!n.has(e)){n.add(e);var a=zd.bind(null,l,e);e.then(a,a)}})}function Pl(l,t){var n=t.deletions;if(n!==null)for(var e=0;e<n.length;e++){var a=n[e],i=l,s=t,u=s;l:for(;u!==null;){switch(u.tag){case 27:if(vn(u.type)){hl=u.stateNode,Il=!1;break l}break;case 5:hl=u.stateNode,Il=!1;break l;case 3:case 4:hl=u.stateNode.containerInfo,Il=!0;break l}u=u.return}if(hl===null)throw Error(p(160));Pc(i,s,a),hl=null,Il=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ng(t,l),t=t.sibling}var Et=null;function ng(l,t){var n=l.alternate,e=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),e&4&&(gn(3,l,l.return),ia(3,l),gn(5,l,l.return));break;case 1:Pl(t,l),lt(l),e&512&&(Nl||n===null||Ot(n,n.return)),e&64&&Vt&&(l=l.updateQueue,l!==null&&(e=l.callbacks,e!==null&&(n=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:var a=Et;if(Pl(t,l),lt(l),e&512&&(Nl||n===null||Ot(n,n.return)),e&4){var i=n!==null?n.memoizedState:null;if(e=l.memoizedState,n===null)if(e===null)if(l.stateNode===null){l:{e=l.type,n=l.memoizedProps,a=a.ownerDocument||a;t:switch(e){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Ne]||i[Yl]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(e),a.head.insertBefore(i,a.querySelector("head > title"))),Ll(i,e,n),i[Yl]=l,Hl(i),e=i;break l;case"link":var s=nf("link","href",a).get(e+(n.href||""));if(s){for(var u=0;u<s.length;u++)if(i=s[u],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(u,1);break t}}i=a.createElement(e),Ll(i,e,n),a.head.appendChild(i);break;case"meta":if(s=nf("meta","content",a).get(e+(n.content||""))){for(u=0;u<s.length;u++)if(i=s[u],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(u,1);break t}}i=a.createElement(e),Ll(i,e,n),a.head.appendChild(i);break;default:throw Error(p(468,e))}i[Yl]=l,Hl(i),e=i}l.stateNode=e}else ef(a,l.type,l.stateNode);else l.stateNode=tf(a,e,l.memoizedProps);else i!==e?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,e===null?ef(a,l.type,l.stateNode):tf(a,e,l.memoizedProps)):e===null&&l.stateNode!==null&&zu(l,l.memoizedProps,n.memoizedProps)}break;case 27:Pl(t,l),lt(l),e&512&&(Nl||n===null||Ot(n,n.return)),n!==null&&e&4&&zu(l,l.memoizedProps,n.memoizedProps);break;case 5:if(Pl(t,l),lt(l),e&512&&(Nl||n===null||Ot(n,n.return)),l.flags&32){a=l.stateNode;try{Fn(a,"")}catch(R){sl(l,l.return,R)}}e&4&&l.stateNode!=null&&(a=l.memoizedProps,zu(l,a,n!==null?n.memoizedProps:a)),e&1024&&(Au=!0);break;case 6:if(Pl(t,l),lt(l),e&4){if(l.stateNode===null)throw Error(p(162));e=l.memoizedProps,n=l.stateNode;try{n.nodeValue=e}catch(R){sl(l,l.return,R)}}break;case 3:if(Ci=null,a=Et,Et=Di(t.containerInfo),Pl(t,l),Et=a,lt(l),e&4&&n!==null&&n.memoizedState.isDehydrated)try{je(t.containerInfo)}catch(R){sl(l,l.return,R)}Au&&(Au=!1,eg(l));break;case 4:e=Et,Et=Di(l.stateNode.containerInfo),Pl(t,l),lt(l),Et=e;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,mi(l,e)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(yi=et()),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,mi(l,e)));break;case 22:a=l.memoizedState!==null;var o=n!==null&&n.memoizedState!==null,h=Vt,S=Nl;if(Vt=h||a,Nl=S||o,Pl(t,l),Nl=S,Vt=h,lt(l),e&8192)l:for(t=l.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||o||Vt||Nl||Ln(l)),n=null,t=l;;){if(t.tag===5||t.tag===26){if(n===null){o=n=t;try{if(i=o.stateNode,a)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{u=o.stateNode;var A=o.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(R){sl(o,o.return,R)}}}else if(t.tag===6){if(n===null){o=t;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(R){sl(o,o.return,R)}}}else if(t.tag===18){if(n===null){o=t;try{var b=o.stateNode;a?Kg(b,!0):Kg(o.stateNode,!1)}catch(R){sl(o,o.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=l.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,mi(l,n))));break;case 19:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,mi(l,e)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var n,e=l.return;e!==null;){if(Jc(e)){n=e;break}e=e.return}if(n==null)throw Error(p(160));switch(n.tag){case 27:var a=n.stateNode,i=_u(l);di(l,i,a);break;case 5:var s=n.stateNode;n.flags&32&&(Fn(s,""),n.flags&=-33);var u=_u(l);di(l,u,s);break;case 3:case 4:var o=n.stateNode.containerInfo,h=_u(l);Tu(l,h,o);break;default:throw Error(p(161))}}catch(S){sl(l,l.return,S)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function eg(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;eg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Kt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fc(l,t.alternate,t),t=t.sibling}function Ln(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:gn(4,t,t.return),Ln(t);break;case 1:Ot(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Kc(t,t.return,n),Ln(t);break;case 27:ma(t.stateNode);case 26:case 5:Ot(t,t.return),Ln(t);break;case 22:t.memoizedState===null&&Ln(t);break;case 30:Ln(t);break;default:Ln(t)}l=l.sibling}}function $t(l,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,a=l,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:$t(a,i,n),ia(4,i);break;case 1:if($t(a,i,n),e=i,a=e.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){sl(e,e.return,h)}if(e=i,a=e.updateQueue,a!==null){var u=e.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)Ur(o[a],u)}catch(h){sl(e,e.return,h)}}n&&s&64&&Zc(i),sa(i,i.return);break;case 27:kc(i);case 26:case 5:$t(a,i,n),n&&e===null&&s&4&&$c(i),sa(i,i.return);break;case 12:$t(a,i,n);break;case 31:$t(a,i,n),n&&s&4&&lg(a,i);break;case 13:$t(a,i,n),n&&s&4&&tg(a,i);break;case 22:i.memoizedState===null&&$t(a,i,n),sa(i,i.return);break;case 30:break;default:$t(a,i,n)}t=t.sibling}}function Mu(l,t){var n=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(l!=null&&l.refCount++,n!=null&&Ke(n))}function Eu(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ke(l))}function wt(l,t,n,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(l,t,n,e),t=t.sibling}function ag(l,t,n,e){var a=t.flags;switch(t.tag){case 0:case 11:case 15:wt(l,t,n,e),a&2048&&ia(9,t);break;case 1:wt(l,t,n,e);break;case 3:wt(l,t,n,e),a&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ke(l)));break;case 12:if(a&2048){wt(l,t,n,e),l=t.stateNode;try{var i=t.memoizedProps,s=i.id,u=i.onPostCommit;typeof u=="function"&&u(s,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(o){sl(t,t.return,o)}}else wt(l,t,n,e);break;case 31:wt(l,t,n,e);break;case 13:wt(l,t,n,e);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?wt(l,t,n,e):ua(l,t):i._visibility&2?wt(l,t,n,e):(i._visibility|=2,ye(l,t,n,e,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Mu(s,t);break;case 24:wt(l,t,n,e),a&2048&&Eu(t.alternate,t);break;default:wt(l,t,n,e)}}function ye(l,t,n,e,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=l,s=t,u=n,o=e,h=s.flags;switch(s.tag){case 0:case 11:case 15:ye(i,s,u,o,a),ia(8,s);break;case 23:break;case 22:var S=s.stateNode;s.memoizedState!==null?S._visibility&2?ye(i,s,u,o,a):ua(i,s):(S._visibility|=2,ye(i,s,u,o,a)),a&&h&2048&&Mu(s.alternate,s);break;case 24:ye(i,s,u,o,a),a&&h&2048&&Eu(s.alternate,s);break;default:ye(i,s,u,o,a)}t=t.sibling}}function ua(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=l,e=t,a=e.flags;switch(e.tag){case 22:ua(n,e),a&2048&&Mu(e.alternate,e);break;case 24:ua(n,e),a&2048&&Eu(e.alternate,e);break;default:ua(n,e)}t=t.sibling}}var oa=8192;function ve(l,t,n){if(l.subtreeFlags&oa)for(l=l.child;l!==null;)ig(l,t,n),l=l.sibling}function ig(l,t,n){switch(l.tag){case 26:ve(l,t,n),l.flags&oa&&l.memoizedState!==null&&Id(n,Et,l.memoizedState,l.memoizedProps);break;case 5:ve(l,t,n);break;case 3:case 4:var e=Et;Et=Di(l.stateNode.containerInfo),ve(l,t,n),Et=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=oa,oa=16777216,ve(l,t,n),oa=e):ve(l,t,n));break;default:ve(l,t,n)}}function sg(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function ra(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var e=t[n];ql=e,og(e,l)}sg(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)ug(l),l=l.sibling}function ug(l){switch(l.tag){case 0:case 11:case 15:ra(l),l.flags&2048&&gn(9,l,l.return);break;case 3:ra(l);break;case 12:ra(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,hi(l)):ra(l);break;default:ra(l)}}function hi(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var e=t[n];ql=e,og(e,l)}sg(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:gn(8,t,t.return),hi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,hi(t));break;default:hi(t)}l=l.sibling}}function og(l,t){for(;ql!==null;){var n=ql;switch(n.tag){case 0:case 11:case 15:gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var e=n.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Ke(n.memoizedState.cache)}if(e=n.child,e!==null)e.return=n,ql=e;else l:for(n=l;ql!==null;){e=ql;var a=e.sibling,i=e.return;if(Ic(e),e===n){ql=null;break l}if(a!==null){a.return=i,ql=a;break l}ql=i}}}var pd={getCacheForType:function(l){var t=Gl(Ol),n=t.data.get(l);return n===void 0&&(n=l(),t.data.set(l,n)),n},cacheSignal:function(){return Gl(Ol).controller.signal}},dd=typeof WeakMap=="function"?WeakMap:Map,el=0,pl=null,k=null,F=0,il=0,ct=null,fn=!1,be=!1,wu=!1,Jt=0,Ml=0,pn=0,Vn=0,ju=0,gt=0,Se=0,ca=null,tt=null,Du=!1,yi=0,rg=0,vi=1/0,bi=null,dn=null,Rl=0,mn=null,ze=null,kt=0,Ou=0,Cu=null,cg=null,ga=0,xu=null;function ft(){return(el&2)!==0&&F!==0?F&-F:z.T!==null?qu():Eo()}function gg(){if(gt===0)if((F&536870912)===0||ll){var l=wa;wa<<=1,(wa&3932160)===0&&(wa=262144),gt=l}else gt=536870912;return l=ot.current,l!==null&&(l.flags|=32),gt}function nt(l,t,n){(l===pl&&(il===2||il===9)||l.cancelPendingCommit!==null)&&(_e(l,0),hn(l,F,gt,!1)),xe(l,n),((el&2)===0||l!==pl)&&(l===pl&&((el&2)===0&&(Vn|=n),Ml===4&&hn(l,F,gt,!1)),Ct(l))}function fg(l,t,n){if((el&6)!==0)throw Error(p(327));var e=!n&&(t&127)===0&&(t&l.expiredLanes)===0||Ce(l,t),a=e?yd(l,t):Uu(l,t,!0),i=e;do{if(a===0){be&&!e&&hn(l,t,0,!1);break}else{if(n=l.current.alternate,i&&!md(n)){a=Uu(l,t,!1),i=!1;continue}if(a===2){if(i=t,l.errorRecoveryDisabledLanes&i)var s=0;else s=l.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;l:{var u=l;a=ca;var o=u.current.memoizedState.isDehydrated;if(o&&(_e(u,s).flags|=256),s=Uu(u,s,!1),s!==2){if(wu&&!o){u.errorRecoveryDisabledLanes|=i,Vn|=i,a=4;break l}i=tt,tt=a,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}a=s}if(i=!1,a!==2)continue}}if(a===1){_e(l,0),hn(l,t,0,!0);break}l:{switch(e=l,i=a,i){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:hn(e,t,gt,!fn);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(a=yi+300-et(),10<a)){if(hn(e,t,gt,!fn),Da(e,0,!0)!==0)break l;kt=t,e.timeoutHandle=Lg(pg.bind(null,e,n,tt,bi,Du,t,gt,Vn,Se,fn,i,"Throttled",-0,0),a);break l}pg(e,n,tt,bi,Du,t,gt,Vn,Se,fn,i,null,-0,0)}}break}while(!0);Ct(l)}function pg(l,t,n,e,a,i,s,u,o,h,S,A,y,b){if(l.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},ig(t,i,A);var R=(i&62914560)===i?yi-et():(i&4194048)===i?rg-et():0;if(R=Pd(A,R),R!==null){kt=i,l.cancelPendingCommit=R(zg.bind(null,l,t,i,n,e,a,s,u,o,S,A,null,y,b)),hn(l,i,s,!h);return}}zg(l,t,i,n,e,a,s,u,o)}function md(l){for(var t=l;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var e=0;e<n.length;e++){var a=n[e],i=a.getSnapshot;a=a.value;try{if(!st(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hn(l,t,n,e){t&=~ju,t&=~Vn,l.suspendedLanes|=t,l.pingedLanes&=~t,e&&(l.warmLanes|=t),e=l.expirationTimes;for(var a=t;0<a;){var i=31-it(a),s=1<<i;e[i]=-1,a&=~s}n!==0&&To(l,n,t)}function Si(){return(el&6)===0?(fa(0),!1):!0}function Nu(){if(k!==null){if(il===0)var l=k.return;else l=k,qt=Rn=null,ks(l),fe=null,Je=0,l=k;for(;l!==null;)Vc(l.alternate,l),l=l.return;k=null}}function _e(l,t){var n=l.timeoutHandle;n!==-1&&(l.timeoutHandle=-1,Rd(n)),n=l.cancelPendingCommit,n!==null&&(l.cancelPendingCommit=null,n()),kt=0,Nu(),pl=l,k=n=Bt(l.current,null),F=t,il=0,ct=null,fn=!1,be=Ce(l,t),wu=!1,Se=gt=ju=Vn=pn=Ml=0,tt=ca=null,Du=!1,(t&8)!==0&&(t|=t&32);var e=l.entangledLanes;if(e!==0)for(l=l.entanglements,e&=t;0<e;){var a=31-it(e),i=1<<a;t|=l[a],e&=~i}return Jt=t,Ga(),n}function dg(l,t){V=null,z.H=na,t===ge||t===ka?(t=Or(),il=3):t===Hs?(t=Or(),il=4):il=t===gu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,k===null&&(Ml=1,ri(l,yt(t,l.current)))}function mg(){var l=ot.current;return l===null?!0:(F&4194048)===F?zt===null:(F&62914560)===F||(F&536870912)!==0?l===zt:!1}function hg(){var l=z.H;return z.H=na,l===null?na:l}function yg(){var l=z.A;return z.A=pd,l}function zi(){Ml=4,fn||(F&4194048)!==F&&ot.current!==null||(be=!0),(pn&134217727)===0&&(Vn&134217727)===0||pl===null||hn(pl,F,gt,!1)}function Uu(l,t,n){var e=el;el|=2;var a=hg(),i=yg();(pl!==l||F!==t)&&(bi=null,_e(l,t)),t=!1;var s=Ml;l:do try{if(il!==0&&k!==null){var u=k,o=ct;switch(il){case 8:Nu(),s=6;break l;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var h=il;if(il=0,ct=null,Te(l,u,o,h),n&&be){s=0;break l}break;default:h=il,il=0,ct=null,Te(l,u,o,h)}}hd(),s=Ml;break}catch(S){dg(l,S)}while(!0);return t&&l.shellSuspendCounter++,qt=Rn=null,el=e,z.H=a,z.A=i,k===null&&(pl=null,F=0,Ga()),s}function hd(){for(;k!==null;)vg(k)}function yd(l,t){var n=el;el|=2;var e=hg(),a=yg();pl!==l||F!==t?(bi=null,vi=et()+500,_e(l,t)):be=Ce(l,t);l:do try{if(il!==0&&k!==null){t=k;var i=ct;t:switch(il){case 1:il=0,ct=null,Te(l,t,i,1);break;case 2:case 9:if(jr(i)){il=0,ct=null,bg(t);break}t=function(){il!==2&&il!==9||pl!==l||(il=7),Ct(l)},i.then(t,t);break l;case 3:il=7;break l;case 4:il=5;break l;case 7:jr(i)?(il=0,ct=null,bg(t)):(il=0,ct=null,Te(l,t,i,7));break;case 5:var s=null;switch(k.tag){case 26:s=k.memoizedState;case 5:case 27:var u=k;if(s?af(s):u.stateNode.complete){il=0,ct=null;var o=u.sibling;if(o!==null)k=o;else{var h=u.return;h!==null?(k=h,_i(h)):k=null}break t}}il=0,ct=null,Te(l,t,i,5);break;case 6:il=0,ct=null,Te(l,t,i,6);break;case 8:Nu(),Ml=6;break l;default:throw Error(p(462))}}vd();break}catch(S){dg(l,S)}while(!0);return qt=Rn=null,z.H=e,z.A=a,el=n,k!==null?0:(pl=null,F=0,Ga(),Ml)}function vd(){for(;k!==null&&!Gf();)vg(k)}function vg(l){var t=Qc(l.alternate,l,Jt);l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function bg(l){var t=l,n=t.alternate;switch(t.tag){case 15:case 0:t=Bc(n,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Bc(n,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:ks(t);default:Vc(n,t),t=k=yr(t,Jt),t=Qc(n,t,Jt)}l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function Te(l,t,n,e){qt=Rn=null,ks(t),fe=null,Je=0;var a=t.return;try{if(sd(l,a,t,n,F)){Ml=1,ri(l,yt(n,l.current)),k=null;return}}catch(i){if(a!==null)throw k=a,i;Ml=1,ri(l,yt(n,l.current)),k=null;return}t.flags&32768?(ll||e===1?l=!0:be||(F&536870912)!==0?l=!1:(fn=l=!0,(e===2||e===9||e===3||e===6)&&(e=ot.current,e!==null&&e.tag===13&&(e.flags|=16384))),Sg(t,l)):_i(t)}function _i(l){var t=l;do{if((t.flags&32768)!==0){Sg(t,fn);return}l=t.return;var n=rd(t.alternate,t,Jt);if(n!==null){k=n;return}if(t=t.sibling,t!==null){k=t;return}k=t=l}while(t!==null);Ml===0&&(Ml=5)}function Sg(l,t){do{var n=cd(l.alternate,l);if(n!==null){n.flags&=32767,k=n;return}if(n=l.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(l=l.sibling,l!==null)){k=l;return}k=l=n}while(l!==null);Ml=6,k=null}function zg(l,t,n,e,a,i,s,u,o){l.cancelPendingCommit=null;do Ti();while(Rl!==0);if((el&6)!==0)throw Error(p(327));if(t!==null){if(t===l.current)throw Error(p(177));if(i=t.lanes|t.childLanes,i|=_s,Ff(l,n,i,s,u,o),l===pl&&(k=pl=null,F=0),ze=t,mn=l,kt=n,Ou=i,Cu=a,cg=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,_d(Ma,function(){return Eg(),null})):(l.callbackNode=null,l.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=z.T,z.T=null,a=j.p,j.p=2,s=el,el|=4;try{gd(l,t,n)}finally{el=s,j.p=a,z.T=e}}Rl=1,_g(),Tg(),Ag()}}function _g(){if(Rl===1){Rl=0;var l=mn,t=ze,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var e=j.p;j.p=2;var a=el;el|=4;try{ng(t,l);var i=Ku,s=or(l.containerInfo),u=i.focusedElem,o=i.selectionRange;if(s!==u&&u&&u.ownerDocument&&ur(u.ownerDocument.documentElement,u)){if(o!==null&&ys(u)){var h=o.start,S=o.end;if(S===void 0&&(S=h),"selectionStart"in u)u.selectionStart=h,u.selectionEnd=Math.min(S,u.value.length);else{var A=u.ownerDocument||document,y=A&&A.defaultView||window;if(y.getSelection){var b=y.getSelection(),R=u.textContent.length,X=Math.min(o.start,R),gl=o.end===void 0?X:Math.min(o.end,R);!b.extend&&X>gl&&(s=gl,gl=X,X=s);var f=sr(u,X),c=sr(u,gl);if(f&&c&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==c.node||b.focusOffset!==c.offset)){var m=A.createRange();m.setStart(f.node,f.offset),b.removeAllRanges(),X>gl?(b.addRange(m),b.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),b.addRange(m))}}}}for(A=[],b=u;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var _=A[u];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Ri=!!Zu,Ku=Zu=null}finally{el=a,j.p=e,z.T=n}}l.current=t,Rl=2}}function Tg(){if(Rl===2){Rl=0;var l=mn,t=ze,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var e=j.p;j.p=2;var a=el;el|=4;try{Fc(l,t.alternate,t)}finally{el=a,j.p=e,z.T=n}}Rl=3}}function Ag(){if(Rl===4||Rl===3){Rl=0,Qf();var l=mn,t=ze,n=kt,e=cg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Rl=5:(Rl=0,ze=mn=null,Mg(l,l.pendingLanes));var a=l.pendingLanes;if(a===0&&(dn=null),Ii(n),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Oe,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=z.T,a=j.p,j.p=2,z.T=null;try{for(var i=l.onRecoverableError,s=0;s<e.length;s++){var u=e[s];i(u.value,{componentStack:u.stack})}}finally{z.T=t,j.p=a}}(kt&3)!==0&&Ti(),Ct(l),a=l.pendingLanes,(n&261930)!==0&&(a&42)!==0?l===xu?ga++:(ga=0,xu=l):ga=0,fa(0)}}function Mg(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Ke(t)))}function Ti(){return _g(),Tg(),Ag(),Eg()}function Eg(){if(Rl!==5)return!1;var l=mn,t=Ou;Ou=0;var n=Ii(kt),e=z.T,a=j.p;try{j.p=32>n?32:n,z.T=null,n=Cu,Cu=null;var i=mn,s=kt;if(Rl=0,ze=mn=null,kt=0,(el&6)!==0)throw Error(p(331));var u=el;if(el|=4,ug(i.current),ag(i,i.current,s,n),el=u,fa(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Oe,i)}catch{}return!0}finally{j.p=a,z.T=e,Mg(l,t)}}function wg(l,t,n){t=yt(n,t),t=cu(l.stateNode,t,2),l=on(l,t,2),l!==null&&(xe(l,2),Ct(l))}function sl(l,t,n){if(l.tag===3)wg(l,l,n);else for(;t!==null;){if(t.tag===3){wg(t,l,n);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(dn===null||!dn.has(e))){l=yt(n,l),n=jc(2),e=on(t,n,2),e!==null&&(Dc(n,e,t,l),xe(e,2),Ct(e));break}}t=t.return}}function Ru(l,t,n){var e=l.pingCache;if(e===null){e=l.pingCache=new dd;var a=new Set;e.set(t,a)}else a=e.get(t),a===void 0&&(a=new Set,e.set(t,a));a.has(n)||(wu=!0,a.add(n),l=bd.bind(null,l,t,n),t.then(l,l))}function bd(l,t,n){var e=l.pingCache;e!==null&&e.delete(t),l.pingedLanes|=l.suspendedLanes&n,l.warmLanes&=~n,pl===l&&(F&n)===n&&(Ml===4||Ml===3&&(F&62914560)===F&&300>et()-yi?(el&2)===0&&_e(l,0):ju|=n,Se===F&&(Se=0)),Ct(l)}function jg(l,t){t===0&&(t=_o()),l=xn(l,t),l!==null&&(xe(l,t),Ct(l))}function Sd(l){var t=l.memoizedState,n=0;t!==null&&(n=t.retryLane),jg(l,n)}function zd(l,t){var n=0;switch(l.tag){case 31:case 13:var e=l.stateNode,a=l.memoizedState;a!==null&&(n=a.retryLane);break;case 19:e=l.stateNode;break;case 22:e=l.stateNode._retryCache;break;default:throw Error(p(314))}e!==null&&e.delete(t),jg(l,n)}function _d(l,t){return Ji(l,t)}var Ai=null,Ae=null,Bu=!1,Mi=!1,Hu=!1,yn=0;function Ct(l){l!==Ae&&l.next===null&&(Ae===null?Ai=Ae=l:Ae=Ae.next=l),Mi=!0,Bu||(Bu=!0,Ad())}function fa(l,t){if(!Hu&&Mi){Hu=!0;do for(var n=!1,e=Ai;e!==null;){if(l!==0){var a=e.pendingLanes;if(a===0)var i=0;else{var s=e.suspendedLanes,u=e.pingedLanes;i=(1<<31-it(42|l)+1)-1,i&=a&~(s&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,xg(e,i))}else i=F,i=Da(e,e===pl?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||Ce(e,i)||(n=!0,xg(e,i));e=e.next}while(n);Hu=!1}}function Td(){Dg()}function Dg(){Mi=Bu=!1;var l=0;yn!==0&&Ud()&&(l=yn);for(var t=et(),n=null,e=Ai;e!==null;){var a=e.next,i=Og(e,t);i===0?(e.next=null,n===null?Ai=a:n.next=a,a===null&&(Ae=n)):(n=e,(l!==0||(i&3)!==0)&&(Mi=!0)),e=a}Rl!==0&&Rl!==5||fa(l),yn!==0&&(yn=0)}function Og(l,t){for(var n=l.suspendedLanes,e=l.pingedLanes,a=l.expirationTimes,i=l.pendingLanes&-62914561;0<i;){var s=31-it(i),u=1<<s,o=a[s];o===-1?((u&n)===0||(u&e)!==0)&&(a[s]=Wf(u,t)):o<=t&&(l.expiredLanes|=u),i&=~u}if(t=pl,n=F,n=Da(l,l===t?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e=l.callbackNode,n===0||l===t&&(il===2||il===9)||l.cancelPendingCommit!==null)return e!==null&&e!==null&&ki(e),l.callbackNode=null,l.callbackPriority=0;if((n&3)===0||Ce(l,n)){if(t=n&-n,t===l.callbackPriority)return t;switch(e!==null&&ki(e),Ii(n)){case 2:case 8:n=So;break;case 32:n=Ma;break;case 268435456:n=zo;break;default:n=Ma}return e=Cg.bind(null,l),n=Ji(n,e),l.callbackPriority=t,l.callbackNode=n,t}return e!==null&&e!==null&&ki(e),l.callbackPriority=2,l.callbackNode=null,2}function Cg(l,t){if(Rl!==0&&Rl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var n=l.callbackNode;if(Ti()&&l.callbackNode!==n)return null;var e=F;return e=Da(l,l===pl?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e===0?null:(fg(l,e,t),Og(l,et()),l.callbackNode!=null&&l.callbackNode===n?Cg.bind(null,l):null)}function xg(l,t){if(Ti())return null;fg(l,t,!0)}function Ad(){Bd(function(){(el&6)!==0?Ji(bo,Td):Dg()})}function qu(){if(yn===0){var l=re;l===0&&(l=Ea,Ea<<=1,(Ea&261888)===0&&(Ea=256)),yn=l}return yn}function Ng(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Na(""+l)}function Ug(l,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,l.id&&n.setAttribute("form",l.id),t.parentNode.insertBefore(n,t),l=new FormData(l),n.parentNode.removeChild(n),l}function Md(l,t,n,e,a){if(t==="submit"&&n&&n.stateNode===a){var i=Ng((a[Wl]||null).action),s=e.submitter;s&&(t=(t=s[Wl]||null)?Ng(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var u=new Ha("action","action",null,e,a);l.push({event:u,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(yn!==0){var o=s?Ug(a,s):new FormData(a);au(n,{pending:!0,data:o,method:a.method,action:i},null,o)}}else typeof i=="function"&&(u.preventDefault(),o=s?Ug(a,s):new FormData(a),au(n,{pending:!0,data:o,method:a.method,action:i},i,o))},currentTarget:a}]})}}for(var Yu=0;Yu<zs.length;Yu++){var Xu=zs[Yu],Ed=Xu.toLowerCase(),wd=Xu[0].toUpperCase()+Xu.slice(1);Mt(Ed,"on"+wd)}Mt(gr,"onAnimationEnd"),Mt(fr,"onAnimationIteration"),Mt(pr,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Lp,"onTransitionRun"),Mt(Vp,"onTransitionStart"),Mt(Zp,"onTransitionCancel"),Mt(dr,"onTransitionEnd"),kn("onMouseEnter",["mouseout","mouseover"]),kn("onMouseLeave",["mouseout","mouseover"]),kn("onPointerEnter",["pointerout","pointerover"]),kn("onPointerLeave",["pointerout","pointerover"]),jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pa));function Rg(l,t){t=(t&4)!==0;for(var n=0;n<l.length;n++){var e=l[n],a=e.event;e=e.listeners;l:{var i=void 0;if(t)for(var s=e.length-1;0<=s;s--){var u=e[s],o=u.instance,h=u.currentTarget;if(u=u.listener,o!==i&&a.isPropagationStopped())break l;i=u,a.currentTarget=h;try{i(a)}catch(S){Xa(S)}a.currentTarget=null,i=o}else for(s=0;s<e.length;s++){if(u=e[s],o=u.instance,h=u.currentTarget,u=u.listener,o!==i&&a.isPropagationStopped())break l;i=u,a.currentTarget=h;try{i(a)}catch(S){Xa(S)}a.currentTarget=null,i=o}}}}function W(l,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var e=l+"__bubble";n.has(e)||(Bg(t,l,2,!1),n.add(e))}function Gu(l,t,n){var e=0;t&&(e|=4),Bg(n,l,e,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Qu(l){if(!l[Ei]){l[Ei]=!0,Do.forEach(function(n){n!=="selectionchange"&&(jd.has(n)||Gu(n,!1,l),Gu(n,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,Gu("selectionchange",!1,t))}}function Bg(l,t,n,e){switch(ff(t)){case 2:var a=nm;break;case 8:a=em;break;default:a=eo}n=a.bind(null,t,n,l),a=void 0,!os||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),e?a!==void 0?l.addEventListener(t,n,{capture:!0,passive:a}):l.addEventListener(t,n,!0):a!==void 0?l.addEventListener(t,n,{passive:a}):l.addEventListener(t,n,!1)}function Lu(l,t,n,e,a){var i=e;if((t&1)===0&&(t&2)===0&&e!==null)l:for(;;){if(e===null)return;var s=e.tag;if(s===3||s===4){var u=e.stateNode.containerInfo;if(u===a)break;if(s===4)for(s=e.return;s!==null;){var o=s.tag;if((o===3||o===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;u!==null;){if(s=Kn(u),s===null)return;if(o=s.tag,o===5||o===6||o===26||o===27){e=i=s;continue l}u=u.parentNode}}e=e.return}Go(function(){var h=i,S=ss(n),A=[];l:{var y=mr.get(l);if(y!==void 0){var b=Ha,R=l;switch(l){case"keypress":if(Ra(n)===0)break l;case"keydown":case"keyup":b=zp;break;case"focusin":R="focus",b=fs;break;case"focusout":R="blur",b=fs;break;case"beforeblur":case"afterblur":b=fs;break;case"click":if(n.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ap;break;case gr:case fr:case pr:b=fp;break;case dr:b=Ep;break;case"scroll":case"scrollend":b=up;break;case"wheel":b=jp;break;case"copy":case"cut":case"paste":b=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ko;break;case"toggle":case"beforetoggle":b=Op}var X=(t&4)!==0,gl=!X&&(l==="scroll"||l==="scrollend"),f=X?y!==null?y+"Capture":null:y;X=[];for(var c=h,m;c!==null;){var _=c;if(m=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||m===null||f===null||(_=Re(c,f),_!=null&&X.push(da(c,_,m))),gl)break;c=c.return}0<X.length&&(y=new b(y,R,null,n,S),A.push({event:y,listeners:X}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",b=l==="mouseout"||l==="pointerout",y&&n!==is&&(R=n.relatedTarget||n.fromElement)&&(Kn(R)||R[Zn]))break l;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(R=n.relatedTarget||n.toElement,b=h,R=R?Kn(R):null,R!==null&&(gl=x(R),X=R.tag,R!==gl||X!==5&&X!==27&&X!==6)&&(R=null)):(b=null,R=h),b!==R)){if(X=Vo,_="onMouseLeave",f="onMouseEnter",c="mouse",(l==="pointerout"||l==="pointerover")&&(X=Ko,_="onPointerLeave",f="onPointerEnter",c="pointer"),gl=b==null?y:Ue(b),m=R==null?y:Ue(R),y=new X(_,c+"leave",b,n,S),y.target=gl,y.relatedTarget=m,_=null,Kn(S)===h&&(X=new X(f,c+"enter",R,n,S),X.target=m,X.relatedTarget=gl,_=X),gl=_,b&&R)t:{for(X=Dd,f=b,c=R,m=0,_=f;_;_=X(_))m++;_=0;for(var Y=c;Y;Y=X(Y))_++;for(;0<m-_;)f=X(f),m--;for(;0<_-m;)c=X(c),_--;for(;m--;){if(f===c||c!==null&&f===c.alternate){X=f;break t}f=X(f),c=X(c)}X=null}else X=null;b!==null&&Hg(A,y,b,X,!1),R!==null&&gl!==null&&Hg(A,gl,R,X,!0)}}l:{if(y=h?Ue(h):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var tl=lr;else if(Io(y))if(tr)tl=Xp;else{tl=qp;var H=Hp}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&as(h.elementType)&&(tl=lr):tl=Yp;if(tl&&(tl=tl(l,h))){Po(A,tl,n,S);break l}H&&H(l,y,h),l==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&es(y,"number",y.value)}switch(H=h?Ue(h):window,l){case"focusin":(Io(H)||H.contentEditable==="true")&&(te=H,vs=h,Le=null);break;case"focusout":Le=vs=te=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,rr(A,n,S);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":rr(A,n,S)}var Z;if(ds)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else le?Wo(l,n)&&(I="onCompositionEnd"):l==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&($o&&n.locale!=="ko"&&(le||I!=="onCompositionStart"?I==="onCompositionEnd"&&le&&(Z=Qo()):(ln=S,rs="value"in ln?ln.value:ln.textContent,le=!0)),H=wi(h,I),0<H.length&&(I=new Zo(I,l,null,n,S),A.push({event:I,listeners:H}),Z?I.data=Z:(Z=Fo(n),Z!==null&&(I.data=Z)))),(Z=xp?Np(l,n):Up(l,n))&&(I=wi(h,"onBeforeInput"),0<I.length&&(H=new Zo("onBeforeInput","beforeinput",null,n,S),A.push({event:H,listeners:I}),H.data=Z)),Md(A,l,h,n,S)}Rg(A,t)})}function da(l,t,n){return{instance:l,listener:t,currentTarget:n}}function wi(l,t){for(var n=t+"Capture",e=[];l!==null;){var a=l,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Re(l,n),a!=null&&e.unshift(da(l,a,i)),a=Re(l,t),a!=null&&e.push(da(l,a,i))),l.tag===3)return e;l=l.return}return[]}function Dd(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Hg(l,t,n,e,a){for(var i=t._reactName,s=[];n!==null&&n!==e;){var u=n,o=u.alternate,h=u.stateNode;if(u=u.tag,o!==null&&o===e)break;u!==5&&u!==26&&u!==27||h===null||(o=h,a?(h=Re(n,i),h!=null&&s.unshift(da(n,h,o))):a||(h=Re(n,i),h!=null&&s.push(da(n,h,o)))),n=n.return}s.length!==0&&l.push({event:t,listeners:s})}var Od=/\r\n?/g,Cd=/\u0000|\uFFFD/g;function qg(l){return(typeof l=="string"?l:""+l).replace(Od,`
`).replace(Cd,"")}function Yg(l,t){return t=qg(t),qg(l)===t}function cl(l,t,n,e,a,i){switch(n){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||Fn(l,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&Fn(l,""+e);break;case"className":Ca(l,"class",e);break;case"tabIndex":Ca(l,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Ca(l,n,e);break;case"style":Yo(l,e,i);break;case"data":if(t!=="object"){Ca(l,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||n!=="href")){l.removeAttribute(n);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(n);break}e=Na(""+e),l.setAttribute(n,e);break;case"action":case"formAction":if(typeof e=="function"){l.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&cl(l,t,"name",a.name,a,null),cl(l,t,"formEncType",a.formEncType,a,null),cl(l,t,"formMethod",a.formMethod,a,null),cl(l,t,"formTarget",a.formTarget,a,null)):(cl(l,t,"encType",a.encType,a,null),cl(l,t,"method",a.method,a,null),cl(l,t,"target",a.target,a,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(n);break}e=Na(""+e),l.setAttribute(n,e);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(p(61));if(n=e.__html,n!=null){if(a.children!=null)throw Error(p(60));l.innerHTML=n}}break;case"multiple":l.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":l.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){l.removeAttribute("xlink:href");break}n=Na(""+e),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(n,""+e):l.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(n,""):l.removeAttribute(n);break;case"capture":case"download":e===!0?l.setAttribute(n,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(n,e):l.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?l.setAttribute(n,e):l.removeAttribute(n);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?l.removeAttribute(n):l.setAttribute(n,e);break;case"popover":W("beforetoggle",l),W("toggle",l),Oa(l,"popover",e);break;case"xlinkActuate":Nt(l,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Nt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Nt(l,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Nt(l,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Nt(l,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Nt(l,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Oa(l,"is",e);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=ip.get(n)||n,Oa(l,n,e))}}function Vu(l,t,n,e,a,i){switch(n){case"style":Yo(l,e,i);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(p(61));if(n=e.__html,n!=null){if(a.children!=null)throw Error(p(60));l.innerHTML=n}}break;case"children":typeof e=="string"?Fn(l,e):(typeof e=="number"||typeof e=="bigint")&&Fn(l,""+e);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oo.hasOwnProperty(n))l:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=l[Wl]||null,i=i!=null?i[n]:null,typeof i=="function"&&l.removeEventListener(t,i,a),typeof e=="function")){typeof i!="function"&&i!==null&&(n in l?l[n]=null:l.hasAttribute(n)&&l.removeAttribute(n)),l.addEventListener(t,e,a);break l}n in l?l[n]=e:e===!0?l.setAttribute(n,""):Oa(l,n,e)}}}function Ll(l,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var e=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var s=n[i];if(s!=null)switch(i){case"src":e=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:cl(l,t,i,s,n,null)}}a&&cl(l,t,"srcSet",n.srcSet,n,null),e&&cl(l,t,"src",n.src,n,null);return;case"input":W("invalid",l);var u=i=s=a=null,o=null,h=null;for(e in n)if(n.hasOwnProperty(e)){var S=n[e];if(S!=null)switch(e){case"name":a=S;break;case"type":s=S;break;case"checked":o=S;break;case"defaultChecked":h=S;break;case"value":i=S;break;case"defaultValue":u=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(p(137,t));break;default:cl(l,t,e,S,n,null)}}Ro(l,i,u,o,h,s,a,!1);return;case"select":W("invalid",l),e=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(u=n[a],u!=null))switch(a){case"value":i=u;break;case"defaultValue":s=u;break;case"multiple":e=u;default:cl(l,t,a,u,n,null)}t=i,n=s,l.multiple=!!e,t!=null?Wn(l,!!e,t,!1):n!=null&&Wn(l,!!e,n,!0);return;case"textarea":W("invalid",l),i=a=e=null;for(s in n)if(n.hasOwnProperty(s)&&(u=n[s],u!=null))switch(s){case"value":e=u;break;case"defaultValue":a=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(p(91));break;default:cl(l,t,s,u,n,null)}Ho(l,e,a,i);return;case"option":for(o in n)if(n.hasOwnProperty(o)&&(e=n[o],e!=null))switch(o){case"selected":l.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:cl(l,t,o,e,n,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(e=0;e<pa.length;e++)W(pa[e],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in n)if(n.hasOwnProperty(h)&&(e=n[h],e!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:cl(l,t,h,e,n,null)}return;default:if(as(t)){for(S in n)n.hasOwnProperty(S)&&(e=n[S],e!==void 0&&Vu(l,t,S,e,n,void 0));return}}for(u in n)n.hasOwnProperty(u)&&(e=n[u],e!=null&&cl(l,t,u,e,n,null))}function xd(l,t,n,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,s=null,u=null,o=null,h=null,S=null;for(b in n){var A=n[b];if(n.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=A;default:e.hasOwnProperty(b)||cl(l,t,b,null,e,A)}}for(var y in e){var b=e[y];if(A=n[y],e.hasOwnProperty(y)&&(b!=null||A!=null))switch(y){case"type":i=b;break;case"name":a=b;break;case"checked":h=b;break;case"defaultChecked":S=b;break;case"value":s=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,t));break;default:b!==A&&cl(l,t,y,b,e,A)}}ns(l,s,u,o,h,S,i,a);return;case"select":b=s=u=y=null;for(i in n)if(o=n[i],n.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:e.hasOwnProperty(i)||cl(l,t,i,null,e,o)}for(a in e)if(i=e[a],o=n[a],e.hasOwnProperty(a)&&(i!=null||o!=null))switch(a){case"value":y=i;break;case"defaultValue":u=i;break;case"multiple":s=i;default:i!==o&&cl(l,t,a,i,e,o)}t=u,n=s,e=b,y!=null?Wn(l,!!n,y,!1):!!e!=!!n&&(t!=null?Wn(l,!!n,t,!0):Wn(l,!!n,n?[]:"",!1));return;case"textarea":b=y=null;for(u in n)if(a=n[u],n.hasOwnProperty(u)&&a!=null&&!e.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:cl(l,t,u,null,e,a)}for(s in e)if(a=e[s],i=n[s],e.hasOwnProperty(s)&&(a!=null||i!=null))switch(s){case"value":y=a;break;case"defaultValue":b=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(p(91));break;default:a!==i&&cl(l,t,s,a,e,i)}Bo(l,y,b);return;case"option":for(var R in n)if(y=n[R],n.hasOwnProperty(R)&&y!=null&&!e.hasOwnProperty(R))switch(R){case"selected":l.selected=!1;break;default:cl(l,t,R,null,e,y)}for(o in e)if(y=e[o],b=n[o],e.hasOwnProperty(o)&&y!==b&&(y!=null||b!=null))switch(o){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:cl(l,t,o,y,e,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in n)y=n[X],n.hasOwnProperty(X)&&y!=null&&!e.hasOwnProperty(X)&&cl(l,t,X,null,e,y);for(h in e)if(y=e[h],b=n[h],e.hasOwnProperty(h)&&y!==b&&(y!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:cl(l,t,h,y,e,b)}return;default:if(as(t)){for(var gl in n)y=n[gl],n.hasOwnProperty(gl)&&y!==void 0&&!e.hasOwnProperty(gl)&&Vu(l,t,gl,void 0,e,y);for(S in e)y=e[S],b=n[S],!e.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||Vu(l,t,S,y,e,b);return}}for(var f in n)y=n[f],n.hasOwnProperty(f)&&y!=null&&!e.hasOwnProperty(f)&&cl(l,t,f,null,e,y);for(A in e)y=e[A],b=n[A],!e.hasOwnProperty(A)||y===b||y==null&&b==null||cl(l,t,A,y,e,b)}function Xg(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nd(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,n=performance.getEntriesByType("resource"),e=0;e<n.length;e++){var a=n[e],i=a.transferSize,s=a.initiatorType,u=a.duration;if(i&&u&&Xg(s)){for(s=0,u=a.responseEnd,e+=1;e<n.length;e++){var o=n[e],h=o.startTime;if(h>u)break;var S=o.transferSize,A=o.initiatorType;S&&Xg(A)&&(o=o.responseEnd,s+=S*(o<u?1:(u-h)/(o-h)))}if(--e,t+=8*(i+s)/(a.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Zu=null,Ku=null;function ji(l){return l.nodeType===9?l:l.ownerDocument}function Gg(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function $u(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ju=null;function Ud(){var l=window.event;return l&&l.type==="popstate"?l===Ju?!1:(Ju=l,!0):(Ju=null,!1)}var Lg=typeof setTimeout=="function"?setTimeout:void 0,Rd=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Bd=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(l){return Vg.resolve(null).then(l).catch(Hd)}:Lg;function Hd(l){setTimeout(function(){throw l})}function vn(l){return l==="head"}function Zg(l,t){var n=t,e=0;do{var a=n.nextSibling;if(l.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(e===0){l.removeChild(a),je(t);return}e--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")e++;else if(n==="html")ma(l.ownerDocument.documentElement);else if(n==="head"){n=l.ownerDocument.head,ma(n);for(var i=n.firstChild;i;){var s=i.nextSibling,u=i.nodeName;i[Ne]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=s}}else n==="body"&&ma(l.ownerDocument.body);n=a}while(n);je(t)}function Kg(l,t){var n=l;l=0;do{var e=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),e&&e.nodeType===8)if(n=e.data,n==="/$"){if(l===0)break;l--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||l++;n=e}while(n)}function ku(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":ku(n),ls(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}l.removeChild(n)}}function qd(l,t,n,e){for(;l.nodeType===1;){var a=n;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(e){if(!l[Ne])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(i=l.getAttribute("rel"),i==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(i!==a.rel||l.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||l.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||l.getAttribute("title")!==(a.title==null?null:a.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(i=l.getAttribute("src"),(i!==(a.src==null?null:a.src)||l.getAttribute("type")!==(a.type==null?null:a.type)||l.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&l.getAttribute("name")===i)return l}else return l;if(l=_t(l.nextSibling),l===null)break}return null}function Yd(l,t,n){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!n||(l=_t(l.nextSibling),l===null))return null;return l}function $g(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=_t(l.nextSibling),l===null))return null;return l}function Wu(l){return l.data==="$?"||l.data==="$~"}function Fu(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Xd(l,t){var n=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||n.readyState!=="loading")t();else{var e=function(){t(),n.removeEventListener("DOMContentLoaded",e)};n.addEventListener("DOMContentLoaded",e),l._reactRetry=e}}function _t(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Iu=null;function Jg(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var n=l.data;if(n==="/$"||n==="/&"){if(t===0)return _t(l.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}l=l.nextSibling}return null}function kg(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var n=l.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return l;t--}else n!=="/$"&&n!=="/&"||t++}l=l.previousSibling}return null}function Wg(l,t,n){switch(t=ji(n),l){case"html":if(l=t.documentElement,!l)throw Error(p(452));return l;case"head":if(l=t.head,!l)throw Error(p(453));return l;case"body":if(l=t.body,!l)throw Error(p(454));return l;default:throw Error(p(451))}}function ma(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);ls(l)}var Tt=new Map,Fg=new Set;function Di(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=j.d;j.d={f:Gd,r:Qd,D:Ld,C:Vd,L:Zd,m:Kd,X:Jd,S:$d,M:kd};function Gd(){var l=Wt.f(),t=Si();return l||t}function Qd(l){var t=$n(l);t!==null&&t.tag===5&&t.type==="form"?dc(t):Wt.r(l)}var Me=typeof document>"u"?null:document;function Ig(l,t,n){var e=Me;if(e&&typeof t=="string"&&t){var a=mt(t);a='link[rel="'+l+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),Fg.has(a)||(Fg.add(a),l={rel:l,crossOrigin:n,href:t},e.querySelector(a)===null&&(t=e.createElement("link"),Ll(t,"link",l),Hl(t),e.head.appendChild(t)))}}function Ld(l){Wt.D(l),Ig("dns-prefetch",l,null)}function Vd(l,t){Wt.C(l,t),Ig("preconnect",l,t)}function Zd(l,t,n){Wt.L(l,t,n);var e=Me;if(e&&l&&t){var a='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+mt(n.imageSizes)+'"]')):a+='[href="'+mt(l)+'"]';var i=a;switch(t){case"style":i=Ee(l);break;case"script":i=we(l)}Tt.has(i)||(l=N({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:l,as:t},n),Tt.set(i,l),e.querySelector(a)!==null||t==="style"&&e.querySelector(ha(i))||t==="script"&&e.querySelector(ya(i))||(t=e.createElement("link"),Ll(t,"link",l),Hl(t),e.head.appendChild(t)))}}function Kd(l,t){Wt.m(l,t);var n=Me;if(n&&l){var e=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+mt(e)+'"][href="'+mt(l)+'"]',i=a;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=we(l)}if(!Tt.has(i)&&(l=N({rel:"modulepreload",href:l},t),Tt.set(i,l),n.querySelector(a)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(ya(i)))return}e=n.createElement("link"),Ll(e,"link",l),Hl(e),n.head.appendChild(e)}}}function $d(l,t,n){Wt.S(l,t,n);var e=Me;if(e&&l){var a=Jn(e).hoistableStyles,i=Ee(l);t=t||"default";var s=a.get(i);if(!s){var u={loading:0,preload:null};if(s=e.querySelector(ha(i)))u.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},n),(n=Tt.get(i))&&Pu(l,n);var o=s=e.createElement("link");Hl(o),Ll(o,"link",l),o._p=new Promise(function(h,S){o.onload=h,o.onerror=S}),o.addEventListener("load",function(){u.loading|=1}),o.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Oi(s,t,e)}s={type:"stylesheet",instance:s,count:1,state:u},a.set(i,s)}}}function Jd(l,t){Wt.X(l,t);var n=Me;if(n&&l){var e=Jn(n).hoistableScripts,a=we(l),i=e.get(a);i||(i=n.querySelector(ya(a)),i||(l=N({src:l,async:!0},t),(t=Tt.get(a))&&lo(l,t),i=n.createElement("script"),Hl(i),Ll(i,"link",l),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(a,i))}}function kd(l,t){Wt.M(l,t);var n=Me;if(n&&l){var e=Jn(n).hoistableScripts,a=we(l),i=e.get(a);i||(i=n.querySelector(ya(a)),i||(l=N({src:l,async:!0,type:"module"},t),(t=Tt.get(a))&&lo(l,t),i=n.createElement("script"),Hl(i),Ll(i,"link",l),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(a,i))}}function Pg(l,t,n,e){var a=(a=J.current)?Di(a):null;if(!a)throw Error(p(446));switch(l){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ee(n.href),n=Jn(a).hoistableStyles,e=n.get(t),e||(e={type:"style",instance:null,count:0,state:null},n.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){l=Ee(n.href);var i=Jn(a).hoistableStyles,s=i.get(l);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(l,s),(i=a.querySelector(ha(l)))&&!i._p&&(s.instance=i,s.state.loading=5),Tt.has(l)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Tt.set(l,n),i||Wd(a,l,n,s.state))),t&&e===null)throw Error(p(528,""));return s}if(t&&e!==null)throw Error(p(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=we(n),n=Jn(a).hoistableScripts,e=n.get(t),e||(e={type:"script",instance:null,count:0,state:null},n.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,l))}}function Ee(l){return'href="'+mt(l)+'"'}function ha(l){return'link[rel="stylesheet"]['+l+"]"}function lf(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function Wd(l,t,n,e){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=l.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),Ll(t,"link",n),Hl(t),l.head.appendChild(t))}function we(l){return'[src="'+mt(l)+'"]'}function ya(l){return"script[async]"+l}function tf(l,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var e=l.querySelector('style[data-href~="'+mt(n.href)+'"]');if(e)return t.instance=e,Hl(e),e;var a=N({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return e=(l.ownerDocument||l).createElement("style"),Hl(e),Ll(e,"style",a),Oi(e,n.precedence,l),t.instance=e;case"stylesheet":a=Ee(n.href);var i=l.querySelector(ha(a));if(i)return t.state.loading|=4,t.instance=i,Hl(i),i;e=lf(n),(a=Tt.get(a))&&Pu(e,a),i=(l.ownerDocument||l).createElement("link"),Hl(i);var s=i;return s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),Ll(i,"link",e),t.state.loading|=4,Oi(i,n.precedence,l),t.instance=i;case"script":return i=we(n.src),(a=l.querySelector(ya(i)))?(t.instance=a,Hl(a),a):(e=n,(a=Tt.get(i))&&(e=N({},n),lo(e,a)),l=l.ownerDocument||l,a=l.createElement("script"),Hl(a),Ll(a,"link",e),l.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,Oi(e,n.precedence,l));return t.instance}function Oi(l,t,n){for(var e=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=e.length?e[e.length-1]:null,i=a,s=0;s<e.length;s++){var u=e[s];if(u.dataset.precedence===t)i=u;else if(i!==a)break}i?i.parentNode.insertBefore(l,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(l,t.firstChild))}function Pu(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function lo(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Ci=null;function nf(l,t,n){if(Ci===null){var e=new Map,a=Ci=new Map;a.set(n,e)}else a=Ci,e=a.get(n),e||(e=new Map,a.set(n,e));if(e.has(l))return e;for(e.set(l,null),n=n.getElementsByTagName(l),a=0;a<n.length;a++){var i=n[a];if(!(i[Ne]||i[Yl]||l==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=l+s;var u=e.get(s);u?u.push(i):e.set(s,[i])}}return e}function ef(l,t,n){l=l.ownerDocument||l,l.head.insertBefore(n,t==="title"?l.querySelector("head > title"):null)}function Fd(l,t,n){if(n===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function af(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Id(l,t,n,e){if(n.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Ee(e.href),i=t.querySelector(ha(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xi.bind(l),t.then(l,l)),n.state.loading|=4,n.instance=i,Hl(i);return}i=t.ownerDocument||t,e=lf(e),(a=Tt.get(a))&&Pu(e,a),i=i.createElement("link"),Hl(i);var s=i;s._p=new Promise(function(u,o){s.onload=u,s.onerror=o}),Ll(i,"link",e),n.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(l.count++,n=xi.bind(l),t.addEventListener("load",n),t.addEventListener("error",n))}}var to=0;function Pd(l,t){return l.stylesheets&&l.count===0&&Ui(l,l.stylesheets),0<l.count||0<l.imgCount?function(n){var e=setTimeout(function(){if(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend){var i=l.unsuspend;l.unsuspend=null,i()}},6e4+t);0<l.imgBytes&&to===0&&(to=62500*Nd());var a=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend)){var i=l.unsuspend;l.unsuspend=null,i()}},(l.imgBytes>to?50:800)+t);return l.unsuspend=n,function(){l.unsuspend=null,clearTimeout(e),clearTimeout(a)}}:null}function xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Ni=null;function Ui(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Ni=new Map,t.forEach(lm,l),Ni=null,xi.call(l))}function lm(l,t){if(!(t.state.loading&4)){var n=Ni.get(l);if(n)var e=n.get(null);else{n=new Map,Ni.set(l,n);for(var a=l.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var s=a[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),e=s)}e&&n.set(null,e)}a=t.instance,s=a.getAttribute("data-precedence"),i=n.get(s)||e,i===e&&n.set(null,a),n.set(s,a),this.count++,e=xi.bind(this),a.addEventListener("load",e),a.addEventListener("error",e),i?i.parentNode.insertBefore(a,i.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(a,l.firstChild)),t.state.loading|=4}}var va={$$typeof:ul,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function tm(l,t,n,e,a,i,s,u,o){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=e,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function sf(l,t,n,e,a,i,s,u,o,h,S,A){return l=new tm(l,t,n,s,o,h,S,A,u),t=1,i===!0&&(t|=24),i=ut(3,null,null,t),l.current=i,i.stateNode=l,t=Us(),t.refCount++,l.pooledCache=t,t.refCount++,i.memoizedState={element:e,isDehydrated:n,cache:t},qs(i),l}function uf(l){return l?(l=ae,l):ae}function of(l,t,n,e,a,i){a=uf(a),e.context===null?e.context=a:e.pendingContext=a,e=un(t),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=on(l,e,t),n!==null&&(nt(n,l,t),We(n,l,t))}function rf(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var n=l.retryLane;l.retryLane=n!==0&&n<t?n:t}}function no(l,t){rf(l,t),(l=l.alternate)&&rf(l,t)}function cf(l){if(l.tag===13||l.tag===31){var t=xn(l,67108864);t!==null&&nt(t,l,67108864),no(l,67108864)}}function gf(l){if(l.tag===13||l.tag===31){var t=ft();t=Fi(t);var n=xn(l,t);n!==null&&nt(n,l,t),no(l,t)}}var Ri=!0;function nm(l,t,n,e){var a=z.T;z.T=null;var i=j.p;try{j.p=2,eo(l,t,n,e)}finally{j.p=i,z.T=a}}function em(l,t,n,e){var a=z.T;z.T=null;var i=j.p;try{j.p=8,eo(l,t,n,e)}finally{j.p=i,z.T=a}}function eo(l,t,n,e){if(Ri){var a=ao(e);if(a===null)Lu(l,t,e,Bi,n),pf(l,e);else if(im(a,l,t,n,e))e.stopPropagation();else if(pf(l,e),t&4&&-1<am.indexOf(l)){for(;a!==null;){var i=$n(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=wn(i.pendingLanes);if(s!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;s;){var o=1<<31-it(s);u.entanglements[1]|=o,s&=~o}Ct(i),(el&6)===0&&(vi=et()+500,fa(0))}}break;case 31:case 13:u=xn(i,2),u!==null&&nt(u,i,2),Si(),no(i,2)}if(i=ao(e),i===null&&Lu(l,t,e,Bi,n),i===a)break;a=i}a!==null&&e.stopPropagation()}else Lu(l,t,e,null,n)}}function ao(l){return l=ss(l),io(l)}var Bi=null;function io(l){if(Bi=null,l=Kn(l),l!==null){var t=x(l);if(t===null)l=null;else{var n=t.tag;if(n===13){if(l=q(t),l!==null)return l;l=null}else if(n===31){if(l=P(t),l!==null)return l;l=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Bi=l,null}function ff(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lf()){case bo:return 2;case So:return 8;case Ma:case Vf:return 32;case zo:return 268435456;default:return 32}default:return 32}}var so=!1,bn=null,Sn=null,zn=null,ba=new Map,Sa=new Map,_n=[],am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pf(l,t){switch(l){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(t.pointerId)}}function za(l,t,n,e,a,i){return l===null||l.nativeEvent!==i?(l={blockedOn:t,domEventName:n,eventSystemFlags:e,nativeEvent:i,targetContainers:[a]},t!==null&&(t=$n(t),t!==null&&cf(t)),l):(l.eventSystemFlags|=e,t=l.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),l)}function im(l,t,n,e,a){switch(t){case"focusin":return bn=za(bn,l,t,n,e,a),!0;case"dragenter":return Sn=za(Sn,l,t,n,e,a),!0;case"mouseover":return zn=za(zn,l,t,n,e,a),!0;case"pointerover":var i=a.pointerId;return ba.set(i,za(ba.get(i)||null,l,t,n,e,a)),!0;case"gotpointercapture":return i=a.pointerId,Sa.set(i,za(Sa.get(i)||null,l,t,n,e,a)),!0}return!1}function df(l){var t=Kn(l.target);if(t!==null){var n=x(t);if(n!==null){if(t=n.tag,t===13){if(t=q(n),t!==null){l.blockedOn=t,wo(l.priority,function(){gf(n)});return}}else if(t===31){if(t=P(n),t!==null){l.blockedOn=t,wo(l.priority,function(){gf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){l.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Hi(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var n=ao(l.nativeEvent);if(n===null){n=l.nativeEvent;var e=new n.constructor(n.type,n);is=e,n.target.dispatchEvent(e),is=null}else return t=$n(n),t!==null&&cf(t),l.blockedOn=n,!1;t.shift()}return!0}function mf(l,t,n){Hi(l)&&n.delete(t)}function sm(){so=!1,bn!==null&&Hi(bn)&&(bn=null),Sn!==null&&Hi(Sn)&&(Sn=null),zn!==null&&Hi(zn)&&(zn=null),ba.forEach(mf),Sa.forEach(mf)}function qi(l,t){l.blockedOn===t&&(l.blockedOn=null,so||(so=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,sm)))}var Yi=null;function hf(l){Yi!==l&&(Yi=l,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Yi===l&&(Yi=null);for(var t=0;t<l.length;t+=3){var n=l[t],e=l[t+1],a=l[t+2];if(typeof e!="function"){if(io(e||n)===null)continue;break}var i=$n(n);i!==null&&(l.splice(t,3),t-=3,au(i,{pending:!0,data:a,method:n.method,action:e},e,a))}}))}function je(l){function t(o){return qi(o,l)}bn!==null&&qi(bn,l),Sn!==null&&qi(Sn,l),zn!==null&&qi(zn,l),ba.forEach(t),Sa.forEach(t);for(var n=0;n<_n.length;n++){var e=_n[n];e.blockedOn===l&&(e.blockedOn=null)}for(;0<_n.length&&(n=_n[0],n.blockedOn===null);)df(n),n.blockedOn===null&&_n.shift();if(n=(l.ownerDocument||l).$$reactFormReplay,n!=null)for(e=0;e<n.length;e+=3){var a=n[e],i=n[e+1],s=a[Wl]||null;if(typeof i=="function")s||hf(n);else if(s){var u=null;if(i&&i.hasAttribute("formAction")){if(a=i,s=i[Wl]||null)u=s.formAction;else if(io(a)!==null)continue}else u=s.action;typeof u=="function"?n[e+1]=u:(n.splice(e,3),e-=3),hf(n)}}}function yf(){function l(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return a=s})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),e||setTimeout(n,20)}function n(){if(!e&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,a=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){e=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function uo(l){this._internalRoot=l}Xi.prototype.render=uo.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(p(409));var n=t.current,e=ft();of(n,e,l,t,null,null)},Xi.prototype.unmount=uo.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;of(l.current,2,null,l,null,null),Si(),t[Zn]=null}};function Xi(l){this._internalRoot=l}Xi.prototype.unstable_scheduleHydration=function(l){if(l){var t=Eo();l={blockedOn:null,target:l,priority:t};for(var n=0;n<_n.length&&t!==0&&t<_n[n].priority;n++);_n.splice(n,0,l),n===0&&df(l)}};var vf=w.version;if(vf!=="19.2.3")throw Error(p(527,vf,"19.2.3"));j.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(p(188)):(l=Object.keys(l).join(","),Error(p(268,l)));return l=T(t),l=l!==null?D(l):null,l=l===null?null:l.stateNode,l};var um={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Oe=Gi.inject(um),at=Gi}catch{}}return Ta.createRoot=function(l,t){if(!E(l))throw Error(p(299));var n=!1,e="",a=Ac,i=Mc,s=Ec;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=sf(l,1,!1,null,null,n,e,null,a,i,s,yf),l[Zn]=t.current,Qu(l),new uo(t)},Ta.hydrateRoot=function(l,t,n){if(!E(l))throw Error(p(299));var e=!1,a="",i=Ac,s=Mc,u=Ec,o=null;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.formState!==void 0&&(o=n.formState)),t=sf(l,1,!0,t,n??null,e,a,o,i,s,u,yf),t.context=uf(null),n=t.current,e=ft(),e=Fi(e),a=un(e),a.callback=null,on(n,a,e),n=e,t.current.lanes=n,xe(t,n),Ct(t),l[Zn]=t.current,Qu(l),new Xi(t)},Ta.version="19.2.3",Ta}var jf;function ym(){if(jf)return co.exports;jf=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(w){console.error(w)}}return v(),co.exports=hm(),co.exports}var vm=ym();const bm=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sm=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(w,C,p)=>p?p.toUpperCase():C.toLowerCase()),Df=v=>{const w=Sm(v);return w.charAt(0).toUpperCase()+w.slice(1)},Hf=(...v)=>v.filter((w,C,p)=>!!w&&w.trim()!==""&&p.indexOf(w)===C).join(" ").trim(),zm=v=>{for(const w in v)if(w.startsWith("aria-")||w==="role"||w==="title")return!0};var _m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Tm=zl.forwardRef(({color:v="currentColor",size:w=24,strokeWidth:C=2,absoluteStrokeWidth:p,className:E="",children:x,iconNode:q,...P},U)=>zl.createElement("svg",{ref:U,..._m,width:w,height:w,stroke:v,strokeWidth:p?Number(C)*24/Number(w):C,className:Hf("lucide",E),...!x&&!zm(P)&&{"aria-hidden":"true"},...P},[...q.map(([T,D])=>zl.createElement(T,D)),...Array.isArray(x)?x:[x]]));const An=(v,w)=>{const C=zl.forwardRef(({className:p,...E},x)=>zl.createElement(Tm,{ref:x,iconNode:w,className:Hf(`lucide-${bm(Df(v))}`,`lucide-${v}`,p),...E}));return C.displayName=Df(v),C};const Am=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],Mm=An("bird",Am);const Em=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],wm=An("circle",Em);const jm=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Dm=An("key",jm);const Om=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Cm=An("music",Om);const xm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nm=An("star",xm);const Um=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Rm=An("volume-2",Um);const Bm=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Hm=An("volume-x",Bm);const qm=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qf=An("x",qm);function Ym({displayName:v,onConfirm:w,onCancel:C,onClose:p}){return d.jsx("div",{className:"modal-overlay",onClick:p,children:d.jsx("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:p,children:d.jsx(qf,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[v,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:w,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",v]}),d.jsx("button",{onClick:C,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function Yf(){const v=localStorage.getItem("openedWindows");if(!v)return new Set;try{const w=JSON.parse(v);return new Set(w)}catch(w){return console.error("Failed to parse opened windows:",w),new Set}}function Xm(v){const w=Yf();return w.add(v),localStorage.setItem("openedWindows",JSON.stringify([...w])),w}function Of(){localStorage.removeItem("openedWindows")}function Gm(){localStorage.removeItem("adventCalendarUser")}const Cf=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function Qm({userName:v,onUserSelect:w}){const[C]=zl.useState(()=>Cf[Math.floor(Math.random()*Cf.length)]),[p,E]=zl.useState(!1),x=v==="Tanya"?"Таня":v==="Zebra"?"Зёбра":"неведомый гость",q=()=>{E(!0)},P=()=>{Gm(),Of(),E(!1),window.location.reload()},U=()=>{Of(),E(!1)},T=()=>{E(!1)};return v?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[C,","," ",d.jsx("span",{className:"user-name clickable",onClick:q,title:`А точно ли я ${x}?..`,children:x}),"!"]})}),p&&(v==="Tanya"||v==="Zebra")&&d.jsx(Ym,{displayName:x,onConfirm:P,onCancel:U,onClose:T})]}):d.jsxs("div",{className:"user-selection",children:[d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>w("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>w("Zebra"),children:"Зёбра"})]})]})}function Lm(){const[v,w]=zl.useState([]),[C,p]=zl.useState([]);return zl.useEffect(()=>{const E=U=>T=>{const D=Math.sin(U*9301+T*49297)*43758.5453;return D-Math.floor(D)},x=Array.from({length:60}).map((U,T)=>{const D=E(T+1);return{left:`${Math.floor(D(1)*100)}%`,top:`${Math.floor(D(2)*70)}%`,animationDelay:`${(D(3)*3).toFixed(2)}s`,opacity:+(.3+D(4)*.7).toFixed(2)}}),q=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,T)=>{const D=E(100+T);let N=30+Math.floor(D(1)*60),K=Math.max(10,Math.floor(D(2)*30));const yl=q[T%q.length],vl=+(.35+D(3)*.55).toFixed(2),_l=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(D(4)*30)}% ${30+Math.floor(D(5)*30)}%`,bl=40+Math.floor(D(6)*40),El=Math.floor(D(7)*20),ul=-20+Math.floor(D(8)*140);let Tl=5+Math.floor(D(9)*40);return T===0&&(Tl=Math.max(2,Tl-8),N=Math.max(20,Math.floor(N*.85)),K=Math.max(8,Math.floor(K*.8))),{left:`${ul}%`,top:`${Tl}%`,width:`${N}vw`,height:`${K}vh`,opacity:vl,color:_l,borderRadius:Ul,duration:bl,delay:El}});window.requestAnimationFrame(()=>{w(x),p(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:v.map((E,x)=>d.jsx("div",{className:"star",style:{left:E.left,top:E.top,animationDelay:E.animationDelay,opacity:E.opacity}},x))})]}),d.jsx("div",{className:"layer layer-clouds",children:C.map((E,x)=>d.jsx("div",{className:`cloud cloud-${x+1}`,style:{position:"absolute",left:E.left,top:E.top,width:E.width,height:E.height,background:E.color,opacity:E.opacity,borderRadius:E.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${E.duration}s linear ${E.delay}s infinite`}},x))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((E,x)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${E},300 ${E-20},250 ${E-15},250 ${E-30},200 ${E-25},200 ${E-40},150 ${E+40},150 ${E+25},200 ${E+30},200 ${E+15},250 ${E+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:E-5,y:"280",width:"10",height:"20",fill:"#111827"})]},x))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const Vm=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium"],Zm=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square"],xf=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window"],Nf=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Uf=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Rf=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Bf=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],Km=v=>{switch(v){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(wm,{className:"door-handle ring",size:12});case"star":return d.jsx(Nm,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},$m=v=>{if(v===0)return null;const w=v===4||v===6?2:4,C=v===4?2:v===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${w}, 1fr)`,gridTemplateRows:`repeat(${C}, 1fr)`},children:Array.from({length:v}).map((p,E)=>d.jsx("div",{className:"window-pane"},E))})},Jm=v=>{if(v==="none")return null;switch(v){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},km=v=>{if(v==="none")return null;switch(v){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function Wm({windowNumber:v,isActive:w,isOpened:C,isExactMatch:p,onClick:E}){const x=zl.useRef(null),q=v===17,P=()=>{q&&x.current&&(x.current.currentTime=0,x.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},U=Vm[v-1],T=Zm[v-1],D=w&&!C||w&&p?"window-glow-intense":"",K=new Set([11,6,12,16,25]).has(v),yl=K?"window-round":T,_l=xf[v-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<v;Sl++)xf[Sl]==="door"?Ul++:bl++;const El=Nf[(Ul-1)%Nf.length],ul=Uf[(bl-1)%Uf.length],Tl=Rf[(Ul-1)%Rf.length],Vl=Bf[(bl-1)%Bf.length];return d.jsx("div",{className:`calendar-window ${U} ${yl} ${D} ${C?"window-opened":""} ${w?"window-active":"window-inactive"}`,onClick:E,onMouseEnter:P,children:_l?d.jsxs("div",{className:`door-element ${El.type}`,children:[Jm(Tl),d.jsx("div",{className:`door-frame frame-${El.frame}`,children:d.jsxs("div",{className:`door-panel wood-${El.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[El.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[Km(El.handle),El.hasKeyhole&&d.jsx(Dm,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:v})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${U}`,children:[km(Vl),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${ul.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[$m(ul.panes),ul.shape==="arched"&&d.jsx("div",{className:"window-arch"}),q&&d.jsx(Mm,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:v})]}),ul.hasSill&&d.jsx("div",{className:"window-sill",children:ul.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function Fm({windowNumber:v,message:w,onClose:C}){return d.jsx("div",{className:"modal-overlay",onClick:C,children:d.jsx("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:C,children:d.jsx(qf,{size:24})}),v!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",v]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:w}})]})})})}function Qi(v){const w=new Date(Date.UTC(2025,11,19,21,0,0,0)),C=v-1;return new Date(w.getTime()+C*24*60*60*1e3)}function Li(v,w){return w.getTime()>=v.getTime()}function mo(v,w){const C=new Date(v);C.setUTCHours(0,0,0,0);const p=new Date(w);return p.setUTCHours(0,0,0,0),C.getTime()===p.getTime()}const Im="/advent/assets/muerte-DfSvC3Z-.jpg",Pm="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",nh="/advent/assets/Ofrenda-DDd9dlHK.jpg",eh="/advent/assets/kolumbia-DUKl5Drs.webp",ah="/advent/assets/kolumb2--JWazZNY.webp",ih="/advent/assets/melhior-5oqVeQRz.webp",sh="/advent/assets/shir-CPxmcAyu.jpg",uh="/advent/assets/markes-DHTR6R5s.jpg",oh="/advent/assets/tolkin-Bkb1qdyy.jpg",rh="/advent/assets/tolkin1-Gt7VHXrl.jpg",ch="/advent/assets/berry-BayIKnFN.jpg",gh="/advent/assets/berry1-aZtyDiG8.jpg",fh="/advent/assets/gvatemala1-C3fdq1S5.jpg",ph="/advent/assets/graves-B4Ep0a2x.jpg",dh="/advent/assets/carpet1-BHoBEQUm.jpg",mh="/advent/assets/airsnakes-BtpaN7a0.jpg",hh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",vh="/advent/assets/brazil1-C1nzNzga.webp",bh="/advent/assets/ethiopia-CfI92xpA.jpg",Sh="/advent/assets/goats-B1iHvHcl.jpg",zh="/advent/assets/rabanda-ClmJ6Exb.jpg",_h="/advent/assets/honduras-DTj2TRgE.jpg",Th="/advent/assets/honduras1-BfVuI_LD.jpg",Ah="/advent/assets/resp-DBSDT0A7.png",Mh="/advent/assets/cicoriy-DL-J_EKv.webp",Eh="/advent/assets/carob-DDo_E6jz.jpg",wh="/advent/assets/tonka-CaSKsR3p.webp",jh="/advent/assets/kardamon-D-LlmV-v.webp",Dh="/advent/assets/mem1-Coiz1JZ3.jpg",Oh="/advent/assets/cafe-DrSeHG9j.jpg",Ch="/advent/assets/yerevan1-0r9N0UnH.jpg",xh="/advent/assets/yerevan2-fQnNyY8p.jpg",Nh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Rh="/advent/assets/bears-BwIhEuov.jpg",Bh="/advent/assets/ararat-DAhBMtll.jpg",Hh="/advent/assets/jazzve-DliHyYYl.jpg",qh="/advent/assets/abc-C__8usP9.webp",Yh="/advent/assets/noy-KD54xzv8.jpg",Xh="/advent/assets/poss-LSCreopJ.jpg",Gh="/advent/assets/poss1-CPSySb8a.jpg",Qh="/advent/assets/poss2-4TAHhBM7.jpg",Lh="/advent/assets/poss3-BBe7PtjI.jpg",Vh="/advent/assets/poss4-B0yE7kHZ.jpg",Zh="/advent/assets/poss5-DtHf0aUR.jpg",Kh="/advent/assets/possa-mom-BPlrTPcT.jpg",$h="/advent/assets/possa-mom1-D9ySRpWd.jpg",Jh="/advent/assets/poss-and-oposs-DDSg4YaG.webp",kh="/advent/assets/possaKnowl-CYkQIhVz.jpg",Wh="/advent/assets/thief-CoIDv1iT.jpg",Fh="/advent/assets/smile-1-5jdl68.jpg",Ih="/advent/assets/merch-DdoKdpQb.jpg",Ph="/advent/assets/merch1-CtZos-AO.jpg",l0="/advent/assets/cammomile-Byca6E_e.jpg",t0="/advent/assets/cham-tea-BPAncxo6.jpg",n0="/advent/assets/chamomile1-DbctfrkQ.jpg",e0="/advent/assets/chamomile2-k1NNuBaK.jpg",a0="/advent/assets/juniper-r5wxtBRx.jpg",i0="/advent/assets/juniper1-BWoP6YHZ.jpg",s0="/advent/assets/juniper3-BXCLBj8d.jpg",u0="/advent/assets/juniperTea-0KTJdRf4.jpg",o0="/advent/assets/cham-sci-ixEH2xhc.jpg",r0="/advent/assets/juniperTattoo-Drp4YpCt.jpg",c0="/advent/assets/chamomileTattoo-BGNh6NOB.jpg",g0="/advent/assets/juniper-sci-hXzXrr9H.jpg",f0="/advent/assets/jun-sci2-zIGUP1FK.jpg",p0="/advent/assets/solovki-B95fDwav.webp",d0="/advent/assets/solovki1-u3Varh4x.webp",m0="/advent/assets/solovki2-D19kpuou.jpg",h0="/advent/assets/coffeCard1-DNW-HsaJ.webp",y0="/advent/assets/coffeCard2-BNxhtL4t.webp",v0="/advent/assets/coffeCard3-AyYO0wak.webp",b0="/advent/assets/coffeCard4-DI2_0NqK.webp",S0="/advent/assets/coffeCard5-dUEpTs6X.webp",z0="/advent/assets/coffeCard6-BDW-PLix.webp",_0="/advent/assets/atitlan-dYAI5eYf.jpg",T0="/advent/assets/atitlan1-C5ZSs572.jpg",A0="/advent/assets/guatemala8-Bi5KoB48.jpg",M0="/advent/assets/guatemalaCorn-ClR7vTSk.jpg",E0="/advent/assets/guatemalaTkan-DTKRCwUa.jpg",w0="/advent/assets/himalaya1-nN0t50Ma.avif",j0="/advent/assets/pinkSalt-BizDWWT4.jpg",D0="/advent/assets/saltMeme-Dq0p8Dwq.jpg",O0="/advent/assets/matcha11-CE8SBYA1.jpg",C0="/advent/assets/matcha-C8bXd3OR.jpg",x0="/advent/assets/matcha2-6Pc5CGop.jpg",N0="/advent/assets/matcha3-PqMaWA5u.jpg",U0="/advent/assets/matchaOld-BdH0N0Hr.jpg",R0="/advent/assets/matchaOld1-d7pxtrP4.jpg",B0="/advent/assets/harvest-DiJhXofV.jpg",H0="/advent/assets/harvest1-f7uXoVQt.jpg",q0="/advent/assets/matchaColors-CePGvb-v.jpg",Y0="/advent/assets/cat1-CteOJfo2.jpg",X0="/advent/assets/cat2-CI2WaIbw.jpg",G0="/advent/assets/cat3-wi61L9Ty.jpg",Q0="/advent/assets/cat4-BQJa7vAE.jpg",L0="/advent/assets/cat5-D7xwVjOS.jpg",V0="/advent/assets/piterMeme-ClYb6GkP.jpg",Z0="/advent/assets/monk-D17MXC2B.jpg",K0="/advent/assets/nyMeme1-6GOagR6o.jpg",$0="/advent/assets/nyMeme2-7Telpurx.jpg",J0="/advent/assets/nyMeme4-BNwb-aPZ.jpg",k0="/advent/assets/nyMeme5-mCJoC8cu.jpg",W0="/advent/assets/nyMeme6-BndRKfA9.jpg",F0="/advent/assets/nyMeme7-CBDPmv-H.jpg",I0="/advent/assets/nyMeme8-Dq-5p2Cs.jpg",P0="/advent/assets/nyMeme9-DtlbkQI_.jpg",l1="/advent/assets/gerb1-BxSMTsFR.jpg",t1="/advent/assets/gerb2-B_qnuNFN.jpg",n1="/advent/assets/okMeme--p34fXU_.jpg",e1="/advent/assets/unk-BB2m3QLz.jpg",a1="/advent/assets/u70-DIKlKj5y.jpg",i1="/advent/assets/map-BdUX3X-y.jpg",s1="/advent/assets/chasha-Ctu2v-xB.jpg",u1="/advent/assets/ft0-COvPvYCF.jpg",o1="/advent/assets/ft1-BgWi-igf.jpg",r1="/advent/assets/ft2-ctNJAFEu.jpg",c1="/advent/assets/cheese-BSnE0RhA.jpg",g1="/advent/assets/cheese2-DJbQoeGH.jpg",f1="/advent/assets/reishi-DE1KAqzF.webp",p1="/advent/assets/kamakura-_Vb1gjNI.webp",d1="/advent/assets/kamakura2-D_nBSmvm.webp",m1="/advent/assets/dragon2-BcyxgPxK.jpg",h1="/advent/assets/dragon1-BlTPZene.jpg",y1="/advent/assets/kissaten-nwC-faWE.jpg",v1="/advent/assets/kissaten1-DZ7zOaJ5.jpg",b1="/advent/assets/sakura-CKPCINYL.jpg",S1="/advent/assets/sakura1-eJ7b3pjZ.jpg",r={muerte:Im,katrina:Pm,pink:lh,rese:th,Ofrenda:nh,kolumb2:ah,kolumbia:eh,melhior:ih,shir:sh,markes:uh,tolkin:oh,tolkin1:rh,berries:ch,berries1:gh,gvatemala1:fh,graves:ph,carpet1:dh,airsnake2:mh,fish:hh,fish1:yh,brazil1:vh,ethiopia:bh,goats:Sh,rabanda:zh,honduras:_h,honduras1:Th,resp:Ah,cicoriy:Mh,carob:Eh,tonka:wh,kardamon:jh,mem:Dh,cafe:Oh,yerevan1:Ch,yerevan2:xh,yerevan3:Nh,lion:Uh,bears:Rh,ararat:Bh,yazzve:Hh,abc:qh,noy:Yh,poss:Xh,possaMom:Kh,possaMom1:$h,possOrOposs:Jh,possaKnowl:kh,poss1:Gh,poss2:Qh,poss3:Lh,poss4:Vh,poss5:Zh,thief:Wh,smile:Fh,merch:Ih,merch1:Ph,cammomile:l0,chamomile2:e0,chamomileTea:t0,chamomile1:n0,juniper:a0,juniper1:i0,juniper3:s0,juniperTea:u0,chamSci:o0,juniperTattoo:r0,chamomileTattoo:c0,juniperSci:g0,juniperSci1:f0,solovki:p0,solovki1:d0,solovki2:m0,coffeCard1:h0,coffeCard2:y0,coffeCard3:v0,coffeCard4:b0,coffeCard5:S0,coffeCard6:z0,atitlan:_0,atitlan1:T0,guatemala8:A0,guatemalaCorn:M0,guatemalaTkan:E0,himalaya:w0,pinkSalt:j0,saltMeme:D0,harvest:B0,harvest1:H0,matcha:C0,matcha2:x0,matcha3:N0,matcha11:O0,matchaOld:U0,matchaOld1:R0,matchaColors:q0,cat1:Y0,cat2:X0,cat3:G0,cat4:Q0,cat5:L0,piterMeme:V0,monk:Z0,nyMeme1:K0,nyMeme2:$0,nyMeme4:J0,nyMeme5:k0,nyMeme6:W0,nyMeme7:F0,nyMeme8:I0,nyMeme9:P0,gerb1:l1,gerb2:t1,okMeme:n1,chasha:s1,map:i1,u70:a1,unk:e1,ft0:u1,ft1:o1,ft2:r1,cheese:c1,cheese1:g1,reishi:f1,kamakura:p1,kamakura2:d1,dragon:m1,dragon1:h1,kissaten:y1,kissaten1:v1,sakura:b1,sakura1:S1},z1=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${r.muerte}" />
      <p><strong>Café de Olla</strong> (кофе в горшке) — это кофе, сваренный в <strong>глиняном горшке</strong> с <strong>корицей</strong> и <strong>piloncillo</strong> (нерафинированный тростниковый сахар).</p>      
      <p><strong>История:</strong> Во время <strong>Мексиканской Революции (1910-1920)</strong> солдаты варили кофе в котелках над костром. Сахара не было, но был дешёвый piloncillo. Корицу добавляли для аромата и чтобы перебить вкус плохой воды.</p>
      <p><strong>Adelitas</strong> (женщины-солдаты и повара) варили café de olla для войск. Это был <strong>ритуал единения</strong> — все сидели вокруг огня, пили кофе, пели <strong>corridos</strong> (народные баллады).</p>
      <h3>Мексиканская Революция</h3>
      <p><strong>1910-1920:</strong> 1-2 миллиона погибших. Борьба за землю, права рабочих, справедливость. А с кем борьба, спросите вы, но это надо гуглить.</p>
      <p><strong>Герои:</strong></p>
      <ul>
        <li><strong>Emiliano Zapata</strong> 🌾 — крестьянский лидер, девиз: <em>"Tierra y Libertad!"</em> (Земля и свобода!). Боролся за аграрную реформу, возврат земель коренным общинам.</li>
        <li><strong>Pancho Villa</strong> 🐴 — легендарный генерал-бандит, народный герой. <strong>División del Norte</strong> — 50,000 всадников! Грабил поезда, раздавал бедным. Вторгся в США (1916, Колумбус, Нью-Мексико) — единственное вторжение с 1812 года!</li>
        <li><strong>Adelitas</strong> 👩‍⚕️ — женщины-солдаты: воевали, варили, лечили, шпионили.</li>
      </ul>
      <p><strong>Итог:</strong> Конституция 1917 — одна из самых прогрессивных! Аграрная реформа, права рабочих (8-часовой день, минимальная зарплата), светское образование.</p>
      <h3>Día de Muertos — День мёртвых 💀🌼</h3>
      <p><strong>1-2 ноября:</strong> Не "мексиканский Хэллоуин"! Это древняя традиция почитания умерших — смесь ацтекских верований и католицизма.</p>
      <p><strong>Философия:</strong> Смерть — не конец, а <strong>переход</strong>. Умершие возвращаются раз в год навестить живых. Это <strong>радостный</strong> праздник!</p>
      <p><strong>Ofrenda</strong> (алтарь для умерших) включает:</p>
      <ul>
        <li><strong>Cempasúchil</strong> (бархатцы оранжевые) — лепестками выкладывают дорожку от улицы до алтаря, направляя души домой</li>
        <li><strong>Pan de Muerto</strong> — сладкий хлеб в форме черепа/костей</li>
        <li><strong>Calaveras de azúcar</strong> — сахарные черепа с именем покойного</li>
        <li><strong>Любимая еда покойного</strong> — часто <strong>café de olla</strong>!</li>
        <li><strong>Фото, свечи, копал</strong> (благовония)</li>
      </ul>
<img src="${r.Ofrenda}" />
      <h3>Что такое офренда?</h3>
<p><strong>Ofrenda</strong> (исп. "подношение") — это временный алтарь для встречи душ умерших во время Día de Muertos.</p>

<p><strong>Философия:</strong> Это не грустный мемориал, а <strong>радостная встреча</strong>! Ты создаёшь пространство, где покойным будет приятно, где они почувствуют себя как дома.</p>

<p><strong>Программа-минимум:</strong></p>
<ul>
  <li>Фото покойного</li>
  <li>Свечи (освещают путь)</li>
  <li>Вода (утолить жажду после долгого пути)</li>
  <li>Еда (традиционная или любимая покойного)</li>
  <li>Цветы cempasúchil (направляют души домой)</li>
</ul>

<p><strong>Программа-максимум (персонализация):</strong></p>
<ul>
  <li><strong>Любимая еда и напитки покойного</strong> — часто <strong>café de olla</strong>!</li>
  <li><strong>Любимые вещи:</strong> гитара, книги, инструменты</li>
  <li><strong>Музыка</strong> — то, что покойный любил слушать</li>
  <li><strong>Ароматы:</strong> любимые духи, табак, кофе</li>
</ul>

<p><strong>Суть:</strong> Чем приманивать души покойных друзей? Что бы им было приятно встретить при коротком возвращении из мира мёртвых?</p>

<p><strong>Души не едят физически</strong> — они впитывают <strong>essence</strong> (суть, аромат) подношений. После праздника живые едят эту еду, и она считается "безвкусной" — души забрали вкус с собой.</p>

<p><strong>Это мост между мирами</strong> — не страшный, а тёплый, наполненный любовью и воспоминаниями! 💀🌼✨</p>
      
      <p><strong>La Catrina</strong> — элегантная дама-скелет в шляпе, символ праздника. Создана художником José Guadalupe Posada (1910-е) как сатира. <strong>Смысл:</strong> Смерть — великая уравнительница. Богатый ты или бедный — в конце все скелеты!</p>
       <img src="${r.katrina}" />
      <h3>Задание</h3>
      <ol>
        <li>Завари кофе со специями (если есть корица — добавь! А она у вас есть, она в том же конверте)</li>
        <li>Включи:</li>
        <iframe style="width: 100%; border: none; border-radius: 8px;"
       src="https://www.youtube.com/embed/hlGtOv-QEQQ?si=_qZX_e-gV1I_JG_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <li><strong>Посмотри:</strong> <a href="https://www.youtube.com/results?search_query=coco+pixar+trailer" target="_blank">"Coco" (Pixar, 2017)</a> — мультфильм о Día de Muertos (очень точный!)</li>
        <li><strong>Задание для чата:</strong> "Если бы я строила офренду, я бы поставила: [3 вещи для себя и каждой в нашем чате]"</li>
      </ol>
      
      <p>Представь себя у костра с revolucionarios, 1915 год, вы варите кофе под звёздами в чьем-то котелке, пахнет корицей и порохом 🔥☕⭐</p>
    `,tanya_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${r.muerte}" />
      <p><strong>Café de Olla</strong> (кофе в горшке) — это кофе, сваренный в <strong>глиняном горшке</strong> с <strong>корицей</strong> и <strong>piloncillo</strong> (нерафинированный тростниковый сахар).</p>      
      <p><strong>История:</strong> Во время <strong>Мексиканской Революции (1910-1920)</strong> солдаты варили кофе в котелках над костром. Сахара не было, но был дешёвый piloncillo. Корицу добавляли для аромата и чтобы перебить вкус плохой воды.</p>
      <p><strong>Adelitas</strong> (женщины-солдаты и повара) варили café de olla для войск. Это был <strong>ритуал единения</strong> — все сидели вокруг огня, пили кофе, пели <strong>corridos</strong> (народные баллады).</p>
      <h3>Мексиканская Революция</h3>
      <p><strong>1910-1920:</strong> 1-2 миллиона погибших. Борьба за землю, права рабочих, справедливость. А с кем борьба, спросите вы, но это надо гуглить.</p>
      <p><strong>Герои:</strong></p>
      <ul>
        <li><strong>Emiliano Zapata</strong> 🌾 — крестьянский лидер, девиз: <em>"Tierra y Libertad!"</em> (Земля и свобода!). Боролся за аграрную реформу, возврат земель коренным общинам.</li>
        <li><strong>Pancho Villa</strong> 🐴 — легендарный генерал-бандит, народный герой. <strong>División del Norte</strong> — 50,000 всадников! Грабил поезда, раздавал бедным. Вторгся в США (1916, Колумбус, Нью-Мексико) — единственное вторжение с 1812 года!</li>
        <li><strong>Adelitas</strong> 👩‍⚕️ — женщины-солдаты: воевали, варили, лечили, шпионили.</li>
      </ul>
      <p><strong>Итог:</strong> Конституция 1917 — одна из самых прогрессивных! Аграрная реформа, права рабочих (8-часовой день, минимальная зарплата), светское образование.</p>
      <h3>Día de Muertos — День мёртвых 💀🌼</h3>
      <p><strong>1-2 ноября:</strong> Не "мексиканский Хэллоуин"! Это древняя традиция почитания умерших — смесь ацтекских верований и католицизма.</p>
      <p><strong>Философия:</strong> Смерть — не конец, а <strong>переход</strong>. Умершие возвращаются раз в год навестить живых. Это <strong>радостный</strong> праздник!</p>
      <p><strong>Ofrenda</strong> (алтарь для умерших) включает:</p>
      <ul>
        <li><strong>Cempasúchil</strong> (бархатцы оранжевые) — лепестками выкладывают дорожку от улицы до алтаря, направляя души домой</li>
        <li><strong>Pan de Muerto</strong> — сладкий хлеб в форме черепа/костей</li>
        <li><strong>Calaveras de azúcar</strong> — сахарные черепа с именем покойного</li>
        <li><strong>Любимая еда покойного</strong> — часто <strong>café de olla</strong>!</li>
        <li><strong>Фото, свечи, копал</strong> (благовония)</li>
      </ul>

      <img src="${r.Ofrenda}" />

      <h3>Что такое офренда?</h3>
<p><strong>Ofrenda</strong> (исп. "подношение") — это временный алтарь для встречи душ умерших во время Día de Muertos.</p>

<p><strong>Философия:</strong> Это не грустный мемориал, а <strong>радостная встреча</strong>! Ты создаёшь пространство, где покойным будет приятно, где они почувствуют себя как дома.</p>

<p><strong>Программа-минимум:</strong></p>
<ul>
  <li>Фото покойного</li>
  <li>Свечи (освещают путь)</li>
  <li>Вода (утолить жажду после долгого пути)</li>
  <li>Еда (традиционная или любимая покойного)</li>
  <li>Цветы cempasúchil (направляют души домой)</li>
</ul>

<p><strong>Программа-максимум (персонализация):</strong></p>
<ul>
  <li><strong>Любимая еда и напитки покойного</strong> — часто <strong>café de olla</strong>!</li>
  <li><strong>Любимые вещи:</strong> гитара, книги, инструменты</li>
  <li><strong>Музыка</strong> — то, что покойный любил слушать</li>
  <li><strong>Ароматы:</strong> любимые духи, табак, кофе</li>
</ul>

<p><strong>Суть:</strong> Чем приманивать души покойных друзей? Что бы им было приятно встретить при коротком возвращении из мира мёртвых?</p>

<p><strong>Души не едят физически</strong> — они впитывают <strong>essence</strong> (суть, аромат) подношений. После праздника живые едят эту еду, и она считается "безвкусной" — души забрали вкус с собой.</p>

<p><strong>Это мост между мирами</strong> — не страшный, а тёплый, наполненный любовью и воспоминаниями! 💀🌼✨</p>
      
      <p><strong>La Catrina</strong> — элегантная дама-скелет в шляпе, символ праздника. Создана художником José Guadalupe Posada (1910-е) как сатира. <strong>Смысл:</strong> Смерть — великая уравнительница. Богатый ты или бедный — в конце все скелеты!</p>
       <img src="${r.katrina}" />
      <h3>Задание</h3>
      <ol>
        <li>Завари кофе со специями (если есть корица — добавь! А она у вас есть, она в том же конверте)</li>
        <li>Включи:</li>
        <iframe style="width: 100%; border: none; border-radius: 8px;"
       src="https://www.youtube.com/embed/hlGtOv-QEQQ?si=_qZX_e-gV1I_JG_W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
        <li><strong>Посмотри:</strong> <a href="https://www.youtube.com/results?search_query=coco+pixar+trailer" target="_blank">"Coco" (Pixar, 2017)</a> — мультфильм о Día de Muertos (очень точный!)</li>
        <li><strong>Задание для чата:</strong> "Если бы я строила офренду, я бы поставила: [3 вещи для себя и каждой в нашем чате]"</li>
        <li><strong>Задание для двоих (не просто так же там два пакетика:</strong> "Если бы мы строили офренду вместе, мы бы поставили: [3 вещи]"</li>
      </ol>
      
      <p>Представь себя у костра с revolucionarios, 1915 год, вы варите кофе под звёздами в чьем-то котелке, пахнет корицей и порохом 🔥☕⭐</p>
    `},{day:2,date:"2025-12-21",tanya_gift:"Розовый латте 3в1",zebra_gift:"Розовый латте 3в1 (х2)",tanya_bonus:"Золотой леденец на палочке",zebra_bonus:"Золотой леденец на палочке",title:"Розовый латте и съедобное золото",zebra_message:`
  <p><strong>Розовый латте</strong> — напиток, который выглядит как unicorn frappuccino из Starbucks, но стоит в 20 раз дешевле! 🦄💕</p>
  
  <h3>История розового латте</h3>
  <p><strong>Началось в Корее (2016-2017):</strong> Корейские кофейни добавляли <strong>розовую воду</strong> или лепестки роз в латте — wellness-тренд.</p>
  
  <p><strong>Starbucks Unicorn Frappuccino (апрель 2017):</strong> Взрывная бомба из розового, фиолетового и сахара. Интернет сошёл с ума! За неделю продали миллионы.</p>
  <img src="${r.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${r.rese}" />
  <h3>Золотой леденец — съедобная алхимия ✨</h3>
  <p>Твой бонус — <strong>кристаллический леденец на палочке с кандуриновым напылением</strong>! Это настоящее пересечение науки и магии.</p>
  
  <h4>Как делают кристаллические леденцы?</h4>
  <p><strong>Классический метод:</strong></p>
  <ul>
    <li><strong>Варка сиропа:</strong> Сахар растворяют в воде, нагревают до 150-160°C (стадия "твёрдого шарика")</li>
    <li><strong>Затравка:</strong> Деревянную палочку обмакивают в сироп и обваливают в сахарной пудре — это даёт кристаллам "зацепку"</li>
    <li><strong>Рост кристаллов:</strong> Палочку погружают в перенасыщенный раствор на 3-7 дней. Вода медленно испаряется, сахар выпадает в осадок, формируя кристаллическую структуру</li>
    <li><strong>Секрет красоты:</strong> Чем медленнее испарение — тем крупнее и прозрачнее кристаллы!</li>
  </ul>
  
  <p><strong>Промышленный метод:</strong> Используют точные термостаты, лёгкую вибрацию для прозрачности и силиконовые формы для геометрических форм (сердечки, звёзды).</p>

  <h4>Кандурин — пищевое золото</h4>
  <p><strong>Состав:</strong> Слюда (минерал!) + оксиды металлов (титан, железо). Абсолютно безвкусный, проходит через организм транзитом.</p>
  
  <p><strong>Традиция поедания золота:</strong></p>
  <ul>
    <li><strong>Древний Египет:</strong> Фараоны ели сусальное золото (Au 24K) — верили, что оно делает кожу сияющей и приближает к богам</li>
    <li><strong>Средневековая Европа:</strong> Золото считалось панацеей, его добавляли в лекарства</li>
    <li><strong>Япония:</strong> До сих пор добавляют золотые хлопья в саке (kinpaku sake) — символ богатства</li>
  </ul>

  <p>Тут, конечно, одна видимость, но оно отлично смотрится в шампанском.</p>
  
  <p>Современный кандурин дешевле настоящего золота в тысячи раз, но магия та же: <strong>ты ешь блеск!</strong> ✨</p>
  
  <p><strong>Викторианский факт:</strong> В XIX веке такие леденцы делали с настоящими цветами внутри (розы, фиалки) — цветок замораживали в кристалле сахара!</p>
  
  <p><strong>В качестве задания нейронки упорно предлагают медитацию на золото. Я сдалась и запросила инструкцию. Так вот: </p>
  
  <h3>Задание: Золотая медитация ✨</h3>
<p>Сегодня практикуем созерцание — древнее искусство видеть магию в обычных вещах.</p>
<ol>
  <li>Завари розовый латте, положи леденец на край чашки.</li>
  <li>Включи музыку для медитации:</li>
  <iframe style="width: 100%; border: none; border-radius: 8px;"
       src="https://www.youtube.com/embed/jgpJVI3tDbY?si=pkcjthsM5rNlZmpi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <p>(Божечки, это Лунная соната!)</p>
  <li><strong>5 минут:</strong> смотри на золотой леденец, не отвлекаясь. Просто смотри, как играет свет в гранях.</li>
  <p>(Целый пять минут пялиться на леденец не очень гуманно. Это все еще медитация пр деньги, да?..)</p>
  <li>Что увидела в бликах? Образы, мысли, воспоминания? Не анализируй — просто замечай.</li>
  <li>Съешь леденец, запей кофе.</li>
  <li><strong>Чатовое:</strong> "В золоте я увидела [образ/чувство/мысль]" 💭✨</li>
</ol>
  `,tanya_message:`
  <p><strong>Розовый латте</strong> — напиток, который выглядит как unicorn frappuccino из Starbucks, но стоит в 20 раз дешевле! 🦄💕</p>
  
  <h3>История розового латте</h3>
  <p><strong>Началось в Корее (2016-2017):</strong> Корейские кофейни добавляли <strong>розовую воду</strong> или лепестки роз в латте — wellness-тренд.</p>
  
  <p><strong>Starbucks Unicorn Frappuccino (апрель 2017):</strong> Взрывная бомба из розового, фиолетового и сахара. Интернет сошёл с ума! За неделю продали миллионы.</p>
  <img src="${r.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${r.rese}" />
  <h3>Золотой леденец — съедобная алхимия ✨</h3>
  <p>Твой бонус — <strong>кристаллический леденец на палочке с кандуриновым напылением</strong>! Это настоящее пересечение науки и магии.</p>
  
  <h4>Как делают кристаллические леденцы?</h4>
  <p><strong>Классический метод:</strong></p>
  <ul>
    <li><strong>Варка сиропа:</strong> Сахар растворяют в воде, нагревают до 150-160°C (стадия "твёрдого шарика")</li>
    <li><strong>Затравка:</strong> Деревянную палочку обмакивают в сироп и обваливают в сахарной пудре — это даёт кристаллам "зацепку"</li>
    <li><strong>Рост кристаллов:</strong> Палочку погружают в перенасыщенный раствор на 3-7 дней. Вода медленно испаряется, сахар выпадает в осадок, формируя кристаллическую структуру</li>
    <li><strong>Секрет красоты:</strong> Чем медленнее испарение — тем крупнее и прозрачнее кристаллы!</li>
  </ul>
  
  <p><strong>Промышленный метод:</strong> Используют точные термостаты, лёгкую вибрацию для прозрачности и силиконовые формы для геометрических форм (сердечки, звёзды).</p>
  
  <h4>Кандурин — пищевое золото</h4>
  <p><strong>Состав:</strong> Слюда (минерал!) + оксиды металлов (титан, железо). Абсолютно безвкусный, проходит через организм транзитом.</p>
  
  <p><strong>Традиция поедания золота:</strong></p>
  <ul>
    <li><strong>Древний Египет:</strong> Фараоны ели сусальное золото (Au 24K) — верили, что оно делает кожу сияющей и приближает к богам</li>
    <li><strong>Средневековая Европа:</strong> Золото считалось панацеей, его добавляли в лекарства</li>
    <li><strong>Япония:</strong> До сих пор добавляют золотые хлопья в саке (kinpaku sake) — символ богатства</li>
  </ul>
  <p>Тут, конечно, одна видимость, но оно отлично смотрится в шампанском.</p>
  
  <p>Современный кандурин дешевле настоящего золота в тысячи раз, но магия та же: <strong>ты ешь блеск!</strong> ✨</p>
  
  <p><strong>Викторианский факт:</strong> В XIX веке такие леденцы делали с настоящими цветами внутри (розы, фиалки) — цветок замораживали в кристалле сахара!</p>
  
  <p><strong>В качестве задания нейронки упорно предлагают медитацию на золото. Я сдалась и запросила инструкцию. Так вот: </p>
  
  <h3>Задание: Золотая медитация ✨</h3>
<p>Сегодня практикуем созерцание — древнее искусство видеть магию в обычных вещах.</p>
<ol>
  <li>Завари розовый латте, положи леденец на край чашки.</li>
  <li>Включи музыку для медитации:</li>
  <iframe style="width: 100%; border: none; border-radius: 8px;"
      src="https://www.youtube.com/embed/jgpJVI3tDbY?si=pkcjthsM5rNlZmpi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <p>(Божечки, это Лунная соната!)</p>
  <li><strong>5 минут:</strong> смотри на золотой леденец, не отвлекаясь. Просто смотри, как играет свет в гранях.</li>
  <p>(Целый пять минут пялиться на леденец не очень гуманно. Это все еще медитация пр деньги, да?..)</p>
  <li>Что ты видишь в бликах? Образы, мысли, воспоминания? Не анализируй — просто замечай.</li>
  <li>Съешь леденец, запей кофе.</li>
  <li><strong>Чатовое:</strong> "В золоте я увидела [образ/чувство/мысль]" 💭✨</li>
</ol>
  `},{day:3,date:"2025-12-22",tanya_gift:"Бэггинс кофе",zebra_gift:"Колумбия декаф",tanya_bonus:"Ложечка мельхиоровая новогодняя",zebra_bonus:"Ложечка мельхиоровая новогодняя",title:"Кофе и мельхиор",tanya_message:`
    <h3>Йоль прошёл! ☀️</h3>
    <p><strong>21-22 декабря</strong> — только что была <strong>самая длинная ночь</strong> (зимнее солнцестояние)!</p>

    <p><strong>Йоль</strong> — древний праздник. Люди боялись: вернётся ли солнце? Или ночь будет удлинняться и дальше, пока света не станет совсем?..</p>
    <p>Но с этого понедельника день растет. Свет возвращается - самое время для кофе 🌅</p>
    <p><strong>"Шииир! Бэггинс!.." 💍</p>
    <img src="${r.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение — ведь Baggins = фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название! ☕🎉</p>
    <img src="${r.tolkin}" />
    <h3>Толкин и Льюис</h3>
    <p><strong>J.R.R. Tolkien</strong> и <strong>C.S. Lewis</strong> (автор "Хроник Нарнии") были друзьями, состояли в литературном клубе <strong>Инклинги</strong> (Оксфорд, 1930-1960-е). Встречались в пабах, читали друг другу свои рукописи.</p>
    <p><strong>Толкин НЕ любил "Хроники Нарнии":</strong></p>
    <ul>
      <li>Был <strong>пуристом мифологии</strong> — каждый миф должен быть чистым, не смешанным!</li>
      <li>В Нарнии Льюис смешал: римскую мифологию (фавны), греческую (кентавры), скандинавскую (гномы), христианство (Аслан = Христос)</li>
      <li>Толкин говорил: это как <strong>"кофе и чай в одной чашке"</strong> ☕🍵❌ Но дружить им это не сильно мешало.</li>
    </ul>
    
    <h3>Мельхиоровая ложечка 🥄✨</h3>
    <p><strong>Мельхиор</strong> — сплав меди (80-90%) с никелем (10-20%). Цвет серебристый, не ржавеет, прочнее серебра, дешевле в 20-50 раз!</p>
    <img src="${r.melhior}" />
    <p><strong>В СССР:</strong> Мельхиор = "народное серебро". Настоящее серебро дорогое, мельхиор — доступная роскошь!</p>
    
    <p><strong>Твоя ложечка:</strong> <strong>Новогодняя серия с ёлочкой!</strong> Такие дарили на свадьбы, хранили в сервантах за стеклом.</p>
    <p>У нас с Зёброй по такой же, так что теперь у нас на один общий предмет больше - не татуировкой единой.</p>
    <p>Антиквары советуют не очищать мельхиор эффектным методом с фольгой - это убивает какой-то бесценный слой.</p>
    <p>Я прочитала несколько гайдов по чайным и кофейным ложечкам и вынесла следующее: наша, вероятно, кофейная, потому что она как будто поменьше чайной.</p>
    
    <h3>Задание</h3>
    <ol>
      <li>Завари Baggins Coffee.</li>
      <li>Размешай винтажной ложечкой.</li>
      <li><p>Погадай на книге через нейросеть. Зайди в умную нейронку и попроси выдать тебе два абзаца из книги Толкина, идущих подряд. </p>
      <p>После попроси истолковать их, как если бы они были результатом книжного гадания. Повтори, если результат так себе)</p></li>
      <img src="${r.tolkin1}" />
      <li>Поделись результатами в чате.</li>
      <li><strong>Отметь возвращение света</strong> после самой длинной ночи! ☀️</li>
      <li>Музыка: <a href="https://www.youtube.com/watch?v=_pGaz_qN0cw" target="_blank">Howard Shore — "Concerning Hobbits"</a></li>
    </ol>
    
  `,zebra_message:`
    <p><strong>Колумбия декаф</strong> — классика specialty! ☕</p>
    <h3>Йоль прошёл! ☀️</h3>
    <p><strong>21-22 декабря</strong> — только что была <strong>самая длинная ночь</strong> (зимнее солнцестояние)!</p>
    <p><strong>Йоль</strong> — древний праздник. Люди боялись: вернётся ли солнце? Или ночь будет удлинняться и дальше, пока света не станет совсем?..</p>
    <p>Но с этого понедельника день растет. Свет возвращается - самое время для кофе 🌅</p>
    <h3>Колумбия</h3>
    <p><strong>Колумбия</strong> = третий крупнейший производитель кофе в мире (после Бразилии и Вьетнама)!</p>
    <img src="${r.kolumbia}" />
    <p><strong>География:</strong> Анды, высота 1200-2000 м, вулканическая почва, два сезона дождей = урожай круглый год!</p>
    
    <p><strong>Вкус:</strong> Сбалансированный, средняя кислотность, карамель, орехи, чистый профиль. <strong>"Безопасный выбор"</strong> — почти всегда вкусно!</p>
    
    <p><strong>100% Арабика:</strong> Колумбия не выращивает робусту по закону! Только арабика.</p>
    
    <h3>Габриэль Гарсиа Маркес и кофе ☕📖</h3>
    <p><strong>Габо</strong> (как его называли в Колумбии) родился в <strong>Аракатаке</strong> — маленьком городке в зоне банановых плантаций. Но кофе был везде!</p>
    <img src="${r.markes}" />
    <p><strong>Кофе в его книгах:</strong></p>
    <ul>
      <li>В <strong>"Ста годах одиночества"</strong> герои постоянно пьют кофе — это ритм колумбийской жизни</li>
      <li>Кофе варят в <strong>грека</strong> (маленький кофейник), пьют крепким, густым, сладким.</li>
      <li>Запах кофе = запах дома, памяти, Макондо.</li>
    </ul>
    
    <p><strong>"Любовь во время чумы"</strong> (1985) — там кофе упоминается 47 раз! Герои пьют кофе:</p>
    <ul>
      <li>На рассвете (ритуал пробуждения).</li>
      <li>Во время ожидания (терпение).</li>
      <li>В моменты близости.</li>
    </ul>
    
    <p><strong>Цитата:</strong> <em>"Пахло горячим хлебом и кофе. Это был запах любви."</em></p>
    
    <h3>Магический реализм в чашке</h3>
    <p>Маркес писал в жанре <strong>магического реализма</strong> — где чудеса и быт сплетены так плотно, что не понять, где граница.</p>    
    <p>Декаф — это как бабочки из "Ста лет одиночества": они есть, но их как будто нет. Ты пьёшь кофе, который одновременно является и не является собой. 🦋☕</p>
    
    <h3>Декаф Swiss Water Process 💧</h3>
    <p>Колумбия часто использует <strong>Swiss Water Process</strong> — без химии, только вода!</p>
    <img src="${r.kolumb2}" />
    <p>Качественное зерно → даже без кофеина сохраняется вкус!</p>
    
    <h3>Мельхиоровая ложечка 🥄✨</h3>
    <p><strong>Мельхиор</strong> — сплав меди + никель. В СССР = "народное серебро" (дешевле настоящего, но красиво!).</p>
    <img src="${r.melhior}" />
    <p><strong>Твоя ложечка:</strong> Новогодняя серия с ёлочкой (1970-1980-е). Дарили на свадьбы, хранили в сервантах!</p>
    <p>У нас с Танькой по такой же, так что теперь у нас на один общий предмет больше - не татуировкой единой.</p>
    <p>Антиквары советуют не очищать мельхиор эффектным методом с фольгой - это убивает какой-то бесценный слой.</p>
    <p>Я прочитала несколько гайдов по чайным и кофейным ложечкам и вынесла следующее: наша, вероятно, кофейная, потому что она как будто поменьше чайной.</p>
    <h3>Задание: Магический реализм в твоей чашке</h3>
    <ol>
      <li>Завари Колумбия декаф</li>
      <li>Размешай винтажной ложечкой</li>
      <li>
      <p>Погадай на книге через нейросеть! Зайди в умную нейронку и попроси выдать тебе два абзаца из книги Маркеса, идущих подряд. </p>
      <p>После попроси истолковать их, как если бы они были результатом книжного гадания.</p></li>
      <li>Или посмотри трейлер новой экранизации Netflix.</li>
      <li>Поделись результатами в чате.</li>
      <li><strong>Отметь возвращение света</strong> после самой длинной ночи! ☀️</li>
      <li>Музыка: колумбийская классика!</li>
      <iframe width="100%" src="https://www.youtube.com/embed/6exx0sB_iOA?si=VZXrYhIW90t_6BNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    
    </ul>
    <p>Помни: твой декаф — это магия. Кофе, который одновременно есть и нет. Как любовь Фермины и Флорентино — ждала 51 год, 9 месяцев и 4 дня. Терпение!</p>
  `},{day:4,date:"2025-12-23",tanya_gift:"Гватемала декаф",zebra_gift:"Гватемала декаф IL DA DA MA",tanya_bonus:"Сироп Хлебная корочка и каштан",zebra_bonus:"Сироп соленая мисо-карамель",title:"Гватемальская солидарность",tanya_message:`
    <p><strong>Сегодня мы все пьём <strong>гватемальский декаф</strong> в знак солидарности с Зёброй! ☕🤝</p>
    <p>Зёбра не пьёт крепкий кофе, поэтому сегодня все на декафе. Дружба важнее кофеина! 💕</p>
    
    <h3>Гватемала — кофейная страна</h3>
    <img src="${r.gvatemala1}" />
    <p>Фото с вайбами Арарата, если бы в Армении было море. <strong>Гватемала</strong> входит в топ-10 производителей кофе в мире. <strong>Вулканическая страна</strong> — 37 вулканов, почва богата минералами = идеальна для кофе!</p>
    
    <p><strong>История гватемальского кофе:</strong></p>
    <ul>
      <li><strong>1850-е:</strong> Иезуиты привезли кофе как <strong>декоративное растение</strong> 🌱</li>
      <li><strong>1860:</strong> Кофе = 1% экспорта.</li>
      <li><strong>1880:</strong> Кофе = 92% экспорта (вытеснил кошениль — красную краску из жуков).</li>
      <li><strong>Парадокс:</strong> До 2010-х гватемальцы пили растворимый кофе, лучшие зёрна уходили на экспорт.</li>
    </ul>
    
    <p><strong>8 кофейных регионов = "Rainbow of Choices":</strong></p>
    <ul>
      <li><strong>Antigua:</strong> 1500-1700 м, окружён вулканами (Agua, Fuego, Acatenango). Вкус: шоколад, карамель, цветы</li>
      <li><strong>Huehuetenango:</strong> до 2000 м, винные ноты, яркая кислотность</li>
      <li><strong>Atitlán:</strong> у озера (одного из красивейших в мире), цветочный, цитрусовый</li>
      <li><strong>Cobán:</strong> дождливый регион, мягкий, сбалансированный</li>
      <li><strong>Fraijanes:</strong> вулканическая почва, дымные ноты</li>
    </ul>
    
    <p><strong>Почему так разнообразно?</strong> 37 вулканов → минералы в почве, высота 1200-2000 м → медленное созревание, два сезона дождей, 100% арабика.</p>
    <p>Что я теперь знаю о Гватемале:</p>

    <h3>Día de los Muertos: Цветные кладбища и гигантские змеи, иногда вместе 💀🪁</h3>
    <p><strong>1 ноября</strong> — День мёртвых по-гватемальски!</p>
    <img src="${r.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${r.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее Зёбры и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${r.carpet1}" />
    <p><strong>Alfombras</strong> (ковры):</p>
    <ul>
      <li>Жители создают <strong>цветные временные ковры</strong> на мостовых: опилки + цветы (сосновые иглы, бархатцы, лепестки роз)</li>
      <li>Рисунки: религиозные сюжеты и майянские символы вместе!</li>
      <li>Процессии идут прямо по коврам, разрушая их и превращая в цветную пыль.</li>
    </ul>

    <h3>Marimba — инструмент сопротивления 🎶</h3>
    <p><strong>Marimba</strong> — национальный инструмент Гватемалы с 1978 года. Большой деревянный ксилофон с резонаторами.</p>
    
    <p><strong>История музыкального сопротивления:</strong></p>
    <ul>
      <li><strong>Происхождение:</strong> Африка (Ангола, Конго), привезена рабами в XVI веке.</li>
      <li><strong>1680:</strong> Первое упоминание в Гватемале.</li>
      <li><strong>Запрещена!</strong> Маримбу запрещали при испанской колонизации и во время Гражданской войны (1960-1996).</li>
      <li><strong>1981:</strong> Правительство запретило индигенные музыкальные собрания, маримбистов "исчезали".</li>
      <li><strong>Для майя:</strong> Символ культурного сопротивления, идентичности, памяти.</li>
      <li>Сейчас играют везде: аэропорт, рестораны, праздники.</li>
    </ul>
    <iframe width="100%" src="https://www.youtube.com/embed/oEUOkcQjtcg?si=fYU0bbVxoFe3p1J6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Звучит, надо сказать, не слишком революционно: это вам не волынка.</p>
    <p>Где в Центральной/Латинской Америке нет какой-нибудь ужасной диктатуры? Я прочитала столько клевого, что мне хочется туда переехать.</p>

    <p>Мне казалось, за названием бренда IL DA DA MA должна стоять какая-то история. В их телеграм-канале я ее не нашла - зато нашла фотки кофейных ягод!</p>
    <img src="${r.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${r.berries1}" />
    <p>История с названием казалась мне незавершенной, так что я спросила их в чате (вот каких вершин достигла моя социальная смелость!) - но пока они мне не ответили.</p>
    
    <h3>Сироп "Печёный каштан и хлебная корочка" 🌰🍞</h3>
    <p><strong>Печёный каштан:</strong> Традиция всей Европы (Италия, Франция, Испания). Уличные жаровни на площадях зимой и сладковатый ореховый вкус, согревающий бедняков.</p>
    <p><strong>Хлебная корочка:</strong> Запах свежеиспечённого хлеба = <strong>сенсорная память</strong>, уют, дом. Реакция Майяра создаёт тот самый карамелизованный аромат.</p>
    
    <p><strong>Memory flavor:</strong> Specialty-кофейни экспериментируют с сиропами, которые вызывают ностальгию — сено, дым, дерево, хлеб.</p>
    
    <h3>Задание</h3>
    <ol>
      <li>Завари гватемальский декаф, добавь сироп.</li>
      <li>В какие цвета ты раскрасила бы свою могилу? Нарисуй эскиз, если вдруг тебе нечем заняться.</li>
    </ol>
    
    <p>Представь кофейные плантации на склонах вулканов, цветные ковры под ногами процессий, гигантские змеи над кладбищами, и маримба, которая играет песню свободы! 🌋🪁🎶</p>
  `,zebra_message:`
    <p><strong>Сегодня все пьют декаф!</strong> Таня тоже на гватемальском декафе в знак вынужденной солидарности с тобой! ☕🤝</p>
    <p>Дружба важнее кофеина! </p>
    
        <h3>Гватемала — кофейная страна</h3>
    <img src="${r.gvatemala1}" />
    <p>Фото с вайбами Арарата, если бы в Армении было море. <strong>Гватемала</strong> входит в топ-10 производителей кофе в мире. <strong>Вулканическая страна</strong> — 37 вулканов, почва богата минералами = идеальна для кофе!</p>
    
    <p><strong>История гватемальского кофе:</strong></p>
    <ul>
      <li><strong>1850-е:</strong> Иезуиты привезли кофе как <strong>декоративное растение</strong> 🌱</li>
      <li><strong>1860:</strong> Кофе = 1% экспорта.</li>
      <li><strong>1880:</strong> Кофе = 92% экспорта (вытеснил кошениль — красную краску из жуков).</li>
      <li><strong>Парадокс:</strong> До 2010-х гватемальцы пили растворимый кофе, лучшие зёрна уходили на экспорт.</li>
    </ul>
    
    <p><strong>8 кофейных регионов = "Rainbow of Choices":</strong></p>
    <ul>
      <li><strong>Antigua:</strong> 1500-1700 м, окружён вулканами (Agua, Fuego, Acatenango). Вкус: шоколад, карамель, цветы</li>
      <li><strong>Huehuetenango:</strong> до 2000 м, винные ноты, яркая кислотность</li>
      <li><strong>Atitlán:</strong> у озера (одного из красивейших в мире), цветочный, цитрусовый</li>
      <li><strong>Cobán:</strong> дождливый регион, мягкий, сбалансированный</li>
      <li><strong>Fraijanes:</strong> вулканическая почва, дымные ноты</li>
    </ul>
    
    <p><strong>Почему так разнообразно?</strong> 37 вулканов → минералы в почве, высота 1200-2000 м → медленное созревание, два сезона дождей, 100% арабика.</p>
    <p>Что я теперь знаю о Гватемале:</p>

    <h3>Día de los Muertos: Цветные кладбища и гигантские змеи, иногда вместе 💀🪁</h3>
    <p><strong>1 ноября</strong> — День мёртвых по-гватемальски!</p>
    <img src="${r.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${r.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее тебя и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${r.carpet1}" />
    <p><strong>Alfombras</strong> (ковры):</p>
    <ul>
      <li>Жители создают <strong>цветные временные ковры</strong> на мостовых: опилки + цветы (сосновые иглы, бархатцы, лепестки роз)</li>
      <li>Рисунки: религиозные сюжеты и майянские символы вместе!</li>
      <li>Процессии идут прямо по коврам, разрушая их и превращая в цветную пыль.</li>
    </ul>

    <h3>Marimba — инструмент сопротивления 🎶</h3>
    <p><strong>Marimba</strong> — национальный инструмент Гватемалы с 1978 года. Большой деревянный ксилофон с резонаторами.</p>
    <ul>
      <li><strong>Происхождение:</strong> Африка (Ангола, Конго), привезена рабами в XVI веке.</li>
      <li><strong>1680:</strong> Первое упоминание в Гватемале.</li>
      <li><strong>Запрещена!</strong> Маримбу запрещали при испанской колонизации и во время Гражданской войны (1960-1996).</li>
      <li><strong>1981:</strong> Правительство запретило индигенные музыкальные собрания, маримбистов "исчезали".</li>
      <li><strong>Для майя:</strong> Символ культурного сопротивления, идентичности, памяти.</li>
      <li>Сейчас играют везде: аэропорт, рестораны, праздники.</li>
    </ul>
    <iframe width="100%" src="https://www.youtube.com/embed/oEUOkcQjtcg?si=fYU0bbVxoFe3p1J6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Звучит, надо сказать, не слишком революционно: это вам не волынка.</p>
    <p>Где в Центральной/Латинской Америке нет какой-нибудь ужасной диктатуры? Я прочитала столько клевого, что мне хочется туда переехать.</p>

    <p>Мне казалось, за названием бренда IL DA DA MA должна стоять какая-то история. В их телеграм-канале я ее не нашла - зато нашла фотки кофейных ягод!</p>
    <img src="${r.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${r.berries1}" />
    <p>История с названием казалась мне незавершенной, так что я спросила их в чате (вот каких вершин достигла моя социальная смелость!) - но пока они мне не ответили.</p>
    
    <h3>Сироп "Соленая мисо-карамель" 🧂🍮</h3>
    <p>Японская умами + французская карамель = fusion бомба! Ты в курсе, что умами считается пятым вкусом, после кислого-соленого-горького-сладкого?</p>
    
    <p><strong>Мисо:</strong> Ферментированная соя, глубокий умами вкус (как бульон, мясо, грибы)</p>
    <p><strong>Карамель:</strong> Жжёный сахар</p>
    <p><strong>Вместе:</strong> Соль усиливает сладость, умами добавляет глубину → многослойность!</p>
    
    <p><strong>История:</strong> Тренд из мишленовских ресторанов (Momofuku, 2008), теперь в specialty-кофейнях.</p>
    
    <h3>Задание</h3>
    <ol>
      <li>Завари гватемальский декаф, добавь сироп</li>
      <li>В какие цвета ты раскрасила бы свою могилу? Нарисуй эскиз, если вдруг тебе нечем заняться.</li>
    </ol>
    
    <p>Представь кофейные плантации на склонах вулканов, цветные ковры под ногами процессий, гигантские змеи над кладбищами, и маримба, которая играет песню свободы! 🌋🪁🎶</p>
  `},{day:5,date:"2025-12-24",tanya_gift:"Дрип-кофе: Эфиопия + Бразилия",zebra_gift:"Дрип-кофе декаф (Вкусвилл)",tanya_bonus:"Ириски с гималайской солью",zebra_bonus:"Ириски с гималайской солью",title:"Сочельник: дрип-кофе и розовая соль",tanya_message:`
    <p>Сегодня отдыхаем от лонгридов про кофе - у тебя микс зерен из разных частей света от Вкусвилла. Но сегодня Сочельник, так что отдыхаем от лонгридов не от всей души.</p>
    <h3>Сочельник — что это, собственно? 🕯️</h3>
    <p><strong>24 декабря</strong> — канун католического Рождества (25 декабря). Последний день перед праздником.</p>
    <p><strong>Название:</strong> От слова "сочиво" (сочень) — ритуальное блюдо из зёрен пшеницы с мёдом и маком.</p>
    <p><strong>Суть:</strong> День <strong>ожидания и подготовки</strong>. Тихий, семейный, созерцательный. Атмосфера предвкушения чуда.</p>
    <p><strong>Традиции:</strong> Пост до первой звезды, свечи, семейный ужин, тишина. Момент остановиться.</p>
    
    <h3>Сочельник в разных странах 🌍</h3>
    <img src="${r.fish}" />
    
    <h4>Польша (Wigilia).Самая красивая традиция!</h4>
    <ul>
      <li><strong>12 постных блюд</strong> (рыба, грибы, капуста, борщ с ушками)</li>
      <li><strong>Opłatek</strong> (облатка) — тонкая пресная вафля с изображениями</li>
      <li>Семья делится облаткой: каждый отламывает кусочек от вафли другого</li>
      <li>Произносят пожелания → символ примирения, единства</li>
      <li><strong>Пустое место за столом</strong> для неожиданного гостя или умерших родственников (уииии, новые похоронные традиции!)</li>
      <li>Начинают есть, когда появляется первая звезда ⭐</li>
    </ul>
    
    <h4>Германия (Heiliger Abend) 🇩🇪</h4>
    <ul>
      <li>Дети <strong>не заходят в комнату с ёлкой</strong> до вечера — там "работают ангелы"!</li>
      <li>Christkind (Младенец Христос) или Weihnachtsmann приносит подарки</li>
      <li>Поют: "O Tannenbaum", "Stille Nacht" (Тихая ночь)</li>
    </ul>
    
    <h4>Италия (La Vigilia) 🇮🇹</h4>
    <ul>
      <li><strong>Feast of the Seven Fishes</strong> — 7 рыбных блюд! (иногда до 13)</li>
      <li>Треска, кальмары, осьминоги, мидии, креветки, паста с моллюсками</li>
      <li>Почему 7? = святые таинства, дни творения</li>
      <li>Ужин начинается поздно (20:00-21:00)</li>
      <li>Месса в полночь (Messa di Mezzanotte)</li>
      <li>Panettone (рождественский кекс) с вином 🍷</li>
    </ul>

    <img src="${r.fish1}" />
    
    <h4>Испания (Nochebuena) 🇪🇸</h4>
    <ul>
      <li>Ужин в 22:00-23:00 (в Испании всё поздно!)</li>
      <li><strong>Misa del Gallo</strong> (Петушиная месса) в полночь</li>
      <li>Почему "петушиная"? Легенда: петух прокукарекал в момент рождения Христа! 🐓</li>
      <li>Turrón (нуга с миндалём), польворонес (печенье)</li>
      <li>Подарки приносят Los Reyes Magos (Три короля) 6 января!</li>
    </ul>
    
    <h4>Франция (Réveillon) 🇫🇷</h4>
    <ul>
      <li>Réveillon = большой ужин <strong>после</strong> полуночной мессы</li>
      <li>Устрицы, фуа-гра, лосось, эскарго</li>
      <li><strong>Bûche de Noël</strong> (торт в форме бревна)</li>
      <li>Ужин длится до 3-4 утра! 🍾</li>
    </ul>
    
    <h4>Великобритания (Christmas Eve) 🇬🇧</h4>
    <ul>
      <li>Развешивают чулки у камина для Father Christmas</li>
      <li>Оставляют морковку для оленей, печенье и херес для Санты</li>
      <li>Дети пишут письма Санте и сжигают в камине (дым уносит письмо на Северный полюс!)</li>
      <li><strong>Nine Lessons and Carols</strong> (Кембридж) — традиция с 1918, транслируют по радио</li>
    </ul>
    
    <h4>Россия (православный Сочельник, 6 января) 🇷🇺</h4>
    <ul>
      <li><strong>Сочиво/кутья:</strong> Пшеница + мёд + мак + орехи</li>
      <li>Постные блюда до первой звезды</li>
      <li>12 блюд на столе (по числу апостолов)</li>
      <li>Сено под скатертью (символ яслей)</li>
      <li>Колядки — хождение по домам с песнями 🎵</li>
    </ul>
    
    <h4>Бразилия (Véspera de Natal) 🇧🇷</h4>
    <ul>
      <li>Католическое Рождество, но <strong>тропическое</strong>! Лето, жара!</li>
      <li>Ceia de Natal — большой ужин</li>
      <li>Индейка, ветчина, rabanada (бразильские гренки)</li>
      <li>Missa do Galo (Петушиная месса)</li>
      <li><strong>Papai Noel</strong> в красном костюме... но жарко! Иногда в шортах! 🩳</li>
      <li>Пляжное Рождество на побережье! 🏖️</li>
    </ul>

    <img src="${r.brazil1}" />
    
    <h3>Общие темы Сочельника:</h3>
    <ul>
      <li>✨ <strong>Ожидание:</strong> Предвкушение чуда, тишина, замедление</li>
      <li>🕯️ <strong>Свет:</strong> Свечи, звёзды, огни</li>
      <li>👨‍👩‍👧‍👦 <strong>Семья:</strong> Собираются вместе, прощают обиды</li>
      <li>🍽️ <strong>Пост → Пир:</strong> От воздержания к изобилию</li>
      <li>⛪ <strong>Месса в полночь:</strong> Момент перехода к Рождеству</li>
    </ul>

    <p><strong>Если верить моим табличным адвент-логам, у тебя сегодня Эфиопия + Бразилия психоделических расцветок. Если нет - сорямба, злые хакеры смешали данные.</p>
    <p> Твои психоделические пакеты:</strong> Specialty-волна! Яркие цвета = молодые обжарщики, которые отказались от "серьёзного" дизайна. Кофе = радость, а не элитарность!</p>
    
    <h3>Эфиопия — родина кофе 🇪🇹</h3>
    <img src="${r.ethiopia}" />
    <p><strong>Легенда Калди (IX век):</strong></p>
    <ul>
      <li>Пастух Калди заметил: его козы ели красные ягоды → танцевали всю ночь!</li>
      <li>Монахи попробовали → не спали на молитвах</li>
      <li>Сначала сожгли как "дьявольские ягоды"</li>
      <li>Но запах был так хорош, что решили заваривать!</li>
    </ul>
    <p>Между прочим, есть фотопруф:</p>
    <img src="${r.goats}" />
    
    <p><strong>Кофейная церемония (bunna):</strong></p>
    <ul>
      <li><strong>3 раунда:</strong> Abol (первый), Tona (второй), Baraka (третий = благословение)</li>
      <li>Жарят зёрна на сковороде прямо перед гостями</li>
      <li>Толкут в деревянной ступке</li>
      <li>Варят в <strong>джебене</strong> (глиняный кофейник с длинным носиком)</li>
      <li>Аромат + ладан + попкорн на столе</li>
      <li>Длится 2-3 часа — это не просто кофе, это общение!</li>
    </ul>
    
    <p><strong>Fun fact:</strong> В Эфиопии до сих пор растёт дикий кофе в лесах! 🌳</p>
    
    <h3>Бразилия — кофейный гигант 🇧🇷</h3>
    <p><strong>Цифры:</strong></p>
    <ul>
      <li><strong>№1 производитель в мире</strong> — более 30% всего кофе!</li>
      <li>220,000 кофейных ферм</li>
      <li>Экспорт с 1820-х годов</li>
    </ul>
    
    <p><strong>История (и скандал!):</strong></p>
    <ul>
      <li><strong>1727:</strong> Франсиско де Мелу Палета украл саженцы из Французской Гвианы</li>
      <li>Как? Соблазнил жену губернатора! Она подарила ему букет с саженцами внутри 💐</li>
      <li>К 1850-м Бразилия = мировой лидер</li>
      <li>Тёмная история: рабство на плантациях до 1888 года</li>
    </ul>
    
    <p><strong>Вкус Бразилии:</strong></p>
    <ul>
      <li>Ореховый, шоколадный, карамельный</li>
      <li>Низкая кислотность, полное тело</li>
      <li><strong>"Безопасный"</strong> вкус — почти всегда вкусно, не удивляет, но и не разочаровывает</li>
      <li>Сорта: Santos, Cerrado, Sul de Minas</li>
    </ul>
    
    <p><strong>Обработка:</strong> Часто используют <strong>pulped natural</strong> (полумытая) → сладость + чистота</p>
    
    <h3>Битва континентов: Африка vs Южная Америка</h3>
    <table border="1" cellpadding="5" cellspacing="0" style="margin: 20px 0; border-collapse: collapse;">
      <tr style="background-color: #f0f0f0;">
        <th></th>
        <th>Эфиопия 🇪🇹</th>
        <th>Бразилия 🇧🇷</th>
      </tr>
      <tr>
        <td><strong>Вкус</strong></td>
        <td>Цветы, ягоды, цитрус</td>
        <td>Орехи, шоколад, карамель</td>
      </tr>
      <tr>
        <td><strong>Кислотность</strong></td>
        <td>Яркая</td>
        <td>Низкая</td>
      </tr>
      <tr>
        <td><strong>Тело</strong></td>
        <td>Лёгкое</td>
        <td>Полное</td>
      </tr>
      <tr>
        <td><strong>Обработка</strong></td>
        <td>Natural (натуральная)</td>
        <td>Pulped natural</td>
      </tr>
      <tr>
        <td><strong>Характер</strong></td>
        <td>Неожиданный, яркий</td>
        <td>Надёжный, классический</td>
      </tr>
    </table>
    
    <h3>Немного о гималайской розовой соли в ирисках (если, конечно, это ириски) 🧂💗</h3>
    <p><strong>Почему розовая:</strong> <strong>Оксид железа</strong> (ржавчина!) из древнего океана (250+ млн лет!)</p>
    
    <p><strong>Маркетинг vs реальность:</strong></p>
    <ul>
      <li>📢 "Детокс! Минералы! Чакры!"</li>
      <li>🔬 Реальность: Красиво, вкусно, но не волшебно (99% NaCl)</li>
      <li>💰 Стоит в 10-20 раз дороже обычной. Маркетинг! Просто верим, что в эти ириски положили крутую)</li>
    </ul>
    <p><strong>Fun fact:</strong> В шахте Khewra (Пакистан) есть соляная мечеть!</p>
    
    <h3>Музыка для Сочельника 🎶</h3>
    <p><strong>Рождественская классика:</strong></p>
    <iframe width="100%" src="https://www.youtube.com/embed/5PaC6tnBO7E?si=9SfCVCDsgI3HzkX_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Вот легенда госпела поет O Holy Night, все как заповедовал Господь</p>
    <iframe width="100%" src="https://www.youtube.com/embed/pUh7xDO-8bE?si=U9Q0VqcwnEecqF-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>А вот какие-то эффектные мужики делают то же самое.</p>
    <h3>Задание 🎯</h3>
    <ol>
      <li><del>Постись до первой звезды</del> <del>Танцуй как коза под кофе</del> <del>Приготовь рыбные блюда по числу апостолов</del></li>
      <li><strong>Завари дрип-кофе</strong> медленно, как ритуал</li>
      <li><strong>Детектив:</strong> По вкусу угадай, что в смеси. Цветы? Орехи? Карамель?</li>
      <li><strong>Сочельник:</strong> Напиши одно, за что ты благодарна в 2025 🕯️</li>
      <p>(окей, он по крайней мере не убил нас. Хотя у него еще целая неделя)</p>
      <li><strong>Традиция:</strong> Если хочешь, зажги свечу. Момент тишины перед праздником.</li>
    </ol>

    <p>На всякий случай вот рецепт бразильских гренок:</p>
    <h3>Rabanada — бразильские рождественские гренки 🇧🇷🍞</h3>

<p><strong>Rabanada</strong> — это бразильская версия French Toast, традиционный десерт на Рождество и Новый год!</p>
<p><strong>История:</strong> Португальцы привезли рецепт в Бразилию в XVI веке. Изначально делали из чёрствого хлеба (не выбрасывать же), но блюдо стало праздничным.</p>
<img src="${r.rabanda}" />
<h4>Приготовление:</h4>

<ol>
  <li>Вчерашний белый хлеб режем ломтиками в 2-3 см толщиной.</li>
  <li>Нагреваем молоко (не кипятить!), добавь 3 ст. ложки сахара, корицу, ваниль, соль. Размешиваем до растворения сахара</li>
  <li>Выкладываем хлеб в широкую форму, заливаем молочной смесью (уже комнатной температуры).</li>
  <li>Вымачиваем <strong>10-15 минут</strong> (переверуть на половине времени). Хлеб должен пропитаться, но не развалиться!</li>
  <li>Взбиваем 3 яйца с щепоткой соли. Перелей в широкую миску.</li>
  <li>Смешиваем 100 г сахара + 2 ч. ложки корицы.</li>
  <li>Достаем ломтик из молока, даем стечь лишнему, окунаем в яичную смесь, жарим до золотистой корочки</li>
  <li><strong>Пока гренки горячие</strong>, щедро обваливаем в смеси со всех сторон.</li>
</ol>

<h4>Подача:</h4>
<ul>
  <li><strong>Традиционно:</strong> Холодными или комнатной температуры</li>
  <li><strong>С чем:</strong> Кофе (конечно!), горячий шоколад</li>
  <li><strong>Дополнительно:</strong> мёд или кленовый сироп, сгущёнка (очень по-бразильски!)</li>
</ul>

<h4>Варианты:</h4>
<ul>
  <li><strong>Rabanada de Forno</strong> (запечённая): После обваливания в корице запекаем в духовке 180°C 15-20 минут — меньше масла!</li>
  <li><strong>С апельсином:</strong> Добавить цедру апельсина в молоко, полей апельсиновым сиропом</li>
  <li><strong>С кокосом:</strong> Обвалять в кокосовой стружке вместо корицы</li>
  <li><strong>С порто:</strong> Добавить 50 мл портвейна в молочную смесь (взрослая версия!)</li>
</ul>
    <p>Пусть этот Сочельник будет тихим, тёплым и уютным! 🕯️☕💕</p>
  `,zebra_message:`
  <p>Сегодня отдыхаем от лонгридов про кофе - у тебя микс зерен из разных частей света от Вкусвилла. Но сегодня Сочельник, так что отдыхаем от лонгридов не от всей души.</p>
    <h3>Сочельник — что это, собственно? 🕯️</h3>
    <p><strong>24 декабря</strong> — канун католического Рождества (25 декабря). Последний день перед праздником.</p>
    <p><strong>Название:</strong> От слова "сочиво" (сочень) — ритуальное блюдо из зёрен пшеницы с мёдом и маком.</p>
    <p><strong>Суть:</strong> День <strong>ожидания и подготовки</strong>. Тихий, семейный, созерцательный. Атмосфера предвкушения чуда.</p>
    <p><strong>Традиции:</strong> Пост до первой звезды, свечи, семейный ужин, тишина. Момент остановиться.</p>
    
    <h3>Сочельник в разных странах 🌍</h3>
    <img src="${r.fish}" />
    
    <h4>Польша (Wigilia).Самая красивая традиция!</h4>
    <ul>
      <li><strong>12 постных блюд</strong> (рыба, грибы, капуста, борщ с ушками)</li>
      <li><strong>Opłatek</strong> (облатка) — тонкая пресная вафля с изображениями</li>
      <li>Семья делится облаткой: каждый отламывает кусочек от вафли другого</li>
      <li>Произносят пожелания → символ примирения, единства</li>
      <li><strong>Пустое место за столом</strong> для неожиданного гостя или умерших родственников (уииии, новые похоронные традиции!)</li>
      <li>Начинают есть, когда появляется первая звезда ⭐</li>
    </ul>
    
    <h4>Германия (Heiliger Abend) 🇩🇪</h4>
    <ul>
      <li>Дети <strong>не заходят в комнату с ёлкой</strong> до вечера — там "работают ангелы"!</li>
      <li>Christkind (Младенец Христос) или Weihnachtsmann приносит подарки</li>
      <li>Поют: "O Tannenbaum", "Stille Nacht" (Тихая ночь)</li>
    </ul>
    
    <h4>Италия (La Vigilia) 🇮🇹</h4>
    <ul>
      <li><strong>Feast of the Seven Fishes</strong> — 7 рыбных блюд! (иногда до 13)</li>
      <li>Треска, кальмары, осьминоги, мидии, креветки, паста с моллюсками</li>
      <li>Почему 7? = святые таинства, дни творения</li>
      <li>Ужин начинается поздно (20:00-21:00)</li>
      <li>Месса в полночь (Messa di Mezzanotte)</li>
      <li>Panettone (рождественский кекс) с вином 🍷</li>
    </ul>

    <img src="${r.fish1}" />
    
    <h4>Испания (Nochebuena) 🇪🇸</h4>
    <ul>
      <li>Ужин в 22:00-23:00 (в Испании всё поздно!)</li>
      <li><strong>Misa del Gallo</strong> (Петушиная месса) в полночь</li>
      <li>Почему "петушиная"? Легенда: петух прокукарекал в момент рождения Христа! 🐓</li>
      <li>Turrón (нуга с миндалём), польворонес (печенье)</li>
      <li>Подарки приносят Los Reyes Magos (Три короля) 6 января!</li>
    </ul>
    
    <h4>Франция (Réveillon) 🇫🇷</h4>
    <ul>
      <li>Réveillon = большой ужин <strong>после</strong> полуночной мессы</li>
      <li>Устрицы, фуа-гра, лосось, эскарго</li>
      <li><strong>Bûche de Noël</strong> (торт в форме бревна)</li>
      <li>Ужин длится до 3-4 утра! 🍾</li>
    </ul>
    
    <h4>Великобритания (Christmas Eve) 🇬🇧</h4>
    <ul>
      <li>Развешивают чулки у камина для Father Christmas</li>
      <li>Оставляют морковку для оленей, печенье и херес для Санты</li>
      <li>Дети пишут письма Санте и сжигают в камине (дым уносит письмо на Северный полюс!)</li>
      <li><strong>Nine Lessons and Carols</strong> (Кембридж) — традиция с 1918, транслируют по радио</li>
    </ul>
    
    <h4>Россия (православный Сочельник, 6 января) 🇷🇺</h4>
    <ul>
      <li><strong>Сочиво/кутья:</strong> Пшеница + мёд + мак + орехи;</li>
      <li>Постные блюда до первой звезды;</li>
      <li>12 блюд на столе (по числу апостолов);</li>
      <li>Сено под скатертью (символ яслей);</li>
      <li>Колядки — хождение по домам с песнями 🎵</li>
    </ul>
    
    <h4>Бразилия (Véspera de Natal)</h4>
    <ul>
      <li>Католическое Рождество, но <strong>тропическое</strong>! Лето, жара!</li>
      <li>Ceia de Natal — большой ужин;</li>
      <li>Индейка, ветчина, rabanada (бразильские гренки);</li>
      <li>Missa do Galo (Петушиная месса);</li>
      <li><strong>Papai Noel</strong> в красном костюме... но жарко! Иногда в шортах 🩳</li>
      <li>Пляжное Рождество на побережье 🏖️</li>
    </ul>

    <img src="${r.brazil1}" />
    
    <h3>Общие темы Сочельника:</h3>
    <ul>
      <li>✨ <strong>Ожидание:</strong> Предвкушение чуда, тишина, замедление;</li>
      <li>🕯️ <strong>Свет:</strong> Свечи, звёзды, огни;</li>
      <li>👨‍👩‍👧‍👦 <strong>Семья:</strong> Собираются вместе, прощают обиды;</li>
      <li>🍽️ <strong>Пост → Пир:</strong> От воздержания к изобилию;</li>
      <li>⛪ <strong>Месса в полночь:</strong> Момент перехода к Рождеству.</li>
    </ul>

    <h3>Твой сегодняшний декаф-детектив 🕵️</h3>
    <p><strong>Задача:</strong> По вкусу попробуй угадать, что в смеси.</p>
    
    <p><strong>Подсказки:</strong></p>
    <ul>
      <li><strong>Цветочный, ягодный, яркая кислотность?</strong> → Скорее всего Эфиопия</li>
      <li><strong>Ореховый, шоколадный, низкая кислотность?</strong> → Скорее всего Бразилия</li>
      <li><strong>Сбалансированный, карамельный?</strong> → Может быть Колумбия</li>
      <li><strong>Винные ноты, высокогорный?</strong> → Может быть Гватемала или Кения</li>
    </ul>
    <p>Помни, что это может быть микс, так что шансов у тебя немного. Можно сказать, что их не было изначально.</p>
    <p>Вкусвилл обычно использует надёжные, не экстремальные вкусы. Нейронка ставит на Бразилию или смесь.</p>
    
    <h3>Немного о гималайской розовой соли в ирисках (если, конечно, это ириски, а не сироп или загадка №22) 🧂💗</h3>
    <p><strong>Почему розовая:</strong> <strong>Оксид железа</strong> (ржавчина!) из древнего океана (250+ млн лет!)</p>
    
    <p><strong>Маркетинг vs реальность:</strong></p>
    <ul>
      <li>📢 "Детокс! Минералы! Чакры!"</li>
      <li>🔬 Реальность: Красиво, вкусно, но не волшебно (99% NaCl)</li>
      <li>💰 Стоит в 10-20 раз дороже обычной. Маркетинг! Просто верим, что в твою ириску положили крутую)</li>
    </ul>
    
    <p><strong>Fun fact:</strong> В шахте Khewra (Пакистан) есть соляная мечеть!</p>
    
    <h3>Музыка для Сочельника 🎶</h3>
    <p><strong>Рождественская классика:</strong></p>
    <iframe width="100%" src="https://www.youtube.com/embed/5PaC6tnBO7E?si=9SfCVCDsgI3HzkX_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Вот легенда госпела поет O Holy Night, все как заповедовал Господь</p>
    <iframe width="100%" src="https://www.youtube.com/embed/pUh7xDO-8bE?si=U9Q0VqcwnEecqF-o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>А вот какие-то эффектные мужики делают то же самое.</p>
    <h3>Задание 🎯</h3>
    <ol>
      <li><strong>Завари декаф-дрип</strong> медленно, как ритуал</li>
      <li><del>Постись до первой звезды</del> <del>Приготовь рыбные блюда по числу апостолов</del></li>
      <li><strong>Детектив:</strong> По вкусу угадай, что в смеси. Цветы? Орехи? Карамель?</li>
      <li><strong>Сочельник:</strong> Напиши одно, за что ты благодарна в 2025 🕯️</li>
      <p>(окей, он по крайней мере не убил нас. Хотя у него еще целая неделя)</p>
      <li><strong>Традиция:</strong> Если хочешь, зажги свечу. Момент тишины перед праздником.</li>
    </ol>

    <p>На всякий случай вот рецепт бразильских гренок:</p>
    <h3>Rabanada — бразильские рождественские гренки 🍞</h3>
    <img src="${r.rabanda}" />

<p><strong>Rabanada</strong> — это бразильская версия French Toast, традиционный десерт на Рождество и Новый год!</p>
<p><strong>История:</strong> Португальцы привезли рецепт в Бразилию в XVI веке. Изначально делали из чёрствого хлеба (не выбрасывать же), но блюдо стало праздничным.</p>

<h4>Приготовление:</h4>

<ol>
  <li>Вчерашний белый хлеб режем ломтиками в 2-3 см толщиной.</li>
  <li>Нагреваем молоко (не кипятить!), добавь 3 ст. ложки сахара, корицу, ваниль, соль. Размешиваем до растворения сахара</li>
  <li>Выкладываем хлеб в широкую форму, заливаем молочной смесью (уже комнатной температуры).</li>
  <li>Вымачиваем <strong>10-15 минут</strong> (переверуть на половине времени). Хлеб должен пропитаться, но не развалиться!</li>
  <li>Взбиваем 3 яйца с щепоткой соли. Перелей в широкую миску.</li>
  <li>Смешиваем 100 г сахара + 2 ч. ложки корицы.</li>
  <li>Достаем ломтик из молока, даем стечь лишнему, окунаем в яичную смесь, жарим до золотистой корочки</li>
  <li><strong>Пока гренки горячие</strong>, щедро обваливаем в смеси со всех сторон.</li>
</ol>

<h4>Подача:</h4>
<ul>
  <li><strong>Традиционно:</strong> Холодными или комнатной температуры</li>
  <li><strong>С чем:</strong> Кофе (конечно!), горячий шоколад</li>
  <li><strong>Дополнительно:</strong> мёд или кленовый сироп, сгущёнка (очень по-бразильски!)</li>
</ul>

<h4>Варианты:</h4>
<ul>
  <li><strong>Rabanada de Forno</strong> (запечённая): После обваливания в корице запекаем в духовке 180°C 15-20 минут — меньше масла!</li>
  <li><strong>С апельсином:</strong> Добавить цедру апельсина в молоко, полей апельсиновым сиропом</li>
  <li><strong>С кокосом:</strong> Обвалять в кокосовой стружке вместо корицы</li>
  <li><strong>С порто:</strong> Добавить 50 мл портвейна в молочную смесь (взрослая версия!)</li>
</ul>
    
    <p>Пусть этот Сочельник будет тихим, тёплым и уютным! 🕯️☕💕</p>
  `},{day:6,date:"2025-12-25",tanya_gift:"Кофе из Гондураса",zebra_gift:"Напиток: кэроб, цикорий, бобы тонка, кардамон",tanya_bonus:"Протеиновое печенье",zebra_bonus:"Протеиновое печенье",title:"Рождество: Гондурас и кофейные блокады",tanya_message:`
    <h3>С Рождеством! 🎄🎁</h3>
    <p><strong>25 декабря</strong> — католическое и протестантское Рождество.</p>
    
    <p><strong>Традиции:</strong> Подарки утром, семейный обед, рождественская индейка, все дела.</p>
    
    <h3>Гондурас — неизвестный кофейный герой</h3>
    <p><strong>Гондурас</strong> — страна, о которой мало кто думает, когда пьёт кофе. Но это <strong>крупнейший производитель кофе в Центральной Америке</strong>!</p>
    <img src="${r.honduras}" />
    <p><strong>География:</strong></p>
    <ul>
      <li>Центральная Америка, между Гватемалой и Никарагуа. Карибское побережье + Тихий океан</li>
      <li>Горы, джунгли, руины майя (<strong>Копан</strong> — один из важнейших городов цивилизации майя!)</li>
    </ul>
    
    <p><strong>Кофе в Гондурасе:</strong></p>
    <ul>
      <li><strong>№1 в Центральной Америке</strong> по объёму (обогнал Гватемалу в 2011)</li>
      <li><strong>№6 в мире</strong> по производству</li>
      <li>110,000 семейных ферм, 95% — мелкие фермеры (менее 7 гектаров)</li>
      <li>Но мало кто знает — весь кофе уходил в бленды для крупных брендов!</li>
      <li>Долго продавали как "Central American blend" без имени страны. Репутация: "дешёвый, для блендов"</li>
      <li><strong>Сейчас:</strong> Specialty-волна меняет всё! Гондурас в топовых обжарках</li>
    </ul>
    <img src="${r.resp}" />
    
    <p><strong>6 кофейных регионов:</strong></p>
    <ul>
      <li><strong>Copán</strong> — западный, у границы с Гватемалой, шоколад + карамель.</li>
      <li><strong>Opalaca</strong> — высокогорный, сбалансированный.</li>
      <li><strong>Montecillos</strong> — центральный, фруктовый, цитрусовый.</li>
      <li><strong>Comayagua</strong> — винная кислотность.</li>
      <li><strong>Agalta</strong> — восточный, тропические фрукты.</li>
      <li><strong>El Paraíso</strong> — у границы с Никарагуа, сладкий, мягкий.</li>
    </ul>
    <img src="${r.honduras1}" />
    <p><strong>Вкус Гондураса: "надёжный"</strong> — похож на бразильский, но с большей сложностью.</p>
    <p><strong>Fun fact:</strong> В 2012 Гондурас впервые выиграл Cup of Excellence (международный конкурс качества кофе)! Многие фермеры — потомки майя, выращивают кофе традиционными методами.</p>
    
    <h3>Рождество в Гондурасе 🎄🌴</h3>
    <p><strong>Тропическое Рождество!</strong> Жарко, но католическая традиция сильна.</p>
    
    <p><strong>Утро 25 декабря:</strong></p>
    <ul>
      <li>Семьи идут на утреннюю мессу</li>
      <li>Большой завтрак: <strong>baleadas</strong> (лепёшки с фасолью и сметаной), тамалес, свежие фрукты</li>
      <li><strong>Кофе!</strong> Свежезаваренный, из местных зёрен</li>
      <li>Дети получают подарки</li>
      <li>Вечером — фейерверки над Карибским морем!</li>
    </ul>

    <p>(Теперь я хочу тропическое Рождество, а не вот это вот все)</p>
    
    <h3>Протеиновое печенье 🍪💪</h3>
    <p><strong>Что это:</strong> Печенье с добавлением протеина (сывороточного или растительного). Меньше сахара, больше белка.</p>
    
    <p><strong>Зачем:</strong> Перекус без чувства вины, белок насыщает дольше, вкусно + "полезно" (ну, вроде того)</p>
    
        <h3>Музыка для Рождества 🎶</h3>
    <p><strong>Классическая рождественская:</strong></p>
    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/CND5_F2bQbA?si=DYuSkhzG-s1AU1MV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe width="100%" src="https://www.youtube.com/embed/FSCo5dZ42v8?si=zPpEzjf6zBbUdbRK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>"Carol of the Bells" - внезапно это музыка родом из Украины времен Российской империи</p>
    <pкраинский>Была основана на украинских народных песнях. Создатель - <краинский>Микола Леонтович, краинский композитор, хоровой дирижёр, учитель (1877-1921)</p>
  <p>Убит в 1921 году агентом ЧК (большевики считали его "украинским националистом")</p>
<ul>
  <li>Оригинальная песня <strong>НЕ про Рождество!</strong> Про Новый год и богатство!</li>
  <li>Ласточка приносит весть о богатом урожае, овцы родили ягнят = достаток в новом году, пожелание процветания хозяину дома</li>
  <li>Пели на <strong>Щедрый вечер</strong> (13 января, канун Нового года по старому стилю)</li>
</ul>

<p><strong>Премьера:</strong> Декабрь 1916, Киев, студенческий хор Киевского университета</p>
<p><strong>1919 — Турне по Европе:</strong></p>
<p>Украина в гражданской войне, хор эмигрирует, выступает в Праге, Париже, Лондоне — везде овации!</p>
<p><strong>1921-1922 — Америка, концерт в <strong>Carnegie Hall</strong> — триумф! Американцы в восторге, но не понимают украинского</p>

<p>Американский дирижёр <strong>Peter J. Wilhousky</strong> пишет новый английский текст и превращает новогоднюю украинскую песню в рождественскую американскую.</p>

<p><strong>Новый текст — про колокола:</strong></p>
  <p><em>Hark! how the bells, sweet silver bells<br>
  All seem to say, "Throw cares away."<br>
  Christmas is here, bringing good cheer<br>
  To young and old, meek and the bold...<br>
  Merry, merry, merry, merry Christmas!</em></p>

<p><strong>1990-е — просто популярность переходит во взрыв:</strong></p>
<ul>
  <li>Фильмы ("Один дома", "Гарри Поттер"), сотни кавер-версий.
  <li>⚖️ <strong>Споры об авторских правах</strong> между наследниками Леонтовича и Wilhousky до сих пор!</li>
</ul>

    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари кофе из Гондураса</li>
      <li>Попробуй с протеиновым печеньем (макать обязательно!)</li>
      <li>Нейронки считают, что после протеинового печенья задание должно быть про приседания, но это бессмысленно и подло.</li>
      <li>Мне больше нравится другое - поделись в чате твоей самой любимой рождественской песней/музыкой, а потом самой раздражающей.</li>
    </ol>
    <img src="${r.mem}" />
  `,zebra_message:`
    <h3>С Рождеством! 🎄🎁</h3>
    <p><strong>25 декабря</strong> — католическое и протестантское Рождество!</p>
    
    <p><strong>Традиции:</strong> Подарки, семья, радость, свет, благодарность (ну да, ну да).</p>
    
    <h3>Твой напиток — алхимия без кофе! 🧙‍♀️</h3>
    <p><strong>Состав стика:</strong></p>
    <ul>
      <li>☕ <strong>Цикорий</strong> — кофейная горечь и плотность</li>
      <li>🍫 <strong>Кэроб</strong> — шоколадная сладость</li>
      <li>🌰 <strong>Бобы тонка</strong> — ваниль, миндаль, мистика</li>
      <li>🌿 <strong>Зелёный кардамон</strong> — цитрус, свежесть, пряность</li>
    </ul>
    
    <p><strong>Вкусовая карта:</strong></p>
    <ul>
      <li>Основа: горький + сладкий (цикорий + кэроб)</li>
      <li>Аромат: ваниль + миндаль (тонка)</li>
      <li>Яркость: цитрус + мята (кардамон)</li>
      <li>= Сложный, многослойный, <strong>БЕЗ кофеина!</strong></li>
    </ul>
    
    <h3>Кофейные блокады — история заменителей ☕🚫</h3>
    <p>На протяжении истории кофе периодически исчезал (войны, блокады, дефицит). Люди искали замену!</p>
    <img src="${r.cicoriy}" />
    <h4>1. Цикорий — король заменителей ☕</h4>
    <p><strong>Что это:</strong> Корень растения Cichorium intybus (родственник одуванчика!). Сушат, обжаривают, мелют.</p>
    
    <p><strong>История блокад:</strong></p>
    <ul>
      <li><strong>Наполеоновская блокада (1806-1814):</strong> Франция отрезана от колоний → нет кофе → цикорий стал национальным напитком!</li>
      <li><strong>Первая мировая война:</strong> Германия без кофе → цикорий + ячмень + жёлуди</li>
      <li><strong>Вторая мировая война:</strong> По всей Европе суррогаты кофе</li>
      <li><strong>СССР:</strong> Дефицит кофе → "кофейный напиток" (цикорий + ячмень)</li>
    </ul>
    
    <p><strong>Вкус:</strong> Горьковатый, ореховый, карамельный (похож на кофе!). Густой, плотный. <strong>БЕЗ кофеина!</strong></p>
    
    <p><strong>Новый Орлеан, США:</strong> До сих пор пьют <strong>Café du Monde</strong> (кофе + 30% цикорий)! Французские колонисты привезли традицию.</p>
    
    <p><strong>Польза:</strong> Инулин (пребиотик), антиоксиданты, помогает пищеварению.</p>
    
    <h4>2. Ячмень — зерновой кофе 🌾</h4>
    <p><strong>Что это:</strong> Обжаренные зёрна ячменя, молотые.</p>
    
    <p><strong>История:</strong></p>
    <ul>
      <li><strong>Гражданская война в США (1861-1865):</strong> Юг без кофе → жарили ячмень</li>
      <li><strong>Япония:</strong> Mugicha (ячменный чай) — пьют холодным летом</li>
      <li><strong>Корея:</strong> Boricha — ячменный чай, национальный напиток</li>
      <li><strong>Италия:</strong> Caffè d'orzo (ячменный кофе) — популярен до сих пор!</li>
    </ul>
    
    <p><strong>Вкус:</strong> Ореховый, зерновой, мягкий. Меньше горечи, чем у цикория.</p>
    
    <h4>3. Жёлуди — лесной кофе 🌰</h4>
    <p><strong>Что это:</strong> Жёлуди дуба, очищенные, обжаренные, молотые.</p>
    
    <p><strong>История:</strong></p>
    <ul>
      <li><strong>Гражданская война в США:</strong> Конфедераты жарили жёлуди</li>
      <li><strong>Первая и Вторая мировые войны:</strong> Германия, Франция использовали жёлуди</li>
      <li><strong>Корейская война:</strong> Dotorimuk (желудёвое желе) + жёлудёвый чай</li>
    </ul>
    <img src="${r.cafe}" />
    
    <p><strong>Вкус:</strong> Древесный, ореховый, землистый. Вяжущий (танины!).</p>
    
    <p><strong>Проблема:</strong> Нужно вымачивать жёлуди (убрать танины), иначе горько и токсично.</p>
    
    <h4>4. Кэроб — шоколадный заменитель 🍫</h4>
    <p><strong>Что это:</strong> Порошок из стручков рожкового дерева (Средиземноморье).</p>
    <img src="${r.carob}" />
    <p><strong>История:</strong></p>
    <ul>
      <li>Древние египтяне и греки ели стручки</li>
      <li>В Средние века — корм для животных</li>
      <li><strong>Вторая мировая война:</strong> В Испании кэроб заменял какао и кофе</li>
      <li><strong>Сейчас:</strong> Альтернатива какао (без кофеина, без теобромина)</li>
    </ul>
    
    <p><strong>Вкус:</strong> Шоколадный, карамельный, сладкий от природы (40-50% сахаров!)</p>
    
    <h4>5. Корень одуванчика — народный кофе 🌼</h4>
    <p><strong>Что это:</strong> Корень одуванчика, обжаренный и молотый (очень похож на цикорий!).</p>
    
    <p><strong>История:</strong></p>
    <ul>
      <li>Использовали в Европе во время войн</li>
      <li>Народная медицина (печень, детокс)</li>
      <li><strong>Сейчас:</strong> Wellness-тренд, "кофе для печени"</li>
    </ul>
    
    <p><strong>Вкус:</strong> Горький, травяной, землистый.</p>
    
    <h4>6. Бобы тонка — ванильная роскошь 🌰✨</h4>
    <p><strong>Что это:</strong> Семена дерева Dipteryx odorata (Южная Америка). Пахнут ванилью + миндалём + карамелью.</p>
    
    <p><strong>История:</strong></p>
    <ul>
      <li>Коренные народы Амазонии использовали как талисман</li>
      <li>В Европе — с XVIII века (французская кондитерская школа)</li>
      <li><strong>Сейчас:</strong> Модный ингредиент в specialty-напитках</li>
    </ul>
    
    <p><strong>Вкус:</strong> Ваниль, миндаль, вишня, карамель. Тёплый, обволакивающий.</p>
    <img src="${r.tonka}" />
    <p><strong>⚠️ Важно:</strong> Содержат кумарин (в больших дозах токсичен). В США запрещены в еде с 1954! В Европе разрешены в микродозах. В твоём стике — безопасная доза!</p>
    
    <h4>7. Зелёный кардамон — королева специй 👑</h4>
    <p><strong>Что это:</strong> Специя из семейства имбирных (Индия).</p>
    <img src="${r.kardamon}" />
    <p><strong>Вкус:</strong> Цитрусовый, эвкалиптовый, мятный, сладко-пряный.</p>
    
    <p><strong>Где используют:</strong></p>
    <ul>
      <li><strong>Индия:</strong> Масала-чай</li>
      <li><strong>Скандинавия:</strong> Булочки с кардамоном</li>
      <li><strong>Арабские страны:</strong> Кофе с кардамоном (гахва)</li>
      <li><strong>Эфиопия:</strong> Кофейные церемонии</li>
    </ul>
    
    <p><strong>Fun fact:</strong> Третья самая дорогая специя (после шафрана и ванили!). Называют "королевой специй" (чёрный перец = король).</p>
    
    <h3>Музыка для Рождества 🎶</h3>
    <p><strong>Классическая рождественская:</strong></p>
    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/CND5_F2bQbA?si=DYuSkhzG-s1AU1MV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe width="100%" src="https://www.youtube.com/embed/FSCo5dZ42v8?si=zPpEzjf6zBbUdbRK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>"Carol of the Bells" - внезапно это музыка родом из Украины времен Российской империи</p>
    <pкраинский>Была основана на украинских народных песнях. Создатель - <краинский>Микола Леонтович, краинский композитор, хоровой дирижёр, учитель (1877-1921)</p>
  <p>Убит в 1921 году агентом ЧК (большевики считали его "украинским националистом")</p>
<ul>
  <li>Оригинальная песня <strong>НЕ про Рождество!</strong> Про Новый год и богатство!</li>
  <li>Ласточка приносит весть о богатом урожае, овцы родили ягнят = достаток в новом году, пожелание процветания хозяину дома</li>
  <li>Пели на <strong>Щедрый вечер</strong> (13 января, канун Нового года по старому стилю)</li>
</ul>

<p><strong>Премьера:</strong> Декабрь 1916, Киев, студенческий хор Киевского университета</p>
<p><strong>1919 — Турне по Европе:</strong></p>
<p>Украина в гражданской войне, хор эмигрирует, выступает в Праге, Париже, Лондоне — везде овации!</p>
<p><strong>1921-1922 — Америка, концерт в <strong>Carnegie Hall</strong> — триумф! Американцы в восторге, но не понимают украинского</p>

<p>Американский дирижёр <strong>Peter J. Wilhousky</strong> пишет новый английский текст и превращает новогоднюю украинскую песню в рождественскую американскую.</p>

<p><strong>Новый текст — про колокола:</strong></p>
  <p><em>Hark! how the bells, sweet silver bells<br>
  All seem to say, "Throw cares away."<br>
  Christmas is here, bringing good cheer<br>
  To young and old, meek and the bold...<br>
  Merry, merry, merry, merry Christmas!</em></p>

<p><strong>1990-е — просто популярность переходит во взрыв:</strong></p>
<ul>
  <li>Фильмы ("Один дома", "Гарри Поттер"), сотни кавер-версий.
  <li>⚖️ <strong>Споры об авторских правах</strong> между наследниками Леонтовича и Wilhousky до сих пор!</li>
</ul>

    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари напиток-алхимию (с молоком будет как какао-кофе!)</li>
      <li><strong>Кофейная блокада:</strong> Представь, что кофе исчез (новая война/катастрофа). Из всех заменителей выше какой бы ты выбрала?</li>
      <li><strong>Протеиновое печенье:</strong> грех наслаждения или добродетель здоровья?</li>
      <li><strong>Музыка:</strong> Послушай "Carol of the Bells" или госпел</li>
      <li>Поделись в чате твоей самой любимой рождественской песней/музыкой, а потом самой раздражающей.</li>
    </ol>
    
    <p><strong>С Рождеством!</strong> 🎄☕</p>
    <img src="${r.mem}" />
  `},{day:7,date:"2025-12-26",tanya_gift:"Армянский детский растворимый кофе",zebra_gift:"Армянский детский растворимый кофе",tanya_bonus:"Зефир в виде кошачьей лапки",zebra_bonus:"Зефир в виде кошачьей лапки",title:"Ереван — город, в который я влюбилась",tanya_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${r.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${r.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${r.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${r.bears}" />
    <h3>Армяне и кофе — это серьёзно ☕</h3>

    <p><strong>Как готовят:</strong></p>
    <ul>
      <li>В <strong>джезве</strong> (турка) на песке или плите</li>
      <li>Мелкий помол (почти пыль)</li>
      <li>Медленно, на слабом огне</li>
      <li>Пенка поднимается три раза — снимают, опять нагревают</li>
      <li>Подают в маленьких чашечках</li>
      <li>С стаканом воды (чтобы "очистить вкус")</li>
      <li>Иногда с кардамоном</li>
    </ul>
    <img src="${r.yazzve}" />
    <p><strong>Как пьют:</strong></p>
    <ul>
      <li>Маленькими глотками</li>
      <li>Медленно (чашка может длиться час!)</li>
      <li>За разговором</li>
      <li>Гуща остаётся на дне. Армянские бабушки читают гущу профессионально.</li>
    </ul>

    <p>Но это не наш случай, потому что у нас сегодня ДЕТСКИЙ КОФЕ </p>
    <h3>Детский кофе — чтобы дети не чувствовали себя обделёнными ☕👶</h3>
    <p>В армянских семьях кофе пьют <strong>все</strong>. Даже дети.</p>
    <p>Но детям нельзя кофеин! Поэтому придумали <strong>детский кофе БЕЗ кофеина</strong>:</p>
    
    <p><strong>Зачем?</strong> Чтобы ребёнок сидел за столом со взрослыми, пил "свой кофе", чувствовал себя частью семьи (и потихоньку привыкал).</p>
    
    <p>Воскресный обед — это 15 человек за столом. Бабушка, дедушка, дети, внуки, соседи. Все едят, пьют, разговаривают, и у каждого — чашка кофе.</p>
    <p>Ребёнок не может сидеть с компотом, пока все пьют кофе! Ему дают детский. Он счастлив.</p>
    
    <h3>Арарат — гора, которую украли 🏔️💔</h3>
    <p>Если стоишь в Ереване и смотришь на северо-запад — видишь <strong>две снежные вершины</strong>. Большой Арарат и Малый Арарат.</p>
    <p><strong>Проблема:</strong> Арарат сейчас в Турции.</p>
    <img src="${r.ararat}" />
    <p><strong>Как так вышло:</strong></p>
    <ul>
      <li>Арарат — символ Армении (на гербе, на бутылках коньяка, в сердцах).</li>
      <li>Библейская гора — туда причалил Ноев ковчег.</li>
      <li>Армяне жили у подножия Арарата тысячи лет.</li>
      <li>1921 год — советско-турецкий договор → граница прошла так, что Арарат остался в Турции.</li>
    </ul>
    <p><strong>Результат:</strong></p>
    <p>Армяне видят свою главную гору из окон. Но не могут к ней подойти. Граница закрыта.</p>
    
    <p>Армянский алфавит — один из красивейших в мире. <strong>Создан в 405 году</strong> Месропом Маштоцем (монах, учёный, лингвист).</p>
    
    <p><strong>Зачем создавали:</strong></p>
    <ul>
      <li>До этого армяне писали на греческом, сирийском, персидском.</li>
      <li>Нужен был <strong>свой</strong> алфавит для перевода Библии.</li>
      <li>Маштоц изучил все известные алфавиты и создал новый — специально для армянского языка.</li>
      <li>38 букв (сейчас 39). Каждая буква — как маленькое произведение искусства.</li>
      <li>39 букву добавили в советское время по сложносоставным причинам (я прочитала, но не въехала - как будто добавили третью букву для звука о, потому что у соседей была и такая тоже. Но это неточно).</li>
      <li>Округлые, плавные линии. Выглядят почти как орнамент. Я пыталась учить их по вывескам.</li>
    </ul>
    <img src="${r.abc}" />
    
    <p><strong>Где увидеть:</strong></p>
    <p>В Ереване на склоне горы Арагац есть <strong>памятник армянскому алфавиту</strong> — 38 огромных каменных букв (2-3 метра высотой!). Люди ходят между ними, фотографируются, трогают.</p>
    
    <h3>Коньячное производство — армянская гордость 🥃</h3>
    <p><strong>Армянский коньяк</strong> — это не просто напиток. Это <strong>национальная гордость</strong>.</p>
    
    <p><strong>История:</strong></p>
    <ul>
      <li>1887 год — купец Нерсес Таирян основал первый коньячный завод в Ереване.</li>
      <li>1899 год — завод купил Николай Шустов, привёз французских мастеров, внедрил технологии.</li>
      <li>1900 год — армянский коньяк выиграл Гран-при на Всемирной выставке в Париже! Французы были в шоке.</li>
    </ul>
    <img src="${r.noy}" />
    <p><strong>Почему армянский коньяк особенный:</strong></p>
    <ul>
      <li><strong>Терруар:</strong> Араратская долина, вулканическая почва, горный климат</li>
      <li><strong>Виноград:</strong> Местные сорта (Воскеат, Кангун, Гаран Дмак)</li>
      <li><strong>Вода:</strong> Из горных источников (очень мягкая)</li>
      <li><strong>Дубовые бочки:</strong> Выдержка от 3 до 70+ лет!</li>
      <li><strong>Климат:</strong> Резкие перепады температур → коньяк "дышит", набирает вкус</li>
    </ul>
    
    <p><strong>Звёздная система:</strong></p>
    <ul>
      <li>⭐⭐⭐ (3 звезды) — 3 года выдержки</li>
      <li>⭐⭐⭐⭐⭐ (5 звёзд) — 5 лет</li>
      <li><strong>Коллекционные:</strong> с именами — "Nairi" (20 лет), "Vaspurakan" (30 лет), "Dvin" (25 лет)</li>
    </ul>
    
    <p><strong>Легенда про Черчилля:</strong> Уинстон Черчилль пил только армянский коньяк "Двин". Сталин дарил ему ящики.</p>
    
    <p>Можно приехать на экскурсию на <strong>завод "Арарат" в Ереване:</strong> показывают хранилища с бочками до потолка, музей со старинными бутылками, а еще дают попробовать сортов 5-6.</p>
    
    <iframe width="100%" src="https://www.youtube.com/embed/zwgvelZPb10?si=tSX3RINQqio-CMHX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Дудук — духовой инструмент из абрикосового дерева. Звучит как-то sad and misterious, говоря дипломатично.</p>
    
    <iframe width="100%" src="https://www.youtube.com/embed/h2gdlFoaKyg?si=Ru4CQkI8hi-i9Zsz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Знаменитый армянский композитор. Этот танец знают все!</p>
    <p>А вот сюжет балета Гаянэ, написанной в эвакуации во время ВОВ:</p>
<p>Армянский колхоз, время сбора урожая. Все танцуют и радуются. <strong>Гаянэ</strong> — молодая красавица-бригадир — замужем за <strong>Гико</strong>. Но оказывается, её муж — <strong>контрабандист и предатель (вот это поворот)!</strong> Он тайком переправляет через границу краденое добро.</p>

<p>Пограничники во главе с командиром <strong>Казаковым</strong> ловят Гико с поличным. Гаянэ, узнав правду, сама разоблачает мужа. Гико арестован.</p>

<p>Гаянэ и благородный Казаков влюбляются друг в друга. Финал — праздник победы: справедливость восторжествовала, любовь найдена, колхоз процветает. Все танцуют <strong>"Танец с саблями"</strong> — вихрь радости и энергии!</p>

<p><em>Типичный советский сюжет 1942 года: колхоз = хорошо, предатели = плохо, пограничники = герои. Но музыка настолько гениальна, что сюжет совершенно не важен!</em> 😄</p>
    <iframe width="100%" src="https://www.youtube.com/embed/nCDGi21OVh4?si=9GQQ_LB60vRYxPO2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>А вот эффектные армянские женщины играют на каких-то сложносоставных гуслей в городских пейзажах</p>
    
    <iframe width="100%" src="https://www.youtube.com/embed/QzL9vO4UZFY?si=EV84zns_4FQGzRsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>А вот их премьер Пашинян грустит под Земфиру: 0 осуждения, само собой</p>
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари детский кофе, съешь зефир-лапку.</li>
      <li>Поставь себе что-нибудь из плей-листа Пашиняна.</li>
      <li>Если бы у тебя образовались дети, ты приучала бы их к кофе?</li>
 </ol>
    
   <p><em>В Средние века европейские короли и рыцари хоронили своё сердце отдельно от тела — в месте, которое любили больше всего. Ричард Львиное Сердце завещал своё сердце Руану, Шопен — Варшаве, Ливингстон — Африке.</em></p>
<p><em>Я бы завещала похоронить свое сердце в Ереване, если бы кто-то взялся.</em></p>
<img src="${r.yerevan3}" />
`,zebra_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${r.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${r.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${r.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${r.bears}" />
    <h3>Армяне и кофе — это серьёзно ☕</h3>

    <p><strong>Как готовят:</strong></p>
    <ul>
      <li>В <strong>джезве</strong> (турка) на песке или плите</li>
      <li>Мелкий помол (почти пыль)</li>
      <li>Медленно, на слабом огне</li>
      <li>Пенка поднимается три раза — снимают, опять нагревают</li>
      <li>Подают в маленьких чашечках</li>
      <li>С стаканом воды (чтобы "очистить вкус")</li>
      <li>Иногда с кардамоном</li>
    </ul>
    <img src="${r.yazzve}" />
    <p><strong>Как пьют:</strong></p>
    <ul>
      <li>Маленькими глотками</li>
      <li>Медленно (чашка может длиться час!)</li>
      <li>За разговором</li>
      <li>Гуща остаётся на дне. Армянские бабушки читают гущу профессионально.</li>
    </ul>

    <p>Но это не наш случай, потому что у нас сегодня ДЕТСКИЙ КОФЕ </p>
    <h3>Детский кофе — чтобы дети не чувствовали себя обделёнными ☕👶</h3>
    <p>В армянских семьях кофе пьют <strong>все</strong>. Даже дети.</p>
    <p>Но детям нельзя кофеин! Поэтому придумали <strong>детский кофе БЕЗ кофеина</strong>:</p>
    
    <p><strong>Зачем?</strong> Чтобы ребёнок сидел за столом со взрослыми, пил "свой кофе", чувствовал себя частью семьи (и потихоньку привыкал).</p>
    
    <p>Воскресный обед — это 15 человек за столом. Бабушка, дедушка, дети, внуки, соседи. Все едят, пьют, разговаривают, и у каждого — чашка кофе.</p>
    <p>Ребёнок не может сидеть с компотом, пока все пьют кофе! Ему дают детский. Он счастлив.</p>
    
    <h3>Арарат — гора, которую украли 🏔️💔</h3>
    <p>Если стоишь в Ереване и смотришь на северо-запад — видишь <strong>две снежные вершины</strong>. Большой Арарат и Малый Арарат.</p>
    <p><strong>Проблема:</strong> Арарат сейчас в Турции.</p>
    <img src="${r.ararat}" />
    <p><strong>Как так вышло:</strong></p>
    <ul>
      <li>Арарат — символ Армении (на гербе, на бутылках коньяка, в сердцах).</li>
      <li>Библейская гора — туда причалил Ноев ковчег.</li>
      <li>Армяне жили у подножия Арарата тысячи лет.</li>
      <li>1921 год — советско-турецкий договор → граница прошла так, что Арарат остался в Турции.</li>
    </ul>
    <p><strong>Результат:</strong></p>
    <p>Армяне видят свою главную гору из окон. Но не могут к ней подойти. Граница закрыта.</p>
    
    <p>Армянский алфавит — один из красивейших в мире. <strong>Создан в 405 году</strong> Месропом Маштоцем (монах, учёный, лингвист).</p>
    
    <p><strong>Зачем создавали:</strong></p>
    <ul>
      <li>До этого армяне писали на греческом, сирийском, персидском.</li>
      <li>Нужен был <strong>свой</strong> алфавит для перевода Библии.</li>
      <li>Маштоц изучил все известные алфавиты и создал новый — специально для армянского языка.</li>
      <li>38 букв (сейчас 39). Каждая буква — как маленькое произведение искусства.</li>
      <li>39 букву добавили в советское время по сложносоставным причинам (я прочитала, но не въехала - как будто добавили третью букву для звука о, потому что у соседей была и такая тоже. Но это неточно).</li>
      <li>Округлые, плавные линии. Выглядят почти как орнамент. Я пыталась учить их по вывескам.</li>
    </ul>
    <img src="${r.abc}" />
    
    <p><strong>Где увидеть:</strong></p>
    <p>В Ереване на склоне горы Арагац есть <strong>памятник армянскому алфавиту</strong> — 38 огромных каменных букв (2-3 метра высотой!). Люди ходят между ними, фотографируются, трогают.</p>
    
    <h3>Коньячное производство — армянская гордость 🥃</h3>
    <p><strong>Армянский коньяк</strong> — это не просто напиток. Это <strong>национальная гордость</strong>.</p>
    
    <p><strong>История:</strong></p>
    <ul>
      <li>1887 год — купец Нерсес Таирян основал первый коньячный завод в Ереване.</li>
      <li>1899 год — завод купил Николай Шустов, привёз французских мастеров, внедрил технологии.</li>
      <li>1900 год — армянский коньяк выиграл Гран-при на Всемирной выставке в Париже! Французы были в шоке.</li>
    </ul>
    <img src="${r.noy}" />
    <p><strong>Почему армянский коньяк особенный:</strong></p>
    <ul>
      <li><strong>Терруар:</strong> Араратская долина, вулканическая почва, горный климат</li>
      <li><strong>Виноград:</strong> Местные сорта (Воскеат, Кангун, Гаран Дмак)</li>
      <li><strong>Вода:</strong> Из горных источников (очень мягкая)</li>
      <li><strong>Дубовые бочки:</strong> Выдержка от 3 до 70+ лет!</li>
      <li><strong>Климат:</strong> Резкие перепады температур → коньяк "дышит", набирает вкус</li>
    </ul>
    
    <p><strong>Звёздная система:</strong></p>
    <ul>
      <li>⭐⭐⭐ (3 звезды) — 3 года выдержки</li>
      <li>⭐⭐⭐⭐⭐ (5 звёзд) — 5 лет</li>
      <li><strong>Коллекционные:</strong> с именами — "Nairi" (20 лет), "Vaspurakan" (30 лет), "Dvin" (25 лет)</li>
    </ul>
    
    <p><strong>Легенда про Черчилля:</strong> Уинстон Черчилль пил только армянский коньяк "Двин". Сталин дарил ему ящики.</p>
    
    <p>Можно приехать на экскурсию на <strong>завод "Арарат" в Ереване:</strong> показывают хранилища с бочками до потолка, музей со старинными бутылками, а еще дают попробовать сортов 5-6.</p>
    
    <iframe width="100%" src="https://www.youtube.com/embed/zwgvelZPb10?si=tSX3RINQqio-CMHX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Дудук — духовой инструмент из абрикосового дерева. Звучит как-то sad and misterious, говоря дипломатично.</p>
    
    <iframe width="100%" src="https://www.youtube.com/embed/h2gdlFoaKyg?si=Ru4CQkI8hi-i9Zsz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Знаменитый армянский композитор. Этот танец знают все!</p>
    <p>А вот сюжет балета Гаянэ, написанной в эвакуации во время ВОВ:</p>
<p>Армянский колхоз, время сбора урожая. Все танцуют и радуются. <strong>Гаянэ</strong> — молодая красавица-бригадир — замужем за <strong>Гико</strong>. Но оказывается, её муж — <strong>контрабандист и предатель (вот это поворот)!</strong> Он тайком переправляет через границу краденое добро.</p>

<p>Пограничники во главе с командиром <strong>Казаковым</strong> ловят Гико с поличным. Гаянэ, узнав правду, сама разоблачает мужа. Гико арестован.</p>

<p>Гаянэ и благородный Казаков влюбляются друг в друга. Финал — праздник победы: справедливость восторжествовала, любовь найдена, колхоз процветает. Все танцуют <strong>"Танец с саблями"</strong> — вихрь радости и энергии!</p>

<p><em>Типичный советский сюжет 1942 года: колхоз = хорошо, предатели = плохо, пограничники = герои. Но музыка настолько гениальна, что сюжет совершенно не важен!</em> 😄</p>
    <iframe width="100%" src="https://www.youtube.com/embed/nCDGi21OVh4?si=9GQQ_LB60vRYxPO2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>А вот эффектные армянские женщины играют на каких-то сложносоставных гуслей в городских пейзажах</p>
    
    <iframe width="100%" src="https://www.youtube.com/embed/QzL9vO4UZFY?si=EV84zns_4FQGzRsY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>А вот их премьер Пашинян грустит под Земфиру: 0 осуждения, само собой</p>
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари детский кофе, съешь зефир-лапку.</li>
      <li>Поставь себе что-нибудь из плей-листа Пашиняна.</li>
      <li>Если бы у тебя образовались дети, ты приучала бы их к кофе?</li>
 </ol>
    
   <p><em>В Средние века европейские короли и рыцари хоронили своё сердце отдельно от тела — в месте, которое любили больше всего. Ричард Львиное Сердце завещал своё сердце Руану, Шопен — Варшаве, Ливингстон — Африке.</em></p>
<p><em>Я бы завещала похоронить свое сердце в Ереване, если бы кто-то взялся.</em></p>
<img src="${r.yerevan3}" />
`},{day:8,date:"2025-12-27",tanya_gift:'Какао "Опоссум" (пьёт и больше не орёт)',zebra_gift:'Какао "Опоссум" (пьёт и больше не орёт)',tanya_bonus:"Маршмеллоу (маленькие)",zebra_bonus:"Маршмеллоу (маленькие)",title:"Опоссумы, какао и философия",tanya_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${r.possaMom}" />
    <h3>Все, что вы хотели знать об опоссумах, но боялись спросить:</h3>
    
    <p><strong>1. "Playing possum" — притворяются мёртвыми!</strong></p>
    <ul>
      <li>Когда опоссум напуган → падает на бок, глаза стеклянеют, язык вываливается</li>
      <li>Выделяет <strong>запах гниения</strong> из анальных желез (!)</li>
      <li>Хищник нюхает, делает "фу" и уходит</li>
      <li>Опоссум "оживает" через несколько минут</li>
      <li>Это <strong>не сознательно!</strong> Это рефлекс, как обморок от страха</li>
    </ul>
    <a href="https://youtube.com/shorts/9VtiWQOK470?si=SQi5lcB5mBBjVUIT">Смотреть видео</a>
    <a href="https://youtube.com/shorts/WD7iMBVGs9g?si=aT6V2ccaD4BVh2TD">Ещё одно (черствые люди пугают их как голубей!)</a>
    
    <p><strong>2. Иммунитет к змеиному яду!</strong></p>
    <ul>
      <li>Почти не чувствительны к яду гремучих змей</li>
      <li>В их крови белок, нейтрализующий яд</li>
      <li>Учёные изучают для создания противоядий</li>
    </ul>
    
    <p><strong>3. 50 зубов!</strong></p>
    <ul>
      <li>Больше, чем у любого наземного млекопитающего Северной Америки</li>
      <li>Острые, как иголки</li>
      <li>Когда опоссумы шипят — выглядят страшно, но это блеф: опоссумы <strong>не агрессивные</strong></li>
    </ul>
    <img src="${r.smile}" />
    <p><strong>4. "Trash possums" — всеядные мусорщики</strong></p>
    <ul>
      <li>Едят всё: насекомых, фрукты, падаль, мусор</li>
      <li>Живут в городах → чистят от органических отходов</li>
    </ul>
    
    <p><strong>5. Короткая, но насыщенная жизнь:</strong></p>
    <ul>
      <li>В дикой природе: 2-4 года</li>
      <li>Много хищников (совы, койоты, машины)</li>
    </ul>
    <img src="${r.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${r.possOrOposs}" />
    <p><strong>Опоссумы (Opossums):</strong></p>
    <ul>
      <li>Северная и Южная Америка. Виргинский опоссум (Virginia opossum) — самый известный</li>
      <li>Голый цепкий хвост, серая шерсть, розовый нос, розовые лапки</li>
      <li>Название с буквой "O"</li>
    </ul>
    
    <p><strong>Поссумы (Possums):</strong></p>
    <ul>
      <li>Австралия, Новая Гвинея. Другое семейство!</li>
      <li>Пушистый хвост</li>
      <li>Разные виды (кускусы, сахарные поссумы)</li>
      <li>Название без "O"</li>
    </ul>
    <h3>Почему опоссумы — наши друзья 🐭❤️</h3>
    <p><strong>Движение "Opossum appreciation":</strong> представьте себе, у них есть целое движение и свой праздник (мне очень нравится переводить его как День видимости опоссумов, хотя это неверно:</p>
    <ul>
    <li>В США с 1988 года официально признан День признания роли опоссумов, который отмечается ежегодно в четвёртую субботу января. У нас есть шансы его отметить!</li>
      <li>"Они милые и полезные!"</li>
      <img src="${r.poss}" />
      <li>Футболки, стикеры, мерч, социальные медиа: #opossums, #trashanimals, #opossumpower</li>
    </ul>
    
<p>(или 15 октября (почти мой день рождения!), но некоторые отмечают третью субботу октября или 21 января. Фанаты опоссумов - не самые организованные люди)</p>

    <p><strong>Почему все, у кого есть сердце, любят опоссумов:</strong></p>
    <ul>
      <li><strong>Relatable:</strong> Выглядят уставшими от жизни (знакомо)</li>
      <li>Притворяются мёртвыми от стресса (aren't we all)</li>
      <li>Едят мусор</li>
      <li>Ночные существа</li>
    </ul>
    <img src="${r.thief}" />

    <h3>Больше про National Opossum Appreciation Day 🐭🎉</h3>

<p><strong>Кто придумал:</strong></p>
<ul>
  <li><strong>Opossum Society of the United States (OSUS)</strong> — Общество опоссумов США</li>
  <li>Основано в 1986 году</li>
  <li>Основательница: <strong>Anita Frazier</strong> (Калифорния) — спасла раненого опоссума и посвятила жизнь их защите</li>
  <li>Цель: образование, защита, реабилитация опоссумов</li>
</ul>

<p><strong>Зачем праздник:</strong></p>
<ul>
  <li>Изменить плохую репутацию опоссумов.</li>
  <li>Рассказать людям, что опоссумы не страшные и не вредные.</li>
  <li>Показать их экологическую пользу.</li>
  <li>Бороться с мифами (бешенство, агрессивность, вредительство).</li>
</ul>

<p><strong>Образовательные мероприятия:</strong></p>
<ul>
  <li>Лекции в школах, библиотеках</li>
  <li>Посты в соцсетях с фактами про опоссумов</li>
  <li>Инфографика: "10 причин любить опоссумов"</li>
</ul>
<img src="${r.possaKnowl}" />
<p><strong>Акции в зоопарках и центрах реабилитации:</strong></p>
<ul>
  <li>Открытые дни</li>
  <li>Встречи с опоссумами (можно посмотреть, погладить ручных)</li>
  <li>Презентации о жизни опоссумов</li>
</ul>

<p><strong>Социальные сети:</strong></p>
<ul>
  <li>Хэштеги: <strong>#OpossumAppreciationDay</strong>, <strong>#OpossumDay</strong>, <strong>#PossumPower</strong></li>
  <li>Люди постят фото опоссумов, мемы про опоссумов взрывают интернет</li>
  <li>Инфлюенсеры (у них ест инфлюенсеры!) рассказывают о пользе опоссумов</li>
</ul>
<img src="${r.merch1}" />
<p><strong>Мерч и fundraising:</strong></p>
<ul>
  <li>Футболки (у меня уже штук шест), стикеры, значки, открытки</li>
  <li>Продажа мерча → деньги идут на реабилитационные центры</li>
  <li>Можно "усыновить" опоссума в реабилитационном центре</li>
</ul>

  <p><strong>Увы, из нельзя держать как питомцев:</strong> опоссумы — дикие животные, им лучше на воле</p>

<p>(во имя объема я вырезала отсюда целый подраздел "Щначенитые опоссумы". И сердце у меня из козявок!..)</p>

<h4>Сегодня — опоссумный день!</h4>
<p>Сегодня мы отмечаем <strong>свой National Opossum Appreciation Day</strong> — с какао, маршмеллоу и любовью к этим чудесным тварям.</p>
<p><strong>Послание дня:</strong> Опоссумы — не вредители, а экологические герои. Они едят клещей, убирают мусор, не переносят бешенство и заслуживают любви! 🐭💕</p>
<p><em>Носи футболки с опоссумами с гордостью. Рассказывай правду. Будь как опоссум — милый, полезный, выживающий против всех odds.</em></p>
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари какао, добавь маршмеллоу</li>
      <li><strong>Какой опоссум ты сегодня?</strong></li>
      <img src="${r.poss1}" />
      <img src="${r.poss2}" />
      <img src="${r.poss3}" />
      <img src="${r.poss4}" />
      <img src="${r.poss5}" />
      <img src="${r.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `,zebra_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${r.possaMom}" />
    <h3>Все, что вы хотели знать об опоссумах, но боялись спросить:</h3>
    
    <p><strong>1. "Playing possum" — притворяются мёртвыми!</strong></p>
    <ul>
      <li>Когда опоссум напуган → падает на бок, глаза стеклянеют, язык вываливается</li>
      <li>Выделяет <strong>запах гниения</strong> из анальных желез (!)</li>
      <li>Хищник нюхает, делает "фу" и уходит</li>
      <li>Опоссум "оживает" через несколько минут</li>
      <li>Это <strong>не сознательно!</strong> Это рефлекс, как обморок от страха</li>
    </ul>
    <a href="https://youtube.com/shorts/9VtiWQOK470?si=SQi5lcB5mBBjVUIT">Смотреть видео</a>
    <a href="https://youtube.com/shorts/WD7iMBVGs9g?si=aT6V2ccaD4BVh2TD">Ещё одно (черствые люди пугают их как голубей!)</a>
    
    <p><strong>2. Иммунитет к змеиному яду!</strong></p>
    <ul>
      <li>Почти не чувствительны к яду гремучих змей</li>
      <li>В их крови белок, нейтрализующий яд</li>
      <li>Учёные изучают для создания противоядий</li>
    </ul>
    
    <p><strong>3. 50 зубов!</strong></p>
    <ul>
      <li>Больше, чем у любого наземного млекопитающего Северной Америки</li>
      <li>Острые, как иголки</li>
      <li>Когда опоссумы шипят — выглядят страшно, но это блеф: опоссумы <strong>не агрессивные</strong></li>
    </ul>
    <img src="${r.smile}" />
    <p><strong>4. "Trash possums" — всеядные мусорщики</strong></p>
    <ul>
      <li>Едят всё: насекомых, фрукты, падаль, мусор</li>
      <li>Живут в городах → чистят от органических отходов</li>
    </ul>
    
    <p><strong>5. Короткая, но насыщенная жизнь:</strong></p>
    <ul>
      <li>В дикой природе: 2-4 года</li>
      <li>Много хищников (совы, койоты, машины)</li>
    </ul>
    <img src="${r.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${r.possOrOposs}" />
    <p><strong>Опоссумы (Opossums):</strong></p>
    <ul>
      <li>Северная и Южная Америка. Виргинский опоссум (Virginia opossum) — самый известный</li>
      <li>Голый цепкий хвост, серая шерсть, розовый нос, розовые лапки</li>
      <li>Название с буквой "O"</li>
    </ul>
    
    <p><strong>Поссумы (Possums):</strong></p>
    <ul>
      <li>Австралия, Новая Гвинея. Другое семейство!</li>
      <li>Пушистый хвост</li>
      <li>Разные виды (кускусы, сахарные поссумы)</li>
      <li>Название без "O"</li>
    </ul>
    <h3>Почему опоссумы — наши друзья 🐭❤️</h3>
    <p><strong>Движение "Opossum appreciation":</strong> представьте себе, у них есть целое движение и свой праздник (мне очень нравится переводить его как День видимости опоссумов, хотя это неверно:</p>
    <ul>
    <li>В США с 1988 года официально признан День признания роли опоссумов, который отмечается ежегодно в четвёртую субботу января. У нас есть шансы его отметить!</li>
      <li>"Они милые и полезные!"</li>
      <img src="${r.poss}" />
      <li>Футболки, стикеры, мерч, социальные медиа: #opossums, #trashanimals, #opossumpower</li>
    </ul>
    
<p>(или 15 октября (почти мой день рождения!), но некоторые отмечают третью субботу октября или 21 января. Фанаты опоссумов - не самые организованные люди)</p>

    <p><strong>Почему все, у кого есть сердце, любят опоссумов:</strong></p>
    <ul>
      <li><strong>Relatable:</strong> Выглядят уставшими от жизни (знакомо)</li>
      <li>Притворяются мёртвыми от стресса (aren't we all)</li>
      <li>Едят мусор</li>
      <li>Ночные существа</li>
    </ul>
    <img src="${r.thief}" />

    <h3>Больше про National Opossum Appreciation Day 🐭🎉</h3>

<p><strong>Кто придумал:</strong></p>
<ul>
  <li><strong>Opossum Society of the United States (OSUS)</strong> — Общество опоссумов США</li>
  <li>Основано в 1986 году</li>
  <li>Основательница: <strong>Anita Frazier</strong> (Калифорния) — спасла раненого опоссума и посвятила жизнь их защите</li>
  <li>Цель: образование, защита, реабилитация опоссумов</li>
</ul>

<p><strong>Зачем праздник:</strong></p>
<ul>
  <li>Изменить плохую репутацию опоссумов.</li>
  <li>Рассказать людям, что опоссумы не страшные и не вредные.</li>
  <li>Показать их экологическую пользу.</li>
  <li>Бороться с мифами (бешенство, агрессивность, вредительство).</li>
</ul>

<p><strong>Образовательные мероприятия:</strong></p>
<ul>
  <li>Лекции в школах, библиотеках</li>
  <li>Посты в соцсетях с фактами про опоссумов</li>
  <li>Инфографика: "10 причин любить опоссумов"</li>
</ul>
<img src="${r.possaKnowl}" />
<p><strong>Акции в зоопарках и центрах реабилитации:</strong></p>
<ul>
  <li>Открытые дни</li>
  <li>Встречи с опоссумами (можно посмотреть, погладить ручных)</li>
  <li>Презентации о жизни опоссумов</li>
</ul>

<p><strong>Социальные сети:</strong></p>
<ul>
  <li>Хэштеги: <strong>#OpossumAppreciationDay</strong>, <strong>#OpossumDay</strong>, <strong>#PossumPower</strong></li>
  <li>Люди постят фото опоссумов, мемы про опоссумов взрывают интернет</li>
  <li>Инфлюенсеры (у них ест инфлюенсеры!) рассказывают о пользе опоссумов</li>
</ul>
<img src="${r.merch1}" />
<p><strong>Мерч и fundraising:</strong></p>
<ul>
  <li>Футболки (у меня уже штук шест), стикеры, значки, открытки</li>
  <li>Продажа мерча → деньги идут на реабилитационные центры</li>
  <li>Можно "усыновить" опоссума в реабилитационном центре</li>
</ul>

  <p><strong>Увы, из нельзя держать как питомцев:</strong> опоссумы — дикие животные, им лучше на воле</p>

<p>(во имя объема я вырезала отсюда целый подраздел "Щначенитые опоссумы". И сердце у меня из козявок!..)</p>

<h4>Сегодня — опоссумный день!</h4>
<p>Сегодня мы отмечаем <strong>свой National Opossum Appreciation Day</strong> — с какао, маршмеллоу и любовью к этим чудесным тварям.</p>
<p><strong>Послание дня:</strong> Опоссумы — не вредители, а экологические герои. Они едят клещей, убирают мусор, не переносят бешенство и заслуживают любви! 🐭💕</p>
<p><em>Носи футболки с опоссумами с гордостью. Рассказывай правду. Будь как опоссум — милый, полезный, выживающий против всех odds.</em></p>
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари какао, добавь маршмеллоу</li>
      <li><strong>Какой опоссум ты сегодня?</strong></li>
      <img src="${r.poss1}" />
      <img src="${r.poss2}" />
      <img src="${r.poss3}" />
      <img src="${r.poss4}" />
      <img src="${r.poss5}" />
      <img src="${r.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `},{day:9,date:"2025-12-28",tanya_gift:"Чай ромашковый",zebra_gift:"Чай ромашковый",tanya_bonus:"Твикс имбирный",zebra_bonus:"Твикс имбирный",title:"Ромашковый чай за 1000 рублей",tanya_message:`
      <p><strong>Ромашковый чай</strong> — напиток, который недавно был в центе московских обсуждений 🌼☕💸</p>
      
      <h3>История про чай за 1000 рублей</h3>
      <p>Оченью 2025 года в Кофемании поллитра ромшкового чая продавали почти за косарь. "Кипяток для избранных", писали в обзорах.</p>
      <img src="${r.chamomileTea}" />
      <p><strong>Реакция интернета:</strong></p>
      <ul>
        <li>"Это просто ромашка! Её в аптеке 50 рублей!"</li>
        <li>"Вы платите за атмосферу, локацию, сервис!"</li>
        <li>"Это наглость!"</li>
        <li>"Это luxury-сегмент, не нравится — не ходите!"</li>
      </ul>
      
      <p><strong>Мемы:</strong> "Ромашка за 1000₽" стала символом переплаты за бренд и атмосферу.</p>
      
      <p><strong>Себестоимость:</strong> Ромашка = 5₽, чашка = 50₽, работа бариста = 50₽. Итого: 105₽, остальное - наценка из ада.</</p>
      
      <p><strong>Но:</strong> В Starbucks обычный латте стоит 400₽ (себестоимость 50₽). Наценка 700%! Это норма для HoReCa (отели-рестораны-кафе).</p>
      <p>Пока нейронка не ушла в историю ромашки, напомню, что теперь он у тебя совершенно даром - и даже с Твиксом, который весь из себя имбирная limit edition.</p>      
      <h3>Ромашка — простое, но мощное растение</h3>
      <img src="${r.chamomile1}" />
      <p><strong>История:</strong></p>
      <ul>
        <li><strong>Древний Египет:</strong> Посвящали ромашку богу солнца Ра, лечили лихорадку.</li>
        <li><strong>Древний Рим:</strong> Солдаты пили ромашковый чай перед битвой (успокоение, хотя казалось бы).</li>
        <li><strong>Средневековье:</strong> "Растение-целитель" — от всего (за неимением подорожника, не иначе).</li>
      </ul>
      <img src="${r.cammomile}" />
      <p><strong>Польза:</strong></p>
      <ul>
        <li><strong>Успокоительное</strong> (апигенин связывается с GABA-рецепторами в мозге!)</li>
        <li><strong>Сон</strong> (мягкое снотворное)</li>
        <li><strong>Пищеварение</strong> (спазмолитик)</li>
        <li><strong>Противовоспалительное</strong></li>
      </ul>
      
      <p><strong>Наука:</strong> Исследования подтверждают! Ромашка реально работает, и это не фигура речи:</p>

      <h3>Исследования про ромашку — наука подтверждает! 🔬</h3>

<p><strong>Что учёные выяснили:</strong></p>

<p><strong>1. Сон и тревожность (2016, University of Michigan):</strong></p>
<ul>
  <li>Исследование: 34 человека с хронической бессонницей пили ромашковый чай 2 раза в день, 28 дней</li>
  <li>Результат: <strong>Засыпали на 15 минут быстрее!</strong></li>
  <li>Ночные пробуждения сократились</li>
  <li>Дневная усталость снизилась</li>
  <li>Активное вещество: <strong>апигенин</strong> — связывается с ГАМК-рецепторами в мозге (те же рецепторы, что у бензодиазепинов, но мягко!)</li>
</ul>
<img src="${r.chamSci}" />
<p><strong>2. Тревожность и депрессия (2012, University of Pennsylvania):</strong></p>
<ul>
  <li>Исследование: 57 человек с генерализованным тревожным расстройством</li>
  <li>8 недель приёма экстракта ромашки</li>
  <li>Результат: Статистически значимое <strong>снижение симптомов тревоги</strong></li>
  <li>Не панацея, но помогает!</li>
</ul>

<p><strong>3. Пищеварение (2015, Iran):</strong></p>
<ul>
  <li>Ромашка снижает спазмы гладкой мускулатуры кишечника</li>
  <li>Помогает при синдроме раздражённого кишечника (IBS)</li>
  <li>Противовоспалительное действие</li>
  <li>Активные вещества: <strong>бисаболол, хамазулен</strong></li>
</ul>

<p><strong>4. Менструальные боли (2010, Iran):</strong></p>
<ul>
  <li>80 студенток с дисменореей (болезненные месячные)</li>
  <li>Ромашковый чай 2 раза в день за неделю до и во время месячных</li>
  <li>Результат: <strong>Боль значительно снизилась!</strong></li>
  <li>Механизм: антиспазматическое + противовоспалительное</li>
</ul>

<p><strong>5. Диабет 2 типа (2008, UK):</strong></p>
<ul>
  <li>Ромашка снижает уровень сахара в крови (на животных моделях)</li>
  <li>Человеческие исследования пока малочисленны</li>
  <li>Но перспективно!</li>
</ul>

<p>Короче, если буквально утопиться в ромашковом чае, может оказаться, что чуваки в Кофемани не так уж и неправы.</p>

      <img src="${r.chamomile2}" />
      <h3>Твикс имбирный 🍪</h3>
      <p><strong>Имбирное печенье</strong> + карамель + шоколад = праздничный вкус!</p>
      
      <p><strong>Имбирь + шоколад</strong> — древнее сочетание. Ацтеки добавляли имбирь в <em>xocolātl</em> (горячий шоколад) для воинов.</p>
      <img src="${r.chamomileTattoo}" />
      <h3>Задание</h3>
      <ol>
        <li>Нет, не набить себе растительную тату (хотя никогда не поздно подумать в эту сторону)</li>
        <li>Завари ромашковый чай (твой таки не убил ни один бюджет)</li>
        <li>Съешь Твикс</li>
        <li><strong>Чат-дискуссия:</strong> "Ромашка за 1000₽ — это:
          <ul>
            <li>а) Наглость</li>
            <li>б) Законы рынка</li>
            <li>в) Переплата за атмосферу</li>
            <li>г) Честная плата за атмосферу</li>
            <li>д) Свой вариант (написать в чат!)</li>
          </ul>
        </li>
        <li>Выпей чай, расслабься (ромашка работает!)</li>
      </ol>
      
      <p><strong>Музыка для релакса:</p>
      <iframe width="100%" src="https://www.youtube.com/embed/CLeZyIID9Bo?si=M6M5WCS7VdaYRpOO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>(абстрактная как бы расслабляющая фигня от нейронки)</p>

    `,zebra_message:`
      <h3>Можжевельник и имбирь — сила для рабочих выходных! 💪</h3>
      <p>(если честно, я настолько задолбалась, что не помню, какой у тебя чай (два чая?..). Смутно помню, что сунула тебе какой-то многосоставный с можжевельником, но это не точно)</p>
      <p>Так или иначе, у нас продолжаются бескофеиновые вариативные выходные, теперь с чаем.</p>
      <img src="${r.juniperTea}" />
      <p>У тебя <strong>рабочее воскресенье перед Новым годом</strong>. Тяжело. Все отдыхают, а ты работаешь (напоминает тебе сочувствующая юбездуховная нейронка).</p>

      <p>Надеемся (мы с нейронкой), что можжевельник и имбирь в твоём чае (окей, имбирь в печеньке в твоем limit edition Твиксе, если ты не съела его раньше, а я не перепутала и это) придали тебе сил! ☕💪</p>

      <p><strong>Можжевельник — что это:</strong></p>
<ul>
  <li>Ягоды можжевелового куста (хвойное растение).</li>
  <li>На самом деле это не ягоды, а <strong>шишкоягоды</strong> (модифицированные шишки!).</li>
  <li>Тёмно-синие, с восковым налётом.</li>
  <li>Вкус: хвойный, смолистый, немного сладковатый.</li>
</ul>
<img src="${r.juniper}" />
<p><strong>Можжевельник в истории:</strong></p>
<ul>
  <li><strong>Джин!</strong> Главный ингредиент джина — можжевельник (gin = от голландского "jenever" = можжевельник).</li>
  <li>Средние века: можжевельник жгли во время чумы (считали, что дым очищает воздух).</li>
  <li>Коренные американцы использовали как лекарство (мочегонное, от простуды).</li>
  <li>В России: можжевеловые веники в бане!.</li>
</ul>

<p><strong>Полезные свойства можжевельника:</strong></p>
<ul>
  <li><strong>Антисептическое</strong> — эфирные масла убивают бактерии.</li>
  <li><strong>Мочегонное</strong> — помогает вывести лишнюю жидкость.</li>
  <li><strong>Противовоспалительное</strong>.</li>
  <li><strong>Тонизирующее</strong> — бодрит!</li>
  <li><strong>Помогает пищеварению</strong> — стимулирует выработку желудочного сока.</li>
</ul>
<img src="${r.juniper1}" />
<p><strong>Важно:</strong></p>
<ul>
  <li>Нельзя при беременности (стимулирует матку!)</li>
  <li>Нельзя при заболеваниях почек</li>
  <li>В чае — безопасная доза!</li>
</ul>

<p><strong>Можжевельник + Имбирь =</strong></p>
<ul>
  <li>Тонус</li>
  <li>Энергия</li>
  <li>Согревание</li>
  <li>Поддержка иммунитета</li>
  <li><strong>Сила для рабочего воскресенья!</strong></li>
</ul>
  <p>Когда все отдыхают, а ты работаешь, нужен буст к силе духа 💪</p>
  <p><strong>Ты справишься. Ты справляешься. Чай поможет.</strong> ☕</p>
  <p>(кофе тоже помог бы, но я собирала адвент, не предполагая рабочих выходных)</p> 
  <img src="${r.juniper3}" />

  <h3>У ТАньки были исследвоания пр ромашку, так что во тебе про можжевельник — наука подтверждает! 🔬</h3>
    
    
    <p><strong>1. Антибактериальное действие (2012, Serbia):</strong></p>
    <ul>
      <li>Эфирное масло можжевельника эффективно против <strong>Staphylococcus aureus</strong> (золотистый стафилококк)</li>
      <li>Убивает <strong>E. coli</strong> (кишечная палочка)</li>
      <li>Эффективно против <strong>Salmonella</strong></li>
      <li>Механизм: разрушает клеточную мембрану бактерий</li>
      <li>Природный антисептик!</li>
    </ul>
    
    <p><strong>2. Антиоксиданты (2010, Turkey):</strong></p>
    <ul>
      <li>Анализ эфирного масла можжевельника (Juniperus communis)</li>
      <li>Высокое содержание антиоксидантов</li>
      <li>Основные компоненты: α-пинен (48%), β-пинен, сабинен</li>
      <li>Способность нейтрализовать свободные радикалы</li>
      <li>Сравнимо с синтетическими антиоксидантами! (я ни в зуб ногой, что это значит)</li>
    </ul>
    <img src="${r.juniperSci}" />
    <p><strong>3. Противовоспалительное (2011, Italy):</strong></p>
    <ul>
      <li>Экстракт ягод можжевельника</li>
      <li>Подавляет воспалительные цитокины (IL-6, TNF-α)</li>
      <li>Снижает окислительный стресс</li>
      <li>Потенциал при артрите и воспалительных заболеваниях</li>
    </ul>
    
    <p><strong>4. Мочегонное действие (2009, Germany):</strong></p>
    <ul>
      <li>Подтверждено традиционное использование (на животных)</li>
      <li>Увеличивает объём мочи</li>
      <li>Помогает при отёках</li>
      <li><strong>Осторожно:</strong> Не использовать долго (нагрузка на почки!)</li>
    </ul>
    
    <p><strong>5. Пищеварение (2013, Iran):</strong></p>
    <ul>
      <li>Стимулирует выработку желудочного сока</li>
      <li>Улучшает перистальтику</li>
      <li>Помогает при вздутии, тяжести в желудке</li>
      <li>Традиционно используется в народной медицине</li>
    </ul>
    <img src="${r.juniperSci1}" />
    <p><strong>6. Расслабление и тревожность (2016, Korea):</strong></p>
    <ul>
      <li>Эфирное масло можжевельника на мышах</li>
      <li>Снижение тревожного поведения</li>
      <li>Возможный механизм: влияние на ГАМК-рецепторы</li>
      <li>Ароматерапия с можжевельником → расслабление</li>
      <li><strong>Но:</strong> На людях данных пока мало</li>
    </ul>
    
    <p><strong>7. Противогрибковое (2014, Poland):</strong></p>
    <ul>
      <li>Подавляет рост <strong>Candida albicans</strong> (молочница)</li>
      <li>Эффективен против других видов Candida</li>
      <li>Потенциал для лечения грибковых инфекций</li>
    </ul>
    <img src="${r.juniperTattoo}" />

  <h3>Задание 🎯</h3>
<ol>
<li>Нет, не набить себе растительную тату (хотя можно подумать в эту сторону)</li>
  <li>Завари чай с можжевельником</li>
  <li>Пока чай заваривается — <strong>глубокий вдох, глубокий выдох</strong> (3 раза)</li>
  <li>Что у тебя вообще за чай? Там таки есть можжевельник?..</li>
  <li><strong>Чат:</strong> "Мой чай пахнет: ___"</li>
  <li><strong>Чат:</strong> "Работать в воскресенье перед Новым годом — это <s>отстой</s> ___"</li>
  <li><strong>Сила можжевельника:</strong> Можжевельник — это стойкость хвойного леса. Имбирь — это огонь. Какая из этих сил тебе нужнее прямо сейчас?</li>
  <li><strong>Обещание себе:</strong> Когда работа закончится, что ты сделаешь для себя? (Отдых? Сон? Что-то вкусное? Ничего не делание?)</li>
</ol>

<p><em>Работать, когда все отдыхают — это несправедливо. Но ты не одна. Выпей чай. Подыши. Ты справишься.</em></p>


       <p><strong>Музыка для релакса:</p>
      <iframe width="100%" src="https://www.youtube.com/embed/CLeZyIID9Bo?si=M6M5WCS7VdaYRpOO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>(абстрактная как бы расслабляющая фигня от нейронки)</p>
    `},{day:10,date:"2025-12-29",tanya_gift:"Кофе в зёрнах из Колумбии (обжарен монахами на Соловках!)",zebra_gift:"Декаф из Гватемалы",tanya_bonus:"Стеклянная бутылочка с гималайской солью",zebra_bonus:"Стеклянная бутылочка с гималайской солью",title:"Братский кофе и декаф солидарность",tanya_message:`
    <h3>Братский кофе — обжарен с молитвой! ☕🙏</h3>
    <img src="${r.coffeCard4}" />
    <p><strong>Откуда:</strong> Колумбия (зёрна) → Соловецкий монастырь (обжарка) → твоя чашка</p>
    <p><strong>Кто обжаривал:</strong> Монахи Соловецкого монастыря!</p>
    <p><strong>Как:</strong> С молитвой! (серьёзно, так написано в карточке товара)</p>
    <h3>Соловецкий монастырь — внезапный кофе на краю света 🏔️</h3>
    <img src="${r.solovki2}" />
    <p><strong>Где:</strong></p>
    <ul>
      <li>Соловецкие острова, Белое море</li>
      <li>Архангельская область, Россия</li>
      <li>160 км от Полярного круга!</li>
      <li>Добраться можно только на корабле или вертолёте</li>
    </ul>
    <img src="${r.coffeCard1}" />
    <p><strong>Монастырь:</strong></p>
    <ul>
      <li>Основан в 1436 году</li>
      <li>Один из самых известных монастырей России</li>
      <li>ЮНЕСКО World Heritage</li>
      <li>Крепость, духовный центр, история</li>
    </ul>
    <img src="${r.solovki1}" />
    <p><strong>Тёмная история:</strong></p>
    <ul>
      <li>1920-1939 — ГУЛАГ (Соловецкий лагерь особого назначения)</li>
      <li>Монастырь закрыли, монахов репрессировали</li>
      <li>Один из первых советских лагерей</li>
      <li>1990 — монастырь возродился</li>
    </ul>
    
    <h3>Братский кофе — монашеский бизнес ☕</h3>
    <img src="${r.coffeCard3}" />
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Социальное предприятие монастыря</li>
      <li>Монахи покупают зёрна (Колумбия, Бразилия, Эфиопия, др.)</li>
      <li>Обжаривают на Соловках</li>
      <li>Продают под брендом "Братский кофе"</li>
      <li><strong>"Сделано с молитвой!"</strong> — буквально написано на упаковке 😄</li>
    </ul>
    <img src="${r.solovki}" />
    <p><strong>Зачем монахи обжаривают кофе:</strong></p>
    <ul>
      <li>Деньги идут на восстановление монастыря</li>
      <li>Социальные программы</li>
      <li>Помощь нуждающимся</li>
      <li>Труд и молитва — монашеская традиция</li>
    </ul>
    
    <p><strong>Философия:</strong></p>
    <ul>
      <li>"Ora et labora" (молись и трудись) — бенедиктинский девиз</li>
      <li>Монахи всегда работали руками (пекли хлеб, варили пиво, делали сыр)</li>
      <li>Кофе — современная версия (и отлично продается. На "Братские дрипы" мне не хватило бабла)</li>
      <li>Каждая пачка обжарена с молитвой о тех, кто будет пить</li>
    </ul>
    <img src="${r.coffeCard2}" />
    <p><strong>Что это значит:</strong></p>
    <p>Монахи молятся во время обжарки. Буквально: "Господи, благослови тех, кто выпьет этот кофе!" Ну, в лучшей из версий.</p>
    <p>Представь: монахи на Белом море, на краю света, в древнем монастыре обжаривают колумбийский кофе c молитвой. В XXI веке. Чтобы потом продавать на Озоне втридорога. Это прекрасно и абсурдно одновременно!</p>
    <img src="${r.coffeCard5}" />
    
    
    <h3>Как заваривать:</h3>
    <ol>
      <li>Смели зёрна (средний помол для турки/френч-пресса, мелкий для эспрессо)</li>
      <li>Завари любым способом</li>
      <li><strong>Перед первым глотком:</strong> Скажи "Спасибо, монахи!" 😄</li>
      <li>Наслаждайся</li>
    </ol>
    <img src="${r.coffeCard6}" />
    <h3>Гималайская соль — снова! 🧂</h3>
    
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    <p>Я решила, что к такому кофе нужно что-то суровое.</p> 
    <img src="${r.himalaya}" />
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй заварить кофе и добавь крошечную щепотку соли</li>
    </ul>
    <img src="${r.pinkSalt}" />
    <p><strong>Можно просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${r.saltMeme}" />
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Смели зёрна (вдохни аромат!)</li>
      <li>Завари кофе</li>
      <li><strong>Эксперимент с солью:</strong> Попробуй кофе просто так. Потом добавь крошечную щепотку гималайской соли в чашку. Заметила разницу?</li>
      <li><strong>Чат:</strong> "Кофе с молитвой на вкус: ___ (божественно? обычно? постиронично?)"</li>
      <li><strong>Философский вопрос:</strong> Как думаешь, молитва влияет на вкус? Или это просто хороший маркетинг? 😄</li>
    </ol>
    <p><em>Пусть этот кофе будет благословенным. Или хотя бы вкусным!</em> ☕🙏💕</p>
  `,zebra_message:`
    <h3>Декаф из Гватемалы — солидарность продолжается! ☕💕</h3>
    <p>Помнишь день 4? <strong>Мы пили декаф в солидарность!</strong></p>
    <p>Сегодня снова декаф. Из Гватемалы. Потому что солидарность — это навсегда! 😄 Хотя Танька сегодня пьет кофе от монахов с Валаама)</p>
    <img src="${r.atitlan1}" />
    <h3>Гватемала — краткое напоминание 🇬🇹</h3>
    <p><strong>География:</strong></p>
    <ul>
      <li>Центральная Америка</li>
      <li>8 кофейных регионов ("Радуга выбора")</li>
      <li>Вулканы (37!), высокогорье (1200-2000 м)</li>
      <li>100% арабика</li>
    </ul>
    
    <p><strong>Вкус гватемальского кофе:</strong></p>
    <ul>
      <li>Шоколад, карамель (Antigua)</li>
      <li>Винные ноты (Huehuetenango)</li>
      <li>Цветы, цитрус (Atitlán)</li>
      <li>Полное тело, средняя кислотность</li>
    </ul>
    <img src="${r.guatemala8}" />
    <p><strong>Твой декаф:</strong></p>
    <ul>
      <li>Процесс Swiss Water (только вода, без химии!)</li>
      <li>99.9% кофеина удалено</li>
      <li>Вкус остаётся!</li>
    </ul>
    
    <p><strong>Декаф в истории:</strong></p>
    <ul>
      <li>Изобретён в 1903 году (Людвиг Розелиус, Германия)</li>
      <li>Случайно: кофе намок в морской воде → кофеин вымылся → вкус остался!</li>
      <li>Сначала использовали опасный бензол (!) для удаления кофеина</li>
      <li>Потом перешли на безопасные методы (и обезопасили небезопасные, хе-хе)</li>
    </ul>
    
    <p><strong>Swiss Water Process:</strong></p>
    <ul>
      <li>Изобретён в 1980-х (Швейцария → Канада)</li>
      <li>Только вода, без химикатов</li>
      <li>Зелёные зёрна вымачивают в воде</li>
      <li>Кофеин выходит в воду</li>
      <li>Вода фильтруется (кофеин удаляется, вкус остаётся)</li>
      <li>Зёрна снова вымачивают в этой воде (вкус возвращается!)</li>
      <li>99.9% кофеина уходит, вкус остаётся</li>
    </ul>
    
    <h3>Гватемала — что ещё интересного? 🌋</h3>
    <img src="${r.atitlan}" />
    <p><strong>Озеро Атитлан:</strong></p>
    <ul>
      <li>Одно из красивейших озёр мира</li>
      <li>В кратере вулкана!</li>
      <li>Вокруг — 3 вулкана (Atitlán, Tolimán, San Pedro)</li>
      <li>Деревни майя на берегу</li>
      <li>Кофе растёт на склонах → знаменитый регион Atitlán</li>
    </ul>
    
    <p><strong>Майя — живая культура:</strong></p>
    <img src="${r.guatemalaCorn}" />
    <ul>
      <li>40%+ населения Гватемалы — майя</li>
      <li>Говорят на языках майя (23 языка!)</li>
      <li>Носят традиционную одежду (huipil — расшитые блузы)</li>
      <li>Хранят традиции (церемонии, календарь майя, ремёсла)</li>
      <li>Многие работают на кофейных плантациях</li>
    </ul>
    
    <img src="${r.guatemalaTkan}" />
    <p><strong>Текстиль майя:</strong></p>
    <ul>
      <li>Знаменитые ткани — яркие, с геометрическими узорами</li>
      <li>Каждая деревня — свой стиль!</li>
      <li>По одежде можно определить, откуда человек</li>
      <li>Ткут на поясных станках (backstrap loom) — древняя техника</li>
    </ul>
    
    <h3>Гималайская соль — снова! 🧂</h3>
    <img src="${r.himalaya}" />
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй: завари декаф, добавь крошечную щепотку соли</li>
    </ul>
    <img src="${r.pinkSalt}" />
    <p><strong>Можно и просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${r.saltMeme}" />
    
    <h3>Солидарность — философия ☕🤝</h3>
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари декаф из Гватемалы</li>
      <li><strong>Эксперимент с солью:</strong> Попробуй декаф просто так. Потом добавь крошечную щепотку гималайской соли. Заметила разницу?</li>
      <li><strong>Чат:</strong> "Гватемала декаф на вкус: ___ (шоколад? цветы? винные ноты?)"</li>
      <li><strong>Мечта:</strong> Если бы ты могла поехать в Гватемалу, что бы ты хотела увидеть? (Озеро Атитлан? Альфомбрас? Кофейную плантацию?)</li>
    </ol>
  `},{day:11,date:"2025-12-29",tanya_gift:"Матча латте в пакетике",zebra_gift:"Матча латте в пакетике",tanya_bonus:"Цветная шоколадка без сахара",zebra_bonus:"Цветная шоколадка без сахара",title:"Матча латте и ирония",tanya_message:`
    <h3>Матча латте — от монахов до Instagram 🍵📸</h3>
    
    <p>Сегодня у нас у всех <strong>матча латте</strong> в пакетике. Удобно, быстро, модно - в самый раз дял последнего-мать-его-рабочего дня.</p>
    <img src="${r.matcha}" />
    <p>Это напиток с <strong>1200-летней историей</strong> и <strong>10-летним хайпом</strong>. От японских монахов до хипстерских кофеен, от медитации до Instagram-эстетики.</p>
    <p><strong>Ирония:</strong> То, что монахи пили для просветления, мы пьём, чтобы выглядеть модно (и пережить этот день, конечно же).</p>
    
    <h3>Что такое матча? 🍵</h3>
    
    <p><strong>Определение:</strong></p>
    <ul>
      <li>Матча (抹茶, matcha) = порошковый зелёный чай</li>
      <li>Японский, церемониальный</li>
      <li>Яркий зелёный цвет (как неоновая краска!)</li>
      <li>Вкус: травянистый, слегка горький, с umami (пятый вкус!)</li>
    </ul>
    <img src="${r.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${r.harvest1}" />
    <p><strong>IX век, Китай (династия Тан):</strong></p>
    <ul>
      <li>Буддийские монахи изобрели порошковый чай</li>
      <li>Зачем: Медитация длится часами → нужно не спать, но быть спокойным</li>
      <li>Кофе бодрит, но делает нервным. Матча = бодрость + спокойствие (L-теанин!)</li>
    </ul>
    
    <p><strong>XII век, Япония:</strong></p>
    <ul>
      <li>Монах <strong>Эйсай</strong> привёз матча из Китая в Японию</li>
      <li>Написал книгу: <strong>"Кисса Ёдзёки"</strong> (喫茶養生記) = "Как поддерживать здоровье чаепитием"</li>
      <li>Утверждал: матча продлевает жизнь, лечит болезни</li>
      <li>Самураи начали пить матча перед битвами!</li>
    </ul>
    
    <p><strong>XVI век — Чайная церемония (茶道, sadō):</strong></p>
    <ul>
      <li>Сэн-но Рикю создал философию чайной церемонии</li>
      <li>4 принципа: <strong>和敬清寂</strong> (wa-kei-sei-jaku) = гармония, уважение, чистота, спокойствие</li>
      <li>Матча стала центром церемонии</li>
      <li>Не просто напиток — духовная практика!</li>
      <li>Каждое движение продумано, каждый жест имеет значение.</li>
    </ul>
    <img src="${r.matchaOld1}" />
    <p><strong>XVII-XX века:</strong></p>
    <ul>
      <li>Матча = напиток элиты (самураи, аристократы, монахи), дорогая и редкая. Обычные люди пили сенча (листовой зелёный чай).</li>
      <li>После Второй мировой войны матча стала доступнее. Но всё ещё церемониальная, традиционная и в основном в Японии.</li>
    </ul>
    
    <p><strong>XXI век — ВЗРЫВ ХАЙПА! 📈</strong></p>
    <ul>
      <li>2010-е: Матча завоёвывает мир! Starbucks, specialty кофейни, Instagram</li>
      <li>Матча латте, матча смузи, матча мороженое, матча всё! Модно, эстетично, "полезно"</li>
      <li>Цена взлетает</li>
    </ul>
    <img src="${r.matcha11}" />
    <h3>Как делают матча? 🌱</h3>
    
    <p><strong>1. Выращивание (особый процесс!):</strong></p>
    <ul>
      <li>За 20-30 дней до сбора чайные кусты накрывают тенью (бамбуковые маты или сетки). Без солнца растение производит больше хлорофилла (ярче зелень!) и L-теанина (сладость, umami)</li>
      <li>Листья становятся темнее, вкус — слаще</li>
    </ul>
    
    <p><strong>2. Сбор:</strong></p>
    <ul>
      <li>Собирают только молодые верхние листочки (нежные!)</li>
      <li>Вручную (для церемониальной матчи)</li>
    </ul>
    
    <p><strong>3. Обработка:</strong></p>
    <ul>
      <li>Листья пропаривают (останавливает окисление → остаются зелёными)</li>
      <li>Сушат</li>
      <li>Удаляют стебли и прожилки (остаётся только мягкая часть листа)</li>
      <li>Получается <strong>тенча</strong> (碾茶) — полуфабрикат для матчи</li>
    </ul>
    <img src="${r.harvest}" />
    <p><strong>4. Помол:</strong></p>
    <ul>
      <li>Тенчу мелют в <strong>каменных жерновах</strong> (медленно!)</li>
      <li>30 г матчи = 1 час помола!</li>
      <li>Получается тончайший порошок (как пудра)</li>
      <li>Размер частиц: 5-10 микрон (почти как мука!)</li>
    </ul>
    
    <h3>Сорта матчи 🍃</h3>
    
    <p><strong>1. Церемониальная (Ceremonial Grade):</strong></p>
    <ul>
      <li>Высший сорт</li>
      <li>Самые молодые листья, первый сбор (май)</li>
      <li>Яркий зелёный цвет</li>
      <li>Сладкий, umami, почти без горечи</li>
      <li>Пьют чистой (без молока, без сахара)</li>
      <li>Дорогая! ($30-100+ за 30 г)</li>
    </ul>
    <img src="${r.matchaColors}" />
    <p><strong>2. Премиум (Premium Grade):</strong></p>
    <ul>
      <li>Хорошее качество, но не топ</li>
      <li>Можно пить чистой или с молоком</li>
      <li>Средняя цена</li>
    </ul>
    
    <p><strong>3. Кулинарная (Culinary Grade):</strong></p>
    <ul>
      <li>Для готовки (латте, смузи, выпечка)</li>
      <li>Более горькая, менее яркая</li>
      <li>Дешевле ($10-20 за 30 г)</li>
      <li><strong>Твоя матча в пакетике скорее всего этого сорта!</strong></li>
    </ul>
    
    <p><strong>Как готовят в кофейнях:</strong></p>
    <ul>
      <li>1 ч.л. матчи + немного горячей воды → взбивают венчиком (бамбуковый часен!)</li>
      <li>Добавляют горячее вспененное молоко</li>
      <li>Рисуют латте-арт сверху (для Instagram!)</li>
      <li>Цена: $5-8 за чашку 😅</li>
    </ul>
    
    <p><strong>Wellness-культура обожает матчу:</strong></p>
    <ul>
      <li>Больше антиоксидантов, чем в любом другом продукте! Детокс! Сжигает жир и продлевает жизнь!</li>
      <li>Реальность: Да, полезно, но не магия.</li>
      <li>С другой стороны, матча содержит кофеин (~70 мг на чашку, как в эспрессо).</li>
      <li>Но L-теанин (аминокислота) смягчает эффект.</li>
      <li>Результат: "Спокойная бодрость", "focused energy". Идеально для работы!</li>
      <li>Specialty кофейни начали предлагать матча: альтернатива кофе (для тех, кто "не как все").</li>
      <li>Японская эстетика = минимализм, стиль.</li>
      <li>Starbucks запустила матча латте → массовый хайп.</li>
      <li>Матча латте с овсяным/миндальным молоком = веганская версия кофе.</li>
    </ul>
    <img src="${r.matcha2}" />
    <h3>Ирония матча латте</h3>
    
    <p><strong>Монахи vs Хипстеры:</strong></p>
    <table style="width: 100%; border-collapse: collapse; text-align: left;">
      <tr style="background-color: #f0f0f0;">
        <th style="padding: 8px; border: 1px solid #ddd;">Монахи (XII век)</th>
        <th style="padding: 8px; border: 1px solid #ddd;">Хипстеры (XXI век)</th>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Пили для медитации и просветления</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Пьют для Instagram и "энергии"</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Чайная церемония длится 4 часа</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Пакетик + вода = 2 минуты</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Молчание, концентрация, духовность</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Музыка в наушниках, работа за ноутбуком</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Пили без сахара (горечь = часть опыта)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">С сахаром, ванилью, карамелью</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Церемониальная матча ($50-100 за 30 г)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Кулинарная матча в пакетике ($2-3)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Пили из специальной чаши (тяван)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Пьют из бумажного стаканчика Starbucks</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Цель: просветление, внутренний покой</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Цель: не заснуть на работе + лайки</td>
      </tr>
    </table>
    
    <p><strong>Вывод:</strong> То, что было священным ритуалом, стало массовым трендом. Ирония капитализма! 😄</p>

    <p>Наша православная парикмахерша сказала мне спич о том, что через главенство духа достигается контроль над телом и подлыми телесными страстями и желаниями (например, про вкусную еду). Я сказала ей ответный спич о том, что этого контроля в моей жизни и так попой жуй: нет времени спать - не спишь, нет оказии поесть - не ешь. О, сказала она мне, так это же путь монашеского подвижничества!..</p>
    <p>(мне страшно понравилось, разумеется)</p>
    <img src="${r.monk}" />
    <p><strong>Но польза таки реально есть:</strong></p>
    <ul>
      <li>Матча содержит <strong>катехины</strong> (тип антиоксидантов).</li>
      <li>Особенно <strong>EGCG</strong> (эпигаллокатехин галлат).</li>
      <li>В 137 раз больше антиоксидантов, чем в обычном зелёном чае!</li>
      <li>Защищают клетки от повреждений.</li>
      <li>Кофеин бодрит (как в кофе).</li>
      <li>L-теанин расслабляет (но не усыпляет!)</li>
      <li>Вместе: бодрость без тревоги, фокус без нервозности.</li>
      <li>Исследования показали: L-теанин + кофеин → лучше концентрация, память, реакция.</li>
      <li>Катехины снижают "плохой" холестерин (LDL), снижают давление и типа защищают сосуды.</li>
      <li>Монахи были правы.</li>
    </ul>
    <img src="${r.matcha3}" />
    
    
    <h3>Шоколадка без сахара просто милая и дополняет капиталистический набор в рабочий день перед Новым годом 💼🎄</h3>
    <p>Завтра Новый год. Сегодня последний рабочий день. Держись! Осталось немного!</p>

    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари матча латте из пакетика</li>
      <li>Съешь шоколадку</li>
      <li>Переживи этот день</li>
      <li><strong>Ирония:</strong> Ты пьёшь напиток монахов XII века из пакетика на работе.</li>
      <li><strong>Новогоднее настроение:</strong> как оно?</li>
      <li><strong>Чат:</strong> "Завтра Новый год, и я чувствую ___"</li>
    </ol>
    
    <p><em>Держись! Последний рабочий день! Матча, монахи и хипстеры мысленно с тобой. А завтра — праздник!</em> 🍵💪🎄</p>
  `,zebra_message:`
    <h3>Матча латте — от монахов до Instagram 🍵📸</h3>
    
    <p>Сегодня у нас у всех <strong>матча латте</strong> в пакетике. Удобно, быстро, модно - в самый раз дял последнего-мать-его-рабочего дня.</p>
    <img src="${r.matcha}" />
    <p>Это напиток с <strong>1200-летней историей</strong> и <strong>10-летним хайпом</strong>. От японских монахов до хипстерских кофеен, от медитации до Instagram-эстетики.</p>
    <p><strong>Ирония:</strong> То, что монахи пили для просветления, мы пьём, чтобы выглядеть модно (и пережить этот день, конечно же).</p>
    
    <h3>Что такое матча? 🍵</h3>
    
    <p><strong>Определение:</strong></p>
    <ul>
      <li>Матча (抹茶, matcha) = порошковый зелёный чай</li>
      <li>Японский, церемониальный</li>
      <li>Яркий зелёный цвет (как неоновая краска!)</li>
      <li>Вкус: травянистый, слегка горький, с umami (пятый вкус!)</li>
    </ul>
    <img src="${r.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${r.harvest1}" />
    <p><strong>IX век, Китай (династия Тан):</strong></p>
    <ul>
      <li>Буддийские монахи изобрели порошковый чай</li>
      <li>Зачем: Медитация длится часами → нужно не спать, но быть спокойным</li>
      <li>Кофе бодрит, но делает нервным. Матча = бодрость + спокойствие (L-теанин!)</li>
    </ul>
    
    <p><strong>XII век, Япония:</strong></p>
    <ul>
      <li>Монах <strong>Эйсай</strong> привёз матча из Китая в Японию</li>
      <li>Написал книгу: <strong>"Кисса Ёдзёки"</strong> (喫茶養生記) = "Как поддерживать здоровье чаепитием"</li>
      <li>Утверждал: матча продлевает жизнь, лечит болезни</li>
      <li>Самураи начали пить матча перед битвами!</li>
    </ul>
    
    <p><strong>XVI век — Чайная церемония (茶道, sadō):</strong></p>
    <ul>
      <li>Сэн-но Рикю создал философию чайной церемонии</li>
      <li>4 принципа: <strong>和敬清寂</strong> (wa-kei-sei-jaku) = гармония, уважение, чистота, спокойствие</li>
      <li>Матча стала центром церемонии</li>
      <li>Не просто напиток — духовная практика!</li>
      <li>Каждое движение продумано, каждый жест имеет значение.</li>
    </ul>
    <img src="${r.matchaOld1}" />
    <p><strong>XVII-XX века:</strong></p>
    <ul>
      <li>Матча = напиток элиты (самураи, аристократы, монахи), дорогая и редкая. Обычные люди пили сенча (листовой зелёный чай).</li>
      <li>После Второй мировой войны матча стала доступнее. Но всё ещё церемониальная, традиционная и в основном в Японии.</li>
    </ul>
    
    <p><strong>XXI век — ВЗРЫВ ХАЙПА! 📈</strong></p>
    <ul>
      <li>2010-е: Матча завоёвывает мир! Starbucks, specialty кофейни, Instagram</li>
      <li>Матча латте, матча смузи, матча мороженое, матча всё! Модно, эстетично, "полезно"</li>
      <li>Цена взлетает</li>
    </ul>
    <img src="${r.matcha11}" />
    <h3>Как делают матча? 🌱</h3>
    
    <p><strong>1. Выращивание (особый процесс!):</strong></p>
    <ul>
      <li>За 20-30 дней до сбора чайные кусты накрывают тенью (бамбуковые маты или сетки). Без солнца растение производит больше хлорофилла (ярче зелень!) и L-теанина (сладость, umami)</li>
      <li>Листья становятся темнее, вкус — слаще</li>
    </ul>
    
    <p><strong>2. Сбор:</strong></p>
    <ul>
      <li>Собирают только молодые верхние листочки (нежные!)</li>
      <li>Вручную (для церемониальной матчи)</li>
    </ul>
    
    <p><strong>3. Обработка:</strong></p>
    <ul>
      <li>Листья пропаривают (останавливает окисление → остаются зелёными)</li>
      <li>Сушат</li>
      <li>Удаляют стебли и прожилки (остаётся только мягкая часть листа)</li>
      <li>Получается <strong>тенча</strong> (碾茶) — полуфабрикат для матчи</li>
    </ul>
    <img src="${r.harvest}" />
    <p><strong>4. Помол:</strong></p>
    <ul>
      <li>Тенчу мелют в <strong>каменных жерновах</strong> (медленно!)</li>
      <li>30 г матчи = 1 час помола!</li>
      <li>Получается тончайший порошок (как пудра)</li>
      <li>Размер частиц: 5-10 микрон (почти как мука!)</li>
    </ul>
    
    <h3>Сорта матчи 🍃</h3>
    
    <p><strong>1. Церемониальная (Ceremonial Grade):</strong></p>
    <ul>
      <li>Высший сорт</li>
      <li>Самые молодые листья, первый сбор (май)</li>
      <li>Яркий зелёный цвет</li>
      <li>Сладкий, umami, почти без горечи</li>
      <li>Пьют чистой (без молока, без сахара)</li>
      <li>Дорогая! ($30-100+ за 30 г)</li>
    </ul>
    <img src="${r.matchaColors}" />
    <p><strong>2. Премиум (Premium Grade):</strong></p>
    <ul>
      <li>Хорошее качество, но не топ</li>
      <li>Можно пить чистой или с молоком</li>
      <li>Средняя цена</li>
    </ul>
    
    <p><strong>3. Кулинарная (Culinary Grade):</strong></p>
    <ul>
      <li>Для готовки (латте, смузи, выпечка)</li>
      <li>Более горькая, менее яркая</li>
      <li>Дешевле ($10-20 за 30 г)</li>
      <li><strong>Твоя матча в пакетике скорее всего этого сорта!</strong></li>
    </ul>
    
    <p><strong>Как готовят в кофейнях:</strong></p>
    <ul>
      <li>1 ч.л. матчи + немного горячей воды → взбивают венчиком (бамбуковый часен!)</li>
      <li>Добавляют горячее вспененное молоко</li>
      <li>Рисуют латте-арт сверху (для Instagram!)</li>
      <li>Цена: $5-8 за чашку 😅</li>
    </ul>
    
    <p><strong>Wellness-культура обожает матчу:</strong></p>
    <ul>
      <li>Больше антиоксидантов, чем в любом другом продукте! Детокс! Сжигает жир и продлевает жизнь!</li>
      <li>Реальность: Да, полезно, но не магия.</li>
      <li>С другой стороны, матча содержит кофеин (~70 мг на чашку, как в эспрессо).</li>
      <li>Но L-теанин (аминокислота) смягчает эффект.</li>
      <li>Результат: "Спокойная бодрость", "focused energy". Идеально для работы!</li>
      <li>Specialty кофейни начали предлагать матча: альтернатива кофе (для тех, кто "не как все").</li>
      <li>Японская эстетика = минимализм, стиль.</li>
      <li>Starbucks запустила матча латте → массовый хайп.</li>
      <li>Матча латте с овсяным/миндальным молоком = веганская версия кофе.</li>
    </ul>
    <img src="${r.matcha2}" />
    <h3>Ирония матча латте</h3>
    
    <p><strong>Монахи vs Хипстеры:</strong></p>
    <table style="width: 100%; border-collapse: collapse; text-align: left;">
      <tr style="background-color: #f0f0f0;">
        <th style="padding: 8px; border: 1px solid #ddd;">Монахи (XII век)</th>
        <th style="padding: 8px; border: 1px solid #ddd;">Хипстеры (XXI век)</th>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Пили для медитации и просветления</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Пьют для Instagram и "энергии"</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Чайная церемония длится 4 часа</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Пакетик + вода = 2 минуты</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Молчание, концентрация, духовность</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Музыка в наушниках, работа за ноутбуком</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Пили без сахара (горечь = часть опыта)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">С сахаром, ванилью, карамелью</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Церемониальная матча ($50-100 за 30 г)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Кулинарная матча в пакетике ($2-3)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Пили из специальной чаши (тяван)</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Пьют из бумажного стаканчика Starbucks</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #ddd;">Цель: просветление, внутренний покой</td>
        <td style="padding: 8px; border: 1px solid #ddd;">Цель: не заснуть на работе + лайки</td>
      </tr>
    </table>
    
    <p><strong>Вывод:</strong> То, что было священным ритуалом, стало массовым трендом. Ирония капитализма! 😄</p>
    <p>Наша с Танькой православная парикмахерша сказала мне спич о том, что через главенство духа достигается контроль над телом и подлыми телесными страстями и желаниями (например, про вкусную еду). Я сказала ей ответный спич о том, что этого контроля в моей жизни и так попой жуй: нет времени спать - не спишь, нет оказии поесть - не ешь. О, сказала она мне, так это же путь монашеского подвижничества!..</p>
    <p>(мне страшно понравилось, разумеется)</p>
    <img src="${r.monk}" />
    <p><strong>Но польза таки реально есть:</strong></p>
    <ul>
      <li>Матча содержит <strong>катехины</strong> (тип антиоксидантов).</li>
      <li>Особенно <strong>EGCG</strong> (эпигаллокатехин галлат).</li>
      <li>В 137 раз больше антиоксидантов, чем в обычном зелёном чае!</li>
      <li>Защищают клетки от повреждений.</li>
      <li>Кофеин бодрит (как в кофе).</li>
      <li>L-теанин расслабляет (но не усыпляет!)</li>
      <li>Вместе: бодрость без тревоги, фокус без нервозности.</li>
      <li>Исследования показали: L-теанин + кофеин → лучше концентрация, память, реакция.</li>
      <li>Катехины снижают "плохой" холестерин (LDL), снижают давление и типа защищают сосуды.</li>
      <li>Монахи были правы.</li>
    </ul>
    <img src="${r.matcha3}" />
    
    
    <h3>Шоколадка без сахара просто милая и дополняет капиталистический набор в рабочий день перед Новым годом 💼🎄</h3>
    <p>Завтра Новый год. Сегодня последний рабочий день. Держись! Осталось немного!</p>

    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари матча латте из пакетика</li>
      <li>Съешь шоколадку</li>
      <li>Переживи этот день</li>
      <li><strong>Ирония:</strong> Ты пьёшь напиток монахов XII века из пакетика на работе.</li>
      <li><strong>Новогоднее настроение:</strong> как оно?</li>
      <li><strong>Чат:</strong> "Завтра Новый год, и я чувствую ___"</li>
    </ol>
    
    <p><em>Держись! Последний рабочий день! Матча, монахи и хипстеры мысленно с тобой. А завтра — праздник!</em> 🍵💪🎄</p>
  `},{day:12,date:"2025-12-31",tanya_gift:"Рождественский кофе",zebra_gift:'Декаф "Питерская контркультурная обжарка"',tanya_bonus:'Конфеты "Буржуйские" со взрывной карамелью (вкус колы)',zebra_bonus:'Конфеты "Буржуйские" со взрывной карамелью (вкус колы)',title:"Новогоднее обращение президента",tanya_message:`<h3>Новогоднее обращение президента Миссис Кошки 🐱👑</h3>
    
    <p><em>31 декабря, 23:00. Вместо традиционного обращения президента страны мы представляем вам обращение настоящего лидера — президента Миссис Кошки. 
    У Миссис Кошки достаточно политической воли, чтобы совместить ее, колпачок и елку в одном кадре было решительно невозможно.
    Вот ее эксклюзивное интервью.</em></p>
    <img src="${r.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${r.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${r.cat5}" />
    <p><strong>МК:</strong>Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${r.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${r.cat1}" />
    <p><strong>Послание президента Миссис Кошки гражданам:</strong></p>
    <blockquote>
      <p><em>"Дорогие люди. 2025 год закончился. Вы пережили его. Это уже победа. 
      В 2026 будет всё то же самое, но с другими цифрами. Не обманывайтесь. Но это не значит, что надо сдаваться.</em></p>
      
      <p><em>Живите как кошки: спите, когда можете. Ешьте, когда голодны. Требуйте ласку, шипите на тех, кто достал. 
      И находите солнечные квадраты на полу — они везде, если присмотреться.</em></p>
      
      <p><em>С Новым годом. Мяу."</em></p>
      
      <p><strong>— Миссис Кошка, президент</strong></p>
    </blockquote>
    <hr>
    <h3>Рождественский кофе ☕🎄</h3>
    <p>Возможно, на нем нарисован свитер. Или лошади. Ничего не помню, все как в тумане.</p>
   
    <h3>Конфеты "Буржуйские" со взрывной карамелью 🍬💥</h3>
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li><strong>"Взрывная"</strong> карамель со вкусом колы с поп-роксами (pop rocks)!</li>
      <li>Эффект: углекислый газ под давлением → лопается во рту.</li>
      <li>💥Внутренний салют!</li>
      <li>Легкое чувство вины за свои классовые привилегии.</li>
    </ul>
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари рождественский кофе</li>
      <li>Попробуй конфету — как ощущения от "взрыва"? 💥 А что насчет классовых привилегий?</li>
      <li><strong>Обращение президента:</strong> Что из слов Миссис Кошки откликнулось больше всего?</li>
      <li><strong>Философия кошки:</strong> "Найди солнечный квадрат на полу" — где твой "солнечный квадрат" в жизни?</li>
      <li><strong>Чат:</strong> "Мой солнечный квадрат — это ___"</li>
    </ol>
    
    <p><strong>С Новым годом!</strong> 🎄✨🎆</p>
    
    <p><em>Ты пережила этот год! Ты молодец. Президент Миссис Кошка гордится тобой. Пусть 2026 будет добрее (это несложно).</em></p>
  `,zebra_message:`
    <h3>Новогоднее обращение президента Миссис Кошки 🐱👑</h3>
    
    <p><em>31 декабря, 23:00. Вместо традиционного обращения президента страны мы представляем вам обращение настоящего лидера — президента Миссис Кошки. 
    У Миссис Кошки достаточно политической воли, чтобы совместить ее, колпачок и елку в одном кадре было решительно невозможно.
    Вот ее эксклюзивное интервью.</em></p>
    <img src="${r.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${r.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${r.cat5}" />
    <p><strong>МК:</strong> Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${r.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${r.cat1}" />
    <p><strong>Послание президента Миссис Кошки гражданам:</strong></p>
    <blockquote>
      <p><em>"Дорогие люди. 2025 год закончился. Вы пережили его. Это уже победа. 
      В 2026 будет всё то же самое, но с другими цифрами. Не обманывайтесь. Но это не значит, что надо сдаваться.</em></p>
      
      <p><em>Живите как кошки: спите, когда можете. Ешьте, когда голодны. Требуйте ласку, шипите на тех, кто достал. 
      И находите солнечные квадраты на полу — они везде, если присмотреться.</em></p>
      
      <p><em>С Новым годом. Мяу."</em></p>
      
      <p><strong>— Миссис Кошка, президент</strong></p>
    
    <hr>
    
    <h3>Декаф "Питерская контркультурная обжарка" ☕🎨</h3>
    
    <p><strong>Как пить:</strong></p>
    <ul>
      <li>Завари, представь себя в питерской кофейне. Вообрази питерскую эстетику.</li>
      <li>Серое небо, меланхолия. За окном дождь, внутри уютно.</li>
      <li>Ты пьёшь декаф и думаешь о вечном.</li>
    </ul>
    <img src="${r.piterMeme}" />
    <h3>Конфеты "Буржуйские" со взрывной карамелью 🍬💥</h3>
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li><strong>"Взрывная"</strong> карамель со вкусом колы с поп-роксами (pop rocks)!</li>
      <li>Эффект: углекислый газ под давлением → лопается во рту.</li>
      <li>💥Внутренний салют!</li>
      <li>Легкое чувство вины за свои классовые привилегии.</li>
    </ul>
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари декаф "Питерская контркультурная обжарка"</li>
      <li>Почувствуй себя бунтарём — ты пьёшь декаф, пока все пьют кофеин! 😎</li>
      <li>Попробуй конфету — как ощущения от "взрыва"? 💥 А что насчет классовых привилегий?</li>
      <li><strong>Обращение президента:</strong> Что из слов Миссис Кошки откликнулось больше всего?</li>
      <li><strong>Философия кошки:</strong> "Найди солнечный квадрат на полу" — где твой "солнечный квадрат" в жизни?</li>
      <li><strong>Чат:</strong> "Мой солнечный квадрат — это ___"</li>
    </ol>
    
    <p><strong>С Новым годом!</strong> 🎄✨🎆</p>
    
    <p><em>Ты молодец. Ты работала, когда другие отдыхали. Президент Миссис Кошка гордится тобой. Пусть 2026 будет добрее (это несложно).</em></p>
  `},{day:13,date:"2026-01-01",tanya_gift:'Два кофе: "Апельсин + шоколад" (Идальго) и "Манго + морошка"',zebra_gift:"Декаф",tanya_bonus:"Тканевая маска для лица с экстрактом кофе",zebra_bonus:"Тканевая маска для лица с экстрактом кофе",title:"Расслабься. Подыши. Ты дожила.",tanya_message:`
    <h3>1 января. И вот мы здесь 🌅</h3>
    <img src="${r.nyMeme4}" />
    <p>Пережили 2025 и встретили 2026. Время - это социальный конструкт, но что-то героическое в этом безусловно есть.</p>
    <p>Сегодня не нужно никуда бежать, и даже не нужно начинать новую жизнь. Выпить кофе будет в самый раз)</p>
    <img src="${r.nyMeme2}" />
    <h3>Инструкция на сегодня 📋</h3>
    
    <p><strong>1. Подышать.</strong></p>
    <ul>
      <li>Глубокий вдох (4 счёта)</li>
      <li>Задержка (4 счёта)</li>
      <li>Выдох (6 счётов)</li>
      <li>Повтори 3 раза</li>
    </ul>
    <img src="${r.nyMeme6}" />
    <p><strong>2. Никаких "надо":</strong></p>
    <ul>
      <li>Не строй планы на год</li>
      <li>Не чувствуй вину за лежание</li>
      <li>Сегодня — день безделья. Официально.</li>
    </ul>
    
    <img src="${r.nyMeme7}" />
    
    <h3>Два кофе — два настроения ☕</h3>
    
    <h4>1. Апельсин + Шоколад 🍊🍫</h4>
    <ul>
      <li>Яркость цитруса + уют шоколада</li>
      <li>Как Terry's Chocolate Orange в чашке</li>
      <li>Классика с XVII века — европейская роскошь</li>
      <li><strong>Когда пить:</strong> если нужна бодрость, праздничное настроение</li>
    </ul>
    
    <h4>2. Манго + Морошка 🥭🍊</h4>
    <ul>
      <li>Тропики встречают Арктику</li>
      <li><strong>Морошка</strong> — северная ягода, "царская ягода" России</li>
      <li>Растёт в тундре, янтарная, кисло-сладкая</li>
      <li>Витамина C больше, чем в апельсине!</li>
      <li><strong>Когда пить:</strong> если хочется чего-то необычного, летнего</li>
    </ul>
    <img src="${r.nyMeme8}" />
    <p><strong>Или оба!</strong> Утром апельсин + шоколад, вечером манго + морошка. Сегодня можно всё (а еще подозреваю, что разница будет не так очевидна). Можно запивать этим кофе ваш селедочный хлеб)</p>
    
    <hr>
    
    <h3>Тканевая маска для лица 🎭</h3>
    
    <ul>
      <li>Маска из <strong>нетканого материала</strong> (спанлейс — смесь вискозы и полиэстера)</li>
      <li>Пропитана сывороткой с активными компонентами</li>
      <li><strong>1980, Южная Корея</strong> — компания <strong>Nox Bellcow</strong> создала технологию пропитки нетканого материала</li>
      <li>1990-2000-е: бум в Азии (Корея, Япония)</li>
      <li>2010-е: весь мир помешался на K-beauty → маски везде!</li>
      <li>Сейчас: мировой рынок $1+ миллиард в год</li>
    </ul>
    <img src="${r.nyMeme9}" />
    
    <p><strong>Как работает:</strong></p>
    <ul>
      <li>Нетканый материал плотно прилегает к коже и создаёт "окклюзию" (закрывает поры) → ингредиенты проникают глубже</li>
      <li>Сыворотка не испаряется (как крем на воздухе)</li>
      <li>15-20 минут → кожа впитывает максимум</li>
      <li>20 минут принудительного отдыха!</li>
    </ul>
    
    <p><strong>Философия маски:</strong> Нельзя говорить, смотреть в телефон (ага-ага, думаю я. Никакая чертова маска не будет указывать мне, что делать!..). Можно только лежать и дышать. Это медитация под видом ухода за кожей.</p>
    
    <img src="${r.nyMeme5}" />
    <h3>Послание на 1 января 💌</h3>
    
    <p>Ты дожила до 2026. Сегодня не нужно быть "новой тобой": старая ты прекрасна, она дошла досюда.</p>
    
    <p>Найди солнечный квадрат на полу (помнишь Миссис Кошку?). Ляг в него. Полежи, и съешь хлеба с селедкой.</p>
    
    <p>С Новым годом. Ты молодец. 🐱</p>
    <img src="${r.nyMeme1}" />
  `,zebra_message:`
    <h3>1 января. И вот мы здесь 🌅</h3>
    <img src="${r.nyMeme4}" />
    <p>Пережили 2025 и встретили 2026. Время - это социальный конструкт, но что-то героическое в этом безусловно есть.</p>
    <p>Сегодня не нужно никуда бежать, и даже не нужно начинать новую жизнь. Выпить кофе будет в самый раз)</p>
    <img src="${r.nyMeme2}" />
    <h3>Инструкция на сегодня 📋</h3>
    
    <p><strong>1. Подышать.</strong></p>
    <ul>
      <li>Глубокий вдох (4 счёта)</li>
      <li>Задержка (4 счёта)</li>
      <li>Выдох (6 счётов)</li>
      <li>Повтори 3 раза</li>
    </ul>
    <img src="${r.nyMeme6}" />
    <p><strong>2. Никаких "надо":</strong></p>
    <ul>
      <li>Не строй планы на год</li>
      <li>Не чувствуй вину за лежание</li>
      <li>Сегодня — день безделья, официально.</li>
    </ul>
    
    <img src="${r.nyMeme7}" />
    
    
    <p>Совершенно не помню, какой у тебя сегодня кофе. У меня вообще нет уверенности, что это кофе - но если так, то можно запивать им какой-нибудь оливье)</p>
    <p>Хотя бы в тканевой маске для волос я уверена! Итак:</p>
    
    <h3>Тканевая маска для лица 🎭</h3>
    <img src="${r.nyMeme8}" />
    <ul>
      <li>Маска из <strong>нетканого материала</strong> (спанлейс — смесь вискозы и полиэстера)</li>
      <li>Пропитана сывороткой с активными компонентами</li>
      <li><strong>1980, Южная Корея</strong> — компания <strong>Nox Bellcow</strong> создала технологию пропитки нетканого материала</li>
      <li>1990-2000-е: бум в Азии (Корея, Япония)</li>
      <li>2010-е: весь мир помешался на K-beauty → маски везде!</li>
      <li>Сейчас: мировой рынок $1+ миллиард в год</li>
    </ul>
    <img src="${r.nyMeme9}" />
    
    <p><strong>Как работает:</strong></p>
    <ul>
      <li>Нетканый материал плотно прилегает к коже и создаёт "окклюзию" (закрывает поры) → ингредиенты проникают глубже</li>
      <li>Сыворотка не испаряется (как крем на воздухе)</li>
      <li>15-20 минут → кожа впитывает максимум</li>
      <li>20 минут принудительного отдыха!</li>
    </ul>
    
    <p><strong>Философия маски:</strong> Нельзя говорить, смотреть в телефон (ага-ага, думаю я. Никакая чертова маска не будет указывать мне, что делать!..). Можно только лежать и дышать. Это медитация под видом ухода за кожей.</p>
    
    <img src="${r.nyMeme5}" />
    <h3>Послание на 1 января 💌</h3>
    
    <p>Ты дожила до 2026. Сегодня не нужно быть "новой тобой": старая ты прекрасна, она дошла досюда.</p>
    
    <p>Найди солнечный квадрат на полу (помнишь Миссис Кошку?). Ляг в него. Полежи, и съешь какого-нибудь серпуховского оливье.</p>
    
    <p>С Новым годом. Ты молодец. 🐱</p>
    <img src="${r.nyMeme1}" />
  `},{day:14,date:"2026-01-02",tanya_gift:"Кофе с картами Таро (заряженный на удачу и любовь)",tanya_uxazher_gift:"Кофе с картами Таро (заряженный на удачу и любовь)",zebra_gift:"Какао с грибами (рейши, чага или львиная грива)",tanya_bonus:"Маленькая шоколадка",zebra_bonus:"Маленькая шоколадка",title:"Серпухов, гадания и грибы",tanya_message:`
    <h3>Внезапно мы встретимся в Серпухове (и будем пить кофе, потому что ну а как). Что нейронки имеют сказать про Серпухов? 🦚🐒</h3>
    
    <p><strong>Серпухов — коротко:</strong></p>
    <ul>
      <li>Московская область, ~130 км от Москвы, город на реке Наре</li>
      <li>Основан в 1339 году (почти 700 лет!). Древний кремль (XIV век), монастыри, купеческие дома</li>
    </ul>
    
    <h4>1. Павлин на гербе — история и советская версия 🦚⚙️</h4>
    <img src="${r.gerb1}" />
    <p><strong>Герб времен Российской Империи:</strong></p>
    <ul>
      <li>Окольничий Михаил Колупаев в 1691 году привёз в дар Высоцкому монастырю в Серпухове пару павлинов — самца и самку. Как у них там шли дела - вопрос спорный.</li>
      <li>Петр I предпринимает попытку выдать городам и дворянам централизованные гербы по европейскому образцу. Франциск Санти (итальянец) — обер-герольдмейстер, обрабатывает опросники, и цепляется за упоминание, что в серпуховском монастыре водятся павлины. Оп, новый герб.</li>
      <img src="${r.okMeme}" />
      <li>Екатерина II проводит свою губернскую реформу и заодно повторяет историю с гербами, но более организрванно. Павлин несколько меняет очертания.</li>
      <li>Советская власть решила: павлин — буржуазный символ! Но его каким-то чудом решили оставить.</li>
      <li>Зато добавили шестеренку (предположительно от трактора) и <strong>стилизованное изображение синхрофазотрона!!</strong> — Протвинского ускорителя частиц.</li>
</ul>
<img src="${r.gerb2}" />

<p><strong>Протвинский ускоритель У-70:</strong></p>
<ul>
  <li>В соседнем Протвино (10 км от Серпухова) в 1967 построили <strong>ускоритель частиц У-70</strong> - этакий адронный коллайдер своего времени. Кольцо длиной 1,5 км, энергия 70 ГэВ, что бы это ни значило.</li>
  <img src="${r.u70}" />
  <li><strong>С 1967 по 1972 — самый мощный ускоритель в мире!</strong>. На нём открывали новые частицы, изучали структуру материи. Символ научной мощи СССР</li>
  <li>Потом, правда, начали приделывать к нему кольцо ускорителя побольше, но СССР (и даньги) закончились раньше, а большой адронный коллайдер окончательно похоронил проект.</li>
  <img src="${r.map}" />
  <li>После распада СССР вернули исторический герб 1730 года: павлин снова на месте. Ускоритель исчез с герба (эх), хотя продолжает работать в Протвино.</li>
  <li>Советский герб просуществовал 23 года (1969-1992)</li>
  <li>Царский герб — 262 года (1730-1992 с перерывом) и продолжает</li>
  <li><strong>Павлин: 1, Ускоритель частиц: 0</strong></li>
  <li>Но ускоритель работает до сих пор — и это круто! ⚛️</li>
  <li>Правда, его большой нерожденный брат - протон-протонного коллайдер УНК - так и не был запущен и стоит тут же в виде изрядной сети разрушающихся тоннелей.</li>
  <img src="${r.unk}" />
</ul>    
    
    <p><strong>Факт:</strong> В Серпухове есть <strong>Научно-исследовательский институт медицинской приматологии</strong> (основан 1927).</p>
    <ul>
      <li>Один из крупнейших питомников обезьян в России</li>
      <li>В 1950-1980-е здесь готовили обезьян для космических полётов</li>
      <li>Обезьяны летали в космос <strong>до Гагарина!</strong></li>
      <li>Самые известные: <strong>Абрек и Бион</strong> (1983, полёт 5 дней на биоспутнике "Космос-1514")</li>
      <li><strong>Вернулись живыми</strong> - это история с хорошим концом 🎉 После полёта прожили долго и дали потомство</li>
    </ul>

    <p><strong>Факт:</strong> Под старым центром Серпухова — сеть подземных ходов.</p>
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Остатки купеческих складов, погребов. Тайные проходы между домами и рекой. Некоторые ведут от церквей к монастырям.</li>
      <li>Зачем? <strong>Контрабанда?</strong> Серпухов — торговый город, купцы прятали товары от налогов.</li>
      <li><strong>Побег при осаде?</strong> Ходы соединяли укреплённые точки.</li>
      <li><strong>Хранение сокровищ?</strong> Легенды говорят о спрятанном золоте.</li>
      <li>Большинство ходов завалены, затоплены. При стройке иногда обнаруживают новые.</li>
      <li>2015: нашли ход от дома до церкви (300 метров!), внутри — старые бутылки, монеты XIX века.</li>
      <li>Диггеры пробираются, но опасно (обвалы!)</li>
    </ul>
    
    <h4>В Серпухове есть "Неупиваемая Чаша" — специальная икона от разного рода зависимостей 🍷🙏</h4>
    <img src="${r.chasha}" />
    <p><strong>Где:</strong> Введенский Владычный женский монастырь (Серпухов)</p>
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Чудотворная икона Богородицы <strong>"Неупиваемая Чаша". Написана в конце XIX века</strong></li>
      <li>На иконе: Богородица с воздетыми руками, перед ней — чаша, в чаше — младенец Христос</li>
    </ul>
    
    <p><strong>Легенда обретения (1878):</strong></p>
    <ul>
      <li>Крестьянин из Тульской губернии — запойный пьяница, ноги отнялись, не мог ходить</li>
      <li>Во сне явился старец, сказал: "Иди в Серпухов, в монастырь Владычицы, найди икону 'Неупиваемая Чаша', отслужи молебен — исцелишься"</li>
      <li>Крестьянин <strong>пополз на коленях</strong> в Серпухов (150+ км, вот это марафон). В монастыре икону не знали, но нашли в подвале старую, заброшенную.</li>
      <li>Отслужили молебен — крестьянин разом встал на ноги и бросил пить. Слухи разнеслись быстро, и икона стала местной чудотворной знаменитостью, пусть и не признавалась шире.</li>
      <li>1919: монастырь закрыли (советская власть), икона исчезла.</li>
      <li>1980-90-е: написаны списки (копии) по старым фото. 1993: монастырь возродили, новый список иконы стал главной святыней.</li>
      <li>Молятся об избавлении от алкоголизма, наркомании, игромании.</li>
    </ul>
    
    <h3>Серпухов — итого:</h3>
    <p>Город, где:</p>
    <ul>
      <li>Павлин победил советскую шестерню и вернулся на герб 🦚⚙️</li>
      <li>Под боком все еще работает советский адронный коллайдер</li>
      <li>Обезьяны летали в космос и вернулись живыми 🐒🚀</li>
      <li>Под землёй — сеть тайных ходов контрабандистов 🕳️</li>
      <li>В монастыре — икона, которая лечит от игромании и пьянства (если верить как следует, конечно)</li>
    </ul>
    
    <h3>Кофе с сыром — неожиданная традиция 🧀☕</h3>
    <img src="${r.cheese}" />
    <p>У нас будет сырная тарелка и кофе. А это не просто закуска — это <strong>традиция</strong>!</p>
    
    <p><strong>Финляндия — kaffeost (кофейный сыр) 🇫🇮</strong></p>
    <ul>
      <li>В Лапландии пьют кофе с <strong>leipäjuusto</strong> ("хлебный сыр")</li>
      <li>Сыр из оленьего или коровьего молока, запечённый до золотистой корочки</li>
      <li>Нарезают кубиками, кладут в чашку, заливают горячим кофе</li>
      <li>Сыр размягчается, впитывает кофе, становится сладковатым</li>
      <li>Едят ложкой вместе с кофе!</li>
    </ul>
    
    <p><strong>Колумбия — café con queso 🇨🇴</strong></p>
    <ul>
      <li>В горных регионах кладут кусочек белого мягкого сыра в чашку</li>
      <li>Сыр тает, кофе становится сливочным</li>
    </ul>
    
    <p><strong>Почему кофе + сыр работает:</strong></p>
    <ul>
      <li><strong>Контраст:</strong> Горечь кофе + жирность сыра = баланс</li>
      <li><strong>Текстура:</strong> Сыр размягчается в горячем кофе → интересно</li>
      <li><strong>Традиция:</strong> В холодном климате (Лапландия, горы) сыр + кофе = сытно, калорийно</li>
    </ul>
    <img src="${r.cheese1}" />
    <p><strong>Какие сыры лучше с кофе:</strong></p>
    <ul>
      <li><strong>Мягкие:</strong> Бри, камамбер (сливочность смягчает кофе)</li>
      <li><strong>Полутвёрдые:</strong> Гауда, эдам (сладковатые, ореховые)</li>
      <li><strong>Твёрдые:</strong> Пармезан, грана падано (солёные, умами — контраст!)</li>
      <li><strong>Голубые:</strong> Рокфор, горгонзола (смелый выбор!)</li>
    </ul>
    
    <p><strong>Как попробовать:</strong></p>
    <ol>
      <li>Откусить кусочек сыра</li>
      <li>Сделать глоток кофе</li>
      <li>Прочувствовать, как вкусы смешиваются</li>
      <li>Экспериментировать с разными сырами!</li>
    </ol>
    
    <hr>
    <img src="${r.ft0}" />
    <h3>Кофе с картами Таро — гадание! 🔮☕</h3>
    
    <p>Сегодня у нас необычный кофе. На упаковке — карты Таро. Он заряжен на удачу и любовь (или хотя бы производитель так утверждает).</p>
    
    <p><strong>Что делать с этим кофе:</strong></p>
    <ol>
      <li>Выпить</li>
      <li>Погадать на кофейной гуще</li>
      <li>Попросить нейросеть растолковать результат</li>
      <li>Узнать, как нейросеть "видит" твою судьбу</li>
    </ol>
    
    <hr>
    
    <h3>Как гадать на кофейной гуще (традиционный способ) ☕🔮</h3>
    <img src="${r.ft1}" />
    <p><strong>Что нужно:</strong></p>
    <ul>
      <li>Кофе мелкого помола (турка или джезва)</li>
      <li>Небольшая чашка (лучше белая внутри)</li>
      <li>Блюдце</li>
      <li>Спокойствие и вопрос, на который хочешь ответ</li>
    </ul>
    
    <p><strong>Инструкция:</strong></p>
    <ol>
      <li><strong>Завари кофе в турке</strong> (не фильтруй! Гуща нужна)</li>
      <li><strong>Налей в чашку</strong> с гущей</li>
      <li><strong>Выпей медленно,</strong> думая о своём вопросе</li>
      <li><strong>Оставь немного жидкости</strong> на дне (примерно 1 см)</li>
      <li><strong>Накрой чашку блюдцем</strong></li>
      <li><strong>Переверни</strong> быстрым движением (чашка вверх дном на блюдце)</li>
      <li><strong>Жди 3-5 минут,</strong> пока гуща стечёт и подсохнет</li>
      <li><strong>Переверни обратно</strong> — узоры готовы!</li>
    </ol>
    <img src="${r.ft2}" />
    <p><strong>Традиционное толкование:</strong></p>
    <ul>
      <li><strong>Верх чашки</strong> = настоящее</li>
      <li><strong>Середина</strong> = ближайшее будущее</li>
      <li><strong>Дно</strong> = далёкое будущее</li>
      <li><strong>Ручка чашки</strong> = ты сама, твой дом</li>
      <li><strong>Напротив ручки</strong> = внешний мир, чужие люди</li>
    </ul>
    
    <p><strong>Символы (примеры):</strong></p>
    <ul>
      <li>Круг = успех, завершение</li>
      <li>Линии = путь, дорога</li>
      <li>Точки = деньги</li>
      <li>Сердце = любовь</li>
      <li>Птица = хорошие новости</li>
      <li>Дерево = рост, развитие</li>
    </ul>
    
    <hr>
    
    <h3>Современный способ: Гадание через нейросеть 🤖🔮</h3>
    
    <p><strong>Твоё задание:</strong></p>
    <ol>
      <li>Погадай традиционным способом (см. выше)</li>
      <li><strong>Сфотографируй</strong> узоры гущи в чашке</li>
      <li>Загрузи фото в нейросеть (ChatGPT, Claude, Gemini — любая с vision)</li>
      <h3>Промпт для нейросети 🤖🔮</h3>

<p><strong>Скопируй этот текст и отправь нейросети вместе с фотографией кофейной гущи:</strong></p>

<div style="background-color: #f5f5f5; border-left: 4px solid #4CAF50; padding: 15px; margin: 20px 0; font-family: monospace; font-size: 14px;">
<p><em>Это фотография кофейной гущи после гадания.</em></p>
<p><em>Проанализируй узоры и дай толкование:</em></p>
<p><em>1. Какие символы ты видишь? (животные, предметы, фигуры, линии, точки)</em></p>
<p><em>2. Где они расположены в чашке? (верх = ближайшее будущее, середина = среднесрочное, дно = далёкое)</em></p>
<p><em>3. Что эти символы означают в традиционном гадании на кофейной гуще?</em></p>
<p><em>4. Какое общее послание или совет?</em></p>

<p><em>Используй традиционную символику тассеографии. Будь внимателен к деталям, но честен: если символ неоднозначен, скажи об этом.</em></p>
</div>

<p><strong>Куда отправить:</strong></p>
<ul>
  <li><strong>ChatGPT:</strong> chat.openai.com (нужна версия с vision — GPT-4)</li>
  <li><strong>Claude:</strong> claude.ai (загрузи фото + промпт)</li>
  <li><strong>Gemini:</strong> gemini.google.com (Google AI)</li>
</ul>

<p><strong>Совет:</strong> Попробуй несколько нейросетей — у каждой своя интерпретация.</p>
      <li>Получи толкование!</li>
    </ol>
    
    <hr>
    
    <h3>Как нейросеть "видит" кофейную гущу 🧠👁️</h3>
    
    <p><strong>1. Распознавание изображения (Computer Vision):</strong></p>
    <ul>
      <li>Нейросеть разбивает фото на пиксели</li>
      <li>Анализирует контрастность (тёмные пятна гущи vs светлая чашка)</li>
      <li>Выделяет контуры, формы, паттерны</li>
      <li>Это делает <strong>CNN (Convolutional Neural Network)</strong> — свёрточная нейросеть</li>
    </ul>
    
    <p><strong>2. Распознавание форм (Pattern Recognition):</strong></p>
    <ul>
      <li>Нейросеть ищет знакомые формы: круги, линии, точки, фигуры</li>
      <li>Обучена на миллиардах изображений → "знает", как выглядят сердце, птица, дерево, лицо</li>
      <li><strong>Парейдолия</strong> — способность видеть образы в случайных узорах (как люди видят лица в облаках)</li>
      <li>Нейросеть делает то же самое!</li>
    </ul>
    
    <p><strong>3. Семантический анализ (Understanding Context):</strong></p>
    <ul>
      <li>Нейросеть понимает контекст: <em>"Это кофейная гуща + гадание"</em></li>
      <li>Извлекает из базы знаний традиционные символы гадания</li>
      <li>Сопоставляет формы с символами: "Это похоже на сердце → любовь"</li>
    </ul>
    
    <p><strong>4. Генерация текста (Language Model):</strong></p>
    <ul>
      <li>После "видения" нейросеть формулирует ответ на естественном языке</li>
      <li>Использует <strong>LLM (Large Language Model)</strong> — большая языковая модель</li>
      <li>Создаёт связный текст с интерпретацией</li>
      <li>Нейросеть не "знает" истину — она даёт наиболее вероятную интерпретацию</li>
      <li>Если форма 60% похожа на птицу и 40% на лист — скажет "птица"</li>
      <li><strong>Галлюцинации:</strong> Иногда нейросеть "видит" то, чего нет (как люди в облаках). Но нейросеть хотя бы старается.</li>
    </ul>
  `,zebra_message:`
    <h3>Внезапно мы встретимся в Серпухове (и будем пить кофе, потому что ну а как). Что нейронки имеют сказать про Серпухов? 🦚🐒</h3>
    
    <p><strong>Серпухов — коротко:</strong></p>
    <ul>
      <li>Московская область, ~130 км от Москвы, город на реке Наре</li>
      <li>Основан в 1339 году (почти 700 лет!). Древний кремль (XIV век), монастыри, купеческие дома</li>
    </ul>
    
    <h4>1. Павлин на гербе — история и советская версия 🦚⚙️</h4>
    <img src="${r.gerb1}" />
    <p><strong>Герб времен Российской Империи:</strong></p>
    <ul>
      <li>Окольничий Михаил Колупаев в 1691 году привёз в дар Высоцкому монастырю в Серпухове пару павлинов — самца и самку. Как у них там шли дела - вопрос спорный.</li>
      <li>Петр I предпринимает попытку выдать городам и дворянам централизованные гербы по европейскому образцу. Франциск Санти (итальянец) — обер-герольдмейстер, обрабатывает опросники, и цепляется за упоминание, что в серпуховском монастыре водятся павлины. Оп, новый герб.</li>
      <img src="${r.okMeme}" />
      <li>Екатерина II проводит свою губернскую реформу и заодно повторяет историю с гербами, но более организрванно. Павлин несколько меняет очертания.</li>
      <li>Советская власть решила: павлин — буржуазный символ! Но его каким-то чудом решили оставить.</li>
      <li>Зато добавили шестеренку (предположительно от трактора) и <strong>стилизованное изображение синхрофазотрона!!</strong> — Протвинского ускорителя частиц.</li>
</ul>
<img src="${r.gerb2}" />

<p><strong>Протвинский ускоритель У-70:</strong></p>
<ul>
  <li>В соседнем Протвино (10 км от Серпухова) в 1967 построили <strong>ускоритель частиц У-70</strong> - этакий адронный коллайдер своего времени. Кольцо длиной 1,5 км, энергия 70 ГэВ, что бы это ни значило.</li>
  <img src="${r.u70}" />
  <li><strong>С 1967 по 1972 — самый мощный ускоритель в мире!</strong>. На нём открывали новые частицы, изучали структуру материи. Символ научной мощи СССР</li>
  <li>Потом, правда, начали приделывать к нему кольцо ускорителя побольше, но СССР (и даньги) закончились раньше, а большой адронный коллайдер окончательно похоронил проект.</li>
  <img src="${r.map}" />
  <li>После распада СССР вернули исторический герб 1730 года: павлин снова на месте. Ускоритель исчез с герба (эх), хотя продолжает работать в Протвино.</li>
  <li><strong>Павлин: 1, Ускоритель частиц: 0</strong></li>
  <li>Но ускоритель работает до сих пор — и это круто! ⚛️ Правда, его большой нерожденный брат - протон-протонного коллайдер УНК - так и не был запущен и стоит тут же в виде изрядной сети разрушающихся тоннелей.</li>
  <img src="${r.unk}" />
</ul>    
    
    <p><strong>Факт:</strong> В Серпухове есть <strong>Научно-исследовательский институт медицинской приматологии</strong> (основан 1927).</p>
    <ul>
      <li>Один из крупнейших питомников обезьян в России</li>
      <li>В 1950-1980-е здесь готовили обезьян для космических полётов</li>
      <li>Обезьяны летали в космос <strong>до Гагарина!</strong> Самые известные: <strong>Абрек и Бион</strong> (1983, полёт 5 дней на биоспутнике "Космос-1514")</li>
      <li><strong>Вернулись живыми</strong> - это история с хорошим концом 🎉 После полёта прожили долго и дали потомство</li>
    </ul>

    <p><strong>Факт:</strong> Под старым центром Серпухова — сеть подземных ходов.</p>
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Остатки купеческих складов, погребов. Тайные проходы между домами и рекой. Некоторые ведут от церквей к монастырям.</li>
      <li>Зачем? <strong>Контрабанда?</strong> Серпухов — торговый город, купцы прятали товары от налогов.</li>
      <li><strong>Побег при осаде?</strong> Ходы соединяли укреплённые точки.</li>
      <li><strong>Хранение сокровищ?</strong> Легенды говорят о спрятанном золоте.</li>
      <li>Большинство ходов завалены, затоплены. При стройке иногда обнаруживают новые.</li>
      <li>2015: нашли ход от дома до церкви (300 метров!), внутри — старые бутылки, монеты XIX века.</li>
      <li>Диггеры пробираются, но опасно (обвалы!)</li>
    </ul>
    
    <h4>В Серпухове есть "Неупиваемая Чаша" — специальная икона от разного рода зависимостей 🍷🙏</h4>
    <img src="${r.chasha}" />
    <p><strong>Где:</strong> Введенский Владычный женский монастырь (Серпухов)</p>
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Чудотворная икона Богородицы <strong>"Неупиваемая Чаша". Написана в конце XIX века</strong></li>
      <li>На иконе: Богородица с воздетыми руками, перед ней — чаша, в чаше — младенец Христос</li>
    </ul>
    
    <p><strong>Легенда обретения (1878):</strong></p>
    <ul>
      <li>Крестьянин из Тульской губернии — запойный пьяница, ноги отнялись, не мог ходить</li>
      <li>Во сне явился старец, сказал: "Иди в Серпухов, в монастырь Владычицы, найди икону 'Неупиваемая Чаша', отслужи молебен — исцелишься"</li>
      <li>Крестьянин <strong>пополз на коленях</strong> в Серпухов (150+ км, вот это марафон). В монастыре икону не знали, но нашли в подвале старую, заброшенную.</li>
      <li>Отслужили молебен — крестьянин разом встал на ноги и бросил пить. Слухи разнеслись быстро, и икона стала местной чудотворной знаменитостью, пусть и не признавалась шире.</li>
      <li>1919: монастырь закрыли (советская власть), икона исчезла.</li>
      <li>1980-90-е: написаны списки (копии) по старым фото. 1993: монастырь возродили, новый список иконы стал главной святыней.</li>
      <li>Молятся об избавлении от алкоголизма, наркомании, игромании.</li>
    </ul>
    
    <h3>Серпухов — итого:</h3>
    <p>Город, где:</p>
    <ul>
      <li>Павлин победил советскую шестерню и вернулся на герб 🦚⚙️</li>
      <li>Под боком все еще работает советский адронный коллайдер</li>
      <li>Обезьяны летали в космос и вернулись живыми 🐒🚀</li>
      <li>Под землёй — сеть тайных ходов контрабандистов 🕳️</li>
      <li>В монастыре — икона, которая лечит от игромании и пьянства (если верить как следует, конечно)</li>
    </ul>
    
    <h3>Кофе с сыром — неожиданная традиция 🧀☕</h3>
    <img src="${r.cheese}" />
    <p>У нас будет сырная тарелка и кофе. А это не просто закуска — это <strong>традиция</strong>!</p>
    
    <p><strong>Финляндия — kaffeost (кофейный сыр) 🇫🇮</strong></p>
    <ul>
      <li>В Лапландии пьют кофе с <strong>leipäjuusto</strong> ("хлебный сыр")</li>
      <li>Сыр из оленьего или коровьего молока, запечённый до золотистой корочки</li>
      <li>Нарезают кубиками, кладут в чашку, заливают горячим кофе</li>
      <li>Сыр размягчается, впитывает кофе, становится сладковатым</li>
      <li>Едят ложкой вместе с кофе!</li>
    </ul>
    
    <p><strong>Колумбия — café con queso 🇨🇴</strong></p>
    <ul>
      <li>В горных регионах кладут кусочек белого мягкого сыра в чашку</li>
      <li>Сыр тает, кофе становится сливочным</li>
    </ul>
    
    <p><strong>Почему кофе + сыр работает:</strong></p>
    <ul>
      <li><strong>Контраст:</strong> Горечь кофе + жирность сыра = баланс</li>
      <li><strong>Текстура:</strong> Сыр размягчается в горячем кофе → интересно</li>
      <li><strong>Традиция:</strong> В холодном климате (Лапландия, горы) сыр + кофе = сытно, калорийно</li>
    </ul>
    <img src="${r.cheese1}" />
    <p><strong>Какие сыры лучше с кофе:</strong></p>
    <ul>
      <li><strong>Мягкие:</strong> Бри, камамбер (сливочность смягчает кофе)</li>
      <li><strong>Полутвёрдые:</strong> Гауда, эдам (сладковатые, ореховые)</li>
      <li><strong>Твёрдые:</strong> Пармезан, грана падано (солёные, умами — контраст!)</li>
      <li><strong>Голубые:</strong> Рокфор, горгонзола (смелый выбор!)</li>
    </ul>
    
    <hr>
    <img src="${r.ft0}" />
    <h3>Кофе с картами Таро — гадание! 🔮☕</h3>
    
    <p>Сегодня у нас снова тот хэллоуиновский кофе. Он заряжен на удачу и любовь (по крайней мере, производитель так утверждает).</p>
    <p>У тебя по идее какао, но я привезу по такому поводу какой-нибудь декаф.</p>
    
    <p><strong>Что делать с этим кофе:</strong></p>
    <ol>
      <li>Выпить</li>
      <li>Погадать на кофейной гуще</li>
      <li>Попросить нейросеть растолковать результат</li>
      <li>Узнать, как нейросеть "видит" твою судьбу</li>
    </ol>
    
    <hr>
    
    <h3>Как гадать на кофейной гуще (традиционный способ) ☕🔮</h3>
    <img src="${r.ft1}" />
    <ul>
      <li>Кофе мелкого помола (турка или джезва)</li>
      <li>Небольшая чашка (лучше белая внутри)</li>
      <li>Блюдце</li>
      <li>Спокойствие и вопрос, на который нужен ответ</li>
    </ul>
    
    <p><strong>Инструкция:</strong></p>
    <ol>
      <li><strong>Завари кофе в турке</strong> (не фильтруй! Гуща нужна)</li>
      <li><strong>Налей в чашку</strong> с гущей</li>
      <li><strong>Выпей медленно,</strong> думая о своём вопросе</li>
      <li><strong>Оставь немного жидкости</strong> на дне (примерно 1 см)</li>
      <li><strong>Накрой чашку блюдцем</strong></li>
      <li><strong>Переверни</strong> быстрым движением (чашка вверх дном на блюдце)</li>
      <li><strong>Жди 3-5 минут,</strong> пока гуща стечёт и подсохнет</li>
      <li><strong>Переверни обратно</strong> — узоры готовы!</li>
    </ol>
    <img src="${r.ft2}" />
    <p><strong>Традиционное толкование:</strong></p>
    <ul>
      <li><strong>Верх чашки</strong> = настоящее</li>
      <li><strong>Середина</strong> = ближайшее будущее</li>
      <li><strong>Дно</strong> = далёкое будущее</li>
      <li><strong>Ручка чашки</strong> = ты сама, твой дом</li>
      <li><strong>Напротив ручки</strong> = внешний мир, чужие люди</li>
    </ul>
    
    <h3>Современный способ: Гадание через нейросеть 🤖🔮</h3>
    
    <p><strong>Твоё задание:</strong></p>
    <ol>
      <li>Погадай традиционным способом (см. выше)</li>
      <li><strong>Сфотографируй</strong> узоры гущи в чашке</li>
      <li>Загрузи фото в нейросеть (ChatGPT, Claude, Gemini — любая с vision)</li>
      <h3>Промпт для нейросети 🤖🔮</h3>


<div style="background-color: #f5f5f5; border-left: 4px solid #4CAF50; padding: 15px; margin: 20px 0; font-family: monospace; font-size: 14px;">
<p><em>Это фотография кофейной гущи после гадания.</em></p>
<p><em>Проанализируй узоры и дай толкование:</em></p>
<p><em>1. Какие символы ты видишь? (животные, предметы, фигуры, линии, точки)</em></p>
<p><em>2. Где они расположены в чашке? (верх = ближайшее будущее, середина = среднесрочное, дно = далёкое)</em></p>
<p><em>3. Что эти символы означают в традиционном гадании на кофейной гуще?</em></p>
<p><em>4. Какое общее послание или совет?</em></p>

<p><em>Используй традиционную символику тассеографии. Будь внимателен к деталям, но честен: если символ неоднозначен, скажи об этом.</em></p>
</div>

<p><strong>Куда отправить:</strong></p>
<ul>
  <li><strong>ChatGPT:</strong> chat.openai.com (нужна версия с vision — GPT-4)</li>
  <li><strong>Claude:</strong> claude.ai (загрузи фото + промпт)</li>
  <li><strong>Gemini:</strong> gemini.google.com (Google AI)</li>
</ul>

<p><strong>Совет:</strong> Попробуй несколько нейросетей — у каждой своя интерпретация.</p>
      <li>Получи толкование!</li>
    </ol>
    
    <hr>
    
    <h3>Как нейросеть "видит" кофейную гущу 🧠👁️</h3>
    
    <p><strong>1. Распознавание изображения (Computer Vision):</strong></p>
    <ul>
      <li>Нейросеть разбивает фото на пиксели</li>
      <li>Анализирует контрастность (тёмные пятна гущи vs светлая чашка)</li>
      <li>Выделяет контуры, формы, паттерны</li>
      <li>Это делает <strong>CNN (Convolutional Neural Network)</strong> — свёрточная нейросеть</li>
    </ul>
    
    <p><strong>2. Распознавание форм (Pattern Recognition):</strong></p>
    <ul>
      <li>Нейросеть ищет знакомые формы: круги, линии, точки, фигуры</li>
      <li>Обучена на миллиардах изображений → "знает", как выглядят сердце, птица, дерево, лицо</li>
      <li><strong>Парейдолия</strong> — способность видеть образы в случайных узорах (как люди видят лица в облаках)</li>
      <li>Нейросеть делает то же самое!</li>
    </ul>
    
    <p><strong>3. Семантический анализ (Understanding Context):</strong></p>
    <ul>
      <li>Нейросеть понимает контекст: <em>"Это кофейная гуща + гадание"</em></li>
      <li>Извлекает из базы знаний традиционные символы гадания</li>
      <li>Сопоставляет формы с символами: "Это похоже на сердце → любовь"</li>
    </ul>
    
    <p><strong>4. Генерация текста (Language Model):</strong></p>
    <ul>
      <li>После "видения" нейросеть формулирует ответ на естественном языке</li>
      <li>Использует <strong>LLM (Large Language Model)</strong> — большая языковая модель</li>
      <li>Создаёт связный текст с интерпретацией. Если форма 60% похожа на птицу и 40% на лист — скажет "птица"</li>
      <li><strong>Галлюцинации:</strong> Иногда нейросеть "видит" то, чего нет (как люди в облаках). Но нейросеть хотя бы старается.</li>
    </ul>
     
    <h3>А теперь о твоем какао. Что такое адаптогенные грибы? 🍄</h3>
    <img src="${r.reishi}" />
    <p><strong>Адаптогены</strong> — вещества, которые помогают организму адаптироваться к стрессу.</p>
    
    <p><strong>Грибы-адаптогены:</strong></p>
    <ul>
      <li>Не психоделические! (Не галлюциногены!)</li>
      <li>Не ядовитые</li>
      <li>Используются в китайской и японской медицине 2000+ лет</li>
      <li>Сейчас — тренд в wellness-культуре</li>
    </ul>
    
    <h4>Рейши (Ganoderma lucidum) — "Гриб бессмертия" 🍄👑</h4>
    
    <p><strong>История:</strong></p>
    <ul>
      <li>Китай, 2000+ лет</li>
      <li>Называли "лин-чжи" (靈芝) = гриб духовной силы</li>
      <li>Императоры пили отвар рейши для долголетия</li>
      <li>Даосские монахи использовали для медитации. В общем, все как с матча.</li>
    </ul>
    
    <p><strong>Свойства (по традиции и исследованиям):</strong></p>
    <ul>
      <li><strong>Успокаивает</strong> — снижает стресс, тревожность</li>
      <li><strong>Поддерживает иммунитет</strong> — бета-глюканы стимулируют иммунные клетки</li>
      <li><strong>Улучшает сон</strong> — тритерпены действуют расслабляюще</li>
    </ul>
    
    <p><strong>Вкус:</strong> Горький, древесный (в какао смягчается)</p>
    
    
    <h3>Наука: Работает ли это? 🔬</h3>
    
    <p><strong>Рейши:</strong></p>
    <ul>
      <li>Исследования подтверждают иммуномодулирующий эффект</li>
      <li>Снижение стресса — данные есть, но исследований мало</li>
      <li>Долголетие — не доказано. Ну и черт с ним.</li>
    </ul>
  `},{day:15,date:"2026-01-03",tanya_gift:"Кофе Kamakura Royal Blend (дрип-пакет, Япония)",zebra_gift:"Кофе Kamakura Royal Blend (дрип-пакет, Япония)",tanya_bonus:"Белорусская желейная конфета с вишней и перцем",zebra_bonus:"Белорусская желейная конфета с вишней и перцем",title:"Камакура и самураи",tanya_message:`
    <h3>Kamakura Royal Blend — кофе из города самураев 🇯🇵☕</h3>    
    <p>Сегодня у нас японский кофе (по такому поводу даже у Зёбры порция с кофеином). Не японские зёрна, кофе у них не растет, а <strong>японская обжарка</strong> — бразильско-колумбийская арабика, обжаренная в древней Камакуре.</p>
    <img src="${r.kamakura2}" />
    <p><strong>Вкус:</strong> Тёмная обжарка, горечь 5/5, кислотность 1/5. Ноты тёмного шоколада, карамели, пряностей.</p>

    <p><strong>Камакура — город самураев, дзен и драконов 🏯🐉 История:</strong></p>
    <ul>
      <li>50 км от Токио, на берегу Тихого океана</li>
      <li><strong>1185-1333:</strong> Столица Японии, первый сёгунат (военное правительство самураев)</li>
      <li>Здесь зародилась культура самураев и дзен-буддизма</li>
      <li><strong>Великий Будда</strong> — бронзовая статуя 13 м, 1252 год. Стоит под открытым небом (храм разрушило цунами в 1498)</li>
      <li>Там за сотню садов и святилищ, и найти городскую фотку с обычными домами практически невозможно.</li>
    </ul>
    <img src="${r.kamakura}" />

    <h4>Легенды о драконах Камакуры 🐉: их там немало, и некоторые отличаются от "ну, у нас тут есть белый дракон, который охраняет город"</h4>

    <p><strong>1. Дракон богатства и традиция мыть деньги:</strong></p>
    <ul>
      <li>В Камакуре есть пещера-святилище <strong>Дзэниарай Бентен</strong> ("мытьё денег")</li>
      <li><strong>1185 год:</strong> Сёгун Минамото-но Ёритомо увидел сон</li>
      <li>Ему явился <strong>дракон-бог воды</strong> и сказал: "В пещере есть священный источник. Помолись там — и твои владения станут процветающими"</li>
      <li>Ёритомо нашёл пещеру, помолился → его правление стало успешным, Камакура стала столицей</li>
      <li><strong>Традиция:</strong> В пещере течёт вода из источника дракона. Японцы моют в ней деньги (купюры, монеты)</li>
      <li>Поверье: <strong>Помой деньги в воде дракона и потрать их → вернутся умноженными!</strong></li>
      <li><strong>Важно:</strong> Нельзя копить вымытые деньги — надо потратить, тогда вернутся</li>
      <li>Очень популярно у японцев (особенно в Новый год — моют деньги на удачу!)</li>
    </ul>
        <img src="${r.dragon1}" />
    <p><strong>2. Пятиголовый дракон и богиня Бентен:</strong></p>
    <ul>
      <li>В древности в море у Камакуры жил <strong>пятиголовый дракон-людоед</strong></li>
      <li>Терроризировал рыбаков, требовал жертвоприношений</li>
      <li>С неба спустилась богиня Бентен (богиня воды, музыки, богатства)</li>
      <li>Дракон влюбился в неё</li>
      <li>Бентен сказала: "Я выйду за тебя замуж, если перестанешь есть людей и станешь защитником"</li>
      <li>Дракон согласился → превратился в остров Эносима (виден из Камакуры!)</li>
      <li>Теперь он защищает местных жителей вместо того, чтобы их есть</li>
      <li><strong>Романтика:</strong> Злой дракон изменился ради любви 💕🐉</li>
    </ul>
    
    
    <p>Какой-то из них еще повышает женскую и мужскую плодовитость. Возможно, оба. Возможно, это вообще одна история, источники путанны.</p>
    
    <img src="${r.dragon}" />
    
    <h3>Япония и кофе — парадокс ☕🍵</h3>
    
    <p><strong>Парадокс:</strong> Япония — чайная страна (матча, сенча), но японцы — <strong>одни из лучших обжарщиков кофе в мире</strong>.</p>
    
    <p><strong>Почему любят тёмную обжарку:</strong></p>
    <ul>
      <li><strong>Воспитаны чаем:</strong> Зелёный чай и матча горькие → японцы привыкли к горечи</li>
      <li>Горечь = зрелость, глубина, серьёзность (не детская сладость!)</li>
      <li>Тёмная обжарка даёт минимум кислотности, максимум плотности</li>
      <li><strong>История:</strong> Послевоенная Япония — кофе был дорогим, обжаривали темнее для насыщенности</li>
    </ul>
    
    
    <h3>Kissaten — японские кофейни 🏮☕</h3>
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Традиционные японские кофейни (расцвет 1970-1990-е)</li>
      <li>Маленькие, тихие, атмосферные</li>
      <li>Бариста обжаривает зёрна сам</li>
      <li>Медленное заваривание — pour-over, сифон</li>
    </ul>
    <img src="${r.kissaten}" />
    
    <p><strong>Философия:</strong></p>
    <ul>
      <li><strong>Процесс важнее результата</strong> — как чайная церемония</li>
      <li>Каждая чашка — ритуал, произведение искусства</li>
      <li>Можно сидеть часами, никто не торопит</li>
      <li>Тишина, созерцание, медитация с кофе</li>
    </ul>
    
    <img src="${r.kissaten1}" />
    
    <h3>Сужду прочим, дрип-пакет — японское изобретение 📦</h3>
    <p>А белорусскую конфету с вишней и перцем будем считать некоторым приближением к сакуре </p>

    <img src="${r.sakura}" />
    <h3>Задание 🎯</h3>
    <ol>
      <li>Выпить японский продукт, закусить белорусским</li>
      <li>Начать откладывать деньги на поездку в Японию, потому что цветение сакуры само себя не посмотрит</li>
    </ol>

    <img src="${r.sakura1}" />
  `,zebra_message:`
    <h3>⚠️ ВНИМАНИЕ! КОФЕИН! ⚠️</h3>
    
    <p style="background-color: #ffebee; border: 2px solid #f44336; padding: 15px; border-radius: 8px; font-weight: bold; color: #c62828;">
      🚨 ЗЁБРА! Сегодня НЕ декаф! Настоящий кофе с КОФЕИНОМ! 🚨<br>
      Kamakura Royal Blend — мощный японский кофе. Горечь 5/5. ⚔️<br>
      <strong>Если нельзя кофеин — НЕ ПЕЙ!</strong> Отложи на потом.<br>
      Но если можешь — добро пожаловать в мир японского кофе! 🇯🇵
    </p>
    
    <p><strong>Камакура — город самураев, дзен и драконов 🏯🐉 История:</strong></p>
    <ul>
      <li>50 км от Токио, на берегу Тихого океана</li>
      <li><strong>1185-1333:</strong> Столица Японии, первый сёгунат (военное правительство самураев)</li>
      <li>Здесь зародилась культура самураев и дзен-буддизма</li>
      <li><strong>Великий Будда</strong> — бронзовая статуя 13 м, 1252 год. Стоит под открытым небом (храм разрушило цунами в 1498)</li>
      <li>Там за сотню садов и святилищ, и найти городскую фотку с обычными домами практически невозможно.</li>
    </ul>
    <img src="${r.kamakura}" />

    <h4>Легенды о драконах Камакуры 🐉: их там немало, и некоторые отличаются от "ну, у нас тут есть белый дракон, который охраняет город"</h4>

    <p><strong>1. Дракон богатства и традиция мыть деньги:</strong></p>
    <ul>
      <li>В Камакуре есть пещера-святилище <strong>Дзэниарай Бентен</strong> ("мытьё денег")</li>
      <li><strong>1185 год:</strong> Сёгун Минамото-но Ёритомо увидел сон</li>
      <li>Ему явился <strong>дракон-бог воды</strong> и сказал: "В пещере есть священный источник. Помолись там — и твои владения станут процветающими"</li>
      <li>Ёритомо нашёл пещеру, помолился → его правление стало успешным, Камакура стала столицей</li>
      <li><strong>Традиция:</strong> В пещере течёт вода из источника дракона. Японцы моют в ней деньги (купюры, монеты)</li>
      <li>Поверье: <strong>Помой деньги в воде дракона и потрать их → вернутся умноженными!</strong></li>
      <li><strong>Важно:</strong> Нельзя копить вымытые деньги — надо потратить, тогда вернутся</li>
      <li>Очень популярно у японцев (особенно в Новый год — моют деньги на удачу!)</li>
    </ul>
        <img src="${r.dragon1}" />
    <p><strong>2. Пятиголовый дракон и богиня Бентен:</strong></p>
    <ul>
      <li>В древности в море у Камакуры жил <strong>пятиголовый дракон-людоед</strong></li>
      <li>Терроризировал рыбаков, требовал жертвоприношений</li>
      <li>С неба спустилась богиня Бентен (богиня воды, музыки, богатства)</li>
      <li>Дракон влюбился в неё</li>
      <li>Бентен сказала: "Я выйду за тебя замуж, если перестанешь есть людей и станешь защитником"</li>
      <li>Дракон согласился → превратился в остров Эносима (виден из Камакуры!)</li>
      <li>Теперь он защищает местных жителей вместо того, чтобы их есть</li>
      <li><strong>Романтика:</strong> Злой дракон изменился ради любви 💕🐉</li>
    </ul>
    
    
    <p>Какой-то из них еще повышает женскую и мужскую плодовитость. Возможно, оба. Возможно, это вообще одна история, источники путанны.</p>
    
    <img src="${r.dragon}" />
    
    <h3>Япония и кофе — парадокс ☕🍵</h3>
    
    <p><strong>Парадокс:</strong> Япония — чайная страна (матча, сенча), но японцы — <strong>одни из лучших обжарщиков кофе в мире</strong>.</p>
    
    <p><strong>Почему любят тёмную обжарку:</strong></p>
    <ul>
      <li><strong>Воспитаны чаем:</strong> Зелёный чай и матча горькие → японцы привыкли к горечи</li>
      <li>Горечь = зрелость, глубина, серьёзность (не детская сладость!)</li>
      <li>Тёмная обжарка даёт минимум кислотности, максимум плотности</li>
      <li><strong>История:</strong> Послевоенная Япония — кофе был дорогим, обжаривали темнее для насыщенности</li>
    </ul>
    
    
    <h3>Kissaten — японские кофейни 🏮☕</h3>
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Традиционные японские кофейни (расцвет 1970-1990-е)</li>
      <li>Маленькие, тихие, атмосферные</li>
      <li>Бариста обжаривает зёрна сам</li>
      <li>Медленное заваривание — pour-over, сифон</li>
    </ul>
    <img src="${r.kissaten}" />
    
    <p><strong>Философия:</strong></p>
    <ul>
      <li><strong>Процесс важнее результата</strong> — как чайная церемония</li>
      <li>Каждая чашка — ритуал, произведение искусства</li>
      <li>Можно сидеть часами, никто не торопит</li>
      <li>Тишина, созерцание, медитация с кофе</li>
    </ul>
    
    <img src="${r.kissaten1}" />
    
    <h3>Сужду прочим, дрип-пакет — японское изобретение 📦</h3>
    <p>А белорусскую конфету с вишней и перцем будем считать некоторым приближением к сакуре </p>

    <img src="${r.sakura}" />

    <h3>Задание 🎯</h3>
    <ol>
      <li>Выпить японский продукт, закусить белорусским</li>
      <li>Начать откладывать деньги на поездку в Японию, потому что цветение сакуры само себя не посмотрит</li>
    </ol>

    <img src="${r.sakura1}" />
    `},{day:16,date:"2026-01-04",tanya_gift:"Сова-концентрат",zebra_gift:"Сова-концентрат",tanya_bonus:"Сироп Мисо-карамель",zebra_bonus:"Сироп Мисо-карамель",title:"День 15",tanya_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>",zebra_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>"},{day:17,date:"2026-01-05",tanya_gift:"Yellow Submarine",zebra_gift:"Yellow Submarine (х2)",tanya_bonus:"Протеиновое печенье",zebra_bonus:"Протеиновое печенье (х2)",title:"День 16",tanya_message:"<p>Подарок: Yellow Submarine</p><p>Бонус: Протеиновое печенье</p>",zebra_message:"<p>Подарок: Yellow Submarine (х2)</p><p>Бонус: Протеиновое печенье (х2)</p>"},{day:18,date:"2026-01-06",tanya_gift:"Турецкий Mehmet Efendi",zebra_gift:"Турецкий Mehmet Efendi (х2)",tanya_bonus:"Матча латте",zebra_bonus:"Матча латте (х2)",title:"День 17",tanya_message:"<p>Подарок: Турецкий Mehmet Efendi</p><p>Бонус: Матча латте</p>",zebra_message:"<p>Подарок: Турецкий Mehmet Efendi (х2)</p><p>Бонус: Матча латте (х2)</p>"},{day:19,date:"2026-01-07",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Шоколадная бомбочка",zebra_bonus:"Шоколадная бомбочка (х2)",title:"День 18",tanya_message:"<p>Подарок: Круиз: по-венски</p><p>Бонус: Шоколадная бомбочка</p>",zebra_message:"<p>Подарок: Круиз: по-индийски (х2)</p><p>Бонус: Шоколадная бомбочка (х2)</p>"},{day:20,date:"2026-01-08",tanya_gift:"Mitsumoto японский",zebra_gift:"Mitsumoto японский (х2)",tanya_bonus:"Рождественский чай",zebra_bonus:"Рождественский чай (х2)",title:"День 19",tanya_message:"<p>Подарок: Mitsumoto японский</p><p>Бонус: Рождественский чай</p>",zebra_message:"<p>Подарок: Mitsumoto японский (х2)</p><p>Бонус: Рождественский чай (х2)</p>"},{day:21,date:"2026-01-09",tanya_gift:"KopiCat Вьетнам",zebra_gift:"KopiCat Вьетнам (х2)",tanya_bonus:"Экзотический чай",zebra_bonus:"Экзотический чай (х2)",title:"День 20",tanya_message:"<p>Подарок: KopiCat Вьетнам</p><p>Бонус: Экзотический чай</p>",zebra_message:"<p>Подарок: KopiCat Вьетнам (х2)</p><p>Бонус: Экзотический чай (х2)</p>"},{day:22,date:"2026-01-10",tanya_gift:"Армянский 3в1",zebra_gift:"Армянский 3в1 (х2)",tanya_bonus:"Миндальный Вкусвилл",zebra_bonus:"Миндальный Вкусвилл (х2)",title:"День 21",tanya_message:"<p>Подарок: Армянский 3в1</p><p>Бонус: Миндальный Вкусвилл</p>",zebra_message:"<p>Подарок: Армянский 3в1 (х2)</p><p>Бонус: Миндальный Вкусвилл (х2)</p>"},{day:23,date:"2026-01-11",tanya_gift:"Декаф Питерский",zebra_gift:"Декаф IL DA DA MA",tanya_bonus:"Чай-книга гаданий",zebra_bonus:"Чай-книга гаданий (х2)",title:"День 22",tanya_message:"<p>Подарок: Декаф Питерский</p><p>Бонус: Чай-книга гаданий</p>",zebra_message:"<p>Подарок: Декаф IL DA DA MA</p><p>Бонус: Чай-книга гаданий (х2)</p>"},{day:24,date:"2026-01-12",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:"<p>Подарок: Декаф Гватемала</p><p>Бонус: Бэггинс кофе</p>",zebra_message:"<p>Подарок: Декаф Мексика (х2)</p><p>Бонус: Бэггинс кофе (х2)</p>"},{day:25,date:"2026-01-13",tanya_gift:"Рождественский с лошадью",zebra_gift:"Рождественский с лошадью (х2)",tanya_bonus:"Какао с опоссумом",zebra_bonus:"Какао с опоссумом (х2)",title:"День 24",tanya_message:"<p>Подарок: Рождественский с лошадью</p><p>Бонус: Какао с опоссумом</p>",zebra_message:"<p>Подарок: Рождественский с лошадью (х2)</p><p>Бонус: Какао с опоссумом (х2)</p>"},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function _1({currentDate:v,userName:w}){const[C,p]=zl.useState(()=>Yf()),[E,x]=zl.useState(null),q=D=>{const N=Qi(D);if(Li(N,v)&&(x(D),!C.has(D))){const K=Xm(D);p(K)}},P=()=>{x(null)},T=[...Array.from({length:25},(D,N)=>N+1)].sort((D,N)=>{const K=Qi(D),yl=Qi(N),vl=mo(K,v),_l=mo(yl,v),Ul=C.has(D),bl=C.has(N),El=Li(K,v),ul=Li(yl,v),Tl=El&&!Ul,Vl=ul&&!bl,Sl=vl&&Ul,$=_l&&bl,Bl=!El,Jl=!ul,Ft=Ul&&!vl&&El,pt=bl&&!_l&&ul;return Tl&&!Vl?-1:!Tl&&Vl?1:Tl&&Vl?D-N:Sl&&!$?-1:!Sl&&$?1:Bl&&!Jl?-1:!Bl&&Jl?1:Bl&&Jl||Ft&&pt?D-N:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:T.map(D=>{const N=Qi(D),K=Li(N,v),yl=C.has(D),vl=mo(N,v);return d.jsx(Wm,{windowNumber:D,isActive:K,isOpened:yl,isExactMatch:vl,onClick:()=>q(D)},D)})}),E!==null&&(()=>{const D=z1[E-1],N=w==="Tanya"?D.tanya_message:w==="Zebra"?D.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(Fm,{windowNumber:E,message:N,onClose:P})})()]})}function T1(){const[v,w]=zl.useState(!1),C=zl.useRef(null),[p,E]=zl.useState(!1);zl.useEffect(()=>{const q=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",q),q==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),E(!0))},[]),zl.useEffect(()=>{if(!p)return;const q=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),w(!0),E(!1),window.removeEventListener("pointerdown",q),window.removeEventListener("keydown",q)};return window.addEventListener("pointerdown",q,{once:!0}),window.addEventListener("keydown",q,{once:!0}),()=>{window.removeEventListener("pointerdown",q),window.removeEventListener("keydown",q)}},[p]),zl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",v,"ref=",C.current),!C.current)return;const q=C.current;if(v)console.debug("[AudioControls] calling play()"),q.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),E(!0))});else{console.debug("[AudioControls] calling pause()");try{q.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[v]);const x=()=>{const q=!v;console.debug("[AudioControls] toggleMusic ->",q),w(q),localStorage.setItem("musicEnabled",String(q))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${v?"audio-active":""}`,onClick:x,title:"Toggle Christmas Music",children:[v?d.jsx(Rm,{size:20}):d.jsx(Hm,{size:20}),d.jsx(Cm,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:C,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:q=>console.error("[AudioControls] audio event: error",q)})]})}function A1(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((v,w)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},w))})}const M1=()=>new Date;function E1(){const[v,w]=zl.useState(()=>{const x=localStorage.getItem("adventCalendarUser");return x==="Tanya"||x==="Zebra"?x:(localStorage.clear(),null)}),[C,p]=zl.useState(M1),E=x=>{localStorage.clear(),w(x),localStorage.setItem("adventCalendarUser",x)};return zl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);p(U)}catch(q){console.error("Failed to fetch current date:",q),p(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx(Lm,{}),d.jsx(A1,{}),d.jsx(T1,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(Qm,{userName:v,onUserSelect:E}),d.jsx(_1,{currentDate:C,userName:v})]})]})}vm.createRoot(document.getElementById("root")).render(d.jsx(zl.StrictMode,{children:d.jsx(E1,{})}));
