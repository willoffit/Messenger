class Channel < ApplicationRecord
  validates :type, presence: true
  
  has_many :messages, dependent: :destroy
  has_many :users, through: :channel_participants
end
