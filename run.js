var request = require('request')


print = console.log
var headers = {
    'User-Agent': 'boluobao/4.5.52(iOS;14.0)/appStore',
    'Host': 'api.sfacg.com',
    'Accept-Language': 'gzip, deflate, br',
    'Accept': 'application/vnd.sfacg.api+json;version=1',
    'Accept-Encoding': 'zh-Hans-US;q=1',
    'Connection': 'keep-alive',
    'Authorization': 'Basic YXBpdXNlcjozcyMxLXl0NmUqQWN2QHFlcg=='
};

var options = {
    url: 'https://api.sfacg.com/novels/0/sysTags/novels?',
    headers: headers
};

function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
        const jsonParsed = JSON.parse(body);
        console.log(jsonParsed.data[0]);
        return body
    }
}

var novels = request(options, callback).body

print(novels)