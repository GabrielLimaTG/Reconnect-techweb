// Elements (who Am I picking to animate? Is this case the "watch" class)

let elements_to_watch = document.querySelectorAll('.watch');

// Take an action with the objects observed. The action is to add or remove a class "in-page"

let callback = function(items){
    items.forEach((item) => {
        if(item.isIntersecting){item.target.classList.add("in-page");}
        else{item.target.classList.remove("in-page");}
                            
    });
    
}

// Creates a 'observer' var that saves the checking of when the element is x% in the screen (threshold) and calls another function if it's true

let observer = new IntersectionObserver(callback, {threshold: 0.6});

// How do I tell JS to actually pick the target I've just defined??? for EACH element with the .watch class

elements_to_watch.forEach((element => {observer.observe(element);}));


//language CLICK BUTTON

var img = document.querySelector('#langlogo');
var langoption = document.querySelector('.langoption');

img.addEventListener('click', function(e) {
        langoption.classList.toggle('open');
        e.stopPropagation();
      });
      document.body.addEventListener('click', function() {
        langoption.classList.remove('open');
      });
