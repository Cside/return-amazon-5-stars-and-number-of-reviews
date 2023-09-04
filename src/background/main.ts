import manifest from '../../manifest.json';
import { matchPatternsToHostSuffixes } from './utils';

if (manifest.content_scripts[0] === undefined)
  throw new Error('manifest.content_scripts is empty');

chrome.webNavigation.onHistoryStateUpdated.addListener(
  async (detail) => {
    try {
      await chrome.tabs.sendMessage(detail.tabId, { type: 'CHANGE_HISTORY' });
    } catch (error) {
      if (
        !(
          error instanceof Error &&
          // An error occurs if the message is sent before the content script
          // has completed loading. Ignore this error.
          error.message.includes('Could not establish connection')
        )
      )
        throw error;
    }
  },
  {
    url: matchPatternsToHostSuffixes(manifest.content_scripts[0].matches).map(
      (hostSuffix) => ({ hostSuffix }),
    ),
  },
);
