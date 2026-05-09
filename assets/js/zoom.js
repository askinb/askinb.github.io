// Initialize medium zoom.
// Robust against Safari's stricter timing: try on document-ready and on full
// window load, but only bind once.
(function () {
  var bound = false;

  function initMediumZoom() {
    if (bound) return;
    if (typeof mediumZoom !== "function") return;
    bound = true;
    window.medium_zoom = mediumZoom("[data-zoomable]", {
      background: getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color") + "ee", // + 'ee' for transparency.
    });
  }

  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(initMediumZoom, 0);
  } else {
    document.addEventListener("DOMContentLoaded", initMediumZoom);
  }
  window.addEventListener("load", initMediumZoom);
})();
