class BaseWindow extends BaseComponent implements IWindow {
	public constructor() {
		super();
	}
	layer:number;
	private _windowName: string;
	set windowName(name:string)
	{
		this._windowName = name;
	}
	get windowName():string
	{	
		return this._windowName;
	}


	private _data:any;
	protected get data():any
	{
		return this._data;
	}
	setShowData(param:any):void
	{
		this._data = param;
	}
	dispose()
	{

	}

	get showObj():egret.DisplayObject{
		return this as egret.DisplayObject;
	}
	private closeIcon: eui.Image;
	private baseBg: eui.Component;
	protected childrenCreated(): void {
		
		super.childrenCreated();
		if (this.closeIcon)
			this.closeIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseTap, this);
		// console.log("childrenCreated " +this.width + " , "+this.height + " , "+MapConfig.V_WIDTH+" , "+MapConfig.V_HEIGHT);
		this.x = (MapConfig.V_WIDTH - this.width) / 2;
		this.y = (MapConfig.V_HEIGHT - this.height) / 2;
	}
	show() {
		GlobalVar.windowLayer.addChild(this);
		// PopupUtil.add(this);
	}
	isShow(): boolean {
		return this.parent != null;
	}
	showIndex(index: number) {

	}
	destroy() {
		this.parent.removeChild(this);
		// PopupUtil.remove(this);
	}
	protected onCloseTap(evt: egret.TouchEvent) {
		this.destroy();
	}

}