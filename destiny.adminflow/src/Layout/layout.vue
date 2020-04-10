<template>
   <Layout class="destiny_layout">
        <Sider hide-trigger style="max-width: 240px;
    flex:240px;" class="layout_sider">
              <div><img src="../assets/logo.png" alt=""></div>
              <Menuleft></Menuleft>
            </Sider>
        <Layout>
            <Header class="global-header">
              <div class="header_bar">

              </div>
            </Header>
            <Content class="layout_content">
                sadasa
            </Content>
            <Footer class="layout_footer">Footer</Footer>
        </Layout>
    </Layout>
</template>
<script lang="ts" src="./layout.ts"></script>
<style lang="less">
.destiny_layout {
  height: 100%;
  width: 100%;
  .global-header{
    height: calc(55 / 1080 * 100vh);
    line-height: calc(55 / 1080 * 100vh);
    padding: 0px;
    background: white;
    color:black;
    border: red solid 1px;
    padding: 0px 20px;
    .header_bar{
      height: 100%;
      width: 100%;
    }
  }
  .layout_sider{
    background: #001529;
    color:white;
  }
  .layout_content{
    height: calc(1001 / 1080 * 100vh);
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
