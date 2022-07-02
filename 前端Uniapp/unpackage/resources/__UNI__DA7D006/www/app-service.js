var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'nodes']])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'audio']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'video']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'img']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'file']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'type']],[1,'gift']])
Z([[2,'=='],[[7],[3,'sign']],[1,1]])
Z([[2,'=='],[[7],[3,'sign']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z(z[0])
Z(z[0])
Z([3,'mix-refresh-content'])
Z([[4],[[5],[[5],[[5],[[4],[[5],[[5],[1,'touchstart']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchstart']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]],[[4],[[5],[[5],[1,'touchend']],[[4],[[5],[[4],[[5],[[5],[1,'pageTouchend']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[1,'translateY('],[[7],[3,'pageDeviation']]],[1,'px)']]],[1,';']],[[2,'+'],[[2,'+'],[1,'transition:'],[[2,'+'],[[7],[3,'pageTransition']],[1,'s']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'max-height:'],[[2,'+'],[[2,'+'],[1,'calc(100vh - '],[[7],[3,'pageTop']]],[1,'px)']]],[1,';']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^refresh']],[[4],[[5],[[4],[[5],[1,'onPulldownReresh']]]]]]]]])
Z([3,'mixPulldownRefresh'])
Z([1,0])
Z([3,'5b8d9178-1'])
Z([[4],[[5],[1,'default']]])
Z(z[0])
Z([[7],[3,'loadMoreStatus']])
Z([[2,'+'],[[2,'+'],[1,'5b8d9178-2'],[1,',']],[1,'5b8d9178-1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
Z([3,'__l'])
Z([3,'mix-loading'])
Z([3,'ffa9e60c-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'loading']])
Z([3,'__l'])
Z([3,'mix-loading'])
Z([3,'340db4b9-1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'panel-content vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^refresh']],[[4],[[5],[[4],[[5],[1,'onPulldownReresh']]]]]]]],[[4],[[5],[[5],[1,'^setEnableScroll']],[[4],[[5],[[4],[[5],[1,'setEnableScroll']]]]]]]]])
Z([3,'mixPulldownRefresh'])
Z([1,90])
Z([3,'8dd740cc-1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,300])
Z([3,'swiper'])
Z([3,'__i0__'])
Z([3,'tabItem'])
Z([[7],[3,'tabBars']])
Z([3,'id'])
Z(z[1])
Z([3,'panel-scroll-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'enableScroll']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'invList']])
Z(z[23])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetails']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'invList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'invImage']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'invVideo']])
Z(z[0])
Z([[6],[[7],[3,'tabItem']],[3,'loadMoreStatus']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'8dd740cc-2-'],[[7],[3,'__i0__']]],[1,',']],[1,'8dd740cc-1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-26775780'])
Z([3,'padding  text-black data-v-26775780'])
Z([[2,'=='],[[7],[3,'sign']],[1,1]])
Z([[2,'=='],[[7],[3,'sign']],[1,2]])
Z([[2,'>'],[[6],[[7],[3,'imagePath']],[3,'length']],[1,0]])
Z([[7],[3,'videoPath']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([3,'data-v-75bc2a5c'])
Z([[4],[[5],[[4],[[5],[[5],[1,'submit']],[[4],[[5],[[4],[[5],[[5],[1,'formSubmit']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'sex data-v-75bc2a5c'])
Z([3,'sex'])
Z(z[1])
Z([[2,'=='],[[7],[3,'sex']],[1,1]])
Z([[2,'!='],[[7],[3,'sex']],[1,1]])
Z(z[1])
Z([[2,'=='],[[7],[3,'sex']],[1,2]])
Z([[2,'!='],[[7],[3,'sex']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'panel-content vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^refresh']],[[4],[[5],[[4],[[5],[1,'onPulldownReresh']]]]]]]],[[4],[[5],[[5],[1,'^setEnableScroll']],[[4],[[5],[[4],[[5],[1,'setEnableScroll']]]]]]]]])
Z([3,'mixPulldownRefresh'])
Z([1,90])
Z([3,'0e5ba566-1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,300])
Z([3,'swiper'])
Z([3,'__i0__'])
Z([3,'tabItem'])
Z([[7],[3,'tabBars']])
Z([3,'id'])
Z(z[1])
Z([3,'panel-scroll-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'enableScroll']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'invList']])
Z(z[23])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetails']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'invList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'invImage']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'invVideo']])
Z(z[0])
Z([[6],[[7],[3,'tabItem']],[3,'loadMoreStatus']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'0e5ba566-2-'],[[7],[3,'__i0__']]],[1,',']],[1,'0e5ba566-1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-body'])
Z([[2,'>'],[[6],[[7],[3,'userList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'userList']])
Z(z[2])
Z([3,'__e'])
Z([3,'flex pd-10 bg-fff bdb'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toPersonal']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'userList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'image']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'image']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'image']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'image']],[1,'']]])
Z([3,'flex-1'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'nickname']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'nickname']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'nickname']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'nickname']],[1,'']]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'signature']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'signature']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'signature']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'signature']],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-body'])
Z([[2,'>'],[[6],[[7],[3,'userList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'userList']])
Z(z[2])
Z([3,'__e'])
Z([3,'flex pd-10 bg-fff bdb'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'toPersonal']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'userList']],[1,'']],[[7],[3,'index']]],[1,'id']]]]]]]]]]]]]]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'image']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'image']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'image']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'image']],[1,'']]])
Z([3,'flex-1'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'nickname']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'nickname']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'nickname']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'nickname']],[1,'']]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'signature']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'signature']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'signature']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'signature']],[1,'']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'panel-content vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^refresh']],[[4],[[5],[[4],[[5],[1,'onPulldownReresh']]]]]]]],[[4],[[5],[[5],[1,'^setEnableScroll']],[[4],[[5],[[4],[[5],[1,'setEnableScroll']]]]]]]]])
Z([3,'mixPulldownRefresh'])
Z([1,90])
Z([3,'544a4353-1'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'swiper-box'])
Z([[7],[3,'tabCurrentIndex']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'changeTab']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([1,300])
Z([3,'swiper'])
Z([3,'__i0__'])
Z([3,'tabItem'])
Z([[7],[3,'tabBars']])
Z([3,'id'])
Z(z[1])
Z([3,'panel-scroll-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'loadMore']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'enableScroll']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'invList']])
Z(z[23])
Z(z[1])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'navToDetails']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'invList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'invImage']],[3,'length']],[1,0]])
Z([[6],[[7],[3,'item']],[3,'invVideo']])
Z(z[0])
Z([[6],[[7],[3,'tabItem']],[3,'loadMoreStatus']])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'544a4353-2-'],[[7],[3,'__i0__']]],[1,',']],[1,'544a4353-1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'item-other data-v-14b9981f'])
Z([[2,'==='],[[6],[[7],[3,'user']],[3,'sex']],[1,1]])
Z([[2,'==='],[[6],[[7],[3,'user']],[3,'sex']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pd-10 bg-fff'])
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z([3,'m-item'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'userid']],[[7],[3,'userId']]])
Z([3,'chatbox'])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'message']])
Z([[2,'+'],[1,'237989a8-1-'],[[7],[3,'index']]])
Z([[2,'||'],[[2,'=='],[[7],[3,'myImage']],[1,null]],[[2,'=='],[[7],[3,'myImage']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[7],[3,'myImage']],[1,null]],[[2,'!='],[[7],[3,'myImage']],[1,'']]])
Z(z[7])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'chatData']],[3,'image']],[1,null]],[[2,'=='],[[6],[[7],[3,'chatData']],[3,'image']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'chatData']],[3,'image']],[1,null]],[[2,'!='],[[6],[[7],[3,'chatData']],[3,'image']],[1,'']]])
Z([[7],[3,'index']])
Z([3,'flex-1'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'chatData']],[3,'nickname']],[1,null]],[[2,'=='],[[6],[[7],[3,'chatData']],[3,'nickname']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'chatData']],[3,'nickname']],[1,null]],[[2,'!='],[[6],[[7],[3,'chatData']],[3,'nickname']],[1,'']]])
Z(z[8])
Z(z[9])
Z([[2,'+'],[1,'237989a8-2-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'main-body'])
Z([[2,'>'],[[6],[[7],[3,'chatList']],[3,'length']],[1,0]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'chatList']])
Z(z[2])
Z([3,'__e'])
Z([3,'flex pd-10 bg-fff bdb'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goItem']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'chatList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'hasRead']],[1,0]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'friendid']],[[7],[3,'userId']]])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'image']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'image']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'image']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'image']],[1,'']]])
Z([3,'flex-1'])
Z([[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'nickname']],[1,null]],[[2,'=='],[[6],[[7],[3,'item']],[3,'nickname']],[1,'']]])
Z([[2,'&&'],[[2,'!='],[[6],[[7],[3,'item']],[3,'nickname']],[1,null]],[[2,'!='],[[6],[[7],[3,'item']],[3,'nickname']],[1,'']]])
Z([3,'__l'])
Z([[6],[[7],[3,'item']],[3,'message']])
Z([1,0])
Z([[2,'+'],[1,'584738be-1-'],[[7],[3,'index']]])
Z(z[11])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z(z[18])
Z([[2,'+'],[1,'584738be-2-'],[[7],[3,'index']]])
Z(z[13])
Z(z[14])
Z(z[15])
Z(z[16])
Z(z[17])
Z([1,1])
Z([[2,'+'],[1,'584738be-3-'],[[7],[3,'index']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/chatmsg.wxml','./components/footer.wxml','./components/mix-advert/vue/mix-advert.wxml','./components/mix-load-more/mix-load-more.wxml','./components/mix-loading/mix-loading.wxml','./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml','./pages/component/component.wxml','./pages/details/details.wxml','./pages/details/videoDetails.wxml','./pages/index/index.wxml','./pages/index/publish.wxml','./pages/me/about.wxml','./pages/me/info.wxml','./pages/me/me.wxml','./pages/me/myCollect.wxml','./pages/me/myComment.wxml','./pages/me/myFans.wxml','./pages/me/myFocus.wxml','./pages/me/myInvitation.wxml','./pages/me/personal.wxml','./pages/me/setting.wxml','./pages/netty/chat.wxml','./pages/netty/main_chat.wxml','./pages/shilu-login/blog.wxml','./pages/shilu-login/forget.wxml','./pages/shilu-login/login.wxml','./pages/shilu-login/reg.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_n('view')
var cI=_v()
_(oH,cI)
if(_oz(z,4,fE,oD,gg)){cI.wxVkey=1
}
var oJ=_v()
_(oH,oJ)
if(_oz(z,5,fE,oD,gg)){oJ.wxVkey=1
}
var lK=_v()
_(oH,lK)
if(_oz(z,6,fE,oD,gg)){lK.wxVkey=1
}
var aL=_v()
_(oH,aL)
if(_oz(z,7,fE,oD,gg)){aL.wxVkey=1
}
var tM=_v()
_(oH,tM)
if(_oz(z,8,fE,oD,gg)){tM.wxVkey=1
}
else{tM.wxVkey=2
var eN=_v()
_(tM,eN)
if(_oz(z,9,fE,oD,gg)){eN.wxVkey=1
}
var bO=_v()
_(tM,bO)
if(_oz(z,10,fE,oD,gg)){bO.wxVkey=1
}
eN.wxXCkey=1
bO.wxXCkey=1
}
cI.wxXCkey=1
oJ.wxXCkey=1
lK.wxXCkey=1
aL.wxXCkey=1
tM.wxXCkey=1
_(cF,oH)
return cF
}
oB.wxXCkey=2
_2z(z,2,xC,e,s,gg,oB,'item','index','index')
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var hU=_mz(z,'view',['bindtouchend',0,'bindtouchmove',1,'bindtouchstart',1,'class',2,'data-event-opts',3,'style',4],[],e,s,gg)
var oV=_n('slot')
_(hU,oV)
_(r,hU)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oX=_mz(z,'mix-pulldown-refresh',['bind:__l',0,'bind:refresh',1,'class',1,'data-event-opts',2,'data-ref',3,'top',4,'vueId',5,'vueSlots',6],[],e,s,gg)
var lY=_mz(z,'mix-load-more',['bind:__l',8,'status',1,'vueId',2],[],e,s,gg)
_(oX,lY)
_(r,oX)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var t1=_v()
_(r,t1)
if(_oz(z,0,e,s,gg)){t1.wxVkey=1
var e2=_mz(z,'mix-loading',['bind:__l',1,'class',1,'vueId',2],[],e,s,gg)
_(t1,e2)
}
t1.wxXCkey=1
t1.wxXCkey=3
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var o4=_v()
_(r,o4)
if(_oz(z,0,e,s,gg)){o4.wxVkey=1
var x5=_mz(z,'mix-loading',['bind:__l',1,'class',1,'vueId',2],[],e,s,gg)
_(o4,x5)
}
o4.wxXCkey=1
o4.wxXCkey=3
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var f7=_mz(z,'mix-pulldown-refresh',['bind:__l',0,'bind:refresh',1,'bind:setEnableScroll',1,'class',2,'data-event-opts',3,'data-ref',4,'top',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var c8=_mz(z,'swiper',['bindchange',9,'class',1,'current',2,'data-event-opts',3,'duration',4,'id',5],[],e,s,gg)
var h9=_v()
_(c8,h9)
var o0=function(oBB,cAB,lCB,gg){
var tEB=_mz(z,'scroll-view',['bindscrolltolower',19,'class',1,'data-event-opts',2,'scrollY',3],[],oBB,cAB,gg)
var eFB=_v()
_(tEB,eFB)
var bGB=function(xIB,oHB,oJB,gg){
var cLB=_mz(z,'view',['bindtap',27,'data-event-opts',1],[],xIB,oHB,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,29,xIB,oHB,gg)){hMB.wxVkey=1
}
else{hMB.wxVkey=2
var oNB=_v()
_(hMB,oNB)
if(_oz(z,30,xIB,oHB,gg)){oNB.wxVkey=1
}
oNB.wxXCkey=1
}
hMB.wxXCkey=1
_(oJB,cLB)
return oJB
}
eFB.wxXCkey=2
_2z(z,25,bGB,oBB,cAB,gg,eFB,'item','index','index')
var cOB=_mz(z,'mix-load-more',['bind:__l',31,'status',1,'vueId',2],[],oBB,cAB,gg)
_(tEB,cOB)
_(lCB,tEB)
return lCB
}
h9.wxXCkey=4
_2z(z,17,o0,e,s,gg,h9,'tabItem','__i0__','id')
_(f7,c8)
_(r,f7)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var lQB=_n('view')
_rz(z,lQB,'class',0,e,s,gg)
var eTB=_n('view')
_rz(z,eTB,'class',1,e,s,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,2,e,s,gg)){bUB.wxVkey=1
}
var oVB=_v()
_(eTB,oVB)
if(_oz(z,3,e,s,gg)){oVB.wxVkey=1
}
bUB.wxXCkey=1
oVB.wxXCkey=1
_(lQB,eTB)
var aRB=_v()
_(lQB,aRB)
if(_oz(z,4,e,s,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(lQB,tSB)
if(_oz(z,5,e,s,gg)){tSB.wxVkey=1
}
aRB.wxXCkey=1
tSB.wxXCkey=1
_(r,lQB)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var fYB=_mz(z,'form',['bindsubmit',0,'class',1,'data-event-opts',1],[],e,s,gg)
var cZB=_mz(z,'radio-group',['class',3,'name',1],[],e,s,gg)
var h1B=_n('label')
_rz(z,h1B,'class',5,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,6,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,7,e,s,gg)){c3B.wxVkey=1
}
o2B.wxXCkey=1
c3B.wxXCkey=1
_(cZB,h1B)
var o4B=_n('label')
_rz(z,o4B,'class',8,e,s,gg)
var l5B=_v()
_(o4B,l5B)
if(_oz(z,9,e,s,gg)){l5B.wxVkey=1
}
var a6B=_v()
_(o4B,a6B)
if(_oz(z,10,e,s,gg)){a6B.wxVkey=1
}
l5B.wxXCkey=1
a6B.wxXCkey=1
_(cZB,o4B)
_(fYB,cZB)
_(r,fYB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var b9B=_mz(z,'mix-pulldown-refresh',['bind:__l',0,'bind:refresh',1,'bind:setEnableScroll',1,'class',2,'data-event-opts',3,'data-ref',4,'top',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var o0B=_mz(z,'swiper',['bindchange',9,'class',1,'current',2,'data-event-opts',3,'duration',4,'id',5],[],e,s,gg)
var xAC=_v()
_(o0B,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_mz(z,'scroll-view',['bindscrolltolower',19,'class',1,'data-event-opts',2,'scrollY',3],[],cDC,fCC,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_mz(z,'view',['bindtap',27,'data-event-opts',1],[],tKC,aJC,gg)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,29,tKC,aJC,gg)){xOC.wxVkey=1
}
else{xOC.wxVkey=2
var oPC=_v()
_(xOC,oPC)
if(_oz(z,30,tKC,aJC,gg)){oPC.wxVkey=1
}
oPC.wxXCkey=1
}
xOC.wxXCkey=1
_(eLC,oNC)
return eLC
}
oHC.wxXCkey=2
_2z(z,25,lIC,cDC,fCC,gg,oHC,'item','index','index')
var fQC=_mz(z,'mix-load-more',['bind:__l',31,'status',1,'vueId',2],[],cDC,fCC,gg)
_(cGC,fQC)
_(hEC,cGC)
return hEC
}
xAC.wxXCkey=4
_2z(z,17,oBC,e,s,gg,xAC,'tabItem','__i0__','id')
_(b9B,o0B)
_(r,b9B)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oTC=_n('view')
_rz(z,oTC,'class',0,e,s,gg)
var cUC=_v()
_(oTC,cUC)
if(_oz(z,1,e,s,gg)){cUC.wxVkey=1
var oVC=_v()
_(cUC,oVC)
var lWC=function(tYC,aXC,eZC,gg){
var o2C=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],tYC,aXC,gg)
var x3C=_v()
_(o2C,x3C)
if(_oz(z,9,tYC,aXC,gg)){x3C.wxVkey=1
}
var o4C=_v()
_(o2C,o4C)
if(_oz(z,10,tYC,aXC,gg)){o4C.wxVkey=1
}
var f5C=_n('view')
_rz(z,f5C,'class',11,tYC,aXC,gg)
var c6C=_v()
_(f5C,c6C)
if(_oz(z,12,tYC,aXC,gg)){c6C.wxVkey=1
}
var h7C=_v()
_(f5C,h7C)
if(_oz(z,13,tYC,aXC,gg)){h7C.wxVkey=1
}
var o8C=_v()
_(f5C,o8C)
if(_oz(z,14,tYC,aXC,gg)){o8C.wxVkey=1
}
var c9C=_v()
_(f5C,c9C)
if(_oz(z,15,tYC,aXC,gg)){c9C.wxVkey=1
}
c6C.wxXCkey=1
h7C.wxXCkey=1
o8C.wxXCkey=1
c9C.wxXCkey=1
_(o2C,f5C)
x3C.wxXCkey=1
o4C.wxXCkey=1
_(eZC,o2C)
return eZC
}
oVC.wxXCkey=2
_2z(z,4,lWC,e,s,gg,oVC,'item','index','index')
}
else{cUC.wxVkey=2
}
cUC.wxXCkey=1
_(r,oTC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var lAD=_n('view')
_rz(z,lAD,'class',0,e,s,gg)
var aBD=_v()
_(lAD,aBD)
if(_oz(z,1,e,s,gg)){aBD.wxVkey=1
var tCD=_v()
_(aBD,tCD)
var eDD=function(oFD,bED,xGD,gg){
var fID=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],oFD,bED,gg)
var cJD=_v()
_(fID,cJD)
if(_oz(z,9,oFD,bED,gg)){cJD.wxVkey=1
}
var hKD=_v()
_(fID,hKD)
if(_oz(z,10,oFD,bED,gg)){hKD.wxVkey=1
}
var oLD=_n('view')
_rz(z,oLD,'class',11,oFD,bED,gg)
var cMD=_v()
_(oLD,cMD)
if(_oz(z,12,oFD,bED,gg)){cMD.wxVkey=1
}
var oND=_v()
_(oLD,oND)
if(_oz(z,13,oFD,bED,gg)){oND.wxVkey=1
}
var lOD=_v()
_(oLD,lOD)
if(_oz(z,14,oFD,bED,gg)){lOD.wxVkey=1
}
var aPD=_v()
_(oLD,aPD)
if(_oz(z,15,oFD,bED,gg)){aPD.wxVkey=1
}
cMD.wxXCkey=1
oND.wxXCkey=1
lOD.wxXCkey=1
aPD.wxXCkey=1
_(fID,oLD)
cJD.wxXCkey=1
hKD.wxXCkey=1
_(xGD,fID)
return xGD
}
tCD.wxXCkey=2
_2z(z,4,eDD,e,s,gg,tCD,'item','index','index')
}
else{aBD.wxVkey=2
}
aBD.wxXCkey=1
_(r,lAD)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var eRD=_mz(z,'mix-pulldown-refresh',['bind:__l',0,'bind:refresh',1,'bind:setEnableScroll',1,'class',2,'data-event-opts',3,'data-ref',4,'top',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var bSD=_mz(z,'swiper',['bindchange',9,'class',1,'current',2,'data-event-opts',3,'duration',4,'id',5],[],e,s,gg)
var oTD=_v()
_(bSD,oTD)
var xUD=function(fWD,oVD,cXD,gg){
var oZD=_mz(z,'scroll-view',['bindscrolltolower',19,'class',1,'data-event-opts',2,'scrollY',3],[],fWD,oVD,gg)
var c1D=_v()
_(oZD,c1D)
var o2D=function(a4D,l3D,t5D,gg){
var b7D=_mz(z,'view',['bindtap',27,'data-event-opts',1],[],a4D,l3D,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,29,a4D,l3D,gg)){o8D.wxVkey=1
}
else{o8D.wxVkey=2
var x9D=_v()
_(o8D,x9D)
if(_oz(z,30,a4D,l3D,gg)){x9D.wxVkey=1
}
x9D.wxXCkey=1
}
o8D.wxXCkey=1
_(t5D,b7D)
return t5D
}
c1D.wxXCkey=2
_2z(z,25,o2D,fWD,oVD,gg,c1D,'item','index','index')
var o0D=_mz(z,'mix-load-more',['bind:__l',31,'status',1,'vueId',2],[],fWD,oVD,gg)
_(oZD,o0D)
_(cXD,oZD)
return cXD
}
oTD.wxXCkey=4
_2z(z,17,xUD,e,s,gg,oTD,'tabItem','__i0__','id')
_(eRD,bSD)
_(r,eRD)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var cBE=_n('view')
_rz(z,cBE,'class',0,e,s,gg)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,1,e,s,gg)){hCE.wxVkey=1
}
var oDE=_v()
_(cBE,oDE)
if(_oz(z,2,e,s,gg)){oDE.wxVkey=1
}
hCE.wxXCkey=1
oDE.wxXCkey=1
_(r,cBE)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var lGE=_n('view')
_rz(z,lGE,'class',0,e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,1,e,s,gg)){aHE.wxVkey=1
var tIE=_v()
_(aHE,tIE)
var eJE=function(oLE,bKE,xME,gg){
var fOE=_n('view')
_rz(z,fOE,'class',5,oLE,bKE,gg)
var cPE=_v()
_(fOE,cPE)
if(_oz(z,6,oLE,bKE,gg)){cPE.wxVkey=1
var hQE=_n('view')
_rz(z,hQE,'class',7,oLE,bKE,gg)
var oTE=_mz(z,'chat-msg',['bind:__l',8,'content',1,'vueId',2],[],oLE,bKE,gg)
_(hQE,oTE)
var oRE=_v()
_(hQE,oRE)
if(_oz(z,11,oLE,bKE,gg)){oRE.wxVkey=1
}
var cSE=_v()
_(hQE,cSE)
if(_oz(z,12,oLE,bKE,gg)){cSE.wxVkey=1
}
oRE.wxXCkey=1
cSE.wxXCkey=1
_(cPE,hQE)
}
else{cPE.wxVkey=2
var lUE=_n('view')
_rz(z,lUE,'class',13,oLE,bKE,gg)
var aVE=_v()
_(lUE,aVE)
if(_oz(z,14,oLE,bKE,gg)){aVE.wxVkey=1
}
var tWE=_v()
_(lUE,tWE)
if(_oz(z,15,oLE,bKE,gg)){tWE.wxVkey=1
}
var eXE=_mz(z,'view',['a',16,'class',1],[],oLE,bKE,gg)
var bYE=_v()
_(eXE,bYE)
if(_oz(z,18,oLE,bKE,gg)){bYE.wxVkey=1
}
var oZE=_v()
_(eXE,oZE)
if(_oz(z,19,oLE,bKE,gg)){oZE.wxVkey=1
}
var x1E=_mz(z,'chat-msg',['bind:__l',20,'content',1,'vueId',2],[],oLE,bKE,gg)
_(eXE,x1E)
bYE.wxXCkey=1
oZE.wxXCkey=1
_(lUE,eXE)
aVE.wxXCkey=1
tWE.wxXCkey=1
_(cPE,lUE)
}
cPE.wxXCkey=1
cPE.wxXCkey=3
cPE.wxXCkey=3
_(xME,fOE)
return xME
}
tIE.wxXCkey=4
_2z(z,4,eJE,e,s,gg,tIE,'item','index','')
}
else{aHE.wxVkey=2
}
aHE.wxXCkey=1
aHE.wxXCkey=3
_(r,lGE)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var f3E=_n('view')
_rz(z,f3E,'class',0,e,s,gg)
var c4E=_v()
_(f3E,c4E)
if(_oz(z,1,e,s,gg)){c4E.wxVkey=1
var h5E=_v()
_(c4E,h5E)
var o6E=function(o8E,c7E,l9E,gg){
var tAF=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2],[],o8E,c7E,gg)
var eBF=_v()
_(tAF,eBF)
if(_oz(z,9,o8E,c7E,gg)){eBF.wxVkey=1
var bCF=_v()
_(eBF,bCF)
if(_oz(z,10,o8E,c7E,gg)){bCF.wxVkey=1
var oDF=_v()
_(bCF,oDF)
if(_oz(z,11,o8E,c7E,gg)){oDF.wxVkey=1
}
var xEF=_v()
_(bCF,xEF)
if(_oz(z,12,o8E,c7E,gg)){xEF.wxVkey=1
}
var oFF=_n('view')
_rz(z,oFF,'class',13,o8E,c7E,gg)
var fGF=_v()
_(oFF,fGF)
if(_oz(z,14,o8E,c7E,gg)){fGF.wxVkey=1
}
var cHF=_v()
_(oFF,cHF)
if(_oz(z,15,o8E,c7E,gg)){cHF.wxVkey=1
}
var hIF=_mz(z,'chat-msg',['bind:__l',16,'content',1,'sign',2,'vueId',3],[],o8E,c7E,gg)
_(oFF,hIF)
fGF.wxXCkey=1
cHF.wxXCkey=1
_(bCF,oFF)
oDF.wxXCkey=1
xEF.wxXCkey=1
}
else{bCF.wxVkey=2
var oJF=_v()
_(bCF,oJF)
if(_oz(z,20,o8E,c7E,gg)){oJF.wxVkey=1
}
var cKF=_v()
_(bCF,cKF)
if(_oz(z,21,o8E,c7E,gg)){cKF.wxVkey=1
}
var oLF=_n('view')
_rz(z,oLF,'class',22,o8E,c7E,gg)
var lMF=_v()
_(oLF,lMF)
if(_oz(z,23,o8E,c7E,gg)){lMF.wxVkey=1
}
var aNF=_v()
_(oLF,aNF)
if(_oz(z,24,o8E,c7E,gg)){aNF.wxVkey=1
}
var tOF=_mz(z,'chat-msg',['bind:__l',25,'content',1,'sign',2,'vueId',3],[],o8E,c7E,gg)
_(oLF,tOF)
lMF.wxXCkey=1
aNF.wxXCkey=1
_(bCF,oLF)
oJF.wxXCkey=1
cKF.wxXCkey=1
}
bCF.wxXCkey=1
bCF.wxXCkey=3
bCF.wxXCkey=3
}
else{eBF.wxVkey=2
var ePF=_n('view')
_rz(z,ePF,'class',29,o8E,c7E,gg)
var bQF=_v()
_(ePF,bQF)
if(_oz(z,30,o8E,c7E,gg)){bQF.wxVkey=1
}
var oRF=_v()
_(ePF,oRF)
if(_oz(z,31,o8E,c7E,gg)){oRF.wxVkey=1
}
var xSF=_mz(z,'chat-msg',['bind:__l',32,'content',1,'sign',2,'vueId',3],[],o8E,c7E,gg)
_(ePF,xSF)
bQF.wxXCkey=1
oRF.wxXCkey=1
_(eBF,ePF)
}
eBF.wxXCkey=1
eBF.wxXCkey=3
eBF.wxXCkey=3
_(l9E,tAF)
return l9E
}
h5E.wxXCkey=4
_2z(z,4,o6E,e,s,gg,h5E,'item','index','index')
}
else{c4E.wxVkey=2
}
c4E.wxXCkey=1
c4E.wxXCkey=3
_(r,f3E)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/component/component","pages/details/details","pages/details/videoDetails","pages/shilu-login/blog","pages/shilu-login/forget","pages/shilu-login/login","pages/shilu-login/reg","pages/me/me","pages/netty/chat","pages/netty/main_chat","pages/index/publish","pages/me/personal","pages/me/info","pages/me/myInvitation","pages/me/myComment","pages/me/myCollect","pages/me/myFocus","pages/me/myFans","pages/me/setting","pages/me/about"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"新闻模版","navigationBarBackgroundColor":"#55557f","backgroundColor":"#f8f8f8"},"tabBar":{"color":"#C0C4CC","selectedColor":"#55557f","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tab-house.png","selectedIconPath":"static/tab-house-current.png","text":"好玩"},{"pagePath":"pages/netty/main_chat","iconPath":"static/tab-chat.png","selectedIconPath":"static/tab-chat-current.png","text":"信息"},{"pagePath":"pages/me/me","iconPath":"static/tab-my.png","selectedIconPath":"static/tab-my-current.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"好玩社区","compilerVersion":"2.6.5","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/chatmsg.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/chatmsg.wxml']=$gwx('./components/chatmsg.wxml');

__wxAppCode__['components/footer.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/footer.wxml']=$gwx('./components/footer.wxml');

__wxAppCode__['components/mix-advert/vue/mix-advert.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mix-advert/vue/mix-advert.wxml']=$gwx('./components/mix-advert/vue/mix-advert.wxml');

__wxAppCode__['components/mix-load-more/mix-load-more.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mix-load-more/mix-load-more.wxml']=$gwx('./components/mix-load-more/mix-load-more.wxml');

__wxAppCode__['components/mix-loading/mix-loading.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mix-loading/mix-loading.wxml']=$gwx('./components/mix-loading/mix-loading.wxml');

__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/mix-pulldown-refresh/mix-pulldown-refresh.wxml']=$gwx('./components/mix-pulldown-refresh/mix-pulldown-refresh.wxml');

__wxAppCode__['pages/component/component.json']={"navigationBarTitleText":"组件使用示例","bounce":"none","usingComponents":{"mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more"}};
__wxAppCode__['pages/component/component.wxml']=$gwx('./pages/component/component.wxml');

__wxAppCode__['pages/details/details.json']={"navigationBarTitleText":"详情","titleNView":true,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{"mix-loading":"/components/mix-loading/mix-loading"}};
__wxAppCode__['pages/details/details.wxml']=$gwx('./pages/details/details.wxml');

__wxAppCode__['pages/details/videoDetails.json']={"navigationBarTitleText":"详情","titleNView":true,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{"mix-loading":"/components/mix-loading/mix-loading"}};
__wxAppCode__['pages/details/videoDetails.wxml']=$gwx('./pages/details/videoDetails.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"首页","titleNView":{"buttons":[{"type":"menu","float":"right"}]},"usingComponents":{"mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more","mix-advert":"/components/mix-advert/vue/mix-advert"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/publish.json']={"navigationBarTitleText":"发布帖子","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/index/publish.wxml']=$gwx('./pages/index/publish.wxml');

__wxAppCode__['pages/me/about.json']={"navigationBarTitleText":"关于我们","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/about.wxml']=$gwx('./pages/me/about.wxml');

__wxAppCode__['pages/me/info.json']={"navigationBarTitleText":"个人信息","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/info.wxml']=$gwx('./pages/me/info.wxml');

__wxAppCode__['pages/me/me.json']={"navigationBarTitleText":"个人中心","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');

__wxAppCode__['pages/me/myCollect.json']={"navigationBarTitleText":"我的收藏","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{"mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more","mix-advert":"/components/mix-advert/vue/mix-advert"}};
__wxAppCode__['pages/me/myCollect.wxml']=$gwx('./pages/me/myCollect.wxml');

__wxAppCode__['pages/me/myComment.json']={"navigationBarTitleText":"我的评论","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/myComment.wxml']=$gwx('./pages/me/myComment.wxml');

__wxAppCode__['pages/me/myFans.json']={"navigationBarTitleText":"粉丝","enablePullDownRefresh":true,"navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/myFans.wxml']=$gwx('./pages/me/myFans.wxml');

__wxAppCode__['pages/me/myFocus.json']={"navigationBarTitleText":"关注","enablePullDownRefresh":true,"navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/myFocus.wxml']=$gwx('./pages/me/myFocus.wxml');

__wxAppCode__['pages/me/myInvitation.json']={"navigationBarTitleText":"我的帖子","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{"mix-pulldown-refresh":"/components/mix-pulldown-refresh/mix-pulldown-refresh","mix-load-more":"/components/mix-load-more/mix-load-more","mix-advert":"/components/mix-advert/vue/mix-advert"}};
__wxAppCode__['pages/me/myInvitation.wxml']=$gwx('./pages/me/myInvitation.wxml');

__wxAppCode__['pages/me/personal.json']={"titleNView":false,"navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/personal.wxml']=$gwx('./pages/me/personal.wxml');

__wxAppCode__['pages/me/setting.json']={"navigationBarTitleText":"设置","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{}};
__wxAppCode__['pages/me/setting.wxml']=$gwx('./pages/me/setting.wxml');

__wxAppCode__['pages/netty/chat.json']={"navigationBarTitleText":"正在聊天","navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{"chat-msg":"/components/chatmsg"}};
__wxAppCode__['pages/netty/chat.wxml']=$gwx('./pages/netty/chat.wxml');

__wxAppCode__['pages/netty/main_chat.json']={"navigationBarTitleText":"聊天记录","enablePullDownRefresh":true,"navigationBarBackgroundColor":"#55557f","navigationBarTextStyle":"white","usingComponents":{"mt-footer":"/components/footer","chat-msg":"/components/chatmsg"}};
__wxAppCode__['pages/netty/main_chat.wxml']=$gwx('./pages/netty/main_chat.wxml');

__wxAppCode__['pages/shilu-login/blog.json']={"navigationBarTitleText":"协议","titleNView":false,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shilu-login/blog.wxml']=$gwx('./pages/shilu-login/blog.wxml');

__wxAppCode__['pages/shilu-login/forget.json']={"navigationBarTitleText":"忘记密码","titleNView":false,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shilu-login/forget.wxml']=$gwx('./pages/shilu-login/forget.wxml');

__wxAppCode__['pages/shilu-login/login.json']={"navigationBarTitleText":"登录","titleNView":true,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shilu-login/login.wxml']=$gwx('./pages/shilu-login/login.wxml');

__wxAppCode__['pages/shilu-login/reg.json']={"navigationBarTitleText":"注册","titleNView":true,"navigationBarTextStyle":"white","bounce":"none","usingComponents":{}};
__wxAppCode__['pages/shilu-login/reg.wxml']=$gwx('./pages/shilu-login/reg.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0898":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){e("log","App Launch"," at App.vue:4")},onShow:function(){e("log","App Show"," at App.vue:7")},onHide:function(){e("log","App Hide"," at App.vue:10")}};n.default=t}).call(this,t("0de9")["default"])},"3a6f":function(e,n,t){"use strict";(function(e){t("b554"),t("921b");var n=o(t("66fd")),u=o(t("c1e3"));function o(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},u=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),u.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}n.default.config.productionTip=!1,n.default.prototype.socketTask=null,u.default.mpType="app";var a=new n.default(r({},u.default));e(a).$mount()}).call(this,t("6e42")["createApp"])},b2fe:function(e,n,t){"use strict";t.r(n);var u=t("0898"),o=t.n(u);for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);n["default"]=o.a},bb27:function(e,n,t){},be88:function(e,n,t){"use strict";var u=t("bb27"),o=t.n(u);o.a},c1e3:function(e,n,t){"use strict";t.r(n);var u=t("b2fe");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);t("be88");var r,c,a,f,l=t("f0c5"),i=Object(l["a"])(u["default"],r,c,!1,null,null,null,!1,a,f);n["default"]=i.exports}},[["3a6f","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, l = t[0], u = t[1], m = t[2], c = 0, s = []; c < l.length; c++) {
      o = l[c], i[o] && s.push(i[o][0]), i[o] = 0;
    }

    for (r in u) {
      Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    }

    p && p(t);

    while (s.length) {
      s.shift()();
    }

    return a.push.apply(a, m || []), n();
  }

  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, o = 1; o < n.length; o++) {
        var l = n[o];
        0 !== i[l] && (r = !1);
      }

      r && (a.splice(t--, 1), e = u(u.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      a = [];

  function l(e) {
    return u.p + "" + e + ".js";
  }

  function u(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, u), n.l = !0, n.exports;
  }

  u.e = function (e) {
    var t = [],
        n = {
      "components/mix-advert/vue/mix-advert": 1,
      "components/mix-pulldown-refresh/mix-pulldown-refresh": 1,
      "components/mix-load-more/mix-load-more": 1,
      "components/mix-loading/mix-loading": 1,
      "components/chatmsg": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/mix-advert/vue/mix-advert": "components/mix-advert/vue/mix-advert",
        "components/mix-pulldown-refresh/mix-pulldown-refresh": "components/mix-pulldown-refresh/mix-pulldown-refresh",
        "components/mix-load-more/mix-load-more": "components/mix-load-more/mix-load-more",
        "components/mix-loading/mix-loading": "components/mix-loading/mix-loading",
        "components/chatmsg": "components/chatmsg",
        "components/footer": "components/footer"
      }[e] || e) + ".wxss", i = u.p + r, a = document.getElementsByTagName("link"), l = 0; l < a.length; l++) {
        var m = a[l],
            c = m.getAttribute("data-href") || m.getAttribute("href");
        if ("stylesheet" === m.rel && (c === r || c === i)) return t();
      }

      var s = document.getElementsByTagName("style");

      for (l = 0; l < s.length; l++) {
        m = s[l], c = m.getAttribute("data-href");
        if (c === r || c === i) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var r = t && t.target && t.target.src || i,
            a = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        a.request = r, delete o[e], p.parentNode.removeChild(p), n(a);
      }, p.href = i;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var r = i[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var a = new Promise(function (t, n) {
        r = i[e] = [t, n];
      });
      t.push(r[2] = a);
      var m,
          c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, u.nc && c.setAttribute("nonce", u.nc), c.src = l(e), m = function m(t) {
        c.onerror = c.onload = null, clearTimeout(s);
        var n = i[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                a = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            a.type = r, a.request = o, n[1](a);
          }

          i[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        m({
          type: "timeout",
          target: c
        });
      }, 12e4);
      c.onerror = c.onload = m, document.head.appendChild(c);
    }
    return Promise.all(t);
  }, u.m = e, u.c = r, u.d = function (e, t, n) {
    u.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, u.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, u.t = function (e, t) {
    if (1 & t && (e = u(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (u.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      u.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
  }, u.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return u.d(t, "a", t), t;
  }, u.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, u.p = "/", u.oe = function (e) {
    throw console.error(e), e;
  };
  var m = global["webpackJsonp"] = global["webpackJsonp"] || [],
      c = m.push.bind(m);
  m.push = t, m = m.slice();

  for (var s = 0; s < m.length; s++) {
    t(m[s]);
  }

  var p = c;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){return"string"===typeof __channelId__&&__channelId__}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.shift();if(o())return e.push(e.pop().replace("at ","uni-app:///")),console[i]["apply"](console,e);var a=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),s="";if(a.length>1){var u=a.pop();s=a.join("---COMMA---"),0===u.indexOf(" at ")?s+=u:s+="---COMMA---"+u}else s=a[0];console[i](s)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},2787:function(t,e,n){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.uploadAbort=e.uploadFile=void 0;var o=a(n("a34a")),i=a(n("769f"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,r,o,i,a){try{var s=t[i](a),u=s.value}catch(c){return void n(c)}s.done?e(u):Promise.resolve(u).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(r,o){var i=t.apply(e,n);function a(t){s(i,r,o,a,u,"next",t)}function u(t){s(i,r,o,a,u,"throw",t)}a(void 0)})}}var c,l=i.default.apiHost,p=function(){var e=u(o.default.mark(function e(n){var i,a;return o.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:i="",a="",t.getStorage({key:"user",success:function(t){a=t.data.token}}),c=t.uploadFile({url:l+"/other/qiniu/file/upload",filePath:n,header:{"Content-Type":"multipart/form-data",token:a},name:"file",formData:{file:"file"},success:function(e){return r("log","上传"," at common\\request_api\\upload.js:26"),405===e.statusCode&&(r("log","未登陆"," at common\\request_api\\upload.js:28"),t.navigateTo({url:"/pages/shilu-login/login"})),r("log","success:"+JSON.stringify(e)," at common\\request_api\\upload.js:33"),r("log","图片路径：==============="+i," at common\\request_api\\upload.js:34"),i=e.data.data,i},fail:function(t){r("log","error:"+JSON.stringify(t)," at common\\request_api\\upload.js:39")},complete:function(t){r("log","complete:"+JSON.stringify(t)," at common\\request_api\\upload.js:42")}}),c.onProgressUpdate(function(t){r("log","上传进度"+t.progress," at common\\request_api\\upload.js:46"),r("log","已经上传的数据长度"+t.totalBytesSent," at common\\request_api\\upload.js:47"),r("log","预期需要上传的数据总长度"+t.totalBytesExpectedToSend," at common\\request_api\\upload.js:48")});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();e.uploadFile=p;var f=function(){res.progress>50&&c.abort()};e.uploadAbort=f}).call(this,n("6e42")["default"],n("0de9")["default"])},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return h}),n.d(e,"install",function(){return T}),n.d(e,"mapState",function(){return E}),n.d(e,"mapMutations",function(){return P}),n.d(e,"mapGetters",function(){return N}),n.d(e,"mapActions",function(){return I}),n.d(e,"createNamespacedHelpers",function(){return D});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},l={namespaced:{configurable:!0}};l.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,l);var p=function(t){this.register([],t,!1)};function f(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;f(t.concat(r),e.getChild(r),n.modules[r])}}p.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},p.prototype.update=function(t){f([],this.root,t)},p.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new c(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var d;var h=function(t){var e=this;void 0===t&&(t={}),!d&&"undefined"!==typeof window&&window.Vue&&T(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new d;var a=this,s=this,u=s.dispatch,c=s.commit;this.dispatch=function(t,e){return u.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,b(this,o,[],this._modules.root),m(this,o),n.forEach(function(t){return t(e)}),d.config.devtools&&i(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;b(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=d.config.silent;d.config.silent=!0,t._vm=new d({data:{$$state:e},computed:i}),d.config.silent=s,t.strict&&j(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),d.nextTick(function(){return r.$destroy()}))}function b(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=O(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){d.set(s,u,r.state)})}var c=r.context=_(t,a,n);r.forEachMutation(function(e,n){var r=a+n;A(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;x(t,r,o,c)}),r.forEachGetter(function(e,n){var r=a+n;S(t,r,e,c)}),r.forEachChild(function(r,i){b(t,e,n.concat(i),r,o)})}function _(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,u=i.type;return s&&s.root||(u=e+u),t.dispatch(u,a)},commit:r?t.commit:function(n,r,o){var i=k(n,r,o),a=i.payload,s=i.options,u=i.type;s&&s.root||(u=e+u),t.commit(u,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return w(t,e)}},state:{get:function(){return O(t.state,n)}}}),o}function w(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function A(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function x(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return u(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function S(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function j(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function O(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function T(t){d&&t===d||(d=t,r(d))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},h.prototype.commit=function(t,e,n){var r=this,o=k(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),u=this._mutations[i];u&&(this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},h.prototype.dispatch=function(t,e){var n=this,r=k(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},h.prototype.subscribe=function(t){return g(t,this._subscribers)},h.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},h.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},h.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},h.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),b(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},h.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=O(e.state,t.slice(0,-1));d.delete(n,t[t.length-1])}),y(this)},h.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},h.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(h.prototype,v);var E=q(function(t,e){var n={};return U(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=V(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),P=q(function(t,e){var n={};return U(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=V(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),N=q(function(t,e){var n={};return U(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||V(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),I=q(function(t,e){var n={};return U(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=V(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),D=function(t){return{mapState:E.bind(null,t),mapGetters:N.bind(null,t),mapMutations:P.bind(null,t),mapActions:I.bind(null,t)}};function U(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function q(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function V(t,e,n){var r=t._modulesNamespaceMap[n];return r}var R={Store:h,install:T,version:"3.0.1",mapState:E,mapMutations:P,mapGetters:N,mapActions:I,createNamespacedHelpers:D};e["default"]=R},3137:function(t,e,n){"use strict";(function(e){var r=o(n("b16f"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=new r.default;a.init("chatdb","chat"),t.exports=i({table:"chatdb",indexKey:"pmIndexList",pmKey:"pmList",chatKey:"chatList",indexList:function(){return e.getStorageSync(this.indexKey)},add:function(t){a.setTable("chat").insert(t),a.setTable("chatIndex").replaceInsert(t,{gid:t.gid,uid:t.uid,touid:t.touid})},addGroup:function(t){a.setTable("chat").insert(t),a.setTable("chatIndex").replaceInsert(t,{gid:t.gid})},msgList:function(t){return a.setTable("chat").getAll(t)}},"indexList",function(t){return a.setTable("chatIndex").getAll(t)})}).call(this,n("6e42")["default"])},"439e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=null,r=null,o=null;function i(e,r){var o={top:"0px",left:"0px",backgroundColor:"#55557f",height:"100%",width:"100%"};n=new plus.nativeObj.View("advert",o);var i={tag:"img",id:"adverBg",src:e,position:{top:"0px",left:"0px",width:"100%",height:"100%"}};n.draw([i]),n.show(),n.addEventListener("click",function(){t.navigateTo({url:r}),s()},!1)}function a(e){var n=t.getSystemInfoSync().statusBarHeight||34,i=t.getSystemInfoSync().windowWidth,a={top:n+10+"px",left:i-t.upx2px(170)+"px",height:"28px",width:"68px"};r=new plus.nativeObj.View("adverts",a);var u={tag:"rect",id:"rect",rectStyles:{color:"rgba(0,0,0,0.4)",radius:"14px"},position:{top:0,left:0,width:"68px",height:"28px"}},c={tag:"font",id:"adverText",text:"跳过",position:{top:"0px",left:"0px",width:"68px",height:"28px",zIndex:"11"},textStyles:{size:"15px",color:"#fff"}};c.text="跳过 ".concat(e),r.draw([u,c]),r.show(),o=setInterval(function(){e--,e<1?s():(c.text="跳过 ".concat(e),r.draw([c,u]))},1e3),r.addEventListener("click",function(){s()},!1)}function s(){o&&clearInterval(o),o=null,n.close(),r.close()}function u(t){var e=t.timer,n=t.url,r=t.imageUrl;e=e||4,i(r,n),a(e)}var c={initAdvert:u};e.default=c}).call(this,n("6e42")["default"])},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function l(t){return"[object Object]"===c.call(t)}function p(t){return"[object RegExp]"===c.call(t)}function f(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function h(t){return null==t?"":Array.isArray(t)||l(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var b=Object.prototype.hasOwnProperty;function _(t,e){return b.call(t,e)}function w(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,x=w(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),S=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),j=/\B([A-Z])/g,O=w(function(t){return t.replace(j,"-$1").toLowerCase()});function k(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function T(t,e){return t.bind(e)}var E=Function.prototype.bind?T:k;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function N(t,e){for(var n in e)t[n]=e[n];return t}function I(t){for(var e={},n=0;n<t.length;n++)t[n]&&N(e,t[n]);return e}function D(t,e,n){}var U=function(t,e,n){return!1},q=function(t){return t};function V(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return V(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return V(t[n],e[n])})}catch(c){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(V(t[n],e))return n;return-1}function B(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var C=["component","directive","filter"],M=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],F={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:U,isReservedAttr:U,isUnknownElement:U,getTagNamespace:D,parsePlatformTagName:q,mustUseProp:U,async:!0,_lifecycleHooks:M},H=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function G(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function L(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+H.source+".$_\\d]");function W(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,Y="__proto__"in{},J="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=Z&&WXEnvironment.platform.toLowerCase(),X=J&&window.navigator.userAgent.toLowerCase(),$=X&&/msie|trident/.test(X),tt=(X&&X.indexOf("msie 9.0"),X&&X.indexOf("edge/")>0),et=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)||"ios"===Q),nt=(X&&/chrome\/\d+/.test(X),X&&/phantomjs/.test(X),X&&X.match(/firefox\/(\d+)/),{}.watch);if(J)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===K&&(K=!J&&!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},it=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=D,lt=0,pt=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=lt++,this.subs=[]};function ft(t){pt.SharedObject.targetStack.push(t),pt.SharedObject.target=t}function dt(){pt.SharedObject.targetStack.pop(),pt.SharedObject.target=pt.SharedObject.targetStack[pt.SharedObject.targetStack.length-1]}pt.prototype.addSub=function(t){this.subs.push(t)},pt.prototype.removeSub=function(t){m(this.subs,t)},pt.prototype.depend=function(){pt.SharedObject.target&&pt.SharedObject.target.addDep(this)},pt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},pt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},pt.SharedObject.target=null,pt.SharedObject.targetStack=[];var ht=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(ht.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new ht;return e.text=t,e.isComment=!0,e};function yt(t){return new ht(void 0,void 0,void 0,String(t))}function mt(t){var e=new ht(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var bt=Array.prototype,_t=Object.create(bt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var e=bt[t];L(_t,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var At=Object.getOwnPropertyNames(_t),xt=!0;function St(t){xt=t}var jt=function(t){this.value=t,this.dep=new pt,this.vmCount=0,L(t,"__ob__",this),Array.isArray(t)?(Y?t.push!==t.__proto__.push?kt(t,_t,At):Ot(t,_t):kt(t,_t,At),this.observeArray(t)):this.walk(t)};function Ot(t,e){t.__proto__=e}function kt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];L(t,i,e[i])}}function Tt(t,e){var n;if(u(t)&&!(t instanceof ht))return _(t,"__ob__")&&t.__ob__ instanceof jt?n=t.__ob__:xt&&!ot()&&(Array.isArray(t)||l(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new jt(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,o){var i=new pt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&Tt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return pt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&It(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&Tt(e),i.notify())}})}}function Pt(t,e,n){if(Array.isArray(t)&&f(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Nt(t,e){if(Array.isArray(t)&&f(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function It(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&It(e)}jt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},jt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Tt(t[e])};var Dt=F.optionMergeStrategies;function Ut(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],_(t,n)?r!==o&&l(r)&&l(o)&&Ut(r,o):Pt(t,n,o));return t}function qt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?Ut(r,o):o}:e?t?function(){return Ut("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Vt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Bt(t,e,n,r){var o=Object.create(t||null);return e?N(o,e):o}Dt.data=function(t,e,n){return n?qt(t,e,n):e&&"function"!==typeof e?t:qt(t,e)},M.forEach(function(t){Dt[t]=Vt}),C.forEach(function(t){Dt[t+"s"]=Bt}),Dt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in N(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Dt.props=Dt.methods=Dt.inject=Dt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return N(o,t),e&&N(o,e),o},Dt.provide=qt;var Ct=function(t,e){return void 0===e?t:e};function Mt(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=x(o),a[i]={type:null})}else if(l(n))for(var s in n)o=n[s],i=x(s),a[i]=l(o)?o:{type:o};else 0;t.props=a}}function Ft(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(l(n))for(var i in n){var a=n[i];r[i]=l(a)?N({from:i},a):{from:a}}else 0}}function Ht(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Gt(t,e,n){if("function"===typeof e&&(e=e.options),Mt(e,n),Ft(e,n),Ht(e),!e._base&&(e.extends&&(t=Gt(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Gt(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)_(t,i)||s(i);function s(r){var o=Dt[r]||Ct;a[r]=o(t[r],e[r],n,r)}return a}function Lt(t,e,n,r){if("string"===typeof n){var o=t[e];if(_(o,n))return o[n];var i=x(n);if(_(o,i))return o[i];var a=S(i);if(_(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function zt(t,e,n,r){var o=e[t],i=!_(n,t),a=n[t],s=Jt(Boolean,o.type);if(s>-1)if(i&&!_(o,"default"))a=!1;else if(""===a||a===O(t)){var u=Jt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Wt(r,o,t);var c=xt;St(!0),Tt(a),St(c)}return a}function Wt(t,e,n){if(_(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Kt(e.type)?r.call(t):r}}function Kt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Yt(t,e){return Kt(t)===Kt(e)}function Jt(t,e){if(!Array.isArray(e))return Yt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Yt(e[n],t))return n;return-1}function Zt(t,e,n){ft();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(no){Xt(no,r,"errorCaptured hook")}}}Xt(t,e,n)}finally{dt()}}function Qt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&d(i)&&!i._handled&&(i.catch(function(t){return Zt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Zt(no,r,o)}return i}function Xt(t,e,n){if(F.errorHandler)try{return F.errorHandler.call(null,t,e,n)}catch(no){no!==t&&$t(no,null,"config.errorHandler")}$t(t,e,n)}function $t(t,e,n){if(!J&&!Z||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(D)}}else if($||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(no){Zt(no,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function le(t){pe(t,ce),ce.clear()}function pe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof ht)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var fe=w(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function de(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Qt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Qt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function he(t,e,n,o,a,s){var u,c,l,p;for(u in t)c=t[u],l=e[u],p=fe(u),r(c)||(r(l)?(r(c.fns)&&(c=t[u]=de(c,s)),i(p.once)&&(c=t[u]=a(p.name,c,p.capture)),n(p.name,c,p.capture,p.passive,p.params)):c!==l&&(l.fns=c,t[u]=l));for(u in e)r(t[u])&&(p=fe(u),o(p.name,e[u],p.capture))}function ve(t,e,n,i){var a=e.options.mpOptions&&e.options.mpOptions.properties;if(r(a))return n;var s=e.options.mpOptions.externalClasses||[],u=t.attrs,c=t.props;if(o(u)||o(c))for(var l in a){var p=O(l),f=ye(n,c,l,p,!0)||ye(n,u,l,p,!1);f&&n[l]&&-1!==s.indexOf(p)&&i[x(n[l])]&&(n[l]=i[x(n[l])])}return n}function ge(t,e,n,i){var a=e.options.props;if(r(a))return ve(t,e,{},i);var s={},u=t.attrs,c=t.props;if(o(u)||o(c))for(var l in a){var p=O(l);ye(s,c,l,p,!0)||ye(s,u,l,p,!1)}return ve(t,e,s,i)}function ye(t,e,n,r,i){if(o(e)){if(_(e,n))return t[n]=e[n],i||delete e[n],!0;if(_(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function me(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function be(t){return s(t)?[yt(t)]:Array.isArray(t)?we(t):void 0}function _e(t){return o(t)&&o(t.text)&&a(t.isComment)}function we(t,e){var n,a,u,c,l=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=l.length-1,c=l[u],Array.isArray(a)?a.length>0&&(a=we(a,(e||"")+"_"+n),_e(a[0])&&_e(c)&&(l[u]=yt(c.text+a[0].text),a.shift()),l.push.apply(l,a)):s(a)?_e(c)?l[u]=yt(c.text+a):""!==a&&l.push(yt(a)):_e(a)&&_e(c)?l[u]=yt(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),l.push(a)));return l}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function xe(t){var e=Se(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),St(!0))}function Se(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&_(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function je(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Oe)&&delete n[c];return n}function Oe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=Te(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=Ee(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),L(o,"$stable",a),L(o,"$key",s),L(o,"$hasNormal",i),o}function Te(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:be(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Ee(t,e){return function(){return t[e]}}function Pe(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r,r,r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r,r,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),l=c.next();while(!l.done)n.push(e(l.value,n.length,r++,r)),l=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r,r);return o(n)||(n=[]),n._isVList=!0,n}function Ne(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=N(N({},r),n)),o=i(n,this,n._i)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Ie(t){return Lt(this.$options,"filters",t,!0)||q}function De(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Ue(t,e,n,r,o){var i=F.keyCodes[e]||n;return o&&r&&!F.keyCodes[e]?De(o,r):i?De(i,t):r?O(r)!==e:void 0}function qe(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=I(n));var a=function(a){if("class"===a||"style"===a||y(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||F.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=x(a),c=O(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var l=t.on||(t.on={});l["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ve(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Be(r,"__static__"+t,!1),r)}function Re(t,e,n){return Be(t,"__once__"+e+(n?"_"+n:""),!0),t}function Be(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ce(t[r],e+"_"+r,n);else Ce(t,e,n)}function Ce(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Me(t,e){if(e)if(l(e)){var n=t.on=t.on?N({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Fe(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Fe(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function He(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ge(t,e){return"string"===typeof t?e+t:t}function Le(t){t._o=Re,t._n=v,t._s=h,t._l=Pe,t._t=Ne,t._q=V,t._i=R,t._m=Ve,t._f=Ie,t._k=Ue,t._b=qe,t._v=yt,t._e=gt,t._u=Fe,t._g=Me,t._d=He,t._p=Ge}function ze(t,e,r,o,a){var s,u=this,c=a.options;_(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var l=i(c._compiled),p=!l;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Se(c.inject,o),this.slots=function(){return u.$slots||ke(t.scopedSlots,u.$slots=je(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),l&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=on(s,t,e,n,r,p);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(s,t,e,n,r,p)}}function We(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var l in c)u[l]=zt(l,c,e||n);else o(r.attrs)&&Ye(u,r.attrs),o(r.props)&&Ye(u,r.props);var p=new ze(r,u,a,i,t),f=s.render.call(null,p._c,p);if(f instanceof ht)return Ke(f,r,p.parent,s,p);if(Array.isArray(f)){for(var d=be(f)||[],h=new Array(d.length),v=0;v<d.length;v++)h[v]=Ke(d[v],r,p.parent,s,p);return h}}function Ke(t,e,n,r,o){var i=mt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ye(t,e){for(var n in e)t[x(n)]=e[n]}Le(ze.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var r=t.componentInstance=Xe(t,Sn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Tn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(In(n,"onServiceCreated"),In(n,"onServiceAttached"),n._isMounted=!0,In(n,"mounted")),t.data.keepAlive&&(e._isMounted?Ln(n):Pn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Nn(e,!0):e.$destroy())}},Ze=Object.keys(Je);function Qe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var l;if(r(t.cid)&&(l=t,t=vn(l,c),void 0===t))return hn(l,e,n,a,s);e=e||{},dr(t),o(e.model)&&en(t.options,e);var p=ge(e,t,s,n);if(i(t.options.functional))return We(t,p,e,n,a);var f=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}$e(e);var h=t.options.name||s,v=new ht("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:f,tag:s,children:a},l);return v}}}function Xe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function $e(t){for(var e=t.hook||(t.hook={}),n=0;n<Ze.length;n++){var r=Ze[n],o=e[r],i=Je[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var nn=1,rn=2;function on(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=rn),an(t,e,n,r,o)}function an(t,e,n,r,i){if(o(n)&&o(n.__ob__))return gt();if(o(n)&&o(n.is)&&(e=n.is),!e)return gt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=be(r):i===nn&&(r=me(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||F.getTagNamespace(e),a=F.isReservedTag(e)?new ht(F.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Lt(t.$options,"components",e))?new ht(e,n,r,void 0,void 0,t):Qe(u,n,t,r,e)):a=Qe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&sn(a,s),o(n)&&un(n),a):gt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&sn(u,e,n)}}function un(t){u(t.style)&&le(t.style),u(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=je(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;Et(t,"$attrs",i&&i.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var ln,pn=null;function fn(t){Le(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{pn=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Zt(no,e,"render"),t=e._vnode}finally{pn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof ht||(t=gt()),t.parent=o,t}}function dn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=gt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function vn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=pn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,l=null;n.$on("hook:destroyed",function(){return m(a,n)});var p=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==l&&(clearTimeout(l),l=null))},f=B(function(n){t.resolved=dn(n,e),s?a.length=0:p(!0)}),h=B(function(e){o(t.errorComp)&&(t.error=!0,p(!0))}),v=t(f,h);return u(v)&&(d(v)?r(t.resolved)&&v.then(f,h):d(v.component)&&(v.component.then(f,h),o(v.error)&&(t.errorComp=dn(v.error,e)),o(v.loading)&&(t.loadingComp=dn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,p(!1))},v.delay||200)),o(v.timeout)&&(l=setTimeout(function(){l=null,r(t.resolved)&&h(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function gn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||gn(n)))return n}}function mn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function bn(t,e){ln.$on(t,e)}function _n(t,e){ln.$off(t,e)}function wn(t,e){var n=ln;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function An(t,e,n){ln=t,he(e,n||{},bn,_n,wn,t),ln=void 0}function xn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Qt(n[i],e,r,e,o)}return e}}var Sn=null;function jn(t){var e=Sn;return Sn=t,function(){Sn=e}}function On(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=jn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){In(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),In(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Tn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){St(!1);for(var l=t._props,p=t.$options._propKeys||[],f=0;f<p.length;f++){var d=p[f],h=t.$options.props;l[d]=zt(d,h,e,t)}St(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,An(t,r,v),c&&(t.$slots=je(i,o.context),t.$forceUpdate())}function En(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Pn(t,e){if(e){if(t._directInactive=!1,En(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);In(t,"activated")}}function Nn(t,e){if((!e||(t._directInactive=!0,!En(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Nn(t.$children[n]);In(t,"deactivated")}}function In(t,e){ft();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Qt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),dt()}var Dn=[],Un=[],qn={},Vn=!1,Rn=!1,Bn=0;function Cn(){Bn=Dn.length=Un.length=0,qn={},Vn=Rn=!1}var Mn=Date.now;if(J&&!$){var Fn=window.performance;Fn&&"function"===typeof Fn.now&&Mn()>document.createEvent("Event").timeStamp&&(Mn=function(){return Fn.now()})}function Hn(){var t,e;for(Mn(),Rn=!0,Dn.sort(function(t,e){return t.id-e.id}),Bn=0;Bn<Dn.length;Bn++)t=Dn[Bn],t.before&&t.before(),e=t.id,qn[e]=null,t.run();var n=Un.slice(),r=Dn.slice();Cn(),zn(n),Gn(r),it&&F.devtools&&it.emit("flush")}function Gn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&In(r,"updated")}}function Ln(t){t._inactive=!1,Un.push(t)}function zn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Pn(t[e],!0)}function Wn(t){var e=t.id;if(null==qn[e]){if(qn[e]=!0,Rn){var n=Dn.length-1;while(n>Bn&&Dn[n].id>t.id)n--;Dn.splice(n+1,0,t)}else Dn.push(t);Vn||(Vn=!0,ue(Hn))}}var Kn=0,Yn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Kn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=W(e),this.getter||(this.getter=D)),this.value=this.lazy?void 0:this.get()};Yn.prototype.get=function(){var t;ft(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Zt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),dt(),this.cleanupDeps()}return t},Yn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Yn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Yn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wn(this)},Yn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Zt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Yn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Yn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Yn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:D,set:D};function Zn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Qn(t){t._watchers=[];var e=t.$options;e.props&&Xn(t,e.props),e.methods&&ar(t,e.methods),e.data?$n(t):Tt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Xn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||St(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);Et(r,i,a),i in t||Zn(t,"_props",i)};for(var s in e)a(s);St(!0)}function $n(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},l(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&_(r,i)||G(i)||Zn(t,"_data",i)}Tt(e,!0)}function tr(t,e){ft();try{return t.call(e,e)}catch(no){return Zt(no,e,"data()"),{}}finally{dt()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Yn(t,a||D,D,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(Jn.get=r?or(e):ir(n),Jn.set=D):(Jn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):D,Jn.set=n.set||D),Object.defineProperty(t,e,Jn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),pt.SharedObject.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function ar(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?D:E(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)ur(t,n,r[o]);else ur(t,n,r)}}function ur(t,e,n,r){return l(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Pt,t.prototype.$delete=Nt,t.prototype.$watch=function(t,e,n){var r=this;if(l(e))return ur(r,t,e,n);n=n||{},n.user=!0;var o=new Yn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Zt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var lr=0;function pr(t){t.prototype._init=function(t){var e=this;e._uid=lr++,e._isVue=!0,t&&t._isComponent?fr(e,t):e.$options=Gt(dr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,On(e),mn(e),cn(e),In(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&xe(e),Qn(e),"mp-toutiao"!==e.mpHost&&Ae(e),"mp-toutiao"!==e.mpHost&&In(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function fr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function dr(t){var e=t.options;if(t.super){var n=dr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&N(t.extendOptions,o),e=t.options=Gt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function vr(t){this._init(t)}function gr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Gt(this.options,t),this}}function mr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Gt(n.options,t),a["super"]=n,a.options.props&&br(a),a.options.computed&&_r(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,C.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=N({},a.options),o[r]=a,a}}function br(t){var e=t.options.props;for(var n in e)Zn(t.prototype,"_props",n)}function _r(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function wr(t){C.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&l(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ar(t){return t&&(t.Ctor.options.name||t.tag)}function xr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Sr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=Ar(a.componentOptions);s&&!e(s)&&jr(n,i,r,o)}}}function jr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,m(n,e)}pr(vr),cr(vr),xn(vr),kn(vr),fn(vr);var Or=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Or,exclude:Or,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)jr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sr(t,function(t){return xr(e,t)})}),this.$watch("exclude",function(e){Sr(t,function(t){return!xr(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=Ar(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!xr(i,r))||a&&r&&xr(a,r))return e;var s=this,u=s.cache,c=s.keys,l=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[l]?(e.componentInstance=u[l].componentInstance,m(c,l),c.push(l)):(u[l]=e,c.push(l),this.max&&c.length>parseInt(this.max)&&jr(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Tr={KeepAlive:kr};function Er(t){var e={get:function(){return F}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:N,mergeOptions:Gt,defineReactive:Et},t.set=Pt,t.delete=Nt,t.nextTick=ue,t.observable=function(t){return Tt(t),t},t.options=Object.create(null),C.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,N(t.options.components,Tr),gr(t),yr(t),mr(t),wr(t)}Er(vr),Object.defineProperty(vr.prototype,"$isServer",{get:ot}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:ze}),vr.version="2.6.11";var Pr="[object Array]",Nr="[object Object]";function Ir(t,e){var n={};return Dr(t,e),Ur(t,e,"",n),n}function Dr(t,e){if(t!==e){var n=Vr(t),r=Vr(e);if(n==Nr&&r==Nr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Dr(i,e[o])}}else n==Pr&&r==Pr&&t.length>=e.length&&e.forEach(function(e,n){Dr(t[n],e)})}}function Ur(t,e,n,r){if(t!==e){var o=Vr(t),i=Vr(e);if(o==Nr)if(i!=Nr||Object.keys(t).length<Object.keys(e).length)qr(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Vr(i),u=Vr(a);if(s!=Pr&&s!=Nr)i!=e[o]&&qr(r,(""==n?"":n+".")+o,i);else if(s==Pr)u!=Pr?qr(r,(""==n?"":n+".")+o,i):i.length<a.length?qr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Ur(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Nr)if(u!=Nr||Object.keys(i).length<Object.keys(a).length)qr(r,(""==n?"":n+".")+o,i);else for(var c in i)Ur(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Pr?i!=Pr?qr(r,n,t):t.length<e.length?qr(r,n,t):t.forEach(function(t,o){Ur(t,e[o],n+"["+o+"]",r)}):qr(r,n,t)}}function qr(t,e,n){t[e]=n}function Vr(t){return Object.prototype.toString.call(t)}function Rr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Br(t){return Dn.find(function(e){return t._watcher===e})}function Cr(t,e){if(!t.__next_tick_pending&&!Br(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Zt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Mr(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Fr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Mr(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=!1===this.$shouldDiffData?o:Ir(o,i);Object.keys(a).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Rr(n)})):Rr(this)}};function Hr(){}function Gr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Hr),t.$options.render||(t.$options.render=Hr),"mp-toutiao"!==t.mpHost&&In(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Yn(t,r,D,{before:function(){t._isMounted&&!t._isDestroyed&&In(t,"beforeUpdate")}},!0),n=!1,t}function Lr(t,e){return o(t)||o(e)?zr(t,Wr(e)):""}function zr(t,e){return t?e?t+" "+e:t:e||""}function Wr(t){return Array.isArray(t)?Kr(t):u(t)?Yr(t):"string"===typeof t?t:""}function Kr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=Wr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Yr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Jr=w(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Zr(t){return Array.isArray(t)?I(t):"string"===typeof t?Jr(t):t}var Qr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Xr(t[r],n.slice(1).join("."))}function $r(t){t.config.errorHandler=function(t){console.error(t);var e=getApp();e&&e.onError&&e.onError(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:P(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Cr(this,t)},Qr.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=Ae,t.prototype.__init_injections=xe,t.prototype.__call_hook=function(t,e){var n=this;ft();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Qt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t,e),dt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return l(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Xr(e||this,t)},t.prototype.__get_class=function(t,e){return Lr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Zr(t),r=e?N(e,n):n;return Object.keys(r).map(function(t){return O(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}vr.prototype.__patch__=Fr,vr.prototype.$mount=function(t,e){return Gr(this,t,e)},eo(vr),$r(vr),e["default"]=vr}.call(this,n("c8ba6"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=ve,e.createComponent=je,e.createPage=Se,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}function a(t,e){return c(t)||u(t,e)||s()}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function c(t){if(Array.isArray(t))return t}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){return h(t)||d(t)||f()}function f(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var v=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function m(t){return"string"===typeof t}function b(t){return"[object Object]"===v.call(t)}function _(t,e){return g.call(t,e)}function w(){}function A(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var x=/-(\w)/g,S=A(function(t){return t.replace(x,function(t,e){return e?e.toUpperCase():""})}),j=["invoke","success","fail","complete","returnValue"],O={},k={};function T(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?E(n):n}function E(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function P(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function N(t,e){Object.keys(e).forEach(function(n){-1!==j.indexOf(n)&&y(e[n])&&(t[n]=T(t[n],e[n]))})}function I(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==j.indexOf(n)&&y(e[n])&&P(t[n],e[n])})}function D(t,e){"string"===typeof t&&b(e)?N(k[t]||(k[t]={}),e):b(t)&&N(O,t)}function U(t,e){"string"===typeof t?b(e)?I(k[t],e):delete k[t]:b(t)&&I(O,t)}function q(t){return function(e){return t(e)||e}}function V(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function R(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(q(o));else{var i=o(e);if(V(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){R(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function C(t,e){var n=[];Array.isArray(O.returnValue)&&n.push.apply(n,p(O.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,p(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function M(t){var e=Object.create(null);Object.keys(O).forEach(function(t){"returnValue"!==t&&(e[t]=O[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function F(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=M(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=R(a.invoke,n);return s.then(function(t){return e.apply(void 0,[B(a,t)].concat(o))})}return e.apply(void 0,[B(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var H={returnValue:function(t){return V(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},G=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,L=/^create|Manager$/,z=/^on/;function W(t){return L.test(t)}function K(t){return G.test(t)}function Y(t){return z.test(t)&&"onPush"!==t}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function Z(t){return!(W(t)||K(t)||Y(t))}function Q(t,e){return Z(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return y(n.success)||y(n.fail)||y(n.complete)?C(t,F.apply(void 0,[t,e,n].concat(o))):C(t,J(new Promise(function(r,i){F.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var X=1e-4,$=750,tt=!1,et=0,nt=0;function rt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;et=r,nt=n,tt="ios"===e}function ot(t,e){if(0===et&&rt(),t=Number(t),0===t)return 0;var n=t/$*(e||et);return n<0&&(n=-n),n=Math.floor(n+X),0===n?1!==nt&&tt?.5:1:t<0?-n:n}var it={promiseInterceptor:H},at=Object.freeze({__proto__:null,upx2px:ot,interceptors:it,addInterceptor:D,removeInterceptor:U}),st={},ut=[],ct=[],lt=["success","fail","cancel","complete"];function pt(t,e,n){return function(r){return e(dt(t,r,n))}}function ft(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(b(e)){var i=!0===o?e:{};for(var a in y(n)&&(n=n(e,i)||{}),e)if(_(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,i)),s?m(s)?i[s]=e[a]:b(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==lt.indexOf(a)?i[a]=pt(t,e[a],r):o||(i[a]=e[a]);return i}return y(e)&&(e=pt(t,e,r)),e}function dt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(st.returnValue)&&(e=st.returnValue(t,e)),ft(t,e,n,{},r)}function ht(t,e){if(_(st,t)){var n=st[t];return n?function(e,r){var o=n;y(n)&&(o=n(e)),e=ft(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return K(t)?dt(t,a,o.returnValue,W(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var vt=Object.create(null),gt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(o),y(r)&&r(o)}}gt.forEach(function(t){vt[t]=yt(t)});var mt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function bt(t,e,n){return t[e].apply(t,n)}function _t(){return bt(mt(),"$on",Array.prototype.slice.call(arguments))}function wt(){return bt(mt(),"$off",Array.prototype.slice.call(arguments))}function At(){return bt(mt(),"$once",Array.prototype.slice.call(arguments))}function xt(){return bt(mt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({__proto__:null,$on:_t,$off:wt,$once:At,$emit:xt});function jt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Ot(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;jt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Ot(e),e}var Tt=Object.freeze({__proto__:null,getSubNVueById:kt,requireNativePlugin:jt}),Et=Page,Pt=Component,Nt=/:/g,It=A(function(t){return S(t.replace(Nt,"-"))});function Dt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[It(n)].concat(o))}}}function Ut(t,e){var n=e[t];e[t]=n?function(){Dt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Dt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ut("onLoad",t),Et(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Ut("created",t),Pt(t)};var qt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Vt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Rt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Rt(t,e)}):void 0}function Bt(t,e,n){e.forEach(function(e){Rt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Ct(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Mt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ft(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Ht(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return b(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=r[t])}),n}var Gt=[String,Number,Boolean,Object,Array,null];function Lt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function zt(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),b(r)&&r.props&&a.push(e({properties:Kt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){b(t)&&t.props&&a.push(e({properties:Kt(t.props,!0)}))}),a}function Wt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Kt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Lt(t)}}):b(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(b(r)){var o=r["default"];y(o)&&(o=o()),r.type=Wt(e,r.type),n[e]={type:-1!==Gt.indexOf(r.type)?r.type:null,value:o,observer:Lt(e)}}else{var i=Wt(e,r);n[e]={type:-1!==Gt.indexOf(i)?i:null,observer:Lt(e)}}}),n}function Yt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=w,t.preventDefault=w,t.target=t.target||{},_(t,"detail")||(t.detail={}),b(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):b(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Zt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Jt(t,e)}),r}function Qt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Xt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Zt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Qt(t)):"string"===typeof t&&_(s,t)?u.push(s[t]):u.push(t)}),u}var $t="~",te="^";function ee(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ne(t){var e=this;t=Yt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===te;r=s?r.slice(1):r;var u=r.charAt(0)===$t;r=u?r.slice(1):r,a&&ee(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,Xt(e.$vm,t,n[1],n[2],s,r));var a=o[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Xt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var re=["onShow","onHide","onError","onPageNotFound"];function oe(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=l({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Vt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};i.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){i[t]=a[t]}),Bt(i,re),i}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){for(var n,r=t.$children,o=r.length-1;o>=0;o--){var i=r[o];if(i.$scope._$vueId===e)return i}for(var a=r.length-1;a>=0;a--)if(n=ae(r[a],e),n)return n}function se(t){return Behavior(t)}function ue(){return!!this.route}function ce(t){this.triggerEvent("__l",t)}function le(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function pe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ae(this.$vm,r)),e||(e=this.$vm),o.parent=e}function fe(t){return oe(t,{mocks:ie,initRefs:le})}var de=["onUniNViewMessage"];function he(t){var e=fe(t);return Bt(e,de),e}function ve(t){return App(he(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,s=Ct(r.default,t),u=a(s,2),c=u[0],l=u[1],p=i({multipleSlots:!0,addGlobalClass:!0},l.options||{}),f={options:p,data:Ht(l,r.default.prototype),behaviors:zt(l,se),properties:Kt(l.props,!1,l.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ft(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new c(e),Mt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm&&this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:pe,__e:ne}};return Array.isArray(l.wxsCallMethods)&&l.wxsCallMethods.forEach(function(t){f.methods[t]=function(e){return this.$vm[t](e)}}),n?f:[f,c]}function ye(t){return ge(t,{isPage:ue,initRelation:ce})}function me(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var be=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var n=me(t);return Bt(n.methods,be,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function we(t){return _e(t,{isPage:ue,initRelation:ce})}be.push.apply(be,qt);var Ae=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function xe(t){var e=we(t);return Bt(e.methods,Ae),e}function Se(t){return Component(xe(t))}function je(t){return Component(me(t))}ut.forEach(function(t){st[t]=!1}),ct.forEach(function(t){var e=st[t]&&st[t].name?st[t].name:t;wx.canIUse(e)||(st[t]=!1)});var Oe={};Object.keys(at).forEach(function(t){Oe[t]=at[t]}),Object.keys(St).forEach(function(t){Oe[t]=St[t]}),Object.keys(Tt).forEach(function(t){Oe[t]=Q(t,Tt[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(st,t))&&(Oe[t]=Q(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Oe,t.UniEmitter=St),wx.createApp=ve,wx.createPage=Se,wx.createComponent=je;var ke=Oe,Te=ke;e.default=Te}).call(this,n("c8ba6"))},"769f":function(t,e,n){"use strict";(function(e,n){t.exports={apiHost:"http://192.168.1.7:9999",wsHost:"ws://192.168.1.7:9001/ws",MSG_TYPE_CONN:0,MSG_TYPE_SEND:1,MSG_TYPE_REC:2,MSG_TYPE_KEEPALIVE:3,MSG_TYPE_RELOADFRIEND:4,getMessage:function(t,e,n,r,o,i){return{type:t,chatRecord:{id:o,userid:e,friendid:n,message:r},ext:i}},json_add:function(t,e){if(void 0==t||0==t.length)return e;if(void 0==e||0==e.length)return t;var n=JSON.stringify(t),r=JSON.stringify(e),o=n.substring(0,n.length-1)+","+r.substring(1);return JSON.parse(o)},goBack:function(){e("log",Router," at common\\common.js:35"),this.$router.go(-1)},getCookie:function(t){},getAuthCode:function(){var t=n.getStorageSync("authcode");return t||(t=this.getCookie("authcode")),t},setAuthCode:function(t){n.setStorageSync("authcode",t)},getAuthCodeLong:function(){var t=n.getStorageSync("authcodeLong");return t||(t=this.getCookie("authcodeLong")),t},setAuthCodeLong:function(t){n.setStorageSync("authcodeLong",t)},setOpenid:function(t){n.setStorageSync("openid",t)},getOpenid:function(t){n.getStorageSync("openid")},getLoginCode:function(){return n.getStorageInfoSync("loginCode")},setLoginCode:function(t){n.setStorageSync("loginCode",t)},isLogin:function(){return!!this.getLoginCode()},fromapp:function(){return"uniapp"},isWeixin:function(){return!1},request:function(t,r,o){var i="";n.getStorage({key:"user",success:function(t){i=t.data.token}});var a={url:t,data:r,method:o,header:{"Content-Type":"application/json; charset=UTF-8",token:i}},s=new Promise(function(t,r){n.request(a).then(function(r){-1===r[1].data.code&&(e("log","未登陆"," at common\\common.js:126"),n.navigateTo({url:"/pages/shilu-login/login"})),e("log","sucess==============="," at common\\common.js:131"),t(r[1])}).catch(function(t){r(t)})});return s},request_form:function(t,r,o){var i="";n.getStorage({key:"x-auth-token",success:function(t){i=t.data}});var a={url:t,data:r,method:o,header:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8","x-auth-token":i}},s=new Promise(function(t,r){n.request(a).then(function(n){e("log","sucess==============="," at common\\common.js:162"),t(n[1])}).catch(function(t){e("log","fail==============="," at common\\common.js:166"),r(t)})});return s},goHome:function(){n.redirectTo({url:"../index/index"})},goCart:function(){n.switchTab({url:"../cart/index"})},goUser:function(){n.switchTab({url:"../user/index"})},goProduct:function(){n.switchTab({url:"../product/index"})},goFenlei:function(){n.switchTab({url:"../fenlei/index"})},goLogin:function(){n.navigateTo({url:"../login/index"})},goH5WeiXin:function(t){},html:function(t){return""==t||null==t?"":(t=t.replace(' style="','  xstyle="'),t=t.replace(/<img /g,'<img style="max-width:100%;height:auto;"'),t=t.replace(/&hellip;/g,""),t=t.replace(' class="brush:html;toolbar:false"'," "),t=t.replace(/<pre /g,'<pre style="border:1px solid #eee;padding:10px;max-height:300px;overflow:auto;" '),t=t.replace(/<pre /g,"<view "),t=t.replace("</pre>","</view>"),t=t.replace(/\n/g,"<br />"),t=t.replace(/<iframe /,'<view style="display:none" '),t=t.replace(/<\/iframe>/,"</view>"),t=t.replace("<section ","<view "),t=t.replace("</section>","</view>"),t)}}}).call(this,n("0de9")["default"],n("6e42")["default"])},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@next",_id:"@dcloudio/uni-stat@2.0.0-26420200313001",_inBundle:!1,_integrity:"sha512-7dPuazTiDmUyRcw+WW+UlWGKH0eeCUB+p0P4pJVKEHjpdXnXgvDQCSdJk764NH99TfsUycnuxecP5oHckVa88g==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@next",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"next",saveSpec:null,fetchSpec:"next"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26420200313001.tgz",_shasum:"a006e329e033cd412accfa635f8933dbb822a9c3",_spec:"@dcloudio/uni-stat@next",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"b1fdbafab5dd4673cff64188a5203d0c947e4f50",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-26420200313001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var p=e.version,f="https://tongji.dcloud.io/uni/stat",d="https://tongji.dcloud.io/uni/stat.gif",h=1800,v=300,g=10,y="__DC_STAT_UUID",m="__DC_UUID_VALUE";function b(){var e="";if("n"===x()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=m}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,m)}}return e}var _=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},w=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},A=function(){return parseInt((new Date).getTime()/1e3)},x=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},S=function(){var e="";return"wx"!==x()&&"qq"!==x()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},j=function(){return"n"===x()?plus.runtime.version:""},O=function(){var t=x(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=x(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},T="First__Visit__Time",E="Last__Visit__Time",P=function(){var e=t.getStorageSync(T),n=0;return e?n=e:(n=A(),t.setStorageSync(T,n),t.removeStorageSync(E)),n},N=function(){var e=t.getStorageSync(E),n=0;return n=e||"",t.setStorageSync(E,A()),n},I="__page__residence__time",D=0,U=0,q=function(){return D=A(),"n"===x()&&t.setStorageSync(I,A()),D},V=function(){return U=A(),"n"===x()&&(D=t.getStorageSync(I)),U-D},R="Total__Visit__Count",B=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},C=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},M=0,F=0,H=function(){var t=(new Date).getTime();return M=t,F=0,t},G=function(){var t=(new Date).getTime();return F=t,t},L=function(t){var e=0;if(0!==M&&(e=F-M),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>h;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===x()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},W=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===x()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},K=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},Y=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("f53d").default,Z=n("9d38").default||n("9d38"),Q=t.getSystemInfoSync(),X=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:b(),ut:x(),mpn:S(),ak:Z.appid,usv:p,v:j(),ch:O(),cn:"",pn:"",ct:"",t:A(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return l(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){G();var t=L("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,G();var n=L();H();var r=W(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=W(this),e=z();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return H(),this.__licationShow=!1,void(this._lastPageRoute=t);G(),this._lastPageRoute=t;var n=L("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}H()}},{key:"_pageHide",value:function(){if(!this.__licationHide){G();var t=L("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=A(),this.statData.sc=k(t.scene),this.statData.fvts=P(),this.statData.lvts=N(),this.statData.tvc=B(),"n"===x()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:A(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;Z.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=A(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===x()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===x()&&t.setStorageSync("__UNI__STAT__DATA",a),!(V()<g)||n){var s=this._reportingRequestData;"n"===x()&&(s=t.getStorageSync("__UNI__STAT__DATA")),q();var u=[],c=[],l=[],f=function(t){var e=s[t];e.forEach(function(e){var n=w(e);0===t?u.push(n):3===t?l.push(n):c.push(n)})};for(var d in s)f(d);u.push.apply(u,c.concat(l));var h={usv:p,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===x()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==x()||"a"!==this.statData.p?this._sendRequest(h):setTimeout(function(){r._sendRequest(h)},200):this.imageRequest(h)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:f,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=_(C(t)).options;e.src=d+"?"+n}},{key:"sendEvent",value:function(t,e){Y(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),$=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),l(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),l(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,q(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,K(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,K(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(n)}}]),n}(X),tt=$.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag",c="object"===typeof t,l=e.regeneratorRuntime;if(l)c&&(t.exports=l);else{l=e.regeneratorRuntime=c?t.exports:{},l.wrap=_;var p="suspendedStart",f="suspendedYield",d="executing",h="completed",v={},g={};g[a]=function(){return this};var y=Object.getPrototypeOf,m=y&&y(y(I([])));m&&m!==r&&o.call(m,a)&&(g=m);var b=S.prototype=A.prototype=Object.create(g);x.prototype=b.constructor=S,S.constructor=x,S[u]=x.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(b),t},l.awrap=function(t){return{__await:t}},j(O.prototype),O.prototype[s]=function(){return this},l.AsyncIterator=O,l.async=function(t,e,n,r){var o=new O(_(t,e,n,r));return l.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},j(b),b[u]="Generator",b[a]=function(){return this},b.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=I,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return s.type="throw",s.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function _(t,e,n,r){var o=e&&e.prototype instanceof A?e:A,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=k(t,n,a),i}function w(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function A(){}function x(){}function S(){}function j(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function O(t){function e(n,r,i,a){var s=w(t[n],t,r);if("throw"!==s.type){var u=s.arg,c=u.value;return c&&"object"===typeof c&&o.call(c,"__await")?Promise.resolve(c.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(c).then(function(t){u.value=t,i(u)},function(t){return e("throw",t,i,a)})}a(s.arg)}var n;function r(t,r){function o(){return new Promise(function(n,o){e(t,r,n,o)})}return n=n?n.then(o,o):o()}this._invoke=r}function k(t,e,n){var r=p;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return D()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=T(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var u=w(t,e,n);if("normal"===u.type){if(r=n.done?h:f,u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=h,n.method="throw",n.arg=u.arg)}}}function T(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,T(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=w(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:D}}function D(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},"9d38":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__DA7D006"};e.default=r},a34a:function(t,e,n){t.exports=n("bbdd")},b16f:function(t,e,n){"use strict";(function(e){t.exports=function(){return{db:"chat",table:"msg",init:function(t,e){this.db=t,this.table=e},setTable:function(t){return this.table=t,this},find:function(t){},getAll:function(t){var n=this.db+"."+this.table,r=e.getStorageSync(n);if(void 0==t)return r;var o=t,i=new Array;if(r)for(var a,s=0;s<r.length;s++){a=r[s];var u=!0;for(var c in o)a.hasOwnProperty(c)&&a[c]==o[c]||(u=!1);u&&i.push(a)}return i},insert:function(t){var n=this.db+"."+this.table,r=e.getStorageSync(n);if(r)r.push(t),e.setStorageSync(n,r);else{var o=new Array;o.push(t),e.setStorageSync(n,o)}},delete:function(t){},replaceInsert:function(t,n){var r=this.db+"."+this.table,o=e.getStorageSync(r);if(o){for(var i=new Array,a=0;a<o.length;a++){var s=o[a],u=!0;for(var c in n)if(s.hasOwnProperty(c)&&s[c]!=n[c]){u=!1;break}u||i.unshift(s)}if(0==i.length){l=new Array;l.push(t),e.setStorageSync(r,l)}else i.unshift(t),e.setStorageSync(r,i)}else{var l=new Array;l.push(t),e.setStorageSync(r,l)}}}}}).call(this,n("6e42")["default"])},b554:function(t,e,n){},b635:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=[{name:"最新",id:"1"},{name:"推荐",id:"2"}],o=[{id:1,title:"从亲密无间到相爱相杀，这就是人类一败涂地的真相",author:"TapTap",images:["http://fc-feed.cdn.bcebos.com/0/pic/9107b498a0cbea000842763091e833b6.jpg","http://fc-feed.cdn.bcebos.com/0/pic/dc4b0610241d7016279f4f4652ea0886.jpg","http://fc-feed.cdn.bcebos.com/0/pic/0f6effa42536fb5c2ca945bd46c59335.jpg"],time:"2小时前",type:3},{id:2,title:"别再玩手机了，赶紧学前端，晚一年能少掉5根头发",author:"爱考过",images:["https://paimgcdn.baidu.com/v.777468F4BED7DDDA5B4958C671B07659?src=http%3A%2F%2Ffc-feed.cdn.bcebos.com%2F0%2Fpic%2F0bcc93ff9222cafa4526c980c17f69ec.jpg&rz=ar_3_370_245"],time:"30分钟前",type:1},{id:3,title:"将府公园成居民身边“大绿肺”",author:"新京报",images:["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1692298215,2450965851&fm=15&gp=0.jpg"],time:"2小时前",type:3},{id:4,title:"骨傲天最偏爱的五位部下 这么多强者还比不过一只仓鼠",author:"神说要唱歌",images:["data:image/jpeg;base64,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"],videoSrc:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",time:"2019-04-10 11:43",type:2},{id:5,title:"继国通倒下后，又一公司放弃快递业务，曾砸20亿战“三通一达”",author:"全球加盟网",images:["https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2892004605,2174659864&fm=26&gp=0.jpg"],videoSrc:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4",time:"5分钟前",type:3},{id:6,title:"奔驰车主哭诉维权续：双方再次协商无果",author:"环球网",images:[],time:"5分钟前",type:3},{id:7,title:"靠跑车激发潜能，奔驰Pro跑车首测，怎么那么像意大利跑车设计",author:"车品",images:["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2133231534,4242817610&fm=173&app=49&f=JPEG?w=218&h=146&s=4FB42BC55E2A26076B2D1301030060C6","https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1276936674,3021787485&fm=173&app=49&f=JPEG?w=218&h=146&s=4FB02FC40B00064332AD45170300D0C7","https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1909353310,863816541&fm=173&app=49&f=JPEG?w=218&h=146&s=25F67E844C002445437DE8810300E0D3"],time:"2019-04-14 ：10:58",type:3},{id:8,title:"程序员浪漫起来有多可怕，看完这3段代码眼睛湿润了!",author:"车品",images:["http://p3-tt.bytecdn.cn/list/pgc-image/15394993934784aeea82ef5","http://p1-tt.bytecdn.cn/list/pgc-image/153949939338547b7a69cf6","http://p1-tt.bytecdn.cn/list/509a000211b25f210c77"],time:"2019-04-14 ：10:58",type:3}],i=[{src:"http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。"},{src:"http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg",nickname:"Ranth Allngal",time:"09-20 12:54",zan:"54",content:"楼上说的好有道理。"}],a={tabList:r,newsList:o,evaList:i};e.default=a},bbdd:function(t,e,n){var r=function(){return this||"object"===typeof self&&self}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n("96cf"),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(a){r.regeneratorRuntime=void 0}},c8ba6:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cf5f:function(t,e,n){"use strict";t.exports={emoHost:"http://wss.deituicms.com/",emoList:function(){for(var t=new Array,e=0;e<48;e++)t.push("emo"+e);return t},emoIndex:function(t){t=t.replace(/\s*/g,"");for(var e=this.emoList(),n=0;n<e.length;n++)if(e[n]==t)return n;return-1},decodeEmo:function(t){var e=this;t+=" ";var n=t.match(/(\\[^\s]+)\s/g);if(null!=n)for(var r=0;r<n.length;r++){var o=n[r].replace("\\","");o=n[r].replace("\\","");var i=this.emoIndex(o);i>=0&&(t=t.replace(n[r],'<img src="'+e.emoHost+"/emo/jx2/"+(i+1)+'.gif" />'))}return t}}},e0c9:function(t,e,n){"use strict";(function(e,n){var r;function o(){var t=0,e=plus.ios.import("PHPhotoLibrary"),n=e.authorizationStatus();return t=0===n?null:3==n?1:0,plus.ios.deleteObject(e),t}function i(){var t=0,e=plus.ios.import("AVCaptureDevice"),n=e.authorizationStatusForMediaType("vide");return t=0===n?null:3==n?1:0,plus.ios.deleteObject(e),t}function a(){var t=0,e=plus.ios.import("CLLocationManager"),n=e.locationServicesEnabled(),r=e.authorizationStatus();return t=n?0===r?null:3===r||4===r?1:0:2,plus.ios.deleteObject(e),t}function s(){var t=0,n=plus.ios.import("UIApplication"),r=n.sharedApplication(),o=0;if(r.currentUserNotificationSettings){var i=r.currentUserNotificationSettings();o=i.plusGetAttribute("types"),0==o?(t=0,e("log","推送权限没有开启"," at common\\permission.js:63")):(t=1,e("log","已经开启推送功能!"," at common\\permission.js:66")),plus.ios.deleteObject(i)}else o=r.enabledRemoteNotificationTypes(),0==o?(t=3,e("log","推送权限没有开启!"," at common\\permission.js:73")):(t=4,e("log","已经开启推送功能!"," at common\\permission.js:76"));return plus.ios.deleteObject(r),plus.ios.deleteObject(n),t}function u(){var t=0,e=plus.ios.import("CNContactStore"),n=e.authorizationStatusForEntityType(0);return t=0===n?null:3==n?1:0,plus.ios.deleteObject(e),t}function c(){var t=null,n=plus.ios.import("AVAudioSession"),r=n.sharedInstance(),o=r.recordPermission();return e("log","permissionStatus:"+o," at common\\permission.js:104"),t=1970168948===o?null:1735552628===o?1:0,plus.ios.deleteObject(n),t}function l(){var t=null,n=plus.ios.import("EKEventStore"),r=n.authorizationStatusForEntityType(0);return 3==r?(t=1,e("log","日历权限已经开启"," at common\\permission.js:122")):e("log","日历权限没有开启"," at common\\permission.js:124"),plus.ios.deleteObject(n),t}function p(){var t=null,n=plus.ios.import("EKEventStore"),r=n.authorizationStatusForEntityType(1);return 3==r?(t=1,e("log","备忘录权限已经开启"," at common\\permission.js:136")):e("log","备忘录权限没有开启"," at common\\permission.js:138"),plus.ios.deleteObject(n),t}function f(t){return new Promise(function(e,n){switch(t){case"push":e(s());break;case"location":e(a());break;case"record":e(c());break;case"camera":e(i());break;case"album":e(o());break;case"contact":e(u());break;case"calendar":e(l());break;case"memo":e(p());break;default:e(0);break}})}function d(t){return new Promise(function(n,r){plus.android.requestPermissions([t],function(t){for(var r=0,o=0;o<t.granted.length;o++){var i=t.granted[o];e("log","已获取的权限："+i," at common\\permission.js:187"),r=1}for(o=0;o<t.deniedPresent.length;o++){var a=t.deniedPresent[o];e("log","拒绝本次申请的权限："+a," at common\\permission.js:192"),r=0}for(o=0;o<t.deniedAlways.length;o++){var s=t.deniedAlways[o];e("log","永久拒绝申请的权限："+s," at common\\permission.js:197"),r=-1}n(r)},function(t){e("log","result error: "+t.message," at common\\permission.js:203"),n({code:t.code,message:t.message})})})}function h(){if(v.isIOS){var t=plus.ios.import("UIApplication"),e=t.sharedApplication(),n=plus.ios.import("NSURL"),r=n.URLWithString("app-settings:");e.openURL(r),plus.ios.deleteObject(r),plus.ios.deleteObject(n),plus.ios.deleteObject(e)}else{var o=plus.android.importClass("android.content.Intent"),i=plus.android.importClass("android.provider.Settings"),a=plus.android.importClass("android.net.Uri"),s=plus.android.runtimeMainActivity(),u=new o;u.setAction(i.ACTION_APPLICATION_DETAILS_SETTINGS);var c=a.fromParts("package",s.getPackageName(),null);u.setData(c),s.startActivity(u)}}var v={get isIOS(){return"boolean"===typeof r?r:r="ios"===n.getSystemInfoSync().platform},requestIOS:f,requestAndroid:d,gotoAppSetting:h};t.exports=v}).call(this,n("0de9")["default"],n("6e42")["default"])},e397:function(t,e,n){"use strict";(function(e,n){t.exports={incList:[],mp:null,url:"",play:function(t){var r;t=t.replace(/\.\.\/\.\.\//g,"./"),null==this.mp?(r=e.createInnerAudioContext(),this.mp=r,r.src=t,this.url=t,r.onCanplay(function(){n("log","play"," at common\\audio.class.js:20"),r.play()}),r.onPlay(function(){n("log","play"," at common\\audio.class.js:24")}),r.onError(function(t){n("log","error"," at common\\audio.class.js:27")})):(r=this.mp,this.url!=t?(r.src=t,this.url=t,r.onCanplay(function(){n("log","canplay"," at common\\audio.class.js:36"),r.play()})):r.paused?(r.play(),n("log","play"," at common\\audio.class.js:42")):(r.pause(),n("log","stop"," at common\\audio.class.js:45")))}}}).call(this,n("6e42")["default"],n("0de9")["default"])},f0c5:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s,u,c){var l,p="function"===typeof t?t.options:t;if(u&&(p.components=Object.assign(u,p.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(p.mixins||(p.mixins=[])).push(c)),e&&(p.render=e,p.staticRenderFns=n,p._compiled=!0),r&&(p.functional=!0),i&&(p._scopeId="data-v-"+i),a?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},p._ssrRegister=l):o&&(l=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(p.functional){p._injectStyles=l;var f=p.render;p.render=function(t,e){return l.call(e),f(t,e)}}else{var d=p.beforeCreate;p.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:p}}n.d(e,"a",function(){return r})},f53d:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{navigationBarTitleText:"首页",titleNView:{buttons:[{type:"menu",float:"right"}]}},"pages/component/component":{navigationBarTitleText:"组件使用示例",bounce:"none"},"pages/details/details":{navigationBarTitleText:"详情",titleNView:!0,navigationBarTextStyle:"white",bounce:"none"},"pages/details/videoDetails":{navigationBarTitleText:"详情",titleNView:!0,navigationBarTextStyle:"white",bounce:"none"},"pages/shilu-login/blog":{navigationBarTitleText:"协议",titleNView:!1,navigationBarTextStyle:"white",bounce:"none"},"pages/shilu-login/forget":{navigationBarTitleText:"忘记密码",titleNView:!1,navigationBarTextStyle:"white",bounce:"none"},"pages/shilu-login/login":{navigationBarTitleText:"登录",titleNView:!0,navigationBarTextStyle:"white",bounce:"none"},"pages/shilu-login/reg":{navigationBarTitleText:"注册",titleNView:!0,navigationBarTextStyle:"white",bounce:"none"},"pages/me/me":{navigationBarTitleText:"个人中心",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/netty/chat":{navigationBarTitleText:"正在聊天",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/netty/main_chat":{navigationBarTitleText:"聊天记录",enablePullDownRefresh:!0,navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/index/publish":{navigationBarTitleText:"发布帖子",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/personal":{titleNView:!1,navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/info":{navigationBarTitleText:"个人信息",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/myInvitation":{navigationBarTitleText:"我的帖子",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/myComment":{navigationBarTitleText:"我的评论",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/myCollect":{navigationBarTitleText:"我的收藏",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/myFocus":{navigationBarTitleText:"关注",enablePullDownRefresh:!0,navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/myFans":{navigationBarTitleText:"粉丝",enablePullDownRefresh:!0,navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/setting":{navigationBarTitleText:"设置",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"},"pages/me/about":{navigationBarTitleText:"关于我们",navigationBarBackgroundColor:"#55557f",navigationBarTextStyle:"white"}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"新闻模版",navigationBarBackgroundColor:"#55557f",backgroundColor:"#f8f8f8"}};e.default=r}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/chatmsg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/chatmsg.js';

define('components/chatmsg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chatmsg"], {
  "228a": function a(t, n, e) {},
  "26fb": function fb(t, n, e) {
    "use strict";

    (function (t, c) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = a(e("cf5f")),
          u = a(e("e397"));

      function a(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var f = {
        props: {
          content: "",
          sign: {
            type: Number,
            default: 1
          }
        },
        data: function data() {
          return {
            nodes: []
          };
        },
        created: function created() {
          var t,
              n = this.content,
              e = new RegExp(/\[([^=]*)=([^\]]*)\]/g, "g");
          t = e.exec(n), t ? (n = t[2], this.nodes = [{
            type: t[1],
            src: n,
            content: ""
          }]) : this.nodes = [{
            type: "text",
            content: o.default.decodeEmo(this.content)
          }];
        },
        watch: {
          content: function content() {
            var t,
                n = this.content,
                e = new RegExp(/\[([^=]*)=([^\]]*)\]/g, "g");
            t = e.exec(n), t ? (n = t[2], this.nodes = [{
              type: t[1],
              src: n,
              content: ""
            }]) : this.nodes = [{
              type: "text",
              content: o.default.decodeEmo(this.content)
            }];
          }
        },
        methods: {
          touchImg: function touchImg(n) {
            t("log", "点击了图片", " at components\\chatmsg.vue:100");
          },
          playMusic: function playMusic(n) {
            t("log", "点击了播放音乐", " at components\\chatmsg.vue:103"), u.default.play(n);
          },
          downFile: function downFile(t) {
            c.downloadFile({
              url: t,
              success: function success(t) {
                t.statusCode;
              }
            });
          },
          getGift: function getGift(t) {
            this.$emit("call-parent", {
              type: "gift",
              giftid: t
            });
          }
        }
      };
      n.default = f;
    }).call(this, e("0de9")["default"], e("6e42")["default"]);
  },
  c37b: function c37b(t, n, e) {
    "use strict";

    var c = e("228a"),
        o = e.n(c);
    o.a;
  },
  cd7b: function cd7b(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("26fb"),
        o = e.n(c);

    for (var u in c) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(u);
    }

    n["default"] = o.a;
  },
  f0d0: function f0d0(t, n, e) {
    "use strict";

    e.r(n);
    var c = e("f3cd"),
        o = e("cd7b");

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    e("c37b");
    var a,
        f = e("f0c5"),
        i = Object(f["a"])(o["default"], c["b"], c["c"], !1, null, null, null, !1, c["a"], a);
    n["default"] = i.exports;
  },
  f3cd: function f3cd(t, n, e) {
    "use strict";

    var c,
        o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "b", function () {
      return o;
    }), e.d(n, "c", function () {
      return u;
    }), e.d(n, "a", function () {
      return c;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/chatmsg-create-component', {
  'components/chatmsg-create-component': function componentsChatmsgCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f0d0"));
  }
}, [['components/chatmsg-create-component']]]);
});
require('components/chatmsg.js');
__wxRoute = 'components/footer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/footer.js';

define('components/footer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/footer"], {
  "5c39": function c39(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("e77b"),
        c = e("7dc2");

    for (var a in c) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(a);
    }

    var r,
        o = e("f0c5"),
        i = Object(o["a"])(c["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], r);
    t["default"] = i.exports;
  },
  "7dc2": function dc2(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("b258"),
        c = e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = c.a;
  },
  b258: function b258(n, t, e) {
    "use strict";

    (function (n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var e = {
        props: {
          tab: ""
        },
        data: function data() {
          return {
            tabActive: ""
          };
        },
        created: function created() {
          this.tabActive = this.tab;
        },
        methods: {
          goIndex: function goIndex() {
            n.reLaunch({
              url: "../../pages/index/index"
            });
          },
          goContact: function goContact() {
            n.reLaunch({
              url: "../../pages/contact/index"
            });
          },
          goUser: function goUser() {
            n.reLaunch({
              url: "../../pages/user/index"
            });
          },
          goNews: function goNews() {
            n.reLaunch({
              url: "../../pagesblog/sblog/index"
            });
          },
          goMatch: function goMatch() {
            n.reLaunch({
              url: "../../pages/match/index"
            });
          }
        }
      };
      t.default = e;
    }).call(this, e("6e42")["default"]);
  },
  e77b: function e77b(n, t, e) {
    "use strict";

    var u,
        c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        a = [];

    e.d(t, "b", function () {
      return c;
    }), e.d(t, "c", function () {
      return a;
    }), e.d(t, "a", function () {
      return u;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/footer-create-component', {
  'components/footer-create-component': function componentsFooterCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5c39"));
  }
}, [['components/footer-create-component']]]);
});
require('components/footer.js');
__wxRoute = 'components/mix-advert/vue/mix-advert';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-advert/vue/mix-advert.js';

define('components/mix-advert/vue/mix-advert.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-advert/vue/mix-advert"], {
  "08af": function af(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("166d5"),
        u = n.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return r[t];
        });
      }(i);
    }

    e["default"] = u.a;
  },
  "166d5": function d5(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var r = u(n("439e"));

    function u(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var i = {
      data: function data() {
        return {
          advertState: 0,
          interval: null,
          timer: 8
        };
      },
      props: {
        timedown: {
          type: Number,
          default: 8
        },
        imageUrl: {
          type: String,
          default: "/static/advert.jpg"
        },
        url: {
          type: String,
          default: "/pages/test1/test1"
        }
      },
      created: function created() {
        this.timer = this.timedown;
      },
      methods: {
        initAdvert: function initAdvert() {
          this.clickEvent;
          var t = {
            timer: this.timer,
            imageUrl: this.imageUrl,
            url: this.url
          };
          r.default.initAdvert(t);
        }
      }
    };
    e.default = i;
  },
  "43e7": function e7(t, e, n) {
    "use strict";

    var r,
        u = function u() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        i = [];

    n.d(e, "b", function () {
      return u;
    }), n.d(e, "c", function () {
      return i;
    }), n.d(e, "a", function () {
      return r;
    });
  },
  ae5f: function ae5f(t, e, n) {
    "use strict";

    n.r(e);
    var r = n("43e7"),
        u = n("08af");

    for (var i in u) {
      "default" !== i && function (t) {
        n.d(e, t, function () {
          return u[t];
        });
      }(i);
    }

    n("ce7e");
    var a,
        c = n("f0c5"),
        f = Object(c["a"])(u["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], a);
    e["default"] = f.exports;
  },
  ce7e: function ce7e(t, e, n) {
    "use strict";

    var r = n("dcb8"),
        u = n.n(r);
    u.a;
  },
  dcb8: function dcb8(t, e, n) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-advert/vue/mix-advert-create-component', {
  'components/mix-advert/vue/mix-advert-create-component': function componentsMixAdvertVueMixAdvertCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ae5f"));
  }
}, [['components/mix-advert/vue/mix-advert-create-component']]]);
});
require('components/mix-advert/vue/mix-advert.js');
__wxRoute = 'components/mix-load-more/mix-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-load-more/mix-load-more.js';

define('components/mix-load-more/mix-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-load-more/mix-load-more"], {
  "800c": function c(t, n, e) {
    "use strict";

    var u,
        c = function c() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(n, "b", function () {
      return c;
    }), e.d(n, "c", function () {
      return r;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  c1a6: function c1a6(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var u = {
      name: "mix-load-more",
      props: {
        status: {
          type: Number,
          default: 0
        },
        text: {
          type: Array,
          default: function _default() {
            return ["上拉显示更多", "正在加载...", "没有更多数据了"];
          }
        }
      }
    };
    n.default = u;
  },
  c269: function c269(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("800c"),
        c = e("e453");

    for (var r in c) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(r);
    }

    e("d148");
    var a,
        o = e("f0c5"),
        f = Object(o["a"])(c["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], a);
    n["default"] = f.exports;
  },
  d148: function d148(t, n, e) {
    "use strict";

    var u = e("fccc"),
        c = e.n(u);
    c.a;
  },
  e453: function e453(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("c1a6"),
        c = e.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = c.a;
  },
  fccc: function fccc(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-load-more/mix-load-more-create-component', {
  'components/mix-load-more/mix-load-more-create-component': function componentsMixLoadMoreMixLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("c269"));
  }
}, [['components/mix-load-more/mix-load-more-create-component']]]);
});
require('components/mix-load-more/mix-load-more.js');
__wxRoute = 'components/mix-loading/mix-loading';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-loading/mix-loading.js';

define('components/mix-loading/mix-loading.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-loading/mix-loading"], {
  "0b5a": function b5a(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("2745"),
        c = e("ce36");

    for (var r in c) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(r);
    }

    e("0fc3");
    var a,
        o = e("f0c5"),
        f = Object(o["a"])(c["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], a);
    t["default"] = f.exports;
  },
  "0fc3": function fc3(n, t, e) {
    "use strict";

    var u = e("6cb8"),
        c = e.n(u);
    c.a;
  },
  2745: function _(n, t, e) {
    "use strict";

    var u,
        c = function c() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "b", function () {
      return c;
    }), e.d(t, "c", function () {
      return r;
    }), e.d(t, "a", function () {
      return u;
    });
  },
  "6cb8": function cb8(n, t, e) {},
  a7c1: function a7c1(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      props: {
        top: {
          type: Number,
          default: 0
        }
      },
      data: function data() {
        return {};
      },
      methods: {}
    };
    t.default = u;
  },
  ce36: function ce36(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("a7c1"),
        c = e.n(u);

    for (var r in u) {
      "default" !== r && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(r);
    }

    t["default"] = c.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-loading/mix-loading-create-component', {
  'components/mix-loading/mix-loading-create-component': function componentsMixLoadingMixLoadingCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0b5a"));
  }
}, [['components/mix-loading/mix-loading-create-component']]]);
});
require('components/mix-loading/mix-loading.js');
__wxRoute = 'components/mix-pulldown-refresh/mix-pulldown-refresh';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/mix-pulldown-refresh/mix-pulldown-refresh.js';

define('components/mix-pulldown-refresh/mix-pulldown-refresh.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/mix-pulldown-refresh/mix-pulldown-refresh"], {
  "0412": function _(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("62f4"),
        r = n.n(i);

    for (var a in i) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return i[e];
        });
      }(a);
    }

    t["default"] = r.a;
  },
  1465: function _(e, t, n) {},
  "62f4": function f4(e, t, n) {
    "use strict";

    (function (e, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i,
          r,
          a,
          s,
          o = 500,
          u = 0,
          f = {
        props: {
          top: {
            type: Number,
            default: 0
          }
        },
        data: function data() {
          return {
            pageDeviation: 0,
            pageTransition: 0,
            refreshReady: !1,
            refreshing: !1
          };
        },
        computed: {
          pageTop: function pageTop() {
            return e.upx2px(this.top);
          }
        },
        created: function created() {
          e.getSystemInfo({
            success: function success(e) {
              n("log", e, " at components\\mix-pulldown-refresh\\mix-pulldown-refresh.vue:74"), a = e.platform, o = e.windowHeight;
            }
          });
        },
        methods: {
          pageTouchstart: function pageTouchstart(e) {
            s = !1, this.pageTransition = 0, i = e.touches[0].pageY;
          },
          pageTouchmove: function pageTouchmove(e) {
            s || (r = .4 * (e.touches[0].pageY - i), r >= 0 && (this.pageDeviation = r, this.$emit("setEnableScroll", !1)), r >= 50 && !1 === this.refreshReady ? this.refreshReady = !0 : r < 50 && !0 === this.refreshReady && (this.refreshReady = !1), "ios" === a && e.touches[0].pageY > o + 10 && this.pageTouchend());
          },
          pageTouchend: function pageTouchend() {
            s = !0, 0 !== r && (this.pageTransition = .3, r >= 50 ? this.startPulldownRefresh() : this.pageDeviation = 0, !0 === this.refreshReady && (this.refreshReady = !1), this.$emit("setEnableScroll", !0), i = r = 0);
          },
          startPulldownRefresh: function startPulldownRefresh() {
            +new Date() - u < 100 || (u = +new Date(), this.refreshing = !0, this.pageDeviation = e.upx2px(90), this.$emit("refresh"));
          },
          endPulldownRefresh: function endPulldownRefresh() {
            this.refreshing = !1, this.pageDeviation = e.upx2px(0);
          }
        }
      };
      t.default = f;
    }).call(this, n("6e42")["default"], n("0de9")["default"]);
  },
  "8a0e": function a0e(e, t, n) {
    "use strict";

    n.r(t);
    var i = n("9a54"),
        r = n("0412");

    for (var a in r) {
      "default" !== a && function (e) {
        n.d(t, e, function () {
          return r[e];
        });
      }(a);
    }

    n("bbca");
    var s,
        o = n("f0c5"),
        u = Object(o["a"])(r["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], s);
    t["default"] = u.exports;
  },
  "9a54": function a54(e, t, n) {
    "use strict";

    var i,
        r = function r() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        a = [];

    n.d(t, "b", function () {
      return r;
    }), n.d(t, "c", function () {
      return a;
    }), n.d(t, "a", function () {
      return i;
    });
  },
  bbca: function bbca(e, t, n) {
    "use strict";

    var i = n("1465"),
        r = n.n(i);
    r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component', {
  'components/mix-pulldown-refresh/mix-pulldown-refresh-create-component': function componentsMixPulldownRefreshMixPulldownRefreshCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8a0e"));
  }
}, [['components/mix-pulldown-refresh/mix-pulldown-refresh-create-component']]]);
});
require('components/mix-pulldown-refresh/mix-pulldown-refresh.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"32ee":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("a34a")),i=u(n("769f")),o=u(n("b635"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,r,a,i,o){try{var u=e[i](o),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function o(e){l(i,r,a,o,u,"next",e)}function u(e){l(i,r,a,o,u,"throw",e)}o(void 0)})}}var d,c=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-advert/vue/mix-advert")]).then(n.bind(null,"ae5f"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e"))},v=function(){return n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},h=0,m=!1,b={components:{mixPulldownRefresh:f,mixLoadMore:v,mixAdvert:c},data:function(){return{tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,tabBars:[],invList:[],currentPage:1,pageSize:10,socketTask:null,userId:""}},computed:{advertNavUrl:function(){var e={title:"测试跳转新闻详情",author:"测试作者",time:"2019-04-26 21:21"};return"/pages/details/details?data=".concat(JSON.stringify(e))}},onLoad:function(){h=e.getSystemInfoSync().windowWidth,this.loadTabbars(),this.loadInvList("refresh")},onReady:function(){this.$refs.mixAdvert.initAdvert()},methods:{toPersonal:function(t){r("log","userId:"+t," at pages\\index\\index.vue:178"),e.navigateTo({url:"../me/personal?userId="+t})},onNavigationBarButtonTap:function(t){e.navigateTo({url:"/pages/index/publish"})},loadTabbars:function(){var e=o.default.tabList;e.forEach(function(e){e.newsList=[],e.loadMoreStatus=0,e.refreshing=0}),this.tabBars=e,this.loadInvList("add")},loadInvList:function(t){var n=this,a=this,o=this.tabBars[this.tabCurrentIndex];if("add"===t){if(2===o.loadMoreStatus)return;o.loadMoreStatus=1}else"refresh"===t&&(o.refreshing=!0);var u={currentPage:this.currentPage,pageSize:this.pageSize},l=i.default.apiHost+"/invitation/tInvitation/front/list?currentPage="+u.currentPage+"&pageSize="+u.pageSize,s="GET";i.default.request(l,null,s).then(function(e){r("log","请求列表成功=============="," at pages\\index\\index.vue:231"),setTimeout(function(){var r=null;r=e.data.data;for(var i=r.records,u=0;u<i.length;u++)if(null!=i[u].invImage&&""!=i[u].invImage){var l=i[u].invImage.split(",");i[u].invImage=l}"refresh"===t&&(a.invList=[]),a.invList=i,"refresh"===t&&(n.$refs.mixPulldownRefresh&&n.$refs.mixPulldownRefresh.endPulldownRefresh(),o.refreshing=!1,o.loadMoreStatus=0),"add"===t&&(o.loadMoreStatus=a.invList.length<10?2:0)},0)}).catch(function(t){e.showToast({title:"服务器异常...稍后再试",duration:2e3})})},navToDetails:function(t){var n={id:t.id,title:t.title,author:t.author,time:t.time},r=t.invVideo?"videoDetails":"details";e.navigateTo({url:"/pages/details/".concat(r,"?data=").concat(JSON.stringify(n))})},onPulldownReresh:function(){r("log","刷新......"," at pages\\index\\index.vue:323"),this.loadInvList("refresh")},loadMore:function(){r("log","触底......"," at pages\\index\\index.vue:328"),this.loadInvList("add")},setEnableScroll:function(e){this.enableScroll!==e&&(this.enableScroll=e)},changeTab:function(){var e=s(a.default.mark(function e(t){var n,r,i,o,u,l=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(m&&(clearTimeout(m),m=!1),n=t,"object"===typeof t&&(n=t.detail.current),"object"===typeof d){e.next=7;break}return e.next=6,this.getElSize("nav-bar");case 6:d=e.sent;case 7:d.scrollLeft,r=0,i=0,o=0;case 11:if(!(o<=n)){e.next=20;break}return e.next=14,this.getElSize("tab"+o);case 14:u=e.sent,r+=u.width,o===n&&(i=u.width);case 17:o++,e.next=11;break;case 20:"number"===typeof t&&(this.tabCurrentIndex=n),m=setTimeout(function(){l.scrollLeft=r-i/2>h/2?r-i/2-h/2:0,"object"===typeof t&&(l.tabCurrentIndex=n),l.tabCurrentIndex=n;var e=l.tabBars[l.tabCurrentIndex];0!==l.tabCurrentIndex&&!0!==e.loaded&&(l.loadInvList("add"),e.loaded=!0)},300);case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getElSize:function(t){return new Promise(function(n,r){var a=e.createSelectorQuery().select("#"+t);a.fields({size:!0,scrollOffset:!0,rect:!0},function(e){n(e)}).exec()})}}};t.default=b}).call(this,n("6e42")["default"],n("0de9")["default"])},"383c":function(e,t,n){"use strict";n.r(t);var r=n("e2fa"),a=n("e715");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("c9a1");var o,u=n("f0c5"),l=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=l.exports},c9a1:function(e,t,n){"use strict";var r=n("f786"),a=n.n(r);a.a},df4b:function(e,t,n){"use strict";(function(e){n("b554"),n("921b");r(n("66fd"));var t=r(n("383c"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e2fa:function(e,t,n){"use strict";var r={"mix-pulldown-refresh":()=>Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e")),"mix-load-more":()=>n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return r})},e715:function(e,t,n){"use strict";n.r(t);var r=n("32ee"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=a.a},f786:function(e,t,n){}},[["df4b","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/component/component';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/component/component.js';

define('pages/component/component.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/component/component"],{1515:function(n,e,o){"use strict";o.r(e);var t=o("481a"),r=o.n(t);for(var a in t)"default"!==a&&function(n){o.d(e,n,function(){return t[n]})}(a);e["default"]=r.a},"481a":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(){return Promise.all([o.e("common/vendor"),o.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(o.bind(null,"8a0e"))},r=function(){return o.e("components/mix-load-more/mix-load-more").then(o.bind(null,"c269"))},a={components:{mixPulldownRefresh:t,mixLoadMore:r},data:function(){return{list:[],loadMoreStatus:0}},onLoad:function(){this.loadData("add")},onReachBottom:function(){this.loadData("add")},methods:{loadData:function(n){var e=this;"add"===n&&(this.loadMoreStatus=1),setTimeout(function(){"refresh"===n&&(e.list=[]);for(var o=e.list.length,t=o;t<o+10;t++)e.list.push(t);"add"===n&&(e.loadMoreStatus=0),"refresh"===n&&e.$refs.mixPulldownRefresh&&e.$refs.mixPulldownRefresh.endPulldownRefresh()},1e3)},onPulldownReresh:function(){this.loadData("refresh")}}};e.default=a},"8fc0":function(n,e,o){"use strict";(function(n){o("b554"),o("921b");t(o("66fd"));var e=t(o("bad3"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,o("6e42")["createPage"])},a707:function(n,e,o){"use strict";var t=o("e1b2"),r=o.n(t);r.a},a882:function(n,e,o){"use strict";var t={"mix-pulldown-refresh":()=>Promise.all([o.e("common/vendor"),o.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(o.bind(null,"8a0e")),"mix-load-more":()=>o.e("components/mix-load-more/mix-load-more").then(o.bind(null,"c269"))},r=function(){var n=this,e=n.$createElement;n._self._c},a=[];o.d(e,"b",function(){return r}),o.d(e,"c",function(){return a}),o.d(e,"a",function(){return t})},bad3:function(n,e,o){"use strict";o.r(e);var t=o("a882"),r=o("1515");for(var a in r)"default"!==a&&function(n){o.d(e,n,function(){return r[n]})}(a);o("a707");var u,l=o("f0c5"),i=Object(l["a"])(r["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],u);e["default"]=i.exports},e1b2:function(n,e,o){}},[["8fc0","common/runtime","common/vendor"]]]);
});
require('pages/component/component.js');
__wxRoute = 'pages/details/details';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/details/details.js';

define('pages/details/details.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/details"],{"0a99":function(t,n,e){"use strict";var i=e("d4b0"),a=e.n(i);a.a},2702:function(t,n,e){"use strict";e.r(n);var i=e("3b23"),a=e("8a7e");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("0a99");var u,d=e("f0c5"),l=Object(d["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);n["default"]=l.exports},"2bcb":function(t,n,e){"use strict";(function(t){e("b554"),e("921b");i(e("66fd"));var n=i(e("2702"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"3b23":function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})},"8a7e":function(t,n,e){"use strict";e.r(n);var i=e("cf97"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},cf97:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=u(e("a34a")),o=(u(e("b635")),u(e("769f")));function u(t){return t&&t.__esModule?t:{default:t}}function d(t,n,e,i,a,o,u){try{var d=t[o](u),l=d.value}catch(s){return void e(s)}d.done?n(l):Promise.resolve(l).then(i,a)}function l(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var o=t.apply(n,e);function u(t){d(o,i,a,u,l,"next",t)}function l(t){d(o,i,a,u,l,"throw",t)}u(void 0)})}}var s=function(){return e.e("components/mix-loading/mix-loading").then(e.bind(null,"0b5a"))},r={components:{mixLoading:s},data:function(){return{invId:0,userId:0,loading:!0,comContent:"",comSign:!1,detailData:{},detailInv:{},newsList:[],evaList:[]}},onLoad:function(n){this.detailData=JSON.parse(n.data),this.invId=this.detailData.id;var e=this;t.getStorage({key:"user",success:function(t){e.userId=t.data.id}}),this.loadDetailInv(),this.loadCollectStatus()},methods:{share:function(){t.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://uniapp.dcloud.io/",title:"好玩社区",summary:"我正在使用好玩社区，快来一起来体验吧！",imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(n){t.showToast({title:"分享成功",duration:2e3})},fail:function(n){t.showToast({title:"分享失败",duration:2e3})}})},invLaudAdd:function(){var n=this,e={userId:n.userId,poId:"laud-inv-"+n.invId},i=o.default.apiHost+"/invitation/tInvitation/laud/add",a="POST";o.default.request(i,e,a).then(function(e){t.showToast({title:"只能点一次赞哦~",duration:2e3}),n.loadDetailInv()})},comLaudAdd:function(n){var e=this,i={userId:e.userId,poId:"laud-com-"+e.invId+"-"+n},a=o.default.apiHost+"/invitation/tInvitation/laud/add",u="POST";o.default.request(a,i,u).then(function(n){t.showToast({title:"只能点一次赞哦~",duration:2e3}),e.loadDetailInv()})},invCollectAdd:function(){var n=this;if(n.comSign){var e={userId:"collect-inv-"+n.userId,poId:n.invId},i=o.default.apiHost+"/invitation/tInvitation/collect/move",a="POST";o.default.request(i,e,a).then(function(e){1==e.data.code&&(n.comSign=!1,t.showToast({title:"取消收藏成功",duration:2e3}))})}else{e={userId:"collect-inv-"+n.userId,poId:n.invId},i=o.default.apiHost+"/invitation/tInvitation/collect/add",a="POST";o.default.request(i,e,a).then(function(e){1==e.data.code&&(n.comSign=!0,t.showToast({title:"收藏成功",duration:2e3}))})}},loadCollectStatus:function(){var t=this,n={userId:"collect-inv-"+t.userId,poId:t.invId},e=o.default.apiHost+"/invitation/tInvitation/collect/or",i="POST";o.default.request(e,n,i).then(function(n){1==n.data.code&&(t.comSign=n.data.data)})},toPersonal:function(n){i("log","userId:"+n," at pages\\details\\details.vue:245"),t.navigateTo({url:"../me/personal?userId="+n})},sendMSg:function(){var n=this;if(null==n.comContent||""==n.comContent)t.showToast({title:"发表的评论不能为空哦~",duration:2e3});else{n=this;var e={userId:n.userId,invId:n.invId,comContent:n.comContent},i=o.default.apiHost+"/invitation/tComment/save",a="POST";o.default.request(i,e,a).then(function(e){1!=e.data.code?t.showToast({title:"发表评论失败,请稍后再试...",duration:2e3}):(t.showToast({title:"发表评论成功",duration:2e3}),n.loadDetailInv(),n.comContent=""),n.loading=!1}).catch(function(e){t.showToast({title:"服务器异常，发表评论失败...",duration:2e3}),n.loading=!1})}},loadDetailInv:function(){var n=l(a.default.mark(function n(){var e,u,d;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:e=this,u=o.default.apiHost+"/invitation/tInvitation/front/get/"+e.invId,d="GET",o.default.request(u,null,d).then(function(n){if(1!=n.data.code)t.showToast({title:"稍后再试...",duration:2e3});else{i("log","加载详情: "+e.invId," at pages\\details\\details.vue:305"),e.detailInv=n.data.data;var a=e.detailInv.invImage;if(null!=a&&""!=a){var o=a.split(",");e.detailInv.invImage=o}e.evaList=e.detailInv.commentList}e.loading=!1}).catch(function(n){t.showToast({title:"服务器异常，请稍后再试...",duration:2e3}),e.loading=!1});case 4:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}()}};n.default=r}).call(this,e("6e42")["default"],e("0de9")["default"])},d4b0:function(t,n,e){}},[["2bcb","common/runtime","common/vendor"]]]);
});
require('pages/details/details.js');
__wxRoute = 'pages/details/videoDetails';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/details/videoDetails.js';

define('pages/details/videoDetails.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/details/videoDetails"],{"0d80":function(t,n,e){"use strict";var i=e("efba"),a=e.n(i);a.a},"9dc1":function(t,n,e){"use strict";(function(t){e("b554"),e("921b");i(e("66fd"));var n=i(e("caaf"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},b1c2:function(t,n,e){"use strict";e.r(n);var i=e("cff8"),a=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);n["default"]=a.a},caaf:function(t,n,e){"use strict";e.r(n);var i=e("f9ed"),a=e("b1c2");for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);e("0d80");var d,u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],d);n["default"]=s.exports},cff8:function(t,n,e){"use strict";(function(t,i){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=d(e("a34a")),o=(d(e("b635")),d(e("769f")));function d(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,i,a,o,d){try{var u=t[o](d),s=u.value}catch(l){return void e(l)}u.done?n(s):Promise.resolve(s).then(i,a)}function s(t){return function(){var n=this,e=arguments;return new Promise(function(i,a){var o=t.apply(n,e);function d(t){u(o,i,a,d,s,"next",t)}function s(t){u(o,i,a,d,s,"throw",t)}d(void 0)})}}var l=function(){return e.e("components/mix-loading/mix-loading").then(e.bind(null,"0b5a"))},c={components:{mixLoading:l},data:function(){return{invId:0,userId:0,comContent:"",comSign:!1,loading:!0,detailData:{},detailInv:{},newsList:[],evaList:[]}},onLoad:function(n){this.detailData=JSON.parse(n.data),this.invId=this.detailData.id;var e=this;t.getStorage({key:"user",success:function(t){e.userId=t.data.id}}),this.loadDetailInv(),this.loadCollectStatus()},methods:{share:function(){t.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:"http://uniapp.dcloud.io/",title:"好玩社区",summary:"我正在使用好玩社区，快来一起来体验吧！",imageUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png",success:function(n){t.showToast({title:"分享成功",duration:2e3})},fail:function(n){t.showToast({title:"分享失败",duration:2e3})}})},invLaudAdd:function(){var n=this,e={userId:n.userId,poId:"laud-inv-"+n.invId},i=o.default.apiHost+"/invitation/tInvitation/laud/add",a="POST";o.default.request(i,e,a).then(function(e){t.showToast({title:"只能点一次赞哦~",duration:2e3}),n.loadDetailInv()})},comLaudAdd:function(n){var e=this,i={userId:e.userId,poId:"laud-com-"+e.invId+"-"+n},a=o.default.apiHost+"/invitation/tInvitation/laud/add",d="POST";o.default.request(a,i,d).then(function(n){t.showToast({title:"只能点一次赞哦~",duration:2e3}),e.loadDetailInv()})},invCollectAdd:function(){var n=this;if(n.comSign){var e={userId:"collect-inv-"+n.userId,poId:n.invId},i=o.default.apiHost+"/invitation/tInvitation/collect/move",a="POST";o.default.request(i,e,a).then(function(e){1==e.data.code&&(n.comSign=!1,t.showToast({title:"取消收藏成功",duration:2e3}))})}else{e={userId:"collect-inv-"+n.userId,poId:n.invId},i=o.default.apiHost+"/invitation/tInvitation/collect/add",a="POST";o.default.request(i,e,a).then(function(e){1==e.data.code&&(n.comSign=!0,t.showToast({title:"收藏成功",duration:2e3}))})}},loadCollectStatus:function(){var t=this,n={userId:"collect-inv-"+t.userId,poId:t.invId},e=o.default.apiHost+"/invitation/tInvitation/collect/or",i="POST";o.default.request(e,n,i).then(function(n){1==n.data.code&&(t.comSign=n.data.data)})},toPersonal:function(n){i("log","userId:"+n," at pages\\details\\videoDetails.vue:246"),t.navigateTo({url:"../me/personal?userId="+n})},sendMSg:function(){var n=this;if(null==n.comContent||""==n.comContent)t.showToast({title:"发表的评论不能为空哦~",duration:2e3});else{n=this;var e={userId:n.userId,invId:n.invId,comContent:n.comContent},i=o.default.apiHost+"/invitation/tComment/save",a="POST";o.default.request(i,e,a).then(function(e){1!=e.data.code?t.showToast({title:"发表评论失败,请稍后再试...",duration:2e3}):(t.showToast({title:"发表评论成功",duration:2e3}),n.loadDetailInv(),n.comContent=""),n.loading=!1}).catch(function(e){t.showToast({title:"服务器异常，发表评论失败...",duration:2e3}),n.loading=!1})}},loadDetailInv:function(){var n=s(a.default.mark(function n(){var e,d,u;return a.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:e=this,d=o.default.apiHost+"/invitation/tInvitation/front/get/"+e.invId,u="GET",o.default.request(d,null,u).then(function(n){1!=n.data.code?t.showToast({title:"稍后再试...",duration:2e3}):(i("log","加载详情: "+e.invId," at pages\\details\\videoDetails.vue:306"),e.detailInv=n.data.data,e.evaList=e.detailInv.commentList),e.loading=!1}).catch(function(n){t.showToast({title:"服务器异常，请稍后再试...",duration:2e3}),e.loading=!1});case 4:case"end":return n.stop()}},n,this)}));function e(){return n.apply(this,arguments)}return e}(),redirectToDetail:function(){t.redirectTo({url:"details"})}}};n.default=c}).call(this,e("6e42")["default"],e("0de9")["default"])},efba:function(t,n,e){},f9ed:function(t,n,e){"use strict";var i,a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return i})}},[["9dc1","common/runtime","common/vendor"]]]);
});
require('pages/details/videoDetails.js');
__wxRoute = 'pages/shilu-login/blog';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shilu-login/blog.js';

define('pages/shilu-login/blog.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/blog"],{"03e7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{articleurl:"",webviewStyles:{progress:{color:"#FF7200"}}}},onLoad:function(t){this.articleurl="协议网址"}};n.default=u},2840:function(t,n,e){"use strict";e.r(n);var u=e("8590"),r=e("c674");for(var c in r)"default"!==c&&function(t){e.d(n,t,function(){return r[t]})}(c);var o,a=e("f0c5"),i=Object(a["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);n["default"]=i.exports},8590:function(t,n,e){"use strict";var u,r=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return r}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return u})},"95ec":function(t,n,e){"use strict";(function(t){e("b554"),e("921b");u(e("66fd"));var n=u(e("2840"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c674:function(t,n,e){"use strict";e.r(n);var u=e("03e7"),r=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=r.a}},[["95ec","common/runtime","common/vendor"]]]);
});
require('pages/shilu-login/blog.js');
__wxRoute = 'pages/shilu-login/forget';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shilu-login/forget.js';

define('pages/shilu-login/forget.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/forget"],{"110a":function(t,n,o){},"62c8":function(t,n,o){"use strict";o.r(n);var e=o("7a20"),s=o("c2b7");for(var a in s)"default"!==a&&function(t){o.d(n,t,function(){return s[t]})}(a);o("8490");var c,i=o("f0c5"),u=Object(i["a"])(s["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],c);n["default"]=u.exports},"64a5":function(t,n,o){"use strict";(function(t){var o,e;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{phoneno:"",second:0,code:"",showPassword:!1,password:""}},onLoad:function(){o=this},computed:{yanzhengma:function(){return 0==this.second?"获取验证码":this.second<10?"重新获取0"+this.second:"重新获取"+this.second}},methods:{display:function(){this.showPassword=!this.showPassword},getcode:function(){this.second>0||t.request({url:"http://***/getcode.html",data:{phoneno:this.phoneno,code_type:"reg"},method:"POST",dataType:"json",success:function(n){200!=n.data.code?(t.showToast({title:n.data.msg,icon:"none"}),o.second=0):(t.showToast({title:n.data.msg}),o.second=60,e=setInterval(function(){o.second--,0==o.second&&clearInterval(e)},1e3))}})},bindLogin:function(){11==this.phoneno.length?this.password.length<6?t.showToast({icon:"none",title:"密码不正确"}):4==this.code.length?t.request({url:"http://***/forget.html",data:{phoneno:this.phoneno,password:this.password,code:this.code},method:"POST",dataType:"json",success:function(n){200!=n.data.code?t.showToast({title:n.data.msg,icon:"none"}):(t.showToast({title:n.data.msg}),setTimeout(function(){t.navigateBack()},1500))}}):t.showToast({icon:"none",title:"验证码不正确"}):t.showToast({icon:"none",title:"手机号不正确"})}}};n.default=s}).call(this,o("6e42")["default"])},"7a20":function(t,n,o){"use strict";var e,s=function(){var t=this,n=t.$createElement;t._self._c},a=[];o.d(n,"b",function(){return s}),o.d(n,"c",function(){return a}),o.d(n,"a",function(){return e})},8490:function(t,n,o){"use strict";var e=o("110a"),s=o.n(e);s.a},ba96:function(t,n,o){"use strict";(function(t){o("b554"),o("921b");e(o("66fd"));var n=e(o("62c8"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])},c2b7:function(t,n,o){"use strict";o.r(n);var e=o("64a5"),s=o.n(e);for(var a in e)"default"!==a&&function(t){o.d(n,t,function(){return e[t]})}(a);n["default"]=s.a}},[["ba96","common/runtime","common/vendor"]]]);
});
require('pages/shilu-login/forget.js');
__wxRoute = 'pages/shilu-login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shilu-login/login.js';

define('pages/shilu-login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/login"],{"100a":function(t,e,n){"use strict";n.r(e);var a=n("6230"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=u.a},"17cb":function(t,e,n){"use strict";n.r(e);var a=n("2823"),u=n("100a");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("8ec1");var o,c=n("f0c5"),i=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"260db6ab",null,!1,a["a"],o);e["default"]=i.exports},2823:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a})},"51e4":function(t,e,n){"use strict";(function(t){n("b554"),n("921b");a(n("66fd"));var e=a(n("17cb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},6230:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("769f")),u=n("2f62");function r(t){return t&&t.__esModule?t:{default:t}}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={onLoad:function(){this},data:function(){return{username:"",password:""}},methods:o({},(0,u.mapMutations)(["login"]),{bindLogin:function(){var e={username:this.username,password:this.password},n=a.default.apiHost+"/user/tUser/login",u="POST";a.default.request(n,e,u).then(function(e){1===e.data.code?(t.setStorage({key:"user",data:e.data.data}),setTimeout(function(){t.switchTab({url:"../me/me"}),t.showToast({title:e.data.msg,duration:2e3})},0)):t.showToast({title:e.data.data,duration:2e3})}).catch(function(e){t.showToast({title:"服务器异常...稍后再试",duration:2e3})})}})};e.default=i}).call(this,n("6e42")["default"])},"8ec1":function(t,e,n){"use strict";var a=n("9e9c"),u=n.n(a);u.a},"9e9c":function(t,e,n){}},[["51e4","common/runtime","common/vendor"]]]);
});
require('pages/shilu-login/login.js');
__wxRoute = 'pages/shilu-login/reg';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/shilu-login/reg.js';

define('pages/shilu-login/reg.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shilu-login/reg"],{"41cd":function(t,e,n){},"4a39":function(t,e,n){"use strict";var s=n("41cd"),a=n.n(s);a.a},"6c4f":function(t,e,n){"use strict";(function(t){n("b554"),n("921b");s(n("66fd"));var e=s(n("82cd"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"82cd":function(t,e,n){"use strict";n.r(e);var s=n("f947"),a=n("a339");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("4a39");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],s["b"],s["c"],!1,null,"f49c06dc",null,!1,s["a"],i);e["default"]=c.exports},a339:function(t,e,n){"use strict";n.r(e);var s=n("c90d"),a=n.n(s);for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);e["default"]=a.a},c90d:function(t,e,n){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a,o=i(n("769f"));function i(t){return t&&t.__esModule?t:{default:t}}var u={onLoad:function(){this},onUnload:function(){clearInterval(a),this.second=0},data:function(){return{username:"",password:"",msgCode:"",invitation:"",xieyi:!0,showPassword:!1,second:0}},computed:{checkMsg:function(){return t("log","开始获取=========="," at pages\\shilu-login\\reg.vue:64"),0==this.second||1==this.second?"获取验证码":"重新获取"+this.second}},methods:{display_btn:function(){this.showPassword=!this.showPassword},xieyitong:function(){this.xieyi=!this.xieyi},getcode:function(){var t=this,e=setInterval(function(){t.second<1||(t.second=t.second-1)},1e3);if(setTimeout(function(){clearInterval(e)},6e4),!(this.second>0)){this.second=59;var n={username:this.username,password:this.password},a=o.default.apiHost+"/user/tUser/send",i="POST";o.default.request(a,n,i).then(function(t){s.showToast({title:t.data.data,duration:2e3})}).catch(function(t){s.showToast({title:"服务器异常...稍后再试",duration:2e3})})}},bindLogin:function(){if(4==this.msgCode.length){var t={username:this.username,password:this.password,msgCode:this.msgCode},e=o.default.apiHost+"/user/tUser/register",n="POST";o.default.request(e,t,n).then(function(t){1===t.data.code?(s.switchTab({url:"../me/me"}),s.setStorage({key:"user",data:t.data.data}),s.showToast({title:t.data.msg,duration:2e3})):s.showToast({title:t.data.data,duration:2e3})}).catch(function(t){s.showToast({title:"服务器异常...稍后再试",duration:2e3})})}else s.showToast({title:"验证码长度为四位"})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},f947:function(t,e,n){"use strict";var s,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return s})}},[["6c4f","common/runtime","common/vendor"]]]);
});
require('pages/shilu-login/reg.js');
__wxRoute = 'pages/me/me';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/me.js';

define('pages/me/me.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/me"],{"1e7a":function(t,n,e){"use strict";e.r(n);var a=e("935f"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},"3cb3":function(t,n,e){"use strict";e.r(n);var a=e("a4cf"),u=e("1e7a");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("a5fb");var i,r=e("f0c5"),f=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=f.exports},8598:function(t,n,e){},"935f":function(t,n,e){"use strict";(function(t,a){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=o(e("769f"));function o(t){return t&&t.__esModule?t:{default:t}}var i={data:function(){return{image:"../../static/chatImage.png",nickname:"点击登录",focusCount:"0",fansCount:"0",userId:""}},onLoad:function(){var n=this;t.getStorage({key:"user",success:function(t){n.userId=t.data.id}})},onShow:function(){this.loadUserPerson()},methods:{toMyInvitation:function(){t.navigateTo({url:"./myInvitation"})},toMyComment:function(){t.navigateTo({url:"./myComment"})},toMyCollect:function(){t.navigateTo({url:"./myCollect"})},toMyFocus:function(){t.navigateTo({url:"./myFocus"})},toMyFans:function(){t.navigateTo({url:"./myFans"})},BindGetUserInfo:function(){null==this.userId?(a("log","还没登录"," at pages\\me\\me.vue:146"),t.navigateTo({url:"../shilu-login/login"})):t.navigateTo({url:"./info"})},toSetting:function(){t.navigateTo({url:"./setting"})},toAbout:function(){t.navigateTo({url:"./about"})},loadUserPerson:function(){var t=this,n=u.default.apiHost+"/user/tUser/front/personal/get/"+t.userId,e="GET";u.default.request(n,null,e).then(function(n){a("log",JSON.stringify(n.data.data)," at pages\\me\\me.vue:175");var e=n.data.data;t.image=e.image,t.nickname=e.nickname,t.focusCount=e.focusCount,t.fansCount=e.fansCount,a("log",JSON.stringify(e)," at pages\\me\\me.vue:181")})}}};n.default=i}).call(this,e("6e42")["default"],e("0de9")["default"])},a4cf:function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return a})},a5fb:function(t,n,e){"use strict";var a=e("8598"),u=e.n(a);u.a},ef0b:function(t,n,e){"use strict";(function(t){e("b554"),e("921b");a(e("66fd"));var n=a(e("3cb3"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["ef0b","common/runtime","common/vendor"]]]);
});
require('pages/me/me.js');
__wxRoute = 'pages/netty/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/netty/chat.js';

define('pages/netty/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/netty/chat"],{5726:function(t,e,a){"use strict";(function(t){a("b554"),a("921b");n(a("66fd"));var e=n(a("b53e"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"6ac8":function(t,e,a){},"911a":function(t,a,n){"use strict";(function(t,o){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;c(n("3137"));var i=c(n("cf5f")),s=c(n("769f"));function c(t){return t&&t.__esModule?t:{default:t}}var u,l,r=function(){return Promise.all([n.e("common/vendor"),n.e("components/chatmsg")]).then(n.bind(null,"f0d0"))},d=(Date.parse(new Date),!1),f=!1,h={duration:1e4,sampleRate:44100,numberOfChannels:1,encodeBitRate:192e3,format:"mp3",frameSize:50},g={components:{chatMsg:r},data:function(){return{per_page:0,list:[],content:"",wsConn:!1,group:{},user:{},toUser:{},emoList:[],sch:0,oldsch:0,scrollTop:1e4,emoClass:"",aRecordClass:"",aRecordIng:!1,time:0,token:"",userId:0,chatData:{userid:"",friendid:"",nickname:"",image:""},myImage:"",style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0}}},created:function(){var e=t.getSystemInfoSync();this.style.pageHeight=e.windowHeight,this.style.contentViewHeight=e.windowHeight-t.getSystemInfoSync().screenWidth/750*100-70,this.scrollToBottom()},onPageScroll:function(t){0!=t.scrollTop||f||(this.getList(),f=!0,setTimeout(function(){f=!1},2e3))},onLoad:function(a){var n=this;n.chatData={userid:a.userid,friendid:a.friendid,nickname:a.nickname,username:a.username,image:a.image},o("log","页面跳转成功==="+JSON.stringify(n.chatData)," at pages\\netty\\chat.vue:182"),t.getStorage({key:"user",success:function(t){n.token=t.data.token,n.userId=t.data.id,n.myImage=t.data.image}}),null!=n.token&&""!=n.token||t.navigateTo({url:"/pages/shilu-login/login"}),o("log","加载中---"," at pages\\netty\\chat.vue:198"),this.initList(),this.revMessage();var s=t.getSystemInfoSync();s.windowHeight,this.emoList=i.default.emoList(),l=wx.getRecorderManager(),l.onStop(function(t){t.tempFilePath&&n.recordUpload(t.tempFilePath)}),l.onError(function(t){o("log",e," at pages\\netty\\chat.vue:224")})},onHide:function(){if(d)return!1;u.close({success:function(t){}})},onShow:function(){if(d)return!1;var t=this;this.wsConn&&t.wsInit()},methods:{scrollY:function(t){this.sch=t.detail.scrollHeight},scTop:function(t){0==this.oldsch&&(this.oldsch=this.sch);var e=this;e.scrollTop=0,this.getList()},toPersonal:function(){var e=this;t.navigateTo({url:"../me/personal?userId="+e.chatData.friendid})},revMessage:function(){var t=this;Vue.prototype.socketTask.onMessage(function(e){o("log","收到服务器内容："+e.data," at pages\\netty\\chat.vue:273"),o("log","更新消息成功========="," at pages\\netty\\chat.vue:275");var a=JSON.parse(e.data);t.list.push(a.chatRecord),t.scrollToBottom()})},initList:function(t){var e=this,a=s.default.apiHost+"/chat/chatrecord/findByUserIdAndFriendId?userid="+this.chatData.userid+"&friendid="+this.chatData.friendid,n="GET";s.default.request(a,null,n).then(function(t){o("log","加载当前聊天======="," at pages\\netty\\chat.vue:287"),e.list=t.data,setTimeout(function(){e.scrollToBottom()},0)}).catch(function(t){o("log","加载当前聊天发生异常"," at pages\\netty\\chat.vue:294")})},send:function(t,e){var a,n=this;switch(t){case"pic":a="[img="+e+"]";break;case"audio":a="[audio="+e+"]";break;case"video":a="[video="+e+"]";break;case"file":a=e.substring(e.lastIndexOf("/")+1)+" [file="+e+"]";break;case"content":if(a=n.content,""==a)return!1;break}var i=s.default.getMessage(s.default.MSG_TYPE_SEND,this.chatData.userid,this.chatData.friendid,a,null,null);o("log",i," at pages\\netty\\chat.vue:324"),i,Vue.prototype.socketTask.send({data:JSON.stringify(i),success:function(){o("log",JSON.stringify(i)," at pages\\netty\\chat.vue:330"),o("log","更新消息成功========="," at pages\\netty\\chat.vue:332"),n.list.push(i.chatRecord),setTimeout(function(){n.content=""},0),n.scrollToBottom()},fail:function(){o("log","发送失败========"," at pages\\netty\\chat.vue:342")}})},scrollToBottom:function(){o("log","滑动了============="," at pages\\netty\\chat.vue:351");var e=this,a=t.createSelectorQuery();a.selectAll(".m-item").boundingClientRect(),a.select("#scrollview").boundingClientRect(),a.exec(function(t){e.style.mitemHeight=0,t[0].forEach(function(t){return e.style.mitemHeight=e.style.mitemHeight+t.height+40}),setTimeout(function(){e.style.mitemHeight>e.style.contentViewHeight-100&&(e.scrollTop=e.style.mitemHeight-e.style.contentViewHeight)},100)})},addEmo:function(t){t="\\"+t+" ",this.content+=t},choiceImg:function(){var e=this;d=!0,t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],fail:function(t){d=!1},success:function(a){d=!1;var n="";t.uploadFile({url:s.default.apiHost+"/other/qiniu/file/upload",filePath:a.tempFilePaths[0],header:{"Content-Type":"multipart/form-data",token:e.token},name:"file",formData:{file:"file"},success:function(a){o("log","上传"," at pages\\netty\\chat.vue:401"),405===a.statusCode&&(o("log","未登陆"," at pages\\netty\\chat.vue:403"),t.navigateTo({url:"/pages/shilu-login/login"}));var i=JSON.parse(a.data);1===i.code&&(n=i.data,e.send("pic",n))}})}})},catchImg:function(){var e=this;d=!0,t.chooseImage({fail:function(t){d=!1},sourceType:["camera"],success:function(a){d=!1;var n="";t.uploadFile({url:s.default.apiHost+"/other/qiniu/file/upload",filePath:a.tempFilePaths[0],header:{"Content-Type":"multipart/form-data",token:e.token},name:"file",formData:{file:"file"},success:function(a){o("log","上传"," at pages\\netty\\chat.vue:471"),405===a.statusCode&&(o("log","未登陆"," at pages\\netty\\chat.vue:473"),t.navigateTo({url:"/pages/shilu-login/login"}));var i=JSON.parse(a.data);1===i.code&&(n=i.data,e.send("pic",n))}})}})},videoRecord:function(){var e=this;t.chooseVideo({count:1,success:function(a){var n="";t.uploadFile({url:s.default.apiHost+"/other/qiniu/file/upload",filePath:a.tempFilePath,header:{"Content-Type":"multipart/form-data",token:e.token},name:"file",formData:{file:"file"},success:function(a){o("log","上传"," at pages\\netty\\chat.vue:509"),405===a.statusCode&&(o("log","未登陆"," at pages\\netty\\chat.vue:511"),t.navigateTo({url:"/pages/shilu-login/login"})),o("log",a," at pages\\netty\\chat.vue:516"),o("log",a.data," at pages\\netty\\chat.vue:517");var i=JSON.parse(a.data);1===i.code&&(n=i.data,e.send("video",n))}})}})},recordUpload:function(e){var a=this;o("log",e," at pages\\netty\\chat.vue:532");var n="";t.uploadFile({url:s.default.apiHost+"/other/qiniu/file/upload",filePath:e,header:{"Content-Type":"multipart/form-data",token:a.token},name:"file",formData:{file:"file"},success:function(e){o("log","上传"," at pages\\netty\\chat.vue:548"),405===e.statusCode&&(o("log","未登陆"," at pages\\netty\\chat.vue:550"),t.navigateTo({url:"/pages/shilu-login/login"})),o("log",e," at pages\\netty\\chat.vue:555"),o("log",e.data," at pages\\netty\\chat.vue:556");var i=JSON.parse(e.data);1===i.code&&(n=i.data,a.send("audio",n))}})},aRecordToggle:function(){this.aRecordIng?(o("log","stop"," at pages\\netty\\chat.vue:569"),l.stop(),this.aRecordIng=!1):(this.aRecordIng=!0,l.start(h))}}};a.default=g}).call(this,n("6e42")["default"],n("0de9")["default"])},9483:function(t,e,a){"use strict";a.r(e);var n=a("911a"),o=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=o.a},b53e:function(t,e,a){"use strict";a.r(e);var n=a("f74a"),o=a("9483");for(var i in o)"default"!==i&&function(t){a.d(e,t,function(){return o[t]})}(i);a("b5f7");var s,c=a("f0c5"),u=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],s);e["default"]=u.exports},b5f7:function(t,e,a){"use strict";var n=a("6ac8"),o=a.n(n);o.a},f74a:function(t,e,a){"use strict";var n,o=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.aRecordClass="flex-col"},t.e1=function(e){t.emoClass="flex-col"},t.e2=function(e){t.emoClass=""},t.e3=function(e){t.aRecordClass=""})},i=[];a.d(e,"b",function(){return o}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n})}},[["5726","common/runtime","common/vendor"]]]);
});
require('pages/netty/chat.js');
__wxRoute = 'pages/netty/main_chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/netty/main_chat.js';

define('pages/netty/main_chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/netty/main_chat"],{"07b8":function(t,e,n){},"2ab7":function(t,e,n){"use strict";var a=n("07b8"),s=n.n(a);s.a},8230:function(t,e,n){"use strict";var a,s=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},9884:function(t,e,n){"use strict";(function(t){n("b554"),n("921b");a(n("66fd"));var e=a(n("9e81"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9e81":function(t,e,n){"use strict";n.r(e);var a=n("8230"),s=n("d6a3");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("2ab7");var i,u=n("f0c5"),c=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=c.exports},d6a3:function(t,e,n){"use strict";n.r(e);var a=n("fe03"),s=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},fe03:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;o(n("3137"));var s=o(n("769f"));function o(t){return t&&t.__esModule?t:{default:t}}var i=function(){return n.e("components/footer").then(n.bind(null,"5c39"))},u=function(){return Promise.all([n.e("common/vendor"),n.e("components/chatmsg")]).then(n.bind(null,"f0d0"))},c={components:{mtFooter:i,chatMsg:u},data:function(){return{userList:[],groupList:[],chatList:[],isLoad:!1,userId:"",socketTask:null,is_open_socket:!1,ops:{url:null,data:null}}},onLoad:function(){var e=this;this.connectSocketInit();var n="";t.getStorage({key:"user",success:function(t){n=t.data.token,e.userId=t.data.id.toString()}}),""==n&&t.navigateTo({url:"/pages/shilu-login/login"})},onPullDownRefresh:function(){a("log","下拉刷新==="," at pages\\netty\\main_chat.vue:119"),this.loadChatSnapshot(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},mounted:function(){},onShow:function(){this.loadChatSnapshot()},methods:{playMusic:function(t){audioClass.play(t)},goItem:function(e){if(e.friendid==this.userId){var n=e.friendid;e.friendid=e.userid,e.userid=n,t.navigateTo({url:"chat?userid="+e.userid+"&friendid="+e.friendid+"&nickname="+e.nickname+"&image="+e.image+"&username="+e.username}),a("log","开始跳转----1111"," at pages\\netty\\main_chat.vue:144")}else{JSON.stringify(e);t.navigateTo({url:"chat?userid="+e.userid+"&friendid="+e.friendid+"&nickname="+e.nickname+"&image="+e.image+"&username="+e.username}),a("log","开始跳转----2222"," at pages\\netty\\main_chat.vue:150")}},connectSocketInit:function(){var e=this,n=this;this.socketTask=t.connectSocket({url:s.default.wsHost,success:function(t){a("log","websocket连接成功"," at pages\\netty\\main_chat.vue:166")}}),this.socketTask.onOpen(function(t){a("log","WebSocket连接正常打开中...！"," at pages\\netty\\main_chat.vue:172"),null!=e.socketTask&&void 0!=e.socketTask&&(Vue.prototype.socketTask=e.socketTask);var o=s.default.getMessage(s.default.MSG_TYPE_CONN,n.userId,null,null,null,null);a("log","发送用户关联通道信息================"," at pages\\netty\\main_chat.vue:180"),n.chat(JSON.stringify(o)),e.socketTask.onMessage(function(t){a("log","收到服务器内容："+t.data," at pages\\netty\\main_chat.vue:186")}),setInterval(function(){n.keepalive()},1e4)}),this.socketTask.onMessage(function(t){a("log","收到服务器内容："+t.data," at pages\\netty\\main_chat.vue:196"),n.loadChatSnapshot()}),this.socketTask.onClose(function(){a("log","已经被关闭了"," at pages\\netty\\main_chat.vue:203")})},closeSocket:function(){this.socketTask.close({success:function(t){this.is_open_socket=!1,a("log","关闭成功",t," at pages\\netty\\main_chat.vue:212")},fail:function(t){a("log","关闭失败",t," at pages\\netty\\main_chat.vue:215")}})},chat:function(t){var e=this;null!=this.socketTask&&void 0!=this.socketTask?(e.socketTask.send({data:t,success:function(){},fail:function(){}}),JSON.parse(t).type==s.default.MSG_TYPE_SEND&&e.loadChatSnapshot()):(e.connectSocketInit(),e.socketTask.send({data:t,success:function(){},fail:function(){}}))},keepalive:function(){var t=s.default.getMessage(s.default.MSG_TYPE_KEEPALIVE,null,null,null,null,null);a("log","发送心跳包================"," at pages\\netty\\main_chat.vue:260"),this.chat(JSON.stringify(t))},loadChatSnapshot:function(){var t=this,e=s.default.apiHost+"/chat/chatrecord/findListByUserId?userid="+t.userId,n="GET";s.default.request(e,null,n).then(function(e){for(var n=e.data,s=0;s<n.length;s++)Vue.set(t.chatList,s,n[s]);a("log","登录人："+t.userId," at pages\\netty\\main_chat.vue:275"),a("log","信息："+JSON.stringify(t.chatList)," at pages\\netty\\main_chat.vue:276")})}}};e.default=c}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["9884","common/runtime","common/vendor"]]]);
});
require('pages/netty/main_chat.js');
__wxRoute = 'pages/index/publish';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/publish.js';

define('pages/index/publish.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/publish"],{"166d":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(a("a34a")),o=(u(a("e0c9")),u(a("769f")));a("2787");function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a,n,i,o,u){try{var s=t[o](u),c=s.value}catch(r){return void a(r)}s.done?e(c):Promise.resolve(c).then(n,i)}function c(t){return function(){var e=this,a=arguments;return new Promise(function(n,i){var o=t.apply(e,a);function u(t){s(o,n,i,u,c,"next",t)}function c(t){s(o,n,i,u,c,"throw",t)}u(void 0)})}}var r={name:"publish",component:{common:o.default},data:function(){return{sign:1,userId:0,content:"",imagePath:[],videoPath:"",isPublish:!1,topics:["话题1"],topicsId:[],pickIndex:0}},onLoad:function(){var e=this;t.getStorage({key:"user",success:function(t){e.userId=t.data.id}}),this.getTopicList()},methods:{getTopicList:function(){var t=this,e={},a=o.default.apiHost+"/invitation/tTopic/list",i="POST";o.default.request(a,e,i).then(function(e){if(n("log",e.data.data," at pages\\index\\publish.vue:91"),1==e.data.code){t.topics=[];for(var a=e.data.data.records,i=0;i<a.length;i++)t.topics.push(a[i].topName),t.topicsId.push(a[i].id)}}).catch(function(t){n("log","出现异常了"," at pages\\index\\publish.vue:102")})},radioChange:function(t){this.sign=t.detail.value},bindPickerChange:function(t){this.pickIndex=t.target.value},textareaAInput:function(t){this.content=t.detail.value},PublishContent:function(){var e={invContent:this.content,invType:this.sign,userId:this.userId,invImage:this.imagePath.toString(),invVideo:this.videoPath,topId:this.topicsId[this.pickIndex]},a=o.default.apiHost+"/invitation/tInvitation/save",n="POST";o.default.request(a,e,n).then(function(e){1==e.data.code?(t.switchTab({url:"./index"}),t.showToast({title:"发帖成功！审核时间为10分钟！",duration:2e3})):t.showToast({title:e.data.msg,duration:2e3})}).catch(function(e){t.showToast({title:"发帖失败...稍后再试",duration:2e3})})},imageClick:function(){var e=c(i.default.mark(function e(){var a;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this,t.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album"],success:function(e){if(a.videoPath="",a.imagePath.length+e.tempFilePaths.length>6)return a.$uniToast.warning("最多上传6张图.");var i="",u="";t.getStorage({key:"user",success:function(t){u=t.data.token}});for(var s=0;s<e.tempFilePaths.length;s++)t.uploadFile({url:o.default.apiHost+"/other/qiniu/file/upload",filePath:e.tempFilePaths[s],header:{"Content-Type":"multipart/form-data",token:u},name:"file",formData:{file:"file"},success:function(e){n("log","上传"," at pages\\index\\publish.vue:234"),405===e.statusCode&&(n("log","未登陆"," at pages\\index\\publish.vue:236"),t.navigateTo({url:"/pages/shilu-login/login"}));var o=JSON.parse(e.data);1===o.code&&(i=o.data,a.imagePath=a.imagePath.concat(i),n("log","图片路径：==============="+a.imagePath," at pages\\index\\publish.vue:245"))}})}});case 2:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}(),videoClick:function(){var e=c(i.default.mark(function e(){var a;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this,t.chooseVideo({count:1,sourceType:["album"],success:function(e){var i="";t.getStorage({key:"user",success:function(t){i=t.data.token}}),t.uploadFile({url:o.default.apiHost+"/other/qiniu/file/upload",filePath:e.tempFilePath,header:{"Content-Type":"multipart/form-data",token:i},name:"file",formData:{file:"file"},success:function(e){n("log","上传"," at pages\\index\\publish.vue:283"),405===e.statusCode&&(n("log","未登陆"," at pages\\index\\publish.vue:285"),t.navigateTo({url:"/pages/shilu-login/login"}));var i=JSON.parse(e.data);1===i.code&&(a.videoPath=i.data,n("log","视频路径：==============="+a.videoPath," at pages\\index\\publish.vue:293"))}})}});case 2:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}()}};e.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},"6cac":function(t,e,a){"use strict";a.r(e);var n=a("9b53"),i=a("c9a7");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("7a8f");var u,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"26775780",null,!1,n["a"],u);e["default"]=c.exports},"7a8f":function(t,e,a){"use strict";var n=a("a089"),i=a.n(n);i.a},"9b53":function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){return t.imagePath.splice(t.index,1)},t.e1=function(e){t.videoPath=""})},o=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},a089:function(t,e,a){},c449:function(t,e,a){"use strict";(function(t){a("b554"),a("921b");n(a("66fd"));var e=n(a("6cac"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},c9a7:function(t,e,a){"use strict";a.r(e);var n=a("166d"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a}},[["c449","common/runtime","common/vendor"]]]);
});
require('pages/index/publish.js');
__wxRoute = 'pages/me/personal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/personal.js';

define('pages/me/personal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/personal"],{"251f":function(e,t,n){"use strict";var a=n("463a"),u=n.n(a);u.a},"463a":function(e,t,n){},"52db":function(e,t,n){"use strict";var a,u=function(){var e=this,t=e.$createElement;e._self._c},d=[];n.d(t,"b",function(){return u}),n.d(t,"c",function(){return d}),n.d(t,"a",function(){return a})},"60d9":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=d(n("769f"));function d(e){return e&&e.__esModule?e:{default:e}}var r={components:{},data:function(){return{sign:!1,userId:0,friendId:0,like:0,user:{},lists:["A","B","C","D","E"]}},onLoad:function(t){var n=this;n.friendId=t.userId,e.getStorage({key:"user",success:function(e){n.userId=e.data.id}}),n.loadUserDetail(),n.loadFocusStatus()},methods:{loadUserDetail:function(){var t=this,n=u.default.apiHost+"/user/tUser/front/get/"+t.friendId,a="GET";u.default.request(n,null,a).then(function(e){1==e.data.code&&(t.user=e.data.data)}).catch(function(t){e.showToast({title:"服务器错误，请稍后再试...",duration:2e3})})},invFocusAdd:function(){var t=this;if(t.sign){var n={userId:t.userId,friendId:t.friendId},a=u.default.apiHost+"/user/tFocusFans/focus/move",d="POST";u.default.request(a,n,d).then(function(n){1==n.data.code&&(t.sign=!1,e.showToast({title:"取消关注成功",duration:2e3})),t.loadUserDetail()})}else{n={userId:t.userId,friendId:t.friendId},a=u.default.apiHost+"/user/tFocusFans/focus/add",d="POST";u.default.request(a,n,d).then(function(n){1==n.data.code&&(t.sign=!0,e.showToast({title:"关注成功",duration:2e3})),t.loadUserDetail()})}},loadFocusStatus:function(){var e=this,t={userId:e.userId,friendId:e.friendId},n=u.default.apiHost+"/user/tFocusFans/focus/or",d="POST";u.default.request(n,t,d).then(function(t){1==t.data.code&&(e.sign=t.data.data,a("log","关注状态："+e.sign," at pages\\me\\personal.vue:153"))})},back:function(t){e.navigateBack(1)},sendMsg:function(){var t=this,n={userid:t.userId,friendid:t.friendId,nickname:t.user.nickname,username:t.user.username,image:t.user.image};e.navigateTo({url:"../netty/chat?userid="+n.userid+"&friendid="+n.friendid+"&nickname="+n.nickname+"&image="+n.image+"&username="+n.username})}}};t.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},"6bb2":function(e,t,n){"use strict";n.r(t);var a=n("52db"),u=n("9bc9");for(var d in u)"default"!==d&&function(e){n.d(t,e,function(){return u[e]})}(d);n("251f");var r,s=n("f0c5"),i=Object(s["a"])(u["default"],a["b"],a["c"],!1,null,"14b9981f",null,!1,a["a"],r);t["default"]=i.exports},"9bc9":function(e,t,n){"use strict";n.r(t);var a=n("60d9"),u=n.n(a);for(var d in a)"default"!==d&&function(e){n.d(t,e,function(){return a[e]})}(d);t["default"]=u.a},d1a4:function(e,t,n){"use strict";(function(e){n("b554"),n("921b");a(n("66fd"));var t=a(n("6bb2"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["d1a4","common/runtime","common/vendor"]]]);
});
require('pages/me/personal.js');
__wxRoute = 'pages/me/info';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/info.js';

define('pages/me/info.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/info"],{"4f61":function(t,e,a){"use strict";(function(t){a("b554"),a("921b");n(a("66fd"));var e=n(a("d993"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},5516:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=r(a("a34a")),i=r(a("769f"));function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,a,n,u,i,r){try{var o=t[i](r),s=o.value}catch(c){return void a(c)}o.done?e(s):Promise.resolve(s).then(n,u)}function s(t){return function(){var e=this,a=arguments;return new Promise(function(n,u){var i=t.apply(e,a);function r(t){o(i,n,u,r,s,"next",t)}function s(t){o(i,n,u,r,s,"throw",t)}r(void 0)})}}var c={data:function(){var t=this.getDate({format:!0});return{userId:"",image:"",nickname:"",signature:"",sex:1,birthday:t}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},onLoad:function(){var e=this;t.getStorage({key:"user",success:function(t){e.userId=t.data.id}}),this.loadUserInfo()},methods:{loadUserInfo:function(){var t=this,e=i.default.apiHost+"/user/tUser/front/info/get/"+t.userId,a="GET";i.default.request(e,null,a).then(function(e){t.image=e.data.data.image,t.nickname=e.data.data.nickname,t.signature=e.data.data.signature,t.sex=e.data.data.sex,null!=e.data.data.birthday&&(t.birthday=e.data.data.birthday)})},formSubmit:function(e){var a=this,u=e.detail.value;u.id=a.userId,u.birthday=a.birthday,u.image=a.image,n("log",JSON.stringify(u)," at pages\\me\\info.vue:113");var r=i.default.apiHost+"/user/tUser/front/info",o="POST";i.default.request(r,u,o).then(function(e){1==e.data.code?(t.showToast({title:"修改成功",duration:2e3}),a.user=e.data.data):t.showToast({title:"修改失败",duration:2e3})})},DateChange:function(t){this.birthday=t.detail.value},getDate:function(t){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1,u=e.getDate();return"start"===t?a-=60:"end"===t&&(a+=2),n=n>9?n:"0"+n,u=u>9?u:"0"+u,"".concat(a,"-").concat(n,"-").concat(u)},imageClick:function(){var e=s(u.default.mark(function e(){var a;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:a=this,t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){var u="",r="";t.getStorage({key:"user",success:function(t){r=t.data.token}}),t.uploadFile({url:i.default.apiHost+"/other/qiniu/file/upload",filePath:e.tempFilePaths[0],header:{"Content-Type":"multipart/form-data",token:r},name:"file",formData:{file:"file"},success:function(e){n("log","上传"," at pages\\me\\info.vue:185"),405===e.statusCode&&(n("log","未登陆"," at pages\\me\\info.vue:187"),t.navigateTo({url:"/pages/shilu-login/login"}));var i=JSON.parse(e.data);1===i.code&&(u=i.data,a.image=u,n("log","图片路径：==============="+a.image," at pages\\me\\info.vue:196"))}})}});case 2:case"end":return e.stop()}},e,this)}));function a(){return e.apply(this,arguments)}return a}()}};e.default=c}).call(this,a("6e42")["default"],a("0de9")["default"])},"6e0a":function(t,e,a){"use strict";a.r(e);var n=a("5516"),u=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=u.a},"6e5d":function(t,e,a){},"87e1":function(t,e,a){"use strict";var n=a("6e5d"),u=a.n(n);u.a},d993:function(t,e,a){"use strict";a.r(e);var n=a("e3d2"),u=a("6e0a");for(var i in u)"default"!==i&&function(t){a.d(e,t,function(){return u[t]})}(i);a("87e1");var r,o=a("f0c5"),s=Object(o["a"])(u["default"],n["b"],n["c"],!1,null,"75bc2a5c",null,!1,n["a"],r);e["default"]=s.exports},e3d2:function(t,e,a){"use strict";var n,u=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"b",function(){return u}),a.d(e,"c",function(){return i}),a.d(e,"a",function(){return n})}},[["4f61","common/runtime","common/vendor"]]]);
});
require('pages/me/info.js');
__wxRoute = 'pages/me/myInvitation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/myInvitation.js';

define('pages/me/myInvitation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/myInvitation"],{"08e9":function(e,t,n){"use strict";n.r(t);var a=n("4561"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=r.a},"27df":function(e,t,n){"use strict";var a=n("2a3e"),r=n.n(a);r.a},"2a3e":function(e,t,n){},"3df3":function(e,t,n){"use strict";(function(e){n("b554"),n("921b");a(n("66fd"));var t=a(n("cd31"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},4561:function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),i=u(n("769f")),o=u(n("b635"));function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,a,r,i,o){try{var u=e[i](o),s=u.value}catch(l){return void n(l)}u.done?t(s):Promise.resolve(s).then(a,r)}function l(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){s(i,a,r,o,u,"next",e)}function u(e){s(i,a,r,o,u,"throw",e)}o(void 0)})}}var c,d=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-advert/vue/mix-advert")]).then(n.bind(null,"ae5f"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e"))},v=function(){return n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},h=0,m=!1,p={components:{mixPulldownRefresh:f,mixLoadMore:v,mixAdvert:d},data:function(){return{tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,tabBars:[],invList:[],currentPage:1,pageSize:10,userId:""}},computed:{advertNavUrl:function(){var e={title:"测试跳转新闻详情",author:"测试作者",time:"2019-04-26 21:21"};return"/pages/details/details?data=".concat(JSON.stringify(e))}},onLoad:function(){var t=l(r.default.mark(function t(){var n;return r.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=this,e.getStorage({key:"user",success:function(e){n.userId=e.data.id}}),h=e.getSystemInfoSync().windowWidth,this.loadTabbars();case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onReady:function(){},methods:{toPersonal:function(){var t=this;e.navigateTo({url:"../me/personal?userId="+t.userId})},onNavigationBarButtonTap:function(t){e.navigateTo({url:"/pages/index/publish/publish"})},loadTabbars:function(){var e=o.default.tabList;e.forEach(function(e){e.newsList=[],e.loadMoreStatus=0,e.refreshing=0}),this.tabBars=e,this.loadInvList("add")},loadInvList:function(t){var n=this,r=this,o=this.tabBars[this.tabCurrentIndex];if("add"===t){if(2===o.loadMoreStatus)return;o.loadMoreStatus=1}else"refresh"===t&&(o.refreshing=!0);var u={currentPage:this.currentPage,pageSize:this.pageSize},s={userId:r.userId},l=i.default.apiHost+"/invitation/tInvitation/list?currentPage="+u.currentPage+"&pageSize="+u.pageSize,c="POST";i.default.request(l,s,c).then(function(e){a("log","请求列表成功=============="," at pages\\me\\myInvitation.vue:182"),setTimeout(function(){var a=null;a=e.data.data;for(var i=a.records,u=0;u<i.length;u++)if(null!=i[u].invImage&&""!=i[u].invImage){var s=i[u].invImage.split(",");i[u].invImage=s}"refresh"===t&&(r.invList=[]),r.invList=i,"refresh"===t&&(n.$refs.mixPulldownRefresh&&n.$refs.mixPulldownRefresh.endPulldownRefresh(),o.refreshing=!1,o.loadMoreStatus=0),"add"===t&&(o.loadMoreStatus=r.invList.length<10?2:0)},0)}).catch(function(t){e.showToast({title:"服务器异常...稍后再试",duration:2e3})})},navToDetails:function(t){var n={id:t.id,title:t.title,author:t.author,time:t.time},a=t.invVideo?"videoDetails":"details";e.navigateTo({url:"/pages/details/".concat(a,"?data=").concat(JSON.stringify(n))})},onPulldownReresh:function(){a("log","刷新......"," at pages\\me\\myInvitation.vue:249"),this.loadInvList("refresh")},loadMore:function(){a("log","触底......"," at pages\\me\\myInvitation.vue:254"),this.loadInvList("add")},setEnableScroll:function(e){this.enableScroll!==e&&(this.enableScroll=e)},changeTab:function(){var e=l(r.default.mark(function e(t){var n,a,i,o,u,s=this;return r.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(m&&(clearTimeout(m),m=!1),n=t,"object"===typeof t&&(n=t.detail.current),"object"===typeof c){e.next=7;break}return e.next=6,this.getElSize("nav-bar");case 6:c=e.sent;case 7:c.scrollLeft,a=0,i=0,o=0;case 11:if(!(o<=n)){e.next=20;break}return e.next=14,this.getElSize("tab"+o);case 14:u=e.sent,a+=u.width,o===n&&(i=u.width);case 17:o++,e.next=11;break;case 20:"number"===typeof t&&(this.tabCurrentIndex=n),m=setTimeout(function(){s.scrollLeft=a-i/2>h/2?a-i/2-h/2:0,"object"===typeof t&&(s.tabCurrentIndex=n),s.tabCurrentIndex=n;var e=s.tabBars[s.tabCurrentIndex];0!==s.tabCurrentIndex&&!0!==e.loaded&&(s.loadInvList("add"),e.loaded=!0)},300);case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getElSize:function(t){return new Promise(function(n,a){var r=e.createSelectorQuery().select("#"+t);r.fields({size:!0,scrollOffset:!0,rect:!0},function(e){n(e)}).exec()})}}};t.default=p}).call(this,n("6e42")["default"],n("0de9")["default"])},cd31:function(e,t,n){"use strict";n.r(t);var a=n("fcba"),r=n("08e9");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("27df");var o,u=n("f0c5"),s=Object(u["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);t["default"]=s.exports},fcba:function(e,t,n){"use strict";var a={"mix-pulldown-refresh":()=>Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e")),"mix-load-more":()=>n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a})}},[["3df3","common/runtime","common/vendor"]]]);
});
require('pages/me/myInvitation.js');
__wxRoute = 'pages/me/myComment';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/myComment.js';

define('pages/me/myComment.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/myComment"],{"00eb":function(t,e,n){"use strict";(function(t){n("b554"),n("921b");a(n("66fd"));var e=a(n("8998"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"1c68":function(t,e,n){"use strict";var a=n("4991"),u=n.n(a);u.a},4991:function(t,e,n){},"85ef":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=o(n("769f"));function o(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{userId:0,evaList:[],currentPage:1,pageSize:1e3}},onLoad:function(e){var n=this;t.getStorage({key:"user",success:function(t){n.userId=t.data.id}}),this.loadComList()},methods:{toPersonal:function(e){a("log","userId:"+e," at pages\\me\\myComment.vue:55"),t.navigateTo({url:"./personal?userId="+e})},loadComList:function(){var e=this,n={userId:e.userId},o=u.default.apiHost+"/invitation/tComment/list?currentPage="+e.currentPage+"&pageSize="+e.pageSize,r="POST";u.default.request(o,n,r).then(function(n){1!=n.data.code?t.showToast({title:"稍后再试...",duration:2e3}):(e.evaList=n.data.data.records,a("log",JSON.stringify(e.evaList)," at pages\\me\\myComment.vue:77")),e.loading=!1}).catch(function(e){t.showToast({title:"服务器异常，请稍后再试...",duration:2e3})})}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},8998:function(t,e,n){"use strict";n.r(e);var a=n("a71c"),u=n("c5ba");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("1c68");var r,i=n("f0c5"),c=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],r);e["default"]=c.exports},a71c:function(t,e,n){"use strict";var a,u=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return u}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},c5ba:function(t,e,n){"use strict";n.r(e);var a=n("85ef"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a}},[["00eb","common/runtime","common/vendor"]]]);
});
require('pages/me/myComment.js');
__wxRoute = 'pages/me/myCollect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/myCollect.js';

define('pages/me/myCollect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/myCollect"],{"1fd6":function(e,t,n){},"31de":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n("a34a")),o=u(n("769f")),i=u(n("b635"));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n,r,a,o,i){try{var u=e[o](i),l=u.value}catch(s){return void n(s)}u.done?t(l):Promise.resolve(l).then(r,a)}function s(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){l(o,r,a,i,u,"next",e)}function u(e){l(o,r,a,i,u,"throw",e)}i(void 0)})}}var c,d=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-advert/vue/mix-advert")]).then(n.bind(null,"ae5f"))},f=function(){return Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e"))},m=function(){return n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},v=0,h=!1,b={components:{mixPulldownRefresh:f,mixLoadMore:m,mixAdvert:d},data:function(){return{tabCurrentIndex:0,scrollLeft:0,enableScroll:!0,tabBars:[],invList:[],currentPage:1,pageSize:10,userId:""}},computed:{advertNavUrl:function(){var e={title:"测试跳转新闻详情",author:"测试作者",time:"2019-04-26 21:21"};return"/pages/details/details?data=".concat(JSON.stringify(e))}},onLoad:function(){var t=s(a.default.mark(function t(){var n;return a.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:n=this,e.getStorage({key:"user",success:function(e){n.userId=e.data.id}}),v=e.getSystemInfoSync().windowWidth,this.loadTabbars();case 4:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}(),onReady:function(){},methods:{toPersonal:function(t){r("log","userId:"+t," at pages\\me\\myCollect.vue:125"),e.navigateTo({url:"../me/personal?userId="+t})},onNavigationBarButtonTap:function(t){e.navigateTo({url:"/pages/index/publish/publish"})},loadTabbars:function(){var e=i.default.tabList;e.forEach(function(e){e.newsList=[],e.loadMoreStatus=0,e.refreshing=0}),this.tabBars=e,this.loadInvList("add")},loadInvList:function(t){var n=this,a=this,i=this.tabBars[this.tabCurrentIndex];if("add"===t){if(2===i.loadMoreStatus)return;i.loadMoreStatus=1}else"refresh"===t&&(i.refreshing=!0);var u={currentPage:this.currentPage,pageSize:this.pageSize,userId:a.userId},l=o.default.apiHost+"/invitation/tInvitation/front/collect/list?currentPage="+u.currentPage+"&pageSize="+u.pageSize+"&userId="+u.userId,s="GET";o.default.request(l,null,s).then(function(e){r("log","请求列表成功=============="," at pages\\me\\myCollect.vue:181"),setTimeout(function(){var r=null;r=e.data.data;for(var o=r.records,u=0;u<o.length;u++)if(null!=o[u].invImage&&""!=o[u].invImage){var l=o[u].invImage.split(",");o[u].invImage=l}"refresh"===t&&(a.invList=[]),a.invList=o,"refresh"===t&&(n.$refs.mixPulldownRefresh&&n.$refs.mixPulldownRefresh.endPulldownRefresh(),i.refreshing=!1,i.loadMoreStatus=0),"add"===t&&(i.loadMoreStatus=a.invList.length<10?2:0)},0)}).catch(function(t){e.showToast({title:"服务器异常...稍后再试",duration:2e3})})},navToDetails:function(t){var n={id:t.id,title:t.title,author:t.author,time:t.time},r=t.invVideo?"videoDetails":"details";e.navigateTo({url:"/pages/details/".concat(r,"?data=").concat(JSON.stringify(n))})},onPulldownReresh:function(){r("log","刷新......"," at pages\\me\\myCollect.vue:248"),this.loadInvList("refresh")},loadMore:function(){r("log","触底......"," at pages\\me\\myCollect.vue:253"),this.loadInvList("add")},setEnableScroll:function(e){this.enableScroll!==e&&(this.enableScroll=e)},changeTab:function(){var e=s(a.default.mark(function e(t){var n,r,o,i,u,l=this;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(h&&(clearTimeout(h),h=!1),n=t,"object"===typeof t&&(n=t.detail.current),"object"===typeof c){e.next=7;break}return e.next=6,this.getElSize("nav-bar");case 6:c=e.sent;case 7:c.scrollLeft,r=0,o=0,i=0;case 11:if(!(i<=n)){e.next=20;break}return e.next=14,this.getElSize("tab"+i);case 14:u=e.sent,r+=u.width,i===n&&(o=u.width);case 17:i++,e.next=11;break;case 20:"number"===typeof t&&(this.tabCurrentIndex=n),h=setTimeout(function(){l.scrollLeft=r-o/2>v/2?r-o/2-v/2:0,"object"===typeof t&&(l.tabCurrentIndex=n),l.tabCurrentIndex=n;var e=l.tabBars[l.tabCurrentIndex];0!==l.tabCurrentIndex&&!0!==e.loaded&&(l.loadInvList("add"),e.loaded=!0)},300);case 22:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),getElSize:function(t){return new Promise(function(n,r){var a=e.createSelectorQuery().select("#"+t);a.fields({size:!0,scrollOffset:!0,rect:!0},function(e){n(e)}).exec()})}}};t.default=b}).call(this,n("6e42")["default"],n("0de9")["default"])},"3dc5":function(e,t,n){"use strict";(function(e){n("b554"),n("921b");r(n("66fd"));var t=r(n("7bb3"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"45b4":function(e,t,n){"use strict";n.r(t);var r=n("31de"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},"7bb3":function(e,t,n){"use strict";n.r(t);var r=n("c6ba"),a=n("45b4");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("86c0");var i,u=n("f0c5"),l=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=l.exports},"86c0":function(e,t,n){"use strict";var r=n("1fd6"),a=n.n(r);a.a},c6ba:function(e,t,n){"use strict";var r={"mix-pulldown-refresh":()=>Promise.all([n.e("common/vendor"),n.e("components/mix-pulldown-refresh/mix-pulldown-refresh")]).then(n.bind(null,"8a0e")),"mix-load-more":()=>n.e("components/mix-load-more/mix-load-more").then(n.bind(null,"c269"))},a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return r})}},[["3dc5","common/runtime","common/vendor"]]]);
});
require('pages/me/myCollect.js');
__wxRoute = 'pages/me/myFocus';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/myFocus.js';

define('pages/me/myFocus.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/myFocus"],{"1d7f":function(t,e,n){"use strict";n.r(e);var u=n("543f"),o=n("d7e8");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("1fc5");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=c.exports},"1fc5":function(t,e,n){"use strict";var u=n("c8ba"),o=n.n(u);o.a},"543f":function(t,e,n){"use strict";var u,o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return u})},"71f1":function(t,e,n){"use strict";(function(t){n("b554"),n("921b");u(n("66fd"));var e=u(n("1d7f"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ac82:function(t,e,n){"use strict";(function(t,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("769f"));function a(t){return t&&t.__esModule?t:{default:t}}var r={components:{},data:function(){return{userList:[],userId:""}},onLoad:function(){var e=this;t.getStorage({key:"user",success:function(t){t.data.token,e.userId=t.data.id}}),this.loadFoucsUser()},onPullDownRefresh:function(){u("log","下拉刷新==="," at pages\\me\\myFocus.vue:63"),this.loadFoucsUser(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},mounted:function(){},methods:{toPersonal:function(e){t.navigateTo({url:"./personal?userId="+e})},loadFoucsUser:function(){var t=this,e=o.default.apiHost+"/user/tFocusFans/focusOrFans/list?type=1&userId="+t.userId,n="GET";o.default.request(e,null,n).then(function(e){t.userList=e.data.data})}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},c8ba:function(t,e,n){},d7e8:function(t,e,n){"use strict";n.r(e);var u=n("ac82"),o=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=o.a}},[["71f1","common/runtime","common/vendor"]]]);
});
require('pages/me/myFocus.js');
__wxRoute = 'pages/me/myFans';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/myFans.js';

define('pages/me/myFans.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/myFans"],{4530:function(t,e,n){},"4eda":function(t,e,n){"use strict";n.r(e);var u=n("7439"),a=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e["default"]=a.a},"5f0c":function(t,e,n){"use strict";n.r(e);var u=n("6529"),a=n("4eda");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ed21");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],r);e["default"]=c.exports},6529:function(t,e,n){"use strict";var u,a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return u})},7439:function(t,e,n){"use strict";(function(t,u){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("769f"));function o(t){return t&&t.__esModule?t:{default:t}}var r={components:{},data:function(){return{userList:[],userId:""}},onLoad:function(){var e=this;t.getStorage({key:"user",success:function(t){t.data.token,e.userId=t.data.id}}),this.loadFoucsUser()},onPullDownRefresh:function(){u("log","下拉刷新==="," at pages\\me\\myFans.vue:63"),this.loadFoucsUser(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},mounted:function(){},methods:{toPersonal:function(e){t.navigateTo({url:"./personal?userId="+e})},loadFoucsUser:function(){var t=this,e=a.default.apiHost+"/user/tFocusFans/focusOrFans/list?type=2&userId="+t.userId,n="GET";a.default.request(e,null,n).then(function(e){t.userList=e.data.data})}}};e.default=r}).call(this,n("6e42")["default"],n("0de9")["default"])},aeca:function(t,e,n){"use strict";(function(t){n("b554"),n("921b");u(n("66fd"));var e=u(n("5f0c"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},ed21:function(t,e,n){"use strict";var u=n("4530"),a=n.n(u);a.a}},[["aeca","common/runtime","common/vendor"]]]);
});
require('pages/me/myFans.js');
__wxRoute = 'pages/me/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/setting.js';

define('pages/me/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/setting"],{"2b89":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{toLogin:function(){n.navigateTo({url:"../shilu-login/login"})}}};t.default=e}).call(this,e("6e42")["default"])},"32bc":function(n,t,e){"use strict";e.r(t);var u=e("a94a"),a=e("e283");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("74cb");var o,r=e("f0c5"),f=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],o);t["default"]=f.exports},"3f1b":function(n,t,e){"use strict";(function(n){e("b554"),e("921b");u(e("66fd"));var t=u(e("32bc"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"74cb":function(n,t,e){"use strict";var u=e("77f8"),a=e.n(u);a.a},"77f8":function(n,t,e){},a94a:function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return c}),e.d(t,"a",function(){return u})},e283:function(n,t,e){"use strict";e.r(t);var u=e("2b89"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a}},[["3f1b","common/runtime","common/vendor"]]]);
});
require('pages/me/setting.js');
__wxRoute = 'pages/me/about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/about.js';

define('pages/me/about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/me/about"],{"044c":function(t,n,e){"use strict";e.r(n);var u=e("b359"),a=e("4feb");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);var c,o=e("f0c5"),f=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],c);n["default"]=f.exports},"4feb":function(t,n,e){"use strict";e.r(n);var u=e("a269"),a=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=a.a},"7aa5":function(t,n,e){"use strict";(function(t){e("b554"),e("921b");u(e("66fd"));var n=u(e("044c"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},a269:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{}},methods:{}};n.default=u},b359:function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"a",function(){return u})}},[["7aa5","common/runtime","common/vendor"]]]);
});
require('pages/me/about.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

