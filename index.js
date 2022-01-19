let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

/* In the code editor, there is a string called story. We want to gather some information about the 
individual words and sentences in the string. Let’s split the string into individual words and save 
them in a new array called storyWords.*/
let storyWords = story.split(" ");

/*Log how many words there are in this story to the console. */
//console.log(storyWords.length);

/*There is an array of words that are unnecessary. Iterate over your array to filter out these words. 
Save the remaining words in an array called betterWords. There are several ways that you could achieve this.*/
let betterWords = storyWords.filter(function(word) {
    return !unnecessaryWords.includes(word)
});

/* 
There is an array of words called overusedWords. These are words overused in this story. You want to let the user 
of your program know how many times they have used these overused words. There are two ways to achieve this. Try 
it on your own first. If you need help, consult the hint. */
let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for(word of storyWords){
    if(word === 'really'){
        reallyCount += 1;
    } else if(word === 'very'){
        veryCount += 1;
    } else if(word === 'basically'){
        basicallyCount += 1;
    }
}

//console.log(`"Really" count is: ${reallyCount}`);
//console.log(`"Very" count is: ${veryCount}`);
//console.log(`"Basically" count is: ${basicallyCount}`);


/*Now, count how many sentences are in the paragraph.This may seem tricky, but remember that all of the sentences in 
this paragraph end with a period (.) or an exclamation mark (!). You could iterate over the array and add 1 to a sentence 
counter variable for each word that has a period or exclamation mark as its final character. */
let sentenceCount = 0;

for(word of storyWords){
    if(word[word.length-1] === '.' || word[word.length-1] === '!'){
        sentenceCount += 1;
    }
}

//console.log(sentenceCount);

/*Log these items to the console:

The word count
The sentence count
The number of times each overused word appears
You could choose to simply log them one by one or, for a challenge, create a function that logs all of them with some formatting. */

console.log("Word Count: ", storyWords.length);
console.log("Sentence Count: ", sentenceCount);
console.log("Really: ", reallyCount);
console.log("Very: ", veryCount);
console.log("Basically: ", basicallyCount)


/*Now, log the betterWords array to the console as a single string.*/
console.log(betterWords.join(" "));