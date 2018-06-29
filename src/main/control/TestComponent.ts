class TestComponent extends BaseComponent {
	public constructor() {
		super();
		super.addEvent("SCENE_LOADED",this.onSceneLoaded);
	  }
	public createChildren() {
		super.createChildren();
	
	}
	onSceneLoaded()
	{
		console.log("TestComponent callback");
	}
}