<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script lang="ts" setup>
const { data } = useFetch('https://test.com/api/data')
</script>
