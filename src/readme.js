// 案例分析(不采用redux开发组件)

// 组件Header value onChange onKeyUp
    // 添加操作->handleAddTask onChange
    // 键盘事件->handleKeyUp 给父组件传handleAddTask()事件,并传入当前state中的Etitle

// 组件Footer 事件委托 onClick 自定义属性 对象属性的id值的获取 e.target.dataset.id
    // 完成事件总数->handleCount 自定义num属性,并传值到子组件中,子组件访问该属性,自动调用执行自定义事件
    // 清除完成事件->handleClear 给父组件传handleClear()事件
    // 事件类型筛选->handleFilter 给父组件传handleFilter()事件,并传入id

// 组件List
    // 删除操作->handleDelete 给父组件传handleDelete()事件,并传入id
    // 单选控制->handleCheck 给父组件传handleCheck()事件,并传入id
    // 全选控制->handleCheckAll 给父组件传handleCheckAll()事件,并传入isAll布尔状态
    // 双击事件->handleDouble 给父组件传handleDouble事件,并传id,根据事件对象获取当前光标
    // 双击编辑->handleEditTask 给父组件传handleEditTask()事件,并传入id和value

// 组件TodoApp
    // Header handleAddTask事件绑定
    // List todos传到子组件 handleDelete handleCheck handleCheckAll handleDouble handleEditTask
    // Footer handleCount() handleFilter handleClear

// ---------------------------------------------------------------------------------------------
// 案例分析(采用Redux开发模式,其开发模式遵循flux思想,是flux的一种实现;总结:flux是redux的一种规范)
// 安装相关依赖 yarn add redux react-redux 
// 创建store唯一数据源
/* 
  1. store
      -负责数据的存储和数据的变更;数据源唯一,可避免数据冗余,更加便于维护管理

      -导入组件:createStore reducer
      -定义初始化数据
      -创建唯一数据源
      -订阅数据的变化并存储

      -数据变更业务处理

      -复制数据变更操作(reducer)

      -数据类型的统一管理

      -ActionCreater本质是函数,用于创建一个action对象(描述动作行为信息)

      -mapStateToProps
      -mapDispatchToProps

  2. view
      -负责界面显示,数据源于store;其状态只读的,不可以直接在view中修改数据

  3. action
      -表示动作行为信息,用户界面交互信息(事件类型,携带数据)
      
  4. Dispatcher
      -Dispatcher负责分发action
*/
// 组件拆分归类为: 容器组件,状态组件
