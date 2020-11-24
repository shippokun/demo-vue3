<template>
  <main-component
    :counters="counters"
    :selected="selected"
    @increment="increment"
    @decrement="decrement"
    @set="changeId"
    @reset="reset"
  ></main-component>
</template>
<script lang="ts">
import { defineComponent, UnwrapRef, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Counter } from '@/model';
import { MainComponent } from '../components';

export default defineComponent({
  name: 'MainContainer',
  components: {
    MainComponent
  },
  props: {
    selected: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();

    // 雑にサンプルデータを追加
    const counters: UnwrapRef<Counter[]> = reactive([
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      }
    ]);

    const increment = () => {
      counters[props.selected - 1].value++;
    };

    const decrement = () => {
      counters[props.selected - 1].value--;
    };

    const changeId = (id: string) => {
      const query = {
        ...route.query,
        id
      };
      router.push({ path: route.path, query });
    };

    const reset = () => {
      location.replace('/');
    };

    return {
      props,
      counters,
      increment,
      decrement,
      changeId,
      reset
    };
  }
});
</script>
