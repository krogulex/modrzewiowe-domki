import css from "./About.module.css";

const About = () => {
  return (
    <div id="About" className={css.About}>
      <div>
        <div>
          <h2>O nas</h2>
          <p>
            Modrzewiowe domki nad morzem to świetny wybór na wakacje dla
            wszystkich miłośników wypoczynku nad polskim morzem. Zlokalizowane w
            odległości ok. 450 metrów od plaży, oferują dogodny dostęp do
            wszystkich atrakcji Sarbinowa - jednej z najbardziej urokliwych,
            nadbałtyckich lokalizacji. Modrzewiowe domki nad morzem to kompleks
            nowych, oddanych do użytkowania w 2016 r., dwupoziomowych obiektów
            turystycznych wyposażonych we wszystkie udogodnienia. Domki znajdują
            się przy ul. Wrzosowej 10 i są wykonane w całości z naturalnego
            modrzewia - materiału przyjaznego alergikom. Domki z bali to świetne
            miejsce na wakacje dla osób, które kochają wypoczywać w naturalnym,
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
          <button>Więcej...</button>
        </div>

        <div>
          <h2>Udogodnienia</h2>
          <p>
            Prywatny Parking, stoisko do grilla, rowery, leżaki, wózek plażowy,
            parawany, WiFi, telewizor, plac zabaw, w pełni wyposażona kuchnia,
          </p>
        </div>
        <h2>Atrakcje w pobliżu</h2>
        <p>
          nadmorska promenada, stadniny konne, jezioro Jamno, wiele restauracji,
          atrakcje w Mielnie, poniemieckie bukry, latarnia morska w Gąskach i
          wiele innych!
        </p>
      </div>
    </div>
  );
};

export default About;
