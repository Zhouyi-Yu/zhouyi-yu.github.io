#!/bin/bash

echo "🚀 Deploying to GitHub Pages..."

# 1. Build the project
echo "📦 Building project..."
npm run build

# 2. Check if build succeeded
if [ ! -d "out" ]; then
    echo "❌ Build failed. 'out' directory not found."
    exit 1
fi

# 3. Add the 'out' folder to git (forcefully, since it's usually ignored)
git add -f out
git commit -m "Deploy build artifacts: $(date)"

# 4. Push the 'out' folder to the 'main' branch on GitHub
# This replaces the LIVE website content with your new build
echo "☁️  Uploading to GitHub..."
git push origin `git subtree split --prefix out source`:main --force

# 5. Reset local state so 'out' isn't permanently in source control
git reset HEAD~1

echo "✅ Deployed Successfully!"
echo "👉 Check your site at: https://zhouyi-yu.github.io"
