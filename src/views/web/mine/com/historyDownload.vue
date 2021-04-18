<template>
    <div class='com-history-download'>
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
                    {name: '全部下载'}

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