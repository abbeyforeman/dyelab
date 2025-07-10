  var SPREADSHEET_ID_AND_TAB = "11hdnLuX5KI-nlo2aiPNwGzkUyMPala-QS_7X9R7wFzs/Dyes";

  $(document).ready(function () {
    $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB, function (data) {
      
      // Populate select options with unique values for color, fiber, dye material, and mordant
      const colorsSet = new Set(data.map(row => row.Color));
      const fibersSet = new Set(data.map(row => row.Fiber));
      const dyeMaterialsSet = new Set(data.map(row => row.DyeMaterial));
      const mordantsSet = new Set(data.map(row => row.Mordant));
      
      populateSelectOptions(colorsSet, 'color');
      populateSelectOptions(fibersSet, 'fiber');
      populateSelectOptions(dyeMaterialsSet, 'dye-material');
      populateSelectOptions(mordantsSet, 'mordant');

      function populateSelectOptions(optionsSet, selectId) {
        const selectElement = document.getElementById(selectId);
        optionsSet.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.toLowerCase();
          optionElement.textContent = option;
          selectElement.appendChild(optionElement);
        });
      }
      
      // Fetch and display the filtered data when any of the select options change
      $('#color, #fiber, #dye-material, #mordant').change(function() {
        const selectedColor = $('#color').val();
        const selectedFiber = $('#fiber').val();
        const selectedDyeMaterial = $('#dye-material').val();
        const selectedMordant = $('#mordant').val();
        
        $('#content').empty(); // Clear previous content
        
        data.forEach(function(row) {
          if ((selectedColor === 'all' || row.Color.toLowerCase() === selectedColor) &&
              (selectedFiber === 'all' || row.Fiber.toLowerCase() === selectedFiber) &&
              (selectedDyeMaterial === 'all' || row.DyeMaterial.toLowerCase() === selectedDyeMaterial) &&
              (selectedMordant === 'all' || row.Mordant.toLowerCase() === selectedMordant)) {
            $('<div class="index">')
              .append($('<img>').attr('src', row.img))
              .append($('<h3>').text(row.DyeMaterial))
              .append($('<p2>').text(row.Fiber))
              .append($('<p1>').text(row.Mordant))
              .appendTo('#content');
          }
        });
      });
    });
  });

// about

$(".info button[data-what='info']").click(function () {

  if ($("#about").is(":visible")) {
    $(".info button").css("opacity", 1);
  } else {
    $(".info button").css("opacity", 0.5);
    $(".info button[data-what='info']").css("opacity", 1);
  }

  $("#about").fadeToggle();
});
