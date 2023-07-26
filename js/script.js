let homeHtml = "snippets/home-snippet.html";
let menuHtml = "snippets/menu-snippet.html";

document.addEventListener("DOMContentLoaded", function () {
  // Load the initial content on page load
  senGetRequest("main-content", homeHtml);

  // Event for "Menu" link inside "snippets/menu-snippet.html" This isn't working,
  document.getElementById("main-content").addEventListener("click", function (event) {
    if (event.target && event.target.id === "menuLink") {
      //event.preventDefault(); // Prevent the default link behavior
      senGetRequest("main-content", menuHtml);
      console.log("OK"); // This is not logged
    } else {
      console.log("Bad request") // This is logged in the console instead
    }
  });
});


// Writing the Ajax Function
function senGetRequest(selector, contentToLoad) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.status === 200 && request.readyState == 4) {
      // Clear existing content before loading new content
      document.getElementById(selector).innerHTML = '';

      // Load the new content
      document.getElementById(selector).innerHTML = this.responseText;
    } else {
      console.log("Error loading content from " + contentToLoad);
    }
  };
  request.open("GET", contentToLoad, true);
  request.send();
}
