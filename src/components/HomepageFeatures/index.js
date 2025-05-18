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
        <a href="/docs/ai/intro"><strong>Acceleration of AI for Implementation Security Testing</strong></a><br /> 
        {/* Plenary Kickoff Meeting<br /> */}
        Working Group Meeting 3<br />
        🗓️ Thursday, 29 May, at 3 PM GMT<br />
        <a href="/meeting-invite/calendar.ics" style={{ textDecoration: "none" }}>
        <button style={{ 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            fontSize: "16px", 
            cursor: "pointer", 
            borderRadius: "5px" 
        }}>
          Add to Calendar
        </button>
      </a>
        <TimeZoneConverter />
        <strong>Zoom link:</strong><br />
        {/* Zoom Link Box */}
        <div
          style={{
            padding: '12px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
            boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '300px',
            margin: '10px auto', // Centers the box horizontally
            textAlign: 'center', // Ensures content inside is centered
            display: 'block',
          }}
        >
          <a
            href="https://wpi.zoom.us/j/91072710391"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              wordBreak: 'break-all',
              fontWeight: 'bold',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            https://wpi.zoom.us/j/91072710391
          </a>
        </div>
        {/* line */}
      


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
      ✅17 April, 11 AM EDT (3PM GMT) 
          {/* <li><strong>1 May</strong> - Working Group Meeting</li>
          <li><strong>15 May</strong> - Working Group Meeting</li>
          <li><strong>29 May</strong> - Working Group Meeting</li> */}
      </ul>


      <h3> <a href="/docs/pqc/intro" rel="noopener noreferrer">
        Testing Post-Quantum Cryptography Implementation Security
        </a></h3>
      <ul>
      ✅27 March, 11 AM EDT (3PM GMT)
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

      <a href="/timeline" style={{ textDecoration: "none" }}>
        <button style={{ 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            padding: "10px 20px", 
            fontSize: "16px", 
            cursor: "pointer", 
            borderRadius: "5px" 
        }}>
          Click to see the full timeline
        </button>
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
