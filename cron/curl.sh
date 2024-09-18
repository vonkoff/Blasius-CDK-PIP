#!/bin/bash

curl -X POST "http://localhost:3000/cdk/dealers-salesclosed" \
  -H "Content-Type: application/json" \
  --max-time 90 \
  >> /home/ivukusic/Blasius/Blasius-CDK-PIP/cron/curl.log 2>&1

# # Path to the lock file file
# LOCK_FILE = "/home/ivukusic/Documents/my_script.lock"
#
# # Flock ensures only 1 instance runs at a time
# (
#   flock - n 200 || exit 1
#
#   curl -X POST "http://localhost:3000/cdk/dealers-salesclosed" \
#     -H "Content-Type: application/json" \
#     --max-time 90
# ) 200>"$LOCK_FILE"
