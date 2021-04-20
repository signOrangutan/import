<template>
    <div class='com-comment'>
        <tabs 
            :current="current" 
            :tabData="tabData"
            ></tabs>
        <div class="coment-list mt-8">
            <div 
                class="comment-item"
                v-for="(comment, index) in commentList" :key="index"
            >
                <div class="comment-header">
                    <span class="comment-date">2020-05-10 09:21:03</span>
                    <span>订单号: 202005100921003903</span>
                </div>
                <div class="comment-content d-flex justify-space-between">
                    <span>草缘食尚商业计划书V2.0</span>
                    <span>2021-04-02 21:46:35 发表评轮</span>
                    <span class="review" @click="handleClick(comment)">查看评价</span>
                </div>
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
                commentList:[{},{},{},{},{},{}],
                current: 0
            }
        },
        methods: {
            handleClick: function(item){
                this.$router.push({path:'/web/mine/review', query:{ action: 'view', orderId: item.id}})
            }
        }
    }
</script>
<style lang='scss'>
    .com-comment {
        .coment-list {

            .comment-item {
                border-radius: 4px;
                border: solid 1px #DFDFDF;
                
                &:not(:last-child) {
                    margin-bottom: 20px;
                }
                // .comment-header {
                //     color: #333;
                //     padding-left: 20px;
                //     background-color: #F8FAFC;
                //     font-size: 16px;
                //     font-weight: 500;
                //     line-height: 2.8;
                //     .comment-date {
                //         margin-right: 5%;
                //     }
                // }
                .comment-content {
                    padding: 0 20px;
                    font-size: 14px;
                    color: #666;
                    line-height: 5.7;

                    .review {
                        @extend .text-primary;
                    }
                }
            }
        }
    }
</style>