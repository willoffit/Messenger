class Api::MessagesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @message = Message.new(message_params)

    if @message.save
      ActionCable.server.broadcast "chat", {"message" => {@message.id => @message}}
      render "api/messages/show"
    else
      render @message.errors.full_messages, status: 422
    end
  end

  def index
    @messages = Message.all
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
