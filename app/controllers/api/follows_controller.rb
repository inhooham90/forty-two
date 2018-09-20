class Api::FollowsController < ApplicationController

  def create
    follow = Follow.new(follow_params)

    if follow.save
      render json: follow
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @follows = Follow.all
    @follow = Follow.find(params[:id])
    @follow.destroy if @follow
    render json:@follows
  end

  private

  def follow_params
    params.require(:follow).permit(:followee_id, :follower_id)
  end
end
