<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <el-row>
        <el-col :span="8">
          <img src="../../assets/image/logo.png" alt="" />
        </el-col>
        <el-col :span="8" class="col-title">
          <h1>电商后台管理系统</h1>
        </el-col>
        <el-col :span="8" class="col-end">
          <p>36期<a href="javascript:;" @click="out">退出</a></p>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边导航栏 -->
        <el-menu
          :router="true"
          :unique-opened="true"
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/users">用户列表</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">角色列表</el-menu-item>
            <el-menu-item index="2-2">权限列表</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体内容 -->
      <el-main>
        <!-- 不同导航的出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    // 退出
    out () {
      // 删除token
      localStorage.removeItem('token')
      // console.log(this.$router)
      this.$router.push('/login')
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
  color: #fff;
  min-width: 800px;
}
h1,
p {
  line-height: 60px;
}
.el-header {
  background-color: #b3c1cd;
  padding-left: 0;
  img {
    height: 100%;
    display: block;
  }
  .col-title {
    font-size: 20px;
    text-align: center;
  }
  .col-end {
    text-align: right;
    color: #333;
    a {
      color: #daa520;
    }
  }
}

.el-aside {
  background-color: #545c64;
  .el-submenu {
    width: 100%;
  }
}
.el-main {
  color: #333;
  background-color: #eaeef1;
}
.el-submenu .el-menu-item {
  width: 100%;
  min-width: 0;
}
</style>
