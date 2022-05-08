import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import YouTube from "react-youtube";

const YoutubeModal = ({ setOpen, open, videoYoutube }) => {
  const handleClose = () => setOpen(false);
  const youtubeOpts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <div className="inner">
          <YouTube
            videoId={
              videoYoutube[0] &&
              videoYoutube.filter((item) => item.type === "Trailer")[0].key
            }
            opts={youtubeOpts}
            className={"youtube"}
          />
          <CloseIcon onClick={handleClose} className="btnClose" />
        </div>
      </Modal>
    </>
  );
};

export default YoutubeModal;
