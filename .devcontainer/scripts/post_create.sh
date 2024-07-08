#!/usr/bin/env sh

wget https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -O ~/.git-completion.bash
echo ". ~/.git-completion.bash" >> ~/.bashrc

echo 'export PATH="$HOME/.bun/bin:$PATH"' >> ~/.bashrc

# bash auto completion
sudo apt update && sudo apt install bash-completion
