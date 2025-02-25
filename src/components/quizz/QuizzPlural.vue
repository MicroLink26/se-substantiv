<script setup>
import { useQuizzStore } from '@/stores/quizz'

const store = useQuizzStore()
</script>
<template>
  <div class="quizz">
    <h1>Quizz</h1>
    <p>Choose the correct answer</p>
    <div class="quizz__container">
      <div class="quizz__question">
        <p>Singular: {{ store.quizzList[store.index].question }}</p>
      </div>
      <div class="quizz__answer">
        Plural:
        <input type="text" v-model="store.quizzList[store.index].answer" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
