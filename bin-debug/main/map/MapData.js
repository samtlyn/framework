var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MapData = (function () {
    function MapData() {
        this.gridData = new Array(); //地图格子数据
        // this.finder = new PathFinder();
        MapData.instance = this;
    }
    MapData.prototype.drawBlock = function () {
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
    };
    MapData.prototype.findPath = function (end, start) {
        //var last:Number = getTimer();
        var result = new Array();
        //trace("宠物寻路时间:" + (getTimer() - last));
        return result;
    };
    MapData.prototype.isAlpha = function (px, py) {
        return this.getFlag(px, py) == MapConfig.FLAG_ALPHA;
    };
    /**
     * 得到坐标的标识符 ,出错则返回-1
     * @param px 格子坐标x
     * @param py 格子坐标y
     * @return
     */
    MapData.prototype.getFlag = function (px, py) {
        try {
            return this.gridData[py][px];
        }
        catch (e) {
        }
        return -1;
    };
    /**
     * 该坐标是不是可以通行
     * @param px 格子坐标x
     * @param py 格子坐标y
     * @return
     */
    MapData.prototype.isWalk = function (px, py) {
        // return MapNodeType.isWalk(this.getFlag(px, py));
        return true;
    };
    return MapData;
}());
__reflect(MapData.prototype, "MapData");
//# sourceMappingURL=MapData.js.map