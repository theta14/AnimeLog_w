export class Searched {
    type: string;
    title: string;
    mal_id: number;
    img: string;
    premiered: {
        year: number,
        quarter: number
    };
}

export class MalSearched {
    title: {
        eng: string,
        jpn: string
    };
    premiered: {
        year: number,
        quarter: number
    };
    aired: Aired | string;
    episodes: number; // can be null when it is a movie
    studios: string[];
    mal_id: number;
    img: string;
}

export interface Aired {
    start: string,
    end: string
}
  
export interface SendingSearchedProtocol {
    search: {
        type: string,
        text: string,
        option: string
    },
    malSearched: MalSearched
}
