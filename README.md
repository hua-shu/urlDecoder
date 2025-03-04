# Decode URL App

This Node.js app decodes an encoded URL and extracts the job posting URL from the HTML content.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/decode-url-app.git
   cd decode-url-app
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the app, use:
```bash
npm start
```

You can now send POST requests to `http://localhost:3000/decode-url` with a JSON body containing an `encodedURL`.

Example request:
```json
{
  "encodedURL": "https%3A%2F%2Fboards.greenhouse.io%2Fdoordashusa%2Fjobs%2F6659164"
}
```

The response will return the job link:
```json
{
  "jobLink": "https://boards.greenhouse.io/doordashusa/jobs/6659164"
}
```
