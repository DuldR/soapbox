# json.set! @story.id do
#     json.extract! @story, :title, :body, :id
# end

json.payload @story, :title, :body, :id

json.comments @story.comments, :id, :body, :user_id, :created_at

# @story