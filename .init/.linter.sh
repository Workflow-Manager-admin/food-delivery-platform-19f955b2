#!/bin/bash
cd /home/kavia/workspace/code-generation/food-delivery-platform-19f955b2/food_delivery_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

