class Api::ProfilePicturesController < ApplicationController
  def create
    @picture = ProfilePicture.new(picture_params)
    @user = User.find(params[:user_id])
    if @picture.save
      render json: @picture
    else
      render json: @picture.errors.full_messages, status: 422
    end
  end

  def update
    @picture = ProfilePicture.find_by(id: params[:id])
    if @picture.update_attributes(picture_params)
      render 'api/users/show'
    else
      render json: picture.errors.full_messages, status: 422
    end
  end

  def picture_params
    params.require(:photo).permit(:photo_url, :user_id)
  end

end
