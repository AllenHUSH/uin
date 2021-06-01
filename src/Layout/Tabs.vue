<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/home">
          <ion-icon :icon="home" />
          <ion-label>首页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/me">
          <ion-icon :icon="person" />
          <ion-label>我</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { home, person } from 'ionicons/icons';

export default {
  name: 'Tabs',
  setup() {
    return {
      home,
      person,
    };
  },
};
</script>
