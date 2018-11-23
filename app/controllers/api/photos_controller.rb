class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.includes(:commenters, :likers).all
    @users = User.includes(:followers, :followees, :photos, :profile_picture).all
    render :index
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
    render json:@photos
  end

  def update
    @photo = Photo.find_by(img_url: params[:photo][:img_url])
    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: photo.errors.full_messages, status: 422
    end
  end

  def photo_params
    params.require(:photo).permit(:img_url, :title, :description, :artist_id)
  end
end
