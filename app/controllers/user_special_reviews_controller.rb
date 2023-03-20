class UserSpecialReviewsController < ApplicationController
    wrap_parameters format: []

    def index
        render json: UserSpecialReview.all
    end
    
    def create
        review = UserSpecialReview.create!(review_params)
        render json: favorite, status: :created
    end

    def update
        review = UserSpecialReview.find(params[:id])
        review.update!(review_params)
        render json: review, status: :ok
    end

    def destroy
        review = UserSpecialReview.find(params[:id])
        review.destroy
        head :no_content
    end

    private

    def review_params
        params.permit(:special_id, :user_id, :rating)
    end
end
