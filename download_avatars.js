var request = require('request');
var fs = require('fs');

console.log('Welcome to the GitHub Avatar Downloader!');

// create variables to help create the GitHub URL
var GITHUB_USER = "ChrisBotCodes";
var GITHUB_TOKEN = "3d93e03339d18da2a27f4a0fb7c1eea42acf5a14";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  // create object with a user-agent header (mandatory for API requests)
  var options = {
    url: requestURL,
    headers: {'user-agent': GITHUB_USER}
  };

  request.get(options, function(error, response, body) {
    // deal with a possible error:
    if (error) {
      return error;
    };
    if (response.statusCode === 200) {
      var data = JSON.parse(body);
      cb(null, data);
    }
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  if (err) {
    console.log("Errors:", err);
    return err;
  };
  for (var i = 0; i < result.length; i++) {
    downloadImageByURL(result[i].avatar_url, "./avatars/" + result[i].login + ".jpg");
  };
});

function downloadImageByURL(url, filePath) {
  request.get(url, function(response) {
  })
  .pipe(fs.createWriteStream(filePath));
}