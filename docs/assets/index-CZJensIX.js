(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))g(E);new MutationObserver(E=>{for(const w of E)if(w.type==="childList")for(const q of w.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&g(q)}).observe(document,{childList:!0,subtree:!0});function C(E){const w={};return E.integrity&&(w.integrity=E.integrity),E.referrerPolicy&&(w.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?w.credentials="include":E.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function g(E){if(E.ep)return;E.ep=!0;const w=C(E);fetch(E.href,w)}})();var cc={exports:{}},_n={};var bg;function oh(){if(bg)return _n;bg=1;var y=Symbol.for("react.transitional.element"),M=Symbol.for("react.fragment");function C(g,E,w){var q=null;if(w!==void 0&&(q=""+w),E.key!==void 0&&(q=""+E.key),"key"in E){w={};for(var P in E)P!=="key"&&(w[P]=E[P])}else w=E;return E=w.ref,{$$typeof:y,type:g,key:q,ref:E!==void 0?E:null,props:w}}return _n.Fragment=M,_n.jsx=C,_n.jsxs=C,_n}var Sg;function fh(){return Sg||(Sg=1,cc.exports=oh()),cc.exports}var d=fh(),oc={exports:{}},Q={};var zg;function rh(){if(zg)return Q;zg=1;var y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),q=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),K=Symbol.iterator;function yl(f){return f===null||typeof f!="object"?null:(f=K&&f[K]||f["@@iterator"],typeof f=="function"?f:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ul={};function bl(f,T,N){this.props=f,this.context=T,this.refs=Ul,this.updater=N||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(f,T){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,T,"setState")},bl.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Ml(){}Ml.prototype=bl.prototype;function sl(f,T,N){this.props=f,this.context=T,this.refs=Ul,this.updater=N||vl}var Al=sl.prototype=new Ml;Al.constructor=sl,_l(Al,bl.prototype),Al.isPureReactComponent=!0;var Ll=Array.isArray;function Sl(){}var J={H:null,A:null,T:null,S:null},Rl=Object.prototype.hasOwnProperty;function kl(f,T,N){var H=N.ref;return{$$typeof:y,type:f,key:T,ref:H!==void 0?H:null,props:N}}function Ft(f,T){return kl(f.type,T,f.props)}function dt(f){return typeof f=="object"&&f!==null&&f.$$typeof===y}function $l(f){var T={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(N){return T[N]})}var Ta=/\/+/g;function jt(f,T){return typeof f=="object"&&f!==null&&f.key!=null?$l(""+f.key):T.toString(36)}function Tt(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(Sl,Sl):(f.status="pending",f.then(function(T){f.status==="pending"&&(f.status="fulfilled",f.value=T)},function(T){f.status==="pending"&&(f.status="rejected",f.reason=T)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function S(f,T,N,H,Z){var k=typeof f;(k==="undefined"||k==="boolean")&&(f=null);var nl=!1;if(f===null)nl=!0;else switch(k){case"bigint":case"string":case"number":nl=!0;break;case"object":switch(f.$$typeof){case y:case M:nl=!0;break;case O:return nl=f._init,S(nl(f._payload),T,N,H,Z)}}if(nl)return Z=Z(f),nl=H===""?"."+jt(f,0):H,Ll(Z)?(N="",nl!=null&&(N=nl.replace(Ta,"$&/")+"/"),S(Z,T,N,"",function(Oe){return Oe})):Z!=null&&(dt(Z)&&(Z=Ft(Z,N+(Z.key==null||f&&f.key===Z.key?"":(""+Z.key).replace(Ta,"$&/")+"/")+nl)),T.push(Z)),1;nl=0;var Kl=H===""?".":H+":";if(Ll(f))for(var Dl=0;Dl<f.length;Dl++)H=f[Dl],k=Kl+jt(H,Dl),nl+=S(H,T,N,k,Z);else if(Dl=yl(f),typeof Dl=="function")for(f=Dl.call(f),Dl=0;!(H=f.next()).done;)H=H.value,k=Kl+jt(H,Dl++),nl+=S(H,T,N,k,Z);else if(k==="object"){if(typeof f.then=="function")return S(Tt(f),T,N,H,Z);throw T=String(f),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return nl}function D(f,T,N){if(f==null)return f;var H=[],Z=0;return S(f,H,"","",function(k){return T.call(N,k,Z++)}),H}function G(f){if(f._status===-1){var T=f._result;T=T(),T.then(function(N){(f._status===0||f._status===-1)&&(f._status=1,f._result=N)},function(N){(f._status===0||f._status===-1)&&(f._status=2,f._result=N)}),f._status===-1&&(f._status=0,f._result=T)}if(f._status===1)return f._result.default;throw f._result}var cl=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)},gl={map:D,forEach:function(f,T,N){D(f,function(){T.apply(this,arguments)},N)},count:function(f){var T=0;return D(f,function(){T++}),T},toArray:function(f){return D(f,function(T){return T})||[]},only:function(f){if(!dt(f))throw Error("React.Children.only expected to receive a single React element child.");return f}};return Q.Activity=j,Q.Children=gl,Q.Component=bl,Q.Fragment=C,Q.Profiler=E,Q.PureComponent=sl,Q.StrictMode=g,Q.Suspense=x,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,Q.__COMPILER_RUNTIME={__proto__:null,c:function(f){return J.H.useMemoCache(f)}},Q.cache=function(f){return function(){return f.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(f,T,N){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var H=_l({},f.props),Z=f.key;if(T!=null)for(k in T.key!==void 0&&(Z=""+T.key),T)!Rl.call(T,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&T.ref===void 0||(H[k]=T[k]);var k=arguments.length-2;if(k===1)H.children=N;else if(1<k){for(var nl=Array(k),Kl=0;Kl<k;Kl++)nl[Kl]=arguments[Kl+2];H.children=nl}return kl(f.type,Z,H)},Q.createContext=function(f){return f={$$typeof:q,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:w,_context:f},f},Q.createElement=function(f,T,N){var H,Z={},k=null;if(T!=null)for(H in T.key!==void 0&&(k=""+T.key),T)Rl.call(T,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Z[H]=T[H]);var nl=arguments.length-2;if(nl===1)Z.children=N;else if(1<nl){for(var Kl=Array(nl),Dl=0;Dl<nl;Dl++)Kl[Dl]=arguments[Dl+2];Z.children=Kl}if(f&&f.defaultProps)for(H in nl=f.defaultProps,nl)Z[H]===void 0&&(Z[H]=nl[H]);return kl(f,k,Z)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(f){return{$$typeof:P,render:f}},Q.isValidElement=dt,Q.lazy=function(f){return{$$typeof:O,_payload:{_status:-1,_result:f},_init:G}},Q.memo=function(f,T){return{$$typeof:_,type:f,compare:T===void 0?null:T}},Q.startTransition=function(f){var T=J.T,N={};J.T=N;try{var H=f(),Z=J.S;Z!==null&&Z(N,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Sl,cl)}catch(k){cl(k)}finally{T!==null&&N.types!==null&&(T.types=N.types),J.T=T}},Q.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},Q.use=function(f){return J.H.use(f)},Q.useActionState=function(f,T,N){return J.H.useActionState(f,T,N)},Q.useCallback=function(f,T){return J.H.useCallback(f,T)},Q.useContext=function(f){return J.H.useContext(f)},Q.useDebugValue=function(){},Q.useDeferredValue=function(f,T){return J.H.useDeferredValue(f,T)},Q.useEffect=function(f,T){return J.H.useEffect(f,T)},Q.useEffectEvent=function(f){return J.H.useEffectEvent(f)},Q.useId=function(){return J.H.useId()},Q.useImperativeHandle=function(f,T,N){return J.H.useImperativeHandle(f,T,N)},Q.useInsertionEffect=function(f,T){return J.H.useInsertionEffect(f,T)},Q.useLayoutEffect=function(f,T){return J.H.useLayoutEffect(f,T)},Q.useMemo=function(f,T){return J.H.useMemo(f,T)},Q.useOptimistic=function(f,T){return J.H.useOptimistic(f,T)},Q.useReducer=function(f,T,N){return J.H.useReducer(f,T,N)},Q.useRef=function(f){return J.H.useRef(f)},Q.useState=function(f){return J.H.useState(f)},Q.useSyncExternalStore=function(f,T,N){return J.H.useSyncExternalStore(f,T,N)},Q.useTransition=function(){return J.H.useTransition()},Q.version="19.2.3",Q}var _g;function pc(){return _g||(_g=1,oc.exports=rh()),oc.exports}var zl=pc(),fc={exports:{}},An={},rc={exports:{}},gc={};var Ag;function gh(){return Ag||(Ag=1,(function(y){function M(S,D){var G=S.length;S.push(D);l:for(;0<G;){var cl=G-1>>>1,gl=S[cl];if(0<E(gl,D))S[cl]=D,S[G]=gl,G=cl;else break l}}function C(S){return S.length===0?null:S[0]}function g(S){if(S.length===0)return null;var D=S[0],G=S.pop();if(G!==D){S[0]=G;l:for(var cl=0,gl=S.length,f=gl>>>1;cl<f;){var T=2*(cl+1)-1,N=S[T],H=T+1,Z=S[H];if(0>E(N,G))H<gl&&0>E(Z,N)?(S[cl]=Z,S[H]=G,cl=H):(S[cl]=N,S[T]=G,cl=T);else if(H<gl&&0>E(Z,G))S[cl]=Z,S[H]=G,cl=H;else break l}}return D}function E(S,D){var G=S.sortIndex-D.sortIndex;return G!==0?G:S.id-D.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var w=performance;y.unstable_now=function(){return w.now()}}else{var q=Date,P=q.now();y.unstable_now=function(){return q.now()-P}}var x=[],_=[],O=1,j=null,K=3,yl=!1,vl=!1,_l=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,Ml=typeof clearTimeout=="function"?clearTimeout:null,sl=typeof setImmediate<"u"?setImmediate:null;function Al(S){for(var D=C(_);D!==null;){if(D.callback===null)g(_);else if(D.startTime<=S)g(_),D.sortIndex=D.expirationTime,M(x,D);else break;D=C(_)}}function Ll(S){if(_l=!1,Al(S),!vl)if(C(x)!==null)vl=!0,Sl||(Sl=!0,$l());else{var D=C(_);D!==null&&Tt(Ll,D.startTime-S)}}var Sl=!1,J=-1,Rl=5,kl=-1;function Ft(){return Ul?!0:!(y.unstable_now()-kl<Rl)}function dt(){if(Ul=!1,Sl){var S=y.unstable_now();kl=S;var D=!0;try{l:{vl=!1,_l&&(_l=!1,Ml(J),J=-1),yl=!0;var G=K;try{t:{for(Al(S),j=C(x);j!==null&&!(j.expirationTime>S&&Ft());){var cl=j.callback;if(typeof cl=="function"){j.callback=null,K=j.priorityLevel;var gl=cl(j.expirationTime<=S);if(S=y.unstable_now(),typeof gl=="function"){j.callback=gl,Al(S),D=!0;break t}j===C(x)&&g(x),Al(S)}else g(x);j=C(x)}if(j!==null)D=!0;else{var f=C(_);f!==null&&Tt(Ll,f.startTime-S),D=!1}}break l}finally{j=null,K=G,yl=!1}D=void 0}}finally{D?$l():Sl=!1}}}var $l;if(typeof sl=="function")$l=function(){sl(dt)};else if(typeof MessageChannel<"u"){var Ta=new MessageChannel,jt=Ta.port2;Ta.port1.onmessage=dt,$l=function(){jt.postMessage(null)}}else $l=function(){bl(dt,0)};function Tt(S,D){J=bl(function(){S(y.unstable_now())},D)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(S){S.callback=null},y.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rl=0<S?Math.floor(1e3/S):5},y.unstable_getCurrentPriorityLevel=function(){return K},y.unstable_next=function(S){switch(K){case 1:case 2:case 3:var D=3;break;default:D=K}var G=K;K=D;try{return S()}finally{K=G}},y.unstable_requestPaint=function(){Ul=!0},y.unstable_runWithPriority=function(S,D){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var G=K;K=S;try{return D()}finally{K=G}},y.unstable_scheduleCallback=function(S,D,G){var cl=y.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?cl+G:cl):G=cl,S){case 1:var gl=-1;break;case 2:gl=250;break;case 5:gl=1073741823;break;case 4:gl=1e4;break;default:gl=5e3}return gl=G+gl,S={id:O++,callback:D,priorityLevel:S,startTime:G,expirationTime:gl,sortIndex:-1},G>cl?(S.sortIndex=G,M(_,S),C(x)===null&&S===C(_)&&(_l?(Ml(J),J=-1):_l=!0,Tt(Ll,G-cl))):(S.sortIndex=gl,M(x,S),vl||yl||(vl=!0,Sl||(Sl=!0,$l()))),S},y.unstable_shouldYield=Ft,y.unstable_wrapCallback=function(S){var D=K;return function(){var G=K;K=D;try{return S.apply(this,arguments)}finally{K=G}}}})(gc)),gc}var Tg;function dh(){return Tg||(Tg=1,rc.exports=gh()),rc.exports}var dc={exports:{}},Vl={};var Eg;function hh(){if(Eg)return Vl;Eg=1;var y=pc();function M(x){var _="https://react.dev/errors/"+x;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)_+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+x+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(){}var g={d:{f:C,r:function(){throw Error(M(522))},D:C,C,L:C,m:C,X:C,S:C,M:C},p:0,findDOMNode:null},E=Symbol.for("react.portal");function w(x,_,O){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:j==null?null:""+j,children:x,containerInfo:_,implementation:O}}var q=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(x,_){if(x==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Vl.createPortal=function(x,_){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(M(299));return w(x,_,null,O)},Vl.flushSync=function(x){var _=q.T,O=g.p;try{if(q.T=null,g.p=2,x)return x()}finally{q.T=_,g.p=O,g.d.f()}},Vl.preconnect=function(x,_){typeof x=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,g.d.C(x,_))},Vl.prefetchDNS=function(x){typeof x=="string"&&g.d.D(x)},Vl.preinit=function(x,_){if(typeof x=="string"&&_&&typeof _.as=="string"){var O=_.as,j=P(O,_.crossOrigin),K=typeof _.integrity=="string"?_.integrity:void 0,yl=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;O==="style"?g.d.S(x,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:j,integrity:K,fetchPriority:yl}):O==="script"&&g.d.X(x,{crossOrigin:j,integrity:K,fetchPriority:yl,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Vl.preinitModule=function(x,_){if(typeof x=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var O=P(_.as,_.crossOrigin);g.d.M(x,{crossOrigin:O,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&g.d.M(x)},Vl.preload=function(x,_){if(typeof x=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var O=_.as,j=P(O,_.crossOrigin);g.d.L(x,O,{crossOrigin:j,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Vl.preloadModule=function(x,_){if(typeof x=="string")if(_){var O=P(_.as,_.crossOrigin);g.d.m(x,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:O,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else g.d.m(x)},Vl.requestFormReset=function(x){g.d.r(x)},Vl.unstable_batchedUpdates=function(x,_){return x(_)},Vl.useFormState=function(x,_,O){return q.H.useFormState(x,_,O)},Vl.useFormStatus=function(){return q.H.useHostTransitionStatus()},Vl.version="19.2.3",Vl}var Mg;function ph(){if(Mg)return dc.exports;Mg=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(M){console.error(M)}}return y(),dc.exports=hh(),dc.exports}var Dg;function mh(){if(Dg)return An;Dg=1;var y=dh(),M=pc(),C=ph();function g(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function w(l){var t=l,a=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(a=t.return),l=t.return;while(l)}return t.tag===3?a:null}function q(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function x(l){if(w(l)!==l)throw Error(g(188))}function _(l){var t=l.alternate;if(!t){if(t=w(l),t===null)throw Error(g(188));return t!==l?null:l}for(var a=l,e=t;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(e=n.return,e!==null){a=e;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return x(n),l;if(u===e)return x(n),t;u=u.sibling}throw Error(g(188))}if(a.return!==e.return)a=n,e=u;else{for(var i=!1,s=n.child;s;){if(s===a){i=!0,a=n,e=u;break}if(s===e){i=!0,e=n,a=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===a){i=!0,a=u,e=n;break}if(s===e){i=!0,e=u,a=n;break}s=s.sibling}if(!i)throw Error(g(189))}}if(a.alternate!==e)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?l:t}function O(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=O(l),t!==null)return t;l=l.sibling}return null}var j=Object.assign,K=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Ml=Symbol.for("react.consumer"),sl=Symbol.for("react.context"),Al=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Rl=Symbol.for("react.lazy"),kl=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function $l(l){return l===null||typeof l!="object"?null:(l=dt&&l[dt]||l["@@iterator"],typeof l=="function"?l:null)}var Ta=Symbol.for("react.client.reference");function jt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ta?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case _l:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case Ll:return"Suspense";case Sl:return"SuspenseList";case kl:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case sl:return l.displayName||"Context";case Ml:return(l._context.displayName||"Context")+".Consumer";case Al:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case J:return t=l.displayName||null,t!==null?t:jt(l.type)||"Memo";case Rl:t=l._payload,l=l._init;try{return jt(l(t))}catch{}}return null}var Tt=Array.isArray,S=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},cl=[],gl=-1;function f(l){return{current:l}}function T(l){0>gl||(l.current=cl[gl],cl[gl]=null,gl--)}function N(l,t){gl++,cl[gl]=l.current,l.current=t}var H=f(null),Z=f(null),k=f(null),nl=f(null);function Kl(l,t){switch(N(k,t),N(Z,l),N(H,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Qr(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Qr(t),l=Zr(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}T(H),N(H,l)}function Dl(){T(H),T(Z),T(k)}function Oe(l){l.memoizedState!==null&&N(nl,l);var t=H.current,a=Zr(t,l.type);t!==a&&(N(Z,l),N(H,a))}function Tn(l){Z.current===l&&(T(H),T(Z)),nl.current===l&&(T(nl),vn._currentValue=G)}var Lu,mc;function Ea(l){if(Lu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Lu=t&&t[1]||"",mc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lu+l+mc}var Vu=!1;function Ku(l,t){if(!l||Vu)return"";Vu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var m=v}Reflect.construct(l,[],A)}else{try{A.call()}catch(v){m=v}l.call(A.prototype)}}else{try{throw Error()}catch(v){m=v}(A=l())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=e.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var c=i.split(`
`),p=s.split(`
`);for(n=e=0;e<c.length&&!c[e].includes("DetermineComponentFrameRoot");)e++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(e===c.length||n===p.length)for(e=c.length-1,n=p.length-1;1<=e&&0<=n&&c[e]!==p[n];)n--;for(;1<=e&&0<=n;e--,n--)if(c[e]!==p[n]){if(e!==1||n!==1)do if(e--,n--,0>n||c[e]!==p[n]){var b=`
`+c[e].replace(" at new "," at ");return l.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",l.displayName)),b}while(1<=e&&0<=n);break}}}finally{Vu=!1,Error.prepareStackTrace=a}return(a=l?l.displayName||l.name:"")?Ea(a):""}function Gg(l,t){switch(l.tag){case 26:case 27:case 5:return Ea(l.type);case 16:return Ea("Lazy");case 13:return l.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Ku(l.type,!1);case 11:return Ku(l.type.render,!1);case 1:return Ku(l.type,!0);case 31:return Ea("Activity");default:return""}}function yc(l){try{var t="",a=null;do t+=Gg(l,a),a=l,l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ju=Object.prototype.hasOwnProperty,ku=y.unstable_scheduleCallback,$u=y.unstable_cancelCallback,Xg=y.unstable_shouldYield,Qg=y.unstable_requestPaint,et=y.unstable_now,Zg=y.unstable_getCurrentPriorityLevel,vc=y.unstable_ImmediatePriority,bc=y.unstable_UserBlockingPriority,En=y.unstable_NormalPriority,Lg=y.unstable_LowPriority,Sc=y.unstable_IdlePriority,Vg=y.log,Kg=y.unstable_setDisableYieldValue,Ne=null,nt=null;function It(l){if(typeof Vg=="function"&&Kg(l),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Ne,l)}catch{}}var ut=Math.clz32?Math.clz32:$g,Jg=Math.log,kg=Math.LN2;function $g(l){return l>>>=0,l===0?32:31-(Jg(l)/kg|0)|0}var Mn=256,Dn=262144,On=4194304;function Ma(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Nn(l,t,a){var e=l.pendingLanes;if(e===0)return 0;var n=0,u=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var s=e&134217727;return s!==0?(e=s&~u,e!==0?n=Ma(e):(i&=s,i!==0?n=Ma(i):a||(a=s&~l,a!==0&&(n=Ma(a))))):(s=e&~u,s!==0?n=Ma(s):i!==0?n=Ma(i):a||(a=e&~l,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,a=t&-t,u>=a||u===32&&(a&4194048)!==0)?t:n}function Ce(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wg(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(){var l=On;return On<<=1,(On&62914560)===0&&(On=4194304),l}function Wu(l){for(var t=[],a=0;31>a;a++)t.push(l);return t}function we(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Fg(l,t,a,e,n,u){var i=l.pendingLanes;l.pendingLanes=a,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=a,l.entangledLanes&=a,l.errorRecoveryDisabledLanes&=a,l.shellSuspendCounter=0;var s=l.entanglements,c=l.expirationTimes,p=l.hiddenUpdates;for(a=i&~a;0<a;){var b=31-ut(a),A=1<<b;s[b]=0,c[b]=-1;var m=p[b];if(m!==null)for(p[b]=null,b=0;b<m.length;b++){var v=m[b];v!==null&&(v.lane&=-536870913)}a&=~A}e!==0&&_c(l,e,0),u!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=u&~(i&~t))}function _c(l,t,a){l.pendingLanes|=t,l.suspendedLanes&=~t;var e=31-ut(t);l.entangledLanes|=t,l.entanglements[e]=l.entanglements[e]|1073741824|a&261930}function Ac(l,t){var a=l.entangledLanes|=t;for(l=l.entanglements;a;){var e=31-ut(a),n=1<<e;n&t|l[e]&t&&(l[e]|=t),a&=~n}}function Tc(l,t){var a=t&-t;return a=(a&42)!==0?1:Fu(a),(a&(l.suspendedLanes|t))!==0?0:a}function Fu(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Iu(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Ec(){var l=D.p;return l!==0?l:(l=window.event,l===void 0?32:gg(l.type))}function Mc(l,t){var a=D.p;try{return D.p=l,t()}finally{D.p=a}}var Pt=Math.random().toString(36).slice(2),Yl="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,La="__reactContainer$"+Pt,Pu="__reactEvents$"+Pt,Ig="__reactListeners$"+Pt,Pg="__reactHandles$"+Pt,Dc="__reactResources$"+Pt,je="__reactMarker$"+Pt;function li(l){delete l[Yl],delete l[Wl],delete l[Pu],delete l[Ig],delete l[Pg]}function Va(l){var t=l[Yl];if(t)return t;for(var a=l.parentNode;a;){if(t=a[La]||a[Yl]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(l=Wr(l);l!==null;){if(a=l[Yl])return a;l=Wr(l)}return t}l=a,a=l.parentNode}return null}function Ka(l){if(l=l[Yl]||l[La]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function xe(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(g(33))}function Ja(l){var t=l[Dc];return t||(t=l[Dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ql(l){l[je]=!0}var Oc=new Set,Nc={};function Da(l,t){ka(l,t),ka(l+"Capture",t)}function ka(l,t){for(Nc[l]=t,l=0;l<t.length;l++)Oc.add(t[l])}var ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Cc={},wc={};function td(l){return Ju.call(wc,l)?!0:Ju.call(Cc,l)?!1:ld.test(l)?wc[l]=!0:(Cc[l]=!0,!1)}function Cn(l,t,a){if(td(t))if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+a)}}function wn(l,t,a){if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+a)}}function xt(l,t,a,e){if(e===null)l.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(a);return}l.setAttributeNS(t,a,""+e)}}function ht(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function jc(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ad(l,t,a){var e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,u=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,u.call(this,i)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ti(l){if(!l._valueTracker){var t=jc(l)?"checked":"value";l._valueTracker=ad(l,t,""+l[t])}}function xc(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var a=t.getValue(),e="";return l&&(e=jc(l)?l.checked?"true":"false":l.value),l=e,l!==a?(t.setValue(l),!0):!1}function jn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ed=/[\n"\\]/g;function pt(l){return l.replace(ed,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ai(l,t,a,e,n,u,i,s){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+ht(t)):l.value!==""+ht(t)&&(l.value=""+ht(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?ei(l,i,ht(t)):a!=null?ei(l,i,ht(a)):e!=null&&l.removeAttribute("value"),n==null&&u!=null&&(l.defaultChecked=!!u),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.name=""+ht(s):l.removeAttribute("name")}function Uc(l,t,a,e,n,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.type=u),t!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ti(l);return}a=a!=null?""+ht(a):"",t=t!=null?""+ht(t):a,s||t===l.value||(l.value=t),l.defaultValue=t}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,l.checked=s?l.checked:!!e,l.defaultChecked=!!e,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),ti(l)}function ei(l,t,a){t==="number"&&jn(l.ownerDocument)===l||l.defaultValue===""+a||(l.defaultValue=""+a)}function $a(l,t,a,e){if(l=l.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<l.length;a++)n=t.hasOwnProperty("$"+l[a].value),l[a].selected!==n&&(l[a].selected=n),n&&e&&(l[a].defaultSelected=!0)}else{for(a=""+ht(a),t=null,n=0;n<l.length;n++){if(l[n].value===a){l[n].selected=!0,e&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Hc(l,t,a){if(t!=null&&(t=""+ht(t),t!==l.value&&(l.value=t),a==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=a!=null?""+ht(a):""}function Rc(l,t,a,e){if(t==null){if(e!=null){if(a!=null)throw Error(g(92));if(Tt(e)){if(1<e.length)throw Error(g(93));e=e[0]}a=e}a==null&&(a=""),t=a}a=ht(t),l.defaultValue=a,e=l.textContent,e===a&&e!==""&&e!==null&&(l.value=e),ti(l)}function Wa(l,t){if(t){var a=l.firstChild;if(a&&a===l.lastChild&&a.nodeType===3){a.nodeValue=t;return}}l.textContent=t}var nd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qc(l,t,a){var e=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":e?l.setProperty(t,a):typeof a!="number"||a===0||nd.has(t)?t==="float"?l.cssFloat=a:l[t]=(""+a).trim():l[t]=a+"px"}function Bc(l,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(l=l.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="");for(var n in t)e=t[n],t.hasOwnProperty(n)&&a[n]!==e&&qc(l,n,e)}else for(var u in t)t.hasOwnProperty(u)&&qc(l,u,t[u])}function ni(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),id=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xn(l){return id.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var ui=null;function ii(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fa=null,Ia=null;function Yc(l){var t=Ka(l);if(t&&(l=t.stateNode)){var a=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(ai(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=l;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var e=a[t];if(e!==l&&e.form===l.form){var n=e[Wl]||null;if(!n)throw Error(g(90));ai(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)e=a[t],e.form===l.form&&xc(e)}break l;case"textarea":Hc(l,a.value,a.defaultValue);break l;case"select":t=a.value,t!=null&&$a(l,!!a.multiple,t,!1)}}}var si=!1;function Gc(l,t,a){if(si)return l(t,a);si=!0;try{var e=l(t);return e}finally{if(si=!1,(Fa!==null||Ia!==null)&&(Su(),Fa&&(t=Fa,l=Ia,Ia=Fa=null,Yc(t),l)))for(t=0;t<l.length;t++)Yc(l[t])}}function Ue(l,t){var a=l.stateNode;if(a===null)return null;var e=a[Wl]||null;if(e===null)return null;a=e[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(l=l.type,e=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!e;break l;default:l=!1}if(l)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ci=!1;if(Ht)try{var He={};Object.defineProperty(He,"passive",{get:function(){ci=!0}}),window.addEventListener("test",He,He),window.removeEventListener("test",He,He)}catch{ci=!1}var la=null,oi=null,Un=null;function Xc(){if(Un)return Un;var l,t=oi,a=t.length,e,n="value"in la?la.value:la.textContent,u=n.length;for(l=0;l<a&&t[l]===n[l];l++);var i=a-l;for(e=1;e<=i&&t[a-e]===n[u-e];e++);return Un=n.slice(l,1<e?1-e:void 0)}function Hn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Rn(){return!0}function Qc(){return!1}function Fl(l){function t(a,e,n,u,i){this._reactName=a,this._targetInst=n,this.type=e,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in l)l.hasOwnProperty(s)&&(a=l[s],this[s]=a?a(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Rn:Qc,this.isPropagationStopped=Qc,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=Fl(Oa),Re=j({},Oa,{view:0,detail:0}),sd=Fl(Re),fi,ri,qe,Bn=j({},Re,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:di,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==qe&&(qe&&l.type==="mousemove"?(fi=l.screenX-qe.screenX,ri=l.screenY-qe.screenY):ri=fi=0,qe=l),fi)},movementY:function(l){return"movementY"in l?l.movementY:ri}}),Zc=Fl(Bn),cd=j({},Bn,{dataTransfer:0}),od=Fl(cd),fd=j({},Re,{relatedTarget:0}),gi=Fl(fd),rd=j({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=Fl(rd),dd=j({},Oa,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),hd=Fl(dd),pd=j({},Oa,{data:0}),Lc=Fl(pd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vd[l])?!!t[l]:!1}function di(){return bd}var Sd=j({},Re,{key:function(l){if(l.key){var t=md[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Hn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:di,charCode:function(l){return l.type==="keypress"?Hn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Hn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),zd=Fl(Sd),_d=j({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=Fl(_d),Ad=j({},Re,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:di}),Td=Fl(Ad),Ed=j({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=Fl(Ed),Dd=j({},Bn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=Fl(Dd),Nd=j({},Oa,{newState:0,oldState:0}),Cd=Fl(Nd),wd=[9,13,27,32],hi=Ht&&"CompositionEvent"in window,Be=null;Ht&&"documentMode"in document&&(Be=document.documentMode);var jd=Ht&&"TextEvent"in window&&!Be,Kc=Ht&&(!hi||Be&&8<Be&&11>=Be),Jc=" ",kc=!1;function $c(l,t){switch(l){case"keyup":return wd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pa=!1;function xd(l,t){switch(l){case"compositionend":return Wc(t);case"keypress":return t.which!==32?null:(kc=!0,Jc);case"textInput":return l=t.data,l===Jc&&kc?null:l;default:return null}}function Ud(l,t){if(Pa)return l==="compositionend"||!hi&&$c(l,t)?(l=Xc(),Un=oi=la=null,Pa=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Hd[l.type]:t==="textarea"}function Ic(l,t,a,e){Fa?Ia?Ia.push(e):Ia=[e]:Fa=e,t=Du(t,"onChange"),0<t.length&&(a=new qn("onChange","change",null,a,e),l.push({event:a,listeners:t}))}var Ye=null,Ge=null;function Rd(l){Rr(l,0)}function Yn(l){var t=xe(l);if(xc(t))return l}function Pc(l,t){if(l==="change")return t}var lo=!1;if(Ht){var pi;if(Ht){var mi="oninput"in document;if(!mi){var to=document.createElement("div");to.setAttribute("oninput","return;"),mi=typeof to.oninput=="function"}pi=mi}else pi=!1;lo=pi&&(!document.documentMode||9<document.documentMode)}function ao(){Ye&&(Ye.detachEvent("onpropertychange",eo),Ge=Ye=null)}function eo(l){if(l.propertyName==="value"&&Yn(Ge)){var t=[];Ic(t,Ge,l,ii(l)),Gc(Rd,t)}}function qd(l,t,a){l==="focusin"?(ao(),Ye=t,Ge=a,Ye.attachEvent("onpropertychange",eo)):l==="focusout"&&ao()}function Bd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Yn(Ge)}function Yd(l,t){if(l==="click")return Yn(t)}function Gd(l,t){if(l==="input"||l==="change")return Yn(t)}function Xd(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var it=typeof Object.is=="function"?Object.is:Xd;function Xe(l,t){if(it(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var a=Object.keys(l),e=Object.keys(t);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var n=a[e];if(!Ju.call(t,n)||!it(l[n],t[n]))return!1}return!0}function no(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function uo(l,t){var a=no(l);l=0;for(var e;a;){if(a.nodeType===3){if(e=l+a.textContent.length,l<=t&&e>=t)return{node:a,offset:t-l};l=e}l:{for(;a;){if(a.nextSibling){a=a.nextSibling;break l}a=a.parentNode}a=void 0}a=no(a)}}function io(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?io(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function so(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=jn(l.document);t instanceof l.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)l=t.contentWindow;else break;t=jn(l.document)}return t}function yi(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Qd=Ht&&"documentMode"in document&&11>=document.documentMode,le=null,vi=null,Qe=null,bi=!1;function co(l,t,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bi||le==null||le!==jn(e)||(e=le,"selectionStart"in e&&yi(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Qe&&Xe(Qe,e)||(Qe=e,e=Du(vi,"onSelect"),0<e.length&&(t=new qn("onSelect","select",null,t,a),l.push({event:t,listeners:e}),t.target=le)))}function Na(l,t){var a={};return a[l.toLowerCase()]=t.toLowerCase(),a["Webkit"+l]="webkit"+t,a["Moz"+l]="moz"+t,a}var te={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionrun:Na("Transition","TransitionRun"),transitionstart:Na("Transition","TransitionStart"),transitioncancel:Na("Transition","TransitionCancel"),transitionend:Na("Transition","TransitionEnd")},Si={},oo={};Ht&&(oo=document.createElement("div").style,"AnimationEvent"in window||(delete te.animationend.animation,delete te.animationiteration.animation,delete te.animationstart.animation),"TransitionEvent"in window||delete te.transitionend.transition);function Ca(l){if(Si[l])return Si[l];if(!te[l])return l;var t=te[l],a;for(a in t)if(t.hasOwnProperty(a)&&a in oo)return Si[l]=t[a];return l}var fo=Ca("animationend"),ro=Ca("animationiteration"),go=Ca("animationstart"),Zd=Ca("transitionrun"),Ld=Ca("transitionstart"),Vd=Ca("transitioncancel"),ho=Ca("transitionend"),po=new Map,zi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zi.push("scrollEnd");function Et(l,t){po.set(l,t),Da(t,[l])}var Gn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},mt=[],ae=0,_i=0;function Xn(){for(var l=ae,t=_i=ae=0;t<l;){var a=mt[t];mt[t++]=null;var e=mt[t];mt[t++]=null;var n=mt[t];mt[t++]=null;var u=mt[t];if(mt[t++]=null,e!==null&&n!==null){var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}u!==0&&mo(a,n,u)}}function Qn(l,t,a,e){mt[ae++]=l,mt[ae++]=t,mt[ae++]=a,mt[ae++]=e,_i|=e,l.lanes|=e,l=l.alternate,l!==null&&(l.lanes|=e)}function Ai(l,t,a,e){return Qn(l,t,a,e),Zn(l)}function wa(l,t){return Qn(l,null,null,t),Zn(l)}function mo(l,t,a){l.lanes|=a;var e=l.alternate;e!==null&&(e.lanes|=a);for(var n=!1,u=l.return;u!==null;)u.childLanes|=a,e=u.alternate,e!==null&&(e.childLanes|=a),u.tag===22&&(l=u.stateNode,l===null||l._visibility&1||(n=!0)),l=u,u=u.return;return l.tag===3?(u=l.stateNode,n&&t!==null&&(n=31-ut(a),l=u.hiddenUpdates,e=l[n],e===null?l[n]=[t]:e.push(t),t.lane=a|536870912),u):null}function Zn(l){if(50<rn)throw rn=0,js=null,Error(g(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ee={};function Kd(l,t,a,e){this.tag=l,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(l,t,a,e){return new Kd(l,t,a,e)}function Ti(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var a=l.alternate;return a===null?(a=st(l.tag,t,l.key,l.mode),a.elementType=l.elementType,a.type=l.type,a.stateNode=l.stateNode,a.alternate=l,l.alternate=a):(a.pendingProps=t,a.type=l.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=l.flags&65011712,a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,t=l.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=l.sibling,a.index=l.index,a.ref=l.ref,a.refCleanup=l.refCleanup,a}function yo(l,t){l.flags&=65011714;var a=l.alternate;return a===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,t=a.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Ln(l,t,a,e,n,u){var i=0;if(e=l,typeof l=="function")Ti(l)&&(i=1);else if(typeof l=="string")i=F0(l,a,H.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case kl:return l=st(31,a,t,n),l.elementType=kl,l.lanes=u,l;case _l:return ja(a.children,n,u,t);case Ul:i=8,n|=24;break;case bl:return l=st(12,a,t,n|2),l.elementType=bl,l.lanes=u,l;case Ll:return l=st(13,a,t,n),l.elementType=Ll,l.lanes=u,l;case Sl:return l=st(19,a,t,n),l.elementType=Sl,l.lanes=u,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case sl:i=10;break l;case Ml:i=9;break l;case Al:i=11;break l;case J:i=14;break l;case Rl:i=16,e=null;break l}i=29,a=Error(g(130,l===null?"null":typeof l,"")),e=null}return t=st(i,a,t,n),t.elementType=l,t.type=e,t.lanes=u,t}function ja(l,t,a,e){return l=st(7,l,e,t),l.lanes=a,l}function Ei(l,t,a){return l=st(6,l,null,t),l.lanes=a,l}function vo(l){var t=st(18,null,null,0);return t.stateNode=l,t}function Mi(l,t,a){return t=st(4,l.children!==null?l.children:[],l.key,t),t.lanes=a,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var bo=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var a=bo.get(l);return a!==void 0?a:(t={value:l,source:t,stack:yc(t)},bo.set(l,t),t)}return{value:l,source:t,stack:yc(t)}}var ne=[],ue=0,Vn=null,Ze=0,vt=[],bt=0,ta=null,Ot=1,Nt="";function qt(l,t){ne[ue++]=Ze,ne[ue++]=Vn,Vn=l,Ze=t}function So(l,t,a){vt[bt++]=Ot,vt[bt++]=Nt,vt[bt++]=ta,ta=l;var e=Ot;l=Nt;var n=32-ut(e)-1;e&=~(1<<n),a+=1;var u=32-ut(t)+n;if(30<u){var i=n-n%5;u=(e&(1<<i)-1).toString(32),e>>=i,n-=i,Ot=1<<32-ut(t)+n|a<<n|e,Nt=u+l}else Ot=1<<u|a<<n|e,Nt=l}function Di(l){l.return!==null&&(qt(l,1),So(l,1,0))}function Oi(l){for(;l===Vn;)Vn=ne[--ue],ne[ue]=null,Ze=ne[--ue],ne[ue]=null;for(;l===ta;)ta=vt[--bt],vt[bt]=null,Nt=vt[--bt],vt[bt]=null,Ot=vt[--bt],vt[bt]=null}function zo(l,t){vt[bt++]=Ot,vt[bt++]=Nt,vt[bt++]=ta,Ot=t.id,Nt=t.overflow,ta=l}var Gl=null,hl=null,ll=!1,aa=null,St=!1,Ni=Error(g(519));function ea(l){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Le(yt(t,l)),Ni}function _o(l){var t=l.stateNode,a=l.type,e=l.memoizedProps;switch(t[Yl]=l,t[Wl]=e,a){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(a=0;a<dn.length;a++)W(dn[a],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Uc(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Rc(t,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||e.suppressHydrationWarning===!0||Gr(t.textContent,a)?(e.popover!=null&&(W("beforetoggle",t),W("toggle",t)),e.onScroll!=null&&W("scroll",t),e.onScrollEnd!=null&&W("scrollend",t),e.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ea(l,!0)}function Ao(l){for(Gl=l.return;Gl;)switch(Gl.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Gl=Gl.return}}function ie(l){if(l!==Gl)return!1;if(!ll)return Ao(l),ll=!0,!1;var t=l.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=l.type,a=!(a!=="form"&&a!=="button")||Js(l.type,l.memoizedProps)),a=!a),a&&hl&&ea(l),Ao(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));hl=$r(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));hl=$r(l)}else t===27?(t=hl,ya(l.type)?(l=Is,Is=null,hl=l):hl=t):hl=Gl?_t(l.stateNode.nextSibling):null;return!0}function xa(){hl=Gl=null,ll=!1}function Ci(){var l=aa;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),aa=null),l}function Le(l){aa===null?aa=[l]:aa.push(l)}var wi=f(null),Ua=null,Bt=null;function na(l,t,a){N(wi,t._currentValue),t._currentValue=a}function Yt(l){l._currentValue=wi.current,T(wi)}function ji(l,t,a){for(;l!==null;){var e=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),l===a)break;l=l.return}}function xi(l,t,a,e){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;l:for(;u!==null;){var s=u;u=n;for(var c=0;c<t.length;c++)if(s.context===t[c]){u.lanes|=a,s=u.alternate,s!==null&&(s.lanes|=a),ji(u.return,a,l),e||(i=null);break l}u=s.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(g(341));i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),ji(i,a,l),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===l){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function se(l,t,a,e){l=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(g(387));if(i=i.memoizedProps,i!==null){var s=n.type;it(n.pendingProps.value,i.value)||(l!==null?l.push(s):l=[s])}}else if(n===nl.current){if(i=n.alternate,i===null)throw Error(g(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(vn):l=[vn])}n=n.return}l!==null&&xi(t,l,a,e),t.flags|=262144}function Kn(l){for(l=l.firstContext;l!==null;){if(!it(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ha(l){Ua=l,Bt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Xl(l){return To(Ua,l)}function Jn(l,t){return Ua===null&&Ha(l),To(l,t)}function To(l,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Bt===null){if(l===null)throw Error(g(308));Bt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Bt=Bt.next=t;return a}var Jd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(a,e){l.push(e)}};this.abort=function(){t.aborted=!0,l.forEach(function(a){return a()})}},kd=y.unstable_scheduleCallback,$d=y.unstable_NormalPriority,Cl={$$typeof:sl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new Jd,data:new Map,refCount:0}}function Ve(l){l.refCount--,l.refCount===0&&kd($d,function(){l.controller.abort()})}var Ke=null,Hi=0,ce=0,oe=null;function Wd(l,t){if(Ke===null){var a=Ke=[];Hi=0,ce=Bs(),oe={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Hi++,t.then(Eo,Eo),t}function Eo(){if(--Hi===0&&Ke!==null){oe!==null&&(oe.status="fulfilled");var l=Ke;Ke=null,ce=0,oe=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fd(l,t){var a=[],e={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return l.then(function(){e.status="fulfilled",e.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(e.status="rejected",e.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),e}var Mo=S.S;S.S=function(l,t){fr=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wd(l,t),Mo!==null&&Mo(l,t)};var Ra=f(null);function Ri(){var l=Ra.current;return l!==null?l:dl.pooledCache}function kn(l,t){t===null?N(Ra,Ra.current):N(Ra,t.pool)}function Do(){var l=Ri();return l===null?null:{parent:Cl._currentValue,pool:l}}var fe=Error(g(460)),qi=Error(g(474)),$n=Error(g(542)),Wn={then:function(){}};function Oo(l){return l=l.status,l==="fulfilled"||l==="rejected"}function No(l,t,a){switch(a=l[a],a===void 0?l.push(t):a!==t&&(t.then(Ut,Ut),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,wo(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=dl,l!==null&&100<l.shellSuspendCounter)throw Error(g(482));l=t,l.status="pending",l.then(function(e){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=e}},function(e){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,wo(l),l}throw Ba=t,fe}}function qa(l){try{var t=l._init;return t(l._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ba=a,fe):a}}var Ba=null;function Co(){if(Ba===null)throw Error(g(459));var l=Ba;return Ba=null,l}function wo(l){if(l===fe||l===$n)throw Error(g(483))}var re=null,Je=0;function Fn(l){var t=Je;return Je+=1,re===null&&(re=[]),No(re,l,t)}function ke(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===K?Error(g(525)):(l=Object.prototype.toString.call(t),Error(g(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function jo(l){function t(r,o){if(l){var h=r.deletions;h===null?(r.deletions=[o],r.flags|=16):h.push(o)}}function a(r,o){if(!l)return null;for(;o!==null;)t(r,o),o=o.sibling;return null}function e(r){for(var o=new Map;r!==null;)r.key!==null?o.set(r.key,r):o.set(r.index,r),r=r.sibling;return o}function n(r,o){return r=Rt(r,o),r.index=0,r.sibling=null,r}function u(r,o,h){return r.index=h,l?(h=r.alternate,h!==null?(h=h.index,h<o?(r.flags|=67108866,o):h):(r.flags|=67108866,o)):(r.flags|=1048576,o)}function i(r){return l&&r.alternate===null&&(r.flags|=67108866),r}function s(r,o,h,z){return o===null||o.tag!==6?(o=Ei(h,r.mode,z),o.return=r,o):(o=n(o,h),o.return=r,o)}function c(r,o,h,z){var B=h.type;return B===_l?b(r,o,h.props.children,z,h.key):o!==null&&(o.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Rl&&qa(B)===o.type)?(o=n(o,h.props),ke(o,h),o.return=r,o):(o=Ln(h.type,h.key,h.props,null,r.mode,z),ke(o,h),o.return=r,o)}function p(r,o,h,z){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=Mi(h,r.mode,z),o.return=r,o):(o=n(o,h.children||[]),o.return=r,o)}function b(r,o,h,z,B){return o===null||o.tag!==7?(o=ja(h,r.mode,z,B),o.return=r,o):(o=n(o,h),o.return=r,o)}function A(r,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ei(""+o,r.mode,h),o.return=r,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case yl:return h=Ln(o.type,o.key,o.props,null,r.mode,h),ke(h,o),h.return=r,h;case vl:return o=Mi(o,r.mode,h),o.return=r,o;case Rl:return o=qa(o),A(r,o,h)}if(Tt(o)||$l(o))return o=ja(o,r.mode,h,null),o.return=r,o;if(typeof o.then=="function")return A(r,Fn(o),h);if(o.$$typeof===sl)return A(r,Jn(r,o),h);In(r,o)}return null}function m(r,o,h,z){var B=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return B!==null?null:s(r,o,""+h,z);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case yl:return h.key===B?c(r,o,h,z):null;case vl:return h.key===B?p(r,o,h,z):null;case Rl:return h=qa(h),m(r,o,h,z)}if(Tt(h)||$l(h))return B!==null?null:b(r,o,h,z,null);if(typeof h.then=="function")return m(r,o,Fn(h),z);if(h.$$typeof===sl)return m(r,o,Jn(r,h),z);In(r,h)}return null}function v(r,o,h,z,B){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return r=r.get(h)||null,s(o,r,""+z,B);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case yl:return r=r.get(z.key===null?h:z.key)||null,c(o,r,z,B);case vl:return r=r.get(z.key===null?h:z.key)||null,p(o,r,z,B);case Rl:return z=qa(z),v(r,o,h,z,B)}if(Tt(z)||$l(z))return r=r.get(h)||null,b(o,r,z,B,null);if(typeof z.then=="function")return v(r,o,h,Fn(z),B);if(z.$$typeof===sl)return v(r,o,h,Jn(o,z),B);In(o,z)}return null}function U(r,o,h,z){for(var B=null,tl=null,R=o,V=o=0,I=null;R!==null&&V<h.length;V++){R.index>V?(I=R,R=null):I=R.sibling;var al=m(r,R,h[V],z);if(al===null){R===null&&(R=I);break}l&&R&&al.alternate===null&&t(r,R),o=u(al,o,V),tl===null?B=al:tl.sibling=al,tl=al,R=I}if(V===h.length)return a(r,R),ll&&qt(r,V),B;if(R===null){for(;V<h.length;V++)R=A(r,h[V],z),R!==null&&(o=u(R,o,V),tl===null?B=R:tl.sibling=R,tl=R);return ll&&qt(r,V),B}for(R=e(R);V<h.length;V++)I=v(R,r,V,h[V],z),I!==null&&(l&&I.alternate!==null&&R.delete(I.key===null?V:I.key),o=u(I,o,V),tl===null?B=I:tl.sibling=I,tl=I);return l&&R.forEach(function(_a){return t(r,_a)}),ll&&qt(r,V),B}function Y(r,o,h,z){if(h==null)throw Error(g(151));for(var B=null,tl=null,R=o,V=o=0,I=null,al=h.next();R!==null&&!al.done;V++,al=h.next()){R.index>V?(I=R,R=null):I=R.sibling;var _a=m(r,R,al.value,z);if(_a===null){R===null&&(R=I);break}l&&R&&_a.alternate===null&&t(r,R),o=u(_a,o,V),tl===null?B=_a:tl.sibling=_a,tl=_a,R=I}if(al.done)return a(r,R),ll&&qt(r,V),B;if(R===null){for(;!al.done;V++,al=h.next())al=A(r,al.value,z),al!==null&&(o=u(al,o,V),tl===null?B=al:tl.sibling=al,tl=al);return ll&&qt(r,V),B}for(R=e(R);!al.done;V++,al=h.next())al=v(R,r,V,al.value,z),al!==null&&(l&&al.alternate!==null&&R.delete(al.key===null?V:al.key),o=u(al,o,V),tl===null?B=al:tl.sibling=al,tl=al);return l&&R.forEach(function(ch){return t(r,ch)}),ll&&qt(r,V),B}function rl(r,o,h,z){if(typeof h=="object"&&h!==null&&h.type===_l&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case yl:l:{for(var B=h.key;o!==null;){if(o.key===B){if(B=h.type,B===_l){if(o.tag===7){a(r,o.sibling),z=n(o,h.props.children),z.return=r,r=z;break l}}else if(o.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Rl&&qa(B)===o.type){a(r,o.sibling),z=n(o,h.props),ke(z,h),z.return=r,r=z;break l}a(r,o);break}else t(r,o);o=o.sibling}h.type===_l?(z=ja(h.props.children,r.mode,z,h.key),z.return=r,r=z):(z=Ln(h.type,h.key,h.props,null,r.mode,z),ke(z,h),z.return=r,r=z)}return i(r);case vl:l:{for(B=h.key;o!==null;){if(o.key===B)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){a(r,o.sibling),z=n(o,h.children||[]),z.return=r,r=z;break l}else{a(r,o);break}else t(r,o);o=o.sibling}z=Mi(h,r.mode,z),z.return=r,r=z}return i(r);case Rl:return h=qa(h),rl(r,o,h,z)}if(Tt(h))return U(r,o,h,z);if($l(h)){if(B=$l(h),typeof B!="function")throw Error(g(150));return h=B.call(h),Y(r,o,h,z)}if(typeof h.then=="function")return rl(r,o,Fn(h),z);if(h.$$typeof===sl)return rl(r,o,Jn(r,h),z);In(r,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(a(r,o.sibling),z=n(o,h),z.return=r,r=z):(a(r,o),z=Ei(h,r.mode,z),z.return=r,r=z),i(r)):a(r,o)}return function(r,o,h,z){try{Je=0;var B=rl(r,o,h,z);return re=null,B}catch(R){if(R===fe||R===$n)throw R;var tl=st(29,R,null,r.mode);return tl.lanes=z,tl.return=r,tl}}}var Ya=jo(!0),xo=jo(!1),ua=!1;function Bi(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ia(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function sa(l,t,a){var e=l.updateQueue;if(e===null)return null;if(e=e.shared,(el&2)!==0){var n=e.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t,t=Zn(l),mo(l,null,a),t}return Qn(l,e,t,a),Zn(l)}function $e(l,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,Ac(l,a)}}function Gi(l,t){var a=l.updateQueue,e=l.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,a=a.next}while(a!==null);u===null?n=u=t:u=u.next=t}else n=u=t;a={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:e.shared,callbacks:e.callbacks},l.updateQueue=a;return}l=a.lastBaseUpdate,l===null?a.firstBaseUpdate=t:l.next=t,a.lastBaseUpdate=t}var Xi=!1;function We(){if(Xi){var l=oe;if(l!==null)throw l}}function Fe(l,t,a,e){Xi=!1;var n=l.updateQueue;ua=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var c=s,p=c.next;c.next=null,i===null?u=p:i.next=p,i=c;var b=l.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==i&&(s===null?b.firstBaseUpdate=p:s.next=p,b.lastBaseUpdate=c))}if(u!==null){var A=n.baseState;i=0,b=p=c=null,s=u;do{var m=s.lane&-536870913,v=m!==s.lane;if(v?(F&m)===m:(e&m)===m){m!==0&&m===ce&&(Xi=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});l:{var U=l,Y=s;m=t;var rl=a;switch(Y.tag){case 1:if(U=Y.payload,typeof U=="function"){A=U.call(rl,A,m);break l}A=U;break l;case 3:U.flags=U.flags&-65537|128;case 0:if(U=Y.payload,m=typeof U=="function"?U.call(rl,A,m):U,m==null)break l;A=j({},A,m);break l;case 2:ua=!0}}m=s.callback,m!==null&&(l.flags|=64,v&&(l.flags|=8192),v=n.callbacks,v===null?n.callbacks=[m]:v.push(m))}else v={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(p=b=v,c=A):b=b.next=v,i|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;v=s,s=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);b===null&&(c=A),n.baseState=c,n.firstBaseUpdate=p,n.lastBaseUpdate=b,u===null&&(n.shared.lanes=0),ga|=i,l.lanes=i,l.memoizedState=A}}function Uo(l,t){if(typeof l!="function")throw Error(g(191,l));l.call(t)}function Ho(l,t){var a=l.callbacks;if(a!==null)for(l.callbacks=null,l=0;l<a.length;l++)Uo(a[l],t)}var ge=f(null),Pn=f(0);function Ro(l,t){l=kt,N(Pn,l),N(ge,t),kt=l|t.baseLanes}function Qi(){N(Pn,kt),N(ge,ge.current)}function Zi(){kt=Pn.current,T(ge),T(Pn)}var ct=f(null),zt=null;function ca(l){var t=l.alternate;N(Ol,Ol.current&1),N(ct,l),zt===null&&(t===null||ge.current!==null||t.memoizedState!==null)&&(zt=l)}function Li(l){N(Ol,Ol.current),N(ct,l),zt===null&&(zt=l)}function qo(l){l.tag===22?(N(Ol,Ol.current),N(ct,l),zt===null&&(zt=l)):oa()}function oa(){N(Ol,Ol.current),N(ct,ct.current)}function ot(l){T(ct),zt===l&&(zt=null),T(Ol)}var Ol=f(0);function lu(l){for(var t=l;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ws(a)||Fs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,L=null,ol=null,wl=null,tu=!1,de=!1,Ga=!1,au=0,Ie=0,he=null,Id=0;function Tl(){throw Error(g(321))}function Vi(l,t){if(t===null)return!1;for(var a=0;a<t.length&&a<l.length;a++)if(!it(l[a],t[a]))return!1;return!0}function Ki(l,t,a,e,n,u){return Gt=u,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?zf:ss,Ga=!1,u=a(e,n),Ga=!1,de&&(u=Yo(t,a,e,n)),Bo(l),u}function Bo(l){S.H=tn;var t=ol!==null&&ol.next!==null;if(Gt=0,wl=ol=L=null,tu=!1,Ie=0,he=null,t)throw Error(g(300));l===null||jl||(l=l.dependencies,l!==null&&Kn(l)&&(jl=!0))}function Yo(l,t,a,e){L=l;var n=0;do{if(de&&(he=null),Ie=0,de=!1,25<=n)throw Error(g(301));if(n+=1,wl=ol=null,l.updateQueue!=null){var u=l.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=_f,u=t(a,e)}while(de);return u}function Pd(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?Pe(t):t,l=l.useState()[0],(ol!==null?ol.memoizedState:null)!==l&&(L.flags|=1024),t}function Ji(){var l=au!==0;return au=0,l}function ki(l,t,a){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~a}function $i(l){if(tu){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}tu=!1}Gt=0,wl=ol=L=null,de=!1,Ie=au=0,he=null}function Jl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wl===null?L.memoizedState=wl=l:wl=wl.next=l,wl}function Nl(){if(ol===null){var l=L.alternate;l=l!==null?l.memoizedState:null}else l=ol.next;var t=wl===null?L.memoizedState:wl.next;if(t!==null)wl=t,ol=l;else{if(l===null)throw L.alternate===null?Error(g(467)):Error(g(310));ol=l,l={memoizedState:ol.memoizedState,baseState:ol.baseState,baseQueue:ol.baseQueue,queue:ol.queue,next:null},wl===null?L.memoizedState=wl=l:wl=wl.next=l}return wl}function eu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pe(l){var t=Ie;return Ie+=1,he===null&&(he=[]),l=No(he,l,t),t=L,(wl===null?t.memoizedState:wl.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?zf:ss),l}function nu(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pe(l);if(l.$$typeof===sl)return Xl(l)}throw Error(g(438,String(l)))}function Wi(l){var t=null,a=L.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var e=L.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=eu(),L.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(l),e=0;e<l;e++)a[e]=Ft;return t.index++,a}function Xt(l,t){return typeof t=="function"?t(l):t}function uu(l){var t=Nl();return Fi(t,ol,l)}function Fi(l,t,a){var e=l.queue;if(e===null)throw Error(g(311));e.lastRenderedReducer=a;var n=l.baseQueue,u=e.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,e.pending=null}if(u=l.baseState,n===null)l.memoizedState=u;else{t=n.next;var s=i=null,c=null,p=t,b=!1;do{var A=p.lane&-536870913;if(A!==p.lane?(F&A)===A:(Gt&A)===A){var m=p.revertLane;if(m===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),A===ce&&(b=!0);else if((Gt&m)===m){p=p.next,m===ce&&(b=!0);continue}else A={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=A,i=u):c=c.next=A,L.lanes|=m,ga|=m;A=p.action,Ga&&a(u,A),u=p.hasEagerState?p.eagerState:a(u,A)}else m={lane:A,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},c===null?(s=c=m,i=u):c=c.next=m,L.lanes|=A,ga|=A;p=p.next}while(p!==null&&p!==t);if(c===null?i=u:c.next=s,!it(u,l.memoizedState)&&(jl=!0,b&&(a=oe,a!==null)))throw a;l.memoizedState=u,l.baseState=i,l.baseQueue=c,e.lastRenderedState=u}return n===null&&(e.lanes=0),[l.memoizedState,e.dispatch]}function Ii(l){var t=Nl(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=l;var e=a.dispatch,n=a.pending,u=t.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do u=l(u,i.action),i=i.next;while(i!==n);it(u,t.memoizedState)||(jl=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),a.lastRenderedState=u}return[u,e]}function Go(l,t,a){var e=L,n=Nl(),u=ll;if(u){if(a===void 0)throw Error(g(407));a=a()}else a=t();var i=!it((ol||n).memoizedState,a);if(i&&(n.memoizedState=a,jl=!0),n=n.queue,ts(Zo.bind(null,e,n,l),[l]),n.getSnapshot!==t||i||wl!==null&&wl.memoizedState.tag&1){if(e.flags|=2048,pe(9,{destroy:void 0},Qo.bind(null,e,n,a,t),null),dl===null)throw Error(g(349));u||(Gt&127)!==0||Xo(e,t,a)}return a}function Xo(l,t,a){l.flags|=16384,l={getSnapshot:t,value:a},t=L.updateQueue,t===null?(t=eu(),L.updateQueue=t,t.stores=[l]):(a=t.stores,a===null?t.stores=[l]:a.push(l))}function Qo(l,t,a,e){t.value=a,t.getSnapshot=e,Lo(t)&&Vo(l)}function Zo(l,t,a){return a(function(){Lo(t)&&Vo(l)})}function Lo(l){var t=l.getSnapshot;l=l.value;try{var a=t();return!it(l,a)}catch{return!0}}function Vo(l){var t=wa(l,2);t!==null&&at(t,l,2)}function Pi(l){var t=Jl();if(typeof l=="function"){var a=l;if(l=a(),Ga){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:l},t}function Ko(l,t,a,e){return l.baseState=a,Fi(l,ol,typeof e=="function"?e:Xt)}function l0(l,t,a,e,n){if(cu(l))throw Error(g(485));if(l=t.action,l!==null){var u={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?a(!0):u.isTransition=!1,e(u),a=t.pending,a===null?(u.next=t.pending=u,Jo(t,u)):(u.next=a.next,t.pending=a.next=u)}}function Jo(l,t){var a=t.action,e=t.payload,n=l.state;if(t.isTransition){var u=S.T,i={};S.T=i;try{var s=a(n,e),c=S.S;c!==null&&c(i,s),ko(l,t,s)}catch(p){ls(l,t,p)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=a(n,e),ko(l,t,u)}catch(p){ls(l,t,p)}}function ko(l,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){$o(l,t,e)},function(e){return ls(l,t,e)}):$o(l,t,a)}function $o(l,t,a){t.status="fulfilled",t.value=a,Wo(t),l.state=a,t=l.pending,t!==null&&(a=t.next,a===t?l.pending=null:(a=a.next,t.next=a,Jo(l,a)))}function ls(l,t,a){var e=l.pending;if(l.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=a,Wo(t),t=t.next;while(t!==e)}l.action=null}function Wo(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fo(l,t){return t}function Io(l,t){if(ll){var a=dl.formState;if(a!==null){l:{var e=L;if(ll){if(hl){t:{for(var n=hl,u=St;n.nodeType!==8;){if(!u){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){hl=_t(n.nextSibling),e=n.data==="F!";break l}}ea(e)}e=!1}e&&(t=a[0])}}return a=Jl(),a.memoizedState=a.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},a.queue=e,a=vf.bind(null,L,e),e.dispatch=a,e=Pi(!1),u=is.bind(null,L,!1,e.queue),e=Jl(),n={state:t,dispatch:null,action:l,pending:null},e.queue=n,a=l0.bind(null,L,n,u,a),n.dispatch=a,e.memoizedState=l,[t,a,!1]}function Po(l){var t=Nl();return lf(t,ol,l)}function lf(l,t,a){if(t=Fi(l,t,Fo)[0],l=uu(Xt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=Pe(t)}catch(i){throw i===fe?$n:i}else e=t;t=Nl();var n=t.queue,u=n.dispatch;return a!==t.memoizedState&&(L.flags|=2048,pe(9,{destroy:void 0},t0.bind(null,n,a),null)),[e,u,l]}function t0(l,t){l.action=t}function tf(l){var t=Nl(),a=ol;if(a!==null)return lf(t,a,l);Nl(),t=t.memoizedState,a=Nl();var e=a.queue.dispatch;return a.memoizedState=l,[t,e,!1]}function pe(l,t,a,e){return l={tag:l,create:a,deps:e,inst:t,next:null},t=L.updateQueue,t===null&&(t=eu(),L.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=l.next=l:(e=a.next,a.next=l,l.next=e,t.lastEffect=l),l}function af(){return Nl().memoizedState}function iu(l,t,a,e){var n=Jl();L.flags|=l,n.memoizedState=pe(1|t,{destroy:void 0},a,e===void 0?null:e)}function su(l,t,a,e){var n=Nl();e=e===void 0?null:e;var u=n.memoizedState.inst;ol!==null&&e!==null&&Vi(e,ol.memoizedState.deps)?n.memoizedState=pe(t,u,a,e):(L.flags|=l,n.memoizedState=pe(1|t,u,a,e))}function ef(l,t){iu(8390656,8,l,t)}function ts(l,t){su(2048,8,l,t)}function a0(l){L.flags|=4;var t=L.updateQueue;if(t===null)t=eu(),L.updateQueue=t,t.events=[l];else{var a=t.events;a===null?t.events=[l]:a.push(l)}}function nf(l){var t=Nl().memoizedState;return a0({ref:t,nextImpl:l}),function(){if((el&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function uf(l,t){return su(4,2,l,t)}function sf(l,t){return su(4,4,l,t)}function cf(l,t){if(typeof t=="function"){l=l();var a=t(l);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function of(l,t,a){a=a!=null?a.concat([l]):null,su(4,4,cf.bind(null,t,l),a)}function as(){}function ff(l,t){var a=Nl();t=t===void 0?null:t;var e=a.memoizedState;return t!==null&&Vi(t,e[1])?e[0]:(a.memoizedState=[l,t],l)}function rf(l,t){var a=Nl();t=t===void 0?null:t;var e=a.memoizedState;if(t!==null&&Vi(t,e[1]))return e[0];if(e=l(),Ga){It(!0);try{l()}finally{It(!1)}}return a.memoizedState=[e,t],e}function es(l,t,a){return a===void 0||(Gt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=a,l=gr(),L.lanes|=l,ga|=l,a)}function gf(l,t,a,e){return it(a,t)?a:ge.current!==null?(l=es(l,a,e),it(l,t)||(jl=!0),l):(Gt&42)===0||(Gt&1073741824)!==0&&(F&261930)===0?(jl=!0,l.memoizedState=a):(l=gr(),L.lanes|=l,ga|=l,t)}function df(l,t,a,e,n){var u=D.p;D.p=u!==0&&8>u?u:8;var i=S.T,s={};S.T=s,is(l,!1,t,a);try{var c=n(),p=S.S;if(p!==null&&p(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var b=Fd(c,e);ln(l,t,b,gt(l))}else ln(l,t,e,gt(l))}catch(A){ln(l,t,{then:function(){},status:"rejected",reason:A},gt())}finally{D.p=u,i!==null&&s.types!==null&&(i.types=s.types),S.T=i}}function e0(){}function ns(l,t,a,e){if(l.tag!==5)throw Error(g(476));var n=hf(l).queue;df(l,n,t,G,a===null?e0:function(){return pf(l),a(e)})}function hf(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:G},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xt,lastRenderedState:a},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function pf(l){var t=hf(l);t.next===null&&(t=l.alternate.memoizedState),ln(l,t.next.queue,{},gt())}function us(){return Xl(vn)}function mf(){return Nl().memoizedState}function yf(){return Nl().memoizedState}function n0(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();l=ia(a);var e=sa(t,l,a);e!==null&&(at(e,t,a),$e(e,t,a)),t={cache:Ui()},l.payload=t;return}t=t.return}}function u0(l,t,a){var e=gt();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cu(l)?bf(t,a):(a=Ai(l,t,a,e),a!==null&&(at(a,l,e),Sf(a,t,e)))}function vf(l,t,a){var e=gt();ln(l,t,a,e)}function ln(l,t,a,e){var n={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cu(l))bf(t,n);else{var u=l.alternate;if(l.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,s=u(i,a);if(n.hasEagerState=!0,n.eagerState=s,it(s,i))return Qn(l,t,n,0),dl===null&&Xn(),!1}catch{}if(a=Ai(l,t,n,e),a!==null)return at(a,l,e),Sf(a,t,e),!0}return!1}function is(l,t,a,e){if(e={lane:2,revertLane:Bs(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},cu(l)){if(t)throw Error(g(479))}else t=Ai(l,a,e,2),t!==null&&at(t,l,2)}function cu(l){var t=l.alternate;return l===L||t!==null&&t===L}function bf(l,t){de=tu=!0;var a=l.pending;a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t}function Sf(l,t,a){if((a&4194048)!==0){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,Ac(l,a)}}var tn={readContext:Xl,use:nu,useCallback:Tl,useContext:Tl,useEffect:Tl,useImperativeHandle:Tl,useLayoutEffect:Tl,useInsertionEffect:Tl,useMemo:Tl,useReducer:Tl,useRef:Tl,useState:Tl,useDebugValue:Tl,useDeferredValue:Tl,useTransition:Tl,useSyncExternalStore:Tl,useId:Tl,useHostTransitionStatus:Tl,useFormState:Tl,useActionState:Tl,useOptimistic:Tl,useMemoCache:Tl,useCacheRefresh:Tl};tn.useEffectEvent=Tl;var zf={readContext:Xl,use:nu,useCallback:function(l,t){return Jl().memoizedState=[l,t===void 0?null:t],l},useContext:Xl,useEffect:ef,useImperativeHandle:function(l,t,a){a=a!=null?a.concat([l]):null,iu(4194308,4,cf.bind(null,t,l),a)},useLayoutEffect:function(l,t){return iu(4194308,4,l,t)},useInsertionEffect:function(l,t){iu(4,2,l,t)},useMemo:function(l,t){var a=Jl();t=t===void 0?null:t;var e=l();if(Ga){It(!0);try{l()}finally{It(!1)}}return a.memoizedState=[e,t],e},useReducer:function(l,t,a){var e=Jl();if(a!==void 0){var n=a(t);if(Ga){It(!0);try{a(t)}finally{It(!1)}}}else n=t;return e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},e.queue=l,l=l.dispatch=u0.bind(null,L,l),[e.memoizedState,l]},useRef:function(l){var t=Jl();return l={current:l},t.memoizedState=l},useState:function(l){l=Pi(l);var t=l.queue,a=vf.bind(null,L,t);return t.dispatch=a,[l.memoizedState,a]},useDebugValue:as,useDeferredValue:function(l,t){var a=Jl();return es(a,l,t)},useTransition:function(){var l=Pi(!1);return l=df.bind(null,L,l.queue,!0,!1),Jl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,a){var e=L,n=Jl();if(ll){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),dl===null)throw Error(g(349));(F&127)!==0||Xo(e,t,a)}n.memoizedState=a;var u={value:a,getSnapshot:t};return n.queue=u,ef(Zo.bind(null,e,u,l),[l]),e.flags|=2048,pe(9,{destroy:void 0},Qo.bind(null,e,u,a,t),null),a},useId:function(){var l=Jl(),t=dl.identifierPrefix;if(ll){var a=Nt,e=Ot;a=(e&~(1<<32-ut(e)-1)).toString(32)+a,t="_"+t+"R_"+a,a=au++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Id++,t="_"+t+"r_"+a.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:us,useFormState:Io,useActionState:Io,useOptimistic:function(l){var t=Jl();t.memoizedState=t.baseState=l;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=is.bind(null,L,!0,a),a.dispatch=t,[l,t]},useMemoCache:Wi,useCacheRefresh:function(){return Jl().memoizedState=n0.bind(null,L)},useEffectEvent:function(l){var t=Jl(),a={impl:l};return t.memoizedState=a,function(){if((el&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},ss={readContext:Xl,use:nu,useCallback:ff,useContext:Xl,useEffect:ts,useImperativeHandle:of,useInsertionEffect:uf,useLayoutEffect:sf,useMemo:rf,useReducer:uu,useRef:af,useState:function(){return uu(Xt)},useDebugValue:as,useDeferredValue:function(l,t){var a=Nl();return gf(a,ol.memoizedState,l,t)},useTransition:function(){var l=uu(Xt)[0],t=Nl().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Go,useId:mf,useHostTransitionStatus:us,useFormState:Po,useActionState:Po,useOptimistic:function(l,t){var a=Nl();return Ko(a,ol,l,t)},useMemoCache:Wi,useCacheRefresh:yf};ss.useEffectEvent=nf;var _f={readContext:Xl,use:nu,useCallback:ff,useContext:Xl,useEffect:ts,useImperativeHandle:of,useInsertionEffect:uf,useLayoutEffect:sf,useMemo:rf,useReducer:Ii,useRef:af,useState:function(){return Ii(Xt)},useDebugValue:as,useDeferredValue:function(l,t){var a=Nl();return ol===null?es(a,l,t):gf(a,ol.memoizedState,l,t)},useTransition:function(){var l=Ii(Xt)[0],t=Nl().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Go,useId:mf,useHostTransitionStatus:us,useFormState:tf,useActionState:tf,useOptimistic:function(l,t){var a=Nl();return ol!==null?Ko(a,ol,l,t):(a.baseState=l,[l,a.queue.dispatch])},useMemoCache:Wi,useCacheRefresh:yf};_f.useEffectEvent=nf;function cs(l,t,a,e){t=l.memoizedState,a=a(e,t),a=a==null?t:j({},t,a),l.memoizedState=a,l.lanes===0&&(l.updateQueue.baseState=a)}var os={enqueueSetState:function(l,t,a){l=l._reactInternals;var e=gt(),n=ia(e);n.payload=t,a!=null&&(n.callback=a),t=sa(l,n,e),t!==null&&(at(t,l,e),$e(t,l,e))},enqueueReplaceState:function(l,t,a){l=l._reactInternals;var e=gt(),n=ia(e);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=sa(l,n,e),t!==null&&(at(t,l,e),$e(t,l,e))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var a=gt(),e=ia(a);e.tag=2,t!=null&&(e.callback=t),t=sa(l,e,a),t!==null&&(at(t,l,a),$e(t,l,a))}};function Af(l,t,a,e,n,u,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(e,u,i):t.prototype&&t.prototype.isPureReactComponent?!Xe(a,e)||!Xe(n,u):!0}function Tf(l,t,a,e){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,e),t.state!==l&&os.enqueueReplaceState(t,t.state,null)}function Xa(l,t){var a=t;if("ref"in t){a={};for(var e in t)e!=="ref"&&(a[e]=t[e])}if(l=l.defaultProps){a===t&&(a=j({},a));for(var n in l)a[n]===void 0&&(a[n]=l[n])}return a}function Ef(l){Gn(l)}function Mf(l){console.error(l)}function Df(l){Gn(l)}function ou(l,t){try{var a=l.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Of(l,t,a){try{var e=l.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fs(l,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){ou(l,t)},a}function Nf(l){return l=ia(l),l.tag=3,l}function Cf(l,t,a,e){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=e.value;l.payload=function(){return n(u)},l.callback=function(){Of(t,a,e)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){Of(t,a,e),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})})}function i0(l,t,a,e,n){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=a.alternate,t!==null&&se(t,a,n,!0),a=ct.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?zu():a.alternate===null&&El===0&&(El=3),a.flags&=-257,a.flags|=65536,a.lanes=n,e===Wn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([e]):t.add(e),Hs(l,e,n)),!1;case 22:return a.flags|=65536,e===Wn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([e]):a.add(e)),Hs(l,e,n)),!1}throw Error(g(435,a.tag))}return Hs(l,e,n),zu(),!1}if(ll)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,e!==Ni&&(l=Error(g(422),{cause:e}),Le(yt(l,a)))):(e!==Ni&&(t=Error(g(423),{cause:e}),Le(yt(t,a))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,e=yt(e,a),n=fs(l.stateNode,e,n),Gi(l,n),El!==4&&(El=2)),!1;var u=Error(g(520),{cause:e});if(u=yt(u,a),fn===null?fn=[u]:fn.push(u),El!==4&&(El=2),t===null)return!0;e=yt(e,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,l=n&-n,a.lanes|=l,l=fs(a.stateNode,e,l),Gi(a,l),!1;case 1:if(t=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(da===null||!da.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Nf(n),Cf(n,l,a,e),Gi(a,n),!1}a=a.return}while(a!==null);return!1}var rs=Error(g(461)),jl=!1;function Ql(l,t,a,e){t.child=l===null?xo(t,null,a,e):Ya(t,l.child,a,e)}function wf(l,t,a,e,n){a=a.render;var u=t.ref;if("ref"in e){var i={};for(var s in e)s!=="ref"&&(i[s]=e[s])}else i=e;return Ha(t),e=Ki(l,t,a,i,u,n),s=Ji(),l!==null&&!jl?(ki(l,t,n),Qt(l,t,n)):(ll&&s&&Di(t),t.flags|=1,Ql(l,t,e,n),t.child)}function jf(l,t,a,e,n){if(l===null){var u=a.type;return typeof u=="function"&&!Ti(u)&&u.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=u,xf(l,t,u,e,n)):(l=Ln(a.type,null,e,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(u=l.child,!bs(l,n)){var i=u.memoizedProps;if(a=a.compare,a=a!==null?a:Xe,a(i,e)&&l.ref===t.ref)return Qt(l,t,n)}return t.flags|=1,l=Rt(u,e),l.ref=t.ref,l.return=t,t.child=l}function xf(l,t,a,e,n){if(l!==null){var u=l.memoizedProps;if(Xe(u,e)&&l.ref===t.ref)if(jl=!1,t.pendingProps=e=u,bs(l,n))(l.flags&131072)!==0&&(jl=!0);else return t.lanes=l.lanes,Qt(l,t,n)}return gs(l,t,a,e,n)}function Uf(l,t,a,e){var n=e.children,u=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,l!==null){for(e=t.child=l.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~u}else e=0,t.child=null;return Hf(l,t,u,a,e)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&kn(t,u!==null?u.cachePool:null),u!==null?Ro(t,u):Qi(),qo(t);else return e=t.lanes=536870912,Hf(l,t,u!==null?u.baseLanes|a:a,a,e)}else u!==null?(kn(t,u.cachePool),Ro(t,u),oa(),t.memoizedState=null):(l!==null&&kn(t,null),Qi(),oa());return Ql(l,t,n,a),t.child}function an(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Hf(l,t,a,e,n){var u=Ri();return u=u===null?null:{parent:Cl._currentValue,pool:u},t.memoizedState={baseLanes:a,cachePool:u},l!==null&&kn(t,null),Qi(),qo(t),l!==null&&se(l,t,e,!0),t.childLanes=n,null}function fu(l,t){return t=gu({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Rf(l,t,a){return Ya(t,l.child,null,a),l=fu(t,t.pendingProps),l.flags|=2,ot(t),t.memoizedState=null,l}function s0(l,t,a){var e=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(e.mode==="hidden")return l=fu(t,e),t.lanes=536870912,an(null,l);if(Li(t),(l=hl)?(l=kr(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ta!==null?{id:Ot,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=vo(l),a.return=t,t.child=a,Gl=t,hl=null)):l=null,l===null)throw ea(t);return t.lanes=536870912,null}return fu(t,e)}var u=l.memoizedState;if(u!==null){var i=u.dehydrated;if(Li(t),n)if(t.flags&256)t.flags&=-257,t=Rf(l,t,a);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(g(558));else if(jl||se(l,t,a,!1),n=(a&l.childLanes)!==0,jl||n){if(e=dl,e!==null&&(i=Tc(e,a),i!==0&&i!==u.retryLane))throw u.retryLane=i,wa(l,i),at(e,l,i),rs;zu(),t=Rf(l,t,a)}else l=u.treeContext,hl=_t(i.nextSibling),Gl=t,ll=!0,aa=null,St=!1,l!==null&&zo(t,l),t=fu(t,e),t.flags|=4096;return t}return l=Rt(l.child,{mode:e.mode,children:e.children}),l.ref=t.ref,t.child=l,l.return=t,l}function ru(l,t){var a=t.ref;if(a===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(l===null||l.ref!==a)&&(t.flags|=4194816)}}function gs(l,t,a,e,n){return Ha(t),a=Ki(l,t,a,e,void 0,n),e=Ji(),l!==null&&!jl?(ki(l,t,n),Qt(l,t,n)):(ll&&e&&Di(t),t.flags|=1,Ql(l,t,a,n),t.child)}function qf(l,t,a,e,n,u){return Ha(t),t.updateQueue=null,a=Yo(t,e,a,n),Bo(l),e=Ji(),l!==null&&!jl?(ki(l,t,u),Qt(l,t,u)):(ll&&e&&Di(t),t.flags|=1,Ql(l,t,a,u),t.child)}function Bf(l,t,a,e,n){if(Ha(t),t.stateNode===null){var u=ee,i=a.contextType;typeof i=="object"&&i!==null&&(u=Xl(i)),u=new a(e,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=os,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=e,u.state=t.memoizedState,u.refs={},Bi(t),i=a.contextType,u.context=typeof i=="object"&&i!==null?Xl(i):ee,u.state=t.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(cs(t,a,i,e),u.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&os.enqueueReplaceState(u,u.state,null),Fe(t,e,u,n),We(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(l===null){u=t.stateNode;var s=t.memoizedProps,c=Xa(a,s);u.props=c;var p=u.context,b=a.contextType;i=ee,typeof b=="object"&&b!==null&&(i=Xl(b));var A=a.getDerivedStateFromProps;b=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||p!==i)&&Tf(t,u,e,i),ua=!1;var m=t.memoizedState;u.state=m,Fe(t,e,u,n),We(),p=t.memoizedState,s||m!==p||ua?(typeof A=="function"&&(cs(t,a,A,e),p=t.memoizedState),(c=ua||Af(t,a,c,e,m,p,i))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=p),u.props=e,u.state=p,u.context=i,e=c):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{u=t.stateNode,Yi(l,t),i=t.memoizedProps,b=Xa(a,i),u.props=b,A=t.pendingProps,m=u.context,p=a.contextType,c=ee,typeof p=="object"&&p!==null&&(c=Xl(p)),s=a.getDerivedStateFromProps,(p=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==A||m!==c)&&Tf(t,u,e,c),ua=!1,m=t.memoizedState,u.state=m,Fe(t,e,u,n),We();var v=t.memoizedState;i!==A||m!==v||ua||l!==null&&l.dependencies!==null&&Kn(l.dependencies)?(typeof s=="function"&&(cs(t,a,s,e),v=t.memoizedState),(b=ua||Af(t,a,b,e,m,v,c)||l!==null&&l.dependencies!==null&&Kn(l.dependencies))?(p||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(e,v,c),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(e,v,c)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=v),u.props=e,u.state=v,u.context=c,e=b):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),e=!1)}return u=e,ru(l,t),e=(t.flags&128)!==0,u||e?(u=t.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,l!==null&&e?(t.child=Ya(t,l.child,null,n),t.child=Ya(t,null,a,n)):Ql(l,t,a,n),t.memoizedState=u.state,l=t.child):l=Qt(l,t,n),l}function Yf(l,t,a,e){return xa(),t.flags|=256,Ql(l,t,a,e),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hs(l){return{baseLanes:l,cachePool:Do()}}function ps(l,t,a){return l=l!==null?l.childLanes&~a:0,t&&(l|=rt),l}function Gf(l,t,a){var e=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=l!==null&&l.memoizedState===null?!1:(Ol.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(n?ca(t):oa(),(l=hl)?(l=kr(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ta!==null?{id:Ot,overflow:Nt}:null,retryLane:536870912,hydrationErrors:null},a=vo(l),a.return=t,t.child=a,Gl=t,hl=null)):l=null,l===null)throw ea(t);return Fs(l)?t.lanes=32:t.lanes=536870912,null}var s=e.children;return e=e.fallback,n?(oa(),n=t.mode,s=gu({mode:"hidden",children:s},n),e=ja(e,n,a,null),s.return=t,e.return=t,s.sibling=e,t.child=s,e=t.child,e.memoizedState=hs(a),e.childLanes=ps(l,i,a),t.memoizedState=ds,an(null,e)):(ca(t),ms(t,s))}var c=l.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(u)t.flags&256?(ca(t),t.flags&=-257,t=ys(l,t,a)):t.memoizedState!==null?(oa(),t.child=l.child,t.flags|=128,t=null):(oa(),s=e.fallback,n=t.mode,e=gu({mode:"visible",children:e.children},n),s=ja(s,n,a,null),s.flags|=2,e.return=t,s.return=t,e.sibling=s,t.child=e,Ya(t,l.child,null,a),e=t.child,e.memoizedState=hs(a),e.childLanes=ps(l,i,a),t.memoizedState=ds,t=an(null,e));else if(ca(t),Fs(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var p=i.dgst;i=p,e=Error(g(419)),e.stack="",e.digest=i,Le({value:e,source:null,stack:null}),t=ys(l,t,a)}else if(jl||se(l,t,a,!1),i=(a&l.childLanes)!==0,jl||i){if(i=dl,i!==null&&(e=Tc(i,a),e!==0&&e!==c.retryLane))throw c.retryLane=e,wa(l,e),at(i,l,e),rs;Ws(s)||zu(),t=ys(l,t,a)}else Ws(s)?(t.flags|=192,t.child=l.child,t=null):(l=c.treeContext,hl=_t(s.nextSibling),Gl=t,ll=!0,aa=null,St=!1,l!==null&&zo(t,l),t=ms(t,e.children),t.flags|=4096);return t}return n?(oa(),s=e.fallback,n=t.mode,c=l.child,p=c.sibling,e=Rt(c,{mode:"hidden",children:e.children}),e.subtreeFlags=c.subtreeFlags&65011712,p!==null?s=Rt(p,s):(s=ja(s,n,a,null),s.flags|=2),s.return=t,e.return=t,e.sibling=s,t.child=e,an(null,e),e=t.child,s=l.child.memoizedState,s===null?s=hs(a):(n=s.cachePool,n!==null?(c=Cl._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=Do(),s={baseLanes:s.baseLanes|a,cachePool:n}),e.memoizedState=s,e.childLanes=ps(l,i,a),t.memoizedState=ds,an(l.child,e)):(ca(t),a=l.child,l=a.sibling,a=Rt(a,{mode:"visible",children:e.children}),a.return=t,a.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=a,t.memoizedState=null,a)}function ms(l,t){return t=gu({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function gu(l,t){return l=st(22,l,null,t),l.lanes=0,l}function ys(l,t,a){return Ya(t,l.child,null,a),l=ms(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Xf(l,t,a){l.lanes|=t;var e=l.alternate;e!==null&&(e.lanes|=t),ji(l.return,t,a)}function vs(l,t,a,e,n,u){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=a,i.tailMode=n,i.treeForkCount=u)}function Qf(l,t,a){var e=t.pendingProps,n=e.revealOrder,u=e.tail;e=e.children;var i=Ol.current,s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,N(Ol,i),Ql(l,t,e,a),e=ll?Ze:0,!s&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Xf(l,a,t);else if(l.tag===19)Xf(l,a,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)l=a.alternate,l!==null&&lu(l)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),vs(t,!1,n,a,u,e);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&lu(l)===null){t.child=n;break}l=n.sibling,n.sibling=a,a=n,n=l}vs(t,!0,a,null,u,e);break;case"together":vs(t,!1,null,null,void 0,e);break;default:t.memoizedState=null}return t.child}function Qt(l,t,a){if(l!==null&&(t.dependencies=l.dependencies),ga|=t.lanes,(a&t.childLanes)===0)if(l!==null){if(se(l,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(g(153));if(t.child!==null){for(l=t.child,a=Rt(l,l.pendingProps),t.child=a,a.return=t;l.sibling!==null;)l=l.sibling,a=a.sibling=Rt(l,l.pendingProps),a.return=t;a.sibling=null}return t.child}function bs(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Kn(l)))}function c0(l,t,a){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),na(t,Cl,l.memoizedState.cache),xa();break;case 27:case 5:Oe(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Li(t),null;break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(ca(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Gf(l,t,a):(ca(t),l=Qt(l,t,a),l!==null?l.sibling:null);ca(t);break;case 19:var n=(l.flags&128)!==0;if(e=(a&t.childLanes)!==0,e||(se(l,t,a,!1),e=(a&t.childLanes)!==0),n){if(e)return Qf(l,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),N(Ol,Ol.current),e)break;return null;case 22:return t.lanes=0,Uf(l,t,a,t.pendingProps);case 24:na(t,Cl,l.memoizedState.cache)}return Qt(l,t,a)}function Zf(l,t,a){if(l!==null)if(l.memoizedProps!==t.pendingProps)jl=!0;else{if(!bs(l,a)&&(t.flags&128)===0)return jl=!1,c0(l,t,a);jl=(l.flags&131072)!==0}else jl=!1,ll&&(t.flags&1048576)!==0&&So(t,Ze,t.index);switch(t.lanes=0,t.tag){case 16:l:{var e=t.pendingProps;if(l=qa(t.elementType),t.type=l,typeof l=="function")Ti(l)?(e=Xa(l,e),t.tag=1,t=Bf(null,t,l,e,a)):(t.tag=0,t=gs(null,t,l,e,a));else{if(l!=null){var n=l.$$typeof;if(n===Al){t.tag=11,t=wf(null,t,l,e,a);break l}else if(n===J){t.tag=14,t=jf(null,t,l,e,a);break l}}throw t=jt(l)||l,Error(g(306,t,""))}}return t;case 0:return gs(l,t,t.type,t.pendingProps,a);case 1:return e=t.type,n=Xa(e,t.pendingProps),Bf(l,t,e,n,a);case 3:l:{if(Kl(t,t.stateNode.containerInfo),l===null)throw Error(g(387));e=t.pendingProps;var u=t.memoizedState;n=u.element,Yi(l,t),Fe(t,e,null,a);var i=t.memoizedState;if(e=i.cache,na(t,Cl,e),e!==u.cache&&xi(t,[Cl],a,!0),We(),e=i.element,u.isDehydrated)if(u={element:e,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Yf(l,t,e,a);break l}else if(e!==n){n=yt(Error(g(424)),t),Le(n),t=Yf(l,t,e,a);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(hl=_t(l.firstChild),Gl=t,ll=!0,aa=null,St=!0,a=xo(t,null,e,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xa(),e===n){t=Qt(l,t,a);break l}Ql(l,t,e,a)}t=t.child}return t;case 26:return ru(l,t),l===null?(a=lg(t.type,null,t.pendingProps,null))?t.memoizedState=a:ll||(a=t.type,l=t.pendingProps,e=Ou(k.current).createElement(a),e[Yl]=t,e[Wl]=l,Zl(e,a,l),ql(e),t.stateNode=e):t.memoizedState=lg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Oe(t),l===null&&ll&&(e=t.stateNode=Fr(t.type,t.pendingProps,k.current),Gl=t,St=!0,n=hl,ya(t.type)?(Is=n,hl=_t(e.firstChild)):hl=n),Ql(l,t,t.pendingProps.children,a),ru(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((n=e=hl)&&(e=B0(e,t.type,t.pendingProps,St),e!==null?(t.stateNode=e,Gl=t,hl=_t(e.firstChild),St=!1,n=!0):n=!1),n||ea(t)),Oe(t),n=t.type,u=t.pendingProps,i=l!==null?l.memoizedProps:null,e=u.children,Js(n,u)?e=null:i!==null&&Js(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Ki(l,t,Pd,null,null,a),vn._currentValue=n),ru(l,t),Ql(l,t,e,a),t.child;case 6:return l===null&&ll&&((l=a=hl)&&(a=Y0(a,t.pendingProps,St),a!==null?(t.stateNode=a,Gl=t,hl=null,l=!0):l=!1),l||ea(t)),null;case 13:return Gf(l,t,a);case 4:return Kl(t,t.stateNode.containerInfo),e=t.pendingProps,l===null?t.child=Ya(t,null,e,a):Ql(l,t,e,a),t.child;case 11:return wf(l,t,t.type,t.pendingProps,a);case 7:return Ql(l,t,t.pendingProps,a),t.child;case 8:return Ql(l,t,t.pendingProps.children,a),t.child;case 12:return Ql(l,t,t.pendingProps.children,a),t.child;case 10:return e=t.pendingProps,na(t,t.type,e.value),Ql(l,t,e.children,a),t.child;case 9:return n=t.type._context,e=t.pendingProps.children,Ha(t),n=Xl(n),e=e(n),t.flags|=1,Ql(l,t,e,a),t.child;case 14:return jf(l,t,t.type,t.pendingProps,a);case 15:return xf(l,t,t.type,t.pendingProps,a);case 19:return Qf(l,t,a);case 31:return s0(l,t,a);case 22:return Uf(l,t,a,t.pendingProps);case 24:return Ha(t),e=Xl(Cl),l===null?(n=Ri(),n===null&&(n=dl,u=Ui(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),t.memoizedState={parent:e,cache:n},Bi(t),na(t,Cl,n)):((l.lanes&a)!==0&&(Yi(l,t),Fe(t,null,null,a),We()),n=l.memoizedState,u=t.memoizedState,n.parent!==e?(n={parent:e,cache:e},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),na(t,Cl,e)):(e=u.cache,na(t,Cl,e),e!==n.cache&&xi(t,[Cl],a,!0))),Ql(l,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Zt(l){l.flags|=4}function Ss(l,t,a,e,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(mr())l.flags|=8192;else throw Ba=Wn,qi}else l.flags&=-16777217}function Lf(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!ug(t))if(mr())l.flags|=8192;else throw Ba=Wn,qi}function du(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?zc():536870912,l.lanes|=t,be|=t)}function en(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?l.tail=null:a.sibling=null;break;case"collapsed":a=l.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:e.sibling=null}}function pl(l){var t=l.alternate!==null&&l.alternate.child===l.child,a=0,e=0;if(t)for(var n=l.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=e,l.childLanes=a,t}function o0(l,t,a){var e=t.pendingProps;switch(Oi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pl(t),null;case 1:return pl(t),null;case 3:return a=t.stateNode,e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Yt(Cl),Dl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(l===null||l.child===null)&&(ie(t)?Zt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ci())),pl(t),null;case 26:var n=t.type,u=t.memoizedState;return l===null?(Zt(t),u!==null?(pl(t),Lf(t,u)):(pl(t),Ss(t,n,null,e,a))):u?u!==l.memoizedState?(Zt(t),pl(t),Lf(t,u)):(pl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==e&&Zt(t),pl(t),Ss(t,n,l,e,a)),null;case 27:if(Tn(t),a=k.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Zt(t);else{if(!e){if(t.stateNode===null)throw Error(g(166));return pl(t),null}l=H.current,ie(t)?_o(t):(l=Fr(n,e,a),t.stateNode=l,Zt(t))}return pl(t),null;case 5:if(Tn(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Zt(t);else{if(!e){if(t.stateNode===null)throw Error(g(166));return pl(t),null}if(u=H.current,ie(t))_o(t);else{var i=Ou(k.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof e.is=="string"?i.createElement("select",{is:e.is}):i.createElement("select"),e.multiple?u.multiple=!0:e.size&&(u.size=e.size);break;default:u=typeof e.is=="string"?i.createElement(n,{is:e.is}):i.createElement(n)}}u[Yl]=t,u[Wl]=e;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;l:switch(Zl(u,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break l;case"img":e=!0;break l;default:e=!1}e&&Zt(t)}}return pl(t),Ss(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,a),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==e&&Zt(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(g(166));if(l=k.current,ie(t)){if(l=t.stateNode,a=t.memoizedProps,e=null,n=Gl,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}l[Yl]=t,l=!!(l.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||Gr(l.nodeValue,a)),l||ea(t,!0)}else l=Ou(l).createTextNode(e),l[Yl]=t,t.stateNode=l}return pl(t),null;case 31:if(a=t.memoizedState,l===null||l.memoizedState!==null){if(e=ie(t),a!==null){if(l===null){if(!e)throw Error(g(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(557));l[Yl]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pl(t),l=!1}else a=Ci(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),l=!0;if(!l)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(g(558))}return pl(t),null;case 13:if(e=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=ie(t),e!==null&&e.dehydrated!==null){if(l===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Yl]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;pl(t),n=!1}else n=Ci(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=a,t):(a=e!==null,l=l!==null&&l.memoizedState!==null,a&&(e=t.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),u=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(u=e.memoizedState.cachePool.pool),u!==n&&(e.flags|=2048)),a!==l&&a&&(t.child.flags|=8192),du(t,t.updateQueue),pl(t),null);case 4:return Dl(),l===null&&Qs(t.stateNode.containerInfo),pl(t),null;case 10:return Yt(t.type),pl(t),null;case 19:if(T(Ol),e=t.memoizedState,e===null)return pl(t),null;if(n=(t.flags&128)!==0,u=e.rendering,u===null)if(n)en(e,!1);else{if(El!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(u=lu(l),u!==null){for(t.flags|=128,en(e,!1),l=u.updateQueue,t.updateQueue=l,du(t,l),t.subtreeFlags=0,l=a,a=t.child;a!==null;)yo(a,l),a=a.sibling;return N(Ol,Ol.current&1|2),ll&&qt(t,e.treeForkCount),t.child}l=l.sibling}e.tail!==null&&et()>vu&&(t.flags|=128,n=!0,en(e,!1),t.lanes=4194304)}else{if(!n)if(l=lu(u),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,du(t,l),en(e,!0),e.tail===null&&e.tailMode==="hidden"&&!u.alternate&&!ll)return pl(t),null}else 2*et()-e.renderingStartTime>vu&&a!==536870912&&(t.flags|=128,n=!0,en(e,!1),t.lanes=4194304);e.isBackwards?(u.sibling=t.child,t.child=u):(l=e.last,l!==null?l.sibling=u:t.child=u,e.last=u)}return e.tail!==null?(l=e.tail,e.rendering=l,e.tail=l.sibling,e.renderingStartTime=et(),l.sibling=null,a=Ol.current,N(Ol,n?a&1|2:a&1),ll&&qt(t,e.treeForkCount),l):(pl(t),null);case 22:case 23:return ot(t),Zi(),e=t.memoizedState!==null,l!==null?l.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(a&536870912)!==0&&(t.flags&128)===0&&(pl(t),t.subtreeFlags&6&&(t.flags|=8192)):pl(t),a=t.updateQueue,a!==null&&du(t,a.retryQueue),a=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(t.flags|=2048),l!==null&&T(Ra),null;case 24:return a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(Cl),pl(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function f0(l,t){switch(Oi(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Yt(Cl),Dl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(g(340));xa()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(ot(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(g(340));xa()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return T(Ol),null;case 4:return Dl(),null;case 10:return Yt(t.type),null;case 22:case 23:return ot(t),Zi(),l!==null&&T(Ra),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Yt(Cl),null;case 25:return null;default:return null}}function Vf(l,t){switch(Oi(t),t.tag){case 3:Yt(Cl),Dl();break;case 26:case 27:case 5:Tn(t);break;case 4:Dl();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:T(Ol);break;case 10:Yt(t.type);break;case 22:case 23:ot(t),Zi(),l!==null&&T(Ra);break;case 24:Yt(Cl)}}function nn(l,t){try{var a=t.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var n=e.next;a=n;do{if((a.tag&l)===l){e=void 0;var u=a.create,i=a.inst;e=u(),i.destroy=e}a=a.next}while(a!==n)}}catch(s){il(t,t.return,s)}}function fa(l,t,a){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var u=n.next;e=u;do{if((e.tag&l)===l){var i=e.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,n=t;var c=a,p=s;try{p()}catch(b){il(n,c,b)}}}e=e.next}while(e!==u)}}catch(b){il(t,t.return,b)}}function Kf(l){var t=l.updateQueue;if(t!==null){var a=l.stateNode;try{Ho(t,a)}catch(e){il(l,l.return,e)}}}function Jf(l,t,a){a.props=Xa(l.type,l.memoizedProps),a.state=l.memoizedState;try{a.componentWillUnmount()}catch(e){il(l,t,e)}}function un(l,t){try{var a=l.ref;if(a!==null){switch(l.tag){case 26:case 27:case 5:var e=l.stateNode;break;case 30:e=l.stateNode;break;default:e=l.stateNode}typeof a=="function"?l.refCleanup=a(e):a.current=e}}catch(n){il(l,t,n)}}function Ct(l,t){var a=l.ref,e=l.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(n){il(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){il(l,t,n)}else a.current=null}function kf(l){var t=l.type,a=l.memoizedProps,e=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break l;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(n){il(l,l.return,n)}}function zs(l,t,a){try{var e=l.stateNode;j0(e,l.type,a,t),e[Wl]=t}catch(n){il(l,l.return,n)}}function $f(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ya(l.type)||l.tag===4}function _s(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||$f(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ya(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function As(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(l),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ut));else if(e!==4&&(e===27&&ya(l.type)&&(a=l.stateNode,t=null),l=l.child,l!==null))for(As(l,t,a),l=l.sibling;l!==null;)As(l,t,a),l=l.sibling}function hu(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?a.insertBefore(l,t):a.appendChild(l);else if(e!==4&&(e===27&&ya(l.type)&&(a=l.stateNode),l=l.child,l!==null))for(hu(l,t,a),l=l.sibling;l!==null;)hu(l,t,a),l=l.sibling}function Wf(l){var t=l.stateNode,a=l.memoizedProps;try{for(var e=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zl(t,e,a),t[Yl]=l,t[Wl]=a}catch(u){il(l,l.return,u)}}var Lt=!1,xl=!1,Ts=!1,Ff=typeof WeakSet=="function"?WeakSet:Set,Bl=null;function r0(l,t){if(l=l.containerInfo,Vs=Hu,l=so(l),yi(l)){if("selectionStart"in l)var a={start:l.selectionStart,end:l.selectionEnd};else l:{a=(a=l.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var n=e.anchorOffset,u=e.focusNode;e=e.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break l}var i=0,s=-1,c=-1,p=0,b=0,A=l,m=null;t:for(;;){for(var v;A!==a||n!==0&&A.nodeType!==3||(s=i+n),A!==u||e!==0&&A.nodeType!==3||(c=i+e),A.nodeType===3&&(i+=A.nodeValue.length),(v=A.firstChild)!==null;)m=A,A=v;for(;;){if(A===l)break t;if(m===a&&++p===n&&(s=i),m===u&&++b===e&&(c=i),(v=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=v}a=s===-1||c===-1?null:{start:s,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ks={focusedElem:l,selectionRange:a},Hu=!1,Bl=t;Bl!==null;)if(t=Bl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Bl=l;else for(;Bl!==null;){switch(t=Bl,u=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(a=0;a<l.length;a++)n=l[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&u!==null){l=void 0,a=t,n=u.memoizedProps,u=u.memoizedState,e=a.stateNode;try{var U=Xa(a.type,n);l=e.getSnapshotBeforeUpdate(U,u),e.__reactInternalSnapshotBeforeUpdate=l}catch(Y){il(a,a.return,Y)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,a=l.nodeType,a===9)$s(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":$s(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(g(163))}if(l=t.sibling,l!==null){l.return=t.return,Bl=l;break}Bl=t.return}}function If(l,t,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:Kt(l,a),e&4&&nn(5,a);break;case 1:if(Kt(l,a),e&4)if(l=a.stateNode,t===null)try{l.componentDidMount()}catch(i){il(a,a.return,i)}else{var n=Xa(a.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){il(a,a.return,i)}}e&64&&Kf(a),e&512&&un(a,a.return);break;case 3:if(Kt(l,a),e&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ho(l,t)}catch(i){il(a,a.return,i)}}break;case 27:t===null&&e&4&&Wf(a);case 26:case 5:Kt(l,a),t===null&&e&4&&kf(a),e&512&&un(a,a.return);break;case 12:Kt(l,a);break;case 31:Kt(l,a),e&4&&tr(l,a);break;case 13:Kt(l,a),e&4&&ar(l,a),e&64&&(l=a.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(a=S0.bind(null,a),G0(l,a))));break;case 22:if(e=a.memoizedState!==null||Lt,!e){t=t!==null&&t.memoizedState!==null||xl,n=Lt;var u=xl;Lt=e,(xl=t)&&!u?Jt(l,a,(a.subtreeFlags&8772)!==0):Kt(l,a),Lt=n,xl=u}break;case 30:break;default:Kt(l,a)}}function Pf(l){var t=l.alternate;t!==null&&(l.alternate=null,Pf(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&li(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var ml=null,Il=!1;function Vt(l,t,a){for(a=a.child;a!==null;)lr(l,t,a),a=a.sibling}function lr(l,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ne,a)}catch{}switch(a.tag){case 26:xl||Ct(a,t),Vt(l,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xl||Ct(a,t);var e=ml,n=Il;ya(a.type)&&(ml=a.stateNode,Il=!1),Vt(l,t,a),pn(a.stateNode),ml=e,Il=n;break;case 5:xl||Ct(a,t);case 6:if(e=ml,n=Il,ml=null,Vt(l,t,a),ml=e,Il=n,ml!==null)if(Il)try{(ml.nodeType===9?ml.body:ml.nodeName==="HTML"?ml.ownerDocument.body:ml).removeChild(a.stateNode)}catch(u){il(a,t,u)}else try{ml.removeChild(a.stateNode)}catch(u){il(a,t,u)}break;case 18:ml!==null&&(Il?(l=ml,Kr(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.stateNode),De(l)):Kr(ml,a.stateNode));break;case 4:e=ml,n=Il,ml=a.stateNode.containerInfo,Il=!0,Vt(l,t,a),ml=e,Il=n;break;case 0:case 11:case 14:case 15:fa(2,a,t),xl||fa(4,a,t),Vt(l,t,a);break;case 1:xl||(Ct(a,t),e=a.stateNode,typeof e.componentWillUnmount=="function"&&Jf(a,t,e)),Vt(l,t,a);break;case 21:Vt(l,t,a);break;case 22:xl=(e=xl)||a.memoizedState!==null,Vt(l,t,a),xl=e;break;default:Vt(l,t,a)}}function tr(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{De(l)}catch(a){il(t,t.return,a)}}}function ar(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{De(l)}catch(a){il(t,t.return,a)}}function g0(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Ff),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Ff),t;default:throw Error(g(435,l.tag))}}function pu(l,t){var a=g0(l);t.forEach(function(e){if(!a.has(e)){a.add(e);var n=z0.bind(null,l,e);e.then(n,n)}})}function Pl(l,t){var a=t.deletions;if(a!==null)for(var e=0;e<a.length;e++){var n=a[e],u=l,i=t,s=i;l:for(;s!==null;){switch(s.tag){case 27:if(ya(s.type)){ml=s.stateNode,Il=!1;break l}break;case 5:ml=s.stateNode,Il=!1;break l;case 3:case 4:ml=s.stateNode.containerInfo,Il=!0;break l}s=s.return}if(ml===null)throw Error(g(160));lr(u,i,n),ml=null,Il=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)er(t,l),t=t.sibling}var Mt=null;function er(l,t){var a=l.alternate,e=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),e&4&&(fa(3,l,l.return),nn(3,l),fa(5,l,l.return));break;case 1:Pl(t,l),lt(l),e&512&&(xl||a===null||Ct(a,a.return)),e&64&&Lt&&(l=l.updateQueue,l!==null&&(e=l.callbacks,e!==null&&(a=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var n=Mt;if(Pl(t,l),lt(l),e&512&&(xl||a===null||Ct(a,a.return)),e&4){var u=a!==null?a.memoizedState:null;if(e=l.memoizedState,a===null)if(e===null)if(l.stateNode===null){l:{e=l.type,a=l.memoizedProps,n=n.ownerDocument||n;t:switch(e){case"title":u=n.getElementsByTagName("title")[0],(!u||u[je]||u[Yl]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(e),n.head.insertBefore(u,n.querySelector("head > title"))),Zl(u,e,a),u[Yl]=l,ql(u),e=u;break l;case"link":var i=eg("link","href",n).get(e+(a.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(s,1);break t}}u=n.createElement(e),Zl(u,e,a),n.head.appendChild(u);break;case"meta":if(i=eg("meta","content",n).get(e+(a.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(s,1);break t}}u=n.createElement(e),Zl(u,e,a),n.head.appendChild(u);break;default:throw Error(g(468,e))}u[Yl]=l,ql(u),e=u}l.stateNode=e}else ng(n,l.type,l.stateNode);else l.stateNode=ag(n,e,l.memoizedProps);else u!==e?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,e===null?ng(n,l.type,l.stateNode):ag(n,e,l.memoizedProps)):e===null&&l.stateNode!==null&&zs(l,l.memoizedProps,a.memoizedProps)}break;case 27:Pl(t,l),lt(l),e&512&&(xl||a===null||Ct(a,a.return)),a!==null&&e&4&&zs(l,l.memoizedProps,a.memoizedProps);break;case 5:if(Pl(t,l),lt(l),e&512&&(xl||a===null||Ct(a,a.return)),l.flags&32){n=l.stateNode;try{Wa(n,"")}catch(U){il(l,l.return,U)}}e&4&&l.stateNode!=null&&(n=l.memoizedProps,zs(l,n,a!==null?a.memoizedProps:n)),e&1024&&(Ts=!0);break;case 6:if(Pl(t,l),lt(l),e&4){if(l.stateNode===null)throw Error(g(162));e=l.memoizedProps,a=l.stateNode;try{a.nodeValue=e}catch(U){il(l,l.return,U)}}break;case 3:if(wu=null,n=Mt,Mt=Nu(t.containerInfo),Pl(t,l),Mt=n,lt(l),e&4&&a!==null&&a.memoizedState.isDehydrated)try{De(t.containerInfo)}catch(U){il(l,l.return,U)}Ts&&(Ts=!1,nr(l));break;case 4:e=Mt,Mt=Nu(l.stateNode.containerInfo),Pl(t,l),lt(l),Mt=e;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,pu(l,e)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yu=et()),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,pu(l,e)));break;case 22:n=l.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,p=Lt,b=xl;if(Lt=p||n,xl=b||c,Pl(t,l),xl=b,Lt=p,lt(l),e&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||c||Lt||xl||Qa(l)),a=null,t=l;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(u=c.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=c.stateNode;var A=c.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(U){il(c,c.return,U)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(U){il(c,c.return,U)}}}else if(t.tag===18){if(a===null){c=t;try{var v=c.stateNode;n?Jr(v,!0):Jr(c.stateNode,!1)}catch(U){il(c,c.return,U)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=l.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,pu(l,a))));break;case 19:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,pu(l,e)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var a,e=l.return;e!==null;){if($f(e)){a=e;break}e=e.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,u=_s(l);hu(l,u,n);break;case 5:var i=a.stateNode;a.flags&32&&(Wa(i,""),a.flags&=-33);var s=_s(l);hu(l,s,i);break;case 3:case 4:var c=a.stateNode.containerInfo,p=_s(l);As(l,p,c);break;default:throw Error(g(161))}}catch(b){il(l,l.return,b)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function nr(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;nr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Kt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)If(l,t.alternate,t),t=t.sibling}function Qa(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:fa(4,t,t.return),Qa(t);break;case 1:Ct(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Jf(t,t.return,a),Qa(t);break;case 27:pn(t.stateNode);case 26:case 5:Ct(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}l=l.sibling}}function Jt(l,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,n=l,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Jt(n,u,a),nn(4,u);break;case 1:if(Jt(n,u,a),e=u,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){il(e,e.return,p)}if(e=u,n=e.updateQueue,n!==null){var s=e.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Uo(c[n],s)}catch(p){il(e,e.return,p)}}a&&i&64&&Kf(u),un(u,u.return);break;case 27:Wf(u);case 26:case 5:Jt(n,u,a),a&&e===null&&i&4&&kf(u),un(u,u.return);break;case 12:Jt(n,u,a);break;case 31:Jt(n,u,a),a&&i&4&&tr(n,u);break;case 13:Jt(n,u,a),a&&i&4&&ar(n,u);break;case 22:u.memoizedState===null&&Jt(n,u,a),un(u,u.return);break;case 30:break;default:Jt(n,u,a)}t=t.sibling}}function Es(l,t){var a=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(l!=null&&l.refCount++,a!=null&&Ve(a))}function Ms(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ve(l))}function Dt(l,t,a,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ur(l,t,a,e),t=t.sibling}function ur(l,t,a,e){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Dt(l,t,a,e),n&2048&&nn(9,t);break;case 1:Dt(l,t,a,e);break;case 3:Dt(l,t,a,e),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ve(l)));break;case 12:if(n&2048){Dt(l,t,a,e),l=t.stateNode;try{var u=t.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(c){il(t,t.return,c)}}else Dt(l,t,a,e);break;case 31:Dt(l,t,a,e);break;case 13:Dt(l,t,a,e);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?Dt(l,t,a,e):sn(l,t):u._visibility&2?Dt(l,t,a,e):(u._visibility|=2,me(l,t,a,e,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Es(i,t);break;case 24:Dt(l,t,a,e),n&2048&&Ms(t.alternate,t);break;default:Dt(l,t,a,e)}}function me(l,t,a,e,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=l,i=t,s=a,c=e,p=i.flags;switch(i.tag){case 0:case 11:case 15:me(u,i,s,c,n),nn(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?me(u,i,s,c,n):sn(u,i):(b._visibility|=2,me(u,i,s,c,n)),n&&p&2048&&Es(i.alternate,i);break;case 24:me(u,i,s,c,n),n&&p&2048&&Ms(i.alternate,i);break;default:me(u,i,s,c,n)}t=t.sibling}}function sn(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=l,e=t,n=e.flags;switch(e.tag){case 22:sn(a,e),n&2048&&Es(e.alternate,e);break;case 24:sn(a,e),n&2048&&Ms(e.alternate,e);break;default:sn(a,e)}t=t.sibling}}var cn=8192;function ye(l,t,a){if(l.subtreeFlags&cn)for(l=l.child;l!==null;)ir(l,t,a),l=l.sibling}function ir(l,t,a){switch(l.tag){case 26:ye(l,t,a),l.flags&cn&&l.memoizedState!==null&&I0(a,Mt,l.memoizedState,l.memoizedProps);break;case 5:ye(l,t,a);break;case 3:case 4:var e=Mt;Mt=Nu(l.stateNode.containerInfo),ye(l,t,a),Mt=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=cn,cn=16777216,ye(l,t,a),cn=e):ye(l,t,a));break;default:ye(l,t,a)}}function sr(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function on(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Bl=e,or(e,l)}sr(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)cr(l),l=l.sibling}function cr(l){switch(l.tag){case 0:case 11:case 15:on(l),l.flags&2048&&fa(9,l,l.return);break;case 3:on(l);break;case 12:on(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,mu(l)):on(l);break;default:on(l)}}function mu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Bl=e,or(e,l)}sr(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:fa(8,t,t.return),mu(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mu(t));break;default:mu(t)}l=l.sibling}}function or(l,t){for(;Bl!==null;){var a=Bl;switch(a.tag){case 0:case 11:case 15:fa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Ve(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,Bl=e;else l:for(a=l;Bl!==null;){e=Bl;var n=e.sibling,u=e.return;if(Pf(e),e===a){Bl=null;break l}if(n!==null){n.return=u,Bl=n;break l}Bl=u}}}var d0={getCacheForType:function(l){var t=Xl(Cl),a=t.data.get(l);return a===void 0&&(a=l(),t.data.set(l,a)),a},cacheSignal:function(){return Xl(Cl).controller.signal}},h0=typeof WeakMap=="function"?WeakMap:Map,el=0,dl=null,$=null,F=0,ul=0,ft=null,ra=!1,ve=!1,Ds=!1,kt=0,El=0,ga=0,Za=0,Os=0,rt=0,be=0,fn=null,tt=null,Ns=!1,yu=0,fr=0,vu=1/0,bu=null,da=null,Hl=0,ha=null,Se=null,$t=0,Cs=0,ws=null,rr=null,rn=0,js=null;function gt(){return(el&2)!==0&&F!==0?F&-F:S.T!==null?Bs():Ec()}function gr(){if(rt===0)if((F&536870912)===0||ll){var l=Dn;Dn<<=1,(Dn&3932160)===0&&(Dn=262144),rt=l}else rt=536870912;return l=ct.current,l!==null&&(l.flags|=32),rt}function at(l,t,a){(l===dl&&(ul===2||ul===9)||l.cancelPendingCommit!==null)&&(ze(l,0),pa(l,F,rt,!1)),we(l,a),((el&2)===0||l!==dl)&&(l===dl&&((el&2)===0&&(Za|=a),El===4&&pa(l,F,rt,!1)),wt(l))}function dr(l,t,a){if((el&6)!==0)throw Error(g(327));var e=!a&&(t&127)===0&&(t&l.expiredLanes)===0||Ce(l,t),n=e?y0(l,t):Us(l,t,!0),u=e;do{if(n===0){ve&&!e&&pa(l,t,0,!1);break}else{if(a=l.current.alternate,u&&!p0(a)){n=Us(l,t,!1),u=!1;continue}if(n===2){if(u=t,l.errorRecoveryDisabledLanes&u)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var s=l;n=fn;var c=s.current.memoizedState.isDehydrated;if(c&&(ze(s,i).flags|=256),i=Us(s,i,!1),i!==2){if(Ds&&!c){s.errorRecoveryDisabledLanes|=u,Za|=u,n=4;break l}u=tt,tt=n,u!==null&&(tt===null?tt=u:tt.push.apply(tt,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){ze(l,0),pa(l,t,0,!0);break}l:{switch(e=l,u=n,u){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:pa(e,t,rt,!ra);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=yu+300-et(),10<n)){if(pa(e,t,rt,!ra),Nn(e,0,!0)!==0)break l;$t=t,e.timeoutHandle=Lr(hr.bind(null,e,a,tt,bu,Ns,t,rt,Za,be,ra,u,"Throttled",-0,0),n);break l}hr(e,a,tt,bu,Ns,t,rt,Za,be,ra,u,null,-0,0)}}break}while(!0);wt(l)}function hr(l,t,a,e,n,u,i,s,c,p,b,A,m,v){if(l.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},ir(t,u,A);var U=(u&62914560)===u?yu-et():(u&4194048)===u?fr-et():0;if(U=P0(A,U),U!==null){$t=u,l.cancelPendingCommit=U(_r.bind(null,l,t,u,a,e,n,i,s,c,b,A,null,m,v)),pa(l,u,i,!p);return}}_r(l,t,u,a,e,n,i,s,c)}function p0(l){for(var t=l;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var n=a[e],u=n.getSnapshot;n=n.value;try{if(!it(u(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pa(l,t,a,e){t&=~Os,t&=~Za,l.suspendedLanes|=t,l.pingedLanes&=~t,e&&(l.warmLanes|=t),e=l.expirationTimes;for(var n=t;0<n;){var u=31-ut(n),i=1<<u;e[u]=-1,n&=~i}a!==0&&_c(l,a,t)}function Su(){return(el&6)===0?(gn(0),!1):!0}function xs(){if($!==null){if(ul===0)var l=$.return;else l=$,Bt=Ua=null,$i(l),re=null,Je=0,l=$;for(;l!==null;)Vf(l.alternate,l),l=l.return;$=null}}function ze(l,t){var a=l.timeoutHandle;a!==-1&&(l.timeoutHandle=-1,H0(a)),a=l.cancelPendingCommit,a!==null&&(l.cancelPendingCommit=null,a()),$t=0,xs(),dl=l,$=a=Rt(l.current,null),F=t,ul=0,ft=null,ra=!1,ve=Ce(l,t),Ds=!1,be=rt=Os=Za=ga=El=0,tt=fn=null,Ns=!1,(t&8)!==0&&(t|=t&32);var e=l.entangledLanes;if(e!==0)for(l=l.entanglements,e&=t;0<e;){var n=31-ut(e),u=1<<n;t|=l[n],e&=~u}return kt=t,Xn(),a}function pr(l,t){L=null,S.H=tn,t===fe||t===$n?(t=Co(),ul=3):t===qi?(t=Co(),ul=4):ul=t===rs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,$===null&&(El=1,ou(l,yt(t,l.current)))}function mr(){var l=ct.current;return l===null?!0:(F&4194048)===F?zt===null:(F&62914560)===F||(F&536870912)!==0?l===zt:!1}function yr(){var l=S.H;return S.H=tn,l===null?tn:l}function vr(){var l=S.A;return S.A=d0,l}function zu(){El=4,ra||(F&4194048)!==F&&ct.current!==null||(ve=!0),(ga&134217727)===0&&(Za&134217727)===0||dl===null||pa(dl,F,rt,!1)}function Us(l,t,a){var e=el;el|=2;var n=yr(),u=vr();(dl!==l||F!==t)&&(bu=null,ze(l,t)),t=!1;var i=El;l:do try{if(ul!==0&&$!==null){var s=$,c=ft;switch(ul){case 8:xs(),i=6;break l;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var p=ul;if(ul=0,ft=null,_e(l,s,c,p),a&&ve){i=0;break l}break;default:p=ul,ul=0,ft=null,_e(l,s,c,p)}}m0(),i=El;break}catch(b){pr(l,b)}while(!0);return t&&l.shellSuspendCounter++,Bt=Ua=null,el=e,S.H=n,S.A=u,$===null&&(dl=null,F=0,Xn()),i}function m0(){for(;$!==null;)br($)}function y0(l,t){var a=el;el|=2;var e=yr(),n=vr();dl!==l||F!==t?(bu=null,vu=et()+500,ze(l,t)):ve=Ce(l,t);l:do try{if(ul!==0&&$!==null){t=$;var u=ft;t:switch(ul){case 1:ul=0,ft=null,_e(l,t,u,1);break;case 2:case 9:if(Oo(u)){ul=0,ft=null,Sr(t);break}t=function(){ul!==2&&ul!==9||dl!==l||(ul=7),wt(l)},u.then(t,t);break l;case 3:ul=7;break l;case 4:ul=5;break l;case 7:Oo(u)?(ul=0,ft=null,Sr(t)):(ul=0,ft=null,_e(l,t,u,7));break;case 5:var i=null;switch($.tag){case 26:i=$.memoizedState;case 5:case 27:var s=$;if(i?ug(i):s.stateNode.complete){ul=0,ft=null;var c=s.sibling;if(c!==null)$=c;else{var p=s.return;p!==null?($=p,_u(p)):$=null}break t}}ul=0,ft=null,_e(l,t,u,5);break;case 6:ul=0,ft=null,_e(l,t,u,6);break;case 8:xs(),El=6;break l;default:throw Error(g(462))}}v0();break}catch(b){pr(l,b)}while(!0);return Bt=Ua=null,S.H=e,S.A=n,el=a,$!==null?0:(dl=null,F=0,Xn(),El)}function v0(){for(;$!==null&&!Xg();)br($)}function br(l){var t=Zf(l.alternate,l,kt);l.memoizedProps=l.pendingProps,t===null?_u(l):$=t}function Sr(l){var t=l,a=t.alternate;switch(t.tag){case 15:case 0:t=qf(a,t,t.pendingProps,t.type,void 0,F);break;case 11:t=qf(a,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:$i(t);default:Vf(a,t),t=$=yo(t,kt),t=Zf(a,t,kt)}l.memoizedProps=l.pendingProps,t===null?_u(l):$=t}function _e(l,t,a,e){Bt=Ua=null,$i(t),re=null,Je=0;var n=t.return;try{if(i0(l,n,t,a,F)){El=1,ou(l,yt(a,l.current)),$=null;return}}catch(u){if(n!==null)throw $=n,u;El=1,ou(l,yt(a,l.current)),$=null;return}t.flags&32768?(ll||e===1?l=!0:ve||(F&536870912)!==0?l=!1:(ra=l=!0,(e===2||e===9||e===3||e===6)&&(e=ct.current,e!==null&&e.tag===13&&(e.flags|=16384))),zr(t,l)):_u(t)}function _u(l){var t=l;do{if((t.flags&32768)!==0){zr(t,ra);return}l=t.return;var a=o0(t.alternate,t,kt);if(a!==null){$=a;return}if(t=t.sibling,t!==null){$=t;return}$=t=l}while(t!==null);El===0&&(El=5)}function zr(l,t){do{var a=f0(l.alternate,l);if(a!==null){a.flags&=32767,$=a;return}if(a=l.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(l=l.sibling,l!==null)){$=l;return}$=l=a}while(l!==null);El=6,$=null}function _r(l,t,a,e,n,u,i,s,c){l.cancelPendingCommit=null;do Au();while(Hl!==0);if((el&6)!==0)throw Error(g(327));if(t!==null){if(t===l.current)throw Error(g(177));if(u=t.lanes|t.childLanes,u|=_i,Fg(l,a,u,i,s,c),l===dl&&($=dl=null,F=0),Se=t,ha=l,$t=a,Cs=u,ws=n,rr=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,_0(En,function(){return Dr(),null})):(l.callbackNode=null,l.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null,n=D.p,D.p=2,i=el,el|=4;try{r0(l,t,a)}finally{el=i,D.p=n,S.T=e}}Hl=1,Ar(),Tr(),Er()}}function Ar(){if(Hl===1){Hl=0;var l=ha,t=Se,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var e=D.p;D.p=2;var n=el;el|=4;try{er(t,l);var u=Ks,i=so(l.containerInfo),s=u.focusedElem,c=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&io(s.ownerDocument.documentElement,s)){if(c!==null&&yi(s)){var p=c.start,b=c.end;if(b===void 0&&(b=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(b,s.value.length);else{var A=s.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var v=m.getSelection(),U=s.textContent.length,Y=Math.min(c.start,U),rl=c.end===void 0?Y:Math.min(c.end,U);!v.extend&&Y>rl&&(i=rl,rl=Y,Y=i);var r=uo(s,Y),o=uo(s,rl);if(r&&o&&(v.rangeCount!==1||v.anchorNode!==r.node||v.anchorOffset!==r.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var h=A.createRange();h.setStart(r.node,r.offset),v.removeAllRanges(),Y>rl?(v.addRange(h),v.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),v.addRange(h))}}}}for(A=[],v=s;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<A.length;s++){var z=A[s];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Hu=!!Vs,Ks=Vs=null}finally{el=n,D.p=e,S.T=a}}l.current=t,Hl=2}}function Tr(){if(Hl===2){Hl=0;var l=ha,t=Se,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var e=D.p;D.p=2;var n=el;el|=4;try{If(l,t.alternate,t)}finally{el=n,D.p=e,S.T=a}}Hl=3}}function Er(){if(Hl===4||Hl===3){Hl=0,Qg();var l=ha,t=Se,a=$t,e=rr;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Hl=5:(Hl=0,Se=ha=null,Mr(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(da=null),Iu(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ne,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=S.T,n=D.p,D.p=2,S.T=null;try{for(var u=l.onRecoverableError,i=0;i<e.length;i++){var s=e[i];u(s.value,{componentStack:s.stack})}}finally{S.T=t,D.p=n}}($t&3)!==0&&Au(),wt(l),n=l.pendingLanes,(a&261930)!==0&&(n&42)!==0?l===js?rn++:(rn=0,js=l):rn=0,gn(0)}}function Mr(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Ve(t)))}function Au(){return Ar(),Tr(),Er(),Dr()}function Dr(){if(Hl!==5)return!1;var l=ha,t=Cs;Cs=0;var a=Iu($t),e=S.T,n=D.p;try{D.p=32>a?32:a,S.T=null,a=ws,ws=null;var u=ha,i=$t;if(Hl=0,Se=ha=null,$t=0,(el&6)!==0)throw Error(g(331));var s=el;if(el|=4,cr(u.current),ur(u,u.current,i,a),el=s,gn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ne,u)}catch{}return!0}finally{D.p=n,S.T=e,Mr(l,t)}}function Or(l,t,a){t=yt(a,t),t=fs(l.stateNode,t,2),l=sa(l,t,2),l!==null&&(we(l,2),wt(l))}function il(l,t,a){if(l.tag===3)Or(l,l,a);else for(;t!==null;){if(t.tag===3){Or(t,l,a);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(da===null||!da.has(e))){l=yt(a,l),a=Nf(2),e=sa(t,a,2),e!==null&&(Cf(a,e,t,l),we(e,2),wt(e));break}}t=t.return}}function Hs(l,t,a){var e=l.pingCache;if(e===null){e=l.pingCache=new h0;var n=new Set;e.set(t,n)}else n=e.get(t),n===void 0&&(n=new Set,e.set(t,n));n.has(a)||(Ds=!0,n.add(a),l=b0.bind(null,l,t,a),t.then(l,l))}function b0(l,t,a){var e=l.pingCache;e!==null&&e.delete(t),l.pingedLanes|=l.suspendedLanes&a,l.warmLanes&=~a,dl===l&&(F&a)===a&&(El===4||El===3&&(F&62914560)===F&&300>et()-yu?(el&2)===0&&ze(l,0):Os|=a,be===F&&(be=0)),wt(l)}function Nr(l,t){t===0&&(t=zc()),l=wa(l,t),l!==null&&(we(l,t),wt(l))}function S0(l){var t=l.memoizedState,a=0;t!==null&&(a=t.retryLane),Nr(l,a)}function z0(l,t){var a=0;switch(l.tag){case 31:case 13:var e=l.stateNode,n=l.memoizedState;n!==null&&(a=n.retryLane);break;case 19:e=l.stateNode;break;case 22:e=l.stateNode._retryCache;break;default:throw Error(g(314))}e!==null&&e.delete(t),Nr(l,a)}function _0(l,t){return ku(l,t)}var Tu=null,Ae=null,Rs=!1,Eu=!1,qs=!1,ma=0;function wt(l){l!==Ae&&l.next===null&&(Ae===null?Tu=Ae=l:Ae=Ae.next=l),Eu=!0,Rs||(Rs=!0,T0())}function gn(l,t){if(!qs&&Eu){qs=!0;do for(var a=!1,e=Tu;e!==null;){if(l!==0){var n=e.pendingLanes;if(n===0)var u=0;else{var i=e.suspendedLanes,s=e.pingedLanes;u=(1<<31-ut(42|l)+1)-1,u&=n&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,xr(e,u))}else u=F,u=Nn(e,e===dl?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(u&3)===0||Ce(e,u)||(a=!0,xr(e,u));e=e.next}while(a);qs=!1}}function A0(){Cr()}function Cr(){Eu=Rs=!1;var l=0;ma!==0&&U0()&&(l=ma);for(var t=et(),a=null,e=Tu;e!==null;){var n=e.next,u=wr(e,t);u===0?(e.next=null,a===null?Tu=n:a.next=n,n===null&&(Ae=a)):(a=e,(l!==0||(u&3)!==0)&&(Eu=!0)),e=n}Hl!==0&&Hl!==5||gn(l),ma!==0&&(ma=0)}function wr(l,t){for(var a=l.suspendedLanes,e=l.pingedLanes,n=l.expirationTimes,u=l.pendingLanes&-62914561;0<u;){var i=31-ut(u),s=1<<i,c=n[i];c===-1?((s&a)===0||(s&e)!==0)&&(n[i]=Wg(s,t)):c<=t&&(l.expiredLanes|=s),u&=~s}if(t=dl,a=F,a=Nn(l,l===t?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e=l.callbackNode,a===0||l===t&&(ul===2||ul===9)||l.cancelPendingCommit!==null)return e!==null&&e!==null&&$u(e),l.callbackNode=null,l.callbackPriority=0;if((a&3)===0||Ce(l,a)){if(t=a&-a,t===l.callbackPriority)return t;switch(e!==null&&$u(e),Iu(a)){case 2:case 8:a=bc;break;case 32:a=En;break;case 268435456:a=Sc;break;default:a=En}return e=jr.bind(null,l),a=ku(a,e),l.callbackPriority=t,l.callbackNode=a,t}return e!==null&&e!==null&&$u(e),l.callbackPriority=2,l.callbackNode=null,2}function jr(l,t){if(Hl!==0&&Hl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var a=l.callbackNode;if(Au()&&l.callbackNode!==a)return null;var e=F;return e=Nn(l,l===dl?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e===0?null:(dr(l,e,t),wr(l,et()),l.callbackNode!=null&&l.callbackNode===a?jr.bind(null,l):null)}function xr(l,t){if(Au())return null;dr(l,t,!0)}function T0(){R0(function(){(el&6)!==0?ku(vc,A0):Cr()})}function Bs(){if(ma===0){var l=ce;l===0&&(l=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),ma=l}return ma}function Ur(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:xn(""+l)}function Hr(l,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,l.id&&a.setAttribute("form",l.id),t.parentNode.insertBefore(a,t),l=new FormData(l),a.parentNode.removeChild(a),l}function E0(l,t,a,e,n){if(t==="submit"&&a&&a.stateNode===n){var u=Ur((n[Wl]||null).action),i=e.submitter;i&&(t=(t=i[Wl]||null)?Ur(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var s=new qn("action","action",null,e,n);l.push({event:s,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(ma!==0){var c=i?Hr(n,i):new FormData(n);ns(a,{pending:!0,data:c,method:n.method,action:u},null,c)}}else typeof u=="function"&&(s.preventDefault(),c=i?Hr(n,i):new FormData(n),ns(a,{pending:!0,data:c,method:n.method,action:u},u,c))},currentTarget:n}]})}}for(var Ys=0;Ys<zi.length;Ys++){var Gs=zi[Ys],M0=Gs.toLowerCase(),D0=Gs[0].toUpperCase()+Gs.slice(1);Et(M0,"on"+D0)}Et(fo,"onAnimationEnd"),Et(ro,"onAnimationIteration"),Et(go,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Zd,"onTransitionRun"),Et(Ld,"onTransitionStart"),Et(Vd,"onTransitionCancel"),Et(ho,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function Rr(l,t){t=(t&4)!==0;for(var a=0;a<l.length;a++){var e=l[a],n=e.event;e=e.listeners;l:{var u=void 0;if(t)for(var i=e.length-1;0<=i;i--){var s=e[i],c=s.instance,p=s.currentTarget;if(s=s.listener,c!==u&&n.isPropagationStopped())break l;u=s,n.currentTarget=p;try{u(n)}catch(b){Gn(b)}n.currentTarget=null,u=c}else for(i=0;i<e.length;i++){if(s=e[i],c=s.instance,p=s.currentTarget,s=s.listener,c!==u&&n.isPropagationStopped())break l;u=s,n.currentTarget=p;try{u(n)}catch(b){Gn(b)}n.currentTarget=null,u=c}}}}function W(l,t){var a=t[Pu];a===void 0&&(a=t[Pu]=new Set);var e=l+"__bubble";a.has(e)||(qr(t,l,2,!1),a.add(e))}function Xs(l,t,a){var e=0;t&&(e|=4),qr(a,l,e,t)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Qs(l){if(!l[Mu]){l[Mu]=!0,Oc.forEach(function(a){a!=="selectionchange"&&(O0.has(a)||Xs(a,!1,l),Xs(a,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Mu]||(t[Mu]=!0,Xs("selectionchange",!1,t))}}function qr(l,t,a,e){switch(gg(t)){case 2:var n=ah;break;case 8:n=eh;break;default:n=ec}a=n.bind(null,t,a,l),n=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),e?n!==void 0?l.addEventListener(t,a,{capture:!0,passive:n}):l.addEventListener(t,a,!0):n!==void 0?l.addEventListener(t,a,{passive:n}):l.addEventListener(t,a,!1)}function Zs(l,t,a,e,n){var u=e;if((t&1)===0&&(t&2)===0&&e!==null)l:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var s=e.stateNode.containerInfo;if(s===n)break;if(i===4)for(i=e.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;s!==null;){if(i=Va(s),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){e=u=i;continue l}s=s.parentNode}}e=e.return}Gc(function(){var p=u,b=ii(a),A=[];l:{var m=po.get(l);if(m!==void 0){var v=qn,U=l;switch(l){case"keypress":if(Hn(a)===0)break l;case"keydown":case"keyup":v=zd;break;case"focusin":U="focus",v=gi;break;case"focusout":U="blur",v=gi;break;case"beforeblur":case"afterblur":v=gi;break;case"click":if(a.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Td;break;case fo:case ro:case go:v=gd;break;case ho:v=Md;break;case"scroll":case"scrollend":v=sd;break;case"wheel":v=Od;break;case"copy":case"cut":case"paste":v=hd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vc;break;case"toggle":case"beforetoggle":v=Cd}var Y=(t&4)!==0,rl=!Y&&(l==="scroll"||l==="scrollend"),r=Y?m!==null?m+"Capture":null:m;Y=[];for(var o=p,h;o!==null;){var z=o;if(h=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||h===null||r===null||(z=Ue(o,r),z!=null&&Y.push(hn(o,z,h))),rl)break;o=o.return}0<Y.length&&(m=new v(m,U,null,a,b),A.push({event:m,listeners:Y}))}}if((t&7)===0){l:{if(m=l==="mouseover"||l==="pointerover",v=l==="mouseout"||l==="pointerout",m&&a!==ui&&(U=a.relatedTarget||a.fromElement)&&(Va(U)||U[La]))break l;if((v||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,v?(U=a.relatedTarget||a.toElement,v=p,U=U?Va(U):null,U!==null&&(rl=w(U),Y=U.tag,U!==rl||Y!==5&&Y!==27&&Y!==6)&&(U=null)):(v=null,U=p),v!==U)){if(Y=Zc,z="onMouseLeave",r="onMouseEnter",o="mouse",(l==="pointerout"||l==="pointerover")&&(Y=Vc,z="onPointerLeave",r="onPointerEnter",o="pointer"),rl=v==null?m:xe(v),h=U==null?m:xe(U),m=new Y(z,o+"leave",v,a,b),m.target=rl,m.relatedTarget=h,z=null,Va(b)===p&&(Y=new Y(r,o+"enter",U,a,b),Y.target=h,Y.relatedTarget=rl,z=Y),rl=z,v&&U)t:{for(Y=N0,r=v,o=U,h=0,z=r;z;z=Y(z))h++;z=0;for(var B=o;B;B=Y(B))z++;for(;0<h-z;)r=Y(r),h--;for(;0<z-h;)o=Y(o),z--;for(;h--;){if(r===o||o!==null&&r===o.alternate){Y=r;break t}r=Y(r),o=Y(o)}Y=null}else Y=null;v!==null&&Br(A,m,v,Y,!1),U!==null&&rl!==null&&Br(A,rl,U,Y,!0)}}l:{if(m=p?xe(p):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var tl=Pc;else if(Fc(m))if(lo)tl=Gd;else{tl=Bd;var R=qd}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?p&&ni(p.elementType)&&(tl=Pc):tl=Yd;if(tl&&(tl=tl(l,p))){Ic(A,tl,a,b);break l}R&&R(l,m,p),l==="focusout"&&p&&m.type==="number"&&p.memoizedProps.value!=null&&ei(m,"number",m.value)}switch(R=p?xe(p):window,l){case"focusin":(Fc(R)||R.contentEditable==="true")&&(le=R,vi=p,Qe=null);break;case"focusout":Qe=vi=le=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,co(A,a,b);break;case"selectionchange":if(Qd)break;case"keydown":case"keyup":co(A,a,b)}var V;if(hi)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pa?$c(l,a)&&(I="onCompositionEnd"):l==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Kc&&a.locale!=="ko"&&(Pa||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pa&&(V=Xc()):(la=b,oi="value"in la?la.value:la.textContent,Pa=!0)),R=Du(p,I),0<R.length&&(I=new Lc(I,l,null,a,b),A.push({event:I,listeners:R}),V?I.data=V:(V=Wc(a),V!==null&&(I.data=V)))),(V=jd?xd(l,a):Ud(l,a))&&(I=Du(p,"onBeforeInput"),0<I.length&&(R=new Lc("onBeforeInput","beforeinput",null,a,b),A.push({event:R,listeners:I}),R.data=V)),E0(A,l,p,a,b)}Rr(A,t)})}function hn(l,t,a){return{instance:l,listener:t,currentTarget:a}}function Du(l,t){for(var a=t+"Capture",e=[];l!==null;){var n=l,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ue(l,a),n!=null&&e.unshift(hn(l,n,u)),n=Ue(l,t),n!=null&&e.push(hn(l,n,u))),l.tag===3)return e;l=l.return}return[]}function N0(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Br(l,t,a,e,n){for(var u=t._reactName,i=[];a!==null&&a!==e;){var s=a,c=s.alternate,p=s.stateNode;if(s=s.tag,c!==null&&c===e)break;s!==5&&s!==26&&s!==27||p===null||(c=p,n?(p=Ue(a,u),p!=null&&i.unshift(hn(a,p,c))):n||(p=Ue(a,u),p!=null&&i.push(hn(a,p,c)))),a=a.return}i.length!==0&&l.push({event:t,listeners:i})}var C0=/\r\n?/g,w0=/\u0000|\uFFFD/g;function Yr(l){return(typeof l=="string"?l:""+l).replace(C0,`
`).replace(w0,"")}function Gr(l,t){return t=Yr(t),Yr(l)===t}function fl(l,t,a,e,n,u){switch(a){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||Wa(l,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&Wa(l,""+e);break;case"className":wn(l,"class",e);break;case"tabIndex":wn(l,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":wn(l,a,e);break;case"style":Bc(l,e,u);break;case"data":if(t!=="object"){wn(l,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||a!=="href")){l.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=xn(""+e),l.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){l.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(t!=="input"&&fl(l,t,"name",n.name,n,null),fl(l,t,"formEncType",n.formEncType,n,null),fl(l,t,"formMethod",n.formMethod,n,null),fl(l,t,"formTarget",n.formTarget,n,null)):(fl(l,t,"encType",n.encType,n,null),fl(l,t,"method",n.method,n,null),fl(l,t,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=xn(""+e),l.setAttribute(a,e);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=a}}break;case"multiple":l.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":l.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){l.removeAttribute("xlink:href");break}a=xn(""+e),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""+e):l.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""):l.removeAttribute(a);break;case"capture":case"download":e===!0?l.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,e):l.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?l.setAttribute(a,e):l.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?l.removeAttribute(a):l.setAttribute(a,e);break;case"popover":W("beforetoggle",l),W("toggle",l),Cn(l,"popover",e);break;case"xlinkActuate":xt(l,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":xt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":xt(l,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":xt(l,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":xt(l,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":xt(l,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":xt(l,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":xt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":xt(l,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Cn(l,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ud.get(a)||a,Cn(l,a,e))}}function Ls(l,t,a,e,n,u){switch(a){case"style":Bc(l,e,u);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=a}}break;case"children":typeof e=="string"?Wa(l,e):(typeof e=="number"||typeof e=="bigint")&&Wa(l,""+e);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Nc.hasOwnProperty(a))l:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),u=l[Wl]||null,u=u!=null?u[a]:null,typeof u=="function"&&l.removeEventListener(t,u,n),typeof e=="function")){typeof u!="function"&&u!==null&&(a in l?l[a]=null:l.hasAttribute(a)&&l.removeAttribute(a)),l.addEventListener(t,e,n);break l}a in l?l[a]=e:e===!0?l.setAttribute(a,""):Cn(l,a,e)}}}function Zl(l,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var e=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var i=a[u];if(i!=null)switch(u){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:fl(l,t,u,i,a,null)}}n&&fl(l,t,"srcSet",a.srcSet,a,null),e&&fl(l,t,"src",a.src,a,null);return;case"input":W("invalid",l);var s=u=i=n=null,c=null,p=null;for(e in a)if(a.hasOwnProperty(e)){var b=a[e];if(b!=null)switch(e){case"name":n=b;break;case"type":i=b;break;case"checked":c=b;break;case"defaultChecked":p=b;break;case"value":u=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(g(137,t));break;default:fl(l,t,e,b,a,null)}}Uc(l,u,s,c,p,i,n,!1);return;case"select":W("invalid",l),e=i=u=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":e=s;default:fl(l,t,n,s,a,null)}t=u,a=i,l.multiple=!!e,t!=null?$a(l,!!e,t,!1):a!=null&&$a(l,!!e,a,!0);return;case"textarea":W("invalid",l),u=n=e=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":e=s;break;case"defaultValue":n=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(g(91));break;default:fl(l,t,i,s,a,null)}Rc(l,e,n,u);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(e=a[c],e!=null))switch(c){case"selected":l.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:fl(l,t,c,e,a,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(e=0;e<dn.length;e++)W(dn[e],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(e=a[p],e!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:fl(l,t,p,e,a,null)}return;default:if(ni(t)){for(b in a)a.hasOwnProperty(b)&&(e=a[b],e!==void 0&&Ls(l,t,b,e,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(e=a[s],e!=null&&fl(l,t,s,e,a,null))}function j0(l,t,a,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,s=null,c=null,p=null,b=null;for(v in a){var A=a[v];if(a.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=A;default:e.hasOwnProperty(v)||fl(l,t,v,null,e,A)}}for(var m in e){var v=e[m];if(A=a[m],e.hasOwnProperty(m)&&(v!=null||A!=null))switch(m){case"type":u=v;break;case"name":n=v;break;case"checked":p=v;break;case"defaultChecked":b=v;break;case"value":i=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(g(137,t));break;default:v!==A&&fl(l,t,m,v,e,A)}}ai(l,i,s,c,p,b,u,n);return;case"select":v=i=s=m=null;for(u in a)if(c=a[u],a.hasOwnProperty(u)&&c!=null)switch(u){case"value":break;case"multiple":v=c;default:e.hasOwnProperty(u)||fl(l,t,u,null,e,c)}for(n in e)if(u=e[n],c=a[n],e.hasOwnProperty(n)&&(u!=null||c!=null))switch(n){case"value":m=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==c&&fl(l,t,n,u,e,c)}t=s,a=i,e=v,m!=null?$a(l,!!a,m,!1):!!e!=!!a&&(t!=null?$a(l,!!a,t,!0):$a(l,!!a,a?[]:"",!1));return;case"textarea":v=m=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!e.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:fl(l,t,s,null,e,n)}for(i in e)if(n=e[i],u=a[i],e.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":m=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==u&&fl(l,t,i,n,e,u)}Hc(l,m,v);return;case"option":for(var U in a)if(m=a[U],a.hasOwnProperty(U)&&m!=null&&!e.hasOwnProperty(U))switch(U){case"selected":l.selected=!1;break;default:fl(l,t,U,null,e,m)}for(c in e)if(m=e[c],v=a[c],e.hasOwnProperty(c)&&m!==v&&(m!=null||v!=null))switch(c){case"selected":l.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:fl(l,t,c,m,e,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Y in a)m=a[Y],a.hasOwnProperty(Y)&&m!=null&&!e.hasOwnProperty(Y)&&fl(l,t,Y,null,e,m);for(p in e)if(m=e[p],v=a[p],e.hasOwnProperty(p)&&m!==v&&(m!=null||v!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(g(137,t));break;default:fl(l,t,p,m,e,v)}return;default:if(ni(t)){for(var rl in a)m=a[rl],a.hasOwnProperty(rl)&&m!==void 0&&!e.hasOwnProperty(rl)&&Ls(l,t,rl,void 0,e,m);for(b in e)m=e[b],v=a[b],!e.hasOwnProperty(b)||m===v||m===void 0&&v===void 0||Ls(l,t,b,m,e,v);return}}for(var r in a)m=a[r],a.hasOwnProperty(r)&&m!=null&&!e.hasOwnProperty(r)&&fl(l,t,r,null,e,m);for(A in e)m=e[A],v=a[A],!e.hasOwnProperty(A)||m===v||m==null&&v==null||fl(l,t,A,m,e,v)}function Xr(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function x0(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var n=a[e],u=n.transferSize,i=n.initiatorType,s=n.duration;if(u&&s&&Xr(i)){for(i=0,s=n.responseEnd,e+=1;e<a.length;e++){var c=a[e],p=c.startTime;if(p>s)break;var b=c.transferSize,A=c.initiatorType;b&&Xr(A)&&(c=c.responseEnd,i+=b*(c<s?1:(s-p)/(c-p)))}if(--e,t+=8*(u+i)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Vs=null,Ks=null;function Ou(l){return l.nodeType===9?l:l.ownerDocument}function Qr(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zr(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Js(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ks=null;function U0(){var l=window.event;return l&&l.type==="popstate"?l===ks?!1:(ks=l,!0):(ks=null,!1)}var Lr=typeof setTimeout=="function"?setTimeout:void 0,H0=typeof clearTimeout=="function"?clearTimeout:void 0,Vr=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof Vr<"u"?function(l){return Vr.resolve(null).then(l).catch(q0)}:Lr;function q0(l){setTimeout(function(){throw l})}function ya(l){return l==="head"}function Kr(l,t){var a=t,e=0;do{var n=a.nextSibling;if(l.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(e===0){l.removeChild(n),De(t);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")pn(l.ownerDocument.documentElement);else if(a==="head"){a=l.ownerDocument.head,pn(a);for(var u=a.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[je]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=i}}else a==="body"&&pn(l.ownerDocument.body);a=n}while(a);De(t)}function Jr(l,t){var a=l;l=0;do{var e=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(l===0)break;l--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||l++;a=e}while(a)}function $s(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$s(a),li(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}l.removeChild(a)}}function B0(l,t,a,e){for(;l.nodeType===1;){var n=a;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(e){if(!l[je])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(u=l.getAttribute("rel"),u==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(u!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(u=l.getAttribute("src"),(u!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===u)return l}else return l;if(l=_t(l.nextSibling),l===null)break}return null}function Y0(l,t,a){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!a||(l=_t(l.nextSibling),l===null))return null;return l}function kr(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=_t(l.nextSibling),l===null))return null;return l}function Ws(l){return l.data==="$?"||l.data==="$~"}function Fs(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function G0(l,t){var a=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||a.readyState!=="loading")t();else{var e=function(){t(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),l._reactRetry=e}}function _t(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Is=null;function $r(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="/$"||a==="/&"){if(t===0)return _t(l.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}l=l.nextSibling}return null}function Wr(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return l;t--}else a!=="/$"&&a!=="/&"||t++}l=l.previousSibling}return null}function Fr(l,t,a){switch(t=Ou(a),l){case"html":if(l=t.documentElement,!l)throw Error(g(452));return l;case"head":if(l=t.head,!l)throw Error(g(453));return l;case"body":if(l=t.body,!l)throw Error(g(454));return l;default:throw Error(g(451))}}function pn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);li(l)}var At=new Map,Ir=new Set;function Nu(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=D.d;D.d={f:X0,r:Q0,D:Z0,C:L0,L:V0,m:K0,X:k0,S:J0,M:$0};function X0(){var l=Wt.f(),t=Su();return l||t}function Q0(l){var t=Ka(l);t!==null&&t.tag===5&&t.type==="form"?pf(t):Wt.r(l)}var Te=typeof document>"u"?null:document;function Pr(l,t,a){var e=Te;if(e&&typeof t=="string"&&t){var n=pt(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ir.has(n)||(Ir.add(n),l={rel:l,crossOrigin:a,href:t},e.querySelector(n)===null&&(t=e.createElement("link"),Zl(t,"link",l),ql(t),e.head.appendChild(t)))}}function Z0(l){Wt.D(l),Pr("dns-prefetch",l,null)}function L0(l,t){Wt.C(l,t),Pr("preconnect",l,t)}function V0(l,t,a){Wt.L(l,t,a);var e=Te;if(e&&l&&t){var n='link[rel="preload"][as="'+pt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+pt(a.imageSizes)+'"]')):n+='[href="'+pt(l)+'"]';var u=n;switch(t){case"style":u=Ee(l);break;case"script":u=Me(l)}At.has(u)||(l=j({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:l,as:t},a),At.set(u,l),e.querySelector(n)!==null||t==="style"&&e.querySelector(mn(u))||t==="script"&&e.querySelector(yn(u))||(t=e.createElement("link"),Zl(t,"link",l),ql(t),e.head.appendChild(t)))}}function K0(l,t){Wt.m(l,t);var a=Te;if(a&&l){var e=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+pt(e)+'"][href="'+pt(l)+'"]',u=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Me(l)}if(!At.has(u)&&(l=j({rel:"modulepreload",href:l},t),At.set(u,l),a.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yn(u)))return}e=a.createElement("link"),Zl(e,"link",l),ql(e),a.head.appendChild(e)}}}function J0(l,t,a){Wt.S(l,t,a);var e=Te;if(e&&l){var n=Ja(e).hoistableStyles,u=Ee(l);t=t||"default";var i=n.get(u);if(!i){var s={loading:0,preload:null};if(i=e.querySelector(mn(u)))s.loading=5;else{l=j({rel:"stylesheet",href:l,"data-precedence":t},a),(a=At.get(u))&&Ps(l,a);var c=i=e.createElement("link");ql(c),Zl(c,"link",l),c._p=new Promise(function(p,b){c.onload=p,c.onerror=b}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Cu(i,t,e)}i={type:"stylesheet",instance:i,count:1,state:s},n.set(u,i)}}}function k0(l,t){Wt.X(l,t);var a=Te;if(a&&l){var e=Ja(a).hoistableScripts,n=Me(l),u=e.get(n);u||(u=a.querySelector(yn(n)),u||(l=j({src:l,async:!0},t),(t=At.get(n))&&lc(l,t),u=a.createElement("script"),ql(u),Zl(u,"link",l),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function $0(l,t){Wt.M(l,t);var a=Te;if(a&&l){var e=Ja(a).hoistableScripts,n=Me(l),u=e.get(n);u||(u=a.querySelector(yn(n)),u||(l=j({src:l,async:!0,type:"module"},t),(t=At.get(n))&&lc(l,t),u=a.createElement("script"),ql(u),Zl(u,"link",l),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function lg(l,t,a,e){var n=(n=k.current)?Nu(n):null;if(!n)throw Error(g(446));switch(l){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ee(a.href),a=Ja(n).hoistableStyles,e=a.get(t),e||(e={type:"style",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){l=Ee(a.href);var u=Ja(n).hoistableStyles,i=u.get(l);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(l,i),(u=n.querySelector(mn(l)))&&!u._p&&(i.instance=u,i.state.loading=5),At.has(l)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(l,a),u||W0(n,l,a,i.state))),t&&e===null)throw Error(g(528,""));return i}if(t&&e!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Me(a),a=Ja(n).hoistableScripts,e=a.get(t),e||(e={type:"script",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,l))}}function Ee(l){return'href="'+pt(l)+'"'}function mn(l){return'link[rel="stylesheet"]['+l+"]"}function tg(l){return j({},l,{"data-precedence":l.precedence,precedence:null})}function W0(l,t,a,e){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=l.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),Zl(t,"link",a),ql(t),l.head.appendChild(t))}function Me(l){return'[src="'+pt(l)+'"]'}function yn(l){return"script[async]"+l}function ag(l,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var e=l.querySelector('style[data-href~="'+pt(a.href)+'"]');if(e)return t.instance=e,ql(e),e;var n=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(l.ownerDocument||l).createElement("style"),ql(e),Zl(e,"style",n),Cu(e,a.precedence,l),t.instance=e;case"stylesheet":n=Ee(a.href);var u=l.querySelector(mn(n));if(u)return t.state.loading|=4,t.instance=u,ql(u),u;e=tg(a),(n=At.get(n))&&Ps(e,n),u=(l.ownerDocument||l).createElement("link"),ql(u);var i=u;return i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),Zl(u,"link",e),t.state.loading|=4,Cu(u,a.precedence,l),t.instance=u;case"script":return u=Me(a.src),(n=l.querySelector(yn(u)))?(t.instance=n,ql(n),n):(e=a,(n=At.get(u))&&(e=j({},a),lc(e,n)),l=l.ownerDocument||l,n=l.createElement("script"),ql(n),Zl(n,"link",e),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,Cu(e,a.precedence,l));return t.instance}function Cu(l,t,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,u=n,i=0;i<e.length;i++){var s=e[i];if(s.dataset.precedence===t)u=s;else if(u!==n)break}u?u.parentNode.insertBefore(l,u.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(l,t.firstChild))}function Ps(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function lc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var wu=null;function eg(l,t,a){if(wu===null){var e=new Map,n=wu=new Map;n.set(a,e)}else n=wu,e=n.get(a),e||(e=new Map,n.set(a,e));if(e.has(l))return e;for(e.set(l,null),a=a.getElementsByTagName(l),n=0;n<a.length;n++){var u=a[n];if(!(u[je]||u[Yl]||l==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=l+i;var s=e.get(i);s?s.push(u):e.set(i,[u])}}return e}function ng(l,t,a){l=l.ownerDocument||l,l.head.insertBefore(a,t==="title"?l.querySelector("head > title"):null)}function F0(l,t,a){if(a===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ug(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function I0(l,t,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ee(e.href),u=t.querySelector(mn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ju.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=u,ql(u);return}u=t.ownerDocument||t,e=tg(e),(n=At.get(n))&&Ps(e,n),u=u.createElement("link"),ql(u);var i=u;i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),Zl(u,"link",e),a.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=ju.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}var tc=0;function P0(l,t){return l.stylesheets&&l.count===0&&Uu(l,l.stylesheets),0<l.count||0<l.imgCount?function(a){var e=setTimeout(function(){if(l.stylesheets&&Uu(l,l.stylesheets),l.unsuspend){var u=l.unsuspend;l.unsuspend=null,u()}},6e4+t);0<l.imgBytes&&tc===0&&(tc=62500*x0());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Uu(l,l.stylesheets),l.unsuspend)){var u=l.unsuspend;l.unsuspend=null,u()}},(l.imgBytes>tc?50:800)+t);return l.unsuspend=a,function(){l.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uu(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var xu=null;function Uu(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,xu=new Map,t.forEach(lh,l),xu=null,ju.call(l))}function lh(l,t){if(!(t.state.loading&4)){var a=xu.get(l);if(a)var e=a.get(null);else{a=new Map,xu.set(l,a);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),e=i)}e&&a.set(null,e)}n=t.instance,i=n.getAttribute("data-precedence"),u=a.get(i)||e,u===e&&a.set(null,n),a.set(i,n),this.count++,e=ju.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),u?u.parentNode.insertBefore(n,u.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var vn={$$typeof:sl,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function th(l,t,a,e,n,u,i,s,c){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ig(l,t,a,e,n,u,i,s,c,p,b,A){return l=new th(l,t,a,i,c,p,b,A,s),t=1,u===!0&&(t|=24),u=st(3,null,null,t),l.current=u,u.stateNode=l,t=Ui(),t.refCount++,l.pooledCache=t,t.refCount++,u.memoizedState={element:e,isDehydrated:a,cache:t},Bi(u),l}function sg(l){return l?(l=ee,l):ee}function cg(l,t,a,e,n,u){n=sg(n),e.context===null?e.context=n:e.pendingContext=n,e=ia(t),e.payload={element:a},u=u===void 0?null:u,u!==null&&(e.callback=u),a=sa(l,e,t),a!==null&&(at(a,l,t),$e(a,l,t))}function og(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var a=l.retryLane;l.retryLane=a!==0&&a<t?a:t}}function ac(l,t){og(l,t),(l=l.alternate)&&og(l,t)}function fg(l){if(l.tag===13||l.tag===31){var t=wa(l,67108864);t!==null&&at(t,l,67108864),ac(l,67108864)}}function rg(l){if(l.tag===13||l.tag===31){var t=gt();t=Fu(t);var a=wa(l,t);a!==null&&at(a,l,t),ac(l,t)}}var Hu=!0;function ah(l,t,a,e){var n=S.T;S.T=null;var u=D.p;try{D.p=2,ec(l,t,a,e)}finally{D.p=u,S.T=n}}function eh(l,t,a,e){var n=S.T;S.T=null;var u=D.p;try{D.p=8,ec(l,t,a,e)}finally{D.p=u,S.T=n}}function ec(l,t,a,e){if(Hu){var n=nc(e);if(n===null)Zs(l,t,e,Ru,a),dg(l,e);else if(uh(n,l,t,a,e))e.stopPropagation();else if(dg(l,e),t&4&&-1<nh.indexOf(l)){for(;n!==null;){var u=Ka(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Ma(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var c=1<<31-ut(i);s.entanglements[1]|=c,i&=~c}wt(u),(el&6)===0&&(vu=et()+500,gn(0))}}break;case 31:case 13:s=wa(u,2),s!==null&&at(s,u,2),Su(),ac(u,2)}if(u=nc(e),u===null&&Zs(l,t,e,Ru,a),u===n)break;n=u}n!==null&&e.stopPropagation()}else Zs(l,t,e,null,a)}}function nc(l){return l=ii(l),uc(l)}var Ru=null;function uc(l){if(Ru=null,l=Va(l),l!==null){var t=w(l);if(t===null)l=null;else{var a=t.tag;if(a===13){if(l=q(t),l!==null)return l;l=null}else if(a===31){if(l=P(t),l!==null)return l;l=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ru=l,null}function gg(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zg()){case vc:return 2;case bc:return 8;case En:case Lg:return 32;case Sc:return 268435456;default:return 32}default:return 32}}var ic=!1,va=null,ba=null,Sa=null,bn=new Map,Sn=new Map,za=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dg(l,t){switch(l){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function zn(l,t,a,e,n,u){return l===null||l.nativeEvent!==u?(l={blockedOn:t,domEventName:a,eventSystemFlags:e,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&fg(t)),l):(l.eventSystemFlags|=e,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function uh(l,t,a,e,n){switch(t){case"focusin":return va=zn(va,l,t,a,e,n),!0;case"dragenter":return ba=zn(ba,l,t,a,e,n),!0;case"mouseover":return Sa=zn(Sa,l,t,a,e,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,zn(bn.get(u)||null,l,t,a,e,n)),!0;case"gotpointercapture":return u=n.pointerId,Sn.set(u,zn(Sn.get(u)||null,l,t,a,e,n)),!0}return!1}function hg(l){var t=Va(l.target);if(t!==null){var a=w(t);if(a!==null){if(t=a.tag,t===13){if(t=q(a),t!==null){l.blockedOn=t,Mc(l.priority,function(){rg(a)});return}}else if(t===31){if(t=P(a),t!==null){l.blockedOn=t,Mc(l.priority,function(){rg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){l.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}l.blockedOn=null}function qu(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var a=nc(l.nativeEvent);if(a===null){a=l.nativeEvent;var e=new a.constructor(a.type,a);ui=e,a.target.dispatchEvent(e),ui=null}else return t=Ka(a),t!==null&&fg(t),l.blockedOn=a,!1;t.shift()}return!0}function pg(l,t,a){qu(l)&&a.delete(t)}function ih(){ic=!1,va!==null&&qu(va)&&(va=null),ba!==null&&qu(ba)&&(ba=null),Sa!==null&&qu(Sa)&&(Sa=null),bn.forEach(pg),Sn.forEach(pg)}function Bu(l,t){l.blockedOn===t&&(l.blockedOn=null,ic||(ic=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,ih)))}var Yu=null;function mg(l){Yu!==l&&(Yu=l,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){Yu===l&&(Yu=null);for(var t=0;t<l.length;t+=3){var a=l[t],e=l[t+1],n=l[t+2];if(typeof e!="function"){if(uc(e||a)===null)continue;break}var u=Ka(a);u!==null&&(l.splice(t,3),t-=3,ns(u,{pending:!0,data:n,method:a.method,action:e},e,n))}}))}function De(l){function t(c){return Bu(c,l)}va!==null&&Bu(va,l),ba!==null&&Bu(ba,l),Sa!==null&&Bu(Sa,l),bn.forEach(t),Sn.forEach(t);for(var a=0;a<za.length;a++){var e=za[a];e.blockedOn===l&&(e.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)hg(a),a.blockedOn===null&&za.shift();if(a=(l.ownerDocument||l).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var n=a[e],u=a[e+1],i=n[Wl]||null;if(typeof u=="function")i||mg(a);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Wl]||null)s=i.formAction;else if(uc(n)!==null)continue}else s=i.action;typeof s=="function"?a[e+1]=s:(a.splice(e,3),e-=3),mg(a)}}}function yg(){function l(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function sc(l){this._internalRoot=l}Gu.prototype.render=sc.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,e=gt();cg(a,e,l,t,null,null)},Gu.prototype.unmount=sc.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;cg(l.current,2,null,l,null,null),Su(),t[La]=null}};function Gu(l){this._internalRoot=l}Gu.prototype.unstable_scheduleHydration=function(l){if(l){var t=Ec();l={blockedOn:null,target:l,priority:t};for(var a=0;a<za.length&&t!==0&&t<za[a].priority;a++);za.splice(a,0,l),a===0&&hg(l)}};var vg=M.version;if(vg!=="19.2.3")throw Error(g(527,vg,"19.2.3"));D.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(g(188)):(l=Object.keys(l).join(","),Error(g(268,l)));return l=_(t),l=l!==null?O(l):null,l=l===null?null:l.stateNode,l};var sh={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Ne=Xu.inject(sh),nt=Xu}catch{}}return An.createRoot=function(l,t){if(!E(l))throw Error(g(299));var a=!1,e="",n=Ef,u=Mf,i=Df;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ig(l,1,!1,null,null,a,e,null,n,u,i,yg),l[La]=t.current,Qs(l),new sc(t)},An.hydrateRoot=function(l,t,a){if(!E(l))throw Error(g(299));var e=!1,n="",u=Ef,i=Mf,s=Df,c=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=ig(l,1,!0,t,a??null,e,n,c,u,i,s,yg),t.context=sg(null),a=t.current,e=gt(),e=Fu(e),n=ia(e),n.callback=null,sa(a,n,e),a=e,t.current.lanes=a,we(t,a),wt(t),l[La]=t.current,Qs(l),new Gu(t)},An.version="19.2.3",An}var Og;function yh(){if(Og)return fc.exports;Og=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(M){console.error(M)}}return y(),fc.exports=mh(),fc.exports}var vh=yh();const bh=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sh=y=>y.replace(/^([A-Z])|[\s-_]+(\w)/g,(M,C,g)=>g?g.toUpperCase():C.toLowerCase()),Ng=y=>{const M=Sh(y);return M.charAt(0).toUpperCase()+M.slice(1)},qg=(...y)=>y.filter((M,C,g)=>!!M&&M.trim()!==""&&g.indexOf(M)===C).join(" ").trim(),zh=y=>{for(const M in y)if(M.startsWith("aria-")||M==="role"||M==="title")return!0};var _h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Ah=zl.forwardRef(({color:y="currentColor",size:M=24,strokeWidth:C=2,absoluteStrokeWidth:g,className:E="",children:w,iconNode:q,...P},x)=>zl.createElement("svg",{ref:x,..._h,width:M,height:M,stroke:y,strokeWidth:g?Number(C)*24/Number(M):C,className:qg("lucide",E),...!w&&!zh(P)&&{"aria-hidden":"true"},...P},[...q.map(([_,O])=>zl.createElement(_,O)),...Array.isArray(w)?w:[w]]));const Aa=(y,M)=>{const C=zl.forwardRef(({className:g,...E},w)=>zl.createElement(Ah,{ref:w,iconNode:M,className:qg(`lucide-${bh(Ng(y))}`,`lucide-${y}`,g),...E}));return C.displayName=Ng(y),C};const Th=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],Eh=Aa("bird",Th);const Mh=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Dh=Aa("circle",Mh);const Oh=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Nh=Aa("key",Oh);const Ch=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],wh=Aa("music",Ch);const jh=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],xh=Aa("star",jh);const Uh=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Hh=Aa("volume-2",Uh);const Rh=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],qh=Aa("volume-x",Rh);const Bh=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bg=Aa("x",Bh);function Yh({displayName:y,onConfirm:M,onCancel:C,onClose:g}){return d.jsx("div",{className:"modal-overlay",onClick:g,children:d.jsx("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:g,children:d.jsx(Bg,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[y,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:M,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",y]}),d.jsx("button",{onClick:C,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function Yg(){const y=localStorage.getItem("openedWindows");if(!y)return new Set;try{const M=JSON.parse(y);return new Set(M)}catch(M){return console.error("Failed to parse opened windows:",M),new Set}}function Gh(y){const M=Yg();return M.add(y),localStorage.setItem("openedWindows",JSON.stringify([...M])),M}function Cg(){localStorage.removeItem("openedWindows")}function Xh(){localStorage.removeItem("adventCalendarUser")}const wg=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function Qh({userName:y,onUserSelect:M}){const[C]=zl.useState(()=>wg[Math.floor(Math.random()*wg.length)]),[g,E]=zl.useState(!1),w=y==="Tanya"?"Таня":y==="Zebra"?"Зёбра":"неведомый гость",q=()=>{E(!0)},P=()=>{Xh(),Cg(),E(!1),window.location.reload()},x=()=>{Cg(),E(!1)},_=()=>{E(!1)};return y?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[C,","," ",d.jsx("span",{className:"user-name clickable",onClick:q,title:`А точно ли я ${w}?..`,children:w}),"!"]})}),g&&(y==="Tanya"||y==="Zebra")&&d.jsx(Yh,{displayName:w,onConfirm:P,onCancel:x,onClose:_})]}):d.jsxs("div",{className:"user-selection",children:[d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>M("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>M("Zebra"),children:"Зёбра"})]})]})}function Zh(){const[y,M]=zl.useState([]),[C,g]=zl.useState([]);return zl.useEffect(()=>{const E=x=>_=>{const O=Math.sin(x*9301+_*49297)*43758.5453;return O-Math.floor(O)},w=Array.from({length:60}).map((x,_)=>{const O=E(_+1);return{left:`${Math.floor(O(1)*100)}%`,top:`${Math.floor(O(2)*70)}%`,animationDelay:`${(O(3)*3).toFixed(2)}s`,opacity:+(.3+O(4)*.7).toFixed(2)}}),q=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((x,_)=>{const O=E(100+_);let j=30+Math.floor(O(1)*60),K=Math.max(10,Math.floor(O(2)*30));const yl=q[_%q.length],vl=+(.35+O(3)*.55).toFixed(2),_l=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(O(4)*30)}% ${30+Math.floor(O(5)*30)}%`,bl=40+Math.floor(O(6)*40),Ml=Math.floor(O(7)*20),sl=-20+Math.floor(O(8)*140);let Al=5+Math.floor(O(9)*40);return _===0&&(Al=Math.max(2,Al-8),j=Math.max(20,Math.floor(j*.85)),K=Math.max(8,Math.floor(K*.8))),{left:`${sl}%`,top:`${Al}%`,width:`${j}vw`,height:`${K}vh`,opacity:vl,color:_l,borderRadius:Ul,duration:bl,delay:Ml}});window.requestAnimationFrame(()=>{M(w),g(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:y.map((E,w)=>d.jsx("div",{className:"star",style:{left:E.left,top:E.top,animationDelay:E.animationDelay,opacity:E.opacity}},w))})]}),d.jsx("div",{className:"layer layer-clouds",children:C.map((E,w)=>d.jsx("div",{className:`cloud cloud-${w+1}`,style:{position:"absolute",left:E.left,top:E.top,width:E.width,height:E.height,background:E.color,opacity:E.opacity,borderRadius:E.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${E.duration}s linear ${E.delay}s infinite`}},w))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((E,w)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${E},300 ${E-20},250 ${E-15},250 ${E-30},200 ${E-25},200 ${E-40},150 ${E+40},150 ${E+25},200 ${E+30},200 ${E+15},250 ${E+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:E-5,y:"280",width:"10",height:"20",fill:"#111827"})]},w))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const Lh=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium"],Vh=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square"],jg=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window"],xg=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Ug=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Hg=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Rg=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],Kh=y=>{switch(y){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(Dh,{className:"door-handle ring",size:12});case"star":return d.jsx(xh,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},Jh=y=>{if(y===0)return null;const M=y===4||y===6?2:4,C=y===4?2:y===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${M}, 1fr)`,gridTemplateRows:`repeat(${C}, 1fr)`},children:Array.from({length:y}).map((g,E)=>d.jsx("div",{className:"window-pane"},E))})},kh=y=>{if(y==="none")return null;switch(y){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},$h=y=>{if(y==="none")return null;switch(y){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function Wh({windowNumber:y,isActive:M,isOpened:C,isExactMatch:g,onClick:E}){const w=zl.useRef(null),q=y===17,P=()=>{q&&w.current&&(w.current.currentTime=0,w.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},x=Lh[y-1],_=Vh[y-1],O=M&&!C||M&&g?"window-glow-intense":"",K=new Set([11,6,12,16,25]).has(y),yl=K?"window-round":_,_l=jg[y-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<y;Sl++)jg[Sl]==="door"?Ul++:bl++;const Ml=xg[(Ul-1)%xg.length],sl=Ug[(bl-1)%Ug.length],Al=Hg[(Ul-1)%Hg.length],Ll=Rg[(bl-1)%Rg.length];return d.jsx("div",{className:`calendar-window ${x} ${yl} ${O} ${C?"window-opened":""} ${M?"window-active":"window-inactive"}`,onClick:E,onMouseEnter:P,children:_l?d.jsxs("div",{className:`door-element ${Ml.type}`,children:[kh(Al),d.jsx("div",{className:`door-frame frame-${Ml.frame}`,children:d.jsxs("div",{className:`door-panel wood-${Ml.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[Ml.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[Kh(Ml.handle),Ml.hasKeyhole&&d.jsx(Nh,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:y})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${x}`,children:[$h(Ll),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${sl.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[Jh(sl.panes),sl.shape==="arched"&&d.jsx("div",{className:"window-arch"}),q&&d.jsx(Eh,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:y})]}),sl.hasSill&&d.jsx("div",{className:"window-sill",children:sl.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function Fh({windowNumber:y,message:M,onClose:C}){return d.jsx("div",{className:"modal-overlay",onClick:C,children:d.jsx("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:C,children:d.jsx(Bg,{size:24})}),y!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",y]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:M}})]})})})}function Qu(y){const M=new Date(Date.UTC(2025,11,19,21,0,0,0)),C=y-1;return new Date(M.getTime()+C*24*60*60*1e3)}function Zu(y,M){return M.getTime()>=y.getTime()}function hc(y,M){const C=new Date(y);C.setUTCHours(0,0,0,0);const g=new Date(M);return g.setUTCHours(0,0,0,0),C.getTime()===g.getTime()}const Ih="/advent/assets/muerte-DfSvC3Z-.jpg",Ph="/advent/assets/katrina-C9VtcZzC.jpg",lp="/advent/assets/pink-sexSAVbt.jpg",tp="/advent/assets/rese-BUqLNboV.jpg",ap="/advent/assets/Ofrenda-DDd9dlHK.jpg",ep="/advent/assets/kolumbia-DUKl5Drs.webp",np="/advent/assets/kolumb2--JWazZNY.webp",up="/advent/assets/melhior-5oqVeQRz.webp",ip="/advent/assets/shir-CPxmcAyu.jpg",sp="/advent/assets/markes-DHTR6R5s.jpg",cp="/advent/assets/tolkin-Bkb1qdyy.jpg",op="/advent/assets/tolkin1-Gt7VHXrl.jpg",fp="/advent/assets/berry-BayIKnFN.jpg",rp="/advent/assets/berry1-aZtyDiG8.jpg",gp="/advent/assets/gvatemala1-C3fdq1S5.jpg",dp="/advent/assets/graves-B4Ep0a2x.jpg",hp="/advent/assets/carpet1-BHoBEQUm.jpg",pp="/advent/assets/airsnakes-BtpaN7a0.jpg",mp="/advent/assets/fish-C0IMh9Dv.jpg",yp="/advent/assets/fish1-KO92JEwH.jpg",vp="/advent/assets/brazil1-C1nzNzga.webp",bp="/advent/assets/ethiopia-CfI92xpA.jpg",Sp="/advent/assets/goats-B1iHvHcl.jpg",zp="/advent/assets/rabanda-ClmJ6Exb.jpg",_p="/advent/assets/honduras-DTj2TRgE.jpg",Ap="/advent/assets/honduras1-BfVuI_LD.jpg",Tp="/advent/assets/resp-DBSDT0A7.png",Ep="/advent/assets/cicoriy-DL-J_EKv.webp",Mp="/advent/assets/carob-DDo_E6jz.jpg",Dp="/advent/assets/tonka-CaSKsR3p.webp",Op="/advent/assets/kardamon-D-LlmV-v.webp",X={muerte:Ih,katrina:Ph,pink:lp,rese:tp,Ofrenda:ap,kolumb2:np,kolumbia:ep,melhior:up,shir:ip,markes:sp,tolkin:cp,tolkin1:op,berries:fp,berries1:rp,gvatemala1:gp,graves:dp,carpet1:hp,airsnake2:pp,fish:mp,fish1:yp,brazil1:vp,ethiopia:bp,goats:Sp,rabanda:zp,honduras:_p,honduras1:Ap,resp:Tp,cicoriy:Ep,carob:Mp,tonka:Dp,kardamon:Op},Np=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${X.muerte}" />
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
<img src="${X.Ofrenda}" />
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
       <img src="${X.katrina}" />
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
      <img src="${X.muerte}" />
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

      <img src="${X.Ofrenda}" />

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
       <img src="${X.katrina}" />
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
  <img src="${X.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${X.rese}" />
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
  <img src="${X.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${X.rese}" />
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
    <img src="${X.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение — ведь Baggins = фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название! ☕🎉</p>
    <img src="${X.tolkin}" />
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
    <img src="${X.melhior}" />
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
      <img src="${X.tolkin1}" />
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
    <img src="${X.kolumbia}" />
    <p><strong>География:</strong> Анды, высота 1200-2000 м, вулканическая почва, два сезона дождей = урожай круглый год!</p>
    
    <p><strong>Вкус:</strong> Сбалансированный, средняя кислотность, карамель, орехи, чистый профиль. <strong>"Безопасный выбор"</strong> — почти всегда вкусно!</p>
    
    <p><strong>100% Арабика:</strong> Колумбия не выращивает робусту по закону! Только арабика.</p>
    
    <h3>Габриэль Гарсиа Маркес и кофе ☕📖</h3>
    <p><strong>Габо</strong> (как его называли в Колумбии) родился в <strong>Аракатаке</strong> — маленьком городке в зоне банановых плантаций. Но кофе был везде!</p>
    <img src="${X.markes}" />
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
    <img src="${X.kolumb2}" />
    <p>Качественное зерно → даже без кофеина сохраняется вкус!</p>
    
    <h3>Мельхиоровая ложечка 🥄✨</h3>
    <p><strong>Мельхиор</strong> — сплав меди + никель. В СССР = "народное серебро" (дешевле настоящего, но красиво!).</p>
    <img src="${X.melhior}" />
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
    <img src="${X.gvatemala1}" />
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
    <img src="${X.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${X.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее Зёбры и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${X.carpet1}" />
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
    <img src="${X.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${X.berries1}" />
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
    <img src="${X.gvatemala1}" />
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
    <img src="${X.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${X.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее тебя и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${X.carpet1}" />
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
    <img src="${X.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${X.berries1}" />
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
    <img src="${X.fish}" />
    
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

    <img src="${X.fish1}" />
    
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

    <img src="${X.brazil1}" />
    
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
    <img src="${X.ethiopia}" />
    <p><strong>Легенда Калди (IX век):</strong></p>
    <ul>
      <li>Пастух Калди заметил: его козы ели красные ягоды → танцевали всю ночь!</li>
      <li>Монахи попробовали → не спали на молитвах</li>
      <li>Сначала сожгли как "дьявольские ягоды"</li>
      <li>Но запах был так хорош, что решили заваривать!</li>
    </ul>
    <p>Между прочим, есть фотопруф:</p>
    <img src="${X.goats}" />
    
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
<img src="${X.rabanda}" />
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
    <img src="${X.fish}" />
    
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

    <img src="${X.fish1}" />
    
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

    <img src="${X.brazil1}" />
    
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
    <img src="${X.rabanda}" />

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
    <img src="${X.honduras}" />
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
    <img src="${X.resp}" />
    
    <p><strong>6 кофейных регионов:</strong></p>
    <ul>
      <li><strong>Copán</strong> — западный, у границы с Гватемалой, шоколад + карамель.</li>
      <li><strong>Opalaca</strong> — высокогорный, сбалансированный.</li>
      <li><strong>Montecillos</strong> — центральный, фруктовый, цитрусовый.</li>
      <li><strong>Comayagua</strong> — винная кислотность.</li>
      <li><strong>Agalta</strong> — восточный, тропические фрукты.</li>
      <li><strong>El Paraíso</strong> — у границы с Никарагуа, сладкий, мягкий.</li>
    </ul>
    <img src="${X.honduras1}" />
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
<p><strong>О чём оригинальная песня:</strong></p>
<ul>
  <li><strong>НЕ про Рождество!</strong> Про Новый год и богатство!</li>
  <li>Ласточка приносит весть о богатом урожае, овцы родили ягнят = достаток в новом году, пожелание процветания хозяину дома</li>
  <li>Пели на <strong>Щедрый вечер</strong> (13 января, канун Нового года по старому стилю)</li>
</ul>

<p><strong>Премьера:</strong> Декабрь 1916, Киев, студенческий хор Киевского университета</p>

<h4>Путь к мировой славе</h4>

<p><strong>1919 — Турне по Европе:</strong></p>
<ul>
  <li>Украинская Республиканская Капелла под управлением Александра Кошица</li>
  <li>Украина в гражданской войне, хор эмигрирует</li>
  <li>Выступают в Праге, Париже, Лондоне — везде овации!</li>
</ul>

<p><strong>1921-1922 — Америка:</strong></p>
<ul>
  <li>Концерт в <strong>Carnegie Hall</strong> (Нью-Йорк) — триумф!</li>
  <li>"Щедрик" становится хитом</li>
  <li>Американцы в восторге, но не понимают украинского</li>
</ul>

<p><strong>1936 — Рождение "Carol of the Bells":</strong></p>
<ul>
  <li>Американский дирижёр <strong>Peter J. Wilhousky</strong> слышит "Щедрик"</li>
  <li>Пишет новый английский текст (совершенно другой!)</li>
  <li>Превращает новогоднюю украинскую песню в рождественскую американскую.</li>
</ul>

<p><strong>Новый текст — про колокола:</strong></p>
<blockquote>
  <p><em>Hark! how the bells, sweet silver bells<br>
  All seem to say, "Throw cares away."<br>
  Christmas is here, bringing good cheer<br>
  To young and old, meek and the bold...<br>
  Merry, merry, merry, merry Christmas!</em></p>
</blockquote>

<p><strong>Ничего про ласточек и овец!</strong> Теперь про рождественские колокола и радость. Так всем гораздо понятнее.</p>

<h4>Мировая популярность</h4>

<p><strong>1940-1990-е:</strong> Стандарт американских рождественских концертов</p>

<p><strong>1990-е — взрыв:</strong></p>
<ul>
  <li>Фильмы ("Один дома", "Гарри Поттер")</li>
  <li>Сотни кавер-версий</li>
  <li>Одна из самых узнаваемых рождественских мелодий</li>
  <li>⚖️ <strong>Споры об авторских правах</strong> между наследниками Леонтовича и Wilhousky до сих пор!</li>

</ul>


    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари кофе из Гондураса</li>
      <li>Попробуй с протеиновым печеньем (макать обязательно!)</li>
      <li>Нейронки считают, что после протеинового печенья задание должно быть про приседания, но это бессмысленно и подло.</li>
      <li>Мне больше нравится другое - поделись в чате твоей самой любимой рождественской песней/музыкой, а потом самой раздражающей.</li>
    </ol>
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
    <img src="${X.cicoriy}" />
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
    
    <p><strong>Вкус:</strong> Древесный, ореховый, землистый. Вяжущий (танины!).</p>
    
    <p><strong>Проблема:</strong> Нужно вымачивать жёлуди (убрать танины), иначе горько и токсично.</p>
    
    <h4>4. Кэроб — шоколадный заменитель 🍫</h4>
    <p><strong>Что это:</strong> Порошок из стручков рожкового дерева (Средиземноморье).</p>
    <img src="${X.carob}" />
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
    <img src="${X.tonka}" />
    <p><strong>⚠️ Важно:</strong> Содержат кумарин (в больших дозах токсичен). В США запрещены в еде с 1954! В Европе разрешены в микродозах. В твоём стике — безопасная доза!</p>
    
    <h4>7. Зелёный кардамон — королева специй 👑</h4>
    <p><strong>Что это:</strong> Специя из семейства имбирных (Индия).</p>
    <img src="${X.kardamon}" />
    <p><strong>Вкус:</strong> Цитрусовый, эвкалиптовый, мятный, сладко-пряный.</p>
    
    <p><strong>Где используют:</strong></p>
    <ul>
      <li><strong>Индия:</strong> Масала-чай</li>
      <li><strong>Скандинавия:</strong> Булочки с кардамоном</li>
      <li><strong>Арабские страны:</strong> Кофе с кардамоном (гахва)</li>
      <li><strong>Эфиопия:</strong> Кофейные церемонии</li>
    </ul>
    
    <p><strong>Fun fact:</strong> Третья самая дорогая специя (после шафрана и ванили!). Называют "королевой специй" (чёрный перец = король).</p>

    <p><strong>Ответ:</strong> И то, и другое! Макай в напиток!</p>
    
    <h3>Музыка для Рождества 🎶</h3>
    <p><strong>Классическая рождественская:</strong></p>
    <iframe width="100%" height="auto" src="https://www.youtube.com/embed/CND5_F2bQbA?si=DYuSkhzG-s1AU1MV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe width="100%" src="https://www.youtube.com/embed/FSCo5dZ42v8?si=zPpEzjf6zBbUdbRK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>"Carol of the Bells" - внезапно это музыка родом из Украины времен Российской империи</p>
    <pкраинский>Была основана на украинских народных песнях. Создатель - <краинский>Микола Леонтович, краинский композитор, хоровой дирижёр, учитель (1877-1921)</p>
  <p>Убит в 1921 году агентом ЧК (большевики считали его "украинским националистом")</p>
<p><strong>О чём оригинальная песня:</strong></p>
<ul>
  <li><strong>НЕ про Рождество!</strong> Про Новый год и богатство!</li>
  <li>Ласточка приносит весть о богатом урожае, овцы родили ягнят = достаток в новом году, пожелание процветания хозяину дома</li>
  <li>Пели на <strong>Щедрый вечер</strong> (13 января, канун Нового года по старому стилю)</li>
</ul>

<p><strong>Премьера:</strong> Декабрь 1916, Киев, студенческий хор Киевского университета</p>

<h4>Путь к мировой славе</h4>

<p><strong>1919 — Турне по Европе:</strong></p>
<ul>
  <li>Украинская Республиканская Капелла под управлением Александра Кошица</li>
  <li>Украина в гражданской войне, хор эмигрирует</li>
  <li>Выступают в Праге, Париже, Лондоне — везде овации!</li>
</ul>

<p><strong>1921-1922 — Америка:</strong></p>
<ul>
  <li>Концерт в <strong>Carnegie Hall</strong> (Нью-Йорк) — триумф!</li>
  <li>"Щедрик" становится хитом</li>
  <li>Американцы в восторге, но не понимают украинского</li>
</ul>

<p><strong>1936 — Рождение "Carol of the Bells":</strong></p>
<ul>
  <li>Американский дирижёр <strong>Peter J. Wilhousky</strong> слышит "Щедрик"</li>
  <li>Пишет новый английский текст (совершенно другой!)</li>
  <li>Превращает новогоднюю украинскую песню в рождественскую американскую.</li>
</ul>

<p><strong>Новый текст — про колокола:</strong></p>
<blockquote>
  <p><em>Hark! how the bells, sweet silver bells<br>
  All seem to say, "Throw cares away."<br>
  Christmas is here, bringing good cheer<br>
  To young and old, meek and the bold...<br>
  Merry, merry, merry, merry Christmas!</em></p>
</blockquote>

<p><strong>Ничего про ласточек и овец!</strong> Теперь про рождественские колокола и радость. Так всем гораздо понятнее.</p>

<h4>Мировая популярность</h4>

<p><strong>1940-1990-е:</strong> Стандарт американских рождественских концертов</p>

<p><strong>1990-е — взрыв:</strong></p>
<ul>
  <li>Фильмы ("Один дома", "Гарри Поттер")</li>
  <li>Сотни кавер-версий</li>
  <li>Одна из самых узнаваемых рождественских мелодий</li>
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
  `},{day:7,date:"2025-12-26",tanya_gift:"Какао с опоссумом",zebra_gift:"Какао с опоссумом (х2)",tanya_bonus:"Маршмеллоу",zebra_bonus:"Маршмеллоу",title:"Опоссум пьёт и не орёт",tanya_message:`
      <p><strong>"ПЬЁТ И НЕ ОРЁТ"</strong> — гениальная надпись на упаковке! 🦝☕</p>
      
      <h3>Опоссум — символ спокойствия?</h3>
      <p><strong>Опоссумы</strong> (на самом деле это <strong>Virginia opossum</strong>) — единственные сумчатые в Северной Америке!</p>
      
      <p><strong>Суперспособность:</strong> Опоссумы <strong>притворяются мёртвыми</strong> при угрозе ("playing possum")! Падают, не двигаются, изображают труп. Хищник теряет интерес. Гениально!</p>
      
      <p><strong>Философия какао с опоссумом:</strong> Выпей какао, притворись мёртвым (расслабься полностью), НЕ ОРИ. Дзен! 🧘</p>
      
      <h3>История какао</h3>
      <p><strong>Theobroma cacao</strong> = "пища богов" (греч.)</p>
      
      <p><strong>Ацтеки и майя:</strong></p>
      <ul>
        <li>Какао = священный напиток, пили горьким с чили и кукурузой</li>
        <li><strong>Монтесума</strong> пил 50 чашек в день (для силы и... либидо! 😏)</li>
        <li><strong>Какао-бобы = валюта!</strong> Можно было купить раба за 100 бобов</li>
      </ul>
      
      <p><strong>Европа:</strong> Испанцы привезли в XVI веке, добавили сахар = горячий шоколад родился!</p>
      
      <p><strong>Швейцария (1800-е):</strong> Изобрели молочный шоколад (Daniel Peter + Henri Nestlé).</p>
      
      <h3>Маршмеллоу — от лекарства до десерта ☁️</h3>
      <p><strong>История:</strong> Изначально делали из корня <strong>алтея</strong> (marshmallow plant) — лекарство от боли в горле (Древний Египет!).</p>
      
      <p>В XIX веке французы сделали десерт из желатина + сахар + яичный белок.</p>
      
      <p><strong>США, 1920-е:</strong> Традиция жарить маршмеллоу на костре (кэмпфайр)!</p>
      
      <p><strong>S'mores</strong> = маршмеллоу + шоколад + крекер. Название от "give me some more!" 😄</p>
      
      <h3>Задание: Ритуал спокойствия</h3>
      <ol>
        <li><strong>Обними подушку</strong> (или кота/собаку/человека)</li>
        <li><strong>Закутайся в плед</strong></li>
        <li>Завари какао, добавь маршмеллоу</li>
        <li>Смотри, как маршмеллоу тает — это <strong>медитация</strong></li>
        <li><strong>ПЕЙ БЕЗ КРИКОВ</strong></li>
        <li>Притворись опоссумом = полное расслабление 🦝💤</li>
      </ol>
      
      <p><strong>Фото в чат:</strong> Ты + плед + какао + умиротворённое лицо 😌</p>
      
      <p><strong>Музыка для релакса:</strong> <a href="https://www.youtube.com/watch?v=rVN1B-tUpgs" target="_blank">Max Richter — "On The Nature of Daylight"</a></p>
      
      <p>Или ASMR: <a href="https://www.youtube.com/results?search_query=cozy+fireplace+asmr" target="_blank">Cozy Fireplace Sounds</a></p>
    `,zebra_message:`
      <p><strong>"ПЬЁТ И НЕ ОРЁТ"</strong> — и у вас два какао для двойного спокойствия! 🦝☕</p>
      
      <h3>Опоссум учит дзену</h3>
      <p>Опоссумы <strong>притворяются мёртвыми</strong> ("playing possum") при опасности. Это защитный механизм!</p>
      
      <p><strong>Философия:</strong> Расслабься полностью, не ори, притворись опоссумом. Спокойствие — сила! 🧘</p>
      
      <h3>Какао — напиток богов</h3>
      <p><strong>Ацтеки:</strong> Пили горький какао с чили. Монтесума пил 50 чашек в день!</p>
      
      <p><strong>Какао-бобы = деньги!</strong> 100 бобов = 1 раб.</p>
      
      <p><strong>Европа:</strong> Испанцы добавили сахар → горячий шоколад!</p>
      
      <h3>Маршмеллоу ☁️</h3>
      <p>Изначально — лекарство (корень алтея). Теперь — десерт!</p>
      
      <p><strong>S'mores</strong> (США): маршмеллоу + шоколад + крекер = кэмпфайр-классика!</p>
      
      <h3>Задание на двоих: Релакс-ритуал</h3>
      <ol>
        <li><strong>Обниматься</strong> (друг друга или подушки 😄)</li>
        <li><strong>Плед на двоих</strong></li>
        <li>Заварите два какао с маршмеллоу</li>
        <li>Смотрите, как маршмеллоу тают</li>
        <li><strong>ПЕЙ��Е БЕЗ КРИКОВ</strong></li>
        <li>Притворяйтесь опоссумами = total relax 🦝💤</li>
      </ol>
      
      <p><strong>Фото:</strong> Вы двое + плед + какао + умиротворение 😌📸</p>
      
      <p><strong>Музыка:</strong> <a href="https://www.youtube.com/watch?v=rVN1B-tUpgs" target="_blank">Max Richter — "On The Nature of Daylight"</a></p>
      
      <p><strong>Чат:</strong> "Мы — опоссумы. Мы спокойны. Мы не орём. 🦝☕"</p>
    `},{day:8,date:"2025-12-27",tanya_gift:"Чай ромашковый",zebra_gift:"Чай ромашковый",tanya_bonus:"Твикс имбирный",zebra_bonus:"Твикс имбирный",title:"Ромашковый чай за 1000 рублей",tanya_message:`
      <p><strong>Ромашковый чай</strong> — напиток, который недавно прославился скандалом! 🌼☕💸</p>
      
      <h3>История про чай за 1000 рублей</h3>
      <p>В конце 2024 года в соцсетях разгорелся спор: в <strong>пафосной московской кофейне</strong> подавали ромашковый чай за <strong>1000 рублей</strong>!</p>
      
      <p><strong>Реакция интернета:</strong></p>
      <ul>
        <li>"Это просто ромашка! Её в аптеке 50 рублей!"</li>
        <li>"Вы платите за атмосферу, локацию, сервис!"</li>
        <li>"Это наглость!"</li>
        <li>"Это luxury-сегмент, не нравится — не ходите!"</li>
      </ul>
      
      <p><strong>Мемы:</strong> "Ромашка за 1000₽" стала символом переплаты за бренд и атмосферу.</p>
      
      <h3>Почему так дорого?</h3>
      <p><strong>Ценообразование в премиум-кофейнях:</strong></p>
      <ul>
        <li><strong>Локация:</strong> Центр Москвы, аренда 500,000₽/месяц</li>
        <li><strong>Интерьер:</strong> Дизайнерский, инстаграммный</li>
        <li><strong>Сервис:</strong> Обученный персонал, красивая подача</li>
        <li><strong>Бренд:</strong> "Ты здесь не просто пьёшь чай, ты покупаешь статус"</li>
      </ul>
      
      <p><strong>Себестоимость:</strong> Ромашка = 5₽, чашка = 50₽, работа бариста = 50₽. <strong>Итого: 105₽.</strong> Наценка = 900%! 😱</p>
      
      <p><strong>Но:</strong> В Starbucks обычный латте стоит 400₽ (себестоимость 50₽). Наценка 700%! Это норма для HoReCa (отели-рестораны-кафе).</p>
      
      <h3>Ромашка — простое, но мощное растение</h3>
      <p><strong>Chamomile</strong> (Matricaria chamomilla) — одно из древнейших лекарственных растений!</p>
      
      <p><strong>История:</strong></p>
      <ul>
        <li><strong>Древний Египет:</strong> Посвящали ромашку богу солнца Ра, лечили лихорадку</li>
        <li><strong>Древний Рим:</strong> Солдаты пили ромашковый чай перед битвой (успокоение)</li>
        <li><strong>Средневековье:</strong> "Растение-целитель" — от всего!</li>
      </ul>
      
      <p><strong>Польза:</strong></p>
      <ul>
        <li><strong>Успокоительное</strong> (апигенин связывается с GABA-рецепторами в мозге!)</li>
        <li><strong>Сон</strong> (мягкое снотворное)</li>
        <li><strong>Пищеварение</strong> (спазмолитик)</li>
        <li><strong>Противовоспалительное</strong></li>
      </ul>
      
      <p><strong>Наука:</strong> Исследования подтверждают! Ромашка реально работает.</p>
      
      <h3>Твикс имбирный 🍪</h3>
      <p><strong>Имбирное печенье</strong> + карамель + шоколад = праздничный вкус!</p>
      
      <p><strong>Имбирь + шоколад</strong> — древнее сочетание. Ацтеки добавляли имбирь в <em>xocolātl</em> (горячий шоколад) для воинов.</p>
      
      <h3>Задание</h3>
      <ol>
        <li>Завари ромашковый чай (твой стоит не 1000₽, а гораздо меньше! 😄)</li>
        <li>Съешь Твикс</li>
        <li><strong>Чат-дискуссия:</strong> "Ромашка за 1000₽ — это:
          <ul>
            <li>а) Наглость</li>
            <li>б) Законы рынка</li>
            <li>в) Переплата за атмосферу</li>
            <li>г) Твой вариант"</li>
          </ul>
        </li>
        <li>Выпей чай, расслабься (ромашка работает!)</li>
      </ol>
      
      <p><strong>Музыка для релакса:</strong> <a href="https://www.youtube.com/results?search_query=lofi+hip+hop+relax" target="_blank">Lo-fi Hip Hop</a></p>
    `,zebra_message:`
      <p><strong>Ромашковый чай</strong> — звезда скандала 2024! 🌼💸</p>
      
      <h3>Чай за 1000 рублей</h3>
      <p>В пафосной московской кофейне продавали ромашковый чай за <strong>1000₽</strong>! Интернет взорвался:</p>
      
      <ul>
        <li>"Это просто ромашка! 50₽ в аптеке!"</li>
        <li>"Вы платите за локацию и сервис!"</li>
      </ul>
      
      <p><strong>Ценообразование:</strong></p>
      <ul>
        <li>Себестоимость: 105₽</li>
        <li>Цена: 1000₽</li>
        <li>Наценка: 900%!</li>
      </ul>
      
      <p>Но в Starbucks наценка 700% — это норма HoReCa!</p>
      
      <h3>Ромашка — древний целитель</h3>
      <p><strong>История:</strong> Египтяне, римляне, средневековые лекари использовали ромашку.</p>
      
      <p><strong>Польза:</strong></p>
      <ul>
        <li>Успокаивает (апигенин → GABA-рецепторы)</li>
        <li>Улучшает сон</li>
        <li>Помогает пищеварению</li>
      </ul>
      
      <p>Наука подтверждает — работает!</p>
      
      <h3>Твикс имбирный 🍪</h3>
      <p>Имбирь + карамель + шоколад = праздник! Ацтеки добавляли имбирь в шоколад для воинов.</p>
      
      <h3>Задание на двоих</h3>
      <ol>
        <li>Заварите ромашковый чай (не за 1000₽! 😄)</li>
        <li>Съешьте Твиксы</li>
        <li><strong>Обсудите:</strong> "1000₽ за чай — норм или нет?" Напишите вывод в чат!</li>
        <li>Расслабьтесь с ромашкой 🌼😌</li>
      </ol>
      
      <p><strong>Музыка:</strong> <a href="https://www.youtube.com/results?search_query=lofi+hip+hop+relax" target="_blank">Lo-fi Hip Hop</a></p>
    `},{day:9,date:"2025-12-28",tanya_gift:"Сырный 3в1",zebra_gift:"Сырный 3в1 (х2)",tanya_bonus:"Пастила кофе-алкоголь",zebra_bonus:"Пастила кофе-алкоголь (х2)",title:"День 9",tanya_message:"<p>Подарок: Сырный 3в1</p><p>Бонус: Пастила кофе-алкоголь</p>",zebra_message:"<p>Подарок: Сырный 3в1 (х2)</p><p>Бонус: Пастила кофе-алкоголь (х2)</p>"},{day:10,date:"2025-12-29",tanya_gift:"Лавандовый 3в1",zebra_gift:"Лавандовый 3в1 (х2)",tanya_bonus:"Кофейная свечка",zebra_bonus:"Кофейная свечка (х2)",title:"День 10",tanya_message:"<p>Подарок: Лавандовый 3в1</p><p>Бонус: Кофейная свечка</p>",zebra_message:"<p>Подарок: Лавандовый 3в1 (х2)</p><p>Бонус: Кофейная свечка (х2)</p>"},{day:11,date:"2025-12-30",tanya_gift:"Ванильный 3в1",zebra_gift:"Ванильный 3в1 (х2)",tanya_bonus:"Кофейная маска",zebra_bonus:"Кофейная маска (х2)",title:"День 11",tanya_message:"<p>Подарок: Ванильный 3в1</p><p>Бонус: Кофейная маска</p>",zebra_message:"<p>Подарок: Ванильный 3в1 (х2)</p><p>Бонус: Кофейная маска (х2)</p>"},{day:12,date:"2025-12-31",tanya_gift:"Who Needs Sleep",zebra_gift:"Who Needs Sleep (х2)",tanya_bonus:"Маршмеллоу",zebra_bonus:"Маршмеллоу (х2)",title:"День 12",tanya_message:"<p>Подарок: Who Needs Sleep</p><p>Бонус: Маршмеллоу</p>",zebra_message:"<p>Подарок: Who Needs Sleep (х2)</p><p>Бонус: Маршмеллоу (х2)</p>"},{day:13,date:"2026-01-01",tanya_gift:"Dozo Coffee",zebra_gift:"Dozo Coffee (х2)",tanya_bonus:"Цветная шоколадка",zebra_bonus:"Цветная шоколадка (х2)",title:"День 13",tanya_message:"<p>Подарок: Dozo Coffee</p><p>Бонус: Цветная шоколадка</p>",zebra_message:"<p>Подарок: Dozo Coffee (х2)</p><p>Бонус: Цветная шоколадка (х2)</p>"},{day:14,date:"2026-01-02",tanya_gift:"Camera Obscura",zebra_gift:"Camera Obscura (х2)",tanya_bonus:"Сироп Острый мёд",zebra_bonus:"Сироп Острый мёд (х2)",title:"День 14",tanya_message:"<p>Подарок: Camera Obscura</p><p>Бонус: Сироп Острый мёд</p>",zebra_message:"<p>Подарок: Camera Obscura (х2)</p><p>Бонус: Сироп Острый мёд (х2)</p>"},{day:15,date:"2026-01-03",tanya_gift:"Сова-концентрат",zebra_gift:"Сова-концентрат",tanya_bonus:"Сироп Мисо-карамель",zebra_bonus:"Сироп Мисо-карамель",title:"День 15",tanya_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>",zebra_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>"},{day:16,date:"2026-01-04",tanya_gift:"Yellow Submarine",zebra_gift:"Yellow Submarine (х2)",tanya_bonus:"Протеиновое печенье",zebra_bonus:"Протеиновое печенье (х2)",title:"День 16",tanya_message:"<p>Подарок: Yellow Submarine</p><p>Бонус: Протеиновое печенье</p>",zebra_message:"<p>Подарок: Yellow Submarine (х2)</p><p>Бонус: Протеиновое печенье (х2)</p>"},{day:17,date:"2026-01-05",tanya_gift:"Турецкий Mehmet Efendi",zebra_gift:"Турецкий Mehmet Efendi (х2)",tanya_bonus:"Матча латте",zebra_bonus:"Матча латте (х2)",title:"День 17",tanya_message:"<p>Подарок: Турецкий Mehmet Efendi</p><p>Бонус: Матча латте</p>",zebra_message:"<p>Подарок: Турецкий Mehmet Efendi (х2)</p><p>Бонус: Матча латте (х2)</p>"},{day:18,date:"2026-01-06",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Шоколадная бомбочка",zebra_bonus:"Шоколадная бомбочка (х2)",title:"День 18",tanya_message:"<p>Подарок: Круиз: по-венски</p><p>Бонус: Шоколадная бомбочка</p>",zebra_message:"<p>Подарок: Круиз: по-индийски (х2)</p><p>Бонус: Шоколадная бомбочка (х2)</p>"},{day:19,date:"2026-01-07",tanya_gift:"Mitsumoto японский",zebra_gift:"Mitsumoto японский (х2)",tanya_bonus:"Рождественский чай",zebra_bonus:"Рождественский чай (х2)",title:"День 19",tanya_message:"<p>Подарок: Mitsumoto японский</p><p>Бонус: Рождественский чай</p>",zebra_message:"<p>Подарок: Mitsumoto японский (х2)</p><p>Бонус: Рождественский чай (х2)</p>"},{day:20,date:"2026-01-08",tanya_gift:"KopiCat Вьетнам",zebra_gift:"KopiCat Вьетнам (х2)",tanya_bonus:"Экзотический чай",zebra_bonus:"Экзотический чай (х2)",title:"День 20",tanya_message:"<p>Подарок: KopiCat Вьетнам</p><p>Бонус: Экзотический чай</p>",zebra_message:"<p>Подарок: KopiCat Вьетнам (х2)</p><p>Бонус: Экзотический чай (х2)</p>"},{day:21,date:"2026-01-09",tanya_gift:"Армянский 3в1",zebra_gift:"Армянский 3в1 (х2)",tanya_bonus:"Миндальный Вкусвилл",zebra_bonus:"Миндальный Вкусвилл (х2)",title:"День 21",tanya_message:"<p>Подарок: Армянский 3в1</p><p>Бонус: Миндальный Вкусвилл</p>",zebra_message:"<p>Подарок: Армянский 3в1 (х2)</p><p>Бонус: Миндальный Вкусвилл (х2)</p>"},{day:22,date:"2026-01-10",tanya_gift:"Декаф Питерский",zebra_gift:"Декаф IL DA DA MA",tanya_bonus:"Чай-книга гаданий",zebra_bonus:"Чай-книга гаданий (х2)",title:"День 22",tanya_message:"<p>Подарок: Декаф Питерский</p><p>Бонус: Чай-книга гаданий</p>",zebra_message:"<p>Подарок: Декаф IL DA DA MA</p><p>Бонус: Чай-книга гаданий (х2)</p>"},{day:23,date:"2026-01-11",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:"<p>Подарок: Декаф Гватемала</p><p>Бонус: Бэггинс кофе</p>",zebra_message:"<p>Подарок: Декаф Мексика (х2)</p><p>Бонус: Бэггинс кофе (х2)</p>"},{day:24,date:"2026-01-12",tanya_gift:"Рождественский с лошадью",zebra_gift:"Рождественский с лошадью (х2)",tanya_bonus:"Какао с опоссумом",zebra_bonus:"Какао с опоссумом (х2)",title:"День 24",tanya_message:"<p>Подарок: Рождественский с лошадью</p><p>Бонус: Какао с опоссумом</p>",zebra_message:"<p>Подарок: Рождественский с лошадью (х2)</p><p>Бонус: Какао с опоссумом (х2)</p>"},{day:25,date:"2026-01-13",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function Cp({currentDate:y,userName:M}){const[C,g]=zl.useState(()=>Yg()),[E,w]=zl.useState(null),q=O=>{const j=Qu(O);if(Zu(j,y)&&(w(O),!C.has(O))){const K=Gh(O);g(K)}},P=()=>{w(null)},_=[...Array.from({length:25},(O,j)=>j+1)].sort((O,j)=>{const K=Qu(O),yl=Qu(j),vl=hc(K,y),_l=hc(yl,y),Ul=C.has(O),bl=C.has(j),Ml=Zu(K,y),sl=Zu(yl,y),Al=Ml&&!Ul,Ll=sl&&!bl,Sl=vl&&Ul,J=_l&&bl,Rl=!Ml,kl=!sl,Ft=Ul&&!vl&&Ml,dt=bl&&!_l&&sl;return Al&&!Ll?-1:!Al&&Ll?1:Al&&Ll?O-j:Sl&&!J?-1:!Sl&&J?1:Rl&&!kl?-1:!Rl&&kl?1:Rl&&kl||Ft&&dt?O-j:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:_.map(O=>{const j=Qu(O),K=Zu(j,y),yl=C.has(O),vl=hc(j,y);return d.jsx(Wh,{windowNumber:O,isActive:K,isOpened:yl,isExactMatch:vl,onClick:()=>q(O)},O)})}),E!==null&&(()=>{const O=Np[E-1],j=M==="Tanya"?O.tanya_message:M==="Zebra"?O.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(Fh,{windowNumber:E,message:j,onClose:P})})()]})}function wp(){const[y,M]=zl.useState(!1),C=zl.useRef(null),[g,E]=zl.useState(!1);zl.useEffect(()=>{const q=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",q),q==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),E(!0))},[]),zl.useEffect(()=>{if(!g)return;const q=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),M(!0),E(!1),window.removeEventListener("pointerdown",q),window.removeEventListener("keydown",q)};return window.addEventListener("pointerdown",q,{once:!0}),window.addEventListener("keydown",q,{once:!0}),()=>{window.removeEventListener("pointerdown",q),window.removeEventListener("keydown",q)}},[g]),zl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",y,"ref=",C.current),!C.current)return;const q=C.current;if(y)console.debug("[AudioControls] calling play()"),q.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),E(!0))});else{console.debug("[AudioControls] calling pause()");try{q.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[y]);const w=()=>{const q=!y;console.debug("[AudioControls] toggleMusic ->",q),M(q),localStorage.setItem("musicEnabled",String(q))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${y?"audio-active":""}`,onClick:w,title:"Toggle Christmas Music",children:[y?d.jsx(Hh,{size:20}):d.jsx(qh,{size:20}),d.jsx(wh,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:C,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:q=>console.error("[AudioControls] audio event: error",q)})]})}function jp(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((y,M)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},M))})}const xp=()=>new Date;function Up(){const[y,M]=zl.useState(()=>{const w=localStorage.getItem("adventCalendarUser");return w==="Tanya"||w==="Zebra"?w:(localStorage.clear(),null)}),[C,g]=zl.useState(xp),E=w=>{localStorage.clear(),M(w),localStorage.setItem("adventCalendarUser",w)};return zl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),x=new Date(P.datetime);g(x)}catch(q){console.error("Failed to fetch current date:",q),g(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx(Zh,{}),d.jsx(jp,{}),d.jsx(wp,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(Qh,{userName:y,onUserSelect:E}),d.jsx(Cp,{currentDate:C,userName:y})]})]})}vh.createRoot(document.getElementById("root")).render(d.jsx(zl.StrictMode,{children:d.jsx(Up,{})}));
