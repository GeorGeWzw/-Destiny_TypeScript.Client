<template>
  <Card :bordered="true" class="continatcar">
    <Collapse style="margin-bottom: 10px;">
      <Panel name="1">
        查询
        <Search ref="formCustom" :filters="filterInfo" :model="searchItem" slot="content">
          <div style="margin-bottom:10px;" class="table-page-search-wrapper">
            <Form :label-width="80" inline>
              <FormItem label="角色名称:">
                <Input autocomplete="off" v-model="searchItem.Name" />
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
    <div class="table-operator">
      <Button type="primary" @click="AddRole()">新增</Button>
      <Button type="primary" @click="UpdateRole()">编辑</Button>
      <Button type="primary" @click="DeleteRole()">删除</Button>
    </div>
    <!-- <div> -->
      <!-- <Scroll :height="Maxheight"> -->
        <Table :height="TableMaxheight" @on-selection-change="selectionChange" border :columns="columns" :data="RoleTable"></Table>
      <!-- </Scroll> -->
      <PageCom v-on:pageref="GetPage" :total="total"></PageCom>
    <!-- </div> -->

    <RoleAddCom ref="RoleAddInfo"></RoleAddCom>
  </Card>
</template>
<script lang="ts" src="./role.ts">
</script>>
<style lang="scss" src="./role.scss"></style>
