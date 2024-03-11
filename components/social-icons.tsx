import LinkedinIcon from "./linkedinicon";
import GithubIcon from "./githubicon";
import "@/styles/components/_social-icons.scss";

const SocialIcons = () => {
  return (
    <div className="container--social-icons">
      <a
        className="social-icon"
        href="https://www.linkedin.com/in/faried-idris"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <LinkedinIcon />
        {/* Screen reader only text */}
      </a>
      <a
        className="social-icon"
        href="https://github.com/psyofrelief"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <GithubIcon />
      </a>
    </div>
  );
};
export default SocialIcons;
