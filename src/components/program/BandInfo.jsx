import detail from "/sass/modules/_BandDetail.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function BandInfo(props) {
  const band = { ...props.bandDisplay };

  function switchFav() {
    if (props.favourites.find((item) => item.name === band.name)) {
      props.setFavourites((old) => old.filter((item) => item.name !== band.name));
    } else {
      props.setFavourites((old) => old.concat(band));
    }
  }

  if (band.name != undefined) {
    return (
      // <div className={programStyles.band__info}>
      <div className={detail.bandDetail}>
        <div className={detail.buttons}>
          <button onClick={() => props.setBandDisplayed([])}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <button onClick={switchFav} className={detail.faveButton}>
          {props.favourites.find((item) => item.name === band.name) ? (
            <>
              <span>Remove from favorites</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="hsla(0, 0%, 98%, 100%)" className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
            </>
          ) : (
            <>
              <span>Add to favorites</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </>
          )}
        </button>
        <div className={detail.topWrapper}>
          <figure>
            {band.logo.includes("http") ? (
              <LazyLoadImage effect="blur" src={band.logo} alt={band.name} placeholderSrc="/img/ff_logo.svg" />
            ) : (
              <LazyLoadImage effect="blur" src={`https://foofestival.herokuapp.com/logos/${band.logo}`} alt={band.name} placeholderSrc="/img/ff_logo.svg" />
            )}

            {band.logoCredits ? <figcaption>{band.logoCredits}</figcaption> : null}
          </figure>
          <div className={detail.textWrapper}>
            <h2>{band.name}</h2>
            <h4>{band.genre}</h4>
            <p>
              Performing:<br></br> {props.day} {props.act.start}-{props.act.end} <span>{props.stage}</span>
            </p>
          </div>
        </div>
        <p className={detail.bio}>{band.bio}</p>
      </div>
    );
  }
}
