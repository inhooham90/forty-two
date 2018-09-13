json.photos do
  @photos.each do |photo|
    # set! *dynamically* sets each key to be the photo's id
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
      # json.stuff => makes a key that is literally called 'stuff'
      # different from set!, which dynamically sets a key (if you dont know the value of the key at code definition time)
      # this is why all jBuilder methods have !s after them
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
