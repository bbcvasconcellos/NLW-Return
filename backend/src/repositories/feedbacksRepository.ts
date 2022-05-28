export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

//essa interface diz quais são as operações que podemos realizar no banco de dados
export interface FeedbacksRespository {
  create: (data: FeedbackCreateData) => Promise<void>;
}
