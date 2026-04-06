<?php

/**
 * @file
 * Site-specific settings for config sync and config_split.
 */

/**
 * Place the config directory inside the site repo.
 */
$settings['config_sync_directory'] = dirname(DRUPAL_ROOT) . '/docroot/sites/default/config/default';

if (isset($_ENV['AH_SITE_ENVIRONMENT'])) {
  $config['config_split.config_split.acquia']['status'] = TRUE;
  switch ($_ENV['AH_SITE_ENVIRONMENT']) {
    case 'dev':
      $config['config_split.config_split.dev']['status'] = TRUE;
      break;
    case 'test':
      $config['config_split.config_split.stage']['status'] = TRUE;
      break;
    case 'prod':
      $config['config_split.config_split.prod']['status'] = TRUE;
      break;
  }
}
else {
  $config['config_split.config_split.local']['status'] = TRUE;
}
