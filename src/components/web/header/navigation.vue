<template>
    <div class='com-nav'>
        <div class="nav-item"
            v-for="(nav,index) of navs" :key="index"
            :class="{active: nav.select}"
            @click="handleClick(nav)"
        >
            {{nav.name}}
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  data: function () {
    return {
      navs: [
        { name: '首页', select: false, path: "/web"},
        { name: '报告生成', select: false, path: "/web/report"},
        { name: '定制服务', select: false, path: "/web/service" },
        { name: '投资人对接', select: false, path: "/web/investor" },
        { name: '案例展示', select: false, path: "/web/case" },
        { name: '评论反馈', select: false, path: "/web/comment" },
        { name: '行业资讯', select: false, path: "/web/news" },
        { name: '关于我们', select: false, path: "/web/about"}
      ]
    }
  },
  methods: {
    handleClick: function (nav) {
      this.navs.map(item => {
        if (item.name === nav.name) {
          item.select = !item.select
        } else {
          item.select = false
        }
      })

      this.$router.push(nav.path)
    }
  }
}
</script>
<style lang='scss'>
    .com-nav {
        max-width: 1200px;
        display: flex;
        // align-items: center;
        font-size: 18px;
        line-height: 3.9;
        .nav-item {
            margin-right: $nav-gap;
        }
        .active {
            color: $nav-active-color;
        }
    }
</style>
