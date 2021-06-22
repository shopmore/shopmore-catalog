function main(args) {
    let db = require("@nimbella/sdk").redis()
    let key = args.key
    let value = args.value
    return db.setAsync(key,value)
}

exports.main = main
