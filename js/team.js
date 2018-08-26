window.onload=function () {
    let teach=document.querySelectorAll(".teach");
    let mb=document.querySelectorAll(".main_bottom");
    console.log(teach,mb);

    for (let i=0;i<teach.length;i++){
        teach[i].onclick=function () {
            for (let j=0;j<teach.length;j++){
                teach[j].classList.remove("tea");
                mb[j].style.display="none";
            }
            teach[i].classList.add("tea");
            mb[i].style.display="block";
        }
    }
}