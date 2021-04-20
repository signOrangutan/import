<template>
    <div class='com-trade'>
        <tabs 
            class="mb-4"
            :current="current" 
            :tabData="tabData"
            @handleClick="handleClick"
            ></tabs>
        
        <p class="list-header d-flex justify-space-around">
            <span class="goods-name">商品信息</span>
            <span>单价</span>
            <span>数量</span>
            <span>实付款</span>
            <span>订单状态</span>
            <span>交易操作</span>
        </p>
        <div class="order-list">
            <div 
                class="order-item"
                v-for="(order, index) in orderList" :key="index"
            >
                <p class="item-header mb-0">
                    <span class="order-date">2020-05-10 09:21:03</span>
                    <span class="order-id">订单号: 202005100921003903</span>
                </p>
                <div class="order-content d-flex justify-space-around align-center pb-4">
                    <span class="goods-name">草缘食尚商业计划书V2.0</span>
                    <span>￥40.00</span>
                    <span>1</span>
                    <span class="real-amount">￥40.00</span>
                    <span>交易完成</span>
                    <div class="order-actions d-flex flex-column justify-center align-center" v-if="order.status==2">
                        <v-btn class="primary" small >开具发票</v-btn>
                        <span class="review" @click="handleReview(order)">去评价</span>
                    </div>
                    <div class="order-actions" v-else>
                        <v-btn small>重新下单</v-btn>
                    </div>
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
                    {name: '全部订单'},
                    {name: '待付款'},
                    {name: '已完成'},
                    {name: '待开票'},
                    {name: '发票历史'}
                ],
                orderList:[{id: 1, status: 1},{id: 2, status: 2}],
                current: 0
            }
        },
        methods: {
            handleClick: function(index){
                this.current = index
            },
            handleReview: function(order){
                this.$router.push({path:'/web/mine/review', query:{ action: 'add', orderId: order.id}})
            }
        }
    }
</script>
<style lang='scss'>
    .com-trade {
        .list-header {
            background-color: #F8FAFC;
            font-size: 14px;
            color: #333;
            font-weight: 500;
            line-height: 3.5;
        }
        .goods-name {
                display: inline-block;
                width: 25%;
            }
        .order-list {
            
            .order-item {
                border-radius: 4px;
                border: solid 1px #DFDFDF;
                
                &:not(:last-child) {
                    margin-bottom: 18px;
                }
                .item-header {
                    padding-left: 20px;
                    background-color: #F8FAFC;
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 2.8;
                    .order-date {
                        margin-right: 5%;
                    }
                }
                .order-content {
                    font-size: 14px;
                    color: #333;
                    line-height: 7;

                    .real-amount {
                        @extend .text-primary;
                    }

                    .order-actions{
                        .review {
                            line-height: 2.5;
                        }
                    }
                }
            }
        }
    }
</style>