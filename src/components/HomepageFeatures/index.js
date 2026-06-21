import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import TimeZoneConverter from "@site/src/components/TimeZoneConverter";

const FeatureList = [
  {
    title: 'OPTIMIST',
    Svg: require('@site/static/img/undraw_google-docs_khfo.svg').default,
    description: (
      <>
	    <p>OPTIMIST is a forum for open, reproducible, and community-driven work in implementation security. We aim to make security evaluation more measurable, reusable, and comparable by gathering researchers, practitioners, tool developers, dataset creators, evaluators, and standardization stakeholders in a single forum.</p>

            <p>We organize various activities to network people around the topic of open-source implementation security testing. The OPTIMIST HOUR is a one-hour online meetings around a focused topic. The OPTIMIST WORKSHOP is organized yearly as a co-located event with CHES. Recently, we also started an OPTIMIST PHD Forum to bring new researchers into the field.
</p>
      </>
      
    ),

  },
  {
    title: (
      <a href="/ches26" rel="noopener noreferrer">
        3rd OPTIMIST Workshop co-located with CHES 2026!
      </a>
    ),
    Svg: require('@site/static/img/undraw_conference_3n82.svg').default, // Changed to a more generic calendar/event SVG
    description: (
      <>
        <p>
            The 3rd OPTIMIST workshop will be co-located with CHES 2026! The OPTIMIST workshop a forum to present and discuss new efforts that enable open and reproducible research in implementation security testing.
        </p>
            <strong>📢 Extended Submission Deadline: </strong>: <br /> <span style={{color: 'red'}}><strong>July 15, 2026</strong></span><br />
        <strong>📅 Workshop date:</strong> October 11, 2026<br />
            <strong>🌍 Location:</strong> Antalya, Turkey<br />
        <br />
       
        <a className="button button--primary" href="/ches26">
          Learn More
        </a>
      </>
    ),
  }
,
{
  title: 'Timeline',
  Svg: require('@site/static/img/undraw_calendar_76t8.svg').default,
  description: (
    <>

     <h3> <a href="/docs/phd/intro"  rel="noopener noreferrer">
          PhD Forum: AI and side-channel analysis
      </a></h3> 
      ✅April 16, 2026
      ✅April 30, 2026
      ✅May 14, 2026
      

     <h3> <a href="/docs/ai/intro"  rel="noopener noreferrer">
        Acceleration of AI for Implementation Security Testing
      </a> </h3>
      ✅April 17, 2025
      ✅May 1, 2025
      ✅May 15, 2025
      ✅May 29, 2025

      <h3> <a href="/docs/pqc/intro" rel="noopener noreferrer">
        Testing Post-Quantum Cryptography Implementation Security
      </a></h3>
      ✅March 27, 2025
      ✅April 10, 2025
      ✅April 24, 2025
      ✅May 8, 2025


      <a className="button button--primary" href="/timeline">
        Click to see the full timeline
      </a>


    </>
  ),
}
,
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
