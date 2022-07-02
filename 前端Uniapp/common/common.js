
module.exports = {
	apiHost:"http://192.168.5.31:9999",
	wsHost:"ws://192.168.5.31:9001/ws", 
	// 消息类型
	MSG_TYPE_CONN: 0,		// 连接
	MSG_TYPE_SEND: 1,		// 发送消息
	MSG_TYPE_REC: 2,		// 签收
	MSG_TYPE_KEEPALIVE: 3,	// 客户端保持心跳
	MSG_TYPE_RELOADFRIEND: 4	,// 重新拉取好友
	//构造消息体
	getMessage: function(type, userid, friendid, msg, msgid, ext) {
		return {
			type: type,
			chatRecord: {
				id: msgid,
				userid: userid,
				friendid: friendid,
				message: msg,
			},
			ext: ext
		};
	},
    json_add:function(a,b){
 
        if(a==undefined || a.length==0) return b;
		if(b==undefined || b.length==0) return a;
		
		var s_a=JSON.stringify(a);
		var s_b=JSON.stringify(b);
		var c=s_a.substring(0,s_a.length-1)+","+s_b.substring(1);
		return JSON.parse(c);
	},
	goBack:function(){
		console.log(Router);
		this.$router.go(-1);
	},
	getCookie:function(name){
		// #ifdef H5
		var strcookie = document.cookie;
		var arrcookie = strcookie.split("; ");
		for (var i = 0; i < arrcookie.length; i++) {
			var arr = arrcookie[i].split("=");
			if (arr[0] == name) {
				return arr[1];
			}
		}
		return "";
		// #endif
		
	},
	getAuthCode:function(){
		 
		var authcode=uni.getStorageSync("authcode");
		if(!authcode){
			authcode=this.getCookie("authcode");
		}
		return authcode;
	},
	setAuthCode:function($authcode){
		uni.setStorageSync("authcode",$authcode);
	},
	getAuthCodeLong:function(){
		var authcode=uni.getStorageSync("authcodeLong");
		if(!authcode){
			authcode=this.getCookie("authcodeLong");
		}
		return authcode;
	},
	setAuthCodeLong:function($authcode){
		uni.setStorageSync("authcodeLong",$authcode);
	},
	setOpenid:function(openid){
		uni.setStorageSync("openid",openid)
	},
	getOpenid:function(openid){
		uni.getStorageSync("openid")
	},
	getLoginCode:function(){
		return uni.getStorageInfoSync("loginCode");
	},
	setLoginCode:function(code){
		uni.setStorageSync("loginCode",code)
	},
	isLogin:function(){
		if(this.getLoginCode()){
			return true;
		}
		return false;
	},
	fromapp:function(){
		//var $paltform= uni.platform();
		return "uniapp";
	},
	isWeixin:function(){
		// #ifdef H5
		var ua = window.navigator.userAgent.toLowerCase();
		if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
		// #endif
		return false;
	},
	//json请求
	request: (url, data,method) => {
		var token = "";
		uni.getStorage({  //携带token
		    key: 'user',  
		    success: function(ress) {
		        token = ress.data.token;
		    }
		});
	    var ops = { //请求参数
	        url: url,
	        data: data,
	        method: method,
	        header:  {
	        "Content-Type": "application/json; charset=UTF-8", //json格式参数
			"token": token
	        },
		};
	    var promise = new Promise(function(resolve, reject) {
	        uni.request(ops).then((res) => {
				//未登陆,自动跳到登陆界面
				if(res[1].data.code === -1){
					console.log("未登陆")
					uni.navigateTo({
						url: "/pages/shilu-login/login"
					});
				}
				console.log("sucess===============");
	            resolve(res[1]); //成功传递参数
	        }
	        ).catch((err) => {
			
	                reject(err); //失败传递参数
	            }
	        )
	    })
	    return promise;
	},
	//表单请求
	request_form: (url, data,method) => {
		var token = "";
		uni.getStorage({  //携带token
		    key: 'x-auth-token',  
		    success: function(ress) {
		        token = ress.data;
		    }
		});
	    var ops = { //请求参数
	        url: url,
	        data: data,
	        method: method,
	        header:  {
	        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", //表单格式参数
			"x-auth-token": token
	        },
		};
	    var promise = new Promise(function(resolve, reject) {
	        uni.request(ops).then((res) => {
				    console.log("sucess===============");
	                resolve(res[1]); //成功传递参数
	            }
	        ).catch((err) => {
				    console.log("fail===============");
	                reject(err); //失败传递参数
	            }
	        )
	    })
	    return promise;
	},
	goHome:function(){
		uni.redirectTo({
			url:"../index/index"
		})
		/*
		uni.switchTab({
			url:"../index/index",
		})
		*/
	},
	goCart:function(){
		uni.switchTab({
			url:"../cart/index",
		})
	},
	goUser:function(){
		uni.switchTab({
			url:"../user/index",
		})
	},
	goProduct:function(){
		uni.switchTab({
			url:"../product/index",
		})
	},
	goFenlei:function(){
		uni.switchTab({
			url:"../fenlei/index",
		})
	},
	goLogin:function(){
		uni.navigateTo({
			url:"../login/index"
		})
	},
	goH5WeiXin:function(backurl){
		// #ifdef H5
		var url=document.location.href.split('#')[0]+"#"+backurl;
		window.location=this.apiHost+'/index.php?m=open_weixin&a=Geturl&backurl='+encodeURIComponent(url);
		// #endif
		
	},
	html:function(html){
		if(html==''|| html==null) return '';
		html=html.replace(' style="','  xstyle="');
		html=html.replace(/<img /g,'<img style="max-width:100%;height:auto;"');
		html=html.replace(/&hellip;/g,'');
		html=html.replace(' class="brush:html;toolbar:false"'," ");
		html=html.replace(/<pre /g,'<pre style="border:1px solid #eee;padding:10px;max-height:300px;overflow:auto;" ');
		
		html=html.replace(/<pre /g,"<view ");
		html=html.replace("</pre>","</view>");
		html=html.replace(/\n/g,"<br />");
		html=html.replace(/<iframe /,'<view style="display:none" ');
		html=html.replace(/<\/iframe>/,'</view>');
		html=html.replace("<section ","<view ");
		html=html.replace("</section>","</view>");
		 
		//console.log(html);
		return html;
	},
	

	
}
