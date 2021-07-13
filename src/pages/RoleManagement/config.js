/*
 * @Description: 
 * @Author: wangfengxiang
 * @Date: 2021-03-31 17:26:06
 * @LastEditTime: 2021-04-16 17:44:10
 * @LastEditors: wumei
 */
export default class configObj{
  constructor(){
    this.columns = [
      {
        label: '机构编码',
        prop: 'date',
      },
      {
        label: '机构名称',
        prop: 'name',
      },
      {
        label: '有效状态',
        prop: 'address',
        formatter: (row, column, cellValue) => cellValue == 1 ? '有效' : '无效'
      },
    ]
  }
}
