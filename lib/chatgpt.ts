import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-qLJwVkCZvEw87ODWKaKzKwxX",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default openai;