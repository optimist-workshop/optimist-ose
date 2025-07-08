---
sidebar_position: 2
title: Intro
---

# Testing Post-Quantum Cryptography Implementation Security

Post-Quantum Cryptography (PQC) has become one of the most critical fields due to the anticipated emergence of quantum computers that could be capable of rendering widely deployed public-key cryptographic algorithms ineffective. RSA, DSA, and ECC are among such algorithms. As emphasized in the recent PQC roadmap published by MITRE Corporation [1], this presents an urgent security challenge, particularly in the context of adversaries who may already be collecting and storing encrypted data with the intent to decrypt it once sufficient quantum capabilities become available. To mitigate these long-term risks, it is imperative that organizations begin transitioning to quantum-resistant algorithms now. 

The roadmap in [1] outlines a structured, four-phase framework to help organizations proactively prepare for quantum-era threats to classical cryptography: (1) preparation phase that establishes mission relevance for PQC, assigning a migration lead, and engaging stakeholders; (2) Baseline understanding which identifies crypto assets, prioritizing systems, and budgeting; (3) Planning & execution phase to come up with solutions and implementing them; and (4) Monitoring & Evaluation phase that accounts for validating implementations, tracking progress, and maintaining agility as quantum capabilities evolve. 

In line with the PQC roadmap, the primary goal of this document is to consolidate the need for implementation security testing for post-quantum cryptography.  The document aims to help guide the community by identifying the key areas for improvement, pinpointing the existing helpful open-source efforts, and defining security testing interfaces for post-quantum cryptography implementations. 

The aim is to capture the unique features of post-quantum cryptography testing.  General concerns about testing public-key cryptosystems (e.g., those that apply to RSA/ECC solutions) are out of scope.  Previous OPTIMIST documents already define the glossary and capture interface descriptions for implementation security testing campaigns.  These are avoided to reduce redundancy across multiple documents.
