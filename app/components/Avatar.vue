<script setup lang="ts">
interface Props {
  initial: string
  bgColor: 'pink' | 'cyan'
}

defineProps<Props>()
</script>

<template>
  <div :class="['avatar', `avatar-${bgColor}`]">
    {{ initial }}
  </div>
</template>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #fff;
  font-size: 1.2rem;
}

.avatar-pink {
  background-color: var(--primary-accent-color);
}

.avatar-cyan {
  background-color: var(--secondary-accent-color);
}
</style>
