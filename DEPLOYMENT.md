# Deployment Guide for Ghan Property Group

## 🚀 Quick Deployment Options

### Option 1: Using GitHub CLI (Recommended)

1. **Install GitHub CLI** (if not already installed):
```bash
# macOS
brew install gh

# Windows (using winget)
winget install GitHub.cli

# Linux
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh
```

2. **Authenticate with GitHub**:
```bash
gh auth login
```

3. **Deploy using the script**:
```bash
./deploy.sh
```

### Option 2: Using Personal Access Token

1. **Create a Personal Access Token**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Select scopes: `repo`, `workflow`
   - Copy the token

2. **Configure Git with your token**:
```bash
git config --global credential.helper store
```

3. **Push with authentication**:
```bash
git push https://YOUR_USERNAME:YOUR_TOKEN@github.com/HelloYoza/ghpg.git main
```

### Option 3: Using SSH Key

1. **Generate SSH key** (if you don't have one):
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. **Add SSH key to GitHub**:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste your public key

3. **Change remote URL to SSH**:
```bash
git remote set-url origin git@github.com:HelloYoza/ghpg.git
```

4. **Deploy**:
```bash
./deploy.sh
```

## 📋 Manual Deployment Steps

If the automated script doesn't work, follow these manual steps:

1. **Add all files**:
```bash
git add .
```

2. **Commit changes**:
```bash
git commit -m "Deploy: Ghan Property Group website

- Added video background hero section
- Implemented typing animation
- Added responsive navigation
- Created service pages
- Added portfolio and contact pages"
```

3. **Push to GitHub**:
```bash
git push origin main
```

## 🔧 Troubleshooting

### Authentication Issues

**Error**: `RPC failed; HTTP 400`
**Solution**: Set up authentication using one of the methods above.

**Error**: `Permission denied (publickey)`
**Solution**: Use SSH key authentication or Personal Access Token.

### Large File Issues

**Error**: `File too large`
**Solution**: The video file might be too large. Consider:
- Compressing the video
- Using Git LFS (Large File Storage)
- Hosting videos on a CDN

### Branch Issues

**Error**: `refusing to allow a Personal Access Token to create or update workflow`
**Solution**: Make sure your token has the `workflow` scope enabled.

## 🌐 Setting Up GitHub Pages (Optional)

To deploy your site to GitHub Pages:

1. **Go to repository settings**:
   - Navigate to your repo on GitHub
   - Click "Settings" tab
   - Scroll to "Pages" section

2. **Configure source**:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"

3. **Enable GitHub Actions** (if using Next.js):
   - Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## 📞 Support

If you encounter any issues:

1. Check the [GitHub documentation](https://docs.github.com/)
2. Verify your authentication setup
3. Ensure your repository has the correct permissions
4. Check the file sizes (especially videos)

## 🎯 Next Steps After Deployment

1. **Set up custom domain** (optional)
2. **Configure GitHub Pages** for automatic deployment
3. **Set up CI/CD pipeline** for automated builds
4. **Add analytics** (Google Analytics, etc.)
5. **Optimize for SEO**

---

**Repository**: https://github.com/HelloYoza/ghpg.git
**Website**: Will be available at `https://helloyoza.github.io/ghpg` (if GitHub Pages is enabled)
