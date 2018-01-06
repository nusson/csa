export function jsonp(url, callbackname, done) { // eslint-disable-line import/prefer-default-export
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  const s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(script, s);

  window[callbackname] = done;
}
