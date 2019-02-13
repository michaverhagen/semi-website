/**
 * start playing the selected <video> element
 * @param videoElementId {string} | the id of the <video> element
 */
export default function (videoElementId) {
  const el = document.getElementById(videoElementId);
  if (typeof(el) != 'undefined' && el != null) {
    el.play();
  }
}
