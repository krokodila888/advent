(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))g(E);new MutationObserver(E=>{for(const x of E)if(x.type==="childList")for(const Y of x.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&g(Y)}).observe(document,{childList:!0,subtree:!0});function C(E){const x={};return E.integrity&&(x.integrity=E.integrity),E.referrerPolicy&&(x.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?x.credentials="include":E.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function g(E){if(E.ep)return;E.ep=!0;const x=C(E);fetch(E.href,x)}})();var oo={exports:{}},_n={};var bg;function rm(){if(bg)return _n;bg=1;var v=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function C(g,E,x){var Y=null;if(x!==void 0&&(Y=""+x),E.key!==void 0&&(Y=""+E.key),"key"in E){x={};for(var P in E)P!=="key"&&(x[P]=E[P])}else x=E;return E=x.ref,{$$typeof:v,type:g,key:Y,ref:E!==void 0?E:null,props:x}}return _n.Fragment=w,_n.jsx=C,_n.jsxs=C,_n}var Sg;function cm(){return Sg||(Sg=1,oo.exports=rm()),oo.exports}var d=cm(),ro={exports:{}},Q={};var zg;function fm(){if(zg)return Q;zg=1;var v=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),K=Symbol.iterator;function yl(c){return c===null||typeof c!="object"?null:(c=K&&c[K]||c["@@iterator"],typeof c=="function"?c:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ul={};function bl(c,M,j){this.props=c,this.context=M,this.refs=Ul,this.updater=j||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(c,M){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,M,"setState")},bl.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function El(){}El.prototype=bl.prototype;function sl(c,M,j){this.props=c,this.context=M,this.refs=Ul,this.updater=j||vl}var Tl=sl.prototype=new El;Tl.constructor=sl,_l(Tl,bl.prototype),Tl.isPureReactComponent=!0;var Zl=Array.isArray;function Sl(){}var J={H:null,A:null,T:null,S:null},Rl=Object.prototype.hasOwnProperty;function $l(c,M,j){var R=j.ref;return{$$typeof:v,type:c,key:M,ref:R!==void 0?R:null,props:j}}function Ft(c,M){return $l(c.type,M,c.props)}function pt(c){return typeof c=="object"&&c!==null&&c.$$typeof===v}function kl(c){var M={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(j){return M[j]})}var Ae=/\/+/g;function xt(c,M){return typeof c=="object"&&c!==null&&c.key!=null?kl(""+c.key):M.toString(36)}function At(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(Sl,Sl):(c.status="pending",c.then(function(M){c.status==="pending"&&(c.status="fulfilled",c.value=M)},function(M){c.status==="pending"&&(c.status="rejected",c.reason=M)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function z(c,M,j,R,L){var $=typeof c;($==="undefined"||$==="boolean")&&(c=null);var nl=!1;if(c===null)nl=!0;else switch($){case"bigint":case"string":case"number":nl=!0;break;case"object":switch(c.$$typeof){case v:case w:nl=!0;break;case O:return nl=c._init,z(nl(c._payload),M,j,R,L)}}if(nl)return L=L(c),nl=R===""?"."+xt(c,0):R,Zl(L)?(j="",nl!=null&&(j=nl.replace(Ae,"$&/")+"/"),z(L,M,j,"",function(Da){return Da})):L!=null&&(pt(L)&&(L=Ft(L,j+(L.key==null||c&&c.key===L.key?"":(""+L.key).replace(Ae,"$&/")+"/")+nl)),M.push(L)),1;nl=0;var Kl=R===""?".":R+":";if(Zl(c))for(var wl=0;wl<c.length;wl++)R=c[wl],$=Kl+xt(R,wl),nl+=z(R,M,j,$,L);else if(wl=yl(c),typeof wl=="function")for(c=wl.call(c),wl=0;!(R=c.next()).done;)R=R.value,$=Kl+xt(R,wl++),nl+=z(R,M,j,$,L);else if($==="object"){if(typeof c.then=="function")return z(At(c),M,j,R,L);throw M=String(c),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return nl}function D(c,M,j){if(c==null)return c;var R=[],L=0;return z(c,R,"","",function($){return M.call(j,$,L++)}),R}function G(c){if(c._status===-1){var M=c._result;M=M(),M.then(function(j){(c._status===0||c._status===-1)&&(c._status=1,c._result=j)},function(j){(c._status===0||c._status===-1)&&(c._status=2,c._result=j)}),c._status===-1&&(c._status=0,c._result=M)}if(c._status===1)return c._result.default;throw c._result}var ol=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},gl={map:D,forEach:function(c,M,j){D(c,function(){M.apply(this,arguments)},j)},count:function(c){var M=0;return D(c,function(){M++}),M},toArray:function(c){return D(c,function(M){return M})||[]},only:function(c){if(!pt(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return Q.Activity=N,Q.Children=gl,Q.Component=bl,Q.Fragment=C,Q.Profiler=E,Q.PureComponent=sl,Q.StrictMode=g,Q.Suspense=U,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,Q.__COMPILER_RUNTIME={__proto__:null,c:function(c){return J.H.useMemoCache(c)}},Q.cache=function(c){return function(){return c.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(c,M,j){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var R=_l({},c.props),L=c.key;if(M!=null)for($ in M.key!==void 0&&(L=""+M.key),M)!Rl.call(M,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&M.ref===void 0||(R[$]=M[$]);var $=arguments.length-2;if($===1)R.children=j;else if(1<$){for(var nl=Array($),Kl=0;Kl<$;Kl++)nl[Kl]=arguments[Kl+2];R.children=nl}return $l(c.type,L,R)},Q.createContext=function(c){return c={$$typeof:Y,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:x,_context:c},c},Q.createElement=function(c,M,j){var R,L={},$=null;if(M!=null)for(R in M.key!==void 0&&($=""+M.key),M)Rl.call(M,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(L[R]=M[R]);var nl=arguments.length-2;if(nl===1)L.children=j;else if(1<nl){for(var Kl=Array(nl),wl=0;wl<nl;wl++)Kl[wl]=arguments[wl+2];L.children=Kl}if(c&&c.defaultProps)for(R in nl=c.defaultProps,nl)L[R]===void 0&&(L[R]=nl[R]);return $l(c,$,L)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(c){return{$$typeof:P,render:c}},Q.isValidElement=pt,Q.lazy=function(c){return{$$typeof:O,_payload:{_status:-1,_result:c},_init:G}},Q.memo=function(c,M){return{$$typeof:T,type:c,compare:M===void 0?null:M}},Q.startTransition=function(c){var M=J.T,j={};J.T=j;try{var R=c(),L=J.S;L!==null&&L(j,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Sl,ol)}catch($){ol($)}finally{M!==null&&j.types!==null&&(M.types=j.types),J.T=M}},Q.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},Q.use=function(c){return J.H.use(c)},Q.useActionState=function(c,M,j){return J.H.useActionState(c,M,j)},Q.useCallback=function(c,M){return J.H.useCallback(c,M)},Q.useContext=function(c){return J.H.useContext(c)},Q.useDebugValue=function(){},Q.useDeferredValue=function(c,M){return J.H.useDeferredValue(c,M)},Q.useEffect=function(c,M){return J.H.useEffect(c,M)},Q.useEffectEvent=function(c){return J.H.useEffectEvent(c)},Q.useId=function(){return J.H.useId()},Q.useImperativeHandle=function(c,M,j){return J.H.useImperativeHandle(c,M,j)},Q.useInsertionEffect=function(c,M){return J.H.useInsertionEffect(c,M)},Q.useLayoutEffect=function(c,M){return J.H.useLayoutEffect(c,M)},Q.useMemo=function(c,M){return J.H.useMemo(c,M)},Q.useOptimistic=function(c,M){return J.H.useOptimistic(c,M)},Q.useReducer=function(c,M,j){return J.H.useReducer(c,M,j)},Q.useRef=function(c){return J.H.useRef(c)},Q.useState=function(c){return J.H.useState(c)},Q.useSyncExternalStore=function(c,M,j){return J.H.useSyncExternalStore(c,M,j)},Q.useTransition=function(){return J.H.useTransition()},Q.version="19.2.3",Q}var _g;function ho(){return _g||(_g=1,ro.exports=fm()),ro.exports}var zl=ho(),co={exports:{}},Tn={},fo={exports:{}},go={};var Tg;function gm(){return Tg||(Tg=1,(function(v){function w(z,D){var G=z.length;z.push(D);l:for(;0<G;){var ol=G-1>>>1,gl=z[ol];if(0<E(gl,D))z[ol]=D,z[G]=gl,G=ol;else break l}}function C(z){return z.length===0?null:z[0]}function g(z){if(z.length===0)return null;var D=z[0],G=z.pop();if(G!==D){z[0]=G;l:for(var ol=0,gl=z.length,c=gl>>>1;ol<c;){var M=2*(ol+1)-1,j=z[M],R=M+1,L=z[R];if(0>E(j,G))R<gl&&0>E(L,j)?(z[ol]=L,z[R]=G,ol=R):(z[ol]=j,z[M]=G,ol=M);else if(R<gl&&0>E(L,G))z[ol]=L,z[R]=G,ol=R;else break l}}return D}function E(z,D){var G=z.sortIndex-D.sortIndex;return G!==0?G:z.id-D.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;v.unstable_now=function(){return x.now()}}else{var Y=Date,P=Y.now();v.unstable_now=function(){return Y.now()-P}}var U=[],T=[],O=1,N=null,K=3,yl=!1,vl=!1,_l=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,El=typeof clearTimeout=="function"?clearTimeout:null,sl=typeof setImmediate<"u"?setImmediate:null;function Tl(z){for(var D=C(T);D!==null;){if(D.callback===null)g(T);else if(D.startTime<=z)g(T),D.sortIndex=D.expirationTime,w(U,D);else break;D=C(T)}}function Zl(z){if(_l=!1,Tl(z),!vl)if(C(U)!==null)vl=!0,Sl||(Sl=!0,kl());else{var D=C(T);D!==null&&At(Zl,D.startTime-z)}}var Sl=!1,J=-1,Rl=5,$l=-1;function Ft(){return Ul?!0:!(v.unstable_now()-$l<Rl)}function pt(){if(Ul=!1,Sl){var z=v.unstable_now();$l=z;var D=!0;try{l:{vl=!1,_l&&(_l=!1,El(J),J=-1),yl=!0;var G=K;try{t:{for(Tl(z),N=C(U);N!==null&&!(N.expirationTime>z&&Ft());){var ol=N.callback;if(typeof ol=="function"){N.callback=null,K=N.priorityLevel;var gl=ol(N.expirationTime<=z);if(z=v.unstable_now(),typeof gl=="function"){N.callback=gl,Tl(z),D=!0;break t}N===C(U)&&g(U),Tl(z)}else g(U);N=C(U)}if(N!==null)D=!0;else{var c=C(T);c!==null&&At(Zl,c.startTime-z),D=!1}}break l}finally{N=null,K=G,yl=!1}D=void 0}}finally{D?kl():Sl=!1}}}var kl;if(typeof sl=="function")kl=function(){sl(pt)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,xt=Ae.port2;Ae.port1.onmessage=pt,kl=function(){xt.postMessage(null)}}else kl=function(){bl(pt,0)};function At(z,D){J=bl(function(){z(v.unstable_now())},D)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(z){z.callback=null},v.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rl=0<z?Math.floor(1e3/z):5},v.unstable_getCurrentPriorityLevel=function(){return K},v.unstable_next=function(z){switch(K){case 1:case 2:case 3:var D=3;break;default:D=K}var G=K;K=D;try{return z()}finally{K=G}},v.unstable_requestPaint=function(){Ul=!0},v.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=K;K=z;try{return D()}finally{K=G}},v.unstable_scheduleCallback=function(z,D,G){var ol=v.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ol+G:ol):G=ol,z){case 1:var gl=-1;break;case 2:gl=250;break;case 5:gl=1073741823;break;case 4:gl=1e4;break;default:gl=5e3}return gl=G+gl,z={id:O++,callback:D,priorityLevel:z,startTime:G,expirationTime:gl,sortIndex:-1},G>ol?(z.sortIndex=G,w(T,z),C(U)===null&&z===C(T)&&(_l?(El(J),J=-1):_l=!0,At(Zl,G-ol))):(z.sortIndex=gl,w(U,z),vl||yl||(vl=!0,Sl||(Sl=!0,kl()))),z},v.unstable_shouldYield=Ft,v.unstable_wrapCallback=function(z){var D=K;return function(){var G=K;K=D;try{return z.apply(this,arguments)}finally{K=G}}}})(go)),go}var Ag;function pm(){return Ag||(Ag=1,fo.exports=gm()),fo.exports}var po={exports:{}},Vl={};var Mg;function dm(){if(Mg)return Vl;Mg=1;var v=ho();function w(U){var T="https://react.dev/errors/"+U;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)T+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+U+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(){}var g={d:{f:C,r:function(){throw Error(w(522))},D:C,C,L:C,m:C,X:C,S:C,M:C},p:0,findDOMNode:null},E=Symbol.for("react.portal");function x(U,T,O){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:N==null?null:""+N,children:U,containerInfo:T,implementation:O}}var Y=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,T){if(U==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Vl.createPortal=function(U,T){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(w(299));return x(U,T,null,O)},Vl.flushSync=function(U){var T=Y.T,O=g.p;try{if(Y.T=null,g.p=2,U)return U()}finally{Y.T=T,g.p=O,g.d.f()}},Vl.preconnect=function(U,T){typeof U=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,g.d.C(U,T))},Vl.prefetchDNS=function(U){typeof U=="string"&&g.d.D(U)},Vl.preinit=function(U,T){if(typeof U=="string"&&T&&typeof T.as=="string"){var O=T.as,N=P(O,T.crossOrigin),K=typeof T.integrity=="string"?T.integrity:void 0,yl=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;O==="style"?g.d.S(U,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:N,integrity:K,fetchPriority:yl}):O==="script"&&g.d.X(U,{crossOrigin:N,integrity:K,fetchPriority:yl,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Vl.preinitModule=function(U,T){if(typeof U=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var O=P(T.as,T.crossOrigin);g.d.M(U,{crossOrigin:O,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&g.d.M(U)},Vl.preload=function(U,T){if(typeof U=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var O=T.as,N=P(O,T.crossOrigin);g.d.L(U,O,{crossOrigin:N,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Vl.preloadModule=function(U,T){if(typeof U=="string")if(T){var O=P(T.as,T.crossOrigin);g.d.m(U,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:O,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else g.d.m(U)},Vl.requestFormReset=function(U){g.d.r(U)},Vl.unstable_batchedUpdates=function(U,T){return U(T)},Vl.useFormState=function(U,T,O){return Y.H.useFormState(U,T,O)},Vl.useFormStatus=function(){return Y.H.useHostTransitionStatus()},Vl.version="19.2.3",Vl}var Eg;function mm(){if(Eg)return po.exports;Eg=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(w){console.error(w)}}return v(),po.exports=dm(),po.exports}var wg;function hm(){if(wg)return Tn;wg=1;var v=pm(),w=ho(),C=mm();function g(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function x(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function Y(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(x(l)!==l)throw Error(g(188))}function T(l){var t=l.alternate;if(!t){if(t=x(l),t===null)throw Error(g(188));return t!==l?null:l}for(var e=l,a=t;;){var n=e.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===e)return U(n),l;if(i===a)return U(n),t;i=i.sibling}throw Error(g(188))}if(e.return!==a.return)e=n,a=i;else{for(var u=!1,s=n.child;s;){if(s===e){u=!0,e=n,a=i;break}if(s===a){u=!0,a=n,e=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===e){u=!0,e=i,a=n;break}if(s===a){u=!0,a=i,e=n;break}s=s.sibling}if(!u)throw Error(g(189))}}if(e.alternate!==a)throw Error(g(190))}if(e.tag!==3)throw Error(g(188));return e.stateNode.current===e?l:t}function O(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=O(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,K=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),El=Symbol.for("react.consumer"),sl=Symbol.for("react.context"),Tl=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Rl=Symbol.for("react.lazy"),$l=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function kl(l){return l===null||typeof l!="object"?null:(l=pt&&l[pt]||l["@@iterator"],typeof l=="function"?l:null)}var Ae=Symbol.for("react.client.reference");function xt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ae?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case _l:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case Zl:return"Suspense";case Sl:return"SuspenseList";case $l:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case sl:return l.displayName||"Context";case El:return(l._context.displayName||"Context")+".Consumer";case Tl:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case J:return t=l.displayName||null,t!==null?t:xt(l.type)||"Memo";case Rl:t=l._payload,l=l._init;try{return xt(l(t))}catch{}}return null}var At=Array.isArray,z=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ol=[],gl=-1;function c(l){return{current:l}}function M(l){0>gl||(l.current=ol[gl],ol[gl]=null,gl--)}function j(l,t){gl++,ol[gl]=l.current,l.current=t}var R=c(null),L=c(null),$=c(null),nl=c(null);function Kl(l,t){switch(j($,t),j(L,l),j(R,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Qf(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Qf(t),l=Lf(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}M(R),j(R,l)}function wl(){M(R),M(L),M($)}function Da(l){l.memoizedState!==null&&j(nl,l);var t=R.current,e=Lf(t,l.type);t!==e&&(j(L,l),j(R,e))}function An(l){L.current===l&&(M(R),M(L)),nl.current===l&&(M(nl),vn._currentValue=G)}var Zi,yo;function Me(l){if(Zi===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Zi=t&&t[1]||"",yo=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zi+l+yo}var Vi=!1;function Ki(l,t){if(!l||Vi)return"";Vi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var y=b}Reflect.construct(l,[],A)}else{try{A.call()}catch(b){y=b}l.call(A.prototype)}}else{try{throw Error()}catch(b){y=b}(A=l())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),h=s.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===h.length)for(a=o.length-1,n=h.length-1;1<=a&&0<=n&&o[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==h[n]){var S=`
`+o[a].replace(" at new "," at ");return l.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",l.displayName)),S}while(1<=a&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?Me(e):""}function Xg(l,t){switch(l.tag){case 26:case 27:case 5:return Me(l.type);case 16:return Me("Lazy");case 13:return l.child!==t&&t!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Ki(l.type,!1);case 11:return Ki(l.type.render,!1);case 1:return Ki(l.type,!0);case 31:return Me("Activity");default:return""}}function vo(l){try{var t="",e=null;do t+=Xg(l,e),e=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ji=Object.prototype.hasOwnProperty,$i=v.unstable_scheduleCallback,ki=v.unstable_cancelCallback,Gg=v.unstable_shouldYield,Qg=v.unstable_requestPaint,at=v.unstable_now,Lg=v.unstable_getCurrentPriorityLevel,bo=v.unstable_ImmediatePriority,So=v.unstable_UserBlockingPriority,Mn=v.unstable_NormalPriority,Zg=v.unstable_LowPriority,zo=v.unstable_IdlePriority,Vg=v.log,Kg=v.unstable_setDisableYieldValue,Oa=null,nt=null;function It(l){if(typeof Vg=="function"&&Kg(l),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Oa,l)}catch{}}var it=Math.clz32?Math.clz32:kg,Jg=Math.log,$g=Math.LN2;function kg(l){return l>>>=0,l===0?32:31-(Jg(l)/$g|0)|0}var En=256,wn=262144,Dn=4194304;function Ee(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function On(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var n=0,i=l.suspendedLanes,u=l.pingedLanes;l=l.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?n=Ee(a):(u&=s,u!==0?n=Ee(u):e||(e=s&~l,e!==0&&(n=Ee(e))))):(s=a&~i,s!==0?n=Ee(s):u!==0?n=Ee(u):e||(e=a&~l,e!==0&&(n=Ee(e)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,e=t&-t,i>=e||i===32&&(e&4194048)!==0)?t:n}function ja(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wg(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var l=Dn;return Dn<<=1,(Dn&62914560)===0&&(Dn=4194304),l}function Wi(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Ca(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Fg(l,t,e,a,n,i){var u=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var s=l.entanglements,o=l.expirationTimes,h=l.hiddenUpdates;for(e=u&~e;0<e;){var S=31-it(e),A=1<<S;s[S]=0,o[S]=-1;var y=h[S];if(y!==null)for(h[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}e&=~A}a!==0&&To(l,a,0),i!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=i&~(u&~t))}function To(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-it(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&261930}function Ao(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-it(e),n=1<<a;n&t|l[a]&t&&(l[a]|=t),e&=~n}}function Mo(l,t){var e=t&-t;return e=(e&42)!==0?1:Fi(e),(e&(l.suspendedLanes|t))!==0?0:e}function Fi(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ii(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Eo(){var l=D.p;return l!==0?l:(l=window.event,l===void 0?32:gg(l.type))}function wo(l,t){var e=D.p;try{return D.p=l,t()}finally{D.p=e}}var Pt=Math.random().toString(36).slice(2),ql="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,Ze="__reactContainer$"+Pt,Pi="__reactEvents$"+Pt,Ig="__reactListeners$"+Pt,Pg="__reactHandles$"+Pt,Do="__reactResources$"+Pt,xa="__reactMarker$"+Pt;function lu(l){delete l[ql],delete l[Wl],delete l[Pi],delete l[Ig],delete l[Pg]}function Ve(l){var t=l[ql];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Ze]||e[ql]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=Wf(l);l!==null;){if(e=l[ql])return e;l=Wf(l)}return t}l=e,e=l.parentNode}return null}function Ke(l){if(l=l[ql]||l[Ze]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Na(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(g(33))}function Je(l){var t=l[Do];return t||(t=l[Do]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Bl(l){l[xa]=!0}var Oo=new Set,jo={};function we(l,t){$e(l,t),$e(l+"Capture",t)}function $e(l,t){for(jo[l]=t,l=0;l<t.length;l++)Oo.add(t[l])}var lp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},xo={};function tp(l){return Ji.call(xo,l)?!0:Ji.call(Co,l)?!1:lp.test(l)?xo[l]=!0:(Co[l]=!0,!1)}function jn(l,t,e){if(tp(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function Cn(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function Nt(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}function dt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function No(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(l,t,e){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function tu(l){if(!l._valueTracker){var t=No(l)?"checked":"value";l._valueTracker=ep(l,t,""+l[t])}}function Uo(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=No(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function xn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ap=/[\n"\\]/g;function mt(l){return l.replace(ap,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function eu(l,t,e,a,n,i,u,s){l.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?l.type=u:l.removeAttribute("type"),t!=null?u==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+dt(t)):l.value!==""+dt(t)&&(l.value=""+dt(t)):u!=="submit"&&u!=="reset"||l.removeAttribute("value"),t!=null?au(l,u,dt(t)):e!=null?au(l,u,dt(e)):a!=null&&l.removeAttribute("value"),n==null&&i!=null&&(l.defaultChecked=!!i),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.name=""+dt(s):l.removeAttribute("name")}function Ho(l,t,e,a,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.type=i),t!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){tu(l);return}e=e!=null?""+dt(e):"",t=t!=null?""+dt(t):e,s||t===l.value||(l.value=t),l.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=s?l.checked:!!a,l.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.name=u),tu(l)}function au(l,t,e){t==="number"&&xn(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function ke(l,t,e,a){if(l=l.options,t){t={};for(var n=0;n<e.length;n++)t["$"+e[n]]=!0;for(e=0;e<l.length;e++)n=t.hasOwnProperty("$"+l[e].value),l[e].selected!==n&&(l[e].selected=n),n&&a&&(l[e].defaultSelected=!0)}else{for(e=""+dt(e),t=null,n=0;n<l.length;n++){if(l[n].value===e){l[n].selected=!0,a&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Ro(l,t,e){if(t!=null&&(t=""+dt(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+dt(e):""}function Bo(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(g(92));if(At(a)){if(1<a.length)throw Error(g(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=dt(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a),tu(l)}function We(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yo(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||np.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function qo(l,t,e){if(t!=null&&typeof t!="object")throw Error(g(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&e[n]!==a&&Yo(l,n,a)}else for(var i in t)t.hasOwnProperty(i)&&Yo(l,i,t[i])}function nu(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nn(l){return up.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var iu=null;function uu(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fe=null,Ie=null;function Xo(l){var t=Ke(l);if(t&&(l=t.stateNode)){var e=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(eu(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var n=a[Wl]||null;if(!n)throw Error(g(90));eu(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&Uo(a)}break l;case"textarea":Ro(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&ke(l,!!e.multiple,t,!1)}}}var su=!1;function Go(l,t,e){if(su)return l(t,e);su=!0;try{var a=l(t);return a}finally{if(su=!1,(Fe!==null||Ie!==null)&&(Si(),Fe&&(t=Fe,l=Ie,Ie=Fe=null,Xo(t),l)))for(t=0;t<l.length;t++)Xo(l[t])}}function Ua(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Wl]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(g(231,t,typeof e));return e}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Ht)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{ou=!1}var le=null,ru=null,Un=null;function Qo(){if(Un)return Un;var l,t=ru,e=t.length,a,n="value"in le?le.value:le.textContent,i=n.length;for(l=0;l<e&&t[l]===n[l];l++);var u=e-l;for(a=1;a<=u&&t[e-a]===n[i-a];a++);return Un=n.slice(l,1<a?1-a:void 0)}function Hn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Rn(){return!0}function Lo(){return!1}function Fl(l){function t(e,a,n,i,u){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in l)l.hasOwnProperty(s)&&(e=l[s],this[s]=e?e(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rn:Lo,this.isPropagationStopped=Lo,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var De={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Fl(De),Ra=N({},De,{view:0,detail:0}),sp=Fl(Ra),cu,fu,Ba,Yn=N({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Ba&&(Ba&&l.type==="mousemove"?(cu=l.screenX-Ba.screenX,fu=l.screenY-Ba.screenY):fu=cu=0,Ba=l),cu)},movementY:function(l){return"movementY"in l?l.movementY:fu}}),Zo=Fl(Yn),op=N({},Yn,{dataTransfer:0}),rp=Fl(op),cp=N({},Ra,{relatedTarget:0}),gu=Fl(cp),fp=N({},De,{animationName:0,elapsedTime:0,pseudoElement:0}),gp=Fl(fp),pp=N({},De,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),dp=Fl(pp),mp=N({},De,{data:0}),Vo=Fl(mp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vp[l])?!!t[l]:!1}function pu(){return bp}var Sp=N({},Ra,{key:function(l){if(l.key){var t=hp[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Hn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yp[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(l){return l.type==="keypress"?Hn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Hn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),zp=Fl(Sp),_p=N({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Fl(_p),Tp=N({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Ap=Fl(Tp),Mp=N({},De,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ep=Fl(Mp),wp=N({},Yn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=Fl(wp),Op=N({},De,{newState:0,oldState:0}),jp=Fl(Op),Cp=[9,13,27,32],du=Ht&&"CompositionEvent"in window,Ya=null;Ht&&"documentMode"in document&&(Ya=document.documentMode);var xp=Ht&&"TextEvent"in window&&!Ya,Jo=Ht&&(!du||Ya&&8<Ya&&11>=Ya),$o=" ",ko=!1;function Wo(l,t){switch(l){case"keyup":return Cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fo(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pe=!1;function Np(l,t){switch(l){case"compositionend":return Fo(t);case"keypress":return t.which!==32?null:(ko=!0,$o);case"textInput":return l=t.data,l===$o&&ko?null:l;default:return null}}function Up(l,t){if(Pe)return l==="compositionend"||!du&&Wo(l,t)?(l=Qo(),Un=ru=le=null,Pe=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jo&&t.locale!=="ko"?null:t.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Io(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Hp[l.type]:t==="textarea"}function Po(l,t,e,a){Fe?Ie?Ie.push(a):Ie=[a]:Fe=a,t=wi(t,"onChange"),0<t.length&&(e=new Bn("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var qa=null,Xa=null;function Rp(l){Rf(l,0)}function qn(l){var t=Na(l);if(Uo(t))return l}function lr(l,t){if(l==="change")return t}var tr=!1;if(Ht){var mu;if(Ht){var hu="oninput"in document;if(!hu){var er=document.createElement("div");er.setAttribute("oninput","return;"),hu=typeof er.oninput=="function"}mu=hu}else mu=!1;tr=mu&&(!document.documentMode||9<document.documentMode)}function ar(){qa&&(qa.detachEvent("onpropertychange",nr),Xa=qa=null)}function nr(l){if(l.propertyName==="value"&&qn(Xa)){var t=[];Po(t,Xa,l,uu(l)),Go(Rp,t)}}function Bp(l,t,e){l==="focusin"?(ar(),qa=t,Xa=e,qa.attachEvent("onpropertychange",nr)):l==="focusout"&&ar()}function Yp(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return qn(Xa)}function qp(l,t){if(l==="click")return qn(t)}function Xp(l,t){if(l==="input"||l==="change")return qn(t)}function Gp(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var ut=typeof Object.is=="function"?Object.is:Gp;function Ga(l,t){if(ut(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Ji.call(t,n)||!ut(l[n],t[n]))return!1}return!0}function ir(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function ur(l,t){var e=ir(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=ir(e)}}function sr(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?sr(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function or(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=xn(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=xn(l.document)}return t}function yu(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Qp=Ht&&"documentMode"in document&&11>=document.documentMode,la=null,vu=null,Qa=null,bu=!1;function rr(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;bu||la==null||la!==xn(a)||(a=la,"selectionStart"in a&&yu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Qa&&Ga(Qa,a)||(Qa=a,a=wi(vu,"onSelect"),0<a.length&&(t=new Bn("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=la)))}function Oe(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var ta={animationend:Oe("Animation","AnimationEnd"),animationiteration:Oe("Animation","AnimationIteration"),animationstart:Oe("Animation","AnimationStart"),transitionrun:Oe("Transition","TransitionRun"),transitionstart:Oe("Transition","TransitionStart"),transitioncancel:Oe("Transition","TransitionCancel"),transitionend:Oe("Transition","TransitionEnd")},Su={},cr={};Ht&&(cr=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function je(l){if(Su[l])return Su[l];if(!ta[l])return l;var t=ta[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in cr)return Su[l]=t[e];return l}var fr=je("animationend"),gr=je("animationiteration"),pr=je("animationstart"),Lp=je("transitionrun"),Zp=je("transitionstart"),Vp=je("transitioncancel"),dr=je("transitionend"),mr=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Mt(l,t){mr.set(l,t),we(t,[l])}var Xn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ht=[],ea=0,_u=0;function Gn(){for(var l=ea,t=_u=ea=0;t<l;){var e=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,a!==null&&n!==null){var u=a.pending;u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n}i!==0&&hr(e,n,i)}}function Qn(l,t,e,a){ht[ea++]=l,ht[ea++]=t,ht[ea++]=e,ht[ea++]=a,_u|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function Tu(l,t,e,a){return Qn(l,t,e,a),Ln(l)}function Ce(l,t){return Qn(l,null,null,t),Ln(l)}function hr(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var n=!1,i=l.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(l=i.stateNode,l===null||l._visibility&1||(n=!0)),l=i,i=i.return;return l.tag===3?(i=l.stateNode,n&&t!==null&&(n=31-it(e),l=i.hiddenUpdates,a=l[n],a===null?l[n]=[t]:a.push(t),t.lane=e|536870912),i):null}function Ln(l){if(50<fn)throw fn=0,xs=null,Error(g(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var aa={};function Kp(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(l,t,e,a){return new Kp(l,t,e,a)}function Au(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var e=l.alternate;return e===null?(e=st(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function yr(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Zn(l,t,e,a,n,i){var u=0;if(a=l,typeof l=="function")Au(l)&&(u=1);else if(typeof l=="string")u=Fd(l,e,R.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case $l:return l=st(31,e,t,n),l.elementType=$l,l.lanes=i,l;case _l:return xe(e.children,n,i,t);case Ul:u=8,n|=24;break;case bl:return l=st(12,e,t,n|2),l.elementType=bl,l.lanes=i,l;case Zl:return l=st(13,e,t,n),l.elementType=Zl,l.lanes=i,l;case Sl:return l=st(19,e,t,n),l.elementType=Sl,l.lanes=i,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case sl:u=10;break l;case El:u=9;break l;case Tl:u=11;break l;case J:u=14;break l;case Rl:u=16,a=null;break l}u=29,e=Error(g(130,l===null?"null":typeof l,"")),a=null}return t=st(u,e,t,n),t.elementType=l,t.type=a,t.lanes=i,t}function xe(l,t,e,a){return l=st(7,l,a,t),l.lanes=e,l}function Mu(l,t,e){return l=st(6,l,null,t),l.lanes=e,l}function vr(l){var t=st(18,null,null,0);return t.stateNode=l,t}function Eu(l,t,e){return t=st(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var br=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var e=br.get(l);return e!==void 0?e:(t={value:l,source:t,stack:vo(t)},br.set(l,t),t)}return{value:l,source:t,stack:vo(t)}}var na=[],ia=0,Vn=null,La=0,vt=[],bt=0,te=null,Dt=1,Ot="";function Bt(l,t){na[ia++]=La,na[ia++]=Vn,Vn=l,La=t}function Sr(l,t,e){vt[bt++]=Dt,vt[bt++]=Ot,vt[bt++]=te,te=l;var a=Dt;l=Ot;var n=32-it(a)-1;a&=~(1<<n),e+=1;var i=32-it(t)+n;if(30<i){var u=n-n%5;i=(a&(1<<u)-1).toString(32),a>>=u,n-=u,Dt=1<<32-it(t)+n|e<<n|a,Ot=i+l}else Dt=1<<i|e<<n|a,Ot=l}function wu(l){l.return!==null&&(Bt(l,1),Sr(l,1,0))}function Du(l){for(;l===Vn;)Vn=na[--ia],na[ia]=null,La=na[--ia],na[ia]=null;for(;l===te;)te=vt[--bt],vt[bt]=null,Ot=vt[--bt],vt[bt]=null,Dt=vt[--bt],vt[bt]=null}function zr(l,t){vt[bt++]=Dt,vt[bt++]=Ot,vt[bt++]=te,Dt=t.id,Ot=t.overflow,te=l}var Xl=null,dl=null,ll=!1,ee=null,St=!1,Ou=Error(g(519));function ae(l){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Za(yt(t,l)),Ou}function _r(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[ql]=l,t[Wl]=a,e){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(e=0;e<pn.length;e++)W(pn[e],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Ho(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Bo(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||Xf(t.textContent,e)?(a.popover!=null&&(W("beforetoggle",t),W("toggle",t)),a.onScroll!=null&&W("scroll",t),a.onScrollEnd!=null&&W("scrollend",t),a.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ae(l,!0)}function Tr(l){for(Xl=l.return;Xl;)switch(Xl.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Xl=Xl.return}}function ua(l){if(l!==Xl)return!1;if(!ll)return Tr(l),ll=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Js(l.type,l.memoizedProps)),e=!e),e&&dl&&ae(l),Tr(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));dl=kf(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));dl=kf(l)}else t===27?(t=dl,ye(l.type)?(l=Is,Is=null,dl=l):dl=t):dl=Xl?_t(l.stateNode.nextSibling):null;return!0}function Ne(){dl=Xl=null,ll=!1}function ju(){var l=ee;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),ee=null),l}function Za(l){ee===null?ee=[l]:ee.push(l)}var Cu=c(null),Ue=null,Yt=null;function ne(l,t,e){j(Cu,t._currentValue),t._currentValue=e}function qt(l){l._currentValue=Cu.current,M(Cu)}function xu(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function Nu(l,t,e,a){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;l:for(;i!==null;){var s=i;i=n;for(var o=0;o<t.length;o++)if(s.context===t[o]){i.lanes|=e,s=i.alternate,s!==null&&(s.lanes|=e),xu(i.return,e,l),a||(u=null);break l}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(g(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),xu(u,e,l),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===l){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function sa(l,t,e,a){l=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var s=n.type;ut(n.pendingProps.value,u.value)||(l!==null?l.push(s):l=[s])}}else if(n===nl.current){if(u=n.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(vn):l=[vn])}n=n.return}l!==null&&Nu(t,l,e,a),t.flags|=262144}function Kn(l){for(l=l.firstContext;l!==null;){if(!ut(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function He(l){Ue=l,Yt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Gl(l){return Ar(Ue,l)}function Jn(l,t){return Ue===null&&He(l),Ar(l,t)}function Ar(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Yt===null){if(l===null)throw Error(g(308));Yt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Yt=Yt.next=t;return e}var Jp=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},$p=v.unstable_scheduleCallback,kp=v.unstable_NormalPriority,jl={$$typeof:sl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Jp,data:new Map,refCount:0}}function Va(l){l.refCount--,l.refCount===0&&$p(kp,function(){l.controller.abort()})}var Ka=null,Hu=0,oa=0,ra=null;function Wp(l,t){if(Ka===null){var e=Ka=[];Hu=0,oa=Ys(),ra={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Hu++,t.then(Mr,Mr),t}function Mr(){if(--Hu===0&&Ka!==null){ra!==null&&(ra.status="fulfilled");var l=Ka;Ka=null,oa=0,ra=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fp(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<e.length;n++)(0,e[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var Er=z.S;z.S=function(l,t){cf=at(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wp(l,t),Er!==null&&Er(l,t)};var Re=c(null);function Ru(){var l=Re.current;return l!==null?l:pl.pooledCache}function $n(l,t){t===null?j(Re,Re.current):j(Re,t.pool)}function wr(){var l=Ru();return l===null?null:{parent:jl._currentValue,pool:l}}var ca=Error(g(460)),Bu=Error(g(474)),kn=Error(g(542)),Wn={then:function(){}};function Dr(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Or(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Ut,Ut),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Cr(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=pl,l!==null&&100<l.shellSuspendCounter)throw Error(g(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Cr(l),l}throw Ye=t,ca}}function Be(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ye=e,ca):e}}var Ye=null;function jr(){if(Ye===null)throw Error(g(459));var l=Ye;return Ye=null,l}function Cr(l){if(l===ca||l===kn)throw Error(g(483))}var fa=null,Ja=0;function Fn(l){var t=Ja;return Ja+=1,fa===null&&(fa=[]),Or(fa,l,t)}function $a(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===K?Error(g(525)):(l=Object.prototype.toString.call(t),Error(g(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function xr(l){function t(f,r){if(l){var m=f.deletions;m===null?(f.deletions=[r],f.flags|=16):m.push(r)}}function e(f,r){if(!l)return null;for(;r!==null;)t(f,r),r=r.sibling;return null}function a(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=Rt(f,r),f.index=0,f.sibling=null,f}function i(f,r,m){return f.index=m,l?(m=f.alternate,m!==null?(m=m.index,m<r?(f.flags|=67108866,r):m):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function u(f){return l&&f.alternate===null&&(f.flags|=67108866),f}function s(f,r,m,_){return r===null||r.tag!==6?(r=Mu(m,f.mode,_),r.return=f,r):(r=n(r,m),r.return=f,r)}function o(f,r,m,_){var q=m.type;return q===_l?S(f,r,m.props.children,_,m.key):r!==null&&(r.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Rl&&Be(q)===r.type)?(r=n(r,m.props),$a(r,m),r.return=f,r):(r=Zn(m.type,m.key,m.props,null,f.mode,_),$a(r,m),r.return=f,r)}function h(f,r,m,_){return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=Eu(m,f.mode,_),r.return=f,r):(r=n(r,m.children||[]),r.return=f,r)}function S(f,r,m,_,q){return r===null||r.tag!==7?(r=xe(m,f.mode,_,q),r.return=f,r):(r=n(r,m),r.return=f,r)}function A(f,r,m){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Mu(""+r,f.mode,m),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case yl:return m=Zn(r.type,r.key,r.props,null,f.mode,m),$a(m,r),m.return=f,m;case vl:return r=Eu(r,f.mode,m),r.return=f,r;case Rl:return r=Be(r),A(f,r,m)}if(At(r)||kl(r))return r=xe(r,f.mode,m,null),r.return=f,r;if(typeof r.then=="function")return A(f,Fn(r),m);if(r.$$typeof===sl)return A(f,Jn(f,r),m);In(f,r)}return null}function y(f,r,m,_){var q=r!==null?r.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return q!==null?null:s(f,r,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:return m.key===q?o(f,r,m,_):null;case vl:return m.key===q?h(f,r,m,_):null;case Rl:return m=Be(m),y(f,r,m,_)}if(At(m)||kl(m))return q!==null?null:S(f,r,m,_,null);if(typeof m.then=="function")return y(f,r,Fn(m),_);if(m.$$typeof===sl)return y(f,r,Jn(f,m),_);In(f,m)}return null}function b(f,r,m,_,q){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(m)||null,s(r,f,""+_,q);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yl:return f=f.get(_.key===null?m:_.key)||null,o(r,f,_,q);case vl:return f=f.get(_.key===null?m:_.key)||null,h(r,f,_,q);case Rl:return _=Be(_),b(f,r,m,_,q)}if(At(_)||kl(_))return f=f.get(m)||null,S(r,f,_,q,null);if(typeof _.then=="function")return b(f,r,m,Fn(_),q);if(_.$$typeof===sl)return b(f,r,m,Jn(r,_),q);In(r,_)}return null}function H(f,r,m,_){for(var q=null,tl=null,B=r,V=r=0,I=null;B!==null&&V<m.length;V++){B.index>V?(I=B,B=null):I=B.sibling;var el=y(f,B,m[V],_);if(el===null){B===null&&(B=I);break}l&&B&&el.alternate===null&&t(f,B),r=i(el,r,V),tl===null?q=el:tl.sibling=el,tl=el,B=I}if(V===m.length)return e(f,B),ll&&Bt(f,V),q;if(B===null){for(;V<m.length;V++)B=A(f,m[V],_),B!==null&&(r=i(B,r,V),tl===null?q=B:tl.sibling=B,tl=B);return ll&&Bt(f,V),q}for(B=a(B);V<m.length;V++)I=b(B,f,V,m[V],_),I!==null&&(l&&I.alternate!==null&&B.delete(I.key===null?V:I.key),r=i(I,r,V),tl===null?q=I:tl.sibling=I,tl=I);return l&&B.forEach(function(_e){return t(f,_e)}),ll&&Bt(f,V),q}function X(f,r,m,_){if(m==null)throw Error(g(151));for(var q=null,tl=null,B=r,V=r=0,I=null,el=m.next();B!==null&&!el.done;V++,el=m.next()){B.index>V?(I=B,B=null):I=B.sibling;var _e=y(f,B,el.value,_);if(_e===null){B===null&&(B=I);break}l&&B&&_e.alternate===null&&t(f,B),r=i(_e,r,V),tl===null?q=_e:tl.sibling=_e,tl=_e,B=I}if(el.done)return e(f,B),ll&&Bt(f,V),q;if(B===null){for(;!el.done;V++,el=m.next())el=A(f,el.value,_),el!==null&&(r=i(el,r,V),tl===null?q=el:tl.sibling=el,tl=el);return ll&&Bt(f,V),q}for(B=a(B);!el.done;V++,el=m.next())el=b(B,f,V,el.value,_),el!==null&&(l&&el.alternate!==null&&B.delete(el.key===null?V:el.key),r=i(el,r,V),tl===null?q=el:tl.sibling=el,tl=el);return l&&B.forEach(function(om){return t(f,om)}),ll&&Bt(f,V),q}function fl(f,r,m,_){if(typeof m=="object"&&m!==null&&m.type===_l&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:l:{for(var q=m.key;r!==null;){if(r.key===q){if(q=m.type,q===_l){if(r.tag===7){e(f,r.sibling),_=n(r,m.props.children),_.return=f,f=_;break l}}else if(r.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Rl&&Be(q)===r.type){e(f,r.sibling),_=n(r,m.props),$a(_,m),_.return=f,f=_;break l}e(f,r);break}else t(f,r);r=r.sibling}m.type===_l?(_=xe(m.props.children,f.mode,_,m.key),_.return=f,f=_):(_=Zn(m.type,m.key,m.props,null,f.mode,_),$a(_,m),_.return=f,f=_)}return u(f);case vl:l:{for(q=m.key;r!==null;){if(r.key===q)if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation){e(f,r.sibling),_=n(r,m.children||[]),_.return=f,f=_;break l}else{e(f,r);break}else t(f,r);r=r.sibling}_=Eu(m,f.mode,_),_.return=f,f=_}return u(f);case Rl:return m=Be(m),fl(f,r,m,_)}if(At(m))return H(f,r,m,_);if(kl(m)){if(q=kl(m),typeof q!="function")throw Error(g(150));return m=q.call(m),X(f,r,m,_)}if(typeof m.then=="function")return fl(f,r,Fn(m),_);if(m.$$typeof===sl)return fl(f,r,Jn(f,m),_);In(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,r!==null&&r.tag===6?(e(f,r.sibling),_=n(r,m),_.return=f,f=_):(e(f,r),_=Mu(m,f.mode,_),_.return=f,f=_),u(f)):e(f,r)}return function(f,r,m,_){try{Ja=0;var q=fl(f,r,m,_);return fa=null,q}catch(B){if(B===ca||B===kn)throw B;var tl=st(29,B,null,f.mode);return tl.lanes=_,tl.return=f,tl}}}var qe=xr(!0),Nr=xr(!1),ie=!1;function Yu(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qu(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ue(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function se(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(al&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Ln(l),hr(l,null,e),t}return Qn(l,a,t,e),Ln(l)}function ka(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Ao(l,e)}}function Xu(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?n=i=t:i=i.next=t}else n=i=t;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Gu=!1;function Wa(){if(Gu){var l=ra;if(l!==null)throw l}}function Fa(l,t,e,a){Gu=!1;var n=l.updateQueue;ie=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var o=s,h=o.next;o.next=null,u===null?i=h:u.next=h,u=o;var S=l.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==u&&(s===null?S.firstBaseUpdate=h:s.next=h,S.lastBaseUpdate=o))}if(i!==null){var A=n.baseState;u=0,S=h=o=null,s=i;do{var y=s.lane&-536870913,b=y!==s.lane;if(b?(F&y)===y:(a&y)===y){y!==0&&y===oa&&(Gu=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});l:{var H=l,X=s;y=t;var fl=e;switch(X.tag){case 1:if(H=X.payload,typeof H=="function"){A=H.call(fl,A,y);break l}A=H;break l;case 3:H.flags=H.flags&-65537|128;case 0:if(H=X.payload,y=typeof H=="function"?H.call(fl,A,y):H,y==null)break l;A=N({},A,y);break l;case 2:ie=!0}}y=s.callback,y!==null&&(l.flags|=64,b&&(l.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(h=S=b,o=A):S=S.next=b,u|=y;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;b=s,s=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);S===null&&(o=A),n.baseState=o,n.firstBaseUpdate=h,n.lastBaseUpdate=S,i===null&&(n.shared.lanes=0),ge|=u,l.lanes=u,l.memoizedState=A}}function Ur(l,t){if(typeof l!="function")throw Error(g(191,l));l.call(t)}function Hr(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)Ur(e[l],t)}var ga=c(null),Pn=c(0);function Rr(l,t){l=$t,j(Pn,l),j(ga,t),$t=l|t.baseLanes}function Qu(){j(Pn,$t),j(ga,ga.current)}function Lu(){$t=Pn.current,M(ga),M(Pn)}var ot=c(null),zt=null;function oe(l){var t=l.alternate;j(Dl,Dl.current&1),j(ot,l),zt===null&&(t===null||ga.current!==null||t.memoizedState!==null)&&(zt=l)}function Zu(l){j(Dl,Dl.current),j(ot,l),zt===null&&(zt=l)}function Br(l){l.tag===22?(j(Dl,Dl.current),j(ot,l),zt===null&&(zt=l)):re()}function re(){j(Dl,Dl.current),j(ot,ot.current)}function rt(l){M(ot),zt===l&&(zt=null),M(Dl)}var Dl=c(0);function li(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Ws(e)||Fs(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,Z=null,rl=null,Cl=null,ti=!1,pa=!1,Xe=!1,ei=0,Ia=0,da=null,Ip=0;function Al(){throw Error(g(321))}function Vu(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!ut(l[e],t[e]))return!1;return!0}function Ku(l,t,e,a,n,i){return Xt=i,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=l===null||l.memoizedState===null?Sc:ss,Xe=!1,i=e(a,n),Xe=!1,pa&&(i=qr(t,e,a,n)),Yr(l),i}function Yr(l){z.H=tn;var t=rl!==null&&rl.next!==null;if(Xt=0,Cl=rl=Z=null,ti=!1,Ia=0,da=null,t)throw Error(g(300));l===null||xl||(l=l.dependencies,l!==null&&Kn(l)&&(xl=!0))}function qr(l,t,e,a){Z=l;var n=0;do{if(pa&&(da=null),Ia=0,pa=!1,25<=n)throw Error(g(301));if(n+=1,Cl=rl=null,l.updateQueue!=null){var i=l.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=zc,i=t(e,a)}while(pa);return i}function Pp(){var l=z.H,t=l.useState()[0];return t=typeof t.then=="function"?Pa(t):t,l=l.useState()[0],(rl!==null?rl.memoizedState:null)!==l&&(Z.flags|=1024),t}function Ju(){var l=ei!==0;return ei=0,l}function $u(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function ku(l){if(ti){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ti=!1}Xt=0,Cl=rl=Z=null,pa=!1,Ia=ei=0,da=null}function Jl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cl===null?Z.memoizedState=Cl=l:Cl=Cl.next=l,Cl}function Ol(){if(rl===null){var l=Z.alternate;l=l!==null?l.memoizedState:null}else l=rl.next;var t=Cl===null?Z.memoizedState:Cl.next;if(t!==null)Cl=t,rl=l;else{if(l===null)throw Z.alternate===null?Error(g(467)):Error(g(310));rl=l,l={memoizedState:rl.memoizedState,baseState:rl.baseState,baseQueue:rl.baseQueue,queue:rl.queue,next:null},Cl===null?Z.memoizedState=Cl=l:Cl=Cl.next=l}return Cl}function ai(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(l){var t=Ia;return Ia+=1,da===null&&(da=[]),l=Or(da,l,t),t=Z,(Cl===null?t.memoizedState:Cl.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Sc:ss),l}function ni(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pa(l);if(l.$$typeof===sl)return Gl(l)}throw Error(g(438,String(l)))}function Wu(l){var t=null,e=Z.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=Z.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=ai(),Z.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=Ft;return t.index++,e}function Gt(l,t){return typeof t=="function"?t(l):t}function ii(l){var t=Ol();return Fu(t,rl,l)}function Fu(l,t,e){var a=l.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var n=l.baseQueue,i=a.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,a.pending=null}if(i=l.baseState,n===null)l.memoizedState=i;else{t=n.next;var s=u=null,o=null,h=t,S=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(F&A)===A:(Xt&A)===A){var y=h.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===oa&&(S=!0);else if((Xt&y)===y){h=h.next,y===oa&&(S=!0);continue}else A={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(s=o=A,u=i):o=o.next=A,Z.lanes|=y,ge|=y;A=h.action,Xe&&e(i,A),i=h.hasEagerState?h.eagerState:e(i,A)}else y={lane:A,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(s=o=y,u=i):o=o.next=y,Z.lanes|=A,ge|=A;h=h.next}while(h!==null&&h!==t);if(o===null?u=i:o.next=s,!ut(i,l.memoizedState)&&(xl=!0,S&&(e=ra,e!==null)))throw e;l.memoizedState=i,l.baseState=u,l.baseQueue=o,a.lastRenderedState=i}return n===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function Iu(l){var t=Ol(),e=t.queue;if(e===null)throw Error(g(311));e.lastRenderedReducer=l;var a=e.dispatch,n=e.pending,i=t.memoizedState;if(n!==null){e.pending=null;var u=n=n.next;do i=l(i,u.action),u=u.next;while(u!==n);ut(i,t.memoizedState)||(xl=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),e.lastRenderedState=i}return[i,a]}function Xr(l,t,e){var a=Z,n=Ol(),i=ll;if(i){if(e===void 0)throw Error(g(407));e=e()}else e=t();var u=!ut((rl||n).memoizedState,e);if(u&&(n.memoizedState=e,xl=!0),n=n.queue,ts(Lr.bind(null,a,n,l),[l]),n.getSnapshot!==t||u||Cl!==null&&Cl.memoizedState.tag&1){if(a.flags|=2048,ma(9,{destroy:void 0},Qr.bind(null,a,n,e,t),null),pl===null)throw Error(g(349));i||(Xt&127)!==0||Gr(a,t,e)}return e}function Gr(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=Z.updateQueue,t===null?(t=ai(),Z.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Qr(l,t,e,a){t.value=e,t.getSnapshot=a,Zr(t)&&Vr(l)}function Lr(l,t,e){return e(function(){Zr(t)&&Vr(l)})}function Zr(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!ut(l,e)}catch{return!0}}function Vr(l){var t=Ce(l,2);t!==null&&et(t,l,2)}function Pu(l){var t=Jl();if(typeof l=="function"){var e=l;if(l=e(),Xe){It(!0);try{e()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Kr(l,t,e,a){return l.baseState=e,Fu(l,rl,typeof a=="function"?a:Gt)}function ld(l,t,e,a,n){if(oi(l))throw Error(g(485));if(l=t.action,l!==null){var i={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?e(!0):i.isTransition=!1,a(i),e=t.pending,e===null?(i.next=t.pending=i,Jr(t,i)):(i.next=e.next,t.pending=e.next=i)}}function Jr(l,t){var e=t.action,a=t.payload,n=l.state;if(t.isTransition){var i=z.T,u={};z.T=u;try{var s=e(n,a),o=z.S;o!==null&&o(u,s),$r(l,t,s)}catch(h){ls(l,t,h)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=e(n,a),$r(l,t,i)}catch(h){ls(l,t,h)}}function $r(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){kr(l,t,a)},function(a){return ls(l,t,a)}):kr(l,t,e)}function kr(l,t,e){t.status="fulfilled",t.value=e,Wr(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Jr(l,e)))}function ls(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,Wr(t),t=t.next;while(t!==a)}l.action=null}function Wr(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fr(l,t){return t}function Ir(l,t){if(ll){var e=pl.formState;if(e!==null){l:{var a=Z;if(ll){if(dl){t:{for(var n=dl,i=St;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){dl=_t(n.nextSibling),a=n.data==="F!";break l}}ae(a)}a=!1}a&&(t=e[0])}}return e=Jl(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:t},e.queue=a,e=yc.bind(null,Z,a),a.dispatch=e,a=Pu(!1),i=us.bind(null,Z,!1,a.queue),a=Jl(),n={state:t,dispatch:null,action:l,pending:null},a.queue=n,e=ld.bind(null,Z,n,i,e),n.dispatch=e,a.memoizedState=l,[t,e,!1]}function Pr(l){var t=Ol();return lc(t,rl,l)}function lc(l,t,e){if(t=Fu(l,t,Fr)[0],l=ii(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(u){throw u===ca?kn:u}else a=t;t=Ol();var n=t.queue,i=n.dispatch;return e!==t.memoizedState&&(Z.flags|=2048,ma(9,{destroy:void 0},td.bind(null,n,e),null)),[a,i,l]}function td(l,t){l.action=t}function tc(l){var t=Ol(),e=rl;if(e!==null)return lc(t,e,l);Ol(),t=t.memoizedState,e=Ol();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function ma(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=Z.updateQueue,t===null&&(t=ai(),Z.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function ec(){return Ol().memoizedState}function ui(l,t,e,a){var n=Jl();Z.flags|=l,n.memoizedState=ma(1|t,{destroy:void 0},e,a===void 0?null:a)}function si(l,t,e,a){var n=Ol();a=a===void 0?null:a;var i=n.memoizedState.inst;rl!==null&&a!==null&&Vu(a,rl.memoizedState.deps)?n.memoizedState=ma(t,i,e,a):(Z.flags|=l,n.memoizedState=ma(1|t,i,e,a))}function ac(l,t){ui(8390656,8,l,t)}function ts(l,t){si(2048,8,l,t)}function ed(l){Z.flags|=4;var t=Z.updateQueue;if(t===null)t=ai(),Z.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function nc(l){var t=Ol().memoizedState;return ed({ref:t,nextImpl:l}),function(){if((al&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function ic(l,t){return si(4,2,l,t)}function uc(l,t){return si(4,4,l,t)}function sc(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function oc(l,t,e){e=e!=null?e.concat([l]):null,si(4,4,sc.bind(null,t,l),e)}function es(){}function rc(l,t){var e=Ol();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&Vu(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function cc(l,t){var e=Ol();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&Vu(t,a[1]))return a[0];if(a=l(),Xe){It(!0);try{l()}finally{It(!1)}}return e.memoizedState=[a,t],a}function as(l,t,e){return e===void 0||(Xt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=gf(),Z.lanes|=l,ge|=l,e)}function fc(l,t,e,a){return ut(e,t)?e:ga.current!==null?(l=as(l,e,a),ut(l,t)||(xl=!0),l):(Xt&42)===0||(Xt&1073741824)!==0&&(F&261930)===0?(xl=!0,l.memoizedState=e):(l=gf(),Z.lanes|=l,ge|=l,t)}function gc(l,t,e,a,n){var i=D.p;D.p=i!==0&&8>i?i:8;var u=z.T,s={};z.T=s,us(l,!1,t,e);try{var o=n(),h=z.S;if(h!==null&&h(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=Fp(o,a);ln(l,t,S,gt(l))}else ln(l,t,a,gt(l))}catch(A){ln(l,t,{then:function(){},status:"rejected",reason:A},gt())}finally{D.p=i,u!==null&&s.types!==null&&(u.types=s.types),z.T=u}}function ad(){}function ns(l,t,e,a){if(l.tag!==5)throw Error(g(476));var n=pc(l).queue;gc(l,n,t,G,e===null?ad:function(){return dc(l),e(a)})}function pc(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:G},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function dc(l){var t=pc(l);t.next===null&&(t=l.alternate.memoizedState),ln(l,t.next.queue,{},gt())}function is(){return Gl(vn)}function mc(){return Ol().memoizedState}function hc(){return Ol().memoizedState}function nd(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=gt();l=ue(e);var a=se(t,l,e);a!==null&&(et(a,t,e),ka(a,t,e)),t={cache:Uu()},l.payload=t;return}t=t.return}}function id(l,t,e){var a=gt();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},oi(l)?vc(t,e):(e=Tu(l,t,e,a),e!==null&&(et(e,l,a),bc(e,t,a)))}function yc(l,t,e){var a=gt();ln(l,t,e,a)}function ln(l,t,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(oi(l))vc(t,n);else{var i=l.alternate;if(l.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,e);if(n.hasEagerState=!0,n.eagerState=s,ut(s,u))return Qn(l,t,n,0),pl===null&&Gn(),!1}catch{}if(e=Tu(l,t,n,a),e!==null)return et(e,l,a),bc(e,t,a),!0}return!1}function us(l,t,e,a){if(a={lane:2,revertLane:Ys(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},oi(l)){if(t)throw Error(g(479))}else t=Tu(l,e,a,2),t!==null&&et(t,l,2)}function oi(l){var t=l.alternate;return l===Z||t!==null&&t===Z}function vc(l,t){pa=ti=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function bc(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Ao(l,e)}}var tn={readContext:Gl,use:ni,useCallback:Al,useContext:Al,useEffect:Al,useImperativeHandle:Al,useLayoutEffect:Al,useInsertionEffect:Al,useMemo:Al,useReducer:Al,useRef:Al,useState:Al,useDebugValue:Al,useDeferredValue:Al,useTransition:Al,useSyncExternalStore:Al,useId:Al,useHostTransitionStatus:Al,useFormState:Al,useActionState:Al,useOptimistic:Al,useMemoCache:Al,useCacheRefresh:Al};tn.useEffectEvent=Al;var Sc={readContext:Gl,use:ni,useCallback:function(l,t){return Jl().memoizedState=[l,t===void 0?null:t],l},useContext:Gl,useEffect:ac,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,ui(4194308,4,sc.bind(null,t,l),e)},useLayoutEffect:function(l,t){return ui(4194308,4,l,t)},useInsertionEffect:function(l,t){ui(4,2,l,t)},useMemo:function(l,t){var e=Jl();t=t===void 0?null:t;var a=l();if(Xe){It(!0);try{l()}finally{It(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=Jl();if(e!==void 0){var n=e(t);if(Xe){It(!0);try{e(t)}finally{It(!1)}}}else n=t;return a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},a.queue=l,l=l.dispatch=id.bind(null,Z,l),[a.memoizedState,l]},useRef:function(l){var t=Jl();return l={current:l},t.memoizedState=l},useState:function(l){l=Pu(l);var t=l.queue,e=yc.bind(null,Z,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:es,useDeferredValue:function(l,t){var e=Jl();return as(e,l,t)},useTransition:function(){var l=Pu(!1);return l=gc.bind(null,Z,l.queue,!0,!1),Jl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=Z,n=Jl();if(ll){if(e===void 0)throw Error(g(407));e=e()}else{if(e=t(),pl===null)throw Error(g(349));(F&127)!==0||Gr(a,t,e)}n.memoizedState=e;var i={value:e,getSnapshot:t};return n.queue=i,ac(Lr.bind(null,a,i,l),[l]),a.flags|=2048,ma(9,{destroy:void 0},Qr.bind(null,a,i,e,t),null),e},useId:function(){var l=Jl(),t=pl.identifierPrefix;if(ll){var e=Ot,a=Dt;e=(a&~(1<<32-it(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=ei++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Ip++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:is,useFormState:Ir,useActionState:Ir,useOptimistic:function(l){var t=Jl();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=us.bind(null,Z,!0,e),e.dispatch=t,[l,t]},useMemoCache:Wu,useCacheRefresh:function(){return Jl().memoizedState=nd.bind(null,Z)},useEffectEvent:function(l){var t=Jl(),e={impl:l};return t.memoizedState=e,function(){if((al&2)!==0)throw Error(g(440));return e.impl.apply(void 0,arguments)}}},ss={readContext:Gl,use:ni,useCallback:rc,useContext:Gl,useEffect:ts,useImperativeHandle:oc,useInsertionEffect:ic,useLayoutEffect:uc,useMemo:cc,useReducer:ii,useRef:ec,useState:function(){return ii(Gt)},useDebugValue:es,useDeferredValue:function(l,t){var e=Ol();return fc(e,rl.memoizedState,l,t)},useTransition:function(){var l=ii(Gt)[0],t=Ol().memoizedState;return[typeof l=="boolean"?l:Pa(l),t]},useSyncExternalStore:Xr,useId:mc,useHostTransitionStatus:is,useFormState:Pr,useActionState:Pr,useOptimistic:function(l,t){var e=Ol();return Kr(e,rl,l,t)},useMemoCache:Wu,useCacheRefresh:hc};ss.useEffectEvent=nc;var zc={readContext:Gl,use:ni,useCallback:rc,useContext:Gl,useEffect:ts,useImperativeHandle:oc,useInsertionEffect:ic,useLayoutEffect:uc,useMemo:cc,useReducer:Iu,useRef:ec,useState:function(){return Iu(Gt)},useDebugValue:es,useDeferredValue:function(l,t){var e=Ol();return rl===null?as(e,l,t):fc(e,rl.memoizedState,l,t)},useTransition:function(){var l=Iu(Gt)[0],t=Ol().memoizedState;return[typeof l=="boolean"?l:Pa(l),t]},useSyncExternalStore:Xr,useId:mc,useHostTransitionStatus:is,useFormState:tc,useActionState:tc,useOptimistic:function(l,t){var e=Ol();return rl!==null?Kr(e,rl,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:hc};zc.useEffectEvent=nc;function os(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:N({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var rs={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=gt(),n=ue(a);n.payload=t,e!=null&&(n.callback=e),t=se(l,n,a),t!==null&&(et(t,l,a),ka(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=gt(),n=ue(a);n.tag=1,n.payload=t,e!=null&&(n.callback=e),t=se(l,n,a),t!==null&&(et(t,l,a),ka(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=gt(),a=ue(e);a.tag=2,t!=null&&(a.callback=t),t=se(l,a,e),t!==null&&(et(t,l,e),ka(t,l,e))}};function _c(l,t,e,a,n,i,u){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,i,u):t.prototype&&t.prototype.isPureReactComponent?!Ga(e,a)||!Ga(n,i):!0}function Tc(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&rs.enqueueReplaceState(t,t.state,null)}function Ge(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=N({},e));for(var n in l)e[n]===void 0&&(e[n]=l[n])}return e}function Ac(l){Xn(l)}function Mc(l){console.error(l)}function Ec(l){Xn(l)}function ri(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function wc(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function cs(l,t,e){return e=ue(e),e.tag=3,e.payload={element:null},e.callback=function(){ri(l,t)},e}function Dc(l){return l=ue(l),l.tag=3,l}function Oc(l,t,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;l.payload=function(){return n(i)},l.callback=function(){wc(t,e,a)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(l.callback=function(){wc(t,e,a),typeof n!="function"&&(pe===null?pe=new Set([this]):pe.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function ud(l,t,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&sa(t,e,n,!0),e=ot.current,e!==null){switch(e.tag){case 31:case 13:return zt===null?zi():e.alternate===null&&Ml===0&&(Ml=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===Wn?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Hs(l,a,n)),!1;case 22:return e.flags|=65536,a===Wn?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Hs(l,a,n)),!1}throw Error(g(435,e.tag))}return Hs(l,a,n),zi(),!1}if(ll)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Ou&&(l=Error(g(422),{cause:a}),Za(yt(l,e)))):(a!==Ou&&(t=Error(g(423),{cause:a}),Za(yt(t,e))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,a=yt(a,e),n=cs(l.stateNode,a,n),Xu(l,n),Ml!==4&&(Ml=2)),!1;var i=Error(g(520),{cause:a});if(i=yt(i,e),cn===null?cn=[i]:cn.push(i),Ml!==4&&(Ml=2),t===null)return!0;a=yt(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=n&-n,e.lanes|=l,l=cs(e.stateNode,a,l),Xu(e,l),!1;case 1:if(t=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pe===null||!pe.has(i))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Dc(n),Oc(n,l,e,a),Xu(e,n),!1}e=e.return}while(e!==null);return!1}var fs=Error(g(461)),xl=!1;function Ql(l,t,e,a){t.child=l===null?Nr(t,null,e,a):qe(t,l.child,e,a)}function jc(l,t,e,a,n){e=e.render;var i=t.ref;if("ref"in a){var u={};for(var s in a)s!=="ref"&&(u[s]=a[s])}else u=a;return He(t),a=Ku(l,t,e,u,i,n),s=Ju(),l!==null&&!xl?($u(l,t,n),Qt(l,t,n)):(ll&&s&&wu(t),t.flags|=1,Ql(l,t,a,n),t.child)}function Cc(l,t,e,a,n){if(l===null){var i=e.type;return typeof i=="function"&&!Au(i)&&i.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=i,xc(l,t,i,a,n)):(l=Zn(e.type,null,a,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(i=l.child,!bs(l,n)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Ga,e(u,a)&&l.ref===t.ref)return Qt(l,t,n)}return t.flags|=1,l=Rt(i,a),l.ref=t.ref,l.return=t,t.child=l}function xc(l,t,e,a,n){if(l!==null){var i=l.memoizedProps;if(Ga(i,a)&&l.ref===t.ref)if(xl=!1,t.pendingProps=a=i,bs(l,n))(l.flags&131072)!==0&&(xl=!0);else return t.lanes=l.lanes,Qt(l,t,n)}return gs(l,t,e,a,n)}function Nc(l,t,e,a){var n=a.children,i=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,l!==null){for(a=t.child=l.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,t.child=null;return Uc(l,t,i,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&$n(t,i!==null?i.cachePool:null),i!==null?Rr(t,i):Qu(),Br(t);else return a=t.lanes=536870912,Uc(l,t,i!==null?i.baseLanes|e:e,e,a)}else i!==null?($n(t,i.cachePool),Rr(t,i),re(),t.memoizedState=null):(l!==null&&$n(t,null),Qu(),re());return Ql(l,t,n,e),t.child}function en(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(l,t,e,a,n){var i=Ru();return i=i===null?null:{parent:jl._currentValue,pool:i},t.memoizedState={baseLanes:e,cachePool:i},l!==null&&$n(t,null),Qu(),Br(t),l!==null&&sa(l,t,a,!0),t.childLanes=n,null}function ci(l,t){return t=gi({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Hc(l,t,e){return qe(t,l.child,null,e),l=ci(t,t.pendingProps),l.flags|=2,rt(t),t.memoizedState=null,l}function sd(l,t,e){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(a.mode==="hidden")return l=ci(t,a),t.lanes=536870912,en(null,l);if(Zu(t),(l=dl)?(l=$f(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:te!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},e=vr(l),e.return=t,t.child=e,Xl=t,dl=null)):l=null,l===null)throw ae(t);return t.lanes=536870912,null}return ci(t,a)}var i=l.memoizedState;if(i!==null){var u=i.dehydrated;if(Zu(t),n)if(t.flags&256)t.flags&=-257,t=Hc(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(g(558));else if(xl||sa(l,t,e,!1),n=(e&l.childLanes)!==0,xl||n){if(a=pl,a!==null&&(u=Mo(a,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ce(l,u),et(a,l,u),fs;zi(),t=Hc(l,t,e)}else l=i.treeContext,dl=_t(u.nextSibling),Xl=t,ll=!0,ee=null,St=!1,l!==null&&zr(t,l),t=ci(t,a),t.flags|=4096;return t}return l=Rt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fi(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(g(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function gs(l,t,e,a,n){return He(t),e=Ku(l,t,e,a,void 0,n),a=Ju(),l!==null&&!xl?($u(l,t,n),Qt(l,t,n)):(ll&&a&&wu(t),t.flags|=1,Ql(l,t,e,n),t.child)}function Rc(l,t,e,a,n,i){return He(t),t.updateQueue=null,e=qr(t,a,e,n),Yr(l),a=Ju(),l!==null&&!xl?($u(l,t,i),Qt(l,t,i)):(ll&&a&&wu(t),t.flags|=1,Ql(l,t,e,i),t.child)}function Bc(l,t,e,a,n){if(He(t),t.stateNode===null){var i=aa,u=e.contextType;typeof u=="object"&&u!==null&&(i=Gl(u)),i=new e(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},Yu(t),u=e.contextType,i.context=typeof u=="object"&&u!==null?Gl(u):aa,i.state=t.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(os(t,e,u,a),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&rs.enqueueReplaceState(i,i.state,null),Fa(t,a,i,n),Wa(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){i=t.stateNode;var s=t.memoizedProps,o=Ge(e,s);i.props=o;var h=i.context,S=e.contextType;u=aa,typeof S=="object"&&S!==null&&(u=Gl(S));var A=e.getDerivedStateFromProps;S=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||h!==u)&&Tc(t,i,a,u),ie=!1;var y=t.memoizedState;i.state=y,Fa(t,a,i,n),Wa(),h=t.memoizedState,s||y!==h||ie?(typeof A=="function"&&(os(t,e,A,a),h=t.memoizedState),(o=ie||_c(t,e,o,a,y,h,u))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=h),i.props=a,i.state=h,i.context=u,a=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,qu(l,t),u=t.memoizedProps,S=Ge(e,u),i.props=S,A=t.pendingProps,y=i.context,h=e.contextType,o=aa,typeof h=="object"&&h!==null&&(o=Gl(h)),s=e.getDerivedStateFromProps,(h=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||y!==o)&&Tc(t,i,a,o),ie=!1,y=t.memoizedState,i.state=y,Fa(t,a,i,n),Wa();var b=t.memoizedState;u!==A||y!==b||ie||l!==null&&l.dependencies!==null&&Kn(l.dependencies)?(typeof s=="function"&&(os(t,e,s,a),b=t.memoizedState),(S=ie||_c(t,e,S,a,y,b,o)||l!==null&&l.dependencies!==null&&Kn(l.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,b,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=b),i.props=a,i.state=b,i.context=o,a=S):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),a=!1)}return i=a,fi(l,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,l!==null&&a?(t.child=qe(t,l.child,null,n),t.child=qe(t,null,e,n)):Ql(l,t,e,n),t.memoizedState=i.state,l=t.child):l=Qt(l,t,n),l}function Yc(l,t,e,a){return Ne(),t.flags|=256,Ql(l,t,e,a),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ds(l){return{baseLanes:l,cachePool:wr()}}function ms(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=ft),l}function qc(l,t,e){var a=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=l!==null&&l.memoizedState===null?!1:(Dl.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(n?oe(t):re(),(l=dl)?(l=$f(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:te!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},e=vr(l),e.return=t,t.child=e,Xl=t,dl=null)):l=null,l===null)throw ae(t);return Fs(l)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(re(),n=t.mode,s=gi({mode:"hidden",children:s},n),a=xe(a,n,e,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=ds(e),a.childLanes=ms(l,u,e),t.memoizedState=ps,en(null,a)):(oe(t),hs(t,s))}var o=l.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)t.flags&256?(oe(t),t.flags&=-257,t=ys(l,t,e)):t.memoizedState!==null?(re(),t.child=l.child,t.flags|=128,t=null):(re(),s=a.fallback,n=t.mode,a=gi({mode:"visible",children:a.children},n),s=xe(s,n,e,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,qe(t,l.child,null,e),a=t.child,a.memoizedState=ds(e),a.childLanes=ms(l,u,e),t.memoizedState=ps,t=en(null,a));else if(oe(t),Fs(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var h=u.dgst;u=h,a=Error(g(419)),a.stack="",a.digest=u,Za({value:a,source:null,stack:null}),t=ys(l,t,e)}else if(xl||sa(l,t,e,!1),u=(e&l.childLanes)!==0,xl||u){if(u=pl,u!==null&&(a=Mo(u,e),a!==0&&a!==o.retryLane))throw o.retryLane=a,Ce(l,a),et(u,l,a),fs;Ws(s)||zi(),t=ys(l,t,e)}else Ws(s)?(t.flags|=192,t.child=l.child,t=null):(l=o.treeContext,dl=_t(s.nextSibling),Xl=t,ll=!0,ee=null,St=!1,l!==null&&zr(t,l),t=hs(t,a.children),t.flags|=4096);return t}return n?(re(),s=a.fallback,n=t.mode,o=l.child,h=o.sibling,a=Rt(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,h!==null?s=Rt(h,s):(s=xe(s,n,e,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,en(null,a),a=t.child,s=l.child.memoizedState,s===null?s=ds(e):(n=s.cachePool,n!==null?(o=jl._currentValue,n=n.parent!==o?{parent:o,pool:o}:n):n=wr(),s={baseLanes:s.baseLanes|e,cachePool:n}),a.memoizedState=s,a.childLanes=ms(l,u,e),t.memoizedState=ps,en(l.child,a)):(oe(t),e=l.child,l=e.sibling,e=Rt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(u=t.deletions,u===null?(t.deletions=[l],t.flags|=16):u.push(l)),t.child=e,t.memoizedState=null,e)}function hs(l,t){return t=gi({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function gi(l,t){return l=st(22,l,null,t),l.lanes=0,l}function ys(l,t,e){return qe(t,l.child,null,e),l=hs(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Xc(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),xu(l.return,t,e)}function vs(l,t,e,a,n,i){var u=l.memoizedState;u===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=e,u.tailMode=n,u.treeForkCount=i)}function Gc(l,t,e){var a=t.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var u=Dl.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,j(Dl,u),Ql(l,t,a,e),a=ll?La:0,!s&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Xc(l,e,t);else if(l.tag===19)Xc(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(e=t.child,n=null;e!==null;)l=e.alternate,l!==null&&li(l)===null&&(n=e),e=e.sibling;e=n,e===null?(n=t.child,t.child=null):(n=e.sibling,e.sibling=null),vs(t,!1,n,e,i,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&li(l)===null){t.child=n;break}l=n.sibling,n.sibling=e,e=n,n=l}vs(t,!0,e,null,i,a);break;case"together":vs(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),ge|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(sa(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(g(153));if(t.child!==null){for(l=t.child,e=Rt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Rt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function bs(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Kn(l)))}function od(l,t,e){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),ne(t,jl,l.memoizedState.cache),Ne();break;case 27:case 5:Da(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:ne(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zu(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(oe(t),t.flags|=128,null):(e&t.child.childLanes)!==0?qc(l,t,e):(oe(t),l=Qt(l,t,e),l!==null?l.sibling:null);oe(t);break;case 19:var n=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(sa(l,t,e,!1),a=(e&t.childLanes)!==0),n){if(a)return Gc(l,t,e);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),j(Dl,Dl.current),a)break;return null;case 22:return t.lanes=0,Nc(l,t,e,t.pendingProps);case 24:ne(t,jl,l.memoizedState.cache)}return Qt(l,t,e)}function Qc(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)xl=!0;else{if(!bs(l,e)&&(t.flags&128)===0)return xl=!1,od(l,t,e);xl=(l.flags&131072)!==0}else xl=!1,ll&&(t.flags&1048576)!==0&&Sr(t,La,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=Be(t.elementType),t.type=l,typeof l=="function")Au(l)?(a=Ge(l,a),t.tag=1,t=Bc(null,t,l,a,e)):(t.tag=0,t=gs(null,t,l,a,e));else{if(l!=null){var n=l.$$typeof;if(n===Tl){t.tag=11,t=jc(null,t,l,a,e);break l}else if(n===J){t.tag=14,t=Cc(null,t,l,a,e);break l}}throw t=xt(l)||l,Error(g(306,t,""))}}return t;case 0:return gs(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,n=Ge(a,t.pendingProps),Bc(l,t,a,n,e);case 3:l:{if(Kl(t,t.stateNode.containerInfo),l===null)throw Error(g(387));a=t.pendingProps;var i=t.memoizedState;n=i.element,qu(l,t),Fa(t,a,null,e);var u=t.memoizedState;if(a=u.cache,ne(t,jl,a),a!==i.cache&&Nu(t,[jl],e,!0),Wa(),a=u.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Yc(l,t,a,e);break l}else if(a!==n){n=yt(Error(g(424)),t),Za(n),t=Yc(l,t,a,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(dl=_t(l.firstChild),Xl=t,ll=!0,ee=null,St=!0,e=Nr(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Ne(),a===n){t=Qt(l,t,e);break l}Ql(l,t,a,e)}t=t.child}return t;case 26:return fi(l,t),l===null?(e=lg(t.type,null,t.pendingProps,null))?t.memoizedState=e:ll||(e=t.type,l=t.pendingProps,a=Di($.current).createElement(e),a[ql]=t,a[Wl]=l,Ll(a,e,l),Bl(a),t.stateNode=a):t.memoizedState=lg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Da(t),l===null&&ll&&(a=t.stateNode=Ff(t.type,t.pendingProps,$.current),Xl=t,St=!0,n=dl,ye(t.type)?(Is=n,dl=_t(a.firstChild)):dl=n),Ql(l,t,t.pendingProps.children,e),fi(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((n=a=dl)&&(a=Yd(a,t.type,t.pendingProps,St),a!==null?(t.stateNode=a,Xl=t,dl=_t(a.firstChild),St=!1,n=!0):n=!1),n||ae(t)),Da(t),n=t.type,i=t.pendingProps,u=l!==null?l.memoizedProps:null,a=i.children,Js(n,i)?a=null:u!==null&&Js(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Ku(l,t,Pp,null,null,e),vn._currentValue=n),fi(l,t),Ql(l,t,a,e),t.child;case 6:return l===null&&ll&&((l=e=dl)&&(e=qd(e,t.pendingProps,St),e!==null?(t.stateNode=e,Xl=t,dl=null,l=!0):l=!1),l||ae(t)),null;case 13:return qc(l,t,e);case 4:return Kl(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=qe(t,null,a,e):Ql(l,t,a,e),t.child;case 11:return jc(l,t,t.type,t.pendingProps,e);case 7:return Ql(l,t,t.pendingProps,e),t.child;case 8:return Ql(l,t,t.pendingProps.children,e),t.child;case 12:return Ql(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,ne(t,t.type,a.value),Ql(l,t,a.children,e),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,He(t),n=Gl(n),a=a(n),t.flags|=1,Ql(l,t,a,e),t.child;case 14:return Cc(l,t,t.type,t.pendingProps,e);case 15:return xc(l,t,t.type,t.pendingProps,e);case 19:return Gc(l,t,e);case 31:return sd(l,t,e);case 22:return Nc(l,t,e,t.pendingProps);case 24:return He(t),a=Gl(jl),l===null?(n=Ru(),n===null&&(n=pl,i=Uu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=e),n=i),t.memoizedState={parent:a,cache:n},Yu(t),ne(t,jl,n)):((l.lanes&e)!==0&&(qu(l,t),Fa(t,null,null,e),Wa()),n=l.memoizedState,i=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ne(t,jl,a)):(a=i.cache,ne(t,jl,a),a!==n.cache&&Nu(t,[jl],e,!0))),Ql(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Lt(l){l.flags|=4}function Ss(l,t,e,a,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(hf())l.flags|=8192;else throw Ye=Wn,Bu}else l.flags&=-16777217}function Lc(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!ig(t))if(hf())l.flags|=8192;else throw Ye=Wn,Bu}function pi(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?_o():536870912,l.lanes|=t,ba|=t)}function an(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function rd(l,t,e){var a=t.pendingProps;switch(Du(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(jl),wl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(ua(t)?Lt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ju())),ml(t),null;case 26:var n=t.type,i=t.memoizedState;return l===null?(Lt(t),i!==null?(ml(t),Lc(t,i)):(ml(t),Ss(t,n,null,a,e))):i?i!==l.memoizedState?(Lt(t),ml(t),Lc(t,i)):(ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&Lt(t),ml(t),Ss(t,n,l,a,e)),null;case 27:if(An(t),e=$.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Lt(t);else{if(!a){if(t.stateNode===null)throw Error(g(166));return ml(t),null}l=R.current,ua(t)?_r(t):(l=Ff(n,a,e),t.stateNode=l,Lt(t))}return ml(t),null;case 5:if(An(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Lt(t);else{if(!a){if(t.stateNode===null)throw Error(g(166));return ml(t),null}if(i=R.current,ua(t))_r(t);else{var u=Di($.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?u.createElement("select",{is:a.is}):u.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?u.createElement(n,{is:a.is}):u.createElement(n)}}i[ql]=t,i[Wl]=a;l:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break l;for(;u.sibling===null;){if(u.return===null||u.return===t)break l;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;l:switch(Ll(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&Lt(t)}}return ml(t),Ss(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&Lt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(g(166));if(l=$.current,ua(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,n=Xl,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}l[ql]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Xf(l.nodeValue,e)),l||ae(t,!0)}else l=Di(l).createTextNode(a),l[ql]=t,t.stateNode=l}return ml(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(a=ua(t),e!==null){if(l===null){if(!a)throw Error(g(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(557));l[ql]=t}else Ne(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),l=!1}else e=ju(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(rt(t),t):(rt(t),null);if((t.flags&128)!==0)throw Error(g(558))}return ml(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=ua(t),a!==null&&a.dehydrated!==null){if(l===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[ql]=t}else Ne(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),n=!1}else n=ju(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(rt(t),t):(rt(t),null)}return rt(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,l=l!==null&&l.memoizedState!==null,e&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),pi(t,t.updateQueue),ml(t),null);case 4:return wl(),l===null&&Qs(t.stateNode.containerInfo),ml(t),null;case 10:return qt(t.type),ml(t),null;case 19:if(M(Dl),a=t.memoizedState,a===null)return ml(t),null;if(n=(t.flags&128)!==0,i=a.rendering,i===null)if(n)an(a,!1);else{if(Ml!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(i=li(l),i!==null){for(t.flags|=128,an(a,!1),l=i.updateQueue,t.updateQueue=l,pi(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)yr(e,l),e=e.sibling;return j(Dl,Dl.current&1|2),ll&&Bt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&at()>vi&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304)}else{if(!n)if(l=li(i),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,pi(t,l),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ll)return ml(t),null}else 2*at()-a.renderingStartTime>vi&&e!==536870912&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(l=a.last,l!==null?l.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=at(),l.sibling=null,e=Dl.current,j(Dl,n?e&1|2:e&1),ll&&Bt(t,a.treeForkCount),l):(ml(t),null);case 22:case 23:return rt(t),Lu(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),e=t.updateQueue,e!==null&&pi(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&M(Re),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),qt(jl),ml(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function cd(l,t){switch(Du(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return qt(jl),wl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return An(t),null;case 31:if(t.memoizedState!==null){if(rt(t),t.alternate===null)throw Error(g(340));Ne()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(rt(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(g(340));Ne()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return M(Dl),null;case 4:return wl(),null;case 10:return qt(t.type),null;case 22:case 23:return rt(t),Lu(),l!==null&&M(Re),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return qt(jl),null;case 25:return null;default:return null}}function Zc(l,t){switch(Du(t),t.tag){case 3:qt(jl),wl();break;case 26:case 27:case 5:An(t);break;case 4:wl();break;case 31:t.memoizedState!==null&&rt(t);break;case 13:rt(t);break;case 19:M(Dl);break;case 10:qt(t.type);break;case 22:case 23:rt(t),Lu(),l!==null&&M(Re);break;case 24:qt(jl)}}function nn(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&l)===l){a=void 0;var i=e.create,u=e.inst;a=i(),u.destroy=a}e=e.next}while(e!==n)}}catch(s){ul(t,t.return,s)}}function ce(l,t,e){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&l)===l){var u=a.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var o=e,h=s;try{h()}catch(S){ul(n,o,S)}}}a=a.next}while(a!==i)}}catch(S){ul(t,t.return,S)}}function Vc(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Hr(t,e)}catch(a){ul(l,l.return,a)}}}function Kc(l,t,e){e.props=Ge(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){ul(l,t,a)}}function un(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(n){ul(l,t,n)}}function jt(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){ul(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){ul(l,t,n)}else e.current=null}function Jc(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){ul(l,l.return,n)}}function zs(l,t,e){try{var a=l.stateNode;xd(a,l.type,e,t),a[Wl]=t}catch(n){ul(l,l.return,n)}}function $c(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ye(l.type)||l.tag===4}function _s(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||$c(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ye(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Ts(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Ut));else if(a!==4&&(a===27&&ye(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(Ts(l,t,e),l=l.sibling;l!==null;)Ts(l,t,e),l=l.sibling}function di(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&ye(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(di(l,t,e),l=l.sibling;l!==null;)di(l,t,e),l=l.sibling}function kc(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ll(t,a,e),t[ql]=l,t[Wl]=e}catch(i){ul(l,l.return,i)}}var Zt=!1,Nl=!1,As=!1,Wc=typeof WeakSet=="function"?WeakSet:Set,Yl=null;function fd(l,t){if(l=l.containerInfo,Vs=Hi,l=or(l),yu(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break l}var u=0,s=-1,o=-1,h=0,S=0,A=l,y=null;t:for(;;){for(var b;A!==e||n!==0&&A.nodeType!==3||(s=u+n),A!==i||a!==0&&A.nodeType!==3||(o=u+a),A.nodeType===3&&(u+=A.nodeValue.length),(b=A.firstChild)!==null;)y=A,A=b;for(;;){if(A===l)break t;if(y===e&&++h===n&&(s=u),y===i&&++S===a&&(o=u),(b=A.nextSibling)!==null)break;A=y,y=A.parentNode}A=b}e=s===-1||o===-1?null:{start:s,end:o}}else e=null}e=e||{start:0,end:0}}else e=null;for(Ks={focusedElem:l,selectionRange:e},Hi=!1,Yl=t;Yl!==null;)if(t=Yl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Yl=l;else for(;Yl!==null;){switch(t=Yl,i=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)n=l[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&i!==null){l=void 0,e=t,n=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var H=Ge(e.type,n);l=a.getSnapshotBeforeUpdate(H,i),a.__reactInternalSnapshotBeforeUpdate=l}catch(X){ul(e,e.return,X)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)ks(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ks(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(g(163))}if(l=t.sibling,l!==null){l.return=t.return,Yl=l;break}Yl=t.return}}function Fc(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Kt(l,e),a&4&&nn(5,e);break;case 1:if(Kt(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(u){ul(e,e.return,u)}else{var n=Ge(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(u){ul(e,e.return,u)}}a&64&&Vc(e),a&512&&un(e,e.return);break;case 3:if(Kt(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Hr(l,t)}catch(u){ul(e,e.return,u)}}break;case 27:t===null&&a&4&&kc(e);case 26:case 5:Kt(l,e),t===null&&a&4&&Jc(e),a&512&&un(e,e.return);break;case 12:Kt(l,e);break;case 31:Kt(l,e),a&4&&lf(l,e);break;case 13:Kt(l,e),a&4&&tf(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=Sd.bind(null,e),Xd(l,e))));break;case 22:if(a=e.memoizedState!==null||Zt,!a){t=t!==null&&t.memoizedState!==null||Nl,n=Zt;var i=Nl;Zt=a,(Nl=t)&&!i?Jt(l,e,(e.subtreeFlags&8772)!==0):Kt(l,e),Zt=n,Nl=i}break;case 30:break;default:Kt(l,e)}}function Ic(l){var t=l.alternate;t!==null&&(l.alternate=null,Ic(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&lu(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var hl=null,Il=!1;function Vt(l,t,e){for(e=e.child;e!==null;)Pc(l,t,e),e=e.sibling}function Pc(l,t,e){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Oa,e)}catch{}switch(e.tag){case 26:Nl||jt(e,t),Vt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Nl||jt(e,t);var a=hl,n=Il;ye(e.type)&&(hl=e.stateNode,Il=!1),Vt(l,t,e),mn(e.stateNode),hl=a,Il=n;break;case 5:Nl||jt(e,t);case 6:if(a=hl,n=Il,hl=null,Vt(l,t,e),hl=a,Il=n,hl!==null)if(Il)try{(hl.nodeType===9?hl.body:hl.nodeName==="HTML"?hl.ownerDocument.body:hl).removeChild(e.stateNode)}catch(i){ul(e,t,i)}else try{hl.removeChild(e.stateNode)}catch(i){ul(e,t,i)}break;case 18:hl!==null&&(Il?(l=hl,Kf(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),wa(l)):Kf(hl,e.stateNode));break;case 4:a=hl,n=Il,hl=e.stateNode.containerInfo,Il=!0,Vt(l,t,e),hl=a,Il=n;break;case 0:case 11:case 14:case 15:ce(2,e,t),Nl||ce(4,e,t),Vt(l,t,e);break;case 1:Nl||(jt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Kc(e,t,a)),Vt(l,t,e);break;case 21:Vt(l,t,e);break;case 22:Nl=(a=Nl)||e.memoizedState!==null,Vt(l,t,e),Nl=a;break;default:Vt(l,t,e)}}function lf(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{wa(l)}catch(e){ul(t,t.return,e)}}}function tf(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{wa(l)}catch(e){ul(t,t.return,e)}}function gd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wc),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wc),t;default:throw Error(g(435,l.tag))}}function mi(l,t){var e=gd(l);t.forEach(function(a){if(!e.has(a)){e.add(a);var n=zd.bind(null,l,a);a.then(n,n)}})}function Pl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],i=l,u=t,s=u;l:for(;s!==null;){switch(s.tag){case 27:if(ye(s.type)){hl=s.stateNode,Il=!1;break l}break;case 5:hl=s.stateNode,Il=!1;break l;case 3:case 4:hl=s.stateNode.containerInfo,Il=!0;break l}s=s.return}if(hl===null)throw Error(g(160));Pc(i,u,n),hl=null,Il=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ef(t,l),t=t.sibling}var Et=null;function ef(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),a&4&&(ce(3,l,l.return),nn(3,l),ce(5,l,l.return));break;case 1:Pl(t,l),lt(l),a&512&&(Nl||e===null||jt(e,e.return)),a&64&&Zt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=Et;if(Pl(t,l),lt(l),a&512&&(Nl||e===null||jt(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[xa]||i[ql]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Ll(i,a,e),i[ql]=l,Bl(i),a=i;break l;case"link":var u=ag("link","href",n).get(a+(e.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(a),Ll(i,a,e),n.head.appendChild(i);break;case"meta":if(u=ag("meta","content",n).get(a+(e.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(s,1);break t}}i=n.createElement(a),Ll(i,a,e),n.head.appendChild(i);break;default:throw Error(g(468,a))}i[ql]=l,Bl(i),a=i}l.stateNode=a}else ng(n,l.type,l.stateNode);else l.stateNode=eg(n,a,l.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?ng(n,l.type,l.stateNode):eg(n,a,l.memoizedProps)):a===null&&l.stateNode!==null&&zs(l,l.memoizedProps,e.memoizedProps)}break;case 27:Pl(t,l),lt(l),a&512&&(Nl||e===null||jt(e,e.return)),e!==null&&a&4&&zs(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Pl(t,l),lt(l),a&512&&(Nl||e===null||jt(e,e.return)),l.flags&32){n=l.stateNode;try{We(n,"")}catch(H){ul(l,l.return,H)}}a&4&&l.stateNode!=null&&(n=l.memoizedProps,zs(l,n,e!==null?e.memoizedProps:n)),a&1024&&(As=!0);break;case 6:if(Pl(t,l),lt(l),a&4){if(l.stateNode===null)throw Error(g(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(H){ul(l,l.return,H)}}break;case 3:if(Ci=null,n=Et,Et=Oi(t.containerInfo),Pl(t,l),Et=n,lt(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{wa(t.containerInfo)}catch(H){ul(l,l.return,H)}As&&(As=!1,af(l));break;case 4:a=Et,Et=Oi(l.stateNode.containerInfo),Pl(t,l),lt(l),Et=a;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,mi(l,a)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(yi=at()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,mi(l,a)));break;case 22:n=l.memoizedState!==null;var o=e!==null&&e.memoizedState!==null,h=Zt,S=Nl;if(Zt=h||n,Nl=S||o,Pl(t,l),Nl=S,Zt=h,lt(l),a&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(e===null||o||Zt||Nl||Qe(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){o=e=t;try{if(i=o.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var A=o.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(H){ul(o,o.return,H)}}}else if(t.tag===6){if(e===null){o=t;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(H){ul(o,o.return,H)}}}else if(t.tag===18){if(e===null){o=t;try{var b=o.stateNode;n?Jf(b,!0):Jf(o.stateNode,!1)}catch(H){ul(o,o.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,mi(l,e))));break;case 19:Pl(t,l),lt(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,mi(l,a)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if($c(a)){e=a;break}a=a.return}if(e==null)throw Error(g(160));switch(e.tag){case 27:var n=e.stateNode,i=_s(l);di(l,i,n);break;case 5:var u=e.stateNode;e.flags&32&&(We(u,""),e.flags&=-33);var s=_s(l);di(l,s,u);break;case 3:case 4:var o=e.stateNode.containerInfo,h=_s(l);Ts(l,h,o);break;default:throw Error(g(161))}}catch(S){ul(l,l.return,S)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function af(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;af(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Kt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fc(l,t.alternate,t),t=t.sibling}function Qe(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ce(4,t,t.return),Qe(t);break;case 1:jt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Kc(t,t.return,e),Qe(t);break;case 27:mn(t.stateNode);case 26:case 5:jt(t,t.return),Qe(t);break;case 22:t.memoizedState===null&&Qe(t);break;case 30:Qe(t);break;default:Qe(t)}l=l.sibling}}function Jt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=l,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Jt(n,i,e),nn(4,i);break;case 1:if(Jt(n,i,e),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){ul(a,a.return,h)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)Ur(o[n],s)}catch(h){ul(a,a.return,h)}}e&&u&64&&Vc(i),un(i,i.return);break;case 27:kc(i);case 26:case 5:Jt(n,i,e),e&&a===null&&u&4&&Jc(i),un(i,i.return);break;case 12:Jt(n,i,e);break;case 31:Jt(n,i,e),e&&u&4&&lf(n,i);break;case 13:Jt(n,i,e),e&&u&4&&tf(n,i);break;case 22:i.memoizedState===null&&Jt(n,i,e),un(i,i.return);break;case 30:break;default:Jt(n,i,e)}t=t.sibling}}function Ms(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Va(e))}function Es(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Va(l))}function wt(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nf(l,t,e,a),t=t.sibling}function nf(l,t,e,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:wt(l,t,e,a),n&2048&&nn(9,t);break;case 1:wt(l,t,e,a);break;case 3:wt(l,t,e,a),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Va(l)));break;case 12:if(n&2048){wt(l,t,e,a),l=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(o){ul(t,t.return,o)}}else wt(l,t,e,a);break;case 31:wt(l,t,e,a);break;case 13:wt(l,t,e,a);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?wt(l,t,e,a):sn(l,t):i._visibility&2?wt(l,t,e,a):(i._visibility|=2,ha(l,t,e,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ms(u,t);break;case 24:wt(l,t,e,a),n&2048&&Es(t.alternate,t);break;default:wt(l,t,e,a)}}function ha(l,t,e,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=l,u=t,s=e,o=a,h=u.flags;switch(u.tag){case 0:case 11:case 15:ha(i,u,s,o,n),nn(8,u);break;case 23:break;case 22:var S=u.stateNode;u.memoizedState!==null?S._visibility&2?ha(i,u,s,o,n):sn(i,u):(S._visibility|=2,ha(i,u,s,o,n)),n&&h&2048&&Ms(u.alternate,u);break;case 24:ha(i,u,s,o,n),n&&h&2048&&Es(u.alternate,u);break;default:ha(i,u,s,o,n)}t=t.sibling}}function sn(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,n=a.flags;switch(a.tag){case 22:sn(e,a),n&2048&&Ms(a.alternate,a);break;case 24:sn(e,a),n&2048&&Es(a.alternate,a);break;default:sn(e,a)}t=t.sibling}}var on=8192;function ya(l,t,e){if(l.subtreeFlags&on)for(l=l.child;l!==null;)uf(l,t,e),l=l.sibling}function uf(l,t,e){switch(l.tag){case 26:ya(l,t,e),l.flags&on&&l.memoizedState!==null&&Id(e,Et,l.memoizedState,l.memoizedProps);break;case 5:ya(l,t,e);break;case 3:case 4:var a=Et;Et=Oi(l.stateNode.containerInfo),ya(l,t,e),Et=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=on,on=16777216,ya(l,t,e),on=a):ya(l,t,e));break;default:ya(l,t,e)}}function sf(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function rn(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Yl=a,rf(a,l)}sf(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)of(l),l=l.sibling}function of(l){switch(l.tag){case 0:case 11:case 15:rn(l),l.flags&2048&&ce(9,l,l.return);break;case 3:rn(l);break;case 12:rn(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,hi(l)):rn(l);break;default:rn(l)}}function hi(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Yl=a,rf(a,l)}sf(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ce(8,t,t.return),hi(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,hi(t));break;default:hi(t)}l=l.sibling}}function rf(l,t){for(;Yl!==null;){var e=Yl;switch(e.tag){case 0:case 11:case 15:ce(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Yl=a;else l:for(e=l;Yl!==null;){a=Yl;var n=a.sibling,i=a.return;if(Ic(a),a===e){Yl=null;break l}if(n!==null){n.return=i,Yl=n;break l}Yl=i}}}var pd={getCacheForType:function(l){var t=Gl(jl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Gl(jl).controller.signal}},dd=typeof WeakMap=="function"?WeakMap:Map,al=0,pl=null,k=null,F=0,il=0,ct=null,fe=!1,va=!1,ws=!1,$t=0,Ml=0,ge=0,Le=0,Ds=0,ft=0,ba=0,cn=null,tt=null,Os=!1,yi=0,cf=0,vi=1/0,bi=null,pe=null,Hl=0,de=null,Sa=null,kt=0,js=0,Cs=null,ff=null,fn=0,xs=null;function gt(){return(al&2)!==0&&F!==0?F&-F:z.T!==null?Ys():Eo()}function gf(){if(ft===0)if((F&536870912)===0||ll){var l=wn;wn<<=1,(wn&3932160)===0&&(wn=262144),ft=l}else ft=536870912;return l=ot.current,l!==null&&(l.flags|=32),ft}function et(l,t,e){(l===pl&&(il===2||il===9)||l.cancelPendingCommit!==null)&&(za(l,0),me(l,F,ft,!1)),Ca(l,e),((al&2)===0||l!==pl)&&(l===pl&&((al&2)===0&&(Le|=e),Ml===4&&me(l,F,ft,!1)),Ct(l))}function pf(l,t,e){if((al&6)!==0)throw Error(g(327));var a=!e&&(t&127)===0&&(t&l.expiredLanes)===0||ja(l,t),n=a?yd(l,t):Us(l,t,!0),i=a;do{if(n===0){va&&!a&&me(l,t,0,!1);break}else{if(e=l.current.alternate,i&&!md(e)){n=Us(l,t,!1),i=!1;continue}if(n===2){if(i=t,l.errorRecoveryDisabledLanes&i)var u=0;else u=l.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;l:{var s=l;n=cn;var o=s.current.memoizedState.isDehydrated;if(o&&(za(s,u).flags|=256),u=Us(s,u,!1),u!==2){if(ws&&!o){s.errorRecoveryDisabledLanes|=i,Le|=i,n=4;break l}i=tt,tt=n,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){za(l,0),me(l,t,0,!0);break}l:{switch(a=l,i=n,i){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:me(a,t,ft,!fe);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=yi+300-at(),10<n)){if(me(a,t,ft,!fe),On(a,0,!0)!==0)break l;kt=t,a.timeoutHandle=Zf(df.bind(null,a,e,tt,bi,Os,t,ft,Le,ba,fe,i,"Throttled",-0,0),n);break l}df(a,e,tt,bi,Os,t,ft,Le,ba,fe,i,null,-0,0)}}break}while(!0);Ct(l)}function df(l,t,e,a,n,i,u,s,o,h,S,A,y,b){if(l.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},uf(t,i,A);var H=(i&62914560)===i?yi-at():(i&4194048)===i?cf-at():0;if(H=Pd(A,H),H!==null){kt=i,l.cancelPendingCommit=H(_f.bind(null,l,t,i,e,a,n,u,s,o,S,A,null,y,b)),me(l,i,u,!h);return}}_f(l,t,i,e,a,n,u,s,o)}function md(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function me(l,t,e,a){t&=~Ds,t&=~Le,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var n=t;0<n;){var i=31-it(n),u=1<<i;a[i]=-1,n&=~u}e!==0&&To(l,e,t)}function Si(){return(al&6)===0?(gn(0),!1):!0}function Ns(){if(k!==null){if(il===0)var l=k.return;else l=k,Yt=Ue=null,ku(l),fa=null,Ja=0,l=k;for(;l!==null;)Zc(l.alternate,l),l=l.return;k=null}}function za(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,Hd(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),kt=0,Ns(),pl=l,k=e=Rt(l.current,null),F=t,il=0,ct=null,fe=!1,va=ja(l,t),ws=!1,ba=ft=Ds=Le=ge=Ml=0,tt=cn=null,Os=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var n=31-it(a),i=1<<n;t|=l[n],a&=~i}return $t=t,Gn(),e}function mf(l,t){Z=null,z.H=tn,t===ca||t===kn?(t=jr(),il=3):t===Bu?(t=jr(),il=4):il=t===fs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,k===null&&(Ml=1,ri(l,yt(t,l.current)))}function hf(){var l=ot.current;return l===null?!0:(F&4194048)===F?zt===null:(F&62914560)===F||(F&536870912)!==0?l===zt:!1}function yf(){var l=z.H;return z.H=tn,l===null?tn:l}function vf(){var l=z.A;return z.A=pd,l}function zi(){Ml=4,fe||(F&4194048)!==F&&ot.current!==null||(va=!0),(ge&134217727)===0&&(Le&134217727)===0||pl===null||me(pl,F,ft,!1)}function Us(l,t,e){var a=al;al|=2;var n=yf(),i=vf();(pl!==l||F!==t)&&(bi=null,za(l,t)),t=!1;var u=Ml;l:do try{if(il!==0&&k!==null){var s=k,o=ct;switch(il){case 8:Ns(),u=6;break l;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var h=il;if(il=0,ct=null,_a(l,s,o,h),e&&va){u=0;break l}break;default:h=il,il=0,ct=null,_a(l,s,o,h)}}hd(),u=Ml;break}catch(S){mf(l,S)}while(!0);return t&&l.shellSuspendCounter++,Yt=Ue=null,al=a,z.H=n,z.A=i,k===null&&(pl=null,F=0,Gn()),u}function hd(){for(;k!==null;)bf(k)}function yd(l,t){var e=al;al|=2;var a=yf(),n=vf();pl!==l||F!==t?(bi=null,vi=at()+500,za(l,t)):va=ja(l,t);l:do try{if(il!==0&&k!==null){t=k;var i=ct;t:switch(il){case 1:il=0,ct=null,_a(l,t,i,1);break;case 2:case 9:if(Dr(i)){il=0,ct=null,Sf(t);break}t=function(){il!==2&&il!==9||pl!==l||(il=7),Ct(l)},i.then(t,t);break l;case 3:il=7;break l;case 4:il=5;break l;case 7:Dr(i)?(il=0,ct=null,Sf(t)):(il=0,ct=null,_a(l,t,i,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var s=k;if(u?ig(u):s.stateNode.complete){il=0,ct=null;var o=s.sibling;if(o!==null)k=o;else{var h=s.return;h!==null?(k=h,_i(h)):k=null}break t}}il=0,ct=null,_a(l,t,i,5);break;case 6:il=0,ct=null,_a(l,t,i,6);break;case 8:Ns(),Ml=6;break l;default:throw Error(g(462))}}vd();break}catch(S){mf(l,S)}while(!0);return Yt=Ue=null,z.H=a,z.A=n,al=e,k!==null?0:(pl=null,F=0,Gn(),Ml)}function vd(){for(;k!==null&&!Gg();)bf(k)}function bf(l){var t=Qc(l.alternate,l,$t);l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function Sf(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Rc(e,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Rc(e,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:ku(t);default:Zc(e,t),t=k=yr(t,$t),t=Qc(e,t,$t)}l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function _a(l,t,e,a){Yt=Ue=null,ku(t),fa=null,Ja=0;var n=t.return;try{if(ud(l,n,t,e,F)){Ml=1,ri(l,yt(e,l.current)),k=null;return}}catch(i){if(n!==null)throw k=n,i;Ml=1,ri(l,yt(e,l.current)),k=null;return}t.flags&32768?(ll||a===1?l=!0:va||(F&536870912)!==0?l=!1:(fe=l=!0,(a===2||a===9||a===3||a===6)&&(a=ot.current,a!==null&&a.tag===13&&(a.flags|=16384))),zf(t,l)):_i(t)}function _i(l){var t=l;do{if((t.flags&32768)!==0){zf(t,fe);return}l=t.return;var e=rd(t.alternate,t,$t);if(e!==null){k=e;return}if(t=t.sibling,t!==null){k=t;return}k=t=l}while(t!==null);Ml===0&&(Ml=5)}function zf(l,t){do{var e=cd(l.alternate,l);if(e!==null){e.flags&=32767,k=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){k=l;return}k=l=e}while(l!==null);Ml=6,k=null}function _f(l,t,e,a,n,i,u,s,o){l.cancelPendingCommit=null;do Ti();while(Hl!==0);if((al&6)!==0)throw Error(g(327));if(t!==null){if(t===l.current)throw Error(g(177));if(i=t.lanes|t.childLanes,i|=_u,Fg(l,e,i,u,s,o),l===pl&&(k=pl=null,F=0),Sa=t,de=l,kt=e,js=i,Cs=n,ff=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,_d(Mn,function(){return wf(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=z.T,z.T=null,n=D.p,D.p=2,u=al,al|=4;try{fd(l,t,e)}finally{al=u,D.p=n,z.T=a}}Hl=1,Tf(),Af(),Mf()}}function Tf(){if(Hl===1){Hl=0;var l=de,t=Sa,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=z.T,z.T=null;var a=D.p;D.p=2;var n=al;al|=4;try{ef(t,l);var i=Ks,u=or(l.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&sr(s.ownerDocument.documentElement,s)){if(o!==null&&yu(s)){var h=o.start,S=o.end;if(S===void 0&&(S=h),"selectionStart"in s)s.selectionStart=h,s.selectionEnd=Math.min(S,s.value.length);else{var A=s.ownerDocument||document,y=A&&A.defaultView||window;if(y.getSelection){var b=y.getSelection(),H=s.textContent.length,X=Math.min(o.start,H),fl=o.end===void 0?X:Math.min(o.end,H);!b.extend&&X>fl&&(u=fl,fl=X,X=u);var f=ur(s,X),r=ur(s,fl);if(f&&r&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==r.node||b.focusOffset!==r.offset)){var m=A.createRange();m.setStart(f.node,f.offset),b.removeAllRanges(),X>fl?(b.addRange(m),b.extend(r.node,r.offset)):(m.setEnd(r.node,r.offset),b.addRange(m))}}}}for(A=[],b=s;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<A.length;s++){var _=A[s];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Hi=!!Vs,Ks=Vs=null}finally{al=n,D.p=a,z.T=e}}l.current=t,Hl=2}}function Af(){if(Hl===2){Hl=0;var l=de,t=Sa,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=z.T,z.T=null;var a=D.p;D.p=2;var n=al;al|=4;try{Fc(l,t.alternate,t)}finally{al=n,D.p=a,z.T=e}}Hl=3}}function Mf(){if(Hl===4||Hl===3){Hl=0,Qg();var l=de,t=Sa,e=kt,a=ff;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Hl=5:(Hl=0,Sa=de=null,Ef(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(pe=null),Ii(e),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Oa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=z.T,n=D.p,D.p=2,z.T=null;try{for(var i=l.onRecoverableError,u=0;u<a.length;u++){var s=a[u];i(s.value,{componentStack:s.stack})}}finally{z.T=t,D.p=n}}(kt&3)!==0&&Ti(),Ct(l),n=l.pendingLanes,(e&261930)!==0&&(n&42)!==0?l===xs?fn++:(fn=0,xs=l):fn=0,gn(0)}}function Ef(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Va(t)))}function Ti(){return Tf(),Af(),Mf(),wf()}function wf(){if(Hl!==5)return!1;var l=de,t=js;js=0;var e=Ii(kt),a=z.T,n=D.p;try{D.p=32>e?32:e,z.T=null,e=Cs,Cs=null;var i=de,u=kt;if(Hl=0,Sa=de=null,kt=0,(al&6)!==0)throw Error(g(331));var s=al;if(al|=4,of(i.current),nf(i,i.current,u,e),al=s,gn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Oa,i)}catch{}return!0}finally{D.p=n,z.T=a,Ef(l,t)}}function Df(l,t,e){t=yt(e,t),t=cs(l.stateNode,t,2),l=se(l,t,2),l!==null&&(Ca(l,2),Ct(l))}function ul(l,t,e){if(l.tag===3)Df(l,l,e);else for(;t!==null;){if(t.tag===3){Df(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(pe===null||!pe.has(a))){l=yt(e,l),e=Dc(2),a=se(t,e,2),a!==null&&(Oc(e,a,t,l),Ca(a,2),Ct(a));break}}t=t.return}}function Hs(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new dd;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(e)||(ws=!0,n.add(e),l=bd.bind(null,l,t,e),t.then(l,l))}function bd(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,pl===l&&(F&e)===e&&(Ml===4||Ml===3&&(F&62914560)===F&&300>at()-yi?(al&2)===0&&za(l,0):Ds|=e,ba===F&&(ba=0)),Ct(l)}function Of(l,t){t===0&&(t=_o()),l=Ce(l,t),l!==null&&(Ca(l,t),Ct(l))}function Sd(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),Of(l,e)}function zd(l,t){var e=0;switch(l.tag){case 31:case 13:var a=l.stateNode,n=l.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(g(314))}a!==null&&a.delete(t),Of(l,e)}function _d(l,t){return $i(l,t)}var Ai=null,Ta=null,Rs=!1,Mi=!1,Bs=!1,he=0;function Ct(l){l!==Ta&&l.next===null&&(Ta===null?Ai=Ta=l:Ta=Ta.next=l),Mi=!0,Rs||(Rs=!0,Ad())}function gn(l,t){if(!Bs&&Mi){Bs=!0;do for(var e=!1,a=Ai;a!==null;){if(l!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var u=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-it(42|l)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,Nf(a,i))}else i=F,i=On(a,a===pl?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||ja(a,i)||(e=!0,Nf(a,i));a=a.next}while(e);Bs=!1}}function Td(){jf()}function jf(){Mi=Rs=!1;var l=0;he!==0&&Ud()&&(l=he);for(var t=at(),e=null,a=Ai;a!==null;){var n=a.next,i=Cf(a,t);i===0?(a.next=null,e===null?Ai=n:e.next=n,n===null&&(Ta=e)):(e=a,(l!==0||(i&3)!==0)&&(Mi=!0)),a=n}Hl!==0&&Hl!==5||gn(l),he!==0&&(he=0)}function Cf(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,n=l.expirationTimes,i=l.pendingLanes&-62914561;0<i;){var u=31-it(i),s=1<<u,o=n[u];o===-1?((s&e)===0||(s&a)!==0)&&(n[u]=Wg(s,t)):o<=t&&(l.expiredLanes|=s),i&=~s}if(t=pl,e=F,e=On(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(il===2||il===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&ki(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||ja(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&ki(a),Ii(e)){case 2:case 8:e=So;break;case 32:e=Mn;break;case 268435456:e=zo;break;default:e=Mn}return a=xf.bind(null,l),e=$i(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&ki(a),l.callbackPriority=2,l.callbackNode=null,2}function xf(l,t){if(Hl!==0&&Hl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(Ti()&&l.callbackNode!==e)return null;var a=F;return a=On(l,l===pl?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(pf(l,a,t),Cf(l,at()),l.callbackNode!=null&&l.callbackNode===e?xf.bind(null,l):null)}function Nf(l,t){if(Ti())return null;pf(l,t,!0)}function Ad(){Rd(function(){(al&6)!==0?$i(bo,Td):jf()})}function Ys(){if(he===0){var l=oa;l===0&&(l=En,En<<=1,(En&261888)===0&&(En=256)),he=l}return he}function Uf(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Nn(""+l)}function Hf(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function Md(l,t,e,a,n){if(t==="submit"&&e&&e.stateNode===n){var i=Uf((n[Wl]||null).action),u=a.submitter;u&&(t=(t=u[Wl]||null)?Uf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Bn("action","action",null,a,n);l.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(he!==0){var o=u?Hf(n,u):new FormData(n);ns(e,{pending:!0,data:o,method:n.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?Hf(n,u):new FormData(n),ns(e,{pending:!0,data:o,method:n.method,action:i},i,o))},currentTarget:n}]})}}for(var qs=0;qs<zu.length;qs++){var Xs=zu[qs],Ed=Xs.toLowerCase(),wd=Xs[0].toUpperCase()+Xs.slice(1);Mt(Ed,"on"+wd)}Mt(fr,"onAnimationEnd"),Mt(gr,"onAnimationIteration"),Mt(pr,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Lp,"onTransitionRun"),Mt(Zp,"onTransitionStart"),Mt(Vp,"onTransitionCancel"),Mt(dr,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),we("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),we("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),we("onBeforeInput",["compositionend","keypress","textInput","paste"]),we("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function Rf(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],n=a.event;a=a.listeners;l:{var i=void 0;if(t)for(var u=a.length-1;0<=u;u--){var s=a[u],o=s.instance,h=s.currentTarget;if(s=s.listener,o!==i&&n.isPropagationStopped())break l;i=s,n.currentTarget=h;try{i(n)}catch(S){Xn(S)}n.currentTarget=null,i=o}else for(u=0;u<a.length;u++){if(s=a[u],o=s.instance,h=s.currentTarget,s=s.listener,o!==i&&n.isPropagationStopped())break l;i=s,n.currentTarget=h;try{i(n)}catch(S){Xn(S)}n.currentTarget=null,i=o}}}}function W(l,t){var e=t[Pi];e===void 0&&(e=t[Pi]=new Set);var a=l+"__bubble";e.has(a)||(Bf(t,l,2,!1),e.add(a))}function Gs(l,t,e){var a=0;t&&(a|=4),Bf(e,l,a,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Qs(l){if(!l[Ei]){l[Ei]=!0,Oo.forEach(function(e){e!=="selectionchange"&&(Dd.has(e)||Gs(e,!1,l),Gs(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,Gs("selectionchange",!1,t))}}function Bf(l,t,e,a){switch(gg(t)){case 2:var n=em;break;case 8:n=am;break;default:n=ao}e=n.bind(null,t,e,l),n=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?l.addEventListener(t,e,{capture:!0,passive:n}):l.addEventListener(t,e,!0):n!==void 0?l.addEventListener(t,e,{passive:n}):l.addEventListener(t,e,!1)}function Ls(l,t,e,a,n){var i=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var s=a.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=a.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Ve(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){a=i=u;continue l}s=s.parentNode}}a=a.return}Go(function(){var h=i,S=uu(e),A=[];l:{var y=mr.get(l);if(y!==void 0){var b=Bn,H=l;switch(l){case"keypress":if(Hn(e)===0)break l;case"keydown":case"keyup":b=zp;break;case"focusin":H="focus",b=gu;break;case"focusout":H="blur",b=gu;break;case"beforeblur":case"afterblur":b=gu;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Zo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ap;break;case fr:case gr:case pr:b=gp;break;case dr:b=Ep;break;case"scroll":case"scrollend":b=sp;break;case"wheel":b=Dp;break;case"copy":case"cut":case"paste":b=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ko;break;case"toggle":case"beforetoggle":b=jp}var X=(t&4)!==0,fl=!X&&(l==="scroll"||l==="scrollend"),f=X?y!==null?y+"Capture":null:y;X=[];for(var r=h,m;r!==null;){var _=r;if(m=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||m===null||f===null||(_=Ua(r,f),_!=null&&X.push(dn(r,_,m))),fl)break;r=r.return}0<X.length&&(y=new b(y,H,null,e,S),A.push({event:y,listeners:X}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",b=l==="mouseout"||l==="pointerout",y&&e!==iu&&(H=e.relatedTarget||e.fromElement)&&(Ve(H)||H[Ze]))break l;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(H=e.relatedTarget||e.toElement,b=h,H=H?Ve(H):null,H!==null&&(fl=x(H),X=H.tag,H!==fl||X!==5&&X!==27&&X!==6)&&(H=null)):(b=null,H=h),b!==H)){if(X=Zo,_="onMouseLeave",f="onMouseEnter",r="mouse",(l==="pointerout"||l==="pointerover")&&(X=Ko,_="onPointerLeave",f="onPointerEnter",r="pointer"),fl=b==null?y:Na(b),m=H==null?y:Na(H),y=new X(_,r+"leave",b,e,S),y.target=fl,y.relatedTarget=m,_=null,Ve(S)===h&&(X=new X(f,r+"enter",H,e,S),X.target=m,X.relatedTarget=fl,_=X),fl=_,b&&H)t:{for(X=Od,f=b,r=H,m=0,_=f;_;_=X(_))m++;_=0;for(var q=r;q;q=X(q))_++;for(;0<m-_;)f=X(f),m--;for(;0<_-m;)r=X(r),_--;for(;m--;){if(f===r||r!==null&&f===r.alternate){X=f;break t}f=X(f),r=X(r)}X=null}else X=null;b!==null&&Yf(A,y,b,X,!1),H!==null&&fl!==null&&Yf(A,fl,H,X,!0)}}l:{if(y=h?Na(h):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var tl=lr;else if(Io(y))if(tr)tl=Xp;else{tl=Yp;var B=Bp}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&nu(h.elementType)&&(tl=lr):tl=qp;if(tl&&(tl=tl(l,h))){Po(A,tl,e,S);break l}B&&B(l,y,h),l==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&au(y,"number",y.value)}switch(B=h?Na(h):window,l){case"focusin":(Io(B)||B.contentEditable==="true")&&(la=B,vu=h,Qa=null);break;case"focusout":Qa=vu=la=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,rr(A,e,S);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":rr(A,e,S)}var V;if(du)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pe?Wo(l,e)&&(I="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(I="onCompositionStart");I&&(Jo&&e.locale!=="ko"&&(Pe||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pe&&(V=Qo()):(le=S,ru="value"in le?le.value:le.textContent,Pe=!0)),B=wi(h,I),0<B.length&&(I=new Vo(I,l,null,e,S),A.push({event:I,listeners:B}),V?I.data=V:(V=Fo(e),V!==null&&(I.data=V)))),(V=xp?Np(l,e):Up(l,e))&&(I=wi(h,"onBeforeInput"),0<I.length&&(B=new Vo("onBeforeInput","beforeinput",null,e,S),A.push({event:B,listeners:I}),B.data=V)),Md(A,l,h,e,S)}Rf(A,t)})}function dn(l,t,e){return{instance:l,listener:t,currentTarget:e}}function wi(l,t){for(var e=t+"Capture",a=[];l!==null;){var n=l,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ua(l,e),n!=null&&a.unshift(dn(l,n,i)),n=Ua(l,t),n!=null&&a.push(dn(l,n,i))),l.tag===3)return a;l=l.return}return[]}function Od(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Yf(l,t,e,a,n){for(var i=t._reactName,u=[];e!==null&&e!==a;){var s=e,o=s.alternate,h=s.stateNode;if(s=s.tag,o!==null&&o===a)break;s!==5&&s!==26&&s!==27||h===null||(o=h,n?(h=Ua(e,i),h!=null&&u.unshift(dn(e,h,o))):n||(h=Ua(e,i),h!=null&&u.push(dn(e,h,o)))),e=e.return}u.length!==0&&l.push({event:t,listeners:u})}var jd=/\r\n?/g,Cd=/\u0000|\uFFFD/g;function qf(l){return(typeof l=="string"?l:""+l).replace(jd,`
`).replace(Cd,"")}function Xf(l,t){return t=qf(t),qf(l)===t}function cl(l,t,e,a,n,i){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||We(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&We(l,""+a);break;case"className":Cn(l,"class",a);break;case"tabIndex":Cn(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(l,e,a);break;case"style":qo(l,a,i);break;case"data":if(t!=="object"){Cn(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Nn(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(t!=="input"&&cl(l,t,"name",n.name,n,null),cl(l,t,"formEncType",n.formEncType,n,null),cl(l,t,"formMethod",n.formMethod,n,null),cl(l,t,"formTarget",n.formTarget,n,null)):(cl(l,t,"encType",n.encType,n,null),cl(l,t,"method",n.method,n,null),cl(l,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=Nn(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=Ut);break;case"onScroll":a!=null&&W("scroll",l);break;case"onScrollEnd":a!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=Nn(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":W("beforetoggle",l),W("toggle",l),jn(l,"popover",a);break;case"xlinkActuate":Nt(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Nt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Nt(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Nt(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Nt(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Nt(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":jn(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=ip.get(e)||e,jn(l,e,a))}}function Zs(l,t,e,a,n,i){switch(e){case"style":qo(l,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=e}}break;case"children":typeof a=="string"?We(l,a):(typeof a=="number"||typeof a=="bigint")&&We(l,""+a);break;case"onScroll":a!=null&&W("scroll",l);break;case"onScrollEnd":a!=null&&W("scrollend",l);break;case"onClick":a!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jo.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),t=e.slice(2,n?e.length-7:void 0),i=l[Wl]||null,i=i!=null?i[e]:null,typeof i=="function"&&l.removeEventListener(t,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,n);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):jn(l,e,a)}}}function Ll(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var a=!1,n=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:cl(l,t,i,u,e,null)}}n&&cl(l,t,"srcSet",e.srcSet,e,null),a&&cl(l,t,"src",e.src,e,null);return;case"input":W("invalid",l);var s=i=u=n=null,o=null,h=null;for(a in e)if(e.hasOwnProperty(a)){var S=e[a];if(S!=null)switch(a){case"name":n=S;break;case"type":u=S;break;case"checked":o=S;break;case"defaultChecked":h=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(g(137,t));break;default:cl(l,t,a,S,e,null)}}Ho(l,i,s,o,h,u,n,!1);return;case"select":W("invalid",l),a=u=i=null;for(n in e)if(e.hasOwnProperty(n)&&(s=e[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":a=s;default:cl(l,t,n,s,e,null)}t=i,e=u,l.multiple=!!a,t!=null?ke(l,!!a,t,!1):e!=null&&ke(l,!!a,e,!0);return;case"textarea":W("invalid",l),i=n=a=null;for(u in e)if(e.hasOwnProperty(u)&&(s=e[u],s!=null))switch(u){case"value":a=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(g(91));break;default:cl(l,t,u,s,e,null)}Bo(l,a,n,i);return;case"option":for(o in e)if(e.hasOwnProperty(o)&&(a=e[o],a!=null))switch(o){case"selected":l.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:cl(l,t,o,a,e,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(a=0;a<pn.length;a++)W(pn[a],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in e)if(e.hasOwnProperty(h)&&(a=e[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:cl(l,t,h,a,e,null)}return;default:if(nu(t)){for(S in e)e.hasOwnProperty(S)&&(a=e[S],a!==void 0&&Zs(l,t,S,a,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(a=e[s],a!=null&&cl(l,t,s,a,e,null))}function xd(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,o=null,h=null,S=null;for(b in e){var A=e[b];if(e.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=A;default:a.hasOwnProperty(b)||cl(l,t,b,null,a,A)}}for(var y in a){var b=a[y];if(A=e[y],a.hasOwnProperty(y)&&(b!=null||A!=null))switch(y){case"type":i=b;break;case"name":n=b;break;case"checked":h=b;break;case"defaultChecked":S=b;break;case"value":u=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(g(137,t));break;default:b!==A&&cl(l,t,y,b,a,A)}}eu(l,u,s,o,h,S,i,n);return;case"select":b=u=s=y=null;for(i in e)if(o=e[i],e.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:a.hasOwnProperty(i)||cl(l,t,i,null,a,o)}for(n in a)if(i=a[n],o=e[n],a.hasOwnProperty(n)&&(i!=null||o!=null))switch(n){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&cl(l,t,n,i,a,o)}t=s,e=u,a=b,y!=null?ke(l,!!e,y,!1):!!a!=!!e&&(t!=null?ke(l,!!e,t,!0):ke(l,!!e,e?[]:"",!1));return;case"textarea":b=y=null;for(s in e)if(n=e[s],e.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:cl(l,t,s,null,a,n)}for(u in a)if(n=a[u],i=e[u],a.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==i&&cl(l,t,u,n,a,i)}Ro(l,y,b);return;case"option":for(var H in e)if(y=e[H],e.hasOwnProperty(H)&&y!=null&&!a.hasOwnProperty(H))switch(H){case"selected":l.selected=!1;break;default:cl(l,t,H,null,a,y)}for(o in a)if(y=a[o],b=e[o],a.hasOwnProperty(o)&&y!==b&&(y!=null||b!=null))switch(o){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:cl(l,t,o,y,a,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in e)y=e[X],e.hasOwnProperty(X)&&y!=null&&!a.hasOwnProperty(X)&&cl(l,t,X,null,a,y);for(h in a)if(y=a[h],b=e[h],a.hasOwnProperty(h)&&y!==b&&(y!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(g(137,t));break;default:cl(l,t,h,y,a,b)}return;default:if(nu(t)){for(var fl in e)y=e[fl],e.hasOwnProperty(fl)&&y!==void 0&&!a.hasOwnProperty(fl)&&Zs(l,t,fl,void 0,a,y);for(S in a)y=a[S],b=e[S],!a.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||Zs(l,t,S,y,a,b);return}}for(var f in e)y=e[f],e.hasOwnProperty(f)&&y!=null&&!a.hasOwnProperty(f)&&cl(l,t,f,null,a,y);for(A in a)y=a[A],b=e[A],!a.hasOwnProperty(A)||y===b||y==null&&b==null||cl(l,t,A,y,a,b)}function Gf(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nd(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Gf(u)){for(u=0,s=n.responseEnd,a+=1;a<e.length;a++){var o=e[a],h=o.startTime;if(h>s)break;var S=o.transferSize,A=o.initiatorType;S&&Gf(A)&&(o=o.responseEnd,u+=S*(o<s?1:(s-h)/(o-h)))}if(--a,t+=8*(i+u)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Vs=null,Ks=null;function Di(l){return l.nodeType===9?l:l.ownerDocument}function Qf(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lf(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Js(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=null;function Ud(){var l=window.event;return l&&l.type==="popstate"?l===$s?!1:($s=l,!0):($s=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,Rd=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(l){return Vf.resolve(null).then(l).catch(Bd)}:Zf;function Bd(l){setTimeout(function(){throw l})}function ye(l){return l==="head"}function Kf(l,t){var e=t,a=0;do{var n=e.nextSibling;if(l.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){l.removeChild(n),wa(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")mn(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,mn(e);for(var i=e.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[xa]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&mn(l.ownerDocument.body);e=n}while(e);wa(t)}function Jf(l,t){var e=l;l=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=a}while(e)}function ks(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":ks(e),lu(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function Yd(l,t,e,a){for(;l.nodeType===1;){var n=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[xa])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(i=l.getAttribute("rel"),i==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(i!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(i=l.getAttribute("src"),(i!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===i)return l}else return l;if(l=_t(l.nextSibling),l===null)break}return null}function qd(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=_t(l.nextSibling),l===null))return null;return l}function $f(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=_t(l.nextSibling),l===null))return null;return l}function Ws(l){return l.data==="$?"||l.data==="$~"}function Fs(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Xd(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function _t(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Is=null;function kf(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return _t(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function Wf(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function Ff(l,t,e){switch(t=Di(e),l){case"html":if(l=t.documentElement,!l)throw Error(g(452));return l;case"head":if(l=t.head,!l)throw Error(g(453));return l;case"body":if(l=t.body,!l)throw Error(g(454));return l;default:throw Error(g(451))}}function mn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);lu(l)}var Tt=new Map,If=new Set;function Oi(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=D.d;D.d={f:Gd,r:Qd,D:Ld,C:Zd,L:Vd,m:Kd,X:$d,S:Jd,M:kd};function Gd(){var l=Wt.f(),t=Si();return l||t}function Qd(l){var t=Ke(l);t!==null&&t.tag===5&&t.type==="form"?dc(t):Wt.r(l)}var Aa=typeof document>"u"?null:document;function Pf(l,t,e){var a=Aa;if(a&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),If.has(n)||(If.add(n),l={rel:l,crossOrigin:e,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Ll(t,"link",l),Bl(t),a.head.appendChild(t)))}}function Ld(l){Wt.D(l),Pf("dns-prefetch",l,null)}function Zd(l,t){Wt.C(l,t),Pf("preconnect",l,t)}function Vd(l,t,e){Wt.L(l,t,e);var a=Aa;if(a&&l&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+mt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+mt(e.imageSizes)+'"]')):n+='[href="'+mt(l)+'"]';var i=n;switch(t){case"style":i=Ma(l);break;case"script":i=Ea(l)}Tt.has(i)||(l=N({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),Tt.set(i,l),a.querySelector(n)!==null||t==="style"&&a.querySelector(hn(i))||t==="script"&&a.querySelector(yn(i))||(t=a.createElement("link"),Ll(t,"link",l),Bl(t),a.head.appendChild(t)))}}function Kd(l,t){Wt.m(l,t);var e=Aa;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(a)+'"][href="'+mt(l)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ea(l)}if(!Tt.has(i)&&(l=N({rel:"modulepreload",href:l},t),Tt.set(i,l),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(yn(i)))return}a=e.createElement("link"),Ll(a,"link",l),Bl(a),e.head.appendChild(a)}}}function Jd(l,t,e){Wt.S(l,t,e);var a=Aa;if(a&&l){var n=Je(a).hoistableStyles,i=Ma(l);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=a.querySelector(hn(i)))s.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},e),(e=Tt.get(i))&&Ps(l,e);var o=u=a.createElement("link");Bl(o),Ll(o,"link",l),o._p=new Promise(function(h,S){o.onload=h,o.onerror=S}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,ji(u,t,a)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function $d(l,t){Wt.X(l,t);var e=Aa;if(e&&l){var a=Je(e).hoistableScripts,n=Ea(l),i=a.get(n);i||(i=e.querySelector(yn(n)),i||(l=N({src:l,async:!0},t),(t=Tt.get(n))&&lo(l,t),i=e.createElement("script"),Bl(i),Ll(i,"link",l),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function kd(l,t){Wt.M(l,t);var e=Aa;if(e&&l){var a=Je(e).hoistableScripts,n=Ea(l),i=a.get(n);i||(i=e.querySelector(yn(n)),i||(l=N({src:l,async:!0,type:"module"},t),(t=Tt.get(n))&&lo(l,t),i=e.createElement("script"),Bl(i),Ll(i,"link",l),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function lg(l,t,e,a){var n=(n=$.current)?Oi(n):null;if(!n)throw Error(g(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Ma(e.href),e=Je(n).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=Ma(e.href);var i=Je(n).hoistableStyles,u=i.get(l);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(l,u),(i=n.querySelector(hn(l)))&&!i._p&&(u.instance=i,u.state.loading=5),Tt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Tt.set(l,e),i||Wd(n,l,e,u.state))),t&&a===null)throw Error(g(528,""));return u}if(t&&a!==null)throw Error(g(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ea(e),e=Je(n).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,l))}}function Ma(l){return'href="'+mt(l)+'"'}function hn(l){return'link[rel="stylesheet"]['+l+"]"}function tg(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function Wd(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ll(t,"link",e),Bl(t),l.head.appendChild(t))}function Ea(l){return'[src="'+mt(l)+'"]'}function yn(l){return"script[async]"+l}function eg(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+mt(e.href)+'"]');if(a)return t.instance=a,Bl(a),a;var n=N({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),Bl(a),Ll(a,"style",n),ji(a,e.precedence,l),t.instance=a;case"stylesheet":n=Ma(e.href);var i=l.querySelector(hn(n));if(i)return t.state.loading|=4,t.instance=i,Bl(i),i;a=tg(e),(n=Tt.get(n))&&Ps(a,n),i=(l.ownerDocument||l).createElement("link"),Bl(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Ll(i,"link",a),t.state.loading|=4,ji(i,e.precedence,l),t.instance=i;case"script":return i=Ea(e.src),(n=l.querySelector(yn(i)))?(t.instance=n,Bl(n),n):(a=e,(n=Tt.get(i))&&(a=N({},e),lo(a,n)),l=l.ownerDocument||l,n=l.createElement("script"),Bl(n),Ll(n,"link",a),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,ji(a,e.precedence,l));return t.instance}function ji(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,u=0;u<a.length;u++){var s=a[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(l,i.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Ps(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function lo(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Ci=null;function ag(l,t,e){if(Ci===null){var a=new Map,n=Ci=new Map;n.set(e,a)}else n=Ci,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),n=0;n<e.length;n++){var i=e[n];if(!(i[xa]||i[ql]||l==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=l+u;var s=a.get(u);s?s.push(i):a.set(u,[i])}}return a}function ng(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function Fd(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ig(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Id(l,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ma(a.href),i=t.querySelector(hn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xi.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=i,Bl(i);return}i=t.ownerDocument||t,a=tg(a),(n=Tt.get(n))&&Ps(a,n),i=i.createElement("link"),Bl(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Ll(i,"link",a),e.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=xi.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var to=0;function Pd(l,t){return l.stylesheets&&l.count===0&&Ui(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var a=setTimeout(function(){if(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend){var i=l.unsuspend;l.unsuspend=null,i()}},6e4+t);0<l.imgBytes&&to===0&&(to=62500*Nd());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend)){var i=l.unsuspend;l.unsuspend=null,i()}},(l.imgBytes>to?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Ni=null;function Ui(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Ni=new Map,t.forEach(lm,l),Ni=null,xi.call(l))}function lm(l,t){if(!(t.state.loading&4)){var e=Ni.get(l);if(e)var a=e.get(null);else{e=new Map,Ni.set(l,e);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),a=u)}a&&e.set(null,a)}n=t.instance,u=n.getAttribute("data-precedence"),i=e.get(u)||a,i===a&&e.set(null,n),e.set(u,n),this.count++,a=xi.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var vn={$$typeof:sl,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function tm(l,t,e,a,n,i,u,s,o){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function ug(l,t,e,a,n,i,u,s,o,h,S,A){return l=new tm(l,t,e,u,o,h,S,A,s),t=1,i===!0&&(t|=24),i=st(3,null,null,t),l.current=i,i.stateNode=l,t=Uu(),t.refCount++,l.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:t},Yu(i),l}function sg(l){return l?(l=aa,l):aa}function og(l,t,e,a,n,i){n=sg(n),a.context===null?a.context=n:a.pendingContext=n,a=ue(t),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=se(l,a,t),e!==null&&(et(e,l,t),ka(e,l,t))}function rg(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function eo(l,t){rg(l,t),(l=l.alternate)&&rg(l,t)}function cg(l){if(l.tag===13||l.tag===31){var t=Ce(l,67108864);t!==null&&et(t,l,67108864),eo(l,67108864)}}function fg(l){if(l.tag===13||l.tag===31){var t=gt();t=Fi(t);var e=Ce(l,t);e!==null&&et(e,l,t),eo(l,t)}}var Hi=!0;function em(l,t,e,a){var n=z.T;z.T=null;var i=D.p;try{D.p=2,ao(l,t,e,a)}finally{D.p=i,z.T=n}}function am(l,t,e,a){var n=z.T;z.T=null;var i=D.p;try{D.p=8,ao(l,t,e,a)}finally{D.p=i,z.T=n}}function ao(l,t,e,a){if(Hi){var n=no(a);if(n===null)Ls(l,t,a,Ri,e),pg(l,a);else if(im(n,l,t,e,a))a.stopPropagation();else if(pg(l,a),t&4&&-1<nm.indexOf(l)){for(;n!==null;){var i=Ke(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ee(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-it(u);s.entanglements[1]|=o,u&=~o}Ct(i),(al&6)===0&&(vi=at()+500,gn(0))}}break;case 31:case 13:s=Ce(i,2),s!==null&&et(s,i,2),Si(),eo(i,2)}if(i=no(a),i===null&&Ls(l,t,a,Ri,e),i===n)break;n=i}n!==null&&a.stopPropagation()}else Ls(l,t,a,null,e)}}function no(l){return l=uu(l),io(l)}var Ri=null;function io(l){if(Ri=null,l=Ve(l),l!==null){var t=x(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=Y(t),l!==null)return l;l=null}else if(e===31){if(l=P(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ri=l,null}function gg(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lg()){case bo:return 2;case So:return 8;case Mn:case Zg:return 32;case zo:return 268435456;default:return 32}default:return 32}}var uo=!1,ve=null,be=null,Se=null,bn=new Map,Sn=new Map,ze=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(l,t){switch(l){case"focusin":case"focusout":ve=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":Se=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function zn(l,t,e,a,n,i){return l===null||l.nativeEvent!==i?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ke(t),t!==null&&cg(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function im(l,t,e,a,n){switch(t){case"focusin":return ve=zn(ve,l,t,e,a,n),!0;case"dragenter":return be=zn(be,l,t,e,a,n),!0;case"mouseover":return Se=zn(Se,l,t,e,a,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,zn(bn.get(i)||null,l,t,e,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,zn(Sn.get(i)||null,l,t,e,a,n)),!0}return!1}function dg(l){var t=Ve(l.target);if(t!==null){var e=x(t);if(e!==null){if(t=e.tag,t===13){if(t=Y(e),t!==null){l.blockedOn=t,wo(l.priority,function(){fg(e)});return}}else if(t===31){if(t=P(e),t!==null){l.blockedOn=t,wo(l.priority,function(){fg(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Bi(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=no(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);iu=a,e.target.dispatchEvent(a),iu=null}else return t=Ke(e),t!==null&&cg(t),l.blockedOn=e,!1;t.shift()}return!0}function mg(l,t,e){Bi(l)&&e.delete(t)}function um(){uo=!1,ve!==null&&Bi(ve)&&(ve=null),be!==null&&Bi(be)&&(be=null),Se!==null&&Bi(Se)&&(Se=null),bn.forEach(mg),Sn.forEach(mg)}function Yi(l,t){l.blockedOn===t&&(l.blockedOn=null,uo||(uo=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,um)))}var qi=null;function hg(l){qi!==l&&(qi=l,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){qi===l&&(qi=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],n=l[t+2];if(typeof a!="function"){if(io(a||e)===null)continue;break}var i=Ke(e);i!==null&&(l.splice(t,3),t-=3,ns(i,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function wa(l){function t(o){return Yi(o,l)}ve!==null&&Yi(ve,l),be!==null&&Yi(be,l),Se!==null&&Yi(Se,l),bn.forEach(t),Sn.forEach(t);for(var e=0;e<ze.length;e++){var a=ze[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<ze.length&&(e=ze[0],e.blockedOn===null);)dg(e),e.blockedOn===null&&ze.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],u=n[Wl]||null;if(typeof i=="function")u||hg(e);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Wl]||null)s=u.formAction;else if(io(n)!==null)continue}else s=u.action;typeof s=="function"?e[a+1]=s:(e.splice(a,3),a-=3),hg(e)}}}function yg(){function l(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function so(l){this._internalRoot=l}Xi.prototype.render=so.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(g(409));var e=t.current,a=gt();og(e,a,l,t,null,null)},Xi.prototype.unmount=so.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;og(l.current,2,null,l,null,null),Si(),t[Ze]=null}};function Xi(l){this._internalRoot=l}Xi.prototype.unstable_scheduleHydration=function(l){if(l){var t=Eo();l={blockedOn:null,target:l,priority:t};for(var e=0;e<ze.length&&t!==0&&t<ze[e].priority;e++);ze.splice(e,0,l),e===0&&dg(l)}};var vg=w.version;if(vg!=="19.2.3")throw Error(g(527,vg,"19.2.3"));D.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(g(188)):(l=Object.keys(l).join(","),Error(g(268,l)));return l=T(t),l=l!==null?O(l):null,l=l===null?null:l.stateNode,l};var sm={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Oa=Gi.inject(sm),nt=Gi}catch{}}return Tn.createRoot=function(l,t){if(!E(l))throw Error(g(299));var e=!1,a="",n=Ac,i=Mc,u=Ec;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ug(l,1,!1,null,null,e,a,null,n,i,u,yg),l[Ze]=t.current,Qs(l),new so(t)},Tn.hydrateRoot=function(l,t,e){if(!E(l))throw Error(g(299));var a=!1,n="",i=Ac,u=Mc,s=Ec,o=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.formState!==void 0&&(o=e.formState)),t=ug(l,1,!0,t,e??null,a,n,o,i,u,s,yg),t.context=sg(null),e=t.current,a=gt(),a=Fi(a),n=ue(a),n.callback=null,se(e,n,a),e=a,t.current.lanes=e,Ca(t,e),Ct(t),l[Ze]=t.current,Qs(l),new Xi(t)},Tn.version="19.2.3",Tn}var Dg;function ym(){if(Dg)return co.exports;Dg=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(w){console.error(w)}}return v(),co.exports=hm(),co.exports}var vm=ym();const bm=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sm=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(w,C,g)=>g?g.toUpperCase():C.toLowerCase()),Og=v=>{const w=Sm(v);return w.charAt(0).toUpperCase()+w.slice(1)},Bg=(...v)=>v.filter((w,C,g)=>!!w&&w.trim()!==""&&g.indexOf(w)===C).join(" ").trim(),zm=v=>{for(const w in v)if(w.startsWith("aria-")||w==="role"||w==="title")return!0};var _m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Tm=zl.forwardRef(({color:v="currentColor",size:w=24,strokeWidth:C=2,absoluteStrokeWidth:g,className:E="",children:x,iconNode:Y,...P},U)=>zl.createElement("svg",{ref:U,..._m,width:w,height:w,stroke:v,strokeWidth:g?Number(C)*24/Number(w):C,className:Bg("lucide",E),...!x&&!zm(P)&&{"aria-hidden":"true"},...P},[...Y.map(([T,O])=>zl.createElement(T,O)),...Array.isArray(x)?x:[x]]));const Te=(v,w)=>{const C=zl.forwardRef(({className:g,...E},x)=>zl.createElement(Tm,{ref:x,iconNode:w,className:Bg(`lucide-${bm(Og(v))}`,`lucide-${v}`,g),...E}));return C.displayName=Og(v),C};const Am=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],Mm=Te("bird",Am);const Em=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],wm=Te("circle",Em);const Dm=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Om=Te("key",Dm);const jm=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Cm=Te("music",jm);const xm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nm=Te("star",xm);const Um=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Hm=Te("volume-2",Um);const Rm=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Bm=Te("volume-x",Rm);const Ym=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yg=Te("x",Ym);function qm({displayName:v,onConfirm:w,onCancel:C,onClose:g}){return d.jsx("div",{className:"modal-overlay",onClick:g,children:d.jsx("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:g,children:d.jsx(Yg,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[v,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:w,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",v]}),d.jsx("button",{onClick:C,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function qg(){const v=localStorage.getItem("openedWindows");if(!v)return new Set;try{const w=JSON.parse(v);return new Set(w)}catch(w){return console.error("Failed to parse opened windows:",w),new Set}}function Xm(v){const w=qg();return w.add(v),localStorage.setItem("openedWindows",JSON.stringify([...w])),w}function jg(){localStorage.removeItem("openedWindows")}function Gm(){localStorage.removeItem("adventCalendarUser")}const Cg=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function Qm({userName:v,onUserSelect:w}){const[C]=zl.useState(()=>Cg[Math.floor(Math.random()*Cg.length)]),[g,E]=zl.useState(!1),x=v==="Tanya"?"Таня":v==="Zebra"?"Зёбра":"неведомый гость",Y=()=>{E(!0)},P=()=>{Gm(),jg(),E(!1),window.location.reload()},U=()=>{jg(),E(!1)},T=()=>{E(!1)};return v?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[C,","," ",d.jsx("span",{className:"user-name clickable",onClick:Y,title:`А точно ли я ${x}?..`,children:x}),"!"]})}),g&&(v==="Tanya"||v==="Zebra")&&d.jsx(qm,{displayName:x,onConfirm:P,onCancel:U,onClose:T})]}):d.jsxs("div",{className:"user-selection",children:[d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>w("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>w("Zebra"),children:"Зёбра"})]})]})}function Lm(){const[v,w]=zl.useState([]),[C,g]=zl.useState([]);return zl.useEffect(()=>{const E=U=>T=>{const O=Math.sin(U*9301+T*49297)*43758.5453;return O-Math.floor(O)},x=Array.from({length:60}).map((U,T)=>{const O=E(T+1);return{left:`${Math.floor(O(1)*100)}%`,top:`${Math.floor(O(2)*70)}%`,animationDelay:`${(O(3)*3).toFixed(2)}s`,opacity:+(.3+O(4)*.7).toFixed(2)}}),Y=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,T)=>{const O=E(100+T);let N=30+Math.floor(O(1)*60),K=Math.max(10,Math.floor(O(2)*30));const yl=Y[T%Y.length],vl=+(.35+O(3)*.55).toFixed(2),_l=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(O(4)*30)}% ${30+Math.floor(O(5)*30)}%`,bl=40+Math.floor(O(6)*40),El=Math.floor(O(7)*20),sl=-20+Math.floor(O(8)*140);let Tl=5+Math.floor(O(9)*40);return T===0&&(Tl=Math.max(2,Tl-8),N=Math.max(20,Math.floor(N*.85)),K=Math.max(8,Math.floor(K*.8))),{left:`${sl}%`,top:`${Tl}%`,width:`${N}vw`,height:`${K}vh`,opacity:vl,color:_l,borderRadius:Ul,duration:bl,delay:El}});window.requestAnimationFrame(()=>{w(x),g(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:v.map((E,x)=>d.jsx("div",{className:"star",style:{left:E.left,top:E.top,animationDelay:E.animationDelay,opacity:E.opacity}},x))})]}),d.jsx("div",{className:"layer layer-clouds",children:C.map((E,x)=>d.jsx("div",{className:`cloud cloud-${x+1}`,style:{position:"absolute",left:E.left,top:E.top,width:E.width,height:E.height,background:E.color,opacity:E.opacity,borderRadius:E.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${E.duration}s linear ${E.delay}s infinite`}},x))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((E,x)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${E},300 ${E-20},250 ${E-15},250 ${E-30},200 ${E-25},200 ${E-40},150 ${E+40},150 ${E+25},200 ${E+30},200 ${E+15},250 ${E+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:E-5,y:"280",width:"10",height:"20",fill:"#111827"})]},x))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const Zm=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium"],Vm=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square"],xg=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window"],Ng=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Ug=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Hg=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Rg=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],Km=v=>{switch(v){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(wm,{className:"door-handle ring",size:12});case"star":return d.jsx(Nm,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},Jm=v=>{if(v===0)return null;const w=v===4||v===6?2:4,C=v===4?2:v===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${w}, 1fr)`,gridTemplateRows:`repeat(${C}, 1fr)`},children:Array.from({length:v}).map((g,E)=>d.jsx("div",{className:"window-pane"},E))})},$m=v=>{if(v==="none")return null;switch(v){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},km=v=>{if(v==="none")return null;switch(v){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function Wm({windowNumber:v,isActive:w,isOpened:C,isExactMatch:g,onClick:E}){const x=zl.useRef(null),Y=v===17,P=()=>{Y&&x.current&&(x.current.currentTime=0,x.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},U=Zm[v-1],T=Vm[v-1],O=w&&!C||w&&g?"window-glow-intense":"",K=new Set([11,6,12,16,25]).has(v),yl=K?"window-round":T,_l=xg[v-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<v;Sl++)xg[Sl]==="door"?Ul++:bl++;const El=Ng[(Ul-1)%Ng.length],sl=Ug[(bl-1)%Ug.length],Tl=Hg[(Ul-1)%Hg.length],Zl=Rg[(bl-1)%Rg.length];return d.jsx("div",{className:`calendar-window ${U} ${yl} ${O} ${C?"window-opened":""} ${w?"window-active":"window-inactive"}`,onClick:E,onMouseEnter:P,children:_l?d.jsxs("div",{className:`door-element ${El.type}`,children:[$m(Tl),d.jsx("div",{className:`door-frame frame-${El.frame}`,children:d.jsxs("div",{className:`door-panel wood-${El.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[El.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[Km(El.handle),El.hasKeyhole&&d.jsx(Om,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:v})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${U}`,children:[km(Zl),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${sl.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[Jm(sl.panes),sl.shape==="arched"&&d.jsx("div",{className:"window-arch"}),Y&&d.jsx(Mm,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:v})]}),sl.hasSill&&d.jsx("div",{className:"window-sill",children:sl.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function Fm({windowNumber:v,message:w,onClose:C}){return d.jsx("div",{className:"modal-overlay",onClick:C,children:d.jsx("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:C,children:d.jsx(Yg,{size:24})}),v!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",v]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:w}})]})})})}function Qi(v){const w=new Date(Date.UTC(2025,11,19,21,0,0,0)),C=v-1;return new Date(w.getTime()+C*24*60*60*1e3)}function Li(v,w){return w.getTime()>=v.getTime()}function mo(v,w){const C=new Date(v);C.setUTCHours(0,0,0,0);const g=new Date(w);return g.setUTCHours(0,0,0,0),C.getTime()===g.getTime()}const Im="/advent/assets/muerte-DfSvC3Z-.jpg",Pm="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",eh="/advent/assets/Ofrenda-DDd9dlHK.jpg",ah="/advent/assets/kolumbia-DUKl5Drs.webp",nh="/advent/assets/kolumb2--JWazZNY.webp",ih="/advent/assets/melhior-5oqVeQRz.webp",uh="/advent/assets/shir-CPxmcAyu.jpg",sh="/advent/assets/markes-DHTR6R5s.jpg",oh="/advent/assets/tolkin-Bkb1qdyy.jpg",rh="/advent/assets/tolkin1-Gt7VHXrl.jpg",ch="/advent/assets/berry-BayIKnFN.jpg",fh="/advent/assets/berry1-aZtyDiG8.jpg",gh="/advent/assets/gvatemala1-C3fdq1S5.jpg",ph="/advent/assets/graves-B4Ep0a2x.jpg",dh="/advent/assets/carpet1-BHoBEQUm.jpg",mh="/advent/assets/airsnakes-BtpaN7a0.jpg",hh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",vh="/advent/assets/brazil1-C1nzNzga.webp",bh="/advent/assets/ethiopia-CfI92xpA.jpg",Sh="/advent/assets/goats-B1iHvHcl.jpg",zh="/advent/assets/rabanda-ClmJ6Exb.jpg",_h="/advent/assets/honduras-DTj2TRgE.jpg",Th="/advent/assets/honduras1-BfVuI_LD.jpg",Ah="/advent/assets/resp-DBSDT0A7.png",Mh="/advent/assets/cicoriy-DL-J_EKv.webp",Eh="/advent/assets/carob-DDo_E6jz.jpg",wh="/advent/assets/tonka-CaSKsR3p.webp",Dh="/advent/assets/kardamon-D-LlmV-v.webp",Oh="/advent/assets/mem1-Coiz1JZ3.jpg",jh="/advent/assets/cafe-DrSeHG9j.jpg",Ch="/advent/assets/yerevan1-0r9N0UnH.jpg",xh="/advent/assets/yerevan2-fQnNyY8p.jpg",Nh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Hh="/advent/assets/bears-BwIhEuov.jpg",Rh="/advent/assets/ararat-DAhBMtll.jpg",Bh="/advent/assets/jazzve-DliHyYYl.jpg",Yh="/advent/assets/abc-C__8usP9.webp",qh="/advent/assets/noy-KD54xzv8.jpg",Xh="/advent/assets/poss-LSCreopJ.jpg",Gh="/advent/assets/poss1-CPSySb8a.jpg",Qh="/advent/assets/poss2-4TAHhBM7.jpg",Lh="/advent/assets/poss3-BBe7PtjI.jpg",Zh="/advent/assets/poss4-B0yE7kHZ.jpg",Vh="/advent/assets/poss5-DtHf0aUR.jpg",Kh="/advent/assets/possa-mom-BPlrTPcT.jpg",Jh="/advent/assets/possa-mom1-D9ySRpWd.jpg",$h="/advent/assets/poss-and-oposs-DDSg4YaG.webp",kh="/advent/assets/possaKnowl-CYkQIhVz.jpg",Wh="/advent/assets/thief-CoIDv1iT.jpg",Fh="/advent/assets/smile-1-5jdl68.jpg",Ih="/advent/assets/merch-DdoKdpQb.jpg",Ph="/advent/assets/merch1-CtZos-AO.jpg",l0="/advent/assets/cammomile-Byca6E_e.jpg",t0="/advent/assets/cham-tea-BPAncxo6.jpg",e0="/advent/assets/chamomile1-DbctfrkQ.jpg",a0="/advent/assets/chamomile2-k1NNuBaK.jpg",n0="/advent/assets/juniper-r5wxtBRx.jpg",i0="/advent/assets/juniper1-BWoP6YHZ.jpg",u0="/advent/assets/juniper3-BXCLBj8d.jpg",s0="/advent/assets/juniperTea-0KTJdRf4.jpg",o0="/advent/assets/cham-sci-ixEH2xhc.jpg",r0="/advent/assets/juniperTattoo-Drp4YpCt.jpg",c0="/advent/assets/chamomileTattoo-BGNh6NOB.jpg",f0="/advent/assets/juniper-sci-hXzXrr9H.jpg",g0="/advent/assets/jun-sci2-zIGUP1FK.jpg",p0="/advent/assets/solovki-B95fDwav.webp",d0="/advent/assets/solovki1-u3Varh4x.webp",m0="/advent/assets/solovki2-D19kpuou.jpg",h0="/advent/assets/coffeCard1-DNW-HsaJ.webp",y0="/advent/assets/coffeCard2-BNxhtL4t.webp",v0="/advent/assets/coffeCard3-AyYO0wak.webp",b0="/advent/assets/coffeCard4-DI2_0NqK.webp",S0="/advent/assets/coffeCard5-dUEpTs6X.webp",z0="/advent/assets/coffeCard6-BDW-PLix.webp",_0="/advent/assets/atitlan-dYAI5eYf.jpg",T0="/advent/assets/atitlan1-C5ZSs572.jpg",A0="/advent/assets/guatemala8-Bi5KoB48.jpg",M0="/advent/assets/guatemalaCorn-ClR7vTSk.jpg",E0="/advent/assets/guatemalaTkan-DTKRCwUa.jpg",w0="/advent/assets/himalaya1-nN0t50Ma.avif",D0="/advent/assets/pinkSalt-BizDWWT4.jpg",O0="/advent/assets/saltMeme-Dq0p8Dwq.jpg",j0="/advent/assets/matcha11-CE8SBYA1.jpg",C0="/advent/assets/matcha-C8bXd3OR.jpg",x0="/advent/assets/matcha2-6Pc5CGop.jpg",N0="/advent/assets/matcha3-PqMaWA5u.jpg",U0="/advent/assets/matchaOld-BdH0N0Hr.jpg",H0="/advent/assets/matchaOld1-d7pxtrP4.jpg",R0="/advent/assets/harvest-DiJhXofV.jpg",B0="/advent/assets/harvest1-f7uXoVQt.jpg",Y0="/advent/assets/matchaColors-CePGvb-v.jpg",q0="/advent/assets/cat1-CteOJfo2.jpg",X0="/advent/assets/cat2-CI2WaIbw.jpg",G0="/advent/assets/cat3-wi61L9Ty.jpg",Q0="/advent/assets/cat4-BQJa7vAE.jpg",L0="/advent/assets/cat5-D7xwVjOS.jpg",Z0="/advent/assets/piterMeme-ClYb6GkP.jpg",V0="/advent/assets/monk-D17MXC2B.jpg",K0="/advent/assets/nyMeme1-6GOagR6o.jpg",J0="/advent/assets/nyMeme2-7Telpurx.jpg",$0="/advent/assets/nyMeme4-BNwb-aPZ.jpg",k0="/advent/assets/nyMeme5-mCJoC8cu.jpg",W0="/advent/assets/nyMeme6-BndRKfA9.jpg",F0="/advent/assets/nyMeme7-CBDPmv-H.jpg",I0="/advent/assets/nyMeme8-Dq-5p2Cs.jpg",P0="/advent/assets/nyMeme9-DtlbkQI_.jpg",p={muerte:Im,katrina:Pm,pink:lh,rese:th,Ofrenda:eh,kolumb2:nh,kolumbia:ah,melhior:ih,shir:uh,markes:sh,tolkin:oh,tolkin1:rh,berries:ch,berries1:fh,gvatemala1:gh,graves:ph,carpet1:dh,airsnake2:mh,fish:hh,fish1:yh,brazil1:vh,ethiopia:bh,goats:Sh,rabanda:zh,honduras:_h,honduras1:Th,resp:Ah,cicoriy:Mh,carob:Eh,tonka:wh,kardamon:Dh,mem:Oh,cafe:jh,yerevan1:Ch,yerevan2:xh,yerevan3:Nh,lion:Uh,bears:Hh,ararat:Rh,yazzve:Bh,abc:Yh,noy:qh,poss:Xh,possaMom:Kh,possaMom1:Jh,possOrOposs:$h,possaKnowl:kh,poss1:Gh,poss2:Qh,poss3:Lh,poss4:Zh,poss5:Vh,thief:Wh,smile:Fh,merch:Ih,merch1:Ph,cammomile:l0,chamomile2:a0,chamomileTea:t0,chamomile1:e0,juniper:n0,juniper1:i0,juniper3:u0,juniperTea:s0,chamSci:o0,juniperTattoo:r0,chamomileTattoo:c0,juniperSci:f0,juniperSci1:g0,solovki:p0,solovki1:d0,solovki2:m0,coffeCard1:h0,coffeCard2:y0,coffeCard3:v0,coffeCard4:b0,coffeCard5:S0,coffeCard6:z0,atitlan:_0,atitlan1:T0,guatemala8:A0,guatemalaCorn:M0,guatemalaTkan:E0,himalaya:w0,pinkSalt:D0,saltMeme:O0,harvest:R0,harvest1:B0,matcha:C0,matcha2:x0,matcha3:N0,matcha11:j0,matchaOld:U0,matchaOld1:H0,matchaColors:Y0,cat1:q0,cat2:X0,cat3:G0,cat4:Q0,cat5:L0,piterMeme:Z0,monk:V0,nyMeme1:K0,nyMeme2:J0,nyMeme4:$0,nyMeme5:k0,nyMeme6:W0,nyMeme7:F0,nyMeme8:I0,nyMeme9:P0},l1=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${p.muerte}" />
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
<img src="${p.Ofrenda}" />
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
       <img src="${p.katrina}" />
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
      <img src="${p.muerte}" />
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

      <img src="${p.Ofrenda}" />

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
       <img src="${p.katrina}" />
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
  <img src="${p.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${p.rese}" />
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
  <img src="${p.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${p.rese}" />
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
    <img src="${p.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение — ведь Baggins = фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название! ☕🎉</p>
    <img src="${p.tolkin}" />
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
    <img src="${p.melhior}" />
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
      <img src="${p.tolkin1}" />
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
    <img src="${p.kolumbia}" />
    <p><strong>География:</strong> Анды, высота 1200-2000 м, вулканическая почва, два сезона дождей = урожай круглый год!</p>
    
    <p><strong>Вкус:</strong> Сбалансированный, средняя кислотность, карамель, орехи, чистый профиль. <strong>"Безопасный выбор"</strong> — почти всегда вкусно!</p>
    
    <p><strong>100% Арабика:</strong> Колумбия не выращивает робусту по закону! Только арабика.</p>
    
    <h3>Габриэль Гарсиа Маркес и кофе ☕📖</h3>
    <p><strong>Габо</strong> (как его называли в Колумбии) родился в <strong>Аракатаке</strong> — маленьком городке в зоне банановых плантаций. Но кофе был везде!</p>
    <img src="${p.markes}" />
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
    <img src="${p.kolumb2}" />
    <p>Качественное зерно → даже без кофеина сохраняется вкус!</p>
    
    <h3>Мельхиоровая ложечка 🥄✨</h3>
    <p><strong>Мельхиор</strong> — сплав меди + никель. В СССР = "народное серебро" (дешевле настоящего, но красиво!).</p>
    <img src="${p.melhior}" />
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
    <img src="${p.gvatemala1}" />
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
    <img src="${p.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${p.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее Зёбры и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${p.carpet1}" />
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
    <img src="${p.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${p.berries1}" />
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
    <img src="${p.gvatemala1}" />
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
    <img src="${p.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${p.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее тебя и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${p.carpet1}" />
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
    <img src="${p.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${p.berries1}" />
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
    <img src="${p.fish}" />
    
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

    <img src="${p.fish1}" />
    
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

    <img src="${p.brazil1}" />
    
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
    <img src="${p.ethiopia}" />
    <p><strong>Легенда Калди (IX век):</strong></p>
    <ul>
      <li>Пастух Калди заметил: его козы ели красные ягоды → танцевали всю ночь!</li>
      <li>Монахи попробовали → не спали на молитвах</li>
      <li>Сначала сожгли как "дьявольские ягоды"</li>
      <li>Но запах был так хорош, что решили заваривать!</li>
    </ul>
    <p>Между прочим, есть фотопруф:</p>
    <img src="${p.goats}" />
    
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
<img src="${p.rabanda}" />
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
    <img src="${p.fish}" />
    
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

    <img src="${p.fish1}" />
    
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

    <img src="${p.brazil1}" />
    
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
    <img src="${p.rabanda}" />

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
    <img src="${p.honduras}" />
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
    <img src="${p.resp}" />
    
    <p><strong>6 кофейных регионов:</strong></p>
    <ul>
      <li><strong>Copán</strong> — западный, у границы с Гватемалой, шоколад + карамель.</li>
      <li><strong>Opalaca</strong> — высокогорный, сбалансированный.</li>
      <li><strong>Montecillos</strong> — центральный, фруктовый, цитрусовый.</li>
      <li><strong>Comayagua</strong> — винная кислотность.</li>
      <li><strong>Agalta</strong> — восточный, тропические фрукты.</li>
      <li><strong>El Paraíso</strong> — у границы с Никарагуа, сладкий, мягкий.</li>
    </ul>
    <img src="${p.honduras1}" />
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
    <img src="${p.mem}" />
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
    <img src="${p.cicoriy}" />
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
    <img src="${p.cafe}" />
    
    <p><strong>Вкус:</strong> Древесный, ореховый, землистый. Вяжущий (танины!).</p>
    
    <p><strong>Проблема:</strong> Нужно вымачивать жёлуди (убрать танины), иначе горько и токсично.</p>
    
    <h4>4. Кэроб — шоколадный заменитель 🍫</h4>
    <p><strong>Что это:</strong> Порошок из стручков рожкового дерева (Средиземноморье).</p>
    <img src="${p.carob}" />
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
    <img src="${p.tonka}" />
    <p><strong>⚠️ Важно:</strong> Содержат кумарин (в больших дозах токсичен). В США запрещены в еде с 1954! В Европе разрешены в микродозах. В твоём стике — безопасная доза!</p>
    
    <h4>7. Зелёный кардамон — королева специй 👑</h4>
    <p><strong>Что это:</strong> Специя из семейства имбирных (Индия).</p>
    <img src="${p.kardamon}" />
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
    <img src="${p.mem}" />
  `},{day:7,date:"2025-12-26",tanya_gift:"Армянский детский растворимый кофе",zebra_gift:"Армянский детский растворимый кофе",tanya_bonus:"Зефир в виде кошачьей лапки",zebra_bonus:"Зефир в виде кошачьей лапки",title:"Ереван — город, в который я влюбилась",tanya_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${p.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${p.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${p.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${p.bears}" />
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
    <img src="${p.yazzve}" />
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
    <img src="${p.ararat}" />
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
    <img src="${p.abc}" />
    
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
    <img src="${p.noy}" />
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
<img src="${p.yerevan3}" />
`,zebra_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${p.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${p.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${p.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${p.bears}" />
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
    <img src="${p.yazzve}" />
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
    <img src="${p.ararat}" />
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
    <img src="${p.abc}" />
    
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
    <img src="${p.noy}" />
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
<img src="${p.yerevan3}" />
`},{day:8,date:"2025-12-27",tanya_gift:'Какао "Опоссум" (пьёт и больше не орёт)',zebra_gift:'Какао "Опоссум" (пьёт и больше не орёт)',tanya_bonus:"Маршмеллоу (маленькие)",zebra_bonus:"Маршмеллоу (маленькие)",title:"Опоссумы, какао и философия",tanya_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${p.possaMom}" />
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
    <img src="${p.smile}" />
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
    <img src="${p.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${p.possOrOposs}" />
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
      <img src="${p.poss}" />
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
    <img src="${p.thief}" />

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
<img src="${p.possaKnowl}" />
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
<img src="${p.merch1}" />
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
      <img src="${p.poss1}" />
      <img src="${p.poss2}" />
      <img src="${p.poss3}" />
      <img src="${p.poss4}" />
      <img src="${p.poss5}" />
      <img src="${p.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `,zebra_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${p.possaMom}" />
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
    <img src="${p.smile}" />
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
    <img src="${p.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${p.possOrOposs}" />
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
      <img src="${p.poss}" />
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
    <img src="${p.thief}" />

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
<img src="${p.possaKnowl}" />
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
<img src="${p.merch1}" />
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
      <img src="${p.poss1}" />
      <img src="${p.poss2}" />
      <img src="${p.poss3}" />
      <img src="${p.poss4}" />
      <img src="${p.poss5}" />
      <img src="${p.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `},{day:9,date:"2025-12-28",tanya_gift:"Чай ромашковый",zebra_gift:"Чай ромашковый",tanya_bonus:"Твикс имбирный",zebra_bonus:"Твикс имбирный",title:"Ромашковый чай за 1000 рублей",tanya_message:`
      <p><strong>Ромашковый чай</strong> — напиток, который недавно был в центе московских обсуждений 🌼☕💸</p>
      
      <h3>История про чай за 1000 рублей</h3>
      <p>Оченью 2025 года в Кофемании поллитра ромшкового чая продавали почти за косарь. "Кипяток для избранных", писали в обзорах.</p>
      <img src="${p.chamomileTea}" />
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
      <img src="${p.chamomile1}" />
      <p><strong>История:</strong></p>
      <ul>
        <li><strong>Древний Египет:</strong> Посвящали ромашку богу солнца Ра, лечили лихорадку.</li>
        <li><strong>Древний Рим:</strong> Солдаты пили ромашковый чай перед битвой (успокоение, хотя казалось бы).</li>
        <li><strong>Средневековье:</strong> "Растение-целитель" — от всего (за неимением подорожника, не иначе).</li>
      </ul>
      <img src="${p.cammomile}" />
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
<img src="${p.chamSci}" />
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

      <img src="${p.chamomile2}" />
      <h3>Твикс имбирный 🍪</h3>
      <p><strong>Имбирное печенье</strong> + карамель + шоколад = праздничный вкус!</p>
      
      <p><strong>Имбирь + шоколад</strong> — древнее сочетание. Ацтеки добавляли имбирь в <em>xocolātl</em> (горячий шоколад) для воинов.</p>
      <img src="${p.chamomileTattoo}" />
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
      <img src="${p.juniperTea}" />
      <p>У тебя <strong>рабочее воскресенье перед Новым годом</strong>. Тяжело. Все отдыхают, а ты работаешь (напоминает тебе сочувствующая юбездуховная нейронка).</p>

      <p>Надеемся (мы с нейронкой), что можжевельник и имбирь в твоём чае (окей, имбирь в печеньке в твоем limit edition Твиксе, если ты не съела его раньше, а я не перепутала и это) придали тебе сил! ☕💪</p>

      <p><strong>Можжевельник — что это:</strong></p>
<ul>
  <li>Ягоды можжевелового куста (хвойное растение).</li>
  <li>На самом деле это не ягоды, а <strong>шишкоягоды</strong> (модифицированные шишки!).</li>
  <li>Тёмно-синие, с восковым налётом.</li>
  <li>Вкус: хвойный, смолистый, немного сладковатый.</li>
</ul>
<img src="${p.juniper}" />
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
<img src="${p.juniper1}" />
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
  <img src="${p.juniper3}" />

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
    <img src="${p.juniperSci}" />
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
    <img src="${p.juniperSci1}" />
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
    <img src="${p.juniperTattoo}" />

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
    <img src="${p.coffeCard4}" />
    <p><strong>Откуда:</strong> Колумбия (зёрна) → Соловецкий монастырь (обжарка) → твоя чашка</p>
    <p><strong>Кто обжаривал:</strong> Монахи Соловецкого монастыря!</p>
    <p><strong>Как:</strong> С молитвой! (серьёзно, так написано в карточке товара)</p>
    <h3>Соловецкий монастырь — внезапный кофе на краю света 🏔️</h3>
    <img src="${p.solovki2}" />
    <p><strong>Где:</strong></p>
    <ul>
      <li>Соловецкие острова, Белое море</li>
      <li>Архангельская область, Россия</li>
      <li>160 км от Полярного круга!</li>
      <li>Добраться можно только на корабле или вертолёте</li>
    </ul>
    <img src="${p.coffeCard1}" />
    <p><strong>Монастырь:</strong></p>
    <ul>
      <li>Основан в 1436 году</li>
      <li>Один из самых известных монастырей России</li>
      <li>ЮНЕСКО World Heritage</li>
      <li>Крепость, духовный центр, история</li>
    </ul>
    <img src="${p.solovki1}" />
    <p><strong>Тёмная история:</strong></p>
    <ul>
      <li>1920-1939 — ГУЛАГ (Соловецкий лагерь особого назначения)</li>
      <li>Монастырь закрыли, монахов репрессировали</li>
      <li>Один из первых советских лагерей</li>
      <li>1990 — монастырь возродился</li>
    </ul>
    
    <h3>Братский кофе — монашеский бизнес ☕</h3>
    <img src="${p.coffeCard3}" />
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Социальное предприятие монастыря</li>
      <li>Монахи покупают зёрна (Колумбия, Бразилия, Эфиопия, др.)</li>
      <li>Обжаривают на Соловках</li>
      <li>Продают под брендом "Братский кофе"</li>
      <li><strong>"Сделано с молитвой!"</strong> — буквально написано на упаковке 😄</li>
    </ul>
    <img src="${p.solovki}" />
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
    <img src="${p.coffeCard2}" />
    <p><strong>Что это значит:</strong></p>
    <p>Монахи молятся во время обжарки. Буквально: "Господи, благослови тех, кто выпьет этот кофе!" Ну, в лучшей из версий.</p>
    <p>Представь: монахи на Белом море, на краю света, в древнем монастыре обжаривают колумбийский кофе c молитвой. В XXI веке. Чтобы потом продавать на Озоне втридорога. Это прекрасно и абсурдно одновременно!</p>
    <img src="${p.coffeCard5}" />
    
    
    <h3>Как заваривать:</h3>
    <ol>
      <li>Смели зёрна (средний помол для турки/френч-пресса, мелкий для эспрессо)</li>
      <li>Завари любым способом</li>
      <li><strong>Перед первым глотком:</strong> Скажи "Спасибо, монахи!" 😄</li>
      <li>Наслаждайся</li>
    </ol>
    <img src="${p.coffeCard6}" />
    <h3>Гималайская соль — снова! 🧂</h3>
    
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    <p>Я решила, что к такому кофе нужно что-то суровое.</p> 
    <img src="${p.himalaya}" />
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй заварить кофе и добавь крошечную щепотку соли</li>
    </ul>
    <img src="${p.pinkSalt}" />
    <p><strong>Можно просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${p.saltMeme}" />
    
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
    <img src="${p.atitlan1}" />
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
    <img src="${p.guatemala8}" />
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
    <img src="${p.atitlan}" />
    <p><strong>Озеро Атитлан:</strong></p>
    <ul>
      <li>Одно из красивейших озёр мира</li>
      <li>В кратере вулкана!</li>
      <li>Вокруг — 3 вулкана (Atitlán, Tolimán, San Pedro)</li>
      <li>Деревни майя на берегу</li>
      <li>Кофе растёт на склонах → знаменитый регион Atitlán</li>
    </ul>
    
    <p><strong>Майя — живая культура:</strong></p>
    <img src="${p.guatemalaCorn}" />
    <ul>
      <li>40%+ населения Гватемалы — майя</li>
      <li>Говорят на языках майя (23 языка!)</li>
      <li>Носят традиционную одежду (huipil — расшитые блузы)</li>
      <li>Хранят традиции (церемонии, календарь майя, ремёсла)</li>
      <li>Многие работают на кофейных плантациях</li>
    </ul>
    
    <img src="${p.guatemalaTkan}" />
    <p><strong>Текстиль майя:</strong></p>
    <ul>
      <li>Знаменитые ткани — яркие, с геометрическими узорами</li>
      <li>Каждая деревня — свой стиль!</li>
      <li>По одежде можно определить, откуда человек</li>
      <li>Ткут на поясных станках (backstrap loom) — древняя техника</li>
    </ul>
    
    <h3>Гималайская соль — снова! 🧂</h3>
    <img src="${p.himalaya}" />
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй: завари декаф, добавь крошечную щепотку соли</li>
    </ul>
    <img src="${p.pinkSalt}" />
    <p><strong>Можно и просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${p.saltMeme}" />
    
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
    <img src="${p.matcha}" />
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
    <img src="${p.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${p.harvest1}" />
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
    <img src="${p.matchaOld1}" />
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
    <img src="${p.matcha11}" />
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
    <img src="${p.harvest}" />
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
    <img src="${p.matchaColors}" />
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
    <img src="${p.matcha2}" />
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
    <img src="${p.monk}" />
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
    <img src="${p.matcha3}" />
    
    
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
    <img src="${p.matcha}" />
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
    <img src="${p.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${p.harvest1}" />
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
    <img src="${p.matchaOld1}" />
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
    <img src="${p.matcha11}" />
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
    <img src="${p.harvest}" />
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
    <img src="${p.matchaColors}" />
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
    <img src="${p.matcha2}" />
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
    <img src="${p.monk}" />
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
    <img src="${p.matcha3}" />
    
    
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
    <img src="${p.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${p.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${p.cat5}" />
    <p><strong>МК:</strong>Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${p.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${p.cat1}" />
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
    <img src="${p.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${p.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${p.cat5}" />
    <p><strong>МК:</strong> Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${p.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${p.cat1}" />
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
    <img src="${p.piterMeme}" />
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
    <img src="${p.nyMeme4}" />
    <p>Пережили 2025 и встретили 2026. Время - это социальный конструкт, но что-то героическое в этом безусловно есть.</p>
    <p>Сегодня не нужно никуда бежать, и даже не нужно начинать новую жизнь. Выпить кофе будет в самый раз)</p>
    <img src="${p.nyMeme2}" />
    <h3>Инструкция на сегодня 📋</h3>
    
    <p><strong>1. Подышать.</strong></p>
    <ul>
      <li>Глубокий вдох (4 счёта)</li>
      <li>Задержка (4 счёта)</li>
      <li>Выдох (6 счётов)</li>
      <li>Повтори 3 раза</li>
    </ul>
    <img src="${p.nyMeme6}" />
    <p><strong>2. Никаких "надо":</strong></p>
    <ul>
      <li>Не строй планы на год</li>
      <li>Не чувствуй вину за лежание</li>
      <li>Сегодня — день безделья. Официально.</li>
    </ul>
    
    <img src="${p.nyMeme7}" />
    
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
    <img src="${p.nyMeme8}" />
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
    <img src="${p.nyMeme9}" />
    
    <p><strong>Как работает:</strong></p>
    <ul>
      <li>Нетканый материал плотно прилегает к коже и создаёт "окклюзию" (закрывает поры) → ингредиенты проникают глубже</li>
      <li>Сыворотка не испаряется (как крем на воздухе)</li>
      <li>15-20 минут → кожа впитывает максимум</li>
      <li>20 минут принудительного отдыха!</li>
    </ul>
    
    <p><strong>Философия маски:</strong> Нельзя говорить, смотреть в телефон (ага-ага, думаю я. Никакая чертова маска не будет указывать мне, что делать!..). Можно только лежать и дышать. Это медитация под видом ухода за кожей.</p>
    
    <img src="${p.nyMeme5}" />
    <h3>Послание на 1 января 💌</h3>
    
    <p>Ты дожила до 2026. Сегодня не нужно быть "новой тобой": старая ты прекрасна, она дошла досюда.</p>
    
    <p>Найди солнечный квадрат на полу (помнишь Миссис Кошку?). Ляг в него. Полежи, и съешь хлеба с селедкой.</p>
    
    <p>С Новым годом. Ты молодец. 🐱</p>
    <img src="${p.nyMeme1}" />
  `,zebra_message:`
    <h3>1 января. И вот мы здесь 🌅</h3>
    <img src="${p.nyMeme4}" />
    <p>Пережили 2025 и встретили 2026. Время - это социальный конструкт, но что-то героическое в этом безусловно есть.</p>
    <p>Сегодня не нужно никуда бежать, и даже не нужно начинать новую жизнь. Выпить кофе будет в самый раз)</p>
    <img src="${p.nyMeme2}" />
    <h3>Инструкция на сегодня 📋</h3>
    
    <p><strong>1. Подышать.</strong></p>
    <ul>
      <li>Глубокий вдох (4 счёта)</li>
      <li>Задержка (4 счёта)</li>
      <li>Выдох (6 счётов)</li>
      <li>Повтори 3 раза</li>
    </ul>
    <img src="${p.nyMeme6}" />
    <p><strong>2. Никаких "надо":</strong></p>
    <ul>
      <li>Не строй планы на год</li>
      <li>Не чувствуй вину за лежание</li>
      <li>Сегодня — день безделья, официально.</li>
    </ul>
    
    <img src="${p.nyMeme7}" />
    
    
    <p>Совершенно не помню, какой у тебя сегодня кофе. У меня вообще нет уверенности, что это кофе - но если так, то можно запивать им какой-нибудь оливье)</p>
    <p>Хотя бы в тканевой маске для волос я уверена! Итак:</p>
    
    <h3>Тканевая маска для лица 🎭</h3>
    <img src="${p.nyMeme8}" />
    <ul>
      <li>Маска из <strong>нетканого материала</strong> (спанлейс — смесь вискозы и полиэстера)</li>
      <li>Пропитана сывороткой с активными компонентами</li>
      <li><strong>1980, Южная Корея</strong> — компания <strong>Nox Bellcow</strong> создала технологию пропитки нетканого материала</li>
      <li>1990-2000-е: бум в Азии (Корея, Япония)</li>
      <li>2010-е: весь мир помешался на K-beauty → маски везде!</li>
      <li>Сейчас: мировой рынок $1+ миллиард в год</li>
    </ul>
    <img src="${p.nyMeme9}" />
    
    <p><strong>Как работает:</strong></p>
    <ul>
      <li>Нетканый материал плотно прилегает к коже и создаёт "окклюзию" (закрывает поры) → ингредиенты проникают глубже</li>
      <li>Сыворотка не испаряется (как крем на воздухе)</li>
      <li>15-20 минут → кожа впитывает максимум</li>
      <li>20 минут принудительного отдыха!</li>
    </ul>
    
    <p><strong>Философия маски:</strong> Нельзя говорить, смотреть в телефон (ага-ага, думаю я. Никакая чертова маска не будет указывать мне, что делать!..). Можно только лежать и дышать. Это медитация под видом ухода за кожей.</p>
    
    <img src="${p.nyMeme5}" />
    <h3>Послание на 1 января 💌</h3>
    
    <p>Ты дожила до 2026. Сегодня не нужно быть "новой тобой": старая ты прекрасна, она дошла досюда.</p>
    
    <p>Найди солнечный квадрат на полу (помнишь Миссис Кошку?). Ляг в него. Полежи, и съешь какого-нибудь серпуховского оливье.</p>
    
    <p>С Новым годом. Ты молодец. 🐱</p>
    <img src="${p.nyMeme1}" />
  `},{day:14,date:"2026-01-02",tanya_gift:"Dozo Coffee",zebra_gift:"Dozo Coffee (х2)",tanya_bonus:"Цветная шоколадка",zebra_bonus:"Цветная шоколадка (х2)",title:"День 13",tanya_message:"<p>Подарок: Dozo Coffee</p><p>Бонус: Цветная шоколадка</p>",zebra_message:"<p>Подарок: Dozo Coffee (х2)</p><p>Бонус: Цветная шоколадка (х2)</p>"},{day:15,date:"2026-01-03",tanya_gift:"Camera Obscura",zebra_gift:"Camera Obscura (х2)",tanya_bonus:"Сироп Острый мёд",zebra_bonus:"Сироп Острый мёд (х2)",title:"День 14",tanya_message:"<p>Подарок: Camera Obscura</p><p>Бонус: Сироп Острый мёд</p>",zebra_message:"<p>Подарок: Camera Obscura (х2)</p><p>Бонус: Сироп Острый мёд (х2)</p>"},{day:16,date:"2026-01-04",tanya_gift:"Сова-концентрат",zebra_gift:"Сова-концентрат",tanya_bonus:"Сироп Мисо-карамель",zebra_bonus:"Сироп Мисо-карамель",title:"День 15",tanya_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>",zebra_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>"},{day:17,date:"2026-01-05",tanya_gift:"Yellow Submarine",zebra_gift:"Yellow Submarine (х2)",tanya_bonus:"Протеиновое печенье",zebra_bonus:"Протеиновое печенье (х2)",title:"День 16",tanya_message:"<p>Подарок: Yellow Submarine</p><p>Бонус: Протеиновое печенье</p>",zebra_message:"<p>Подарок: Yellow Submarine (х2)</p><p>Бонус: Протеиновое печенье (х2)</p>"},{day:18,date:"2026-01-06",tanya_gift:"Турецкий Mehmet Efendi",zebra_gift:"Турецкий Mehmet Efendi (х2)",tanya_bonus:"Матча латте",zebra_bonus:"Матча латте (х2)",title:"День 17",tanya_message:"<p>Подарок: Турецкий Mehmet Efendi</p><p>Бонус: Матча латте</p>",zebra_message:"<p>Подарок: Турецкий Mehmet Efendi (х2)</p><p>Бонус: Матча латте (х2)</p>"},{day:19,date:"2026-01-07",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Шоколадная бомбочка",zebra_bonus:"Шоколадная бомбочка (х2)",title:"День 18",tanya_message:"<p>Подарок: Круиз: по-венски</p><p>Бонус: Шоколадная бомбочка</p>",zebra_message:"<p>Подарок: Круиз: по-индийски (х2)</p><p>Бонус: Шоколадная бомбочка (х2)</p>"},{day:20,date:"2026-01-08",tanya_gift:"Mitsumoto японский",zebra_gift:"Mitsumoto японский (х2)",tanya_bonus:"Рождественский чай",zebra_bonus:"Рождественский чай (х2)",title:"День 19",tanya_message:"<p>Подарок: Mitsumoto японский</p><p>Бонус: Рождественский чай</p>",zebra_message:"<p>Подарок: Mitsumoto японский (х2)</p><p>Бонус: Рождественский чай (х2)</p>"},{day:21,date:"2026-01-09",tanya_gift:"KopiCat Вьетнам",zebra_gift:"KopiCat Вьетнам (х2)",tanya_bonus:"Экзотический чай",zebra_bonus:"Экзотический чай (х2)",title:"День 20",tanya_message:"<p>Подарок: KopiCat Вьетнам</p><p>Бонус: Экзотический чай</p>",zebra_message:"<p>Подарок: KopiCat Вьетнам (х2)</p><p>Бонус: Экзотический чай (х2)</p>"},{day:22,date:"2026-01-10",tanya_gift:"Армянский 3в1",zebra_gift:"Армянский 3в1 (х2)",tanya_bonus:"Миндальный Вкусвилл",zebra_bonus:"Миндальный Вкусвилл (х2)",title:"День 21",tanya_message:"<p>Подарок: Армянский 3в1</p><p>Бонус: Миндальный Вкусвилл</p>",zebra_message:"<p>Подарок: Армянский 3в1 (х2)</p><p>Бонус: Миндальный Вкусвилл (х2)</p>"},{day:23,date:"2026-01-11",tanya_gift:"Декаф Питерский",zebra_gift:"Декаф IL DA DA MA",tanya_bonus:"Чай-книга гаданий",zebra_bonus:"Чай-книга гаданий (х2)",title:"День 22",tanya_message:"<p>Подарок: Декаф Питерский</p><p>Бонус: Чай-книга гаданий</p>",zebra_message:"<p>Подарок: Декаф IL DA DA MA</p><p>Бонус: Чай-книга гаданий (х2)</p>"},{day:24,date:"2026-01-12",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:"<p>Подарок: Декаф Гватемала</p><p>Бонус: Бэггинс кофе</p>",zebra_message:"<p>Подарок: Декаф Мексика (х2)</p><p>Бонус: Бэггинс кофе (х2)</p>"},{day:25,date:"2026-01-13",tanya_gift:"Рождественский с лошадью",zebra_gift:"Рождественский с лошадью (х2)",tanya_bonus:"Какао с опоссумом",zebra_bonus:"Какао с опоссумом (х2)",title:"День 24",tanya_message:"<p>Подарок: Рождественский с лошадью</p><p>Бонус: Какао с опоссумом</p>",zebra_message:"<p>Подарок: Рождественский с лошадью (х2)</p><p>Бонус: Какао с опоссумом (х2)</p>"},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function t1({currentDate:v,userName:w}){const[C,g]=zl.useState(()=>qg()),[E,x]=zl.useState(null),Y=O=>{const N=Qi(O);if(Li(N,v)&&(x(O),!C.has(O))){const K=Xm(O);g(K)}},P=()=>{x(null)},T=[...Array.from({length:25},(O,N)=>N+1)].sort((O,N)=>{const K=Qi(O),yl=Qi(N),vl=mo(K,v),_l=mo(yl,v),Ul=C.has(O),bl=C.has(N),El=Li(K,v),sl=Li(yl,v),Tl=El&&!Ul,Zl=sl&&!bl,Sl=vl&&Ul,J=_l&&bl,Rl=!El,$l=!sl,Ft=Ul&&!vl&&El,pt=bl&&!_l&&sl;return Tl&&!Zl?-1:!Tl&&Zl?1:Tl&&Zl?O-N:Sl&&!J?-1:!Sl&&J?1:Rl&&!$l?-1:!Rl&&$l?1:Rl&&$l||Ft&&pt?O-N:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:T.map(O=>{const N=Qi(O),K=Li(N,v),yl=C.has(O),vl=mo(N,v);return d.jsx(Wm,{windowNumber:O,isActive:K,isOpened:yl,isExactMatch:vl,onClick:()=>Y(O)},O)})}),E!==null&&(()=>{const O=l1[E-1],N=w==="Tanya"?O.tanya_message:w==="Zebra"?O.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(Fm,{windowNumber:E,message:N,onClose:P})})()]})}function e1(){const[v,w]=zl.useState(!1),C=zl.useRef(null),[g,E]=zl.useState(!1);zl.useEffect(()=>{const Y=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",Y),Y==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),E(!0))},[]),zl.useEffect(()=>{if(!g)return;const Y=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),w(!0),E(!1),window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)};return window.addEventListener("pointerdown",Y,{once:!0}),window.addEventListener("keydown",Y,{once:!0}),()=>{window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)}},[g]),zl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",v,"ref=",C.current),!C.current)return;const Y=C.current;if(v)console.debug("[AudioControls] calling play()"),Y.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),E(!0))});else{console.debug("[AudioControls] calling pause()");try{Y.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[v]);const x=()=>{const Y=!v;console.debug("[AudioControls] toggleMusic ->",Y),w(Y),localStorage.setItem("musicEnabled",String(Y))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${v?"audio-active":""}`,onClick:x,title:"Toggle Christmas Music",children:[v?d.jsx(Hm,{size:20}):d.jsx(Bm,{size:20}),d.jsx(Cm,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:C,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:Y=>console.error("[AudioControls] audio event: error",Y)})]})}function a1(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((v,w)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},w))})}const n1=()=>new Date;function i1(){const[v,w]=zl.useState(()=>{const x=localStorage.getItem("adventCalendarUser");return x==="Tanya"||x==="Zebra"?x:(localStorage.clear(),null)}),[C,g]=zl.useState(n1),E=x=>{localStorage.clear(),w(x),localStorage.setItem("adventCalendarUser",x)};return zl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);g(U)}catch(Y){console.error("Failed to fetch current date:",Y),g(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx(Lm,{}),d.jsx(a1,{}),d.jsx(e1,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(Qm,{userName:v,onUserSelect:E}),d.jsx(t1,{currentDate:C,userName:v})]})]})}vm.createRoot(document.getElementById("root")).render(d.jsx(zl.StrictMode,{children:d.jsx(i1,{})}));
