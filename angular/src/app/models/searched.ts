export class Searched {
    type: string;
    title: string;
    title_kor: string;
    mal_id: number;
    img: string;
    premiered: {
        year: number,
        quarter: number
    };
}

export class MalSearched {
    type: string;
    title: {
        kor: string,
        eng: string,
        jpn: string
    };
    premiered: {
        year: number,
        quarter: number
    };
    aired: {
        start: string,
        end: string
    };
    episodes: number; // can be null when it is a movie
    studios: string[];
    mal_id: number;
    img: string;
}
  
export interface SendingSearchedProtocol {
    search: {
        text: string,
        option: string
    },
    malSearched: MalSearched
}

export function searchedProtocolFactory(text: string, option: string): SendingSearchedProtocol {
    return {
        search: {text: text, option: option},
        malSearched: null
    };
}
