function openCourse(evt, CourseName) {
    //declaration of variable
    var i, tabContent, tablinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", " ");
    }
    document.getElementById(CourseName).style.display = "block";
    document.getElementById("default").style.display="none";
    evt.currentTarget.className += "active";
}
document.getElementById("footer").innerHTML = "&copy;"+document.lastModified;

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
   // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
document.bgColor="blue";
document.fgColor="WHITE";
