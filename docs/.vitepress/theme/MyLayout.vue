<template>
  <Layout>
    <template #layout-top>
      <div class="home-bg" v-if="enableHome">
      <div class="content-bg">
        <h1>
          Hyh957
          <p>比千禧年大一岁的人</p>
        </h1>
      </div>
    </div>
    </template>
  </Layout>
</template>



<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from "vue";

const { Layout } = DefaultTheme
const { frontmatter } = useData()

const enableHome = computed(() => frontmatter.value.title === '首页');
</script>

<style scoped>
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}
.home-bg {
  width: 100%;
  margin-top: 3rem;
  background: url("/bg.jpeg") center center / cover no-repeat;
  height: 450px;
  position: relative;
  overflow: hidden;
}

.content-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.content-bg> h1{
  color: rgb(255 255 255);
  font-size: 2.2em;
  font-weight: bold;
  filter: drop-shadow(2px 4px 6px black);
}

.content-bg >h1 >p{
  font-size: 18px;
  font-weight: normal;
  margin-top: 16px;
  border-right: 0.1em solid;
  width: 170px;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: 1px;
  animation: typing 5s steps(9, end), blink-caret 0.5s step-end infinite alternate;
}

</style>
