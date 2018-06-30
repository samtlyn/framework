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
var BaseComponent = (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.eventList = new Array();
        return _this;
    }
    BaseComponent.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddtoStage, this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this);
    };
    BaseComponent.prototype.addEvent = function (eventName, func) {
        var index = EventUtil.addEventListener(eventName, func, this);
        if (index != -1) {
            this.eventList.push({ name: eventName, function: func });
        }
    };
    BaseComponent.prototype.onAddtoStage = function (e) {
    };
    BaseComponent.prototype.onRemoveFromStage = function (e) {
        this.cleanEventList();
    };
    BaseComponent.prototype.cleanEventList = function () {
        if (this.eventList != null) {
            var eObj = null;
            for (var i = 0; i < this.eventList.length; i++) {
                eObj = this.eventList[i];
                EventUtil.removeEventListener(eObj.name, eObj.function);
            }
            this.eventList.length = 0;
            this.eventList = null;
        }
    };
    return BaseComponent;
}(eui.Component));
__reflect(BaseComponent.prototype, "BaseComponent");
//# sourceMappingURL=BaseComponent.js.map