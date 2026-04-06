<?php

/**
 * Import platform default settings.
 *
 * Sets database credentials, memcache integration, and fast 404 vars.
 */
if (file_exists(DRUPAL_ROOT . "/sites/base-settings.php")) {
    include(DRUPAL_ROOT . "/sites/base-settings.php");
}

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';

/**
 * Load site settings for config and split settings.
 */
if (file_exists(__DIR__ . '/settings.site.php')) {
  include __DIR__ . '/settings.site.php';
}

/**
 * Load local development override configuration, if available.
 *
 * Keep this code block at the end of this file to take full effect.
 */
if (file_exists(__DIR__ . '/settings.local.php')) {
  include __DIR__ . '/settings.local.php';
}

// Automatically generated include for settings managed by ddev.
$ddev_settings = __DIR__ . '/settings.ddev.php';
if (getenv('IS_DDEV_PROJECT') == 'true' && is_readable($ddev_settings)) {
  require $ddev_settings;
}
