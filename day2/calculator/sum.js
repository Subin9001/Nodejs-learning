const sumRequestHandler = (req, res) => {
  console.log("Sum request handler called", req.url, req.method);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));

  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    console.log(bodyObj);
    const result = Number(bodyObj.num1) + Number(bodyObj.num2);
    console.log(result);
    res.write(`
      <html>
        <body>
          <h1>Sum Result</h1>
          <p>The sum of ${bodyObj.num1} and ${bodyObj.num2} is ${result}.</p>
        </body>
      </html>`);
    return res.end();
  });
};
exports.sumRequestHandler = sumRequestHandler;
