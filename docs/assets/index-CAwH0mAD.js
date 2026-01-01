(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))p(E);new MutationObserver(E=>{for(const x of E)if(x.type==="childList")for(const q of x.addedNodes)q.tagName==="LINK"&&q.rel==="modulepreload"&&p(q)}).observe(document,{childList:!0,subtree:!0});function C(E){const x={};return E.integrity&&(x.integrity=E.integrity),E.referrerPolicy&&(x.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?x.credentials="include":E.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(E){if(E.ep)return;E.ep=!0;const x=C(E);fetch(E.href,x)}})();var oo={exports:{}},_a={};var bf;function rm(){if(bf)return _a;bf=1;var v=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function C(p,E,x){var q=null;if(x!==void 0&&(q=""+x),E.key!==void 0&&(q=""+E.key),"key"in E){x={};for(var P in E)P!=="key"&&(x[P]=E[P])}else x=E;return E=x.ref,{$$typeof:v,type:p,key:q,ref:E!==void 0?E:null,props:x}}return _a.Fragment=w,_a.jsx=C,_a.jsxs=C,_a}var Sf;function cm(){return Sf||(Sf=1,oo.exports=rm()),oo.exports}var d=cm(),ro={exports:{}},Q={};var zf;function gm(){if(zf)return Q;zf=1;var v=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),q=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),K=Symbol.iterator;function yl(g){return g===null||typeof g!="object"?null:(g=K&&g[K]||g["@@iterator"],typeof g=="function"?g:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_l=Object.assign,Ul={};function bl(g,M,D){this.props=g,this.context=M,this.refs=Ul,this.updater=D||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(g,M){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,M,"setState")},bl.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function El(){}El.prototype=bl.prototype;function sl(g,M,D){this.props=g,this.context=M,this.refs=Ul,this.updater=D||vl}var Tl=sl.prototype=new El;Tl.constructor=sl,_l(Tl,bl.prototype),Tl.isPureReactComponent=!0;var Vl=Array.isArray;function Sl(){}var J={H:null,A:null,T:null,S:null},Rl=Object.prototype.hasOwnProperty;function $l(g,M,D){var R=D.ref;return{$$typeof:v,type:g,key:M,ref:R!==void 0?R:null,props:D}}function Ft(g,M){return $l(g.type,M,g.props)}function pt(g){return typeof g=="object"&&g!==null&&g.$$typeof===v}function kl(g){var M={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(D){return M[D]})}var Ae=/\/+/g;function xt(g,M){return typeof g=="object"&&g!==null&&g.key!=null?kl(""+g.key):M.toString(36)}function At(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Sl,Sl):(g.status="pending",g.then(function(M){g.status==="pending"&&(g.status="fulfilled",g.value=M)},function(M){g.status==="pending"&&(g.status="rejected",g.reason=M)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function z(g,M,D,R,L){var $=typeof g;($==="undefined"||$==="boolean")&&(g=null);var al=!1;if(g===null)al=!0;else switch($){case"bigint":case"string":case"number":al=!0;break;case"object":switch(g.$$typeof){case v:case w:al=!0;break;case O:return al=g._init,z(al(g._payload),M,D,R,L)}}if(al)return L=L(g),al=R===""?"."+xt(g,0):R,Vl(L)?(D="",al!=null&&(D=al.replace(Ae,"$&/")+"/"),z(L,M,D,"",function(On){return On})):L!=null&&(pt(L)&&(L=Ft(L,D+(L.key==null||g&&g.key===L.key?"":(""+L.key).replace(Ae,"$&/")+"/")+al)),M.push(L)),1;al=0;var Kl=R===""?".":R+":";if(Vl(g))for(var wl=0;wl<g.length;wl++)R=g[wl],$=Kl+xt(R,wl),al+=z(R,M,D,$,L);else if(wl=yl(g),typeof wl=="function")for(g=wl.call(g),wl=0;!(R=g.next()).done;)R=R.value,$=Kl+xt(R,wl++),al+=z(R,M,D,$,L);else if($==="object"){if(typeof g.then=="function")return z(At(g),M,D,R,L);throw M=String(g),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return al}function j(g,M,D){if(g==null)return g;var R=[],L=0;return z(g,R,"","",function($){return M.call(D,$,L++)}),R}function G(g){if(g._status===-1){var M=g._result;M=M(),M.then(function(D){(g._status===0||g._status===-1)&&(g._status=1,g._result=D)},function(D){(g._status===0||g._status===-1)&&(g._status=2,g._result=D)}),g._status===-1&&(g._status=0,g._result=M)}if(g._status===1)return g._result.default;throw g._result}var ol=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},fl={map:j,forEach:function(g,M,D){j(g,function(){M.apply(this,arguments)},D)},count:function(g){var M=0;return j(g,function(){M++}),M},toArray:function(g){return j(g,function(M){return M})||[]},only:function(g){if(!pt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return Q.Activity=N,Q.Children=fl,Q.Component=bl,Q.Fragment=C,Q.Profiler=E,Q.PureComponent=sl,Q.StrictMode=p,Q.Suspense=U,Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,Q.__COMPILER_RUNTIME={__proto__:null,c:function(g){return J.H.useMemoCache(g)}},Q.cache=function(g){return function(){return g.apply(null,arguments)}},Q.cacheSignal=function(){return null},Q.cloneElement=function(g,M,D){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var R=_l({},g.props),L=g.key;if(M!=null)for($ in M.key!==void 0&&(L=""+M.key),M)!Rl.call(M,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&M.ref===void 0||(R[$]=M[$]);var $=arguments.length-2;if($===1)R.children=D;else if(1<$){for(var al=Array($),Kl=0;Kl<$;Kl++)al[Kl]=arguments[Kl+2];R.children=al}return $l(g.type,L,R)},Q.createContext=function(g){return g={$$typeof:q,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:x,_context:g},g},Q.createElement=function(g,M,D){var R,L={},$=null;if(M!=null)for(R in M.key!==void 0&&($=""+M.key),M)Rl.call(M,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(L[R]=M[R]);var al=arguments.length-2;if(al===1)L.children=D;else if(1<al){for(var Kl=Array(al),wl=0;wl<al;wl++)Kl[wl]=arguments[wl+2];L.children=Kl}if(g&&g.defaultProps)for(R in al=g.defaultProps,al)L[R]===void 0&&(L[R]=al[R]);return $l(g,$,L)},Q.createRef=function(){return{current:null}},Q.forwardRef=function(g){return{$$typeof:P,render:g}},Q.isValidElement=pt,Q.lazy=function(g){return{$$typeof:O,_payload:{_status:-1,_result:g},_init:G}},Q.memo=function(g,M){return{$$typeof:T,type:g,compare:M===void 0?null:M}},Q.startTransition=function(g){var M=J.T,D={};J.T=D;try{var R=g(),L=J.S;L!==null&&L(D,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(Sl,ol)}catch($){ol($)}finally{M!==null&&D.types!==null&&(M.types=D.types),J.T=M}},Q.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},Q.use=function(g){return J.H.use(g)},Q.useActionState=function(g,M,D){return J.H.useActionState(g,M,D)},Q.useCallback=function(g,M){return J.H.useCallback(g,M)},Q.useContext=function(g){return J.H.useContext(g)},Q.useDebugValue=function(){},Q.useDeferredValue=function(g,M){return J.H.useDeferredValue(g,M)},Q.useEffect=function(g,M){return J.H.useEffect(g,M)},Q.useEffectEvent=function(g){return J.H.useEffectEvent(g)},Q.useId=function(){return J.H.useId()},Q.useImperativeHandle=function(g,M,D){return J.H.useImperativeHandle(g,M,D)},Q.useInsertionEffect=function(g,M){return J.H.useInsertionEffect(g,M)},Q.useLayoutEffect=function(g,M){return J.H.useLayoutEffect(g,M)},Q.useMemo=function(g,M){return J.H.useMemo(g,M)},Q.useOptimistic=function(g,M){return J.H.useOptimistic(g,M)},Q.useReducer=function(g,M,D){return J.H.useReducer(g,M,D)},Q.useRef=function(g){return J.H.useRef(g)},Q.useState=function(g){return J.H.useState(g)},Q.useSyncExternalStore=function(g,M,D){return J.H.useSyncExternalStore(g,M,D)},Q.useTransition=function(){return J.H.useTransition()},Q.version="19.2.3",Q}var _f;function ho(){return _f||(_f=1,ro.exports=gm()),ro.exports}var zl=ho(),co={exports:{}},Ta={},go={exports:{}},fo={};var Tf;function fm(){return Tf||(Tf=1,(function(v){function w(z,j){var G=z.length;z.push(j);l:for(;0<G;){var ol=G-1>>>1,fl=z[ol];if(0<E(fl,j))z[ol]=j,z[G]=fl,G=ol;else break l}}function C(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var j=z[0],G=z.pop();if(G!==j){z[0]=G;l:for(var ol=0,fl=z.length,g=fl>>>1;ol<g;){var M=2*(ol+1)-1,D=z[M],R=M+1,L=z[R];if(0>E(D,G))R<fl&&0>E(L,D)?(z[ol]=L,z[R]=G,ol=R):(z[ol]=D,z[M]=G,ol=M);else if(R<fl&&0>E(L,G))z[ol]=L,z[R]=G,ol=R;else break l}}return j}function E(z,j){var G=z.sortIndex-j.sortIndex;return G!==0?G:z.id-j.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;v.unstable_now=function(){return x.now()}}else{var q=Date,P=q.now();v.unstable_now=function(){return q.now()-P}}var U=[],T=[],O=1,N=null,K=3,yl=!1,vl=!1,_l=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,El=typeof clearTimeout=="function"?clearTimeout:null,sl=typeof setImmediate<"u"?setImmediate:null;function Tl(z){for(var j=C(T);j!==null;){if(j.callback===null)p(T);else if(j.startTime<=z)p(T),j.sortIndex=j.expirationTime,w(U,j);else break;j=C(T)}}function Vl(z){if(_l=!1,Tl(z),!vl)if(C(U)!==null)vl=!0,Sl||(Sl=!0,kl());else{var j=C(T);j!==null&&At(Vl,j.startTime-z)}}var Sl=!1,J=-1,Rl=5,$l=-1;function Ft(){return Ul?!0:!(v.unstable_now()-$l<Rl)}function pt(){if(Ul=!1,Sl){var z=v.unstable_now();$l=z;var j=!0;try{l:{vl=!1,_l&&(_l=!1,El(J),J=-1),yl=!0;var G=K;try{t:{for(Tl(z),N=C(U);N!==null&&!(N.expirationTime>z&&Ft());){var ol=N.callback;if(typeof ol=="function"){N.callback=null,K=N.priorityLevel;var fl=ol(N.expirationTime<=z);if(z=v.unstable_now(),typeof fl=="function"){N.callback=fl,Tl(z),j=!0;break t}N===C(U)&&p(U),Tl(z)}else p(U);N=C(U)}if(N!==null)j=!0;else{var g=C(T);g!==null&&At(Vl,g.startTime-z),j=!1}}break l}finally{N=null,K=G,yl=!1}j=void 0}}finally{j?kl():Sl=!1}}}var kl;if(typeof sl=="function")kl=function(){sl(pt)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,xt=Ae.port2;Ae.port1.onmessage=pt,kl=function(){xt.postMessage(null)}}else kl=function(){bl(pt,0)};function At(z,j){J=bl(function(){z(v.unstable_now())},j)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(z){z.callback=null},v.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rl=0<z?Math.floor(1e3/z):5},v.unstable_getCurrentPriorityLevel=function(){return K},v.unstable_next=function(z){switch(K){case 1:case 2:case 3:var j=3;break;default:j=K}var G=K;K=j;try{return z()}finally{K=G}},v.unstable_requestPaint=function(){Ul=!0},v.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=K;K=z;try{return j()}finally{K=G}},v.unstable_scheduleCallback=function(z,j,G){var ol=v.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ol+G:ol):G=ol,z){case 1:var fl=-1;break;case 2:fl=250;break;case 5:fl=1073741823;break;case 4:fl=1e4;break;default:fl=5e3}return fl=G+fl,z={id:O++,callback:j,priorityLevel:z,startTime:G,expirationTime:fl,sortIndex:-1},G>ol?(z.sortIndex=G,w(T,z),C(U)===null&&z===C(T)&&(_l?(El(J),J=-1):_l=!0,At(Vl,G-ol))):(z.sortIndex=fl,w(U,z),vl||yl||(vl=!0,Sl||(Sl=!0,kl()))),z},v.unstable_shouldYield=Ft,v.unstable_wrapCallback=function(z){var j=K;return function(){var G=K;K=j;try{return z.apply(this,arguments)}finally{K=G}}}})(fo)),fo}var Af;function pm(){return Af||(Af=1,go.exports=fm()),go.exports}var po={exports:{}},Zl={};var Mf;function dm(){if(Mf)return Zl;Mf=1;var v=ho();function w(U){var T="https://react.dev/errors/"+U;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)T+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+U+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(){}var p={d:{f:C,r:function(){throw Error(w(522))},D:C,C,L:C,m:C,X:C,S:C,M:C},p:0,findDOMNode:null},E=Symbol.for("react.portal");function x(U,T,O){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:N==null?null:""+N,children:U,containerInfo:T,implementation:O}}var q=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,T){if(U==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Zl.createPortal=function(U,T){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(w(299));return x(U,T,null,O)},Zl.flushSync=function(U){var T=q.T,O=p.p;try{if(q.T=null,p.p=2,U)return U()}finally{q.T=T,p.p=O,p.d.f()}},Zl.preconnect=function(U,T){typeof U=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,p.d.C(U,T))},Zl.prefetchDNS=function(U){typeof U=="string"&&p.d.D(U)},Zl.preinit=function(U,T){if(typeof U=="string"&&T&&typeof T.as=="string"){var O=T.as,N=P(O,T.crossOrigin),K=typeof T.integrity=="string"?T.integrity:void 0,yl=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;O==="style"?p.d.S(U,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:N,integrity:K,fetchPriority:yl}):O==="script"&&p.d.X(U,{crossOrigin:N,integrity:K,fetchPriority:yl,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},Zl.preinitModule=function(U,T){if(typeof U=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var O=P(T.as,T.crossOrigin);p.d.M(U,{crossOrigin:O,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&p.d.M(U)},Zl.preload=function(U,T){if(typeof U=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var O=T.as,N=P(O,T.crossOrigin);p.d.L(U,O,{crossOrigin:N,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},Zl.preloadModule=function(U,T){if(typeof U=="string")if(T){var O=P(T.as,T.crossOrigin);p.d.m(U,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:O,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else p.d.m(U)},Zl.requestFormReset=function(U){p.d.r(U)},Zl.unstable_batchedUpdates=function(U,T){return U(T)},Zl.useFormState=function(U,T,O){return q.H.useFormState(U,T,O)},Zl.useFormStatus=function(){return q.H.useHostTransitionStatus()},Zl.version="19.2.3",Zl}var Ef;function mm(){if(Ef)return po.exports;Ef=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(w){console.error(w)}}return v(),po.exports=dm(),po.exports}var wf;function hm(){if(wf)return Ta;wf=1;var v=pm(),w=ho(),C=mm();function p(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)t+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function x(l){var t=l,e=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(e=t.return),l=t.return;while(l)}return t.tag===3?e:null}function q(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(x(l)!==l)throw Error(p(188))}function T(l){var t=l.alternate;if(!t){if(t=x(l),t===null)throw Error(p(188));return t!==l?null:l}for(var e=l,n=t;;){var a=e.return;if(a===null)break;var i=a.alternate;if(i===null){if(n=a.return,n!==null){e=n;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===e)return U(a),l;if(i===n)return U(a),t;i=i.sibling}throw Error(p(188))}if(e.return!==n.return)e=a,n=i;else{for(var u=!1,s=a.child;s;){if(s===e){u=!0,e=a,n=i;break}if(s===n){u=!0,n=a,e=i;break}s=s.sibling}if(!u){for(s=i.child;s;){if(s===e){u=!0,e=i,n=a;break}if(s===n){u=!0,n=i,e=a;break}s=s.sibling}if(!u)throw Error(p(189))}}if(e.alternate!==n)throw Error(p(190))}if(e.tag!==3)throw Error(p(188));return e.stateNode.current===e?l:t}function O(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=O(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,K=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),_l=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),El=Symbol.for("react.consumer"),sl=Symbol.for("react.context"),Tl=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Rl=Symbol.for("react.lazy"),$l=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function kl(l){return l===null||typeof l!="object"?null:(l=pt&&l[pt]||l["@@iterator"],typeof l=="function"?l:null)}var Ae=Symbol.for("react.client.reference");function xt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ae?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case _l:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case Vl:return"Suspense";case Sl:return"SuspenseList";case $l:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case sl:return l.displayName||"Context";case El:return(l._context.displayName||"Context")+".Consumer";case Tl:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case J:return t=l.displayName||null,t!==null?t:xt(l.type)||"Memo";case Rl:t=l._payload,l=l._init;try{return xt(l(t))}catch{}}return null}var At=Array.isArray,z=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},ol=[],fl=-1;function g(l){return{current:l}}function M(l){0>fl||(l.current=ol[fl],ol[fl]=null,fl--)}function D(l,t){fl++,ol[fl]=l.current,l.current=t}var R=g(null),L=g(null),$=g(null),al=g(null);function Kl(l,t){switch(D($,t),D(L,l),D(R,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Gg(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Gg(t),l=Qg(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}M(R),D(R,l)}function wl(){M(R),M(L),M($)}function On(l){l.memoizedState!==null&&D(al,l);var t=R.current,e=Qg(t,l.type);t!==e&&(D(L,l),D(R,e))}function Aa(l){L.current===l&&(M(R),M(L)),al.current===l&&(M(al),va._currentValue=G)}var Vi,yo;function Me(l){if(Vi===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||"",yo=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vi+l+yo}var Zi=!1;function Ki(l,t){if(!l||Zi)return"";Zi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(b){var y=b}Reflect.construct(l,[],A)}else{try{A.call()}catch(b){y=b}l.call(A.prototype)}}else{try{throw Error()}catch(b){y=b}(A=l())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),u=i[0],s=i[1];if(u&&s){var o=u.split(`
`),h=s.split(`
`);for(a=n=0;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;for(;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;if(n===o.length||a===h.length)for(n=o.length-1,a=h.length-1;1<=n&&0<=a&&o[n]!==h[a];)a--;for(;1<=n&&0<=a;n--,a--)if(o[n]!==h[a]){if(n!==1||a!==1)do if(n--,a--,0>a||o[n]!==h[a]){var S=`
`+o[n].replace(" at new "," at ");return l.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",l.displayName)),S}while(1<=n&&0<=a);break}}}finally{Zi=!1,Error.prepareStackTrace=e}return(e=l?l.displayName||l.name:"")?Me(e):""}function Xf(l,t){switch(l.tag){case 26:case 27:case 5:return Me(l.type);case 16:return Me("Lazy");case 13:return l.child!==t&&t!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return Ki(l.type,!1);case 11:return Ki(l.type.render,!1);case 1:return Ki(l.type,!0);case 31:return Me("Activity");default:return""}}function vo(l){try{var t="",e=null;do t+=Xf(l,e),e=l,l=l.return;while(l);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ji=Object.prototype.hasOwnProperty,$i=v.unstable_scheduleCallback,ki=v.unstable_cancelCallback,Gf=v.unstable_shouldYield,Qf=v.unstable_requestPaint,nt=v.unstable_now,Lf=v.unstable_getCurrentPriorityLevel,bo=v.unstable_ImmediatePriority,So=v.unstable_UserBlockingPriority,Ma=v.unstable_NormalPriority,Vf=v.unstable_LowPriority,zo=v.unstable_IdlePriority,Zf=v.log,Kf=v.unstable_setDisableYieldValue,Dn=null,at=null;function It(l){if(typeof Zf=="function"&&Kf(l),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Dn,l)}catch{}}var it=Math.clz32?Math.clz32:kf,Jf=Math.log,$f=Math.LN2;function kf(l){return l>>>=0,l===0?32:31-(Jf(l)/$f|0)|0}var Ea=256,wa=262144,ja=4194304;function Ee(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Oa(l,t,e){var n=l.pendingLanes;if(n===0)return 0;var a=0,i=l.suspendedLanes,u=l.pingedLanes;l=l.warmLanes;var s=n&134217727;return s!==0?(n=s&~i,n!==0?a=Ee(n):(u&=s,u!==0?a=Ee(u):e||(e=s&~l,e!==0&&(a=Ee(e))))):(s=n&~i,s!==0?a=Ee(s):u!==0?a=Ee(u):e||(e=n&~l,e!==0&&(a=Ee(e)))),a===0?0:t!==0&&t!==a&&(t&i)===0&&(i=a&-a,e=t&-t,i>=e||i===32&&(e&4194048)!==0)?t:a}function Cn(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wf(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _o(){var l=ja;return ja<<=1,(ja&62914560)===0&&(ja=4194304),l}function Wi(l){for(var t=[],e=0;31>e;e++)t.push(l);return t}function xn(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Ff(l,t,e,n,a,i){var u=l.pendingLanes;l.pendingLanes=e,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=e,l.entangledLanes&=e,l.errorRecoveryDisabledLanes&=e,l.shellSuspendCounter=0;var s=l.entanglements,o=l.expirationTimes,h=l.hiddenUpdates;for(e=u&~e;0<e;){var S=31-it(e),A=1<<S;s[S]=0,o[S]=-1;var y=h[S];if(y!==null)for(h[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}e&=~A}n!==0&&To(l,n,0),i!==0&&a===0&&l.tag!==0&&(l.suspendedLanes|=i&~(u&~t))}function To(l,t,e){l.pendingLanes|=t,l.suspendedLanes&=~t;var n=31-it(t);l.entangledLanes|=t,l.entanglements[n]=l.entanglements[n]|1073741824|e&261930}function Ao(l,t){var e=l.entangledLanes|=t;for(l=l.entanglements;e;){var n=31-it(e),a=1<<n;a&t|l[n]&t&&(l[n]|=t),e&=~a}}function Mo(l,t){var e=t&-t;return e=(e&42)!==0?1:Fi(e),(e&(l.suspendedLanes|t))!==0?0:e}function Fi(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ii(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Eo(){var l=j.p;return l!==0?l:(l=window.event,l===void 0?32:ff(l.type))}function wo(l,t){var e=j.p;try{return j.p=l,t()}finally{j.p=e}}var Pt=Math.random().toString(36).slice(2),Yl="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,Ve="__reactContainer$"+Pt,Pi="__reactEvents$"+Pt,If="__reactListeners$"+Pt,Pf="__reactHandles$"+Pt,jo="__reactResources$"+Pt,Nn="__reactMarker$"+Pt;function lu(l){delete l[Yl],delete l[Wl],delete l[Pi],delete l[If],delete l[Pf]}function Ze(l){var t=l[Yl];if(t)return t;for(var e=l.parentNode;e;){if(t=e[Ve]||e[Yl]){if(e=t.alternate,t.child!==null||e!==null&&e.child!==null)for(l=kg(l);l!==null;){if(e=l[Yl])return e;l=kg(l)}return t}l=e,e=l.parentNode}return null}function Ke(l){if(l=l[Yl]||l[Ve]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Un(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(p(33))}function Je(l){var t=l[jo];return t||(t=l[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Bl(l){l[Nn]=!0}var Oo=new Set,Do={};function we(l,t){$e(l,t),$e(l+"Capture",t)}function $e(l,t){for(Do[l]=t,l=0;l<t.length;l++)Oo.add(t[l])}var lp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Co={},xo={};function tp(l){return Ji.call(xo,l)?!0:Ji.call(Co,l)?!1:lp.test(l)?xo[l]=!0:(Co[l]=!0,!1)}function Da(l,t,e){if(tp(t))if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+e)}}function Ca(l,t,e){if(e===null)l.removeAttribute(t);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+e)}}function Nt(l,t,e,n){if(n===null)l.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(e);return}l.setAttributeNS(t,e,""+n)}}function dt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function No(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ep(l,t,e){var n=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return a.call(this)},set:function(u){e=""+u,i.call(this,u)}}),Object.defineProperty(l,t,{enumerable:n.enumerable}),{getValue:function(){return e},setValue:function(u){e=""+u},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function tu(l){if(!l._valueTracker){var t=No(l)?"checked":"value";l._valueTracker=ep(l,t,""+l[t])}}function Uo(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var e=t.getValue(),n="";return l&&(n=No(l)?l.checked?"true":"false":l.value),l=n,l!==e?(t.setValue(l),!0):!1}function xa(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var np=/[\n"\\]/g;function mt(l){return l.replace(np,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function eu(l,t,e,n,a,i,u,s){l.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?l.type=u:l.removeAttribute("type"),t!=null?u==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+dt(t)):l.value!==""+dt(t)&&(l.value=""+dt(t)):u!=="submit"&&u!=="reset"||l.removeAttribute("value"),t!=null?nu(l,u,dt(t)):e!=null?nu(l,u,dt(e)):n!=null&&l.removeAttribute("value"),a==null&&i!=null&&(l.defaultChecked=!!i),a!=null&&(l.checked=a&&typeof a!="function"&&typeof a!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.name=""+dt(s):l.removeAttribute("name")}function Ho(l,t,e,n,a,i,u,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(l.type=i),t!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){tu(l);return}e=e!=null?""+dt(e):"",t=t!=null?""+dt(t):e,s||t===l.value||(l.value=t),l.defaultValue=t}n=n??a,n=typeof n!="function"&&typeof n!="symbol"&&!!n,l.checked=s?l.checked:!!n,l.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(l.name=u),tu(l)}function nu(l,t,e){t==="number"&&xa(l.ownerDocument)===l||l.defaultValue===""+e||(l.defaultValue=""+e)}function ke(l,t,e,n){if(l=l.options,t){t={};for(var a=0;a<e.length;a++)t["$"+e[a]]=!0;for(e=0;e<l.length;e++)a=t.hasOwnProperty("$"+l[e].value),l[e].selected!==a&&(l[e].selected=a),a&&n&&(l[e].defaultSelected=!0)}else{for(e=""+dt(e),t=null,a=0;a<l.length;a++){if(l[a].value===e){l[a].selected=!0,n&&(l[a].defaultSelected=!0);return}t!==null||l[a].disabled||(t=l[a])}t!==null&&(t.selected=!0)}}function Ro(l,t,e){if(t!=null&&(t=""+dt(t),t!==l.value&&(l.value=t),e==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=e!=null?""+dt(e):""}function Bo(l,t,e,n){if(t==null){if(n!=null){if(e!=null)throw Error(p(92));if(At(n)){if(1<n.length)throw Error(p(93));n=n[0]}e=n}e==null&&(e=""),t=e}e=dt(t),l.defaultValue=e,n=l.textContent,n===e&&n!==""&&n!==null&&(l.value=n),tu(l)}function We(l,t){if(t){var e=l.firstChild;if(e&&e===l.lastChild&&e.nodeType===3){e.nodeValue=t;return}}l.textContent=t}var ap=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qo(l,t,e){var n=t.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?n?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":n?l.setProperty(t,e):typeof e!="number"||e===0||ap.has(t)?t==="float"?l.cssFloat=e:l[t]=(""+e).trim():l[t]=e+"px"}function Yo(l,t,e){if(t!=null&&typeof t!="object")throw Error(p(62));if(l=l.style,e!=null){for(var n in e)!e.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?l.setProperty(n,""):n==="float"?l.cssFloat="":l[n]="");for(var a in t)n=t[a],t.hasOwnProperty(a)&&e[a]!==n&&qo(l,a,n)}else for(var i in t)t.hasOwnProperty(i)&&qo(l,i,t[i])}function au(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ip=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Na(l){return up.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var iu=null;function uu(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fe=null,Ie=null;function Xo(l){var t=Ke(l);if(t&&(l=t.stateNode)){var e=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(eu(l,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),t=e.name,e.type==="radio"&&t!=null){for(e=l;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<e.length;t++){var n=e[t];if(n!==l&&n.form===l.form){var a=n[Wl]||null;if(!a)throw Error(p(90));eu(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<e.length;t++)n=e[t],n.form===l.form&&Uo(n)}break l;case"textarea":Ro(l,e.value,e.defaultValue);break l;case"select":t=e.value,t!=null&&ke(l,!!e.multiple,t,!1)}}}var su=!1;function Go(l,t,e){if(su)return l(t,e);su=!0;try{var n=l(t);return n}finally{if(su=!1,(Fe!==null||Ie!==null)&&(Si(),Fe&&(t=Fe,l=Ie,Ie=Fe=null,Xo(t),l)))for(t=0;t<l.length;t++)Xo(l[t])}}function Hn(l,t){var e=l.stateNode;if(e===null)return null;var n=e[Wl]||null;if(n===null)return null;e=n[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(l=l.type,n=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!n;break l;default:l=!1}if(l)return null;if(e&&typeof e!="function")throw Error(p(231,t,typeof e));return e}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Ht)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{ou=!1}var le=null,ru=null,Ua=null;function Qo(){if(Ua)return Ua;var l,t=ru,e=t.length,n,a="value"in le?le.value:le.textContent,i=a.length;for(l=0;l<e&&t[l]===a[l];l++);var u=e-l;for(n=1;n<=u&&t[e-n]===a[i-n];n++);return Ua=a.slice(l,1<n?1-n:void 0)}function Ha(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Ra(){return!0}function Lo(){return!1}function Fl(l){function t(e,n,a,i,u){this._reactName=e,this._targetInst=a,this.type=n,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var s in l)l.hasOwnProperty(s)&&(e=l[s],this[s]=e?e(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ra:Lo,this.isPropagationStopped=Lo,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),t}var je={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=Fl(je),Bn=N({},je,{view:0,detail:0}),sp=Fl(Bn),cu,gu,qn,qa=N({},Bn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==qn&&(qn&&l.type==="mousemove"?(cu=l.screenX-qn.screenX,gu=l.screenY-qn.screenY):gu=cu=0,qn=l),cu)},movementY:function(l){return"movementY"in l?l.movementY:gu}}),Vo=Fl(qa),op=N({},qa,{dataTransfer:0}),rp=Fl(op),cp=N({},Bn,{relatedTarget:0}),fu=Fl(cp),gp=N({},je,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=Fl(gp),pp=N({},je,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),dp=Fl(pp),mp=N({},je,{data:0}),Zo=Fl(mp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vp[l])?!!t[l]:!1}function pu(){return bp}var Sp=N({},Bn,{key:function(l){if(l.key){var t=hp[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Ha(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yp[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(l){return l.type==="keypress"?Ha(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Ha(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),zp=Fl(Sp),_p=N({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=Fl(_p),Tp=N({},Bn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),Ap=Fl(Tp),Mp=N({},je,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ep=Fl(Mp),wp=N({},qa,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),jp=Fl(wp),Op=N({},je,{newState:0,oldState:0}),Dp=Fl(Op),Cp=[9,13,27,32],du=Ht&&"CompositionEvent"in window,Yn=null;Ht&&"documentMode"in document&&(Yn=document.documentMode);var xp=Ht&&"TextEvent"in window&&!Yn,Jo=Ht&&(!du||Yn&&8<Yn&&11>=Yn),$o=" ",ko=!1;function Wo(l,t){switch(l){case"keyup":return Cp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fo(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pe=!1;function Np(l,t){switch(l){case"compositionend":return Fo(t);case"keypress":return t.which!==32?null:(ko=!0,$o);case"textInput":return l=t.data,l===$o&&ko?null:l;default:return null}}function Up(l,t){if(Pe)return l==="compositionend"||!du&&Wo(l,t)?(l=Qo(),Ua=ru=le=null,Pe=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jo&&t.locale!=="ko"?null:t.data;default:return null}}var Hp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Io(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Hp[l.type]:t==="textarea"}function Po(l,t,e,n){Fe?Ie?Ie.push(n):Ie=[n]:Fe=n,t=wi(t,"onChange"),0<t.length&&(e=new Ba("onChange","change",null,e,n),l.push({event:e,listeners:t}))}var Xn=null,Gn=null;function Rp(l){Hg(l,0)}function Ya(l){var t=Un(l);if(Uo(t))return l}function lr(l,t){if(l==="change")return t}var tr=!1;if(Ht){var mu;if(Ht){var hu="oninput"in document;if(!hu){var er=document.createElement("div");er.setAttribute("oninput","return;"),hu=typeof er.oninput=="function"}mu=hu}else mu=!1;tr=mu&&(!document.documentMode||9<document.documentMode)}function nr(){Xn&&(Xn.detachEvent("onpropertychange",ar),Gn=Xn=null)}function ar(l){if(l.propertyName==="value"&&Ya(Gn)){var t=[];Po(t,Gn,l,uu(l)),Go(Rp,t)}}function Bp(l,t,e){l==="focusin"?(nr(),Xn=t,Gn=e,Xn.attachEvent("onpropertychange",ar)):l==="focusout"&&nr()}function qp(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Ya(Gn)}function Yp(l,t){if(l==="click")return Ya(t)}function Xp(l,t){if(l==="input"||l==="change")return Ya(t)}function Gp(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var ut=typeof Object.is=="function"?Object.is:Gp;function Qn(l,t){if(ut(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var e=Object.keys(l),n=Object.keys(t);if(e.length!==n.length)return!1;for(n=0;n<e.length;n++){var a=e[n];if(!Ji.call(t,a)||!ut(l[a],t[a]))return!1}return!0}function ir(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function ur(l,t){var e=ir(l);l=0;for(var n;e;){if(e.nodeType===3){if(n=l+e.textContent.length,l<=t&&n>=t)return{node:e,offset:t-l};l=n}l:{for(;e;){if(e.nextSibling){e=e.nextSibling;break l}e=e.parentNode}e=void 0}e=ir(e)}}function sr(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?sr(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function or(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=xa(l.document);t instanceof l.HTMLIFrameElement;){try{var e=typeof t.contentWindow.location.href=="string"}catch{e=!1}if(e)l=t.contentWindow;else break;t=xa(l.document)}return t}function yu(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Qp=Ht&&"documentMode"in document&&11>=document.documentMode,ln=null,vu=null,Ln=null,bu=!1;function rr(l,t,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;bu||ln==null||ln!==xa(n)||(n=ln,"selectionStart"in n&&yu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ln&&Qn(Ln,n)||(Ln=n,n=wi(vu,"onSelect"),0<n.length&&(t=new Ba("onSelect","select",null,t,e),l.push({event:t,listeners:n}),t.target=ln)))}function Oe(l,t){var e={};return e[l.toLowerCase()]=t.toLowerCase(),e["Webkit"+l]="webkit"+t,e["Moz"+l]="moz"+t,e}var tn={animationend:Oe("Animation","AnimationEnd"),animationiteration:Oe("Animation","AnimationIteration"),animationstart:Oe("Animation","AnimationStart"),transitionrun:Oe("Transition","TransitionRun"),transitionstart:Oe("Transition","TransitionStart"),transitioncancel:Oe("Transition","TransitionCancel"),transitionend:Oe("Transition","TransitionEnd")},Su={},cr={};Ht&&(cr=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function De(l){if(Su[l])return Su[l];if(!tn[l])return l;var t=tn[l],e;for(e in t)if(t.hasOwnProperty(e)&&e in cr)return Su[l]=t[e];return l}var gr=De("animationend"),fr=De("animationiteration"),pr=De("animationstart"),Lp=De("transitionrun"),Vp=De("transitionstart"),Zp=De("transitioncancel"),dr=De("transitionend"),mr=new Map,zu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zu.push("scrollEnd");function Mt(l,t){mr.set(l,t),we(t,[l])}var Xa=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ht=[],en=0,_u=0;function Ga(){for(var l=en,t=_u=en=0;t<l;){var e=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var a=ht[t];ht[t++]=null;var i=ht[t];if(ht[t++]=null,n!==null&&a!==null){var u=n.pending;u===null?a.next=a:(a.next=u.next,u.next=a),n.pending=a}i!==0&&hr(e,a,i)}}function Qa(l,t,e,n){ht[en++]=l,ht[en++]=t,ht[en++]=e,ht[en++]=n,_u|=n,l.lanes|=n,l=l.alternate,l!==null&&(l.lanes|=n)}function Tu(l,t,e,n){return Qa(l,t,e,n),La(l)}function Ce(l,t){return Qa(l,null,null,t),La(l)}function hr(l,t,e){l.lanes|=e;var n=l.alternate;n!==null&&(n.lanes|=e);for(var a=!1,i=l.return;i!==null;)i.childLanes|=e,n=i.alternate,n!==null&&(n.childLanes|=e),i.tag===22&&(l=i.stateNode,l===null||l._visibility&1||(a=!0)),l=i,i=i.return;return l.tag===3?(i=l.stateNode,a&&t!==null&&(a=31-it(e),l=i.hiddenUpdates,n=l[a],n===null?l[a]=[t]:n.push(t),t.lane=e|536870912),i):null}function La(l){if(50<ga)throw ga=0,xs=null,Error(p(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var nn={};function Kp(l,t,e,n){this.tag=l,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(l,t,e,n){return new Kp(l,t,e,n)}function Au(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var e=l.alternate;return e===null?(e=st(l.tag,t,l.key,l.mode),e.elementType=l.elementType,e.type=l.type,e.stateNode=l.stateNode,e.alternate=l,l.alternate=e):(e.pendingProps=t,e.type=l.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=l.flags&65011712,e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,t=l.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},e.sibling=l.sibling,e.index=l.index,e.ref=l.ref,e.refCleanup=l.refCleanup,e}function yr(l,t){l.flags&=65011714;var e=l.alternate;return e===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,l.type=e.type,t=e.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Va(l,t,e,n,a,i){var u=0;if(n=l,typeof l=="function")Au(l)&&(u=1);else if(typeof l=="string")u=Fd(l,e,R.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case $l:return l=st(31,e,t,a),l.elementType=$l,l.lanes=i,l;case _l:return xe(e.children,a,i,t);case Ul:u=8,a|=24;break;case bl:return l=st(12,e,t,a|2),l.elementType=bl,l.lanes=i,l;case Vl:return l=st(13,e,t,a),l.elementType=Vl,l.lanes=i,l;case Sl:return l=st(19,e,t,a),l.elementType=Sl,l.lanes=i,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case sl:u=10;break l;case El:u=9;break l;case Tl:u=11;break l;case J:u=14;break l;case Rl:u=16,n=null;break l}u=29,e=Error(p(130,l===null?"null":typeof l,"")),n=null}return t=st(u,e,t,a),t.elementType=l,t.type=n,t.lanes=i,t}function xe(l,t,e,n){return l=st(7,l,n,t),l.lanes=e,l}function Mu(l,t,e){return l=st(6,l,null,t),l.lanes=e,l}function vr(l){var t=st(18,null,null,0);return t.stateNode=l,t}function Eu(l,t,e){return t=st(4,l.children!==null?l.children:[],l.key,t),t.lanes=e,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var br=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var e=br.get(l);return e!==void 0?e:(t={value:l,source:t,stack:vo(t)},br.set(l,t),t)}return{value:l,source:t,stack:vo(t)}}var an=[],un=0,Za=null,Vn=0,vt=[],bt=0,te=null,jt=1,Ot="";function Bt(l,t){an[un++]=Vn,an[un++]=Za,Za=l,Vn=t}function Sr(l,t,e){vt[bt++]=jt,vt[bt++]=Ot,vt[bt++]=te,te=l;var n=jt;l=Ot;var a=32-it(n)-1;n&=~(1<<a),e+=1;var i=32-it(t)+a;if(30<i){var u=a-a%5;i=(n&(1<<u)-1).toString(32),n>>=u,a-=u,jt=1<<32-it(t)+a|e<<a|n,Ot=i+l}else jt=1<<i|e<<a|n,Ot=l}function wu(l){l.return!==null&&(Bt(l,1),Sr(l,1,0))}function ju(l){for(;l===Za;)Za=an[--un],an[un]=null,Vn=an[--un],an[un]=null;for(;l===te;)te=vt[--bt],vt[bt]=null,Ot=vt[--bt],vt[bt]=null,jt=vt[--bt],vt[bt]=null}function zr(l,t){vt[bt++]=jt,vt[bt++]=Ot,vt[bt++]=te,jt=t.id,Ot=t.overflow,te=l}var Xl=null,dl=null,ll=!1,ee=null,St=!1,Ou=Error(p(519));function ne(l){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zn(yt(t,l)),Ou}function _r(l){var t=l.stateNode,e=l.type,n=l.memoizedProps;switch(t[Yl]=l,t[Wl]=n,e){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(e=0;e<pa.length;e++)W(pa[e],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Ho(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Bo(t,n.value,n.defaultValue,n.children)}e=n.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||t.textContent===""+e||n.suppressHydrationWarning===!0||Yg(t.textContent,e)?(n.popover!=null&&(W("beforetoggle",t),W("toggle",t)),n.onScroll!=null&&W("scroll",t),n.onScrollEnd!=null&&W("scrollend",t),n.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ne(l,!0)}function Tr(l){for(Xl=l.return;Xl;)switch(Xl.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Xl=Xl.return}}function sn(l){if(l!==Xl)return!1;if(!ll)return Tr(l),ll=!0,!1;var t=l.tag,e;if((e=t!==3&&t!==27)&&((e=t===5)&&(e=l.type,e=!(e!=="form"&&e!=="button")||Js(l.type,l.memoizedProps)),e=!e),e&&dl&&ne(l),Tr(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));dl=$g(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));dl=$g(l)}else t===27?(t=dl,ye(l.type)?(l=Is,Is=null,dl=l):dl=t):dl=Xl?_t(l.stateNode.nextSibling):null;return!0}function Ne(){dl=Xl=null,ll=!1}function Du(){var l=ee;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),ee=null),l}function Zn(l){ee===null?ee=[l]:ee.push(l)}var Cu=g(null),Ue=null,qt=null;function ae(l,t,e){D(Cu,t._currentValue),t._currentValue=e}function Yt(l){l._currentValue=Cu.current,M(Cu)}function xu(l,t,e){for(;l!==null;){var n=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),l===e)break;l=l.return}}function Nu(l,t,e,n){var a=l.child;for(a!==null&&(a.return=l);a!==null;){var i=a.dependencies;if(i!==null){var u=a.child;i=i.firstContext;l:for(;i!==null;){var s=i;i=a;for(var o=0;o<t.length;o++)if(s.context===t[o]){i.lanes|=e,s=i.alternate,s!==null&&(s.lanes|=e),xu(i.return,e,l),n||(u=null);break l}i=s.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(p(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),xu(u,e,l),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===l){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function on(l,t,e,n){l=null;for(var a=t,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(p(387));if(u=u.memoizedProps,u!==null){var s=a.type;ut(a.pendingProps.value,u.value)||(l!==null?l.push(s):l=[s])}}else if(a===al.current){if(u=a.alternate,u===null)throw Error(p(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(l!==null?l.push(va):l=[va])}a=a.return}l!==null&&Nu(t,l,e,n),t.flags|=262144}function Ka(l){for(l=l.firstContext;l!==null;){if(!ut(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function He(l){Ue=l,qt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Gl(l){return Ar(Ue,l)}function Ja(l,t){return Ue===null&&He(l),Ar(l,t)}function Ar(l,t){var e=t._currentValue;if(t={context:t,memoizedValue:e,next:null},qt===null){if(l===null)throw Error(p(308));qt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else qt=qt.next=t;return e}var Jp=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(e,n){l.push(n)}};this.abort=function(){t.aborted=!0,l.forEach(function(e){return e()})}},$p=v.unstable_scheduleCallback,kp=v.unstable_NormalPriority,Dl={$$typeof:sl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uu(){return{controller:new Jp,data:new Map,refCount:0}}function Kn(l){l.refCount--,l.refCount===0&&$p(kp,function(){l.controller.abort()})}var Jn=null,Hu=0,rn=0,cn=null;function Wp(l,t){if(Jn===null){var e=Jn=[];Hu=0,rn=qs(),cn={status:"pending",value:void 0,then:function(n){e.push(n)}}}return Hu++,t.then(Mr,Mr),t}function Mr(){if(--Hu===0&&Jn!==null){cn!==null&&(cn.status="fulfilled");var l=Jn;Jn=null,rn=0,cn=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fp(l,t){var e=[],n={status:"pending",value:null,reason:null,then:function(a){e.push(a)}};return l.then(function(){n.status="fulfilled",n.value=t;for(var a=0;a<e.length;a++)(0,e[a])(t)},function(a){for(n.status="rejected",n.reason=a,a=0;a<e.length;a++)(0,e[a])(void 0)}),n}var Er=z.S;z.S=function(l,t){rg=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wp(l,t),Er!==null&&Er(l,t)};var Re=g(null);function Ru(){var l=Re.current;return l!==null?l:pl.pooledCache}function $a(l,t){t===null?D(Re,Re.current):D(Re,t.pool)}function wr(){var l=Ru();return l===null?null:{parent:Dl._currentValue,pool:l}}var gn=Error(p(460)),Bu=Error(p(474)),ka=Error(p(542)),Wa={then:function(){}};function jr(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Or(l,t,e){switch(e=l[e],e===void 0?l.push(t):e!==t&&(t.then(Ut,Ut),t=e),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Cr(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=pl,l!==null&&100<l.shellSuspendCounter)throw Error(p(482));l=t,l.status="pending",l.then(function(n){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=n}},function(n){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Cr(l),l}throw qe=t,gn}}function Be(l){try{var t=l._init;return t(l._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(qe=e,gn):e}}var qe=null;function Dr(){if(qe===null)throw Error(p(459));var l=qe;return qe=null,l}function Cr(l){if(l===gn||l===ka)throw Error(p(483))}var fn=null,$n=0;function Fa(l){var t=$n;return $n+=1,fn===null&&(fn=[]),Or(fn,l,t)}function kn(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Ia(l,t){throw t.$$typeof===K?Error(p(525)):(l=Object.prototype.toString.call(t),Error(p(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function xr(l){function t(f,r){if(l){var m=f.deletions;m===null?(f.deletions=[r],f.flags|=16):m.push(r)}}function e(f,r){if(!l)return null;for(;r!==null;)t(f,r),r=r.sibling;return null}function n(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function a(f,r){return f=Rt(f,r),f.index=0,f.sibling=null,f}function i(f,r,m){return f.index=m,l?(m=f.alternate,m!==null?(m=m.index,m<r?(f.flags|=67108866,r):m):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function u(f){return l&&f.alternate===null&&(f.flags|=67108866),f}function s(f,r,m,_){return r===null||r.tag!==6?(r=Mu(m,f.mode,_),r.return=f,r):(r=a(r,m),r.return=f,r)}function o(f,r,m,_){var Y=m.type;return Y===_l?S(f,r,m.props.children,_,m.key):r!==null&&(r.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Rl&&Be(Y)===r.type)?(r=a(r,m.props),kn(r,m),r.return=f,r):(r=Va(m.type,m.key,m.props,null,f.mode,_),kn(r,m),r.return=f,r)}function h(f,r,m,_){return r===null||r.tag!==4||r.stateNode.containerInfo!==m.containerInfo||r.stateNode.implementation!==m.implementation?(r=Eu(m,f.mode,_),r.return=f,r):(r=a(r,m.children||[]),r.return=f,r)}function S(f,r,m,_,Y){return r===null||r.tag!==7?(r=xe(m,f.mode,_,Y),r.return=f,r):(r=a(r,m),r.return=f,r)}function A(f,r,m){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=Mu(""+r,f.mode,m),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case yl:return m=Va(r.type,r.key,r.props,null,f.mode,m),kn(m,r),m.return=f,m;case vl:return r=Eu(r,f.mode,m),r.return=f,r;case Rl:return r=Be(r),A(f,r,m)}if(At(r)||kl(r))return r=xe(r,f.mode,m,null),r.return=f,r;if(typeof r.then=="function")return A(f,Fa(r),m);if(r.$$typeof===sl)return A(f,Ja(f,r),m);Ia(f,r)}return null}function y(f,r,m,_){var Y=r!==null?r.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return Y!==null?null:s(f,r,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:return m.key===Y?o(f,r,m,_):null;case vl:return m.key===Y?h(f,r,m,_):null;case Rl:return m=Be(m),y(f,r,m,_)}if(At(m)||kl(m))return Y!==null?null:S(f,r,m,_,null);if(typeof m.then=="function")return y(f,r,Fa(m),_);if(m.$$typeof===sl)return y(f,r,Ja(f,m),_);Ia(f,m)}return null}function b(f,r,m,_,Y){if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return f=f.get(m)||null,s(r,f,""+_,Y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case yl:return f=f.get(_.key===null?m:_.key)||null,o(r,f,_,Y);case vl:return f=f.get(_.key===null?m:_.key)||null,h(r,f,_,Y);case Rl:return _=Be(_),b(f,r,m,_,Y)}if(At(_)||kl(_))return f=f.get(m)||null,S(r,f,_,Y,null);if(typeof _.then=="function")return b(f,r,m,Fa(_),Y);if(_.$$typeof===sl)return b(f,r,m,Ja(r,_),Y);Ia(r,_)}return null}function H(f,r,m,_){for(var Y=null,tl=null,B=r,Z=r=0,I=null;B!==null&&Z<m.length;Z++){B.index>Z?(I=B,B=null):I=B.sibling;var el=y(f,B,m[Z],_);if(el===null){B===null&&(B=I);break}l&&B&&el.alternate===null&&t(f,B),r=i(el,r,Z),tl===null?Y=el:tl.sibling=el,tl=el,B=I}if(Z===m.length)return e(f,B),ll&&Bt(f,Z),Y;if(B===null){for(;Z<m.length;Z++)B=A(f,m[Z],_),B!==null&&(r=i(B,r,Z),tl===null?Y=B:tl.sibling=B,tl=B);return ll&&Bt(f,Z),Y}for(B=n(B);Z<m.length;Z++)I=b(B,f,Z,m[Z],_),I!==null&&(l&&I.alternate!==null&&B.delete(I.key===null?Z:I.key),r=i(I,r,Z),tl===null?Y=I:tl.sibling=I,tl=I);return l&&B.forEach(function(_e){return t(f,_e)}),ll&&Bt(f,Z),Y}function X(f,r,m,_){if(m==null)throw Error(p(151));for(var Y=null,tl=null,B=r,Z=r=0,I=null,el=m.next();B!==null&&!el.done;Z++,el=m.next()){B.index>Z?(I=B,B=null):I=B.sibling;var _e=y(f,B,el.value,_);if(_e===null){B===null&&(B=I);break}l&&B&&_e.alternate===null&&t(f,B),r=i(_e,r,Z),tl===null?Y=_e:tl.sibling=_e,tl=_e,B=I}if(el.done)return e(f,B),ll&&Bt(f,Z),Y;if(B===null){for(;!el.done;Z++,el=m.next())el=A(f,el.value,_),el!==null&&(r=i(el,r,Z),tl===null?Y=el:tl.sibling=el,tl=el);return ll&&Bt(f,Z),Y}for(B=n(B);!el.done;Z++,el=m.next())el=b(B,f,Z,el.value,_),el!==null&&(l&&el.alternate!==null&&B.delete(el.key===null?Z:el.key),r=i(el,r,Z),tl===null?Y=el:tl.sibling=el,tl=el);return l&&B.forEach(function(om){return t(f,om)}),ll&&Bt(f,Z),Y}function gl(f,r,m,_){if(typeof m=="object"&&m!==null&&m.type===_l&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:l:{for(var Y=m.key;r!==null;){if(r.key===Y){if(Y=m.type,Y===_l){if(r.tag===7){e(f,r.sibling),_=a(r,m.props.children),_.return=f,f=_;break l}}else if(r.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===Rl&&Be(Y)===r.type){e(f,r.sibling),_=a(r,m.props),kn(_,m),_.return=f,f=_;break l}e(f,r);break}else t(f,r);r=r.sibling}m.type===_l?(_=xe(m.props.children,f.mode,_,m.key),_.return=f,f=_):(_=Va(m.type,m.key,m.props,null,f.mode,_),kn(_,m),_.return=f,f=_)}return u(f);case vl:l:{for(Y=m.key;r!==null;){if(r.key===Y)if(r.tag===4&&r.stateNode.containerInfo===m.containerInfo&&r.stateNode.implementation===m.implementation){e(f,r.sibling),_=a(r,m.children||[]),_.return=f,f=_;break l}else{e(f,r);break}else t(f,r);r=r.sibling}_=Eu(m,f.mode,_),_.return=f,f=_}return u(f);case Rl:return m=Be(m),gl(f,r,m,_)}if(At(m))return H(f,r,m,_);if(kl(m)){if(Y=kl(m),typeof Y!="function")throw Error(p(150));return m=Y.call(m),X(f,r,m,_)}if(typeof m.then=="function")return gl(f,r,Fa(m),_);if(m.$$typeof===sl)return gl(f,r,Ja(f,m),_);Ia(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,r!==null&&r.tag===6?(e(f,r.sibling),_=a(r,m),_.return=f,f=_):(e(f,r),_=Mu(m,f.mode,_),_.return=f,f=_),u(f)):e(f,r)}return function(f,r,m,_){try{$n=0;var Y=gl(f,r,m,_);return fn=null,Y}catch(B){if(B===gn||B===ka)throw B;var tl=st(29,B,null,f.mode);return tl.lanes=_,tl.return=f,tl}}}var Ye=xr(!0),Nr=xr(!1),ie=!1;function qu(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yu(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function ue(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function se(l,t,e){var n=l.updateQueue;if(n===null)return null;if(n=n.shared,(nl&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,t=La(l),hr(l,null,e),t}return Qa(l,n,t,e),La(l)}function Wn(l,t,e){if(t=t.updateQueue,t!==null&&(t=t.shared,(e&4194048)!==0)){var n=t.lanes;n&=l.pendingLanes,e|=n,t.lanes=e,Ao(l,e)}}function Xu(l,t){var e=l.updateQueue,n=l.alternate;if(n!==null&&(n=n.updateQueue,e===n)){var a=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?a=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?a=i=t:i=i.next=t}else a=i=t;e={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},l.updateQueue=e;return}l=e.lastBaseUpdate,l===null?e.firstBaseUpdate=t:l.next=t,e.lastBaseUpdate=t}var Gu=!1;function Fn(){if(Gu){var l=cn;if(l!==null)throw l}}function In(l,t,e,n){Gu=!1;var a=l.updateQueue;ie=!1;var i=a.firstBaseUpdate,u=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var o=s,h=o.next;o.next=null,u===null?i=h:u.next=h,u=o;var S=l.alternate;S!==null&&(S=S.updateQueue,s=S.lastBaseUpdate,s!==u&&(s===null?S.firstBaseUpdate=h:s.next=h,S.lastBaseUpdate=o))}if(i!==null){var A=a.baseState;u=0,S=h=o=null,s=i;do{var y=s.lane&-536870913,b=y!==s.lane;if(b?(F&y)===y:(n&y)===y){y!==0&&y===rn&&(Gu=!0),S!==null&&(S=S.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});l:{var H=l,X=s;y=t;var gl=e;switch(X.tag){case 1:if(H=X.payload,typeof H=="function"){A=H.call(gl,A,y);break l}A=H;break l;case 3:H.flags=H.flags&-65537|128;case 0:if(H=X.payload,y=typeof H=="function"?H.call(gl,A,y):H,y==null)break l;A=N({},A,y);break l;case 2:ie=!0}}y=s.callback,y!==null&&(l.flags|=64,b&&(l.flags|=8192),b=a.callbacks,b===null?a.callbacks=[y]:b.push(y))}else b={lane:y,tag:s.tag,payload:s.payload,callback:s.callback,next:null},S===null?(h=S=b,o=A):S=S.next=b,u|=y;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;b=s,s=b.next,b.next=null,a.lastBaseUpdate=b,a.shared.pending=null}}while(!0);S===null&&(o=A),a.baseState=o,a.firstBaseUpdate=h,a.lastBaseUpdate=S,i===null&&(a.shared.lanes=0),fe|=u,l.lanes=u,l.memoizedState=A}}function Ur(l,t){if(typeof l!="function")throw Error(p(191,l));l.call(t)}function Hr(l,t){var e=l.callbacks;if(e!==null)for(l.callbacks=null,l=0;l<e.length;l++)Ur(e[l],t)}var pn=g(null),Pa=g(0);function Rr(l,t){l=$t,D(Pa,l),D(pn,t),$t=l|t.baseLanes}function Qu(){D(Pa,$t),D(pn,pn.current)}function Lu(){$t=Pa.current,M(pn),M(Pa)}var ot=g(null),zt=null;function oe(l){var t=l.alternate;D(jl,jl.current&1),D(ot,l),zt===null&&(t===null||pn.current!==null||t.memoizedState!==null)&&(zt=l)}function Vu(l){D(jl,jl.current),D(ot,l),zt===null&&(zt=l)}function Br(l){l.tag===22?(D(jl,jl.current),D(ot,l),zt===null&&(zt=l)):re()}function re(){D(jl,jl.current),D(ot,ot.current)}function rt(l){M(ot),zt===l&&(zt=null),M(jl)}var jl=g(0);function li(l){for(var t=l;t!==null;){if(t.tag===13){var e=t.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||Ws(e)||Fs(e)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,V=null,rl=null,Cl=null,ti=!1,dn=!1,Xe=!1,ei=0,Pn=0,mn=null,Ip=0;function Al(){throw Error(p(321))}function Zu(l,t){if(t===null)return!1;for(var e=0;e<t.length&&e<l.length;e++)if(!ut(l[e],t[e]))return!1;return!0}function Ku(l,t,e,n,a,i){return Xt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=l===null||l.memoizedState===null?Sc:ss,Xe=!1,i=e(n,a),Xe=!1,dn&&(i=Yr(t,e,n,a)),qr(l),i}function qr(l){z.H=ea;var t=rl!==null&&rl.next!==null;if(Xt=0,Cl=rl=V=null,ti=!1,Pn=0,mn=null,t)throw Error(p(300));l===null||xl||(l=l.dependencies,l!==null&&Ka(l)&&(xl=!0))}function Yr(l,t,e,n){V=l;var a=0;do{if(dn&&(mn=null),Pn=0,dn=!1,25<=a)throw Error(p(301));if(a+=1,Cl=rl=null,l.updateQueue!=null){var i=l.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}z.H=zc,i=t(e,n)}while(dn);return i}function Pp(){var l=z.H,t=l.useState()[0];return t=typeof t.then=="function"?la(t):t,l=l.useState()[0],(rl!==null?rl.memoizedState:null)!==l&&(V.flags|=1024),t}function Ju(){var l=ei!==0;return ei=0,l}function $u(l,t,e){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~e}function ku(l){if(ti){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ti=!1}Xt=0,Cl=rl=V=null,dn=!1,Pn=ei=0,mn=null}function Jl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cl===null?V.memoizedState=Cl=l:Cl=Cl.next=l,Cl}function Ol(){if(rl===null){var l=V.alternate;l=l!==null?l.memoizedState:null}else l=rl.next;var t=Cl===null?V.memoizedState:Cl.next;if(t!==null)Cl=t,rl=l;else{if(l===null)throw V.alternate===null?Error(p(467)):Error(p(310));rl=l,l={memoizedState:rl.memoizedState,baseState:rl.baseState,baseQueue:rl.baseQueue,queue:rl.queue,next:null},Cl===null?V.memoizedState=Cl=l:Cl=Cl.next=l}return Cl}function ni(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function la(l){var t=Pn;return Pn+=1,mn===null&&(mn=[]),l=Or(mn,l,t),t=V,(Cl===null?t.memoizedState:Cl.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?Sc:ss),l}function ai(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return la(l);if(l.$$typeof===sl)return Gl(l)}throw Error(p(438,String(l)))}function Wu(l){var t=null,e=V.updateQueue;if(e!==null&&(t=e.memoCache),t==null){var n=V.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),e===null&&(e=ni(),V.updateQueue=e),e.memoCache=t,e=t.data[t.index],e===void 0)for(e=t.data[t.index]=Array(l),n=0;n<l;n++)e[n]=Ft;return t.index++,e}function Gt(l,t){return typeof t=="function"?t(l):t}function ii(l){var t=Ol();return Fu(t,rl,l)}function Fu(l,t,e){var n=l.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=e;var a=l.baseQueue,i=n.pending;if(i!==null){if(a!==null){var u=a.next;a.next=i.next,i.next=u}t.baseQueue=a=i,n.pending=null}if(i=l.baseState,a===null)l.memoizedState=i;else{t=a.next;var s=u=null,o=null,h=t,S=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(F&A)===A:(Xt&A)===A){var y=h.revertLane;if(y===0)o!==null&&(o=o.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===rn&&(S=!0);else if((Xt&y)===y){h=h.next,y===rn&&(S=!0);continue}else A={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(s=o=A,u=i):o=o.next=A,V.lanes|=y,fe|=y;A=h.action,Xe&&e(i,A),i=h.hasEagerState?h.eagerState:e(i,A)}else y={lane:A,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(s=o=y,u=i):o=o.next=y,V.lanes|=A,fe|=A;h=h.next}while(h!==null&&h!==t);if(o===null?u=i:o.next=s,!ut(i,l.memoizedState)&&(xl=!0,S&&(e=cn,e!==null)))throw e;l.memoizedState=i,l.baseState=u,l.baseQueue=o,n.lastRenderedState=i}return a===null&&(n.lanes=0),[l.memoizedState,n.dispatch]}function Iu(l){var t=Ol(),e=t.queue;if(e===null)throw Error(p(311));e.lastRenderedReducer=l;var n=e.dispatch,a=e.pending,i=t.memoizedState;if(a!==null){e.pending=null;var u=a=a.next;do i=l(i,u.action),u=u.next;while(u!==a);ut(i,t.memoizedState)||(xl=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),e.lastRenderedState=i}return[i,n]}function Xr(l,t,e){var n=V,a=Ol(),i=ll;if(i){if(e===void 0)throw Error(p(407));e=e()}else e=t();var u=!ut((rl||a).memoizedState,e);if(u&&(a.memoizedState=e,xl=!0),a=a.queue,ts(Lr.bind(null,n,a,l),[l]),a.getSnapshot!==t||u||Cl!==null&&Cl.memoizedState.tag&1){if(n.flags|=2048,hn(9,{destroy:void 0},Qr.bind(null,n,a,e,t),null),pl===null)throw Error(p(349));i||(Xt&127)!==0||Gr(n,t,e)}return e}function Gr(l,t,e){l.flags|=16384,l={getSnapshot:t,value:e},t=V.updateQueue,t===null?(t=ni(),V.updateQueue=t,t.stores=[l]):(e=t.stores,e===null?t.stores=[l]:e.push(l))}function Qr(l,t,e,n){t.value=e,t.getSnapshot=n,Vr(t)&&Zr(l)}function Lr(l,t,e){return e(function(){Vr(t)&&Zr(l)})}function Vr(l){var t=l.getSnapshot;l=l.value;try{var e=t();return!ut(l,e)}catch{return!0}}function Zr(l){var t=Ce(l,2);t!==null&&et(t,l,2)}function Pu(l){var t=Jl();if(typeof l=="function"){var e=l;if(l=e(),Xe){It(!0);try{e()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Kr(l,t,e,n){return l.baseState=e,Fu(l,rl,typeof n=="function"?n:Gt)}function ld(l,t,e,n,a){if(oi(l))throw Error(p(485));if(l=t.action,l!==null){var i={payload:a,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};z.T!==null?e(!0):i.isTransition=!1,n(i),e=t.pending,e===null?(i.next=t.pending=i,Jr(t,i)):(i.next=e.next,t.pending=e.next=i)}}function Jr(l,t){var e=t.action,n=t.payload,a=l.state;if(t.isTransition){var i=z.T,u={};z.T=u;try{var s=e(a,n),o=z.S;o!==null&&o(u,s),$r(l,t,s)}catch(h){ls(l,t,h)}finally{i!==null&&u.types!==null&&(i.types=u.types),z.T=i}}else try{i=e(a,n),$r(l,t,i)}catch(h){ls(l,t,h)}}function $r(l,t,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(n){kr(l,t,n)},function(n){return ls(l,t,n)}):kr(l,t,e)}function kr(l,t,e){t.status="fulfilled",t.value=e,Wr(t),l.state=e,t=l.pending,t!==null&&(e=t.next,e===t?l.pending=null:(e=e.next,t.next=e,Jr(l,e)))}function ls(l,t,e){var n=l.pending;if(l.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=e,Wr(t),t=t.next;while(t!==n)}l.action=null}function Wr(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fr(l,t){return t}function Ir(l,t){if(ll){var e=pl.formState;if(e!==null){l:{var n=V;if(ll){if(dl){t:{for(var a=dl,i=St;a.nodeType!==8;){if(!i){a=null;break t}if(a=_t(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){dl=_t(a.nextSibling),n=a.data==="F!";break l}}ne(n)}n=!1}n&&(t=e[0])}}return e=Jl(),e.memoizedState=e.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fr,lastRenderedState:t},e.queue=n,e=yc.bind(null,V,n),n.dispatch=e,n=Pu(!1),i=us.bind(null,V,!1,n.queue),n=Jl(),a={state:t,dispatch:null,action:l,pending:null},n.queue=a,e=ld.bind(null,V,a,i,e),a.dispatch=e,n.memoizedState=l,[t,e,!1]}function Pr(l){var t=Ol();return lc(t,rl,l)}function lc(l,t,e){if(t=Fu(l,t,Fr)[0],l=ii(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=la(t)}catch(u){throw u===gn?ka:u}else n=t;t=Ol();var a=t.queue,i=a.dispatch;return e!==t.memoizedState&&(V.flags|=2048,hn(9,{destroy:void 0},td.bind(null,a,e),null)),[n,i,l]}function td(l,t){l.action=t}function tc(l){var t=Ol(),e=rl;if(e!==null)return lc(t,e,l);Ol(),t=t.memoizedState,e=Ol();var n=e.queue.dispatch;return e.memoizedState=l,[t,n,!1]}function hn(l,t,e,n){return l={tag:l,create:e,deps:n,inst:t,next:null},t=V.updateQueue,t===null&&(t=ni(),V.updateQueue=t),e=t.lastEffect,e===null?t.lastEffect=l.next=l:(n=e.next,e.next=l,l.next=n,t.lastEffect=l),l}function ec(){return Ol().memoizedState}function ui(l,t,e,n){var a=Jl();V.flags|=l,a.memoizedState=hn(1|t,{destroy:void 0},e,n===void 0?null:n)}function si(l,t,e,n){var a=Ol();n=n===void 0?null:n;var i=a.memoizedState.inst;rl!==null&&n!==null&&Zu(n,rl.memoizedState.deps)?a.memoizedState=hn(t,i,e,n):(V.flags|=l,a.memoizedState=hn(1|t,i,e,n))}function nc(l,t){ui(8390656,8,l,t)}function ts(l,t){si(2048,8,l,t)}function ed(l){V.flags|=4;var t=V.updateQueue;if(t===null)t=ni(),V.updateQueue=t,t.events=[l];else{var e=t.events;e===null?t.events=[l]:e.push(l)}}function ac(l){var t=Ol().memoizedState;return ed({ref:t,nextImpl:l}),function(){if((nl&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function ic(l,t){return si(4,2,l,t)}function uc(l,t){return si(4,4,l,t)}function sc(l,t){if(typeof t=="function"){l=l();var e=t(l);return function(){typeof e=="function"?e():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function oc(l,t,e){e=e!=null?e.concat([l]):null,si(4,4,sc.bind(null,t,l),e)}function es(){}function rc(l,t){var e=Ol();t=t===void 0?null:t;var n=e.memoizedState;return t!==null&&Zu(t,n[1])?n[0]:(e.memoizedState=[l,t],l)}function cc(l,t){var e=Ol();t=t===void 0?null:t;var n=e.memoizedState;if(t!==null&&Zu(t,n[1]))return n[0];if(n=l(),Xe){It(!0);try{l()}finally{It(!1)}}return e.memoizedState=[n,t],n}function ns(l,t,e){return e===void 0||(Xt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=e,l=gg(),V.lanes|=l,fe|=l,e)}function gc(l,t,e,n){return ut(e,t)?e:pn.current!==null?(l=ns(l,e,n),ut(l,t)||(xl=!0),l):(Xt&42)===0||(Xt&1073741824)!==0&&(F&261930)===0?(xl=!0,l.memoizedState=e):(l=gg(),V.lanes|=l,fe|=l,t)}function fc(l,t,e,n,a){var i=j.p;j.p=i!==0&&8>i?i:8;var u=z.T,s={};z.T=s,us(l,!1,t,e);try{var o=a(),h=z.S;if(h!==null&&h(s,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var S=Fp(o,n);ta(l,t,S,ft(l))}else ta(l,t,n,ft(l))}catch(A){ta(l,t,{then:function(){},status:"rejected",reason:A},ft())}finally{j.p=i,u!==null&&s.types!==null&&(u.types=s.types),z.T=u}}function nd(){}function as(l,t,e,n){if(l.tag!==5)throw Error(p(476));var a=pc(l).queue;fc(l,a,t,G,e===null?nd:function(){return dc(l),e(n)})}function pc(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:G},next:null};var e={};return t.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function dc(l){var t=pc(l);t.next===null&&(t=l.alternate.memoizedState),ta(l,t.next.queue,{},ft())}function is(){return Gl(va)}function mc(){return Ol().memoizedState}function hc(){return Ol().memoizedState}function ad(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var e=ft();l=ue(e);var n=se(t,l,e);n!==null&&(et(n,t,e),Wn(n,t,e)),t={cache:Uu()},l.payload=t;return}t=t.return}}function id(l,t,e){var n=ft();e={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},oi(l)?vc(t,e):(e=Tu(l,t,e,n),e!==null&&(et(e,l,n),bc(e,t,n)))}function yc(l,t,e){var n=ft();ta(l,t,e,n)}function ta(l,t,e,n){var a={lane:n,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(oi(l))vc(t,a);else{var i=l.alternate;if(l.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var u=t.lastRenderedState,s=i(u,e);if(a.hasEagerState=!0,a.eagerState=s,ut(s,u))return Qa(l,t,a,0),pl===null&&Ga(),!1}catch{}if(e=Tu(l,t,a,n),e!==null)return et(e,l,n),bc(e,t,n),!0}return!1}function us(l,t,e,n){if(n={lane:2,revertLane:qs(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},oi(l)){if(t)throw Error(p(479))}else t=Tu(l,e,n,2),t!==null&&et(t,l,2)}function oi(l){var t=l.alternate;return l===V||t!==null&&t===V}function vc(l,t){dn=ti=!0;var e=l.pending;e===null?t.next=t:(t.next=e.next,e.next=t),l.pending=t}function bc(l,t,e){if((e&4194048)!==0){var n=t.lanes;n&=l.pendingLanes,e|=n,t.lanes=e,Ao(l,e)}}var ea={readContext:Gl,use:ai,useCallback:Al,useContext:Al,useEffect:Al,useImperativeHandle:Al,useLayoutEffect:Al,useInsertionEffect:Al,useMemo:Al,useReducer:Al,useRef:Al,useState:Al,useDebugValue:Al,useDeferredValue:Al,useTransition:Al,useSyncExternalStore:Al,useId:Al,useHostTransitionStatus:Al,useFormState:Al,useActionState:Al,useOptimistic:Al,useMemoCache:Al,useCacheRefresh:Al};ea.useEffectEvent=Al;var Sc={readContext:Gl,use:ai,useCallback:function(l,t){return Jl().memoizedState=[l,t===void 0?null:t],l},useContext:Gl,useEffect:nc,useImperativeHandle:function(l,t,e){e=e!=null?e.concat([l]):null,ui(4194308,4,sc.bind(null,t,l),e)},useLayoutEffect:function(l,t){return ui(4194308,4,l,t)},useInsertionEffect:function(l,t){ui(4,2,l,t)},useMemo:function(l,t){var e=Jl();t=t===void 0?null:t;var n=l();if(Xe){It(!0);try{l()}finally{It(!1)}}return e.memoizedState=[n,t],n},useReducer:function(l,t,e){var n=Jl();if(e!==void 0){var a=e(t);if(Xe){It(!0);try{e(t)}finally{It(!1)}}}else a=t;return n.memoizedState=n.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:a},n.queue=l,l=l.dispatch=id.bind(null,V,l),[n.memoizedState,l]},useRef:function(l){var t=Jl();return l={current:l},t.memoizedState=l},useState:function(l){l=Pu(l);var t=l.queue,e=yc.bind(null,V,t);return t.dispatch=e,[l.memoizedState,e]},useDebugValue:es,useDeferredValue:function(l,t){var e=Jl();return ns(e,l,t)},useTransition:function(){var l=Pu(!1);return l=fc.bind(null,V,l.queue,!0,!1),Jl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,e){var n=V,a=Jl();if(ll){if(e===void 0)throw Error(p(407));e=e()}else{if(e=t(),pl===null)throw Error(p(349));(F&127)!==0||Gr(n,t,e)}a.memoizedState=e;var i={value:e,getSnapshot:t};return a.queue=i,nc(Lr.bind(null,n,i,l),[l]),n.flags|=2048,hn(9,{destroy:void 0},Qr.bind(null,n,i,e,t),null),e},useId:function(){var l=Jl(),t=pl.identifierPrefix;if(ll){var e=Ot,n=jt;e=(n&~(1<<32-it(n)-1)).toString(32)+e,t="_"+t+"R_"+e,e=ei++,0<e&&(t+="H"+e.toString(32)),t+="_"}else e=Ip++,t="_"+t+"r_"+e.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:is,useFormState:Ir,useActionState:Ir,useOptimistic:function(l){var t=Jl();t.memoizedState=t.baseState=l;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=e,t=us.bind(null,V,!0,e),e.dispatch=t,[l,t]},useMemoCache:Wu,useCacheRefresh:function(){return Jl().memoizedState=ad.bind(null,V)},useEffectEvent:function(l){var t=Jl(),e={impl:l};return t.memoizedState=e,function(){if((nl&2)!==0)throw Error(p(440));return e.impl.apply(void 0,arguments)}}},ss={readContext:Gl,use:ai,useCallback:rc,useContext:Gl,useEffect:ts,useImperativeHandle:oc,useInsertionEffect:ic,useLayoutEffect:uc,useMemo:cc,useReducer:ii,useRef:ec,useState:function(){return ii(Gt)},useDebugValue:es,useDeferredValue:function(l,t){var e=Ol();return gc(e,rl.memoizedState,l,t)},useTransition:function(){var l=ii(Gt)[0],t=Ol().memoizedState;return[typeof l=="boolean"?l:la(l),t]},useSyncExternalStore:Xr,useId:mc,useHostTransitionStatus:is,useFormState:Pr,useActionState:Pr,useOptimistic:function(l,t){var e=Ol();return Kr(e,rl,l,t)},useMemoCache:Wu,useCacheRefresh:hc};ss.useEffectEvent=ac;var zc={readContext:Gl,use:ai,useCallback:rc,useContext:Gl,useEffect:ts,useImperativeHandle:oc,useInsertionEffect:ic,useLayoutEffect:uc,useMemo:cc,useReducer:Iu,useRef:ec,useState:function(){return Iu(Gt)},useDebugValue:es,useDeferredValue:function(l,t){var e=Ol();return rl===null?ns(e,l,t):gc(e,rl.memoizedState,l,t)},useTransition:function(){var l=Iu(Gt)[0],t=Ol().memoizedState;return[typeof l=="boolean"?l:la(l),t]},useSyncExternalStore:Xr,useId:mc,useHostTransitionStatus:is,useFormState:tc,useActionState:tc,useOptimistic:function(l,t){var e=Ol();return rl!==null?Kr(e,rl,l,t):(e.baseState=l,[l,e.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:hc};zc.useEffectEvent=ac;function os(l,t,e,n){t=l.memoizedState,e=e(n,t),e=e==null?t:N({},t,e),l.memoizedState=e,l.lanes===0&&(l.updateQueue.baseState=e)}var rs={enqueueSetState:function(l,t,e){l=l._reactInternals;var n=ft(),a=ue(n);a.payload=t,e!=null&&(a.callback=e),t=se(l,a,n),t!==null&&(et(t,l,n),Wn(t,l,n))},enqueueReplaceState:function(l,t,e){l=l._reactInternals;var n=ft(),a=ue(n);a.tag=1,a.payload=t,e!=null&&(a.callback=e),t=se(l,a,n),t!==null&&(et(t,l,n),Wn(t,l,n))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var e=ft(),n=ue(e);n.tag=2,t!=null&&(n.callback=t),t=se(l,n,e),t!==null&&(et(t,l,e),Wn(t,l,e))}};function _c(l,t,e,n,a,i,u){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(n,i,u):t.prototype&&t.prototype.isPureReactComponent?!Qn(e,n)||!Qn(a,i):!0}function Tc(l,t,e,n){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(e,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(e,n),t.state!==l&&rs.enqueueReplaceState(t,t.state,null)}function Ge(l,t){var e=t;if("ref"in t){e={};for(var n in t)n!=="ref"&&(e[n]=t[n])}if(l=l.defaultProps){e===t&&(e=N({},e));for(var a in l)e[a]===void 0&&(e[a]=l[a])}return e}function Ac(l){Xa(l)}function Mc(l){console.error(l)}function Ec(l){Xa(l)}function ri(l,t){try{var e=l.onUncaughtError;e(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function wc(l,t,e){try{var n=l.onCaughtError;n(e.value,{componentStack:e.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function cs(l,t,e){return e=ue(e),e.tag=3,e.payload={element:null},e.callback=function(){ri(l,t)},e}function jc(l){return l=ue(l),l.tag=3,l}function Oc(l,t,e,n){var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;l.payload=function(){return a(i)},l.callback=function(){wc(t,e,n)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(l.callback=function(){wc(t,e,n),typeof a!="function"&&(pe===null?pe=new Set([this]):pe.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function ud(l,t,e,n,a){if(e.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=e.alternate,t!==null&&on(t,e,a,!0),e=ot.current,e!==null){switch(e.tag){case 31:case 13:return zt===null?zi():e.alternate===null&&Ml===0&&(Ml=3),e.flags&=-257,e.flags|=65536,e.lanes=a,n===Wa?e.flags|=16384:(t=e.updateQueue,t===null?e.updateQueue=new Set([n]):t.add(n),Hs(l,n,a)),!1;case 22:return e.flags|=65536,n===Wa?e.flags|=16384:(t=e.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},e.updateQueue=t):(e=t.retryQueue,e===null?t.retryQueue=new Set([n]):e.add(n)),Hs(l,n,a)),!1}throw Error(p(435,e.tag))}return Hs(l,n,a),zi(),!1}if(ll)return t=ot.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=a,n!==Ou&&(l=Error(p(422),{cause:n}),Zn(yt(l,e)))):(n!==Ou&&(t=Error(p(423),{cause:n}),Zn(yt(t,e))),l=l.current.alternate,l.flags|=65536,a&=-a,l.lanes|=a,n=yt(n,e),a=cs(l.stateNode,n,a),Xu(l,a),Ml!==4&&(Ml=2)),!1;var i=Error(p(520),{cause:n});if(i=yt(i,e),ca===null?ca=[i]:ca.push(i),Ml!==4&&(Ml=2),t===null)return!0;n=yt(n,e),e=t;do{switch(e.tag){case 3:return e.flags|=65536,l=a&-a,e.lanes|=l,l=cs(e.stateNode,n,l),Xu(e,l),!1;case 1:if(t=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pe===null||!pe.has(i))))return e.flags|=65536,a&=-a,e.lanes|=a,a=jc(a),Oc(a,l,e,n),Xu(e,a),!1}e=e.return}while(e!==null);return!1}var gs=Error(p(461)),xl=!1;function Ql(l,t,e,n){t.child=l===null?Nr(t,null,e,n):Ye(t,l.child,e,n)}function Dc(l,t,e,n,a){e=e.render;var i=t.ref;if("ref"in n){var u={};for(var s in n)s!=="ref"&&(u[s]=n[s])}else u=n;return He(t),n=Ku(l,t,e,u,i,a),s=Ju(),l!==null&&!xl?($u(l,t,a),Qt(l,t,a)):(ll&&s&&wu(t),t.flags|=1,Ql(l,t,n,a),t.child)}function Cc(l,t,e,n,a){if(l===null){var i=e.type;return typeof i=="function"&&!Au(i)&&i.defaultProps===void 0&&e.compare===null?(t.tag=15,t.type=i,xc(l,t,i,n,a)):(l=Va(e.type,null,n,t,t.mode,a),l.ref=t.ref,l.return=t,t.child=l)}if(i=l.child,!bs(l,a)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:Qn,e(u,n)&&l.ref===t.ref)return Qt(l,t,a)}return t.flags|=1,l=Rt(i,n),l.ref=t.ref,l.return=t,t.child=l}function xc(l,t,e,n,a){if(l!==null){var i=l.memoizedProps;if(Qn(i,n)&&l.ref===t.ref)if(xl=!1,t.pendingProps=n=i,bs(l,a))(l.flags&131072)!==0&&(xl=!0);else return t.lanes=l.lanes,Qt(l,t,a)}return fs(l,t,e,n,a)}function Nc(l,t,e,n){var a=n.children,i=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,l!==null){for(n=t.child=l.child,a=0;n!==null;)a=a|n.lanes|n.childLanes,n=n.sibling;n=a&~i}else n=0,t.child=null;return Uc(l,t,i,e,n)}if((e&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&$a(t,i!==null?i.cachePool:null),i!==null?Rr(t,i):Qu(),Br(t);else return n=t.lanes=536870912,Uc(l,t,i!==null?i.baseLanes|e:e,e,n)}else i!==null?($a(t,i.cachePool),Rr(t,i),re(),t.memoizedState=null):(l!==null&&$a(t,null),Qu(),re());return Ql(l,t,a,e),t.child}function na(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(l,t,e,n,a){var i=Ru();return i=i===null?null:{parent:Dl._currentValue,pool:i},t.memoizedState={baseLanes:e,cachePool:i},l!==null&&$a(t,null),Qu(),Br(t),l!==null&&on(l,t,n,!0),t.childLanes=a,null}function ci(l,t){return t=fi({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Hc(l,t,e){return Ye(t,l.child,null,e),l=ci(t,t.pendingProps),l.flags|=2,rt(t),t.memoizedState=null,l}function sd(l,t,e){var n=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(n.mode==="hidden")return l=ci(t,n),t.lanes=536870912,na(null,l);if(Vu(t),(l=dl)?(l=Jg(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:te!==null?{id:jt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},e=vr(l),e.return=t,t.child=e,Xl=t,dl=null)):l=null,l===null)throw ne(t);return t.lanes=536870912,null}return ci(t,n)}var i=l.memoizedState;if(i!==null){var u=i.dehydrated;if(Vu(t),a)if(t.flags&256)t.flags&=-257,t=Hc(l,t,e);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(p(558));else if(xl||on(l,t,e,!1),a=(e&l.childLanes)!==0,xl||a){if(n=pl,n!==null&&(u=Mo(n,e),u!==0&&u!==i.retryLane))throw i.retryLane=u,Ce(l,u),et(n,l,u),gs;zi(),t=Hc(l,t,e)}else l=i.treeContext,dl=_t(u.nextSibling),Xl=t,ll=!0,ee=null,St=!1,l!==null&&zr(t,l),t=ci(t,n),t.flags|=4096;return t}return l=Rt(l.child,{mode:n.mode,children:n.children}),l.ref=t.ref,t.child=l,l.return=t,l}function gi(l,t){var e=t.ref;if(e===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(p(284));(l===null||l.ref!==e)&&(t.flags|=4194816)}}function fs(l,t,e,n,a){return He(t),e=Ku(l,t,e,n,void 0,a),n=Ju(),l!==null&&!xl?($u(l,t,a),Qt(l,t,a)):(ll&&n&&wu(t),t.flags|=1,Ql(l,t,e,a),t.child)}function Rc(l,t,e,n,a,i){return He(t),t.updateQueue=null,e=Yr(t,n,e,a),qr(l),n=Ju(),l!==null&&!xl?($u(l,t,i),Qt(l,t,i)):(ll&&n&&wu(t),t.flags|=1,Ql(l,t,e,i),t.child)}function Bc(l,t,e,n,a){if(He(t),t.stateNode===null){var i=nn,u=e.contextType;typeof u=="object"&&u!==null&&(i=Gl(u)),i=new e(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=rs,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},qu(t),u=e.contextType,i.context=typeof u=="object"&&u!==null?Gl(u):nn,i.state=t.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(os(t,e,u,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&rs.enqueueReplaceState(i,i.state,null),In(t,n,i,a),Fn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(l===null){i=t.stateNode;var s=t.memoizedProps,o=Ge(e,s);i.props=o;var h=i.context,S=e.contextType;u=nn,typeof S=="object"&&S!==null&&(u=Gl(S));var A=e.getDerivedStateFromProps;S=typeof A=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,S||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||h!==u)&&Tc(t,i,n,u),ie=!1;var y=t.memoizedState;i.state=y,In(t,n,i,a),Fn(),h=t.memoizedState,s||y!==h||ie?(typeof A=="function"&&(os(t,e,A,n),h=t.memoizedState),(o=ie||_c(t,e,o,n,y,h,u))?(S||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=h),i.props=n,i.state=h,i.context=u,n=o):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,Yu(l,t),u=t.memoizedProps,S=Ge(e,u),i.props=S,A=t.pendingProps,y=i.context,h=e.contextType,o=nn,typeof h=="object"&&h!==null&&(o=Gl(h)),s=e.getDerivedStateFromProps,(h=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==A||y!==o)&&Tc(t,i,n,o),ie=!1,y=t.memoizedState,i.state=y,In(t,n,i,a),Fn();var b=t.memoizedState;u!==A||y!==b||ie||l!==null&&l.dependencies!==null&&Ka(l.dependencies)?(typeof s=="function"&&(os(t,e,s,n),b=t.memoizedState),(S=ie||_c(t,e,S,n,y,b,o)||l!==null&&l.dependencies!==null&&Ka(l.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,b,o),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,b,o)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),i.props=n,i.state=b,i.context=o,n=S):(typeof i.componentDidUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),n=!1)}return i=n,gi(l,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,e=n&&typeof e.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,l!==null&&n?(t.child=Ye(t,l.child,null,a),t.child=Ye(t,null,e,a)):Ql(l,t,e,a),t.memoizedState=i.state,l=t.child):l=Qt(l,t,a),l}function qc(l,t,e,n){return Ne(),t.flags|=256,Ql(l,t,e,n),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ds(l){return{baseLanes:l,cachePool:wr()}}function ms(l,t,e){return l=l!==null?l.childLanes&~e:0,t&&(l|=gt),l}function Yc(l,t,e){var n=t.pendingProps,a=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=l!==null&&l.memoizedState===null?!1:(jl.current&2)!==0),u&&(a=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(a?oe(t):re(),(l=dl)?(l=Jg(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:te!==null?{id:jt,overflow:Ot}:null,retryLane:536870912,hydrationErrors:null},e=vr(l),e.return=t,t.child=e,Xl=t,dl=null)):l=null,l===null)throw ne(t);return Fs(l)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,a?(re(),a=t.mode,s=fi({mode:"hidden",children:s},a),n=xe(n,a,e,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=ds(e),n.childLanes=ms(l,u,e),t.memoizedState=ps,na(null,n)):(oe(t),hs(t,s))}var o=l.memoizedState;if(o!==null&&(s=o.dehydrated,s!==null)){if(i)t.flags&256?(oe(t),t.flags&=-257,t=ys(l,t,e)):t.memoizedState!==null?(re(),t.child=l.child,t.flags|=128,t=null):(re(),s=n.fallback,a=t.mode,n=fi({mode:"visible",children:n.children},a),s=xe(s,a,e,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,Ye(t,l.child,null,e),n=t.child,n.memoizedState=ds(e),n.childLanes=ms(l,u,e),t.memoizedState=ps,t=na(null,n));else if(oe(t),Fs(s)){if(u=s.nextSibling&&s.nextSibling.dataset,u)var h=u.dgst;u=h,n=Error(p(419)),n.stack="",n.digest=u,Zn({value:n,source:null,stack:null}),t=ys(l,t,e)}else if(xl||on(l,t,e,!1),u=(e&l.childLanes)!==0,xl||u){if(u=pl,u!==null&&(n=Mo(u,e),n!==0&&n!==o.retryLane))throw o.retryLane=n,Ce(l,n),et(u,l,n),gs;Ws(s)||zi(),t=ys(l,t,e)}else Ws(s)?(t.flags|=192,t.child=l.child,t=null):(l=o.treeContext,dl=_t(s.nextSibling),Xl=t,ll=!0,ee=null,St=!1,l!==null&&zr(t,l),t=hs(t,n.children),t.flags|=4096);return t}return a?(re(),s=n.fallback,a=t.mode,o=l.child,h=o.sibling,n=Rt(o,{mode:"hidden",children:n.children}),n.subtreeFlags=o.subtreeFlags&65011712,h!==null?s=Rt(h,s):(s=xe(s,a,e,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,na(null,n),n=t.child,s=l.child.memoizedState,s===null?s=ds(e):(a=s.cachePool,a!==null?(o=Dl._currentValue,a=a.parent!==o?{parent:o,pool:o}:a):a=wr(),s={baseLanes:s.baseLanes|e,cachePool:a}),n.memoizedState=s,n.childLanes=ms(l,u,e),t.memoizedState=ps,na(l.child,n)):(oe(t),e=l.child,l=e.sibling,e=Rt(e,{mode:"visible",children:n.children}),e.return=t,e.sibling=null,l!==null&&(u=t.deletions,u===null?(t.deletions=[l],t.flags|=16):u.push(l)),t.child=e,t.memoizedState=null,e)}function hs(l,t){return t=fi({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function fi(l,t){return l=st(22,l,null,t),l.lanes=0,l}function ys(l,t,e){return Ye(t,l.child,null,e),l=hs(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Xc(l,t,e){l.lanes|=t;var n=l.alternate;n!==null&&(n.lanes|=t),xu(l.return,t,e)}function vs(l,t,e,n,a,i){var u=l.memoizedState;u===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:e,tailMode:a,treeForkCount:i}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=e,u.tailMode=a,u.treeForkCount=i)}function Gc(l,t,e){var n=t.pendingProps,a=n.revealOrder,i=n.tail;n=n.children;var u=jl.current,s=(u&2)!==0;if(s?(u=u&1|2,t.flags|=128):u&=1,D(jl,u),Ql(l,t,n,e),n=ll?Vn:0,!s&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Xc(l,e,t);else if(l.tag===19)Xc(l,e,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(a){case"forwards":for(e=t.child,a=null;e!==null;)l=e.alternate,l!==null&&li(l)===null&&(a=e),e=e.sibling;e=a,e===null?(a=t.child,t.child=null):(a=e.sibling,e.sibling=null),vs(t,!1,a,e,i,n);break;case"backwards":case"unstable_legacy-backwards":for(e=null,a=t.child,t.child=null;a!==null;){if(l=a.alternate,l!==null&&li(l)===null){t.child=a;break}l=a.sibling,a.sibling=e,e=a,a=l}vs(t,!0,e,null,i,n);break;case"together":vs(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Qt(l,t,e){if(l!==null&&(t.dependencies=l.dependencies),fe|=t.lanes,(e&t.childLanes)===0)if(l!==null){if(on(l,t,e,!1),(e&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(p(153));if(t.child!==null){for(l=t.child,e=Rt(l,l.pendingProps),t.child=e,e.return=t;l.sibling!==null;)l=l.sibling,e=e.sibling=Rt(l,l.pendingProps),e.return=t;e.sibling=null}return t.child}function bs(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Ka(l)))}function od(l,t,e){switch(t.tag){case 3:Kl(t,t.stateNode.containerInfo),ae(t,Dl,l.memoizedState.cache),Ne();break;case 27:case 5:On(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:ae(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vu(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(oe(t),t.flags|=128,null):(e&t.child.childLanes)!==0?Yc(l,t,e):(oe(t),l=Qt(l,t,e),l!==null?l.sibling:null);oe(t);break;case 19:var a=(l.flags&128)!==0;if(n=(e&t.childLanes)!==0,n||(on(l,t,e,!1),n=(e&t.childLanes)!==0),a){if(n)return Gc(l,t,e);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),D(jl,jl.current),n)break;return null;case 22:return t.lanes=0,Nc(l,t,e,t.pendingProps);case 24:ae(t,Dl,l.memoizedState.cache)}return Qt(l,t,e)}function Qc(l,t,e){if(l!==null)if(l.memoizedProps!==t.pendingProps)xl=!0;else{if(!bs(l,e)&&(t.flags&128)===0)return xl=!1,od(l,t,e);xl=(l.flags&131072)!==0}else xl=!1,ll&&(t.flags&1048576)!==0&&Sr(t,Vn,t.index);switch(t.lanes=0,t.tag){case 16:l:{var n=t.pendingProps;if(l=Be(t.elementType),t.type=l,typeof l=="function")Au(l)?(n=Ge(l,n),t.tag=1,t=Bc(null,t,l,n,e)):(t.tag=0,t=fs(null,t,l,n,e));else{if(l!=null){var a=l.$$typeof;if(a===Tl){t.tag=11,t=Dc(null,t,l,n,e);break l}else if(a===J){t.tag=14,t=Cc(null,t,l,n,e);break l}}throw t=xt(l)||l,Error(p(306,t,""))}}return t;case 0:return fs(l,t,t.type,t.pendingProps,e);case 1:return n=t.type,a=Ge(n,t.pendingProps),Bc(l,t,n,a,e);case 3:l:{if(Kl(t,t.stateNode.containerInfo),l===null)throw Error(p(387));n=t.pendingProps;var i=t.memoizedState;a=i.element,Yu(l,t),In(t,n,null,e);var u=t.memoizedState;if(n=u.cache,ae(t,Dl,n),n!==i.cache&&Nu(t,[Dl],e,!0),Fn(),n=u.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qc(l,t,n,e);break l}else if(n!==a){a=yt(Error(p(424)),t),Zn(a),t=qc(l,t,n,e);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(dl=_t(l.firstChild),Xl=t,ll=!0,ee=null,St=!0,e=Nr(t,null,n,e),t.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Ne(),n===a){t=Qt(l,t,e);break l}Ql(l,t,n,e)}t=t.child}return t;case 26:return gi(l,t),l===null?(e=Pg(t.type,null,t.pendingProps,null))?t.memoizedState=e:ll||(e=t.type,l=t.pendingProps,n=ji($.current).createElement(e),n[Yl]=t,n[Wl]=l,Ll(n,e,l),Bl(n),t.stateNode=n):t.memoizedState=Pg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return On(t),l===null&&ll&&(n=t.stateNode=Wg(t.type,t.pendingProps,$.current),Xl=t,St=!0,a=dl,ye(t.type)?(Is=a,dl=_t(n.firstChild)):dl=a),Ql(l,t,t.pendingProps.children,e),gi(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((a=n=dl)&&(n=qd(n,t.type,t.pendingProps,St),n!==null?(t.stateNode=n,Xl=t,dl=_t(n.firstChild),St=!1,a=!0):a=!1),a||ne(t)),On(t),a=t.type,i=t.pendingProps,u=l!==null?l.memoizedProps:null,n=i.children,Js(a,i)?n=null:u!==null&&Js(a,u)&&(t.flags|=32),t.memoizedState!==null&&(a=Ku(l,t,Pp,null,null,e),va._currentValue=a),gi(l,t),Ql(l,t,n,e),t.child;case 6:return l===null&&ll&&((l=e=dl)&&(e=Yd(e,t.pendingProps,St),e!==null?(t.stateNode=e,Xl=t,dl=null,l=!0):l=!1),l||ne(t)),null;case 13:return Yc(l,t,e);case 4:return Kl(t,t.stateNode.containerInfo),n=t.pendingProps,l===null?t.child=Ye(t,null,n,e):Ql(l,t,n,e),t.child;case 11:return Dc(l,t,t.type,t.pendingProps,e);case 7:return Ql(l,t,t.pendingProps,e),t.child;case 8:return Ql(l,t,t.pendingProps.children,e),t.child;case 12:return Ql(l,t,t.pendingProps.children,e),t.child;case 10:return n=t.pendingProps,ae(t,t.type,n.value),Ql(l,t,n.children,e),t.child;case 9:return a=t.type._context,n=t.pendingProps.children,He(t),a=Gl(a),n=n(a),t.flags|=1,Ql(l,t,n,e),t.child;case 14:return Cc(l,t,t.type,t.pendingProps,e);case 15:return xc(l,t,t.type,t.pendingProps,e);case 19:return Gc(l,t,e);case 31:return sd(l,t,e);case 22:return Nc(l,t,e,t.pendingProps);case 24:return He(t),n=Gl(Dl),l===null?(a=Ru(),a===null&&(a=pl,i=Uu(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=e),a=i),t.memoizedState={parent:n,cache:a},qu(t),ae(t,Dl,a)):((l.lanes&e)!==0&&(Yu(l,t),In(t,null,null,e),Fn()),a=l.memoizedState,i=t.memoizedState,a.parent!==n?(a={parent:n,cache:n},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ae(t,Dl,n)):(n=i.cache,ae(t,Dl,n),n!==a.cache&&Nu(t,[Dl],e,!0))),Ql(l,t,t.pendingProps.children,e),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Lt(l){l.flags|=4}function Ss(l,t,e,n,a){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(a&335544128)===a)if(l.stateNode.complete)l.flags|=8192;else if(mg())l.flags|=8192;else throw qe=Wa,Bu}else l.flags&=-16777217}function Lc(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!af(t))if(mg())l.flags|=8192;else throw qe=Wa,Bu}function pi(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?_o():536870912,l.lanes|=t,Sn|=t)}function aa(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var e=null;t!==null;)t.alternate!==null&&(e=t),t=t.sibling;e===null?l.tail=null:e.sibling=null;break;case"collapsed":e=l.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:n.sibling=null}}function ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,e=0,n=0;if(t)for(var a=l.child;a!==null;)e|=a.lanes|a.childLanes,n|=a.subtreeFlags&65011712,n|=a.flags&65011712,a.return=l,a=a.sibling;else for(a=l.child;a!==null;)e|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=l,a=a.sibling;return l.subtreeFlags|=n,l.childLanes=e,t}function rd(l,t,e){var n=t.pendingProps;switch(ju(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return e=t.stateNode,n=null,l!==null&&(n=l.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(Dl),wl(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(l===null||l.child===null)&&(sn(t)?Lt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Du())),ml(t),null;case 26:var a=t.type,i=t.memoizedState;return l===null?(Lt(t),i!==null?(ml(t),Lc(t,i)):(ml(t),Ss(t,a,null,n,e))):i?i!==l.memoizedState?(Lt(t),ml(t),Lc(t,i)):(ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==n&&Lt(t),ml(t),Ss(t,a,l,n,e)),null;case 27:if(Aa(t),e=$.current,a=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==n&&Lt(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return ml(t),null}l=R.current,sn(t)?_r(t):(l=Wg(a,n,e),t.stateNode=l,Lt(t))}return ml(t),null;case 5:if(Aa(t),a=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==n&&Lt(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return ml(t),null}if(i=R.current,sn(t))_r(t);else{var u=ji($.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?u.createElement(a,{is:n.is}):u.createElement(a)}}i[Yl]=t,i[Wl]=n;l:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break l;for(;u.sibling===null;){if(u.return===null||u.return===t)break l;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=i;l:switch(Ll(i,a,n),a){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break l;case"img":n=!0;break l;default:n=!1}n&&Lt(t)}}return ml(t),Ss(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,e),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==n&&Lt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(p(166));if(l=$.current,sn(t)){if(l=t.stateNode,e=t.memoizedProps,n=null,a=Xl,a!==null)switch(a.tag){case 27:case 5:n=a.memoizedProps}l[Yl]=t,l=!!(l.nodeValue===e||n!==null&&n.suppressHydrationWarning===!0||Yg(l.nodeValue,e)),l||ne(t,!0)}else l=ji(l).createTextNode(n),l[Yl]=t,t.stateNode=l}return ml(t),null;case 31:if(e=t.memoizedState,l===null||l.memoizedState!==null){if(n=sn(t),e!==null){if(l===null){if(!n)throw Error(p(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(557));l[Yl]=t}else Ne(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),l=!1}else e=Du(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),l=!0;if(!l)return t.flags&256?(rt(t),t):(rt(t),null);if((t.flags&128)!==0)throw Error(p(558))}return ml(t),null;case 13:if(n=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(a=sn(t),n!==null&&n.dehydrated!==null){if(l===null){if(!a)throw Error(p(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(p(317));a[Yl]=t}else Ne(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),a=!1}else a=Du(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(rt(t),t):(rt(t),null)}return rt(t),(t.flags&128)!==0?(t.lanes=e,t):(e=n!==null,l=l!==null&&l.memoizedState!==null,e&&(n=t.child,a=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(a=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048)),e!==l&&e&&(t.child.flags|=8192),pi(t,t.updateQueue),ml(t),null);case 4:return wl(),l===null&&Qs(t.stateNode.containerInfo),ml(t),null;case 10:return Yt(t.type),ml(t),null;case 19:if(M(jl),n=t.memoizedState,n===null)return ml(t),null;if(a=(t.flags&128)!==0,i=n.rendering,i===null)if(a)aa(n,!1);else{if(Ml!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(i=li(l),i!==null){for(t.flags|=128,aa(n,!1),l=i.updateQueue,t.updateQueue=l,pi(t,l),t.subtreeFlags=0,l=e,e=t.child;e!==null;)yr(e,l),e=e.sibling;return D(jl,jl.current&1|2),ll&&Bt(t,n.treeForkCount),t.child}l=l.sibling}n.tail!==null&&nt()>vi&&(t.flags|=128,a=!0,aa(n,!1),t.lanes=4194304)}else{if(!a)if(l=li(i),l!==null){if(t.flags|=128,a=!0,l=l.updateQueue,t.updateQueue=l,pi(t,l),aa(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ll)return ml(t),null}else 2*nt()-n.renderingStartTime>vi&&e!==536870912&&(t.flags|=128,a=!0,aa(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(l=n.last,l!==null?l.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(l=n.tail,n.rendering=l,n.tail=l.sibling,n.renderingStartTime=nt(),l.sibling=null,e=jl.current,D(jl,a?e&1|2:e&1),ll&&Bt(t,n.treeForkCount),l):(ml(t),null);case 22:case 23:return rt(t),Lu(),n=t.memoizedState!==null,l!==null?l.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(e&536870912)!==0&&(t.flags&128)===0&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),e=t.updateQueue,e!==null&&pi(t,e.retryQueue),e=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==e&&(t.flags|=2048),l!==null&&M(Re),null;case 24:return e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),Yt(Dl),ml(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function cd(l,t){switch(ju(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Yt(Dl),wl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Aa(t),null;case 31:if(t.memoizedState!==null){if(rt(t),t.alternate===null)throw Error(p(340));Ne()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(rt(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(p(340));Ne()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return M(jl),null;case 4:return wl(),null;case 10:return Yt(t.type),null;case 22:case 23:return rt(t),Lu(),l!==null&&M(Re),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Yt(Dl),null;case 25:return null;default:return null}}function Vc(l,t){switch(ju(t),t.tag){case 3:Yt(Dl),wl();break;case 26:case 27:case 5:Aa(t);break;case 4:wl();break;case 31:t.memoizedState!==null&&rt(t);break;case 13:rt(t);break;case 19:M(jl);break;case 10:Yt(t.type);break;case 22:case 23:rt(t),Lu(),l!==null&&M(Re);break;case 24:Yt(Dl)}}function ia(l,t){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var a=n.next;e=a;do{if((e.tag&l)===l){n=void 0;var i=e.create,u=e.inst;n=i(),u.destroy=n}e=e.next}while(e!==a)}}catch(s){ul(t,t.return,s)}}function ce(l,t,e){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&l)===l){var u=n.inst,s=u.destroy;if(s!==void 0){u.destroy=void 0,a=t;var o=e,h=s;try{h()}catch(S){ul(a,o,S)}}}n=n.next}while(n!==i)}}catch(S){ul(t,t.return,S)}}function Zc(l){var t=l.updateQueue;if(t!==null){var e=l.stateNode;try{Hr(t,e)}catch(n){ul(l,l.return,n)}}}function Kc(l,t,e){e.props=Ge(l.type,l.memoizedProps),e.state=l.memoizedState;try{e.componentWillUnmount()}catch(n){ul(l,t,n)}}function ua(l,t){try{var e=l.ref;if(e!==null){switch(l.tag){case 26:case 27:case 5:var n=l.stateNode;break;case 30:n=l.stateNode;break;default:n=l.stateNode}typeof e=="function"?l.refCleanup=e(n):e.current=n}}catch(a){ul(l,t,a)}}function Dt(l,t){var e=l.ref,n=l.refCleanup;if(e!==null)if(typeof n=="function")try{n()}catch(a){ul(l,t,a)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(a){ul(l,t,a)}else e.current=null}function Jc(l){var t=l.type,e=l.memoizedProps,n=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":e.autoFocus&&n.focus();break l;case"img":e.src?n.src=e.src:e.srcSet&&(n.srcset=e.srcSet)}}catch(a){ul(l,l.return,a)}}function zs(l,t,e){try{var n=l.stateNode;xd(n,l.type,e,t),n[Wl]=t}catch(a){ul(l,l.return,a)}}function $c(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&ye(l.type)||l.tag===4}function _s(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||$c(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&ye(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function Ts(l,t,e){var n=l.tag;if(n===5||n===6)l=l.stateNode,t?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(l,t):(t=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.appendChild(l),e=e._reactRootContainer,e!=null||t.onclick!==null||(t.onclick=Ut));else if(n!==4&&(n===27&&ye(l.type)&&(e=l.stateNode,t=null),l=l.child,l!==null))for(Ts(l,t,e),l=l.sibling;l!==null;)Ts(l,t,e),l=l.sibling}function di(l,t,e){var n=l.tag;if(n===5||n===6)l=l.stateNode,t?e.insertBefore(l,t):e.appendChild(l);else if(n!==4&&(n===27&&ye(l.type)&&(e=l.stateNode),l=l.child,l!==null))for(di(l,t,e),l=l.sibling;l!==null;)di(l,t,e),l=l.sibling}function kc(l){var t=l.stateNode,e=l.memoizedProps;try{for(var n=l.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Ll(t,n,e),t[Yl]=l,t[Wl]=e}catch(i){ul(l,l.return,i)}}var Vt=!1,Nl=!1,As=!1,Wc=typeof WeakSet=="function"?WeakSet:Set,ql=null;function gd(l,t){if(l=l.containerInfo,Zs=Hi,l=or(l),yu(l)){if("selectionStart"in l)var e={start:l.selectionStart,end:l.selectionEnd};else l:{e=(e=l.ownerDocument)&&e.defaultView||window;var n=e.getSelection&&e.getSelection();if(n&&n.rangeCount!==0){e=n.anchorNode;var a=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break l}var u=0,s=-1,o=-1,h=0,S=0,A=l,y=null;t:for(;;){for(var b;A!==e||a!==0&&A.nodeType!==3||(s=u+a),A!==i||n!==0&&A.nodeType!==3||(o=u+n),A.nodeType===3&&(u+=A.nodeValue.length),(b=A.firstChild)!==null;)y=A,A=b;for(;;){if(A===l)break t;if(y===e&&++h===a&&(s=u),y===i&&++S===n&&(o=u),(b=A.nextSibling)!==null)break;A=y,y=A.parentNode}A=b}e=s===-1||o===-1?null:{start:s,end:o}}else e=null}e=e||{start:0,end:0}}else e=null;for(Ks={focusedElem:l,selectionRange:e},Hi=!1,ql=t;ql!==null;)if(t=ql,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,ql=l;else for(;ql!==null;){switch(t=ql,i=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(e=0;e<l.length;e++)a=l[e],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&i!==null){l=void 0,e=t,a=i.memoizedProps,i=i.memoizedState,n=e.stateNode;try{var H=Ge(e.type,a);l=n.getSnapshotBeforeUpdate(H,i),n.__reactInternalSnapshotBeforeUpdate=l}catch(X){ul(e,e.return,X)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,e=l.nodeType,e===9)ks(l);else if(e===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":ks(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(p(163))}if(l=t.sibling,l!==null){l.return=t.return,ql=l;break}ql=t.return}}function Fc(l,t,e){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Kt(l,e),n&4&&ia(5,e);break;case 1:if(Kt(l,e),n&4)if(l=e.stateNode,t===null)try{l.componentDidMount()}catch(u){ul(e,e.return,u)}else{var a=Ge(e.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(a,t,l.__reactInternalSnapshotBeforeUpdate)}catch(u){ul(e,e.return,u)}}n&64&&Zc(e),n&512&&ua(e,e.return);break;case 3:if(Kt(l,e),n&64&&(l=e.updateQueue,l!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{Hr(l,t)}catch(u){ul(e,e.return,u)}}break;case 27:t===null&&n&4&&kc(e);case 26:case 5:Kt(l,e),t===null&&n&4&&Jc(e),n&512&&ua(e,e.return);break;case 12:Kt(l,e);break;case 31:Kt(l,e),n&4&&lg(l,e);break;case 13:Kt(l,e),n&4&&tg(l,e),n&64&&(l=e.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(e=Sd.bind(null,e),Xd(l,e))));break;case 22:if(n=e.memoizedState!==null||Vt,!n){t=t!==null&&t.memoizedState!==null||Nl,a=Vt;var i=Nl;Vt=n,(Nl=t)&&!i?Jt(l,e,(e.subtreeFlags&8772)!==0):Kt(l,e),Vt=a,Nl=i}break;case 30:break;default:Kt(l,e)}}function Ic(l){var t=l.alternate;t!==null&&(l.alternate=null,Ic(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&lu(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var hl=null,Il=!1;function Zt(l,t,e){for(e=e.child;e!==null;)Pc(l,t,e),e=e.sibling}function Pc(l,t,e){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Dn,e)}catch{}switch(e.tag){case 26:Nl||Dt(e,t),Zt(l,t,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Nl||Dt(e,t);var n=hl,a=Il;ye(e.type)&&(hl=e.stateNode,Il=!1),Zt(l,t,e),ma(e.stateNode),hl=n,Il=a;break;case 5:Nl||Dt(e,t);case 6:if(n=hl,a=Il,hl=null,Zt(l,t,e),hl=n,Il=a,hl!==null)if(Il)try{(hl.nodeType===9?hl.body:hl.nodeName==="HTML"?hl.ownerDocument.body:hl).removeChild(e.stateNode)}catch(i){ul(e,t,i)}else try{hl.removeChild(e.stateNode)}catch(i){ul(e,t,i)}break;case 18:hl!==null&&(Il?(l=hl,Zg(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.stateNode),jn(l)):Zg(hl,e.stateNode));break;case 4:n=hl,a=Il,hl=e.stateNode.containerInfo,Il=!0,Zt(l,t,e),hl=n,Il=a;break;case 0:case 11:case 14:case 15:ce(2,e,t),Nl||ce(4,e,t),Zt(l,t,e);break;case 1:Nl||(Dt(e,t),n=e.stateNode,typeof n.componentWillUnmount=="function"&&Kc(e,t,n)),Zt(l,t,e);break;case 21:Zt(l,t,e);break;case 22:Nl=(n=Nl)||e.memoizedState!==null,Zt(l,t,e),Nl=n;break;default:Zt(l,t,e)}}function lg(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{jn(l)}catch(e){ul(t,t.return,e)}}}function tg(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{jn(l)}catch(e){ul(t,t.return,e)}}function fd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wc),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wc),t;default:throw Error(p(435,l.tag))}}function mi(l,t){var e=fd(l);t.forEach(function(n){if(!e.has(n)){e.add(n);var a=zd.bind(null,l,n);n.then(a,a)}})}function Pl(l,t){var e=t.deletions;if(e!==null)for(var n=0;n<e.length;n++){var a=e[n],i=l,u=t,s=u;l:for(;s!==null;){switch(s.tag){case 27:if(ye(s.type)){hl=s.stateNode,Il=!1;break l}break;case 5:hl=s.stateNode,Il=!1;break l;case 3:case 4:hl=s.stateNode.containerInfo,Il=!0;break l}s=s.return}if(hl===null)throw Error(p(160));Pc(i,u,a),hl=null,Il=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)eg(t,l),t=t.sibling}var Et=null;function eg(l,t){var e=l.alternate,n=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),n&4&&(ce(3,l,l.return),ia(3,l),ce(5,l,l.return));break;case 1:Pl(t,l),lt(l),n&512&&(Nl||e===null||Dt(e,e.return)),n&64&&Vt&&(l=l.updateQueue,l!==null&&(n=l.callbacks,n!==null&&(e=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=e===null?n:e.concat(n))));break;case 26:var a=Et;if(Pl(t,l),lt(l),n&512&&(Nl||e===null||Dt(e,e.return)),n&4){var i=e!==null?e.memoizedState:null;if(n=l.memoizedState,e===null)if(n===null)if(l.stateNode===null){l:{n=l.type,e=l.memoizedProps,a=a.ownerDocument||a;t:switch(n){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Nn]||i[Yl]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(n),a.head.insertBefore(i,a.querySelector("head > title"))),Ll(i,n,e),i[Yl]=l,Bl(i),n=i;break l;case"link":var u=ef("link","href",a).get(n+(e.href||""));if(u){for(var s=0;s<u.length;s++)if(i=u[s],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(s,1);break t}}i=a.createElement(n),Ll(i,n,e),a.head.appendChild(i);break;case"meta":if(u=ef("meta","content",a).get(n+(e.content||""))){for(s=0;s<u.length;s++)if(i=u[s],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(s,1);break t}}i=a.createElement(n),Ll(i,n,e),a.head.appendChild(i);break;default:throw Error(p(468,n))}i[Yl]=l,Bl(i),n=i}l.stateNode=n}else nf(a,l.type,l.stateNode);else l.stateNode=tf(a,n,l.memoizedProps);else i!==n?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,n===null?nf(a,l.type,l.stateNode):tf(a,n,l.memoizedProps)):n===null&&l.stateNode!==null&&zs(l,l.memoizedProps,e.memoizedProps)}break;case 27:Pl(t,l),lt(l),n&512&&(Nl||e===null||Dt(e,e.return)),e!==null&&n&4&&zs(l,l.memoizedProps,e.memoizedProps);break;case 5:if(Pl(t,l),lt(l),n&512&&(Nl||e===null||Dt(e,e.return)),l.flags&32){a=l.stateNode;try{We(a,"")}catch(H){ul(l,l.return,H)}}n&4&&l.stateNode!=null&&(a=l.memoizedProps,zs(l,a,e!==null?e.memoizedProps:a)),n&1024&&(As=!0);break;case 6:if(Pl(t,l),lt(l),n&4){if(l.stateNode===null)throw Error(p(162));n=l.memoizedProps,e=l.stateNode;try{e.nodeValue=n}catch(H){ul(l,l.return,H)}}break;case 3:if(Ci=null,a=Et,Et=Oi(t.containerInfo),Pl(t,l),Et=a,lt(l),n&4&&e!==null&&e.memoizedState.isDehydrated)try{jn(t.containerInfo)}catch(H){ul(l,l.return,H)}As&&(As=!1,ng(l));break;case 4:n=Et,Et=Oi(l.stateNode.containerInfo),Pl(t,l),lt(l),Et=n;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,mi(l,n)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(yi=nt()),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,mi(l,n)));break;case 22:a=l.memoizedState!==null;var o=e!==null&&e.memoizedState!==null,h=Vt,S=Nl;if(Vt=h||a,Nl=S||o,Pl(t,l),Nl=S,Vt=h,lt(l),n&8192)l:for(t=l.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(e===null||o||Vt||Nl||Qe(l)),e=null,t=l;;){if(t.tag===5||t.tag===26){if(e===null){o=e=t;try{if(i=o.stateNode,a)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{s=o.stateNode;var A=o.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null;s.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(H){ul(o,o.return,H)}}}else if(t.tag===6){if(e===null){o=t;try{o.stateNode.nodeValue=a?"":o.memoizedProps}catch(H){ul(o,o.return,H)}}}else if(t.tag===18){if(e===null){o=t;try{var b=o.stateNode;a?Kg(b,!0):Kg(o.stateNode,!1)}catch(H){ul(o,o.return,H)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;e===t&&(e=null),t=t.return}e===t&&(e=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=l.updateQueue,n!==null&&(e=n.retryQueue,e!==null&&(n.retryQueue=null,mi(l,e))));break;case 19:Pl(t,l),lt(l),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,mi(l,n)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var e,n=l.return;n!==null;){if($c(n)){e=n;break}n=n.return}if(e==null)throw Error(p(160));switch(e.tag){case 27:var a=e.stateNode,i=_s(l);di(l,i,a);break;case 5:var u=e.stateNode;e.flags&32&&(We(u,""),e.flags&=-33);var s=_s(l);di(l,s,u);break;case 3:case 4:var o=e.stateNode.containerInfo,h=_s(l);Ts(l,h,o);break;default:throw Error(p(161))}}catch(S){ul(l,l.return,S)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function ng(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;ng(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Kt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fc(l,t.alternate,t),t=t.sibling}function Qe(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ce(4,t,t.return),Qe(t);break;case 1:Dt(t,t.return);var e=t.stateNode;typeof e.componentWillUnmount=="function"&&Kc(t,t.return,e),Qe(t);break;case 27:ma(t.stateNode);case 26:case 5:Dt(t,t.return),Qe(t);break;case 22:t.memoizedState===null&&Qe(t);break;case 30:Qe(t);break;default:Qe(t)}l=l.sibling}}function Jt(l,t,e){for(e=e&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,a=l,i=t,u=i.flags;switch(i.tag){case 0:case 11:case 15:Jt(a,i,e),ia(4,i);break;case 1:if(Jt(a,i,e),n=i,a=n.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){ul(n,n.return,h)}if(n=i,a=n.updateQueue,a!==null){var s=n.stateNode;try{var o=a.shared.hiddenCallbacks;if(o!==null)for(a.shared.hiddenCallbacks=null,a=0;a<o.length;a++)Ur(o[a],s)}catch(h){ul(n,n.return,h)}}e&&u&64&&Zc(i),ua(i,i.return);break;case 27:kc(i);case 26:case 5:Jt(a,i,e),e&&n===null&&u&4&&Jc(i),ua(i,i.return);break;case 12:Jt(a,i,e);break;case 31:Jt(a,i,e),e&&u&4&&lg(a,i);break;case 13:Jt(a,i,e),e&&u&4&&tg(a,i);break;case 22:i.memoizedState===null&&Jt(a,i,e),ua(i,i.return);break;case 30:break;default:Jt(a,i,e)}t=t.sibling}}function Ms(l,t){var e=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==e&&(l!=null&&l.refCount++,e!=null&&Kn(e))}function Es(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Kn(l))}function wt(l,t,e,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ag(l,t,e,n),t=t.sibling}function ag(l,t,e,n){var a=t.flags;switch(t.tag){case 0:case 11:case 15:wt(l,t,e,n),a&2048&&ia(9,t);break;case 1:wt(l,t,e,n);break;case 3:wt(l,t,e,n),a&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Kn(l)));break;case 12:if(a&2048){wt(l,t,e,n),l=t.stateNode;try{var i=t.memoizedProps,u=i.id,s=i.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(o){ul(t,t.return,o)}}else wt(l,t,e,n);break;case 31:wt(l,t,e,n);break;case 13:wt(l,t,e,n);break;case 23:break;case 22:i=t.stateNode,u=t.alternate,t.memoizedState!==null?i._visibility&2?wt(l,t,e,n):sa(l,t):i._visibility&2?wt(l,t,e,n):(i._visibility|=2,yn(l,t,e,n,(t.subtreeFlags&10256)!==0||!1)),a&2048&&Ms(u,t);break;case 24:wt(l,t,e,n),a&2048&&Es(t.alternate,t);break;default:wt(l,t,e,n)}}function yn(l,t,e,n,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=l,u=t,s=e,o=n,h=u.flags;switch(u.tag){case 0:case 11:case 15:yn(i,u,s,o,a),ia(8,u);break;case 23:break;case 22:var S=u.stateNode;u.memoizedState!==null?S._visibility&2?yn(i,u,s,o,a):sa(i,u):(S._visibility|=2,yn(i,u,s,o,a)),a&&h&2048&&Ms(u.alternate,u);break;case 24:yn(i,u,s,o,a),a&&h&2048&&Es(u.alternate,u);break;default:yn(i,u,s,o,a)}t=t.sibling}}function sa(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var e=l,n=t,a=n.flags;switch(n.tag){case 22:sa(e,n),a&2048&&Ms(n.alternate,n);break;case 24:sa(e,n),a&2048&&Es(n.alternate,n);break;default:sa(e,n)}t=t.sibling}}var oa=8192;function vn(l,t,e){if(l.subtreeFlags&oa)for(l=l.child;l!==null;)ig(l,t,e),l=l.sibling}function ig(l,t,e){switch(l.tag){case 26:vn(l,t,e),l.flags&oa&&l.memoizedState!==null&&Id(e,Et,l.memoizedState,l.memoizedProps);break;case 5:vn(l,t,e);break;case 3:case 4:var n=Et;Et=Oi(l.stateNode.containerInfo),vn(l,t,e),Et=n;break;case 22:l.memoizedState===null&&(n=l.alternate,n!==null&&n.memoizedState!==null?(n=oa,oa=16777216,vn(l,t,e),oa=n):vn(l,t,e));break;default:vn(l,t,e)}}function ug(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function ra(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];ql=n,og(n,l)}ug(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)sg(l),l=l.sibling}function sg(l){switch(l.tag){case 0:case 11:case 15:ra(l),l.flags&2048&&ce(9,l,l.return);break;case 3:ra(l);break;case 12:ra(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,hi(l)):ra(l);break;default:ra(l)}}function hi(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var e=0;e<t.length;e++){var n=t[e];ql=n,og(n,l)}ug(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ce(8,t,t.return),hi(t);break;case 22:e=t.stateNode,e._visibility&2&&(e._visibility&=-3,hi(t));break;default:hi(t)}l=l.sibling}}function og(l,t){for(;ql!==null;){var e=ql;switch(e.tag){case 0:case 11:case 15:ce(8,e,t);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var n=e.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Kn(e.memoizedState.cache)}if(n=e.child,n!==null)n.return=e,ql=n;else l:for(e=l;ql!==null;){n=ql;var a=n.sibling,i=n.return;if(Ic(n),n===e){ql=null;break l}if(a!==null){a.return=i,ql=a;break l}ql=i}}}var pd={getCacheForType:function(l){var t=Gl(Dl),e=t.data.get(l);return e===void 0&&(e=l(),t.data.set(l,e)),e},cacheSignal:function(){return Gl(Dl).controller.signal}},dd=typeof WeakMap=="function"?WeakMap:Map,nl=0,pl=null,k=null,F=0,il=0,ct=null,ge=!1,bn=!1,ws=!1,$t=0,Ml=0,fe=0,Le=0,js=0,gt=0,Sn=0,ca=null,tt=null,Os=!1,yi=0,rg=0,vi=1/0,bi=null,pe=null,Hl=0,de=null,zn=null,kt=0,Ds=0,Cs=null,cg=null,ga=0,xs=null;function ft(){return(nl&2)!==0&&F!==0?F&-F:z.T!==null?qs():Eo()}function gg(){if(gt===0)if((F&536870912)===0||ll){var l=wa;wa<<=1,(wa&3932160)===0&&(wa=262144),gt=l}else gt=536870912;return l=ot.current,l!==null&&(l.flags|=32),gt}function et(l,t,e){(l===pl&&(il===2||il===9)||l.cancelPendingCommit!==null)&&(_n(l,0),me(l,F,gt,!1)),xn(l,e),((nl&2)===0||l!==pl)&&(l===pl&&((nl&2)===0&&(Le|=e),Ml===4&&me(l,F,gt,!1)),Ct(l))}function fg(l,t,e){if((nl&6)!==0)throw Error(p(327));var n=!e&&(t&127)===0&&(t&l.expiredLanes)===0||Cn(l,t),a=n?yd(l,t):Us(l,t,!0),i=n;do{if(a===0){bn&&!n&&me(l,t,0,!1);break}else{if(e=l.current.alternate,i&&!md(e)){a=Us(l,t,!1),i=!1;continue}if(a===2){if(i=t,l.errorRecoveryDisabledLanes&i)var u=0;else u=l.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;l:{var s=l;a=ca;var o=s.current.memoizedState.isDehydrated;if(o&&(_n(s,u).flags|=256),u=Us(s,u,!1),u!==2){if(ws&&!o){s.errorRecoveryDisabledLanes|=i,Le|=i,a=4;break l}i=tt,tt=a,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}a=u}if(i=!1,a!==2)continue}}if(a===1){_n(l,0),me(l,t,0,!0);break}l:{switch(n=l,i=a,i){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:me(n,t,gt,!ge);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(a=yi+300-nt(),10<a)){if(me(n,t,gt,!ge),Oa(n,0,!0)!==0)break l;kt=t,n.timeoutHandle=Lg(pg.bind(null,n,e,tt,bi,Os,t,gt,Le,Sn,ge,i,"Throttled",-0,0),a);break l}pg(n,e,tt,bi,Os,t,gt,Le,Sn,ge,i,null,-0,0)}}break}while(!0);Ct(l)}function pg(l,t,e,n,a,i,u,s,o,h,S,A,y,b){if(l.timeoutHandle=-1,A=t.subtreeFlags,A&8192||(A&16785408)===16785408){A={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},ig(t,i,A);var H=(i&62914560)===i?yi-nt():(i&4194048)===i?rg-nt():0;if(H=Pd(A,H),H!==null){kt=i,l.cancelPendingCommit=H(zg.bind(null,l,t,i,e,n,a,u,s,o,S,A,null,y,b)),me(l,i,u,!h);return}}zg(l,t,i,e,n,a,u,s,o)}function md(l){for(var t=l;;){var e=t.tag;if((e===0||e===11||e===15)&&t.flags&16384&&(e=t.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var n=0;n<e.length;n++){var a=e[n],i=a.getSnapshot;a=a.value;try{if(!ut(i(),a))return!1}catch{return!1}}if(e=t.child,t.subtreeFlags&16384&&e!==null)e.return=t,t=e;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function me(l,t,e,n){t&=~js,t&=~Le,l.suspendedLanes|=t,l.pingedLanes&=~t,n&&(l.warmLanes|=t),n=l.expirationTimes;for(var a=t;0<a;){var i=31-it(a),u=1<<i;n[i]=-1,a&=~u}e!==0&&To(l,e,t)}function Si(){return(nl&6)===0?(fa(0),!1):!0}function Ns(){if(k!==null){if(il===0)var l=k.return;else l=k,qt=Ue=null,ku(l),fn=null,$n=0,l=k;for(;l!==null;)Vc(l.alternate,l),l=l.return;k=null}}function _n(l,t){var e=l.timeoutHandle;e!==-1&&(l.timeoutHandle=-1,Hd(e)),e=l.cancelPendingCommit,e!==null&&(l.cancelPendingCommit=null,e()),kt=0,Ns(),pl=l,k=e=Rt(l.current,null),F=t,il=0,ct=null,ge=!1,bn=Cn(l,t),ws=!1,Sn=gt=js=Le=fe=Ml=0,tt=ca=null,Os=!1,(t&8)!==0&&(t|=t&32);var n=l.entangledLanes;if(n!==0)for(l=l.entanglements,n&=t;0<n;){var a=31-it(n),i=1<<a;t|=l[a],n&=~i}return $t=t,Ga(),e}function dg(l,t){V=null,z.H=ea,t===gn||t===ka?(t=Dr(),il=3):t===Bu?(t=Dr(),il=4):il=t===gs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,k===null&&(Ml=1,ri(l,yt(t,l.current)))}function mg(){var l=ot.current;return l===null?!0:(F&4194048)===F?zt===null:(F&62914560)===F||(F&536870912)!==0?l===zt:!1}function hg(){var l=z.H;return z.H=ea,l===null?ea:l}function yg(){var l=z.A;return z.A=pd,l}function zi(){Ml=4,ge||(F&4194048)!==F&&ot.current!==null||(bn=!0),(fe&134217727)===0&&(Le&134217727)===0||pl===null||me(pl,F,gt,!1)}function Us(l,t,e){var n=nl;nl|=2;var a=hg(),i=yg();(pl!==l||F!==t)&&(bi=null,_n(l,t)),t=!1;var u=Ml;l:do try{if(il!==0&&k!==null){var s=k,o=ct;switch(il){case 8:Ns(),u=6;break l;case 3:case 2:case 9:case 6:ot.current===null&&(t=!0);var h=il;if(il=0,ct=null,Tn(l,s,o,h),e&&bn){u=0;break l}break;default:h=il,il=0,ct=null,Tn(l,s,o,h)}}hd(),u=Ml;break}catch(S){dg(l,S)}while(!0);return t&&l.shellSuspendCounter++,qt=Ue=null,nl=n,z.H=a,z.A=i,k===null&&(pl=null,F=0,Ga()),u}function hd(){for(;k!==null;)vg(k)}function yd(l,t){var e=nl;nl|=2;var n=hg(),a=yg();pl!==l||F!==t?(bi=null,vi=nt()+500,_n(l,t)):bn=Cn(l,t);l:do try{if(il!==0&&k!==null){t=k;var i=ct;t:switch(il){case 1:il=0,ct=null,Tn(l,t,i,1);break;case 2:case 9:if(jr(i)){il=0,ct=null,bg(t);break}t=function(){il!==2&&il!==9||pl!==l||(il=7),Ct(l)},i.then(t,t);break l;case 3:il=7;break l;case 4:il=5;break l;case 7:jr(i)?(il=0,ct=null,bg(t)):(il=0,ct=null,Tn(l,t,i,7));break;case 5:var u=null;switch(k.tag){case 26:u=k.memoizedState;case 5:case 27:var s=k;if(u?af(u):s.stateNode.complete){il=0,ct=null;var o=s.sibling;if(o!==null)k=o;else{var h=s.return;h!==null?(k=h,_i(h)):k=null}break t}}il=0,ct=null,Tn(l,t,i,5);break;case 6:il=0,ct=null,Tn(l,t,i,6);break;case 8:Ns(),Ml=6;break l;default:throw Error(p(462))}}vd();break}catch(S){dg(l,S)}while(!0);return qt=Ue=null,z.H=n,z.A=a,nl=e,k!==null?0:(pl=null,F=0,Ga(),Ml)}function vd(){for(;k!==null&&!Gf();)vg(k)}function vg(l){var t=Qc(l.alternate,l,$t);l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function bg(l){var t=l,e=t.alternate;switch(t.tag){case 15:case 0:t=Rc(e,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Rc(e,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:ku(t);default:Vc(e,t),t=k=yr(t,$t),t=Qc(e,t,$t)}l.memoizedProps=l.pendingProps,t===null?_i(l):k=t}function Tn(l,t,e,n){qt=Ue=null,ku(t),fn=null,$n=0;var a=t.return;try{if(ud(l,a,t,e,F)){Ml=1,ri(l,yt(e,l.current)),k=null;return}}catch(i){if(a!==null)throw k=a,i;Ml=1,ri(l,yt(e,l.current)),k=null;return}t.flags&32768?(ll||n===1?l=!0:bn||(F&536870912)!==0?l=!1:(ge=l=!0,(n===2||n===9||n===3||n===6)&&(n=ot.current,n!==null&&n.tag===13&&(n.flags|=16384))),Sg(t,l)):_i(t)}function _i(l){var t=l;do{if((t.flags&32768)!==0){Sg(t,ge);return}l=t.return;var e=rd(t.alternate,t,$t);if(e!==null){k=e;return}if(t=t.sibling,t!==null){k=t;return}k=t=l}while(t!==null);Ml===0&&(Ml=5)}function Sg(l,t){do{var e=cd(l.alternate,l);if(e!==null){e.flags&=32767,k=e;return}if(e=l.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!t&&(l=l.sibling,l!==null)){k=l;return}k=l=e}while(l!==null);Ml=6,k=null}function zg(l,t,e,n,a,i,u,s,o){l.cancelPendingCommit=null;do Ti();while(Hl!==0);if((nl&6)!==0)throw Error(p(327));if(t!==null){if(t===l.current)throw Error(p(177));if(i=t.lanes|t.childLanes,i|=_u,Ff(l,e,i,u,s,o),l===pl&&(k=pl=null,F=0),zn=t,de=l,kt=e,Ds=i,Cs=a,cg=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,_d(Ma,function(){return Eg(),null})):(l.callbackNode=null,l.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null,a=j.p,j.p=2,u=nl,nl|=4;try{gd(l,t,e)}finally{nl=u,j.p=a,z.T=n}}Hl=1,_g(),Tg(),Ag()}}function _g(){if(Hl===1){Hl=0;var l=de,t=zn,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=z.T,z.T=null;var n=j.p;j.p=2;var a=nl;nl|=4;try{eg(t,l);var i=Ks,u=or(l.containerInfo),s=i.focusedElem,o=i.selectionRange;if(u!==s&&s&&s.ownerDocument&&sr(s.ownerDocument.documentElement,s)){if(o!==null&&yu(s)){var h=o.start,S=o.end;if(S===void 0&&(S=h),"selectionStart"in s)s.selectionStart=h,s.selectionEnd=Math.min(S,s.value.length);else{var A=s.ownerDocument||document,y=A&&A.defaultView||window;if(y.getSelection){var b=y.getSelection(),H=s.textContent.length,X=Math.min(o.start,H),gl=o.end===void 0?X:Math.min(o.end,H);!b.extend&&X>gl&&(u=gl,gl=X,X=u);var f=ur(s,X),r=ur(s,gl);if(f&&r&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==r.node||b.focusOffset!==r.offset)){var m=A.createRange();m.setStart(f.node,f.offset),b.removeAllRanges(),X>gl?(b.addRange(m),b.extend(r.node,r.offset)):(m.setEnd(r.node,r.offset),b.addRange(m))}}}}for(A=[],b=s;b=b.parentNode;)b.nodeType===1&&A.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<A.length;s++){var _=A[s];_.element.scrollLeft=_.left,_.element.scrollTop=_.top}}Hi=!!Zs,Ks=Zs=null}finally{nl=a,j.p=n,z.T=e}}l.current=t,Hl=2}}function Tg(){if(Hl===2){Hl=0;var l=de,t=zn,e=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||e){e=z.T,z.T=null;var n=j.p;j.p=2;var a=nl;nl|=4;try{Fc(l,t.alternate,t)}finally{nl=a,j.p=n,z.T=e}}Hl=3}}function Ag(){if(Hl===4||Hl===3){Hl=0,Qf();var l=de,t=zn,e=kt,n=cg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Hl=5:(Hl=0,zn=de=null,Mg(l,l.pendingLanes));var a=l.pendingLanes;if(a===0&&(pe=null),Ii(e),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Dn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=z.T,a=j.p,j.p=2,z.T=null;try{for(var i=l.onRecoverableError,u=0;u<n.length;u++){var s=n[u];i(s.value,{componentStack:s.stack})}}finally{z.T=t,j.p=a}}(kt&3)!==0&&Ti(),Ct(l),a=l.pendingLanes,(e&261930)!==0&&(a&42)!==0?l===xs?ga++:(ga=0,xs=l):ga=0,fa(0)}}function Mg(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Kn(t)))}function Ti(){return _g(),Tg(),Ag(),Eg()}function Eg(){if(Hl!==5)return!1;var l=de,t=Ds;Ds=0;var e=Ii(kt),n=z.T,a=j.p;try{j.p=32>e?32:e,z.T=null,e=Cs,Cs=null;var i=de,u=kt;if(Hl=0,zn=de=null,kt=0,(nl&6)!==0)throw Error(p(331));var s=nl;if(nl|=4,sg(i.current),ag(i,i.current,u,e),nl=s,fa(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Dn,i)}catch{}return!0}finally{j.p=a,z.T=n,Mg(l,t)}}function wg(l,t,e){t=yt(e,t),t=cs(l.stateNode,t,2),l=se(l,t,2),l!==null&&(xn(l,2),Ct(l))}function ul(l,t,e){if(l.tag===3)wg(l,l,e);else for(;t!==null;){if(t.tag===3){wg(t,l,e);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pe===null||!pe.has(n))){l=yt(e,l),e=jc(2),n=se(t,e,2),n!==null&&(Oc(e,n,t,l),xn(n,2),Ct(n));break}}t=t.return}}function Hs(l,t,e){var n=l.pingCache;if(n===null){n=l.pingCache=new dd;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(e)||(ws=!0,a.add(e),l=bd.bind(null,l,t,e),t.then(l,l))}function bd(l,t,e){var n=l.pingCache;n!==null&&n.delete(t),l.pingedLanes|=l.suspendedLanes&e,l.warmLanes&=~e,pl===l&&(F&e)===e&&(Ml===4||Ml===3&&(F&62914560)===F&&300>nt()-yi?(nl&2)===0&&_n(l,0):js|=e,Sn===F&&(Sn=0)),Ct(l)}function jg(l,t){t===0&&(t=_o()),l=Ce(l,t),l!==null&&(xn(l,t),Ct(l))}function Sd(l){var t=l.memoizedState,e=0;t!==null&&(e=t.retryLane),jg(l,e)}function zd(l,t){var e=0;switch(l.tag){case 31:case 13:var n=l.stateNode,a=l.memoizedState;a!==null&&(e=a.retryLane);break;case 19:n=l.stateNode;break;case 22:n=l.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(t),jg(l,e)}function _d(l,t){return $i(l,t)}var Ai=null,An=null,Rs=!1,Mi=!1,Bs=!1,he=0;function Ct(l){l!==An&&l.next===null&&(An===null?Ai=An=l:An=An.next=l),Mi=!0,Rs||(Rs=!0,Ad())}function fa(l,t){if(!Bs&&Mi){Bs=!0;do for(var e=!1,n=Ai;n!==null;){if(l!==0){var a=n.pendingLanes;if(a===0)var i=0;else{var u=n.suspendedLanes,s=n.pingedLanes;i=(1<<31-it(42|l)+1)-1,i&=a&~(u&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,xg(n,i))}else i=F,i=Oa(n,n===pl?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||Cn(n,i)||(e=!0,xg(n,i));n=n.next}while(e);Bs=!1}}function Td(){Og()}function Og(){Mi=Rs=!1;var l=0;he!==0&&Ud()&&(l=he);for(var t=nt(),e=null,n=Ai;n!==null;){var a=n.next,i=Dg(n,t);i===0?(n.next=null,e===null?Ai=a:e.next=a,a===null&&(An=e)):(e=n,(l!==0||(i&3)!==0)&&(Mi=!0)),n=a}Hl!==0&&Hl!==5||fa(l),he!==0&&(he=0)}function Dg(l,t){for(var e=l.suspendedLanes,n=l.pingedLanes,a=l.expirationTimes,i=l.pendingLanes&-62914561;0<i;){var u=31-it(i),s=1<<u,o=a[u];o===-1?((s&e)===0||(s&n)!==0)&&(a[u]=Wf(s,t)):o<=t&&(l.expiredLanes|=s),i&=~s}if(t=pl,e=F,e=Oa(l,l===t?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),n=l.callbackNode,e===0||l===t&&(il===2||il===9)||l.cancelPendingCommit!==null)return n!==null&&n!==null&&ki(n),l.callbackNode=null,l.callbackPriority=0;if((e&3)===0||Cn(l,e)){if(t=e&-e,t===l.callbackPriority)return t;switch(n!==null&&ki(n),Ii(e)){case 2:case 8:e=So;break;case 32:e=Ma;break;case 268435456:e=zo;break;default:e=Ma}return n=Cg.bind(null,l),e=$i(e,n),l.callbackPriority=t,l.callbackNode=e,t}return n!==null&&n!==null&&ki(n),l.callbackPriority=2,l.callbackNode=null,2}function Cg(l,t){if(Hl!==0&&Hl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var e=l.callbackNode;if(Ti()&&l.callbackNode!==e)return null;var n=F;return n=Oa(l,l===pl?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),n===0?null:(fg(l,n,t),Dg(l,nt()),l.callbackNode!=null&&l.callbackNode===e?Cg.bind(null,l):null)}function xg(l,t){if(Ti())return null;fg(l,t,!0)}function Ad(){Rd(function(){(nl&6)!==0?$i(bo,Td):Og()})}function qs(){if(he===0){var l=rn;l===0&&(l=Ea,Ea<<=1,(Ea&261888)===0&&(Ea=256)),he=l}return he}function Ng(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Na(""+l)}function Ug(l,t){var e=t.ownerDocument.createElement("input");return e.name=t.name,e.value=t.value,l.id&&e.setAttribute("form",l.id),t.parentNode.insertBefore(e,t),l=new FormData(l),e.parentNode.removeChild(e),l}function Md(l,t,e,n,a){if(t==="submit"&&e&&e.stateNode===a){var i=Ng((a[Wl]||null).action),u=n.submitter;u&&(t=(t=u[Wl]||null)?Ng(t.formAction):u.getAttribute("formAction"),t!==null&&(i=t,u=null));var s=new Ba("action","action",null,n,a);l.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(he!==0){var o=u?Ug(a,u):new FormData(a);as(e,{pending:!0,data:o,method:a.method,action:i},null,o)}}else typeof i=="function"&&(s.preventDefault(),o=u?Ug(a,u):new FormData(a),as(e,{pending:!0,data:o,method:a.method,action:i},i,o))},currentTarget:a}]})}}for(var Ys=0;Ys<zu.length;Ys++){var Xs=zu[Ys],Ed=Xs.toLowerCase(),wd=Xs[0].toUpperCase()+Xs.slice(1);Mt(Ed,"on"+wd)}Mt(gr,"onAnimationEnd"),Mt(fr,"onAnimationIteration"),Mt(pr,"onAnimationStart"),Mt("dblclick","onDoubleClick"),Mt("focusin","onFocus"),Mt("focusout","onBlur"),Mt(Lp,"onTransitionRun"),Mt(Vp,"onTransitionStart"),Mt(Zp,"onTransitionCancel"),Mt(dr,"onTransitionEnd"),$e("onMouseEnter",["mouseout","mouseover"]),$e("onMouseLeave",["mouseout","mouseover"]),$e("onPointerEnter",["pointerout","pointerover"]),$e("onPointerLeave",["pointerout","pointerover"]),we("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),we("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),we("onBeforeInput",["compositionend","keypress","textInput","paste"]),we("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pa));function Hg(l,t){t=(t&4)!==0;for(var e=0;e<l.length;e++){var n=l[e],a=n.event;n=n.listeners;l:{var i=void 0;if(t)for(var u=n.length-1;0<=u;u--){var s=n[u],o=s.instance,h=s.currentTarget;if(s=s.listener,o!==i&&a.isPropagationStopped())break l;i=s,a.currentTarget=h;try{i(a)}catch(S){Xa(S)}a.currentTarget=null,i=o}else for(u=0;u<n.length;u++){if(s=n[u],o=s.instance,h=s.currentTarget,s=s.listener,o!==i&&a.isPropagationStopped())break l;i=s,a.currentTarget=h;try{i(a)}catch(S){Xa(S)}a.currentTarget=null,i=o}}}}function W(l,t){var e=t[Pi];e===void 0&&(e=t[Pi]=new Set);var n=l+"__bubble";e.has(n)||(Rg(t,l,2,!1),e.add(n))}function Gs(l,t,e){var n=0;t&&(n|=4),Rg(e,l,n,t)}var Ei="_reactListening"+Math.random().toString(36).slice(2);function Qs(l){if(!l[Ei]){l[Ei]=!0,Oo.forEach(function(e){e!=="selectionchange"&&(jd.has(e)||Gs(e,!1,l),Gs(e,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Ei]||(t[Ei]=!0,Gs("selectionchange",!1,t))}}function Rg(l,t,e,n){switch(ff(t)){case 2:var a=em;break;case 8:a=nm;break;default:a=no}e=a.bind(null,t,e,l),a=void 0,!ou||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?l.addEventListener(t,e,{capture:!0,passive:a}):l.addEventListener(t,e,!0):a!==void 0?l.addEventListener(t,e,{passive:a}):l.addEventListener(t,e,!1)}function Ls(l,t,e,n,a){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)l:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var s=n.stateNode.containerInfo;if(s===a)break;if(u===4)for(u=n.return;u!==null;){var o=u.tag;if((o===3||o===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;s!==null;){if(u=Ze(s),u===null)return;if(o=u.tag,o===5||o===6||o===26||o===27){n=i=u;continue l}s=s.parentNode}}n=n.return}Go(function(){var h=i,S=uu(e),A=[];l:{var y=mr.get(l);if(y!==void 0){var b=Ba,H=l;switch(l){case"keypress":if(Ha(e)===0)break l;case"keydown":case"keyup":b=zp;break;case"focusin":H="focus",b=fu;break;case"focusout":H="blur",b=fu;break;case"beforeblur":case"afterblur":b=fu;break;case"click":if(e.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Ap;break;case gr:case fr:case pr:b=fp;break;case dr:b=Ep;break;case"scroll":case"scrollend":b=sp;break;case"wheel":b=jp;break;case"copy":case"cut":case"paste":b=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Ko;break;case"toggle":case"beforetoggle":b=Dp}var X=(t&4)!==0,gl=!X&&(l==="scroll"||l==="scrollend"),f=X?y!==null?y+"Capture":null:y;X=[];for(var r=h,m;r!==null;){var _=r;if(m=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||m===null||f===null||(_=Hn(r,f),_!=null&&X.push(da(r,_,m))),gl)break;r=r.return}0<X.length&&(y=new b(y,H,null,e,S),A.push({event:y,listeners:X}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",b=l==="mouseout"||l==="pointerout",y&&e!==iu&&(H=e.relatedTarget||e.fromElement)&&(Ze(H)||H[Ve]))break l;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(H=e.relatedTarget||e.toElement,b=h,H=H?Ze(H):null,H!==null&&(gl=x(H),X=H.tag,H!==gl||X!==5&&X!==27&&X!==6)&&(H=null)):(b=null,H=h),b!==H)){if(X=Vo,_="onMouseLeave",f="onMouseEnter",r="mouse",(l==="pointerout"||l==="pointerover")&&(X=Ko,_="onPointerLeave",f="onPointerEnter",r="pointer"),gl=b==null?y:Un(b),m=H==null?y:Un(H),y=new X(_,r+"leave",b,e,S),y.target=gl,y.relatedTarget=m,_=null,Ze(S)===h&&(X=new X(f,r+"enter",H,e,S),X.target=m,X.relatedTarget=gl,_=X),gl=_,b&&H)t:{for(X=Od,f=b,r=H,m=0,_=f;_;_=X(_))m++;_=0;for(var Y=r;Y;Y=X(Y))_++;for(;0<m-_;)f=X(f),m--;for(;0<_-m;)r=X(r),_--;for(;m--;){if(f===r||r!==null&&f===r.alternate){X=f;break t}f=X(f),r=X(r)}X=null}else X=null;b!==null&&Bg(A,y,b,X,!1),H!==null&&gl!==null&&Bg(A,gl,H,X,!0)}}l:{if(y=h?Un(h):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var tl=lr;else if(Io(y))if(tr)tl=Xp;else{tl=qp;var B=Bp}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&au(h.elementType)&&(tl=lr):tl=Yp;if(tl&&(tl=tl(l,h))){Po(A,tl,e,S);break l}B&&B(l,y,h),l==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&nu(y,"number",y.value)}switch(B=h?Un(h):window,l){case"focusin":(Io(B)||B.contentEditable==="true")&&(ln=B,vu=h,Ln=null);break;case"focusout":Ln=vu=ln=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,rr(A,e,S);break;case"selectionchange":if(Qp)break;case"keydown":case"keyup":rr(A,e,S)}var Z;if(du)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pe?Wo(l,e)&&(I="onCompositionEnd"):l==="keydown"&&e.keyCode===229&&(I="onCompositionStart");I&&(Jo&&e.locale!=="ko"&&(Pe||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pe&&(Z=Qo()):(le=S,ru="value"in le?le.value:le.textContent,Pe=!0)),B=wi(h,I),0<B.length&&(I=new Zo(I,l,null,e,S),A.push({event:I,listeners:B}),Z?I.data=Z:(Z=Fo(e),Z!==null&&(I.data=Z)))),(Z=xp?Np(l,e):Up(l,e))&&(I=wi(h,"onBeforeInput"),0<I.length&&(B=new Zo("onBeforeInput","beforeinput",null,e,S),A.push({event:B,listeners:I}),B.data=Z)),Md(A,l,h,e,S)}Hg(A,t)})}function da(l,t,e){return{instance:l,listener:t,currentTarget:e}}function wi(l,t){for(var e=t+"Capture",n=[];l!==null;){var a=l,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=Hn(l,e),a!=null&&n.unshift(da(l,a,i)),a=Hn(l,t),a!=null&&n.push(da(l,a,i))),l.tag===3)return n;l=l.return}return[]}function Od(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Bg(l,t,e,n,a){for(var i=t._reactName,u=[];e!==null&&e!==n;){var s=e,o=s.alternate,h=s.stateNode;if(s=s.tag,o!==null&&o===n)break;s!==5&&s!==26&&s!==27||h===null||(o=h,a?(h=Hn(e,i),h!=null&&u.unshift(da(e,h,o))):a||(h=Hn(e,i),h!=null&&u.push(da(e,h,o)))),e=e.return}u.length!==0&&l.push({event:t,listeners:u})}var Dd=/\r\n?/g,Cd=/\u0000|\uFFFD/g;function qg(l){return(typeof l=="string"?l:""+l).replace(Dd,`
`).replace(Cd,"")}function Yg(l,t){return t=qg(t),qg(l)===t}function cl(l,t,e,n,a,i){switch(e){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||We(l,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&We(l,""+n);break;case"className":Ca(l,"class",n);break;case"tabIndex":Ca(l,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ca(l,e,n);break;case"style":Yo(l,n,i);break;case"data":if(t!=="object"){Ca(l,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||e!=="href")){l.removeAttribute(e);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){l.removeAttribute(e);break}n=Na(""+n),l.setAttribute(e,n);break;case"action":case"formAction":if(typeof n=="function"){l.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(t!=="input"&&cl(l,t,"name",a.name,a,null),cl(l,t,"formEncType",a.formEncType,a,null),cl(l,t,"formMethod",a.formMethod,a,null),cl(l,t,"formTarget",a.formTarget,a,null)):(cl(l,t,"encType",a.encType,a,null),cl(l,t,"method",a.method,a,null),cl(l,t,"target",a.target,a,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){l.removeAttribute(e);break}n=Na(""+n),l.setAttribute(e,n);break;case"onClick":n!=null&&(l.onclick=Ut);break;case"onScroll":n!=null&&W("scroll",l);break;case"onScrollEnd":n!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(e=n.__html,e!=null){if(a.children!=null)throw Error(p(60));l.innerHTML=e}}break;case"multiple":l.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":l.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){l.removeAttribute("xlink:href");break}e=Na(""+n),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(e,""+n):l.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(e,""):l.removeAttribute(e);break;case"capture":case"download":n===!0?l.setAttribute(e,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(e,n):l.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?l.setAttribute(e,n):l.removeAttribute(e);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?l.removeAttribute(e):l.setAttribute(e,n);break;case"popover":W("beforetoggle",l),W("toggle",l),Da(l,"popover",n);break;case"xlinkActuate":Nt(l,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Nt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Nt(l,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Nt(l,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Nt(l,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Nt(l,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Da(l,"is",n);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=ip.get(e)||e,Da(l,e,n))}}function Vs(l,t,e,n,a,i){switch(e){case"style":Yo(l,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(e=n.__html,e!=null){if(a.children!=null)throw Error(p(60));l.innerHTML=e}}break;case"children":typeof n=="string"?We(l,n):(typeof n=="number"||typeof n=="bigint")&&We(l,""+n);break;case"onScroll":n!=null&&W("scroll",l);break;case"onScrollEnd":n!=null&&W("scrollend",l);break;case"onClick":n!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Do.hasOwnProperty(e))l:{if(e[0]==="o"&&e[1]==="n"&&(a=e.endsWith("Capture"),t=e.slice(2,a?e.length-7:void 0),i=l[Wl]||null,i=i!=null?i[e]:null,typeof i=="function"&&l.removeEventListener(t,i,a),typeof n=="function")){typeof i!="function"&&i!==null&&(e in l?l[e]=null:l.hasAttribute(e)&&l.removeAttribute(e)),l.addEventListener(t,n,a);break l}e in l?l[e]=n:n===!0?l.setAttribute(e,""):Da(l,e,n)}}}function Ll(l,t,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var n=!1,a=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":n=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:cl(l,t,i,u,e,null)}}a&&cl(l,t,"srcSet",e.srcSet,e,null),n&&cl(l,t,"src",e.src,e,null);return;case"input":W("invalid",l);var s=i=u=a=null,o=null,h=null;for(n in e)if(e.hasOwnProperty(n)){var S=e[n];if(S!=null)switch(n){case"name":a=S;break;case"type":u=S;break;case"checked":o=S;break;case"defaultChecked":h=S;break;case"value":i=S;break;case"defaultValue":s=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(p(137,t));break;default:cl(l,t,n,S,e,null)}}Ho(l,i,s,o,h,u,a,!1);return;case"select":W("invalid",l),n=u=i=null;for(a in e)if(e.hasOwnProperty(a)&&(s=e[a],s!=null))switch(a){case"value":i=s;break;case"defaultValue":u=s;break;case"multiple":n=s;default:cl(l,t,a,s,e,null)}t=i,e=u,l.multiple=!!n,t!=null?ke(l,!!n,t,!1):e!=null&&ke(l,!!n,e,!0);return;case"textarea":W("invalid",l),i=a=n=null;for(u in e)if(e.hasOwnProperty(u)&&(s=e[u],s!=null))switch(u){case"value":n=s;break;case"defaultValue":a=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(p(91));break;default:cl(l,t,u,s,e,null)}Bo(l,n,a,i);return;case"option":for(o in e)if(e.hasOwnProperty(o)&&(n=e[o],n!=null))switch(o){case"selected":l.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:cl(l,t,o,n,e,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(n=0;n<pa.length;n++)W(pa[n],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in e)if(e.hasOwnProperty(h)&&(n=e[h],n!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:cl(l,t,h,n,e,null)}return;default:if(au(t)){for(S in e)e.hasOwnProperty(S)&&(n=e[S],n!==void 0&&Vs(l,t,S,n,e,void 0));return}}for(s in e)e.hasOwnProperty(s)&&(n=e[s],n!=null&&cl(l,t,s,n,e,null))}function xd(l,t,e,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,u=null,s=null,o=null,h=null,S=null;for(b in e){var A=e[b];if(e.hasOwnProperty(b)&&A!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":o=A;default:n.hasOwnProperty(b)||cl(l,t,b,null,n,A)}}for(var y in n){var b=n[y];if(A=e[y],n.hasOwnProperty(y)&&(b!=null||A!=null))switch(y){case"type":i=b;break;case"name":a=b;break;case"checked":h=b;break;case"defaultChecked":S=b;break;case"value":u=b;break;case"defaultValue":s=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,t));break;default:b!==A&&cl(l,t,y,b,n,A)}}eu(l,u,s,o,h,S,i,a);return;case"select":b=u=s=y=null;for(i in e)if(o=e[i],e.hasOwnProperty(i)&&o!=null)switch(i){case"value":break;case"multiple":b=o;default:n.hasOwnProperty(i)||cl(l,t,i,null,n,o)}for(a in n)if(i=n[a],o=e[a],n.hasOwnProperty(a)&&(i!=null||o!=null))switch(a){case"value":y=i;break;case"defaultValue":s=i;break;case"multiple":u=i;default:i!==o&&cl(l,t,a,i,n,o)}t=s,e=u,n=b,y!=null?ke(l,!!e,y,!1):!!n!=!!e&&(t!=null?ke(l,!!e,t,!0):ke(l,!!e,e?[]:"",!1));return;case"textarea":b=y=null;for(s in e)if(a=e[s],e.hasOwnProperty(s)&&a!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:cl(l,t,s,null,n,a)}for(u in n)if(a=n[u],i=e[u],n.hasOwnProperty(u)&&(a!=null||i!=null))switch(u){case"value":y=a;break;case"defaultValue":b=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(p(91));break;default:a!==i&&cl(l,t,u,a,n,i)}Ro(l,y,b);return;case"option":for(var H in e)if(y=e[H],e.hasOwnProperty(H)&&y!=null&&!n.hasOwnProperty(H))switch(H){case"selected":l.selected=!1;break;default:cl(l,t,H,null,n,y)}for(o in n)if(y=n[o],b=e[o],n.hasOwnProperty(o)&&y!==b&&(y!=null||b!=null))switch(o){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:cl(l,t,o,y,n,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in e)y=e[X],e.hasOwnProperty(X)&&y!=null&&!n.hasOwnProperty(X)&&cl(l,t,X,null,n,y);for(h in n)if(y=n[h],b=e[h],n.hasOwnProperty(h)&&y!==b&&(y!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:cl(l,t,h,y,n,b)}return;default:if(au(t)){for(var gl in e)y=e[gl],e.hasOwnProperty(gl)&&y!==void 0&&!n.hasOwnProperty(gl)&&Vs(l,t,gl,void 0,n,y);for(S in n)y=n[S],b=e[S],!n.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||Vs(l,t,S,y,n,b);return}}for(var f in e)y=e[f],e.hasOwnProperty(f)&&y!=null&&!n.hasOwnProperty(f)&&cl(l,t,f,null,n,y);for(A in n)y=n[A],b=e[A],!n.hasOwnProperty(A)||y===b||y==null&&b==null||cl(l,t,A,y,n,b)}function Xg(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nd(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,e=performance.getEntriesByType("resource"),n=0;n<e.length;n++){var a=e[n],i=a.transferSize,u=a.initiatorType,s=a.duration;if(i&&s&&Xg(u)){for(u=0,s=a.responseEnd,n+=1;n<e.length;n++){var o=e[n],h=o.startTime;if(h>s)break;var S=o.transferSize,A=o.initiatorType;S&&Xg(A)&&(o=o.responseEnd,u+=S*(o<s?1:(s-h)/(o-h)))}if(--n,t+=8*(i+u)/(a.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Zs=null,Ks=null;function ji(l){return l.nodeType===9?l:l.ownerDocument}function Gg(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qg(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Js(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $s=null;function Ud(){var l=window.event;return l&&l.type==="popstate"?l===$s?!1:($s=l,!0):($s=null,!1)}var Lg=typeof setTimeout=="function"?setTimeout:void 0,Hd=typeof clearTimeout=="function"?clearTimeout:void 0,Vg=typeof Promise=="function"?Promise:void 0,Rd=typeof queueMicrotask=="function"?queueMicrotask:typeof Vg<"u"?function(l){return Vg.resolve(null).then(l).catch(Bd)}:Lg;function Bd(l){setTimeout(function(){throw l})}function ye(l){return l==="head"}function Zg(l,t){var e=t,n=0;do{var a=e.nextSibling;if(l.removeChild(e),a&&a.nodeType===8)if(e=a.data,e==="/$"||e==="/&"){if(n===0){l.removeChild(a),jn(t);return}n--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")n++;else if(e==="html")ma(l.ownerDocument.documentElement);else if(e==="head"){e=l.ownerDocument.head,ma(e);for(var i=e.firstChild;i;){var u=i.nextSibling,s=i.nodeName;i[Nn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=u}}else e==="body"&&ma(l.ownerDocument.body);e=a}while(e);jn(t)}function Kg(l,t){var e=l;l=0;do{var n=e.nextSibling;if(e.nodeType===1?t?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(t?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),n&&n.nodeType===8)if(e=n.data,e==="/$"){if(l===0)break;l--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||l++;e=n}while(e)}function ks(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var e=t;switch(t=t.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":ks(e),lu(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}l.removeChild(e)}}function qd(l,t,e,n){for(;l.nodeType===1;){var a=e;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(n){if(!l[Nn])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(i=l.getAttribute("rel"),i==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(i!==a.rel||l.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||l.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||l.getAttribute("title")!==(a.title==null?null:a.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(i=l.getAttribute("src"),(i!==(a.src==null?null:a.src)||l.getAttribute("type")!==(a.type==null?null:a.type)||l.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&l.getAttribute("name")===i)return l}else return l;if(l=_t(l.nextSibling),l===null)break}return null}function Yd(l,t,e){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!e||(l=_t(l.nextSibling),l===null))return null;return l}function Jg(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=_t(l.nextSibling),l===null))return null;return l}function Ws(l){return l.data==="$?"||l.data==="$~"}function Fs(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Xd(l,t){var e=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||e.readyState!=="loading")t();else{var n=function(){t(),e.removeEventListener("DOMContentLoaded",n)};e.addEventListener("DOMContentLoaded",n),l._reactRetry=n}}function _t(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Is=null;function $g(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="/$"||e==="/&"){if(t===0)return _t(l.nextSibling);t--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||t++}l=l.nextSibling}return null}function kg(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var e=l.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(t===0)return l;t--}else e!=="/$"&&e!=="/&"||t++}l=l.previousSibling}return null}function Wg(l,t,e){switch(t=ji(e),l){case"html":if(l=t.documentElement,!l)throw Error(p(452));return l;case"head":if(l=t.head,!l)throw Error(p(453));return l;case"body":if(l=t.body,!l)throw Error(p(454));return l;default:throw Error(p(451))}}function ma(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);lu(l)}var Tt=new Map,Fg=new Set;function Oi(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=j.d;j.d={f:Gd,r:Qd,D:Ld,C:Vd,L:Zd,m:Kd,X:$d,S:Jd,M:kd};function Gd(){var l=Wt.f(),t=Si();return l||t}function Qd(l){var t=Ke(l);t!==null&&t.tag===5&&t.type==="form"?dc(t):Wt.r(l)}var Mn=typeof document>"u"?null:document;function Ig(l,t,e){var n=Mn;if(n&&typeof t=="string"&&t){var a=mt(t);a='link[rel="'+l+'"][href="'+a+'"]',typeof e=="string"&&(a+='[crossorigin="'+e+'"]'),Fg.has(a)||(Fg.add(a),l={rel:l,crossOrigin:e,href:t},n.querySelector(a)===null&&(t=n.createElement("link"),Ll(t,"link",l),Bl(t),n.head.appendChild(t)))}}function Ld(l){Wt.D(l),Ig("dns-prefetch",l,null)}function Vd(l,t){Wt.C(l,t),Ig("preconnect",l,t)}function Zd(l,t,e){Wt.L(l,t,e);var n=Mn;if(n&&l&&t){var a='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&e&&e.imageSrcSet?(a+='[imagesrcset="'+mt(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(a+='[imagesizes="'+mt(e.imageSizes)+'"]')):a+='[href="'+mt(l)+'"]';var i=a;switch(t){case"style":i=En(l);break;case"script":i=wn(l)}Tt.has(i)||(l=N({rel:"preload",href:t==="image"&&e&&e.imageSrcSet?void 0:l,as:t},e),Tt.set(i,l),n.querySelector(a)!==null||t==="style"&&n.querySelector(ha(i))||t==="script"&&n.querySelector(ya(i))||(t=n.createElement("link"),Ll(t,"link",l),Bl(t),n.head.appendChild(t)))}}function Kd(l,t){Wt.m(l,t);var e=Mn;if(e&&l){var n=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+mt(n)+'"][href="'+mt(l)+'"]',i=a;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=wn(l)}if(!Tt.has(i)&&(l=N({rel:"modulepreload",href:l},t),Tt.set(i,l),e.querySelector(a)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(ya(i)))return}n=e.createElement("link"),Ll(n,"link",l),Bl(n),e.head.appendChild(n)}}}function Jd(l,t,e){Wt.S(l,t,e);var n=Mn;if(n&&l){var a=Je(n).hoistableStyles,i=En(l);t=t||"default";var u=a.get(i);if(!u){var s={loading:0,preload:null};if(u=n.querySelector(ha(i)))s.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},e),(e=Tt.get(i))&&Ps(l,e);var o=u=n.createElement("link");Bl(o),Ll(o,"link",l),o._p=new Promise(function(h,S){o.onload=h,o.onerror=S}),o.addEventListener("load",function(){s.loading|=1}),o.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Di(u,t,n)}u={type:"stylesheet",instance:u,count:1,state:s},a.set(i,u)}}}function $d(l,t){Wt.X(l,t);var e=Mn;if(e&&l){var n=Je(e).hoistableScripts,a=wn(l),i=n.get(a);i||(i=e.querySelector(ya(a)),i||(l=N({src:l,async:!0},t),(t=Tt.get(a))&&lo(l,t),i=e.createElement("script"),Bl(i),Ll(i,"link",l),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function kd(l,t){Wt.M(l,t);var e=Mn;if(e&&l){var n=Je(e).hoistableScripts,a=wn(l),i=n.get(a);i||(i=e.querySelector(ya(a)),i||(l=N({src:l,async:!0,type:"module"},t),(t=Tt.get(a))&&lo(l,t),i=e.createElement("script"),Bl(i),Ll(i,"link",l),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(a,i))}}function Pg(l,t,e,n){var a=(a=$.current)?Oi(a):null;if(!a)throw Error(p(446));switch(l){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(t=En(e.href),e=Je(a).hoistableStyles,n=e.get(t),n||(n={type:"style",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){l=En(e.href);var i=Je(a).hoistableStyles,u=i.get(l);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(l,u),(i=a.querySelector(ha(l)))&&!i._p&&(u.instance=i,u.state.loading=5),Tt.has(l)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},Tt.set(l,e),i||Wd(a,l,e,u.state))),t&&n===null)throw Error(p(528,""));return u}if(t&&n!==null)throw Error(p(529,""));return null;case"script":return t=e.async,e=e.src,typeof e=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wn(e),e=Je(a).hoistableScripts,n=e.get(t),n||(n={type:"script",instance:null,count:0,state:null},e.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,l))}}function En(l){return'href="'+mt(l)+'"'}function ha(l){return'link[rel="stylesheet"]['+l+"]"}function lf(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function Wd(l,t,e,n){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=l.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ll(t,"link",e),Bl(t),l.head.appendChild(t))}function wn(l){return'[src="'+mt(l)+'"]'}function ya(l){return"script[async]"+l}function tf(l,t,e){if(t.count++,t.instance===null)switch(t.type){case"style":var n=l.querySelector('style[data-href~="'+mt(e.href)+'"]');if(n)return t.instance=n,Bl(n),n;var a=N({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return n=(l.ownerDocument||l).createElement("style"),Bl(n),Ll(n,"style",a),Di(n,e.precedence,l),t.instance=n;case"stylesheet":a=En(e.href);var i=l.querySelector(ha(a));if(i)return t.state.loading|=4,t.instance=i,Bl(i),i;n=lf(e),(a=Tt.get(a))&&Ps(n,a),i=(l.ownerDocument||l).createElement("link"),Bl(i);var u=i;return u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Ll(i,"link",n),t.state.loading|=4,Di(i,e.precedence,l),t.instance=i;case"script":return i=wn(e.src),(a=l.querySelector(ya(i)))?(t.instance=a,Bl(a),a):(n=e,(a=Tt.get(i))&&(n=N({},e),lo(n,a)),l=l.ownerDocument||l,a=l.createElement("script"),Bl(a),Ll(a,"link",n),l.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Di(n,e.precedence,l));return t.instance}function Di(l,t,e){for(var n=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=n.length?n[n.length-1]:null,i=a,u=0;u<n.length;u++){var s=n[u];if(s.dataset.precedence===t)i=s;else if(i!==a)break}i?i.parentNode.insertBefore(l,i.nextSibling):(t=e.nodeType===9?e.head:e,t.insertBefore(l,t.firstChild))}function Ps(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function lo(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Ci=null;function ef(l,t,e){if(Ci===null){var n=new Map,a=Ci=new Map;a.set(e,n)}else a=Ci,n=a.get(e),n||(n=new Map,a.set(e,n));if(n.has(l))return n;for(n.set(l,null),e=e.getElementsByTagName(l),a=0;a<e.length;a++){var i=e[a];if(!(i[Nn]||i[Yl]||l==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(t)||"";u=l+u;var s=n.get(u);s?s.push(i):n.set(u,[i])}}return n}function nf(l,t,e){l=l.ownerDocument||l,l.head.insertBefore(e,t==="title"?l.querySelector("head > title"):null)}function Fd(l,t,e){if(e===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function af(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Id(l,t,e,n){if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=En(n.href),i=t.querySelector(ha(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xi.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=i,Bl(i);return}i=t.ownerDocument||t,n=lf(n),(a=Tt.get(a))&&Ps(n,a),i=i.createElement("link"),Bl(i);var u=i;u._p=new Promise(function(s,o){u.onload=s,u.onerror=o}),Ll(i,"link",n),e.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=xi.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}var to=0;function Pd(l,t){return l.stylesheets&&l.count===0&&Ui(l,l.stylesheets),0<l.count||0<l.imgCount?function(e){var n=setTimeout(function(){if(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend){var i=l.unsuspend;l.unsuspend=null,i()}},6e4+t);0<l.imgBytes&&to===0&&(to=62500*Nd());var a=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ui(l,l.stylesheets),l.unsuspend)){var i=l.unsuspend;l.unsuspend=null,i()}},(l.imgBytes>to?50:800)+t);return l.unsuspend=e,function(){l.unsuspend=null,clearTimeout(n),clearTimeout(a)}}:null}function xi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Ni=null;function Ui(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Ni=new Map,t.forEach(lm,l),Ni=null,xi.call(l))}function lm(l,t){if(!(t.state.loading&4)){var e=Ni.get(l);if(e)var n=e.get(null);else{e=new Map,Ni.set(l,e);for(var a=l.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var u=a[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),n=u)}n&&e.set(null,n)}a=t.instance,u=a.getAttribute("data-precedence"),i=e.get(u)||n,i===n&&e.set(null,a),e.set(u,a),this.count++,n=xi.bind(this),a.addEventListener("load",n),a.addEventListener("error",n),i?i.parentNode.insertBefore(a,i.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(a,l.firstChild)),t.state.loading|=4}}var va={$$typeof:sl,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function tm(l,t,e,n,a,i,u,s,o){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wi(0),this.hiddenUpdates=Wi(null),this.identifierPrefix=n,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function uf(l,t,e,n,a,i,u,s,o,h,S,A){return l=new tm(l,t,e,u,o,h,S,A,s),t=1,i===!0&&(t|=24),i=st(3,null,null,t),l.current=i,i.stateNode=l,t=Uu(),t.refCount++,l.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:e,cache:t},qu(i),l}function sf(l){return l?(l=nn,l):nn}function of(l,t,e,n,a,i){a=sf(a),n.context===null?n.context=a:n.pendingContext=a,n=ue(t),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=se(l,n,t),e!==null&&(et(e,l,t),Wn(e,l,t))}function rf(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var e=l.retryLane;l.retryLane=e!==0&&e<t?e:t}}function eo(l,t){rf(l,t),(l=l.alternate)&&rf(l,t)}function cf(l){if(l.tag===13||l.tag===31){var t=Ce(l,67108864);t!==null&&et(t,l,67108864),eo(l,67108864)}}function gf(l){if(l.tag===13||l.tag===31){var t=ft();t=Fi(t);var e=Ce(l,t);e!==null&&et(e,l,t),eo(l,t)}}var Hi=!0;function em(l,t,e,n){var a=z.T;z.T=null;var i=j.p;try{j.p=2,no(l,t,e,n)}finally{j.p=i,z.T=a}}function nm(l,t,e,n){var a=z.T;z.T=null;var i=j.p;try{j.p=8,no(l,t,e,n)}finally{j.p=i,z.T=a}}function no(l,t,e,n){if(Hi){var a=ao(n);if(a===null)Ls(l,t,n,Ri,e),pf(l,n);else if(im(a,l,t,e,n))n.stopPropagation();else if(pf(l,n),t&4&&-1<am.indexOf(l)){for(;a!==null;){var i=Ke(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Ee(i.pendingLanes);if(u!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;u;){var o=1<<31-it(u);s.entanglements[1]|=o,u&=~o}Ct(i),(nl&6)===0&&(vi=nt()+500,fa(0))}}break;case 31:case 13:s=Ce(i,2),s!==null&&et(s,i,2),Si(),eo(i,2)}if(i=ao(n),i===null&&Ls(l,t,n,Ri,e),i===a)break;a=i}a!==null&&n.stopPropagation()}else Ls(l,t,n,null,e)}}function ao(l){return l=uu(l),io(l)}var Ri=null;function io(l){if(Ri=null,l=Ze(l),l!==null){var t=x(l);if(t===null)l=null;else{var e=t.tag;if(e===13){if(l=q(t),l!==null)return l;l=null}else if(e===31){if(l=P(t),l!==null)return l;l=null}else if(e===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ri=l,null}function ff(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lf()){case bo:return 2;case So:return 8;case Ma:case Vf:return 32;case zo:return 268435456;default:return 32}default:return 32}}var uo=!1,ve=null,be=null,Se=null,ba=new Map,Sa=new Map,ze=[],am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pf(l,t){switch(l){case"focusin":case"focusout":ve=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":Se=null;break;case"pointerover":case"pointerout":ba.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(t.pointerId)}}function za(l,t,e,n,a,i){return l===null||l.nativeEvent!==i?(l={blockedOn:t,domEventName:e,eventSystemFlags:n,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ke(t),t!==null&&cf(t)),l):(l.eventSystemFlags|=n,t=l.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),l)}function im(l,t,e,n,a){switch(t){case"focusin":return ve=za(ve,l,t,e,n,a),!0;case"dragenter":return be=za(be,l,t,e,n,a),!0;case"mouseover":return Se=za(Se,l,t,e,n,a),!0;case"pointerover":var i=a.pointerId;return ba.set(i,za(ba.get(i)||null,l,t,e,n,a)),!0;case"gotpointercapture":return i=a.pointerId,Sa.set(i,za(Sa.get(i)||null,l,t,e,n,a)),!0}return!1}function df(l){var t=Ze(l.target);if(t!==null){var e=x(t);if(e!==null){if(t=e.tag,t===13){if(t=q(e),t!==null){l.blockedOn=t,wo(l.priority,function(){gf(e)});return}}else if(t===31){if(t=P(e),t!==null){l.blockedOn=t,wo(l.priority,function(){gf(e)});return}}else if(t===3&&e.stateNode.current.memoizedState.isDehydrated){l.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Bi(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var e=ao(l.nativeEvent);if(e===null){e=l.nativeEvent;var n=new e.constructor(e.type,e);iu=n,e.target.dispatchEvent(n),iu=null}else return t=Ke(e),t!==null&&cf(t),l.blockedOn=e,!1;t.shift()}return!0}function mf(l,t,e){Bi(l)&&e.delete(t)}function um(){uo=!1,ve!==null&&Bi(ve)&&(ve=null),be!==null&&Bi(be)&&(be=null),Se!==null&&Bi(Se)&&(Se=null),ba.forEach(mf),Sa.forEach(mf)}function qi(l,t){l.blockedOn===t&&(l.blockedOn=null,uo||(uo=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,um)))}var Yi=null;function hf(l){Yi!==l&&(Yi=l,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Yi===l&&(Yi=null);for(var t=0;t<l.length;t+=3){var e=l[t],n=l[t+1],a=l[t+2];if(typeof n!="function"){if(io(n||e)===null)continue;break}var i=Ke(e);i!==null&&(l.splice(t,3),t-=3,as(i,{pending:!0,data:a,method:e.method,action:n},n,a))}}))}function jn(l){function t(o){return qi(o,l)}ve!==null&&qi(ve,l),be!==null&&qi(be,l),Se!==null&&qi(Se,l),ba.forEach(t),Sa.forEach(t);for(var e=0;e<ze.length;e++){var n=ze[e];n.blockedOn===l&&(n.blockedOn=null)}for(;0<ze.length&&(e=ze[0],e.blockedOn===null);)df(e),e.blockedOn===null&&ze.shift();if(e=(l.ownerDocument||l).$$reactFormReplay,e!=null)for(n=0;n<e.length;n+=3){var a=e[n],i=e[n+1],u=a[Wl]||null;if(typeof i=="function")u||hf(e);else if(u){var s=null;if(i&&i.hasAttribute("formAction")){if(a=i,u=i[Wl]||null)s=u.formAction;else if(io(a)!==null)continue}else s=u.action;typeof s=="function"?e[n+1]=s:(e.splice(n,3),n-=3),hf(e)}}}function yf(){function l(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return a=u})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),n||setTimeout(e,20)}function e(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,a=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(e,100),function(){n=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function so(l){this._internalRoot=l}Xi.prototype.render=so.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(p(409));var e=t.current,n=ft();of(e,n,l,t,null,null)},Xi.prototype.unmount=so.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;of(l.current,2,null,l,null,null),Si(),t[Ve]=null}};function Xi(l){this._internalRoot=l}Xi.prototype.unstable_scheduleHydration=function(l){if(l){var t=Eo();l={blockedOn:null,target:l,priority:t};for(var e=0;e<ze.length&&t!==0&&t<ze[e].priority;e++);ze.splice(e,0,l),e===0&&df(l)}};var vf=w.version;if(vf!=="19.2.3")throw Error(p(527,vf,"19.2.3"));j.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(p(188)):(l=Object.keys(l).join(","),Error(p(268,l)));return l=T(t),l=l!==null?O(l):null,l=l===null?null:l.stateNode,l};var sm={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gi.isDisabled&&Gi.supportsFiber)try{Dn=Gi.inject(sm),at=Gi}catch{}}return Ta.createRoot=function(l,t){if(!E(l))throw Error(p(299));var e=!1,n="",a=Ac,i=Mc,u=Ec;return t!=null&&(t.unstable_strictMode===!0&&(e=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=uf(l,1,!1,null,null,e,n,null,a,i,u,yf),l[Ve]=t.current,Qs(l),new so(t)},Ta.hydrateRoot=function(l,t,e){if(!E(l))throw Error(p(299));var n=!1,a="",i=Ac,u=Mc,s=Ec,o=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.formState!==void 0&&(o=e.formState)),t=uf(l,1,!0,t,e??null,n,a,o,i,u,s,yf),t.context=sf(null),e=t.current,n=ft(),n=Fi(n),a=ue(n),a.callback=null,se(e,a,n),e=n,t.current.lanes=e,xn(t,e),Ct(t),l[Ve]=t.current,Qs(l),new Xi(t)},Ta.version="19.2.3",Ta}var jf;function ym(){if(jf)return co.exports;jf=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(w){console.error(w)}}return v(),co.exports=hm(),co.exports}var vm=ym();const bm=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sm=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(w,C,p)=>p?p.toUpperCase():C.toLowerCase()),Of=v=>{const w=Sm(v);return w.charAt(0).toUpperCase()+w.slice(1)},Bf=(...v)=>v.filter((w,C,p)=>!!w&&w.trim()!==""&&p.indexOf(w)===C).join(" ").trim(),zm=v=>{for(const w in v)if(w.startsWith("aria-")||w==="role"||w==="title")return!0};var _m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Tm=zl.forwardRef(({color:v="currentColor",size:w=24,strokeWidth:C=2,absoluteStrokeWidth:p,className:E="",children:x,iconNode:q,...P},U)=>zl.createElement("svg",{ref:U,..._m,width:w,height:w,stroke:v,strokeWidth:p?Number(C)*24/Number(w):C,className:Bf("lucide",E),...!x&&!zm(P)&&{"aria-hidden":"true"},...P},[...q.map(([T,O])=>zl.createElement(T,O)),...Array.isArray(x)?x:[x]]));const Te=(v,w)=>{const C=zl.forwardRef(({className:p,...E},x)=>zl.createElement(Tm,{ref:x,iconNode:w,className:Bf(`lucide-${bm(Of(v))}`,`lucide-${v}`,p),...E}));return C.displayName=Of(v),C};const Am=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],Mm=Te("bird",Am);const Em=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],wm=Te("circle",Em);const jm=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Om=Te("key",jm);const Dm=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Cm=Te("music",Dm);const xm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nm=Te("star",xm);const Um=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Hm=Te("volume-2",Um);const Rm=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Bm=Te("volume-x",Rm);const qm=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],qf=Te("x",qm);function Ym({displayName:v,onConfirm:w,onCancel:C,onClose:p}){return d.jsx("div",{className:"modal-overlay",onClick:p,children:d.jsx("div",{className:"modal-content",onClick:E=>E.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:p,children:d.jsx(qf,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[v,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:w,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",v]}),d.jsx("button",{onClick:C,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function Yf(){const v=localStorage.getItem("openedWindows");if(!v)return new Set;try{const w=JSON.parse(v);return new Set(w)}catch(w){return console.error("Failed to parse opened windows:",w),new Set}}function Xm(v){const w=Yf();return w.add(v),localStorage.setItem("openedWindows",JSON.stringify([...w])),w}function Df(){localStorage.removeItem("openedWindows")}function Gm(){localStorage.removeItem("adventCalendarUser")}const Cf=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function Qm({userName:v,onUserSelect:w}){const[C]=zl.useState(()=>Cf[Math.floor(Math.random()*Cf.length)]),[p,E]=zl.useState(!1),x=v==="Tanya"?"Таня":v==="Zebra"?"Зёбра":"неведомый гость",q=()=>{E(!0)},P=()=>{Gm(),Df(),E(!1),window.location.reload()},U=()=>{Df(),E(!1)},T=()=>{E(!1)};return v?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[C,","," ",d.jsx("span",{className:"user-name clickable",onClick:q,title:`А точно ли я ${x}?..`,children:x}),"!"]})}),p&&(v==="Tanya"||v==="Zebra")&&d.jsx(Ym,{displayName:x,onConfirm:P,onCancel:U,onClose:T})]}):d.jsxs("div",{className:"user-selection",children:[d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>w("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>w("Zebra"),children:"Зёбра"})]})]})}function Lm(){const[v,w]=zl.useState([]),[C,p]=zl.useState([]);return zl.useEffect(()=>{const E=U=>T=>{const O=Math.sin(U*9301+T*49297)*43758.5453;return O-Math.floor(O)},x=Array.from({length:60}).map((U,T)=>{const O=E(T+1);return{left:`${Math.floor(O(1)*100)}%`,top:`${Math.floor(O(2)*70)}%`,animationDelay:`${(O(3)*3).toFixed(2)}s`,opacity:+(.3+O(4)*.7).toFixed(2)}}),q=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,T)=>{const O=E(100+T);let N=30+Math.floor(O(1)*60),K=Math.max(10,Math.floor(O(2)*30));const yl=q[T%q.length],vl=+(.35+O(3)*.55).toFixed(2),_l=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(O(4)*30)}% ${30+Math.floor(O(5)*30)}%`,bl=40+Math.floor(O(6)*40),El=Math.floor(O(7)*20),sl=-20+Math.floor(O(8)*140);let Tl=5+Math.floor(O(9)*40);return T===0&&(Tl=Math.max(2,Tl-8),N=Math.max(20,Math.floor(N*.85)),K=Math.max(8,Math.floor(K*.8))),{left:`${sl}%`,top:`${Tl}%`,width:`${N}vw`,height:`${K}vh`,opacity:vl,color:_l,borderRadius:Ul,duration:bl,delay:El}});window.requestAnimationFrame(()=>{w(x),p(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:v.map((E,x)=>d.jsx("div",{className:"star",style:{left:E.left,top:E.top,animationDelay:E.animationDelay,opacity:E.opacity}},x))})]}),d.jsx("div",{className:"layer layer-clouds",children:C.map((E,x)=>d.jsx("div",{className:`cloud cloud-${x+1}`,style:{position:"absolute",left:E.left,top:E.top,width:E.width,height:E.height,background:E.color,opacity:E.opacity,borderRadius:E.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${E.duration}s linear ${E.delay}s infinite`}},x))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((E,x)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${E},300 ${E-20},250 ${E-15},250 ${E-30},200 ${E-25},200 ${E-40},150 ${E+40},150 ${E+25},200 ${E+30},200 ${E+15},250 ${E+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:E-5,y:"280",width:"10",height:"20",fill:"#111827"})]},x))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const Vm=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium"],Zm=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square"],xf=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window"],Nf=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Uf=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Hf=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Rf=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],Km=v=>{switch(v){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(wm,{className:"door-handle ring",size:12});case"star":return d.jsx(Nm,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},Jm=v=>{if(v===0)return null;const w=v===4||v===6?2:4,C=v===4?2:v===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${w}, 1fr)`,gridTemplateRows:`repeat(${C}, 1fr)`},children:Array.from({length:v}).map((p,E)=>d.jsx("div",{className:"window-pane"},E))})},$m=v=>{if(v==="none")return null;switch(v){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},km=v=>{if(v==="none")return null;switch(v){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function Wm({windowNumber:v,isActive:w,isOpened:C,isExactMatch:p,onClick:E}){const x=zl.useRef(null),q=v===17,P=()=>{q&&x.current&&(x.current.currentTime=0,x.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},U=Vm[v-1],T=Zm[v-1],O=w&&!C||w&&p?"window-glow-intense":"",K=new Set([11,6,12,16,25]).has(v),yl=K?"window-round":T,_l=xf[v-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<v;Sl++)xf[Sl]==="door"?Ul++:bl++;const El=Nf[(Ul-1)%Nf.length],sl=Uf[(bl-1)%Uf.length],Tl=Hf[(Ul-1)%Hf.length],Vl=Rf[(bl-1)%Rf.length];return d.jsx("div",{className:`calendar-window ${U} ${yl} ${O} ${C?"window-opened":""} ${w?"window-active":"window-inactive"}`,onClick:E,onMouseEnter:P,children:_l?d.jsxs("div",{className:`door-element ${El.type}`,children:[$m(Tl),d.jsx("div",{className:`door-frame frame-${El.frame}`,children:d.jsxs("div",{className:`door-panel wood-${El.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[El.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[Km(El.handle),El.hasKeyhole&&d.jsx(Om,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:v})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${U}`,children:[km(Vl),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${sl.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:K?"50%":void 0,overflow:"hidden"},children:[Jm(sl.panes),sl.shape==="arched"&&d.jsx("div",{className:"window-arch"}),q&&d.jsx(Mm,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:v})]}),sl.hasSill&&d.jsx("div",{className:"window-sill",children:sl.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function Fm({windowNumber:v,message:w,onClose:C}){return d.jsx("div",{className:"modal-overlay",onClick:C,children:d.jsx("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:C,children:d.jsx(qf,{size:24})}),v!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",v]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:w}})]})})})}function Qi(v){const w=new Date(Date.UTC(2025,11,19,21,0,0,0)),C=v-1;return new Date(w.getTime()+C*24*60*60*1e3)}function Li(v,w){return w.getTime()>=v.getTime()}function mo(v,w){const C=new Date(v);C.setUTCHours(0,0,0,0);const p=new Date(w);return p.setUTCHours(0,0,0,0),C.getTime()===p.getTime()}const Im="/advent/assets/muerte-DfSvC3Z-.jpg",Pm="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",eh="/advent/assets/Ofrenda-DDd9dlHK.jpg",nh="/advent/assets/kolumbia-DUKl5Drs.webp",ah="/advent/assets/kolumb2--JWazZNY.webp",ih="/advent/assets/melhior-5oqVeQRz.webp",uh="/advent/assets/shir-CPxmcAyu.jpg",sh="/advent/assets/markes-DHTR6R5s.jpg",oh="/advent/assets/tolkin-Bkb1qdyy.jpg",rh="/advent/assets/tolkin1-Gt7VHXrl.jpg",ch="/advent/assets/berry-BayIKnFN.jpg",gh="/advent/assets/berry1-aZtyDiG8.jpg",fh="/advent/assets/gvatemala1-C3fdq1S5.jpg",ph="/advent/assets/graves-B4Ep0a2x.jpg",dh="/advent/assets/carpet1-BHoBEQUm.jpg",mh="/advent/assets/airsnakes-BtpaN7a0.jpg",hh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",vh="/advent/assets/brazil1-C1nzNzga.webp",bh="/advent/assets/ethiopia-CfI92xpA.jpg",Sh="/advent/assets/goats-B1iHvHcl.jpg",zh="/advent/assets/rabanda-ClmJ6Exb.jpg",_h="/advent/assets/honduras-DTj2TRgE.jpg",Th="/advent/assets/honduras1-BfVuI_LD.jpg",Ah="/advent/assets/resp-DBSDT0A7.png",Mh="/advent/assets/cicoriy-DL-J_EKv.webp",Eh="/advent/assets/carob-DDo_E6jz.jpg",wh="/advent/assets/tonka-CaSKsR3p.webp",jh="/advent/assets/kardamon-D-LlmV-v.webp",Oh="/advent/assets/mem1-Coiz1JZ3.jpg",Dh="/advent/assets/cafe-DrSeHG9j.jpg",Ch="/advent/assets/yerevan1-0r9N0UnH.jpg",xh="/advent/assets/yerevan2-fQnNyY8p.jpg",Nh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Hh="/advent/assets/bears-BwIhEuov.jpg",Rh="/advent/assets/ararat-DAhBMtll.jpg",Bh="/advent/assets/jazzve-DliHyYYl.jpg",qh="/advent/assets/abc-C__8usP9.webp",Yh="/advent/assets/noy-KD54xzv8.jpg",Xh="/advent/assets/poss-LSCreopJ.jpg",Gh="/advent/assets/poss1-CPSySb8a.jpg",Qh="/advent/assets/poss2-4TAHhBM7.jpg",Lh="/advent/assets/poss3-BBe7PtjI.jpg",Vh="/advent/assets/poss4-B0yE7kHZ.jpg",Zh="/advent/assets/poss5-DtHf0aUR.jpg",Kh="/advent/assets/possa-mom-BPlrTPcT.jpg",Jh="/advent/assets/possa-mom1-D9ySRpWd.jpg",$h="/advent/assets/poss-and-oposs-DDSg4YaG.webp",kh="/advent/assets/possaKnowl-CYkQIhVz.jpg",Wh="/advent/assets/thief-CoIDv1iT.jpg",Fh="/advent/assets/smile-1-5jdl68.jpg",Ih="/advent/assets/merch-DdoKdpQb.jpg",Ph="/advent/assets/merch1-CtZos-AO.jpg",l0="/advent/assets/cammomile-Byca6E_e.jpg",t0="/advent/assets/cham-tea-BPAncxo6.jpg",e0="/advent/assets/chamomile1-DbctfrkQ.jpg",n0="/advent/assets/chamomile2-k1NNuBaK.jpg",a0="/advent/assets/juniper-r5wxtBRx.jpg",i0="/advent/assets/juniper1-BWoP6YHZ.jpg",u0="/advent/assets/juniper3-BXCLBj8d.jpg",s0="/advent/assets/juniperTea-0KTJdRf4.jpg",o0="/advent/assets/cham-sci-ixEH2xhc.jpg",r0="/advent/assets/juniperTattoo-Drp4YpCt.jpg",c0="/advent/assets/chamomileTattoo-BGNh6NOB.jpg",g0="/advent/assets/juniper-sci-hXzXrr9H.jpg",f0="/advent/assets/jun-sci2-zIGUP1FK.jpg",p0="/advent/assets/solovki-B95fDwav.webp",d0="/advent/assets/solovki1-u3Varh4x.webp",m0="/advent/assets/solovki2-D19kpuou.jpg",h0="/advent/assets/coffeCard1-DNW-HsaJ.webp",y0="/advent/assets/coffeCard2-BNxhtL4t.webp",v0="/advent/assets/coffeCard3-AyYO0wak.webp",b0="/advent/assets/coffeCard4-DI2_0NqK.webp",S0="/advent/assets/coffeCard5-dUEpTs6X.webp",z0="/advent/assets/coffeCard6-BDW-PLix.webp",_0="/advent/assets/atitlan-dYAI5eYf.jpg",T0="/advent/assets/atitlan1-C5ZSs572.jpg",A0="/advent/assets/guatemala8-Bi5KoB48.jpg",M0="/advent/assets/guatemalaCorn-ClR7vTSk.jpg",E0="/advent/assets/guatemalaTkan-DTKRCwUa.jpg",w0="/advent/assets/himalaya1-nN0t50Ma.avif",j0="/advent/assets/pinkSalt-BizDWWT4.jpg",O0="/advent/assets/saltMeme-Dq0p8Dwq.jpg",D0="/advent/assets/matcha11-CE8SBYA1.jpg",C0="/advent/assets/matcha-C8bXd3OR.jpg",x0="/advent/assets/matcha2-6Pc5CGop.jpg",N0="/advent/assets/matcha3-PqMaWA5u.jpg",U0="/advent/assets/matchaOld-BdH0N0Hr.jpg",H0="/advent/assets/matchaOld1-d7pxtrP4.jpg",R0="/advent/assets/harvest-DiJhXofV.jpg",B0="/advent/assets/harvest1-f7uXoVQt.jpg",q0="/advent/assets/matchaColors-CePGvb-v.jpg",Y0="/advent/assets/cat1-CteOJfo2.jpg",X0="/advent/assets/cat2-CI2WaIbw.jpg",G0="/advent/assets/cat3-wi61L9Ty.jpg",Q0="/advent/assets/cat4-BQJa7vAE.jpg",L0="/advent/assets/cat5-D7xwVjOS.jpg",V0="/advent/assets/piterMeme-ClYb6GkP.jpg",Z0="/advent/assets/monk-D17MXC2B.jpg",K0="/advent/assets/nyMeme1-6GOagR6o.jpg",J0="/advent/assets/nyMeme2-7Telpurx.jpg",$0="/advent/assets/nyMeme4-BNwb-aPZ.jpg",k0="/advent/assets/nyMeme5-mCJoC8cu.jpg",W0="/advent/assets/nyMeme6-BndRKfA9.jpg",F0="/advent/assets/nyMeme7-CBDPmv-H.jpg",I0="/advent/assets/nyMeme8-Dq-5p2Cs.jpg",P0="/advent/assets/nyMeme9-DtlbkQI_.jpg",l1="/advent/assets/gerb1-BxSMTsFR.jpg",t1="/advent/assets/gerb2-B_qnuNFN.jpg",e1="/advent/assets/okMeme--p34fXU_.jpg",n1="/advent/assets/unk-BB2m3QLz.jpg",a1="/advent/assets/u70-DIKlKj5y.jpg",i1="/advent/assets/map-BdUX3X-y.jpg",u1="/advent/assets/chasha-Ctu2v-xB.jpg",s1="/advent/assets/ft0-COvPvYCF.jpg",o1="/advent/assets/ft1-BgWi-igf.jpg",r1="/advent/assets/ft2-ctNJAFEu.jpg",c1="/advent/assets/cheese-BSnE0RhA.jpg",g1="/advent/assets/cheese2-DJbQoeGH.jpg",f1="/advent/assets/reishi-DE1KAqzF.webp",c={muerte:Im,katrina:Pm,pink:lh,rese:th,Ofrenda:eh,kolumb2:ah,kolumbia:nh,melhior:ih,shir:uh,markes:sh,tolkin:oh,tolkin1:rh,berries:ch,berries1:gh,gvatemala1:fh,graves:ph,carpet1:dh,airsnake2:mh,fish:hh,fish1:yh,brazil1:vh,ethiopia:bh,goats:Sh,rabanda:zh,honduras:_h,honduras1:Th,resp:Ah,cicoriy:Mh,carob:Eh,tonka:wh,kardamon:jh,mem:Oh,cafe:Dh,yerevan1:Ch,yerevan2:xh,yerevan3:Nh,lion:Uh,bears:Hh,ararat:Rh,yazzve:Bh,abc:qh,noy:Yh,poss:Xh,possaMom:Kh,possaMom1:Jh,possOrOposs:$h,possaKnowl:kh,poss1:Gh,poss2:Qh,poss3:Lh,poss4:Vh,poss5:Zh,thief:Wh,smile:Fh,merch:Ih,merch1:Ph,cammomile:l0,chamomile2:n0,chamomileTea:t0,chamomile1:e0,juniper:a0,juniper1:i0,juniper3:u0,juniperTea:s0,chamSci:o0,juniperTattoo:r0,chamomileTattoo:c0,juniperSci:g0,juniperSci1:f0,solovki:p0,solovki1:d0,solovki2:m0,coffeCard1:h0,coffeCard2:y0,coffeCard3:v0,coffeCard4:b0,coffeCard5:S0,coffeCard6:z0,atitlan:_0,atitlan1:T0,guatemala8:A0,guatemalaCorn:M0,guatemalaTkan:E0,himalaya:w0,pinkSalt:j0,saltMeme:O0,harvest:R0,harvest1:B0,matcha:C0,matcha2:x0,matcha3:N0,matcha11:D0,matchaOld:U0,matchaOld1:H0,matchaColors:q0,cat1:Y0,cat2:X0,cat3:G0,cat4:Q0,cat5:L0,piterMeme:V0,monk:Z0,nyMeme1:K0,nyMeme2:J0,nyMeme4:$0,nyMeme5:k0,nyMeme6:W0,nyMeme7:F0,nyMeme8:I0,nyMeme9:P0,gerb1:l1,gerb2:t1,okMeme:e1,chasha:u1,map:i1,u70:a1,unk:n1,ft0:s1,ft1:o1,ft2:r1,cheese:c1,cheese1:g1,reishi:f1},p1=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${c.muerte}" />
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
<img src="${c.Ofrenda}" />
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
       <img src="${c.katrina}" />
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
      <img src="${c.muerte}" />
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

      <img src="${c.Ofrenda}" />

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
       <img src="${c.katrina}" />
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
  <img src="${c.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${c.rese}" />
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
  <img src="${c.pink}" />
  <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
  <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
  <img src="${c.rese}" />
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
    <img src="${c.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение — ведь Baggins = фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название! ☕🎉</p>
    <img src="${c.tolkin}" />
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
    <img src="${c.melhior}" />
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
      <img src="${c.tolkin1}" />
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
    <img src="${c.kolumbia}" />
    <p><strong>География:</strong> Анды, высота 1200-2000 м, вулканическая почва, два сезона дождей = урожай круглый год!</p>
    
    <p><strong>Вкус:</strong> Сбалансированный, средняя кислотность, карамель, орехи, чистый профиль. <strong>"Безопасный выбор"</strong> — почти всегда вкусно!</p>
    
    <p><strong>100% Арабика:</strong> Колумбия не выращивает робусту по закону! Только арабика.</p>
    
    <h3>Габриэль Гарсиа Маркес и кофе ☕📖</h3>
    <p><strong>Габо</strong> (как его называли в Колумбии) родился в <strong>Аракатаке</strong> — маленьком городке в зоне банановых плантаций. Но кофе был везде!</p>
    <img src="${c.markes}" />
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
    <img src="${c.kolumb2}" />
    <p>Качественное зерно → даже без кофеина сохраняется вкус!</p>
    
    <h3>Мельхиоровая ложечка 🥄✨</h3>
    <p><strong>Мельхиор</strong> — сплав меди + никель. В СССР = "народное серебро" (дешевле настоящего, но красиво!).</p>
    <img src="${c.melhior}" />
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
    <img src="${c.gvatemala1}" />
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
    <img src="${c.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${c.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее Зёбры и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${c.carpet1}" />
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
    <img src="${c.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${c.berries1}" />
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
    <img src="${c.gvatemala1}" />
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
    <img src="${c.graves}" />
    <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
    <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
    <img src="${c.airsnake2}" />
    <ul>
      <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
      <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее тебя и даже меня.</li>
      <li>Запускают на цветных кладбищах!</li>
    </ul>

    <h3>Semana Santa: Ковры из опилок! 🎨</h3>
    <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
    <img src="${c.carpet1}" />
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
    <img src="${c.berries}" />
    <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
    <img src="${c.berries1}" />
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
    <img src="${c.fish}" />
    
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

    <img src="${c.fish1}" />
    
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

    <img src="${c.brazil1}" />
    
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
    <img src="${c.ethiopia}" />
    <p><strong>Легенда Калди (IX век):</strong></p>
    <ul>
      <li>Пастух Калди заметил: его козы ели красные ягоды → танцевали всю ночь!</li>
      <li>Монахи попробовали → не спали на молитвах</li>
      <li>Сначала сожгли как "дьявольские ягоды"</li>
      <li>Но запах был так хорош, что решили заваривать!</li>
    </ul>
    <p>Между прочим, есть фотопруф:</p>
    <img src="${c.goats}" />
    
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
<img src="${c.rabanda}" />
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
    <img src="${c.fish}" />
    
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

    <img src="${c.fish1}" />
    
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

    <img src="${c.brazil1}" />
    
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
    <img src="${c.rabanda}" />

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
    <img src="${c.honduras}" />
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
    <img src="${c.resp}" />
    
    <p><strong>6 кофейных регионов:</strong></p>
    <ul>
      <li><strong>Copán</strong> — западный, у границы с Гватемалой, шоколад + карамель.</li>
      <li><strong>Opalaca</strong> — высокогорный, сбалансированный.</li>
      <li><strong>Montecillos</strong> — центральный, фруктовый, цитрусовый.</li>
      <li><strong>Comayagua</strong> — винная кислотность.</li>
      <li><strong>Agalta</strong> — восточный, тропические фрукты.</li>
      <li><strong>El Paraíso</strong> — у границы с Никарагуа, сладкий, мягкий.</li>
    </ul>
    <img src="${c.honduras1}" />
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
    <img src="${c.mem}" />
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
    <img src="${c.cicoriy}" />
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
    <img src="${c.cafe}" />
    
    <p><strong>Вкус:</strong> Древесный, ореховый, землистый. Вяжущий (танины!).</p>
    
    <p><strong>Проблема:</strong> Нужно вымачивать жёлуди (убрать танины), иначе горько и токсично.</p>
    
    <h4>4. Кэроб — шоколадный заменитель 🍫</h4>
    <p><strong>Что это:</strong> Порошок из стручков рожкового дерева (Средиземноморье).</p>
    <img src="${c.carob}" />
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
    <img src="${c.tonka}" />
    <p><strong>⚠️ Важно:</strong> Содержат кумарин (в больших дозах токсичен). В США запрещены в еде с 1954! В Европе разрешены в микродозах. В твоём стике — безопасная доза!</p>
    
    <h4>7. Зелёный кардамон — королева специй 👑</h4>
    <p><strong>Что это:</strong> Специя из семейства имбирных (Индия).</p>
    <img src="${c.kardamon}" />
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
    <img src="${c.mem}" />
  `},{day:7,date:"2025-12-26",tanya_gift:"Армянский детский растворимый кофе",zebra_gift:"Армянский детский растворимый кофе",tanya_bonus:"Зефир в виде кошачьей лапки",zebra_bonus:"Зефир в виде кошачьей лапки",title:"Ереван — город, в который я влюбилась",tanya_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${c.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${c.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${c.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${c.bears}" />
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
    <img src="${c.yazzve}" />
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
    <img src="${c.ararat}" />
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
    <img src="${c.abc}" />
    
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
    <img src="${c.noy}" />
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
<img src="${c.yerevan3}" />
`,zebra_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${c.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${c.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${c.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${c.bears}" />
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
    <img src="${c.yazzve}" />
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
    <img src="${c.ararat}" />
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
    <img src="${c.abc}" />
    
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
    <img src="${c.noy}" />
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
<img src="${c.yerevan3}" />
`},{day:8,date:"2025-12-27",tanya_gift:'Какао "Опоссум" (пьёт и больше не орёт)',zebra_gift:'Какао "Опоссум" (пьёт и больше не орёт)',tanya_bonus:"Маршмеллоу (маленькие)",zebra_bonus:"Маршмеллоу (маленькие)",title:"Опоссумы, какао и философия",tanya_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${c.possaMom}" />
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
    <img src="${c.smile}" />
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
    <img src="${c.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${c.possOrOposs}" />
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
      <img src="${c.poss}" />
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
    <img src="${c.thief}" />

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
<img src="${c.possaKnowl}" />
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
<img src="${c.merch1}" />
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
      <img src="${c.poss1}" />
      <img src="${c.poss2}" />
      <img src="${c.poss3}" />
      <img src="${c.poss4}" />
      <img src="${c.poss5}" />
      <img src="${c.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `,zebra_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${c.possaMom}" />
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
    <img src="${c.smile}" />
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
    <img src="${c.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${c.possOrOposs}" />
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
      <img src="${c.poss}" />
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
    <img src="${c.thief}" />

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
<img src="${c.possaKnowl}" />
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
<img src="${c.merch1}" />
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
      <img src="${c.poss1}" />
      <img src="${c.poss2}" />
      <img src="${c.poss3}" />
      <img src="${c.poss4}" />
      <img src="${c.poss5}" />
      <img src="${c.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `},{day:9,date:"2025-12-28",tanya_gift:"Чай ромашковый",zebra_gift:"Чай ромашковый",tanya_bonus:"Твикс имбирный",zebra_bonus:"Твикс имбирный",title:"Ромашковый чай за 1000 рублей",tanya_message:`
      <p><strong>Ромашковый чай</strong> — напиток, который недавно был в центе московских обсуждений 🌼☕💸</p>
      
      <h3>История про чай за 1000 рублей</h3>
      <p>Оченью 2025 года в Кофемании поллитра ромшкового чая продавали почти за косарь. "Кипяток для избранных", писали в обзорах.</p>
      <img src="${c.chamomileTea}" />
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
      <img src="${c.chamomile1}" />
      <p><strong>История:</strong></p>
      <ul>
        <li><strong>Древний Египет:</strong> Посвящали ромашку богу солнца Ра, лечили лихорадку.</li>
        <li><strong>Древний Рим:</strong> Солдаты пили ромашковый чай перед битвой (успокоение, хотя казалось бы).</li>
        <li><strong>Средневековье:</strong> "Растение-целитель" — от всего (за неимением подорожника, не иначе).</li>
      </ul>
      <img src="${c.cammomile}" />
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
<img src="${c.chamSci}" />
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

      <img src="${c.chamomile2}" />
      <h3>Твикс имбирный 🍪</h3>
      <p><strong>Имбирное печенье</strong> + карамель + шоколад = праздничный вкус!</p>
      
      <p><strong>Имбирь + шоколад</strong> — древнее сочетание. Ацтеки добавляли имбирь в <em>xocolātl</em> (горячий шоколад) для воинов.</p>
      <img src="${c.chamomileTattoo}" />
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
      <img src="${c.juniperTea}" />
      <p>У тебя <strong>рабочее воскресенье перед Новым годом</strong>. Тяжело. Все отдыхают, а ты работаешь (напоминает тебе сочувствующая юбездуховная нейронка).</p>

      <p>Надеемся (мы с нейронкой), что можжевельник и имбирь в твоём чае (окей, имбирь в печеньке в твоем limit edition Твиксе, если ты не съела его раньше, а я не перепутала и это) придали тебе сил! ☕💪</p>

      <p><strong>Можжевельник — что это:</strong></p>
<ul>
  <li>Ягоды можжевелового куста (хвойное растение).</li>
  <li>На самом деле это не ягоды, а <strong>шишкоягоды</strong> (модифицированные шишки!).</li>
  <li>Тёмно-синие, с восковым налётом.</li>
  <li>Вкус: хвойный, смолистый, немного сладковатый.</li>
</ul>
<img src="${c.juniper}" />
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
<img src="${c.juniper1}" />
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
  <img src="${c.juniper3}" />

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
    <img src="${c.juniperSci}" />
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
    <img src="${c.juniperSci1}" />
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
    <img src="${c.juniperTattoo}" />

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
    <img src="${c.coffeCard4}" />
    <p><strong>Откуда:</strong> Колумбия (зёрна) → Соловецкий монастырь (обжарка) → твоя чашка</p>
    <p><strong>Кто обжаривал:</strong> Монахи Соловецкого монастыря!</p>
    <p><strong>Как:</strong> С молитвой! (серьёзно, так написано в карточке товара)</p>
    <h3>Соловецкий монастырь — внезапный кофе на краю света 🏔️</h3>
    <img src="${c.solovki2}" />
    <p><strong>Где:</strong></p>
    <ul>
      <li>Соловецкие острова, Белое море</li>
      <li>Архангельская область, Россия</li>
      <li>160 км от Полярного круга!</li>
      <li>Добраться можно только на корабле или вертолёте</li>
    </ul>
    <img src="${c.coffeCard1}" />
    <p><strong>Монастырь:</strong></p>
    <ul>
      <li>Основан в 1436 году</li>
      <li>Один из самых известных монастырей России</li>
      <li>ЮНЕСКО World Heritage</li>
      <li>Крепость, духовный центр, история</li>
    </ul>
    <img src="${c.solovki1}" />
    <p><strong>Тёмная история:</strong></p>
    <ul>
      <li>1920-1939 — ГУЛАГ (Соловецкий лагерь особого назначения)</li>
      <li>Монастырь закрыли, монахов репрессировали</li>
      <li>Один из первых советских лагерей</li>
      <li>1990 — монастырь возродился</li>
    </ul>
    
    <h3>Братский кофе — монашеский бизнес ☕</h3>
    <img src="${c.coffeCard3}" />
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Социальное предприятие монастыря</li>
      <li>Монахи покупают зёрна (Колумбия, Бразилия, Эфиопия, др.)</li>
      <li>Обжаривают на Соловках</li>
      <li>Продают под брендом "Братский кофе"</li>
      <li><strong>"Сделано с молитвой!"</strong> — буквально написано на упаковке 😄</li>
    </ul>
    <img src="${c.solovki}" />
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
    <img src="${c.coffeCard2}" />
    <p><strong>Что это значит:</strong></p>
    <p>Монахи молятся во время обжарки. Буквально: "Господи, благослови тех, кто выпьет этот кофе!" Ну, в лучшей из версий.</p>
    <p>Представь: монахи на Белом море, на краю света, в древнем монастыре обжаривают колумбийский кофе c молитвой. В XXI веке. Чтобы потом продавать на Озоне втридорога. Это прекрасно и абсурдно одновременно!</p>
    <img src="${c.coffeCard5}" />
    
    
    <h3>Как заваривать:</h3>
    <ol>
      <li>Смели зёрна (средний помол для турки/френч-пресса, мелкий для эспрессо)</li>
      <li>Завари любым способом</li>
      <li><strong>Перед первым глотком:</strong> Скажи "Спасибо, монахи!" 😄</li>
      <li>Наслаждайся</li>
    </ol>
    <img src="${c.coffeCard6}" />
    <h3>Гималайская соль — снова! 🧂</h3>
    
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    <p>Я решила, что к такому кофе нужно что-то суровое.</p> 
    <img src="${c.himalaya}" />
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй заварить кофе и добавь крошечную щепотку соли</li>
    </ul>
    <img src="${c.pinkSalt}" />
    <p><strong>Можно просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${c.saltMeme}" />
    
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
    <img src="${c.atitlan1}" />
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
    <img src="${c.guatemala8}" />
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
    <img src="${c.atitlan}" />
    <p><strong>Озеро Атитлан:</strong></p>
    <ul>
      <li>Одно из красивейших озёр мира</li>
      <li>В кратере вулкана!</li>
      <li>Вокруг — 3 вулкана (Atitlán, Tolimán, San Pedro)</li>
      <li>Деревни майя на берегу</li>
      <li>Кофе растёт на склонах → знаменитый регион Atitlán</li>
    </ul>
    
    <p><strong>Майя — живая культура:</strong></p>
    <img src="${c.guatemalaCorn}" />
    <ul>
      <li>40%+ населения Гватемалы — майя</li>
      <li>Говорят на языках майя (23 языка!)</li>
      <li>Носят традиционную одежду (huipil — расшитые блузы)</li>
      <li>Хранят традиции (церемонии, календарь майя, ремёсла)</li>
      <li>Многие работают на кофейных плантациях</li>
    </ul>
    
    <img src="${c.guatemalaTkan}" />
    <p><strong>Текстиль майя:</strong></p>
    <ul>
      <li>Знаменитые ткани — яркие, с геометрическими узорами</li>
      <li>Каждая деревня — свой стиль!</li>
      <li>По одежде можно определить, откуда человек</li>
      <li>Ткут на поясных станках (backstrap loom) — древняя техника</li>
    </ul>
    
    <h3>Гималайская соль — снова! 🧂</h3>
    <img src="${c.himalaya}" />
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй: завари декаф, добавь крошечную щепотку соли</li>
    </ul>
    <img src="${c.pinkSalt}" />
    <p><strong>Можно и просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${c.saltMeme}" />
    
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
    <img src="${c.matcha}" />
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
    <img src="${c.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${c.harvest1}" />
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
    <img src="${c.matchaOld1}" />
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
    <img src="${c.matcha11}" />
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
    <img src="${c.harvest}" />
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
    <img src="${c.matchaColors}" />
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
    <img src="${c.matcha2}" />
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
    <img src="${c.monk}" />
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
    <img src="${c.matcha3}" />
    
    
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
    <img src="${c.matcha}" />
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
    <img src="${c.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${c.harvest1}" />
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
    <img src="${c.matchaOld1}" />
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
    <img src="${c.matcha11}" />
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
    <img src="${c.harvest}" />
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
    <img src="${c.matchaColors}" />
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
    <img src="${c.matcha2}" />
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
    <img src="${c.monk}" />
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
    <img src="${c.matcha3}" />
    
    
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
    <img src="${c.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${c.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${c.cat5}" />
    <p><strong>МК:</strong>Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${c.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${c.cat1}" />
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
    <img src="${c.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${c.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${c.cat5}" />
    <p><strong>МК:</strong> Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${c.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${c.cat1}" />
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
    <img src="${c.piterMeme}" />
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
    <img src="${c.nyMeme4}" />
    <p>Пережили 2025 и встретили 2026. Время - это социальный конструкт, но что-то героическое в этом безусловно есть.</p>
    <p>Сегодня не нужно никуда бежать, и даже не нужно начинать новую жизнь. Выпить кофе будет в самый раз)</p>
    <img src="${c.nyMeme2}" />
    <h3>Инструкция на сегодня 📋</h3>
    
    <p><strong>1. Подышать.</strong></p>
    <ul>
      <li>Глубокий вдох (4 счёта)</li>
      <li>Задержка (4 счёта)</li>
      <li>Выдох (6 счётов)</li>
      <li>Повтори 3 раза</li>
    </ul>
    <img src="${c.nyMeme6}" />
    <p><strong>2. Никаких "надо":</strong></p>
    <ul>
      <li>Не строй планы на год</li>
      <li>Не чувствуй вину за лежание</li>
      <li>Сегодня — день безделья. Официально.</li>
    </ul>
    
    <img src="${c.nyMeme7}" />
    
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
    <img src="${c.nyMeme8}" />
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
    <img src="${c.nyMeme9}" />
    
    <p><strong>Как работает:</strong></p>
    <ul>
      <li>Нетканый материал плотно прилегает к коже и создаёт "окклюзию" (закрывает поры) → ингредиенты проникают глубже</li>
      <li>Сыворотка не испаряется (как крем на воздухе)</li>
      <li>15-20 минут → кожа впитывает максимум</li>
      <li>20 минут принудительного отдыха!</li>
    </ul>
    
    <p><strong>Философия маски:</strong> Нельзя говорить, смотреть в телефон (ага-ага, думаю я. Никакая чертова маска не будет указывать мне, что делать!..). Можно только лежать и дышать. Это медитация под видом ухода за кожей.</p>
    
    <img src="${c.nyMeme5}" />
    <h3>Послание на 1 января 💌</h3>
    
    <p>Ты дожила до 2026. Сегодня не нужно быть "новой тобой": старая ты прекрасна, она дошла досюда.</p>
    
    <p>Найди солнечный квадрат на полу (помнишь Миссис Кошку?). Ляг в него. Полежи, и съешь хлеба с селедкой.</p>
    
    <p>С Новым годом. Ты молодец. 🐱</p>
    <img src="${c.nyMeme1}" />
  `,zebra_message:`
    <h3>1 января. И вот мы здесь 🌅</h3>
    <img src="${c.nyMeme4}" />
    <p>Пережили 2025 и встретили 2026. Время - это социальный конструкт, но что-то героическое в этом безусловно есть.</p>
    <p>Сегодня не нужно никуда бежать, и даже не нужно начинать новую жизнь. Выпить кофе будет в самый раз)</p>
    <img src="${c.nyMeme2}" />
    <h3>Инструкция на сегодня 📋</h3>
    
    <p><strong>1. Подышать.</strong></p>
    <ul>
      <li>Глубокий вдох (4 счёта)</li>
      <li>Задержка (4 счёта)</li>
      <li>Выдох (6 счётов)</li>
      <li>Повтори 3 раза</li>
    </ul>
    <img src="${c.nyMeme6}" />
    <p><strong>2. Никаких "надо":</strong></p>
    <ul>
      <li>Не строй планы на год</li>
      <li>Не чувствуй вину за лежание</li>
      <li>Сегодня — день безделья, официально.</li>
    </ul>
    
    <img src="${c.nyMeme7}" />
    
    
    <p>Совершенно не помню, какой у тебя сегодня кофе. У меня вообще нет уверенности, что это кофе - но если так, то можно запивать им какой-нибудь оливье)</p>
    <p>Хотя бы в тканевой маске для волос я уверена! Итак:</p>
    
    <h3>Тканевая маска для лица 🎭</h3>
    <img src="${c.nyMeme8}" />
    <ul>
      <li>Маска из <strong>нетканого материала</strong> (спанлейс — смесь вискозы и полиэстера)</li>
      <li>Пропитана сывороткой с активными компонентами</li>
      <li><strong>1980, Южная Корея</strong> — компания <strong>Nox Bellcow</strong> создала технологию пропитки нетканого материала</li>
      <li>1990-2000-е: бум в Азии (Корея, Япония)</li>
      <li>2010-е: весь мир помешался на K-beauty → маски везде!</li>
      <li>Сейчас: мировой рынок $1+ миллиард в год</li>
    </ul>
    <img src="${c.nyMeme9}" />
    
    <p><strong>Как работает:</strong></p>
    <ul>
      <li>Нетканый материал плотно прилегает к коже и создаёт "окклюзию" (закрывает поры) → ингредиенты проникают глубже</li>
      <li>Сыворотка не испаряется (как крем на воздухе)</li>
      <li>15-20 минут → кожа впитывает максимум</li>
      <li>20 минут принудительного отдыха!</li>
    </ul>
    
    <p><strong>Философия маски:</strong> Нельзя говорить, смотреть в телефон (ага-ага, думаю я. Никакая чертова маска не будет указывать мне, что делать!..). Можно только лежать и дышать. Это медитация под видом ухода за кожей.</p>
    
    <img src="${c.nyMeme5}" />
    <h3>Послание на 1 января 💌</h3>
    
    <p>Ты дожила до 2026. Сегодня не нужно быть "новой тобой": старая ты прекрасна, она дошла досюда.</p>
    
    <p>Найди солнечный квадрат на полу (помнишь Миссис Кошку?). Ляг в него. Полежи, и съешь какого-нибудь серпуховского оливье.</p>
    
    <p>С Новым годом. Ты молодец. 🐱</p>
    <img src="${c.nyMeme1}" />
  `},{day:14,date:"2026-01-02",tanya_gift:"Кофе с картами Таро (заряженный на удачу и любовь)",tanya_uxazher_gift:"Кофе с картами Таро (заряженный на удачу и любовь)",zebra_gift:"Какао с грибами (рейши, чага или львиная грива)",tanya_bonus:"Маленькая шоколадка",zebra_bonus:"Маленькая шоколадка",title:"Серпухов, гадания и грибы",tanya_message:`
    <h3>Внезапно мы встретимся в Серпухове (и будем пить кофе, потому что ну а как). Что нейронки имеют сказать про Серпухов? 🦚🐒</h3>
    
    <p><strong>Серпухов — коротко:</strong></p>
    <ul>
      <li>Московская область, ~130 км от Москвы, город на реке Наре</li>
      <li>Основан в 1339 году (почти 700 лет!). Древний кремль (XIV век), монастыри, купеческие дома</li>
    </ul>
    
    <h4>1. Павлин на гербе — история и советская версия 🦚⚙️</h4>
    <img src="${c.gerb1}" />
    <p><strong>Герб времен Российской Империи:</strong></p>
    <ul>
      <li>Окольничий Михаил Колупаев в 1691 году привёз в дар Высоцкому монастырю в Серпухове пару павлинов — самца и самку. Как у них там шли дела - вопрос спорный.</li>
      <li>Петр I предпринимает попытку выдать городам и дворянам централизованные гербы по европейскому образцу. Франциск Санти (итальянец) — обер-герольдмейстер, обрабатывает опросники, и цепляется за упоминание, что в серпуховском монастыре водятся павлины. Оп, новый герб.</li>
      <img src="${c.okMeme}" />
      <li>Екатерина II проводит свою губернскую реформу и заодно повторяет историю с гербами, но более организрванно. Павлин несколько меняет очертания.</li>
      <li>Советская власть решила: павлин — буржуазный символ! Но его каким-то чудом решили оставить.</li>
      <li>Зато добавили шестеренку (предположительно от трактора) и <strong>стилизованное изображение синхрофазотрона!!</strong> — Протвинского ускорителя частиц.</li>
</ul>
<img src="${c.gerb2}" />

<p><strong>Протвинский ускоритель У-70:</strong></p>
<ul>
  <li>В соседнем Протвино (10 км от Серпухова) в 1967 построили <strong>ускоритель частиц У-70</strong> - этакий адронный коллайдер своего времени. Кольцо длиной 1,5 км, энергия 70 ГэВ, что бы это ни значило.</li>
  <img src="${c.u70}" />
  <li><strong>С 1967 по 1972 — самый мощный ускоритель в мире!</strong>. На нём открывали новые частицы, изучали структуру материи. Символ научной мощи СССР</li>
  <li>Потом, правда, начали приделывать к нему кольцо ускорителя побольше, но СССР (и даньги) закончились раньше, а большой адронный коллайдер окончательно похоронил проект.</li>
  <img src="${c.map}" />
  <li>После распада СССР вернули исторический герб 1730 года: павлин снова на месте. Ускоритель исчез с герба (эх), хотя продолжает работать в Протвино.</li>
  <li>Советский герб просуществовал 23 года (1969-1992)</li>
  <li>Царский герб — 262 года (1730-1992 с перерывом) и продолжает</li>
  <li><strong>Павлин: 1, Ускоритель частиц: 0</strong></li>
  <li>Но ускоритель работает до сих пор — и это круто! ⚛️</li>
  <li>Правда, его большой нерожденный брат - протон-протонного коллайдер УНК - так и не был запущен и стоит тут же в виде изрядной сети разрушающихся тоннелей.</li>
  <img src="${c.unk}" />
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
    <img src="${c.chasha}" />
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
    <img src="${c.cheese}" />
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
    <img src="${c.cheese1}" />
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
    <img src="${c.ft0}" />
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
    <img src="${c.ft1}" />
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
    <img src="${c.ft2}" />
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
    <img src="${c.gerb1}" />
    <p><strong>Герб времен Российской Империи:</strong></p>
    <ul>
      <li>Окольничий Михаил Колупаев в 1691 году привёз в дар Высоцкому монастырю в Серпухове пару павлинов — самца и самку. Как у них там шли дела - вопрос спорный.</li>
      <li>Петр I предпринимает попытку выдать городам и дворянам централизованные гербы по европейскому образцу. Франциск Санти (итальянец) — обер-герольдмейстер, обрабатывает опросники, и цепляется за упоминание, что в серпуховском монастыре водятся павлины. Оп, новый герб.</li>
      <img src="${c.okMeme}" />
      <li>Екатерина II проводит свою губернскую реформу и заодно повторяет историю с гербами, но более организрванно. Павлин несколько меняет очертания.</li>
      <li>Советская власть решила: павлин — буржуазный символ! Но его каким-то чудом решили оставить.</li>
      <li>Зато добавили шестеренку (предположительно от трактора) и <strong>стилизованное изображение синхрофазотрона!!</strong> — Протвинского ускорителя частиц.</li>
</ul>
<img src="${c.gerb2}" />

<p><strong>Протвинский ускоритель У-70:</strong></p>
<ul>
  <li>В соседнем Протвино (10 км от Серпухова) в 1967 построили <strong>ускоритель частиц У-70</strong> - этакий адронный коллайдер своего времени. Кольцо длиной 1,5 км, энергия 70 ГэВ, что бы это ни значило.</li>
  <img src="${c.u70}" />
  <li><strong>С 1967 по 1972 — самый мощный ускоритель в мире!</strong>. На нём открывали новые частицы, изучали структуру материи. Символ научной мощи СССР</li>
  <li>Потом, правда, начали приделывать к нему кольцо ускорителя побольше, но СССР (и даньги) закончились раньше, а большой адронный коллайдер окончательно похоронил проект.</li>
  <img src="${c.map}" />
  <li>После распада СССР вернули исторический герб 1730 года: павлин снова на месте. Ускоритель исчез с герба (эх), хотя продолжает работать в Протвино.</li>
  <li><strong>Павлин: 1, Ускоритель частиц: 0</strong></li>
  <li>Но ускоритель работает до сих пор — и это круто! ⚛️ Правда, его большой нерожденный брат - протон-протонного коллайдер УНК - так и не был запущен и стоит тут же в виде изрядной сети разрушающихся тоннелей.</li>
  <img src="${c.unk}" />
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
    <img src="${c.chasha}" />
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
    <img src="${c.cheese}" />
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
    <img src="${c.cheese1}" />
    <p><strong>Какие сыры лучше с кофе:</strong></p>
    <ul>
      <li><strong>Мягкие:</strong> Бри, камамбер (сливочность смягчает кофе)</li>
      <li><strong>Полутвёрдые:</strong> Гауда, эдам (сладковатые, ореховые)</li>
      <li><strong>Твёрдые:</strong> Пармезан, грана падано (солёные, умами — контраст!)</li>
      <li><strong>Голубые:</strong> Рокфор, горгонзола (смелый выбор!)</li>
    </ul>
    
    <hr>
    <img src="${c.ft0}" />
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
    <img src="${c.ft1}" />
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
    <img src="${c.ft2}" />
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
    <img src="${c.reishi}" />
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
  `},{day:15,date:"2026-01-03",tanya_gift:"Camera Obscura",zebra_gift:"Camera Obscura (х2)",tanya_bonus:"Сироп Острый мёд",zebra_bonus:"Сироп Острый мёд (х2)",title:"День 14",tanya_message:"<p>Подарок: Camera Obscura</p><p>Бонус: Сироп Острый мёд</p>",zebra_message:"<p>Подарок: Camera Obscura (х2)</p><p>Бонус: Сироп Острый мёд (х2)</p>"},{day:16,date:"2026-01-04",tanya_gift:"Сова-концентрат",zebra_gift:"Сова-концентрат",tanya_bonus:"Сироп Мисо-карамель",zebra_bonus:"Сироп Мисо-карамель",title:"День 15",tanya_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>",zebra_message:"<p>Подарок: Сова-концентрат</p><p>Бонус: Сироп Мисо-карамель</p>"},{day:17,date:"2026-01-05",tanya_gift:"Yellow Submarine",zebra_gift:"Yellow Submarine (х2)",tanya_bonus:"Протеиновое печенье",zebra_bonus:"Протеиновое печенье (х2)",title:"День 16",tanya_message:"<p>Подарок: Yellow Submarine</p><p>Бонус: Протеиновое печенье</p>",zebra_message:"<p>Подарок: Yellow Submarine (х2)</p><p>Бонус: Протеиновое печенье (х2)</p>"},{day:18,date:"2026-01-06",tanya_gift:"Турецкий Mehmet Efendi",zebra_gift:"Турецкий Mehmet Efendi (х2)",tanya_bonus:"Матча латте",zebra_bonus:"Матча латте (х2)",title:"День 17",tanya_message:"<p>Подарок: Турецкий Mehmet Efendi</p><p>Бонус: Матча латте</p>",zebra_message:"<p>Подарок: Турецкий Mehmet Efendi (х2)</p><p>Бонус: Матча латте (х2)</p>"},{day:19,date:"2026-01-07",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Шоколадная бомбочка",zebra_bonus:"Шоколадная бомбочка (х2)",title:"День 18",tanya_message:"<p>Подарок: Круиз: по-венски</p><p>Бонус: Шоколадная бомбочка</p>",zebra_message:"<p>Подарок: Круиз: по-индийски (х2)</p><p>Бонус: Шоколадная бомбочка (х2)</p>"},{day:20,date:"2026-01-08",tanya_gift:"Mitsumoto японский",zebra_gift:"Mitsumoto японский (х2)",tanya_bonus:"Рождественский чай",zebra_bonus:"Рождественский чай (х2)",title:"День 19",tanya_message:"<p>Подарок: Mitsumoto японский</p><p>Бонус: Рождественский чай</p>",zebra_message:"<p>Подарок: Mitsumoto японский (х2)</p><p>Бонус: Рождественский чай (х2)</p>"},{day:21,date:"2026-01-09",tanya_gift:"KopiCat Вьетнам",zebra_gift:"KopiCat Вьетнам (х2)",tanya_bonus:"Экзотический чай",zebra_bonus:"Экзотический чай (х2)",title:"День 20",tanya_message:"<p>Подарок: KopiCat Вьетнам</p><p>Бонус: Экзотический чай</p>",zebra_message:"<p>Подарок: KopiCat Вьетнам (х2)</p><p>Бонус: Экзотический чай (х2)</p>"},{day:22,date:"2026-01-10",tanya_gift:"Армянский 3в1",zebra_gift:"Армянский 3в1 (х2)",tanya_bonus:"Миндальный Вкусвилл",zebra_bonus:"Миндальный Вкусвилл (х2)",title:"День 21",tanya_message:"<p>Подарок: Армянский 3в1</p><p>Бонус: Миндальный Вкусвилл</p>",zebra_message:"<p>Подарок: Армянский 3в1 (х2)</p><p>Бонус: Миндальный Вкусвилл (х2)</p>"},{day:23,date:"2026-01-11",tanya_gift:"Декаф Питерский",zebra_gift:"Декаф IL DA DA MA",tanya_bonus:"Чай-книга гаданий",zebra_bonus:"Чай-книга гаданий (х2)",title:"День 22",tanya_message:"<p>Подарок: Декаф Питерский</p><p>Бонус: Чай-книга гаданий</p>",zebra_message:"<p>Подарок: Декаф IL DA DA MA</p><p>Бонус: Чай-книга гаданий (х2)</p>"},{day:24,date:"2026-01-12",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:"<p>Подарок: Декаф Гватемала</p><p>Бонус: Бэггинс кофе</p>",zebra_message:"<p>Подарок: Декаф Мексика (х2)</p><p>Бонус: Бэггинс кофе (х2)</p>"},{day:25,date:"2026-01-13",tanya_gift:"Рождественский с лошадью",zebra_gift:"Рождественский с лошадью (х2)",tanya_bonus:"Какао с опоссумом",zebra_bonus:"Какао с опоссумом (х2)",title:"День 24",tanya_message:"<p>Подарок: Рождественский с лошадью</p><p>Бонус: Какао с опоссумом</p>",zebra_message:"<p>Подарок: Рождественский с лошадью (х2)</p><p>Бонус: Какао с опоссумом (х2)</p>"},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function d1({currentDate:v,userName:w}){const[C,p]=zl.useState(()=>Yf()),[E,x]=zl.useState(null),q=O=>{const N=Qi(O);if(Li(N,v)&&(x(O),!C.has(O))){const K=Xm(O);p(K)}},P=()=>{x(null)},T=[...Array.from({length:25},(O,N)=>N+1)].sort((O,N)=>{const K=Qi(O),yl=Qi(N),vl=mo(K,v),_l=mo(yl,v),Ul=C.has(O),bl=C.has(N),El=Li(K,v),sl=Li(yl,v),Tl=El&&!Ul,Vl=sl&&!bl,Sl=vl&&Ul,J=_l&&bl,Rl=!El,$l=!sl,Ft=Ul&&!vl&&El,pt=bl&&!_l&&sl;return Tl&&!Vl?-1:!Tl&&Vl?1:Tl&&Vl?O-N:Sl&&!J?-1:!Sl&&J?1:Rl&&!$l?-1:!Rl&&$l?1:Rl&&$l||Ft&&pt?O-N:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:T.map(O=>{const N=Qi(O),K=Li(N,v),yl=C.has(O),vl=mo(N,v);return d.jsx(Wm,{windowNumber:O,isActive:K,isOpened:yl,isExactMatch:vl,onClick:()=>q(O)},O)})}),E!==null&&(()=>{const O=p1[E-1],N=w==="Tanya"?O.tanya_message:w==="Zebra"?O.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(Fm,{windowNumber:E,message:N,onClose:P})})()]})}function m1(){const[v,w]=zl.useState(!1),C=zl.useRef(null),[p,E]=zl.useState(!1);zl.useEffect(()=>{const q=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",q),q==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),E(!0))},[]),zl.useEffect(()=>{if(!p)return;const q=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),w(!0),E(!1),window.removeEventListener("pointerdown",q),window.removeEventListener("keydown",q)};return window.addEventListener("pointerdown",q,{once:!0}),window.addEventListener("keydown",q,{once:!0}),()=>{window.removeEventListener("pointerdown",q),window.removeEventListener("keydown",q)}},[p]),zl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",v,"ref=",C.current),!C.current)return;const q=C.current;if(v)console.debug("[AudioControls] calling play()"),q.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),E(!0))});else{console.debug("[AudioControls] calling pause()");try{q.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[v]);const x=()=>{const q=!v;console.debug("[AudioControls] toggleMusic ->",q),w(q),localStorage.setItem("musicEnabled",String(q))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${v?"audio-active":""}`,onClick:x,title:"Toggle Christmas Music",children:[v?d.jsx(Hm,{size:20}):d.jsx(Bm,{size:20}),d.jsx(Cm,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:C,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:q=>console.error("[AudioControls] audio event: error",q)})]})}function h1(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((v,w)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},w))})}const y1=()=>new Date;function v1(){const[v,w]=zl.useState(()=>{const x=localStorage.getItem("adventCalendarUser");return x==="Tanya"||x==="Zebra"?x:(localStorage.clear(),null)}),[C,p]=zl.useState(y1),E=x=>{localStorage.clear(),w(x),localStorage.setItem("adventCalendarUser",x)};return zl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);p(U)}catch(q){console.error("Failed to fetch current date:",q),p(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx(Lm,{}),d.jsx(h1,{}),d.jsx(m1,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(Qm,{userName:v,onUserSelect:E}),d.jsx(d1,{currentDate:C,userName:v})]})]})}vm.createRoot(document.getElementById("root")).render(d.jsx(zl.StrictMode,{children:d.jsx(v1,{})}));
