var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

var GITHUB_USER = "ChrisBotCodes";
var GITHUB_TOKEN = "3d93e03339d18da2a27f4a0fb7c1eea42acf5a14";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  console.log(requestURL);
}

getRepoContributors("ChrisBotCodes", "github-avatar-downloader", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});