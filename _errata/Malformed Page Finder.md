---
nav_exclude: true
---
Favicon linked here to make removal of orphan images easier. [favicon](assets/favicon.svg)

## Malformed Documents
These documents are either missing a "Title" property or have a parent-folder mismatch. Please correct for proper publication.
```dataviewjs
// Get all pages excluding templates and root
const pages = dv.pages('""')
  .where(p => p.file.folder !== "" && !p.file.folder.includes("templates"));

// Helper function to convert folder name to proper title case
function toTitleCase(str) {
  // Words that should stay lowercase (except when they're the first word)
  const smallWords = ['and', 'or', 'but', 'nor', 'for', 'yet', 'so', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'to', 'up', 'with'];
  
  return str.replace(/-/g, ' ')
           .split(' ')
           .map((word, index) => {
             const lowerWord = word.toLowerCase();
             // Always capitalize the first word, or if it's not a small word
             if (index === 0 || !smallWords.includes(lowerWord)) {
               return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
             }
             return lowerWord;
           })
           .join(' ');
}

// Find malformed documents
const malformed = pages.filter(p => {
  const hasNoTitle = !p.title;
  const expectedParent = toTitleCase(p.file.folder);
  const parentMismatch = p.file.name !== "index" && p.parent !== expectedParent;
  
  return hasNoTitle || parentMismatch;
});

// Display results
dv.table(
  ["File", "Title Property", "Parent Property", "Actual Folder", "Expected Parent", "Issue"],
  malformed.map(p => [
    p.file.link,
    p.title || "",
    p.parent || "",
    p.file.folder,
    toTitleCase(p.file.folder),
    !p.title ? "❌ Missing title" : 
    (p.file.name !== "index" && p.parent !== toTitleCase(p.file.folder)) ? "❌ Parent mismatch" : "✅ OK"
  ])
);
```
