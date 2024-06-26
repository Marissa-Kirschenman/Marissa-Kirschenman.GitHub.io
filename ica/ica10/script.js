const adjectives = ["Mighty", "Fierce", "Brave", "Silly", "Epic", "Smart", "Happy", "Fast", "Chill", "Icy", "Sleepy", "Curious", "Awesome", "Elite"]
const nouns = ["Sparkle", "Bubbles", "Banana", "Champion", "Pancake", "Clown", "Warrior", "Bumblebee", "Turtle", "Goofball", "Star", "Angel", "Maverick"]
const faceEmojis = ["😍", "😜", "🤩", "🥳", "😡", "😎", "🤓", "🥶", "😴", "🥸", "🫠", "😑", "😇", "🙃", "🤭", "🤨", "🥹", "😵‍💫", "🤑", "🤠", "🤐", "🫨", "😬", "🤣"]
const animalEmojis = ["🐶", "🐱", "🐰", "🐻", "🐼", "🐨", "🐯", "🦁", "🐮", "🐷", "🐒", "🐥", "🦅", "🦆", "🫎", "🐝", "🦕", "🐙", "🦥", "🦩", "🐢", "🦦", "🦬", "🦈"]
let currentEmojis = faceEmojis;

document.getElementById("changeEmojiButton").addEventListener("click", function(){
    const randomEmoji = currentEmojis[Math.floor(Math.random() * currentEmojis.length)];
    document.getElementById("emojiDisplay").textContent = randomEmoji;

    const randomAdjective = adjectives[Math.floor(Math.random()* adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const username = randomAdjective + " " + randomNoun;
    document.getElementById("usernameDisplay").textContent = "Username: " + username;

});

document.getElementById("toggleEmojiCategoryButton").addEventListener("click", function(){
    if (currentEmojis === faceEmojis) {
        currentEmojis = animalEmojis;
        document.getElementById("emojiCategory").textContent = "Current Category: Animals 🐶";

    } else {
        currentEmojis = faceEmojis;
        document.getElementById("emojiCategory").textContent = "Current Category: Faces 🙂"
}
});