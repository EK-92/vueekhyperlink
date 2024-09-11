import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export const genericStore = defineStore('theme', () => {
  const darkTheme = ref(true)
  const isMenuOpen = ref(false)
  const triangularLayout = ref(false)
  const location = useRoute()
  const onHistoryPage = computed(() => location.path.slice(1) === 'history')
  const showTrianglesButton = computed(() => onHistoryPage.value && triangularLayout.value === false)
  const showRectanglesButton = computed(() => onHistoryPage.value && triangularLayout.value === true)

  function toggleTheme() {
    isMenuOpen.value = !isMenuOpen.value
    darkTheme.value = !darkTheme.value
  }
  function toggleLayout() {
    isMenuOpen.value = !isMenuOpen.value
    triangularLayout.value = !triangularLayout.value
  }
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  return {
    darkTheme,
    isMenuOpen,
    onHistoryPage,
    showRectanglesButton,
    showTrianglesButton,
    triangularLayout,
    toggleLayout,
    toggleTheme,
    toggleMenu
  }
})
