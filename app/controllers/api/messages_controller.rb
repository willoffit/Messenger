class Api::MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @message = Message.new(message_params)

    if @message.save
      data = { 
        id: @message.id,
        body: @message.body,
        author_id: @message.author_id,
        channel_id: @message.channel_id,
        created_at: @message.created_at
      }
      ChatChannel.broadcast_to("chat_channel", data)
      render "api/messages/show"
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def index
    channel = Channel.find_by(id: params[:channel_id])
    @messages = channel.messages
    render :index
  end

  def show
    @message = Message.find_by(id: params[:id])
    render :show
  end

  private

  def message_params
    params.require(:message).permit(:body, :channel_id, :author_id)
  end
end
