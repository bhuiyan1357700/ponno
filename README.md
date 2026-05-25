# পণ্য PONNO

Introducing Bangladesh's four export industries: Textile, Leather, Jute, and Pharmaceuticals.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool & dev server
- **Vanilla CSS** — styling (no framework)
- **localStorage** — for persisting user preferences

## Features

- Bilingual UI (Japanese ↔ English) via React Context
- Furigana toggle for Japanese learners
- Reading progress tracker (persists across sessions)
- Quiz system per industry
- Smooth page transitions
- Custom cursor
- Responsive product showcases

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Project Structure

```
ponno-vite/
├── index.html              # Entry HTML
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # React mount point
    ├── App.jsx             # Root component
    ├── context/
    │   └── LangContext.jsx # Language state provider
    ├── components/
    │   ├── Cursor.jsx
    │   ├── Furigana.jsx        # The R component
    │   ├── T.jsx               # i18n helper
    │   ├── LangToggle.jsx
    │   ├── ProgressWidget.jsx
    │   ├── ChapterView.jsx
    │   ├── KeypointPage.jsx
    │   ├── ProductsSection.jsx
    │   ├── Quiz.jsx
    │   └── QuizCTA.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── TextilePage.jsx
    │   ├── LeatherPage.jsx
    │   ├── JutePage.jsx
    │   └── PharmaPage.jsx
    ├── data/
    │   ├── entries.js
    │   ├── textile.js
    │   ├── leather.js
    │   ├── jute.js
    │   ├── pharma.js
    │   ├── keypoints.js
    │   └── quizzes.js
    └── styles/
        ├── global.css
        ├── home.css
        ├── industry.css
        ├── keypoint.css
        ├── products.css
        ├── quiz.css
        └── features.css
```

## Author

ANAS — IT student in Kobe, Japan.
