const ns = "mirellas-m3xkm2azdvl"
const base = "https://"+ns+"-apigcp.nimbella.io/api/"

exports.get = function(path) {
    return fetch(base+path).then(x => x.json())
}


