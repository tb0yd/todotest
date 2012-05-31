class ApplicationController < ActionController::Base
  protect_from_forgery

  def current_user
    @current_user ||= User.find_by_session_id(session['session_id']) || User.new(:session_id => session[:session_id])
  end
end
