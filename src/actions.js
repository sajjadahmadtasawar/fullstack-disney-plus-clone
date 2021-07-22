export const recommendedAction = (recommended, dbRecommeded) => ({
  type: 'RECOMMENDED',
  recommended: dbRecommeded,
});

export const newDisneyAction = (newDisney, dbNewDisney) => ({
  type: 'NEWDISNEY',
  newDisney: dbNewDisney,
});

export const originalsAction = (originals, dbOriginals) => ({
  type: 'ORIGINALS',
  originals: dbOriginals,
});

export const trendingAction = (trending, dbTrending) => ({
  type: 'TRENDING',
  trending: dbTrending,
});
