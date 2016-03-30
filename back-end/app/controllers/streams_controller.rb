class StreamsController < ApplicationController

  FIRST_PLAY=1

  def create
    
    stream = Stream.find_by(track_id: params[:track_id], user_id: user_id)
    
    if stream
      stream.update(total_plays: total_count(user_id), weekly_plays: weekly_count(user_id))
      stream.save
    else
      Stream.create(track_id: params[:track_id],
        user_id: user_id,
        total_plays: FIRST_PLAY,
        weekly_plays: FIRST_PLAY)
    end
    render json:{}, status: :ok
  end

  def get_user_stream_info
    stream_info = Stream.where(user_id: params[:user_id]).map do |stream|
      {track_id: stream.track_id, total_plays: stream.total_plays}
    end
    render json: stream_info
  end

  private

  def total_count(user_id)
    stream = Stream.find_by(track_id: params[:track_id], user_id: user_id)
    stream.total_plays + 1
  end

  def weekly_count(user_id)
    stream = Stream.find_by(track_id: params[:track_id], user_id: user_id)
    stream.weekly_plays + 1
  end

  def user_id
  current_user ? current_user.id : 0  
  end 
end