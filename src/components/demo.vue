<template>
  <div>
  <el-button type="error"
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</el-button>

  <keep-alive>
    <component
      v-bind:is="currentTabComponent"
      class="tab"
    ></component>
  </keep-alive>
</div>
</template>

<script>
import tabArchive from '../components/tab-archive'
import tabPosts from '../components/tab-posts'

export default {
  components: { tabArchive, tabPosts },
  name: 'demo',
  data () {
    return {
      tabs: ['Posts', 'Archive'],
      currentTab: 'Posts'
    }
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
