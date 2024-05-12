---
permalink: /
title: "Hi, I am Baris 👋"
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

I am a second year PhD candidate in the in the [Electrical and Computer Engineering Department](https://www.ece.cmu.edu/) at [Carnegie Mellon University](https://www.cmu.edu/). I am advised by [Dr. Gauri Joshi](https://www.andrew.cmu.edu/user/gaurij/) and [Dr. Carlee Joe-Wong](https://www.andrew.cmu.edu/user/cjoewong/). My research interest broadly lies in distributed optimization, machine learning, and federated learning.

I graduated as the valedictorian from my undergraduate studies in the [Department of Electrical and Electronics Engineering](https://ee.bilkent.edu.tr/en/) at [Bilkent University](https://w3.bilkent.edu.tr/bilkent/) where I was fortunate to work with [Dr. Tolga Cukur](https://kilyos.ee.bilkent.edu.tr/~cukur/) on the deep learning applications of medical imaging.

Here is a link to my [CV](/files/BarisAskinCV.pdf).

Publications
======
1. **FedAST: Federated Asynchronous Simultaneous Training**  
   **B. Askin**, P. Sharma, C. Joe-Wong, G. Joshi  
   _The Conference on Uncertainty in Artificial Intelligence (UAI), 2024_

   **Studies on deep learning applications in medical imaging while I was at Bilkent:**

2. **DEQ-MPI: A Deep Equilibrium Reconstruction with Learned Consistency for Magnetic Particle Imaging**  
   A. Güngör, **B. Askin**, D. A. Soydan, C. B. Top, E. U. Saritas, T. Çukur  
   _IEEE Transactions on Medical Imaging, Aug. 2023_  
   [**Link**](https://ieeexplore.ieee.org/abstract/document/10198492)  
   [**Code**](https://github.com/icon-lab/DEQ-MPI)

3. **A Denoiser Scaling Technique for Plug-and-Play MPI Reconstruction**  
   A. Güngör, **B. Askin**, D. A. Soydan, E. U. Saritas, C. B. Top, T. Çukur  
   _International Journal on Magnetic Particle Imaging (IJMPI), Vol 9 No 1 Suppl 1, Mar. 2023_  
   [**Link**](https://www.journal.iwmpi.org/index.php/iwmpi/article/view/636)

4. **PP-MPI: A Deep Plug-and-Play Prior for Magnetic Particle Imaging Reconstruction**  
   **B. Askin**, A. Güngör, D. A. Soydan, E. U. Saritas, C. B. Top, T. Çukur  
   _International Workshop on Machine Learning for Medical Image Reconstruction (MLMIR), 2022_  
   [**Link**](https://repository.bilkent.edu.tr/server/api/core/bitstreams/0f316c24-94b3-4b90-86b0-15a6617f15d3/content)

5. **TranSMS: Transformers for Super-Resolution Calibration in Magnetic Particle Imaging**  
   A. Güngör, **B. Askin**, D. A. Soydan, E. U. Saritas, C. B. Top, T. Çukur  
   _IEEE Transactions on Medical Imaging, July 2022_  
   [**Link**](https://ieeexplore.ieee.org/document/9825706)  
   [**Code**](https://github.com/icon-lab/TranSMS)

6. **Deep Learned Super Resolution of System Matrices for Magnetic Particle Imaging**  
   A. Güngör, **B. Askin**, D. A. Soydan, C. B. Top, T. Çukur  
   _2021 43rd Annual International Conference of the IEEE Engineering in Medicine & Biology Society (EMBC), 2021_  
   [**Link**](https://ieeexplore.ieee.org/document/9630601)

7. **A CNN Based Super-Resolution Technique for Magnetic Particle Imaging System Matrix**  
   **B. Askin**, A. Güngör, D. A. Soydan, C. B. Top, T. Çukur  
   _2021 29th Signal Processing and Communications Applications Conference (SIU), 2021_  
   [**Link**](https://ieeexplore.ieee.org/document/9477772)


Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

I have also created [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.
