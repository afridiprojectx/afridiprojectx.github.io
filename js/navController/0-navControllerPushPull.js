/*THIS FUNCTION PUSHES AND PULLS IN THE SIDE NAV WHEN THE MENU ICON IS CLICKED.
IN ORDER TO WORK THIS, FIRST THE WIDTH OF THE SIDENAV IS SET TO THE NEEDED SIZE SO
THAT IT WOULD BE VISIBLE WHEN THE DIVTOBE PUSHED HAS A LEFT MARGIN*/ 
function openNav() {
    document.getElementById("divSideNav").style.width = "280px";
    document.getElementById("divToBePushed").style.marginLeft = "280px";
}

function closeNav() {
    document.getElementById("divSideNav").style.width = "0";
    document.getElementById("divToBePushed").style.marginLeft= "0";
}