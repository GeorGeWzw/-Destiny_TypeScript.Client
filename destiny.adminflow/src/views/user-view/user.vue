
<template>
  <Card :bordered="false">
    <!-- <div class="content">
      <i-form :label-width="80" inline>
        <Form-item label="用户名">
          <i-input placeholder="用户名"></i-input>
        </Form-item>
      </i-form>
    </div>-->
    <div class="table-operator">
      <i-button type="primary" @click="addHandle">新增</i-button>
      <i-button type="primary" @click="deleteHandle">删除</i-button>
    </div>
    <i-table :columns="columns" :data="TableData" @on-selection-change="selectionChange"></i-table>
    <PageCom v-on:pageref="getUser"></PageCom>
    <Modal
      v-model="isShow"
      :mask-closable="false"
      title="编辑用户"
      :closable="true"
      :footer-hide="true"
      :loading="confirmLoading"
    >
      <Form :model="formItem" :label-width="80">
        <FormItem label="登录名:">
          <Input v-model="formItem.UserName" />
        </FormItem>
        <FormItem label="用户昵称:">
          <Input v-model="formItem.NickName" />
        </FormItem>
        <FormItem label="姓别:">
          <Select v-model="formItem.Sex">
            <Option v-for="sex in sexList" :value="sex.value" :key="sex.value">{{ sex.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="是否系统:">
          <i-switch v-model="formItem.IsSystem" size="large">
            <span slot="open">是</span>
            <span slot="close">否</span>
          </i-switch>
        </FormItem>
        <FormItem label="密码:" prop="passwd">
          <Input type="password" v-model="formItem.PasswordHash" />
        </FormItem>
        <FormItem label="描述:">
          <Input type="textarea" :rows="4" v-model="formItem.Description" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit">提交</Button>
        </FormItem>
        <!-- <FormItem label="Select">
            <Select v-model="formItem.select">
                <Option value="beijing">New York</Option>
                <Option value="shanghai">London</Option>
                <Option value="shenzhen">Sydney</Option>
            </Select>
        </FormItem>
        -->
      </Form>
    </Modal>
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
  max-height: 500;
}
.table-operator {
  margin-bottom: 18px;

  button {
    margin-right: 8px;
  }
}
</style>>

