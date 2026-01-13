(function(){const M=document.createElement("link").relList;if(M&&M.supports&&M.supports("modulepreload"))return;for(const A of document.querySelectorAll('link[rel="modulepreload"]'))p(A);new MutationObserver(A=>{for(const x of A)if(x.type==="childList")for(const Y of x.addedNodes)Y.tagName==="LINK"&&Y.rel==="modulepreload"&&p(Y)}).observe(document,{childList:!0,subtree:!0});function O(A){const x={};return A.integrity&&(x.integrity=A.integrity),A.referrerPolicy&&(x.referrerPolicy=A.referrerPolicy),A.crossOrigin==="use-credentials"?x.credentials="include":A.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function p(A){if(A.ep)return;A.ep=!0;const x=O(A);fetch(A.href,x)}})();var ur={exports:{}},we={};var bf;function um(){if(bf)return we;bf=1;var v=Symbol.for("react.transitional.element"),M=Symbol.for("react.fragment");function O(p,A,x){var Y=null;if(x!==void 0&&(Y=""+x),A.key!==void 0&&(Y=""+A.key),"key"in A){x={};for(var P in A)P!=="key"&&(x[P]=A[P])}else x=A;return A=x.ref,{$$typeof:v,type:p,key:Y,ref:A!==void 0?A:null,props:x}}return we.Fragment=M,we.jsx=O,we.jsxs=O,we}var Sf;function cm(){return Sf||(Sf=1,ur.exports=um()),ur.exports}var d=cm(),cr={exports:{}},L={};var _f;function gm(){if(_f)return L;_f=1;var v=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),x=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),V=Symbol.iterator;function yl(g){return g===null||typeof g!="object"?null:(g=V&&g[V]||g["@@iterator"],typeof g=="function"?g:null)}var vl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wl=Object.assign,Ul={};function bl(g,j,D){this.props=g,this.context=j,this.refs=Ul,this.updater=D||vl}bl.prototype.isReactComponent={},bl.prototype.setState=function(g,j){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,j,"setState")},bl.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function Al(){}Al.prototype=bl.prototype;function ol(g,j,D){this.props=g,this.context=j,this.refs=Ul,this.updater=D||vl}var zl=ol.prototype=new Al;zl.constructor=ol,wl(zl,bl.prototype),zl.isPureReactComponent=!0;var $l=Array.isArray;function Sl(){}var K={H:null,A:null,T:null,S:null},Hl=Object.prototype.hasOwnProperty;function kl(g,j,D){var H=D.ref;return{$$typeof:v,type:g,key:j,ref:H!==void 0?H:null,props:D}}function Ft(g,j){return kl(g.type,j,g.props)}function pt(g){return typeof g=="object"&&g!==null&&g.$$typeof===v}function Jl(g){var j={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(D){return j[D]})}var Ti=/\/+/g;function xt(g,j){return typeof g=="object"&&g!==null&&g.key!=null?Jl(""+g.key):j.toString(36)}function Tt(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(Sl,Sl):(g.status="pending",g.then(function(j){g.status==="pending"&&(g.status="fulfilled",g.value=j)},function(j){g.status==="pending"&&(g.status="rejected",g.reason=j)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function _(g,j,D,H,Q){var k=typeof g;(k==="undefined"||k==="boolean")&&(g=null);var el=!1;if(g===null)el=!0;else switch(k){case"bigint":case"string":case"number":el=!0;break;case"object":switch(g.$$typeof){case v:case M:el=!0;break;case C:return el=g._init,_(el(g._payload),j,D,H,Q)}}if(el)return Q=Q(g),el=H===""?"."+xt(g,0):H,$l(Q)?(D="",el!=null&&(D=el.replace(Ti,"$&/")+"/"),_(Q,j,D,"",function(Cn){return Cn})):Q!=null&&(pt(Q)&&(Q=Ft(Q,D+(Q.key==null||g&&g.key===Q.key?"":(""+Q.key).replace(Ti,"$&/")+"/")+el)),j.push(Q)),1;el=0;var Vl=H===""?".":H+":";if($l(g))for(var Ml=0;Ml<g.length;Ml++)H=g[Ml],k=Vl+xt(H,Ml),el+=_(H,j,D,k,Q);else if(Ml=yl(g),typeof Ml=="function")for(g=Ml.call(g),Ml=0;!(H=g.next()).done;)H=H.value,k=Vl+xt(H,Ml++),el+=_(H,j,D,k,Q);else if(k==="object"){if(typeof g.then=="function")return _(Tt(g),j,D,H,Q);throw j=String(g),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return el}function E(g,j,D){if(g==null)return g;var H=[],Q=0;return _(g,H,"","",function(k){return j.call(D,k,Q++)}),H}function G(g){if(g._status===-1){var j=g._result;j=j(),j.then(function(D){(g._status===0||g._status===-1)&&(g._status=1,g._result=D)},function(D){(g._status===0||g._status===-1)&&(g._status=2,g._result=D)}),g._status===-1&&(g._status=0,g._result=j)}if(g._status===1)return g._result.default;throw g._result}var rl=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},fl={map:E,forEach:function(g,j,D){E(g,function(){j.apply(this,arguments)},D)},count:function(g){var j=0;return E(g,function(){j++}),j},toArray:function(g){return E(g,function(j){return j})||[]},only:function(g){if(!pt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return L.Activity=N,L.Children=fl,L.Component=bl,L.Fragment=O,L.Profiler=A,L.PureComponent=ol,L.StrictMode=p,L.Suspense=U,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,L.__COMPILER_RUNTIME={__proto__:null,c:function(g){return K.H.useMemoCache(g)}},L.cache=function(g){return function(){return g.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(g,j,D){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var H=wl({},g.props),Q=g.key;if(j!=null)for(k in j.key!==void 0&&(Q=""+j.key),j)!Hl.call(j,k)||k==="key"||k==="__self"||k==="__source"||k==="ref"&&j.ref===void 0||(H[k]=j[k]);var k=arguments.length-2;if(k===1)H.children=D;else if(1<k){for(var el=Array(k),Vl=0;Vl<k;Vl++)el[Vl]=arguments[Vl+2];H.children=el}return kl(g.type,Q,H)},L.createContext=function(g){return g={$$typeof:Y,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:x,_context:g},g},L.createElement=function(g,j,D){var H,Q={},k=null;if(j!=null)for(H in j.key!==void 0&&(k=""+j.key),j)Hl.call(j,H)&&H!=="key"&&H!=="__self"&&H!=="__source"&&(Q[H]=j[H]);var el=arguments.length-2;if(el===1)Q.children=D;else if(1<el){for(var Vl=Array(el),Ml=0;Ml<el;Ml++)Vl[Ml]=arguments[Ml+2];Q.children=Vl}if(g&&g.defaultProps)for(H in el=g.defaultProps,el)Q[H]===void 0&&(Q[H]=el[H]);return kl(g,k,Q)},L.createRef=function(){return{current:null}},L.forwardRef=function(g){return{$$typeof:P,render:g}},L.isValidElement=pt,L.lazy=function(g){return{$$typeof:C,_payload:{_status:-1,_result:g},_init:G}},L.memo=function(g,j){return{$$typeof:z,type:g,compare:j===void 0?null:j}},L.startTransition=function(g){var j=K.T,D={};K.T=D;try{var H=g(),Q=K.S;Q!==null&&Q(D,H),typeof H=="object"&&H!==null&&typeof H.then=="function"&&H.then(Sl,rl)}catch(k){rl(k)}finally{j!==null&&D.types!==null&&(j.types=D.types),K.T=j}},L.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},L.use=function(g){return K.H.use(g)},L.useActionState=function(g,j,D){return K.H.useActionState(g,j,D)},L.useCallback=function(g,j){return K.H.useCallback(g,j)},L.useContext=function(g){return K.H.useContext(g)},L.useDebugValue=function(){},L.useDeferredValue=function(g,j){return K.H.useDeferredValue(g,j)},L.useEffect=function(g,j){return K.H.useEffect(g,j)},L.useEffectEvent=function(g){return K.H.useEffectEvent(g)},L.useId=function(){return K.H.useId()},L.useImperativeHandle=function(g,j,D){return K.H.useImperativeHandle(g,j,D)},L.useInsertionEffect=function(g,j){return K.H.useInsertionEffect(g,j)},L.useLayoutEffect=function(g,j){return K.H.useLayoutEffect(g,j)},L.useMemo=function(g,j){return K.H.useMemo(g,j)},L.useOptimistic=function(g,j){return K.H.useOptimistic(g,j)},L.useReducer=function(g,j,D){return K.H.useReducer(g,j,D)},L.useRef=function(g){return K.H.useRef(g)},L.useState=function(g){return K.H.useState(g)},L.useSyncExternalStore=function(g,j,D){return K.H.useSyncExternalStore(g,j,D)},L.useTransition=function(){return K.H.useTransition()},L.version="19.2.3",L}var wf;function hr(){return wf||(wf=1,cr.exports=gm()),cr.exports}var _l=hr(),gr={exports:{}},ze={},fr={exports:{}},pr={};var zf;function fm(){return zf||(zf=1,(function(v){function M(_,E){var G=_.length;_.push(E);l:for(;0<G;){var rl=G-1>>>1,fl=_[rl];if(0<A(fl,E))_[rl]=E,_[G]=fl,G=rl;else break l}}function O(_){return _.length===0?null:_[0]}function p(_){if(_.length===0)return null;var E=_[0],G=_.pop();if(G!==E){_[0]=G;l:for(var rl=0,fl=_.length,g=fl>>>1;rl<g;){var j=2*(rl+1)-1,D=_[j],H=j+1,Q=_[H];if(0>A(D,G))H<fl&&0>A(Q,D)?(_[rl]=Q,_[H]=G,rl=H):(_[rl]=D,_[j]=G,rl=j);else if(H<fl&&0>A(Q,G))_[rl]=Q,_[H]=G,rl=H;else break l}}return E}function A(_,E){var G=_.sortIndex-E.sortIndex;return G!==0?G:_.id-E.id}if(v.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var x=performance;v.unstable_now=function(){return x.now()}}else{var Y=Date,P=Y.now();v.unstable_now=function(){return Y.now()-P}}var U=[],z=[],C=1,N=null,V=3,yl=!1,vl=!1,wl=!1,Ul=!1,bl=typeof setTimeout=="function"?setTimeout:null,Al=typeof clearTimeout=="function"?clearTimeout:null,ol=typeof setImmediate<"u"?setImmediate:null;function zl(_){for(var E=O(z);E!==null;){if(E.callback===null)p(z);else if(E.startTime<=_)p(z),E.sortIndex=E.expirationTime,M(U,E);else break;E=O(z)}}function $l(_){if(wl=!1,zl(_),!vl)if(O(U)!==null)vl=!0,Sl||(Sl=!0,Jl());else{var E=O(z);E!==null&&Tt($l,E.startTime-_)}}var Sl=!1,K=-1,Hl=5,kl=-1;function Ft(){return Ul?!0:!(v.unstable_now()-kl<Hl)}function pt(){if(Ul=!1,Sl){var _=v.unstable_now();kl=_;var E=!0;try{l:{vl=!1,wl&&(wl=!1,Al(K),K=-1),yl=!0;var G=V;try{t:{for(zl(_),N=O(U);N!==null&&!(N.expirationTime>_&&Ft());){var rl=N.callback;if(typeof rl=="function"){N.callback=null,V=N.priorityLevel;var fl=rl(N.expirationTime<=_);if(_=v.unstable_now(),typeof fl=="function"){N.callback=fl,zl(_),E=!0;break t}N===O(U)&&p(U),zl(_)}else p(U);N=O(U)}if(N!==null)E=!0;else{var g=O(z);g!==null&&Tt($l,g.startTime-_),E=!1}}break l}finally{N=null,V=G,yl=!1}E=void 0}}finally{E?Jl():Sl=!1}}}var Jl;if(typeof ol=="function")Jl=function(){ol(pt)};else if(typeof MessageChannel<"u"){var Ti=new MessageChannel,xt=Ti.port2;Ti.port1.onmessage=pt,Jl=function(){xt.postMessage(null)}}else Jl=function(){bl(pt,0)};function Tt(_,E){K=bl(function(){_(v.unstable_now())},E)}v.unstable_IdlePriority=5,v.unstable_ImmediatePriority=1,v.unstable_LowPriority=4,v.unstable_NormalPriority=3,v.unstable_Profiling=null,v.unstable_UserBlockingPriority=2,v.unstable_cancelCallback=function(_){_.callback=null},v.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Hl=0<_?Math.floor(1e3/_):5},v.unstable_getCurrentPriorityLevel=function(){return V},v.unstable_next=function(_){switch(V){case 1:case 2:case 3:var E=3;break;default:E=V}var G=V;V=E;try{return _()}finally{V=G}},v.unstable_requestPaint=function(){Ul=!0},v.unstable_runWithPriority=function(_,E){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var G=V;V=_;try{return E()}finally{V=G}},v.unstable_scheduleCallback=function(_,E,G){var rl=v.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?rl+G:rl):G=rl,_){case 1:var fl=-1;break;case 2:fl=250;break;case 5:fl=1073741823;break;case 4:fl=1e4;break;default:fl=5e3}return fl=G+fl,_={id:C++,callback:E,priorityLevel:_,startTime:G,expirationTime:fl,sortIndex:-1},G>rl?(_.sortIndex=G,M(z,_),O(U)===null&&_===O(z)&&(wl?(Al(K),K=-1):wl=!0,Tt($l,G-rl))):(_.sortIndex=fl,M(U,_),vl||yl||(vl=!0,Sl||(Sl=!0,Jl()))),_},v.unstable_shouldYield=Ft,v.unstable_wrapCallback=function(_){var E=V;return function(){var G=V;V=E;try{return _.apply(this,arguments)}finally{V=G}}}})(pr)),pr}var Tf;function pm(){return Tf||(Tf=1,fr.exports=fm()),fr.exports}var dr={exports:{}},Zl={};var jf;function dm(){if(jf)return Zl;jf=1;var v=hr();function M(U){var z="https://react.dev/errors/"+U;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)z+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+U+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(){}var p={d:{f:O,r:function(){throw Error(M(522))},D:O,C:O,L:O,m:O,X:O,S:O,M:O},p:0,findDOMNode:null},A=Symbol.for("react.portal");function x(U,z,C){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:N==null?null:""+N,children:U,containerInfo:z,implementation:C}}var Y=v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function P(U,z){if(U==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,Zl.createPortal=function(U,z){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(M(299));return x(U,z,null,C)},Zl.flushSync=function(U){var z=Y.T,C=p.p;try{if(Y.T=null,p.p=2,U)return U()}finally{Y.T=z,p.p=C,p.d.f()}},Zl.preconnect=function(U,z){typeof U=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,p.d.C(U,z))},Zl.prefetchDNS=function(U){typeof U=="string"&&p.d.D(U)},Zl.preinit=function(U,z){if(typeof U=="string"&&z&&typeof z.as=="string"){var C=z.as,N=P(C,z.crossOrigin),V=typeof z.integrity=="string"?z.integrity:void 0,yl=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;C==="style"?p.d.S(U,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:N,integrity:V,fetchPriority:yl}):C==="script"&&p.d.X(U,{crossOrigin:N,integrity:V,fetchPriority:yl,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},Zl.preinitModule=function(U,z){if(typeof U=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var C=P(z.as,z.crossOrigin);p.d.M(U,{crossOrigin:C,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&p.d.M(U)},Zl.preload=function(U,z){if(typeof U=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var C=z.as,N=P(C,z.crossOrigin);p.d.L(U,C,{crossOrigin:N,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},Zl.preloadModule=function(U,z){if(typeof U=="string")if(z){var C=P(z.as,z.crossOrigin);p.d.m(U,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:C,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else p.d.m(U)},Zl.requestFormReset=function(U){p.d.r(U)},Zl.unstable_batchedUpdates=function(U,z){return U(z)},Zl.useFormState=function(U,z,C){return Y.H.useFormState(U,z,C)},Zl.useFormStatus=function(){return Y.H.useHostTransitionStatus()},Zl.version="19.2.3",Zl}var Af;function mm(){if(Af)return dr.exports;Af=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(M){console.error(M)}}return v(),dr.exports=dm(),dr.exports}var Mf;function hm(){if(Mf)return ze;Mf=1;var v=pm(),M=hr(),O=mm();function p(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function A(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function x(l){var t=l,i=l;if(l.alternate)for(;t.return;)t=t.return;else{l=t;do t=l,(t.flags&4098)!==0&&(i=t.return),l=t.return;while(l)}return t.tag===3?i:null}function Y(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function P(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function U(l){if(x(l)!==l)throw Error(p(188))}function z(l){var t=l.alternate;if(!t){if(t=x(l),t===null)throw Error(p(188));return t!==l?null:l}for(var i=l,n=t;;){var e=i.return;if(e===null)break;var a=e.alternate;if(a===null){if(n=e.return,n!==null){i=n;continue}break}if(e.child===a.child){for(a=e.child;a;){if(a===i)return U(e),l;if(a===n)return U(e),t;a=a.sibling}throw Error(p(188))}if(i.return!==n.return)i=e,n=a;else{for(var s=!1,o=e.child;o;){if(o===i){s=!0,i=e,n=a;break}if(o===n){s=!0,n=e,i=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===i){s=!0,i=a,n=e;break}if(o===n){s=!0,n=a,i=e;break}o=o.sibling}if(!s)throw Error(p(189))}}if(i.alternate!==n)throw Error(p(190))}if(i.tag!==3)throw Error(p(188));return i.stateNode.current===i?l:t}function C(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=C(l),t!==null)return t;l=l.sibling}return null}var N=Object.assign,V=Symbol.for("react.element"),yl=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),wl=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),bl=Symbol.for("react.profiler"),Al=Symbol.for("react.consumer"),ol=Symbol.for("react.context"),zl=Symbol.for("react.forward_ref"),$l=Symbol.for("react.suspense"),Sl=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Hl=Symbol.for("react.lazy"),kl=Symbol.for("react.activity"),Ft=Symbol.for("react.memo_cache_sentinel"),pt=Symbol.iterator;function Jl(l){return l===null||typeof l!="object"?null:(l=pt&&l[pt]||l["@@iterator"],typeof l=="function"?l:null)}var Ti=Symbol.for("react.client.reference");function xt(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Ti?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case wl:return"Fragment";case bl:return"Profiler";case Ul:return"StrictMode";case $l:return"Suspense";case Sl:return"SuspenseList";case kl:return"Activity"}if(typeof l=="object")switch(l.$$typeof){case vl:return"Portal";case ol:return l.displayName||"Context";case Al:return(l._context.displayName||"Context")+".Consumer";case zl:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case K:return t=l.displayName||null,t!==null?t:xt(l.type)||"Memo";case Hl:t=l._payload,l=l._init;try{return xt(l(t))}catch{}}return null}var Tt=Array.isArray,_=M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},rl=[],fl=-1;function g(l){return{current:l}}function j(l){0>fl||(l.current=rl[fl],rl[fl]=null,fl--)}function D(l,t){fl++,rl[fl]=l.current,l.current=t}var H=g(null),Q=g(null),k=g(null),el=g(null);function Vl(l,t){switch(D(k,t),D(Q,l),D(H,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Gg(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Gg(t),l=Lg(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}j(H),D(H,l)}function Ml(){j(H),j(Q),j(k)}function Cn(l){l.memoizedState!==null&&D(el,l);var t=H.current,i=Lg(t,l.type);t!==i&&(D(Q,l),D(H,i))}function Te(l){Q.current===l&&(j(H),j(Q)),el.current===l&&(j(el),ve._currentValue=G)}var $a,yr;function ji(l){if($a===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);$a=t&&t[1]||"",yr=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$a+l+yr}var Za=!1;function Va(l,t){if(!l||Za)return"";Za=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(b){var y=b}Reflect.construct(l,[],T)}else{try{T.call()}catch(b){y=b}l.call(T.prototype)}}else{try{throw Error()}catch(b){y=b}(T=l())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(b){if(b&&y&&typeof b.stack=="string")return[b.stack,y.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var e=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");e&&e.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=n.DetermineComponentFrameRoot(),s=a[0],o=a[1];if(s&&o){var u=s.split(`
`),h=o.split(`
`);for(e=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;e<h.length&&!h[e].includes("DetermineComponentFrameRoot");)e++;if(n===u.length||e===h.length)for(n=u.length-1,e=h.length-1;1<=n&&0<=e&&u[n]!==h[e];)e--;for(;1<=n&&0<=e;n--,e--)if(u[n]!==h[e]){if(n!==1||e!==1)do if(n--,e--,0>e||u[n]!==h[e]){var S=`
`+u[n].replace(" at new "," at ");return l.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",l.displayName)),S}while(1<=n&&0<=e);break}}}finally{Za=!1,Error.prepareStackTrace=i}return(i=l?l.displayName||l.name:"")?ji(i):""}function qf(l,t){switch(l.tag){case 26:case 27:case 5:return ji(l.type);case 16:return ji("Lazy");case 13:return l.child!==t&&t!==null?ji("Suspense Fallback"):ji("Suspense");case 19:return ji("SuspenseList");case 0:case 15:return Va(l.type,!1);case 11:return Va(l.type.render,!1);case 1:return Va(l.type,!0);case 31:return ji("Activity");default:return""}}function vr(l){try{var t="",i=null;do t+=qf(l,i),i=l,l=l.return;while(l);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ka=Object.prototype.hasOwnProperty,ka=v.unstable_scheduleCallback,Ja=v.unstable_cancelCallback,Gf=v.unstable_shouldYield,Lf=v.unstable_requestPaint,nt=v.unstable_now,Qf=v.unstable_getCurrentPriorityLevel,br=v.unstable_ImmediatePriority,Sr=v.unstable_UserBlockingPriority,je=v.unstable_NormalPriority,$f=v.unstable_LowPriority,_r=v.unstable_IdlePriority,Zf=v.log,Vf=v.unstable_setDisableYieldValue,Dn=null,et=null;function It(l){if(typeof Zf=="function"&&Vf(l),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(Dn,l)}catch{}}var at=Math.clz32?Math.clz32:Jf,Kf=Math.log,kf=Math.LN2;function Jf(l){return l>>>=0,l===0?32:31-(Kf(l)/kf|0)|0}var Ae=256,Me=262144,Ee=4194304;function Ai(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&261888;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function Ce(l,t,i){var n=l.pendingLanes;if(n===0)return 0;var e=0,a=l.suspendedLanes,s=l.pingedLanes;l=l.warmLanes;var o=n&134217727;return o!==0?(n=o&~a,n!==0?e=Ai(n):(s&=o,s!==0?e=Ai(s):i||(i=o&~l,i!==0&&(e=Ai(i))))):(o=n&~a,o!==0?e=Ai(o):s!==0?e=Ai(s):i||(i=n&~l,i!==0&&(e=Ai(i)))),e===0?0:t!==0&&t!==e&&(t&a)===0&&(a=e&-e,i=t&-t,a>=i||a===32&&(i&4194048)!==0)?t:e}function On(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function Wf(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(){var l=Ee;return Ee<<=1,(Ee&62914560)===0&&(Ee=4194304),l}function Wa(l){for(var t=[],i=0;31>i;i++)t.push(l);return t}function xn(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function Ff(l,t,i,n,e,a){var s=l.pendingLanes;l.pendingLanes=i,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=i,l.entangledLanes&=i,l.errorRecoveryDisabledLanes&=i,l.shellSuspendCounter=0;var o=l.entanglements,u=l.expirationTimes,h=l.hiddenUpdates;for(i=s&~i;0<i;){var S=31-at(i),T=1<<S;o[S]=0,u[S]=-1;var y=h[S];if(y!==null)for(h[S]=null,S=0;S<y.length;S++){var b=y[S];b!==null&&(b.lane&=-536870913)}i&=~T}n!==0&&zr(l,n,0),a!==0&&e===0&&l.tag!==0&&(l.suspendedLanes|=a&~(s&~t))}function zr(l,t,i){l.pendingLanes|=t,l.suspendedLanes&=~t;var n=31-at(t);l.entangledLanes|=t,l.entanglements[n]=l.entanglements[n]|1073741824|i&261930}function Tr(l,t){var i=l.entangledLanes|=t;for(l=l.entanglements;i;){var n=31-at(i),e=1<<n;e&t|l[n]&t&&(l[n]|=t),i&=~e}}function jr(l,t){var i=t&-t;return i=(i&42)!==0?1:Fa(i),(i&(l.suspendedLanes|t))!==0?0:i}function Fa(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function Ia(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function Ar(){var l=E.p;return l!==0?l:(l=window.event,l===void 0?32:ff(l.type))}function Mr(l,t){var i=E.p;try{return E.p=l,t()}finally{E.p=i}}var Pt=Math.random().toString(36).slice(2),Xl="__reactFiber$"+Pt,Wl="__reactProps$"+Pt,$i="__reactContainer$"+Pt,Pa="__reactEvents$"+Pt,If="__reactListeners$"+Pt,Pf="__reactHandles$"+Pt,Er="__reactResources$"+Pt,Nn="__reactMarker$"+Pt;function ls(l){delete l[Xl],delete l[Wl],delete l[Pa],delete l[If],delete l[Pf]}function Zi(l){var t=l[Xl];if(t)return t;for(var i=l.parentNode;i;){if(t=i[$i]||i[Xl]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(l=Jg(l);l!==null;){if(i=l[Xl])return i;l=Jg(l)}return t}l=i,i=l.parentNode}return null}function Vi(l){if(l=l[Xl]||l[$i]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Un(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(p(33))}function Ki(l){var t=l[Er];return t||(t=l[Er]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Rl(l){l[Nn]=!0}var Cr=new Set,Dr={};function Mi(l,t){ki(l,t),ki(l+"Capture",t)}function ki(l,t){for(Dr[l]=t,l=0;l<t.length;l++)Cr.add(t[l])}var lp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Or={},xr={};function tp(l){return Ka.call(xr,l)?!0:Ka.call(Or,l)?!1:lp.test(l)?xr[l]=!0:(Or[l]=!0,!1)}function De(l,t,i){if(tp(t))if(i===null)l.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,""+i)}}function Oe(l,t,i){if(i===null)l.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,""+i)}}function Nt(l,t,i,n){if(n===null)l.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(i);return}l.setAttributeNS(t,i,""+n)}}function dt(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function Nr(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ip(l,t,i){var n=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var e=n.get,a=n.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return e.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(l,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function ts(l){if(!l._valueTracker){var t=Nr(l)?"checked":"value";l._valueTracker=ip(l,t,""+l[t])}}function Ur(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return l&&(n=Nr(l)?l.checked?"true":"false":l.value),l=n,l!==i?(t.setValue(l),!0):!1}function xe(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}var np=/[\n"\\]/g;function mt(l){return l.replace(np,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function is(l,t,i,n,e,a,s,o){l.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?l.type=s:l.removeAttribute("type"),t!=null?s==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+dt(t)):l.value!==""+dt(t)&&(l.value=""+dt(t)):s!=="submit"&&s!=="reset"||l.removeAttribute("value"),t!=null?ns(l,s,dt(t)):i!=null?ns(l,s,dt(i)):n!=null&&l.removeAttribute("value"),e==null&&a!=null&&(l.defaultChecked=!!a),e!=null&&(l.checked=e&&typeof e!="function"&&typeof e!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?l.name=""+dt(o):l.removeAttribute("name")}function Br(l,t,i,n,e,a,s,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(l.type=a),t!=null||i!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){ts(l);return}i=i!=null?""+dt(i):"",t=t!=null?""+dt(t):i,o||t===l.value||(l.value=t),l.defaultValue=t}n=n??e,n=typeof n!="function"&&typeof n!="symbol"&&!!n,l.checked=o?l.checked:!!n,l.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(l.name=s),ts(l)}function ns(l,t,i){t==="number"&&xe(l.ownerDocument)===l||l.defaultValue===""+i||(l.defaultValue=""+i)}function Ji(l,t,i,n){if(l=l.options,t){t={};for(var e=0;e<i.length;e++)t["$"+i[e]]=!0;for(i=0;i<l.length;i++)e=t.hasOwnProperty("$"+l[i].value),l[i].selected!==e&&(l[i].selected=e),e&&n&&(l[i].defaultSelected=!0)}else{for(i=""+dt(i),t=null,e=0;e<l.length;e++){if(l[e].value===i){l[e].selected=!0,n&&(l[e].defaultSelected=!0);return}t!==null||l[e].disabled||(t=l[e])}t!==null&&(t.selected=!0)}}function Hr(l,t,i){if(t!=null&&(t=""+dt(t),t!==l.value&&(l.value=t),i==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=i!=null?""+dt(i):""}function Rr(l,t,i,n){if(t==null){if(n!=null){if(i!=null)throw Error(p(92));if(Tt(n)){if(1<n.length)throw Error(p(93));n=n[0]}i=n}i==null&&(i=""),t=i}i=dt(t),l.defaultValue=i,n=l.textContent,n===i&&n!==""&&n!==null&&(l.value=n),ts(l)}function Wi(l,t){if(t){var i=l.firstChild;if(i&&i===l.lastChild&&i.nodeType===3){i.nodeValue=t;return}}l.textContent=t}var ep=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yr(l,t,i){var n=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?n?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":n?l.setProperty(t,i):typeof i!="number"||i===0||ep.has(t)?t==="float"?l.cssFloat=i:l[t]=(""+i).trim():l[t]=i+"px"}function Xr(l,t,i){if(t!=null&&typeof t!="object")throw Error(p(62));if(l=l.style,i!=null){for(var n in i)!i.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?l.setProperty(n,""):n==="float"?l.cssFloat="":l[n]="");for(var e in t)n=t[e],t.hasOwnProperty(e)&&i[e]!==n&&Yr(l,e,n)}else for(var a in t)t.hasOwnProperty(a)&&Yr(l,a,t[a])}function es(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ne(l){return sp.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function Ut(){}var as=null;function ss(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var Fi=null,Ii=null;function qr(l){var t=Vi(l);if(t&&(l=t.stateNode)){var i=l[Wl]||null;l:switch(l=t.stateNode,t.type){case"input":if(is(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=l;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==l&&n.form===l.form){var e=n[Wl]||null;if(!e)throw Error(p(90));is(n,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name)}}for(t=0;t<i.length;t++)n=i[t],n.form===l.form&&Ur(n)}break l;case"textarea":Hr(l,i.value,i.defaultValue);break l;case"select":t=i.value,t!=null&&Ji(l,!!i.multiple,t,!1)}}}var os=!1;function Gr(l,t,i){if(os)return l(t,i);os=!0;try{var n=l(t);return n}finally{if(os=!1,(Fi!==null||Ii!==null)&&(Sa(),Fi&&(t=Fi,l=Ii,Ii=Fi=null,qr(t),l)))for(t=0;t<l.length;t++)qr(l[t])}}function Bn(l,t){var i=l.stateNode;if(i===null)return null;var n=i[Wl]||null;if(n===null)return null;i=n[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(l=l.type,n=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!n;break l;default:l=!1}if(l)return null;if(i&&typeof i!="function")throw Error(p(231,t,typeof i));return i}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rs=!1;if(Bt)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){rs=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{rs=!1}var li=null,us=null,Ue=null;function Lr(){if(Ue)return Ue;var l,t=us,i=t.length,n,e="value"in li?li.value:li.textContent,a=e.length;for(l=0;l<i&&t[l]===e[l];l++);var s=i-l;for(n=1;n<=s&&t[i-n]===e[a-n];n++);return Ue=e.slice(l,1<n?1-n:void 0)}function Be(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function He(){return!0}function Qr(){return!1}function Fl(l){function t(i,n,e,a,s){this._reactName=i,this._targetInst=e,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in l)l.hasOwnProperty(o)&&(i=l[o],this[o]=i?i(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?He:Qr,this.isPropagationStopped=Qr,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=He)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=He)},persist:function(){},isPersistent:He}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Re=Fl(Ei),Rn=N({},Ei,{view:0,detail:0}),op=Fl(Rn),cs,gs,Yn,Ye=N({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ps,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Yn&&(Yn&&l.type==="mousemove"?(cs=l.screenX-Yn.screenX,gs=l.screenY-Yn.screenY):gs=cs=0,Yn=l),cs)},movementY:function(l){return"movementY"in l?l.movementY:gs}}),$r=Fl(Ye),rp=N({},Ye,{dataTransfer:0}),up=Fl(rp),cp=N({},Rn,{relatedTarget:0}),fs=Fl(cp),gp=N({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=Fl(gp),pp=N({},Ei,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),dp=Fl(pp),mp=N({},Ei,{data:0}),Zr=Fl(mp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bp(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=vp[l])?!!t[l]:!1}function ps(){return bp}var Sp=N({},Rn,{key:function(l){if(l.key){var t=hp[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=Be(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?yp[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ps,charCode:function(l){return l.type==="keypress"?Be(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?Be(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),_p=Fl(Sp),wp=N({},Ye,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vr=Fl(wp),zp=N({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ps}),Tp=Fl(zp),jp=N({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ap=Fl(jp),Mp=N({},Ye,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Ep=Fl(Mp),Cp=N({},Ei,{newState:0,oldState:0}),Dp=Fl(Cp),Op=[9,13,27,32],ds=Bt&&"CompositionEvent"in window,Xn=null;Bt&&"documentMode"in document&&(Xn=document.documentMode);var xp=Bt&&"TextEvent"in window&&!Xn,Kr=Bt&&(!ds||Xn&&8<Xn&&11>=Xn),kr=" ",Jr=!1;function Wr(l,t){switch(l){case"keyup":return Op.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fr(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var Pi=!1;function Np(l,t){switch(l){case"compositionend":return Fr(t);case"keypress":return t.which!==32?null:(Jr=!0,kr);case"textInput":return l=t.data,l===kr&&Jr?null:l;default:return null}}function Up(l,t){if(Pi)return l==="compositionend"||!ds&&Wr(l,t)?(l=Lr(),Ue=us=li=null,Pi=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kr&&t.locale!=="ko"?null:t.data;default:return null}}var Bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ir(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!Bp[l.type]:t==="textarea"}function Pr(l,t,i,n){Fi?Ii?Ii.push(n):Ii=[n]:Fi=n,t=Ma(t,"onChange"),0<t.length&&(i=new Re("onChange","change",null,i,n),l.push({event:i,listeners:t}))}var qn=null,Gn=null;function Hp(l){Bg(l,0)}function Xe(l){var t=Un(l);if(Ur(t))return l}function lu(l,t){if(l==="change")return t}var tu=!1;if(Bt){var ms;if(Bt){var hs="oninput"in document;if(!hs){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),hs=typeof iu.oninput=="function"}ms=hs}else ms=!1;tu=ms&&(!document.documentMode||9<document.documentMode)}function nu(){qn&&(qn.detachEvent("onpropertychange",eu),Gn=qn=null)}function eu(l){if(l.propertyName==="value"&&Xe(Gn)){var t=[];Pr(t,Gn,l,ss(l)),Gr(Hp,t)}}function Rp(l,t,i){l==="focusin"?(nu(),qn=t,Gn=i,qn.attachEvent("onpropertychange",eu)):l==="focusout"&&nu()}function Yp(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Xe(Gn)}function Xp(l,t){if(l==="click")return Xe(t)}function qp(l,t){if(l==="input"||l==="change")return Xe(t)}function Gp(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var st=typeof Object.is=="function"?Object.is:Gp;function Ln(l,t){if(st(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var i=Object.keys(l),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var e=i[n];if(!Ka.call(t,e)||!st(l[e],t[e]))return!1}return!0}function au(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function su(l,t){var i=au(l);l=0;for(var n;i;){if(i.nodeType===3){if(n=l+i.textContent.length,l<=t&&n>=t)return{node:i,offset:t-l};l=n}l:{for(;i;){if(i.nextSibling){i=i.nextSibling;break l}i=i.parentNode}i=void 0}i=au(i)}}function ou(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?ou(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function ru(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=xe(l.document);t instanceof l.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)l=t.contentWindow;else break;t=xe(l.document)}return t}function ys(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var Lp=Bt&&"documentMode"in document&&11>=document.documentMode,ln=null,vs=null,Qn=null,bs=!1;function uu(l,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;bs||ln==null||ln!==xe(n)||(n=ln,"selectionStart"in n&&ys(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qn&&Ln(Qn,n)||(Qn=n,n=Ma(vs,"onSelect"),0<n.length&&(t=new Re("onSelect","select",null,t,i),l.push({event:t,listeners:n}),t.target=ln)))}function Ci(l,t){var i={};return i[l.toLowerCase()]=t.toLowerCase(),i["Webkit"+l]="webkit"+t,i["Moz"+l]="moz"+t,i}var tn={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionrun:Ci("Transition","TransitionRun"),transitionstart:Ci("Transition","TransitionStart"),transitioncancel:Ci("Transition","TransitionCancel"),transitionend:Ci("Transition","TransitionEnd")},Ss={},cu={};Bt&&(cu=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Di(l){if(Ss[l])return Ss[l];if(!tn[l])return l;var t=tn[l],i;for(i in t)if(t.hasOwnProperty(i)&&i in cu)return Ss[l]=t[i];return l}var gu=Di("animationend"),fu=Di("animationiteration"),pu=Di("animationstart"),Qp=Di("transitionrun"),$p=Di("transitionstart"),Zp=Di("transitioncancel"),du=Di("transitionend"),mu=new Map,_s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_s.push("scrollEnd");function jt(l,t){mu.set(l,t),Mi(t,[l])}var qe=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},ht=[],nn=0,ws=0;function Ge(){for(var l=nn,t=ws=nn=0;t<l;){var i=ht[t];ht[t++]=null;var n=ht[t];ht[t++]=null;var e=ht[t];ht[t++]=null;var a=ht[t];if(ht[t++]=null,n!==null&&e!==null){var s=n.pending;s===null?e.next=e:(e.next=s.next,s.next=e),n.pending=e}a!==0&&hu(i,e,a)}}function Le(l,t,i,n){ht[nn++]=l,ht[nn++]=t,ht[nn++]=i,ht[nn++]=n,ws|=n,l.lanes|=n,l=l.alternate,l!==null&&(l.lanes|=n)}function zs(l,t,i,n){return Le(l,t,i,n),Qe(l)}function Oi(l,t){return Le(l,null,null,t),Qe(l)}function hu(l,t,i){l.lanes|=i;var n=l.alternate;n!==null&&(n.lanes|=i);for(var e=!1,a=l.return;a!==null;)a.childLanes|=i,n=a.alternate,n!==null&&(n.childLanes|=i),a.tag===22&&(l=a.stateNode,l===null||l._visibility&1||(e=!0)),l=a,a=a.return;return l.tag===3?(a=l.stateNode,e&&t!==null&&(e=31-at(i),l=a.hiddenUpdates,n=l[e],n===null?l[e]=[t]:n.push(t),t.lane=i|536870912),a):null}function Qe(l){if(50<ge)throw ge=0,No=null,Error(p(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var en={};function Vp(l,t,i,n){this.tag=l,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(l,t,i,n){return new Vp(l,t,i,n)}function Ts(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Ht(l,t){var i=l.alternate;return i===null?(i=ot(l.tag,t,l.key,l.mode),i.elementType=l.elementType,i.type=l.type,i.stateNode=l.stateNode,i.alternate=l,l.alternate=i):(i.pendingProps=t,i.type=l.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=l.flags&65011712,i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,t=l.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=l.sibling,i.index=l.index,i.ref=l.ref,i.refCleanup=l.refCleanup,i}function yu(l,t){l.flags&=65011714;var i=l.alternate;return i===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,t=i.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function $e(l,t,i,n,e,a){var s=0;if(n=l,typeof l=="function")Ts(l)&&(s=1);else if(typeof l=="string")s=Fd(l,i,H.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(l){case kl:return l=ot(31,i,t,e),l.elementType=kl,l.lanes=a,l;case wl:return xi(i.children,e,a,t);case Ul:s=8,e|=24;break;case bl:return l=ot(12,i,t,e|2),l.elementType=bl,l.lanes=a,l;case $l:return l=ot(13,i,t,e),l.elementType=$l,l.lanes=a,l;case Sl:return l=ot(19,i,t,e),l.elementType=Sl,l.lanes=a,l;default:if(typeof l=="object"&&l!==null)switch(l.$$typeof){case ol:s=10;break l;case Al:s=9;break l;case zl:s=11;break l;case K:s=14;break l;case Hl:s=16,n=null;break l}s=29,i=Error(p(130,l===null?"null":typeof l,"")),n=null}return t=ot(s,i,t,e),t.elementType=l,t.type=n,t.lanes=a,t}function xi(l,t,i,n){return l=ot(7,l,n,t),l.lanes=i,l}function js(l,t,i){return l=ot(6,l,null,t),l.lanes=i,l}function vu(l){var t=ot(18,null,null,0);return t.stateNode=l,t}function As(l,t,i){return t=ot(4,l.children!==null?l.children:[],l.key,t),t.lanes=i,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var bu=new WeakMap;function yt(l,t){if(typeof l=="object"&&l!==null){var i=bu.get(l);return i!==void 0?i:(t={value:l,source:t,stack:vr(t)},bu.set(l,t),t)}return{value:l,source:t,stack:vr(t)}}var an=[],sn=0,Ze=null,$n=0,vt=[],bt=0,ti=null,Et=1,Ct="";function Rt(l,t){an[sn++]=$n,an[sn++]=Ze,Ze=l,$n=t}function Su(l,t,i){vt[bt++]=Et,vt[bt++]=Ct,vt[bt++]=ti,ti=l;var n=Et;l=Ct;var e=32-at(n)-1;n&=~(1<<e),i+=1;var a=32-at(t)+e;if(30<a){var s=e-e%5;a=(n&(1<<s)-1).toString(32),n>>=s,e-=s,Et=1<<32-at(t)+e|i<<e|n,Ct=a+l}else Et=1<<a|i<<e|n,Ct=l}function Ms(l){l.return!==null&&(Rt(l,1),Su(l,1,0))}function Es(l){for(;l===Ze;)Ze=an[--sn],an[sn]=null,$n=an[--sn],an[sn]=null;for(;l===ti;)ti=vt[--bt],vt[bt]=null,Ct=vt[--bt],vt[bt]=null,Et=vt[--bt],vt[bt]=null}function _u(l,t){vt[bt++]=Et,vt[bt++]=Ct,vt[bt++]=ti,Et=t.id,Ct=t.overflow,ti=l}var ql=null,dl=null,ll=!1,ii=null,St=!1,Cs=Error(p(519));function ni(l){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zn(yt(t,l)),Cs}function wu(l){var t=l.stateNode,i=l.type,n=l.memoizedProps;switch(t[Xl]=l,t[Wl]=n,i){case"dialog":W("cancel",t),W("close",t);break;case"iframe":case"object":case"embed":W("load",t);break;case"video":case"audio":for(i=0;i<pe.length;i++)W(pe[i],t);break;case"source":W("error",t);break;case"img":case"image":case"link":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"input":W("invalid",t),Br(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":W("invalid",t);break;case"textarea":W("invalid",t),Rr(t,n.value,n.defaultValue,n.children)}i=n.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||n.suppressHydrationWarning===!0||Xg(t.textContent,i)?(n.popover!=null&&(W("beforetoggle",t),W("toggle",t)),n.onScroll!=null&&W("scroll",t),n.onScrollEnd!=null&&W("scrollend",t),n.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ni(l,!0)}function zu(l){for(ql=l.return;ql;)switch(ql.tag){case 5:case 31:case 13:St=!1;return;case 27:case 3:St=!0;return;default:ql=ql.return}}function on(l){if(l!==ql)return!1;if(!ll)return zu(l),ll=!0,!1;var t=l.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=l.type,i=!(i!=="form"&&i!=="button")||ko(l.type,l.memoizedProps)),i=!i),i&&dl&&ni(l),zu(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));dl=kg(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(317));dl=kg(l)}else t===27?(t=dl,yi(l.type)?(l=Po,Po=null,dl=l):dl=t):dl=ql?wt(l.stateNode.nextSibling):null;return!0}function Ni(){dl=ql=null,ll=!1}function Ds(){var l=ii;return l!==null&&(tt===null?tt=l:tt.push.apply(tt,l),ii=null),l}function Zn(l){ii===null?ii=[l]:ii.push(l)}var Os=g(null),Ui=null,Yt=null;function ei(l,t,i){D(Os,t._currentValue),t._currentValue=i}function Xt(l){l._currentValue=Os.current,j(Os)}function xs(l,t,i){for(;l!==null;){var n=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),l===i)break;l=l.return}}function Ns(l,t,i,n){var e=l.child;for(e!==null&&(e.return=l);e!==null;){var a=e.dependencies;if(a!==null){var s=e.child;a=a.firstContext;l:for(;a!==null;){var o=a;a=e;for(var u=0;u<t.length;u++)if(o.context===t[u]){a.lanes|=i,o=a.alternate,o!==null&&(o.lanes|=i),xs(a.return,i,l),n||(s=null);break l}a=o.next}}else if(e.tag===18){if(s=e.return,s===null)throw Error(p(341));s.lanes|=i,a=s.alternate,a!==null&&(a.lanes|=i),xs(s,i,l),s=null}else s=e.child;if(s!==null)s.return=e;else for(s=e;s!==null;){if(s===l){s=null;break}if(e=s.sibling,e!==null){e.return=s.return,s=e;break}s=s.return}e=s}}function rn(l,t,i,n){l=null;for(var e=t,a=!1;e!==null;){if(!a){if((e.flags&524288)!==0)a=!0;else if((e.flags&262144)!==0)break}if(e.tag===10){var s=e.alternate;if(s===null)throw Error(p(387));if(s=s.memoizedProps,s!==null){var o=e.type;st(e.pendingProps.value,s.value)||(l!==null?l.push(o):l=[o])}}else if(e===el.current){if(s=e.alternate,s===null)throw Error(p(387));s.memoizedState.memoizedState!==e.memoizedState.memoizedState&&(l!==null?l.push(ve):l=[ve])}e=e.return}l!==null&&Ns(t,l,i,n),t.flags|=262144}function Ve(l){for(l=l.firstContext;l!==null;){if(!st(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Bi(l){Ui=l,Yt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function Gl(l){return Tu(Ui,l)}function Ke(l,t){return Ui===null&&Bi(l),Tu(l,t)}function Tu(l,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},Yt===null){if(l===null)throw Error(p(308));Yt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else Yt=Yt.next=t;return i}var Kp=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(i,n){l.push(n)}};this.abort=function(){t.aborted=!0,l.forEach(function(i){return i()})}},kp=v.unstable_scheduleCallback,Jp=v.unstable_NormalPriority,Dl={$$typeof:ol,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Us(){return{controller:new Kp,data:new Map,refCount:0}}function Vn(l){l.refCount--,l.refCount===0&&kp(Jp,function(){l.controller.abort()})}var Kn=null,Bs=0,un=0,cn=null;function Wp(l,t){if(Kn===null){var i=Kn=[];Bs=0,un=Xo(),cn={status:"pending",value:void 0,then:function(n){i.push(n)}}}return Bs++,t.then(ju,ju),t}function ju(){if(--Bs===0&&Kn!==null){cn!==null&&(cn.status="fulfilled");var l=Kn;Kn=null,un=0,cn=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function Fp(l,t){var i=[],n={status:"pending",value:null,reason:null,then:function(e){i.push(e)}};return l.then(function(){n.status="fulfilled",n.value=t;for(var e=0;e<i.length;e++)(0,i[e])(t)},function(e){for(n.status="rejected",n.reason=e,e=0;e<i.length;e++)(0,i[e])(void 0)}),n}var Au=_.S;_.S=function(l,t){ug=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Wp(l,t),Au!==null&&Au(l,t)};var Hi=g(null);function Hs(){var l=Hi.current;return l!==null?l:pl.pooledCache}function ke(l,t){t===null?D(Hi,Hi.current):D(Hi,t.pool)}function Mu(){var l=Hs();return l===null?null:{parent:Dl._currentValue,pool:l}}var gn=Error(p(460)),Rs=Error(p(474)),Je=Error(p(542)),We={then:function(){}};function Eu(l){return l=l.status,l==="fulfilled"||l==="rejected"}function Cu(l,t,i){switch(i=l[i],i===void 0?l.push(t):i!==t&&(t.then(Ut,Ut),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ou(l),l;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(l=pl,l!==null&&100<l.shellSuspendCounter)throw Error(p(482));l=t,l.status="pending",l.then(function(n){if(t.status==="pending"){var e=t;e.status="fulfilled",e.value=n}},function(n){if(t.status==="pending"){var e=t;e.status="rejected",e.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,Ou(l),l}throw Yi=t,gn}}function Ri(l){try{var t=l._init;return t(l._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Yi=i,gn):i}}var Yi=null;function Du(){if(Yi===null)throw Error(p(459));var l=Yi;return Yi=null,l}function Ou(l){if(l===gn||l===Je)throw Error(p(483))}var fn=null,kn=0;function Fe(l){var t=kn;return kn+=1,fn===null&&(fn=[]),Cu(fn,l,t)}function Jn(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function Ie(l,t){throw t.$$typeof===V?Error(p(525)):(l=Object.prototype.toString.call(t),Error(p(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function xu(l){function t(f,c){if(l){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function i(f,c){if(!l)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function n(f){for(var c=new Map;f!==null;)f.key!==null?c.set(f.key,f):c.set(f.index,f),f=f.sibling;return c}function e(f,c){return f=Ht(f,c),f.index=0,f.sibling=null,f}function a(f,c,m){return f.index=m,l?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=67108866,c):m):(f.flags|=67108866,c)):(f.flags|=1048576,c)}function s(f){return l&&f.alternate===null&&(f.flags|=67108866),f}function o(f,c,m,w){return c===null||c.tag!==6?(c=js(m,f.mode,w),c.return=f,c):(c=e(c,m),c.return=f,c)}function u(f,c,m,w){var X=m.type;return X===wl?S(f,c,m.props.children,w,m.key):c!==null&&(c.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Hl&&Ri(X)===c.type)?(c=e(c,m.props),Jn(c,m),c.return=f,c):(c=$e(m.type,m.key,m.props,null,f.mode,w),Jn(c,m),c.return=f,c)}function h(f,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=As(m,f.mode,w),c.return=f,c):(c=e(c,m.children||[]),c.return=f,c)}function S(f,c,m,w,X){return c===null||c.tag!==7?(c=xi(m,f.mode,w,X),c.return=f,c):(c=e(c,m),c.return=f,c)}function T(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=js(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yl:return m=$e(c.type,c.key,c.props,null,f.mode,m),Jn(m,c),m.return=f,m;case vl:return c=As(c,f.mode,m),c.return=f,c;case Hl:return c=Ri(c),T(f,c,m)}if(Tt(c)||Jl(c))return c=xi(c,f.mode,m,null),c.return=f,c;if(typeof c.then=="function")return T(f,Fe(c),m);if(c.$$typeof===ol)return T(f,Ke(f,c),m);Ie(f,c)}return null}function y(f,c,m,w){var X=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return X!==null?null:o(f,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:return m.key===X?u(f,c,m,w):null;case vl:return m.key===X?h(f,c,m,w):null;case Hl:return m=Ri(m),y(f,c,m,w)}if(Tt(m)||Jl(m))return X!==null?null:S(f,c,m,w,null);if(typeof m.then=="function")return y(f,c,Fe(m),w);if(m.$$typeof===ol)return y(f,c,Ke(f,m),w);Ie(f,m)}return null}function b(f,c,m,w,X){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return f=f.get(m)||null,o(c,f,""+w,X);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yl:return f=f.get(w.key===null?m:w.key)||null,u(c,f,w,X);case vl:return f=f.get(w.key===null?m:w.key)||null,h(c,f,w,X);case Hl:return w=Ri(w),b(f,c,m,w,X)}if(Tt(w)||Jl(w))return f=f.get(m)||null,S(c,f,w,X,null);if(typeof w.then=="function")return b(f,c,m,Fe(w),X);if(w.$$typeof===ol)return b(f,c,m,Ke(c,w),X);Ie(c,w)}return null}function B(f,c,m,w){for(var X=null,tl=null,R=c,Z=c=0,I=null;R!==null&&Z<m.length;Z++){R.index>Z?(I=R,R=null):I=R.sibling;var il=y(f,R,m[Z],w);if(il===null){R===null&&(R=I);break}l&&R&&il.alternate===null&&t(f,R),c=a(il,c,Z),tl===null?X=il:tl.sibling=il,tl=il,R=I}if(Z===m.length)return i(f,R),ll&&Rt(f,Z),X;if(R===null){for(;Z<m.length;Z++)R=T(f,m[Z],w),R!==null&&(c=a(R,c,Z),tl===null?X=R:tl.sibling=R,tl=R);return ll&&Rt(f,Z),X}for(R=n(R);Z<m.length;Z++)I=b(R,f,Z,m[Z],w),I!==null&&(l&&I.alternate!==null&&R.delete(I.key===null?Z:I.key),c=a(I,c,Z),tl===null?X=I:tl.sibling=I,tl=I);return l&&R.forEach(function(wi){return t(f,wi)}),ll&&Rt(f,Z),X}function q(f,c,m,w){if(m==null)throw Error(p(151));for(var X=null,tl=null,R=c,Z=c=0,I=null,il=m.next();R!==null&&!il.done;Z++,il=m.next()){R.index>Z?(I=R,R=null):I=R.sibling;var wi=y(f,R,il.value,w);if(wi===null){R===null&&(R=I);break}l&&R&&wi.alternate===null&&t(f,R),c=a(wi,c,Z),tl===null?X=wi:tl.sibling=wi,tl=wi,R=I}if(il.done)return i(f,R),ll&&Rt(f,Z),X;if(R===null){for(;!il.done;Z++,il=m.next())il=T(f,il.value,w),il!==null&&(c=a(il,c,Z),tl===null?X=il:tl.sibling=il,tl=il);return ll&&Rt(f,Z),X}for(R=n(R);!il.done;Z++,il=m.next())il=b(R,f,Z,il.value,w),il!==null&&(l&&il.alternate!==null&&R.delete(il.key===null?Z:il.key),c=a(il,c,Z),tl===null?X=il:tl.sibling=il,tl=il);return l&&R.forEach(function(rm){return t(f,rm)}),ll&&Rt(f,Z),X}function gl(f,c,m,w){if(typeof m=="object"&&m!==null&&m.type===wl&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case yl:l:{for(var X=m.key;c!==null;){if(c.key===X){if(X=m.type,X===wl){if(c.tag===7){i(f,c.sibling),w=e(c,m.props.children),w.return=f,f=w;break l}}else if(c.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Hl&&Ri(X)===c.type){i(f,c.sibling),w=e(c,m.props),Jn(w,m),w.return=f,f=w;break l}i(f,c);break}else t(f,c);c=c.sibling}m.type===wl?(w=xi(m.props.children,f.mode,w,m.key),w.return=f,f=w):(w=$e(m.type,m.key,m.props,null,f.mode,w),Jn(w,m),w.return=f,f=w)}return s(f);case vl:l:{for(X=m.key;c!==null;){if(c.key===X)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){i(f,c.sibling),w=e(c,m.children||[]),w.return=f,f=w;break l}else{i(f,c);break}else t(f,c);c=c.sibling}w=As(m,f.mode,w),w.return=f,f=w}return s(f);case Hl:return m=Ri(m),gl(f,c,m,w)}if(Tt(m))return B(f,c,m,w);if(Jl(m)){if(X=Jl(m),typeof X!="function")throw Error(p(150));return m=X.call(m),q(f,c,m,w)}if(typeof m.then=="function")return gl(f,c,Fe(m),w);if(m.$$typeof===ol)return gl(f,c,Ke(f,m),w);Ie(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,c!==null&&c.tag===6?(i(f,c.sibling),w=e(c,m),w.return=f,f=w):(i(f,c),w=js(m,f.mode,w),w.return=f,f=w),s(f)):i(f,c)}return function(f,c,m,w){try{kn=0;var X=gl(f,c,m,w);return fn=null,X}catch(R){if(R===gn||R===Je)throw R;var tl=ot(29,R,null,f.mode);return tl.lanes=w,tl.return=f,tl}}}var Xi=xu(!0),Nu=xu(!1),ai=!1;function Ys(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Xs(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function si(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function oi(l,t,i){var n=l.updateQueue;if(n===null)return null;if(n=n.shared,(nl&2)!==0){var e=n.pending;return e===null?t.next=t:(t.next=e.next,e.next=t),n.pending=t,t=Qe(l),hu(l,null,i),t}return Le(l,n,t,i),Qe(l)}function Wn(l,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var n=t.lanes;n&=l.pendingLanes,i|=n,t.lanes=i,Tr(l,i)}}function qs(l,t){var i=l.updateQueue,n=l.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var e=null,a=null;if(i=i.firstBaseUpdate,i!==null){do{var s={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};a===null?e=a=s:a=a.next=s,i=i.next}while(i!==null);a===null?e=a=t:a=a.next=t}else e=a=t;i={baseState:n.baseState,firstBaseUpdate:e,lastBaseUpdate:a,shared:n.shared,callbacks:n.callbacks},l.updateQueue=i;return}l=i.lastBaseUpdate,l===null?i.firstBaseUpdate=t:l.next=t,i.lastBaseUpdate=t}var Gs=!1;function Fn(){if(Gs){var l=cn;if(l!==null)throw l}}function In(l,t,i,n){Gs=!1;var e=l.updateQueue;ai=!1;var a=e.firstBaseUpdate,s=e.lastBaseUpdate,o=e.shared.pending;if(o!==null){e.shared.pending=null;var u=o,h=u.next;u.next=null,s===null?a=h:s.next=h,s=u;var S=l.alternate;S!==null&&(S=S.updateQueue,o=S.lastBaseUpdate,o!==s&&(o===null?S.firstBaseUpdate=h:o.next=h,S.lastBaseUpdate=u))}if(a!==null){var T=e.baseState;s=0,S=h=u=null,o=a;do{var y=o.lane&-536870913,b=y!==o.lane;if(b?(F&y)===y:(n&y)===y){y!==0&&y===un&&(Gs=!0),S!==null&&(S=S.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});l:{var B=l,q=o;y=t;var gl=i;switch(q.tag){case 1:if(B=q.payload,typeof B=="function"){T=B.call(gl,T,y);break l}T=B;break l;case 3:B.flags=B.flags&-65537|128;case 0:if(B=q.payload,y=typeof B=="function"?B.call(gl,T,y):B,y==null)break l;T=N({},T,y);break l;case 2:ai=!0}}y=o.callback,y!==null&&(l.flags|=64,b&&(l.flags|=8192),b=e.callbacks,b===null?e.callbacks=[y]:b.push(y))}else b={lane:y,tag:o.tag,payload:o.payload,callback:o.callback,next:null},S===null?(h=S=b,u=T):S=S.next=b,s|=y;if(o=o.next,o===null){if(o=e.shared.pending,o===null)break;b=o,o=b.next,b.next=null,e.lastBaseUpdate=b,e.shared.pending=null}}while(!0);S===null&&(u=T),e.baseState=u,e.firstBaseUpdate=h,e.lastBaseUpdate=S,a===null&&(e.shared.lanes=0),fi|=s,l.lanes=s,l.memoizedState=T}}function Uu(l,t){if(typeof l!="function")throw Error(p(191,l));l.call(t)}function Bu(l,t){var i=l.callbacks;if(i!==null)for(l.callbacks=null,l=0;l<i.length;l++)Uu(i[l],t)}var pn=g(null),Pe=g(0);function Hu(l,t){l=kt,D(Pe,l),D(pn,t),kt=l|t.baseLanes}function Ls(){D(Pe,kt),D(pn,pn.current)}function Qs(){kt=Pe.current,j(pn),j(Pe)}var rt=g(null),_t=null;function ri(l){var t=l.alternate;D(El,El.current&1),D(rt,l),_t===null&&(t===null||pn.current!==null||t.memoizedState!==null)&&(_t=l)}function $s(l){D(El,El.current),D(rt,l),_t===null&&(_t=l)}function Ru(l){l.tag===22?(D(El,El.current),D(rt,l),_t===null&&(_t=l)):ui()}function ui(){D(El,El.current),D(rt,rt.current)}function ut(l){j(rt),_t===l&&(_t=null),j(El)}var El=g(0);function la(l){for(var t=l;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Fo(i)||Io(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,$=null,ul=null,Ol=null,ta=!1,dn=!1,qi=!1,ia=0,Pn=0,mn=null,Ip=0;function Tl(){throw Error(p(321))}function Zs(l,t){if(t===null)return!1;for(var i=0;i<t.length&&i<l.length;i++)if(!st(l[i],t[i]))return!1;return!0}function Vs(l,t,i,n,e,a){return qt=a,$=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=l===null||l.memoizedState===null?Sc:oo,qi=!1,a=i(n,e),qi=!1,dn&&(a=Xu(t,i,n,e)),Yu(l),a}function Yu(l){_.H=ie;var t=ul!==null&&ul.next!==null;if(qt=0,Ol=ul=$=null,ta=!1,Pn=0,mn=null,t)throw Error(p(300));l===null||xl||(l=l.dependencies,l!==null&&Ve(l)&&(xl=!0))}function Xu(l,t,i,n){$=l;var e=0;do{if(dn&&(mn=null),Pn=0,dn=!1,25<=e)throw Error(p(301));if(e+=1,Ol=ul=null,l.updateQueue!=null){var a=l.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}_.H=_c,a=t(i,n)}while(dn);return a}function Pp(){var l=_.H,t=l.useState()[0];return t=typeof t.then=="function"?le(t):t,l=l.useState()[0],(ul!==null?ul.memoizedState:null)!==l&&($.flags|=1024),t}function Ks(){var l=ia!==0;return ia=0,l}function ks(l,t,i){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~i}function Js(l){if(ta){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}ta=!1}qt=0,Ol=ul=$=null,dn=!1,Pn=ia=0,mn=null}function Kl(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ol===null?$.memoizedState=Ol=l:Ol=Ol.next=l,Ol}function Cl(){if(ul===null){var l=$.alternate;l=l!==null?l.memoizedState:null}else l=ul.next;var t=Ol===null?$.memoizedState:Ol.next;if(t!==null)Ol=t,ul=l;else{if(l===null)throw $.alternate===null?Error(p(467)):Error(p(310));ul=l,l={memoizedState:ul.memoizedState,baseState:ul.baseState,baseQueue:ul.baseQueue,queue:ul.queue,next:null},Ol===null?$.memoizedState=Ol=l:Ol=Ol.next=l}return Ol}function na(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function le(l){var t=Pn;return Pn+=1,mn===null&&(mn=[]),l=Cu(mn,l,t),t=$,(Ol===null?t.memoizedState:Ol.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Sc:oo),l}function ea(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return le(l);if(l.$$typeof===ol)return Gl(l)}throw Error(p(438,String(l)))}function Ws(l){var t=null,i=$.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var n=$.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(e){return e.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=na(),$.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(l),n=0;n<l;n++)i[n]=Ft;return t.index++,i}function Gt(l,t){return typeof t=="function"?t(l):t}function aa(l){var t=Cl();return Fs(t,ul,l)}function Fs(l,t,i){var n=l.queue;if(n===null)throw Error(p(311));n.lastRenderedReducer=i;var e=l.baseQueue,a=n.pending;if(a!==null){if(e!==null){var s=e.next;e.next=a.next,a.next=s}t.baseQueue=e=a,n.pending=null}if(a=l.baseState,e===null)l.memoizedState=a;else{t=e.next;var o=s=null,u=null,h=t,S=!1;do{var T=h.lane&-536870913;if(T!==h.lane?(F&T)===T:(qt&T)===T){var y=h.revertLane;if(y===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===un&&(S=!0);else if((qt&y)===y){h=h.next,y===un&&(S=!0);continue}else T={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(o=u=T,s=a):u=u.next=T,$.lanes|=y,fi|=y;T=h.action,qi&&i(a,T),a=h.hasEagerState?h.eagerState:i(a,T)}else y={lane:T,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},u===null?(o=u=y,s=a):u=u.next=y,$.lanes|=T,fi|=T;h=h.next}while(h!==null&&h!==t);if(u===null?s=a:u.next=o,!st(a,l.memoizedState)&&(xl=!0,S&&(i=cn,i!==null)))throw i;l.memoizedState=a,l.baseState=s,l.baseQueue=u,n.lastRenderedState=a}return e===null&&(n.lanes=0),[l.memoizedState,n.dispatch]}function Is(l){var t=Cl(),i=t.queue;if(i===null)throw Error(p(311));i.lastRenderedReducer=l;var n=i.dispatch,e=i.pending,a=t.memoizedState;if(e!==null){i.pending=null;var s=e=e.next;do a=l(a,s.action),s=s.next;while(s!==e);st(a,t.memoizedState)||(xl=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),i.lastRenderedState=a}return[a,n]}function qu(l,t,i){var n=$,e=Cl(),a=ll;if(a){if(i===void 0)throw Error(p(407));i=i()}else i=t();var s=!st((ul||e).memoizedState,i);if(s&&(e.memoizedState=i,xl=!0),e=e.queue,to(Qu.bind(null,n,e,l),[l]),e.getSnapshot!==t||s||Ol!==null&&Ol.memoizedState.tag&1){if(n.flags|=2048,hn(9,{destroy:void 0},Lu.bind(null,n,e,i,t),null),pl===null)throw Error(p(349));a||(qt&127)!==0||Gu(n,t,i)}return i}function Gu(l,t,i){l.flags|=16384,l={getSnapshot:t,value:i},t=$.updateQueue,t===null?(t=na(),$.updateQueue=t,t.stores=[l]):(i=t.stores,i===null?t.stores=[l]:i.push(l))}function Lu(l,t,i,n){t.value=i,t.getSnapshot=n,$u(t)&&Zu(l)}function Qu(l,t,i){return i(function(){$u(t)&&Zu(l)})}function $u(l){var t=l.getSnapshot;l=l.value;try{var i=t();return!st(l,i)}catch{return!0}}function Zu(l){var t=Oi(l,2);t!==null&&it(t,l,2)}function Ps(l){var t=Kl();if(typeof l=="function"){var i=l;if(l=i(),qi){It(!0);try{i()}finally{It(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:l},t}function Vu(l,t,i,n){return l.baseState=i,Fs(l,ul,typeof n=="function"?n:Gt)}function ld(l,t,i,n,e){if(ra(l))throw Error(p(485));if(l=t.action,l!==null){var a={payload:e,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){a.listeners.push(s)}};_.T!==null?i(!0):a.isTransition=!1,n(a),i=t.pending,i===null?(a.next=t.pending=a,Ku(t,a)):(a.next=i.next,t.pending=i.next=a)}}function Ku(l,t){var i=t.action,n=t.payload,e=l.state;if(t.isTransition){var a=_.T,s={};_.T=s;try{var o=i(e,n),u=_.S;u!==null&&u(s,o),ku(l,t,o)}catch(h){lo(l,t,h)}finally{a!==null&&s.types!==null&&(a.types=s.types),_.T=a}}else try{a=i(e,n),ku(l,t,a)}catch(h){lo(l,t,h)}}function ku(l,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(n){Ju(l,t,n)},function(n){return lo(l,t,n)}):Ju(l,t,i)}function Ju(l,t,i){t.status="fulfilled",t.value=i,Wu(t),l.state=i,t=l.pending,t!==null&&(i=t.next,i===t?l.pending=null:(i=i.next,t.next=i,Ku(l,i)))}function lo(l,t,i){var n=l.pending;if(l.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=i,Wu(t),t=t.next;while(t!==n)}l.action=null}function Wu(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function Fu(l,t){return t}function Iu(l,t){if(ll){var i=pl.formState;if(i!==null){l:{var n=$;if(ll){if(dl){t:{for(var e=dl,a=St;e.nodeType!==8;){if(!a){e=null;break t}if(e=wt(e.nextSibling),e===null){e=null;break t}}a=e.data,e=a==="F!"||a==="F"?e:null}if(e){dl=wt(e.nextSibling),n=e.data==="F!";break l}}ni(n)}n=!1}n&&(t=i[0])}}return i=Kl(),i.memoizedState=i.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fu,lastRenderedState:t},i.queue=n,i=yc.bind(null,$,n),n.dispatch=i,n=Ps(!1),a=so.bind(null,$,!1,n.queue),n=Kl(),e={state:t,dispatch:null,action:l,pending:null},n.queue=e,i=ld.bind(null,$,e,a,i),e.dispatch=i,n.memoizedState=l,[t,i,!1]}function Pu(l){var t=Cl();return lc(t,ul,l)}function lc(l,t,i){if(t=Fs(l,t,Fu)[0],l=aa(Gt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=le(t)}catch(s){throw s===gn?Je:s}else n=t;t=Cl();var e=t.queue,a=e.dispatch;return i!==t.memoizedState&&($.flags|=2048,hn(9,{destroy:void 0},td.bind(null,e,i),null)),[n,a,l]}function td(l,t){l.action=t}function tc(l){var t=Cl(),i=ul;if(i!==null)return lc(t,i,l);Cl(),t=t.memoizedState,i=Cl();var n=i.queue.dispatch;return i.memoizedState=l,[t,n,!1]}function hn(l,t,i,n){return l={tag:l,create:i,deps:n,inst:t,next:null},t=$.updateQueue,t===null&&(t=na(),$.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=l.next=l:(n=i.next,i.next=l,l.next=n,t.lastEffect=l),l}function ic(){return Cl().memoizedState}function sa(l,t,i,n){var e=Kl();$.flags|=l,e.memoizedState=hn(1|t,{destroy:void 0},i,n===void 0?null:n)}function oa(l,t,i,n){var e=Cl();n=n===void 0?null:n;var a=e.memoizedState.inst;ul!==null&&n!==null&&Zs(n,ul.memoizedState.deps)?e.memoizedState=hn(t,a,i,n):($.flags|=l,e.memoizedState=hn(1|t,a,i,n))}function nc(l,t){sa(8390656,8,l,t)}function to(l,t){oa(2048,8,l,t)}function id(l){$.flags|=4;var t=$.updateQueue;if(t===null)t=na(),$.updateQueue=t,t.events=[l];else{var i=t.events;i===null?t.events=[l]:i.push(l)}}function ec(l){var t=Cl().memoizedState;return id({ref:t,nextImpl:l}),function(){if((nl&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function ac(l,t){return oa(4,2,l,t)}function sc(l,t){return oa(4,4,l,t)}function oc(l,t){if(typeof t=="function"){l=l();var i=t(l);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function rc(l,t,i){i=i!=null?i.concat([l]):null,oa(4,4,oc.bind(null,t,l),i)}function io(){}function uc(l,t){var i=Cl();t=t===void 0?null:t;var n=i.memoizedState;return t!==null&&Zs(t,n[1])?n[0]:(i.memoizedState=[l,t],l)}function cc(l,t){var i=Cl();t=t===void 0?null:t;var n=i.memoizedState;if(t!==null&&Zs(t,n[1]))return n[0];if(n=l(),qi){It(!0);try{l()}finally{It(!1)}}return i.memoizedState=[n,t],n}function no(l,t,i){return i===void 0||(qt&1073741824)!==0&&(F&261930)===0?l.memoizedState=t:(l.memoizedState=i,l=gg(),$.lanes|=l,fi|=l,i)}function gc(l,t,i,n){return st(i,t)?i:pn.current!==null?(l=no(l,i,n),st(l,t)||(xl=!0),l):(qt&42)===0||(qt&1073741824)!==0&&(F&261930)===0?(xl=!0,l.memoizedState=i):(l=gg(),$.lanes|=l,fi|=l,t)}function fc(l,t,i,n,e){var a=E.p;E.p=a!==0&&8>a?a:8;var s=_.T,o={};_.T=o,so(l,!1,t,i);try{var u=e(),h=_.S;if(h!==null&&h(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var S=Fp(u,n);te(l,t,S,ft(l))}else te(l,t,n,ft(l))}catch(T){te(l,t,{then:function(){},status:"rejected",reason:T},ft())}finally{E.p=a,s!==null&&o.types!==null&&(s.types=o.types),_.T=s}}function nd(){}function eo(l,t,i,n){if(l.tag!==5)throw Error(p(476));var e=pc(l).queue;fc(l,e,t,G,i===null?nd:function(){return dc(l),i(n)})}function pc(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:G},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:i},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function dc(l){var t=pc(l);t.next===null&&(t=l.alternate.memoizedState),te(l,t.next.queue,{},ft())}function ao(){return Gl(ve)}function mc(){return Cl().memoizedState}function hc(){return Cl().memoizedState}function ed(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var i=ft();l=si(i);var n=oi(t,l,i);n!==null&&(it(n,t,i),Wn(n,t,i)),t={cache:Us()},l.payload=t;return}t=t.return}}function ad(l,t,i){var n=ft();i={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ra(l)?vc(t,i):(i=zs(l,t,i,n),i!==null&&(it(i,l,n),bc(i,t,n)))}function yc(l,t,i){var n=ft();te(l,t,i,n)}function te(l,t,i,n){var e={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ra(l))vc(t,e);else{var a=l.alternate;if(l.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,i);if(e.hasEagerState=!0,e.eagerState=o,st(o,s))return Le(l,t,e,0),pl===null&&Ge(),!1}catch{}if(i=zs(l,t,e,n),i!==null)return it(i,l,n),bc(i,t,n),!0}return!1}function so(l,t,i,n){if(n={lane:2,revertLane:Xo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ra(l)){if(t)throw Error(p(479))}else t=zs(l,i,n,2),t!==null&&it(t,l,2)}function ra(l){var t=l.alternate;return l===$||t!==null&&t===$}function vc(l,t){dn=ta=!0;var i=l.pending;i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t}function bc(l,t,i){if((i&4194048)!==0){var n=t.lanes;n&=l.pendingLanes,i|=n,t.lanes=i,Tr(l,i)}}var ie={readContext:Gl,use:ea,useCallback:Tl,useContext:Tl,useEffect:Tl,useImperativeHandle:Tl,useLayoutEffect:Tl,useInsertionEffect:Tl,useMemo:Tl,useReducer:Tl,useRef:Tl,useState:Tl,useDebugValue:Tl,useDeferredValue:Tl,useTransition:Tl,useSyncExternalStore:Tl,useId:Tl,useHostTransitionStatus:Tl,useFormState:Tl,useActionState:Tl,useOptimistic:Tl,useMemoCache:Tl,useCacheRefresh:Tl};ie.useEffectEvent=Tl;var Sc={readContext:Gl,use:ea,useCallback:function(l,t){return Kl().memoizedState=[l,t===void 0?null:t],l},useContext:Gl,useEffect:nc,useImperativeHandle:function(l,t,i){i=i!=null?i.concat([l]):null,sa(4194308,4,oc.bind(null,t,l),i)},useLayoutEffect:function(l,t){return sa(4194308,4,l,t)},useInsertionEffect:function(l,t){sa(4,2,l,t)},useMemo:function(l,t){var i=Kl();t=t===void 0?null:t;var n=l();if(qi){It(!0);try{l()}finally{It(!1)}}return i.memoizedState=[n,t],n},useReducer:function(l,t,i){var n=Kl();if(i!==void 0){var e=i(t);if(qi){It(!0);try{i(t)}finally{It(!1)}}}else e=t;return n.memoizedState=n.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:e},n.queue=l,l=l.dispatch=ad.bind(null,$,l),[n.memoizedState,l]},useRef:function(l){var t=Kl();return l={current:l},t.memoizedState=l},useState:function(l){l=Ps(l);var t=l.queue,i=yc.bind(null,$,t);return t.dispatch=i,[l.memoizedState,i]},useDebugValue:io,useDeferredValue:function(l,t){var i=Kl();return no(i,l,t)},useTransition:function(){var l=Ps(!1);return l=fc.bind(null,$,l.queue,!0,!1),Kl().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,i){var n=$,e=Kl();if(ll){if(i===void 0)throw Error(p(407));i=i()}else{if(i=t(),pl===null)throw Error(p(349));(F&127)!==0||Gu(n,t,i)}e.memoizedState=i;var a={value:i,getSnapshot:t};return e.queue=a,nc(Qu.bind(null,n,a,l),[l]),n.flags|=2048,hn(9,{destroy:void 0},Lu.bind(null,n,a,i,t),null),i},useId:function(){var l=Kl(),t=pl.identifierPrefix;if(ll){var i=Ct,n=Et;i=(n&~(1<<32-at(n)-1)).toString(32)+i,t="_"+t+"R_"+i,i=ia++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=Ip++,t="_"+t+"r_"+i.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:ao,useFormState:Iu,useActionState:Iu,useOptimistic:function(l){var t=Kl();t.memoizedState=t.baseState=l;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=so.bind(null,$,!0,i),i.dispatch=t,[l,t]},useMemoCache:Ws,useCacheRefresh:function(){return Kl().memoizedState=ed.bind(null,$)},useEffectEvent:function(l){var t=Kl(),i={impl:l};return t.memoizedState=i,function(){if((nl&2)!==0)throw Error(p(440));return i.impl.apply(void 0,arguments)}}},oo={readContext:Gl,use:ea,useCallback:uc,useContext:Gl,useEffect:to,useImperativeHandle:rc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:cc,useReducer:aa,useRef:ic,useState:function(){return aa(Gt)},useDebugValue:io,useDeferredValue:function(l,t){var i=Cl();return gc(i,ul.memoizedState,l,t)},useTransition:function(){var l=aa(Gt)[0],t=Cl().memoizedState;return[typeof l=="boolean"?l:le(l),t]},useSyncExternalStore:qu,useId:mc,useHostTransitionStatus:ao,useFormState:Pu,useActionState:Pu,useOptimistic:function(l,t){var i=Cl();return Vu(i,ul,l,t)},useMemoCache:Ws,useCacheRefresh:hc};oo.useEffectEvent=ec;var _c={readContext:Gl,use:ea,useCallback:uc,useContext:Gl,useEffect:to,useImperativeHandle:rc,useInsertionEffect:ac,useLayoutEffect:sc,useMemo:cc,useReducer:Is,useRef:ic,useState:function(){return Is(Gt)},useDebugValue:io,useDeferredValue:function(l,t){var i=Cl();return ul===null?no(i,l,t):gc(i,ul.memoizedState,l,t)},useTransition:function(){var l=Is(Gt)[0],t=Cl().memoizedState;return[typeof l=="boolean"?l:le(l),t]},useSyncExternalStore:qu,useId:mc,useHostTransitionStatus:ao,useFormState:tc,useActionState:tc,useOptimistic:function(l,t){var i=Cl();return ul!==null?Vu(i,ul,l,t):(i.baseState=l,[l,i.queue.dispatch])},useMemoCache:Ws,useCacheRefresh:hc};_c.useEffectEvent=ec;function ro(l,t,i,n){t=l.memoizedState,i=i(n,t),i=i==null?t:N({},t,i),l.memoizedState=i,l.lanes===0&&(l.updateQueue.baseState=i)}var uo={enqueueSetState:function(l,t,i){l=l._reactInternals;var n=ft(),e=si(n);e.payload=t,i!=null&&(e.callback=i),t=oi(l,e,n),t!==null&&(it(t,l,n),Wn(t,l,n))},enqueueReplaceState:function(l,t,i){l=l._reactInternals;var n=ft(),e=si(n);e.tag=1,e.payload=t,i!=null&&(e.callback=i),t=oi(l,e,n),t!==null&&(it(t,l,n),Wn(t,l,n))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var i=ft(),n=si(i);n.tag=2,t!=null&&(n.callback=t),t=oi(l,n,i),t!==null&&(it(t,l,i),Wn(t,l,i))}};function wc(l,t,i,n,e,a,s){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ln(i,n)||!Ln(e,a):!0}function zc(l,t,i,n){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==l&&uo.enqueueReplaceState(t,t.state,null)}function Gi(l,t){var i=t;if("ref"in t){i={};for(var n in t)n!=="ref"&&(i[n]=t[n])}if(l=l.defaultProps){i===t&&(i=N({},i));for(var e in l)i[e]===void 0&&(i[e]=l[e])}return i}function Tc(l){qe(l)}function jc(l){console.error(l)}function Ac(l){qe(l)}function ua(l,t){try{var i=l.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Mc(l,t,i){try{var n=l.onCaughtError;n(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function co(l,t,i){return i=si(i),i.tag=3,i.payload={element:null},i.callback=function(){ua(l,t)},i}function Ec(l){return l=si(l),l.tag=3,l}function Cc(l,t,i,n){var e=i.type.getDerivedStateFromError;if(typeof e=="function"){var a=n.value;l.payload=function(){return e(a)},l.callback=function(){Mc(t,i,n)}}var s=i.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(l.callback=function(){Mc(t,i,n),typeof e!="function"&&(pi===null?pi=new Set([this]):pi.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function sd(l,t,i,n,e){if(i.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=i.alternate,t!==null&&rn(t,i,e,!0),i=rt.current,i!==null){switch(i.tag){case 31:case 13:return _t===null?_a():i.alternate===null&&jl===0&&(jl=3),i.flags&=-257,i.flags|=65536,i.lanes=e,n===We?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([n]):t.add(n),Ho(l,n,e)),!1;case 22:return i.flags|=65536,n===We?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([n]):i.add(n)),Ho(l,n,e)),!1}throw Error(p(435,i.tag))}return Ho(l,n,e),_a(),!1}if(ll)return t=rt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=e,n!==Cs&&(l=Error(p(422),{cause:n}),Zn(yt(l,i)))):(n!==Cs&&(t=Error(p(423),{cause:n}),Zn(yt(t,i))),l=l.current.alternate,l.flags|=65536,e&=-e,l.lanes|=e,n=yt(n,i),e=co(l.stateNode,n,e),qs(l,e),jl!==4&&(jl=2)),!1;var a=Error(p(520),{cause:n});if(a=yt(a,i),ce===null?ce=[a]:ce.push(a),jl!==4&&(jl=2),t===null)return!0;n=yt(n,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,l=e&-e,i.lanes|=l,l=co(i.stateNode,n,l),qs(i,l),!1;case 1:if(t=i.type,a=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(pi===null||!pi.has(a))))return i.flags|=65536,e&=-e,i.lanes|=e,e=Ec(e),Cc(e,l,i,n),qs(i,e),!1}i=i.return}while(i!==null);return!1}var go=Error(p(461)),xl=!1;function Ll(l,t,i,n){t.child=l===null?Nu(t,null,i,n):Xi(t,l.child,i,n)}function Dc(l,t,i,n,e){i=i.render;var a=t.ref;if("ref"in n){var s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}else s=n;return Bi(t),n=Vs(l,t,i,s,a,e),o=Ks(),l!==null&&!xl?(ks(l,t,e),Lt(l,t,e)):(ll&&o&&Ms(t),t.flags|=1,Ll(l,t,n,e),t.child)}function Oc(l,t,i,n,e){if(l===null){var a=i.type;return typeof a=="function"&&!Ts(a)&&a.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=a,xc(l,t,a,n,e)):(l=$e(i.type,null,n,t,t.mode,e),l.ref=t.ref,l.return=t,t.child=l)}if(a=l.child,!So(l,e)){var s=a.memoizedProps;if(i=i.compare,i=i!==null?i:Ln,i(s,n)&&l.ref===t.ref)return Lt(l,t,e)}return t.flags|=1,l=Ht(a,n),l.ref=t.ref,l.return=t,t.child=l}function xc(l,t,i,n,e){if(l!==null){var a=l.memoizedProps;if(Ln(a,n)&&l.ref===t.ref)if(xl=!1,t.pendingProps=n=a,So(l,e))(l.flags&131072)!==0&&(xl=!0);else return t.lanes=l.lanes,Lt(l,t,e)}return fo(l,t,i,n,e)}function Nc(l,t,i,n){var e=n.children,a=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|i:i,l!==null){for(n=t.child=l.child,e=0;n!==null;)e=e|n.lanes|n.childLanes,n=n.sibling;n=e&~a}else n=0,t.child=null;return Uc(l,t,a,i,n)}if((i&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&ke(t,a!==null?a.cachePool:null),a!==null?Hu(t,a):Ls(),Ru(t);else return n=t.lanes=536870912,Uc(l,t,a!==null?a.baseLanes|i:i,i,n)}else a!==null?(ke(t,a.cachePool),Hu(t,a),ui(),t.memoizedState=null):(l!==null&&ke(t,null),Ls(),ui());return Ll(l,t,e,i),t.child}function ne(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uc(l,t,i,n,e){var a=Hs();return a=a===null?null:{parent:Dl._currentValue,pool:a},t.memoizedState={baseLanes:i,cachePool:a},l!==null&&ke(t,null),Ls(),Ru(t),l!==null&&rn(l,t,n,!0),t.childLanes=e,null}function ca(l,t){return t=fa({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function Bc(l,t,i){return Xi(t,l.child,null,i),l=ca(t,t.pendingProps),l.flags|=2,ut(t),t.memoizedState=null,l}function od(l,t,i){var n=t.pendingProps,e=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(ll){if(n.mode==="hidden")return l=ca(t,n),t.lanes=536870912,ne(null,l);if($s(t),(l=dl)?(l=Kg(l,St),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ti!==null?{id:Et,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},i=vu(l),i.return=t,t.child=i,ql=t,dl=null)):l=null,l===null)throw ni(t);return t.lanes=536870912,null}return ca(t,n)}var a=l.memoizedState;if(a!==null){var s=a.dehydrated;if($s(t),e)if(t.flags&256)t.flags&=-257,t=Bc(l,t,i);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(p(558));else if(xl||rn(l,t,i,!1),e=(i&l.childLanes)!==0,xl||e){if(n=pl,n!==null&&(s=jr(n,i),s!==0&&s!==a.retryLane))throw a.retryLane=s,Oi(l,s),it(n,l,s),go;_a(),t=Bc(l,t,i)}else l=a.treeContext,dl=wt(s.nextSibling),ql=t,ll=!0,ii=null,St=!1,l!==null&&_u(t,l),t=ca(t,n),t.flags|=4096;return t}return l=Ht(l.child,{mode:n.mode,children:n.children}),l.ref=t.ref,t.child=l,l.return=t,l}function ga(l,t){var i=t.ref;if(i===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(p(284));(l===null||l.ref!==i)&&(t.flags|=4194816)}}function fo(l,t,i,n,e){return Bi(t),i=Vs(l,t,i,n,void 0,e),n=Ks(),l!==null&&!xl?(ks(l,t,e),Lt(l,t,e)):(ll&&n&&Ms(t),t.flags|=1,Ll(l,t,i,e),t.child)}function Hc(l,t,i,n,e,a){return Bi(t),t.updateQueue=null,i=Xu(t,n,i,e),Yu(l),n=Ks(),l!==null&&!xl?(ks(l,t,a),Lt(l,t,a)):(ll&&n&&Ms(t),t.flags|=1,Ll(l,t,i,a),t.child)}function Rc(l,t,i,n,e){if(Bi(t),t.stateNode===null){var a=en,s=i.contextType;typeof s=="object"&&s!==null&&(a=Gl(s)),a=new i(n,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=uo,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=n,a.state=t.memoizedState,a.refs={},Ys(t),s=i.contextType,a.context=typeof s=="object"&&s!==null?Gl(s):en,a.state=t.memoizedState,s=i.getDerivedStateFromProps,typeof s=="function"&&(ro(t,i,s,n),a.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&uo.enqueueReplaceState(a,a.state,null),In(t,n,a,e),Fn(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(l===null){a=t.stateNode;var o=t.memoizedProps,u=Gi(i,o);a.props=u;var h=a.context,S=i.contextType;s=en,typeof S=="object"&&S!==null&&(s=Gl(S));var T=i.getDerivedStateFromProps;S=typeof T=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,S||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||h!==s)&&zc(t,a,n,s),ai=!1;var y=t.memoizedState;a.state=y,In(t,n,a,e),Fn(),h=t.memoizedState,o||y!==h||ai?(typeof T=="function"&&(ro(t,i,T,n),h=t.memoizedState),(u=ai||wc(t,i,u,n,y,h,s))?(S||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=h),a.props=n,a.state=h,a.context=s,n=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Xs(l,t),s=t.memoizedProps,S=Gi(i,s),a.props=S,T=t.pendingProps,y=a.context,h=i.contextType,u=en,typeof h=="object"&&h!==null&&(u=Gl(h)),o=i.getDerivedStateFromProps,(h=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==T||y!==u)&&zc(t,a,n,u),ai=!1,y=t.memoizedState,a.state=y,In(t,n,a,e),Fn();var b=t.memoizedState;s!==T||y!==b||ai||l!==null&&l.dependencies!==null&&Ve(l.dependencies)?(typeof o=="function"&&(ro(t,i,o,n),b=t.memoizedState),(S=ai||wc(t,i,S,n,y,b,u)||l!==null&&l.dependencies!==null&&Ve(l.dependencies))?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,b,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,b,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=b),a.props=n,a.state=b,a.context=u,n=S):(typeof a.componentDidUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),n=!1)}return a=n,ga(l,t),n=(t.flags&128)!==0,a||n?(a=t.stateNode,i=n&&typeof i.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,l!==null&&n?(t.child=Xi(t,l.child,null,e),t.child=Xi(t,null,i,e)):Ll(l,t,i,e),t.memoizedState=a.state,l=t.child):l=Lt(l,t,e),l}function Yc(l,t,i,n){return Ni(),t.flags|=256,Ll(l,t,i,n),t.child}var po={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mo(l){return{baseLanes:l,cachePool:Mu()}}function ho(l,t,i){return l=l!==null?l.childLanes&~i:0,t&&(l|=gt),l}function Xc(l,t,i){var n=t.pendingProps,e=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=l!==null&&l.memoizedState===null?!1:(El.current&2)!==0),s&&(e=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,l===null){if(ll){if(e?ri(t):ui(),(l=dl)?(l=Kg(l,St),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:ti!==null?{id:Et,overflow:Ct}:null,retryLane:536870912,hydrationErrors:null},i=vu(l),i.return=t,t.child=i,ql=t,dl=null)):l=null,l===null)throw ni(t);return Io(l)?t.lanes=32:t.lanes=536870912,null}var o=n.children;return n=n.fallback,e?(ui(),e=t.mode,o=fa({mode:"hidden",children:o},e),n=xi(n,e,i,null),o.return=t,n.return=t,o.sibling=n,t.child=o,n=t.child,n.memoizedState=mo(i),n.childLanes=ho(l,s,i),t.memoizedState=po,ne(null,n)):(ri(t),yo(t,o))}var u=l.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(a)t.flags&256?(ri(t),t.flags&=-257,t=vo(l,t,i)):t.memoizedState!==null?(ui(),t.child=l.child,t.flags|=128,t=null):(ui(),o=n.fallback,e=t.mode,n=fa({mode:"visible",children:n.children},e),o=xi(o,e,i,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,Xi(t,l.child,null,i),n=t.child,n.memoizedState=mo(i),n.childLanes=ho(l,s,i),t.memoizedState=po,t=ne(null,n));else if(ri(t),Io(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var h=s.dgst;s=h,n=Error(p(419)),n.stack="",n.digest=s,Zn({value:n,source:null,stack:null}),t=vo(l,t,i)}else if(xl||rn(l,t,i,!1),s=(i&l.childLanes)!==0,xl||s){if(s=pl,s!==null&&(n=jr(s,i),n!==0&&n!==u.retryLane))throw u.retryLane=n,Oi(l,n),it(s,l,n),go;Fo(o)||_a(),t=vo(l,t,i)}else Fo(o)?(t.flags|=192,t.child=l.child,t=null):(l=u.treeContext,dl=wt(o.nextSibling),ql=t,ll=!0,ii=null,St=!1,l!==null&&_u(t,l),t=yo(t,n.children),t.flags|=4096);return t}return e?(ui(),o=n.fallback,e=t.mode,u=l.child,h=u.sibling,n=Ht(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,h!==null?o=Ht(h,o):(o=xi(o,e,i,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,ne(null,n),n=t.child,o=l.child.memoizedState,o===null?o=mo(i):(e=o.cachePool,e!==null?(u=Dl._currentValue,e=e.parent!==u?{parent:u,pool:u}:e):e=Mu(),o={baseLanes:o.baseLanes|i,cachePool:e}),n.memoizedState=o,n.childLanes=ho(l,s,i),t.memoizedState=po,ne(l.child,n)):(ri(t),i=l.child,l=i.sibling,i=Ht(i,{mode:"visible",children:n.children}),i.return=t,i.sibling=null,l!==null&&(s=t.deletions,s===null?(t.deletions=[l],t.flags|=16):s.push(l)),t.child=i,t.memoizedState=null,i)}function yo(l,t){return t=fa({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function fa(l,t){return l=ot(22,l,null,t),l.lanes=0,l}function vo(l,t,i){return Xi(t,l.child,null,i),l=yo(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function qc(l,t,i){l.lanes|=t;var n=l.alternate;n!==null&&(n.lanes|=t),xs(l.return,t,i)}function bo(l,t,i,n,e,a){var s=l.memoizedState;s===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:e,treeForkCount:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=i,s.tailMode=e,s.treeForkCount=a)}function Gc(l,t,i){var n=t.pendingProps,e=n.revealOrder,a=n.tail;n=n.children;var s=El.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,D(El,s),Ll(l,t,n,i),n=ll?$n:0,!o&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&qc(l,i,t);else if(l.tag===19)qc(l,i,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(e){case"forwards":for(i=t.child,e=null;i!==null;)l=i.alternate,l!==null&&la(l)===null&&(e=i),i=i.sibling;i=e,i===null?(e=t.child,t.child=null):(e=i.sibling,i.sibling=null),bo(t,!1,e,i,a,n);break;case"backwards":case"unstable_legacy-backwards":for(i=null,e=t.child,t.child=null;e!==null;){if(l=e.alternate,l!==null&&la(l)===null){t.child=e;break}l=e.sibling,e.sibling=i,i=e,e=l}bo(t,!0,i,null,a,n);break;case"together":bo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Lt(l,t,i){if(l!==null&&(t.dependencies=l.dependencies),fi|=t.lanes,(i&t.childLanes)===0)if(l!==null){if(rn(l,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(p(153));if(t.child!==null){for(l=t.child,i=Ht(l,l.pendingProps),t.child=i,i.return=t;l.sibling!==null;)l=l.sibling,i=i.sibling=Ht(l,l.pendingProps),i.return=t;i.sibling=null}return t.child}function So(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Ve(l)))}function rd(l,t,i){switch(t.tag){case 3:Vl(t,t.stateNode.containerInfo),ei(t,Dl,l.memoizedState.cache),Ni();break;case 27:case 5:Cn(t);break;case 4:Vl(t,t.stateNode.containerInfo);break;case 10:ei(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$s(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ri(t),t.flags|=128,null):(i&t.child.childLanes)!==0?Xc(l,t,i):(ri(t),l=Lt(l,t,i),l!==null?l.sibling:null);ri(t);break;case 19:var e=(l.flags&128)!==0;if(n=(i&t.childLanes)!==0,n||(rn(l,t,i,!1),n=(i&t.childLanes)!==0),e){if(n)return Gc(l,t,i);t.flags|=128}if(e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null,e.lastEffect=null),D(El,El.current),n)break;return null;case 22:return t.lanes=0,Nc(l,t,i,t.pendingProps);case 24:ei(t,Dl,l.memoizedState.cache)}return Lt(l,t,i)}function Lc(l,t,i){if(l!==null)if(l.memoizedProps!==t.pendingProps)xl=!0;else{if(!So(l,i)&&(t.flags&128)===0)return xl=!1,rd(l,t,i);xl=(l.flags&131072)!==0}else xl=!1,ll&&(t.flags&1048576)!==0&&Su(t,$n,t.index);switch(t.lanes=0,t.tag){case 16:l:{var n=t.pendingProps;if(l=Ri(t.elementType),t.type=l,typeof l=="function")Ts(l)?(n=Gi(l,n),t.tag=1,t=Rc(null,t,l,n,i)):(t.tag=0,t=fo(null,t,l,n,i));else{if(l!=null){var e=l.$$typeof;if(e===zl){t.tag=11,t=Dc(null,t,l,n,i);break l}else if(e===K){t.tag=14,t=Oc(null,t,l,n,i);break l}}throw t=xt(l)||l,Error(p(306,t,""))}}return t;case 0:return fo(l,t,t.type,t.pendingProps,i);case 1:return n=t.type,e=Gi(n,t.pendingProps),Rc(l,t,n,e,i);case 3:l:{if(Vl(t,t.stateNode.containerInfo),l===null)throw Error(p(387));n=t.pendingProps;var a=t.memoizedState;e=a.element,Xs(l,t),In(t,n,null,i);var s=t.memoizedState;if(n=s.cache,ei(t,Dl,n),n!==a.cache&&Ns(t,[Dl],i,!0),Fn(),n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Yc(l,t,n,i);break l}else if(n!==e){e=yt(Error(p(424)),t),Zn(e),t=Yc(l,t,n,i);break l}else{switch(l=t.stateNode.containerInfo,l.nodeType){case 9:l=l.body;break;default:l=l.nodeName==="HTML"?l.ownerDocument.body:l}for(dl=wt(l.firstChild),ql=t,ll=!0,ii=null,St=!0,i=Nu(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Ni(),n===e){t=Lt(l,t,i);break l}Ll(l,t,n,i)}t=t.child}return t;case 26:return ga(l,t),l===null?(i=Pg(t.type,null,t.pendingProps,null))?t.memoizedState=i:ll||(i=t.type,l=t.pendingProps,n=Ea(k.current).createElement(i),n[Xl]=t,n[Wl]=l,Ql(n,i,l),Rl(n),t.stateNode=n):t.memoizedState=Pg(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Cn(t),l===null&&ll&&(n=t.stateNode=Wg(t.type,t.pendingProps,k.current),ql=t,St=!0,e=dl,yi(t.type)?(Po=e,dl=wt(n.firstChild)):dl=e),Ll(l,t,t.pendingProps.children,i),ga(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&ll&&((e=n=dl)&&(n=Yd(n,t.type,t.pendingProps,St),n!==null?(t.stateNode=n,ql=t,dl=wt(n.firstChild),St=!1,e=!0):e=!1),e||ni(t)),Cn(t),e=t.type,a=t.pendingProps,s=l!==null?l.memoizedProps:null,n=a.children,ko(e,a)?n=null:s!==null&&ko(e,s)&&(t.flags|=32),t.memoizedState!==null&&(e=Vs(l,t,Pp,null,null,i),ve._currentValue=e),ga(l,t),Ll(l,t,n,i),t.child;case 6:return l===null&&ll&&((l=i=dl)&&(i=Xd(i,t.pendingProps,St),i!==null?(t.stateNode=i,ql=t,dl=null,l=!0):l=!1),l||ni(t)),null;case 13:return Xc(l,t,i);case 4:return Vl(t,t.stateNode.containerInfo),n=t.pendingProps,l===null?t.child=Xi(t,null,n,i):Ll(l,t,n,i),t.child;case 11:return Dc(l,t,t.type,t.pendingProps,i);case 7:return Ll(l,t,t.pendingProps,i),t.child;case 8:return Ll(l,t,t.pendingProps.children,i),t.child;case 12:return Ll(l,t,t.pendingProps.children,i),t.child;case 10:return n=t.pendingProps,ei(t,t.type,n.value),Ll(l,t,n.children,i),t.child;case 9:return e=t.type._context,n=t.pendingProps.children,Bi(t),e=Gl(e),n=n(e),t.flags|=1,Ll(l,t,n,i),t.child;case 14:return Oc(l,t,t.type,t.pendingProps,i);case 15:return xc(l,t,t.type,t.pendingProps,i);case 19:return Gc(l,t,i);case 31:return od(l,t,i);case 22:return Nc(l,t,i,t.pendingProps);case 24:return Bi(t),n=Gl(Dl),l===null?(e=Hs(),e===null&&(e=pl,a=Us(),e.pooledCache=a,a.refCount++,a!==null&&(e.pooledCacheLanes|=i),e=a),t.memoizedState={parent:n,cache:e},Ys(t),ei(t,Dl,e)):((l.lanes&i)!==0&&(Xs(l,t),In(t,null,null,i),Fn()),e=l.memoizedState,a=t.memoizedState,e.parent!==n?(e={parent:n,cache:n},t.memoizedState=e,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=e),ei(t,Dl,n)):(n=a.cache,ei(t,Dl,n),n!==e.cache&&Ns(t,[Dl],i,!0))),Ll(l,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Qt(l){l.flags|=4}function _o(l,t,i,n,e){if((t=(l.mode&32)!==0)&&(t=!1),t){if(l.flags|=16777216,(e&335544128)===e)if(l.stateNode.complete)l.flags|=8192;else if(mg())l.flags|=8192;else throw Yi=We,Rs}else l.flags&=-16777217}function Qc(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!af(t))if(mg())l.flags|=8192;else throw Yi=We,Rs}function pa(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?wr():536870912,l.lanes|=t,Sn|=t)}function ee(l,t){if(!ll)switch(l.tailMode){case"hidden":t=l.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?l.tail=null:i.sibling=null;break;case"collapsed":i=l.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:n.sibling=null}}function ml(l){var t=l.alternate!==null&&l.alternate.child===l.child,i=0,n=0;if(t)for(var e=l.child;e!==null;)i|=e.lanes|e.childLanes,n|=e.subtreeFlags&65011712,n|=e.flags&65011712,e.return=l,e=e.sibling;else for(e=l.child;e!==null;)i|=e.lanes|e.childLanes,n|=e.subtreeFlags,n|=e.flags,e.return=l,e=e.sibling;return l.subtreeFlags|=n,l.childLanes=i,t}function ud(l,t,i){var n=t.pendingProps;switch(Es(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ml(t),null;case 1:return ml(t),null;case 3:return i=t.stateNode,n=null,l!==null&&(n=l.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xt(Dl),Ml(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(l===null||l.child===null)&&(on(t)?Qt(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ds())),ml(t),null;case 26:var e=t.type,a=t.memoizedState;return l===null?(Qt(t),a!==null?(ml(t),Qc(t,a)):(ml(t),_o(t,e,null,n,i))):a?a!==l.memoizedState?(Qt(t),ml(t),Qc(t,a)):(ml(t),t.flags&=-16777217):(l=l.memoizedProps,l!==n&&Qt(t),ml(t),_o(t,e,l,n,i)),null;case 27:if(Te(t),i=k.current,e=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==n&&Qt(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return ml(t),null}l=H.current,on(t)?wu(t):(l=Wg(e,n,i),t.stateNode=l,Qt(t))}return ml(t),null;case 5:if(Te(t),e=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==n&&Qt(t);else{if(!n){if(t.stateNode===null)throw Error(p(166));return ml(t),null}if(a=H.current,on(t))wu(t);else{var s=Ea(k.current);switch(a){case 1:a=s.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:a=s.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":a=s.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":a=s.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":a=s.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?a.multiple=!0:n.size&&(a.size=n.size);break;default:a=typeof n.is=="string"?s.createElement(e,{is:n.is}):s.createElement(e)}}a[Xl]=t,a[Wl]=n;l:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)a.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break l;for(;s.sibling===null;){if(s.return===null||s.return===t)break l;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=a;l:switch(Ql(a,e,n),e){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break l;case"img":n=!0;break l;default:n=!1}n&&Qt(t)}}return ml(t),_o(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,i),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==n&&Qt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(p(166));if(l=k.current,on(t)){if(l=t.stateNode,i=t.memoizedProps,n=null,e=ql,e!==null)switch(e.tag){case 27:case 5:n=e.memoizedProps}l[Xl]=t,l=!!(l.nodeValue===i||n!==null&&n.suppressHydrationWarning===!0||Xg(l.nodeValue,i)),l||ni(t,!0)}else l=Ea(l).createTextNode(n),l[Xl]=t,t.stateNode=l}return ml(t),null;case 31:if(i=t.memoizedState,l===null||l.memoizedState!==null){if(n=on(t),i!==null){if(l===null){if(!n)throw Error(p(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(p(557));l[Xl]=t}else Ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),l=!1}else i=Ds(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=i),l=!0;if(!l)return t.flags&256?(ut(t),t):(ut(t),null);if((t.flags&128)!==0)throw Error(p(558))}return ml(t),null;case 13:if(n=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(e=on(t),n!==null&&n.dehydrated!==null){if(l===null){if(!e)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));e[Xl]=t}else Ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ml(t),e=!1}else e=Ds(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=e),e=!0;if(!e)return t.flags&256?(ut(t),t):(ut(t),null)}return ut(t),(t.flags&128)!==0?(t.lanes=i,t):(i=n!==null,l=l!==null&&l.memoizedState!==null,i&&(n=t.child,e=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(e=n.alternate.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==e&&(n.flags|=2048)),i!==l&&i&&(t.child.flags|=8192),pa(t,t.updateQueue),ml(t),null);case 4:return Ml(),l===null&&Qo(t.stateNode.containerInfo),ml(t),null;case 10:return Xt(t.type),ml(t),null;case 19:if(j(El),n=t.memoizedState,n===null)return ml(t),null;if(e=(t.flags&128)!==0,a=n.rendering,a===null)if(e)ee(n,!1);else{if(jl!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(a=la(l),a!==null){for(t.flags|=128,ee(n,!1),l=a.updateQueue,t.updateQueue=l,pa(t,l),t.subtreeFlags=0,l=i,i=t.child;i!==null;)yu(i,l),i=i.sibling;return D(El,El.current&1|2),ll&&Rt(t,n.treeForkCount),t.child}l=l.sibling}n.tail!==null&&nt()>va&&(t.flags|=128,e=!0,ee(n,!1),t.lanes=4194304)}else{if(!e)if(l=la(a),l!==null){if(t.flags|=128,e=!0,l=l.updateQueue,t.updateQueue=l,pa(t,l),ee(n,!0),n.tail===null&&n.tailMode==="hidden"&&!a.alternate&&!ll)return ml(t),null}else 2*nt()-n.renderingStartTime>va&&i!==536870912&&(t.flags|=128,e=!0,ee(n,!1),t.lanes=4194304);n.isBackwards?(a.sibling=t.child,t.child=a):(l=n.last,l!==null?l.sibling=a:t.child=a,n.last=a)}return n.tail!==null?(l=n.tail,n.rendering=l,n.tail=l.sibling,n.renderingStartTime=nt(),l.sibling=null,i=El.current,D(El,e?i&1|2:i&1),ll&&Rt(t,n.treeForkCount),l):(ml(t),null);case 22:case 23:return ut(t),Qs(),n=t.memoizedState!==null,l!==null?l.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(i&536870912)!==0&&(t.flags&128)===0&&(ml(t),t.subtreeFlags&6&&(t.flags|=8192)):ml(t),i=t.updateQueue,i!==null&&pa(t,i.retryQueue),i=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==i&&(t.flags|=2048),l!==null&&j(Hi),null;case 24:return i=null,l!==null&&(i=l.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Xt(Dl),ml(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function cd(l,t){switch(Es(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Xt(Dl),Ml(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Te(t),null;case 31:if(t.memoizedState!==null){if(ut(t),t.alternate===null)throw Error(p(340));Ni()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(ut(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(p(340));Ni()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return j(El),null;case 4:return Ml(),null;case 10:return Xt(t.type),null;case 22:case 23:return ut(t),Qs(),l!==null&&j(Hi),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Xt(Dl),null;case 25:return null;default:return null}}function $c(l,t){switch(Es(t),t.tag){case 3:Xt(Dl),Ml();break;case 26:case 27:case 5:Te(t);break;case 4:Ml();break;case 31:t.memoizedState!==null&&ut(t);break;case 13:ut(t);break;case 19:j(El);break;case 10:Xt(t.type);break;case 22:case 23:ut(t),Qs(),l!==null&&j(Hi);break;case 24:Xt(Dl)}}function ae(l,t){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var e=n.next;i=e;do{if((i.tag&l)===l){n=void 0;var a=i.create,s=i.inst;n=a(),s.destroy=n}i=i.next}while(i!==e)}}catch(o){sl(t,t.return,o)}}function ci(l,t,i){try{var n=t.updateQueue,e=n!==null?n.lastEffect:null;if(e!==null){var a=e.next;n=a;do{if((n.tag&l)===l){var s=n.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,e=t;var u=i,h=o;try{h()}catch(S){sl(e,u,S)}}}n=n.next}while(n!==a)}}catch(S){sl(t,t.return,S)}}function Zc(l){var t=l.updateQueue;if(t!==null){var i=l.stateNode;try{Bu(t,i)}catch(n){sl(l,l.return,n)}}}function Vc(l,t,i){i.props=Gi(l.type,l.memoizedProps),i.state=l.memoizedState;try{i.componentWillUnmount()}catch(n){sl(l,t,n)}}function se(l,t){try{var i=l.ref;if(i!==null){switch(l.tag){case 26:case 27:case 5:var n=l.stateNode;break;case 30:n=l.stateNode;break;default:n=l.stateNode}typeof i=="function"?l.refCleanup=i(n):i.current=n}}catch(e){sl(l,t,e)}}function Dt(l,t){var i=l.ref,n=l.refCleanup;if(i!==null)if(typeof n=="function")try{n()}catch(e){sl(l,t,e)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(e){sl(l,t,e)}else i.current=null}function Kc(l){var t=l.type,i=l.memoizedProps,n=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break l;case"img":i.src?n.src=i.src:i.srcSet&&(n.srcset=i.srcSet)}}catch(e){sl(l,l.return,e)}}function wo(l,t,i){try{var n=l.stateNode;xd(n,l.type,i,t),n[Wl]=t}catch(e){sl(l,l.return,e)}}function kc(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&yi(l.type)||l.tag===4}function zo(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||kc(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&yi(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function To(l,t,i){var n=l.tag;if(n===5||n===6)l=l.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(l),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Ut));else if(n!==4&&(n===27&&yi(l.type)&&(i=l.stateNode,t=null),l=l.child,l!==null))for(To(l,t,i),l=l.sibling;l!==null;)To(l,t,i),l=l.sibling}function da(l,t,i){var n=l.tag;if(n===5||n===6)l=l.stateNode,t?i.insertBefore(l,t):i.appendChild(l);else if(n!==4&&(n===27&&yi(l.type)&&(i=l.stateNode),l=l.child,l!==null))for(da(l,t,i),l=l.sibling;l!==null;)da(l,t,i),l=l.sibling}function Jc(l){var t=l.stateNode,i=l.memoizedProps;try{for(var n=l.type,e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ql(t,n,i),t[Xl]=l,t[Wl]=i}catch(a){sl(l,l.return,a)}}var $t=!1,Nl=!1,jo=!1,Wc=typeof WeakSet=="function"?WeakSet:Set,Yl=null;function gd(l,t){if(l=l.containerInfo,Vo=Ba,l=ru(l),ys(l)){if("selectionStart"in l)var i={start:l.selectionStart,end:l.selectionEnd};else l:{i=(i=l.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var e=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{i.nodeType,a.nodeType}catch{i=null;break l}var s=0,o=-1,u=-1,h=0,S=0,T=l,y=null;t:for(;;){for(var b;T!==i||e!==0&&T.nodeType!==3||(o=s+e),T!==a||n!==0&&T.nodeType!==3||(u=s+n),T.nodeType===3&&(s+=T.nodeValue.length),(b=T.firstChild)!==null;)y=T,T=b;for(;;){if(T===l)break t;if(y===i&&++h===e&&(o=s),y===a&&++S===n&&(u=s),(b=T.nextSibling)!==null)break;T=y,y=T.parentNode}T=b}i=o===-1||u===-1?null:{start:o,end:u}}else i=null}i=i||{start:0,end:0}}else i=null;for(Ko={focusedElem:l,selectionRange:i},Ba=!1,Yl=t;Yl!==null;)if(t=Yl,l=t.child,(t.subtreeFlags&1028)!==0&&l!==null)l.return=t,Yl=l;else for(;Yl!==null;){switch(t=Yl,a=t.alternate,l=t.flags,t.tag){case 0:if((l&4)!==0&&(l=t.updateQueue,l=l!==null?l.events:null,l!==null))for(i=0;i<l.length;i++)e=l[i],e.ref.impl=e.nextImpl;break;case 11:case 15:break;case 1:if((l&1024)!==0&&a!==null){l=void 0,i=t,e=a.memoizedProps,a=a.memoizedState,n=i.stateNode;try{var B=Gi(i.type,e);l=n.getSnapshotBeforeUpdate(B,a),n.__reactInternalSnapshotBeforeUpdate=l}catch(q){sl(i,i.return,q)}}break;case 3:if((l&1024)!==0){if(l=t.stateNode.containerInfo,i=l.nodeType,i===9)Wo(l);else if(i===1)switch(l.nodeName){case"HEAD":case"HTML":case"BODY":Wo(l);break;default:l.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((l&1024)!==0)throw Error(p(163))}if(l=t.sibling,l!==null){l.return=t.return,Yl=l;break}Yl=t.return}}function Fc(l,t,i){var n=i.flags;switch(i.tag){case 0:case 11:case 15:Vt(l,i),n&4&&ae(5,i);break;case 1:if(Vt(l,i),n&4)if(l=i.stateNode,t===null)try{l.componentDidMount()}catch(s){sl(i,i.return,s)}else{var e=Gi(i.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(e,t,l.__reactInternalSnapshotBeforeUpdate)}catch(s){sl(i,i.return,s)}}n&64&&Zc(i),n&512&&se(i,i.return);break;case 3:if(Vt(l,i),n&64&&(l=i.updateQueue,l!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{Bu(l,t)}catch(s){sl(i,i.return,s)}}break;case 27:t===null&&n&4&&Jc(i);case 26:case 5:Vt(l,i),t===null&&n&4&&Kc(i),n&512&&se(i,i.return);break;case 12:Vt(l,i);break;case 31:Vt(l,i),n&4&&lg(l,i);break;case 13:Vt(l,i),n&4&&tg(l,i),n&64&&(l=i.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(i=Sd.bind(null,i),qd(l,i))));break;case 22:if(n=i.memoizedState!==null||$t,!n){t=t!==null&&t.memoizedState!==null||Nl,e=$t;var a=Nl;$t=n,(Nl=t)&&!a?Kt(l,i,(i.subtreeFlags&8772)!==0):Vt(l,i),$t=e,Nl=a}break;case 30:break;default:Vt(l,i)}}function Ic(l){var t=l.alternate;t!==null&&(l.alternate=null,Ic(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&ls(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var hl=null,Il=!1;function Zt(l,t,i){for(i=i.child;i!==null;)Pc(l,t,i),i=i.sibling}function Pc(l,t,i){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Dn,i)}catch{}switch(i.tag){case 26:Nl||Dt(i,t),Zt(l,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Nl||Dt(i,t);var n=hl,e=Il;yi(i.type)&&(hl=i.stateNode,Il=!1),Zt(l,t,i),me(i.stateNode),hl=n,Il=e;break;case 5:Nl||Dt(i,t);case 6:if(n=hl,e=Il,hl=null,Zt(l,t,i),hl=n,Il=e,hl!==null)if(Il)try{(hl.nodeType===9?hl.body:hl.nodeName==="HTML"?hl.ownerDocument.body:hl).removeChild(i.stateNode)}catch(a){sl(i,t,a)}else try{hl.removeChild(i.stateNode)}catch(a){sl(i,t,a)}break;case 18:hl!==null&&(Il?(l=hl,Zg(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,i.stateNode),En(l)):Zg(hl,i.stateNode));break;case 4:n=hl,e=Il,hl=i.stateNode.containerInfo,Il=!0,Zt(l,t,i),hl=n,Il=e;break;case 0:case 11:case 14:case 15:ci(2,i,t),Nl||ci(4,i,t),Zt(l,t,i);break;case 1:Nl||(Dt(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"&&Vc(i,t,n)),Zt(l,t,i);break;case 21:Zt(l,t,i);break;case 22:Nl=(n=Nl)||i.memoizedState!==null,Zt(l,t,i),Nl=n;break;default:Zt(l,t,i)}}function lg(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{En(l)}catch(i){sl(t,t.return,i)}}}function tg(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{En(l)}catch(i){sl(t,t.return,i)}}function fd(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Wc),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Wc),t;default:throw Error(p(435,l.tag))}}function ma(l,t){var i=fd(l);t.forEach(function(n){if(!i.has(n)){i.add(n);var e=_d.bind(null,l,n);n.then(e,e)}})}function Pl(l,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var e=i[n],a=l,s=t,o=s;l:for(;o!==null;){switch(o.tag){case 27:if(yi(o.type)){hl=o.stateNode,Il=!1;break l}break;case 5:hl=o.stateNode,Il=!1;break l;case 3:case 4:hl=o.stateNode.containerInfo,Il=!0;break l}o=o.return}if(hl===null)throw Error(p(160));Pc(a,s,e),hl=null,Il=!1,a=e.alternate,a!==null&&(a.return=null),e.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)ig(t,l),t=t.sibling}var At=null;function ig(l,t){var i=l.alternate,n=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:Pl(t,l),lt(l),n&4&&(ci(3,l,l.return),ae(3,l),ci(5,l,l.return));break;case 1:Pl(t,l),lt(l),n&512&&(Nl||i===null||Dt(i,i.return)),n&64&&$t&&(l=l.updateQueue,l!==null&&(n=l.callbacks,n!==null&&(i=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:var e=At;if(Pl(t,l),lt(l),n&512&&(Nl||i===null||Dt(i,i.return)),n&4){var a=i!==null?i.memoizedState:null;if(n=l.memoizedState,i===null)if(n===null)if(l.stateNode===null){l:{n=l.type,i=l.memoizedProps,e=e.ownerDocument||e;t:switch(n){case"title":a=e.getElementsByTagName("title")[0],(!a||a[Nn]||a[Xl]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=e.createElement(n),e.head.insertBefore(a,e.querySelector("head > title"))),Ql(a,n,i),a[Xl]=l,Rl(a),n=a;break l;case"link":var s=nf("link","href",e).get(n+(i.href||""));if(s){for(var o=0;o<s.length;o++)if(a=s[o],a.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&a.getAttribute("rel")===(i.rel==null?null:i.rel)&&a.getAttribute("title")===(i.title==null?null:i.title)&&a.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){s.splice(o,1);break t}}a=e.createElement(n),Ql(a,n,i),e.head.appendChild(a);break;case"meta":if(s=nf("meta","content",e).get(n+(i.content||""))){for(o=0;o<s.length;o++)if(a=s[o],a.getAttribute("content")===(i.content==null?null:""+i.content)&&a.getAttribute("name")===(i.name==null?null:i.name)&&a.getAttribute("property")===(i.property==null?null:i.property)&&a.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&a.getAttribute("charset")===(i.charSet==null?null:i.charSet)){s.splice(o,1);break t}}a=e.createElement(n),Ql(a,n,i),e.head.appendChild(a);break;default:throw Error(p(468,n))}a[Xl]=l,Rl(a),n=a}l.stateNode=n}else ef(e,l.type,l.stateNode);else l.stateNode=tf(e,n,l.memoizedProps);else a!==n?(a===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):a.count--,n===null?ef(e,l.type,l.stateNode):tf(e,n,l.memoizedProps)):n===null&&l.stateNode!==null&&wo(l,l.memoizedProps,i.memoizedProps)}break;case 27:Pl(t,l),lt(l),n&512&&(Nl||i===null||Dt(i,i.return)),i!==null&&n&4&&wo(l,l.memoizedProps,i.memoizedProps);break;case 5:if(Pl(t,l),lt(l),n&512&&(Nl||i===null||Dt(i,i.return)),l.flags&32){e=l.stateNode;try{Wi(e,"")}catch(B){sl(l,l.return,B)}}n&4&&l.stateNode!=null&&(e=l.memoizedProps,wo(l,e,i!==null?i.memoizedProps:e)),n&1024&&(jo=!0);break;case 6:if(Pl(t,l),lt(l),n&4){if(l.stateNode===null)throw Error(p(162));n=l.memoizedProps,i=l.stateNode;try{i.nodeValue=n}catch(B){sl(l,l.return,B)}}break;case 3:if(Oa=null,e=At,At=Ca(t.containerInfo),Pl(t,l),At=e,lt(l),n&4&&i!==null&&i.memoizedState.isDehydrated)try{En(t.containerInfo)}catch(B){sl(l,l.return,B)}jo&&(jo=!1,ng(l));break;case 4:n=At,At=Ca(l.stateNode.containerInfo),Pl(t,l),lt(l),At=n;break;case 12:Pl(t,l),lt(l);break;case 31:Pl(t,l),lt(l),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,ma(l,n)));break;case 13:Pl(t,l),lt(l),l.child.flags&8192&&l.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(ya=nt()),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,ma(l,n)));break;case 22:e=l.memoizedState!==null;var u=i!==null&&i.memoizedState!==null,h=$t,S=Nl;if($t=h||e,Nl=S||u,Pl(t,l),Nl=S,$t=h,lt(l),n&8192)l:for(t=l.stateNode,t._visibility=e?t._visibility&-2:t._visibility|1,e&&(i===null||u||$t||Nl||Li(l)),i=null,t=l;;){if(t.tag===5||t.tag===26){if(i===null){u=i=t;try{if(a=u.stateNode,e)s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=u.stateNode;var T=u.memoizedProps.style,y=T!=null&&T.hasOwnProperty("display")?T.display:null;o.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(B){sl(u,u.return,B)}}}else if(t.tag===6){if(i===null){u=t;try{u.stateNode.nodeValue=e?"":u.memoizedProps}catch(B){sl(u,u.return,B)}}}else if(t.tag===18){if(i===null){u=t;try{var b=u.stateNode;e?Vg(b,!0):Vg(u.stateNode,!1)}catch(B){sl(u,u.return,B)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===l)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=l.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,ma(l,i))));break;case 19:Pl(t,l),lt(l),n&4&&(n=l.updateQueue,n!==null&&(l.updateQueue=null,ma(l,n)));break;case 30:break;case 21:break;default:Pl(t,l),lt(l)}}function lt(l){var t=l.flags;if(t&2){try{for(var i,n=l.return;n!==null;){if(kc(n)){i=n;break}n=n.return}if(i==null)throw Error(p(160));switch(i.tag){case 27:var e=i.stateNode,a=zo(l);da(l,a,e);break;case 5:var s=i.stateNode;i.flags&32&&(Wi(s,""),i.flags&=-33);var o=zo(l);da(l,o,s);break;case 3:case 4:var u=i.stateNode.containerInfo,h=zo(l);To(l,h,u);break;default:throw Error(p(161))}}catch(S){sl(l,l.return,S)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function ng(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;ng(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),l=l.sibling}}function Vt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Fc(l,t.alternate,t),t=t.sibling}function Li(l){for(l=l.child;l!==null;){var t=l;switch(t.tag){case 0:case 11:case 14:case 15:ci(4,t,t.return),Li(t);break;case 1:Dt(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Vc(t,t.return,i),Li(t);break;case 27:me(t.stateNode);case 26:case 5:Dt(t,t.return),Li(t);break;case 22:t.memoizedState===null&&Li(t);break;case 30:Li(t);break;default:Li(t)}l=l.sibling}}function Kt(l,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,e=l,a=t,s=a.flags;switch(a.tag){case 0:case 11:case 15:Kt(e,a,i),ae(4,a);break;case 1:if(Kt(e,a,i),n=a,e=n.stateNode,typeof e.componentDidMount=="function")try{e.componentDidMount()}catch(h){sl(n,n.return,h)}if(n=a,e=n.updateQueue,e!==null){var o=n.stateNode;try{var u=e.shared.hiddenCallbacks;if(u!==null)for(e.shared.hiddenCallbacks=null,e=0;e<u.length;e++)Uu(u[e],o)}catch(h){sl(n,n.return,h)}}i&&s&64&&Zc(a),se(a,a.return);break;case 27:Jc(a);case 26:case 5:Kt(e,a,i),i&&n===null&&s&4&&Kc(a),se(a,a.return);break;case 12:Kt(e,a,i);break;case 31:Kt(e,a,i),i&&s&4&&lg(e,a);break;case 13:Kt(e,a,i),i&&s&4&&tg(e,a);break;case 22:a.memoizedState===null&&Kt(e,a,i),se(a,a.return);break;case 30:break;default:Kt(e,a,i)}t=t.sibling}}function Ao(l,t){var i=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==i&&(l!=null&&l.refCount++,i!=null&&Vn(i))}function Mo(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Vn(l))}function Mt(l,t,i,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)eg(l,t,i,n),t=t.sibling}function eg(l,t,i,n){var e=t.flags;switch(t.tag){case 0:case 11:case 15:Mt(l,t,i,n),e&2048&&ae(9,t);break;case 1:Mt(l,t,i,n);break;case 3:Mt(l,t,i,n),e&2048&&(l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Vn(l)));break;case 12:if(e&2048){Mt(l,t,i,n),l=t.stateNode;try{var a=t.memoizedProps,s=a.id,o=a.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",l.passiveEffectDuration,-0)}catch(u){sl(t,t.return,u)}}else Mt(l,t,i,n);break;case 31:Mt(l,t,i,n);break;case 13:Mt(l,t,i,n);break;case 23:break;case 22:a=t.stateNode,s=t.alternate,t.memoizedState!==null?a._visibility&2?Mt(l,t,i,n):oe(l,t):a._visibility&2?Mt(l,t,i,n):(a._visibility|=2,yn(l,t,i,n,(t.subtreeFlags&10256)!==0||!1)),e&2048&&Ao(s,t);break;case 24:Mt(l,t,i,n),e&2048&&Mo(t.alternate,t);break;default:Mt(l,t,i,n)}}function yn(l,t,i,n,e){for(e=e&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=l,s=t,o=i,u=n,h=s.flags;switch(s.tag){case 0:case 11:case 15:yn(a,s,o,u,e),ae(8,s);break;case 23:break;case 22:var S=s.stateNode;s.memoizedState!==null?S._visibility&2?yn(a,s,o,u,e):oe(a,s):(S._visibility|=2,yn(a,s,o,u,e)),e&&h&2048&&Ao(s.alternate,s);break;case 24:yn(a,s,o,u,e),e&&h&2048&&Mo(s.alternate,s);break;default:yn(a,s,o,u,e)}t=t.sibling}}function oe(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=l,n=t,e=n.flags;switch(n.tag){case 22:oe(i,n),e&2048&&Ao(n.alternate,n);break;case 24:oe(i,n),e&2048&&Mo(n.alternate,n);break;default:oe(i,n)}t=t.sibling}}var re=8192;function vn(l,t,i){if(l.subtreeFlags&re)for(l=l.child;l!==null;)ag(l,t,i),l=l.sibling}function ag(l,t,i){switch(l.tag){case 26:vn(l,t,i),l.flags&re&&l.memoizedState!==null&&Id(i,At,l.memoizedState,l.memoizedProps);break;case 5:vn(l,t,i);break;case 3:case 4:var n=At;At=Ca(l.stateNode.containerInfo),vn(l,t,i),At=n;break;case 22:l.memoizedState===null&&(n=l.alternate,n!==null&&n.memoizedState!==null?(n=re,re=16777216,vn(l,t,i),re=n):vn(l,t,i));break;default:vn(l,t,i)}}function sg(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function ue(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];Yl=n,rg(n,l)}sg(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)og(l),l=l.sibling}function og(l){switch(l.tag){case 0:case 11:case 15:ue(l),l.flags&2048&&ci(9,l,l.return);break;case 3:ue(l);break;case 12:ue(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,ha(l)):ue(l);break;default:ue(l)}}function ha(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];Yl=n,rg(n,l)}sg(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:ci(8,t,t.return),ha(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,ha(t));break;default:ha(t)}l=l.sibling}}function rg(l,t){for(;Yl!==null;){var i=Yl;switch(i.tag){case 0:case 11:case 15:ci(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var n=i.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Vn(i.memoizedState.cache)}if(n=i.child,n!==null)n.return=i,Yl=n;else l:for(i=l;Yl!==null;){n=Yl;var e=n.sibling,a=n.return;if(Ic(n),n===i){Yl=null;break l}if(e!==null){e.return=a,Yl=e;break l}Yl=a}}}var pd={getCacheForType:function(l){var t=Gl(Dl),i=t.data.get(l);return i===void 0&&(i=l(),t.data.set(l,i)),i},cacheSignal:function(){return Gl(Dl).controller.signal}},dd=typeof WeakMap=="function"?WeakMap:Map,nl=0,pl=null,J=null,F=0,al=0,ct=null,gi=!1,bn=!1,Eo=!1,kt=0,jl=0,fi=0,Qi=0,Co=0,gt=0,Sn=0,ce=null,tt=null,Do=!1,ya=0,ug=0,va=1/0,ba=null,pi=null,Bl=0,di=null,_n=null,Jt=0,Oo=0,xo=null,cg=null,ge=0,No=null;function ft(){return(nl&2)!==0&&F!==0?F&-F:_.T!==null?Xo():Ar()}function gg(){if(gt===0)if((F&536870912)===0||ll){var l=Me;Me<<=1,(Me&3932160)===0&&(Me=262144),gt=l}else gt=536870912;return l=rt.current,l!==null&&(l.flags|=32),gt}function it(l,t,i){(l===pl&&(al===2||al===9)||l.cancelPendingCommit!==null)&&(wn(l,0),mi(l,F,gt,!1)),xn(l,i),((nl&2)===0||l!==pl)&&(l===pl&&((nl&2)===0&&(Qi|=i),jl===4&&mi(l,F,gt,!1)),Ot(l))}function fg(l,t,i){if((nl&6)!==0)throw Error(p(327));var n=!i&&(t&127)===0&&(t&l.expiredLanes)===0||On(l,t),e=n?yd(l,t):Bo(l,t,!0),a=n;do{if(e===0){bn&&!n&&mi(l,t,0,!1);break}else{if(i=l.current.alternate,a&&!md(i)){e=Bo(l,t,!1),a=!1;continue}if(e===2){if(a=t,l.errorRecoveryDisabledLanes&a)var s=0;else s=l.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;l:{var o=l;e=ce;var u=o.current.memoizedState.isDehydrated;if(u&&(wn(o,s).flags|=256),s=Bo(o,s,!1),s!==2){if(Eo&&!u){o.errorRecoveryDisabledLanes|=a,Qi|=a,e=4;break l}a=tt,tt=e,a!==null&&(tt===null?tt=a:tt.push.apply(tt,a))}e=s}if(a=!1,e!==2)continue}}if(e===1){wn(l,0),mi(l,t,0,!0);break}l:{switch(n=l,a=e,a){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:mi(n,t,gt,!gi);break l;case 2:tt=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(e=ya+300-nt(),10<e)){if(mi(n,t,gt,!gi),Ce(n,0,!0)!==0)break l;Jt=t,n.timeoutHandle=Qg(pg.bind(null,n,i,tt,ba,Do,t,gt,Qi,Sn,gi,a,"Throttled",-0,0),e);break l}pg(n,i,tt,ba,Do,t,gt,Qi,Sn,gi,a,null,-0,0)}}break}while(!0);Ot(l)}function pg(l,t,i,n,e,a,s,o,u,h,S,T,y,b){if(l.timeoutHandle=-1,T=t.subtreeFlags,T&8192||(T&16785408)===16785408){T={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},ag(t,a,T);var B=(a&62914560)===a?ya-nt():(a&4194048)===a?ug-nt():0;if(B=Pd(T,B),B!==null){Jt=a,l.cancelPendingCommit=B(_g.bind(null,l,t,a,i,n,e,s,o,u,S,T,null,y,b)),mi(l,a,s,!h);return}}_g(l,t,a,i,n,e,s,o,u)}function md(l){for(var t=l;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var n=0;n<i.length;n++){var e=i[n],a=e.getSnapshot;e=e.value;try{if(!st(a(),e))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mi(l,t,i,n){t&=~Co,t&=~Qi,l.suspendedLanes|=t,l.pingedLanes&=~t,n&&(l.warmLanes|=t),n=l.expirationTimes;for(var e=t;0<e;){var a=31-at(e),s=1<<a;n[a]=-1,e&=~s}i!==0&&zr(l,i,t)}function Sa(){return(nl&6)===0?(fe(0),!1):!0}function Uo(){if(J!==null){if(al===0)var l=J.return;else l=J,Yt=Ui=null,Js(l),fn=null,kn=0,l=J;for(;l!==null;)$c(l.alternate,l),l=l.return;J=null}}function wn(l,t){var i=l.timeoutHandle;i!==-1&&(l.timeoutHandle=-1,Bd(i)),i=l.cancelPendingCommit,i!==null&&(l.cancelPendingCommit=null,i()),Jt=0,Uo(),pl=l,J=i=Ht(l.current,null),F=t,al=0,ct=null,gi=!1,bn=On(l,t),Eo=!1,Sn=gt=Co=Qi=fi=jl=0,tt=ce=null,Do=!1,(t&8)!==0&&(t|=t&32);var n=l.entangledLanes;if(n!==0)for(l=l.entanglements,n&=t;0<n;){var e=31-at(n),a=1<<e;t|=l[e],n&=~a}return kt=t,Ge(),i}function dg(l,t){$=null,_.H=ie,t===gn||t===Je?(t=Du(),al=3):t===Rs?(t=Du(),al=4):al=t===go?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,J===null&&(jl=1,ua(l,yt(t,l.current)))}function mg(){var l=rt.current;return l===null?!0:(F&4194048)===F?_t===null:(F&62914560)===F||(F&536870912)!==0?l===_t:!1}function hg(){var l=_.H;return _.H=ie,l===null?ie:l}function yg(){var l=_.A;return _.A=pd,l}function _a(){jl=4,gi||(F&4194048)!==F&&rt.current!==null||(bn=!0),(fi&134217727)===0&&(Qi&134217727)===0||pl===null||mi(pl,F,gt,!1)}function Bo(l,t,i){var n=nl;nl|=2;var e=hg(),a=yg();(pl!==l||F!==t)&&(ba=null,wn(l,t)),t=!1;var s=jl;l:do try{if(al!==0&&J!==null){var o=J,u=ct;switch(al){case 8:Uo(),s=6;break l;case 3:case 2:case 9:case 6:rt.current===null&&(t=!0);var h=al;if(al=0,ct=null,zn(l,o,u,h),i&&bn){s=0;break l}break;default:h=al,al=0,ct=null,zn(l,o,u,h)}}hd(),s=jl;break}catch(S){dg(l,S)}while(!0);return t&&l.shellSuspendCounter++,Yt=Ui=null,nl=n,_.H=e,_.A=a,J===null&&(pl=null,F=0,Ge()),s}function hd(){for(;J!==null;)vg(J)}function yd(l,t){var i=nl;nl|=2;var n=hg(),e=yg();pl!==l||F!==t?(ba=null,va=nt()+500,wn(l,t)):bn=On(l,t);l:do try{if(al!==0&&J!==null){t=J;var a=ct;t:switch(al){case 1:al=0,ct=null,zn(l,t,a,1);break;case 2:case 9:if(Eu(a)){al=0,ct=null,bg(t);break}t=function(){al!==2&&al!==9||pl!==l||(al=7),Ot(l)},a.then(t,t);break l;case 3:al=7;break l;case 4:al=5;break l;case 7:Eu(a)?(al=0,ct=null,bg(t)):(al=0,ct=null,zn(l,t,a,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var o=J;if(s?af(s):o.stateNode.complete){al=0,ct=null;var u=o.sibling;if(u!==null)J=u;else{var h=o.return;h!==null?(J=h,wa(h)):J=null}break t}}al=0,ct=null,zn(l,t,a,5);break;case 6:al=0,ct=null,zn(l,t,a,6);break;case 8:Uo(),jl=6;break l;default:throw Error(p(462))}}vd();break}catch(S){dg(l,S)}while(!0);return Yt=Ui=null,_.H=n,_.A=e,nl=i,J!==null?0:(pl=null,F=0,Ge(),jl)}function vd(){for(;J!==null&&!Gf();)vg(J)}function vg(l){var t=Lc(l.alternate,l,kt);l.memoizedProps=l.pendingProps,t===null?wa(l):J=t}function bg(l){var t=l,i=t.alternate;switch(t.tag){case 15:case 0:t=Hc(i,t,t.pendingProps,t.type,void 0,F);break;case 11:t=Hc(i,t,t.pendingProps,t.type.render,t.ref,F);break;case 5:Js(t);default:$c(i,t),t=J=yu(t,kt),t=Lc(i,t,kt)}l.memoizedProps=l.pendingProps,t===null?wa(l):J=t}function zn(l,t,i,n){Yt=Ui=null,Js(t),fn=null,kn=0;var e=t.return;try{if(sd(l,e,t,i,F)){jl=1,ua(l,yt(i,l.current)),J=null;return}}catch(a){if(e!==null)throw J=e,a;jl=1,ua(l,yt(i,l.current)),J=null;return}t.flags&32768?(ll||n===1?l=!0:bn||(F&536870912)!==0?l=!1:(gi=l=!0,(n===2||n===9||n===3||n===6)&&(n=rt.current,n!==null&&n.tag===13&&(n.flags|=16384))),Sg(t,l)):wa(t)}function wa(l){var t=l;do{if((t.flags&32768)!==0){Sg(t,gi);return}l=t.return;var i=ud(t.alternate,t,kt);if(i!==null){J=i;return}if(t=t.sibling,t!==null){J=t;return}J=t=l}while(t!==null);jl===0&&(jl=5)}function Sg(l,t){do{var i=cd(l.alternate,l);if(i!==null){i.flags&=32767,J=i;return}if(i=l.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(l=l.sibling,l!==null)){J=l;return}J=l=i}while(l!==null);jl=6,J=null}function _g(l,t,i,n,e,a,s,o,u){l.cancelPendingCommit=null;do za();while(Bl!==0);if((nl&6)!==0)throw Error(p(327));if(t!==null){if(t===l.current)throw Error(p(177));if(a=t.lanes|t.childLanes,a|=ws,Ff(l,i,a,s,o,u),l===pl&&(J=pl=null,F=0),_n=t,di=l,Jt=i,Oo=a,xo=e,cg=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(l.callbackNode=null,l.callbackPriority=0,wd(je,function(){return Ag(),null})):(l.callbackNode=null,l.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null,e=E.p,E.p=2,s=nl,nl|=4;try{gd(l,t,i)}finally{nl=s,E.p=e,_.T=n}}Bl=1,wg(),zg(),Tg()}}function wg(){if(Bl===1){Bl=0;var l=di,t=_n,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=_.T,_.T=null;var n=E.p;E.p=2;var e=nl;nl|=4;try{ig(t,l);var a=Ko,s=ru(l.containerInfo),o=a.focusedElem,u=a.selectionRange;if(s!==o&&o&&o.ownerDocument&&ou(o.ownerDocument.documentElement,o)){if(u!==null&&ys(o)){var h=u.start,S=u.end;if(S===void 0&&(S=h),"selectionStart"in o)o.selectionStart=h,o.selectionEnd=Math.min(S,o.value.length);else{var T=o.ownerDocument||document,y=T&&T.defaultView||window;if(y.getSelection){var b=y.getSelection(),B=o.textContent.length,q=Math.min(u.start,B),gl=u.end===void 0?q:Math.min(u.end,B);!b.extend&&q>gl&&(s=gl,gl=q,q=s);var f=su(o,q),c=su(o,gl);if(f&&c&&(b.rangeCount!==1||b.anchorNode!==f.node||b.anchorOffset!==f.offset||b.focusNode!==c.node||b.focusOffset!==c.offset)){var m=T.createRange();m.setStart(f.node,f.offset),b.removeAllRanges(),q>gl?(b.addRange(m),b.extend(c.node,c.offset)):(m.setEnd(c.node,c.offset),b.addRange(m))}}}}for(T=[],b=o;b=b.parentNode;)b.nodeType===1&&T.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<T.length;o++){var w=T[o];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}Ba=!!Vo,Ko=Vo=null}finally{nl=e,E.p=n,_.T=i}}l.current=t,Bl=2}}function zg(){if(Bl===2){Bl=0;var l=di,t=_n,i=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||i){i=_.T,_.T=null;var n=E.p;E.p=2;var e=nl;nl|=4;try{Fc(l,t.alternate,t)}finally{nl=e,E.p=n,_.T=i}}Bl=3}}function Tg(){if(Bl===4||Bl===3){Bl=0,Lf();var l=di,t=_n,i=Jt,n=cg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Bl=5:(Bl=0,_n=di=null,jg(l,l.pendingLanes));var e=l.pendingLanes;if(e===0&&(pi=null),Ia(i),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Dn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=_.T,e=E.p,E.p=2,_.T=null;try{for(var a=l.onRecoverableError,s=0;s<n.length;s++){var o=n[s];a(o.value,{componentStack:o.stack})}}finally{_.T=t,E.p=e}}(Jt&3)!==0&&za(),Ot(l),e=l.pendingLanes,(i&261930)!==0&&(e&42)!==0?l===No?ge++:(ge=0,No=l):ge=0,fe(0)}}function jg(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Vn(t)))}function za(){return wg(),zg(),Tg(),Ag()}function Ag(){if(Bl!==5)return!1;var l=di,t=Oo;Oo=0;var i=Ia(Jt),n=_.T,e=E.p;try{E.p=32>i?32:i,_.T=null,i=xo,xo=null;var a=di,s=Jt;if(Bl=0,_n=di=null,Jt=0,(nl&6)!==0)throw Error(p(331));var o=nl;if(nl|=4,og(a.current),eg(a,a.current,s,i),nl=o,fe(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Dn,a)}catch{}return!0}finally{E.p=e,_.T=n,jg(l,t)}}function Mg(l,t,i){t=yt(i,t),t=co(l.stateNode,t,2),l=oi(l,t,2),l!==null&&(xn(l,2),Ot(l))}function sl(l,t,i){if(l.tag===3)Mg(l,l,i);else for(;t!==null;){if(t.tag===3){Mg(t,l,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pi===null||!pi.has(n))){l=yt(i,l),i=Ec(2),n=oi(t,i,2),n!==null&&(Cc(i,n,t,l),xn(n,2),Ot(n));break}}t=t.return}}function Ho(l,t,i){var n=l.pingCache;if(n===null){n=l.pingCache=new dd;var e=new Set;n.set(t,e)}else e=n.get(t),e===void 0&&(e=new Set,n.set(t,e));e.has(i)||(Eo=!0,e.add(i),l=bd.bind(null,l,t,i),t.then(l,l))}function bd(l,t,i){var n=l.pingCache;n!==null&&n.delete(t),l.pingedLanes|=l.suspendedLanes&i,l.warmLanes&=~i,pl===l&&(F&i)===i&&(jl===4||jl===3&&(F&62914560)===F&&300>nt()-ya?(nl&2)===0&&wn(l,0):Co|=i,Sn===F&&(Sn=0)),Ot(l)}function Eg(l,t){t===0&&(t=wr()),l=Oi(l,t),l!==null&&(xn(l,t),Ot(l))}function Sd(l){var t=l.memoizedState,i=0;t!==null&&(i=t.retryLane),Eg(l,i)}function _d(l,t){var i=0;switch(l.tag){case 31:case 13:var n=l.stateNode,e=l.memoizedState;e!==null&&(i=e.retryLane);break;case 19:n=l.stateNode;break;case 22:n=l.stateNode._retryCache;break;default:throw Error(p(314))}n!==null&&n.delete(t),Eg(l,i)}function wd(l,t){return ka(l,t)}var Ta=null,Tn=null,Ro=!1,ja=!1,Yo=!1,hi=0;function Ot(l){l!==Tn&&l.next===null&&(Tn===null?Ta=Tn=l:Tn=Tn.next=l),ja=!0,Ro||(Ro=!0,Td())}function fe(l,t){if(!Yo&&ja){Yo=!0;do for(var i=!1,n=Ta;n!==null;){if(l!==0){var e=n.pendingLanes;if(e===0)var a=0;else{var s=n.suspendedLanes,o=n.pingedLanes;a=(1<<31-at(42|l)+1)-1,a&=e&~(s&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(i=!0,xg(n,a))}else a=F,a=Ce(n,n===pl?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(a&3)===0||On(n,a)||(i=!0,xg(n,a));n=n.next}while(i);Yo=!1}}function zd(){Cg()}function Cg(){ja=Ro=!1;var l=0;hi!==0&&Ud()&&(l=hi);for(var t=nt(),i=null,n=Ta;n!==null;){var e=n.next,a=Dg(n,t);a===0?(n.next=null,i===null?Ta=e:i.next=e,e===null&&(Tn=i)):(i=n,(l!==0||(a&3)!==0)&&(ja=!0)),n=e}Bl!==0&&Bl!==5||fe(l),hi!==0&&(hi=0)}function Dg(l,t){for(var i=l.suspendedLanes,n=l.pingedLanes,e=l.expirationTimes,a=l.pendingLanes&-62914561;0<a;){var s=31-at(a),o=1<<s,u=e[s];u===-1?((o&i)===0||(o&n)!==0)&&(e[s]=Wf(o,t)):u<=t&&(l.expiredLanes|=o),a&=~o}if(t=pl,i=F,i=Ce(l,l===t?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),n=l.callbackNode,i===0||l===t&&(al===2||al===9)||l.cancelPendingCommit!==null)return n!==null&&n!==null&&Ja(n),l.callbackNode=null,l.callbackPriority=0;if((i&3)===0||On(l,i)){if(t=i&-i,t===l.callbackPriority)return t;switch(n!==null&&Ja(n),Ia(i)){case 2:case 8:i=Sr;break;case 32:i=je;break;case 268435456:i=_r;break;default:i=je}return n=Og.bind(null,l),i=ka(i,n),l.callbackPriority=t,l.callbackNode=i,t}return n!==null&&n!==null&&Ja(n),l.callbackPriority=2,l.callbackNode=null,2}function Og(l,t){if(Bl!==0&&Bl!==5)return l.callbackNode=null,l.callbackPriority=0,null;var i=l.callbackNode;if(za()&&l.callbackNode!==i)return null;var n=F;return n=Ce(l,l===pl?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),n===0?null:(fg(l,n,t),Dg(l,nt()),l.callbackNode!=null&&l.callbackNode===i?Og.bind(null,l):null)}function xg(l,t){if(za())return null;fg(l,t,!0)}function Td(){Hd(function(){(nl&6)!==0?ka(br,zd):Cg()})}function Xo(){if(hi===0){var l=un;l===0&&(l=Ae,Ae<<=1,(Ae&261888)===0&&(Ae=256)),hi=l}return hi}function Ng(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Ne(""+l)}function Ug(l,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,l.id&&i.setAttribute("form",l.id),t.parentNode.insertBefore(i,t),l=new FormData(l),i.parentNode.removeChild(i),l}function jd(l,t,i,n,e){if(t==="submit"&&i&&i.stateNode===e){var a=Ng((e[Wl]||null).action),s=n.submitter;s&&(t=(t=s[Wl]||null)?Ng(t.formAction):s.getAttribute("formAction"),t!==null&&(a=t,s=null));var o=new Re("action","action",null,n,e);l.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(hi!==0){var u=s?Ug(e,s):new FormData(e);eo(i,{pending:!0,data:u,method:e.method,action:a},null,u)}}else typeof a=="function"&&(o.preventDefault(),u=s?Ug(e,s):new FormData(e),eo(i,{pending:!0,data:u,method:e.method,action:a},a,u))},currentTarget:e}]})}}for(var qo=0;qo<_s.length;qo++){var Go=_s[qo],Ad=Go.toLowerCase(),Md=Go[0].toUpperCase()+Go.slice(1);jt(Ad,"on"+Md)}jt(gu,"onAnimationEnd"),jt(fu,"onAnimationIteration"),jt(pu,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(Qp,"onTransitionRun"),jt($p,"onTransitionStart"),jt(Zp,"onTransitionCancel"),jt(du,"onTransitionEnd"),ki("onMouseEnter",["mouseout","mouseover"]),ki("onMouseLeave",["mouseout","mouseover"]),ki("onPointerEnter",["pointerout","pointerover"]),ki("onPointerLeave",["pointerout","pointerover"]),Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ed=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pe));function Bg(l,t){t=(t&4)!==0;for(var i=0;i<l.length;i++){var n=l[i],e=n.event;n=n.listeners;l:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,h=o.currentTarget;if(o=o.listener,u!==a&&e.isPropagationStopped())break l;a=o,e.currentTarget=h;try{a(e)}catch(S){qe(S)}e.currentTarget=null,a=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,h=o.currentTarget,o=o.listener,u!==a&&e.isPropagationStopped())break l;a=o,e.currentTarget=h;try{a(e)}catch(S){qe(S)}e.currentTarget=null,a=u}}}}function W(l,t){var i=t[Pa];i===void 0&&(i=t[Pa]=new Set);var n=l+"__bubble";i.has(n)||(Hg(t,l,2,!1),i.add(n))}function Lo(l,t,i){var n=0;t&&(n|=4),Hg(i,l,n,t)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function Qo(l){if(!l[Aa]){l[Aa]=!0,Cr.forEach(function(i){i!=="selectionchange"&&(Ed.has(i)||Lo(i,!1,l),Lo(i,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[Aa]||(t[Aa]=!0,Lo("selectionchange",!1,t))}}function Hg(l,t,i,n){switch(ff(t)){case 2:var e=im;break;case 8:e=nm;break;default:e=er}i=e.bind(null,t,i,l),e=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(e=!0),n?e!==void 0?l.addEventListener(t,i,{capture:!0,passive:e}):l.addEventListener(t,i,!0):e!==void 0?l.addEventListener(t,i,{passive:e}):l.addEventListener(t,i,!1)}function $o(l,t,i,n,e){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)l:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===e)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===e)return;s=s.return}for(;o!==null;){if(s=Zi(o),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){n=a=s;continue l}o=o.parentNode}}n=n.return}Gr(function(){var h=a,S=ss(i),T=[];l:{var y=mu.get(l);if(y!==void 0){var b=Re,B=l;switch(l){case"keypress":if(Be(i)===0)break l;case"keydown":case"keyup":b=_p;break;case"focusin":B="focus",b=fs;break;case"focusout":B="blur",b=fs;break;case"beforeblur":case"afterblur":b=fs;break;case"click":if(i.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=$r;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=up;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Tp;break;case gu:case fu:case pu:b=fp;break;case du:b=Ap;break;case"scroll":case"scrollend":b=op;break;case"wheel":b=Ep;break;case"copy":case"cut":case"paste":b=dp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=Vr;break;case"toggle":case"beforetoggle":b=Dp}var q=(t&4)!==0,gl=!q&&(l==="scroll"||l==="scrollend"),f=q?y!==null?y+"Capture":null:y;q=[];for(var c=h,m;c!==null;){var w=c;if(m=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||m===null||f===null||(w=Bn(c,f),w!=null&&q.push(de(c,w,m))),gl)break;c=c.return}0<q.length&&(y=new b(y,B,null,i,S),T.push({event:y,listeners:q}))}}if((t&7)===0){l:{if(y=l==="mouseover"||l==="pointerover",b=l==="mouseout"||l==="pointerout",y&&i!==as&&(B=i.relatedTarget||i.fromElement)&&(Zi(B)||B[$i]))break l;if((b||y)&&(y=S.window===S?S:(y=S.ownerDocument)?y.defaultView||y.parentWindow:window,b?(B=i.relatedTarget||i.toElement,b=h,B=B?Zi(B):null,B!==null&&(gl=x(B),q=B.tag,B!==gl||q!==5&&q!==27&&q!==6)&&(B=null)):(b=null,B=h),b!==B)){if(q=$r,w="onMouseLeave",f="onMouseEnter",c="mouse",(l==="pointerout"||l==="pointerover")&&(q=Vr,w="onPointerLeave",f="onPointerEnter",c="pointer"),gl=b==null?y:Un(b),m=B==null?y:Un(B),y=new q(w,c+"leave",b,i,S),y.target=gl,y.relatedTarget=m,w=null,Zi(S)===h&&(q=new q(f,c+"enter",B,i,S),q.target=m,q.relatedTarget=gl,w=q),gl=w,b&&B)t:{for(q=Cd,f=b,c=B,m=0,w=f;w;w=q(w))m++;w=0;for(var X=c;X;X=q(X))w++;for(;0<m-w;)f=q(f),m--;for(;0<w-m;)c=q(c),w--;for(;m--;){if(f===c||c!==null&&f===c.alternate){q=f;break t}f=q(f),c=q(c)}q=null}else q=null;b!==null&&Rg(T,y,b,q,!1),B!==null&&gl!==null&&Rg(T,gl,B,q,!0)}}l:{if(y=h?Un(h):window,b=y.nodeName&&y.nodeName.toLowerCase(),b==="select"||b==="input"&&y.type==="file")var tl=lu;else if(Ir(y))if(tu)tl=qp;else{tl=Yp;var R=Rp}else b=y.nodeName,!b||b.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&es(h.elementType)&&(tl=lu):tl=Xp;if(tl&&(tl=tl(l,h))){Pr(T,tl,i,S);break l}R&&R(l,y,h),l==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&ns(y,"number",y.value)}switch(R=h?Un(h):window,l){case"focusin":(Ir(R)||R.contentEditable==="true")&&(ln=R,vs=h,Qn=null);break;case"focusout":Qn=vs=ln=null;break;case"mousedown":bs=!0;break;case"contextmenu":case"mouseup":case"dragend":bs=!1,uu(T,i,S);break;case"selectionchange":if(Lp)break;case"keydown":case"keyup":uu(T,i,S)}var Z;if(ds)l:{switch(l){case"compositionstart":var I="onCompositionStart";break l;case"compositionend":I="onCompositionEnd";break l;case"compositionupdate":I="onCompositionUpdate";break l}I=void 0}else Pi?Wr(l,i)&&(I="onCompositionEnd"):l==="keydown"&&i.keyCode===229&&(I="onCompositionStart");I&&(Kr&&i.locale!=="ko"&&(Pi||I!=="onCompositionStart"?I==="onCompositionEnd"&&Pi&&(Z=Lr()):(li=S,us="value"in li?li.value:li.textContent,Pi=!0)),R=Ma(h,I),0<R.length&&(I=new Zr(I,l,null,i,S),T.push({event:I,listeners:R}),Z?I.data=Z:(Z=Fr(i),Z!==null&&(I.data=Z)))),(Z=xp?Np(l,i):Up(l,i))&&(I=Ma(h,"onBeforeInput"),0<I.length&&(R=new Zr("onBeforeInput","beforeinput",null,i,S),T.push({event:R,listeners:I}),R.data=Z)),jd(T,l,h,i,S)}Bg(T,t)})}function de(l,t,i){return{instance:l,listener:t,currentTarget:i}}function Ma(l,t){for(var i=t+"Capture",n=[];l!==null;){var e=l,a=e.stateNode;if(e=e.tag,e!==5&&e!==26&&e!==27||a===null||(e=Bn(l,i),e!=null&&n.unshift(de(l,e,a)),e=Bn(l,t),e!=null&&n.push(de(l,e,a))),l.tag===3)return n;l=l.return}return[]}function Cd(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Rg(l,t,i,n,e){for(var a=t._reactName,s=[];i!==null&&i!==n;){var o=i,u=o.alternate,h=o.stateNode;if(o=o.tag,u!==null&&u===n)break;o!==5&&o!==26&&o!==27||h===null||(u=h,e?(h=Bn(i,a),h!=null&&s.unshift(de(i,h,u))):e||(h=Bn(i,a),h!=null&&s.push(de(i,h,u)))),i=i.return}s.length!==0&&l.push({event:t,listeners:s})}var Dd=/\r\n?/g,Od=/\u0000|\uFFFD/g;function Yg(l){return(typeof l=="string"?l:""+l).replace(Dd,`
`).replace(Od,"")}function Xg(l,t){return t=Yg(t),Yg(l)===t}function cl(l,t,i,n,e,a){switch(i){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Wi(l,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Wi(l,""+n);break;case"className":Oe(l,"class",n);break;case"tabIndex":Oe(l,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Oe(l,i,n);break;case"style":Xr(l,n,a);break;case"data":if(t!=="object"){Oe(l,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||i!=="href")){l.removeAttribute(i);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){l.removeAttribute(i);break}n=Ne(""+n),l.setAttribute(i,n);break;case"action":case"formAction":if(typeof n=="function"){l.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(i==="formAction"?(t!=="input"&&cl(l,t,"name",e.name,e,null),cl(l,t,"formEncType",e.formEncType,e,null),cl(l,t,"formMethod",e.formMethod,e,null),cl(l,t,"formTarget",e.formTarget,e,null)):(cl(l,t,"encType",e.encType,e,null),cl(l,t,"method",e.method,e,null),cl(l,t,"target",e.target,e,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){l.removeAttribute(i);break}n=Ne(""+n),l.setAttribute(i,n);break;case"onClick":n!=null&&(l.onclick=Ut);break;case"onScroll":n!=null&&W("scroll",l);break;case"onScrollEnd":n!=null&&W("scrollend",l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(i=n.__html,i!=null){if(e.children!=null)throw Error(p(60));l.innerHTML=i}}break;case"multiple":l.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":l.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){l.removeAttribute("xlink:href");break}i=Ne(""+n),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(i,""+n):l.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(i,""):l.removeAttribute(i);break;case"capture":case"download":n===!0?l.setAttribute(i,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?l.setAttribute(i,n):l.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?l.setAttribute(i,n):l.removeAttribute(i);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?l.removeAttribute(i):l.setAttribute(i,n);break;case"popover":W("beforetoggle",l),W("toggle",l),De(l,"popover",n);break;case"xlinkActuate":Nt(l,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Nt(l,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Nt(l,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Nt(l,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Nt(l,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Nt(l,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Nt(l,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":De(l,"is",n);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ap.get(i)||i,De(l,i,n))}}function Zo(l,t,i,n,e,a){switch(i){case"style":Xr(l,n,a);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(p(61));if(i=n.__html,i!=null){if(e.children!=null)throw Error(p(60));l.innerHTML=i}}break;case"children":typeof n=="string"?Wi(l,n):(typeof n=="number"||typeof n=="bigint")&&Wi(l,""+n);break;case"onScroll":n!=null&&W("scroll",l);break;case"onScrollEnd":n!=null&&W("scrollend",l);break;case"onClick":n!=null&&(l.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dr.hasOwnProperty(i))l:{if(i[0]==="o"&&i[1]==="n"&&(e=i.endsWith("Capture"),t=i.slice(2,e?i.length-7:void 0),a=l[Wl]||null,a=a!=null?a[i]:null,typeof a=="function"&&l.removeEventListener(t,a,e),typeof n=="function")){typeof a!="function"&&a!==null&&(i in l?l[i]=null:l.hasAttribute(i)&&l.removeAttribute(i)),l.addEventListener(t,n,e);break l}i in l?l[i]=n:n===!0?l.setAttribute(i,""):De(l,i,n)}}}function Ql(l,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",l),W("load",l);var n=!1,e=!1,a;for(a in i)if(i.hasOwnProperty(a)){var s=i[a];if(s!=null)switch(a){case"src":n=!0;break;case"srcSet":e=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:cl(l,t,a,s,i,null)}}e&&cl(l,t,"srcSet",i.srcSet,i,null),n&&cl(l,t,"src",i.src,i,null);return;case"input":W("invalid",l);var o=a=s=e=null,u=null,h=null;for(n in i)if(i.hasOwnProperty(n)){var S=i[n];if(S!=null)switch(n){case"name":e=S;break;case"type":s=S;break;case"checked":u=S;break;case"defaultChecked":h=S;break;case"value":a=S;break;case"defaultValue":o=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(p(137,t));break;default:cl(l,t,n,S,i,null)}}Br(l,a,o,u,h,s,e,!1);return;case"select":W("invalid",l),n=s=a=null;for(e in i)if(i.hasOwnProperty(e)&&(o=i[e],o!=null))switch(e){case"value":a=o;break;case"defaultValue":s=o;break;case"multiple":n=o;default:cl(l,t,e,o,i,null)}t=a,i=s,l.multiple=!!n,t!=null?Ji(l,!!n,t,!1):i!=null&&Ji(l,!!n,i,!0);return;case"textarea":W("invalid",l),a=e=n=null;for(s in i)if(i.hasOwnProperty(s)&&(o=i[s],o!=null))switch(s){case"value":n=o;break;case"defaultValue":e=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(p(91));break;default:cl(l,t,s,o,i,null)}Rr(l,n,e,a);return;case"option":for(u in i)if(i.hasOwnProperty(u)&&(n=i[u],n!=null))switch(u){case"selected":l.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:cl(l,t,u,n,i,null)}return;case"dialog":W("beforetoggle",l),W("toggle",l),W("cancel",l),W("close",l);break;case"iframe":case"object":W("load",l);break;case"video":case"audio":for(n=0;n<pe.length;n++)W(pe[n],l);break;case"image":W("error",l),W("load",l);break;case"details":W("toggle",l);break;case"embed":case"source":case"link":W("error",l),W("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in i)if(i.hasOwnProperty(h)&&(n=i[h],n!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:cl(l,t,h,n,i,null)}return;default:if(es(t)){for(S in i)i.hasOwnProperty(S)&&(n=i[S],n!==void 0&&Zo(l,t,S,n,i,void 0));return}}for(o in i)i.hasOwnProperty(o)&&(n=i[o],n!=null&&cl(l,t,o,n,i,null))}function xd(l,t,i,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var e=null,a=null,s=null,o=null,u=null,h=null,S=null;for(b in i){var T=i[b];if(i.hasOwnProperty(b)&&T!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":u=T;default:n.hasOwnProperty(b)||cl(l,t,b,null,n,T)}}for(var y in n){var b=n[y];if(T=i[y],n.hasOwnProperty(y)&&(b!=null||T!=null))switch(y){case"type":a=b;break;case"name":e=b;break;case"checked":h=b;break;case"defaultChecked":S=b;break;case"value":s=b;break;case"defaultValue":o=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(p(137,t));break;default:b!==T&&cl(l,t,y,b,n,T)}}is(l,s,o,u,h,S,a,e);return;case"select":b=s=o=y=null;for(a in i)if(u=i[a],i.hasOwnProperty(a)&&u!=null)switch(a){case"value":break;case"multiple":b=u;default:n.hasOwnProperty(a)||cl(l,t,a,null,n,u)}for(e in n)if(a=n[e],u=i[e],n.hasOwnProperty(e)&&(a!=null||u!=null))switch(e){case"value":y=a;break;case"defaultValue":o=a;break;case"multiple":s=a;default:a!==u&&cl(l,t,e,a,n,u)}t=o,i=s,n=b,y!=null?Ji(l,!!i,y,!1):!!n!=!!i&&(t!=null?Ji(l,!!i,t,!0):Ji(l,!!i,i?[]:"",!1));return;case"textarea":b=y=null;for(o in i)if(e=i[o],i.hasOwnProperty(o)&&e!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:cl(l,t,o,null,n,e)}for(s in n)if(e=n[s],a=i[s],n.hasOwnProperty(s)&&(e!=null||a!=null))switch(s){case"value":y=e;break;case"defaultValue":b=e;break;case"children":break;case"dangerouslySetInnerHTML":if(e!=null)throw Error(p(91));break;default:e!==a&&cl(l,t,s,e,n,a)}Hr(l,y,b);return;case"option":for(var B in i)if(y=i[B],i.hasOwnProperty(B)&&y!=null&&!n.hasOwnProperty(B))switch(B){case"selected":l.selected=!1;break;default:cl(l,t,B,null,n,y)}for(u in n)if(y=n[u],b=i[u],n.hasOwnProperty(u)&&y!==b&&(y!=null||b!=null))switch(u){case"selected":l.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:cl(l,t,u,y,n,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in i)y=i[q],i.hasOwnProperty(q)&&y!=null&&!n.hasOwnProperty(q)&&cl(l,t,q,null,n,y);for(h in n)if(y=n[h],b=i[h],n.hasOwnProperty(h)&&y!==b&&(y!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(p(137,t));break;default:cl(l,t,h,y,n,b)}return;default:if(es(t)){for(var gl in i)y=i[gl],i.hasOwnProperty(gl)&&y!==void 0&&!n.hasOwnProperty(gl)&&Zo(l,t,gl,void 0,n,y);for(S in n)y=n[S],b=i[S],!n.hasOwnProperty(S)||y===b||y===void 0&&b===void 0||Zo(l,t,S,y,n,b);return}}for(var f in i)y=i[f],i.hasOwnProperty(f)&&y!=null&&!n.hasOwnProperty(f)&&cl(l,t,f,null,n,y);for(T in n)y=n[T],b=i[T],!n.hasOwnProperty(T)||y===b||y==null&&b==null||cl(l,t,T,y,n,b)}function qg(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nd(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,i=performance.getEntriesByType("resource"),n=0;n<i.length;n++){var e=i[n],a=e.transferSize,s=e.initiatorType,o=e.duration;if(a&&o&&qg(s)){for(s=0,o=e.responseEnd,n+=1;n<i.length;n++){var u=i[n],h=u.startTime;if(h>o)break;var S=u.transferSize,T=u.initiatorType;S&&qg(T)&&(u=u.responseEnd,s+=S*(u<o?1:(o-h)/(u-h)))}if(--n,t+=8*(a+s)/(e.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Vo=null,Ko=null;function Ea(l){return l.nodeType===9?l:l.ownerDocument}function Gg(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Lg(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function ko(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jo=null;function Ud(){var l=window.event;return l&&l.type==="popstate"?l===Jo?!1:(Jo=l,!0):(Jo=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,Bd=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(l){return $g.resolve(null).then(l).catch(Rd)}:Qg;function Rd(l){setTimeout(function(){throw l})}function yi(l){return l==="head"}function Zg(l,t){var i=t,n=0;do{var e=i.nextSibling;if(l.removeChild(i),e&&e.nodeType===8)if(i=e.data,i==="/$"||i==="/&"){if(n===0){l.removeChild(e),En(t);return}n--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")n++;else if(i==="html")me(l.ownerDocument.documentElement);else if(i==="head"){i=l.ownerDocument.head,me(i);for(var a=i.firstChild;a;){var s=a.nextSibling,o=a.nodeName;a[Nn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||i.removeChild(a),a=s}}else i==="body"&&me(l.ownerDocument.body);i=e}while(i);En(t)}function Vg(l,t){var i=l;l=0;do{var n=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(l===0)break;l--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||l++;i=n}while(i)}function Wo(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Wo(i),ls(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}l.removeChild(i)}}function Yd(l,t,i,n){for(;l.nodeType===1;){var e=i;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(n){if(!l[Nn])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(a=l.getAttribute("rel"),a==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(a!==e.rel||l.getAttribute("href")!==(e.href==null||e.href===""?null:e.href)||l.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin)||l.getAttribute("title")!==(e.title==null?null:e.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(a=l.getAttribute("src"),(a!==(e.src==null?null:e.src)||l.getAttribute("type")!==(e.type==null?null:e.type)||l.getAttribute("crossorigin")!==(e.crossOrigin==null?null:e.crossOrigin))&&a&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var a=e.name==null?null:""+e.name;if(e.type==="hidden"&&l.getAttribute("name")===a)return l}else return l;if(l=wt(l.nextSibling),l===null)break}return null}function Xd(l,t,i){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!i||(l=wt(l.nextSibling),l===null))return null;return l}function Kg(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=wt(l.nextSibling),l===null))return null;return l}function Fo(l){return l.data==="$?"||l.data==="$~"}function Io(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function qd(l,t){var i=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||i.readyState!=="loading")t();else{var n=function(){t(),i.removeEventListener("DOMContentLoaded",n)};i.addEventListener("DOMContentLoaded",n),l._reactRetry=n}}function wt(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Po=null;function kg(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var i=l.data;if(i==="/$"||i==="/&"){if(t===0)return wt(l.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}l=l.nextSibling}return null}function Jg(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var i=l.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return l;t--}else i!=="/$"&&i!=="/&"||t++}l=l.previousSibling}return null}function Wg(l,t,i){switch(t=Ea(i),l){case"html":if(l=t.documentElement,!l)throw Error(p(452));return l;case"head":if(l=t.head,!l)throw Error(p(453));return l;case"body":if(l=t.body,!l)throw Error(p(454));return l;default:throw Error(p(451))}}function me(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);ls(l)}var zt=new Map,Fg=new Set;function Ca(l){return typeof l.getRootNode=="function"?l.getRootNode():l.nodeType===9?l:l.ownerDocument}var Wt=E.d;E.d={f:Gd,r:Ld,D:Qd,C:$d,L:Zd,m:Vd,X:kd,S:Kd,M:Jd};function Gd(){var l=Wt.f(),t=Sa();return l||t}function Ld(l){var t=Vi(l);t!==null&&t.tag===5&&t.type==="form"?dc(t):Wt.r(l)}var jn=typeof document>"u"?null:document;function Ig(l,t,i){var n=jn;if(n&&typeof t=="string"&&t){var e=mt(t);e='link[rel="'+l+'"][href="'+e+'"]',typeof i=="string"&&(e+='[crossorigin="'+i+'"]'),Fg.has(e)||(Fg.add(e),l={rel:l,crossOrigin:i,href:t},n.querySelector(e)===null&&(t=n.createElement("link"),Ql(t,"link",l),Rl(t),n.head.appendChild(t)))}}function Qd(l){Wt.D(l),Ig("dns-prefetch",l,null)}function $d(l,t){Wt.C(l,t),Ig("preconnect",l,t)}function Zd(l,t,i){Wt.L(l,t,i);var n=jn;if(n&&l&&t){var e='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&i&&i.imageSrcSet?(e+='[imagesrcset="'+mt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(e+='[imagesizes="'+mt(i.imageSizes)+'"]')):e+='[href="'+mt(l)+'"]';var a=e;switch(t){case"style":a=An(l);break;case"script":a=Mn(l)}zt.has(a)||(l=N({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:l,as:t},i),zt.set(a,l),n.querySelector(e)!==null||t==="style"&&n.querySelector(he(a))||t==="script"&&n.querySelector(ye(a))||(t=n.createElement("link"),Ql(t,"link",l),Rl(t),n.head.appendChild(t)))}}function Vd(l,t){Wt.m(l,t);var i=jn;if(i&&l){var n=t&&typeof t.as=="string"?t.as:"script",e='link[rel="modulepreload"][as="'+mt(n)+'"][href="'+mt(l)+'"]',a=e;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Mn(l)}if(!zt.has(a)&&(l=N({rel:"modulepreload",href:l},t),zt.set(a,l),i.querySelector(e)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(ye(a)))return}n=i.createElement("link"),Ql(n,"link",l),Rl(n),i.head.appendChild(n)}}}function Kd(l,t,i){Wt.S(l,t,i);var n=jn;if(n&&l){var e=Ki(n).hoistableStyles,a=An(l);t=t||"default";var s=e.get(a);if(!s){var o={loading:0,preload:null};if(s=n.querySelector(he(a)))o.loading=5;else{l=N({rel:"stylesheet",href:l,"data-precedence":t},i),(i=zt.get(a))&&lr(l,i);var u=s=n.createElement("link");Rl(u),Ql(u,"link",l),u._p=new Promise(function(h,S){u.onload=h,u.onerror=S}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Da(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:o},e.set(a,s)}}}function kd(l,t){Wt.X(l,t);var i=jn;if(i&&l){var n=Ki(i).hoistableScripts,e=Mn(l),a=n.get(e);a||(a=i.querySelector(ye(e)),a||(l=N({src:l,async:!0},t),(t=zt.get(e))&&tr(l,t),a=i.createElement("script"),Rl(a),Ql(a,"link",l),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},n.set(e,a))}}function Jd(l,t){Wt.M(l,t);var i=jn;if(i&&l){var n=Ki(i).hoistableScripts,e=Mn(l),a=n.get(e);a||(a=i.querySelector(ye(e)),a||(l=N({src:l,async:!0,type:"module"},t),(t=zt.get(e))&&tr(l,t),a=i.createElement("script"),Rl(a),Ql(a,"link",l),i.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},n.set(e,a))}}function Pg(l,t,i,n){var e=(e=k.current)?Ca(e):null;if(!e)throw Error(p(446));switch(l){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=An(i.href),i=Ki(e).hoistableStyles,n=i.get(t),n||(n={type:"style",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){l=An(i.href);var a=Ki(e).hoistableStyles,s=a.get(l);if(s||(e=e.ownerDocument||e,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(l,s),(a=e.querySelector(he(l)))&&!a._p&&(s.instance=a,s.state.loading=5),zt.has(l)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},zt.set(l,i),a||Wd(e,l,i,s.state))),t&&n===null)throw Error(p(528,""));return s}if(t&&n!==null)throw Error(p(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Mn(i),i=Ki(e).hoistableScripts,n=i.get(t),n||(n={type:"script",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,l))}}function An(l){return'href="'+mt(l)+'"'}function he(l){return'link[rel="stylesheet"]['+l+"]"}function lf(l){return N({},l,{"data-precedence":l.precedence,precedence:null})}function Wd(l,t,i,n){l.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=l.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ql(t,"link",i),Rl(t),l.head.appendChild(t))}function Mn(l){return'[src="'+mt(l)+'"]'}function ye(l){return"script[async]"+l}function tf(l,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var n=l.querySelector('style[data-href~="'+mt(i.href)+'"]');if(n)return t.instance=n,Rl(n),n;var e=N({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return n=(l.ownerDocument||l).createElement("style"),Rl(n),Ql(n,"style",e),Da(n,i.precedence,l),t.instance=n;case"stylesheet":e=An(i.href);var a=l.querySelector(he(e));if(a)return t.state.loading|=4,t.instance=a,Rl(a),a;n=lf(i),(e=zt.get(e))&&lr(n,e),a=(l.ownerDocument||l).createElement("link"),Rl(a);var s=a;return s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),Ql(a,"link",n),t.state.loading|=4,Da(a,i.precedence,l),t.instance=a;case"script":return a=Mn(i.src),(e=l.querySelector(ye(a)))?(t.instance=e,Rl(e),e):(n=i,(e=zt.get(a))&&(n=N({},i),tr(n,e)),l=l.ownerDocument||l,e=l.createElement("script"),Rl(e),Ql(e,"link",n),l.head.appendChild(e),t.instance=e);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Da(n,i.precedence,l));return t.instance}function Da(l,t,i){for(var n=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),e=n.length?n[n.length-1]:null,a=e,s=0;s<n.length;s++){var o=n[s];if(o.dataset.precedence===t)a=o;else if(a!==e)break}a?a.parentNode.insertBefore(l,a.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(l,t.firstChild))}function lr(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function tr(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Oa=null;function nf(l,t,i){if(Oa===null){var n=new Map,e=Oa=new Map;e.set(i,n)}else e=Oa,n=e.get(i),n||(n=new Map,e.set(i,n));if(n.has(l))return n;for(n.set(l,null),i=i.getElementsByTagName(l),e=0;e<i.length;e++){var a=i[e];if(!(a[Nn]||a[Xl]||l==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var s=a.getAttribute(t)||"";s=l+s;var o=n.get(s);o?o.push(a):n.set(s,[a])}}return n}function ef(l,t,i){l=l.ownerDocument||l,l.head.insertBefore(i,t==="title"?l.querySelector("head > title"):null)}function Fd(l,t,i){if(i===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return l=t.disabled,typeof t.precedence=="string"&&l==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function af(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function Id(l,t,i,n){if(i.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var e=An(n.href),a=t.querySelector(he(e));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=xa.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=a,Rl(a);return}a=t.ownerDocument||t,n=lf(n),(e=zt.get(e))&&lr(n,e),a=a.createElement("link"),Rl(a);var s=a;s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),Ql(a,"link",n),i.instance=a}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=xa.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}var ir=0;function Pd(l,t){return l.stylesheets&&l.count===0&&Ua(l,l.stylesheets),0<l.count||0<l.imgCount?function(i){var n=setTimeout(function(){if(l.stylesheets&&Ua(l,l.stylesheets),l.unsuspend){var a=l.unsuspend;l.unsuspend=null,a()}},6e4+t);0<l.imgBytes&&ir===0&&(ir=62500*Nd());var e=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&Ua(l,l.stylesheets),l.unsuspend)){var a=l.unsuspend;l.unsuspend=null,a()}},(l.imgBytes>ir?50:800)+t);return l.unsuspend=i,function(){l.unsuspend=null,clearTimeout(n),clearTimeout(e)}}:null}function xa(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ua(this,this.stylesheets);else if(this.unsuspend){var l=this.unsuspend;this.unsuspend=null,l()}}}var Na=null;function Ua(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,Na=new Map,t.forEach(lm,l),Na=null,xa.call(l))}function lm(l,t){if(!(t.state.loading&4)){var i=Na.get(l);if(i)var n=i.get(null);else{i=new Map,Na.set(l,i);for(var e=l.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<e.length;a++){var s=e[a];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(i.set(s.dataset.precedence,s),n=s)}n&&i.set(null,n)}e=t.instance,s=e.getAttribute("data-precedence"),a=i.get(s)||n,a===n&&i.set(null,e),i.set(s,e),this.count++,n=xa.bind(this),e.addEventListener("load",n),e.addEventListener("error",n),a?a.parentNode.insertBefore(e,a.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(e,l.firstChild)),t.state.loading|=4}}var ve={$$typeof:ol,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function tm(l,t,i,n,e,a,s,o,u){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.hiddenUpdates=Wa(null),this.identifierPrefix=n,this.onUncaughtError=e,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function sf(l,t,i,n,e,a,s,o,u,h,S,T){return l=new tm(l,t,i,s,u,h,S,T,o),t=1,a===!0&&(t|=24),a=ot(3,null,null,t),l.current=a,a.stateNode=l,t=Us(),t.refCount++,l.pooledCache=t,t.refCount++,a.memoizedState={element:n,isDehydrated:i,cache:t},Ys(a),l}function of(l){return l?(l=en,l):en}function rf(l,t,i,n,e,a){e=of(e),n.context===null?n.context=e:n.pendingContext=e,n=si(t),n.payload={element:i},a=a===void 0?null:a,a!==null&&(n.callback=a),i=oi(l,n,t),i!==null&&(it(i,l,t),Wn(i,l,t))}function uf(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var i=l.retryLane;l.retryLane=i!==0&&i<t?i:t}}function nr(l,t){uf(l,t),(l=l.alternate)&&uf(l,t)}function cf(l){if(l.tag===13||l.tag===31){var t=Oi(l,67108864);t!==null&&it(t,l,67108864),nr(l,67108864)}}function gf(l){if(l.tag===13||l.tag===31){var t=ft();t=Fa(t);var i=Oi(l,t);i!==null&&it(i,l,t),nr(l,t)}}var Ba=!0;function im(l,t,i,n){var e=_.T;_.T=null;var a=E.p;try{E.p=2,er(l,t,i,n)}finally{E.p=a,_.T=e}}function nm(l,t,i,n){var e=_.T;_.T=null;var a=E.p;try{E.p=8,er(l,t,i,n)}finally{E.p=a,_.T=e}}function er(l,t,i,n){if(Ba){var e=ar(n);if(e===null)$o(l,t,n,Ha,i),pf(l,n);else if(am(e,l,t,i,n))n.stopPropagation();else if(pf(l,n),t&4&&-1<em.indexOf(l)){for(;e!==null;){var a=Vi(e);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var s=Ai(a.pendingLanes);if(s!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var u=1<<31-at(s);o.entanglements[1]|=u,s&=~u}Ot(a),(nl&6)===0&&(va=nt()+500,fe(0))}}break;case 31:case 13:o=Oi(a,2),o!==null&&it(o,a,2),Sa(),nr(a,2)}if(a=ar(n),a===null&&$o(l,t,n,Ha,i),a===e)break;e=a}e!==null&&n.stopPropagation()}else $o(l,t,n,null,i)}}function ar(l){return l=ss(l),sr(l)}var Ha=null;function sr(l){if(Ha=null,l=Zi(l),l!==null){var t=x(l);if(t===null)l=null;else{var i=t.tag;if(i===13){if(l=Y(t),l!==null)return l;l=null}else if(i===31){if(l=P(t),l!==null)return l;l=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return Ha=l,null}function ff(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qf()){case br:return 2;case Sr:return 8;case je:case $f:return 32;case _r:return 268435456;default:return 32}default:return 32}}var or=!1,vi=null,bi=null,Si=null,be=new Map,Se=new Map,_i=[],em="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pf(l,t){switch(l){case"focusin":case"focusout":vi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":be.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Se.delete(t.pointerId)}}function _e(l,t,i,n,e,a){return l===null||l.nativeEvent!==a?(l={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:a,targetContainers:[e]},t!==null&&(t=Vi(t),t!==null&&cf(t)),l):(l.eventSystemFlags|=n,t=l.targetContainers,e!==null&&t.indexOf(e)===-1&&t.push(e),l)}function am(l,t,i,n,e){switch(t){case"focusin":return vi=_e(vi,l,t,i,n,e),!0;case"dragenter":return bi=_e(bi,l,t,i,n,e),!0;case"mouseover":return Si=_e(Si,l,t,i,n,e),!0;case"pointerover":var a=e.pointerId;return be.set(a,_e(be.get(a)||null,l,t,i,n,e)),!0;case"gotpointercapture":return a=e.pointerId,Se.set(a,_e(Se.get(a)||null,l,t,i,n,e)),!0}return!1}function df(l){var t=Zi(l.target);if(t!==null){var i=x(t);if(i!==null){if(t=i.tag,t===13){if(t=Y(i),t!==null){l.blockedOn=t,Mr(l.priority,function(){gf(i)});return}}else if(t===31){if(t=P(i),t!==null){l.blockedOn=t,Mr(l.priority,function(){gf(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){l.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Ra(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var i=ar(l.nativeEvent);if(i===null){i=l.nativeEvent;var n=new i.constructor(i.type,i);as=n,i.target.dispatchEvent(n),as=null}else return t=Vi(i),t!==null&&cf(t),l.blockedOn=i,!1;t.shift()}return!0}function mf(l,t,i){Ra(l)&&i.delete(t)}function sm(){or=!1,vi!==null&&Ra(vi)&&(vi=null),bi!==null&&Ra(bi)&&(bi=null),Si!==null&&Ra(Si)&&(Si=null),be.forEach(mf),Se.forEach(mf)}function Ya(l,t){l.blockedOn===t&&(l.blockedOn=null,or||(or=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,sm)))}var Xa=null;function hf(l){Xa!==l&&(Xa=l,v.unstable_scheduleCallback(v.unstable_NormalPriority,function(){Xa===l&&(Xa=null);for(var t=0;t<l.length;t+=3){var i=l[t],n=l[t+1],e=l[t+2];if(typeof n!="function"){if(sr(n||i)===null)continue;break}var a=Vi(i);a!==null&&(l.splice(t,3),t-=3,eo(a,{pending:!0,data:e,method:i.method,action:n},n,e))}}))}function En(l){function t(u){return Ya(u,l)}vi!==null&&Ya(vi,l),bi!==null&&Ya(bi,l),Si!==null&&Ya(Si,l),be.forEach(t),Se.forEach(t);for(var i=0;i<_i.length;i++){var n=_i[i];n.blockedOn===l&&(n.blockedOn=null)}for(;0<_i.length&&(i=_i[0],i.blockedOn===null);)df(i),i.blockedOn===null&&_i.shift();if(i=(l.ownerDocument||l).$$reactFormReplay,i!=null)for(n=0;n<i.length;n+=3){var e=i[n],a=i[n+1],s=e[Wl]||null;if(typeof a=="function")s||hf(i);else if(s){var o=null;if(a&&a.hasAttribute("formAction")){if(e=a,s=a[Wl]||null)o=s.formAction;else if(sr(e)!==null)continue}else o=s.action;typeof o=="function"?i[n+1]=o:(i.splice(n,3),n-=3),hf(i)}}}function yf(){function l(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(s){return e=s})},focusReset:"manual",scroll:"manual"})}function t(){e!==null&&(e(),e=null),n||setTimeout(i,20)}function i(){if(!n&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,e=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){n=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),e!==null&&(e(),e=null)}}}function rr(l){this._internalRoot=l}qa.prototype.render=rr.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(p(409));var i=t.current,n=ft();rf(i,n,l,t,null,null)},qa.prototype.unmount=rr.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;rf(l.current,2,null,l,null,null),Sa(),t[$i]=null}};function qa(l){this._internalRoot=l}qa.prototype.unstable_scheduleHydration=function(l){if(l){var t=Ar();l={blockedOn:null,target:l,priority:t};for(var i=0;i<_i.length&&t!==0&&t<_i[i].priority;i++);_i.splice(i,0,l),i===0&&df(l)}};var vf=M.version;if(vf!=="19.2.3")throw Error(p(527,vf,"19.2.3"));E.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(p(188)):(l=Object.keys(l).join(","),Error(p(268,l)));return l=z(t),l=l!==null?C(l):null,l=l===null?null:l.stateNode,l};var om={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ga.isDisabled&&Ga.supportsFiber)try{Dn=Ga.inject(om),et=Ga}catch{}}return ze.createRoot=function(l,t){if(!A(l))throw Error(p(299));var i=!1,n="",e=Tc,a=jc,s=Ac;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(e=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=sf(l,1,!1,null,null,i,n,null,e,a,s,yf),l[$i]=t.current,Qo(l),new rr(t)},ze.hydrateRoot=function(l,t,i){if(!A(l))throw Error(p(299));var n=!1,e="",a=Tc,s=jc,o=Ac,u=null;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(e=i.identifierPrefix),i.onUncaughtError!==void 0&&(a=i.onUncaughtError),i.onCaughtError!==void 0&&(s=i.onCaughtError),i.onRecoverableError!==void 0&&(o=i.onRecoverableError),i.formState!==void 0&&(u=i.formState)),t=sf(l,1,!0,t,i??null,n,e,u,a,s,o,yf),t.context=of(null),i=t.current,n=ft(),n=Fa(n),e=si(n),e.callback=null,oi(i,e,n),i=n,t.current.lanes=i,xn(t,i),Ot(t),l[$i]=t.current,Qo(l),new qa(t)},ze.version="19.2.3",ze}var Ef;function ym(){if(Ef)return gr.exports;Ef=1;function v(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(v)}catch(M){console.error(M)}}return v(),gr.exports=hm(),gr.exports}var vm=ym();const bm=v=>v.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sm=v=>v.replace(/^([A-Z])|[\s-_]+(\w)/g,(M,O,p)=>p?p.toUpperCase():O.toLowerCase()),Cf=v=>{const M=Sm(v);return M.charAt(0).toUpperCase()+M.slice(1)},Rf=(...v)=>v.filter((M,O,p)=>!!M&&M.trim()!==""&&p.indexOf(M)===O).join(" ").trim(),_m=v=>{for(const M in v)if(M.startsWith("aria-")||M==="role"||M==="title")return!0};var wm={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const zm=_l.forwardRef(({color:v="currentColor",size:M=24,strokeWidth:O=2,absoluteStrokeWidth:p,className:A="",children:x,iconNode:Y,...P},U)=>_l.createElement("svg",{ref:U,...wm,width:M,height:M,stroke:v,strokeWidth:p?Number(O)*24/Number(M):O,className:Rf("lucide",A),...!x&&!_m(P)&&{"aria-hidden":"true"},...P},[...Y.map(([z,C])=>_l.createElement(z,C)),...Array.isArray(x)?x:[x]]));const zi=(v,M)=>{const O=_l.forwardRef(({className:p,...A},x)=>_l.createElement(zm,{ref:x,iconNode:M,className:Rf(`lucide-${bm(Cf(v))}`,`lucide-${v}`,p),...A}));return O.displayName=Cf(v),O};const Tm=[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]],jm=zi("bird",Tm);const Am=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Mm=zi("circle",Am);const Em=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],Cm=zi("key",Em);const Dm=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Om=zi("music",Dm);const xm=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Nm=zi("star",xm);const Um=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Bm=zi("volume-2",Um);const Hm=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Rm=zi("volume-x",Hm);const Ym=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Yf=zi("x",Ym);function Xm({displayName:v,onConfirm:M,onCancel:O,onClose:p}){return d.jsx("div",{className:"modal-overlay",onClick:p,children:d.jsx("div",{className:"modal-content",onClick:A=>A.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:p,children:d.jsx(Yf,{size:24})}),d.jsxs("div",{style:{textAlign:"center"},children:[d.jsxs("p",{style:{margin:"10px 0"},children:["Есть ли сомнение, что ты ",d.jsxs("strong",{children:[v,"?"]})]}),d.jsxs("div",{style:{display:"flex",gap:"12px",flexDirection:"column"},children:[d.jsxs("button",{onClick:M,style:{padding:"12px 20px",background:"#d35400",color:"white",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:["Я передумала. Я не ",v]}),d.jsx("button",{onClick:O,style:{padding:"12px 20px",background:"#ecf0f1",color:"#333",border:"none",borderRadius:"8px",fontSize:"1em",cursor:"pointer",fontWeight:"500",maxWidth:"240px",alignSelf:"center"},children:"Никакого!"})]})]})]})})})}function Xf(){const v=localStorage.getItem("openedWindows");if(!v)return new Set;try{const M=JSON.parse(v);return new Set(M)}catch(M){return console.error("Failed to parse opened windows:",M),new Set}}function qm(v){const M=Xf();return M.add(v),localStorage.setItem("openedWindows",JSON.stringify([...M])),M}function Df(){localStorage.removeItem("openedWindows")}function Gm(){localStorage.removeItem("adventCalendarUser")}const Of=["Привет","Хорошего дня","Здравствуй","Добро пожаловать","Hey there","Good day","Howdy","Salutations","Hiya","Hey"];function Lm({userName:v,onUserSelect:M}){const[O]=_l.useState(()=>Of[Math.floor(Math.random()*Of.length)]),[p,A]=_l.useState(!1),x=v==="Tanya"?"Таня":v==="Zebra"?"Зёбра":"неведомый гость",Y=()=>{A(!0)},P=()=>{Gm(),Df(),A(!1),window.location.reload()},U=()=>{Df(),A(!1)},z=()=>{A(!1)};return v?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"user-greeting",children:d.jsxs("p",{className:"greeting-text",children:[O,","," ",d.jsx("span",{className:"user-name clickable",onClick:Y,title:`А точно ли я ${x}?..`,children:x}),"!"]})}),p&&(v==="Tanya"||v==="Zebra")&&d.jsx(Xm,{displayName:x,onConfirm:P,onCancel:U,onClose:z})]}):d.jsxs("div",{className:"user-selection",children:[d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Привет! Это Женя, и вот мой адвент. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:" Я писала его с четырьмя нейронками на бегу, так что тексты порой всратые. "}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Вычитывала ли я их? Ну вот еще, вы вообще представляете мой график?!"}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:'(это "да, но не очень внимательно" 👀). '}),d.jsx("p",{className:"selection-prompt",style:{margin:"0"},children:"Он будет меняться по ходу дела, глючить и падать."}),d.jsx("p",{className:"selection-prompt",children:"Но кто здесь?"}),d.jsxs("div",{className:"user-options",children:[d.jsx("button",{className:"user-button",onClick:()=>M("Tanya"),children:"Таня"}),d.jsx("button",{className:"user-button",onClick:()=>M("Zebra"),children:"Зёбра"})]})]})}function Qm(){const[v,M]=_l.useState([]),[O,p]=_l.useState([]);return _l.useEffect(()=>{const A=U=>z=>{const C=Math.sin(U*9301+z*49297)*43758.5453;return C-Math.floor(C)},x=Array.from({length:60}).map((U,z)=>{const C=A(z+1);return{left:`${Math.floor(C(1)*100)}%`,top:`${Math.floor(C(2)*70)}%`,animationDelay:`${(C(3)*3).toFixed(2)}s`,opacity:+(.3+C(4)*.7).toFixed(2)}}),Y=["rgba(255,255,255,VAR)","rgba(245,250,255,VAR)","rgba(230,240,250,VAR)","rgba(210,225,235,VAR)"],P=Array.from({length:4}).map((U,z)=>{const C=A(100+z);let N=30+Math.floor(C(1)*60),V=Math.max(10,Math.floor(C(2)*30));const yl=Y[z%Y.length],vl=+(.35+C(3)*.55).toFixed(2),wl=yl.replace("VAR",String(vl)),Ul=`${40+Math.floor(C(4)*30)}% ${30+Math.floor(C(5)*30)}%`,bl=40+Math.floor(C(6)*40),Al=Math.floor(C(7)*20),ol=-20+Math.floor(C(8)*140);let zl=5+Math.floor(C(9)*40);return z===0&&(zl=Math.max(2,zl-8),N=Math.max(20,Math.floor(N*.85)),V=Math.max(8,Math.floor(V*.8))),{left:`${ol}%`,top:`${zl}%`,width:`${N}vw`,height:`${V}vh`,opacity:vl,color:wl,borderRadius:Ul,duration:bl,delay:Al}});window.requestAnimationFrame(()=>{M(x),p(P)})},[]),d.jsxs("div",{className:"background-scene",children:[d.jsxs("div",{className:"layer layer-sky",children:[d.jsx("div",{className:"moon"}),d.jsx("div",{className:"stars",children:v.map((A,x)=>d.jsx("div",{className:"star",style:{left:A.left,top:A.top,animationDelay:A.animationDelay,opacity:A.opacity}},x))})]}),d.jsx("div",{className:"layer layer-clouds",children:O.map((A,x)=>d.jsx("div",{className:`cloud cloud-${x+1}`,style:{position:"absolute",left:A.left,top:A.top,width:A.width,height:A.height,background:A.color,opacity:A.opacity,borderRadius:A.borderRadius,filter:"blur(6px)",transform:"translateX(-30%)",animation:`cloud-drift ${A.duration}s linear ${A.delay}s infinite`}},x))}),d.jsx("div",{className:"layer layer-mountains",children:d.jsxs("svg",{viewBox:"0 0 1200 400",className:"mountain-svg",children:[d.jsx("path",{d:"M0,400 L0,250 L200,150 L400,200 L600,100 L800,180 L1000,120 L1200,200 L1200,400 Z",fill:"#1a2332"}),d.jsx("path",{d:"M0,400 L0,300 L300,200 L500,250 L700,180 L900,220 L1200,260 L1200,400 Z",fill:"#0f1419"})]})}),d.jsx("div",{className:"layer layer-trees",children:d.jsx("svg",{viewBox:"0 0 1200 300",className:"trees-svg",children:[100,250,400,550,700,850,1e3,1100].map((A,x)=>d.jsxs("g",{children:[d.jsx("polygon",{points:`${A},300 ${A-20},250 ${A-15},250 ${A-30},200 ${A-25},200 ${A-40},150 ${A+40},150 ${A+25},200 ${A+30},200 ${A+15},250 ${A+20},250`,fill:"#1f2937"}),d.jsx("rect",{x:A-5,y:"280",width:"10",height:"20",fill:"#111827"})]},x))})}),d.jsxs("div",{className:"layer layer-deer",children:[d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-1",style:{left:"20%",bottom:"15%"},children:d.jsxs("g",{fill:"#2d3748",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"15",ry:"20"}),d.jsx("ellipse",{cx:"65",cy:"50",rx:"10",ry:"12"}),d.jsx("line",{x1:"58",y1:"35",x2:"62",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("line",{x1:"72",y1:"35",x2:"76",y2:"25",stroke:"#2d3748",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"52",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"58",y:"75",width:"3",height:"15"}),d.jsx("rect",{x:"65",y:"75",width:"3",height:"15"})]})}),d.jsx("svg",{viewBox:"0 0 100 100",className:"deer deer-2",style:{right:"25%",bottom:"18%"},children:d.jsxs("g",{fill:"#374151",children:[d.jsx("ellipse",{cx:"50",cy:"60",rx:"12",ry:"16"}),d.jsx("ellipse",{cx:"38",cy:"52",rx:"8",ry:"10"}),d.jsx("line",{x1:"35",y1:"38",x2:"32",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("line",{x1:"42",y1:"38",x2:"39",y2:"28",stroke:"#374151",strokeWidth:"2"}),d.jsx("rect",{x:"45",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"50",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"55",y:"72",width:"2",height:"12"}),d.jsx("rect",{x:"60",y:"72",width:"2",height:"12"})]})})]})]})}const $m=["window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large","window-medium","window-large","window-small","window-medium","window-large","window-small","window-medium","window-large"],Zm=["window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-rect","window-square","window-tall","window-square","window-tall","window-square","window-rect","window-tall","window-rect","window-square","window-tall"],xf=["door","window","window","door","window","door","window","window","door","window","door","window","window","door","window","window","door","window","door","window","door","window","window","door","window","door","window","door","window","window","door","window"],Nf=[{type:"door-rect",wood:"oak",handle:"brass-dot",hasKeyhole:!0,frame:"carved"},{type:"door-arched",wood:"pine",handle:"ring",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"star",hasKeyhole:!0,frame:"simple"},{type:"door-rect",wood:"oak",handle:"pinecone",hasKeyhole:!1,frame:"carved"},{type:"door-arched",wood:"pine",handle:"fantasy",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"brass-dot",hasKeyhole:!1,frame:"carved"},{type:"door-rect",wood:"oak",handle:"ring",hasKeyhole:!0,frame:"simple"},{type:"door-arched",wood:"pine",handle:"star",hasKeyhole:!1,frame:"molding"},{type:"door-double",wood:"aged",handle:"pinecone",hasKeyhole:!0,frame:"carved"},{type:"door-rect",wood:"oak",handle:"fantasy",hasKeyhole:!1,frame:"simple"},{type:"door-arched",wood:"pine",handle:"brass-dot",hasKeyhole:!0,frame:"molding"},{type:"door-double",wood:"aged",handle:"ring",hasKeyhole:!1,frame:"carved"}],Uf=[{shape:"square",panes:4,glass:"frosted",hasPlant:!0,hasSill:!0},{shape:"circular",panes:0,glass:"stained",hasPlant:!1,hasSill:!1},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0},{shape:"diamond",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:8,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:4,glass:"cracked",hasPlant:!0,hasSill:!0},{shape:"square",panes:6,glass:"stained",hasPlant:!1,hasSill:!0},{shape:"circular",panes:0,glass:"frosted",hasPlant:!1,hasSill:!1},{shape:"diamond",panes:0,glass:"cracked",hasPlant:!1,hasSill:!1},{shape:"hexagonal",panes:0,glass:"stained",hasPlant:!0,hasSill:!0},{shape:"square",panes:4,glass:"frosted",hasPlant:!1,hasSill:!0},{shape:"arched",panes:6,glass:"cracked",hasPlant:!1,hasSill:!0}],Bf=["wreath","garland","none","wreath","bow","holly","garland","wreath","none","bow","wreath","holly"],Hf=["candle","lights","bow","none","candle","lights","holly","candle","bow","none","lights","candle","holly"],Vm=v=>{switch(v){case"brass-dot":return d.jsx("div",{className:"door-handle brass-dot"});case"ring":return d.jsx(Mm,{className:"door-handle ring",size:12});case"star":return d.jsx(Nm,{className:"door-handle star",size:12,fill:"currentColor"});case"pinecone":return d.jsx("div",{className:"door-handle pinecone"});case"fantasy":return d.jsx("div",{className:"door-handle fantasy"});default:return d.jsx("div",{className:"door-handle brass-dot"})}},Km=v=>{if(v===0)return null;const M=v===4||v===6?2:4,O=v===4?2:v===6?3:2;return d.jsx("div",{className:"window-panes",style:{gridTemplateColumns:`repeat(${M}, 1fr)`,gridTemplateRows:`repeat(${O}, 1fr)`},children:Array.from({length:v}).map((p,A)=>d.jsx("div",{className:"window-pane"},A))})},km=v=>{if(v==="none")return null;switch(v){case"wreath":return d.jsxs("div",{className:"christmas-wreath",children:[d.jsx("div",{className:"wreath-circle"}),d.jsx("div",{className:"wreath-bow"}),d.jsxs("div",{className:"wreath-berries",children:[d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"}),d.jsx("div",{className:"berry"})]})]});case"garland":return d.jsxs("div",{className:"christmas-garland",children:[d.jsx("div",{className:"garland-swag"}),d.jsx("div",{className:"garland-bow"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-large",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"}),d.jsx("div",{className:"bow-ribbon-left"}),d.jsx("div",{className:"bow-ribbon-right"})]});case"holly":return d.jsxs("div",{className:"christmas-holly",children:[d.jsx("div",{className:"holly-leaf left"}),d.jsx("div",{className:"holly-leaf right"}),d.jsx("div",{className:"holly-berry"}),d.jsx("div",{className:"holly-berry"})]});default:return null}},Jm=v=>{if(v==="none")return null;switch(v){case"candle":return d.jsxs("div",{className:"christmas-candle",children:[d.jsx("div",{className:"candle-flame"}),d.jsx("div",{className:"candle-body"}),d.jsx("div",{className:"candle-base"})]});case"lights":return d.jsxs("div",{className:"christmas-lights",children:[d.jsx("div",{className:"light-bulb red"}),d.jsx("div",{className:"light-bulb gold"}),d.jsx("div",{className:"light-bulb green"}),d.jsx("div",{className:"light-bulb blue"})]});case"bow":return d.jsxs("div",{className:"christmas-bow-small",children:[d.jsx("div",{className:"bow-left"}),d.jsx("div",{className:"bow-right"}),d.jsx("div",{className:"bow-center"})]});case"holly":return d.jsxs("div",{className:"christmas-holly-small",children:[d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-leaf"}),d.jsx("div",{className:"holly-berry"})]});default:return null}};function Wm({windowNumber:v,isActive:M,isOpened:O,isExactMatch:p,onClick:A}){const x=_l.useRef(null),Y=v===17,P=()=>{Y&&x.current&&(x.current.currentTime=0,x.current.play().catch(Sl=>console.log("Audio play failed:",Sl)))},U=$m[v-1],z=Zm[v-1],C=M&&!O||M&&p?"window-glow-intense":"",V=new Set([11,6,12,16,25,30]).has(v),yl=V?"window-round":z,wl=xf[v-1]==="door";let Ul=0,bl=0;for(let Sl=0;Sl<v;Sl++)xf[Sl]==="door"?Ul++:bl++;const Al=Nf[(Ul-1)%Nf.length],ol=Uf[(bl-1)%Uf.length],zl=Bf[(Ul-1)%Bf.length],$l=Hf[(bl-1)%Hf.length];return d.jsx("div",{className:`calendar-window ${U} ${yl} ${C} ${O?"window-opened":""} ${M?"window-active":"window-inactive"}`,onClick:A,onMouseEnter:P,children:wl?d.jsxs("div",{className:`door-element ${Al.type}`,children:[km(zl),d.jsx("div",{className:`door-frame frame-${Al.frame}`,children:d.jsxs("div",{className:`door-panel wood-${Al.wood}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:V?"50%":void 0,overflow:"hidden"},children:[Al.type==="door-double"&&d.jsx("div",{className:"door-split"}),d.jsxs("div",{className:"door-decorative-panels",children:[d.jsx("div",{className:"panel-top"}),d.jsx("div",{className:"panel-bottom"})]}),d.jsxs("div",{className:"door-hardware",children:[Vm(Al.handle),Al.hasKeyhole&&d.jsx(Cm,{className:"door-keyhole",size:10})]}),d.jsx("span",{className:"window-number gold",children:v})]})})]}):d.jsxs("div",{className:`window-element ${yl} ${U}`,children:[Jm($l),d.jsxs("div",{className:"window-frame",children:[d.jsxs("div",{className:`window-glass glass-${ol.glass}`,style:{backgroundSize:"cover",backgroundPosition:"center",width:"100%",height:"100%",borderRadius:V?"50%":void 0,overflow:"hidden"},children:[Km(ol.panes),ol.shape==="arched"&&d.jsx("div",{className:"window-arch"}),Y&&d.jsx(jm,{className:"owl-icon",size:16})]}),d.jsx("span",{className:"window-number gold",children:v})]}),ol.hasSill&&d.jsx("div",{className:"window-sill",children:ol.hasPlant&&d.jsxs("div",{className:"window-plant",children:[d.jsx("div",{className:"plant-pot"}),d.jsxs("div",{className:"plant-leaves",children:[d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"}),d.jsx("div",{className:"leaf"})]})]})})]})})}function Fm({windowNumber:v,message:M,onClose:O}){return d.jsx("div",{className:"modal-overlay",onClick:O,children:d.jsx("div",{className:"modal-content",onClick:p=>p.stopPropagation(),children:d.jsxs("div",{className:"modal-paper",children:[d.jsx("button",{className:"modal-close",onClick:O,children:d.jsx(Yf,{size:24})}),v!==-1&&d.jsxs("h2",{className:"modal-title",children:["День ",v]}),d.jsx("div",{className:"modal-message",dangerouslySetInnerHTML:{__html:M}})]})})})}function La(v){const M=new Date(Date.UTC(2025,11,19,21,0,0,0)),O=v;return new Date(M.getTime()+O*24*60*60*1e3)}function Qa(v,M){return M.getTime()>=v.getTime()}function mr(v,M){const O=new Date(v);O.setUTCHours(0,0,0,0);const p=new Date(M);return p.setUTCHours(0,0,0,0),O.getTime()===p.getTime()}const Im="/advent/assets/muerte-DfSvC3Z-.jpg",Pm="/advent/assets/katrina-C9VtcZzC.jpg",lh="/advent/assets/pink-sexSAVbt.jpg",th="/advent/assets/rese-BUqLNboV.jpg",ih="/advent/assets/Ofrenda-DDd9dlHK.jpg",nh="/advent/assets/kolumbia-DUKl5Drs.webp",eh="/advent/assets/kolumb2--JWazZNY.webp",ah="/advent/assets/melhior-5oqVeQRz.webp",sh="/advent/assets/shir-CPxmcAyu.jpg",oh="/advent/assets/markes-DHTR6R5s.jpg",rh="/advent/assets/tolkin-Bkb1qdyy.jpg",uh="/advent/assets/tolkin1-Gt7VHXrl.jpg",ch="/advent/assets/berry-BayIKnFN.jpg",gh="/advent/assets/berry1-aZtyDiG8.jpg",fh="/advent/assets/gvatemala1-C3fdq1S5.jpg",ph="/advent/assets/graves-B4Ep0a2x.jpg",dh="/advent/assets/carpet1-BHoBEQUm.jpg",mh="/advent/assets/airsnakes-BtpaN7a0.jpg",hh="/advent/assets/fish-C0IMh9Dv.jpg",yh="/advent/assets/fish1-KO92JEwH.jpg",vh="/advent/assets/brazil1-C1nzNzga.webp",bh="/advent/assets/ethiopia-CfI92xpA.jpg",Sh="/advent/assets/goats-B1iHvHcl.jpg",_h="/advent/assets/rabanda-ClmJ6Exb.jpg",wh="/advent/assets/honduras-DTj2TRgE.jpg",zh="/advent/assets/honduras1-BfVuI_LD.jpg",Th="/advent/assets/resp-DBSDT0A7.png",jh="/advent/assets/cicoriy-DL-J_EKv.webp",Ah="/advent/assets/carob-DDo_E6jz.jpg",Mh="/advent/assets/tonka-CaSKsR3p.webp",Eh="/advent/assets/kardamon-D-LlmV-v.webp",Ch="/advent/assets/mem1-Coiz1JZ3.jpg",Dh="/advent/assets/cafe-DrSeHG9j.jpg",Oh="/advent/assets/yerevan1-0r9N0UnH.jpg",xh="/advent/assets/yerevan2-fQnNyY8p.jpg",Nh="/advent/assets/yerevan3-Dt5WJLMC.jpg",Uh="/advent/assets/lion-DzBmcp3Q.webp",Bh="/advent/assets/bears-BwIhEuov.jpg",Hh="/advent/assets/ararat-DAhBMtll.jpg",Rh="/advent/assets/jazzve-DliHyYYl.jpg",Yh="/advent/assets/abc-C__8usP9.webp",Xh="/advent/assets/noy-KD54xzv8.jpg",qh="/advent/assets/poss-LSCreopJ.jpg",Gh="/advent/assets/poss1-CPSySb8a.jpg",Lh="/advent/assets/poss2-4TAHhBM7.jpg",Qh="/advent/assets/poss3-BBe7PtjI.jpg",$h="/advent/assets/poss4-B0yE7kHZ.jpg",Zh="/advent/assets/poss5-DtHf0aUR.jpg",Vh="/advent/assets/possa-mom-BPlrTPcT.jpg",Kh="/advent/assets/possa-mom1-D9ySRpWd.jpg",kh="/advent/assets/poss-and-oposs-DDSg4YaG.webp",Jh="/advent/assets/possaKnowl-CYkQIhVz.jpg",Wh="/advent/assets/thief-CoIDv1iT.jpg",Fh="/advent/assets/smile-1-5jdl68.jpg",Ih="/advent/assets/merch-DdoKdpQb.jpg",Ph="/advent/assets/merch1-CtZos-AO.jpg",l0="/advent/assets/cammomile-Byca6E_e.jpg",t0="/advent/assets/cham-tea-BPAncxo6.jpg",i0="/advent/assets/chamomile1-DbctfrkQ.jpg",n0="/advent/assets/chamomile2-k1NNuBaK.jpg",e0="/advent/assets/juniper-r5wxtBRx.jpg",a0="/advent/assets/juniper1-BWoP6YHZ.jpg",s0="/advent/assets/juniper3-BXCLBj8d.jpg",o0="/advent/assets/juniperTea-0KTJdRf4.jpg",r0="/advent/assets/cham-sci-ixEH2xhc.jpg",u0="/advent/assets/juniperTattoo-Drp4YpCt.jpg",c0="/advent/assets/chamomileTattoo-BGNh6NOB.jpg",g0="/advent/assets/juniper-sci-hXzXrr9H.jpg",f0="/advent/assets/jun-sci2-zIGUP1FK.jpg",p0="/advent/assets/solovki-B95fDwav.webp",d0="/advent/assets/solovki1-u3Varh4x.webp",m0="/advent/assets/solovki2-D19kpuou.jpg",h0="/advent/assets/coffeCard1-DNW-HsaJ.webp",y0="/advent/assets/coffeCard2-BNxhtL4t.webp",v0="/advent/assets/coffeCard3-AyYO0wak.webp",b0="/advent/assets/coffeCard4-DI2_0NqK.webp",S0="/advent/assets/coffeCard5-dUEpTs6X.webp",_0="/advent/assets/coffeCard6-BDW-PLix.webp",w0="/advent/assets/atitlan-dYAI5eYf.jpg",z0="/advent/assets/atitlan1-C5ZSs572.jpg",T0="/advent/assets/guatemala8-Bi5KoB48.jpg",j0="/advent/assets/guatemalaCorn-ClR7vTSk.jpg",A0="/advent/assets/guatemalaTkan-DTKRCwUa.jpg",M0="/advent/assets/himalaya1-nN0t50Ma.avif",E0="/advent/assets/pinkSalt-BizDWWT4.jpg",C0="/advent/assets/saltMeme-Dq0p8Dwq.jpg",D0="/advent/assets/matcha11-CE8SBYA1.jpg",O0="/advent/assets/matcha-C8bXd3OR.jpg",x0="/advent/assets/matcha2-6Pc5CGop.jpg",N0="/advent/assets/matcha3-PqMaWA5u.jpg",U0="/advent/assets/matchaOld-BdH0N0Hr.jpg",B0="/advent/assets/matchaOld1-d7pxtrP4.jpg",H0="/advent/assets/harvest-DiJhXofV.jpg",R0="/advent/assets/harvest1-f7uXoVQt.jpg",Y0="/advent/assets/matchaColors-CePGvb-v.jpg",X0="/advent/assets/cat1-CteOJfo2.jpg",q0="/advent/assets/cat2-CI2WaIbw.jpg",G0="/advent/assets/cat3-wi61L9Ty.jpg",L0="/advent/assets/cat4-BQJa7vAE.jpg",Q0="/advent/assets/cat5-D7xwVjOS.jpg",$0="/advent/assets/piterMeme-ClYb6GkP.jpg",Z0="/advent/assets/monk-D17MXC2B.jpg",V0="/advent/assets/nyMeme1-6GOagR6o.jpg",K0="/advent/assets/nyMeme2-7Telpurx.jpg",k0="/advent/assets/nyMeme4-BNwb-aPZ.jpg",J0="/advent/assets/nyMeme5-mCJoC8cu.jpg",W0="/advent/assets/nyMeme6-BndRKfA9.jpg",F0="/advent/assets/nyMeme7-CBDPmv-H.jpg",I0="/advent/assets/nyMeme8-Dq-5p2Cs.jpg",P0="/advent/assets/nyMeme9-DtlbkQI_.jpg",l1="/advent/assets/gerb1-BxSMTsFR.jpg",t1="/advent/assets/gerb2-B_qnuNFN.jpg",i1="/advent/assets/okMeme--p34fXU_.jpg",n1="/advent/assets/unk-BB2m3QLz.jpg",e1="/advent/assets/u70-DIKlKj5y.jpg",a1="/advent/assets/map-BdUX3X-y.jpg",s1="/advent/assets/chasha-Ctu2v-xB.jpg",o1="/advent/assets/ft0-COvPvYCF.jpg",r1="/advent/assets/ft1-BgWi-igf.jpg",u1="/advent/assets/ft2-ctNJAFEu.jpg",c1="/advent/assets/cheese-BSnE0RhA.jpg",g1="/advent/assets/cheese2-DJbQoeGH.jpg",f1="/advent/assets/reishi-DE1KAqzF.webp",p1="/advent/assets/kamakura-_Vb1gjNI.webp",d1="/advent/assets/kamakura2-D_nBSmvm.webp",m1="/advent/assets/dragon2-BcyxgPxK.jpg",h1="/advent/assets/dragon1-BlTPZene.jpg",y1="/advent/assets/kissaten-nwC-faWE.jpg",v1="/advent/assets/kissaten1-DZ7zOaJ5.jpg",b1="/advent/assets/sakura-CKPCINYL.jpg",S1="/advent/assets/sakura1-eJ7b3pjZ.jpg",_1="/advent/assets/pistachios-2oIphEJF.jpg",w1="/advent/assets/pistachios1-DxqEClZb.jpg",z1="/advent/assets/pistachios2-U22W4XjX.jpg",T1="/advent/assets/pistachios3-CekkXn2S.jpg",j1="/advent/assets/pistachioLatte-CX5fY4GJ.jpg",A1="/advent/assets/unicornGerb-B1IgHAym.jpg",M1="/advent/assets/scotish-DuOWD4BU.jpg",E1="/advent/assets/pinecons-DN4xaoQh.jpg",C1="/advent/assets/pinecons0-t__cQNmk.jpg",D1="/advent/assets/pinecons1-DGIeou-f.jpg",O1="/advent/assets/pinecons3-xCOek82c.jpg",x1="/advent/assets/noma-CtxKXYmb.jpg",N1="/advent/assets/coffee05-CtvbYTlI.jpg",U1="/advent/assets/koliadky-DFZjday1.jpg",B1="/advent/assets/koliadky1-D8kgwEZZ.jpg",H1="/advent/assets/koliadky4-CDUgUMip.jpg",R1="/advent/assets/smolensk-DSJa0qX2.jpg",Y1="/advent/assets/smolensk1-C8faW8yG.jpg",X1="/advent/assets/smolensk3-BR8avWFN.jpg",q1="/advent/assets/tower-LkqE0Ps6.jpg",G1="/advent/assets/tower1-Df1m5F8Z.jpg",L1="/advent/assets/christmas-DDkkr5ot.jpg",Q1="/advent/assets/christmas1-BeD30mht.jpg",$1="/advent/assets/christmas2-BesTWRrW.jpg",Z1="/advent/assets/drogo-CUI54dn7.jpg",V1="/advent/assets/cedar-t4INFow4.jpg",K1="/advent/assets/cedar1-DZqAq6zZ.jpg",k1="/advent/assets/choko-Baf9JYP3.jpg",J1="/advent/assets/blessed1-CWF1o7u1.jpg",W1="/advent/assets/blessed2-CU2p4ypS.jpg",F1="/advent/assets/blessed3-5rhrqKyi.jpg",I1="/advent/assets/bless4-4Ll_GvpY.jpg",P1="/advent/assets/bless5-UTCmR7lr.jpg",ly="/advent/assets/bless6-CJxznB30.jpg",ty="/advent/assets/bless9-DcH5d8C6.jpg",iy="/advent/assets/teabag-7cU4nlRp.jpg",ny="/advent/assets/sombrero1-ToxUavrc.jpg",ey="/advent/assets/sombrero2-CoV60mUj.jpg",ay="/advent/assets/sombrero3-CtpxCN50.jpg",sy="/advent/assets/musik-DGR0Ibv7.jpg",oy="/advent/assets/musik1-CxBli7oM.jpg",ry="/advent/assets/mex-C1sNijnv.jpg",uy="/advent/assets/mex3-CB0LfBt5.jpg",cy="/advent/assets/sanmiguel-CybJiYPe.jpg",gy="/advent/assets/frida-07UEoWIv.webp",fy="/advent/assets/frida1-B9HyRZK3.jpg",py="/advent/assets/frida3-SOwYbJa9.jpg",dy="/advent/assets/tea_bag-DRWtL3Mc.jpg",my="/advent/assets/guilt-DLHr3T3c.jpg",hy="/advent/assets/bosphorus-BURA-rTJ.jpg",yy="/advent/assets/bosphorus1-BdEkWYac.jpg",vy="/advent/assets/turkish1-BLD0BNe9.jpg",by="/advent/assets/turkish2-jH-U0BZA.jpg",Sy="/advent/assets/turkish3-yGiMzEP9.jpg",_y="/advent/assets/turkish4-C37DGkOD.jpg",wy="/advent/assets/moon1-4f8TvoJs.jpg",zy="/advent/assets/mooncoffe-Dx5_ymHM.jpg",Ty="/advent/assets/scarycoffee-BVstMak1.jpg",jy="/advent/assets/beatles-BMUnAxoJ.jpg",Ay="/advent/assets/beatles1-BdTV_cMa.jpg",My="/advent/assets/sweets-h4TtI9FD.jpg",Ey="/advent/assets/bless10-DqiWaUm6.jpg",r={muerte:Im,katrina:Pm,pink:lh,rese:th,Ofrenda:ih,kolumb2:eh,kolumbia:nh,melhior:ah,shir:sh,markes:oh,tolkin:rh,tolkin1:uh,berries:ch,berries1:gh,gvatemala1:fh,graves:ph,carpet1:dh,airsnake2:mh,fish:hh,fish1:yh,brazil1:vh,ethiopia:bh,goats:Sh,rabanda:_h,honduras:wh,honduras1:zh,resp:Th,cicoriy:jh,carob:Ah,tonka:Mh,kardamon:Eh,mem:Ch,cafe:Dh,yerevan1:Oh,yerevan2:xh,yerevan3:Nh,lion:Uh,bears:Bh,ararat:Hh,yazzve:Rh,abc:Yh,noy:Xh,poss:qh,possaMom:Vh,possaMom1:Kh,possOrOposs:kh,possaKnowl:Jh,poss1:Gh,poss2:Lh,poss3:Qh,poss4:$h,poss5:Zh,thief:Wh,smile:Fh,merch:Ih,merch1:Ph,cammomile:l0,chamomile2:n0,chamomileTea:t0,chamomile1:i0,juniper:e0,juniper1:a0,juniper3:s0,juniperTea:o0,chamSci:r0,juniperTattoo:u0,chamomileTattoo:c0,juniperSci:g0,juniperSci1:f0,solovki:p0,solovki1:d0,solovki2:m0,coffeCard1:h0,coffeCard2:y0,coffeCard3:v0,coffeCard4:b0,coffeCard5:S0,coffeCard6:_0,atitlan:w0,atitlan1:z0,guatemala8:T0,guatemalaCorn:j0,guatemalaTkan:A0,himalaya:M0,pinkSalt:E0,saltMeme:C0,harvest:H0,harvest1:R0,matcha:O0,matcha2:x0,matcha3:N0,matcha11:D0,matchaOld:U0,matchaOld1:B0,matchaColors:Y0,cat1:X0,cat2:q0,cat3:G0,cat4:L0,cat5:Q0,piterMeme:$0,monk:Z0,nyMeme1:V0,nyMeme2:K0,nyMeme4:k0,nyMeme5:J0,nyMeme6:W0,nyMeme7:F0,nyMeme8:I0,nyMeme9:P0,gerb1:l1,gerb2:t1,okMeme:i1,chasha:s1,map:a1,u70:e1,unk:n1,ft0:o1,ft1:r1,ft2:u1,cheese:c1,cheese1:g1,reishi:f1,kamakura:p1,kamakura2:d1,dragon:m1,dragon1:h1,kissaten:y1,kissaten1:v1,sakura:b1,sakura1:S1,pistachios:_1,pistachios1:w1,pistachios2:z1,pistachios3:T1,pistachioLatte:j1,unicornGerb:A1,scotish:M1,pinecone:E1,pinecone0:C1,pinecone1:D1,pinecone2:O1,noma:x1,coffee06:N1,koliadky:U1,koliadky1:B1,koliadky4:H1,smolensk:R1,smolensk1:Y1,smolensk2:X1,tower:q1,tower1:G1,christmas:L1,christmas1:Q1,christmas2:$1,drogo:Z1,cedar:V1,cedar1:K1,choko:k1,blessed1:J1,blessed2:W1,blessed3:F1,bless4:I1,bless5:P1,bless6:ly,bless9:ty,teabag:iy,sombrero1:ny,sombrero2:ey,sombrero3:ay,musik:sy,musik1:oy,mex1:ry,mex3:uy,sanmiguel:cy,frida:gy,frida1:fy,frida3:py,teabag1:dy,guilt:my,bosphorus:hy,bosphorus1:yy,turkish1:vy,turkish2:by,turkish3:Sy,turkish4:_y,moon1:wy,mooncoffee:zy,scarycoffee:Ty,beatles:jy,bless10:Ey,beatles1:Ay,sweets:My},Cy=[{day:1,date:"2025-12-20",tanya_gift:"Мексика + специи (по-мексикански)",zebra_gift:"Декаф Мексика + специи (х2)",tanya_bonus:"Специи для Café de Olla",zebra_bonus:"Специи для Café de Olla",title:"Café de Olla — кофе революции",zebra_message:`
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
  `},{day:26,date:"2026-01-14",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:27,date:"2026-01-15",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:28,date:"2026-01-16",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:29,date:"2026-01-17",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:30,date:"2026-01-18",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:31,date:"2026-01-19",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"},{day:32,date:"2026-01-20",tanya_gift:"Иисус любит тебя",zebra_gift:"Эфиопия Гуджи (х2)",tanya_bonus:"Бразилия Фенси",zebra_bonus:"Бразилия Фенси (х2)",title:"День 25",tanya_message:"<p>Подарок: Иисус любит тебя</p><p>Бонус: Бразилия Фенси</p>",zebra_message:"<p>Подарок: Эфиопия Гуджи (х2)</p><p>Бонус: Бразилия Фенси (х2)</p>"}];function Dy({currentDate:v,userName:M}){const[O,p]=_l.useState(()=>Xf()),[A,x]=_l.useState(null),Y=C=>{const N=La(C);if(Qa(N,v)&&(x(C),!O.has(C))){const V=qm(C);p(V)}},P=()=>{x(null)},z=[...Array.from({length:32},(C,N)=>N+1)].sort((C,N)=>{const V=La(C),yl=La(N),vl=mr(V,v),wl=mr(yl,v),Ul=O.has(C),bl=O.has(N),Al=Qa(V,v),ol=Qa(yl,v),zl=Al&&!Ul,$l=ol&&!bl,Sl=vl&&Ul,K=wl&&bl,Hl=!Al,kl=!ol,Ft=Ul&&!vl&&Al,pt=bl&&!wl&&ol;return zl&&!$l?-1:!zl&&$l?1:zl&&$l?C-N:Sl&&!K?-1:!Sl&&K?1:Hl&&!kl?-1:!Hl&&kl?1:Hl&&kl||Ft&&pt?C-N:0});return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"calendar-grid",children:z.map(C=>{const N=La(C),V=Qa(N,v),yl=O.has(C),vl=mr(N,v);return d.jsx(Wm,{windowNumber:C,isActive:V,isOpened:yl,isExactMatch:vl,onClick:()=>Y(C)},C)})}),A!==null&&(()=>{const C=Cy[A-1],N=M==="Tanya"?C.tanya_message:M==="Zebra"?C.zebra_message:"<p>Тут ничего нет.</p> <p>Никаких секретных посланий</p>";return d.jsx(Fm,{windowNumber:A,message:N,onClose:P})})()]})}function Oy(){const[v,M]=_l.useState(!1),O=_l.useRef(null),[p,A]=_l.useState(!1);_l.useEffect(()=>{const Y=localStorage.getItem("musicEnabled");console.debug("[AudioControls] mount - musicPref=",Y),Y==="true"&&(console.debug("[AudioControls] stored preference requests autoplay but user gesture required"),A(!0))},[]),_l.useEffect(()=>{if(!p)return;const Y=()=>{console.debug("[AudioControls] user gesture detected, starting audio"),M(!0),A(!1),window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)};return window.addEventListener("pointerdown",Y,{once:!0}),window.addEventListener("keydown",Y,{once:!0}),()=>{window.removeEventListener("pointerdown",Y),window.removeEventListener("keydown",Y)}},[p]),_l.useEffect(()=>{if(console.debug("[AudioControls] effect isMusicPlaying=",v,"ref=",O.current),!O.current)return;const Y=O.current;if(v)console.debug("[AudioControls] calling play()"),Y.play().then(()=>console.debug("[AudioControls] play() fulfilled")).catch(P=>{console.error("[AudioControls] Music play failed:",P),P&&P.name==="NotAllowedError"&&(console.debug("[AudioControls] play blocked; awaiting user gesture to resume"),A(!0))});else{console.debug("[AudioControls] calling pause()");try{Y.pause()}catch(P){console.error("[AudioControls] pause() failed:",P)}}},[v]);const x=()=>{const Y=!v;console.debug("[AudioControls] toggleMusic ->",Y),M(Y),localStorage.setItem("musicEnabled",String(Y))};return d.jsxs("div",{className:"audio-controls",children:[d.jsxs("button",{className:`audio-button ${v?"audio-active":""}`,onClick:x,title:"Toggle Christmas Music",children:[v?d.jsx(Bm,{size:20}):d.jsx(Rm,{size:20}),d.jsx(Om,{size:16,className:"audio-icon-secondary"})]}),d.jsx("audio",{ref:O,loop:!0,preload:"auto",src:"audio/Frost_Waltz.mp3",onCanPlay:()=>console.debug("[AudioControls] audio canplay"),onPlay:()=>console.debug("[AudioControls] audio event: play"),onPause:()=>console.debug("[AudioControls] audio event: pause"),onError:Y=>console.error("[AudioControls] audio event: error",Y)})]})}function xy(){return d.jsx("div",{className:"snowfall",children:Array.from({length:100}).map((v,M)=>d.jsx("div",{className:"snowflake",style:{left:`${Math.random()*100}%`,animationDuration:`${Math.random()*8+10}s`,animationDelay:`${Math.random()*8}s`,width:`${Math.random()*6+4}px`,height:`${Math.random()*6+4}px`}},M))})}const Ny=()=>new Date;function Uy(){const[v,M]=_l.useState(()=>{const x=localStorage.getItem("adventCalendarUser");return x==="Tanya"||x==="Zebra"?x:(localStorage.clear(),null)}),[O,p]=_l.useState(Ny),A=x=>{localStorage.clear(),M(x),localStorage.setItem("adventCalendarUser",x)};return _l.useEffect(()=>{(async()=>{try{const P=await(await fetch("https://worldtimeapi.org/api/ip")).json(),U=new Date(P.datetime);p(U)}catch(Y){console.error("Failed to fetch current date:",Y),p(new Date)}})()},[]),d.jsxs("div",{className:"app-container",children:[d.jsx(Qm,{}),d.jsx(xy,{}),d.jsx(Oy,{}),d.jsxs("div",{className:"content-wrapper",children:[d.jsx(Lm,{userName:v,onUserSelect:A}),d.jsx(Dy,{currentDate:O,userName:v})]})]})}vm.createRoot(document.getElementById("root")).render(d.jsx(_l.StrictMode,{children:d.jsx(Uy,{})}));
