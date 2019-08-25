import { Item, ItemTitle } from './item';

export class Incompletion extends Item {
    type: string;
    title: ItemTitle;
    memo: string;
    mal_id: number;
    img: string;
    opened?: boolean;
    aired: string;
    studios: string[];
}
