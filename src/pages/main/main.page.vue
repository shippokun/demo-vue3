<template>
  <main-container :selected="selected"></main-container>
</template>
<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useRoute, LocationQuery } from 'vue-router';

import { MainContainer } from './containers';

const toSelected = (query: LocationQuery) => {
  return Number(query['id'] || 1);
};

export default defineComponent({
  name: 'MainPage',
  components: {
    MainContainer
  },
  setup() {
    const route = useRoute();

    const selected = ref(toSelected(route.query));

    watch(
      () => route.query,
      query => {
        selected.value = toSelected(query);
      }
    );

    return { selected };
  }
});
</script>
