Clinical Affairs Local Development
==================================
Reviewed by Wilbur, 2022-05-23

# Project Details
- **NAME:**  clinicalaffairs
- **URL:** https://clinicalaffairs.umn.edu/ 
- https://clinicalaffairs-d8.dev.umn.edu/ 
- **LOCAL URL:** http://clinicalaffairs.docksal.site
- **BRANCH:** main

## UMN Site Dashboard
https://drupalmanagement.umn.edu/clinicalaffairs.umn.edu-1

- [EC: Local development requirements](https://docs.google.com/document/d/1_yeISu5bW5637TCeXByi82LUUfD1jeeSDHh5IeiPz4o/edit?usp=sharing)

- [EC: Developing on UMN](https://docs.google.com/document/d/1Il3u6HYlCxwWeEljtqEBH9pon69DPhKpg2ZvDYvmWLo/edit)

# Local Development Setup

`cd ~/Projects`

`git clone -b 9.x-prod git@github.umn.edu:drupalplatform/d8-composer.git clinicalaffairs`

`cd clinicalaffairs/`

`composer install`

`cd docroot/sites`

`rm -rf default`

`git clone -b develop git@github.umn.edu:oaca/clinicalaffairs-d8.git default`

`cd default`

`composer install`

`cd docksal`

`./install.sh`  

`cd ~/Projects/clinicalaffairs/`

`fin start`

`fin hosts add`

**Get Current Database**

Pull the latest website database from the UMN Deployment website:
https://drupalmanagement.umn.edu/clinicalaffairs.umn.edu-1

Copy the database file to the project folder:
`~/Projects/clinicalaffairs`

**Load the downloaded DB**

`gunzip -dfkv <<downloaded-db-name.sql.gz>>`

`fin db import <<downloaded-db-name.sql>>`

`fin drush cr`

`fin drush cim -y`

`fin drush uli`

Open the generated login URL and you should be set to go.

# Local Development Refresh

`cd ~/Projects/clinicalaffairs`

`git pull`

`rm -rf vendor`

`fin restart`

`fin composer install`

`cd docroot/sites/default`

`git checkout develop`

`git pull`

`rm -rf vendor`

`fin composer install`

`fin restart`

**Get the current database**

Pull the latest website database from the UMN Deployment website:
https://drupalmanagement.umn.edu/clinicalaffairs.umn.edu-1

Copy the database file to the project folder:

`cd ~/Projects/clinicalaffairs`

**Load the database**

`gunzip -dfkv <<downloaded-db-name.sql.gz>> `

`fin db import <<downloaded-db-name.sql>>`

`fin drush cr`

`fin drush cim -y`

`fin drush uli`

Open the generated login URL and you should be set to go.

# More Information

## Theming
The active theme for this project is **oaca_subtheme**:
`~/Projects/clinicalaffairs/docroot/sites/default/themes/oaca_subtheme`

See the THEME-INSTALL.md file inside of the theme root for install instructions.
`~/Projects/clinicalaffairs/docroot/sites/default/themes/oaca_subtheme/THEME-INSTALL.md`

# Project Legend
## Docksal Images
- DB - docksal/db:mysql:5.7
- CLI - docksal/cli:php8.0
- SOLR - docksal/solr:1.0-solr3

See `~/Projects/clinicalaffairs/docroot/sites/default/docksal/docksal.yml` 

## settings.docksal.php
- base_url
- CSS/JS aggregation
- database connection
- file paths
- permissions_hardening
- system_logging level
- trusted_host_pattern

See `~/Projects/clinicalaffairs/docroot/sites/default/settings.docksal.php`

# Enabling Xdebug

Copy the `.docksal/docksal-local.yml.default` file to the .docksal folder as `docksal-local.yml` and ensure that `XDEBUG_ENABLED=1`

Open `.docksal/etc/php/php.ini` and uncomment the three lines of code directly under [xdebug]:

```
[xdebug]
xdebug.mode=debug
xdebug.discover_client_host=1
xdebug.client_host=192.168.64.100
```

Run `fin restart` to restart the Docksal project.
