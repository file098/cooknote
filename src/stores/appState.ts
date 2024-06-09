import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appState', () => {
  const title = ref("Cooknote");
  const detailsOpened = ref(false);
  const showRecipe = ref(true);

  function setTitle( newTitle: string){
    title.value = newTitle;
  }

  function setDetails(newVal: boolean){
    detailsOpened.value = newVal;
  }

  function $reset() {
    title.value = "Cooknote";
    detailsOpened.value = false;
  }

  
  return { title, setTitle, detailsOpened, setDetails, $reset, showRecipe }
})