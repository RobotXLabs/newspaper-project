$(document).ready(function() {
	if (window.location.hash != "") {
	    setPage(window.location.hash.substr(1));
	} else {
	    setPage("testone");
	}
});
function setPage(newPage) {
    $(".page.open-page").removeClass("open-page");
    $("#" + newPage).addClass("open-page");
    window.location.hash = newPage;
}
$(".link").click(function() {
	setPage($(this).attr("data-page"));
});
