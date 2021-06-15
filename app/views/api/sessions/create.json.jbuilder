json.userInfo @user, :username, :id
json.userFollows @user.followed_users, :username, :id
json.storyFollows @user.followed_stories, :title, :id