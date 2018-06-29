var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WinParam = (function () {
    function WinParam(type, action, paramData) {
        if (action === void 0) { action = WinParam.ACTION_OPEN; }
        this.type = type;
        this.action = action;
        this.data = paramData;
    }
    WinParam.getWinParam = function (type, action, paramData) {
        if (action === void 0) { action = WinParam.ACTION_OPEN; }
        var winParam = new WinParam(type, action, paramData);
        return winParam;
    };
    WinParam.ACTION_AUTO = 0;
    WinParam.ACTION_OPEN = 1;
    WinParam.ACTION_CLOSE = 2;
    return WinParam;
}());
__reflect(WinParam.prototype, "WinParam");
//# sourceMappingURL=WinParam.js.map