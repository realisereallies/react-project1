import styles from "./Grant.module.scss";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { Text } from "../../ui/Text/Text";
import { SectionSubtitle } from "../../ui/SectionSubtitle/SectionSubtitle";
import { GrantCard } from "../../ui/GrantCard";

export default function Grant() {
  return (
    <section className={styles.grant} data-test="grant" id="grant">
      <div className={styles.grant__container}>
        <div className={styles.grant__wrapper}>
          <SectionTitle text="Как поехать" color="white" className={styles.grant__title}/>
          <Text>
            Свяжитесь с координатором, чтобы узнать полную информацию.&nbsp;
            <br className="br_tabdesktop" />
            Вы получите актуальные сведения о доступных программах&nbsp;
            <br className="br_tabdesktop" />и городах, в которых можете пройти
            программу.
          </Text>
          <div className={styles.grant__img_container}>
            <picture>
              <source
                type="image/webp"
                srcSet="/grant-img@1x.webp 1x, /grant-img@2x.webp 2x"
                width="290"
                height="200"
              />
              <img
                className={styles.grant__image}
                src="/grant-img@1x.jpg"
                srcSet="/grant-img@2x.jpg 2x"
                alt="Указатели стран"
                width="290"
                height="200"
              />
            </picture>
          </div>
        </div>
        <div className={styles.grant__wrapper}>
          <SectionSubtitle text="Чтобы получить грант на обучение, вам нужно:" color="white" className={styles.grant__subtitle}>
            Чтобы получить грант <br className="br_mobdesktop" />на обучение, вам нужно:
          </SectionSubtitle>
          <ol className={styles.grant__list}>
            <GrantCard
              text="Быть в возрасте от 16 до 30 лет"
              className={styles.grant__item}
            />
            <GrantCard
              text={
                                  <>
                    Иметь оконченное среднее{' '}
                    <br className="br_mobtablet" />
                    образование
                  </>
              }
              className={styles.grant__item}
            />
            <GrantCard
              text={
                <>
                  Иметь документально{' '}
                  <br className="br-md" />
                  подтверждённое&nbsp;отсутствие{' '}
                  <br />
                  судимости и пройти{' '}
                  <br className="br_tablet" />
                  консульскую проверку
                </>
              }
              className={styles.grant__item}
            />
            <GrantCard
              text={
                <>
                  За последние 2 года быть&nbsp;
                  <br className="br_tabmobile" />
                  не больше 3x месяцев&nbsp;
                  <br className="br_desktop" />
                  подряд непрерывно в одной стране
                </>
              }
              className={styles.grant__item}
            />
          </ol>
        </div>
      </div>
    </section>
  );
}
