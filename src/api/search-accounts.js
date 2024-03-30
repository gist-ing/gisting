// @ts-check

import { firehose, ColdskyAgent } from '../../coldsky/lib';
import { throttledAsyncCache } from '../../coldsky/lib/throttled-async-cache';
import { streamBuffer } from '../../coldsky/src/api/akpa';
import { BSKY_PUBLIC_URL } from '../../coldsky/lib/coldsky-agent';

/**
 * @param {string} searchText
 */
export async function searchAccounts(searchText) {
  const publicAgent = new ColdskyAgent({
    service: BSKY_PUBLIC_URL
  });

  const result = (await publicAgent.searchActorsTypeahead({
    q: searchText
  })).data?.actors;

  return result;
}
