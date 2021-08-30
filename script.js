var todayDate = moment().format('dddd, MMM Do YYYY');
var today= document.getElementById('today')
today.innerText = todayDate


// var saveBtn = document.getElementById('saveBtn')
// var saveBtn = document.getElementById('saveBtn')

// saveBtn.addEventListener('click', function(e) {
// e.preventDefault();
// var saveBtn = document.getElementById('saveBtn')
// for (var i=0; i < saveBtn.length ; i++) {
//   var text=saveBtn[i].nextSibling('description').innerText 

//   console.log(text)
//   var time = saveBtn[i].nextSibling;
//   document.getElementsByClassName('hour').innerText = time

//   localStorage.setItem(time, text);

// }
// })
var saveBtns = document.querySelectorAll('.saveBtn')
for (var i=0; i < saveBtns.length ; i++) {
saveBtns[i].addEventListener('click', saveLocalstorage)
}

function saveLocalstorage(e){
  e.preventDefault()
  var text= this.parentNode.querySelector('.description').value;
  var time =  this.parentNode.id
  localStorage.setItem(time, text);

}

function timeTracker(){
var currentHour = moment().format("H");
console.log(currentHour)

$(".time-block").each(function () {
  var blockTime = parseInt($(this).attr("id").split("hour")[1]);

   if (blockTime < currentHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime == currentHour) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

  }
})
};
timeTracker()

for (var i=8; i <= 17; i++) {
  $("#hour" + i + " .description").val(localStorage.getItem("hour" + i))

}
// $("#hour8 .description").val(localStorage.getItem("hour8"));

// $("#hour9 .description").val(localStorage.getItem("hour9"));
// $("#hour10 .description").val(localStorage.getItem("hour10"));
// $("#hour11 .description").val(localStorage.getItem("hour11"));
// $("#hour12 .description").val(localStorage.getItem("hour12"));
// $("#hour13 .description").val(localStorage.getItem("hour13"));
// $("#hour14 .description").val(localStorage.getItem("hour14"));
// $("#hour15 .description").val(localStorage.getItem("hour15"));
// $("#hour16 .description").val(localStorage.getItem("hour16"));
// $("#hour17 .description").val(localStorage.getItem("hour17"));

