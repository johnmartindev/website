export const fragmentShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uOpacity;

// Function to create a smooth, undulating noise pattern
float undulatingNoise(vec2 st, float time) {
    st *= 2.0; // Scale the space
    float noise = sin(st.x * 3.0 + time) * cos(st.y * 3.0 + time) * 0.5 + 0.5;
    return noise;
}

void main() {
    vec2 uv = vUv;

    // Adjust the time scale for a slower, more fluid movement
    float time = uTime * 0.5;

    // Generate the undulating noise pattern
    float n = undulatingNoise(uv, time);

    // Define the colors for the lava and the lamp
    vec3 lavaColor = vec3(1.0, 0.5, 0.2); // Warm orange for lava
    vec3 lampColor = vec3(0.0, 0.0, 0.2); // Dark blue for lamp background

    // Mix the lava and lamp colors based on the noise pattern
    vec3 color = mix(lampColor, lavaColor, n);

    gl_FragColor = vec4(color, 1.0) * uOpacity;
}
`;
