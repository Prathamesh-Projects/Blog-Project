import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const ShareSection = ({ url, title }) => {
  return (
    <div className="mt-8 p-4 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        📢 Share this article:
      </h3>
      <div className="flex space-x-4">
        {/* Facebook */}
        <FacebookShareButton url={url} quote={title}>
          <FacebookIcon size={40} round />
        </FacebookShareButton>

        {/* Twitter */}
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={40} round />
        </TwitterShareButton>

        {/* WhatsApp */}
        <WhatsappShareButton url={url} title={title} separator=":: ">
          <WhatsappIcon size={40} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareSection;
