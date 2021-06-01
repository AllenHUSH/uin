<template>
  <PageWithTitle title="我">
    <ion-list>
      <ion-list-header>
        账户
      </ion-list-header>
      <ion-item button detail>
        <ion-icon color="primary" slot="start" :icon="person" />
        <ion-label>个人信息</ion-label>
      </ion-item>
      <ion-item button detail>
        <ion-icon color="danger" slot="start" :icon="shield" />
        <ion-label>重置密码</ion-label>
      </ion-item>
      <ion-list-header>
        通用设置
      </ion-list-header>
      <ion-item button detail>
        <ion-icon color="primary" slot="start" :icon="language" />
        <ion-label>多语言</ion-label>
      </ion-item>
      <ion-item button detail>
        <ion-icon color="warning" slot="start" :icon="contrastSharp" />
        <ion-label>主题</ion-label>
      </ion-item>

      <ion-list-header>
        安全设置
      </ion-list-header>
      <ion-item button detail>
        <ion-icon color="primary" slot="start" :icon="happy" />
        <ion-label>面容 ID 解锁</ion-label>
      </ion-item>
      <ion-item button detail>
        <ion-icon color="success" slot="start" :icon="fingerPrint" />
        <ion-label>触控 ID 解锁</ion-label>
      </ion-item>
      <ion-item button detail>
        <ion-icon color="danger" slot="start" :icon="shieldHalf" />
        <ion-label>PIN 码解锁</ion-label>
      </ion-item>

      <ion-list-header>
        其他
      </ion-list-header>
      <ion-item button detail>
        <ion-icon color="primary" slot="start" :icon="bulb" />
        <ion-label>使用帮助</ion-label>
      </ion-item>
      <ion-item button detail>
        <ion-icon color="warning" slot="start" :icon="notifications" />
        <ion-label>通知</ion-label>
      </ion-item>
      <ion-item button detail>
        <ion-icon color="success" slot="start" :icon="planet" />
        <ion-label>关于</ion-label>
      </ion-item>
    </ion-list>
    <ion-button color="danger" expand="block" class="my-10"
      >退出登录</ion-button
    >
  </PageWithTitle>
</template>

<script lang="ts">
import {
  happy,
  language,
  notifications,
  contrastSharp,
  bulb,
  fingerPrint,
  shieldHalf,
  shield,
  person,
  planet,
  chevronForwardOutline,
} from 'ionicons/icons';
import PageWithTitle from '@/components/PageWithTitle.vue';

export default {
  name: 'Me',
  components: {
    PageWithTitle,
  },
  setup() {
    return {
      happy,
      language,
      notifications,
      contrastSharp,
      bulb,
      fingerPrint,
      shieldHalf,
      shield,
      person,
      planet,
      chevronForwardOutline,
    };
  },
};
</script>
