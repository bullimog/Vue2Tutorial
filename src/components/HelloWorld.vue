<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const messageClass = ref("foo")
const isGreen = ref(false)

function increment(){
  count.value++
  messageClass.value="foo"
  isGreen.value = count.value%2 == 0

if(isGreen.value){
    messageClass.value="bar"
  }
}

</script>

<template>
HelloWorld.vue starts<br/>
  <h1>{{ msg }}</h1>
  <h2 :class="messageClass">Another message</h2>
  <h3 v-if="isGreen">It's Green!</h3>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
    <button type="button" v-on:click="increment">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  HelloWorld.vue ends<br/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.foo {
  color: #00f;
}

.bar {
  color: #0f0;
}
</style>
