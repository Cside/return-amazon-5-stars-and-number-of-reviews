import { addReviewUrls, localizeHtml } from '@cside/browser-extension-utils';
import 'bootstrap/dist/css/bootstrap.css';
import ids from '../ids.json';

document.addEventListener('DOMContentLoaded', () => {
  addReviewUrls(chrome.runtime.id, ids);
  localizeHtml();
});
