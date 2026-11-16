const chapters = [
  {
    id: 1,
    title: "The Beginning",
    checklist: [
      "Build at least 3 valid NPC houses",
      "Mine Iron/Lead and Silver/Tungsten underground",
      "Find Life Crystals to increase max HP to 200+",
      "Defeat King Slime or the Eye of Cthulhu"
    ]
  },
  {
    id: 2,
    title: "Preparation",
    checklist: [
      "Defeat Eater of Worlds or Brain of Cthulhu",
      "Craft a Nightmare Pickaxe or Deathbringer Pickaxe",
      "Mine Meteorite and Obsidian",
      "Defeat Queen Bee in the Underground Jungle"
    ]
  },
  {
    id: 3,
    title: "The Dungeon",
    checklist: [
      "Speak to the Old Man at night and defeat Skeletron",
      "Loot Locked Gold Chests using Golden Keys",
      "Obtain the Cobalt Shield, Muramasa, and Hand Gun",
      "Find the Shadow Key for Underworld chests"
    ]
  },
  {
    id: 4,
    title: "The Wall to a new Beginning",
    checklist: [
      "Build the Underworld bridge",
      "Prepare buffs (Ironskin, Regeneration, Swiftness, Well Fed)",
      "Drop the Guide Voodoo Doll into lava and defeat the Wall of Flesh",
      "Collect the Pwnhammer and enter Hardmode"
    ]
  },
  {
    id: 5,
    title: "Rediscovery",
    checklist: [
      "Smash at least 3–6 Altars for Cobalt/Palladium, Mythril/Orichalcum, and Adamantite/Titanium",
      "Craft a Mythril or Orichalcum Anvil and Adamantite/Titanium Forge",
      "Obtain Souls of Light and Souls of Night in the Underground Hallow/Evil",
      "Craft Wings and upgrade accessories at the Tinkerer's Workshop"
    ]
  },
  {
    id: 6,
    title: "Mechanical Destruction",
    checklist: [
      "Defeat The Destroyer",
      "Defeat The Twins",
      "Defeat Skeletron Prime",
      "Craft the Pickaxe Axe or Drax to mine Chlorophyte in the Jungle"
    ]
  },
  {
    id: 7,
    title: "The Restless Jungle",
    checklist: [
      "Mine Chlorophyte and craft advanced armor/weapons",
      "Collect Life Fruit until HP reaches 500",
      "Locate the glowing pink Plantera's Bulb deep in the Jungle",
      "Defeat Plantera to unlock the Dungeon's post-plantera content"
    ]
  },
  {
    id: 8,
    title: "Guardian of the Temple",
    checklist: [
      "Enter the Jungle Temple and clear the rooms",
      "Collect Lihzahrd Power Cells from chests and enemies",
      "Spawn and defeat Golem multiple times for drops",
      "Defeat the Martian Madness event to grab endgame tech"
    ]
  },
  {
    id: 9,
    title: "The Cult and the Chaos that comes after",
    checklist: [
      "Defeat the Lunatic Cultist at the Dungeon entrance",
      "Destroy the Solar, Vortex, Nebula, and Stardust Pillars",
      "Stock up on healing potions, buff potions, and arena setups",
      "Prepare for the descent of the final threat"
    ]
  },
  {
    id: 10,
    title: "The One above it all",
    checklist: [
      "Defeat Moon Lord",
      "Mine or collect Luminite to craft Luminite Tools and Armor",
      "Craft the Zenith or ultimate class weapons",
      "Complete your world exploration and achievements!"
    ]
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
  
  if (contentEl) {
    contentEl.innerHTML = "";
    
    const heading = document.createElement("h3");
    heading.textContent = "Checklist";
    heading.style.marginBottom = "16s";
    heading.style.fontSize = "1.3rem";
    contentEl.appendChild(heading);

    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    ul.style.padding = "0";

    chapter.checklist.forEach((itemText) => {
      const li = document.createElement("li");
      li.style.margin = "12px 0";
      li.style.display = "flex";
      li.style.alignItems = "center";
      li.style.cursor = "pointer";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.style.marginRight = "12px";
      checkbox.style.width = "18px";
      checkbox.style.height = "18px";
      checkbox.style.cursor = "pointer";

      const label = document.createElement("span");
      label.textContent = itemText;

      // Toggle style on click
      const toggleCheck = () => {
        checkbox.checked = !checkbox.checked;
        if (checkbox.checked) {
          label.style.textDecoration = "line-through";
          label.style.opacity = "0.7";
        } else {
          label.style.textDecoration = "none";
          label.style.opacity = "1";
        }
      };

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          label.style.textDecoration = "line-through";
          label.style.opacity = "0.7";
        } else {
          label.style.textDecoration = "none";
          label.style.opacity = "1";
        }
      });

      li.addEventListener("click", (e) => {
        if (e.target !== checkbox) {
          toggleCheck();
        }
      });

      li.appendChild(checkbox);
      li.appendChild(label);
      ul.appendChild(li);
    });

    contentEl.appendChild(ul);
  }

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