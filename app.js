const homeContent = {
  title: "Chapters",
  text: "Welcome to the Terraria guide, Terrarian. This guide includes general tips, what you can do and a checklist to give a rough idea of what you can achieve which includes item recommandations, stuff which can be handy for now and later and goals to keep in mind. Once you have completed everything on one chapter you're able to move on to the next. Nothing is required but is recommended to complete before moving on."
};

const chapters = [
  {
    id: 1,
    title: "The Beginning",
    description: `When creating a world its recommended that you make it a medium as it's not to small or to big and if it's your first playthrough that you play on casual mode.

When you spawn in mine some trees and create a workbenck to craft stuff and mine enough for wooden armor and a wooden sword or bow.

After which you'll want to explore as to expand you're map and resources if you chose either crimson or corruption you'll want to avoid biomes with red or purple stone/dirt.

If you happen to stumble across a cave search inside of it which can lead you into an underground system of tunnels and you'll be able to find chests and ores. If you have fully explored the cave is it's recommended that you exit it and look an the surface again. 

After exploring you'll want to create houses for npc's so they will stay and build a base of operations for your workstations. When creating a inhabitle house you'll need to have a surface of more than 30 blocks, walls, chair, table and a house.  

There are a few classes in the game which consistens of four classes: Melee, Ranger, Mage and Summoner. 
- Melee has the best defense and oftentimes the strongest dps but lacks and struggles with range. 
- Ranger has one of the best ranged weapons with high damage but the ammo is on a recourse with you have to grind for.
- Mage has slighty worse damage then ranger but in exchange has a far bigger variety of weapons and statuses it can inflict and also runs on a recourse which continuously refills on its own even while attacking.
- Summoner has by far the worse defense and the whips lack oftentimes range but inexchange has the highest damage output in the game.
Within the classes or of course different weapon and armor types but in general the rules for the most part still exist.`,
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

const STORAGE_KEY = "terrarian_checklist_progress";
let completedItems = {};
if (typeof localStorage !== "undefined") {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) completedItems = JSON.parse(saved);
  } catch (e) {
    completedItems = {};
  }
}

function saveProgress() {
  if (typeof localStorage !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedItems));
    } catch (e) {
      // Ignore storage errors
    }
  }
}

function createFramedPanel(headerText, bodyBuilder) {
  const panel = document.createElement("div");
  panel.className = "wiki-panel";

  const header = document.createElement("div");
  header.className = "wiki-panel-header";
  header.textContent = headerText;

  const body = document.createElement("div");
  body.className = "wiki-panel-body";
  bodyBuilder(body);

  panel.appendChild(header);
  panel.appendChild(body);
  return panel;
}

function renderSidebar(chapterData, activeId) {
  const homeBtn = document.getElementById("home-btn");
  if (homeBtn) {
    if (activeId === null) {
      homeBtn.classList.add("active");
    } else {
      homeBtn.classList.remove("active");
    }
  }

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

function selectHome() {
  const titleEl = document.getElementById("chapter-title");
  const contentEl = document.getElementById("chapter-content");

  if (titleEl) titleEl.textContent = homeContent.title;

  if (contentEl) {
    contentEl.innerHTML = "";
    const overviewPanel = createFramedPanel("Guide Overview", (body) => {
      const p = document.createElement("p");
      p.textContent = homeContent.text;
      p.style.fontSize = "1.15rem";
      p.style.lineHeight = "1.65";
      body.appendChild(p);
    });
    contentEl.appendChild(overviewPanel);
  }

  renderSidebar(chapters, null);
}

function selectChapter(id) {
  const chapter = chapters.find((c) => c.id === id);
  if (!chapter) return;

  const titleEl = document.getElementById("chapter-title");
  const contentEl = document.getElementById("chapter-content");

  if (titleEl) titleEl.textContent = chapter.title;

  if (contentEl) {
    contentEl.innerHTML = "";

    // Render chapter guide text if present
    if (chapter.description) {
      const guidePanel = createFramedPanel("Chapter Guide", (body) => {
        const p = document.createElement("p");
        p.style.whiteSpace = "pre-line";
        p.style.fontSize = "1.12rem";
        p.style.lineHeight = "1.65";
        p.textContent = chapter.description;
        body.appendChild(p);
      });
      contentEl.appendChild(guidePanel);
    }

    const checklistPanel = createFramedPanel("Checklist", (body) => {
      const ul = document.createElement("ul");
      ul.className = "checklist-list";

      chapter.checklist.forEach((itemText, index) => {
        const itemKey = `${chapter.id}-${index}`;
        const isChecked = !!completedItems[itemKey];

        const li = document.createElement("li");
        li.className = "checklist-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checklist-checkbox";
        checkbox.checked = isChecked;

        const label = document.createElement("span");
        label.className = "checklist-label" + (isChecked ? " completed" : "");
        label.textContent = itemText;

        const updateState = (checked) => {
          completedItems[itemKey] = checked;
          saveProgress();
          if (checked) {
            label.classList.add("completed");
          } else {
            label.classList.remove("completed");
          }
        };

        checkbox.addEventListener("change", () => {
          updateState(checkbox.checked);
        });

        li.addEventListener("click", (e) => {
          if (e.target !== checkbox) {
            checkbox.checked = !checkbox.checked;
            updateState(checkbox.checked);
          }
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        ul.appendChild(li);
      });

      body.appendChild(ul);
    });

    const bottomGrid = document.createElement("div");
    bottomGrid.className = "bottom-grid";

    const notesPanel = createFramedPanel("Chapter Notes", (body) => {
      const p = document.createElement("p");
      p.className = "muted-note";
      p.textContent =
        "Check off goals as you complete them. Progress is saved automatically in your browser.";
      body.appendChild(p);
    });

    const nextPanel = createFramedPanel("Progression", (body) => {
      const p = document.createElement("p");
      p.className = "muted-note";
      const nextChapter = chapters.find((c) => c.id === id + 1);
      p.textContent = nextChapter
        ? `Up next: ${nextChapter.title}. Nothing is required before moving on.`
        : "You have reached the final chapter of the guide.";
      body.appendChild(p);
    });

    bottomGrid.appendChild(notesPanel);
    bottomGrid.appendChild(nextPanel);

    contentEl.appendChild(checklistPanel);
    contentEl.appendChild(bottomGrid);
  }

  renderSidebar(chapters, id);
}

if (typeof document !== "undefined") {
  const initApp = () => {
    const homeBtn = document.getElementById("home-btn");
    if (homeBtn) {
      homeBtn.addEventListener("click", selectHome);
    }
    selectHome();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { homeContent, chapters, renderSidebar, selectHome, selectChapter };
}