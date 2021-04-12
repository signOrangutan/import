<template>
<!-- 首页 -->
    <div class='page-index'>
        <ComBanner />
        <advantage />
        <comSwpier />
        <comCase />
        <comSalary />
    </div>
</template>

<script>
import ComBanner from './coms/banner'
import advantage from './coms/advantage'
import comSwpier from './coms/swiper'
import comCase from './coms/case'
import comSalary from './coms/salary'
export default {
  components: {
    ComBanner,
    advantage,
    comSwpier,
    comCase,
    comSalary
  },
  data: function () {
    return {}
  }
}
</script>
<style lang='scss'>
  .page-index {
    .cover {
      width: 100%;
      .cover-img {
        width: 100%;
      }
    }
  }
</style>
