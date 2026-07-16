import { Project, TimelineStep, Skill, Tool } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'cyberpunk_helmet',
    title: 'Cyberpunk Helmet',
    category: 'Hard Surface / Prop',
    categoryFilter: 'hard_surface',
    software: ['Blender', 'Substance Painter', 'Marmoset Toolbag'],
    polygons: '48,256 Tris',
    textureSize: '4K (PBR)',
    timeTaken: '18 Days',
    shortDescription: 'A detailed cyberpunk helmet designed with attention to hard surface modeling, realistic materials, and futuristic aesthetics.',
    longDescription: 'This cyberpunk helmet project is a comprehensive study in sci-fi hard surface design, optimized topology, and PBR texturing. The goal was to create a production-ready game asset that balances visual complexity with strict performance constraints. Every bolt, panel line, and composite layer was modeled with high-fidelity bevels, sub-division workflows, and hand-painted material wears. The final textures are packed in standard ORM maps for seamless integration into Unreal Engine 5 or Unity.',
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
    id: 'aegis_drone',
    title: 'Aegis Drone',
    category: 'Hard Surface / Sci-Fi',
    categoryFilter: 'vehicles',
    software: ['Blender', 'Substance Painter', 'Photoshop'],
    polygons: '32,140 Tris',
    textureSize: '4K PBR',
    timeTaken: '12 Days',
    shortDescription: 'A stealth tactical surveillance quadcopter designed with lightweight carbon fibers and military-grade metals.',
    longDescription: 'The Aegis Drone is an industrial vehicle design built for stealth and reconnaissance. This model leverages a mix of geometric curves and rigid metal frames. Particular attention was paid to the internal component layouts, camera gimbal mechanics, and motor-propeller coupling details. The texturing workflow involved complex masking to blend matte carbon fiber with brushed titanium paneling, including realistic micro-scratches, dust accumulation, and exhaust soot.',
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
    id: 'vintage_camera',
    title: 'Vintage Camera',
    category: 'Product Visualization',
    categoryFilter: 'product',
    software: ['Blender', 'Substance Painter', 'Marmoset Toolbag'],
    polygons: '24,800 Tris',
    textureSize: '2K/4K PBR',
    timeTaken: '8 Days',
    shortDescription: 'A high-fidelity replica of an analog SLR camera from the 1970s, emphasizing physical dials and optical lens refraction.',
    longDescription: 'The Vintage Camera project is a study in photorealistic material replication. Capturing the tactile feedback of old cameras required distinct PBR maps for knurled metal knobs, worn leatherette bodies, and multi-layered glass lens elements with anti-reflective chemical coatings. The camera is modeled to scale using real-world engineering blueprints, making it fully ready for macro cinematic product presentations.',
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
    id: 'abandoned_station',
    title: 'Abandoned Station',
    category: 'Environment / Sci-Fi',
    categoryFilter: 'environment',
    software: ['Unreal Engine', 'Blender', 'Substance Painter'],
    polygons: '850,000 Tris (Scene)',
    textureSize: '2K/4K Trim Sheets',
    timeTaken: '25 Days',
    shortDescription: 'A moody, atmospheric subterranean sci-fi terminal designed using highly optimized trim sheets and modular design kits.',
    longDescription: 'The Abandoned Station environment showcase is an exercise in efficient world-building. Rather than unique assets, 80% of this scene was built using modular structural kits, trim sheets, and tileable concrete, steel, and grime textures. Real-time dynamic lighting in Unreal Engine (Lumen) combined with custom volumetric fog shaders, dripping puddle particles, and emergency orange alarms gives the scene its heavy, tense, cinematic atmosphere.',
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
    id: 'mechanical_keyboard',
    title: 'Mechanical Keyboard',
    category: 'Product Visualization',
    categoryFilter: 'product',
    software: ['Blender', 'Substance Painter', 'Marmoset Toolbag'],
    polygons: '18,500 Tris',
    textureSize: '2K PBR',
    timeTaken: '6 Days',
    shortDescription: 'A minimalist mechanical keyboard featuring dual-shot plastic keycaps, matte aluminum housing, and interactive amber glow.',
    longDescription: 'A compact 65% mechanical keyboard project focusing on fine plastic and metallic finishes. The challenge was displaying the subtle roughness variations of sandblasted aluminum and double-shot injection-molded PBR keycap polymers. Integrated emissive meshes on the PCB simulate the warm ambient backlighting bouncing off the switch plates, producing an elegant, tactile, and highly realistic product render.',
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
