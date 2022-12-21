const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

var ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {});


const stream = require('youtube-audio-stream')
async function handleView (req, res) {
  try {
    for await (const chunk of stream(`http://youtube.com/watch?v=${req.params.videoId}`)) {
      res.write(chunk)
    }
    res.end()
  } catch (err) {
    console.error(err)
    if (!res.headersSent) {
      res.writeHead(500)
      res.end('internal system error')
    }
  }
}