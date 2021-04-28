<template>
<!-- 首页 -->
    <div class='page-index'>
        <ComBanner />
        <advantage />
        <comSwpier />
        <comCase />
        <comSalary />
        <comNewCell />
        <comAd />
    </div>
</template>

<script>
import ComBanner from './coms/banner'
import advantage from './coms/advantage'
import comSwpier from './coms/swiper'
import comCase from './coms/case'
import comSalary from './coms/salary'
import comNewCell from './coms/new-cell'
import comAd from './coms/ad'

import { home } from '@/assets/js/api'

export default {
  components: {
    ComBanner,
    advantage,
    comSwpier,
    comCase,
    comSalary,
    comNewCell,
    comAd
  },
  data: function () {
    return {}
  },
  mounted: function(){
    this.getHome()
  },
  methods: {
    getHome: function(){
      home().then(res=>{
        console.log('>>>', res)
      })
    }
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
