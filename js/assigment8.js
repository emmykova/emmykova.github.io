const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 50 fahrenheit outside, so :insertx: went skateboarding. When they got to :inserty:, they tried to do a :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and is amazing at skateboarding. ";
var insertX  = ["your nextdoor neighbor", "Big Daddy", "that one man from the grocery store"];
var insertY = ["the edge of town", "Disneyland", "Italy"];
var insertZ = ["kickflip", "murder flip", "gazelle flip"];

randomize.addEventListener('click', result);


function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    
    var newStory = newStory.replace(":insertx:", xItem);
    var newStory = newStory.replace(":inserty:", yItem);
    var newStory = newStory.replace(":insertz:", zItem);
    var newStory = newStory.replace(":insertx:", xItem);
  

  if(customName.value !== '') {
    var name = customName.value;
    var newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300 * 0.0714286) + ' stone';
    var temperature =  Math.round(((94-32)*5)/9) + ' centigrade';

    var newStory = newStory.replace("300 pounds", weight);
    var newStory = newStory.replace("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}