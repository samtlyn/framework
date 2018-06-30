class BagWindow extends BaseWindow {
	public constructor() {
		super();
		this.windowName = "BagWindow";
		this.width = 100;
		this.height =200;
	}
	protected createChildren()
	{
		super.createChildren();
		var spr1:egret.Sprite = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00, 1);
        spr1.graphics.drawRect(0, 0, this.width, this.height);
        spr1.graphics.endFill();
        spr1.width = this.width;
        spr1.height = this.height;
        this.addChild( spr1 );
	}

	 setShowData(param:any)
	{
		super.setShowData(param);
		console.log("BagWindow setShowData "+ (param as string));
	}
}