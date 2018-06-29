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
var TestComponent = (function (_super) {
    __extends(TestComponent, _super);
    function TestComponent() {
        var _this = _super.call(this) || this;
        _super.prototype.addEvent.call(_this, "SCENE_LOADED", _this.onSceneLoaded);
        return _this;
    }
    TestComponent.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
    };
    TestComponent.prototype.onSceneLoaded = function () {
        console.log("TestComponent callback");
    };
    return TestComponent;
}(BaseComponent));
__reflect(TestComponent.prototype, "TestComponent");
//# sourceMappingURL=TestComponent.js.map