# todo-bun-hono-htmx-pico

[![CI](https://github.com/tomo1227/todo-bun-hono-htmx-pico/actions/workflows/ci.yml/badge.svg)](https://github.com/tomo1227/todo-bun-hono-htmx-pico/actions/workflows/ci.yml) [![CodeQL](https://github.com/tomo1227/todo-bun-hono-htmx-pico/actions/workflows/code_ql.yml/badge.svg)](https://github.com/tomo1227/todo-bun-hono-htmx-pico/actions/workflows/code_ql.yml)

Hono & Bun & htmx & Pico CSS で Todo Appアプリを作成してみました。

## Usage

```sh
bun run dev
```

http://localhost:3000/ (もしくは、自分で指定したポート) にアクセスする。

### 環境変数の変更

* [.env](.env)で環境変数を自分の好みで設定をしましょう。(portの割り当てに関しては[以下の説明](#portの割り当て)を参照)

### PORTの割り当て

[.env](.env)でホストIPを変更すれば、他プロジェクトとポートが被っても使用できる。

> [!IMPORTANT]
> Macの場合は、.envのHOST_IPに127.0.0.1以外のホストIP(ループバックアドレス)を指定するとき
> 以下のコマンドをターミナルで事前に叩いておく必要がある。(127.0.0.2の箇所にHOST IPを指定)
>
> ```txt
> sudo ifconfig lo0 alias 127.0.0.2
> ```
