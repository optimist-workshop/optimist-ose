---
sidebar_position: 4
title: Datasets
---


# Open Source Datasets
We identify a critical gap in open-source datasets for the implementation security testing of post-quantum cryptography.  The following are our guidelines for generating this dataset for side-channel analysis.  Fault injection datasets would also be useful, but need more research maturity before discussing specifics.

## Dataset Scope and Strategy
- Full algorithm execution traces may result in large, impractical datasets.
- A more effective approach may involve generating side-channel traces for unit-level testing.



## Proposed Units for Trace Collection
- Targeted units include:
    - Number Theoretic Transform (NTT)
    - Samplers (e.g., binomial, ternary, Gaussian, rejection sampling)
    - Hash functions (particularly those used in PRFs for PQC)
    - Comparison functions (e.g., for rejection sampling)
    - Arithmetic-to-Boolean and Boolean-to-Arithmetic conversions used in masking
- Each unit can be further subdivided based on algorithmic variations and implementation strategies.

## Implementation Variants
- Each unit should ideally be implemented in four forms:
    1. Baseline (no countermeasures)
    2. First-order masking
    3. Shuffling
    4. Higher-order masking

## Hardware Measurement Emphasis
- While software-based measurements are acceptable, there is a strong community preference for hardware-based side-channel measurements, particularly from FPGA implementations

## Metadata Requirements
- Trace datasets should be accompanied by detailed metadata, including:
    - FPGA implementation specifics
    - Description of applied defense techniques
    - Methodology for input generation
- The metadata description could further follow details in our [earlier document](https://optimist-ose.org/assets/files/OPTIMIST_OSE_API-ffd13873f254c4784c9ecf78133fcc55.pdf).

Examples of existing datasets: Kyber [https://eprint.iacr.org/2025/811](https://eprint.iacr.org/2025/811) 
