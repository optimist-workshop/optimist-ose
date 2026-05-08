---
sidebar_position: 1
---

# OPTIMIST PhD Forum

The OPTIMIST PhD Forum is oriented at Ph.D. students working on topics related to AI and side-channel analysis (SCA). The goal is to create an interactive environment where students:
*	Present short research pitches,
*	Share their recent or published work,
*	Build a strong network and exchange ideas.

Interested in joining the next session?

<div style={{ display: "flex", gap: "10px", marginTop: "20px",  alignItems: "center"}}>
  <a href="/contact"
     className="button button--secondary"
     style={{
       display: "inline-flex", alignItems: "center", justifyContent: "center", paddingTop: "13px", paddingBottom: "0px"
     }}>
    Contact Us
  </a>
</div>

## Session 1: 16 April 2026

### Opening Talk

* Trevor Yap: **Breaking the blindfold: Deep learning-based blind side-channel analysis**

Blind side-channel analysis (SCA) aims to recover secret keys without
access to plaintext or ciphertext, a setting where existing approaches
have shown limited practical success. In this work, we introduce Deep
Learning-based Blind Side-channel Analysis (DL-BSCA), a framework that
leverages deep neural networks for blind key recovery. We also propose
Multi-point Cluster-based (MC) labeling, a method that improves trace
labeling by exploiting dependencies between leakage variables across
multiple sample points. We evaluate our approach on four real-world
datasets spanning AES, ASCON, and Kyber implementations on both AVR
XMEGA and ARM STM32F4 platforms. Our results demonstrate successful
blind key recovery, including the first blind SCA attack against
desynchronization countermeasures.

### Discussion

The first session of the OPTIMIST PhD Hour focused on introducing
attendees to one another and fostering collaboration among researchers
working in AI and side-channel analysis. Participants shared their
academic backgrounds, discussed the research problems they are
currently working on, and engaged in networking and brainstorming
discussions aimed at finding potential solutions and new research
directions. The meeting featured a diverse range of technical
discussions and encouraged interdisciplinary collaboration among
participants. These topics were discussed during the session:

1. Fully blind side-channel analysis in the presence of masking countermeasures. 
2. Explainability in deep learning-based side-channel analysis. 
3. Plateau effects in machine learning models used for side-channel analysis. 
4. Transformers and their applications in side-channel analysis. 

## Session 2: 30 April 2026

### Talk 1

* Arna Roy: **A Framework for Scalable Pre-Silicon Side-Channel  Analysis**

We present a hierarchical and module-centric framework for scalable
pre-silicon side-channel leakage assessment of Post-Quantum
Cryptography hardware. By isolating security-relevant modules and
signals, the framework significantly reduces simulation complexity
while enabling efficient and interpretable leakage
analysis. Evaluation on ML-DSA-87 demonstrated the ability to detect
leakage in masked implementations while achieving substantial
efficiency improvements compared to full-design RTL and gate-level
evaluation.

### Talk 2

* Fatemeh Khojasteh Dana: **GlitchSnipe: Toward Localized Voltage Fault Attacks**

Voltage glitching attacks were analyzed through the perspective of
electromagnetic energy propagation within the power delivery network
(PDN). The study showed that different frequency components travel
across the chip in distinct patterns, enabling localized fault
injection through sinusoidal voltage modulation. Experimental results
on FPGA platforms demonstrated that different chip regions exhibit
varying sensitivities to injected frequencies, and that even small
placement changes can significantly impact resilience against
voltage-based fault attacks.

### Discussion

During the second OPTIMIST PhD Hour, Dr. Andrew Adiletta introduced
the MITRE Side-Channel Lab, an open-source educational platform
designed for understanding side-channel analysis and exploring
practical applications. The discussion included a walkthrough of one
of the interactive notebooks that demonstrates and teaches core SCA
concepts through hands-on examples. Participants were also provided
access to the online notebook environment through
[MITRE Side-Channel Lab](https://mybinder.org/v2/gh/janisbent/sc-lab/latest?filepath=lab.ipynb).

## Session 3: 14 May 2026



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
