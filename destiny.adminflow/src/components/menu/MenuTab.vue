<template>
  <div>
    <Menu @on-select="Openmenu" :active-name="$route.path" :theme="theme2">
      <MenuRecursion
        :key="item.name"
        v-for="item in MenuArr"
        :item="item"
      ></MenuRecursion>
    </Menu>
  </div>
</template>
<script lang="ts" src="./menu.ts"></script>
<style lang="less" src="./menu.less"></style>
