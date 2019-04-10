import React from 'react';
import './UserInfoHeader.scss';
import defaultThumbnail from 'static/images/default_thumbnail.png';
import { FaGithubSquare as GithubIcon } from 'react-icons/fa';
import { FaTwitterSquare as TwitterIcon } from 'react-icons/fa';
import { FaFacebookSquare as FacebookIcon } from 'react-icons/fa';
import { MdEmail as EmailIcon } from 'react-icons/md';
import { FaLink as LinkIcon } from 'react-icons/fa';

const UserInfoHeader = ({ profile }) => {
  const { userId, username, short_intro, profile_links } = profile;
  const { email, github, twitter, facebook, homepage } = profile_links;

  const hasAccount = !!(github || twitter || facebook);
  const hasLinks = !!(email || homepage);

  return (
    <div className="UserInfoHeader">
      <img src={defaultThumbnail} alt="" />
      <div className="userInfo">
        <section className="top">
          <div className="userId">@{userId}</div>
        </section>
        <section className="profile-content">
          <h2>{username}</h2>
          <p>{short_intro}</p>
          <div className="social-info">
            {hasAccount && (
              <div className="icons">
                {github && (
                  <a href={`https://github.com/${github}`} target="_blank">
                    <GithubIcon />
                  </a>
                )}

                {twitter && (
                  <a href={`https://twitter.com/${twitter}`} target="_blank">
                    <TwitterIcon />
                  </a>
                )}

                {facebook && (
                  <a href={`https://facebook.com/${facebook}`} target="_blank">
                    <FacebookIcon />
                  </a>
                )}
              </div>
            )}

            {hasLinks && (
              <div className="other-links">
                {email && (
                  <div className="link-line">
                    <EmailIcon />
                    <a hreft={`mailto:${email}`}>{email}</a>
                  </div>
                )}
                {homepage && (
                  <div className="link-line">
                    <LinkIcon />
                    <a href={homepage}>{homepage}</a>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

UserInfoHeader.Placeholder = () => (
  <div className="UserInfoHeader placeholder">
    <div className="fake-thumbnail" />
    <div className="userInfo">
      <section className="top">
        <div className="userId">
          <div className="gray-block _userId" />
        </div>
      </section>
      <section className="mini-profile">
        <div className="gray-block _name" />
        <div className="gray-block _description" />
      </section>
    </div>
  </div>
);

export default UserInfoHeader;
