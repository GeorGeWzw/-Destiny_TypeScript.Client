
<template>
  <Card :bordered="true">
    <div style="margin-bottom:10px;" class="table-page-search-wrapper">
      <Form ref="formCustom" :label-width="80" inline>
        <FormItem label="登录名:">
          <Input autocomplete="off" />
        </FormItem>
        <FormItem label="昵称:">
          <Input autocomplete="off" />
        </FormItem>
        <FormItem>
          <Button type="primary" shape="circle" icon="ios-search">Search</Button>
        </FormItem>
      </Form>
    </div>
    <!-- <div class="content">
      <i-form :label-width="80" inline>
        <Form-item label="用户名">
          <i-input placeholder="用户名"></i-input>
        </Form-item>
      </i-form>
    </div>-->
    <div class="table-operator">
      <i-button type="primary" @click="addHandle">新增</i-button>
      <i-button type="primary" @click="updateHandle">修改</i-button>
      <i-button type="primary" @click="deleteHandle" :loading="delteLoading">删除</i-button>
    </div>
    <i-table border :columns="columns" :data="TableData" @on-selection-change="selectionChange"></i-table>
    <PageCom v-on:pageref="getUser"></PageCom>
    <Modal
      width="40%"
      v-model="isShow"
      :mask-closable="false"
      title="编辑用户"
      :closable="false"
      :footer-hide="true"
      :loading="confirmLoading"
    >
      <Form ref="formItem" :model="formItem" :label-width="80" :rules="ruleValidate">
        <FormItem label="登录名:" prop="UserName">
          <Input v-model="formItem.UserName" />
        </FormItem>
        <FormItem label="用户昵称:" prop="NickName">
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

        <FormItem label="密码:" v-if="formItem.IsAdd" prop="PasswordHash">
          <Input type="password" v-model="formItem.PasswordHash" />
        </FormItem>
        <FormItem label="选择角色:">
          <i-select multiple filterable v-model="formItem.RoleIds">
            <i-option v-for="item in roleList" :value="item.Value" :key="item.Value">{{ item.Text }}</i-option>
          </i-select>
        </FormItem>
        <FormItem label="描述:">
          <Input type="textarea" :rows="4" v-model="formItem.Description" />
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit">提交</Button>
          <Button type="primary" @click="cancel" style="margin-left: 8px">取消</Button>
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
  -moz-box-shadow: 5px 5px 16px #ccc;

  -webkit-box-shadow: 5px 5px 16px #ccc;

  box-shadow: 5px 5px 16px #ccc;
  // background-color: #f8f8f9;
  margin-bottom: 24px;
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

