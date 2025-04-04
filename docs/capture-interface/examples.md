---
sidebar_position: 6
title: Examples
---

#	Examples of Interfaces

The interfaces mentioned above have been employed in commercial and open-source setups. Here, we include the interfaces in two setups, namely FOBOS [2] and ChipWhisperer [3]. 

## A.	FOBOS

Based on the documentation from the FOBOS website, here is the extracted information (a--e) for each API [2]:

### 1. Target Communication Module

    a. **Data:** the target Communication Module handles the data transfer between the target (Device Under Test) and the control system, including managing communication protocols.

    b. **Features:**  
    - Configures target interface and manages output length.
    - Handles communication over various interfaces like UART, SPI, etc.

    c. **Purpose:**  its purpose is to provide a reliable means of communication between the target and the controlling system, facilitating data exchange for side-channel analysis.

    d. **Logical Layer:**  works by interfacing with the control system to transmit and receive data from the target, ensuring proper synchronization and timing. According to FOBOS documentation, the 4-bit full-duplex FIFO interface is available. 

    e. **Physical Layer:**  involves the physical connections (e.g., UART, SPI) between the target and the control system to facilitate data transfer.

### 2. Target Control Module

    a. **Data:** the target Control Module manages control data related to the target, including triggering operations, resetting the target, and initiating other control signals for side-channel measurements.

    b. **Features:**  
    - controls target clock settings, trigger operations, and resets.
    - configures glitch and timeout behavior, as well as target selection for multi-target setups.

    c. **Purpose:**  its purpose is to ensure proper timing, control, and synchronization of the target during the side-channel analysis experiments.

    d. **Logical Layer:** FIFO (bytewise), digital signal

    e. **Physical Layer:**  physically controls the target via hardware interfaces like GPIO, clock lines, and reset lines, all of which are connected to the target’s pins.

### 3. Open ADC Module

    a. **Data:**  the Open ADC Module handles the data acquisition from the target during side-channel measurements, acquiring analog signals like power traces.

    b. **Features:**  
    - Provides ADC functionality for acquiring power traces.
    - Requires the FOBOS Shield for proper operation.

    c. **Purpose:** it aims to acquire high-fidelity analog traces from the target, typically for power analysis or glitch attacks.

    d. **Logical Layer:** NA

    e. **Physical Layer:** wire - Signals (traces)

### 4. Power Module

    a. **Data:**  the power module supplies power to the target, providing the necessary power for device operation during testing and side-channel measurements.

    b. **Features:**  
    - supplies stable and configurable power to the target.
    - integrates with the FOBOS Shield for power management.

    c. **Purpose:** its purpose is to provide regulated power to the target, ensuring consistent performance during testing and experiments.

    d. **Logical Layer:**  NA

    e. **Physical Layer:**  wire, power

## B.	ChipWhisperer

The scope, target, capture, and analyzer APIs collectively enable comprehensive side-channel analysis using ChipWhisperer, covering hardware control, data acquisition, and data analysis [3]. The ChipWhisperer documentation describes each of these APIs. Here, we reformulate their definitions using the framework provided in this document. 

### 1. Scope API

    a.	**Data:** the Scope API manages the capture and glitching functionalities of ChipWhisperer devices, handling data acquisition from the target.

    b.	**Features:** provides control over various scope settings, including sampling frequency, trigger conditions, and glitch parameters.

    c.	**Purpose:** facilitates the configuration and operation of the ChipWhisperer scope hardware to capture side-channel data and perform glitching attacks.

    d.	**Logical Layer:** offers an object-oriented interface in Python to configure and control the scope's behavior, including methods for arming the scope and initiating captures.

    e.	**Physical Layer:** represents the physical ChipWhisperer scope hardware, such as the OpenADC Scope (Lite, Pro, Husky) and ChipWhisperer Nano Scope (Nano), which interface with the target to collect data. 

### 2. Target API

    a.	**Data:** the Target API manages communication with the target, facilitating data exchange for side-channel analysis.

    b.	**Features:** supports various target types, including Simple Serial Targets and FPGA-based targets like CW305 and CW310, enabling flexible interactions with different DUTs.

    c.	**Purpose:** provides an interface to configure and control the target device, essential for setting up experiments and collecting relevant data.

    d.	**Logical Layer:** offers classes and functions to define target behavior, such as communication protocols and response handling, within the ChipWhisperer framework.

    e.	**Physical Layer:** encompasses the actual hardware targets, like the CW305 FPGA Target and CW310, which are connected to the ChipWhisperer scope for data acquisition. 

### 3. Capture API

    a.	**Data:** the capture API handles the acquisition and storage of side-channel data during experiments, managing trace collection and storage.

    b.	**Features:** provides functionalities to start, stop, and manage data captures, including handling triggers and synchronization with the scope.

    c.	**Purpose:** ensures reliable and synchronized data collection from the target, crucial for accurate side-channel analysis.

    d.	**Logical Layer:** power trace and signals

    e.	**Physical Layer:** wires - SMA and 20-pin connectors. 

### 4. Analyzer API

    a.	**Data:** the Analyzer API processes and analyzes the captured side-channel data, extracting meaningful information for cryptographic analysis.

    b.	**Features:** includes tools for data visualization, statistical analysis, and correlation techniques to interpret and capture results.

    c.	**Purpose:** aids in examining and interpreting side-channel data, facilitating the extraction of cryptographic keys or other sensitive information.

    d.	**Logical Layer:** NA

    e.	**Physical Layer:** NA
