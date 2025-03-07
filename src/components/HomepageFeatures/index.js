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
      <p>The OPTIMIST Hour meetings will be a place where citizens will be able to discuss, share, and debate ideas to address standard APIs and interoperability issues for trace data formats of side-channel data and other real-time measurements of implementation security. These meetings will be chaired by a member of the OPTIMIST Team and the primary discussion points will be compiled and shared within the OPTIMIST OSE.</p>

      <p>These meetings will address three main points brought up during the previous OPTIMIST Hour meeting, including, trace format requirements, keywords, and common APIs. Over the course of three meeting the goal will be to produce <a href="/docs/intro" target="_blank">documentation</a> that compiles requirements, common keywords and potential API solutions for trace data formats.</p>
      </>
      
    ),

  },
  {
    title: 'Next Meeting',
    Svg: require('@site/static/img/undraw_meeting_dunc.svg').default,
    description: (
      <>
      <strong>Testing Post-Quantum Cryptography Implementation Security</strong>

        <p>📅Thursday, 27 March, at 3 PM GMT  </p>
        
        <TimeZoneConverter />

        {/* <h3>Zoom Link:</h3> */}
        <p><strong>Zoom Link:</strong></p> <a href="https://wpi.zoom.us/j/99011157985">https://wpi.zoom.us/j/99011157985</a>  

      </>
    ),
}
,
{
  title: 'Timeline',
  Svg: require('@site/static/img/undraw_calendar_76t8.svg').default,
  description: (
    <>
      <p>The OPTIMIST Hour meetings are scheduled as follows:</p>
 
      <h3> <a href="/docs/File Format/file-format" rel="noopener noreferrer">
        File Format for Traces
      </a></h3>
      <ul>
      ✅October 24, 11 AM EST (3 PM GMT)
      </ul>

      <h3> <a href="/docs/Capture Interface/capture-interface" rel="noopener noreferrer">
        Capture Interface
        </a></h3>
      <ul>
      ✅January 23, 10 AM EST (3 PM GMT)
      </ul>


      <h3> <a href="/docs/pqc/intro" rel="noopener noreferrer">
        Testing Post-Quantum Cryptography Implementation Security
        </a></h3>
      <ul>
      📅27 March, 11 AM EDT (3PM GMT)
          {/* <li><strong>10 April</strong> - Working Group Meeting</li>
          <li><strong>24 April</strong> - Working Group Meeting</li>
          <li><strong>8 May</strong> - Working Group Meeting</li> */}
      </ul>

      <h3> <a href="/docs/ai/intro"  rel="noopener noreferrer">
        Acceleration of AI for Implementation Security Testing
        </a></h3>
      <ul>
      📅17 April, 11 AM EDT (3PM GMT) 
          {/* <li><strong>1 May</strong> - Working Group Meeting</li>
          <li><strong>15 May</strong> - Working Group Meeting</li>
          <li><strong>29 May</strong> - Working Group Meeting</li> */}
      </ul>


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
