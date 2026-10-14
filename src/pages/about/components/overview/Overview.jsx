import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';

function Overview() {
  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        {isMobile ? (
          <AppearTitle key="mobile-queto">
            <h3 className="h3">The front-end developer&apos;s role </h3>
            <h3 className="h3">
              is like a kind host, <span className="medium">ensuring</span>
            </h3>
            <h3 className="h3">
              visitors have a <span className="medium">smooth</span> and
            </h3>
            <h3 className="h3">
              <span className="medium">enjoyable</span> experience.
            </h3>
          </AppearTitle>
        ) : (
          <AppearTitle key="desktop-queto">
            <h3 className="h3">The front-end developer&apos;s role is like a</h3>
            <h3 className="h3">
              kind host, <span className="medium">ensuring</span> visitors have
            </h3>
            <h3 className="h3">
              a <span className="medium">smooth</span> and <span className="medium">enjoyable</span> experience.
            </h3>
          </AppearTitle>
        )}
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>Some words</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        <AppearTitle>
          <h6 className="h6">Monarch is a concept digital studio exploring distinctive web experiences.</h6>
          <h6 className="h6">Our focus is motion, immersive interfaces, thoughtful typography, and expressive interactive design.</h6>
          <h6 className="h6">Explore the experimental project gallery and the technologies behind each experience.</h6>
        </AppearTitle>
      </div>
    </section>
  );
}
export default Overview;
