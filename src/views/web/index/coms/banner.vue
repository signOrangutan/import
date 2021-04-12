<template>
    <div class='com-sub-banner'>
        <img :src="bannersrc" class="img" alt="">
        <div class="content"> 
            <v-btn color="primary">一键智能生成</v-btn>
            <div class="context">
                <p class="item">
                    今日商业计划书生成 
                    <span class="content-text">2,548 </span> 份
                </p>
                <p class="item">
                    累计生成
                    <span class="content-text">5,875,048</span>个
                </p>
            </div>
        </div>
    </div>

</template>

<script>
    import bannersrc from '@/assets/img/banner.png'
    export default {
        data: function(){
            return {
                bannersrc
            }
        }
    }
</script>
<style lang='scss'>
    .com-sub-banner {
        position: relative;
        width: 100%;
        .img {
            width: 100%;
        }
        .content {
            min-width: 706px;
            text-align: center;
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-353px);
            .context {
                display: flex;
                line-height: 2.4;
                margin-top: 50px;
                background: #F3F3F3;
                border-radius: 4px 4px 0px 0px;
                color: #333;
                font-family: 'Source Han Sans CN';
                
                .item {
                    margin-bottom: 0;
                    flex: 1;

                    &:first-child {
                        border-right: 1px solid #BFBFBF;
                    }
                }


                .content-text {
                    color: #FC7E23;
                    font-size: 24px;
                    font-weight: bold;

                    
                }

                
            }
        }
    }
</style>