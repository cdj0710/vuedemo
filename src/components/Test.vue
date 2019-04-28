<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <!-- el-submenu 可展开的侧边导航 -->
          <el-submenu index="1">
            <!-- template slot="title" 可展开的导航标题-->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <!-- el-menu-item-group 展开的导航分组 -->
            <el-menu-item-group>
              <!--template slot="title" 导航分组的组名  -->
              <template slot="title"
                >分组一</template
              >
              <!-- 当前分组中的导航项 -->
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>

            <!-- 第二个分组 -->
            <el-menu-item-group title="分组2">
              <!-- 分组下的不可展开的选项 -->
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <!-- 分组下可展开的选项 -->
            <el-submenu index="1-4">
              <!-- 可展开的选项名 -->
              <template slot="title"
                >选项4</template
              >
              <!-- 别展开的选项 -->
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <!-- el-menu-item 不可展开的侧边导航 -->
          <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item> -->
        </el-menu>
      </el-col>
    </el-row>
    <!-- 滑动开关 -->
    <el-switch v-model="value3"> </el-switch>
    <!-- <el-switch
      style="display: block"
      v-model="value4"
      active-color="#13ce66"
      inactive-color="#ff4949"
    >
    </el-switch> -->
  </div>
</template>
<script>
export default {
  name: 'Test',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  data () {
    return {
      value3: true,
      value4: true
    }
  }
}
</script>
<style scoped></style>
