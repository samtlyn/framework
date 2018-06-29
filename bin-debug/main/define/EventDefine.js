var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventDefine = (function () {
    function EventDefine() {
    }
    EventDefine.WIN_SHOW_HIDE = "WIN_SHOW_HIDE"; //界面显示或关闭
    return EventDefine;
}());
__reflect(EventDefine.prototype, "EventDefine");
//# sourceMappingURL=EventDefine.js.map