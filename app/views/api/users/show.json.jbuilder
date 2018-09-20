json.user do
  json.partial! 'api/users/user', user: @user
end

if @photos
  json.photos do
    @photos.each do |photo|
      json.set! photo.id do
        json.partial! '/api/photos/photo', photo: photo
      end
    end
  end
end
