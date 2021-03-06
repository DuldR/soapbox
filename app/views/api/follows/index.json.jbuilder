
if @user.followed_users.empty?
    json.userFollows({})
else
    json.userFollows do
        @user.followed_users.each do |user|
            json.set! user.id do
                json.extract! user, :username, :id
            end
        end
    end
end

if @user.followed_stories.empty?
    json.storyFollows({})
else
    json.storyFollows do
        @user.followed_stories.each do |story|
            json.set! story.id do
                json.extract! story, :title, :id
            end
        end
    end
end


# json.userFollows do
#     @user.followed_users.each do |user|
#         json.set! user.id do
#             json.extract! user, :username, :id
#         end
#     end
# end

# json.storyFollows do

#     @user.followed_stories.each do |story|
#         json.set! story.id do
#             json.extract! story, :title, :id
#         end
#     end
# end
