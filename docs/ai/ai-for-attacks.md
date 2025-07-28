---
sidebar_position: 4
title: AI for Implementation Attacks
---

# AI for Implementation Attacks

The working group discussed a structured representation of the domain of AI for Implementation Attacks with 7 major topics.


- Standard Architectures for AI based Implementation Security Testing
    - CUDA
- Countermeasure Design
    - Randomization and Shuffling
    - Generating Secure Implementations
    - Hardware Trojan Detection
    - EMFI and voltage glitch detection
    - Pre-silicon vs Post-silicon
        - Presilicon - need <u>specific</u> training, need <u>specific</u> testing (develop countermeasures iteratively)
- Side Channel Analysis
    - Portability
    - Profiled vs Non-profiled Analysis
    - Collision Neural Networks
- Fault Injection
    - AI-based approaches for Fault Detection
    - Fault Injection Parameter Search
    - Formal/Symbolic AI
- Advanced AI Techniques
    - Reinforcement Learning
    - Hyperparameter Optimization
    - Graph Neural Networks
    - Genetic Algorithms
    - Bayesian Techniques
    - Diffusion Models
    - Explainability: Explainable Artificial Intelligence (XAI) in hardware security enhances the trust and accountability of AI systems. By applying XAI concepts to hardware security, development of secure and transparent AI systems can be achieved. 
    - Attribution
    - Occlusion Methods 
    - Uncertainty Estimation
    - Interpretable Neural Networks
- New Directions and Needs
    - Tiny Models for the edge
    - Zero-day evaluation
    - Explainability Toolkit
    - Pretrained libraries
    - Model Zoo
    - Pretrained Datasets (Transfer Learning):
        - Standard Dataset
        - Higher Order Masking
        - Portability
    - Huggingface for dataset storage
    - Kaggle for dataset storage (around 200GB)

AI algorithms can also be used for the evaluation of implemented countermeasures against implementation attacks along with Test Vector Test Vector Leakage Assessment (TVLA).

### References
- S. Karayalcin, M. Krcek, and S. Picek, "A practical tutorial on deep learning-based side-channel analysis," Cryptology ePrint Arch., Paper 2025/471, 2025. [Online]. Available: https://eprint.iacr.org/2025/471
- D. Koblah, R. Acharya, D. Capecci, O. Dizon‑Paradis, S. Tajik, F. Ganji, D. Woodard, and D. Forte, “A survey and perspective on artificial intelligence for security‑aware electronic design automation,” ACM Trans. Des. Autom. Electron. Syst., vol. 28, no. 2, pp. 1–57, 2023, doi: 10.1145/3563391.
- T. Moos, F. Wegener, and A. Moradi, "DL-LA: Deep learning leakage assessment: A modern roadmap for SCA evaluations," Cryptology ePrint Arch., Paper 2019/505, 2019. [Online]. Available: https://eprint.iacr.org/2019/505
- A. Gambra, U. Rioja, D. Chatterjee, I. Armendariz, and L. Batina: “Machine Learning Fault Injection Detection in Clock Signals: An Analysis of Frequency Impact", IEEE ISVLSI 2025, July 5-9, Kalamata, Greece. Available: https://eprint.iacr.org/2024/1939
- S. Nouraniboosjin and F. Ganji, "Uncertainty estimation in neural network-enabled side-channel analysis and links to explainability," Cryptology ePrint Arch., Paper 2025/688, 2025. [Online]. Available: https://eprint.iacr.org/2025/688
- S. Picek, G. Perin, L. Mariot, L. Wu, and L. Batina, "SoK: Deep learning-based physical side-channel analysis," ACM Comput. Surv., vol. 55, no. 11, Art. no. 227, pp. 1–35, 2023, doi: 10.1145/3569577.
- M. C. Tol and B. Sunar, "Zeroleak: Using LLMs for scalable and cost-effective side-channel patching," arXiv preprint, arXiv:2308.13062, 2023. [Online]. Available: https://arxiv.org/abs/2308.13062
- Federal Office for Information Security (BSI). (2024). Guidelines for evaluating machine-learning based side-channel attack resistance – Part of AIS 46 (Version 1). https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Zertifizierung/Interpretationen/AIS_46_AI_guide.pdf
- D. Van der Valk, S. Picek, and S. Bhasin, “Kilroy was here: The first step towards explainability of neural networks in profiled side-channel analysis,” in Proc. 11th Int. Workshop Constructive Side-Channel Analysis and Secure Design (COSADE), Lugano, Switzerland, Apr. 2020, Revised Selected Papers, vol. 12612, Springer, 2021, pp. 175–199. doi: 10.1007/978-3-030-68773-1_9
- L. Wu, Y.-S. Won, D. Jap, G. Perin, S. Bhasin, and S. Picek, “Explain some noise: Ablation analysis for deep learning-based physical side-channel analysis,” IACR Cryptology ePrint Archive, vol. 2021, no. 717, pp. 1–24, 2021. [Online]. Available: https://eprint.iacr.org/2021/717
