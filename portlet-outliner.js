/**
 * Portlet Outliner
 * @author Hampus Nordin <nordin.hampus@gmail.com>
 * @version 0.1.0
 */

/* Use https://jscompress.com/ (or other online minifier) to compress the script below. */

(function (document, linkId, href) {
  var link = document.getElementById(linkId);

  if (!link) {
    link = document.createElement('link');

    link.setAttribute('id', linkId);
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', href);

    document.head.appendChild(link);
  }
  else {
    link.sheet.disabled = !link.sheet.disabled;
  }
})(document, 'portlet-outliner', 'https://hampusn.github.io/portlet-outliner/portlet-outliner.css');
