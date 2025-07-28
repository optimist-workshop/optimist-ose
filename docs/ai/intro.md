---
sidebar_position: 1
---

# Acceleration of AI for Implementation Security Testing

This document reviews the state of open tools, data and methods related to the use of AI acceleration platforms and AI algorithms for implementation security testing. The document also identifies the key areas for improvements and potential for standardization. Previous OPTIMIST documents already discuss the file format for side-channel traces, the capture interface, and PQC testing methods for implementation security testing campaigns. 

## **Latest version: [Acceleration of AI for Implementation Security Testing v0.5 (7/28/2025)](/pdf/ai05.pdf)**
<details>
  <summary>BibTex</summary>

  ```bibtex
  @misc{ai-optimist2025,
    author = {Aydin Aysu and Lejla Batina and Eswari Devi N and Daniel Dinu and Fatemeh Ganji and Depdeep Mukhopadhyay and Seyedmohammad Nouraniboosjin and Stjepan Picek and Markku-Juhani Saarinen and Patrick Schaumont and Caner Tol and Marc Witteman},
    title = {Open Tools, Interfaces and Metrics for Implementation Security Testing: Acceleration of AI for Implementation Security Testing},
    year = {2025},
    month = {July},
    day = {28},
    version = {0.5},
    note = {Working Document},
    url = {https://optimist-ose.org/assets/files/ai05-5ef7ca249cd5b755da08970b9f8f7d0d.pdf},
    institution = {Optimist OSE},
    howpublished = {Online},
  }
  ```
</details>

---
## Opening Talks

<ul>
  <li>
    <strong>Debdeep Mukhopadhyay</strong>, Professor, Indian Institute of Technology Kharagpur — <em>Side Channel and Fault Attack Testing of Cryptosystems in the view of Dr AI</em> 
    <a href="/pdf/debdeep_slides.pptx" target="_blank" rel="noopener noreferrer">[Slides]</a>
    <details style={{ border: 'none', padding: 0, margin: '0.25em 0', background: 'transparent' }}>
      <summary style={{ fontWeight: 'bold', cursor: 'pointer', listStyle: 'none', marginLeft: '1em' }}>
        Abstract
      </summary>
      <div style={{ marginLeft: '2em', marginTop: '0.25em' }}>
      Machine learning techniques offer promising tools for security evaluations of crypto-implementations. In this talk, we present two developments in this context: first, the evolution of machine learning architectures for performing efficient side channel attacks. Secondly, we discuss the relatively less explored field on developing machine learning based test methodologies for leakage assessment under fault attacks. Finally, we conclude with some general perspectives in making ML-accelerated testing of implementation based security of cryptosystems more effective.
      </div>
    </details>
  </li>

  <li>
    <strong>Stjepan Picek</strong>, Associate Professor, Radboud University — <em>Machine Learning-based Side-channel Analysis and Evaluation</em> 
    <a href="/pdf/picek_slides.pdf" target="_blank" rel="noopener noreferrer">[Slides]</a>
    <details style={{ border: 'none', padding: 0, margin: '0.25em 0', background: 'transparent' }}>
      <summary style={{ fontWeight: 'bold', cursor: 'pointer', listStyle: 'none', marginLeft: '1em' }}>
        Abstract
      </summary>
      <div style={{ marginLeft: '2em', marginTop: '0.25em' }}>
      Machine learning (and more recently, deep learning) showed significant potential for side-channel analysis (SCA). Indeed, such techniques can break protected targets while requiring minimal expert knowledge. However, different setups (targets, ciphers, countermeasures, acquisition setups, etc.) may easily necessitate different machine learning architectures or settings. In this talk, we will briefly discuss (potential) advantages of standard architectures and libraries and how those could further push state-of-the-art machine learning-based SCA.
      </div>
    </details>
  </li>

  <li>
    <strong>Jakub Breier</strong>, Senior Cyber Security Manager, TTControl GmbH — <em>AI-accelerated Implementation Testing: Research vs Practice</em> 
   <a href="/pdf/OPTIMIST_Breier.pdf" target="_blank" rel="noopener noreferrer">[Slides]</a>
    <details style={{ border: 'none', padding: 0, margin: '0.25em 0', background: 'transparent' }}>
      <summary style={{ fontWeight: 'bold', cursor: 'pointer', listStyle: 'none', marginLeft: '1em' }}>
        Abstract
      </summary>
      <div style={{ marginLeft: '2em', marginTop: '0.25em' }}>
      Leakage assessment plays an important role in evaluating cryptographic implementations in practice. Methods such as test vector leakage assessment (TVLA) have been utilized in the certification laboratories to check if side-channel leakage is present. This talk will outline the current efforts in deep learning-based leakage assessment research and discuss the challenges of using the developed methods in practice.
      </div>
    </details>
  </li>
</ul>

The talks emphasize AI techniques in the context of side-channel analysis and fault injection, although the speakers point to the broad application of AI techniques for implementation attacks (such as for example Trojan detection, and cybersecurity vulnerability detection/patching). Both profiled and non-profiled techniques are applicable, and profiled techniques can outperform known classic techniques provided that the trained AI model can be ported to the actual inference target. The speakers identify the following common challenges regarding AI for Implementation Security.

1. There is a need for guidelines to help security engineers apply AI to implementation attacks. Such guidelines should cover data pre-processing, methods to avoid overfitting, recommended architectures in terms of the use-cases, and evaluation of training data quality.
2. There is a need for guidelines to support security engineers in enabling portability, such as how a model trained on one target can be applied to a different target.
3. There is a need for a consensus on how to share and/or license trained ML models and datasets for implementation security testing.
4. There is a need for additional datasets that can be used as a reference to test the quality of AI based attacks, especially for side-channel analysis. Such datasets must prioritize portability, stronger countermeasures, different cryptographic ciphers, and different hardware targets.


## References
1. V. Gohil, S. Patnaik, H. Guo, D. Kalathil, and J. Rajendran, “DETERRENT: Detecting Trojans using reinforcement learning,” IEEE Transactions on Computer‑Aided Design of Integrated Circuits and Systems, vol. 43, no. 1, pp. 57–70, Jan. 2024, doi: 10.1109/TCAD.2023.3309731.
2. A. K. Zhang, J. Ji, C. Menders, R. Dulepet, T. Qin, R. Y. Wang, J. Wu, K. Liao, J. Li, J. Hu, S. Hong, N. Demilew, S. Murgai, J. Tran, N. Kacheria, E. Ho, D. Liu, L. McLane, O. Bruvik, D.-R. Han, S. Kim, A. Vyas, C. Chen, R. Li, W. Xu, J. Z. Ye, P. Choudhary, S. M. Bhatia, V. Sivashankar, Y. Bao, D. Song, D. Boneh, D. E. Ho, and P. Liang, “BountyBench: Dollar impact of AI agent attackers and defenders on real-world cybersecurity systems,” arXiv preprint arXiv:2505.15216, 2025. [Online]. Available: https://arxiv.org/abs/2505.15216
3. S. Hajra, S. Chowdhury, and D. Mukhopadhyay, “EstraNet: An efficient shift-invariant transformer network for side-channel analysis,” IACR Cryptology ePrint Archive, vol. 2023, no. 1860, 2023. [Online]. Available: https://eprint.iacr.org/2023/1860
4. S. Saha, S. N. Kumar, S. Patranabis, D. Mukhopadhyay, and P. Dasgupta, “ALAFA: Automatic leakage assessment for fault attack countermeasures,” in Proc. Design Automation Conf. (DAC), San Francisco, CA, USA, Jun. 2019, Art. no. 136, pp. 1–6, doi: 10.1145/3316781.3317763.

## Working Group Meetings

* May 1, 2025, 3PM GMT (11AM EDT) - Working Group Meeting 1
* May 15, 2025, 3PM GMT (11AM EDT) - Working Group Meeting 2
* May 29, 2025, 3PM GMT (11AM EDT) - Working Group Meeting 3

---

#### Interested in Joining or Giving Feedback?

<div style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center", justifyContent: "left" }}>
  <a href="https://discourse.optimist-ose.org/"
     style={{
       display: "grid",
       placeItems: "center",
       padding: "8px 24px 16px", // Adjusted padding: top 8px, right/left 24px, bottom 16px
       background: "#0070f3",
       color: "white",
       textDecoration: "none",
       borderRadius: "8px",
       fontSize: "16px",
       fontWeight: "600",
       minWidth: "150px",
       height: "48px",
     }}>
    Join Our Forum
  </a>
</div>
