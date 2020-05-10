var currentDateAndTime = Date(Date.now());

var currentHour = new Date().getHours();

var saveBtn = $(".btn");

$("#currentDay").append(currentDateAndTime)

//loop through currentHour blocks and change color according to currentTime
for (let i = 9; i < 17; i++) {
    var toDoText = localStorage.getItem("hour" + i)
    //if the current time is not shown on the page then
    if (toDoText !== null) {
        $("#text" + i).val(toDoText)
    }
    console.log(currentHour)
    //this makes the slot(s) grey if the current time has already passed
    if (currentHour > i) {
        $("#text" + i).addClass("past")
    }
    //this makes the slot red if it is the current time
    else if (parseInt(currentHour) === i) {
        $("#text" + i).addClass("present")
    }
    // this makes the slot(s) green if it is ahead of the current time
    else {
        $("#text" + i).addClass("future")
    }
}
