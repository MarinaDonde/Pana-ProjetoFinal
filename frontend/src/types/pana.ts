export type Pana = {
    id: number;
    logourl: string;
    sobre: string;
    fburl: string;
    instaurl: string;
    mapaurl: string;
}

export type PanaList = {
    content: Pana[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}