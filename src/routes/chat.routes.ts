import { Router } from 'express';
import openAiApi from '../OpenAi/openAiConfig';

const chatRouter = Router();


chatRouter.get('/', (request, response) => {
});

chatRouter.post('/message', (request, response) => {
    
    openAiApi
    .chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "How can I Learn JS?" }],
    })
    .then((res:any) => {
      console.log(res.data.choices[0].message.content);
    })
    .catch((e) => {
      console.log(e);
    });
// TODO CRIAR RETORNO DA ROTA
});

export default chatRouter;