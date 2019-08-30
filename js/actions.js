function allActions(){


  // Get URL parameters
  function getParameterByName(variable)
  {
         let query = window.location.search.substring(1);
         let vars = query.split("&");
         for (let i=0; i<vars.length; i++) {
                 let pair = vars[i].split("=")
                 if(pair[0] == variable){return pair[1]}
         }
         return(false);
  }


  // Give the parameter a variable name
  let dC_h = getParameterByName('hpp');
  
  if(!dC_h) {
  	dC_h = ""
  }

  dC_h = decodeURIComponent(dC_h)
  
  let elem = document.querySelector('#dynamic-content');

  // Set HTML content
  if (dC_h.length > 0) {
    elem.innerHTML = dC_h
  }

  // Get HTML content
  let dispC_h = elem.innerHTML


  // Capture click location
  let click_location = "default"

  document.getElementById("search-bar").onkeydown = function (e) {

  	let key = e.which || e.keyCode

    if (key === 13) {
    	e.preventDefault()
    	click_location = "srch-ent"
    	redirectQualtrics()
    }

  }

  document.getElementById("search-button").addEventListener("click", function() {
  	click_location = "srch"
    redirectQualtrics()
  })


  document.getElementById("dynamic-content").addEventListener("click", function() {
  	click_location = "hpp"
    redirectQualtrics()
  })
  
  // Combine data and redirect
  function redirectQualtrics() {
    alert("If the user clicks here, they will be redirected to the survey to answer questions about their experience")
  }

}