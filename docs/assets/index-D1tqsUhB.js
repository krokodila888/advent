(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))g(w);new MutationObserver(w=>{for(const x of w)if(x.type==="childList")for(const Y of x.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&g(Y)}).observe(document,{childList:!0,subtree:!0});function C(w){const x={};return w.integrity&&(x.integrity=w.integrity),w.referrerPolicy&&(x.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?x.credentials="include":w.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function g(w){if(w.ep)return;w.ep=!0;const x=C(w);fetch(w.href,x)}})();var oo={exports:{}},_n={};var bg;function rm(){if(bg)return _n;bg=1;var v=Symbol.for("react.transitional.element"),M=Symbol.for("react.fragment");function C(g,w,x){var Y=null;if(x!==void 0&&(Y=""+x),w.key!==void 0&&(Y=""+w.key),"key"in w){x={};for(var P in w)P!=="key"&&(x[P]=w[P])}else x=w;return w=x.ref,{$$typeof:v,type:g,key:Y,ref:w!==void 0?w:null,props:x}}return _n.Fragment=M,_n.jsx=C,_n.jsxs=C,_n}var Sg;function cm(){return Sg||(Sg=1,oo.exports=rm()),oo.exports}var p=cm(),ro={exports:{}},Q={};var zg;function fm(){if(zg)return Q;zg=1;var v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),K=Symbol.iterator;function yl(c){return c===null||typeof c!="object"?null:(c=K&&c[K]||c["@@iterator"],typeof c=="function"?c:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ul={};function bl(c,E,j){this.props=c,this.context=E,this.refs=Ul,this.updater=j||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(c,E){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,E,"setState")},bl.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function wl(){}wl.prototype=bl.prototype;function sl(c,E,j){this.props=c,this.context=E,this.refs=Ul,this.updater=j||vl}var Tl=sl.prototype=new wl;Tl.constructor=sl,_l(Tl,bl.prototype),Tl.isPureReactComponent=!0;var Zl=Array.isArray;function Sl(){}var J={H:null,A:null,T:null,S:null},Rl=Object.prototype.hasOwnProperty;function $l(c,E,j){var R=j.ref;return{$$typeof:v,type:c,key:E,ref:R!==void 0?R:null,props:j}}function Ft(c,E){return $l(c.type,E,c.props)}function pt(c){return typeof c=="object"&&c!==null&&c.$$typeof===v}function kl(c){var E={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(j){return E[j]})}var Aa=/\/+/g;function xt(c,E){return typeof c=="object"&&c!==null&&c.key!=null?kl(""+c.key):E.toString(36)}function At(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Sl,Sl):(c.status="pending",c.then(function(E){c.status==="pending"&&(c.status="fulfilled",c.value=E)},function(E){c.status==="pending"&&(c.status="rejected",c.reason=E)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function z(c,E,j,R,L){var $=typeof c;($==="undefined"||$==="boolean")&&(c=null);var nl=!1;if(c===null)nl=!0;else switch($){case"bigint":case"string":case"number":nl=!0;break;case"object":switch(c.$$typeof){case v:case M:nl=!0;break;case D:return nl=c._init,z(nl(c._payload),E,j,R,L)}}if(nl)return L=L(c),nl=R===""?"."+xt(c,0):R,Zl(L)?(j="",nl!=null&&(j=nl.replace(Aa,"$&/")+"/"),z(L,E,j,"",function(Oe){return Oe})):L!=null&&(pt(L)&&(L=Ft(L,j+(L.key==null||c&&c.key===L.key?"":(""+L.key).replace(Aa,"$&/")+"/")+nl)),E.push(L)),1;nl=0;var Kl=R===""?".":R+":";if(Zl(c))for(var Ml=0;Ml<c.length;Ml++)R=c[Ml],$=Kl+xt(R,Ml),nl+=z(R,E,j,$,L);else if(Ml=yl(c),typeof Ml=="function")for(c=Ml.call(c),Ml=0;!(R=c.next()).done;)R=R.value,$=Kl+xt(R,Ml++),nl+=z(R,E,j,$,L);else if($==="object"){if(typeof c.then=="function")return z(At(c),E,j,R,L);throw E=String(c),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return nl}function O(c,E,j){if(c==null)return c;var R=[],L=0;return z(c,R,"","",function($){return E.call(j,$,L++)}),R}function G(c){if(c._status===-1){var E=c._result;E=E(),E.then(function(j){(c._status===0||c._status===-1)&&(c._status=1,c._result=j)},function(j){(c._status===0||c._status===-1)&&(c._status=2,c._result=j)}),c._status===-1&&(c._status=0,c._result=E)}if(c._status===1)return c._result.default;throw c._result}var ol=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},gl={map:O,forEach:function(c,E,j){O(c,function(){E.apply(this,arguments)},j)},count:function(c){var E=0;return O(c,function(){E++}),E},toArray:function(c){return O(c,function(E){return E})||[]},only:function(c){if(!pt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return Q.Activity=N,Q.Children=gl,Q.Component=bl,Q.Fragment=C,Q.Profiler=w,Q.PureComponent=sl,Q.StrictMode=g,Q.Suspense=U,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,Q.__COMPILER_RUNTIME={__proto__:null,c:function(c){return J.H.useMemoCache(c)}},Q.cache=function(c){return function(){return c.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(c,E,j){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var R=_l({},c.props),L=c.key;if(E!=null)for($ in E.key!==void 0&&(L=""+E.key),E)!Rl.call(E,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&E.ref===void 0||(R[$]=E[$]);var $=arguments.length-2;if($===1)R.children=j;else if(1<$){for(var nl=Array($),Kl=0;Kl<$;Kl++)nl[Kl]=arguments[Kl+2];R.children=nl}return $l(c.type,L,R)},Q.createContext=function(c){return c={$$typeof:Y,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:x,_context:c},c},Q.createElement=function(c,E,j){var R,L={},$=null;if(E!=null)for(R in E.key!==void 0&&($=""+E.key),E)Rl.call(E,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(L[R]=E[R]);var nl=arguments.length-2;if(nl===1)L.children=j;else if(1<nl){for(var Kl=Array(nl),Ml=0;Ml<nl;Ml++)Kl[Ml]=arguments[Ml+2];L.children=Kl}if(c&&c.defaultProps)for(R in nl=c.defaultProps,nl)L[R]===void 0&&(L[R]=nl[R]);return $l(c,$,L)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(c){return{$$typeof:P,render:c}},Q.isValidElement=pt,Q.lazy=function(c){return{$$typeof:D,_payload:{_status:-1,_result:c},_init:G}},Q.memo=function(c,E){return{$$typeof:T,type:c,compare:E===void 0?null:E}},Q.startTransition=function(c){var E=J.T,j={};J.T=j;try{var R=c(),L=J.S;L!==null&&L(j,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Sl,ol)}catch($){ol($)}finally{E!==null&&j.types!==null&&(E.types=j.types),J.T=E}},Q.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},Q.use=function(c){return J.H.use(c)},Q.useActionState=function(c,E,j){return J.H.useActionState(c,E,j)},Q.useCallback=function(c,E){return J.H.useCallback(c,E)},Q.useContext=function(c){return J.H.useContext(c)},Q.useDebugValue=function(){},Q.useDeferredValue=function(c,E){return J.H.useDeferredValue(c,E)},Q.useEffect=function(c,E){return J.H.useEffect(c,E)},Q.useEffectEvent=function(c){return J.H.useEffectEvent(c)},Q.useId=function(){return J.H.useId()},Q.useImperativeHandle=function(c,E,j){return J.H.useImperativeHandle(c,E,j)},Q.useInsertionEffect=function(c,E){return J.H.useInsertionEffect(c,E)},Q.useLayoutEffect=function(c,E){return J.H.useLayoutEffect(c,E)},Q.useMemo=function(c,E){return J.H.useMemo(c,E)},Q.useOptimistic=function(c,E){return J.H.useOptimistic(c,E)},Q.useReducer=function(c,E,j){return J.H.useReducer(c,E,j)},Q.useRef=function(c){return J.H.useRef(c)},Q.useState=function(c){return J.H.useState(c)},Q.useSyncExternalStore=function(c,E,j){return J.H.useSyncExternalStore(c,E,j)},Q.useTransition=function(){return J.H.useTransition()},Q.version="19.2.3",Q}var _g;function ho(){return _g||(_g=1,ro.exports=fm()),ro.exports}var zl=ho(),co={exports:{}},Tn={},fo={exports:{}},go={};var Tg;function gm(){return Tg||(Tg=1,(function(v){function M(z,O){var G=z.length;z.push(O);l:for(;0<G;){var ol=G-1>>>1,gl=z[ol];if(0<w(gl,O))z[ol]=O,z[G]=gl,G=ol;else break l}}function C(z){return z.length===0?null:z[0]}function g(z){if(z.length===0)return null;var O=z[0],G=z.pop();if(G!==O){z[0]=G;l:for(var ol=0,gl=z.length,c=gl>>>1;ol<c;){var E=2*(ol+1)-1,j=z[E],R=E+1,L=z[R];if(0>w(j,G))R<gl&&0>w(L,j)?(z[ol]=L,z[R]=G,ol=R):(z[ol]=j,z[E]=G,ol=E);else if(R<gl&&0>w(L,G))z[ol]=L,z[R]=G,ol=R;else break l}}return O}function w(z,O){var G=z.sortIndex-O.sortIndex;return G!==0?G:z.id-O.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;v.unstable_now=function(){return x.now()}}else{var Y=Date,P=Y.now();v.unstable_now=function(){return Y.now()-P}}var U=[],T=[],D=1,N=null,K=3,yl=!1,vl=!1,_l=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,wl=typeof clearTimeout=="function"?clearTimeout:null,sl=typeof setImmediate<"u"?setImmediate:null;function Tl(z){for(var O=C(T);O!==null;){if(O.callback===null)g(T);else if(O.startTime<=z)g(T),O.sortIndex=O.expirationTime,M(U,O);else break;O=C(T)}}function Zl(z){if(_l=!1,Tl(z),!vl)if(C(U)!==null)vl=!0,Sl||(Sl=!0,kl());else{var O=C(T);O!==null&&At(Zl,O.startTime-z)}}var Sl=!1,J=-1,Rl=5,$l=-1;function Ft(){return Ul?!0:!(v.unstable_now()-$l<Rl)}function pt(){if(Ul=!1,Sl){var z=v.unstable_now();$l=z;var O=!0;try{l:{vl=!1,_l&&(_l=!1,wl(J),J=-1),yl=!0;var G=K;try{t:{for(Tl(z),N=C(U);N!==null&&!(N.expirationTime>z&&Ft());){var ol=N.callback;if(typeof ol=="function"){N.callback=null,K=N.priorityLevel;var gl=ol(N.expirationTime<=z);if(z=v.unstable_now(),typeof gl=="function"){N.callback=gl,Tl(z),O=!0;break t}N===C(U)&&g(U),Tl(z)}else g(U);N=C(U)}if(N!==null)O=!0;else{var c=C(T);c!==null&&At(Zl,c.startTime-z),O=!1}}break l}finally{N=null,K=G,yl=!1}O=void 0}}finally{O?kl():Sl=!1}}}var kl;if(typeof sl=="function")kl=function(){sl(pt)};else if(typeof MessageChannel<"u"){var Aa=new MessageChannel,xt=Aa.port2;Aa.port1.onmessage=pt,kl=function(){xt.postMessage(null)}}else kl=function(){bl(pt,0)};function At(z,O){J=bl(function(){z(v.unstable_now())},O)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(z){z.callback=null},v.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rl=0<z?Math.floor(1e3/z):5},v.unstable_getCurrentPriorityLevel=function(){return K},v.unstable_next=function(z){switch(K){case 1:case 2:case 3:var O=3;break;default:O=K}var G=K;K=O;try{return z()}finally{K=G}},v.unstable_requestPaint=function(){Ul=!0},v.unstable_runWithPriority=function(z,O){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=K;K=z;try{return O()}finally{K=G}},v.unstable_scheduleCallback=function(z,O,G){var ol=v.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ol+G:ol):G=ol,z){case 1:var gl=-1;break;case 2:gl=250;break;case 5:gl=1073741823;break;case 4:gl=1e4;break;default:gl=5e3}return gl=G+gl,z={id:D++,callback:O,priorityLevel:z,startTime:G,expirationTime:gl,sortIndex:-1},G>ol?(z.sortIndex=G,M(T,z),C(U)===null&&z===C(T)&&(_l?(wl(J),J=-1):_l=!0,At(Zl,G-ol))):(z.sortIndex=gl,M(U,z),vl||yl||(vl=!0,Sl||(Sl=!0,kl()))),z},v.unstable_shouldYield=Ft,v.unstable_wrapCallback=function(z){var O=K;return function(){var G=K;K=O;try{return z.apply(this,arguments)}finally{K=G}}}})(go)),go}var Ag;function pm(){return Ag||(Ag=1,fo.exports=gm()),fo.exports}var po={exports:{}},Vl={};var Eg;function dm(){if(Eg)return Vl;Eg=1;var v=ho();function M(U){var T="https://react.dev/errors/"+U;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)T+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+U+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(){}var g={d:{f:C,r:function(){throw Error(M(522))},D:C,C,L:C,m:C,X:C,S:C,M:C},p:0,findDOMNode:null},w=Symbol.for("react.portal");function x(U,T,D){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:N==null?null:""+N,children:U,containerInfo:T,implementation:D}}var Y=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,T){if(U==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Vl.createPortal=function(U,T){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(M(299));return x(U,T,null,D)},Vl.flushSync=function(U){var T=Y.T,D=g.p;try{if(Y.T=null,g.p=2,U)return U()}finally{Y.T=T,g.p=D,g.d.f()}},Vl.preconnect=function(U,T){typeof U=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,g.d.C(U,T))},Vl.prefetchDNS=function(U){typeof U=="string"&&g.d.D(U)},Vl.preinit=function(U,T){if(typeof U=="string"&&T&&typeof T.as=="string"){var D=T.as,N=P(D,T.crossOrigin),K=typeof T.integrity=="string"?T.integrity:void 0,yl=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;D==="style"?g.d.S(U,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:N,integrity:K,fetchPriority:yl}):D==="script"&&g.d.X(U,{crossOrigin:N,integrity:K,fetchPriority:yl,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Vl.preinitModule=function(U,T){if(typeof U=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var D=P(T.as,T.crossOrigin);g.d.M(U,{crossOrigin:D,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&g.d.M(U)},Vl.preload=function(U,T){if(typeof U=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var D=T.as,N=P(D,T.crossOrigin);g.d.L(U,D,{crossOrigin:N,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Vl.preloadModule=function(U,T){if(typeof U=="string")if(T){var D=P(T.as,T.crossOrigin);g.d.m(U,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:D,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else g.d.m(U)},Vl.requestFormReset=function(U){g.d.r(U)},Vl.unstable_batchedUpdates=function(U,T){return U(T)},Vl.useFormState=function(U,T,D){return Y.H.useFormState(U,T,D)},Vl.useFormStatus=function(){return Y.H.useHostTransitionStatus()},Vl.version="19.2.3",Vl}var wg;function mm(){if(wg)return po.exports;wg=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(M){console.error(M)}}return v(),po.exports=dm(),po.exports}var Mg;function hm(){if(Mg)return Tn;Mg=1;var v=pm(),M=ho(),C=mm();function g(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function x(l){var t=l,a=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(a=t.return),l=t.return;while(l)}return t.tag===3?a:null}function Y(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(x(l)!==l)throw Error(g(188))}function T(l){var t=l.alternate;if(!t){if(t=x(l),t===null)throw Error(g(188));return t!==l?null:l}for(var a=l,e=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(e=n.return,e!==null){a=e;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return U(n),l;if(i===e)return U(n),t;i=i.sibling}throw Error(g(188))}if(a.return!==e.return)a=n,e=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,e=i;break}if(s===e){u=!0,e=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,e=n;break}if(s===e){u=!0,e=i,a=n;break}s=s.sibling}if(!u)throw Error(g(189))}}if(a.alternate!==e)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?l:t}function D(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=D(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,K=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),wl=Symbol.for("react.consumer"),sl=Symbol.for("react.context"),Tl=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Rl=Symbol.for("react.lazy"),$l=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function kl(l){return l===null||typeof l!="object"?null:(l=pt&&l[pt]||l["@@iterator"],typeof l=="function"?l:null)}var Aa=Symbol.for("react.client.reference");function xt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Aa?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case _l:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case Zl:return"Suspense";case Sl:return"SuspenseList";case $l:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case sl:return l.displayName||"Context";case wl:return(l._context.displayName||"Context")+".Consumer";case Tl:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case J:return t=l.displayName||null,t!==null?t:xt(l.type)||"Memo";case Rl:t=l._payload,l=l._init;try{return xt(l(t))}catch{}}return null}var At=Array.isArray,z=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ol=[],gl=-1;function c(l){return{current:l}}function E(l){0>gl||(l.current=ol[gl],ol[gl]=null,gl--)}function j(l,t){gl++,ol[gl]=l.current,l.current=t}var R=c(null),L=c(null),$=c(null),nl=c(null);function Kl(l,t){switch(j($,t),j(L,l),j(R,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Qf(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Qf(t),l=Lf(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}E(R),j(R,l)}function Ml(){E(R),E(L),E($)}function Oe(l){l.memoizedState!==null&&j(nl,l);var t=R.current,a=Lf(t,l.type);t!==a&&(j(L,l),j(R,a))}function An(l){L.current===l&&(E(R),E(L)),nl.current===l&&(E(nl),vn._currentValue=G)}var Zi,yo;function Ea(l){if(Zi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Zi=t&&t[1]||"",yo=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zi+l+yo}var Vi=!1;function Ki(l,t){if(!l||Vi)return"";Vi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var y=b}Reflect.construct(l,[],A)}else{try{A.call()}catch(b){y=b}l.call(A.prototype)}}else{try{throw Error()}catch(b){y=b}(A=l())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),m=s.split(`
`);for(n=e=0;e<o.length&&!o[e].includes("DetermineComponentFrameRoot");)e++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(e===o.length||n===m.length)for(e=o.length-1,n=m.length-1;1<=e&&0<=n&&o[e]!==m[n];)n--;for(;1<=e&&0<=n;e--,n--)if(o[e]!==m[n]){if(e!==1||n!==1)do if(e--,n--,0>n||o[e]!==m[n]){var S=`
`+o[e].replace(" at new "," at ");return l.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",l.displayName)),S}while(1<=e&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=a}return(a=l?l.displayName||l.name:"")?Ea(a):""}function Xg(l,t){switch(l.tag){case 26:case 27:case 5:return Ea(l.type);case 16:return Ea("Lazy");case 13:return l.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Ki(l.type,!1);case 11:return Ki(l.type.render,!1);case 1:return Ki(l.type,!0);case 31:return Ea("Activity");default:return""}}function vo(l){try{var t="",a=null;do t+=Xg(l,a),a=l,l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ji=Object.prototype.hasOwnProperty,$i=v.unstable_scheduleCallback,ki=v.unstable_cancelCallback,Gg=v.unstable_shouldYield,Qg=v.unstable_requestPaint,et=v.unstable_now,Lg=v.unstable_getCurrentPriorityLevel,bo=v.unstable_ImmediatePriority,So=v.unstable_UserBlockingPriority,En=v.unstable_NormalPriority,Zg=v.unstable_LowPriority,zo=v.unstable_IdlePriority,Vg=v.log,Kg=v.unstable_setDisableYieldValue,De=null,nt=null;function It(l){if(typeof Vg=="function"&&Kg(l),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(De,l)}catch{}}var it=Math.clz32?Math.clz32:kg,Jg=Math.log,$g=Math.LN2;function kg(l){return l>>>=0,l===0?32:31-(Jg(l)/$g|0)|0}var wn=256,Mn=262144,On=4194304;function wa(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Dn(l,t,a){var e=l.pendingLanes;if(e===0)return 0;var n=0,i=l.suspendedLanes,u=l.pingedLanes;l=l.warmLanes;var s=e&134217727;return s!==0?(e=s&~i,e!==0?n=wa(e):(u&=s,u!==0?n=wa(u):a||(a=s&~l,a!==0&&(n=wa(a))))):(s=e&~i,s!==0?n=wa(s):u!==0?n=wa(u):a||(a=e&~l,a!==0&&(n=wa(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function je(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wg(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var l=On;return On<<=1,(On&62914560)===0&&(On=4194304),l}function Wi(l){for(var t=[],a=0;31>a;a++)t.push(l);return t}function Ce(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Fg(l,t,a,e,n,i){var u=l.pendingLanes;l.pendingLanes=a,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=a,l.entangledLanes&=a,l.errorRecoveryDisabledLanes&=a,l.shellSuspendCounter=0;var s=l.entanglements,o=l.expirationTimes,m=l.hiddenUpdates;for(a=u&~a;0<a;){var S=31-it(a),A=1<<S;s[S]=0,o[S]=-1;var y=m[S];if(y!==null)for(m[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}a&=~A}e!==0&&To(l,e,0),i!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=i&~(u&~t))}function To(l,t,a){l.pendingLanes|=t,l.suspendedLanes&=~t;var e=31-it(t);l.entangledLanes|=t,l.entanglements[e]=l.entanglements[e]|1073741824|a&261930}function Ao(l,t){var a=l.entangledLanes|=t;for(l=l.entanglements;a;){var e=31-it(a),n=1<<e;n&t|l[e]&t&&(l[e]|=t),a&=~n}}function Eo(l,t){var a=t&-t;return a=(a&42)!==0?1:Fi(a),(a&(l.suspendedLanes|t))!==0?0:a}function Fi(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ii(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function wo(){var l=O.p;return l!==0?l:(l=window.event,l===void 0?32:gg(l.type))}function Mo(l,t){var a=O.p;try{return O.p=l,t()}finally{O.p=a}}var Pt=Math.random().toString(36).slice(2),ql="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,Za="__reactContainer$"+Pt,Pi="__reactEvents$"+Pt,Ig="__reactListeners$"+Pt,Pg="__reactHandles$"+Pt,Oo="__reactResources$"+Pt,xe="__reactMarker$"+Pt;function lu(l){delete l[ql],delete l[Wl],delete l[Pi],delete l[Ig],delete l[Pg]}function Va(l){var t=l[ql];if(t)return t;for(var a=l.parentNode;a;){if(t=a[Za]||a[ql]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(l=Wf(l);l!==null;){if(a=l[ql])return a;l=Wf(l)}return t}l=a,a=l.parentNode}return null}function Ka(l){if(l=l[ql]||l[Za]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ne(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(g(33))}function Ja(l){var t=l[Oo];return t||(t=l[Oo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Bl(l){l[xe]=!0}var Do=new Set,jo={};function Ma(l,t){$a(l,t),$a(l+"Capture",t)}function $a(l,t){for(jo[l]=t,l=0;l<t.length;l++)Do.add(t[l])}var lp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},xo={};function tp(l){return Ji.call(xo,l)?!0:Ji.call(Co,l)?!1:lp.test(l)?xo[l]=!0:(Co[l]=!0,!1)}function jn(l,t,a){if(tp(t))if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+a)}}function Cn(l,t,a){if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+a)}}function Nt(l,t,a,e){if(e===null)l.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(a);return}l.setAttributeNS(t,a,""+e)}}function dt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function No(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ap(l,t,a){var e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,i=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function tu(l){if(!l._valueTracker){var t=No(l)?"checked":"value";l._valueTracker=ap(l,t,""+l[t])}}function Uo(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var a=t.getValue(),e="";return l&&(e=No(l)?l.checked?"true":"false":l.value),l=e,l!==a?(t.setValue(l),!0):!1}function xn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ep=/[\n"\\]/g;function mt(l){return l.replace(ep,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function au(l,t,a,e,n,i,u,s){l.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?l.type=u:l.removeAttribute("type"),t!=null?u==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+dt(t)):l.value!==""+dt(t)&&(l.value=""+dt(t)):u!=="submit"&&u!=="reset"||l.removeAttribute("value"),t!=null?eu(l,u,dt(t)):a!=null?eu(l,u,dt(a)):e!=null&&l.removeAttribute("value"),n==null&&i!=null&&(l.defaultChecked=!!i),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.name=""+dt(s):l.removeAttribute("name")}function Ho(l,t,a,e,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){tu(l);return}a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,s||t===l.value||(l.value=t),l.defaultValue=t}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,l.checked=s?l.checked:!!e,l.defaultChecked=!!e,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.name=u),tu(l)}function eu(l,t,a){t==="number"&&xn(l.ownerDocument)===l||l.defaultValue===""+a||(l.defaultValue=""+a)}function ka(l,t,a,e){if(l=l.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<l.length;a++)n=t.hasOwnProperty("$"+l[a].value),l[a].selected!==n&&(l[a].selected=n),n&&e&&(l[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<l.length;n++){if(l[n].value===a){l[n].selected=!0,e&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Ro(l,t,a){if(t!=null&&(t=""+dt(t),t!==l.value&&(l.value=t),a==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=a!=null?""+dt(a):""}function Bo(l,t,a,e){if(t==null){if(e!=null){if(a!=null)throw Error(g(92));if(At(e)){if(1<e.length)throw Error(g(93));e=e[0]}a=e}a==null&&(a=""),t=a}a=dt(t),l.defaultValue=a,e=l.textContent,e===a&&e!==""&&e!==null&&(l.value=e),tu(l)}function Wa(l,t){if(t){var a=l.firstChild;if(a&&a===l.lastChild&&a.nodeType===3){a.nodeValue=t;return}}l.textContent=t}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yo(l,t,a){var e=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":e?l.setProperty(t,a):typeof a!="number"||a===0||np.has(t)?t==="float"?l.cssFloat=a:l[t]=(""+a).trim():l[t]=a+"px"}function qo(l,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(l=l.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="");for(var n in t)e=t[n],t.hasOwnProperty(n)&&a[n]!==e&&Yo(l,n,e)}else for(var i in t)t.hasOwnProperty(i)&&Yo(l,i,t[i])}function nu(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nn(l){return up.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var iu=null;function uu(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fa=null,Ia=null;function Xo(l){var t=Ka(l);if(t&&(l=t.stateNode)){var a=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(au(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=l;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var e=a[t];if(e!==l&&e.form===l.form){var n=e[Wl]||null;if(!n)throw Error(g(90));au(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)e=a[t],e.form===l.form&&Uo(e)}break l;case"textarea":Ro(l,a.value,a.defaultValue);break l;case"select":t=a.value,t!=null&&ka(l,!!a.multiple,t,!1)}}}var su=!1;function Go(l,t,a){if(su)return l(t,a);su=!0;try{var e=l(t);return e}finally{if(su=!1,(Fa!==null||Ia!==null)&&(Si(),Fa&&(t=Fa,l=Ia,Ia=Fa=null,Xo(t),l)))for(t=0;t<l.length;t++)Xo(l[t])}}function Ue(l,t){var a=l.stateNode;if(a===null)return null;var e=a[Wl]||null;if(e===null)return null;a=e[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(l=l.type,e=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!e;break l;default:l=!1}if(l)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Ht)try{var He={};Object.defineProperty(He,"passive",{get:function(){ou=!0}}),window.addEventListener("test",He,He),window.removeEventListener("test",He,He)}catch{ou=!1}var la=null,ru=null,Un=null;function Qo(){if(Un)return Un;var l,t=ru,a=t.length,e,n="value"in la?la.value:la.textContent,i=n.length;for(l=0;l<a&&t[l]===n[l];l++);var u=a-l;for(e=1;e<=u&&t[a-e]===n[i-e];e++);return Un=n.slice(l,1<e?1-e:void 0)}function Hn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Rn(){return!0}function Lo(){return!1}function Fl(l){function t(a,e,n,i,u){this._reactName=a,this._targetInst=n,this.type=e,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in l)l.hasOwnProperty(s)&&(a=l[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rn:Lo,this.isPropagationStopped=Lo,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Fl(Oa),Re=N({},Oa,{view:0,detail:0}),sp=Fl(Re),cu,fu,Be,Yn=N({},Re,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Be&&(Be&&l.type==="mousemove"?(cu=l.screenX-Be.screenX,fu=l.screenY-Be.screenY):fu=cu=0,Be=l),cu)},movementY:function(l){return"movementY"in l?l.movementY:fu}}),Zo=Fl(Yn),op=N({},Yn,{dataTransfer:0}),rp=Fl(op),cp=N({},Re,{relatedTarget:0}),gu=Fl(cp),fp=N({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),gp=Fl(fp),pp=N({},Oa,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),dp=Fl(pp),mp=N({},Oa,{data:0}),Vo=Fl(mp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vp[l])?!!t[l]:!1}function pu(){return bp}var Sp=N({},Re,{key:function(l){if(l.key){var t=hp[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Hn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yp[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(l){return l.type==="keypress"?Hn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Hn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),zp=Fl(Sp),_p=N({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Fl(_p),Tp=N({},Re,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Ap=Fl(Tp),Ep=N({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),wp=Fl(Ep),Mp=N({},Yn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Op=Fl(Mp),Dp=N({},Oa,{newState:0,oldState:0}),jp=Fl(Dp),Cp=[9,13,27,32],du=Ht&&"CompositionEvent"in window,Ye=null;Ht&&"documentMode"in document&&(Ye=document.documentMode);var xp=Ht&&"TextEvent"in window&&!Ye,Jo=Ht&&(!du||Ye&&8<Ye&&11>=Ye),$o=" ",ko=!1;function Wo(l,t){switch(l){case"keyup":return Cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fo(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pa=!1;function Np(l,t){switch(l){case"compositionend":return Fo(t);case"keypress":return t.which!==32?null:(ko=!0,$o);case"textInput":return l=t.data,l===$o&&ko?null:l;default:return null}}function Up(l,t){if(Pa)return l==="compositionend"||!du&&Wo(l,t)?(l=Qo(),Un=ru=la=null,Pa=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jo&&t.locale!=="ko"?null:t.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Io(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Hp[l.type]:t==="textarea"}function Po(l,t,a,e){Fa?Ia?Ia.push(e):Ia=[e]:Fa=e,t=Mi(t,"onChange"),0<t.length&&(a=new Bn("onChange","change",null,a,e),l.push({event:a,listeners:t}))}var qe=null,Xe=null;function Rp(l){Rf(l,0)}function qn(l){var t=Ne(l);if(Uo(t))return l}function lr(l,t){if(l==="change")return t}var tr=!1;if(Ht){var mu;if(Ht){var hu="oninput"in document;if(!hu){var ar=document.createElement("div");ar.setAttribute("oninput","return;"),hu=typeof ar.oninput=="function"}mu=hu}else mu=!1;tr=mu&&(!document.documentMode||9<document.documentMode)}function er(){qe&&(qe.detachEvent("onpropertychange",nr),Xe=qe=null)}function nr(l){if(l.propertyName==="value"&&qn(Xe)){var t=[];Po(t,Xe,l,uu(l)),Go(Rp,t)}}function Bp(l,t,a){l==="focusin"?(er(),qe=t,Xe=a,qe.attachEvent("onpropertychange",nr)):l==="focusout"&&er()}function Yp(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return qn(Xe)}function qp(l,t){if(l==="click")return qn(t)}function Xp(l,t){if(l==="input"||l==="change")return qn(t)}function Gp(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var ut=typeof Object.is=="function"?Object.is:Gp;function Ge(l,t){if(ut(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var a=Object.keys(l),e=Object.keys(t);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var n=a[e];if(!Ji.call(t,n)||!ut(l[n],t[n]))return!1}return!0}function ir(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function ur(l,t){var a=ir(l);l=0;for(var e;a;){if(a.nodeType===3){if(e=l+a.textContent.length,l<=t&&e>=t)return{node:a,offset:t-l};l=e}l:{for(;a;){if(a.nextSibling){a=a.nextSibling;break l}a=a.parentNode}a=void 0}a=ir(a)}}function sr(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?sr(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function or(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=xn(l.document);t instanceof l.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)l=t.contentWindow;else break;t=xn(l.document)}return t}function yu(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Qp=Ht&&"documentMode"in document&&11>=document.documentMode,le=null,vu=null,Qe=null,bu=!1;function rr(l,t,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||le==null||le!==xn(e)||(e=le,"selectionStart"in e&&yu(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Qe&&Ge(Qe,e)||(Qe=e,e=Mi(vu,"onSelect"),0<e.length&&(t=new Bn("onSelect","select",null,t,a),l.push({event:t,listeners:e}),t.target=le)))}function Da(l,t){var a={};return a[l.toLowerCase()]=t.toLowerCase(),a["Webkit"+l]="webkit"+t,a["Moz"+l]="moz"+t,a}var te={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Su={},cr={};Ht&&(cr=document.createElement("div").style,"AnimationEvent"in window||(delete te.animationend.animation,delete te.animationiteration.animation,delete te.animationstart.animation),"TransitionEvent"in window||delete te.transitionend.transition);function ja(l){if(Su[l])return Su[l];if(!te[l])return l;var t=te[l],a;for(a in t)if(t.hasOwnProperty(a)&&a in cr)return Su[l]=t[a];return l}var fr=ja("animationend"),gr=ja("animationiteration"),pr=ja("animationstart"),Lp=ja("transitionrun"),Zp=ja("transitionstart"),Vp=ja("transitioncancel"),dr=ja("transitionend"),mr=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Et(l,t){mr.set(l,t),Ma(t,[l])}var Xn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ht=[],ae=0,_u=0;function Gn(){for(var l=ae,t=_u=ae=0;t<l;){var a=ht[t];ht[t++]=null;var e=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,e!==null&&n!==null){var u=e.pending;u===null?n.next=n:(n.next=u.next,u.next=n),e.pending=n}i!==0&&hr(a,n,i)}}function Qn(l,t,a,e){ht[ae++]=l,ht[ae++]=t,ht[ae++]=a,ht[ae++]=e,_u|=e,l.lanes|=e,l=l.alternate,l!==null&&(l.lanes|=e)}function Tu(l,t,a,e){return Qn(l,t,a,e),Ln(l)}function Ca(l,t){return Qn(l,null,null,t),Ln(l)}function hr(l,t,a){l.lanes|=a;var e=l.alternate;e!==null&&(e.lanes|=a);for(var n=!1,i=l.return;i!==null;)i.childLanes|=a,e=i.alternate,e!==null&&(e.childLanes|=a),i.tag===22&&(l=i.stateNode,l===null||l._visibility&1||(n=!0)),l=i,i=i.return;return l.tag===3?(i=l.stateNode,n&&t!==null&&(n=31-it(a),l=i.hiddenUpdates,e=l[n],e===null?l[n]=[t]:e.push(t),t.lane=a|536870912),i):null}function Ln(l){if(50<fn)throw fn=0,xs=null,Error(g(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ee={};function Kp(l,t,a,e){this.tag=l,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(l,t,a,e){return new Kp(l,t,a,e)}function Au(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var a=l.alternate;return a===null?(a=st(l.tag,t,l.key,l.mode),a.elementType=l.elementType,a.type=l.type,a.stateNode=l.stateNode,a.alternate=l,l.alternate=a):(a.pendingProps=t,a.type=l.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=l.flags&65011712,a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,t=l.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=l.sibling,a.index=l.index,a.ref=l.ref,a.refCleanup=l.refCleanup,a}function yr(l,t){l.flags&=65011714;var a=l.alternate;return a===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,t=a.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Zn(l,t,a,e,n,i){var u=0;if(e=l,typeof l=="function")Au(l)&&(u=1);else if(typeof l=="string")u=Fd(l,a,R.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case $l:return l=st(31,a,t,n),l.elementType=$l,l.lanes=i,l;case _l:return xa(a.children,n,i,t);case Ul:u=8,n|=24;break;case bl:return l=st(12,a,t,n|2),l.elementType=bl,l.lanes=i,l;case Zl:return l=st(13,a,t,n),l.elementType=Zl,l.lanes=i,l;case Sl:return l=st(19,a,t,n),l.elementType=Sl,l.lanes=i,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case sl:u=10;break l;case wl:u=9;break l;case Tl:u=11;break l;case J:u=14;break l;case Rl:u=16,e=null;break l}u=29,a=Error(g(130,l===null?"null":typeof l,"")),e=null}return t=st(u,a,t,n),t.elementType=l,t.type=e,t.lanes=i,t}function xa(l,t,a,e){return l=st(7,l,e,t),l.lanes=a,l}function Eu(l,t,a){return l=st(6,l,null,t),l.lanes=a,l}function vr(l){var t=st(18,null,null,0);return t.stateNode=l,t}function wu(l,t,a){return t=st(4,l.children!==null?l.children:[],l.key,t),t.lanes=a,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var br=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var a=br.get(l);return a!==void 0?a:(t={value:l,source:t,stack:vo(t)},br.set(l,t),t)}return{value:l,source:t,stack:vo(t)}}var ne=[],ie=0,Vn=null,Le=0,vt=[],bt=0,ta=null,Ot=1,Dt="";function Bt(l,t){ne[ie++]=Le,ne[ie++]=Vn,Vn=l,Le=t}function Sr(l,t,a){vt[bt++]=Ot,vt[bt++]=Dt,vt[bt++]=ta,ta=l;var e=Ot;l=Dt;var n=32-it(e)-1;e&=~(1<<n),a+=1;var i=32-it(t)+n;if(30<i){var u=n-n%5;i=(e&(1<<u)-1).toString(32),e>>=u,n-=u,Ot=1<<32-it(t)+n|a<<n|e,Dt=i+l}else Ot=1<<i|a<<n|e,Dt=l}function Mu(l){l.return!==null&&(Bt(l,1),Sr(l,1,0))}function Ou(l){for(;l===Vn;)Vn=ne[--ie],ne[ie]=null,Le=ne[--ie],ne[ie]=null;for(;l===ta;)ta=vt[--bt],vt[bt]=null,Dt=vt[--bt],vt[bt]=null,Ot=vt[--bt],vt[bt]=null}function zr(l,t){vt[bt++]=Ot,vt[bt++]=Dt,vt[bt++]=ta,Ot=t.id,Dt=t.overflow,ta=l}var Xl=null,dl=null,ll=!1,aa=null,St=!1,Du=Error(g(519));function ea(l){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ze(yt(t,l)),Du}function _r(l){var t=l.stateNode,a=l.type,e=l.memoizedProps;switch(t[ql]=l,t[Wl]=e,a){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(a=0;a<pn.length;a++)W(pn[a],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Ho(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Bo(t,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||e.suppressHydrationWarning===!0||Xf(t.textContent,a)?(e.popover!=null&&(W("beforetoggle",t),W("toggle",t)),e.onScroll!=null&&W("scroll",t),e.onScrollEnd!=null&&W("scrollend",t),e.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ea(l,!0)}function Tr(l){for(Xl=l.return;Xl;)switch(Xl.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Xl=Xl.return}}function ue(l){if(l!==Xl)return!1;if(!ll)return Tr(l),ll=!0,!1;var t=l.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=l.type,a=!(a!=="form"&&a!=="button")||Js(l.type,l.memoizedProps)),a=!a),a&&dl&&ea(l),Tr(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));dl=kf(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));dl=kf(l)}else t===27?(t=dl,ya(l.type)?(l=Is,Is=null,dl=l):dl=t):dl=Xl?_t(l.stateNode.nextSibling):null;return!0}function Na(){dl=Xl=null,ll=!1}function ju(){var l=aa;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),aa=null),l}function Ze(l){aa===null?aa=[l]:aa.push(l)}var Cu=c(null),Ua=null,Yt=null;function na(l,t,a){j(Cu,t._currentValue),t._currentValue=a}function qt(l){l._currentValue=Cu.current,E(Cu)}function xu(l,t,a){for(;l!==null;){var e=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),l===a)break;l=l.return}}function Nu(l,t,a,e){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;l:for(;i!==null;){var s=i;i=n;for(var o=0;o<t.length;o++)if(s.context===t[o]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),xu(i.return,a,l),e||(u=null);break l}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(g(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),xu(u,a,l),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===l){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function se(l,t,a,e){l=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var s=n.type;ut(n.pendingProps.value,u.value)||(l!==null?l.push(s):l=[s])}}else if(n===nl.current){if(u=n.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(vn):l=[vn])}n=n.return}l!==null&&Nu(t,l,a,e),t.flags|=262144}function Kn(l){for(l=l.firstContext;l!==null;){if(!ut(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ha(l){Ua=l,Yt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Gl(l){return Ar(Ua,l)}function Jn(l,t){return Ua===null&&Ha(l),Ar(l,t)}function Ar(l,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Yt===null){if(l===null)throw Error(g(308));Yt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Yt=Yt.next=t;return a}var Jp=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(a,e){l.push(e)}};this.abort=function(){t.aborted=!0,l.forEach(function(a){return a()})}},$p=v.unstable_scheduleCallback,kp=v.unstable_NormalPriority,jl={$$typeof:sl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Jp,data:new Map,refCount:0}}function Ve(l){l.refCount--,l.refCount===0&&$p(kp,function(){l.controller.abort()})}var Ke=null,Hu=0,oe=0,re=null;function Wp(l,t){if(Ke===null){var a=Ke=[];Hu=0,oe=Ys(),re={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Hu++,t.then(Er,Er),t}function Er(){if(--Hu===0&&Ke!==null){re!==null&&(re.status="fulfilled");var l=Ke;Ke=null,oe=0,re=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fp(l,t){var a=[],e={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return l.then(function(){e.status="fulfilled",e.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(e.status="rejected",e.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),e}var wr=z.S;z.S=function(l,t){cf=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wp(l,t),wr!==null&&wr(l,t)};var Ra=c(null);function Ru(){var l=Ra.current;return l!==null?l:pl.pooledCache}function $n(l,t){t===null?j(Ra,Ra.current):j(Ra,t.pool)}function Mr(){var l=Ru();return l===null?null:{parent:jl._currentValue,pool:l}}var ce=Error(g(460)),Bu=Error(g(474)),kn=Error(g(542)),Wn={then:function(){}};function Or(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Dr(l,t,a){switch(a=l[a],a===void 0?l.push(t):a!==t&&(t.then(Ut,Ut),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Cr(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=pl,l!==null&&100<l.shellSuspendCounter)throw Error(g(482));l=t,l.status="pending",l.then(function(e){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=e}},function(e){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Cr(l),l}throw Ya=t,ce}}function Ba(l){try{var t=l._init;return t(l._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ya=a,ce):a}}var Ya=null;function jr(){if(Ya===null)throw Error(g(459));var l=Ya;return Ya=null,l}function Cr(l){if(l===ce||l===kn)throw Error(g(483))}var fe=null,Je=0;function Fn(l){var t=Je;return Je+=1,fe===null&&(fe=[]),Dr(fe,l,t)}function $e(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===K?Error(g(525)):(l=Object.prototype.toString.call(t),Error(g(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function xr(l){function t(f,r){if(l){var d=f.deletions;d===null?(f.deletions=[r],f.flags|=16):d.push(r)}}function a(f,r){if(!l)return null;for(;r!==null;)t(f,r),r=r.sibling;return null}function e(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=Rt(f,r),f.index=0,f.sibling=null,f}function i(f,r,d){return f.index=d,l?(d=f.alternate,d!==null?(d=d.index,d<r?(f.flags|=67108866,r):d):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function u(f){return l&&f.alternate===null&&(f.flags|=67108866),f}function s(f,r,d,_){return r===null||r.tag!==6?(r=Eu(d,f.mode,_),r.return=f,r):(r=n(r,d),r.return=f,r)}function o(f,r,d,_){var q=d.type;return q===_l?S(f,r,d.props.children,_,d.key):r!==null&&(r.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Rl&&Ba(q)===r.type)?(r=n(r,d.props),$e(r,d),r.return=f,r):(r=Zn(d.type,d.key,d.props,null,f.mode,_),$e(r,d),r.return=f,r)}function m(f,r,d,_){return r===null||r.tag!==4||r.stateNode.containerInfo!==d.containerInfo||r.stateNode.implementation!==d.implementation?(r=wu(d,f.mode,_),r.return=f,r):(r=n(r,d.children||[]),r.return=f,r)}function S(f,r,d,_,q){return r===null||r.tag!==7?(r=xa(d,f.mode,_,q),r.return=f,r):(r=n(r,d),r.return=f,r)}function A(f,r,d){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Eu(""+r,f.mode,d),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case yl:return d=Zn(r.type,r.key,r.props,null,f.mode,d),$e(d,r),d.return=f,d;case vl:return r=wu(r,f.mode,d),r.return=f,r;case Rl:return r=Ba(r),A(f,r,d)}if(At(r)||kl(r))return r=xa(r,f.mode,d,null),r.return=f,r;if(typeof r.then=="function")return A(f,Fn(r),d);if(r.$$typeof===sl)return A(f,Jn(f,r),d);In(f,r)}return null}function y(f,r,d,_){var q=r!==null?r.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return q!==null?null:s(f,r,""+d,_);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yl:return d.key===q?o(f,r,d,_):null;case vl:return d.key===q?m(f,r,d,_):null;case Rl:return d=Ba(d),y(f,r,d,_)}if(At(d)||kl(d))return q!==null?null:S(f,r,d,_,null);if(typeof d.then=="function")return y(f,r,Fn(d),_);if(d.$$typeof===sl)return y(f,r,Jn(f,d),_);In(f,d)}return null}function b(f,r,d,_,q){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(d)||null,s(r,f,""+_,q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yl:return f=f.get(_.key===null?d:_.key)||null,o(r,f,_,q);case vl:return f=f.get(_.key===null?d:_.key)||null,m(r,f,_,q);case Rl:return _=Ba(_),b(f,r,d,_,q)}if(At(_)||kl(_))return f=f.get(d)||null,S(r,f,_,q,null);if(typeof _.then=="function")return b(f,r,d,Fn(_),q);if(_.$$typeof===sl)return b(f,r,d,Jn(r,_),q);In(r,_)}return null}function H(f,r,d,_){for(var q=null,tl=null,B=r,V=r=0,I=null;B!==null&&V<d.length;V++){B.index>V?(I=B,B=null):I=B.sibling;var al=y(f,B,d[V],_);if(al===null){B===null&&(B=I);break}l&&B&&al.alternate===null&&t(f,B),r=i(al,r,V),tl===null?q=al:tl.sibling=al,tl=al,B=I}if(V===d.length)return a(f,B),ll&&Bt(f,V),q;if(B===null){for(;V<d.length;V++)B=A(f,d[V],_),B!==null&&(r=i(B,r,V),tl===null?q=B:tl.sibling=B,tl=B);return ll&&Bt(f,V),q}for(B=e(B);V<d.length;V++)I=b(B,f,V,d[V],_),I!==null&&(l&&I.alternate!==null&&B.delete(I.key===null?V:I.key),r=i(I,r,V),tl===null?q=I:tl.sibling=I,tl=I);return l&&B.forEach(function(_a){return t(f,_a)}),ll&&Bt(f,V),q}function X(f,r,d,_){if(d==null)throw Error(g(151));for(var q=null,tl=null,B=r,V=r=0,I=null,al=d.next();B!==null&&!al.done;V++,al=d.next()){B.index>V?(I=B,B=null):I=B.sibling;var _a=y(f,B,al.value,_);if(_a===null){B===null&&(B=I);break}l&&B&&_a.alternate===null&&t(f,B),r=i(_a,r,V),tl===null?q=_a:tl.sibling=_a,tl=_a,B=I}if(al.done)return a(f,B),ll&&Bt(f,V),q;if(B===null){for(;!al.done;V++,al=d.next())al=A(f,al.value,_),al!==null&&(r=i(al,r,V),tl===null?q=al:tl.sibling=al,tl=al);return ll&&Bt(f,V),q}for(B=e(B);!al.done;V++,al=d.next())al=b(B,f,V,al.value,_),al!==null&&(l&&al.alternate!==null&&B.delete(al.key===null?V:al.key),r=i(al,r,V),tl===null?q=al:tl.sibling=al,tl=al);return l&&B.forEach(function(om){return t(f,om)}),ll&&Bt(f,V),q}function fl(f,r,d,_){if(typeof d=="object"&&d!==null&&d.type===_l&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case yl:l:{for(var q=d.key;r!==null;){if(r.key===q){if(q=d.type,q===_l){if(r.tag===7){a(f,r.sibling),_=n(r,d.props.children),_.return=f,f=_;break l}}else if(r.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Rl&&Ba(q)===r.type){a(f,r.sibling),_=n(r,d.props),$e(_,d),_.return=f,f=_;break l}a(f,r);break}else t(f,r);r=r.sibling}d.type===_l?(_=xa(d.props.children,f.mode,_,d.key),_.return=f,f=_):(_=Zn(d.type,d.key,d.props,null,f.mode,_),$e(_,d),_.return=f,f=_)}return u(f);case vl:l:{for(q=d.key;r!==null;){if(r.key===q)if(r.tag===4&&r.stateNode.containerInfo===d.containerInfo&&r.stateNode.implementation===d.implementation){a(f,r.sibling),_=n(r,d.children||[]),_.return=f,f=_;break l}else{a(f,r);break}else t(f,r);r=r.sibling}_=wu(d,f.mode,_),_.return=f,f=_}return u(f);case Rl:return d=Ba(d),fl(f,r,d,_)}if(At(d))return H(f,r,d,_);if(kl(d)){if(q=kl(d),typeof q!="function")throw Error(g(150));return d=q.call(d),X(f,r,d,_)}if(typeof d.then=="function")return fl(f,r,Fn(d),_);if(d.$$typeof===sl)return fl(f,r,Jn(f,d),_);In(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,r!==null&&r.tag===6?(a(f,r.sibling),_=n(r,d),_.return=f,f=_):(a(f,r),_=Eu(d,f.mode,_),_.return=f,f=_),u(f)):a(f,r)}return function(f,r,d,_){try{Je=0;var q=fl(f,r,d,_);return fe=null,q}catch(B){if(B===ce||B===kn)throw B;var tl=st(29,B,null,f.mode);return tl.lanes=_,tl.return=f,tl}}}var qa=xr(!0),Nr=xr(!1),ia=!1;function Yu(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ua(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function sa(l,t,a){var e=l.updateQueue;if(e===null)return null;if(e=e.shared,(el&2)!==0){var n=e.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t,t=Ln(l),hr(l,null,a),t}return Qn(l,e,t,a),Ln(l)}function ke(l,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,Ao(l,a)}}function Xu(l,t){var a=l.updateQueue,e=l.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},l.updateQueue=a;return}l=a.lastBaseUpdate,l===null?a.firstBaseUpdate=t:l.next=t,a.lastBaseUpdate=t}var Gu=!1;function We(){if(Gu){var l=re;if(l!==null)throw l}}function Fe(l,t,a,e){Gu=!1;var n=l.updateQueue;ia=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,m=o.next;o.next=null,u===null?i=m:u.next=m,u=o;var S=l.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==u&&(s===null?S.firstBaseUpdate=m:s.next=m,S.lastBaseUpdate=o))}if(i!==null){var A=n.baseState;u=0,S=m=o=null,s=i;do{var y=s.lane&-536870913,b=y!==s.lane;if(b?(F&y)===y:(e&y)===y){y!==0&&y===oe&&(Gu=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});l:{var H=l,X=s;y=t;var fl=a;switch(X.tag){case 1:if(H=X.payload,typeof H=="function"){A=H.call(fl,A,y);break l}A=H;break l;case 3:H.flags=H.flags&-65537|128;case 0:if(H=X.payload,y=typeof H=="function"?H.call(fl,A,y):H,y==null)break l;A=N({},A,y);break l;case 2:ia=!0}}y=s.callback,y!==null&&(l.flags|=64,b&&(l.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(m=S=b,o=A):S=S.next=b,u|=y;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;b=s,s=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);S===null&&(o=A),n.baseState=o,n.firstBaseUpdate=m,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),ga|=u,l.lanes=u,l.memoizedState=A}}function Ur(l,t){if(typeof l!="function")throw Error(g(191,l));l.call(t)}function Hr(l,t){var a=l.callbacks;if(a!==null)for(l.callbacks=null,l=0;l<a.length;l++)Ur(a[l],t)}var ge=c(null),Pn=c(0);function Rr(l,t){l=$t,j(Pn,l),j(ge,t),$t=l|t.baseLanes}function Qu(){j(Pn,$t),j(ge,ge.current)}function Lu(){$t=Pn.current,E(ge),E(Pn)}var ot=c(null),zt=null;function oa(l){var t=l.alternate;j(Ol,Ol.current&1),j(ot,l),zt===null&&(t===null||ge.current!==null||t.memoizedState!==null)&&(zt=l)}function Zu(l){j(Ol,Ol.current),j(ot,l),zt===null&&(zt=l)}function Br(l){l.tag===22?(j(Ol,Ol.current),j(ot,l),zt===null&&(zt=l)):ra()}function ra(){j(Ol,Ol.current),j(ot,ot.current)}function rt(l){E(ot),zt===l&&(zt=null),E(Ol)}var Ol=c(0);function li(l){for(var t=l;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ws(a)||Fs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,Z=null,rl=null,Cl=null,ti=!1,pe=!1,Xa=!1,ai=0,Ie=0,de=null,Ip=0;function Al(){throw Error(g(321))}function Vu(l,t){if(t===null)return!1;for(var a=0;a<t.length&&a<l.length;a++)if(!ut(l[a],t[a]))return!1;return!0}function Ku(l,t,a,e,n,i){return Xt=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=l===null||l.memoizedState===null?Sc:ss,Xa=!1,i=a(e,n),Xa=!1,pe&&(i=qr(t,a,e,n)),Yr(l),i}function Yr(l){z.H=tn;var t=rl!==null&&rl.next!==null;if(Xt=0,Cl=rl=Z=null,ti=!1,Ie=0,de=null,t)throw Error(g(300));l===null||xl||(l=l.dependencies,l!==null&&Kn(l)&&(xl=!0))}function qr(l,t,a,e){Z=l;var n=0;do{if(pe&&(de=null),Ie=0,pe=!1,25<=n)throw Error(g(301));if(n+=1,Cl=rl=null,l.updateQueue!=null){var i=l.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=zc,i=t(a,e)}while(pe);return i}function Pp(){var l=z.H,t=l.useState()[0];return t=typeof t.then=="function"?Pe(t):t,l=l.useState()[0],(rl!==null?rl.memoizedState:null)!==l&&(Z.flags|=1024),t}function Ju(){var l=ai!==0;return ai=0,l}function $u(l,t,a){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~a}function ku(l){if(ti){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ti=!1}Xt=0,Cl=rl=Z=null,pe=!1,Ie=ai=0,de=null}function Jl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cl===null?Z.memoizedState=Cl=l:Cl=Cl.next=l,Cl}function Dl(){if(rl===null){var l=Z.alternate;l=l!==null?l.memoizedState:null}else l=rl.next;var t=Cl===null?Z.memoizedState:Cl.next;if(t!==null)Cl=t,rl=l;else{if(l===null)throw Z.alternate===null?Error(g(467)):Error(g(310));rl=l,l={memoizedState:rl.memoizedState,baseState:rl.baseState,baseQueue:rl.baseQueue,queue:rl.queue,next:null},Cl===null?Z.memoizedState=Cl=l:Cl=Cl.next=l}return Cl}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pe(l){var t=Ie;return Ie+=1,de===null&&(de=[]),l=Dr(de,l,t),t=Z,(Cl===null?t.memoizedState:Cl.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Sc:ss),l}function ni(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pe(l);if(l.$$typeof===sl)return Gl(l)}throw Error(g(438,String(l)))}function Wu(l){var t=null,a=Z.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var e=Z.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),Z.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(l),e=0;e<l;e++)a[e]=Ft;return t.index++,a}function Gt(l,t){return typeof t=="function"?t(l):t}function ii(l){var t=Dl();return Fu(t,rl,l)}function Fu(l,t,a){var e=l.queue;if(e===null)throw Error(g(311));e.lastRenderedReducer=a;var n=l.baseQueue,i=e.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,e.pending=null}if(i=l.baseState,n===null)l.memoizedState=i;else{t=n.next;var s=u=null,o=null,m=t,S=!1;do{var A=m.lane&-536870913;if(A!==m.lane?(F&A)===A:(Xt&A)===A){var y=m.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),A===oe&&(S=!0);else if((Xt&y)===y){m=m.next,y===oe&&(S=!0);continue}else A={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=A,u=i):o=o.next=A,Z.lanes|=y,ga|=y;A=m.action,Xa&&a(i,A),i=m.hasEagerState?m.eagerState:a(i,A)}else y={lane:A,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},o===null?(s=o=y,u=i):o=o.next=y,Z.lanes|=A,ga|=A;m=m.next}while(m!==null&&m!==t);if(o===null?u=i:o.next=s,!ut(i,l.memoizedState)&&(xl=!0,S&&(a=re,a!==null)))throw a;l.memoizedState=i,l.baseState=u,l.baseQueue=o,e.lastRenderedState=i}return n===null&&(e.lanes=0),[l.memoizedState,e.dispatch]}function Iu(l){var t=Dl(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=l;var e=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=l(i,u.action),u=u.next;while(u!==n);ut(i,t.memoizedState)||(xl=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,e]}function Xr(l,t,a){var e=Z,n=Dl(),i=ll;if(i){if(a===void 0)throw Error(g(407));a=a()}else a=t();var u=!ut((rl||n).memoizedState,a);if(u&&(n.memoizedState=a,xl=!0),n=n.queue,ts(Lr.bind(null,e,n,l),[l]),n.getSnapshot!==t||u||Cl!==null&&Cl.memoizedState.tag&1){if(e.flags|=2048,me(9,{destroy:void 0},Qr.bind(null,e,n,a,t),null),pl===null)throw Error(g(349));i||(Xt&127)!==0||Gr(e,t,a)}return a}function Gr(l,t,a){l.flags|=16384,l={getSnapshot:t,value:a},t=Z.updateQueue,t===null?(t=ei(),Z.updateQueue=t,t.stores=[l]):(a=t.stores,a===null?t.stores=[l]:a.push(l))}function Qr(l,t,a,e){t.value=a,t.getSnapshot=e,Zr(t)&&Vr(l)}function Lr(l,t,a){return a(function(){Zr(t)&&Vr(l)})}function Zr(l){var t=l.getSnapshot;l=l.value;try{var a=t();return!ut(l,a)}catch{return!0}}function Vr(l){var t=Ca(l,2);t!==null&&at(t,l,2)}function Pu(l){var t=Jl();if(typeof l=="function"){var a=l;if(l=a(),Xa){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Kr(l,t,a,e){return l.baseState=a,Fu(l,rl,typeof e=="function"?e:Gt)}function ld(l,t,a,e,n){if(oi(l))throw Error(g(485));if(l=t.action,l!==null){var i={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?a(!0):i.isTransition=!1,e(i),a=t.pending,a===null?(i.next=t.pending=i,Jr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Jr(l,t){var a=t.action,e=t.payload,n=l.state;if(t.isTransition){var i=z.T,u={};z.T=u;try{var s=a(n,e),o=z.S;o!==null&&o(u,s),$r(l,t,s)}catch(m){ls(l,t,m)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=a(n,e),$r(l,t,i)}catch(m){ls(l,t,m)}}function $r(l,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){kr(l,t,e)},function(e){return ls(l,t,e)}):kr(l,t,a)}function kr(l,t,a){t.status="fulfilled",t.value=a,Wr(t),l.state=a,t=l.pending,t!==null&&(a=t.next,a===t?l.pending=null:(a=a.next,t.next=a,Jr(l,a)))}function ls(l,t,a){var e=l.pending;if(l.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=a,Wr(t),t=t.next;while(t!==e)}l.action=null}function Wr(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fr(l,t){return t}function Ir(l,t){if(ll){var a=pl.formState;if(a!==null){l:{var e=Z;if(ll){if(dl){t:{for(var n=dl,i=St;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){dl=_t(n.nextSibling),e=n.data==="F!";break l}}ea(e)}e=!1}e&&(t=a[0])}}return a=Jl(),a.memoizedState=a.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:t},a.queue=e,a=yc.bind(null,Z,e),e.dispatch=a,e=Pu(!1),i=us.bind(null,Z,!1,e.queue),e=Jl(),n={state:t,dispatch:null,action:l,pending:null},e.queue=n,a=ld.bind(null,Z,n,i,a),n.dispatch=a,e.memoizedState=l,[t,a,!1]}function Pr(l){var t=Dl();return lc(t,rl,l)}function lc(l,t,a){if(t=Fu(l,t,Fr)[0],l=ii(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=Pe(t)}catch(u){throw u===ce?kn:u}else e=t;t=Dl();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(Z.flags|=2048,me(9,{destroy:void 0},td.bind(null,n,a),null)),[e,i,l]}function td(l,t){l.action=t}function tc(l){var t=Dl(),a=rl;if(a!==null)return lc(t,a,l);Dl(),t=t.memoizedState,a=Dl();var e=a.queue.dispatch;return a.memoizedState=l,[t,e,!1]}function me(l,t,a,e){return l={tag:l,create:a,deps:e,inst:t,next:null},t=Z.updateQueue,t===null&&(t=ei(),Z.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=l.next=l:(e=a.next,a.next=l,l.next=e,t.lastEffect=l),l}function ac(){return Dl().memoizedState}function ui(l,t,a,e){var n=Jl();Z.flags|=l,n.memoizedState=me(1|t,{destroy:void 0},a,e===void 0?null:e)}function si(l,t,a,e){var n=Dl();e=e===void 0?null:e;var i=n.memoizedState.inst;rl!==null&&e!==null&&Vu(e,rl.memoizedState.deps)?n.memoizedState=me(t,i,a,e):(Z.flags|=l,n.memoizedState=me(1|t,i,a,e))}function ec(l,t){ui(8390656,8,l,t)}function ts(l,t){si(2048,8,l,t)}function ad(l){Z.flags|=4;var t=Z.updateQueue;if(t===null)t=ei(),Z.updateQueue=t,t.events=[l];else{var a=t.events;a===null?t.events=[l]:a.push(l)}}function nc(l){var t=Dl().memoizedState;return ad({ref:t,nextImpl:l}),function(){if((el&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function ic(l,t){return si(4,2,l,t)}function uc(l,t){return si(4,4,l,t)}function sc(l,t){if(typeof t=="function"){l=l();var a=t(l);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function oc(l,t,a){a=a!=null?a.concat([l]):null,si(4,4,sc.bind(null,t,l),a)}function as(){}function rc(l,t){var a=Dl();t=t===void 0?null:t;var e=a.memoizedState;return t!==null&&Vu(t,e[1])?e[0]:(a.memoizedState=[l,t],l)}function cc(l,t){var a=Dl();t=t===void 0?null:t;var e=a.memoizedState;if(t!==null&&Vu(t,e[1]))return e[0];if(e=l(),Xa){It(!0);try{l()}finally{It(!1)}}return a.memoizedState=[e,t],e}function es(l,t,a){return a===void 0||(Xt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=a,l=gf(),Z.lanes|=l,ga|=l,a)}function fc(l,t,a,e){return ut(a,t)?a:ge.current!==null?(l=es(l,a,e),ut(l,t)||(xl=!0),l):(Xt&42)===0||(Xt&1073741824)!==0&&(F&261930)===0?(xl=!0,l.memoizedState=a):(l=gf(),Z.lanes|=l,ga|=l,t)}function gc(l,t,a,e,n){var i=O.p;O.p=i!==0&&8>i?i:8;var u=z.T,s={};z.T=s,us(l,!1,t,a);try{var o=n(),m=z.S;if(m!==null&&m(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=Fp(o,e);ln(l,t,S,gt(l))}else ln(l,t,e,gt(l))}catch(A){ln(l,t,{then:function(){},status:"rejected",reason:A},gt())}finally{O.p=i,u!==null&&s.types!==null&&(u.types=s.types),z.T=u}}function ed(){}function ns(l,t,a,e){if(l.tag!==5)throw Error(g(476));var n=pc(l).queue;gc(l,n,t,G,a===null?ed:function(){return dc(l),a(e)})}function pc(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:G},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:a},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function dc(l){var t=pc(l);t.next===null&&(t=l.alternate.memoizedState),ln(l,t.next.queue,{},gt())}function is(){return Gl(vn)}function mc(){return Dl().memoizedState}function hc(){return Dl().memoizedState}function nd(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();l=ua(a);var e=sa(t,l,a);e!==null&&(at(e,t,a),ke(e,t,a)),t={cache:Uu()},l.payload=t;return}t=t.return}}function id(l,t,a){var e=gt();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(l)?vc(t,a):(a=Tu(l,t,a,e),a!==null&&(at(a,l,e),bc(a,t,e)))}function yc(l,t,a){var e=gt();ln(l,t,a,e)}function ln(l,t,a,e){var n={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(oi(l))vc(t,n);else{var i=l.alternate;if(l.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,ut(s,u))return Qn(l,t,n,0),pl===null&&Gn(),!1}catch{}if(a=Tu(l,t,n,e),a!==null)return at(a,l,e),bc(a,t,e),!0}return!1}function us(l,t,a,e){if(e={lane:2,revertLane:Ys(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},oi(l)){if(t)throw Error(g(479))}else t=Tu(l,a,e,2),t!==null&&at(t,l,2)}function oi(l){var t=l.alternate;return l===Z||t!==null&&t===Z}function vc(l,t){pe=ti=!0;var a=l.pending;a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t}function bc(l,t,a){if((a&4194048)!==0){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,Ao(l,a)}}var tn={readContext:Gl,use:ni,useCallback:Al,useContext:Al,useEffect:Al,useImperativeHandle:Al,useLayoutEffect:Al,useInsertionEffect:Al,useMemo:Al,useReducer:Al,useRef:Al,useState:Al,useDebugValue:Al,useDeferredValue:Al,useTransition:Al,useSyncExternalStore:Al,useId:Al,useHostTransitionStatus:Al,useFormState:Al,useActionState:Al,useOptimistic:Al,useMemoCache:Al,useCacheRefresh:Al};tn.useEffectEvent=Al;var Sc={readContext:Gl,use:ni,useCallback:function(l,t){return Jl().memoizedState=[l,t===void 0?null:t],l},useContext:Gl,useEffect:ec,useImperativeHandle:function(l,t,a){a=a!=null?a.concat([l]):null,ui(4194308,4,sc.bind(null,t,l),a)},useLayoutEffect:function(l,t){return ui(4194308,4,l,t)},useInsertionEffect:function(l,t){ui(4,2,l,t)},useMemo:function(l,t){var a=Jl();t=t===void 0?null:t;var e=l();if(Xa){It(!0);try{l()}finally{It(!1)}}return a.memoizedState=[e,t],e},useReducer:function(l,t,a){var e=Jl();if(a!==void 0){var n=a(t);if(Xa){It(!0);try{a(t)}finally{It(!1)}}}else n=t;return e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},e.queue=l,l=l.dispatch=id.bind(null,Z,l),[e.memoizedState,l]},useRef:function(l){var t=Jl();return l={current:l},t.memoizedState=l},useState:function(l){l=Pu(l);var t=l.queue,a=yc.bind(null,Z,t);return t.dispatch=a,[l.memoizedState,a]},useDebugValue:as,useDeferredValue:function(l,t){var a=Jl();return es(a,l,t)},useTransition:function(){var l=Pu(!1);return l=gc.bind(null,Z,l.queue,!0,!1),Jl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,a){var e=Z,n=Jl();if(ll){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),pl===null)throw Error(g(349));(F&127)!==0||Gr(e,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,ec(Lr.bind(null,e,i,l),[l]),e.flags|=2048,me(9,{destroy:void 0},Qr.bind(null,e,i,a,t),null),a},useId:function(){var l=Jl(),t=pl.identifierPrefix;if(ll){var a=Dt,e=Ot;a=(e&~(1<<32-it(e)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Ip++,t="_"+t+"r_"+a.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:is,useFormState:Ir,useActionState:Ir,useOptimistic:function(l){var t=Jl();t.memoizedState=t.baseState=l;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=us.bind(null,Z,!0,a),a.dispatch=t,[l,t]},useMemoCache:Wu,useCacheRefresh:function(){return Jl().memoizedState=nd.bind(null,Z)},useEffectEvent:function(l){var t=Jl(),a={impl:l};return t.memoizedState=a,function(){if((el&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},ss={readContext:Gl,use:ni,useCallback:rc,useContext:Gl,useEffect:ts,useImperativeHandle:oc,useInsertionEffect:ic,useLayoutEffect:uc,useMemo:cc,useReducer:ii,useRef:ac,useState:function(){return ii(Gt)},useDebugValue:as,useDeferredValue:function(l,t){var a=Dl();return fc(a,rl.memoizedState,l,t)},useTransition:function(){var l=ii(Gt)[0],t=Dl().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Xr,useId:mc,useHostTransitionStatus:is,useFormState:Pr,useActionState:Pr,useOptimistic:function(l,t){var a=Dl();return Kr(a,rl,l,t)},useMemoCache:Wu,useCacheRefresh:hc};ss.useEffectEvent=nc;var zc={readContext:Gl,use:ni,useCallback:rc,useContext:Gl,useEffect:ts,useImperativeHandle:oc,useInsertionEffect:ic,useLayoutEffect:uc,useMemo:cc,useReducer:Iu,useRef:ac,useState:function(){return Iu(Gt)},useDebugValue:as,useDeferredValue:function(l,t){var a=Dl();return rl===null?es(a,l,t):fc(a,rl.memoizedState,l,t)},useTransition:function(){var l=Iu(Gt)[0],t=Dl().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Xr,useId:mc,useHostTransitionStatus:is,useFormState:tc,useActionState:tc,useOptimistic:function(l,t){var a=Dl();return rl!==null?Kr(a,rl,l,t):(a.baseState=l,[l,a.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:hc};zc.useEffectEvent=nc;function os(l,t,a,e){t=l.memoizedState,a=a(e,t),a=a==null?t:N({},t,a),l.memoizedState=a,l.lanes===0&&(l.updateQueue.baseState=a)}var rs={enqueueSetState:function(l,t,a){l=l._reactInternals;var e=gt(),n=ua(e);n.payload=t,a!=null&&(n.callback=a),t=sa(l,n,e),t!==null&&(at(t,l,e),ke(t,l,e))},enqueueReplaceState:function(l,t,a){l=l._reactInternals;var e=gt(),n=ua(e);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=sa(l,n,e),t!==null&&(at(t,l,e),ke(t,l,e))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var a=gt(),e=ua(a);e.tag=2,t!=null&&(e.callback=t),t=sa(l,e,a),t!==null&&(at(t,l,a),ke(t,l,a))}};function _c(l,t,a,e,n,i,u){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(e,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ge(a,e)||!Ge(n,i):!0}function Tc(l,t,a,e){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,e),t.state!==l&&rs.enqueueReplaceState(t,t.state,null)}function Ga(l,t){var a=t;if("ref"in t){a={};for(var e in t)e!=="ref"&&(a[e]=t[e])}if(l=l.defaultProps){a===t&&(a=N({},a));for(var n in l)a[n]===void 0&&(a[n]=l[n])}return a}function Ac(l){Xn(l)}function Ec(l){console.error(l)}function wc(l){Xn(l)}function ri(l,t){try{var a=l.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Mc(l,t,a){try{var e=l.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function cs(l,t,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){ri(l,t)},a}function Oc(l){return l=ua(l),l.tag=3,l}function Dc(l,t,a,e){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;l.payload=function(){return n(i)},l.callback=function(){Mc(t,a,e)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(l.callback=function(){Mc(t,a,e),typeof n!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})})}function ud(l,t,a,e,n){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=a.alternate,t!==null&&se(t,a,n,!0),a=ot.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?zi():a.alternate===null&&El===0&&(El=3),a.flags&=-257,a.flags|=65536,a.lanes=n,e===Wn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([e]):t.add(e),Hs(l,e,n)),!1;case 22:return a.flags|=65536,e===Wn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([e]):a.add(e)),Hs(l,e,n)),!1}throw Error(g(435,a.tag))}return Hs(l,e,n),zi(),!1}if(ll)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,e!==Du&&(l=Error(g(422),{cause:e}),Ze(yt(l,a)))):(e!==Du&&(t=Error(g(423),{cause:e}),Ze(yt(t,a))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,e=yt(e,a),n=cs(l.stateNode,e,n),Xu(l,n),El!==4&&(El=2)),!1;var i=Error(g(520),{cause:e});if(i=yt(i,a),cn===null?cn=[i]:cn.push(i),El!==4&&(El=2),t===null)return!0;e=yt(e,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,l=n&-n,a.lanes|=l,l=cs(a.stateNode,e,l),Xu(a,l),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Oc(n),Dc(n,l,a,e),Xu(a,n),!1}a=a.return}while(a!==null);return!1}var fs=Error(g(461)),xl=!1;function Ql(l,t,a,e){t.child=l===null?Nr(t,null,a,e):qa(t,l.child,a,e)}function jc(l,t,a,e,n){a=a.render;var i=t.ref;if("ref"in e){var u={};for(var s in e)s!=="ref"&&(u[s]=e[s])}else u=e;return Ha(t),e=Ku(l,t,a,u,i,n),s=Ju(),l!==null&&!xl?($u(l,t,n),Qt(l,t,n)):(ll&&s&&Mu(t),t.flags|=1,Ql(l,t,e,n),t.child)}function Cc(l,t,a,e,n){if(l===null){var i=a.type;return typeof i=="function"&&!Au(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,xc(l,t,i,e,n)):(l=Zn(a.type,null,e,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(i=l.child,!bs(l,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ge,a(u,e)&&l.ref===t.ref)return Qt(l,t,n)}return t.flags|=1,l=Rt(i,e),l.ref=t.ref,l.return=t,t.child=l}function xc(l,t,a,e,n){if(l!==null){var i=l.memoizedProps;if(Ge(i,e)&&l.ref===t.ref)if(xl=!1,t.pendingProps=e=i,bs(l,n))(l.flags&131072)!==0&&(xl=!0);else return t.lanes=l.lanes,Qt(l,t,n)}return gs(l,t,a,e,n)}function Nc(l,t,a,e){var n=e.children,i=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,l!==null){for(e=t.child=l.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~i}else e=0,t.child=null;return Uc(l,t,i,a,e)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&$n(t,i!==null?i.cachePool:null),i!==null?Rr(t,i):Qu(),Br(t);else return e=t.lanes=536870912,Uc(l,t,i!==null?i.baseLanes|a:a,a,e)}else i!==null?($n(t,i.cachePool),Rr(t,i),ra(),t.memoizedState=null):(l!==null&&$n(t,null),Qu(),ra());return Ql(l,t,n,a),t.child}function an(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(l,t,a,e,n){var i=Ru();return i=i===null?null:{parent:jl._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},l!==null&&$n(t,null),Qu(),Br(t),l!==null&&se(l,t,e,!0),t.childLanes=n,null}function ci(l,t){return t=gi({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Hc(l,t,a){return qa(t,l.child,null,a),l=ci(t,t.pendingProps),l.flags|=2,rt(t),t.memoizedState=null,l}function sd(l,t,a){var e=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(e.mode==="hidden")return l=ci(t,e),t.lanes=536870912,an(null,l);if(Zu(t),(l=dl)?(l=$f(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ta!==null?{id:Ot,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=vr(l),a.return=t,t.child=a,Xl=t,dl=null)):l=null,l===null)throw ea(t);return t.lanes=536870912,null}return ci(t,e)}var i=l.memoizedState;if(i!==null){var u=i.dehydrated;if(Zu(t),n)if(t.flags&256)t.flags&=-257,t=Hc(l,t,a);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(g(558));else if(xl||se(l,t,a,!1),n=(a&l.childLanes)!==0,xl||n){if(e=pl,e!==null&&(u=Eo(e,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ca(l,u),at(e,l,u),fs;zi(),t=Hc(l,t,a)}else l=i.treeContext,dl=_t(u.nextSibling),Xl=t,ll=!0,aa=null,St=!1,l!==null&&zr(t,l),t=ci(t,e),t.flags|=4096;return t}return l=Rt(l.child,{mode:e.mode,children:e.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fi(l,t){var a=t.ref;if(a===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(l===null||l.ref!==a)&&(t.flags|=4194816)}}function gs(l,t,a,e,n){return Ha(t),a=Ku(l,t,a,e,void 0,n),e=Ju(),l!==null&&!xl?($u(l,t,n),Qt(l,t,n)):(ll&&e&&Mu(t),t.flags|=1,Ql(l,t,a,n),t.child)}function Rc(l,t,a,e,n,i){return Ha(t),t.updateQueue=null,a=qr(t,e,a,n),Yr(l),e=Ju(),l!==null&&!xl?($u(l,t,i),Qt(l,t,i)):(ll&&e&&Mu(t),t.flags|=1,Ql(l,t,a,i),t.child)}function Bc(l,t,a,e,n){if(Ha(t),t.stateNode===null){var i=ee,u=a.contextType;typeof u=="object"&&u!==null&&(i=Gl(u)),i=new a(e,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=e,i.state=t.memoizedState,i.refs={},Yu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Gl(u):ee,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(os(t,a,u,e),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&rs.enqueueReplaceState(i,i.state,null),Fe(t,e,i,n),We(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(l===null){i=t.stateNode;var s=t.memoizedProps,o=Ga(a,s);i.props=o;var m=i.context,S=a.contextType;u=ee,typeof S=="object"&&S!==null&&(u=Gl(S));var A=a.getDerivedStateFromProps;S=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||m!==u)&&Tc(t,i,e,u),ia=!1;var y=t.memoizedState;i.state=y,Fe(t,e,i,n),We(),m=t.memoizedState,s||y!==m||ia?(typeof A=="function"&&(os(t,a,A,e),m=t.memoizedState),(o=ia||_c(t,a,o,e,y,m,u))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=m),i.props=e,i.state=m,i.context=u,e=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{i=t.stateNode,qu(l,t),u=t.memoizedProps,S=Ga(a,u),i.props=S,A=t.pendingProps,y=i.context,m=a.contextType,o=ee,typeof m=="object"&&m!==null&&(o=Gl(m)),s=a.getDerivedStateFromProps,(m=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||y!==o)&&Tc(t,i,e,o),ia=!1,y=t.memoizedState,i.state=y,Fe(t,e,i,n),We();var b=t.memoizedState;u!==A||y!==b||ia||l!==null&&l.dependencies!==null&&Kn(l.dependencies)?(typeof s=="function"&&(os(t,a,s,e),b=t.memoizedState),(S=ia||_c(t,a,S,e,y,b,o)||l!==null&&l.dependencies!==null&&Kn(l.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,b,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=b),i.props=e,i.state=b,i.context=o,e=S):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),e=!1)}return i=e,fi(l,t),e=(t.flags&128)!==0,i||e?(i=t.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,l!==null&&e?(t.child=qa(t,l.child,null,n),t.child=qa(t,null,a,n)):Ql(l,t,a,n),t.memoizedState=i.state,l=t.child):l=Qt(l,t,n),l}function Yc(l,t,a,e){return Na(),t.flags|=256,Ql(l,t,a,e),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ds(l){return{baseLanes:l,cachePool:Mr()}}function ms(l,t,a){return l=l!==null?l.childLanes&~a:0,t&&(l|=ft),l}function qc(l,t,a){var e=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=l!==null&&l.memoizedState===null?!1:(Ol.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(n?oa(t):ra(),(l=dl)?(l=$f(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ta!==null?{id:Ot,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=vr(l),a.return=t,t.child=a,Xl=t,dl=null)):l=null,l===null)throw ea(t);return Fs(l)?t.lanes=32:t.lanes=536870912,null}var s=e.children;return e=e.fallback,n?(ra(),n=t.mode,s=gi({mode:"hidden",children:s},n),e=xa(e,n,a,null),s.return=t,e.return=t,s.sibling=e,t.child=s,e=t.child,e.memoizedState=ds(a),e.childLanes=ms(l,u,a),t.memoizedState=ps,an(null,e)):(oa(t),hs(t,s))}var o=l.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)t.flags&256?(oa(t),t.flags&=-257,t=ys(l,t,a)):t.memoizedState!==null?(ra(),t.child=l.child,t.flags|=128,t=null):(ra(),s=e.fallback,n=t.mode,e=gi({mode:"visible",children:e.children},n),s=xa(s,n,a,null),s.flags|=2,e.return=t,s.return=t,e.sibling=s,t.child=e,qa(t,l.child,null,a),e=t.child,e.memoizedState=ds(a),e.childLanes=ms(l,u,a),t.memoizedState=ps,t=an(null,e));else if(oa(t),Fs(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var m=u.dgst;u=m,e=Error(g(419)),e.stack="",e.digest=u,Ze({value:e,source:null,stack:null}),t=ys(l,t,a)}else if(xl||se(l,t,a,!1),u=(a&l.childLanes)!==0,xl||u){if(u=pl,u!==null&&(e=Eo(u,a),e!==0&&e!==o.retryLane))throw o.retryLane=e,Ca(l,e),at(u,l,e),fs;Ws(s)||zi(),t=ys(l,t,a)}else Ws(s)?(t.flags|=192,t.child=l.child,t=null):(l=o.treeContext,dl=_t(s.nextSibling),Xl=t,ll=!0,aa=null,St=!1,l!==null&&zr(t,l),t=hs(t,e.children),t.flags|=4096);return t}return n?(ra(),s=e.fallback,n=t.mode,o=l.child,m=o.sibling,e=Rt(o,{mode:"hidden",children:e.children}),e.subtreeFlags=o.subtreeFlags&65011712,m!==null?s=Rt(m,s):(s=xa(s,n,a,null),s.flags|=2),s.return=t,e.return=t,e.sibling=s,t.child=e,an(null,e),e=t.child,s=l.child.memoizedState,s===null?s=ds(a):(n=s.cachePool,n!==null?(o=jl._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=Mr(),s={baseLanes:s.baseLanes|a,cachePool:n}),e.memoizedState=s,e.childLanes=ms(l,u,a),t.memoizedState=ps,an(l.child,e)):(oa(t),a=l.child,l=a.sibling,a=Rt(a,{mode:"visible",children:e.children}),a.return=t,a.sibling=null,l!==null&&(u=t.deletions,u===null?(t.deletions=[l],t.flags|=16):u.push(l)),t.child=a,t.memoizedState=null,a)}function hs(l,t){return t=gi({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function gi(l,t){return l=st(22,l,null,t),l.lanes=0,l}function ys(l,t,a){return qa(t,l.child,null,a),l=hs(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Xc(l,t,a){l.lanes|=t;var e=l.alternate;e!==null&&(e.lanes|=t),xu(l.return,t,a)}function vs(l,t,a,e,n,i){var u=l.memoizedState;u===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=e,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Gc(l,t,a){var e=t.pendingProps,n=e.revealOrder,i=e.tail;e=e.children;var u=Ol.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,j(Ol,u),Ql(l,t,e,a),e=ll?Le:0,!s&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Xc(l,a,t);else if(l.tag===19)Xc(l,a,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)l=a.alternate,l!==null&&li(l)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),vs(t,!1,n,a,i,e);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&li(l)===null){t.child=n;break}l=n.sibling,n.sibling=a,a=n,n=l}vs(t,!0,a,null,i,e);break;case"together":vs(t,!1,null,null,void 0,e);break;default:t.memoizedState=null}return t.child}function Qt(l,t,a){if(l!==null&&(t.dependencies=l.dependencies),ga|=t.lanes,(a&t.childLanes)===0)if(l!==null){if(se(l,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(g(153));if(t.child!==null){for(l=t.child,a=Rt(l,l.pendingProps),t.child=a,a.return=t;l.sibling!==null;)l=l.sibling,a=a.sibling=Rt(l,l.pendingProps),a.return=t;a.sibling=null}return t.child}function bs(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Kn(l)))}function od(l,t,a){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),na(t,jl,l.memoizedState.cache),Na();break;case 27:case 5:Oe(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zu(t),null;break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?qc(l,t,a):(oa(t),l=Qt(l,t,a),l!==null?l.sibling:null);oa(t);break;case 19:var n=(l.flags&128)!==0;if(e=(a&t.childLanes)!==0,e||(se(l,t,a,!1),e=(a&t.childLanes)!==0),n){if(e)return Gc(l,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),j(Ol,Ol.current),e)break;return null;case 22:return t.lanes=0,Nc(l,t,a,t.pendingProps);case 24:na(t,jl,l.memoizedState.cache)}return Qt(l,t,a)}function Qc(l,t,a){if(l!==null)if(l.memoizedProps!==t.pendingProps)xl=!0;else{if(!bs(l,a)&&(t.flags&128)===0)return xl=!1,od(l,t,a);xl=(l.flags&131072)!==0}else xl=!1,ll&&(t.flags&1048576)!==0&&Sr(t,Le,t.index);switch(t.lanes=0,t.tag){case 16:l:{var e=t.pendingProps;if(l=Ba(t.elementType),t.type=l,typeof l=="function")Au(l)?(e=Ga(l,e),t.tag=1,t=Bc(null,t,l,e,a)):(t.tag=0,t=gs(null,t,l,e,a));else{if(l!=null){var n=l.$$typeof;if(n===Tl){t.tag=11,t=jc(null,t,l,e,a);break l}else if(n===J){t.tag=14,t=Cc(null,t,l,e,a);break l}}throw t=xt(l)||l,Error(g(306,t,""))}}return t;case 0:return gs(l,t,t.type,t.pendingProps,a);case 1:return e=t.type,n=Ga(e,t.pendingProps),Bc(l,t,e,n,a);case 3:l:{if(Kl(t,t.stateNode.containerInfo),l===null)throw Error(g(387));e=t.pendingProps;var i=t.memoizedState;n=i.element,qu(l,t),Fe(t,e,null,a);var u=t.memoizedState;if(e=u.cache,na(t,jl,e),e!==i.cache&&Nu(t,[jl],a,!0),We(),e=u.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Yc(l,t,e,a);break l}else if(e!==n){n=yt(Error(g(424)),t),Ze(n),t=Yc(l,t,e,a);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(dl=_t(l.firstChild),Xl=t,ll=!0,aa=null,St=!0,a=Nr(t,null,e,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Na(),e===n){t=Qt(l,t,a);break l}Ql(l,t,e,a)}t=t.child}return t;case 26:return fi(l,t),l===null?(a=lg(t.type,null,t.pendingProps,null))?t.memoizedState=a:ll||(a=t.type,l=t.pendingProps,e=Oi($.current).createElement(a),e[ql]=t,e[Wl]=l,Ll(e,a,l),Bl(e),t.stateNode=e):t.memoizedState=lg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Oe(t),l===null&&ll&&(e=t.stateNode=Ff(t.type,t.pendingProps,$.current),Xl=t,St=!0,n=dl,ya(t.type)?(Is=n,dl=_t(e.firstChild)):dl=n),Ql(l,t,t.pendingProps.children,a),fi(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((n=e=dl)&&(e=Yd(e,t.type,t.pendingProps,St),e!==null?(t.stateNode=e,Xl=t,dl=_t(e.firstChild),St=!1,n=!0):n=!1),n||ea(t)),Oe(t),n=t.type,i=t.pendingProps,u=l!==null?l.memoizedProps:null,e=i.children,Js(n,i)?e=null:u!==null&&Js(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Ku(l,t,Pp,null,null,a),vn._currentValue=n),fi(l,t),Ql(l,t,e,a),t.child;case 6:return l===null&&ll&&((l=a=dl)&&(a=qd(a,t.pendingProps,St),a!==null?(t.stateNode=a,Xl=t,dl=null,l=!0):l=!1),l||ea(t)),null;case 13:return qc(l,t,a);case 4:return Kl(t,t.stateNode.containerInfo),e=t.pendingProps,l===null?t.child=qa(t,null,e,a):Ql(l,t,e,a),t.child;case 11:return jc(l,t,t.type,t.pendingProps,a);case 7:return Ql(l,t,t.pendingProps,a),t.child;case 8:return Ql(l,t,t.pendingProps.children,a),t.child;case 12:return Ql(l,t,t.pendingProps.children,a),t.child;case 10:return e=t.pendingProps,na(t,t.type,e.value),Ql(l,t,e.children,a),t.child;case 9:return n=t.type._context,e=t.pendingProps.children,Ha(t),n=Gl(n),e=e(n),t.flags|=1,Ql(l,t,e,a),t.child;case 14:return Cc(l,t,t.type,t.pendingProps,a);case 15:return xc(l,t,t.type,t.pendingProps,a);case 19:return Gc(l,t,a);case 31:return sd(l,t,a);case 22:return Nc(l,t,a,t.pendingProps);case 24:return Ha(t),e=Gl(jl),l===null?(n=Ru(),n===null&&(n=pl,i=Uu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:e,cache:n},Yu(t),na(t,jl,n)):((l.lanes&a)!==0&&(qu(l,t),Fe(t,null,null,a),We()),n=l.memoizedState,i=t.memoizedState,n.parent!==e?(n={parent:e,cache:e},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),na(t,jl,e)):(e=i.cache,na(t,jl,e),e!==n.cache&&Nu(t,[jl],a,!0))),Ql(l,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Lt(l){l.flags|=4}function Ss(l,t,a,e,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(hf())l.flags|=8192;else throw Ya=Wn,Bu}else l.flags&=-16777217}function Lc(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!ig(t))if(hf())l.flags|=8192;else throw Ya=Wn,Bu}function pi(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?_o():536870912,l.lanes|=t,be|=t)}function en(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?l.tail=null:a.sibling=null;break;case"collapsed":a=l.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:e.sibling=null}}function ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,a=0,e=0;if(t)for(var n=l.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=e,l.childLanes=a,t}function rd(l,t,a){var e=t.pendingProps;switch(Ou(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return a=t.stateNode,e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),qt(jl),Ml(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(l===null||l.child===null)&&(ue(t)?Lt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ju())),ml(t),null;case 26:var n=t.type,i=t.memoizedState;return l===null?(Lt(t),i!==null?(ml(t),Lc(t,i)):(ml(t),Ss(t,n,null,e,a))):i?i!==l.memoizedState?(Lt(t),ml(t),Lc(t,i)):(ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==e&&Lt(t),ml(t),Ss(t,n,l,e,a)),null;case 27:if(An(t),a=$.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Lt(t);else{if(!e){if(t.stateNode===null)throw Error(g(166));return ml(t),null}l=R.current,ue(t)?_r(t):(l=Ff(n,e,a),t.stateNode=l,Lt(t))}return ml(t),null;case 5:if(An(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Lt(t);else{if(!e){if(t.stateNode===null)throw Error(g(166));return ml(t),null}if(i=R.current,ue(t))_r(t);else{var u=Oi($.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof e.is=="string"?u.createElement("select",{is:e.is}):u.createElement("select"),e.multiple?i.multiple=!0:e.size&&(i.size=e.size);break;default:i=typeof e.is=="string"?u.createElement(n,{is:e.is}):u.createElement(n)}}i[ql]=t,i[Wl]=e;l:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break l;for(;u.sibling===null;){if(u.return===null||u.return===t)break l;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;l:switch(Ll(i,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break l;case"img":e=!0;break l;default:e=!1}e&&Lt(t)}}return ml(t),Ss(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,a),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==e&&Lt(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(g(166));if(l=$.current,ue(t)){if(l=t.stateNode,a=t.memoizedProps,e=null,n=Xl,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}l[ql]=t,l=!!(l.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||Xf(l.nodeValue,a)),l||ea(t,!0)}else l=Oi(l).createTextNode(e),l[ql]=t,t.stateNode=l}return ml(t),null;case 31:if(a=t.memoizedState,l===null||l.memoizedState!==null){if(e=ue(t),a!==null){if(l===null){if(!e)throw Error(g(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(557));l[ql]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),l=!1}else a=ju(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),l=!0;if(!l)return t.flags&256?(rt(t),t):(rt(t),null);if((t.flags&128)!==0)throw Error(g(558))}return ml(t),null;case 13:if(e=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=ue(t),e!==null&&e.dehydrated!==null){if(l===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[ql]=t}else Na(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),n=!1}else n=ju(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(rt(t),t):(rt(t),null)}return rt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=e!==null,l=l!==null&&l.memoizedState!==null,a&&(e=t.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048)),a!==l&&a&&(t.child.flags|=8192),pi(t,t.updateQueue),ml(t),null);case 4:return Ml(),l===null&&Qs(t.stateNode.containerInfo),ml(t),null;case 10:return qt(t.type),ml(t),null;case 19:if(E(Ol),e=t.memoizedState,e===null)return ml(t),null;if(n=(t.flags&128)!==0,i=e.rendering,i===null)if(n)en(e,!1);else{if(El!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(i=li(l),i!==null){for(t.flags|=128,en(e,!1),l=i.updateQueue,t.updateQueue=l,pi(t,l),t.subtreeFlags=0,l=a,a=t.child;a!==null;)yr(a,l),a=a.sibling;return j(Ol,Ol.current&1|2),ll&&Bt(t,e.treeForkCount),t.child}l=l.sibling}e.tail!==null&&et()>vi&&(t.flags|=128,n=!0,en(e,!1),t.lanes=4194304)}else{if(!n)if(l=li(i),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,pi(t,l),en(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!ll)return ml(t),null}else 2*et()-e.renderingStartTime>vi&&a!==536870912&&(t.flags|=128,n=!0,en(e,!1),t.lanes=4194304);e.isBackwards?(i.sibling=t.child,t.child=i):(l=e.last,l!==null?l.sibling=i:t.child=i,e.last=i)}return e.tail!==null?(l=e.tail,e.rendering=l,e.tail=l.sibling,e.renderingStartTime=et(),l.sibling=null,a=Ol.current,j(Ol,n?a&1|2:a&1),ll&&Bt(t,e.treeForkCount),l):(ml(t),null);case 22:case 23:return rt(t),Lu(),e=t.memoizedState!==null,l!==null?l.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(a&536870912)!==0&&(t.flags&128)===0&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),a=t.updateQueue,a!==null&&pi(t,a.retryQueue),a=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(t.flags|=2048),l!==null&&E(Ra),null;case 24:return a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(jl),ml(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function cd(l,t){switch(Ou(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return qt(jl),Ml(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return An(t),null;case 31:if(t.memoizedState!==null){if(rt(t),t.alternate===null)throw Error(g(340));Na()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(rt(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Na()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return E(Ol),null;case 4:return Ml(),null;case 10:return qt(t.type),null;case 22:case 23:return rt(t),Lu(),l!==null&&E(Ra),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return qt(jl),null;case 25:return null;default:return null}}function Zc(l,t){switch(Ou(t),t.tag){case 3:qt(jl),Ml();break;case 26:case 27:case 5:An(t);break;case 4:Ml();break;case 31:t.memoizedState!==null&&rt(t);break;case 13:rt(t);break;case 19:E(Ol);break;case 10:qt(t.type);break;case 22:case 23:rt(t),Lu(),l!==null&&E(Ra);break;case 24:qt(jl)}}function nn(l,t){try{var a=t.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var n=e.next;a=n;do{if((a.tag&l)===l){e=void 0;var i=a.create,u=a.inst;e=i(),u.destroy=e}a=a.next}while(a!==n)}}catch(s){ul(t,t.return,s)}}function ca(l,t,a){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var i=n.next;e=i;do{if((e.tag&l)===l){var u=e.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var o=a,m=s;try{m()}catch(S){ul(n,o,S)}}}e=e.next}while(e!==i)}}catch(S){ul(t,t.return,S)}}function Vc(l){var t=l.updateQueue;if(t!==null){var a=l.stateNode;try{Hr(t,a)}catch(e){ul(l,l.return,e)}}}function Kc(l,t,a){a.props=Ga(l.type,l.memoizedProps),a.state=l.memoizedState;try{a.componentWillUnmount()}catch(e){ul(l,t,e)}}function un(l,t){try{var a=l.ref;if(a!==null){switch(l.tag){case 26:case 27:case 5:var e=l.stateNode;break;case 30:e=l.stateNode;break;default:e=l.stateNode}typeof a=="function"?l.refCleanup=a(e):a.current=e}}catch(n){ul(l,t,n)}}function jt(l,t){var a=l.ref,e=l.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(n){ul(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ul(l,t,n)}else a.current=null}function Jc(l){var t=l.type,a=l.memoizedProps,e=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break l;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(n){ul(l,l.return,n)}}function zs(l,t,a){try{var e=l.stateNode;xd(e,l.type,a,t),e[Wl]=t}catch(n){ul(l,l.return,n)}}function $c(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ya(l.type)||l.tag===4}function _s(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||$c(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ya(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Ts(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(l),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ut));else if(e!==4&&(e===27&&ya(l.type)&&(a=l.stateNode,t=null),l=l.child,l!==null))for(Ts(l,t,a),l=l.sibling;l!==null;)Ts(l,t,a),l=l.sibling}function di(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?a.insertBefore(l,t):a.appendChild(l);else if(e!==4&&(e===27&&ya(l.type)&&(a=l.stateNode),l=l.child,l!==null))for(di(l,t,a),l=l.sibling;l!==null;)di(l,t,a),l=l.sibling}function kc(l){var t=l.stateNode,a=l.memoizedProps;try{for(var e=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ll(t,e,a),t[ql]=l,t[Wl]=a}catch(i){ul(l,l.return,i)}}var Zt=!1,Nl=!1,As=!1,Wc=typeof WeakSet=="function"?WeakSet:Set,Yl=null;function fd(l,t){if(l=l.containerInfo,Vs=Hi,l=or(l),yu(l)){if("selectionStart"in l)var a={start:l.selectionStart,end:l.selectionEnd};else l:{a=(a=l.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var n=e.anchorOffset,i=e.focusNode;e=e.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break l}var u=0,s=-1,o=-1,m=0,S=0,A=l,y=null;t:for(;;){for(var b;A!==a||n!==0&&A.nodeType!==3||(s=u+n),A!==i||e!==0&&A.nodeType!==3||(o=u+e),A.nodeType===3&&(u+=A.nodeValue.length),(b=A.firstChild)!==null;)y=A,A=b;for(;;){if(A===l)break t;if(y===a&&++m===n&&(s=u),y===i&&++S===e&&(o=u),(b=A.nextSibling)!==null)break;A=y,y=A.parentNode}A=b}a=s===-1||o===-1?null:{start:s,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ks={focusedElem:l,selectionRange:a},Hi=!1,Yl=t;Yl!==null;)if(t=Yl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Yl=l;else for(;Yl!==null;){switch(t=Yl,i=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(a=0;a<l.length;a++)n=l[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&i!==null){l=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,e=a.stateNode;try{var H=Ga(a.type,n);l=e.getSnapshotBeforeUpdate(H,i),e.__reactInternalSnapshotBeforeUpdate=l}catch(X){ul(a,a.return,X)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,a=l.nodeType,a===9)ks(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ks(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(g(163))}if(l=t.sibling,l!==null){l.return=t.return,Yl=l;break}Yl=t.return}}function Fc(l,t,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:Kt(l,a),e&4&&nn(5,a);break;case 1:if(Kt(l,a),e&4)if(l=a.stateNode,t===null)try{l.componentDidMount()}catch(u){ul(a,a.return,u)}else{var n=Ga(a.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(u){ul(a,a.return,u)}}e&64&&Vc(a),e&512&&un(a,a.return);break;case 3:if(Kt(l,a),e&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Hr(l,t)}catch(u){ul(a,a.return,u)}}break;case 27:t===null&&e&4&&kc(a);case 26:case 5:Kt(l,a),t===null&&e&4&&Jc(a),e&512&&un(a,a.return);break;case 12:Kt(l,a);break;case 31:Kt(l,a),e&4&&lf(l,a);break;case 13:Kt(l,a),e&4&&tf(l,a),e&64&&(l=a.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(a=Sd.bind(null,a),Xd(l,a))));break;case 22:if(e=a.memoizedState!==null||Zt,!e){t=t!==null&&t.memoizedState!==null||Nl,n=Zt;var i=Nl;Zt=e,(Nl=t)&&!i?Jt(l,a,(a.subtreeFlags&8772)!==0):Kt(l,a),Zt=n,Nl=i}break;case 30:break;default:Kt(l,a)}}function Ic(l){var t=l.alternate;t!==null&&(l.alternate=null,Ic(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&lu(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var hl=null,Il=!1;function Vt(l,t,a){for(a=a.child;a!==null;)Pc(l,t,a),a=a.sibling}function Pc(l,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(De,a)}catch{}switch(a.tag){case 26:Nl||jt(a,t),Vt(l,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Nl||jt(a,t);var e=hl,n=Il;ya(a.type)&&(hl=a.stateNode,Il=!1),Vt(l,t,a),mn(a.stateNode),hl=e,Il=n;break;case 5:Nl||jt(a,t);case 6:if(e=hl,n=Il,hl=null,Vt(l,t,a),hl=e,Il=n,hl!==null)if(Il)try{(hl.nodeType===9?hl.body:hl.nodeName==="HTML"?hl.ownerDocument.body:hl).removeChild(a.stateNode)}catch(i){ul(a,t,i)}else try{hl.removeChild(a.stateNode)}catch(i){ul(a,t,i)}break;case 18:hl!==null&&(Il?(l=hl,Kf(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.stateNode),Me(l)):Kf(hl,a.stateNode));break;case 4:e=hl,n=Il,hl=a.stateNode.containerInfo,Il=!0,Vt(l,t,a),hl=e,Il=n;break;case 0:case 11:case 14:case 15:ca(2,a,t),Nl||ca(4,a,t),Vt(l,t,a);break;case 1:Nl||(jt(a,t),e=a.stateNode,typeof e.componentWillUnmount=="function"&&Kc(a,t,e)),Vt(l,t,a);break;case 21:Vt(l,t,a);break;case 22:Nl=(e=Nl)||a.memoizedState!==null,Vt(l,t,a),Nl=e;break;default:Vt(l,t,a)}}function lf(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Me(l)}catch(a){ul(t,t.return,a)}}}function tf(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Me(l)}catch(a){ul(t,t.return,a)}}function gd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wc),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wc),t;default:throw Error(g(435,l.tag))}}function mi(l,t){var a=gd(l);t.forEach(function(e){if(!a.has(e)){a.add(e);var n=zd.bind(null,l,e);e.then(n,n)}})}function Pl(l,t){var a=t.deletions;if(a!==null)for(var e=0;e<a.length;e++){var n=a[e],i=l,u=t,s=u;l:for(;s!==null;){switch(s.tag){case 27:if(ya(s.type)){hl=s.stateNode,Il=!1;break l}break;case 5:hl=s.stateNode,Il=!1;break l;case 3:case 4:hl=s.stateNode.containerInfo,Il=!0;break l}s=s.return}if(hl===null)throw Error(g(160));Pc(i,u,n),hl=null,Il=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)af(t,l),t=t.sibling}var wt=null;function af(l,t){var a=l.alternate,e=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),e&4&&(ca(3,l,l.return),nn(3,l),ca(5,l,l.return));break;case 1:Pl(t,l),lt(l),e&512&&(Nl||a===null||jt(a,a.return)),e&64&&Zt&&(l=l.updateQueue,l!==null&&(e=l.callbacks,e!==null&&(a=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var n=wt;if(Pl(t,l),lt(l),e&512&&(Nl||a===null||jt(a,a.return)),e&4){var i=a!==null?a.memoizedState:null;if(e=l.memoizedState,a===null)if(e===null)if(l.stateNode===null){l:{e=l.type,a=l.memoizedProps,n=n.ownerDocument||n;t:switch(e){case"title":i=n.getElementsByTagName("title")[0],(!i||i[xe]||i[ql]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(e),n.head.insertBefore(i,n.querySelector("head > title"))),Ll(i,e,a),i[ql]=l,Bl(i),e=i;break l;case"link":var u=eg("link","href",n).get(e+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(e),Ll(i,e,a),n.head.appendChild(i);break;case"meta":if(u=eg("meta","content",n).get(e+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(e),Ll(i,e,a),n.head.appendChild(i);break;default:throw Error(g(468,e))}i[ql]=l,Bl(i),e=i}l.stateNode=e}else ng(n,l.type,l.stateNode);else l.stateNode=ag(n,e,l.memoizedProps);else i!==e?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,e===null?ng(n,l.type,l.stateNode):ag(n,e,l.memoizedProps)):e===null&&l.stateNode!==null&&zs(l,l.memoizedProps,a.memoizedProps)}break;case 27:Pl(t,l),lt(l),e&512&&(Nl||a===null||jt(a,a.return)),a!==null&&e&4&&zs(l,l.memoizedProps,a.memoizedProps);break;case 5:if(Pl(t,l),lt(l),e&512&&(Nl||a===null||jt(a,a.return)),l.flags&32){n=l.stateNode;try{Wa(n,"")}catch(H){ul(l,l.return,H)}}e&4&&l.stateNode!=null&&(n=l.memoizedProps,zs(l,n,a!==null?a.memoizedProps:n)),e&1024&&(As=!0);break;case 6:if(Pl(t,l),lt(l),e&4){if(l.stateNode===null)throw Error(g(162));e=l.memoizedProps,a=l.stateNode;try{a.nodeValue=e}catch(H){ul(l,l.return,H)}}break;case 3:if(Ci=null,n=wt,wt=Di(t.containerInfo),Pl(t,l),wt=n,lt(l),e&4&&a!==null&&a.memoizedState.isDehydrated)try{Me(t.containerInfo)}catch(H){ul(l,l.return,H)}As&&(As=!1,ef(l));break;case 4:e=wt,wt=Di(l.stateNode.containerInfo),Pl(t,l),lt(l),wt=e;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,mi(l,e)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yi=et()),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,mi(l,e)));break;case 22:n=l.memoizedState!==null;var o=a!==null&&a.memoizedState!==null,m=Zt,S=Nl;if(Zt=m||n,Nl=S||o,Pl(t,l),Nl=S,Zt=m,lt(l),e&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||o||Zt||Nl||Qa(l)),a=null,t=l;;){if(t.tag===5||t.tag===26){if(a===null){o=a=t;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var A=o.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(H){ul(o,o.return,H)}}}else if(t.tag===6){if(a===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(H){ul(o,o.return,H)}}}else if(t.tag===18){if(a===null){o=t;try{var b=o.stateNode;n?Jf(b,!0):Jf(o.stateNode,!1)}catch(H){ul(o,o.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=l.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,mi(l,a))));break;case 19:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,mi(l,e)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var a,e=l.return;e!==null;){if($c(e)){a=e;break}e=e.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,i=_s(l);di(l,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Wa(u,""),a.flags&=-33);var s=_s(l);di(l,s,u);break;case 3:case 4:var o=a.stateNode.containerInfo,m=_s(l);Ts(l,m,o);break;default:throw Error(g(161))}}catch(S){ul(l,l.return,S)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function ef(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Kt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fc(l,t.alternate,t),t=t.sibling}function Qa(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Qa(t);break;case 1:jt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Kc(t,t.return,a),Qa(t);break;case 27:mn(t.stateNode);case 26:case 5:jt(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}l=l.sibling}}function Jt(l,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,n=l,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Jt(n,i,a),nn(4,i);break;case 1:if(Jt(n,i,a),e=i,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){ul(e,e.return,m)}if(e=i,n=e.updateQueue,n!==null){var s=e.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Ur(o[n],s)}catch(m){ul(e,e.return,m)}}a&&u&64&&Vc(i),un(i,i.return);break;case 27:kc(i);case 26:case 5:Jt(n,i,a),a&&e===null&&u&4&&Jc(i),un(i,i.return);break;case 12:Jt(n,i,a);break;case 31:Jt(n,i,a),a&&u&4&&lf(n,i);break;case 13:Jt(n,i,a),a&&u&4&&tf(n,i);break;case 22:i.memoizedState===null&&Jt(n,i,a),un(i,i.return);break;case 30:break;default:Jt(n,i,a)}t=t.sibling}}function Es(l,t){var a=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(l!=null&&l.refCount++,a!=null&&Ve(a))}function ws(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ve(l))}function Mt(l,t,a,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nf(l,t,a,e),t=t.sibling}function nf(l,t,a,e){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(l,t,a,e),n&2048&&nn(9,t);break;case 1:Mt(l,t,a,e);break;case 3:Mt(l,t,a,e),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ve(l)));break;case 12:if(n&2048){Mt(l,t,a,e),l=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(o){ul(t,t.return,o)}}else Mt(l,t,a,e);break;case 31:Mt(l,t,a,e);break;case 13:Mt(l,t,a,e);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?Mt(l,t,a,e):sn(l,t):i._visibility&2?Mt(l,t,a,e):(i._visibility|=2,he(l,t,a,e,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Es(u,t);break;case 24:Mt(l,t,a,e),n&2048&&ws(t.alternate,t);break;default:Mt(l,t,a,e)}}function he(l,t,a,e,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=l,u=t,s=a,o=e,m=u.flags;switch(u.tag){case 0:case 11:case 15:he(i,u,s,o,n),nn(8,u);break;case 23:break;case 22:var S=u.stateNode;u.memoizedState!==null?S._visibility&2?he(i,u,s,o,n):sn(i,u):(S._visibility|=2,he(i,u,s,o,n)),n&&m&2048&&Es(u.alternate,u);break;case 24:he(i,u,s,o,n),n&&m&2048&&ws(u.alternate,u);break;default:he(i,u,s,o,n)}t=t.sibling}}function sn(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=l,e=t,n=e.flags;switch(e.tag){case 22:sn(a,e),n&2048&&Es(e.alternate,e);break;case 24:sn(a,e),n&2048&&ws(e.alternate,e);break;default:sn(a,e)}t=t.sibling}}var on=8192;function ye(l,t,a){if(l.subtreeFlags&on)for(l=l.child;l!==null;)uf(l,t,a),l=l.sibling}function uf(l,t,a){switch(l.tag){case 26:ye(l,t,a),l.flags&on&&l.memoizedState!==null&&Id(a,wt,l.memoizedState,l.memoizedProps);break;case 5:ye(l,t,a);break;case 3:case 4:var e=wt;wt=Di(l.stateNode.containerInfo),ye(l,t,a),wt=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=on,on=16777216,ye(l,t,a),on=e):ye(l,t,a));break;default:ye(l,t,a)}}function sf(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function rn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Yl=e,rf(e,l)}sf(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)of(l),l=l.sibling}function of(l){switch(l.tag){case 0:case 11:case 15:rn(l),l.flags&2048&&ca(9,l,l.return);break;case 3:rn(l);break;case 12:rn(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,hi(l)):rn(l);break;default:rn(l)}}function hi(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Yl=e,rf(e,l)}sf(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ca(8,t,t.return),hi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,hi(t));break;default:hi(t)}l=l.sibling}}function rf(l,t){for(;Yl!==null;){var a=Yl;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Ve(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,Yl=e;else l:for(a=l;Yl!==null;){e=Yl;var n=e.sibling,i=e.return;if(Ic(e),e===a){Yl=null;break l}if(n!==null){n.return=i,Yl=n;break l}Yl=i}}}var pd={getCacheForType:function(l){var t=Gl(jl),a=t.data.get(l);return a===void 0&&(a=l(),t.data.set(l,a)),a},cacheSignal:function(){return Gl(jl).controller.signal}},dd=typeof WeakMap=="function"?WeakMap:Map,el=0,pl=null,k=null,F=0,il=0,ct=null,fa=!1,ve=!1,Ms=!1,$t=0,El=0,ga=0,La=0,Os=0,ft=0,be=0,cn=null,tt=null,Ds=!1,yi=0,cf=0,vi=1/0,bi=null,pa=null,Hl=0,da=null,Se=null,kt=0,js=0,Cs=null,ff=null,fn=0,xs=null;function gt(){return(el&2)!==0&&F!==0?F&-F:z.T!==null?Ys():wo()}function gf(){if(ft===0)if((F&536870912)===0||ll){var l=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),ft=l}else ft=536870912;return l=ot.current,l!==null&&(l.flags|=32),ft}function at(l,t,a){(l===pl&&(il===2||il===9)||l.cancelPendingCommit!==null)&&(ze(l,0),ma(l,F,ft,!1)),Ce(l,a),((el&2)===0||l!==pl)&&(l===pl&&((el&2)===0&&(La|=a),El===4&&ma(l,F,ft,!1)),Ct(l))}function pf(l,t,a){if((el&6)!==0)throw Error(g(327));var e=!a&&(t&127)===0&&(t&l.expiredLanes)===0||je(l,t),n=e?yd(l,t):Us(l,t,!0),i=e;do{if(n===0){ve&&!e&&ma(l,t,0,!1);break}else{if(a=l.current.alternate,i&&!md(a)){n=Us(l,t,!1),i=!1;continue}if(n===2){if(i=t,l.errorRecoveryDisabledLanes&i)var u=0;else u=l.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;l:{var s=l;n=cn;var o=s.current.memoizedState.isDehydrated;if(o&&(ze(s,u).flags|=256),u=Us(s,u,!1),u!==2){if(Ms&&!o){s.errorRecoveryDisabledLanes|=i,La|=i,n=4;break l}i=tt,tt=n,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){ze(l,0),ma(l,t,0,!0);break}l:{switch(e=l,i=n,i){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:ma(e,t,ft,!fa);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=yi+300-et(),10<n)){if(ma(e,t,ft,!fa),Dn(e,0,!0)!==0)break l;kt=t,e.timeoutHandle=Zf(df.bind(null,e,a,tt,bi,Ds,t,ft,La,be,fa,i,"Throttled",-0,0),n);break l}df(e,a,tt,bi,Ds,t,ft,La,be,fa,i,null,-0,0)}}break}while(!0);Ct(l)}function df(l,t,a,e,n,i,u,s,o,m,S,A,y,b){if(l.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},uf(t,i,A);var H=(i&62914560)===i?yi-et():(i&4194048)===i?cf-et():0;if(H=Pd(A,H),H!==null){kt=i,l.cancelPendingCommit=H(_f.bind(null,l,t,i,a,e,n,u,s,o,S,A,null,y,b)),ma(l,i,u,!m);return}}_f(l,t,i,a,e,n,u,s,o)}function md(l){for(var t=l;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var n=a[e],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ma(l,t,a,e){t&=~Os,t&=~La,l.suspendedLanes|=t,l.pingedLanes&=~t,e&&(l.warmLanes|=t),e=l.expirationTimes;for(var n=t;0<n;){var i=31-it(n),u=1<<i;e[i]=-1,n&=~u}a!==0&&To(l,a,t)}function Si(){return(el&6)===0?(gn(0),!1):!0}function Ns(){if(k!==null){if(il===0)var l=k.return;else l=k,Yt=Ua=null,ku(l),fe=null,Je=0,l=k;for(;l!==null;)Zc(l.alternate,l),l=l.return;k=null}}function ze(l,t){var a=l.timeoutHandle;a!==-1&&(l.timeoutHandle=-1,Hd(a)),a=l.cancelPendingCommit,a!==null&&(l.cancelPendingCommit=null,a()),kt=0,Ns(),pl=l,k=a=Rt(l.current,null),F=t,il=0,ct=null,fa=!1,ve=je(l,t),Ms=!1,be=ft=Os=La=ga=El=0,tt=cn=null,Ds=!1,(t&8)!==0&&(t|=t&32);var e=l.entangledLanes;if(e!==0)for(l=l.entanglements,e&=t;0<e;){var n=31-it(e),i=1<<n;t|=l[n],e&=~i}return $t=t,Gn(),a}function mf(l,t){Z=null,z.H=tn,t===ce||t===kn?(t=jr(),il=3):t===Bu?(t=jr(),il=4):il=t===fs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,k===null&&(El=1,ri(l,yt(t,l.current)))}function hf(){var l=ot.current;return l===null?!0:(F&4194048)===F?zt===null:(F&62914560)===F||(F&536870912)!==0?l===zt:!1}function yf(){var l=z.H;return z.H=tn,l===null?tn:l}function vf(){var l=z.A;return z.A=pd,l}function zi(){El=4,fa||(F&4194048)!==F&&ot.current!==null||(ve=!0),(ga&134217727)===0&&(La&134217727)===0||pl===null||ma(pl,F,ft,!1)}function Us(l,t,a){var e=el;el|=2;var n=yf(),i=vf();(pl!==l||F!==t)&&(bi=null,ze(l,t)),t=!1;var u=El;l:do try{if(il!==0&&k!==null){var s=k,o=ct;switch(il){case 8:Ns(),u=6;break l;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var m=il;if(il=0,ct=null,_e(l,s,o,m),a&&ve){u=0;break l}break;default:m=il,il=0,ct=null,_e(l,s,o,m)}}hd(),u=El;break}catch(S){mf(l,S)}while(!0);return t&&l.shellSuspendCounter++,Yt=Ua=null,el=e,z.H=n,z.A=i,k===null&&(pl=null,F=0,Gn()),u}function hd(){for(;k!==null;)bf(k)}function yd(l,t){var a=el;el|=2;var e=yf(),n=vf();pl!==l||F!==t?(bi=null,vi=et()+500,ze(l,t)):ve=je(l,t);l:do try{if(il!==0&&k!==null){t=k;var i=ct;t:switch(il){case 1:il=0,ct=null,_e(l,t,i,1);break;case 2:case 9:if(Or(i)){il=0,ct=null,Sf(t);break}t=function(){il!==2&&il!==9||pl!==l||(il=7),Ct(l)},i.then(t,t);break l;case 3:il=7;break l;case 4:il=5;break l;case 7:Or(i)?(il=0,ct=null,Sf(t)):(il=0,ct=null,_e(l,t,i,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var s=k;if(u?ig(u):s.stateNode.complete){il=0,ct=null;var o=s.sibling;if(o!==null)k=o;else{var m=s.return;m!==null?(k=m,_i(m)):k=null}break t}}il=0,ct=null,_e(l,t,i,5);break;case 6:il=0,ct=null,_e(l,t,i,6);break;case 8:Ns(),El=6;break l;default:throw Error(g(462))}}vd();break}catch(S){mf(l,S)}while(!0);return Yt=Ua=null,z.H=e,z.A=n,el=a,k!==null?0:(pl=null,F=0,Gn(),El)}function vd(){for(;k!==null&&!Gg();)bf(k)}function bf(l){var t=Qc(l.alternate,l,$t);l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function Sf(l){var t=l,a=t.alternate;switch(t.tag){case 15:case 0:t=Rc(a,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Rc(a,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:ku(t);default:Zc(a,t),t=k=yr(t,$t),t=Qc(a,t,$t)}l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function _e(l,t,a,e){Yt=Ua=null,ku(t),fe=null,Je=0;var n=t.return;try{if(ud(l,n,t,a,F)){El=1,ri(l,yt(a,l.current)),k=null;return}}catch(i){if(n!==null)throw k=n,i;El=1,ri(l,yt(a,l.current)),k=null;return}t.flags&32768?(ll||e===1?l=!0:ve||(F&536870912)!==0?l=!1:(fa=l=!0,(e===2||e===9||e===3||e===6)&&(e=ot.current,e!==null&&e.tag===13&&(e.flags|=16384))),zf(t,l)):_i(t)}function _i(l){var t=l;do{if((t.flags&32768)!==0){zf(t,fa);return}l=t.return;var a=rd(t.alternate,t,$t);if(a!==null){k=a;return}if(t=t.sibling,t!==null){k=t;return}k=t=l}while(t!==null);El===0&&(El=5)}function zf(l,t){do{var a=cd(l.alternate,l);if(a!==null){a.flags&=32767,k=a;return}if(a=l.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(l=l.sibling,l!==null)){k=l;return}k=l=a}while(l!==null);El=6,k=null}function _f(l,t,a,e,n,i,u,s,o){l.cancelPendingCommit=null;do Ti();while(Hl!==0);if((el&6)!==0)throw Error(g(327));if(t!==null){if(t===l.current)throw Error(g(177));if(i=t.lanes|t.childLanes,i|=_u,Fg(l,a,i,u,s,o),l===pl&&(k=pl=null,F=0),Se=t,da=l,kt=a,js=i,Cs=n,ff=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,_d(En,function(){return Mf(),null})):(l.callbackNode=null,l.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=z.T,z.T=null,n=O.p,O.p=2,u=el,el|=4;try{fd(l,t,a)}finally{el=u,O.p=n,z.T=e}}Hl=1,Tf(),Af(),Ef()}}function Tf(){if(Hl===1){Hl=0;var l=da,t=Se,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var e=O.p;O.p=2;var n=el;el|=4;try{af(t,l);var i=Ks,u=or(l.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&sr(s.ownerDocument.documentElement,s)){if(o!==null&&yu(s)){var m=o.start,S=o.end;if(S===void 0&&(S=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(S,s.value.length);else{var A=s.ownerDocument||document,y=A&&A.defaultView||window;if(y.getSelection){var b=y.getSelection(),H=s.textContent.length,X=Math.min(o.start,H),fl=o.end===void 0?X:Math.min(o.end,H);!b.extend&&X>fl&&(u=fl,fl=X,X=u);var f=ur(s,X),r=ur(s,fl);if(f&&r&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==r.node||b.focusOffset!==r.offset)){var d=A.createRange();d.setStart(f.node,f.offset),b.removeAllRanges(),X>fl?(b.addRange(d),b.extend(r.node,r.offset)):(d.setEnd(r.node,r.offset),b.addRange(d))}}}}for(A=[],b=s;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<A.length;s++){var _=A[s];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Hi=!!Vs,Ks=Vs=null}finally{el=n,O.p=e,z.T=a}}l.current=t,Hl=2}}function Af(){if(Hl===2){Hl=0;var l=da,t=Se,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var e=O.p;O.p=2;var n=el;el|=4;try{Fc(l,t.alternate,t)}finally{el=n,O.p=e,z.T=a}}Hl=3}}function Ef(){if(Hl===4||Hl===3){Hl=0,Qg();var l=da,t=Se,a=kt,e=ff;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Hl=5:(Hl=0,Se=da=null,wf(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(pa=null),Ii(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(De,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=z.T,n=O.p,O.p=2,z.T=null;try{for(var i=l.onRecoverableError,u=0;u<e.length;u++){var s=e[u];i(s.value,{componentStack:s.stack})}}finally{z.T=t,O.p=n}}(kt&3)!==0&&Ti(),Ct(l),n=l.pendingLanes,(a&261930)!==0&&(n&42)!==0?l===xs?fn++:(fn=0,xs=l):fn=0,gn(0)}}function wf(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Ve(t)))}function Ti(){return Tf(),Af(),Ef(),Mf()}function Mf(){if(Hl!==5)return!1;var l=da,t=js;js=0;var a=Ii(kt),e=z.T,n=O.p;try{O.p=32>a?32:a,z.T=null,a=Cs,Cs=null;var i=da,u=kt;if(Hl=0,Se=da=null,kt=0,(el&6)!==0)throw Error(g(331));var s=el;if(el|=4,of(i.current),nf(i,i.current,u,a),el=s,gn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(De,i)}catch{}return!0}finally{O.p=n,z.T=e,wf(l,t)}}function Of(l,t,a){t=yt(a,t),t=cs(l.stateNode,t,2),l=sa(l,t,2),l!==null&&(Ce(l,2),Ct(l))}function ul(l,t,a){if(l.tag===3)Of(l,l,a);else for(;t!==null;){if(t.tag===3){Of(t,l,a);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(pa===null||!pa.has(e))){l=yt(a,l),a=Oc(2),e=sa(t,a,2),e!==null&&(Dc(a,e,t,l),Ce(e,2),Ct(e));break}}t=t.return}}function Hs(l,t,a){var e=l.pingCache;if(e===null){e=l.pingCache=new dd;var n=new Set;e.set(t,n)}else n=e.get(t),n===void 0&&(n=new Set,e.set(t,n));n.has(a)||(Ms=!0,n.add(a),l=bd.bind(null,l,t,a),t.then(l,l))}function bd(l,t,a){var e=l.pingCache;e!==null&&e.delete(t),l.pingedLanes|=l.suspendedLanes&a,l.warmLanes&=~a,pl===l&&(F&a)===a&&(El===4||El===3&&(F&62914560)===F&&300>et()-yi?(el&2)===0&&ze(l,0):Os|=a,be===F&&(be=0)),Ct(l)}function Df(l,t){t===0&&(t=_o()),l=Ca(l,t),l!==null&&(Ce(l,t),Ct(l))}function Sd(l){var t=l.memoizedState,a=0;t!==null&&(a=t.retryLane),Df(l,a)}function zd(l,t){var a=0;switch(l.tag){case 31:case 13:var e=l.stateNode,n=l.memoizedState;n!==null&&(a=n.retryLane);break;case 19:e=l.stateNode;break;case 22:e=l.stateNode._retryCache;break;default:throw Error(g(314))}e!==null&&e.delete(t),Df(l,a)}function _d(l,t){return $i(l,t)}var Ai=null,Te=null,Rs=!1,Ei=!1,Bs=!1,ha=0;function Ct(l){l!==Te&&l.next===null&&(Te===null?Ai=Te=l:Te=Te.next=l),Ei=!0,Rs||(Rs=!0,Ad())}function gn(l,t){if(!Bs&&Ei){Bs=!0;do for(var a=!1,e=Ai;e!==null;){if(l!==0){var n=e.pendingLanes;if(n===0)var i=0;else{var u=e.suspendedLanes,s=e.pingedLanes;i=(1<<31-it(42|l)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Nf(e,i))}else i=F,i=Dn(e,e===pl?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||je(e,i)||(a=!0,Nf(e,i));e=e.next}while(a);Bs=!1}}function Td(){jf()}function jf(){Ei=Rs=!1;var l=0;ha!==0&&Ud()&&(l=ha);for(var t=et(),a=null,e=Ai;e!==null;){var n=e.next,i=Cf(e,t);i===0?(e.next=null,a===null?Ai=n:a.next=n,n===null&&(Te=a)):(a=e,(l!==0||(i&3)!==0)&&(Ei=!0)),e=n}Hl!==0&&Hl!==5||gn(l),ha!==0&&(ha=0)}function Cf(l,t){for(var a=l.suspendedLanes,e=l.pingedLanes,n=l.expirationTimes,i=l.pendingLanes&-62914561;0<i;){var u=31-it(i),s=1<<u,o=n[u];o===-1?((s&a)===0||(s&e)!==0)&&(n[u]=Wg(s,t)):o<=t&&(l.expiredLanes|=s),i&=~s}if(t=pl,a=F,a=Dn(l,l===t?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e=l.callbackNode,a===0||l===t&&(il===2||il===9)||l.cancelPendingCommit!==null)return e!==null&&e!==null&&ki(e),l.callbackNode=null,l.callbackPriority=0;if((a&3)===0||je(l,a)){if(t=a&-a,t===l.callbackPriority)return t;switch(e!==null&&ki(e),Ii(a)){case 2:case 8:a=So;break;case 32:a=En;break;case 268435456:a=zo;break;default:a=En}return e=xf.bind(null,l),a=$i(a,e),l.callbackPriority=t,l.callbackNode=a,t}return e!==null&&e!==null&&ki(e),l.callbackPriority=2,l.callbackNode=null,2}function xf(l,t){if(Hl!==0&&Hl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var a=l.callbackNode;if(Ti()&&l.callbackNode!==a)return null;var e=F;return e=Dn(l,l===pl?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e===0?null:(pf(l,e,t),Cf(l,et()),l.callbackNode!=null&&l.callbackNode===a?xf.bind(null,l):null)}function Nf(l,t){if(Ti())return null;pf(l,t,!0)}function Ad(){Rd(function(){(el&6)!==0?$i(bo,Td):jf()})}function Ys(){if(ha===0){var l=oe;l===0&&(l=wn,wn<<=1,(wn&261888)===0&&(wn=256)),ha=l}return ha}function Uf(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Nn(""+l)}function Hf(l,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,l.id&&a.setAttribute("form",l.id),t.parentNode.insertBefore(a,t),l=new FormData(l),a.parentNode.removeChild(a),l}function Ed(l,t,a,e,n){if(t==="submit"&&a&&a.stateNode===n){var i=Uf((n[Wl]||null).action),u=e.submitter;u&&(t=(t=u[Wl]||null)?Uf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Bn("action","action",null,e,n);l.push({event:s,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(ha!==0){var o=u?Hf(n,u):new FormData(n);ns(a,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?Hf(n,u):new FormData(n),ns(a,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var qs=0;qs<zu.length;qs++){var Xs=zu[qs],wd=Xs.toLowerCase(),Md=Xs[0].toUpperCase()+Xs.slice(1);Et(wd,"on"+Md)}Et(fr,"onAnimationEnd"),Et(gr,"onAnimationIteration"),Et(pr,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Lp,"onTransitionRun"),Et(Zp,"onTransitionStart"),Et(Vp,"onTransitionCancel"),Et(dr,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Od=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function Rf(l,t){t=(t&4)!==0;for(var a=0;a<l.length;a++){var e=l[a],n=e.event;e=e.listeners;l:{var i=void 0;if(t)for(var u=e.length-1;0<=u;u--){var s=e[u],o=s.instance,m=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break l;i=s,n.currentTarget=m;try{i(n)}catch(S){Xn(S)}n.currentTarget=null,i=o}else for(u=0;u<e.length;u++){if(s=e[u],o=s.instance,m=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break l;i=s,n.currentTarget=m;try{i(n)}catch(S){Xn(S)}n.currentTarget=null,i=o}}}}function W(l,t){var a=t[Pi];a===void 0&&(a=t[Pi]=new Set);var e=l+"__bubble";a.has(e)||(Bf(t,l,2,!1),a.add(e))}function Gs(l,t,a){var e=0;t&&(e|=4),Bf(a,l,e,t)}var wi="_reactListening"+Math.random().toString(36).slice(2);function Qs(l){if(!l[wi]){l[wi]=!0,Do.forEach(function(a){a!=="selectionchange"&&(Od.has(a)||Gs(a,!1,l),Gs(a,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[wi]||(t[wi]=!0,Gs("selectionchange",!1,t))}}function Bf(l,t,a,e){switch(gg(t)){case 2:var n=am;break;case 8:n=em;break;default:n=eo}a=n.bind(null,t,a,l),n=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),e?n!==void 0?l.addEventListener(t,a,{capture:!0,passive:n}):l.addEventListener(t,a,!0):n!==void 0?l.addEventListener(t,a,{passive:n}):l.addEventListener(t,a,!1)}function Ls(l,t,a,e,n){var i=e;if((t&1)===0&&(t&2)===0&&e!==null)l:for(;;){if(e===null)return;var u=e.tag;if(u===3||u===4){var s=e.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=e.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Va(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){e=i=u;continue l}s=s.parentNode}}e=e.return}Go(function(){var m=i,S=uu(a),A=[];l:{var y=mr.get(l);if(y!==void 0){var b=Bn,H=l;switch(l){case"keypress":if(Hn(a)===0)break l;case"keydown":case"keyup":b=zp;break;case"focusin":H="focus",b=gu;break;case"focusout":H="blur",b=gu;break;case"beforeblur":case"afterblur":b=gu;break;case"click":if(a.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ap;break;case fr:case gr:case pr:b=gp;break;case dr:b=wp;break;case"scroll":case"scrollend":b=sp;break;case"wheel":b=Op;break;case"copy":case"cut":case"paste":b=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ko;break;case"toggle":case"beforetoggle":b=jp}var X=(t&4)!==0,fl=!X&&(l==="scroll"||l==="scrollend"),f=X?y!==null?y+"Capture":null:y;X=[];for(var r=m,d;r!==null;){var _=r;if(d=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||d===null||f===null||(_=Ue(r,f),_!=null&&X.push(dn(r,_,d))),fl)break;r=r.return}0<X.length&&(y=new b(y,H,null,a,S),A.push({event:y,listeners:X}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",b=l==="mouseout"||l==="pointerout",y&&a!==iu&&(H=a.relatedTarget||a.fromElement)&&(Va(H)||H[Za]))break l;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(H=a.relatedTarget||a.toElement,b=m,H=H?Va(H):null,H!==null&&(fl=x(H),X=H.tag,H!==fl||X!==5&&X!==27&&X!==6)&&(H=null)):(b=null,H=m),b!==H)){if(X=Zo,_="onMouseLeave",f="onMouseEnter",r="mouse",(l==="pointerout"||l==="pointerover")&&(X=Ko,_="onPointerLeave",f="onPointerEnter",r="pointer"),fl=b==null?y:Ne(b),d=H==null?y:Ne(H),y=new X(_,r+"leave",b,a,S),y.target=fl,y.relatedTarget=d,_=null,Va(S)===m&&(X=new X(f,r+"enter",H,a,S),X.target=d,X.relatedTarget=fl,_=X),fl=_,b&&H)t:{for(X=Dd,f=b,r=H,d=0,_=f;_;_=X(_))d++;_=0;for(var q=r;q;q=X(q))_++;for(;0<d-_;)f=X(f),d--;for(;0<_-d;)r=X(r),_--;for(;d--;){if(f===r||r!==null&&f===r.alternate){X=f;break t}f=X(f),r=X(r)}X=null}else X=null;b!==null&&Yf(A,y,b,X,!1),H!==null&&fl!==null&&Yf(A,fl,H,X,!0)}}l:{if(y=m?Ne(m):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var tl=lr;else if(Io(y))if(tr)tl=Xp;else{tl=Yp;var B=Bp}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?m&&nu(m.elementType)&&(tl=lr):tl=qp;if(tl&&(tl=tl(l,m))){Po(A,tl,a,S);break l}B&&B(l,y,m),l==="focusout"&&m&&y.type==="number"&&m.memoizedProps.value!=null&&eu(y,"number",y.value)}switch(B=m?Ne(m):window,l){case"focusin":(Io(B)||B.contentEditable==="true")&&(le=B,vu=m,Qe=null);break;case"focusout":Qe=vu=le=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,rr(A,a,S);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":rr(A,a,S)}var V;if(du)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pa?Wo(l,a)&&(I="onCompositionEnd"):l==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Jo&&a.locale!=="ko"&&(Pa||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pa&&(V=Qo()):(la=S,ru="value"in la?la.value:la.textContent,Pa=!0)),B=Mi(m,I),0<B.length&&(I=new Vo(I,l,null,a,S),A.push({event:I,listeners:B}),V?I.data=V:(V=Fo(a),V!==null&&(I.data=V)))),(V=xp?Np(l,a):Up(l,a))&&(I=Mi(m,"onBeforeInput"),0<I.length&&(B=new Vo("onBeforeInput","beforeinput",null,a,S),A.push({event:B,listeners:I}),B.data=V)),Ed(A,l,m,a,S)}Rf(A,t)})}function dn(l,t,a){return{instance:l,listener:t,currentTarget:a}}function Mi(l,t){for(var a=t+"Capture",e=[];l!==null;){var n=l,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ue(l,a),n!=null&&e.unshift(dn(l,n,i)),n=Ue(l,t),n!=null&&e.push(dn(l,n,i))),l.tag===3)return e;l=l.return}return[]}function Dd(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Yf(l,t,a,e,n){for(var i=t._reactName,u=[];a!==null&&a!==e;){var s=a,o=s.alternate,m=s.stateNode;if(s=s.tag,o!==null&&o===e)break;s!==5&&s!==26&&s!==27||m===null||(o=m,n?(m=Ue(a,i),m!=null&&u.unshift(dn(a,m,o))):n||(m=Ue(a,i),m!=null&&u.push(dn(a,m,o)))),a=a.return}u.length!==0&&l.push({event:t,listeners:u})}var jd=/\r\n?/g,Cd=/\u0000|\uFFFD/g;function qf(l){return(typeof l=="string"?l:""+l).replace(jd,`
`).replace(Cd,"")}function Xf(l,t){return t=qf(t),qf(l)===t}function cl(l,t,a,e,n,i){switch(a){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||Wa(l,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&Wa(l,""+e);break;case"className":Cn(l,"class",e);break;case"tabIndex":Cn(l,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(l,a,e);break;case"style":qo(l,e,i);break;case"data":if(t!=="object"){Cn(l,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||a!=="href")){l.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=Nn(""+e),l.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){l.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&cl(l,t,"name",n.name,n,null),cl(l,t,"formEncType",n.formEncType,n,null),cl(l,t,"formMethod",n.formMethod,n,null),cl(l,t,"formTarget",n.formTarget,n,null)):(cl(l,t,"encType",n.encType,n,null),cl(l,t,"method",n.method,n,null),cl(l,t,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=Nn(""+e),l.setAttribute(a,e);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=a}}break;case"multiple":l.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":l.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){l.removeAttribute("xlink:href");break}a=Nn(""+e),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""+e):l.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""):l.removeAttribute(a);break;case"capture":case"download":e===!0?l.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,e):l.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?l.setAttribute(a,e):l.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?l.removeAttribute(a):l.setAttribute(a,e);break;case"popover":W("beforetoggle",l),W("toggle",l),jn(l,"popover",e);break;case"xlinkActuate":Nt(l,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Nt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Nt(l,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Nt(l,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Nt(l,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Nt(l,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":jn(l,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ip.get(a)||a,jn(l,a,e))}}function Zs(l,t,a,e,n,i){switch(a){case"style":qo(l,e,i);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=a}}break;case"children":typeof e=="string"?Wa(l,e):(typeof e=="number"||typeof e=="bigint")&&Wa(l,""+e);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jo.hasOwnProperty(a))l:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=l[Wl]||null,i=i!=null?i[a]:null,typeof i=="function"&&l.removeEventListener(t,i,n),typeof e=="function")){typeof i!="function"&&i!==null&&(a in l?l[a]=null:l.hasAttribute(a)&&l.removeAttribute(a)),l.addEventListener(t,e,n);break l}a in l?l[a]=e:e===!0?l.setAttribute(a,""):jn(l,a,e)}}}function Ll(l,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var e=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:cl(l,t,i,u,a,null)}}n&&cl(l,t,"srcSet",a.srcSet,a,null),e&&cl(l,t,"src",a.src,a,null);return;case"input":W("invalid",l);var s=i=u=n=null,o=null,m=null;for(e in a)if(a.hasOwnProperty(e)){var S=a[e];if(S!=null)switch(e){case"name":n=S;break;case"type":u=S;break;case"checked":o=S;break;case"defaultChecked":m=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(g(137,t));break;default:cl(l,t,e,S,a,null)}}Ho(l,i,s,o,m,u,n,!1);return;case"select":W("invalid",l),e=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":e=s;default:cl(l,t,n,s,a,null)}t=i,a=u,l.multiple=!!e,t!=null?ka(l,!!e,t,!1):a!=null&&ka(l,!!e,a,!0);return;case"textarea":W("invalid",l),i=n=e=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":e=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(g(91));break;default:cl(l,t,u,s,a,null)}Bo(l,e,n,i);return;case"option":for(o in a)if(a.hasOwnProperty(o)&&(e=a[o],e!=null))switch(o){case"selected":l.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:cl(l,t,o,e,a,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(e=0;e<pn.length;e++)W(pn[e],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(e=a[m],e!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:cl(l,t,m,e,a,null)}return;default:if(nu(t)){for(S in a)a.hasOwnProperty(S)&&(e=a[S],e!==void 0&&Zs(l,t,S,e,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(e=a[s],e!=null&&cl(l,t,s,e,a,null))}function xd(l,t,a,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,o=null,m=null,S=null;for(b in a){var A=a[b];if(a.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=A;default:e.hasOwnProperty(b)||cl(l,t,b,null,e,A)}}for(var y in e){var b=e[y];if(A=a[y],e.hasOwnProperty(y)&&(b!=null||A!=null))switch(y){case"type":i=b;break;case"name":n=b;break;case"checked":m=b;break;case"defaultChecked":S=b;break;case"value":u=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(g(137,t));break;default:b!==A&&cl(l,t,y,b,e,A)}}au(l,u,s,o,m,S,i,n);return;case"select":b=u=s=y=null;for(i in a)if(o=a[i],a.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:e.hasOwnProperty(i)||cl(l,t,i,null,e,o)}for(n in e)if(i=e[n],o=a[n],e.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&cl(l,t,n,i,e,o)}t=s,a=u,e=b,y!=null?ka(l,!!a,y,!1):!!e!=!!a&&(t!=null?ka(l,!!a,t,!0):ka(l,!!a,a?[]:"",!1));return;case"textarea":b=y=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!e.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:cl(l,t,s,null,e,n)}for(u in e)if(n=e[u],i=a[u],e.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==i&&cl(l,t,u,n,e,i)}Ro(l,y,b);return;case"option":for(var H in a)if(y=a[H],a.hasOwnProperty(H)&&y!=null&&!e.hasOwnProperty(H))switch(H){case"selected":l.selected=!1;break;default:cl(l,t,H,null,e,y)}for(o in e)if(y=e[o],b=a[o],e.hasOwnProperty(o)&&y!==b&&(y!=null||b!=null))switch(o){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:cl(l,t,o,y,e,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in a)y=a[X],a.hasOwnProperty(X)&&y!=null&&!e.hasOwnProperty(X)&&cl(l,t,X,null,e,y);for(m in e)if(y=e[m],b=a[m],e.hasOwnProperty(m)&&y!==b&&(y!=null||b!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,t));break;default:cl(l,t,m,y,e,b)}return;default:if(nu(t)){for(var fl in a)y=a[fl],a.hasOwnProperty(fl)&&y!==void 0&&!e.hasOwnProperty(fl)&&Zs(l,t,fl,void 0,e,y);for(S in e)y=e[S],b=a[S],!e.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||Zs(l,t,S,y,e,b);return}}for(var f in a)y=a[f],a.hasOwnProperty(f)&&y!=null&&!e.hasOwnProperty(f)&&cl(l,t,f,null,e,y);for(A in e)y=e[A],b=a[A],!e.hasOwnProperty(A)||y===b||y==null&&b==null||cl(l,t,A,y,e,b)}function Gf(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nd(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var n=a[e],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Gf(u)){for(u=0,s=n.responseEnd,e+=1;e<a.length;e++){var o=a[e],m=o.startTime;if(m>s)break;var S=o.transferSize,A=o.initiatorType;S&&Gf(A)&&(o=o.responseEnd,u+=S*(o<s?1:(s-m)/(o-m)))}if(--e,t+=8*(i+u)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Vs=null,Ks=null;function Oi(l){return l.nodeType===9?l:l.ownerDocument}function Qf(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lf(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Js(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=null;function Ud(){var l=window.event;return l&&l.type==="popstate"?l===$s?!1:($s=l,!0):($s=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,Rd=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(l){return Vf.resolve(null).then(l).catch(Bd)}:Zf;function Bd(l){setTimeout(function(){throw l})}function ya(l){return l==="head"}function Kf(l,t){var a=t,e=0;do{var n=a.nextSibling;if(l.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(e===0){l.removeChild(n),Me(t);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")mn(l.ownerDocument.documentElement);else if(a==="head"){a=l.ownerDocument.head,mn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[xe]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&mn(l.ownerDocument.body);a=n}while(a);Me(t)}function Jf(l,t){var a=l;l=0;do{var e=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(l===0)break;l--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||l++;a=e}while(a)}function ks(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ks(a),lu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}l.removeChild(a)}}function Yd(l,t,a,e){for(;l.nodeType===1;){var n=a;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(e){if(!l[xe])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(i=l.getAttribute("rel"),i==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(i!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(i=l.getAttribute("src"),(i!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===i)return l}else return l;if(l=_t(l.nextSibling),l===null)break}return null}function qd(l,t,a){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!a||(l=_t(l.nextSibling),l===null))return null;return l}function $f(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=_t(l.nextSibling),l===null))return null;return l}function Ws(l){return l.data==="$?"||l.data==="$~"}function Fs(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Xd(l,t){var a=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||a.readyState!=="loading")t();else{var e=function(){t(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),l._reactRetry=e}}function _t(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Is=null;function kf(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="/$"||a==="/&"){if(t===0)return _t(l.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}l=l.nextSibling}return null}function Wf(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return l;t--}else a!=="/$"&&a!=="/&"||t++}l=l.previousSibling}return null}function Ff(l,t,a){switch(t=Oi(a),l){case"html":if(l=t.documentElement,!l)throw Error(g(452));return l;case"head":if(l=t.head,!l)throw Error(g(453));return l;case"body":if(l=t.body,!l)throw Error(g(454));return l;default:throw Error(g(451))}}function mn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);lu(l)}var Tt=new Map,If=new Set;function Di(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=O.d;O.d={f:Gd,r:Qd,D:Ld,C:Zd,L:Vd,m:Kd,X:$d,S:Jd,M:kd};function Gd(){var l=Wt.f(),t=Si();return l||t}function Qd(l){var t=Ka(l);t!==null&&t.tag===5&&t.type==="form"?dc(t):Wt.r(l)}var Ae=typeof document>"u"?null:document;function Pf(l,t,a){var e=Ae;if(e&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),If.has(n)||(If.add(n),l={rel:l,crossOrigin:a,href:t},e.querySelector(n)===null&&(t=e.createElement("link"),Ll(t,"link",l),Bl(t),e.head.appendChild(t)))}}function Ld(l){Wt.D(l),Pf("dns-prefetch",l,null)}function Zd(l,t){Wt.C(l,t),Pf("preconnect",l,t)}function Vd(l,t,a){Wt.L(l,t,a);var e=Ae;if(e&&l&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+mt(a.imageSizes)+'"]')):n+='[href="'+mt(l)+'"]';var i=n;switch(t){case"style":i=Ee(l);break;case"script":i=we(l)}Tt.has(i)||(l=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:l,as:t},a),Tt.set(i,l),e.querySelector(n)!==null||t==="style"&&e.querySelector(hn(i))||t==="script"&&e.querySelector(yn(i))||(t=e.createElement("link"),Ll(t,"link",l),Bl(t),e.head.appendChild(t)))}}function Kd(l,t){Wt.m(l,t);var a=Ae;if(a&&l){var e=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(e)+'"][href="'+mt(l)+'"]',i=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=we(l)}if(!Tt.has(i)&&(l=N({rel:"modulepreload",href:l},t),Tt.set(i,l),a.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yn(i)))return}e=a.createElement("link"),Ll(e,"link",l),Bl(e),a.head.appendChild(e)}}}function Jd(l,t,a){Wt.S(l,t,a);var e=Ae;if(e&&l){var n=Ja(e).hoistableStyles,i=Ee(l);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=e.querySelector(hn(i)))s.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},a),(a=Tt.get(i))&&Ps(l,a);var o=u=e.createElement("link");Bl(o),Ll(o,"link",l),o._p=new Promise(function(m,S){o.onload=m,o.onerror=S}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,ji(u,t,e)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function $d(l,t){Wt.X(l,t);var a=Ae;if(a&&l){var e=Ja(a).hoistableScripts,n=we(l),i=e.get(n);i||(i=a.querySelector(yn(n)),i||(l=N({src:l,async:!0},t),(t=Tt.get(n))&&lo(l,t),i=a.createElement("script"),Bl(i),Ll(i,"link",l),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(n,i))}}function kd(l,t){Wt.M(l,t);var a=Ae;if(a&&l){var e=Ja(a).hoistableScripts,n=we(l),i=e.get(n);i||(i=a.querySelector(yn(n)),i||(l=N({src:l,async:!0,type:"module"},t),(t=Tt.get(n))&&lo(l,t),i=a.createElement("script"),Bl(i),Ll(i,"link",l),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(n,i))}}function lg(l,t,a,e){var n=(n=$.current)?Di(n):null;if(!n)throw Error(g(446));switch(l){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ee(a.href),a=Ja(n).hoistableStyles,e=a.get(t),e||(e={type:"style",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){l=Ee(a.href);var i=Ja(n).hoistableStyles,u=i.get(l);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(l,u),(i=n.querySelector(hn(l)))&&!i._p&&(u.instance=i,u.state.loading=5),Tt.has(l)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(l,a),i||Wd(n,l,a,u.state))),t&&e===null)throw Error(g(528,""));return u}if(t&&e!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=we(a),a=Ja(n).hoistableScripts,e=a.get(t),e||(e={type:"script",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,l))}}function Ee(l){return'href="'+mt(l)+'"'}function hn(l){return'link[rel="stylesheet"]['+l+"]"}function tg(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function Wd(l,t,a,e){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=l.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),Ll(t,"link",a),Bl(t),l.head.appendChild(t))}function we(l){return'[src="'+mt(l)+'"]'}function yn(l){return"script[async]"+l}function ag(l,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var e=l.querySelector('style[data-href~="'+mt(a.href)+'"]');if(e)return t.instance=e,Bl(e),e;var n=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(l.ownerDocument||l).createElement("style"),Bl(e),Ll(e,"style",n),ji(e,a.precedence,l),t.instance=e;case"stylesheet":n=Ee(a.href);var i=l.querySelector(hn(n));if(i)return t.state.loading|=4,t.instance=i,Bl(i),i;e=tg(a),(n=Tt.get(n))&&Ps(e,n),i=(l.ownerDocument||l).createElement("link"),Bl(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Ll(i,"link",e),t.state.loading|=4,ji(i,a.precedence,l),t.instance=i;case"script":return i=we(a.src),(n=l.querySelector(yn(i)))?(t.instance=n,Bl(n),n):(e=a,(n=Tt.get(i))&&(e=N({},a),lo(e,n)),l=l.ownerDocument||l,n=l.createElement("script"),Bl(n),Ll(n,"link",e),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,ji(e,a.precedence,l));return t.instance}function ji(l,t,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,i=n,u=0;u<e.length;u++){var s=e[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(l,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(l,t.firstChild))}function Ps(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function lo(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Ci=null;function eg(l,t,a){if(Ci===null){var e=new Map,n=Ci=new Map;n.set(a,e)}else n=Ci,e=n.get(a),e||(e=new Map,n.set(a,e));if(e.has(l))return e;for(e.set(l,null),a=a.getElementsByTagName(l),n=0;n<a.length;n++){var i=a[n];if(!(i[xe]||i[ql]||l==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=l+u;var s=e.get(u);s?s.push(i):e.set(u,[i])}}return e}function ng(l,t,a){l=l.ownerDocument||l,l.head.insertBefore(a,t==="title"?l.querySelector("head > title"):null)}function Fd(l,t,a){if(a===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ig(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Id(l,t,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ee(e.href),i=t.querySelector(hn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xi.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=i,Bl(i);return}i=t.ownerDocument||t,e=tg(e),(n=Tt.get(n))&&Ps(e,n),i=i.createElement("link"),Bl(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Ll(i,"link",e),a.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=xi.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}var to=0;function Pd(l,t){return l.stylesheets&&l.count===0&&Ui(l,l.stylesheets),0<l.count||0<l.imgCount?function(a){var e=setTimeout(function(){if(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend){var i=l.unsuspend;l.unsuspend=null,i()}},6e4+t);0<l.imgBytes&&to===0&&(to=62500*Nd());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend)){var i=l.unsuspend;l.unsuspend=null,i()}},(l.imgBytes>to?50:800)+t);return l.unsuspend=a,function(){l.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Ni=null;function Ui(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Ni=new Map,t.forEach(lm,l),Ni=null,xi.call(l))}function lm(l,t){if(!(t.state.loading&4)){var a=Ni.get(l);if(a)var e=a.get(null);else{a=new Map,Ni.set(l,a);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),e=u)}e&&a.set(null,e)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||e,i===e&&a.set(null,n),a.set(u,n),this.count++,e=xi.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),i?i.parentNode.insertBefore(n,i.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var vn={$$typeof:sl,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function tm(l,t,a,e,n,i,u,s,o){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ug(l,t,a,e,n,i,u,s,o,m,S,A){return l=new tm(l,t,a,u,o,m,S,A,s),t=1,i===!0&&(t|=24),i=st(3,null,null,t),l.current=i,i.stateNode=l,t=Uu(),t.refCount++,l.pooledCache=t,t.refCount++,i.memoizedState={element:e,isDehydrated:a,cache:t},Yu(i),l}function sg(l){return l?(l=ee,l):ee}function og(l,t,a,e,n,i){n=sg(n),e.context===null?e.context=n:e.pendingContext=n,e=ua(t),e.payload={element:a},i=i===void 0?null:i,i!==null&&(e.callback=i),a=sa(l,e,t),a!==null&&(at(a,l,t),ke(a,l,t))}function rg(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var a=l.retryLane;l.retryLane=a!==0&&a<t?a:t}}function ao(l,t){rg(l,t),(l=l.alternate)&&rg(l,t)}function cg(l){if(l.tag===13||l.tag===31){var t=Ca(l,67108864);t!==null&&at(t,l,67108864),ao(l,67108864)}}function fg(l){if(l.tag===13||l.tag===31){var t=gt();t=Fi(t);var a=Ca(l,t);a!==null&&at(a,l,t),ao(l,t)}}var Hi=!0;function am(l,t,a,e){var n=z.T;z.T=null;var i=O.p;try{O.p=2,eo(l,t,a,e)}finally{O.p=i,z.T=n}}function em(l,t,a,e){var n=z.T;z.T=null;var i=O.p;try{O.p=8,eo(l,t,a,e)}finally{O.p=i,z.T=n}}function eo(l,t,a,e){if(Hi){var n=no(e);if(n===null)Ls(l,t,e,Ri,a),pg(l,e);else if(im(n,l,t,a,e))e.stopPropagation();else if(pg(l,e),t&4&&-1<nm.indexOf(l)){for(;n!==null;){var i=Ka(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=wa(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-it(u);s.entanglements[1]|=o,u&=~o}Ct(i),(el&6)===0&&(vi=et()+500,gn(0))}}break;case 31:case 13:s=Ca(i,2),s!==null&&at(s,i,2),Si(),ao(i,2)}if(i=no(e),i===null&&Ls(l,t,e,Ri,a),i===n)break;n=i}n!==null&&e.stopPropagation()}else Ls(l,t,e,null,a)}}function no(l){return l=uu(l),io(l)}var Ri=null;function io(l){if(Ri=null,l=Va(l),l!==null){var t=x(l);if(t===null)l=null;else{var a=t.tag;if(a===13){if(l=Y(t),l!==null)return l;l=null}else if(a===31){if(l=P(t),l!==null)return l;l=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ri=l,null}function gg(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lg()){case bo:return 2;case So:return 8;case En:case Zg:return 32;case zo:return 268435456;default:return 32}default:return 32}}var uo=!1,va=null,ba=null,Sa=null,bn=new Map,Sn=new Map,za=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(l,t){switch(l){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function zn(l,t,a,e,n,i){return l===null||l.nativeEvent!==i?(l={blockedOn:t,domEventName:a,eventSystemFlags:e,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&cg(t)),l):(l.eventSystemFlags|=e,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function im(l,t,a,e,n){switch(t){case"focusin":return va=zn(va,l,t,a,e,n),!0;case"dragenter":return ba=zn(ba,l,t,a,e,n),!0;case"mouseover":return Sa=zn(Sa,l,t,a,e,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,zn(bn.get(i)||null,l,t,a,e,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,zn(Sn.get(i)||null,l,t,a,e,n)),!0}return!1}function dg(l){var t=Va(l.target);if(t!==null){var a=x(t);if(a!==null){if(t=a.tag,t===13){if(t=Y(a),t!==null){l.blockedOn=t,Mo(l.priority,function(){fg(a)});return}}else if(t===31){if(t=P(a),t!==null){l.blockedOn=t,Mo(l.priority,function(){fg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){l.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Bi(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var a=no(l.nativeEvent);if(a===null){a=l.nativeEvent;var e=new a.constructor(a.type,a);iu=e,a.target.dispatchEvent(e),iu=null}else return t=Ka(a),t!==null&&cg(t),l.blockedOn=a,!1;t.shift()}return!0}function mg(l,t,a){Bi(l)&&a.delete(t)}function um(){uo=!1,va!==null&&Bi(va)&&(va=null),ba!==null&&Bi(ba)&&(ba=null),Sa!==null&&Bi(Sa)&&(Sa=null),bn.forEach(mg),Sn.forEach(mg)}function Yi(l,t){l.blockedOn===t&&(l.blockedOn=null,uo||(uo=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,um)))}var qi=null;function hg(l){qi!==l&&(qi=l,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){qi===l&&(qi=null);for(var t=0;t<l.length;t+=3){var a=l[t],e=l[t+1],n=l[t+2];if(typeof e!="function"){if(io(e||a)===null)continue;break}var i=Ka(a);i!==null&&(l.splice(t,3),t-=3,ns(i,{pending:!0,data:n,method:a.method,action:e},e,n))}}))}function Me(l){function t(o){return Yi(o,l)}va!==null&&Yi(va,l),ba!==null&&Yi(ba,l),Sa!==null&&Yi(Sa,l),bn.forEach(t),Sn.forEach(t);for(var a=0;a<za.length;a++){var e=za[a];e.blockedOn===l&&(e.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)dg(a),a.blockedOn===null&&za.shift();if(a=(l.ownerDocument||l).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var n=a[e],i=a[e+1],u=n[Wl]||null;if(typeof i=="function")u||hg(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Wl]||null)s=u.formAction;else if(io(n)!==null)continue}else s=u.action;typeof s=="function"?a[e+1]=s:(a.splice(e,3),e-=3),hg(a)}}}function yg(){function l(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function so(l){this._internalRoot=l}Xi.prototype.render=so.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,e=gt();og(a,e,l,t,null,null)},Xi.prototype.unmount=so.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;og(l.current,2,null,l,null,null),Si(),t[Za]=null}};function Xi(l){this._internalRoot=l}Xi.prototype.unstable_scheduleHydration=function(l){if(l){var t=wo();l={blockedOn:null,target:l,priority:t};for(var a=0;a<za.length&&t!==0&&t<za[a].priority;a++);za.splice(a,0,l),a===0&&dg(l)}};var vg=M.version;if(vg!=="19.2.3")throw Error(g(527,vg,"19.2.3"));O.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(g(188)):(l=Object.keys(l).join(","),Error(g(268,l)));return l=T(t),l=l!==null?D(l):null,l=l===null?null:l.stateNode,l};var sm={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{De=Gi.inject(sm),nt=Gi}catch{}}return Tn.createRoot=function(l,t){if(!w(l))throw Error(g(299));var a=!1,e="",n=Ac,i=Ec,u=wc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ug(l,1,!1,null,null,a,e,null,n,i,u,yg),l[Za]=t.current,Qs(l),new so(t)},Tn.hydrateRoot=function(l,t,a){if(!w(l))throw Error(g(299));var e=!1,n="",i=Ac,u=Ec,s=wc,o=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(o=a.formState)),t=ug(l,1,!0,t,a??null,e,n,o,i,u,s,yg),t.context=sg(null),a=t.current,e=gt(),e=Fi(e),n=ua(e),n.callback=null,sa(a,n,e),a=e,t.current.lanes=a,Ce(t,a),Ct(t),l[Za]=t.current,Qs(l),new Xi(t)},Tn.version="19.2.3",Tn}var Og;function ym(){if(Og)return co.exports;Og=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(M){console.error(M)}}return v(),co.exports=hm(),co.exports}var vm=ym();const bm=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sm=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(M,C,g)=>g?g.toUpperCase():C.toLowerCase()),Dg=v=>{const M=Sm(v);return M.charAt(0).toUpperCase()+M.slice(1)},Bg=(...v)=>v.filter((M,C,g)=>!!M&&M.trim()!==""&&g.indexOf(M)===C).join(" ").trim(),zm=v=>{for(const M in v)if(M.startsWith("aria-")||M==="role"||M==="title")return!0};var _m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Tm=zl.forwardRef(({color:v="currentColor",size:M=24,strokeWidth:C=2,absoluteStrokeWidth:g,className:w="",children:x,iconNode:Y,...P},U)=>zl.createElement("svg",{ref:U,..._m,width:M,height:M,stroke:v,strokeWidth:g?Number(C)*24/Number(M):C,className:Bg("lucide",w),...!x&&!zm(P)&&{"aria-hidden":"true"},...P},[...Y.map(([T,D])=>zl.createElement(T,D)),...Array.isArray(x)?x:[x]]));const Ta=(v,M)=>{const C=zl.forwardRef(({className:g,...w},x)=>zl.createElement(Tm,{ref:x,iconNode:M,className:Bg(`lucide-${bm(Dg(v))}`,`lucide-${v}`,g),...w}));return C.displayName=Dg(v),C};const Am=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],Em=Ta("bird",Am);const wm=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mm=Ta("circle",wm);const Om=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Dm=Ta("key",Om);const jm=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Cm=Ta("music",jm);const xm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nm=Ta("star",xm);const Um=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Hm=Ta("volume-2",Um);const Rm=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Bm=Ta("volume-x",Rm);const Ym=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yg=Ta("x",Ym);function qm({displayName:v,onConfirm:M,onCancel:C,onClose:g}){return p.jsx("div",{className:"modal-overlay",onClick:g,children:p.jsx("div",{className:"modal-content",onClick:w=>w.stopPropagation(),children:p.jsxs("div",{className:"modal-paper",children:[p.jsx("button",{className:"modal-close",onClick:g,children:p.jsx(Yg,{size:24})}),p.jsxs("div",{style:{textAlign:"center"},children:[p.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",p.jsxs("strong",{children:[v,"?"]})]}),p.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[p.jsxs("button",{onClick:M,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",v]}),p.jsx("button",{onClick:C,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function qg(){const v=localStorage.getItem("openedWindows");if(!v)return new Set;try{const M=JSON.parse(v);return new Set(M)}catch(M){return console.error("Failed to parse opened windows:",M),new Set}}function Xm(v){const M=qg();return M.add(v),localStorage.setItem("openedWindows",JSON.stringify([...M])),M}function jg(){localStorage.removeItem("openedWindows")}function Gm(){localStorage.removeItem("adventCalendarUser")}const Cg=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function Qm({userName:v,onUserSelect:M}){const[C]=zl.useState(()=>Cg[Math.floor(Math.random()*Cg.length)]),[g,w]=zl.useState(!1),x=v==="Tanya"?"Таня":v==="Zebra"?"Зёбра":"неведомый гость",Y=()=>{w(!0)},P=()=>{Gm(),jg(),w(!1),window.location.reload()},U=()=>{jg(),w(!1)},T=()=>{w(!1)};return v?p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"user-greeting",children:p.jsxs("p",{className:"greeting-text",children:[C,","," ",p.jsx("span",{className:"user-name clickable",onClick:Y,title:`А точно ли я ${x}?..`,children:x}),"!"]})}),g&&(v==="Tanya"||v==="Zebra")&&p.jsx(qm,{displayName:x,onConfirm:P,onCancel:U,onClose:T})]}):p.jsxs("div",{className:"user-selection",children:[p.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),p.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),p.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),p.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),p.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),p.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),p.jsxs("div",{className:"user-options",children:[p.jsx("button",{className:"user-button",onClick:()=>M("Tanya"),children:"Таня"}),p.jsx("button",{className:"user-button",onClick:()=>M("Zebra"),children:"Зёбра"})]})]})}function Lm(){const[v,M]=zl.useState([]),[C,g]=zl.useState([]);return zl.useEffect(()=>{const w=U=>T=>{const D=Math.sin(U*9301+T*49297)*43758.5453;return D-Math.floor(D)},x=Array.from({length:60}).map((U,T)=>{const D=w(T+1);return{left:`${Math.floor(D(1)*100)}%`,top:`${Math.floor(D(2)*70)}%`,animationDelay:`${(D(3)*3).toFixed(2)}s`,opacity:+(.3+D(4)*.7).toFixed(2)}}),Y=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,T)=>{const D=w(100+T);let N=30+Math.floor(D(1)*60),K=Math.max(10,Math.floor(D(2)*30));const yl=Y[T%Y.length],vl=+(.35+D(3)*.55).toFixed(2),_l=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(D(4)*30)}% ${30+Math.floor(D(5)*30)}%`,bl=40+Math.floor(D(6)*40),wl=Math.floor(D(7)*20),sl=-20+Math.floor(D(8)*140);let Tl=5+Math.floor(D(9)*40);return T===0&&(Tl=Math.max(2,Tl-8),N=Math.max(20,Math.floor(N*.85)),K=Math.max(8,Math.floor(K*.8))),{left:`${sl}%`,top:`${Tl}%`,width:`${N}vw`,height:`${K}vh`,opacity:vl,color:_l,borderRadius:Ul,duration:bl,delay:wl}});window.requestAnimationFrame(()=>{M(x),g(P)})},[]),p.jsxs("div",{className:"background-scene",children:[p.jsxs("div",{className:"layer layer-sky",children:[p.jsx("div",{className:"moon"}),p.jsx("div",{className:"stars",children:v.map((w,x)=>p.jsx("div",{className:"star",style:{left:w.left,top:w.top,animationDelay:w.animationDelay,opacity:w.opacity}},x))})]}),p.jsx("div",{className:"layer layer-clouds",children:C.map((w,x)=>p.jsx("div",{className:`cloud cloud-${x+1}`,style:{position:"absolute",left:w.left,top:w.top,width:w.width,height:w.height,background:w.color,opacity:w.opacity,borderRadius:w.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${w.duration}s linear ${w.delay}s infinite`}},x))}),p.jsx("div",{className:"layer layer-mountains",children:p.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[p.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),p.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),p.jsx("div",{className:"layer layer-trees",children:p.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((w,x)=>p.jsxs("g",{children:[p.jsx("polygon",{points:`${w},300 ${w-20},250 ${w-15},250 ${w-30},200 ${w-25},200 ${w-40},150 ${w+40},150 ${w+25},200 ${w+30},200 ${w+15},250 ${w+20},250`,fill:"#1f2937"}),p.jsx("rect",{x:w-5,y:"280",width:"10",height:"20",fill:"#111827"})]},x))})}),p.jsxs("div",{className:"layer layer-deer",children:[p.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:p.jsxs("g",{fill:"#2d3748",children:[p.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),p.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),p.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),p.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),p.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),p.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),p.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),p.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),p.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:p.jsxs("g",{fill:"#374151",children:[p.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),p.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),p.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),p.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),p.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),p.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),p.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),p.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const Zm=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium"],Vm=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square"],xg=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window"],Ng=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Ug=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Hg=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Rg=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],Km=v=>{switch(v){case"brass-dot":return p.jsx("div",{className:"door-handle brass-dot"});case"ring":return p.jsx(Mm,{className:"door-handle ring",size:12});case"star":return p.jsx(Nm,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return p.jsx("div",{className:"door-handle pinecone"});case"fantasy":return p.jsx("div",{className:"door-handle fantasy"});default:return p.jsx("div",{className:"door-handle brass-dot"})}},Jm=v=>{if(v===0)return null;const M=v===4||v===6?2:4,C=v===4?2:v===6?3:2;return p.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${M}, 1fr)`,gridTemplateRows:`repeat(${C}, 1fr)`},children:Array.from({length:v}).map((g,w)=>p.jsx("div",{className:"window-pane"},w))})},$m=v=>{if(v==="none")return null;switch(v){case"wreath":return p.jsxs("div",{className:"christmas-wreath",children:[p.jsx("div",{className:"wreath-circle"}),p.jsx("div",{className:"wreath-bow"}),p.jsxs("div",{className:"wreath-berries",children:[p.jsx("div",{className:"berry"}),p.jsx("div",{className:"berry"}),p.jsx("div",{className:"berry"})]})]});case"garland":return p.jsxs("div",{className:"christmas-garland",children:[p.jsx("div",{className:"garland-swag"}),p.jsx("div",{className:"garland-bow"})]});case"bow":return p.jsxs("div",{className:"christmas-bow-large",children:[p.jsx("div",{className:"bow-left"}),p.jsx("div",{className:"bow-right"}),p.jsx("div",{className:"bow-center"}),p.jsx("div",{className:"bow-ribbon-left"}),p.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return p.jsxs("div",{className:"christmas-holly",children:[p.jsx("div",{className:"holly-leaf left"}),p.jsx("div",{className:"holly-leaf right"}),p.jsx("div",{className:"holly-berry"}),p.jsx("div",{className:"holly-berry"})]});default:return null}},km=v=>{if(v==="none")return null;switch(v){case"candle":return p.jsxs("div",{className:"christmas-candle",children:[p.jsx("div",{className:"candle-flame"}),p.jsx("div",{className:"candle-body"}),p.jsx("div",{className:"candle-base"})]});case"lights":return p.jsxs("div",{className:"christmas-lights",children:[p.jsx("div",{className:"light-bulb red"}),p.jsx("div",{className:"light-bulb gold"}),p.jsx("div",{className:"light-bulb green"}),p.jsx("div",{className:"light-bulb blue"})]});case"bow":return p.jsxs("div",{className:"christmas-bow-small",children:[p.jsx("div",{className:"bow-left"}),p.jsx("div",{className:"bow-right"}),p.jsx("div",{className:"bow-center"})]});case"holly":return p.jsxs("div",{className:"christmas-holly-small",children:[p.jsx("div",{className:"holly-leaf"}),p.jsx("div",{className:"holly-leaf"}),p.jsx("div",{className:"holly-berry"})]});default:return null}};function Wm({windowNumber:v,isActive:M,isOpened:C,isExactMatch:g,onClick:w}){const x=zl.useRef(null),Y=v===17,P=()=>{Y&&x.current&&(x.current.currentTime=0,x.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},U=Zm[v-1],T=Vm[v-1],D=M&&!C||M&&g?"window-glow-intense":"",K=new Set([11,6,12,16,25]).has(v),yl=K?"window-round":T,_l=xg[v-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<v;Sl++)xg[Sl]==="door"?Ul++:bl++;const wl=Ng[(Ul-1)%Ng.length],sl=Ug[(bl-1)%Ug.length],Tl=Hg[(Ul-1)%Hg.length],Zl=Rg[(bl-1)%Rg.length];return p.jsx("div",{className:`calendar-window ${U} ${yl} ${D} ${C?"window-opened":""} ${M?"window-active":"window-inactive"}`,onClick:w,onMouseEnter:P,children:_l?p.jsxs("div",{className:`door-element ${wl.type}`,children:[$m(Tl),p.jsx("div",{className:`door-frame frame-${wl.frame}`,children:p.jsxs("div",{className:`door-panel wood-${wl.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[wl.type==="door-double"&&p.jsx("div",{className:"door-split"}),p.jsxs("div",{className:"door-decorative-panels",children:[p.jsx("div",{className:"panel-top"}),p.jsx("div",{className:"panel-bottom"})]}),p.jsxs("div",{className:"door-hardware",children:[Km(wl.handle),wl.hasKeyhole&&p.jsx(Dm,{className:"door-keyhole",size:10})]}),p.jsx("span",{className:"window-number gold",children:v})]})})]}):p.jsxs("div",{className:`window-element ${yl} ${U}`,children:[km(Zl),p.jsxs("div",{className:"window-frame",children:[p.jsxs("div",{className:`window-glass glass-${sl.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[Jm(sl.panes),sl.shape==="arched"&&p.jsx("div",{className:"window-arch"}),Y&&p.jsx(Em,{className:"owl-icon",size:16})]}),p.jsx("span",{className:"window-number gold",children:v})]}),sl.hasSill&&p.jsx("div",{className:"window-sill",children:sl.hasPlant&&p.jsxs("div",{className:"window-plant",children:[p.jsx("div",{className:"plant-pot"}),p.jsxs("div",{className:"plant-leaves",children:[p.jsx("div",{className:"leaf"}),p.jsx("div",{className:"leaf"}),p.jsx("div",{className:"leaf"})]})]})})]})})}function Fm({windowNumber:v,message:M,onClose:C}){return p.jsx("div",{className:"modal-overlay",onClick:C,children:p.jsx("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:p.jsxs("div",{className:"modal-paper",children:[p.jsx("button",{className:"modal-close",onClick:C,children:p.jsx(Yg,{size:24})}),v!==-1&&p.jsxs("h2",{className:"modal-title",children:["День ",v]}),p.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:M}})]})})})}function Qi(v){const M=new Date(Date.UTC(2025,11,19,21,0,0,0)),C=v-1;return new Date(M.getTime()+C*24*60*60*1e3)}function Li(v,M){return M.getTime()>=v.getTime()}function mo(v,M){const C=new Date(v);C.setUTCHours(0,0,0,0);const g=new Date(M);return g.setUTCHours(0,0,0,0),C.getTime()===g.getTime()}const Im="/advent/assets/muerte-DfSvC3Z-.jpg",Pm="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",ah="/advent/assets/Ofrenda-DDd9dlHK.jpg",eh="/advent/assets/kolumbia-DUKl5Drs.webp",nh="/advent/assets/kolumb2--JWazZNY.webp",ih="/advent/assets/melhior-5oqVeQRz.webp",uh="/advent/assets/shir-CPxmcAyu.jpg",sh="/advent/assets/markes-DHTR6R5s.jpg",oh="/advent/assets/tolkin-Bkb1qdyy.jpg",rh="/advent/assets/tolkin1-Gt7VHXrl.jpg",ch="/advent/assets/berry-BayIKnFN.jpg",fh="/advent/assets/berry1-aZtyDiG8.jpg",gh="/advent/assets/gvatemala1-C3fdq1S5.jpg",ph="/advent/assets/graves-B4Ep0a2x.jpg",dh="/advent/assets/carpet1-BHoBEQUm.jpg",mh="/advent/assets/airsnakes-BtpaN7a0.jpg",hh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",vh="/advent/assets/brazil1-C1nzNzga.webp",bh="/advent/assets/ethiopia-CfI92xpA.jpg",Sh="/advent/assets/goats-B1iHvHcl.jpg",zh="/advent/assets/rabanda-ClmJ6Exb.jpg",_h="/advent/assets/honduras-DTj2TRgE.jpg",Th="/advent/assets/honduras1-BfVuI_LD.jpg",Ah="/advent/assets/resp-DBSDT0A7.png",Eh="/advent/assets/cicoriy-DL-J_EKv.webp",wh="/advent/assets/carob-DDo_E6jz.jpg",Mh="/advent/assets/tonka-CaSKsR3p.webp",Oh="/advent/assets/kardamon-D-LlmV-v.webp",Dh="/advent/assets/mem1-Coiz1JZ3.jpg",jh="/advent/assets/cafe-DrSeHG9j.jpg",Ch="/advent/assets/yerevan1-0r9N0UnH.jpg",xh="/advent/assets/yerevan2-fQnNyY8p.jpg",Nh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Hh="/advent/assets/bears-BwIhEuov.jpg",Rh="/advent/assets/ararat-DAhBMtll.jpg",Bh="/advent/assets/jazzve-DliHyYYl.jpg",Yh="/advent/assets/abc-C__8usP9.webp",qh="/advent/assets/noy-KD54xzv8.jpg",Xh="/advent/assets/poss-LSCreopJ.jpg",Gh="/advent/assets/poss1-CPSySb8a.jpg",Qh="/advent/assets/poss2-4TAHhBM7.jpg",Lh="/advent/assets/poss3-BBe7PtjI.jpg",Zh="/advent/assets/poss4-B0yE7kHZ.jpg",Vh="/advent/assets/poss5-DtHf0aUR.jpg",Kh="/advent/assets/possa-mom-BPlrTPcT.jpg",Jh="/advent/assets/possa-mom1-D9ySRpWd.jpg",$h="/advent/assets/poss-and-oposs-DDSg4YaG.webp",kh="/advent/assets/possaKnowl-CYkQIhVz.jpg",Wh="/advent/assets/thief-CoIDv1iT.jpg",Fh="/advent/assets/smile-1-5jdl68.jpg",Ih="/advent/assets/merch-DdoKdpQb.jpg",Ph="/advent/assets/merch1-CtZos-AO.jpg",l0="/advent/assets/cammomile-Byca6E_e.jpg",t0="/advent/assets/cham-tea-BPAncxo6.jpg",a0="/advent/assets/chamomile1-DbctfrkQ.jpg",e0="/advent/assets/chamomile2-k1NNuBaK.jpg",n0="/advent/assets/juniper-r5wxtBRx.jpg",i0="/advent/assets/juniper1-BWoP6YHZ.jpg",u0="/advent/assets/juniper3-BXCLBj8d.jpg",s0="/advent/assets/juniperTea-0KTJdRf4.jpg",o0="/advent/assets/cham-sci-ixEH2xhc.jpg",r0="/advent/assets/juniperTattoo-Drp4YpCt.jpg",c0="/advent/assets/chamomileTattoo-BGNh6NOB.jpg",f0="/advent/assets/juniper-sci-hXzXrr9H.jpg",g0="/advent/assets/jun-sci2-zIGUP1FK.jpg",p0="/advent/assets/solovki-B95fDwav.webp",d0="/advent/assets/solovki1-u3Varh4x.webp",m0="/advent/assets/solovki2-D19kpuou.jpg",h0="/advent/assets/coffeCard1-DNW-HsaJ.webp",y0="/advent/assets/coffeCard2-BNxhtL4t.webp",v0="/advent/assets/coffeCard3-AyYO0wak.webp",b0="/advent/assets/coffeCard4-DI2_0NqK.webp",S0="/advent/assets/coffeCard5-dUEpTs6X.webp",z0="/advent/assets/coffeCard6-BDW-PLix.webp",_0="/advent/assets/atitlan-dYAI5eYf.jpg",T0="/advent/assets/atitlan1-C5ZSs572.jpg",A0="/advent/assets/guatemala8-Bi5KoB48.jpg",E0="/advent/assets/guatemalaCorn-ClR7vTSk.jpg",w0="/advent/assets/guatemalaTkan-DTKRCwUa.jpg",M0="/advent/assets/himalaya1-nN0t50Ma.avif",O0="/advent/assets/pinkSalt-BizDWWT4.jpg",D0="/advent/assets/saltMeme-Dq0p8Dwq.jpg",j0="/advent/assets/matcha11-CE8SBYA1.jpg",C0="/advent/assets/matcha-C8bXd3OR.jpg",x0="/advent/assets/matcha2-6Pc5CGop.jpg",N0="/advent/assets/matcha3-PqMaWA5u.jpg",U0="/advent/assets/matchaOld-BdH0N0Hr.jpg",H0="/advent/assets/matchaOld1-d7pxtrP4.jpg",R0="/advent/assets/harvest-DiJhXofV.jpg",B0="/advent/assets/harvest1-f7uXoVQt.jpg",Y0="/advent/assets/matchaColors-CePGvb-v.jpg",q0="/advent/assets/cat1-CteOJfo2.jpg",X0="/advent/assets/cat2-CI2WaIbw.jpg",G0="/advent/assets/cat3-wi61L9Ty.jpg",Q0="/advent/assets/cat4-BQJa7vAE.jpg",L0="/advent/assets/cat5-D7xwVjOS.jpg",Z0="/advent/assets/piterMeme-ClYb6GkP.jpg",h={muerte:Im,katrina:Pm,pink:lh,rese:th,Ofrenda:ah,kolumb2:nh,kolumbia:eh,melhior:ih,shir:uh,markes:sh,tolkin:oh,tolkin1:rh,berries:ch,berries1:fh,gvatemala1:gh,graves:ph,carpet1:dh,airsnake2:mh,fish:hh,fish1:yh,brazil1:vh,ethiopia:bh,goats:Sh,rabanda:zh,honduras:_h,honduras1:Th,resp:Ah,cicoriy:Eh,carob:wh,tonka:Mh,kardamon:Oh,mem:Dh,cafe:jh,yerevan1:Ch,yerevan2:xh,yerevan3:Nh,lion:Uh,bears:Hh,ararat:Rh,yazzve:Bh,abc:Yh,noy:qh,poss:Xh,possaMom:Kh,possaMom1:Jh,possOrOposs:$h,possaKnowl:kh,poss1:Gh,poss2:Qh,poss3:Lh,poss4:Zh,poss5:Vh,thief:Wh,smile:Fh,merch:Ih,merch1:Ph,cammomile:l0,chamomile2:e0,chamomileTea:t0,chamomile1:a0,juniper:n0,juniper1:i0,juniper3:u0,juniperTea:s0,chamSci:o0,juniperTattoo:r0,chamomileTattoo:c0,juniperSci:f0,juniperSci1:g0,solovki:p0,solovki1:d0,solovki2:m0,coffeCard1:h0,coffeCard2:y0,coffeCard3:v0,coffeCard4:b0,coffeCard5:S0,coffeCard6:z0,atitlan:_0,atitlan1:T0,guatemala8:A0,guatemalaCorn:E0,guatemalaTkan:w0,himalaya:M0,pinkSalt:O0,saltMeme:D0,harvest:R0,harvest1:B0,matcha:C0,matcha2:x0,matcha3:N0,matcha11:j0,matchaOld:U0,matchaOld1:H0,matchaColors:Y0,cat1:q0,cat2:X0,cat3:G0,cat4:Q0,cat5:L0,piterMeme:Z0},V0=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${h.muerte}" />
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
<img src="${h.Ofrenda}" />
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
       <img src="${h.katrina}" />
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
      <img src="${h.muerte}" />
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

      <img src="${h.Ofrenda}" />

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
       <img src="${h.katrina}" />
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
  <img src="${h.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${h.rese}" />
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
  <img src="${h.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${h.rese}" />
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
    <img src="${h.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение — ведь Baggins = фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название! ☕🎉</p>
    <img src="${h.tolkin}" />
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
    <img src="${h.melhior}" />
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
      <img src="${h.tolkin1}" />
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
    <img src="${h.kolumbia}" />
    <p><strong>География:</strong> Анды, высота 1200-2000 м, вулканическая почва, два сезона дождей = урожай круглый год!</p>
    
    <p><strong>Вкус:</strong> Сбалансированный, средняя кислотность, карамель, орехи, чистый профиль. <strong>"Безопасный выбор"</strong> — почти всегда вкусно!</p>
    
    <p><strong>100% Арабика:</strong> Колумбия не выращивает робусту по закону! Только арабика.</p>
    
    <h3>Габриэль Гарсиа Маркес и кофе ☕📖</h3>
    <p><strong>Габо</strong> (как его называли в Колумбии) родился в <strong>Аракатаке</strong> — маленьком городке в зоне банановых плантаций. Но кофе был везде!</p>
    <img src="${h.markes}" />
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
    <img src="${h.kolumb2}" />
    <p>Качественное зерно → даже без кофеина сохраняется вкус!</p>
    
    <h3>Мельхиоровая ложечка 🥄✨</h3>
    <p><strong>Мельхиор</strong> — сплав меди + никель. В СССР = "народное серебро" (дешевле настоящего, но красиво!).</p>
    <img src="${h.melhior}" />
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
    <img src="${h.gvatemala1}" />
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
    <img src="${h.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${h.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее Зёбры и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${h.carpet1}" />
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
    <img src="${h.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${h.berries1}" />
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
    <img src="${h.gvatemala1}" />
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
    <img src="${h.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${h.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее тебя и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${h.carpet1}" />
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
    <img src="${h.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${h.berries1}" />
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
    <img src="${h.fish}" />
    
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

    <img src="${h.fish1}" />
    
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

    <img src="${h.brazil1}" />
    
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
    <img src="${h.ethiopia}" />
    <p><strong>Легенда Калди (IX век):</strong></p>
    <ul>
      <li>Пастух Калди заметил: его козы ели красные ягоды → танцевали всю ночь!</li>
      <li>Монахи попробовали → не спали на молитвах</li>
      <li>Сначала сожгли как "дьявольские ягоды"</li>
      <li>Но запах был так хорош, что решили заваривать!</li>
    </ul>
    <p>Между прочим, есть фотопруф:</p>
    <img src="${h.goats}" />
    
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
<img src="${h.rabanda}" />
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
    <img src="${h.fish}" />
    
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

    <img src="${h.fish1}" />
    
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

    <img src="${h.brazil1}" />
    
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
    <img src="${h.rabanda}" />

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
    <img src="${h.honduras}" />
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
    <img src="${h.resp}" />
    
    <p><strong>6 кофейных регионов:</strong></p>
    <ul>
      <li><strong>Copán</strong> — западный, у границы с Гватемалой, шоколад + карамель.</li>
      <li><strong>Opalaca</strong> — высокогорный, сбалансированный.</li>
      <li><strong>Montecillos</strong> — центральный, фруктовый, цитрусовый.</li>
      <li><strong>Comayagua</strong> — винная кислотность.</li>
      <li><strong>Agalta</strong> — восточный, тропические фрукты.</li>
      <li><strong>El Paraíso</strong> — у границы с Никарагуа, сладкий, мягкий.</li>
    </ul>
    <img src="${h.honduras1}" />
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
    <img src="${h.mem}" />
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
    <img src="${h.cicoriy}" />
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
    <img src="${h.cafe}" />
    
    <p><strong>Вкус:</strong> Древесный, ореховый, землистый. Вяжущий (танины!).</p>
    
    <p><strong>Проблема:</strong> Нужно вымачивать жёлуди (убрать танины), иначе горько и токсично.</p>
    
    <h4>4. Кэроб — шоколадный заменитель 🍫</h4>
    <p><strong>Что это:</strong> Порошок из стручков рожкового дерева (Средиземноморье).</p>
    <img src="${h.carob}" />
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
    <img src="${h.tonka}" />
    <p><strong>⚠️ Важно:</strong> Содержат кумарин (в больших дозах токсичен). В США запрещены в еде с 1954! В Европе разрешены в микродозах. В твоём стике — безопасная доза!</p>
    
    <h4>7. Зелёный кардамон — королева специй 👑</h4>
    <p><strong>Что это:</strong> Специя из семейства имбирных (Индия).</p>
    <img src="${h.kardamon}" />
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
    <img src="${h.mem}" />
  `},{day:7,date:"2025-12-26",tanya_gift:"Армянский детский растворимый кофе",zebra_gift:"Армянский детский растворимый кофе",tanya_bonus:"Зефир в виде кошачьей лапки",zebra_bonus:"Зефир в виде кошачьей лапки",title:"Ереван — город, в который я влюбилась",tanya_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${h.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${h.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${h.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${h.bears}" />
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
    <img src="${h.yazzve}" />
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
    <img src="${h.ararat}" />
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
    <img src="${h.abc}" />
    
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
    <img src="${h.noy}" />
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
<img src="${h.yerevan3}" />
`,zebra_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${h.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${h.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${h.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${h.bears}" />
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
    <img src="${h.yazzve}" />
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
    <img src="${h.ararat}" />
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
    <img src="${h.abc}" />
    
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
    <img src="${h.noy}" />
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
<img src="${h.yerevan3}" />
`},{day:8,date:"2025-12-27",tanya_gift:'Какао "Опоссум" (пьёт и больше не орёт)',zebra_gift:'Какао "Опоссум" (пьёт и больше не орёт)',tanya_bonus:"Маршмеллоу (маленькие)",zebra_bonus:"Маршмеллоу (маленькие)",title:"Опоссумы, какао и философия",tanya_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${h.possaMom}" />
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
    <img src="${h.smile}" />
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
    <img src="${h.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${h.possOrOposs}" />
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
      <img src="${h.poss}" />
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
    <img src="${h.thief}" />

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
<img src="${h.possaKnowl}" />
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
<img src="${h.merch1}" />
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
      <img src="${h.poss1}" />
      <img src="${h.poss2}" />
      <img src="${h.poss3}" />
      <img src="${h.poss4}" />
      <img src="${h.poss5}" />
      <img src="${h.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `,zebra_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${h.possaMom}" />
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
    <img src="${h.smile}" />
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
    <img src="${h.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${h.possOrOposs}" />
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
      <img src="${h.poss}" />
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
    <img src="${h.thief}" />

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
<img src="${h.possaKnowl}" />
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
<img src="${h.merch1}" />
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
      <img src="${h.poss1}" />
      <img src="${h.poss2}" />
      <img src="${h.poss3}" />
      <img src="${h.poss4}" />
      <img src="${h.poss5}" />
      <img src="${h.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `},{day:9,date:"2025-12-28",tanya_gift:"Чай ромашковый",zebra_gift:"Чай ромашковый",tanya_bonus:"Твикс имбирный",zebra_bonus:"Твикс имбирный",title:"Ромашковый чай за 1000 рублей",tanya_message:`
      <p><strong>Ромашковый чай</strong> — напиток, который недавно был в центе московских обсуждений 🌼☕💸</p>
      
      <h3>История про чай за 1000 рублей</h3>
      <p>Оченью 2025 года в Кофемании поллитра ромшкового чая продавали почти за косарь. "Кипяток для избранных", писали в обзорах.</p>
      <img src="${h.chamomileTea}" />
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
      <img src="${h.chamomile1}" />
      <p><strong>История:</strong></p>
      <ul>
        <li><strong>Древний Египет:</strong> Посвящали ромашку богу солнца Ра, лечили лихорадку.</li>
        <li><strong>Древний Рим:</strong> Солдаты пили ромашковый чай перед битвой (успокоение, хотя казалось бы).</li>
        <li><strong>Средневековье:</strong> "Растение-целитель" — от всего (за неимением подорожника, не иначе).</li>
      </ul>
      <img src="${h.cammomile}" />
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
<img src="${h.chamSci}" />
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

      <img src="${h.chamomile2}" />
      <h3>Твикс имбирный 🍪</h3>
      <p><strong>Имбирное печенье</strong> + карамель + шоколад = праздничный вкус!</p>
      
      <p><strong>Имбирь + шоколад</strong> — древнее сочетание. Ацтеки добавляли имбирь в <em>xocolātl</em> (горячий шоколад) для воинов.</p>
      <img src="${h.chamomileTattoo}" />
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
      <img src="${h.juniperTea}" />
      <p>У тебя <strong>рабочее воскресенье перед Новым годом</strong>. Тяжело. Все отдыхают, а ты работаешь (напоминает тебе сочувствующая юбездуховная нейронка).</p>

      <p>Надеемся (мы с нейронкой), что можжевельник и имбирь в твоём чае (окей, имбирь в печеньке в твоем limit edition Твиксе, если ты не съела его раньше, а я не перепутала и это) придали тебе сил! ☕💪</p>

      <p><strong>Можжевельник — что это:</strong></p>
<ul>
  <li>Ягоды можжевелового куста (хвойное растение).</li>
  <li>На самом деле это не ягоды, а <strong>шишкоягоды</strong> (модифицированные шишки!).</li>
  <li>Тёмно-синие, с восковым налётом.</li>
  <li>Вкус: хвойный, смолистый, немного сладковатый.</li>
</ul>
<img src="${h.juniper}" />
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
<img src="${h.juniper1}" />
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
  <img src="${h.juniper3}" />

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
    <img src="${h.juniperSci}" />
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
    <img src="${h.juniperSci1}" />
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
    <img src="${h.juniperTattoo}" />

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
    <img src="${h.coffeCard4}" />
    <p><strong>Откуда:</strong> Колумбия (зёрна) → Соловецкий монастырь (обжарка) → твоя чашка</p>
    <p><strong>Кто обжаривал:</strong> Монахи Соловецкого монастыря!</p>
    <p><strong>Как:</strong> С молитвой! (серьёзно, так написано в карточке товара)</p>
    <h3>Соловецкий монастырь — внезапный кофе на краю света 🏔️</h3>
    <img src="${h.solovki2}" />
    <p><strong>Где:</strong></p>
    <ul>
      <li>Соловецкие острова, Белое море</li>
      <li>Архангельская область, Россия</li>
      <li>160 км от Полярного круга!</li>
      <li>Добраться можно только на корабле или вертолёте</li>
    </ul>
    <img src="${h.coffeCard1}" />
    <p><strong>Монастырь:</strong></p>
    <ul>
      <li>Основан в 1436 году</li>
      <li>Один из самых известных монастырей России</li>
      <li>ЮНЕСКО World Heritage</li>
      <li>Крепость, духовный центр, история</li>
    </ul>
    <img src="${h.solovki1}" />
    <p><strong>Тёмная история:</strong></p>
    <ul>
      <li>1920-1939 — ГУЛАГ (Соловецкий лагерь особого назначения)</li>
      <li>Монастырь закрыли, монахов репрессировали</li>
      <li>Один из первых советских лагерей</li>
      <li>1990 — монастырь возродился</li>
    </ul>
    
    <h3>Братский кофе — монашеский бизнес ☕</h3>
    <img src="${h.coffeCard3}" />
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Социальное предприятие монастыря</li>
      <li>Монахи покупают зёрна (Колумбия, Бразилия, Эфиопия, др.)</li>
      <li>Обжаривают на Соловках</li>
      <li>Продают под брендом "Братский кофе"</li>
      <li><strong>"Сделано с молитвой!"</strong> — буквально написано на упаковке 😄</li>
    </ul>
    <img src="${h.solovki}" />
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
    <img src="${h.coffeCard2}" />
    <p><strong>Что это значит:</strong></p>
    <p>Монахи молятся во время обжарки. Буквально: "Господи, благослови тех, кто выпьет этот кофе!" Ну, в лучшей из версий.</p>
    <p>Представь: монахи на Белом море, на краю света, в древнем монастыре обжаривают колумбийский кофе c молитвой. В XXI веке. Чтобы потом продавать на Озоне втридорога. Это прекрасно и абсурдно одновременно!</p>
    <img src="${h.coffeCard5}" />
    
    
    <h3>Как заваривать:</h3>
    <ol>
      <li>Смели зёрна (средний помол для турки/френч-пресса, мелкий для эспрессо)</li>
      <li>Завари любым способом</li>
      <li><strong>Перед первым глотком:</strong> Скажи "Спасибо, монахи!" 😄</li>
      <li>Наслаждайся</li>
    </ol>
    <img src="${h.coffeCard6}" />
    <h3>Гималайская соль — снова! 🧂</h3>
    
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    <p>Я решила, что к такому кофе нужно что-то суровое.</p> 
    <img src="${h.himalaya}" />
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй заварить кофе и добавь крошечную щепотку соли</li>
    </ul>
    <img src="${h.pinkSalt}" />
    <p><strong>Можно просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${h.saltMeme}" />
    
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
    <img src="${h.atitlan1}" />
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
    <img src="${h.guatemala8}" />
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
    <img src="${h.atitlan}" />
    <p><strong>Озеро Атитлан:</strong></p>
    <ul>
      <li>Одно из красивейших озёр мира</li>
      <li>В кратере вулкана!</li>
      <li>Вокруг — 3 вулкана (Atitlán, Tolimán, San Pedro)</li>
      <li>Деревни майя на берегу</li>
      <li>Кофе растёт на склонах → знаменитый регион Atitlán</li>
    </ul>
    
    <p><strong>Майя — живая культура:</strong></p>
    <img src="${h.guatemalaCorn}" />
    <ul>
      <li>40%+ населения Гватемалы — майя</li>
      <li>Говорят на языках майя (23 языка!)</li>
      <li>Носят традиционную одежду (huipil — расшитые блузы)</li>
      <li>Хранят традиции (церемонии, календарь майя, ремёсла)</li>
      <li>Многие работают на кофейных плантациях</li>
    </ul>
    
    <img src="${h.guatemalaTkan}" />
    <p><strong>Текстиль майя:</strong></p>
    <ul>
      <li>Знаменитые ткани — яркие, с геометрическими узорами</li>
      <li>Каждая деревня — свой стиль!</li>
      <li>По одежде можно определить, откуда человек</li>
      <li>Ткут на поясных станках (backstrap loom) — древняя техника</li>
    </ul>
    
    <h3>Гималайская соль — снова! 🧂</h3>
    <img src="${h.himalaya}" />
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй: завари декаф, добавь крошечную щепотку соли</li>
    </ul>
    <img src="${h.pinkSalt}" />
    <p><strong>Можно и просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${h.saltMeme}" />
    
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
    <img src="${h.matcha}" />
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
    <img src="${h.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${h.harvest1}" />
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
    <img src="${h.matchaOld1}" />
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
    <img src="${h.matcha11}" />
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
    <img src="${h.harvest}" />
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
    <img src="${h.matchaColors}" />
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
    <img src="${h.matcha2}" />
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
    <img src="${h.matcha3}" />
    
    
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
    <img src="${h.matcha}" />
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
    <img src="${h.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${h.harvest1}" />
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
    <img src="${h.matchaOld1}" />
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
    <img src="${h.matcha11}" />
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
    <img src="${h.harvest}" />
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
    <img src="${h.matchaColors}" />
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
    <img src="${h.matcha2}" />
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
    <img src="${h.matcha3}" />
    
    
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
    <img src="${h.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${h.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${h.cat5}" />
    <p><strong>МК:</strong>Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${h.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${h.cat1}" />
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
    <img src="${h.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${h.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${h.cat5}" />
    <p><strong>МК:</strong> Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${h.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${h.cat1}" />
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
    <img src="${h.piterMeme}" />
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
  `},{day:13,date:"2026-01-01",tanya_gift:"Who Needs Sleep",zebra_gift:"Who Needs Sleep (х2)",tanya_bonus:"Маршмеллоу",zebra_bonus:"Маршмеллоу (х2)",title:"День 12",tanya_message:"<p>Подарок: Who Needs Sleep</p><p>Бонус: Маршмеллоу</p>",zebra_message:"<p>Подарок: Who Needs Sleep (х2)</p><p>Бонус: Маршмеллоу (х2)</p>"},{day:14,date:"2026-01-02",tanya_gift:"Dozo Coffee",zebra_gift:"Dozo Coffee (х2)",tanya_bonus:"Цветная шоколадка",zebra_bonus:"Цветная шоколадка (х2)",title:"День 13",tanya_message:"<p>Подарок: Dozo Coffee</p><p>Бонус: Цветная шоколадка</p>",zebra_message:"<p>Подарок: Dozo Coffee (х2)</p><p>Бонус: Цветная шоколадка (х2)</p>"},{day:15,date:"2026-01-03",tanya_gift:"Camera Obscura",zebra_gift:"Camera Obscura (х2)",tanya_bonus:"Сироп Острый мёд",zebra_bonus:"Сироп Острый мёд (х2)",title:"День 14",tanya_message:"<p>Подарок: Camera Obscura</p><p>Бонус: Сироп Острый мёд</p>",zebra_message:"<p>Подарок: Camera Obscura (х2)</p><p>Бонус: Сироп Острый мёд (х2)</p>"},{day:16,date:"2026-01-04",tanya_gift:"Сова-концентрат",zebra_gift:"Сова-концентрат",tanya_bonus:"Сироп Мисо-карамель",zebra_bonus:"Сироп Мисо-карамель",title:"День 15",tanya_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>",zebra_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>"},{day:17,date:"2026-01-05",tanya_gift:"Yellow Submarine",zebra_gift:"Yellow Submarine (х2)",tanya_bonus:"Протеиновое печенье",zebra_bonus:"Протеиновое печенье (х2)",title:"День 16",tanya_message:"<p>Подарок: Yellow Submarine</p><p>Бонус: Протеиновое печенье</p>",zebra_message:"<p>Подарок: Yellow Submarine (х2)</p><p>Бонус: Протеиновое печенье (х2)</p>"},{day:18,date:"2026-01-06",tanya_gift:"Турецкий Mehmet Efendi",zebra_gift:"Турецкий Mehmet Efendi (х2)",tanya_bonus:"Матча латте",zebra_bonus:"Матча латте (х2)",title:"День 17",tanya_message:"<p>Подарок: Турецкий Mehmet Efendi</p><p>Бонус: Матча латте</p>",zebra_message:"<p>Подарок: Турецкий Mehmet Efendi (х2)</p><p>Бонус: Матча латте (х2)</p>"},{day:19,date:"2026-01-07",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Шоколадная бомбочка",zebra_bonus:"Шоколадная бомбочка (х2)",title:"День 18",tanya_message:"<p>Подарок: Круиз: по-венски</p><p>Бонус: Шоколадная бомбочка</p>",zebra_message:"<p>Подарок: Круиз: по-индийски (х2)</p><p>Бонус: Шоколадная бомбочка (х2)</p>"},{day:20,date:"2026-01-08",tanya_gift:"Mitsumoto японский",zebra_gift:"Mitsumoto японский (х2)",tanya_bonus:"Рождественский чай",zebra_bonus:"Рождественский чай (х2)",title:"День 19",tanya_message:"<p>Подарок: Mitsumoto японский</p><p>Бонус: Рождественский чай</p>",zebra_message:"<p>Подарок: Mitsumoto японский (х2)</p><p>Бонус: Рождественский чай (х2)</p>"},{day:21,date:"2026-01-09",tanya_gift:"KopiCat Вьетнам",zebra_gift:"KopiCat Вьетнам (х2)",tanya_bonus:"Экзотический чай",zebra_bonus:"Экзотический чай (х2)",title:"День 20",tanya_message:"<p>Подарок: KopiCat Вьетнам</p><p>Бонус: Экзотический чай</p>",zebra_message:"<p>Подарок: KopiCat Вьетнам (х2)</p><p>Бонус: Экзотический чай (х2)</p>"},{day:22,date:"2026-01-10",tanya_gift:"Армянский 3в1",zebra_gift:"Армянский 3в1 (х2)",tanya_bonus:"Миндальный Вкусвилл",zebra_bonus:"Миндальный Вкусвилл (х2)",title:"День 21",tanya_message:"<p>Подарок: Армянский 3в1</p><p>Бонус: Миндальный Вкусвилл</p>",zebra_message:"<p>Подарок: Армянский 3в1 (х2)</p><p>Бонус: Миндальный Вкусвилл (х2)</p>"},{day:23,date:"2026-01-11",tanya_gift:"Декаф Питерский",zebra_gift:"Декаф IL DA DA MA",tanya_bonus:"Чай-книга гаданий",zebra_bonus:"Чай-книга гаданий (х2)",title:"День 22",tanya_message:"<p>Подарок: Декаф Питерский</p><p>Бонус: Чай-книга гаданий</p>",zebra_message:"<p>Подарок: Декаф IL DA DA MA</p><p>Бонус: Чай-книга гаданий (х2)</p>"},{day:24,date:"2026-01-12",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:"<p>Подарок: Декаф Гватемала</p><p>Бонус: Бэггинс кофе</p>",zebra_message:"<p>Подарок: Декаф Мексика (х2)</p><p>Бонус: Бэггинс кофе (х2)</p>"},{day:25,date:"2026-01-13",tanya_gift:"Рождественский с лошадью",zebra_gift:"Рождественский с лошадью (х2)",tanya_bonus:"Какао с опоссумом",zebra_bonus:"Какао с опоссумом (х2)",title:"День 24",tanya_message:"<p>Подарок: Рождественский с лошадью</p><p>Бонус: Какао с опоссумом</p>",zebra_message:"<p>Подарок: Рождественский с лошадью (х2)</p><p>Бонус: Какао с опоссумом (х2)</p>"},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function K0({currentDate:v,userName:M}){const[C,g]=zl.useState(()=>qg()),[w,x]=zl.useState(null),Y=D=>{const N=Qi(D);if(Li(N,v)&&(x(D),!C.has(D))){const K=Xm(D);g(K)}},P=()=>{x(null)},T=[...Array.from({length:25},(D,N)=>N+1)].sort((D,N)=>{const K=Qi(D),yl=Qi(N),vl=mo(K,v),_l=mo(yl,v),Ul=C.has(D),bl=C.has(N),wl=Li(K,v),sl=Li(yl,v),Tl=wl&&!Ul,Zl=sl&&!bl,Sl=vl&&Ul,J=_l&&bl,Rl=!wl,$l=!sl,Ft=Ul&&!vl&&wl,pt=bl&&!_l&&sl;return Tl&&!Zl?-1:!Tl&&Zl?1:Tl&&Zl?D-N:Sl&&!J?-1:!Sl&&J?1:Rl&&!$l?-1:!Rl&&$l?1:Rl&&$l||Ft&&pt?D-N:0});return p.jsxs(p.Fragment,{children:[p.jsx("div",{className:"calendar-grid",children:T.map(D=>{const N=Qi(D),K=Li(N,v),yl=C.has(D),vl=mo(N,v);return p.jsx(Wm,{windowNumber:D,isActive:K,isOpened:yl,isExactMatch:vl,onClick:()=>Y(D)},D)})}),w!==null&&(()=>{const D=V0[w-1],N=M==="Tanya"?D.tanya_message:M==="Zebra"?D.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return p.jsx(Fm,{windowNumber:w,message:N,onClose:P})})()]})}function J0(){const[v,M]=zl.useState(!1),C=zl.useRef(null),[g,w]=zl.useState(!1);zl.useEffect(()=>{const Y=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",Y),Y==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),w(!0))},[]),zl.useEffect(()=>{if(!g)return;const Y=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),M(!0),w(!1),window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)};return window.addEventListener("pointerdown",Y,{once:!0}),window.addEventListener("keydown",Y,{once:!0}),()=>{window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)}},[g]),zl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",v,"ref=",C.current),!C.current)return;const Y=C.current;if(v)console.debug("[AudioControls] calling play()"),Y.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),w(!0))});else{console.debug("[AudioControls] calling pause()");try{Y.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[v]);const x=()=>{const Y=!v;console.debug("[AudioControls] toggleMusic ->",Y),M(Y),localStorage.setItem("musicEnabled",String(Y))};return p.jsxs("div",{className:"audio-controls",children:[p.jsxs("button",{className:`audio-button ${v?"audio-active":""}`,onClick:x,title:"Toggle Christmas Music",children:[v?p.jsx(Hm,{size:20}):p.jsx(Bm,{size:20}),p.jsx(Cm,{size:16,className:"audio-icon-secondary"})]}),p.jsx("audio",{ref:C,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:Y=>console.error("[AudioControls] audio event: error",Y)})]})}function $0(){return p.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((v,M)=>p.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},M))})}const k0=()=>new Date;function W0(){const[v,M]=zl.useState(()=>{const x=localStorage.getItem("adventCalendarUser");return x==="Tanya"||x==="Zebra"?x:(localStorage.clear(),null)}),[C,g]=zl.useState(k0),w=x=>{localStorage.clear(),M(x),localStorage.setItem("adventCalendarUser",x)};return zl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);g(U)}catch(Y){console.error("Failed to fetch current date:",Y),g(new Date)}})()},[]),p.jsxs("div",{className:"app-container",children:[p.jsx(Lm,{}),p.jsx($0,{}),p.jsx(J0,{}),p.jsxs("div",{className:"content-wrapper",children:[p.jsx(Qm,{userName:v,onUserSelect:w}),p.jsx(K0,{currentDate:C,userName:v})]})]})}vm.createRoot(document.getElementById("root")).render(p.jsx(zl.StrictMode,{children:p.jsx(W0,{})}));
