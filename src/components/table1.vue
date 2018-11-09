<template>
<div>
  <el-table stripe=true
    ref="multipleTable"
    :data="tableData1"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column v-for="(item,key) in tableHeader"
                     :key="key"
                     :prop="item.value"
                     :label="item.name"
                     sortable
                     :width="item.width"   
                     :type="item.type"
      >
    </el-table-column>
    
  </el-table>
  <el-pagination
      name="fenye"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total=total>
    </el-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData1: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        currentPage:1,
        pageSize:10,
        sort:1,
        total:2
      }
    },
    props:[
        'tableHeader'
    ],
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>