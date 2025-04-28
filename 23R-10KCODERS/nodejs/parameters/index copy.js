var http = require("http");

var server = http.createServer(async (req, res) => {
  var url = require("url");
  console.log(req.url);
  var parsedurl = url.parse(req.url, true);
  console.log(parsedurl.query);

  var data = await fetch("https://fakestoreapi.com/products");
  var data1 = await data.json();
  var cate = parsedurl.query.cat;
  console.log(cate);

  if (cate === "m") {
    var mens = data1.filter((val) => val.category === "men's clothing");
    res.write(JSON.stringify(mens));
    res.end();
  } else if (cate === "w") {
    var womens = data1.filter((val) => val.category === "women's clothing");
    res.write(JSON.stringify(womens));
    res.end();
  } else if (cate === "e") {
    var electronics = data1.filter((val) => val.category === "electronics");
    res.write(JSON.stringify(electronics));
    res.end();
  } else if (cate === "j") {
    var jewelery = data1.filter((val) => val.category === "jewelery");
    res.write(JSON.stringify(jewelery));
    res.end();
  } else {
    res.write(JSON.stringify(data1));
    res.end();
  }
});

var port = 3000;
server.listen(port, () => {
  console.log("hi server has been started");
});
