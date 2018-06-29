var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MapConfig = (function () {
    function MapConfig() {
    }
    MapConfig.getDirSpd = function (dir) {
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
    };
    /**更新屏幕大小**/
    MapConfig.updateScreen = function (w, h) {
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
    };
    MapConfig.updateMapData = function (mapData) {
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
    };
    /**
     * 地图改变后更改相应的值
     * @param w
     * @param h
     */
    MapConfig.update = function () {
        //updateScreen(w,h);
        if (this.width < this.V_WIDTH) {
            this.displayOffset.x = (this.V_WIDTH - this.width) / 2;
        }
        else {
            this.displayOffset.x = 0;
        }
        ;
        if (this.height < this.V_HEIGHT) {
            this.displayOffset.y = (this.V_HEIGHT - this.height) / 2;
        }
        else {
            this.displayOffset.y = 0;
        }
        ;
        var dir;
        var rot = -180;
        while (rot <= 180) {
            if (rot >= -110 && rot <= -70) {
                dir = AnConst.UP;
            }
            else if (rot > -70 && rot < -20) {
                dir = AnConst.RIGHT_UP;
            }
            else if (rot >= -20 && rot <= 20) {
                dir = AnConst.RIGHT;
            }
            else if (rot > 20 && rot < 70) {
                dir = AnConst.RIGHT_DOWN;
            }
            else if (rot >= 70 && rot <= 110) {
                dir = AnConst.DOWN;
            }
            else if (rot > 110 && rot < 160) {
                dir = AnConst.LEFT_DOWN;
            }
            else if (rot >= 160 || rot <= -160) {
                dir = AnConst.LEFT;
            }
            else {
                dir = AnConst.LEFT_UP;
            }
            ;
            this._directionMap[rot] = dir;
            rot++;
        }
        this.cellLen = Math.sqrt(Math.pow(this.cellWidth, 2) + Math.pow(this.cellHeight, 2));
        this.walkStepDistance = [0, this.cellLen, this.cellHeight, this.cellLen, this.cellWidth, this.cellLen, this.cellHeight, this.cellLen, this.cellWidth];
    };
    MapConfig.getDirection = function (x1, y1, x2, y2) {
        if (x2 == x1 && y2 < y1) {
            return 2;
        }
        ;
        if (x2 > x1 && y2 < y1) {
            return 3;
        }
        ;
        if (x2 > x1 && y2 == y1) {
            return 4;
        }
        ;
        if (x2 > x1 && y2 > y1) {
            return 5;
        }
        ;
        if (x2 == x1 && y2 > y1) {
            return 6;
        }
        ;
        if (x2 < x1 && y2 > y1) {
            return 7;
        }
        ;
        if (x2 < x1 && y2 == y1) {
            return 8;
        }
        ;
        if (x2 < x1 && y2 < y1) {
            return 1;
        }
        ;
        return 2;
    };
    MapConfig.getDir = function (r) {
        return this._directionMap[r];
    };
    MapConfig.getRotation = function (p1, p2) {
        var dx = p2.x - p1.x;
        var dy = p2.y - p1.y;
        var rotation = Math.atan2(dy, dx) * this.CONST1;
        if (rotation > 180) {
            rotation = rotation - 360;
        }
        ;
        if (this.r != Math.ceil(rotation)) {
            this.r = Math.ceil(rotation);
            //console.log("r:"+this.r+"  "+p1+", "+p2);
        }
        return Math.ceil(rotation);
    };
    /**
     * 根据弧度得到方向
     * @param radians
     * @return
     *
     */
    MapConfig.getDirectionByRadians = function (radians) {
        //var angle:number = MathUitl.getAngle(radians);
        //return this._directionMap[angle];
        return 0;
    };
    MapConfig.FLAG_WALK = 0; //可以走可以飞
    MapConfig.FLAG_CLOSE = 1; //不可以走可以飞
    MapConfig.FLAG_ALPHA = 2; //透明
    MapConfig.FLAG_NOT_THROUGH = 3; //不可通过
    /** 屏幕宽度*/
    MapConfig.V_WIDTH = 480;
    /*** 屏幕高度  */
    MapConfig.V_HEIGHT = 800;
    /**当前屏幕大小**/
    //static displayRect:egret.Rectangle = new egret.Rectangle(0, 0, 1000, 580);
    /**地图总像素宽度**/
    MapConfig.width = 5000;
    /**地图总像素高度**/
    MapConfig.height = 5000;
    /**总切片地图行数**/
    MapConfig.imageRow = 20;
    /**总切片地图列数**/
    MapConfig.imageCol = 20;
    /**切块宽度**/
    MapConfig.sliceWidth = 256;
    /**切块高度**/
    MapConfig.sliceHeight = 256;
    /**地图切片块大小**/
    MapConfig.sliceRect = new egret.Rectangle(0, 0, MapConfig.sliceWidth, MapConfig.sliceHeight);
    /** 小地图宽度 */
    MapConfig.sWidth = 130;
    /** 小地图高度 */
    MapConfig.sHeight = 130;
    /** 地图与人物的偏移量**/
    MapConfig.displayOffset = new egret.Point();
    /**地图格子宽度**/
    MapConfig.cellWidth = 48;
    /**地图格子高度**/
    MapConfig.cellHeight = 32;
    MapConfig.walkStepDistance = [9];
    MapConfig.SQRT_5 = Math.sqrt(5); //2.236068
    //人物每秒移动的速度,单位:像素,即:156.5247584249853
    MapConfig.WALK_SPEED_BASE = 5.7 * 40 / 30;
    MapConfig.WALK_STEP_DELTA = [[0, 0],
        [-4.8 / 5.7, -3.2 / 5.7],
        [0, -1],
        [4.8 / 5.7, -3.2 / 5.7],
        [1, 0],
        [4.8 / 5.7, 3.2 / 5.7],
        [0, 1],
        [-4.8 / 5.7, 3.2 / 5.7],
        [-1, 0]];
    MapConfig._directionMap = new Object();
    MapConfig.CONST1 = 180 / Math.PI;
    return MapConfig;
}());
__reflect(MapConfig.prototype, "MapConfig");
//# sourceMappingURL=MapConfig.js.map