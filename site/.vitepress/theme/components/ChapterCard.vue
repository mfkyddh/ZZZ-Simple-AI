<template>
  <a :href="link" class="chapter-card">
    <div class="chapter-number">{{ number }}</div>
    <h3 class="chapter-title">{{ title }}</h3>
    <p class="chapter-desc">{{ description }}</p>
    <div class="chapter-tags" v-if="tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps<{
  number: string
  title: string
  description: string
  link: string
  tags?: string[]
}>()
</script>

<style scoped>
.chapter-card {
  display: block;
  background: var(--vp-c-bg-soft);
  border-radius: var(--radius-lg, 16px);
  padding: 24px;
  margin-bottom: 16px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid transparent;
}

.chapter-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border-color: var(--vp-c-brand-1);
}

.chapter-number {
  display: inline-block;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
}

.chapter-title {
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.chapter-desc {
  margin: 0;
  font-size: 15px;
  color: var(--vp-c-text-3);
  line-height: 1.6;
}

.chapter-tags {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  display: inline-block;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-3);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}
</style>
