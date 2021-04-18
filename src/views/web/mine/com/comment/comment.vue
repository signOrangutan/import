<template>
    <div class='com-comment'>
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
                    {name: '评论反馈'}

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