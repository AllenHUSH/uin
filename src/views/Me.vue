<template>
  <PageWithTitle title="我">
    <ion-list>
      <ion-list-header>
        个人信息
      </ion-list-header>
      <ion-item>
        <ion-label>
          <ion-icon :icon="cogOutline" />
          Pokémon Yellow
        </ion-label>
      </ion-item>
      <ion-list-header>
        通用设置
      </ion-list-header>
      <ion-item>
        <ion-label>
          <ion-icon :icon="cogOutline" />
          多语言
        </ion-label>
      </ion-item>
      
    </ion-list>
  </PageWithTitle>
</template>

<script lang="ts">
import { IonList, IonListHeader, IonItem, IonLabel, IonIcon } from '@ionic/vue';
import { cogOutline } from 'ionicons/icons';
import PageWithTitle from '@/components/PageWithTitle.vue';

export default {
  name: 'Me',
  components: {
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonIcon,
    PageWithTitle,
  },
  setup() {
    return { cogOutline };
  },
};
</script>
