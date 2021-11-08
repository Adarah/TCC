#!/usr/bin/env bash
set -euo pipefail

read -rp "Enter the userId: " userId

TEMP_FILE="seeds/default/tmp.sql"
function cleanup() {
  rm -f "$TEMP_FILE"
}

trap 'echo "cleaning up"; cleanup' EXIT

for seed in seeds/default/*.sql; do
  [[ -e "$seed" ]] || continue
  sed "s/fakeId/$userId/g" seeds/default/*.sql > "$TEMP_FILE"
  hasura seed apply -f "${TEMP_FILE##*/}" --admin-secret myadminsecretkey
done;

trap - EXIT
cleanup
