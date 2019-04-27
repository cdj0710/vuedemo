<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col><img src="../../assets/image/logo.png" alt=""/></el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Users'
}
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
  line-height: 60px;
  color: aliceblue;
}
.el-header {
  background-color: skyblue;
  img {
    display: block;
    height: 100%;
  }
}
.el-aside {
  background-color: green;
}
</style>
