class CreateBeers < ActiveRecord::Migration[6.0]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :image
      t.text :description
      t.integer :likes
      t.integer :unlikes
      t.string :origin
      t.timestamps
    end
  end
end
