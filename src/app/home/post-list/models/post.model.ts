export default interface Post {
    post_id: string,
    user?: {
        user_id: string,
        profile_photo: string,
        username: string,
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

