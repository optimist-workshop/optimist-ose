---
sidebar_position: 5
title: Analysis Techniques
---


# Open Source Analysis Techniques

We identify several challenges in extending common testing methods for post-quantum cryptography.  TVLA as such has been used extensively in both academic work as well as in the industry evaluation of side-channels.  However, the TVLA application for post-quantum sub-routines is non-trivial and may generate incorrect results.  Open source analysis techniques and establishing best practices are critical as PQC deployments are emerging.

Several challenges stem from the inherent algorithmic randomness and complex data dependencies in PQC schemes like Kyber. Traditional fixed-vs-random testing paradigms struggle to isolate sensitive intermediates due to probabilistic operations such as sampling and rejection, which dilute leakage signals. Additionally, PQC algorithms often require significantly more traces for meaningful statistical analysis (which makes them more susceptible to false positives), and the variability in implementation platforms (e.g., softcore RISC-V on FPGAs) introduces noise and architecture-specific artifacts. These issues limit the effectiveness of conventional TVLA and highlight the need for tailored test strategies, better trace preprocessing, and complementary leakage detection methods.

At a higher level, there may be confusion about which variables in the algorithms are sensitive (vs. public) and must be protected.  This is especially important for lattice-based encryptions with rejection subroutines.  Having general guidelines on the critical variables and the number of measurements for testing could benefit future infrastructures.

The sources below identify some challenges and efforts in TVLA tuning for PQC: 

    1. WiP: Applicability of ISO Standard Side-Channel Leakage Tests to NIST Post-Quantum Cryptography [https://www.computer.org/csdl/proceedings-article/host/2022/09839849/1FHqIHDJuN2](https://www.computer.org/csdl/proceedings-article/host/2022/09839849/1FHqIHDJuN2)
    2. Evaluating the effectiveness of Test Vector Leakage Assessment when performed on Kyber running on a softcore RISC-V processor on an FPGA 
    [https://essay.utwente.nl/98334/1/Becker_BA_EEMCS.pdf](https://essay.utwente.nl/98334/1/Becker_BA_EEMCS.pdf)
    3. Continuous integration side channel testing for ML-KEM , PQShield
    [https://www.creachlabs.fr/sites/default/files/public/media/document/2024-12/ecw2024-pqc-zijlstratimo-20241120.pdf](https://www.creachlabs.fr/sites/default/files/public/media/document/2024-12/ecw2024-pqc-zijlstratimo-20241120.pdf)
