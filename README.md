# 基礎から学ぶVue.js勉強会資料

基礎から学ぶ Vue.js書籍用サポートページコード&動作メモを利用しています。  
https://cr-vue.mio3io.com/guide/  

[s10_83/index.html](s10_83/index.html)  
に関しては、  
https://cr-vue.mio3io.com/guide/chapter2.html#%E5%A4%96%E9%83%A8%E3%81%8B%E3%82%89%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B  
のTIPに記載されている通り、ブラウザから直接開けないので、  
[s10_83/SimpleHTTPServer](s10_83/SimpleHTTPServer)  
を利用して参照して下さい。  

## s10_83/index.html参照方法

1. ターミナルでs10_83に移動

2. 以下コマンドを実行
```
python -m SimpleHTTPServer 8000
```
参考サイト
https://docs.python.org/2/library/simplehttpserver.html

3. ブラウザで
http://localhost:8000/index.html
にアクセス

以上。
