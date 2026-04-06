#!/usr/bin/env bash

# Set SITE_URI eg: 'healthaffairs.umn.edu'
SITE_URL='healthaffairs.umn.edu'

cd ../../../../
if [ ! -d .ddev ]; then
  echo -e "Add .ddev to project"
  ln -s docroot/sites/default/.ddev/ .ddev
fi

cd docroot/sites

if [ ! -d ${SITE_URL} ]; then
  echo -e "Add ${SITE_URL} symlink to project"
  ln -s default ${SITE_URL}
fi

if [ ! -d healthaffairs.dev.umn.edu ]; then
  echo -e "Add healthaffairs.dev.umn.edu symlink to project"
  ln -s default healthaffairs.dev.umn.edu
fi

if [ ! -d healthaffairs.stg.umn.edu ]; then
  echo -e "Add healthaffairs.stg.umn.edu symlink to project"
  ln -s default healthaffairs.stg.umn.edu
fi

cd default

echo "DDEV setup is complete..."
