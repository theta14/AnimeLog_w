import { Completion, Series, Sequence } from './completion';

export class Movie extends Completion {
    category_tva: string;
    series: MovieSeries[];
}

interface MovieSeries extends Series {
    sequences: MovieSequence[]
}

interface MovieSequence extends Sequence {
    aired: string,
    order: number
}
