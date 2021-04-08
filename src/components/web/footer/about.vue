<template>
    <div class='com-about'>
        <div class="left">
            <span class="logo"></span>
            <p class="info">让所有创业者平等享受高品质咨询服务</p>
            <p class="info">商业计划书智能生成可用于融资立项招商合作</p>
        </div>
        <div class="main">
            <span class="concat">联系方式</span>
            <p class="email">邮箱：contact@baogaoyi.cn</p>
            <p class="phone">电话：400-000-9999（工作日周一至周五9:30-18:00）</p>
            <p class="address">地址： 成都市武侯区云锦路500号绿地汇中心B座18F</p>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  }
}
</script>
<style lang='scss'>
    .com-about {
        padding-top: 40px;
        display: flex;
        align-items: center;
        color: #444444;
        font-size: 14px;
        justify-content: space-between;
        border-top: 1px solid #E5E5E5;
        margin-bottom: 30px;
        margin-top: 20px;
        .logo {
            display: inline-block;
            width: 196px;
            height: 48px;
            background: url('../../../assets/img/logo_big.png') center/cover no-repeat;
        }
    }
</style>
