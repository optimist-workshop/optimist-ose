import React from "react";
import Layout from "@theme/Layout";


const sessions = [
    { time: "9:00", title: "Welcome Remarks" },
    { time: "9:15", title: "Invited Talk: Markku-Juhani Saarinen", subtitle: "Artifact Evaluation and Reproducibility at CHES" },
    { time: "10:00", title: "Session 1" },
    { time: "10:00", title: "Lukasz Chmielewski, Léo Weissbart and Lubomír Hrbáček", subtitle: "Technical aspects of implementing and evaluating ECC crypto libraries protected against side-channel and fault injection attacks" },
    { time: "10:15", title: "Kamyar Mohajerani, Jens-Peter Kaps and Kris Gaj", subtitle: "Hardware API for Lightweight Cryptography" },
    { time: "10:30", title: "Coffee Break" },
    { time: "11:00", title: "Invited Talk: Colin O'Flynn", subtitle: "Academia or Industry: Challenges of Building Open-Source Research Tools" },
    { time: "11:45", title: "Project Kickoff", subtitle: "An Open-Source Approach to Measure and Analyze Embedded Systems Security" },
    { time: "12:30", title: "Lunch" },
    { time: "13:30", title: "Invited Talk: Damien Couroussé", subtitle: "Fault Security Analysis and Verification: Challenges and New Directions" },
    { time: "14:15", title: "Session 2" },
    { time: "14:15", title: "Jonah Bosland, Stefan Ene, Peter Baumgartner and Vincent Immler", subtitle: "SCARR: A High-Performance Side-Channel Analysis Framework" },
    { time: "14:30", title: "Karel Král, Jean-Michel Picod, Luca Invernizzi and Elie Bursztein", subtitle: "Sedpack - Scalable and efficient dataset library" },
    { time: "14:45", title: "Karim Abdellatif", subtitle: "SCADL: A Side-Channel Attack Tool Based on Deep Learning" },
    { time: "15:00", title: "Coffee Break" },
    { time: "15:30", title: "Invited Talk: Gaëtan Cassiers", subtitle: "Verification and evaluation of open-source implementations: the SMAesH study case" },
    { time: "16:00", title: "Panel Discussion", subtitle: "Open-Source Ecosystem for Implementation Security Testing" },
    { time: "17:00", title: "Closing" }
  ];

const invitedTalks = [
  {
    name: "Colin O'Flynn",
    title: "Academia or Industry: Challenges of Building Open-Source Research Tools",
    bio: (
      <>
        <a
          href="https://www.dal.ca/faculty/engineering/electrical/faculty-staff/our-faculty/professors/oflynn-colin.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}
        >
          Colin O'Flynn
        </a>{" "}
        is an Assistant Professor at Dalhousie University in Halifax, NS, Canada. He works in hardware security research, and previously co-founded NewAE Technology Inc, which was a company spun out of the development of the ChipWhisperer project. As part of this work he is co-author of the Hardware Hacking Handbook, and has given numerous talks on ChipWhisperer and related research performed with the tools.
      </>
    ),
    description: "ChipWhisperer started as an open-source project for fault injection and side channel analysis, with the goal of making hardware widely available for researchers. This has resulted in a combination of both academic and industrial work, and this talk discusses how ChipWhisperer was developed, the challenges in trying to bridge the gap between various areas, and where more support is still needed. This includes how to build open-source projects that have long-term support without relying only on grants or short-term industry support, with specific details of how this was done with ChipWhisperer.",
    img: "/img/people/colin.jpg",
    link: "https://www.dal.ca/faculty/engineering/electrical/faculty-staff/our-faculty/professors/oflynn-colin.html"
  },
  {
    name: "Damien Couroussé",
    title: "Fault Security Analysis and Verification: Challenges and New Directions",
    bio: (
      <>
        <a
          href="https://damien.courousse.fr/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}
        >
          Damien Couroussé
        </a>{" "}
        is with CEA-List since 2011, as a Research Engineer and Senior Expert.  His research interests include embedded software and its interaction with hardware, compilation and runtime code generation for performance and security, with a focus on hardware security.
      </>
    ),
    description: "Fault injection attacks pose a serious threat to the security of cryptographic implementations, but also more generally to the security of any embedded system.  Recent research has illustrated that these attacks can now successfully target complex systems-on-chips operated by equally complex software stacks.  As a consequence, the attack surface is rapidly growing, putting further pressure on effective robustness analysis tools.  In this talk, we will illustrate the challenges facing fault security analysis, and suggest new directions for development.",
    img: "/img/people/couro.jpg",
    link: "https://damien.courousse.fr/"
  },
  {
    name: "Markku-Juhani Saarinen",
    title: "Artifact Evaluation and Reproducibility at CHES",
    bio: (
      <>
        <a
          href="https://www.tuni.fi/en/markku-juhani-saarinen"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}
        >
          Markku-Juhani Saarinen
        </a>{" "}
        is a Professor of Practice (työelämäprofessori) at Tampere University (Finland). Markku served as the Artifact Chair for IACR CHES 2024. Markku started his career as a cryptographer at SSH Communications Security in 1997, working on the now-ubiquitous SSH2 protocol. He has stayed with technical information security since then, dividing his time between academia and the security industry. Prior to moving back to his native Finland, he was with PQShield in Oxford (2018-2023). Markku holds a Ph.D. in Information Security from Royal Holloway, University of London (2009).
      </>
    ),
    description: "Artifact evaluation is an interactive process in which the Artifact Evaluation Committee (AEC) tries to help authors publish good-quality permanent artifacts (such as source code and data sets) related to their research. In the CHES 2024 artifact evaluation, authors of accepted papers could choose to have their research artifacts evaluated against functionality and reproducibility \"badges.\" The use of reproducibility badges is now a standard procedure in many non-IACR security conferences (USENIX Security, ACM CCS, NDSS, ACSAC, and several IEEE conferences). We discuss various aspects of functionality and reproducibility testing that we have encountered during the 2024 period, especially related to hardware and software artifacts.  As in all natural sciences, some results are easily reproducible, while others are not (perhaps due to data acquisition methods) -- and this does not necessarily make them lesser works! In the CHES context, we repeatedly ran into muddy waters when authors asked the AEC to evaluate works with leakage assessments (e.g., \"TVLA\") for reproducibility rather than mere functionality. Since these are essentially physical science experiments, specific questions about laboratory procedures, calibration methods, and statistical treatment arise. Despite some ISO standardization work in this area, the CHES community should try to reach and document a further consensus on SCA reproducibility. This would also help the industry to refine and harmonize best practices in this area.",
    img: "/img/people/markku02.jpg",
    link: "https://www.tuni.fi/en/markku-juhani-saarinen"
  },
  
  {
    name: "Gaëtan Cassiers",
    title: "Verification and evaluation of open-source implementations: the SMAesH study case",
    bio: (
      <>
        <a
          href="https://perso.cassiersg.be/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}
        >
          Gaëtan Cassiers
        </a>{" "}
        is a postdoctoral researcher at the Crypto Group of UCLouvain. His research focuses on the analysis and design of side-channel countermeasures, most prominently on masking techniques. He co-organized the CHES 2020 and 2023 side-channel evaluation challenges. In 2022 he co-founded the SIMPLE-Crypto(non-profit) association that promotes open-source in the field of cryptography with physical security. He is a developer and maintainer of two SIMPLE-Crypto projects: SCALib, a side-channel security evaluation library and SMAesH, a masked implementation of the AES.
      </>
    ),
    description: "SMAesH is an open-source hardware implementation of AES protected against side-channel analysis with the masking countermeasure. It achieves state-of-the art performance, has been proven secure in the robust probing model and withstood public scrutiny during the CHES 2023 challenge. In this talk, we present SMAesH, discuss the verification and evaluation process we followed to gain trust in its security, and we present the ongoing and future work on the topic. Finally, we discuss the strength and weaknesses of SMAesH's evaluation process.",
    img: "/img/people/cassiers.jpg",
    link: "https://perso.cassiersg.be/"
  },

  
];

const panelists = [
  {
    name: "Shivam Bhasin",
    img: "/img/people/shivam.png",
    bio: (
      <>
        <a
          href="https://www.linkedin.com/in/shivam-bhasin-81901110"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}
        >
          Shivam Bhasin
        </a>{" "}
       is a Principal Research Scientist and Programme Manager for Cryptographic Engineering at the Centre for Hardware Assurance, Temasek Laboratories, Nanyang Technological University, Singapore. He earned a PhD in Electronics & Communication from Telecom Paristech (2011) and an Advanced Master in Security of Integrated Systems & Applications from Mines Saint-Etienne, France (2008). Prior to NTU, he was a Research Engineer at Institut Mines-Telecom, France, and a visiting researcher at UCL, Belgium (2011) and Kobe University (2013). His research focuses on embedded security, trusted computing, and secure designs. Bhasin has published extensively and contributed to the ISO/IEC 17825 standard.
      </>
    ),
  },
  {
    name: "Pascal Nasahl",
    img: "/img/people/pascal.jpg",
    bio: (
      <>
        <a
          href="https://www.linkedin.com/in/shivam-bhasin-81901110"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}
        >
          Shivam Bhasin
        </a>{" "}
       is a Principal Research Scientist and Programme Manager for Cryptographic Engineering at the Centre for Hardware Assurance, Temasek Laboratories, Nanyang Technological University, Singapore. He earned a PhD in Electronics & Communication from Telecom Paristech (2011) and an Advanced Master in Security of Integrated Systems & Applications from Mines Saint-Etienne, France (2008). Prior to NTU, he was a Research Engineer at Institut Mines-Telecom, France, and a visiting researcher at UCL, Belgium (2011) and Kobe University (2013). His research focuses on embedded security, trusted computing, and secure designs. Bhasin has published extensively and contributed to the ISO/IEC 17825 standard.
      </>
    ),
  },
  {
    name: "Miguel Osorio",
    img: "/img/people/miguel.jpg",
    bio: (
      <>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}
        >
          Miguel Osorio 
        </a>{" "}
         is a Staff Software Engineer at Google, has provided technical leadership to OpenTitan, the world's first open source silicon root of trust project.  His focus is design and implementation of security architecture and features, fostering open source methodologies and community engagement, as well as overseeing development and integration infrastructure. His work leverages deep expertise in embedded security, hardware and software penetration testing, provisioning protocols and infrastructure, and cloud computing, to enable secure provisioning of integrated circuits in critical applications. Committed to advancing the field, Miguel actively collaborates with industry partners and academic institutions, pushing the boundaries of open source hardware and security.
      </>
    ),
  },
  {
    name: "Paul Scheidt",
    img: "/img/people/scheidt.png",
    bio: (
      <>
        <a
          href="https://www.linkedin.com/in/paul-scheidt-b239b1/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}

        >
          Paul Scheidt
        </a>{" "}
         is Principal Engineer at Synopsys and is responsible for leading the development of cryptographic IP and countermeasure analysis tools. Previously he was a founding member of the Google Titan security chip team. He led the development of all cryptographic accelerators and secure RISC-V processors used in three generations of the Titan product. In the quest to reach the highest security levels, Paul has spent quality time pentesting his team's designs, hunting for side channel leaks and fault vulnerabilities.
      </>
    ),
  },
  {
    name: "Jasper van Woudenberg",
    img: "/img/people/jasper02.png",
    bio: (
      <>
        <a
          href="https://www.linkedin.com/in/jaspervw/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontWeight: "bold", fontSize: "1.2em" }}

        >
          Jasper van Woudenberg
        </a>{" "}
        is CTO for Riscure North America and co-author of Hardware Hacking Handbook: Breaking Embedded Security with Hardware Attacks. He works with Riscure's San Francisco based team to improve embedded device security through innovation. In the past, Jasper worked for a penetration testing firm, where he performed source code review, binary reverse engineering and tested application and network security. At Riscure, Jasper deals with various aspects of hardware security; from design review and logical testing, to side-channel analysis and perturbation attacks. 
      </>
    ),
  }
];

export default function WorkshopPage() {
  return (
    <Layout title="OPTIMIST Workshop 2024">
      <div className="container">
        <h1>
          OPTIMIST Workshop <br />
          4 September, 2024 Halifax, Canada
        </h1>
        <p>
          The OPTIMIST workshop is a forum to present and discuss new efforts that enable open and reproducible research in implementation security.
        </p>

        <h2>🗓️ Tentative Program</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={index}>
                <td>{session.time}</td>
                <td>
                  <strong>{session.title}</strong>
                  {session.subtitle && <br />}
                  {session.subtitle && <span style={{ color: "#011673", fontWeight: "bold" }}>{session.subtitle}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* add a line here */}
        <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />

        <h2>🎙️ Invited Talks</h2>
        <div className="invited-talks">
          {invitedTalks.map((talk, index) => (
            <div key={index} className="talk">
              <img src={talk.img} alt={talk.name} style={{ width: "100px" }} />
              <div>
                <h3>{talk.title}</h3>
                <p>{talk.description}</p>
                <p>{talk.bio}</p>

              </div>
              {/* Add a horizontal line between talks, except after the last one */}
              {index < invitedTalks.length - 1 && <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />}
            </div>
          ))}
        </div>
        {/* add a line here */}
        <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />


        <h2>🗣️ Panelists</h2>
        <div className="panelists">
          {panelists.map((panelist, index) => (
            <div key={index} className="panelist">
              <img src={panelist.img} alt={panelist.name} style={{ width: "100px" }} />
              <div>
                <p>{panelist.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* add a line here */}
        <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />

        <h2>📢 Call for Contributions</h2>
        <p>

        As the OPTIMIST workshop is a forum to present and discuss new efforts that enable open and reproducible research in implementation security, the organizers and program committee invite submissions of proposals for talks. </p>

        Topics of interest for OPTIMIST include:
        <ul>
        <li>Datasets pertaining to Side-channel Analysis and Fault Analysis</li>
        <li>Standard Libraries for Metrics in Implementation Security</li>
        <li>Standard Application Programming Interfaces for Security Measurement Instrumentation</li>
        <li>Standard Hardware Interfaces for Security Measurement Instrumentation</li>
        <li>Standard Firmware Libraries and Hardware Targets for Security Evaluation</li>
        </ul>
        <p>
        Talks are 15 min in length, and are presented from the podium with slides, followed by a brief Q&A. The program committee will select among proposed talks based on fit for OPTIMIST and whether it will stimulate discussion and interest among the audience of hardware security practitioners, academics, and students. OPTIMIST welcomes talks based on both archival and non-archival work.</p>
        <p>Each submission should be nonanonymous. A talk abstract must be at most 1 page, including a title, name of contributors and presenter(s), and a work description that can include figures and references. The authors are encouraged to refer to their paper published elsewhere before (if any), serving as the basis for the talk.        </p>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <a href="/pdf/ches24-cfp.pdf" className="button button--primary">
            📄 Download the CFP
          </a>
          <a href="https://easychair.org/conferences/?conf=optimist2024" className="button button--secondary">
            Submit a Proposal
          </a>
        </div>

        {/* add a line here */}
        <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />

        <h2>📅 Timeline</h2>
        <ul>
          <li>June 21: Submissions</li>
          <li>July 15: Acceptance Notifications</li>
          <li>August 1: Program Announcement</li>
        </ul>

        {/* add a line here */}
        <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />

        <h2> Organizers</h2>
          <ul>
            <li>Aydin Aysu, North Carolina State University</li>
            <li>Fatemeh Ganji, Worcester Polytechnic Institute</li>
            <li>Patrick Schaumont, Worcester Polytechnic Institute</li>
        </ul>


        {/* add a line here */}
        <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />

        <h2>Technical Program Committee</h2>
        <ul>
            <li>Josep Balasch, Katholieke Universiteit Leuven</li>
            <li>Eleonora Cagli, CEA Tech</li>
            <li>Domenic Forte, University of Florida</li>
            <li>Ryan Kastner, University of California San Diego</li>
            <li>Mirjana Stojilovic, Ecole Polytechnique Federale de Lausanne</li>
            <li>Meltem Turan, National Institute for Standards and Technology</li>
        </ul>

        {/* add a line here */}
        <hr style={{ margin: "20px 0", border: "1px solid #ddd" }} />

      </div>
    </Layout>
  );
}
