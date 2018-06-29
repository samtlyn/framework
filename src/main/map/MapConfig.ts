
class MapConfig
{
	public static FLAG_WALK:number = 0;	//可以走可以飞
	public static FLAG_CLOSE:number = 1;	//不可以走可以飞
	public static FLAG_ALPHA:number = 2;	//透明
	public static FLAG_NOT_THROUGH:number = 3;	//不可通过

	/**当前地图id**/
	static currSceneId:string;	
	/** 屏幕宽度*/
	static V_WIDTH:number = 480;
	/*** 屏幕高度  */
	static V_HEIGHT:number = 800;
	/**当前屏幕大小**/
	//static displayRect:egret.Rectangle = new egret.Rectangle(0, 0, 1000, 580);
	/**地图总像素宽度**/
	static width:number = 5000;
	/**地图总像素高度**/
	static height:number = 5000;
	/**总切片地图行数**/
	static imageRow:number = 20;
	/**总切片地图列数**/
	static imageCol:number = 20;
	/**切块宽度**/
	static sliceWidth:number = 256;
	/**切块高度**/
	static sliceHeight:number = 256;
	/**地图切片块大小**/
	static sliceRect:egret.Rectangle = new egret.Rectangle(0, 0, MapConfig.sliceWidth, MapConfig.sliceHeight);
	/** 每屏显示图片列数 */
	static screenImageCol:number;
	/** 每屏显示图片行数 */
	static screenImageRow:number;
	/** 小地图宽度 */
	static sWidth:number = 130;
	/** 小地图高度 */
	static sHeight:number = 130;
	/** 地图与人物的偏移量**/
	static displayOffset:egret.Point = new egret.Point();
	
	/**地图格子宽度**/
	static cellWidth:number = 48; 
	/**地图格子高度**/
	static cellHeight:number = 32;
	
	/**地图是否初始化**/
	static isInitMap:boolean;
	
	static cellLen:number;
	static walkStepDistance:number[] = [9];
	private static SQRT_5:number = Math.sqrt(5);//2.236068
	//人物每秒移动的速度,单位:像素,即:156.5247584249853
	static WALK_SPEED_BASE:number = 5.7 * 40 / 30;
	public static WALK_STEP_DELTA:Array<any> = [[0, 0], 
			[-4.8/5.7, -3.2/5.7], 
			[0, -1], 
			[4.8/5.7, -3.2/5.7], 
			[1, 0], 
			[4.8/5.7, 3.2/5.7], 
			[0, 1], 
			[-4.8/5.7, 3.2/5.7], 
			[-1,0]];
	private static _directionMap:Object = new Object();
	public static getDirSpd(dir:number):number{
		return 1;
		// if(dir == 1)
		// 	return 1;
		// if(dir == 2)
		// 	return 3.2/5.7;
		// if(dir == 3)
		// 	return 1;
		// if(dir == 4)
		// 	return 4.8/5.7;
		// if(dir == 5)
		// 	return 1;
		// if(dir == 6)
		// 	return 3.2/5.7;
		// if(dir == 7)
		// 	return 1;
		// if(dir == 8)
		// 	return 4.8/5.7;
	}
	
	/**更新屏幕大小**/
	public static updateScreen(w:number, h:number):void
	{
		this.V_WIDTH = w;
		this.V_HEIGHT = h;
		/*
		this.displayRect.width = w;
		this.displayRect.height = h;
		this.displayRect.x -= (this.V_WIDTH - 1000 >> 1);
		this.displayRect.y -= (this.V_HEIGHT - 580 >> 1);
		*/
		this.screenImageRow = Math.ceil(this.V_HEIGHT / this.sliceHeight);
		this.screenImageCol = Math.ceil(this.V_WIDTH / this.sliceWidth);
	}
	
	public static updateMapData(mapData:MapData):void
	{
		this.width = mapData.gridWidth;
		this.height = mapData.gridHeight;
		this.cellWidth = mapData.cellWidth;
		this.cellHeight = mapData.cellHeight;
//			imageCol = mapData.gridXNum;
//			imageRow = mapData.gridYNum-1;
		this.screenImageRow = Math.ceil(this.V_HEIGHT / this.sliceHeight);
		this.screenImageCol = Math.ceil(this.V_WIDTH / this.sliceWidth);
		this.imageCol = Math.ceil(this.width / this.sliceWidth);
		this.imageRow = Math.ceil(this.height / this.sliceHeight);
		// SceneRange.init(mapData);
		this.update();
		this.isInitMap = true;
	}
	
	/**
	 * 地图改变后更改相应的值
	 * @param w
	 * @param h
	 */
	public static update():void
	{
		//updateScreen(w,h);
		if (this.width < this.V_WIDTH) {
			this.displayOffset.x = (this.V_WIDTH - this.width) / 2;
		} else {
			this.displayOffset.x = 0;
		};
		if (this.height < this.V_HEIGHT) {
			this.displayOffset.y = (this.V_HEIGHT - this.height) / 2;
		} else {
			this.displayOffset.y = 0;
		};
		
		var dir:number;
		var rot:number = -180;
		while (rot <= 180)	//北
		{ 
			if (rot >= -110 && rot <= -70) // 东北
			{ 
				dir = AnConst.UP;
			}
			else if (rot > -70 && rot < -20) //东
			{ 
				dir = AnConst.RIGHT_UP;
			} 
			else if (rot >= -20 && rot <= 20) // 东南
			{ 
				dir = AnConst.RIGHT;
			}
			else if (rot > 20 && rot < 70) //南
			{ 
				dir = AnConst.RIGHT_DOWN;
			}
			else if (rot >= 70 && rot <= 110)//西南
			{ 
				dir = AnConst.DOWN;
			} 
			else if (rot > 110 && rot < 160)	//西
			{ 
				dir = AnConst.LEFT_DOWN;
			} 
			else if (rot >= 160 || rot <= -160)  // 西北
			{
				dir = AnConst.LEFT;
			}
			else 
			{
				dir = AnConst.LEFT_UP;
			};
			this._directionMap[rot] = dir;
			rot++;
		}
		
		this.cellLen = Math.sqrt(Math.pow(this.cellWidth, 2) + Math.pow(this.cellHeight, 2));
		this.walkStepDistance = [0, this.cellLen,this.cellHeight, this.cellLen, this.cellWidth, this.cellLen, this.cellHeight, this.cellLen, this.cellWidth];
	}

	public static getDirection(x1:number, y1:number, x2:number, y2:number):number
		{
			if (x2 == x1 && y2 < y1){
				return 2;
			};
			if (x2 > x1 && y2 < y1){
				return 3;
			};
			if (x2 > x1 && y2 == y1){
				return 4;
			};
			if (x2 > x1 && y2 > y1){
				return 5;
			};
			if (x2 == x1 && y2 > y1){
				return 6;
			};
			if (x2 < x1 && y2 > y1){
				return 7;
			};
			if (x2 < x1 && y2 == y1){
				return 8;
			};
			if (x2 < x1 && y2 < y1){
				return 1;
			};
			return 2;
		}
		public static getDir(r:number):number{
			return this._directionMap[r];
		}
		
		private static CONST1:number = 180 / Math.PI;
		public static getRotation(p1:egret.Point, p2:egret.Point):number
		{
			var dx:number = p2.x - p1.x;
			var dy:number = p2.y - p1.y;

			var rotation:number = Math.atan2(dy, dx) * this.CONST1;
			if (rotation > 180){
				rotation = rotation - 360;
			};
			if(this.r != Math.ceil(rotation)){
				this.r = Math.ceil(rotation)
				//console.log("r:"+this.r+"  "+p1+", "+p2);
			}
			return Math.ceil(rotation);
		}
		private static r;
	/**
	 * 根据弧度得到方向
	 * @param radians
	 * @return
	 *
	 */
	public static getDirectionByRadians(radians:Number):number
	{
		//var angle:number = MathUitl.getAngle(radians);
		//return this._directionMap[angle];
		return 0;
	}
}