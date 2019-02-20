
// modules
import cookie from './modules/cookie';
import mailChimp from './modules/mailChimp';
import video from './modules/video';
import search from './modules/search';
import toggle from './modules/toggle';
import tagmanager from './modules/tagmanager';
import tableOfContents from './modules/tableOfContents';

/**
 * Cookie handler (based on cookie bar ID)
 */
cookie('cookie-notification');

/**
 * Send form submission data to mailchimp
 */
// TODO: only load this init on contact/index and workshop/index
mailChimp();

/**
 * Play the video on the homepage
 */
// TODO: limit the loading of video script to only the homepage
video('js-video-homepage');

/**
 * Make elements on the page collapse
 */
toggle('data-toggle');

/**
 * Initialize the tagmanager
 */
tagmanager('GTM-K6DMN8N');

/**
 * Initialize  the table of contents
 */
tableOfContents('toc');

/**
 * External scripts
 */
require('./lib/pingdom/pa-5b22f622a42dbb00070002a5.js');
