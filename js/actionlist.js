var actionlist_key = '1Yx6V2g1T5KCnBDpiDsmEX_78ErgydqFMHb_NvA2BxvM';

var updateActionList = function () {
  Tabletop.init( { key: actionlist_key,
                   callback: renderActionList,
                   simpleSheet: true } )
};

function renderActionList(data, tabletop) {
  html = '<div id="actionlist">'
  for(i = 0; i < data.length; i++) {
    for(prop in data[i]) {
	  if (i == 0) {
	    html += '<span id="actionlistTitle">' + data[0][prop] + '</span><br><ul>'
	  } else {
	    html += '<li>'  + data[i][prop] + '</li>'
	  }
    }
    html += '</ul>'
  }
  html += '</div>'
  $("#actionlist").html(html);
}

$(document).ready(function() {
	updateActionList()
    setInterval(updateActionList, 6000);
});
