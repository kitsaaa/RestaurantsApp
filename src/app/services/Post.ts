import { IComment } from "./Comment";

export class IPost {
    _id: string = "";
    title: string = "";
    postDate: string = "";
    featuredImage: string = "";
    post: string = "";
    postedBy: number = 0;
    rating: string = "";
    comments: IComment[] = [];
    isPrivate: boolean = false;
    views: number = 0;
    category: string = '';
}