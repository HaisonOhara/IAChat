"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    organization: "org-rDrlShdTz7ROCkDm1gT2l7vZ",
    apiKey: "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",
});
// Modelo de request // Atentar se para o modelo do request
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
