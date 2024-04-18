class BooksController < ApplicationController
  def index
    @books = Book.all
  end

 def new
  @book = Book.new
  @books = Book.all
 end

  def create
      @book = Book.create(book_params)
      respond_to do |format|
        if @book.save
          format.js { render partial: "shared/onebook", locals: { book: @book }, status: :created }
        else
          format.js { render json: @book.errors, status: :unprocessable_entity }
        end
      end
  end

  private
  def book_params
    params.require(:book).permit(:title, :description)
  end
end
