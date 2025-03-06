---
layout: default
---

# Open Tools, Interfaces and Metrics for Implementation Security Testing

The OPTIMIST workshop is a forum to present and discuss new efforts that enable open and reproducible research in implementation security. The OPTIMIST emphasis is not on the artifacts themselves, but on the interfaces, components, libraries, hardware, and software tools that enable reproducibility and quality in implementation security testing.

## Tentative Program


| Time  |     |
| ---   | :---: |
| 9:00  | Welcome Remarks |
| 9:15  | **Invited Talk:** Markku-Juhani Saarinen, <span style="color:#011673;font-weight:bold;">Artifact Evaluation and Reproducibility at CHES</span> |
|       | **Session 1** |
| 10:00 | Lukasz Chmielewski, Léo Weissbart and Lubomír Hrbáček, <span style="color:#011673;font-weight:bold;">Technical aspects of implementing and evaluating ECC crypto libraries protected against side-channel and fault injection attacks</span> |
| 10:15 | Kamyar Mohajerani, Jens-Peter Kaps and Kris Gaj, <span style="color:#011673;font-weight:bold;">Hardware API for Lightweight Cryptography</span> |
| 10:30 | **Coffee Break** |
| 11:00 | **Invited Talk:**  Colin O'Flynn, <span style="color:#011673;font-weight:bold;">Academia or Industry: Challenges of Building Open-Source Research Tools</span> |
| 11:45 | **Project Kickoff:** <span style="color:#011673;font-weight:bold;">An Open-Source Approach to Measure and Analyze Embedded Systems Security</span> |
| 12:30 | **Lunch** |
| 13:30 | **Invited Talk:** Damien Couroussé, <span style="color:#011673;font-weight:bold;">Fault Security Analysis and Verification: Challenges and New Directions</span> |
|       | **Session 2**   |
| 14:15 | Jonah Bosland, Stefan Ene, Peter Baumgartner and Vincent Immler, <span style="color:#011673;font-weight:bold;">SCARR: A High-Performance Side-Channel Analysis Framework</span> |
| 14:30 | Karel Král, Jean-Michel Picod, Luca Invernizzi and Elie Bursztein, <span style="color:#011673;font-weight:bold;">Sedpack - Scalable and efficient dataset library</span> |
| 14:45 | Karim Abdellatif, <span style="color:#011673;font-weight:bold;">SCADL: A Side-Channel Attack Tool Based on Deep Learning</span> |
| 15:00 | **Coffee Break** |
| 15:30 | **Invited Talk:** Gaëtan Cassiers, <span style="color:#011673;font-weight:bold;">Verification and evaluation of open-source implementations: the SMAesH study case</span>  |
| 16:00 | **Panel:** <span style="color:#011673;font-weight:bold;">Open-Source Ecosystem for Implementation Security Testing: Needs, Activities, Commitments</span> with Shivam Bhasin (NTU), Pascal Nasahl (LowRISC), Miguel Osorio (Google), Paul Scheidt (Synopsys), and Jasper van Woudenberg (Riscure)  |
| 17:00 | **Closing**      |


## Invited Talks

<table>

<tr>

	<td style="vertical-align:top;width:100px;">
	<img src="/assets/img/colin.jpg" alt="Colin O'Flynn"/>
	</td>

	<td>

	<b>Academia or Industry: Challenges of Building Open-Source Research Tools</b>

	<p>
	ChipWhisperer started as an open-source project for fault injection and side channel analysis, with the goal of making hardware widely available for researchers. This has resulted in a combination of both academic and industrial work, and this talk discusses how ChipWhisperer was developed, the challenges in trying to bridge the gap between various areas, and where more support is still needed. This includes how to build open-source projects that have long-term support without relying only on grants or short-term industry support, with specific details of how this was done with ChipWhisperer.
	</p>

	<p> <a
href="https://www.dal.ca/faculty/engineering/electrical/faculty-staff/our-faculty/professors/oflynn-colin.html">Colin
O'Flynn</a> is an Assistant Professor at Dalhousie University in Halifax, NS, Canada. He works in hardware security research, and previously co-founded NewAE Technology Inc, which was a company spun out of the development of the ChipWhisperer project. As part of this work he is co-author of the Hardware Hacking Handbook, and has given numerous talks on ChipWhisperer and related research performed with the tools.
</p>

	</td>

	</tr>


<tr>

<td style="vertical-align:top;width:100px;">
<img src="/assets/img/couro.jpg"
     alt="Damien Courousse"/>

</td>

<td>

<b>Fault security analysis and verification: challenges and new directions</b>

<p>
Fault injection attacks pose a serious threat to the security of
cryptographic implementations, but also more generally to the security
of any embedded system.  Recent research has illustrated that these
attacks can now successfully target complex systems-on-chips operated by
equally complex software stacks.  As a consequence, the attack surface
is rapidly growing, putting further pressure on effective robustness
analysis tools.  In this talk, we will illustrate the challenges facing
fault security analysis, and suggest new directions for development.
</p>

<p>
<a href="https://damien.courousse.fr/">Damien Couroussé</a> is with
CEA-List since 2011, as a Research Engineer and Senior Expert.  His
research interests include embedded software and its interaction with
hardware, compilation and runtime code generation for performance and
security, with a focus on hardware security.
</p>

</td>

</tr>

<tr>

<td style="vertical-align:top;width:100px;">
<img src="/assets/img/markku02.jpg"
     alt="Markku-Juhani Saarinen"/>

</td>

<td>

<b>Artifact Evaluation and Reproducibility at CHES</b>

<p> Artifact evaluation is an interactive process in which the
Artifact Evaluation Committee (AEC) tries to help authors publish
good-quality permanent artifacts (such as source code and data sets)
related to their research. In the CHES 2024 artifact evaluation,
authors of accepted papers could choose to have their research
artifacts evaluated against functionality and reproducibility
"badges." The use of reproducibility badges is now a standard
procedure in many non-IACR security conferences (USENIX Security, ACM
CCS, NDSS, ACSAC, and several IEEE conferences). We discuss various
aspects of functionality and reproducibility testing that we have
encountered during the 2024 period, especially related to hardware and
software artifacts.</p>

<p>As in all natural sciences, some results are easily reproducible,
while others are not (perhaps due to data acquisition methods) -- and
this does not necessarily make them lesser works! In the CHES context,
we repeatedly ran into muddy waters when authors asked the AEC to
evaluate works with leakage assessments (e.g., "TVLA") for
reproducibility rather than mere functionality. Since these are
essentially physical science experiments, specific questions about
laboratory procedures, calibration methods, and statistical treatment
arise. Despite some ISO standardization work in this area, the CHES
community should try to reach and document a further consensus on SCA
reproducibility. This would also help the industry to refine and
harmonize best practices in this area.  </p>

<p> <a href="https://www.tuni.fi/en/markku-juhani-saarinen">Markku-Juhani Saarinen</a>
is a Professor of Practice (työelämäprofessori) at
Tampere University (Finland). Markku served as the Artifact Chair for
IACR CHES 2024. Markku started his career as a cryptographer at SSH
Communications Security in 1997, working on the now-ubiquitous SSH2
protocol. He has stayed with technical information security since
then, dividing his time between academia and the security
industry. Prior to moving back to his native Finland, he was with
PQShield in Oxford (2018-2023). Markku holds a Ph.D. in Information
Security from Royal Holloway, University of London (2009).  </p>
</td>

</tr>

<tr>

<td style="vertical-align:top;width:100px;">
<img src="/assets/img/cassiers.jpg" alt="Gaetan Cassiers">
</td>


<td>

<b>Verification and evaluation of open-source implementations: the SMAesH study case</b>

<p> SMAesH is an open-source hardware implementation of AES protected against
side-channel analysis with the masking countermeasure. It achieves state-of-the
art performance, has been proven secure in the robust probing model and
withstood public scrutiny during the CHES 2023 challenge.
In this talk, we present SMAesH, discuss the verification and evaluation process
we followed to gain trust in its security, and we present the ongoing and future
work on the topic. Finally, we discuss the strength and weaknesses of SMAesH's
evaluation process.
</p>

<p> <a href="https://perso.cassiersg.be/">Gaëtan Cassiers</a> 
is a postdoctoral researcher at the Crypto Group of UCLouvain.
His research focuses on the analysis and design of side-channel countermeasures,
most prominently on masking techniques. He co-organized the CHES 2020 and 2023
side-channel evaluation challenges. In 2022 he co-founded the SIMPLE-Crypto
(non-profit) association that promotes open-source in the field of cryptography
with physical security. He is a developer and maintainer of two SIMPLE-Crypto
projects: SCALib, a side-channel security evaluation library and SMAesH, a
masked implementation of the AES.</p>

</td>

</tr>

</table>     


## Panelists

<table>

<tr>

<td style="vertical-align:top;width:100px;">
<img src="/assets/img/shivam.png" alt="Shivam Bhasin">
</td>

<td>

<p> <a
href="https://www.linkedin.com/in/shivam-bhasin-81901110">Shivam
Bhasin</a> is a Principal Research Scientist and Programme Manager
for Cryptographic Engineering at the Centre for Hardware Assurance,
Temasek Laboratories, Nanyang Technological University, Singapore. He
earned a PhD in Electronics & Communication from Telecom Paristech
(2011) and an Advanced Master in Security of Integrated Systems &
Applications from Mines Saint-Etienne, France (2008). Prior to NTU, he
was a Research Engineer at Institut Mines-Telecom, France, and a
visiting researcher at UCL, Belgium (2011) and Kobe University
(2013). His research focuses on embedded security, trusted computing,
and secure designs. Bhasin has published extensively and contributed
to the ISO/IEC 17825 standard.</p>

</td>

</tr>

<tr>

<td style="vertical-align:top;width:100px;">

<img src="/assets/img/pascal.jpg" alt="Pascal Nasahl"> 

</td>

<td>

<p> <a href="https://nasahl.li">Pascal Nasahl</a> is a senior security
engineer at lowRISC, where he does R&D to harden and analyze the
security of OpenTitan. He obtained a PhD in hardware security from TU
Graz, where his focus was on researching countermeasures against
software and physical attacks. While with TU Graz, Pascal worked on
fault attacks, countermeasures, and verification at Google, Intel
Labs, and Riscure.
</p>

</td>

</tr>

<tr>

<td style="vertical-align:top;width:100px;">

<img src="/assets/img/miguel.jpg" alt="Miguel Osorio"> 

</td>

<td>

<p> Miguel Osorio is a Staff Software Engineer at Google, has provided
technical leadership to OpenTitan, the world's first open source
silicon root of trust project.  His focus is design and implementation
of security architecture and features, fostering open source
methodologies and community engagement, as well as overseeing
development and integration infrastructure. His work leverages deep
expertise in embedded security, hardware and software penetration
testing, provisioning protocols and infrastructure, and cloud
computing, to enable secure provisioning of integrated circuits in
critical applications. Committed to advancing the field, Miguel
actively collaborates with industry partners and academic
institutions, pushing the boundaries of open source hardware and
security.  </p>

</td>

</tr>



<tr>

<td style="vertical-align:top;width:100px;">

<img src="/assets/img/scheidt.png" alt="Paul Scheidt"> </td>

<td> <p> <a
href="https://www.linkedin.com/in/paul-scheidt-b239b1/">Paul
Scheidt</a> is Principal Engineer at Synopsys and is responsible for
leading the development of cryptographic IP and countermeasure
analysis tools. Previously he was a founding member of the Google
Titan security chip team. He led the development of all cryptographic
accelerators and secure RISC-V processors used in three generations of
the Titan product. In the quest to reach the highest security levels,
Paul has spent quality time pentesting his team's designs, hunting for
side channel leaks and fault vulnerabilities.  </p> </td>

</tr>

<tr>

<td style="vertical-align:top;width:100px;">

<img src="/assets/img/jasper02.png" alt="Jasper van Woudenberg"> </td>

<td>
<p> <a href="https://www.linkedin.com/in/jaspervw/">Jasper van Woudenberg</a> is CTO for Riscure North America and co-author of
Hardware Hacking Handbook: Breaking Embedded Security with Hardware
Attacks. He works with Riscure’s San Francisco based team to improve
embedded device security through innovation. In the past, Jasper
worked for a penetration testing firm, where he performed source code
resview, binary reverse engineering and tested application and network
security. At Riscure, Jasper deals with various aspects of hardware
security; from design review and logical testing, to side-channel
analysis and perturbation attacks. 
</p>
</td>

</tr>






</table>


## Call for Contributions 

As the OPTIMIST workshop is a forum to present and discuss new efforts that enable open and reproducible research in implementation security, the organizers and program committee invite submissions of proposals for talks.

Topics of interest for OPTIMIST include

* Datasets pertaining to Side-channel Analysis and Fault Analysis;
* Standard Libraries for Metrics in Implementation Security;
* Standard Application Programming Interfaces for Security Measurement Instrumentation;
* Standard Hardware Interfaces for Security Measurement Instrumentation;
* Standard Firmware Libraries and Hardware Targets for Security Evaluation;

Talks are 15 min in length, and are presented from the podium with slides, followed by a brief Q&A. The program committee will select among proposed talks based on fit for OPTIMIST and whether it will stimulate discussion and interest among the audience of hardware security practitioners, academics, and students. OPTIMIST welcomes talks based on both archival and non-archival work.

Each submission should be nonanonymous. A talk abstract must be at most 1 page, including a title, name of contributors and presenter(s), and a work description that can include figures and references. The authors are encouraged to refer to their paper published elsewhere before (if any), serving as the basis for the talk.

* [Download the CFP](OPTIMIST_CFP.pdf)
* [Submit a talk proposal](https://easychair.org/conferences/?conf=optimist2024)

## Timeline

**The submission deadline is extended until June 21, AOE**

* June 21: Submissions
* July 15: Acceptance Notifications
* August 1: Program Announcement

## Organizers

* Aydin Aysu, North Carolina State University
* Fatemeh Ganji, Worcester Polytechnic Institute
* Patrick Schaumont, Worcester Polytechnic Institute

## TPC

* Josep Balasch, Katholieke Universiteit Leuven
* Eleonora Cagli, CEA Tech
* Domenic Forte, University of Florida
* Ryan Kastner, University of California San Diego
* Mirjana Stojilovic, Ecole Polytechnique Federale de Lausanne
* Meltem Turan, National Institute for Standards and Technology
