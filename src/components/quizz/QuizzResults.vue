<script setup>
import { useQuizzStore } from '@/stores/quizz'

const store = useQuizzStore()

store.correctQuizz()
</script>
<template>
  <div class="quizz">
    <h1>Quizz</h1>
    <p>Result</p>
    <div class="quizz__container">
      <p>{{ store.quizzScore }}/{{ store.count }}</p>
      <div class="quizz__question" v-for="question in store.quizzList" v-bind:key="question.id">
        <p v-if="question.correct">{{ question.question }} : {{ question.answer }} Good</p>
        <p v-else>
          {{ question.question }} : <span class="error">{{ question.answer }}</span>
          {{ question.correction }} Bad
        </p>
      </div>
    </div>
    <div><RouterLink to="/">Restart a test</RouterLink></div>
  </div>
</template>
<style scoped>
.error {
  text-decoration: line-through;
}
</style>
