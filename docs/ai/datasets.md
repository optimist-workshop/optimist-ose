---
sidebar_position: 6
---

# Datasets

The working group observes that there is no common methodology or practice to systematically share datasets in the context of AI for implementation security testing. This problem was also observed earlier during the OPTIMIST discussions on Standard File Formats for side-channel traces. ASCAD is a good starting point; ScapeGOAT offers an ability to store metadata and to organize trace sets hierarchically. For long-term storage, the working group concluded that zenodo.org, figshare.com, and huggingface.co are possible containers. Zenodo offers a DOI for the data; huggingface offers free storage as long as the data is publicly shared. The following table is a partial list of known public datasets with variable and fixed keys. 

**Standard Datasets for Side-channel**

| ID | SW/HW (Seq/Par) | Prot/Unprot | Features |
| :--- | :--- | :--- | :--- |
| [ASCAD](https://github.com/ANSSI-FR/ASCAD) | SW | Both | Alignment, 8-bit, Fix/Var Key AES |
| [ASCADv2](https://www.data.gouv.fr/fr/datasets/ascadv2/) | SW | Prot | 32-bit, Fix/Var Key AES |
| [AESRD](https://github.com/ikizhvatov/randomdelays-traces) | SW | Prot | 8-bit, Random Delay AES |
| [AESHD](https://github.com/AESHD/AES_HD_Dataset) | HW | Unprot | FPGA, AES |
| [CS3, CS5](https://github.com/Chair-for-Security-Engineering/DL-LA) | HW | Unprot | FPGA, misaligned tr, PRESENT |
| [ECC](https://www.dropbox.com/scl/fi/cpoaco0zwmgzdarj2427p/ecc_datasets.zip) | SW | Prot | 32-bit, Curve25519 EdDSA |
| [WolfSSL](https://github.com/leoweissbart/MachineLearningBasedSideChannelAttackonEdDSA) | SW | Prot | 32-bit, Curve25519 EdDSA |
| CHES CTF | | | Partially on [aisylab](https://aisylabdatasets.ewi.tudelft.nl/) |
| [GPAM ECC](https://github.com/google/scaaml/tree/main/papers/datasets/ECC/GPAM) | HW | Prot | ECC scalar multiplication, large |
| DPA Contest V2 | HW | Both | AES-128 on SASEBO GII <br/> https://cloud.telecom-paris.fr/s/N5qgyMdxEcqipN2 <br/> https://cloud.telecom-paris.fr/s/iScPMi78Jg8jere |
| DPA Contest V4 | SW | Both | AES-256 on ATMega-163 <br/> [Link](https://cloud.telecom-paris.fr/s/PP79GTSj9mmg4xL) |
| DPA Contest V4.2| SW | Both | AES-128 on ATMega-163 \<br/\> [Link](https://cloud.telecom-paris.fr/s/JM2iaRZfwrNKtSp) |
| AES_HD_MM | HW | | *Missing- AES 128 on SASEBO GII* |
| [Ed25519](https://github.com/leoweissbart/MachineLearningBasedSideChannelAttackonEdDSA) | SW | Both | EdDSA on STM32F4 |
| [Curve25519](https://www.dropbox.com/scl/fi/cpoaco0zwmgzdarj2427p/ecc_datasets.zip) | SW | Both | EdDSA on STM32F4 |
| Kyber | SW | Unprot | https://eprint.iacr.org/2025/811 |
| Ascon | SW/HW | Unprot | https://zenodo.org/records/10229484|
| SMAesH | HW | Prot | AES block cipher with masking as a countermeasure |
| scaaml | NXP K82F | Both | ECC on NXP K82F https://github.com/google/scaaml/tree/main/papers/datasets/ECC/GPAM |

### Need for other dataset
Side-channel dataset are broadly available for AES, ECC, EdDSA implementations, so the creation of side-channel dataset (SW/HW) for other ciphers, standardized Post Quantum Cryptographic algorithms (protected and unprotected) would be useful.

### References
- S. Picek, G. Perin, L. Mariot, L. Wu, and L. Batina, “SoK: Deep learning-based physical side-channel analysis,” ACM Comput. Surv., vol. 55, no. 11, Art. no. 227, pp. 1–35, 2023. [Online]. Available: https://doi.org/10.1145/3569577 (Table on Page 13)
- D. Mehta, T. Marcantino, M. Hashemi, S. Karkache, D. Shanmugam, P. Schaumont, and F. Ganji, “SCAPEgoat: Side-channel Analysis Library,” in Proceedings of the IEEE 43rd VLSI Test Symposium (VTS), 2025, pp. 1–7, doi: [10.1109/VTS65138.2025.11022809](https://ieeexplore.ieee.org/document/11022809).
- Side-channel Analysis section on Papers With Code: https://paperswithcode.com/task/side-channel-analysis
- E. Prouff, R. Strullu, R. Benadjila, E. Cagli, and C. Dumas, “Study of deep learning techniques for side-channel analysis and introduction to ASCAD database,” J. Cryptographic Engineering, vol. 10, no. 2, pp. 163–188, 2019, doi: [10.1007/s13389-019-00220-8](https://link.springer.com/article/10.1007/s13389-019-00220-8).
