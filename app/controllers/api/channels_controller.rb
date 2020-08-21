class Api::ChannelsController < ApplicationController
  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      serialized_data = ActiveModelSerializers::Adapter::Json.new(
        ChannelSerializer.new(@channel)
      ).serializable_hash
      ActionCable.server.broadcast 'channels_channel', serialized_data
      head :ok
    end
  end

  def index
    @channels = Channel.all
    render json: @channels
  end

  def show
    @channel = Channel.find_by(id: params[:id])
    render json: @channel
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :channel_type)
  end
end
