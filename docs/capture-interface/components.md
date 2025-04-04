---
sidebar_position: 3
title: Components
---

# Components in Typical Side-channel and Fault Analysis Setups 
A typical side-channel and fault analysis setup consists of multiple components. The components are:
	
**Workstation:** The computer that is physically connected to the other components of the side-channel analysis setup. This computer orchestrates the acquisition of data and programs the target device, provides test vectors for the target device, and obtains the measurements.

**Control:** Controls the Target's operation. In addition, it receives the test vectors from the Workstation and provides them to the target using an appropriate interface and protocol and receives responses from the target and provides them to the Workstation.   

**Target:** The object of the side-channel leakage measurements. 

**Sensor:** Senses a particular side channel, e.g., an EM prober, power probe, Electron Microscope, etc. The sensor is subject to Noise.

**Signal Conditioning:** Any device that improves the signal from the sensor before the Sampler measures it. E.g., filter, amplifier, or any analog pre-processing.

**Sampler:** Performs analog measurements. In many cases, this is an oscilloscope, but it can also be as simple as an analog to digital converter or as complex as a Software Defined Radio (SDR) or a spectrum analyzer. Features of a sampler include (but are not limited to) bandwidth, sampling rate, resolution, and memory size. 

**Communication:** The hardware/software component offers means to connect components. 

**Trigger:** A signal used to synchronize measurements of the Sampler with specific operations in the Target. 

**Power supply:** Provides power to the Target. 

**Clock:** Provides a clock signal to the Target. In some cases, this can also be reversed, where the clock from the target is sampled and used to align the Sampler.

**Fault Generator:** Generates a fault in the Target. This can be clock glitching, power glitching, EM fault injection, laser fault injection, etc.

**Interface:** The communication means between two components to exchange data for a specific purpose. These means can be physical or logical. Each interface can host multiple channels. 

In addition to these main components, a set of auxiliary devices can be identified in a side-channel and fault analysis setup as follows. 
- Signal generator for generating the clock
- A debugger that can be a function and a part of a component 
- An input device gives inputs like glitches, plaintext, etc.  
