FROM node:16-alpine3.14
# コンテナ内で作業するディレクトリを指定
WORKDIR /app
# package.jsonとyarn.lockを/usr/src/appにコピー
COPY package.json .
# パッケージをインストール
RUN npm install
# ファイルを全部作業用ディレクトリにコピー
COPY . .
# コンテナを起動する際に実行されるコマンド
ENTRYPOINT [ "npm", "start" ]