import 'bootstrap/dist/css/bootstrap.css';
import { addReviewUrls, localizeHtml } from 'browser-extension-utils';
import ids from '../ids.json';

document.addEventListener('DOMContentLoaded', () => {
  addReviewUrls(chrome.runtime.id, ids);
  localizeHtml();
});
