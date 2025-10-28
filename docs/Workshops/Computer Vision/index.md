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

**Pro-tip**: rehearse the live demo twice, once with Wi-Fi off, to avoid campus network surprises. 

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

## Demo Time

In this workshop, we will be using YOLOv11 to build a simple parking spot detector!

### Setup
Click [here](https://www.dropbox.com/scl/fo/r6kxmfiyra96atcklnhc8/AHYyTGv7cT_jh12D0ejcG8s?rlkey=zzoja3ihtltatp46t6gy2u1yh&st=wyel9qdk&dl=0) to download the `dataset.zip` and `data.yaml` files.  

Head over to [Google Colab](https://colab.research.google.com) and create a new notebook to build this model.
Go to the files section in the left sidebar and upload the `dataset.zip` and `data.yaml` files.

### Step 1: Installation
Let's first make a cell in Colab. Here, let's install Ultralytics, the package that has the model we need.
```python
  !pip install ultralytics
```

### Step 2: Extraction
While Ultralytics is downloading, let's make a new cell. You must have noticed that the dataset is in a zip file. We can run the following code to extract the dataset:
```python
  !unzip dataset.zip -d .
  ```
After extraction, you should see a train and val folder now. You can explore these folders to view the images or labels.

### Step 3: Model Training
Now that we have the dataset, we can train our model on this.

Most models that require training expect the data to be given through a yaml file. 
#### What is `data.yaml`? Open the file and check it out! ####
 
This file gives the path to the training and validation folders of the dataset, number of classes and name of those classes. In our case, we have 2 classes: empty and occupied.

Using this file, let's train our model.

```python
from ultralytics import YOLO

model = YOLO("yolo11m.pt")          # model we'll be using

model.train(data= "data.yaml", imgsz = 640, batch=16, epochs = 100, workers = 8 , device=0)   # epochs can be changed accordingly 
  ```

:::note
Training a model takes time. Making sure you train it for the correct number of epochs (training cycles) is crucial. Too little and the model doesn't learn enough. Too much and the model overfits (gets used to the training data and does bad on test data).  
Since we have limited time for this workshop, we will only be training this for a few epochs. Go ahead and try training it for a longer time to check out the difference!
::: 

### Step 4: Model Testing
After training the model for a certain number of epochs, we can test it on some images.

```python
from ultralytics import YOLO
import cv2
import numpy as np
from google.colab.patches import cv2_imshow


model = YOLO("runs/detect/train/weights/best.pt")    # load the model

image_path = "pic3.jpg"      # change accordingly
image = cv2.imread(image_path)     # read image through OpenCV
if image is None:
    print(f"Error: Could not load image at {image_path}")
    exit()


resized_image = cv2.resize(image, (640,640))    # resize image to match input size


results = model.predict(resized_image, device=0, conf=0.5, imgsz=640)    # get prediction from the trained model  

for result in results:      # go through each result (empty or occupied spot)
    boxes = result.boxes.xyxy.cpu().numpy()       # pixel locations for the prediction
    scores = result.boxes.conf.cpu().numpy()      # confidence scores for that prediction
    classes = result.boxes.cls.cpu().numpy()      # occupied or empty
    class_names = result.names


    h, w = image.shape[:2]       # height and width of image
    for box, score, cls in zip(boxes, scores, classes):
        x1, y1, x2, y2 = box     # 4 coordinates for box

        x1 = int(x1 * w / 640)    # normalizing them to match the input size (640,640)
        y1 = int(y1 * h / 640)
        x2 = int(x2 * w / 640)
        y2 = int(y2 * h / 640)


        color = (0, 255, 0) if class_names[int(cls)] == "empty" else (0, 0, 255)
        cv2.rectangle(image, (x1, y1), (x2, y2), color, 2)  # bounding box (red for occupied, green for empty)


        label = f"{class_names[int(cls)]} {score:.2f}"    # text
        cv2.putText(image, label, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

cv2_imshow(image)     # display the image with bounding boxes
cv2.waitKey(0)  
cv2.destroyAllWindows()

'''output_path = "testpic3.jpg"     #optional
cv2.imwrite(output_path, image)
print(f"Prediction saved to {output_path}")'''
  ```

## Exercise
Congrats! You now know how to train a YOLOv11 on a custom dataset and get outputs from it.  

If you want to do more, here are few tasks you can focus on:
- Try finding an interesting dataset on [Roboflow](https://roboflow.com)
- Download the dataset
- Train your YOLOv11 model on this dataset using the same technique we used
- Instead of having predictions on an image, try to do it on a video real-time!