<template>
  <div>
    <Modal width="40%" v-model="Isshow"   :mask-closable="false" title="添加角色"  @on-cancel="cancel">
      <Form :model="Roleadd"  :label-width="80" ref="Roleadd" :rules="ruleValidate">
        <FormItem  label="角色名称" prop="name">
          <Input  v-model="Roleadd.name" placeholder="请输入角色名称"/>
        </FormItem>
        <FormItem  label="标准名称">
          <Input v-model="Roleadd.normalizedName" placeholder="标准名称" />
        </FormItem>
        <FormItem  label="角色描述">
          <Input
            v-model="Roleadd.description"
            placeholder="角色描述"
          />
        </FormItem>
        <FormItem  label="是否管理员">
          <i-switch v-model="Roleadd.isAdmin" size="large">
            <span slot="open">是</span>
            <span slot="close">否</span>
          </i-switch>
        </FormItem>
      </Form>
      <div>
        <Tree :data="data4" show-checkbox multiple></Tree>
      </div>
      <div slot="footer">
        <Button @click="cancel" style="margin-left: 8px">取消</Button>
        <Button type="primary" @click="Roleaddservice('Roleadd')">保存</Button>
      </div>
    </Modal>
  </div>
</template>
<script lang="ts" src="./roleadd.ts"></script>> 
<style lang="scss" scoped>
.ivu-form-inline .ivu-form-item
{
  width: 24%;
}
</style>