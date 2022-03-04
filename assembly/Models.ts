import { PersistentVector } from "near-sdk-as";

@nearBindgen
export class User{
    UserId: string;
    Email:string;
    Coins:number;
    VideoGames: Array<string>;

    constructor(UserId: string, Email:string) {
        this.UserId = UserId;
        this.Email = Email;
        this.Coins = 100;
    }
}
@nearBindgen
export class VideoGame{
    public Name: string;
    public Price: number;

    constructor(Name: string, Price: number) {
        this.Name = Name;
        this.Price = Price;
    }
}
export const Users = new PersistentVector<User>("u");
export const VideoGames = new PersistentVector<VideoGame>("v");
//"build": "npm run build:contract && npm run build:web",