<template>
  <p>Count: {{ counter.count }}</p>
  <button @click="increment">+</button>
</template>

<script setup>
import { Counter } from "@/classes/Counter";
import { ref } from "vue";

const counter = ref(new Counter());

const increment = () => {
  counter.value.increment();
};
</script>

<style></style>
