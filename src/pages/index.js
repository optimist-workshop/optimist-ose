import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useEffect, useRef } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className={styles.heroMotto}>From Learners to Doers</p> 
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Documentation 🗎
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const bannerRef = useRef(null);
  const bannerLink = "/ches25"; // Changed to CHES 2025 page

  useEffect(() => {
    const timer = setTimeout(() => {
      if (bannerRef.current) {
        bannerRef.current.style.transform = 'translateY(0)';
        bannerRef.current.style.opacity = '1';
        bannerRef.current.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Open Tools, Interfaces and Metrics for Implementation Security Testing">
      <HomepageHeader />

     {/* CHES 2025 Banner */}
     <Link
        to={bannerLink}
        className={styles.dacBanner}
        ref={bannerRef}
        style={{ transform: 'translateY(-100%)', opacity: 0 }}
      >
        <strong>2nd OPTIMIST Workshop — September 14, 2025. Co-located with CHES 25.</strong>
        <br />
        <a href="/ches25" style={{color: "#007bff", textDecoration: "underline"}}>Call for Contributions</a>
      </Link>

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
