class ApplicationController < ActionController::API
    include ActionController::Cookies
  
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    private
  
    def current_user
      user = User.find_by(id:session[:user_id])
      user
    end
  
    def authorized_user
      render json: { error: 'Please log in to use this feature' }, status: :unauthorized unless current_user
    end
    
    def render_not_found_response(e)
      render json: { error: {e.model => "Not Found"} }, status: :not_found
    end
  
    def render_unprocessable_entity_response(e)
      render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
    end
  end
