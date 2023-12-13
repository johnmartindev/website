const dir = "test/";

export const projectsAssets = {
  gridSize: 3, // 3x3 grid
  imagePaths: [
    `../textures/projects-cubes/${dir}0.png`,
    `../textures/projects-cubes/${dir}1.png`,
    `../textures/projects-cubes/${dir}2.png`,
    `../textures/projects-cubes/${dir}3.png`,
    `../textures/projects-cubes/${dir}4.png`,
    `../textures/projects-cubes/${dir}5.png`,
    `../textures/projects-cubes/${dir}6.png`,
  ],
  materialProperties: {
    metalness: 0.1,
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
