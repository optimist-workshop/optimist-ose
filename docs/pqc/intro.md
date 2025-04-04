---
sidebar_position: 1
---

# Testing Post-Quantum Cryptography Implementation Security

**OPTIMIST** (Open Tools, Interfaces, and Metrics for Implementation Security Testing) is an open-source initiative to improve standardization and interoperability in security testing for cryptographic implementations. As PQC schemes move toward real-world deployment, ensuring their resilience against implementation attacks is critical. This session will bring together researchers, industry professionals, and government stakeholders to discuss challenges, methodologies, and best practices for securing PQC implementations.  

---

## Plenary Meeting  
**Date & Time:** Thursday, March 27, 2025, at 11 AM EDT (3 PM GMT)  
**Zoom Link:** [Join Meeting](https://wpi.zoom.us/j/91072710391)  

#### 11:00-11:05 AM — Introduction & Overview  
**Aydin Aysu**, Associate Professor, North Carolina State University  

#### 11:05-11:15 AM — How to do Dilithium TVLA (with Adams Bridge examples)  
**Markku-Juhani O. Saarinen**, Professor of Practice, Tampere University  
**Abstract:**  
TVLA leakage assessments are often used in academia and industry to demonstrate the effectiveness of PQC side-channel countermeasures. TVLA is discussed in the ISO/IEC 17825:2024 standard and may eventually be part of FIPS 140 testing procedures. However, applying TVLA to PQC algorithms such as ML-KEM and ML-DSA is not as straightforward as one might think; for example, test designer must understand which of the numerous key and internal variables are sensitive -- and which are not. We use the Adams Bridge accelerator as an example case. Adams Bridge is the ML-DSA (Dilithium) accelerator component of the Caliptra 2.0 Root of Trust unit. Caliptra is an open-source Root-of-Trust project jointly developed by AMD, Google, Microsoft, NVIDIA, and other partners. This is a *"preview"* of parts of my hardware.io 2025 talk (at the end of May) ["Why 'Adams Bridge' Leaks: Attacking a PQC Root-of-Trust."](https://hardwear.io/usa-2025/speakers/markku-juhani.php)  

#### 11:15-11:25 AM — Hardware Challenges in PQC  
**Sujoy Sinha Roy**, Associate Professor, TU Graz  
**Abstract:**  
I will give an overview of the challenges hardware designers typically face while implementing PQC algorithms. I will briefly touch on reproducibility/portability issues for PQC hardware designs.  

#### 11:25-11:35 AM — TVLA on NTT transformations  
**Panasayya Yalla**, Principal Security Analyst, Riscure Security Solutions / Keysight Technologies  
**Abstract:**  
I will provide a high-level overview of our efforts in generating test vectors to assess side-channel leakage in NTT transformations, with a particular focus on butterfly NTT transformations within the ML-DSA PQC algorithm.  

#### 11:35-11:45 AM — Q&A  

#### 11:45 AM – 12:00 PM — Interactive Discussion  
A collaborative discussion and brainstorming in an interactive group format.  

---

## Working Group Meetings

* 10 April, 3PM GMT (11AM EDT) - Working Group Meeting 1
* 24 April, 3PM GMT (11AM EDT) - Working Group Meeting 2
* 8 May, 3PM GMT (11AM EDT) - Working Group Meeting 3

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
    Join Discourse
  </a>
</div>
