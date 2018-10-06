class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like[:liker_id] = current_user.id
    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by({liker_id: current_user.id, photo_id: params[:id]})
    @like.destroy if @like
    render json: @like
  end

  private

  def like_params
    params.require(:like).permit(:photo_id)
  end
end
