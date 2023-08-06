export default interface Post {
    // profile: string,
    // name : string,
    // email: string,
    // password: string,
    // address: string ,
    // birthdate: string,
    postId: string,
    user: {
        userId: string,
        userImage: string,
        userName: string,
    }
    type: string,
    title: string,
    body?: string,
    imageUrl?: string,
    videourl?: string,
    like: number,
    share: number,
    createdAt: Date
}

