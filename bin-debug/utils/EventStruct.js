var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventStruct = (function () {
    function EventStruct() {
        this.isDispose = false;
    }
    return EventStruct;
}());
__reflect(EventStruct.prototype, "EventStruct");
//# sourceMappingURL=EventStruct.js.map