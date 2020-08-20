class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      render json: ["Message entered incorrectly."]
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
