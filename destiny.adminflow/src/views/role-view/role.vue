<template>
  <Card :bordered="true">
    <div>
      <Button type="primary" @click="AddRole()">新增</Button>
    </div>
    <div>
      <Scroll :height="Maxheight">
        <Table :height="TableMaxheight" border :columns="columns" :data="RoleTable"></Table>
      </Scroll>
      <PageCom v-on:pageref="GetPage" :total="total"></PageCom>
    </div>

    <RoleAddCom ref="RoleAddInfo"></RoleAddCom>
  </Card>
</template>
<script lang="ts" src="./role.ts">
</script>>