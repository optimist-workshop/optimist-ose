import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

import TimeZoneConverter from "@site/src/components/TimeZoneConverter";

const FeatureList = [
  {
    title: 'OPTIMIST Hours',
    Svg: require('@site/static/img/undraw_google-docs_khfo.svg').default,
    description: (
      <>
      <p>The OPTIMIST Hour meetings are a place where citizens are able to discuss, share, and debate ideas to address standard APIs and interoperability issues for trace data formats of side-channel data and other real-time measurements of implementation security. These meetings are chaired by a member of the OPTIMIST Team and the primary discussion points are compiled and shared within the OPTIMIST OSE.</p>

      <p>These meetings address three main points brought up during the previous OPTIMIST Hour meeting, including, trace format requirements, keywords, and common APIs. Over the course of three meetings, the goal is to produce documentation that compiles requirements, common keywords, and potential API solutions for trace data formats.</p>
      </>
      
    ),

  },
  {
    title: (
      <a href="/ches25" rel="noopener noreferrer">
        2nd OPTIMIST Workshop co-located with CHES 2025!
      </a>
    ),
    Svg: require('@site/static/img/undraw_conference_3n82.svg').default, // Changed to a more generic calendar/event SVG
    description: (
      <>
        <p>
          We are excited to announce that we will be hosting the 2nd OPTIMIST workshop! The OPTIMIST workshop is a forum to present and discuss new efforts that enable open and reproducible research in implementation security testing.
        </p>
        <strong>📅 Workshop date:</strong> September 14, 2025<br />
        <strong>📍 Location:</strong> Kuala Lumpur, Malaysia<br />
        <br />
        <p style={{ marginTop: 0 }}>
          🚨 Tentative workshop program is now available!
        </p>
       
        <a className="button button--primary" href="/ches25">
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
      <h3> <a href="/docs/ai/intro"  rel="noopener noreferrer">
        Acceleration of AI for Implementation Security Testing
        </a></h3>
      <ul>
      ✅April 17, 11 AM EDT (3PM GMT) 
          {/* <li><strong>1 May</strong> - Working Group Meeting</li>
          <li><strong>15 May</strong> - Working Group Meeting</li>
          <li><strong>29 May</strong> - Working Group Meeting</li> */}
      </ul>


      <h3> <a href="/docs/pqc/intro" rel="noopener noreferrer">
        Testing Post-Quantum Cryptography Implementation Security
        </a></h3>
      <ul>
      ✅March 27, 11 AM EDT (3PM GMT)
          {/* <li><strong>10 April</strong> - Working Group Meeting</li>
          <li><strong>24 April</strong> - Working Group Meeting</li>
          <li><strong>8 May</strong> - Working Group Meeting</li> */}
      </ul>

      <h3> <a href="/docs/capture-interface/intro" rel="noopener noreferrer">
        Capture Interface
        </a></h3>
      <ul>
      ✅January 23, 10 AM EST (3 PM GMT)
      </ul>

      <h3> <a href="/docs/file-format/intro" rel="noopener noreferrer">
        File Format for Traces
      </a></h3>
      <ul>
      ✅October 24, 11 AM EST (3 PM GMT)
      </ul>

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
