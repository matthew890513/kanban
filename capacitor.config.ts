import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mateo.kanban',
  appName: 'Kanban',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
