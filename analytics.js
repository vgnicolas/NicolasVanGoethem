/* Cloudflare Web Analytics for NicolasVanGoethem GitHub Pages.
   To activate, replace the empty siteToken with the public
   token from Cloudflare Dashboard > Web Analytics > Manage site.
   Until the token is supplied, no analytics beacon is loaded. */
(function () {
  "use strict";
  var siteToken = "";
  if (!siteToken) return;
  var script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token: siteToken }));
  document.body.appendChild(script);
}());
