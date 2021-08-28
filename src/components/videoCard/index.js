import { Link } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { CardHeading,CardFigure, VideoCardContainer, VideoLink, StyledImage } from "./videoCard.style"

const VideoCard = ({
  key,
  slug,
  title,
  videoSourceURL,
  videoImage,
  videoTitle,
  clickFun,
  ...props
}) => {
  console.log(slug)
  return (
    <VideoCardContainer>
      <VideoLink onClick={clickFun}>
        <CardFigure>
          <StyledImage image={getImage(videoImage)} alt={title} rounded />
        </CardFigure>
        <CardHeading>
          {videoTitle}
        </CardHeading>
      </VideoLink>
    </VideoCardContainer>
  )
}

export default VideoCard
