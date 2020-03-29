// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// Use ready() to make a function available after the document is loaded:
// https://www.w3schools.com/jquery/event_ready.asp
$(document).ready(function(){
    // console.log("hello");
    // console.log($(".completed-check"));

    // The change event occurs when the value of an element has been changed (only works on <input>,
    // <textarea> and <select> elements).
    // https://www.w3schools.com/jquery/event_change.asp
    $(".completed-check").change(function() {
        // TODO: Research about this in Javascript

        // The val() method returns or sets the value attribute of the selected elements.
        // https://www.w3schools.com/jquery/html_val.asp
        console.log($(this).val())
        var taskId = $(this).val();

        // is(): This method is also very simple and easy to use.
        // By using this we can easily find whether a checked box is checked or not.
        // https://www.geeksforgeeks.org/how-to-check-whether-a-checkbox-is-checked-in-jquery/
        // this --> is input type checkbox element
        // $(this).is(":checked")
        console.log($(this).is(":checked"))
        var completedCheckbox = $(this).is(":checked");

        // How to call PUT from javascript???
        // Answer: AJAX
        // AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.
        // https://www.w3schools.com/jquery/jquery_ajax_intro.asp
        // Options:
        // method: The HTTP method to use for the request (e.g. "POST", "GET", "PUT").
        // url: A string containing the URL to which the request is sent.
        // data: Data to be sent to the server
        // https://api.jquery.com/jquery.ajax/
        $.ajax({
            method: "PUT",
            url: "tasks/" + taskId + "/toggle", // tasks/2/toggle
            data: { status: completedCheckbox }
        }).done(function( msg ) {
            console.log("updated")
        });

    });

});