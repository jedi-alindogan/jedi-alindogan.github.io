import snakePaper from '../components/projects/src/media/Vertical Mobility and RL-based Locomotion of a Snake-Like Robot for Building Foundation Inspection.pdf';
import latticePaper from '../components/projects/src/media/caltech-BIG-Idea-Technical-Paper.pdf';

// Add publications here to display them in the Publications section.
export const publications = [
  {
    id: 'vertical-snake',
    year: 2026,
    title: 'Vertical Mobility and RL-based Locomotion of a Snake-Like Robot for Building Foundation Inspection',
    authors: 'Michael Paton, Jedidiah D. Alindogan, Shuhei Shigeto, Richard Rieber, et al.',
    venue: 'IEEE/RSJ IROS · 2026',
    href: snakePaper,
  },
  {
    id: 'magic-vfm',
    year: 2025,
    title: 'MAGIC-VFM: Meta-learning Adaptation for Ground Interaction Control with Visual Foundation Models',
    authors: 'Elena Sorina Lupu, Fengze Xie, James A. Preiss, Jedidiah Alindogan, Matthew Anderson, Soon-Jo Chung',
    venue: 'IEEE Transactions on Robotics · 2025',
    href: 'https://arxiv.org/abs/2407.12304',
  },
  {
    id: 'model-predictive-trees',
    year: 2024,
    title: 'Model Predictive Trees: Sample-Efficient Receding Horizon Planning with Reusable Tree Search',
    authors: 'John Lathrop, Benjamin Rivière, Jedidiah Alindogan, Soon-Jo Chung',
    venue: '2024',
    href: 'https://arxiv.org/abs/2411.15651',
  },
  {
    id: 'lattice',
    year: 2022,
    title: 'Lunar Architecture for Tree-Traversal In-service-of Cabled Exploration (LATTICE)',
    authors: 'Caltech LATTICE team (including Jedidiah Alindogan)',
    venue: 'NASA BIG Idea Challenge · Technical paper · 2022',
    href: latticePaper,
  },
];
