class WinParam {

	static ACTION_AUTO:number = 0;
	static ACTION_OPEN:number = 1;
	static ACTION_CLOSE:number = 2;

	public type:string;
	public action:number;
	public data:any;
	public constructor(type:string,action:number = WinParam.ACTION_OPEN,paramData?:any ) {
		this.type = type;
		this.action = action;
		this.data = paramData;
	}

	public static getWinParam(type:string,action:number = WinParam.ACTION_OPEN, paramData?:any):WinParam
	{
		let winParam:WinParam = new WinParam(type,action,paramData);
		return winParam;
	}
}