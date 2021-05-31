<template>
  <PageWithTitle title="404">
    <ion-router-link href="/home">Home</ion-router-link>
  </PageWithTitle>
</template>

<script>
import IonRouterLink from '@ionic/vue';
import PageWithTitle from '@/components/PageWithTitle.vue';
export default {
  components: { IonRouterLink, PageWithTitle },
};
</script>
