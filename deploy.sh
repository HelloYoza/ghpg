#!/bin/bash

# Ghan Property Group - Deployment Script
# This script deploys the project to GitHub

echo "🚀 Starting deployment to GitHub..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ Not in a git repository. Initializing..."
    git init
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "ℹ️  No changes to commit."
else
    # Commit changes
    echo "💾 Committing changes..."
    git commit -m "Deploy: Update Ghan Property Group website

- Updated hero section with video background
- Added typing animation for company name
- Implemented responsive design
- Added navigation and footer sections
- Optimized for production deployment"

    # Push to GitHub
    echo "🌐 Pushing to GitHub..."
    git push origin main

    if [ $? -eq 0 ]; then
        echo "✅ Successfully deployed to GitHub!"
        echo "🔗 Repository: https://github.com/HelloYoza/ghpg.git"
    else
        echo "❌ Failed to push to GitHub. Please check your credentials."
        echo "💡 You may need to set up authentication:"
        echo "   - Personal Access Token"
        echo "   - SSH Key"
        echo "   - GitHub CLI (gh auth login)"
    fi
fi

echo "🎉 Deployment process completed!"
