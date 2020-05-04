
<template>
  <Card :bordered="true">
    <Collapse style="margin-bottom: 10px;">
      <Panel name="1">
        查询
        <Search ref="formCustom" :filters="filterInfo" :model="searchItem" slot="content">
          <div style="margin-bottom:10px;" class="table-page-search-wrapper">
            <Form :label-width="80" inline>
              <FormItem label="登录名:">
                <Input autocomplete="off" v-model="searchItem.UserName" />
              </FormItem>
              <FormItem label="昵称:">
                <Input autocomplete="off" v-model="searchItem.NickName" />
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  shape="circle"
                  icon="ios-search"
                  @click="search('formCustom')"
                >查询</Button>
                <Button
                  type="primary"
                  shape="circle"
                  style="margin-left: 8px"
                  @click="$refs.formCustom.resetFilter()"
                >重置</Button>
              </FormItem>
            </Form>
          </div>
        </Search>
      </Panel>
    </Collapse>
    <!-- <Search ref="formCustom" :filters="filterInfo" :model="searchItem">
      <div style="margin-bottom:10px;" class="table-page-search-wrapper">
        <Form :label-width="80" inline>
          <FormItem label="登录名:">
            <Input autocomplete="off" v-model="searchItem.UserName" />
          </FormItem>
          <FormItem label="昵称:">
            <Input autocomplete="off" v-model="searchItem.NickName" />
          </FormItem>
          <FormItem>
            <Button type="primary" shape="circle" icon="ios-search" @click="search('formCustom')">查询</Button>
            <Button
              type="primary"
              shape="circle"
              style="margin-left: 8px"
              @click="$refs.formCustom.resetFilter()"
            >重置</Button>
          </FormItem>
        </Form>
      </div>
    </Search>-->

    <div class="table-operator">
      <i-button type="primary" @click="addHandle">新增</i-button>
      <i-button type="primary" @click="updateHandle">修改</i-button>
      <i-button type="primary" @click="deleteHandle" :loading="delteLoading">删除</i-button>
    </div>

    <i-table :columns="columns" :data="TableData" @on-selection-change="selectionChange"></i-table>
    <PageCom v-on:pageref="getUser" :total="total"></PageCom>
    <UserEdit ref="UserEditInfo"></UserEdit>
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
.vertical-center-modal {
  display: flex;
  align-items: center;
  justify-content: center;

  .ivu-modal {
    top: 0;
  }
}
.table-page-search-wrapper {
  // -moz-box-shadow: 5px 5px 16px #ccc;

  // -webkit-box-shadow: 5px 5px 16px #ccc;

  // box-shadow: 5px 5px 16px #ccc;
  // background-color: #f8f8f9;
  // margin-bottom: 24px;
  .ivu-form-inline {
    .ivu-form-item {
      margin: 10px;
    }
  }
  .ivu-form .ivu-form-item-label {
    color: rgba(0, 0, 0, 0.85);
  }
  .table-page-search-submitButtons {
    display: block;
    margin-bottom: 24px;
    white-space: nowrap;
  }
}

.table {
  height: 100%;
  max-height: 500;
}
.table-operator {
  margin-bottom: 18px;

  button {
    margin-right: 8px;
  }
}
</style>>

