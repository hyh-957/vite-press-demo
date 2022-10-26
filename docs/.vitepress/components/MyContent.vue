<template lang="">
  <section class="content">
    <div class="article"  v-for="(item, index) in docs" :key="index">
      <a :href=item.location>
        <div class="header">
          <div class="title">{{item.title}}</div>
          <time>{{item.create_time}}</time>
        </div>
        <div class="line"></div>
        <div class="abstract">{{item.description}}</div>
    </a>
    </div>
  </section>
</template>

<style scoped>
.vp-doc a {
  color: var(--vp-c-text-1);
}

.vp-doc a:hover {
  color: var(--vp-c-text-1);
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
  border-top: 0.2rem solid var(--vp-c-text-1);
  display: block;
  width: 2rem;
}

.article:hover .line {
  width: 5rem;
}

.abstract {
  margin: 24px 0;
  line-height: 1.6;
  overflow : hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	text-overflow: ellipsis;
}
</style>

<script setup>
import { ref, onMounted } from "vue";
let docs = ref([])

onMounted(() => {
  fetch('/config.json').then(res => res.json()).then(res => {
    docs.value = res.docs
  })
})


</script>