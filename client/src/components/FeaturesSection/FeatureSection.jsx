import React from 'react';
import featureCards from './features';
import styles from './FeatureSection.module.sass';

function FeatureSection () {
  return (
    <>
      <div className={styles.whyUsContainer}>
        <h2>Like A Naming Agency, But Better</h2>
        <p className={styles.whyUsParagraph}>
          With Atom's managed contests, leverage our team's naming expertise and
          our pool of 300K+ naming experts. Our hybrid-solution partners you
          with a trained Atom branding consultant who will guide your
          crowdsourcing process step-by-step to get the best results possible.
        </p>

        <div className={styles.featuresSectionContainer}>
          <ul className={styles.featureSectionList}>
            {featureCards.map((f, i) => (
              <li key={i} className={styles.featuresSectionListItem}>
                <div className={styles.imgContainer}>
                  <img src={f.img} alt={f.title} className={styles.image} />
                </div>
                <h3 className={styles.title}>{f.title}</h3>
                <p className={styles.body}>{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default FeatureSection;
