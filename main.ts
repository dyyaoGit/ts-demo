const btn:HTMLElement = document.querySelector('#btn');
btn.onclick = function () {
    jsBridge.doSomething('需要执行的动作', '传入的数据');
    window.globalFun();
    console.log(window.globalText);
}