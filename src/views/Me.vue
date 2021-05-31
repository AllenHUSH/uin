<template>
  <PageWithTitle title="我">
    <ion-list>
      <ion-list-header>
        个人信息
      </ion-list-header>
      <ion-item>
        More...
      </ion-item>
      <ion-list-header>
        通用设置
      </ion-list-header>
      <ion-item>
        <ion-icon color="primary" slot="start" :icon="cogOutline" />
        <ion-label>多语言</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon color="warning" slot="start" :icon="contrastSharp" />
        <ion-label>主题</ion-label>
      </ion-item>
    </ion-list>
  </PageWithTitle>
</template>

<script lang="ts">
import { cogOutline,contrastSharp} from 'ionicons/icons';
import PageWithTitle from '@/components/PageWithTitle.vue';

export default {
  name: 'Me',
  components: {
    PageWithTitle,
  },
  setup() {
    return { cogOutline,contrastSharp };
  },
};
</script>
