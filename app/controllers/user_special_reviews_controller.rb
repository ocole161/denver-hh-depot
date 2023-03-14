class UserSpecialReviewsController < ApplicationController
    before_action :authorized_user, only: [:create]

    def create
        review = UserSpecialReview.create!(favorite_params)
        render json: favorite, status: :created
    end

    def destroy
        favorite = UserSpecialReview.find(params[:id])
        favorite.destroy
        head :no_content
    end

    private

    def favorite_params
        params.permit(:special_id, :user_id)
    end
end
