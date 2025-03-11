---
sidebar_position: 2
---

# File Format Evaluation Criteria 
(in alphabetic order)

This section enumerates the relevant criteria to evaluate a file format for traces of side-channel leakage.

**Access Speed:** Speed by which consecutive or non-consecutive traces can be loaded

**Backward Compatibility:** The ability of tools or systems to support older versions of a file format.

**Batching:** Ability to store a dataset in multiple files, in order to not exceed a maximal file size.

**Interoperability:** The ability of tools or systems to read and process a file format created by a different tool or system.

**Dataset Integrity:** Ensuring the accuracy and unaltered nature of the collected records and metadata.

**Extensibility:** The ability of a file format to accommodate new features and extensions without requiring major changes to the tools that process the file format.

**Flexibility:** The ability of a file format to support new use cases.

**Network Friendliness:** Ability of the file format to support access to partial datasets (batches and slices).

**Open:** The availability of an openly published file format specification (cfr https://en.wikipedia.org/wiki/Open_file_format).

**Reproducibility:** The ability of a file format to support replication of measurements.

**Resiliency:** Capability to detect and recover from file corruption (e.g. after an interrupted acquisition).

**Scalability:** The ability of the file format to handle increasing amounts of data effectively.

**Simplicity:** Ease of implementation to read, write and process the file format.

**Storage density:** File size as a function of the amount of data stored.

**Support:** The number of tools that can read or write the file format.

**Versatility:** Ability to perform a variety of functions or adapt to different tasks and environments. A versatile framework can meet diverse user needs or operate effectively in multiple contexts.
