
<template>
  <Card :bordered="false">
    <div class="content">
      <Form ref="formInline" inline>
        <FormItem prop="user">
          <Input type="text" placeholder="Username" />
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </FormItem>
      </Form>
    </div>
    <i-table :columns="columns" :data="TableData"></i-table>
    <Page :total="Total"></Page>
  </Card>
  <!-- <div>
    <i-table :columns="columns" :data="TableData"></i-table>
    <div>
      <Page :total="Total"></Page>
    </div>
  </div>-->
</template>
<script lang="ts" src="./user.ts">
</script>
<style lang="less" >
.table-page-search-wrapper {
  // .ivu-form-inline {
  //   .ivu-form-item {
  //     display: flex;
  //     margin-bottom: 24px;
  //     margin-right: 0;

  //     .ivu-input-wrapper {
  //       flex: 1 1;
  //       display: inline-block;
  //       vertical-align: middle;
  //     }

  //     > .ivu-form-item-label {
  //       line-height: 32px;
  //       padding-right: 8px;
  //       width: auto;
  //     }
  //     .ivu-form-item-content {
  //       height: 32px;
  //       line-height: 32px;
  //     }
  //   }
  // }
  .table-page-search-submitButtons {
    display: block;
    margin-bottom: 24px;
    white-space: nowrap;
  }
}

.table {
  height: 100%;
}
.content {
  .table-operator {
    margin-bottom: 18px;

    button {
      margin-right: 8px;
    }
  }
}
</style>>

