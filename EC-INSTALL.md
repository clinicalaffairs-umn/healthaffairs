Health Affairs Local Development
================================
Created: 2026-04-05

# Project Details
- **NAME:** healthaffairs
- **URL:** https://healthaffairs.umn.edu/
- **DEV URL:** https://healthaffairs.dev.umn.edu/
- **STG URL:** https://healthaffairs.stg.umn.edu/
- **LOCAL URL:** http://healthaffairs.ddev.site
- **BRANCH:** main

## UMN Site Dashboard
<!-- Update with the actual dashboard URL when available -->
https://drupalmanagement.umn.edu/healthaffairs.umn.edu

## Requirements and platform docs

- [EC: Local development requirements](https://docs.google.com/document/d/1_yeISu5bW5637TCeXByi82LUUfD1jeeSDHh5IeiPz4o/edit?usp=sharing)
- [EC: Developing on UMN](https://docs.google.com/document/d/1Il3u6HYlCxwWeEljtqEBH9pon69DPhKpg2ZvDYvmWLo/edit)

# Local Development Setup

```bash
cd ~/Projects
```

Clone the UMN platform repo:

```bash
git clone -b 11.x-prod git@github.umn.edu:drupalplatform/d8-composer.git healthaffairs
cd healthaffairs/
```

Install platform dependencies (may hang during patching — Ctrl-C and continue if so):

```bash
composer install
```

Clone the site repo into `docroot/sites/default`:

```bash
cd docroot/sites
rm -rf default
git clone -b main git@github.com:clinicalaffairs-umn/healthaffairs.git default
cd default
```

Install site-specific dependencies:

```bash
composer install
```

Run the DDEV setup script:

```bash
cd .ddev
./install.sh
```

Start DDEV (must be run from project root):

```bash
cd ~/Projects/healthaffairs
ddev start
ddev auth ssh
```

If `composer install` hung earlier, run it again inside DDEV:

```bash
ddev composer install
```

## Get Current Database

Pull the latest database from the UMN Deployment website:
https://drupalmanagement.umn.edu/healthaffairs.umn.edu

Copy the database file to the project root (`~/Projects/healthaffairs`).

## Load the Database

```bash
gunzip -dfkv <downloaded-db-name.sql.gz>
ddev import-db --file=<downloaded-db-name.sql>
ddev drush cr
ddev drush cim -y
ddev drush uli
```

Open the generated login URL and you should be set to go.

# Local Development Refresh

```bash
cd ~/Projects/healthaffairs
```

Confirm there is no uncommitted config on the LIVE site.

```bash
git pull
rm -rf vendor
ddev start
ddev composer install

cd docroot/sites/default
git checkout main
git pull
rm -rf vendor
ddev composer install

cd ~/Projects/healthaffairs
ddev restart
```

Get and load a fresh database (same steps as initial setup above).

```bash
ddev drush cr
ddev drush cim -y
ddev drush uli
```

# Uncommitted Config Changes on the LIVE site

The UMN platform is constantly updated, so this site may contain config changes
not committed to the code repo. Check for uncommitted config before building or
updating your local install.

## Check for uncommitted config changes
https://healthaffairs.umn.edu/admin/config/development/configuration

If there are changes, export the config as files:
https://healthaffairs.umn.edu/admin/config/development/configuration/full/export

## Full Export
- Export a full archive of the site's config at the link above.
- Extract the files and place them in the config directory: `config/default/`
- Commit the updated files and push.

## Single Item Export
- If only a few config items changed, export them individually.
- Place the files in the config directory: `config/default/`

# Enabling Xdebug

```bash
ddev xdebug on
```

To disable:

```bash
ddev xdebug off
```
