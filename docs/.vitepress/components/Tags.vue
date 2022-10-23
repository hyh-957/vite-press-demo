<template lang="">
  <div class="tags">
    <span v-for="(item, index) in listOfTag" :key="index" class="tag" @click="toggleTag(item)">
      {{ item }}
    </span>
  </div>
  <div class="header">{{selectedTag}}</div>
  <a :href="article.location" v-for="(article, index) in selectedList" :key="index" class="article">
    <div class="title">
      {{ article.title }}
    </div>
    <div class="date">{{ article.create_time }}</div>
  </a>
</template>

<style scoped>
  .tags {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .tag {
    display: inline-block;
    position: relative;
    padding: 4px 20px;
    padding-right: 10px;
    margin: 0 16px 12px 0;
    font-size: 14px;
    line-height: 25px;
    background-color:rgb(33, 150, 243,0.5);
    transition: 0.4s;
    color: #fff;
    cursor: pointer;
    border-radius: 33px 0 0 33px;
  }
   .tag::before {
    content: '';
    position: absolute;
    width: 5px;
    margin-top: 10px;
    margin-left: -15px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
  }
  .header {
    color: #3b434b;
    font-size: 2rem;
    font-weight: 600;
    margin: 1rem 0;
    text-align: center;
  }
  .year {
    padding: 15px 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-color);
  }
  .article {
    padding: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-decoration: none;
  }
  .title {
    color: #4a9ae1;
    font-size: 1.1rem;
  }
  .date {
    color: #ccc;
    font-size: 1rem;
  }
</style>

<script setup>

import { ref, onMounted } from "vue"

let listOfTag = ref([])
let docs = ref(new Map([['华为', [{
  "id": 0,
  "title": "Test",
  "create_time": "2021/10/23",
  "description": "Test",
  "keywords": ["华为", "鸿蒙", "任正非"],
  "location": "/posts/blog-email.html"
}]]]))
let selectedTag = ref('') 
let selectedList = ref([])

onMounted(() => {
  fetch('/public/config.json').then(res => res.json()).then(res => {
    let temp = []
    let temp1 = new Map()
    res.docs.forEach((e) => {
      temp = temp.concat(e.keywords)
      e.keywords.forEach((e1) => {
        const temp2 = temp1.get(e1) ?? []
        temp1.set(e1, temp2.concat(e))
      })
    })
    listOfTag.value = [...new Set(temp)]
    docs.value = temp1
  })

})

const toggleTag = (item) => {
  selectedTag.value = item;
  selectedList.value = docs.value.get(item);
};
</script>
