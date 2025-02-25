<script setup>
import { useQuizzStore } from '@/stores/quizz'
import QuizzPlural from '@/components/quizz/QuizzPlural.vue'
import QuizzSingular from '@/components/quizz/QuizzSingular.vue'
import QuizzArticle from '@/components/quizz/QuizzArticle.vue'

const store = useQuizzStore()
</script>

<template>
  <div class="greetings">
    <QuizzPlural v-if="store.quizzType === 'plural'" />
    <QuizzSingular v-else-if="store.quizzType === 'singular'" />
    <QuizzArticle v-else />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
