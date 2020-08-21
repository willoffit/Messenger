# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

demo_user = User.create!(username: 'DemoUser', password: '123456', email: 'test@demo.com')
channel1 = Channel.create!(name: "channel1", channel_type: "direct_message")
# channel_participant = Channel_participant.create!(user_id: 1, channel_id: 1)
message1 = Message.create(body: "test message", channel_id: 1, user_id: 1)
p "Done!"