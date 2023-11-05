import { useContext } from "react";
import addPhotoIcon from "../assets/images/addPhoto-icon.png";
import { PhotoContext } from "../context/features/photo";

const AddPhoto = () => {
  const { image, setImage, isError, setIsError } = useContext(PhotoContext);

  const handleInputFile = (file) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
      setIsError(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="add-photo">
      <h2 className="add-photo-title">add a photo</h2>
      <div
        className={isError ? "file-input-wrapper-error" : "file-input-wrapper"}
      >
        <input
          type="file"
          id="input-file"
          accept="image/*"
          onChange={(e) => handleInputFile(e.target.files[0])}
        />
        <label className="input-label" htmlFor="input-file">
          {image ? (
            <img className="avatar" src={image} alt="avatar" />
          ) : (
            <img className="add-photo-icon" src={addPhotoIcon} alt="icon" />
          )}
        </label>
      </div>
      {isError ? <p className="error-msg">Please choose photo!</p> : null}
    </div>
  );
};

export default AddPhoto;
