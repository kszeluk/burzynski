import React from "react";

import { ListSection } from "../components/listSection";
import { PageTemplate } from "../components/pageTemplate";

export default () => {
  return (
    <PageTemplate
      title="Oferta"
      pageTitle="Oferta"
      activePage="oferta"
    >
      <div class="container">
        <div class="content_fullwidth">
          <div class="big_text1">Z czym możesz się do nas zgłosić?</div>
          <div class="big_text1">&nbsp;</div>
          <div class="one_third">
            <ListSection
              title="Stany pourazowe"
              listItems={[
                " stan po złamaniach po ściągnięciu unieruchomienia",
                " stan po skręceniach, zwichnięciach",
                " ograniczenia ruchomości w stawach",
                " osłabienie siły mięśniowej",
                " obrzęki"
              ]}
            />
          </div>

          <div class="one_third">
            <ListSection
              title="Zespoły bólowe kręgosłupa"
              listItems={[
                " zmiany przeciążeniowe kręgosłupa",
                " rwa kulszowa",
                " rwa udowa",
                " rwa barkowa",
                " dyskopatie"
              ]}
            />
          </div>
          
          <div class="one_third last">
            <ListSection
              title="Inne zespoły bólowe"
              listItems={[
                " zespół bolesnego barku",
                " łokieć tenisisty, golfisty",
                " zespół cieśni nadgarstka",
                " porażenie nerwu twarzowego",
                " bóle głowy i karku"
              ]}
            />
          </div>
          
          <div class="clearfix divider_line3">&nbsp;</div>


          <div class="one_third">
            <ListSection
              title="Zmiany zwyrodnieniowe stawów"
              listItems={[
                " kręgosłupa",
                " stawów kończyn górnych",
                " stawów kończyn dolnych",
                " stawów skroniowo-żuchwowych"
              ]}
            />
          </div>
          
          <div class="one_third">
            <ListSection
              title="Choroby reumatyczne"
              listItems={[
                " zesztywniające zapalenie stawów kręgosłupa",
                " reumatoidalne zapalenie stawów"
              ]}
            />
          </div>



          <div class="one_third last">
            <ListSection
              title="Obrzęki"
              listItems={[
                " limfatyczne",
                " idiopatyczne",
                " lipidowe",
                " pourazowe"
              ]}
            />
          </div>
          
          <div class="clearfix divider_line3">&nbsp;</div>

          <div class="one_third">
            <ListSection
              title="Stany po leczeniu nowotworów"
              listItems={[
                " zwłóknienia i przykurcze ograniczające ruchomość w stawach",
                " osłabienie siły mięśniowej",
                " niedowłady, porażenia",
                " powrózek w obrębie dołu pachowego (axillary web syndrom)",
                " zniekształcenia i wady postawy",
                " zaburzenia statyki ciała",
                " obrzęki limfatyczne"
              ]}
            />
          </div>
                                      
          <div class="one_third">
            <ListSection
              title="Korekcja wad postawy"
              listItems={[
                " skolioza",
                " plecy okrągłe",
                " plecy płaskie",
                " wystające łopatki",
                " nierówna wysokość barków",
                " niesymetryczne ustawienia miednicy",
                " zaburzenia w obrębie stóp (np. stopy płaskie, stopy płasko-koślawe, paluch koślawy",
                " zaburzenia w obrębie stawów kolanowych (koślawość, szpotawość)"
              ]}
            />
          </div>
          
          <div class="one_third last">
            <ListSection
              title="Trudności w zasypianiu"
              listItems={[
                " łagodzenie silnych napięć"
              ]}
            />
          </div>
          
          <div class="clearfix divider_line3">&nbsp;</div>


          <div class="one_third">
            <ListSection
              title="Sezonowe zaburzenia"
              listItems={[
                " stany zniechęcenia",
                " ociężałość",
                " senność",
                " zaburzeń koncentracji",
                " apatia",
                " zaburzenia jakości snu"
              ]}
            />
          </div>                            
          <div class="clearfix divider_line3">&nbsp;</div>
        </div>
      </div>
    </PageTemplate>
  )
}