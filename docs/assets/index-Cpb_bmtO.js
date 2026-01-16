(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))p(A);new MutationObserver(A=>{for(const x of A)if(x.type==="childList")for(const Y of x.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&p(Y)}).observe(document,{childList:!0,subtree:!0});function O(A){const x={};return A.integrity&&(x.integrity=A.integrity),A.referrerPolicy&&(x.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?x.credentials="include":A.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(A){if(A.ep)return;A.ep=!0;const x=O(A);fetch(A.href,x)}})();var ur={exports:{}},zn={};var bf;function um(){if(bf)return zn;bf=1;var v=Symbol.for("react.transitional.element"),M=Symbol.for("react.fragment");function O(p,A,x){var Y=null;if(x!==void 0&&(Y=""+x),A.key!==void 0&&(Y=""+A.key),"key"in A){x={};for(var P in A)P!=="key"&&(x[P]=A[P])}else x=A;return A=x.ref,{$$typeof:v,type:p,key:Y,ref:A!==void 0?A:null,props:x}}return zn.Fragment=M,zn.jsx=O,zn.jsxs=O,zn}var Sf;function cm(){return Sf||(Sf=1,ur.exports=um()),ur.exports}var d=cm(),cr={exports:{}},L={};var wf;function gm(){if(wf)return L;wf=1;var v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Z=Symbol.iterator;function yl(g){return g===null||typeof g!="object"?null:(g=Z&&g[Z]||g["@@iterator"],typeof g=="function"?g:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zl=Object.assign,Ul={};function bl(g,j,D){this.props=g,this.context=j,this.refs=Ul,this.updater=D||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(g,j){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,j,"setState")},bl.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Al(){}Al.prototype=bl.prototype;function ol(g,j,D){this.props=g,this.context=j,this.refs=Ul,this.updater=D||vl}var _l=ol.prototype=new Al;_l.constructor=ol,zl(_l,bl.prototype),_l.isPureReactComponent=!0;var $l=Array.isArray;function Sl(){}var k={H:null,A:null,T:null,S:null},Hl=Object.prototype.hasOwnProperty;function Kl(g,j,D){var H=D.ref;return{$$typeof:v,type:g,key:j,ref:H!==void 0?H:null,props:D}}function Ft(g,j){return Kl(g.type,j,g.props)}function pt(g){return typeof g=="object"&&g!==null&&g.$$typeof===v}function Jl(g){var j={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(D){return j[D]})}var Ti=/\/+/g;function xt(g,j){return typeof g=="object"&&g!==null&&g.key!=null?Jl(""+g.key):j.toString(36)}function Tt(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Sl,Sl):(g.status="pending",g.then(function(j){g.status==="pending"&&(g.status="fulfilled",g.value=j)},function(j){g.status==="pending"&&(g.status="rejected",g.reason=j)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function w(g,j,D,H,Q){var K=typeof g;(K==="undefined"||K==="boolean")&&(g=null);var nl=!1;if(g===null)nl=!0;else switch(K){case"bigint":case"string":case"number":nl=!0;break;case"object":switch(g.$$typeof){case v:case M:nl=!0;break;case E:return nl=g._init,w(nl(g._payload),j,D,H,Q)}}if(nl)return Q=Q(g),nl=H===""?"."+xt(g,0):H,$l(Q)?(D="",nl!=null&&(D=nl.replace(Ti,"$&/")+"/"),w(Q,j,D,"",function(Ce){return Ce})):Q!=null&&(pt(Q)&&(Q=Ft(Q,D+(Q.key==null||g&&g.key===Q.key?"":(""+Q.key).replace(Ti,"$&/")+"/")+nl)),j.push(Q)),1;nl=0;var Zl=H===""?".":H+":";if($l(g))for(var Ml=0;Ml<g.length;Ml++)H=g[Ml],K=Zl+xt(H,Ml),nl+=w(H,j,D,K,Q);else if(Ml=yl(g),typeof Ml=="function")for(g=Ml.call(g),Ml=0;!(H=g.next()).done;)H=H.value,K=Zl+xt(H,Ml++),nl+=w(H,j,D,K,Q);else if(K==="object"){if(typeof g.then=="function")return w(Tt(g),j,D,H,Q);throw j=String(g),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return nl}function C(g,j,D){if(g==null)return g;var H=[],Q=0;return w(g,H,"","",function(K){return j.call(D,K,Q++)}),H}function G(g){if(g._status===-1){var j=g._result;j=j(),j.then(function(D){(g._status===0||g._status===-1)&&(g._status=1,g._result=D)},function(D){(g._status===0||g._status===-1)&&(g._status=2,g._result=D)}),g._status===-1&&(g._status=0,g._result=j)}if(g._status===1)return g._result.default;throw g._result}var rl=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},fl={map:C,forEach:function(g,j,D){C(g,function(){j.apply(this,arguments)},D)},count:function(g){var j=0;return C(g,function(){j++}),j},toArray:function(g){return C(g,function(j){return j})||[]},only:function(g){if(!pt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return L.Activity=N,L.Children=fl,L.Component=bl,L.Fragment=O,L.Profiler=A,L.PureComponent=ol,L.StrictMode=p,L.Suspense=U,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,L.__COMPILER_RUNTIME={__proto__:null,c:function(g){return k.H.useMemoCache(g)}},L.cache=function(g){return function(){return g.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(g,j,D){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=zl({},g.props),Q=g.key;if(j!=null)for(K in j.key!==void 0&&(Q=""+j.key),j)!Hl.call(j,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&j.ref===void 0||(H[K]=j[K]);var K=arguments.length-2;if(K===1)H.children=D;else if(1<K){for(var nl=Array(K),Zl=0;Zl<K;Zl++)nl[Zl]=arguments[Zl+2];H.children=nl}return Kl(g.type,Q,H)},L.createContext=function(g){return g={$$typeof:Y,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:x,_context:g},g},L.createElement=function(g,j,D){var H,Q={},K=null;if(j!=null)for(H in j.key!==void 0&&(K=""+j.key),j)Hl.call(j,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Q[H]=j[H]);var nl=arguments.length-2;if(nl===1)Q.children=D;else if(1<nl){for(var Zl=Array(nl),Ml=0;Ml<nl;Ml++)Zl[Ml]=arguments[Ml+2];Q.children=Zl}if(g&&g.defaultProps)for(H in nl=g.defaultProps,nl)Q[H]===void 0&&(Q[H]=nl[H]);return Kl(g,K,Q)},L.createRef=function(){return{current:null}},L.forwardRef=function(g){return{$$typeof:P,render:g}},L.isValidElement=pt,L.lazy=function(g){return{$$typeof:E,_payload:{_status:-1,_result:g},_init:G}},L.memo=function(g,j){return{$$typeof:_,type:g,compare:j===void 0?null:j}},L.startTransition=function(g){var j=k.T,D={};k.T=D;try{var H=g(),Q=k.S;Q!==null&&Q(D,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Sl,rl)}catch(K){rl(K)}finally{j!==null&&D.types!==null&&(j.types=D.types),k.T=j}},L.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},L.use=function(g){return k.H.use(g)},L.useActionState=function(g,j,D){return k.H.useActionState(g,j,D)},L.useCallback=function(g,j){return k.H.useCallback(g,j)},L.useContext=function(g){return k.H.useContext(g)},L.useDebugValue=function(){},L.useDeferredValue=function(g,j){return k.H.useDeferredValue(g,j)},L.useEffect=function(g,j){return k.H.useEffect(g,j)},L.useEffectEvent=function(g){return k.H.useEffectEvent(g)},L.useId=function(){return k.H.useId()},L.useImperativeHandle=function(g,j,D){return k.H.useImperativeHandle(g,j,D)},L.useInsertionEffect=function(g,j){return k.H.useInsertionEffect(g,j)},L.useLayoutEffect=function(g,j){return k.H.useLayoutEffect(g,j)},L.useMemo=function(g,j){return k.H.useMemo(g,j)},L.useOptimistic=function(g,j){return k.H.useOptimistic(g,j)},L.useReducer=function(g,j,D){return k.H.useReducer(g,j,D)},L.useRef=function(g){return k.H.useRef(g)},L.useState=function(g){return k.H.useState(g)},L.useSyncExternalStore=function(g,j,D){return k.H.useSyncExternalStore(g,j,D)},L.useTransition=function(){return k.H.useTransition()},L.version="19.2.3",L}var zf;function hr(){return zf||(zf=1,cr.exports=gm()),cr.exports}var wl=hr(),gr={exports:{}},_n={},fr={exports:{}},pr={};var _f;function fm(){return _f||(_f=1,(function(v){function M(w,C){var G=w.length;w.push(C);l:for(;0<G;){var rl=G-1>>>1,fl=w[rl];if(0<A(fl,C))w[rl]=C,w[G]=fl,G=rl;else break l}}function O(w){return w.length===0?null:w[0]}function p(w){if(w.length===0)return null;var C=w[0],G=w.pop();if(G!==C){w[0]=G;l:for(var rl=0,fl=w.length,g=fl>>>1;rl<g;){var j=2*(rl+1)-1,D=w[j],H=j+1,Q=w[H];if(0>A(D,G))H<fl&&0>A(Q,D)?(w[rl]=Q,w[H]=G,rl=H):(w[rl]=D,w[j]=G,rl=j);else if(H<fl&&0>A(Q,G))w[rl]=Q,w[H]=G,rl=H;else break l}}return C}function A(w,C){var G=w.sortIndex-C.sortIndex;return G!==0?G:w.id-C.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;v.unstable_now=function(){return x.now()}}else{var Y=Date,P=Y.now();v.unstable_now=function(){return Y.now()-P}}var U=[],_=[],E=1,N=null,Z=3,yl=!1,vl=!1,zl=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,Al=typeof clearTimeout=="function"?clearTimeout:null,ol=typeof setImmediate<"u"?setImmediate:null;function _l(w){for(var C=O(_);C!==null;){if(C.callback===null)p(_);else if(C.startTime<=w)p(_),C.sortIndex=C.expirationTime,M(U,C);else break;C=O(_)}}function $l(w){if(zl=!1,_l(w),!vl)if(O(U)!==null)vl=!0,Sl||(Sl=!0,Jl());else{var C=O(_);C!==null&&Tt($l,C.startTime-w)}}var Sl=!1,k=-1,Hl=5,Kl=-1;function Ft(){return Ul?!0:!(v.unstable_now()-Kl<Hl)}function pt(){if(Ul=!1,Sl){var w=v.unstable_now();Kl=w;var C=!0;try{l:{vl=!1,zl&&(zl=!1,Al(k),k=-1),yl=!0;var G=Z;try{t:{for(_l(w),N=O(U);N!==null&&!(N.expirationTime>w&&Ft());){var rl=N.callback;if(typeof rl=="function"){N.callback=null,Z=N.priorityLevel;var fl=rl(N.expirationTime<=w);if(w=v.unstable_now(),typeof fl=="function"){N.callback=fl,_l(w),C=!0;break t}N===O(U)&&p(U),_l(w)}else p(U);N=O(U)}if(N!==null)C=!0;else{var g=O(_);g!==null&&Tt($l,g.startTime-w),C=!1}}break l}finally{N=null,Z=G,yl=!1}C=void 0}}finally{C?Jl():Sl=!1}}}var Jl;if(typeof ol=="function")Jl=function(){ol(pt)};else if(typeof MessageChannel<"u"){var Ti=new MessageChannel,xt=Ti.port2;Ti.port1.onmessage=pt,Jl=function(){xt.postMessage(null)}}else Jl=function(){bl(pt,0)};function Tt(w,C){k=bl(function(){w(v.unstable_now())},C)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(w){w.callback=null},v.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Hl=0<w?Math.floor(1e3/w):5},v.unstable_getCurrentPriorityLevel=function(){return Z},v.unstable_next=function(w){switch(Z){case 1:case 2:case 3:var C=3;break;default:C=Z}var G=Z;Z=C;try{return w()}finally{Z=G}},v.unstable_requestPaint=function(){Ul=!0},v.unstable_runWithPriority=function(w,C){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var G=Z;Z=w;try{return C()}finally{Z=G}},v.unstable_scheduleCallback=function(w,C,G){var rl=v.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?rl+G:rl):G=rl,w){case 1:var fl=-1;break;case 2:fl=250;break;case 5:fl=1073741823;break;case 4:fl=1e4;break;default:fl=5e3}return fl=G+fl,w={id:E++,callback:C,priorityLevel:w,startTime:G,expirationTime:fl,sortIndex:-1},G>rl?(w.sortIndex=G,M(_,w),O(U)===null&&w===O(_)&&(zl?(Al(k),k=-1):zl=!0,Tt($l,G-rl))):(w.sortIndex=fl,M(U,w),vl||yl||(vl=!0,Sl||(Sl=!0,Jl()))),w},v.unstable_shouldYield=Ft,v.unstable_wrapCallback=function(w){var C=Z;return function(){var G=Z;Z=C;try{return w.apply(this,arguments)}finally{Z=G}}}})(pr)),pr}var Tf;function pm(){return Tf||(Tf=1,fr.exports=fm()),fr.exports}var dr={exports:{}},Vl={};var jf;function dm(){if(jf)return Vl;jf=1;var v=hr();function M(U){var _="https://react.dev/errors/"+U;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+U+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(){}var p={d:{f:O,r:function(){throw Error(M(522))},D:O,C:O,L:O,m:O,X:O,S:O,M:O},p:0,findDOMNode:null},A=Symbol.for("react.portal");function x(U,_,E){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:N==null?null:""+N,children:U,containerInfo:_,implementation:E}}var Y=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,_){if(U==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Vl.createPortal=function(U,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(M(299));return x(U,_,null,E)},Vl.flushSync=function(U){var _=Y.T,E=p.p;try{if(Y.T=null,p.p=2,U)return U()}finally{Y.T=_,p.p=E,p.d.f()}},Vl.preconnect=function(U,_){typeof U=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,p.d.C(U,_))},Vl.prefetchDNS=function(U){typeof U=="string"&&p.d.D(U)},Vl.preinit=function(U,_){if(typeof U=="string"&&_&&typeof _.as=="string"){var E=_.as,N=P(E,_.crossOrigin),Z=typeof _.integrity=="string"?_.integrity:void 0,yl=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?p.d.S(U,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:N,integrity:Z,fetchPriority:yl}):E==="script"&&p.d.X(U,{crossOrigin:N,integrity:Z,fetchPriority:yl,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Vl.preinitModule=function(U,_){if(typeof U=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=P(_.as,_.crossOrigin);p.d.M(U,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&p.d.M(U)},Vl.preload=function(U,_){if(typeof U=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,N=P(E,_.crossOrigin);p.d.L(U,E,{crossOrigin:N,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Vl.preloadModule=function(U,_){if(typeof U=="string")if(_){var E=P(_.as,_.crossOrigin);p.d.m(U,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else p.d.m(U)},Vl.requestFormReset=function(U){p.d.r(U)},Vl.unstable_batchedUpdates=function(U,_){return U(_)},Vl.useFormState=function(U,_,E){return Y.H.useFormState(U,_,E)},Vl.useFormStatus=function(){return Y.H.useHostTransitionStatus()},Vl.version="19.2.3",Vl}var Af;function mm(){if(Af)return dr.exports;Af=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(M){console.error(M)}}return v(),dr.exports=dm(),dr.exports}var Mf;function hm(){if(Mf)return _n;Mf=1;var v=pm(),M=hr(),O=mm();function p(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function x(l){var t=l,i=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(i=t.return),l=t.return;while(l)}return t.tag===3?i:null}function Y(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(x(l)!==l)throw Error(p(188))}function _(l){var t=l.alternate;if(!t){if(t=x(l),t===null)throw Error(p(188));return t!==l?null:l}for(var i=l,e=t;;){var n=i.return;if(n===null)break;var a=n.alternate;if(a===null){if(e=n.return,e!==null){i=e;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===i)return U(n),l;if(a===e)return U(n),t;a=a.sibling}throw Error(p(188))}if(i.return!==e.return)i=n,e=a;else{for(var s=!1,o=n.child;o;){if(o===i){s=!0,i=n,e=a;break}if(o===e){s=!0,e=n,i=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===i){s=!0,i=a,e=n;break}if(o===e){s=!0,e=a,i=n;break}o=o.sibling}if(!s)throw Error(p(189))}}if(i.alternate!==e)throw Error(p(190))}if(i.tag!==3)throw Error(p(188));return i.stateNode.current===i?l:t}function E(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=E(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,Z=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),zl=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Al=Symbol.for("react.consumer"),ol=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),Hl=Symbol.for("react.lazy"),Kl=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function Jl(l){return l===null||typeof l!="object"?null:(l=pt&&l[pt]||l["@@iterator"],typeof l=="function"?l:null)}var Ti=Symbol.for("react.client.reference");function xt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ti?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case zl:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case $l:return"Suspense";case Sl:return"SuspenseList";case Kl:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case ol:return l.displayName||"Context";case Al:return(l._context.displayName||"Context")+".Consumer";case _l:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case k:return t=l.displayName||null,t!==null?t:xt(l.type)||"Memo";case Hl:t=l._payload,l=l._init;try{return xt(l(t))}catch{}}return null}var Tt=Array.isArray,w=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},rl=[],fl=-1;function g(l){return{current:l}}function j(l){0>fl||(l.current=rl[fl],rl[fl]=null,fl--)}function D(l,t){fl++,rl[fl]=l.current,l.current=t}var H=g(null),Q=g(null),K=g(null),nl=g(null);function Zl(l,t){switch(D(K,t),D(Q,l),D(H,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Gg(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Gg(t),l=Lg(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}j(H),D(H,l)}function Ml(){j(H),j(Q),j(K)}function Ce(l){l.memoizedState!==null&&D(nl,l);var t=H.current,i=Lg(t,l.type);t!==i&&(D(Q,l),D(H,i))}function Tn(l){Q.current===l&&(j(H),j(Q)),nl.current===l&&(j(nl),vn._currentValue=G)}var $a,yr;function ji(l){if($a===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);$a=t&&t[1]||"",yr=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$a+l+yr}var Va=!1;function Za(l,t){if(!l||Va)return"";Va=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(b){var y=b}Reflect.construct(l,[],T)}else{try{T.call()}catch(b){y=b}l.call(T.prototype)}}else{try{throw Error()}catch(b){y=b}(T=l())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=e.DetermineComponentFrameRoot(),s=a[0],o=a[1];if(s&&o){var u=s.split(`
`),h=o.split(`
`);for(n=e=0;e<u.length&&!u[e].includes("DetermineComponentFrameRoot");)e++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(e===u.length||n===h.length)for(e=u.length-1,n=h.length-1;1<=e&&0<=n&&u[e]!==h[n];)n--;for(;1<=e&&0<=n;e--,n--)if(u[e]!==h[n]){if(e!==1||n!==1)do if(e--,n--,0>n||u[e]!==h[n]){var S=`
`+u[e].replace(" at new "," at ");return l.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",l.displayName)),S}while(1<=e&&0<=n);break}}}finally{Va=!1,Error.prepareStackTrace=i}return(i=l?l.displayName||l.name:"")?ji(i):""}function Xf(l,t){switch(l.tag){case 26:case 27:case 5:return ji(l.type);case 16:return ji("Lazy");case 13:return l.child!==t&&t!==null?ji("Suspense Fallback"):ji("Suspense");case 19:return ji("SuspenseList");case 0:case 15:return Za(l.type,!1);case 11:return Za(l.type.render,!1);case 1:return Za(l.type,!0);case 31:return ji("Activity");default:return""}}function vr(l){try{var t="",i=null;do t+=Xf(l,i),i=l,l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ka=Object.prototype.hasOwnProperty,Ka=v.unstable_scheduleCallback,Ja=v.unstable_cancelCallback,Gf=v.unstable_shouldYield,Lf=v.unstable_requestPaint,et=v.unstable_now,Qf=v.unstable_getCurrentPriorityLevel,br=v.unstable_ImmediatePriority,Sr=v.unstable_UserBlockingPriority,jn=v.unstable_NormalPriority,$f=v.unstable_LowPriority,wr=v.unstable_IdlePriority,Vf=v.log,Zf=v.unstable_setDisableYieldValue,Ee=null,nt=null;function It(l){if(typeof Vf=="function"&&Zf(l),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Ee,l)}catch{}}var at=Math.clz32?Math.clz32:Jf,kf=Math.log,Kf=Math.LN2;function Jf(l){return l>>>=0,l===0?32:31-(kf(l)/Kf|0)|0}var An=256,Mn=262144,Cn=4194304;function Ai(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function En(l,t,i){var e=l.pendingLanes;if(e===0)return 0;var n=0,a=l.suspendedLanes,s=l.pingedLanes;l=l.warmLanes;var o=e&134217727;return o!==0?(e=o&~a,e!==0?n=Ai(e):(s&=o,s!==0?n=Ai(s):i||(i=o&~l,i!==0&&(n=Ai(i))))):(o=e&~a,o!==0?n=Ai(o):s!==0?n=Ai(s):i||(i=e&~l,i!==0&&(n=Ai(i)))),n===0?0:t!==0&&t!==n&&(t&a)===0&&(a=n&-n,i=t&-t,a>=i||a===32&&(i&4194048)!==0)?t:n}function De(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wf(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zr(){var l=Cn;return Cn<<=1,(Cn&62914560)===0&&(Cn=4194304),l}function Wa(l){for(var t=[],i=0;31>i;i++)t.push(l);return t}function Oe(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Ff(l,t,i,e,n,a){var s=l.pendingLanes;l.pendingLanes=i,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=i,l.entangledLanes&=i,l.errorRecoveryDisabledLanes&=i,l.shellSuspendCounter=0;var o=l.entanglements,u=l.expirationTimes,h=l.hiddenUpdates;for(i=s&~i;0<i;){var S=31-at(i),T=1<<S;o[S]=0,u[S]=-1;var y=h[S];if(y!==null)for(h[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}i&=~T}e!==0&&_r(l,e,0),a!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=a&~(s&~t))}function _r(l,t,i){l.pendingLanes|=t,l.suspendedLanes&=~t;var e=31-at(t);l.entangledLanes|=t,l.entanglements[e]=l.entanglements[e]|1073741824|i&261930}function Tr(l,t){var i=l.entangledLanes|=t;for(l=l.entanglements;i;){var e=31-at(i),n=1<<e;n&t|l[e]&t&&(l[e]|=t),i&=~n}}function jr(l,t){var i=t&-t;return i=(i&42)!==0?1:Fa(i),(i&(l.suspendedLanes|t))!==0?0:i}function Fa(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ia(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Ar(){var l=C.p;return l!==0?l:(l=window.event,l===void 0?32:ff(l.type))}function Mr(l,t){var i=C.p;try{return C.p=l,t()}finally{C.p=i}}var Pt=Math.random().toString(36).slice(2),ql="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,$i="__reactContainer$"+Pt,Pa="__reactEvents$"+Pt,If="__reactListeners$"+Pt,Pf="__reactHandles$"+Pt,Cr="__reactResources$"+Pt,xe="__reactMarker$"+Pt;function ls(l){delete l[ql],delete l[Wl],delete l[Pa],delete l[If],delete l[Pf]}function Vi(l){var t=l[ql];if(t)return t;for(var i=l.parentNode;i;){if(t=i[$i]||i[ql]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(l=Jg(l);l!==null;){if(i=l[ql])return i;l=Jg(l)}return t}l=i,i=l.parentNode}return null}function Zi(l){if(l=l[ql]||l[$i]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ne(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(p(33))}function ki(l){var t=l[Cr];return t||(t=l[Cr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Rl(l){l[xe]=!0}var Er=new Set,Dr={};function Mi(l,t){Ki(l,t),Ki(l+"Capture",t)}function Ki(l,t){for(Dr[l]=t,l=0;l<t.length;l++)Er.add(t[l])}var lp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Or={},xr={};function tp(l){return ka.call(xr,l)?!0:ka.call(Or,l)?!1:lp.test(l)?xr[l]=!0:(Or[l]=!0,!1)}function Dn(l,t,i){if(tp(t))if(i===null)l.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+i)}}function On(l,t,i){if(i===null)l.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+i)}}function Nt(l,t,i,e){if(e===null)l.removeAttribute(i);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(i);return}l.setAttributeNS(t,i,""+e)}}function dt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Nr(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ip(l,t,i){var e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,a=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ts(l){if(!l._valueTracker){var t=Nr(l)?"checked":"value";l._valueTracker=ip(l,t,""+l[t])}}function Ur(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var i=t.getValue(),e="";return l&&(e=Nr(l)?l.checked?"true":"false":l.value),l=e,l!==i?(t.setValue(l),!0):!1}function xn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ep=/[\n"\\]/g;function mt(l){return l.replace(ep,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function is(l,t,i,e,n,a,s,o){l.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.type=s:l.removeAttribute("type"),t!=null?s==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+dt(t)):l.value!==""+dt(t)&&(l.value=""+dt(t)):s!=="submit"&&s!=="reset"||l.removeAttribute("value"),t!=null?es(l,s,dt(t)):i!=null?es(l,s,dt(i)):e!=null&&l.removeAttribute("value"),n==null&&a!=null&&(l.defaultChecked=!!a),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?l.name=""+dt(o):l.removeAttribute("name")}function Br(l,t,i,e,n,a,s,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(l.type=a),t!=null||i!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){ts(l);return}i=i!=null?""+dt(i):"",t=t!=null?""+dt(t):i,o||t===l.value||(l.value=t),l.defaultValue=t}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,l.checked=o?l.checked:!!e,l.defaultChecked=!!e,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(l.name=s),ts(l)}function es(l,t,i){t==="number"&&xn(l.ownerDocument)===l||l.defaultValue===""+i||(l.defaultValue=""+i)}function Ji(l,t,i,e){if(l=l.options,t){t={};for(var n=0;n<i.length;n++)t["$"+i[n]]=!0;for(i=0;i<l.length;i++)n=t.hasOwnProperty("$"+l[i].value),l[i].selected!==n&&(l[i].selected=n),n&&e&&(l[i].defaultSelected=!0)}else{for(i=""+dt(i),t=null,n=0;n<l.length;n++){if(l[n].value===i){l[n].selected=!0,e&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Hr(l,t,i){if(t!=null&&(t=""+dt(t),t!==l.value&&(l.value=t),i==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=i!=null?""+dt(i):""}function Rr(l,t,i,e){if(t==null){if(e!=null){if(i!=null)throw Error(p(92));if(Tt(e)){if(1<e.length)throw Error(p(93));e=e[0]}i=e}i==null&&(i=""),t=i}i=dt(t),l.defaultValue=i,e=l.textContent,e===i&&e!==""&&e!==null&&(l.value=e),ts(l)}function Wi(l,t){if(t){var i=l.firstChild;if(i&&i===l.lastChild&&i.nodeType===3){i.nodeValue=t;return}}l.textContent=t}var np=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yr(l,t,i){var e=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?e?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":e?l.setProperty(t,i):typeof i!="number"||i===0||np.has(t)?t==="float"?l.cssFloat=i:l[t]=(""+i).trim():l[t]=i+"px"}function qr(l,t,i){if(t!=null&&typeof t!="object")throw Error(p(62));if(l=l.style,i!=null){for(var e in i)!i.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="");for(var n in t)e=t[n],t.hasOwnProperty(n)&&i[n]!==e&&Yr(l,n,e)}else for(var a in t)t.hasOwnProperty(a)&&Yr(l,a,t[a])}function ns(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nn(l){return sp.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var as=null;function ss(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fi=null,Ii=null;function Xr(l){var t=Zi(l);if(t&&(l=t.stateNode)){var i=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(is(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=l;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var e=i[t];if(e!==l&&e.form===l.form){var n=e[Wl]||null;if(!n)throw Error(p(90));is(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<i.length;t++)e=i[t],e.form===l.form&&Ur(e)}break l;case"textarea":Hr(l,i.value,i.defaultValue);break l;case"select":t=i.value,t!=null&&Ji(l,!!i.multiple,t,!1)}}}var os=!1;function Gr(l,t,i){if(os)return l(t,i);os=!0;try{var e=l(t);return e}finally{if(os=!1,(Fi!==null||Ii!==null)&&(Sa(),Fi&&(t=Fi,l=Ii,Ii=Fi=null,Xr(t),l)))for(t=0;t<l.length;t++)Xr(l[t])}}function Ue(l,t){var i=l.stateNode;if(i===null)return null;var e=i[Wl]||null;if(e===null)return null;i=e[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(l=l.type,e=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!e;break l;default:l=!1}if(l)return null;if(i&&typeof i!="function")throw Error(p(231,t,typeof i));return i}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rs=!1;if(Bt)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch{rs=!1}var li=null,us=null,Un=null;function Lr(){if(Un)return Un;var l,t=us,i=t.length,e,n="value"in li?li.value:li.textContent,a=n.length;for(l=0;l<i&&t[l]===n[l];l++);var s=i-l;for(e=1;e<=s&&t[i-e]===n[a-e];e++);return Un=n.slice(l,1<e?1-e:void 0)}function Bn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Hn(){return!0}function Qr(){return!1}function Fl(l){function t(i,e,n,a,s){this._reactName=i,this._targetInst=n,this.type=e,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in l)l.hasOwnProperty(o)&&(i=l[o],this[o]=i?i(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Hn:Qr,this.isPropagationStopped=Qr,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=Fl(Ci),He=N({},Ci,{view:0,detail:0}),op=Fl(He),cs,gs,Re,Yn=N({},He,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Re&&(Re&&l.type==="mousemove"?(cs=l.screenX-Re.screenX,gs=l.screenY-Re.screenY):gs=cs=0,Re=l),cs)},movementY:function(l){return"movementY"in l?l.movementY:gs}}),$r=Fl(Yn),rp=N({},Yn,{dataTransfer:0}),up=Fl(rp),cp=N({},He,{relatedTarget:0}),fs=Fl(cp),gp=N({},Ci,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=Fl(gp),pp=N({},Ci,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),dp=Fl(pp),mp=N({},Ci,{data:0}),Vr=Fl(mp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vp[l])?!!t[l]:!1}function ps(){return bp}var Sp=N({},He,{key:function(l){if(l.key){var t=hp[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Bn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yp[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(l){return l.type==="keypress"?Bn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Bn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),wp=Fl(Sp),zp=N({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zr=Fl(zp),_p=N({},He,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Tp=Fl(_p),jp=N({},Ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=Fl(jp),Mp=N({},Yn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Cp=Fl(Mp),Ep=N({},Ci,{newState:0,oldState:0}),Dp=Fl(Ep),Op=[9,13,27,32],ds=Bt&&"CompositionEvent"in window,Ye=null;Bt&&"documentMode"in document&&(Ye=document.documentMode);var xp=Bt&&"TextEvent"in window&&!Ye,kr=Bt&&(!ds||Ye&&8<Ye&&11>=Ye),Kr=" ",Jr=!1;function Wr(l,t){switch(l){case"keyup":return Op.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pi=!1;function Np(l,t){switch(l){case"compositionend":return Fr(t);case"keypress":return t.which!==32?null:(Jr=!0,Kr);case"textInput":return l=t.data,l===Kr&&Jr?null:l;default:return null}}function Up(l,t){if(Pi)return l==="compositionend"||!ds&&Wr(l,t)?(l=Lr(),Un=us=li=null,Pi=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kr&&t.locale!=="ko"?null:t.data;default:return null}}var Bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ir(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Bp[l.type]:t==="textarea"}function Pr(l,t,i,e){Fi?Ii?Ii.push(e):Ii=[e]:Fi=e,t=Ma(t,"onChange"),0<t.length&&(i=new Rn("onChange","change",null,i,e),l.push({event:i,listeners:t}))}var qe=null,Xe=null;function Hp(l){Bg(l,0)}function qn(l){var t=Ne(l);if(Ur(t))return l}function lu(l,t){if(l==="change")return t}var tu=!1;if(Bt){var ms;if(Bt){var hs="oninput"in document;if(!hs){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),hs=typeof iu.oninput=="function"}ms=hs}else ms=!1;tu=ms&&(!document.documentMode||9<document.documentMode)}function eu(){qe&&(qe.detachEvent("onpropertychange",nu),Xe=qe=null)}function nu(l){if(l.propertyName==="value"&&qn(Xe)){var t=[];Pr(t,Xe,l,ss(l)),Gr(Hp,t)}}function Rp(l,t,i){l==="focusin"?(eu(),qe=t,Xe=i,qe.attachEvent("onpropertychange",nu)):l==="focusout"&&eu()}function Yp(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return qn(Xe)}function qp(l,t){if(l==="click")return qn(t)}function Xp(l,t){if(l==="input"||l==="change")return qn(t)}function Gp(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var st=typeof Object.is=="function"?Object.is:Gp;function Ge(l,t){if(st(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var i=Object.keys(l),e=Object.keys(t);if(i.length!==e.length)return!1;for(e=0;e<i.length;e++){var n=i[e];if(!ka.call(t,n)||!st(l[n],t[n]))return!1}return!0}function au(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function su(l,t){var i=au(l);l=0;for(var e;i;){if(i.nodeType===3){if(e=l+i.textContent.length,l<=t&&e>=t)return{node:i,offset:t-l};l=e}l:{for(;i;){if(i.nextSibling){i=i.nextSibling;break l}i=i.parentNode}i=void 0}i=au(i)}}function ou(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?ou(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function ru(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=xn(l.document);t instanceof l.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)l=t.contentWindow;else break;t=xn(l.document)}return t}function ys(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Lp=Bt&&"documentMode"in document&&11>=document.documentMode,le=null,vs=null,Le=null,bs=!1;function uu(l,t,i){var e=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;bs||le==null||le!==xn(e)||(e=le,"selectionStart"in e&&ys(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Le&&Ge(Le,e)||(Le=e,e=Ma(vs,"onSelect"),0<e.length&&(t=new Rn("onSelect","select",null,t,i),l.push({event:t,listeners:e}),t.target=le)))}function Ei(l,t){var i={};return i[l.toLowerCase()]=t.toLowerCase(),i["Webkit"+l]="webkit"+t,i["Moz"+l]="moz"+t,i}var te={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionrun:Ei("Transition","TransitionRun"),transitionstart:Ei("Transition","TransitionStart"),transitioncancel:Ei("Transition","TransitionCancel"),transitionend:Ei("Transition","TransitionEnd")},Ss={},cu={};Bt&&(cu=document.createElement("div").style,"AnimationEvent"in window||(delete te.animationend.animation,delete te.animationiteration.animation,delete te.animationstart.animation),"TransitionEvent"in window||delete te.transitionend.transition);function Di(l){if(Ss[l])return Ss[l];if(!te[l])return l;var t=te[l],i;for(i in t)if(t.hasOwnProperty(i)&&i in cu)return Ss[l]=t[i];return l}var gu=Di("animationend"),fu=Di("animationiteration"),pu=Di("animationstart"),Qp=Di("transitionrun"),$p=Di("transitionstart"),Vp=Di("transitioncancel"),du=Di("transitionend"),mu=new Map,ws="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ws.push("scrollEnd");function jt(l,t){mu.set(l,t),Mi(t,[l])}var Xn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ht=[],ie=0,zs=0;function Gn(){for(var l=ie,t=zs=ie=0;t<l;){var i=ht[t];ht[t++]=null;var e=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var a=ht[t];if(ht[t++]=null,e!==null&&n!==null){var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}a!==0&&hu(i,n,a)}}function Ln(l,t,i,e){ht[ie++]=l,ht[ie++]=t,ht[ie++]=i,ht[ie++]=e,zs|=e,l.lanes|=e,l=l.alternate,l!==null&&(l.lanes|=e)}function _s(l,t,i,e){return Ln(l,t,i,e),Qn(l)}function Oi(l,t){return Ln(l,null,null,t),Qn(l)}function hu(l,t,i){l.lanes|=i;var e=l.alternate;e!==null&&(e.lanes|=i);for(var n=!1,a=l.return;a!==null;)a.childLanes|=i,e=a.alternate,e!==null&&(e.childLanes|=i),a.tag===22&&(l=a.stateNode,l===null||l._visibility&1||(n=!0)),l=a,a=a.return;return l.tag===3?(a=l.stateNode,n&&t!==null&&(n=31-at(i),l=a.hiddenUpdates,e=l[n],e===null?l[n]=[t]:e.push(t),t.lane=i|536870912),a):null}function Qn(l){if(50<gn)throw gn=0,No=null,Error(p(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ee={};function Zp(l,t,i,e){this.tag=l,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(l,t,i,e){return new Zp(l,t,i,e)}function Ts(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Ht(l,t){var i=l.alternate;return i===null?(i=ot(l.tag,t,l.key,l.mode),i.elementType=l.elementType,i.type=l.type,i.stateNode=l.stateNode,i.alternate=l,l.alternate=i):(i.pendingProps=t,i.type=l.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=l.flags&65011712,i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=l.sibling,i.index=l.index,i.ref=l.ref,i.refCleanup=l.refCleanup,i}function yu(l,t){l.flags&=65011714;var i=l.alternate;return i===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,t=i.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function $n(l,t,i,e,n,a){var s=0;if(e=l,typeof l=="function")Ts(l)&&(s=1);else if(typeof l=="string")s=Fd(l,i,H.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Kl:return l=ot(31,i,t,n),l.elementType=Kl,l.lanes=a,l;case zl:return xi(i.children,n,a,t);case Ul:s=8,n|=24;break;case bl:return l=ot(12,i,t,n|2),l.elementType=bl,l.lanes=a,l;case $l:return l=ot(13,i,t,n),l.elementType=$l,l.lanes=a,l;case Sl:return l=ot(19,i,t,n),l.elementType=Sl,l.lanes=a,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case ol:s=10;break l;case Al:s=9;break l;case _l:s=11;break l;case k:s=14;break l;case Hl:s=16,e=null;break l}s=29,i=Error(p(130,l===null?"null":typeof l,"")),e=null}return t=ot(s,i,t,n),t.elementType=l,t.type=e,t.lanes=a,t}function xi(l,t,i,e){return l=ot(7,l,e,t),l.lanes=i,l}function js(l,t,i){return l=ot(6,l,null,t),l.lanes=i,l}function vu(l){var t=ot(18,null,null,0);return t.stateNode=l,t}function As(l,t,i){return t=ot(4,l.children!==null?l.children:[],l.key,t),t.lanes=i,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var bu=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var i=bu.get(l);return i!==void 0?i:(t={value:l,source:t,stack:vr(t)},bu.set(l,t),t)}return{value:l,source:t,stack:vr(t)}}var ne=[],ae=0,Vn=null,Qe=0,vt=[],bt=0,ti=null,Ct=1,Et="";function Rt(l,t){ne[ae++]=Qe,ne[ae++]=Vn,Vn=l,Qe=t}function Su(l,t,i){vt[bt++]=Ct,vt[bt++]=Et,vt[bt++]=ti,ti=l;var e=Ct;l=Et;var n=32-at(e)-1;e&=~(1<<n),i+=1;var a=32-at(t)+n;if(30<a){var s=n-n%5;a=(e&(1<<s)-1).toString(32),e>>=s,n-=s,Ct=1<<32-at(t)+n|i<<n|e,Et=a+l}else Ct=1<<a|i<<n|e,Et=l}function Ms(l){l.return!==null&&(Rt(l,1),Su(l,1,0))}function Cs(l){for(;l===Vn;)Vn=ne[--ae],ne[ae]=null,Qe=ne[--ae],ne[ae]=null;for(;l===ti;)ti=vt[--bt],vt[bt]=null,Et=vt[--bt],vt[bt]=null,Ct=vt[--bt],vt[bt]=null}function wu(l,t){vt[bt++]=Ct,vt[bt++]=Et,vt[bt++]=ti,Ct=t.id,Et=t.overflow,ti=l}var Xl=null,dl=null,ll=!1,ii=null,St=!1,Es=Error(p(519));function ei(l){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $e(yt(t,l)),Es}function zu(l){var t=l.stateNode,i=l.type,e=l.memoizedProps;switch(t[ql]=l,t[Wl]=e,i){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(i=0;i<pn.length;i++)W(pn[i],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Br(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Rr(t,e.value,e.defaultValue,e.children)}i=e.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||e.suppressHydrationWarning===!0||qg(t.textContent,i)?(e.popover!=null&&(W("beforetoggle",t),W("toggle",t)),e.onScroll!=null&&W("scroll",t),e.onScrollEnd!=null&&W("scrollend",t),e.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ei(l,!0)}function _u(l){for(Xl=l.return;Xl;)switch(Xl.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:Xl=Xl.return}}function se(l){if(l!==Xl)return!1;if(!ll)return _u(l),ll=!0,!1;var t=l.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=l.type,i=!(i!=="form"&&i!=="button")||Ko(l.type,l.memoizedProps)),i=!i),i&&dl&&ei(l),_u(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));dl=Kg(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));dl=Kg(l)}else t===27?(t=dl,yi(l.type)?(l=Po,Po=null,dl=l):dl=t):dl=Xl?zt(l.stateNode.nextSibling):null;return!0}function Ni(){dl=Xl=null,ll=!1}function Ds(){var l=ii;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),ii=null),l}function $e(l){ii===null?ii=[l]:ii.push(l)}var Os=g(null),Ui=null,Yt=null;function ni(l,t,i){D(Os,t._currentValue),t._currentValue=i}function qt(l){l._currentValue=Os.current,j(Os)}function xs(l,t,i){for(;l!==null;){var e=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),l===i)break;l=l.return}}function Ns(l,t,i,e){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var a=n.dependencies;if(a!==null){var s=n.child;a=a.firstContext;l:for(;a!==null;){var o=a;a=n;for(var u=0;u<t.length;u++)if(o.context===t[u]){a.lanes|=i,o=a.alternate,o!==null&&(o.lanes|=i),xs(a.return,i,l),e||(s=null);break l}a=o.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(p(341));s.lanes|=i,a=s.alternate,a!==null&&(a.lanes|=i),xs(s,i,l),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===l){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function oe(l,t,i,e){l=null;for(var n=t,a=!1;n!==null;){if(!a){if((n.flags&524288)!==0)a=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(p(387));if(s=s.memoizedProps,s!==null){var o=n.type;st(n.pendingProps.value,s.value)||(l!==null?l.push(o):l=[o])}}else if(n===nl.current){if(s=n.alternate,s===null)throw Error(p(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(vn):l=[vn])}n=n.return}l!==null&&Ns(t,l,i,e),t.flags|=262144}function Zn(l){for(l=l.firstContext;l!==null;){if(!st(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Bi(l){Ui=l,Yt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Gl(l){return Tu(Ui,l)}function kn(l,t){return Ui===null&&Bi(l),Tu(l,t)}function Tu(l,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},Yt===null){if(l===null)throw Error(p(308));Yt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Yt=Yt.next=t;return i}var kp=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(i,e){l.push(e)}};this.abort=function(){t.aborted=!0,l.forEach(function(i){return i()})}},Kp=v.unstable_scheduleCallback,Jp=v.unstable_NormalPriority,Dl={$$typeof:ol,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Us(){return{controller:new kp,data:new Map,refCount:0}}function Ve(l){l.refCount--,l.refCount===0&&Kp(Jp,function(){l.controller.abort()})}var Ze=null,Bs=0,re=0,ue=null;function Wp(l,t){if(Ze===null){var i=Ze=[];Bs=0,re=qo(),ue={status:"pending",value:void 0,then:function(e){i.push(e)}}}return Bs++,t.then(ju,ju),t}function ju(){if(--Bs===0&&Ze!==null){ue!==null&&(ue.status="fulfilled");var l=Ze;Ze=null,re=0,ue=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fp(l,t){var i=[],e={status:"pending",value:null,reason:null,then:function(n){i.push(n)}};return l.then(function(){e.status="fulfilled",e.value=t;for(var n=0;n<i.length;n++)(0,i[n])(t)},function(n){for(e.status="rejected",e.reason=n,n=0;n<i.length;n++)(0,i[n])(void 0)}),e}var Au=w.S;w.S=function(l,t){ug=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wp(l,t),Au!==null&&Au(l,t)};var Hi=g(null);function Hs(){var l=Hi.current;return l!==null?l:pl.pooledCache}function Kn(l,t){t===null?D(Hi,Hi.current):D(Hi,t.pool)}function Mu(){var l=Hs();return l===null?null:{parent:Dl._currentValue,pool:l}}var ce=Error(p(460)),Rs=Error(p(474)),Jn=Error(p(542)),Wn={then:function(){}};function Cu(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Eu(l,t,i){switch(i=l[i],i===void 0?l.push(t):i!==t&&(t.then(Ut,Ut),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ou(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=pl,l!==null&&100<l.shellSuspendCounter)throw Error(p(482));l=t,l.status="pending",l.then(function(e){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=e}},function(e){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ou(l),l}throw Yi=t,ce}}function Ri(l){try{var t=l._init;return t(l._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Yi=i,ce):i}}var Yi=null;function Du(){if(Yi===null)throw Error(p(459));var l=Yi;return Yi=null,l}function Ou(l){if(l===ce||l===Jn)throw Error(p(483))}var ge=null,ke=0;function Fn(l){var t=ke;return ke+=1,ge===null&&(ge=[]),Eu(ge,l,t)}function Ke(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===Z?Error(p(525)):(l=Object.prototype.toString.call(t),Error(p(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function xu(l){function t(f,c){if(l){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function i(f,c){if(!l)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function e(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function n(f,c){return f=Ht(f,c),f.index=0,f.sibling=null,f}function a(f,c,m){return f.index=m,l?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=67108866,c):m):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function s(f){return l&&f.alternate===null&&(f.flags|=67108866),f}function o(f,c,m,z){return c===null||c.tag!==6?(c=js(m,f.mode,z),c.return=f,c):(c=n(c,m),c.return=f,c)}function u(f,c,m,z){var q=m.type;return q===zl?S(f,c,m.props.children,z,m.key):c!==null&&(c.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Hl&&Ri(q)===c.type)?(c=n(c,m.props),Ke(c,m),c.return=f,c):(c=$n(m.type,m.key,m.props,null,f.mode,z),Ke(c,m),c.return=f,c)}function h(f,c,m,z){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=As(m,f.mode,z),c.return=f,c):(c=n(c,m.children||[]),c.return=f,c)}function S(f,c,m,z,q){return c===null||c.tag!==7?(c=xi(m,f.mode,z,q),c.return=f,c):(c=n(c,m),c.return=f,c)}function T(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=js(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yl:return m=$n(c.type,c.key,c.props,null,f.mode,m),Ke(m,c),m.return=f,m;case vl:return c=As(c,f.mode,m),c.return=f,c;case Hl:return c=Ri(c),T(f,c,m)}if(Tt(c)||Jl(c))return c=xi(c,f.mode,m,null),c.return=f,c;if(typeof c.then=="function")return T(f,Fn(c),m);if(c.$$typeof===ol)return T(f,kn(f,c),m);In(f,c)}return null}function y(f,c,m,z){var q=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return q!==null?null:o(f,c,""+m,z);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:return m.key===q?u(f,c,m,z):null;case vl:return m.key===q?h(f,c,m,z):null;case Hl:return m=Ri(m),y(f,c,m,z)}if(Tt(m)||Jl(m))return q!==null?null:S(f,c,m,z,null);if(typeof m.then=="function")return y(f,c,Fn(m),z);if(m.$$typeof===ol)return y(f,c,kn(f,m),z);In(f,m)}return null}function b(f,c,m,z,q){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return f=f.get(m)||null,o(c,f,""+z,q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case yl:return f=f.get(z.key===null?m:z.key)||null,u(c,f,z,q);case vl:return f=f.get(z.key===null?m:z.key)||null,h(c,f,z,q);case Hl:return z=Ri(z),b(f,c,m,z,q)}if(Tt(z)||Jl(z))return f=f.get(m)||null,S(c,f,z,q,null);if(typeof z.then=="function")return b(f,c,m,Fn(z),q);if(z.$$typeof===ol)return b(f,c,m,kn(c,z),q);In(c,z)}return null}function B(f,c,m,z){for(var q=null,tl=null,R=c,V=c=0,I=null;R!==null&&V<m.length;V++){R.index>V?(I=R,R=null):I=R.sibling;var il=y(f,R,m[V],z);if(il===null){R===null&&(R=I);break}l&&R&&il.alternate===null&&t(f,R),c=a(il,c,V),tl===null?q=il:tl.sibling=il,tl=il,R=I}if(V===m.length)return i(f,R),ll&&Rt(f,V),q;if(R===null){for(;V<m.length;V++)R=T(f,m[V],z),R!==null&&(c=a(R,c,V),tl===null?q=R:tl.sibling=R,tl=R);return ll&&Rt(f,V),q}for(R=e(R);V<m.length;V++)I=b(R,f,V,m[V],z),I!==null&&(l&&I.alternate!==null&&R.delete(I.key===null?V:I.key),c=a(I,c,V),tl===null?q=I:tl.sibling=I,tl=I);return l&&R.forEach(function(zi){return t(f,zi)}),ll&&Rt(f,V),q}function X(f,c,m,z){if(m==null)throw Error(p(151));for(var q=null,tl=null,R=c,V=c=0,I=null,il=m.next();R!==null&&!il.done;V++,il=m.next()){R.index>V?(I=R,R=null):I=R.sibling;var zi=y(f,R,il.value,z);if(zi===null){R===null&&(R=I);break}l&&R&&zi.alternate===null&&t(f,R),c=a(zi,c,V),tl===null?q=zi:tl.sibling=zi,tl=zi,R=I}if(il.done)return i(f,R),ll&&Rt(f,V),q;if(R===null){for(;!il.done;V++,il=m.next())il=T(f,il.value,z),il!==null&&(c=a(il,c,V),tl===null?q=il:tl.sibling=il,tl=il);return ll&&Rt(f,V),q}for(R=e(R);!il.done;V++,il=m.next())il=b(R,f,V,il.value,z),il!==null&&(l&&il.alternate!==null&&R.delete(il.key===null?V:il.key),c=a(il,c,V),tl===null?q=il:tl.sibling=il,tl=il);return l&&R.forEach(function(rm){return t(f,rm)}),ll&&Rt(f,V),q}function gl(f,c,m,z){if(typeof m=="object"&&m!==null&&m.type===zl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:l:{for(var q=m.key;c!==null;){if(c.key===q){if(q=m.type,q===zl){if(c.tag===7){i(f,c.sibling),z=n(c,m.props.children),z.return=f,f=z;break l}}else if(c.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Hl&&Ri(q)===c.type){i(f,c.sibling),z=n(c,m.props),Ke(z,m),z.return=f,f=z;break l}i(f,c);break}else t(f,c);c=c.sibling}m.type===zl?(z=xi(m.props.children,f.mode,z,m.key),z.return=f,f=z):(z=$n(m.type,m.key,m.props,null,f.mode,z),Ke(z,m),z.return=f,f=z)}return s(f);case vl:l:{for(q=m.key;c!==null;){if(c.key===q)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){i(f,c.sibling),z=n(c,m.children||[]),z.return=f,f=z;break l}else{i(f,c);break}else t(f,c);c=c.sibling}z=As(m,f.mode,z),z.return=f,f=z}return s(f);case Hl:return m=Ri(m),gl(f,c,m,z)}if(Tt(m))return B(f,c,m,z);if(Jl(m)){if(q=Jl(m),typeof q!="function")throw Error(p(150));return m=q.call(m),X(f,c,m,z)}if(typeof m.then=="function")return gl(f,c,Fn(m),z);if(m.$$typeof===ol)return gl(f,c,kn(f,m),z);In(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(i(f,c.sibling),z=n(c,m),z.return=f,f=z):(i(f,c),z=js(m,f.mode,z),z.return=f,f=z),s(f)):i(f,c)}return function(f,c,m,z){try{ke=0;var q=gl(f,c,m,z);return ge=null,q}catch(R){if(R===ce||R===Jn)throw R;var tl=ot(29,R,null,f.mode);return tl.lanes=z,tl.return=f,tl}}}var qi=xu(!0),Nu=xu(!1),ai=!1;function Ys(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qs(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function si(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function oi(l,t,i){var e=l.updateQueue;if(e===null)return null;if(e=e.shared,(el&2)!==0){var n=e.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t,t=Qn(l),hu(l,null,i),t}return Ln(l,e,t,i),Qn(l)}function Je(l,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var e=t.lanes;e&=l.pendingLanes,i|=e,t.lanes=i,Tr(l,i)}}function Xs(l,t){var i=l.updateQueue,e=l.alternate;if(e!==null&&(e=e.updateQueue,i===e)){var n=null,a=null;if(i=i.firstBaseUpdate,i!==null){do{var s={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};a===null?n=a=s:a=a.next=s,i=i.next}while(i!==null);a===null?n=a=t:a=a.next=t}else n=a=t;i={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:e.shared,callbacks:e.callbacks},l.updateQueue=i;return}l=i.lastBaseUpdate,l===null?i.firstBaseUpdate=t:l.next=t,i.lastBaseUpdate=t}var Gs=!1;function We(){if(Gs){var l=ue;if(l!==null)throw l}}function Fe(l,t,i,e){Gs=!1;var n=l.updateQueue;ai=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var u=o,h=u.next;u.next=null,s===null?a=h:s.next=h,s=u;var S=l.alternate;S!==null&&(S=S.updateQueue,o=S.lastBaseUpdate,o!==s&&(o===null?S.firstBaseUpdate=h:o.next=h,S.lastBaseUpdate=u))}if(a!==null){var T=n.baseState;s=0,S=h=u=null,o=a;do{var y=o.lane&-536870913,b=y!==o.lane;if(b?(F&y)===y:(e&y)===y){y!==0&&y===re&&(Gs=!0),S!==null&&(S=S.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});l:{var B=l,X=o;y=t;var gl=i;switch(X.tag){case 1:if(B=X.payload,typeof B=="function"){T=B.call(gl,T,y);break l}T=B;break l;case 3:B.flags=B.flags&-65537|128;case 0:if(B=X.payload,y=typeof B=="function"?B.call(gl,T,y):B,y==null)break l;T=N({},T,y);break l;case 2:ai=!0}}y=o.callback,y!==null&&(l.flags|=64,b&&(l.flags|=8192),b=n.callbacks,b===null?n.callbacks=[y]:b.push(y))}else b={lane:y,tag:o.tag,payload:o.payload,callback:o.callback,next:null},S===null?(h=S=b,u=T):S=S.next=b,s|=y;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;b=o,o=b.next,b.next=null,n.lastBaseUpdate=b,n.shared.pending=null}}while(!0);S===null&&(u=T),n.baseState=u,n.firstBaseUpdate=h,n.lastBaseUpdate=S,a===null&&(n.shared.lanes=0),fi|=s,l.lanes=s,l.memoizedState=T}}function Uu(l,t){if(typeof l!="function")throw Error(p(191,l));l.call(t)}function Bu(l,t){var i=l.callbacks;if(i!==null)for(l.callbacks=null,l=0;l<i.length;l++)Uu(i[l],t)}var fe=g(null),Pn=g(0);function Hu(l,t){l=Kt,D(Pn,l),D(fe,t),Kt=l|t.baseLanes}function Ls(){D(Pn,Kt),D(fe,fe.current)}function Qs(){Kt=Pn.current,j(fe),j(Pn)}var rt=g(null),wt=null;function ri(l){var t=l.alternate;D(Cl,Cl.current&1),D(rt,l),wt===null&&(t===null||fe.current!==null||t.memoizedState!==null)&&(wt=l)}function $s(l){D(Cl,Cl.current),D(rt,l),wt===null&&(wt=l)}function Ru(l){l.tag===22?(D(Cl,Cl.current),D(rt,l),wt===null&&(wt=l)):ui()}function ui(){D(Cl,Cl.current),D(rt,rt.current)}function ut(l){j(rt),wt===l&&(wt=null),j(Cl)}var Cl=g(0);function la(l){for(var t=l;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Fo(i)||Io(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,$=null,ul=null,Ol=null,ta=!1,pe=!1,Xi=!1,ia=0,Ie=0,de=null,Ip=0;function Tl(){throw Error(p(321))}function Vs(l,t){if(t===null)return!1;for(var i=0;i<t.length&&i<l.length;i++)if(!st(l[i],t[i]))return!1;return!0}function Zs(l,t,i,e,n,a){return Xt=a,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=l===null||l.memoizedState===null?Sc:oo,Xi=!1,a=i(e,n),Xi=!1,pe&&(a=qu(t,i,e,n)),Yu(l),a}function Yu(l){w.H=tn;var t=ul!==null&&ul.next!==null;if(Xt=0,Ol=ul=$=null,ta=!1,Ie=0,de=null,t)throw Error(p(300));l===null||xl||(l=l.dependencies,l!==null&&Zn(l)&&(xl=!0))}function qu(l,t,i,e){$=l;var n=0;do{if(pe&&(de=null),Ie=0,pe=!1,25<=n)throw Error(p(301));if(n+=1,Ol=ul=null,l.updateQueue!=null){var a=l.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}w.H=wc,a=t(i,e)}while(pe);return a}function Pp(){var l=w.H,t=l.useState()[0];return t=typeof t.then=="function"?Pe(t):t,l=l.useState()[0],(ul!==null?ul.memoizedState:null)!==l&&($.flags|=1024),t}function ks(){var l=ia!==0;return ia=0,l}function Ks(l,t,i){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~i}function Js(l){if(ta){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ta=!1}Xt=0,Ol=ul=$=null,pe=!1,Ie=ia=0,de=null}function kl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ol===null?$.memoizedState=Ol=l:Ol=Ol.next=l,Ol}function El(){if(ul===null){var l=$.alternate;l=l!==null?l.memoizedState:null}else l=ul.next;var t=Ol===null?$.memoizedState:Ol.next;if(t!==null)Ol=t,ul=l;else{if(l===null)throw $.alternate===null?Error(p(467)):Error(p(310));ul=l,l={memoizedState:ul.memoizedState,baseState:ul.baseState,baseQueue:ul.baseQueue,queue:ul.queue,next:null},Ol===null?$.memoizedState=Ol=l:Ol=Ol.next=l}return Ol}function ea(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pe(l){var t=Ie;return Ie+=1,de===null&&(de=[]),l=Eu(de,l,t),t=$,(Ol===null?t.memoizedState:Ol.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Sc:oo),l}function na(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pe(l);if(l.$$typeof===ol)return Gl(l)}throw Error(p(438,String(l)))}function Ws(l){var t=null,i=$.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var e=$.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=ea(),$.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(l),e=0;e<l;e++)i[e]=Ft;return t.index++,i}function Gt(l,t){return typeof t=="function"?t(l):t}function aa(l){var t=El();return Fs(t,ul,l)}function Fs(l,t,i){var e=l.queue;if(e===null)throw Error(p(311));e.lastRenderedReducer=i;var n=l.baseQueue,a=e.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}t.baseQueue=n=a,e.pending=null}if(a=l.baseState,n===null)l.memoizedState=a;else{t=n.next;var o=s=null,u=null,h=t,S=!1;do{var T=h.lane&-536870913;if(T!==h.lane?(F&T)===T:(Xt&T)===T){var y=h.revertLane;if(y===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===re&&(S=!0);else if((Xt&y)===y){h=h.next,y===re&&(S=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(o=u=T,s=a):u=u.next=T,$.lanes|=y,fi|=y;T=h.action,Xi&&i(a,T),a=h.hasEagerState?h.eagerState:i(a,T)}else y={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(o=u=y,s=a):u=u.next=y,$.lanes|=T,fi|=T;h=h.next}while(h!==null&&h!==t);if(u===null?s=a:u.next=o,!st(a,l.memoizedState)&&(xl=!0,S&&(i=ue,i!==null)))throw i;l.memoizedState=a,l.baseState=s,l.baseQueue=u,e.lastRenderedState=a}return n===null&&(e.lanes=0),[l.memoizedState,e.dispatch]}function Is(l){var t=El(),i=t.queue;if(i===null)throw Error(p(311));i.lastRenderedReducer=l;var e=i.dispatch,n=i.pending,a=t.memoizedState;if(n!==null){i.pending=null;var s=n=n.next;do a=l(a,s.action),s=s.next;while(s!==n);st(a,t.memoizedState)||(xl=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),i.lastRenderedState=a}return[a,e]}function Xu(l,t,i){var e=$,n=El(),a=ll;if(a){if(i===void 0)throw Error(p(407));i=i()}else i=t();var s=!st((ul||n).memoizedState,i);if(s&&(n.memoizedState=i,xl=!0),n=n.queue,to(Qu.bind(null,e,n,l),[l]),n.getSnapshot!==t||s||Ol!==null&&Ol.memoizedState.tag&1){if(e.flags|=2048,me(9,{destroy:void 0},Lu.bind(null,e,n,i,t),null),pl===null)throw Error(p(349));a||(Xt&127)!==0||Gu(e,t,i)}return i}function Gu(l,t,i){l.flags|=16384,l={getSnapshot:t,value:i},t=$.updateQueue,t===null?(t=ea(),$.updateQueue=t,t.stores=[l]):(i=t.stores,i===null?t.stores=[l]:i.push(l))}function Lu(l,t,i,e){t.value=i,t.getSnapshot=e,$u(t)&&Vu(l)}function Qu(l,t,i){return i(function(){$u(t)&&Vu(l)})}function $u(l){var t=l.getSnapshot;l=l.value;try{var i=t();return!st(l,i)}catch{return!0}}function Vu(l){var t=Oi(l,2);t!==null&&it(t,l,2)}function Ps(l){var t=kl();if(typeof l=="function"){var i=l;if(l=i(),Xi){It(!0);try{i()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Zu(l,t,i,e){return l.baseState=i,Fs(l,ul,typeof e=="function"?e:Gt)}function ld(l,t,i,e,n){if(ra(l))throw Error(p(485));if(l=t.action,l!==null){var a={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){a.listeners.push(s)}};w.T!==null?i(!0):a.isTransition=!1,e(a),i=t.pending,i===null?(a.next=t.pending=a,ku(t,a)):(a.next=i.next,t.pending=i.next=a)}}function ku(l,t){var i=t.action,e=t.payload,n=l.state;if(t.isTransition){var a=w.T,s={};w.T=s;try{var o=i(n,e),u=w.S;u!==null&&u(s,o),Ku(l,t,o)}catch(h){lo(l,t,h)}finally{a!==null&&s.types!==null&&(a.types=s.types),w.T=a}}else try{a=i(n,e),Ku(l,t,a)}catch(h){lo(l,t,h)}}function Ku(l,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(e){Ju(l,t,e)},function(e){return lo(l,t,e)}):Ju(l,t,i)}function Ju(l,t,i){t.status="fulfilled",t.value=i,Wu(t),l.state=i,t=l.pending,t!==null&&(i=t.next,i===t?l.pending=null:(i=i.next,t.next=i,ku(l,i)))}function lo(l,t,i){var e=l.pending;if(l.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=i,Wu(t),t=t.next;while(t!==e)}l.action=null}function Wu(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fu(l,t){return t}function Iu(l,t){if(ll){var i=pl.formState;if(i!==null){l:{var e=$;if(ll){if(dl){t:{for(var n=dl,a=St;n.nodeType!==8;){if(!a){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}a=n.data,n=a==="F!"||a==="F"?n:null}if(n){dl=zt(n.nextSibling),e=n.data==="F!";break l}}ei(e)}e=!1}e&&(t=i[0])}}return i=kl(),i.memoizedState=i.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fu,lastRenderedState:t},i.queue=e,i=yc.bind(null,$,e),e.dispatch=i,e=Ps(!1),a=so.bind(null,$,!1,e.queue),e=kl(),n={state:t,dispatch:null,action:l,pending:null},e.queue=n,i=ld.bind(null,$,n,a,i),n.dispatch=i,e.memoizedState=l,[t,i,!1]}function Pu(l){var t=El();return lc(t,ul,l)}function lc(l,t,i){if(t=Fs(l,t,Fu)[0],l=aa(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=Pe(t)}catch(s){throw s===ce?Jn:s}else e=t;t=El();var n=t.queue,a=n.dispatch;return i!==t.memoizedState&&($.flags|=2048,me(9,{destroy:void 0},td.bind(null,n,i),null)),[e,a,l]}function td(l,t){l.action=t}function tc(l){var t=El(),i=ul;if(i!==null)return lc(t,i,l);El(),t=t.memoizedState,i=El();var e=i.queue.dispatch;return i.memoizedState=l,[t,e,!1]}function me(l,t,i,e){return l={tag:l,create:i,deps:e,inst:t,next:null},t=$.updateQueue,t===null&&(t=ea(),$.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=l.next=l:(e=i.next,i.next=l,l.next=e,t.lastEffect=l),l}function ic(){return El().memoizedState}function sa(l,t,i,e){var n=kl();$.flags|=l,n.memoizedState=me(1|t,{destroy:void 0},i,e===void 0?null:e)}function oa(l,t,i,e){var n=El();e=e===void 0?null:e;var a=n.memoizedState.inst;ul!==null&&e!==null&&Vs(e,ul.memoizedState.deps)?n.memoizedState=me(t,a,i,e):($.flags|=l,n.memoizedState=me(1|t,a,i,e))}function ec(l,t){sa(8390656,8,l,t)}function to(l,t){oa(2048,8,l,t)}function id(l){$.flags|=4;var t=$.updateQueue;if(t===null)t=ea(),$.updateQueue=t,t.events=[l];else{var i=t.events;i===null?t.events=[l]:i.push(l)}}function nc(l){var t=El().memoizedState;return id({ref:t,nextImpl:l}),function(){if((el&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function ac(l,t){return oa(4,2,l,t)}function sc(l,t){return oa(4,4,l,t)}function oc(l,t){if(typeof t=="function"){l=l();var i=t(l);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function rc(l,t,i){i=i!=null?i.concat([l]):null,oa(4,4,oc.bind(null,t,l),i)}function io(){}function uc(l,t){var i=El();t=t===void 0?null:t;var e=i.memoizedState;return t!==null&&Vs(t,e[1])?e[0]:(i.memoizedState=[l,t],l)}function cc(l,t){var i=El();t=t===void 0?null:t;var e=i.memoizedState;if(t!==null&&Vs(t,e[1]))return e[0];if(e=l(),Xi){It(!0);try{l()}finally{It(!1)}}return i.memoizedState=[e,t],e}function eo(l,t,i){return i===void 0||(Xt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=i,l=gg(),$.lanes|=l,fi|=l,i)}function gc(l,t,i,e){return st(i,t)?i:fe.current!==null?(l=eo(l,i,e),st(l,t)||(xl=!0),l):(Xt&42)===0||(Xt&1073741824)!==0&&(F&261930)===0?(xl=!0,l.memoizedState=i):(l=gg(),$.lanes|=l,fi|=l,t)}function fc(l,t,i,e,n){var a=C.p;C.p=a!==0&&8>a?a:8;var s=w.T,o={};w.T=o,so(l,!1,t,i);try{var u=n(),h=w.S;if(h!==null&&h(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var S=Fp(u,e);ln(l,t,S,ft(l))}else ln(l,t,e,ft(l))}catch(T){ln(l,t,{then:function(){},status:"rejected",reason:T},ft())}finally{C.p=a,s!==null&&o.types!==null&&(s.types=o.types),w.T=s}}function ed(){}function no(l,t,i,e){if(l.tag!==5)throw Error(p(476));var n=pc(l).queue;fc(l,n,t,G,i===null?ed:function(){return dc(l),i(e)})}function pc(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:G},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:i},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function dc(l){var t=pc(l);t.next===null&&(t=l.alternate.memoizedState),ln(l,t.next.queue,{},ft())}function ao(){return Gl(vn)}function mc(){return El().memoizedState}function hc(){return El().memoizedState}function nd(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var i=ft();l=si(i);var e=oi(t,l,i);e!==null&&(it(e,t,i),Je(e,t,i)),t={cache:Us()},l.payload=t;return}t=t.return}}function ad(l,t,i){var e=ft();i={lane:e,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ra(l)?vc(t,i):(i=_s(l,t,i,e),i!==null&&(it(i,l,e),bc(i,t,e)))}function yc(l,t,i){var e=ft();ln(l,t,i,e)}function ln(l,t,i,e){var n={lane:e,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ra(l))vc(t,n);else{var a=l.alternate;if(l.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,i);if(n.hasEagerState=!0,n.eagerState=o,st(o,s))return Ln(l,t,n,0),pl===null&&Gn(),!1}catch{}if(i=_s(l,t,n,e),i!==null)return it(i,l,e),bc(i,t,e),!0}return!1}function so(l,t,i,e){if(e={lane:2,revertLane:qo(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ra(l)){if(t)throw Error(p(479))}else t=_s(l,i,e,2),t!==null&&it(t,l,2)}function ra(l){var t=l.alternate;return l===$||t!==null&&t===$}function vc(l,t){pe=ta=!0;var i=l.pending;i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t}function bc(l,t,i){if((i&4194048)!==0){var e=t.lanes;e&=l.pendingLanes,i|=e,t.lanes=i,Tr(l,i)}}var tn={readContext:Gl,use:na,useCallback:Tl,useContext:Tl,useEffect:Tl,useImperativeHandle:Tl,useLayoutEffect:Tl,useInsertionEffect:Tl,useMemo:Tl,useReducer:Tl,useRef:Tl,useState:Tl,useDebugValue:Tl,useDeferredValue:Tl,useTransition:Tl,useSyncExternalStore:Tl,useId:Tl,useHostTransitionStatus:Tl,useFormState:Tl,useActionState:Tl,useOptimistic:Tl,useMemoCache:Tl,useCacheRefresh:Tl};tn.useEffectEvent=Tl;var Sc={readContext:Gl,use:na,useCallback:function(l,t){return kl().memoizedState=[l,t===void 0?null:t],l},useContext:Gl,useEffect:ec,useImperativeHandle:function(l,t,i){i=i!=null?i.concat([l]):null,sa(4194308,4,oc.bind(null,t,l),i)},useLayoutEffect:function(l,t){return sa(4194308,4,l,t)},useInsertionEffect:function(l,t){sa(4,2,l,t)},useMemo:function(l,t){var i=kl();t=t===void 0?null:t;var e=l();if(Xi){It(!0);try{l()}finally{It(!1)}}return i.memoizedState=[e,t],e},useReducer:function(l,t,i){var e=kl();if(i!==void 0){var n=i(t);if(Xi){It(!0);try{i(t)}finally{It(!1)}}}else n=t;return e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},e.queue=l,l=l.dispatch=ad.bind(null,$,l),[e.memoizedState,l]},useRef:function(l){var t=kl();return l={current:l},t.memoizedState=l},useState:function(l){l=Ps(l);var t=l.queue,i=yc.bind(null,$,t);return t.dispatch=i,[l.memoizedState,i]},useDebugValue:io,useDeferredValue:function(l,t){var i=kl();return eo(i,l,t)},useTransition:function(){var l=Ps(!1);return l=fc.bind(null,$,l.queue,!0,!1),kl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,i){var e=$,n=kl();if(ll){if(i===void 0)throw Error(p(407));i=i()}else{if(i=t(),pl===null)throw Error(p(349));(F&127)!==0||Gu(e,t,i)}n.memoizedState=i;var a={value:i,getSnapshot:t};return n.queue=a,ec(Qu.bind(null,e,a,l),[l]),e.flags|=2048,me(9,{destroy:void 0},Lu.bind(null,e,a,i,t),null),i},useId:function(){var l=kl(),t=pl.identifierPrefix;if(ll){var i=Et,e=Ct;i=(e&~(1<<32-at(e)-1)).toString(32)+i,t="_"+t+"R_"+i,i=ia++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=Ip++,t="_"+t+"r_"+i.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:ao,useFormState:Iu,useActionState:Iu,useOptimistic:function(l){var t=kl();t.memoizedState=t.baseState=l;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=so.bind(null,$,!0,i),i.dispatch=t,[l,t]},useMemoCache:Ws,useCacheRefresh:function(){return kl().memoizedState=nd.bind(null,$)},useEffectEvent:function(l){var t=kl(),i={impl:l};return t.memoizedState=i,function(){if((el&2)!==0)throw Error(p(440));return i.impl.apply(void 0,arguments)}}},oo={readContext:Gl,use:na,useCallback:uc,useContext:Gl,useEffect:to,useImperativeHandle:rc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:cc,useReducer:aa,useRef:ic,useState:function(){return aa(Gt)},useDebugValue:io,useDeferredValue:function(l,t){var i=El();return gc(i,ul.memoizedState,l,t)},useTransition:function(){var l=aa(Gt)[0],t=El().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Xu,useId:mc,useHostTransitionStatus:ao,useFormState:Pu,useActionState:Pu,useOptimistic:function(l,t){var i=El();return Zu(i,ul,l,t)},useMemoCache:Ws,useCacheRefresh:hc};oo.useEffectEvent=nc;var wc={readContext:Gl,use:na,useCallback:uc,useContext:Gl,useEffect:to,useImperativeHandle:rc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:cc,useReducer:Is,useRef:ic,useState:function(){return Is(Gt)},useDebugValue:io,useDeferredValue:function(l,t){var i=El();return ul===null?eo(i,l,t):gc(i,ul.memoizedState,l,t)},useTransition:function(){var l=Is(Gt)[0],t=El().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Xu,useId:mc,useHostTransitionStatus:ao,useFormState:tc,useActionState:tc,useOptimistic:function(l,t){var i=El();return ul!==null?Zu(i,ul,l,t):(i.baseState=l,[l,i.queue.dispatch])},useMemoCache:Ws,useCacheRefresh:hc};wc.useEffectEvent=nc;function ro(l,t,i,e){t=l.memoizedState,i=i(e,t),i=i==null?t:N({},t,i),l.memoizedState=i,l.lanes===0&&(l.updateQueue.baseState=i)}var uo={enqueueSetState:function(l,t,i){l=l._reactInternals;var e=ft(),n=si(e);n.payload=t,i!=null&&(n.callback=i),t=oi(l,n,e),t!==null&&(it(t,l,e),Je(t,l,e))},enqueueReplaceState:function(l,t,i){l=l._reactInternals;var e=ft(),n=si(e);n.tag=1,n.payload=t,i!=null&&(n.callback=i),t=oi(l,n,e),t!==null&&(it(t,l,e),Je(t,l,e))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var i=ft(),e=si(i);e.tag=2,t!=null&&(e.callback=t),t=oi(l,e,i),t!==null&&(it(t,l,i),Je(t,l,i))}};function zc(l,t,i,e,n,a,s){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(e,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ge(i,e)||!Ge(n,a):!0}function _c(l,t,i,e){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,e),t.state!==l&&uo.enqueueReplaceState(t,t.state,null)}function Gi(l,t){var i=t;if("ref"in t){i={};for(var e in t)e!=="ref"&&(i[e]=t[e])}if(l=l.defaultProps){i===t&&(i=N({},i));for(var n in l)i[n]===void 0&&(i[n]=l[n])}return i}function Tc(l){Xn(l)}function jc(l){console.error(l)}function Ac(l){Xn(l)}function ua(l,t){try{var i=l.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Mc(l,t,i){try{var e=l.onCaughtError;e(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function co(l,t,i){return i=si(i),i.tag=3,i.payload={element:null},i.callback=function(){ua(l,t)},i}function Cc(l){return l=si(l),l.tag=3,l}function Ec(l,t,i,e){var n=i.type.getDerivedStateFromError;if(typeof n=="function"){var a=e.value;l.payload=function(){return n(a)},l.callback=function(){Mc(t,i,e)}}var s=i.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(l.callback=function(){Mc(t,i,e),typeof n!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})})}function sd(l,t,i,e,n){if(i.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=i.alternate,t!==null&&oe(t,i,n,!0),i=rt.current,i!==null){switch(i.tag){case 31:case 13:return wt===null?wa():i.alternate===null&&jl===0&&(jl=3),i.flags&=-257,i.flags|=65536,i.lanes=n,e===Wn?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([e]):t.add(e),Ho(l,e,n)),!1;case 22:return i.flags|=65536,e===Wn?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([e]):i.add(e)),Ho(l,e,n)),!1}throw Error(p(435,i.tag))}return Ho(l,e,n),wa(),!1}if(ll)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,e!==Es&&(l=Error(p(422),{cause:e}),$e(yt(l,i)))):(e!==Es&&(t=Error(p(423),{cause:e}),$e(yt(t,i))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,e=yt(e,i),n=co(l.stateNode,e,n),Xs(l,n),jl!==4&&(jl=2)),!1;var a=Error(p(520),{cause:e});if(a=yt(a,i),cn===null?cn=[a]:cn.push(a),jl!==4&&(jl=2),t===null)return!0;e=yt(e,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,l=n&-n,i.lanes|=l,l=co(i.stateNode,e,l),Xs(i,l),!1;case 1:if(t=i.type,a=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(pi===null||!pi.has(a))))return i.flags|=65536,n&=-n,i.lanes|=n,n=Cc(n),Ec(n,l,i,e),Xs(i,n),!1}i=i.return}while(i!==null);return!1}var go=Error(p(461)),xl=!1;function Ll(l,t,i,e){t.child=l===null?Nu(t,null,i,e):qi(t,l.child,i,e)}function Dc(l,t,i,e,n){i=i.render;var a=t.ref;if("ref"in e){var s={};for(var o in e)o!=="ref"&&(s[o]=e[o])}else s=e;return Bi(t),e=Zs(l,t,i,s,a,n),o=ks(),l!==null&&!xl?(Ks(l,t,n),Lt(l,t,n)):(ll&&o&&Ms(t),t.flags|=1,Ll(l,t,e,n),t.child)}function Oc(l,t,i,e,n){if(l===null){var a=i.type;return typeof a=="function"&&!Ts(a)&&a.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=a,xc(l,t,a,e,n)):(l=$n(i.type,null,e,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(a=l.child,!So(l,n)){var s=a.memoizedProps;if(i=i.compare,i=i!==null?i:Ge,i(s,e)&&l.ref===t.ref)return Lt(l,t,n)}return t.flags|=1,l=Ht(a,e),l.ref=t.ref,l.return=t,t.child=l}function xc(l,t,i,e,n){if(l!==null){var a=l.memoizedProps;if(Ge(a,e)&&l.ref===t.ref)if(xl=!1,t.pendingProps=e=a,So(l,n))(l.flags&131072)!==0&&(xl=!0);else return t.lanes=l.lanes,Lt(l,t,n)}return fo(l,t,i,e,n)}function Nc(l,t,i,e){var n=e.children,a=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|i:i,l!==null){for(e=t.child=l.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~a}else e=0,t.child=null;return Uc(l,t,a,i,e)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Kn(t,a!==null?a.cachePool:null),a!==null?Hu(t,a):Ls(),Ru(t);else return e=t.lanes=536870912,Uc(l,t,a!==null?a.baseLanes|i:i,i,e)}else a!==null?(Kn(t,a.cachePool),Hu(t,a),ui(),t.memoizedState=null):(l!==null&&Kn(t,null),Ls(),ui());return Ll(l,t,n,i),t.child}function en(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(l,t,i,e,n){var a=Hs();return a=a===null?null:{parent:Dl._currentValue,pool:a},t.memoizedState={baseLanes:i,cachePool:a},l!==null&&Kn(t,null),Ls(),Ru(t),l!==null&&oe(l,t,e,!0),t.childLanes=n,null}function ca(l,t){return t=fa({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Bc(l,t,i){return qi(t,l.child,null,i),l=ca(t,t.pendingProps),l.flags|=2,ut(t),t.memoizedState=null,l}function od(l,t,i){var e=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(e.mode==="hidden")return l=ca(t,e),t.lanes=536870912,en(null,l);if($s(t),(l=dl)?(l=kg(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ti!==null?{id:Ct,overflow:Et}:null,retryLane:536870912,hydrationErrors:null},i=vu(l),i.return=t,t.child=i,Xl=t,dl=null)):l=null,l===null)throw ei(t);return t.lanes=536870912,null}return ca(t,e)}var a=l.memoizedState;if(a!==null){var s=a.dehydrated;if($s(t),n)if(t.flags&256)t.flags&=-257,t=Bc(l,t,i);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(p(558));else if(xl||oe(l,t,i,!1),n=(i&l.childLanes)!==0,xl||n){if(e=pl,e!==null&&(s=jr(e,i),s!==0&&s!==a.retryLane))throw a.retryLane=s,Oi(l,s),it(e,l,s),go;wa(),t=Bc(l,t,i)}else l=a.treeContext,dl=zt(s.nextSibling),Xl=t,ll=!0,ii=null,St=!1,l!==null&&wu(t,l),t=ca(t,e),t.flags|=4096;return t}return l=Ht(l.child,{mode:e.mode,children:e.children}),l.ref=t.ref,t.child=l,l.return=t,l}function ga(l,t){var i=t.ref;if(i===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(p(284));(l===null||l.ref!==i)&&(t.flags|=4194816)}}function fo(l,t,i,e,n){return Bi(t),i=Zs(l,t,i,e,void 0,n),e=ks(),l!==null&&!xl?(Ks(l,t,n),Lt(l,t,n)):(ll&&e&&Ms(t),t.flags|=1,Ll(l,t,i,n),t.child)}function Hc(l,t,i,e,n,a){return Bi(t),t.updateQueue=null,i=qu(t,e,i,n),Yu(l),e=ks(),l!==null&&!xl?(Ks(l,t,a),Lt(l,t,a)):(ll&&e&&Ms(t),t.flags|=1,Ll(l,t,i,a),t.child)}function Rc(l,t,i,e,n){if(Bi(t),t.stateNode===null){var a=ee,s=i.contextType;typeof s=="object"&&s!==null&&(a=Gl(s)),a=new i(e,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=uo,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=e,a.state=t.memoizedState,a.refs={},Ys(t),s=i.contextType,a.context=typeof s=="object"&&s!==null?Gl(s):ee,a.state=t.memoizedState,s=i.getDerivedStateFromProps,typeof s=="function"&&(ro(t,i,s,e),a.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&uo.enqueueReplaceState(a,a.state,null),Fe(t,e,a,n),We(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(l===null){a=t.stateNode;var o=t.memoizedProps,u=Gi(i,o);a.props=u;var h=a.context,S=i.contextType;s=ee,typeof S=="object"&&S!==null&&(s=Gl(S));var T=i.getDerivedStateFromProps;S=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,S||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||h!==s)&&_c(t,a,e,s),ai=!1;var y=t.memoizedState;a.state=y,Fe(t,e,a,n),We(),h=t.memoizedState,o||y!==h||ai?(typeof T=="function"&&(ro(t,i,T,e),h=t.memoizedState),(u=ai||zc(t,i,u,e,y,h,s))?(S||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=h),a.props=e,a.state=h,a.context=s,e=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{a=t.stateNode,qs(l,t),s=t.memoizedProps,S=Gi(i,s),a.props=S,T=t.pendingProps,y=a.context,h=i.contextType,u=ee,typeof h=="object"&&h!==null&&(u=Gl(h)),o=i.getDerivedStateFromProps,(h=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==T||y!==u)&&_c(t,a,e,u),ai=!1,y=t.memoizedState,a.state=y,Fe(t,e,a,n),We();var b=t.memoizedState;s!==T||y!==b||ai||l!==null&&l.dependencies!==null&&Zn(l.dependencies)?(typeof o=="function"&&(ro(t,i,o,e),b=t.memoizedState),(S=ai||zc(t,i,S,e,y,b,u)||l!==null&&l.dependencies!==null&&Zn(l.dependencies))?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(e,b,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(e,b,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=b),a.props=e,a.state=b,a.context=u,e=S):(typeof a.componentDidUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),e=!1)}return a=e,ga(l,t),e=(t.flags&128)!==0,a||e?(a=t.stateNode,i=e&&typeof i.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,l!==null&&e?(t.child=qi(t,l.child,null,n),t.child=qi(t,null,i,n)):Ll(l,t,i,n),t.memoizedState=a.state,l=t.child):l=Lt(l,t,n),l}function Yc(l,t,i,e){return Ni(),t.flags|=256,Ll(l,t,i,e),t.child}var po={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mo(l){return{baseLanes:l,cachePool:Mu()}}function ho(l,t,i){return l=l!==null?l.childLanes&~i:0,t&&(l|=gt),l}function qc(l,t,i){var e=t.pendingProps,n=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=l!==null&&l.memoizedState===null?!1:(Cl.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(n?ri(t):ui(),(l=dl)?(l=kg(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ti!==null?{id:Ct,overflow:Et}:null,retryLane:536870912,hydrationErrors:null},i=vu(l),i.return=t,t.child=i,Xl=t,dl=null)):l=null,l===null)throw ei(t);return Io(l)?t.lanes=32:t.lanes=536870912,null}var o=e.children;return e=e.fallback,n?(ui(),n=t.mode,o=fa({mode:"hidden",children:o},n),e=xi(e,n,i,null),o.return=t,e.return=t,o.sibling=e,t.child=o,e=t.child,e.memoizedState=mo(i),e.childLanes=ho(l,s,i),t.memoizedState=po,en(null,e)):(ri(t),yo(t,o))}var u=l.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(a)t.flags&256?(ri(t),t.flags&=-257,t=vo(l,t,i)):t.memoizedState!==null?(ui(),t.child=l.child,t.flags|=128,t=null):(ui(),o=e.fallback,n=t.mode,e=fa({mode:"visible",children:e.children},n),o=xi(o,n,i,null),o.flags|=2,e.return=t,o.return=t,e.sibling=o,t.child=e,qi(t,l.child,null,i),e=t.child,e.memoizedState=mo(i),e.childLanes=ho(l,s,i),t.memoizedState=po,t=en(null,e));else if(ri(t),Io(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var h=s.dgst;s=h,e=Error(p(419)),e.stack="",e.digest=s,$e({value:e,source:null,stack:null}),t=vo(l,t,i)}else if(xl||oe(l,t,i,!1),s=(i&l.childLanes)!==0,xl||s){if(s=pl,s!==null&&(e=jr(s,i),e!==0&&e!==u.retryLane))throw u.retryLane=e,Oi(l,e),it(s,l,e),go;Fo(o)||wa(),t=vo(l,t,i)}else Fo(o)?(t.flags|=192,t.child=l.child,t=null):(l=u.treeContext,dl=zt(o.nextSibling),Xl=t,ll=!0,ii=null,St=!1,l!==null&&wu(t,l),t=yo(t,e.children),t.flags|=4096);return t}return n?(ui(),o=e.fallback,n=t.mode,u=l.child,h=u.sibling,e=Ht(u,{mode:"hidden",children:e.children}),e.subtreeFlags=u.subtreeFlags&65011712,h!==null?o=Ht(h,o):(o=xi(o,n,i,null),o.flags|=2),o.return=t,e.return=t,e.sibling=o,t.child=e,en(null,e),e=t.child,o=l.child.memoizedState,o===null?o=mo(i):(n=o.cachePool,n!==null?(u=Dl._currentValue,n=n.parent!==u?{parent:u,pool:u}:n):n=Mu(),o={baseLanes:o.baseLanes|i,cachePool:n}),e.memoizedState=o,e.childLanes=ho(l,s,i),t.memoizedState=po,en(l.child,e)):(ri(t),i=l.child,l=i.sibling,i=Ht(i,{mode:"visible",children:e.children}),i.return=t,i.sibling=null,l!==null&&(s=t.deletions,s===null?(t.deletions=[l],t.flags|=16):s.push(l)),t.child=i,t.memoizedState=null,i)}function yo(l,t){return t=fa({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function fa(l,t){return l=ot(22,l,null,t),l.lanes=0,l}function vo(l,t,i){return qi(t,l.child,null,i),l=yo(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Xc(l,t,i){l.lanes|=t;var e=l.alternate;e!==null&&(e.lanes|=t),xs(l.return,t,i)}function bo(l,t,i,e,n,a){var s=l.memoizedState;s===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:i,tailMode:n,treeForkCount:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=e,s.tail=i,s.tailMode=n,s.treeForkCount=a)}function Gc(l,t,i){var e=t.pendingProps,n=e.revealOrder,a=e.tail;e=e.children;var s=Cl.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,D(Cl,s),Ll(l,t,e,i),e=ll?Qe:0,!o&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Xc(l,i,t);else if(l.tag===19)Xc(l,i,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(i=t.child,n=null;i!==null;)l=i.alternate,l!==null&&la(l)===null&&(n=i),i=i.sibling;i=n,i===null?(n=t.child,t.child=null):(n=i.sibling,i.sibling=null),bo(t,!1,n,i,a,e);break;case"backwards":case"unstable_legacy-backwards":for(i=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&la(l)===null){t.child=n;break}l=n.sibling,n.sibling=i,i=n,n=l}bo(t,!0,i,null,a,e);break;case"together":bo(t,!1,null,null,void 0,e);break;default:t.memoizedState=null}return t.child}function Lt(l,t,i){if(l!==null&&(t.dependencies=l.dependencies),fi|=t.lanes,(i&t.childLanes)===0)if(l!==null){if(oe(l,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(p(153));if(t.child!==null){for(l=t.child,i=Ht(l,l.pendingProps),t.child=i,i.return=t;l.sibling!==null;)l=l.sibling,i=i.sibling=Ht(l,l.pendingProps),i.return=t;i.sibling=null}return t.child}function So(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Zn(l)))}function rd(l,t,i){switch(t.tag){case 3:Zl(t,t.stateNode.containerInfo),ni(t,Dl,l.memoizedState.cache),Ni();break;case 27:case 5:Ce(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:ni(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$s(t),null;break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(ri(t),t.flags|=128,null):(i&t.child.childLanes)!==0?qc(l,t,i):(ri(t),l=Lt(l,t,i),l!==null?l.sibling:null);ri(t);break;case 19:var n=(l.flags&128)!==0;if(e=(i&t.childLanes)!==0,e||(oe(l,t,i,!1),e=(i&t.childLanes)!==0),n){if(e)return Gc(l,t,i);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(Cl,Cl.current),e)break;return null;case 22:return t.lanes=0,Nc(l,t,i,t.pendingProps);case 24:ni(t,Dl,l.memoizedState.cache)}return Lt(l,t,i)}function Lc(l,t,i){if(l!==null)if(l.memoizedProps!==t.pendingProps)xl=!0;else{if(!So(l,i)&&(t.flags&128)===0)return xl=!1,rd(l,t,i);xl=(l.flags&131072)!==0}else xl=!1,ll&&(t.flags&1048576)!==0&&Su(t,Qe,t.index);switch(t.lanes=0,t.tag){case 16:l:{var e=t.pendingProps;if(l=Ri(t.elementType),t.type=l,typeof l=="function")Ts(l)?(e=Gi(l,e),t.tag=1,t=Rc(null,t,l,e,i)):(t.tag=0,t=fo(null,t,l,e,i));else{if(l!=null){var n=l.$$typeof;if(n===_l){t.tag=11,t=Dc(null,t,l,e,i);break l}else if(n===k){t.tag=14,t=Oc(null,t,l,e,i);break l}}throw t=xt(l)||l,Error(p(306,t,""))}}return t;case 0:return fo(l,t,t.type,t.pendingProps,i);case 1:return e=t.type,n=Gi(e,t.pendingProps),Rc(l,t,e,n,i);case 3:l:{if(Zl(t,t.stateNode.containerInfo),l===null)throw Error(p(387));e=t.pendingProps;var a=t.memoizedState;n=a.element,qs(l,t),Fe(t,e,null,i);var s=t.memoizedState;if(e=s.cache,ni(t,Dl,e),e!==a.cache&&Ns(t,[Dl],i,!0),We(),e=s.element,a.isDehydrated)if(a={element:e,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Yc(l,t,e,i);break l}else if(e!==n){n=yt(Error(p(424)),t),$e(n),t=Yc(l,t,e,i);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(dl=zt(l.firstChild),Xl=t,ll=!0,ii=null,St=!0,i=Nu(t,null,e,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Ni(),e===n){t=Lt(l,t,i);break l}Ll(l,t,e,i)}t=t.child}return t;case 26:return ga(l,t),l===null?(i=Pg(t.type,null,t.pendingProps,null))?t.memoizedState=i:ll||(i=t.type,l=t.pendingProps,e=Ca(K.current).createElement(i),e[ql]=t,e[Wl]=l,Ql(e,i,l),Rl(e),t.stateNode=e):t.memoizedState=Pg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Ce(t),l===null&&ll&&(e=t.stateNode=Wg(t.type,t.pendingProps,K.current),Xl=t,St=!0,n=dl,yi(t.type)?(Po=n,dl=zt(e.firstChild)):dl=n),Ll(l,t,t.pendingProps.children,i),ga(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((n=e=dl)&&(e=Yd(e,t.type,t.pendingProps,St),e!==null?(t.stateNode=e,Xl=t,dl=zt(e.firstChild),St=!1,n=!0):n=!1),n||ei(t)),Ce(t),n=t.type,a=t.pendingProps,s=l!==null?l.memoizedProps:null,e=a.children,Ko(n,a)?e=null:s!==null&&Ko(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=Zs(l,t,Pp,null,null,i),vn._currentValue=n),ga(l,t),Ll(l,t,e,i),t.child;case 6:return l===null&&ll&&((l=i=dl)&&(i=qd(i,t.pendingProps,St),i!==null?(t.stateNode=i,Xl=t,dl=null,l=!0):l=!1),l||ei(t)),null;case 13:return qc(l,t,i);case 4:return Zl(t,t.stateNode.containerInfo),e=t.pendingProps,l===null?t.child=qi(t,null,e,i):Ll(l,t,e,i),t.child;case 11:return Dc(l,t,t.type,t.pendingProps,i);case 7:return Ll(l,t,t.pendingProps,i),t.child;case 8:return Ll(l,t,t.pendingProps.children,i),t.child;case 12:return Ll(l,t,t.pendingProps.children,i),t.child;case 10:return e=t.pendingProps,ni(t,t.type,e.value),Ll(l,t,e.children,i),t.child;case 9:return n=t.type._context,e=t.pendingProps.children,Bi(t),n=Gl(n),e=e(n),t.flags|=1,Ll(l,t,e,i),t.child;case 14:return Oc(l,t,t.type,t.pendingProps,i);case 15:return xc(l,t,t.type,t.pendingProps,i);case 19:return Gc(l,t,i);case 31:return od(l,t,i);case 22:return Nc(l,t,i,t.pendingProps);case 24:return Bi(t),e=Gl(Dl),l===null?(n=Hs(),n===null&&(n=pl,a=Us(),n.pooledCache=a,a.refCount++,a!==null&&(n.pooledCacheLanes|=i),n=a),t.memoizedState={parent:e,cache:n},Ys(t),ni(t,Dl,n)):((l.lanes&i)!==0&&(qs(l,t),Fe(t,null,null,i),We()),n=l.memoizedState,a=t.memoizedState,n.parent!==e?(n={parent:e,cache:e},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ni(t,Dl,e)):(e=a.cache,ni(t,Dl,e),e!==n.cache&&Ns(t,[Dl],i,!0))),Ll(l,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Qt(l){l.flags|=4}function wo(l,t,i,e,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(mg())l.flags|=8192;else throw Yi=Wn,Rs}else l.flags&=-16777217}function Qc(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!af(t))if(mg())l.flags|=8192;else throw Yi=Wn,Rs}function pa(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?zr():536870912,l.lanes|=t,be|=t)}function nn(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?l.tail=null:i.sibling=null;break;case"collapsed":i=l.tail;for(var e=null;i!==null;)i.alternate!==null&&(e=i),i=i.sibling;e===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:e.sibling=null}}function ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,i=0,e=0;if(t)for(var n=l.child;n!==null;)i|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)i|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=e,l.childLanes=i,t}function ud(l,t,i){var e=t.pendingProps;switch(Cs(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return i=t.stateNode,e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),qt(Dl),Ml(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(l===null||l.child===null)&&(se(t)?Qt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ds())),ml(t),null;case 26:var n=t.type,a=t.memoizedState;return l===null?(Qt(t),a!==null?(ml(t),Qc(t,a)):(ml(t),wo(t,n,null,e,i))):a?a!==l.memoizedState?(Qt(t),ml(t),Qc(t,a)):(ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==e&&Qt(t),ml(t),wo(t,n,l,e,i)),null;case 27:if(Tn(t),i=K.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Qt(t);else{if(!e){if(t.stateNode===null)throw Error(p(166));return ml(t),null}l=H.current,se(t)?zu(t):(l=Wg(n,e,i),t.stateNode=l,Qt(t))}return ml(t),null;case 5:if(Tn(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&Qt(t);else{if(!e){if(t.stateNode===null)throw Error(p(166));return ml(t),null}if(a=H.current,se(t))zu(t);else{var s=Ca(K.current);switch(a){case 1:a=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:a=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":a=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":a=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":a=s.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof e.is=="string"?s.createElement("select",{is:e.is}):s.createElement("select"),e.multiple?a.multiple=!0:e.size&&(a.size=e.size);break;default:a=typeof e.is=="string"?s.createElement(n,{is:e.is}):s.createElement(n)}}a[ql]=t,a[Wl]=e;l:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break l;for(;s.sibling===null;){if(s.return===null||s.return===t)break l;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;l:switch(Ql(a,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break l;case"img":e=!0;break l;default:e=!1}e&&Qt(t)}}return ml(t),wo(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,i),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==e&&Qt(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(p(166));if(l=K.current,se(t)){if(l=t.stateNode,i=t.memoizedProps,e=null,n=Xl,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}l[ql]=t,l=!!(l.nodeValue===i||e!==null&&e.suppressHydrationWarning===!0||qg(l.nodeValue,i)),l||ei(t,!0)}else l=Ca(l).createTextNode(e),l[ql]=t,t.stateNode=l}return ml(t),null;case 31:if(i=t.memoizedState,l===null||l.memoizedState!==null){if(e=se(t),i!==null){if(l===null){if(!e)throw Error(p(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(557));l[ql]=t}else Ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),l=!1}else i=Ds(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=i),l=!0;if(!l)return t.flags&256?(ut(t),t):(ut(t),null);if((t.flags&128)!==0)throw Error(p(558))}return ml(t),null;case 13:if(e=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=se(t),e!==null&&e.dehydrated!==null){if(l===null){if(!n)throw Error(p(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(p(317));n[ql]=t}else Ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),n=!1}else n=Ds(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ut(t),t):(ut(t),null)}return ut(t),(t.flags&128)!==0?(t.lanes=i,t):(i=e!==null,l=l!==null&&l.memoizedState!==null,i&&(e=t.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048)),i!==l&&i&&(t.child.flags|=8192),pa(t,t.updateQueue),ml(t),null);case 4:return Ml(),l===null&&Qo(t.stateNode.containerInfo),ml(t),null;case 10:return qt(t.type),ml(t),null;case 19:if(j(Cl),e=t.memoizedState,e===null)return ml(t),null;if(n=(t.flags&128)!==0,a=e.rendering,a===null)if(n)nn(e,!1);else{if(jl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(a=la(l),a!==null){for(t.flags|=128,nn(e,!1),l=a.updateQueue,t.updateQueue=l,pa(t,l),t.subtreeFlags=0,l=i,i=t.child;i!==null;)yu(i,l),i=i.sibling;return D(Cl,Cl.current&1|2),ll&&Rt(t,e.treeForkCount),t.child}l=l.sibling}e.tail!==null&&et()>va&&(t.flags|=128,n=!0,nn(e,!1),t.lanes=4194304)}else{if(!n)if(l=la(a),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,pa(t,l),nn(e,!0),e.tail===null&&e.tailMode==="hidden"&&!a.alternate&&!ll)return ml(t),null}else 2*et()-e.renderingStartTime>va&&i!==536870912&&(t.flags|=128,n=!0,nn(e,!1),t.lanes=4194304);e.isBackwards?(a.sibling=t.child,t.child=a):(l=e.last,l!==null?l.sibling=a:t.child=a,e.last=a)}return e.tail!==null?(l=e.tail,e.rendering=l,e.tail=l.sibling,e.renderingStartTime=et(),l.sibling=null,i=Cl.current,D(Cl,n?i&1|2:i&1),ll&&Rt(t,e.treeForkCount),l):(ml(t),null);case 22:case 23:return ut(t),Qs(),e=t.memoizedState!==null,l!==null?l.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(i&536870912)!==0&&(t.flags&128)===0&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),i=t.updateQueue,i!==null&&pa(t,i.retryQueue),i=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(t.flags|=2048),l!==null&&j(Hi),null;case 24:return i=null,l!==null&&(i=l.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),qt(Dl),ml(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function cd(l,t){switch(Cs(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return qt(Dl),Ml(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(ut(t),t.alternate===null)throw Error(p(340));Ni()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(ut(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(p(340));Ni()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return j(Cl),null;case 4:return Ml(),null;case 10:return qt(t.type),null;case 22:case 23:return ut(t),Qs(),l!==null&&j(Hi),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return qt(Dl),null;case 25:return null;default:return null}}function $c(l,t){switch(Cs(t),t.tag){case 3:qt(Dl),Ml();break;case 26:case 27:case 5:Tn(t);break;case 4:Ml();break;case 31:t.memoizedState!==null&&ut(t);break;case 13:ut(t);break;case 19:j(Cl);break;case 10:qt(t.type);break;case 22:case 23:ut(t),Qs(),l!==null&&j(Hi);break;case 24:qt(Dl)}}function an(l,t){try{var i=t.updateQueue,e=i!==null?i.lastEffect:null;if(e!==null){var n=e.next;i=n;do{if((i.tag&l)===l){e=void 0;var a=i.create,s=i.inst;e=a(),s.destroy=e}i=i.next}while(i!==n)}}catch(o){sl(t,t.return,o)}}function ci(l,t,i){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var a=n.next;e=a;do{if((e.tag&l)===l){var s=e.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,n=t;var u=i,h=o;try{h()}catch(S){sl(n,u,S)}}}e=e.next}while(e!==a)}}catch(S){sl(t,t.return,S)}}function Vc(l){var t=l.updateQueue;if(t!==null){var i=l.stateNode;try{Bu(t,i)}catch(e){sl(l,l.return,e)}}}function Zc(l,t,i){i.props=Gi(l.type,l.memoizedProps),i.state=l.memoizedState;try{i.componentWillUnmount()}catch(e){sl(l,t,e)}}function sn(l,t){try{var i=l.ref;if(i!==null){switch(l.tag){case 26:case 27:case 5:var e=l.stateNode;break;case 30:e=l.stateNode;break;default:e=l.stateNode}typeof i=="function"?l.refCleanup=i(e):i.current=e}}catch(n){sl(l,t,n)}}function Dt(l,t){var i=l.ref,e=l.refCleanup;if(i!==null)if(typeof e=="function")try{e()}catch(n){sl(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(n){sl(l,t,n)}else i.current=null}function kc(l){var t=l.type,i=l.memoizedProps,e=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&e.focus();break l;case"img":i.src?e.src=i.src:i.srcSet&&(e.srcset=i.srcSet)}}catch(n){sl(l,l.return,n)}}function zo(l,t,i){try{var e=l.stateNode;xd(e,l.type,i,t),e[Wl]=t}catch(n){sl(l,l.return,n)}}function Kc(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&yi(l.type)||l.tag===4}function _o(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Kc(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&yi(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function To(l,t,i){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(l),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Ut));else if(e!==4&&(e===27&&yi(l.type)&&(i=l.stateNode,t=null),l=l.child,l!==null))for(To(l,t,i),l=l.sibling;l!==null;)To(l,t,i),l=l.sibling}function da(l,t,i){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?i.insertBefore(l,t):i.appendChild(l);else if(e!==4&&(e===27&&yi(l.type)&&(i=l.stateNode),l=l.child,l!==null))for(da(l,t,i),l=l.sibling;l!==null;)da(l,t,i),l=l.sibling}function Jc(l){var t=l.stateNode,i=l.memoizedProps;try{for(var e=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ql(t,e,i),t[ql]=l,t[Wl]=i}catch(a){sl(l,l.return,a)}}var $t=!1,Nl=!1,jo=!1,Wc=typeof WeakSet=="function"?WeakSet:Set,Yl=null;function gd(l,t){if(l=l.containerInfo,Zo=Ba,l=ru(l),ys(l)){if("selectionStart"in l)var i={start:l.selectionStart,end:l.selectionEnd};else l:{i=(i=l.ownerDocument)&&i.defaultView||window;var e=i.getSelection&&i.getSelection();if(e&&e.rangeCount!==0){i=e.anchorNode;var n=e.anchorOffset,a=e.focusNode;e=e.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break l}var s=0,o=-1,u=-1,h=0,S=0,T=l,y=null;t:for(;;){for(var b;T!==i||n!==0&&T.nodeType!==3||(o=s+n),T!==a||e!==0&&T.nodeType!==3||(u=s+e),T.nodeType===3&&(s+=T.nodeValue.length),(b=T.firstChild)!==null;)y=T,T=b;for(;;){if(T===l)break t;if(y===i&&++h===n&&(o=s),y===a&&++S===e&&(u=s),(b=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=b}i=o===-1||u===-1?null:{start:o,end:u}}else i=null}i=i||{start:0,end:0}}else i=null;for(ko={focusedElem:l,selectionRange:i},Ba=!1,Yl=t;Yl!==null;)if(t=Yl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Yl=l;else for(;Yl!==null;){switch(t=Yl,a=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(i=0;i<l.length;i++)n=l[i],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){l=void 0,i=t,n=a.memoizedProps,a=a.memoizedState,e=i.stateNode;try{var B=Gi(i.type,n);l=e.getSnapshotBeforeUpdate(B,a),e.__reactInternalSnapshotBeforeUpdate=l}catch(X){sl(i,i.return,X)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,i=l.nodeType,i===9)Wo(l);else if(i===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Wo(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(p(163))}if(l=t.sibling,l!==null){l.return=t.return,Yl=l;break}Yl=t.return}}function Fc(l,t,i){var e=i.flags;switch(i.tag){case 0:case 11:case 15:Zt(l,i),e&4&&an(5,i);break;case 1:if(Zt(l,i),e&4)if(l=i.stateNode,t===null)try{l.componentDidMount()}catch(s){sl(i,i.return,s)}else{var n=Gi(i.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(s){sl(i,i.return,s)}}e&64&&Vc(i),e&512&&sn(i,i.return);break;case 3:if(Zt(l,i),e&64&&(l=i.updateQueue,l!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Bu(l,t)}catch(s){sl(i,i.return,s)}}break;case 27:t===null&&e&4&&Jc(i);case 26:case 5:Zt(l,i),t===null&&e&4&&kc(i),e&512&&sn(i,i.return);break;case 12:Zt(l,i);break;case 31:Zt(l,i),e&4&&lg(l,i);break;case 13:Zt(l,i),e&4&&tg(l,i),e&64&&(l=i.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(i=Sd.bind(null,i),Xd(l,i))));break;case 22:if(e=i.memoizedState!==null||$t,!e){t=t!==null&&t.memoizedState!==null||Nl,n=$t;var a=Nl;$t=e,(Nl=t)&&!a?kt(l,i,(i.subtreeFlags&8772)!==0):Zt(l,i),$t=n,Nl=a}break;case 30:break;default:Zt(l,i)}}function Ic(l){var t=l.alternate;t!==null&&(l.alternate=null,Ic(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&ls(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var hl=null,Il=!1;function Vt(l,t,i){for(i=i.child;i!==null;)Pc(l,t,i),i=i.sibling}function Pc(l,t,i){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ee,i)}catch{}switch(i.tag){case 26:Nl||Dt(i,t),Vt(l,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Nl||Dt(i,t);var e=hl,n=Il;yi(i.type)&&(hl=i.stateNode,Il=!1),Vt(l,t,i),mn(i.stateNode),hl=e,Il=n;break;case 5:Nl||Dt(i,t);case 6:if(e=hl,n=Il,hl=null,Vt(l,t,i),hl=e,Il=n,hl!==null)if(Il)try{(hl.nodeType===9?hl.body:hl.nodeName==="HTML"?hl.ownerDocument.body:hl).removeChild(i.stateNode)}catch(a){sl(i,t,a)}else try{hl.removeChild(i.stateNode)}catch(a){sl(i,t,a)}break;case 18:hl!==null&&(Il?(l=hl,Vg(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,i.stateNode),Me(l)):Vg(hl,i.stateNode));break;case 4:e=hl,n=Il,hl=i.stateNode.containerInfo,Il=!0,Vt(l,t,i),hl=e,Il=n;break;case 0:case 11:case 14:case 15:ci(2,i,t),Nl||ci(4,i,t),Vt(l,t,i);break;case 1:Nl||(Dt(i,t),e=i.stateNode,typeof e.componentWillUnmount=="function"&&Zc(i,t,e)),Vt(l,t,i);break;case 21:Vt(l,t,i);break;case 22:Nl=(e=Nl)||i.memoizedState!==null,Vt(l,t,i),Nl=e;break;default:Vt(l,t,i)}}function lg(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Me(l)}catch(i){sl(t,t.return,i)}}}function tg(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Me(l)}catch(i){sl(t,t.return,i)}}function fd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wc),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wc),t;default:throw Error(p(435,l.tag))}}function ma(l,t){var i=fd(l);t.forEach(function(e){if(!i.has(e)){i.add(e);var n=wd.bind(null,l,e);e.then(n,n)}})}function Pl(l,t){var i=t.deletions;if(i!==null)for(var e=0;e<i.length;e++){var n=i[e],a=l,s=t,o=s;l:for(;o!==null;){switch(o.tag){case 27:if(yi(o.type)){hl=o.stateNode,Il=!1;break l}break;case 5:hl=o.stateNode,Il=!1;break l;case 3:case 4:hl=o.stateNode.containerInfo,Il=!0;break l}o=o.return}if(hl===null)throw Error(p(160));Pc(a,s,n),hl=null,Il=!1,a=n.alternate,a!==null&&(a.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ig(t,l),t=t.sibling}var At=null;function ig(l,t){var i=l.alternate,e=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),e&4&&(ci(3,l,l.return),an(3,l),ci(5,l,l.return));break;case 1:Pl(t,l),lt(l),e&512&&(Nl||i===null||Dt(i,i.return)),e&64&&$t&&(l=l.updateQueue,l!==null&&(e=l.callbacks,e!==null&&(i=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:var n=At;if(Pl(t,l),lt(l),e&512&&(Nl||i===null||Dt(i,i.return)),e&4){var a=i!==null?i.memoizedState:null;if(e=l.memoizedState,i===null)if(e===null)if(l.stateNode===null){l:{e=l.type,i=l.memoizedProps,n=n.ownerDocument||n;t:switch(e){case"title":a=n.getElementsByTagName("title")[0],(!a||a[xe]||a[ql]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(e),n.head.insertBefore(a,n.querySelector("head > title"))),Ql(a,e,i),a[ql]=l,Rl(a),e=a;break l;case"link":var s=ef("link","href",n).get(e+(i.href||""));if(s){for(var o=0;o<s.length;o++)if(a=s[o],a.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&a.getAttribute("rel")===(i.rel==null?null:i.rel)&&a.getAttribute("title")===(i.title==null?null:i.title)&&a.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){s.splice(o,1);break t}}a=n.createElement(e),Ql(a,e,i),n.head.appendChild(a);break;case"meta":if(s=ef("meta","content",n).get(e+(i.content||""))){for(o=0;o<s.length;o++)if(a=s[o],a.getAttribute("content")===(i.content==null?null:""+i.content)&&a.getAttribute("name")===(i.name==null?null:i.name)&&a.getAttribute("property")===(i.property==null?null:i.property)&&a.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&a.getAttribute("charset")===(i.charSet==null?null:i.charSet)){s.splice(o,1);break t}}a=n.createElement(e),Ql(a,e,i),n.head.appendChild(a);break;default:throw Error(p(468,e))}a[ql]=l,Rl(a),e=a}l.stateNode=e}else nf(n,l.type,l.stateNode);else l.stateNode=tf(n,e,l.memoizedProps);else a!==e?(a===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):a.count--,e===null?nf(n,l.type,l.stateNode):tf(n,e,l.memoizedProps)):e===null&&l.stateNode!==null&&zo(l,l.memoizedProps,i.memoizedProps)}break;case 27:Pl(t,l),lt(l),e&512&&(Nl||i===null||Dt(i,i.return)),i!==null&&e&4&&zo(l,l.memoizedProps,i.memoizedProps);break;case 5:if(Pl(t,l),lt(l),e&512&&(Nl||i===null||Dt(i,i.return)),l.flags&32){n=l.stateNode;try{Wi(n,"")}catch(B){sl(l,l.return,B)}}e&4&&l.stateNode!=null&&(n=l.memoizedProps,zo(l,n,i!==null?i.memoizedProps:n)),e&1024&&(jo=!0);break;case 6:if(Pl(t,l),lt(l),e&4){if(l.stateNode===null)throw Error(p(162));e=l.memoizedProps,i=l.stateNode;try{i.nodeValue=e}catch(B){sl(l,l.return,B)}}break;case 3:if(Oa=null,n=At,At=Ea(t.containerInfo),Pl(t,l),At=n,lt(l),e&4&&i!==null&&i.memoizedState.isDehydrated)try{Me(t.containerInfo)}catch(B){sl(l,l.return,B)}jo&&(jo=!1,eg(l));break;case 4:e=At,At=Ea(l.stateNode.containerInfo),Pl(t,l),lt(l),At=e;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,ma(l,e)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(ya=et()),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,ma(l,e)));break;case 22:n=l.memoizedState!==null;var u=i!==null&&i.memoizedState!==null,h=$t,S=Nl;if($t=h||n,Nl=S||u,Pl(t,l),Nl=S,$t=h,lt(l),e&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(i===null||u||$t||Nl||Li(l)),i=null,t=l;;){if(t.tag===5||t.tag===26){if(i===null){u=i=t;try{if(a=u.stateNode,n)s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=u.stateNode;var T=u.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;o.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(B){sl(u,u.return,B)}}}else if(t.tag===6){if(i===null){u=t;try{u.stateNode.nodeValue=n?"":u.memoizedProps}catch(B){sl(u,u.return,B)}}}else if(t.tag===18){if(i===null){u=t;try{var b=u.stateNode;n?Zg(b,!0):Zg(u.stateNode,!1)}catch(B){sl(u,u.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=l.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,ma(l,i))));break;case 19:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,ma(l,e)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var i,e=l.return;e!==null;){if(Kc(e)){i=e;break}e=e.return}if(i==null)throw Error(p(160));switch(i.tag){case 27:var n=i.stateNode,a=_o(l);da(l,a,n);break;case 5:var s=i.stateNode;i.flags&32&&(Wi(s,""),i.flags&=-33);var o=_o(l);da(l,o,s);break;case 3:case 4:var u=i.stateNode.containerInfo,h=_o(l);To(l,h,u);break;default:throw Error(p(161))}}catch(S){sl(l,l.return,S)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function eg(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;eg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Zt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fc(l,t.alternate,t),t=t.sibling}function Li(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ci(4,t,t.return),Li(t);break;case 1:Dt(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Zc(t,t.return,i),Li(t);break;case 27:mn(t.stateNode);case 26:case 5:Dt(t,t.return),Li(t);break;case 22:t.memoizedState===null&&Li(t);break;case 30:Li(t);break;default:Li(t)}l=l.sibling}}function kt(l,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,n=l,a=t,s=a.flags;switch(a.tag){case 0:case 11:case 15:kt(n,a,i),an(4,a);break;case 1:if(kt(n,a,i),e=a,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){sl(e,e.return,h)}if(e=a,n=e.updateQueue,n!==null){var o=e.stateNode;try{var u=n.shared.hiddenCallbacks;if(u!==null)for(n.shared.hiddenCallbacks=null,n=0;n<u.length;n++)Uu(u[n],o)}catch(h){sl(e,e.return,h)}}i&&s&64&&Vc(a),sn(a,a.return);break;case 27:Jc(a);case 26:case 5:kt(n,a,i),i&&e===null&&s&4&&kc(a),sn(a,a.return);break;case 12:kt(n,a,i);break;case 31:kt(n,a,i),i&&s&4&&lg(n,a);break;case 13:kt(n,a,i),i&&s&4&&tg(n,a);break;case 22:a.memoizedState===null&&kt(n,a,i),sn(a,a.return);break;case 30:break;default:kt(n,a,i)}t=t.sibling}}function Ao(l,t){var i=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(l!=null&&l.refCount++,i!=null&&Ve(i))}function Mo(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ve(l))}function Mt(l,t,i,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ng(l,t,i,e),t=t.sibling}function ng(l,t,i,e){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(l,t,i,e),n&2048&&an(9,t);break;case 1:Mt(l,t,i,e);break;case 3:Mt(l,t,i,e),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Ve(l)));break;case 12:if(n&2048){Mt(l,t,i,e),l=t.stateNode;try{var a=t.memoizedProps,s=a.id,o=a.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(u){sl(t,t.return,u)}}else Mt(l,t,i,e);break;case 31:Mt(l,t,i,e);break;case 13:Mt(l,t,i,e);break;case 23:break;case 22:a=t.stateNode,s=t.alternate,t.memoizedState!==null?a._visibility&2?Mt(l,t,i,e):on(l,t):a._visibility&2?Mt(l,t,i,e):(a._visibility|=2,he(l,t,i,e,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ao(s,t);break;case 24:Mt(l,t,i,e),n&2048&&Mo(t.alternate,t);break;default:Mt(l,t,i,e)}}function he(l,t,i,e,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=l,s=t,o=i,u=e,h=s.flags;switch(s.tag){case 0:case 11:case 15:he(a,s,o,u,n),an(8,s);break;case 23:break;case 22:var S=s.stateNode;s.memoizedState!==null?S._visibility&2?he(a,s,o,u,n):on(a,s):(S._visibility|=2,he(a,s,o,u,n)),n&&h&2048&&Ao(s.alternate,s);break;case 24:he(a,s,o,u,n),n&&h&2048&&Mo(s.alternate,s);break;default:he(a,s,o,u,n)}t=t.sibling}}function on(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=l,e=t,n=e.flags;switch(e.tag){case 22:on(i,e),n&2048&&Ao(e.alternate,e);break;case 24:on(i,e),n&2048&&Mo(e.alternate,e);break;default:on(i,e)}t=t.sibling}}var rn=8192;function ye(l,t,i){if(l.subtreeFlags&rn)for(l=l.child;l!==null;)ag(l,t,i),l=l.sibling}function ag(l,t,i){switch(l.tag){case 26:ye(l,t,i),l.flags&rn&&l.memoizedState!==null&&Id(i,At,l.memoizedState,l.memoizedProps);break;case 5:ye(l,t,i);break;case 3:case 4:var e=At;At=Ea(l.stateNode.containerInfo),ye(l,t,i),At=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=rn,rn=16777216,ye(l,t,i),rn=e):ye(l,t,i));break;default:ye(l,t,i)}}function sg(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function un(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var e=t[i];Yl=e,rg(e,l)}sg(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)og(l),l=l.sibling}function og(l){switch(l.tag){case 0:case 11:case 15:un(l),l.flags&2048&&ci(9,l,l.return);break;case 3:un(l);break;case 12:un(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,ha(l)):un(l);break;default:un(l)}}function ha(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var e=t[i];Yl=e,rg(e,l)}sg(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ci(8,t,t.return),ha(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,ha(t));break;default:ha(t)}l=l.sibling}}function rg(l,t){for(;Yl!==null;){var i=Yl;switch(i.tag){case 0:case 11:case 15:ci(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var e=i.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Ve(i.memoizedState.cache)}if(e=i.child,e!==null)e.return=i,Yl=e;else l:for(i=l;Yl!==null;){e=Yl;var n=e.sibling,a=e.return;if(Ic(e),e===i){Yl=null;break l}if(n!==null){n.return=a,Yl=n;break l}Yl=a}}}var pd={getCacheForType:function(l){var t=Gl(Dl),i=t.data.get(l);return i===void 0&&(i=l(),t.data.set(l,i)),i},cacheSignal:function(){return Gl(Dl).controller.signal}},dd=typeof WeakMap=="function"?WeakMap:Map,el=0,pl=null,J=null,F=0,al=0,ct=null,gi=!1,ve=!1,Co=!1,Kt=0,jl=0,fi=0,Qi=0,Eo=0,gt=0,be=0,cn=null,tt=null,Do=!1,ya=0,ug=0,va=1/0,ba=null,pi=null,Bl=0,di=null,Se=null,Jt=0,Oo=0,xo=null,cg=null,gn=0,No=null;function ft(){return(el&2)!==0&&F!==0?F&-F:w.T!==null?qo():Ar()}function gg(){if(gt===0)if((F&536870912)===0||ll){var l=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),gt=l}else gt=536870912;return l=rt.current,l!==null&&(l.flags|=32),gt}function it(l,t,i){(l===pl&&(al===2||al===9)||l.cancelPendingCommit!==null)&&(we(l,0),mi(l,F,gt,!1)),Oe(l,i),((el&2)===0||l!==pl)&&(l===pl&&((el&2)===0&&(Qi|=i),jl===4&&mi(l,F,gt,!1)),Ot(l))}function fg(l,t,i){if((el&6)!==0)throw Error(p(327));var e=!i&&(t&127)===0&&(t&l.expiredLanes)===0||De(l,t),n=e?yd(l,t):Bo(l,t,!0),a=e;do{if(n===0){ve&&!e&&mi(l,t,0,!1);break}else{if(i=l.current.alternate,a&&!md(i)){n=Bo(l,t,!1),a=!1;continue}if(n===2){if(a=t,l.errorRecoveryDisabledLanes&a)var s=0;else s=l.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;l:{var o=l;n=cn;var u=o.current.memoizedState.isDehydrated;if(u&&(we(o,s).flags|=256),s=Bo(o,s,!1),s!==2){if(Co&&!u){o.errorRecoveryDisabledLanes|=a,Qi|=a,n=4;break l}a=tt,tt=n,a!==null&&(tt===null?tt=a:tt.push.apply(tt,a))}n=s}if(a=!1,n!==2)continue}}if(n===1){we(l,0),mi(l,t,0,!0);break}l:{switch(e=l,a=n,a){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:mi(e,t,gt,!gi);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(n=ya+300-et(),10<n)){if(mi(e,t,gt,!gi),En(e,0,!0)!==0)break l;Jt=t,e.timeoutHandle=Qg(pg.bind(null,e,i,tt,ba,Do,t,gt,Qi,be,gi,a,"Throttled",-0,0),n);break l}pg(e,i,tt,ba,Do,t,gt,Qi,be,gi,a,null,-0,0)}}break}while(!0);Ot(l)}function pg(l,t,i,e,n,a,s,o,u,h,S,T,y,b){if(l.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},ag(t,a,T);var B=(a&62914560)===a?ya-et():(a&4194048)===a?ug-et():0;if(B=Pd(T,B),B!==null){Jt=a,l.cancelPendingCommit=B(wg.bind(null,l,t,a,i,e,n,s,o,u,S,T,null,y,b)),mi(l,a,s,!h);return}}wg(l,t,a,i,e,n,s,o,u)}function md(l){for(var t=l;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var e=0;e<i.length;e++){var n=i[e],a=n.getSnapshot;n=n.value;try{if(!st(a(),n))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mi(l,t,i,e){t&=~Eo,t&=~Qi,l.suspendedLanes|=t,l.pingedLanes&=~t,e&&(l.warmLanes|=t),e=l.expirationTimes;for(var n=t;0<n;){var a=31-at(n),s=1<<a;e[a]=-1,n&=~s}i!==0&&_r(l,i,t)}function Sa(){return(el&6)===0?(fn(0),!1):!0}function Uo(){if(J!==null){if(al===0)var l=J.return;else l=J,Yt=Ui=null,Js(l),ge=null,ke=0,l=J;for(;l!==null;)$c(l.alternate,l),l=l.return;J=null}}function we(l,t){var i=l.timeoutHandle;i!==-1&&(l.timeoutHandle=-1,Bd(i)),i=l.cancelPendingCommit,i!==null&&(l.cancelPendingCommit=null,i()),Jt=0,Uo(),pl=l,J=i=Ht(l.current,null),F=t,al=0,ct=null,gi=!1,ve=De(l,t),Co=!1,be=gt=Eo=Qi=fi=jl=0,tt=cn=null,Do=!1,(t&8)!==0&&(t|=t&32);var e=l.entangledLanes;if(e!==0)for(l=l.entanglements,e&=t;0<e;){var n=31-at(e),a=1<<n;t|=l[n],e&=~a}return Kt=t,Gn(),i}function dg(l,t){$=null,w.H=tn,t===ce||t===Jn?(t=Du(),al=3):t===Rs?(t=Du(),al=4):al=t===go?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,J===null&&(jl=1,ua(l,yt(t,l.current)))}function mg(){var l=rt.current;return l===null?!0:(F&4194048)===F?wt===null:(F&62914560)===F||(F&536870912)!==0?l===wt:!1}function hg(){var l=w.H;return w.H=tn,l===null?tn:l}function yg(){var l=w.A;return w.A=pd,l}function wa(){jl=4,gi||(F&4194048)!==F&&rt.current!==null||(ve=!0),(fi&134217727)===0&&(Qi&134217727)===0||pl===null||mi(pl,F,gt,!1)}function Bo(l,t,i){var e=el;el|=2;var n=hg(),a=yg();(pl!==l||F!==t)&&(ba=null,we(l,t)),t=!1;var s=jl;l:do try{if(al!==0&&J!==null){var o=J,u=ct;switch(al){case 8:Uo(),s=6;break l;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var h=al;if(al=0,ct=null,ze(l,o,u,h),i&&ve){s=0;break l}break;default:h=al,al=0,ct=null,ze(l,o,u,h)}}hd(),s=jl;break}catch(S){dg(l,S)}while(!0);return t&&l.shellSuspendCounter++,Yt=Ui=null,el=e,w.H=n,w.A=a,J===null&&(pl=null,F=0,Gn()),s}function hd(){for(;J!==null;)vg(J)}function yd(l,t){var i=el;el|=2;var e=hg(),n=yg();pl!==l||F!==t?(ba=null,va=et()+500,we(l,t)):ve=De(l,t);l:do try{if(al!==0&&J!==null){t=J;var a=ct;t:switch(al){case 1:al=0,ct=null,ze(l,t,a,1);break;case 2:case 9:if(Cu(a)){al=0,ct=null,bg(t);break}t=function(){al!==2&&al!==9||pl!==l||(al=7),Ot(l)},a.then(t,t);break l;case 3:al=7;break l;case 4:al=5;break l;case 7:Cu(a)?(al=0,ct=null,bg(t)):(al=0,ct=null,ze(l,t,a,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var o=J;if(s?af(s):o.stateNode.complete){al=0,ct=null;var u=o.sibling;if(u!==null)J=u;else{var h=o.return;h!==null?(J=h,za(h)):J=null}break t}}al=0,ct=null,ze(l,t,a,5);break;case 6:al=0,ct=null,ze(l,t,a,6);break;case 8:Uo(),jl=6;break l;default:throw Error(p(462))}}vd();break}catch(S){dg(l,S)}while(!0);return Yt=Ui=null,w.H=e,w.A=n,el=i,J!==null?0:(pl=null,F=0,Gn(),jl)}function vd(){for(;J!==null&&!Gf();)vg(J)}function vg(l){var t=Lc(l.alternate,l,Kt);l.memoizedProps=l.pendingProps,t===null?za(l):J=t}function bg(l){var t=l,i=t.alternate;switch(t.tag){case 15:case 0:t=Hc(i,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Hc(i,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Js(t);default:$c(i,t),t=J=yu(t,Kt),t=Lc(i,t,Kt)}l.memoizedProps=l.pendingProps,t===null?za(l):J=t}function ze(l,t,i,e){Yt=Ui=null,Js(t),ge=null,ke=0;var n=t.return;try{if(sd(l,n,t,i,F)){jl=1,ua(l,yt(i,l.current)),J=null;return}}catch(a){if(n!==null)throw J=n,a;jl=1,ua(l,yt(i,l.current)),J=null;return}t.flags&32768?(ll||e===1?l=!0:ve||(F&536870912)!==0?l=!1:(gi=l=!0,(e===2||e===9||e===3||e===6)&&(e=rt.current,e!==null&&e.tag===13&&(e.flags|=16384))),Sg(t,l)):za(t)}function za(l){var t=l;do{if((t.flags&32768)!==0){Sg(t,gi);return}l=t.return;var i=ud(t.alternate,t,Kt);if(i!==null){J=i;return}if(t=t.sibling,t!==null){J=t;return}J=t=l}while(t!==null);jl===0&&(jl=5)}function Sg(l,t){do{var i=cd(l.alternate,l);if(i!==null){i.flags&=32767,J=i;return}if(i=l.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(l=l.sibling,l!==null)){J=l;return}J=l=i}while(l!==null);jl=6,J=null}function wg(l,t,i,e,n,a,s,o,u){l.cancelPendingCommit=null;do _a();while(Bl!==0);if((el&6)!==0)throw Error(p(327));if(t!==null){if(t===l.current)throw Error(p(177));if(a=t.lanes|t.childLanes,a|=zs,Ff(l,i,a,s,o,u),l===pl&&(J=pl=null,F=0),Se=t,di=l,Jt=i,Oo=a,xo=n,cg=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,zd(jn,function(){return Ag(),null})):(l.callbackNode=null,l.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=w.T,w.T=null,n=C.p,C.p=2,s=el,el|=4;try{gd(l,t,i)}finally{el=s,C.p=n,w.T=e}}Bl=1,zg(),_g(),Tg()}}function zg(){if(Bl===1){Bl=0;var l=di,t=Se,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=w.T,w.T=null;var e=C.p;C.p=2;var n=el;el|=4;try{ig(t,l);var a=ko,s=ru(l.containerInfo),o=a.focusedElem,u=a.selectionRange;if(s!==o&&o&&o.ownerDocument&&ou(o.ownerDocument.documentElement,o)){if(u!==null&&ys(o)){var h=u.start,S=u.end;if(S===void 0&&(S=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(S,o.value.length);else{var T=o.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var b=y.getSelection(),B=o.textContent.length,X=Math.min(u.start,B),gl=u.end===void 0?X:Math.min(u.end,B);!b.extend&&X>gl&&(s=gl,gl=X,X=s);var f=su(o,X),c=su(o,gl);if(f&&c&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==c.node||b.focusOffset!==c.offset)){var m=T.createRange();m.setStart(f.node,f.offset),b.removeAllRanges(),X>gl?(b.addRange(m),b.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),b.addRange(m))}}}}for(T=[],b=o;b=b.parentNode;)b.nodeType===1&&T.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<T.length;o++){var z=T[o];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Ba=!!Zo,ko=Zo=null}finally{el=n,C.p=e,w.T=i}}l.current=t,Bl=2}}function _g(){if(Bl===2){Bl=0;var l=di,t=Se,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=w.T,w.T=null;var e=C.p;C.p=2;var n=el;el|=4;try{Fc(l,t.alternate,t)}finally{el=n,C.p=e,w.T=i}}Bl=3}}function Tg(){if(Bl===4||Bl===3){Bl=0,Lf();var l=di,t=Se,i=Jt,e=cg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Bl=5:(Bl=0,Se=di=null,jg(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(pi=null),Ia(i),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ee,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=w.T,n=C.p,C.p=2,w.T=null;try{for(var a=l.onRecoverableError,s=0;s<e.length;s++){var o=e[s];a(o.value,{componentStack:o.stack})}}finally{w.T=t,C.p=n}}(Jt&3)!==0&&_a(),Ot(l),n=l.pendingLanes,(i&261930)!==0&&(n&42)!==0?l===No?gn++:(gn=0,No=l):gn=0,fn(0)}}function jg(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Ve(t)))}function _a(){return zg(),_g(),Tg(),Ag()}function Ag(){if(Bl!==5)return!1;var l=di,t=Oo;Oo=0;var i=Ia(Jt),e=w.T,n=C.p;try{C.p=32>i?32:i,w.T=null,i=xo,xo=null;var a=di,s=Jt;if(Bl=0,Se=di=null,Jt=0,(el&6)!==0)throw Error(p(331));var o=el;if(el|=4,og(a.current),ng(a,a.current,s,i),el=o,fn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ee,a)}catch{}return!0}finally{C.p=n,w.T=e,jg(l,t)}}function Mg(l,t,i){t=yt(i,t),t=co(l.stateNode,t,2),l=oi(l,t,2),l!==null&&(Oe(l,2),Ot(l))}function sl(l,t,i){if(l.tag===3)Mg(l,l,i);else for(;t!==null;){if(t.tag===3){Mg(t,l,i);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(pi===null||!pi.has(e))){l=yt(i,l),i=Cc(2),e=oi(t,i,2),e!==null&&(Ec(i,e,t,l),Oe(e,2),Ot(e));break}}t=t.return}}function Ho(l,t,i){var e=l.pingCache;if(e===null){e=l.pingCache=new dd;var n=new Set;e.set(t,n)}else n=e.get(t),n===void 0&&(n=new Set,e.set(t,n));n.has(i)||(Co=!0,n.add(i),l=bd.bind(null,l,t,i),t.then(l,l))}function bd(l,t,i){var e=l.pingCache;e!==null&&e.delete(t),l.pingedLanes|=l.suspendedLanes&i,l.warmLanes&=~i,pl===l&&(F&i)===i&&(jl===4||jl===3&&(F&62914560)===F&&300>et()-ya?(el&2)===0&&we(l,0):Eo|=i,be===F&&(be=0)),Ot(l)}function Cg(l,t){t===0&&(t=zr()),l=Oi(l,t),l!==null&&(Oe(l,t),Ot(l))}function Sd(l){var t=l.memoizedState,i=0;t!==null&&(i=t.retryLane),Cg(l,i)}function wd(l,t){var i=0;switch(l.tag){case 31:case 13:var e=l.stateNode,n=l.memoizedState;n!==null&&(i=n.retryLane);break;case 19:e=l.stateNode;break;case 22:e=l.stateNode._retryCache;break;default:throw Error(p(314))}e!==null&&e.delete(t),Cg(l,i)}function zd(l,t){return Ka(l,t)}var Ta=null,_e=null,Ro=!1,ja=!1,Yo=!1,hi=0;function Ot(l){l!==_e&&l.next===null&&(_e===null?Ta=_e=l:_e=_e.next=l),ja=!0,Ro||(Ro=!0,Td())}function fn(l,t){if(!Yo&&ja){Yo=!0;do for(var i=!1,e=Ta;e!==null;){if(l!==0){var n=e.pendingLanes;if(n===0)var a=0;else{var s=e.suspendedLanes,o=e.pingedLanes;a=(1<<31-at(42|l)+1)-1,a&=n&~(s&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(i=!0,xg(e,a))}else a=F,a=En(e,e===pl?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(a&3)===0||De(e,a)||(i=!0,xg(e,a));e=e.next}while(i);Yo=!1}}function _d(){Eg()}function Eg(){ja=Ro=!1;var l=0;hi!==0&&Ud()&&(l=hi);for(var t=et(),i=null,e=Ta;e!==null;){var n=e.next,a=Dg(e,t);a===0?(e.next=null,i===null?Ta=n:i.next=n,n===null&&(_e=i)):(i=e,(l!==0||(a&3)!==0)&&(ja=!0)),e=n}Bl!==0&&Bl!==5||fn(l),hi!==0&&(hi=0)}function Dg(l,t){for(var i=l.suspendedLanes,e=l.pingedLanes,n=l.expirationTimes,a=l.pendingLanes&-62914561;0<a;){var s=31-at(a),o=1<<s,u=n[s];u===-1?((o&i)===0||(o&e)!==0)&&(n[s]=Wf(o,t)):u<=t&&(l.expiredLanes|=o),a&=~o}if(t=pl,i=F,i=En(l,l===t?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e=l.callbackNode,i===0||l===t&&(al===2||al===9)||l.cancelPendingCommit!==null)return e!==null&&e!==null&&Ja(e),l.callbackNode=null,l.callbackPriority=0;if((i&3)===0||De(l,i)){if(t=i&-i,t===l.callbackPriority)return t;switch(e!==null&&Ja(e),Ia(i)){case 2:case 8:i=Sr;break;case 32:i=jn;break;case 268435456:i=wr;break;default:i=jn}return e=Og.bind(null,l),i=Ka(i,e),l.callbackPriority=t,l.callbackNode=i,t}return e!==null&&e!==null&&Ja(e),l.callbackPriority=2,l.callbackNode=null,2}function Og(l,t){if(Bl!==0&&Bl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var i=l.callbackNode;if(_a()&&l.callbackNode!==i)return null;var e=F;return e=En(l,l===pl?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e===0?null:(fg(l,e,t),Dg(l,et()),l.callbackNode!=null&&l.callbackNode===i?Og.bind(null,l):null)}function xg(l,t){if(_a())return null;fg(l,t,!0)}function Td(){Hd(function(){(el&6)!==0?Ka(br,_d):Eg()})}function qo(){if(hi===0){var l=re;l===0&&(l=An,An<<=1,(An&261888)===0&&(An=256)),hi=l}return hi}function Ng(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Nn(""+l)}function Ug(l,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,l.id&&i.setAttribute("form",l.id),t.parentNode.insertBefore(i,t),l=new FormData(l),i.parentNode.removeChild(i),l}function jd(l,t,i,e,n){if(t==="submit"&&i&&i.stateNode===n){var a=Ng((n[Wl]||null).action),s=e.submitter;s&&(t=(t=s[Wl]||null)?Ng(t.formAction):s.getAttribute("formAction"),t!==null&&(a=t,s=null));var o=new Rn("action","action",null,e,n);l.push({event:o,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(hi!==0){var u=s?Ug(n,s):new FormData(n);no(i,{pending:!0,data:u,method:n.method,action:a},null,u)}}else typeof a=="function"&&(o.preventDefault(),u=s?Ug(n,s):new FormData(n),no(i,{pending:!0,data:u,method:n.method,action:a},a,u))},currentTarget:n}]})}}for(var Xo=0;Xo<ws.length;Xo++){var Go=ws[Xo],Ad=Go.toLowerCase(),Md=Go[0].toUpperCase()+Go.slice(1);jt(Ad,"on"+Md)}jt(gu,"onAnimationEnd"),jt(fu,"onAnimationIteration"),jt(pu,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(Qp,"onTransitionRun"),jt($p,"onTransitionStart"),jt(Vp,"onTransitionCancel"),jt(du,"onTransitionEnd"),Ki("onMouseEnter",["mouseout","mouseover"]),Ki("onMouseLeave",["mouseout","mouseover"]),Ki("onPointerEnter",["pointerout","pointerover"]),Ki("onPointerLeave",["pointerout","pointerover"]),Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cd=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));function Bg(l,t){t=(t&4)!==0;for(var i=0;i<l.length;i++){var e=l[i],n=e.event;e=e.listeners;l:{var a=void 0;if(t)for(var s=e.length-1;0<=s;s--){var o=e[s],u=o.instance,h=o.currentTarget;if(o=o.listener,u!==a&&n.isPropagationStopped())break l;a=o,n.currentTarget=h;try{a(n)}catch(S){Xn(S)}n.currentTarget=null,a=u}else for(s=0;s<e.length;s++){if(o=e[s],u=o.instance,h=o.currentTarget,o=o.listener,u!==a&&n.isPropagationStopped())break l;a=o,n.currentTarget=h;try{a(n)}catch(S){Xn(S)}n.currentTarget=null,a=u}}}}function W(l,t){var i=t[Pa];i===void 0&&(i=t[Pa]=new Set);var e=l+"__bubble";i.has(e)||(Hg(t,l,2,!1),i.add(e))}function Lo(l,t,i){var e=0;t&&(e|=4),Hg(i,l,e,t)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Qo(l){if(!l[Aa]){l[Aa]=!0,Er.forEach(function(i){i!=="selectionchange"&&(Cd.has(i)||Lo(i,!1,l),Lo(i,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Aa]||(t[Aa]=!0,Lo("selectionchange",!1,t))}}function Hg(l,t,i,e){switch(ff(t)){case 2:var n=im;break;case 8:n=em;break;default:n=nr}i=n.bind(null,t,i,l),n=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),e?n!==void 0?l.addEventListener(t,i,{capture:!0,passive:n}):l.addEventListener(t,i,!0):n!==void 0?l.addEventListener(t,i,{passive:n}):l.addEventListener(t,i,!1)}function $o(l,t,i,e,n){var a=e;if((t&1)===0&&(t&2)===0&&e!==null)l:for(;;){if(e===null)return;var s=e.tag;if(s===3||s===4){var o=e.stateNode.containerInfo;if(o===n)break;if(s===4)for(s=e.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;o!==null;){if(s=Vi(o),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){e=a=s;continue l}o=o.parentNode}}e=e.return}Gr(function(){var h=a,S=ss(i),T=[];l:{var y=mu.get(l);if(y!==void 0){var b=Rn,B=l;switch(l){case"keypress":if(Bn(i)===0)break l;case"keydown":case"keyup":b=wp;break;case"focusin":B="focus",b=fs;break;case"focusout":B="blur",b=fs;break;case"beforeblur":case"afterblur":b=fs;break;case"click":if(i.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=$r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Tp;break;case gu:case fu:case pu:b=fp;break;case du:b=Ap;break;case"scroll":case"scrollend":b=op;break;case"wheel":b=Cp;break;case"copy":case"cut":case"paste":b=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Zr;break;case"toggle":case"beforetoggle":b=Dp}var X=(t&4)!==0,gl=!X&&(l==="scroll"||l==="scrollend"),f=X?y!==null?y+"Capture":null:y;X=[];for(var c=h,m;c!==null;){var z=c;if(m=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||m===null||f===null||(z=Ue(c,f),z!=null&&X.push(dn(c,z,m))),gl)break;c=c.return}0<X.length&&(y=new b(y,B,null,i,S),T.push({event:y,listeners:X}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",b=l==="mouseout"||l==="pointerout",y&&i!==as&&(B=i.relatedTarget||i.fromElement)&&(Vi(B)||B[$i]))break l;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(B=i.relatedTarget||i.toElement,b=h,B=B?Vi(B):null,B!==null&&(gl=x(B),X=B.tag,B!==gl||X!==5&&X!==27&&X!==6)&&(B=null)):(b=null,B=h),b!==B)){if(X=$r,z="onMouseLeave",f="onMouseEnter",c="mouse",(l==="pointerout"||l==="pointerover")&&(X=Zr,z="onPointerLeave",f="onPointerEnter",c="pointer"),gl=b==null?y:Ne(b),m=B==null?y:Ne(B),y=new X(z,c+"leave",b,i,S),y.target=gl,y.relatedTarget=m,z=null,Vi(S)===h&&(X=new X(f,c+"enter",B,i,S),X.target=m,X.relatedTarget=gl,z=X),gl=z,b&&B)t:{for(X=Ed,f=b,c=B,m=0,z=f;z;z=X(z))m++;z=0;for(var q=c;q;q=X(q))z++;for(;0<m-z;)f=X(f),m--;for(;0<z-m;)c=X(c),z--;for(;m--;){if(f===c||c!==null&&f===c.alternate){X=f;break t}f=X(f),c=X(c)}X=null}else X=null;b!==null&&Rg(T,y,b,X,!1),B!==null&&gl!==null&&Rg(T,gl,B,X,!0)}}l:{if(y=h?Ne(h):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var tl=lu;else if(Ir(y))if(tu)tl=Xp;else{tl=Yp;var R=Rp}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&ns(h.elementType)&&(tl=lu):tl=qp;if(tl&&(tl=tl(l,h))){Pr(T,tl,i,S);break l}R&&R(l,y,h),l==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&es(y,"number",y.value)}switch(R=h?Ne(h):window,l){case"focusin":(Ir(R)||R.contentEditable==="true")&&(le=R,vs=h,Le=null);break;case"focusout":Le=vs=le=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,uu(T,i,S);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":uu(T,i,S)}var V;if(ds)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pi?Wr(l,i)&&(I="onCompositionEnd"):l==="keydown"&&i.keyCode===229&&(I="onCompositionStart");I&&(kr&&i.locale!=="ko"&&(Pi||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pi&&(V=Lr()):(li=S,us="value"in li?li.value:li.textContent,Pi=!0)),R=Ma(h,I),0<R.length&&(I=new Vr(I,l,null,i,S),T.push({event:I,listeners:R}),V?I.data=V:(V=Fr(i),V!==null&&(I.data=V)))),(V=xp?Np(l,i):Up(l,i))&&(I=Ma(h,"onBeforeInput"),0<I.length&&(R=new Vr("onBeforeInput","beforeinput",null,i,S),T.push({event:R,listeners:I}),R.data=V)),jd(T,l,h,i,S)}Bg(T,t)})}function dn(l,t,i){return{instance:l,listener:t,currentTarget:i}}function Ma(l,t){for(var i=t+"Capture",e=[];l!==null;){var n=l,a=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||a===null||(n=Ue(l,i),n!=null&&e.unshift(dn(l,n,a)),n=Ue(l,t),n!=null&&e.push(dn(l,n,a))),l.tag===3)return e;l=l.return}return[]}function Ed(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Rg(l,t,i,e,n){for(var a=t._reactName,s=[];i!==null&&i!==e;){var o=i,u=o.alternate,h=o.stateNode;if(o=o.tag,u!==null&&u===e)break;o!==5&&o!==26&&o!==27||h===null||(u=h,n?(h=Ue(i,a),h!=null&&s.unshift(dn(i,h,u))):n||(h=Ue(i,a),h!=null&&s.push(dn(i,h,u)))),i=i.return}s.length!==0&&l.push({event:t,listeners:s})}var Dd=/\r\n?/g,Od=/\u0000|\uFFFD/g;function Yg(l){return(typeof l=="string"?l:""+l).replace(Dd,`
`).replace(Od,"")}function qg(l,t){return t=Yg(t),Yg(l)===t}function cl(l,t,i,e,n,a){switch(i){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||Wi(l,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&Wi(l,""+e);break;case"className":On(l,"class",e);break;case"tabIndex":On(l,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":On(l,i,e);break;case"style":qr(l,e,a);break;case"data":if(t!=="object"){On(l,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||i!=="href")){l.removeAttribute(i);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(i);break}e=Nn(""+e),l.setAttribute(i,e);break;case"action":case"formAction":if(typeof e=="function"){l.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(i==="formAction"?(t!=="input"&&cl(l,t,"name",n.name,n,null),cl(l,t,"formEncType",n.formEncType,n,null),cl(l,t,"formMethod",n.formMethod,n,null),cl(l,t,"formTarget",n.formTarget,n,null)):(cl(l,t,"encType",n.encType,n,null),cl(l,t,"method",n.method,n,null),cl(l,t,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(i);break}e=Nn(""+e),l.setAttribute(i,e);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(p(61));if(i=e.__html,i!=null){if(n.children!=null)throw Error(p(60));l.innerHTML=i}}break;case"multiple":l.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":l.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){l.removeAttribute("xlink:href");break}i=Nn(""+e),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(i,""+e):l.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(i,""):l.removeAttribute(i);break;case"capture":case"download":e===!0?l.setAttribute(i,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(i,e):l.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?l.setAttribute(i,e):l.removeAttribute(i);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?l.removeAttribute(i):l.setAttribute(i,e);break;case"popover":W("beforetoggle",l),W("toggle",l),Dn(l,"popover",e);break;case"xlinkActuate":Nt(l,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Nt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Nt(l,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Nt(l,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Nt(l,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Nt(l,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Dn(l,"is",e);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ap.get(i)||i,Dn(l,i,e))}}function Vo(l,t,i,e,n,a){switch(i){case"style":qr(l,e,a);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(p(61));if(i=e.__html,i!=null){if(n.children!=null)throw Error(p(60));l.innerHTML=i}}break;case"children":typeof e=="string"?Wi(l,e):(typeof e=="number"||typeof e=="bigint")&&Wi(l,""+e);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dr.hasOwnProperty(i))l:{if(i[0]==="o"&&i[1]==="n"&&(n=i.endsWith("Capture"),t=i.slice(2,n?i.length-7:void 0),a=l[Wl]||null,a=a!=null?a[i]:null,typeof a=="function"&&l.removeEventListener(t,a,n),typeof e=="function")){typeof a!="function"&&a!==null&&(i in l?l[i]=null:l.hasAttribute(i)&&l.removeAttribute(i)),l.addEventListener(t,e,n);break l}i in l?l[i]=e:e===!0?l.setAttribute(i,""):Dn(l,i,e)}}}function Ql(l,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var e=!1,n=!1,a;for(a in i)if(i.hasOwnProperty(a)){var s=i[a];if(s!=null)switch(a){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:cl(l,t,a,s,i,null)}}n&&cl(l,t,"srcSet",i.srcSet,i,null),e&&cl(l,t,"src",i.src,i,null);return;case"input":W("invalid",l);var o=a=s=n=null,u=null,h=null;for(e in i)if(i.hasOwnProperty(e)){var S=i[e];if(S!=null)switch(e){case"name":n=S;break;case"type":s=S;break;case"checked":u=S;break;case"defaultChecked":h=S;break;case"value":a=S;break;case"defaultValue":o=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(p(137,t));break;default:cl(l,t,e,S,i,null)}}Br(l,a,o,u,h,s,n,!1);return;case"select":W("invalid",l),e=s=a=null;for(n in i)if(i.hasOwnProperty(n)&&(o=i[n],o!=null))switch(n){case"value":a=o;break;case"defaultValue":s=o;break;case"multiple":e=o;default:cl(l,t,n,o,i,null)}t=a,i=s,l.multiple=!!e,t!=null?Ji(l,!!e,t,!1):i!=null&&Ji(l,!!e,i,!0);return;case"textarea":W("invalid",l),a=n=e=null;for(s in i)if(i.hasOwnProperty(s)&&(o=i[s],o!=null))switch(s){case"value":e=o;break;case"defaultValue":n=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:cl(l,t,s,o,i,null)}Rr(l,e,n,a);return;case"option":for(u in i)if(i.hasOwnProperty(u)&&(e=i[u],e!=null))switch(u){case"selected":l.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:cl(l,t,u,e,i,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(e=0;e<pn.length;e++)W(pn[e],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in i)if(i.hasOwnProperty(h)&&(e=i[h],e!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:cl(l,t,h,e,i,null)}return;default:if(ns(t)){for(S in i)i.hasOwnProperty(S)&&(e=i[S],e!==void 0&&Vo(l,t,S,e,i,void 0));return}}for(o in i)i.hasOwnProperty(o)&&(e=i[o],e!=null&&cl(l,t,o,e,i,null))}function xd(l,t,i,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,a=null,s=null,o=null,u=null,h=null,S=null;for(b in i){var T=i[b];if(i.hasOwnProperty(b)&&T!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":u=T;default:e.hasOwnProperty(b)||cl(l,t,b,null,e,T)}}for(var y in e){var b=e[y];if(T=i[y],e.hasOwnProperty(y)&&(b!=null||T!=null))switch(y){case"type":a=b;break;case"name":n=b;break;case"checked":h=b;break;case"defaultChecked":S=b;break;case"value":s=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,t));break;default:b!==T&&cl(l,t,y,b,e,T)}}is(l,s,o,u,h,S,a,n);return;case"select":b=s=o=y=null;for(a in i)if(u=i[a],i.hasOwnProperty(a)&&u!=null)switch(a){case"value":break;case"multiple":b=u;default:e.hasOwnProperty(a)||cl(l,t,a,null,e,u)}for(n in e)if(a=e[n],u=i[n],e.hasOwnProperty(n)&&(a!=null||u!=null))switch(n){case"value":y=a;break;case"defaultValue":o=a;break;case"multiple":s=a;default:a!==u&&cl(l,t,n,a,e,u)}t=o,i=s,e=b,y!=null?Ji(l,!!i,y,!1):!!e!=!!i&&(t!=null?Ji(l,!!i,t,!0):Ji(l,!!i,i?[]:"",!1));return;case"textarea":b=y=null;for(o in i)if(n=i[o],i.hasOwnProperty(o)&&n!=null&&!e.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:cl(l,t,o,null,e,n)}for(s in e)if(n=e[s],a=i[s],e.hasOwnProperty(s)&&(n!=null||a!=null))switch(s){case"value":y=n;break;case"defaultValue":b=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(p(91));break;default:n!==a&&cl(l,t,s,n,e,a)}Hr(l,y,b);return;case"option":for(var B in i)if(y=i[B],i.hasOwnProperty(B)&&y!=null&&!e.hasOwnProperty(B))switch(B){case"selected":l.selected=!1;break;default:cl(l,t,B,null,e,y)}for(u in e)if(y=e[u],b=i[u],e.hasOwnProperty(u)&&y!==b&&(y!=null||b!=null))switch(u){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:cl(l,t,u,y,e,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in i)y=i[X],i.hasOwnProperty(X)&&y!=null&&!e.hasOwnProperty(X)&&cl(l,t,X,null,e,y);for(h in e)if(y=e[h],b=i[h],e.hasOwnProperty(h)&&y!==b&&(y!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:cl(l,t,h,y,e,b)}return;default:if(ns(t)){for(var gl in i)y=i[gl],i.hasOwnProperty(gl)&&y!==void 0&&!e.hasOwnProperty(gl)&&Vo(l,t,gl,void 0,e,y);for(S in e)y=e[S],b=i[S],!e.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||Vo(l,t,S,y,e,b);return}}for(var f in i)y=i[f],i.hasOwnProperty(f)&&y!=null&&!e.hasOwnProperty(f)&&cl(l,t,f,null,e,y);for(T in e)y=e[T],b=i[T],!e.hasOwnProperty(T)||y===b||y==null&&b==null||cl(l,t,T,y,e,b)}function Xg(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nd(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,i=performance.getEntriesByType("resource"),e=0;e<i.length;e++){var n=i[e],a=n.transferSize,s=n.initiatorType,o=n.duration;if(a&&o&&Xg(s)){for(s=0,o=n.responseEnd,e+=1;e<i.length;e++){var u=i[e],h=u.startTime;if(h>o)break;var S=u.transferSize,T=u.initiatorType;S&&Xg(T)&&(u=u.responseEnd,s+=S*(u<o?1:(o-h)/(u-h)))}if(--e,t+=8*(a+s)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Zo=null,ko=null;function Ca(l){return l.nodeType===9?l:l.ownerDocument}function Gg(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lg(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Ko(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jo=null;function Ud(){var l=window.event;return l&&l.type==="popstate"?l===Jo?!1:(Jo=l,!0):(Jo=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,Bd=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(l){return $g.resolve(null).then(l).catch(Rd)}:Qg;function Rd(l){setTimeout(function(){throw l})}function yi(l){return l==="head"}function Vg(l,t){var i=t,e=0;do{var n=i.nextSibling;if(l.removeChild(i),n&&n.nodeType===8)if(i=n.data,i==="/$"||i==="/&"){if(e===0){l.removeChild(n),Me(t);return}e--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")e++;else if(i==="html")mn(l.ownerDocument.documentElement);else if(i==="head"){i=l.ownerDocument.head,mn(i);for(var a=i.firstChild;a;){var s=a.nextSibling,o=a.nodeName;a[xe]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||i.removeChild(a),a=s}}else i==="body"&&mn(l.ownerDocument.body);i=n}while(i);Me(t)}function Zg(l,t){var i=l;l=0;do{var e=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),e&&e.nodeType===8)if(i=e.data,i==="/$"){if(l===0)break;l--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||l++;i=e}while(i)}function Wo(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Wo(i),ls(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}l.removeChild(i)}}function Yd(l,t,i,e){for(;l.nodeType===1;){var n=i;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(e){if(!l[xe])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(a=l.getAttribute("rel"),a==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(a!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(a=l.getAttribute("src"),(a!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&a&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var a=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===a)return l}else return l;if(l=zt(l.nextSibling),l===null)break}return null}function qd(l,t,i){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!i||(l=zt(l.nextSibling),l===null))return null;return l}function kg(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=zt(l.nextSibling),l===null))return null;return l}function Fo(l){return l.data==="$?"||l.data==="$~"}function Io(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Xd(l,t){var i=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||i.readyState!=="loading")t();else{var e=function(){t(),i.removeEventListener("DOMContentLoaded",e)};i.addEventListener("DOMContentLoaded",e),l._reactRetry=e}}function zt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Po=null;function Kg(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var i=l.data;if(i==="/$"||i==="/&"){if(t===0)return zt(l.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}l=l.nextSibling}return null}function Jg(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var i=l.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return l;t--}else i!=="/$"&&i!=="/&"||t++}l=l.previousSibling}return null}function Wg(l,t,i){switch(t=Ca(i),l){case"html":if(l=t.documentElement,!l)throw Error(p(452));return l;case"head":if(l=t.head,!l)throw Error(p(453));return l;case"body":if(l=t.body,!l)throw Error(p(454));return l;default:throw Error(p(451))}}function mn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);ls(l)}var _t=new Map,Fg=new Set;function Ea(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=C.d;C.d={f:Gd,r:Ld,D:Qd,C:$d,L:Vd,m:Zd,X:Kd,S:kd,M:Jd};function Gd(){var l=Wt.f(),t=Sa();return l||t}function Ld(l){var t=Zi(l);t!==null&&t.tag===5&&t.type==="form"?dc(t):Wt.r(l)}var Te=typeof document>"u"?null:document;function Ig(l,t,i){var e=Te;if(e&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof i=="string"&&(n+='[crossorigin="'+i+'"]'),Fg.has(n)||(Fg.add(n),l={rel:l,crossOrigin:i,href:t},e.querySelector(n)===null&&(t=e.createElement("link"),Ql(t,"link",l),Rl(t),e.head.appendChild(t)))}}function Qd(l){Wt.D(l),Ig("dns-prefetch",l,null)}function $d(l,t){Wt.C(l,t),Ig("preconnect",l,t)}function Vd(l,t,i){Wt.L(l,t,i);var e=Te;if(e&&l&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(n+='[imagesrcset="'+mt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(n+='[imagesizes="'+mt(i.imageSizes)+'"]')):n+='[href="'+mt(l)+'"]';var a=n;switch(t){case"style":a=je(l);break;case"script":a=Ae(l)}_t.has(a)||(l=N({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:l,as:t},i),_t.set(a,l),e.querySelector(n)!==null||t==="style"&&e.querySelector(hn(a))||t==="script"&&e.querySelector(yn(a))||(t=e.createElement("link"),Ql(t,"link",l),Rl(t),e.head.appendChild(t)))}}function Zd(l,t){Wt.m(l,t);var i=Te;if(i&&l){var e=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(e)+'"][href="'+mt(l)+'"]',a=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ae(l)}if(!_t.has(a)&&(l=N({rel:"modulepreload",href:l},t),_t.set(a,l),i.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(yn(a)))return}e=i.createElement("link"),Ql(e,"link",l),Rl(e),i.head.appendChild(e)}}}function kd(l,t,i){Wt.S(l,t,i);var e=Te;if(e&&l){var n=ki(e).hoistableStyles,a=je(l);t=t||"default";var s=n.get(a);if(!s){var o={loading:0,preload:null};if(s=e.querySelector(hn(a)))o.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},i),(i=_t.get(a))&&lr(l,i);var u=s=e.createElement("link");Rl(u),Ql(u,"link",l),u._p=new Promise(function(h,S){u.onload=h,u.onerror=S}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Da(s,t,e)}s={type:"stylesheet",instance:s,count:1,state:o},n.set(a,s)}}}function Kd(l,t){Wt.X(l,t);var i=Te;if(i&&l){var e=ki(i).hoistableScripts,n=Ae(l),a=e.get(n);a||(a=i.querySelector(yn(n)),a||(l=N({src:l,async:!0},t),(t=_t.get(n))&&tr(l,t),a=i.createElement("script"),Rl(a),Ql(a,"link",l),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},e.set(n,a))}}function Jd(l,t){Wt.M(l,t);var i=Te;if(i&&l){var e=ki(i).hoistableScripts,n=Ae(l),a=e.get(n);a||(a=i.querySelector(yn(n)),a||(l=N({src:l,async:!0,type:"module"},t),(t=_t.get(n))&&tr(l,t),a=i.createElement("script"),Rl(a),Ql(a,"link",l),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},e.set(n,a))}}function Pg(l,t,i,e){var n=(n=K.current)?Ea(n):null;if(!n)throw Error(p(446));switch(l){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=je(i.href),i=ki(n).hoistableStyles,e=i.get(t),e||(e={type:"style",instance:null,count:0,state:null},i.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){l=je(i.href);var a=ki(n).hoistableStyles,s=a.get(l);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(l,s),(a=n.querySelector(hn(l)))&&!a._p&&(s.instance=a,s.state.loading=5),_t.has(l)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},_t.set(l,i),a||Wd(n,l,i,s.state))),t&&e===null)throw Error(p(528,""));return s}if(t&&e!==null)throw Error(p(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ae(i),i=ki(n).hoistableScripts,e=i.get(t),e||(e={type:"script",instance:null,count:0,state:null},i.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,l))}}function je(l){return'href="'+mt(l)+'"'}function hn(l){return'link[rel="stylesheet"]['+l+"]"}function lf(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function Wd(l,t,i,e){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=l.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),Ql(t,"link",i),Rl(t),l.head.appendChild(t))}function Ae(l){return'[src="'+mt(l)+'"]'}function yn(l){return"script[async]"+l}function tf(l,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var e=l.querySelector('style[data-href~="'+mt(i.href)+'"]');if(e)return t.instance=e,Rl(e),e;var n=N({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return e=(l.ownerDocument||l).createElement("style"),Rl(e),Ql(e,"style",n),Da(e,i.precedence,l),t.instance=e;case"stylesheet":n=je(i.href);var a=l.querySelector(hn(n));if(a)return t.state.loading|=4,t.instance=a,Rl(a),a;e=lf(i),(n=_t.get(n))&&lr(e,n),a=(l.ownerDocument||l).createElement("link"),Rl(a);var s=a;return s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),Ql(a,"link",e),t.state.loading|=4,Da(a,i.precedence,l),t.instance=a;case"script":return a=Ae(i.src),(n=l.querySelector(yn(a)))?(t.instance=n,Rl(n),n):(e=i,(n=_t.get(a))&&(e=N({},i),tr(e,n)),l=l.ownerDocument||l,n=l.createElement("script"),Rl(n),Ql(n,"link",e),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,Da(e,i.precedence,l));return t.instance}function Da(l,t,i){for(var e=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,a=n,s=0;s<e.length;s++){var o=e[s];if(o.dataset.precedence===t)a=o;else if(a!==n)break}a?a.parentNode.insertBefore(l,a.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(l,t.firstChild))}function lr(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function tr(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Oa=null;function ef(l,t,i){if(Oa===null){var e=new Map,n=Oa=new Map;n.set(i,e)}else n=Oa,e=n.get(i),e||(e=new Map,n.set(i,e));if(e.has(l))return e;for(e.set(l,null),i=i.getElementsByTagName(l),n=0;n<i.length;n++){var a=i[n];if(!(a[xe]||a[ql]||l==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var s=a.getAttribute(t)||"";s=l+s;var o=e.get(s);o?o.push(a):e.set(s,[a])}}return e}function nf(l,t,i){l=l.ownerDocument||l,l.head.insertBefore(i,t==="title"?l.querySelector("head > title"):null)}function Fd(l,t,i){if(i===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function af(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Id(l,t,i,e){if(i.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var n=je(e.href),a=t.querySelector(hn(n));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xa.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=a,Rl(a);return}a=t.ownerDocument||t,e=lf(e),(n=_t.get(n))&&lr(e,n),a=a.createElement("link"),Rl(a);var s=a;s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),Ql(a,"link",e),i.instance=a}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=xa.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}var ir=0;function Pd(l,t){return l.stylesheets&&l.count===0&&Ua(l,l.stylesheets),0<l.count||0<l.imgCount?function(i){var e=setTimeout(function(){if(l.stylesheets&&Ua(l,l.stylesheets),l.unsuspend){var a=l.unsuspend;l.unsuspend=null,a()}},6e4+t);0<l.imgBytes&&ir===0&&(ir=62500*Nd());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ua(l,l.stylesheets),l.unsuspend)){var a=l.unsuspend;l.unsuspend=null,a()}},(l.imgBytes>ir?50:800)+t);return l.unsuspend=i,function(){l.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function xa(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ua(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Na=null;function Ua(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Na=new Map,t.forEach(lm,l),Na=null,xa.call(l))}function lm(l,t){if(!(t.state.loading&4)){var i=Na.get(l);if(i)var e=i.get(null);else{i=new Map,Na.set(l,i);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<n.length;a++){var s=n[a];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(i.set(s.dataset.precedence,s),e=s)}e&&i.set(null,e)}n=t.instance,s=n.getAttribute("data-precedence"),a=i.get(s)||e,a===e&&i.set(null,n),i.set(s,n),this.count++,e=xa.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),a?a.parentNode.insertBefore(n,a.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var vn={$$typeof:ol,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function tm(l,t,i,e,n,a,s,o,u){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.hiddenUpdates=Wa(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function sf(l,t,i,e,n,a,s,o,u,h,S,T){return l=new tm(l,t,i,s,u,h,S,T,o),t=1,a===!0&&(t|=24),a=ot(3,null,null,t),l.current=a,a.stateNode=l,t=Us(),t.refCount++,l.pooledCache=t,t.refCount++,a.memoizedState={element:e,isDehydrated:i,cache:t},Ys(a),l}function of(l){return l?(l=ee,l):ee}function rf(l,t,i,e,n,a){n=of(n),e.context===null?e.context=n:e.pendingContext=n,e=si(t),e.payload={element:i},a=a===void 0?null:a,a!==null&&(e.callback=a),i=oi(l,e,t),i!==null&&(it(i,l,t),Je(i,l,t))}function uf(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var i=l.retryLane;l.retryLane=i!==0&&i<t?i:t}}function er(l,t){uf(l,t),(l=l.alternate)&&uf(l,t)}function cf(l){if(l.tag===13||l.tag===31){var t=Oi(l,67108864);t!==null&&it(t,l,67108864),er(l,67108864)}}function gf(l){if(l.tag===13||l.tag===31){var t=ft();t=Fa(t);var i=Oi(l,t);i!==null&&it(i,l,t),er(l,t)}}var Ba=!0;function im(l,t,i,e){var n=w.T;w.T=null;var a=C.p;try{C.p=2,nr(l,t,i,e)}finally{C.p=a,w.T=n}}function em(l,t,i,e){var n=w.T;w.T=null;var a=C.p;try{C.p=8,nr(l,t,i,e)}finally{C.p=a,w.T=n}}function nr(l,t,i,e){if(Ba){var n=ar(e);if(n===null)$o(l,t,e,Ha,i),pf(l,e);else if(am(n,l,t,i,e))e.stopPropagation();else if(pf(l,e),t&4&&-1<nm.indexOf(l)){for(;n!==null;){var a=Zi(n);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var s=Ai(a.pendingLanes);if(s!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var u=1<<31-at(s);o.entanglements[1]|=u,s&=~u}Ot(a),(el&6)===0&&(va=et()+500,fn(0))}}break;case 31:case 13:o=Oi(a,2),o!==null&&it(o,a,2),Sa(),er(a,2)}if(a=ar(e),a===null&&$o(l,t,e,Ha,i),a===n)break;n=a}n!==null&&e.stopPropagation()}else $o(l,t,e,null,i)}}function ar(l){return l=ss(l),sr(l)}var Ha=null;function sr(l){if(Ha=null,l=Vi(l),l!==null){var t=x(l);if(t===null)l=null;else{var i=t.tag;if(i===13){if(l=Y(t),l!==null)return l;l=null}else if(i===31){if(l=P(t),l!==null)return l;l=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ha=l,null}function ff(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qf()){case br:return 2;case Sr:return 8;case jn:case $f:return 32;case wr:return 268435456;default:return 32}default:return 32}}var or=!1,vi=null,bi=null,Si=null,bn=new Map,Sn=new Map,wi=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pf(l,t){switch(l){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sn.delete(t.pointerId)}}function wn(l,t,i,e,n,a){return l===null||l.nativeEvent!==a?(l={blockedOn:t,domEventName:i,eventSystemFlags:e,nativeEvent:a,targetContainers:[n]},t!==null&&(t=Zi(t),t!==null&&cf(t)),l):(l.eventSystemFlags|=e,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function am(l,t,i,e,n){switch(t){case"focusin":return vi=wn(vi,l,t,i,e,n),!0;case"dragenter":return bi=wn(bi,l,t,i,e,n),!0;case"mouseover":return Si=wn(Si,l,t,i,e,n),!0;case"pointerover":var a=n.pointerId;return bn.set(a,wn(bn.get(a)||null,l,t,i,e,n)),!0;case"gotpointercapture":return a=n.pointerId,Sn.set(a,wn(Sn.get(a)||null,l,t,i,e,n)),!0}return!1}function df(l){var t=Vi(l.target);if(t!==null){var i=x(t);if(i!==null){if(t=i.tag,t===13){if(t=Y(i),t!==null){l.blockedOn=t,Mr(l.priority,function(){gf(i)});return}}else if(t===31){if(t=P(i),t!==null){l.blockedOn=t,Mr(l.priority,function(){gf(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){l.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Ra(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var i=ar(l.nativeEvent);if(i===null){i=l.nativeEvent;var e=new i.constructor(i.type,i);as=e,i.target.dispatchEvent(e),as=null}else return t=Zi(i),t!==null&&cf(t),l.blockedOn=i,!1;t.shift()}return!0}function mf(l,t,i){Ra(l)&&i.delete(t)}function sm(){or=!1,vi!==null&&Ra(vi)&&(vi=null),bi!==null&&Ra(bi)&&(bi=null),Si!==null&&Ra(Si)&&(Si=null),bn.forEach(mf),Sn.forEach(mf)}function Ya(l,t){l.blockedOn===t&&(l.blockedOn=null,or||(or=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,sm)))}var qa=null;function hf(l){qa!==l&&(qa=l,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){qa===l&&(qa=null);for(var t=0;t<l.length;t+=3){var i=l[t],e=l[t+1],n=l[t+2];if(typeof e!="function"){if(sr(e||i)===null)continue;break}var a=Zi(i);a!==null&&(l.splice(t,3),t-=3,no(a,{pending:!0,data:n,method:i.method,action:e},e,n))}}))}function Me(l){function t(u){return Ya(u,l)}vi!==null&&Ya(vi,l),bi!==null&&Ya(bi,l),Si!==null&&Ya(Si,l),bn.forEach(t),Sn.forEach(t);for(var i=0;i<wi.length;i++){var e=wi[i];e.blockedOn===l&&(e.blockedOn=null)}for(;0<wi.length&&(i=wi[0],i.blockedOn===null);)df(i),i.blockedOn===null&&wi.shift();if(i=(l.ownerDocument||l).$$reactFormReplay,i!=null)for(e=0;e<i.length;e+=3){var n=i[e],a=i[e+1],s=n[Wl]||null;if(typeof a=="function")s||hf(i);else if(s){var o=null;if(a&&a.hasAttribute("formAction")){if(n=a,s=a[Wl]||null)o=s.formAction;else if(sr(n)!==null)continue}else o=s.action;typeof o=="function"?i[e+1]=o:(i.splice(e,3),e-=3),hf(i)}}}function yf(){function l(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),e||setTimeout(i,20)}function i(){if(!e&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){e=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function rr(l){this._internalRoot=l}Xa.prototype.render=rr.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(p(409));var i=t.current,e=ft();rf(i,e,l,t,null,null)},Xa.prototype.unmount=rr.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;rf(l.current,2,null,l,null,null),Sa(),t[$i]=null}};function Xa(l){this._internalRoot=l}Xa.prototype.unstable_scheduleHydration=function(l){if(l){var t=Ar();l={blockedOn:null,target:l,priority:t};for(var i=0;i<wi.length&&t!==0&&t<wi[i].priority;i++);wi.splice(i,0,l),i===0&&df(l)}};var vf=M.version;if(vf!=="19.2.3")throw Error(p(527,vf,"19.2.3"));C.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(p(188)):(l=Object.keys(l).join(","),Error(p(268,l)));return l=_(t),l=l!==null?E(l):null,l=l===null?null:l.stateNode,l};var om={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Ee=Ga.inject(om),nt=Ga}catch{}}return _n.createRoot=function(l,t){if(!A(l))throw Error(p(299));var i=!1,e="",n=Tc,a=jc,s=Ac;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=sf(l,1,!1,null,null,i,e,null,n,a,s,yf),l[$i]=t.current,Qo(l),new rr(t)},_n.hydrateRoot=function(l,t,i){if(!A(l))throw Error(p(299));var e=!1,n="",a=Tc,s=jc,o=Ac,u=null;return i!=null&&(i.unstable_strictMode===!0&&(e=!0),i.identifierPrefix!==void 0&&(n=i.identifierPrefix),i.onUncaughtError!==void 0&&(a=i.onUncaughtError),i.onCaughtError!==void 0&&(s=i.onCaughtError),i.onRecoverableError!==void 0&&(o=i.onRecoverableError),i.formState!==void 0&&(u=i.formState)),t=sf(l,1,!0,t,i??null,e,n,u,a,s,o,yf),t.context=of(null),i=t.current,e=ft(),e=Fa(e),n=si(e),n.callback=null,oi(i,n,e),i=e,t.current.lanes=i,Oe(t,i),Ot(t),l[$i]=t.current,Qo(l),new Xa(t)},_n.version="19.2.3",_n}var Cf;function ym(){if(Cf)return gr.exports;Cf=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(M){console.error(M)}}return v(),gr.exports=hm(),gr.exports}var vm=ym();const bm=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sm=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(M,O,p)=>p?p.toUpperCase():O.toLowerCase()),Ef=v=>{const M=Sm(v);return M.charAt(0).toUpperCase()+M.slice(1)},Rf=(...v)=>v.filter((M,O,p)=>!!M&&M.trim()!==""&&p.indexOf(M)===O).join(" ").trim(),wm=v=>{for(const M in v)if(M.startsWith("aria-")||M==="role"||M==="title")return!0};var zm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const _m=wl.forwardRef(({color:v="currentColor",size:M=24,strokeWidth:O=2,absoluteStrokeWidth:p,className:A="",children:x,iconNode:Y,...P},U)=>wl.createElement("svg",{ref:U,...zm,width:M,height:M,stroke:v,strokeWidth:p?Number(O)*24/Number(M):O,className:Rf("lucide",A),...!x&&!wm(P)&&{"aria-hidden":"true"},...P},[...Y.map(([_,E])=>wl.createElement(_,E)),...Array.isArray(x)?x:[x]]));const _i=(v,M)=>{const O=wl.forwardRef(({className:p,...A},x)=>wl.createElement(_m,{ref:x,iconNode:M,className:Rf(`lucide-${bm(Ef(v))}`,`lucide-${v}`,p),...A}));return O.displayName=Ef(v),O};const Tm=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],jm=_i("bird",Tm);const Am=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mm=_i("circle",Am);const Cm=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Em=_i("key",Cm);const Dm=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Om=_i("music",Dm);const xm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nm=_i("star",xm);const Um=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Bm=_i("volume-2",Um);const Hm=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Rm=_i("volume-x",Hm);const Ym=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yf=_i("x",Ym);function qm({displayName:v,onConfirm:M,onCancel:O,onClose:p}){return d.jsx("div",{className:"modal-overlay",onClick:p,children:d.jsx("div",{className:"modal-content",onClick:A=>A.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:p,children:d.jsx(Yf,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[v,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:M,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",v]}),d.jsx("button",{onClick:O,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function qf(){const v=localStorage.getItem("openedWindows");if(!v)return new Set;try{const M=JSON.parse(v);return new Set(M)}catch(M){return console.error("Failed to parse opened windows:",M),new Set}}function Xm(v){const M=qf();return M.add(v),localStorage.setItem("openedWindows",JSON.stringify([...M])),M}function Df(){localStorage.removeItem("openedWindows")}function Gm(){localStorage.removeItem("adventCalendarUser")}const Of=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function Lm({userName:v,onUserSelect:M}){const[O]=wl.useState(()=>Of[Math.floor(Math.random()*Of.length)]),[p,A]=wl.useState(!1),x=v==="Tanya"?"Таня":v==="Zebra"?"Зёбра":"неведомый гость",Y=()=>{A(!0)},P=()=>{Gm(),Df(),A(!1),window.location.reload()},U=()=>{Df(),A(!1)},_=()=>{A(!1)};return v?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[O,","," ",d.jsx("span",{className:"user-name clickable",onClick:Y,title:`А точно ли я ${x}?..`,children:x}),"!"]})}),p&&(v==="Tanya"||v==="Zebra")&&d.jsx(qm,{displayName:x,onConfirm:P,onCancel:U,onClose:_})]}):d.jsxs("div",{className:"user-selection",children:[d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>M("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>M("Zebra"),children:"Зёбра"})]})]})}function Qm(){const[v,M]=wl.useState([]),[O,p]=wl.useState([]);return wl.useEffect(()=>{const A=U=>_=>{const E=Math.sin(U*9301+_*49297)*43758.5453;return E-Math.floor(E)},x=Array.from({length:60}).map((U,_)=>{const E=A(_+1);return{left:`${Math.floor(E(1)*100)}%`,top:`${Math.floor(E(2)*70)}%`,animationDelay:`${(E(3)*3).toFixed(2)}s`,opacity:+(.3+E(4)*.7).toFixed(2)}}),Y=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,_)=>{const E=A(100+_);let N=30+Math.floor(E(1)*60),Z=Math.max(10,Math.floor(E(2)*30));const yl=Y[_%Y.length],vl=+(.35+E(3)*.55).toFixed(2),zl=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(E(4)*30)}% ${30+Math.floor(E(5)*30)}%`,bl=40+Math.floor(E(6)*40),Al=Math.floor(E(7)*20),ol=-20+Math.floor(E(8)*140);let _l=5+Math.floor(E(9)*40);return _===0&&(_l=Math.max(2,_l-8),N=Math.max(20,Math.floor(N*.85)),Z=Math.max(8,Math.floor(Z*.8))),{left:`${ol}%`,top:`${_l}%`,width:`${N}vw`,height:`${Z}vh`,opacity:vl,color:zl,borderRadius:Ul,duration:bl,delay:Al}});window.requestAnimationFrame(()=>{M(x),p(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:v.map((A,x)=>d.jsx("div",{className:"star",style:{left:A.left,top:A.top,animationDelay:A.animationDelay,opacity:A.opacity}},x))})]}),d.jsx("div",{className:"layer layer-clouds",children:O.map((A,x)=>d.jsx("div",{className:`cloud cloud-${x+1}`,style:{position:"absolute",left:A.left,top:A.top,width:A.width,height:A.height,background:A.color,opacity:A.opacity,borderRadius:A.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${A.duration}s linear ${A.delay}s infinite`}},x))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((A,x)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${A},300 ${A-20},250 ${A-15},250 ${A-30},200 ${A-25},200 ${A-40},150 ${A+40},150 ${A+25},200 ${A+30},200 ${A+15},250 ${A+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:A-5,y:"280",width:"10",height:"20",fill:"#111827"})]},x))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const $m=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large"],Vm=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square","window-tall","window-square","window-rect","window-tall","window-rect","window-square","window-tall"],xf=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window","door","window","door","window","window","door","window"],Nf=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Uf=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Bf=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Hf=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],Zm=v=>{switch(v){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(Mm,{className:"door-handle ring",size:12});case"star":return d.jsx(Nm,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},km=v=>{if(v===0)return null;const M=v===4||v===6?2:4,O=v===4?2:v===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${M}, 1fr)`,gridTemplateRows:`repeat(${O}, 1fr)`},children:Array.from({length:v}).map((p,A)=>d.jsx("div",{className:"window-pane"},A))})},Km=v=>{if(v==="none")return null;switch(v){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},Jm=v=>{if(v==="none")return null;switch(v){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function Wm({windowNumber:v,isActive:M,isOpened:O,isExactMatch:p,onClick:A}){const x=wl.useRef(null),Y=v===17,P=()=>{Y&&x.current&&(x.current.currentTime=0,x.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},U=$m[v-1],_=Vm[v-1],E=M&&!O||M&&p?"window-glow-intense":"",Z=new Set([11,6,12,16,25,30]).has(v),yl=Z?"window-round":_,zl=xf[v-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<v;Sl++)xf[Sl]==="door"?Ul++:bl++;const Al=Nf[(Ul-1)%Nf.length],ol=Uf[(bl-1)%Uf.length],_l=Bf[(Ul-1)%Bf.length],$l=Hf[(bl-1)%Hf.length];return d.jsx("div",{className:`calendar-window ${U} ${yl} ${E} ${O?"window-opened":""} ${M?"window-active":"window-inactive"}`,onClick:A,onMouseEnter:P,children:zl?d.jsxs("div",{className:`door-element ${Al.type}`,children:[Km(_l),d.jsx("div",{className:`door-frame frame-${Al.frame}`,children:d.jsxs("div",{className:`door-panel wood-${Al.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:Z?"50%":void 0,overflow:"hidden"},children:[Al.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[Zm(Al.handle),Al.hasKeyhole&&d.jsx(Em,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:v})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${U}`,children:[Jm($l),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${ol.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:Z?"50%":void 0,overflow:"hidden"},children:[km(ol.panes),ol.shape==="arched"&&d.jsx("div",{className:"window-arch"}),Y&&d.jsx(jm,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:v})]}),ol.hasSill&&d.jsx("div",{className:"window-sill",children:ol.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function Fm({windowNumber:v,message:M,onClose:O}){return d.jsx("div",{className:"modal-overlay",onClick:O,children:d.jsx("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:O,children:d.jsx(Yf,{size:24})}),v!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",v]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:M}})]})})})}function La(v){const M=new Date(Date.UTC(2025,11,19,21,0,0,0)),O=v;return new Date(M.getTime()+O*24*60*60*1e3)}function Qa(v,M){return M.getTime()>=v.getTime()}function mr(v,M){const O=new Date(v);O.setUTCHours(0,0,0,0);const p=new Date(M);return p.setUTCHours(0,0,0,0),O.getTime()===p.getTime()}const Im="/advent/assets/muerte-DfSvC3Z-.jpg",Pm="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",ih="/advent/assets/Ofrenda-DDd9dlHK.jpg",eh="/advent/assets/kolumbia-DUKl5Drs.webp",nh="/advent/assets/kolumb2--JWazZNY.webp",ah="/advent/assets/melhior-5oqVeQRz.webp",sh="/advent/assets/shir-CPxmcAyu.jpg",oh="/advent/assets/markes-DHTR6R5s.jpg",rh="/advent/assets/tolkin-Bkb1qdyy.jpg",uh="/advent/assets/tolkin1-Gt7VHXrl.jpg",ch="/advent/assets/berry-BayIKnFN.jpg",gh="/advent/assets/berry1-aZtyDiG8.jpg",fh="/advent/assets/gvatemala1-C3fdq1S5.jpg",ph="/advent/assets/graves-B4Ep0a2x.jpg",dh="/advent/assets/carpet1-BHoBEQUm.jpg",mh="/advent/assets/airsnakes-BtpaN7a0.jpg",hh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",vh="/advent/assets/brazil1-C1nzNzga.webp",bh="/advent/assets/ethiopia-CfI92xpA.jpg",Sh="/advent/assets/goats-B1iHvHcl.jpg",wh="/advent/assets/rabanda-ClmJ6Exb.jpg",zh="/advent/assets/honduras-DTj2TRgE.jpg",_h="/advent/assets/honduras1-BfVuI_LD.jpg",Th="/advent/assets/resp-DBSDT0A7.png",jh="/advent/assets/cicoriy-DL-J_EKv.webp",Ah="/advent/assets/carob-DDo_E6jz.jpg",Mh="/advent/assets/tonka-CaSKsR3p.webp",Ch="/advent/assets/kardamon-D-LlmV-v.webp",Eh="/advent/assets/mem1-Coiz1JZ3.jpg",Dh="/advent/assets/cafe-DrSeHG9j.jpg",Oh="/advent/assets/yerevan1-0r9N0UnH.jpg",xh="/advent/assets/yerevan2-fQnNyY8p.jpg",Nh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Bh="/advent/assets/bears-BwIhEuov.jpg",Hh="/advent/assets/ararat-DAhBMtll.jpg",Rh="/advent/assets/jazzve-DliHyYYl.jpg",Yh="/advent/assets/abc-C__8usP9.webp",qh="/advent/assets/noy-KD54xzv8.jpg",Xh="/advent/assets/poss-LSCreopJ.jpg",Gh="/advent/assets/poss1-CPSySb8a.jpg",Lh="/advent/assets/poss2-4TAHhBM7.jpg",Qh="/advent/assets/poss3-BBe7PtjI.jpg",$h="/advent/assets/poss4-B0yE7kHZ.jpg",Vh="/advent/assets/poss5-DtHf0aUR.jpg",Zh="/advent/assets/possa-mom-BPlrTPcT.jpg",kh="/advent/assets/possa-mom1-D9ySRpWd.jpg",Kh="/advent/assets/poss-and-oposs-DDSg4YaG.webp",Jh="/advent/assets/possaKnowl-CYkQIhVz.jpg",Wh="/advent/assets/thief-CoIDv1iT.jpg",Fh="/advent/assets/smile-1-5jdl68.jpg",Ih="/advent/assets/merch-DdoKdpQb.jpg",Ph="/advent/assets/merch1-CtZos-AO.jpg",l0="/advent/assets/cammomile-Byca6E_e.jpg",t0="/advent/assets/cham-tea-BPAncxo6.jpg",i0="/advent/assets/chamomile1-DbctfrkQ.jpg",e0="/advent/assets/chamomile2-k1NNuBaK.jpg",n0="/advent/assets/juniper-r5wxtBRx.jpg",a0="/advent/assets/juniper1-BWoP6YHZ.jpg",s0="/advent/assets/juniper3-BXCLBj8d.jpg",o0="/advent/assets/juniperTea-0KTJdRf4.jpg",r0="/advent/assets/cham-sci-ixEH2xhc.jpg",u0="/advent/assets/juniperTattoo-Drp4YpCt.jpg",c0="/advent/assets/chamomileTattoo-BGNh6NOB.jpg",g0="/advent/assets/juniper-sci-hXzXrr9H.jpg",f0="/advent/assets/jun-sci2-zIGUP1FK.jpg",p0="/advent/assets/solovki-B95fDwav.webp",d0="/advent/assets/solovki1-u3Varh4x.webp",m0="/advent/assets/solovki2-D19kpuou.jpg",h0="/advent/assets/coffeCard1-DNW-HsaJ.webp",y0="/advent/assets/coffeCard2-BNxhtL4t.webp",v0="/advent/assets/coffeCard3-AyYO0wak.webp",b0="/advent/assets/coffeCard4-DI2_0NqK.webp",S0="/advent/assets/coffeCard5-dUEpTs6X.webp",w0="/advent/assets/coffeCard6-BDW-PLix.webp",z0="/advent/assets/atitlan-dYAI5eYf.jpg",_0="/advent/assets/atitlan1-C5ZSs572.jpg",T0="/advent/assets/guatemala8-Bi5KoB48.jpg",j0="/advent/assets/guatemalaCorn-ClR7vTSk.jpg",A0="/advent/assets/guatemalaTkan-DTKRCwUa.jpg",M0="/advent/assets/himalaya1-nN0t50Ma.avif",C0="/advent/assets/pinkSalt-BizDWWT4.jpg",E0="/advent/assets/saltMeme-Dq0p8Dwq.jpg",D0="/advent/assets/matcha11-CE8SBYA1.jpg",O0="/advent/assets/matcha-C8bXd3OR.jpg",x0="/advent/assets/matcha2-6Pc5CGop.jpg",N0="/advent/assets/matcha3-PqMaWA5u.jpg",U0="/advent/assets/matchaOld-BdH0N0Hr.jpg",B0="/advent/assets/matchaOld1-d7pxtrP4.jpg",H0="/advent/assets/harvest-DiJhXofV.jpg",R0="/advent/assets/harvest1-f7uXoVQt.jpg",Y0="/advent/assets/matchaColors-CePGvb-v.jpg",q0="/advent/assets/cat1-CteOJfo2.jpg",X0="/advent/assets/cat2-CI2WaIbw.jpg",G0="/advent/assets/cat3-wi61L9Ty.jpg",L0="/advent/assets/cat4-BQJa7vAE.jpg",Q0="/advent/assets/cat5-D7xwVjOS.jpg",$0="/advent/assets/piterMeme-ClYb6GkP.jpg",V0="/advent/assets/monk-D17MXC2B.jpg",Z0="/advent/assets/nyMeme1-6GOagR6o.jpg",k0="/advent/assets/nyMeme2-7Telpurx.jpg",K0="/advent/assets/nyMeme4-BNwb-aPZ.jpg",J0="/advent/assets/nyMeme5-mCJoC8cu.jpg",W0="/advent/assets/nyMeme6-BndRKfA9.jpg",F0="/advent/assets/nyMeme7-CBDPmv-H.jpg",I0="/advent/assets/nyMeme8-Dq-5p2Cs.jpg",P0="/advent/assets/nyMeme9-DtlbkQI_.jpg",l1="/advent/assets/gerb1-BxSMTsFR.jpg",t1="/advent/assets/gerb2-B_qnuNFN.jpg",i1="/advent/assets/okMeme--p34fXU_.jpg",e1="/advent/assets/unk-BB2m3QLz.jpg",n1="/advent/assets/u70-DIKlKj5y.jpg",a1="/advent/assets/map-BdUX3X-y.jpg",s1="/advent/assets/chasha-Ctu2v-xB.jpg",o1="/advent/assets/ft0-COvPvYCF.jpg",r1="/advent/assets/ft1-BgWi-igf.jpg",u1="/advent/assets/ft2-ctNJAFEu.jpg",c1="/advent/assets/cheese-BSnE0RhA.jpg",g1="/advent/assets/cheese2-DJbQoeGH.jpg",f1="/advent/assets/reishi-DE1KAqzF.webp",p1="/advent/assets/kamakura-_Vb1gjNI.webp",d1="/advent/assets/kamakura2-D_nBSmvm.webp",m1="/advent/assets/dragon2-BcyxgPxK.jpg",h1="/advent/assets/dragon1-BlTPZene.jpg",y1="/advent/assets/kissaten-nwC-faWE.jpg",v1="/advent/assets/kissaten1-DZ7zOaJ5.jpg",b1="/advent/assets/sakura-CKPCINYL.jpg",S1="/advent/assets/sakura1-eJ7b3pjZ.jpg",w1="/advent/assets/pistachios-2oIphEJF.jpg",z1="/advent/assets/pistachios1-DxqEClZb.jpg",_1="/advent/assets/pistachios2-U22W4XjX.jpg",T1="/advent/assets/pistachios3-CekkXn2S.jpg",j1="/advent/assets/pistachioLatte-CX5fY4GJ.jpg",A1="/advent/assets/unicornGerb-B1IgHAym.jpg",M1="/advent/assets/scotish-DuOWD4BU.jpg",C1="/advent/assets/pinecons-DN4xaoQh.jpg",E1="/advent/assets/pinecons0-t__cQNmk.jpg",D1="/advent/assets/pinecons1-DGIeou-f.jpg",O1="/advent/assets/pinecons3-xCOek82c.jpg",x1="/advent/assets/noma-CtxKXYmb.jpg",N1="/advent/assets/coffee05-CtvbYTlI.jpg",U1="/advent/assets/koliadky-DFZjday1.jpg",B1="/advent/assets/koliadky1-D8kgwEZZ.jpg",H1="/advent/assets/koliadky4-CDUgUMip.jpg",R1="/advent/assets/smolensk-DSJa0qX2.jpg",Y1="/advent/assets/smolensk1-C8faW8yG.jpg",q1="/advent/assets/smolensk3-BR8avWFN.jpg",X1="/advent/assets/tower-LkqE0Ps6.jpg",G1="/advent/assets/tower1-Df1m5F8Z.jpg",L1="/advent/assets/christmas-DDkkr5ot.jpg",Q1="/advent/assets/christmas1-BeD30mht.jpg",$1="/advent/assets/christmas2-BesTWRrW.jpg",V1="/advent/assets/drogo-CUI54dn7.jpg",Z1="/advent/assets/cedar-t4INFow4.jpg",k1="/advent/assets/cedar1-DZqAq6zZ.jpg",K1="/advent/assets/choko-Baf9JYP3.jpg",J1="/advent/assets/blessed1-CWF1o7u1.jpg",W1="/advent/assets/blessed2-CU2p4ypS.jpg",F1="/advent/assets/blessed3-5rhrqKyi.jpg",I1="/advent/assets/bless4-4Ll_GvpY.jpg",P1="/advent/assets/bless5-UTCmR7lr.jpg",ly="/advent/assets/bless6-CJxznB30.jpg",ty="/advent/assets/bless9-DcH5d8C6.jpg",iy="/advent/assets/teabag-7cU4nlRp.jpg",ey="/advent/assets/sombrero1-ToxUavrc.jpg",ny="/advent/assets/sombrero2-CoV60mUj.jpg",ay="/advent/assets/sombrero3-CtpxCN50.jpg",sy="/advent/assets/musik-DGR0Ibv7.jpg",oy="/advent/assets/musik1-CxBli7oM.jpg",ry="/advent/assets/mex-C1sNijnv.jpg",uy="/advent/assets/mex3-CB0LfBt5.jpg",cy="/advent/assets/sanmiguel-CybJiYPe.jpg",gy="/advent/assets/frida-07UEoWIv.webp",fy="/advent/assets/frida1-B9HyRZK3.jpg",py="/advent/assets/frida3-SOwYbJa9.jpg",dy="/advent/assets/tea_bag-DRWtL3Mc.jpg",my="/advent/assets/guilt-DLHr3T3c.jpg",hy="/advent/assets/bosphorus-BURA-rTJ.jpg",yy="/advent/assets/bosphorus1-BdEkWYac.jpg",vy="/advent/assets/turkish1-BLD0BNe9.jpg",by="/advent/assets/turkish2-jH-U0BZA.jpg",Sy="/advent/assets/turkish3-yGiMzEP9.jpg",wy="/advent/assets/turkish4-C37DGkOD.jpg",zy="/advent/assets/moon1-4f8TvoJs.jpg",_y="/advent/assets/mooncoffe-Dx5_ymHM.jpg",Ty="/advent/assets/scarycoffee-BVstMak1.jpg",jy="/advent/assets/beatles-BMUnAxoJ.jpg",Ay="/advent/assets/beatles1-BdTV_cMa.jpg",My="/advent/assets/sweets-h4TtI9FD.jpg",Cy="/advent/assets/bless10-DqiWaUm6.jpg",Ey="/advent/assets/blessed4-Dy78_OG_.jpg",Dy="/advent/assets/blessed12-BMt05-MF.jpg",Oy="/advent/assets/blessed11-DD-pI5pL.jpg",xy="/advent/assets/pb1-CmsDttyT.jpg",Ny="/advent/assets/pb2-scSdFpT7.jpg",Uy="/advent/assets/pb3-CXZBsr-q.jpg",By="/advent/assets/pb4-sWWVmf-k.jpg",Hy="/advent/assets/secrets-BzshSfFv.jpg",r={muerte:Im,katrina:Pm,pink:lh,rese:th,Ofrenda:ih,kolumb2:nh,kolumbia:eh,melhior:ah,shir:sh,markes:oh,tolkin:rh,tolkin1:uh,berries:ch,berries1:gh,gvatemala1:fh,graves:ph,carpet1:dh,airsnake2:mh,fish:hh,fish1:yh,brazil1:vh,ethiopia:bh,goats:Sh,rabanda:wh,honduras:zh,honduras1:_h,resp:Th,cicoriy:jh,carob:Ah,tonka:Mh,kardamon:Ch,mem:Eh,cafe:Dh,yerevan1:Oh,yerevan2:xh,yerevan3:Nh,lion:Uh,bears:Bh,ararat:Hh,yazzve:Rh,abc:Yh,noy:qh,poss:Xh,possaMom:Zh,possaMom1:kh,possOrOposs:Kh,possaKnowl:Jh,poss1:Gh,poss2:Lh,poss3:Qh,poss4:$h,poss5:Vh,thief:Wh,smile:Fh,merch:Ih,merch1:Ph,cammomile:l0,chamomile2:e0,chamomileTea:t0,chamomile1:i0,juniper:n0,juniper1:a0,juniper3:s0,juniperTea:o0,chamSci:r0,juniperTattoo:u0,chamomileTattoo:c0,juniperSci:g0,juniperSci1:f0,solovki:p0,solovki1:d0,solovki2:m0,coffeCard1:h0,coffeCard2:y0,coffeCard3:v0,coffeCard4:b0,coffeCard5:S0,coffeCard6:w0,atitlan:z0,atitlan1:_0,guatemala8:T0,guatemalaCorn:j0,guatemalaTkan:A0,himalaya:M0,pinkSalt:C0,saltMeme:E0,harvest:H0,harvest1:R0,matcha:O0,matcha2:x0,matcha3:N0,matcha11:D0,matchaOld:U0,matchaOld1:B0,matchaColors:Y0,cat1:q0,cat2:X0,cat3:G0,cat4:L0,cat5:Q0,piterMeme:$0,monk:V0,nyMeme1:Z0,nyMeme2:k0,nyMeme4:K0,nyMeme5:J0,nyMeme6:W0,nyMeme7:F0,nyMeme8:I0,nyMeme9:P0,gerb1:l1,gerb2:t1,okMeme:i1,chasha:s1,map:a1,u70:n1,unk:e1,ft0:o1,ft1:r1,ft2:u1,cheese:c1,cheese1:g1,reishi:f1,kamakura:p1,kamakura2:d1,dragon:m1,dragon1:h1,kissaten:y1,kissaten1:v1,sakura:b1,sakura1:S1,pistachios:w1,pistachios1:z1,pistachios2:_1,pistachios3:T1,pistachioLatte:j1,unicornGerb:A1,scotish:M1,pinecone:C1,pinecone0:E1,pinecone1:D1,pinecone2:O1,noma:x1,coffee06:N1,koliadky:U1,koliadky1:B1,koliadky4:H1,smolensk:R1,smolensk1:Y1,smolensk2:q1,tower:X1,tower1:G1,christmas:L1,christmas1:Q1,christmas2:$1,drogo:V1,cedar:Z1,cedar1:k1,choko:K1,blessed1:J1,blessed2:W1,blessed3:F1,bless4:I1,bless5:P1,bless6:ly,bless9:ty,teabag:iy,sombrero1:ey,sombrero2:ny,sombrero3:ay,musik:sy,musik1:oy,mex1:ry,mex3:uy,sanmiguel:cy,frida:gy,frida1:fy,frida3:py,teabag1:dy,guilt:my,bosphorus:hy,bosphorus1:yy,turkish1:vy,turkish2:by,turkish3:Sy,turkish4:wy,moon1:zy,mooncoffee:_y,scarycoffee:Ty,beatles:jy,bless10:Cy,beatles1:Ay,sweets:My,blessed4:Ey,blessed12:Dy,blessed11:Oy,pb1:xy,pb2:Ny,pb3:Uy,pb4:By,secrets:Hy},Ry=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
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
  `},{day:11,date:"2025-12-30",tanya_gift:"Матча латте в пакетике",zebra_gift:"Матча латте в пакетике",tanya_bonus:"Цветная шоколадка без сахара",zebra_bonus:"Цветная шоколадка без сахара",title:"Матча латте и ирония",tanya_message:`
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
    `},{day:16,date:"2026-01-04",tanya_gift:'Shazel "Sütlü Menengiç" — фисташковый напиток с молоком (стик-пакет, Турция)',zebra_gift:'Shazel "Sütlü Menengiç" — фисташковый напиток с молоком (стик-пакет, Турция)',tanya_bonus:'Леденец "Единорог Лучистик" со светящейся неоновой палочкой',zebra_bonus:'Леденец "Единорог Лучистик" со светящейся неоновой палочкой',title:"Турецкие фисташки и волшебство",tanya_message:`
    <h3>Загадка дня! 🕵️‍♀️</h3>
    <p>
      🦄 Единорог Лучистик должен быть съеден сегодня (день 16).<br>
      Где шоколадка от 14 дня, была ли она в реальности, и что тогда прилагается к конверту 16?.. Так много вопросов, так мало ответов.
    </p>
    <h3>Shazel "Sütlü Menengiç" — турецкий фисташковый кофе ☕🌰</h3>
    <p>Сегодня у тебя напиток из Турции. Не кофе, но похож на кофе, из настоящих фисташек (<strong>"Menengiç"</strong> = дикая турецкая фисташка, растёт в Анатолии), <strong>без кофеина!</strong></p>
      <p>Похож на ореховый латте или фисташковое мороженое в жидком виде</p>
    <img src="${r.pistachioLatte}" />
    <p><strong>История:</strong></p>
    <ul>
      <li>Дикая фисташка: меньше обычной, темнее, более ароматная. Собирают вручную в горах (трудоёмко!)</li>
      <li>Турки пьют напиток из menengiç <strong>веками</strong>.</li>
      <li>Зёрна дикой фисташки собирают в горах, жарят (как кофейные зёрна), мелют в порошок, смешивают с молоком и сахаром.</li>
    </ul>
    <img src="${r.pistachios}" />
    <p><strong>Почему "кофе":</strong></p>
    <ul>
      <li>Похож на кофе: горячий, ароматный, бодрящий (но без кофеина!)</li>
      <li>Пьют из маленьких чашек, как турецкий кофе</li>
      <li>Ритуал похож: медленно, с наслаждением</li>
      <li>Но вкус совсем другой — ореховый, сладкий, мягкий</li>
    </ul>
    <img src="${r.pistachios1}" />
    <p><strong>История фисташек:</strong></p>
    <ul>
      <li><strong>Родина:</strong> Ближний Восток, Средняя Азия (Иран, Турция, Сирия)</li>
      <li><strong>Древность:</strong> 9000 лет! Одни из древнейших орехов, известных человеку</li>
      <li><strong>Персия:</strong> Фисташки — любимый орех персидских царей</li>
      <li><strong>Царица Савская:</strong> Легенда — объявила фисташки царским орехом, простолюдинам запретила!</li>
      <li><strong>Шёлковый путь:</strong> Фисташки возили из Персии в Китай и Европу</li>
    </ul>
    <img src="${r.pistachios2}" />
    
    <p><strong>Почему фисташки дорогие:</strong></p>
    <ul>
      <li>Растут медленно (дерево плодоносит только через 7-10 лет!)</li>
      <li>Собирают вручную</li>
      <li>Требуют специфического климата (жаркое лето, холодная зима)</li>
      <li>Самые дорогие: фисташки из Бронте (Сицилия) — до €80/кг!</li>
    </ul>
    <img src="${r.pistachios3}" />
    
    <h3>Единорог Лучистик — волшебство в леденце 🦄✨</h3>
    
    <img src="${r.unicornGerb}" />
    <p><strong>Внезапное включение про единорогов в геральдике:</strong></p>
    <ul>
      <li>Символ Шотландии (а на гербе Великобритании — единорог и лев!)</li>
      <li>В сегодня лет я узнала, что за счет их непростой совместной истории единорог на гербе в цепях.</li>
      <li>И бонусом - что шотландские единороги были теми еще опасными тварями, с которыми лучше не встречаться.</li>
    </ul>
    <img src="${r.scotish}" />    
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари фисташковый кофе, сломай неоновую палочку, посмотри на свечение</li>
      <li><strong>Мечта:</strong> Если бы ты была единорогом из My Little Pony, какой знак способности у тебя был бы? (Чат!)</li>
      <li>Посмотреть что-нибудь с единорогами: например, "Легенда" (Legend, 1985, тёмная сказка от Ридли Скотта) или "Последний единорог" (The Last Unicorn, 1982 - культовая анимация!)
</li>
    </ol>
    
    <p><em>Пусть кофе будет нежным, единорог — волшебным, а ты — улыбающейся, как фисташка! 🌰🦄✨ (это звучит так упорото, что я решила это оставить)</em></p>
  `,zebra_message:`
    <h3>🎉 Сегодня БЕЗ кофеина! 🎉</h3>
    
    <p style="background-color: #e8f5e9; border: 2px solid #4caf50; padding: 15px; border-radius: 8px; font-weight: bold; color: #2e7d32;">
      ✅ Можно пить спокойно!<br>
      Shazel "Sütlü Menengiç" — фисташковый напиток <strong>БЕЗ кофеина</strong>.<br>
      Мягкий, сладкий, ореховый. Как фисташковое мороженое, но горячее! 🌰☕
    </p>
    
    <h3>Shazel "Sütlü Menengiç" — турецкий фисташковый кофе ☕🌰</h3>
    
    <p>Сегодня у тебя напиток из Турции. Не кофе, но похож на кофе, из настоящих фисташек (<strong>"Menengiç"</strong> = дикая турецкая фисташка, растёт в Анатолии), <strong>без кофеина!</strong></p>
      <p>Похож на ореховый латте или фисташковое мороженое в жидком виде</p>
    <img src="${r.pistachioLatte}" />
    <p><strong>История:</strong></p>
    <ul>
      <li>Дикая фисташка: меньше обычной, темнее, более ароматная. Собирают вручную в горах (трудоёмко!)</li>
      <li>Турки пьют напиток из menengiç <strong>веками</strong>.</li>
      <li>Зёрна дикой фисташки собирают в горах, жарят (как кофейные зёрна), мелют в порошок, смешивают с молоком и сахаром.</li>
    </ul>
    <img src="${r.pistachios}" />
    <p><strong>Почему "кофе":</strong></p>
    <ul>
      <li>Похож на кофе: горячий, ароматный, бодрящий (но без кофеина!)</li>
      <li>Пьют из маленьких чашек, как турецкий кофе</li>
      <li>Ритуал похож: медленно, с наслаждением</li>
      <li>Но вкус совсем другой — ореховый, сладкий, мягкий</li>
    </ul>
    <img src="${r.pistachios1}" />
    <p><strong>История фисташек:</strong></p>
    <ul>
      <li><strong>Родина:</strong> Ближний Восток, Средняя Азия (Иран, Турция, Сирия)</li>
      <li><strong>Древность:</strong> 9000 лет! Одни из древнейших орехов, известных человеку</li>
      <li><strong>Персия:</strong> Фисташки — любимый орех персидских царей</li>
      <li><strong>Царица Савская:</strong> Легенда — объявила фисташки царским орехом, простолюдинам запретила!</li>
      <li><strong>Шёлковый путь:</strong> Фисташки возили из Персии в Китай и Европу</li>
    </ul>
    <img src="${r.pistachios2}" />
    
    <p><strong>Почему фисташки дорогие:</strong></p>
    <ul>
      <li>Растут медленно (дерево плодоносит только через 7-10 лет!)</li>
      <li>Собирают вручную</li>
      <li>Требуют специфического климата (жаркое лето, холодная зима)</li>
      <li>Самые дорогие: фисташки из Бронте (Сицилия) — до €80/кг!</li>
    </ul>
    <img src="${r.pistachios3}" />
    
    <h3>Единорог Лучистик — волшебство в леденце 🦄✨</h3>
    
    <img src="${r.unicornGerb}" />
    <p><strong>Внезапное включение про единорогов в геральдике:</strong></p>
    <ul>
      <li>Символ Шотландии (а на гербе Великобритании — единорог и лев!)</li>
      <li>В сегодня лет я узнала, что за счет их непростой совместной истории единорог на гербе в цепях.</li>
      <li>И бонусом - что шотландские единороги были теми еще опасными тварями, с которыми лучше не встречаться.</li>
    </ul>
    <img src="${r.scotish}" />    
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Завари фисташковый кофе, сломай неоновую палочку, посмотри на свечение</li>
      <li><strong>Мечта:</strong> Если бы ты была единорогом из My Little Pony, какой знак способности у тебя был бы? (Чат!)</li>
      <li>Посмотреть что-нибудь с единорогами: например, "Легенда" (Legend, 1985, тёмная сказка от Ридли Скотта) или "Последний единорог" (The Last Unicorn, 1982 - культовая анимация!)
      </li>
    </ol>
    
    <p><em>Пусть кофе будет нежным, единорог — волшебным, а ты — улыбающейся, как фисташка! 🌰🦄✨ (это звучит так упорото, что я решила это оставить)</em></p>
  `},{day:17,date:"2026-01-05",tanya_gift:"Рождественский кофе (красивые пакетики)",zebra_gift:"Какао",tanya_bonus:"Шашлычок из цукатов сосновых шишек (3 шишки на палочке)",zebra_bonus:"Шашлычок из цукатов сосновых шишек (3 шишки на палочке)",title:"Съесть лес",tanya_message:`
    <h3>Рождественский кофе и съедобное дерево 🎄☕🌲</h3>
    <img src="${r.coffee06}" />
    <p>Сегодня у тебя рождественский кофе и шашлычок из сосновых цукатов.</p>
    <p>По крайней мере, я надеюсь, что это так. У меня совершенно выпал из записей какой-то день - кажется, 6-е - но я успею посмотреть, что у вас за кофе, на месте, и добавить это к завтрашнему тексту, если буду в кондиции. Если вдруг у тебя не шашки, открой следующее окошко - а дальше мои записи делаются точнее.</p>
    
    <h3>Итак, цукаты из шишек 🌲🍯</h3>
    <img src="${r.pinecone1}" />
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Молодые зелёные сосновые шишки (собирают в мае-июне, 3-5 см, мягкие!)</li>
      <li>Варят в сахарном сиропе несколько дней</li>
      <li>Шишки становятся мягкими, сладкими, янтарными</li>
      <li>Можно есть целиком (хрустят!)</li>
    </ul>
    <img src="${r.pinecone2}" />
    
    <p><strong>Вкус:</strong></p>
    <ul>
      <li>Сладкие, хвойные, смолистые</li>
      <li>Ноты: мёд + хвоя + лёгкая горчинка</li>
      <li>Как мармелад, но с характером леса</li>
      <li><strong>Ощущение:</strong> "Я ем ёлку" 🎄</li>
    </ul>
    <img src="${r.pinecone0}" />
    <hr>
    
    <h3>Кто это придумал? 🌲</h3>
    
    <p><strong>География традиции:</strong></p>
    <ul>
      <li><strong>Россия:</strong> Сибирь, Алтай, Урал — староверы делали варенье из шишек (XVIII-XIX век)</li>
      <li>В тайге мало сахара, много шишек → находчивость!</li>
      <li>Считалось лекарством от цинги (витамин C!)</li>
      <li><strong>СССР:</strong> 1950-60-е — в санаториях давали варенье из шишек (лечение дыхательных путей)</li>
      <li>Сейчас продают на Алтае, в Сибири как сувенир</li>
    </ul>
    
    <p><strong>Грузия:</strong></p>
    <ul>
      <li>"Murabba" (მურაბა) = варенье из чего угодно (айва, орехи, лепестки роз, <strong>шишки!</strong>)</li>
      <li>Традиция: угощать гостей чаем с вареньем из шишек</li>
    </ul>
    <img src="${r.pinecone}" />
    <p><strong>Скандинавия:</strong></p>
    <ul>
      <li>Форажинг (foraging) — сбор дикоросов в лесу</li>
      <li>Хипстерские рестораны добавляют цукаты из шишек в десерты</li>
      <li>Ресторан <strong>"Noma"</strong> (Копенгаген, лучший ресторан мира) подавал хвойные блюда: молодые побеги сосны, веточки ели и жареный олений мох</li>
    </ul>
    <img src="${r.noma}" />
    
    <h3>Польза 🌲💊</h3>
    
    <p><strong>Народная медицина утверждает:</strong></p>
    <ul>
      <li>Народная медицина утверждает: витамин C (много!), эфирные масла (антисептик), лечат кашель, простуду, укрепляют иммунитет. Ешь шишки и у тебя не будет цинги)</li>
      <li>>Наука говорит: да, там антиоксиданты и витамины. Но "лечит всё" — перебор</li>
    </ul>
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Выпей рождественский напиток</li>
      <li><strong>Съешь шишку с палочки</strong> (осторожно, хрустит!)</li>
      <li>Почувствуй вкус елки, новогоднее настроение или связь с природой, как пойдет. Потом можно и выплюнуть)</li>
    </ol>
  `,zebra_message:`
    <h3>Рождественский какао и съедобное дерево 🎄☕🌲</h3>
    <img src="${r.coffee06}" />
    <p>Сегодня у тебя рождественский какао и шашлычок из сосновых цукатов.</p>
    <p>По крайней мере, я надеюсь, что это так. У меня совершенно выпал из записей какой-то день - кажется, 6-е - но я успею посмотреть, что у вас за какао, на месте, и добавить это к завтрашнему тексту, если буду в кондиции. Если вдруг у тебя не шашки, открой следующее окошко - а дальше мои записи делаются точнее.</p>
    
    <h3>Итак, цукаты из шишек 🌲🍯</h3>
    <img src="${r.pinecone1}" />
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Молодые зелёные сосновые шишки (собирают в мае-июне, 3-5 см, мягкие!)</li>
      <li>Варят в сахарном сиропе несколько дней</li>
      <li>Шишки становятся мягкими, сладкими, янтарными</li>
      <li>Можно есть целиком (хрустят!)</li>
    </ul>
    <img src="${r.pinecone2}" />
    
    <p><strong>Вкус:</strong></p>
    <ul>
      <li>Сладкие, хвойные, смолистые</li>
      <li>Ноты: мёд + хвоя + лёгкая горчинка</li>
      <li>Как мармелад, но с характером леса</li>
      <li><strong>Ощущение:</strong> "Я ем ёлку" 🎄</li>
    </ul>
    <img src="${r.pinecone0}" />
    <hr>
    
    <h3>Кто это придумал? 🌲</h3>
    
    <p><strong>География традиции:</strong></p>
    <ul>
      <li><strong>Россия:</strong> Сибирь, Алтай, Урал — староверы делали варенье из шишек (XVIII-XIX век)</li>
      <li>В тайге мало сахара, много шишек → находчивость!</li>
      <li>Считалось лекарством от цинги (витамин C!)</li>
      <li><strong>СССР:</strong> 1950-60-е — в санаториях давали варенье из шишек (лечение дыхательных путей)</li>
      <li>Сейчас продают на Алтае, в Сибири как сувенир</li>
    </ul>
    
    <p><strong>Грузия:</strong></p>
    <ul>
      <li>"Murabba" (მურაბა) = варенье из чего угодно (айва, орехи, лепестки роз, <strong>шишки!</strong>)</li>
      <li>Традиция: угощать гостей чаем с вареньем из шишек</li>
    </ul>
    <img src="${r.pinecone}" />
    <p><strong>Скандинавия:</strong></p>
    <ul>
      <li>Форажинг (foraging) — сбор дикоросов в лесу</li>
      <li>Хипстерские рестораны добавляют цукаты из шишек в десерты</li>
      <li>Ресторан <strong>"Noma"</strong> (Копенгаген, лучший ресторан мира) подавал хвойные блюда: молодые побеги сосны, веточки ели и жареный олений мох</li>
    </ul>
    <img src="${r.noma}" />
    
    <h3>Польза 🌲💊</h3>
    
    <p><strong>Народная медицина утверждает:</strong></p>
    <ul>
      <li>Народная медицина утверждает: витамин C (много!), эфирные масла (антисептик), лечат кашель, простуду, укрепляют иммунитет. Ешь шишки и у тебя не будет цинги)</li>
      <li>>Наука говорит: да, там антиоксиданты и витамины. Но "лечит всё" — перебор</li>
    </ul>
    
    <h3>Задание 🎯</h3>
    <ol>
      <li>Выпей рождественский какао</li>
      <li><strong>Съешь шишку с палочки</strong> (осторожно, хрустит!)</li>
      <li>Почувствуй вкус елки, новогоднее настроение или связь с природой, как пойдет. Потом можно и выплюнуть)</li>
    </ol>`},{day:18,date:"2026-01-06",tanya_gift:"Смоленский кофе (какой — узнаем на месте!)",tanya_uxazher_gift:"Смоленский кофе (какой — узнаем на месте!)",zebra_gift:"Смоленский кофе или декаф (какой — узнаем на месте!)",tanya_bonus:"Колядки по барам",zebra_bonus:"Колядки по барам",title:"Смоленск: подземелья, контрабанда и колядки",tanya_message:`
    <h3>Смоленск — город, где можно многое 🔑🕵️‍♀️🎭</h3>
    <img src="${r.smolensk2}" />
    <p>Сегодня мы в Смоленске! Кофе? Загадка (узнаем на месте, я не записала), но если вдруг в конверте окажется болотная тина, то можно добыть из меня нормальный дрип.</p>
    
    <p>Нейронки генерят про Смоленск уже знакомую нам скучную пургу (Наполеон - ВОВ - храм-долгострой), но я попыталась выдавить из них что-нибудь сверх этого.</p>
    <img src="${r.smolensk}" />
    <h3>Башня Веселуха</h3>
    
    <p><strong>Легенда о башне Веселуха:</strong></p>
    <ul>
      <li>Почему башню назвали "Веселуха"? Версий несколько.</li>
      <li><strong>Версия 1:</strong> С высоты башни открывался прекрасный вид — веселящий душу!</li>
      <li><strong>Версия 2 (мрачная):</strong> В башне замуровали живую девушку при строительстве (жертва духам для прочности стены), и в процессе она зловеще хохотала.</li>
      <li>По ночам из башни слышался <strong>женский плач и смех</strong> — то ли призрак, то ли ветер в подземельях</li>
    </ul>
    
    <h3>А в <strong>Маховой башне</strong> - Музей счастья "Смоленские украсы" 🎨✨🦅</h3>
    <img src="${r.tower}" />
    <p>История — музей, сделанный энтузиастами, который быстро вошел в топ-10 музеев города</p>
    <ul>
      <li><strong>1970-е:</strong> Детский туристический клуб "Гамаюн" начал собирать артефакты в экспедиции по Смоленщине. Собрали более 2000 экспонатов (подлинные вещи XIX-XX века)</li>
      <li><strong>2000-е</strong> — музей умирает: нет отопления, света, денег → закрывается</li>
      <li><strong>2016</strong> — энтузиасты из клуба "Гамаюн" возрождают музей, 2018 — Российское военно-историческое общество делает реконструкцию. Провели отопление, свет, расписали стены орнаментами</li>
    </ul>
    
    <p><strong>Концепция — три яруса башни:</strong></p>
    <img src="${r.tower1}" />
    <ul>
      <li>1 ярус — Мать-Земля (женское начало): прялки, ткацкий станок XIX века, прочие женские штуки.</li>
      <li>2 ярус — Огонь и Воин (мужское начало): Топоры, серпы, молоты, скобели (инструменты). Гордость музея: коллекция орнаментированных печных дверец XIX-XX века.</li>
      <li>3 ярус — Годовой цикл: Народные праздники и обряды по природному календарю. Интерактив: можно попробовать древние ремёсла!</li>
      <li>Почему "Музей счастья"? Есть две версии, хорошая и плохая. Хорошая про то, что можно загадать желание на счастье в круге на третьем  ярусе. Плохая - про скрепное счастье в рамках гендерной роли и сакральной связи с предками.</li>
      <li>Еще можно поучаствовать в свадебном обряде в башне: невеста прядёт нить семейной жизни на настоящей прялке, жених делает оберег из бересты (мм, полезная в хозяйстве вещь)</li>
    </ul>
    
    <h3>Морис Маркин — смоленский король такси 🚖👑</h3>
    
    <p><strong>История:</strong></p>
    <ul>
      <li>Родился в Смоленске в 1893 году в бедной семье. 1912 год: уехал в США <strong>без денег и без знания языка, работал портным в Чикаго</strong></li>
      <li>1921 год: скупил несколько компаний и создал <strong>Checker Cab Manufacturing Co.</strong> Стал <strong>лидером рынка такси в США.</strong> 1929 год: выкупил Yellow Cab Company у Джона Херца</li>
      <li><strong>Checker Cab</strong> — те самые жёлтые такси, символ Нью-Йорка</li>
    </ul>
    
    <p><strong>Итог:</strong> Парень из бедной смоленской семьи стал такси-королём Америки. Американская мечта началась в Смоленске! 🚕✨</p>
    
    <h3>Подземелья Смоленска — город под городом 🕳️🔦</h3>
    <img src="${r.smolensk1}" />
    <p><strong>Факты:</strong></p>
    <ul>
      <li>Под Смоленском — <strong>разветвлённая сеть подземных ходов</strong></li>
      <li>Строить начали ещё при Иване Грозном. При строительстве крепости (1595-1602) под башнями делали «слухи» — подземные галереи</li>
      <li><strong>1609-1611:</strong> Первые в истории города <strong>подземные бои!</strong> (во время осады поляками). Схемы подземелий утеряны — никто не знает точно, что где, как во время ремонта.</li>
      <li>При стройке иногда находят новые ходы. 2015 год: нашли ход от дома до церкви (300 метров!), внутри — бутылки и монеты XIX века (где-то я это уже видела - ах да, в тексте про Подольск).</li>
      <li>Часть строилась в военных целях: шпионаж, побег при осаде, тайные проходы между укреплениями</li>
      <li>Часть была честно создана для контрабанды: Смоленск — торговый город на важном торговом пути, купцы прятали товары от налогов. Вообще история контрабанды в центральной Российской Империи здорово недооценена</li>
      </ul>
    
    <h3>Колядки по барам — рождественская традиция 2.0 🎄🍺🎶</h3>
    <img src="${r.koliadky1}" />
    <p><strong>Традиционные колядки (Святки, 7-19 января):</strong></p>
    <ul>
      <li>Люди ходили от дома к дому, пели песни, желали счастья</li>
      <li><strong>Ряженые!</strong> В костюмах животных (коза, медведь, волк), чертей, мертвецов!</li>
      <li>Хозяева давали угощения (пироги, сладости, деньги)</li>
      <li>Считалось: чем больше колядующих, тем счастливее год!</li>
      <li><strong>Граница между мирами:</strong> В Святки граница между явью и навью (мир живых и мёртвых) истончается → духи могут проникнуть сюда</li>
      <li>Отсюда — ряженье в чертей и мертвецов (чтобы обмануть духов!)</li>
    </ul>
    <img src="${r.koliadky4}" />
    <p><strong>Что пели:</strong></p>
    <ul>
      <li>Колядки (7-8 января) — про Рождество</li>
      <li>Щедровки (13-14 января, Старый Новый год) — пожелания богатства</li>
      <li>"Пришли колядки — блины да оладки!"</li>
      <li>"Коляда, коляда, отворяй ворота!"</li>
    </ul>
    <p>В общем, не рок-н-ролл, хотя это как посмотреть.</p>
    
    <p><em>Идём по барам, поём (что-то), пьём (в меру), веселимся! </em></p>
    <img src="${r.koliadky}" />
    <h3>Задание 🎯</h3>
    <ol>
      <li><strong>Выпить кофе в Смоленске, чтобы не спать</strong></li>
      <li><strong>Колядуем по барам!</strong> Духи предков одобряют (предположительно) 👻🍻</li>
    </ol>
  `,zebra_message:`
    <h3>Смоленск — город, где можно многое 🔑🕵️‍♀️🎭</h3>
    <img src="${r.smolensk2}" />
    <p>Сегодня мы в Смоленске! Кофе? Загадка (узнаем на месте, я не записала), но если вдруг в конверте окажется болотная тина, то можно добыть из меня нормальный дрип (декаф тоже, хотя предлагаю рискнуть с опасным, чтобы шататься по барам в морозной тьме).</p>
    
    <p>Нейронки генерят про Смоленск уже знакомую нам скучную пургу (Наполеон - ВОВ - храм-долгострой), но я попыталась выдавить из них что-нибудь сверх этого.</p>
    <img src="${r.smolensk}" />
    <h3>Башня Веселуха</h3>
    
    <p><strong>Легенда о башне Веселуха:</strong></p>
    <ul>
      <li>Почему башню назвали "Веселуха"? Версий несколько.</li>
      <li><strong>Версия 1:</strong> С высоты башни открывался прекрасный вид — веселящий душу!</li>
      <li><strong>Версия 2 (мрачная):</strong> В башне замуровали живую девушку при строительстве (жертва духам для прочности стены), и в процессе она зловеще хохотала.</li>
      <li>По ночам из башни слышался <strong>женский плач и смех</strong> — то ли призрак, то ли ветер в подземельях</li>
    </ul>
    
    <h3>А в <strong>Маховой башне</strong> - Музей счастья "Смоленские украсы" 🎨✨🦅</h3>
    <img src="${r.tower}" />
    <p>История — музей, сделанный энтузиастами, который быстро вошел в топ-10 музеев города</p>
    <ul>
      <li><strong>1970-е:</strong> Детский туристический клуб "Гамаюн" начал собирать артефакты в экспедиции по Смоленщине. Собрали более 2000 экспонатов (подлинные вещи XIX-XX века)</li>
      <li><strong>2000-е</strong> — музей умирает: нет отопления, света, денег → закрывается</li>
      <li><strong>2016</strong> — энтузиасты из клуба "Гамаюн" возрождают музей, 2018 — Российское военно-историческое общество делает реконструкцию. Провели отопление, свет, расписали стены орнаментами</li>
    </ul>
    
    <p><strong>Концепция — три яруса башни:</strong></p>
    <img src="${r.tower1}" />
    <ul>
      <li>1 ярус — Мать-Земля (женское начало): прялки, ткацкий станок XIX века, прочие женские штуки.</li>
      <li>2 ярус — Огонь и Воин (мужское начало): Топоры, серпы, молоты, скобели (инструменты). Гордость музея: коллекция орнаментированных печных дверец XIX-XX века.</li>
      <li>3 ярус — Годовой цикл: Народные праздники и обряды по природному календарю. Интерактив: можно попробовать древние ремёсла!</li>
      <li>Почему "Музей счастья"? Есть две версии, хорошая и плохая. Хорошая про то, что можно загадать желание на счастье в круге на третьем  ярусе. Плохая - про скрепное счастье в рамках гендерной роли и сакральной связи с предками.</li>
      <li>Еще можно поучаствовать в свадебном обряде в башне: невеста прядёт нить семейной жизни на настоящей прялке, жених делает оберег из бересты (мм, полезная в хозяйстве вещь)</li>
    </ul>
    
    <h3>Морис Маркин — смоленский король такси 🚖👑</h3>
    
    <p><strong>История:</strong></p>
    <ul>
      <li>Родился в Смоленске в 1893 году в бедной семье. 1912 год: уехал в США <strong>без денег и без знания языка, работал портным в Чикаго</strong></li>
      <li>1921 год: скупил несколько компаний и создал <strong>Checker Cab Manufacturing Co.</strong> Стал <strong>лидером рынка такси в США.</strong> 1929 год: выкупил Yellow Cab Company у Джона Херца</li>
      <li><strong>Checker Cab</strong> — те самые жёлтые такси, символ Нью-Йорка</li>
    </ul>
    
    <p><strong>Итог:</strong> Парень из бедной смоленской семьи стал такси-королём Америки. Американская мечта началась в Смоленске! 🚕✨</p>
    
    <h3>Подземелья Смоленска — город под городом 🕳️🔦</h3>
    <img src="${r.smolensk1}" />
    <p><strong>Факты:</strong></p>
    <ul>
      <li>Под Смоленском — <strong>разветвлённая сеть подземных ходов</strong></li>
      <li>Строить начали ещё при Иване Грозном. При строительстве крепости (1595-1602) под башнями делали «слухи» — подземные галереи</li>
      <li><strong>1609-1611:</strong> Первые в истории города <strong>подземные бои!</strong> (во время осады поляками). Схемы подземелий утеряны — никто не знает точно, что где, как во время ремонта.</li>
      <li>При стройке иногда находят новые ходы. 2015 год: нашли ход от дома до церкви (300 метров!), внутри — бутылки и монеты XIX века (где-то я это уже видела - ах да, в тексте про Подольск).</li>
      <li>Часть строилась в военных целях: шпионаж, побег при осаде, тайные проходы между укреплениями</li>
      <li>Часть была честно создана для контрабанды: Смоленск — торговый город на важном торговом пути, купцы прятали товары от налогов. Вообще история контрабанды в центральной Российской Империи здорово недооценена</li>
      </ul>
    
    <h3>Колядки по барам — рождественская традиция 2.0 🎄🍺🎶</h3>
    <img src="${r.koliadky1}" />
    <p><strong>Традиционные колядки (Святки, 7-19 января):</strong></p>
    <ul>
      <li>Люди ходили от дома к дому, пели песни, желали счастья</li>
      <li><strong>Ряженые!</strong> В костюмах животных (коза, медведь, волк), чертей, мертвецов!</li>
      <li>Хозяева давали угощения (пироги, сладости, деньги)</li>
      <li>Считалось: чем больше колядующих, тем счастливее год!</li>
      <li><strong>Граница между мирами:</strong> В Святки граница между явью и навью (мир живых и мёртвых) истончается → духи могут проникнуть сюда</li>
      <li>Отсюда — ряженье в чертей и мертвецов (чтобы обмануть духов!)</li>
    </ul>
    <img src="${r.koliadky4}" />
    <p><strong>Что пели:</strong></p>
    <ul>
      <li>Колядки (7-8 января) — про Рождество</li>
      <li>Щедровки (13-14 января, Старый Новый год) — пожелания богатства</li>
      <li>"Пришли колядки — блины да оладки!"</li>
      <li>"Коляда, коляда, отворяй ворота!"</li>
    </ul>
    <p>В общем, не рок-н-ролл, хотя это как посмотреть.</p>
    
    <p><em>Идём по барам, поём (что-то), пьём (в меру), веселимся! </em></p>
    <img src="${r.koliadky}" />
    <h3>Задание 🎯</h3>
    <ol>
      <li><strong>Выпить кофе в Смоленске, чтобы не спать</strong></li>
      <li><strong>Колядуем по барам!</strong> Духи предков одобряют (предположительно) 👻🍻</li>
    </ol>
  `},{day:19,date:"2026-01-07",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Аскорбинка",zebra_bonus:"Аскорбинка",title:"День 18",tanya_message:`
      <img src="${r.christmas}" />
  <p>А вот каких замечательных вертепов я нашла на Пинтересте</p>
  
  <p>Мимо этого кофе я не смогла пройти: это была целая серия дрипов с картинками о том, как <strong>"Иисус любит тебя"</strong>☕✝️</p>
  <img src="${r.christmas1}" />

      <p>Между тем <strong>Christian Coffee</strong> — целый жанр в США!</p>
      
      <p><strong>Бренды:</strong> Faith Coffee, Gospel Grounds, Holy Grounds. Часть прибыли идёт миссионерам или церквям.</p>
      
      <p><strong>Слоганы:</strong></p>
      <ul>
        <li>"Jesus is my espresso" (игра слов!)</li>
        <li>"Grounds for faith"</li>
        <li>"Blessed beans"</li>
      </ul>
      <img src="${r.blessed1}" />

      <p>Есть маркетинговая легенда, что кофе изначально считался <strong>дьявольским напитком</strong>. Мусульмане его пили, христиане боялись, пока Папа Климент VIII не попробовал и не благословил (1600), сказав, что кощунством было бы оставлять дьяволу такую хорошую вещь.</p>
      
      <h3>Кофейная молитва (повторяем!) 🙏</h3>
      <p><strong>Orthodox Coffee Prayer:</strong></p>
      
      <p><em>"Bless this coffee, O Lord, as You blessed the water at Cana. Give us strength for our work and keep us alert in Your service. Through the intercession of Saint Drogo, patron of coffee, may this drink refresh our bodies and enliven our spirits. Amen."</em></p>
      <img src="${r.drogo}" />
      <p>У кофе есть даже свой святой покровитель - Saint Drogo. Его память отмечается 12 декабря. Сам он, правда, разминулся с кофе на пару столетий, если верить нейронкам - но заваривал какой-то ячмень и был гиперпродуктивен (его божественная суперсособность - находиться в нескольких местах одновременно).</p>

      <h3>Задание: Рождественский ритуал</h3>
      <ol>
        <li>Завари кофе "Иисус любит тебя"</li>
        <li>Вспомни кофейную молитву</li>
        <li><strong>Включи госпел!</strong></li>
        <iframe width="100%" src="https://www.youtube.com/embed/3aD8OK07iIY?si=H2S7oeeQmc-jH_uv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <li>Выпей кофе, послушай музыку, почувствуй благодать</li>
        <li>Иисус любит тебя. И кофе тоже. ☕✝️💕</li>
      </ol>
      <img src="${r.christmas2}" />
      
      <p>А вот текст про сегодняшний</p>
      <h3>Кедровый кофе + шоколад без сахара — загадочная сибирская магия ✨🌲</h3>

  <p>Сегодня у нас очередной кофезаменитель - <strong>кедровый кофе</strong> - и <strong>шоколад без сахара</strong>. Звучит как диета гламурного отшельника в тайге.</p>
  <img src="${r.cedar}" />
  <h3>Кедровый кофе — что это? 🌲☕</h3>
  <p><strong>Состав:</strong> Обжаренные и молотые <strong>ядра кедрового ореха</strong> (иногда с добавлением цикория или ячменя).</p>
  <p><strong>Вкус:</strong> Ореховый, маслянистый, сливочный, с лёгкой сладостью. <strong>Похож на кофе, но мягче, без горечи.</strong></p>
  <p><strong>Кофеина НЕТ!</strong> Это напиток-обманка: выглядит как кофе, пахнет как кофе, но не бодрит (зато и не перевозбуждает).</p>
  
  <h3>История кедрового кофе 🌲</h3>
  <p><strong>Сибирь и Урал:</strong> Кедровые орехи — традиционная еда коренных народов (ханты, манси, алтайцы). Их ели сырыми, жарили, толкли в муку, выжимали масло.</p>
  <img src="${r.cedar1}" />
  <p><strong>Откуда кофе?</strong></p>
  <ul>
    <li><strong>СССР, дефицит:</strong> Настоящий кофе был дефицитом, суррогаты — нормой</li>
    <li>Обжаривали всё: цикорий, ячмень, жёлуди, <strong>кедровые орехи.</strong></li>
    <li>Кедровый — самый вкусный и дорогой из суррогатов.</li>
    <li>Кедровые орехи — суперфуд!</li>
    <li><strong>Белок:</strong> больше, чем в курице!</li>
    <li><strong>Жиры:</strong> 68 г (здоровые ненасыщенные!)</li>
    <li><strong>Витамины:</strong> E, B1, B2, B3</li>
    <li><strong>Минералы:</strong> Магний, фосфор, цинк, марганец</li>
    <li><strong>Аминокислоты:</strong> Аргинин (для сердца и сосудов)</li>
  </ul>
  
  <p><strong>Эффекты:</strong></p>
  <ul>
    <li>Снижают аппетит (жирные, насыщают надолго)</li>
    <li>Улучшают кожу, волосы, ногти (витамин E)</li>
    <li>Поддерживают иммунитет (цинк)</li>
    <li>Энергия без кофеина!</li>
  </ul>
  
  <h3>Шоколад без сахара — тёмная сторона какао 🍫</h3>
  <p><strong>Что внутри:</strong> Какао-масса, какао-масло, подсластитель (стевия, эритритол, мальтитол). В нашем случае бонусом идет хипстерский набор из сублимированных ягод, красителей и чего только не.</p>
  <img src="${r.choko}" />
  <p><strong>История шоколада без сахара:</strong></p>
  <ul>
    <li><strong>Ацтеки:</strong> Пили какао <strong>горьким!</strong> С перцем чили, без сахара</li>
    <li><strong>XVI век, Европа:</strong> Сахар добавили испанцы (и шоколад стал десертом)</li>
    <li><strong>XXI век:</strong> Возвращение к корням — тёмный шоколад 70-99% какао, минимум сахара</li>
  </ul>
  
  <h3>Философия этого дня 🌲🍫</h3>
  <p>Кедровый кофе без кофеина и шоколад без сахара — сплошной обман ожиданий, но интересно же.</p>.

  <h3>Задание от нейронки 🎯</h3>
  <ol>
    <li>Завари кедровый кофе, отломи кусочек шоколада без сахара</li>
    <li><strong>Аффирмация дня:</strong> "Сегодня я пью кофе без кофеина и ем шоколад без сахара. Я — взрослый человек и принимаю странные решения" 🌲🍫</li>
  </ol>
      `,zebra_message:`
      <img src="${r.christmas}" />
  <p>А вот каких замечательных вертепов я нашла на Пинтересте</p>
  
  <p>Мимо этого кофе я не смогла пройти: это была целая серия дрипов с картинками о том, как <strong>"Иисус любит тебя"</strong>☕✝️</p>
  <img src="${r.christmas1}" />

        <p>Между тем <strong>Christian Coffee</strong> — целый жанр в США!</p>
      
      <p><strong>Бренды:</strong> Faith Coffee, Gospel Grounds, Holy Grounds. Часть прибыли идёт миссионерам или церквям.</p>
      
      <p><strong>Слоганы:</strong></p>
      <ul>
        <li>"Jesus is my espresso" (игра слов!)</li>
        <li>"Grounds for faith"</li>
        <li>"Blessed beans"</li>
      </ul>
      <img src="${r.blessed1}" />

      <p>Есть маркетинговая легенда, что кофе изначально считался <strong>дьявольским напитком</strong>. Мусульмане его пили, христиане боялись, пока Папа Климент VIII не попробовал и не благословил (1600), сказав, что кощунством было бы оставлять дьяволу такую хорошую вещь.</p>
      
      <h3>Кофейная молитва (повторяем!) 🙏</h3>
      <p><strong>Orthodox Coffee Prayer:</strong></p>
      
      <p><em>"Bless this coffee, O Lord, as You blessed the water at Cana. Give us strength for our work and keep us alert in Your service. Through the intercession of Saint Drogo, patron of coffee, may this drink refresh our bodies and enliven our spirits. Amen."</em></p>
      <img src="${r.drogo}" />
      <p>У кофе есть даже свой святой покровитель - Saint Drogo. Его память отмечается 12 декабря. Сам он, правда, разминулся с кофе на пару столетий, если верить нейронкам - но заваривал какой-то ячмень и был гиперпродуктивен (его божественная суперсособность - находиться в нескольких местах одновременно).</p>

      <h3>Задание: Рождественский ритуал</h3>
      <ol>
        <li>Завари кофе "Иисус любит тебя"</li>
        <li>Вспомни кофейную молитву</li>
        <li><strong>Включи госпел!</strong></li>
        <iframe width="100%" src="https://www.youtube.com/embed/3aD8OK07iIY?si=H2S7oeeQmc-jH_uv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <li>Выпей кофе, послушай музыку, почувствуй благодать</li>
        <li>Иисус любит тебя. И кофе тоже. ☕✝️💕</li>
      </ol>
      <img src="${r.christmas2}" />
      
      <p>А вот текст про сегодняшний</p>
      <h3>Кедровый кофе + шоколад без сахара — загадочная сибирская магия ✨🌲</h3>

  <p>Сегодня у нас очередной кофезаменитель - <strong>кедровый кофе</strong> - и <strong>шоколад без сахара</strong>. Звучит как диета гламурного отшельника в тайге.</p>
  <img src="${r.cedar}" />
  <h3>Кедровый кофе — что это? 🌲☕</h3>
  <p><strong>Состав:</strong> Обжаренные и молотые <strong>ядра кедрового ореха</strong> (иногда с добавлением цикория или ячменя).</p>
  <p><strong>Вкус:</strong> Ореховый, маслянистый, сливочный, с лёгкой сладостью. <strong>Похож на кофе, но мягче, без горечи.</strong></p>
  <p><strong>Кофеина НЕТ!</strong> Это напиток-обманка: выглядит как кофе, пахнет как кофе, но не бодрит (зато и не перевозбуждает).</p>
  
  <h3>История кедрового кофе 🌲</h3>
  <p><strong>Сибирь и Урал:</strong> Кедровые орехи — традиционная еда коренных народов (ханты, манси, алтайцы). Их ели сырыми, жарили, толкли в муку, выжимали масло.</p>
  <img src="${r.cedar1}" />
  <p><strong>Откуда кофе?</strong></p>
  <ul>
    <li><strong>СССР, дефицит:</strong> Настоящий кофе был дефицитом, суррогаты — нормой</li>
    <li>Обжаривали всё: цикорий, ячмень, жёлуди, <strong>кедровые орехи.</strong></li>
    <li>Кедровый — самый вкусный и дорогой из суррогатов.</li>
    <li>Кедровые орехи — суперфуд!</li>
    <li><strong>Белок:</strong> больше, чем в курице!</li>
    <li><strong>Жиры:</strong> 68 г (здоровые ненасыщенные!)</li>
    <li><strong>Витамины:</strong> E, B1, B2, B3</li>
    <li><strong>Минералы:</strong> Магний, фосфор, цинк, марганец</li>
    <li><strong>Аминокислоты:</strong> Аргинин (для сердца и сосудов)</li>
  </ul>
  
  <p><strong>Эффекты:</strong></p>
  <ul>
    <li>Снижают аппетит (жирные, насыщают надолго)</li>
    <li>Улучшают кожу, волосы, ногти (витамин E)</li>
    <li>Поддерживают иммунитет (цинк)</li>
    <li>Энергия без кофеина!</li>
  </ul>
  
  <h3>Шоколад без сахара — тёмная сторона какао 🍫</h3>
  <p><strong>Что внутри:</strong> Какао-масса, какао-масло, подсластитель (стевия, эритритол, мальтитол). В нашем случае бонусом идет хипстерский набор из сублимированных ягод, красителей и чего только не.</p>
  <img src="${r.choko}" />
  <p><strong>История шоколада без сахара:</strong></p>
  <ul>
    <li><strong>Ацтеки:</strong> Пили какао <strong>горьким!</strong> С перцем чили, без сахара</li>
    <li><strong>XVI век, Европа:</strong> Сахар добавили испанцы (и шоколад стал десертом)</li>
    <li><strong>XXI век:</strong> Возвращение к корням — тёмный шоколад 70-99% какао, минимум сахара</li>
  </ul>
  
  <h3>Философия этого дня 🌲🍫</h3>
  <p>Кедровый кофе без кофеина и шоколад без сахара — сплошной обман ожиданий, но интересно же.</p>.

  <h3>Задание от нейронки 🎯</h3>
  <ol>
    <li>Завари кедровый кофе, отломи кусочек шоколада без сахара</li>
    <li><strong>Аффирмация дня:</strong> "Сегодня я пью кофе без кофеина и ем шоколад без сахара. Я — взрослый человек и принимаю странные решения" 🌲🍫</li>
  </ol>
      `},{day:20,date:"2026-01-08",tanya_gift:"Кофе в чайном сашете",zebra_gift:"Кофе Мексика",tanya_bonus:"Пастила",zebra_bonus:"Пастила",title:"День 19",tanya_message:`<p>Мне так понравился концепт Christian Coffee, что теперь я собираюсь начинать каждый текст с короткого внезапного напоминания, что Иисус с нами.</p>
    <img src="${r.blessed2}" />
    <h3>Сегодня у нас кофе, который не тонет (как наша вера!)</h3>
    <p>Он в <strong>сашетах</strong> — больших чайных пакетиках, которые склонны всплывать.</p>
  
  <p><strong>История:</strong></p>

  <h4>1908 год, Нью-Йорк — рождение пакетика 🗽</h4>
  <p><strong>Герой:</strong> Томас Салливан (Thomas Sullivan), американский торговец чаем.</p>
  
  <ul>
    <li>Салливан рассылал образцы чая клиентам. Обычно чай присылали в дорогих жестяных банках, но Салливан решил сэкономить → упаковал чай в <strong>маленькие шёлковые мешочки</strong></li>
    <li>Клиенты подумали: "О, это новый способ заваривания!" и опустили мешочек прямо в чайник!</li>
    <li>Салливан получил заказы: "Пришлите ещё этих удобных пакетиков!"</li>
  </ul>
  
  <img src="${r.teabag1}" />
  <h4>Эволюция пакетика 📜</h4>
  <p><strong>1920-е:</strong></p>
  <ul>
    <li>Шёлк → слишком дорого</li>
    <li>Перешли на <strong>марлю</strong> (дешевле, но всё ещё дорого)</li>
    <li>Потом — <strong>бумага</strong> (фильтровальная, специальная)</li>
  </ul>
  
  <p><strong>1930-е:</strong></p>
  <ul>
    <li>Придумали <strong>машины для автоматической упаковки</strong></li>
    <li>Пакетики стали дешёвыми → массовое производство!</li>
    <li>Форма: сначала мешочки, потом плоские квадратики</li>
  </ul>
  
  <p><strong>1950-е, Великобритания:</strong></p>
  <ul>
    <li>Британцы (<strong>самые большие чаеманы в мире!</strong>) усовершенствовали и запатентовали двухкамерный пакетик</li>
    <li>Tetley выпустила <strong>первый коммерческий чайный пакетик в UK</strong> (1953)</li>
    <li>Скептицизм: "Настоящий чай — только листовой!"</li>
    <li>Но удобство победило → к 1960-м пакетики захватили рынок</li>
    <li><strong>Япония, 1990-е:</strong> Придумали дрип-пакеты для офисов и сашеты заодно</li>
  </ul>

  <p><strong>Фанфакт 1. Чайный пакетик — экологическая проблема:</strong></p>
  <ul>
    <li>Многие содержат <strong>пластик</strong> (полипропилен) для прочности: не разлагаются полностью.</li>
    <li>Современные бренды переходят на <strong>биоразлагаемые</strong> материалы, но этот едва ли из таких. Теперь живи с этим.</li>
  </ul>
  <img src="${r.guilt}" />
  
  <p><strong>Фанфакт 2. Самый дорогой чайный пакетик в мире:</strong></p>
  <ul>
    <li>2005 год, компания PG Tips (UK). Пакетик украшен <strong>280 бриллиантами</strong>.</li>
    <li>Цена: <strong>$15,000</strong> (почти 2 миллиона рублей на нынешние деньги). Зачем? Благотворительность (продали на аукционе).</li>
  </ul>
  <img src="${r.teabag}" />

  <h3>Задание 🎯</h3>
  <ol>
    <li>Завари кофе в сашете. Наблюдай, как он всплывает. Придави его ложкой с достоинством. Ты - человек, он - пакетик, ты главнее.</li>
    <li><strong>Аффирмация дня:</strong> "Мой чертов кофе всплывает, но я держу его под контролем. Как и свою жизнь!"</li>
    <li>Выпей кофе. И так будет с каждым!..</li>
  </ol>
  <img src="${r.bless9}" />
    `,zebra_message:`<p>Мне так понравился концепт Christian Coffee, что теперь я собираюсь начинать каждый текст с короткого внезапного напоминания, что Иисус с нами.</p>
    <img src="${r.blessed2}" />
  
  <p>Повторяем мексиканский декаф, добавляем пастилу со вкусом алкоголя - или кофе, и в этом случае в ней может быть больше кофеина, чем в напитке!..</p>
  
  <p>Пока твой кофе заваривается, узнаем о Мексике еще что-нибудь увлекательное.</p>

  <h4>🤠 Бонус: Сомбреро — шляпа-зонтик</h4>

<p><strong>Sombrero</strong> = от испанского <em>"sombra"</em> (тень). Буквально: "делающий тень"!</p>
<img src="${r.sombrero1}" />
<p><strong>История:</strong></p>
<ul>
  <li><strong>XV век:</strong> у индейцев ничего подобного не было. Прародители сомбреро приплыли из Испании, а местные радикально увеличили поля.</li>
  <li><strong>Материал:</strong> Солома (для крестьян), фетр (для богатых)</li>
</ul>
<img src="${r.sombrero2}" />
<p><strong>Виды:</strong></p>
<ul>
  <li><strong>Sombrero charro:</strong> Богато украшенное (золотая вышивка), для мариачи и наездников</li>
  <li><strong>Sombrero campesino:</strong> Простое соломенное, для работы в поле</li>
</ul>
<img src="${r.sombrero3}" />

<p><strong>Символика:</strong> Сомбреро стало символом Мексики (иногда стереотипным). Но для мексиканцев это часть национального костюма и гордости!</p>
  
  <h3>🎺 МАРИАЧИ — музыка, которую слышно из космоса</h3>
  <p>Мариачи — это не просто музыка, это <strong>мексиканская душа в звуке</strong>!</p>
  <img src="${r.musik1}" />
  
  <p><strong>Состав оркестра:</strong> Трубы, скрипки, гитары, виуэла, гитаррон (огромная бас-гитара). От 3 до 12 человек.</p>
  
  <p><strong>Костюмы:</strong> Trajes de charro — расшитые серебром чёрные костюмы с широкими брюками, огромные сомбреро. Выглядят как ковбои на свадьбе!</p>
  
  <p><strong>Что играют:</strong> Романтические серенады, песни о любви, предательстве, родине. Громко, страстно, с душой!</p>
  <img src="${r.musik}" />
  <p><strong>Традиция:</strong> Нанять мариачи, чтобы они сыграли серенаду под окном любимой. Соседи не спят — но это романтично!</p>
  
  <p><strong>ЮНЕСКО:</strong> В 2011 году мариачи внесли в список нематериального культурного наследия человечества.</p>
  <iframe width="100%" src="https://www.youtube.com/embed/Jguqnlymeuk?si=HYV7tgjxFoG3o-Av" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
  
  <h3>🎨 Немного про ФРИДУ КАЛО и ее мексиканской идентичности</h3>
  <p><strong>Фрида Кало</strong> (1907-1954) — мексиканская художница, икона феминизма и страдания.</p>
  <img src="${r.frida}" />
  <p>Вот ее фото авторства ее любовника</p>
  <p>Не будем писать про нее общеизвестные банальности (разве что чуть-чуть).</p>
  <p>Чтобы восстановиться после полиомиелита, Фрида занималась боксом и футболом. В качестве основного жанра выбрала автопортрет.</p>
  <img src="${r.frida3}" />
  <p>Изменяла мужу с женщинами и с Троцким. Ходила в брюках, джинсах и национальных мексиканских платьях, раскрашивала свои медицинские гипсовые корсеты.</p>
  <p>Простудилась (и впоследствии умерла в 1954 году) на демонстрации. Продаваться задорого ее картины стали через пару десятилетий после ее смерти - тогда же мир ее переоткрыл.</p>
  <img src="${r.frida1}" />
  <p>Цитата от Frida Kahlo Corporation: "Наряду с розами, кофе был одной из самых любимых вещей Фриды. Фрида любила кофе и рассматривала его приготовление и питьё как неотъемлемую часть своего повседневного вдохновения." Пила мексиканскую арабику за работой, варила традиционный Café de Olla с корицей и нерафинированным тростниковым сахаром.</p>
  
  <h3>🏠 МЕКСИКАНСКАЯ АРХИТЕКТУРА — розовые дома и синие дворы</h3>
  <p>Мексиканская архитектура — это <strong>взрыв цвета</strong>!</p>
  <img src="${r.mex1}" />
  <p><strong>Колониальный стиль (XVI-XIX века):</strong></p>
  <ul>
    <li>Испанцы построили города с центральными площадями (zócalo)</li>
    <li>Церкви в стиле барокко — золото, лепнина, драма!</li>
    <li>Дома с внутренними дворами (patios)</li>
    <li>Яркие фасады: красный, жёлтый, синий, розовый. ОЧЕНЬ МНОГО ЦВЕТА!</li>
  </ul>
  <img src="${r.mex3}" />
  <p><strong>Знаменитые города:</strong></p>
  <ul>
    <li><strong>Гуанахуато</strong> — радужный город на холмах</li>
    <li><strong>Сан-Мигель-де-Альенде</strong> — колониальная жемчужина</li>
    <li><strong>Оахака</strong> — яркие дома + уличное искусство</li>
  </ul>
  <img src="${r.sanmiguel}" />
  <p><strong>Casa Azul (Синий дом):</strong> Дом-музей Фриды Кало в Мехико. Ярко-синие стены, тропический сад, её вещи, картины. Можно посетить!</p>
  
  <p><strong>Философия цвета:</strong> Мексиканцы верят, что яркие цвета отгоняют злых духов и привлекают радость. После серых европейских городов — это шок!</p>
  
  <h3>Задание 🎯</h3>
  <ol>
    <li><strong>Завари мексиканский декаф</strong></li>
    <li><strong>Включи "Cielito Lindo"</strong> (видео выше) — пусть мариачи играют, пока пьёшь кофе</li>
    <iframe width="100%" src="https://www.youtube.com/embed/SK9xzhKeaMM?si=B6LYbl3Kd_iI_fbZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <li><strong>Съешь пастилу</strong> — таки там кофе или алкоголь?</li>
    <li>Фрида рисовала автопортреты - а ты можешь сделать кофейное селфи)</li>
  </ol>
    `},{day:21,date:"2026-01-09",tanya_gift:"Турецкий кофе",zebra_gift:"Турецкий кофе",tanya_bonus:"Камни",zebra_bonus:"Камни",title:"День 20",tanya_message:`
    <p>Кто однажды пытался сманить нас в Стамбул, а потом съехал с темы из-за экономии (и тут же сделал шугариг)? Мы знаем эту девочку! Но, может, в этом году мы сможем, хотя Зёбра там будет страдать: в Стамбуле вечно кто-то орет, от чаек до муэдзинов.</p>  
    <img src="${r.bosphorus1}" />

    <p>Сегодня у всех <strong>турецкий кофе</strong> — один из древнейших способов приготовления (смолотый в тончайшую пыль) - и съедобные камни правильной расцветки (правда, белорусские). У тебя прямо декаф (турки, вероятно, делали его без одобрения).</p>

    <h3>Что такое турецкий кофе?</h3>
  
    <p><strong>Türk kahvesi</strong> — это не сорт кофе, а <strong>способ приготовления</strong>. <strong>Главные особенности:</strong></p>
    <ul>
      <li><strong>Помол:</strong> Самый мелкий в мире! Почти пыль (тоньше, чем для эспрессо)</li>
      <li><strong>Варка:</strong> В специальной посуде — турке (джезве, ибрик)</li>
      <li><strong>Без фильтрации:</strong> Кофе остаётся в чашке и пьется с гущей</li>
      <li><strong>Пенка:</strong> Важна! Если нет пенки — позор повару</li>
      <li><strong>Медленно:</strong> Варится на слабом огне, поднимается 2-3 раза</li>
      <li><strong>Пьют маленькими глотками</strong> из маленьких чашечек</li>
    </ul>
    <img src="${r.turkish2}" />
    <h3>История турецкого кофе ☕📜</h3>
  
    <p><strong>1555 год — кофе приходит в Стамбул:</strong></p>
    <ul>
      <li>Два сирийца (Хакем и Шемс) открыли первую кофейню в Стамбуле</li>
      <li>Кофе пришёл из Йемена через торговые пути</li>
      <li>Османская империя полюбила кофе <strong>безумно!</strong></li>
    </ul>
  
    <p><strong>Кофейни (kahvehane) стали центрами жизни:</strong></p>
    <ul>
      <li>Мужчины собирались, пили кофе, курили кальян, играли в нарды</li>
      <li>Обсуждали политику, поэзию, философию</li>
      <li>Так популярны, что <strong>конкурировали с мечетями!</strong></li>
    </ul>
    <img src="${r.turkish3}" />
    <p><strong>1633 год — султан Мурад IV запретил кофе!</strong></p>
    <ul>
    <li>Считал, что кофейни = место заговоров (вот ведь чертов параноик)</li>
    <li>Кофейни закрыли, нарушителей казнили (!) 💀</li>
    <li>Но запрет не сработал — люди пили тайно</li>
    <li>После смерти султана кофе вернулся</li>
  </ul>
  
  <h3>Как правильно варить турецкий кофе? 🔥</h3>
  
  <p><strong>Традиционный способ (в турке):</strong></p>
  <ol>
    <li><strong>Вода + кофе + сахар</strong> (если нужен) — всё сразу в турку!</li>
    <li><strong>Пропорции:</strong> 1 чайная ложка кофе на 50-70 мл воды</li>
    <li><strong>На слабый огонь</strong> (или на песок!)</li>
    <li><strong>Медленно нагревается</strong> — не мешать!</li>
    <li><strong>Пенка поднимается</strong> → снять с огня → дать осесть → снова на огонь</li>
    <li><strong>Повторить 2-3 раза</strong></li>
    <li><strong>Разлить по чашкам</strong> — сначала пенку (равномерно!), потом кофе</li>
  </ol>
  <img src="${r.turkish1}" />
  
  <p><strong>Упрощённый способ (для стиков):</strong></p>
  <ol>
    <li>Высыпать кофе из стика в чашку, залить кипятком (70-100 мл)</li>
    <li>Размешать, подождать 2-3 минуты (гуща осядет)</li>
    <li>Пить аккуратно, оставляя гущу на дне. Заедать камнями (сладкий бонус совершенно в традиции), думать о море.</li>
  </ol>
  
  <p><strong>Что попробовать в Стамбуле:</strong></p>
  <ul>
    <li><strong>Türk kahvesi</strong> — классический турецкий кофе</li>
    <li><strong>Dibek kahvesi</strong> — кофе, молотый в ступке (старинный способ)</li>
    <li><strong>Menengiç kahvesi</strong> — кофе из фисташковых орехов (без кофеина!)</li>
    <li><strong>Çay</strong> — турецкий чай (да, турки пьют чая больше, чем кофе! ☕→🫖)</li>
  </ul>
  <img src="${r.bosphorus}" />
  <p><strong>Пословицы про кофе:</strong></p>
  <ul>
    <li><em>"Bir fincan kahvenin kırk yıl hatırı vardır"</em> (Одна чашка кофе помнится сорок лет) — о том, что гостеприимство не забывается</li>
    <li><em>"Kahve içmeyen adamın ne yüzü kara, ne kalbi"</em> (Кто не пьёт кофе, у того ни лица нет, ни сердца) 😄</li>
  </ul>
  <img src="${r.turkish4}" />
  <h3>Задание 🎯</h3>
  <ol>
    <li><strong>Заварить турецкий кофе</strong>, закусить камнем.</li>
    <li>Нейронка предлагает глупое: вообрази себя султаншей, сплети какую-нибудь интригу.</li>
    <li>Напомни себе, что кофе переживет любого злобного султана.</li>
    <li>Подумай про Стамбул в 2026.</li>
  </ol>
`,zebra_message:`
    <p>Надо бы как-нибудь повтрить Стамбул, но уже в полном составе.</p>
  <img src="${r.bosphorus1}" />
  <p>Сегодня у всех <strong>турецкий кофе</strong> — один из древнейших способов приготовления (смолотый в тончайшую пыль) - и съедобные камни правильной расцветки (правда, белорусские). У тебя прямо декаф (турки, вероятно, делали его без одобрения))</p>
  
  <h3>Что такое турецкий кофе?</h3>
  
  <p><strong>Türk kahvesi</strong> — это не сорт кофе, а <strong>способ приготовления</strong>. <strong>Главные особенности:</strong></p>
  <ul>
    <li><strong>Помол:</strong> Самый мелкий в мире! Почти пыль (тоньше, чем для эспрессо)</li>
    <li><strong>Варка:</strong> В специальной посуде — турке (джезве, ибрик)</li>
    <li><strong>Без фильтрации:</strong> Кофе остаётся в чашке и пьется с гущей</li>
    <li><strong>Пенка:</strong> Важна! Если нет пенки — позор повару</li>
    <li><strong>Медленно:</strong> Варится на слабом огне, поднимается 2-3 раза</li>
    <li><strong>Пьют маленькими глотками</strong> из маленьких чашечек</li>
  </ul>
  
  <h3>История турецкого кофе ☕📜</h3>
  <img src="${r.turkish3}" />
  <p><strong>1555 год — кофе приходит в Стамбул:</strong></p>
  <ul>
    <li>Два сирийца (Хакем и Шемс) открыли первую кофейню в Стамбуле</li>
    <li>Кофе пришёл из Йемена через торговые пути</li>
    <li>Османская империя полюбила кофе <strong>безумно!</strong></li>
  </ul>
  
  <p><strong>Кофейни (kahvehane) стали центрами жизни:</strong></p>
  <ul>
    <li>Мужчины собирались, пили кофе, курили кальян, играли в нарды</li>
    <li>Обсуждали политику, поэзию, философию</li>
    <li>Так популярны, что <strong>конкурировали с мечетями!</strong></li>
  </ul>
  <img src="${r.turkish3}" />
  <p><strong>1633 год — султан Мурад IV запретил кофе!</strong></p>
  <ul>
    <li>Считал, что кофейни = место заговоров (вот ведь чертов параноик)</li>
    <li>Кофейни закрыли, нарушителей казнили (!) 💀</li>
    <li>Но запрет не сработал — люди пили тайно</li>
    <li>После смерти султана кофе вернулся</li>
  </ul>
  
  <h3>Как правильно варить турецкий кофе? 🔥</h3>
  <img src="${r.turkish1}" />
  <p><strong>Традиционный способ (в турке):</strong></p>
  <ol>
    <li><strong>Вода + кофе + сахар</strong> (если нужен) — всё сразу в турку!</li>
    <li><strong>Пропорции:</strong> 1 чайная ложка кофе на 50-70 мл воды</li>
    <li><strong>На слабый огонь</strong> (или на песок!)</li>
    <li><strong>Медленно нагревается</strong> — не мешать!</li>
    <li><strong>Пенка поднимается</strong> → снять с огня → дать осесть → снова на огонь</li>
    <li><strong>Повторить 2-3 раза</strong></li>
    <li><strong>Разлить по чашкам</strong> — сначала пенку (равномерно!), потом кофе</li>
  </ol>
  
  <p><strong>Упрощённый способ (для стиков):</strong></p>
  <ol>
    <li>Высыпать кофе из стика в чашку, залить кипятком (70-100 мл)</li>
    <li>Размешать, подождать 2-3 минуты (гуща осядет)</li>
    <li>Пить аккуратно, оставляя гущу на дне. Заедать камнями (сладкий бонус совершенно в традиции), думать о море.</li>
  </ol>
  <img src="${r.bosphorus}" />
  <p><strong>Что попробовать в Стамбуле:</strong></p>
  <ul>
    <li><strong>Türk kahvesi</strong> — классический турецкий кофе</li>
    <li><strong>Dibek kahvesi</strong> — кофе, молотый в ступке (старинный способ)</li>
    <li><strong>Menengiç kahvesi</strong> — кофе из фисташковых орехов (без кофеина!)</li>
    <li><strong>Çay</strong> — турецкий чай (да, турки пьют чая больше, чем кофе! ☕→🫖)</li>
  </ul>

  <p><strong>Пословицы про кофе:</strong></p>
  <ul>
    <li><em>"Bir fincan kahvenin kırk yıl hatırı vardır"</em> (Одна чашка кофе помнится сорок лет) — о том, что гостеприимство не забывается</li>
    <li><em>"Kahve içmeyen adamın ne yüzü kara, ne kalbi"</em> (Кто не пьёт кофе, у того ни лица нет, ни сердца) 😄</li>
  </ul>
  <img src="${r.turkish4}" />
  <h3>Задание 🎯</h3>
  <ol>
    <li><strong>Заварить турецкий кофе</strong>, закусить камнем.</li>
    <li>Нейронка предлагает глупое: вообрази себя султаншей, сплети какую-нибудь интригу.</li>
    <li>Напомни себе, что кофе переживет любого злобного султана.</li>
    <li>Подумай про Стамбул в 2026.</li>
  </ol>`},{day:22,date:"2026-01-10",tanya_gift:"Who needs sleep",zebra_gift:"???",tanya_bonus:"Пастила?",zebra_bonus:"Пастила?",title:"День 21",tanya_message:`
    <p><strong>WHO NEEDS SLEEP?</strong> ☕️💚</p>
    <img src="${r.blessed3}" />
  
  <p><strong>Zero Roasters, Бразилия</strong> | 100% арабика средней обжарки</p>
  
  <p>Я думала, "WHO NEEDS SLEEP" и слабая обжарка - это про что-то помягче и почти декаф, но радикально не угадала. Это кофе, в котором больше всего кофеина ⚡, а я в корне неверно поняла интенцию. Дальше текст от нейронки:</p>

  <h3>Что внутри?</h3>
  <p><strong>Интенсивный</strong> вкус — ореховые, шоколадные, карамельные/фруктовые ноты. Это кофе, который не спрашивает разрешения войти в твой день — он врывается с ноги.</p>
  
  <h3>Когда пить WHO NEEDS SLEEP?</h3>
  <ul>
    <li><strong>Дедлайн через 3 часа,</strong> а ты ещё не начинала</li>
    <li><strong>Ночная поездка</strong> из одного города в другой</li>
    <li><strong>Внутренний голос говорит "надо бы поспать",</strong> а внешний — "давай ещё один сезон"</li>
    <li><strong>Утро после ночи,</strong> когда нужно быть человеком, но кофеин предлагает быть богом продуктивности</li>
  </ul>
  <img src="${r.bless5}" />

  <p>Этот кофе — для тех, кто меняет мир, пока другие спят (иногда не по своему выбору). Для тех, у кого список дел длиннее, чем световой день. Эх. А предполагалось, что это кофе для тех, кто немного поживет, а потом поспит как следует.</p>
  
  <p><strong>⚠️ Предупреждение:</strong> Побочные эффекты включают внезапную способность закончить три проекта до обеда, желание организовать революцию, и лёгкое презрение к тем, кто всё ещё спит в 6 утра.</p>
  <h3>Задание 🎯</h3>
  <ol>
    <li>Выпить кофе.</li>
    <li>Быть богиней <s>христианской кофейной</s> продуктивной продуктивности под рождественский госпел.</li>
    <iframe width="100%" src="https://www.youtube.com/embed/0ZpqixUp4ek?si=uSe9lN0jU5KqtH9N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </ol>
  
`,zebra_message:`
    <img src="${r.blessed3}" />
    <p>Совершенно не понимаю, что у тебя сегодня.</p>
    <p>Если на пакетике написано WHO NEEDS SLEEP, то это САМЫЙ КОФЕИНОВЫЙ КОФЕИН, который только можно найти. Берегись! И дай мне знать, я дополню текст.</p>
    <p>А пока у меня есть госпел и вайбы Christian Coffee.</p>
    <img src="${r.bless5}" />
    
    <p><strong>⚠️ Предупреждение:</strong> Побочные эффекты включают внезапную способность закончить три проекта до обеда, желание организовать революцию и лёгкое презрение к тем, кто всё ещё спит в 6 утра/уже спит в два часа ночи. Но есть шанс, что я подсунула тебе какой-нибудь дублирующий декаф.</p>
    <h3>Задание 🎯</h3>
    <ol>
      <li>Выпить кофе.</li>
      <li>Быть богиней <s>христианской кофейной</s> продуктивной продуктивности под рождественский госпел.</li>
          <iframe width="100%" src="https://www.youtube.com/embed/0ZpqixUp4ek?si=uSe9lN0jU5KqtH9N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </ol>
    `},{day:23,date:"2026-01-11",tanya_gift:"Black Moon",zebra_gift:"Декаф",tanya_bonus:"Зомби-трость",zebra_bonus:"Зомби-трость",title:"День 22",tanya_message:`
      <img src="${r.bless4}" />
      <p>Сегодняшнее христианское послание предполагалось немного зловещим. Как и сегодняшний кофе!</p>

      <h3>Black Moon Coffee — кофе с той стороны 🌑☕💀</h3>
      <p>Сегодня у вас <strong>чёрный кофе под чёрной луной</strong> — и зомби-тросточка в придачу (она так и называлась, натурально)🧟‍♂️</p>
  
      <p><strong>Black Moon (Чёрная Луна)</strong> — одно из самых редких (и зловещих) лунных явлений!</p>
    <img src="${r.moon1}" />
    <p><strong>Что это:</strong></p>
    <ul>
      <li><strong>Второе новолуние в одном месяце</strong> (происходит раз в 29 месяцев)</li>
      <li>Или: третье новолуние в сезоне из четырёх (раз в 33 месяца)</li>
      <li>Луна <strong>полностью невидима</strong> — самая тёмная ночь</li>
      <li>Небо без лунного света — звёзды ярче, тьма глубже</li>
      <li>Ближайшая случится 31 августа 2027 года</li>
      <li>Некая ее противоположность - Голубая Луна (она существует!), и это третье по счету полнолуние в астрономическом сезоне с четырьмя полнолуниями (я забыла это в тот же миг, как прочитала).</li>
    </ul>
    <img src="${r.mooncoffee}" />
  
    <p><strong>Духовное значение:</strong></p>
    <ul>
      <li><strong>Пустота, полная возможностей</strong> — тьма перед созданием. Встреча с тёмной стороной себя, изгнание того, что больше не нужно</li>
      <li><strong>Магия и ритуалы:</strong> мощное время для колдовства! Ведьмы проводят <strong>Deipnon</strong> — ритуал очищения на перекрёстке</li>
      <li>Чёрная Луна — время <strong>богини Гекаты</strong> (богиня перекрёстков, магии, ночи)</li>
    </ul>
  
    <iframe width="100%" src="https://www.youtube.com/embed/k7Il8L0O1AQ?si=Ttg5Yx8LssD2JyZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p><em>Вместо госпела у нас сегодня вуду от Дисней. Почувствуйте силу вуду! Может, она вернет нас в строй в первый рабочий день </em></p>
    <img src="${r.scarycoffee}" />
  
  <h3>Задание 🎯</h3>
  <ol>
    <li><strong>Завари Black Moon Coffee</strong>, размешай зомби-тросточкой</strong> — пусть она растворится в кофе</li>
    <li><strong>Включи "Friends on the Other Side"</strong>.</li>
    <li>У тебя уже есть отличные блестки, чтобы бонусом превратиться в вампира из Сумерек.</li>
    <li>Пережить первый рабочий день.</li>
  </ol>
  
  <h3>Цитата дня 🎩</h3>
  <p><em>"You got what you wanted, but you lost what you had."</em></p>
  <p>— Dr. Facilier, "Friends on the Other Side"</p>
  
    `,zebra_message:`
      <img src="${r.bless4}" />
      <p>Сегодняшнее христианское послание предполагалось немного зловещим. Как и сегодняшний кофе!</p>
      <p>У Таньки там арабика "Черная луна", у тебя, кажется, просто черный декаф и зомби-тросточка в придачу (она так и называлась, натурально)🧟‍♂️</p>
      <img src="${r.moon1}" />
      
    <iframe width="100%" src="https://www.youtube.com/embed/k7Il8L0O1AQ?si=Ttg5Yx8LssD2JyZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p><em>Вместо госпела у нас сегодня вуду от Дисней. Почувствуйте силу вуду! А как иначе вернуться в строй в первый рабочий день?..</em></p>
    <img src="${r.scarycoffee}" />
  
  <h3>Задание 🎯</h3>
  <ol>
    <li><strong>Завари кофе</strong>, размешай зомби-тросточкой</strong> — пусть она растворится.</li>
    <li><strong>Включи "Friends on the Other Side"</strong>.</li>
    <li>У тебя уже есть отличные блестки, чтобы бонусом превратиться в вампира из Сумерек.</li>
    <li>Пережить первый рабочий день.</li>
  </ol>
  <img src="${r.mooncoffee}" />
  
  <h3>Цитата дня 🎩</h3>
  <p><em>"You got what you wanted, but you lost what you had."</em></p>
  <p>— Dr. Facilier, "Friends on the Other Side"</p>
    `},{day:24,date:"2026-01-12",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:`<p>Напишите, что у вас сегодня! У меня день совершенного провала в записях.</p>
    <img src="${r.bless6}" />
    <p>Но вот самый странный госпел, который мне подвернулся.</p>
      <iframe width="100%" src="https://www.youtube.com/embed/qYhzhASuWrI?si=MPQGdSplONZ0w99g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,zebra_message:`<p>Напишите, что у вас сегодня! У меня день совершенного провала в записях.</p>
    <img src="${r.bless6}" />
    <p>Но вот самый странный госпел, который мне подвернулся.</p>
    
      <iframe width="100%" src="https://www.youtube.com/embed/qYhzhASuWrI?si=MPQGdSplONZ0w99g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`},{day:25,date:"2026-01-13",tanya_gift:"Желтая субмарина",zebra_gift:"Неведомый чай",tanya_bonus:"кофейная пастила",zebra_bonus:"Кофейная пастила",title:"День 24",tanya_message:` 
    <img src="${r.bless10}" />
  
  <h3>Yellow Submarine + кофейная пастила — Beatles и кофеиновый заговор 🎶☕🍬</h3>
  
  <p><em>"All you need is love... and caffeine in every possible form!"</em> ☕</p>
  
  <p><strong>Единственное упоминание кофе в песнях Beatles:</strong></p>
  <ul>
    <li>"Savoy Truffle" (George Harrison, White Album 1968). Вся песня "Savoy Truffle" — список конфет!</li>
    <li>Строка: "A coffee dessert, yes you know it's good news". Это не про кофе, а про шоколадную конфету с кофейным вкусом из коробки Mackintosh's Good News!</li>
    <li>Песня написана про друга Джорджа — **Эрика Клэптона**, который обожал шоколад и от этого портил зубы</li>
    <img src="${r.sweets}" />
    <li>И больше ни единого упоминания кофе, потому что чертовы британцы ☕🚫</li>
    <li>А еще кофе в 1960-е был редкостью. В Британии кофе = растворимый Nescafé (фу!)</li>
    <li>Эспрессо-культура пришла только в 1980-1990-х</li>
    <li>Битлы, скорее всего, не пили хороший кофе вообще. По крайней мере, до Америки, да и там свидетелей не осталось</li>
  </ul>
  <iframe width="100%" src="https://www.youtube.com/embed/CD5LEdgpKi8?si=QnM97xpcsTziDSss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <h3>Так почему Yellow Submarine называется кофе? 🤔</h3>
  <img src="${r.beatles1}" />
  <p>И внезапные Битлы в гладиолусах</p>
  <p><strong>Yellow Submarine = метафора убежища:</strong></p>
  <ul>
    <li>Место, где все друзья рядом ("And our friends are all aboard")</li>
    <li>Где жизнь легка ("Life of ease")</li>
    <li>Где всё ярко и просто ("Sky of blue and sea of green")</li>
  </ul>
  <img src="${r.beatles}" />

  <h3>Задание 🎯</h3>
  <ol>
    <li>Завари Yellow Submarine, съешь кофейную пастилу</li>
    <li>Beatles-философия: All You Need Is... что? ☕💕</li>
  </ol>
  `,zebra_message:`
    <img src="${r.bless10}" />
      <p><strong>Сколько кофеина в кофейной пастиле?</strong></p>
  <ul>
    <li>Зависит от производителя, но примерно: **5-15 мг кофеина на штуку**</li>
    <li>Это не много по сравнению с чашкой кофе (95-200 мг), НО...</li>
    <li>10 штук = 50-150 мг кофеина = почти чашка кофе! ☕😱 У нас ,правда, их нет)</li>
    <li>Для сравнения: Чашка кофе (240 мл): 95-200 мг кофеина</li>
    <li>Эспрессо (30 мл): 60-80 мг</li>
    <li>Чашка чая (240 мл): 30-50 мг</li>
    <li>Кусочек тёмного шоколада (30г): 20-30 мг</li>
    <li>Кофейная пастила (1 шт): 5-15 мг. Это почти так же жутко, как считать каллории!</li>
  </ul>

  <p>Вставка от нейросети:</p>
  <p><strong>Математика кофеиновой опасности для Зёбры:</strong></p>
  <ul>
    <li>Чашка чая: 40 мг кофеина</li>
    <li>5 кофейных пастилок: 50 мг кофеина</li>
    <li>Итого: 90 мг = почти как чашка кофе! ☕🍬</li>
  </ul>
  
  <p><em>"Я делаю паузу от кофе" — говорит Зёбра, жуя кофейную пастилу. Кофеин смеётся злодейски! 😈☕</em></p>

  <p>(конец цитаты)</p>

  <p>А так у тебя чай. Надеюсь, в этот раз можжевеловый!</p>
  <p>А у Таньки кофеиновый дрип Yellow submarine и текст про битлов. Будем считать, что их бессмысленная песня про конфеты перебралась сюда оттуда вместо госпела.</p>

  <iframe width="100%" src="https://www.youtube.com/embed/CD5LEdgpKi8?si=QnM97xpcsTziDSss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  <h3>Задание 🎯</h3>
  <ol>
    <li>Завари чай, cъешь кофейную пастилу.</li>
    <li>Посчитай кофеин: Чай (40 мг) + 10 = 50 мг = почти кофе!</li>
    <li>Подумай: "Пауза" — это иллюзия, кофеин везде!</li>
    <li>"Я делаю паузу от кофе, но кофеин нашёл меня через пастилу. Touché, caffeine!" 🫖🍬⚡</li>
    <li>Beatles-философия: All You Need Is... что? ☕💕</li>
  </ol>

  <img src="${r.beatles1}" />
  <p>И внезапные Битлы в гладиолусах.</p>
  `},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:`
      <p>Внезапный день английского. Сорян, на русском такого эээээ еще не завезли.</p>
      <img src="${r.blessed4}" />
      <h2>5 Cozy Coffee Date Ideas with Jesus ☕✝️</h2>

      <h3>1. Morning Devotional Coffee Date 🌅</h3>
      <p>Brew coffee, read a Bible passage, pray, journal. Start your day talking to Jesus like a friend.</p>

      <h3>2. Coffee Shop Contemplation ☕🪟</h3>
      <p>Take your Bible to a café. Sit by the window, people-watch with Jesus, pray for strangers you see.</p>

      <h3>3. Scripture Study + Sip 📖☕</h3>
      <p>Deep dive into a passage. Read slowly, sip slowly. Ask Jesus: "What does this mean for my life?"</p>

      <h3>4. Gratitude Coffee Walk 🚶‍♀️☕</h3>
      <p>Walk + pray + coffee. Notice creation, list things you're grateful for out loud, talk to Jesus as you go.</p>

      <h3>5. Evening Reflection Coffee Date 🌙☕</h3>
      <p>End your day with decaf. Review your day with Jesus: "Where were You today? What did I miss?"</p>

      <hr>

      <p><strong>Bonus Tips:</strong> Turn off phone • Be present • Talk out loud • Listen in silence • Journal</p>

      <p><strong>Remember:</strong> Jesus doesn't care about the coffee. He just wants time with you. ☕🙏✨</p>

      <p>Я искала госпел в старом стиле, чтобы жизнерадостные афроамериканки пели в церкви, лучась, а не вот этот весь нейрослоп - и обнаружила себя на афро-американских стандапах про колониализм. Теперь они здесь.</p>
      <iframe width="100%" src="https://www.youtube.com/embed/0x9Pq4qzaXc?si=EJj-Prk28a_ozum8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="100%" src="https://www.youtube.com/embed/QhMO5SSmiaA?si=z4KMMLb87nGBJOkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      <iframe width="100%" src="https://www.youtube.com/embed/EEjZ0Gh_y8I?si=zKBCIgl1vA2KzC7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>Все равно я не помню, какой у вас сегодня кофе. Надеюсь, что это сырновый/лавандовый раф - дайте знать, если это так, я накидаю сюда лавандовых полей. Хорошего дня!</p>
    `,zebra_message:`
      <p>Внезапный день английского. Сорян, на русском такого эээээ еще не завезли.</p>
      <img src="${r.blessed4}" />
      <h2>5 Cozy Coffee Date Ideas with Jesus ☕✝️</h2>

      <h3>1. Morning Devotional Coffee Date 🌅</h3>
      <p>Brew coffee, read a Bible passage, pray, journal. Start your day talking to Jesus like a friend.</p>

      <h3>2. Coffee Shop Contemplation ☕🪟</h3>
      <p>Take your Bible to a café. Sit by the window, people-watch with Jesus, pray for strangers you see.</p>

      <h3>3. Scripture Study + Sip 📖☕</h3>
      <p>Deep dive into a passage. Read slowly, sip slowly. Ask Jesus: "What does this mean for my life?"</p>

      <h3>4. Gratitude Coffee Walk 🚶‍♀️☕</h3>
      <p>Walk + pray + coffee. Notice creation, list things you're grateful for out loud, talk to Jesus as you go.</p>

      <h3>5. Evening Reflection Coffee Date 🌙☕</h3>
      <p>End your day with decaf. Review your day with Jesus: "Where were You today? What did I miss?"</p>

      <hr>

      <p><strong>Bonus Tips:</strong> Turn off phone • Be present • Talk out loud • Listen in silence • Journal</p>

      <p><strong>Remember:</strong> Jesus doesn't care about the coffee. He just wants time with you. ☕🙏✨</p>

      <p>Я искала госпел в старом стиле, чтобы жизнерадостные афроамериканки пели в церкви, лучась, а не вот этот весь нейрослоп - и обнаружила себя на афро-американских стандапах про колониализм. Теперь они здесь.</p>
      <iframe width="100%" src="https://www.youtube.com/embed/0x9Pq4qzaXc?si=EJj-Prk28a_ozum8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <iframe width="100%" src="https://www.youtube.com/embed/QhMO5SSmiaA?si=z4KMMLb87nGBJOkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      
      <iframe width="100%" src="https://www.youtube.com/embed/EEjZ0Gh_y8I?si=zKBCIgl1vA2KzC7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>Все равно я не помню, какой у вас сегодня кофе. Надеюсь, что это сырновый/лавандовый раф - дайте знать, если это так, я накидаю сюда лавандовых полей. Хорошего дня!</p>
    `},{day:27,date:"2026-01-15",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:`
      <p>Кто-то молчит как партизан, так что я не знаю, какой у тебя сегодня кофе. Так что продолжим погружаться в особенности западной christian culture с пинтереста.</p>
      <img src="${r.secrets}" />
  
  <h3>Prayer Board — твоя визуальная карта молитв 📌🙏✨</h3>
  <img src="${r.pb1}" />
  <p><em>"Pray continually." — 1 Thessalonians 5:17</em></p>
  
  <h3>Что такое Prayer Wall/Prayer Board? 🖼️</h3>
  
  <p><strong>Prayer Wall (или Prayer Board)</strong> — это визуальная доска с молитвенными просьбами, фотографиями, стихами из Библии и напоминаниями о том, за что ты молишься.</p>

  <p><strong>Представь:</strong></p>
  <ul>
    <li>Пробковая доска на стене</li>
    <li>Sticky notes с именами людей, за которых молишься, с тематической цветовой дифференциацией!</li>
    <li>Фотографии близких</li>
    <li>Библейские цитаты на карточках</li>
    <li>Answered prayers (ответы на молитвы!) в отдельной секции</li>
  </ul>
  
  <p><strong>Это как vision board, но для молитв!</strong> Только вместо "хочу машину" — "молюсь о мудрости в финансах". Вместо "хочу похудеть" — "молюсь о здоровье и дисциплине". 🙏💛</p>
  <img src="${r.pb2}" />
  <h3>Зачем нужна Prayer Wall? 🤔</h3>
  
  <p><strong>Визуальное напоминание и организация молитв!</strong></p>
  <ul>
    <li>Легко забыть, за кого молился вчера</li>
    <li>Prayer Wall = постоянное напоминание перед глазами</li>
    <li>Проходишь мимо — видишь — вспоминаешь — молишься!</li>
    <li>Семья, друзья, работа, здоровье — всё по секциям</li>
    <li>Не нужно вспоминать "а за кого я хотела помолиться?"</li>
    <li>Всё на виду!</li>
  </ul>
  <img src="${r.pb3}" />

  <p><strong>Пошаговая инструкция:</strong></p>
  <ol>
    <li><strong>Выбери место:</strong> Стена в спальне, кухне, офисе — где часто видишь</li>
    <li><strong>Подготовь доску:</strong> Повесь cork board или натяни верёвку</li>
    <li><strong>Раздели на секции (ыыыыы, это же прямо стикеры к таскам):</strong>
      <ul>
        <li>👨‍👩‍👧 Семья</li>
        <li>👫 Друзья</li>
        <li>💼 Работа/учёба</li>
        <li>🌍 Мир/страны</li>
        <li>🙏 Личные нужды</li>
        <li>✅ Answered Prayers</li>
      </ul>
    </li>
    <li><strong>Добавь контент:</strong>
      <ul>
        <li>Напиши prayer requests на карточках</li>
        <li>Приклей фотографии людей</li>
        <li>Добавь любимые Bible verses</li>
        <li>Quotes, которые вдохновляют</li>
      </ul>
    </li>
    <li><strong>Укрась!</strong> Fairy lights, цветные стикеры, рамки — сделай красиво! 🌸✨</li>
    <li><strong>Обновляй регулярно:</strong> Добавляй новые просьбы, отмечай ответы</li>
  </ol>

  <p><strong>Bible Verses (стихи из Библии):</strong></p>
  <ul>
    <li>"Cast all your anxiety on him because he cares for you." — 1 Peter 5:7 (а я думала, что anxiety - это про панические атаки))</li>
    <li>"The Lord is near to all who call on him." — Psalm 145:18</li>
    <li>"Do not be anxious about anything, but in everything by prayer..." — Philippians 4:6</li>
  </ul>

  <img src="${r.pb4}" />
  <p><strong>Photos (фото):</strong></p>
  <ul>
    <li>Семья, друзья</li>
    <li>Миссионеры, за которых молишься (окак)</li>
    <li>Места, которые на сердце (города, страны)</li>
  </ul>
  
  <h3>Prayer Wall Ideas (идеи с Pinterest!) 🌸</h3>
  
  <p><strong>1. Fairy Lights + String + Polaroids</strong></p>
  <ul>
    <li>Натяни верёвку на стене</li>
    <li>Повесь гирлянду (fairy lights)</li>
    <li>Прищепками прикрепи фотографии и карточки с молитвами</li>
    <li>Очень уютно и красиво! ✨</li>
  </ul>
  
  <p><strong>2. Cork Board + Sticky Notes</strong></p>
  <ul>
    <li>Разноцветные sticky notes по категориям</li>
    <li>Розовые = семья, жёлтые = друзья, зелёные = работа</li>
    <li>Просто и ярко!</li>
  </ul>
  
  <p><strong>3. Half & Half Board</strong></p>
  <ul>
    <li>Левая половина: Prayer Requests</li>
    <li>Правая половина: Answered Prayers</li>
    <li>Видно силу молитвы!</li>
  </ul>
  
  <p><strong>4. World Map + Pins</strong></p>
  <ul>
    <li>Карта мира на стене</li>
    <li>Булавки в странах, за которые молишься</li>
    <li>Отлично для миссионерских молитв!</li>
  </ul>
  
  <p><strong>5. Chalkboard Wall</strong></p>
  <ul>
    <li>Покрась часть стены меловой краской</li>
    <li>Пиши молитвы мелом</li>
    <li>Легко стирать и обновлять!</li>
  </ul>

  <img src="${r.blessed11}" />
  
  <h3>Prayer Wall в церкви ⛪</h3>
  
  <p>Многие церкви создают общие Prayer Walls:</p>
  <ul>
    <li>Прихожане пишут prayer requests на sticky notes</li>
    <li>Приклеивают на общую доску</li>
    <li>Другие молятся за эти просьбы</li>
    <li>Когда Бог отвечает — переносят в секцию "Answered!"</li>
  </ul>
  
  <p><strong>Это создаёт:</strong></p>
  <ul>
    <li>Community (общность) в молитве</li>
    <li>Encouragement (поддержка) друг друга</li>
    <li>Visible proof (видимое доказательство) силы молитвы</li>
  </ul>

  <p><strong>Это превращает хаотичную молитву в intentional (целенаправленную)!</strong></p>

  <p><strong>Psalms (Псалмы) — это записанные молитвы!</strong>  
  Давид записывал свои молитвы, жалобы, благодарения. Теперь мы их читаем и молимся вместе с ним!</p>
  
  <p><strong>Prayer Wall = современная версия личного молитвенника!</strong> 📌✝️</p>

  <p><strong>Q: Можно ли делать это в телефоне?</strong>  
  A: Да! Есть приложения для prayer lists. НО физическая доска = больше шансов увидеть и вспомнить.</p>
  <img src="${r.blessed12}" />
  <h3>Задание 🎯</h3>
  
  <ol>
    <li>Завари и выпей свой неведомый кофе с неведомым бонусом ☕</li>
    <li>Вообрази свою гипотетическую молитвенную доску. Какие там были бы подразделы, какие молитвы в "реализованных"?</li>
  </ol>
      `,zebra_message:`<p>Продолжаем погружаться в мир christian culture с пинтереста с его неотразимым вайбом</p>
    
    <h3>Prayer Board — твоя визуальная карта молитв 📌🙏✨</h3>
  <img src="${r.pb1}" />
  <p><em>"Pray continually." — 1 Thessalonians 5:17</em></p>
  
  <h3>Что такое Prayer Wall/Prayer Board? 🖼️</h3>
  
  <p><strong>Prayer Wall (или Prayer Board)</strong> — это визуальная доска с молитвенными просьбами, фотографиями, стихами из Библии и напоминаниями о том, за что ты молишься.</p>

  <p><strong>Представь:</strong></p>
  <ul>
    <li>Пробковая доска на стене</li>
    <li>Sticky notes с именами людей, за которых молишься, с тематической цветовой дифференциацией!</li>
    <li>Фотографии близких</li>
    <li>Библейские цитаты на карточках</li>
    <li>Answered prayers (ответы на молитвы!) в отдельной секции</li>
  </ul>
  
  <p><strong>Это как vision board, но для молитв!</strong> Только вместо "хочу машину" — "молюсь о мудрости в финансах". Вместо "хочу похудеть" — "молюсь о здоровье и дисциплине". 🙏💛</p>
  <img src="${r.pb2}" />
  <h3>Зачем нужна Prayer Wall? 🤔</h3>
  
  <p><strong>Визуальное напоминание и организация молитв!</strong></p>
  <ul>
    <li>Легко забыть, за кого молился вчера</li>
    <li>Prayer Wall = постоянное напоминание перед глазами</li>
    <li>Проходишь мимо — видишь — вспоминаешь — молишься!</li>
    <li>Семья, друзья, работа, здоровье — всё по секциям</li>
    <li>Не нужно вспоминать "а за кого я хотела помолиться?"</li>
    <li>Всё на виду!</li>
  </ul>
  <img src="${r.pb3}" />

  <p><strong>Пошаговая инструкция:</strong></p>
  <ol>
    <li><strong>Выбери место:</strong> Стена в спальне, кухне, офисе — где часто видишь</li>
    <li><strong>Подготовь доску:</strong> Повесь cork board или натяни верёвку</li>
    <li><strong>Раздели на секции (ыыыыы, это же прямо стикеры к таскам):</strong>
      <ul>
        <li>👨‍👩‍👧 Семья</li>
        <li>👫 Друзья</li>
        <li>💼 Работа/учёба</li>
        <li>🌍 Мир/страны</li>
        <li>🙏 Личные нужды</li>
        <li>✅ Answered Prayers</li>
      </ul>
    </li>
    <li><strong>Добавь контент:</strong>
      <ul>
        <li>Напиши prayer requests на карточках</li>
        <li>Приклей фотографии людей</li>
        <li>Добавь любимые Bible verses</li>
        <li>Quotes, которые вдохновляют</li>
      </ul>
    </li>
    <li><strong>Укрась!</strong> Fairy lights, цветные стикеры, рамки — сделай красиво! 🌸✨</li>
    <li><strong>Обновляй регулярно:</strong> Добавляй новые просьбы, отмечай ответы</li>
  </ol>

  <p><strong>Bible Verses (стихи из Библии):</strong></p>
  <ul>
    <li>"Cast all your anxiety on him because he cares for you." — 1 Peter 5:7 (а я думала, что anxiety - это про панические атаки))</li>
    <li>"The Lord is near to all who call on him." — Psalm 145:18</li>
    <li>"Do not be anxious about anything, but in everything by prayer..." — Philippians 4:6</li>
  </ul>

  <img src="${r.pb4}" />
  <p><strong>Photos (фото):</strong></p>
  <ul>
    <li>Семья, друзья</li>
    <li>Миссионеры, за которых молишься (окак)</li>
    <li>Места, которые на сердце (города, страны)</li>
  </ul>
  
  <h3>Prayer Wall Ideas (идеи с Pinterest!) 🌸</h3>
  
  <p><strong>1. Fairy Lights + String + Polaroids</strong></p>
  <ul>
    <li>Натяни верёвку на стене</li>
    <li>Повесь гирлянду (fairy lights)</li>
    <li>Прищепками прикрепи фотографии и карточки с молитвами</li>
    <li>Очень уютно и красиво! ✨</li>
  </ul>
  
  <p><strong>2. Cork Board + Sticky Notes</strong></p>
  <ul>
    <li>Разноцветные sticky notes по категориям</li>
    <li>Розовые = семья, жёлтые = друзья, зелёные = работа</li>
    <li>Просто и ярко!</li>
  </ul>
  
  <p><strong>3. Half & Half Board</strong></p>
  <ul>
    <li>Левая половина: Prayer Requests</li>
    <li>Правая половина: Answered Prayers</li>
    <li>Видно силу молитвы!</li>
  </ul>
  
  <p><strong>4. World Map + Pins</strong></p>
  <ul>
    <li>Карта мира на стене</li>
    <li>Булавки в странах, за которые молишься</li>
    <li>Отлично для миссионерских молитв!</li>
  </ul>
  
  <p><strong>5. Chalkboard Wall</strong></p>
  <ul>
    <li>Покрась часть стены меловой краской</li>
    <li>Пиши молитвы мелом</li>
    <li>Легко стирать и обновлять!</li>
  </ul>

  <img src="${r.blessed11}" />
  
  <h3>Prayer Wall в церкви ⛪</h3>
  
  <p>Многие церкви создают общие Prayer Walls:</p>
  <ul>
    <li>Прихожане пишут prayer requests на sticky notes</li>
    <li>Приклеивают на общую доску</li>
    <li>Другие молятся за эти просьбы</li>
    <li>Когда Бог отвечает — переносят в секцию "Answered!"</li>
  </ul>
  
  <p><strong>Это создаёт:</strong></p>
  <ul>
    <li>Community (общность) в молитве</li>
    <li>Encouragement (поддержка) друг друга</li>
    <li>Visible proof (видимое доказательство) силы молитвы</li>
  </ul>

  <p><strong>Это превращает хаотичную молитву в intentional (целенаправленную)!</strong></p>

  <p><strong>Psalms (Псалмы) — это записанные молитвы!</strong>  
  Давид записывал свои молитвы, жалобы, благодарения. Теперь мы их читаем и молимся вместе с ним!</p>
  
  <p><strong>Prayer Wall = современная версия личного молитвенника!</strong> 📌✝️</p>

  <p><strong>Q: Можно ли делать это в телефоне?</strong>  
  A: Да! Есть приложения для prayer lists. НО физическая доска = больше шансов увидеть и вспомнить.</p>
  <img src="${r.blessed12}" />
  <h3>Задание 🎯</h3>
  
  <ol>
    <li>Завари и выпей свой неведомый кофе с неведомым бонусом ☕</li>
    <li>Вообрази свою гипотетическую молитвенную доску. Какие там были бы подразделы, какие молитвы в "реализованных"?</li>
  </ol>
      `},{day:28,date:"2026-01-16",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:29,date:"2026-01-17",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:30,date:"2026-01-18",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:31,date:"2026-01-19",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:32,date:"2026-01-20",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function Yy({currentDate:v,userName:M}){const[O,p]=wl.useState(()=>qf()),[A,x]=wl.useState(null),Y=E=>{const N=La(E);if(Qa(N,v)&&(x(E),!O.has(E))){const Z=Xm(E);p(Z)}},P=()=>{x(null)},_=[...Array.from({length:32},(E,N)=>N+1)].sort((E,N)=>{const Z=La(E),yl=La(N),vl=mr(Z,v),zl=mr(yl,v),Ul=O.has(E),bl=O.has(N),Al=Qa(Z,v),ol=Qa(yl,v),_l=Al&&!Ul,$l=ol&&!bl,Sl=vl&&Ul,k=zl&&bl,Hl=!Al,Kl=!ol,Ft=Ul&&!vl&&Al,pt=bl&&!zl&&ol;return _l&&!$l?-1:!_l&&$l?1:_l&&$l?E-N:Sl&&!k?-1:!Sl&&k?1:Hl&&!Kl?-1:!Hl&&Kl?1:Hl&&Kl||Ft&&pt?E-N:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:_.map(E=>{const N=La(E),Z=Qa(N,v),yl=O.has(E),vl=mr(N,v);return d.jsx(Wm,{windowNumber:E,isActive:Z,isOpened:yl,isExactMatch:vl,onClick:()=>Y(E)},E)})}),A!==null&&(()=>{const E=Ry[A-1],N=M==="Tanya"?E.tanya_message:M==="Zebra"?E.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(Fm,{windowNumber:A,message:N,onClose:P})})()]})}function qy(){const[v,M]=wl.useState(!1),O=wl.useRef(null),[p,A]=wl.useState(!1);wl.useEffect(()=>{const Y=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",Y),Y==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),A(!0))},[]),wl.useEffect(()=>{if(!p)return;const Y=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),M(!0),A(!1),window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)};return window.addEventListener("pointerdown",Y,{once:!0}),window.addEventListener("keydown",Y,{once:!0}),()=>{window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)}},[p]),wl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",v,"ref=",O.current),!O.current)return;const Y=O.current;if(v)console.debug("[AudioControls] calling play()"),Y.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),A(!0))});else{console.debug("[AudioControls] calling pause()");try{Y.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[v]);const x=()=>{const Y=!v;console.debug("[AudioControls] toggleMusic ->",Y),M(Y),localStorage.setItem("musicEnabled",String(Y))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${v?"audio-active":""}`,onClick:x,title:"Toggle Christmas Music",children:[v?d.jsx(Bm,{size:20}):d.jsx(Rm,{size:20}),d.jsx(Om,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:O,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:Y=>console.error("[AudioControls] audio event: error",Y)})]})}function Xy(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((v,M)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},M))})}const Gy=()=>new Date;function Ly(){const[v,M]=wl.useState(()=>{const x=localStorage.getItem("adventCalendarUser");return x==="Tanya"||x==="Zebra"?x:(localStorage.clear(),null)}),[O,p]=wl.useState(Gy),A=x=>{localStorage.clear(),M(x),localStorage.setItem("adventCalendarUser",x)};return wl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);p(U)}catch(Y){console.error("Failed to fetch current date:",Y),p(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx(Qm,{}),d.jsx(Xy,{}),d.jsx(qy,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(Lm,{userName:v,onUserSelect:A}),d.jsx(Yy,{currentDate:O,userName:v})]})]})}vm.createRoot(document.getElementById("root")).render(d.jsx(wl.StrictMode,{children:d.jsx(Ly,{})}));
