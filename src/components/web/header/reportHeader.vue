<template>
    <div class='com-report-header d-flex'>
        <div 
            class="item d-flex align-center"
            :class="{active: step>=item.step}" 
            v-for="(item, index) in nav" :key="index">
            <span class="icon"></span>
            <span>{{item.title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            step: {
                type: Number,
                default: 1
            }
        },
        data: function(){
            return {
                nav:[
                    {
                        title: '行业选择',
                        step: 1
                    },
                    {
                        title: '填写资料',
                        step: 2
                    },
                    {
                        title: '预览下载',
                        step: 3
                    }
                ]
            }
        }
    }
</script>
<style lang='scss'>
    .com-report-header {
        line-height: 4.4;
        font-size: 16px;
        color: #999;

        .item {
            position: relative;
            padding-right: 62px;
            &:not(:last-child){
                &::after{
                    content: '';
                    right: 12px;
                    top: 32px;
                    position: absolute;
                    display: inline-block;
                    width: 40px;
                    height: 5px;
                    background: url('../../../assets/img/381.png') center/cover no-repeat;
                }
            }
            .icon {
                display: inline-block;
                margin-right: 8px;
                width: 22px;
                height: 22px;
            }
            &:first-child{
                .icon {
                    background: url('../../../assets/img/380.png') center/cover no-repeat;
                }
                
            }
            &:nth-child(2) {
                .icon {
                    background: url('../../../assets/img/382.png') center/cover no-repeat;
                }
            }
            &:last-child {
                .icon {
                    background: url('../../../assets/img/383.png') center/cover no-repeat;
                }
            }
        }
        .active {
            color: $primary-color;
            
            &:nth-child(2) {
                .icon {
                    
                }
            }
            &:last-child {
                .icon {
                    background: url('../../../assets/img/385.png') center/cover no-repeat;
                }
            }
        }
    }
</style>