/*!
 * TailorCSS v0.1.0
 * www.tailorcss.com
 *
 * Copyright 2013, Ivan Torres
 * Released under the MIT license.
 */
(function (window, document, navigator) {

  'use strict';

  var browser, classes, el, match, os, ua;

  if (!document || !navigator) return;

  classes = ['js'];
  el = document.documentElement;
  ua = navigator.userAgent.toLowerCase();

  // Browser brand
  match =
    /(chrome|firefox|kindle|opera|safari|msie)/.exec(ua) ||
    /(trident)\/[\d.]+; rv ([\d]+)/.exec(ua) || /* IE 11? */
    /(opera)(?:.*version)?[ \/]([\d]+)/.exec(ua) ||
    [];
  if (match.length) classes.push(match[1] == 'trident' || match[1] == 'msie' ? 'ie' : match[1]);

  // Browser breed
  match = /(gecko|trident|webkit)[ \/]([\d]+)/.exec(ua) || [];
  if (match.length) classes.push(match[1]);

  // Specialized OS brands
  match = /(android|iphone|ipad)/.exec(ua) || [];
  if (match.length) classes.push(match[1]);

  // OS breed
  match = /(linux|mac|win)/.exec(ua) || [];
  if (match.length) classes.push(match[1]);

  el.className = el.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +
    ' ' + classes.join(' ');

})(this, this.document, this.navigator);
