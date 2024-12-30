import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const genericStore = defineStore('theme', () => {
  const localStorageDarkTheme = useLocalStorage('darkTheme', 'true')
  const darkTheme = ref(true)

  if (localStorageDarkTheme.value) {
    darkTheme.value = JSON.parse(localStorageDarkTheme.value)
  }

  function toggleTheme() {
    darkTheme.value = !darkTheme.value
    localStorageDarkTheme.value = JSON.stringify(darkTheme.value)
  }


  return {
    darkTheme,
    toggleTheme
  }
})
