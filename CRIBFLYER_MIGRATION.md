# Cribflyer Asset Migration

## Summary
All assets from the cribflyer hosting site have been migrated to local storage to prevent broken links when the external site is taken down.

## Assets Migrated

### Background Images
- **File**: `retina-wood.png`
- **Source**: `https://cribflyer-publicsite.s3.amazonaws.com/stock-images/background-tiles/retina-wood.png`
- **Destination**: `public/images/backgrounds/retina-wood.png`
- **Size**: ~100 KB
- **Usage**: Background tile pattern for Market Snapshot section

## Files Updated

### 1. `src/components/sections/market-snapshot.tsx`
- **Change**: Updated background image URL from external cribflyer CDN to local path
- **Before**: `url(https://cribflyer-publicsite.s3.amazonaws.com/stock-images/background-tiles/retina-wood.png)`
- **After**: `url(/images/backgrounds/retina-wood.png)`

### 2. `src/app/layout.tsx`
- **Change**: Removed preconnect hint for cribflyer S3 bucket
- **Removed**: `<link rel='preconnect' href='https://cribflyer-publicsite.s3.amazonaws.com' crossOrigin='anonymous' />`

## Directory Structure Created

```
public/
└── images/
    └── backgrounds/
        └── retina-wood.png
```

## Benefits

1. **No External Dependencies**: Site no longer depends on cribflyer hosting
2. **Faster Loading**: Local assets load faster than external CDN
3. **Better Performance**: No DNS lookup or connection setup for external domain
4. **Reliability**: Assets won't break if external site goes down
5. **SEO**: All assets are self-hosted, improving site independence

## Verification

All cribflyer references have been removed from:
- ✅ `src/components/sections/market-snapshot.tsx`
- ✅ `src/app/layout.tsx`
- ✅ `next.config.mjs` (no references found)

## Next Steps

If you discover any other cribflyer assets being used:
1. Download the asset to `public/images/` (or appropriate subdirectory)
2. Update the reference in the code to use the local path
3. Remove any preconnect/dns-prefetch hints for cribflyer
4. Commit and push changes

---

**Migration Date**: December 13, 2025  
**Status**: ✅ Complete

