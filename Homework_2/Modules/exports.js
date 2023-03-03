
// NAMED EXPORT
export const fehrenToCel = (fehren) => {
    const celsius = (fehren - 32) * 5 / 9;

    return `Fehrenheit: ${fehren} is ${celsius} c.`
}

export class Song{
    constructor(songName, songAuthor){
        this.songName = songName;
        this.songAuthor = songAuthor
    }
}

const songOne = new Song("You look good on the dance floor", "Arctic Monkeys");

export const songs = [ songOne ];