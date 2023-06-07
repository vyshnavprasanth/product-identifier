import React from "react";
import "./DisplayProducts.css";

import Signin from "../../Pages/LogIn";
import Signup from "../../Pages/Signup";
import { useContext, useState } from "react";
import { signupContext } from "../../store/SignupContext";

function DisplayProducts() {
  const { signupPopup, updateSignupPopup } = useContext(signupContext);
  const handleSignupPopup = () => {
    updateSignupPopup(!signupPopup);
  };
  
  const handlePopupClick = (event) => {
    event.stopPropagation(); // Prevent event propagation when clicking on the popup component
  };

  return (
    <div className="display-products">
      <div className="display-products__left-column">
        <div className="display-products__left-column-row1">
          <h2>Feedback</h2>
          <p className="filter">Apply filter</p>
        </div>
        <div className="display-products__left-column-row2">
          <div className="filter-conditions">
            <button className="filter-condition">All</button>
            <button className="filter-condition">Fintecch</button>
            <button className="filter-condition">Edtech</button>
            <button className="filter-condition">B2B</button>
            <button className="filter-condition">Saas</button>
            <button className="filter-condition">Agritech</button>
            <button className="filter-condition">Medtecch</button>
          </div>
        </div>
      </div>
      <div className="display-products__right-column">
        <div className="display-products__topbar">
          <p className="display-products__product-suggestion"> Suggestions</p>
          <p className="display-products__sort-products">
            sortby <span style={{ color: "black" }}>Upvotes</span>
          </p>
          <button
            onClick={handleSignupPopup}
            className="display-products__add-product"
          >
            {" "}
            + Add product
            {signupPopup && (
              <div className="overlay" onClick={handlePopupClick}>
                <Signup main={false}/>
              </div>
            )}
          </button>
        </div>
        <div className="display-products__card-layout">
          <div className="display-products__card">
            <div className="display-products__card-image">
              <img
                src={
                  process.env.PUBLIC_URL + "assets/img/products/product_1.png"
                }
                alt="banner"
              />
            </div>
            <div className="display-products__card-informations">
              <p className="display-products__card-name">Crud Club</p>
              <p className="display-products__card-description">
                Product description
              </p>
              <div className="category-and-comment-container">
                <button className="display-products__card-categories">
                  Category
                </button>
                <button className="display-products__card-categories">
                  Category
                </button>
                <div className="display-products__card-comment-icon">
                  <img
                    src={process.env.PUBLIC_URL + "assets/img/comment.png"}
                    alt="banner"
                  />
                </div>
                <p className="display-products__card-comment-text">Comment</p>
              </div>
            </div>
            <div className="display-products__card-upvotes-and-comments">
              <div className="upvotes-counter">
                <div className="upvotes-counter__icon">^</div>
                <div className="upvotes-counter__int">22</div>
              </div>
              <div className="comments-counter">
                <div className="comments-counter__int">
                  <p>10</p>
                </div>
                <div className="comments-counter__icon">
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/img/comments-counter.png"
                    }
                    alt="error"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="display-products__card">
            <div className="display-products__card-image">
              <img
                src={
                  process.env.PUBLIC_URL + "assets/img/products/product_1.png"
                }
                alt="banner"
              />
            </div>
            <div className="display-products__card-informations">
              <p className="display-products__card-name">Crud Club</p>
              <p className="display-products__card-description">
                Product description
              </p>
              <div className="category-and-comment-container">
                <button className="display-products__card-categories">
                  Category
                </button>
                <button className="display-products__card-categories">
                  Category
                </button>
                <div className="display-products__card-comment-icon">
                  <img
                    src={process.env.PUBLIC_URL + "assets/img/comment.png"}
                    alt="banner"
                  />
                </div>
                <p className="display-products__card-comment-text">Comment</p>
              </div>
            </div>
            <div className="display-products__card-upvotes-and-comments">
              <div className="upvotes-counter">
                <div className="upvotes-counter__icon">^</div>
                <div className="upvotes-counter__int">22</div>
              </div>
              <div className="comments-counter">
                <div className="comments-counter__int">
                  <p>10</p>
                </div>
                <div className="comments-counter__icon">
                  <img
                    src={
                      process.env.PUBLIC_URL + "assets/img/comments-counter.png"
                    }
                    alt="error"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProducts;
