<template>
    <!-- 薪人薪事 -->
    <div class='com-salary'>
        <p class="header">已经被17,321,395人应用于工作，您的同行都在用</p>
        <div class="salary-box">
            <div class="salary-item">
                <div class="header">
                    <p class="">
                        <span class=""></span>
                    </p>
                    <v-avatar color="orange" size="85">
                        <span class="white--text headline">85</span>
                    </v-avatar>
                </div>
            </div>
            <div class="salary-item"></div>
            <div class="salary-item"></div>
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
    .com-salary {
        text-align: center;
        .header {}

        .salary-box {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-auto-columns: repeat(3, 1fr);
            grid-column-gap: 15px;

            .salary-item {
                width: 390px;
                height: 261px;
                background: #FFFFFF;
                box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
                border-radius: 6px;
            }
        }
    }
</style>