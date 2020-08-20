class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render :show
    else
      render json: ["Channel entered incorrectly."]
    end
  end

  def index
    @channels = Channel.all
    render :index
  end

  def show
    @channel = Channel.find_by(id: params[:id])
    render :show
  end

  private

  def channel_params
    params.require(:channel).permit(:name)
  end
end
