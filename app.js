const chapters = [
  {
    id: 1,
    title: "The beginning",
    content: "" // Empty by default to match the template screenshot
  }
];

function renderSidebar(chapterData, activeId) {
  const listEl = document.getElementById("chapter-list");
  if (!listEl) return;

  listEl.innerHTML = "";
  chapterData.forEach((chapter) => {
    const li = document.createElement("li");
    li.className = "chapter-item" + (chapter.id === activeId ? " active" : "");
    li.textContent = chapter.title;
    li.dataset.id = chapter.id;

    li.addEventListener("click", () => {
      selectChapter(chapter.id);
    });

    listEl.appendChild(li);
  });
}

function selectChapter(id) {
  const chapter = chapters.find((c) => c.id === id);
  if (!chapter) return;

  const titleEl = document.getElementById("chapter-title");
  const contentEl = document.getElementById("chapter-content");

  if (titleEl) titleEl.textContent = chapter.title;
  if (contentEl) contentEl.textContent = chapter.content;

  renderSidebar(chapters, id);
}

// Initialize app when loaded in a browser
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    if (chapters.length > 0) {
      selectChapter(chapters[0].id);
    }
  });
}

// Export for testing in Node.js
if (typeof module !== "undefined" && module.exports) {
  module.exports = { chapters, renderSidebar, selectChapter };
}
