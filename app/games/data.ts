export const gamesData = {
  "gta-v": {
    name: "Grand Theft Auto V",
    category: "Action",
    developer: "Rockstar Games",
    version: "Latest",
    size: "110 GB",
    image: "/games/gta-v.png",
    description:
      "Explore Los Santos in one of the most popular open-world action games.",
    requirements:
      "Windows 10 or 11, Intel Core i5, 8 GB RAM, GTX 1050 Ti or better.",
    download: "https://www.rockstargames.com/gta-v",
    features: [
      "Large open-world environment",
      "Story mode with multiple characters",
      "Online multiplayer",
      "High-quality graphics",
    ],
  },

  minecraft: {
    name: "Minecraft",
    category: "Adventure",
    developer: "Mojang Studios",
    version: "Latest",
    size: "2 GB",
    image: "/games/minecraft.png",
    description:
      "Build, explore and survive in a creative block-based open world.",
    requirements:
      "Windows 10 or 11, Intel Core i3, 4 GB RAM, integrated graphics.",
    download: "https://www.minecraft.net",
    features: [
      "Creative and survival modes",
      "Multiplayer support",
      "Unlimited building possibilities",
      "Regular updates",
    ],
  },

  valorant: {
    name: "Valorant",
    category: "Shooting",
    developer: "Riot Games",
    version: "Latest",
    size: "30 GB",
    image: "/games/valorant.png",
    description:
      "A competitive tactical shooting game with unique agents and abilities.",
    requirements:
      "Windows 10 or 11, Intel Core i3, 4 GB RAM, Intel HD 4000 or better.",
    download: "https://playvalorant.com",
    features: [
      "Competitive 5v5 gameplay",
      "Unique playable agents",
      "Ranked matches",
      "Optimised performance",
    ],
  },
};

export type GameSlug = keyof typeof gamesData;