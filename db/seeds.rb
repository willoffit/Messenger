# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Channel.delete_all
ChannelParticipant.delete_all
Message.delete_all

demo_user = User.create!(username: 'DemoUser', password: '123456', email: 'test@demo.com')
channel1 = Channel.create!(name: "channel1", channel_type: "direct_message")
channel_participant = ChannelParticipant.create!(user_id: demo_user.id, channel_id: channel1.id)
message1 = Message.create!(body: "test message", author_id: demo_user.id, channel_id: channel1.id)
p "Done!"