export interface User {
   
    user_id:string,
    email:string,
    name:string,
    proImage?:string,
   
}

export interface LoginResponse{
    user:User,
     accessToken:string   
}