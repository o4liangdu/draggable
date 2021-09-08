// 可移动的元素一定是定位元素（非static定位的）
// 监听鼠标mousedown，mouseup 和 mousemove事件。
// mousemove事件处理里获取 event 事件对象的 clientX 和 clientY属性, 通过style设置元素的 top 和 left
const con = document.querySelector('.container')
con.addEventListener("mousedown", (e) => {
    e = e || window.event;
    let startX = e.clientX
    let startY = e.clientY
    // console.log(e.clientX, e.clientY)
    con.addEventListener("mousemove", mouseMove)
    con.addEventListener("mouseup", () => {
        con.removeEventListener("mousemove", mouseMove)
    })
    function mouseMove(e) {
        console.log(e.clientX, e.clientY)
        console.log(startX, startY, "kkkk")
        con.style.left = (con.offsetLeft + (e.clientX-startX)) + "px"
        con.style.top = (con.offsetTop + (e.clientY-startY)) +"px"
        console.log(con.style.left, con.style.top)
        startX = e.clientX
        startY = e.clientY
    }
})