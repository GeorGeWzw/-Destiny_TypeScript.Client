<template>
  <Page
    :total="total"
    :current="Paginationhan.Pagination.PageIndex"
    :page-size-opts="Paginationhan.Pagination.PasizeArr"
    :page-size="Paginationhan.Pagination.PageRow"
    @on-change="ClickCurrentPage"
    @on-page-size-change="UpdatePageRow"
    show-sizer
  />
</template>
<script lang="ts" src="./page.ts">