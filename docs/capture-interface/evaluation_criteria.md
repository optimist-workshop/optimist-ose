---
sidebar_position: 5
title: Evaluation Criteria for APIs
---

# Evaluation Criteria for APIs 
The design and use of APIs aim to ease experiments and increase their quality. Some of the most important criteria for evaluating an API are:

**Reproducibility:** One of the main features of a scientific experiment which means that the experiment can be reproduced in conditions as close as possible to the original ones. For that, all relevant settings of the equipment in a setup used for an experiment should be saved together with the experimental data.

**Portability:** APIs may ease portability (genericity) from one equipment to another by standardizing the way we configure them. Such quality is helpful in obtaining standard-setting descriptions and is tightly linked to reproducibility when it comes to reproducing an experiment with different equipment.

**Flexibility:** An API potentially induces some restrictions due to some design choices. API flexibility is the quality of an API to be used in various (potentially very specific) scenarios. In the case of side-channel, such specific scenarios include:
    -	Multiple channel/equipment acquisition.
    -	Specific triggering.
    -	Specific capture modes such as sequence mode or continuous capture.

An API should be well-documented and easy to understand, use, and modify. In the worst case, the API must at least be thought to be easy/fast to fix/adjust when needed by an unusual experiment.

**Efficiency:** In an API, some design choices may have huge impact on performances. For side-channel, examples of bottlenecks are (depending on the type of experiment) measurement downloading, probe/target moving or equipment configuration. Thus, a special attention must be granted when designing an API to allow efficient implementations of the API. This can be quantified, for example, by the average number of traces measured by the entire setup or the number of test vectors processed by the Target per unit of time.
Although ideally, one would aim to achieve all the above goals, sometimes that may not be possible because of the context, various limitations imposed by the Target, or available equipment. In that case, some characteristics of the API may be favored (e.g., efficiency) against others (e.g., portability).

Some other features of an API to be considered are as follows. 
    -	Being standardized
    -	Impact of setups, e.g., voltage supply, probes, etc. 
    -	Noise measurement
    -	Multi-channel ability, especially triggers & data.
    -	Options for setting up triggers.
    -	Continuous capture requires an event (basically, interrupt)- driven interface and a double buffer/ring buffer read-out ability (Picoscope drivers / C APIs support this)
