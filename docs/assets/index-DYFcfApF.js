(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))g(E);new MutationObserver(E=>{for(const C of E)if(C.type==="childList")for(const B of C.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&g(B)}).observe(document,{childList:!0,subtree:!0});function N(E){const C={};return E.integrity&&(C.integrity=E.integrity),E.referrerPolicy&&(C.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?C.credentials="include":E.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function g(E){if(E.ep)return;E.ep=!0;const C=N(E);fetch(E.href,C)}})();var cc={exports:{}},_n={};var bg;function o0(){if(bg)return _n;bg=1;var y=Symbol.for("react.transitional.element"),M=Symbol.for("react.fragment");function N(g,E,C){var B=null;if(C!==void 0&&(B=""+C),E.key!==void 0&&(B=""+E.key),"key"in E){C={};for(var P in E)P!=="key"&&(C[P]=E[P])}else C=E;return E=C.ref,{$$typeof:y,type:g,key:B,ref:E!==void 0?E:null,props:C}}return _n.Fragment=M,_n.jsx=N,_n.jsxs=N,_n}var Sg;function r0(){return Sg||(Sg=1,cc.exports=o0()),cc.exports}var d=r0(),oc={exports:{}},X={};var zg;function f0(){if(zg)return X;zg=1;var y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),B=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),K=Symbol.iterator;function yl(r){return r===null||typeof r!="object"?null:(r=K&&r[K]||r["@@iterator"],typeof r=="function"?r:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ul={};function bl(r,T,O){this.props=r,this.context=T,this.refs=Ul,this.updater=O||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(r,T){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,T,"setState")},bl.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Ml(){}Ml.prototype=bl.prototype;function sl(r,T,O){this.props=r,this.context=T,this.refs=Ul,this.updater=O||vl}var Al=sl.prototype=new Ml;Al.constructor=sl,_l(Al,bl.prototype),Al.isPureReactComponent=!0;var Ll=Array.isArray;function Sl(){}var J={H:null,A:null,T:null,S:null},Rl=Object.prototype.hasOwnProperty;function $l(r,T,O){var R=O.ref;return{$$typeof:y,type:r,key:T,ref:R!==void 0?R:null,props:O}}function Ft(r,T){return $l(r.type,T,r.props)}function dt(r){return typeof r=="object"&&r!==null&&r.$$typeof===y}function kl(r){var T={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(O){return T[O]})}var Te=/\/+/g;function jt(r,T){return typeof r=="object"&&r!==null&&r.key!=null?kl(""+r.key):T.toString(36)}function Tt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(Sl,Sl):(r.status="pending",r.then(function(T){r.status==="pending"&&(r.status="fulfilled",r.value=T)},function(T){r.status==="pending"&&(r.status="rejected",r.reason=T)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function S(r,T,O,R,Z){var $=typeof r;($==="undefined"||$==="boolean")&&(r=null);var nl=!1;if(r===null)nl=!0;else switch($){case"bigint":case"string":case"number":nl=!0;break;case"object":switch(r.$$typeof){case y:case M:nl=!0;break;case D:return nl=r._init,S(nl(r._payload),T,O,R,Z)}}if(nl)return Z=Z(r),nl=R===""?"."+jt(r,0):R,Ll(Z)?(O="",nl!=null&&(O=nl.replace(Te,"$&/")+"/"),S(Z,T,O,"",function(Da){return Da})):Z!=null&&(dt(Z)&&(Z=Ft(Z,O+(Z.key==null||r&&r.key===Z.key?"":(""+Z.key).replace(Te,"$&/")+"/")+nl)),T.push(Z)),1;nl=0;var Kl=R===""?".":R+":";if(Ll(r))for(var wl=0;wl<r.length;wl++)R=r[wl],$=Kl+jt(R,wl),nl+=S(R,T,O,$,Z);else if(wl=yl(r),typeof wl=="function")for(r=wl.call(r),wl=0;!(R=r.next()).done;)R=R.value,$=Kl+jt(R,wl++),nl+=S(R,T,O,$,Z);else if($==="object"){if(typeof r.then=="function")return S(Tt(r),T,O,R,Z);throw T=String(r),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return nl}function w(r,T,O){if(r==null)return r;var R=[],Z=0;return S(r,R,"","",function($){return T.call(O,$,Z++)}),R}function Q(r){if(r._status===-1){var T=r._result;T=T(),T.then(function(O){(r._status===0||r._status===-1)&&(r._status=1,r._result=O)},function(O){(r._status===0||r._status===-1)&&(r._status=2,r._result=O)}),r._status===-1&&(r._status=0,r._result=T)}if(r._status===1)return r._result.default;throw r._result}var cl=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},gl={map:w,forEach:function(r,T,O){w(r,function(){T.apply(this,arguments)},O)},count:function(r){var T=0;return w(r,function(){T++}),T},toArray:function(r){return w(r,function(T){return T})||[]},only:function(r){if(!dt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return X.Activity=j,X.Children=gl,X.Component=bl,X.Fragment=N,X.Profiler=E,X.PureComponent=sl,X.StrictMode=g,X.Suspense=U,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,X.__COMPILER_RUNTIME={__proto__:null,c:function(r){return J.H.useMemoCache(r)}},X.cache=function(r){return function(){return r.apply(null,arguments)}},X.cacheSignal=function(){return null},X.cloneElement=function(r,T,O){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var R=_l({},r.props),Z=r.key;if(T!=null)for($ in T.key!==void 0&&(Z=""+T.key),T)!Rl.call(T,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&T.ref===void 0||(R[$]=T[$]);var $=arguments.length-2;if($===1)R.children=O;else if(1<$){for(var nl=Array($),Kl=0;Kl<$;Kl++)nl[Kl]=arguments[Kl+2];R.children=nl}return $l(r.type,Z,R)},X.createContext=function(r){return r={$$typeof:B,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:C,_context:r},r},X.createElement=function(r,T,O){var R,Z={},$=null;if(T!=null)for(R in T.key!==void 0&&($=""+T.key),T)Rl.call(T,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(Z[R]=T[R]);var nl=arguments.length-2;if(nl===1)Z.children=O;else if(1<nl){for(var Kl=Array(nl),wl=0;wl<nl;wl++)Kl[wl]=arguments[wl+2];Z.children=Kl}if(r&&r.defaultProps)for(R in nl=r.defaultProps,nl)Z[R]===void 0&&(Z[R]=nl[R]);return $l(r,$,Z)},X.createRef=function(){return{current:null}},X.forwardRef=function(r){return{$$typeof:P,render:r}},X.isValidElement=dt,X.lazy=function(r){return{$$typeof:D,_payload:{_status:-1,_result:r},_init:Q}},X.memo=function(r,T){return{$$typeof:_,type:r,compare:T===void 0?null:T}},X.startTransition=function(r){var T=J.T,O={};J.T=O;try{var R=r(),Z=J.S;Z!==null&&Z(O,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Sl,cl)}catch($){cl($)}finally{T!==null&&O.types!==null&&(T.types=O.types),J.T=T}},X.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},X.use=function(r){return J.H.use(r)},X.useActionState=function(r,T,O){return J.H.useActionState(r,T,O)},X.useCallback=function(r,T){return J.H.useCallback(r,T)},X.useContext=function(r){return J.H.useContext(r)},X.useDebugValue=function(){},X.useDeferredValue=function(r,T){return J.H.useDeferredValue(r,T)},X.useEffect=function(r,T){return J.H.useEffect(r,T)},X.useEffectEvent=function(r){return J.H.useEffectEvent(r)},X.useId=function(){return J.H.useId()},X.useImperativeHandle=function(r,T,O){return J.H.useImperativeHandle(r,T,O)},X.useInsertionEffect=function(r,T){return J.H.useInsertionEffect(r,T)},X.useLayoutEffect=function(r,T){return J.H.useLayoutEffect(r,T)},X.useMemo=function(r,T){return J.H.useMemo(r,T)},X.useOptimistic=function(r,T){return J.H.useOptimistic(r,T)},X.useReducer=function(r,T,O){return J.H.useReducer(r,T,O)},X.useRef=function(r){return J.H.useRef(r)},X.useState=function(r){return J.H.useState(r)},X.useSyncExternalStore=function(r,T,O){return J.H.useSyncExternalStore(r,T,O)},X.useTransition=function(){return J.H.useTransition()},X.version="19.2.3",X}var _g;function hc(){return _g||(_g=1,oc.exports=f0()),oc.exports}var zl=hc(),rc={exports:{}},An={},fc={exports:{}},gc={};var Ag;function g0(){return Ag||(Ag=1,(function(y){function M(S,w){var Q=S.length;S.push(w);l:for(;0<Q;){var cl=Q-1>>>1,gl=S[cl];if(0<E(gl,w))S[cl]=w,S[Q]=gl,Q=cl;else break l}}function N(S){return S.length===0?null:S[0]}function g(S){if(S.length===0)return null;var w=S[0],Q=S.pop();if(Q!==w){S[0]=Q;l:for(var cl=0,gl=S.length,r=gl>>>1;cl<r;){var T=2*(cl+1)-1,O=S[T],R=T+1,Z=S[R];if(0>E(O,Q))R<gl&&0>E(Z,O)?(S[cl]=Z,S[R]=Q,cl=R):(S[cl]=O,S[T]=Q,cl=T);else if(R<gl&&0>E(Z,Q))S[cl]=Z,S[R]=Q,cl=R;else break l}}return w}function E(S,w){var Q=S.sortIndex-w.sortIndex;return Q!==0?Q:S.id-w.id}if(y.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var C=performance;y.unstable_now=function(){return C.now()}}else{var B=Date,P=B.now();y.unstable_now=function(){return B.now()-P}}var U=[],_=[],D=1,j=null,K=3,yl=!1,vl=!1,_l=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,Ml=typeof clearTimeout=="function"?clearTimeout:null,sl=typeof setImmediate<"u"?setImmediate:null;function Al(S){for(var w=N(_);w!==null;){if(w.callback===null)g(_);else if(w.startTime<=S)g(_),w.sortIndex=w.expirationTime,M(U,w);else break;w=N(_)}}function Ll(S){if(_l=!1,Al(S),!vl)if(N(U)!==null)vl=!0,Sl||(Sl=!0,kl());else{var w=N(_);w!==null&&Tt(Ll,w.startTime-S)}}var Sl=!1,J=-1,Rl=5,$l=-1;function Ft(){return Ul?!0:!(y.unstable_now()-$l<Rl)}function dt(){if(Ul=!1,Sl){var S=y.unstable_now();$l=S;var w=!0;try{l:{vl=!1,_l&&(_l=!1,Ml(J),J=-1),yl=!0;var Q=K;try{t:{for(Al(S),j=N(U);j!==null&&!(j.expirationTime>S&&Ft());){var cl=j.callback;if(typeof cl=="function"){j.callback=null,K=j.priorityLevel;var gl=cl(j.expirationTime<=S);if(S=y.unstable_now(),typeof gl=="function"){j.callback=gl,Al(S),w=!0;break t}j===N(U)&&g(U),Al(S)}else g(U);j=N(U)}if(j!==null)w=!0;else{var r=N(_);r!==null&&Tt(Ll,r.startTime-S),w=!1}}break l}finally{j=null,K=Q,yl=!1}w=void 0}}finally{w?kl():Sl=!1}}}var kl;if(typeof sl=="function")kl=function(){sl(dt)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,jt=Te.port2;Te.port1.onmessage=dt,kl=function(){jt.postMessage(null)}}else kl=function(){bl(dt,0)};function Tt(S,w){J=bl(function(){S(y.unstable_now())},w)}y.unstable_IdlePriority=5,y.unstable_ImmediatePriority=1,y.unstable_LowPriority=4,y.unstable_NormalPriority=3,y.unstable_Profiling=null,y.unstable_UserBlockingPriority=2,y.unstable_cancelCallback=function(S){S.callback=null},y.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rl=0<S?Math.floor(1e3/S):5},y.unstable_getCurrentPriorityLevel=function(){return K},y.unstable_next=function(S){switch(K){case 1:case 2:case 3:var w=3;break;default:w=K}var Q=K;K=w;try{return S()}finally{K=Q}},y.unstable_requestPaint=function(){Ul=!0},y.unstable_runWithPriority=function(S,w){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var Q=K;K=S;try{return w()}finally{K=Q}},y.unstable_scheduleCallback=function(S,w,Q){var cl=y.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?cl+Q:cl):Q=cl,S){case 1:var gl=-1;break;case 2:gl=250;break;case 5:gl=1073741823;break;case 4:gl=1e4;break;default:gl=5e3}return gl=Q+gl,S={id:D++,callback:w,priorityLevel:S,startTime:Q,expirationTime:gl,sortIndex:-1},Q>cl?(S.sortIndex=Q,M(_,S),N(U)===null&&S===N(_)&&(_l?(Ml(J),J=-1):_l=!0,Tt(Ll,Q-cl))):(S.sortIndex=gl,M(U,S),vl||yl||(vl=!0,Sl||(Sl=!0,kl()))),S},y.unstable_shouldYield=Ft,y.unstable_wrapCallback=function(S){var w=K;return function(){var Q=K;K=w;try{return S.apply(this,arguments)}finally{K=Q}}}})(gc)),gc}var Tg;function d0(){return Tg||(Tg=1,fc.exports=g0()),fc.exports}var dc={exports:{}},Vl={};var Eg;function p0(){if(Eg)return Vl;Eg=1;var y=hc();function M(U){var _="https://react.dev/errors/"+U;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)_+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+U+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(){}var g={d:{f:N,r:function(){throw Error(M(522))},D:N,C:N,L:N,m:N,X:N,S:N,M:N},p:0,findDOMNode:null},E=Symbol.for("react.portal");function C(U,_,D){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:j==null?null:""+j,children:U,containerInfo:_,implementation:D}}var B=y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,_){if(U==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Vl.createPortal=function(U,_){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(M(299));return C(U,_,null,D)},Vl.flushSync=function(U){var _=B.T,D=g.p;try{if(B.T=null,g.p=2,U)return U()}finally{B.T=_,g.p=D,g.d.f()}},Vl.preconnect=function(U,_){typeof U=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,g.d.C(U,_))},Vl.prefetchDNS=function(U){typeof U=="string"&&g.d.D(U)},Vl.preinit=function(U,_){if(typeof U=="string"&&_&&typeof _.as=="string"){var D=_.as,j=P(D,_.crossOrigin),K=typeof _.integrity=="string"?_.integrity:void 0,yl=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;D==="style"?g.d.S(U,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:j,integrity:K,fetchPriority:yl}):D==="script"&&g.d.X(U,{crossOrigin:j,integrity:K,fetchPriority:yl,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Vl.preinitModule=function(U,_){if(typeof U=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var D=P(_.as,_.crossOrigin);g.d.M(U,{crossOrigin:D,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&g.d.M(U)},Vl.preload=function(U,_){if(typeof U=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var D=_.as,j=P(D,_.crossOrigin);g.d.L(U,D,{crossOrigin:j,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Vl.preloadModule=function(U,_){if(typeof U=="string")if(_){var D=P(_.as,_.crossOrigin);g.d.m(U,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:D,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else g.d.m(U)},Vl.requestFormReset=function(U){g.d.r(U)},Vl.unstable_batchedUpdates=function(U,_){return U(_)},Vl.useFormState=function(U,_,D){return B.H.useFormState(U,_,D)},Vl.useFormStatus=function(){return B.H.useHostTransitionStatus()},Vl.version="19.2.3",Vl}var Mg;function h0(){if(Mg)return dc.exports;Mg=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(M){console.error(M)}}return y(),dc.exports=p0(),dc.exports}var wg;function m0(){if(wg)return An;wg=1;var y=d0(),M=hc(),N=h0();function g(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function C(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function B(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(C(l)!==l)throw Error(g(188))}function _(l){var t=l.alternate;if(!t){if(t=C(l),t===null)throw Error(g(188));return t!==l?null:l}for(var e=l,a=t;;){var n=e.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===e)return U(n),l;if(u===a)return U(n),t;u=u.sibling}throw Error(g(188))}if(e.return!==a.return)e=n,a=u;else{for(var i=!1,s=n.child;s;){if(s===e){i=!0,e=n,a=u;break}if(s===a){i=!0,a=n,e=u;break}s=s.sibling}if(!i){for(s=u.child;s;){if(s===e){i=!0,e=u,a=n;break}if(s===a){i=!0,a=u,e=n;break}s=s.sibling}if(!i)throw Error(g(189))}}if(e.alternate!==a)throw Error(g(190))}if(e.tag!==3)throw Error(g(188));return e.stateNode.current===e?l:t}function D(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=D(l),t!==null)return t;l=l.sibling}return null}var j=Object.assign,K=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Ml=Symbol.for("react.consumer"),sl=Symbol.for("react.context"),Al=Symbol.for("react.forward_ref"),Ll=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Rl=Symbol.for("react.lazy"),$l=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),dt=Symbol.iterator;function kl(l){return l===null||typeof l!="object"?null:(l=dt&&l[dt]||l["@@iterator"],typeof l=="function"?l:null)}var Te=Symbol.for("react.client.reference");function jt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Te?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case _l:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case Ll:return"Suspense";case Sl:return"SuspenseList";case $l:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case sl:return l.displayName||"Context";case Ml:return(l._context.displayName||"Context")+".Consumer";case Al:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case J:return t=l.displayName||null,t!==null?t:jt(l.type)||"Memo";case Rl:t=l._payload,l=l._init;try{return jt(l(t))}catch{}}return null}var Tt=Array.isArray,S=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w=N.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},cl=[],gl=-1;function r(l){return{current:l}}function T(l){0>gl||(l.current=cl[gl],cl[gl]=null,gl--)}function O(l,t){gl++,cl[gl]=l.current,l.current=t}var R=r(null),Z=r(null),$=r(null),nl=r(null);function Kl(l,t){switch(O($,t),O(Z,l),O(R,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Xf(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Xf(t),l=Zf(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}T(R),O(R,l)}function wl(){T(R),T(Z),T($)}function Da(l){l.memoizedState!==null&&O(nl,l);var t=R.current,e=Zf(t,l.type);t!==e&&(O(Z,l),O(R,e))}function Tn(l){Z.current===l&&(T(R),T(Z)),nl.current===l&&(T(nl),vn._currentValue=Q)}var Lu,mc;function Ee(l){if(Lu===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Lu=t&&t[1]||"",mc=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lu+l+mc}var Vu=!1;function Ku(l,t){if(!l||Vu)return"";Vu=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(v){var m=v}Reflect.construct(l,[],A)}else{try{A.call()}catch(v){m=v}l.call(A.prototype)}}else{try{throw Error()}catch(v){m=v}(A=l())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],s=u[1];if(i&&s){var c=i.split(`
`),h=s.split(`
`);for(n=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===c.length||n===h.length)for(a=c.length-1,n=h.length-1;1<=a&&0<=n&&c[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(c[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||c[a]!==h[n]){var b=`
`+c[a].replace(" at new "," at ");return l.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",l.displayName)),b}while(1<=a&&0<=n);break}}}finally{Vu=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?Ee(e):""}function Gg(l,t){switch(l.tag){case 26:case 27:case 5:return Ee(l.type);case 16:return Ee("Lazy");case 13:return l.child!==t&&t!==null?Ee("Suspense Fallback"):Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return Ku(l.type,!1);case 11:return Ku(l.type.render,!1);case 1:return Ku(l.type,!0);case 31:return Ee("Activity");default:return""}}function yc(l){try{var t="",e=null;do t+=Gg(l,e),e=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ju=Object.prototype.hasOwnProperty,$u=y.unstable_scheduleCallback,ku=y.unstable_cancelCallback,Qg=y.unstable_shouldYield,Xg=y.unstable_requestPaint,at=y.unstable_now,Zg=y.unstable_getCurrentPriorityLevel,vc=y.unstable_ImmediatePriority,bc=y.unstable_UserBlockingPriority,En=y.unstable_NormalPriority,Lg=y.unstable_LowPriority,Sc=y.unstable_IdlePriority,Vg=y.log,Kg=y.unstable_setDisableYieldValue,Oa=null,nt=null;function It(l){if(typeof Vg=="function"&&Kg(l),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Oa,l)}catch{}}var ut=Math.clz32?Math.clz32:kg,Jg=Math.log,$g=Math.LN2;function kg(l){return l>>>=0,l===0?32:31-(Jg(l)/$g|0)|0}var Mn=256,wn=262144,Dn=4194304;function Me(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function On(l,t,e){var a=l.pendingLanes;if(a===0)return 0;var n=0,u=l.suspendedLanes,i=l.pingedLanes;l=l.warmLanes;var s=a&134217727;return s!==0?(a=s&~u,a!==0?n=Me(a):(i&=s,i!==0?n=Me(i):e||(e=s&~l,e!==0&&(n=Me(e))))):(s=a&~u,s!==0?n=Me(s):i!==0?n=Me(i):e||(e=a&~l,e!==0&&(n=Me(e)))),n===0?0:t!==0&&t!==n&&(t&u)===0&&(u=n&-n,e=t&-t,u>=e||u===32&&(e&4194048)!==0)?t:n}function Na(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wg(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zc(){var l=Dn;return Dn<<=1,(Dn&62914560)===0&&(Dn=4194304),l}function Wu(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function Ca(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Fg(l,t,e,a,n,u){var i=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var s=l.entanglements,c=l.expirationTimes,h=l.hiddenUpdates;for(e=i&~e;0<e;){var b=31-ut(e),A=1<<b;s[b]=0,c[b]=-1;var m=h[b];if(m!==null)for(h[b]=null,b=0;b<m.length;b++){var v=m[b];v!==null&&(v.lane&=-536870913)}e&=~A}a!==0&&_c(l,a,0),u!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=u&~(i&~t))}function _c(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-ut(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|e&261930}function Ac(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var a=31-ut(e),n=1<<a;n&t|l[a]&t&&(l[a]|=t),e&=~n}}function Tc(l,t){var e=t&-t;return e=(e&42)!==0?1:Fu(e),(e&(l.suspendedLanes|t))!==0?0:e}function Fu(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Iu(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Ec(){var l=w.p;return l!==0?l:(l=window.event,l===void 0?32:gg(l.type))}function Mc(l,t){var e=w.p;try{return w.p=l,t()}finally{w.p=e}}var Pt=Math.random().toString(36).slice(2),Yl="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,Le="__reactContainer$"+Pt,Pu="__reactEvents$"+Pt,Ig="__reactListeners$"+Pt,Pg="__reactHandles$"+Pt,wc="__reactResources$"+Pt,ja="__reactMarker$"+Pt;function li(l){delete l[Yl],delete l[Wl],delete l[Pu],delete l[Ig],delete l[Pg]}function Ve(l){var t=l[Yl];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Le]||e[Yl]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=Wf(l);l!==null;){if(e=l[Yl])return e;l=Wf(l)}return t}l=e,e=l.parentNode}return null}function Ke(l){if(l=l[Yl]||l[Le]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function xa(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(g(33))}function Je(l){var t=l[wc];return t||(t=l[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ql(l){l[ja]=!0}var Dc=new Set,Oc={};function we(l,t){$e(l,t),$e(l+"Capture",t)}function $e(l,t){for(Oc[l]=t,l=0;l<t.length;l++)Dc.add(t[l])}var ld=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nc={},Cc={};function td(l){return Ju.call(Cc,l)?!0:Ju.call(Nc,l)?!1:ld.test(l)?Cc[l]=!0:(Nc[l]=!0,!1)}function Nn(l,t,e){if(td(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function Cn(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function xt(l,t,e,a){if(a===null)l.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+a)}}function pt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function jc(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ed(l,t,e){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,u=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(i){e=""+i,u.call(this,i)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ti(l){if(!l._valueTracker){var t=jc(l)?"checked":"value";l._valueTracker=ed(l,t,""+l[t])}}function xc(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),a="";return l&&(a=jc(l)?l.checked?"true":"false":l.value),l=a,l!==e?(t.setValue(l),!0):!1}function jn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ad=/[\n"\\]/g;function ht(l){return l.replace(ad,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ei(l,t,e,a,n,u,i,s){l.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?l.type=i:l.removeAttribute("type"),t!=null?i==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+pt(t)):l.value!==""+pt(t)&&(l.value=""+pt(t)):i!=="submit"&&i!=="reset"||l.removeAttribute("value"),t!=null?ai(l,i,pt(t)):e!=null?ai(l,i,pt(e)):a!=null&&l.removeAttribute("value"),n==null&&u!=null&&(l.defaultChecked=!!u),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.name=""+pt(s):l.removeAttribute("name")}function Uc(l,t,e,a,n,u,i,s){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.type=u),t!=null||e!=null){if(!(u!=="submit"&&u!=="reset"||t!=null)){ti(l);return}e=e!=null?""+pt(e):"",t=t!=null?""+pt(t):e,s||t===l.value||(l.value=t),l.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=s?l.checked:!!a,l.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.name=i),ti(l)}function ai(l,t,e){t==="number"&&jn(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function ke(l,t,e,a){if(l=l.options,t){t={};for(var n=0;n<e.length;n++)t["$"+e[n]]=!0;for(e=0;e<l.length;e++)n=t.hasOwnProperty("$"+l[e].value),l[e].selected!==n&&(l[e].selected=n),n&&a&&(l[e].defaultSelected=!0)}else{for(e=""+pt(e),t=null,n=0;n<l.length;n++){if(l[n].value===e){l[n].selected=!0,a&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Hc(l,t,e){if(t!=null&&(t=""+pt(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+pt(e):""}function Rc(l,t,e,a){if(t==null){if(a!=null){if(e!=null)throw Error(g(92));if(Tt(a)){if(1<a.length)throw Error(g(93));a=a[0]}e=a}e==null&&(e=""),t=e}e=pt(t),l.defaultValue=e,a=l.textContent,a===e&&a!==""&&a!==null&&(l.value=a),ti(l)}function We(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var nd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qc(l,t,e){var a=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,e):typeof e!="number"||e===0||nd.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Bc(l,t,e){if(t!=null&&typeof t!="object")throw Error(g(62));if(l=l.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="");for(var n in t)a=t[n],t.hasOwnProperty(n)&&e[n]!==a&&qc(l,n,a)}else for(var u in t)t.hasOwnProperty(u)&&qc(l,u,t[u])}function ni(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),id=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xn(l){return id.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var ui=null;function ii(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fe=null,Ie=null;function Yc(l){var t=Ke(l);if(t&&(l=t.stateNode)){var e=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(ei(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var a=e[t];if(a!==l&&a.form===l.form){var n=a[Wl]||null;if(!n)throw Error(g(90));ei(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<e.length;t++)a=e[t],a.form===l.form&&xc(a)}break l;case"textarea":Hc(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&ke(l,!!e.multiple,t,!1)}}}var si=!1;function Gc(l,t,e){if(si)return l(t,e);si=!0;try{var a=l(t);return a}finally{if(si=!1,(Fe!==null||Ie!==null)&&(Su(),Fe&&(t=Fe,l=Ie,Ie=Fe=null,Yc(t),l)))for(t=0;t<l.length;t++)Yc(l[t])}}function Ua(l,t){var e=l.stateNode;if(e===null)return null;var a=e[Wl]||null;if(a===null)return null;e=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(g(231,t,typeof e));return e}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ci=!1;if(Ht)try{var Ha={};Object.defineProperty(Ha,"passive",{get:function(){ci=!0}}),window.addEventListener("test",Ha,Ha),window.removeEventListener("test",Ha,Ha)}catch{ci=!1}var le=null,oi=null,Un=null;function Qc(){if(Un)return Un;var l,t=oi,e=t.length,a,n="value"in le?le.value:le.textContent,u=n.length;for(l=0;l<e&&t[l]===n[l];l++);var i=e-l;for(a=1;a<=i&&t[e-a]===n[u-a];a++);return Un=n.slice(l,1<a?1-a:void 0)}function Hn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Rn(){return!0}function Xc(){return!1}function Fl(l){function t(e,a,n,u,i){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var s in l)l.hasOwnProperty(s)&&(e=l[s],this[s]=e?e(u):u[s]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Rn:Xc,this.isPropagationStopped=Xc,this}return j(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var De={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qn=Fl(De),Ra=j({},De,{view:0,detail:0}),sd=Fl(Ra),ri,fi,qa,Bn=j({},Ra,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:di,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==qa&&(qa&&l.type==="mousemove"?(ri=l.screenX-qa.screenX,fi=l.screenY-qa.screenY):fi=ri=0,qa=l),ri)},movementY:function(l){return"movementY"in l?l.movementY:fi}}),Zc=Fl(Bn),cd=j({},Bn,{dataTransfer:0}),od=Fl(cd),rd=j({},Ra,{relatedTarget:0}),gi=Fl(rd),fd=j({},De,{animationName:0,elapsedTime:0,pseudoElement:0}),gd=Fl(fd),dd=j({},De,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),pd=Fl(dd),hd=j({},De,{data:0}),Lc=Fl(hd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bd(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vd[l])?!!t[l]:!1}function di(){return bd}var Sd=j({},Ra,{key:function(l){if(l.key){var t=md[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Hn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yd[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:di,charCode:function(l){return l.type==="keypress"?Hn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Hn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),zd=Fl(Sd),_d=j({},Bn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vc=Fl(_d),Ad=j({},Ra,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:di}),Td=Fl(Ad),Ed=j({},De,{propertyName:0,elapsedTime:0,pseudoElement:0}),Md=Fl(Ed),wd=j({},Bn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Dd=Fl(wd),Od=j({},De,{newState:0,oldState:0}),Nd=Fl(Od),Cd=[9,13,27,32],pi=Ht&&"CompositionEvent"in window,Ba=null;Ht&&"documentMode"in document&&(Ba=document.documentMode);var jd=Ht&&"TextEvent"in window&&!Ba,Kc=Ht&&(!pi||Ba&&8<Ba&&11>=Ba),Jc=" ",$c=!1;function kc(l,t){switch(l){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wc(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pe=!1;function xd(l,t){switch(l){case"compositionend":return Wc(t);case"keypress":return t.which!==32?null:($c=!0,Jc);case"textInput":return l=t.data,l===Jc&&$c?null:l;default:return null}}function Ud(l,t){if(Pe)return l==="compositionend"||!pi&&kc(l,t)?(l=Qc(),Un=oi=le=null,Pe=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kc&&t.locale!=="ko"?null:t.data;default:return null}}var Hd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fc(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Hd[l.type]:t==="textarea"}function Ic(l,t,e,a){Fe?Ie?Ie.push(a):Ie=[a]:Fe=a,t=wu(t,"onChange"),0<t.length&&(e=new qn("onChange","change",null,e,a),l.push({event:e,listeners:t}))}var Ya=null,Ga=null;function Rd(l){Rf(l,0)}function Yn(l){var t=xa(l);if(xc(t))return l}function Pc(l,t){if(l==="change")return t}var lo=!1;if(Ht){var hi;if(Ht){var mi="oninput"in document;if(!mi){var to=document.createElement("div");to.setAttribute("oninput","return;"),mi=typeof to.oninput=="function"}hi=mi}else hi=!1;lo=hi&&(!document.documentMode||9<document.documentMode)}function eo(){Ya&&(Ya.detachEvent("onpropertychange",ao),Ga=Ya=null)}function ao(l){if(l.propertyName==="value"&&Yn(Ga)){var t=[];Ic(t,Ga,l,ii(l)),Gc(Rd,t)}}function qd(l,t,e){l==="focusin"?(eo(),Ya=t,Ga=e,Ya.attachEvent("onpropertychange",ao)):l==="focusout"&&eo()}function Bd(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Yn(Ga)}function Yd(l,t){if(l==="click")return Yn(t)}function Gd(l,t){if(l==="input"||l==="change")return Yn(t)}function Qd(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var it=typeof Object.is=="function"?Object.is:Qd;function Qa(l,t){if(it(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),a=Object.keys(t);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!Ju.call(t,n)||!it(l[n],t[n]))return!1}return!0}function no(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function uo(l,t){var e=no(l);l=0;for(var a;e;){if(e.nodeType===3){if(a=l+e.textContent.length,l<=t&&a>=t)return{node:e,offset:t-l};l=a}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=no(e)}}function io(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?io(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function so(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=jn(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=jn(l.document)}return t}function yi(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Xd=Ht&&"documentMode"in document&&11>=document.documentMode,la=null,vi=null,Xa=null,bi=!1;function co(l,t,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;bi||la==null||la!==jn(a)||(a=la,"selectionStart"in a&&yi(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Xa&&Qa(Xa,a)||(Xa=a,a=wu(vi,"onSelect"),0<a.length&&(t=new qn("onSelect","select",null,t,e),l.push({event:t,listeners:a}),t.target=la)))}function Oe(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var ta={animationend:Oe("Animation","AnimationEnd"),animationiteration:Oe("Animation","AnimationIteration"),animationstart:Oe("Animation","AnimationStart"),transitionrun:Oe("Transition","TransitionRun"),transitionstart:Oe("Transition","TransitionStart"),transitioncancel:Oe("Transition","TransitionCancel"),transitionend:Oe("Transition","TransitionEnd")},Si={},oo={};Ht&&(oo=document.createElement("div").style,"AnimationEvent"in window||(delete ta.animationend.animation,delete ta.animationiteration.animation,delete ta.animationstart.animation),"TransitionEvent"in window||delete ta.transitionend.transition);function Ne(l){if(Si[l])return Si[l];if(!ta[l])return l;var t=ta[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in oo)return Si[l]=t[e];return l}var ro=Ne("animationend"),fo=Ne("animationiteration"),go=Ne("animationstart"),Zd=Ne("transitionrun"),Ld=Ne("transitionstart"),Vd=Ne("transitioncancel"),po=Ne("transitionend"),ho=new Map,zi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zi.push("scrollEnd");function Et(l,t){ho.set(l,t),we(t,[l])}var Gn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},mt=[],ea=0,_i=0;function Qn(){for(var l=ea,t=_i=ea=0;t<l;){var e=mt[t];mt[t++]=null;var a=mt[t];mt[t++]=null;var n=mt[t];mt[t++]=null;var u=mt[t];if(mt[t++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&mo(e,n,u)}}function Xn(l,t,e,a){mt[ea++]=l,mt[ea++]=t,mt[ea++]=e,mt[ea++]=a,_i|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function Ai(l,t,e,a){return Xn(l,t,e,a),Zn(l)}function Ce(l,t){return Xn(l,null,null,t),Zn(l)}function mo(l,t,e){l.lanes|=e;var a=l.alternate;a!==null&&(a.lanes|=e);for(var n=!1,u=l.return;u!==null;)u.childLanes|=e,a=u.alternate,a!==null&&(a.childLanes|=e),u.tag===22&&(l=u.stateNode,l===null||l._visibility&1||(n=!0)),l=u,u=u.return;return l.tag===3?(u=l.stateNode,n&&t!==null&&(n=31-ut(e),l=u.hiddenUpdates,a=l[n],a===null?l[n]=[t]:a.push(t),t.lane=e|536870912),u):null}function Zn(l){if(50<fn)throw fn=0,js=null,Error(g(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var aa={};function Kd(l,t,e,a){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(l,t,e,a){return new Kd(l,t,e,a)}function Ti(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var e=l.alternate;return e===null?(e=st(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function yo(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Ln(l,t,e,a,n,u){var i=0;if(a=l,typeof l=="function")Ti(l)&&(i=1);else if(typeof l=="string")i=Fp(l,e,R.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case $l:return l=st(31,e,t,n),l.elementType=$l,l.lanes=u,l;case _l:return je(e.children,n,u,t);case Ul:i=8,n|=24;break;case bl:return l=st(12,e,t,n|2),l.elementType=bl,l.lanes=u,l;case Ll:return l=st(13,e,t,n),l.elementType=Ll,l.lanes=u,l;case Sl:return l=st(19,e,t,n),l.elementType=Sl,l.lanes=u,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case sl:i=10;break l;case Ml:i=9;break l;case Al:i=11;break l;case J:i=14;break l;case Rl:i=16,a=null;break l}i=29,e=Error(g(130,l===null?"null":typeof l,"")),a=null}return t=st(i,e,t,n),t.elementType=l,t.type=a,t.lanes=u,t}function je(l,t,e,a){return l=st(7,l,a,t),l.lanes=e,l}function Ei(l,t,e){return l=st(6,l,null,t),l.lanes=e,l}function vo(l){var t=st(18,null,null,0);return t.stateNode=l,t}function Mi(l,t,e){return t=st(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var bo=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var e=bo.get(l);return e!==void 0?e:(t={value:l,source:t,stack:yc(t)},bo.set(l,t),t)}return{value:l,source:t,stack:yc(t)}}var na=[],ua=0,Vn=null,Za=0,vt=[],bt=0,te=null,Dt=1,Ot="";function qt(l,t){na[ua++]=Za,na[ua++]=Vn,Vn=l,Za=t}function So(l,t,e){vt[bt++]=Dt,vt[bt++]=Ot,vt[bt++]=te,te=l;var a=Dt;l=Ot;var n=32-ut(a)-1;a&=~(1<<n),e+=1;var u=32-ut(t)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Dt=1<<32-ut(t)+n|e<<n|a,Ot=u+l}else Dt=1<<u|e<<n|a,Ot=l}function wi(l){l.return!==null&&(qt(l,1),So(l,1,0))}function Di(l){for(;l===Vn;)Vn=na[--ua],na[ua]=null,Za=na[--ua],na[ua]=null;for(;l===te;)te=vt[--bt],vt[bt]=null,Ot=vt[--bt],vt[bt]=null,Dt=vt[--bt],vt[bt]=null}function zo(l,t){vt[bt++]=Dt,vt[bt++]=Ot,vt[bt++]=te,Dt=t.id,Ot=t.overflow,te=l}var Gl=null,pl=null,ll=!1,ee=null,St=!1,Oi=Error(g(519));function ae(l){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw La(yt(t,l)),Oi}function _o(l){var t=l.stateNode,e=l.type,a=l.memoizedProps;switch(t[Yl]=l,t[Wl]=a,e){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(e=0;e<dn.length;e++)W(dn[e],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Uc(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Rc(t,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||a.suppressHydrationWarning===!0||Gf(t.textContent,e)?(a.popover!=null&&(W("beforetoggle",t),W("toggle",t)),a.onScroll!=null&&W("scroll",t),a.onScrollEnd!=null&&W("scrollend",t),a.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ae(l,!0)}function Ao(l){for(Gl=l.return;Gl;)switch(Gl.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Gl=Gl.return}}function ia(l){if(l!==Gl)return!1;if(!ll)return Ao(l),ll=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Js(l.type,l.memoizedProps)),e=!e),e&&pl&&ae(l),Ao(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));pl=kf(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));pl=kf(l)}else t===27?(t=pl,ye(l.type)?(l=Is,Is=null,pl=l):pl=t):pl=Gl?_t(l.stateNode.nextSibling):null;return!0}function xe(){pl=Gl=null,ll=!1}function Ni(){var l=ee;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),ee=null),l}function La(l){ee===null?ee=[l]:ee.push(l)}var Ci=r(null),Ue=null,Bt=null;function ne(l,t,e){O(Ci,t._currentValue),t._currentValue=e}function Yt(l){l._currentValue=Ci.current,T(Ci)}function ji(l,t,e){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===e)break;l=l.return}}function xi(l,t,e,a){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;l:for(;u!==null;){var s=u;u=n;for(var c=0;c<t.length;c++)if(s.context===t[c]){u.lanes|=e,s=u.alternate,s!==null&&(s.lanes|=e),ji(u.return,e,l),a||(i=null);break l}u=s.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(g(341));i.lanes|=e,u=i.alternate,u!==null&&(u.lanes|=e),ji(i,e,l),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===l){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function sa(l,t,e,a){l=null;for(var n=t,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(g(387));if(i=i.memoizedProps,i!==null){var s=n.type;it(n.pendingProps.value,i.value)||(l!==null?l.push(s):l=[s])}}else if(n===nl.current){if(i=n.alternate,i===null)throw Error(g(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(vn):l=[vn])}n=n.return}l!==null&&xi(t,l,e,a),t.flags|=262144}function Kn(l){for(l=l.firstContext;l!==null;){if(!it(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function He(l){Ue=l,Bt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Ql(l){return To(Ue,l)}function Jn(l,t){return Ue===null&&He(l),To(l,t)}function To(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},Bt===null){if(l===null)throw Error(g(308));Bt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Bt=Bt.next=t;return e}var Jd=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},$d=y.unstable_scheduleCallback,kd=y.unstable_NormalPriority,Nl={$$typeof:sl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ui(){return{controller:new Jd,data:new Map,refCount:0}}function Va(l){l.refCount--,l.refCount===0&&$d(kd,function(){l.controller.abort()})}var Ka=null,Hi=0,ca=0,oa=null;function Wd(l,t){if(Ka===null){var e=Ka=[];Hi=0,ca=Bs(),oa={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Hi++,t.then(Eo,Eo),t}function Eo(){if(--Hi===0&&Ka!==null){oa!==null&&(oa.status="fulfilled");var l=Ka;Ka=null,ca=0,oa=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fd(l,t){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<e.length;n++)(0,e[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var Mo=S.S;S.S=function(l,t){rf=at(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wd(l,t),Mo!==null&&Mo(l,t)};var Re=r(null);function Ri(){var l=Re.current;return l!==null?l:dl.pooledCache}function $n(l,t){t===null?O(Re,Re.current):O(Re,t.pool)}function wo(){var l=Ri();return l===null?null:{parent:Nl._currentValue,pool:l}}var ra=Error(g(460)),qi=Error(g(474)),kn=Error(g(542)),Wn={then:function(){}};function Do(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Oo(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Ut,Ut),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Co(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=dl,l!==null&&100<l.shellSuspendCounter)throw Error(g(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Co(l),l}throw Be=t,ra}}function qe(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Be=e,ra):e}}var Be=null;function No(){if(Be===null)throw Error(g(459));var l=Be;return Be=null,l}function Co(l){if(l===ra||l===kn)throw Error(g(483))}var fa=null,Ja=0;function Fn(l){var t=Ja;return Ja+=1,fa===null&&(fa=[]),Oo(fa,l,t)}function $a(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===K?Error(g(525)):(l=Object.prototype.toString.call(t),Error(g(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function jo(l){function t(f,o){if(l){var p=f.deletions;p===null?(f.deletions=[o],f.flags|=16):p.push(o)}}function e(f,o){if(!l)return null;for(;o!==null;)t(f,o),o=o.sibling;return null}function a(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function n(f,o){return f=Rt(f,o),f.index=0,f.sibling=null,f}function u(f,o,p){return f.index=p,l?(p=f.alternate,p!==null?(p=p.index,p<o?(f.flags|=67108866,o):p):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function i(f){return l&&f.alternate===null&&(f.flags|=67108866),f}function s(f,o,p,z){return o===null||o.tag!==6?(o=Ei(p,f.mode,z),o.return=f,o):(o=n(o,p),o.return=f,o)}function c(f,o,p,z){var Y=p.type;return Y===_l?b(f,o,p.props.children,z,p.key):o!==null&&(o.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Rl&&qe(Y)===o.type)?(o=n(o,p.props),$a(o,p),o.return=f,o):(o=Ln(p.type,p.key,p.props,null,f.mode,z),$a(o,p),o.return=f,o)}function h(f,o,p,z){return o===null||o.tag!==4||o.stateNode.containerInfo!==p.containerInfo||o.stateNode.implementation!==p.implementation?(o=Mi(p,f.mode,z),o.return=f,o):(o=n(o,p.children||[]),o.return=f,o)}function b(f,o,p,z,Y){return o===null||o.tag!==7?(o=je(p,f.mode,z,Y),o.return=f,o):(o=n(o,p),o.return=f,o)}function A(f,o,p){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Ei(""+o,f.mode,p),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case yl:return p=Ln(o.type,o.key,o.props,null,f.mode,p),$a(p,o),p.return=f,p;case vl:return o=Mi(o,f.mode,p),o.return=f,o;case Rl:return o=qe(o),A(f,o,p)}if(Tt(o)||kl(o))return o=je(o,f.mode,p,null),o.return=f,o;if(typeof o.then=="function")return A(f,Fn(o),p);if(o.$$typeof===sl)return A(f,Jn(f,o),p);In(f,o)}return null}function m(f,o,p,z){var Y=o!==null?o.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return Y!==null?null:s(f,o,""+p,z);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case yl:return p.key===Y?c(f,o,p,z):null;case vl:return p.key===Y?h(f,o,p,z):null;case Rl:return p=qe(p),m(f,o,p,z)}if(Tt(p)||kl(p))return Y!==null?null:b(f,o,p,z,null);if(typeof p.then=="function")return m(f,o,Fn(p),z);if(p.$$typeof===sl)return m(f,o,Jn(f,p),z);In(f,p)}return null}function v(f,o,p,z,Y){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return f=f.get(p)||null,s(o,f,""+z,Y);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case yl:return f=f.get(z.key===null?p:z.key)||null,c(o,f,z,Y);case vl:return f=f.get(z.key===null?p:z.key)||null,h(o,f,z,Y);case Rl:return z=qe(z),v(f,o,p,z,Y)}if(Tt(z)||kl(z))return f=f.get(p)||null,b(o,f,z,Y,null);if(typeof z.then=="function")return v(f,o,p,Fn(z),Y);if(z.$$typeof===sl)return v(f,o,p,Jn(o,z),Y);In(o,z)}return null}function H(f,o,p,z){for(var Y=null,tl=null,q=o,V=o=0,I=null;q!==null&&V<p.length;V++){q.index>V?(I=q,q=null):I=q.sibling;var el=m(f,q,p[V],z);if(el===null){q===null&&(q=I);break}l&&q&&el.alternate===null&&t(f,q),o=u(el,o,V),tl===null?Y=el:tl.sibling=el,tl=el,q=I}if(V===p.length)return e(f,q),ll&&qt(f,V),Y;if(q===null){for(;V<p.length;V++)q=A(f,p[V],z),q!==null&&(o=u(q,o,V),tl===null?Y=q:tl.sibling=q,tl=q);return ll&&qt(f,V),Y}for(q=a(q);V<p.length;V++)I=v(q,f,V,p[V],z),I!==null&&(l&&I.alternate!==null&&q.delete(I.key===null?V:I.key),o=u(I,o,V),tl===null?Y=I:tl.sibling=I,tl=I);return l&&q.forEach(function(_e){return t(f,_e)}),ll&&qt(f,V),Y}function G(f,o,p,z){if(p==null)throw Error(g(151));for(var Y=null,tl=null,q=o,V=o=0,I=null,el=p.next();q!==null&&!el.done;V++,el=p.next()){q.index>V?(I=q,q=null):I=q.sibling;var _e=m(f,q,el.value,z);if(_e===null){q===null&&(q=I);break}l&&q&&_e.alternate===null&&t(f,q),o=u(_e,o,V),tl===null?Y=_e:tl.sibling=_e,tl=_e,q=I}if(el.done)return e(f,q),ll&&qt(f,V),Y;if(q===null){for(;!el.done;V++,el=p.next())el=A(f,el.value,z),el!==null&&(o=u(el,o,V),tl===null?Y=el:tl.sibling=el,tl=el);return ll&&qt(f,V),Y}for(q=a(q);!el.done;V++,el=p.next())el=v(q,f,V,el.value,z),el!==null&&(l&&el.alternate!==null&&q.delete(el.key===null?V:el.key),o=u(el,o,V),tl===null?Y=el:tl.sibling=el,tl=el);return l&&q.forEach(function(c0){return t(f,c0)}),ll&&qt(f,V),Y}function fl(f,o,p,z){if(typeof p=="object"&&p!==null&&p.type===_l&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case yl:l:{for(var Y=p.key;o!==null;){if(o.key===Y){if(Y=p.type,Y===_l){if(o.tag===7){e(f,o.sibling),z=n(o,p.props.children),z.return=f,f=z;break l}}else if(o.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Rl&&qe(Y)===o.type){e(f,o.sibling),z=n(o,p.props),$a(z,p),z.return=f,f=z;break l}e(f,o);break}else t(f,o);o=o.sibling}p.type===_l?(z=je(p.props.children,f.mode,z,p.key),z.return=f,f=z):(z=Ln(p.type,p.key,p.props,null,f.mode,z),$a(z,p),z.return=f,f=z)}return i(f);case vl:l:{for(Y=p.key;o!==null;){if(o.key===Y)if(o.tag===4&&o.stateNode.containerInfo===p.containerInfo&&o.stateNode.implementation===p.implementation){e(f,o.sibling),z=n(o,p.children||[]),z.return=f,f=z;break l}else{e(f,o);break}else t(f,o);o=o.sibling}z=Mi(p,f.mode,z),z.return=f,f=z}return i(f);case Rl:return p=qe(p),fl(f,o,p,z)}if(Tt(p))return H(f,o,p,z);if(kl(p)){if(Y=kl(p),typeof Y!="function")throw Error(g(150));return p=Y.call(p),G(f,o,p,z)}if(typeof p.then=="function")return fl(f,o,Fn(p),z);if(p.$$typeof===sl)return fl(f,o,Jn(f,p),z);In(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,o!==null&&o.tag===6?(e(f,o.sibling),z=n(o,p),z.return=f,f=z):(e(f,o),z=Ei(p,f.mode,z),z.return=f,f=z),i(f)):e(f,o)}return function(f,o,p,z){try{Ja=0;var Y=fl(f,o,p,z);return fa=null,Y}catch(q){if(q===ra||q===kn)throw q;var tl=st(29,q,null,f.mode);return tl.lanes=z,tl.return=f,tl}}}var Ye=jo(!0),xo=jo(!1),ue=!1;function Bi(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yi(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ie(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function se(l,t,e){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(al&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=Zn(l),mo(l,null,e),t}return Xn(l,a,t,e),Zn(l)}function ka(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Ac(l,e)}}function Gi(l,t){var e=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,u=null;if(e=e.firstBaseUpdate,e!==null){do{var i={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,e=e.next}while(e!==null);u===null?n=u=t:u=u.next=t}else n=u=t;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Qi=!1;function Wa(){if(Qi){var l=oa;if(l!==null)throw l}}function Fa(l,t,e,a){Qi=!1;var n=l.updateQueue;ue=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var c=s,h=c.next;c.next=null,i===null?u=h:i.next=h,i=c;var b=l.alternate;b!==null&&(b=b.updateQueue,s=b.lastBaseUpdate,s!==i&&(s===null?b.firstBaseUpdate=h:s.next=h,b.lastBaseUpdate=c))}if(u!==null){var A=n.baseState;i=0,b=h=c=null,s=u;do{var m=s.lane&-536870913,v=m!==s.lane;if(v?(F&m)===m:(a&m)===m){m!==0&&m===ca&&(Qi=!0),b!==null&&(b=b.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});l:{var H=l,G=s;m=t;var fl=e;switch(G.tag){case 1:if(H=G.payload,typeof H=="function"){A=H.call(fl,A,m);break l}A=H;break l;case 3:H.flags=H.flags&-65537|128;case 0:if(H=G.payload,m=typeof H=="function"?H.call(fl,A,m):H,m==null)break l;A=j({},A,m);break l;case 2:ue=!0}}m=s.callback,m!==null&&(l.flags|=64,v&&(l.flags|=8192),v=n.callbacks,v===null?n.callbacks=[m]:v.push(m))}else v={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},b===null?(h=b=v,c=A):b=b.next=v,i|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;v=s,s=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);b===null&&(c=A),n.baseState=c,n.firstBaseUpdate=h,n.lastBaseUpdate=b,u===null&&(n.shared.lanes=0),ge|=i,l.lanes=i,l.memoizedState=A}}function Uo(l,t){if(typeof l!="function")throw Error(g(191,l));l.call(t)}function Ho(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)Uo(e[l],t)}var ga=r(null),Pn=r(0);function Ro(l,t){l=$t,O(Pn,l),O(ga,t),$t=l|t.baseLanes}function Xi(){O(Pn,$t),O(ga,ga.current)}function Zi(){$t=Pn.current,T(ga),T(Pn)}var ct=r(null),zt=null;function ce(l){var t=l.alternate;O(Dl,Dl.current&1),O(ct,l),zt===null&&(t===null||ga.current!==null||t.memoizedState!==null)&&(zt=l)}function Li(l){O(Dl,Dl.current),O(ct,l),zt===null&&(zt=l)}function qo(l){l.tag===22?(O(Dl,Dl.current),O(ct,l),zt===null&&(zt=l)):oe()}function oe(){O(Dl,Dl.current),O(ct,ct.current)}function ot(l){T(ct),zt===l&&(zt=null),T(Dl)}var Dl=r(0);function lu(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Ws(e)||Fs(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gt=0,L=null,ol=null,Cl=null,tu=!1,da=!1,Ge=!1,eu=0,Ia=0,pa=null,Id=0;function Tl(){throw Error(g(321))}function Vi(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!it(l[e],t[e]))return!1;return!0}function Ki(l,t,e,a,n,u){return Gt=u,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?Sr:ss,Ge=!1,u=e(a,n),Ge=!1,da&&(u=Yo(t,e,a,n)),Bo(l),u}function Bo(l){S.H=tn;var t=ol!==null&&ol.next!==null;if(Gt=0,Cl=ol=L=null,tu=!1,Ia=0,pa=null,t)throw Error(g(300));l===null||jl||(l=l.dependencies,l!==null&&Kn(l)&&(jl=!0))}function Yo(l,t,e,a){L=l;var n=0;do{if(da&&(pa=null),Ia=0,da=!1,25<=n)throw Error(g(301));if(n+=1,Cl=ol=null,l.updateQueue!=null){var u=l.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}S.H=zr,u=t(e,a)}while(da);return u}function Pd(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?Pa(t):t,l=l.useState()[0],(ol!==null?ol.memoizedState:null)!==l&&(L.flags|=1024),t}function Ji(){var l=eu!==0;return eu=0,l}function $i(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function ki(l){if(tu){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}tu=!1}Gt=0,Cl=ol=L=null,da=!1,Ia=eu=0,pa=null}function Jl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cl===null?L.memoizedState=Cl=l:Cl=Cl.next=l,Cl}function Ol(){if(ol===null){var l=L.alternate;l=l!==null?l.memoizedState:null}else l=ol.next;var t=Cl===null?L.memoizedState:Cl.next;if(t!==null)Cl=t,ol=l;else{if(l===null)throw L.alternate===null?Error(g(467)):Error(g(310));ol=l,l={memoizedState:ol.memoizedState,baseState:ol.baseState,baseQueue:ol.baseQueue,queue:ol.queue,next:null},Cl===null?L.memoizedState=Cl=l:Cl=Cl.next=l}return Cl}function au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pa(l){var t=Ia;return Ia+=1,pa===null&&(pa=[]),l=Oo(pa,l,t),t=L,(Cl===null?t.memoizedState:Cl.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?Sr:ss),l}function nu(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pa(l);if(l.$$typeof===sl)return Ql(l)}throw Error(g(438,String(l)))}function Wi(l){var t=null,e=L.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var a=L.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=au(),L.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),a=0;a<l;a++)e[a]=Ft;return t.index++,e}function Qt(l,t){return typeof t=="function"?t(l):t}function uu(l){var t=Ol();return Fi(t,ol,l)}function Fi(l,t,e){var a=l.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=e;var n=l.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}t.baseQueue=n=u,a.pending=null}if(u=l.baseState,n===null)l.memoizedState=u;else{t=n.next;var s=i=null,c=null,h=t,b=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(F&A)===A:(Gt&A)===A){var m=h.revertLane;if(m===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===ca&&(b=!0);else if((Gt&m)===m){h=h.next,m===ca&&(b=!0);continue}else A={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(s=c=A,i=u):c=c.next=A,L.lanes|=m,ge|=m;A=h.action,Ge&&e(u,A),u=h.hasEagerState?h.eagerState:e(u,A)}else m={lane:A,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(s=c=m,i=u):c=c.next=m,L.lanes|=A,ge|=A;h=h.next}while(h!==null&&h!==t);if(c===null?i=u:c.next=s,!it(u,l.memoizedState)&&(jl=!0,b&&(e=oa,e!==null)))throw e;l.memoizedState=u,l.baseState=i,l.baseQueue=c,a.lastRenderedState=u}return n===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function Ii(l){var t=Ol(),e=t.queue;if(e===null)throw Error(g(311));e.lastRenderedReducer=l;var a=e.dispatch,n=e.pending,u=t.memoizedState;if(n!==null){e.pending=null;var i=n=n.next;do u=l(u,i.action),i=i.next;while(i!==n);it(u,t.memoizedState)||(jl=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),e.lastRenderedState=u}return[u,a]}function Go(l,t,e){var a=L,n=Ol(),u=ll;if(u){if(e===void 0)throw Error(g(407));e=e()}else e=t();var i=!it((ol||n).memoizedState,e);if(i&&(n.memoizedState=e,jl=!0),n=n.queue,ts(Zo.bind(null,a,n,l),[l]),n.getSnapshot!==t||i||Cl!==null&&Cl.memoizedState.tag&1){if(a.flags|=2048,ha(9,{destroy:void 0},Xo.bind(null,a,n,e,t),null),dl===null)throw Error(g(349));u||(Gt&127)!==0||Qo(a,t,e)}return e}function Qo(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=L.updateQueue,t===null?(t=au(),L.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Xo(l,t,e,a){t.value=e,t.getSnapshot=a,Lo(t)&&Vo(l)}function Zo(l,t,e){return e(function(){Lo(t)&&Vo(l)})}function Lo(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!it(l,e)}catch{return!0}}function Vo(l){var t=Ce(l,2);t!==null&&et(t,l,2)}function Pi(l){var t=Jl();if(typeof l=="function"){var e=l;if(l=e(),Ge){It(!0);try{e()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:l},t}function Ko(l,t,e,a){return l.baseState=e,Fi(l,ol,typeof a=="function"?a:Qt)}function lp(l,t,e,a,n){if(cu(l))throw Error(g(485));if(l=t.action,l!==null){var u={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};S.T!==null?e(!0):u.isTransition=!1,a(u),e=t.pending,e===null?(u.next=t.pending=u,Jo(t,u)):(u.next=e.next,t.pending=e.next=u)}}function Jo(l,t){var e=t.action,a=t.payload,n=l.state;if(t.isTransition){var u=S.T,i={};S.T=i;try{var s=e(n,a),c=S.S;c!==null&&c(i,s),$o(l,t,s)}catch(h){ls(l,t,h)}finally{u!==null&&i.types!==null&&(u.types=i.types),S.T=u}}else try{u=e(n,a),$o(l,t,u)}catch(h){ls(l,t,h)}}function $o(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){ko(l,t,a)},function(a){return ls(l,t,a)}):ko(l,t,e)}function ko(l,t,e){t.status="fulfilled",t.value=e,Wo(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Jo(l,e)))}function ls(l,t,e){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=e,Wo(t),t=t.next;while(t!==a)}l.action=null}function Wo(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fo(l,t){return t}function Io(l,t){if(ll){var e=dl.formState;if(e!==null){l:{var a=L;if(ll){if(pl){t:{for(var n=pl,u=St;n.nodeType!==8;){if(!u){n=null;break t}if(n=_t(n.nextSibling),n===null){n=null;break t}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){pl=_t(n.nextSibling),a=n.data==="F!";break l}}ae(a)}a=!1}a&&(t=e[0])}}return e=Jl(),e.memoizedState=e.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=a,e=yr.bind(null,L,a),a.dispatch=e,a=Pi(!1),u=is.bind(null,L,!1,a.queue),a=Jl(),n={state:t,dispatch:null,action:l,pending:null},a.queue=n,e=lp.bind(null,L,n,u,e),n.dispatch=e,a.memoizedState=l,[t,e,!1]}function Po(l){var t=Ol();return lr(t,ol,l)}function lr(l,t,e){if(t=Fi(l,t,Fo)[0],l=uu(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Pa(t)}catch(i){throw i===ra?kn:i}else a=t;t=Ol();var n=t.queue,u=n.dispatch;return e!==t.memoizedState&&(L.flags|=2048,ha(9,{destroy:void 0},tp.bind(null,n,e),null)),[a,u,l]}function tp(l,t){l.action=t}function tr(l){var t=Ol(),e=ol;if(e!==null)return lr(t,e,l);Ol(),t=t.memoizedState,e=Ol();var a=e.queue.dispatch;return e.memoizedState=l,[t,a,!1]}function ha(l,t,e,a){return l={tag:l,create:e,deps:a,inst:t,next:null},t=L.updateQueue,t===null&&(t=au(),L.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(a=e.next,e.next=l,l.next=a,t.lastEffect=l),l}function er(){return Ol().memoizedState}function iu(l,t,e,a){var n=Jl();L.flags|=l,n.memoizedState=ha(1|t,{destroy:void 0},e,a===void 0?null:a)}function su(l,t,e,a){var n=Ol();a=a===void 0?null:a;var u=n.memoizedState.inst;ol!==null&&a!==null&&Vi(a,ol.memoizedState.deps)?n.memoizedState=ha(t,u,e,a):(L.flags|=l,n.memoizedState=ha(1|t,u,e,a))}function ar(l,t){iu(8390656,8,l,t)}function ts(l,t){su(2048,8,l,t)}function ep(l){L.flags|=4;var t=L.updateQueue;if(t===null)t=au(),L.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function nr(l){var t=Ol().memoizedState;return ep({ref:t,nextImpl:l}),function(){if((al&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function ur(l,t){return su(4,2,l,t)}function ir(l,t){return su(4,4,l,t)}function sr(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function cr(l,t,e){e=e!=null?e.concat([l]):null,su(4,4,sr.bind(null,t,l),e)}function es(){}function or(l,t){var e=Ol();t=t===void 0?null:t;var a=e.memoizedState;return t!==null&&Vi(t,a[1])?a[0]:(e.memoizedState=[l,t],l)}function rr(l,t){var e=Ol();t=t===void 0?null:t;var a=e.memoizedState;if(t!==null&&Vi(t,a[1]))return a[0];if(a=l(),Ge){It(!0);try{l()}finally{It(!1)}}return e.memoizedState=[a,t],a}function as(l,t,e){return e===void 0||(Gt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=gf(),L.lanes|=l,ge|=l,e)}function fr(l,t,e,a){return it(e,t)?e:ga.current!==null?(l=as(l,e,a),it(l,t)||(jl=!0),l):(Gt&42)===0||(Gt&1073741824)!==0&&(F&261930)===0?(jl=!0,l.memoizedState=e):(l=gf(),L.lanes|=l,ge|=l,t)}function gr(l,t,e,a,n){var u=w.p;w.p=u!==0&&8>u?u:8;var i=S.T,s={};S.T=s,is(l,!1,t,e);try{var c=n(),h=S.S;if(h!==null&&h(s,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var b=Fd(c,a);ln(l,t,b,gt(l))}else ln(l,t,a,gt(l))}catch(A){ln(l,t,{then:function(){},status:"rejected",reason:A},gt())}finally{w.p=u,i!==null&&s.types!==null&&(i.types=s.types),S.T=i}}function ap(){}function ns(l,t,e,a){if(l.tag!==5)throw Error(g(476));var n=dr(l).queue;gr(l,n,t,Q,e===null?ap:function(){return pr(l),e(a)})}function dr(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:Q},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function pr(l){var t=dr(l);t.next===null&&(t=l.alternate.memoizedState),ln(l,t.next.queue,{},gt())}function us(){return Ql(vn)}function hr(){return Ol().memoizedState}function mr(){return Ol().memoizedState}function np(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=gt();l=ie(e);var a=se(t,l,e);a!==null&&(et(a,t,e),ka(a,t,e)),t={cache:Ui()},l.payload=t;return}t=t.return}}function up(l,t,e){var a=gt();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},cu(l)?vr(t,e):(e=Ai(l,t,e,a),e!==null&&(et(e,l,a),br(e,t,a)))}function yr(l,t,e){var a=gt();ln(l,t,e,a)}function ln(l,t,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(cu(l))vr(t,n);else{var u=l.alternate;if(l.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var i=t.lastRenderedState,s=u(i,e);if(n.hasEagerState=!0,n.eagerState=s,it(s,i))return Xn(l,t,n,0),dl===null&&Qn(),!1}catch{}if(e=Ai(l,t,n,a),e!==null)return et(e,l,a),br(e,t,a),!0}return!1}function is(l,t,e,a){if(a={lane:2,revertLane:Bs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cu(l)){if(t)throw Error(g(479))}else t=Ai(l,e,a,2),t!==null&&et(t,l,2)}function cu(l){var t=l.alternate;return l===L||t!==null&&t===L}function vr(l,t){da=tu=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function br(l,t,e){if((e&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,e|=a,t.lanes=e,Ac(l,e)}}var tn={readContext:Ql,use:nu,useCallback:Tl,useContext:Tl,useEffect:Tl,useImperativeHandle:Tl,useLayoutEffect:Tl,useInsertionEffect:Tl,useMemo:Tl,useReducer:Tl,useRef:Tl,useState:Tl,useDebugValue:Tl,useDeferredValue:Tl,useTransition:Tl,useSyncExternalStore:Tl,useId:Tl,useHostTransitionStatus:Tl,useFormState:Tl,useActionState:Tl,useOptimistic:Tl,useMemoCache:Tl,useCacheRefresh:Tl};tn.useEffectEvent=Tl;var Sr={readContext:Ql,use:nu,useCallback:function(l,t){return Jl().memoizedState=[l,t===void 0?null:t],l},useContext:Ql,useEffect:ar,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,iu(4194308,4,sr.bind(null,t,l),e)},useLayoutEffect:function(l,t){return iu(4194308,4,l,t)},useInsertionEffect:function(l,t){iu(4,2,l,t)},useMemo:function(l,t){var e=Jl();t=t===void 0?null:t;var a=l();if(Ge){It(!0);try{l()}finally{It(!1)}}return e.memoizedState=[a,t],a},useReducer:function(l,t,e){var a=Jl();if(e!==void 0){var n=e(t);if(Ge){It(!0);try{e(t)}finally{It(!1)}}}else n=t;return a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},a.queue=l,l=l.dispatch=up.bind(null,L,l),[a.memoizedState,l]},useRef:function(l){var t=Jl();return l={current:l},t.memoizedState=l},useState:function(l){l=Pi(l);var t=l.queue,e=yr.bind(null,L,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:es,useDeferredValue:function(l,t){var e=Jl();return as(e,l,t)},useTransition:function(){var l=Pi(!1);return l=gr.bind(null,L,l.queue,!0,!1),Jl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var a=L,n=Jl();if(ll){if(e===void 0)throw Error(g(407));e=e()}else{if(e=t(),dl===null)throw Error(g(349));(F&127)!==0||Qo(a,t,e)}n.memoizedState=e;var u={value:e,getSnapshot:t};return n.queue=u,ar(Zo.bind(null,a,u,l),[l]),a.flags|=2048,ha(9,{destroy:void 0},Xo.bind(null,a,u,e,t),null),e},useId:function(){var l=Jl(),t=dl.identifierPrefix;if(ll){var e=Ot,a=Dt;e=(a&~(1<<32-ut(a)-1)).toString(32)+e,t="_"+t+"R_"+e,e=eu++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Id++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:us,useFormState:Io,useActionState:Io,useOptimistic:function(l){var t=Jl();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=is.bind(null,L,!0,e),e.dispatch=t,[l,t]},useMemoCache:Wi,useCacheRefresh:function(){return Jl().memoizedState=np.bind(null,L)},useEffectEvent:function(l){var t=Jl(),e={impl:l};return t.memoizedState=e,function(){if((al&2)!==0)throw Error(g(440));return e.impl.apply(void 0,arguments)}}},ss={readContext:Ql,use:nu,useCallback:or,useContext:Ql,useEffect:ts,useImperativeHandle:cr,useInsertionEffect:ur,useLayoutEffect:ir,useMemo:rr,useReducer:uu,useRef:er,useState:function(){return uu(Qt)},useDebugValue:es,useDeferredValue:function(l,t){var e=Ol();return fr(e,ol.memoizedState,l,t)},useTransition:function(){var l=uu(Qt)[0],t=Ol().memoizedState;return[typeof l=="boolean"?l:Pa(l),t]},useSyncExternalStore:Go,useId:hr,useHostTransitionStatus:us,useFormState:Po,useActionState:Po,useOptimistic:function(l,t){var e=Ol();return Ko(e,ol,l,t)},useMemoCache:Wi,useCacheRefresh:mr};ss.useEffectEvent=nr;var zr={readContext:Ql,use:nu,useCallback:or,useContext:Ql,useEffect:ts,useImperativeHandle:cr,useInsertionEffect:ur,useLayoutEffect:ir,useMemo:rr,useReducer:Ii,useRef:er,useState:function(){return Ii(Qt)},useDebugValue:es,useDeferredValue:function(l,t){var e=Ol();return ol===null?as(e,l,t):fr(e,ol.memoizedState,l,t)},useTransition:function(){var l=Ii(Qt)[0],t=Ol().memoizedState;return[typeof l=="boolean"?l:Pa(l),t]},useSyncExternalStore:Go,useId:hr,useHostTransitionStatus:us,useFormState:tr,useActionState:tr,useOptimistic:function(l,t){var e=Ol();return ol!==null?Ko(e,ol,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:Wi,useCacheRefresh:mr};zr.useEffectEvent=nr;function cs(l,t,e,a){t=l.memoizedState,e=e(a,t),e=e==null?t:j({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var os={enqueueSetState:function(l,t,e){l=l._reactInternals;var a=gt(),n=ie(a);n.payload=t,e!=null&&(n.callback=e),t=se(l,n,a),t!==null&&(et(t,l,a),ka(t,l,a))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var a=gt(),n=ie(a);n.tag=1,n.payload=t,e!=null&&(n.callback=e),t=se(l,n,a),t!==null&&(et(t,l,a),ka(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=gt(),a=ie(e);a.tag=2,t!=null&&(a.callback=t),t=se(l,a,e),t!==null&&(et(t,l,e),ka(t,l,e))}};function _r(l,t,e,a,n,u,i){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,u,i):t.prototype&&t.prototype.isPureReactComponent?!Qa(e,a)||!Qa(n,u):!0}function Ar(l,t,e,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,a),t.state!==l&&os.enqueueReplaceState(t,t.state,null)}function Qe(l,t){var e=t;if("ref"in t){e={};for(var a in t)a!=="ref"&&(e[a]=t[a])}if(l=l.defaultProps){e===t&&(e=j({},e));for(var n in l)e[n]===void 0&&(e[n]=l[n])}return e}function Tr(l){Gn(l)}function Er(l){console.error(l)}function Mr(l){Gn(l)}function ou(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function wr(l,t,e){try{var a=l.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function rs(l,t,e){return e=ie(e),e.tag=3,e.payload={element:null},e.callback=function(){ou(l,t)},e}function Dr(l){return l=ie(l),l.tag=3,l}function Or(l,t,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;l.payload=function(){return n(u)},l.callback=function(){wr(t,e,a)}}var i=e.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(l.callback=function(){wr(t,e,a),typeof n!="function"&&(de===null?de=new Set([this]):de.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function ip(l,t,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=e.alternate,t!==null&&sa(t,e,n,!0),e=ct.current,e!==null){switch(e.tag){case 31:case 13:return zt===null?zu():e.alternate===null&&El===0&&(El=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===Wn?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([a]):t.add(a),Hs(l,a,n)),!1;case 22:return e.flags|=65536,a===Wn?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([a]):e.add(a)),Hs(l,a,n)),!1}throw Error(g(435,e.tag))}return Hs(l,a,n),zu(),!1}if(ll)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Oi&&(l=Error(g(422),{cause:a}),La(yt(l,e)))):(a!==Oi&&(t=Error(g(423),{cause:a}),La(yt(t,e))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,a=yt(a,e),n=rs(l.stateNode,a,n),Gi(l,n),El!==4&&(El=2)),!1;var u=Error(g(520),{cause:a});if(u=yt(u,e),rn===null?rn=[u]:rn.push(u),El!==4&&(El=2),t===null)return!0;a=yt(a,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=n&-n,e.lanes|=l,l=rs(e.stateNode,a,l),Gi(e,l),!1;case 1:if(t=e.type,u=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(de===null||!de.has(u))))return e.flags|=65536,n&=-n,e.lanes|=n,n=Dr(n),Or(n,l,e,a),Gi(e,n),!1}e=e.return}while(e!==null);return!1}var fs=Error(g(461)),jl=!1;function Xl(l,t,e,a){t.child=l===null?xo(t,null,e,a):Ye(t,l.child,e,a)}function Nr(l,t,e,a,n){e=e.render;var u=t.ref;if("ref"in a){var i={};for(var s in a)s!=="ref"&&(i[s]=a[s])}else i=a;return He(t),a=Ki(l,t,e,i,u,n),s=Ji(),l!==null&&!jl?($i(l,t,n),Xt(l,t,n)):(ll&&s&&wi(t),t.flags|=1,Xl(l,t,a,n),t.child)}function Cr(l,t,e,a,n){if(l===null){var u=e.type;return typeof u=="function"&&!Ti(u)&&u.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=u,jr(l,t,u,a,n)):(l=Ln(e.type,null,a,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(u=l.child,!bs(l,n)){var i=u.memoizedProps;if(e=e.compare,e=e!==null?e:Qa,e(i,a)&&l.ref===t.ref)return Xt(l,t,n)}return t.flags|=1,l=Rt(u,a),l.ref=t.ref,l.return=t,t.child=l}function jr(l,t,e,a,n){if(l!==null){var u=l.memoizedProps;if(Qa(u,a)&&l.ref===t.ref)if(jl=!1,t.pendingProps=a=u,bs(l,n))(l.flags&131072)!==0&&(jl=!0);else return t.lanes=l.lanes,Xt(l,t,n)}return gs(l,t,e,a,n)}function xr(l,t,e,a){var n=a.children,u=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(u=u!==null?u.baseLanes|e:e,l!==null){for(a=t.child=l.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~u}else a=0,t.child=null;return Ur(l,t,u,e,a)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&$n(t,u!==null?u.cachePool:null),u!==null?Ro(t,u):Xi(),qo(t);else return a=t.lanes=536870912,Ur(l,t,u!==null?u.baseLanes|e:e,e,a)}else u!==null?($n(t,u.cachePool),Ro(t,u),oe(),t.memoizedState=null):(l!==null&&$n(t,null),Xi(),oe());return Xl(l,t,n,e),t.child}function en(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ur(l,t,e,a,n){var u=Ri();return u=u===null?null:{parent:Nl._currentValue,pool:u},t.memoizedState={baseLanes:e,cachePool:u},l!==null&&$n(t,null),Xi(),qo(t),l!==null&&sa(l,t,a,!0),t.childLanes=n,null}function ru(l,t){return t=gu({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Hr(l,t,e){return Ye(t,l.child,null,e),l=ru(t,t.pendingProps),l.flags|=2,ot(t),t.memoizedState=null,l}function sp(l,t,e){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(a.mode==="hidden")return l=ru(t,a),t.lanes=536870912,en(null,l);if(Li(t),(l=pl)?(l=$f(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:te!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},e=vo(l),e.return=t,t.child=e,Gl=t,pl=null)):l=null,l===null)throw ae(t);return t.lanes=536870912,null}return ru(t,a)}var u=l.memoizedState;if(u!==null){var i=u.dehydrated;if(Li(t),n)if(t.flags&256)t.flags&=-257,t=Hr(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(g(558));else if(jl||sa(l,t,e,!1),n=(e&l.childLanes)!==0,jl||n){if(a=dl,a!==null&&(i=Tc(a,e),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ce(l,i),et(a,l,i),fs;zu(),t=Hr(l,t,e)}else l=u.treeContext,pl=_t(i.nextSibling),Gl=t,ll=!0,ee=null,St=!1,l!==null&&zo(t,l),t=ru(t,a),t.flags|=4096;return t}return l=Rt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function fu(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(g(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function gs(l,t,e,a,n){return He(t),e=Ki(l,t,e,a,void 0,n),a=Ji(),l!==null&&!jl?($i(l,t,n),Xt(l,t,n)):(ll&&a&&wi(t),t.flags|=1,Xl(l,t,e,n),t.child)}function Rr(l,t,e,a,n,u){return He(t),t.updateQueue=null,e=Yo(t,a,e,n),Bo(l),a=Ji(),l!==null&&!jl?($i(l,t,u),Xt(l,t,u)):(ll&&a&&wi(t),t.flags|=1,Xl(l,t,e,u),t.child)}function qr(l,t,e,a,n){if(He(t),t.stateNode===null){var u=aa,i=e.contextType;typeof i=="object"&&i!==null&&(u=Ql(i)),u=new e(a,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=os,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=a,u.state=t.memoizedState,u.refs={},Bi(t),i=e.contextType,u.context=typeof i=="object"&&i!==null?Ql(i):aa,u.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(cs(t,e,i,a),u.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&os.enqueueReplaceState(u,u.state,null),Fa(t,a,u,n),Wa(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){u=t.stateNode;var s=t.memoizedProps,c=Qe(e,s);u.props=c;var h=u.context,b=e.contextType;i=aa,typeof b=="object"&&b!==null&&(i=Ql(b));var A=e.getDerivedStateFromProps;b=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(s||h!==i)&&Ar(t,u,a,i),ue=!1;var m=t.memoizedState;u.state=m,Fa(t,a,u,n),Wa(),h=t.memoizedState,s||m!==h||ue?(typeof A=="function"&&(cs(t,e,A,a),h=t.memoizedState),(c=ue||_r(t,e,c,a,m,h,i))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=h),u.props=a,u.state=h,u.context=i,a=c):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{u=t.stateNode,Yi(l,t),i=t.memoizedProps,b=Qe(e,i),u.props=b,A=t.pendingProps,m=u.context,h=e.contextType,c=aa,typeof h=="object"&&h!==null&&(c=Ql(h)),s=e.getDerivedStateFromProps,(h=typeof s=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==A||m!==c)&&Ar(t,u,a,c),ue=!1,m=t.memoizedState,u.state=m,Fa(t,a,u,n),Wa();var v=t.memoizedState;i!==A||m!==v||ue||l!==null&&l.dependencies!==null&&Kn(l.dependencies)?(typeof s=="function"&&(cs(t,e,s,a),v=t.memoizedState),(b=ue||_r(t,e,b,a,m,v,c)||l!==null&&l.dependencies!==null&&Kn(l.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,v,c),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,v,c)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=v),u.props=a,u.state=v,u.context=c,a=b):(typeof u.componentDidUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===l.memoizedProps&&m===l.memoizedState||(t.flags|=1024),a=!1)}return u=a,fu(l,t),a=(t.flags&128)!==0,u||a?(u=t.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,l!==null&&a?(t.child=Ye(t,l.child,null,n),t.child=Ye(t,null,e,n)):Xl(l,t,e,n),t.memoizedState=u.state,l=t.child):l=Xt(l,t,n),l}function Br(l,t,e,a){return xe(),t.flags|=256,Xl(l,t,e,a),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ps(l){return{baseLanes:l,cachePool:wo()}}function hs(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=ft),l}function Yr(l,t,e){var a=t.pendingProps,n=!1,u=(t.flags&128)!==0,i;if((i=u)||(i=l!==null&&l.memoizedState===null?!1:(Dl.current&2)!==0),i&&(n=!0,t.flags&=-129),i=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(n?ce(t):oe(),(l=pl)?(l=$f(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:te!==null?{id:Dt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},e=vo(l),e.return=t,t.child=e,Gl=t,pl=null)):l=null,l===null)throw ae(t);return Fs(l)?t.lanes=32:t.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(oe(),n=t.mode,s=gu({mode:"hidden",children:s},n),a=je(a,n,e,null),s.return=t,a.return=t,s.sibling=a,t.child=s,a=t.child,a.memoizedState=ps(e),a.childLanes=hs(l,i,e),t.memoizedState=ds,en(null,a)):(ce(t),ms(t,s))}var c=l.memoizedState;if(c!==null&&(s=c.dehydrated,s!==null)){if(u)t.flags&256?(ce(t),t.flags&=-257,t=ys(l,t,e)):t.memoizedState!==null?(oe(),t.child=l.child,t.flags|=128,t=null):(oe(),s=a.fallback,n=t.mode,a=gu({mode:"visible",children:a.children},n),s=je(s,n,e,null),s.flags|=2,a.return=t,s.return=t,a.sibling=s,t.child=a,Ye(t,l.child,null,e),a=t.child,a.memoizedState=ps(e),a.childLanes=hs(l,i,e),t.memoizedState=ds,t=en(null,a));else if(ce(t),Fs(s)){if(i=s.nextSibling&&s.nextSibling.dataset,i)var h=i.dgst;i=h,a=Error(g(419)),a.stack="",a.digest=i,La({value:a,source:null,stack:null}),t=ys(l,t,e)}else if(jl||sa(l,t,e,!1),i=(e&l.childLanes)!==0,jl||i){if(i=dl,i!==null&&(a=Tc(i,e),a!==0&&a!==c.retryLane))throw c.retryLane=a,Ce(l,a),et(i,l,a),fs;Ws(s)||zu(),t=ys(l,t,e)}else Ws(s)?(t.flags|=192,t.child=l.child,t=null):(l=c.treeContext,pl=_t(s.nextSibling),Gl=t,ll=!0,ee=null,St=!1,l!==null&&zo(t,l),t=ms(t,a.children),t.flags|=4096);return t}return n?(oe(),s=a.fallback,n=t.mode,c=l.child,h=c.sibling,a=Rt(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,h!==null?s=Rt(h,s):(s=je(s,n,e,null),s.flags|=2),s.return=t,a.return=t,a.sibling=s,t.child=a,en(null,a),a=t.child,s=l.child.memoizedState,s===null?s=ps(e):(n=s.cachePool,n!==null?(c=Nl._currentValue,n=n.parent!==c?{parent:c,pool:c}:n):n=wo(),s={baseLanes:s.baseLanes|e,cachePool:n}),a.memoizedState=s,a.childLanes=hs(l,i,e),t.memoizedState=ds,en(l.child,a)):(ce(t),e=l.child,l=e.sibling,e=Rt(e,{mode:"visible",children:a.children}),e.return=t,e.sibling=null,l!==null&&(i=t.deletions,i===null?(t.deletions=[l],t.flags|=16):i.push(l)),t.child=e,t.memoizedState=null,e)}function ms(l,t){return t=gu({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function gu(l,t){return l=st(22,l,null,t),l.lanes=0,l}function ys(l,t,e){return Ye(t,l.child,null,e),l=ms(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Gr(l,t,e){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),ji(l.return,t,e)}function vs(l,t,e,a,n,u){var i=l.memoizedState;i===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:u}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=n,i.treeForkCount=u)}function Qr(l,t,e){var a=t.pendingProps,n=a.revealOrder,u=a.tail;a=a.children;var i=Dl.current,s=(i&2)!==0;if(s?(i=i&1|2,t.flags|=128):i&=1,O(Dl,i),Xl(l,t,a,e),a=ll?Za:0,!s&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Gr(l,e,t);else if(l.tag===19)Gr(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(e=t.child,n=null;e!==null;)l=e.alternate,l!==null&&lu(l)===null&&(n=e),e=e.sibling;e=n,e===null?(n=t.child,t.child=null):(n=e.sibling,e.sibling=null),vs(t,!1,n,e,u,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&lu(l)===null){t.child=n;break}l=n.sibling,n.sibling=e,e=n,n=l}vs(t,!0,e,null,u,a);break;case"together":vs(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Xt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),ge|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(sa(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(g(153));if(t.child!==null){for(l=t.child,e=Rt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Rt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function bs(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Kn(l)))}function cp(l,t,e){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),ne(t,Nl,l.memoizedState.cache),xe();break;case 27:case 5:Da(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:ne(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Li(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(ce(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Yr(l,t,e):(ce(t),l=Xt(l,t,e),l!==null?l.sibling:null);ce(t);break;case 19:var n=(l.flags&128)!==0;if(a=(e&t.childLanes)!==0,a||(sa(l,t,e,!1),a=(e&t.childLanes)!==0),n){if(a)return Qr(l,t,e);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),O(Dl,Dl.current),a)break;return null;case 22:return t.lanes=0,xr(l,t,e,t.pendingProps);case 24:ne(t,Nl,l.memoizedState.cache)}return Xt(l,t,e)}function Xr(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)jl=!0;else{if(!bs(l,e)&&(t.flags&128)===0)return jl=!1,cp(l,t,e);jl=(l.flags&131072)!==0}else jl=!1,ll&&(t.flags&1048576)!==0&&So(t,Za,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=qe(t.elementType),t.type=l,typeof l=="function")Ti(l)?(a=Qe(l,a),t.tag=1,t=qr(null,t,l,a,e)):(t.tag=0,t=gs(null,t,l,a,e));else{if(l!=null){var n=l.$$typeof;if(n===Al){t.tag=11,t=Nr(null,t,l,a,e);break l}else if(n===J){t.tag=14,t=Cr(null,t,l,a,e);break l}}throw t=jt(l)||l,Error(g(306,t,""))}}return t;case 0:return gs(l,t,t.type,t.pendingProps,e);case 1:return a=t.type,n=Qe(a,t.pendingProps),qr(l,t,a,n,e);case 3:l:{if(Kl(t,t.stateNode.containerInfo),l===null)throw Error(g(387));a=t.pendingProps;var u=t.memoizedState;n=u.element,Yi(l,t),Fa(t,a,null,e);var i=t.memoizedState;if(a=i.cache,ne(t,Nl,a),a!==u.cache&&xi(t,[Nl],e,!0),Wa(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=Br(l,t,a,e);break l}else if(a!==n){n=yt(Error(g(424)),t),La(n),t=Br(l,t,a,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(pl=_t(l.firstChild),Gl=t,ll=!0,ee=null,St=!0,e=xo(t,null,a,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(xe(),a===n){t=Xt(l,t,e);break l}Xl(l,t,a,e)}t=t.child}return t;case 26:return fu(l,t),l===null?(e=lg(t.type,null,t.pendingProps,null))?t.memoizedState=e:ll||(e=t.type,l=t.pendingProps,a=Du($.current).createElement(e),a[Yl]=t,a[Wl]=l,Zl(a,e,l),ql(a),t.stateNode=a):t.memoizedState=lg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Da(t),l===null&&ll&&(a=t.stateNode=Ff(t.type,t.pendingProps,$.current),Gl=t,St=!0,n=pl,ye(t.type)?(Is=n,pl=_t(a.firstChild)):pl=n),Xl(l,t,t.pendingProps.children,e),fu(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((n=a=pl)&&(a=Bp(a,t.type,t.pendingProps,St),a!==null?(t.stateNode=a,Gl=t,pl=_t(a.firstChild),St=!1,n=!0):n=!1),n||ae(t)),Da(t),n=t.type,u=t.pendingProps,i=l!==null?l.memoizedProps:null,a=u.children,Js(n,u)?a=null:i!==null&&Js(n,i)&&(t.flags|=32),t.memoizedState!==null&&(n=Ki(l,t,Pd,null,null,e),vn._currentValue=n),fu(l,t),Xl(l,t,a,e),t.child;case 6:return l===null&&ll&&((l=e=pl)&&(e=Yp(e,t.pendingProps,St),e!==null?(t.stateNode=e,Gl=t,pl=null,l=!0):l=!1),l||ae(t)),null;case 13:return Yr(l,t,e);case 4:return Kl(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=Ye(t,null,a,e):Xl(l,t,a,e),t.child;case 11:return Nr(l,t,t.type,t.pendingProps,e);case 7:return Xl(l,t,t.pendingProps,e),t.child;case 8:return Xl(l,t,t.pendingProps.children,e),t.child;case 12:return Xl(l,t,t.pendingProps.children,e),t.child;case 10:return a=t.pendingProps,ne(t,t.type,a.value),Xl(l,t,a.children,e),t.child;case 9:return n=t.type._context,a=t.pendingProps.children,He(t),n=Ql(n),a=a(n),t.flags|=1,Xl(l,t,a,e),t.child;case 14:return Cr(l,t,t.type,t.pendingProps,e);case 15:return jr(l,t,t.type,t.pendingProps,e);case 19:return Qr(l,t,e);case 31:return sp(l,t,e);case 22:return xr(l,t,e,t.pendingProps);case 24:return He(t),a=Ql(Nl),l===null?(n=Ri(),n===null&&(n=dl,u=Ui(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=e),n=u),t.memoizedState={parent:a,cache:n},Bi(t),ne(t,Nl,n)):((l.lanes&e)!==0&&(Yi(l,t),Fa(t,null,null,e),Wa()),n=l.memoizedState,u=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ne(t,Nl,a)):(a=u.cache,ne(t,Nl,a),a!==n.cache&&xi(t,[Nl],e,!0))),Xl(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function Zt(l){l.flags|=4}function Ss(l,t,e,a,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(mf())l.flags|=8192;else throw Be=Wn,qi}else l.flags&=-16777217}function Zr(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!ug(t))if(mf())l.flags|=8192;else throw Be=Wn,qi}function du(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?zc():536870912,l.lanes|=t,ba|=t)}function an(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null}}function hl(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,a=0;if(t)for(var n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=a,l.childLanes=e,t}function op(l,t,e){var a=t.pendingProps;switch(Di(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hl(t),null;case 1:return hl(t),null;case 3:return e=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(Nl),wl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(ia(t)?Zt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ni())),hl(t),null;case 26:var n=t.type,u=t.memoizedState;return l===null?(Zt(t),u!==null?(hl(t),Zr(t,u)):(hl(t),Ss(t,n,null,a,e))):u?u!==l.memoizedState?(Zt(t),hl(t),Zr(t,u)):(hl(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&Zt(t),hl(t),Ss(t,n,l,a,e)),null;case 27:if(Tn(t),e=$.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(g(166));return hl(t),null}l=R.current,ia(t)?_o(t):(l=Ff(n,a,e),t.stateNode=l,Zt(t))}return hl(t),null;case 5:if(Tn(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&Zt(t);else{if(!a){if(t.stateNode===null)throw Error(g(166));return hl(t),null}if(u=R.current,ia(t))_o(t);else{var i=Du($.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?u.multiple=!0:a.size&&(u.size=a.size);break;default:u=typeof a.is=="string"?i.createElement(n,{is:a.is}):i.createElement(n)}}u[Yl]=t,u[Wl]=a;l:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break l;for(;i.sibling===null;){if(i.return===null||i.return===t)break l;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=u;l:switch(Zl(u,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&Zt(t)}}return hl(t),Ss(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&Zt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(g(166));if(l=$.current,ia(t)){if(l=t.stateNode,e=t.memoizedProps,a=null,n=Gl,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}l[Yl]=t,l=!!(l.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||Gf(l.nodeValue,e)),l||ae(t,!0)}else l=Du(l).createTextNode(a),l[Yl]=t,t.stateNode=l}return hl(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(a=ia(t),e!==null){if(l===null){if(!a)throw Error(g(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(557));l[Yl]=t}else xe(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;hl(t),l=!1}else e=Ni(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(ot(t),t):(ot(t),null);if((t.flags&128)!==0)throw Error(g(558))}return hl(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=ia(t),a!==null&&a.dehydrated!==null){if(l===null){if(!n)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));n[Yl]=t}else xe(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;hl(t),n=!1}else n=Ni(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ot(t),t):(ot(t),null)}return ot(t),(t.flags&128)!==0?(t.lanes=e,t):(e=a!==null,l=l!==null&&l.memoizedState!==null,e&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),du(t,t.updateQueue),hl(t),null);case 4:return wl(),l===null&&Xs(t.stateNode.containerInfo),hl(t),null;case 10:return Yt(t.type),hl(t),null;case 19:if(T(Dl),a=t.memoizedState,a===null)return hl(t),null;if(n=(t.flags&128)!==0,u=a.rendering,u===null)if(n)an(a,!1);else{if(El!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(u=lu(l),u!==null){for(t.flags|=128,an(a,!1),l=u.updateQueue,t.updateQueue=l,du(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)yo(e,l),e=e.sibling;return O(Dl,Dl.current&1|2),ll&&qt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&at()>vu&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304)}else{if(!n)if(l=lu(u),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,du(t,l),an(a,!0),a.tail===null&&a.tailMode==="hidden"&&!u.alternate&&!ll)return hl(t),null}else 2*at()-a.renderingStartTime>vu&&e!==536870912&&(t.flags|=128,n=!0,an(a,!1),t.lanes=4194304);a.isBackwards?(u.sibling=t.child,t.child=u):(l=a.last,l!==null?l.sibling=u:t.child=u,a.last=u)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=at(),l.sibling=null,e=Dl.current,O(Dl,n?e&1|2:e&1),ll&&qt(t,a.treeForkCount),l):(hl(t),null);case 22:case 23:return ot(t),Zi(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(e&536870912)!==0&&(t.flags&128)===0&&(hl(t),t.subtreeFlags&6&&(t.flags|=8192)):hl(t),e=t.updateQueue,e!==null&&du(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==e&&(t.flags|=2048),l!==null&&T(Re),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Yt(Nl),hl(t),null;case 25:return null;case 30:return null}throw Error(g(156,t.tag))}function rp(l,t){switch(Di(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Yt(Nl),wl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(ot(t),t.alternate===null)throw Error(g(340));xe()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(ot(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(g(340));xe()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return T(Dl),null;case 4:return wl(),null;case 10:return Yt(t.type),null;case 22:case 23:return ot(t),Zi(),l!==null&&T(Re),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Yt(Nl),null;case 25:return null;default:return null}}function Lr(l,t){switch(Di(t),t.tag){case 3:Yt(Nl),wl();break;case 26:case 27:case 5:Tn(t);break;case 4:wl();break;case 31:t.memoizedState!==null&&ot(t);break;case 13:ot(t);break;case 19:T(Dl);break;case 10:Yt(t.type);break;case 22:case 23:ot(t),Zi(),l!==null&&T(Re);break;case 24:Yt(Nl)}}function nn(l,t){try{var e=t.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&l)===l){a=void 0;var u=e.create,i=e.inst;a=u(),i.destroy=a}e=e.next}while(e!==n)}}catch(s){il(t,t.return,s)}}function re(l,t,e){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&l)===l){var i=a.inst,s=i.destroy;if(s!==void 0){i.destroy=void 0,n=t;var c=e,h=s;try{h()}catch(b){il(n,c,b)}}}a=a.next}while(a!==u)}}catch(b){il(t,t.return,b)}}function Vr(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Ho(t,e)}catch(a){il(l,l.return,a)}}}function Kr(l,t,e){e.props=Qe(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(a){il(l,t,a)}}function un(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:a=l.stateNode;break;default:a=l.stateNode}typeof e=="function"?l.refCleanup=e(a):e.current=a}}catch(n){il(l,t,n)}}function Nt(l,t){var e=l.ref,a=l.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){il(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){il(l,t,n)}else e.current=null}function Jr(l){var t=l.type,e=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break l;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){il(l,l.return,n)}}function zs(l,t,e){try{var a=l.stateNode;jp(a,l.type,e,t),a[Wl]=t}catch(n){il(l,l.return,n)}}function $r(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ye(l.type)||l.tag===4}function _s(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||$r(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ye(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function As(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Ut));else if(a!==4&&(a===27&&ye(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(As(l,t,e),l=l.sibling;l!==null;)As(l,t,e),l=l.sibling}function pu(l,t,e){var a=l.tag;if(a===5||a===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(a!==4&&(a===27&&ye(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(pu(l,t,e),l=l.sibling;l!==null;)pu(l,t,e),l=l.sibling}function kr(l){var t=l.stateNode,e=l.memoizedProps;try{for(var a=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Zl(t,a,e),t[Yl]=l,t[Wl]=e}catch(u){il(l,l.return,u)}}var Lt=!1,xl=!1,Ts=!1,Wr=typeof WeakSet=="function"?WeakSet:Set,Bl=null;function fp(l,t){if(l=l.containerInfo,Vs=Hu,l=so(l),yi(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{e.nodeType,u.nodeType}catch{e=null;break l}var i=0,s=-1,c=-1,h=0,b=0,A=l,m=null;t:for(;;){for(var v;A!==e||n!==0&&A.nodeType!==3||(s=i+n),A!==u||a!==0&&A.nodeType!==3||(c=i+a),A.nodeType===3&&(i+=A.nodeValue.length),(v=A.firstChild)!==null;)m=A,A=v;for(;;){if(A===l)break t;if(m===e&&++h===n&&(s=i),m===u&&++b===a&&(c=i),(v=A.nextSibling)!==null)break;A=m,m=A.parentNode}A=v}e=s===-1||c===-1?null:{start:s,end:c}}else e=null}e=e||{start:0,end:0}}else e=null;for(Ks={focusedElem:l,selectionRange:e},Hu=!1,Bl=t;Bl!==null;)if(t=Bl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Bl=l;else for(;Bl!==null;){switch(t=Bl,u=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)n=l[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&u!==null){l=void 0,e=t,n=u.memoizedProps,u=u.memoizedState,a=e.stateNode;try{var H=Qe(e.type,n);l=a.getSnapshotBeforeUpdate(H,u),a.__reactInternalSnapshotBeforeUpdate=l}catch(G){il(e,e.return,G)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)ks(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ks(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(g(163))}if(l=t.sibling,l!==null){l.return=t.return,Bl=l;break}Bl=t.return}}function Fr(l,t,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Kt(l,e),a&4&&nn(5,e);break;case 1:if(Kt(l,e),a&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(i){il(e,e.return,i)}else{var n=Qe(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(i){il(e,e.return,i)}}a&64&&Vr(e),a&512&&un(e,e.return);break;case 3:if(Kt(l,e),a&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Ho(l,t)}catch(i){il(e,e.return,i)}}break;case 27:t===null&&a&4&&kr(e);case 26:case 5:Kt(l,e),t===null&&a&4&&Jr(e),a&512&&un(e,e.return);break;case 12:Kt(l,e);break;case 31:Kt(l,e),a&4&&lf(l,e);break;case 13:Kt(l,e),a&4&&tf(l,e),a&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=Sp.bind(null,e),Gp(l,e))));break;case 22:if(a=e.memoizedState!==null||Lt,!a){t=t!==null&&t.memoizedState!==null||xl,n=Lt;var u=xl;Lt=a,(xl=t)&&!u?Jt(l,e,(e.subtreeFlags&8772)!==0):Kt(l,e),Lt=n,xl=u}break;case 30:break;default:Kt(l,e)}}function Ir(l){var t=l.alternate;t!==null&&(l.alternate=null,Ir(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&li(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var ml=null,Il=!1;function Vt(l,t,e){for(e=e.child;e!==null;)Pr(l,t,e),e=e.sibling}function Pr(l,t,e){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Oa,e)}catch{}switch(e.tag){case 26:xl||Nt(e,t),Vt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:xl||Nt(e,t);var a=ml,n=Il;ye(e.type)&&(ml=e.stateNode,Il=!1),Vt(l,t,e),hn(e.stateNode),ml=a,Il=n;break;case 5:xl||Nt(e,t);case 6:if(a=ml,n=Il,ml=null,Vt(l,t,e),ml=a,Il=n,ml!==null)if(Il)try{(ml.nodeType===9?ml.body:ml.nodeName==="HTML"?ml.ownerDocument.body:ml).removeChild(e.stateNode)}catch(u){il(e,t,u)}else try{ml.removeChild(e.stateNode)}catch(u){il(e,t,u)}break;case 18:ml!==null&&(Il?(l=ml,Kf(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),wa(l)):Kf(ml,e.stateNode));break;case 4:a=ml,n=Il,ml=e.stateNode.containerInfo,Il=!0,Vt(l,t,e),ml=a,Il=n;break;case 0:case 11:case 14:case 15:re(2,e,t),xl||re(4,e,t),Vt(l,t,e);break;case 1:xl||(Nt(e,t),a=e.stateNode,typeof a.componentWillUnmount=="function"&&Kr(e,t,a)),Vt(l,t,e);break;case 21:Vt(l,t,e);break;case 22:xl=(a=xl)||e.memoizedState!==null,Vt(l,t,e),xl=a;break;default:Vt(l,t,e)}}function lf(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{wa(l)}catch(e){il(t,t.return,e)}}}function tf(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{wa(l)}catch(e){il(t,t.return,e)}}function gp(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wr),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wr),t;default:throw Error(g(435,l.tag))}}function hu(l,t){var e=gp(l);t.forEach(function(a){if(!e.has(a)){e.add(a);var n=zp.bind(null,l,a);a.then(n,n)}})}function Pl(l,t){var e=t.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],u=l,i=t,s=i;l:for(;s!==null;){switch(s.tag){case 27:if(ye(s.type)){ml=s.stateNode,Il=!1;break l}break;case 5:ml=s.stateNode,Il=!1;break l;case 3:case 4:ml=s.stateNode.containerInfo,Il=!0;break l}s=s.return}if(ml===null)throw Error(g(160));Pr(u,i,n),ml=null,Il=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ef(t,l),t=t.sibling}var Mt=null;function ef(l,t){var e=l.alternate,a=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),a&4&&(re(3,l,l.return),nn(3,l),re(5,l,l.return));break;case 1:Pl(t,l),lt(l),a&512&&(xl||e===null||Nt(e,e.return)),a&64&&Lt&&(l=l.updateQueue,l!==null&&(a=l.callbacks,a!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=Mt;if(Pl(t,l),lt(l),a&512&&(xl||e===null||Nt(e,e.return)),a&4){var u=e!==null?e.memoizedState:null;if(a=l.memoizedState,e===null)if(a===null)if(l.stateNode===null){l:{a=l.type,e=l.memoizedProps,n=n.ownerDocument||n;t:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[ja]||u[Yl]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),Zl(u,a,e),u[Yl]=l,ql(u),a=u;break l;case"link":var i=ag("link","href",n).get(a+(e.href||""));if(i){for(var s=0;s<i.length;s++)if(u=i[s],u.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&u.getAttribute("rel")===(e.rel==null?null:e.rel)&&u.getAttribute("title")===(e.title==null?null:e.title)&&u.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){i.splice(s,1);break t}}u=n.createElement(a),Zl(u,a,e),n.head.appendChild(u);break;case"meta":if(i=ag("meta","content",n).get(a+(e.content||""))){for(s=0;s<i.length;s++)if(u=i[s],u.getAttribute("content")===(e.content==null?null:""+e.content)&&u.getAttribute("name")===(e.name==null?null:e.name)&&u.getAttribute("property")===(e.property==null?null:e.property)&&u.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&u.getAttribute("charset")===(e.charSet==null?null:e.charSet)){i.splice(s,1);break t}}u=n.createElement(a),Zl(u,a,e),n.head.appendChild(u);break;default:throw Error(g(468,a))}u[Yl]=l,ql(u),a=u}l.stateNode=a}else ng(n,l.type,l.stateNode);else l.stateNode=eg(n,a,l.memoizedProps);else u!==a?(u===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):u.count--,a===null?ng(n,l.type,l.stateNode):eg(n,a,l.memoizedProps)):a===null&&l.stateNode!==null&&zs(l,l.memoizedProps,e.memoizedProps)}break;case 27:Pl(t,l),lt(l),a&512&&(xl||e===null||Nt(e,e.return)),e!==null&&a&4&&zs(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Pl(t,l),lt(l),a&512&&(xl||e===null||Nt(e,e.return)),l.flags&32){n=l.stateNode;try{We(n,"")}catch(H){il(l,l.return,H)}}a&4&&l.stateNode!=null&&(n=l.memoizedProps,zs(l,n,e!==null?e.memoizedProps:n)),a&1024&&(Ts=!0);break;case 6:if(Pl(t,l),lt(l),a&4){if(l.stateNode===null)throw Error(g(162));a=l.memoizedProps,e=l.stateNode;try{e.nodeValue=a}catch(H){il(l,l.return,H)}}break;case 3:if(Cu=null,n=Mt,Mt=Ou(t.containerInfo),Pl(t,l),Mt=n,lt(l),a&4&&e!==null&&e.memoizedState.isDehydrated)try{wa(t.containerInfo)}catch(H){il(l,l.return,H)}Ts&&(Ts=!1,af(l));break;case 4:a=Mt,Mt=Ou(l.stateNode.containerInfo),Pl(t,l),lt(l),Mt=a;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hu(l,a)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(yu=at()),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hu(l,a)));break;case 22:n=l.memoizedState!==null;var c=e!==null&&e.memoizedState!==null,h=Lt,b=xl;if(Lt=h||n,xl=b||c,Pl(t,l),xl=b,Lt=h,lt(l),a&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(e===null||c||Lt||xl||Xe(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){c=e=t;try{if(u=c.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{s=c.stateNode;var A=c.memoizedProps.style,m=A!=null&&A.hasOwnProperty("display")?A.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(H){il(c,c.return,H)}}}else if(t.tag===6){if(e===null){c=t;try{c.stateNode.nodeValue=n?"":c.memoizedProps}catch(H){il(c,c.return,H)}}}else if(t.tag===18){if(e===null){c=t;try{var v=c.stateNode;n?Jf(v,!0):Jf(c.stateNode,!1)}catch(H){il(c,c.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=l.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,hu(l,e))));break;case 19:Pl(t,l),lt(l),a&4&&(a=l.updateQueue,a!==null&&(l.updateQueue=null,hu(l,a)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var e,a=l.return;a!==null;){if($r(a)){e=a;break}a=a.return}if(e==null)throw Error(g(160));switch(e.tag){case 27:var n=e.stateNode,u=_s(l);pu(l,u,n);break;case 5:var i=e.stateNode;e.flags&32&&(We(i,""),e.flags&=-33);var s=_s(l);pu(l,s,i);break;case 3:case 4:var c=e.stateNode.containerInfo,h=_s(l);As(l,h,c);break;default:throw Error(g(161))}}catch(b){il(l,l.return,b)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function af(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;af(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Kt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fr(l,t.alternate,t),t=t.sibling}function Xe(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:re(4,t,t.return),Xe(t);break;case 1:Nt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Kr(t,t.return,e),Xe(t);break;case 27:hn(t.stateNode);case 26:case 5:Nt(t,t.return),Xe(t);break;case 22:t.memoizedState===null&&Xe(t);break;case 30:Xe(t);break;default:Xe(t)}l=l.sibling}}function Jt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,n=l,u=t,i=u.flags;switch(u.tag){case 0:case 11:case 15:Jt(n,u,e),nn(4,u);break;case 1:if(Jt(n,u,e),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){il(a,a.return,h)}if(a=u,n=a.updateQueue,n!==null){var s=a.stateNode;try{var c=n.shared.hiddenCallbacks;if(c!==null)for(n.shared.hiddenCallbacks=null,n=0;n<c.length;n++)Uo(c[n],s)}catch(h){il(a,a.return,h)}}e&&i&64&&Vr(u),un(u,u.return);break;case 27:kr(u);case 26:case 5:Jt(n,u,e),e&&a===null&&i&4&&Jr(u),un(u,u.return);break;case 12:Jt(n,u,e);break;case 31:Jt(n,u,e),e&&i&4&&lf(n,u);break;case 13:Jt(n,u,e),e&&i&4&&tf(n,u);break;case 22:u.memoizedState===null&&Jt(n,u,e),un(u,u.return);break;case 30:break;default:Jt(n,u,e)}t=t.sibling}}function Es(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Va(e))}function Ms(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Va(l))}function wt(l,t,e,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nf(l,t,e,a),t=t.sibling}function nf(l,t,e,a){var n=t.flags;switch(t.tag){case 0:case 11:case 15:wt(l,t,e,a),n&2048&&nn(9,t);break;case 1:wt(l,t,e,a);break;case 3:wt(l,t,e,a),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Va(l)));break;case 12:if(n&2048){wt(l,t,e,a),l=t.stateNode;try{var u=t.memoizedProps,i=u.id,s=u.onPostCommit;typeof s=="function"&&s(i,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(c){il(t,t.return,c)}}else wt(l,t,e,a);break;case 31:wt(l,t,e,a);break;case 13:wt(l,t,e,a);break;case 23:break;case 22:u=t.stateNode,i=t.alternate,t.memoizedState!==null?u._visibility&2?wt(l,t,e,a):sn(l,t):u._visibility&2?wt(l,t,e,a):(u._visibility|=2,ma(l,t,e,a,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Es(i,t);break;case 24:wt(l,t,e,a),n&2048&&Ms(t.alternate,t);break;default:wt(l,t,e,a)}}function ma(l,t,e,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var u=l,i=t,s=e,c=a,h=i.flags;switch(i.tag){case 0:case 11:case 15:ma(u,i,s,c,n),nn(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?ma(u,i,s,c,n):sn(u,i):(b._visibility|=2,ma(u,i,s,c,n)),n&&h&2048&&Es(i.alternate,i);break;case 24:ma(u,i,s,c,n),n&&h&2048&&Ms(i.alternate,i);break;default:ma(u,i,s,c,n)}t=t.sibling}}function sn(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,a=t,n=a.flags;switch(a.tag){case 22:sn(e,a),n&2048&&Es(a.alternate,a);break;case 24:sn(e,a),n&2048&&Ms(a.alternate,a);break;default:sn(e,a)}t=t.sibling}}var cn=8192;function ya(l,t,e){if(l.subtreeFlags&cn)for(l=l.child;l!==null;)uf(l,t,e),l=l.sibling}function uf(l,t,e){switch(l.tag){case 26:ya(l,t,e),l.flags&cn&&l.memoizedState!==null&&Ip(e,Mt,l.memoizedState,l.memoizedProps);break;case 5:ya(l,t,e);break;case 3:case 4:var a=Mt;Mt=Ou(l.stateNode.containerInfo),ya(l,t,e),Mt=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=cn,cn=16777216,ya(l,t,e),cn=a):ya(l,t,e));break;default:ya(l,t,e)}}function sf(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function on(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Bl=a,of(a,l)}sf(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)cf(l),l=l.sibling}function cf(l){switch(l.tag){case 0:case 11:case 15:on(l),l.flags&2048&&re(9,l,l.return);break;case 3:on(l);break;case 12:on(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,mu(l)):on(l);break;default:on(l)}}function mu(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var a=t[e];Bl=a,of(a,l)}sf(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:re(8,t,t.return),mu(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,mu(t));break;default:mu(t)}l=l.sibling}}function of(l,t){for(;Bl!==null;){var e=Bl;switch(e.tag){case 0:case 11:case 15:re(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Va(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Bl=a;else l:for(e=l;Bl!==null;){a=Bl;var n=a.sibling,u=a.return;if(Ir(a),a===e){Bl=null;break l}if(n!==null){n.return=u,Bl=n;break l}Bl=u}}}var dp={getCacheForType:function(l){var t=Ql(Nl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Ql(Nl).controller.signal}},pp=typeof WeakMap=="function"?WeakMap:Map,al=0,dl=null,k=null,F=0,ul=0,rt=null,fe=!1,va=!1,ws=!1,$t=0,El=0,ge=0,Ze=0,Ds=0,ft=0,ba=0,rn=null,tt=null,Os=!1,yu=0,rf=0,vu=1/0,bu=null,de=null,Hl=0,pe=null,Sa=null,kt=0,Ns=0,Cs=null,ff=null,fn=0,js=null;function gt(){return(al&2)!==0&&F!==0?F&-F:S.T!==null?Bs():Ec()}function gf(){if(ft===0)if((F&536870912)===0||ll){var l=wn;wn<<=1,(wn&3932160)===0&&(wn=262144),ft=l}else ft=536870912;return l=ct.current,l!==null&&(l.flags|=32),ft}function et(l,t,e){(l===dl&&(ul===2||ul===9)||l.cancelPendingCommit!==null)&&(za(l,0),he(l,F,ft,!1)),Ca(l,e),((al&2)===0||l!==dl)&&(l===dl&&((al&2)===0&&(Ze|=e),El===4&&he(l,F,ft,!1)),Ct(l))}function df(l,t,e){if((al&6)!==0)throw Error(g(327));var a=!e&&(t&127)===0&&(t&l.expiredLanes)===0||Na(l,t),n=a?yp(l,t):Us(l,t,!0),u=a;do{if(n===0){va&&!a&&he(l,t,0,!1);break}else{if(e=l.current.alternate,u&&!hp(e)){n=Us(l,t,!1),u=!1;continue}if(n===2){if(u=t,l.errorRecoveryDisabledLanes&u)var i=0;else i=l.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){t=i;l:{var s=l;n=rn;var c=s.current.memoizedState.isDehydrated;if(c&&(za(s,i).flags|=256),i=Us(s,i,!1),i!==2){if(ws&&!c){s.errorRecoveryDisabledLanes|=u,Ze|=u,n=4;break l}u=tt,tt=n,u!==null&&(tt===null?tt=u:tt.push.apply(tt,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){za(l,0),he(l,t,0,!0);break}l:{switch(a=l,u=n,u){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t)break;case 6:he(a,t,ft,!fe);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(n=yu+300-at(),10<n)){if(he(a,t,ft,!fe),On(a,0,!0)!==0)break l;kt=t,a.timeoutHandle=Lf(pf.bind(null,a,e,tt,bu,Os,t,ft,Ze,ba,fe,u,"Throttled",-0,0),n);break l}pf(a,e,tt,bu,Os,t,ft,Ze,ba,fe,u,null,-0,0)}}break}while(!0);Ct(l)}function pf(l,t,e,a,n,u,i,s,c,h,b,A,m,v){if(l.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},uf(t,u,A);var H=(u&62914560)===u?yu-at():(u&4194048)===u?rf-at():0;if(H=Pp(A,H),H!==null){kt=u,l.cancelPendingCommit=H(_f.bind(null,l,t,u,e,a,n,i,s,c,b,A,null,m,v)),he(l,u,i,!h);return}}_f(l,t,u,e,a,n,i,s,c)}function hp(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],u=n.getSnapshot;n=n.value;try{if(!it(u(),n))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function he(l,t,e,a){t&=~Ds,t&=~Ze,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var n=t;0<n;){var u=31-ut(n),i=1<<u;a[u]=-1,n&=~i}e!==0&&_c(l,e,t)}function Su(){return(al&6)===0?(gn(0),!1):!0}function xs(){if(k!==null){if(ul===0)var l=k.return;else l=k,Bt=Ue=null,ki(l),fa=null,Ja=0,l=k;for(;l!==null;)Lr(l.alternate,l),l=l.return;k=null}}function za(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,Hp(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),kt=0,xs(),dl=l,k=e=Rt(l.current,null),F=t,ul=0,rt=null,fe=!1,va=Na(l,t),ws=!1,ba=ft=Ds=Ze=ge=El=0,tt=rn=null,Os=!1,(t&8)!==0&&(t|=t&32);var a=l.entangledLanes;if(a!==0)for(l=l.entanglements,a&=t;0<a;){var n=31-ut(a),u=1<<n;t|=l[n],a&=~u}return $t=t,Qn(),e}function hf(l,t){L=null,S.H=tn,t===ra||t===kn?(t=No(),ul=3):t===qi?(t=No(),ul=4):ul=t===fs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,k===null&&(El=1,ou(l,yt(t,l.current)))}function mf(){var l=ct.current;return l===null?!0:(F&4194048)===F?zt===null:(F&62914560)===F||(F&536870912)!==0?l===zt:!1}function yf(){var l=S.H;return S.H=tn,l===null?tn:l}function vf(){var l=S.A;return S.A=dp,l}function zu(){El=4,fe||(F&4194048)!==F&&ct.current!==null||(va=!0),(ge&134217727)===0&&(Ze&134217727)===0||dl===null||he(dl,F,ft,!1)}function Us(l,t,e){var a=al;al|=2;var n=yf(),u=vf();(dl!==l||F!==t)&&(bu=null,za(l,t)),t=!1;var i=El;l:do try{if(ul!==0&&k!==null){var s=k,c=rt;switch(ul){case 8:xs(),i=6;break l;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var h=ul;if(ul=0,rt=null,_a(l,s,c,h),e&&va){i=0;break l}break;default:h=ul,ul=0,rt=null,_a(l,s,c,h)}}mp(),i=El;break}catch(b){hf(l,b)}while(!0);return t&&l.shellSuspendCounter++,Bt=Ue=null,al=a,S.H=n,S.A=u,k===null&&(dl=null,F=0,Qn()),i}function mp(){for(;k!==null;)bf(k)}function yp(l,t){var e=al;al|=2;var a=yf(),n=vf();dl!==l||F!==t?(bu=null,vu=at()+500,za(l,t)):va=Na(l,t);l:do try{if(ul!==0&&k!==null){t=k;var u=rt;t:switch(ul){case 1:ul=0,rt=null,_a(l,t,u,1);break;case 2:case 9:if(Do(u)){ul=0,rt=null,Sf(t);break}t=function(){ul!==2&&ul!==9||dl!==l||(ul=7),Ct(l)},u.then(t,t);break l;case 3:ul=7;break l;case 4:ul=5;break l;case 7:Do(u)?(ul=0,rt=null,Sf(t)):(ul=0,rt=null,_a(l,t,u,7));break;case 5:var i=null;switch(k.tag){case 26:i=k.memoizedState;case 5:case 27:var s=k;if(i?ug(i):s.stateNode.complete){ul=0,rt=null;var c=s.sibling;if(c!==null)k=c;else{var h=s.return;h!==null?(k=h,_u(h)):k=null}break t}}ul=0,rt=null,_a(l,t,u,5);break;case 6:ul=0,rt=null,_a(l,t,u,6);break;case 8:xs(),El=6;break l;default:throw Error(g(462))}}vp();break}catch(b){hf(l,b)}while(!0);return Bt=Ue=null,S.H=a,S.A=n,al=e,k!==null?0:(dl=null,F=0,Qn(),El)}function vp(){for(;k!==null&&!Qg();)bf(k)}function bf(l){var t=Xr(l.alternate,l,$t);l.memoizedProps=l.pendingProps,t===null?_u(l):k=t}function Sf(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Rr(e,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Rr(e,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:ki(t);default:Lr(e,t),t=k=yo(t,$t),t=Xr(e,t,$t)}l.memoizedProps=l.pendingProps,t===null?_u(l):k=t}function _a(l,t,e,a){Bt=Ue=null,ki(t),fa=null,Ja=0;var n=t.return;try{if(ip(l,n,t,e,F)){El=1,ou(l,yt(e,l.current)),k=null;return}}catch(u){if(n!==null)throw k=n,u;El=1,ou(l,yt(e,l.current)),k=null;return}t.flags&32768?(ll||a===1?l=!0:va||(F&536870912)!==0?l=!1:(fe=l=!0,(a===2||a===9||a===3||a===6)&&(a=ct.current,a!==null&&a.tag===13&&(a.flags|=16384))),zf(t,l)):_u(t)}function _u(l){var t=l;do{if((t.flags&32768)!==0){zf(t,fe);return}l=t.return;var e=op(t.alternate,t,$t);if(e!==null){k=e;return}if(t=t.sibling,t!==null){k=t;return}k=t=l}while(t!==null);El===0&&(El=5)}function zf(l,t){do{var e=rp(l.alternate,l);if(e!==null){e.flags&=32767,k=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){k=l;return}k=l=e}while(l!==null);El=6,k=null}function _f(l,t,e,a,n,u,i,s,c){l.cancelPendingCommit=null;do Au();while(Hl!==0);if((al&6)!==0)throw Error(g(327));if(t!==null){if(t===l.current)throw Error(g(177));if(u=t.lanes|t.childLanes,u|=_i,Fg(l,e,u,i,s,c),l===dl&&(k=dl=null,F=0),Sa=t,pe=l,kt=e,Ns=u,Cs=n,ff=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,_p(En,function(){return wf(),null})):(l.callbackNode=null,l.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=S.T,S.T=null,n=w.p,w.p=2,i=al,al|=4;try{fp(l,t,e)}finally{al=i,w.p=n,S.T=a}}Hl=1,Af(),Tf(),Ef()}}function Af(){if(Hl===1){Hl=0;var l=pe,t=Sa,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null;var a=w.p;w.p=2;var n=al;al|=4;try{ef(t,l);var u=Ks,i=so(l.containerInfo),s=u.focusedElem,c=u.selectionRange;if(i!==s&&s&&s.ownerDocument&&io(s.ownerDocument.documentElement,s)){if(c!==null&&yi(s)){var h=c.start,b=c.end;if(b===void 0&&(b=h),"selectionStart"in s)s.selectionStart=h,s.selectionEnd=Math.min(b,s.value.length);else{var A=s.ownerDocument||document,m=A&&A.defaultView||window;if(m.getSelection){var v=m.getSelection(),H=s.textContent.length,G=Math.min(c.start,H),fl=c.end===void 0?G:Math.min(c.end,H);!v.extend&&G>fl&&(i=fl,fl=G,G=i);var f=uo(s,G),o=uo(s,fl);if(f&&o&&(v.rangeCount!==1||v.anchorNode!==f.node||v.anchorOffset!==f.offset||v.focusNode!==o.node||v.focusOffset!==o.offset)){var p=A.createRange();p.setStart(f.node,f.offset),v.removeAllRanges(),G>fl?(v.addRange(p),v.extend(o.node,o.offset)):(p.setEnd(o.node,o.offset),v.addRange(p))}}}}for(A=[],v=s;v=v.parentNode;)v.nodeType===1&&A.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<A.length;s++){var z=A[s];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Hu=!!Vs,Ks=Vs=null}finally{al=n,w.p=a,S.T=e}}l.current=t,Hl=2}}function Tf(){if(Hl===2){Hl=0;var l=pe,t=Sa,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=S.T,S.T=null;var a=w.p;w.p=2;var n=al;al|=4;try{Fr(l,t.alternate,t)}finally{al=n,w.p=a,S.T=e}}Hl=3}}function Ef(){if(Hl===4||Hl===3){Hl=0,Xg();var l=pe,t=Sa,e=kt,a=ff;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Hl=5:(Hl=0,Sa=pe=null,Mf(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(de=null),Iu(e),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Oa,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=S.T,n=w.p,w.p=2,S.T=null;try{for(var u=l.onRecoverableError,i=0;i<a.length;i++){var s=a[i];u(s.value,{componentStack:s.stack})}}finally{S.T=t,w.p=n}}(kt&3)!==0&&Au(),Ct(l),n=l.pendingLanes,(e&261930)!==0&&(n&42)!==0?l===js?fn++:(fn=0,js=l):fn=0,gn(0)}}function Mf(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Va(t)))}function Au(){return Af(),Tf(),Ef(),wf()}function wf(){if(Hl!==5)return!1;var l=pe,t=Ns;Ns=0;var e=Iu(kt),a=S.T,n=w.p;try{w.p=32>e?32:e,S.T=null,e=Cs,Cs=null;var u=pe,i=kt;if(Hl=0,Sa=pe=null,kt=0,(al&6)!==0)throw Error(g(331));var s=al;if(al|=4,cf(u.current),nf(u,u.current,i,e),al=s,gn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Oa,u)}catch{}return!0}finally{w.p=n,S.T=a,Mf(l,t)}}function Df(l,t,e){t=yt(e,t),t=rs(l.stateNode,t,2),l=se(l,t,2),l!==null&&(Ca(l,2),Ct(l))}function il(l,t,e){if(l.tag===3)Df(l,l,e);else for(;t!==null;){if(t.tag===3){Df(t,l,e);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(de===null||!de.has(a))){l=yt(e,l),e=Dr(2),a=se(t,e,2),a!==null&&(Or(e,a,t,l),Ca(a,2),Ct(a));break}}t=t.return}}function Hs(l,t,e){var a=l.pingCache;if(a===null){a=l.pingCache=new pp;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(e)||(ws=!0,n.add(e),l=bp.bind(null,l,t,e),t.then(l,l))}function bp(l,t,e){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,dl===l&&(F&e)===e&&(El===4||El===3&&(F&62914560)===F&&300>at()-yu?(al&2)===0&&za(l,0):Ds|=e,ba===F&&(ba=0)),Ct(l)}function Of(l,t){t===0&&(t=zc()),l=Ce(l,t),l!==null&&(Ca(l,t),Ct(l))}function Sp(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),Of(l,e)}function zp(l,t){var e=0;switch(l.tag){case 31:case 13:var a=l.stateNode,n=l.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(g(314))}a!==null&&a.delete(t),Of(l,e)}function _p(l,t){return $u(l,t)}var Tu=null,Aa=null,Rs=!1,Eu=!1,qs=!1,me=0;function Ct(l){l!==Aa&&l.next===null&&(Aa===null?Tu=Aa=l:Aa=Aa.next=l),Eu=!0,Rs||(Rs=!0,Tp())}function gn(l,t){if(!qs&&Eu){qs=!0;do for(var e=!1,a=Tu;a!==null;){if(l!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,s=a.pingedLanes;u=(1<<31-ut(42|l)+1)-1,u&=n&~(i&~s),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(e=!0,xf(a,u))}else u=F,u=On(a,a===dl?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Na(a,u)||(e=!0,xf(a,u));a=a.next}while(e);qs=!1}}function Ap(){Nf()}function Nf(){Eu=Rs=!1;var l=0;me!==0&&Up()&&(l=me);for(var t=at(),e=null,a=Tu;a!==null;){var n=a.next,u=Cf(a,t);u===0?(a.next=null,e===null?Tu=n:e.next=n,n===null&&(Aa=e)):(e=a,(l!==0||(u&3)!==0)&&(Eu=!0)),a=n}Hl!==0&&Hl!==5||gn(l),me!==0&&(me=0)}function Cf(l,t){for(var e=l.suspendedLanes,a=l.pingedLanes,n=l.expirationTimes,u=l.pendingLanes&-62914561;0<u;){var i=31-ut(u),s=1<<i,c=n[i];c===-1?((s&e)===0||(s&a)!==0)&&(n[i]=Wg(s,t)):c<=t&&(l.expiredLanes|=s),u&=~s}if(t=dl,e=F,e=On(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,e===0||l===t&&(ul===2||ul===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&ku(a),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||Na(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(a!==null&&ku(a),Iu(e)){case 2:case 8:e=bc;break;case 32:e=En;break;case 268435456:e=Sc;break;default:e=En}return a=jf.bind(null,l),e=$u(e,a),l.callbackPriority=t,l.callbackNode=e,t}return a!==null&&a!==null&&ku(a),l.callbackPriority=2,l.callbackNode=null,2}function jf(l,t){if(Hl!==0&&Hl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(Au()&&l.callbackNode!==e)return null;var a=F;return a=On(l,l===dl?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(df(l,a,t),Cf(l,at()),l.callbackNode!=null&&l.callbackNode===e?jf.bind(null,l):null)}function xf(l,t){if(Au())return null;df(l,t,!0)}function Tp(){Rp(function(){(al&6)!==0?$u(vc,Ap):Nf()})}function Bs(){if(me===0){var l=ca;l===0&&(l=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),me=l}return me}function Uf(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:xn(""+l)}function Hf(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function Ep(l,t,e,a,n){if(t==="submit"&&e&&e.stateNode===n){var u=Uf((n[Wl]||null).action),i=a.submitter;i&&(t=(t=i[Wl]||null)?Uf(t.formAction):i.getAttribute("formAction"),t!==null&&(u=t,i=null));var s=new qn("action","action",null,a,n);l.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(me!==0){var c=i?Hf(n,i):new FormData(n);ns(e,{pending:!0,data:c,method:n.method,action:u},null,c)}}else typeof u=="function"&&(s.preventDefault(),c=i?Hf(n,i):new FormData(n),ns(e,{pending:!0,data:c,method:n.method,action:u},u,c))},currentTarget:n}]})}}for(var Ys=0;Ys<zi.length;Ys++){var Gs=zi[Ys],Mp=Gs.toLowerCase(),wp=Gs[0].toUpperCase()+Gs.slice(1);Et(Mp,"on"+wp)}Et(ro,"onAnimationEnd"),Et(fo,"onAnimationIteration"),Et(go,"onAnimationStart"),Et("dblclick","onDoubleClick"),Et("focusin","onFocus"),Et("focusout","onBlur"),Et(Zd,"onTransitionRun"),Et(Ld,"onTransitionStart"),Et(Vd,"onTransitionCancel"),Et(po,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),we("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),we("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),we("onBeforeInput",["compositionend","keypress","textInput","paste"]),we("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function Rf(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var a=l[e],n=a.event;a=a.listeners;l:{var u=void 0;if(t)for(var i=a.length-1;0<=i;i--){var s=a[i],c=s.instance,h=s.currentTarget;if(s=s.listener,c!==u&&n.isPropagationStopped())break l;u=s,n.currentTarget=h;try{u(n)}catch(b){Gn(b)}n.currentTarget=null,u=c}else for(i=0;i<a.length;i++){if(s=a[i],c=s.instance,h=s.currentTarget,s=s.listener,c!==u&&n.isPropagationStopped())break l;u=s,n.currentTarget=h;try{u(n)}catch(b){Gn(b)}n.currentTarget=null,u=c}}}}function W(l,t){var e=t[Pu];e===void 0&&(e=t[Pu]=new Set);var a=l+"__bubble";e.has(a)||(qf(t,l,2,!1),e.add(a))}function Qs(l,t,e){var a=0;t&&(a|=4),qf(e,l,a,t)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function Xs(l){if(!l[Mu]){l[Mu]=!0,Dc.forEach(function(e){e!=="selectionchange"&&(Dp.has(e)||Qs(e,!1,l),Qs(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Mu]||(t[Mu]=!0,Qs("selectionchange",!1,t))}}function qf(l,t,e,a){switch(gg(t)){case 2:var n=e0;break;case 8:n=a0;break;default:n=ac}e=n.bind(null,t,e,l),n=void 0,!ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?l.addEventListener(t,e,{capture:!0,passive:n}):l.addEventListener(t,e,!0):n!==void 0?l.addEventListener(t,e,{passive:n}):l.addEventListener(t,e,!1)}function Zs(l,t,e,a,n){var u=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var s=a.stateNode.containerInfo;if(s===n)break;if(i===4)for(i=a.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;s!==null;){if(i=Ve(s),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){a=u=i;continue l}s=s.parentNode}}a=a.return}Gc(function(){var h=u,b=ii(e),A=[];l:{var m=ho.get(l);if(m!==void 0){var v=qn,H=l;switch(l){case"keypress":if(Hn(e)===0)break l;case"keydown":case"keyup":v=zd;break;case"focusin":H="focus",v=gi;break;case"focusout":H="blur",v=gi;break;case"beforeblur":case"afterblur":v=gi;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Td;break;case ro:case fo:case go:v=gd;break;case po:v=Md;break;case"scroll":case"scrollend":v=sd;break;case"wheel":v=Dd;break;case"copy":case"cut":case"paste":v=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Vc;break;case"toggle":case"beforetoggle":v=Nd}var G=(t&4)!==0,fl=!G&&(l==="scroll"||l==="scrollend"),f=G?m!==null?m+"Capture":null:m;G=[];for(var o=h,p;o!==null;){var z=o;if(p=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||p===null||f===null||(z=Ua(o,f),z!=null&&G.push(pn(o,z,p))),fl)break;o=o.return}0<G.length&&(m=new v(m,H,null,e,b),A.push({event:m,listeners:G}))}}if((t&7)===0){l:{if(m=l==="mouseover"||l==="pointerover",v=l==="mouseout"||l==="pointerout",m&&e!==ui&&(H=e.relatedTarget||e.fromElement)&&(Ve(H)||H[Le]))break l;if((v||m)&&(m=b.window===b?b:(m=b.ownerDocument)?m.defaultView||m.parentWindow:window,v?(H=e.relatedTarget||e.toElement,v=h,H=H?Ve(H):null,H!==null&&(fl=C(H),G=H.tag,H!==fl||G!==5&&G!==27&&G!==6)&&(H=null)):(v=null,H=h),v!==H)){if(G=Zc,z="onMouseLeave",f="onMouseEnter",o="mouse",(l==="pointerout"||l==="pointerover")&&(G=Vc,z="onPointerLeave",f="onPointerEnter",o="pointer"),fl=v==null?m:xa(v),p=H==null?m:xa(H),m=new G(z,o+"leave",v,e,b),m.target=fl,m.relatedTarget=p,z=null,Ve(b)===h&&(G=new G(f,o+"enter",H,e,b),G.target=p,G.relatedTarget=fl,z=G),fl=z,v&&H)t:{for(G=Op,f=v,o=H,p=0,z=f;z;z=G(z))p++;z=0;for(var Y=o;Y;Y=G(Y))z++;for(;0<p-z;)f=G(f),p--;for(;0<z-p;)o=G(o),z--;for(;p--;){if(f===o||o!==null&&f===o.alternate){G=f;break t}f=G(f),o=G(o)}G=null}else G=null;v!==null&&Bf(A,m,v,G,!1),H!==null&&fl!==null&&Bf(A,fl,H,G,!0)}}l:{if(m=h?xa(h):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var tl=Pc;else if(Fc(m))if(lo)tl=Gd;else{tl=Bd;var q=qd}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?h&&ni(h.elementType)&&(tl=Pc):tl=Yd;if(tl&&(tl=tl(l,h))){Ic(A,tl,e,b);break l}q&&q(l,m,h),l==="focusout"&&h&&m.type==="number"&&h.memoizedProps.value!=null&&ai(m,"number",m.value)}switch(q=h?xa(h):window,l){case"focusin":(Fc(q)||q.contentEditable==="true")&&(la=q,vi=h,Xa=null);break;case"focusout":Xa=vi=la=null;break;case"mousedown":bi=!0;break;case"contextmenu":case"mouseup":case"dragend":bi=!1,co(A,e,b);break;case"selectionchange":if(Xd)break;case"keydown":case"keyup":co(A,e,b)}var V;if(pi)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pe?kc(l,e)&&(I="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(I="onCompositionStart");I&&(Kc&&e.locale!=="ko"&&(Pe||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pe&&(V=Qc()):(le=b,oi="value"in le?le.value:le.textContent,Pe=!0)),q=wu(h,I),0<q.length&&(I=new Lc(I,l,null,e,b),A.push({event:I,listeners:q}),V?I.data=V:(V=Wc(e),V!==null&&(I.data=V)))),(V=jd?xd(l,e):Ud(l,e))&&(I=wu(h,"onBeforeInput"),0<I.length&&(q=new Lc("onBeforeInput","beforeinput",null,e,b),A.push({event:q,listeners:I}),q.data=V)),Ep(A,l,h,e,b)}Rf(A,t)})}function pn(l,t,e){return{instance:l,listener:t,currentTarget:e}}function wu(l,t){for(var e=t+"Capture",a=[];l!==null;){var n=l,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Ua(l,e),n!=null&&a.unshift(pn(l,n,u)),n=Ua(l,t),n!=null&&a.push(pn(l,n,u))),l.tag===3)return a;l=l.return}return[]}function Op(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Bf(l,t,e,a,n){for(var u=t._reactName,i=[];e!==null&&e!==a;){var s=e,c=s.alternate,h=s.stateNode;if(s=s.tag,c!==null&&c===a)break;s!==5&&s!==26&&s!==27||h===null||(c=h,n?(h=Ua(e,u),h!=null&&i.unshift(pn(e,h,c))):n||(h=Ua(e,u),h!=null&&i.push(pn(e,h,c)))),e=e.return}i.length!==0&&l.push({event:t,listeners:i})}var Np=/\r\n?/g,Cp=/\u0000|\uFFFD/g;function Yf(l){return(typeof l=="string"?l:""+l).replace(Np,`
`).replace(Cp,"")}function Gf(l,t){return t=Yf(t),Yf(l)===t}function rl(l,t,e,a,n,u){switch(e){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||We(l,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&We(l,""+a);break;case"className":Cn(l,"class",a);break;case"tabIndex":Cn(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Cn(l,e,a);break;case"style":Bc(l,a,u);break;case"data":if(t!=="object"){Cn(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=xn(""+a),l.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(e==="formAction"?(t!=="input"&&rl(l,t,"name",n.name,n,null),rl(l,t,"formEncType",n.formEncType,n,null),rl(l,t,"formMethod",n.formMethod,n,null),rl(l,t,"formTarget",n.formTarget,n,null)):(rl(l,t,"encType",n.encType,n,null),rl(l,t,"method",n.method,n,null),rl(l,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(e);break}a=xn(""+a),l.setAttribute(e,a);break;case"onClick":a!=null&&(l.onclick=Ut);break;case"onScroll":a!=null&&W("scroll",l);break;case"onScrollEnd":a!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=e}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}e=xn(""+a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""+a):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":a===!0?l.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(e,a):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(e,a):l.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(e):l.setAttribute(e,a);break;case"popover":W("beforetoggle",l),W("toggle",l),Nn(l,"popover",a);break;case"xlinkActuate":xt(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":xt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":xt(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":xt(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":xt(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":xt(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":xt(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":xt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":xt(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Nn(l,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=ud.get(e)||e,Nn(l,e,a))}}function Ls(l,t,e,a,n,u){switch(e){case"style":Bc(l,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(g(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(g(60));l.innerHTML=e}}break;case"children":typeof a=="string"?We(l,a):(typeof a=="number"||typeof a=="bigint")&&We(l,""+a);break;case"onScroll":a!=null&&W("scroll",l);break;case"onScrollEnd":a!=null&&W("scrollend",l);break;case"onClick":a!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Oc.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),t=e.slice(2,n?e.length-7:void 0),u=l[Wl]||null,u=u!=null?u[e]:null,typeof u=="function"&&l.removeEventListener(t,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,a,n);break l}e in l?l[e]=a:a===!0?l.setAttribute(e,""):Nn(l,e,a)}}}function Zl(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var a=!1,n=!1,u;for(u in e)if(e.hasOwnProperty(u)){var i=e[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:rl(l,t,u,i,e,null)}}n&&rl(l,t,"srcSet",e.srcSet,e,null),a&&rl(l,t,"src",e.src,e,null);return;case"input":W("invalid",l);var s=u=i=n=null,c=null,h=null;for(a in e)if(e.hasOwnProperty(a)){var b=e[a];if(b!=null)switch(a){case"name":n=b;break;case"type":i=b;break;case"checked":c=b;break;case"defaultChecked":h=b;break;case"value":u=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(g(137,t));break;default:rl(l,t,a,b,e,null)}}Uc(l,u,s,c,h,i,n,!1);return;case"select":W("invalid",l),a=i=u=null;for(n in e)if(e.hasOwnProperty(n)&&(s=e[n],s!=null))switch(n){case"value":u=s;break;case"defaultValue":i=s;break;case"multiple":a=s;default:rl(l,t,n,s,e,null)}t=u,e=i,l.multiple=!!a,t!=null?ke(l,!!a,t,!1):e!=null&&ke(l,!!a,e,!0);return;case"textarea":W("invalid",l),u=n=a=null;for(i in e)if(e.hasOwnProperty(i)&&(s=e[i],s!=null))switch(i){case"value":a=s;break;case"defaultValue":n=s;break;case"children":u=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(g(91));break;default:rl(l,t,i,s,e,null)}Rc(l,a,n,u);return;case"option":for(c in e)if(e.hasOwnProperty(c)&&(a=e[c],a!=null))switch(c){case"selected":l.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:rl(l,t,c,a,e,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(a=0;a<dn.length;a++)W(dn[a],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in e)if(e.hasOwnProperty(h)&&(a=e[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:rl(l,t,h,a,e,null)}return;default:if(ni(t)){for(b in e)e.hasOwnProperty(b)&&(a=e[b],a!==void 0&&Ls(l,t,b,a,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(a=e[s],a!=null&&rl(l,t,s,a,e,null))}function jp(l,t,e,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,s=null,c=null,h=null,b=null;for(v in e){var A=e[v];if(e.hasOwnProperty(v)&&A!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=A;default:a.hasOwnProperty(v)||rl(l,t,v,null,a,A)}}for(var m in a){var v=a[m];if(A=e[m],a.hasOwnProperty(m)&&(v!=null||A!=null))switch(m){case"type":u=v;break;case"name":n=v;break;case"checked":h=v;break;case"defaultChecked":b=v;break;case"value":i=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(g(137,t));break;default:v!==A&&rl(l,t,m,v,a,A)}}ei(l,i,s,c,h,b,u,n);return;case"select":v=i=s=m=null;for(u in e)if(c=e[u],e.hasOwnProperty(u)&&c!=null)switch(u){case"value":break;case"multiple":v=c;default:a.hasOwnProperty(u)||rl(l,t,u,null,a,c)}for(n in a)if(u=a[n],c=e[n],a.hasOwnProperty(n)&&(u!=null||c!=null))switch(n){case"value":m=u;break;case"defaultValue":s=u;break;case"multiple":i=u;default:u!==c&&rl(l,t,n,u,a,c)}t=s,e=i,a=v,m!=null?ke(l,!!e,m,!1):!!a!=!!e&&(t!=null?ke(l,!!e,t,!0):ke(l,!!e,e?[]:"",!1));return;case"textarea":v=m=null;for(s in e)if(n=e[s],e.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:rl(l,t,s,null,a,n)}for(i in a)if(n=a[i],u=e[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":m=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(g(91));break;default:n!==u&&rl(l,t,i,n,a,u)}Hc(l,m,v);return;case"option":for(var H in e)if(m=e[H],e.hasOwnProperty(H)&&m!=null&&!a.hasOwnProperty(H))switch(H){case"selected":l.selected=!1;break;default:rl(l,t,H,null,a,m)}for(c in a)if(m=a[c],v=e[c],a.hasOwnProperty(c)&&m!==v&&(m!=null||v!=null))switch(c){case"selected":l.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:rl(l,t,c,m,a,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in e)m=e[G],e.hasOwnProperty(G)&&m!=null&&!a.hasOwnProperty(G)&&rl(l,t,G,null,a,m);for(h in a)if(m=a[h],v=e[h],a.hasOwnProperty(h)&&m!==v&&(m!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(g(137,t));break;default:rl(l,t,h,m,a,v)}return;default:if(ni(t)){for(var fl in e)m=e[fl],e.hasOwnProperty(fl)&&m!==void 0&&!a.hasOwnProperty(fl)&&Ls(l,t,fl,void 0,a,m);for(b in a)m=a[b],v=e[b],!a.hasOwnProperty(b)||m===v||m===void 0&&v===void 0||Ls(l,t,b,m,a,v);return}}for(var f in e)m=e[f],e.hasOwnProperty(f)&&m!=null&&!a.hasOwnProperty(f)&&rl(l,t,f,null,a,m);for(A in a)m=a[A],v=e[A],!a.hasOwnProperty(A)||m===v||m==null&&v==null||rl(l,t,A,m,a,v)}function Qf(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xp(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],u=n.transferSize,i=n.initiatorType,s=n.duration;if(u&&s&&Qf(i)){for(i=0,s=n.responseEnd,a+=1;a<e.length;a++){var c=e[a],h=c.startTime;if(h>s)break;var b=c.transferSize,A=c.initiatorType;b&&Qf(A)&&(c=c.responseEnd,i+=b*(c<s?1:(s-h)/(c-h)))}if(--a,t+=8*(u+i)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Vs=null,Ks=null;function Du(l){return l.nodeType===9?l:l.ownerDocument}function Xf(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Zf(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Js(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=null;function Up(){var l=window.event;return l&&l.type==="popstate"?l===$s?!1:($s=l,!0):($s=null,!1)}var Lf=typeof setTimeout=="function"?setTimeout:void 0,Hp=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,Rp=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(l){return Vf.resolve(null).then(l).catch(qp)}:Lf;function qp(l){setTimeout(function(){throw l})}function ye(l){return l==="head"}function Kf(l,t){var e=t,a=0;do{var n=e.nextSibling;if(l.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){l.removeChild(n),wa(t);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")hn(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,hn(e);for(var u=e.firstChild;u;){var i=u.nextSibling,s=u.nodeName;u[ja]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&u.rel.toLowerCase()==="stylesheet"||e.removeChild(u),u=i}}else e==="body"&&hn(l.ownerDocument.body);e=n}while(e);wa(t)}function Jf(l,t){var e=l;l=0;do{var a=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=a}while(e)}function ks(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":ks(e),li(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function Bp(l,t,e,a){for(;l.nodeType===1;){var n=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[ja])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(u=l.getAttribute("rel"),u==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(u!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(u=l.getAttribute("src"),(u!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===u)return l}else return l;if(l=_t(l.nextSibling),l===null)break}return null}function Yp(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=_t(l.nextSibling),l===null))return null;return l}function $f(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=_t(l.nextSibling),l===null))return null;return l}function Ws(l){return l.data==="$?"||l.data==="$~"}function Fs(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Gp(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var a=function(){t(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function _t(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Is=null;function kf(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return _t(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function Wf(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function Ff(l,t,e){switch(t=Du(e),l){case"html":if(l=t.documentElement,!l)throw Error(g(452));return l;case"head":if(l=t.head,!l)throw Error(g(453));return l;case"body":if(l=t.body,!l)throw Error(g(454));return l;default:throw Error(g(451))}}function hn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);li(l)}var At=new Map,If=new Set;function Ou(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=w.d;w.d={f:Qp,r:Xp,D:Zp,C:Lp,L:Vp,m:Kp,X:$p,S:Jp,M:kp};function Qp(){var l=Wt.f(),t=Su();return l||t}function Xp(l){var t=Ke(l);t!==null&&t.tag===5&&t.type==="form"?pr(t):Wt.r(l)}var Ta=typeof document>"u"?null:document;function Pf(l,t,e){var a=Ta;if(a&&typeof t=="string"&&t){var n=ht(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),If.has(n)||(If.add(n),l={rel:l,crossOrigin:e,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Zl(t,"link",l),ql(t),a.head.appendChild(t)))}}function Zp(l){Wt.D(l),Pf("dns-prefetch",l,null)}function Lp(l,t){Wt.C(l,t),Pf("preconnect",l,t)}function Vp(l,t,e){Wt.L(l,t,e);var a=Ta;if(a&&l&&t){var n='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+ht(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+ht(e.imageSizes)+'"]')):n+='[href="'+ht(l)+'"]';var u=n;switch(t){case"style":u=Ea(l);break;case"script":u=Ma(l)}At.has(u)||(l=j({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),At.set(u,l),a.querySelector(n)!==null||t==="style"&&a.querySelector(mn(u))||t==="script"&&a.querySelector(yn(u))||(t=a.createElement("link"),Zl(t,"link",l),ql(t),a.head.appendChild(t)))}}function Kp(l,t){Wt.m(l,t);var e=Ta;if(e&&l){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ht(a)+'"][href="'+ht(l)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ma(l)}if(!At.has(u)&&(l=j({rel:"modulepreload",href:l},t),At.set(u,l),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(yn(u)))return}a=e.createElement("link"),Zl(a,"link",l),ql(a),e.head.appendChild(a)}}}function Jp(l,t,e){Wt.S(l,t,e);var a=Ta;if(a&&l){var n=Je(a).hoistableStyles,u=Ea(l);t=t||"default";var i=n.get(u);if(!i){var s={loading:0,preload:null};if(i=a.querySelector(mn(u)))s.loading=5;else{l=j({rel:"stylesheet",href:l,"data-precedence":t},e),(e=At.get(u))&&Ps(l,e);var c=i=a.createElement("link");ql(c),Zl(c,"link",l),c._p=new Promise(function(h,b){c.onload=h,c.onerror=b}),c.addEventListener("load",function(){s.loading|=1}),c.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Nu(i,t,a)}i={type:"stylesheet",instance:i,count:1,state:s},n.set(u,i)}}}function $p(l,t){Wt.X(l,t);var e=Ta;if(e&&l){var a=Je(e).hoistableScripts,n=Ma(l),u=a.get(n);u||(u=e.querySelector(yn(n)),u||(l=j({src:l,async:!0},t),(t=At.get(n))&&lc(l,t),u=e.createElement("script"),ql(u),Zl(u,"link",l),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function kp(l,t){Wt.M(l,t);var e=Ta;if(e&&l){var a=Je(e).hoistableScripts,n=Ma(l),u=a.get(n);u||(u=e.querySelector(yn(n)),u||(l=j({src:l,async:!0,type:"module"},t),(t=At.get(n))&&lc(l,t),u=e.createElement("script"),ql(u),Zl(u,"link",l),e.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function lg(l,t,e,a){var n=(n=$.current)?Ou(n):null;if(!n)throw Error(g(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=Ea(e.href),e=Je(n).hoistableStyles,a=e.get(t),a||(a={type:"style",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=Ea(e.href);var u=Je(n).hoistableStyles,i=u.get(l);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(l,i),(u=n.querySelector(mn(l)))&&!u._p&&(i.instance=u,i.state.loading=5),At.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},At.set(l,e),u||Wp(n,l,e,i.state))),t&&a===null)throw Error(g(528,""));return i}if(t&&a!==null)throw Error(g(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ma(e),e=Je(n).hoistableScripts,a=e.get(t),a||(a={type:"script",instance:null,count:0,state:null},e.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,l))}}function Ea(l){return'href="'+ht(l)+'"'}function mn(l){return'link[rel="stylesheet"]['+l+"]"}function tg(l){return j({},l,{"data-precedence":l.precedence,precedence:null})}function Wp(l,t,e,a){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=l.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Zl(t,"link",e),ql(t),l.head.appendChild(t))}function Ma(l){return'[src="'+ht(l)+'"]'}function yn(l){return"script[async]"+l}function eg(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+ht(e.href)+'"]');if(a)return t.instance=a,ql(a),a;var n=j({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),ql(a),Zl(a,"style",n),Nu(a,e.precedence,l),t.instance=a;case"stylesheet":n=Ea(e.href);var u=l.querySelector(mn(n));if(u)return t.state.loading|=4,t.instance=u,ql(u),u;a=tg(e),(n=At.get(n))&&Ps(a,n),u=(l.ownerDocument||l).createElement("link"),ql(u);var i=u;return i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),Zl(u,"link",a),t.state.loading|=4,Nu(u,e.precedence,l),t.instance=u;case"script":return u=Ma(e.src),(n=l.querySelector(yn(u)))?(t.instance=n,ql(n),n):(a=e,(n=At.get(u))&&(a=j({},e),lc(a,n)),l=l.ownerDocument||l,n=l.createElement("script"),ql(n),Zl(n,"link",a),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,Nu(a,e.precedence,l));return t.instance}function Nu(l,t,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var s=a[i];if(s.dataset.precedence===t)u=s;else if(u!==n)break}u?u.parentNode.insertBefore(l,u.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Ps(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function lc(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Cu=null;function ag(l,t,e){if(Cu===null){var a=new Map,n=Cu=new Map;n.set(e,a)}else n=Cu,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(l))return a;for(a.set(l,null),e=e.getElementsByTagName(l),n=0;n<e.length;n++){var u=e[n];if(!(u[ja]||u[Yl]||l==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(t)||"";i=l+i;var s=a.get(i);s?s.push(u):a.set(i,[u])}}return a}function ng(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function Fp(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ug(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Ip(l,t,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=Ea(a.href),u=t.querySelector(mn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=ju.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=u,ql(u);return}u=t.ownerDocument||t,a=tg(a),(n=At.get(n))&&Ps(a,n),u=u.createElement("link"),ql(u);var i=u;i._p=new Promise(function(s,c){i.onload=s,i.onerror=c}),Zl(u,"link",a),e.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=ju.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var tc=0;function Pp(l,t){return l.stylesheets&&l.count===0&&Uu(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var a=setTimeout(function(){if(l.stylesheets&&Uu(l,l.stylesheets),l.unsuspend){var u=l.unsuspend;l.unsuspend=null,u()}},6e4+t);0<l.imgBytes&&tc===0&&(tc=62500*xp());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Uu(l,l.stylesheets),l.unsuspend)){var u=l.unsuspend;l.unsuspend=null,u()}},(l.imgBytes>tc?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Uu(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var xu=null;function Uu(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,xu=new Map,t.forEach(l0,l),xu=null,ju.call(l))}function l0(l,t){if(!(t.state.loading&4)){var e=xu.get(l);if(e)var a=e.get(null);else{e=new Map,xu.set(l,e);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(e.set(i.dataset.precedence,i),a=i)}a&&e.set(null,a)}n=t.instance,i=n.getAttribute("data-precedence"),u=e.get(i)||a,u===a&&e.set(null,n),e.set(i,n),this.count++,a=ju.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var vn={$$typeof:sl,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function t0(l,t,e,a,n,u,i,s,c){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wu(0),this.hiddenUpdates=Wu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ig(l,t,e,a,n,u,i,s,c,h,b,A){return l=new t0(l,t,e,i,c,h,b,A,s),t=1,u===!0&&(t|=24),u=st(3,null,null,t),l.current=u,u.stateNode=l,t=Ui(),t.refCount++,l.pooledCache=t,t.refCount++,u.memoizedState={element:a,isDehydrated:e,cache:t},Bi(u),l}function sg(l){return l?(l=aa,l):aa}function cg(l,t,e,a,n,u){n=sg(n),a.context===null?a.context=n:a.pendingContext=n,a=ie(t),a.payload={element:e},u=u===void 0?null:u,u!==null&&(a.callback=u),e=se(l,a,t),e!==null&&(et(e,l,t),ka(e,l,t))}function og(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function ec(l,t){og(l,t),(l=l.alternate)&&og(l,t)}function rg(l){if(l.tag===13||l.tag===31){var t=Ce(l,67108864);t!==null&&et(t,l,67108864),ec(l,67108864)}}function fg(l){if(l.tag===13||l.tag===31){var t=gt();t=Fu(t);var e=Ce(l,t);e!==null&&et(e,l,t),ec(l,t)}}var Hu=!0;function e0(l,t,e,a){var n=S.T;S.T=null;var u=w.p;try{w.p=2,ac(l,t,e,a)}finally{w.p=u,S.T=n}}function a0(l,t,e,a){var n=S.T;S.T=null;var u=w.p;try{w.p=8,ac(l,t,e,a)}finally{w.p=u,S.T=n}}function ac(l,t,e,a){if(Hu){var n=nc(a);if(n===null)Zs(l,t,a,Ru,e),dg(l,a);else if(u0(n,l,t,e,a))a.stopPropagation();else if(dg(l,a),t&4&&-1<n0.indexOf(l)){for(;n!==null;){var u=Ke(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=Me(u.pendingLanes);if(i!==0){var s=u;for(s.pendingLanes|=2,s.entangledLanes|=2;i;){var c=1<<31-ut(i);s.entanglements[1]|=c,i&=~c}Ct(u),(al&6)===0&&(vu=at()+500,gn(0))}}break;case 31:case 13:s=Ce(u,2),s!==null&&et(s,u,2),Su(),ec(u,2)}if(u=nc(a),u===null&&Zs(l,t,a,Ru,e),u===n)break;n=u}n!==null&&a.stopPropagation()}else Zs(l,t,a,null,e)}}function nc(l){return l=ii(l),uc(l)}var Ru=null;function uc(l){if(Ru=null,l=Ve(l),l!==null){var t=C(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=B(t),l!==null)return l;l=null}else if(e===31){if(l=P(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ru=l,null}function gg(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zg()){case vc:return 2;case bc:return 8;case En:case Lg:return 32;case Sc:return 268435456;default:return 32}default:return 32}}var ic=!1,ve=null,be=null,Se=null,bn=new Map,Sn=new Map,ze=[],n0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dg(l,t){switch(l){case"focusin":case"focusout":ve=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":Se=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function zn(l,t,e,a,n,u){return l===null||l.nativeEvent!==u?(l={blockedOn:t,domEventName:e,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},t!==null&&(t=Ke(t),t!==null&&rg(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function u0(l,t,e,a,n){switch(t){case"focusin":return ve=zn(ve,l,t,e,a,n),!0;case"dragenter":return be=zn(be,l,t,e,a,n),!0;case"mouseover":return Se=zn(Se,l,t,e,a,n),!0;case"pointerover":var u=n.pointerId;return bn.set(u,zn(bn.get(u)||null,l,t,e,a,n)),!0;case"gotpointercapture":return u=n.pointerId,Sn.set(u,zn(Sn.get(u)||null,l,t,e,a,n)),!0}return!1}function pg(l){var t=Ve(l.target);if(t!==null){var e=C(t);if(e!==null){if(t=e.tag,t===13){if(t=B(e),t!==null){l.blockedOn=t,Mc(l.priority,function(){fg(e)});return}}else if(t===31){if(t=P(e),t!==null){l.blockedOn=t,Mc(l.priority,function(){fg(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function qu(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=nc(l.nativeEvent);if(e===null){e=l.nativeEvent;var a=new e.constructor(e.type,e);ui=a,e.target.dispatchEvent(a),ui=null}else return t=Ke(e),t!==null&&rg(t),l.blockedOn=e,!1;t.shift()}return!0}function hg(l,t,e){qu(l)&&e.delete(t)}function i0(){ic=!1,ve!==null&&qu(ve)&&(ve=null),be!==null&&qu(be)&&(be=null),Se!==null&&qu(Se)&&(Se=null),bn.forEach(hg),Sn.forEach(hg)}function Bu(l,t){l.blockedOn===t&&(l.blockedOn=null,ic||(ic=!0,y.unstable_scheduleCallback(y.unstable_NormalPriority,i0)))}var Yu=null;function mg(l){Yu!==l&&(Yu=l,y.unstable_scheduleCallback(y.unstable_NormalPriority,function(){Yu===l&&(Yu=null);for(var t=0;t<l.length;t+=3){var e=l[t],a=l[t+1],n=l[t+2];if(typeof a!="function"){if(uc(a||e)===null)continue;break}var u=Ke(e);u!==null&&(l.splice(t,3),t-=3,ns(u,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function wa(l){function t(c){return Bu(c,l)}ve!==null&&Bu(ve,l),be!==null&&Bu(be,l),Se!==null&&Bu(Se,l),bn.forEach(t),Sn.forEach(t);for(var e=0;e<ze.length;e++){var a=ze[e];a.blockedOn===l&&(a.blockedOn=null)}for(;0<ze.length&&(e=ze[0],e.blockedOn===null);)pg(e),e.blockedOn===null&&ze.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],u=e[a+1],i=n[Wl]||null;if(typeof u=="function")i||mg(e);else if(i){var s=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Wl]||null)s=i.formAction;else if(uc(n)!==null)continue}else s=i.action;typeof s=="function"?e[a+1]=s:(e.splice(a,3),a-=3),mg(e)}}}function yg(){function l(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function sc(l){this._internalRoot=l}Gu.prototype.render=sc.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(g(409));var e=t.current,a=gt();cg(e,a,l,t,null,null)},Gu.prototype.unmount=sc.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;cg(l.current,2,null,l,null,null),Su(),t[Le]=null}};function Gu(l){this._internalRoot=l}Gu.prototype.unstable_scheduleHydration=function(l){if(l){var t=Ec();l={blockedOn:null,target:l,priority:t};for(var e=0;e<ze.length&&t!==0&&t<ze[e].priority;e++);ze.splice(e,0,l),e===0&&pg(l)}};var vg=M.version;if(vg!=="19.2.3")throw Error(g(527,vg,"19.2.3"));w.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(g(188)):(l=Object.keys(l).join(","),Error(g(268,l)));return l=_(t),l=l!==null?D(l):null,l=l===null?null:l.stateNode,l};var s0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qu.isDisabled&&Qu.supportsFiber)try{Oa=Qu.inject(s0),nt=Qu}catch{}}return An.createRoot=function(l,t){if(!E(l))throw Error(g(299));var e=!1,a="",n=Tr,u=Er,i=Mr;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ig(l,1,!1,null,null,e,a,null,n,u,i,yg),l[Le]=t.current,Xs(l),new sc(t)},An.hydrateRoot=function(l,t,e){if(!E(l))throw Error(g(299));var a=!1,n="",u=Tr,i=Er,s=Mr,c=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.formState!==void 0&&(c=e.formState)),t=ig(l,1,!0,t,e??null,a,n,c,u,i,s,yg),t.context=sg(null),e=t.current,a=gt(),a=Fu(a),n=ie(a),n.callback=null,se(e,n,a),e=a,t.current.lanes=e,Ca(t,e),Ct(t),l[Le]=t.current,Xs(l),new Gu(t)},An.version="19.2.3",An}var Dg;function y0(){if(Dg)return rc.exports;Dg=1;function y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(y)}catch(M){console.error(M)}}return y(),rc.exports=m0(),rc.exports}var v0=y0();const b0=y=>y.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S0=y=>y.replace(/^([A-Z])|[\s-_]+(\w)/g,(M,N,g)=>g?g.toUpperCase():N.toLowerCase()),Og=y=>{const M=S0(y);return M.charAt(0).toUpperCase()+M.slice(1)},qg=(...y)=>y.filter((M,N,g)=>!!M&&M.trim()!==""&&g.indexOf(M)===N).join(" ").trim(),z0=y=>{for(const M in y)if(M.startsWith("aria-")||M==="role"||M==="title")return!0};var _0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const A0=zl.forwardRef(({color:y="currentColor",size:M=24,strokeWidth:N=2,absoluteStrokeWidth:g,className:E="",children:C,iconNode:B,...P},U)=>zl.createElement("svg",{ref:U,..._0,width:M,height:M,stroke:y,strokeWidth:g?Number(N)*24/Number(M):N,className:qg("lucide",E),...!C&&!z0(P)&&{"aria-hidden":"true"},...P},[...B.map(([_,D])=>zl.createElement(_,D)),...Array.isArray(C)?C:[C]]));const Ae=(y,M)=>{const N=zl.forwardRef(({className:g,...E},C)=>zl.createElement(A0,{ref:C,iconNode:M,className:qg(`lucide-${b0(Og(y))}`,`lucide-${y}`,g),...E}));return N.displayName=Og(y),N};const T0=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],E0=Ae("bird",T0);const M0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],w0=Ae("circle",M0);const D0=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],O0=Ae("key",D0);const N0=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],C0=Ae("music",N0);const j0=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],x0=Ae("star",j0);const U0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],H0=Ae("volume-2",U0);const R0=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],q0=Ae("volume-x",R0);const B0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Bg=Ae("x",B0);function Y0({displayName:y,onConfirm:M,onCancel:N,onClose:g}){return d.jsx("div",{className:"modal-overlay",onClick:g,children:d.jsx("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:g,children:d.jsx(Bg,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[y,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:M,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",y]}),d.jsx("button",{onClick:N,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function Yg(){const y=localStorage.getItem("openedWindows");if(!y)return new Set;try{const M=JSON.parse(y);return new Set(M)}catch(M){return console.error("Failed to parse opened windows:",M),new Set}}function G0(y){const M=Yg();return M.add(y),localStorage.setItem("openedWindows",JSON.stringify([...M])),M}function Ng(){localStorage.removeItem("openedWindows")}function Q0(){localStorage.removeItem("adventCalendarUser")}const Cg=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function X0({userName:y,onUserSelect:M}){const[N]=zl.useState(()=>Cg[Math.floor(Math.random()*Cg.length)]),[g,E]=zl.useState(!1),C=y==="Tanya"?"Таня":y==="Zebra"?"Зёбра":"неведомый гость",B=()=>{E(!0)},P=()=>{Q0(),Ng(),E(!1),window.location.reload()},U=()=>{Ng(),E(!1)},_=()=>{E(!1)};return y?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[N,","," ",d.jsx("span",{className:"user-name clickable",onClick:B,title:`А точно ли я ${C}?..`,children:C}),"!"]})}),g&&(y==="Tanya"||y==="Zebra")&&d.jsx(Y0,{displayName:C,onConfirm:P,onCancel:U,onClose:_})]}):d.jsxs("div",{className:"user-selection",children:[d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>M("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>M("Zebra"),children:"Зёбра"})]})]})}function Z0(){const[y,M]=zl.useState([]),[N,g]=zl.useState([]);return zl.useEffect(()=>{const E=U=>_=>{const D=Math.sin(U*9301+_*49297)*43758.5453;return D-Math.floor(D)},C=Array.from({length:60}).map((U,_)=>{const D=E(_+1);return{left:`${Math.floor(D(1)*100)}%`,top:`${Math.floor(D(2)*70)}%`,animationDelay:`${(D(3)*3).toFixed(2)}s`,opacity:+(.3+D(4)*.7).toFixed(2)}}),B=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,_)=>{const D=E(100+_);let j=30+Math.floor(D(1)*60),K=Math.max(10,Math.floor(D(2)*30));const yl=B[_%B.length],vl=+(.35+D(3)*.55).toFixed(2),_l=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(D(4)*30)}% ${30+Math.floor(D(5)*30)}%`,bl=40+Math.floor(D(6)*40),Ml=Math.floor(D(7)*20),sl=-20+Math.floor(D(8)*140);let Al=5+Math.floor(D(9)*40);return _===0&&(Al=Math.max(2,Al-8),j=Math.max(20,Math.floor(j*.85)),K=Math.max(8,Math.floor(K*.8))),{left:`${sl}%`,top:`${Al}%`,width:`${j}vw`,height:`${K}vh`,opacity:vl,color:_l,borderRadius:Ul,duration:bl,delay:Ml}});window.requestAnimationFrame(()=>{M(C),g(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:y.map((E,C)=>d.jsx("div",{className:"star",style:{left:E.left,top:E.top,animationDelay:E.animationDelay,opacity:E.opacity}},C))})]}),d.jsx("div",{className:"layer layer-clouds",children:N.map((E,C)=>d.jsx("div",{className:`cloud cloud-${C+1}`,style:{position:"absolute",left:E.left,top:E.top,width:E.width,height:E.height,background:E.color,opacity:E.opacity,borderRadius:E.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${E.duration}s linear ${E.delay}s infinite`}},C))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((E,C)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${E},300 ${E-20},250 ${E-15},250 ${E-30},200 ${E-25},200 ${E-40},150 ${E+40},150 ${E+25},200 ${E+30},200 ${E+15},250 ${E+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:E-5,y:"280",width:"10",height:"20",fill:"#111827"})]},C))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const L0=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium"],V0=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square"],jg=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window"],xg=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Ug=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Hg=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Rg=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],K0=y=>{switch(y){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(w0,{className:"door-handle ring",size:12});case"star":return d.jsx(x0,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},J0=y=>{if(y===0)return null;const M=y===4||y===6?2:4,N=y===4?2:y===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${M}, 1fr)`,gridTemplateRows:`repeat(${N}, 1fr)`},children:Array.from({length:y}).map((g,E)=>d.jsx("div",{className:"window-pane"},E))})},$0=y=>{if(y==="none")return null;switch(y){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},k0=y=>{if(y==="none")return null;switch(y){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function W0({windowNumber:y,isActive:M,isOpened:N,isExactMatch:g,onClick:E}){const C=zl.useRef(null),B=y===17,P=()=>{B&&C.current&&(C.current.currentTime=0,C.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},U=L0[y-1],_=V0[y-1],D=M&&!N||M&&g?"window-glow-intense":"",K=new Set([11,6,12,16,25]).has(y),yl=K?"window-round":_,_l=jg[y-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<y;Sl++)jg[Sl]==="door"?Ul++:bl++;const Ml=xg[(Ul-1)%xg.length],sl=Ug[(bl-1)%Ug.length],Al=Hg[(Ul-1)%Hg.length],Ll=Rg[(bl-1)%Rg.length];return d.jsx("div",{className:`calendar-window ${U} ${yl} ${D} ${N?"window-opened":""} ${M?"window-active":"window-inactive"}`,onClick:E,onMouseEnter:P,children:_l?d.jsxs("div",{className:`door-element ${Ml.type}`,children:[$0(Al),d.jsx("div",{className:`door-frame frame-${Ml.frame}`,children:d.jsxs("div",{className:`door-panel wood-${Ml.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[Ml.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[K0(Ml.handle),Ml.hasKeyhole&&d.jsx(O0,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:y})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${U}`,children:[k0(Ll),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${sl.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[J0(sl.panes),sl.shape==="arched"&&d.jsx("div",{className:"window-arch"}),B&&d.jsx(E0,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:y})]}),sl.hasSill&&d.jsx("div",{className:"window-sill",children:sl.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function F0({windowNumber:y,message:M,onClose:N}){return d.jsx("div",{className:"modal-overlay",onClick:N,children:d.jsx("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:N,children:d.jsx(Bg,{size:24})}),y!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",y]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:M}})]})})})}function Xu(y){const M=new Date(Date.UTC(2025,11,19,21,0,0,0)),N=y-1;return new Date(M.getTime()+N*24*60*60*1e3)}function Zu(y,M){return M.getTime()>=y.getTime()}function pc(y,M){const N=new Date(y);N.setUTCHours(0,0,0,0);const g=new Date(M);return g.setUTCHours(0,0,0,0),N.getTime()===g.getTime()}const I0="/advent/assets/muerte-DfSvC3Z-.jpg",P0="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",eh="/advent/assets/Ofrenda-DDd9dlHK.jpg",ah="/advent/assets/kolumbia-DUKl5Drs.webp",nh="/advent/assets/kolumb2--JWazZNY.webp",uh="/advent/assets/melhior-5oqVeQRz.webp",ih="/advent/assets/shir-CPxmcAyu.jpg",sh="/advent/assets/markes-DHTR6R5s.jpg",ch="/advent/assets/tolkin-Bkb1qdyy.jpg",oh="/advent/assets/tolkin1-Gt7VHXrl.jpg",rh="/advent/assets/berry-BayIKnFN.jpg",fh="/advent/assets/berry1-aZtyDiG8.jpg",gh="/advent/assets/gvatemala1-C3fdq1S5.jpg",dh="/advent/assets/graves-B4Ep0a2x.jpg",ph="/advent/assets/carpet1-BHoBEQUm.jpg",hh="/advent/assets/airsnakes-BtpaN7a0.jpg",mh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",vh="/advent/assets/brazil1-C1nzNzga.webp",bh="/advent/assets/ethiopia-CfI92xpA.jpg",Sh="/advent/assets/goats-B1iHvHcl.jpg",zh="/advent/assets/rabanda-ClmJ6Exb.jpg",_h="/advent/assets/honduras-DTj2TRgE.jpg",Ah="/advent/assets/honduras1-BfVuI_LD.jpg",Th="/advent/assets/resp-DBSDT0A7.png",Eh="/advent/assets/cicoriy-DL-J_EKv.webp",Mh="/advent/assets/carob-DDo_E6jz.jpg",wh="/advent/assets/tonka-CaSKsR3p.webp",Dh="/advent/assets/kardamon-D-LlmV-v.webp",Oh="/advent/assets/mem1-Coiz1JZ3.jpg",Nh="/advent/assets/cafe-DrSeHG9j.jpg",Ch="/advent/assets/yerevan1-0r9N0UnH.jpg",jh="/advent/assets/yerevan2-fQnNyY8p.jpg",xh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Hh="/advent/assets/bears-BwIhEuov.jpg",Rh="/advent/assets/ararat-DAhBMtll.jpg",qh="/advent/assets/jazzve-DliHyYYl.jpg",Bh="/advent/assets/abc-C__8usP9.webp",Yh="/advent/assets/noy-KD54xzv8.jpg",x={muerte:I0,katrina:P0,pink:lh,rese:th,Ofrenda:eh,kolumb2:nh,kolumbia:ah,melhior:uh,shir:ih,markes:sh,tolkin:ch,tolkin1:oh,berries:rh,berries1:fh,gvatemala1:gh,graves:dh,carpet1:ph,airsnake2:hh,fish:mh,fish1:yh,brazil1:vh,ethiopia:bh,goats:Sh,rabanda:zh,honduras:_h,honduras1:Ah,resp:Th,cicoriy:Eh,carob:Mh,tonka:wh,kardamon:Dh,mem:Oh,cafe:Nh,yerevan1:Ch,yerevan2:jh,yerevan3:xh,lion:Uh,bears:Hh,ararat:Rh,yazzve:qh,abc:Bh,noy:Yh},Gh=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${x.muerte}" />
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
<img src="${x.Ofrenda}" />
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
       <img src="${x.katrina}" />
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
      <img src="${x.muerte}" />
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

      <img src="${x.Ofrenda}" />

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
       <img src="${x.katrina}" />
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
  <img src="${x.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${x.rese}" />
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
  <img src="${x.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${x.rese}" />
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
    <img src="${x.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение — ведь Baggins = фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название! ☕🎉</p>
    <img src="${x.tolkin}" />
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
    <img src="${x.melhior}" />
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
      <img src="${x.tolkin1}" />
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
    <img src="${x.kolumbia}" />
    <p><strong>География:</strong> Анды, высота 1200-2000 м, вулканическая почва, два сезона дождей = урожай круглый год!</p>
    
    <p><strong>Вкус:</strong> Сбалансированный, средняя кислотность, карамель, орехи, чистый профиль. <strong>"Безопасный выбор"</strong> — почти всегда вкусно!</p>
    
    <p><strong>100% Арабика:</strong> Колумбия не выращивает робусту по закону! Только арабика.</p>
    
    <h3>Габриэль Гарсиа Маркес и кофе ☕📖</h3>
    <p><strong>Габо</strong> (как его называли в Колумбии) родился в <strong>Аракатаке</strong> — маленьком городке в зоне банановых плантаций. Но кофе был везде!</p>
    <img src="${x.markes}" />
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
    <img src="${x.kolumb2}" />
    <p>Качественное зерно → даже без кофеина сохраняется вкус!</p>
    
    <h3>Мельхиоровая ложечка 🥄✨</h3>
    <p><strong>Мельхиор</strong> — сплав меди + никель. В СССР = "народное серебро" (дешевле настоящего, но красиво!).</p>
    <img src="${x.melhior}" />
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
    <img src="${x.gvatemala1}" />
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
    <img src="${x.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${x.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее Зёбры и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${x.carpet1}" />
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
    <img src="${x.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${x.berries1}" />
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
    <img src="${x.gvatemala1}" />
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
    <img src="${x.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${x.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее тебя и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${x.carpet1}" />
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
    <img src="${x.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${x.berries1}" />
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
    <img src="${x.fish}" />
    
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

    <img src="${x.fish1}" />
    
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

    <img src="${x.brazil1}" />
    
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
    <img src="${x.ethiopia}" />
    <p><strong>Легенда Калди (IX век):</strong></p>
    <ul>
      <li>Пастух Калди заметил: его козы ели красные ягоды → танцевали всю ночь!</li>
      <li>Монахи попробовали → не спали на молитвах</li>
      <li>Сначала сожгли как "дьявольские ягоды"</li>
      <li>Но запах был так хорош, что решили заваривать!</li>
    </ul>
    <p>Между прочим, есть фотопруф:</p>
    <img src="${x.goats}" />
    
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
<img src="${x.rabanda}" />
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
    <img src="${x.fish}" />
    
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

    <img src="${x.fish1}" />
    
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

    <img src="${x.brazil1}" />
    
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
    <img src="${x.rabanda}" />

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
    <img src="${x.honduras}" />
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
    <img src="${x.resp}" />
    
    <p><strong>6 кофейных регионов:</strong></p>
    <ul>
      <li><strong>Copán</strong> — западный, у границы с Гватемалой, шоколад + карамель.</li>
      <li><strong>Opalaca</strong> — высокогорный, сбалансированный.</li>
      <li><strong>Montecillos</strong> — центральный, фруктовый, цитрусовый.</li>
      <li><strong>Comayagua</strong> — винная кислотность.</li>
      <li><strong>Agalta</strong> — восточный, тропические фрукты.</li>
      <li><strong>El Paraíso</strong> — у границы с Никарагуа, сладкий, мягкий.</li>
    </ul>
    <img src="${x.honduras1}" />
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
    <img src="${x.mem}" />
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
    <img src="${x.cicoriy}" />
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
    <img src="${x.cafe}" />
    
    <p><strong>Вкус:</strong> Древесный, ореховый, землистый. Вяжущий (танины!).</p>
    
    <p><strong>Проблема:</strong> Нужно вымачивать жёлуди (убрать танины), иначе горько и токсично.</p>
    
    <h4>4. Кэроб — шоколадный заменитель 🍫</h4>
    <p><strong>Что это:</strong> Порошок из стручков рожкового дерева (Средиземноморье).</p>
    <img src="${x.carob}" />
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
    <img src="${x.tonka}" />
    <p><strong>⚠️ Важно:</strong> Содержат кумарин (в больших дозах токсичен). В США запрещены в еде с 1954! В Европе разрешены в микродозах. В твоём стике — безопасная доза!</p>
    
    <h4>7. Зелёный кардамон — королева специй 👑</h4>
    <p><strong>Что это:</strong> Специя из семейства имбирных (Индия).</p>
    <img src="${x.kardamon}" />
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
    <img src="${x.mem}" />
  `},{day:7,date:"2025-12-26",tanya_gift:"Армянский детский растворимый кофе",zebra_gift:"Армянский детский растворимый кофе",tanya_bonus:"Зефир в виде кошачьей лапки",zebra_bonus:"Зефир в виде кошачьей лапки",title:"Ереван — город, в который я влюбилась",tanya_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${x.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${x.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${x.yerevan3}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${x.bears}" />
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
    <img src="${x.yazzve}" />
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
    <img src="${x.ararat}" />
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
    <img src="${x.abc}" />
    
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
    <img src="${x.noy}" />
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
    <p>А вот сюжет оперы Гаянэ, написанной в эвакуации во время ВОВ:</p>
    <p><strong>Сюжет балета "Гаянэ":</strong></p>
<p>Армянский колхоз, время сбора урожая. Все танцуют и радуются. <strong>Гаянэ</strong> — молодая красавица, бригадир — замужем за <strong>Гико</strong>. Но оказывается, её муж — <strong>контрабандист и предатель!</strong> Он тайком переправляет через границу краденое добро.</p>

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
<img src="${x.yerevan1}" />
`,zebra_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${x.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${x.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${x.yerevan3}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${x.bears}" />
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
    <img src="${x.yazzve}" />
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
    <img src="${x.ararat}" />
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
    <img src="${x.abc}" />
    
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
    <img src="${x.noy}" />
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
    <p>А вот сюжет оперы Гаянэ, написанной в эвакуации во время ВОВ:</p>
    <p><strong>Сюжет балета "Гаянэ":</strong></p>
<p>Армянский колхоз, время сбора урожая. Все танцуют и радуются. <strong>Гаянэ</strong> — молодая красавица, бригадир — замужем за <strong>Гико</strong>. Но оказывается, её муж — <strong>контрабандист и предатель!</strong> Он тайком переправляет через границу краденое добро.</p>

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
<img src="${x.yerevan1}" />
`},{day:8,date:"2025-12-27",tanya_gift:"Какао с опоссумом",zebra_gift:"Какао с опоссумом (х2)",tanya_bonus:"Маршмеллоу",zebra_bonus:"Маршмеллоу",title:"Опоссум пьёт и не орёт",tanya_message:`
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
    `},{day:10,date:"2025-12-29",tanya_gift:"Сырный 3в1",zebra_gift:"Сырный 3в1 (х2)",tanya_bonus:"Пастила кофе-алкоголь",zebra_bonus:"Пастила кофе-алкоголь (х2)",title:"День 9",tanya_message:"<p>Подарок: Сырный 3в1</p><p>Бонус: Пастила кофе-алкоголь</p>",zebra_message:"<p>Подарок: Сырный 3в1 (х2)</p><p>Бонус: Пастила кофе-алкоголь (х2)</p>"},{day:11,date:"2025-12-30",tanya_gift:"Лавандовый 3в1",zebra_gift:"Лавандовый 3в1 (х2)",tanya_bonus:"Кофейная свечка",zebra_bonus:"Кофейная свечка (х2)",title:"День 10",tanya_message:"<p>Подарок: Лавандовый 3в1</p><p>Бонус: Кофейная свечка</p>",zebra_message:"<p>Подарок: Лавандовый 3в1 (х2)</p><p>Бонус: Кофейная свечка (х2)</p>"},{day:12,date:"2025-12-31",tanya_gift:"Ванильный 3в1",zebra_gift:"Ванильный 3в1 (х2)",tanya_bonus:"Кофейная маска",zebra_bonus:"Кофейная маска (х2)",title:"День 11",tanya_message:"<p>Подарок: Ванильный 3в1</p><p>Бонус: Кофейная маска</p>",zebra_message:"<p>Подарок: Ванильный 3в1 (х2)</p><p>Бонус: Кофейная маска (х2)</p>"},{day:13,date:"2026-01-01",tanya_gift:"Who Needs Sleep",zebra_gift:"Who Needs Sleep (х2)",tanya_bonus:"Маршмеллоу",zebra_bonus:"Маршмеллоу (х2)",title:"День 12",tanya_message:"<p>Подарок: Who Needs Sleep</p><p>Бонус: Маршмеллоу</p>",zebra_message:"<p>Подарок: Who Needs Sleep (х2)</p><p>Бонус: Маршмеллоу (х2)</p>"},{day:14,date:"2026-01-02",tanya_gift:"Dozo Coffee",zebra_gift:"Dozo Coffee (х2)",tanya_bonus:"Цветная шоколадка",zebra_bonus:"Цветная шоколадка (х2)",title:"День 13",tanya_message:"<p>Подарок: Dozo Coffee</p><p>Бонус: Цветная шоколадка</p>",zebra_message:"<p>Подарок: Dozo Coffee (х2)</p><p>Бонус: Цветная шоколадка (х2)</p>"},{day:15,date:"2026-01-03",tanya_gift:"Camera Obscura",zebra_gift:"Camera Obscura (х2)",tanya_bonus:"Сироп Острый мёд",zebra_bonus:"Сироп Острый мёд (х2)",title:"День 14",tanya_message:"<p>Подарок: Camera Obscura</p><p>Бонус: Сироп Острый мёд</p>",zebra_message:"<p>Подарок: Camera Obscura (х2)</p><p>Бонус: Сироп Острый мёд (х2)</p>"},{day:16,date:"2026-01-04",tanya_gift:"Сова-концентрат",zebra_gift:"Сова-концентрат",tanya_bonus:"Сироп Мисо-карамель",zebra_bonus:"Сироп Мисо-карамель",title:"День 15",tanya_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>",zebra_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>"},{day:17,date:"2026-01-05",tanya_gift:"Yellow Submarine",zebra_gift:"Yellow Submarine (х2)",tanya_bonus:"Протеиновое печенье",zebra_bonus:"Протеиновое печенье (х2)",title:"День 16",tanya_message:"<p>Подарок: Yellow Submarine</p><p>Бонус: Протеиновое печенье</p>",zebra_message:"<p>Подарок: Yellow Submarine (х2)</p><p>Бонус: Протеиновое печенье (х2)</p>"},{day:18,date:"2026-01-06",tanya_gift:"Турецкий Mehmet Efendi",zebra_gift:"Турецкий Mehmet Efendi (х2)",tanya_bonus:"Матча латте",zebra_bonus:"Матча латте (х2)",title:"День 17",tanya_message:"<p>Подарок: Турецкий Mehmet Efendi</p><p>Бонус: Матча латте</p>",zebra_message:"<p>Подарок: Турецкий Mehmet Efendi (х2)</p><p>Бонус: Матча латте (х2)</p>"},{day:19,date:"2026-01-07",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Шоколадная бомбочка",zebra_bonus:"Шоколадная бомбочка (х2)",title:"День 18",tanya_message:"<p>Подарок: Круиз: по-венски</p><p>Бонус: Шоколадная бомбочка</p>",zebra_message:"<p>Подарок: Круиз: по-индийски (х2)</p><p>Бонус: Шоколадная бомбочка (х2)</p>"},{day:20,date:"2026-01-08",tanya_gift:"Mitsumoto японский",zebra_gift:"Mitsumoto японский (х2)",tanya_bonus:"Рождественский чай",zebra_bonus:"Рождественский чай (х2)",title:"День 19",tanya_message:"<p>Подарок: Mitsumoto японский</p><p>Бонус: Рождественский чай</p>",zebra_message:"<p>Подарок: Mitsumoto японский (х2)</p><p>Бонус: Рождественский чай (х2)</p>"},{day:21,date:"2026-01-09",tanya_gift:"KopiCat Вьетнам",zebra_gift:"KopiCat Вьетнам (х2)",tanya_bonus:"Экзотический чай",zebra_bonus:"Экзотический чай (х2)",title:"День 20",tanya_message:"<p>Подарок: KopiCat Вьетнам</p><p>Бонус: Экзотический чай</p>",zebra_message:"<p>Подарок: KopiCat Вьетнам (х2)</p><p>Бонус: Экзотический чай (х2)</p>"},{day:22,date:"2026-01-10",tanya_gift:"Армянский 3в1",zebra_gift:"Армянский 3в1 (х2)",tanya_bonus:"Миндальный Вкусвилл",zebra_bonus:"Миндальный Вкусвилл (х2)",title:"День 21",tanya_message:"<p>Подарок: Армянский 3в1</p><p>Бонус: Миндальный Вкусвилл</p>",zebra_message:"<p>Подарок: Армянский 3в1 (х2)</p><p>Бонус: Миндальный Вкусвилл (х2)</p>"},{day:23,date:"2026-01-11",tanya_gift:"Декаф Питерский",zebra_gift:"Декаф IL DA DA MA",tanya_bonus:"Чай-книга гаданий",zebra_bonus:"Чай-книга гаданий (х2)",title:"День 22",tanya_message:"<p>Подарок: Декаф Питерский</p><p>Бонус: Чай-книга гаданий</p>",zebra_message:"<p>Подарок: Декаф IL DA DA MA</p><p>Бонус: Чай-книга гаданий (х2)</p>"},{day:24,date:"2026-01-12",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:"<p>Подарок: Декаф Гватемала</p><p>Бонус: Бэггинс кофе</p>",zebra_message:"<p>Подарок: Декаф Мексика (х2)</p><p>Бонус: Бэггинс кофе (х2)</p>"},{day:25,date:"2026-01-13",tanya_gift:"Рождественский с лошадью",zebra_gift:"Рождественский с лошадью (х2)",tanya_bonus:"Какао с опоссумом",zebra_bonus:"Какао с опоссумом (х2)",title:"День 24",tanya_message:"<p>Подарок: Рождественский с лошадью</p><p>Бонус: Какао с опоссумом</p>",zebra_message:"<p>Подарок: Рождественский с лошадью (х2)</p><p>Бонус: Какао с опоссумом (х2)</p>"},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function Qh({currentDate:y,userName:M}){const[N,g]=zl.useState(()=>Yg()),[E,C]=zl.useState(null),B=D=>{const j=Xu(D);if(Zu(j,y)&&(C(D),!N.has(D))){const K=G0(D);g(K)}},P=()=>{C(null)},_=[...Array.from({length:25},(D,j)=>j+1)].sort((D,j)=>{const K=Xu(D),yl=Xu(j),vl=pc(K,y),_l=pc(yl,y),Ul=N.has(D),bl=N.has(j),Ml=Zu(K,y),sl=Zu(yl,y),Al=Ml&&!Ul,Ll=sl&&!bl,Sl=vl&&Ul,J=_l&&bl,Rl=!Ml,$l=!sl,Ft=Ul&&!vl&&Ml,dt=bl&&!_l&&sl;return Al&&!Ll?-1:!Al&&Ll?1:Al&&Ll?D-j:Sl&&!J?-1:!Sl&&J?1:Rl&&!$l?-1:!Rl&&$l?1:Rl&&$l||Ft&&dt?D-j:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:_.map(D=>{const j=Xu(D),K=Zu(j,y),yl=N.has(D),vl=pc(j,y);return d.jsx(W0,{windowNumber:D,isActive:K,isOpened:yl,isExactMatch:vl,onClick:()=>B(D)},D)})}),E!==null&&(()=>{const D=Gh[E-1],j=M==="Tanya"?D.tanya_message:M==="Zebra"?D.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(F0,{windowNumber:E,message:j,onClose:P})})()]})}function Xh(){const[y,M]=zl.useState(!1),N=zl.useRef(null),[g,E]=zl.useState(!1);zl.useEffect(()=>{const B=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",B),B==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),E(!0))},[]),zl.useEffect(()=>{if(!g)return;const B=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),M(!0),E(!1),window.removeEventListener("pointerdown",B),window.removeEventListener("keydown",B)};return window.addEventListener("pointerdown",B,{once:!0}),window.addEventListener("keydown",B,{once:!0}),()=>{window.removeEventListener("pointerdown",B),window.removeEventListener("keydown",B)}},[g]),zl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",y,"ref=",N.current),!N.current)return;const B=N.current;if(y)console.debug("[AudioControls] calling play()"),B.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),E(!0))});else{console.debug("[AudioControls] calling pause()");try{B.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[y]);const C=()=>{const B=!y;console.debug("[AudioControls] toggleMusic ->",B),M(B),localStorage.setItem("musicEnabled",String(B))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${y?"audio-active":""}`,onClick:C,title:"Toggle Christmas Music",children:[y?d.jsx(H0,{size:20}):d.jsx(q0,{size:20}),d.jsx(C0,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:N,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:B=>console.error("[AudioControls] audio event: error",B)})]})}function Zh(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((y,M)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},M))})}const Lh=()=>new Date;function Vh(){const[y,M]=zl.useState(()=>{const C=localStorage.getItem("adventCalendarUser");return C==="Tanya"||C==="Zebra"?C:(localStorage.clear(),null)}),[N,g]=zl.useState(Lh),E=C=>{localStorage.clear(),M(C),localStorage.setItem("adventCalendarUser",C)};return zl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);g(U)}catch(B){console.error("Failed to fetch current date:",B),g(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx(Z0,{}),d.jsx(Zh,{}),d.jsx(Xh,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(X0,{userName:y,onUserSelect:E}),d.jsx(Qh,{currentDate:N,userName:y})]})]})}v0.createRoot(document.getElementById("root")).render(d.jsx(zl.StrictMode,{children:d.jsx(Vh,{})}));
