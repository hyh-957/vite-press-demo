<template lang="">
  <section class="content">
    <div class="article"  v-for="(item, index) in 10" :key="index">
      <a href="/posts/blog-email.html">
        <div class="header">
          <div class="title">Node + 讯飞语音 定时播放天气预报音频</div>
          <time>2021-08-27</time>
        </div>
        <div class="line"></div>
        <div class="abstract">最近看了几篇文章，总觉得自己没发挥树莓派的作用，于是就琢磨着，哎，灵光一闪，整一个早晨叫醒服务，于是便有了本篇水文。</div>
    </a>
    </div>
 
   
  </section>
</template>

<style scoprd>
.vp-doc a {
  color: black;
}

.vp-doc a:hover {
  color: black;
}

.article {
  border-bottom: 1px solid rgb(226 232 240);
  padding: 16px 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5rem 0px;
}

time {
  color: rgb(170, 170, 170);
}

.line {
  transition: all 0.3s ease-out 0s;
  border-top: 0.2rem solid black;
  display: block;
  width: 2rem;
}

.article:hover .line {
  width: 5rem;
}

.abstract {
  margin: 24px 0;
  line-height: 1.6;
}
</style>

<script setup>
  
fetch('/public/config.json').then(res => res.json()).then(res => console.log(res))
</script>