import { PageEvent } from "@angular/material";
import { TvaSequence, Tva } from 'src/app/models/tva';
import { MovieSequence, Movie } from 'src/app/models/movie';
import { Watching } from 'src/app/models/watching';
import { Plan } from 'src/app/models/plan';
import { Sequence } from 'src/app/models/completion';

export interface Carousel {
    type: string,
    title: string,
    content: string,
    link: string
}

export interface PageEvents {
    tva: PageEvent,
    movie: PageEvent,
    watching: PageEvent,
    plan: PageEvent
}

interface Detail {
    _id: string,
    series: number,
    sequence: number,
    seriesTitle: string
}

export interface SearchedSequence extends Sequence, Detail {}
interface SearchedTvaSequence extends TvaSequence, Detail {}
interface SearchedMovieSequence extends MovieSequence, Detail {}

class Shapes {
    tvas: any[];
    movies: any[];
    watchings: Watching[];
    plans: Plan[];

    constructor() {
        this.tvas = [];
        this.movies = [];
        this.watchings = [];
        this.plans = [];
    }
}

export class Items extends Shapes {
    tvas: Tva[];
    movies: Movie[];

    constructor() {
        super();
    }
}

export class SearchedItems extends Shapes {
    tvas: SearchedTvaSequence[];
    movies: SearchedMovieSequence[];

    constructor() {
        super();
    }
}
