var currentDateAndTime = Date(Date.now());

var currentHour = new Date().getHours();

$("#currentDay").append(currentDateAndTime)

//loop through currentHour blocks and change color according to current time
for (let i = 9; i < 18; i++) {
    var toDoText = localStorage.getItem("hour" + i)
    if (toDoText !== null) {
        $("#text" + i).val(toDoText)
    }
    console.log(currentHour)
    //turns gray if already passed
    if (currentHour > i) {
        $("#text" + i).addClass("past")
    }
    //turns red if current time 
    else if (parseInt(currentHour) === i) {
        $("#text" + i).addClass("present")
    }
    //turns green ahead of current time
    else {
        $("#text" + i).addClass("future")
    }
}

$(".saveBtn").on("click", function () {
    var presentHour = $(this).parent().attr("id");
    var textArea = $("textArea").val().trim();

    localStorage.setItem(presentHour, textArea);
    console.log(presentHour, textArea);
});
