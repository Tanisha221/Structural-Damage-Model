# 🏗️ Damage Classification in Under-Construction Buildings

This project focuses on detecting and classifying structural damage in under-construction buildings using image-based analysis. A CNN model is used to identify visible cracks or damage in building images and classify them based on severity.

This project was developed as part of an **internship** and was built to meet a real business requirement provided by a **business unit within the company**.

---

## 📸 What the project does

The system takes an image of an under-construction building element such as a wall, beam, or slab.

If cracks or damage are detected, the CNN model classifies the severity into three levels:

- 🟢 Mild  
- 🟠 Moderate  
- 🔴 Severe  

Based on the severity level, the system suggests the next steps:

- For **mild** and **moderate** damage, simple hand-based repair or inspection suggestions are provided.
- For **severe** damage, where manual handling may not be sufficient, the system recommends contacting professionals and provides relevant contact information.

If no damage is detected, the system clearly indicates that the structure appears safe at the current stage.

---

## 💡 Why this project was built

Manual inspection of under-construction buildings is time-consuming and heavily dependent on human judgement. This project was built to support **early detection of visible structural issues**, allowing corrective action before damage worsens.

The goal was not to replace experts, but to assist inspection teams with a quick and consistent image-based assessment.

---

## 🛠️ Tech used

- 🧠 Convolutional Neural Network for damage detection and severity classification  
- ⚛️ React and Vite for the front-end interface  
- 📊 Image dataset of under-construction buildings with different crack and damage levels  

---

This repository represents an **internship project and proof of concept**. Some components may require further refinement before large-scale deployment.
