<template>
    <!-- 生成报告 -->
    <div class='report-page report-bg'>
        <div class="report-sub">
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                
            }
        }
    }
</script>
<style lang='scss'>
    .report-page {
        .report-sub {
            @extend .main-content;
            padding-top: 50px;
        }
    }
</style>