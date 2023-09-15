# Return Amazon 5 Stars & Number of Reviews ( Browser Extension )

## Install

- [Chrome](https://chrome.google.com/webstore/detail/nahhbhpfahionfaobhlmoldlicdaoddg)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/mpjnchaiiljgjanbceaoampplmeeibdh)
- [Firefox](https://addons.mozilla.org/firefox/addon/classic-amazon-stars/)
- [Greasy Fork](https://greasyfork.org/scripts/474149-return-amazon-5-stars-number-of-reviews)

<a href="https://chrome.google.com/webstore/detail/nahhbhpfahionfaobhlmoldlicdaoddg" target="_blank"><img src="https://user-images.githubusercontent.com/315510/262693816-9871ef8b-d7e7-4f0c-856d-7baa510f1715.png" width="500px" /></a>

Bring back the 5 stars and number of reviews on Amazon

## How to Build

```bash
cat << EOF > .npmrc
//npm.pkg.github.com/:_authToken=<Your Github access token that includes read:packages permission>
@cside:registry=https://npm.pkg.github.com/
EOF

pnpm install
pnpm run build
```

## How to Send Pull Requests

⚠️ If you have a feature request, please discuss it with me on [/issues](https://github.com/Cside/return-amazon-5-stars-and-number-of-reviews/issues) before writing your code.

Create a branch from `develop` and make a pull request to `develop` .

## Release Notes

[/releases](https://github.com/Cside/return-amazon-5-stars-and-number-of-reviews/releases)

## License

[The MIT License](/LICENSE).
