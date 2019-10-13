export class Ohli {
    id: number;
    title: string;
    aired: string;
    img: string;
}

export interface SendingOhliProtocol {
    title: string,
    ohli_id: number,
    year?: number
}
