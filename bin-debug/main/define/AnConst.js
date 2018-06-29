var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AnConst = (function () {
    function AnConst() {
    }
    AnConst.UP = 1;
    AnConst.RIGHT_UP = 2;
    AnConst.RIGHT = 3;
    AnConst.RIGHT_DOWN = 4;
    AnConst.DOWN = 5;
    AnConst.LEFT_DOWN = 6;
    AnConst.LEFT = 7;
    AnConst.LEFT_UP = 8;
    AnConst.STAND = 0; //站立
    AnConst.WALK = 1; //走动
    AnConst.ATTACK = 2; //攻击
    AnConst.INJURY = 3; //受伤
    AnConst.DEATH = 4; //死亡
    AnConst.REST = 5; //休息
    /**反方向**/
    AnConst.TURN_DIR = { 2: AnConst.LEFT_UP, 3: AnConst.LEFT, 4: AnConst.LEFT_DOWN, 6: AnConst.RIGHT_DOWN, 7: AnConst.RIGHT, 8: AnConst.RIGHT_UP };
    /**缺少方向映射**/
    AnConst.DIRS_MAPPING = { 7: 8, 8: 7, 1: 8, 6: 5, 5: 6, 2: 3, 3: 2, 4: 5 };
    return AnConst;
}());
__reflect(AnConst.prototype, "AnConst");
//# sourceMappingURL=AnConst.js.map