#!/bin/bash

source "$(dirname $0)/sql.src"

_exec "drop table t"
_exec "create table t(i int)"
_exec "insert into t(i) values(1),(2),(3)"
_map "select * from t"
_arr "select * from t"

