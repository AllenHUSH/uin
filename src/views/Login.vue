<template>
  <ion-content color="primary" :fullscreen="true">
    <ion-card class="main-box">
      <ion-card-header>
        <ion-card-subtitle>安全的互联网账号</ion-card-subtitle>
        <ion-card-title color="primary">有音</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-label>账号</ion-label>
            <ion-input v-model="userInput.account"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>密码</ion-label>
            <ion-input v-model="userInput.pwd"></ion-input>
          </ion-item>
        </ion-list>
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-button expand="block">登录</ion-button>
            </ion-col>
            <ion-col size="12">
              <ion-button expand="block" fill="outline">注册</ion-button>
            </ion-col>
            <ion-col size="12">
              <ion-router-link>忘记账号或密码 </ion-router-link>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script>
export default {
  data() {
    return {
      userInput: {
        account: '',
        pwd: '',
      },
    };
  },
};
</script>
