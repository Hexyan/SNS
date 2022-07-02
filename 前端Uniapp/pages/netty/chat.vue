<template>
	<view>
		<view id="main">
			<view class="pd-10 bg-fff">
				<template v-if="list.length>0">
				<view class="content" id="content" :style="{height: style.contentViewHeight + 'px'}">
			     <scroll-view id="scrollview" class="chat-window" scroll-y="true" :style="{height: style.contentViewHeight + 'px'}" :scroll-with-animation="false" :scroll-top="scrollTop">
					<view v-for="(item,index) in list" :key="time+'.'+item.id" class="m-item">
						<view class="chatbox" v-if="item.userid==userId">
							<view class="flex-1" :a="index"></view>
							<view class="chatbox-desc-b mgb-5 mgr-5">
								<chat-msg :content="item.message"></chat-msg>
							</view>
							
							<image v-if="myImage == null || myImage == ''" class="wh-40 mgr-10 bd-radius-10" src="../../static/chatImage.png" ></image>
							<image v-if="myImage != null && myImage != ''" class="wh-40 mgr-10 bd-radius-10" :src="myImage"></image>
							
							<!-- <image :src="myImage" class="wh-40 mgr-10 bd-radius-10"></image> -->
						</view>
						<view class="chatbox" v-else>
							
							<image @click="toPersonal()" v-if="chatData.image == null || chatData.image == ''" class="wh-40 mgr-10 bd-radius-10" src="../../static/chatImage.png" ></image>
							<image @click="toPersonal()" v-if="chatData.image != null && chatData.image != ''" class="wh-40 mgr-10 bd-radius-10" :src="chatData.image"></image>
							
							<view class="flex-1" :a="index">
								<view v-if="chatData.nickname == null || chatData.nickname == ''" class="chatbox-nick-a mgb-5">{{chatData.username}}</view>
								<view v-if="chatData.nickname != null && chatData.nickname != ''" class="chatbox-nick-a mgb-5">{{chatData.nickname}}</view>
								<view class="chatbox-desc-a">
									<chat-msg :content="item.message"></chat-msg>
								</view>
							</view>
						</view>

					</view>
				  </scroll-view>
				   </view>
				</template>
				<template v-else>
					<view class="emptyData">暂无消息</view>
				</template>

			</view>
			<view class="fixFoot-row"></view>
			<view class="fixFoot bg-fff pdb-5">
				<view class="input-flex">
					<input id="con" class="input-flex-text" v-model="content" type="text">
					<view class="input-flex-btn w60" @click="send('content')">发送</view>
				</view>
				<view class="flex flex-center">
					<!-- #ifndef H5-->
					<view @click="aRecordClass='flex-col'" class="flex-1 iconfont icon-voicefill f20"></view>
					<!-- #endif -->
					<view @click="choiceImg('pic')" class="flex-1 iconfont icon-pic f20 sendPic"></view>
					<!-- #ifndef H5 -->
					<view @click="catchImg('pic')" class="flex-1 iconfont icon-camera f20 sendPic"></view>
					<!-- #endif -->
					<!-- #ifndef H5 -->
					<view @click="videoRecord('video')" class="flex-1 iconfont icon-recordlight f20"></view>
					<!-- #endif -->
					<view @click="emoClass='flex-col'" class="flex-1 iconfont icon-emoji f20"></view>
					<view @click="choiceFile('file')" class="flex-1 iconfont none icon-file f20 "></view>
				</view>

			</view>
			<view id="emoModal" :class="emoClass" class="modal-group">
				<view class="modal-mask" @click="emoClass=''"></view>
				<view class="emoFixbox">

					<view class="pd-10">
						<view class="flex flex-wrap">
							<view @click="addEmo(item)" class="imEmo" :class="'imEmo-'+index" v-for="(item,index) in emoList" :key="index"></view>
						</view>
					</view>
				</view>
			</view>

			<view class="modal-group" :class="aRecordClass">
				<view class="modal-mask" @click="aRecordClass=''"></view>

				<view @click="aRecordToggle" class="aRecordBox">
					<view :class="{'aRecord-active':aRecordIng}" class="iconfont icon-voice f36"></view>
					<view v-if="aRecordIng">点击结束</view>
					<view v-else>点击录音</view>
				</view>

			</view>


		</view>
	</view>
</template>

<script>
	import chatDb from "@/common/chatdb.js"
	import chatMsg from "@/components/chatmsg.vue";
	import emo from "@/common/emo.js";
	import common from "@/common/common.js";
	var gid;
	var groupid;
	var uid = Date.parse(new Date());
	var touid = ""
	var ws;
	var inPage = false;
	var windowHeight=0;
	var lastMsg;
	var audioRecord;
	var inAjax=false;
	const aRecordOptions = {
		duration: 10000,
		sampleRate: 44100,
		numberOfChannels: 1,
		encodeBitRate: 192000,
		format: 'mp3',
		frameSize: 50
	}
	export default {
		components: {
			chatMsg
		},
		data: function() {
			return {
				per_page: 0,
				"list": [],
				content: "",
				wsConn: false,
				group: {},
				user: {},
				toUser: {},
				emoList: [],
				sch: 0,
				oldsch: 0,
				scrollTop: 10000,
				emoClass: "",
				aRecordClass: "",
				aRecordIng: false,
				time:0,
				token: '',
				userId:0, //本地登录信息
				chatData: {
					userid: '',
					friendid: '',
					nickname: '',
					image: ''
				} ,//聊天记录信息
				myImage: '',
				// 聊天页面时时滚动样式
				style: {
				    pageHeight: 0,
				    contentViewHeight: 0,
				    footViewHeight: 90,
				    mitemHeight: 0
				},
			}
			
		},
		created: function() {
		　　const res = uni.getSystemInfoSync();   //获取手机可使用窗口高度     api为获取系统信息同步接口
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100) - 70; //像素   因为给出的是像素高度 然后我们用的是upx  所以换算一下 
			this.scrollToBottom();   //创建后调用回到底部方法
		　　
		},　
		onPageScroll:function(e){
			if(e.scrollTop==0 && !inAjax){
				this.getList();
				inAjax=true;
				setTimeout(function(){
					inAjax=false;
				},2000);
			}
		},
		onLoad: function(options) {
			var that = this;
			//接受页面传值
			 that.chatData = {
				 userid: options.userid,
				 friendid: options.friendid,
				 nickname: options.nickname,
				 username: options.username,
				 image: options.image
			 } // 字符串转对象
			 console.log("页面跳转成功==="+JSON.stringify(that.chatData));
			 //获取当前登录人信息
			 uni.getStorage({  //携带token
			     key: 'user',  
			     success: function(ress) {
					that.token = ress.data.token;
					that.userId = ress.data.id;
					that.myImage = ress.data.image;
			     }
			 });
			 //未登录，跳转到登录页面
			 if(that.token == null || that.token == ''){
			 	uni.navigateTo({
			 		url: "/pages/shilu-login/login"
			 	});
			 };
			 console.log("加载中---");
			//加载聊天记录
			this.initList();
			
			
			//更新聊天信息
			this.revMessage();
			
			
			
			var sys=uni.getSystemInfoSync();
			windowHeight=sys.windowHeight;	
			this.emoList = emo.emoList();
			
			//#ifndef H5
			audioRecord = wx.getRecorderManager();


			audioRecord.onStop((res) => {
				if (res.tempFilePath) {
					that.recordUpload(res.tempFilePath);
				}

			})

			audioRecord.onError((res) => {
				console.log(e)
			})
			//#endif

		},
		onHide: function() {
			if (inPage) {
				return false;
			}
			ws.close({
				success: function(res) {

				}
			});
		},
		onShow: function() {
			if (inPage) {
				return false;
			}
			var that = this;
			if (this.wsConn) {
				that.wsInit();
			}
			
		},
		methods: {
			scrollY: function(e) {
				this.sch = e.detail.scrollHeight;
			},
			scTop: function(e) {
				if (this.oldsch == 0) {
					this.oldsch = this.sch;
				}

				var that = this;
				that.scrollTop = 0;
				this.getList();
			},
			toPersonal(){
				var that = this;
				uni.navigateTo({
					url:'../me/personal?userId='+that.chatData.friendid
				});
			},
			//更新聊天信息
			revMessage:function(){
				var that = this;
				// 注：只有连接正常打开中 ，才能正常收到消息
				Vue.prototype.socketTask.onMessage((res) => {
					console.log("收到服务器内容：" + res.data);
					//更新
					console.log("更新消息成功=========");
					var record = JSON.parse(res.data);
					that.list.push(record.chatRecord); 
					//滑到底部
					that.scrollToBottom();  
				});
			},
			//加载聊天记录
			initList:function(reqData){
				var url = common.apiHost+'/chat/chatrecord/findByUserIdAndFriendId?userid='+this.chatData.userid+'&friendid='+this.chatData.friendid;
				var method = "GET";
				common.request(url,null,method).then(data => {
					console.log("加载当前聊天=======");
				    //console.log(JSON.stringify(data));
				  this.list = data.data;
				  setTimeout(() => {
				  	  this.scrollToBottom();   //创建后调用回到底部方法
				  },0);
				}).catch(err => {
					console.log("加载当前聊天发生异常");
				});
				
			},
			
			//发送消息
			send: function(type, fileurl) {
				var that = this;
				var content;
				switch (type) {
					case "pic":
						content = "[img=" + fileurl + "]"
						break;
					case "audio":
						content = "[audio=" + fileurl + "]"
						break;
					case "video":
						content = "[video=" + fileurl + "]"
						break;
					case "file":
						content = fileurl.substring(fileurl.lastIndexOf("\/") + 1) + " [file=" + fileurl + "]";
						break;
					case "content":
						content = that.content;
						if (content == "") {
							return false;
						}
						break;
				}
				var msg = common.getMessage(common.MSG_TYPE_SEND, this.chatData.userid,this.chatData.friendid, content, null, null);
			    console.log(msg);
				lastMsg = msg;
			    //发送消息
				Vue.prototype.socketTask.send({
					data:JSON.stringify(msg),
					success(){
						console.log(JSON.stringify(msg));
						//更新
						console.log("更新消息成功=========");
						that.list.push(msg.chatRecord);
						//清空输入框,要延时更新，要不然直接更新会导致不立刻渲染
						setTimeout(() => {that.content = '' ;}, 0);
						
						//滑到底部
						that.scrollToBottom();  
						
					},
					fail(){
						console.log("发送失败========");
					}
				});
				
				  
			},
			
			//滑到底部
			scrollToBottom: function () {
				        console.log("滑动了=============")
			            var that = this;
			            var query = uni.createSelectorQuery();
			            query.selectAll('.m-item').boundingClientRect();
			            query.select('#scrollview').boundingClientRect();
			            query.exec((res) => {
			                that.style.mitemHeight = 0;
			                res[0].forEach((rect) => that.style.mitemHeight = that.style.mitemHeight + rect.height + 40);   //获取所有内部子元素的高度
			　　　　　　　　　　 // 因为vue的虚拟DOM 每次生成的新消息都是之前的，所以采用异步setTimeout    主要就是添加了这红字
			　　　　　　　　　　 setTimeout(() => {
			                　　if (that.style.mitemHeight > (that.style.contentViewHeight - 100)) {   //判断子元素高度是否大于显示高度
			                    　　that.scrollTop = that.style.mitemHeight - that.style.contentViewHeight    //用子元素的高度减去显示的高度就获益获得序言滚动的高度
			                　　}
			　　　　　　　　　}, 100);
			　　　　　　　});
			 },
			
			
			addEmo: function(s) {
				s = "\\" + s + " ";
				this.content += s;
			},
			
			choiceImg: function() {
				//选择图片发送
				var that = this;
				inPage = true;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'],
					sourceType: ["album"],
					fail: function(e) {
						inPage = false;
					},
					success: function(res) {
						inPage = false;
						var url = '';
						uni.uploadFile({
							url: common.apiHost + '/other/qiniu/file/upload', //仅为示例，换成自己的上传地址
							filePath: res.tempFilePaths[0],
							header: {
								"Content-Type": "multipart/form-data",
								"token": that.token
							},
							name: 'file',
							formData: {
								'file': 'file'
							},
							success: (e) => {
								//未登陆,自动跳到登陆界面
								console.log('上传');
								if(e.statusCode === 405){
									console.log("未登陆")
									uni.navigateTo({
										url: "/pages/shilu-login/login"
									});
								}
								var ee = JSON.parse(e.data);
								if(ee.code === 1){
									url = ee.data;
									that.send("pic", url);
								}
						    },
						});
					
					},
				});
			},
			// choiceFile: function() {
			// 	//选择文件发送
			// 	var that = this;
			// 	inPage = true;
			// 	uni.chooseImage({
			// 		fail: function(e) {
			// 			inPage = false;
			// 		},
			// 		success: function(e) {
			// 			inPage = false;
			// 			uni.uploadFile({
			// 				url: that.app.apiHost + "/index.php?m=upload&a=upload&ajax=1&authcode=" + that.app.getAuthCode(), //仅为示例，非真实的接口地址
			// 				filePath: e.tempFilePaths[0],
			// 				name: 'upimg',
			// 				dataType: "json",

			// 				success: (res) => {
			// 					if (!res.error) {
			// 						var rs = JSON.parse(res.data);
			// 						if (!rs.error) {
			// 							that.send("file", rs.trueimgurl);
			// 						}
			// 					}
			// 				}
			// 			});
			// 		}
			// 	})
			// },
			catchImg: function() {
				var that = this;
				inPage = true;
				uni.chooseImage({
					fail: function(e) {
						inPage = false;
					},
					sourceType: ["camera"],
					success: function(e) {
						inPage = false;
						var url = '';
						uni.uploadFile({
							url: common.apiHost + '/other/qiniu/file/upload', //仅为示例，换成自己的上传地址
							filePath: e.tempFilePaths[0],
							header: {
								"Content-Type": "multipart/form-data",
								"token": that.token
							},
							name: 'file',
							formData: {
								'file': 'file'
							},
							success: (e) => {
								//未登陆,自动跳到登陆界面
								console.log('上传');
								if(e.statusCode === 405){
									console.log("未登陆")
									uni.navigateTo({
										url: "/pages/shilu-login/login"
									});
								}
								var ee = JSON.parse(e.data);
								if(ee.code === 1){
									url = ee.data;
									that.send("pic", url);
								}
						    },
						});
						
					}
				})
			},
			videoRecord: function() {
				var that = this;
				uni.chooseVideo({
					count: 1,
					success: function(e) {
						var url = '';
						
						uni.uploadFile({
							url: common.apiHost + '/other/qiniu/file/upload', //仅为示例，换成自己的上传地址
							filePath: e.tempFilePath,
							header: {
								"Content-Type": "multipart/form-data",
								"token": that.token
							},
							name: 'file',
							formData: {
								'file': 'file'
							},
							success: (e) => {
								//未登陆,自动跳到登陆界面
								console.log('上传');
								if(e.statusCode === 405){
									console.log("未登陆")
									uni.navigateTo({
										url: "/pages/shilu-login/login"
									});
								}
								console.log(e);
								console.log(e.data);
								var ee = JSON.parse(e.data);
								if(ee.code === 1){
									url = ee.data;
									that.send("video", url);
								}
						    },
						});
						
						
					}
				})
			},
			recordUpload: function(fileurl) {
				var that = this;
				console.log(fileurl);
				var url = '';
				
				uni.uploadFile({
					url: common.apiHost + '/other/qiniu/file/upload', //仅为示例，换成自己的上传地址
					filePath: fileurl,
					header: {
						"Content-Type": "multipart/form-data",
						"token": that.token
					},
					name: 'file',
					formData: {
						'file': 'file'
					},
					success: (e) => {
						//未登陆,自动跳到登陆界面
						console.log('上传');
						if(e.statusCode === 405){
							console.log("未登陆")
							uni.navigateTo({
								url: "/pages/shilu-login/login"
							});
						}
						console.log(e);
						console.log(e.data);
						var ee = JSON.parse(e.data);
						if(ee.code === 1){
							url = ee.data;
							that.send("audio", url);
						}
				    },
				});
				
				
			},
			aRecordToggle: function() {
				if (this.aRecordIng) {
					console.log("stop")
					audioRecord.stop();
					this.aRecordIng = false;
				} else {
					this.aRecordIng = true;

					audioRecord.start(aRecordOptions);
				}


			}
		}
	}
</script>

<style>
	.scroll-list {
		width: 100%;
		box-sizing: border-box;
		position: absolute;
		top: 0px;
		bottom: 80px;
	}
	.add-friend-btn {
		position: fixed;
		bottom: 200px;
		right: 3px;
		background-color: #15ABA5;
		color: #fff;
		width: 30px;
		height: 30px;
		line-height: 30px;
		border-radius: 20px;
		text-align: center;
		display: block;
		cursor: pointer;
	}

	.aRecordBox {
		z-index: 9999;
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background-color: #fff;
		position: fixed;
		bottom: 100px;
		left: 50%;
		margin-left: -50px;
		text-align: center;
		display: block;
	}

	.f36:before {
		font-size: 36px;
	} 
	
	.msgCon {
		width:auto;
		display:inline-block;
		background-color: #009688;
		background-repeat: round;
	}
</style>
