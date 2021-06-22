if ! test -d node_nodules
then npm install
fi
docker run  -d --name redis --rm -p 6379:6379 redis --requirepass password
export __NIM_REDIS_IP=127.0.0.1
export __NIM_REDIS_PASSWORD=password
export NODE_PATH=$PWD/node_modules
node --experimental-repl-await
docker kill redis

