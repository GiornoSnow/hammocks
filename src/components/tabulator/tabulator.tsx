import "./tabulator.scss";
import type { HammockCategory } from "../../common/model";
import useTabulator from "./useTabulator";
import classNames from "classnames";
import logoHammock from "../../assets/logo-hammock.svg";
import logoName from "../../assets/logo-name.svg";

export type TabulatorProps = {
  dataset: HammockCategory[];
};

const Tabulator = (props: TabulatorProps) => {
  const { dataset } = props;
  const { BLOCK, selectedCategory, handleTabClick } = useTabulator(props);

  return (
    <div className={BLOCK}>
      <div className={`${BLOCK}__options`}>
        <div className={`${BLOCK}__category-list`}>
          {dataset.map((category) => (
            <button
              onClick={() => handleTabClick(category)}
              className={classNames(`${BLOCK}__category`, {
                [`${BLOCK}__category--active`]:
                  category.category === selectedCategory.category,
              })}
            >
              {category.category.toUpperCase()}
            </button>
          ))}
        </div>
        <div className={`${BLOCK}__logo`}>
          <img src={logoHammock} />
          <div className={`${BLOCK}__logo-title`}>
            <span className={`${BLOCK}__logo-name`}>SIP & SWING</span>
            <span className={`${BLOCK}__logo-hammock`}>HAMMOCKS</span>
          </div>
        </div>
      </div>
      <div className={`${BLOCK}__content`}>
        {selectedCategory ? (
          <>
            <div className={`${BLOCK}__info-card`}>
              <div className={`${BLOCK}__info-section`}>
                <img src={logoName} />

                <div className={`${BLOCK}__name-section`}>
                  <div className={`${BLOCK}__info`}>
                    {selectedCategory.category.toUpperCase()}
                  </div>
                  <div className={`${BLOCK}__price`}>
                    $ {selectedCategory.price}
                  </div>
                </div>
              </div>
              <div className={`${BLOCK}__info-section`}>
                <div className={`${BLOCK}__info`}>
                  <b>WEIGHT</b> <br />
                  <span>{selectedCategory.weight}</span>
                </div>
                <div className={`${BLOCK}__info`}>
                  <b>SIZE</b> <br />
                  <span>{selectedCategory.size}</span>
                </div>
              </div>
            </div>
            <div className={`${BLOCK}__hammocks`}>
              {selectedCategory.hammocks.map((hammock) => (
                <div className={`${BLOCK}__hammock`}>
                  <span className={`${BLOCK}__hammock-name`}>
                    {hammock.name}
                  </span>
                  <img
                    className={`${BLOCK}__hammock-image`}
                    src={hammock.images[0]}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
};

export default Tabulator;
