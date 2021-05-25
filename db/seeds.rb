# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: "TestMan1", email:"test-email@test.com", password: 123456)
User.create!(username: "TestMa2", email:"test-email2@test.com", password: 123456)
User.create!(username: "TestMan3", email:"test-email3@test.com", password: 123456)
User.create!(username: "TestMan4", email:"test-email4@test.com", password: 123456)


Story.create!(body: "Hello, I'm a test story for you!", user_id: 1)
Story.create!(body: "Test Story 2 ", user_id: 2)
Story.create!(body: "test Story 3", user_id: 3)
Story.create!(body: "Once again I am writing", user_id: 4)
Story.create!(body: "Let's all go to the rapture", user_id: 1)