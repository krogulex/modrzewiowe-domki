import Slide1 from "../../images/domki-przód.png";
import Slide2 from "../../images/domki-tył.jpg";
import Slide3 from "../../images/plac-zabaw1.jpg";

import css from "./Slider.module.css";

const Slider = () => {

    


  const handleChange = () => {
    let counter = 2;
    setInterval(() => {
      document.getElementById("radio" + counter).checked = true;
      counter++;
      if (counter > 3) {
        counter = 1;
      }
    }, 3500);
  };

  handleChange()

  return (
    <div className={css.slider}>
      <div className={css.slides}>
        <input
          type="radio"
          name="radio-btn"
          id="radio1"
          className={css.radio1}
          defaultChecked='checked'
        ></input>
        <input
          type="radio"
          name="radio-btn"
          id="radio2"
          className={css.radio2}
        ></input>
        <input
          type="radio"
          name="radio-btn"
          id="radio3"
          className={css.radio3}
        ></input>

        <div className={`${css.slide} ${css.first}`}>
          <img src={Slide1} alt="Domki przód"></img>
        </div>
        <div className={css.slide}>
          <img src={Slide2} alt="Domki tył"></img>
        </div>
        <div className={css.slide}>
          <img src={Slide3} alt="Plac zabaw"></img>
        </div>

        <div className={css.navAuto}>
          <div className={css.autoBtn1}></div>
          <div className={css.autoBtn2}></div>
          <div className={css.autoBtn3}></div>
        </div>

        <div className={css.navManual}>
          <label htmlFor="radio1" className={css.manualBtn}></label>
          <label htmlFor="radio2" className={css.manualBtn}></label>
          <label htmlFor="radio3" className={css.manualBtn}></label>
        </div>
      </div>
    </div>
  );
};

export default Slider;
