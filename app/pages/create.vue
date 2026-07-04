<script setup lang="ts">
import { ref } from 'vue'
import { X } from 'lucide-vue-next'

const foodOne = ref('')
const foodTwo = ref('')
const description = ref('')
const tagInput = ref('')
const tags = ref<string[]>([])

const handleInput = (event: Event) => {
  if (tagInput.value.includes(',')) {
    const parts = tagInput.value.split(',')
    const lastPart = parts.pop()
    for (const part of parts) {
      const tag = part.trim()
      if (tag && tags.value.length < 5 && !tags.value.includes(tag)) {
        tags.value.push(tag)
      }
    }
    tagInput.value = lastPart || ''
  }
}

const removeTag = (index: number) => {
  tags.value.splice(index, 1)
}

const handleSubmit = () => {
  if (!foodOne.value || !foodTwo.value || !description.value) {
    alert('Please fill out all required fields.')
    return
  }
  
  const comboData = {
    foodOne: foodOne.value,
    foodTwo: foodTwo.value,
    description: description.value,
    tags: tags.value,
  };

  console.log('New Combo Data:', comboData)

  // Clear form
  foodOne.value = ''
  foodTwo.value = ''
  description.value = ''
  tags.value = []
  tagInput.value = ''
};
</script>

<template>
  <div class="create-page">
    <h1 class="page-title">Create a New Combo</h1>
    <form @submit.prevent="handleSubmit" class="create-form">
      <div class="form-group">
        <label for="foodOne">Food One</label>
        <input
          type="text"
          id="foodOne"
          v-model="foodOne"
          required
        />
      </div>
      <div class="form-group">
        <label for="foodTwo">Food Two</label>
        <input
          type="text"
          id="foodTwo"
          v-model="foodTwo"
          required
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="description"
          rows="4"
          required
        ></textarea>
      </div>
      <div class="form-group">
        <label for="tags">Tags (comma-separated, max 5)</label>
        <input
          type="text"
          id="tags"
          v-model="tagInput"
          placeholder="e.g. sweet, savory, crunchy"
          @input="handleInput"
        />
        <div class="tag-list" v-if="tags.length > 0">
          <span v-for="(tag, index) in tags" :key="tag" class="tag-pill">
            {{ tag }}
            <button type="button" @click="removeTag(index)" class="remove-tag">
              <X size="14" />
            </button>
          </span>
        </div>
      </div>
      <button type="submit" class="btn submit-btn">Create Combo</button>
    </form>
  </div>
</template>

<style scoped>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.tag-pill {
  background-color: var(--secondary-accent-color);
  color: var(--background-color);
  padding: 0.3rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.remove-tag {
  background: none;
  border: none;
  color: var(--background-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
}
</style>
