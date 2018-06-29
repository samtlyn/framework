class BaseComponent extends eui.Component {
	
	private eventList:Array<Object> =  new Array<Object>();
	protected childrenCreated():void
	{
		super.childrenCreated();
		this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddtoStage,this);
		this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemoveFromStage,this)
		
	}
	protected addEvent(eventName:string,func:Function)
	{		
		let index:number = EventUtil.addEventListener(eventName,func);
		if(index != -1)
		{
			this.eventList.push({name:eventName,function:func});
		}
		
	}

	protected onAddtoStage(e:egret.Event)
	{

	}
	protected onRemoveFromStage(e:egret.Event)
	{
		this.cleanEventList();
	}
	
	private cleanEventList(): void{
		if(this.eventList != null)
		{
			let eObj = null;
			for(let i:number = 0; i< this.eventList.length; i++)
			{
				eObj = this.eventList[i];
				EventUtil.removeEventListener(eObj.name,eObj.function);
			}
			this.eventList.length = 0;
			this.eventList = null;
		}
		
	}
	
}