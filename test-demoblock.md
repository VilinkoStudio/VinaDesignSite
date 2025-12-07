# 测试 VitePress Theme Demoblock

## 基本用法

:::demo 这是一个测试组件
```vue
<template>
  <div class="test-component">
    <h3>Hello, VitePress Theme Demoblock!</h3>
    <button @click="count++">点击计数: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style scoped>
.test-component {
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #66b1ff;
}
</style>
```
:::