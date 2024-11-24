#!/bin/sh
SECONDS=0
echo Beginning Sequelize migration...
node_modules/.bin/sequelize --migrations-path src/migrations db:migrate

echo Seeding tables...
node_modules/.bin/sequelize --seeders-path src/seeders db:seed:all

ELAPSED="Migration Completed in: $((SECONDS / 3600))hrs $(((SECONDS / 60) % 60))min $((SECONDS % 60))sec"
echo $ELAPSED