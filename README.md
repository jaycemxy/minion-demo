## 设置调速时的一点问题
首先，我们可能会想到加入一个新变量，然后修改setInterval的秒数为duration，像下面这样
```
var duration = 50
let id = setInterval(()=>{
    /* 
     * 要做的事
     */    
}，duration)
```
这样做存在一个问题，在进入setInterval时，函数只会读取一次duration的值，之后便不能修改，所以上面的方法duration的值只会是50，不能做调速的修改。
## 解决方法
用setTimeout模拟setInterval

eg:
```
html
<body>
  <div id="output"></div>
</body>
```
```
JS
用setInterval
let n = 0
let id = setInterval(()=>{
    n += 1
    output.innerText = n
    if(n >= 10){
        window.clearInterval(id)
    }
}, 500)


用setTimeout模拟
let n = 0
let id = setTimeout(function fn(){  //这里不能想setInterval一样用箭头函数，必须是具名函数，以便后面调用
    n += 1
    output.innerText = n
    if(n < 10){  //与setInterval相反，这里用(n < 10)
        setTimeout(fn,500)  //重要的一句，表示500ms后再次调用fn，可以理解为一个延时递归
    }
}, 500)
```  
