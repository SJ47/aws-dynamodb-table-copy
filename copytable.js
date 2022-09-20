var copy = require('copy-dynamodb-table').copy

var globalAWSConfig = { // AWS Configuration object http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
    accessKeyId: 'enter key here',
    secretAccessKey: 'enter key here',
    region: 'enter region here'
}

copy({
    config: globalAWSConfig, // config for AWS
    source: {
        tableName: 'enter source table name here', // required
    },
    destination: {
        tableName: 'enter destination table name here', // required
    },
    log: true, // default false
    create: true // create destination table if not exist
},
    function (err, result) {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })