var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventUtil = (function () {
    function EventUtil() {
    }
    /*添加全局事件监听*/
    EventUtil.addEventListener = function (eventName, func, owner) {
        var index = -1;
        if (this.event_function[eventName] != null) {
            var eventList = this.event_function[eventName];
            for (var i = 0; i < eventList.length; i++) {
                if (eventList[i].callfunc == func) {
                    index = eventList[i].key;
                    eventList[i].isDispose = false;
                    break;
                }
            }
        }
        else {
            this.event_function[eventName] = Array();
        }
        if (index == -1) {
            var eList = this.event_function[eventName];
            var eStruct = new EventStruct();
            index = this.count++;
            eStruct.key = index;
            eStruct.callfunc = func;
            eStruct.owner = owner;
            eStruct.isDispose = false;
            eList.push(eStruct);
        }
        return index;
    };
    /*移除全局事件监听 */
    EventUtil.removeEventListener = function (eventName, func) {
        if (this.event_function[eventName] != null) {
            var eList = this.event_function[eventName];
            for (var i = 0; i < eList.length; i++) {
                if (eList[i].callfunc == func) {
                    eList[i].isDispose = true;
                    if (this.checkDisposeList.indexOf(eventName) == -1) {
                        this.checkDisposeList.push(eventName);
                    }
                }
            }
        }
    };
    /**执行事件回调 */
    EventUtil.callFunc = function (eventName, param) {
        var elist = this.event_function[eventName];
        if (elist == null) {
            return;
        }
        var estruct;
        for (var i = 0; i < elist.length; i++) {
            estruct = elist[i];
            estruct.callfunc.call(estruct.owner, param);
        }
    };
    /**移除全部事件监听 */
    EventUtil.removeAllEventListener = function () {
        this.event_function = {};
    };
    /**检查销毁事件回调 */
    EventUtil.checkDispose = function () {
        while (this.checkDisposeList.length > 0) {
            var eventName = this.checkDisposeList.shift();
            var eList = this.event_function[eventName];
            for (var i = 0; i < eList.length; i++) {
                if (eList[i].isDispose == true) {
                    eList.splice(i, 1);
                    i--;
                }
            }
            if (eList.length == 0) {
                this.event_function[eventName] = null;
            }
        }
    };
    EventUtil.event_function = {};
    EventUtil.checkDisposeList = new Array();
    EventUtil.count = 0;
    return EventUtil;
}());
__reflect(EventUtil.prototype, "EventUtil");
//# sourceMappingURL=EventUtil.js.map