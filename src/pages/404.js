import React from "react";

import { PageTemplate } from "../components/pageTemplate";

export default () => {
  return (
    <PageTemplate
      title="Error 404"
    >
      <div class="container">
        <div class="content_fullwidth">
          <div class="error_pagenotfound">
            <strong>404</strong> <br /> Oops... Page Not Found!<br /> <em>Sorry the Page Could not be Found here.</em>
            <p>Try using the button below to go to main page of the site</p>
            <div class="clearfix mar_top3">&nbsp;</div>
            <a class="but_goback" href="/">&nbsp; Strona główna</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}