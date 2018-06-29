
class WindowManager {
	

	private _showList:Array<IWindow> = new Array<IWindow>();
	init()
	{
		//监听打开、关闭界面UI事件
		EventUtil.addEventListener(EventDefine.WIN_SHOW_HIDE,WindowManager.getInstance().onWinShowHide);
	}

	private static _instance:WindowManager;
	static getInstance():WindowManager
	{
		if(this._instance == null)
		{
			this._instance = new WindowManager();
			this._instance.init();
		}
		return this._instance;
	}

	private getShowWindow(name:string):IWindow
	{
		for(let i:number = 0; i<this._showList.length; i++)
		{
			if(this._showList[i].windowName == name)
				return this._showList[i];
		}
		return null;
	}
	public onWinShowHide(winParam:WinParam)
	{
 		if(winParam.action ==  WinParam.ACTION_OPEN)
		 {			 
			 console.log("onWinShowHide open "+winParam.type+" , "+(winParam.data as string))
			this.openWindow(winParam.type,winParam.data)
		 }
		 else if(winParam.action == WinParam.ACTION_CLOSE){
			 this.hideWindow(winParam.type);
		 }
	}

	private openWindow(winName:string,param:any)
	{
		var win:IWindow = this.getShowWindow(winName);
		if(win == null){
			win = egret.getDefinitionByName(winName) as IWindow;
			this._showList.push(win);
			
		 }
		// GlobalVar.windowLayer.addChild(win as egret.DisplayObject );
		win.setShowData(param);
	}

	private hideWindow(winName:string)
	{
		let win:IWindow = this.getShowWindow(winName);
		if(win != null)
		{
			let  index:number = this._showList.indexOf(win);
			this._showList.splice(index,1);
			win.dispose();
		}
	}


}