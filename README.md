# ShopMore is ServerLess

ShopMore the catalog.


## Development

Supported environment: Mac OSX Big Sur, Linux Ubuntu 20, Windows 10 with WSL 2

Other environments may work, but YMMV (aka, it is up to you...).

The first time, run `bash setup.sh`

Every time you start to work, initialize the environment with `source init.src`

Occasionally, when the init script will tell you, run `bash setup.sh` again.


## Setup nimbella

Download [nim](https://docs.nimbella.com/install/).

Then login with `nim login`, it will ask for a github account.

Once logged in, get your namespace with `nim auth current` and put in `src/util.js`.
Be careful not committing your version of `util.js`.

Then you can build your code under `packages`.

Deploy it with `nim project deploy .`  from the top level folder of the project.

Look to this commit for an example of using a mock, an api call and rendering it in a template: [exampe](https://github.com/shopmore/shopmore-catalog/commit/c5f2cc114d47c98b91333eb1b07b1ac9d25bbd49).




 



