# IAChat 🤖

# Chatbot with NovaAI Integration

This repository contains a chatbot implementation integrated with NovaAI services. The chatbot is built using Node.js and Express framework.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/your-username/chatbot-novaai.git
    ```

2. Install dependencies:

    ```
    cd chatbot-novaai
    npm install
    ```

3. Set up NovaAI Integration:

    - Obtain NovaAI API credentials and configure them in the application.
    https://nova-oss.com/get-started

## Usage

To start the server, run:
npm start

The server will be running at `http://localhost:3000`.

## Configuration

- NovaAI API credentials: Configure your NovaAI API credentials in `config.js` file.

## API Endpoints

- `POST /api/chat`: Endpoint to send messages to the chatbot and receive responses.

  Example Request:

  ```json
  {
    "message": "Hello, chatbot!"
  }

Example Response:
{
  "response": "Hi there! How can I assist you?"
}

