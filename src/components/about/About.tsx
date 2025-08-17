import styles from "./About.module.scss";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { Text } from "../../ui/Text/Text";
import { SectionSubtitle } from "../../ui/SectionSubtitle/SectionSubtitle";
import { FactCard } from "../../ui/FactCard/FactCard";
import { MainButton } from "../../ui/MainButton/MainButton";

interface AboutProps {
  onOpenModal: () => void;
}

export const About = ({ onOpenModal }: AboutProps) => {
  return (
    <section className={styles.about} data-test="about" id="about">
      <div className={styles.about_container}>
        <div className={styles.about_inner}>
          <div className={styles.about_wrapper}>
            <SectionTitle text="О проекте «Стажировка»" className={styles.about_title} />

            <Text
              fontWeight={400}
              color="#4C4C4C"
              className={styles.about_paragraph}
            >
              «Стажировка» — совместный проект правительств и волонтёрских
              бригад.
            </Text>
          </div>

          <div className={styles.about_wrapper}>
            <SectionSubtitle text="Наша цель" className={styles.about_subtitle}/>
            <Text
              fontWeight={400}
              color="#4C4C4C"
              className={styles.about_paragraph}
            >
              <>
                Наша деятельность направлена <br className={styles.br_mobile} />
                на повышение квалификации <br className={styles.br_tablet} />
                молодых <br className={styles.br_mobile} />
                специалистов на ранних и средних{" "}
                <br className={styles.br_mobile} />
                стадиях карьеры, <br className={styles.br_tablet} />
                предоставляя <br className={styles.br_mobile} />
                им инструменты для решения сложных{" "}
                <br className={styles.br_mobile} />
                проблем, <br className={styles.br_tabdesktop} />
                с которыми сталкиваются в мире.{" "}
                <br className={styles.br_mobile} />
                Цель центра — наделить этих <br className={styles.br_tablet} />
                людей <br className={styles.br_mobile} />
                способностью инициировать значимые{" "}
                <br className={styles.br_mobile} />
                изменения.
              </>
            </Text>

            <MainButton
              text="Подробнее о проекте"
              iconType="arrow"
              className={styles.about_button}
              onClick={onOpenModal} 
              type="button"
            />
          </div>
        </div>

        <ul className={styles.about_facts}>
          <FactCard
            iconType="star"
            title={<> Более 250 программ</>}
            text={
              <>
                учебных и рабочих,
                <br className={styles.br_desktop} /> разной длительностью{" "}
                <br className={styles.br_tabdesktop} />
                от 3 месяцев <br className={styles.br_mobile} /> до 1 года
              </>
            }
          />

          <FactCard
            iconType="star"
            title={<>Более 3000 участников</>}
            text={
              <>
                уже успешно прошли программу{" "}
                <br className={styles.br_tabdesktop} /> от «Стажировка» <br />
                и остались в разных <br className={styles.br_tabdesktop} />{" "}
                странах
              </>
            }
          />

          <FactCard
            iconType="star"
            title={
              <>
                {" "}
                Участники <br className={styles.br_tabdesktop} /> из 60 стран
              </>
            }
            text={
              <>
                студенты со всего мира <br className={styles.br_desktop} />{" "}
                приезжают на программу <br className={styles.br_desktop} />
                «Стажировки» <br className={styles.br_desktop} /> от 3 месяцев{" "}
                <br className={styles.br_mobile} /> до 1 года
              </>
            }
          />

          <FactCard
            iconType="star"
            title={
              <>
                {" "}
                От 4 200 $ <br /> до 8 400 $
              </>
            }
            text={
              <>
                грант всем участникам <br /> для комфортного{" "}
                <br className={styles.br_desktop} />
                прохождения программы
              </>
            }
          />
        </ul>
      </div>
    </section>
  );
};

export default About;
