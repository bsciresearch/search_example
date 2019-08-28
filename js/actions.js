function allActions(){


  // Get URL parameters
  function getParameterByName(variable)
  {
         var query = window.location.search.substring(1);
         var vars = query.split("&");
         for (var i=0; i<vars.length; i++) {
                 var pair = vars[i].split("=");
                 if(pair[0] == variable){return pair[1];}
         }
         return(false);
  }


  // Give the parameter a variable name
  let dC_h = getParameterByName('hpp');
  dC_h = dC_h.replace(/%20/g, " ")

  var elem = document.querySelector('#dynamic-content');

  // Set HTML content
  if (dC_h.length > 0) {
    elem.innerHTML = dC_h; 
  }

  dC_h = dC_h.replace(" ", "%20")


  // Get HTML content
  var dispC_h = elem.innerHTML;
  dispC_h = dispC_h.replace(" ", "%20")


  // Get Worker ID
  let wid = getParameterByName('w')
  if (!wid) {
    wid = "default_id"
  }


  // Capture click location
  let click_location = "default"

  document.getElementById("search-bar").addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode

    if (key === 13) {
    	click_location = "srch-ent"
    	// redirectQualtrics()
    	alert(click_location)
    }
  })


  document.getElementById("search-button").addEventListener("click", searchButtonClick);

  function searchButtonClick() {
    click_location = "srch"
    redirectQualtrics()
  }


  document.getElementById("dynamic-content").addEventListener("click", hppButtonClick);

  function hppButtonClick() {
    click_location = "hpp"
    redirectQualtrics()
  }

  // Redirect after 10 seconds, regardless of activity
  setTimeout(redirectQualtrics, 10000)


  // Combine data and redirect
  function redirectQualtrics() {

    var urlRedirect = new URL("https://google.qualtrics.com/jfe/form/SV_eeumk4pgZ3aARHT?wr=" + wid + "&cl=" + click_location + "&dC_h=" + dC_h + "&dispC_h=" + dispC_h + "&v=" + 1)

    // var urlRedirect= "https://google.qualtrics.com/jfe/form/SV_eeumk4pgZ3aARHT?wr=${wid}&cl=${click_location}&dC_h=${dC_h}&dispC_h=${dispC_h}"
    window.location = urlRedirect
  }

}