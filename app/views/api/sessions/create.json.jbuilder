json.userInfo @user, :username, :id


# json.userFollows @user.followed_users, :username, :id
# json.storyFollows @user.followed_stories, :title, :id

# json.userFollows @user.followed_users.each do |user|
#     json.set! user.id do
#         json.extract! user, :username, :id
#     end
# end

json.storyFollows do
    @user.followed_stories.each do |story|
        json.set! story.id do
            json.extract! story, :title, :id
        end
    end
end