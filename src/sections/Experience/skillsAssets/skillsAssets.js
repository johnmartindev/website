const dir = "test/";

export const skillsAssets = {
  gridSize: 3, // 3x3 grid
  imagePaths: [
    `../textures/skill-cubes/${dir}0.png`,
    `../textures/skill-cubes/${dir}1.png`,
    `../textures/skill-cubes/${dir}2.png`,
    `../textures/skill-cubes/${dir}3.png`,
    `../textures/skill-cubes/${dir}4.png`,
    `../textures/skill-cubes/${dir}5.png`,
    `../textures/skill-cubes/${dir}6.png`,
    `../textures/skill-cubes/${dir}7.png`,
    `../textures/skill-cubes/${dir}8.png`,
  ],
  materialProperties: {
    metalness: 0.9,
    roughness: 0.1,
  },
  positions: [
    // First row
    [-1, 1, 0],
    [0, 1, 0],
    [1, 1, 0],
    // Second row
    [-1, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
    // Third row
    [-1, -1, 0],
    [0, -1, 0],
    [1, -1, 0],
  ],
};
