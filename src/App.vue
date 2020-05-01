<template>
  <div id="app">
    <router-link :to="{name: 'inicio'}">
    <img src="@/assets/logo.png">
    </router-link>
    <router-view/>
  </div>
</template>