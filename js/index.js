window.onload = function () {


    //浏览器高度 + 滚动高度 >= 楼层距顶部的距离  楼层出现
    let floor = document.querySelectorAll("section");
    let fh = floor.offsetTop;
    let aside = document.querySelector(".aside");
    let lis = document.querySelectorAll(".as_list");
    let arr = [];
    floor.forEach(function (value) {
        arr.push(value.offsetTop);
    })
    window.onscroll = function () {
        let wh = window.innerHeight;
        let sh = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(sh);
        arr.forEach((value, i) => {
            if (wh + sh > value + 300) {
                floor[i].style.display = "block";
            }

        })
        //楼层跳转
        lis.forEach((e, i) => {
            e.onclick = function () {
                animate(document.body, { scrollTop: arr[i] - 50 });
                animate(document.documentElement, { scrollTop: arr[i] - 50 });
                $(".as_list").removeClass("ct").eq(i).addClass("ct");
            }
        })
        //返回顶部
        let turn = document.querySelector(".return");
        window.onscroll = function () {
            let sh = document.body.scrollTop || document.documentElement.scrollTop;
            if (sh > 800) {
                turn.style.display = "block";
                aside.style.display = "block";
            } else {
                turn.style.display = "none";
                aside.style.display = "none";
            }
        }
        turn.onclick = function () {
            animate(document.body, { scrollTop: 0 });
            animate(document.documentElement, { scrollTop: 0 });
        }
    }
}