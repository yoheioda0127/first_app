class PostsController < ApplicationController

  def index
    @posts = Post.all.order(id: "DESC")
  end
  
  def create
    post = Post.create(content: params[:content], checked: false)
    render json:{post: post}
  end

  def checked
    post = Post.find(params[:id])
      # 設定したURLパラメーターから、既読したメモのidが渡されるように設定.
      # そのidを使用して該当するレコードを取得している。
    if post.checked
      post.update(checked: false)
    else
      post.update(checked: true)
    end
      # ここまでで更新完了
    item = Post.find(params[:id])
    render json:{post: item}
      # JSON形式でchecked.jsに返却してあげる
  end
end
