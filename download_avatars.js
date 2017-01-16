var request = require('request');

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
    }
    if (response.statusCode === 200) {
      var data = JSON.parse(body);
      console.log(data);
    }
  });
    // .on('error', function(err) {
    //   throw err;
    // })
    // .on('response', function(response) {
    //   console.log(body);
    // })
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});