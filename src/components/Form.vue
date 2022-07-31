<script setup lang="ts">
import { ref, onMounted } from 'vue'

//defineProps<{ msg: string }>()

const text = ref("")
const count = ref(0)
const theClass = ref("foo")
const p = ref()

// const filteredTodos = computed(() => {
//   return hideCompleted.value
//     ? todos.value.filter((t) => !t.done)
//     : todos.value
// })

onMounted(() => {
 //once doc has loaded, we can set some text...
 p.value.textContent = 'mounted!'
})

async function increment() {
  count.value ++
  theClass.value = "foo"
  await sleep(2000);
  count.value ++;
  theClass.value = "bar"
}
  
function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}  


</script>

<template>
Form.vue starts<br/>
  <h2 :class="theClass">Type into a Form</h2>

<input v-model="text" placeholder="Type here">
  <p ref="p">{{ text }}</p>

    <button :class="theClass" type="button" @click="increment">Another button {{ count }}</button>
  Form.vue ends<br/><br/>
</template>

<style scoped>

.foo {
  color: #00f;
}
.bar {
  color: #0f0;
}
</style>
