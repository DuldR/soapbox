# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.create!(username: "TestMan1", email:"test-email@test.com", password: 123456)
User.create!(username: "TestMa2", email:"test-email2@test.com", password: 123456)
User.create!(username: "TestMan3", email:"test-email3@test.com", password: 123456)
User.create!(username: "TestMan4", email:"test-email4@test.com", password: 123456)

# Stories
Story.create!(title: "TestTitle1", body: "Hello, I'm a test story for you!", user_id: 1)
Story.create!(title: "TestTitle2", body: "Test Story 2 ", user_id: 2)
Story.create!(title: "TestTitle3", body: "test Story 3", user_id: 3)
Story.create!(title: "TestTitle4", body: "Once again I am writing", user_id: 4)
Story.create!(title: "TestTitle5", body: "Let's all go to the rapture", user_id: 1)

# Comments

Comment.create!(user_id: 1, story_id: 1, body: "I liked it!")
Comment.create!(user_id: 2, story_id: 1, body: "It was meh")
Comment.create!(user_id: 3, story_id: 2, body: "Go off king")
Comment.create!(user_id: 4, story_id: 2, body: "Now THIS is pod racing")

# Follows

Follow.create!(followable_id: 1, followable_type: "Story", follower_id: 1, follower_type: "User")
Follow.create!(followable_id: 2, followable_type: "Story", follower_id: 1, follower_type: "User")
Follow.create!(followable_id: 3, followable_type: "Story", follower_id: 1, follower_type: "User")
Follow.create!(followable_id: 1, followable_type: "Story", follower_id: 2, follower_type: "User")

