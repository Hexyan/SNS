<template>
	<view>
		<view class="main-body">
			 
			<block v-if="chatList.length>0">
			<view v-for="(item,index) in chatList" :key="index" @click="goItem(item)"  class="flex pd-10 bg-fff bdb">
				<block v-if="item.hasRead==0">
					<block v-if="item.friendid == userId">
						<image v-if="item.image == null || item.image == ''" class="wh-40 mgr-10 bd-radius-10" src="../../static/chatImage.png" ></image>
						<image v-if="item.image != null && item.image != ''" class="wh-40 mgr-10 bd-radius-10" :src="item.image"></image>
						<view class="flex-1">
							 
							<view v-if="item.nickname == null || item.nickname == ''" class="cl1 mgb-5">{{item.username}}</view>
							<view v-if="item.nickname != null && item.nickname != ''" class="cl1 mgb-5">{{item.nickname}}</view>
							<chat-msg :sign="0" :content="item.message"></chat-msg>
							
						</view>
					</block>
					<block v-else>
						<image v-if="item.image == null || item.image == ''" class="wh-40 mgr-10 bd-radius-10" src="../../static/chatImage.png" ></image>
						<image v-if="item.image != null && item.image != ''" class="wh-40 mgr-10 bd-radius-10" :src="item.image"></image>
						<view class="flex-1">
							 
							<view v-if="item.nickname == null || item.nickname == ''" class="cl1 mgb-5">{{item.username}}</view>
							<view v-if="item.nickname != null && item.nickname != ''" class="cl1 mgb-5">{{item.nickname}}</view>
							<chat-msg :sign="0" :content="item.message"></chat-msg>
							
						</view>
					</block>
				</block> 
 				<block v-else>
					<block > <!-- v-if="item.friendid == userId" -->
						<image  class="wh-40 mgr-10 bd-radius-10" src="../../static/chatImage.png" :src="item.image"></image>
						<view class="flex-1">
							 <view v-if="item.nickname == null || item.nickname == ''" class="cl1 mgb-5">{{item.username}}</view>
							 <view v-if="item.nickname != null && item.nickname != ''" class="cl1 mgb-5">{{item.nickname}}</view>
							<chat-msg :sign="1" :content="item.message"></chat-msg>
						</view>
					</block>
					<!--<block v-else> 
						<image   class="wh-40 mgr-10 bd-radius-10" :src="item.imgurl+'.100x100.jpg'"></image>
						<view class="flex-1">
							 
							<view class="cl1 mgb-5" >{{item.friendid}}</view>
							<chat-msg :sign="1" :content="item.message"></chat-msg>
						</view>
					</block> -->
				</block>
				
				
				
				<view class="cl3 showTime">{{item.createtime}}</view>
			</view>
			</block>
			<block v-else>
				<view class="emptyData">暂无私信消息</view>
			</block>
			
			
		</view>
		
	</view>
</template>

<script>
	 
	import mtFooter from "@/components/footer.vue";
	import chatDb from "@/common/chatdb.js";
	import common from "@/common/common.js";
	 
	import chatMsg from "@/components/chatmsg.vue";
	export default {
		components:{
			// common,
			mtFooter,
			chatMsg,
		},
		data() {
			return {
				userList: [],
				groupList:[],
				chatList: [],
				isLoad:false ,
				userId: '',//当前登录人ID
				//socket相关变量
				socketTask: null,
				// 确保websocket是打开状态
				is_open_socket: false,
				ops:{
					url:null,
					data:null
				}
			}
		},
		onLoad() {
			var that = this;
			//初始化socket连接
			this.connectSocketInit();
			//更新消息
			//获取当前登录人信息
			var token = "";
			uni.getStorage({  //携带token
			    key: 'user',  
			    success: function(ress) {
			        token = ress.data.token;
					that.userId = (ress.data.id).toString();
			    }
			});
			//未登录，跳转到登录页面
			if(token == ''){
				uni.navigateTo({
					url: "/pages/shilu-login/login"
				});
			}
			
			
		},
		onPullDownRefresh() { // 下拉监听事件
		        console.log("下拉刷新===");
		        this.loadChatSnapshot();
		        setTimeout(function () {
		            uni.stopPullDownRefresh();
		        }, 1000);
		},
		mounted() {
		},
		onShow(){
			//更新聊天快照
			this.loadChatSnapshot();
			
		},
		methods: {
			playMusic:function(url){
				audioClass.play(url);
			},
			goItem:function(item){
				if(item.friendid == this.userId){
					var temp = item.friendid;
					item.friendid = item.userid;
					item.userid = temp;
					uni.navigateTo({
						url:"chat?userid="+item.userid+"&friendid="+item.friendid+"&nickname="+item.nickname+"&image="+item.image+"&username="+item.username
					});
					console.log("开始跳转----1111");
				}else{
					var reqData = JSON.stringify(item); // 这里转换成 字符串
					uni.navigateTo({
						url:"chat?userid="+item.userid+"&friendid="+item.friendid+"&nickname="+item.nickname+"&image="+item.image+"&username="+item.username
					});
					console.log("开始跳转----2222");
				}
				
			},
			
			
			
			//websocket
			// 进入这个页面的时候创建websocket连接【整个页面随时使用】
			connectSocketInit() {
				var that = this;
				// 创建一个this.socketTask对象【发送、接收、关闭socket都由这个对象操作】
				this.socketTask = uni.connectSocket({
					// 【非常重要】必须确保你的服务器是成功的,如果是手机测试千万别使用ws://127.0.0.1:9099【特别容易犯的错误】
					url: common.wsHost,
					success(data) {
						console.log("websocket连接成功");
					},
				});
			 
			    // 消息的发送和接收必须在正常连接打开中,才能发送或接收【否则会失败】
			    this.socketTask.onOpen((res) => {
				    console.log("WebSocket连接正常打开中...！");
					if(this.socketTask != null && this.socketTask != undefined){
						//对象挂载，声明为全局变量
						 Vue.prototype.socketTask = this.socketTask;
					}
				   
					// 建立用户关联通道连接信息
					var buildMessage = common.getMessage(common.MSG_TYPE_CONN, that.userId, null, null, null, null);
					console.log("发送用户关联通道信息================");
					that.chat(JSON.stringify(buildMessage));
					
				
					// 注：只有连接正常打开中 ，才能正常收到消息
					this.socketTask.onMessage((res) => {
						console.log("收到服务器内容：" + res.data);
					});
					
					//相隔8秒发送心跳信息
					setInterval(function(){
						that.keepalive();
					}, 10000);
				})
				
				this.socketTask.onMessage((res) => {
					console.log("收到服务器内容：" + res.data);
					//更新快照
					that.loadChatSnapshot();
				});
			
				// 这里仅是事件监听【如果socket关闭了会执行】
				this.socketTask.onClose(() => {
					console.log("已经被关闭了")
				})
			},
			
			// 关闭websocket【离开这个页面的时候执行关闭】
			closeSocket:function() {
				this.socketTask.close({
					success(res) {
						this.is_open_socket = false;
						console.log("关闭成功", res)
					},
					fail(err) {
						console.log("关闭失败", err)
					}
				})
			},
			
			chat: function(msg) {
				var that = this;
				// 如果当前状态已经连接，无需再次初始化websocket
				if(this.socketTask != null && this.socketTask != undefined ) {
					that.socketTask.send({
						data:msg,
						success(){
							
						},
						fail(){
							
						}
					});
					
					// 只有发送聊天消息才重新加载好友快照
					if(JSON.parse(msg).type == common.MSG_TYPE_SEND) {
						// 重新加载好友快照
						that.loadChatSnapshot();
					}
				}
				else {
					// 重新连接
					that.connectSocketInit();
					//发送消息
					that.socketTask.send({
						data:msg,
						success(){
							
						},
						fail(){
							
						}
					});
				
				}
			},
			// 不停地发送心跳包
			keepalive: function() {
				// 构建对象
				var heartMessage = common.getMessage(common.MSG_TYPE_KEEPALIVE, null, null, null, null, null);
				console.log("发送心跳包================");
				this.chat(JSON.stringify(heartMessage));
			},
				
						
			//更新聊天快照
			loadChatSnapshot:function(){
				var that = this;
				var url = common.apiHost+'/chat/chatrecord/findListByUserId?userid='+that.userId;
				var method = "GET";
				common.request(url,null,method).then(data => {
					var list = data.data;
					for(var i = 0; i < list.length; i++){
						Vue.set(that.chatList,i,list[i]);
					}
					console.log("登录人："+that.userId);
					console.log("信息："+JSON.stringify(that.chatList));
				})
				
			}
				

		}
	}
</script>

<style>
	 .showTime {
		 margin-right: 0;
		 font-size: 26upx;
	 }
</style>
