export default interface Message {
    message_id: string;
    conversation_id: string;
    senderuser_id: string;
    receiveruser_id: string;
    content: string;
    created_at: Date;
}