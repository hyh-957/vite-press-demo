<template lang="">
<VPTeamMembers size="medium" :members="members" />
</template>

<style scoped>
</style>

<script setup>
import { VPTeamMembers } from 'vitepress/theme'
const members = [
  {
    avatar: '/avatar.jpeg',
    name: 'Hyh957',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/hyh-957' }
    ]
  }
]
</script>
