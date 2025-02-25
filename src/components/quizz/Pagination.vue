<script setup>
import { useQuizzStore } from '@/stores/quizz'

const store = useQuizzStore()

const goTo = (newIndex) => {
  store.index = newIndex
}
</script>

<template>
  <div class="paginate">
    <a @click="goTo(0)">&lt;&lt;</a>
    <a @click="goTo(store.index - 1)" v-if="store.index > 0">&lt;</a>
    {{ store.index + 1 }}
    <a @click="goTo(store.index + 1)" v-if="store.index < store.count - 1">&gt;</a>
    <a @click="goTo(store.count - 1)">&gt;&gt;</a>
  </div>
  <div><RouterLink to="/result">Validate the test</RouterLink></div>
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
</style>
