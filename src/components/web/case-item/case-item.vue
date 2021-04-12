<template>
    <!-- 案例展示元素 -->
    <div class='com-case-item'>
        <div class="cover">
            <img class="img" :src="item.src" alt="">
        </div>
        <div class="content">
            <span class="title">{{item.title}}</span>
            <v-btn 
                class="preview-btn"
                @click="handlePrevuew">点击预览</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item:{
                type: Object,
                default: ()=>{
                    return {}
                },
                require: true
            }
        },
        data: function(){
            return {

            }
        },
        methods: {
            handlePrevuew: function(){
                console.log('预览案例')
            }
        }
    }
</script>
<style lang='scss'>
    .com-case-item {
        .cover {
            width: 100%;
            height: 330px;
            border-radius: 6px 6px 0px 0px;
            .img {
                width: 100%;
            }
        }
        .content {
            width: 100%;
            background: #FFFFFF;
            box-shadow: 0px 5px 20px 0px rgba(12, 3, 7, 0.05);
            border-radius: 0px 0px 6px 6px;
            padding-right: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .title {
                margin-left: 30px;
                font-size: 20px;
                font-weight: 400;
                line-height: 3.8;
            }
            .preview-btn {
                background-color: #fff;
                border: 1px solid #c9c9c9;
                color: #666;
                font-size: 18px;
            }
        }
    }
</style>
