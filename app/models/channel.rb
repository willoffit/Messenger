class Channel < ApplicationRecord
  validates :channel_type, presence: true
  
  has_many :messages, dependent: :destroy
  has_many :users, through: :channel_participants
end
