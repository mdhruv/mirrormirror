var datetime = null,
date = null;

var updateTime = function () {
    date = moment(new Date())
    var html = '<p>' + date.format('dddd') +'<br>'+ date.format('MMMM Do')+ '</p>';
    html += '<p id="time">' + date.format('h:mm a') + '</p>';
    datetime.html(html);
};

$(document).ready(function() {
    datetime = $('#date');
    updateTime();
    setInterval(updateTime, 10000);
});
