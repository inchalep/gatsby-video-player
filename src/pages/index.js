import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"
import { Wrapper } from "../style/common.style"
import VideoCard from "../components/videoCard"
import { Modal, ModalVideo, VideoContainer } from "../style/homepage.style"
import { useState } from "react"

const HomePage = ({ data, ...props }) => {
  const [modalVideo, setVideoModal] = useState({
    videoSourceURL: '', title: '', flag: false
  })
  const image = getImage(data.homebackground)
  const bgImage = convertToBgImage(image)
  const videoData = data.videodata.nodes;

  const closeModal = ()=> setVideoModal({videoSourceURL:'', title:'',flag:false})

  const setModalValues = (videoTitle, videoSrc) => setVideoModal({ videoSourceURL: videoSrc, title: videoTitle, flag: true })
  return (
    <Layout>
      <BackgroundImage
        tag="section"
        {...bgImage}
        preserveStackingContext
        className="backgroundImage"
      >
        <Wrapper id="wrapper123">
          <VideoContainer>
            {videoData &&
              videoData.map(videoMap => (
                <VideoCard
                  key={videoMap.frontmatter.slug}
                  slug={videoMap.frontmatter.slug}
                  title={videoMap.frontmatter.title}
                  videoSourceURL={videoMap.frontmatter.videoSourceURL}
                  videoImage={videoMap.frontmatter.videoImage}
                  videoTitle={videoMap.frontmatter.videoTitle}
                  clickFun={() => setModalValues(videoMap.frontmatter.title, videoMap.frontmatter.videoSourceURL)}
                />
              ))}
          </VideoContainer>
        </Wrapper>
      </BackgroundImage>
      {
        modalVideo.flag &&
        <Modal onClick={closeModal}>
          <ModalVideo>
          <iframe
            src={modalVideo.videoSourceURL}
            title={modalVideo.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
            style={{
              width:'100%',
              height:'100%',
            }}
          />
          </ModalVideo>
        </Modal>
      }
      <footer>
        <h4 style={{
          margin:'20px 0',
          textAlign:'center',
          fontSize:'22px',
        }}>Made with <span style={{color:'red',}}> &#10084;
        </span> Dnyanu Inchale</h4>
      </footer>
    </Layout>
          )
}

      export const query = graphql`
      query videoplayer {
        homebackground: file(relativePath: {eq: "deepika-padukon2.jpg" }) {
        childImageSharp {
        gatsbyImageData
      }
    }
      videodata: allMarkdownRemark {
        nodes {
        frontmatter {
        videoImage {
        childImageSharp {
        gatsbyImageData
      }
          }
      slug
      title
      date
      videoSourceURL
      videoTitle
        }
      }
    }
  }
      `

      export default HomePage
