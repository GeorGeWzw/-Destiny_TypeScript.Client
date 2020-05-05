<template>
    <Card :bordered="true">
        <!-- 查询 -->
        <Collapse style="margin-bottom: 10px;">
            <Panel name = "1">
            </Panel>
        </Collapse>
        <!-- 功能键区 -->
        <div class="table-operator">
            <i-button type="primary">新增</i-button>
            <i-button type="primary">修改</i-button>
            <i-button type="primary">删除</i-button>
        </div>
            <Table :height="TableMaxheight" border :columns="colums" :data="MenuTable">
            </Table>
    </Card>
</template>
<script lang="ts" src="./menu.ts">
</script>
