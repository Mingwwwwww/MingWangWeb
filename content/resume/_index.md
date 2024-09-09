---
title: ""
summary: My CV
---

<div id="adobe-dc-view" style="width: 140%; height: 600px; margin: 0 auto;transform: translateX(-12%);"></div>

<script src="https://documentcloud.adobe.com/view-sdk/viewer.js"></script>

<script type="text/javascript">
  document.addEventListener("adobe_dc_view_sdk.ready", function() { 
    var adobeDCView = new AdobeDC.View({clientId: "84641ad9f74a4865add79fb3f3b46bc5", divId: "adobe-dc-view", locale: "es-ES"});

    adobeDCView.previewFile({
      content: {location: {url: "/uploads/resume.pdf"}},
      metaData: {fileName: "resume.pdf"}
    }, {embedMode: "IN_LINE"});
  });
</script>

