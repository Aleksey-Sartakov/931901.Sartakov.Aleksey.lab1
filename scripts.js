function expand(e) {
    var fb, sb;
    if (this.id == "middle") {
        document.getElementsByClassName("blue_block")[0].className = "blue_block";
        document.getElementsByClassName("green_block")[0].className = "green_block";

    }
    else if (this.id == "left") {
        fb = document.getElementsByClassName("blue_block")[0];
        sb = document.getElementsByClassName("green_block")[0];
        if (fb.classList.contains("narrowed")) {
            fb.classList.remove("narrowed");
            sb.classList.remove("narrowed");
        }
        fb.classList.add("extended");
        sb.classList.add("narrowed");
    }
    else if (this.id == "right") {
        fb = document.getElementsByClassName("green_block")[0];
        sb = document.getElementsByClassName("blue_block")[0];
        if (fb.classList.contains("narrowed")) {
            fb.classList.remove("narrowed");
            sb.classList.remove("narrowed");
        }
        fb.classList.add("extended");
        sb.classList.add("narrowed");
    }
}
var buttons = document.getElementsByTagName("button");
for (b of buttons) {
    b.addEventListener("mousedown", expand);
}
