---
layout: "@/layouts/BlogPostLayout.astro"
title: NW機器のconfig buckupとgitにてバージョン管理
tags: [github, python, cisco]
description: NW機器のconfig管理する方法について書いてみた
createdAt: 2024-03-07
---

NW機器のconfigをバージョン管理、定期的バックアップをしたことがあると思いますが、その際にツールとして一般的にansible等を利用することが多いですがOSSですが現在も活発に開発されているPythonモジュールを利用したいと思います。
なお、今回はCisco(IOS), Juniper(JUNOS), Airsta, F5(BIG-IP), Fortigateをにて実装したいと思います。

## 実装流れ
1. Pythonインストール
2. pipインストール
3. netmikoインストール
4. Python Script作成
5. GitLabインストール
6. shell Script作成
7. テスト実行

## 環境
- os
    - rockylinux9
-
- react
- aws

## インフラ
本サイトはgithubにてバージョン管理を行い、AWS　Amplifyにてデプロイしております。

## 参考

[hbsnow.dev](https://github.com/hbsnow/hbsnow.dev) 