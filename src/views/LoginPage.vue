<script setup lang="ts">
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { useRouter } from "vue-router";
import { isLoggedIn } from "@/state";

const router = useRouter();

const login = () => {
  isLoggedIn.value = true;
  router.push({ name: "settings" });
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-button @click="login">Login</ion-button>
    </ion-content>
  </ion-page>
</template>
