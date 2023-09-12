import User from "../home/profile/user.model";


export interface LoginResponse{
    user:User,
     accessToken:string   
}