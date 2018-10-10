json.extract! photo, :id, :title, :description, :artist_id, :img_url
json.time_posted distance_of_time_in_words(photo.created_at, Time.now)
json.likers photo.likers.pluck(:id)
json.commenters photo.commenters.pluck(:id)
