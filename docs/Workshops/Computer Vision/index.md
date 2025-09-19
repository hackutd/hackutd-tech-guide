---
title: Computer Vision
sidebar_position: 6
---

## What is Computer Vision?

Exactly what it sounds like, vision for computers! CV is pattern recognition for pixels. By converting images & video into numbers, we let algorithms:
* **Detect** objects (YOLO finding cars)
* **Classify** scenes (ResNet deciding dog vs cat)
* **Segment** boundaries (U-net tracing tumor margins)

## Why CV wins hackathons

*Visual feedback = instant wow.* Judges love bounding boxes and heatmaps because they *see* your progress. A pre-trained model + creative story often beats a perfect backend nobody sees. On top of that, CV is a field which has a lot of real-world impact, which is ideal for hackathons.

**Pro-tip**: rehearse the live demo twice-- once with Wi-Fi off--to avoid campus network surprises. 

## Core Tasks You Can Build Today

| Task       | One-liner           | Starter Model  |
| ---------- | ------------------- | -------------- |
| Classification | "What is in this image?" | torchvision.models.resnet18|
| Object Detection | "Where are the objects?" | ultralytics YOLOv10 |
| Segmentation | "Which pixels belong together?" | facebookresearch/segement-anything | 


## Essential Tooling

* **Ultralytics YOLO**: A fast deep learning algorithm that **scans the image once** and makes predictions unlike older models. We will get to know more about it and work with this in the workshop!
* **OpenCV**: A general-purpose CV library you're most likely going to use. There's a lot of **image and video processing** that goes on in a typical hackathon project such as resizing, rotating, color conversion, filters, etc. which can easily through OpenCV. 
* **PyTorch**: Perfect for Deep Learning frameworks for training and deploying CV models. You have access to multiple pre-trained **CNN** (Convolutional Neural Network) architectures including ResNet50, MobileNetV2, InceptionV3 and you can choose them depending on the size and quality of your dataset.
* **Google Colab**: Free GPUs if your laptop protests.

## Workshop Read Along

* Head over to the **External Resources** section and use the provided link to download the *dataset.zip* and *data.yaml* file. 
* Click on the Colab Notebook Link. In the colab notebook, upload the dataset.zip and the data.yaml files.
* Run the first cell in the notebook. This will install the Ultralytics package, which contains the YOLO model. The installation may take a minute or two.
* While Ultralytics is downloading, run the second cell. This will unzip the dataset. After extraction, you should see a train and val folder now. You can explore these folders to view the images or labels.
* Once the library is installed and the dataset is extracted, run the third cell. This will start training your YOLO model.
* After training the model for a certain amount of time, we can test it. The fourth cell loads the model and makes predictions on a test image by printing bounding boxes on empty and occupied spots.