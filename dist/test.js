window.jsBridge = {
    doSomething: function (action, payload) {
        console.log(`动作${action}, 数据${payload}`);
    },
    globalProp: "我是jsBridge上挂载的属性"
}

window.globalText = "window上的属性";
window.globalFun = function () {
    console.log("我是window上的方法");
}