class BagWindow extends BaseWindow {
	public constructor() {
		super();
		this.windowName = "BagWindow";
	}
	protected createChildren()
	{
		super.createChildren();
		var spr1:egret.Sprite = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00, 1);
        spr1.graphics.drawRect(0, 0, 500, 500);
        spr1.graphics.endFill();
        spr1.width = 500;
        spr1.height = 500;
        this.addChild( spr1 );
	}

	// setShowData(param:any)
	// {
	// 	super.setShowData(param);
	// 	console.log("BagWindow setShowData "+ (param as string));
	// }
}