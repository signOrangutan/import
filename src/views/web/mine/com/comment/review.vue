<template>
    <!-- 评论 -->
    <div class='com-review-page'>
        <tabs :tabData="tabData" :current="0"></tabs>
        <div class="review-box mt-8">
            <p class="comment-header">
                <span class="comment-date">2020-05-10 09:21:03</span>
                <span>订单号: 202005100921003903</span>
            </p>
            <div class="container">
                <p class="goods-name">草缘食尚商业计划书V2.0</p>
                <div class="item">
                    <div class="label">商品评分</div>
                    <div class="rate">
                        <span 
                            class="rate-item" 
                            v-for="i in 5" :key="i"
                            :class="{'rate-num': i <= rate}"
                            @click="handleRate(i)"
                            ></span>
                        <span v-show="rate">{{rate}}分</span>
                    </div>
                </div>
                <div class="item">
                    <div class="label">商品评价</div>
                    <textarea
                        class="item-textarea"
                        v-model="comment"
                        :disabled="disabled"
                        maxlength="300"
                        ></textarea>
                </div>
                <!-- 图片上传 -->
                <div class="item">
                    <div class="imgs">
                        <div class="img-preview" v-for="(img,index) in imgList" :key="index">
                            <v-img class="img-box" :src="img.src"></v-img>
                        </div>
                        
                        <span class="img-camera">
                            <input class="com-upload" type="file" multiple accept="image/png,image/jpeg,image/jpg">
                        </span>
                    </div>
                </div>
                <v-btn
                    v-if="!disabled" 
                    style="margin-left:11.5%; width:20%;" 
                    class="primary btn-publish" 
                    small>发表</v-btn>
            </div>
            
        </div>
    </div>
</template>

<script>
    import tabs from '@/components/web/tabs/tabs'
    export default {
        components:{
            tabs
        },
        data: function(){
            return {
                tabData:[
                    {name: '评论反馈'}
                ],
                source: this.$route.query.action, // add: 评论 view: 预览
                id: 0,
                rate: 3, // 评分 
                comment: '分享使用心德',
                imgList:[]
            }
        },
        computed: {
            disabled: function(){
                return this.source == 'add' ? false : true
            }
        },
        methods: {
            handleRate: function(i){
                if(this.source=='view'){
                    return 
                }
                this.rate = i
            }
        },
        mounted: function(){
            let fileObj = document.querySelector('.com-upload');
            let _that = this
            fileObj.addEventListener('change', function(){
                for(let i=0, len=this.files.length; i<len; i++){
                    let item = this.files[i]
                    let reader = new FileReader();
                    reader.readAsDataURL(item)
                    reader.onload = function(e){
                        item.src = this.result
                        _that.imgList.push(item)
                    }
                }
            })
        }
    }
</script>
<style lang='scss'>
    .com-review-page {

        .review-box {
            border: solid 1px #DFDFDF;
            padding-bottom: 45px;
            .container {
                padding-left: 20px;
                color: #333;
                font-size: 16px;
                font-weight: 500;
                line-height: 2;

                .item {
                    display: flex;
                    .label {
                        font-size: 14px;
                        font-weight: 400;
                        margin-right: 40px;
                    }
                    .rate {
                        .rate-item {
                            display: inline-block;
                            width: 16px;
                            height: 16px;
                            background: url('../../../../../assets/img/364.png') center/cover no-repeat;
                            margin-right: 5px;
                        }
                        .rate-num {
                            background: url('../../../../../assets/img/365.png') center/cover no-repeat;
                        
                        }
                    }
                    .item-textarea {
                        border: solid 1px #DFDFDF;
                        width: 85%;
                        font-size: 14px;
                    }
                    .imgs {
                        display: flex;
                        margin-top: 20px;
                        margin-bottom: 20px;
                        margin-left: 11.5%;
                        .img-preview {
                            width: 50px;
                            height: 50px;
                            margin-right: 5px;
                            .img-box {
                                width: 100%;
                                height: 100%;
                                
                                background-color: #DFDFDF;
                            }
                            
                        }
                        .img-camera {
                            position: relative;
                            display: inline-block;
                            background-color: #DFDFDF;
                            width: 50px;
                            height: 50px;
                            &::after {
                                position: absolute;
                                content: '';
                                width: 24px;
                                height: 22px;
                                top: 12px;
                                left: 13px;
                                background: url('../../../../../assets/img/camera.png') center/cover no-repeat;
                        
                            }
                            .com-upload {
                                opacity: 0;
                                position: absolute;
                                top: 0;
                                left: 0;
                                bottom: 0;
                                right: 0;
                                z-index: 10;
                            }
                        }
                    }
                }
            }
           
        }
    }
</style>