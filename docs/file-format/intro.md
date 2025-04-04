---
sidebar_position: 1
---

# File Format for Traces

We address standard APIs and interoperability issues for trace data formats of side-channel data and other real-time measurements of implementation security. We will host several invited speakers and have a discussion session. Our objective for this hour is to gather the community input and interest in the definition of a common API for Trace Data Formats.

## **Latest version: [File Format for Traces v0.5 (1/6/2025)](/pdf/ffft05.pdf)**
<details>
  <summary>Click to view BibTeX</summary>

  ```bibtex
  @misc{optimist2025,
    author = {Aydin Aysu and Gaetan Cassiers and Fatemeh Ganji and Vincent Immler and Jens-Peter Kaps and Trey Marcantonio and Jean-Michel Picod and Patrick Schaumont and Aurelien Vasselle},
    title = {Open Tools, Interfaces and Metrics for Implementation Security Testing: File Format for Traces - Requirements and Glossary},
    year = {2025},
    month = {January},
    day = {6},
    version = {0.5},
    note = {Working Document},
    url = {https://optimist-ose.org/assets/files/ffft05-6bdf28fdf1636f01130d612f86ddd887.pdf},
    institution = {Optimist OSE},
    howpublished = {Online},
  }
  ```
</details>

---

## Talks

- Dev Mehta (WPI) — **Challenges with using open source SCL databases** [[Slides](/pdf/challenges_dataset.pdf)]
- Marc Witteman (Riscure) — **Standard API for Trace Data Formats** [[Slides](/pdf/marc_witteman_riscure_slides_optimist_hour_1.pdf)]
- Vincent Immler (OSU) — **Efficient Trace Storage** [[Slides](/pdf/optimist_hour1_10min_slides_vincent_immler.pdf)]
- Aurelien Vasselle (eShard) — **Open API for Trace Data Format** [[Slides](/pdf/aurelien_vaselle_eshard_slides_optimist_hour_1.pdf)]

## References

1. Tobias Schneider, Amir Moradi: *Leakage Assessment Methodology - a Clear Roadmap for Side-channel Evaluations.* IACR Cryptol. ePrint Arch. 2015: 207 (2015).  
2. Kostas Papagiannopoulos, Ognjen Glamocanin, Melissa Azouaoui, Dorian Ros, Francesco Regazzoni, Mirjana Stojilovic: *The Side-channel Metrics Cheat Sheet.* ACM Comput. Surv. 55(10): 216:1-216:38 (2023).  
3. Jonah Bosland, Stefan Ene, Peter Baumgartner, Vincent Immler: *High-Performance Design Patterns and File Formats for Side-Channel Analysis.* IACR Trans. Cryptogr. Hardw. Embed. Syst. 2024(2): 769-794 (2024).  
4. eShard. *"eSTRACES: Open-source Set of Traces for Side-channel Analysis."* Accessed [11/14/24]. [https://eshard.gitlab.io/estraces/index.html](https://eshard.gitlab.io/estraces/index.html).  
5. Riscure Security Solutions. *"TRSFile documentation."* Accessed [11/24/24]. [https://trsfile.readthedocs.io/en/latest/index.html](https://trsfile.readthedocs.io/en/latest/index.html).  
6. Metadata explained for research data. Accessed [1/6/25].  
   [https://zenodo.org/records/10222165](https://zenodo.org/records/10222165).  
7. Open Data & Metadata Quality. Accessed [1/6/25].  
   [https://data.europa.eu/sites/default/files/d2.1.2_training_module_2.2_open_data_quality_en_edp.pdf](https://data.europa.eu/sites/default/files/d2.1.2_training_module_2.2_open_data_quality_en_edp.pdf).  
8. NewAE. *“File Formats”* Accessed [01/08/2025]. [http://wiki.newae.com/File_Formats](http://wiki.newae.com/File_Formats).  


## Relevant Papers/Resources
Below is a list of papers published across varying mediums alongside varying resources that may be of some interest to those trying to develop or standardize a file format/framework for future use. If you know of a relevant paper please add it to the list below. File formats or frameworks should be added to their relevant lists as opposed to this one.

| Paper Title/Resource                                                                                       | Link                                                            | 
|------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|
| Optimization of Pearson correlation coefficient calculation for DPA and comparison of different approaches | [[Link]](https://ieeexplore.ieee.org/document/7934563?signout=success)    |
| N5 Github                                                                                                  | [[Link]](https://github.com/saalfeldlab/n5)                               | 
| Fast Leakage Assessment                                                                                    | [[Link]](https://eprint.iacr.org/2017/624)                                | 
| LZ4                                                                                                        | [[Link]](https://lz4.org/)                                                | 
| SCABench                                                                                                   | [[Link]](https://github.com/cassiersg/SCABench)                           | 
| Benchmarking eSHARD SCA Solution                                                                           | [[Link]](https://eshard.com/posts/benchmarking-side-channel-solutions)    | 
| FOBOS 3: An Open-Source Platform for Side-Channel Analysis and Benchmarking                                | [[Link]](https://dl.acm.org/doi/pdf/10.1145/3605769.3623987)              | 
| High-Performance Design Patterns and File Formats for Side-Channel Analysis                                | [[Link]](https://tches.iacr.org/index.php/TCHES/article/view/11446/10951) |
| A Comparison of HDF5, Zarr, and netCDF4 in Performing Common I/O Operations                                | [[Link]](https://arxiv.org/pdf/2207.09503)     |                           

<!-- ## Tentative Program

| Time (EST) | |
| --- | :---: |
| 11:00 | Introduction on Objectives |
| 11:05 | Dev Mehta (WPI), <span style={{ color: "#011673", fontWeight: "bold" }}>Challenges with using open source SCL databases</span> [[Slides](/pdf/challenges_dataset.pdf)] |
| 11:15 | **Invited Talk:** Marc Witteman (Riscure), <span style={{ color: "#011673", fontWeight: "bold" }}>Standard API for Trace Data Formats</span> [[Slides](/pdf/marc_witteman_riscure_slides_optimist_hour_1.pdf)] |
| 11:25 | **Invited Talk:** Vincent Immler (OSU), <span style={{ color: "#011673", fontWeight: "bold" }}>Efficient Trace Storage</span> [[Slides](/pdf/optimist_hour1_10min_slides_vincent_immler.pdf)] |
| 11:35 | **Invited Talk:** Aurelien Vasselle (eShard), <span style={{ color: "#011673", fontWeight: "bold" }}>Open API for Trace Data Format</span> [[Slides](/pdf/aurelien_vaselle_eshard_slides_optimist_hour_1.pdf)] |
| 11:45 | Discussion and Next Steps | -->

<!-- ## Meeting Location

Optimist Hours will all occur online.  
Zoom Link: [https://wpi.zoom.us/j/93838099391](https://wpi.zoom.us/j/93838099391) -->

<!-- ## Web Resource (Discourse)

We recommend joining the [Optimist OSE Discourse](https://discourse.optimist-ose.org) to keep up to date with the Optimist OSE. Here we will post announcements as well as additional materials like indexes of open source projects that we believe will be helpful to the community. -->
---

## Working Group Meetings

- Thursday November 14th, 2024 (3 PM GMT) [[Slides](/pdf/trace-data-format-1.pdf)] - Working Group Meeting 1
- Thursday December 5th, 2024 (3 PM GMT) [[Slides](/pdf/trace-data-format-2.pdf)] - Working Group Meeting 2
- Thursday December 19th, 2024 (3 PM GMT) [[Slides](/pdf/trace-data-format-3.pdf)] - Working Group Meeting 3

<!-- ## Organizers

- Aydin Aysu, North Carolina State University
- Fatemeh Ganji, Worcester Polytechnic Institute
- Patrick Schaumont, Worcester Polytechnic Institute
- Trey Marcantonio, Worcester Polytechnic Institute -->
---
#### Interested in Joining or Giving Feedback?

<div style={{ display: "flex", gap: "10px", marginTop: "10px", alignItems: "center", justifyContent: "left" }}>
  <a href="https://discourse.optimist-ose.org/"
     style={{
       display: "grid",
       placeItems: "center",
       padding: "8px 24px 16px", // Adjusted padding: top 8px, right/left 24px, bottom 16px
       background: "#0070f3",
       color: "white",
       textDecoration: "none",
       borderRadius: "8px",
       fontSize: "16px",
       fontWeight: "600",
       minWidth: "150px",
       height: "48px",
     }}>
    Join Discourse
  </a>
</div>

