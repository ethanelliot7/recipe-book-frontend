# RecipeBook

---
## Setup Instructions

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/ethanelliot7/recipe-book-frontend.git
   cd recipe-book-frontend

### running with docker
2. **Create an .env file and add the following**
   ```.env
   VITE_API_URL='url to api'
   ```
3. **install dependencies**
   ```bash
    npm install
   ```

4. **run**
   ```bash
   # run tailwind
   npx tailwindcss -i ./src/index.css -o ./src/output.css --watch
   # runserver
   vite
   ```
5. **Access the Application**
   open your browser and navigate to:     
   [http://localhost:5000](http://localhost:5000)