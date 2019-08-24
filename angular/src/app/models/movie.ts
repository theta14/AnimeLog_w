import { Completion, Series, Sequence } from './completion';

export class Movie extends Completion {
    category_tva: string;
    series: MovieSeries[];
    modifying?: MovieSequence;
}

interface MovieSeries extends Series {
    sequences: MovieSequence[]
}

export interface MovieSequence extends Sequence {
    aired: string,
    order: number
}
