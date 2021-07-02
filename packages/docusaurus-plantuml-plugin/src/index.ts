import type { Plugin } from '@docusaurus/types';

export default function docusaurusPlantUmlPlugin(): Plugin<Record<string, unknown> | null> {
  return {
    name: 'docusaurus-plantuml-plugin',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.[pi]uml$/,
              type: 'asset/source',
            },
          ],
        },
      };
    },
  };
}