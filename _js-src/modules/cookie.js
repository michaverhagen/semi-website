/**
 * setCookie
 * @param cname
 * @param cvalue
 * @param exdays
 * @private
 */
const setCookie = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

/**
 * getCookie
 * @param cname
 * @returns {*}
 * @private
 */
const getCookie = cname => {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return false;
};

/**
 * Starts the cookie process
 * @param id {string} | element id of the cookie bar
 */
export default function(id) {
  const cookieBar = document.getElementById(id);
  const cookieCloseButton = cookieBar.querySelector('#js-cookie-button');
  const body = document.getElementsByTagName('body')[0];

  /** show cookie notification if no consent has been given */
  if (getCookie('cookieConsent') === false) {
    cookieBar.style.display = 'flex';
    body.classList.add('cookie-notice--active');
  }

  /**
   * Set cookies and close bar by clicking 'accept & close'
   * @type {HTMLElement}
   */
  cookieCloseButton.addEventListener(
    'click',
    () => {
      cookieBar.style.display = 'none';
      setCookie('cookieConsent', true, 100);
      body.classList.remove('cookie-notice--active');
    },
    false,
  );
}
