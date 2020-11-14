---
title: 快適なターミナル環境を整備する
tags: [shell]
description: 快適なターミナル環境を整備する
createdAt: 2020-11-14
---

## shell

shell は Mac で現在ではデフォルトの zsh を使っています。

以前 fish を使っていたこともあるのですが、Web 上で公開されているスクリプトや設定がそのままでは動かないことが多く、メリットを上回るデメリットに感じたため今は使っていません。

## ターミナルエミュレータ

[Hyper](https://hyper.is/) を使っています。

[iTerm2](https://www.iterm2.com/) はクロスプラットフォームではないこと、[alacritty](https://github.com/alacritty/alacritty) は日本語入力の対応がなさそうなので採用を見送っています。

## Prezto

インストール方法についてはリンク先を参照してください。

- [Prezto](https://github.com/sorin-ionescu/prezto)

頑張れるのであれば [zplug](https://github.com/zplug/zplug) を使うことになるのですが、設定に強いこだわりがなく面倒なので Prezto を使っています。

Prezto の設定は `~/.zpreztorc` にあり、デフォルトだと [`syntax-highlighting`](https://github.com/sorin-ionescu/prezto/tree/master/modules/syntax-highlighting) が有効化されていないので、有効にしておくと便利です。

- [autosuggestions](https://github.com/sorin-ionescu/prezto/tree/master/modules/autosuggestions)
- [history-substring-search](https://github.com/sorin-ionescu/prezto/tree/master/modules/history-substring-search)

私は上記のモジュールも有効にしていて、最終的には以下のモジュールを読み込ませています。

```.zpreztorc
zstyle ':prezto:load' pmodule \
  'environment' \
  'terminal' \
  'editor' \
  'history' \
  'directory' \
  'spectrum' \
  'utility' \
  'completion' \
  'prompt' \
  'autosuggestions' \
  'history-substring-search' \
  'syntax-highlighting'
```

## prompt

- [pure](https://github.com/sindresorhus/pure)

以前は [powerline](https://github.com/powerline/powerline) を使っていたのですが、別途フォントのインストールが必要になります。環境によってはそれが許されないこともあるので、pure に乗り換えました。

こちらの設定も `~/.zpreztorc` を編集することで反映されます。

```diff
-zstyle ':prezto:module:prompt' theme 'sorin'
+zstyle ':prezto:module:prompt' theme 'pure'
```

## anyenv

- [anyenv](https://github.com/anyenv/anyenv)
- [anyenv-update](https://github.com/znz/anyenv-update)
- [anyenv-git](https://github.com/znz/anyenv-git)
- [nodenv-package-json-engine](https://github.com/nodenv/nodenv-package-json-engine)

[nodenv-package-json-engine](https://github.com/nodenv/nodenv-package-json-engine) を入れておくと、プロジェクトによって使用する Node.js のバージョンを変更してくれます。

```json
"engines": {
  "node": "^8.0.0"
}
```

package.json に上記のようにバージョンが記述するか、あるいは .node-version を置いてくことが条件になります。

## ghq

- [ghq](https://github.com/x-motemen/ghq)

## fzf

- [fzf](https://github.com/junegunn/fzf)

## 最終的な .zshrc

```zsh
export LANG=ja_JP.UTF-8

export VISUAL='code -w'
export EDITOR=$VISUAL

autoload -Uz is-at-least

# prezto
if [ -s "${ZDOTDIR:-$HOME}/.zprezto/init.zsh" ]; then
  source "${ZDOTDIR:-$HOME}/.zprezto/init.zsh"
fi

# anyenv
if [ -d $HOME/.anyenv ]; then
  export PATH="$HOME/.anyenv/bin:$PATH"
fi

# cdr
if is-at-least 4.3.11; then
  autoload -Uz chpwd_recent_dirs cdr add-zsh-hook
  add-zsh-hook chpwd chpwd_recent_dirs
  chpwd_functions+=chpwd_recent_dirs
  zstyle ':chpwd:*' recent-dirs-max 1000
  zstyle ':chpwd:*' recent-dirs-default true
  zstyle ':completion:*' recent-dirs-insert always

  # 既に存在しないディレクトリをcdrのリストから削除する
  # https://blog.n-z.jp/blog/2014-07-25-compact-chpwd-recent-dirs.html
  function _my-compact-chpwd-recent-dirs() {
    emulate -L zsh
    setopt extendedglob
    local -aU reply
    integer history_size
    autoload -Uz chpwd_recent_filehandler
    chpwd_recent_filehandler
    history_size=$#reply
    reply=(${^reply}(N))
    (( $history_size == $#reply )) || chpwd_recent_filehandler $reply
  }
  _my-compact-chpwd-recent-dirs
fi
```