# News Aggregator Project

This project is a news aggregator web application built with React, TypeScript, and Vite. It fetches news articles from various sources using the NewsAPI and displays them in a user-friendly interface.

## Running the Project in a Docker Container

Follow these steps to build and run the project in a Docker container.

### Prerequisites

- Docker installed on your machine. [Install Docker](https://docs.docker.com/get-docker/)
- A NewsAPI API key. You can get one from [NewsAPI](https://newsapi.org/).

---

### Step 1: Clone the Repository

Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/news-aggregator.git
cd news-aggregator
```

### Step 2: Build the Docker Image

Build the Docker image using the provided Dockerfile. Replace your_api_key_here with your actual NewsAPI key.

```bash
docker build --build-arg VITE_NEWS_API_KEY=your_api_key_here -t news-aggregator .
```

#### Explanation:

- `--build-arg VITE_NEWS_API_KEY=your_api_key_here`: Passes the API key as a build argument.
- `-t news-aggregator`: Tags the Docker image with the name _news-aggregator_.

### Step 3: Run the Docker Container

Run the Docker container using the built image:

```bash
docker run -p 3000:3000 news-aggregator
```

#### Explanation:

- `-p 3000:3000`: Maps port 3000 on your local machine to port 3000 in the container.

- `news-aggregator`: The name of the Docker image to run.

### Step 4: Access the Application

Once the container is running, open your browser and navigate to:

```bash
http://localhost:3000
```

You should see the news aggregator application running.

### Step 5: Stopping the Container

To stop the container, press Ctrl + C in the terminal where the container is running. Alternatively, you can stop it using Docker commands:

1. Find the container ID:

```bash
docker ps
```

2. Stop the container:

```bash
docker stop <container_id>
```

#### Including a Test API Key

If you don’t have a NewsAPI key or want to use a test key, you can use the following test key:

```bash
VITE_NEWS_API_KEY=2cc3aa8f36e64abf9badb9594e55d815
```
