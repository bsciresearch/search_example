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


  // Get Worker ID
  let wid = getParameterByName('w')

  if (!wid) {
    wid = "no_id_provided"
  }


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


  // Redirect after 10 seconds, regardless of activity
  // setTimeout(redirectQualtrics, 10000)


  // Combine data and redirect
  function redirectQualtrics() {

    const urlRedirect= `https://google.qualtrics.com/jfe/form/SV_eeumk4pgZ3aARHT?wr='${wid}'&cl='${click_location}'&dC_h='${dC_h}'&dispC_h='${dispC_h}'`
    window.location = urlRedirect
  }

}