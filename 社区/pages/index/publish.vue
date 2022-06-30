<template>
	<view>
		<view class="cu-bar bg-white solid-bottom" style="height: 80upx; padding:25upx 10upx ; align-content: center;">
			<view style="display: inline;">
				<view class="round bg-black light fl" style="width: 100upx;float: left;">#话题</view>
				<view class="topic" style="float: left;padding-left: 10upx; width: 80%;">
					<picker class="topic" @change="bindPickerChange" :value="pickIndex" :range="topics">
						<view class="uni-input">{{topics[pickIndex]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="cu-form-group" style="min-height: 280px;">
			<textarea maxlength="400" style="min-height: 280px;" v-model="content" @input="textareaAInput" placeholder="记录你的生活"></textarea>
		</view>
		<view class="padding  text-black">
			<!-- <text class="lg cuIcon-voicefill" style="padding: 20upx;" @touchstart="voiceClick"></text> -->
			<!-- <view> -->
				<radio-group @change="radioChange" class="signs">
						<label class="radio"><radio value="1" checked="true" />图片</label>
						<label class="radio"><radio value="2" />视频</label>
				</radio-group>
			<!-- </view> -->
			<text class="lg cuIcon-picfill" style="padding: 20upx;" v-if="sign == 1" @touchstart="imageClick"></text>
			<text class="lg cuIcon-videofill" style="padding: 20upx;" v-if="sign == 2" @touchstart="videoClick"></text>
			<!-- #ifdef APP-PLUS -->
			<!-- <text class="lg cuIcon-camerafill" style="padding: 20upx;" @touchstart="cameraClick"></text> -->
			<!-- #endif -->
			<!-- <view class="cu-tag round bg-black light fr">#话题</view> -->
			<view class="action">
				<button class="cu-btn bg-red shadow" style="background-color: #55557f;" @tap="PublishContent">发布</button>
			</view>
		</view>
		<view class="grid  col-3 grid-square" v-if="imagePath.length>0">
			<view class="bg-img" v-for="(path,index) in imagePath" :key="index" :style="[{ backgroundImage:'url('+path+')' }]">
				<view class="cu-tag badge" @click="imagePath.splice(index,1)">X</view>
			</view>
		</view>
		<view v-if="videoPath">
			<button class="cu-btn block line-orange" @click="videoPath='';">移 除</button>
			<video id="localPath" style="width: 100%;" :src="videoPath" danmu-btn controls>
			</video>
		</view>
	</view>
</template>

<script>
	import permision from "@/common/permission.js"
	import common from "@/common/common.js";
	import {
		uploadFile
	} from "@/common/request_api/upload.js"
	export default {
		name: "publish",
		component: {
			common
		},
		data() {
			return {
				sign: 1,
				userId: 0,
				content: "",
				imagePath: [],
				videoPath: "",
				isPublish: false,
				topics: ["话题1"],
				topicsId:[],
				pickIndex: 0
			}
		},
		onLoad() {
			//获取登录人信息
			var that = this;
			uni.getStorage({  //携带token
			    key: 'user',  
			    success: function(ress) {
					that.userId = ress.data.id;
			    }
			});
			this.getTopicList();
		},
		methods: {
			//获取话题，默认10条
			getTopicList: function(){
				var reqData = {
					
				};
				var url = common.apiHost+'/invitation/tTopic/list';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
					console.log(data.data.data);
				  if(data.data.code == 1){
					  //查询成功
					  this.topics = [];
					  var list = data.data.data.records;
					  for(var i = 0; i < list.length; i++){
						  this.topics.push(list[i].topName);
						  this.topicsId.push(list[i].id);
					  }
				  }
				}).catch((err) => {
				   console.log("出现异常了")
				});
			},
			radioChange: function(e){
				//选择视频还是图片
				this.sign = e.detail.value;
			},
			bindPickerChange: function(e) {
			    this.pickIndex = e.target.value
			 },
			textareaAInput(e) {
				this.content = e.detail.value
			},
			PublishContent() {
				//发布帖子
				var reqData = {
					invContent: this.content,
					invType: this.sign,
					userId: this.userId,
					invImage:this.imagePath.toString(),
					invVideo:this.videoPath,
					topId:this.topicsId[this.pickIndex]
				}
				
				var url = common.apiHost+'/invitation/tInvitation/save';
				var method = "POST";
				common.request(url,reqData,method).then(data => {
				  if(data.data.code == 1){
					  //发帖成功，跳转到首页
					  uni.switchTab({
					  	url: "./index"
					  });
					  
					  uni.showToast({
					    title:"发帖成功！审核时间为10分钟！",
					  	duration:2000
					  })
				  }else{
					  uni.showToast({
					    title:data.data.msg,
					  	duration:2000
					  })
				  }
				  
				}).catch((err) => {
				   uni.showToast({
				     title:"发帖失败...稍后再试",
				   	 duration:2000
				   })
				});
			},
			// #ifdef APP-PLUS 
			// async checkPermission() {
			// 	let status = permision.isIOS ? await permision.requestIOS('record') :
			// 		await permision.requestAndroid('android.permission.RECORD_AUDIO');

			// 	if (status === null || status === 1) {
			// 		status = 1;
			// 	} else if (status === 2) {
			// 		uni.showModal({
			// 			content: "系统麦克风已关闭",
			// 			confirmText: "确定",
			// 			showCancel: false,
			// 			success: function(res) {}
			// 		})
			// 	} else {
			// 		uni.showModal({
			// 			content: "需要麦克风权限",
			// 			confirmText: "设置",
			// 			success: function(res) {
			// 				if (res.confirm) {
			// 					permision.gotoAppSetting();
			// 				}
			// 			}
			// 		})
			// 	}
			// 	return status;
			// },
			// async voiceClick() {
			// 	// #ifdef APP-PLUS
			// 	let status = await this.checkPermission();
			// 	console.log(status);
			// 	if (status !== 1) {
			// 		return;
			// 	}
			// 	// #endif 
			// 	// TODO ios 在没有请求过权限之前无法得知是否有相关权限，这种状态下需要直接调用语音，会弹出正在识别的toast
			// 	let _this = this;
			// 	plus.speech.startRecognize({
			// 		'engine': 'baidu'
			// 	}, function(s) {
			// 		_this.content += s;
			// 	}, function(e) {
			// 		console.log("语音识别失败：" + e.message);
			// 	});
			// },
			// #endif
			async imageClick() {
				var _this = this;
				uni.chooseImage({
					count: 3, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						//上传
						_this.videoPath = "";
						if (_this.imagePath.length + res.tempFilePaths.length > 6)
							return _this.$uniToast.warning("最多上传6张图.");
						
						var url = '';
						var token = '';
						uni.getStorage({  //携带token
							key: 'user',  
							success: function(ress) {
							  token = ress.data.token;
						    }
						});
						//循环上传多张图片
						for(var i = 0; i < res.tempFilePaths.length; i++){
							uni.uploadFile({
								url: common.apiHost + '/other/qiniu/file/upload', //仅为示例，换成自己的上传地址
								filePath: res.tempFilePaths[i],
								header: {
									"Content-Type": "multipart/form-data",
									"token": token
								},
								name: 'file',
								formData: {
									'file': 'file'
								},
								success: (res) => {
									//未登陆,自动跳到登陆界面
									console.log('上传');
									if(res.statusCode === 405){
										console.log("未登陆")
										uni.navigateTo({
											url: "/pages/shilu-login/login"
										});
									}
									var ress = JSON.parse(res.data);
									if(ress.code === 1){
										url = ress.data;
										_this.imagePath = _this.imagePath.concat(url);
										console.log('图片路径：==============='+_this.imagePath);
									}
									
								},
							});
						}
						
					}
				});
			},
			async videoClick() {
				let _this = this;
				uni.chooseVideo({
					count: 1,
					sourceType: ['album'],
					success: function(res) {
						var token = '';
						uni.getStorage({  //携带token
							key: 'user',  
							success: function(ress) {
							  token = ress.data.token;
						    }
						});
						
						//上传视频
						uni.uploadFile({
							url: common.apiHost + '/other/qiniu/file/upload', //仅为示例，换成自己的上传地址
							filePath: res.tempFilePath,
							header: {
								"Content-Type": "multipart/form-data",
								"token": token
							},
							name: 'file',
							formData: {
								'file': 'file'
							},
							success: (res) => {
								//未登陆,自动跳到登陆界面
								console.log('上传');
								if(res.statusCode === 405){
									console.log("未登陆")
									uni.navigateTo({
										url: "/pages/shilu-login/login"
									});
								}
								var ress = JSON.parse(res.data);
								if(ress.code === 1){
									_this.videoPath = ress.data;
									console.log('视频路径：==============='+_this.videoPath);
								}
								
							},
						});
					}
				});
			},
			// //#ifdef APP-PLUS 
			// async cameraClick() {
			// 	// #ifdef APP-PLUS
			// 	let status = await this.checkPermission();
			// 	console.log(status);
			// 	if (status !== 1) {
			// 		return;
			// 	}
			// 	// #endif 
			// 	uni.showActionSheet({
			// 		itemList: ['图片拍摄', '视频拍摄', '取  消'],
			// 		success: function(res) {
			// 			// 获取设备默认的摄像头对象 
			// 			let cameraObj = plus.camera.getCamera();
			// 			let resolution = cameraObj.supportedImageResolutions[0];
			// 			let fmt = cameraObj.supportedImageFormats[0];
			// 			console.log("Resolution: " + resolution + ", Format: " + fmt);
			// 			if (res.tapIndex === 0)
			// 				cameraObj.captureImage(function(path) {
			// 						console.log("Capture image success: " + path);
			// 					},
			// 					function(error) {
			// 						console.log("Capture image failed: " + error.message);
			// 					}, {
			// 						resolution: resolution,
			// 						format: fmt
			// 					}
			// 				);
			// 			if (res.tapIndex === 1)
			// 				cameraObj.startVideoCapture(
			// 					function(path) {
			// 						console.log("Capture image success: " + path);
			// 					},
			// 					function(error) {
			// 						console.log("Capture image failed: " + error.message);
			// 					}, {
			// 						resolution: resolution,
			// 						format: fmt
			// 					}
			// 				);
			// 		},
			// 		fail: function(res) {
			// 			console.log(res.errMsg);
			// 		}
			// 	});
			// },
			// // #endif
		}
	};
</script>
<style lang="scss" scoped>
	@import url('../../colorui/main.css');
	@import url('../../colorui/icon.css');

	.text-black {
		display: block;
	}

	.cu-bar {
		display: block;
	}

	.signs {
		display: flex;
		flex-direction: row;
		height: 20upx;
		margin-bottom: 40upx;
		
		.radio {
			width: 130upx;
			transform:scale(0.7);
		}
	}

</style>
