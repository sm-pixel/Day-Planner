var currentDateAndTime = Date(Date.now());

var currentTime = new Date().getHours();

$("#currentDay").append(currentDateAndTime);

var presentHour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
updateHour();
//loop through currentHour blocks and change color according to currentTime
function updateHour() {
    var currentHour = new Date().getHours();
    console.log(currentHour);
    for (var i = 0; i < presentHour.length; i++) {

        if (parseInt(presentHour[i]) < currentHour) {
            $("#" + presentHour[i]).attr("style", "background-color: #CED9DD");
        }
        else if (parseInt(presentHour[i]) > currentHour) {
            $("#" + presentHour[i]).attr("style", "background-color: #33CEFF");
        }
        else if (parseInt(presentHour[i]) == currentHour) {
            $("#" + presentHour[i]).attr("style", "background-color: #38F9FF");

        }
    }
}

//