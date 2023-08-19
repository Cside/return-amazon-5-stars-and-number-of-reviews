import fs from "fs";

const manifest = JSON.parse(fs.readFileSync("/dev/stdin", "utf8"));

manifest.manifest_version = 2;

delete manifest.web_accessible_resources;

manifest.browser_specific_settings = {
  gecko: {
    id: "classic-amazon-stars@github.com",
  },
};

console.info(JSON.stringify(manifest, null, 2));
