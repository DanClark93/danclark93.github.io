module.exports = data => `<?xml version="1.0" encoding="utf-8" ?>
<entry xmlns="http://www.w3.org/2005/Atom" xmlns:age="http://purl.org/atompub/age/1.0" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:cpi="http://xmlns.new.co.uk/types" xmlns:web="http://thetimes.co.uk">

  <id>http://s3-eu-west-1.amazonaws.com/nuk-tnl-editorial-prod-staticassets/public/takeover-pages/${
    data.slug
  }/${data.articleId}</id>

  <identifier>${data.articleId}</identifier>

  <updated>${data.updatedDate}</updated>
  <published>${data.publishedDate}</published>

  <category term="article"/>
  
  <author>
    <name>${data.author.name}</name>
  </author>

  <title>${data.title}</title>

  ${data.summary ? `<summary>${data.summary}</summary>` : ''}

  <cpi:shorttitle>${data.shortTitle}</cpi:shorttitle>
  <cpi:strapline>${data.strapline}</cpi:strapline>
  <cpi:subtitle>${data.subtitle}</cpi:subtitle>
  <cpi:standfirst>${data.standfirst}</cpi:standfirst>
  <cpi:label>${data.label}</cpi:label>
  <cpi:publication>${data.publication}</cpi:publication>

  <cpi:slug>${data.slug}</cpi:slug>

  ${
    data.leadAssetId
      ? `<cpi:leadassetid>${data.leadAssetId}</cpi:leadassetid>`
      : ''
  }

  <cpi:times_templateid>blank-default</cpi:times_templateid>
  <version>1</version>
  <region/>

  <cpi:comments>
    <disabled>${data.comments.disabled}</disabled>
    <premoderated>${data.comments.premoderated}</premoderated>
  </cpi:comments>

  <content type="xhtml">
    <div xmlns="http://www.w3.org/1999/xhtml"><media type="server-component" id="${
      data.componentId
    }" /></div>
  </content>
  <age:expires/>
  <cpi:status>WebFlow/Published</cpi:status>
  <link rel="related" href="http://s3-eu-west-1.amazonaws.com/nuk-tnl-editorial-prod-staticassets/public/takeover-pages/${
    data.slug
  }/${data.componentId}" type="application/atom+xml; type=entry"></link>
  ${
    data.leadAssetId
      ? `<link rel="related" href="https://nu-hub-prod.s3.amazonaws.com/methode/times/prod/web/assets/${
          data.leadAssetId
        }" type="application/atom+xml; type=entry"></link>`
      : ''
  }
</entry>`;
