import { PersistentVector } from "near-sdk-as";

@nearBindgen
export class User{
    UserId: string;
    Email:string;
    //MyVideoGames = new PersistentVector<string>("v");

    constructor(UserId: string, Email:string) {
        this.UserId = UserId;
        this.Email = Email;
    }
}
@nearBindgen
export class VideoGame{
    public Name: string;
    public Price: string;

    constructor(Name: string, Price: string) {
        this.Name = Name;
        this.Price = Price;
    }
}
export const Users = new PersistentVector<User>("u");
export const VideoGames = new PersistentVector<VideoGame>("v");