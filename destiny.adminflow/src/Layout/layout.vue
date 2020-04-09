<template>
   <Layout class="destiny_layout">
        <Header class="global-header">Header</Header>
        <Layout>
            <Sider hide-trigger class="layout_sider">Sider</Sider>
            <Content class="layout_content">
                <router-view></router-view>
            </Content>
        </Layout>
        <Footer class="layout_footer">Footer</Footer>
    </Layout>
</template>
<script lang="ts" src="./layout.ts"></script>
<style lang="less">
.destiny_layout {
  height: 100%;
  width: 100%;
  
  .global-header{
    height: calc(70 / 1080 * 100vh);
    line-height: calc(70 / 1080 * 100vh);
    padding: 0px;
    background: white;
    color:black;
  }
  .layout_sider{
    background: #001529;
    color:white;
  }
  .layout_content{
    margin-top: -1px;
    height: calc(986 / 1080 * 100vh);
    background-color: white;
  }
  .layout_footer{
    color:white;
    height: calc(24 / 1080 * 100vh);
    line-height: calc(24 / 1080 * 100vh);
    text-align: center;
    padding: 0px;
    background: -webkit-gradient(linear, left top, right top, from(#1e3a6f), to(#3d66b8));
    background: linear-gradient(90deg, #1e3a6f 0%, #3d66b8 100%);
  }
  
}
</style>
