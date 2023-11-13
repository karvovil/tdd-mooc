#!/usr/bin/env bash
set -euxo pipefail

frontend_response=$(curl --silent --show-error http://localhost:8080/)
test "$frontend_response" = "Hello from frontend"

backend_response=$(curl --silent --show-error http://localhost:8080/api/)
test "$backend_response" = "Hello from backend"

: OK
