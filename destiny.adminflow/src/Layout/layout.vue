<template>
  <Layout class="destiny_layout">
    <Sider hide-trigger style="max-width: 240px;flex:240px;" class="layout_sider">
      <div>
        <img src="../assets/logo.png" alt />
      </div>
      <Menuleft></Menuleft>
    </Sider>
    <Layout>
      <Header class="global-header">
        <div class="header_bar">
          <Icon type="md-menu" style="font-size: 26px;" />
          <div class="custom-bread-crumb">
            <Breadcrumb>
              <BreadcrumbItem to="/">Home</BreadcrumbItem>
              <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
              <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="custom-content-con">
            <div class="user-avator-dropdown">
              <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            </div>
            <div class="error-store">
              <Icon type="ios-bug" style="font-size: 26px;" />
            </div>
          </div>
        </div>
      </Header>
      <transition name="fade">
        <Content class="layout_content">
          <div class="tag-nav-wrapper">
            <div class="tags-nav"></div>
          </div>
          <router-view class="layout_content_view"></router-view>
        </Content>
      </transition>
      <Footer class="layout_footer">Footer</Footer>
    </Layout>
  </Layout>
</template>
<script lang="ts" src="./layout.ts"></script>
<style lang="scss" src="./layout.scss"></style>
