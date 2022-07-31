<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { User }  from '../types/User'


const message = ref("foo")
const messageClass = ref("foo")
const jsonData = ref()

async function fetchData() {
  message.value = "fetching...."
  console.log("fetching....")
  const res = await fetch(`http://localhost:8080`)
  console.log("fetch requested...")
  const theJson = await res.json()
  console.log("json="+theJson)
  //message.value = theJson.name
  jsonData.value = theJson
}

onMounted(() => {
 //once doc has loaded, we can trigger some async fns
   fetchData()
 })

//This watch isn't really needed, but demonstrates how a change in ref value can trigger code execution....
watch(jsonData, (newJsonData) => {
  console.log("watch triggered")
  message.value = newJsonData.name
})

</script>

<template>
  WebFetch.vue starts<br/>
  <h2 :class="messageClass">Another message</h2>
  <h3 :class="messageClass">{{message}}</h3>


  <div class="card">
    <button type="button" v-on:click="fetchData">name is {{ message }}</button>
  </div>

  WebFetch.vue ends<br/>

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
