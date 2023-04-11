import { IComment } from "./Comment";

export class IPost {
    _id: string = "";
    title: string = "";
    postDate: string = "";
    featuredImage: string = "";
    post: string = "";
    postedBy: string = "";
    rating: number = 0;
    numberOfRatings: number = 0;
    comments: IComment[] = [];
    isPrivate: boolean = false;
    views: number = 0;
    category: string = '';
}