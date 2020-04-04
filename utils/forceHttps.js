const forceHttps = (req, res, next) => {
  console.log(req.headers)
  const xfp =
    req.headers["X-Forwarded-Proto"] || req.headers["x-forwarded-proto"];
  if (xfp === "http") {
    res.redirect(301, `https://${hostname}${req.url}`);
  } else {
    next();
  }
}

module.exports = forceHttps