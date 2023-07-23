(function(window) {
   
    let ajaxUtils = {}
    
    ajaxUtils.sendGetRequest = function(url, selector) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.querySelector(selector).innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    
    // **** Another Method ***** //
   
    // ajaxItils.sendGetRequest = function() {
   //     let request = new XMLHttpRequest();
   //     request.onreadystatechange = function () {
   //         handleRequest();
  //        };
  //        request.open("GET", "", true);
  //        request.send();
  //     };
       
  //     function handleResponse() {
  //           if (this.readyState == 4 && this.status == 200) {
  //           document.getElementById("foo").innerHTML = this.responseText;
 //            }
//         }

        window.$ajaxUtils = ajaxUtils;
})(window);
