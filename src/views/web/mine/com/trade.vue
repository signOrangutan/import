<template>
    <div class='com-trade'>
        <tabs 
            :current="current" 
            :tabData="tabData"
            @handleClick="handleClick"
            ></tabs>
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
                current: 0
            }
        },
        methods: {
            handleClick: function(index){
                this.current = index
            }
        }
    }
</script>
<style lang='scss'>
</style>