---
sidebar_position: 3
---
# Examples
This section provides examples of existing file formats for traces of side-channel leakage, including pointers to source code and reference implementations.

## Existing File Formats

<!-- Below is a list of file formats relevant to trace storage. Numpy, TRS, SQLite, HDF5 and Zarr have been utilized in the community previously while Avro, Apache ORC and Parquet are all used in big data, but applications to SCA have not been explored. -->

| File Format  | Links                                                    | Traditionally Used In SCA | Open Source |
|--------------|----------------------------------------------------------|---------------------------|-------------|
| Numpy (.npy) | [[Link]](https://github.com/numpy/numpy)                 | Yes                       | Yes         |
| TRS          | [[Link]](https://github.com/Keysight/python-trsfile)     | Yes                       | Yes         |
| SQLite       | [[Link]](https://sqlite.org/)                            | Somewhat                  | Yes         |
| HDF5         | [[Link]](https://github.com/HDFGroup/hdf5)               | Yes                       | Yes         |
| Zarr         | [[Link]](https://github.com/zarr-developers/zarr-python) | Somewhat                  | Yes         |
| Avro         | [[Link]](https://github.com/apache/avro)                 | No                        | Yes         |
| Apache ORC   | [[Link]](https://github.com/apache/orc)                  | No                        | Yes         |
| Parquet      | [[Link]](https://parquet.apache.org/)                    | No                        | Yes         |
|JSON          | [[Link]](https://www.json.org/json-en.html)              | No                        | Yes         |


## Frameworks Utilizing File Formats

<!-- Below is a list of frameworks that currently exist and the underlying file formats that exist. If you know or find any additional frameworks please add it to the list. -->


| Framework      | Underlying File Format    | Relavant Links                                                              |
|----------------|---------------------------|-----------------------------------------------------------------------------|
| SCARR          | Zarr                      | [[Link]](https://github.com/decryptofy/scarr)                                |
| SCARED         | HDF5                      | [[Link]](https://github.com/eshard/scared)                                   |
| LASCAR         | HDF5                      | [[Link]](https://github.com/Ledger-Donjon/lascar)                            |
| Chip Whisperer | Numpy                     | [[Link]](https://github.com/newaetech/chipwhisperer)                         |
| SCAPEgoat      | Numpy/JSON                | [[Link]](https://github.com/vernamlab/SCApeGoat)                             |
| SCALib         | Numpy                     | [[Link]](https://scalib.readthedocs.io/en/stable/)                           |
| Sedpack/SCAAML | Varying with JSON wrapper | [[Link]](https://github.com/google/sedpack)                                  |
| RamDPA         | Custom RamDPA format      | [[Link]](https://github.com/fuentessec/RamDPA)                               |
| Daredevil      | Unclear                   | [[Link]](https://github.com/SideChannelMarvels/Daredevil?tab=readme-ov-file) |


## Concrete Example from ChipWhisperer Documentation 
This section aims to provide an example of how the criteria defined in the previous section can be applied to identify aspects to consider when selecting a file format for a dataset. “Trace files in the ChipWhisperer software are defined through a configuration file, with the suffix .cfg. Any trace added to the ChipWhisperer project will have a configuration file - this file does not store data, but tells the software where it is stored and what format it is stored in. While ChipWhisperer has a "native" file format, you can also interface to existing files” [8].   
This part demonstrates a potential for improvement in terms of reproducibility, flexibility, extensibility, and support. It is worth mentioning that each trace is a Numpy array. 
