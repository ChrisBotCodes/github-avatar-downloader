var argOwner = process.argv[2];
var argRepo = process.argv[3];

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

  if (argRepo === undefined || process.argv.length > 4) {
    throw "Program needs two arguments - user name and repo name";
  } else {
    request.get(options, function(error, response, body) {
      // deal with a possible error:
      if (error) {
        return error;
      };
      if (response.statusCode === 200) {
        var data = JSON.parse(body);
        cb(error, data);
      }
    });
  }
}

getRepoContributors(argOwner, argRepo, function(err, result) {
  if (err) {
    throw err;
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