import React from "react";
import "./DisplayProducts.css";
import Signup from "../../Pages/Signup";
import { useContext, useState } from "react";
import { signupContext } from "../../store/SignupContext";
import {addProductContext} from "../../store/ProductContext"
import AddProduct from "../ProductAdd/ProductAdd";

function DisplayProducts() {
  const { signupPopup, updateSignupPopup } = useContext(signupContext);
  const [isCommentsVisible, updateIsCommentsVisible] = useState(false);
  const {addProductPopup, updateAddProductPopup } = useContext(addProductContext)

  const buttonVisibility = () => {
    updateIsCommentsVisible(!isCommentsVisible);
  };

  const handleSignupPopup = () => {
    updateSignupPopup(!signupPopup);
  };

  const handlePopupClick = (event) => {
    event.stopPropagation(); // Prevent event propagation when clicking on the popup component
  };

  const handleAddProduct=()=>{
    updateAddProductPopup(!addProductPopup)
  }

  const inLineStyles = {
    marginBottom: isCommentsVisible ? "0vh" : null,
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
            onClick={handleAddProduct}
            className="display-products__add-product"
          >
            {" "}
            + Add product
             {addProductPopup && (
              <div className="overlay" onClick={handlePopupClick}>
                <AddProduct />
              </div>
            )}
            {/* {signupPopup && (
              <div className="overlay" onClick={handlePopupClick}>
                <Signup main={false} />
              </div>
            )} */}

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
          <div className="display-products__card" style={inLineStyles}>
            <div className="display-products__card__comments-excluded">
              <div className="display-products__card-image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/img/products/product_1_small.png"
                  }
                  srcSet={
                    process.env.PUBLIC_URL +
                    "assets/img/products/product_1_small.png"
                  }
                  alt="banner"
                />
              </div>
              <div className="display-products__card-content">
                <div className="display-products__card-informations">
                  <p className="display-products__card__name">Crud Club</p>
                  <p className="display-products__card__description">
                    It is good for credit card payments, it is fast, secure
                  </p>
                  <div className="display-products__card__comment__category">
                    <div className="display-products__card__categories-main">
                      <button className="display-products__card__categories">
                        Category
                      </button>
                      <button className="display-products__card__categories">
                        Category
                      </button>
                    </div>
                    <div className="display-products__card__comment-btn">
                      <button
                        onClick={buttonVisibility}
                        class="display-products__card__comment-button"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/img/comment.png"
                          }
                          alt="Button Image"
                          style={{ marginTop: "1.5vh", height: "22px" }}
                        />
                      </button>
                      <p
                        style={{ marginTop: "1.5vh", height: "22px" }}
                        className="comment__desktop__text"
                      >
                        Comment
                      </p>
                    </div>
                    <div className="diplay-product__card-edit" style={{ marginTop: "1vh", height: "22px" }}>
                      <button className="card__info-edit">Edit</button>
                    </div>
                  </div>
                </div>
                <div className="display-products__card-informations-secondary">
                  <div className="display-products__card-informations-upvotes">
                    <p className="upvotes__counter-icon">^</p>
                    <p className="upvotes__counter">22</p>
                  </div>
                  <div
                    className="display-products__card-informations-comments"
                    style={{ marginTop: "5.5vh", marginRight: "0.1vh" }}
                  >
                    <p className="comments__counter">10</p>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/comments-counter.png"
                      }
                      alt="msg counter"
                      style={{ marginLeft: "1vw" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="display-products__card__comments-included">
              {isCommentsVisible && (
                <div className="display__products__card__comments">
                  <input
                    className="my-comment"
                    type="text"
                    placeholder="Add a comment"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "assets/img/send-comment.png"}
                    alt="Button Image"
                    className="send-button"
                    style={{ marginTop: "1vh" }}
                  />
                  <div className="all-comments">
                    <div className="display-products__card__comments-each">
                      <div className="bullet-points"></div>
                      <p className="comments-line">
                        Lithium is found when thing are chanded and lot of other
                        things happened/.
                      </p>
                    </div>
                    <div className="display-products__card__comments-each">
                      <div className="bullet-points"></div>
                      <p className="comments-line">
                        Lithium is found when thing are chanded and lot of other
                        things happened/.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

{/* <br /> */}


<div className="display-products__card" style={inLineStyles}>
            <div className="display-products__card__comments-excluded">
              <div className="display-products__card-image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/img/products/product_1_small.png"
                  }
                  srcSet={
                    process.env.PUBLIC_URL +
                    "assets/img/products/product_1_small.png"
                  }
                  alt="banner"
                />
              </div>
              <div className="display-products__card-content">
                <div className="display-products__card-informations">
                  <p className="display-products__card__name">Crud Club</p>
                  <p className="display-products__card__description">
                    It is good for credit card payments, it is fast, secure
                  </p>
                  <div className="display-products__card__comment__category">
                    <div className="display-products__card__categories-main">
                      <button className="display-products__card__categories">
                        Category
                      </button>
                      <button className="display-products__card__categories">
                        Category
                      </button>
                    </div>
                    <div className="display-products__card__comment-btn">
                      <button
                        onClick={buttonVisibility}
                        class="display-products__card__comment-button"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/img/comment.png"
                          }
                          alt="Button Image"
                          style={{ marginTop: "1.5vh", height: "22px" }}
                        />
                      </button>
                      <p
                        style={{ marginTop: "1.5vh", height: "22px" }}
                        className="comment__desktop__text"
                      >
                        Comment
                      </p>
                    </div>
                  </div>
                </div>
                <div className="display-products__card-informations-secondary">
                  <div className="display-products__card-informations-upvotes">
                    <p className="upvotes__counter-icon">^</p>
                    <p className="upvotes__counter">22</p>
                  </div>
                  <div
                    className="display-products__card-informations-comments"
                    style={{ marginTop: "2vh", marginRight: "0.1vh" }}
                  >
                    <p className="comments__counter">10</p>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/comments-counter.png"
                      }
                      alt="msg counter"
                      style={{ marginLeft: "1vw" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="display-products__card__comments-included">
              {isCommentsVisible && (
                <div className="display__products__card__comments">
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
                    <div className="display-products__card__comments-each">
                      <div className="bullet-points"></div>
                      <p className="comments-line">
                        Lithium is found when thing are chanded and lot of other
                        things happened/.
                      </p>
                    </div>
                    <div className="display-products__card__comments-each">
                      <div className="bullet-points"></div>
                      <p className="comments-line">
                        Lithium is found when thing are chanded and lot of other
                        things happened/.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>



          <div className="display-products__card" style={inLineStyles}>
            <div className="display-products__card__comments-excluded">
              <div className="display-products__card-image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/img/products/product_1_small.png"
                  }
                  srcSet={
                    process.env.PUBLIC_URL +
                    "assets/img/products/product_1_small.png"
                  }
                  alt="banner"
                />
              </div>
              <div className="display-products__card-content">
                <div className="display-products__card-informations">
                  <p className="display-products__card__name">Crud Club</p>
                  <p className="display-products__card__description">
                    It is good for credit card payments, it is fast, secure
                  </p>
                  <div className="display-products__card__comment__category">
                    <div className="display-products__card__categories-main">
                      <button className="display-products__card__categories">
                        Category
                      </button>
                      <button className="display-products__card__categories">
                        Category
                      </button>
                    </div>
                    <div className="display-products__card__comment-btn">
                      <button
                        onClick={buttonVisibility}
                        class="display-products__card__comment-button"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/img/comment.png"
                          }
                          alt="Button Image"
                          style={{ marginTop: "1.5vh", height: "22px" }}
                        />
                      </button>
                      <p
                        style={{ marginTop: "1.5vh", height: "22px" }}
                        className="comment__desktop__text"
                      >
                        Comment
                      </p>
                    </div>
                  </div>
                </div>
                <div className="display-products__card-informations-secondary">
                  <div className="display-products__card-informations-upvotes">
                    <p className="upvotes__counter-icon">^</p>
                    <p className="upvotes__counter">22</p>
                  </div>
                  <div
                    className="display-products__card-informations-comments"
                    style={{ marginTop: "2vh", marginRight: "0.1vh" }}
                  >
                    <p className="comments__counter">10</p>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/comments-counter.png"
                      }
                      alt="msg counter"
                      style={{ marginLeft: "1vw" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="display-products__card__comments-included">
              {isCommentsVisible && (
                <div className="display__products__card__comments">
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
                    <div className="display-products__card__comments-each">
                      <div className="bullet-points"></div>
                      <p className="comments-line">
                        Lithium is found when thing are chanded and lot of other
                        things happened/.
                      </p>
                    </div>
                    <div className="display-products__card__comments-each">
                      <div className="bullet-points"></div>
                      <p className="comments-line">
                        Lithium is found when thing are chanded and lot of other
                        things happened/.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>


          <div className="display-products__card" style={inLineStyles}>
            <div className="display-products__card__comments-excluded">
              <div className="display-products__card-image">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "assets/img/products/product_1_small.png"
                  }
                  srcSet={
                    process.env.PUBLIC_URL +
                    "assets/img/products/product_1_small.png"
                  }
                  alt="banner"
                />
              </div>
              <div className="display-products__card-content">
                <div className="display-products__card-informations">
                  <p className="display-products__card__name">Crud Club</p>
                  <p className="display-products__card__description">
                    It is good for credit card payments, it is fast, secure
                  </p>
                  <div className="display-products__card__comment__category">
                    <div className="display-products__card__categories-main">
                      <button className="display-products__card__categories">
                        Category
                      </button>
                      <button className="display-products__card__categories">
                        Category
                      </button>
                    </div>
                    <div className="display-products__card__comment-btn">
                      <button
                        onClick={buttonVisibility}
                        class="display-products__card__comment-button"
                      >
                        <img
                          src={
                            process.env.PUBLIC_URL + "assets/img/comment.png"
                          }
                          alt="Button Image"
                          style={{ marginTop: "1.5vh", height: "22px" }}
                        />
                      </button>
                      <p
                        style={{ marginTop: "2.2vh", height: "22px" }}
                        className="comment__desktop__text"
                      >
                        Comment
                      </p>
                    </div>
                  </div>
                </div>
                <div className="display-products__card-informations-secondary">
                  <div className="display-products__card-informations-upvotes">
                    <p className="upvotes__counter-icon">^</p>
                    <p className="upvotes__counter">22</p>
                  </div>
                  <div
                    className="display-products__card-informations-comments"
                    style={{ marginTop: "2vh", marginRight: "0.1vh" }}
                  >
                    <p className="comments__counter">10</p>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "assets/img/comments-counter.png"
                      }
                      alt="msg counter"
                      style={{ marginLeft: "1vw" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="display-products__card__comments-included">
              {isCommentsVisible && (
                <div className="display__products__card__comments">
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
                    <div className="display-products__card__comments-each">
                      <div className="bullet-points"></div>
                      <p className="comments-line">
                        Lithium is found when thing are chanded and lot of other
                        things happened/.
                      </p>
                    </div>
                    <div className="display-products__card__comments-each">
                      <div className="bullet-points"></div>
                      <p className="comments-line">
                        Lithium is found when thing are chanded and lot of other
                        things happened/.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>



          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DisplayProducts;
