<template>
  <Modal
    width="40%"
    v-model="isShow"
    :mask-closable="false"
    title="编辑用户"
    :closable="false"
    :footer-hide="true"
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
        <Button type="primary" @click="handleSubmit" :loading="confirmLoading">提交</Button>
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
</template>
<script lang="ts" src="./editForm.ts"></script>