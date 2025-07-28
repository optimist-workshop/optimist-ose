---
sidebar_position: 5
title: Implementation Attacks on AI
---

# Implementation Attacks on AI
The working group also discussed implementation attacks on AI by starting with the attacker model. Because of the diversity of use cases and attack models, when compared to traditional cryptographic assets, the working group selected two specific attacker models for further discussion. The first attacker model applies to the embedded case, where the attacker has access to the physical implementation of the neural network. The second attacker model applies to the cloud setting, where the attacker needs to mount attacks indirectly by manipulating/observing computing resources that are physically close to the neural network implementation.

**Scenario 1:** Attack on an embedded platform. Consider a sensor that is used to drive an authentication processor, such as a camera sensor for face recognition. The sensor captures potentially complex and noisy data that requires processing in a neural network. The final labeling (neural network output) authenticates the user and is susceptible to impersonation or manipulation. The working group considers side-channel analysis on the neural network processing as a starting point to reveal the authentication token.
Reverse engineering of neural networks also becomes possible through side-channel analysis:
- Retrieval of the number of neurons and layers through simple power/EM analysis
- Retrieval of trained weight value through correlation power analysis

**Scenario 2:** Attack on a cloud platform. Consider a neural network that operates in a shared processing architecture, and an attacker that aims to manipulate (not just reveal) the token processed by the neural network. Because of the network’s complexity, redundancy techniques such as commonly applied against fault injection, are less suitable. Instead the defender aims to reveal the injected fault as soon and as reliable as possible. And conversely, the attacker aims to identify the location for the most effective fault injection.

The attacker model is traditionally defined in terms of the level of access.
- Physical access
    - Side channel measurements
    - Fault injection
    - Preventing firmware updates or hijacking GPU hardware during firmware update
- Memory attacker
    - Neural networks have complex memory hierarchies, leading to multiple attacker models: intra- and inter-GPU, intra- and inter-VM. Confidential computing implements logical isolation in multi-processor context and is a target in each of these cases.
- Input/output attacker
    - Manipulation of data, such as adversarial training, prompt injection, LLM inversion, are potential vulnerabilities with their own defenses. However, the I/O attacker is considered out of scope for the implementation attacker.
- Disclosure of new attacks and attacker models is considered to be a challenge.


### References
- S. Tajik and F. Ganji, “Artificial neural networks and fault injection attacks,” in Security and Artificial Intelligence: A Crossdisciplinary Approach, Cham, Switzerland: Springer International Publishing, 2022, pp. 72–84. [Online]. Available: https://arxiv.org/pdf/2008.07072.
- M. C. Tol and B. Sunar, “Zeroleak: Using LLMs for scalable and cost-effective side-channel patching,” arXiv preprint, arXiv:2308.13062, 2023. [Online]. Available: https://arxiv.org/pdf/2505.00817
- P. Horváth, D. Lauret, Z. Liu, and L. Batina, “SoK: Neural network extraction through physical side channels,” in Proc. USENIX Security Symp., 2024. [Online]. Available: https://www.usenix.org/conference/usenixsecurity24/presentation/horvath
- P. Horváth, L. Chmielewski, L. Weissbart, L. Batina, Y. Yarom: BarraCUDA: GPUs do Leak DNN Weights. to appear at USENIX Security Symposium 2025. Available: https://arxiv.org/abs/2312.07783
- A. Adiletta and B. Sunar, “Spill the beans: Exploiting CPU cache side-channels to leak tokens from large language models,” arXiv preprint, arXiv:2505.00817, 2025. [Online]. Available: https://doi.org/10.48550/arXiv.2505.00817.
- K. Lee, A. Alshahrani, W. Wang, B. Malekian, and J. Szefer, “Secure machine learning hardware: Challenges and progress,” IEEE Circuits Syst. Mag., vol. 25, no. 1, pp. 8–34, 2025. [Online]. Available: https://doi.org/10.1109/MCAS.2024.3509376
- A. Adiletta, Z. Weissman, F. Khojasteh Dana, B. Sunar, and S. Tajik, “Rubber Mallet: A study of high frequency localized bit flips and their impact on security,” arXiv preprint, arXiv:2505.01518, 2025. [Online]. Available: https://doi.org/10.48550/arXiv.2505.01518
- J. Breier, D. Jap, X. Hou, S. Bhasin, and Y. Liu, “SNIFF: Reverse engineering of neural networks with fault attacks,” IEEE Transactions on Reliability, vol. 71, no. 4, pp. 1527–1539, Dec. 2022. doi: 10.1109/TR.2021.3102840
- L. Batina, S. Bhasin, D. Jap, and S. Picek, “CSI NN: Reverse engineering of neural network architectures through electromagnetic side channel,” in Proc. 28th USENIX Security Symposium (USENIX Security 2019), Santa Clara, CA, USA, Aug. 2019, pp. 515–532. [Online]. Available: https://www.usenix.org/conference/usenixsecurity19/presentation/batina
