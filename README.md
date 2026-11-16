# Terrarian

A guide that will give tips, general item recommandation and a checklist of what to do.

## Project Structure

- `index.html` — Core HTML layout and embedded CSS styling.
- `app.js` — Chapter data store and DOM rendering/navigation logic.
- `tests.js` — Basic Node.js assertions to verify the project structure and default state.
- `README.md` — Project documentation.

## Getting Started on vscode.dev

1. **View the website:** Open `index.html` directly in your workspace or preview it using a Live Server extension.
2. **Add more chapters / guide sections:** Edit the `chapters` array inside `app.js`:
   ```javascript
   const chapters = [
     {
       id: 1,
       title: "The beginning",
       content: "Welcome to Terraria! Tips, recommendations, and checklist go here..."
     },
     {
       id: 2,
       title: "Pre-Hardmode Checklist",
       content: "Build a house, defeat the Eye of Cthulhu..."
     }
   ];