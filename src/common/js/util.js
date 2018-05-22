export default function setMinHeight (obj, height) {
  obj.minHeight = document.documentElement.clientHeight - height
  window.onresize = function () {
    obj.minHeight = document.documentElement.clientHeight - height
  }
}
