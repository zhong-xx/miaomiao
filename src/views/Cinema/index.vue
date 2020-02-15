<template>
  <div class="main">
      <Header title="喵喵影院"/>
      <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
  name: 'Movie',
  components: {
    Header,
    TabBar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>