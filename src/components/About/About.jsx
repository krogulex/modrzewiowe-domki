import { useState } from "react";
import css from "./About.module.css";
import { useCollapse } from "react-collapsed";

import icons from "../../icons/symbol-defs.svg";

import Button from "@mui/material/Button";

const About = () => {
  const [readMore, setReadMore] = useState(false);

  const [isExpanded, setExpanded] = useState(false);

  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className={css.About}>
      <h5 id="About"></h5>
      <div>
        <div>
          <h2>O nas</h2>
          <p>
            Modrzewiowe domki nad morzem to świetny wybór na wakacje dla
            wszystkich miłośników wypoczynku nad polskim morzem. Zlokalizowane w
            odległości ok. 450 metrów od plaży, oferują dogodny dostęp do
            wszystkich atrakcji Sarbinowa - jednej z najbardziej urokliwych,
            nadbałtyckich lokalizacji{isExpanded ? ". " : "..."}
          </p>
          <p {...getCollapseProps()}>
            Modrzewiowe domki nad morzem to kompleks nowych, oddanych do
            użytkowania w 2016 r., dwupoziomowych obiektów turystycznych
            wyposażonych we wszystkie udogodnienia. Domki znajdują się przy ul.
            Wrzosowej 10 i są wykonane w całości z naturalnego modrzewia -
            materiału przyjaznego alergikom. Domki z bali to świetne miejsce na
            wakacje dla osób, które kochają wypoczywać w naturalnym,
            ekologicznym otoczeniu, wyposażonym we wszystkie udogodnienia.
            Modrzewiowe domki nad morzem to kompleks pięciu przestronnych,
            czystych oraz kompleksowo urządzonych domków letniskowych. Domki na
            wakacje są wykonane z bala i składają się z dwóch poziomów. Każdy
            domek posiada powierzchnię 54 m2 i może w nim wypoczywać 6 osób. Na
            parterze znajduje się aneks kuchenny, łazienka z kabiną prysznicową
            oraz salon z dwuosobową kanapą. Na piętrze do dyspozycji gości są
            dwie osobne sypialnie. W sypialniach znajdują się dwa łóżka -
            dwuosobowe oraz jednoosobowe.
          </p>
          <Button
            variant="contained"
            {...getToggleProps({
              onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
          >
            {isExpanded ? "Mniej..." : "Więcej..."}
          </Button>
        </div>

        <div>
          <h3>Udogodnienia</h3>
            <ul>
              <li>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-house`}></use>
                </svg>
                domki 54m2
              </li>
              <li>
                <svg className={css.icon}>
                  <use href={`${icons}#icon-parking-sign`}></use>
                </svg>
                prywatny parking
              </li>
              <li></li>
              <li></li>
            </ul>
            prywatny Parking, plaża w odległości 450m, prywatna łazienka, 2
            pojedyńcze łóżka, 2 podwójne łóżka, 2 pokoje, salon, szafy, stoisko
            do grilla, rowery, leżaki, wózek plażowy, kanapa parawany, WiFi,
            telewizor, plac zabaw, trampolina, w pełni wyposażona kuchnia,
            czajnik, lodówka, elektryczna płyta, naczynia, sztućce prysznic,
            łóżeczko dla dzieci, krzesełko dla dzieci, zwierzęta akceptowane za
            dodatkową opłatą
        </div>
        <h3>Atrakcje w pobliżu</h3>
        <p>
          Nadmorska promenada, stadniny konne, jezioro Jamno, wiele restauracji,
          atrakcje w Mielnie, poniemieckie bukry, latarnia morska w Gąskach i
          wiele innych!
        </p>
      </div>
    </div>
  );
};

export default About;
