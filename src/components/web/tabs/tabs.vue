<template>
    <!-- 标签tab -->
    <div class='com-tabs d-flex'>
        <div 
            class="tab-item"
            v-for="(item, index) in tabData" :key="index"
            :class="{'active': current==index}"
            @click="handleClick(index)"
            >{{item.name}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            tabData:{
                type: Array,
                require: true,
                default: ()=>{
                    return []
                }
            },
            current: {
                type: Number,
                require: true,
                default: 0
            }
        },
        data: function(){
            return {
            }
        },
        methods: {
            handleClick: function(index){
                this.$emit('handleClick', index)
            }
        }
    }
</script>
<style lang='scss'>
    .com-tabs {
        border-bottom: solid 1px #DADDE1;
        font-size: 16px;
        color: #333;
        font-weight: 500;
        line-height: 2.5;
        .tab-item {
            padding: 0 16px;
            margin-right: 10px;
        }
        .active {
            border-bottom: solid 4px $primary-color;
        }
   }
</style>