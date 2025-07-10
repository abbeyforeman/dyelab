/* This music thing uses an API called 'Open Sheet' to get Google Sheets as JSON. Unlike the 'Inspiration' page that uses the 'papaparse' library to turn CSV into JSON, this API does it for us. 

Learn more at https://github.com/benborgers/opensheet
*/

/*
  The API's format is https://opensheet.elk.sh/spreadsheet_id/tab_name.
  
  
  To get your spreadsheet ID, hit Share at the top-right and make sure ANYONE WITH THE LINK CAN VIEW. Then, copy the end of your URL in your address bar after docs.google.com/spreadsheets/d/...
  
  e.g.
  https://docs.google.com/spreadsheets/d/1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY/edit#gid=1875797309
  copy
  "1gLyh6gv41vl9H1fBmjFrGfKip9dKkvIu6o8sccTw2lY" is your spreadsheet ID.
  
  We're using the 'Cloud' tab, so this is what we write...
*/
var SPREADSHEET_ID_AND_TAB = "11hdnLuX5KI-nlo2aiPNwGzkUyMPala-QS_7X9R7wFzs/Dyes";


$(document).ready(function () {
  
  $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
    
    
    data.forEach(function (row, index) {
      
      console.log(data.row);
      
     /* if(index == 0) return; */ //this makes it so it ignores the first row
      
      if(index == 0) return;
      
      let div = $(`<div class="index"> 
      
       <img src="` + row.img + `">
        <h3>` + row.DyeMaterial +`</h3>
         <p2>` +  row.Fiber + `</p2>
        <p1>` +  row.Mordant + `</p1>
        </div>`)
      .appendTo("#content"); // # refers to div id
      

      /*if (row.img && row.img.length > 3) {
          $(`<div class='img'><img src="` + row.img + `"></div>`).appendTo("#content");
        }
        <p3>` +  row.Color + `</p3> 
        */
      
    });
  });  
});
  