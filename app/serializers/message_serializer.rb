class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :author_id, :channel_id, :created_at
end
