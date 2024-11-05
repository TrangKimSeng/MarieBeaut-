<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '&37.,IKQbb:q@>+*Iw/N{PO9mBT37|K8ZD)L=p6cY`7ZWd2|G}Qju.BEs75 hNSk' );
define( 'SECURE_AUTH_KEY',   'o_-`i3@FJzfp<xBpM*}aF)#SU!pq6,ditktR3CK! r(Qae^{3T-?:$e/O:+/)@PA' );
define( 'LOGGED_IN_KEY',     '{v#7#!q19Z4%u0A01*2+<X1^oUHUouRbwc/`/;W!Lp?d#OLy>]&Ntbx3&Q;M8DqN' );
define( 'NONCE_KEY',         '~={f_*DQM(yN+!C#GdO_#ujP1v&@0f|Wj3$<fS0+Sw;cwRJo7[yX7NmO2jqGa*|m' );
define( 'AUTH_SALT',         '+/:aG:v;F8G3u2%?s-Bsf%QCy8~z1_,9.]&@(-lerNGyoM{bkhHhQq<6)I;m:lhW' );
define( 'SECURE_AUTH_SALT',  'BKSzL?y^V7]e.-<.AwD7>DTtYqhP%zpJT|_YEwO_;+.@>l`{l$@1  x<y(=xEbb-' );
define( 'LOGGED_IN_SALT',    ':}j2]M|RvP>3#@FDS?;}(xwQZpxo]dGP!3.l@$TBSzX^t9mfxB#It]y9xb0V+Ci!' );
define( 'NONCE_SALT',        '.rys{?a^y2F]SO)ysz:b7o(L=},MWh=L:zPW(nJt6j;YiEC?dHY2)q!/{iJGrn=C' );
define( 'WP_CACHE_KEY_SALT', '^T<R>j49ETfIHl`IxLwE5VaIrdrGZje9d}-b&3qZE<3GEC %|60CuuJbE!(_*%iB' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
