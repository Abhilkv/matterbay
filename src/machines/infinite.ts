import { createMachine, assign, InvokeCreator, InvokeConfig } from 'xstate';

async function fetchData(page: number): Promise<any[]> {
  const response = await fetch(`https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`);
  const data = await response.json();
  return data;
}

interface InfiniteScrollContext {
  page: number;
  items: any[];
}

type InfiniteScrollEvent = { type: 'FETCH' } | { type: 'RETRY' };

export const infiniteScrollMachine = createMachine<InfiniteScrollContext, InfiniteScrollEvent>({
    id: 'infiniteScroll',
    initial: 'idle',
    context: {
      page: 1,
      items: [],
    },
    states: {
      idle: {
        on: {
          FETCH: 'loading',
        },
      },
      loading: {
        invoke: {
          src: 'fetchData',
          onDone: {
            target: 'success',
            actions: assign<InfiniteScrollContext, { type: 'invokeDone'; data: { nodes: any[] } }>({
              items: (context, event) => [...context.items, ...(event.data.nodes)],
              page: (context) => context.page + 1,
            }),
          },
          onError: 'failure',
        },
      },
      success: {
        on: {
          FETCH: 'loading',
        },
      },
      failure: {
        on: {
          RETRY: 'loading',
        },
      },
    },
  }, {
    services: {
      fetchData: (context) => fetchData(context.page),
    },
  });