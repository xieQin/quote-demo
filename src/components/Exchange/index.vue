<template>
  <div>
    <ul class="nav nav-tabs fixed">
      <li role="presentation" v-link="{ path : '/home/index', activeClass: 'active'}"><a>交易所列表</a></li>
      <li role="presentation" v-link="{ path : '/home/tid', activeClass: 'active'}"><a>行情列表</a></li>
      <li role="presentation" v-link="{ path : '/home/test', activeClass: 'active'}"><a>测试</a></li>
      <li role="presentation" v-link="{ path : '/home/quote', activeClass: 'active'}"><a>行情</a></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>
<style>
/*.nav.nav-tabs {
  position: fixed;
}*/
</style>