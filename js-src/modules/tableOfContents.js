/**
 * loopThroughLinks
 * @param list
 * @param callback
 */
const loopThroughLinks = (list, callback) => {
  if (list != null) {
    const listItems = list.getElementsByTagName('a');
    for (let i = 0; i < listItems.length; i++) {
      callback(listItems[i]);
    }
  }
};

/**
 * setLinkCursive
 * @desc sets the link in cursive if it's the current page
 * @param item
 */
const setLinkCursive = item => {
  // removes '#' and query parameters
  const currentPageUrl = window.location.origin + window.location.pathname;
  if (item.href === currentPageUrl) {
    item.classList.add('current');
  }
};

/**
 * setNewTabs
 * @desc sets target '_blank' if link is on same domain
 * @param item
 */
const setNewTabs = item => {
  if (item.hostname !== window.location.hostname) {
    // eslint-disable-next-line
    item.target = '_blank';
  }
};

/**
 * tableOfContents
 * @param id {string} | Id for the table of contents
 */
export default function(id) {
  loopThroughLinks(document.getElementById(id), setLinkCursive);
  loopThroughLinks(document.getElementById(id), setNewTabs);
}
