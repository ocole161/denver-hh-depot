class UserSpecialFavoritesController < ApplicationController
    wrap_parameters format: []
    before_action :authorized_user, only: [:create, :destroy]

    def create
        favorite = UserSpecialFavorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def destroy
        favorite = UserSpecialFavorite.find(params[:id])
        favorite.destroy
        head :no_content
    end

    private

    def favorite_params
        params.permit(:special_id, :user_id)
    end
end
