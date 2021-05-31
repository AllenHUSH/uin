<template>
  <ion-page>
    <ion-content color="primary" :fullscreen="true">
      <ion-row class="main-row">
        <ion-col size="12" size-md="6">
           <img src="@/assets/icon.png" class="max-w-50 mx-auto"/>
           </ion-col>
        <ion-col size="12" size-md="6">
          <ion-card class="max-w-screen-sm sm:mx-auto">
            <ion-card-header>
              <ion-card-subtitle>安全的互联网账号</ion-card-subtitle>
              <ion-card-title color="primary">UIN 有音</ion-card-title>
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
              <ion-row>
                <ion-col size="12">
                  <ion-button
                    expand="block"
                    :disabled="isLoginDisabled"
                    @click="onLogin()"
                    >登录</ion-button
                  >
                </ion-col>
                <ion-col size="6">
                  <ion-router-link expand="block" fill="outline"
                    >注册</ion-router-link
                  >
                </ion-col>
                <ion-col size="6" class="text-right">
                  <ion-router-link>忘记账号或密码 </ion-router-link>
                </ion-col>
              </ion-row>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script>
export default {
  computed: {
    isLoginDisabled() {
      if (this.userInput.account && this.userInput.pwd) {
        return false;
      } else {
        return true;
      }
    },
  },
  data() {
    return {
      userInput: {
        account: '',
        pwd: '',
      },
    };
  },
  methods: {
    async onLogin() {
      await this.$dao.login(this.userInput);
    },
  },
};
</script>

<style scoped>
.main-row{
  align-items: center;
  min-height: 70%;
}
</style>