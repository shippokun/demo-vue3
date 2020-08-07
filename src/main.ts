import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from './graphql/client';

createApp(App)
  .use(router)
  .provide(DefaultApolloClient, apolloClient)
  .mount('#app');
