class Api::CoverPicturesController < ApplicationController

  def create
    picture = CoverPicture.new(picture_params)
    if picture.save
      render json: picture
    else
      render json: picture.errors.full_messages, status: 422
    end
  end

  def update
    @picture = CoverPicture.find_by(id: params[:id])
    if @picture.update_attributes(picture_params)
      render :show
    else
      render json: picture.errors.full_messages, status: 422
    end
  end

  def picture_params
    params.require(:cover_picture).permit(:photo_url, :user_id)
  end

end
