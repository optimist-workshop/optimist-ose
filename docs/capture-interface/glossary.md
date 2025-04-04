---
sidebar_position: 2
---

# Glossary
This section enumerates and defines common terms related to capturing side-channel leakage. This list encompasses (virtually) the same definitions as in the OPTIMIST’s document describing “File Format for Traces” [1]. 

**Channel:** The source of a measurement of a physical value over time.

**Trigger:** A signal used to synchronize measurements with specific operations in the Target.

**Target:** The object of side-channel leakage measurements.

**Noise (Algorithmic vs. Environmental):** Unwanted variations in measurements that can obscure the desired signal in a trace.  
	- **Algorithmic noise:** Variations in the measured signal caused by the internal computations or processes of the device itself. This includes inherent randomness or variations due to the algorithm's design, state transitions, or other non-target data dependencies.   
	- **Environmental noise:** External factors that introduce variability in the measurements unrelated to the device's internal computations. This includes interference from the measurement setup, power supply noise, electromagnetic interference, or changes in the surrounding environment, such as temperature drift.

**Sample:** A single measurement of a Channel corrupted by Noise.

**Trace:** Vector corresponding to a sequence of measurements over time of a Channel during the Execution of the code on Target’s platform.

**Metadata:** Metadata is used to provide context and supplementary information about trace sets, such as the type of device being analyzed, the cryptographic algorithm being executed, the version of the algorithm implementation, the sampling rate and resolution of the measurement equipment, the environmental conditions during data collection, the applied countermeasures, and the date and time of data acquisition.

**Environment:** Things that affect the measurement, such as the location of the target, an x/y-stage that moves the target under an EM probe (or vice versa), temperature, emissions from nearby equipment, Faraday cages, etc. The Environment is constant during the measurement of a trace as it is monitored and controlled by the user. Ideally, it should be kept constant for the duration of the entire experiment, which sometimes can span over a long period of time.