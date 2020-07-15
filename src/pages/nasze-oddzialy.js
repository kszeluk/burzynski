import React from "react";
import { PageTemplate } from "../components/pageTemplate";

export default () => {
  return (
    <PageTemplate
      title="Nasze Oddziały"
      pageTitle="Nasze Oddziały"
      activePage="nasze-oddzialy"
    >
      <div class="container">
        <div class="content_fullwidth">
          <p>WROCŁAW: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ŁYSKORNIA:</p>
          <p>ul. Bolesława Prusa 38-40/23 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Numer domu 15</p>
          <p>50-319 Wrocław &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;98-350 Biała</p>
          <p>TEL. 693 501 822 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;TEL. 604 442 837</p>
          <p>&nbsp;</p>
          <p>Lilianna Jaworska &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bartosz Burzyński</p>
          <p>&nbsp;</p>		
          <input type="hidden" id="opis" value="<br>" />
			    <input type="hidden" id="address" value="Ewangelicka  , 98-300 Wieluń" />
    			<div id="mapa-dojazdu"></div>	
        </div>
      </div>
    </PageTemplate>
  )
}