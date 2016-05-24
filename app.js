var express     = require("express");
var path        = require("path");
var fs          = require("fs");
var morgan      = require("morgan");

var app = express();

// Using Morgan as a logger instead.
app.use(morgan("short"));

// // Logs every request to your website.
// app.use(function(req, res, next) {
//     console.log("Request IP: " + req.ip);
//     console.log("Request date: " + new Date());
//     next();
// });

// Using Express' built-in static file middleware.
var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

// app.use(function(req, res, next) {
//     // Finds the path where file to be sent over should be.
//     var filePath = path.join(__dirname, "static", req.url);
//     // Gets info about a file.
//     fs.stat(filePath, function(err, fileInfo) {
//         // If fs.stat fails, continue to next middleware.
//         if (err) {
//             next();
//             return;
//         }
//         // If file exists, call res.sendFile.
//         if (fileInfo.isFile()) {
//             res.sendFile(filePath);
//         } else {
//             next();
//         }
//     });
// });

app.use(function(req, res) {
    res.status(404);
    res.send("File not found");
});

// Tells app to listen to 3000.
app.listen(3000, function() {
    console.log("App started on port 3000");
});
