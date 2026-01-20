(function(){const C=document.createElement("link").relList;if(C&&C.supports&&C.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))f(A);new MutationObserver(A=>{for(const x of A)if(x.type==="childList")for(const Y of x.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&f(Y)}).observe(document,{childList:!0,subtree:!0});function O(A){const x={};return A.integrity&&(x.integrity=A.integrity),A.referrerPolicy&&(x.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?x.credentials="include":A.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function f(A){if(A.ep)return;A.ep=!0;const x=O(A);fetch(A.href,x)}})();var ur={exports:{}},zn={};var bp;function um(){if(bp)return zn;bp=1;var b=Symbol.for("react.transitional.element"),C=Symbol.for("react.fragment");function O(f,A,x){var Y=null;if(x!==void 0&&(Y=""+x),A.key!==void 0&&(Y=""+A.key),"key"in A){x={};for(var P in A)P!=="key"&&(x[P]=A[P])}else x=A;return A=x.ref,{$$typeof:b,type:f,key:Y,ref:A!==void 0?A:null,props:x}}return zn.Fragment=C,zn.jsx=O,zn.jsxs=O,zn}var vp;function gm(){return vp||(vp=1,ur.exports=um()),ur.exports}var d=gm(),gr={exports:{}},L={};var wp;function cm(){if(wp)return L;wp=1;var b=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),Z=Symbol.iterator;function yl(c){return c===null||typeof c!="object"?null:(c=Z&&c[Z]||c["@@iterator"],typeof c=="function"?c:null)}var bl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zl=Object.assign,Ul={};function vl(c,j,D){this.props=c,this.context=j,this.refs=Ul,this.updater=D||bl}vl.prototype.isReactComponent={},vl.prototype.setState=function(c,j){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,j,"setState")},vl.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Al(){}Al.prototype=vl.prototype;function ol(c,j,D){this.props=c,this.context=j,this.refs=Ul,this.updater=D||bl}var _l=ol.prototype=new Al;_l.constructor=ol,zl(_l,vl.prototype),_l.isPureReactComponent=!0;var Ql=Array.isArray;function wl(){}var V={H:null,A:null,T:null,S:null},Rl=Object.prototype.hasOwnProperty;function Kl(c,j,D){var R=D.ref;return{$$typeof:b,type:c,key:j,ref:R!==void 0?R:null,props:D}}function Ft(c,j){return Kl(c.type,j,c.props)}function ft(c){return typeof c=="object"&&c!==null&&c.$$typeof===b}function Jl(c){var j={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(D){return j[D]})}var Ti=/\/+/g;function xt(c,j){return typeof c=="object"&&c!==null&&c.key!=null?Jl(""+c.key):j.toString(36)}function Tt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(wl,wl):(c.status="pending",c.then(function(j){c.status==="pending"&&(c.status="fulfilled",c.value=j)},function(j){c.status==="pending"&&(c.status="rejected",c.reason=j)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function S(c,j,D,R,$){var K=typeof c;(K==="undefined"||K==="boolean")&&(c=null);var nl=!1;if(c===null)nl=!0;else switch(K){case"bigint":case"string":case"number":nl=!0;break;case"object":switch(c.$$typeof){case b:case C:nl=!0;break;case E:return nl=c._init,S(nl(c._payload),j,D,R,$)}}if(nl)return $=$(c),nl=R===""?"."+xt(c,0):R,Ql($)?(D="",nl!=null&&(D=nl.replace(Ti,"$&/")+"/"),S($,j,D,"",function(Me){return Me})):$!=null&&(ft($)&&($=Ft($,D+($.key==null||c&&c.key===$.key?"":(""+$.key).replace(Ti,"$&/")+"/")+nl)),j.push($)),1;nl=0;var Zl=R===""?".":R+":";if(Ql(c))for(var Cl=0;Cl<c.length;Cl++)R=c[Cl],K=Zl+xt(R,Cl),nl+=S(R,j,D,K,$);else if(Cl=yl(c),typeof Cl=="function")for(c=Cl.call(c),Cl=0;!(R=c.next()).done;)R=R.value,K=Zl+xt(R,Cl++),nl+=S(R,j,D,K,$);else if(K==="object"){if(typeof c.then=="function")return S(Tt(c),j,D,R,$);throw j=String(c),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return nl}function M(c,j,D){if(c==null)return c;var R=[],$=0;return S(c,R,"","",function(K){return j.call(D,K,$++)}),R}function G(c){if(c._status===-1){var j=c._result;j=j(),j.then(function(D){(c._status===0||c._status===-1)&&(c._status=1,c._result=D)},function(D){(c._status===0||c._status===-1)&&(c._status=2,c._result=D)}),c._status===-1&&(c._status=0,c._result=j)}if(c._status===1)return c._result.default;throw c._result}var rl=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},pl={map:M,forEach:function(c,j,D){M(c,function(){j.apply(this,arguments)},D)},count:function(c){var j=0;return M(c,function(){j++}),j},toArray:function(c){return M(c,function(j){return j})||[]},only:function(c){if(!ft(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return L.Activity=N,L.Children=pl,L.Component=vl,L.Fragment=O,L.Profiler=A,L.PureComponent=ol,L.StrictMode=f,L.Suspense=U,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,L.__COMPILER_RUNTIME={__proto__:null,c:function(c){return V.H.useMemoCache(c)}},L.cache=function(c){return function(){return c.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(c,j,D){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var R=zl({},c.props),$=c.key;if(j!=null)for(K in j.key!==void 0&&($=""+j.key),j)!Rl.call(j,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&j.ref===void 0||(R[K]=j[K]);var K=arguments.length-2;if(K===1)R.children=D;else if(1<K){for(var nl=Array(K),Zl=0;Zl<K;Zl++)nl[Zl]=arguments[Zl+2];R.children=nl}return Kl(c.type,$,R)},L.createContext=function(c){return c={$$typeof:Y,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:x,_context:c},c},L.createElement=function(c,j,D){var R,$={},K=null;if(j!=null)for(R in j.key!==void 0&&(K=""+j.key),j)Rl.call(j,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&($[R]=j[R]);var nl=arguments.length-2;if(nl===1)$.children=D;else if(1<nl){for(var Zl=Array(nl),Cl=0;Cl<nl;Cl++)Zl[Cl]=arguments[Cl+2];$.children=Zl}if(c&&c.defaultProps)for(R in nl=c.defaultProps,nl)$[R]===void 0&&($[R]=nl[R]);return Kl(c,K,$)},L.createRef=function(){return{current:null}},L.forwardRef=function(c){return{$$typeof:P,render:c}},L.isValidElement=ft,L.lazy=function(c){return{$$typeof:E,_payload:{_status:-1,_result:c},_init:G}},L.memo=function(c,j){return{$$typeof:_,type:c,compare:j===void 0?null:j}},L.startTransition=function(c){var j=V.T,D={};V.T=D;try{var R=c(),$=V.S;$!==null&&$(D,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(wl,rl)}catch(K){rl(K)}finally{j!==null&&D.types!==null&&(j.types=D.types),V.T=j}},L.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},L.use=function(c){return V.H.use(c)},L.useActionState=function(c,j,D){return V.H.useActionState(c,j,D)},L.useCallback=function(c,j){return V.H.useCallback(c,j)},L.useContext=function(c){return V.H.useContext(c)},L.useDebugValue=function(){},L.useDeferredValue=function(c,j){return V.H.useDeferredValue(c,j)},L.useEffect=function(c,j){return V.H.useEffect(c,j)},L.useEffectEvent=function(c){return V.H.useEffectEvent(c)},L.useId=function(){return V.H.useId()},L.useImperativeHandle=function(c,j,D){return V.H.useImperativeHandle(c,j,D)},L.useInsertionEffect=function(c,j){return V.H.useInsertionEffect(c,j)},L.useLayoutEffect=function(c,j){return V.H.useLayoutEffect(c,j)},L.useMemo=function(c,j){return V.H.useMemo(c,j)},L.useOptimistic=function(c,j){return V.H.useOptimistic(c,j)},L.useReducer=function(c,j,D){return V.H.useReducer(c,j,D)},L.useRef=function(c){return V.H.useRef(c)},L.useState=function(c){return V.H.useState(c)},L.useSyncExternalStore=function(c,j,D){return V.H.useSyncExternalStore(c,j,D)},L.useTransition=function(){return V.H.useTransition()},L.version="19.2.3",L}var Sp;function hr(){return Sp||(Sp=1,gr.exports=cm()),gr.exports}var Sl=hr(),cr={exports:{}},_n={},pr={exports:{}},fr={};var zp;function pm(){return zp||(zp=1,(function(b){function C(S,M){var G=S.length;S.push(M);l:for(;0<G;){var rl=G-1>>>1,pl=S[rl];if(0<A(pl,M))S[rl]=M,S[G]=pl,G=rl;else break l}}function O(S){return S.length===0?null:S[0]}function f(S){if(S.length===0)return null;var M=S[0],G=S.pop();if(G!==M){S[0]=G;l:for(var rl=0,pl=S.length,c=pl>>>1;rl<c;){var j=2*(rl+1)-1,D=S[j],R=j+1,$=S[R];if(0>A(D,G))R<pl&&0>A($,D)?(S[rl]=$,S[R]=G,rl=R):(S[rl]=D,S[j]=G,rl=j);else if(R<pl&&0>A($,G))S[rl]=$,S[R]=G,rl=R;else break l}}return M}function A(S,M){var G=S.sortIndex-M.sortIndex;return G!==0?G:S.id-M.id}if(b.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;b.unstable_now=function(){return x.now()}}else{var Y=Date,P=Y.now();b.unstable_now=function(){return Y.now()-P}}var U=[],_=[],E=1,N=null,Z=3,yl=!1,bl=!1,zl=!1,Ul=!1,vl=typeof setTimeout=="function"?setTimeout:null,Al=typeof clearTimeout=="function"?clearTimeout:null,ol=typeof setImmediate<"u"?setImmediate:null;function _l(S){for(var M=O(_);M!==null;){if(M.callback===null)f(_);else if(M.startTime<=S)f(_),M.sortIndex=M.expirationTime,C(U,M);else break;M=O(_)}}function Ql(S){if(zl=!1,_l(S),!bl)if(O(U)!==null)bl=!0,wl||(wl=!0,Jl());else{var M=O(_);M!==null&&Tt(Ql,M.startTime-S)}}var wl=!1,V=-1,Rl=5,Kl=-1;function Ft(){return Ul?!0:!(b.unstable_now()-Kl<Rl)}function ft(){if(Ul=!1,wl){var S=b.unstable_now();Kl=S;var M=!0;try{l:{bl=!1,zl&&(zl=!1,Al(V),V=-1),yl=!0;var G=Z;try{t:{for(_l(S),N=O(U);N!==null&&!(N.expirationTime>S&&Ft());){var rl=N.callback;if(typeof rl=="function"){N.callback=null,Z=N.priorityLevel;var pl=rl(N.expirationTime<=S);if(S=b.unstable_now(),typeof pl=="function"){N.callback=pl,_l(S),M=!0;break t}N===O(U)&&f(U),_l(S)}else f(U);N=O(U)}if(N!==null)M=!0;else{var c=O(_);c!==null&&Tt(Ql,c.startTime-S),M=!1}}break l}finally{N=null,Z=G,yl=!1}M=void 0}}finally{M?Jl():wl=!1}}}var Jl;if(typeof ol=="function")Jl=function(){ol(ft)};else if(typeof MessageChannel<"u"){var Ti=new MessageChannel,xt=Ti.port2;Ti.port1.onmessage=ft,Jl=function(){xt.postMessage(null)}}else Jl=function(){vl(ft,0)};function Tt(S,M){V=vl(function(){S(b.unstable_now())},M)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(S){S.callback=null},b.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rl=0<S?Math.floor(1e3/S):5},b.unstable_getCurrentPriorityLevel=function(){return Z},b.unstable_next=function(S){switch(Z){case 1:case 2:case 3:var M=3;break;default:M=Z}var G=Z;Z=M;try{return S()}finally{Z=G}},b.unstable_requestPaint=function(){Ul=!0},b.unstable_runWithPriority=function(S,M){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var G=Z;Z=S;try{return M()}finally{Z=G}},b.unstable_scheduleCallback=function(S,M,G){var rl=b.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?rl+G:rl):G=rl,S){case 1:var pl=-1;break;case 2:pl=250;break;case 5:pl=1073741823;break;case 4:pl=1e4;break;default:pl=5e3}return pl=G+pl,S={id:E++,callback:M,priorityLevel:S,startTime:G,expirationTime:pl,sortIndex:-1},G>rl?(S.sortIndex=G,C(_,S),O(U)===null&&S===O(_)&&(zl?(Al(V),V=-1):zl=!0,Tt(Ql,G-rl))):(S.sortIndex=pl,C(U,S),bl||yl||(bl=!0,wl||(wl=!0,Jl()))),S},b.unstable_shouldYield=Ft,b.unstable_wrapCallback=function(S){var M=Z;return function(){var G=Z;Z=M;try{return S.apply(this,arguments)}finally{Z=G}}}})(fr)),fr}var _p;function fm(){return _p||(_p=1,pr.exports=pm()),pr.exports}var dr={exports:{}},kl={};var Tp;function dm(){if(Tp)return kl;Tp=1;var b=hr();function C(U){var _="https://react.dev/errors/"+U;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+U+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(){}var f={d:{f:O,r:function(){throw Error(C(522))},D:O,C:O,L:O,m:O,X:O,S:O,M:O},p:0,findDOMNode:null},A=Symbol.for("react.portal");function x(U,_,E){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:N==null?null:""+N,children:U,containerInfo:_,implementation:E}}var Y=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,_){if(U==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return kl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=f,kl.createPortal=function(U,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(C(299));return x(U,_,null,E)},kl.flushSync=function(U){var _=Y.T,E=f.p;try{if(Y.T=null,f.p=2,U)return U()}finally{Y.T=_,f.p=E,f.d.f()}},kl.preconnect=function(U,_){typeof U=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,f.d.C(U,_))},kl.prefetchDNS=function(U){typeof U=="string"&&f.d.D(U)},kl.preinit=function(U,_){if(typeof U=="string"&&_&&typeof _.as=="string"){var E=_.as,N=P(E,_.crossOrigin),Z=typeof _.integrity=="string"?_.integrity:void 0,yl=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?f.d.S(U,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:N,integrity:Z,fetchPriority:yl}):E==="script"&&f.d.X(U,{crossOrigin:N,integrity:Z,fetchPriority:yl,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},kl.preinitModule=function(U,_){if(typeof U=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=P(_.as,_.crossOrigin);f.d.M(U,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&f.d.M(U)},kl.preload=function(U,_){if(typeof U=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,N=P(E,_.crossOrigin);f.d.L(U,E,{crossOrigin:N,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},kl.preloadModule=function(U,_){if(typeof U=="string")if(_){var E=P(_.as,_.crossOrigin);f.d.m(U,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else f.d.m(U)},kl.requestFormReset=function(U){f.d.r(U)},kl.unstable_batchedUpdates=function(U,_){return U(_)},kl.useFormState=function(U,_,E){return Y.H.useFormState(U,_,E)},kl.useFormStatus=function(){return Y.H.useHostTransitionStatus()},kl.version="19.2.3",kl}var jp;function mm(){if(jp)return dr.exports;jp=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(C){console.error(C)}}return b(),dr.exports=dm(),dr.exports}var Ap;function hm(){if(Ap)return _n;Ap=1;var b=fm(),C=hr(),O=mm();function f(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function x(l){var t=l,i=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(i=t.return),l=t.return;while(l)}return t.tag===3?i:null}function Y(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(x(l)!==l)throw Error(f(188))}function _(l){var t=l.alternate;if(!t){if(t=x(l),t===null)throw Error(f(188));return t!==l?null:l}for(var i=l,e=t;;){var n=i.return;if(n===null)break;var a=n.alternate;if(a===null){if(e=n.return,e!==null){i=e;continue}break}if(n.child===a.child){for(a=n.child;a;){if(a===i)return U(n),l;if(a===e)return U(n),t;a=a.sibling}throw Error(f(188))}if(i.return!==e.return)i=n,e=a;else{for(var s=!1,r=n.child;r;){if(r===i){s=!0,i=n,e=a;break}if(r===e){s=!0,e=n,i=a;break}r=r.sibling}if(!s){for(r=a.child;r;){if(r===i){s=!0,i=a,e=n;break}if(r===e){s=!0,e=a,i=n;break}r=r.sibling}if(!s)throw Error(f(189))}}if(i.alternate!==e)throw Error(f(190))}if(i.tag!==3)throw Error(f(188));return i.stateNode.current===i?l:t}function E(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=E(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,Z=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),bl=Symbol.for("react.portal"),zl=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),vl=Symbol.for("react.profiler"),Al=Symbol.for("react.consumer"),ol=Symbol.for("react.context"),_l=Symbol.for("react.forward_ref"),Ql=Symbol.for("react.suspense"),wl=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Rl=Symbol.for("react.lazy"),Kl=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Jl(l){return l===null||typeof l!="object"?null:(l=ft&&l[ft]||l["@@iterator"],typeof l=="function"?l:null)}var Ti=Symbol.for("react.client.reference");function xt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ti?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case zl:return"Fragment";case vl:return"Profiler";case Ul:return"StrictMode";case Ql:return"Suspense";case wl:return"SuspenseList";case Kl:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case bl:return"Portal";case ol:return l.displayName||"Context";case Al:return(l._context.displayName||"Context")+".Consumer";case _l:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case V:return t=l.displayName||null,t!==null?t:xt(l.type)||"Memo";case Rl:t=l._payload,l=l._init;try{return xt(l(t))}catch{}}return null}var Tt=Array.isArray,S=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},rl=[],pl=-1;function c(l){return{current:l}}function j(l){0>pl||(l.current=rl[pl],rl[pl]=null,pl--)}function D(l,t){pl++,rl[pl]=l.current,l.current=t}var R=c(null),$=c(null),K=c(null),nl=c(null);function Zl(l,t){switch(D(K,t),D($,l),D(R,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Gc(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Gc(t),l=Lc(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}j(R),D(R,l)}function Cl(){j(R),j($),j(K)}function Me(l){l.memoizedState!==null&&D(nl,l);var t=R.current,i=Lc(t,l.type);t!==i&&(D($,l),D(R,i))}function Tn(l){$.current===l&&(j(R),j($)),nl.current===l&&(j(nl),bn._currentValue=G)}var Qa,yr;function ji(l){if(Qa===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);Qa=t&&t[1]||"",yr=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qa+l+yr}var ka=!1;function Za(l,t){if(!l||ka)return"";ka=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(v){var y=v}Reflect.construct(l,[],T)}else{try{T.call()}catch(v){y=v}l.call(T.prototype)}}else{try{throw Error()}catch(v){y=v}(T=l())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(v){if(v&&y&&typeof v.stack=="string")return[v.stack,y.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=e.DetermineComponentFrameRoot(),s=a[0],r=a[1];if(s&&r){var u=s.split(`
`),h=r.split(`
`);for(n=e=0;e<u.length&&!u[e].includes("DetermineComponentFrameRoot");)e++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(e===u.length||n===h.length)for(e=u.length-1,n=h.length-1;1<=e&&0<=n&&u[e]!==h[n];)n--;for(;1<=e&&0<=n;e--,n--)if(u[e]!==h[n]){if(e!==1||n!==1)do if(e--,n--,0>n||u[e]!==h[n]){var w=`
`+u[e].replace(" at new "," at ");return l.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",l.displayName)),w}while(1<=e&&0<=n);break}}}finally{ka=!1,Error.prepareStackTrace=i}return(i=l?l.displayName||l.name:"")?ji(i):""}function qp(l,t){switch(l.tag){case 26:case 27:case 5:return ji(l.type);case 16:return ji("Lazy");case 13:return l.child!==t&&t!==null?ji("Suspense Fallback"):ji("Suspense");case 19:return ji("SuspenseList");case 0:case 15:return Za(l.type,!1);case 11:return Za(l.type.render,!1);case 1:return Za(l.type,!0);case 31:return ji("Activity");default:return""}}function br(l){try{var t="",i=null;do t+=qp(l,i),i=l,l=l.return;while(l);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Va=Object.prototype.hasOwnProperty,Ka=b.unstable_scheduleCallback,Ja=b.unstable_cancelCallback,Xp=b.unstable_shouldYield,Gp=b.unstable_requestPaint,et=b.unstable_now,Lp=b.unstable_getCurrentPriorityLevel,vr=b.unstable_ImmediatePriority,wr=b.unstable_UserBlockingPriority,jn=b.unstable_NormalPriority,$p=b.unstable_LowPriority,Sr=b.unstable_IdlePriority,Qp=b.log,kp=b.unstable_setDisableYieldValue,Ee=null,nt=null;function It(l){if(typeof Qp=="function"&&kp(l),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Ee,l)}catch{}}var at=Math.clz32?Math.clz32:Kp,Zp=Math.log,Vp=Math.LN2;function Kp(l){return l>>>=0,l===0?32:31-(Zp(l)/Vp|0)|0}var An=256,Cn=262144,Mn=4194304;function Ai(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function En(l,t,i){var e=l.pendingLanes;if(e===0)return 0;var n=0,a=l.suspendedLanes,s=l.pingedLanes;l=l.warmLanes;var r=e&134217727;return r!==0?(e=r&~a,e!==0?n=Ai(e):(s&=r,s!==0?n=Ai(s):i||(i=r&~l,i!==0&&(n=Ai(i))))):(r=e&~a,r!==0?n=Ai(r):s!==0?n=Ai(s):i||(i=e&~l,i!==0&&(n=Ai(i)))),n===0?0:t!==0&&t!==n&&(t&a)===0&&(a=n&-n,i=t&-t,a>=i||a===32&&(i&4194048)!==0)?t:n}function De(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Jp(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zr(){var l=Mn;return Mn<<=1,(Mn&62914560)===0&&(Mn=4194304),l}function Wa(l){for(var t=[],i=0;31>i;i++)t.push(l);return t}function Oe(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Wp(l,t,i,e,n,a){var s=l.pendingLanes;l.pendingLanes=i,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=i,l.entangledLanes&=i,l.errorRecoveryDisabledLanes&=i,l.shellSuspendCounter=0;var r=l.entanglements,u=l.expirationTimes,h=l.hiddenUpdates;for(i=s&~i;0<i;){var w=31-at(i),T=1<<w;r[w]=0,u[w]=-1;var y=h[w];if(y!==null)for(h[w]=null,w=0;w<y.length;w++){var v=y[w];v!==null&&(v.lane&=-536870913)}i&=~T}e!==0&&_r(l,e,0),a!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=a&~(s&~t))}function _r(l,t,i){l.pendingLanes|=t,l.suspendedLanes&=~t;var e=31-at(t);l.entangledLanes|=t,l.entanglements[e]=l.entanglements[e]|1073741824|i&261930}function Tr(l,t){var i=l.entangledLanes|=t;for(l=l.entanglements;i;){var e=31-at(i),n=1<<e;n&t|l[e]&t&&(l[e]|=t),i&=~n}}function jr(l,t){var i=t&-t;return i=(i&42)!==0?1:Fa(i),(i&(l.suspendedLanes|t))!==0?0:i}function Fa(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ia(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Ar(){var l=M.p;return l!==0?l:(l=window.event,l===void 0?32:cp(l.type))}function Cr(l,t){var i=M.p;try{return M.p=l,t()}finally{M.p=i}}var Pt=Math.random().toString(36).slice(2),ql="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,Qi="__reactContainer$"+Pt,Pa="__reactEvents$"+Pt,Fp="__reactListeners$"+Pt,Ip="__reactHandles$"+Pt,Mr="__reactResources$"+Pt,xe="__reactMarker$"+Pt;function ls(l){delete l[ql],delete l[Wl],delete l[Pa],delete l[Fp],delete l[Ip]}function ki(l){var t=l[ql];if(t)return t;for(var i=l.parentNode;i;){if(t=i[Qi]||i[ql]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(l=Jc(l);l!==null;){if(i=l[ql])return i;l=Jc(l)}return t}l=i,i=l.parentNode}return null}function Zi(l){if(l=l[ql]||l[Qi]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Ne(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(f(33))}function Vi(l){var t=l[Mr];return t||(t=l[Mr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Hl(l){l[xe]=!0}var Er=new Set,Dr={};function Ci(l,t){Ki(l,t),Ki(l+"Capture",t)}function Ki(l,t){for(Dr[l]=t,l=0;l<t.length;l++)Er.add(t[l])}var Pp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Or={},xr={};function lf(l){return Va.call(xr,l)?!0:Va.call(Or,l)?!1:Pp.test(l)?xr[l]=!0:(Or[l]=!0,!1)}function Dn(l,t,i){if(lf(t))if(i===null)l.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+i)}}function On(l,t,i){if(i===null)l.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+i)}}function Nt(l,t,i,e){if(e===null)l.removeAttribute(i);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(i);return}l.setAttributeNS(t,i,""+e)}}function dt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Nr(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function tf(l,t,i){var e=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,a=e.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(l,t,{enumerable:e.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ts(l){if(!l._valueTracker){var t=Nr(l)?"checked":"value";l._valueTracker=tf(l,t,""+l[t])}}function Ur(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var i=t.getValue(),e="";return l&&(e=Nr(l)?l.checked?"true":"false":l.value),l=e,l!==i?(t.setValue(l),!0):!1}function xn(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var ef=/[\n"\\]/g;function mt(l){return l.replace(ef,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function is(l,t,i,e,n,a,s,r){l.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.type=s:l.removeAttribute("type"),t!=null?s==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+dt(t)):l.value!==""+dt(t)&&(l.value=""+dt(t)):s!=="submit"&&s!=="reset"||l.removeAttribute("value"),t!=null?es(l,s,dt(t)):i!=null?es(l,s,dt(i)):e!=null&&l.removeAttribute("value"),n==null&&a!=null&&(l.defaultChecked=!!a),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?l.name=""+dt(r):l.removeAttribute("name")}function Br(l,t,i,e,n,a,s,r){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(l.type=a),t!=null||i!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){ts(l);return}i=i!=null?""+dt(i):"",t=t!=null?""+dt(t):i,r||t===l.value||(l.value=t),l.defaultValue=t}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,l.checked=r?l.checked:!!e,l.defaultChecked=!!e,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(l.name=s),ts(l)}function es(l,t,i){t==="number"&&xn(l.ownerDocument)===l||l.defaultValue===""+i||(l.defaultValue=""+i)}function Ji(l,t,i,e){if(l=l.options,t){t={};for(var n=0;n<i.length;n++)t["$"+i[n]]=!0;for(i=0;i<l.length;i++)n=t.hasOwnProperty("$"+l[i].value),l[i].selected!==n&&(l[i].selected=n),n&&e&&(l[i].defaultSelected=!0)}else{for(i=""+dt(i),t=null,n=0;n<l.length;n++){if(l[n].value===i){l[n].selected=!0,e&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Rr(l,t,i){if(t!=null&&(t=""+dt(t),t!==l.value&&(l.value=t),i==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=i!=null?""+dt(i):""}function Hr(l,t,i,e){if(t==null){if(e!=null){if(i!=null)throw Error(f(92));if(Tt(e)){if(1<e.length)throw Error(f(93));e=e[0]}i=e}i==null&&(i=""),t=i}i=dt(t),l.defaultValue=i,e=l.textContent,e===i&&e!==""&&e!==null&&(l.value=e),ts(l)}function Wi(l,t){if(t){var i=l.firstChild;if(i&&i===l.lastChild&&i.nodeType===3){i.nodeValue=t;return}}l.textContent=t}var nf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yr(l,t,i){var e=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?e?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":e?l.setProperty(t,i):typeof i!="number"||i===0||nf.has(t)?t==="float"?l.cssFloat=i:l[t]=(""+i).trim():l[t]=i+"px"}function qr(l,t,i){if(t!=null&&typeof t!="object")throw Error(f(62));if(l=l.style,i!=null){for(var e in i)!i.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?l.setProperty(e,""):e==="float"?l.cssFloat="":l[e]="");for(var n in t)e=t[n],t.hasOwnProperty(n)&&i[n]!==e&&Yr(l,n,e)}else for(var a in t)t.hasOwnProperty(a)&&Yr(l,a,t[a])}function ns(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nn(l){return sf.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var as=null;function ss(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fi=null,Ii=null;function Xr(l){var t=Zi(l);if(t&&(l=t.stateNode)){var i=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(is(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=l;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var e=i[t];if(e!==l&&e.form===l.form){var n=e[Wl]||null;if(!n)throw Error(f(90));is(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<i.length;t++)e=i[t],e.form===l.form&&Ur(e)}break l;case"textarea":Rr(l,i.value,i.defaultValue);break l;case"select":t=i.value,t!=null&&Ji(l,!!i.multiple,t,!1)}}}var os=!1;function Gr(l,t,i){if(os)return l(t,i);os=!0;try{var e=l(t);return e}finally{if(os=!1,(Fi!==null||Ii!==null)&&(wa(),Fi&&(t=Fi,l=Ii,Ii=Fi=null,Xr(t),l)))for(t=0;t<l.length;t++)Xr(l[t])}}function Ue(l,t){var i=l.stateNode;if(i===null)return null;var e=i[Wl]||null;if(e===null)return null;i=e[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(l=l.type,e=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!e;break l;default:l=!1}if(l)return null;if(i&&typeof i!="function")throw Error(f(231,t,typeof i));return i}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rs=!1;if(Bt)try{var Be={};Object.defineProperty(Be,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Be,Be),window.removeEventListener("test",Be,Be)}catch{rs=!1}var li=null,us=null,Un=null;function Lr(){if(Un)return Un;var l,t=us,i=t.length,e,n="value"in li?li.value:li.textContent,a=n.length;for(l=0;l<i&&t[l]===n[l];l++);var s=i-l;for(e=1;e<=s&&t[i-e]===n[a-e];e++);return Un=n.slice(l,1<e?1-e:void 0)}function Bn(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function Rn(){return!0}function $r(){return!1}function Fl(l){function t(i,e,n,a,s){this._reactName=i,this._targetInst=n,this.type=e,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var r in l)l.hasOwnProperty(r)&&(i=l[r],this[r]=i?i(a):a[r]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Rn:$r,this.isPropagationStopped=$r,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Rn)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Rn)},persist:function(){},isPersistent:Rn}),t}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hn=Fl(Mi),Re=N({},Mi,{view:0,detail:0}),of=Fl(Re),gs,cs,He,Yn=N({},Re,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fs,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==He&&(He&&l.type==="mousemove"?(gs=l.screenX-He.screenX,cs=l.screenY-He.screenY):cs=gs=0,He=l),gs)},movementY:function(l){return"movementY"in l?l.movementY:cs}}),Qr=Fl(Yn),rf=N({},Yn,{dataTransfer:0}),uf=Fl(rf),gf=N({},Re,{relatedTarget:0}),ps=Fl(gf),cf=N({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),pf=Fl(cf),ff=N({},Mi,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),df=Fl(ff),mf=N({},Mi,{data:0}),kr=Fl(mf),hf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vf(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=bf[l])?!!t[l]:!1}function fs(){return vf}var wf=N({},Re,{key:function(l){if(l.key){var t=hf[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Bn(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yf[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fs,charCode:function(l){return l.type==="keypress"?Bn(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Bn(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),Sf=Fl(wf),zf=N({},Yn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zr=Fl(zf),_f=N({},Re,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fs}),Tf=Fl(_f),jf=N({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Af=Fl(jf),Cf=N({},Yn,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Mf=Fl(Cf),Ef=N({},Mi,{newState:0,oldState:0}),Df=Fl(Ef),Of=[9,13,27,32],ds=Bt&&"CompositionEvent"in window,Ye=null;Bt&&"documentMode"in document&&(Ye=document.documentMode);var xf=Bt&&"TextEvent"in window&&!Ye,Vr=Bt&&(!ds||Ye&&8<Ye&&11>=Ye),Kr=" ",Jr=!1;function Wr(l,t){switch(l){case"keyup":return Of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pi=!1;function Nf(l,t){switch(l){case"compositionend":return Fr(t);case"keypress":return t.which!==32?null:(Jr=!0,Kr);case"textInput":return l=t.data,l===Kr&&Jr?null:l;default:return null}}function Uf(l,t){if(Pi)return l==="compositionend"||!ds&&Wr(l,t)?(l=Lr(),Un=us=li=null,Pi=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vr&&t.locale!=="ko"?null:t.data;default:return null}}var Bf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ir(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Bf[l.type]:t==="textarea"}function Pr(l,t,i,e){Fi?Ii?Ii.push(e):Ii=[e]:Fi=e,t=Ca(t,"onChange"),0<t.length&&(i=new Hn("onChange","change",null,i,e),l.push({event:i,listeners:t}))}var qe=null,Xe=null;function Rf(l){Bc(l,0)}function qn(l){var t=Ne(l);if(Ur(t))return l}function lu(l,t){if(l==="change")return t}var tu=!1;if(Bt){var ms;if(Bt){var hs="oninput"in document;if(!hs){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),hs=typeof iu.oninput=="function"}ms=hs}else ms=!1;tu=ms&&(!document.documentMode||9<document.documentMode)}function eu(){qe&&(qe.detachEvent("onpropertychange",nu),Xe=qe=null)}function nu(l){if(l.propertyName==="value"&&qn(Xe)){var t=[];Pr(t,Xe,l,ss(l)),Gr(Rf,t)}}function Hf(l,t,i){l==="focusin"?(eu(),qe=t,Xe=i,qe.attachEvent("onpropertychange",nu)):l==="focusout"&&eu()}function Yf(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return qn(Xe)}function qf(l,t){if(l==="click")return qn(t)}function Xf(l,t){if(l==="input"||l==="change")return qn(t)}function Gf(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var st=typeof Object.is=="function"?Object.is:Gf;function Ge(l,t){if(st(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var i=Object.keys(l),e=Object.keys(t);if(i.length!==e.length)return!1;for(e=0;e<i.length;e++){var n=i[e];if(!Va.call(t,n)||!st(l[n],t[n]))return!1}return!0}function au(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function su(l,t){var i=au(l);l=0;for(var e;i;){if(i.nodeType===3){if(e=l+i.textContent.length,l<=t&&e>=t)return{node:i,offset:t-l};l=e}l:{for(;i;){if(i.nextSibling){i=i.nextSibling;break l}i=i.parentNode}i=void 0}i=au(i)}}function ou(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?ou(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function ru(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=xn(l.document);t instanceof l.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)l=t.contentWindow;else break;t=xn(l.document)}return t}function ys(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Lf=Bt&&"documentMode"in document&&11>=document.documentMode,le=null,bs=null,Le=null,vs=!1;function uu(l,t,i){var e=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;vs||le==null||le!==xn(e)||(e=le,"selectionStart"in e&&ys(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Le&&Ge(Le,e)||(Le=e,e=Ca(bs,"onSelect"),0<e.length&&(t=new Hn("onSelect","select",null,t,i),l.push({event:t,listeners:e}),t.target=le)))}function Ei(l,t){var i={};return i[l.toLowerCase()]=t.toLowerCase(),i["Webkit"+l]="webkit"+t,i["Moz"+l]="moz"+t,i}var te={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionrun:Ei("Transition","TransitionRun"),transitionstart:Ei("Transition","TransitionStart"),transitioncancel:Ei("Transition","TransitionCancel"),transitionend:Ei("Transition","TransitionEnd")},ws={},gu={};Bt&&(gu=document.createElement("div").style,"AnimationEvent"in window||(delete te.animationend.animation,delete te.animationiteration.animation,delete te.animationstart.animation),"TransitionEvent"in window||delete te.transitionend.transition);function Di(l){if(ws[l])return ws[l];if(!te[l])return l;var t=te[l],i;for(i in t)if(t.hasOwnProperty(i)&&i in gu)return ws[l]=t[i];return l}var cu=Di("animationend"),pu=Di("animationiteration"),fu=Di("animationstart"),$f=Di("transitionrun"),Qf=Di("transitionstart"),kf=Di("transitioncancel"),du=Di("transitionend"),mu=new Map,Ss="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ss.push("scrollEnd");function jt(l,t){mu.set(l,t),Ci(t,[l])}var Xn=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ht=[],ie=0,zs=0;function Gn(){for(var l=ie,t=zs=ie=0;t<l;){var i=ht[t];ht[t++]=null;var e=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var a=ht[t];if(ht[t++]=null,e!==null&&n!==null){var s=e.pending;s===null?n.next=n:(n.next=s.next,s.next=n),e.pending=n}a!==0&&hu(i,n,a)}}function Ln(l,t,i,e){ht[ie++]=l,ht[ie++]=t,ht[ie++]=i,ht[ie++]=e,zs|=e,l.lanes|=e,l=l.alternate,l!==null&&(l.lanes|=e)}function _s(l,t,i,e){return Ln(l,t,i,e),$n(l)}function Oi(l,t){return Ln(l,null,null,t),$n(l)}function hu(l,t,i){l.lanes|=i;var e=l.alternate;e!==null&&(e.lanes|=i);for(var n=!1,a=l.return;a!==null;)a.childLanes|=i,e=a.alternate,e!==null&&(e.childLanes|=i),a.tag===22&&(l=a.stateNode,l===null||l._visibility&1||(n=!0)),l=a,a=a.return;return l.tag===3?(a=l.stateNode,n&&t!==null&&(n=31-at(i),l=a.hiddenUpdates,e=l[n],e===null?l[n]=[t]:e.push(t),t.lane=i|536870912),a):null}function $n(l){if(50<cn)throw cn=0,No=null,Error(f(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ee={};function Zf(l,t,i,e){this.tag=l,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(l,t,i,e){return new Zf(l,t,i,e)}function Ts(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Rt(l,t){var i=l.alternate;return i===null?(i=ot(l.tag,t,l.key,l.mode),i.elementType=l.elementType,i.type=l.type,i.stateNode=l.stateNode,i.alternate=l,l.alternate=i):(i.pendingProps=t,i.type=l.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=l.flags&65011712,i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=l.sibling,i.index=l.index,i.ref=l.ref,i.refCleanup=l.refCleanup,i}function yu(l,t){l.flags&=65011714;var i=l.alternate;return i===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,t=i.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function Qn(l,t,i,e,n,a){var s=0;if(e=l,typeof l=="function")Ts(l)&&(s=1);else if(typeof l=="string")s=Fd(l,i,R.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case Kl:return l=ot(31,i,t,n),l.elementType=Kl,l.lanes=a,l;case zl:return xi(i.children,n,a,t);case Ul:s=8,n|=24;break;case vl:return l=ot(12,i,t,n|2),l.elementType=vl,l.lanes=a,l;case Ql:return l=ot(13,i,t,n),l.elementType=Ql,l.lanes=a,l;case wl:return l=ot(19,i,t,n),l.elementType=wl,l.lanes=a,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case ol:s=10;break l;case Al:s=9;break l;case _l:s=11;break l;case V:s=14;break l;case Rl:s=16,e=null;break l}s=29,i=Error(f(130,l===null?"null":typeof l,"")),e=null}return t=ot(s,i,t,n),t.elementType=l,t.type=e,t.lanes=a,t}function xi(l,t,i,e){return l=ot(7,l,e,t),l.lanes=i,l}function js(l,t,i){return l=ot(6,l,null,t),l.lanes=i,l}function bu(l){var t=ot(18,null,null,0);return t.stateNode=l,t}function As(l,t,i){return t=ot(4,l.children!==null?l.children:[],l.key,t),t.lanes=i,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var vu=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var i=vu.get(l);return i!==void 0?i:(t={value:l,source:t,stack:br(t)},vu.set(l,t),t)}return{value:l,source:t,stack:br(t)}}var ne=[],ae=0,kn=null,$e=0,bt=[],vt=0,ti=null,Mt=1,Et="";function Ht(l,t){ne[ae++]=$e,ne[ae++]=kn,kn=l,$e=t}function wu(l,t,i){bt[vt++]=Mt,bt[vt++]=Et,bt[vt++]=ti,ti=l;var e=Mt;l=Et;var n=32-at(e)-1;e&=~(1<<n),i+=1;var a=32-at(t)+n;if(30<a){var s=n-n%5;a=(e&(1<<s)-1).toString(32),e>>=s,n-=s,Mt=1<<32-at(t)+n|i<<n|e,Et=a+l}else Mt=1<<a|i<<n|e,Et=l}function Cs(l){l.return!==null&&(Ht(l,1),wu(l,1,0))}function Ms(l){for(;l===kn;)kn=ne[--ae],ne[ae]=null,$e=ne[--ae],ne[ae]=null;for(;l===ti;)ti=bt[--vt],bt[vt]=null,Et=bt[--vt],bt[vt]=null,Mt=bt[--vt],bt[vt]=null}function Su(l,t){bt[vt++]=Mt,bt[vt++]=Et,bt[vt++]=ti,Mt=t.id,Et=t.overflow,ti=l}var Xl=null,dl=null,ll=!1,ii=null,wt=!1,Es=Error(f(519));function ei(l){var t=Error(f(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qe(yt(t,l)),Es}function zu(l){var t=l.stateNode,i=l.type,e=l.memoizedProps;switch(t[ql]=l,t[Wl]=e,i){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(i=0;i<fn.length;i++)W(fn[i],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Br(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Hr(t,e.value,e.defaultValue,e.children)}i=e.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||e.suppressHydrationWarning===!0||qc(t.textContent,i)?(e.popover!=null&&(W("beforetoggle",t),W("toggle",t)),e.onScroll!=null&&W("scroll",t),e.onScrollEnd!=null&&W("scrollend",t),e.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ei(l,!0)}function _u(l){for(Xl=l.return;Xl;)switch(Xl.tag){case 5:case 31:case 13:wt=!1;return;case 27:case 3:wt=!0;return;default:Xl=Xl.return}}function se(l){if(l!==Xl)return!1;if(!ll)return _u(l),ll=!0,!1;var t=l.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=l.type,i=!(i!=="form"&&i!=="button")||Ko(l.type,l.memoizedProps)),i=!i),i&&dl&&ei(l),_u(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));dl=Kc(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(317));dl=Kc(l)}else t===27?(t=dl,yi(l.type)?(l=Po,Po=null,dl=l):dl=t):dl=Xl?zt(l.stateNode.nextSibling):null;return!0}function Ni(){dl=Xl=null,ll=!1}function Ds(){var l=ii;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),ii=null),l}function Qe(l){ii===null?ii=[l]:ii.push(l)}var Os=c(null),Ui=null,Yt=null;function ni(l,t,i){D(Os,t._currentValue),t._currentValue=i}function qt(l){l._currentValue=Os.current,j(Os)}function xs(l,t,i){for(;l!==null;){var e=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),l===i)break;l=l.return}}function Ns(l,t,i,e){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var a=n.dependencies;if(a!==null){var s=n.child;a=a.firstContext;l:for(;a!==null;){var r=a;a=n;for(var u=0;u<t.length;u++)if(r.context===t[u]){a.lanes|=i,r=a.alternate,r!==null&&(r.lanes|=i),xs(a.return,i,l),e||(s=null);break l}a=r.next}}else if(n.tag===18){if(s=n.return,s===null)throw Error(f(341));s.lanes|=i,a=s.alternate,a!==null&&(a.lanes|=i),xs(s,i,l),s=null}else s=n.child;if(s!==null)s.return=n;else for(s=n;s!==null;){if(s===l){s=null;break}if(n=s.sibling,n!==null){n.return=s.return,s=n;break}s=s.return}n=s}}function oe(l,t,i,e){l=null;for(var n=t,a=!1;n!==null;){if(!a){if((n.flags&524288)!==0)a=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var s=n.alternate;if(s===null)throw Error(f(387));if(s=s.memoizedProps,s!==null){var r=n.type;st(n.pendingProps.value,s.value)||(l!==null?l.push(r):l=[r])}}else if(n===nl.current){if(s=n.alternate,s===null)throw Error(f(387));s.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(bn):l=[bn])}n=n.return}l!==null&&Ns(t,l,i,e),t.flags|=262144}function Zn(l){for(l=l.firstContext;l!==null;){if(!st(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Bi(l){Ui=l,Yt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Gl(l){return Tu(Ui,l)}function Vn(l,t){return Ui===null&&Bi(l),Tu(l,t)}function Tu(l,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},Yt===null){if(l===null)throw Error(f(308));Yt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Yt=Yt.next=t;return i}var Vf=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(i,e){l.push(e)}};this.abort=function(){t.aborted=!0,l.forEach(function(i){return i()})}},Kf=b.unstable_scheduleCallback,Jf=b.unstable_NormalPriority,Dl={$$typeof:ol,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Us(){return{controller:new Vf,data:new Map,refCount:0}}function ke(l){l.refCount--,l.refCount===0&&Kf(Jf,function(){l.controller.abort()})}var Ze=null,Bs=0,re=0,ue=null;function Wf(l,t){if(Ze===null){var i=Ze=[];Bs=0,re=qo(),ue={status:"pending",value:void 0,then:function(e){i.push(e)}}}return Bs++,t.then(ju,ju),t}function ju(){if(--Bs===0&&Ze!==null){ue!==null&&(ue.status="fulfilled");var l=Ze;Ze=null,re=0,ue=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Ff(l,t){var i=[],e={status:"pending",value:null,reason:null,then:function(n){i.push(n)}};return l.then(function(){e.status="fulfilled",e.value=t;for(var n=0;n<i.length;n++)(0,i[n])(t)},function(n){for(e.status="rejected",e.reason=n,n=0;n<i.length;n++)(0,i[n])(void 0)}),e}var Au=S.S;S.S=function(l,t){uc=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wf(l,t),Au!==null&&Au(l,t)};var Ri=c(null);function Rs(){var l=Ri.current;return l!==null?l:fl.pooledCache}function Kn(l,t){t===null?D(Ri,Ri.current):D(Ri,t.pool)}function Cu(){var l=Rs();return l===null?null:{parent:Dl._currentValue,pool:l}}var ge=Error(f(460)),Hs=Error(f(474)),Jn=Error(f(542)),Wn={then:function(){}};function Mu(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Eu(l,t,i){switch(i=l[i],i===void 0?l.push(t):i!==t&&(t.then(Ut,Ut),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ou(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=fl,l!==null&&100<l.shellSuspendCounter)throw Error(f(482));l=t,l.status="pending",l.then(function(e){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=e}},function(e){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ou(l),l}throw Yi=t,ge}}function Hi(l){try{var t=l._init;return t(l._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Yi=i,ge):i}}var Yi=null;function Du(){if(Yi===null)throw Error(f(459));var l=Yi;return Yi=null,l}function Ou(l){if(l===ge||l===Jn)throw Error(f(483))}var ce=null,Ve=0;function Fn(l){var t=Ve;return Ve+=1,ce===null&&(ce=[]),Eu(ce,l,t)}function Ke(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function In(l,t){throw t.$$typeof===Z?Error(f(525)):(l=Object.prototype.toString.call(t),Error(f(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function xu(l){function t(p,g){if(l){var m=p.deletions;m===null?(p.deletions=[g],p.flags|=16):m.push(g)}}function i(p,g){if(!l)return null;for(;g!==null;)t(p,g),g=g.sibling;return null}function e(p){for(var g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function n(p,g){return p=Rt(p,g),p.index=0,p.sibling=null,p}function a(p,g,m){return p.index=m,l?(m=p.alternate,m!==null?(m=m.index,m<g?(p.flags|=67108866,g):m):(p.flags|=67108866,g)):(p.flags|=1048576,g)}function s(p){return l&&p.alternate===null&&(p.flags|=67108866),p}function r(p,g,m,z){return g===null||g.tag!==6?(g=js(m,p.mode,z),g.return=p,g):(g=n(g,m),g.return=p,g)}function u(p,g,m,z){var q=m.type;return q===zl?w(p,g,m.props.children,z,m.key):g!==null&&(g.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Rl&&Hi(q)===g.type)?(g=n(g,m.props),Ke(g,m),g.return=p,g):(g=Qn(m.type,m.key,m.props,null,p.mode,z),Ke(g,m),g.return=p,g)}function h(p,g,m,z){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=As(m,p.mode,z),g.return=p,g):(g=n(g,m.children||[]),g.return=p,g)}function w(p,g,m,z,q){return g===null||g.tag!==7?(g=xi(m,p.mode,z,q),g.return=p,g):(g=n(g,m),g.return=p,g)}function T(p,g,m){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=js(""+g,p.mode,m),g.return=p,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yl:return m=Qn(g.type,g.key,g.props,null,p.mode,m),Ke(m,g),m.return=p,m;case bl:return g=As(g,p.mode,m),g.return=p,g;case Rl:return g=Hi(g),T(p,g,m)}if(Tt(g)||Jl(g))return g=xi(g,p.mode,m,null),g.return=p,g;if(typeof g.then=="function")return T(p,Fn(g),m);if(g.$$typeof===ol)return T(p,Vn(p,g),m);In(p,g)}return null}function y(p,g,m,z){var q=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return q!==null?null:r(p,g,""+m,z);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:return m.key===q?u(p,g,m,z):null;case bl:return m.key===q?h(p,g,m,z):null;case Rl:return m=Hi(m),y(p,g,m,z)}if(Tt(m)||Jl(m))return q!==null?null:w(p,g,m,z,null);if(typeof m.then=="function")return y(p,g,Fn(m),z);if(m.$$typeof===ol)return y(p,g,Vn(p,m),z);In(p,m)}return null}function v(p,g,m,z,q){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return p=p.get(m)||null,r(g,p,""+z,q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case yl:return p=p.get(z.key===null?m:z.key)||null,u(g,p,z,q);case bl:return p=p.get(z.key===null?m:z.key)||null,h(g,p,z,q);case Rl:return z=Hi(z),v(p,g,m,z,q)}if(Tt(z)||Jl(z))return p=p.get(m)||null,w(g,p,z,q,null);if(typeof z.then=="function")return v(p,g,m,Fn(z),q);if(z.$$typeof===ol)return v(p,g,m,Vn(g,z),q);In(g,z)}return null}function B(p,g,m,z){for(var q=null,tl=null,H=g,k=g=0,I=null;H!==null&&k<m.length;k++){H.index>k?(I=H,H=null):I=H.sibling;var il=y(p,H,m[k],z);if(il===null){H===null&&(H=I);break}l&&H&&il.alternate===null&&t(p,H),g=a(il,g,k),tl===null?q=il:tl.sibling=il,tl=il,H=I}if(k===m.length)return i(p,H),ll&&Ht(p,k),q;if(H===null){for(;k<m.length;k++)H=T(p,m[k],z),H!==null&&(g=a(H,g,k),tl===null?q=H:tl.sibling=H,tl=H);return ll&&Ht(p,k),q}for(H=e(H);k<m.length;k++)I=v(H,p,k,m[k],z),I!==null&&(l&&I.alternate!==null&&H.delete(I.key===null?k:I.key),g=a(I,g,k),tl===null?q=I:tl.sibling=I,tl=I);return l&&H.forEach(function(zi){return t(p,zi)}),ll&&Ht(p,k),q}function X(p,g,m,z){if(m==null)throw Error(f(151));for(var q=null,tl=null,H=g,k=g=0,I=null,il=m.next();H!==null&&!il.done;k++,il=m.next()){H.index>k?(I=H,H=null):I=H.sibling;var zi=y(p,H,il.value,z);if(zi===null){H===null&&(H=I);break}l&&H&&zi.alternate===null&&t(p,H),g=a(zi,g,k),tl===null?q=zi:tl.sibling=zi,tl=zi,H=I}if(il.done)return i(p,H),ll&&Ht(p,k),q;if(H===null){for(;!il.done;k++,il=m.next())il=T(p,il.value,z),il!==null&&(g=a(il,g,k),tl===null?q=il:tl.sibling=il,tl=il);return ll&&Ht(p,k),q}for(H=e(H);!il.done;k++,il=m.next())il=v(H,p,k,il.value,z),il!==null&&(l&&il.alternate!==null&&H.delete(il.key===null?k:il.key),g=a(il,g,k),tl===null?q=il:tl.sibling=il,tl=il);return l&&H.forEach(function(rm){return t(p,rm)}),ll&&Ht(p,k),q}function cl(p,g,m,z){if(typeof m=="object"&&m!==null&&m.type===zl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:l:{for(var q=m.key;g!==null;){if(g.key===q){if(q=m.type,q===zl){if(g.tag===7){i(p,g.sibling),z=n(g,m.props.children),z.return=p,p=z;break l}}else if(g.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Rl&&Hi(q)===g.type){i(p,g.sibling),z=n(g,m.props),Ke(z,m),z.return=p,p=z;break l}i(p,g);break}else t(p,g);g=g.sibling}m.type===zl?(z=xi(m.props.children,p.mode,z,m.key),z.return=p,p=z):(z=Qn(m.type,m.key,m.props,null,p.mode,z),Ke(z,m),z.return=p,p=z)}return s(p);case bl:l:{for(q=m.key;g!==null;){if(g.key===q)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){i(p,g.sibling),z=n(g,m.children||[]),z.return=p,p=z;break l}else{i(p,g);break}else t(p,g);g=g.sibling}z=As(m,p.mode,z),z.return=p,p=z}return s(p);case Rl:return m=Hi(m),cl(p,g,m,z)}if(Tt(m))return B(p,g,m,z);if(Jl(m)){if(q=Jl(m),typeof q!="function")throw Error(f(150));return m=q.call(m),X(p,g,m,z)}if(typeof m.then=="function")return cl(p,g,Fn(m),z);if(m.$$typeof===ol)return cl(p,g,Vn(p,m),z);In(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,g!==null&&g.tag===6?(i(p,g.sibling),z=n(g,m),z.return=p,p=z):(i(p,g),z=js(m,p.mode,z),z.return=p,p=z),s(p)):i(p,g)}return function(p,g,m,z){try{Ve=0;var q=cl(p,g,m,z);return ce=null,q}catch(H){if(H===ge||H===Jn)throw H;var tl=ot(29,H,null,p.mode);return tl.lanes=z,tl.return=p,tl}}}var qi=xu(!0),Nu=xu(!1),ai=!1;function Ys(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qs(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function si(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function oi(l,t,i){var e=l.updateQueue;if(e===null)return null;if(e=e.shared,(el&2)!==0){var n=e.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t,t=$n(l),hu(l,null,i),t}return Ln(l,e,t,i),$n(l)}function Je(l,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var e=t.lanes;e&=l.pendingLanes,i|=e,t.lanes=i,Tr(l,i)}}function Xs(l,t){var i=l.updateQueue,e=l.alternate;if(e!==null&&(e=e.updateQueue,i===e)){var n=null,a=null;if(i=i.firstBaseUpdate,i!==null){do{var s={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};a===null?n=a=s:a=a.next=s,i=i.next}while(i!==null);a===null?n=a=t:a=a.next=t}else n=a=t;i={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:a,shared:e.shared,callbacks:e.callbacks},l.updateQueue=i;return}l=i.lastBaseUpdate,l===null?i.firstBaseUpdate=t:l.next=t,i.lastBaseUpdate=t}var Gs=!1;function We(){if(Gs){var l=ue;if(l!==null)throw l}}function Fe(l,t,i,e){Gs=!1;var n=l.updateQueue;ai=!1;var a=n.firstBaseUpdate,s=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var u=r,h=u.next;u.next=null,s===null?a=h:s.next=h,s=u;var w=l.alternate;w!==null&&(w=w.updateQueue,r=w.lastBaseUpdate,r!==s&&(r===null?w.firstBaseUpdate=h:r.next=h,w.lastBaseUpdate=u))}if(a!==null){var T=n.baseState;s=0,w=h=u=null,r=a;do{var y=r.lane&-536870913,v=y!==r.lane;if(v?(F&y)===y:(e&y)===y){y!==0&&y===re&&(Gs=!0),w!==null&&(w=w.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});l:{var B=l,X=r;y=t;var cl=i;switch(X.tag){case 1:if(B=X.payload,typeof B=="function"){T=B.call(cl,T,y);break l}T=B;break l;case 3:B.flags=B.flags&-65537|128;case 0:if(B=X.payload,y=typeof B=="function"?B.call(cl,T,y):B,y==null)break l;T=N({},T,y);break l;case 2:ai=!0}}y=r.callback,y!==null&&(l.flags|=64,v&&(l.flags|=8192),v=n.callbacks,v===null?n.callbacks=[y]:v.push(y))}else v={lane:y,tag:r.tag,payload:r.payload,callback:r.callback,next:null},w===null?(h=w=v,u=T):w=w.next=v,s|=y;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;v=r,r=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);w===null&&(u=T),n.baseState=u,n.firstBaseUpdate=h,n.lastBaseUpdate=w,a===null&&(n.shared.lanes=0),pi|=s,l.lanes=s,l.memoizedState=T}}function Uu(l,t){if(typeof l!="function")throw Error(f(191,l));l.call(t)}function Bu(l,t){var i=l.callbacks;if(i!==null)for(l.callbacks=null,l=0;l<i.length;l++)Uu(i[l],t)}var pe=c(null),Pn=c(0);function Ru(l,t){l=Kt,D(Pn,l),D(pe,t),Kt=l|t.baseLanes}function Ls(){D(Pn,Kt),D(pe,pe.current)}function $s(){Kt=Pn.current,j(pe),j(Pn)}var rt=c(null),St=null;function ri(l){var t=l.alternate;D(Ml,Ml.current&1),D(rt,l),St===null&&(t===null||pe.current!==null||t.memoizedState!==null)&&(St=l)}function Qs(l){D(Ml,Ml.current),D(rt,l),St===null&&(St=l)}function Hu(l){l.tag===22?(D(Ml,Ml.current),D(rt,l),St===null&&(St=l)):ui()}function ui(){D(Ml,Ml.current),D(rt,rt.current)}function ut(l){j(rt),St===l&&(St=null),j(Ml)}var Ml=c(0);function la(l){for(var t=l;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Fo(i)||Io(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,Q=null,ul=null,Ol=null,ta=!1,fe=!1,Xi=!1,ia=0,Ie=0,de=null,If=0;function Tl(){throw Error(f(321))}function ks(l,t){if(t===null)return!1;for(var i=0;i<t.length&&i<l.length;i++)if(!st(l[i],t[i]))return!1;return!0}function Zs(l,t,i,e,n,a){return Xt=a,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,S.H=l===null||l.memoizedState===null?wg:oo,Xi=!1,a=i(e,n),Xi=!1,fe&&(a=qu(t,i,e,n)),Yu(l),a}function Yu(l){S.H=tn;var t=ul!==null&&ul.next!==null;if(Xt=0,Ol=ul=Q=null,ta=!1,Ie=0,de=null,t)throw Error(f(300));l===null||xl||(l=l.dependencies,l!==null&&Zn(l)&&(xl=!0))}function qu(l,t,i,e){Q=l;var n=0;do{if(fe&&(de=null),Ie=0,fe=!1,25<=n)throw Error(f(301));if(n+=1,Ol=ul=null,l.updateQueue!=null){var a=l.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}S.H=Sg,a=t(i,e)}while(fe);return a}function Pf(){var l=S.H,t=l.useState()[0];return t=typeof t.then=="function"?Pe(t):t,l=l.useState()[0],(ul!==null?ul.memoizedState:null)!==l&&(Q.flags|=1024),t}function Vs(){var l=ia!==0;return ia=0,l}function Ks(l,t,i){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~i}function Js(l){if(ta){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ta=!1}Xt=0,Ol=ul=Q=null,fe=!1,Ie=ia=0,de=null}function Vl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ol===null?Q.memoizedState=Ol=l:Ol=Ol.next=l,Ol}function El(){if(ul===null){var l=Q.alternate;l=l!==null?l.memoizedState:null}else l=ul.next;var t=Ol===null?Q.memoizedState:Ol.next;if(t!==null)Ol=t,ul=l;else{if(l===null)throw Q.alternate===null?Error(f(467)):Error(f(310));ul=l,l={memoizedState:ul.memoizedState,baseState:ul.baseState,baseQueue:ul.baseQueue,queue:ul.queue,next:null},Ol===null?Q.memoizedState=Ol=l:Ol=Ol.next=l}return Ol}function ea(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pe(l){var t=Ie;return Ie+=1,de===null&&(de=[]),l=Eu(de,l,t),t=Q,(Ol===null?t.memoizedState:Ol.next)===null&&(t=t.alternate,S.H=t===null||t.memoizedState===null?wg:oo),l}function na(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return Pe(l);if(l.$$typeof===ol)return Gl(l)}throw Error(f(438,String(l)))}function Ws(l){var t=null,i=Q.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var e=Q.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=ea(),Q.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(l),e=0;e<l;e++)i[e]=Ft;return t.index++,i}function Gt(l,t){return typeof t=="function"?t(l):t}function aa(l){var t=El();return Fs(t,ul,l)}function Fs(l,t,i){var e=l.queue;if(e===null)throw Error(f(311));e.lastRenderedReducer=i;var n=l.baseQueue,a=e.pending;if(a!==null){if(n!==null){var s=n.next;n.next=a.next,a.next=s}t.baseQueue=n=a,e.pending=null}if(a=l.baseState,n===null)l.memoizedState=a;else{t=n.next;var r=s=null,u=null,h=t,w=!1;do{var T=h.lane&-536870913;if(T!==h.lane?(F&T)===T:(Xt&T)===T){var y=h.revertLane;if(y===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===re&&(w=!0);else if((Xt&y)===y){h=h.next,y===re&&(w=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(r=u=T,s=a):u=u.next=T,Q.lanes|=y,pi|=y;T=h.action,Xi&&i(a,T),a=h.hasEagerState?h.eagerState:i(a,T)}else y={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(r=u=y,s=a):u=u.next=y,Q.lanes|=T,pi|=T;h=h.next}while(h!==null&&h!==t);if(u===null?s=a:u.next=r,!st(a,l.memoizedState)&&(xl=!0,w&&(i=ue,i!==null)))throw i;l.memoizedState=a,l.baseState=s,l.baseQueue=u,e.lastRenderedState=a}return n===null&&(e.lanes=0),[l.memoizedState,e.dispatch]}function Is(l){var t=El(),i=t.queue;if(i===null)throw Error(f(311));i.lastRenderedReducer=l;var e=i.dispatch,n=i.pending,a=t.memoizedState;if(n!==null){i.pending=null;var s=n=n.next;do a=l(a,s.action),s=s.next;while(s!==n);st(a,t.memoizedState)||(xl=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),i.lastRenderedState=a}return[a,e]}function Xu(l,t,i){var e=Q,n=El(),a=ll;if(a){if(i===void 0)throw Error(f(407));i=i()}else i=t();var s=!st((ul||n).memoizedState,i);if(s&&(n.memoizedState=i,xl=!0),n=n.queue,to($u.bind(null,e,n,l),[l]),n.getSnapshot!==t||s||Ol!==null&&Ol.memoizedState.tag&1){if(e.flags|=2048,me(9,{destroy:void 0},Lu.bind(null,e,n,i,t),null),fl===null)throw Error(f(349));a||(Xt&127)!==0||Gu(e,t,i)}return i}function Gu(l,t,i){l.flags|=16384,l={getSnapshot:t,value:i},t=Q.updateQueue,t===null?(t=ea(),Q.updateQueue=t,t.stores=[l]):(i=t.stores,i===null?t.stores=[l]:i.push(l))}function Lu(l,t,i,e){t.value=i,t.getSnapshot=e,Qu(t)&&ku(l)}function $u(l,t,i){return i(function(){Qu(t)&&ku(l)})}function Qu(l){var t=l.getSnapshot;l=l.value;try{var i=t();return!st(l,i)}catch{return!0}}function ku(l){var t=Oi(l,2);t!==null&&it(t,l,2)}function Ps(l){var t=Vl();if(typeof l=="function"){var i=l;if(l=i(),Xi){It(!0);try{i()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Zu(l,t,i,e){return l.baseState=i,Fs(l,ul,typeof e=="function"?e:Gt)}function ld(l,t,i,e,n){if(ra(l))throw Error(f(485));if(l=t.action,l!==null){var a={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){a.listeners.push(s)}};S.T!==null?i(!0):a.isTransition=!1,e(a),i=t.pending,i===null?(a.next=t.pending=a,Vu(t,a)):(a.next=i.next,t.pending=i.next=a)}}function Vu(l,t){var i=t.action,e=t.payload,n=l.state;if(t.isTransition){var a=S.T,s={};S.T=s;try{var r=i(n,e),u=S.S;u!==null&&u(s,r),Ku(l,t,r)}catch(h){lo(l,t,h)}finally{a!==null&&s.types!==null&&(a.types=s.types),S.T=a}}else try{a=i(n,e),Ku(l,t,a)}catch(h){lo(l,t,h)}}function Ku(l,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(e){Ju(l,t,e)},function(e){return lo(l,t,e)}):Ju(l,t,i)}function Ju(l,t,i){t.status="fulfilled",t.value=i,Wu(t),l.state=i,t=l.pending,t!==null&&(i=t.next,i===t?l.pending=null:(i=i.next,t.next=i,Vu(l,i)))}function lo(l,t,i){var e=l.pending;if(l.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=i,Wu(t),t=t.next;while(t!==e)}l.action=null}function Wu(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fu(l,t){return t}function Iu(l,t){if(ll){var i=fl.formState;if(i!==null){l:{var e=Q;if(ll){if(dl){t:{for(var n=dl,a=wt;n.nodeType!==8;){if(!a){n=null;break t}if(n=zt(n.nextSibling),n===null){n=null;break t}}a=n.data,n=a==="F!"||a==="F"?n:null}if(n){dl=zt(n.nextSibling),e=n.data==="F!";break l}}ei(e)}e=!1}e&&(t=i[0])}}return i=Vl(),i.memoizedState=i.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fu,lastRenderedState:t},i.queue=e,i=yg.bind(null,Q,e),e.dispatch=i,e=Ps(!1),a=so.bind(null,Q,!1,e.queue),e=Vl(),n={state:t,dispatch:null,action:l,pending:null},e.queue=n,i=ld.bind(null,Q,n,a,i),n.dispatch=i,e.memoizedState=l,[t,i,!1]}function Pu(l){var t=El();return lg(t,ul,l)}function lg(l,t,i){if(t=Fs(l,t,Fu)[0],l=aa(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=Pe(t)}catch(s){throw s===ge?Jn:s}else e=t;t=El();var n=t.queue,a=n.dispatch;return i!==t.memoizedState&&(Q.flags|=2048,me(9,{destroy:void 0},td.bind(null,n,i),null)),[e,a,l]}function td(l,t){l.action=t}function tg(l){var t=El(),i=ul;if(i!==null)return lg(t,i,l);El(),t=t.memoizedState,i=El();var e=i.queue.dispatch;return i.memoizedState=l,[t,e,!1]}function me(l,t,i,e){return l={tag:l,create:i,deps:e,inst:t,next:null},t=Q.updateQueue,t===null&&(t=ea(),Q.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=l.next=l:(e=i.next,i.next=l,l.next=e,t.lastEffect=l),l}function ig(){return El().memoizedState}function sa(l,t,i,e){var n=Vl();Q.flags|=l,n.memoizedState=me(1|t,{destroy:void 0},i,e===void 0?null:e)}function oa(l,t,i,e){var n=El();e=e===void 0?null:e;var a=n.memoizedState.inst;ul!==null&&e!==null&&ks(e,ul.memoizedState.deps)?n.memoizedState=me(t,a,i,e):(Q.flags|=l,n.memoizedState=me(1|t,a,i,e))}function eg(l,t){sa(8390656,8,l,t)}function to(l,t){oa(2048,8,l,t)}function id(l){Q.flags|=4;var t=Q.updateQueue;if(t===null)t=ea(),Q.updateQueue=t,t.events=[l];else{var i=t.events;i===null?t.events=[l]:i.push(l)}}function ng(l){var t=El().memoizedState;return id({ref:t,nextImpl:l}),function(){if((el&2)!==0)throw Error(f(440));return t.impl.apply(void 0,arguments)}}function ag(l,t){return oa(4,2,l,t)}function sg(l,t){return oa(4,4,l,t)}function og(l,t){if(typeof t=="function"){l=l();var i=t(l);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function rg(l,t,i){i=i!=null?i.concat([l]):null,oa(4,4,og.bind(null,t,l),i)}function io(){}function ug(l,t){var i=El();t=t===void 0?null:t;var e=i.memoizedState;return t!==null&&ks(t,e[1])?e[0]:(i.memoizedState=[l,t],l)}function gg(l,t){var i=El();t=t===void 0?null:t;var e=i.memoizedState;if(t!==null&&ks(t,e[1]))return e[0];if(e=l(),Xi){It(!0);try{l()}finally{It(!1)}}return i.memoizedState=[e,t],e}function eo(l,t,i){return i===void 0||(Xt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=i,l=cc(),Q.lanes|=l,pi|=l,i)}function cg(l,t,i,e){return st(i,t)?i:pe.current!==null?(l=eo(l,i,e),st(l,t)||(xl=!0),l):(Xt&42)===0||(Xt&1073741824)!==0&&(F&261930)===0?(xl=!0,l.memoizedState=i):(l=cc(),Q.lanes|=l,pi|=l,t)}function pg(l,t,i,e,n){var a=M.p;M.p=a!==0&&8>a?a:8;var s=S.T,r={};S.T=r,so(l,!1,t,i);try{var u=n(),h=S.S;if(h!==null&&h(r,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var w=Ff(u,e);ln(l,t,w,pt(l))}else ln(l,t,e,pt(l))}catch(T){ln(l,t,{then:function(){},status:"rejected",reason:T},pt())}finally{M.p=a,s!==null&&r.types!==null&&(s.types=r.types),S.T=s}}function ed(){}function no(l,t,i,e){if(l.tag!==5)throw Error(f(476));var n=fg(l).queue;pg(l,n,t,G,i===null?ed:function(){return dg(l),i(e)})}function fg(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:G},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:i},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function dg(l){var t=fg(l);t.next===null&&(t=l.alternate.memoizedState),ln(l,t.next.queue,{},pt())}function ao(){return Gl(bn)}function mg(){return El().memoizedState}function hg(){return El().memoizedState}function nd(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var i=pt();l=si(i);var e=oi(t,l,i);e!==null&&(it(e,t,i),Je(e,t,i)),t={cache:Us()},l.payload=t;return}t=t.return}}function ad(l,t,i){var e=pt();i={lane:e,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ra(l)?bg(t,i):(i=_s(l,t,i,e),i!==null&&(it(i,l,e),vg(i,t,e)))}function yg(l,t,i){var e=pt();ln(l,t,i,e)}function ln(l,t,i,e){var n={lane:e,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ra(l))bg(t,n);else{var a=l.alternate;if(l.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,r=a(s,i);if(n.hasEagerState=!0,n.eagerState=r,st(r,s))return Ln(l,t,n,0),fl===null&&Gn(),!1}catch{}if(i=_s(l,t,n,e),i!==null)return it(i,l,e),vg(i,t,e),!0}return!1}function so(l,t,i,e){if(e={lane:2,revertLane:qo(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ra(l)){if(t)throw Error(f(479))}else t=_s(l,i,e,2),t!==null&&it(t,l,2)}function ra(l){var t=l.alternate;return l===Q||t!==null&&t===Q}function bg(l,t){fe=ta=!0;var i=l.pending;i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t}function vg(l,t,i){if((i&4194048)!==0){var e=t.lanes;e&=l.pendingLanes,i|=e,t.lanes=i,Tr(l,i)}}var tn={readContext:Gl,use:na,useCallback:Tl,useContext:Tl,useEffect:Tl,useImperativeHandle:Tl,useLayoutEffect:Tl,useInsertionEffect:Tl,useMemo:Tl,useReducer:Tl,useRef:Tl,useState:Tl,useDebugValue:Tl,useDeferredValue:Tl,useTransition:Tl,useSyncExternalStore:Tl,useId:Tl,useHostTransitionStatus:Tl,useFormState:Tl,useActionState:Tl,useOptimistic:Tl,useMemoCache:Tl,useCacheRefresh:Tl};tn.useEffectEvent=Tl;var wg={readContext:Gl,use:na,useCallback:function(l,t){return Vl().memoizedState=[l,t===void 0?null:t],l},useContext:Gl,useEffect:eg,useImperativeHandle:function(l,t,i){i=i!=null?i.concat([l]):null,sa(4194308,4,og.bind(null,t,l),i)},useLayoutEffect:function(l,t){return sa(4194308,4,l,t)},useInsertionEffect:function(l,t){sa(4,2,l,t)},useMemo:function(l,t){var i=Vl();t=t===void 0?null:t;var e=l();if(Xi){It(!0);try{l()}finally{It(!1)}}return i.memoizedState=[e,t],e},useReducer:function(l,t,i){var e=Vl();if(i!==void 0){var n=i(t);if(Xi){It(!0);try{i(t)}finally{It(!1)}}}else n=t;return e.memoizedState=e.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},e.queue=l,l=l.dispatch=ad.bind(null,Q,l),[e.memoizedState,l]},useRef:function(l){var t=Vl();return l={current:l},t.memoizedState=l},useState:function(l){l=Ps(l);var t=l.queue,i=yg.bind(null,Q,t);return t.dispatch=i,[l.memoizedState,i]},useDebugValue:io,useDeferredValue:function(l,t){var i=Vl();return eo(i,l,t)},useTransition:function(){var l=Ps(!1);return l=pg.bind(null,Q,l.queue,!0,!1),Vl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,i){var e=Q,n=Vl();if(ll){if(i===void 0)throw Error(f(407));i=i()}else{if(i=t(),fl===null)throw Error(f(349));(F&127)!==0||Gu(e,t,i)}n.memoizedState=i;var a={value:i,getSnapshot:t};return n.queue=a,eg($u.bind(null,e,a,l),[l]),e.flags|=2048,me(9,{destroy:void 0},Lu.bind(null,e,a,i,t),null),i},useId:function(){var l=Vl(),t=fl.identifierPrefix;if(ll){var i=Et,e=Mt;i=(e&~(1<<32-at(e)-1)).toString(32)+i,t="_"+t+"R_"+i,i=ia++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=If++,t="_"+t+"r_"+i.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:ao,useFormState:Iu,useActionState:Iu,useOptimistic:function(l){var t=Vl();t.memoizedState=t.baseState=l;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=so.bind(null,Q,!0,i),i.dispatch=t,[l,t]},useMemoCache:Ws,useCacheRefresh:function(){return Vl().memoizedState=nd.bind(null,Q)},useEffectEvent:function(l){var t=Vl(),i={impl:l};return t.memoizedState=i,function(){if((el&2)!==0)throw Error(f(440));return i.impl.apply(void 0,arguments)}}},oo={readContext:Gl,use:na,useCallback:ug,useContext:Gl,useEffect:to,useImperativeHandle:rg,useInsertionEffect:ag,useLayoutEffect:sg,useMemo:gg,useReducer:aa,useRef:ig,useState:function(){return aa(Gt)},useDebugValue:io,useDeferredValue:function(l,t){var i=El();return cg(i,ul.memoizedState,l,t)},useTransition:function(){var l=aa(Gt)[0],t=El().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Xu,useId:mg,useHostTransitionStatus:ao,useFormState:Pu,useActionState:Pu,useOptimistic:function(l,t){var i=El();return Zu(i,ul,l,t)},useMemoCache:Ws,useCacheRefresh:hg};oo.useEffectEvent=ng;var Sg={readContext:Gl,use:na,useCallback:ug,useContext:Gl,useEffect:to,useImperativeHandle:rg,useInsertionEffect:ag,useLayoutEffect:sg,useMemo:gg,useReducer:Is,useRef:ig,useState:function(){return Is(Gt)},useDebugValue:io,useDeferredValue:function(l,t){var i=El();return ul===null?eo(i,l,t):cg(i,ul.memoizedState,l,t)},useTransition:function(){var l=Is(Gt)[0],t=El().memoizedState;return[typeof l=="boolean"?l:Pe(l),t]},useSyncExternalStore:Xu,useId:mg,useHostTransitionStatus:ao,useFormState:tg,useActionState:tg,useOptimistic:function(l,t){var i=El();return ul!==null?Zu(i,ul,l,t):(i.baseState=l,[l,i.queue.dispatch])},useMemoCache:Ws,useCacheRefresh:hg};Sg.useEffectEvent=ng;function ro(l,t,i,e){t=l.memoizedState,i=i(e,t),i=i==null?t:N({},t,i),l.memoizedState=i,l.lanes===0&&(l.updateQueue.baseState=i)}var uo={enqueueSetState:function(l,t,i){l=l._reactInternals;var e=pt(),n=si(e);n.payload=t,i!=null&&(n.callback=i),t=oi(l,n,e),t!==null&&(it(t,l,e),Je(t,l,e))},enqueueReplaceState:function(l,t,i){l=l._reactInternals;var e=pt(),n=si(e);n.tag=1,n.payload=t,i!=null&&(n.callback=i),t=oi(l,n,e),t!==null&&(it(t,l,e),Je(t,l,e))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var i=pt(),e=si(i);e.tag=2,t!=null&&(e.callback=t),t=oi(l,e,i),t!==null&&(it(t,l,i),Je(t,l,i))}};function zg(l,t,i,e,n,a,s){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(e,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ge(i,e)||!Ge(n,a):!0}function _g(l,t,i,e){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,e),t.state!==l&&uo.enqueueReplaceState(t,t.state,null)}function Gi(l,t){var i=t;if("ref"in t){i={};for(var e in t)e!=="ref"&&(i[e]=t[e])}if(l=l.defaultProps){i===t&&(i=N({},i));for(var n in l)i[n]===void 0&&(i[n]=l[n])}return i}function Tg(l){Xn(l)}function jg(l){console.error(l)}function Ag(l){Xn(l)}function ua(l,t){try{var i=l.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Cg(l,t,i){try{var e=l.onCaughtError;e(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function go(l,t,i){return i=si(i),i.tag=3,i.payload={element:null},i.callback=function(){ua(l,t)},i}function Mg(l){return l=si(l),l.tag=3,l}function Eg(l,t,i,e){var n=i.type.getDerivedStateFromError;if(typeof n=="function"){var a=e.value;l.payload=function(){return n(a)},l.callback=function(){Cg(t,i,e)}}var s=i.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(l.callback=function(){Cg(t,i,e),typeof n!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var r=e.stack;this.componentDidCatch(e.value,{componentStack:r!==null?r:""})})}function sd(l,t,i,e,n){if(i.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=i.alternate,t!==null&&oe(t,i,n,!0),i=rt.current,i!==null){switch(i.tag){case 31:case 13:return St===null?Sa():i.alternate===null&&jl===0&&(jl=3),i.flags&=-257,i.flags|=65536,i.lanes=n,e===Wn?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([e]):t.add(e),Ro(l,e,n)),!1;case 22:return i.flags|=65536,e===Wn?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([e]):i.add(e)),Ro(l,e,n)),!1}throw Error(f(435,i.tag))}return Ro(l,e,n),Sa(),!1}if(ll)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,e!==Es&&(l=Error(f(422),{cause:e}),Qe(yt(l,i)))):(e!==Es&&(t=Error(f(423),{cause:e}),Qe(yt(t,i))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,e=yt(e,i),n=go(l.stateNode,e,n),Xs(l,n),jl!==4&&(jl=2)),!1;var a=Error(f(520),{cause:e});if(a=yt(a,i),gn===null?gn=[a]:gn.push(a),jl!==4&&(jl=2),t===null)return!0;e=yt(e,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,l=n&-n,i.lanes|=l,l=go(i.stateNode,e,l),Xs(i,l),!1;case 1:if(t=i.type,a=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(fi===null||!fi.has(a))))return i.flags|=65536,n&=-n,i.lanes|=n,n=Mg(n),Eg(n,l,i,e),Xs(i,n),!1}i=i.return}while(i!==null);return!1}var co=Error(f(461)),xl=!1;function Ll(l,t,i,e){t.child=l===null?Nu(t,null,i,e):qi(t,l.child,i,e)}function Dg(l,t,i,e,n){i=i.render;var a=t.ref;if("ref"in e){var s={};for(var r in e)r!=="ref"&&(s[r]=e[r])}else s=e;return Bi(t),e=Zs(l,t,i,s,a,n),r=Vs(),l!==null&&!xl?(Ks(l,t,n),Lt(l,t,n)):(ll&&r&&Cs(t),t.flags|=1,Ll(l,t,e,n),t.child)}function Og(l,t,i,e,n){if(l===null){var a=i.type;return typeof a=="function"&&!Ts(a)&&a.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=a,xg(l,t,a,e,n)):(l=Qn(i.type,null,e,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(a=l.child,!wo(l,n)){var s=a.memoizedProps;if(i=i.compare,i=i!==null?i:Ge,i(s,e)&&l.ref===t.ref)return Lt(l,t,n)}return t.flags|=1,l=Rt(a,e),l.ref=t.ref,l.return=t,t.child=l}function xg(l,t,i,e,n){if(l!==null){var a=l.memoizedProps;if(Ge(a,e)&&l.ref===t.ref)if(xl=!1,t.pendingProps=e=a,wo(l,n))(l.flags&131072)!==0&&(xl=!0);else return t.lanes=l.lanes,Lt(l,t,n)}return po(l,t,i,e,n)}function Ng(l,t,i,e){var n=e.children,a=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|i:i,l!==null){for(e=t.child=l.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~a}else e=0,t.child=null;return Ug(l,t,a,i,e)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&Kn(t,a!==null?a.cachePool:null),a!==null?Ru(t,a):Ls(),Hu(t);else return e=t.lanes=536870912,Ug(l,t,a!==null?a.baseLanes|i:i,i,e)}else a!==null?(Kn(t,a.cachePool),Ru(t,a),ui(),t.memoizedState=null):(l!==null&&Kn(t,null),Ls(),ui());return Ll(l,t,n,i),t.child}function en(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ug(l,t,i,e,n){var a=Rs();return a=a===null?null:{parent:Dl._currentValue,pool:a},t.memoizedState={baseLanes:i,cachePool:a},l!==null&&Kn(t,null),Ls(),Hu(t),l!==null&&oe(l,t,e,!0),t.childLanes=n,null}function ga(l,t){return t=pa({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Bg(l,t,i){return qi(t,l.child,null,i),l=ga(t,t.pendingProps),l.flags|=2,ut(t),t.memoizedState=null,l}function od(l,t,i){var e=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(e.mode==="hidden")return l=ga(t,e),t.lanes=536870912,en(null,l);if(Qs(t),(l=dl)?(l=Vc(l,wt),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ti!==null?{id:Mt,overflow:Et}:null,retryLane:536870912,hydrationErrors:null},i=bu(l),i.return=t,t.child=i,Xl=t,dl=null)):l=null,l===null)throw ei(t);return t.lanes=536870912,null}return ga(t,e)}var a=l.memoizedState;if(a!==null){var s=a.dehydrated;if(Qs(t),n)if(t.flags&256)t.flags&=-257,t=Bg(l,t,i);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(f(558));else if(xl||oe(l,t,i,!1),n=(i&l.childLanes)!==0,xl||n){if(e=fl,e!==null&&(s=jr(e,i),s!==0&&s!==a.retryLane))throw a.retryLane=s,Oi(l,s),it(e,l,s),co;Sa(),t=Bg(l,t,i)}else l=a.treeContext,dl=zt(s.nextSibling),Xl=t,ll=!0,ii=null,wt=!1,l!==null&&Su(t,l),t=ga(t,e),t.flags|=4096;return t}return l=Rt(l.child,{mode:e.mode,children:e.children}),l.ref=t.ref,t.child=l,l.return=t,l}function ca(l,t){var i=t.ref;if(i===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(f(284));(l===null||l.ref!==i)&&(t.flags|=4194816)}}function po(l,t,i,e,n){return Bi(t),i=Zs(l,t,i,e,void 0,n),e=Vs(),l!==null&&!xl?(Ks(l,t,n),Lt(l,t,n)):(ll&&e&&Cs(t),t.flags|=1,Ll(l,t,i,n),t.child)}function Rg(l,t,i,e,n,a){return Bi(t),t.updateQueue=null,i=qu(t,e,i,n),Yu(l),e=Vs(),l!==null&&!xl?(Ks(l,t,a),Lt(l,t,a)):(ll&&e&&Cs(t),t.flags|=1,Ll(l,t,i,a),t.child)}function Hg(l,t,i,e,n){if(Bi(t),t.stateNode===null){var a=ee,s=i.contextType;typeof s=="object"&&s!==null&&(a=Gl(s)),a=new i(e,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=uo,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=e,a.state=t.memoizedState,a.refs={},Ys(t),s=i.contextType,a.context=typeof s=="object"&&s!==null?Gl(s):ee,a.state=t.memoizedState,s=i.getDerivedStateFromProps,typeof s=="function"&&(ro(t,i,s,e),a.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&uo.enqueueReplaceState(a,a.state,null),Fe(t,e,a,n),We(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(l===null){a=t.stateNode;var r=t.memoizedProps,u=Gi(i,r);a.props=u;var h=a.context,w=i.contextType;s=ee,typeof w=="object"&&w!==null&&(s=Gl(w));var T=i.getDerivedStateFromProps;w=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,w||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r||h!==s)&&_g(t,a,e,s),ai=!1;var y=t.memoizedState;a.state=y,Fe(t,e,a,n),We(),h=t.memoizedState,r||y!==h||ai?(typeof T=="function"&&(ro(t,i,T,e),h=t.memoizedState),(u=ai||zg(t,i,u,e,y,h,s))?(w||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=h),a.props=e,a.state=h,a.context=s,e=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{a=t.stateNode,qs(l,t),s=t.memoizedProps,w=Gi(i,s),a.props=w,T=t.pendingProps,y=a.context,h=i.contextType,u=ee,typeof h=="object"&&h!==null&&(u=Gl(h)),r=i.getDerivedStateFromProps,(h=typeof r=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==T||y!==u)&&_g(t,a,e,u),ai=!1,y=t.memoizedState,a.state=y,Fe(t,e,a,n),We();var v=t.memoizedState;s!==T||y!==v||ai||l!==null&&l.dependencies!==null&&Zn(l.dependencies)?(typeof r=="function"&&(ro(t,i,r,e),v=t.memoizedState),(w=ai||zg(t,i,w,e,y,v,u)||l!==null&&l.dependencies!==null&&Zn(l.dependencies))?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(e,v,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(e,v,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=v),a.props=e,a.state=v,a.context=u,e=w):(typeof a.componentDidUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),e=!1)}return a=e,ca(l,t),e=(t.flags&128)!==0,a||e?(a=t.stateNode,i=e&&typeof i.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,l!==null&&e?(t.child=qi(t,l.child,null,n),t.child=qi(t,null,i,n)):Ll(l,t,i,n),t.memoizedState=a.state,l=t.child):l=Lt(l,t,n),l}function Yg(l,t,i,e){return Ni(),t.flags|=256,Ll(l,t,i,e),t.child}var fo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mo(l){return{baseLanes:l,cachePool:Cu()}}function ho(l,t,i){return l=l!==null?l.childLanes&~i:0,t&&(l|=ct),l}function qg(l,t,i){var e=t.pendingProps,n=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=l!==null&&l.memoizedState===null?!1:(Ml.current&2)!==0),s&&(n=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(n?ri(t):ui(),(l=dl)?(l=Vc(l,wt),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ti!==null?{id:Mt,overflow:Et}:null,retryLane:536870912,hydrationErrors:null},i=bu(l),i.return=t,t.child=i,Xl=t,dl=null)):l=null,l===null)throw ei(t);return Io(l)?t.lanes=32:t.lanes=536870912,null}var r=e.children;return e=e.fallback,n?(ui(),n=t.mode,r=pa({mode:"hidden",children:r},n),e=xi(e,n,i,null),r.return=t,e.return=t,r.sibling=e,t.child=r,e=t.child,e.memoizedState=mo(i),e.childLanes=ho(l,s,i),t.memoizedState=fo,en(null,e)):(ri(t),yo(t,r))}var u=l.memoizedState;if(u!==null&&(r=u.dehydrated,r!==null)){if(a)t.flags&256?(ri(t),t.flags&=-257,t=bo(l,t,i)):t.memoizedState!==null?(ui(),t.child=l.child,t.flags|=128,t=null):(ui(),r=e.fallback,n=t.mode,e=pa({mode:"visible",children:e.children},n),r=xi(r,n,i,null),r.flags|=2,e.return=t,r.return=t,e.sibling=r,t.child=e,qi(t,l.child,null,i),e=t.child,e.memoizedState=mo(i),e.childLanes=ho(l,s,i),t.memoizedState=fo,t=en(null,e));else if(ri(t),Io(r)){if(s=r.nextSibling&&r.nextSibling.dataset,s)var h=s.dgst;s=h,e=Error(f(419)),e.stack="",e.digest=s,Qe({value:e,source:null,stack:null}),t=bo(l,t,i)}else if(xl||oe(l,t,i,!1),s=(i&l.childLanes)!==0,xl||s){if(s=fl,s!==null&&(e=jr(s,i),e!==0&&e!==u.retryLane))throw u.retryLane=e,Oi(l,e),it(s,l,e),co;Fo(r)||Sa(),t=bo(l,t,i)}else Fo(r)?(t.flags|=192,t.child=l.child,t=null):(l=u.treeContext,dl=zt(r.nextSibling),Xl=t,ll=!0,ii=null,wt=!1,l!==null&&Su(t,l),t=yo(t,e.children),t.flags|=4096);return t}return n?(ui(),r=e.fallback,n=t.mode,u=l.child,h=u.sibling,e=Rt(u,{mode:"hidden",children:e.children}),e.subtreeFlags=u.subtreeFlags&65011712,h!==null?r=Rt(h,r):(r=xi(r,n,i,null),r.flags|=2),r.return=t,e.return=t,e.sibling=r,t.child=e,en(null,e),e=t.child,r=l.child.memoizedState,r===null?r=mo(i):(n=r.cachePool,n!==null?(u=Dl._currentValue,n=n.parent!==u?{parent:u,pool:u}:n):n=Cu(),r={baseLanes:r.baseLanes|i,cachePool:n}),e.memoizedState=r,e.childLanes=ho(l,s,i),t.memoizedState=fo,en(l.child,e)):(ri(t),i=l.child,l=i.sibling,i=Rt(i,{mode:"visible",children:e.children}),i.return=t,i.sibling=null,l!==null&&(s=t.deletions,s===null?(t.deletions=[l],t.flags|=16):s.push(l)),t.child=i,t.memoizedState=null,i)}function yo(l,t){return t=pa({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function pa(l,t){return l=ot(22,l,null,t),l.lanes=0,l}function bo(l,t,i){return qi(t,l.child,null,i),l=yo(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function Xg(l,t,i){l.lanes|=t;var e=l.alternate;e!==null&&(e.lanes|=t),xs(l.return,t,i)}function vo(l,t,i,e,n,a){var s=l.memoizedState;s===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:i,tailMode:n,treeForkCount:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=e,s.tail=i,s.tailMode=n,s.treeForkCount=a)}function Gg(l,t,i){var e=t.pendingProps,n=e.revealOrder,a=e.tail;e=e.children;var s=Ml.current,r=(s&2)!==0;if(r?(s=s&1|2,t.flags|=128):s&=1,D(Ml,s),Ll(l,t,e,i),e=ll?$e:0,!r&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&Xg(l,i,t);else if(l.tag===19)Xg(l,i,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"forwards":for(i=t.child,n=null;i!==null;)l=i.alternate,l!==null&&la(l)===null&&(n=i),i=i.sibling;i=n,i===null?(n=t.child,t.child=null):(n=i.sibling,i.sibling=null),vo(t,!1,n,i,a,e);break;case"backwards":case"unstable_legacy-backwards":for(i=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&la(l)===null){t.child=n;break}l=n.sibling,n.sibling=i,i=n,n=l}vo(t,!0,i,null,a,e);break;case"together":vo(t,!1,null,null,void 0,e);break;default:t.memoizedState=null}return t.child}function Lt(l,t,i){if(l!==null&&(t.dependencies=l.dependencies),pi|=t.lanes,(i&t.childLanes)===0)if(l!==null){if(oe(l,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(f(153));if(t.child!==null){for(l=t.child,i=Rt(l,l.pendingProps),t.child=i,i.return=t;l.sibling!==null;)l=l.sibling,i=i.sibling=Rt(l,l.pendingProps),i.return=t;i.sibling=null}return t.child}function wo(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Zn(l)))}function rd(l,t,i){switch(t.tag){case 3:Zl(t,t.stateNode.containerInfo),ni(t,Dl,l.memoizedState.cache),Ni();break;case 27:case 5:Me(t);break;case 4:Zl(t,t.stateNode.containerInfo);break;case 10:ni(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qs(t),null;break;case 13:var e=t.memoizedState;if(e!==null)return e.dehydrated!==null?(ri(t),t.flags|=128,null):(i&t.child.childLanes)!==0?qg(l,t,i):(ri(t),l=Lt(l,t,i),l!==null?l.sibling:null);ri(t);break;case 19:var n=(l.flags&128)!==0;if(e=(i&t.childLanes)!==0,e||(oe(l,t,i,!1),e=(i&t.childLanes)!==0),n){if(e)return Gg(l,t,i);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(Ml,Ml.current),e)break;return null;case 22:return t.lanes=0,Ng(l,t,i,t.pendingProps);case 24:ni(t,Dl,l.memoizedState.cache)}return Lt(l,t,i)}function Lg(l,t,i){if(l!==null)if(l.memoizedProps!==t.pendingProps)xl=!0;else{if(!wo(l,i)&&(t.flags&128)===0)return xl=!1,rd(l,t,i);xl=(l.flags&131072)!==0}else xl=!1,ll&&(t.flags&1048576)!==0&&wu(t,$e,t.index);switch(t.lanes=0,t.tag){case 16:l:{var e=t.pendingProps;if(l=Hi(t.elementType),t.type=l,typeof l=="function")Ts(l)?(e=Gi(l,e),t.tag=1,t=Hg(null,t,l,e,i)):(t.tag=0,t=po(null,t,l,e,i));else{if(l!=null){var n=l.$$typeof;if(n===_l){t.tag=11,t=Dg(null,t,l,e,i);break l}else if(n===V){t.tag=14,t=Og(null,t,l,e,i);break l}}throw t=xt(l)||l,Error(f(306,t,""))}}return t;case 0:return po(l,t,t.type,t.pendingProps,i);case 1:return e=t.type,n=Gi(e,t.pendingProps),Hg(l,t,e,n,i);case 3:l:{if(Zl(t,t.stateNode.containerInfo),l===null)throw Error(f(387));e=t.pendingProps;var a=t.memoizedState;n=a.element,qs(l,t),Fe(t,e,null,i);var s=t.memoizedState;if(e=s.cache,ni(t,Dl,e),e!==a.cache&&Ns(t,[Dl],i,!0),We(),e=s.element,a.isDehydrated)if(a={element:e,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Yg(l,t,e,i);break l}else if(e!==n){n=yt(Error(f(424)),t),Qe(n),t=Yg(l,t,e,i);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(dl=zt(l.firstChild),Xl=t,ll=!0,ii=null,wt=!0,i=Nu(t,null,e,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Ni(),e===n){t=Lt(l,t,i);break l}Ll(l,t,e,i)}t=t.child}return t;case 26:return ca(l,t),l===null?(i=Pc(t.type,null,t.pendingProps,null))?t.memoizedState=i:ll||(i=t.type,l=t.pendingProps,e=Ma(K.current).createElement(i),e[ql]=t,e[Wl]=l,$l(e,i,l),Hl(e),t.stateNode=e):t.memoizedState=Pc(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Me(t),l===null&&ll&&(e=t.stateNode=Wc(t.type,t.pendingProps,K.current),Xl=t,wt=!0,n=dl,yi(t.type)?(Po=n,dl=zt(e.firstChild)):dl=n),Ll(l,t,t.pendingProps.children,i),ca(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((n=e=dl)&&(e=Yd(e,t.type,t.pendingProps,wt),e!==null?(t.stateNode=e,Xl=t,dl=zt(e.firstChild),wt=!1,n=!0):n=!1),n||ei(t)),Me(t),n=t.type,a=t.pendingProps,s=l!==null?l.memoizedProps:null,e=a.children,Ko(n,a)?e=null:s!==null&&Ko(n,s)&&(t.flags|=32),t.memoizedState!==null&&(n=Zs(l,t,Pf,null,null,i),bn._currentValue=n),ca(l,t),Ll(l,t,e,i),t.child;case 6:return l===null&&ll&&((l=i=dl)&&(i=qd(i,t.pendingProps,wt),i!==null?(t.stateNode=i,Xl=t,dl=null,l=!0):l=!1),l||ei(t)),null;case 13:return qg(l,t,i);case 4:return Zl(t,t.stateNode.containerInfo),e=t.pendingProps,l===null?t.child=qi(t,null,e,i):Ll(l,t,e,i),t.child;case 11:return Dg(l,t,t.type,t.pendingProps,i);case 7:return Ll(l,t,t.pendingProps,i),t.child;case 8:return Ll(l,t,t.pendingProps.children,i),t.child;case 12:return Ll(l,t,t.pendingProps.children,i),t.child;case 10:return e=t.pendingProps,ni(t,t.type,e.value),Ll(l,t,e.children,i),t.child;case 9:return n=t.type._context,e=t.pendingProps.children,Bi(t),n=Gl(n),e=e(n),t.flags|=1,Ll(l,t,e,i),t.child;case 14:return Og(l,t,t.type,t.pendingProps,i);case 15:return xg(l,t,t.type,t.pendingProps,i);case 19:return Gg(l,t,i);case 31:return od(l,t,i);case 22:return Ng(l,t,i,t.pendingProps);case 24:return Bi(t),e=Gl(Dl),l===null?(n=Rs(),n===null&&(n=fl,a=Us(),n.pooledCache=a,a.refCount++,a!==null&&(n.pooledCacheLanes|=i),n=a),t.memoizedState={parent:e,cache:n},Ys(t),ni(t,Dl,n)):((l.lanes&i)!==0&&(qs(l,t),Fe(t,null,null,i),We()),n=l.memoizedState,a=t.memoizedState,n.parent!==e?(n={parent:e,cache:e},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ni(t,Dl,e)):(e=a.cache,ni(t,Dl,e),e!==n.cache&&Ns(t,[Dl],i,!0))),Ll(l,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(f(156,t.tag))}function $t(l){l.flags|=4}function So(l,t,i,e,n){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(mc())l.flags|=8192;else throw Yi=Wn,Hs}else l.flags&=-16777217}function $g(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!np(t))if(mc())l.flags|=8192;else throw Yi=Wn,Hs}function fa(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?zr():536870912,l.lanes|=t,ve|=t)}function nn(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?l.tail=null:i.sibling=null;break;case"collapsed":i=l.tail;for(var e=null;i!==null;)i.alternate!==null&&(e=i),i=i.sibling;e===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:e.sibling=null}}function ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,i=0,e=0;if(t)for(var n=l.child;n!==null;)i|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)i|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=e,l.childLanes=i,t}function ud(l,t,i){var e=t.pendingProps;switch(Ms(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return i=t.stateNode,e=null,l!==null&&(e=l.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),qt(Dl),Cl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(l===null||l.child===null)&&(se(t)?$t(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ds())),ml(t),null;case 26:var n=t.type,a=t.memoizedState;return l===null?($t(t),a!==null?(ml(t),$g(t,a)):(ml(t),So(t,n,null,e,i))):a?a!==l.memoizedState?($t(t),ml(t),$g(t,a)):(ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==e&&$t(t),ml(t),So(t,n,l,e,i)),null;case 27:if(Tn(t),i=K.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&$t(t);else{if(!e){if(t.stateNode===null)throw Error(f(166));return ml(t),null}l=R.current,se(t)?zu(t):(l=Wc(n,e,i),t.stateNode=l,$t(t))}return ml(t),null;case 5:if(Tn(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==e&&$t(t);else{if(!e){if(t.stateNode===null)throw Error(f(166));return ml(t),null}if(a=R.current,se(t))zu(t);else{var s=Ma(K.current);switch(a){case 1:a=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:a=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":a=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":a=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":a=s.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof e.is=="string"?s.createElement("select",{is:e.is}):s.createElement("select"),e.multiple?a.multiple=!0:e.size&&(a.size=e.size);break;default:a=typeof e.is=="string"?s.createElement(n,{is:e.is}):s.createElement(n)}}a[ql]=t,a[Wl]=e;l:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break l;for(;s.sibling===null;){if(s.return===null||s.return===t)break l;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;l:switch($l(a,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break l;case"img":e=!0;break l;default:e=!1}e&&$t(t)}}return ml(t),So(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,i),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==e&&$t(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(f(166));if(l=K.current,se(t)){if(l=t.stateNode,i=t.memoizedProps,e=null,n=Xl,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}l[ql]=t,l=!!(l.nodeValue===i||e!==null&&e.suppressHydrationWarning===!0||qc(l.nodeValue,i)),l||ei(t,!0)}else l=Ma(l).createTextNode(e),l[ql]=t,t.stateNode=l}return ml(t),null;case 31:if(i=t.memoizedState,l===null||l.memoizedState!==null){if(e=se(t),i!==null){if(l===null){if(!e)throw Error(f(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(f(557));l[ql]=t}else Ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),l=!1}else i=Ds(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=i),l=!0;if(!l)return t.flags&256?(ut(t),t):(ut(t),null);if((t.flags&128)!==0)throw Error(f(558))}return ml(t),null;case 13:if(e=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=se(t),e!==null&&e.dehydrated!==null){if(l===null){if(!n)throw Error(f(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(f(317));n[ql]=t}else Ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),n=!1}else n=Ds(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(ut(t),t):(ut(t),null)}return ut(t),(t.flags&128)!==0?(t.lanes=i,t):(i=e!==null,l=l!==null&&l.memoizedState!==null,i&&(e=t.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048)),i!==l&&i&&(t.child.flags|=8192),fa(t,t.updateQueue),ml(t),null);case 4:return Cl(),l===null&&$o(t.stateNode.containerInfo),ml(t),null;case 10:return qt(t.type),ml(t),null;case 19:if(j(Ml),e=t.memoizedState,e===null)return ml(t),null;if(n=(t.flags&128)!==0,a=e.rendering,a===null)if(n)nn(e,!1);else{if(jl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(a=la(l),a!==null){for(t.flags|=128,nn(e,!1),l=a.updateQueue,t.updateQueue=l,fa(t,l),t.subtreeFlags=0,l=i,i=t.child;i!==null;)yu(i,l),i=i.sibling;return D(Ml,Ml.current&1|2),ll&&Ht(t,e.treeForkCount),t.child}l=l.sibling}e.tail!==null&&et()>ba&&(t.flags|=128,n=!0,nn(e,!1),t.lanes=4194304)}else{if(!n)if(l=la(a),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,fa(t,l),nn(e,!0),e.tail===null&&e.tailMode==="hidden"&&!a.alternate&&!ll)return ml(t),null}else 2*et()-e.renderingStartTime>ba&&i!==536870912&&(t.flags|=128,n=!0,nn(e,!1),t.lanes=4194304);e.isBackwards?(a.sibling=t.child,t.child=a):(l=e.last,l!==null?l.sibling=a:t.child=a,e.last=a)}return e.tail!==null?(l=e.tail,e.rendering=l,e.tail=l.sibling,e.renderingStartTime=et(),l.sibling=null,i=Ml.current,D(Ml,n?i&1|2:i&1),ll&&Ht(t,e.treeForkCount),l):(ml(t),null);case 22:case 23:return ut(t),$s(),e=t.memoizedState!==null,l!==null?l.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(i&536870912)!==0&&(t.flags&128)===0&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),i=t.updateQueue,i!==null&&fa(t,i.retryQueue),i=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(t.flags|=2048),l!==null&&j(Ri),null;case 24:return i=null,l!==null&&(i=l.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),qt(Dl),ml(t),null;case 25:return null;case 30:return null}throw Error(f(156,t.tag))}function gd(l,t){switch(Ms(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return qt(Dl),Cl(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Tn(t),null;case 31:if(t.memoizedState!==null){if(ut(t),t.alternate===null)throw Error(f(340));Ni()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(ut(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(f(340));Ni()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return j(Ml),null;case 4:return Cl(),null;case 10:return qt(t.type),null;case 22:case 23:return ut(t),$s(),l!==null&&j(Ri),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return qt(Dl),null;case 25:return null;default:return null}}function Qg(l,t){switch(Ms(t),t.tag){case 3:qt(Dl),Cl();break;case 26:case 27:case 5:Tn(t);break;case 4:Cl();break;case 31:t.memoizedState!==null&&ut(t);break;case 13:ut(t);break;case 19:j(Ml);break;case 10:qt(t.type);break;case 22:case 23:ut(t),$s(),l!==null&&j(Ri);break;case 24:qt(Dl)}}function an(l,t){try{var i=t.updateQueue,e=i!==null?i.lastEffect:null;if(e!==null){var n=e.next;i=n;do{if((i.tag&l)===l){e=void 0;var a=i.create,s=i.inst;e=a(),s.destroy=e}i=i.next}while(i!==n)}}catch(r){sl(t,t.return,r)}}function gi(l,t,i){try{var e=t.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var a=n.next;e=a;do{if((e.tag&l)===l){var s=e.inst,r=s.destroy;if(r!==void 0){s.destroy=void 0,n=t;var u=i,h=r;try{h()}catch(w){sl(n,u,w)}}}e=e.next}while(e!==a)}}catch(w){sl(t,t.return,w)}}function kg(l){var t=l.updateQueue;if(t!==null){var i=l.stateNode;try{Bu(t,i)}catch(e){sl(l,l.return,e)}}}function Zg(l,t,i){i.props=Gi(l.type,l.memoizedProps),i.state=l.memoizedState;try{i.componentWillUnmount()}catch(e){sl(l,t,e)}}function sn(l,t){try{var i=l.ref;if(i!==null){switch(l.tag){case 26:case 27:case 5:var e=l.stateNode;break;case 30:e=l.stateNode;break;default:e=l.stateNode}typeof i=="function"?l.refCleanup=i(e):i.current=e}}catch(n){sl(l,t,n)}}function Dt(l,t){var i=l.ref,e=l.refCleanup;if(i!==null)if(typeof e=="function")try{e()}catch(n){sl(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(n){sl(l,t,n)}else i.current=null}function Vg(l){var t=l.type,i=l.memoizedProps,e=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&e.focus();break l;case"img":i.src?e.src=i.src:i.srcSet&&(e.srcset=i.srcSet)}}catch(n){sl(l,l.return,n)}}function zo(l,t,i){try{var e=l.stateNode;xd(e,l.type,i,t),e[Wl]=t}catch(n){sl(l,l.return,n)}}function Kg(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&yi(l.type)||l.tag===4}function _o(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||Kg(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&yi(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function To(l,t,i){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(l),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Ut));else if(e!==4&&(e===27&&yi(l.type)&&(i=l.stateNode,t=null),l=l.child,l!==null))for(To(l,t,i),l=l.sibling;l!==null;)To(l,t,i),l=l.sibling}function da(l,t,i){var e=l.tag;if(e===5||e===6)l=l.stateNode,t?i.insertBefore(l,t):i.appendChild(l);else if(e!==4&&(e===27&&yi(l.type)&&(i=l.stateNode),l=l.child,l!==null))for(da(l,t,i),l=l.sibling;l!==null;)da(l,t,i),l=l.sibling}function Jg(l){var t=l.stateNode,i=l.memoizedProps;try{for(var e=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$l(t,e,i),t[ql]=l,t[Wl]=i}catch(a){sl(l,l.return,a)}}var Qt=!1,Nl=!1,jo=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,Yl=null;function cd(l,t){if(l=l.containerInfo,Zo=Ba,l=ru(l),ys(l)){if("selectionStart"in l)var i={start:l.selectionStart,end:l.selectionEnd};else l:{i=(i=l.ownerDocument)&&i.defaultView||window;var e=i.getSelection&&i.getSelection();if(e&&e.rangeCount!==0){i=e.anchorNode;var n=e.anchorOffset,a=e.focusNode;e=e.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break l}var s=0,r=-1,u=-1,h=0,w=0,T=l,y=null;t:for(;;){for(var v;T!==i||n!==0&&T.nodeType!==3||(r=s+n),T!==a||e!==0&&T.nodeType!==3||(u=s+e),T.nodeType===3&&(s+=T.nodeValue.length),(v=T.firstChild)!==null;)y=T,T=v;for(;;){if(T===l)break t;if(y===i&&++h===n&&(r=s),y===a&&++w===e&&(u=s),(v=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=v}i=r===-1||u===-1?null:{start:r,end:u}}else i=null}i=i||{start:0,end:0}}else i=null;for(Vo={focusedElem:l,selectionRange:i},Ba=!1,Yl=t;Yl!==null;)if(t=Yl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Yl=l;else for(;Yl!==null;){switch(t=Yl,a=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(i=0;i<l.length;i++)n=l[i],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){l=void 0,i=t,n=a.memoizedProps,a=a.memoizedState,e=i.stateNode;try{var B=Gi(i.type,n);l=e.getSnapshotBeforeUpdate(B,a),e.__reactInternalSnapshotBeforeUpdate=l}catch(X){sl(i,i.return,X)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,i=l.nodeType,i===9)Wo(l);else if(i===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Wo(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(f(163))}if(l=t.sibling,l!==null){l.return=t.return,Yl=l;break}Yl=t.return}}function Fg(l,t,i){var e=i.flags;switch(i.tag){case 0:case 11:case 15:Zt(l,i),e&4&&an(5,i);break;case 1:if(Zt(l,i),e&4)if(l=i.stateNode,t===null)try{l.componentDidMount()}catch(s){sl(i,i.return,s)}else{var n=Gi(i.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(s){sl(i,i.return,s)}}e&64&&kg(i),e&512&&sn(i,i.return);break;case 3:if(Zt(l,i),e&64&&(l=i.updateQueue,l!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Bu(l,t)}catch(s){sl(i,i.return,s)}}break;case 27:t===null&&e&4&&Jg(i);case 26:case 5:Zt(l,i),t===null&&e&4&&Vg(i),e&512&&sn(i,i.return);break;case 12:Zt(l,i);break;case 31:Zt(l,i),e&4&&lc(l,i);break;case 13:Zt(l,i),e&4&&tc(l,i),e&64&&(l=i.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(i=wd.bind(null,i),Xd(l,i))));break;case 22:if(e=i.memoizedState!==null||Qt,!e){t=t!==null&&t.memoizedState!==null||Nl,n=Qt;var a=Nl;Qt=e,(Nl=t)&&!a?Vt(l,i,(i.subtreeFlags&8772)!==0):Zt(l,i),Qt=n,Nl=a}break;case 30:break;default:Zt(l,i)}}function Ig(l){var t=l.alternate;t!==null&&(l.alternate=null,Ig(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&ls(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var hl=null,Il=!1;function kt(l,t,i){for(i=i.child;i!==null;)Pg(l,t,i),i=i.sibling}function Pg(l,t,i){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Ee,i)}catch{}switch(i.tag){case 26:Nl||Dt(i,t),kt(l,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Nl||Dt(i,t);var e=hl,n=Il;yi(i.type)&&(hl=i.stateNode,Il=!1),kt(l,t,i),mn(i.stateNode),hl=e,Il=n;break;case 5:Nl||Dt(i,t);case 6:if(e=hl,n=Il,hl=null,kt(l,t,i),hl=e,Il=n,hl!==null)if(Il)try{(hl.nodeType===9?hl.body:hl.nodeName==="HTML"?hl.ownerDocument.body:hl).removeChild(i.stateNode)}catch(a){sl(i,t,a)}else try{hl.removeChild(i.stateNode)}catch(a){sl(i,t,a)}break;case 18:hl!==null&&(Il?(l=hl,kc(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,i.stateNode),Ce(l)):kc(hl,i.stateNode));break;case 4:e=hl,n=Il,hl=i.stateNode.containerInfo,Il=!0,kt(l,t,i),hl=e,Il=n;break;case 0:case 11:case 14:case 15:gi(2,i,t),Nl||gi(4,i,t),kt(l,t,i);break;case 1:Nl||(Dt(i,t),e=i.stateNode,typeof e.componentWillUnmount=="function"&&Zg(i,t,e)),kt(l,t,i);break;case 21:kt(l,t,i);break;case 22:Nl=(e=Nl)||i.memoizedState!==null,kt(l,t,i),Nl=e;break;default:kt(l,t,i)}}function lc(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Ce(l)}catch(i){sl(t,t.return,i)}}}function tc(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Ce(l)}catch(i){sl(t,t.return,i)}}function pd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wg),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wg),t;default:throw Error(f(435,l.tag))}}function ma(l,t){var i=pd(l);t.forEach(function(e){if(!i.has(e)){i.add(e);var n=Sd.bind(null,l,e);e.then(n,n)}})}function Pl(l,t){var i=t.deletions;if(i!==null)for(var e=0;e<i.length;e++){var n=i[e],a=l,s=t,r=s;l:for(;r!==null;){switch(r.tag){case 27:if(yi(r.type)){hl=r.stateNode,Il=!1;break l}break;case 5:hl=r.stateNode,Il=!1;break l;case 3:case 4:hl=r.stateNode.containerInfo,Il=!0;break l}r=r.return}if(hl===null)throw Error(f(160));Pg(a,s,n),hl=null,Il=!1,a=n.alternate,a!==null&&(a.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ic(t,l),t=t.sibling}var At=null;function ic(l,t){var i=l.alternate,e=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),e&4&&(gi(3,l,l.return),an(3,l),gi(5,l,l.return));break;case 1:Pl(t,l),lt(l),e&512&&(Nl||i===null||Dt(i,i.return)),e&64&&Qt&&(l=l.updateQueue,l!==null&&(e=l.callbacks,e!==null&&(i=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=i===null?e:i.concat(e))));break;case 26:var n=At;if(Pl(t,l),lt(l),e&512&&(Nl||i===null||Dt(i,i.return)),e&4){var a=i!==null?i.memoizedState:null;if(e=l.memoizedState,i===null)if(e===null)if(l.stateNode===null){l:{e=l.type,i=l.memoizedProps,n=n.ownerDocument||n;t:switch(e){case"title":a=n.getElementsByTagName("title")[0],(!a||a[xe]||a[ql]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(e),n.head.insertBefore(a,n.querySelector("head > title"))),$l(a,e,i),a[ql]=l,Hl(a),e=a;break l;case"link":var s=ip("link","href",n).get(e+(i.href||""));if(s){for(var r=0;r<s.length;r++)if(a=s[r],a.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&a.getAttribute("rel")===(i.rel==null?null:i.rel)&&a.getAttribute("title")===(i.title==null?null:i.title)&&a.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){s.splice(r,1);break t}}a=n.createElement(e),$l(a,e,i),n.head.appendChild(a);break;case"meta":if(s=ip("meta","content",n).get(e+(i.content||""))){for(r=0;r<s.length;r++)if(a=s[r],a.getAttribute("content")===(i.content==null?null:""+i.content)&&a.getAttribute("name")===(i.name==null?null:i.name)&&a.getAttribute("property")===(i.property==null?null:i.property)&&a.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&a.getAttribute("charset")===(i.charSet==null?null:i.charSet)){s.splice(r,1);break t}}a=n.createElement(e),$l(a,e,i),n.head.appendChild(a);break;default:throw Error(f(468,e))}a[ql]=l,Hl(a),e=a}l.stateNode=e}else ep(n,l.type,l.stateNode);else l.stateNode=tp(n,e,l.memoizedProps);else a!==e?(a===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):a.count--,e===null?ep(n,l.type,l.stateNode):tp(n,e,l.memoizedProps)):e===null&&l.stateNode!==null&&zo(l,l.memoizedProps,i.memoizedProps)}break;case 27:Pl(t,l),lt(l),e&512&&(Nl||i===null||Dt(i,i.return)),i!==null&&e&4&&zo(l,l.memoizedProps,i.memoizedProps);break;case 5:if(Pl(t,l),lt(l),e&512&&(Nl||i===null||Dt(i,i.return)),l.flags&32){n=l.stateNode;try{Wi(n,"")}catch(B){sl(l,l.return,B)}}e&4&&l.stateNode!=null&&(n=l.memoizedProps,zo(l,n,i!==null?i.memoizedProps:n)),e&1024&&(jo=!0);break;case 6:if(Pl(t,l),lt(l),e&4){if(l.stateNode===null)throw Error(f(162));e=l.memoizedProps,i=l.stateNode;try{i.nodeValue=e}catch(B){sl(l,l.return,B)}}break;case 3:if(Oa=null,n=At,At=Ea(t.containerInfo),Pl(t,l),At=n,lt(l),e&4&&i!==null&&i.memoizedState.isDehydrated)try{Ce(t.containerInfo)}catch(B){sl(l,l.return,B)}jo&&(jo=!1,ec(l));break;case 4:e=At,At=Ea(l.stateNode.containerInfo),Pl(t,l),lt(l),At=e;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,ma(l,e)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(ya=et()),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,ma(l,e)));break;case 22:n=l.memoizedState!==null;var u=i!==null&&i.memoizedState!==null,h=Qt,w=Nl;if(Qt=h||n,Nl=w||u,Pl(t,l),Nl=w,Qt=h,lt(l),e&8192)l:for(t=l.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(i===null||u||Qt||Nl||Li(l)),i=null,t=l;;){if(t.tag===5||t.tag===26){if(i===null){u=i=t;try{if(a=u.stateNode,n)s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{r=u.stateNode;var T=u.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;r.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(B){sl(u,u.return,B)}}}else if(t.tag===6){if(i===null){u=t;try{u.stateNode.nodeValue=n?"":u.memoizedProps}catch(B){sl(u,u.return,B)}}}else if(t.tag===18){if(i===null){u=t;try{var v=u.stateNode;n?Zc(v,!0):Zc(u.stateNode,!1)}catch(B){sl(u,u.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}e&4&&(e=l.updateQueue,e!==null&&(i=e.retryQueue,i!==null&&(e.retryQueue=null,ma(l,i))));break;case 19:Pl(t,l),lt(l),e&4&&(e=l.updateQueue,e!==null&&(l.updateQueue=null,ma(l,e)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var i,e=l.return;e!==null;){if(Kg(e)){i=e;break}e=e.return}if(i==null)throw Error(f(160));switch(i.tag){case 27:var n=i.stateNode,a=_o(l);da(l,a,n);break;case 5:var s=i.stateNode;i.flags&32&&(Wi(s,""),i.flags&=-33);var r=_o(l);da(l,r,s);break;case 3:case 4:var u=i.stateNode.containerInfo,h=_o(l);To(l,h,u);break;default:throw Error(f(161))}}catch(w){sl(l,l.return,w)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function ec(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;ec(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Zt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fg(l,t.alternate,t),t=t.sibling}function Li(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:gi(4,t,t.return),Li(t);break;case 1:Dt(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Zg(t,t.return,i),Li(t);break;case 27:mn(t.stateNode);case 26:case 5:Dt(t,t.return),Li(t);break;case 22:t.memoizedState===null&&Li(t);break;case 30:Li(t);break;default:Li(t)}l=l.sibling}}function Vt(l,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var e=t.alternate,n=l,a=t,s=a.flags;switch(a.tag){case 0:case 11:case 15:Vt(n,a,i),an(4,a);break;case 1:if(Vt(n,a,i),e=a,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){sl(e,e.return,h)}if(e=a,n=e.updateQueue,n!==null){var r=e.stateNode;try{var u=n.shared.hiddenCallbacks;if(u!==null)for(n.shared.hiddenCallbacks=null,n=0;n<u.length;n++)Uu(u[n],r)}catch(h){sl(e,e.return,h)}}i&&s&64&&kg(a),sn(a,a.return);break;case 27:Jg(a);case 26:case 5:Vt(n,a,i),i&&e===null&&s&4&&Vg(a),sn(a,a.return);break;case 12:Vt(n,a,i);break;case 31:Vt(n,a,i),i&&s&4&&lc(n,a);break;case 13:Vt(n,a,i),i&&s&4&&tc(n,a);break;case 22:a.memoizedState===null&&Vt(n,a,i),sn(a,a.return);break;case 30:break;default:Vt(n,a,i)}t=t.sibling}}function Ao(l,t){var i=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(l!=null&&l.refCount++,i!=null&&ke(i))}function Co(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&ke(l))}function Ct(l,t,i,e){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)nc(l,t,i,e),t=t.sibling}function nc(l,t,i,e){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ct(l,t,i,e),n&2048&&an(9,t);break;case 1:Ct(l,t,i,e);break;case 3:Ct(l,t,i,e),n&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&ke(l)));break;case 12:if(n&2048){Ct(l,t,i,e),l=t.stateNode;try{var a=t.memoizedProps,s=a.id,r=a.onPostCommit;typeof r=="function"&&r(s,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(u){sl(t,t.return,u)}}else Ct(l,t,i,e);break;case 31:Ct(l,t,i,e);break;case 13:Ct(l,t,i,e);break;case 23:break;case 22:a=t.stateNode,s=t.alternate,t.memoizedState!==null?a._visibility&2?Ct(l,t,i,e):on(l,t):a._visibility&2?Ct(l,t,i,e):(a._visibility|=2,he(l,t,i,e,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Ao(s,t);break;case 24:Ct(l,t,i,e),n&2048&&Co(t.alternate,t);break;default:Ct(l,t,i,e)}}function he(l,t,i,e,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=l,s=t,r=i,u=e,h=s.flags;switch(s.tag){case 0:case 11:case 15:he(a,s,r,u,n),an(8,s);break;case 23:break;case 22:var w=s.stateNode;s.memoizedState!==null?w._visibility&2?he(a,s,r,u,n):on(a,s):(w._visibility|=2,he(a,s,r,u,n)),n&&h&2048&&Ao(s.alternate,s);break;case 24:he(a,s,r,u,n),n&&h&2048&&Co(s.alternate,s);break;default:he(a,s,r,u,n)}t=t.sibling}}function on(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=l,e=t,n=e.flags;switch(e.tag){case 22:on(i,e),n&2048&&Ao(e.alternate,e);break;case 24:on(i,e),n&2048&&Co(e.alternate,e);break;default:on(i,e)}t=t.sibling}}var rn=8192;function ye(l,t,i){if(l.subtreeFlags&rn)for(l=l.child;l!==null;)ac(l,t,i),l=l.sibling}function ac(l,t,i){switch(l.tag){case 26:ye(l,t,i),l.flags&rn&&l.memoizedState!==null&&Id(i,At,l.memoizedState,l.memoizedProps);break;case 5:ye(l,t,i);break;case 3:case 4:var e=At;At=Ea(l.stateNode.containerInfo),ye(l,t,i),At=e;break;case 22:l.memoizedState===null&&(e=l.alternate,e!==null&&e.memoizedState!==null?(e=rn,rn=16777216,ye(l,t,i),rn=e):ye(l,t,i));break;default:ye(l,t,i)}}function sc(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function un(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var e=t[i];Yl=e,rc(e,l)}sc(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)oc(l),l=l.sibling}function oc(l){switch(l.tag){case 0:case 11:case 15:un(l),l.flags&2048&&gi(9,l,l.return);break;case 3:un(l);break;case 12:un(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,ha(l)):un(l);break;default:un(l)}}function ha(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var e=t[i];Yl=e,rc(e,l)}sc(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:gi(8,t,t.return),ha(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,ha(t));break;default:ha(t)}l=l.sibling}}function rc(l,t){for(;Yl!==null;){var i=Yl;switch(i.tag){case 0:case 11:case 15:gi(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var e=i.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:ke(i.memoizedState.cache)}if(e=i.child,e!==null)e.return=i,Yl=e;else l:for(i=l;Yl!==null;){e=Yl;var n=e.sibling,a=e.return;if(Ig(e),e===i){Yl=null;break l}if(n!==null){n.return=a,Yl=n;break l}Yl=a}}}var fd={getCacheForType:function(l){var t=Gl(Dl),i=t.data.get(l);return i===void 0&&(i=l(),t.data.set(l,i)),i},cacheSignal:function(){return Gl(Dl).controller.signal}},dd=typeof WeakMap=="function"?WeakMap:Map,el=0,fl=null,J=null,F=0,al=0,gt=null,ci=!1,be=!1,Mo=!1,Kt=0,jl=0,pi=0,$i=0,Eo=0,ct=0,ve=0,gn=null,tt=null,Do=!1,ya=0,uc=0,ba=1/0,va=null,fi=null,Bl=0,di=null,we=null,Jt=0,Oo=0,xo=null,gc=null,cn=0,No=null;function pt(){return(el&2)!==0&&F!==0?F&-F:S.T!==null?qo():Ar()}function cc(){if(ct===0)if((F&536870912)===0||ll){var l=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),ct=l}else ct=536870912;return l=rt.current,l!==null&&(l.flags|=32),ct}function it(l,t,i){(l===fl&&(al===2||al===9)||l.cancelPendingCommit!==null)&&(Se(l,0),mi(l,F,ct,!1)),Oe(l,i),((el&2)===0||l!==fl)&&(l===fl&&((el&2)===0&&($i|=i),jl===4&&mi(l,F,ct,!1)),Ot(l))}function pc(l,t,i){if((el&6)!==0)throw Error(f(327));var e=!i&&(t&127)===0&&(t&l.expiredLanes)===0||De(l,t),n=e?yd(l,t):Bo(l,t,!0),a=e;do{if(n===0){be&&!e&&mi(l,t,0,!1);break}else{if(i=l.current.alternate,a&&!md(i)){n=Bo(l,t,!1),a=!1;continue}if(n===2){if(a=t,l.errorRecoveryDisabledLanes&a)var s=0;else s=l.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;l:{var r=l;n=gn;var u=r.current.memoizedState.isDehydrated;if(u&&(Se(r,s).flags|=256),s=Bo(r,s,!1),s!==2){if(Mo&&!u){r.errorRecoveryDisabledLanes|=a,$i|=a,n=4;break l}a=tt,tt=n,a!==null&&(tt===null?tt=a:tt.push.apply(tt,a))}n=s}if(a=!1,n!==2)continue}}if(n===1){Se(l,0),mi(l,t,0,!0);break}l:{switch(e=l,a=n,a){case 0:case 1:throw Error(f(345));case 4:if((t&4194048)!==t)break;case 6:mi(e,t,ct,!ci);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(f(329))}if((t&62914560)===t&&(n=ya+300-et(),10<n)){if(mi(e,t,ct,!ci),En(e,0,!0)!==0)break l;Jt=t,e.timeoutHandle=$c(fc.bind(null,e,i,tt,va,Do,t,ct,$i,ve,ci,a,"Throttled",-0,0),n);break l}fc(e,i,tt,va,Do,t,ct,$i,ve,ci,a,null,-0,0)}}break}while(!0);Ot(l)}function fc(l,t,i,e,n,a,s,r,u,h,w,T,y,v){if(l.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},ac(t,a,T);var B=(a&62914560)===a?ya-et():(a&4194048)===a?uc-et():0;if(B=Pd(T,B),B!==null){Jt=a,l.cancelPendingCommit=B(Sc.bind(null,l,t,a,i,e,n,s,r,u,w,T,null,y,v)),mi(l,a,s,!h);return}}Sc(l,t,a,i,e,n,s,r,u)}function md(l){for(var t=l;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var e=0;e<i.length;e++){var n=i[e],a=n.getSnapshot;n=n.value;try{if(!st(a(),n))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mi(l,t,i,e){t&=~Eo,t&=~$i,l.suspendedLanes|=t,l.pingedLanes&=~t,e&&(l.warmLanes|=t),e=l.expirationTimes;for(var n=t;0<n;){var a=31-at(n),s=1<<a;e[a]=-1,n&=~s}i!==0&&_r(l,i,t)}function wa(){return(el&6)===0?(pn(0),!1):!0}function Uo(){if(J!==null){if(al===0)var l=J.return;else l=J,Yt=Ui=null,Js(l),ce=null,Ve=0,l=J;for(;l!==null;)Qg(l.alternate,l),l=l.return;J=null}}function Se(l,t){var i=l.timeoutHandle;i!==-1&&(l.timeoutHandle=-1,Bd(i)),i=l.cancelPendingCommit,i!==null&&(l.cancelPendingCommit=null,i()),Jt=0,Uo(),fl=l,J=i=Rt(l.current,null),F=t,al=0,gt=null,ci=!1,be=De(l,t),Mo=!1,ve=ct=Eo=$i=pi=jl=0,tt=gn=null,Do=!1,(t&8)!==0&&(t|=t&32);var e=l.entangledLanes;if(e!==0)for(l=l.entanglements,e&=t;0<e;){var n=31-at(e),a=1<<n;t|=l[n],e&=~a}return Kt=t,Gn(),i}function dc(l,t){Q=null,S.H=tn,t===ge||t===Jn?(t=Du(),al=3):t===Hs?(t=Du(),al=4):al=t===co?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,gt=t,J===null&&(jl=1,ua(l,yt(t,l.current)))}function mc(){var l=rt.current;return l===null?!0:(F&4194048)===F?St===null:(F&62914560)===F||(F&536870912)!==0?l===St:!1}function hc(){var l=S.H;return S.H=tn,l===null?tn:l}function yc(){var l=S.A;return S.A=fd,l}function Sa(){jl=4,ci||(F&4194048)!==F&&rt.current!==null||(be=!0),(pi&134217727)===0&&($i&134217727)===0||fl===null||mi(fl,F,ct,!1)}function Bo(l,t,i){var e=el;el|=2;var n=hc(),a=yc();(fl!==l||F!==t)&&(va=null,Se(l,t)),t=!1;var s=jl;l:do try{if(al!==0&&J!==null){var r=J,u=gt;switch(al){case 8:Uo(),s=6;break l;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var h=al;if(al=0,gt=null,ze(l,r,u,h),i&&be){s=0;break l}break;default:h=al,al=0,gt=null,ze(l,r,u,h)}}hd(),s=jl;break}catch(w){dc(l,w)}while(!0);return t&&l.shellSuspendCounter++,Yt=Ui=null,el=e,S.H=n,S.A=a,J===null&&(fl=null,F=0,Gn()),s}function hd(){for(;J!==null;)bc(J)}function yd(l,t){var i=el;el|=2;var e=hc(),n=yc();fl!==l||F!==t?(va=null,ba=et()+500,Se(l,t)):be=De(l,t);l:do try{if(al!==0&&J!==null){t=J;var a=gt;t:switch(al){case 1:al=0,gt=null,ze(l,t,a,1);break;case 2:case 9:if(Mu(a)){al=0,gt=null,vc(t);break}t=function(){al!==2&&al!==9||fl!==l||(al=7),Ot(l)},a.then(t,t);break l;case 3:al=7;break l;case 4:al=5;break l;case 7:Mu(a)?(al=0,gt=null,vc(t)):(al=0,gt=null,ze(l,t,a,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var r=J;if(s?np(s):r.stateNode.complete){al=0,gt=null;var u=r.sibling;if(u!==null)J=u;else{var h=r.return;h!==null?(J=h,za(h)):J=null}break t}}al=0,gt=null,ze(l,t,a,5);break;case 6:al=0,gt=null,ze(l,t,a,6);break;case 8:Uo(),jl=6;break l;default:throw Error(f(462))}}bd();break}catch(w){dc(l,w)}while(!0);return Yt=Ui=null,S.H=e,S.A=n,el=i,J!==null?0:(fl=null,F=0,Gn(),jl)}function bd(){for(;J!==null&&!Xp();)bc(J)}function bc(l){var t=Lg(l.alternate,l,Kt);l.memoizedProps=l.pendingProps,t===null?za(l):J=t}function vc(l){var t=l,i=t.alternate;switch(t.tag){case 15:case 0:t=Rg(i,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Rg(i,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Js(t);default:Qg(i,t),t=J=yu(t,Kt),t=Lg(i,t,Kt)}l.memoizedProps=l.pendingProps,t===null?za(l):J=t}function ze(l,t,i,e){Yt=Ui=null,Js(t),ce=null,Ve=0;var n=t.return;try{if(sd(l,n,t,i,F)){jl=1,ua(l,yt(i,l.current)),J=null;return}}catch(a){if(n!==null)throw J=n,a;jl=1,ua(l,yt(i,l.current)),J=null;return}t.flags&32768?(ll||e===1?l=!0:be||(F&536870912)!==0?l=!1:(ci=l=!0,(e===2||e===9||e===3||e===6)&&(e=rt.current,e!==null&&e.tag===13&&(e.flags|=16384))),wc(t,l)):za(t)}function za(l){var t=l;do{if((t.flags&32768)!==0){wc(t,ci);return}l=t.return;var i=ud(t.alternate,t,Kt);if(i!==null){J=i;return}if(t=t.sibling,t!==null){J=t;return}J=t=l}while(t!==null);jl===0&&(jl=5)}function wc(l,t){do{var i=gd(l.alternate,l);if(i!==null){i.flags&=32767,J=i;return}if(i=l.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(l=l.sibling,l!==null)){J=l;return}J=l=i}while(l!==null);jl=6,J=null}function Sc(l,t,i,e,n,a,s,r,u){l.cancelPendingCommit=null;do _a();while(Bl!==0);if((el&6)!==0)throw Error(f(327));if(t!==null){if(t===l.current)throw Error(f(177));if(a=t.lanes|t.childLanes,a|=zs,Wp(l,i,a,s,r,u),l===fl&&(J=fl=null,F=0),we=t,di=l,Jt=i,Oo=a,xo=n,gc=e,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,zd(jn,function(){return Ac(),null})):(l.callbackNode=null,l.callbackPriority=0),e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=S.T,S.T=null,n=M.p,M.p=2,s=el,el|=4;try{cd(l,t,i)}finally{el=s,M.p=n,S.T=e}}Bl=1,zc(),_c(),Tc()}}function zc(){if(Bl===1){Bl=0;var l=di,t=we,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=S.T,S.T=null;var e=M.p;M.p=2;var n=el;el|=4;try{ic(t,l);var a=Vo,s=ru(l.containerInfo),r=a.focusedElem,u=a.selectionRange;if(s!==r&&r&&r.ownerDocument&&ou(r.ownerDocument.documentElement,r)){if(u!==null&&ys(r)){var h=u.start,w=u.end;if(w===void 0&&(w=h),"selectionStart"in r)r.selectionStart=h,r.selectionEnd=Math.min(w,r.value.length);else{var T=r.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var v=y.getSelection(),B=r.textContent.length,X=Math.min(u.start,B),cl=u.end===void 0?X:Math.min(u.end,B);!v.extend&&X>cl&&(s=cl,cl=X,X=s);var p=su(r,X),g=su(r,cl);if(p&&g&&(v.rangeCount!==1||v.anchorNode!==p.node||v.anchorOffset!==p.offset||v.focusNode!==g.node||v.focusOffset!==g.offset)){var m=T.createRange();m.setStart(p.node,p.offset),v.removeAllRanges(),X>cl?(v.addRange(m),v.extend(g.node,g.offset)):(m.setEnd(g.node,g.offset),v.addRange(m))}}}}for(T=[],v=r;v=v.parentNode;)v.nodeType===1&&T.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<T.length;r++){var z=T[r];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}Ba=!!Zo,Vo=Zo=null}finally{el=n,M.p=e,S.T=i}}l.current=t,Bl=2}}function _c(){if(Bl===2){Bl=0;var l=di,t=we,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=S.T,S.T=null;var e=M.p;M.p=2;var n=el;el|=4;try{Fg(l,t.alternate,t)}finally{el=n,M.p=e,S.T=i}}Bl=3}}function Tc(){if(Bl===4||Bl===3){Bl=0,Gp();var l=di,t=we,i=Jt,e=gc;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Bl=5:(Bl=0,we=di=null,jc(l,l.pendingLanes));var n=l.pendingLanes;if(n===0&&(fi=null),Ia(i),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Ee,t,void 0,(t.current.flags&128)===128)}catch{}if(e!==null){t=S.T,n=M.p,M.p=2,S.T=null;try{for(var a=l.onRecoverableError,s=0;s<e.length;s++){var r=e[s];a(r.value,{componentStack:r.stack})}}finally{S.T=t,M.p=n}}(Jt&3)!==0&&_a(),Ot(l),n=l.pendingLanes,(i&261930)!==0&&(n&42)!==0?l===No?cn++:(cn=0,No=l):cn=0,pn(0)}}function jc(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,ke(t)))}function _a(){return zc(),_c(),Tc(),Ac()}function Ac(){if(Bl!==5)return!1;var l=di,t=Oo;Oo=0;var i=Ia(Jt),e=S.T,n=M.p;try{M.p=32>i?32:i,S.T=null,i=xo,xo=null;var a=di,s=Jt;if(Bl=0,we=di=null,Jt=0,(el&6)!==0)throw Error(f(331));var r=el;if(el|=4,oc(a.current),nc(a,a.current,s,i),el=r,pn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Ee,a)}catch{}return!0}finally{M.p=n,S.T=e,jc(l,t)}}function Cc(l,t,i){t=yt(i,t),t=go(l.stateNode,t,2),l=oi(l,t,2),l!==null&&(Oe(l,2),Ot(l))}function sl(l,t,i){if(l.tag===3)Cc(l,l,i);else for(;t!==null;){if(t.tag===3){Cc(t,l,i);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(fi===null||!fi.has(e))){l=yt(i,l),i=Mg(2),e=oi(t,i,2),e!==null&&(Eg(i,e,t,l),Oe(e,2),Ot(e));break}}t=t.return}}function Ro(l,t,i){var e=l.pingCache;if(e===null){e=l.pingCache=new dd;var n=new Set;e.set(t,n)}else n=e.get(t),n===void 0&&(n=new Set,e.set(t,n));n.has(i)||(Mo=!0,n.add(i),l=vd.bind(null,l,t,i),t.then(l,l))}function vd(l,t,i){var e=l.pingCache;e!==null&&e.delete(t),l.pingedLanes|=l.suspendedLanes&i,l.warmLanes&=~i,fl===l&&(F&i)===i&&(jl===4||jl===3&&(F&62914560)===F&&300>et()-ya?(el&2)===0&&Se(l,0):Eo|=i,ve===F&&(ve=0)),Ot(l)}function Mc(l,t){t===0&&(t=zr()),l=Oi(l,t),l!==null&&(Oe(l,t),Ot(l))}function wd(l){var t=l.memoizedState,i=0;t!==null&&(i=t.retryLane),Mc(l,i)}function Sd(l,t){var i=0;switch(l.tag){case 31:case 13:var e=l.stateNode,n=l.memoizedState;n!==null&&(i=n.retryLane);break;case 19:e=l.stateNode;break;case 22:e=l.stateNode._retryCache;break;default:throw Error(f(314))}e!==null&&e.delete(t),Mc(l,i)}function zd(l,t){return Ka(l,t)}var Ta=null,_e=null,Ho=!1,ja=!1,Yo=!1,hi=0;function Ot(l){l!==_e&&l.next===null&&(_e===null?Ta=_e=l:_e=_e.next=l),ja=!0,Ho||(Ho=!0,Td())}function pn(l,t){if(!Yo&&ja){Yo=!0;do for(var i=!1,e=Ta;e!==null;){if(l!==0){var n=e.pendingLanes;if(n===0)var a=0;else{var s=e.suspendedLanes,r=e.pingedLanes;a=(1<<31-at(42|l)+1)-1,a&=n&~(s&~r),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(i=!0,xc(e,a))}else a=F,a=En(e,e===fl?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(a&3)===0||De(e,a)||(i=!0,xc(e,a));e=e.next}while(i);Yo=!1}}function _d(){Ec()}function Ec(){ja=Ho=!1;var l=0;hi!==0&&Ud()&&(l=hi);for(var t=et(),i=null,e=Ta;e!==null;){var n=e.next,a=Dc(e,t);a===0?(e.next=null,i===null?Ta=n:i.next=n,n===null&&(_e=i)):(i=e,(l!==0||(a&3)!==0)&&(ja=!0)),e=n}Bl!==0&&Bl!==5||pn(l),hi!==0&&(hi=0)}function Dc(l,t){for(var i=l.suspendedLanes,e=l.pingedLanes,n=l.expirationTimes,a=l.pendingLanes&-62914561;0<a;){var s=31-at(a),r=1<<s,u=n[s];u===-1?((r&i)===0||(r&e)!==0)&&(n[s]=Jp(r,t)):u<=t&&(l.expiredLanes|=r),a&=~r}if(t=fl,i=F,i=En(l,l===t?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e=l.callbackNode,i===0||l===t&&(al===2||al===9)||l.cancelPendingCommit!==null)return e!==null&&e!==null&&Ja(e),l.callbackNode=null,l.callbackPriority=0;if((i&3)===0||De(l,i)){if(t=i&-i,t===l.callbackPriority)return t;switch(e!==null&&Ja(e),Ia(i)){case 2:case 8:i=wr;break;case 32:i=jn;break;case 268435456:i=Sr;break;default:i=jn}return e=Oc.bind(null,l),i=Ka(i,e),l.callbackPriority=t,l.callbackNode=i,t}return e!==null&&e!==null&&Ja(e),l.callbackPriority=2,l.callbackNode=null,2}function Oc(l,t){if(Bl!==0&&Bl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var i=l.callbackNode;if(_a()&&l.callbackNode!==i)return null;var e=F;return e=En(l,l===fl?e:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),e===0?null:(pc(l,e,t),Dc(l,et()),l.callbackNode!=null&&l.callbackNode===i?Oc.bind(null,l):null)}function xc(l,t){if(_a())return null;pc(l,t,!0)}function Td(){Rd(function(){(el&6)!==0?Ka(vr,_d):Ec()})}function qo(){if(hi===0){var l=re;l===0&&(l=An,An<<=1,(An&261888)===0&&(An=256)),hi=l}return hi}function Nc(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Nn(""+l)}function Uc(l,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,l.id&&i.setAttribute("form",l.id),t.parentNode.insertBefore(i,t),l=new FormData(l),i.parentNode.removeChild(i),l}function jd(l,t,i,e,n){if(t==="submit"&&i&&i.stateNode===n){var a=Nc((n[Wl]||null).action),s=e.submitter;s&&(t=(t=s[Wl]||null)?Nc(t.formAction):s.getAttribute("formAction"),t!==null&&(a=t,s=null));var r=new Hn("action","action",null,e,n);l.push({event:r,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(hi!==0){var u=s?Uc(n,s):new FormData(n);no(i,{pending:!0,data:u,method:n.method,action:a},null,u)}}else typeof a=="function"&&(r.preventDefault(),u=s?Uc(n,s):new FormData(n),no(i,{pending:!0,data:u,method:n.method,action:a},a,u))},currentTarget:n}]})}}for(var Xo=0;Xo<Ss.length;Xo++){var Go=Ss[Xo],Ad=Go.toLowerCase(),Cd=Go[0].toUpperCase()+Go.slice(1);jt(Ad,"on"+Cd)}jt(cu,"onAnimationEnd"),jt(pu,"onAnimationIteration"),jt(fu,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt($f,"onTransitionRun"),jt(Qf,"onTransitionStart"),jt(kf,"onTransitionCancel"),jt(du,"onTransitionEnd"),Ki("onMouseEnter",["mouseout","mouseover"]),Ki("onMouseLeave",["mouseout","mouseover"]),Ki("onPointerEnter",["pointerout","pointerover"]),Ki("onPointerLeave",["pointerout","pointerover"]),Ci("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ci("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ci("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ci("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ci("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Md=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fn));function Bc(l,t){t=(t&4)!==0;for(var i=0;i<l.length;i++){var e=l[i],n=e.event;e=e.listeners;l:{var a=void 0;if(t)for(var s=e.length-1;0<=s;s--){var r=e[s],u=r.instance,h=r.currentTarget;if(r=r.listener,u!==a&&n.isPropagationStopped())break l;a=r,n.currentTarget=h;try{a(n)}catch(w){Xn(w)}n.currentTarget=null,a=u}else for(s=0;s<e.length;s++){if(r=e[s],u=r.instance,h=r.currentTarget,r=r.listener,u!==a&&n.isPropagationStopped())break l;a=r,n.currentTarget=h;try{a(n)}catch(w){Xn(w)}n.currentTarget=null,a=u}}}}function W(l,t){var i=t[Pa];i===void 0&&(i=t[Pa]=new Set);var e=l+"__bubble";i.has(e)||(Rc(t,l,2,!1),i.add(e))}function Lo(l,t,i){var e=0;t&&(e|=4),Rc(i,l,e,t)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function $o(l){if(!l[Aa]){l[Aa]=!0,Er.forEach(function(i){i!=="selectionchange"&&(Md.has(i)||Lo(i,!1,l),Lo(i,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Aa]||(t[Aa]=!0,Lo("selectionchange",!1,t))}}function Rc(l,t,i,e){switch(cp(t)){case 2:var n=im;break;case 8:n=em;break;default:n=nr}i=n.bind(null,t,i,l),n=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),e?n!==void 0?l.addEventListener(t,i,{capture:!0,passive:n}):l.addEventListener(t,i,!0):n!==void 0?l.addEventListener(t,i,{passive:n}):l.addEventListener(t,i,!1)}function Qo(l,t,i,e,n){var a=e;if((t&1)===0&&(t&2)===0&&e!==null)l:for(;;){if(e===null)return;var s=e.tag;if(s===3||s===4){var r=e.stateNode.containerInfo;if(r===n)break;if(s===4)for(s=e.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===n)return;s=s.return}for(;r!==null;){if(s=ki(r),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){e=a=s;continue l}r=r.parentNode}}e=e.return}Gr(function(){var h=a,w=ss(i),T=[];l:{var y=mu.get(l);if(y!==void 0){var v=Hn,B=l;switch(l){case"keypress":if(Bn(i)===0)break l;case"keydown":case"keyup":v=Sf;break;case"focusin":B="focus",v=ps;break;case"focusout":B="blur",v=ps;break;case"beforeblur":case"afterblur":v=ps;break;case"click":if(i.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=uf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Tf;break;case cu:case pu:case fu:v=pf;break;case du:v=Af;break;case"scroll":case"scrollend":v=of;break;case"wheel":v=Mf;break;case"copy":case"cut":case"paste":v=df;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zr;break;case"toggle":case"beforetoggle":v=Df}var X=(t&4)!==0,cl=!X&&(l==="scroll"||l==="scrollend"),p=X?y!==null?y+"Capture":null:y;X=[];for(var g=h,m;g!==null;){var z=g;if(m=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||m===null||p===null||(z=Ue(g,p),z!=null&&X.push(dn(g,z,m))),cl)break;g=g.return}0<X.length&&(y=new v(y,B,null,i,w),T.push({event:y,listeners:X}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",v=l==="mouseout"||l==="pointerout",y&&i!==as&&(B=i.relatedTarget||i.fromElement)&&(ki(B)||B[Qi]))break l;if((v||y)&&(y=w.window===w?w:(y=w.ownerDocument)?y.defaultView||y.parentWindow:window,v?(B=i.relatedTarget||i.toElement,v=h,B=B?ki(B):null,B!==null&&(cl=x(B),X=B.tag,B!==cl||X!==5&&X!==27&&X!==6)&&(B=null)):(v=null,B=h),v!==B)){if(X=Qr,z="onMouseLeave",p="onMouseEnter",g="mouse",(l==="pointerout"||l==="pointerover")&&(X=Zr,z="onPointerLeave",p="onPointerEnter",g="pointer"),cl=v==null?y:Ne(v),m=B==null?y:Ne(B),y=new X(z,g+"leave",v,i,w),y.target=cl,y.relatedTarget=m,z=null,ki(w)===h&&(X=new X(p,g+"enter",B,i,w),X.target=m,X.relatedTarget=cl,z=X),cl=z,v&&B)t:{for(X=Ed,p=v,g=B,m=0,z=p;z;z=X(z))m++;z=0;for(var q=g;q;q=X(q))z++;for(;0<m-z;)p=X(p),m--;for(;0<z-m;)g=X(g),z--;for(;m--;){if(p===g||g!==null&&p===g.alternate){X=p;break t}p=X(p),g=X(g)}X=null}else X=null;v!==null&&Hc(T,y,v,X,!1),B!==null&&cl!==null&&Hc(T,cl,B,X,!0)}}l:{if(y=h?Ne(h):window,v=y.nodeName&&y.nodeName.toLowerCase(),v==="select"||v==="input"&&y.type==="file")var tl=lu;else if(Ir(y))if(tu)tl=Xf;else{tl=Yf;var H=Hf}else v=y.nodeName,!v||v.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&ns(h.elementType)&&(tl=lu):tl=qf;if(tl&&(tl=tl(l,h))){Pr(T,tl,i,w);break l}H&&H(l,y,h),l==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&es(y,"number",y.value)}switch(H=h?Ne(h):window,l){case"focusin":(Ir(H)||H.contentEditable==="true")&&(le=H,bs=h,Le=null);break;case"focusout":Le=bs=le=null;break;case"mousedown":vs=!0;break;case"contextmenu":case"mouseup":case"dragend":vs=!1,uu(T,i,w);break;case"selectionchange":if(Lf)break;case"keydown":case"keyup":uu(T,i,w)}var k;if(ds)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pi?Wr(l,i)&&(I="onCompositionEnd"):l==="keydown"&&i.keyCode===229&&(I="onCompositionStart");I&&(Vr&&i.locale!=="ko"&&(Pi||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pi&&(k=Lr()):(li=w,us="value"in li?li.value:li.textContent,Pi=!0)),H=Ca(h,I),0<H.length&&(I=new kr(I,l,null,i,w),T.push({event:I,listeners:H}),k?I.data=k:(k=Fr(i),k!==null&&(I.data=k)))),(k=xf?Nf(l,i):Uf(l,i))&&(I=Ca(h,"onBeforeInput"),0<I.length&&(H=new kr("onBeforeInput","beforeinput",null,i,w),T.push({event:H,listeners:I}),H.data=k)),jd(T,l,h,i,w)}Bc(T,t)})}function dn(l,t,i){return{instance:l,listener:t,currentTarget:i}}function Ca(l,t){for(var i=t+"Capture",e=[];l!==null;){var n=l,a=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||a===null||(n=Ue(l,i),n!=null&&e.unshift(dn(l,n,a)),n=Ue(l,t),n!=null&&e.push(dn(l,n,a))),l.tag===3)return e;l=l.return}return[]}function Ed(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Hc(l,t,i,e,n){for(var a=t._reactName,s=[];i!==null&&i!==e;){var r=i,u=r.alternate,h=r.stateNode;if(r=r.tag,u!==null&&u===e)break;r!==5&&r!==26&&r!==27||h===null||(u=h,n?(h=Ue(i,a),h!=null&&s.unshift(dn(i,h,u))):n||(h=Ue(i,a),h!=null&&s.push(dn(i,h,u)))),i=i.return}s.length!==0&&l.push({event:t,listeners:s})}var Dd=/\r\n?/g,Od=/\u0000|\uFFFD/g;function Yc(l){return(typeof l=="string"?l:""+l).replace(Dd,`
`).replace(Od,"")}function qc(l,t){return t=Yc(t),Yc(l)===t}function gl(l,t,i,e,n,a){switch(i){case"children":typeof e=="string"?t==="body"||t==="textarea"&&e===""||Wi(l,e):(typeof e=="number"||typeof e=="bigint")&&t!=="body"&&Wi(l,""+e);break;case"className":On(l,"class",e);break;case"tabIndex":On(l,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":On(l,i,e);break;case"style":qr(l,e,a);break;case"data":if(t!=="object"){On(l,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||i!=="href")){l.removeAttribute(i);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(i);break}e=Nn(""+e),l.setAttribute(i,e);break;case"action":case"formAction":if(typeof e=="function"){l.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(i==="formAction"?(t!=="input"&&gl(l,t,"name",n.name,n,null),gl(l,t,"formEncType",n.formEncType,n,null),gl(l,t,"formMethod",n.formMethod,n,null),gl(l,t,"formTarget",n.formTarget,n,null)):(gl(l,t,"encType",n.encType,n,null),gl(l,t,"method",n.method,n,null),gl(l,t,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){l.removeAttribute(i);break}e=Nn(""+e),l.setAttribute(i,e);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(f(61));if(i=e.__html,i!=null){if(n.children!=null)throw Error(f(60));l.innerHTML=i}}break;case"multiple":l.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":l.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){l.removeAttribute("xlink:href");break}i=Nn(""+e),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(i,""+e):l.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(i,""):l.removeAttribute(i);break;case"capture":case"download":e===!0?l.setAttribute(i,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?l.setAttribute(i,e):l.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?l.setAttribute(i,e):l.removeAttribute(i);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?l.removeAttribute(i):l.setAttribute(i,e);break;case"popover":W("beforetoggle",l),W("toggle",l),Dn(l,"popover",e);break;case"xlinkActuate":Nt(l,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Nt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Nt(l,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Nt(l,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Nt(l,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Nt(l,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Dn(l,"is",e);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=af.get(i)||i,Dn(l,i,e))}}function ko(l,t,i,e,n,a){switch(i){case"style":qr(l,e,a);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(f(61));if(i=e.__html,i!=null){if(n.children!=null)throw Error(f(60));l.innerHTML=i}}break;case"children":typeof e=="string"?Wi(l,e):(typeof e=="number"||typeof e=="bigint")&&Wi(l,""+e);break;case"onScroll":e!=null&&W("scroll",l);break;case"onScrollEnd":e!=null&&W("scrollend",l);break;case"onClick":e!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dr.hasOwnProperty(i))l:{if(i[0]==="o"&&i[1]==="n"&&(n=i.endsWith("Capture"),t=i.slice(2,n?i.length-7:void 0),a=l[Wl]||null,a=a!=null?a[i]:null,typeof a=="function"&&l.removeEventListener(t,a,n),typeof e=="function")){typeof a!="function"&&a!==null&&(i in l?l[i]=null:l.hasAttribute(i)&&l.removeAttribute(i)),l.addEventListener(t,e,n);break l}i in l?l[i]=e:e===!0?l.setAttribute(i,""):Dn(l,i,e)}}}function $l(l,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var e=!1,n=!1,a;for(a in i)if(i.hasOwnProperty(a)){var s=i[a];if(s!=null)switch(a){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:gl(l,t,a,s,i,null)}}n&&gl(l,t,"srcSet",i.srcSet,i,null),e&&gl(l,t,"src",i.src,i,null);return;case"input":W("invalid",l);var r=a=s=n=null,u=null,h=null;for(e in i)if(i.hasOwnProperty(e)){var w=i[e];if(w!=null)switch(e){case"name":n=w;break;case"type":s=w;break;case"checked":u=w;break;case"defaultChecked":h=w;break;case"value":a=w;break;case"defaultValue":r=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(f(137,t));break;default:gl(l,t,e,w,i,null)}}Br(l,a,r,u,h,s,n,!1);return;case"select":W("invalid",l),e=s=a=null;for(n in i)if(i.hasOwnProperty(n)&&(r=i[n],r!=null))switch(n){case"value":a=r;break;case"defaultValue":s=r;break;case"multiple":e=r;default:gl(l,t,n,r,i,null)}t=a,i=s,l.multiple=!!e,t!=null?Ji(l,!!e,t,!1):i!=null&&Ji(l,!!e,i,!0);return;case"textarea":W("invalid",l),a=n=e=null;for(s in i)if(i.hasOwnProperty(s)&&(r=i[s],r!=null))switch(s){case"value":e=r;break;case"defaultValue":n=r;break;case"children":a=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(f(91));break;default:gl(l,t,s,r,i,null)}Hr(l,e,n,a);return;case"option":for(u in i)if(i.hasOwnProperty(u)&&(e=i[u],e!=null))switch(u){case"selected":l.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:gl(l,t,u,e,i,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(e=0;e<fn.length;e++)W(fn[e],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in i)if(i.hasOwnProperty(h)&&(e=i[h],e!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(f(137,t));default:gl(l,t,h,e,i,null)}return;default:if(ns(t)){for(w in i)i.hasOwnProperty(w)&&(e=i[w],e!==void 0&&ko(l,t,w,e,i,void 0));return}}for(r in i)i.hasOwnProperty(r)&&(e=i[r],e!=null&&gl(l,t,r,e,i,null))}function xd(l,t,i,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,a=null,s=null,r=null,u=null,h=null,w=null;for(v in i){var T=i[v];if(i.hasOwnProperty(v)&&T!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":u=T;default:e.hasOwnProperty(v)||gl(l,t,v,null,e,T)}}for(var y in e){var v=e[y];if(T=i[y],e.hasOwnProperty(y)&&(v!=null||T!=null))switch(y){case"type":a=v;break;case"name":n=v;break;case"checked":h=v;break;case"defaultChecked":w=v;break;case"value":s=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(f(137,t));break;default:v!==T&&gl(l,t,y,v,e,T)}}is(l,s,r,u,h,w,a,n);return;case"select":v=s=r=y=null;for(a in i)if(u=i[a],i.hasOwnProperty(a)&&u!=null)switch(a){case"value":break;case"multiple":v=u;default:e.hasOwnProperty(a)||gl(l,t,a,null,e,u)}for(n in e)if(a=e[n],u=i[n],e.hasOwnProperty(n)&&(a!=null||u!=null))switch(n){case"value":y=a;break;case"defaultValue":r=a;break;case"multiple":s=a;default:a!==u&&gl(l,t,n,a,e,u)}t=r,i=s,e=v,y!=null?Ji(l,!!i,y,!1):!!e!=!!i&&(t!=null?Ji(l,!!i,t,!0):Ji(l,!!i,i?[]:"",!1));return;case"textarea":v=y=null;for(r in i)if(n=i[r],i.hasOwnProperty(r)&&n!=null&&!e.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:gl(l,t,r,null,e,n)}for(s in e)if(n=e[s],a=i[s],e.hasOwnProperty(s)&&(n!=null||a!=null))switch(s){case"value":y=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(f(91));break;default:n!==a&&gl(l,t,s,n,e,a)}Rr(l,y,v);return;case"option":for(var B in i)if(y=i[B],i.hasOwnProperty(B)&&y!=null&&!e.hasOwnProperty(B))switch(B){case"selected":l.selected=!1;break;default:gl(l,t,B,null,e,y)}for(u in e)if(y=e[u],v=i[u],e.hasOwnProperty(u)&&y!==v&&(y!=null||v!=null))switch(u){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:gl(l,t,u,y,e,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in i)y=i[X],i.hasOwnProperty(X)&&y!=null&&!e.hasOwnProperty(X)&&gl(l,t,X,null,e,y);for(h in e)if(y=e[h],v=i[h],e.hasOwnProperty(h)&&y!==v&&(y!=null||v!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(f(137,t));break;default:gl(l,t,h,y,e,v)}return;default:if(ns(t)){for(var cl in i)y=i[cl],i.hasOwnProperty(cl)&&y!==void 0&&!e.hasOwnProperty(cl)&&ko(l,t,cl,void 0,e,y);for(w in e)y=e[w],v=i[w],!e.hasOwnProperty(w)||y===v||y===void 0&&v===void 0||ko(l,t,w,y,e,v);return}}for(var p in i)y=i[p],i.hasOwnProperty(p)&&y!=null&&!e.hasOwnProperty(p)&&gl(l,t,p,null,e,y);for(T in e)y=e[T],v=i[T],!e.hasOwnProperty(T)||y===v||y==null&&v==null||gl(l,t,T,y,e,v)}function Xc(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nd(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,i=performance.getEntriesByType("resource"),e=0;e<i.length;e++){var n=i[e],a=n.transferSize,s=n.initiatorType,r=n.duration;if(a&&r&&Xc(s)){for(s=0,r=n.responseEnd,e+=1;e<i.length;e++){var u=i[e],h=u.startTime;if(h>r)break;var w=u.transferSize,T=u.initiatorType;w&&Xc(T)&&(u=u.responseEnd,s+=w*(u<r?1:(r-h)/(u-h)))}if(--e,t+=8*(a+s)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Zo=null,Vo=null;function Ma(l){return l.nodeType===9?l:l.ownerDocument}function Gc(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lc(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Ko(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jo=null;function Ud(){var l=window.event;return l&&l.type==="popstate"?l===Jo?!1:(Jo=l,!0):(Jo=null,!1)}var $c=typeof setTimeout=="function"?setTimeout:void 0,Bd=typeof clearTimeout=="function"?clearTimeout:void 0,Qc=typeof Promise=="function"?Promise:void 0,Rd=typeof queueMicrotask=="function"?queueMicrotask:typeof Qc<"u"?function(l){return Qc.resolve(null).then(l).catch(Hd)}:$c;function Hd(l){setTimeout(function(){throw l})}function yi(l){return l==="head"}function kc(l,t){var i=t,e=0;do{var n=i.nextSibling;if(l.removeChild(i),n&&n.nodeType===8)if(i=n.data,i==="/$"||i==="/&"){if(e===0){l.removeChild(n),Ce(t);return}e--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")e++;else if(i==="html")mn(l.ownerDocument.documentElement);else if(i==="head"){i=l.ownerDocument.head,mn(i);for(var a=i.firstChild;a;){var s=a.nextSibling,r=a.nodeName;a[xe]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&a.rel.toLowerCase()==="stylesheet"||i.removeChild(a),a=s}}else i==="body"&&mn(l.ownerDocument.body);i=n}while(i);Ce(t)}function Zc(l,t){var i=l;l=0;do{var e=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),e&&e.nodeType===8)if(i=e.data,i==="/$"){if(l===0)break;l--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||l++;i=e}while(i)}function Wo(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Wo(i),ls(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}l.removeChild(i)}}function Yd(l,t,i,e){for(;l.nodeType===1;){var n=i;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(e){if(!l[xe])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(a=l.getAttribute("rel"),a==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(a!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(a=l.getAttribute("src"),(a!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&a&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var a=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===a)return l}else return l;if(l=zt(l.nextSibling),l===null)break}return null}function qd(l,t,i){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!i||(l=zt(l.nextSibling),l===null))return null;return l}function Vc(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=zt(l.nextSibling),l===null))return null;return l}function Fo(l){return l.data==="$?"||l.data==="$~"}function Io(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function Xd(l,t){var i=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||i.readyState!=="loading")t();else{var e=function(){t(),i.removeEventListener("DOMContentLoaded",e)};i.addEventListener("DOMContentLoaded",e),l._reactRetry=e}}function zt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Po=null;function Kc(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var i=l.data;if(i==="/$"||i==="/&"){if(t===0)return zt(l.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}l=l.nextSibling}return null}function Jc(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var i=l.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return l;t--}else i!=="/$"&&i!=="/&"||t++}l=l.previousSibling}return null}function Wc(l,t,i){switch(t=Ma(i),l){case"html":if(l=t.documentElement,!l)throw Error(f(452));return l;case"head":if(l=t.head,!l)throw Error(f(453));return l;case"body":if(l=t.body,!l)throw Error(f(454));return l;default:throw Error(f(451))}}function mn(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);ls(l)}var _t=new Map,Fc=new Set;function Ea(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=M.d;M.d={f:Gd,r:Ld,D:$d,C:Qd,L:kd,m:Zd,X:Kd,S:Vd,M:Jd};function Gd(){var l=Wt.f(),t=wa();return l||t}function Ld(l){var t=Zi(l);t!==null&&t.tag===5&&t.type==="form"?dg(t):Wt.r(l)}var Te=typeof document>"u"?null:document;function Ic(l,t,i){var e=Te;if(e&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof i=="string"&&(n+='[crossorigin="'+i+'"]'),Fc.has(n)||(Fc.add(n),l={rel:l,crossOrigin:i,href:t},e.querySelector(n)===null&&(t=e.createElement("link"),$l(t,"link",l),Hl(t),e.head.appendChild(t)))}}function $d(l){Wt.D(l),Ic("dns-prefetch",l,null)}function Qd(l,t){Wt.C(l,t),Ic("preconnect",l,t)}function kd(l,t,i){Wt.L(l,t,i);var e=Te;if(e&&l&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(n+='[imagesrcset="'+mt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(n+='[imagesizes="'+mt(i.imageSizes)+'"]')):n+='[href="'+mt(l)+'"]';var a=n;switch(t){case"style":a=je(l);break;case"script":a=Ae(l)}_t.has(a)||(l=N({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:l,as:t},i),_t.set(a,l),e.querySelector(n)!==null||t==="style"&&e.querySelector(hn(a))||t==="script"&&e.querySelector(yn(a))||(t=e.createElement("link"),$l(t,"link",l),Hl(t),e.head.appendChild(t)))}}function Zd(l,t){Wt.m(l,t);var i=Te;if(i&&l){var e=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(e)+'"][href="'+mt(l)+'"]',a=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Ae(l)}if(!_t.has(a)&&(l=N({rel:"modulepreload",href:l},t),_t.set(a,l),i.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(yn(a)))return}e=i.createElement("link"),$l(e,"link",l),Hl(e),i.head.appendChild(e)}}}function Vd(l,t,i){Wt.S(l,t,i);var e=Te;if(e&&l){var n=Vi(e).hoistableStyles,a=je(l);t=t||"default";var s=n.get(a);if(!s){var r={loading:0,preload:null};if(s=e.querySelector(hn(a)))r.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},i),(i=_t.get(a))&&lr(l,i);var u=s=e.createElement("link");Hl(u),$l(u,"link",l),u._p=new Promise(function(h,w){u.onload=h,u.onerror=w}),u.addEventListener("load",function(){r.loading|=1}),u.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Da(s,t,e)}s={type:"stylesheet",instance:s,count:1,state:r},n.set(a,s)}}}function Kd(l,t){Wt.X(l,t);var i=Te;if(i&&l){var e=Vi(i).hoistableScripts,n=Ae(l),a=e.get(n);a||(a=i.querySelector(yn(n)),a||(l=N({src:l,async:!0},t),(t=_t.get(n))&&tr(l,t),a=i.createElement("script"),Hl(a),$l(a,"link",l),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},e.set(n,a))}}function Jd(l,t){Wt.M(l,t);var i=Te;if(i&&l){var e=Vi(i).hoistableScripts,n=Ae(l),a=e.get(n);a||(a=i.querySelector(yn(n)),a||(l=N({src:l,async:!0,type:"module"},t),(t=_t.get(n))&&tr(l,t),a=i.createElement("script"),Hl(a),$l(a,"link",l),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},e.set(n,a))}}function Pc(l,t,i,e){var n=(n=K.current)?Ea(n):null;if(!n)throw Error(f(446));switch(l){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=je(i.href),i=Vi(n).hoistableStyles,e=i.get(t),e||(e={type:"style",instance:null,count:0,state:null},i.set(t,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){l=je(i.href);var a=Vi(n).hoistableStyles,s=a.get(l);if(s||(n=n.ownerDocument||n,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(l,s),(a=n.querySelector(hn(l)))&&!a._p&&(s.instance=a,s.state.loading=5),_t.has(l)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},_t.set(l,i),a||Wd(n,l,i,s.state))),t&&e===null)throw Error(f(528,""));return s}if(t&&e!==null)throw Error(f(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ae(i),i=Vi(n).hoistableScripts,e=i.get(t),e||(e={type:"script",instance:null,count:0,state:null},i.set(t,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(f(444,l))}}function je(l){return'href="'+mt(l)+'"'}function hn(l){return'link[rel="stylesheet"]['+l+"]"}function lp(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function Wd(l,t,i,e){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?e.loading=1:(t=l.createElement("link"),e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2}),$l(t,"link",i),Hl(t),l.head.appendChild(t))}function Ae(l){return'[src="'+mt(l)+'"]'}function yn(l){return"script[async]"+l}function tp(l,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var e=l.querySelector('style[data-href~="'+mt(i.href)+'"]');if(e)return t.instance=e,Hl(e),e;var n=N({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return e=(l.ownerDocument||l).createElement("style"),Hl(e),$l(e,"style",n),Da(e,i.precedence,l),t.instance=e;case"stylesheet":n=je(i.href);var a=l.querySelector(hn(n));if(a)return t.state.loading|=4,t.instance=a,Hl(a),a;e=lp(i),(n=_t.get(n))&&lr(e,n),a=(l.ownerDocument||l).createElement("link"),Hl(a);var s=a;return s._p=new Promise(function(r,u){s.onload=r,s.onerror=u}),$l(a,"link",e),t.state.loading|=4,Da(a,i.precedence,l),t.instance=a;case"script":return a=Ae(i.src),(n=l.querySelector(yn(a)))?(t.instance=n,Hl(n),n):(e=i,(n=_t.get(a))&&(e=N({},i),tr(e,n)),l=l.ownerDocument||l,n=l.createElement("script"),Hl(n),$l(n,"link",e),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(f(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,Da(e,i.precedence,l));return t.instance}function Da(l,t,i){for(var e=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,a=n,s=0;s<e.length;s++){var r=e[s];if(r.dataset.precedence===t)a=r;else if(a!==n)break}a?a.parentNode.insertBefore(l,a.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(l,t.firstChild))}function lr(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function tr(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Oa=null;function ip(l,t,i){if(Oa===null){var e=new Map,n=Oa=new Map;n.set(i,e)}else n=Oa,e=n.get(i),e||(e=new Map,n.set(i,e));if(e.has(l))return e;for(e.set(l,null),i=i.getElementsByTagName(l),n=0;n<i.length;n++){var a=i[n];if(!(a[xe]||a[ql]||l==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var s=a.getAttribute(t)||"";s=l+s;var r=e.get(s);r?r.push(a):e.set(s,[a])}}return e}function ep(l,t,i){l=l.ownerDocument||l,l.head.insertBefore(i,t==="title"?l.querySelector("head > title"):null)}function Fd(l,t,i){if(i===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function np(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Id(l,t,i,e){if(i.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var n=je(e.href),a=t.querySelector(hn(n));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xa.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=a,Hl(a);return}a=t.ownerDocument||t,e=lp(e),(n=_t.get(n))&&lr(e,n),a=a.createElement("link"),Hl(a);var s=a;s._p=new Promise(function(r,u){s.onload=r,s.onerror=u}),$l(a,"link",e),i.instance=a}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=xa.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}var ir=0;function Pd(l,t){return l.stylesheets&&l.count===0&&Ua(l,l.stylesheets),0<l.count||0<l.imgCount?function(i){var e=setTimeout(function(){if(l.stylesheets&&Ua(l,l.stylesheets),l.unsuspend){var a=l.unsuspend;l.unsuspend=null,a()}},6e4+t);0<l.imgBytes&&ir===0&&(ir=62500*Nd());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ua(l,l.stylesheets),l.unsuspend)){var a=l.unsuspend;l.unsuspend=null,a()}},(l.imgBytes>ir?50:800)+t);return l.unsuspend=i,function(){l.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function xa(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ua(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Na=null;function Ua(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Na=new Map,t.forEach(lm,l),Na=null,xa.call(l))}function lm(l,t){if(!(t.state.loading&4)){var i=Na.get(l);if(i)var e=i.get(null);else{i=new Map,Na.set(l,i);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<n.length;a++){var s=n[a];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(i.set(s.dataset.precedence,s),e=s)}e&&i.set(null,e)}n=t.instance,s=n.getAttribute("data-precedence"),a=i.get(s)||e,a===e&&i.set(null,n),i.set(s,n),this.count++,e=xa.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),a?a.parentNode.insertBefore(n,a.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var bn={$$typeof:ol,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function tm(l,t,i,e,n,a,s,r,u){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.hiddenUpdates=Wa(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function ap(l,t,i,e,n,a,s,r,u,h,w,T){return l=new tm(l,t,i,s,u,h,w,T,r),t=1,a===!0&&(t|=24),a=ot(3,null,null,t),l.current=a,a.stateNode=l,t=Us(),t.refCount++,l.pooledCache=t,t.refCount++,a.memoizedState={element:e,isDehydrated:i,cache:t},Ys(a),l}function sp(l){return l?(l=ee,l):ee}function op(l,t,i,e,n,a){n=sp(n),e.context===null?e.context=n:e.pendingContext=n,e=si(t),e.payload={element:i},a=a===void 0?null:a,a!==null&&(e.callback=a),i=oi(l,e,t),i!==null&&(it(i,l,t),Je(i,l,t))}function rp(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var i=l.retryLane;l.retryLane=i!==0&&i<t?i:t}}function er(l,t){rp(l,t),(l=l.alternate)&&rp(l,t)}function up(l){if(l.tag===13||l.tag===31){var t=Oi(l,67108864);t!==null&&it(t,l,67108864),er(l,67108864)}}function gp(l){if(l.tag===13||l.tag===31){var t=pt();t=Fa(t);var i=Oi(l,t);i!==null&&it(i,l,t),er(l,t)}}var Ba=!0;function im(l,t,i,e){var n=S.T;S.T=null;var a=M.p;try{M.p=2,nr(l,t,i,e)}finally{M.p=a,S.T=n}}function em(l,t,i,e){var n=S.T;S.T=null;var a=M.p;try{M.p=8,nr(l,t,i,e)}finally{M.p=a,S.T=n}}function nr(l,t,i,e){if(Ba){var n=ar(e);if(n===null)Qo(l,t,e,Ra,i),pp(l,e);else if(am(n,l,t,i,e))e.stopPropagation();else if(pp(l,e),t&4&&-1<nm.indexOf(l)){for(;n!==null;){var a=Zi(n);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var s=Ai(a.pendingLanes);if(s!==0){var r=a;for(r.pendingLanes|=2,r.entangledLanes|=2;s;){var u=1<<31-at(s);r.entanglements[1]|=u,s&=~u}Ot(a),(el&6)===0&&(ba=et()+500,pn(0))}}break;case 31:case 13:r=Oi(a,2),r!==null&&it(r,a,2),wa(),er(a,2)}if(a=ar(e),a===null&&Qo(l,t,e,Ra,i),a===n)break;n=a}n!==null&&e.stopPropagation()}else Qo(l,t,e,null,i)}}function ar(l){return l=ss(l),sr(l)}var Ra=null;function sr(l){if(Ra=null,l=ki(l),l!==null){var t=x(l);if(t===null)l=null;else{var i=t.tag;if(i===13){if(l=Y(t),l!==null)return l;l=null}else if(i===31){if(l=P(t),l!==null)return l;l=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ra=l,null}function cp(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lp()){case vr:return 2;case wr:return 8;case jn:case $p:return 32;case Sr:return 268435456;default:return 32}default:return 32}}var or=!1,bi=null,vi=null,wi=null,vn=new Map,wn=new Map,Si=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pp(l,t){switch(l){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":vn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":wn.delete(t.pointerId)}}function Sn(l,t,i,e,n,a){return l===null||l.nativeEvent!==a?(l={blockedOn:t,domEventName:i,eventSystemFlags:e,nativeEvent:a,targetContainers:[n]},t!==null&&(t=Zi(t),t!==null&&up(t)),l):(l.eventSystemFlags|=e,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function am(l,t,i,e,n){switch(t){case"focusin":return bi=Sn(bi,l,t,i,e,n),!0;case"dragenter":return vi=Sn(vi,l,t,i,e,n),!0;case"mouseover":return wi=Sn(wi,l,t,i,e,n),!0;case"pointerover":var a=n.pointerId;return vn.set(a,Sn(vn.get(a)||null,l,t,i,e,n)),!0;case"gotpointercapture":return a=n.pointerId,wn.set(a,Sn(wn.get(a)||null,l,t,i,e,n)),!0}return!1}function fp(l){var t=ki(l.target);if(t!==null){var i=x(t);if(i!==null){if(t=i.tag,t===13){if(t=Y(i),t!==null){l.blockedOn=t,Cr(l.priority,function(){gp(i)});return}}else if(t===31){if(t=P(i),t!==null){l.blockedOn=t,Cr(l.priority,function(){gp(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){l.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Ha(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var i=ar(l.nativeEvent);if(i===null){i=l.nativeEvent;var e=new i.constructor(i.type,i);as=e,i.target.dispatchEvent(e),as=null}else return t=Zi(i),t!==null&&up(t),l.blockedOn=i,!1;t.shift()}return!0}function dp(l,t,i){Ha(l)&&i.delete(t)}function sm(){or=!1,bi!==null&&Ha(bi)&&(bi=null),vi!==null&&Ha(vi)&&(vi=null),wi!==null&&Ha(wi)&&(wi=null),vn.forEach(dp),wn.forEach(dp)}function Ya(l,t){l.blockedOn===t&&(l.blockedOn=null,or||(or=!0,b.unstable_scheduleCallback(b.unstable_NormalPriority,sm)))}var qa=null;function mp(l){qa!==l&&(qa=l,b.unstable_scheduleCallback(b.unstable_NormalPriority,function(){qa===l&&(qa=null);for(var t=0;t<l.length;t+=3){var i=l[t],e=l[t+1],n=l[t+2];if(typeof e!="function"){if(sr(e||i)===null)continue;break}var a=Zi(i);a!==null&&(l.splice(t,3),t-=3,no(a,{pending:!0,data:n,method:i.method,action:e},e,n))}}))}function Ce(l){function t(u){return Ya(u,l)}bi!==null&&Ya(bi,l),vi!==null&&Ya(vi,l),wi!==null&&Ya(wi,l),vn.forEach(t),wn.forEach(t);for(var i=0;i<Si.length;i++){var e=Si[i];e.blockedOn===l&&(e.blockedOn=null)}for(;0<Si.length&&(i=Si[0],i.blockedOn===null);)fp(i),i.blockedOn===null&&Si.shift();if(i=(l.ownerDocument||l).$$reactFormReplay,i!=null)for(e=0;e<i.length;e+=3){var n=i[e],a=i[e+1],s=n[Wl]||null;if(typeof a=="function")s||mp(i);else if(s){var r=null;if(a&&a.hasAttribute("formAction")){if(n=a,s=a[Wl]||null)r=s.formAction;else if(sr(n)!==null)continue}else r=s.action;typeof r=="function"?i[e+1]=r:(i.splice(e,3),e-=3),mp(i)}}}function hp(){function l(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(s){return n=s})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),e||setTimeout(i,20)}function i(){if(!e&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){e=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function rr(l){this._internalRoot=l}Xa.prototype.render=rr.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(f(409));var i=t.current,e=pt();op(i,e,l,t,null,null)},Xa.prototype.unmount=rr.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;op(l.current,2,null,l,null,null),wa(),t[Qi]=null}};function Xa(l){this._internalRoot=l}Xa.prototype.unstable_scheduleHydration=function(l){if(l){var t=Ar();l={blockedOn:null,target:l,priority:t};for(var i=0;i<Si.length&&t!==0&&t<Si[i].priority;i++);Si.splice(i,0,l),i===0&&fp(l)}};var yp=C.version;if(yp!=="19.2.3")throw Error(f(527,yp,"19.2.3"));M.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(f(188)):(l=Object.keys(l).join(","),Error(f(268,l)));return l=_(t),l=l!==null?E(l):null,l=l===null?null:l.stateNode,l};var om={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Ee=Ga.inject(om),nt=Ga}catch{}}return _n.createRoot=function(l,t){if(!A(l))throw Error(f(299));var i=!1,e="",n=Tg,a=jg,s=Ag;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ap(l,1,!1,null,null,i,e,null,n,a,s,hp),l[Qi]=t.current,$o(l),new rr(t)},_n.hydrateRoot=function(l,t,i){if(!A(l))throw Error(f(299));var e=!1,n="",a=Tg,s=jg,r=Ag,u=null;return i!=null&&(i.unstable_strictMode===!0&&(e=!0),i.identifierPrefix!==void 0&&(n=i.identifierPrefix),i.onUncaughtError!==void 0&&(a=i.onUncaughtError),i.onCaughtError!==void 0&&(s=i.onCaughtError),i.onRecoverableError!==void 0&&(r=i.onRecoverableError),i.formState!==void 0&&(u=i.formState)),t=ap(l,1,!0,t,i??null,e,n,u,a,s,r,hp),t.context=sp(null),i=t.current,e=pt(),e=Fa(e),n=si(e),n.callback=null,oi(i,n,e),i=e,t.current.lanes=i,Oe(t,i),Ot(t),l[Qi]=t.current,$o(l),new Xa(t)},_n.version="19.2.3",_n}var Cp;function ym(){if(Cp)return cr.exports;Cp=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(C){console.error(C)}}return b(),cr.exports=hm(),cr.exports}var bm=ym();const vm=b=>b.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wm=b=>b.replace(/^([A-Z])|[\s-_]+(\w)/g,(C,O,f)=>f?f.toUpperCase():O.toLowerCase()),Mp=b=>{const C=wm(b);return C.charAt(0).toUpperCase()+C.slice(1)},Rp=(...b)=>b.filter((C,O,f)=>!!C&&C.trim()!==""&&f.indexOf(C)===O).join(" ").trim(),Sm=b=>{for(const C in b)if(C.startsWith("aria-")||C==="role"||C==="title")return!0};var zm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const _m=Sl.forwardRef(({color:b="currentColor",size:C=24,strokeWidth:O=2,absoluteStrokeWidth:f,className:A="",children:x,iconNode:Y,...P},U)=>Sl.createElement("svg",{ref:U,...zm,width:C,height:C,stroke:b,strokeWidth:f?Number(O)*24/Number(C):O,className:Rp("lucide",A),...!x&&!Sm(P)&&{"aria-hidden":"true"},...P},[...Y.map(([_,E])=>Sl.createElement(_,E)),...Array.isArray(x)?x:[x]]));const _i=(b,C)=>{const O=Sl.forwardRef(({className:f,...A},x)=>Sl.createElement(_m,{ref:x,iconNode:C,className:Rp(`lucide-${vm(Mp(b))}`,`lucide-${b}`,f),...A}));return O.displayName=Mp(b),O};const Tm=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],jm=_i("bird",Tm);const Am=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Cm=_i("circle",Am);const Mm=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Em=_i("key",Mm);const Dm=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Om=_i("music",Dm);const xm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nm=_i("star",xm);const Um=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Bm=_i("volume-2",Um);const Rm=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Hm=_i("volume-x",Rm);const Ym=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Hp=_i("x",Ym);function qm({displayName:b,onConfirm:C,onCancel:O,onClose:f}){return d.jsx("div",{className:"modal-overlay",onClick:f,children:d.jsx("div",{className:"modal-content",onClick:A=>A.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:f,children:d.jsx(Hp,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[b,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:C,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",b]}),d.jsx("button",{onClick:O,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function Yp(){const b=localStorage.getItem("openedWindows");if(!b)return new Set;try{const C=JSON.parse(b);return new Set(C)}catch(C){return console.error("Failed to parse opened windows:",C),new Set}}function Xm(b){const C=Yp();return C.add(b),localStorage.setItem("openedWindows",JSON.stringify([...C])),C}function Ep(){localStorage.removeItem("openedWindows")}function Gm(){localStorage.removeItem("adventCalendarUser")}const Dp=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function Lm({userName:b,onUserSelect:C}){const[O]=Sl.useState(()=>Dp[Math.floor(Math.random()*Dp.length)]),[f,A]=Sl.useState(!1),x=b==="Tanya"?"Таня":b==="Zebra"?"Зёбра":"неведомый гость",Y=()=>{A(!0)},P=()=>{Gm(),Ep(),A(!1),window.location.reload()},U=()=>{Ep(),A(!1)},_=()=>{A(!1)};return b?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[O,","," ",d.jsx("span",{className:"user-name clickable",onClick:Y,title:`А точно ли я ${x}?..`,children:x}),"!"]})}),f&&(b==="Tanya"||b==="Zebra")&&d.jsx(qm,{displayName:x,onConfirm:P,onCancel:U,onClose:_})]}):d.jsxs("div",{className:"user-selection",children:[d.jsxs("p",{className:"selection-prompt",style:{margin:"0"},children:["Привет! Это Женя, и вот мой адвент."," "]}),d.jsxs("p",{className:"selection-prompt",style:{margin:"0"},children:[" ","Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые."," "]}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsxs("p",{className:"selection-prompt",style:{margin:"0"},children:['(это "да, но не очень внимательно" 👀).'," "]}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>C("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>C("Zebra"),children:"Зёбра"})]})]})}function $m(){const[b,C]=Sl.useState([]),[O,f]=Sl.useState([]);return Sl.useEffect(()=>{const A=U=>_=>{const E=Math.sin(U*9301+_*49297)*43758.5453;return E-Math.floor(E)},x=Array.from({length:60}).map((U,_)=>{const E=A(_+1);return{left:`${Math.floor(E(1)*100)}%`,top:`${Math.floor(E(2)*70)}%`,animationDelay:`${(E(3)*3).toFixed(2)}s`,opacity:+(.3+E(4)*.7).toFixed(2)}}),Y=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,_)=>{const E=A(100+_);let N=30+Math.floor(E(1)*60),Z=Math.max(10,Math.floor(E(2)*30));const yl=Y[_%Y.length],bl=+(.35+E(3)*.55).toFixed(2),zl=yl.replace("VAR",String(bl)),Ul=`${40+Math.floor(E(4)*30)}% ${30+Math.floor(E(5)*30)}%`,vl=40+Math.floor(E(6)*40),Al=Math.floor(E(7)*20),ol=-20+Math.floor(E(8)*140);let _l=5+Math.floor(E(9)*40);return _===0&&(_l=Math.max(2,_l-8),N=Math.max(20,Math.floor(N*.85)),Z=Math.max(8,Math.floor(Z*.8))),{left:`${ol}%`,top:`${_l}%`,width:`${N}vw`,height:`${Z}vh`,opacity:bl,color:zl,borderRadius:Ul,duration:vl,delay:Al}});window.requestAnimationFrame(()=>{C(x),f(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:b.map((A,x)=>d.jsx("div",{className:"star",style:{left:A.left,top:A.top,animationDelay:A.animationDelay,opacity:A.opacity}},x))})]}),d.jsx("div",{className:"layer layer-clouds",children:O.map((A,x)=>d.jsx("div",{className:`cloud cloud-${x+1}`,style:{position:"absolute",left:A.left,top:A.top,width:A.width,height:A.height,background:A.color,opacity:A.opacity,borderRadius:A.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${A.duration}s linear ${A.delay}s infinite`}},x))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((A,x)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${A},300 ${A-20},250 ${A-15},250 ${A-30},200 ${A-25},200 ${A-40},150 ${A+40},150 ${A+25},200 ${A+30},200 ${A+15},250 ${A+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:A-5,y:"280",width:"10",height:"20",fill:"#111827"})]},x))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const Qm=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-medium","window-large","window-small","window-medium","window-large","window-small"],km=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square","window-tall","window-square","window-rect","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square","window-tall"],Op=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window","door","window","door","window","window","door","window","door","door","window","door","window","door","door","window"],xp=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!1,frame:"simple"}],Np=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"circular",panes:4,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"circular",panes:0,glass:"frosted",hasPlant:!0,hasSill:!0}],Up=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly","wreath","bow","holly"],Bp=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly","none","lights","candle","holly","none"],Zm=b=>{switch(b){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(Cm,{className:"door-handle ring",size:12});case"star":return d.jsx(Nm,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},Vm=b=>{if(b===0)return null;const C=b===4||b===6?2:4,O=b===4?2:b===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${C}, 1fr)`,gridTemplateRows:`repeat(${O}, 1fr)`},children:Array.from({length:b}).map((f,A)=>d.jsx("div",{className:"window-pane"},A))})},Km=b=>{if(b==="none")return null;switch(b){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},Jm=b=>{if(b==="none")return null;switch(b){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function Wm({windowNumber:b,isActive:C,isOpened:O,isExactMatch:f,onClick:A}){const x=Sl.useRef(null),Y=b===17,P=()=>{Y&&x.current&&(x.current.currentTime=0,x.current.play().catch(wl=>console.log("Audio play failed:",wl)))},U=Qm[b-1],_=km[b-1],E=C&&!O||C&&f?"window-glow-intense":"",Z=new Set([11,6,12,16,25,30,33,36,37]).has(b),yl=Z?"window-round":_,zl=Op[b-1]==="door";let Ul=0,vl=0;for(let wl=0;wl<b;wl++)Op[wl]==="door"?Ul++:vl++;const Al=xp[(Ul-1)%xp.length],ol=Np[(vl-1)%Np.length],_l=Up[(Ul-1)%Up.length],Ql=Bp[(vl-1)%Bp.length];return d.jsx("div",{className:`calendar-window ${U} ${yl} ${E} ${O?"window-opened":""} ${C?"window-active":"window-inactive"}`,onClick:A,onMouseEnter:P,children:zl?d.jsxs("div",{className:`door-element ${Al.type}`,children:[Km(_l),d.jsx("div",{className:`door-frame frame-${Al.frame}`,children:d.jsxs("div",{className:`door-panel wood-${Al.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:Z?"50%":void 0,overflow:"hidden"},children:[Al.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[Zm(Al.handle),Al.hasKeyhole&&d.jsx(Em,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:b})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${U}`,children:[Jm(Ql),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${ol.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:Z?"50%":void 0,overflow:"hidden"},children:[Vm(ol.panes),ol.shape==="arched"&&d.jsx("div",{className:"window-arch"}),Y&&d.jsx(jm,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:b})]}),ol.hasSill&&d.jsx("div",{className:"window-sill",children:ol.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function Fm({windowNumber:b,message:C,onClose:O}){return d.jsx("div",{className:"modal-overlay",onClick:O,children:d.jsx("div",{className:"modal-content",onClick:f=>f.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:O,children:d.jsx(Hp,{size:24})}),b!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",b]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:C}})]})})})}function La(b){const C=new Date(Date.UTC(2025,11,19,21,0,0,0)),O=b;return new Date(C.getTime()+O*24*60*60*1e3)}function $a(b,C){return C.getTime()>=b.getTime()}function mr(b,C){const O=new Date(b);O.setUTCHours(0,0,0,0);const f=new Date(C);return f.setUTCHours(0,0,0,0),O.getTime()===f.getTime()}const Im="/advent/assets/muerte-DfSvC3Z-.jpg",Pm="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",ih="/advent/assets/Ofrenda-DDd9dlHK.jpg",eh="/advent/assets/kolumbia-DUKl5Drs.webp",nh="/advent/assets/kolumb2--JWazZNY.webp",ah="/advent/assets/melhior-5oqVeQRz.webp",sh="/advent/assets/shir-CPxmcAyu.jpg",oh="/advent/assets/markes-DHTR6R5s.jpg",rh="/advent/assets/tolkin-Bkb1qdyy.jpg",uh="/advent/assets/tolkin1-Gt7VHXrl.jpg",gh="/advent/assets/berry-BayIKnFN.jpg",ch="/advent/assets/berry1-aZtyDiG8.jpg",ph="/advent/assets/gvatemala1-C3fdq1S5.jpg",fh="/advent/assets/graves-B4Ep0a2x.jpg",dh="/advent/assets/carpet1-BHoBEQUm.jpg",mh="/advent/assets/airsnakes-BtpaN7a0.jpg",hh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",bh="/advent/assets/brazil1-C1nzNzga.webp",vh="/advent/assets/ethiopia-CfI92xpA.jpg",wh="/advent/assets/goats-B1iHvHcl.jpg",Sh="/advent/assets/rabanda-ClmJ6Exb.jpg",zh="/advent/assets/honduras-DTj2TRgE.jpg",_h="/advent/assets/honduras1-BfVuI_LD.jpg",Th="/advent/assets/resp-DBSDT0A7.png",jh="/advent/assets/cicoriy-DL-J_EKv.webp",Ah="/advent/assets/carob-DDo_E6jz.jpg",Ch="/advent/assets/tonka-CaSKsR3p.webp",Mh="/advent/assets/kardamon-D-LlmV-v.webp",Eh="/advent/assets/mem1-Coiz1JZ3.jpg",Dh="/advent/assets/cafe-DrSeHG9j.jpg",Oh="/advent/assets/yerevan1-0r9N0UnH.jpg",xh="/advent/assets/yerevan2-fQnNyY8p.jpg",Nh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Bh="/advent/assets/bears-BwIhEuov.jpg",Rh="/advent/assets/ararat-DAhBMtll.jpg",Hh="/advent/assets/jazzve-DliHyYYl.jpg",Yh="/advent/assets/abc-C__8usP9.webp",qh="/advent/assets/noy-KD54xzv8.jpg",Xh="/advent/assets/poss-LSCreopJ.jpg",Gh="/advent/assets/poss1-CPSySb8a.jpg",Lh="/advent/assets/poss2-4TAHhBM7.jpg",$h="/advent/assets/poss3-BBe7PtjI.jpg",Qh="/advent/assets/poss4-B0yE7kHZ.jpg",kh="/advent/assets/poss5-DtHf0aUR.jpg",Zh="/advent/assets/possa-mom-BPlrTPcT.jpg",Vh="/advent/assets/possa-mom1-D9ySRpWd.jpg",Kh="/advent/assets/poss-and-oposs-DDSg4YaG.webp",Jh="/advent/assets/possaKnowl-CYkQIhVz.jpg",Wh="/advent/assets/thief-CoIDv1iT.jpg",Fh="/advent/assets/smile-1-5jdl68.jpg",Ih="/advent/assets/merch-DdoKdpQb.jpg",Ph="/advent/assets/merch1-CtZos-AO.jpg",l0="/advent/assets/cammomile-Byca6E_e.jpg",t0="/advent/assets/cham-tea-BPAncxo6.jpg",i0="/advent/assets/chamomile1-DbctfrkQ.jpg",e0="/advent/assets/chamomile2-k1NNuBaK.jpg",n0="/advent/assets/juniper-r5wxtBRx.jpg",a0="/advent/assets/juniper1-BWoP6YHZ.jpg",s0="/advent/assets/juniper3-BXCLBj8d.jpg",o0="/advent/assets/juniperTea-0KTJdRf4.jpg",r0="/advent/assets/cham-sci-ixEH2xhc.jpg",u0="/advent/assets/juniperTattoo-Drp4YpCt.jpg",g0="/advent/assets/chamomileTattoo-BGNh6NOB.jpg",c0="/advent/assets/juniper-sci-hXzXrr9H.jpg",p0="/advent/assets/jun-sci2-zIGUP1FK.jpg",f0="/advent/assets/solovki-B95fDwav.webp",d0="/advent/assets/solovki1-u3Varh4x.webp",m0="/advent/assets/solovki2-D19kpuou.jpg",h0="/advent/assets/coffeCard1-DNW-HsaJ.webp",y0="/advent/assets/coffeCard2-BNxhtL4t.webp",b0="/advent/assets/coffeCard3-AyYO0wak.webp",v0="/advent/assets/coffeCard4-DI2_0NqK.webp",w0="/advent/assets/coffeCard5-dUEpTs6X.webp",S0="/advent/assets/coffeCard6-BDW-PLix.webp",z0="/advent/assets/atitlan-dYAI5eYf.jpg",_0="/advent/assets/atitlan1-C5ZSs572.jpg",T0="/advent/assets/guatemala8-Bi5KoB48.jpg",j0="/advent/assets/guatemalaCorn-ClR7vTSk.jpg",A0="/advent/assets/guatemalaTkan-DTKRCwUa.jpg",C0="/advent/assets/himalaya1-nN0t50Ma.avif",M0="/advent/assets/pinkSalt-BizDWWT4.jpg",E0="/advent/assets/saltMeme-Dq0p8Dwq.jpg",D0="/advent/assets/matcha11-CE8SBYA1.jpg",O0="/advent/assets/matcha-C8bXd3OR.jpg",x0="/advent/assets/matcha2-6Pc5CGop.jpg",N0="/advent/assets/matcha3-PqMaWA5u.jpg",U0="/advent/assets/matchaOld-BdH0N0Hr.jpg",B0="/advent/assets/matchaOld1-d7pxtrP4.jpg",R0="/advent/assets/harvest-DiJhXofV.jpg",H0="/advent/assets/harvest1-f7uXoVQt.jpg",Y0="/advent/assets/matchaColors-CePGvb-v.jpg",q0="/advent/assets/cat1-CteOJfo2.jpg",X0="/advent/assets/cat2-CI2WaIbw.jpg",G0="/advent/assets/cat3-wi61L9Ty.jpg",L0="/advent/assets/cat4-BQJa7vAE.jpg",$0="/advent/assets/cat5-D7xwVjOS.jpg",Q0="/advent/assets/piterMeme-ClYb6GkP.jpg",k0="/advent/assets/monk-D17MXC2B.jpg",Z0="/advent/assets/nyMeme1-6GOagR6o.jpg",V0="/advent/assets/nyMeme2-7Telpurx.jpg",K0="/advent/assets/nyMeme4-BNwb-aPZ.jpg",J0="/advent/assets/nyMeme5-mCJoC8cu.jpg",W0="/advent/assets/nyMeme6-BndRKfA9.jpg",F0="/advent/assets/nyMeme7-CBDPmv-H.jpg",I0="/advent/assets/nyMeme8-Dq-5p2Cs.jpg",P0="/advent/assets/nyMeme9-DtlbkQI_.jpg",ly="/advent/assets/gerb1-BxSMTsFR.jpg",ty="/advent/assets/gerb2-B_qnuNFN.jpg",iy="/advent/assets/okMeme--p34fXU_.jpg",ey="/advent/assets/unk-BB2m3QLz.jpg",ny="/advent/assets/u70-DIKlKj5y.jpg",ay="/advent/assets/map-BdUX3X-y.jpg",sy="/advent/assets/chasha-Ctu2v-xB.jpg",oy="/advent/assets/ft0-COvPvYCF.jpg",ry="/advent/assets/ft1-BgWi-igf.jpg",uy="/advent/assets/ft2-ctNJAFEu.jpg",gy="/advent/assets/cheese-BSnE0RhA.jpg",cy="/advent/assets/cheese2-DJbQoeGH.jpg",py="/advent/assets/reishi-DE1KAqzF.webp",fy="/advent/assets/kamakura-_Vb1gjNI.webp",dy="/advent/assets/kamakura2-D_nBSmvm.webp",my="/advent/assets/dragon2-BcyxgPxK.jpg",hy="/advent/assets/dragon1-BlTPZene.jpg",yy="/advent/assets/kissaten-nwC-faWE.jpg",by="/advent/assets/kissaten1-DZ7zOaJ5.jpg",vy="/advent/assets/sakura-CKPCINYL.jpg",wy="/advent/assets/sakura1-eJ7b3pjZ.jpg",Sy="/advent/assets/pistachios-2oIphEJF.jpg",zy="/advent/assets/pistachios1-DxqEClZb.jpg",_y="/advent/assets/pistachios2-U22W4XjX.jpg",Ty="/advent/assets/pistachios3-CekkXn2S.jpg",jy="/advent/assets/pistachioLatte-CX5fY4GJ.jpg",Ay="/advent/assets/unicornGerb-B1IgHAym.jpg",Cy="/advent/assets/scotish-DuOWD4BU.jpg",My="/advent/assets/pinecons-DN4xaoQh.jpg",Ey="/advent/assets/pinecons0-t__cQNmk.jpg",Dy="/advent/assets/pinecons1-DGIeou-f.jpg",Oy="/advent/assets/pinecons3-xCOek82c.jpg",xy="/advent/assets/noma-CtxKXYmb.jpg",Ny="/advent/assets/coffee05-CtvbYTlI.jpg",Uy="/advent/assets/koliadky-DFZjday1.jpg",By="/advent/assets/koliadky1-D8kgwEZZ.jpg",Ry="/advent/assets/koliadky4-CDUgUMip.jpg",Hy="/advent/assets/smolensk-DSJa0qX2.jpg",Yy="/advent/assets/smolensk1-C8faW8yG.jpg",qy="/advent/assets/smolensk3-BR8avWFN.jpg",Xy="/advent/assets/tower-LkqE0Ps6.jpg",Gy="/advent/assets/tower1-Df1m5F8Z.jpg",Ly="/advent/assets/christmas-DDkkr5ot.jpg",$y="/advent/assets/christmas1-BeD30mht.jpg",Qy="/advent/assets/christmas2-BesTWRrW.jpg",ky="/advent/assets/drogo-CUI54dn7.jpg",Zy="/advent/assets/cedar-t4INFow4.jpg",Vy="/advent/assets/cedar1-DZqAq6zZ.jpg",Ky="/advent/assets/choko-Baf9JYP3.jpg",Jy="/advent/assets/blessed1-CWF1o7u1.jpg",Wy="/advent/assets/blessed2-CU2p4ypS.jpg",Fy="/advent/assets/blessed3-5rhrqKyi.jpg",Iy="/advent/assets/bless4-4Ll_GvpY.jpg",Py="/advent/assets/bless5-UTCmR7lr.jpg",l1="/advent/assets/bless6-CJxznB30.jpg",t1="/advent/assets/bless9-DcH5d8C6.jpg",i1="/advent/assets/teabag-7cU4nlRp.jpg",e1="/advent/assets/sombrero1-ToxUavrc.jpg",n1="/advent/assets/sombrero2-CoV60mUj.jpg",a1="/advent/assets/sombrero3-CtpxCN50.jpg",s1="/advent/assets/musik-DGR0Ibv7.jpg",o1="/advent/assets/musik1-CxBli7oM.jpg",r1="/advent/assets/mex-C1sNijnv.jpg",u1="/advent/assets/mex3-CB0LfBt5.jpg",g1="/advent/assets/sanmiguel-CybJiYPe.jpg",c1="/advent/assets/frida-07UEoWIv.webp",p1="/advent/assets/frida1-B9HyRZK3.jpg",f1="/advent/assets/frida3-SOwYbJa9.jpg",d1="/advent/assets/tea_bag-DRWtL3Mc.jpg",m1="/advent/assets/guilt-DLHr3T3c.jpg",h1="/advent/assets/bosphorus-BURA-rTJ.jpg",y1="/advent/assets/bosphorus1-BdEkWYac.jpg",b1="/advent/assets/turkish1-BLD0BNe9.jpg",v1="/advent/assets/turkish2-jH-U0BZA.jpg",w1="/advent/assets/turkish3-yGiMzEP9.jpg",S1="/advent/assets/turkish4-C37DGkOD.jpg",z1="/advent/assets/moon1-4f8TvoJs.jpg",_1="/advent/assets/mooncoffe-Dx5_ymHM.jpg",T1="/advent/assets/scarycoffee-BVstMak1.jpg",j1="/advent/assets/beatles-BMUnAxoJ.jpg",A1="/advent/assets/beatles1-BdTV_cMa.jpg",C1="/advent/assets/sweets-h4TtI9FD.jpg",M1="/advent/assets/bless10-DqiWaUm6.jpg",E1="/advent/assets/blessed4-Dy78_OG_.jpg",D1="/advent/assets/blessed12-BMt05-MF.jpg",O1="/advent/assets/blessed13-DuNDa_tr.jpg",x1="/advent/assets/blessed11-DD-pI5pL.jpg",N1="/advent/assets/pb1-CmsDttyT.jpg",U1="/advent/assets/pb2-scSdFpT7.jpg",B1="/advent/assets/pb3-CXZBsr-q.jpg",R1="/advent/assets/pb4-sWWVmf-k.jpg",H1="/advent/assets/secrets-BzshSfFv.jpg",Y1="/advent/assets/bomb-7vp9rKw0.jpg",q1="/advent/assets/bomb1-D3-b_goP.jpg",X1="/advent/assets/rr-LNEySDYi.jpg",G1="/advent/assets/nm1-Z6tSzJYu.jpg",L1="/advent/assets/nm2-3MPvoxsL.jpg",$1="/advent/assets/nap1-s81St9IO.jpg",Q1="/advent/assets/farm-CMsirPTR.jpg",k1="/advent/assets/caramel-CKe19ETz.jpg",Z1="/advent/assets/gvat1-BnXHAhLg.jpg",V1="/advent/assets/beans-xjUObHDn.jpg",K1="/advent/assets/beans1-DPmIUiHE.jpg",J1="/advent/assets/gvat3-BvmjR1Yt.jpg",W1="/advent/assets/gvat4-BonOF4c8.jpg",F1="/advent/assets/gvat5-DAmzdaWp.jpg",I1="/advent/assets/blessed15-CrAPuw6a.jpg",P1="/advent/assets/kenia-BHSxrNcM.jpg",lb="/advent/assets/zebra1-BxCrDJfA.jpg",tb="/advent/assets/zebra2-KCcJ1JZW.jpg",ib="/advent/assets/zebra3-D_2_xsLF.jpg",o={muerte:Im,katrina:Pm,pink:lh,rese:th,Ofrenda:ih,kolumb2:nh,kolumbia:eh,melhior:ah,shir:sh,markes:oh,tolkin:rh,tolkin1:uh,berries:gh,berries1:ch,gvatemala1:ph,graves:fh,carpet1:dh,airsnake2:mh,fish:hh,fish1:yh,brazil1:bh,ethiopia:vh,goats:wh,rabanda:Sh,honduras:zh,honduras1:_h,resp:Th,cicoriy:jh,carob:Ah,tonka:Ch,kardamon:Mh,mem:Eh,cafe:Dh,yerevan1:Oh,yerevan2:xh,yerevan3:Nh,lion:Uh,bears:Bh,ararat:Rh,yazzve:Hh,abc:Yh,noy:qh,poss:Xh,possaMom:Zh,possaMom1:Vh,possOrOposs:Kh,possaKnowl:Jh,poss1:Gh,poss2:Lh,poss3:$h,poss4:Qh,poss5:kh,thief:Wh,smile:Fh,merch:Ih,merch1:Ph,cammomile:l0,chamomile2:e0,chamomileTea:t0,chamomile1:i0,juniper:n0,juniper1:a0,juniper3:s0,juniperTea:o0,chamSci:r0,juniperTattoo:u0,chamomileTattoo:g0,juniperSci:c0,juniperSci1:p0,solovki:f0,solovki1:d0,solovki2:m0,coffeCard1:h0,coffeCard2:y0,coffeCard3:b0,coffeCard4:v0,coffeCard5:w0,coffeCard6:S0,atitlan:z0,atitlan1:_0,guatemala8:T0,guatemalaCorn:j0,guatemalaTkan:A0,himalaya:C0,pinkSalt:M0,saltMeme:E0,harvest:R0,harvest1:H0,matcha:O0,matcha2:x0,matcha3:N0,matcha11:D0,matchaOld:U0,matchaOld1:B0,matchaColors:Y0,cat1:q0,cat2:X0,cat3:G0,cat4:L0,cat5:$0,piterMeme:Q0,monk:k0,nyMeme1:Z0,nyMeme2:V0,nyMeme4:K0,nyMeme5:J0,nyMeme6:W0,nyMeme7:F0,nyMeme8:I0,nyMeme9:P0,gerb1:ly,gerb2:ty,okMeme:iy,chasha:sy,map:ay,u70:ny,unk:ey,ft0:oy,ft1:ry,ft2:uy,cheese:gy,cheese1:cy,reishi:py,kamakura:fy,kamakura2:dy,dragon:my,dragon1:hy,kissaten:yy,kissaten1:by,sakura:vy,sakura1:wy,pistachios:Sy,pistachios1:zy,pistachios2:_y,pistachios3:Ty,pistachioLatte:jy,unicornGerb:Ay,scotish:Cy,pinecone:My,pinecone0:Ey,pinecone1:Dy,pinecone2:Oy,noma:xy,coffee06:Ny,koliadky:Uy,koliadky1:By,koliadky4:Ry,smolensk:Hy,smolensk1:Yy,smolensk2:qy,tower:Xy,tower1:Gy,christmas:Ly,christmas1:$y,christmas2:Qy,drogo:ky,cedar:Zy,cedar1:Vy,choko:Ky,blessed1:Jy,blessed2:Wy,blessed3:Fy,bless4:Iy,bless5:Py,bless6:l1,bless9:t1,teabag:i1,sombrero1:e1,sombrero2:n1,sombrero3:a1,musik:s1,musik1:o1,mex1:r1,mex3:u1,sanmiguel:g1,frida:c1,frida1:p1,frida3:f1,teabag1:d1,guilt:m1,bosphorus:h1,bosphorus1:y1,turkish1:b1,turkish2:v1,turkish3:w1,turkish4:S1,moon1:z1,mooncoffee:_1,scarycoffee:T1,beatles:j1,bless10:M1,beatles1:A1,sweets:C1,blessed4:E1,blessed12:D1,blessed13:O1,blessed11:x1,pb1:N1,pb2:U1,pb3:B1,pb4:R1,secrets:H1,bomb:Y1,bomb1:q1,rr:X1,nm1:G1,nm2:L1,nap1:$1,farm:Q1,caramel:k1,gvat1:Z1,beans:V1,beans1:K1,gvat3:J1,gvat4:W1,gvat5:F1,blessed15:I1,kenia:P1,zebra1:lb,zebra2:tb,zebra3:ib},eb=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
      <p><strong>Добро пожаловать в адвент!</strong> Начинаем с <strong>Мексики</strong> — страны кофе, революции и Дня мёртвых! ☕💀</p>
      <h3>Café de Olla — народный кофе Мексики</h3>
      <img src="${o.muerte}" />
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
      <img src="${o.Ofrenda}" />
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
       <img src="${o.katrina}" />
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
      <img src="${o.muerte}" />
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

      <img src="${o.Ofrenda}" />

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
      <img src="${o.katrina}" />
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
      <img src="${o.pink}" />
      <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
      <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
      <img src="${o.rese}" />
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
      <img src="${o.pink}" />
      <p>После этого началась эра <strong>цветного кофе</strong>: Pink Latte, Beetroot Latte, Blue Spirulina Latte. Instagram требовал красоты — кафе давали!</p>
  
      <p><strong>Что внутри нашего розового латте?</strong> Сухое молоко, сахар, растворимый кофе и краситель E122 (кармуазин) или экстракт свеклы. Честно говоря, это ближе к десерту, чем к кофе. Но кто считает калории в адвент-календаре?</p>
      
      <p><strong>Fun fact:</strong> В Австралии есть Ruby Chocolate Latte из натурального <strong>розового какао</strong> (сорт Ruby). Бобы растут в Эквадоре и Бразилии, естественный розовый цвет, вкус ягодный!</p>
      <img src="${o.rese}" />
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
    <img src="${o.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение — ведь Baggins = фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название! ☕🎉</p>
    <img src="${o.tolkin}" />
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
    <img src="${o.melhior}" />
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
      <img src="${o.tolkin1}" />
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
      <img src="${o.kolumbia}" />
      <p><strong>География:</strong> Анды, высота 1200-2000 м, вулканическая почва, два сезона дождей = урожай круглый год!</p>
    
      <p><strong>Вкус:</strong> Сбалансированный, средняя кислотность, карамель, орехи, чистый профиль. <strong>"Безопасный выбор"</strong> — почти всегда вкусно!</p>
    
      <p><strong>100% Арабика:</strong> Колумбия не выращивает робусту по закону! Только арабика.</p>
    
      <h3>Габриэль Гарсиа Маркес и кофе ☕📖</h3>
      <p><strong>Габо</strong> (как его называли в Колумбии) родился в <strong>Аракатаке</strong> — маленьком городке в зоне банановых плантаций. Но кофе был везде!</p>
      <img src="${o.markes}" />
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
      <img src="${o.kolumb2}" />
      <p>Качественное зерно → даже без кофеина сохраняется вкус!</p>
    
      <h3>Мельхиоровая ложечка 🥄✨</h3>
      <p><strong>Мельхиор</strong> — сплав меди + никель. В СССР = "народное серебро" (дешевле настоящего, но красиво!).</p>
      <img src="${o.melhior}" />
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
      <img src="${o.gvatemala1}" />
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
      <img src="${o.graves}" />
      <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
      <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
      <img src="${o.airsnake2}" />
      <ul>
        <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
        <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее Зёбры и даже меня.</li>
        <li>Запускают на цветных кладбищах!</li>
      </ul>

      <h3>Semana Santa: Ковры из опилок! 🎨</h3>
      <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
      <img src="${o.carpet1}" />
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
      <img src="${o.berries}" />
      <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
      <img src="${o.berries1}" />
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
      <img src="${o.gvatemala1}" />
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
      <img src="${o.graves}" />
      <p><strong>Цветные кладбища:</strong> семьи красят могилы в яркие цвета: розовый, голубой, жёлтый</p>
    
      <p><strong>Барилетес (Barriletes Gigantes) — гигантские воздушные змеи:</strong></p>
      <img src="${o.airsnake2}" />
      <ul>
        <li>Деревни Сантьяго Сакатепекес и Сумпанго</li>
        <li>Диаметр до <strong>12-14 метров</strong>! Вес - тяжелее тебя и даже меня.</li>
        <li>Запускают на цветных кладбищах!</li>
      </ul>

      <h3>Semana Santa: Ковры из опилок! 🎨</h3>
      <p><strong>Пасхальная неделя</strong> (март-апрель) в Антигуа — один из самых красивых праздников!</p>
      <img src="${o.carpet1}" />
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
      <img src="${o.berries}" />
      <p>И заодно узнала, что ягода кофе - на самом деле не ягода, а косточковый фрукт, как персик или вишня. Однако этой классификацией пользуются только ученые-ботаники. Оттуда я украла эти фотки:</p>
      <img src="${o.berries1}" />
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
      <img src="${o.fish}" />
    
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

      <img src="${o.fish1}" />
    
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

    <img src="${o.brazil1}" />
    
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
    <img src="${o.ethiopia}" />
    <p><strong>Легенда Калди (IX век):</strong></p>
    <ul>
      <li>Пастух Калди заметил: его козы ели красные ягоды → танцевали всю ночь!</li>
      <li>Монахи попробовали → не спали на молитвах</li>
      <li>Сначала сожгли как "дьявольские ягоды"</li>
      <li>Но запах был так хорош, что решили заваривать!</li>
    </ul>
    <p>Между прочим, есть фотопруф:</p>
    <img src="${o.goats}" />
    
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
<img src="${o.rabanda}" />
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
    <img src="${o.fish}" />
    
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

    <img src="${o.fish1}" />
    
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

    <img src="${o.brazil1}" />
    
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
    <img src="${o.rabanda}" />

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
    <img src="${o.honduras}" />
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
    <img src="${o.resp}" />
    
    <p><strong>6 кофейных регионов:</strong></p>
    <ul>
      <li><strong>Copán</strong> — западный, у границы с Гватемалой, шоколад + карамель.</li>
      <li><strong>Opalaca</strong> — высокогорный, сбалансированный.</li>
      <li><strong>Montecillos</strong> — центральный, фруктовый, цитрусовый.</li>
      <li><strong>Comayagua</strong> — винная кислотность.</li>
      <li><strong>Agalta</strong> — восточный, тропические фрукты.</li>
      <li><strong>El Paraíso</strong> — у границы с Никарагуа, сладкий, мягкий.</li>
    </ul>
    <img src="${o.honduras1}" />
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
    <img src="${o.mem}" />
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
    <img src="${o.cicoriy}" />
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
    <img src="${o.cafe}" />
    
    <p><strong>Вкус:</strong> Древесный, ореховый, землистый. Вяжущий (танины!).</p>
    
    <p><strong>Проблема:</strong> Нужно вымачивать жёлуди (убрать танины), иначе горько и токсично.</p>
    
    <h4>4. Кэроб — шоколадный заменитель 🍫</h4>
    <p><strong>Что это:</strong> Порошок из стручков рожкового дерева (Средиземноморье).</p>
    <img src="${o.carob}" />
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
    <img src="${o.tonka}" />
    <p><strong>⚠️ Важно:</strong> Содержат кумарин (в больших дозах токсичен). В США запрещены в еде с 1954! В Европе разрешены в микродозах. В твоём стике — безопасная доза!</p>
    
    <h4>7. Зелёный кардамон — королева специй 👑</h4>
    <p><strong>Что это:</strong> Специя из семейства имбирных (Индия).</p>
    <img src="${o.kardamon}" />
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
    <img src="${o.mem}" />
  `},{day:7,date:"2025-12-26",tanya_gift:"Армянский детский растворимый кофе",zebra_gift:"Армянский детский растворимый кофе",tanya_bonus:"Зефир в виде кошачьей лапки",zebra_bonus:"Зефир в виде кошачьей лапки",title:"Ереван — город, в который я влюбилась",tanya_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${o.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${o.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${o.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${o.bears}" />
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
    <img src="${o.yazzve}" />
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
    <img src="${o.ararat}" />
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
    <img src="${o.abc}" />
    
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
    <img src="${o.noy}" />
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
<img src="${o.yerevan3}" />
`,zebra_message:`
    <h3>Сегодня у нас Ереван ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥</h3>
    <img src="${o.yerevan2}" />
    <p>Ереван — это город, где утром пьют кофе, днём пьют кофе, вечером пьют кофе, а потом пьют коньяк. Где на каждом углу кофейня и свежие цветы, а еще отличные фонтанчики с питьевой водой.</p>
    <img src="${o.lion}" />    
    <p>Если спускаешься вниз по Каскаду (а подниматься — 572 ступени! — никто не любит), первое, что видишь внизу — <strong>огромный лев из автомобильных покрышек</strong>.</p>
    <p>Его сделал уличный художник. Просто взял старые покрышки и собрал льва — гриву, лапы, морду. Лев сидит там годами и всеми обожаем.</p>
    <p><strong>Это Ереван:</strong> античные колонны в музеях, советские панельки на окраинах с коврами и бельем на веревках от окна к окну, розовый туф в центре — и лев из покрышек. Всё вместе. И это нормально.</p>
    <img src="${o.yerevan1}" />
    <p>Сейчас там достаточно тепло, чтобы цвели розы - а еще все украшено к Рождеству в три слоя, даром что празднуют они в январе.</p>
    <img src="${o.bears}" />
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
    <img src="${o.yazzve}" />
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
    <img src="${o.ararat}" />
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
    <img src="${o.abc}" />
    
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
    <img src="${o.noy}" />
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
<img src="${o.yerevan3}" />
`},{day:8,date:"2025-12-27",tanya_gift:'Какао "Опоссум" (пьёт и больше не орёт)',zebra_gift:'Какао "Опоссум" (пьёт и больше не орёт)',tanya_bonus:"Маршмеллоу (маленькие)",zebra_bonus:"Маршмеллоу (маленькие)",title:"Опоссумы, какао и философия",tanya_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${o.possaMom}" />
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
    <img src="${o.smile}" />
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
    <img src="${o.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${o.possOrOposs}" />
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
      <img src="${o.poss}" />
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
    <img src="${o.thief}" />

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
<img src="${o.possaKnowl}" />
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
<img src="${o.merch1}" />
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
      <img src="${o.poss1}" />
      <img src="${o.poss2}" />
      <img src="${o.poss3}" />
      <img src="${o.poss4}" />
      <img src="${o.poss5}" />
      <img src="${o.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `,zebra_message:`
    <p>Сегодня у нас особенный день — день <strong>опоссумов</strong>! И какао с маршмеллоу, потому что после какао действительно меньше орёшь (по крайней мере пока он не кончится).</p>
    <p>А еще это выходной, когда никуда не надо бежать, так что можно обойтись без кофеина.</p>

    <img src="${o.possaMom}" />
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
    <img src="${o.smile}" />
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
    <img src="${o.merch}" />
    <p><strong>6. Живые ископаемые!</strong></p>
    <ul>
      <li>Опоссумы почти не изменились за <strong>70 миллионов лет!</strong></li>
      <li>Пережили динозавров</li>
      <li>Один из древнейших видов млекопитающих на Земле</li>
    </ul>
    
    <h3>Опоссумы vs Поссумы — не путать! 🐭🆚🐨</h3>
    <img src="${o.possOrOposs}" />
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
      <img src="${o.poss}" />
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
    <img src="${o.thief}" />

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
<img src="${o.possaKnowl}" />
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
<img src="${o.merch1}" />
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
      <img src="${o.poss1}" />
      <img src="${o.poss2}" />
      <img src="${o.poss3}" />
      <img src="${o.poss4}" />
      <img src="${o.poss5}" />
      <img src="${o.possaMom1}" />
      <li>Выбери заслуживающую того проблему и притворись мертвым.</li>
      <li><strong>Чат:</strong> "Сегодня я опоссум №___, потому что ___"</li>
    </ol>
  `},{day:9,date:"2025-12-28",tanya_gift:"Чай ромашковый",zebra_gift:"Чай ромашковый",tanya_bonus:"Твикс имбирный",zebra_bonus:"Твикс имбирный",title:"Ромашковый чай за 1000 рублей",tanya_message:`
      <p><strong>Ромашковый чай</strong> — напиток, который недавно был в центе московских обсуждений 🌼☕💸</p>
      
      <h3>История про чай за 1000 рублей</h3>
      <p>Оченью 2025 года в Кофемании поллитра ромшкового чая продавали почти за косарь. "Кипяток для избранных", писали в обзорах.</p>
      <img src="${o.chamomileTea}" />
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
      <img src="${o.chamomile1}" />
      <p><strong>История:</strong></p>
      <ul>
        <li><strong>Древний Египет:</strong> Посвящали ромашку богу солнца Ра, лечили лихорадку.</li>
        <li><strong>Древний Рим:</strong> Солдаты пили ромашковый чай перед битвой (успокоение, хотя казалось бы).</li>
        <li><strong>Средневековье:</strong> "Растение-целитель" — от всего (за неимением подорожника, не иначе).</li>
      </ul>
      <img src="${o.cammomile}" />
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
<img src="${o.chamSci}" />
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

      <img src="${o.chamomile2}" />
      <h3>Твикс имбирный 🍪</h3>
      <p><strong>Имбирное печенье</strong> + карамель + шоколад = праздничный вкус!</p>
      
      <p><strong>Имбирь + шоколад</strong> — древнее сочетание. Ацтеки добавляли имбирь в <em>xocolātl</em> (горячий шоколад) для воинов.</p>
      <img src="${o.chamomileTattoo}" />
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
      <img src="${o.juniperTea}" />
      <p>У тебя <strong>рабочее воскресенье перед Новым годом</strong>. Тяжело. Все отдыхают, а ты работаешь (напоминает тебе сочувствующая юбездуховная нейронка).</p>

      <p>Надеемся (мы с нейронкой), что можжевельник и имбирь в твоём чае (окей, имбирь в печеньке в твоем limit edition Твиксе, если ты не съела его раньше, а я не перепутала и это) придали тебе сил! ☕💪</p>

      <p><strong>Можжевельник — что это:</strong></p>
<ul>
  <li>Ягоды можжевелового куста (хвойное растение).</li>
  <li>На самом деле это не ягоды, а <strong>шишкоягоды</strong> (модифицированные шишки!).</li>
  <li>Тёмно-синие, с восковым налётом.</li>
  <li>Вкус: хвойный, смолистый, немного сладковатый.</li>
</ul>
<img src="${o.juniper}" />
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
<img src="${o.juniper1}" />
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
  <img src="${o.juniper3}" />

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
    <img src="${o.juniperSci}" />
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
    <img src="${o.juniperSci1}" />
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
    <img src="${o.juniperTattoo}" />

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
    <img src="${o.coffeCard4}" />
    <p><strong>Откуда:</strong> Колумбия (зёрна) → Соловецкий монастырь (обжарка) → твоя чашка</p>
    <p><strong>Кто обжаривал:</strong> Монахи Соловецкого монастыря!</p>
    <p><strong>Как:</strong> С молитвой! (серьёзно, так написано в карточке товара)</p>
    <h3>Соловецкий монастырь — внезапный кофе на краю света 🏔️</h3>
    <img src="${o.solovki2}" />
    <p><strong>Где:</strong></p>
    <ul>
      <li>Соловецкие острова, Белое море</li>
      <li>Архангельская область, Россия</li>
      <li>160 км от Полярного круга!</li>
      <li>Добраться можно только на корабле или вертолёте</li>
    </ul>
    <img src="${o.coffeCard1}" />
    <p><strong>Монастырь:</strong></p>
    <ul>
      <li>Основан в 1436 году</li>
      <li>Один из самых известных монастырей России</li>
      <li>ЮНЕСКО World Heritage</li>
      <li>Крепость, духовный центр, история</li>
    </ul>
    <img src="${o.solovki1}" />
    <p><strong>Тёмная история:</strong></p>
    <ul>
      <li>1920-1939 — ГУЛАГ (Соловецкий лагерь особого назначения)</li>
      <li>Монастырь закрыли, монахов репрессировали</li>
      <li>Один из первых советских лагерей</li>
      <li>1990 — монастырь возродился</li>
    </ul>
    
    <h3>Братский кофе — монашеский бизнес ☕</h3>
    <img src="${o.coffeCard3}" />
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Социальное предприятие монастыря</li>
      <li>Монахи покупают зёрна (Колумбия, Бразилия, Эфиопия, др.)</li>
      <li>Обжаривают на Соловках</li>
      <li>Продают под брендом "Братский кофе"</li>
      <li><strong>"Сделано с молитвой!"</strong> — буквально написано на упаковке 😄</li>
    </ul>
    <img src="${o.solovki}" />
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
    <img src="${o.coffeCard2}" />
    <p><strong>Что это значит:</strong></p>
    <p>Монахи молятся во время обжарки. Буквально: "Господи, благослови тех, кто выпьет этот кофе!" Ну, в лучшей из версий.</p>
    <p>Представь: монахи на Белом море, на краю света, в древнем монастыре обжаривают колумбийский кофе c молитвой. В XXI веке. Чтобы потом продавать на Озоне втридорога. Это прекрасно и абсурдно одновременно!</p>
    <img src="${o.coffeCard5}" />
    
    
    <h3>Как заваривать:</h3>
    <ol>
      <li>Смели зёрна (средний помол для турки/френч-пресса, мелкий для эспрессо)</li>
      <li>Завари любым способом</li>
      <li><strong>Перед первым глотком:</strong> Скажи "Спасибо, монахи!" 😄</li>
      <li>Наслаждайся</li>
    </ol>
    <img src="${o.coffeCard6}" />
    <h3>Гималайская соль — снова! 🧂</h3>
    
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    <p>Я решила, что к такому кофе нужно что-то суровое.</p> 
    <img src="${o.himalaya}" />
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй заварить кофе и добавь крошечную щепотку соли</li>
    </ul>
    <img src="${o.pinkSalt}" />
    <p><strong>Можно просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${o.saltMeme}" />
    
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
    <img src="${o.atitlan1}" />
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
    <img src="${o.guatemala8}" />
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
    <img src="${o.atitlan}" />
    <p><strong>Озеро Атитлан:</strong></p>
    <ul>
      <li>Одно из красивейших озёр мира</li>
      <li>В кратере вулкана!</li>
      <li>Вокруг — 3 вулкана (Atitlán, Tolimán, San Pedro)</li>
      <li>Деревни майя на берегу</li>
      <li>Кофе растёт на склонах → знаменитый регион Atitlán</li>
    </ul>
    
    <p><strong>Майя — живая культура:</strong></p>
    <img src="${o.guatemalaCorn}" />
    <ul>
      <li>40%+ населения Гватемалы — майя</li>
      <li>Говорят на языках майя (23 языка!)</li>
      <li>Носят традиционную одежду (huipil — расшитые блузы)</li>
      <li>Хранят традиции (церемонии, календарь майя, ремёсла)</li>
      <li>Многие работают на кофейных плантациях</li>
    </ul>
    
    <img src="${o.guatemalaTkan}" />
    <p><strong>Текстиль майя:</strong></p>
    <ul>
      <li>Знаменитые ткани — яркие, с геометрическими узорами</li>
      <li>Каждая деревня — свой стиль!</li>
      <li>По одежде можно определить, откуда человек</li>
      <li>Ткут на поясных станках (backstrap loom) — древняя техника</li>
    </ul>
    
    <h3>Гималайская соль — снова! 🧂</h3>
    <img src="${o.himalaya}" />
    <p>Помнишь из дня 5? <strong>Розовая соль из пакистанских шахт Khewra, 250+ миллионов лет, железо в составе = розовый цвет.</strong></p>
    
    <p><strong>Зачем в кофе:</strong></p>
    <ul>
      <li>Щепотка соли в кофе → снижает горечь!</li>
      <li>Усиливает сладость (блокирует горькие рецепторы)</li>
      <li>Традиция в некоторых странах (Эфиопия, Турция)</li>
      <li>Попробуй: завари декаф, добавь крошечную щепотку соли</li>
    </ul>
    <img src="${o.pinkSalt}" />
    <p><strong>Можно и просто хранить в красивой микробутылочке!</strong> 💗</p>
    <p>Измельчала до кондиции я ее ровно вот так:</p>
    <img src="${o.saltMeme}" />
    
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
    <img src="${o.matcha}" />
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
    <img src="${o.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${o.harvest1}" />
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
    <img src="${o.matchaOld1}" />
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
    <img src="${o.matcha11}" />
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
    <img src="${o.harvest}" />
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
    <img src="${o.matchaColors}" />
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
    <img src="${o.matcha2}" />
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
    <img src="${o.monk}" />
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
    <img src="${o.matcha3}" />
    
    
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
    <img src="${o.matcha}" />
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
    <img src="${o.matchaOld}" />
    
    <p><strong>Чем отличается от обычного зелёного чая:</strong></p>
    <ul>
      <li><strong>Обычный чай:</strong> Листья заваривают, потом выбрасывают → пьёшь настой</li>
      <li><strong>Матча:</strong> Листья перемалывают в порошок → пьёшь <strong>весь лист целиком!</strong></li>
      <li>Результат: В 10 раз больше антиоксидантов, кофеина, питательных веществ</li>
    </ul>
    
    <h3>История матча — 1200 лет! 🏯</h3>
    <img src="${o.harvest1}" />
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
    <img src="${o.matchaOld1}" />
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
    <img src="${o.matcha11}" />
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
    <img src="${o.harvest}" />
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
    <img src="${o.matchaColors}" />
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
    <img src="${o.matcha2}" />
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
    <img src="${o.monk}" />
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
    <img src="${o.matcha3}" />
    
    
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
    <img src="${o.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${o.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${o.cat5}" />
    <p><strong>МК:</strong>Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${o.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${o.cat1}" />
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
    <img src="${o.cat2}" />
    <hr>
    
    <h3>Интервью с президентом Миссис Кошкой</h3>
    
    <p><strong>Корреспондент:</strong> Мадам президент, добрый вечер! Спасибо, что согласились на интервью в такой важный день.</p>
    
    <p><strong>Миссис Кошка:</strong>*хмуро* Я не соглашалась.</p>
    
    <p><strong>К:</strong> Понимаю. Давайте начнём с традиционного вопроса: как вы оцениваете уходящий 2025 год?</p>
    
    <p><strong>МК:</strong> Год был сложным. Корм иногда давали с опозданием. Это недопустимо. Но в целом я выжила, и это уже успех.</p>
    <img src="${o.cat3}" />
    <p><strong>К:</strong> Мадам президент, многие граждане жалуются на экономические трудности. Что вы можете им сказать?</p>
    
    <p><strong>МК:</strong> <em>[Зевает]</em> Спите больше. Серьёзно. Я сплю 16 часов в день — и проблем нет. Попробуйте. Это работает.</p>
    
    <p><strong>К:</strong> Но не у всех есть возможность спать 16 часов...</p>
    
    <p><strong>МК:</strong> Ну, это ваши проблемы. Я не просила вас быть людьми. <em>[Лижет лапу]</em></p>
    
    <p><strong>К:</strong> Простите! Перейдём к планам на будущее. Какие у вас цели на 2026 год?</p>
    
    <p><strong>МК:</strong> Научиться открывать холодильник. Это долгосрочная цель.</p>
    
    <p><strong>К:</strong> Амбициозно! А что вы пожелаете гражданам в Новом году?</p>
    <img src="${o.cat5}" />
    <p><strong>МК:</strong> Год был тяжёлым для всех. Я знаю. Я видела, как вы смотрите в потолок в 3 часа ночи. Я была рядом. Поэтому вот что я скажу:</p>
    
    <p><strong>МК:</strong> Будьте как кошки. Упали — встали, вылизались, пошли дальше. Кто-то обидел — шипим, кусаем, потом забываем. Устали — спим. Хочется мяукать на невидимых духов — мяукаем. Нужна ласка — требуем. Нужно одиночество — сидим под диваном, хочется посидеть в коробке - сидим в коробке. Вот видите, все просто.</p>
    
    <p><strong>МК:</strong> И помните: даже когда всё плохо, всегда можно найти солнечный квадрат на полу и полежать в нём. Это помогает.</p>
    
    <p><strong>К:</strong> <em>[Утирает слезу]</em> Это... неожиданно мудро, мадам президент.</p>
    
    <p><strong>МК:</strong> Я знаю.</p>
    <img src="${o.cat4}" />
    <p><strong>К:</strong> Последний вопрос! Что вы думаете о людях, которые читают это обращение?</p>
    
    <p><strong>МК:</strong> <em>[Хмуро смотрит в камеру]</em> Вы устали. Я вижу. Но вы дочитали до конца — значит, ещё держитесь. 
    Молодцы. Я бы на вашем месте уже спала.</p>
    
    <p>В 2026 году будет по-разному. Иногда хорошо, иногда плохо. Как всегда. 
    Но вы справитесь. Потому что вы — люди. Вы шумные, суетливые, но живучие.</p>

    <p><strong>К:</strong> Спасибо, мадам президент! С Новым годом!</p>

    <hr>
    <img src="${o.cat1}" />
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
    <img src="${o.piterMeme}" />
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
    <img src="${o.nyMeme4}" />
    <p>Пережили 2025 и встретили 2026. Время - это социальный конструкт, но что-то героическое в этом безусловно есть.</p>
    <p>Сегодня не нужно никуда бежать, и даже не нужно начинать новую жизнь. Выпить кофе будет в самый раз)</p>
    <img src="${o.nyMeme2}" />
    <h3>Инструкция на сегодня 📋</h3>
    
    <p><strong>1. Подышать.</strong></p>
    <ul>
      <li>Глубокий вдох (4 счёта)</li>
      <li>Задержка (4 счёта)</li>
      <li>Выдох (6 счётов)</li>
      <li>Повтори 3 раза</li>
    </ul>
    <img src="${o.nyMeme6}" />
    <p><strong>2. Никаких "надо":</strong></p>
    <ul>
      <li>Не строй планы на год</li>
      <li>Не чувствуй вину за лежание</li>
      <li>Сегодня — день безделья. Официально.</li>
    </ul>
    
    <img src="${o.nyMeme7}" />
    
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
    <img src="${o.nyMeme8}" />
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
    <img src="${o.nyMeme9}" />
    
    <p><strong>Как работает:</strong></p>
    <ul>
      <li>Нетканый материал плотно прилегает к коже и создаёт "окклюзию" (закрывает поры) → ингредиенты проникают глубже</li>
      <li>Сыворотка не испаряется (как крем на воздухе)</li>
      <li>15-20 минут → кожа впитывает максимум</li>
      <li>20 минут принудительного отдыха!</li>
    </ul>
    
    <p><strong>Философия маски:</strong> Нельзя говорить, смотреть в телефон (ага-ага, думаю я. Никакая чертова маска не будет указывать мне, что делать!..). Можно только лежать и дышать. Это медитация под видом ухода за кожей.</p>
    
    <img src="${o.nyMeme5}" />
    <h3>Послание на 1 января 💌</h3>
    
    <p>Ты дожила до 2026. Сегодня не нужно быть "новой тобой": старая ты прекрасна, она дошла досюда.</p>
    
    <p>Найди солнечный квадрат на полу (помнишь Миссис Кошку?). Ляг в него. Полежи, и съешь хлеба с селедкой.</p>
    
    <p>С Новым годом. Ты молодец. 🐱</p>
    <img src="${o.nyMeme1}" />
  `,zebra_message:`
    <h3>1 января. И вот мы здесь 🌅</h3>
    <img src="${o.nyMeme4}" />
    <p>Пережили 2025 и встретили 2026. Время - это социальный конструкт, но что-то героическое в этом безусловно есть.</p>
    <p>Сегодня не нужно никуда бежать, и даже не нужно начинать новую жизнь. Выпить кофе будет в самый раз)</p>
    <img src="${o.nyMeme2}" />
    <h3>Инструкция на сегодня 📋</h3>
    
    <p><strong>1. Подышать.</strong></p>
    <ul>
      <li>Глубокий вдох (4 счёта)</li>
      <li>Задержка (4 счёта)</li>
      <li>Выдох (6 счётов)</li>
      <li>Повтори 3 раза</li>
    </ul>
    <img src="${o.nyMeme6}" />
    <p><strong>2. Никаких "надо":</strong></p>
    <ul>
      <li>Не строй планы на год</li>
      <li>Не чувствуй вину за лежание</li>
      <li>Сегодня — день безделья, официально.</li>
    </ul>
    
    <img src="${o.nyMeme7}" />
    
    
    <p>Совершенно не помню, какой у тебя сегодня кофе. У меня вообще нет уверенности, что это кофе - но если так, то можно запивать им какой-нибудь оливье)</p>
    <p>Хотя бы в тканевой маске для волос я уверена! Итак:</p>
    
    <h3>Тканевая маска для лица 🎭</h3>
    <img src="${o.nyMeme8}" />
    <ul>
      <li>Маска из <strong>нетканого материала</strong> (спанлейс — смесь вискозы и полиэстера)</li>
      <li>Пропитана сывороткой с активными компонентами</li>
      <li><strong>1980, Южная Корея</strong> — компания <strong>Nox Bellcow</strong> создала технологию пропитки нетканого материала</li>
      <li>1990-2000-е: бум в Азии (Корея, Япония)</li>
      <li>2010-е: весь мир помешался на K-beauty → маски везде!</li>
      <li>Сейчас: мировой рынок $1+ миллиард в год</li>
    </ul>
    <img src="${o.nyMeme9}" />
    
    <p><strong>Как работает:</strong></p>
    <ul>
      <li>Нетканый материал плотно прилегает к коже и создаёт "окклюзию" (закрывает поры) → ингредиенты проникают глубже</li>
      <li>Сыворотка не испаряется (как крем на воздухе)</li>
      <li>15-20 минут → кожа впитывает максимум</li>
      <li>20 минут принудительного отдыха!</li>
    </ul>
    
    <p><strong>Философия маски:</strong> Нельзя говорить, смотреть в телефон (ага-ага, думаю я. Никакая чертова маска не будет указывать мне, что делать!..). Можно только лежать и дышать. Это медитация под видом ухода за кожей.</p>
    
    <img src="${o.nyMeme5}" />
    <h3>Послание на 1 января 💌</h3>
    
    <p>Ты дожила до 2026. Сегодня не нужно быть "новой тобой": старая ты прекрасна, она дошла досюда.</p>
    
    <p>Найди солнечный квадрат на полу (помнишь Миссис Кошку?). Ляг в него. Полежи, и съешь какого-нибудь серпуховского оливье.</p>
    
    <p>С Новым годом. Ты молодец. 🐱</p>
    <img src="${o.nyMeme1}" />
  `},{day:14,date:"2026-01-02",tanya_gift:"Кофе с картами Таро (заряженный на удачу и любовь)",tanya_uxazher_gift:"Кофе с картами Таро (заряженный на удачу и любовь)",zebra_gift:"Какао с грибами (рейши, чага или львиная грива)",tanya_bonus:"Маленькая шоколадка",zebra_bonus:"Маленькая шоколадка",title:"Серпухов, гадания и грибы",tanya_message:`
    <h3>Внезапно мы встретимся в Серпухове (и будем пить кофе, потому что ну а как). Что нейронки имеют сказать про Серпухов? 🦚🐒</h3>
    
    <p><strong>Серпухов — коротко:</strong></p>
    <ul>
      <li>Московская область, ~130 км от Москвы, город на реке Наре</li>
      <li>Основан в 1339 году (почти 700 лет!). Древний кремль (XIV век), монастыри, купеческие дома</li>
    </ul>
    
    <h4>1. Павлин на гербе — история и советская версия 🦚⚙️</h4>
    <img src="${o.gerb1}" />
    <p><strong>Герб времен Российской Империи:</strong></p>
    <ul>
      <li>Окольничий Михаил Колупаев в 1691 году привёз в дар Высоцкому монастырю в Серпухове пару павлинов — самца и самку. Как у них там шли дела - вопрос спорный.</li>
      <li>Петр I предпринимает попытку выдать городам и дворянам централизованные гербы по европейскому образцу. Франциск Санти (итальянец) — обер-герольдмейстер, обрабатывает опросники, и цепляется за упоминание, что в серпуховском монастыре водятся павлины. Оп, новый герб.</li>
      <img src="${o.okMeme}" />
      <li>Екатерина II проводит свою губернскую реформу и заодно повторяет историю с гербами, но более организрванно. Павлин несколько меняет очертания.</li>
      <li>Советская власть решила: павлин — буржуазный символ! Но его каким-то чудом решили оставить.</li>
      <li>Зато добавили шестеренку (предположительно от трактора) и <strong>стилизованное изображение синхрофазотрона!!</strong> — Протвинского ускорителя частиц.</li>
</ul>
<img src="${o.gerb2}" />

<p><strong>Протвинский ускоритель У-70:</strong></p>
<ul>
  <li>В соседнем Протвино (10 км от Серпухова) в 1967 построили <strong>ускоритель частиц У-70</strong> - этакий адронный коллайдер своего времени. Кольцо длиной 1,5 км, энергия 70 ГэВ, что бы это ни значило.</li>
  <img src="${o.u70}" />
  <li><strong>С 1967 по 1972 — самый мощный ускоритель в мире!</strong>. На нём открывали новые частицы, изучали структуру материи. Символ научной мощи СССР</li>
  <li>Потом, правда, начали приделывать к нему кольцо ускорителя побольше, но СССР (и даньги) закончились раньше, а большой адронный коллайдер окончательно похоронил проект.</li>
  <img src="${o.map}" />
  <li>После распада СССР вернули исторический герб 1730 года: павлин снова на месте. Ускоритель исчез с герба (эх), хотя продолжает работать в Протвино.</li>
  <li>Советский герб просуществовал 23 года (1969-1992)</li>
  <li>Царский герб — 262 года (1730-1992 с перерывом) и продолжает</li>
  <li><strong>Павлин: 1, Ускоритель частиц: 0</strong></li>
  <li>Но ускоритель работает до сих пор — и это круто! ⚛️</li>
  <li>Правда, его большой нерожденный брат - протон-протонного коллайдер УНК - так и не был запущен и стоит тут же в виде изрядной сети разрушающихся тоннелей.</li>
  <img src="${o.unk}" />
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
    <img src="${o.chasha}" />
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
    <img src="${o.cheese}" />
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
    <img src="${o.cheese1}" />
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
    <img src="${o.ft0}" />
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
    <img src="${o.ft1}" />
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
    <img src="${o.ft2}" />
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
    <img src="${o.gerb1}" />
    <p><strong>Герб времен Российской Империи:</strong></p>
    <ul>
      <li>Окольничий Михаил Колупаев в 1691 году привёз в дар Высоцкому монастырю в Серпухове пару павлинов — самца и самку. Как у них там шли дела - вопрос спорный.</li>
      <li>Петр I предпринимает попытку выдать городам и дворянам централизованные гербы по европейскому образцу. Франциск Санти (итальянец) — обер-герольдмейстер, обрабатывает опросники, и цепляется за упоминание, что в серпуховском монастыре водятся павлины. Оп, новый герб.</li>
      <img src="${o.okMeme}" />
      <li>Екатерина II проводит свою губернскую реформу и заодно повторяет историю с гербами, но более организрванно. Павлин несколько меняет очертания.</li>
      <li>Советская власть решила: павлин — буржуазный символ! Но его каким-то чудом решили оставить.</li>
      <li>Зато добавили шестеренку (предположительно от трактора) и <strong>стилизованное изображение синхрофазотрона!!</strong> — Протвинского ускорителя частиц.</li>
</ul>
<img src="${o.gerb2}" />

<p><strong>Протвинский ускоритель У-70:</strong></p>
<ul>
  <li>В соседнем Протвино (10 км от Серпухова) в 1967 построили <strong>ускоритель частиц У-70</strong> - этакий адронный коллайдер своего времени. Кольцо длиной 1,5 км, энергия 70 ГэВ, что бы это ни значило.</li>
  <img src="${o.u70}" />
  <li><strong>С 1967 по 1972 — самый мощный ускоритель в мире!</strong>. На нём открывали новые частицы, изучали структуру материи. Символ научной мощи СССР</li>
  <li>Потом, правда, начали приделывать к нему кольцо ускорителя побольше, но СССР (и даньги) закончились раньше, а большой адронный коллайдер окончательно похоронил проект.</li>
  <img src="${o.map}" />
  <li>После распада СССР вернули исторический герб 1730 года: павлин снова на месте. Ускоритель исчез с герба (эх), хотя продолжает работать в Протвино.</li>
  <li><strong>Павлин: 1, Ускоритель частиц: 0</strong></li>
  <li>Но ускоритель работает до сих пор — и это круто! ⚛️ Правда, его большой нерожденный брат - протон-протонного коллайдер УНК - так и не был запущен и стоит тут же в виде изрядной сети разрушающихся тоннелей.</li>
  <img src="${o.unk}" />
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
    <img src="${o.chasha}" />
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
    <img src="${o.cheese}" />
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
    <img src="${o.cheese1}" />
    <p><strong>Какие сыры лучше с кофе:</strong></p>
    <ul>
      <li><strong>Мягкие:</strong> Бри, камамбер (сливочность смягчает кофе)</li>
      <li><strong>Полутвёрдые:</strong> Гауда, эдам (сладковатые, ореховые)</li>
      <li><strong>Твёрдые:</strong> Пармезан, грана падано (солёные, умами — контраст!)</li>
      <li><strong>Голубые:</strong> Рокфор, горгонзола (смелый выбор!)</li>
    </ul>
    
    <hr>
    <img src="${o.ft0}" />
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
    <img src="${o.ft1}" />
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
    <img src="${o.ft2}" />
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
    <img src="${o.reishi}" />
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
    <img src="${o.kamakura2}" />
    <p><strong>Вкус:</strong> Тёмная обжарка, горечь 5/5, кислотность 1/5. Ноты тёмного шоколада, карамели, пряностей.</p>

    <p><strong>Камакура — город самураев, дзен и драконов 🏯🐉 История:</strong></p>
    <ul>
      <li>50 км от Токио, на берегу Тихого океана</li>
      <li><strong>1185-1333:</strong> Столица Японии, первый сёгунат (военное правительство самураев)</li>
      <li>Здесь зародилась культура самураев и дзен-буддизма</li>
      <li><strong>Великий Будда</strong> — бронзовая статуя 13 м, 1252 год. Стоит под открытым небом (храм разрушило цунами в 1498)</li>
      <li>Там за сотню садов и святилищ, и найти городскую фотку с обычными домами практически невозможно.</li>
    </ul>
    <img src="${o.kamakura}" />

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
        <img src="${o.dragon1}" />
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
    
    <img src="${o.dragon}" />
    
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
    <img src="${o.kissaten}" />
    
    <p><strong>Философия:</strong></p>
    <ul>
      <li><strong>Процесс важнее результата</strong> — как чайная церемония</li>
      <li>Каждая чашка — ритуал, произведение искусства</li>
      <li>Можно сидеть часами, никто не торопит</li>
      <li>Тишина, созерцание, медитация с кофе</li>
    </ul>
    
    <img src="${o.kissaten1}" />
    
    <h3>Сужду прочим, дрип-пакет — японское изобретение 📦</h3>
    <p>А белорусскую конфету с вишней и перцем будем считать некоторым приближением к сакуре </p>

    <img src="${o.sakura}" />
    <h3>Задание 🎯</h3>
    <ol>
      <li>Выпить японский продукт, закусить белорусским</li>
      <li>Начать откладывать деньги на поездку в Японию, потому что цветение сакуры само себя не посмотрит</li>
    </ol>

    <img src="${o.sakura1}" />
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
    <img src="${o.kamakura}" />

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
        <img src="${o.dragon1}" />
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
    
    <img src="${o.dragon}" />
    
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
    <img src="${o.kissaten}" />
    
    <p><strong>Философия:</strong></p>
    <ul>
      <li><strong>Процесс важнее результата</strong> — как чайная церемония</li>
      <li>Каждая чашка — ритуал, произведение искусства</li>
      <li>Можно сидеть часами, никто не торопит</li>
      <li>Тишина, созерцание, медитация с кофе</li>
    </ul>
    
    <img src="${o.kissaten1}" />
    
    <h3>Сужду прочим, дрип-пакет — японское изобретение 📦</h3>
    <p>А белорусскую конфету с вишней и перцем будем считать некоторым приближением к сакуре </p>

    <img src="${o.sakura}" />

    <h3>Задание 🎯</h3>
    <ol>
      <li>Выпить японский продукт, закусить белорусским</li>
      <li>Начать откладывать деньги на поездку в Японию, потому что цветение сакуры само себя не посмотрит</li>
    </ol>

    <img src="${o.sakura1}" />
    `},{day:16,date:"2026-01-04",tanya_gift:'Shazel "Sütlü Menengiç" — фисташковый напиток с молоком (стик-пакет, Турция)',zebra_gift:'Shazel "Sütlü Menengiç" — фисташковый напиток с молоком (стик-пакет, Турция)',tanya_bonus:'Леденец "Единорог Лучистик" со светящейся неоновой палочкой',zebra_bonus:'Леденец "Единорог Лучистик" со светящейся неоновой палочкой',title:"Турецкие фисташки и волшебство",tanya_message:`
    <h3>Загадка дня! 🕵️‍♀️</h3>
    <p>
      🦄 Единорог Лучистик должен быть съеден сегодня (день 16).<br>
      Где шоколадка от 14 дня, была ли она в реальности, и что тогда прилагается к конверту 16?.. Так много вопросов, так мало ответов.
    </p>
    <h3>Shazel "Sütlü Menengiç" — турецкий фисташковый кофе ☕🌰</h3>
    <p>Сегодня у тебя напиток из Турции. Не кофе, но похож на кофе, из настоящих фисташек (<strong>"Menengiç"</strong> = дикая турецкая фисташка, растёт в Анатолии), <strong>без кофеина!</strong></p>
      <p>Похож на ореховый латте или фисташковое мороженое в жидком виде</p>
    <img src="${o.pistachioLatte}" />
    <p><strong>История:</strong></p>
    <ul>
      <li>Дикая фисташка: меньше обычной, темнее, более ароматная. Собирают вручную в горах (трудоёмко!)</li>
      <li>Турки пьют напиток из menengiç <strong>веками</strong>.</li>
      <li>Зёрна дикой фисташки собирают в горах, жарят (как кофейные зёрна), мелют в порошок, смешивают с молоком и сахаром.</li>
    </ul>
    <img src="${o.pistachios}" />
    <p><strong>Почему "кофе":</strong></p>
    <ul>
      <li>Похож на кофе: горячий, ароматный, бодрящий (но без кофеина!)</li>
      <li>Пьют из маленьких чашек, как турецкий кофе</li>
      <li>Ритуал похож: медленно, с наслаждением</li>
      <li>Но вкус совсем другой — ореховый, сладкий, мягкий</li>
    </ul>
    <img src="${o.pistachios1}" />
    <p><strong>История фисташек:</strong></p>
    <ul>
      <li><strong>Родина:</strong> Ближний Восток, Средняя Азия (Иран, Турция, Сирия)</li>
      <li><strong>Древность:</strong> 9000 лет! Одни из древнейших орехов, известных человеку</li>
      <li><strong>Персия:</strong> Фисташки — любимый орех персидских царей</li>
      <li><strong>Царица Савская:</strong> Легенда — объявила фисташки царским орехом, простолюдинам запретила!</li>
      <li><strong>Шёлковый путь:</strong> Фисташки возили из Персии в Китай и Европу</li>
    </ul>
    <img src="${o.pistachios2}" />
    
    <p><strong>Почему фисташки дорогие:</strong></p>
    <ul>
      <li>Растут медленно (дерево плодоносит только через 7-10 лет!)</li>
      <li>Собирают вручную</li>
      <li>Требуют специфического климата (жаркое лето, холодная зима)</li>
      <li>Самые дорогие: фисташки из Бронте (Сицилия) — до €80/кг!</li>
    </ul>
    <img src="${o.pistachios3}" />
    
    <h3>Единорог Лучистик — волшебство в леденце 🦄✨</h3>
    
    <img src="${o.unicornGerb}" />
    <p><strong>Внезапное включение про единорогов в геральдике:</strong></p>
    <ul>
      <li>Символ Шотландии (а на гербе Великобритании — единорог и лев!)</li>
      <li>В сегодня лет я узнала, что за счет их непростой совместной истории единорог на гербе в цепях.</li>
      <li>И бонусом - что шотландские единороги были теми еще опасными тварями, с которыми лучше не встречаться.</li>
    </ul>
    <img src="${o.scotish}" />    
    
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
    <img src="${o.pistachioLatte}" />
    <p><strong>История:</strong></p>
    <ul>
      <li>Дикая фисташка: меньше обычной, темнее, более ароматная. Собирают вручную в горах (трудоёмко!)</li>
      <li>Турки пьют напиток из menengiç <strong>веками</strong>.</li>
      <li>Зёрна дикой фисташки собирают в горах, жарят (как кофейные зёрна), мелют в порошок, смешивают с молоком и сахаром.</li>
    </ul>
    <img src="${o.pistachios}" />
    <p><strong>Почему "кофе":</strong></p>
    <ul>
      <li>Похож на кофе: горячий, ароматный, бодрящий (но без кофеина!)</li>
      <li>Пьют из маленьких чашек, как турецкий кофе</li>
      <li>Ритуал похож: медленно, с наслаждением</li>
      <li>Но вкус совсем другой — ореховый, сладкий, мягкий</li>
    </ul>
    <img src="${o.pistachios1}" />
    <p><strong>История фисташек:</strong></p>
    <ul>
      <li><strong>Родина:</strong> Ближний Восток, Средняя Азия (Иран, Турция, Сирия)</li>
      <li><strong>Древность:</strong> 9000 лет! Одни из древнейших орехов, известных человеку</li>
      <li><strong>Персия:</strong> Фисташки — любимый орех персидских царей</li>
      <li><strong>Царица Савская:</strong> Легенда — объявила фисташки царским орехом, простолюдинам запретила!</li>
      <li><strong>Шёлковый путь:</strong> Фисташки возили из Персии в Китай и Европу</li>
    </ul>
    <img src="${o.pistachios2}" />
    
    <p><strong>Почему фисташки дорогие:</strong></p>
    <ul>
      <li>Растут медленно (дерево плодоносит только через 7-10 лет!)</li>
      <li>Собирают вручную</li>
      <li>Требуют специфического климата (жаркое лето, холодная зима)</li>
      <li>Самые дорогие: фисташки из Бронте (Сицилия) — до €80/кг!</li>
    </ul>
    <img src="${o.pistachios3}" />
    
    <h3>Единорог Лучистик — волшебство в леденце 🦄✨</h3>
    
    <img src="${o.unicornGerb}" />
    <p><strong>Внезапное включение про единорогов в геральдике:</strong></p>
    <ul>
      <li>Символ Шотландии (а на гербе Великобритании — единорог и лев!)</li>
      <li>В сегодня лет я узнала, что за счет их непростой совместной истории единорог на гербе в цепях.</li>
      <li>И бонусом - что шотландские единороги были теми еще опасными тварями, с которыми лучше не встречаться.</li>
    </ul>
    <img src="${o.scotish}" />    
    
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
    <img src="${o.coffee06}" />
    <p>Сегодня у тебя рождественский кофе и шашлычок из сосновых цукатов.</p>
    <p>По крайней мере, я надеюсь, что это так. У меня совершенно выпал из записей какой-то день - кажется, 6-е - но я успею посмотреть, что у вас за кофе, на месте, и добавить это к завтрашнему тексту, если буду в кондиции. Если вдруг у тебя не шашки, открой следующее окошко - а дальше мои записи делаются точнее.</p>
    
    <h3>Итак, цукаты из шишек 🌲🍯</h3>
    <img src="${o.pinecone1}" />
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Молодые зелёные сосновые шишки (собирают в мае-июне, 3-5 см, мягкие!)</li>
      <li>Варят в сахарном сиропе несколько дней</li>
      <li>Шишки становятся мягкими, сладкими, янтарными</li>
      <li>Можно есть целиком (хрустят!)</li>
    </ul>
    <img src="${o.pinecone2}" />
    
    <p><strong>Вкус:</strong></p>
    <ul>
      <li>Сладкие, хвойные, смолистые</li>
      <li>Ноты: мёд + хвоя + лёгкая горчинка</li>
      <li>Как мармелад, но с характером леса</li>
      <li><strong>Ощущение:</strong> "Я ем ёлку" 🎄</li>
    </ul>
    <img src="${o.pinecone0}" />
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
    <img src="${o.pinecone}" />
    <p><strong>Скандинавия:</strong></p>
    <ul>
      <li>Форажинг (foraging) — сбор дикоросов в лесу</li>
      <li>Хипстерские рестораны добавляют цукаты из шишек в десерты</li>
      <li>Ресторан <strong>"Noma"</strong> (Копенгаген, лучший ресторан мира) подавал хвойные блюда: молодые побеги сосны, веточки ели и жареный олений мох</li>
    </ul>
    <img src="${o.noma}" />
    
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
    <img src="${o.coffee06}" />
    <p>Сегодня у тебя рождественский какао и шашлычок из сосновых цукатов.</p>
    <p>По крайней мере, я надеюсь, что это так. У меня совершенно выпал из записей какой-то день - кажется, 6-е - но я успею посмотреть, что у вас за какао, на месте, и добавить это к завтрашнему тексту, если буду в кондиции. Если вдруг у тебя не шашки, открой следующее окошко - а дальше мои записи делаются точнее.</p>
    
    <h3>Итак, цукаты из шишек 🌲🍯</h3>
    <img src="${o.pinecone1}" />
    
    <p><strong>Что это:</strong></p>
    <ul>
      <li>Молодые зелёные сосновые шишки (собирают в мае-июне, 3-5 см, мягкие!)</li>
      <li>Варят в сахарном сиропе несколько дней</li>
      <li>Шишки становятся мягкими, сладкими, янтарными</li>
      <li>Можно есть целиком (хрустят!)</li>
    </ul>
    <img src="${o.pinecone2}" />
    
    <p><strong>Вкус:</strong></p>
    <ul>
      <li>Сладкие, хвойные, смолистые</li>
      <li>Ноты: мёд + хвоя + лёгкая горчинка</li>
      <li>Как мармелад, но с характером леса</li>
      <li><strong>Ощущение:</strong> "Я ем ёлку" 🎄</li>
    </ul>
    <img src="${o.pinecone0}" />
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
    <img src="${o.pinecone}" />
    <p><strong>Скандинавия:</strong></p>
    <ul>
      <li>Форажинг (foraging) — сбор дикоросов в лесу</li>
      <li>Хипстерские рестораны добавляют цукаты из шишек в десерты</li>
      <li>Ресторан <strong>"Noma"</strong> (Копенгаген, лучший ресторан мира) подавал хвойные блюда: молодые побеги сосны, веточки ели и жареный олений мох</li>
    </ul>
    <img src="${o.noma}" />
    
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
    <img src="${o.smolensk2}" />
    <p>Сегодня мы в Смоленске! Кофе? Загадка (узнаем на месте, я не записала), но если вдруг в конверте окажется болотная тина, то можно добыть из меня нормальный дрип.</p>
    
    <p>Нейронки генерят про Смоленск уже знакомую нам скучную пургу (Наполеон - ВОВ - храм-долгострой), но я попыталась выдавить из них что-нибудь сверх этого.</p>
    <img src="${o.smolensk}" />
    <h3>Башня Веселуха</h3>
    
    <p><strong>Легенда о башне Веселуха:</strong></p>
    <ul>
      <li>Почему башню назвали "Веселуха"? Версий несколько.</li>
      <li><strong>Версия 1:</strong> С высоты башни открывался прекрасный вид — веселящий душу!</li>
      <li><strong>Версия 2 (мрачная):</strong> В башне замуровали живую девушку при строительстве (жертва духам для прочности стены), и в процессе она зловеще хохотала.</li>
      <li>По ночам из башни слышался <strong>женский плач и смех</strong> — то ли призрак, то ли ветер в подземельях</li>
    </ul>
    
    <h3>А в <strong>Маховой башне</strong> - Музей счастья "Смоленские украсы" 🎨✨🦅</h3>
    <img src="${o.tower}" />
    <p>История — музей, сделанный энтузиастами, который быстро вошел в топ-10 музеев города</p>
    <ul>
      <li><strong>1970-е:</strong> Детский туристический клуб "Гамаюн" начал собирать артефакты в экспедиции по Смоленщине. Собрали более 2000 экспонатов (подлинные вещи XIX-XX века)</li>
      <li><strong>2000-е</strong> — музей умирает: нет отопления, света, денег → закрывается</li>
      <li><strong>2016</strong> — энтузиасты из клуба "Гамаюн" возрождают музей, 2018 — Российское военно-историческое общество делает реконструкцию. Провели отопление, свет, расписали стены орнаментами</li>
    </ul>
    
    <p><strong>Концепция — три яруса башни:</strong></p>
    <img src="${o.tower1}" />
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
    <img src="${o.smolensk1}" />
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
    <img src="${o.koliadky1}" />
    <p><strong>Традиционные колядки (Святки, 7-19 января):</strong></p>
    <ul>
      <li>Люди ходили от дома к дому, пели песни, желали счастья</li>
      <li><strong>Ряженые!</strong> В костюмах животных (коза, медведь, волк), чертей, мертвецов!</li>
      <li>Хозяева давали угощения (пироги, сладости, деньги)</li>
      <li>Считалось: чем больше колядующих, тем счастливее год!</li>
      <li><strong>Граница между мирами:</strong> В Святки граница между явью и навью (мир живых и мёртвых) истончается → духи могут проникнуть сюда</li>
      <li>Отсюда — ряженье в чертей и мертвецов (чтобы обмануть духов!)</li>
    </ul>
    <img src="${o.koliadky4}" />
    <p><strong>Что пели:</strong></p>
    <ul>
      <li>Колядки (7-8 января) — про Рождество</li>
      <li>Щедровки (13-14 января, Старый Новый год) — пожелания богатства</li>
      <li>"Пришли колядки — блины да оладки!"</li>
      <li>"Коляда, коляда, отворяй ворота!"</li>
    </ul>
    <p>В общем, не рок-н-ролл, хотя это как посмотреть.</p>
    
    <p><em>Идём по барам, поём (что-то), пьём (в меру), веселимся! </em></p>
    <img src="${o.koliadky}" />
    <h3>Задание 🎯</h3>
    <ol>
      <li><strong>Выпить кофе в Смоленске, чтобы не спать</strong></li>
      <li><strong>Колядуем по барам!</strong> Духи предков одобряют (предположительно) 👻🍻</li>
    </ol>
  `,zebra_message:`
    <h3>Смоленск — город, где можно многое 🔑🕵️‍♀️🎭</h3>
    <img src="${o.smolensk2}" />
    <p>Сегодня мы в Смоленске! Кофе? Загадка (узнаем на месте, я не записала), но если вдруг в конверте окажется болотная тина, то можно добыть из меня нормальный дрип (декаф тоже, хотя предлагаю рискнуть с опасным, чтобы шататься по барам в морозной тьме).</p>
    
    <p>Нейронки генерят про Смоленск уже знакомую нам скучную пургу (Наполеон - ВОВ - храм-долгострой), но я попыталась выдавить из них что-нибудь сверх этого.</p>
    <img src="${o.smolensk}" />
    <h3>Башня Веселуха</h3>
    
    <p><strong>Легенда о башне Веселуха:</strong></p>
    <ul>
      <li>Почему башню назвали "Веселуха"? Версий несколько.</li>
      <li><strong>Версия 1:</strong> С высоты башни открывался прекрасный вид — веселящий душу!</li>
      <li><strong>Версия 2 (мрачная):</strong> В башне замуровали живую девушку при строительстве (жертва духам для прочности стены), и в процессе она зловеще хохотала.</li>
      <li>По ночам из башни слышался <strong>женский плач и смех</strong> — то ли призрак, то ли ветер в подземельях</li>
    </ul>
    
    <h3>А в <strong>Маховой башне</strong> - Музей счастья "Смоленские украсы" 🎨✨🦅</h3>
    <img src="${o.tower}" />
    <p>История — музей, сделанный энтузиастами, который быстро вошел в топ-10 музеев города</p>
    <ul>
      <li><strong>1970-е:</strong> Детский туристический клуб "Гамаюн" начал собирать артефакты в экспедиции по Смоленщине. Собрали более 2000 экспонатов (подлинные вещи XIX-XX века)</li>
      <li><strong>2000-е</strong> — музей умирает: нет отопления, света, денег → закрывается</li>
      <li><strong>2016</strong> — энтузиасты из клуба "Гамаюн" возрождают музей, 2018 — Российское военно-историческое общество делает реконструкцию. Провели отопление, свет, расписали стены орнаментами</li>
    </ul>
    
    <p><strong>Концепция — три яруса башни:</strong></p>
    <img src="${o.tower1}" />
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
    <img src="${o.smolensk1}" />
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
    <img src="${o.koliadky1}" />
    <p><strong>Традиционные колядки (Святки, 7-19 января):</strong></p>
    <ul>
      <li>Люди ходили от дома к дому, пели песни, желали счастья</li>
      <li><strong>Ряженые!</strong> В костюмах животных (коза, медведь, волк), чертей, мертвецов!</li>
      <li>Хозяева давали угощения (пироги, сладости, деньги)</li>
      <li>Считалось: чем больше колядующих, тем счастливее год!</li>
      <li><strong>Граница между мирами:</strong> В Святки граница между явью и навью (мир живых и мёртвых) истончается → духи могут проникнуть сюда</li>
      <li>Отсюда — ряженье в чертей и мертвецов (чтобы обмануть духов!)</li>
    </ul>
    <img src="${o.koliadky4}" />
    <p><strong>Что пели:</strong></p>
    <ul>
      <li>Колядки (7-8 января) — про Рождество</li>
      <li>Щедровки (13-14 января, Старый Новый год) — пожелания богатства</li>
      <li>"Пришли колядки — блины да оладки!"</li>
      <li>"Коляда, коляда, отворяй ворота!"</li>
    </ul>
    <p>В общем, не рок-н-ролл, хотя это как посмотреть.</p>
    
    <p><em>Идём по барам, поём (что-то), пьём (в меру), веселимся! </em></p>
    <img src="${o.koliadky}" />
    <h3>Задание 🎯</h3>
    <ol>
      <li><strong>Выпить кофе в Смоленске, чтобы не спать</strong></li>
      <li><strong>Колядуем по барам!</strong> Духи предков одобряют (предположительно) 👻🍻</li>
    </ol>
  `},{day:19,date:"2026-01-07",tanya_gift:"Круиз: по-венски",zebra_gift:"Круиз: по-индийски (х2)",tanya_bonus:"Аскорбинка",zebra_bonus:"Аскорбинка",title:"День 18",tanya_message:`
      <img src="${o.christmas}" />
  <p>А вот каких замечательных вертепов я нашла на Пинтересте</p>
  
  <p>Мимо этого кофе я не смогла пройти: это была целая серия дрипов с картинками о том, как <strong>"Иисус любит тебя"</strong>☕✝️</p>
  <img src="${o.christmas1}" />

      <p>Между тем <strong>Christian Coffee</strong> — целый жанр в США!</p>
      
      <p><strong>Бренды:</strong> Faith Coffee, Gospel Grounds, Holy Grounds. Часть прибыли идёт миссионерам или церквям.</p>
      
      <p><strong>Слоганы:</strong></p>
      <ul>
        <li>"Jesus is my espresso" (игра слов!)</li>
        <li>"Grounds for faith"</li>
        <li>"Blessed beans"</li>
      </ul>
      <img src="${o.blessed1}" />

      <p>Есть маркетинговая легенда, что кофе изначально считался <strong>дьявольским напитком</strong>. Мусульмане его пили, христиане боялись, пока Папа Климент VIII не попробовал и не благословил (1600), сказав, что кощунством было бы оставлять дьяволу такую хорошую вещь.</p>
      
      <h3>Кофейная молитва (повторяем!) 🙏</h3>
      <p><strong>Orthodox Coffee Prayer:</strong></p>
      
      <p><em>"Bless this coffee, O Lord, as You blessed the water at Cana. Give us strength for our work and keep us alert in Your service. Through the intercession of Saint Drogo, patron of coffee, may this drink refresh our bodies and enliven our spirits. Amen."</em></p>
      <img src="${o.drogo}" />
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
      <img src="${o.christmas2}" />
      
      <p>А вот текст про сегодняшний</p>
      <h3>Кедровый кофе + шоколад без сахара — загадочная сибирская магия ✨🌲</h3>

  <p>Сегодня у нас очередной кофезаменитель - <strong>кедровый кофе</strong> - и <strong>шоколад без сахара</strong>. Звучит как диета гламурного отшельника в тайге.</p>
  <img src="${o.cedar}" />
  <h3>Кедровый кофе — что это? 🌲☕</h3>
  <p><strong>Состав:</strong> Обжаренные и молотые <strong>ядра кедрового ореха</strong> (иногда с добавлением цикория или ячменя).</p>
  <p><strong>Вкус:</strong> Ореховый, маслянистый, сливочный, с лёгкой сладостью. <strong>Похож на кофе, но мягче, без горечи.</strong></p>
  <p><strong>Кофеина НЕТ!</strong> Это напиток-обманка: выглядит как кофе, пахнет как кофе, но не бодрит (зато и не перевозбуждает).</p>
  
  <h3>История кедрового кофе 🌲</h3>
  <p><strong>Сибирь и Урал:</strong> Кедровые орехи — традиционная еда коренных народов (ханты, манси, алтайцы). Их ели сырыми, жарили, толкли в муку, выжимали масло.</p>
  <img src="${o.cedar1}" />
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
  <img src="${o.choko}" />
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
      <img src="${o.christmas}" />
  <p>А вот каких замечательных вертепов я нашла на Пинтересте</p>
  
  <p>Мимо этого кофе я не смогла пройти: это была целая серия дрипов с картинками о том, как <strong>"Иисус любит тебя"</strong>☕✝️</p>
  <img src="${o.christmas1}" />

        <p>Между тем <strong>Christian Coffee</strong> — целый жанр в США!</p>
      
      <p><strong>Бренды:</strong> Faith Coffee, Gospel Grounds, Holy Grounds. Часть прибыли идёт миссионерам или церквям.</p>
      
      <p><strong>Слоганы:</strong></p>
      <ul>
        <li>"Jesus is my espresso" (игра слов!)</li>
        <li>"Grounds for faith"</li>
        <li>"Blessed beans"</li>
      </ul>
      <img src="${o.blessed1}" />

      <p>Есть маркетинговая легенда, что кофе изначально считался <strong>дьявольским напитком</strong>. Мусульмане его пили, христиане боялись, пока Папа Климент VIII не попробовал и не благословил (1600), сказав, что кощунством было бы оставлять дьяволу такую хорошую вещь.</p>
      
      <h3>Кофейная молитва (повторяем!) 🙏</h3>
      <p><strong>Orthodox Coffee Prayer:</strong></p>
      
      <p><em>"Bless this coffee, O Lord, as You blessed the water at Cana. Give us strength for our work and keep us alert in Your service. Through the intercession of Saint Drogo, patron of coffee, may this drink refresh our bodies and enliven our spirits. Amen."</em></p>
      <img src="${o.drogo}" />
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
      <img src="${o.christmas2}" />
      
      <p>А вот текст про сегодняшний</p>
      <h3>Кедровый кофе + шоколад без сахара — загадочная сибирская магия ✨🌲</h3>

  <p>Сегодня у нас очередной кофезаменитель - <strong>кедровый кофе</strong> - и <strong>шоколад без сахара</strong>. Звучит как диета гламурного отшельника в тайге.</p>
  <img src="${o.cedar}" />
  <h3>Кедровый кофе — что это? 🌲☕</h3>
  <p><strong>Состав:</strong> Обжаренные и молотые <strong>ядра кедрового ореха</strong> (иногда с добавлением цикория или ячменя).</p>
  <p><strong>Вкус:</strong> Ореховый, маслянистый, сливочный, с лёгкой сладостью. <strong>Похож на кофе, но мягче, без горечи.</strong></p>
  <p><strong>Кофеина НЕТ!</strong> Это напиток-обманка: выглядит как кофе, пахнет как кофе, но не бодрит (зато и не перевозбуждает).</p>
  
  <h3>История кедрового кофе 🌲</h3>
  <p><strong>Сибирь и Урал:</strong> Кедровые орехи — традиционная еда коренных народов (ханты, манси, алтайцы). Их ели сырыми, жарили, толкли в муку, выжимали масло.</p>
  <img src="${o.cedar1}" />
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
  <img src="${o.choko}" />
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
    <img src="${o.blessed2}" />
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
  
  <img src="${o.teabag1}" />
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
  <img src="${o.guilt}" />
  
  <p><strong>Фанфакт 2. Самый дорогой чайный пакетик в мире:</strong></p>
  <ul>
    <li>2005 год, компания PG Tips (UK). Пакетик украшен <strong>280 бриллиантами</strong>.</li>
    <li>Цена: <strong>$15,000</strong> (почти 2 миллиона рублей на нынешние деньги). Зачем? Благотворительность (продали на аукционе).</li>
  </ul>
  <img src="${o.teabag}" />

  <h3>Задание 🎯</h3>
  <ol>
    <li>Завари кофе в сашете. Наблюдай, как он всплывает. Придави его ложкой с достоинством. Ты - человек, он - пакетик, ты главнее.</li>
    <li><strong>Аффирмация дня:</strong> "Мой чертов кофе всплывает, но я держу его под контролем. Как и свою жизнь!"</li>
    <li>Выпей кофе. И так будет с каждым!..</li>
  </ol>
  <img src="${o.bless9}" />
    `,zebra_message:`<p>Мне так понравился концепт Christian Coffee, что теперь я собираюсь начинать каждый текст с короткого внезапного напоминания, что Иисус с нами.</p>
    <img src="${o.blessed2}" />
  
  <p>Повторяем мексиканский декаф, добавляем пастилу со вкусом алкоголя - или кофе, и в этом случае в ней может быть больше кофеина, чем в напитке!..</p>
  
  <p>Пока твой кофе заваривается, узнаем о Мексике еще что-нибудь увлекательное.</p>

  <h4>🤠 Бонус: Сомбреро — шляпа-зонтик</h4>

<p><strong>Sombrero</strong> = от испанского <em>"sombra"</em> (тень). Буквально: "делающий тень"!</p>
<img src="${o.sombrero1}" />
<p><strong>История:</strong></p>
<ul>
  <li><strong>XV век:</strong> у индейцев ничего подобного не было. Прародители сомбреро приплыли из Испании, а местные радикально увеличили поля.</li>
  <li><strong>Материал:</strong> Солома (для крестьян), фетр (для богатых)</li>
</ul>
<img src="${o.sombrero2}" />
<p><strong>Виды:</strong></p>
<ul>
  <li><strong>Sombrero charro:</strong> Богато украшенное (золотая вышивка), для мариачи и наездников</li>
  <li><strong>Sombrero campesino:</strong> Простое соломенное, для работы в поле</li>
</ul>
<img src="${o.sombrero3}" />

<p><strong>Символика:</strong> Сомбреро стало символом Мексики (иногда стереотипным). Но для мексиканцев это часть национального костюма и гордости!</p>
  
  <h3>🎺 МАРИАЧИ — музыка, которую слышно из космоса</h3>
  <p>Мариачи — это не просто музыка, это <strong>мексиканская душа в звуке</strong>!</p>
  <img src="${o.musik1}" />
  
  <p><strong>Состав оркестра:</strong> Трубы, скрипки, гитары, виуэла, гитаррон (огромная бас-гитара). От 3 до 12 человек.</p>
  
  <p><strong>Костюмы:</strong> Trajes de charro — расшитые серебром чёрные костюмы с широкими брюками, огромные сомбреро. Выглядят как ковбои на свадьбе!</p>
  
  <p><strong>Что играют:</strong> Романтические серенады, песни о любви, предательстве, родине. Громко, страстно, с душой!</p>
  <img src="${o.musik}" />
  <p><strong>Традиция:</strong> Нанять мариачи, чтобы они сыграли серенаду под окном любимой. Соседи не спят — но это романтично!</p>
  
  <p><strong>ЮНЕСКО:</strong> В 2011 году мариачи внесли в список нематериального культурного наследия человечества.</p>
  <iframe width="100%" src="https://www.youtube.com/embed/Jguqnlymeuk?si=HYV7tgjxFoG3o-Av" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
  
  <h3>🎨 Немного про ФРИДУ КАЛО и ее мексиканской идентичности</h3>
  <p><strong>Фрида Кало</strong> (1907-1954) — мексиканская художница, икона феминизма и страдания.</p>
  <img src="${o.frida}" />
  <p>Вот ее фото авторства ее любовника</p>
  <p>Не будем писать про нее общеизвестные банальности (разве что чуть-чуть).</p>
  <p>Чтобы восстановиться после полиомиелита, Фрида занималась боксом и футболом. В качестве основного жанра выбрала автопортрет.</p>
  <img src="${o.frida3}" />
  <p>Изменяла мужу с женщинами и с Троцким. Ходила в брюках, джинсах и национальных мексиканских платьях, раскрашивала свои медицинские гипсовые корсеты.</p>
  <p>Простудилась (и впоследствии умерла в 1954 году) на демонстрации. Продаваться задорого ее картины стали через пару десятилетий после ее смерти - тогда же мир ее переоткрыл.</p>
  <img src="${o.frida1}" />
  <p>Цитата от Frida Kahlo Corporation: "Наряду с розами, кофе был одной из самых любимых вещей Фриды. Фрида любила кофе и рассматривала его приготовление и питьё как неотъемлемую часть своего повседневного вдохновения." Пила мексиканскую арабику за работой, варила традиционный Café de Olla с корицей и нерафинированным тростниковым сахаром.</p>
  
  <h3>🏠 МЕКСИКАНСКАЯ АРХИТЕКТУРА — розовые дома и синие дворы</h3>
  <p>Мексиканская архитектура — это <strong>взрыв цвета</strong>!</p>
  <img src="${o.mex1}" />
  <p><strong>Колониальный стиль (XVI-XIX века):</strong></p>
  <ul>
    <li>Испанцы построили города с центральными площадями (zócalo)</li>
    <li>Церкви в стиле барокко — золото, лепнина, драма!</li>
    <li>Дома с внутренними дворами (patios)</li>
    <li>Яркие фасады: красный, жёлтый, синий, розовый. ОЧЕНЬ МНОГО ЦВЕТА!</li>
  </ul>
  <img src="${o.mex3}" />
  <p><strong>Знаменитые города:</strong></p>
  <ul>
    <li><strong>Гуанахуато</strong> — радужный город на холмах</li>
    <li><strong>Сан-Мигель-де-Альенде</strong> — колониальная жемчужина</li>
    <li><strong>Оахака</strong> — яркие дома + уличное искусство</li>
  </ul>
  <img src="${o.sanmiguel}" />
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
    <img src="${o.bosphorus1}" />

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
    <img src="${o.turkish2}" />
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
    <img src="${o.turkish3}" />
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
  <img src="${o.turkish1}" />
  
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
  <img src="${o.bosphorus}" />
  <p><strong>Пословицы про кофе:</strong></p>
  <ul>
    <li><em>"Bir fincan kahvenin kırk yıl hatırı vardır"</em> (Одна чашка кофе помнится сорок лет) — о том, что гостеприимство не забывается</li>
    <li><em>"Kahve içmeyen adamın ne yüzü kara, ne kalbi"</em> (Кто не пьёт кофе, у того ни лица нет, ни сердца) 😄</li>
  </ul>
  <img src="${o.turkish4}" />
  <h3>Задание 🎯</h3>
  <ol>
    <li><strong>Заварить турецкий кофе</strong>, закусить камнем.</li>
    <li>Нейронка предлагает глупое: вообрази себя султаншей, сплети какую-нибудь интригу.</li>
    <li>Напомни себе, что кофе переживет любого злобного султана.</li>
    <li>Подумай про Стамбул в 2026.</li>
  </ol>
`,zebra_message:`
    <p>Надо бы как-нибудь повтрить Стамбул, но уже в полном составе.</p>
  <img src="${o.bosphorus1}" />
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
  <img src="${o.turkish3}" />
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
  <img src="${o.turkish3}" />
  <p><strong>1633 год — султан Мурад IV запретил кофе!</strong></p>
  <ul>
    <li>Считал, что кофейни = место заговоров (вот ведь чертов параноик)</li>
    <li>Кофейни закрыли, нарушителей казнили (!) 💀</li>
    <li>Но запрет не сработал — люди пили тайно</li>
    <li>После смерти султана кофе вернулся</li>
  </ul>
  
  <h3>Как правильно варить турецкий кофе? 🔥</h3>
  <img src="${o.turkish1}" />
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
  <img src="${o.bosphorus}" />
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
  <img src="${o.turkish4}" />
  <h3>Задание 🎯</h3>
  <ol>
    <li><strong>Заварить турецкий кофе</strong>, закусить камнем.</li>
    <li>Нейронка предлагает глупое: вообрази себя султаншей, сплети какую-нибудь интригу.</li>
    <li>Напомни себе, что кофе переживет любого злобного султана.</li>
    <li>Подумай про Стамбул в 2026.</li>
  </ol>`},{day:22,date:"2026-01-10",tanya_gift:"Who needs sleep",zebra_gift:"???",tanya_bonus:"Пастила?",zebra_bonus:"Пастила?",title:"День 21",tanya_message:`
    <p><strong>WHO NEEDS SLEEP?</strong> ☕️💚</p>
    <img src="${o.blessed3}" />
  
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
  <img src="${o.bless5}" />

  <p>Этот кофе — для тех, кто меняет мир, пока другие спят (иногда не по своему выбору). Для тех, у кого список дел длиннее, чем световой день. Эх. А предполагалось, что это кофе для тех, кто немного поживет, а потом поспит как следует.</p>
  
  <p><strong>⚠️ Предупреждение:</strong> Побочные эффекты включают внезапную способность закончить три проекта до обеда, желание организовать революцию, и лёгкое презрение к тем, кто всё ещё спит в 6 утра.</p>
  <h3>Задание 🎯</h3>
  <ol>
    <li>Выпить кофе.</li>
    <li>Быть богиней <s>христианской кофейной</s> продуктивной продуктивности под рождественский госпел.</li>
    <iframe width="100%" src="https://www.youtube.com/embed/0ZpqixUp4ek?si=uSe9lN0jU5KqtH9N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </ol>
  
`,zebra_message:`
    <img src="${o.blessed3}" />
    <p>Совершенно не понимаю, что у тебя сегодня.</p>
    <p>Если на пакетике написано WHO NEEDS SLEEP, то это САМЫЙ КОФЕИНОВЫЙ КОФЕИН, который только можно найти. Берегись! И дай мне знать, я дополню текст.</p>
    <p>А пока у меня есть госпел и вайбы Christian Coffee.</p>
    <img src="${o.bless5}" />
    
    <p><strong>⚠️ Предупреждение:</strong> Побочные эффекты включают внезапную способность закончить три проекта до обеда, желание организовать революцию и лёгкое презрение к тем, кто всё ещё спит в 6 утра/уже спит в два часа ночи. Но есть шанс, что я подсунула тебе какой-нибудь дублирующий декаф.</p>
    <h3>Задание 🎯</h3>
    <ol>
      <li>Выпить кофе.</li>
      <li>Быть богиней <s>христианской кофейной</s> продуктивной продуктивности под рождественский госпел.</li>
          <iframe width="100%" src="https://www.youtube.com/embed/0ZpqixUp4ek?si=uSe9lN0jU5KqtH9N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </ol>
    `},{day:23,date:"2026-01-11",tanya_gift:"Black Moon",zebra_gift:"Декаф",tanya_bonus:"Зомби-трость",zebra_bonus:"Зомби-трость",title:"День 22",tanya_message:`
      <img src="${o.bless4}" />
      <p>Сегодняшнее христианское послание предполагалось немного зловещим. Как и сегодняшний кофе!</p>

      <h3>Black Moon Coffee — кофе с той стороны 🌑☕💀</h3>
      <p>Сегодня у вас <strong>чёрный кофе под чёрной луной</strong> — и зомби-тросточка в придачу (она так и называлась, натурально)🧟‍♂️</p>
  
      <p><strong>Black Moon (Чёрная Луна)</strong> — одно из самых редких (и зловещих) лунных явлений!</p>
      <img src="${o.moon1}" />
      <p><strong>Что это:</strong></p>
      <ul>
        <li><strong>Второе новолуние в одном месяце</strong> (происходит раз в 29 месяцев)</li>
        <li>Или: третье новолуние в сезоне из четырёх (раз в 33 месяца)</li>
        <li>Луна <strong>полностью невидима</strong> — самая тёмная ночь</li>
        <li>Небо без лунного света — звёзды ярче, тьма глубже</li>
        <li>Ближайшая случится 31 августа 2027 года</li>
        <li>Некая ее противоположность - Голубая Луна (она существует!), и это третье по счету полнолуние в астрономическом сезоне с четырьмя полнолуниями (я забыла это в тот же миг, как прочитала).</li>
      </ul>
      <img src="${o.mooncoffee}" />
  
      <p><strong>Духовное значение:</strong></p>
      <ul>
        <li><strong>Пустота, полная возможностей</strong> — тьма перед созданием. Встреча с тёмной стороной себя, изгнание того, что больше не нужно</li>
        <li><strong>Магия и ритуалы:</strong> мощное время для колдовства! Ведьмы проводят <strong>Deipnon</strong> — ритуал очищения на перекрёстке</li>
        <li>Чёрная Луна — время <strong>богини Гекаты</strong> (богиня перекрёстков, магии, ночи)</li>
      </ul>
  
      <iframe width="100%" src="https://www.youtube.com/embed/k7Il8L0O1AQ?si=Ttg5Yx8LssD2JyZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p><em>Вместо госпела у нас сегодня вуду от Дисней. Почувствуйте силу вуду! Может, она вернет нас в строй в первый рабочий день </em></p>
      <img src="${o.scarycoffee}" />
  
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
      <img src="${o.bless4}" />
      <p>Сегодняшнее христианское послание предполагалось немного зловещим. Как и сегодняшний кофе!</p>
      <p>У Таньки там арабика "Черная луна", у тебя, кажется, просто черный декаф и зомби-тросточка в придачу (она так и называлась, натурально)🧟‍♂️</p>
      <img src="${o.moon1}" />
      
      <iframe width="100%" src="https://www.youtube.com/embed/k7Il8L0O1AQ?si=Ttg5Yx8LssD2JyZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p><em>Вместо госпела у нас сегодня вуду от Дисней. Почувствуйте силу вуду! А как иначе вернуться в строй в первый рабочий день?..</em></p>
      <img src="${o.scarycoffee}" />
  
      <h3>Задание 🎯</h3>
      <ol>
        <li><strong>Завари кофе</strong>, размешай зомби-тросточкой</strong> — пусть она растворится.</li>
        <li><strong>Включи "Friends on the Other Side"</strong>.</li>
        <li>У тебя уже есть отличные блестки, чтобы бонусом превратиться в вампира из Сумерек.</li>
        <li>Пережить первый рабочий день.</li>
      </ol>
      <img src="${o.mooncoffee}" />
  
      <h3>Цитата дня 🎩</h3>
      <p><em>"You got what you wanted, but you lost what you had."</em></p>
      <p>— Dr. Facilier, "Friends on the Other Side"</p>
    `},{day:24,date:"2026-01-12",tanya_gift:"Декаф Гватемала",zebra_gift:"Декаф Мексика (х2)",tanya_bonus:"Бэггинс кофе",zebra_bonus:"Бэггинс кофе (х2)",title:"День 23",tanya_message:`
      <p>Напишите, что у вас сегодня! У меня день совершенного провала в записях.</p>
      <img src="${o.bless6}" />
      <p>Но вот самый странный госпел, который мне подвернулся.</p>
      <iframe width="100%" src="https://www.youtube.com/embed/qYhzhASuWrI?si=MPQGdSplONZ0w99g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `,zebra_message:`
      <p>Напишите, что у вас сегодня! У меня день совершенного провала в записях.</p>
      <img src="${o.bless6}" />
      <p>Но вот самый странный госпел, который мне подвернулся.</p>  
      <iframe width="100%" src="https://www.youtube.com/embed/qYhzhASuWrI?si=MPQGdSplONZ0w99g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`},{day:25,date:"2026-01-13",tanya_gift:"Желтая субмарина",zebra_gift:"Неведомый чай",tanya_bonus:"кофейная пастила",zebra_bonus:"Кофейная пастила",title:"День 24",tanya_message:` 
      <img src="${o.bless10}" />
      <h3>Yellow Submarine + кофейная пастила — Beatles и кофеиновый заговор 🎶☕🍬</h3>
      <p><em>"All you need is love... and caffeine in every possible form!"</em> ☕</p>
      <p><strong>Единственное упоминание кофе в песнях Beatles:</strong></p>
      <ul>
        <li>"Savoy Truffle" (George Harrison, White Album 1968). Вся песня "Savoy Truffle" — список конфет!</li>
        <li>Строка: "A coffee dessert, yes you know it's good news". Это не про кофе, а про шоколадную конфету с кофейным вкусом из коробки Mackintosh's Good News!</li>
        <li>Песня написана про друга Джорджа — **Эрика Клэптона**, который обожал шоколад и от этого портил зубы</li>
        <img src="${o.sweets}" />
        <li>И больше ни единого упоминания кофе, потому что чертовы британцы ☕🚫</li>
        <li>А еще кофе в 1960-е был редкостью. В Британии кофе = растворимый Nescafé (фу!)</li>
        <li>Эспрессо-культура пришла только в 1980-1990-х</li>
        <li>Битлы, скорее всего, не пили хороший кофе вообще. По крайней мере, до Америки, да и там свидетелей не осталось</li>
      </ul>
      <iframe width="100%" src="https://www.youtube.com/embed/CD5LEdgpKi8?si=QnM97xpcsTziDSss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>Так почему Yellow Submarine называется кофе? 🤔</h3>
      <img src="${o.beatles1}" />
      <p>И внезапные Битлы в гладиолусах</p>
      <p><strong>Yellow Submarine = метафора убежища:</strong></p>
      <ul>
        <li>Место, где все друзья рядом ("And our friends are all aboard")</li>
        <li>Где жизнь легка ("Life of ease")</li>
        <li>Где всё ярко и просто ("Sky of blue and sea of green")</li>
      </ul>
      <img src="${o.beatles}" />
      <h3>Задание 🎯</h3>
      <ol>
        <li>Завари Yellow Submarine, съешь кофейную пастилу</li>
        <li>Beatles-философия: All You Need Is... что? ☕💕</li>
      </ol>
    `,zebra_message:`
      <img src="${o.bless10}" />
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
      <img src="${o.beatles1}" />
      <p>И внезапные Битлы в гладиолусах.</p>
    `},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:`
      <p>Внезапный день английского. Сорян, на русском такого эээээ еще не завезли.</p>
      <img src="${o.blessed4}" />
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
      <img src="${o.blessed4}" />
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
      <img src="${o.secrets}" />
      <h3>Prayer Board — твоя визуальная карта молитв 📌🙏✨</h3>
      <img src="${o.pb1}" />
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
      <img src="${o.pb2}" />
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
      <img src="${o.pb3}" />
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
      <img src="${o.pb4}" />
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
      <img src="${o.blessed11}" />
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
      <img src="${o.blessed12}" />
      <h3>Задание 🎯</h3>
      <ol>
        <li>Завари и выпей свой неведомый кофе с неведомым бонусом ☕</li>
        <li>Вообрази свою гипотетическую молитвенную доску. Какие там были бы подразделы, какие молитвы в "реализованных"?</li>
      </ol>
    `,zebra_message:`
      <p>Продолжаем погружаться в мир christian culture с пинтереста с его неотразимым вайбом</p>
      <h3>Prayer Board — твоя визуальная карта молитв 📌🙏✨</h3>
      <img src="${o.pb1}" />
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
      <img src="${o.pb2}" />
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
      <img src="${o.pb3}" />

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
      <img src="${o.pb4}" />
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
      <img src="${o.blessed11}" />
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
      <img src="${o.blessed12}" />
      <h3>Задание 🎯</h3>
      <ol>
        <li>Завари и выпей свой неведомый кофе с неведомым бонусом ☕</li>
        <li>Вообрази свою гипотетическую молитвенную доску. Какие там были бы подразделы, какие молитвы в "реализованных"?</li>
      </ol>
    `},{day:28,date:"2026-01-16",tanya_gift:"Шоколадная бомба",zebra_gift:"Шоколадная бомба",tanya_bonus:"Шоколадка Икеа",zebra_bonus:"Шоколадка Икеа",title:"День 25",tanya_message:`
      <p>Кто пережил рабочую неделю и выжил (и молодец)? Да это же мы!</p>
      <img src="${o.bomb1}" />
      <h2>Сегодня у нас шоколадные бомбы (суббота, кофеин не нужен тебе) и шоколадка из Икеи, если я ничего не напутала.</h2>
      <p>А знаешь, что тебе нужно? Отдых.</p>
      <h3>Rest as Resistance — отдых как сопротивление 🛌✊</h3>
      <p>В <strong>2020-е</strong> началась волна <strong>sleep hygiene</strong> и <strong>rest as resistance</strong>!</p>
      <p><strong>Что это?</strong> Движение, созданное <strong>Tricia Hersey</strong> (The Nap Ministry, основано в 2016).</p>
      <p><strong>Главная идея:</strong> <strong>Отдых — это не роскошь, а политический акт сопротивления!</strong> ✊🛌</p>
      <img src="${o.nm1}" />
      <p><strong>Почему?</strong></p>
      <ul>
        <li>🏭 <strong>Capitalism</strong> и <strong>white supremacy</strong> превратили нас в машины производства</li>
        <li>⚙️ <strong>Grind culture</strong> (культура перегрузки) говорит: "твоя ценность = твоя продуктивность"</li>
        <li>🪖 <strong>История:</strong> 300+ лет рабства (1525-1866) — Black people работали без отдыха от рассвета до заката</li>
        <li>😴 <strong>Not resting = насилие над собой</strong> — ты соглашаешься с системой, которая говорит: "твоё тело не твоё, продолжай работать!"</li>
      </ul>
      <img src="${o.nap1}" />
      <p><strong>Tricia Hersey:</strong> Художник, теолог, активист. Master of Divinity (Emory University). Основала The Nap Ministry — организацию, которая создаёт безопасные пространства для отдыха через коллективный сон, performance art, workshops.</p>
      <p><strong>Корни движения:</strong></p>
      <ul>
        <li>✝️ <strong>Black Liberation Theology</strong> (теология освобождения чёрных)</li>
        <li>👩🏾 <strong>Womanism</strong> (феминизм чёрных женщин)</li>
        <li>🧘 <strong>Somatics</strong> (телесные практики)</li>
        <li>🚀 <strong>Afrofuturism</strong> (афрофутуризм)</li>
      </ul>
      <img src="${o.nm2}" />
      <p>(если ваша вечеринка не поъожа на это...)</p>

      <p><strong>Цитата Tricia Hersey:</strong><br>
      <em>"To not rest is really being violent towards your body, to align yourself with a system that says your body doesn't belong to you, keep working, you are simply a tool for our production..."</em></p>
  
      <p><strong>Пример:</strong> Бабушка Tricia — пережила линчевание в Mississippi, бежала в Chicago во время Great Migration (1950s), растила 9 детей, работала в больнице, но <strong>каждый день медитировала 30 минут на жёлтом диване!</strong> Это был её <strong>акт сопротивления</strong>! 🛋️✊</p>
      <p><strong>Harriet Tubman:</strong> Во время миссий Underground Railroad (помощь рабам в побеге) она <strong>останавливалась, чтобы вздремнуть и помолиться</strong>. Даже в ситуациях жизни-смерти она отдыхала, мечтала, стратегически думала. <strong>Её никогда не поймали!</strong> 🙏🛌</p>
      <img src="${o.rr}" />
      <p><strong>"Rest as resistance" — это НЕ self-care!</strong></p>
      <ul>
        <li>❌ Это не "побалуй себя спа-процедурами"</li>
        <li>✅ Это <strong>community care</strong> (забота о сообществе)</li>
        <li>✅ Это <strong>политическое и социальное движение</strong></li>
        <li>✅ Это <strong>отказ от системы, которая эксплуатирует нас</strong></li>
      </ul>
  
      <p><strong>Tenets (постулаты) The Nap Ministry:</strong></p>
      <ol>
        <li><strong>Rest is resistance</strong> — отдых нарушает систему, которая хочет, чтобы ты работал до смерти</li>
        <li><strong>Rest is a spiritual practice</strong> — отдых = портал для исцеления и новых идей</li>
        <li><strong>Our bodies are a site of liberation</strong> — где бы ты ни был, твоё тело = место освобождения</li>
      </ol>
      <p><strong>Книга:</strong> "Rest Is Resistance: A Manifesto" (2022) — New York Times bestseller!</p>

      <p><strong>Как это работает:</strong></p>
      <ul>
        <li>🛌 <strong>Nap</strong> (дремать) — не только ночной сон, но и короткие перерывы днём</li>
        <li>🧘 <strong>Rest</strong> — сидеть в тишине, медитировать, не делать ничего</li>
        <li>💭 <strong>Daydream</strong> — мечтать, фантазировать, воображать другой мир</li>
        <li>🌀 <strong>Slowing down</strong> — замедляться, отказываться от "hustle"</li>
      </ul>

      <p><strong>Это сложно!</strong> Hersey предупреждает: "Resistance — это не милый хэштег. Это настоящая борьба, депrogramming, lifelong work!"</p>

      <h3>А теперь про шоколадные бомбы 🍫💥</h3>
      <img src="${o.bomb}" />
      <p><strong>История:</strong> Создатель — Debbas Gourmet (California, 2019). Фотограф Eric Torres Garcia разместил фото → TikTok подхватил → вирус! Оказывается, это очень "молодая" штука.</p>
      <p><strong>1917:</strong> Angelus Marshmallows придумала класть маршмеллоу В горячий шоколад — классическое сочетание! 🎄</p>
      <p>Возможно, у этих бомб христианские корни: пустые шоколадные яйца, разумеется, пасхальная тема.</p>
      <p><strong>Easter eggs</strong> 🐣 — 1873, JS Fry's and Sons (UK) = первые шоколадные пасхальные яйца! Яйцо = пустая гробница Христа.</p>
  
      <iframe width="100%" src="https://www.youtube.com/embed/ca91rgnL8js?si=ch58A6YEtF7i_h4f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>(если кому-то тут нужна видеоинструкция)</p>

      <h3>Задание 🎯</h3>
  
      <ol>
        <li>Не поленись растворить бомбочку в молоке, как надо 💥</li>
        <li>🛋️ Садишься, пьёшь — <strong>отказываешься от спешки</strong>. 🙏 Это твой <strong>акт сопротивления</strong> grind culture!</li>
        <li>Постараемся не слишком грустить об Икее</li>
        <li>Молитва от нейросети: <em>"Господь, спасибо за право отдыхать. Моё тело — не машина. Я достойна покоя."</em> 🙏</li>
      </ol>
  
      <h3>Цитаты 💬</h3>
  
      <p><strong>Tricia Hersey:</strong><br>
      <em>"Rest is resistance because it disrupts the lie that we are not doing enough. It screams, 'No, that is a lie. I am enough. I am worthy now and always, because I am here.'"</em></p>
  
      <p><strong>Bible (хо-хо, и там тоже!):</strong><br>
      <em>"Come to me, all who are weary and burdened, and I will give you rest."</em> — Matthew 11:28</p>
      <p>То есть сам бог велел отдыхать - особенно по субботам.</p>
    `,zebra_message:`
      <p>Кто пережил рабочую неделю и выжил (и молодец)? Да это же мы!</p>
      <img src="${o.bomb1}" />
      <h2>Сегодня у нас шоколадные бомбы (суббота, кофеин не нужен тебе) и шоколадка из Икеи, если я ничего не напутала.</h2>
      <p>А знаешь, что тебе нужно? Отдых.</p>
      <h3>Rest as Resistance — отдых как сопротивление 🛌✊</h3>
      <p>В <strong>2020-е</strong> началась волна <strong>sleep hygiene</strong> и <strong>rest as resistance</strong>!</p>
      <p><strong>Что это?</strong> Движение, созданное <strong>Tricia Hersey</strong> (The Nap Ministry, основано в 2016).</p>
      <p><strong>Главная идея:</strong> <strong>Отдых — это не роскошь, а политический акт сопротивления!</strong> ✊🛌</p>
      <img src="${o.nm1}" />
      <p><strong>Почему?</strong></p>
      <ul>
        <li>🏭 <strong>Capitalism</strong> и <strong>white supremacy</strong> превратили нас в машины производства</li>
        <li>⚙️ <strong>Grind culture</strong> (культура перегрузки) говорит: "твоя ценность = твоя продуктивность"</li>
        <li>🪖 <strong>История:</strong> 300+ лет рабства (1525-1866) — Black people работали без отдыха от рассвета до заката</li>
        <li>😴 <strong>Not resting = насилие над собой</strong> — ты соглашаешься с системой, которая говорит: "твоё тело не твоё, продолжай работать!"</li>
      </ul>
      <img src="${o.nap1}" />
      <p><strong>Tricia Hersey:</strong> Художник, теолог, активист. Master of Divinity (Emory University). Основала The Nap Ministry — организацию, которая создаёт безопасные пространства для отдыха через коллективный сон, performance art, workshops.</p>
      <p><strong>Корни движения:</strong></p>
      <ul>
        <li>✝️ <strong>Black Liberation Theology</strong> (теология освобождения чёрных)</li>
        <li>👩🏾 <strong>Womanism</strong> (феминизм чёрных женщин)</li>
        <li>🧘 <strong>Somatics</strong> (телесные практики)</li>
        <li>🚀 <strong>Afrofuturism</strong> (афрофутуризм)</li>
      </ul>
      <img src="${o.nm2}" />
      <p>(если ваша вечеринка не поъожа на это...)</p>

      <p><strong>Цитата Tricia Hersey:</strong><br>
      <em>"To not rest is really being violent towards your body, to align yourself with a system that says your body doesn't belong to you, keep working, you are simply a tool for our production..."</em></p>
  
      <p><strong>Пример:</strong> Бабушка Tricia — пережила линчевание в Mississippi, бежала в Chicago во время Great Migration (1950s), растила 9 детей, работала в больнице, но <strong>каждый день медитировала 30 минут на жёлтом диване!</strong> Это был её <strong>акт сопротивления</strong>! 🛋️✊</p>
      <p><strong>Harriet Tubman:</strong> Во время миссий Underground Railroad (помощь рабам в побеге) она <strong>останавливалась, чтобы вздремнуть и помолиться</strong>. Даже в ситуациях жизни-смерти она отдыхала, мечтала, стратегически думала. <strong>Её никогда не поймали!</strong> 🙏🛌</p>
      <img src="${o.rr}" />
      <p><strong>"Rest as resistance" — это НЕ self-care!</strong></p>
      <ul>
        <li>❌ Это не "побалуй себя спа-процедурами"</li>
        <li>✅ Это <strong>community care</strong> (забота о сообществе)</li>
        <li>✅ Это <strong>политическое и социальное движение</strong></li>
        <li>✅ Это <strong>отказ от системы, которая эксплуатирует нас</strong></li>
      </ul>
  
      <p><strong>Tenets (постулаты) The Nap Ministry:</strong></p>
      <ol>
        <li><strong>Rest is resistance</strong> — отдых нарушает систему, которая хочет, чтобы ты работал до смерти</li>
        <li><strong>Rest is a spiritual practice</strong> — отдых = портал для исцеления и новых идей</li>
        <li><strong>Our bodies are a site of liberation</strong> — где бы ты ни был, твоё тело = место освобождения</li>
      </ol>
      <p><strong>Книга:</strong> "Rest Is Resistance: A Manifesto" (2022) — New York Times bestseller!</p>

      <p><strong>Как это работает:</strong></p>
      <ul>
        <li>🛌 <strong>Nap</strong> (дремать) — не только ночной сон, но и короткие перерывы днём</li>
        <li>🧘 <strong>Rest</strong> — сидеть в тишине, медитировать, не делать ничего</li>
        <li>💭 <strong>Daydream</strong> — мечтать, фантазировать, воображать другой мир</li>
        <li>🌀 <strong>Slowing down</strong> — замедляться, отказываться от "hustle"</li>
      </ul>

      <p><strong>Это сложно!</strong> Hersey предупреждает: "Resistance — это не милый хэштег. Это настоящая борьба, депrogramming, lifelong work!"</p>

      <h3>А теперь про шоколадные бомбы 🍫💥</h3>
      <img src="${o.bomb}" />
      <p><strong>История:</strong> Создатель — Debbas Gourmet (California, 2019). Фотограф Eric Torres Garcia разместил фото → TikTok подхватил → вирус! Оказывается, это очень "молодая" штука.</p>
      <p><strong>1917:</strong> Angelus Marshmallows придумала класть маршмеллоу В горячий шоколад — классическое сочетание! 🎄</p>
      <p>Возможно, у этих бомб христианские корни: пустые шоколадные яйца, разумеется, пасхальная тема.</p>
      <p><strong>Easter eggs</strong> 🐣 — 1873, JS Fry's and Sons (UK) = первые шоколадные пасхальные яйца! Яйцо = пустая гробница Христа.</p>
  
      <iframe width="100%" src="https://www.youtube.com/embed/ca91rgnL8js?si=ch58A6YEtF7i_h4f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <p>(если кому-то тут нужна видеоинструкция)</p>

      <h3>Задание 🎯</h3>
  
      <ol>
        <li>Не поленись растворить бомбочку в молоке, как надо 💥</li>
        <li>🛋️ Садишься, пьёшь — <strong>отказываешься от спешки</strong>. 🙏 Это твой <strong>акт сопротивления</strong> grind culture!</li>
        <li>Постараемся не слишком грустить об Икее</li>
        <li>Молитва от нейросети: <em>"Господь, спасибо за право отдыхать. Моё тело — не машина. Я достойна покоя."</em> 🙏</li>
      </ol>
  
      <h3>Цитаты 💬</h3>
  
      <p><strong>Tricia Hersey:</strong><br>
      <em>"Rest is resistance because it disrupts the lie that we are not doing enough. It screams, 'No, that is a lie. I am enough. I am worthy now and always, because I am here.'"</em></p>
  
      <p><strong>Bible (хо-хо, и там тоже!):</strong><br>
      <em>"Come to me, all who are weary and burdened, and I will give you rest."</em> — Matthew 11:28</p>
      <p>То есть сам бог велел отдыхать - особенно по субботам.</p>
    `},{day:29,date:"2026-01-17",tanya_gift:"Особо крепкий черный дрип",zebra_gift:"Новая Гватемала декаф",tanya_bonus:"Иранская кофейная карамель",zebra_bonus:"Иранская кофейная карамель",title:"День 25",tanya_message:`
      <h2>Конилон Витория — крепкий кофе для сильных духом! ☕💪🇧🇷</h2>
  
      <p><strong>Сегодня у нас:</strong></p>
      <ul>
        <li>☕ Конилон Витория (Бразилия) — очень крепкий кофе, по духу скорее для понедельника.</li>
        <li>🍬 Кофейная карамель из Ирана.</li>
      </ul>
      <p><strong>Сорт:</strong> Conilon (он же Robusta!)</p>
      <p><strong>Откуда:</strong> Бразилия, Капарао, штат Эспириту-Санту</p>
      <img src="${o.farm}" />
  
  <h3>Арабика vs Робуста — разные растения! 🌱🆚🌱</h3>
  <p>Одного семейства и рода, но разных видов: Coffea arabica и Coffea canephora (robusta)</p>
  <p>Существует <strong>120+ видов</strong> растений Coffea, но только два используются для кофе: arabica и robusta!</p>
  <img src="${o.beans}" />
  <h4>Coffea Arabica 🌸</h4>
  
  <p><strong>Ботаническое описание:</strong></p>
  <ul>
    <li>🌳 Высота: 6-9 метров (но обрезают до 2-3м для удобства)</li>
    <li>🍃 Листья: крупные, тёмно-зелёные, глянцевые, овальные</li>
    <li>🌸 Цветы: белые, жасминовый аромат, растут кластерами</li>
    <li>🍒 Плоды: красные/фиолетовые "cherries" (вишни)</li>
    <li>🫘 Зёрна: овальные, большие, с изогнутой линией посередине (S-образная)</li>
    <li>🍂 Самоопыляемая (self-fertile) — может опыляться сама! Генетически стабильна.</li>
    <li>🌡️ Характер:</strong> Капризная! Чувствительна к болезням (coffee leaf rust, coffee berry borer), морозу, перепадам температуры.</li>
    <li>🍬 Вкус:</strong> Мягкий, сладкий, фруктовый, цветочный, цитрусовый, с кислинкой. Ноты: ягоды, шоколад, карамель, мёд, цветы.</li>
  </ul>
  
  <h4>Coffea Canephora (Robusta) 💪</h4>
  
  <p><strong>Ботаническое описание:</strong></p>
  <ul>
    <li>🌳 Высота: 10 метров (в два раза выше арабики!)</li>
    <li>🍃 Листья: меньше, чем у арабики</li>
    <li>🌸 Цветы: белые, цветут нерегулярно</li>
    <li>🍒 Плоды: овальные "cherries"</li>
    <li>🫘 Зёрна: круглые, маленькие, с прямой линией посередине. <strong>Урожай:</strong> Больше зёрен, быстрее созревает (6-8 месяцев против 9-10 для арабики), можно собирать механически</li>

    <li>🍂 Self-sterile (самобесплодная) — нужно перекрёстное опыление (ветер, пчёлы, насекомые). Генетически разнообразна.</li>
    <li>🌡️ Характер:</strong> Выносливая, устойчива к болезням и вредителям (кофеин защищает!), неприхотлива.</li>
    <li>🍬 Вкус:</strong> Крепкий, горький, землистый, древесный, ореховый, шоколадный. Низкая кислотность. Ноты: орех, какао, дерево, каучук (резина). Какая-то нишевая парфюмерия, короче.</li>
  </ul>
  <img src="${o.beans1}" />
      <p><strong>Стереотип:</strong> "100% Arabica" = знак качества. Робуста = дешёвка для растворимого кофе. <strong>Правда:</strong> Это культурная предвзятость! <strong>История:</strong> В 20 веке робусту массово использовали для instant coffee (растворимого кофе) → низкое качество → плохая репутация.</p>
      <p><strong>НО!</strong> Хорошая робуста ≠ плохая робуста. Существует <strong>Specialty robusta:</strong>: Вьетнам, Индонезия, Индия, Бразилия выращивают высококачественную робусту с отличным вкусом</p>

      <h3>Почему пить робусту? ☕💪</h3>
      <p><strong>1. Крепость!</strong> ⚡Кофеина в 2-4 раза больше. Если арабика = "водичка", робуста = POWER</p>
      <p><strong>2. Ноль кислотности!</strong> 🚫 Не любишь кислинку? Робуста для тебя! Плотный, гладкий, без кислого послевкусия. Nutella, жареный орех, какао — насыщенный, тёмный вкус</p>
  
      <p><strong>3. Crema!</strong> ☕ Робуста создаёт густую пенку на эспрессо — именно поэтому итальянцы её любят и добавляют в эспрессо.</p>

      <h3>Иранская кофейная карамель 🍬🇮🇷</h3>
      <p><strong>Вкус:</strong> Настоящий кофейный экстракт, сладкая с горчинкой, тает во рту!</p>
      <img src="${o.caramel}" />
      <p>И снова о покойниках. <strong>Кофе на траурных церемониях:</strong></p>
      <ul>
        <li>🕯️ На Ближнем Востоке издавна подают кофе на похоронах и траурных церемониях</li>
        <li>🇮🇷 В Иране это называется <strong>Qahveh-ye Tarhim</strong> (قهوه ترحیم) — "Condolence Coffee" (кофе соболезнования)</li>
        <li>🌹 Похож на турецкий кофе, но с розовой водой и леденцами</li>
      </ul>

      <h3>Fun Facts 💬</h3>

      <p><strong>Кофеин = защита:</strong> Робуста производит больше кофеина, потому что растёт низко → больше насекомых → нужна защита! Кофеин токсичен для жуков.</p>

      <h3>Задание 🎯</h3>
  
      <ol>
        <li>Завари Конилон Витория — почувствуй крепость робусты! ☕ Сравни с арабикой, почувствуй разницу</li>
        <li>Выбери себе одну из аффирмаций робусты:</li>
        <ul>
          <li>💪 <em>"Я сильнее, чем думают другие"</em></li>
          <li>🌍 <em>"Я выживу там, где другие сдаются. Я адаптируюсь к любым условиям. Посмотрим, где будет ваша арабика после климатических изменений!"</em></li>
          <li>⚡ <em>"Моя крепость — не агрессия, а устойчивость. Я стою прочно."</em></li>
          <li>🚫 <em>"Мне не нужна кислинка, чтобы быть интересной. Я самодостаточна."</em></li>
          <li>🌱 <em>"Во мне столько кофеина, что чертовы паразиты надкусят меня и умрут."</em></li>
        </ul>
      </ol>
    `,zebra_message:`
      <h2>Декаф из Гватемалы + гватемальская кухня! ☕🇬🇹</h2>
  
  <p><strong>Сегодня у нас (технически вчера, но черт с ним):</strong></p>
  <ul>
    <li>☕ Новый декаф из Гватемалы (Swiss Water Process)</li>
    <li>🍬 Кофейная карамель из Ирана (бонус!)</li>
  </ul>

  <p>Он должен был быть с красивым небом на упаковке, но эти враги прислали внезапный белый пакетик. Я вначале злилась, а потом решила, что это хоооолст. А пока давай узнает еще что-нибудь этакое про Гватемалу.</p>
      <img src="${o.gvat1}" />
  <h3>Гватемальская кухня — кофе + традиции! 🇬🇹🍪☕</h3>
  
  <p><strong>Что такое "refacción"?</strong><br>
  В Гватемале <strong>10:00 и 16:00</strong> = время для кофе-брейка! Это называется "refacción típica" — традиционная кофейная пауза с угощениями!</p>
  
  <p><strong>Что пьют гватемальцы с кофе:</strong></p>
  <img src="${o.gvat3}" />
  <h4>1. Champurradas — хрустящие печенья! 🍪</h4>
  
  <p><strong>Что это?</strong> Crispy, buttery cookies с кунжутом — <strong>созданы специально, чтобы макать в кофе!</strong></p>
  
  <p><strong>Вкус:</strong> Сливочные, с лёгкой сладостью, ореховый вкус от кунжута. Хрустят, но размягчаются в кофе! 🍪☕</p>
  
  <p><strong>История:</strong> Испанское влияние + гватемальские традиции. Похожи на испанские Maria cookies и итальянские biscotti.</p>
  
  
  <p><strong>Рецепт Champurradas:</strong></p>
  <ul>
    <li>2 cups мука</li>
    <li>1 cup сахар (или piloncillo — нерафинированный тростниковый сахар)</li>
    <li>1/2 cup сливочное масло</li>
    <li>1/2 cup маргарин</li>
    <li>1 tsp разрыхлитель</li>
    <li>Щепотка соли</li>
    <li>Кунжут для посыпки</li>
  </ul>
  
  <p><strong>Как готовить:</strong></p>
  <ol>
    <li>Смешай муку, разрыхлитель, соль</li>
    <li>Взбей масло, маргарин, сахар до пышности (2-3 минуты)</li>
    <li>Добавь сухую смесь, замеси тесто</li>
    <li>Раскатай толщиной ~1 см, вырежи круглые печенья</li>
    <li>Посыпь кунжутом, слегка прижми</li>
    <li>Выпекай 15-20 минут при 180°C до золотистости</li>
  </ol>
  
  <p><strong>Как есть:</strong> Макай в кофе! Или намажь маслом и добавь refried black beans (сладкое + солёное = 🤯)!</p>
  
  <h4>2. Atol de Elote — кукурузный напиток! 🌽☕</h4>
  <img src="${o.gvat5}" />
  <p><strong>Что это?</strong> Тёплый, сладкий, густой напиток из кукурузы, молока, корицы.</p>
  
  <p><strong>История:</strong> Maya считали кукурузу священной! Atol — древняя традиция, тысячи лет. "Tolli" = кукуруза на языке майя. Такой густой, что иногда нужна ложка, чтобы есть 🥄</p>
  
  <p><strong>Рецепт Atol de Elote:</strong></p>
  <ul>
    <li>4 початка свежей кукурузы (или 2 cups замороженной)</li>
    <li>4 cups молоко</li>
    <li>1/2 cup сахар</li>
    <li>1 палочка корицы</li>
    <li>1 tsp ваниль</li>
  </ul>
  
  <p><strong>Как готовить:</strong></p>
  <ol>
    <li>Срежь зёрна с початков, измельчи в блендере с 1 cup молока</li>
    <li>Процеди через сито (чтобы удалить крупные части)</li>
    <li>В кастрюле смешай кукурузное пюре, оставшееся молоко, сахар, корицу</li>
    <li>Вари на среднем огне, постоянно помешивая (чтобы не было комков!)</li>
    <li>Когда загустеет (5-7 минут), добавь ваниль</li>
    <li>Подавай горячим!</li>
  </ol>
  
  <p><strong>Варианты:</strong></p>
  <ul>
    <li><strong>Atol de Chocolate (Champurrado):</strong> Добавь шоколад!</li>
    <li><strong>Atol de Café:</strong> Добавь кофе вместо ванили!</li>
    <li><strong>Atol de Plátano:</strong> Банановый atol с гвоздикой</li>
  </ul>
  
  <h4>3. Pan Dulce — сладкий хлеб! 🥐 (похоже на куличи, но нет)</h4>
  <img src="${o.gvat4}" />
  
  <p><strong>Что это?</strong> Корзинка со сладкой выпечкой (conchas, bollos) — подаётся на завтрак с кофе!</p>
  <p><strong>Conchas:</strong> В форме ракушки или кулича, воздушные, сладкие</p>

  <h3>Иранская кофейная карамель 🍬🇮🇷</h3>
      <p><strong>Вкус:</strong> Настоящий кофейный экстракт, сладкая с горчинкой, тает во рту!</p>
      <img src="${o.caramel}" />
      <p>И снова о покойниках. <strong>Кофе на траурных церемониях:</strong></p>
      <ul>
        <li>🕯️ На Ближнем Востоке издавна подают кофе на похоронах и траурных церемониях</li>
        <li>🇮🇷 В Иране это называется <strong>Qahveh-ye Tarhim</strong> (قهوه ترحیم) — "Condolence Coffee" (кофе соболезнования)</li>
        <li>🌹 Похож на турецкий кофе, но с розовой водой и леденцами</li>
      </ul>
  
  <h3>Задание 🎯</h3>
  
  <ol>
    <li>Завари декаф из Гватемалы ☕</li>
    <li>Испеки champurradas (или купи печенье для макания!) 🍪</li>
    <li>Свари atol de elote — почувствуй вкус Maya! 🌽</li>
    <li>Устрой гватемальский refacción — кофе + печенье + atol в 16:00! 🕓</li>
  </ol>
    `},{day:30,date:"2026-01-18",tanya_gift:"Unholy water",zebra_gift:"Unholy water",tanya_bonus:"Китайские кофейные конфетки",zebra_bonus:"Китайские кофейные конфетки",title:"День 25",tanya_message:`
      <img src="${o.blessed13}" />

    <p><strong>Тренд провокационных названий</strong> в specialty-кофе:</p>
    <ul>
      <li><strong>Death Wish Coffee</strong> — "Самый крепкий кофе в мире" (крепче в 2 раза!)</li>
      <li><strong>Black Insomnia</strong> — "Чёрная бессонница"</li>
      <li><strong>Unholy Water</strong> — "То, что бариста варят вместо святой воды"</li>
    </ul>

    <p><strong>Философия:</strong> Кофе — это ритуал, почти религия! Утренняя чашка = священнодействие. Unholy = шутка для тех, кто понимает.</p>

    <h3>Эфиопия Вичо (Yicha) — spicy edition! 🌶️🔥</h3>
    <p><strong>Регион Yirgacheffe</strong> (Йыргачеффе) — один из самых знаменитых!</p>
    
    <p><strong>География:</strong></p>
    <ul>
      <li>Юг Эфиопии, высота 1700-2200 м</li>
      <li>Мелкие фермеры (участки 1-2 гектара)</li>
      <li>Станции обработки (washing stations) собирают урожай с сотен ферм</li>
    </ul>

    <p><strong>Обработка Natural (натуральная):</strong></p>
    <ul>
      <li>Ягоды сушат целиком на африканских кроватях (raised beds) 2-3 недели</li>
      <li>Солнце ферментирует мякоть → дикие, фруктовые вкусы!</li>
      <li>Результат: черника, клубника, вино, специи</li>
    </ul>

    <p><strong>В этом кофе обещаны специи и вкус соуса барбекю</strong> — не буквально (но это не точно).</p>
    
    <p>Это дескриптор для комплексного профиля:</p>
    <ul>
      <li><strong>Дымность</strong> — от обработки или обжарки</li>
      <li><strong>Специи</strong> — корица, кардамон, гвоздика (естественные ноты эфиопов!)</li>
      <li><strong>Умами</strong> — глубина, "мясистость" вкуса</li>
      <li><strong>Сладость + кислинка</strong> — как в соусе BBQ!</li>
    </ul>

    <p><strong>Ферментация</strong> при натуральной обработке создаёт неожиданные вкусы:</p>
    <ul>
      <li>Дикие дрожжи на кожице ягод</li>
      <li>Разложение сахаров в мякоти</li>
      <li>= Вкусы: вино, ром, специи, иногда "мясные" ноты!</li>
    </ul>

    <h3>Бонусом китайские конфеты без сахара - но с кофе 🍬🇨🇳</h3>
      <img src="${o.blessed15}" />
    <h3>Задание 🎯</h3>
    <ol>
      <li><strong>Завари Unholy Water</li>
      <li><strong>Что там со вкусом:</strong> Специи? Дымность? Фрукты? Что-то про соус барбекю?</li>
      <li>Если бы ты создавала свой "провокационный" кофейный бленд, как бы ты его назвала?</li>
    </ol>
    `,zebra_message:`
      <img src="${o.blessed13}" />
      <p>Осторожно, сегодня кофе опасный!</p>
      
    <p><strong>Тренд провокационных названий</strong> в specialty-кофе:</p>
    <ul>
      <li><strong>Death Wish Coffee</strong> — "Самый крепкий кофе в мире" (крепче в 2 раза!)</li>
      <li><strong>Black Insomnia</strong> — "Чёрная бессонница"</li>
      <li><strong>Unholy Water</strong> — "То, что бариста варят вместо святой воды"</li>
    </ul>

    <p><strong>Философия:</strong> Кофе — это ритуал, почти религия! Утренняя чашка = священнодействие. Unholy = шутка для тех, кто понимает.</p>

    <h3>Эфиопия Вичо (Yicha) — spicy edition! 🌶️🔥</h3>
    <p><strong>Регион Yirgacheffe</strong> (Йыргачеффе) — один из самых знаменитых!</p>
    
    <p><strong>География:</strong></p>
    <ul>
      <li>Юг Эфиопии, высота 1700-2200 м</li>
      <li>Мелкие фермеры (участки 1-2 гектара)</li>
      <li>Станции обработки (washing stations) собирают урожай с сотен ферм</li>
    </ul>

    <p><strong>Обработка Natural (натуральная):</strong></p>
    <ul>
      <li>Ягоды сушат целиком на африканских кроватях (raised beds) 2-3 недели</li>
      <li>Солнце ферментирует мякоть → дикие, фруктовые вкусы!</li>
      <li>Результат: черника, клубника, вино, специи</li>
    </ul>

    <p><strong>В этом кофе обещаны специи и вкус соуса барбекю</strong> — не буквально (но это не точно).</p>
    
    <p>Это дескриптор для комплексного профиля:</p>
    <ul>
      <li><strong>Дымность</strong> — от обработки или обжарки</li>
      <li><strong>Специи</strong> — корица, кардамон, гвоздика (естественные ноты эфиопов!)</li>
      <li><strong>Умами</strong> — глубина, "мясистость" вкуса</li>
      <li><strong>Сладость + кислинка</strong> — как в соусе BBQ!</li>
    </ul>

    <p><strong>Ферментация</strong> при натуральной обработке создаёт неожиданные вкусы:</p>
    <ul>
      <li>Дикие дрожжи на кожице ягод</li>
      <li>Разложение сахаров в мякоти</li>
      <li>= Вкусы: вино, ром, специи, иногда "мясные" ноты!</li>
    </ul>

    <h3>Бонусом китайские конфеты без сахара - но с кофе 🍬🇨🇳</h3>
    <img src="${o.blessed15}" />
    <h3>Задание 🎯</h3>
    <ol>
      <li><strong>Завари Unholy Water</li>
      <li><strong>Что там со вкусом:</strong> Специи? Дымность? Фрукты? Что-то про соус барбекю?</li>
      <li>Если бы ты создавала свой "провокационный" кофейный бленд, как бы ты его назвала?</li>
    </ol>
      `},{day:31,date:"2026-01-19",tanya_gift:"Ереванский кофе",zebra_gift:"Декаф Бэггинс",tanya_bonus:"",zebra_bonus:"",title:"День 25",tanya_message:`
    <h3>В этот раз армянский кофе вполне кофеиновый</h3>

    <p>Каждый армянин в год выпивает примерно 67 литров кофе — больше 3,5 килограммов зёрен ! Это больше, чем во многих странах-производителях! ☕💕</p>

    <p><strong>Сурдж (սուրճ) — армянское слово для кофе:</strong></p>
    <ul>
      <li>Только у жителей Эфиопии и Армении есть свои слова для обозначения кофе — эфиопы говорят "буна", армяне — "сурдж" </li>
    </ul>

    <p>По следам упоковки я запросила у нейронок сильных независимых армянских женщин (Кардашьяны не в счет, не тот вайб), и получила Евровиденье с национальной подачей:</p>
    <iframe width="100%" src="https://www.youtube.com/embed/YhfqLTT8mpo?si=DOOpB-nRY4Yb6ceM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <iframe width="100%" src="https://www.youtube.com/embed/hAYXDoZzAyE?si=iasi8WILAWdHtHoG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    <p>Но на Ютубе, кажется, сильнее любят свежего топлесс-чувака, вот этого (мне давно казалось, что все эти киногерои с претензией на брутальность какие-то недостаточно чумазые - а тут вот, как будто только вылез из-под трактора)</p>
    <iframe width="100%" src="https://www.youtube.com/embed/qHkZWLld-pw?si=-AeGW5qjGICSVlmx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`,zebra_message:`
      <p><strong>"Шииир! Бэггинс!.." 💍 Правда, на кофе с кофеином они пишут название гораздо заметнее.</p>
    <img src="${o.shir}" />
    <p><strong>Baggins Coffee</strong> — это реальная сеть кофеен из Санкт-Петербурга! 195 кофеен по всей России, большинство работает по франшизе.</p>
    <p><strong>Судебная битва с Толкином:</strong> В 2024 году американская компания <strong>Middle-Earth Enterprises LLC</strong> (владеет правами на "Властелина колец" и "Хоббита") попыталась запретить российской компании использовать название Baggins! Они считали, что это вводит в заблуждение, ведь Baggins - фамилия Фродо и Бильбо.</p>
    
    <p><strong>Результат:</strong> Российская компания <strong>выиграла</strong>! Палата по патентным спорам решила: слово "coffee" и изображение козла на логотипе исключают путаницу с хоббитами. Кофейни сохранили название ☕🎉</p>
    <img src="${o.tolkin}" />
    <h3>Толкин и Льюис</h3>
    <p><strong>J.R.R. Tolkien</strong> и <strong>C.S. Lewis</strong> (автор "Хроник Нарнии") были друзьями, состояли в литературном клубе <strong>Инклинги</strong> (Оксфорд, 1930-1960-е). Встречались в пабах, читали друг другу свои рукописи.</p>
    <p><strong>Толкин НЕ любил "Хроники Нарнии":</strong></p>
    <ul>
      <li>Был <strong>пуристом мифологии</strong> — каждый миф должен быть чистым, не смешанным</li>
      <li>В Нарнии Льюис смешал: римскую мифологию (фавны), греческую (кентавры), скандинавскую (гномы), христианство (Аслан = Христос)</li>
      <li>Толкин говорил: это как <strong>"кофе и чай в одной чашке"</strong> ☕🍵❌ Но дружить им это не сильно мешало.</li>
    </ul>
    <img src="${o.tolkin1}" />
    <h3>Задание</h3>
    <ol>
      <li>Завари Baggins Coffee.</li>
      <li><p>Погадай на книге через нейросеть. Зайди в умную нейронку и попроси выдать тебе два абзаца из книги Толкина, идущих подряд. </p>
      <p>После попроси истолковать их, как если бы они были результатом книжного гадания. Повтори, если результат так себе)</p></li>
      
      <li>Поделись результатами в чате.</li>
      <iframe width="100%" src="https://www.youtube.com/embed/R_EoM0opLGs?si=E6DR2GDYcW7H1eH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></ol>
    `},{day:32,date:"2026-01-20",tanya_gift:"Вятская винная мануфактура, Красное вино",zebra_gift:"Вятская винная мануфактура, Красное вино",tanya_bonus:"",zebra_bonus:"",title:"День 25",tanya_message:`
      <h3>Дрип-пакет "Красное вино" — Кения Киандру 🍷☕</h3>

<p><strong>Вятская кофейная мануфактура</strong> (Киров) — российский обжарщик из Кирова, работающий с зерном из Кении.</p>

<p><strong>Почему кенийский кофе особенный:</strong></p>
<ul>
  <li><strong>Высота:</strong> 1400-2200 м над уровнем моря → медленное созревание → сложный вкус</li>
  <li><strong>Вулканическая почва:</strong> богата минералами (фосфор, калий)</li>
  <li><strong>Двойная ферментация:</strong> уникальный кенийский метод обработки</li>
  <li><strong>Сорта:</strong> SL-28, SL-34 — выведены в 1930-х специально для Кении</li>
</ul>
<img src="${o.kenia}" />

<p><strong>Вкусовой профиль Кении:</strong> Яркая кислотность (как у вина!), черная смородина, помидор (!), грейпфрут, иногда — ноты красного вина.</p>

<p>>Кения = страна зебр и кофе 🦓☕ <strong>География совпадает:</strong></p>
<ul>
  <li>Кофейные плантации в центральной Кении (Киандру, Ньери, Киамбу) — это те же регионы, где живут зебры!</li>
  <li><strong>Высокогорные саванны:</strong> 1400-2200 м — идеально и для кофе, и для зебр</li>
  <li>Национальные парки соседствуют с кофейными фермами</li>
  <li>Фермеры иногда жалуются: зебры забредают на плантации и топчут кофейные деревья! 🦓😅</li>
</ul>
<img src="${o.zebra3}" />

<p><strong>Зебры Кении — три вида:</strong></p>
<ul>
  <li><strong>Равнинная зебра (Equus quagga)</strong> — самая распространённая, живёт в саваннах</li>
  <li><strong>Зебра Греви (Equus grevyi)</strong> — крупнейшая, узкие полоски, почти исчезла (только на севере Кении)</li>
  <li><strong>Горная зебра</strong> — в Кении практически не водится, только в ЮАР</li>
</ul>
<img src="${o.zebra2}" />

<p><strong>Зебры и кофе — экосистема:</strong></p>
<ul>
  <li>Кофейные фермы в Кении часто <strong>shade-grown</strong> (теневое выращивание) — деревья сажают под более высокими деревьями</li>
  <li>Это создаёт экологические коридоры для диких животных</li>
  <li>Зебры, антилопы, обезьяны мирно сосуществуют с кофе</li>
  <li><strong>Но!</strong> Слоны — проблема. Они ломают деревья и съедают кофейные ягоды (им нравится сладость!)</li>
</ul>
<img src="${o.zebra1}" />
<p><strong>Почему зебры крутые:</strong></p>

<ul>
  <li><strong>Нельзя приручить!</strong> В отличие от лошадей, зебры остаются дикими — попытки одомашнивания провалились</li>
  <li><strong>Социальные:</strong> Живут табунами, у них сложная иерархия и коммуникация</li>
  <li><strong>Символ Африки:</strong> Наравне со львом и слоном — икона африканской саванны</li>
</ul>


<p><strong>Фудпейринг:</strong></p>
<ul>
  <li>Кенийский кофе с винными нотами + <strong>тёмный шоколад (70%+)</strong> = бомба!</li>
  <li>Или с <strong>ягодным десертом</strong> (чизкейк с вишней, тирамису)</li>
  <li>Но шоколада в комплекте больше неееет, потому что шринкфляция, апокалипсис, НДС 100%</li>
</ul>

<h3>Задание 🎯</h3>
<ol>
  <li>Тут был слишком идиотский текст, я убрала его, а нового у меня неть 🦓☕ Но кофе пока с нами</li>
</ol>
      `,zebra_message:`
    <h3>Дрип-пакет "Красное вино" — Кения Киандру 🍷☕</h3>

<p><strong>Вятская кофейная мануфактура</strong> (Киров) — российский обжарщик из Кирова, работающий с зерном из Кении.</p>

<p><strong>Почему кенийский кофе особенный:</strong></p>
<ul>
  <li><strong>Высота:</strong> 1400-2200 м над уровнем моря → медленное созревание → сложный вкус</li>
  <li><strong>Вулканическая почва:</strong> богата минералами (фосфор, калий)</li>
  <li><strong>Двойная ферментация:</strong> уникальный кенийский метод обработки</li>
  <li><strong>Сорта:</strong> SL-28, SL-34 — выведены в 1930-х специально для Кении</li>
</ul>
<img src="${o.kenia}" />

<p><strong>Вкусовой профиль Кении:</strong> Яркая кислотность (как у вина!), черная смородина, помидор (!), грейпфрут, иногда — ноты красного вина.</p>

<p>>Кения = страна зебр и кофе 🦓☕ <strong>География совпадает:</strong></p>
<ul>
  <li>Кофейные плантации в центральной Кении (Киандру, Ньери, Киамбу) — это те же регионы, где живут зебры!</li>
  <li><strong>Высокогорные саванны:</strong> 1400-2200 м — идеально и для кофе, и для зебр</li>
  <li>Национальные парки соседствуют с кофейными фермами</li>
  <li>Фермеры иногда жалуются: зебры забредают на плантации и топчут кофейные деревья! 🦓😅</li>
</ul>
<img src="${o.zebra3}" />

<p><strong>Зебры Кении — три вида:</strong></p>
<ul>
  <li><strong>Равнинная зебра (Equus quagga)</strong> — самая распространённая, живёт в саваннах</li>
  <li><strong>Зебра Греви (Equus grevyi)</strong> — крупнейшая, узкие полоски, почти исчезла (только на севере Кении)</li>
  <li><strong>Горная зебра</strong> — в Кении практически не водится, только в ЮАР</li>
</ul>
<img src="${o.zebra2}" />

<p><strong>Зебры и кофе — экосистема:</strong></p>
<ul>
  <li>Кофейные фермы в Кении часто <strong>shade-grown</strong> (теневое выращивание) — деревья сажают под более высокими деревьями</li>
  <li>Это создаёт экологические коридоры для диких животных</li>
  <li>Зебры, антилопы, обезьяны мирно сосуществуют с кофе</li>
  <li><strong>Но!</strong> Слоны — проблема. Они ломают деревья и съедают кофейные ягоды (им нравится сладость!)</li>
</ul>
<img src="${o.zebra1}" />
<p><strong>Почему зебры крутые:</strong></p>

<ul>
  <li><strong>Нельзя приручить!</strong> В отличие от лошадей, зебры остаются дикими — попытки одомашнивания провалились</li>
  <li><strong>Социальные:</strong> Живут табунами, у них сложная иерархия и коммуникация</li>
  <li><strong>Символ Африки:</strong> Наравне со львом и слоном — икона африканской саванны</li>
</ul>


<p><strong>Фудпейринг:</strong></p>
<ul>
  <li>Кенийский кофе с винными нотами + <strong>тёмный шоколад (70%+)</strong> = бомба!</li>
  <li>Или с <strong>ягодным десертом</strong> (чизкейк с вишней, тирамису)</li>
  <li>Но шоколада в комплекте больше неееет, потому что шринкфляция, апокалипсис, НДС 100%</li>
</ul>

<h3>Задание 🎯</h3>
<ol>
  <li>Тут был слишком идиотский текст, я убрала его, а нового у меня неть 🦓☕ Но кофе пока с нами</li>
</ol>
      `}];function nb({currentDate:b,userName:C}){const[O,f]=Sl.useState(()=>Yp()),[A,x]=Sl.useState(null),Y=E=>{const N=La(E);if($a(N,b)&&(x(E),!O.has(E))){const Z=Xm(E);f(Z)}},P=()=>{x(null)},_=[...Array.from({length:38},(E,N)=>N+1)].sort((E,N)=>{const Z=La(E),yl=La(N),bl=mr(Z,b),zl=mr(yl,b),Ul=O.has(E),vl=O.has(N),Al=$a(Z,b),ol=$a(yl,b),_l=Al&&!Ul,Ql=ol&&!vl,wl=bl&&Ul,V=zl&&vl,Rl=!Al,Kl=!ol,Ft=Ul&&!bl&&Al,ft=vl&&!zl&&ol;return _l&&!Ql?-1:!_l&&Ql?1:_l&&Ql?E-N:wl&&!V?-1:!wl&&V?1:Rl&&!Kl?-1:!Rl&&Kl?1:Rl&&Kl||Ft&&ft?E-N:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:_.map(E=>{const N=La(E),Z=$a(N,b),yl=O.has(E),bl=mr(N,b);return d.jsx(Wm,{windowNumber:E,isActive:Z,isOpened:yl,isExactMatch:bl,onClick:()=>Y(E)},E)})}),A!==null&&(()=>{const E=eb[A-1],N=C==="Tanya"?E.tanya_message:C==="Zebra"?E.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(Fm,{windowNumber:A,message:N,onClose:P})})()]})}function ab(){const[b,C]=Sl.useState(!1),O=Sl.useRef(null),[f,A]=Sl.useState(!1);Sl.useEffect(()=>{const Y=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",Y),Y==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),A(!0))},[]),Sl.useEffect(()=>{if(!f)return;const Y=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),C(!0),A(!1),window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)};return window.addEventListener("pointerdown",Y,{once:!0}),window.addEventListener("keydown",Y,{once:!0}),()=>{window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)}},[f]),Sl.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",b,"ref=",O.current),!O.current)return;const Y=O.current;if(b)console.debug("[AudioControls] calling play()"),Y.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),A(!0))});else{console.debug("[AudioControls] calling pause()");try{Y.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[b]);const x=()=>{const Y=!b;console.debug("[AudioControls] toggleMusic ->",Y),C(Y),localStorage.setItem("musicEnabled",String(Y))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${b?"audio-active":""}`,onClick:x,title:"Toggle Christmas Music",children:[b?d.jsx(Bm,{size:20}):d.jsx(Hm,{size:20}),d.jsx(Om,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:O,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:Y=>console.error("[AudioControls] audio event: error",Y)})]})}function sb(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((b,C)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},C))})}const ob=()=>new Date;function rb(){const[b,C]=Sl.useState(()=>{const x=localStorage.getItem("adventCalendarUser");return x==="Tanya"||x==="Zebra"?x:(localStorage.clear(),null)}),[O,f]=Sl.useState(ob),A=x=>{localStorage.clear(),C(x),localStorage.setItem("adventCalendarUser",x)};return Sl.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);f(U)}catch(Y){console.error("Failed to fetch current date:",Y),f(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx($m,{}),d.jsx(sb,{}),d.jsx(ab,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(Lm,{userName:b,onUserSelect:A}),d.jsx(nb,{currentDate:O,userName:b})]})]})}bm.createRoot(document.getElementById("root")).render(d.jsx(Sl.StrictMode,{children:d.jsx(rb,{})}));
