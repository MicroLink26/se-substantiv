<script setup>
import { useRouter } from 'vue-router'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'

import { useQuizzStore } from '@/stores/quizz'
const router = useRouter()
const store = useQuizzStore()

const startTest = (quizzType, number) => {
  store.setQuizz(number, quizzType)
  //console.log(store.quizzList)
  router.push({ name: 'quizz' })
}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Words</template>

    <a href="javascript:alert('soon!')">export data</a>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Singular/plural quizz</template>

    <a target="_blank" rel="noopener" @click="startTest('plural', 10)">Take the plural test</a>.
    <a target="_blank" rel="noopener" @click="startTest('singular', 10)">Take the singular test</a>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>En/ett test</template>
    <a target="_blank" rel="noopener" @click="startTest('article', 10)">Take the test</a>.
  </WelcomeItem>
</template>
