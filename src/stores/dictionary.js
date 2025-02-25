import { ref } from 'vue'
import { defineStore } from 'pinia'
import api from '../services/wordService'

export const useDictionaryStore = defineStore('Words', () => {
  const count = ref(0)
  const words = ref([])
  const isLoading = ref(true)
  async function fetchDictionary() {
    words.value = await (await api.fetchWords()).data
    count.value = words.value.length
    isLoading.value = false
  }

  return { count, words, fetchDictionary, isLoading }
})
