module.exports = data => `<?xml version="1.0" encoding="utf-8" ?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:age="http://purl.org/atompub/age/1.0" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:cpi="http://xmlns.new.co.uk/types" xmlns:web="http://thetimes.co.uk">

  <id>http://nuk-tnl-editorial-prod-staticassets.s3.amazonaws.com/public/takeover-pages/${
    data.slug
  }/${data.componentId}</id>
  <identifier>${data.componentId}</identifier>
  <updated>${data.updatedDate}</updated>
  <published>${data.publishedDate}</published>
  <version>1</version>
  <region/>
  <category term="server-component"/>
  <age:expires/>
  <cpi:publication>${data.publication}</cpi:publication>
  <cpi:caption type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml">times-armistice</div>
  </cpi:caption>

  <authorised>
    <component_styles></component_styles>
    <component_scripts>
      <component_script>
        <url>//extras.thetimes.co.uk/web/public/takeover-pages/${
          data.slug
        }/index.js?v=${data.updatedDate}</url>
        <name>${data.slug}-script</name>
      </component_script>
    </component_scripts>
    <component_content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><style>.Container.Container--blank{background-color:#F5EFEC;}${
      data.criticalCss
    }</style><div id="times-armistice-app" class="times-armistice-app times-armistice-app__authenticated">${
  data.htmlAuth
}</div></div></component_content>
    <component_context></component_context>
  </authorised>

  <unauthorised>
    <component_styles></component_styles>
    <component_scripts>
      <component_script>
        <url>//extras.thetimes.co.uk/web/public/takeover-pages/${
          data.slug
        }/index.js?v=${data.updatedDate}</url>
        <name>${data.slug}-script</name>
      </component_script>
    </component_scripts>
    <component_content type="xhtml"><div xmlns="http://www.w3.org/1999/xhtml"><style>.Container.Container--blank{background-color:#F5EFEC;}${
      data.criticalCss
    }</style><div id="times-armistice-app" class="times-armistice-app times-armistice-app__unauthenticated">${
  data.htmlUnAuth
}</div></div></component_content>
    <component_context></component_context>
  </unauthorised>

</entry>`;
