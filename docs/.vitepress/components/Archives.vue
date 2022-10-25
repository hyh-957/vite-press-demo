<template>

  <div class="years" v-for="(year, index) in listOfYear" :key="index + year">
    <div class="year">
      {{ year }}
    </div>

    <a :href="article.location" v-for="(article, index) in docs.get(year)" :key="index" class="article">
      <div class="title">
        {{ article.title }}
      </div>
      <div class="date">{{ article.create_time }}</div>
    </a>
  </div>

</template>

<style scoped>

.year {
  padding: 15px 0;
  font-size: 1.3rem;
  border-bottom: 1px solid #ccc;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.article {
  padding: 2px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  color: #2196f3;
  font-size: 1.1rem;
}

.date {
  color: #ccc;
  font-size: 1rem;
}
</style>

<script setup>
import { ref, onMounted } from "vue";

let docs = ref(new Map([[2021, [{
  "id": 0,
  "title": "Test",
  "create_time": "2021/10/23",
  "description": "Test",
  "keywords": ["华为", "鸿蒙", "任正非"],
  "location": "/posts/blog-email.html"
}]]]))
let listOfYear = ref([])

onMounted(() => {
  fetch('/config.json').then(res => res.json()).then(res => {
    // docs.value = res.docs

    let temp = []
    let temp1 = new Map()
    res.docs.forEach((e) => {
      const year = new Date(e.create_time).getFullYear()
      if (!temp.includes(year)) {
        temp.push(year)
      }

      const temp2 = temp1.get(year) ?? []
      temp1.set(year, temp2.concat(e))
    })
    listOfYear.value = temp
    docs.value =  temp1;
  })

})
</script>
