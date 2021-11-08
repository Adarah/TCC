#!/usr/bin/env bash
set -eo pipefail

while getopts "e:p" opt; do
  case $opt in
    e)
	declare -a exceptions
	declare -A except
	IFS=,; read exceptions <<< "$OPTARG"
	for e in "${exceptions[@]}"; do
	  echo "$e"
	  except[$e]=1
	done
	exit 1
    ;;
    p)
	PRUNE=1
    ;;
  esac
done


SCRIPT_DIR=$(dirname $(realpath -s "$0"))
(
	trap "kill 0" EXIT
	if [[ ! ${except['admin']} ]]; then
	  echo 'starting admin'
	  cd "$SCRIPT_DIR/admin"
	  npm start &
	fi
	if [[ ! ${except['firebase']} ]]; then
	  echo 'starting firebase'
	  cd "$SCRIPT_DIR/backend/firebase/functions"
	  npm run emulators:start &
	fi
	if [[ ! ${except['backend']} ]]; then
	  echo 'starting backend'
	  cd "$SCRIPT_DIR/backend/hasura/hasura-functions"
	  npm run start:dev &
	fi
	if [[ ! ${except['writer']} ]]; then
	  echo 'starting writer'
	  cd "$SCRIPT_DIR/backend/mqtt-metrics-writer"
	  npm run start:dev &
	fi
	echo 'starting hasura'
	cd "$SCRIPT_DIR/backend/hasura"
	if [[ $PRUNE ]]; then
	  docker volume prune -f
	fi
	docker compose up
)
