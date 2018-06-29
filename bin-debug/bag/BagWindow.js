var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BagWindow = (function (_super) {
    __extends(BagWindow, _super);
    function BagWindow() {
        var _this = _super.call(this) || this;
        _this.windowName = "BagWindow";
        return _this;
    }
    BagWindow.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0x00ff00, 1);
        spr1.graphics.drawRect(0, 0, 500, 500);
        spr1.graphics.endFill();
        spr1.width = 500;
        spr1.height = 500;
        this.addChild(spr1);
    };
    return BagWindow;
}(BaseWindow));
__reflect(BagWindow.prototype, "BagWindow");
//# sourceMappingURL=BagWindow.js.map