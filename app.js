const chapters = [
  {
    id: 1,
    title: "The Beginning",
    content: `Tips:
• Chop down trees immediately to build a basic wooden shelter before nightfall.
• Craft a Workbench, Chair, Door, and Background Walls so your Guide has valid housing.
• Explore surface chests for early mobility items and recall potions.

General Item Recommendations:
• Wooden Broadsword & Wooden Bow (with Flaming Arrows)
• Cactus or Wood Armor set
• Hermes Boots & Cloud in a Bottle

Checklist:
[ ] Build at least 3 valid NPC houses
[ ] Mine Iron/Lead and Silver/Tungsten underground
[ ] Find Life Crystals to increase max HP to 200+
[ ] Defeat King Slime or the Eye of Cthulhu`
  },
  {
    id: 2,
    title: "Preparation",
    content: `Tips:
• Build multi-layered wooden platforms as a boss arena with Campfires and Heart Lanterns.
• Smash Shadow Orbs (Corruption) or Crimson Hearts (Crimson) carefully—every 3rd one summons a boss.
• Start gathering herbs (Daybloom, Blinkroot, Moonglow) for buff potions.

General Item Recommendations:
• Gold or Platinum Armor set
• Space Gun + Meteor Armor (or Minishark / Blade of Grass)
• Grappling Hook & Shield of Cthulhu (Expert+)

Checklist:
[ ] Defeat Eater of Worlds or Brain of Cthulhu
[ ] Craft a Nightmare Pickaxe or Deathbringer Pickaxe
[ ] Mine Meteorite and Obsidian
[ ] Defeat Queen Bee in the Underground Jungle`
  },
  {
    id: 3,
    title: "The Dungeon",
    content: `Tips:
• Do NOT enter the Dungeon before defeating Skeletron at night, or Dungeon Guardians will instantly defeat you.
• Bring plenty of torches and watch out for spiked traps and Water Candles (which increase spawn rates).
• Rescue the bound Mechanic and Goblin Tinkerer underground after defeating the Goblin Army.

General Item Recommendations:
• Molten Armor (mined from Hellstone in the Underworld)
• Night's Edge, Water Bolt, or Phoenix Blaster
• Spectre Boots & Obsidian Shield

Checklist:
[ ] Speak to the Old Man at night and defeat Skeletron
[ ] Loot Locked Gold Chests using Golden Keys
[ ] Obtain the Cobalt Shield, Muramasa, and Hand Gun
[ ] Find the Shadow Key for Underworld chests`
  },
  {
    id: 4,
    title: "The Wall to a new Beginning",
    content: `Tips:
• Build a long, flat bridge across the Underworld (at least 1,000–1,500 blocks) before summoning the Wall of Flesh.
• Dig hellevators and quarantine tunnels around your base and Jungle before entering Hardmode to slow Biome spread.
• Save crates if desired, and make sure your Guide is alive so the Guide Voodoo Doll works.

General Item Recommendations:
• Beenades (very effective against Wall of Flesh)
• Hellwing Bow, Sunfury, or Demon Scythe
• Terraspark Boots & Bundle of Balloons

Checklist:
[ ] Build the Underworld bridge
[ ] Prepare buffs (Ironskin, Regeneration, Swiftness, Well Fed)
[ ] Drop the Guide Voodoo Doll into lava and defeat the Wall of Flesh
[ ] Collect the Pwnhammer and enter Hardmode`
  },
  {
    id: 5,
    title: "Rediscovery",
    content: `Tips:
• Use the Pwnhammer to smash Demon/Crimson Altars and bless your world with Hardmode ores.
• Enemies hit much harder now—prioritize upgrading your pickaxe and armor tier by tier.
• Visit a Sky Island or defeat Wyverns to craft your first pair of Wings.

General Item Recommendations:
• Adamantite or Titanium Armor set
• Daedalus Stormbow (with Holy Arrows), Amarok, or Sky Fracture
• Any early Hardmode Wings & Cross Necklace

Checklist:
[ ] Smash at least 3–6 Altars for Cobalt/Palladium, Mythril/Orichalcum, and Adamantite/Titanium
[ ] Craft a Mythril or Orichalcum Anvil and Adamantite/Titanium Forge
[ ] Obtain Souls of Light and Souls of Night in the Underground Hallow/Evil
[ ] Craft Wings and upgrade accessories at the Tinkerer's Workshop`
  },
  {
    id: 6,
    title: "Mechanical Destruction",
    content: `Tips:
• The three Mechanical Bosses (The Destroyer, The Twins, Skeletron Prime) must be fought at night and defeated before dawn.
• Piercing weapons shred The Destroyer, while high-mobility vertical dodging helps against The Twins and Skeletron Prime.
• Defeating even one Mechanical Boss allows the Steampunker NPC to move in.

General Item Recommendations:
• Hallowed Armor (crafted from Hallowed Bars dropped by Mech Bosses)
• Megashark, Shadowflame Knife, or Crystal Serpent
• Charm of Myths & Emblem accessories

Checklist:
[ ] Defeat The Destroyer
[ ] Defeat The Twins
[ ] Defeat Skeletron Prime
[ ] Craft the Pickaxe Axe or Drax to mine Chlorophyte in the Jungle`
  },
  {
    id: 7,
    title: "The Restless Jungle",
    content: `Tips:
• Explore the deep Underground Jungle to mine Chlorophyte ore and hunt for Life Fruits to increase max HP to 500.
• Prepare a large arena in the Jungle surface or underground for Plantera, as enraging her outside the Jungle is fatal.
• Watch out for angry trappers, moss hornets, and tortoises.

General Item Recommendations:
• Turtle Armor or Shroomite Armor components
• Chlorophyte Shotbow, Death Sickle, or Nettle Burst
• Fire Gauntlet, Mechanical Glove, or Mana Flower variants

Checklist:
[ ] Mine Chlorophyte and craft advanced armor/weapons
[ ] Collect Life Fruit until HP reaches 500
[ ] Locate the glowing pink Plantera's Bulb deep in the Jungle
[ ] Defeat Plantera to unlock the Dungeon's post-plantera content`
  },
  {
    id: 8,
    title: "Guardian of the Temple",
    content: `Tips:
• Take the Temple Key dropped by Plantera to unlock the Jungle Temple structure.
• Clear out traps inside the Lihzahrd Temple carefully—wire cutters or traps can be harvested for later use.
• Build a trap-filled arena or fighting corridor inside the temple chamber before spawning Golem.

General Item Recommendations:
• Beetle Armor (using Beetle Husks from Golem) or Spectre/Shroomite sets
• Paladin's Hammer, Scourge of the Corruptor, or Erupting/Vortex weapons
• Celestial Stone or Celestial Shell

Checklist:
[ ] Enter the Jungle Temple and clear the rooms
[ ] Collect Lihzahrd Power Cells from chests and enemies
[ ] Spawn and defeat Golem multiple times for drops
[ ] Defeat the Martian Madness event (if triggered via Martian Probe) to grab endgame tech`
  },
  {
    id: 9,
    title: "The Cult and the Chaos that comes after",
    content: `Tips:
• Return to the Dungeon entrance after defeating Golem to find the Mysterious Cultists.
• Defeating the Lunatic Cultist immediately triggers the Lunar Events across the four world pillars.
• Do not die carelessly during the pillars; dying resets the shield damage progress if you leave the area, and taking down all 4 spawns the final boss.

General Item Recommendations:
• Best class-specific armor (Vortex, Nebula, Solar Flare, or Stardust)
• Pillar weapons (Phantasm, Daybreak, Eruption, Stardust Dragon Staff)
• Celestial Emblem, Ansh Shield, and soaring wings

Checklist:
[ ] Defeat the Lunatic Cultist at the Dungeon entrance
[ ] Destroy the Solar, Vortex, Nebula, and Stardust Pillars
[ ] Stock up on healing potions, buff potions, and arena setups
[ ] Prepare for the descent of the final threat`
  },
  {
    id: 10,
    title: "The One above it all",
    content: `Tips:
• This is the final test: Moon Lord requires maximum mobility, potions, and a well-constructed arena or asphalt runway.
• Dodge the devastating True Eyes of Cthulhu attacks and hide behind solid blocks when the Deathray sweeps across.
• Defeat him to claim the ultimate endgame materials (Luminite) and craft final gear.

General Item Recommendations:
• Zenith (crafted from key swords throughout the game) for Melee dominance
• Lunar Flare, SDMG, or Celebration MK2
• Soaring Insignia (Expert/Master) & Fishron Ronin/Celestial Starboard wings

Checklist:
[ ] Defeat Moon Lord
[ ] Mine or collect Luminite to craft Luminite Tools and Armor
[ ] Craft the Zenith or ultimate class weapons
[ ] Complete your world exploration and achievements!`
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
    contentEl.style.whiteSpace = "pre-line";
    contentEl.textContent = chapter.content;
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