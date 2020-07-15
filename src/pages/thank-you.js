import React from "react";

import { PageTemplate } from "../components/pageTemplate";


export default () => {
  return (
    <PageTemplate
      title="Dziękujemy"
    >
      <div className="container">
        <div className="content_fullwidth">
          <div style={{ width: "100%", float:"right"}} className="rightBoxForm">
            <div className="address-info">
              <h3>Otrzymaliśmy twoją wiadomość.</h3>
              <br />
              <p>
                Dziękujemy za wiadomość. <br />
                <a href="/">
                  Wróć do strony głównej
                </a>
              </p>
            </div>
          </div>	
    		</div>
      </div>
    </PageTemplate>
  )
}