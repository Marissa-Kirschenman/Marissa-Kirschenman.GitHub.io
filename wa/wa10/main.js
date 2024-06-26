const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was a cold snow day in Boulder, CO it was only 20 degrees fahrenheit, so obviously :insertx: went to the moutians to go skiing. But, they had to make a pit stop at :inserty:, becuase they couldnt resist just passing by. But, as we were leaving, suddenly we were being chased by a peacock, so we :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 100 pounds, and was holding a Chick-fil-a chicken nugget (which is the peacocks favorite food)."
const insertX = ["Frosty the snowman", "Ralphie the buffalo", "Spongebob"]
const insertY = ["Casa Bonita", "Chick-fil-a", "the zoo"]
const insertZ = ["grew angel wings and flew away", "inflated into a balloon and floated away", "exploded into a cloud of confetti"]

randomize.addEventListener("click", result); 


function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:",xItem);
    newStory = newStory.replaceAll(":inserty:",yItem);
    newStory = newStory.replaceAll(":insertz:",zItem);

    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replaceAll ("Bob", name); 
    }

    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(100*0.0714286)} stone`;
        const temperature =  `${Math.round((20-32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll('20 degrees fahrenheit', temperature);
        newStory = newStory.replaceAll('100 pounds', weight);
      }
    story.textContent = newStory
    story.style.visibility = "visible";
}