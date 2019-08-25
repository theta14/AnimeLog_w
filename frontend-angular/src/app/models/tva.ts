import { Completion, Series, Sequence } from './completion';

export class Tva extends Completion {
    category_movie: string;
    series: TvaSeries[];
    modifying?: TvaSequence;
}

interface TvaSeries extends Series {
    sequences: TvaSequence[]
}

export interface TvaSequence extends Sequence {
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
