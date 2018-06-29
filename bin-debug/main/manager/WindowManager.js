var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WindowManager = (function () {
    function WindowManager() {
        this._showList = new Array();
    }
    WindowManager.prototype.init = function () {
        //监听打开、关闭界面UI事件
        EventUtil.addEventListener(EventDefine.WIN_SHOW_HIDE, WindowManager.getInstance().onWinShowHide);
    };
    WindowManager.getInstance = function () {
        if (this._instance == null) {
            this._instance = new WindowManager();
            this._instance.init();
        }
        return this._instance;
    };
    WindowManager.prototype.getShowWindow = function (name) {
        for (var i = 0; i < this._showList.length; i++) {
            if (this._showList[i].windowName == name)
                return this._showList[i];
        }
        return null;
    };
    WindowManager.prototype.onWinShowHide = function (winParam) {
        if (winParam.action == WinParam.ACTION_OPEN) {
            console.log("onWinShowHide open " + winParam.type + " , " + winParam.data);
            this.openWindow(winParam.type, winParam.data);
        }
        else if (winParam.action == WinParam.ACTION_CLOSE) {
            this.hideWindow(winParam.type);
        }
    };
    WindowManager.prototype.openWindow = function (winName, param) {
        var win = this.getShowWindow(winName);
        if (win == null) {
            win = egret.getDefinitionByName(winName);
            this._showList.push(win);
        }
        // GlobalVar.windowLayer.addChild(win as egret.DisplayObject );
        win.setShowData(param);
    };
    WindowManager.prototype.hideWindow = function (winName) {
        var win = this.getShowWindow(winName);
        if (win != null) {
            var index = this._showList.indexOf(win);
            this._showList.splice(index, 1);
            win.dispose();
        }
    };
    return WindowManager;
}());
__reflect(WindowManager.prototype, "WindowManager");
//# sourceMappingURL=WindowManager.js.map