class EventUtil {
	private static event_function: Object = {};
	private static checkDisposeList:Array<string> = new Array<string>();
	private static count:number =0;
	public constructor() {
	}

	/*添加全局事件监听*/
	public static addEventListener(eventName:string,func: Function,owner:any):number {
		let index:number = -1
		
		if(this.event_function[eventName] != null)
		{
			let eventList:Array<EventStruct> = this.event_function[eventName];
			for(let i:number = 0; i< eventList.length; i++){
				if(eventList[i].callfunc == func)
				{
					index = eventList[i].key;
					eventList[i].isDispose = false;
					break;
				}
			}
			
		}
		else{
			this.event_function[eventName] = Array<EventStruct>();
		}
		if(index == -1)
		{
			let eList:Array<EventStruct> =this.event_function[eventName];
			let eStruct:EventStruct = new EventStruct();
			index =  this.count++;
			eStruct.key = index;
			eStruct.callfunc = func;
			eStruct.owner = owner;
			eStruct.isDispose = false;
			eList.push(eStruct);
		}
		return index;
	}
	/*移除全局事件监听 */
	public static removeEventListener(eventName:string,func:Function)
	{
		if(this.event_function[eventName] != null)
		{
			let eList:Array<EventStruct> = this.event_function[eventName];
			for(let i:number = 0; i< eList.length; i++){
				if(eList[i].callfunc == func)
				{
					eList[i].isDispose = true;
					if(this.checkDisposeList.indexOf(eventName) == -1)
					{
						this.checkDisposeList.push(eventName);
					}
				}
			}
		}
	}

	/**执行事件回调 */
	public static callFunc(eventName:string,param?:any)
	{
		let elist:Array<EventStruct> = this.event_function[eventName];
		if(elist == null)
		{
			return;
		}
		let estruct:EventStruct;
		for(let i:number =0;i< elist.length;i++)
		{
			estruct = elist[i];		
			estruct.callfunc.call(estruct.owner,param);
		}
	}

	/**移除全部事件监听 */
	public static removeAllEventListener()
	{
		this.event_function = {};
	}

	/**检查销毁事件回调 */
	public static checkDispose()
	{
		while(this.checkDisposeList.length>0)
		{
			let eventName = this.checkDisposeList.shift();
			
			let eList:Array<EventStruct> = this.event_function[eventName];
			for(let i:number =0;i< eList.length;i++)
			{
				if(eList[i].isDispose == true){
					eList.splice(i,1);
					i--;
				}
			}
			if(eList.length == 0)
			{
				this.event_function[eventName] = null;
			}
		
		}
	}

}
