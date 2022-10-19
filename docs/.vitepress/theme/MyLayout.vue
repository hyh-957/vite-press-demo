<template>
  <Layout>
    <template #layout-top>
      <div class="home-bg" v-if="enableHome">
      <div class="content-bg">
        <h1>
          CrazyYan
          <p>一个有温度的野生前端猿人</p>
        </h1>
      </div>
    </div>
    </template>
  
    


  </Layout>
</template>

<style scoped>
.home-bg {
  width: 100%;
  margin-top: 3rem;
  background: url("/2038260.jpg") center center / cover no-repeat;
  height: 450px;
  position: relative;
  overflow: hidden;
}
</style>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from "vue";

const { Layout } = DefaultTheme
const { frontmatter } = useData()

const enableHome = computed(() => frontmatter.value.title === '首页');
</script>

