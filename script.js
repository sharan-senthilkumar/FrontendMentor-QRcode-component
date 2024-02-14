var card = document.getElementById("card");
var title = document.getElementById('title');
var description = document.getElementById('description');
var button = document.getElementById('toggle')

function change_theme(){
  if (button.classList.contains("light")){
    card.classList.remove("card-default");
    card.classList.add('card-dark');
    title.classList.remove('title-default');
    title.classList.add('title-dark');
    description.classList.remove('description-default');
    description.classList.add('description-dark');
    button.classList.remove('light');
    button.classList.add('dark');
    button.textContent = "Click to read in Light Mode";
  }else{
    card.classList.remove('card-dark');
    card.classList.add('card-default');
    title.classList.add('title-default');
    title.classList.remove('title-dark');
    description.classList.add('description-default');
    description.classList.remove('description-dark');
    button.classList.add('light');
    button.classList.remove('dark');
    button.textContent = "Click to read in Dark Mode";
  }
}