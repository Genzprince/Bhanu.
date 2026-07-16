import { Project, TimelineStep, Skill, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'aetheris_headset',
    title: 'Aetheris Acoustic Headset',
    category: 'Product Design',
    categoryFilter: 'product_design',
    software: ['Blender', 'Substance Painter'],
    polygons: '18,500 Tris',
    textureSize: '4K (PBR)',
    timeTaken: '8 Days',
    shortDescription: 'A high-end cinematic product rendering of modular audiophile headphones.',
    longDescription: 'The Aetheris Acoustic Headset project presents an audiophile hardware concept designed for extreme material fidelity. Every component, from the memory-foam ear cushions to the brushed-aluminum structural headband, was modeled to real-world mechanical specifications. The texturing stage involved layering realistic micro-abrasions, subtle leather grain, and laser-etched branding details. The final output serves as a primary example of high-fidelity commercial visual representation.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'forgotten_monolith',
    title: 'The Forgotten Monolith',
    category: 'Environment Design',
    categoryFilter: 'environment_design',
    software: ['Blender', 'Unreal Engine'],
    polygons: '120,000 Tris',
    textureSize: '4K (PBR)',
    timeTaken: '15 Days',
    shortDescription: 'A mysterious structural monolith hidden in an atmospheric outdoor landscape.',
    longDescription: 'This environmental layout focuses on scale, composition, and mood. The centerpiece monolith features custom-designed sci-fi glyphs baked from a high-poly sculpt onto an optimized low-poly block. The surrounding scene includes realistic foliage, procedural wet stone surfaces, and cinematic volumetric fog rendered in Unreal Engine 5 to produce a breathtaking, mystical atmosphere.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1502239608882-93b729c6af43?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'keystone_keyboard',
    title: 'Keystone Artisan Keyboard',
    category: 'Product Design',
    categoryFilter: 'product_design',
    software: ['Blender', 'Substance Painter'],
    polygons: '24,500 Tris',
    textureSize: '2K/4K PBR',
    timeTaken: '6 Days',
    shortDescription: 'A premium mechanical keyboard render emphasizing physical switches and dual-shot keycaps.',
    longDescription: 'A detailed study in consumer product design, this keyboard concept highlights double-shot keycap moldings, copper weight plates, and custom switch layouts. Texturing focused on the delicate roughness of matte PBT plastic and sandblasted anodized aluminum housing, complemented by warm LED underglow layers.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'vector_hauler',
    title: 'Vector-E Commercial Hauler',
    category: 'Rendering',
    categoryFilter: 'rendering',
    software: ['Blender', 'Substance Painter'],
    polygons: '142,000 Tris',
    textureSize: '4K PBR',
    timeTaken: '18 Days',
    shortDescription: 'An all-electric autonomous transport truck with aerodynamic body lines.',
    longDescription: 'The Vector-E is an industrial concept vehicle built for future cargo logistics. The geometry combines smooth aerodynamic body lines with complex mechanical underside assets. Specialized PBR textures simulate carbon fiber wind-deflectors, matte cargo bays, and wet road splash detailing.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'obsidian_flask',
    title: 'Obsidian Essence Flask',
    category: 'Rendering',
    categoryFilter: 'rendering',
    software: ['Blender', 'Photoshop'],
    polygons: '12,800 Tris',
    textureSize: '2K PBR',
    timeTaken: '5 Days',
    shortDescription: 'A high-end cosmetic or fragrance bottle showcase with sub-surface light scattering.',
    longDescription: 'This project focuses heavily on shader mechanics and light transmission. Capturing the dense obsidian glass required careful refraction, roughness maps, and volumetric dispersion configurations, paired with embossed metallic labels designed in Photoshop.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'aegis_drone',
    title: 'Aegis-IX Heavy Tactical Drone',
    category: 'Modeling',
    categoryFilter: 'modeling',
    software: ['Blender', 'Substance Painter'],
    polygons: '32,140 Tris',
    textureSize: '4K PBR',
    timeTaken: '12 Days',
    shortDescription: 'A heavy defense surveillance copter designed with modular tactical components.',
    longDescription: 'A hard-surface asset built for real-time applications. The design prioritizes optimized topology, clear panel segmentation, and clean high-to-low baking. Details include hand-painted military stencils, lens flare emitters, and carbon-fiber landing gear struts.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'chronos_timepiece',
    title: 'Chronos Mechanical Timepiece',
    category: 'Modeling',
    categoryFilter: 'modeling',
    software: ['Blender', 'Substance Painter'],
    polygons: '38,000 Tris',
    textureSize: '4K PBR',
    timeTaken: '10 Days',
    shortDescription: 'A luxury watch render focusing on micro-mechanical interior gears and physical assembly.',
    longDescription: 'A complex model demonstrating precise alignment and micro-modeling workflows. It features fully detailed gears, brass bearings, and fine laser carvings, coupled with double-convex sapphire crystal glass that refracts interior sub-dial details.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'neo_tokyo',
    title: 'Neo-Tokyo Cyber Street',
    category: 'Environment Design',
    categoryFilter: 'environment_design',
    software: ['Unreal Engine', 'Blender'],
    polygons: '680,000 Tris',
    textureSize: '4K Trim Sheets',
    timeTaken: '24 Days',
    shortDescription: 'A dense, neon-lit alleyway capturing dynamic cyberpunk elements.',
    longDescription: 'A massive real-time scene featuring custom modular storefronts, retro-futuristic vending machines, and animated holographic billboards. Developed utilizing extensive tileable textures and smart shader blending in Unreal Engine 5.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1502239608882-93b729c6af43?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'exo_gauntlet',
    title: 'Exo-Armor Gauntlet',
    category: 'Texturing',
    categoryFilter: 'texturing',
    software: ['Blender', 'Substance Painter'],
    polygons: '21,000 Tris',
    textureSize: '4K PBR',
    timeTaken: '9 Days',
    shortDescription: 'A mechanical exo-suit glove featuring heavy protective plates and hydraulic couplers.',
    longDescription: 'Designed with industrial safety elements in mind. Focuses on weathered polymer panels, exposed rubber wiring, and high-contrast yellow caution branding. Multi-layered rust and carbon build-up textures add profound narrative weight.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  },
  {
    id: 'titanium_cell',
    title: 'Titanium Fuel Cell',
    category: 'UV Unwrap',
    categoryFilter: 'uv_unwrap',
    software: ['Blender', 'Marmoset Toolbag'],
    polygons: '16,000 Tris',
    textureSize: '2K/4K PBR',
    timeTaken: '7 Days',
    shortDescription: 'An ultra-clean mechanical engine component showcasing seamless UV islands.',
    longDescription: 'Demonstrates high efficiency in UV unwrapping. Maximizes pixel usage density across a single texture atlas while ensuring zero seam lines along curved metallic pipes and air ducts.',
    images: {
      beauty: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
      clay: 'https://images.unsplash.com/photo-1606744824163-985d376605aa?auto=format&fit=crop&w=1200&q=80',
      wireframe: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=1200&q=80',
      textured: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
      details: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80'
    },
    comparisonOptions: [
      { left: { label: 'Wireframe', key: 'wireframe' }, right: { label: 'Final Render', key: 'beauty' } },
      { left: { label: 'Clay Render', key: 'clay' }, right: { label: 'Textured', key: 'textured' } },
      { left: { label: 'Textured', key: 'textured' }, right: { label: 'Final Render', key: 'beauty' } }
    ]
  }
];

export const TIMELINE: TimelineStep[] = [
  {
    number: '01',
    title: 'Concept',
    iconName: 'Lightbulb',
    description: 'Translating ideas into comprehensive visual briefs, gathering reference imagery, analyzing form language, and sketching mood boards to set a definitive production direction.'
  },
  {
    number: '02',
    title: 'Modeling',
    iconName: 'Box',
    description: 'Blocking out raw silhouettes to establish silhouette integrity, followed by high-fidelity subdivision or boolean hard-surface modeling to sculpt production-ready meshes.'
  },
  {
    number: '03',
    title: 'Retopology',
    iconName: 'GitCommit',
    description: 'Manually restructuring vertex layouts into clean, ultra-efficient edge loops. Minimizing polygon density while perfectly preserving high-frequency surface silhouettes.'
  },
  {
    number: '04',
    title: 'UV Mapping',
    iconName: 'Layout',
    description: 'Unwrapping meshes with strict texel density constraints, minimizing distortion, and strategically hiding UV seams along physical material joints.'
  },
  {
    number: '05',
    title: 'Texturing',
    iconName: 'Paintbrush',
    description: 'Baking high-to-low mesh maps and crafting realistic, multi-layered Physically Based Rendering (PBR) materials using procedural maskings and realistic hand-painted wear.'
  },
  {
    number: '06',
    title: 'Lighting',
    iconName: 'Sun',
    description: 'Setting up precise studio or three-point cinematic lighting setups, establishing atmospheric depth, and configuring environmental HDRI cards.'
  },
  {
    number: '07',
    title: 'Rendering',
    iconName: 'Camera',
    description: 'Configuring physically accurate path-tracers, optimization settings (denoising, ambient occlusion), and baking textures into fast real-time shader pipelines.'
  },
  {
    number: '08',
    title: 'Final',
    iconName: 'CheckCircle',
    description: 'Polishing contrast with subtle post-process color grading, compositing breakdowns, and cataloging clean deliverables suited for development engines.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Modeling', percentage: 95 },
  { name: 'Texturing', percentage: 95 },
  { name: 'UV Unwrap', percentage: 90 },
  { name: 'Rendering', percentage: 90 },
  { name: 'Lighting', percentage: 85 },
  { name: 'Environment Design', percentage: 80 },
  { name: 'Product Design', percentage: 80 }
];

export const TOOLS: Tool[] = [
  { name: 'Blender', description: 'Primary 3D tool for organic modeling, subdivision modeling, retopology, and layout blocks.' },
  { name: 'Substance Painter', description: 'Industry standard for detailed Physically Based Rendering (PBR) texture painting and baking.' },
  { name: 'Marmoset Toolbag', description: 'Premium real-time baking and ultra-clean studio lighting asset presentation rendering.' },
  { name: 'Photoshop', description: 'Post-production compositing, decals painting, graphic design, and custom alphas creation.' },
  { name: 'Unreal Engine', description: 'Real-time scene composition, cinematic lighting configurations, and dynamic environment design.' },
  { name: 'After Effects', description: 'Cinematic color grading, motion graphics, and breakdown video composites.' }
];
