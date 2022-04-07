<template>
  <div class="inputText">
    <label class="text">{{ props.text }}: </label>
    <input type="text" v-model="inputData" :placeholder="props.placeholder" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputData = ref(null);

const props = defineProps(["text", "placeholder"]);

defineExpose({ inputData });
</script>

<style scoped>
.inputText {
  display: flex;
  flex-direction: column;
}

.text {
  font-weight: bold;
}

input[type="text"] {
  background-color: #2c2e33;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  margin: 8px 0px;
}

input[type="text"]:focus {
  outline: 2px solid #228be6;
}
</style>
