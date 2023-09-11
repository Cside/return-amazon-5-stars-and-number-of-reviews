import fs from 'fs';

const manifest = JSON.parse(fs.readFileSync('/dev/stdin', 'utf8'));

manifest.manifest_version = 2;
manifest.background = {
  page: 'background.html',
};
manifest.browser_specific_settings = {
  gecko: {
    id: 'classic-amazon-stars@github.com',
  },
};

manifest.browser_action = manifest.action;
delete manifest.action;

delete manifest.web_accessible_resources;

console.info(JSON.stringify(manifest, null, 2));
