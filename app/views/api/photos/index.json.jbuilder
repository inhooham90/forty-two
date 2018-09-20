json.photos do
  @photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username, :name, :profile_url, :photos
      json.followers user.followers.pluck(:id)
      json.following user.followed_bys.pluck(:id)
    end
  end
end
