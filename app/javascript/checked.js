// 関数定義ここから↓
function check(){
  const posts = document.querySelectorAll(".post");
  posts.forEach(function(post){
    post.addEventListener("click",() => {
      const postID = post.getAttribute("data-id");
      const XHR = new XMLHttpRequest();
      XHR.open("GET", '/posts/${postId}', true)
      XHR.responseType = "json"
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null
        }
        const item = XHR.response.post;
        if (item.checked === true) {
          post.setAttribute("data-check", "true");
        } else if (item.checked === false) {
          post.removeAttribute("data-check");
        }
      };
      // ここに何らかのクリック時の記述をしておく
    });
  });
}
  // 関数定義ここまで↑

  // querySelectorAllメソッドで、postをクラス名にもつ要素を取得できる。
  // postというクラス名を持つ要素はメモの数だけ存在します。

  // 関数実行↓
window.addEventListener("load", check);