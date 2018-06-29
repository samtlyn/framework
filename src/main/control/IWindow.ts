interface IWindow{
      windowName:string;
      layer:number;
      setShowData(data:any):void;
      displayObj():BaseWindow;
      dispose();
}