import OpenAI from "openai";
import readline from "readline";



const openai = new OpenAI({
    organization: "org-rDrlShdTz7ROCkDm1gT2l7vZ",
    apiKey: "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",
  });

openai
  .chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello" }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  })
  .catch((e) => {
    console.log(e);
  });

