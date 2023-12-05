import React, { useState, useEffect } from "react";
import { Configuration, OpenAIApi } from "openai";

import { TextField } from "../components/mui/TextField";

const OpenAITest = () => {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState<string | undefined>("");

  const [composition, setComposition] = React.useState(false);

  const keyPress = async (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!composition && e.code === "Enter") {
      setComposition(false);

      const configuration = new Configuration({
        organization: process.env.REACT_APP_ORGANIZATION_ID || "",
        apiKey: process.env.REACT_APP_OPENAI_API_KEY || "",
      });
      const openai = new OpenAIApi(configuration);
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 100,
        temperature: Math.random(),
      });
      setResponse(completion.data.choices[0].text);
    }
  };

  useEffect(() => {
    (async () => {
      const configuration = new Configuration({
        organization: process.env.REACT_APP_ORGANIZATION_ID || "",
        apiKey: process.env.REACT_APP_OPENAI_API_KEY || "",
      });
      const openai = new OpenAIApi(configuration);
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Hello!!",
        max_tokens: 100,
        temperature: Math.random(),
      });
      setResponse(completion.data.choices[0].text);
    })();
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        marginTop: 20,
        width: "70%",
      }}
    >
      <TextField
        fullWidth
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
        onKeyDown={(e) => keyPress(e)}
        onCompositionStart={() => setComposition(true)}
        onCompositionEnd={() => setComposition(false)}
      >
        {question}
      </TextField>
      <div style={{ fontSize: 16, marginTop: 20 }}>{response}</div>
    </div>
  );
};

export default OpenAITest;
