import { Incompletion } from './incompletion';

export class Watching extends Incompletion {
    premiered: {
        year: number,
        quarter: number
    };
    ohli_id?: number;
    modifying?: Watching;
    videos?: WatchingVideo[];
    ohys?: Ohys[];
    subtitles?: WatchingSubtitle[];
}

export interface WatchingVideo {
    date: string,
    name: string,
    magnet: string,
    size: number
}

export interface Ohys {
    name: string,
    link: string
}

export interface WatchingSubtitle {
    date: string,
    by: string,
    link: string,
    episode: number
}
