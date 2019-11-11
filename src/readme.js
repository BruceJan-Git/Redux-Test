// 案例分析(不采用redux开发组件)

// 组件Heacer value onChange onKeyUp
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
