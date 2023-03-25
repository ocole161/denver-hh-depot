class SpecialsController < ApplicationController
    wrap_parameters format: []
    before_action :authorized_user, only: [:destroy]

    def index
        render json: Special.all.order(location_name: :asc)
    end

    def show
        render json: Special.find(params[:id])
    end

    def create
        new_special = Special.create!(special_params)
        if new_special
            PostMailer.with(special: new_special).post_created.deliver_now
        end
        render json: new_special, status: :created
    end

    def update
        special = Special.find(params[:id])
        special.update!(special_params)
        render json: special, status: :ok
    end

    def destroy
        special = Special.find(params[:id])
        special.destroy
        head :no_content
    end

    def average_rating
        render json: Special.find(params[:id]).user_special_reviews.average(:rating).to_i
    end

    private

    def special_params
        params.permit(
            :id, 
            :location_name, 
            :location_image, 
            :location_neighborhood, 
            :location_address, 
            :location_url, 
            :start_time, 
            :end_time, 
            :monday, 
            :tuesday, 
            :wednesday, 
            :thursday, 
            :friday, 
            :saturday, 
            :sunday, 
            :beer, 
            :wine, 
            :cocktails, 
            :food, 
            :hh_special_text, 
            :needs_create_review, 
            :needs_update_review, 
            :needs_delete_review, 
            :lat, 
            :lng, 
            :user_special_reviews)
    end
end
