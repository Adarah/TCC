#!/usr/bin/env bash
podman-compose down
podman volume prune -f
podman-compose up -d
