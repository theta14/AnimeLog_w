import { Item, ItemTitle } from './item';

export class Completion extends Item {
    opened?: CompletionOpened;
    category: string;
    series: Series[];
    modifying?: Sequence;
}

export interface Series {
    title: string,
    key: string,
    memo: string,
    sequences: Sequence[]
}

export interface Sequence {
    title: ItemTitle,
    studios: string[],
    memo: string,
    mal_id: number,
    img: string
}

interface CompletionOpened {
    series: number,
    sequence: number,
    linked?: {
        title: string,
        _id: string,
        series: number
    }
}
