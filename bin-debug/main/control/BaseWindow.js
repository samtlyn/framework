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
var BaseWindow = (function (_super) {
    __extends(BaseWindow, _super);
    function BaseWindow() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BaseWindow.prototype, "windowName", {
        get: function () {
            return this._windowName;
        },
        set: function (name) {
            this._windowName = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseWindow.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    BaseWindow.prototype.setShowData = function (param) {
        this._data = param;
    };
    BaseWindow.prototype.dispose = function () {
    };
    BaseWindow.prototype.displayObj = function () {
        return this;
    };
    BaseWindow.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        if (this.closeIcon)
            this.closeIcon.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseTap, this);
        this.x = (MapConfig.V_WIDTH - this.width) / 2;
        this.y = (MapConfig.V_HEIGHT - this.height) / 2;
    };
    BaseWindow.prototype.show = function () {
        // GlobalVar.windowLayer.addChild(this);
        // PopupUtil.add(this);
    };
    BaseWindow.prototype.isShow = function () {
        return this.parent != null;
    };
    BaseWindow.prototype.showIndex = function (index) {
    };
    BaseWindow.prototype.destroy = function () {
        this.parent.removeChild(this);
        // PopupUtil.remove(this);
    };
    BaseWindow.prototype.onCloseTap = function (evt) {
        this.destroy();
    };
    return BaseWindow;
}(BaseComponent));
__reflect(BaseWindow.prototype, "BaseWindow", ["IWindow"]);
//# sourceMappingURL=BaseWindow.js.map