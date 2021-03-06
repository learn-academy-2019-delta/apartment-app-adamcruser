class ApartmentsController < ApplicationController
    before_action :authenticate_user!, only: [:create, :destroy]


    def index
        apartments = Apartment.all
        render json: apartments
    end

    def show
        apartments = Apartment.all
        render json: apartments

    end

    def create
        apartment = current_user.apartments.create apartment_params
         p apartment.errors.full_messages
        render json: apartment, status: 201
    end

    def update
        apartment = current_user.apartments.update apartment_params
        p apartment
        render json: apartment, status: 200
    end


    def destroy
        apartment = current_user.apartments.find params[:id]
        if apartment.destroy
            render json: apartment
        else
            render json: {error: 'could not delete'}, status: 400
        end
    end

    private
    def apartment_params
        params.require(:apartment).permit(:street, :city)
    end
end
