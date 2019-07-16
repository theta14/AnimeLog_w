import { Completion, Series, Sequence } from './completion';
import { MalSearched, Aired } from './searched';

export class Tva extends Completion {
    category_movie: string;
    series: TvaSeries[];
    modifying?: TvaSequence;
    fromMalSearched(malSearched: MalSearched) {
        if ( !this.modifying || !malSearched ) return;
        this.modifying.title.eng = malSearched.title.eng;
        this.modifying.title.jpn = malSearched.title.jpn;
        this.modifying.premiered.year = malSearched.premiered.year;
        this.modifying.premiered.quarter = malSearched.premiered.quarter;
        this.modifying.aired = <Aired> malSearched.aired;
        this.modifying.episodes = malSearched.episodes;
        this.modifying.studios = malSearched.studios;
    }
}

interface TvaSeries extends Series {
    sequences: TvaSequence[]
}

interface TvaSequence extends Sequence {
    premiered: {
        year: number,
        quarter: number
    },
    aired: {
        start: string,
        end: string
    },
    season: number,
    episodes: number
}

export function setTvaFromMalSearched(sequence: TvaSequence, malSearched: MalSearched) {
    if ( !sequence || !malSearched ) return;
    sequence.title.eng = malSearched.title.eng;
    sequence.title.jpn = malSearched.title.jpn;
    sequence.premiered.year = malSearched.premiered.year;
    sequence.premiered.quarter = malSearched.premiered.quarter;
    sequence.aired = <Aired> malSearched.aired;
    sequence.episodes = malSearched.episodes;
    sequence.studios = malSearched.studios;
}
