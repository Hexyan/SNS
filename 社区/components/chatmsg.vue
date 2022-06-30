<template>
	<view class="w1">
		<view  v-for="(item,index) in nodes" :key="index">
			<block v-if="item.type=='audio'" >
				<view @click="playMusic(item.src)" class="iconfont f20 icon-video_light"></view>
			</block>
			<block v-if="item.type=='video'">
				<video show-fullscreen-btn="true" controls="true"  class="w2-1"   :src="item.src"></video>
			</block>
			<block v-if="item.type=='img'">
				<image :src="item.src" @click="touchImg(item.src)" mode="widthFix" class="w100"></image>
			</block>
			<block v-if="item.type=='file'">
				<view @click="downFile(item.src)" class="iconfont icon-file f20"></view>
			</block>
			<block v-if="item.type=='gift'">
				<view @click="getGift(item.src)" class="text-center">
					<text class="iconfont animated animated-rotateIn slower infinite cl-red icon-present f20"></text>
					<view>收到神秘礼物</view>
					</view>
			</block>
			<block v-else >
				<rich-text v-if="sign == 1" class="flex" :nodes="item.content"></rich-text>
				<rich-text v-if="sign == 0" class="flex" style="color: red;" :nodes="item.content"></rich-text>
			</block>
			
		</view>
	</view>
</template>

<script>
	import emo from "../common/emo.js";
	import audioClass from "../common/audio.class.js";
	export default{
		props:{
			content:"",
			sign: {
			    type: Number,
			    default: 1,
			}
		},
		data:function(){
			return {
				nodes:[]
			}
		},
		created:function(){
			var con=this.content;
			
			var res;
			//匹配音乐
			var patt = new RegExp(/\[([^=]*)=([^\]]*)\]/g,"g");
			res=patt.exec(con);
			 
			if(res){
				con=res[2];
				
				this.nodes=[{
					type:res[1],
					src:con,
					content:""
					
				}]
			}else{
				this.nodes=[{
					type:"text",
					content:emo.decodeEmo(this.content),
				}]
			}
			
		},
		watch: {
		    content: function(){
		        var con=this.content;
		        
		        var res;
		        //匹配音乐
		        var patt = new RegExp(/\[([^=]*)=([^\]]*)\]/g,"g");
		        res=patt.exec(con);
		         
		        if(res){
		        	con=res[2];
		        	
		        	this.nodes=[{
		        		type:res[1],
		        		src:con,
		        		content:""
		        		
		        	}]
		        }else{
		        	this.nodes=[{
		        		type:"text",
		        		content:emo.decodeEmo(this.content),
		        	}]
		        }
		    }  
		},
		methods:{
			touchImg: function(url){
				console.log("点击了图片");
			},
			playMusic:function(url){
				console.log("点击了播放音乐")
				audioClass.play(url);
			},
			downFile:function(url){
				uni.downloadFile({
					url: url, 
					success: (res) => {
						if (res.statusCode === 200) {
							//console.log('下载成功');
						}
					}
				});
			},
			getGift:function(giftid){
				this.$emit("call-parent",{type:"gift",giftid:giftid})
			}
		}
	}
</script>

<style>
	.w1{
		width: 100%;
	}
	.w2-1{
		width: 160px;
		height: 100px;
	}
</style>
