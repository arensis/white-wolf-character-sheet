#!/bin/sh

if [[ $(git status -s) ]]
then
    echo "The working directory is dirty. Please commit any pending changes."
    exit 1;
fi

echo "Deleting old publication"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public/

echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages

echo "Removing existing files"
rm -rf public/*

echo "Installing all the dependencies"
npm install

echo "Generating site"
npm run build

echo "Commiting changes in gh-pages branch"
cd public && git add --all
msg="Publishing to gh-pages `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

echo "Commiting changes in gh-pages branch"
git push origin gh-pages

echo "Back to the project folder"
cd ..
