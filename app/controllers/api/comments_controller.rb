class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.new(comment_params)
    @comment[:author_id] = current_user.id
    if @comment.save
      render json: @comment
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def index
    @comments = Comment.all
    render :index
  end

  def update
    @comment = Comment.find_by({author_id: current_user.id, photo_id: params[:id]})
    if @comment.update_attribute(comment_params)
      render `api/comments/index`
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find_by({author_id: current_user.id, id: params[:id]})
    @comment.destroy if @comment
    render json: @comment
  end

  private

  def comment_params
    params.require(:comment).permit(:photo_id, :body)
  end
end
