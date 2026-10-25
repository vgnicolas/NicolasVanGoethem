/* Cloudflare Web Analytics on vgnicolas.github.io/NicolasVanGoethem/
   The public beacon token identifies the user's Analytics site.
   Script loads once per page via the shared analytics.js include. */
(function () {
  "use strict";
  var siteToken = "eec9739b147e46968e283d0ce9f33469";
  var script = document.createElement("script");
  script.type = "module";
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token: siteToken }));
  document.body.appendChild(script);
}());
