<template>
<div style="height:40px;line-height:40px;">
  <Page
    show-total
    :total="total"
    :current="Paginationhan.Pagination.PageIndex"
    :page-size-opts="Paginationhan.Pagination.PasizeArr"
    :page-size="Paginationhan.Pagination.PageRow"
    @on-change="ClickCurrentPage"
    @on-page-size-change="UpdatePageRow"
    show-sizer
  />
  </div>
</template>
<script lang="ts" src="./page.ts">