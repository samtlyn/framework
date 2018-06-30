class EventStruct {
	public key:number;
	public callfunc:Function;
	public isDispose:boolean = false;
	public owner:any;

	clean(){
		this.callfunc = null;
		this.owner = null;
	}
}
