---
layout: default
title: File Format
---

**Existing File Formats**

Below is a list of file formats relevant to trace storage. Numpy, TRS, SQLite, HDF5 and Zarr have been utilized in the community previously while Avro, Apache ORC and Parquet are all used in big data, but applications to SCA have not been explored.

| File Format  | Links                                          | Traditionally Used In SCA | Open Source |
|--------------|------------------------------------------------|---------------------------|-------------|
| Numpy (.npy) | https://github.com/numpy/numpy                 | Yes                       | Yes         |
| TRS          | https://github.com/Keysight/python-trsfile     | Yes                       | Yes         |
| SQLite       | https://sqlite.org/                            | Somewhat                  | Yes         |
| HDF5         | https://github.com/HDFGroup/hdf5               | Yes                       | Yes         |
| Zarr         | https://github.com/zarr-developers/zarr-python | Somewhat                  | Yes         |
| Avro         | https://github.com/apache/avro                 | No                        | Yes         |
| Apache ORC   | https://github.com/apache/orc                  | No                        | Yes         |
| Parquet      | https://parquet.apache.org/                    | No                        | Yes         |
|JSON | https://www.json.org/json-en.html | No | Yes

**Frameworks Utilizing File Formats**
Below is a list of frameworks that currently exist and the underlying file formats that exist. If you know or find any additional frameworks please add it to the list.


| Framework      | Underlying File Format    | Relavant Links                                                     |
|----------------|---------------------------|--------------------------------------------------------------------|
| SCARR          | Zarr                      | https://github.com/decryptofy/scarr                                |
| SCARED         | HDF5                      | https://github.com/eshard/scared                                   |
| LASCAR         | HDF5                      | https://github.com/Ledger-Donjon/lascar                            |
| Chip Whisperer | Numpy                     | https://github.com/newaetech/chipwhisperer                         |
| SCAPEgoat      | Numpy/JSON                | https://github.com/vernamlab/SCApeGoat                             |
| SCALib         | Numpy                     | https://scalib.readthedocs.io/en/stable/                           |
| Sedpack/SCAAML | Varying with JSON wrapper | https://github.com/google/sedpack                                  |
| RamDPA         | Custom RamDPA format      | https://github.com/fuentessec/RamDPA                               |
| Daredevil      | Unclear                   | https://github.com/SideChannelMarvels/Daredevil?tab=readme-ov-file |

**Relevant Papers/Resources**
Below is a list of papers published across varying mediums alongside varying resources that may be of some interest to those trying to develop or standardize a file format/framework for future use. If you know of a relevant paper please add it to the list below. File formats or frameworks should be added to their relevant lists as opposed to this one.

| Paper Title/Resource                                                                                       | Link                                                            | Relevance                                                                                                                                                           |
|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Optimization of Pearson correlation coefficient calculation for DPA and comparison of different approaches | https://ieeexplore.ieee.org/document/7934563?signout=success    | Reviews optimisation methods for metrics/attacks and how they can relate to memory.                                                                                 |
| N5 Github                                                                                                  | https://github.com/saalfeldlab/n5                               | Speeds up read and write operations of chuncked data on a variety of backends.                                                                                      |
| Fast Leakage Assessment                                                                                    | https://eprint.iacr.org/2017/624                                | Outlines pre-processing techniques that speed up leakage assessments.                                                                                               |
| LZ4                                                                                                        | https://lz4.org/                                                | Compresion methodology                                                                                                                                              |
| SCABench                                                                                                   | https://github.com/cassiersg/SCABench                           | Benchmarking results of LASCAR, SCALib, and SCARED                                                                                                                  |
| Benchmarking eSHARD SCA Solution                                                                           | https://eshard.com/posts/benchmarking-side-channel-solutions    | Details benchmarking methodologies for eSHARD's tools and how to compare to other libraries.                                                                        |
| FOBOS 3: An Open-Source Platform for Side-Channel Analysis and Benchmarking                                | https://dl.acm.org/doi/pdf/10.1145/3605769.3623987              | Details benchmarking methodologies.                                                                                                                                 |
| High-Performance Design Patterns and File Formats for Side-Channel Analysis                                | https://tches.iacr.org/index.php/TCHES/article/view/11446/10951 | Includes a review of current file format implementations in relation to SCA and outlines the computational challenges in performing metric and attack evaluations.  |
| A Comparison of HDF5, Zarr, and netCDF4 in Performing Common I/O Operations                                | https://arxiv.org/pdf/2207.09503                                | Compares HDF5 to Zarr in read and write operations.                                                                                                                 |
