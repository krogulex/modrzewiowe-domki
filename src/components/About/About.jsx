import { useState } from "react";
import css from "./About.module.css";
import { useCollapse } from "react-collapsed";

import icons from "../../icons/symbol-defs.svg";

import Button from "@mui/material/Button";

const About = () => {
  const [isExpanded, setExpanded] = useState(false);

  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className={css.about}>
      {
        // eslint-disable-next-line
      }
      <h6 id="About">'</h6>
      <div className={css.aboutContent}>
        <div className={css.aboutLeft}>
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

        <div className={css.aboutRight}>
          <h3>Udogodnienia</h3>
          <ul className={css.amenitiesList}>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-house`}></use>
              </svg>
              domki 54m2
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-parking-sign`}></use>
              </svg>
              prywatny parking
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-beach`}></use>
              </svg>
              plaża w odległości 450 m
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-toilet`}></use>
              </svg>
              prywatna łazienka
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-shower`}></use>
              </svg>
              prysznic
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-single-bed`}></use>
              </svg>
              2 pojedyńcze łóżka
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-single-bed`}></use>
              </svg>
              2 podwójne łóżka
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-house`}></use>
              </svg>
              2 pokoje
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-sofa`}></use>
              </svg>
              salon
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-wardrobe`}></use>
              </svg>
              szafy
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-grill`}></use>
              </svg>
              grill
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-bicycle`}></use>
              </svg>
              rowery
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-lounger`}></use>
              </svg>
              leżaki
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-cart`}></use>
              </svg>
              wózek plażowy
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-map`}></use>
              </svg>
              parawany
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-wifi`}></use>
              </svg>
              WiFi
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-tv`}></use>
              </svg>
              telewizor
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-playground`}></use>
              </svg>
              plac zabaw
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-trampoline`}></use>
              </svg>
              trampolina
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-fork`}></use>
              </svg>
              w pełni wyposażona kuchnia
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-kettle`}></use>
              </svg>
              czajnik
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-fridge`}></use>
              </svg>
              lodówka
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-cooker-regulator`}></use>
              </svg>
              elektryczna płyta
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-plate`}></use>
              </svg>
              naczynia
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-fork`}></use>
              </svg>
              sztućce
            </li>
            <li className={css.amenitiesItem}>
              <svg className={`${css.icon} ${css.iconCrib}`}>
                <use href={`${icons}#icon-baby-crib`}></use>
              </svg>
              łóżeczko dla dzieci
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-chair`}></use>
              </svg>
              krzesełko dla dzieci
            </li>
            <li className={css.amenitiesItem}>
              <svg className={css.icon}>
                <use href={`${icons}#icon-pets`}></use>
              </svg>
              zwierzęta akceptowane za dodatkową opłatą
            </li>
          </ul>
          <h3>Atrakcje w pobliżu</h3>
          <p>
            Plaża w Sarbinowie, nadmorska promenada, jezioro Jamno, wiele
            restauracji i sklepów, szlaki piesze i rowerowe, latarnia morska w
            Gąskach atrakcje w Mielnie, poniemieckie bukry, molo w Chłopach,
            park linowy i wiele innych!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
