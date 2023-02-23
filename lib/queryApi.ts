import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const res = await openai
    .createCompletion({
      model,
      prompt,
      max_tokens: 2048,
      temperature: 0.9,
      top_p: 1,
      presence_penalty: 0.3,
      frequency_penalty: 0.3,
      stream: true,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) =>
        `WepjeGPT was unable to answer your question. Please try again later. (Error: ${err.message})`
    );
    return res;
};

export default query;
