
    class MapData
    {
        public  mapId:number;

        public cellWidth:number; //棱形格子的横向对角线的长度

        public cellHeight:number; //棱形格子的纵向对角线的长度

        public gridXNum:number; // 网格 X 轴上的 格子数量

        public gridYNum:number; //网格 y 轴上的 格子数量

        public gridWidth:number; //地图矩形宽度

        public gridHeight:number; //地图矩形高度

        public connectedPointY:number;

        public gridData:Array<number[]> = new Array<number[]>();	//地图格子数据

        // private finder:PathFinder;
        static instance:MapData;
        constructor(){
            // this.finder = new PathFinder();
            MapData.instance = this;
        }
        
        private drawBlock()
		{
		// 	var map:egret.Sprite = GlobalVar.thingContainer.addChild(new egret.Sprite()) as egret.Sprite;
		// 	//map.graphics.beginFill(0xff0000);
        //     map.graphics.lineStyle(1,0);
        //    // map.graphics.moveTo(1500,1500);
        //    // map.graphics.lineTo(1800,1800);
            
        //     for(var x:number = 20; x < 60; x++){
        //         map.graphics.moveTo(x * this.cellWidth, 0);
        //         map.graphics.lineTo(x * this.cellWidth, 6000);
        //     }
            
        //     for(var y:number = 80; y < 150; y++){
        //         map.graphics.moveTo(0, y * this.cellHeight);
        //         map.graphics.lineTo(2000, y * this.cellHeight);
        //     }
		// 	map.graphics.endFill();
		}
        public findPath(end:egret.Point, start:egret.Point):Array<egret.Point>
		{
			//var last:Number = getTimer();
            var result:Array<egret.Point> = new Array<egret.Point> ();
			//trace("宠物寻路时间:" + (getTimer() - last));
			return result;
			
		}
        public isAlpha(px:number, py:number):boolean
		{
			return this.getFlag(px, py) == MapConfig.FLAG_ALPHA;
		}
        /**
         * 得到坐标的标识符 ,出错则返回-1
         * @param px 格子坐标x
         * @param py 格子坐标y
         * @return 
         */
        public getFlag(px:number, py:number):number
        {
            try
            {
                return this.gridData[py][px];
            }
            catch (e) { 

            }
            return -1;
        }

        /**
         * 该坐标是不是可以通行 
         * @param px 格子坐标x
         * @param py 格子坐标y
         * @return 
         */
        public isWalk(px:number, py:number):boolean
        {
            // return MapNodeType.isWalk(this.getFlag(px, py));
            return true;
        }
    }