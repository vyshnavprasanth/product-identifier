import React from "react";
import "./DisplayProducts.css";
import Signup from "../../Pages/Signup";
import { useContext, useState } from "react";
import { signupContext } from "../../store/SignupContext";

function DisplayProducts() {
  const { signupPopup, updateSignupPopup } = useContext(signupContext);
  const [isCommentsVisible, updateIsCommentsVisible]=useState(false);
  
  const buttonVisibility = () => {
    updateIsCommentsVisible(!isCommentsVisible);
  };

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
                <Signup main={false} />
              </div>
            )}
          </button>
        </div>
        <h4 className="filter-conditions__mobile-view-title">Filters:</h4>
        <div className="filter-conditions__mobile-view">
          <button className="filter-condition">All</button>
          <button className="filter-condition">Fintecch</button>
          <button className="filter-condition">Edtech</button>
          <button className="filter-condition">B2B</button>
          <button className="filter-condition">Saas</button>
          <button className="filter-condition">Agritech</button>
          <button className="filter-condition">Medtecch</button>
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
              <p className="display-products__card__name">Crud Club</p>
              <p className="display-products__card__description">
                It is good for credit card payments, it is fast, secure
              </p>
              <div className="display-products__card__comment__category">
                <button className="display-products__card__categories">
                  Category
                </button>
                <button className="display-products__card__categories">
                  Category
                </button>
                <button onClick={buttonVisibility} class="display-products__card__comment-button">
                  <img
                    src={process.env.PUBLIC_URL + "assets/img/comment.png"}
                    alt="Button Image"
                    style={{ marginTop: "1.5vh" }}
                  />
                </button>
              </div>
            </div>
            <div className="display-products__card-informations-secondary">
              <div className="display-products__card-informations-upvotes">
                <p className="upvotes__counter-icon">^</p>
                <p className="upvotes__counter">22</p>
              </div>
              <div
                className="display-products__card-informations-comments"
                style={{ marginTop: "2.5vh", marginRight: "0.1vh" }}
              >
                <p className="comments__counter">10</p>
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/img/comments-counter.png"
                  }
                  alt="msg counter"
                  style={{ marginLeft: "5px" }}
                />
              </div>
            </div>

            {isCommentsVisible &&(
                <div
                className="display-products__card__comments"
                
              >
                <input
                  className="my-comment"
                  type="text"
                  placeholder="Add a comment"
                />
                <img
                  src={process.env.PUBLIC_URL + "assets/img/send-comment.png"}
                  alt="Button Image"
                  className="send-button"
                  style={{ marginTop: "1.5vh" }}
                />
                <div className="all-comments">
                  <div className="bullet-points"></div>
                  <p className="comments-line">
                    Lithium is found when thing are chanded and lot of other
                    things happened/.
                  </p>
                </div>
              </div>
            )}
          
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
              <p className="display-products__card__name">Crud Club</p>
              <p className="display-products__card__description">
                It is good for credit card payments, it is fast, secure
              </p>
              <div className="display-products__card__comment__category">
                <button className="display-products__card__categories">
                  Category
                </button>
                <button className="display-products__card__categories">
                  Category
                </button>
                <button onClick={buttonVisibility} class="display-products__card__comment-button">
                  <img
                    src={process.env.PUBLIC_URL + "assets/img/comment.png"}
                    alt="Button Image"
                    style={{ marginTop: "1.5vh" }}
                  />
                </button>
              </div>
            </div>
            <div className="display-products__card-informations-secondary">
              <div className="display-products__card-informations-upvotes">
                <p className="upvotes__counter-icon">^</p>
                <p className="upvotes__counter">22</p>
              </div>
              <div
                className="display-products__card-informations-comments"
                style={{ marginTop: "2.5vh", marginRight: "0.1vh" }}
              >
                <p className="comments__counter">10</p>
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/img/comments-counter.png"
                  }
                  alt="msg counter"
                  style={{ marginLeft: "5px" }}
                />
              </div>
            </div>

            {isCommentsVisible &&(
                <div
                className="display-products__card__comments"
                
              >
                <input
                  className="my-comment"
                  type="text"
                  placeholder="Add a comment"
                />
                <img
                  src={process.env.PUBLIC_URL + "assets/img/send-comment.png"}
                  alt="Button Image"
                  className="send-button"
                  style={{ marginTop: "1.5vh" }}
                />
                <div className="all-comments">
                  <div className="bullet-points"></div>
                  <p className="comments-line">
                    Lithium is found when thing are chanded and lot of other
                    things happened/.
                  </p>
                </div>
              </div>
            )}
          
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
              <p className="display-products__card__name">Crud Club</p>
              <p className="display-products__card__description">
                It is good for credit card payments, it is fast, secure
              </p>
              <div className="display-products__card__comment__category">
                <button className="display-products__card__categories">
                  Category
                </button>
                <button className="display-products__card__categories">
                  Category
                </button>
                <button onClick={buttonVisibility} class="display-products__card__comment-button">
                  <img
                    src={process.env.PUBLIC_URL + "assets/img/comment.png"}
                    alt="Button Image"
                    style={{ marginTop: "1.5vh" }}
                  />
                </button>
              </div>
            </div>
            <div className="display-products__card-informations-secondary">
              <div className="display-products__card-informations-upvotes">
                <p className="upvotes__counter-icon">^</p>
                <p className="upvotes__counter">22</p>
              </div>
              <div
                className="display-products__card-informations-comments"
                style={{ marginTop: "2.5vh", marginRight: "0.1vh" }}
              >
                <p className="comments__counter">10</p>
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/img/comments-counter.png"
                  }
                  alt="msg counter"
                  style={{ marginLeft: "5px" }}
                />
              </div>
            </div>

            {isCommentsVisible &&(
                <div
                className="display-products__card__comments"
                
              >
                <input
                  className="my-comment"
                  type="text"
                  placeholder="Add a comment"
                />
                <img
                  src={process.env.PUBLIC_URL + "assets/img/send-comment.png"}
                  alt="Button Image"
                  className="send-button"
                  style={{ marginTop: "1.5vh" }}
                />
                <div className="all-comments">
                  <div className="bullet-points"></div>
                  <p className="comments-line">
                    Lithium is found when thing are chanded and lot of other
                    things happened/.
                  </p>
                </div>
              </div>
            )}
          
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
              <p className="display-products__card__name">Crud Club</p>
              <p className="display-products__card__description">
                It is good for credit card payments, it is fast, secure
              </p>
              <div className="display-products__card__comment__category">
                <button className="display-products__card__categories">
                  Category
                </button>
                <button className="display-products__card__categories">
                  Category
                </button>
                <button class="display-products__card__comment-button">
                  <img
                    src={process.env.PUBLIC_URL + "assets/img/comment.png"}
                    alt="Button Image"
                    style={{ marginTop: "1.5vh" }}
                  />
                </button>
              </div>
            </div>
            <div className="display-products__card-informations-secondary">
              <div className="display-products__card-informations-upvotes">
                <p className="upvotes__counter-icon">^</p>
                <p className="upvotes__counter">22</p>
              </div>
              <div
                className="display-products__card-informations-comments"
                style={{ marginTop: "2.5vh", marginRight: "0.1vh" }}
              >
                <p className="comments__counter">10</p>
                <img
                  src={
                    process.env.PUBLIC_URL + "assets/img/comments-counter.png"
                  }
                  alt="msg counter"
                  style={{ marginLeft: "5px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProducts;
