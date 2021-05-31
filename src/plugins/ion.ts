/**
 * 全局注册 ionic 中的全部组件
 */
import * as components from '@ionic/vue';
import type { App,Component } from 'vue'

type compKey = keyof typeof components;

export default {
  install: (app: App): void => {
    for (const key in components) {
      if (Object.prototype.hasOwnProperty.call(components, key)
        && key.startsWith('Ion')) {
        const component = components[key as compKey];
        app.component(key, component as Component);
      }
    }
  },
};
