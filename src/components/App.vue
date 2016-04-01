<template>
  <div class="wrap">
    <div class="router">
      <router-view></router-view>
    </div>
    <nav class="app-nav">
      <a class="tab-item" v-link="{ path : '/home', activeClass: 'active'}">
        <span class="tab-label">行情</span>
      </a>
      <a class="tab-item" v-link="{ path : '/message', activeClass: 'active'}">
        <span class="tab-label">资讯</span>
      </a>
      <a class="tab-item" v-link="{ path : '/sns', activeClass: 'active'}">
        <span class="tab-label">交易圈</span>
      </a>
      <a class="tab-item" v-link="{ path : '/explorer', activeClass: 'active'}">
        <span class="tab-label">发现</span>
      </a>
      <a class="tab-item" v-link="{ path : '/me', activeClass: 'active'}">
        <span class="tab-label">我</span>
      </a>
    </nav>
  </div>
</template>

<script>
import store from '../vuex/store'

export default {
  store
}
</script>

<style lang="less">
.wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.wrap .router {
  position: absolute;
  top: 0;
  bottom: 4rem;
  left: 0;
  right: 0;
  overflow: auto;
}
.app-nav {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  height: 2.2rem;
  padding-right: .5rem;
  padding-left: .5rem;
  background-color: #666;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  bottom: 0;
  width: 100%;
  height: 4rem;
  padding: 0;
  table-layout: fixed;
  .tab-item {
    position: relative;
    display: table-cell;
    width: 1%;
    height: 4rem;
    text-align: center;
    vertical-align: middle;

    .tab-label {
      position: relative;
      top: .15rem;
      display: block;
      font-size: 1.25rem;
      color: #fff;
    }
  }
  .tab-item.active {
    background-color: #000;
    .tab-label {
      color: red;
    }
  }
}
</style>
