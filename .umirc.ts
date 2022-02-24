import { defineConfig } from 'umi';
import router from './src/router/router'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: router,
  history: {
    type: 'hash'
  },
  fastRefresh: {},
});
