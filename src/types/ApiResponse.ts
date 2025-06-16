import { Message } from "@/models/User";

export interface ApiResonse {
    success:boolean;
    message:string;
    isAcceptingMessages?:boolean;
    messages?: Array<Message>
}