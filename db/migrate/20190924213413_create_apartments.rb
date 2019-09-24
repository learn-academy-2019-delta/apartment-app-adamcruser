class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.integer :user_id
      t.string :city
      t.string :street

      t.timestamps
    end
  end
end
