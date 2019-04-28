<template>
  <div class="users">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <el-row :gutter="20" class="search">
      <!-- 搜索展示 -->
      <el-col :span="8">
        <el-input placeholder="请输入内容" v-model="searchText" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <!-- 添加用户按钮-->
      <el-col :span="8">
        <el-button>添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 用户列表 -->
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="username" label="用户名" width="100"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="180"></el-table-column>
      <el-table-column prop label="用户状态" width="180">
        <template slot-scope="scope">
          <!-- 滑动开关 -->
          <el-switch v-model="value3"></el-switch>
        </template>
      </el-table-column>
      <!-- 按钮操作 -->
      <el-table-column prop label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" icon="el-icon-edit" plain></el-button>
          <el-button size="mini" type="danger" icon="el-icon-delete" plain></el-button>
          <el-button size="mini" type="success" icon="el-icon-check" plain>分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <!-- :current-page = "每次请求的pagenum" -->
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="2"
      :total="total"
      @current-change="getList"
      :current-page="currentPage"
    ></el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  data: function () {
    return {
      // 表格数据
      userList: [
        {
          username: '',
          email: '',
          mobile: ''
        },
        {
          username: '',
          email: '',
          mobile: ''
        }
      ],
      // 搜索内容
      searchText: '',
      // 用户的总数量
      total: 1,
      // 当前页
      currentPage: 1,
      // 自定义按钮
      value3: true
    }
  },
  methods: {
    // 请求用户列表
    getAll (pagenum = 1, query = '') {
      axios
        .get('http://localhost:8888/api/private/v1/users', {
          params: {
            query,
            pagenum,
            pagesize: 2
          },
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
        .then(res => {
          // console.log(res)
          // 数据的总数
          this.total = res.data.data.total
          // 列表中的数据
          this.userList = res.data.data.users
          console.log(res.data.data)
          this.currentPage = res.data.data.pagenum
          console.warn('currentpage', this.currentPage)
        })
    },
    // 点击分页, 参数是点击的页面
    getList (a) {
      // console.log(a)
      this.getAll(a, this.searchText)
      this.currentPage = a
    },
    // 搜索
    search () {
      // if (this.searchText === '') {
      //   return console.log('为空')
      // }
      // 请求列表, 加上query参数
      let str = this.searchText
      this.getAll(1, str)
      // 高亮的页数为1, 手动设置高亮
    }
  },
  created () {
    // 进入页面的用户列表请求,
    // 第一页, 没有搜索字符,每页数据数固定2
    this.getAll()
  }
}
</script>

<style scoped lang="less">
.users {
  width: 100%;
  height: 100%;
}
.el-table th > .cell {
  color: red;
}
.bread,
.search {
  padding: 10px 0px;
}
</style>
