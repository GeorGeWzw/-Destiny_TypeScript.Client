<template>
  <div>
    <template v-if="item.children">
      <template>
        <Submenu :name="item.name" :key="item.name">
          <template slot="title">
            <Icon class="menu_icon" :type="item.meta.icon" />
            {{item.meta.title}}
          </template>
          <template v-for="chil in item.children">
            <MenuRecursion
              v-if="chil.children && chil.children.length>0"
              :item="chil"
              :name="chil.name"
              :key="chil.name"
            />
            <MenuItem  v-else :key="chil.name" :name="chil.name">
              {{chil.meta.title}}
            </MenuItem>
          </template>
        </Submenu>
      </template>
    </template>
    <template v-else>
      <MenuItem  :name="item.name">
        <template>
          <Icon class="menu_icon" :type="item.meta.icon" />
        </template>
        {{item.meta.title}}
      </MenuItem>
    </template>
  </div>
</template>
<script lang="ts" src="./MenuRecursion.ts"></script>