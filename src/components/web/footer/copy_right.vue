<template>
    <div class='com-copy-right'>
        <div class="content">
            <span class="icon"></span>
            <span class="info">{{copyRight}}</span>
        </div>
        <div class="network-allow">
            <span class="icon-cnnic"></span>
            <span class="icon-auth"></span>
        </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      copyRight: ' Copyright 2019-2020 报告易版权所有   川ICP备19002436号-5'
    }
  }
}
</script>
<style lang='scss'>
    .com-copy-right {
        widows: 100%;
        display: flex;
        justify-content: space-between;

        .content {
            .icon {
                display: inline-block;
                width: 17px;
                height: 17px;
                background: url('../../../assets/img/foot-icp.png') center/cover no-repeat;
            }
            .info{
                font-size: 14px;
                line-height: 1.5;
                vertical-align: middle;
            }
        }
        .network-allow {
            .icon-cnnic, .icon-auth {
                display: inline-block;
                height: 27px;
            }
            .icon-cnnic {
                width: 77px;
                background: url('../../../assets/img/cnnic.png') center/cover no-repeat;
                margin-right: 18px;
            }
            .icon-auth {
                width: 73px;
                background: url('../../../assets/img/label_sm_90030.png') center/cover no-repeat;
            }
        }
    }
</style>
