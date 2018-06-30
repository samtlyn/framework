interface IWindow{
      
      windowName:string//面板名
      layer:number;//深度
      // width:number;//宽
      // height:number;//高
      setShowData(data:any):void;//打开时设置面板传入数据
      show();//显示面板
      dispose();//销毁对象
}