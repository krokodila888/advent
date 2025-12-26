(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const M of document.querySelectorAll('link[rel="modulepreload"]'))g(M);new MutationObserver(M=>{for(const j of M)if(j.type==="childList")for(const q of j.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&g(q)}).observe(document,{childList:!0,subtree:!0});function C(M){const j={};return M.integrity&&(j.integrity=M.integrity),M.referrerPolicy&&(j.referrerPolicy=M.referrerPolicy),M.crossOrigin==="use-credentials"?j.credentials="include":M.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function g(M){if(M.ep)return;M.ep=!0;const j=C(M);fetch(M.href,j)}})();var cc={exports:{}},_n={};var bg;function o0(){if(bg)return _n;bg=1;var y=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function C(g,M,j){var q=null;if(j!==void 0&&(q=""+j),M.key!==void 0&&(q=""+M.key),"key"in M){j={};for(var P in M)P!=="key"&&(j[P]=M[P])}else j=M;return M=j.ref,{$$typeof:y,type:g,key:q,ref:M!==void 0?M:null,props:j}}return _n.Fragment=w,_n.jsx=C,_n.jsxs=C,_n}var Sg;function r0(){return Sg||(Sg=1,cc.exports=o0()),cc.exports}var d=r0(),oc={exports:{}},X={};var zg;function f0(){if(zg)return X;zg=1;var y=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),q=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),K=Symbol.iterator;function yl(r){return r===null||typeof r!="object"?null:(r=K&&r[K]||r["@@iterator"],typeof r=="function"?r:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ul={};function bl(r,T,N){this.props=r,this.context=T,this.refs=Ul,this.updater=N||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(r,T){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,T,"setState")},bl.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ml(){}Ml.prototype=bl.prototype;function sl(r,T,N){this.props=r,this.context=T,this.refs=Ul,this.updater=N||vl}var Al=sl.prototype=new Ml;Al.constructor=sl,_l(Al,bl.prototype),Al.isPureReactComponent=!0;var Ll=Array.isArray;function Sl(){}var J={H:null,A:null,T:null,S:null},Rl=Object.prototype.hasOwnProperty;function $l(r,T,N){var R=N.ref;return{$$typeof:y,type:r,key:T,ref:R!==void 0?R:null,props:N}}function Ft(r,T){return $l(r.type,T,r.props)}function dt(r){return typeof r=="object"&&r!==null&&r.$$typeof===y}function kl(r){var T={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(N){return T[N]})}var Ta=/\/+/g;function jt(r,T){return typeof r=="object"&&r!==null&&r.key!=null?kl(""+r.key):T.toString(36)}function Tt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Sl,Sl):(r.status="pending",r.then(function(T){r.status==="pending"&&(r.status="fulfilled",r.value=T)},function(T){r.status==="pending"&&(r.status="rejected",r.reason=T)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function S(r,T,N,R,Z){var $=typeof r;($==="undefined"||$==="boolean")&&(r=null);var nl=!1;if(r===null)nl=!0;else switch($){case"bigint":case"string":case"number":nl=!0;break;case"object":switch(r.$$typeof){case y:case w:nl=!0;break;case D:return nl=r._init,S(nl(r._payload),T,N,R,Z)}}if(nl)return Z=Z(r),nl=R===""?"."+jt(r,0):R,Ll(Z)?(N="",nl!=null&&(N=nl.replace(Ta,"$&/")+"/"),S(Z,T,N,"",function(Oe){return Oe})):Z!=null&&(dt(Z)&&(Z=Ft(Z,N+(Z.key==null||r&&r.key===Z.key?"":(""+Z.key).replace(Ta,"$&/")+"/")+nl)),T.push(Z)),1;nl=0;var Kl=R===""?".":R+":";if(Ll(r))for(var wl=0;wl<r.length;wl++)R=r[wl],$=Kl+jt(R,wl),nl+=S(R,T,N,$,Z);else if(wl=yl(r),typeof wl=="function")for(r=wl.call(r),wl=0;!(R=r.next()).done;)R=R.value,$=Kl+jt(R,wl++),nl+=S(R,T,N,$,Z);else if($==="object"){if(typeof r.then=="function")return S(Tt(r),T,N,R,Z);throw T=String(r),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return nl}function O(r,T,N){if(r==null)return r;var R=[],Z=0;return S(r,R,"","",function($){return T.call(N,$,Z++)}),R}function Q(r){if(r._status===-1){var T=r._result;T=T(),T.then(function(N){(r._status===0||r._status===-1)&&(r._status=1,r._result=N)},function(N){(r._status===0||r._status===-1)&&(r._status=2,r._result=N)}),r._status===-1&&(r._status=0,r._result=T)}if(r._status===1)return r._result.default;throw r._result}var cl=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},gl={map:O,forEach:function(r,T,N){O(r,function(){T.apply(this,arguments)},N)},count:function(r){var T=0;return O(r,function(){T++}),T},toArray:function(r){return O(r,function(T){return T})||[]},only:function(r){if(!dt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return X.Activity=x,X.Children=gl,X.Component=bl,X.Fragment=C,X.Profiler=M,X.PureComponent=sl,X.StrictMode=g,X.Suspense=U,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,X.__COMPILER_RUNTIME={__proto__:null,c:function(r){return J.H.useMemoCache(r)}},X.cache=function(r){return function(){return r.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(r,T,N){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var R=_l({},r.props),Z=r.key;if(T!=null)for($ in T.key!==void 0&&(Z=""+T.key),T)!Rl.call(T,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&T.ref===void 0||(R[$]=T[$]);var $=arguments.length-2;if($===1)R.children=N;else if(1<$){for(var nl=Array($),Kl=0;Kl<$;Kl++)nl[Kl]=arguments[Kl+2];R.children=nl}return $l(r.type,Z,R)},X.createContext=function(r){return r={$$typeof:q,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:j,_context:r},r},X.createElement=function(r,T,N){var R,Z={},$=null;if(T!=null)for(R in T.key!==void 0&&($=""+T.key),T)Rl.call(T,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(Z[R]=T[R]);var nl=arguments.length-2;if(nl===1)Z.children=N;else if(1<nl){for(var Kl=Array(nl),wl=0;wl<nl;wl++)Kl[wl]=arguments[wl+2];Z.children=Kl}if(r&&r.defaultProps)for(R in nl=r.defaultProps,nl)Z[R]===void 0&&(Z[R]=nl[R]);return $l(r,$,Z)},X.createRef=function(){return{current:null}},X.forwardRef=function(r){return{$$typeof:P,render:r}},X.isValidElement=dt,X.lazy=function(r){return{$$typeof:D,_payload:{_status:-1,_result:r},_init:Q}},X.memo=function(r,T){return{$$typeof:_,type:r,compare:T===void 0?null:T}},X.startTransition=function(r){var T=J.T,N={};J.T=N;try{var R=r(),Z=J.S;Z!==null&&Z(N,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Sl,cl)}catch($){cl($)}finally{T!==null&&N.types!==null&&(T.types=N.types),J.T=T}},X.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},X.use=function(r){return J.H.use(r)},X.useActionState=function(r,T,N){return J.H.useActionState(r,T,N)},X.useCallback=function(r,T){return J.H.useCallback(r,T)},X.useContext=function(r){return J.H.useContext(r)},X.useDebugValue=function(){},X.useDeferredValue=function(r,T){return J.H.useDeferredValue(r,T)},X.useEffect=function(r,T){return J.H.useEffect(r,T)},X.useEffectEvent=function(r){return J.H.useEffectEvent(r)},X.useId=function(){return J.H.useId()},X.useImperativeHandle=function(r,T,N){return J.H.useImperativeHandle(r,T,N)},X.useInsertionEffect=function(r,T){return J.H.useInsertionEffect(r,T)},X.useLayoutEffect=function(r,T){return J.H.useLayoutEffect(r,T)},X.useMemo=function(r,T){return J.H.useMemo(r,T)},X.useOptimistic=function(r,T){return J.H.useOptimistic(r,T)},X.useReducer=function(r,T,N){return J.H.useReducer(r,T,N)},X.useRef=function(r){return J.H.useRef(r)},X.useState=function(r){return J.H.useState(r)},X.useSyncExternalStore=function(r,T,N){return J.H.useSyncExternalStore(r,T,N)},X.useTransition=function(){return J.H.useTransition()},X.version="19.2.3",X}var _g;function hc(){return _g||(_g=1,oc.exports=f0()),oc.exports}var zl=hc(),rc={exports:{}},An={},fc={exports:{}},gc={};var Ag;function g0(){return Ag||(Ag=1,(function(y){function w(S,O){var Q=S.length;S.push(O);l:for(;0<Q;){var cl=Q-1>>>1,gl=S[cl];if(0<M(gl,O))S[cl]=O,S[Q]=gl,Q=cl;else break l}}function C(S){return S.length===0?null:S[0]}function g(S){if(S.length===0)return null;var O=S[0],Q=S.pop();if(Q!==O){S[0]=Q;l:for(var cl=0,gl=S.length,r=gl>>>1;cl<r;){var T=2*(cl+1)-1,N=S[T],R=T+1,Z=S[R];if(0>M(N,Q))R<gl&&0>M(Z,N)?(S[cl]=Z,S[R]=Q,cl=R):(S[cl]=N,S[T]=Q,cl=T);else if(R<gl&&0>M(Z,Q))S[cl]=Z,S[R]=Q,cl=R;else break l}}return O}function M(S,O){var Q=S.sortIndex-O.sortIndex;return Q!==0?Q:S.id-O.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;y.unstable_now=function(){return j.now()}}else{var q=Date,P=q.now();y.unstable_now=function(){return q.now()-P}}var U=[],_=[],D=1,x=null,K=3,yl=!1,vl=!1,_l=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,Ml=typeof clearTimeout=="function"?clearTimeout:null,sl=typeof setImmediate<"u"?setImmediate:null;function Al(S){for(var O=C(_);O!==null;){if(O.callback===null)g(_);else if(O.startTime<=S)g(_),O.sortIndex=O.expirationTime,w(U,O);else break;O=C(_)}}function Ll(S){if(_l=!1,Al(S),!vl)if(C(U)!==null)vl=!0,Sl||(Sl=!0,kl());else{var O=C(_);O!==null&&Tt(Ll,O.startTime-S)}}var Sl=!1,J=-1,Rl=5,$l=-1;function Ft(){return Ul?!0:!(y.unstable_now()-$l<Rl)}function dt(){if(Ul=!1,Sl){var S=y.unstable_now();$l=S;var O=!0;try{l:{vl=!1,_l&&(_l=!1,Ml(J),J=-1),yl=!0;var Q=K;try{t:{for(Al(S),x=C(U);x!==null&&!(x.expirationTime>S&&Ft());){var cl=x.callback;if(typeof cl=="function"){x.callback=null,K=x.priorityLevel;var gl=cl(x.expirationTime<=S);if(S=y.unstable_now(),typeof gl=="function"){x.callback=gl,Al(S),O=!0;break t}x===C(U)&&g(U),Al(S)}else g(U);x=C(U)}if(x!==null)O=!0;else{var r=C(_);r!==null&&Tt(Ll,r.startTime-S),O=!1}}break l}finally{x=null,K=Q,yl=!1}O=void 0}}finally{O?kl():Sl=!1}}}var kl;if(typeof sl=="function")kl=function(){sl(dt)};else if(typeof MessageChannel<"u"){var Ta=new MessageChannel,jt=Ta.port2;Ta.port1.onmessage=dt,kl=function(){jt.postMessage(null)}}else kl=function(){bl(dt,0)};function Tt(S,O){J=bl(function(){S(y.unstable_now())},O)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(S){S.callback=null},y.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rl=0<S?Math.floor(1e3/S):5},y.unstable_getCurrentPriorityLevel=function(){return K},y.unstable_next=function(S){switch(K){case 1:case 2:case 3:var O=3;break;default:O=K}var Q=K;K=O;try{return S()}finally{K=Q}},y.unstable_requestPaint=function(){Ul=!0},y.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var Q=K;K=S;try{return O()}finally{K=Q}},y.unstable_scheduleCallback=function(S,O,Q){var cl=y.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?cl+Q:cl):Q=cl,S){case 1:var gl=-1;break;case 2:gl=250;break;case 5:gl=1073741823;break;case 4:gl=1e4;break;default:gl=5e3}return gl=Q+gl,S={id:D++,callback:O,priorityLevel:S,startTime:Q,expirationTime:gl,sortIndex:-1},Q>cl?(S.sortIndex=Q,w(_,S),C(U)===null&&S===C(_)&&(_l?(Ml(J),J=-1):_l=!0,Tt(Ll,Q-cl))):(S.sortIndex=gl,w(U,S),vl||yl||(vl=!0,Sl||(Sl=!0,kl()))),S},y.unstable_shouldYield=Ft,y.unstable_wrapCallback=function(S){var O=K;return function(){var Q=K;K=O;try{return S.apply(this,arguments)}finally{K=Q}}}})(gc)),gc}var Tg;function d0(){return Tg||(Tg=1,fc.exports=g0()),fc.exports}var dc={exports:{}},Vl={};var Eg;function p0(){if(Eg)return Vl;Eg=1;var y=hc();function w(U){var _="https://react.dev/errors/"+U;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)_+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+U+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(){}var g={d:{f:C,r:function(){throw Error(w(522))},D:C,C,L:C,m:C,X:C,S:C,M:C},p:0,findDOMNode:null},M=Symbol.for("react.portal");function j(U,_,D){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:x==null?null:""+x,children:U,containerInfo:_,implementation:D}}var q=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,_){if(U==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Vl.createPortal=function(U,_){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(w(299));return j(U,_,null,D)},Vl.flushSync=function(U){var _=q.T,D=g.p;try{if(q.T=null,g.p=2,U)return U()}finally{q.T=_,g.p=D,g.d.f()}},Vl.preconnect=function(U,_){typeof U=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,g.d.C(U,_))},Vl.prefetchDNS=function(U){typeof U=="string"&&g.d.D(U)},Vl.preinit=function(U,_){if(typeof U=="string"&&_&&typeof _.as=="string"){var D=_.as,x=P(D,_.crossOrigin),K=typeof _.integrity=="string"?_.integrity:void 0,yl=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;D==="style"?g.d.S(U,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:x,integrity:K,fetchPriority:yl}):D==="script"&&g.d.X(U,{crossOrigin:x,integrity:K,fetchPriority:yl,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Vl.preinitModule=function(U,_){if(typeof U=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var D=P(_.as,_.crossOrigin);g.d.M(U,{crossOrigin:D,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&g.d.M(U)},Vl.preload=function(U,_){if(typeof U=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var D=_.as,x=P(D,_.crossOrigin);g.d.L(U,D,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Vl.preloadModule=function(U,_){if(typeof U=="string")if(_){var D=P(_.as,_.crossOrigin);g.d.m(U,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:D,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else g.d.m(U)},Vl.requestFormReset=function(U){g.d.r(U)},Vl.unstable_batchedUpdates=function(U,_){return U(_)},Vl.useFormState=function(U,_,D){return q.H.useFormState(U,_,D)},Vl.useFormStatus=function(){return q.H.useHostTransitionStatus()},Vl.version="19.2.3",Vl}var Mg;function h0(){if(Mg)return dc.exports;Mg=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(w){console.error(w)}}return y(),dc.exports=p0(),dc.exports}var wg;function m0(){if(wg)return An;wg=1;var y=d0(),w=hc(),C=h0();function g(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function M(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function j(l){var t=l,a=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(a=t.return),l=t.return;while(l)}return t.tag===3?a:null}function q(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(j(l)!==l)throw Error(g(188))}function _(l){var t=l.alternate;if(!t){if(t=j(l),t===null)throw Error(g(188));return t!==l?null:l}for(var a=l,e=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(e=n.return,e!==null){a=e;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return U(n),l;if(i===e)return U(n),t;i=i.sibling}throw Error(g(188))}if(a.return!==e.return)a=n,e=i;else{for(var u=!1,s=n.child;s;){if(s===a){u=!0,a=n,e=i;break}if(s===e){u=!0,e=n,a=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===a){u=!0,a=i,e=n;break}if(s===e){u=!0,e=i,a=n;break}s=s.sibling}if(!u)throw Error(g(189))}}if(a.alternate!==e)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?l:t}function D(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=D(l),t!==null)return t;l=l.sibling}return null}var x=Object.assign,K=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Ml=Symbol.for("react.consumer"),sl=Symbol.for("react.context"),Al=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Rl=Symbol.for("react.lazy"),$l=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function kl(l){return l===null||typeof l!="object"?null:(l=dt&&l[dt]||l["@@iterator"],typeof l=="function"?l:null)}var Ta=Symbol.for("react.client.reference");function jt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ta?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case _l:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case Ll:return"Suspense";case Sl:return"SuspenseList";case $l:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case sl:return l.displayName||"Context";case Ml:return(l._context.displayName||"Context")+".Consumer";case Al:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case J:return t=l.displayName||null,t!==null?t:jt(l.type)||"Memo";case Rl:t=l._payload,l=l._init;try{return jt(l(t))}catch{}}return null}var Tt=Array.isArray,S=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},cl=[],gl=-1;function r(l){return{current:l}}function T(l){0>gl||(l.current=cl[gl],cl[gl]=null,gl--)}function N(l,t){gl++,cl[gl]=l.current,l.current=t}var R=r(null),Z=r(null),$=r(null),nl=r(null);function Kl(l,t){switch(N($,t),N(Z,l),N(R,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Xf(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Xf(t),l=Zf(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}T(R),N(R,l)}function wl(){T(R),T(Z),T($)}function Oe(l){l.memoizedState!==null&&N(nl,l);var t=R.current,a=Zf(t,l.type);t!==a&&(N(Z,l),N(R,a))}function Tn(l){Z.current===l&&(T(R),T(Z)),nl.current===l&&(T(nl),vn._currentValue=Q)}var Li,mc;function Ea(l){if(Li===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Li=t&&t[1]||"",mc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Li+l+mc}var Vi=!1;function Ki(l,t){if(!l||Vi)return"";Vi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var m=v}Reflect.construct(l,[],A)}else{try{A.call()}catch(v){m=v}l.call(A.prototype)}}else{try{throw Error()}catch(v){m=v}(A=l())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var c=u.split(`
`),h=s.split(`
`);for(n=e=0;e<c.length&&!c[e].includes("DetermineComponentFrameRoot");)e++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(e===c.length||n===h.length)for(e=c.length-1,n=h.length-1;1<=e&&0<=n&&c[e]!==h[n];)n--;for(;1<=e&&0<=n;e--,n--)if(c[e]!==h[n]){if(e!==1||n!==1)do if(e--,n--,0>n||c[e]!==h[n]){var b=`
`+c[e].replace(" at new "," at ");return l.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",l.displayName)),b}while(1<=e&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=a}return(a=l?l.displayName||l.name:"")?Ea(a):""}function Gg(l,t){switch(l.tag){case 26:case 27:case 5:return Ea(l.type);case 16:return Ea("Lazy");case 13:return l.child!==t&&t!==null?Ea("Suspense Fallback"):Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 15:return Ki(l.type,!1);case 11:return Ki(l.type.render,!1);case 1:return Ki(l.type,!0);case 31:return Ea("Activity");default:return""}}function yc(l){try{var t="",a=null;do t+=Gg(l,a),a=l,l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ji=Object.prototype.hasOwnProperty,$i=y.unstable_scheduleCallback,ki=y.unstable_cancelCallback,Qg=y.unstable_shouldYield,Xg=y.unstable_requestPaint,et=y.unstable_now,Zg=y.unstable_getCurrentPriorityLevel,vc=y.unstable_ImmediatePriority,bc=y.unstable_UserBlockingPriority,En=y.unstable_NormalPriority,Lg=y.unstable_LowPriority,Sc=y.unstable_IdlePriority,Vg=y.log,Kg=y.unstable_setDisableYieldValue,De=null,nt=null;function It(l){if(typeof Vg=="function"&&Kg(l),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(De,l)}catch{}}var it=Math.clz32?Math.clz32:kg,Jg=Math.log,$g=Math.LN2;function kg(l){return l>>>=0,l===0?32:31-(Jg(l)/$g|0)|0}var Mn=256,wn=262144,On=4194304;function Ma(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Dn(l,t,a){var e=l.pendingLanes;if(e===0)return 0;var n=0,i=l.suspendedLanes,u=l.pingedLanes;l=l.warmLanes;var s=e&134217727;return s!==0?(e=s&~i,e!==0?n=Ma(e):(u&=s,u!==0?n=Ma(u):a||(a=s&~l,a!==0&&(n=Ma(a))))):(s=e&~i,s!==0?n=Ma(s):u!==0?n=Ma(u):a||(a=e&~l,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Ne(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wg(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(){var l=On;return On<<=1,(On&62914560)===0&&(On=4194304),l}function Wi(l){for(var t=[],a=0;31>a;a++)t.push(l);return t}function Ce(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Fg(l,t,a,e,n,i){var u=l.pendingLanes;l.pendingLanes=a,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=a,l.entangledLanes&=a,l.errorRecoveryDisabledLanes&=a,l.shellSuspendCounter=0;var s=l.entanglements,c=l.expirationTimes,h=l.hiddenUpdates;for(a=u&~a;0<a;){var b=31-it(a),A=1<<b;s[b]=0,c[b]=-1;var m=h[b];if(m!==null)for(h[b]=null,b=0;b<m.length;b++){var v=m[b];v!==null&&(v.lane&=-536870913)}a&=~A}e!==0&&_c(l,e,0),i!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=i&~(u&~t))}function _c(l,t,a){l.pendingLanes|=t,l.suspendedLanes&=~t;var e=31-it(t);l.entangledLanes|=t,l.entanglements[e]=l.entanglements[e]|1073741824|a&261930}function Ac(l,t){var a=l.entangledLanes|=t;for(l=l.entanglements;a;){var e=31-it(a),n=1<<e;n&t|l[e]&t&&(l[e]|=t),a&=~n}}function Tc(l,t){var a=t&-t;return a=(a&42)!==0?1:Fi(a),(a&(l.suspendedLanes|t))!==0?0:a}function Fi(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ii(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Ec(){var l=O.p;return l!==0?l:(l=window.event,l===void 0?32:gg(l.type))}function Mc(l,t){var a=O.p;try{return O.p=l,t()}finally{O.p=a}}var Pt=Math.random().toString(36).slice(2),Yl="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,La="__reactContainer$"+Pt,Pi="__reactEvents$"+Pt,Ig="__reactListeners$"+Pt,Pg="__reactHandles$"+Pt,wc="__reactResources$"+Pt,je="__reactMarker$"+Pt;function lu(l){delete l[Yl],delete l[Wl],delete l[Pi],delete l[Ig],delete l[Pg]}function Va(l){var t=l[Yl];if(t)return t;for(var a=l.parentNode;a;){if(t=a[La]||a[Yl]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(l=Wf(l);l!==null;){if(a=l[Yl])return a;l=Wf(l)}return t}l=a,a=l.parentNode}return null}function Ka(l){if(l=l[Yl]||l[La]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function xe(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(g(33))}function Ja(l){var t=l[wc];return t||(t=l[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Bl(l){l[je]=!0}var Oc=new Set,Dc={};function wa(l,t){$a(l,t),$a(l+"Capture",t)}function $a(l,t){for(Dc[l]=t,l=0;l<t.length;l++)Oc.add(t[l])}var ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},Cc={};function td(l){return Ji.call(Cc,l)?!0:Ji.call(Nc,l)?!1:ld.test(l)?Cc[l]=!0:(Nc[l]=!0,!1)}function Nn(l,t,a){if(td(t))if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+a)}}function Cn(l,t,a){if(a===null)l.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+a)}}function xt(l,t,a,e){if(e===null)l.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(a);return}l.setAttributeNS(t,a,""+e)}}function pt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function jc(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ad(l,t,a){var e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,i=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function tu(l){if(!l._valueTracker){var t=jc(l)?"checked":"value";l._valueTracker=ad(l,t,""+l[t])}}function xc(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var a=t.getValue(),e="";return l&&(e=jc(l)?l.checked?"true":"false":l.value),l=e,l!==a?(t.setValue(l),!0):!1}function jn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ed=/[\n"\\]/g;function ht(l){return l.replace(ed,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function au(l,t,a,e,n,i,u,s){l.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?l.type=u:l.removeAttribute("type"),t!=null?u==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+pt(t)):l.value!==""+pt(t)&&(l.value=""+pt(t)):u!=="submit"&&u!=="reset"||l.removeAttribute("value"),t!=null?eu(l,u,pt(t)):a!=null?eu(l,u,pt(a)):e!=null&&l.removeAttribute("value"),n==null&&i!=null&&(l.defaultChecked=!!i),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.name=""+pt(s):l.removeAttribute("name")}function Uc(l,t,a,e,n,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){tu(l);return}a=a!=null?""+pt(a):"",t=t!=null?""+pt(t):a,s||t===l.value||(l.value=t),l.defaultValue=t}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,l.checked=s?l.checked:!!e,l.defaultChecked=!!e,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.name=u),tu(l)}function eu(l,t,a){t==="number"&&jn(l.ownerDocument)===l||l.defaultValue===""+a||(l.defaultValue=""+a)}function ka(l,t,a,e){if(l=l.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<l.length;a++)n=t.hasOwnProperty("$"+l[a].value),l[a].selected!==n&&(l[a].selected=n),n&&e&&(l[a].defaultSelected=!0)}else{for(a=""+pt(a),t=null,n=0;n<l.length;n++){if(l[n].value===a){l[n].selected=!0,e&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Hc(l,t,a){if(t!=null&&(t=""+pt(t),t!==l.value&&(l.value=t),a==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=a!=null?""+pt(a):""}function Rc(l,t,a,e){if(t==null){if(e!=null){if(a!=null)throw Error(g(92));if(Tt(e)){if(1<e.length)throw Error(g(93));e=e[0]}a=e}a==null&&(a=""),t=a}a=pt(t),l.defaultValue=a,e=l.textContent,e===a&&e!==""&&e!==null&&(l.value=e),tu(l)}function Wa(l,t){if(t){var a=l.firstChild;if(a&&a===l.lastChild&&a.nodeType===3){a.nodeValue=t;return}}l.textContent=t}var nd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bc(l,t,a){var e=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":e?l.setProperty(t,a):typeof a!="number"||a===0||nd.has(t)?t==="float"?l.cssFloat=a:l[t]=(""+a).trim():l[t]=a+"px"}function qc(l,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(l=l.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="");for(var n in t)e=t[n],t.hasOwnProperty(n)&&a[n]!==e&&Bc(l,n,e)}else for(var i in t)t.hasOwnProperty(i)&&Bc(l,i,t[i])}function nu(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var id=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ud=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xn(l){return ud.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var iu=null;function uu(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fa=null,Ia=null;function Yc(l){var t=Ka(l);if(t&&(l=t.stateNode)){var a=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(au(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=l;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var e=a[t];if(e!==l&&e.form===l.form){var n=e[Wl]||null;if(!n)throw Error(g(90));au(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)e=a[t],e.form===l.form&&xc(e)}break l;case"textarea":Hc(l,a.value,a.defaultValue);break l;case"select":t=a.value,t!=null&&ka(l,!!a.multiple,t,!1)}}}var su=!1;function Gc(l,t,a){if(su)return l(t,a);su=!0;try{var e=l(t);return e}finally{if(su=!1,(Fa!==null||Ia!==null)&&(Si(),Fa&&(t=Fa,l=Ia,Ia=Fa=null,Yc(t),l)))for(t=0;t<l.length;t++)Yc(l[t])}}function Ue(l,t){var a=l.stateNode;if(a===null)return null;var e=a[Wl]||null;if(e===null)return null;a=e[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(l=l.type,e=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!e;break l;default:l=!1}if(l)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(Ht)try{var He={};Object.defineProperty(He,"passive",{get:function(){cu=!0}}),window.addEventListener("test",He,He),window.removeEventListener("test",He,He)}catch{cu=!1}var la=null,ou=null,Un=null;function Qc(){if(Un)return Un;var l,t=ou,a=t.length,e,n="value"in la?la.value:la.textContent,i=n.length;for(l=0;l<a&&t[l]===n[l];l++);var u=a-l;for(e=1;e<=u&&t[a-e]===n[i-e];e++);return Un=n.slice(l,1<e?1-e:void 0)}function Hn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Rn(){return!0}function Xc(){return!1}function Fl(l){function t(a,e,n,i,u){this._reactName=a,this._targetInst=n,this.type=e,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in l)l.hasOwnProperty(s)&&(a=l[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rn:Xc,this.isPropagationStopped=Xc,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bn=Fl(Oa),Re=x({},Oa,{view:0,detail:0}),sd=Fl(Re),ru,fu,Be,qn=x({},Re,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Be&&(Be&&l.type==="mousemove"?(ru=l.screenX-Be.screenX,fu=l.screenY-Be.screenY):fu=ru=0,Be=l),ru)},movementY:function(l){return"movementY"in l?l.movementY:fu}}),Zc=Fl(qn),cd=x({},qn,{dataTransfer:0}),od=Fl(cd),rd=x({},Re,{relatedTarget:0}),gu=Fl(rd),fd=x({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=Fl(fd),dd=x({},Oa,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),pd=Fl(dd),hd=x({},Oa,{data:0}),Lc=Fl(hd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vd[l])?!!t[l]:!1}function du(){return bd}var Sd=x({},Re,{key:function(l){if(l.key){var t=md[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Hn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(l){return l.type==="keypress"?Hn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Hn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),zd=Fl(Sd),_d=x({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=Fl(_d),Ad=x({},Re,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),Td=Fl(Ad),Ed=x({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=Fl(Ed),wd=x({},qn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Od=Fl(wd),Dd=x({},Oa,{newState:0,oldState:0}),Nd=Fl(Dd),Cd=[9,13,27,32],pu=Ht&&"CompositionEvent"in window,qe=null;Ht&&"documentMode"in document&&(qe=document.documentMode);var jd=Ht&&"TextEvent"in window&&!qe,Kc=Ht&&(!pu||qe&&8<qe&&11>=qe),Jc=" ",$c=!1;function kc(l,t){switch(l){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pa=!1;function xd(l,t){switch(l){case"compositionend":return Wc(t);case"keypress":return t.which!==32?null:($c=!0,Jc);case"textInput":return l=t.data,l===Jc&&$c?null:l;default:return null}}function Ud(l,t){if(Pa)return l==="compositionend"||!pu&&kc(l,t)?(l=Qc(),Un=ou=la=null,Pa=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Hd[l.type]:t==="textarea"}function Ic(l,t,a,e){Fa?Ia?Ia.push(e):Ia=[e]:Fa=e,t=wi(t,"onChange"),0<t.length&&(a=new Bn("onChange","change",null,a,e),l.push({event:a,listeners:t}))}var Ye=null,Ge=null;function Rd(l){Rf(l,0)}function Yn(l){var t=xe(l);if(xc(t))return l}function Pc(l,t){if(l==="change")return t}var lo=!1;if(Ht){var hu;if(Ht){var mu="oninput"in document;if(!mu){var to=document.createElement("div");to.setAttribute("oninput","return;"),mu=typeof to.oninput=="function"}hu=mu}else hu=!1;lo=hu&&(!document.documentMode||9<document.documentMode)}function ao(){Ye&&(Ye.detachEvent("onpropertychange",eo),Ge=Ye=null)}function eo(l){if(l.propertyName==="value"&&Yn(Ge)){var t=[];Ic(t,Ge,l,uu(l)),Gc(Rd,t)}}function Bd(l,t,a){l==="focusin"?(ao(),Ye=t,Ge=a,Ye.attachEvent("onpropertychange",eo)):l==="focusout"&&ao()}function qd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Yn(Ge)}function Yd(l,t){if(l==="click")return Yn(t)}function Gd(l,t){if(l==="input"||l==="change")return Yn(t)}function Qd(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var ut=typeof Object.is=="function"?Object.is:Qd;function Qe(l,t){if(ut(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var a=Object.keys(l),e=Object.keys(t);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var n=a[e];if(!Ji.call(t,n)||!ut(l[n],t[n]))return!1}return!0}function no(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function io(l,t){var a=no(l);l=0;for(var e;a;){if(a.nodeType===3){if(e=l+a.textContent.length,l<=t&&e>=t)return{node:a,offset:t-l};l=e}l:{for(;a;){if(a.nextSibling){a=a.nextSibling;break l}a=a.parentNode}a=void 0}a=no(a)}}function uo(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?uo(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function so(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=jn(l.document);t instanceof l.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)l=t.contentWindow;else break;t=jn(l.document)}return t}function yu(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Xd=Ht&&"documentMode"in document&&11>=document.documentMode,le=null,vu=null,Xe=null,bu=!1;function co(l,t,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||le==null||le!==jn(e)||(e=le,"selectionStart"in e&&yu(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Xe&&Qe(Xe,e)||(Xe=e,e=wi(vu,"onSelect"),0<e.length&&(t=new Bn("onSelect","select",null,t,a),l.push({event:t,listeners:e}),t.target=le)))}function Da(l,t){var a={};return a[l.toLowerCase()]=t.toLowerCase(),a["Webkit"+l]="webkit"+t,a["Moz"+l]="moz"+t,a}var te={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},Su={},oo={};Ht&&(oo=document.createElement("div").style,"AnimationEvent"in window||(delete te.animationend.animation,delete te.animationiteration.animation,delete te.animationstart.animation),"TransitionEvent"in window||delete te.transitionend.transition);function Na(l){if(Su[l])return Su[l];if(!te[l])return l;var t=te[l],a;for(a in t)if(t.hasOwnProperty(a)&&a in oo)return Su[l]=t[a];return l}var ro=Na("animationend"),fo=Na("animationiteration"),go=Na("animationstart"),Zd=Na("transitionrun"),Ld=Na("transitionstart"),Vd=Na("transitioncancel"),po=Na("transitionend"),ho=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Et(l,t){ho.set(l,t),wa(t,[l])}var Gn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},mt=[],ae=0,_u=0;function Qn(){for(var l=ae,t=_u=ae=0;t<l;){var a=mt[t];mt[t++]=null;var e=mt[t];mt[t++]=null;var n=mt[t];mt[t++]=null;var i=mt[t];if(mt[t++]=null,e!==null&&n!==null){var u=e.pending;u===null?n.next=n:(n.next=u.next,u.next=n),e.pending=n}i!==0&&mo(a,n,i)}}function Xn(l,t,a,e){mt[ae++]=l,mt[ae++]=t,mt[ae++]=a,mt[ae++]=e,_u|=e,l.lanes|=e,l=l.alternate,l!==null&&(l.lanes|=e)}function Au(l,t,a,e){return Xn(l,t,a,e),Zn(l)}function Ca(l,t){return Xn(l,null,null,t),Zn(l)}function mo(l,t,a){l.lanes|=a;var e=l.alternate;e!==null&&(e.lanes|=a);for(var n=!1,i=l.return;i!==null;)i.childLanes|=a,e=i.alternate,e!==null&&(e.childLanes|=a),i.tag===22&&(l=i.stateNode,l===null||l._visibility&1||(n=!0)),l=i,i=i.return;return l.tag===3?(i=l.stateNode,n&&t!==null&&(n=31-it(a),l=i.hiddenUpdates,e=l[n],e===null?l[n]=[t]:e.push(t),t.lane=a|536870912),i):null}function Zn(l){if(50<fn)throw fn=0,js=null,Error(g(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ee={};function Kd(l,t,a,e){this.tag=l,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(l,t,a,e){return new Kd(l,t,a,e)}function Tu(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var a=l.alternate;return a===null?(a=st(l.tag,t,l.key,l.mode),a.elementType=l.elementType,a.type=l.type,a.stateNode=l.stateNode,a.alternate=l,l.alternate=a):(a.pendingProps=t,a.type=l.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=l.flags&65011712,a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,t=l.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=l.sibling,a.index=l.index,a.ref=l.ref,a.refCleanup=l.refCleanup,a}function yo(l,t){l.flags&=65011714;var a=l.alternate;return a===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=a.childLanes,l.lanes=a.lanes,l.child=a.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=a.memoizedProps,l.memoizedState=a.memoizedState,l.updateQueue=a.updateQueue,l.type=a.type,t=a.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Ln(l,t,a,e,n,i){var u=0;if(e=l,typeof l=="function")Tu(l)&&(u=1);else if(typeof l=="string")u=Fp(l,a,R.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case $l:return l=st(31,a,t,n),l.elementType=$l,l.lanes=i,l;case _l:return ja(a.children,n,i,t);case Ul:u=8,n|=24;break;case bl:return l=st(12,a,t,n|2),l.elementType=bl,l.lanes=i,l;case Ll:return l=st(13,a,t,n),l.elementType=Ll,l.lanes=i,l;case Sl:return l=st(19,a,t,n),l.elementType=Sl,l.lanes=i,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case sl:u=10;break l;case Ml:u=9;break l;case Al:u=11;break l;case J:u=14;break l;case Rl:u=16,e=null;break l}u=29,a=Error(g(130,l===null?"null":typeof l,"")),e=null}return t=st(u,a,t,n),t.elementType=l,t.type=e,t.lanes=i,t}function ja(l,t,a,e){return l=st(7,l,e,t),l.lanes=a,l}function Eu(l,t,a){return l=st(6,l,null,t),l.lanes=a,l}function vo(l){var t=st(18,null,null,0);return t.stateNode=l,t}function Mu(l,t,a){return t=st(4,l.children!==null?l.children:[],l.key,t),t.lanes=a,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var bo=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var a=bo.get(l);return a!==void 0?a:(t={value:l,source:t,stack:yc(t)},bo.set(l,t),t)}return{value:l,source:t,stack:yc(t)}}var ne=[],ie=0,Vn=null,Ze=0,vt=[],bt=0,ta=null,Ot=1,Dt="";function Bt(l,t){ne[ie++]=Ze,ne[ie++]=Vn,Vn=l,Ze=t}function So(l,t,a){vt[bt++]=Ot,vt[bt++]=Dt,vt[bt++]=ta,ta=l;var e=Ot;l=Dt;var n=32-it(e)-1;e&=~(1<<n),a+=1;var i=32-it(t)+n;if(30<i){var u=n-n%5;i=(e&(1<<u)-1).toString(32),e>>=u,n-=u,Ot=1<<32-it(t)+n|a<<n|e,Dt=i+l}else Ot=1<<i|a<<n|e,Dt=l}function wu(l){l.return!==null&&(Bt(l,1),So(l,1,0))}function Ou(l){for(;l===Vn;)Vn=ne[--ie],ne[ie]=null,Ze=ne[--ie],ne[ie]=null;for(;l===ta;)ta=vt[--bt],vt[bt]=null,Dt=vt[--bt],vt[bt]=null,Ot=vt[--bt],vt[bt]=null}function zo(l,t){vt[bt++]=Ot,vt[bt++]=Dt,vt[bt++]=ta,Ot=t.id,Dt=t.overflow,ta=l}var Gl=null,pl=null,ll=!1,aa=null,St=!1,Du=Error(g(519));function ea(l){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Le(yt(t,l)),Du}function _o(l){var t=l.stateNode,a=l.type,e=l.memoizedProps;switch(t[Yl]=l,t[Wl]=e,a){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(a=0;a<dn.length;a++)W(dn[a],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Uc(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Rc(t,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||e.suppressHydrationWarning===!0||Gf(t.textContent,a)?(e.popover!=null&&(W("beforetoggle",t),W("toggle",t)),e.onScroll!=null&&W("scroll",t),e.onScrollEnd!=null&&W("scrollend",t),e.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ea(l,!0)}function Ao(l){for(Gl=l.return;Gl;)switch(Gl.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Gl=Gl.return}}function ue(l){if(l!==Gl)return!1;if(!ll)return Ao(l),ll=!0,!1;var t=l.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=l.type,a=!(a!=="form"&&a!=="button")||Js(l.type,l.memoizedProps)),a=!a),a&&pl&&ea(l),Ao(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));pl=kf(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));pl=kf(l)}else t===27?(t=pl,ya(l.type)?(l=Is,Is=null,pl=l):pl=t):pl=Gl?_t(l.stateNode.nextSibling):null;return!0}function xa(){pl=Gl=null,ll=!1}function Nu(){var l=aa;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),aa=null),l}function Le(l){aa===null?aa=[l]:aa.push(l)}var Cu=r(null),Ua=null,qt=null;function na(l,t,a){N(Cu,t._currentValue),t._currentValue=a}function Yt(l){l._currentValue=Cu.current,T(Cu)}function ju(l,t,a){for(;l!==null;){var e=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),l===a)break;l=l.return}}function xu(l,t,a,e){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;l:for(;i!==null;){var s=i;i=n;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),ju(i.return,a,l),e||(u=null);break l}i=s.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(g(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),ju(u,a,l),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===l){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function se(l,t,a,e){l=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(g(387));if(u=u.memoizedProps,u!==null){var s=n.type;ut(n.pendingProps.value,u.value)||(l!==null?l.push(s):l=[s])}}else if(n===nl.current){if(u=n.alternate,u===null)throw Error(g(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(vn):l=[vn])}n=n.return}l!==null&&xu(t,l,a,e),t.flags|=262144}function Kn(l){for(l=l.firstContext;l!==null;){if(!ut(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ha(l){Ua=l,qt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Ql(l){return To(Ua,l)}function Jn(l,t){return Ua===null&&Ha(l),To(l,t)}function To(l,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},qt===null){if(l===null)throw Error(g(308));qt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else qt=qt.next=t;return a}var Jd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(a,e){l.push(e)}};this.abort=function(){t.aborted=!0,l.forEach(function(a){return a()})}},$d=y.unstable_scheduleCallback,kd=y.unstable_NormalPriority,Nl={$$typeof:sl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Jd,data:new Map,refCount:0}}function Ve(l){l.refCount--,l.refCount===0&&$d(kd,function(){l.controller.abort()})}var Ke=null,Hu=0,ce=0,oe=null;function Wd(l,t){if(Ke===null){var a=Ke=[];Hu=0,ce=qs(),oe={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Hu++,t.then(Eo,Eo),t}function Eo(){if(--Hu===0&&Ke!==null){oe!==null&&(oe.status="fulfilled");var l=Ke;Ke=null,ce=0,oe=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fd(l,t){var a=[],e={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return l.then(function(){e.status="fulfilled",e.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(e.status="rejected",e.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),e}var Mo=S.S;S.S=function(l,t){rf=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wd(l,t),Mo!==null&&Mo(l,t)};var Ra=r(null);function Ru(){var l=Ra.current;return l!==null?l:dl.pooledCache}function $n(l,t){t===null?N(Ra,Ra.current):N(Ra,t.pool)}function wo(){var l=Ru();return l===null?null:{parent:Nl._currentValue,pool:l}}var re=Error(g(460)),Bu=Error(g(474)),kn=Error(g(542)),Wn={then:function(){}};function Oo(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Do(l,t,a){switch(a=l[a],a===void 0?l.push(t):a!==t&&(t.then(Ut,Ut),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Co(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=dl,l!==null&&100<l.shellSuspendCounter)throw Error(g(482));l=t,l.status="pending",l.then(function(e){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=e}},function(e){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Co(l),l}throw qa=t,re}}function Ba(l){try{var t=l._init;return t(l._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(qa=a,re):a}}var qa=null;function No(){if(qa===null)throw Error(g(459));var l=qa;return qa=null,l}function Co(l){if(l===re||l===kn)throw Error(g(483))}var fe=null,Je=0;function Fn(l){var t=Je;return Je+=1,fe===null&&(fe=[]),Do(fe,l,t)}function $e(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===K?Error(g(525)):(l=Object.prototype.toString.call(t),Error(g(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function jo(l){function t(f,o){if(l){var p=f.deletions;p===null?(f.deletions=[o],f.flags|=16):p.push(o)}}function a(f,o){if(!l)return null;for(;o!==null;)t(f,o),o=o.sibling;return null}function e(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function n(f,o){return f=Rt(f,o),f.index=0,f.sibling=null,f}function i(f,o,p){return f.index=p,l?(p=f.alternate,p!==null?(p=p.index,p<o?(f.flags|=67108866,o):p):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function u(f){return l&&f.alternate===null&&(f.flags|=67108866),f}function s(f,o,p,z){return o===null||o.tag!==6?(o=Eu(p,f.mode,z),o.return=f,o):(o=n(o,p),o.return=f,o)}function c(f,o,p,z){var Y=p.type;return Y===_l?b(f,o,p.props.children,z,p.key):o!==null&&(o.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Rl&&Ba(Y)===o.type)?(o=n(o,p.props),$e(o,p),o.return=f,o):(o=Ln(p.type,p.key,p.props,null,f.mode,z),$e(o,p),o.return=f,o)}function h(f,o,p,z){return o===null||o.tag!==4||o.stateNode.containerInfo!==p.containerInfo||o.stateNode.implementation!==p.implementation?(o=Mu(p,f.mode,z),o.return=f,o):(o=n(o,p.children||[]),o.return=f,o)}function b(f,o,p,z,Y){return o===null||o.tag!==7?(o=ja(p,f.mode,z,Y),o.return=f,o):(o=n(o,p),o.return=f,o)}function A(f,o,p){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Eu(""+o,f.mode,p),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case yl:return p=Ln(o.type,o.key,o.props,null,f.mode,p),$e(p,o),p.return=f,p;case vl:return o=Mu(o,f.mode,p),o.return=f,o;case Rl:return o=Ba(o),A(f,o,p)}if(Tt(o)||kl(o))return o=ja(o,f.mode,p,null),o.return=f,o;if(typeof o.then=="function")return A(f,Fn(o),p);if(o.$$typeof===sl)return A(f,Jn(f,o),p);In(f,o)}return null}function m(f,o,p,z){var Y=o!==null?o.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return Y!==null?null:s(f,o,""+p,z);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yl:return p.key===Y?c(f,o,p,z):null;case vl:return p.key===Y?h(f,o,p,z):null;case Rl:return p=Ba(p),m(f,o,p,z)}if(Tt(p)||kl(p))return Y!==null?null:b(f,o,p,z,null);if(typeof p.then=="function")return m(f,o,Fn(p),z);if(p.$$typeof===sl)return m(f,o,Jn(f,p),z);In(f,p)}return null}function v(f,o,p,z,Y){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return f=f.get(p)||null,s(o,f,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case yl:return f=f.get(z.key===null?p:z.key)||null,c(o,f,z,Y);case vl:return f=f.get(z.key===null?p:z.key)||null,h(o,f,z,Y);case Rl:return z=Ba(z),v(f,o,p,z,Y)}if(Tt(z)||kl(z))return f=f.get(p)||null,b(o,f,z,Y,null);if(typeof z.then=="function")return v(f,o,p,Fn(z),Y);if(z.$$typeof===sl)return v(f,o,p,Jn(o,z),Y);In(o,z)}return null}function H(f,o,p,z){for(var Y=null,tl=null,B=o,V=o=0,I=null;B!==null&&V<p.length;V++){B.index>V?(I=B,B=null):I=B.sibling;var al=m(f,B,p[V],z);if(al===null){B===null&&(B=I);break}l&&B&&al.alternate===null&&t(f,B),o=i(al,o,V),tl===null?Y=al:tl.sibling=al,tl=al,B=I}if(V===p.length)return a(f,B),ll&&Bt(f,V),Y;if(B===null){for(;V<p.length;V++)B=A(f,p[V],z),B!==null&&(o=i(B,o,V),tl===null?Y=B:tl.sibling=B,tl=B);return ll&&Bt(f,V),Y}for(B=e(B);V<p.length;V++)I=v(B,f,V,p[V],z),I!==null&&(l&&I.alternate!==null&&B.delete(I.key===null?V:I.key),o=i(I,o,V),tl===null?Y=I:tl.sibling=I,tl=I);return l&&B.forEach(function(_a){return t(f,_a)}),ll&&Bt(f,V),Y}function G(f,o,p,z){if(p==null)throw Error(g(151));for(var Y=null,tl=null,B=o,V=o=0,I=null,al=p.next();B!==null&&!al.done;V++,al=p.next()){B.index>V?(I=B,B=null):I=B.sibling;var _a=m(f,B,al.value,z);if(_a===null){B===null&&(B=I);break}l&&B&&_a.alternate===null&&t(f,B),o=i(_a,o,V),tl===null?Y=_a:tl.sibling=_a,tl=_a,B=I}if(al.done)return a(f,B),ll&&Bt(f,V),Y;if(B===null){for(;!al.done;V++,al=p.next())al=A(f,al.value,z),al!==null&&(o=i(al,o,V),tl===null?Y=al:tl.sibling=al,tl=al);return ll&&Bt(f,V),Y}for(B=e(B);!al.done;V++,al=p.next())al=v(B,f,V,al.value,z),al!==null&&(l&&al.alternate!==null&&B.delete(al.key===null?V:al.key),o=i(al,o,V),tl===null?Y=al:tl.sibling=al,tl=al);return l&&B.forEach(function(c0){return t(f,c0)}),ll&&Bt(f,V),Y}function fl(f,o,p,z){if(typeof p=="object"&&p!==null&&p.type===_l&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yl:l:{for(var Y=p.key;o!==null;){if(o.key===Y){if(Y=p.type,Y===_l){if(o.tag===7){a(f,o.sibling),z=n(o,p.props.children),z.return=f,f=z;break l}}else if(o.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Rl&&Ba(Y)===o.type){a(f,o.sibling),z=n(o,p.props),$e(z,p),z.return=f,f=z;break l}a(f,o);break}else t(f,o);o=o.sibling}p.type===_l?(z=ja(p.props.children,f.mode,z,p.key),z.return=f,f=z):(z=Ln(p.type,p.key,p.props,null,f.mode,z),$e(z,p),z.return=f,f=z)}return u(f);case vl:l:{for(Y=p.key;o!==null;){if(o.key===Y)if(o.tag===4&&o.stateNode.containerInfo===p.containerInfo&&o.stateNode.implementation===p.implementation){a(f,o.sibling),z=n(o,p.children||[]),z.return=f,f=z;break l}else{a(f,o);break}else t(f,o);o=o.sibling}z=Mu(p,f.mode,z),z.return=f,f=z}return u(f);case Rl:return p=Ba(p),fl(f,o,p,z)}if(Tt(p))return H(f,o,p,z);if(kl(p)){if(Y=kl(p),typeof Y!="function")throw Error(g(150));return p=Y.call(p),G(f,o,p,z)}if(typeof p.then=="function")return fl(f,o,Fn(p),z);if(p.$$typeof===sl)return fl(f,o,Jn(f,p),z);In(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,o!==null&&o.tag===6?(a(f,o.sibling),z=n(o,p),z.return=f,f=z):(a(f,o),z=Eu(p,f.mode,z),z.return=f,f=z),u(f)):a(f,o)}return function(f,o,p,z){try{Je=0;var Y=fl(f,o,p,z);return fe=null,Y}catch(B){if(B===re||B===kn)throw B;var tl=st(29,B,null,f.mode);return tl.lanes=z,tl.return=f,tl}}}var Ya=jo(!0),xo=jo(!1),ia=!1;function qu(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ua(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function sa(l,t,a){var e=l.updateQueue;if(e===null)return null;if(e=e.shared,(el&2)!==0){var n=e.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t,t=Zn(l),mo(l,null,a),t}return Xn(l,e,t,a),Zn(l)}function ke(l,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,Ac(l,a)}}function Gu(l,t){var a=l.updateQueue,e=l.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},l.updateQueue=a;return}l=a.lastBaseUpdate,l===null?a.firstBaseUpdate=t:l.next=t,a.lastBaseUpdate=t}var Qu=!1;function We(){if(Qu){var l=oe;if(l!==null)throw l}}function Fe(l,t,a,e){Qu=!1;var n=l.updateQueue;ia=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var c=s,h=c.next;c.next=null,u===null?i=h:u.next=h,u=c;var b=l.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==u&&(s===null?b.firstBaseUpdate=h:s.next=h,b.lastBaseUpdate=c))}if(i!==null){var A=n.baseState;u=0,b=h=c=null,s=i;do{var m=s.lane&-536870913,v=m!==s.lane;if(v?(F&m)===m:(e&m)===m){m!==0&&m===ce&&(Qu=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});l:{var H=l,G=s;m=t;var fl=a;switch(G.tag){case 1:if(H=G.payload,typeof H=="function"){A=H.call(fl,A,m);break l}A=H;break l;case 3:H.flags=H.flags&-65537|128;case 0:if(H=G.payload,m=typeof H=="function"?H.call(fl,A,m):H,m==null)break l;A=x({},A,m);break l;case 2:ia=!0}}m=s.callback,m!==null&&(l.flags|=64,v&&(l.flags|=8192),v=n.callbacks,v===null?n.callbacks=[m]:v.push(m))}else v={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(h=b=v,c=A):b=b.next=v,u|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;v=s,s=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);b===null&&(c=A),n.baseState=c,n.firstBaseUpdate=h,n.lastBaseUpdate=b,i===null&&(n.shared.lanes=0),ga|=u,l.lanes=u,l.memoizedState=A}}function Uo(l,t){if(typeof l!="function")throw Error(g(191,l));l.call(t)}function Ho(l,t){var a=l.callbacks;if(a!==null)for(l.callbacks=null,l=0;l<a.length;l++)Uo(a[l],t)}var ge=r(null),Pn=r(0);function Ro(l,t){l=$t,N(Pn,l),N(ge,t),$t=l|t.baseLanes}function Xu(){N(Pn,$t),N(ge,ge.current)}function Zu(){$t=Pn.current,T(ge),T(Pn)}var ct=r(null),zt=null;function ca(l){var t=l.alternate;N(Ol,Ol.current&1),N(ct,l),zt===null&&(t===null||ge.current!==null||t.memoizedState!==null)&&(zt=l)}function Lu(l){N(Ol,Ol.current),N(ct,l),zt===null&&(zt=l)}function Bo(l){l.tag===22?(N(Ol,Ol.current),N(ct,l),zt===null&&(zt=l)):oa()}function oa(){N(Ol,Ol.current),N(ct,ct.current)}function ot(l){T(ct),zt===l&&(zt=null),T(Ol)}var Ol=r(0);function li(l){for(var t=l;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ws(a)||Fs(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,L=null,ol=null,Cl=null,ti=!1,de=!1,Ga=!1,ai=0,Ie=0,pe=null,Id=0;function Tl(){throw Error(g(321))}function Vu(l,t){if(t===null)return!1;for(var a=0;a<t.length&&a<l.length;a++)if(!ut(l[a],t[a]))return!1;return!0}function Ku(l,t,a,e,n,i){return Gt=i,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?Sr:ss,Ga=!1,i=a(e,n),Ga=!1,de&&(i=Yo(t,a,e,n)),qo(l),i}function qo(l){S.H=tn;var t=ol!==null&&ol.next!==null;if(Gt=0,Cl=ol=L=null,ti=!1,Ie=0,pe=null,t)throw Error(g(300));l===null||jl||(l=l.dependencies,l!==null&&Kn(l)&&(jl=!0))}function Yo(l,t,a,e){L=l;var n=0;do{if(de&&(pe=null),Ie=0,de=!1,25<=n)throw Error(g(301));if(n+=1,Cl=ol=null,l.updateQueue!=null){var i=l.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}S.H=zr,i=t(a,e)}while(de);return i}function Pd(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?Pe(t):t,l=l.useState()[0],(ol!==null?ol.memoizedState:null)!==l&&(L.flags|=1024),t}function Ju(){var l=ai!==0;return ai=0,l}function $u(l,t,a){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~a}function ku(l){if(ti){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ti=!1}Gt=0,Cl=ol=L=null,de=!1,Ie=ai=0,pe=null}function Jl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cl===null?L.memoizedState=Cl=l:Cl=Cl.next=l,Cl}function Dl(){if(ol===null){var l=L.alternate;l=l!==null?l.memoizedState:null}else l=ol.next;var t=Cl===null?L.memoizedState:Cl.next;if(t!==null)Cl=t,ol=l;else{if(l===null)throw L.alternate===null?Error(g(467)):Error(g(310));ol=l,l={memoizedState:ol.memoizedState,baseState:ol.baseState,baseQueue:ol.baseQueue,queue:ol.queue,next:null},Cl===null?L.memoizedState=Cl=l:Cl=Cl.next=l}return Cl}function ei(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pe(l){var t=Ie;return Ie+=1,pe===null&&(pe=[]),l=Do(pe,l,t),t=L,(Cl===null?t.memoizedState:Cl.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?Sr:ss),l}function ni(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pe(l);if(l.$$typeof===sl)return Ql(l)}throw Error(g(438,String(l)))}function Wu(l){var t=null,a=L.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var e=L.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ei(),L.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(l),e=0;e<l;e++)a[e]=Ft;return t.index++,a}function Qt(l,t){return typeof t=="function"?t(l):t}function ii(l){var t=Dl();return Fu(t,ol,l)}function Fu(l,t,a){var e=l.queue;if(e===null)throw Error(g(311));e.lastRenderedReducer=a;var n=l.baseQueue,i=e.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}t.baseQueue=n=i,e.pending=null}if(i=l.baseState,n===null)l.memoizedState=i;else{t=n.next;var s=u=null,c=null,h=t,b=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(F&A)===A:(Gt&A)===A){var m=h.revertLane;if(m===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===ce&&(b=!0);else if((Gt&m)===m){h=h.next,m===ce&&(b=!0);continue}else A={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(s=c=A,u=i):c=c.next=A,L.lanes|=m,ga|=m;A=h.action,Ga&&a(i,A),i=h.hasEagerState?h.eagerState:a(i,A)}else m={lane:A,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(s=c=m,u=i):c=c.next=m,L.lanes|=A,ga|=A;h=h.next}while(h!==null&&h!==t);if(c===null?u=i:c.next=s,!ut(i,l.memoizedState)&&(jl=!0,b&&(a=oe,a!==null)))throw a;l.memoizedState=i,l.baseState=u,l.baseQueue=c,e.lastRenderedState=i}return n===null&&(e.lanes=0),[l.memoizedState,e.dispatch]}function Iu(l){var t=Dl(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=l;var e=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=l(i,u.action),u=u.next;while(u!==n);ut(i,t.memoizedState)||(jl=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,e]}function Go(l,t,a){var e=L,n=Dl(),i=ll;if(i){if(a===void 0)throw Error(g(407));a=a()}else a=t();var u=!ut((ol||n).memoizedState,a);if(u&&(n.memoizedState=a,jl=!0),n=n.queue,ts(Zo.bind(null,e,n,l),[l]),n.getSnapshot!==t||u||Cl!==null&&Cl.memoizedState.tag&1){if(e.flags|=2048,he(9,{destroy:void 0},Xo.bind(null,e,n,a,t),null),dl===null)throw Error(g(349));i||(Gt&127)!==0||Qo(e,t,a)}return a}function Qo(l,t,a){l.flags|=16384,l={getSnapshot:t,value:a},t=L.updateQueue,t===null?(t=ei(),L.updateQueue=t,t.stores=[l]):(a=t.stores,a===null?t.stores=[l]:a.push(l))}function Xo(l,t,a,e){t.value=a,t.getSnapshot=e,Lo(t)&&Vo(l)}function Zo(l,t,a){return a(function(){Lo(t)&&Vo(l)})}function Lo(l){var t=l.getSnapshot;l=l.value;try{var a=t();return!ut(l,a)}catch{return!0}}function Vo(l){var t=Ca(l,2);t!==null&&at(t,l,2)}function Pu(l){var t=Jl();if(typeof l=="function"){var a=l;if(l=a(),Ga){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:l},t}function Ko(l,t,a,e){return l.baseState=a,Fu(l,ol,typeof e=="function"?e:Qt)}function lp(l,t,a,e,n){if(ci(l))throw Error(g(485));if(l=t.action,l!==null){var i={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};S.T!==null?a(!0):i.isTransition=!1,e(i),a=t.pending,a===null?(i.next=t.pending=i,Jo(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Jo(l,t){var a=t.action,e=t.payload,n=l.state;if(t.isTransition){var i=S.T,u={};S.T=u;try{var s=a(n,e),c=S.S;c!==null&&c(u,s),$o(l,t,s)}catch(h){ls(l,t,h)}finally{i!==null&&u.types!==null&&(i.types=u.types),S.T=i}}else try{i=a(n,e),$o(l,t,i)}catch(h){ls(l,t,h)}}function $o(l,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){ko(l,t,e)},function(e){return ls(l,t,e)}):ko(l,t,a)}function ko(l,t,a){t.status="fulfilled",t.value=a,Wo(t),l.state=a,t=l.pending,t!==null&&(a=t.next,a===t?l.pending=null:(a=a.next,t.next=a,Jo(l,a)))}function ls(l,t,a){var e=l.pending;if(l.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=a,Wo(t),t=t.next;while(t!==e)}l.action=null}function Wo(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fo(l,t){return t}function Io(l,t){if(ll){var a=dl.formState;if(a!==null){l:{var e=L;if(ll){if(pl){t:{for(var n=pl,i=St;n.nodeType!==8;){if(!i){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){pl=_t(n.nextSibling),e=n.data==="F!";break l}}ea(e)}e=!1}e&&(t=a[0])}}return a=Jl(),a.memoizedState=a.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},a.queue=e,a=yr.bind(null,L,e),e.dispatch=a,e=Pu(!1),i=us.bind(null,L,!1,e.queue),e=Jl(),n={state:t,dispatch:null,action:l,pending:null},e.queue=n,a=lp.bind(null,L,n,i,a),n.dispatch=a,e.memoizedState=l,[t,a,!1]}function Po(l){var t=Dl();return lr(t,ol,l)}function lr(l,t,a){if(t=Fu(l,t,Fo)[0],l=ii(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=Pe(t)}catch(u){throw u===re?kn:u}else e=t;t=Dl();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(L.flags|=2048,he(9,{destroy:void 0},tp.bind(null,n,a),null)),[e,i,l]}function tp(l,t){l.action=t}function tr(l){var t=Dl(),a=ol;if(a!==null)return lr(t,a,l);Dl(),t=t.memoizedState,a=Dl();var e=a.queue.dispatch;return a.memoizedState=l,[t,e,!1]}function he(l,t,a,e){return l={tag:l,create:a,deps:e,inst:t,next:null},t=L.updateQueue,t===null&&(t=ei(),L.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=l.next=l:(e=a.next,a.next=l,l.next=e,t.lastEffect=l),l}function ar(){return Dl().memoizedState}function ui(l,t,a,e){var n=Jl();L.flags|=l,n.memoizedState=he(1|t,{destroy:void 0},a,e===void 0?null:e)}function si(l,t,a,e){var n=Dl();e=e===void 0?null:e;var i=n.memoizedState.inst;ol!==null&&e!==null&&Vu(e,ol.memoizedState.deps)?n.memoizedState=he(t,i,a,e):(L.flags|=l,n.memoizedState=he(1|t,i,a,e))}function er(l,t){ui(8390656,8,l,t)}function ts(l,t){si(2048,8,l,t)}function ap(l){L.flags|=4;var t=L.updateQueue;if(t===null)t=ei(),L.updateQueue=t,t.events=[l];else{var a=t.events;a===null?t.events=[l]:a.push(l)}}function nr(l){var t=Dl().memoizedState;return ap({ref:t,nextImpl:l}),function(){if((el&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function ir(l,t){return si(4,2,l,t)}function ur(l,t){return si(4,4,l,t)}function sr(l,t){if(typeof t=="function"){l=l();var a=t(l);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function cr(l,t,a){a=a!=null?a.concat([l]):null,si(4,4,sr.bind(null,t,l),a)}function as(){}function or(l,t){var a=Dl();t=t===void 0?null:t;var e=a.memoizedState;return t!==null&&Vu(t,e[1])?e[0]:(a.memoizedState=[l,t],l)}function rr(l,t){var a=Dl();t=t===void 0?null:t;var e=a.memoizedState;if(t!==null&&Vu(t,e[1]))return e[0];if(e=l(),Ga){It(!0);try{l()}finally{It(!1)}}return a.memoizedState=[e,t],e}function es(l,t,a){return a===void 0||(Gt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=a,l=gf(),L.lanes|=l,ga|=l,a)}function fr(l,t,a,e){return ut(a,t)?a:ge.current!==null?(l=es(l,a,e),ut(l,t)||(jl=!0),l):(Gt&42)===0||(Gt&1073741824)!==0&&(F&261930)===0?(jl=!0,l.memoizedState=a):(l=gf(),L.lanes|=l,ga|=l,t)}function gr(l,t,a,e,n){var i=O.p;O.p=i!==0&&8>i?i:8;var u=S.T,s={};S.T=s,us(l,!1,t,a);try{var c=n(),h=S.S;if(h!==null&&h(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var b=Fd(c,e);ln(l,t,b,gt(l))}else ln(l,t,e,gt(l))}catch(A){ln(l,t,{then:function(){},status:"rejected",reason:A},gt())}finally{O.p=i,u!==null&&s.types!==null&&(u.types=s.types),S.T=u}}function ep(){}function ns(l,t,a,e){if(l.tag!==5)throw Error(g(476));var n=dr(l).queue;gr(l,n,t,Q,a===null?ep:function(){return pr(l),a(e)})}function dr(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:Q},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:a},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function pr(l){var t=dr(l);t.next===null&&(t=l.alternate.memoizedState),ln(l,t.next.queue,{},gt())}function is(){return Ql(vn)}function hr(){return Dl().memoizedState}function mr(){return Dl().memoizedState}function np(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var a=gt();l=ua(a);var e=sa(t,l,a);e!==null&&(at(e,t,a),ke(e,t,a)),t={cache:Uu()},l.payload=t;return}t=t.return}}function ip(l,t,a){var e=gt();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ci(l)?vr(t,a):(a=Au(l,t,a,e),a!==null&&(at(a,l,e),br(a,t,e)))}function yr(l,t,a){var e=gt();ln(l,t,a,e)}function ln(l,t,a,e){var n={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ci(l))vr(t,n);else{var i=l.alternate;if(l.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,a);if(n.hasEagerState=!0,n.eagerState=s,ut(s,u))return Xn(l,t,n,0),dl===null&&Qn(),!1}catch{}if(a=Au(l,t,n,e),a!==null)return at(a,l,e),br(a,t,e),!0}return!1}function us(l,t,a,e){if(e={lane:2,revertLane:qs(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ci(l)){if(t)throw Error(g(479))}else t=Au(l,a,e,2),t!==null&&at(t,l,2)}function ci(l){var t=l.alternate;return l===L||t!==null&&t===L}function vr(l,t){de=ti=!0;var a=l.pending;a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t}function br(l,t,a){if((a&4194048)!==0){var e=t.lanes;e&=l.pendingLanes,a|=e,t.lanes=a,Ac(l,a)}}var tn={readContext:Ql,use:ni,useCallback:Tl,useContext:Tl,useEffect:Tl,useImperativeHandle:Tl,useLayoutEffect:Tl,useInsertionEffect:Tl,useMemo:Tl,useReducer:Tl,useRef:Tl,useState:Tl,useDebugValue:Tl,useDeferredValue:Tl,useTransition:Tl,useSyncExternalStore:Tl,useId:Tl,useHostTransitionStatus:Tl,useFormState:Tl,useActionState:Tl,useOptimistic:Tl,useMemoCache:Tl,useCacheRefresh:Tl};tn.useEffectEvent=Tl;var Sr={readContext:Ql,use:ni,useCallback:function(l,t){return Jl().memoizedState=[l,t===void 0?null:t],l},useContext:Ql,useEffect:er,useImperativeHandle:function(l,t,a){a=a!=null?a.concat([l]):null,ui(4194308,4,sr.bind(null,t,l),a)},useLayoutEffect:function(l,t){return ui(4194308,4,l,t)},useInsertionEffect:function(l,t){ui(4,2,l,t)},useMemo:function(l,t){var a=Jl();t=t===void 0?null:t;var e=l();if(Ga){It(!0);try{l()}finally{It(!1)}}return a.memoizedState=[e,t],e},useReducer:function(l,t,a){var e=Jl();if(a!==void 0){var n=a(t);if(Ga){It(!0);try{a(t)}finally{It(!1)}}}else n=t;return e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},e.queue=l,l=l.dispatch=ip.bind(null,L,l),[e.memoizedState,l]},useRef:function(l){var t=Jl();return l={current:l},t.memoizedState=l},useState:function(l){l=Pu(l);var t=l.queue,a=yr.bind(null,L,t);return t.dispatch=a,[l.memoizedState,a]},useDebugValue:as,useDeferredValue:function(l,t){var a=Jl();return es(a,l,t)},useTransition:function(){var l=Pu(!1);return l=gr.bind(null,L,l.queue,!0,!1),Jl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,a){var e=L,n=Jl();if(ll){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),dl===null)throw Error(g(349));(F&127)!==0||Qo(e,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,er(Zo.bind(null,e,i,l),[l]),e.flags|=2048,he(9,{destroy:void 0},Xo.bind(null,e,i,a,t),null),a},useId:function(){var l=Jl(),t=dl.identifierPrefix;if(ll){var a=Dt,e=Ot;a=(e&~(1<<32-it(e)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ai++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Id++,t="_"+t+"r_"+a.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:is,useFormState:Io,useActionState:Io,useOptimistic:function(l){var t=Jl();t.memoizedState=t.baseState=l;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=us.bind(null,L,!0,a),a.dispatch=t,[l,t]},useMemoCache:Wu,useCacheRefresh:function(){return Jl().memoizedState=np.bind(null,L)},useEffectEvent:function(l){var t=Jl(),a={impl:l};return t.memoizedState=a,function(){if((el&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},ss={readContext:Ql,use:ni,useCallback:or,useContext:Ql,useEffect:ts,useImperativeHandle:cr,useInsertionEffect:ir,useLayoutEffect:ur,useMemo:rr,useReducer:ii,useRef:ar,useState:function(){return ii(Qt)},useDebugValue:as,useDeferredValue:function(l,t){var a=Dl();return fr(a,ol.memoizedState,l,t)},useTransition:function(){var l=ii(Qt)[0],t=Dl().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Go,useId:hr,useHostTransitionStatus:is,useFormState:Po,useActionState:Po,useOptimistic:function(l,t){var a=Dl();return Ko(a,ol,l,t)},useMemoCache:Wu,useCacheRefresh:mr};ss.useEffectEvent=nr;var zr={readContext:Ql,use:ni,useCallback:or,useContext:Ql,useEffect:ts,useImperativeHandle:cr,useInsertionEffect:ir,useLayoutEffect:ur,useMemo:rr,useReducer:Iu,useRef:ar,useState:function(){return Iu(Qt)},useDebugValue:as,useDeferredValue:function(l,t){var a=Dl();return ol===null?es(a,l,t):fr(a,ol.memoizedState,l,t)},useTransition:function(){var l=Iu(Qt)[0],t=Dl().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Go,useId:hr,useHostTransitionStatus:is,useFormState:tr,useActionState:tr,useOptimistic:function(l,t){var a=Dl();return ol!==null?Ko(a,ol,l,t):(a.baseState=l,[l,a.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:mr};zr.useEffectEvent=nr;function cs(l,t,a,e){t=l.memoizedState,a=a(e,t),a=a==null?t:x({},t,a),l.memoizedState=a,l.lanes===0&&(l.updateQueue.baseState=a)}var os={enqueueSetState:function(l,t,a){l=l._reactInternals;var e=gt(),n=ua(e);n.payload=t,a!=null&&(n.callback=a),t=sa(l,n,e),t!==null&&(at(t,l,e),ke(t,l,e))},enqueueReplaceState:function(l,t,a){l=l._reactInternals;var e=gt(),n=ua(e);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=sa(l,n,e),t!==null&&(at(t,l,e),ke(t,l,e))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var a=gt(),e=ua(a);e.tag=2,t!=null&&(e.callback=t),t=sa(l,e,a),t!==null&&(at(t,l,a),ke(t,l,a))}};function _r(l,t,a,e,n,i,u){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(e,i,u):t.prototype&&t.prototype.isPureReactComponent?!Qe(a,e)||!Qe(n,i):!0}function Ar(l,t,a,e){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,e),t.state!==l&&os.enqueueReplaceState(t,t.state,null)}function Qa(l,t){var a=t;if("ref"in t){a={};for(var e in t)e!=="ref"&&(a[e]=t[e])}if(l=l.defaultProps){a===t&&(a=x({},a));for(var n in l)a[n]===void 0&&(a[n]=l[n])}return a}function Tr(l){Gn(l)}function Er(l){console.error(l)}function Mr(l){Gn(l)}function oi(l,t){try{var a=l.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function wr(l,t,a){try{var e=l.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rs(l,t,a){return a=ua(a),a.tag=3,a.payload={element:null},a.callback=function(){oi(l,t)},a}function Or(l){return l=ua(l),l.tag=3,l}function Dr(l,t,a,e){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;l.payload=function(){return n(i)},l.callback=function(){wr(t,a,e)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(l.callback=function(){wr(t,a,e),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})})}function up(l,t,a,e,n){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=a.alternate,t!==null&&se(t,a,n,!0),a=ct.current,a!==null){switch(a.tag){case 31:case 13:return zt===null?zi():a.alternate===null&&El===0&&(El=3),a.flags&=-257,a.flags|=65536,a.lanes=n,e===Wn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([e]):t.add(e),Hs(l,e,n)),!1;case 22:return a.flags|=65536,e===Wn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([e]):a.add(e)),Hs(l,e,n)),!1}throw Error(g(435,a.tag))}return Hs(l,e,n),zi(),!1}if(ll)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,e!==Du&&(l=Error(g(422),{cause:e}),Le(yt(l,a)))):(e!==Du&&(t=Error(g(423),{cause:e}),Le(yt(t,a))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,e=yt(e,a),n=rs(l.stateNode,e,n),Gu(l,n),El!==4&&(El=2)),!1;var i=Error(g(520),{cause:e});if(i=yt(i,a),rn===null?rn=[i]:rn.push(i),El!==4&&(El=2),t===null)return!0;e=yt(e,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,l=n&-n,a.lanes|=l,l=rs(a.stateNode,e,l),Gu(a,l),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Or(n),Dr(n,l,a,e),Gu(a,n),!1}a=a.return}while(a!==null);return!1}var fs=Error(g(461)),jl=!1;function Xl(l,t,a,e){t.child=l===null?xo(t,null,a,e):Ya(t,l.child,a,e)}function Nr(l,t,a,e,n){a=a.render;var i=t.ref;if("ref"in e){var u={};for(var s in e)s!=="ref"&&(u[s]=e[s])}else u=e;return Ha(t),e=Ku(l,t,a,u,i,n),s=Ju(),l!==null&&!jl?($u(l,t,n),Xt(l,t,n)):(ll&&s&&wu(t),t.flags|=1,Xl(l,t,e,n),t.child)}function Cr(l,t,a,e,n){if(l===null){var i=a.type;return typeof i=="function"&&!Tu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,jr(l,t,i,e,n)):(l=Ln(a.type,null,e,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(i=l.child,!bs(l,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:Qe,a(u,e)&&l.ref===t.ref)return Xt(l,t,n)}return t.flags|=1,l=Rt(i,e),l.ref=t.ref,l.return=t,t.child=l}function jr(l,t,a,e,n){if(l!==null){var i=l.memoizedProps;if(Qe(i,e)&&l.ref===t.ref)if(jl=!1,t.pendingProps=e=i,bs(l,n))(l.flags&131072)!==0&&(jl=!0);else return t.lanes=l.lanes,Xt(l,t,n)}return gs(l,t,a,e,n)}function xr(l,t,a,e){var n=e.children,i=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,l!==null){for(e=t.child=l.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~i}else e=0,t.child=null;return Ur(l,t,i,a,e)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&$n(t,i!==null?i.cachePool:null),i!==null?Ro(t,i):Xu(),Bo(t);else return e=t.lanes=536870912,Ur(l,t,i!==null?i.baseLanes|a:a,a,e)}else i!==null?($n(t,i.cachePool),Ro(t,i),oa(),t.memoizedState=null):(l!==null&&$n(t,null),Xu(),oa());return Xl(l,t,n,a),t.child}function an(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ur(l,t,a,e,n){var i=Ru();return i=i===null?null:{parent:Nl._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},l!==null&&$n(t,null),Xu(),Bo(t),l!==null&&se(l,t,e,!0),t.childLanes=n,null}function ri(l,t){return t=gi({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Hr(l,t,a){return Ya(t,l.child,null,a),l=ri(t,t.pendingProps),l.flags|=2,ot(t),t.memoizedState=null,l}function sp(l,t,a){var e=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(e.mode==="hidden")return l=ri(t,e),t.lanes=536870912,an(null,l);if(Lu(t),(l=pl)?(l=$f(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ta!==null?{id:Ot,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=vo(l),a.return=t,t.child=a,Gl=t,pl=null)):l=null,l===null)throw ea(t);return t.lanes=536870912,null}return ri(t,e)}var i=l.memoizedState;if(i!==null){var u=i.dehydrated;if(Lu(t),n)if(t.flags&256)t.flags&=-257,t=Hr(l,t,a);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(g(558));else if(jl||se(l,t,a,!1),n=(a&l.childLanes)!==0,jl||n){if(e=dl,e!==null&&(u=Tc(e,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ca(l,u),at(e,l,u),fs;zi(),t=Hr(l,t,a)}else l=i.treeContext,pl=_t(u.nextSibling),Gl=t,ll=!0,aa=null,St=!1,l!==null&&zo(t,l),t=ri(t,e),t.flags|=4096;return t}return l=Rt(l.child,{mode:e.mode,children:e.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fi(l,t){var a=t.ref;if(a===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(l===null||l.ref!==a)&&(t.flags|=4194816)}}function gs(l,t,a,e,n){return Ha(t),a=Ku(l,t,a,e,void 0,n),e=Ju(),l!==null&&!jl?($u(l,t,n),Xt(l,t,n)):(ll&&e&&wu(t),t.flags|=1,Xl(l,t,a,n),t.child)}function Rr(l,t,a,e,n,i){return Ha(t),t.updateQueue=null,a=Yo(t,e,a,n),qo(l),e=Ju(),l!==null&&!jl?($u(l,t,i),Xt(l,t,i)):(ll&&e&&wu(t),t.flags|=1,Xl(l,t,a,i),t.child)}function Br(l,t,a,e,n){if(Ha(t),t.stateNode===null){var i=ee,u=a.contextType;typeof u=="object"&&u!==null&&(i=Ql(u)),i=new a(e,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=os,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=e,i.state=t.memoizedState,i.refs={},qu(t),u=a.contextType,i.context=typeof u=="object"&&u!==null?Ql(u):ee,i.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(cs(t,a,u,e),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&os.enqueueReplaceState(i,i.state,null),Fe(t,e,i,n),We(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(l===null){i=t.stateNode;var s=t.memoizedProps,c=Qa(a,s);i.props=c;var h=i.context,b=a.contextType;u=ee,typeof b=="object"&&b!==null&&(u=Ql(b));var A=a.getDerivedStateFromProps;b=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,b||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||h!==u)&&Ar(t,i,e,u),ia=!1;var m=t.memoizedState;i.state=m,Fe(t,e,i,n),We(),h=t.memoizedState,s||m!==h||ia?(typeof A=="function"&&(cs(t,a,A,e),h=t.memoizedState),(c=ia||_r(t,a,c,e,m,h,u))?(b||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=h),i.props=e,i.state=h,i.context=u,e=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{i=t.stateNode,Yu(l,t),u=t.memoizedProps,b=Qa(a,u),i.props=b,A=t.pendingProps,m=i.context,h=a.contextType,c=ee,typeof h=="object"&&h!==null&&(c=Ql(h)),s=a.getDerivedStateFromProps,(h=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||m!==c)&&Ar(t,i,e,c),ia=!1,m=t.memoizedState,i.state=m,Fe(t,e,i,n),We();var v=t.memoizedState;u!==A||m!==v||ia||l!==null&&l.dependencies!==null&&Kn(l.dependencies)?(typeof s=="function"&&(cs(t,a,s,e),v=t.memoizedState),(b=ia||_r(t,a,b,e,m,v,c)||l!==null&&l.dependencies!==null&&Kn(l.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=v),i.props=e,i.state=v,i.context=c,e=b):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),e=!1)}return i=e,fi(l,t),e=(t.flags&128)!==0,i||e?(i=t.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,l!==null&&e?(t.child=Ya(t,l.child,null,n),t.child=Ya(t,null,a,n)):Xl(l,t,a,n),t.memoizedState=i.state,l=t.child):l=Xt(l,t,n),l}function qr(l,t,a,e){return xa(),t.flags|=256,Xl(l,t,a,e),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ps(l){return{baseLanes:l,cachePool:wo()}}function hs(l,t,a){return l=l!==null?l.childLanes&~a:0,t&&(l|=ft),l}function Yr(l,t,a){var e=t.pendingProps,n=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=l!==null&&l.memoizedState===null?!1:(Ol.current&2)!==0),u&&(n=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(n?ca(t):oa(),(l=pl)?(l=$f(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ta!==null?{id:Ot,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=vo(l),a.return=t,t.child=a,Gl=t,pl=null)):l=null,l===null)throw ea(t);return Fs(l)?t.lanes=32:t.lanes=536870912,null}var s=e.children;return e=e.fallback,n?(oa(),n=t.mode,s=gi({mode:"hidden",children:s},n),e=ja(e,n,a,null),s.return=t,e.return=t,s.sibling=e,t.child=s,e=t.child,e.memoizedState=ps(a),e.childLanes=hs(l,u,a),t.memoizedState=ds,an(null,e)):(ca(t),ms(t,s))}var c=l.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(i)t.flags&256?(ca(t),t.flags&=-257,t=ys(l,t,a)):t.memoizedState!==null?(oa(),t.child=l.child,t.flags|=128,t=null):(oa(),s=e.fallback,n=t.mode,e=gi({mode:"visible",children:e.children},n),s=ja(s,n,a,null),s.flags|=2,e.return=t,s.return=t,e.sibling=s,t.child=e,Ya(t,l.child,null,a),e=t.child,e.memoizedState=ps(a),e.childLanes=hs(l,u,a),t.memoizedState=ds,t=an(null,e));else if(ca(t),Fs(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var h=u.dgst;u=h,e=Error(g(419)),e.stack="",e.digest=u,Le({value:e,source:null,stack:null}),t=ys(l,t,a)}else if(jl||se(l,t,a,!1),u=(a&l.childLanes)!==0,jl||u){if(u=dl,u!==null&&(e=Tc(u,a),e!==0&&e!==c.retryLane))throw c.retryLane=e,Ca(l,e),at(u,l,e),fs;Ws(s)||zi(),t=ys(l,t,a)}else Ws(s)?(t.flags|=192,t.child=l.child,t=null):(l=c.treeContext,pl=_t(s.nextSibling),Gl=t,ll=!0,aa=null,St=!1,l!==null&&zo(t,l),t=ms(t,e.children),t.flags|=4096);return t}return n?(oa(),s=e.fallback,n=t.mode,c=l.child,h=c.sibling,e=Rt(c,{mode:"hidden",children:e.children}),e.subtreeFlags=c.subtreeFlags&65011712,h!==null?s=Rt(h,s):(s=ja(s,n,a,null),s.flags|=2),s.return=t,e.return=t,e.sibling=s,t.child=e,an(null,e),e=t.child,s=l.child.memoizedState,s===null?s=ps(a):(n=s.cachePool,n!==null?(c=Nl._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=wo(),s={baseLanes:s.baseLanes|a,cachePool:n}),e.memoizedState=s,e.childLanes=hs(l,u,a),t.memoizedState=ds,an(l.child,e)):(ca(t),a=l.child,l=a.sibling,a=Rt(a,{mode:"visible",children:e.children}),a.return=t,a.sibling=null,l!==null&&(u=t.deletions,u===null?(t.deletions=[l],t.flags|=16):u.push(l)),t.child=a,t.memoizedState=null,a)}function ms(l,t){return t=gi({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function gi(l,t){return l=st(22,l,null,t),l.lanes=0,l}function ys(l,t,a){return Ya(t,l.child,null,a),l=ms(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Gr(l,t,a){l.lanes|=t;var e=l.alternate;e!==null&&(e.lanes|=t),ju(l.return,t,a)}function vs(l,t,a,e,n,i){var u=l.memoizedState;u===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=e,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function Qr(l,t,a){var e=t.pendingProps,n=e.revealOrder,i=e.tail;e=e.children;var u=Ol.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,N(Ol,u),Xl(l,t,e,a),e=ll?Ze:0,!s&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Gr(l,a,t);else if(l.tag===19)Gr(l,a,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)l=a.alternate,l!==null&&li(l)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),vs(t,!1,n,a,i,e);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&li(l)===null){t.child=n;break}l=n.sibling,n.sibling=a,a=n,n=l}vs(t,!0,a,null,i,e);break;case"together":vs(t,!1,null,null,void 0,e);break;default:t.memoizedState=null}return t.child}function Xt(l,t,a){if(l!==null&&(t.dependencies=l.dependencies),ga|=t.lanes,(a&t.childLanes)===0)if(l!==null){if(se(l,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(g(153));if(t.child!==null){for(l=t.child,a=Rt(l,l.pendingProps),t.child=a,a.return=t;l.sibling!==null;)l=l.sibling,a=a.sibling=Rt(l,l.pendingProps),a.return=t;a.sibling=null}return t.child}function bs(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Kn(l)))}function cp(l,t,a){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),na(t,Nl,l.memoizedState.cache),xa();break;case 27:case 5:Oe(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Lu(t),null;break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(ca(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Yr(l,t,a):(ca(t),l=Xt(l,t,a),l!==null?l.sibling:null);ca(t);break;case 19:var n=(l.flags&128)!==0;if(e=(a&t.childLanes)!==0,e||(se(l,t,a,!1),e=(a&t.childLanes)!==0),n){if(e)return Qr(l,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),N(Ol,Ol.current),e)break;return null;case 22:return t.lanes=0,xr(l,t,a,t.pendingProps);case 24:na(t,Nl,l.memoizedState.cache)}return Xt(l,t,a)}function Xr(l,t,a){if(l!==null)if(l.memoizedProps!==t.pendingProps)jl=!0;else{if(!bs(l,a)&&(t.flags&128)===0)return jl=!1,cp(l,t,a);jl=(l.flags&131072)!==0}else jl=!1,ll&&(t.flags&1048576)!==0&&So(t,Ze,t.index);switch(t.lanes=0,t.tag){case 16:l:{var e=t.pendingProps;if(l=Ba(t.elementType),t.type=l,typeof l=="function")Tu(l)?(e=Qa(l,e),t.tag=1,t=Br(null,t,l,e,a)):(t.tag=0,t=gs(null,t,l,e,a));else{if(l!=null){var n=l.$$typeof;if(n===Al){t.tag=11,t=Nr(null,t,l,e,a);break l}else if(n===J){t.tag=14,t=Cr(null,t,l,e,a);break l}}throw t=jt(l)||l,Error(g(306,t,""))}}return t;case 0:return gs(l,t,t.type,t.pendingProps,a);case 1:return e=t.type,n=Qa(e,t.pendingProps),Br(l,t,e,n,a);case 3:l:{if(Kl(t,t.stateNode.containerInfo),l===null)throw Error(g(387));e=t.pendingProps;var i=t.memoizedState;n=i.element,Yu(l,t),Fe(t,e,null,a);var u=t.memoizedState;if(e=u.cache,na(t,Nl,e),e!==i.cache&&xu(t,[Nl],a,!0),We(),e=u.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qr(l,t,e,a);break l}else if(e!==n){n=yt(Error(g(424)),t),Le(n),t=qr(l,t,e,a);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(pl=_t(l.firstChild),Gl=t,ll=!0,aa=null,St=!0,a=xo(t,null,e,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xa(),e===n){t=Xt(l,t,a);break l}Xl(l,t,e,a)}t=t.child}return t;case 26:return fi(l,t),l===null?(a=lg(t.type,null,t.pendingProps,null))?t.memoizedState=a:ll||(a=t.type,l=t.pendingProps,e=Oi($.current).createElement(a),e[Yl]=t,e[Wl]=l,Zl(e,a,l),Bl(e),t.stateNode=e):t.memoizedState=lg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Oe(t),l===null&&ll&&(e=t.stateNode=Ff(t.type,t.pendingProps,$.current),Gl=t,St=!0,n=pl,ya(t.type)?(Is=n,pl=_t(e.firstChild)):pl=n),Xl(l,t,t.pendingProps.children,a),fi(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((n=e=pl)&&(e=qp(e,t.type,t.pendingProps,St),e!==null?(t.stateNode=e,Gl=t,pl=_t(e.firstChild),St=!1,n=!0):n=!1),n||ea(t)),Oe(t),n=t.type,i=t.pendingProps,u=l!==null?l.memoizedProps:null,e=i.children,Js(n,i)?e=null:u!==null&&Js(n,u)&&(t.flags|=32),t.memoizedState!==null&&(n=Ku(l,t,Pd,null,null,a),vn._currentValue=n),fi(l,t),Xl(l,t,e,a),t.child;case 6:return l===null&&ll&&((l=a=pl)&&(a=Yp(a,t.pendingProps,St),a!==null?(t.stateNode=a,Gl=t,pl=null,l=!0):l=!1),l||ea(t)),null;case 13:return Yr(l,t,a);case 4:return Kl(t,t.stateNode.containerInfo),e=t.pendingProps,l===null?t.child=Ya(t,null,e,a):Xl(l,t,e,a),t.child;case 11:return Nr(l,t,t.type,t.pendingProps,a);case 7:return Xl(l,t,t.pendingProps,a),t.child;case 8:return Xl(l,t,t.pendingProps.children,a),t.child;case 12:return Xl(l,t,t.pendingProps.children,a),t.child;case 10:return e=t.pendingProps,na(t,t.type,e.value),Xl(l,t,e.children,a),t.child;case 9:return n=t.type._context,e=t.pendingProps.children,Ha(t),n=Ql(n),e=e(n),t.flags|=1,Xl(l,t,e,a),t.child;case 14:return Cr(l,t,t.type,t.pendingProps,a);case 15:return jr(l,t,t.type,t.pendingProps,a);case 19:return Qr(l,t,a);case 31:return sp(l,t,a);case 22:return xr(l,t,a,t.pendingProps);case 24:return Ha(t),e=Ql(Nl),l===null?(n=Ru(),n===null&&(n=dl,i=Uu(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:e,cache:n},qu(t),na(t,Nl,n)):((l.lanes&a)!==0&&(Yu(l,t),Fe(t,null,null,a),We()),n=l.memoizedState,i=t.memoizedState,n.parent!==e?(n={parent:e,cache:e},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),na(t,Nl,e)):(e=i.cache,na(t,Nl,e),e!==n.cache&&xu(t,[Nl],a,!0))),Xl(l,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Zt(l){l.flags|=4}function Ss(l,t,a,e,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(mf())l.flags|=8192;else throw qa=Wn,Bu}else l.flags&=-16777217}function Zr(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!ig(t))if(mf())l.flags|=8192;else throw qa=Wn,Bu}function di(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?zc():536870912,l.lanes|=t,be|=t)}function en(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?l.tail=null:a.sibling=null;break;case"collapsed":a=l.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:e.sibling=null}}function hl(l){var t=l.alternate!==null&&l.alternate.child===l.child,a=0,e=0;if(t)for(var n=l.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=e,l.childLanes=a,t}function op(l,t,a){var e=t.pendingProps;switch(Ou(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hl(t),null;case 1:return hl(t),null;case 3:return a=t.stateNode,e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Yt(Nl),wl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(l===null||l.child===null)&&(ue(t)?Zt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nu())),hl(t),null;case 26:var n=t.type,i=t.memoizedState;return l===null?(Zt(t),i!==null?(hl(t),Zr(t,i)):(hl(t),Ss(t,n,null,e,a))):i?i!==l.memoizedState?(Zt(t),hl(t),Zr(t,i)):(hl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==e&&Zt(t),hl(t),Ss(t,n,l,e,a)),null;case 27:if(Tn(t),a=$.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Zt(t);else{if(!e){if(t.stateNode===null)throw Error(g(166));return hl(t),null}l=R.current,ue(t)?_o(t):(l=Ff(n,e,a),t.stateNode=l,Zt(t))}return hl(t),null;case 5:if(Tn(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Zt(t);else{if(!e){if(t.stateNode===null)throw Error(g(166));return hl(t),null}if(i=R.current,ue(t))_o(t);else{var u=Oi($.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof e.is=="string"?u.createElement("select",{is:e.is}):u.createElement("select"),e.multiple?i.multiple=!0:e.size&&(i.size=e.size);break;default:i=typeof e.is=="string"?u.createElement(n,{is:e.is}):u.createElement(n)}}i[Yl]=t,i[Wl]=e;l:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break l;for(;u.sibling===null;){if(u.return===null||u.return===t)break l;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;l:switch(Zl(i,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break l;case"img":e=!0;break l;default:e=!1}e&&Zt(t)}}return hl(t),Ss(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,a),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==e&&Zt(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(g(166));if(l=$.current,ue(t)){if(l=t.stateNode,a=t.memoizedProps,e=null,n=Gl,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}l[Yl]=t,l=!!(l.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||Gf(l.nodeValue,a)),l||ea(t,!0)}else l=Oi(l).createTextNode(e),l[Yl]=t,t.stateNode=l}return hl(t),null;case 31:if(a=t.memoizedState,l===null||l.memoizedState!==null){if(e=ue(t),a!==null){if(l===null){if(!e)throw Error(g(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(557));l[Yl]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;hl(t),l=!1}else a=Nu(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),l=!0;if(!l)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(g(558))}return hl(t),null;case 13:if(e=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=ue(t),e!==null&&e.dehydrated!==null){if(l===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Yl]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;hl(t),n=!1}else n=Nu(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=a,t):(a=e!==null,l=l!==null&&l.memoizedState!==null,a&&(e=t.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048)),a!==l&&a&&(t.child.flags|=8192),di(t,t.updateQueue),hl(t),null);case 4:return wl(),l===null&&Xs(t.stateNode.containerInfo),hl(t),null;case 10:return Yt(t.type),hl(t),null;case 19:if(T(Ol),e=t.memoizedState,e===null)return hl(t),null;if(n=(t.flags&128)!==0,i=e.rendering,i===null)if(n)en(e,!1);else{if(El!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(i=li(l),i!==null){for(t.flags|=128,en(e,!1),l=i.updateQueue,t.updateQueue=l,di(t,l),t.subtreeFlags=0,l=a,a=t.child;a!==null;)yo(a,l),a=a.sibling;return N(Ol,Ol.current&1|2),ll&&Bt(t,e.treeForkCount),t.child}l=l.sibling}e.tail!==null&&et()>vi&&(t.flags|=128,n=!0,en(e,!1),t.lanes=4194304)}else{if(!n)if(l=li(i),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,di(t,l),en(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!ll)return hl(t),null}else 2*et()-e.renderingStartTime>vi&&a!==536870912&&(t.flags|=128,n=!0,en(e,!1),t.lanes=4194304);e.isBackwards?(i.sibling=t.child,t.child=i):(l=e.last,l!==null?l.sibling=i:t.child=i,e.last=i)}return e.tail!==null?(l=e.tail,e.rendering=l,e.tail=l.sibling,e.renderingStartTime=et(),l.sibling=null,a=Ol.current,N(Ol,n?a&1|2:a&1),ll&&Bt(t,e.treeForkCount),l):(hl(t),null);case 22:case 23:return ot(t),Zu(),e=t.memoizedState!==null,l!==null?l.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(a&536870912)!==0&&(t.flags&128)===0&&(hl(t),t.subtreeFlags&6&&(t.flags|=8192)):hl(t),a=t.updateQueue,a!==null&&di(t,a.retryQueue),a=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(t.flags|=2048),l!==null&&T(Ra),null;case 24:return a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(Nl),hl(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function rp(l,t){switch(Ou(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Yt(Nl),wl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(g(340));xa()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(ot(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(g(340));xa()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return T(Ol),null;case 4:return wl(),null;case 10:return Yt(t.type),null;case 22:case 23:return ot(t),Zu(),l!==null&&T(Ra),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Yt(Nl),null;case 25:return null;default:return null}}function Lr(l,t){switch(Ou(t),t.tag){case 3:Yt(Nl),wl();break;case 26:case 27:case 5:Tn(t);break;case 4:wl();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:T(Ol);break;case 10:Yt(t.type);break;case 22:case 23:ot(t),Zu(),l!==null&&T(Ra);break;case 24:Yt(Nl)}}function nn(l,t){try{var a=t.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var n=e.next;a=n;do{if((a.tag&l)===l){e=void 0;var i=a.create,u=a.inst;e=i(),u.destroy=e}a=a.next}while(a!==n)}}catch(s){ul(t,t.return,s)}}function ra(l,t,a){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var i=n.next;e=i;do{if((e.tag&l)===l){var u=e.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,n=t;var c=a,h=s;try{h()}catch(b){ul(n,c,b)}}}e=e.next}while(e!==i)}}catch(b){ul(t,t.return,b)}}function Vr(l){var t=l.updateQueue;if(t!==null){var a=l.stateNode;try{Ho(t,a)}catch(e){ul(l,l.return,e)}}}function Kr(l,t,a){a.props=Qa(l.type,l.memoizedProps),a.state=l.memoizedState;try{a.componentWillUnmount()}catch(e){ul(l,t,e)}}function un(l,t){try{var a=l.ref;if(a!==null){switch(l.tag){case 26:case 27:case 5:var e=l.stateNode;break;case 30:e=l.stateNode;break;default:e=l.stateNode}typeof a=="function"?l.refCleanup=a(e):a.current=e}}catch(n){ul(l,t,n)}}function Nt(l,t){var a=l.ref,e=l.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(n){ul(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ul(l,t,n)}else a.current=null}function Jr(l){var t=l.type,a=l.memoizedProps,e=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break l;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(n){ul(l,l.return,n)}}function zs(l,t,a){try{var e=l.stateNode;jp(e,l.type,a,t),e[Wl]=t}catch(n){ul(l,l.return,n)}}function $r(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ya(l.type)||l.tag===4}function _s(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||$r(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ya(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function As(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(l),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ut));else if(e!==4&&(e===27&&ya(l.type)&&(a=l.stateNode,t=null),l=l.child,l!==null))for(As(l,t,a),l=l.sibling;l!==null;)As(l,t,a),l=l.sibling}function pi(l,t,a){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?a.insertBefore(l,t):a.appendChild(l);else if(e!==4&&(e===27&&ya(l.type)&&(a=l.stateNode),l=l.child,l!==null))for(pi(l,t,a),l=l.sibling;l!==null;)pi(l,t,a),l=l.sibling}function kr(l){var t=l.stateNode,a=l.memoizedProps;try{for(var e=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zl(t,e,a),t[Yl]=l,t[Wl]=a}catch(i){ul(l,l.return,i)}}var Lt=!1,xl=!1,Ts=!1,Wr=typeof WeakSet=="function"?WeakSet:Set,ql=null;function fp(l,t){if(l=l.containerInfo,Vs=Hi,l=so(l),yu(l)){if("selectionStart"in l)var a={start:l.selectionStart,end:l.selectionEnd};else l:{a=(a=l.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var n=e.anchorOffset,i=e.focusNode;e=e.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break l}var u=0,s=-1,c=-1,h=0,b=0,A=l,m=null;t:for(;;){for(var v;A!==a||n!==0&&A.nodeType!==3||(s=u+n),A!==i||e!==0&&A.nodeType!==3||(c=u+e),A.nodeType===3&&(u+=A.nodeValue.length),(v=A.firstChild)!==null;)m=A,A=v;for(;;){if(A===l)break t;if(m===a&&++h===n&&(s=u),m===i&&++b===e&&(c=u),(v=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=v}a=s===-1||c===-1?null:{start:s,end:c}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ks={focusedElem:l,selectionRange:a},Hi=!1,ql=t;ql!==null;)if(t=ql,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,ql=l;else for(;ql!==null;){switch(t=ql,i=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(a=0;a<l.length;a++)n=l[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&i!==null){l=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,e=a.stateNode;try{var H=Qa(a.type,n);l=e.getSnapshotBeforeUpdate(H,i),e.__reactInternalSnapshotBeforeUpdate=l}catch(G){ul(a,a.return,G)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,a=l.nodeType,a===9)ks(l);else if(a===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ks(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(g(163))}if(l=t.sibling,l!==null){l.return=t.return,ql=l;break}ql=t.return}}function Fr(l,t,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:Kt(l,a),e&4&&nn(5,a);break;case 1:if(Kt(l,a),e&4)if(l=a.stateNode,t===null)try{l.componentDidMount()}catch(u){ul(a,a.return,u)}else{var n=Qa(a.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(u){ul(a,a.return,u)}}e&64&&Vr(a),e&512&&un(a,a.return);break;case 3:if(Kt(l,a),e&64&&(l=a.updateQueue,l!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Ho(l,t)}catch(u){ul(a,a.return,u)}}break;case 27:t===null&&e&4&&kr(a);case 26:case 5:Kt(l,a),t===null&&e&4&&Jr(a),e&512&&un(a,a.return);break;case 12:Kt(l,a);break;case 31:Kt(l,a),e&4&&lf(l,a);break;case 13:Kt(l,a),e&4&&tf(l,a),e&64&&(l=a.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(a=Sp.bind(null,a),Gp(l,a))));break;case 22:if(e=a.memoizedState!==null||Lt,!e){t=t!==null&&t.memoizedState!==null||xl,n=Lt;var i=xl;Lt=e,(xl=t)&&!i?Jt(l,a,(a.subtreeFlags&8772)!==0):Kt(l,a),Lt=n,xl=i}break;case 30:break;default:Kt(l,a)}}function Ir(l){var t=l.alternate;t!==null&&(l.alternate=null,Ir(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&lu(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var ml=null,Il=!1;function Vt(l,t,a){for(a=a.child;a!==null;)Pr(l,t,a),a=a.sibling}function Pr(l,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(De,a)}catch{}switch(a.tag){case 26:xl||Nt(a,t),Vt(l,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:xl||Nt(a,t);var e=ml,n=Il;ya(a.type)&&(ml=a.stateNode,Il=!1),Vt(l,t,a),hn(a.stateNode),ml=e,Il=n;break;case 5:xl||Nt(a,t);case 6:if(e=ml,n=Il,ml=null,Vt(l,t,a),ml=e,Il=n,ml!==null)if(Il)try{(ml.nodeType===9?ml.body:ml.nodeName==="HTML"?ml.ownerDocument.body:ml).removeChild(a.stateNode)}catch(i){ul(a,t,i)}else try{ml.removeChild(a.stateNode)}catch(i){ul(a,t,i)}break;case 18:ml!==null&&(Il?(l=ml,Kf(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.stateNode),we(l)):Kf(ml,a.stateNode));break;case 4:e=ml,n=Il,ml=a.stateNode.containerInfo,Il=!0,Vt(l,t,a),ml=e,Il=n;break;case 0:case 11:case 14:case 15:ra(2,a,t),xl||ra(4,a,t),Vt(l,t,a);break;case 1:xl||(Nt(a,t),e=a.stateNode,typeof e.componentWillUnmount=="function"&&Kr(a,t,e)),Vt(l,t,a);break;case 21:Vt(l,t,a);break;case 22:xl=(e=xl)||a.memoizedState!==null,Vt(l,t,a),xl=e;break;default:Vt(l,t,a)}}function lf(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{we(l)}catch(a){ul(t,t.return,a)}}}function tf(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{we(l)}catch(a){ul(t,t.return,a)}}function gp(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wr),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wr),t;default:throw Error(g(435,l.tag))}}function hi(l,t){var a=gp(l);t.forEach(function(e){if(!a.has(e)){a.add(e);var n=zp.bind(null,l,e);e.then(n,n)}})}function Pl(l,t){var a=t.deletions;if(a!==null)for(var e=0;e<a.length;e++){var n=a[e],i=l,u=t,s=u;l:for(;s!==null;){switch(s.tag){case 27:if(ya(s.type)){ml=s.stateNode,Il=!1;break l}break;case 5:ml=s.stateNode,Il=!1;break l;case 3:case 4:ml=s.stateNode.containerInfo,Il=!0;break l}s=s.return}if(ml===null)throw Error(g(160));Pr(i,u,n),ml=null,Il=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)af(t,l),t=t.sibling}var Mt=null;function af(l,t){var a=l.alternate,e=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),e&4&&(ra(3,l,l.return),nn(3,l),ra(5,l,l.return));break;case 1:Pl(t,l),lt(l),e&512&&(xl||a===null||Nt(a,a.return)),e&64&&Lt&&(l=l.updateQueue,l!==null&&(e=l.callbacks,e!==null&&(a=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var n=Mt;if(Pl(t,l),lt(l),e&512&&(xl||a===null||Nt(a,a.return)),e&4){var i=a!==null?a.memoizedState:null;if(e=l.memoizedState,a===null)if(e===null)if(l.stateNode===null){l:{e=l.type,a=l.memoizedProps,n=n.ownerDocument||n;t:switch(e){case"title":i=n.getElementsByTagName("title")[0],(!i||i[je]||i[Yl]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(e),n.head.insertBefore(i,n.querySelector("head > title"))),Zl(i,e,a),i[Yl]=l,Bl(i),e=i;break l;case"link":var u=eg("link","href",n).get(e+(a.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(s,1);break t}}i=n.createElement(e),Zl(i,e,a),n.head.appendChild(i);break;case"meta":if(u=eg("meta","content",n).get(e+(a.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(s,1);break t}}i=n.createElement(e),Zl(i,e,a),n.head.appendChild(i);break;default:throw Error(g(468,e))}i[Yl]=l,Bl(i),e=i}l.stateNode=e}else ng(n,l.type,l.stateNode);else l.stateNode=ag(n,e,l.memoizedProps);else i!==e?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,e===null?ng(n,l.type,l.stateNode):ag(n,e,l.memoizedProps)):e===null&&l.stateNode!==null&&zs(l,l.memoizedProps,a.memoizedProps)}break;case 27:Pl(t,l),lt(l),e&512&&(xl||a===null||Nt(a,a.return)),a!==null&&e&4&&zs(l,l.memoizedProps,a.memoizedProps);break;case 5:if(Pl(t,l),lt(l),e&512&&(xl||a===null||Nt(a,a.return)),l.flags&32){n=l.stateNode;try{Wa(n,"")}catch(H){ul(l,l.return,H)}}e&4&&l.stateNode!=null&&(n=l.memoizedProps,zs(l,n,a!==null?a.memoizedProps:n)),e&1024&&(Ts=!0);break;case 6:if(Pl(t,l),lt(l),e&4){if(l.stateNode===null)throw Error(g(162));e=l.memoizedProps,a=l.stateNode;try{a.nodeValue=e}catch(H){ul(l,l.return,H)}}break;case 3:if(Ci=null,n=Mt,Mt=Di(t.containerInfo),Pl(t,l),Mt=n,lt(l),e&4&&a!==null&&a.memoizedState.isDehydrated)try{we(t.containerInfo)}catch(H){ul(l,l.return,H)}Ts&&(Ts=!1,ef(l));break;case 4:e=Mt,Mt=Di(l.stateNode.containerInfo),Pl(t,l),lt(l),Mt=e;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,hi(l,e)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yi=et()),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,hi(l,e)));break;case 22:n=l.memoizedState!==null;var c=a!==null&&a.memoizedState!==null,h=Lt,b=xl;if(Lt=h||n,xl=b||c,Pl(t,l),xl=b,Lt=h,lt(l),e&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||c||Lt||xl||Xa(l)),a=null,t=l;;){if(t.tag===5||t.tag===26){if(a===null){c=a=t;try{if(i=c.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=c.stateNode;var A=c.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(H){ul(c,c.return,H)}}}else if(t.tag===6){if(a===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(H){ul(c,c.return,H)}}}else if(t.tag===18){if(a===null){c=t;try{var v=c.stateNode;n?Jf(v,!0):Jf(c.stateNode,!1)}catch(H){ul(c,c.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=l.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,hi(l,a))));break;case 19:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,hi(l,e)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var a,e=l.return;e!==null;){if($r(e)){a=e;break}e=e.return}if(a==null)throw Error(g(160));switch(a.tag){case 27:var n=a.stateNode,i=_s(l);pi(l,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Wa(u,""),a.flags&=-33);var s=_s(l);pi(l,s,u);break;case 3:case 4:var c=a.stateNode.containerInfo,h=_s(l);As(l,h,c);break;default:throw Error(g(161))}}catch(b){ul(l,l.return,b)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function ef(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Kt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fr(l,t.alternate,t),t=t.sibling}function Xa(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ra(4,t,t.return),Xa(t);break;case 1:Nt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Kr(t,t.return,a),Xa(t);break;case 27:hn(t.stateNode);case 26:case 5:Nt(t,t.return),Xa(t);break;case 22:t.memoizedState===null&&Xa(t);break;case 30:Xa(t);break;default:Xa(t)}l=l.sibling}}function Jt(l,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,n=l,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Jt(n,i,a),nn(4,i);break;case 1:if(Jt(n,i,a),e=i,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){ul(e,e.return,h)}if(e=i,n=e.updateQueue,n!==null){var s=e.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Uo(c[n],s)}catch(h){ul(e,e.return,h)}}a&&u&64&&Vr(i),un(i,i.return);break;case 27:kr(i);case 26:case 5:Jt(n,i,a),a&&e===null&&u&4&&Jr(i),un(i,i.return);break;case 12:Jt(n,i,a);break;case 31:Jt(n,i,a),a&&u&4&&lf(n,i);break;case 13:Jt(n,i,a),a&&u&4&&tf(n,i);break;case 22:i.memoizedState===null&&Jt(n,i,a),un(i,i.return);break;case 30:break;default:Jt(n,i,a)}t=t.sibling}}function Es(l,t){var a=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(l!=null&&l.refCount++,a!=null&&Ve(a))}function Ms(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ve(l))}function wt(l,t,a,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nf(l,t,a,e),t=t.sibling}function nf(l,t,a,e){var n=t.flags;switch(t.tag){case 0:case 11:case 15:wt(l,t,a,e),n&2048&&nn(9,t);break;case 1:wt(l,t,a,e);break;case 3:wt(l,t,a,e),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ve(l)));break;case 12:if(n&2048){wt(l,t,a,e),l=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(c){ul(t,t.return,c)}}else wt(l,t,a,e);break;case 31:wt(l,t,a,e);break;case 13:wt(l,t,a,e);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?wt(l,t,a,e):sn(l,t):i._visibility&2?wt(l,t,a,e):(i._visibility|=2,me(l,t,a,e,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Es(u,t);break;case 24:wt(l,t,a,e),n&2048&&Ms(t.alternate,t);break;default:wt(l,t,a,e)}}function me(l,t,a,e,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=l,u=t,s=a,c=e,h=u.flags;switch(u.tag){case 0:case 11:case 15:me(i,u,s,c,n),nn(8,u);break;case 23:break;case 22:var b=u.stateNode;u.memoizedState!==null?b._visibility&2?me(i,u,s,c,n):sn(i,u):(b._visibility|=2,me(i,u,s,c,n)),n&&h&2048&&Es(u.alternate,u);break;case 24:me(i,u,s,c,n),n&&h&2048&&Ms(u.alternate,u);break;default:me(i,u,s,c,n)}t=t.sibling}}function sn(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=l,e=t,n=e.flags;switch(e.tag){case 22:sn(a,e),n&2048&&Es(e.alternate,e);break;case 24:sn(a,e),n&2048&&Ms(e.alternate,e);break;default:sn(a,e)}t=t.sibling}}var cn=8192;function ye(l,t,a){if(l.subtreeFlags&cn)for(l=l.child;l!==null;)uf(l,t,a),l=l.sibling}function uf(l,t,a){switch(l.tag){case 26:ye(l,t,a),l.flags&cn&&l.memoizedState!==null&&Ip(a,Mt,l.memoizedState,l.memoizedProps);break;case 5:ye(l,t,a);break;case 3:case 4:var e=Mt;Mt=Di(l.stateNode.containerInfo),ye(l,t,a),Mt=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=cn,cn=16777216,ye(l,t,a),cn=e):ye(l,t,a));break;default:ye(l,t,a)}}function sf(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function on(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];ql=e,of(e,l)}sf(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)cf(l),l=l.sibling}function cf(l){switch(l.tag){case 0:case 11:case 15:on(l),l.flags&2048&&ra(9,l,l.return);break;case 3:on(l);break;case 12:on(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,mi(l)):on(l);break;default:on(l)}}function mi(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];ql=e,of(e,l)}sf(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ra(8,t,t.return),mi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,mi(t));break;default:mi(t)}l=l.sibling}}function of(l,t){for(;ql!==null;){var a=ql;switch(a.tag){case 0:case 11:case 15:ra(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Ve(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,ql=e;else l:for(a=l;ql!==null;){e=ql;var n=e.sibling,i=e.return;if(Ir(e),e===a){ql=null;break l}if(n!==null){n.return=i,ql=n;break l}ql=i}}}var dp={getCacheForType:function(l){var t=Ql(Nl),a=t.data.get(l);return a===void 0&&(a=l(),t.data.set(l,a)),a},cacheSignal:function(){return Ql(Nl).controller.signal}},pp=typeof WeakMap=="function"?WeakMap:Map,el=0,dl=null,k=null,F=0,il=0,rt=null,fa=!1,ve=!1,ws=!1,$t=0,El=0,ga=0,Za=0,Os=0,ft=0,be=0,rn=null,tt=null,Ds=!1,yi=0,rf=0,vi=1/0,bi=null,da=null,Hl=0,pa=null,Se=null,kt=0,Ns=0,Cs=null,ff=null,fn=0,js=null;function gt(){return(el&2)!==0&&F!==0?F&-F:S.T!==null?qs():Ec()}function gf(){if(ft===0)if((F&536870912)===0||ll){var l=wn;wn<<=1,(wn&3932160)===0&&(wn=262144),ft=l}else ft=536870912;return l=ct.current,l!==null&&(l.flags|=32),ft}function at(l,t,a){(l===dl&&(il===2||il===9)||l.cancelPendingCommit!==null)&&(ze(l,0),ha(l,F,ft,!1)),Ce(l,a),((el&2)===0||l!==dl)&&(l===dl&&((el&2)===0&&(Za|=a),El===4&&ha(l,F,ft,!1)),Ct(l))}function df(l,t,a){if((el&6)!==0)throw Error(g(327));var e=!a&&(t&127)===0&&(t&l.expiredLanes)===0||Ne(l,t),n=e?yp(l,t):Us(l,t,!0),i=e;do{if(n===0){ve&&!e&&ha(l,t,0,!1);break}else{if(a=l.current.alternate,i&&!hp(a)){n=Us(l,t,!1),i=!1;continue}if(n===2){if(i=t,l.errorRecoveryDisabledLanes&i)var u=0;else u=l.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;l:{var s=l;n=rn;var c=s.current.memoizedState.isDehydrated;if(c&&(ze(s,u).flags|=256),u=Us(s,u,!1),u!==2){if(ws&&!c){s.errorRecoveryDisabledLanes|=i,Za|=i,n=4;break l}i=tt,tt=n,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){ze(l,0),ha(l,t,0,!0);break}l:{switch(e=l,i=n,i){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:ha(e,t,ft,!fa);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=yi+300-et(),10<n)){if(ha(e,t,ft,!fa),Dn(e,0,!0)!==0)break l;kt=t,e.timeoutHandle=Lf(pf.bind(null,e,a,tt,bi,Ds,t,ft,Za,be,fa,i,"Throttled",-0,0),n);break l}pf(e,a,tt,bi,Ds,t,ft,Za,be,fa,i,null,-0,0)}}break}while(!0);Ct(l)}function pf(l,t,a,e,n,i,u,s,c,h,b,A,m,v){if(l.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},uf(t,i,A);var H=(i&62914560)===i?yi-et():(i&4194048)===i?rf-et():0;if(H=Pp(A,H),H!==null){kt=i,l.cancelPendingCommit=H(_f.bind(null,l,t,i,a,e,n,u,s,c,b,A,null,m,v)),ha(l,i,u,!h);return}}_f(l,t,i,a,e,n,u,s,c)}function hp(l){for(var t=l;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var n=a[e],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(l,t,a,e){t&=~Os,t&=~Za,l.suspendedLanes|=t,l.pingedLanes&=~t,e&&(l.warmLanes|=t),e=l.expirationTimes;for(var n=t;0<n;){var i=31-it(n),u=1<<i;e[i]=-1,n&=~u}a!==0&&_c(l,a,t)}function Si(){return(el&6)===0?(gn(0),!1):!0}function xs(){if(k!==null){if(il===0)var l=k.return;else l=k,qt=Ua=null,ku(l),fe=null,Je=0,l=k;for(;l!==null;)Lr(l.alternate,l),l=l.return;k=null}}function ze(l,t){var a=l.timeoutHandle;a!==-1&&(l.timeoutHandle=-1,Hp(a)),a=l.cancelPendingCommit,a!==null&&(l.cancelPendingCommit=null,a()),kt=0,xs(),dl=l,k=a=Rt(l.current,null),F=t,il=0,rt=null,fa=!1,ve=Ne(l,t),ws=!1,be=ft=Os=Za=ga=El=0,tt=rn=null,Ds=!1,(t&8)!==0&&(t|=t&32);var e=l.entangledLanes;if(e!==0)for(l=l.entanglements,e&=t;0<e;){var n=31-it(e),i=1<<n;t|=l[n],e&=~i}return $t=t,Qn(),a}function hf(l,t){L=null,S.H=tn,t===re||t===kn?(t=No(),il=3):t===Bu?(t=No(),il=4):il=t===fs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,k===null&&(El=1,oi(l,yt(t,l.current)))}function mf(){var l=ct.current;return l===null?!0:(F&4194048)===F?zt===null:(F&62914560)===F||(F&536870912)!==0?l===zt:!1}function yf(){var l=S.H;return S.H=tn,l===null?tn:l}function vf(){var l=S.A;return S.A=dp,l}function zi(){El=4,fa||(F&4194048)!==F&&ct.current!==null||(ve=!0),(ga&134217727)===0&&(Za&134217727)===0||dl===null||ha(dl,F,ft,!1)}function Us(l,t,a){var e=el;el|=2;var n=yf(),i=vf();(dl!==l||F!==t)&&(bi=null,ze(l,t)),t=!1;var u=El;l:do try{if(il!==0&&k!==null){var s=k,c=rt;switch(il){case 8:xs(),u=6;break l;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var h=il;if(il=0,rt=null,_e(l,s,c,h),a&&ve){u=0;break l}break;default:h=il,il=0,rt=null,_e(l,s,c,h)}}mp(),u=El;break}catch(b){hf(l,b)}while(!0);return t&&l.shellSuspendCounter++,qt=Ua=null,el=e,S.H=n,S.A=i,k===null&&(dl=null,F=0,Qn()),u}function mp(){for(;k!==null;)bf(k)}function yp(l,t){var a=el;el|=2;var e=yf(),n=vf();dl!==l||F!==t?(bi=null,vi=et()+500,ze(l,t)):ve=Ne(l,t);l:do try{if(il!==0&&k!==null){t=k;var i=rt;t:switch(il){case 1:il=0,rt=null,_e(l,t,i,1);break;case 2:case 9:if(Oo(i)){il=0,rt=null,Sf(t);break}t=function(){il!==2&&il!==9||dl!==l||(il=7),Ct(l)},i.then(t,t);break l;case 3:il=7;break l;case 4:il=5;break l;case 7:Oo(i)?(il=0,rt=null,Sf(t)):(il=0,rt=null,_e(l,t,i,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var s=k;if(u?ig(u):s.stateNode.complete){il=0,rt=null;var c=s.sibling;if(c!==null)k=c;else{var h=s.return;h!==null?(k=h,_i(h)):k=null}break t}}il=0,rt=null,_e(l,t,i,5);break;case 6:il=0,rt=null,_e(l,t,i,6);break;case 8:xs(),El=6;break l;default:throw Error(g(462))}}vp();break}catch(b){hf(l,b)}while(!0);return qt=Ua=null,S.H=e,S.A=n,el=a,k!==null?0:(dl=null,F=0,Qn(),El)}function vp(){for(;k!==null&&!Qg();)bf(k)}function bf(l){var t=Xr(l.alternate,l,$t);l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function Sf(l){var t=l,a=t.alternate;switch(t.tag){case 15:case 0:t=Rr(a,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Rr(a,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:ku(t);default:Lr(a,t),t=k=yo(t,$t),t=Xr(a,t,$t)}l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function _e(l,t,a,e){qt=Ua=null,ku(t),fe=null,Je=0;var n=t.return;try{if(up(l,n,t,a,F)){El=1,oi(l,yt(a,l.current)),k=null;return}}catch(i){if(n!==null)throw k=n,i;El=1,oi(l,yt(a,l.current)),k=null;return}t.flags&32768?(ll||e===1?l=!0:ve||(F&536870912)!==0?l=!1:(fa=l=!0,(e===2||e===9||e===3||e===6)&&(e=ct.current,e!==null&&e.tag===13&&(e.flags|=16384))),zf(t,l)):_i(t)}function _i(l){var t=l;do{if((t.flags&32768)!==0){zf(t,fa);return}l=t.return;var a=op(t.alternate,t,$t);if(a!==null){k=a;return}if(t=t.sibling,t!==null){k=t;return}k=t=l}while(t!==null);El===0&&(El=5)}function zf(l,t){do{var a=rp(l.alternate,l);if(a!==null){a.flags&=32767,k=a;return}if(a=l.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(l=l.sibling,l!==null)){k=l;return}k=l=a}while(l!==null);El=6,k=null}function _f(l,t,a,e,n,i,u,s,c){l.cancelPendingCommit=null;do Ai();while(Hl!==0);if((el&6)!==0)throw Error(g(327));if(t!==null){if(t===l.current)throw Error(g(177));if(i=t.lanes|t.childLanes,i|=_u,Fg(l,a,i,u,s,c),l===dl&&(k=dl=null,F=0),Se=t,pa=l,kt=a,Ns=i,Cs=n,ff=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,_p(En,function(){return wf(),null})):(l.callbackNode=null,l.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null,n=O.p,O.p=2,u=el,el|=4;try{fp(l,t,a)}finally{el=u,O.p=n,S.T=e}}Hl=1,Af(),Tf(),Ef()}}function Af(){if(Hl===1){Hl=0;var l=pa,t=Se,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var e=O.p;O.p=2;var n=el;el|=4;try{af(t,l);var i=Ks,u=so(l.containerInfo),s=i.focusedElem,c=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&uo(s.ownerDocument.documentElement,s)){if(c!==null&&yu(s)){var h=c.start,b=c.end;if(b===void 0&&(b=h),"selectionStart"in s)s.selectionStart=h,s.selectionEnd=Math.min(b,s.value.length);else{var A=s.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var v=m.getSelection(),H=s.textContent.length,G=Math.min(c.start,H),fl=c.end===void 0?G:Math.min(c.end,H);!v.extend&&G>fl&&(u=fl,fl=G,G=u);var f=io(s,G),o=io(s,fl);if(f&&o&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var p=A.createRange();p.setStart(f.node,f.offset),v.removeAllRanges(),G>fl?(v.addRange(p),v.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),v.addRange(p))}}}}for(A=[],v=s;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<A.length;s++){var z=A[s];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Hi=!!Vs,Ks=Vs=null}finally{el=n,O.p=e,S.T=a}}l.current=t,Hl=2}}function Tf(){if(Hl===2){Hl=0;var l=pa,t=Se,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var e=O.p;O.p=2;var n=el;el|=4;try{Fr(l,t.alternate,t)}finally{el=n,O.p=e,S.T=a}}Hl=3}}function Ef(){if(Hl===4||Hl===3){Hl=0,Xg();var l=pa,t=Se,a=kt,e=ff;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Hl=5:(Hl=0,Se=pa=null,Mf(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(da=null),Ii(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(De,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=S.T,n=O.p,O.p=2,S.T=null;try{for(var i=l.onRecoverableError,u=0;u<e.length;u++){var s=e[u];i(s.value,{componentStack:s.stack})}}finally{S.T=t,O.p=n}}(kt&3)!==0&&Ai(),Ct(l),n=l.pendingLanes,(a&261930)!==0&&(n&42)!==0?l===js?fn++:(fn=0,js=l):fn=0,gn(0)}}function Mf(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Ve(t)))}function Ai(){return Af(),Tf(),Ef(),wf()}function wf(){if(Hl!==5)return!1;var l=pa,t=Ns;Ns=0;var a=Ii(kt),e=S.T,n=O.p;try{O.p=32>a?32:a,S.T=null,a=Cs,Cs=null;var i=pa,u=kt;if(Hl=0,Se=pa=null,kt=0,(el&6)!==0)throw Error(g(331));var s=el;if(el|=4,cf(i.current),nf(i,i.current,u,a),el=s,gn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(De,i)}catch{}return!0}finally{O.p=n,S.T=e,Mf(l,t)}}function Of(l,t,a){t=yt(a,t),t=rs(l.stateNode,t,2),l=sa(l,t,2),l!==null&&(Ce(l,2),Ct(l))}function ul(l,t,a){if(l.tag===3)Of(l,l,a);else for(;t!==null;){if(t.tag===3){Of(t,l,a);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(da===null||!da.has(e))){l=yt(a,l),a=Or(2),e=sa(t,a,2),e!==null&&(Dr(a,e,t,l),Ce(e,2),Ct(e));break}}t=t.return}}function Hs(l,t,a){var e=l.pingCache;if(e===null){e=l.pingCache=new pp;var n=new Set;e.set(t,n)}else n=e.get(t),n===void 0&&(n=new Set,e.set(t,n));n.has(a)||(ws=!0,n.add(a),l=bp.bind(null,l,t,a),t.then(l,l))}function bp(l,t,a){var e=l.pingCache;e!==null&&e.delete(t),l.pingedLanes|=l.suspendedLanes&a,l.warmLanes&=~a,dl===l&&(F&a)===a&&(El===4||El===3&&(F&62914560)===F&&300>et()-yi?(el&2)===0&&ze(l,0):Os|=a,be===F&&(be=0)),Ct(l)}function Df(l,t){t===0&&(t=zc()),l=Ca(l,t),l!==null&&(Ce(l,t),Ct(l))}function Sp(l){var t=l.memoizedState,a=0;t!==null&&(a=t.retryLane),Df(l,a)}function zp(l,t){var a=0;switch(l.tag){case 31:case 13:var e=l.stateNode,n=l.memoizedState;n!==null&&(a=n.retryLane);break;case 19:e=l.stateNode;break;case 22:e=l.stateNode._retryCache;break;default:throw Error(g(314))}e!==null&&e.delete(t),Df(l,a)}function _p(l,t){return $i(l,t)}var Ti=null,Ae=null,Rs=!1,Ei=!1,Bs=!1,ma=0;function Ct(l){l!==Ae&&l.next===null&&(Ae===null?Ti=Ae=l:Ae=Ae.next=l),Ei=!0,Rs||(Rs=!0,Tp())}function gn(l,t){if(!Bs&&Ei){Bs=!0;do for(var a=!1,e=Ti;e!==null;){if(l!==0){var n=e.pendingLanes;if(n===0)var i=0;else{var u=e.suspendedLanes,s=e.pingedLanes;i=(1<<31-it(42|l)+1)-1,i&=n&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,xf(e,i))}else i=F,i=Dn(e,e===dl?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||Ne(e,i)||(a=!0,xf(e,i));e=e.next}while(a);Bs=!1}}function Ap(){Nf()}function Nf(){Ei=Rs=!1;var l=0;ma!==0&&Up()&&(l=ma);for(var t=et(),a=null,e=Ti;e!==null;){var n=e.next,i=Cf(e,t);i===0?(e.next=null,a===null?Ti=n:a.next=n,n===null&&(Ae=a)):(a=e,(l!==0||(i&3)!==0)&&(Ei=!0)),e=n}Hl!==0&&Hl!==5||gn(l),ma!==0&&(ma=0)}function Cf(l,t){for(var a=l.suspendedLanes,e=l.pingedLanes,n=l.expirationTimes,i=l.pendingLanes&-62914561;0<i;){var u=31-it(i),s=1<<u,c=n[u];c===-1?((s&a)===0||(s&e)!==0)&&(n[u]=Wg(s,t)):c<=t&&(l.expiredLanes|=s),i&=~s}if(t=dl,a=F,a=Dn(l,l===t?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e=l.callbackNode,a===0||l===t&&(il===2||il===9)||l.cancelPendingCommit!==null)return e!==null&&e!==null&&ki(e),l.callbackNode=null,l.callbackPriority=0;if((a&3)===0||Ne(l,a)){if(t=a&-a,t===l.callbackPriority)return t;switch(e!==null&&ki(e),Ii(a)){case 2:case 8:a=bc;break;case 32:a=En;break;case 268435456:a=Sc;break;default:a=En}return e=jf.bind(null,l),a=$i(a,e),l.callbackPriority=t,l.callbackNode=a,t}return e!==null&&e!==null&&ki(e),l.callbackPriority=2,l.callbackNode=null,2}function jf(l,t){if(Hl!==0&&Hl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var a=l.callbackNode;if(Ai()&&l.callbackNode!==a)return null;var e=F;return e=Dn(l,l===dl?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e===0?null:(df(l,e,t),Cf(l,et()),l.callbackNode!=null&&l.callbackNode===a?jf.bind(null,l):null)}function xf(l,t){if(Ai())return null;df(l,t,!0)}function Tp(){Rp(function(){(el&6)!==0?$i(vc,Ap):Nf()})}function qs(){if(ma===0){var l=ce;l===0&&(l=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),ma=l}return ma}function Uf(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:xn(""+l)}function Hf(l,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,l.id&&a.setAttribute("form",l.id),t.parentNode.insertBefore(a,t),l=new FormData(l),a.parentNode.removeChild(a),l}function Ep(l,t,a,e,n){if(t==="submit"&&a&&a.stateNode===n){var i=Uf((n[Wl]||null).action),u=e.submitter;u&&(t=(t=u[Wl]||null)?Uf(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Bn("action","action",null,e,n);l.push({event:s,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(ma!==0){var c=u?Hf(n,u):new FormData(n);ns(a,{pending:!0,data:c,method:n.method,action:i},null,c)}}else typeof i=="function"&&(s.preventDefault(),c=u?Hf(n,u):new FormData(n),ns(a,{pending:!0,data:c,method:n.method,action:i},i,c))},currentTarget:n}]})}}for(var Ys=0;Ys<zu.length;Ys++){var Gs=zu[Ys],Mp=Gs.toLowerCase(),wp=Gs[0].toUpperCase()+Gs.slice(1);Et(Mp,"on"+wp)}Et(ro,"onAnimationEnd"),Et(fo,"onAnimationIteration"),Et(go,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Zd,"onTransitionRun"),Et(Ld,"onTransitionStart"),Et(Vd,"onTransitionCancel"),Et(po,"onTransitionEnd"),$a("onMouseEnter",["mouseout","mouseover"]),$a("onMouseLeave",["mouseout","mouseover"]),$a("onPointerEnter",["pointerout","pointerover"]),$a("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Op=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function Rf(l,t){t=(t&4)!==0;for(var a=0;a<l.length;a++){var e=l[a],n=e.event;e=e.listeners;l:{var i=void 0;if(t)for(var u=e.length-1;0<=u;u--){var s=e[u],c=s.instance,h=s.currentTarget;if(s=s.listener,c!==i&&n.isPropagationStopped())break l;i=s,n.currentTarget=h;try{i(n)}catch(b){Gn(b)}n.currentTarget=null,i=c}else for(u=0;u<e.length;u++){if(s=e[u],c=s.instance,h=s.currentTarget,s=s.listener,c!==i&&n.isPropagationStopped())break l;i=s,n.currentTarget=h;try{i(n)}catch(b){Gn(b)}n.currentTarget=null,i=c}}}}function W(l,t){var a=t[Pi];a===void 0&&(a=t[Pi]=new Set);var e=l+"__bubble";a.has(e)||(Bf(t,l,2,!1),a.add(e))}function Qs(l,t,a){var e=0;t&&(e|=4),Bf(a,l,e,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Xs(l){if(!l[Mi]){l[Mi]=!0,Oc.forEach(function(a){a!=="selectionchange"&&(Op.has(a)||Qs(a,!1,l),Qs(a,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,Qs("selectionchange",!1,t))}}function Bf(l,t,a,e){switch(gg(t)){case 2:var n=a0;break;case 8:n=e0;break;default:n=ec}a=n.bind(null,t,a,l),n=void 0,!cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),e?n!==void 0?l.addEventListener(t,a,{capture:!0,passive:n}):l.addEventListener(t,a,!0):n!==void 0?l.addEventListener(t,a,{passive:n}):l.addEventListener(t,a,!1)}function Zs(l,t,a,e,n){var i=e;if((t&1)===0&&(t&2)===0&&e!==null)l:for(;;){if(e===null)return;var u=e.tag;if(u===3||u===4){var s=e.stateNode.containerInfo;if(s===n)break;if(u===4)for(u=e.return;u!==null;){var c=u.tag;if((c===3||c===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;s!==null;){if(u=Va(s),u===null)return;if(c=u.tag,c===5||c===6||c===26||c===27){e=i=u;continue l}s=s.parentNode}}e=e.return}Gc(function(){var h=i,b=uu(a),A=[];l:{var m=ho.get(l);if(m!==void 0){var v=Bn,H=l;switch(l){case"keypress":if(Hn(a)===0)break l;case"keydown":case"keyup":v=zd;break;case"focusin":H="focus",v=gu;break;case"focusout":H="blur",v=gu;break;case"beforeblur":case"afterblur":v=gu;break;case"click":if(a.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Td;break;case ro:case fo:case go:v=gd;break;case po:v=Md;break;case"scroll":case"scrollend":v=sd;break;case"wheel":v=Od;break;case"copy":case"cut":case"paste":v=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vc;break;case"toggle":case"beforetoggle":v=Nd}var G=(t&4)!==0,fl=!G&&(l==="scroll"||l==="scrollend"),f=G?m!==null?m+"Capture":null:m;G=[];for(var o=h,p;o!==null;){var z=o;if(p=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||p===null||f===null||(z=Ue(o,f),z!=null&&G.push(pn(o,z,p))),fl)break;o=o.return}0<G.length&&(m=new v(m,H,null,a,b),A.push({event:m,listeners:G}))}}if((t&7)===0){l:{if(m=l==="mouseover"||l==="pointerover",v=l==="mouseout"||l==="pointerout",m&&a!==iu&&(H=a.relatedTarget||a.fromElement)&&(Va(H)||H[La]))break l;if((v||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,v?(H=a.relatedTarget||a.toElement,v=h,H=H?Va(H):null,H!==null&&(fl=j(H),G=H.tag,H!==fl||G!==5&&G!==27&&G!==6)&&(H=null)):(v=null,H=h),v!==H)){if(G=Zc,z="onMouseLeave",f="onMouseEnter",o="mouse",(l==="pointerout"||l==="pointerover")&&(G=Vc,z="onPointerLeave",f="onPointerEnter",o="pointer"),fl=v==null?m:xe(v),p=H==null?m:xe(H),m=new G(z,o+"leave",v,a,b),m.target=fl,m.relatedTarget=p,z=null,Va(b)===h&&(G=new G(f,o+"enter",H,a,b),G.target=p,G.relatedTarget=fl,z=G),fl=z,v&&H)t:{for(G=Dp,f=v,o=H,p=0,z=f;z;z=G(z))p++;z=0;for(var Y=o;Y;Y=G(Y))z++;for(;0<p-z;)f=G(f),p--;for(;0<z-p;)o=G(o),z--;for(;p--;){if(f===o||o!==null&&f===o.alternate){G=f;break t}f=G(f),o=G(o)}G=null}else G=null;v!==null&&qf(A,m,v,G,!1),H!==null&&fl!==null&&qf(A,fl,H,G,!0)}}l:{if(m=h?xe(h):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var tl=Pc;else if(Fc(m))if(lo)tl=Gd;else{tl=qd;var B=Bd}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?h&&nu(h.elementType)&&(tl=Pc):tl=Yd;if(tl&&(tl=tl(l,h))){Ic(A,tl,a,b);break l}B&&B(l,m,h),l==="focusout"&&h&&m.type==="number"&&h.memoizedProps.value!=null&&eu(m,"number",m.value)}switch(B=h?xe(h):window,l){case"focusin":(Fc(B)||B.contentEditable==="true")&&(le=B,vu=h,Xe=null);break;case"focusout":Xe=vu=le=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,co(A,a,b);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":co(A,a,b)}var V;if(pu)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pa?kc(l,a)&&(I="onCompositionEnd"):l==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Kc&&a.locale!=="ko"&&(Pa||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pa&&(V=Qc()):(la=b,ou="value"in la?la.value:la.textContent,Pa=!0)),B=wi(h,I),0<B.length&&(I=new Lc(I,l,null,a,b),A.push({event:I,listeners:B}),V?I.data=V:(V=Wc(a),V!==null&&(I.data=V)))),(V=jd?xd(l,a):Ud(l,a))&&(I=wi(h,"onBeforeInput"),0<I.length&&(B=new Lc("onBeforeInput","beforeinput",null,a,b),A.push({event:B,listeners:I}),B.data=V)),Ep(A,l,h,a,b)}Rf(A,t)})}function pn(l,t,a){return{instance:l,listener:t,currentTarget:a}}function wi(l,t){for(var a=t+"Capture",e=[];l!==null;){var n=l,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ue(l,a),n!=null&&e.unshift(pn(l,n,i)),n=Ue(l,t),n!=null&&e.push(pn(l,n,i))),l.tag===3)return e;l=l.return}return[]}function Dp(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function qf(l,t,a,e,n){for(var i=t._reactName,u=[];a!==null&&a!==e;){var s=a,c=s.alternate,h=s.stateNode;if(s=s.tag,c!==null&&c===e)break;s!==5&&s!==26&&s!==27||h===null||(c=h,n?(h=Ue(a,i),h!=null&&u.unshift(pn(a,h,c))):n||(h=Ue(a,i),h!=null&&u.push(pn(a,h,c)))),a=a.return}u.length!==0&&l.push({event:t,listeners:u})}var Np=/\r\n?/g,Cp=/\u0000|\uFFFD/g;function Yf(l){return(typeof l=="string"?l:""+l).replace(Np,`
`).replace(Cp,"")}function Gf(l,t){return t=Yf(t),Yf(l)===t}function rl(l,t,a,e,n,i){switch(a){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||Wa(l,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&Wa(l,""+e);break;case"className":Cn(l,"class",e);break;case"tabIndex":Cn(l,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(l,a,e);break;case"style":qc(l,e,i);break;case"data":if(t!=="object"){Cn(l,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||a!=="href")){l.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=xn(""+e),l.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){l.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&rl(l,t,"name",n.name,n,null),rl(l,t,"formEncType",n.formEncType,n,null),rl(l,t,"formMethod",n.formMethod,n,null),rl(l,t,"formTarget",n.formTarget,n,null)):(rl(l,t,"encType",n.encType,n,null),rl(l,t,"method",n.method,n,null),rl(l,t,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(a);break}e=xn(""+e),l.setAttribute(a,e);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=a}}break;case"multiple":l.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":l.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){l.removeAttribute("xlink:href");break}a=xn(""+e),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""+e):l.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,""):l.removeAttribute(a);break;case"capture":case"download":e===!0?l.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(a,e):l.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?l.setAttribute(a,e):l.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?l.removeAttribute(a):l.setAttribute(a,e);break;case"popover":W("beforetoggle",l),W("toggle",l),Nn(l,"popover",e);break;case"xlinkActuate":xt(l,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":xt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":xt(l,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":xt(l,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":xt(l,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":xt(l,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":xt(l,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":xt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":xt(l,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Nn(l,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=id.get(a)||a,Nn(l,a,e))}}function Ls(l,t,a,e,n,i){switch(a){case"style":qc(l,e,i);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=a}}break;case"children":typeof e=="string"?Wa(l,e):(typeof e=="number"||typeof e=="bigint")&&Wa(l,""+e);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dc.hasOwnProperty(a))l:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=l[Wl]||null,i=i!=null?i[a]:null,typeof i=="function"&&l.removeEventListener(t,i,n),typeof e=="function")){typeof i!="function"&&i!==null&&(a in l?l[a]=null:l.hasAttribute(a)&&l.removeAttribute(a)),l.addEventListener(t,e,n);break l}a in l?l[a]=e:e===!0?l.setAttribute(a,""):Nn(l,a,e)}}}function Zl(l,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var e=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:rl(l,t,i,u,a,null)}}n&&rl(l,t,"srcSet",a.srcSet,a,null),e&&rl(l,t,"src",a.src,a,null);return;case"input":W("invalid",l);var s=i=u=n=null,c=null,h=null;for(e in a)if(a.hasOwnProperty(e)){var b=a[e];if(b!=null)switch(e){case"name":n=b;break;case"type":u=b;break;case"checked":c=b;break;case"defaultChecked":h=b;break;case"value":i=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(g(137,t));break;default:rl(l,t,e,b,a,null)}}Uc(l,i,s,c,h,u,n,!1);return;case"select":W("invalid",l),e=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":e=s;default:rl(l,t,n,s,a,null)}t=i,a=u,l.multiple=!!e,t!=null?ka(l,!!e,t,!1):a!=null&&ka(l,!!e,a,!0);return;case"textarea":W("invalid",l),i=n=e=null;for(u in a)if(a.hasOwnProperty(u)&&(s=a[u],s!=null))switch(u){case"value":e=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(g(91));break;default:rl(l,t,u,s,a,null)}Rc(l,e,n,i);return;case"option":for(c in a)if(a.hasOwnProperty(c)&&(e=a[c],e!=null))switch(c){case"selected":l.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:rl(l,t,c,e,a,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(e=0;e<dn.length;e++)W(dn[e],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(e=a[h],e!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:rl(l,t,h,e,a,null)}return;default:if(nu(t)){for(b in a)a.hasOwnProperty(b)&&(e=a[b],e!==void 0&&Ls(l,t,b,e,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(e=a[s],e!=null&&rl(l,t,s,e,a,null))}function jp(l,t,a,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,s=null,c=null,h=null,b=null;for(v in a){var A=a[v];if(a.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=A;default:e.hasOwnProperty(v)||rl(l,t,v,null,e,A)}}for(var m in e){var v=e[m];if(A=a[m],e.hasOwnProperty(m)&&(v!=null||A!=null))switch(m){case"type":i=v;break;case"name":n=v;break;case"checked":h=v;break;case"defaultChecked":b=v;break;case"value":u=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(g(137,t));break;default:v!==A&&rl(l,t,m,v,e,A)}}au(l,u,s,c,h,b,i,n);return;case"select":v=u=s=m=null;for(i in a)if(c=a[i],a.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":v=c;default:e.hasOwnProperty(i)||rl(l,t,i,null,e,c)}for(n in e)if(i=e[n],c=a[n],e.hasOwnProperty(n)&&(i!=null||c!=null))switch(n){case"value":m=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==c&&rl(l,t,n,i,e,c)}t=s,a=u,e=v,m!=null?ka(l,!!a,m,!1):!!e!=!!a&&(t!=null?ka(l,!!a,t,!0):ka(l,!!a,a?[]:"",!1));return;case"textarea":v=m=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!e.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:rl(l,t,s,null,e,n)}for(u in e)if(n=e[u],i=a[u],e.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==i&&rl(l,t,u,n,e,i)}Hc(l,m,v);return;case"option":for(var H in a)if(m=a[H],a.hasOwnProperty(H)&&m!=null&&!e.hasOwnProperty(H))switch(H){case"selected":l.selected=!1;break;default:rl(l,t,H,null,e,m)}for(c in e)if(m=e[c],v=a[c],e.hasOwnProperty(c)&&m!==v&&(m!=null||v!=null))switch(c){case"selected":l.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:rl(l,t,c,m,e,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in a)m=a[G],a.hasOwnProperty(G)&&m!=null&&!e.hasOwnProperty(G)&&rl(l,t,G,null,e,m);for(h in e)if(m=e[h],v=a[h],e.hasOwnProperty(h)&&m!==v&&(m!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(g(137,t));break;default:rl(l,t,h,m,e,v)}return;default:if(nu(t)){for(var fl in a)m=a[fl],a.hasOwnProperty(fl)&&m!==void 0&&!e.hasOwnProperty(fl)&&Ls(l,t,fl,void 0,e,m);for(b in e)m=e[b],v=a[b],!e.hasOwnProperty(b)||m===v||m===void 0&&v===void 0||Ls(l,t,b,m,e,v);return}}for(var f in a)m=a[f],a.hasOwnProperty(f)&&m!=null&&!e.hasOwnProperty(f)&&rl(l,t,f,null,e,m);for(A in e)m=e[A],v=a[A],!e.hasOwnProperty(A)||m===v||m==null&&v==null||rl(l,t,A,m,e,v)}function Qf(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xp(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var n=a[e],i=n.transferSize,u=n.initiatorType,s=n.duration;if(i&&s&&Qf(u)){for(u=0,s=n.responseEnd,e+=1;e<a.length;e++){var c=a[e],h=c.startTime;if(h>s)break;var b=c.transferSize,A=c.initiatorType;b&&Qf(A)&&(c=c.responseEnd,u+=b*(c<s?1:(s-h)/(c-h)))}if(--e,t+=8*(i+u)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Vs=null,Ks=null;function Oi(l){return l.nodeType===9?l:l.ownerDocument}function Xf(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zf(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Js(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=null;function Up(){var l=window.event;return l&&l.type==="popstate"?l===$s?!1:($s=l,!0):($s=null,!1)}var Lf=typeof setTimeout=="function"?setTimeout:void 0,Hp=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,Rp=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(l){return Vf.resolve(null).then(l).catch(Bp)}:Lf;function Bp(l){setTimeout(function(){throw l})}function ya(l){return l==="head"}function Kf(l,t){var a=t,e=0;do{var n=a.nextSibling;if(l.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(e===0){l.removeChild(n),we(t);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")hn(l.ownerDocument.documentElement);else if(a==="head"){a=l.ownerDocument.head,hn(a);for(var i=a.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[je]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&hn(l.ownerDocument.body);a=n}while(a);we(t)}function Jf(l,t){var a=l;l=0;do{var e=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(l===0)break;l--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||l++;a=e}while(a)}function ks(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ks(a),lu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}l.removeChild(a)}}function qp(l,t,a,e){for(;l.nodeType===1;){var n=a;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(e){if(!l[je])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(i=l.getAttribute("rel"),i==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(i!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(i=l.getAttribute("src"),(i!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===i)return l}else return l;if(l=_t(l.nextSibling),l===null)break}return null}function Yp(l,t,a){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!a||(l=_t(l.nextSibling),l===null))return null;return l}function $f(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=_t(l.nextSibling),l===null))return null;return l}function Ws(l){return l.data==="$?"||l.data==="$~"}function Fs(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Gp(l,t){var a=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||a.readyState!=="loading")t();else{var e=function(){t(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),l._reactRetry=e}}function _t(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Is=null;function kf(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="/$"||a==="/&"){if(t===0)return _t(l.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}l=l.nextSibling}return null}function Wf(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var a=l.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return l;t--}else a!=="/$"&&a!=="/&"||t++}l=l.previousSibling}return null}function Ff(l,t,a){switch(t=Oi(a),l){case"html":if(l=t.documentElement,!l)throw Error(g(452));return l;case"head":if(l=t.head,!l)throw Error(g(453));return l;case"body":if(l=t.body,!l)throw Error(g(454));return l;default:throw Error(g(451))}}function hn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);lu(l)}var At=new Map,If=new Set;function Di(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=O.d;O.d={f:Qp,r:Xp,D:Zp,C:Lp,L:Vp,m:Kp,X:$p,S:Jp,M:kp};function Qp(){var l=Wt.f(),t=Si();return l||t}function Xp(l){var t=Ka(l);t!==null&&t.tag===5&&t.type==="form"?pr(t):Wt.r(l)}var Te=typeof document>"u"?null:document;function Pf(l,t,a){var e=Te;if(e&&typeof t=="string"&&t){var n=ht(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),If.has(n)||(If.add(n),l={rel:l,crossOrigin:a,href:t},e.querySelector(n)===null&&(t=e.createElement("link"),Zl(t,"link",l),Bl(t),e.head.appendChild(t)))}}function Zp(l){Wt.D(l),Pf("dns-prefetch",l,null)}function Lp(l,t){Wt.C(l,t),Pf("preconnect",l,t)}function Vp(l,t,a){Wt.L(l,t,a);var e=Te;if(e&&l&&t){var n='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ht(a.imageSizes)+'"]')):n+='[href="'+ht(l)+'"]';var i=n;switch(t){case"style":i=Ee(l);break;case"script":i=Me(l)}At.has(i)||(l=x({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:l,as:t},a),At.set(i,l),e.querySelector(n)!==null||t==="style"&&e.querySelector(mn(i))||t==="script"&&e.querySelector(yn(i))||(t=e.createElement("link"),Zl(t,"link",l),Bl(t),e.head.appendChild(t)))}}function Kp(l,t){Wt.m(l,t);var a=Te;if(a&&l){var e=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ht(e)+'"][href="'+ht(l)+'"]',i=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Me(l)}if(!At.has(i)&&(l=x({rel:"modulepreload",href:l},t),At.set(i,l),a.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yn(i)))return}e=a.createElement("link"),Zl(e,"link",l),Bl(e),a.head.appendChild(e)}}}function Jp(l,t,a){Wt.S(l,t,a);var e=Te;if(e&&l){var n=Ja(e).hoistableStyles,i=Ee(l);t=t||"default";var u=n.get(i);if(!u){var s={loading:0,preload:null};if(u=e.querySelector(mn(i)))s.loading=5;else{l=x({rel:"stylesheet",href:l,"data-precedence":t},a),(a=At.get(i))&&Ps(l,a);var c=u=e.createElement("link");Bl(c),Zl(c,"link",l),c._p=new Promise(function(h,b){c.onload=h,c.onerror=b}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Ni(u,t,e)}u={type:"stylesheet",instance:u,count:1,state:s},n.set(i,u)}}}function $p(l,t){Wt.X(l,t);var a=Te;if(a&&l){var e=Ja(a).hoistableScripts,n=Me(l),i=e.get(n);i||(i=a.querySelector(yn(n)),i||(l=x({src:l,async:!0},t),(t=At.get(n))&&lc(l,t),i=a.createElement("script"),Bl(i),Zl(i,"link",l),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(n,i))}}function kp(l,t){Wt.M(l,t);var a=Te;if(a&&l){var e=Ja(a).hoistableScripts,n=Me(l),i=e.get(n);i||(i=a.querySelector(yn(n)),i||(l=x({src:l,async:!0,type:"module"},t),(t=At.get(n))&&lc(l,t),i=a.createElement("script"),Bl(i),Zl(i,"link",l),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(n,i))}}function lg(l,t,a,e){var n=(n=$.current)?Di(n):null;if(!n)throw Error(g(446));switch(l){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Ee(a.href),a=Ja(n).hoistableStyles,e=a.get(t),e||(e={type:"style",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){l=Ee(a.href);var i=Ja(n).hoistableStyles,u=i.get(l);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(l,u),(i=n.querySelector(mn(l)))&&!i._p&&(u.instance=i,u.state.loading=5),At.has(l)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},At.set(l,a),i||Wp(n,l,a,u.state))),t&&e===null)throw Error(g(528,""));return u}if(t&&e!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Me(a),a=Ja(n).hoistableScripts,e=a.get(t),e||(e={type:"script",instance:null,count:0,state:null},a.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,l))}}function Ee(l){return'href="'+ht(l)+'"'}function mn(l){return'link[rel="stylesheet"]['+l+"]"}function tg(l){return x({},l,{"data-precedence":l.precedence,precedence:null})}function Wp(l,t,a,e){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=l.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),Zl(t,"link",a),Bl(t),l.head.appendChild(t))}function Me(l){return'[src="'+ht(l)+'"]'}function yn(l){return"script[async]"+l}function ag(l,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var e=l.querySelector('style[data-href~="'+ht(a.href)+'"]');if(e)return t.instance=e,Bl(e),e;var n=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(l.ownerDocument||l).createElement("style"),Bl(e),Zl(e,"style",n),Ni(e,a.precedence,l),t.instance=e;case"stylesheet":n=Ee(a.href);var i=l.querySelector(mn(n));if(i)return t.state.loading|=4,t.instance=i,Bl(i),i;e=tg(a),(n=At.get(n))&&Ps(e,n),i=(l.ownerDocument||l).createElement("link"),Bl(i);var u=i;return u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Zl(i,"link",e),t.state.loading|=4,Ni(i,a.precedence,l),t.instance=i;case"script":return i=Me(a.src),(n=l.querySelector(yn(i)))?(t.instance=n,Bl(n),n):(e=a,(n=At.get(i))&&(e=x({},a),lc(e,n)),l=l.ownerDocument||l,n=l.createElement("script"),Bl(n),Zl(n,"link",e),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,Ni(e,a.precedence,l));return t.instance}function Ni(l,t,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,i=n,u=0;u<e.length;u++){var s=e[u];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(l,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(l,t.firstChild))}function Ps(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function lc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Ci=null;function eg(l,t,a){if(Ci===null){var e=new Map,n=Ci=new Map;n.set(a,e)}else n=Ci,e=n.get(a),e||(e=new Map,n.set(a,e));if(e.has(l))return e;for(e.set(l,null),a=a.getElementsByTagName(l),n=0;n<a.length;n++){var i=a[n];if(!(i[je]||i[Yl]||l==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=l+u;var s=e.get(u);s?s.push(i):e.set(u,[i])}}return e}function ng(l,t,a){l=l.ownerDocument||l,l.head.insertBefore(a,t==="title"?l.querySelector("head > title"):null)}function Fp(l,t,a){if(a===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ig(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Ip(l,t,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Ee(e.href),i=t.querySelector(mn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ji.bind(l),t.then(l,l)),a.state.loading|=4,a.instance=i,Bl(i);return}i=t.ownerDocument||t,e=tg(e),(n=At.get(n))&&Ps(e,n),i=i.createElement("link"),Bl(i);var u=i;u._p=new Promise(function(s,c){u.onload=s,u.onerror=c}),Zl(i,"link",e),a.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=ji.bind(l),t.addEventListener("load",a),t.addEventListener("error",a))}}var tc=0;function Pp(l,t){return l.stylesheets&&l.count===0&&Ui(l,l.stylesheets),0<l.count||0<l.imgCount?function(a){var e=setTimeout(function(){if(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend){var i=l.unsuspend;l.unsuspend=null,i()}},6e4+t);0<l.imgBytes&&tc===0&&(tc=62500*xp());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend)){var i=l.unsuspend;l.unsuspend=null,i()}},(l.imgBytes>tc?50:800)+t);return l.unsuspend=a,function(){l.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function ji(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var xi=null;function Ui(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,xi=new Map,t.forEach(l0,l),xi=null,ji.call(l))}function l0(l,t){if(!(t.state.loading&4)){var a=xi.get(l);if(a)var e=a.get(null);else{a=new Map,xi.set(l,a);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),e=u)}e&&a.set(null,e)}n=t.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||e,i===e&&a.set(null,n),a.set(u,n),this.count++,e=ji.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),i?i.parentNode.insertBefore(n,i.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var vn={$$typeof:sl,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function t0(l,t,a,e,n,i,u,s,c){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ug(l,t,a,e,n,i,u,s,c,h,b,A){return l=new t0(l,t,a,u,c,h,b,A,s),t=1,i===!0&&(t|=24),i=st(3,null,null,t),l.current=i,i.stateNode=l,t=Uu(),t.refCount++,l.pooledCache=t,t.refCount++,i.memoizedState={element:e,isDehydrated:a,cache:t},qu(i),l}function sg(l){return l?(l=ee,l):ee}function cg(l,t,a,e,n,i){n=sg(n),e.context===null?e.context=n:e.pendingContext=n,e=ua(t),e.payload={element:a},i=i===void 0?null:i,i!==null&&(e.callback=i),a=sa(l,e,t),a!==null&&(at(a,l,t),ke(a,l,t))}function og(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var a=l.retryLane;l.retryLane=a!==0&&a<t?a:t}}function ac(l,t){og(l,t),(l=l.alternate)&&og(l,t)}function rg(l){if(l.tag===13||l.tag===31){var t=Ca(l,67108864);t!==null&&at(t,l,67108864),ac(l,67108864)}}function fg(l){if(l.tag===13||l.tag===31){var t=gt();t=Fi(t);var a=Ca(l,t);a!==null&&at(a,l,t),ac(l,t)}}var Hi=!0;function a0(l,t,a,e){var n=S.T;S.T=null;var i=O.p;try{O.p=2,ec(l,t,a,e)}finally{O.p=i,S.T=n}}function e0(l,t,a,e){var n=S.T;S.T=null;var i=O.p;try{O.p=8,ec(l,t,a,e)}finally{O.p=i,S.T=n}}function ec(l,t,a,e){if(Hi){var n=nc(e);if(n===null)Zs(l,t,e,Ri,a),dg(l,e);else if(i0(n,l,t,a,e))e.stopPropagation();else if(dg(l,e),t&4&&-1<n0.indexOf(l)){for(;n!==null;){var i=Ka(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ma(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var c=1<<31-it(u);s.entanglements[1]|=c,u&=~c}Ct(i),(el&6)===0&&(vi=et()+500,gn(0))}}break;case 31:case 13:s=Ca(i,2),s!==null&&at(s,i,2),Si(),ac(i,2)}if(i=nc(e),i===null&&Zs(l,t,e,Ri,a),i===n)break;n=i}n!==null&&e.stopPropagation()}else Zs(l,t,e,null,a)}}function nc(l){return l=uu(l),ic(l)}var Ri=null;function ic(l){if(Ri=null,l=Va(l),l!==null){var t=j(l);if(t===null)l=null;else{var a=t.tag;if(a===13){if(l=q(t),l!==null)return l;l=null}else if(a===31){if(l=P(t),l!==null)return l;l=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ri=l,null}function gg(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zg()){case vc:return 2;case bc:return 8;case En:case Lg:return 32;case Sc:return 268435456;default:return 32}default:return 32}}var uc=!1,va=null,ba=null,Sa=null,bn=new Map,Sn=new Map,za=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dg(l,t){switch(l){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function zn(l,t,a,e,n,i){return l===null||l.nativeEvent!==i?(l={blockedOn:t,domEventName:a,eventSystemFlags:e,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Ka(t),t!==null&&rg(t)),l):(l.eventSystemFlags|=e,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function i0(l,t,a,e,n){switch(t){case"focusin":return va=zn(va,l,t,a,e,n),!0;case"dragenter":return ba=zn(ba,l,t,a,e,n),!0;case"mouseover":return Sa=zn(Sa,l,t,a,e,n),!0;case"pointerover":var i=n.pointerId;return bn.set(i,zn(bn.get(i)||null,l,t,a,e,n)),!0;case"gotpointercapture":return i=n.pointerId,Sn.set(i,zn(Sn.get(i)||null,l,t,a,e,n)),!0}return!1}function pg(l){var t=Va(l.target);if(t!==null){var a=j(t);if(a!==null){if(t=a.tag,t===13){if(t=q(a),t!==null){l.blockedOn=t,Mc(l.priority,function(){fg(a)});return}}else if(t===31){if(t=P(a),t!==null){l.blockedOn=t,Mc(l.priority,function(){fg(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){l.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Bi(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var a=nc(l.nativeEvent);if(a===null){a=l.nativeEvent;var e=new a.constructor(a.type,a);iu=e,a.target.dispatchEvent(e),iu=null}else return t=Ka(a),t!==null&&rg(t),l.blockedOn=a,!1;t.shift()}return!0}function hg(l,t,a){Bi(l)&&a.delete(t)}function u0(){uc=!1,va!==null&&Bi(va)&&(va=null),ba!==null&&Bi(ba)&&(ba=null),Sa!==null&&Bi(Sa)&&(Sa=null),bn.forEach(hg),Sn.forEach(hg)}function qi(l,t){l.blockedOn===t&&(l.blockedOn=null,uc||(uc=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,u0)))}var Yi=null;function mg(l){Yi!==l&&(Yi=l,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){Yi===l&&(Yi=null);for(var t=0;t<l.length;t+=3){var a=l[t],e=l[t+1],n=l[t+2];if(typeof e!="function"){if(ic(e||a)===null)continue;break}var i=Ka(a);i!==null&&(l.splice(t,3),t-=3,ns(i,{pending:!0,data:n,method:a.method,action:e},e,n))}}))}function we(l){function t(c){return qi(c,l)}va!==null&&qi(va,l),ba!==null&&qi(ba,l),Sa!==null&&qi(Sa,l),bn.forEach(t),Sn.forEach(t);for(var a=0;a<za.length;a++){var e=za[a];e.blockedOn===l&&(e.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)pg(a),a.blockedOn===null&&za.shift();if(a=(l.ownerDocument||l).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var n=a[e],i=a[e+1],u=n[Wl]||null;if(typeof i=="function")u||mg(a);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[Wl]||null)s=u.formAction;else if(ic(n)!==null)continue}else s=u.action;typeof s=="function"?a[e+1]=s:(a.splice(e,3),e-=3),mg(a)}}}function yg(){function l(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function sc(l){this._internalRoot=l}Gi.prototype.render=sc.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,e=gt();cg(a,e,l,t,null,null)},Gi.prototype.unmount=sc.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;cg(l.current,2,null,l,null,null),Si(),t[La]=null}};function Gi(l){this._internalRoot=l}Gi.prototype.unstable_scheduleHydration=function(l){if(l){var t=Ec();l={blockedOn:null,target:l,priority:t};for(var a=0;a<za.length&&t!==0&&t<za[a].priority;a++);za.splice(a,0,l),a===0&&pg(l)}};var vg=w.version;if(vg!=="19.2.3")throw Error(g(527,vg,"19.2.3"));O.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(g(188)):(l=Object.keys(l).join(","),Error(g(268,l)));return l=_(t),l=l!==null?D(l):null,l=l===null?null:l.stateNode,l};var s0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qi.isDisabled&&Qi.supportsFiber)try{De=Qi.inject(s0),nt=Qi}catch{}}return An.createRoot=function(l,t){if(!M(l))throw Error(g(299));var a=!1,e="",n=Tr,i=Er,u=Mr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=ug(l,1,!1,null,null,a,e,null,n,i,u,yg),l[La]=t.current,Xs(l),new sc(t)},An.hydrateRoot=function(l,t,a){if(!M(l))throw Error(g(299));var e=!1,n="",i=Tr,u=Er,s=Mr,c=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(c=a.formState)),t=ug(l,1,!0,t,a??null,e,n,c,i,u,s,yg),t.context=sg(null),a=t.current,e=gt(),e=Fi(e),n=ua(e),n.callback=null,sa(a,n,e),a=e,t.current.lanes=a,Ce(t,a),Ct(t),l[La]=t.current,Xs(l),new Gi(t)},An.version="19.2.3",An}var Og;function y0(){if(Og)return rc.exports;Og=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(w){console.error(w)}}return y(),rc.exports=m0(),rc.exports}var v0=y0();const b0=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S0=y=>y.replace(/^([A-Z])|[\s-_]+(\w)/g,(w,C,g)=>g?g.toUpperCase():C.toLowerCase()),Dg=y=>{const w=S0(y);return w.charAt(0).toUpperCase()+w.slice(1)},Bg=(...y)=>y.filter((w,C,g)=>!!w&&w.trim()!==""&&g.indexOf(w)===C).join(" ").trim(),z0=y=>{for(const w in y)if(w.startsWith("aria-")||w==="role"||w==="title")return!0};var _0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const A0=zl.forwardRef(({color:y="currentColor",size:w=24,strokeWidth:C=2,absoluteStrokeWidth:g,className:M="",children:j,iconNode:q,...P},U)=>zl.createElement("svg",{ref:U,..._0,width:w,height:w,stroke:y,strokeWidth:g?Number(C)*24/Number(w):C,className:Bg("lucide",M),...!j&&!z0(P)&&{"aria-hidden":"true"},...P},[...q.map(([_,D])=>zl.createElement(_,D)),...Array.isArray(j)?j:[j]]));const Aa=(y,w)=>{const C=zl.forwardRef(({className:g,...M},j)=>zl.createElement(A0,{ref:j,iconNode:w,className:Bg(`lucide-${b0(Dg(y))}`,`lucide-${y}`,g),...M}));return C.displayName=Dg(y),C};const T0=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],E0=Aa("bird",T0);const M0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],w0=Aa("circle",M0);const O0=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],D0=Aa("key",O0);const N0=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],C0=Aa("music",N0);const j0=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],x0=Aa("star",j0);const U0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],H0=Aa("volume-2",U0);const R0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],B0=Aa("volume-x",R0);const q0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qg=Aa("x",q0);function Y0({displayName:y,onConfirm:w,onCancel:C,onClose:g}){return d.jsx("div",{className:"modal-overlay",onClick:g,children:d.jsx("div",{className:"modal-content",onClick:M=>M.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:g,children:d.jsx(qg,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[y,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:w,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",y]}),d.jsx("button",{onClick:C,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function Yg(){const y=localStorage.getItem("openedWindows");if(!y)return new Set;try{const w=JSON.parse(y);return new Set(w)}catch(w){return console.error("Failed to parse opened windows:",w),new Set}}function G0(y){const w=Yg();return w.add(y),localStorage.setItem("openedWindows",JSON.stringify([...w])),w}function Ng(){localStorage.removeItem("openedWindows")}function Q0(){localStorage.removeItem("adventCalendarUser")}const Cg=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function X0({userName:y,onUserSelect:w}){const[C]=zl.useState(()=>Cg[Math.floor(Math.random()*Cg.length)]),[g,M]=zl.useState(!1),j=y==="Tanya"?"Таня":y==="Zebra"?"Зёбра":"неведомый гость",q=()=>{M(!0)},P=()=>{Q0(),Ng(),M(!1),window.location.reload()},U=()=>{Ng(),M(!1)},_=()=>{M(!1)};return y?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[C,","," ",d.jsx("span",{className:"user-name clickable",onClick:q,title:`А точно ли я ${j}?..`,children:j}),"!"]})}),g&&(y==="Tanya"||y==="Zebra")&&d.jsx(Y0,{displayName:j,onConfirm:P,onCancel:U,onClose:_})]}):d.jsxs("div",{className:"user-selection",children:[d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>w("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>w("Zebra"),children:"Зёбра"})]})]})}function Z0(){const[y,w]=zl.useState([]),[C,g]=zl.useState([]);return zl.useEffect(()=>{const M=U=>_=>{const D=Math.sin(U*9301+_*49297)*43758.5453;return D-Math.floor(D)},j=Array.from({length:60}).map((U,_)=>{const D=M(_+1);return{left:`${Math.floor(D(1)*100)}%`,top:`${Math.floor(D(2)*70)}%`,animationDelay:`${(D(3)*3).toFixed(2)}s`,opacity:+(.3+D(4)*.7).toFixed(2)}}),q=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,_)=>{const D=M(100+_);let x=30+Math.floor(D(1)*60),K=Math.max(10,Math.floor(D(2)*30));const yl=q[_%q.length],vl=+(.35+D(3)*.55).toFixed(2),_l=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(D(4)*30)}% ${30+Math.floor(D(5)*30)}%`,bl=40+Math.floor(D(6)*40),Ml=Math.floor(D(7)*20),sl=-20+Math.floor(D(8)*140);let Al=5+Math.floor(D(9)*40);return _===0&&(Al=Math.max(2,Al-8),x=Math.max(20,Math.floor(x*.85)),K=Math.max(8,Math.floor(K*.8))),{left:`${sl}%`,top:`${Al}%`,width:`${x}vw`,height:`${K}vh`,opacity:vl,color:_l,borderRadius:Ul,duration:bl,delay:Ml}});window.requestAnimationFrame(()=>{w(j),g(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:y.map((M,j)=>d.jsx("div",{className:"star",style:{left:M.left,top:M.top,animationDelay:M.animationDelay,opacity:M.opacity}},j))})]}),d.jsx("div",{className:"layer layer-clouds",children:C.map((M,j)=>d.jsx("div",{className:`cloud cloud-${j+1}`,style:{position:"absolute",left:M.left,top:M.top,width:M.width,height:M.height,background:M.color,opacity:M.opacity,borderRadius:M.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${M.duration}s linear ${M.delay}s infinite`}},j))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((M,j)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${M},300 ${M-20},250 ${M-15},250 ${M-30},200 ${M-25},200 ${M-40},150 ${M+40},150 ${M+25},200 ${M+30},200 ${M+15},250 ${M+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:M-5,y:"280",width:"10",height:"20",fill:"#111827"})]},j))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const L0=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium"],V0=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square"],jg=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window"],xg=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Ug=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Hg=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Rg=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],K0=y=>{switch(y){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(w0,{className:"door-handle ring",size:12});case"star":return d.jsx(x0,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},J0=y=>{if(y===0)return null;const w=y===4||y===6?2:4,C=y===4?2:y===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${w}, 1fr)`,gridTemplateRows:`repeat(${C}, 1fr)`},children:Array.from({length:y}).map((g,M)=>d.jsx("div",{className:"window-pane"},M))})},$0=y=>{if(y==="none")return null;switch(y){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},k0=y=>{if(y==="none")return null;switch(y){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function W0({windowNumber:y,isActive:w,isOpened:C,isExactMatch:g,onClick:M}){const j=zl.useRef(null),q=y===17,P=()=>{q&&j.current&&(j.current.currentTime=0,j.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},U=L0[y-1],_=V0[y-1],D=w&&!C||w&&g?"window-glow-intense":"",K=new Set([11,6,12,16,25]).has(y),yl=K?"window-round":_,_l=jg[y-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<y;Sl++)jg[Sl]==="door"?Ul++:bl++;const Ml=xg[(Ul-1)%xg.length],sl=Ug[(bl-1)%Ug.length],Al=Hg[(Ul-1)%Hg.length],Ll=Rg[(bl-1)%Rg.length];return d.jsx("div",{className:`calendar-window ${U} ${yl} ${D} ${C?"window-opened":""} ${w?"window-active":"window-inactive"}`,onClick:M,onMouseEnter:P,children:_l?d.jsxs("div",{className:`door-element ${Ml.type}`,children:[$0(Al),d.jsx("div",{className:`door-frame frame-${Ml.frame}`,children:d.jsxs("div",{className:`door-panel wood-${Ml.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[Ml.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[K0(Ml.handle),Ml.hasKeyhole&&d.jsx(D0,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:y})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${U}`,children:[k0(Ll),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${sl.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[J0(sl.panes),sl.shape==="arched"&&d.jsx("div",{className:"window-arch"}),q&&d.jsx(E0,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:y})]}),sl.hasSill&&d.jsx("div",{className:"window-sill",children:sl.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function F0({windowNumber:y,message:w,onClose:C}){return d.jsx("div",{className:"modal-overlay",onClick:C,children:d.jsx("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:C,children:d.jsx(qg,{size:24})}),y!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",y]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:w}})]})})})}function Xi(y){const w=new Date(Date.UTC(2025,11,19,21,0,0,0)),C=y-1;return new Date(w.getTime()+C*24*60*60*1e3)}function Zi(y,w){return w.getTime()>=y.getTime()}function pc(y,w){const C=new Date(y);C.setUTCHours(0,0,0,0);const g=new Date(w);return g.setUTCHours(0,0,0,0),C.getTime()===g.getTime()}const I0="/advent/assets/muerte-DfSvC3Z-.jpg",P0="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",ah="/advent/assets/Ofrenda-DDd9dlHK.jpg",eh="/advent/assets/kolumbia-DUKl5Drs.webp",nh="/advent/assets/kolumb2--JWazZNY.webp",ih="/advent/assets/melhior-5oqVeQRz.webp",uh="/advent/assets/shir-CPxmcAyu.jpg",sh="/advent/assets/markes-DHTR6R5s.jpg",ch="/advent/assets/tolkin-Bkb1qdyy.jpg",oh="/advent/assets/tolkin1-Gt7VHXrl.jpg",rh="/advent/assets/berry-BayIKnFN.jpg",fh="/advent/assets/berry1-aZtyDiG8.jpg",gh="/advent/assets/gvatemala1-C3fdq1S5.jpg",dh="/advent/assets/graves-B4Ep0a2x.jpg",ph="/advent/assets/carpet1-BHoBEQUm.jpg",hh="/advent/assets/airsnakes-BtpaN7a0.jpg",mh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",vh="/advent/assets/brazil1-C1nzNzga.webp",bh="/advent/assets/ethiopia-CfI92xpA.jpg",Sh="/advent/assets/goats-B1iHvHcl.jpg",zh="/advent/assets/rabanda-ClmJ6Exb.jpg",_h="/advent/assets/honduras-DTj2TRgE.jpg",Ah="/advent/assets/honduras1-BfVuI_LD.jpg",Th="/advent/assets/resp-DBSDT0A7.png",Eh="/advent/assets/cicoriy-DL-J_EKv.webp",Mh="/advent/assets/carob-DDo_E6jz.jpg",wh="/advent/assets/tonka-CaSKsR3p.webp",Oh="/advent/assets/kardamon-D-LlmV-v.webp",Dh="/advent/assets/mem1-Coiz1JZ3.jpg",Nh="/advent/assets/cafe-DrSeHG9j.jpg",Ch="/advent/assets/yerevan1-0r9N0UnH.jpg",jh="/advent/assets/yerevan2-fQnNyY8p.jpg",xh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Hh="/advent/assets/bears-BwIhEuov.jpg",Rh="/advent/assets/ararat-DAhBMtll.jpg",Bh="/advent/assets/jazzve-DliHyYYl.jpg",qh="/advent/assets/abc-C__8usP9.webp",Yh="/advent/assets/noy-KD54xzv8.jpg",Gh="/advent/assets/poss-LSCreopJ.jpg",Qh="/advent/assets/poss1-CPSySb8a.jpg",Xh="/advent/assets/poss2-4TAHhBM7.jpg",Zh="/advent/assets/poss3-BBe7PtjI.jpg",Lh="/advent/assets/poss4-B0yE7kHZ.jpg",Vh="/advent/assets/poss5-DtHf0aUR.jpg",Kh="/advent/assets/possa-mom-BPlrTPcT.jpg",Jh="/advent/assets/possa-mom1-D9ySRpWd.jpg",$h="/advent/assets/poss-and-oposs-DDSg4YaG.webp",kh="/advent/assets/possaKnowl-CYkQIhVz.jpg",Wh="/advent/assets/thief-CoIDv1iT.jpg",Fh="/advent/assets/smile-1-5jdl68.jpg",Ih="/advent/assets/merch-DdoKdpQb.jpg",Ph="/advent/assets/merch1-CtZos-AO.jpg",E={muerte:I0,katrina:P0,pink:lh,rese:th,Ofrenda:ah,kolumb2:nh,kolumbia:eh,melhior:ih,shir:uh,markes:sh,tolkin:ch,tolkin1:oh,berries:rh,berries1:fh,gvatemala1:gh,graves:dh,carpet1:ph,airsnake2:hh,fish:mh,fish1:yh,brazil1:vh,ethiopia:bh,goats:Sh,rabanda:zh,honduras:_h,honduras1:Ah,resp:Th,cicoriy:Eh,carob:Mh,tonka:wh,kardamon:Oh,mem:Dh,cafe:Nh,yerevan1:Ch,yerevan2:jh,yerevan3:xh,lion:Uh,bears:Hh,ararat:Rh,yazzve:Bh,abc:qh,noy:Yh,poss:Gh,possaMom:Kh,possaMom1:Jh,possOrOposs:$h,possaKnowl:kh,poss1:Qh,poss2:Xh,poss3:Zh,poss4:Lh,poss5:Vh,thief:Wh,smile:Fh,merch:Ih,merch1:Ph},lm=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${E.muerte}" />
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
<img src="${E.Ofrenda}" />
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
       <img src="${E.katrina}" />
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
      <img src="${E.muerte}" />
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

      <img src="${E.Ofrenda}" />

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
       <img src="${E.katrina}" />
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
  <img src="${E.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${E.rese}" />
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
  <img src="${E.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${E.rese}" />
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
    <img src="${E.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение — ведь Baggins = фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название! ☕🎉</p>
    <img src="${E.tolkin}" />
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
    <img src="${E.melhior}" />
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
      <img src="${E.tolkin1}" />
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
    <img src="${E.kolumbia}" />
    <p><strong>География:</strong> Анды, высота 1200-2000 м, вулканическая почва, два сезона дождей = урожай круглый год!</p>
    
    <p><strong>Вкус:</strong> Сбалансированный, средняя кислотность, карамель, орехи, чистый профиль. <strong>"Безопасный выбор"</strong> — почти всегда вкусно!</p>
    
    <p><strong>100% Арабика:</strong> Колумбия не выращивает робусту по закону! Только арабика.</p>
    
    <h3>Габриэль Гарсиа Маркес и кофе ☕📖</h3>
    <p><strong>Габо</strong> (как его называли в Колумбии) родился в <strong>Аракатаке</strong> — маленьком городке в зоне банановых плантаций. Но кофе был везде!</p>
    <img src="${E.markes}" />
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
    <img src="${E.kolumb2}" />
    <p>Качественное зерно → даже без кофеина сохраняется вкус!</p>
    
    <h3>Мельхиоровая ложечка 🥄✨</h3>
    <p><strong>Мельхиор</strong> — сплав меди + никель. В СССР = "народное серебро" (дешевле настоящего, но красиво!).</p>
    <img src="${E.melhior}" />
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
    <img src="${E.gvatemala1}" />
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
    <img src="${E.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${E.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее Зёбры и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${E.carpet1}" />
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
    <img src="${E.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${E.berries1}" />
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
    <img src="${E.gvatemala1}" />
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
    <img src="${E.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${E.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее тебя и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${E.carpet1}" />
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
    <img src="${E.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${E.berries1}" />
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
    <img src="${E.fish}" />
    
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

    <img src="${E.fish1}" />
    
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

    <img src="${E.brazil1}" />
    
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
    <img src="${E.ethiopia}" />
    <p><strong>Легенда Калди (IX век):</strong></p>
    <ul>
      <li>Пастух Калди заметил: его козы ели красные ягоды → танцевали всю ночь!</li>
      <li>Монахи попробовали → не спали на молитвах</li>
      <li>Сначала сожгли как "дьявольские ягоды"</li>
      <li>Но запах был так хорош, что решили заваривать!</li>
    </ul>
    <p>Между прочим, есть фотопруф:</p>
    <img src="${E.goats}" />
    
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
<img src="${E.rabanda}" />
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
    <img src="${E.fish}" />
    
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

    <img src="${E.fish1}" />
    
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

    <img src="${E.brazil1}" />
    
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
    <img src="${E.rabanda}" />

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
    <img src="${E.honduras}" />
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
    <img src="${E.resp}" />
    
    <p><strong>6 кофейных регионов:</strong></p>
    <ul>
      <li><strong>Copán</strong> — западный, у границы с Гватемалой, шоколад + карамель.</li>
      <li><strong>Opalaca</strong> — высокогорный, сбалансированный.</li>
      <li><strong>Montecillos</strong> — центральный, фруктовый, цитрусовый.</li>
      <li><strong>Comayagua</strong> — винная кислотность.</li>
      <li><strong>Agalta</strong> — восточный, тропические фрукты.</li>
      <li><strong>El Paraíso</strong> — у границы с Никарагуа, сладкий, мягкий.</li>
    </ul>
    <img src="${E.honduras1}" />
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
    <img src="${E.mem}" />
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
    <img src="${E.cicoriy}" />
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
    <img src="${E.cafe}" />
    
    <p><strong>Вкус:</strong> Древесный, ореховый, землистый. Вяжущий (танины!).</p>
    
    <p><strong>Проблема:</strong> Нужно вымачивать жёлуди (убрать танины), иначе горько и токсично.</p>
    
    <h4>4. Кэроб — шоколадный заменитель 🍫</h4>
    <p><strong>Что это:</strong> Порошок из стручков рожкового дерева (Средиземноморье).</p>
    <img src="${E.carob}" />
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
    <img src="${E.tonka}" />
    <p><strong>⚠️ Важно:</strong> Содержат кумарин (в больших дозах токсичен). В США запрещены в еде с 1954! В Европе разрешены в микродозах. В твоём стике — безопасная доза!</p>
    
    <h4>7. Зелёный кардамон — королева специй 👑</h4>
    <p><strong>Что это:</strong> Специя из семейства имбирных (Индия).</p>
    <img src="${E.kardamon}" />
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
    <img src="${E.mem}" />
  `},{day:7,date:"2025-12-26",tanya_gift:"Армянский детский растворимый кофе",zebra_gift:"Армянский детский растворимый кофе",tanya_bonus:"Зефир в виде кошачьей лапки",zebra_bonus:"Зефир в виде кошачьей лапки",title:"Ереван — город, в который я влюбилась",tanya_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${E.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${E.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${E.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${E.bears}" />
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
    <img src="${E.yazzve}" />
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
    <img src="${E.ararat}" />
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
    <img src="${E.abc}" />
    
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
    <img src="${E.noy}" />
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
<img src="${E.yerevan3}" />
`,zebra_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${E.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${E.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${E.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${E.bears}" />
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
    <img src="${E.yazzve}" />
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
    <img src="${E.ararat}" />
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
    <img src="${E.abc}" />
    
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
    <img src="${E.noy}" />
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
<img src="${E.yerevan3}" />
`},{day:8,date:"2025-12-27",tanya_gift:'Какао "Опоссум" (пьёт и больше не орёт)',zebra_gift:'Какао "Опоссум" (пьёт и больше не орёт)',tanya_bonus:"Маршмеллоу (маленькие)",zebra_bonus:"Маршмеллоу (маленькие)",title:"Опоссумы, какао и философия",tanya_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${E.possaMom}" />
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
    <img src="${E.smile}" />
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
    <img src="${E.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${E.possOrOposs}" />
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
      <img src="${E.poss}" />
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
    <img src="${E.thief}" />

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
<img src="${E.possaKnowl}" />
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
<img src="${E.merch1}" />
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
      <img src="${E.poss1}" />
      <img src="${E.poss2}" />
      <img src="${E.poss3}" />
      <img src="${E.poss4}" />
      <img src="${E.poss5}" />
      <img src="${E.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `,zebra_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${E.possaMom}" />
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
    <img src="${E.smile}" />
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
    <img src="${E.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${E.possOrOposs}" />
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
      <img src="${E.poss}" />
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
    <img src="${E.thief}" />

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
<img src="${E.possaKnowl}" />
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
<img src="${E.merch1}" />
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
      <img src="${E.poss1}" />
      <img src="${E.poss2}" />
      <img src="${E.poss3}" />
      <img src="${E.poss4}" />
      <img src="${E.poss5}" />
      <img src="${E.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `},{day:9,date:"2025-12-28",tanya_gift:"Чай ромашковый",zebra_gift:"Чай ромашковый",tanya_bonus:"Твикс имбирный",zebra_bonus:"Твикс имбирный",title:"Ромашковый чай за 1000 рублей",tanya_message:`
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
    `},{day:10,date:"2025-12-29",tanya_gift:"Сырный 3в1",zebra_gift:"Сырный 3в1 (х2)",tanya_bonus:"Пастила кофе-алкоголь",zebra_bonus:"Пастила кофе-алкоголь (х2)",title:"День 9",tanya_message:"<p>Подарок: Сырный 3в1</p><p>Бонус: Пастила кофе-алкоголь</p>",zebra_message:"<p>Подарок: Сырный 3в1 (х2)</p><p>Бонус: Пастила кофе-алкоголь (х2)</p>"},{day:11,date:"2025-12-30",tanya_gift:"Лавандовый 3в1",zebra_gift:"Лавандовый 3в1 (х2)",tanya_bonus:"Кофейная свечка",zebra_bonus:"Кофейная свечка (х2)",title:"День 10",tanya_message:"<p>Подарок: Лавандовый 3в1</p><p>Бонус: Кофейная свечка</p>",zebra_message:"<p>Подарок: Лавандовый 3в1 (х2)</p><p>Бонус: Кофейная свечка (х2)</p>"},{day:12,date:"2025-12-31",tanya_gift:"Ванильный 3в1",zebra_gift:"Ванильный 3в1 (х2)",tanya_bonus:"Кофейная маска",zebra_bonus:"Кофейная маска (х2)",title:"День 11",tanya_message:"<p>Подарок: Ванильный 3в1</p><p>Бонус: Кофейная маска</p>",zebra_message:"<p>Подарок: Ванильный 3в1 (х2)</p><p>Бонус: Кофейная маска (х2)</p>"},{day:13,date:"2026-01-01",tanya_gift:"Who Needs Sleep",zebra_gift:"Who Needs Sleep (х2)",tanya_bonus:"Маршмеллоу",zebra_bonus:"Маршмеллоу (х2)",title:"День 12",tanya_message:"<p>Подарок: Who Needs Sleep</p><p>Бонус: Маршмеллоу</p>",zebra_message:"<p>Подарок: Who Needs Sleep (х2)</p><p>Бонус: Маршмеллоу (х2)</p>"},{day:14,date:"2026-01-02",tanya_gift:"Dozo Coffee",zebra_gift:"Dozo Coffee (х2)",tanya_bonus:"Цветная шоколадка",zebra_bonus:"Цветная шоколадка (х2)",title:"День 13",tanya_message:"<p>Подарок: Dozo Coffee</p><p>Бонус: Цветная шоколадка</p>",zebra_message:"<p>Подарок: Dozo Coffee (х2)</p><p>Бонус: Цветная шоколадка (х2)</p>"},{day:15,date:"2026-01-03",tanya_gift:"Camera Obscura",zebra_gift:"Camera Obscura (х2)",tanya_bonus:"Сироп Острый мёд",zebra_bonus:"Сироп Острый мёд (х2)",title:"День 14",tanya_message:"<p>Подарок: Camera Obscura</p><p>Бонус: Сироп Острый мёд</p>",zebra_message:"<p>Подарок: Camera Obscura (х2)</p><p>Бонус: Сироп Острый мёд (х2)</p>"},{day:16,date:"2026-01-04",tanya_gift:"Сова-концентрат",zebra_gift:"Сова-концентрат",tanya_bonus:"Сироп Мисо-карамель",zebra_bonus:"Сироп Мисо-карамель",title:"День 15",tanya_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>",zebra_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>"},{day:17,date:"2026-01-05",tanya_gift:"Yellow Submarine",zebra_gift:"Yellow Submarine (х2)",tanya_bonus:"Протеиновое печенье",zebra_bonus:"Протеиновое печенье (х2)",title:"День 16",tanya_message:"<p>Подарок: Yellow Submarine</p><p>Бонус: Протеиновое печенье</p>",zebra_message:"<p>Подарок: Yellow Submarine (х2)</p><p>Бонус: Протеиновое печенье (х2)</p>"},{day:18,date:"2026-01-06",tanya_gift:"Турецкий Mehmet Efendi",zebra_gift:"Турецкий Mehmet Efendi (х2)",tanya_bonus:"Матча латте",zebra_bonus:"Матча латте (х2)",title:"День 17",tanya_message:"<p>Подарок: Турецкий Mehmet Efendi</p><p>Бонус: Матча латте</p>",zebra_message:"<p>Подарок: Турецкий Mehmet Efendi (х2)</p><p>Бонус: Матча латте (х2)</p>"},{day:19,date:"2026-01-07",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Шоколадная бомбочка",zebra_bonus:"Шоколадная бомбочка (х2)",title:"День 18",tanya_message:"<p>Подарок: Круиз: по-венски</p><p>Бонус: Шоколадная бомбочка</p>",zebra_message:"<p>Подарок: Круиз: по-индийски (х2)</p><p>Бонус: Шоколадная бомбочка (х2)</p>"},{day:20,date:"2026-01-08",tanya_gift:"Mitsumoto японский",zebra_gift:"Mitsumoto японский (х2)",tanya_bonus:"Рождественский чай",zebra_bonus:"Рождественский чай (х2)",title:"День 19",tanya_message:"<p>Подарок: Mitsumoto японский</p><p>Бонус: Рождественский чай</p>",zebra_message:"<p>Подарок: Mitsumoto японский (х2)</p><p>Бонус: Рождественский чай (х2)</p>"},{day:21,date:"2026-01-09",tanya_gift:"KopiCat Вьетнам",zebra_gift:"KopiCat Вьетнам (х2)",tanya_bonus:"Экзотический чай",zebra_bonus:"Экзотический чай (х2)",title:"День 20",tanya_message:"<p>Подарок: KopiCat Вьетнам</p><p>Бонус: Экзотический чай</p>",zebra_message:"<p>Подарок: KopiCat Вьетнам (х2)</p><p>Бонус: Экзотический чай (х2)</p>"},{day:22,date:"2026-01-10",tanya_gift:"Армянский 3в1",zebra_gift:"Армянский 3в1 (х2)",tanya_bonus:"Миндальный Вкусвилл",zebra_bonus:"Миндальный Вкусвилл (х2)",title:"День 21",tanya_message:"<p>Подарок: Армянский 3в1</p><p>Бонус: Миндальный Вкусвилл</p>",zebra_message:"<p>Подарок: Армянский 3в1 (х2)</p><p>Бонус: Миндальный Вкусвилл (х2)</p>"},{day:23,date:"2026-01-11",tanya_gift:"Декаф Питерский",zebra_gift:"Декаф IL DA DA MA",tanya_bonus:"Чай-книга гаданий",zebra_bonus:"Чай-книга гаданий (х2)",title:"День 22",tanya_message:"<p>Подарок: Декаф Питерский</p><p>Бонус: Чай-книга гаданий</p>",zebra_message:"<p>Подарок: Декаф IL DA DA MA</p><p>Бонус: Чай-книга гаданий (х2)</p>"},{day:24,date:"2026-01-12",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:"<p>Подарок: Декаф Гватемала</p><p>Бонус: Бэггинс кофе</p>",zebra_message:"<p>Подарок: Декаф Мексика (х2)</p><p>Бонус: Бэггинс кофе (х2)</p>"},{day:25,date:"2026-01-13",tanya_gift:"Рождественский с лошадью",zebra_gift:"Рождественский с лошадью (х2)",tanya_bonus:"Какао с опоссумом",zebra_bonus:"Какао с опоссумом (х2)",title:"День 24",tanya_message:"<p>Подарок: Рождественский с лошадью</p><p>Бонус: Какао с опоссумом</p>",zebra_message:"<p>Подарок: Рождественский с лошадью (х2)</p><p>Бонус: Какао с опоссумом (х2)</p>"},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function tm({currentDate:y,userName:w}){const[C,g]=zl.useState(()=>Yg()),[M,j]=zl.useState(null),q=D=>{const x=Xi(D);if(Zi(x,y)&&(j(D),!C.has(D))){const K=G0(D);g(K)}},P=()=>{j(null)},_=[...Array.from({length:25},(D,x)=>x+1)].sort((D,x)=>{const K=Xi(D),yl=Xi(x),vl=pc(K,y),_l=pc(yl,y),Ul=C.has(D),bl=C.has(x),Ml=Zi(K,y),sl=Zi(yl,y),Al=Ml&&!Ul,Ll=sl&&!bl,Sl=vl&&Ul,J=_l&&bl,Rl=!Ml,$l=!sl,Ft=Ul&&!vl&&Ml,dt=bl&&!_l&&sl;return Al&&!Ll?-1:!Al&&Ll?1:Al&&Ll?D-x:Sl&&!J?-1:!Sl&&J?1:Rl&&!$l?-1:!Rl&&$l?1:Rl&&$l||Ft&&dt?D-x:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:_.map(D=>{const x=Xi(D),K=Zi(x,y),yl=C.has(D),vl=pc(x,y);return d.jsx(W0,{windowNumber:D,isActive:K,isOpened:yl,isExactMatch:vl,onClick:()=>q(D)},D)})}),M!==null&&(()=>{const D=lm[M-1],x=w==="Tanya"?D.tanya_message:w==="Zebra"?D.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(F0,{windowNumber:M,message:x,onClose:P})})()]})}function am(){const[y,w]=zl.useState(!1),C=zl.useRef(null),[g,M]=zl.useState(!1);zl.useEffect(()=>{const q=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",q),q==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),M(!0))},[]),zl.useEffect(()=>{if(!g)return;const q=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),w(!0),M(!1),window.removeEventListener("pointerdown",q),window.removeEventListener("keydown",q)};return window.addEventListener("pointerdown",q,{once:!0}),window.addEventListener("keydown",q,{once:!0}),()=>{window.removeEventListener("pointerdown",q),window.removeEventListener("keydown",q)}},[g]),zl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",y,"ref=",C.current),!C.current)return;const q=C.current;if(y)console.debug("[AudioControls] calling play()"),q.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),M(!0))});else{console.debug("[AudioControls] calling pause()");try{q.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[y]);const j=()=>{const q=!y;console.debug("[AudioControls] toggleMusic ->",q),w(q),localStorage.setItem("musicEnabled",String(q))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${y?"audio-active":""}`,onClick:j,title:"Toggle Christmas Music",children:[y?d.jsx(H0,{size:20}):d.jsx(B0,{size:20}),d.jsx(C0,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:C,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:q=>console.error("[AudioControls] audio event: error",q)})]})}function em(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((y,w)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},w))})}const nm=()=>new Date;function im(){const[y,w]=zl.useState(()=>{const j=localStorage.getItem("adventCalendarUser");return j==="Tanya"||j==="Zebra"?j:(localStorage.clear(),null)}),[C,g]=zl.useState(nm),M=j=>{localStorage.clear(),w(j),localStorage.setItem("adventCalendarUser",j)};return zl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);g(U)}catch(q){console.error("Failed to fetch current date:",q),g(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx(Z0,{}),d.jsx(em,{}),d.jsx(am,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(X0,{userName:y,onUserSelect:M}),d.jsx(tm,{currentDate:C,userName:y})]})]})}v0.createRoot(document.getElementById("root")).render(d.jsx(zl.StrictMode,{children:d.jsx(im,{})}));
