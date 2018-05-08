! function () {
    var duration = 50
    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
          .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
              duration = 100
              break
            case 'normal':
              duration = 50
              break
            case 'fast':
              duration = 10
              break    
        }  
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            }else{
                fn && fn.call() 
            }
        }, duration)
    }
    let code = 
    `
    /*
     *  首先，准备一块画布
     */
    .preview {
        background-color: #f1f1f1;
        margin: auto;
        min-height: 340px;
        overflow: hidden;
        position: relative;
        text-align: center;
        width: 400px;
    }
    
    div {
        display: inline-block;
    }
    /*
     * 接下来，画一个小黄人的头
     */
    .circle {
        border-radius: 50%;
    }
    
    .color {
        background: linear-gradient(to right, #f0da6b 0%, #ffe787 48%, #caa226 100%);
    }
    
    .head {
        height: 280px;
        position: relative;
        overflow: hidden;
        width: 280px;
    }
    /*
     * 画小黄人的眼镜腿
     */
    .glasses-legs {
        background: linear-gradient(to right, #171717 0%, #585753 50%, #171717 100%);
        border: 1px solid #1f1400;
        box-shadow: 0 2px 5px #333;
        height: 25px;
        line-height: 25px;
        position: absolute;
        top: 45%;
        right: 0;
        width: 100%;
        z-index: 100;
    }
    
    .glasses-legs>span {
        border-bottom: 1px solid #30302e;
        display: block;
        height: 1px;
        margin-top: 11px;
    }
    /*
     * 然后是眼镜腿上的大镜框
     */
    .glasses {
        background: #b5b5b5;
        background: linear-gradient(135deg, #b5b5b5 0%, #919390 51%, #363636 100%);
        border: 1px solid #1b1b1b;
        box-shadow: 2px 3px 10px #333;
        height: 120px;
        margin: 20% auto;
        overflow: hidden;
        padding: 15px;
        position: relative;
        width: 120px;
        z-index: 100;
    }
    
    .glasses>span {
        background: #ffe787;
        border: 1px solid #1b1b1b;
        display: block;
        height: 120px;
        overflow: hidden;
    }
    /*
     * 再是小黄人的眼睛，先画白眼仁
     */
    .glasses>span>.eye {
        background: #fff;
        box-shadow: 0 3px 45px #a7a7a7 inset;
        display: block;
        height: 98px;
        margin: 7px 0 15px 0;
    }
    /*
     * 白眼仁里的黑瞳孔
     */
    .glasses>span>.eye>span {
        background: #c0a173;
        background: radial-gradient(ellipse at center, #c0a173 0%, #664518 50%, #241609 100%);
        background-origin: border-box;
        border: 11px solid transparent;
        display: inline-block;
        height: 16px;
        box-shadow: inset 0 0 0 #444, /* Inset shadow */
        0 0 0px #444, /* Outset shadow */
        inset -999px 0 0 #444;
        margin-top: 25%;
        position: relative;
        width: 16px;
    }
    /*
     * 黑瞳孔里的高光
     */
    .glasses>span>.eye>span>span {
        background: #fff;
        display: block;
        height: 7px;
        left: 2px;
        position: absolute;
        top: -2px;
        width: 5px;
    }
    /*
     * 紧接着是嘴巴
     */
    .mouth {
        bottom: -10px;
        height: 50px;
        overflow: hidden;
        position: absolute;
        right: 95px;
        width: 85px;
        z-index: 200;
    }
    /*
     * 嘴巴是弯弯的样子
     */
    .mouth>.circle {
        box-shadow: 0 -1px 2px #9d7d16;
        display: block;
        height: 50px;
        margin: 3px 0 0 -10px;
        width: 105px;
    }
    /*
     * 最后是他的身体
     */
    .body {
        height: 250px;
        position: absolute;
        top: 45%;
        right: 60px;
        width: 280px;
    }
    /*
     * 好了，一个小黄人就画好了
     */
    `
    writeCode('',code)

}.call()