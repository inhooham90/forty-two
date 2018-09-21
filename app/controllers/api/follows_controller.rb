class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    @follow[:follower_id] = current_user.id
    if @follow.save
      render json: @follow
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by({follower_id: current_user.id, followee_id: params[:id]})
    @follow.destroy if @follow
    render json: @follow
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id)
  end
end
