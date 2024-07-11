function includeHTML(value) {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("include-html");
      if (file) {
        /* Make an HTTP request using the attribute value as the file name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {
                elmnt.innerHTML = this.responseText;
                if( value == "Home"){
                    var Element = elmnt.querySelector('#homepage');
                    Element.classList.add("active");
                }
                else if ( value == "About Me"){
                    var Element2 = elmnt.querySelector('#aboutme');
                    Element2.classList.add("active");
                }
                else if ( value == "Projects"){
                    var Element3 = elmnt.querySelector('#projects');
                    Element3.classList.add("active");
                }
                else if ( value == "Contact"){
                    var Element4 = elmnt.querySelector('#contact');
                    Element4.classList.add("active");
                }
            }
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /* Remove the attribute, and call this function once more: */
            elmnt.removeAttribute("include-html");
            includeHTML();
          }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        /* Exit the function: */
        return;
      }
    }
}