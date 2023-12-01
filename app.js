const express = require("express");
const app = express();
const port = 3000;
let booklog = {};

app.use(express.json());

// /booklogにPOSTリクエストが来たら、リクエストボディをbooklogに代入
app.post("/booklog", (req, res) => {
  booklog = req.body;

  if (!(booklog.name && booklog.text)) {
    // nameとtextが両方なかった場合true->errorを返し終了
    return res.json({
      ok: false,
      errror: "invalid params",
    });
  }

  res.json({
    ok: true,
    booklog: booklog,
  });
});

// /booklogにGETリクエストが来たら、booklogを返す
app.get("/booklog", (req, res) => {
  res.json({
    ok: true,
    booklog: [booklog],
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
