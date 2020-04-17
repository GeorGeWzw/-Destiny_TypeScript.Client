<template>
  <Page
    :total="page.Total"
    :current="page.PageIndex"
    :page-size-opts="page.PasizeArr"
    :page-size="page.PageRow"
    show-sizer
  />
</template>
<script lang="ts" src="./page.ts">