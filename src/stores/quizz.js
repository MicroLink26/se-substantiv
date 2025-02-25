import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useDictionaryStore } from '@/stores/dictionary'
// import { createPinia } from 'pinia'
// import { createApp } from 'vue'
// import App from '@/App.vue'
// const pinia = createPinia()
// const app = createApp(App)
//app.use(pinia)

export const useQuizzStore = defineStore('Quizz', () => {
  const dictionnaryStore = useDictionaryStore()
  // quizz {
  // id:12345
  // type:"singular/plural/ett-en"
  // question:"huset" /"ett hus"/"hus"
  // answer:"ett hus" /"huset"/"ett"
  // correct: true/false
  //correction:"ett hus" /"huset"/"ett"
  // }
  const count = ref(0)
  const quizzList = ref([])
  const isLoading = ref(false)
  const quizzType = ref('')
  const index = ref(-1)
  const quizzScore = ref(0)
  // const currentValue = computed(() => {
  //   return index.value < 0 ? null : quizzList.value[index.value]
  // })

  function goTo(newIndex) {
    index.value = newIndex
  }

  function correctQuizz() {
    console.log('correctQuiz')
    /// set correct to tru or flse
    quizzList.value.forEach((element) => {
      element.answer.toUpperCase() === element.correction.toUpperCase()
        ? (element.correct = true)
        : (element.correct = false)
    })

    quizzScore.value = quizzList.value.filter((element) => element.correct === true).length
  }
  function setQuizz(newCount, type) {
    quizzList.value = []

    //get the the dictionary
    //get the type of quizz
    //get the number of quizz
    //get the words using store
    //set the quizzList
    //set the isLoading
    isLoading.value = true
    quizzType.value = type
    count.value = newCount
    const arrayCopy = [...dictionnaryStore.words]
    for (let i = arrayCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]] // Swap elements
    }
    const quizzValues = [...arrayCopy.slice(0, newCount)]

    quizzValues.forEach((element) => {
      const quizz = {}
      switch (type) {
        case 'singular':
          quizz.id = element._id
          quizz.type = type
          quizz.question = element.plural
          quizz.answer = ''
          quizz.correct = false
          quizz.correction = `${element.article} ${element.singular}`
          break
        case 'plural':
          quizz.id = element._id
          quizz.type = type
          quizz.question = `${element.article} ${element.singular}`
          quizz.answer = ''
          quizz.correct = false
          quizz.correction = element.plural
          break
        case 'article':
          quizz.id = element._id
          quizz.type = type
          quizz.question = element.singular
          quizz.answer = ''
          quizz.correct = false
          quizz.correction = element.article
          break
        default:
          quizz.id = element._id
          quizz.type = type
          quizz.question = element.singular
          quizz.answer = ''
          quizz.correct = false
          quizz.correction = element.article
          break
      }

      // quizz.id = element.id
      // quizz.type = type
      // quizz.question = element.word
      // quizz.answer = element[type]
      // quizz.correct = false
      // quizz.correction = element[type]

      quizzList.value.push(quizz)
    })
    index.value = 0
    // add to quizzList.value
    isLoading.value = false
  }

  return { count, quizzList, correctQuizz, setQuizz, isLoading, goTo, quizzType, index, quizzScore }
})
