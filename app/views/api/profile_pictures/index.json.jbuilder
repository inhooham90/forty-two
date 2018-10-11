json.profile_pictures do
  @profile_pictures.each do |profile_picture|
    json.set! profile_picture.id do
      json.partial! 'api/profile_pictures/profile_picture', profile_picture: profile_picture
    end
  end
end
