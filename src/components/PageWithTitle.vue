<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ title }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <!-- iOS 下标题显示不完整  怀疑 UI 组件库 Bug -->
          <ion-title size="large" class="mt-1">{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  name: 'PageWithTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
