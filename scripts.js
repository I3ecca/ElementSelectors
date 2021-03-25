$(function () {
  //makes all selected p elements highlighted yellow with 0.8 opacity. 
 $("p").css("background-color", "rgba(180, 180, 30, 0.8");
 //changes the red box into a pink box with 0.8 opacity. 
 $(".red-box").css("background-color", "rgba(250, 100, 300, 0.8");
 //changes all elements with and ID of list to light pink with 0.8 opacity. 
 $("#list").css("background-color", "rgba(250, 150, 300, 0.8");
//Changes all elements that have an input type of :text: to pink with a 0.8 opacity. 
 $('input[type="text"]').css("background-color", "rgba(250, 150, 300, 0.8");
//changes h2 o and input elements to purple with 0.8 opacity. All previous style changes are overwritten by this one!
 $("h2, p , input").css("background-color", "rgba(106, 90, 205, 0.8");

});

//using the css fucntion, we can edit any element with CSS style. 

// you can also select elements by input type like you can see on line 6. Just be careful that when you are using quotes inside of quotes that they are different than the ones you have it in. In this case, we have single quotes and then double quotes around the text type. 

//If you want to select multiple items, you can select them and use commas to seperate each item you are selecting as we are doing on line 8. As you can see, it turns all the elements selected purple!

