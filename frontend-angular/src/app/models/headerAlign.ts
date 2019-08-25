export abstract class HeaderAlign<T> {
    private items: T[][];
    alignedAs: number[];
    alignments: number[][] = [];

    constructor(alignedAs: number[], alignmentsCounts: number[]) {
        this.alignedAs = alignedAs;
        for (let i=0; i<alignmentsCounts.length; i++) {
            let arr: number[] = [];
            for (let j=0; j<alignmentsCounts[i]; j++) arr.push(1);
            this.alignments.push(arr);
        }
    }

    protected setItems(items: T[][]) {
        this.items = items;
    }

    protected setAlignments(alignmentsCounts: number[]) {
        this.alignments = [];
        for (let i=0; i<alignmentsCounts.length; i++) {
            let arr: number[] = [];
            for (let j=0; j<alignmentsCounts[i]; j++) arr.push(1);
            this.alignments.push(arr);
        }
    }

    protected abstract getAlignment(standard: number, num?: number): (a: T, b: T) => number;
    
    align(num?: number, standard?: number) {
        let numIsNotSet: boolean;
        if ( numIsNotSet = (num == undefined) ) num = 0;
        if ( standard ) this.alignedAs[num] = standard;
        if ( numIsNotSet ) this.items[num].sort(this.getAlignment(this.alignedAs[num]));
        else this.items[num].sort(this.getAlignment(this.alignedAs[num], num));
        this.alignments[num][this.alignedAs[num]] *= -1;
    }

    alignAll(standards?: number[]) {
        for (let [i, standard] of (standards ? standards : this.alignedAs).entries()) {
            this.align(i, standard);
        }
    }

}
