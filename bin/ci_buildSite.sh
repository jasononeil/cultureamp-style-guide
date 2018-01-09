#!/bin/bash
set -e
set -o pipefail
set -u

echo '--- Running `bin/setup` in Docker :docker:'
docker-compose run --rm style-guide-test bash 'bin/setup'

echo '--- Running `bin/buildSite` in Docker :docker:'
docker-compose run --rm style-guide-test bin/buildSite
