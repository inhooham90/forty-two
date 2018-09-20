class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    @photos = @user.photos
    @followers = @user.followers
    @followees = @user.followees
    render `api/users/show`
  end

  def update
    @user = User.find(params[:id])
    @photos = @user.photos
    @followers = @user.followers
    @followees = @user.followees

    if @user.update_attribute(user_params)
      render `api/users/show`
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def update
    @photo = Photo.find_by(img_url: params[:photo][:img_url])
    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: photo.errors.full_messages, status: 422
    end
  end
  private

  def user_params
    params.require(:user).permit(:username, :password, :name, :profile_url, :email)
  end
end
