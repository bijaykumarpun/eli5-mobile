export interface Message {
  id: string;
  data: string;
}

export interface Conversation {
  messages: Message[];
}
