var express = require("express");
var app = express();
app.get("/reg", (req, res) => {
  console.log(req.query);
  res.send("hi this is server");
});

app.use(express.json())
app.post("/",(req, res) => {
  fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
      "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "model": "meta-llama/llama-3.2-3b-instruct",
      "messages": [
        {
          "role": "user",
          "content": req.body.msg
        }
      ]
    })
  }).then (val=>{
    return val.json() 
  }).then((val)=>{
    res.send(val)
  })
});
app.listen(3004, () => {
  console.log("server has been started");
});






















//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