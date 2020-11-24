<template>
  <label>ID: </label>
  <select id="select" :value="selected" @input="setId">
    <option v-for="(item, index) in 2" :key="index">{{ item }}</option>
  </select>
  <ul id="conter-list">
    <li v-for="count in counters" :key="count.id">
      ID: {{ count.id }}, VALUE: {{ count.value }}
    </li>
  </ul>
  <button @click="increment">カウントアップ</button>
  <button @click="decrement">カウントダウン</button>
  <br />
  <button @click="reset">リセット</button>
</template>
<script lang="ts">
import { defineComponent, PropType, UnwrapRef } from 'vue';

import { Counter } from '@/model';
export default defineComponent({
  name: 'MainComponent',
  props: {
    counters: {
      type: Array as PropType<UnwrapRef<Counter[]>>,
      required: true
    },
    selected: {
      type: Number,
      required: true
    }
  },
  emits: ['increment', 'decrement', 'set', 'reset'],
  setup(props, { emit }) {
    const increment = () => {
      emit('increment');
    };

    const decrement = () => {
      emit('decrement');
    };

    const setId = (event: Event) => {
      if (event.target instanceof HTMLSelectElement) {
        emit('set', event.target.value);
      }
    };

    const reset = () => {
      emit('reset');
    };

    return { props, increment, decrement, setId, reset };
  }
});
</script>
