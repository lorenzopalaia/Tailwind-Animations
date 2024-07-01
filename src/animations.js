const tailwindAnimations = {
  /* GRADIENTS */
  "@keyframes rainbow-river": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(128, 0, 0, 0.8),\n      rgba(255, 165, 0, 0.8),\n      rgba(255, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(128, 0, 0, 0.8),\n      rgba(255, 165, 0, 0.8),\n      rgba(255, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8)\n    )",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(128, 0, 0, 0.8),\n      rgba(255, 165, 0, 0.8),\n      rgba(255, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8)\n    )",
    },
  },
  ".animate-rainbow-river": {
    animation: "rainbow-river 5s ease infinite",
  },
  "@keyframes green-swoosh": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8)\n    )",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8)\n    )",
    },
  },
  ".animate-green-swoosh": { animation: "green-swoosh 2s ease infinite" },
  "@keyframes fuzzy-dream": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(255, 0, 0, 0.8),\n      rgba(255, 255, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8)\n    )",
      filter: "blur(0)",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(255, 0, 0, 0.8),\n      rgba(255, 255, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8)\n    )",
      filter: "blur(10px)",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(255, 0, 0, 0.8),\n      rgba(255, 255, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8)\n    )",
      filter: "blur(0)",
    },
  },
  ".animate-fuzzy-dream": { animation: "fuzzy-dream 2s ease infinite" },
  "@keyframes misty-fade": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      hsla(0, 0%, 50%, 0.8),\n      hsla(0, 0%, 75%, 0.8),\n      hsla(0, 0%, 88%, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      hsla(0, 0%, 75%, 0.8),\n      hsla(0, 0%, 88%, 0.8),\n      hsla(0, 0%, 50%, 0.8)\n    )",
      filter: "blur(0)",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      hsla(0, 0%, 50%, 0.8),\n      hsla(0, 0%, 75%, 0.8),\n      hsla(0, 0%, 88%, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      hsla(0, 0%, 75%, 0.8),\n      hsla(0, 0%, 88%, 0.8),\n      hsla(0, 0%, 50%, 0.8)\n    )",
      filter: "blur(7px)",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      hsla(0, 0%, 50%, 0.8),\n      hsla(0, 0%, 75%, 0.8),\n      hsla(0, 0%, 88%, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      hsla(0, 0%, 75%, 0.8),\n      hsla(0, 0%, 88%, 0.8),\n      hsla(0, 0%, 50%, 0.8)\n    )",
      filter: "blur(0)",
    },
  },
  ".animate-misty-fade": { animation: "misty-fade 2s ease infinite" },
  "@keyframes hazy-twist": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8),\n      rgba(0, 0, 255, 0.8)\n    )",
      filter: "blur(0)",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8),\n      rgba(0, 0, 255, 0.8)\n    )",
      filter: "blur(9px)",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8),\n      rgba(0, 0, 255, 0.8),\n      rgba(75, 0, 130, 0.8),\n      rgba(238, 130, 238, 0.8),\n      rgba(0, 0, 255, 0.8)\n    )",
      filter: "blur(0)",
    },
  },
  ".animate-hazy-twist": { animation: "hazy-twist 2s ease infinite" },
  "@keyframes mystic-aura": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8)\n    )",
      filter: "blur(0)",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8)\n    )",
      filter: "blur(8px)",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8),\n      rgba(255, 0, 255, 0.8),\n      rgba(128, 0, 128, 0.8)\n    )",
      filter: "blur(0)",
    },
  },
  ".animate-mystic-aura": { animation: "mystic-aura 2s ease infinite" },
  "@keyframes black-swoosh": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.8),\n      rgba(64, 64, 64, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      rgba(0, 0, 0, 0.8),\n      rgba(64, 64, 64, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      rgba(0, 0, 0, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.8),\n      rgba(64, 64, 64, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      rgba(0, 0, 0, 0.8),\n      rgba(64, 64, 64, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      rgba(0, 0, 0, 0.8)\n    )",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 0, 0, 0.8),\n      rgba(64, 64, 64, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      rgba(0, 0, 0, 0.8),\n      rgba(64, 64, 64, 0.8),\n      hsla(0, 0%, 50%, 0.8),\n      rgba(0, 0, 0, 0.8)\n    )",
    },
  },
  ".animate-black-swoosh": { animation: "black-swoosh 2s ease infinite" },
  "@keyframes tranquil-waters": {
    "0%": {
      backgroundSize: "500% 90%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(97, 174, 255, 0.8),\n      rgba(131, 192, 255, 0.8),\n      rgba(164, 209, 255, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "500% 90%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(164, 209, 255, 0.8),\n      rgba(131, 192, 255, 0.8),\n      rgba(97, 174, 255, 0.8)\n    )",
    },
    to: {
      backgroundSize: "500% 90%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(97, 174, 255, 0.8),\n      rgba(131, 192, 255, 0.8),\n      rgba(164, 209, 255, 0.8)\n    )",
    },
  },
  ".animate-tranquil-waters": {
    animation: "tranquil-waters 5s ease infinite",
  },
  "@keyframes diagonal-blaze": {
    "0%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(255, 0, 0, 0.8),\n      rgba(255, 165, 0, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(255, 165, 0, 0.8),\n      rgba(255, 0, 0, 0.8)\n    )",
    },
    to: {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(255, 0, 0, 0.8),\n      rgba(255, 165, 0, 0.8)\n    )",
    },
  },
  ".animate-diagonal-blaze": {
    animation: "diagonal-blaze 2s ease infinite",
  },
  "@keyframes diagonal-ocean-wave": {
    "0%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(0, 128, 128, 0.8),\n      rgba(32, 178, 170, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(32, 178, 170, 0.8),\n      rgba(0, 128, 128, 0.8)\n    )",
    },
    to: {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(0, 128, 128, 0.8),\n      rgba(32, 178, 170, 0.8)\n    )",
    },
  },
  ".animate-diagonal-ocean-wave": {
    animation: "diagonal-ocean-wave 2s ease infinite",
  },
  "@keyframes diagonal-purple-dream": {
    "0%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(128, 0, 128, 0.8),\n      rgba(218, 112, 214, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(218, 112, 214, 0.8),\n      rgba(128, 0, 128, 0.8)\n    )",
    },
    to: {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(128, 0, 128, 0.8),\n      rgba(218, 112, 214, 0.8)\n    )",
    },
  },
  ".animate-diagonal-purple-dream": {
    animation: "diagonal-purple-dream 2s ease infinite",
  },
  "@keyframes diagonal-rotating-sun": {
    "0%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(255, 255, 0, 0.8),\n      rgba(255, 165, 0, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(255, 165, 0, 0.8),\n      rgba(255, 255, 0, 0.8)\n    )",
    },
    to: { transform: "rotate(1turn)" },
  },
  ".animate-diagonal-rotating-sun": {
    animation: "diagonal-rotating-sun 2s ease infinite",
  },
  "@keyframes diagonal-galaxy": {
    "0%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(0, 0, 0, 0.8),\n      rgba(135, 206, 250, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(135, 206, 250, 0.8),\n      rgba(0, 0, 0, 0.8)\n    )",
    },
    to: {
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(0, 0, 0, 0.8),\n      rgba(135, 206, 250, 0.8)\n    )",
    },
  },
  ".animate-diagonal-galaxy": {
    animation: "diagonal-galaxy 2s ease infinite",
  },
  "@keyframes purple-swoosh": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(80, 70, 229, 0.8),\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      rgba(0, 0, 0, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(80, 70, 229, 0.8),\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      rgba(0, 0, 0, 0.8)\n    )",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(80, 70, 229, 0.8),\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      #5046e5,\n      rgba(0, 0, 0, 0.8)\n    )",
    },
  },
  ".animate-purple-swoosh": {
    animation: "purple-swoosh 2s ease infinite",
  },
  "@keyframes blurred-swoosh": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8)\n    )",
      filter: "blur(0)",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8)\n    )",
      filter: "blur(5px)",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 128, 0, 0.8)\n    )",
      filter: "blur(0)",
    },
  },
  ".animate-blurred-swoosh": {
    animation: "blurred-swoosh 2s ease infinite",
  },
  "@keyframes serene-sunset": {
    "0%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(255, 111, 97, 0.8),\n      rgba(255, 156, 131, 0.8),\n      rgba(255, 200, 164, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "600% 100%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(255, 200, 164, 0.8),\n      rgba(255, 156, 131, 0.8),\n      rgba(255, 111, 97, 0.8)\n    )",
    },
    to: {
      backgroundSize: "600% 100%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(255, 111, 97, 0.8),\n      rgba(255, 156, 131, 0.8),\n      rgba(255, 200, 164, 0.8)\n    )",
    },
  },
  ".animate-serene-sunset": {
    animation: "serene-sunset 2s ease infinite",
  },
  "@keyframes vibrant-sun": {
    "0%": {
      backgroundImage: "radial-gradient(circle at 50% 50%, #ff5252, #ffab40)",
      backgroundSize: "100% 100%",
    },
    "50%": {
      backgroundImage: "radial-gradient(circle at 60% 40%, #ffab40, #ff5252)",
      backgroundSize: "110% 110%",
    },
    to: {
      backgroundImage: "radial-gradient(circle at 50% 50%, #ff5252, #ffab40)",
      backgroundSize: "100% 100%",
    },
  },
  ".animate-vibrant-sun": { animation: "vibrant-sun 2s ease infinite" },
  "@keyframes shifting-triangles": {
    "0%": {
      backgroundImage:
        "linear-gradient(\n      60deg,\n      rgba(255, 0, 0, 0.8) 25%,\n      rgba(0, 255, 0, 0.8) 50%,\n      rgba(0, 0, 255, 0.8) 75%\n    )",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
    },
    "50%": {
      backgroundImage:
        "linear-gradient(\n      60deg,\n      rgba(0, 0, 255, 0.8) 25%,\n      rgba(255, 0, 0, 0.8) 50%,\n      rgba(0, 255, 0, 0.8) 75%\n    )",
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%",
    },
    to: {
      backgroundImage:
        "linear-gradient(\n      60deg,\n      rgba(255, 0, 0, 0.8) 25%,\n      rgba(0, 255, 0, 0.8) 50%,\n      rgba(0, 0, 255, 0.8) 75%\n    )",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 0",
    },
  },
  ".animate-shifting-triangles": {
    animation: "shifting-triangles 2s ease infinite",
  },
  "@keyframes mellow-embers": {
    "0%": {
      backgroundSize: "700% 110%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(226, 97, 97, 0.8),\n      hsla(0, 77%, 73%, 0.8),\n      hsla(0, 94%, 82%, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "700% 110%",
      backgroundPosition: "100%",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      hsla(0, 94%, 82%, 0.8),\n      hsla(0, 77%, 73%, 0.8),\n      rgba(226, 97, 97, 0.8)\n    )",
    },
    to: {
      backgroundSize: "700% 110%",
      backgroundPosition: "0",
      backgroundImage:
        "linear-gradient(\n      90deg,\n      rgba(226, 97, 97, 0.8),\n      hsla(0, 77%, 73%, 0.8),\n      hsla(0, 94%, 82%, 0.8)\n    )",
    },
  },
  ".animate-mellow-embers": {
    animation: "mellow-embers 2s ease infinite",
  },
  "@keyframes vertical-bliss": {
    "0%": {
      backgroundSize: "100% 600%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(128, 0, 0, 0.8),\n      rgba(255, 165, 0, 0.8),\n      rgba(255, 255, 0, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "100% 600%",
      backgroundPosition: "bottom",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(255, 255, 0, 0.8),\n      rgba(255, 165, 0, 0.8),\n      rgba(128, 0, 0, 0.8)\n    )",
    },
    to: {
      backgroundSize: "100% 600%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(128, 0, 0, 0.8),\n      rgba(255, 165, 0, 0.8),\n      rgba(255, 255, 0, 0.8)\n    )",
    },
  },
  ".animate-vertical-bliss": {
    animation: "vertical-bliss 2s ease infinite",
  },
  "@keyframes vertical-raindance": {
    "0%": {
      backgroundSize: "100% 800%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "100% 800%",
      backgroundPosition: "bottom",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(0, 255, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 128, 0, 0.8)\n    )",
    },
    to: {
      backgroundSize: "100% 800%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(0, 128, 0, 0.8),\n      rgba(0, 192, 0, 0.8),\n      rgba(0, 255, 0, 0.8)\n    )",
    },
  },
  ".animate-vertical-raindance": {
    animation: "vertical-raindance 2s ease infinite",
  },
  "@keyframes vertical-azure-wave": {
    "0%": {
      backgroundSize: "100% 500%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(97, 174, 255, 0.8),\n      rgba(131, 192, 255, 0.8),\n      rgba(164, 209, 255, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "100% 500%",
      backgroundPosition: "bottom",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(164, 209, 255, 0.8),\n      rgba(131, 192, 255, 0.8),\n      rgba(97, 174, 255, 0.8)\n    )",
    },
    to: {
      backgroundSize: "100% 500%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(97, 174, 255, 0.8),\n      rgba(131, 192, 255, 0.8),\n      rgba(164, 209, 255, 0.8)\n    )",
    },
  },
  ".animate-vertical-azure-wave": {
    animation: "vertical-azure-wave 2s ease infinite",
  },
  "@keyframes vertical-sunset-tide": {
    "0%": {
      backgroundSize: "100% 700%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(255, 99, 71, 0.8),\n      rgba(255, 140, 71, 0.8),\n      rgba(255, 165, 71, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "100% 700%",
      backgroundPosition: "bottom",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(255, 165, 71, 0.8),\n      rgba(255, 140, 71, 0.8),\n      rgba(255, 99, 71, 0.8)\n    )",
    },
    to: {
      backgroundSize: "100% 700%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(255, 99, 71, 0.8),\n      rgba(255, 140, 71, 0.8),\n      rgba(255, 165, 71, 0.8)\n    )",
    },
  },
  ".animate-vertical-sunset-tide": {
    animation: "vertical-sunset-tide 2s ease infinite",
  },
  "@keyframes vertical-golden-dream": {
    "0%": {
      backgroundSize: "100% 600%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(218, 165, 32, 0.8),\n      rgba(224, 186, 94, 0.8),\n      hsla(40, 62%, 76%, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "100% 600%",
      backgroundPosition: "bottom",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      hsla(40, 62%, 76%, 0.8),\n      rgba(224, 186, 94, 0.8),\n      rgba(218, 165, 32, 0.8)\n    )",
    },
    to: {
      backgroundSize: "100% 600%",
      backgroundPosition: "top",
      backgroundImage:
        "linear-gradient(\n      180deg,\n      rgba(218, 165, 32, 0.8),\n      rgba(224, 186, 94, 0.8),\n      hsla(40, 62%, 76%, 0.8)\n    )",
    },
  },
  ".animate-vertical-golden-dream": {
    animation: "vertical-golden-dream 2s ease infinite",
  },
  /* SPACES */
  "@keyframes blue-galaxy": {
    "0%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%),\n      linear-gradient(100deg, #fb00a5 50%, #6900cb),\n      linear-gradient(200deg, #8dada4, #12de81),\n      linear-gradient(-3deg, #1dadfe, #50009a 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 100%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "20%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%),\n      linear-gradient(100deg, #fb00a5 50%, #6900cb),\n      linear-gradient(200deg, #8dada4, #12de81),\n      linear-gradient(-3deg, #1dadfe, #50009a 50%)",
      backgroundSize: "105% 105%",
      backgroundPosition: "10% 100%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "40%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%),\n      linear-gradient(100deg, #fb00a5 50%, #6900cb),\n      linear-gradient(200deg, #8dada4, #12de81),\n      linear-gradient(-3deg, #1dadfe, #50009a 50%)",
      backgroundSize: "110% 300%",
      backgroundPosition: "20% 80%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "60%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%),\n      linear-gradient(100deg, #fb00a5 50%, #6900cb),\n      linear-gradient(200deg, #8dada4, #12de81),\n      linear-gradient(-3deg, #1dadfe, #50009a 50%)",
      backgroundSize: "115% 115%",
      backgroundPosition: "30% 70%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "80%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%),\n      linear-gradient(100deg, #fb00a5 50%, #6900cb),\n      linear-gradient(200deg, #8dada4, #12de81),\n      linear-gradient(-3deg, #1dadfe, #50009a 50%)",
      backgroundSize: "250% 120%",
      backgroundPosition: "40% 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    to: {
      background:
        "radial-gradient(100% 225% at 0 100%, #50009a 0, #001aff 100%),\n      linear-gradient(100deg, #fb00a5 50%, #6900cb),\n      linear-gradient(200deg, #8dada4, #12de81),\n      linear-gradient(-3deg, #1dadfe, #50009a 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 100%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
  },
  ".animate-blue-galaxy": { animation: "blue-galaxy 10s ease infinite" },
  "@keyframes gray-fluff": {
    "0%": {
      backgroundSize: "100% 100%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(96, 96, 96, 0.8),\n      rgba(0, 0, 0, 0.8)\n    )",
    },
    "50%": {
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 100%",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(96, 96, 96, 0.8),\n      rgba(0, 0, 0, 0.8)\n    )",
    },
    to: {
      backgroundSize: "100% 100%",
      backgroundPosition: "0 0",
      backgroundImage:
        "linear-gradient(\n      to bottom right,\n      rgba(96, 96, 96, 0.8),\n      rgba(0, 0, 0, 0.8)\n    )",
    },
  },
  ".animate-gray-fluff": { animation: "gray-fluff 5s ease infinite" },
  "@keyframes pastel-dream": {
    "0%": {
      background:
        "linear-gradient(\n      45deg,\n      #ffadc1,\n      #ff9e80,\n      #fcbf49,\n      #a4e057,\n      #64d2ff\n    )",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 100%",
      filter: "blur(10px)",
    },
    "50%": {
      background:
        "linear-gradient(\n      90deg,\n      #ffadc1,\n      #ff9e80,\n      #fcbf49,\n      #a4e057,\n      #64d2ff\n    )",
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 0",
      filter: "blur(5px)",
    },
    to: {
      background:
        "linear-gradient(\n      45deg,\n      #ffadc1,\n      #ff9e80,\n      #fcbf49,\n      #a4e057,\n      #64d2ff\n    )",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 100%",
      filter: "blur(10px)",
    },
  },
  ".animate-pastel-dream": { animation: "pastel-dream 5s ease infinite" },
  "@keyframes amethyst-midnight": {
    "0%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%),\n      linear-gradient(-100deg, #9c00ff 70%, #7500c4),\n      linear-gradient(200deg, #4c4c4c, #9300ff),\n      linear-gradient(-3deg, #6c0098, #3a006b 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "20%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%),\n      linear-gradient(-100deg, #9c00ff 70%, #7500c4),\n      linear-gradient(200deg, #4c4c4c, #9300ff),\n      linear-gradient(-3deg, #6c0098, #3a006b 50%)",
      backgroundSize: "105% 105%",
      backgroundPosition: "10% 50%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "40%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%),\n      linear-gradient(-100deg, #9c00ff 70%, #7500c4),\n      linear-gradient(200deg, #4c4c4c, #9300ff),\n      linear-gradient(-3deg, #6c0098, #3a006b 50%)",
      backgroundSize: "110% 300%",
      backgroundPosition: "20% 40%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "60%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%),\n      linear-gradient(-100deg, #9c00ff 70%, #7500c4),\n      linear-gradient(200deg, #4c4c4c, #9300ff),\n      linear-gradient(-3deg, #6c0098, #3a006b 50%)",
      backgroundSize: "115% 115%",
      backgroundPosition: "30% 30%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "80%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%),\n      linear-gradient(-100deg, #9c00ff 70%, #7500c4),\n      linear-gradient(200deg, #4c4c4c, #9300ff),\n      linear-gradient(-3deg, #6c0098, #3a006b 50%)",
      backgroundSize: "250% 120%",
      backgroundPosition: "40% 20%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    to: {
      background:
        "radial-gradient(100% 225% at 0 100%, #3a006b 0, #6c0098 100%),\n      linear-gradient(-100deg, #9c00ff 70%, #7500c4),\n      linear-gradient(200deg, #4c4c4c, #9300ff),\n      linear-gradient(-3deg, #6c0098, #3a006b 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
  },
  ".animate-amethyst-midnight": {
    animation: "amethyst-midnight 10s ease infinite",
  },
  "@keyframes golden-horizon": {
    "0%": {
      background: "linear-gradient(-45deg, #ffd400, #ffad00, #ff6e00, #ff2700)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 100%",
    },
    "50%": {
      background: "linear-gradient(-90deg, #ffd400, #ffad00, #ff6e00, #ff2700)",
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 0",
    },
    to: {
      background: "linear-gradient(-45deg, #ffd400, #ffad00, #ff6e00, #ff2700)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 100%",
    },
  },
  ".animate-golden-horizon": {
    animation: "golden-horizon 5s ease infinite",
  },
  "@keyframes rose-blush": {
    "0%": {
      background: "linear-gradient(45deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 100%",
    },
    "50%": {
      background: "linear-gradient(90deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 0",
    },
    to: {
      background: "linear-gradient(45deg, #ff446b, #ff7b6b, #ffad7b, #ffda8a)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 100%",
    },
  },
  ".animate-rose-blush": { animation: "rose-blush 10s ease infinite" },
  "@keyframes lavender-dream": {
    "0%": {
      background: "linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 100%",
    },
    "50%": {
      background: "linear-gradient(-90deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
      backgroundSize: "200% 200%",
      backgroundPosition: "100% 0",
    },
    to: {
      background: "linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)",
      backgroundSize: "200% 200%",
      backgroundPosition: "0 100%",
    },
  },
  ".animate-lavender-dream": {
    animation: "lavender-dream 5s ease infinite",
  },
  "@keyframes pink-blossom": {
    "0%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #ffb6c1 0, #ff69b4 100%),\n      linear-gradient(-100deg, pink 70%, #ff1493),\n      linear-gradient(200deg, pink, #ff69b4),\n      linear-gradient(-3deg, #ff69b4, #ffb6c1 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "20%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #ffb6c1 0, #ff69b4 100%),\n      linear-gradient(-100deg, pink 70%, #ff1493),\n      linear-gradient(200deg, pink, #ff69b4),\n      linear-gradient(-3deg, #ff69b4, #ffb6c1 50%)",
      backgroundSize: "105% 105%",
      backgroundPosition: "10% 50%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "40%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #ffb6c1 0, #ff69b4 100%),\n      linear-gradient(-100deg, pink 70%, #ff1493),\n      linear-gradient(200deg, pink, #ff69b4),\n      linear-gradient(-3deg, #ff69b4, #ffb6c1 50%)",
      backgroundSize: "110% 300%",
      backgroundPosition: "20% 40%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "60%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #ffb6c1 0, #ff69b4 100%),\n      linear-gradient(-100deg, pink 70%, #ff1493),\n      linear-gradient(200deg, pink, #ff69b4),\n      linear-gradient(-3deg, #ff69b4, #ffb6c1 50%)",
      backgroundSize: "115% 115%",
      backgroundPosition: "30% 30%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "80%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #ffb6c1 0, #ff69b4 100%),\n      linear-gradient(-100deg, pink 70%, #ff1493),\n      linear-gradient(200deg, pink, #ff69b4),\n      linear-gradient(-3deg, #ff69b4, #ffb6c1 50%)",
      backgroundSize: "250% 120%",
      backgroundPosition: "40% 20%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    to: {
      background:
        "radial-gradient(100% 225% at 0 100%, #ffb6c1 0, #ff69b4 100%),\n      linear-gradient(-100deg, pink 70%, #ff1493),\n      linear-gradient(200deg, pink, #ff69b4),\n      linear-gradient(-3deg, #ff69b4, #ffb6c1 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
  },
  ".animate-pink-blossom": { animation: "pink-blossom 5s ease infinite" },
  "@keyframes cosmic-wave": {
    "0%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #0039a6 0, #005eb8 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004785, #0039a6),\n      linear-gradient(60deg, #005eb8, #0039a6 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "20%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #0039a6 0, #005eb8 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004785, #0039a6),\n      linear-gradient(60deg, #005eb8, #0039a6 50%)",
      backgroundSize: "105% 105%",
      backgroundPosition: "10% 50%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "40%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #0039a6 0, #005eb8 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004785, #0039a6),\n      linear-gradient(60deg, #005eb8, #0039a6 50%)",
      backgroundSize: "110% 300%",
      backgroundPosition: "20% 40%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "60%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #0039a6 0, #005eb8 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004785, #0039a6),\n      linear-gradient(60deg, #005eb8, #0039a6 50%)",
      backgroundSize: "115% 115%",
      backgroundPosition: "30% 30%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "80%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #0039a6 0, #005eb8 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004785, #0039a6),\n      linear-gradient(60deg, #005eb8, #0039a6 50%)",
      backgroundSize: "250% 120%",
      backgroundPosition: "40% 20%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    to: {
      background:
        "radial-gradient(100% 225% at 0 100%, #0039a6 0, #005eb8 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004785, #0039a6),\n      linear-gradient(60deg, #005eb8, #0039a6 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
  },
  ".animate-cosmic-wave": { animation: "cosmic-wave 5s ease infinite" },
  "@keyframes glow-next-door": {
    "0%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #62004f 0, #8c007b 100%),\n      linear-gradient(-135deg, #bf00ff 70%, #9600c9),\n      linear-gradient(45deg, #4c4c4c, #bf00ff),\n      linear-gradient(-60deg, #8c007b, #62004f 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "20%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #62004f 0, #8c007b 100%),\n      linear-gradient(-135deg, #bf00ff 70%, #9600c9),\n      linear-gradient(45deg, #4c4c4c, #bf00ff),\n      linear-gradient(-60deg, #8c007b, #62004f 50%)",
      backgroundSize: "105% 105%",
      backgroundPosition: "10% 50%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "40%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #62004f 0, #8c007b 100%),\n      linear-gradient(-135deg, #bf00ff 70%, #9600c9),\n      linear-gradient(45deg, #4c4c4c, #bf00ff),\n      linear-gradient(-60deg, #8c007b, #62004f 50%)",
      backgroundSize: "110% 300%",
      backgroundPosition: "20% 40%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "60%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #62004f 0, #8c007b 100%),\n      linear-gradient(-135deg, #bf00ff 70%, #9600c9),\n      linear-gradient(45deg, #4c4c4c, #bf00ff),\n      linear-gradient(-60deg, #8c007b, #62004f 50%)",
      backgroundSize: "115% 115%",
      backgroundPosition: "30% 30%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    "80%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #62004f 0, #8c007b 100%),\n      linear-gradient(-135deg, #bf00ff 70%, #9600c9),\n      linear-gradient(45deg, #4c4c4c, #bf00ff),\n      linear-gradient(-60deg, #8c007b, #62004f 50%)",
      backgroundSize: "250% 120%",
      backgroundPosition: "40% 20%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
    to: {
      background:
        "radial-gradient(100% 225% at 0 100%, #62004f 0, #8c007b 100%),\n      linear-gradient(-135deg, #bf00ff 70%, #9600c9),\n      linear-gradient(45deg, #4c4c4c, #bf00ff),\n      linear-gradient(-60deg, #8c007b, #62004f 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, color-burn, color-burn, normal",
    },
  },
  ".animate-glow-next-door": {
    animation: "glow-next-door 5s ease infinite",
  },
  "@keyframes ski-haze": {
    "0%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #008033 0, #00551a 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004d26, #030),\n      linear-gradient(60deg, #00551a, #030 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, normal, normal, normal",
    },
    "20%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #008033 0, #00551a 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004d26, #030),\n      linear-gradient(60deg, #00551a, #030 50%)",
      backgroundSize: "105% 105%",
      backgroundPosition: "10% 50%",
      backgroundBlendMode: "color-dodge, normal, normal, normal",
    },
    "40%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #008033 0, #00551a 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004d26, #030),\n      linear-gradient(60deg, #00551a, #030 50%)",
      backgroundSize: "110% 300%",
      backgroundPosition: "20% 40%",
      backgroundBlendMode: "color-dodge, normal, normal, normal",
    },
    "60%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #008033 0, #00551a 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004d26, #030),\n      linear-gradient(60deg, #00551a, #030 50%)",
      backgroundSize: "115% 115%",
      backgroundPosition: "30% 30%",
      backgroundBlendMode: "color-dodge, normal, normal, normal",
    },
    "80%": {
      background:
        "radial-gradient(100% 225% at 0 100%, #008033 0, #00551a 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004d26, #030),\n      linear-gradient(60deg, #00551a, #030 50%)",
      backgroundSize: "250% 120%",
      backgroundPosition: "40% 20%",
      backgroundBlendMode: "color-dodge, normal, normal, normal",
    },
    to: {
      background:
        "radial-gradient(100% 225% at 0 100%, #008033 0, #00551a 100%),\n      linear-gradient(-45deg, #007bff 70%, #005eb8),\n      linear-gradient(135deg, #004d26, #030),\n      linear-gradient(60deg, #00551a, #030 50%)",
      backgroundSize: "100% 100%",
      backgroundPosition: "0 60%",
      backgroundBlendMode: "color-dodge, normal, normal, normal",
    },
  },
  ".animate-ski-haze": { animation: "ski-haze 5s ease infinite" },
  "@keyframes wobble": {
    "0%": { transform: "rotate(-5deg)" },
    "25%": { transform: "rotate(5deg)" },
    "50%": { transform: "rotate(-5deg)" },
    "75%": { transform: "rotate(5deg)" },
    to: { transform: "rotate(-5deg)" },
  },
  /* CLASSICS */
  ".animate-wobble": { animation: "wobble 1s infinite" },
  "@keyframes melt": {
    "0%": { transform: "scale(1)" },
    "20%": { transform: "scale(0.8)" },
    "40%": { transform: "scale(1.2)" },
    "60%": { transform: "scale(0.9)" },
    "80%": { transform: "scale(1.1)" },
    to: { transform: "scale(1)" },
  },
  ".animate-melt": { animation: "melt 1s infinite" },
  "@keyframes float": {
    "0%": { transform: "translateY(0)" },
    "25%": { transform: "translateY(-5px)" },
    "50%": { transform: "translateY(0)" },
    "75%": { transform: "translateY(5px)" },
    to: { transform: "translateY(0)" },
  },
  ".animate-float": { animation: "float 1s infinite" },
  "@keyframes breathe": {
    "0%": { transform: "scale(1)" },
    "25%": { transform: "scale(1.1)" },
    "50%": { transform: "scale(1)" },
    "75%": { transform: "scale(0.9)" },
    to: { transform: "scale(1)" },
  },
  ".animate-breathe": { animation: "breathe 1s infinite" },
  "@keyframes squiggle": {
    "0%": { transform: "translateX(0)" },
    "20%": { transform: "translateX(-5px)" },
    "40%": { transform: "translateX(5px)" },
    "60%": { transform: "translateX(-3px)" },
    "80%": { transform: "translateX(3px)" },
    to: { transform: "translateX(0)" },
  },
  ".animate-squiggle": { animation: "squiggle 1s infinite" },
  "@keyframes flip-and-spin": {
    "0%": { transform: "rotateY(0) rotate(0)" },
    "20%": { transform: "rotateY(1turn) rotate(0.5turn)" },
    "40%": { transform: "rotateY(2turn) rotate(1turn)" },
    "60%": { transform: "rotateY(3turn) rotate(540deg)" },
    "80%": { transform: "rotateY(4turn) rotate(2turn)" },
    to: { transform: "rotateY(5turn) rotate(900deg)" },
  },
  ".animate-flip-and-spin": { animation: "flip-and-spin 4s infinite" },
  "@keyframes twist": {
    "0%": { transform: "rotateY(0) skewY(0)" },
    "20%": { transform: "rotateY(1turn) skewY(-10deg)" },
    "40%": { transform: "rotateY(2turn) skewY(10deg)" },
    "60%": { transform: "rotateY(3turn) skewY(-10deg)" },
    "80%": { transform: "rotateY(4turn) skewY(10deg)" },
    to: { transform: "rotateY(5turn) skewY(0)" },
  },
  ".animate-twist": { animation: "twist 4s infinite" },
  "@keyframes pop": {
    "0%": { transform: "scale(1)" },
    "20%": { transform: "scale(1.2)" },
    "40%": { transform: "scale(0.8)" },
    "60%": { transform: "scale(1.1)" },
    "80%": { transform: "scale(0.9)" },
    to: { transform: "scale(1)" },
  },
  ".animate-pop": { animation: "pop 1s infinite" },
  "@keyframes scatter": {
    "0%": { transform: "translate(0)" },
    "20%": { transform: "translate(-50px, -50px)" },
    "40%": { transform: "translate(50px, -50px)" },
    "60%": { transform: "translate(-50px, 50px)" },
    "80%": { transform: "translate(50px, 50px)" },
    to: { transform: "translate(0)" },
  },
  ".animate-scatter": { animation: "scatter 1s" },
  "@keyframes morphing-rectangle": {
    "0%": {
      borderRadius: "0",
      transform: "scale(1)",
      backgroundColor: "#000",
    },
    "50%": {
      borderRadius: "20%",
      transform: "scale(0.75)",
      backgroundColor: "gray",
    },
    to: {
      borderRadius: "0",
      transform: "scale(1)",
      backgroundColor: "#000",
    },
  },
  ".animate-morphing-rectangle": {
    animation: "morphing-rectangle 2s ease infinite",
  },
};

module.exports = tailwindAnimations;
