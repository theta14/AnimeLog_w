import { Item } from './item';

export class Incompletion extends Item {
    type: string;
    title: string;
    memo: string;
    mal_id: number;
    img: string;
    opened?: boolean;
    premiered: {
        year: number,
        quarter: number
    };
    aired: string;
    studios: string[];
}
