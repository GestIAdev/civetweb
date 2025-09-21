import { buildConfig } from 'payload/config';
import path from 'path';

// Colecciones básicas para CIVET
const config = buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3001',
  collections: [
    {
      slug: 'pacientes',
      fields: [
        {
          name: 'nombre',
          type: 'text',
          required: true,
        },
        {
          name: 'tipo',
          type: 'text',
          required: true,
        },
        {
          name: 'tratamiento',
          type: 'textarea',
        },
        {
          name: 'foto',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      slug: 'productos',
      fields: [
        {
          name: 'nombre',
          type: 'text',
          required: true,
        },
        {
          name: 'precio',
          type: 'number',
          required: true,
        },
        {
          name: 'categoria',
          type: 'text',
        },
        {
          name: 'imagen',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
});

export default config;