export const fragmentShader = `
precision highp float;

uniform float uTime;
varying vec2 vUv;

void main() {
    vec2 uv = vUv * 2.0 - 1.0; // Normalize coordinates
    uv.x *= 2.0;

    // Create a dynamic gradient avoiding pink
    vec3 color = vec3(
        0.5 + 0.5 * sin(uTime + uv.x),         // Red component
        0.5 + 0.5 * sin(uTime * 1.3 + uv.y),   // Green component
        0.5 + 0.5 * cos(uTime * 1.7 + uv.x)    // Blue component
    );

    // Adjust blue when red is strong to avoid pink
    float redStrength = smoothstep(0.3, 0.7, color.r);
    color.b = mix(color.b, color.b * (1.0 - redStrength), redStrength);

    // Diamond-shaped vignette
    float diamond = smoothstep(0.8, 0.5, abs(uv.x) + abs(uv.y));
    color *= diamond;

    gl_FragColor = vec4(color, 1.0) * 0.6;
}
`;
