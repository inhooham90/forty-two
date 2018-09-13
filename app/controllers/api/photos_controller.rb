class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @users = User.all
    render json: photo
  end

  def create
    photo = Photo.new(photo_params)

    if photo.save
      render json: photo
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy if @photo
    render :show
  end

  def photo_params
    params.require(:photo).permit(:img_url, :title, :description, :artist_id)
  end
end
