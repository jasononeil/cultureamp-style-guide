#!/bin/bash
set -e
set -o pipefail
set -u

echo '--- Running `installDeps.sh` in Docker :docker:'
docker-compose run --rm style-guide-test bash 'bin/setup'

echo '--- Running `yarn build` in Docker :docker:'
docker-compose run --rm style-guide-test yarn build