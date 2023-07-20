import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import "./style1.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import useFetch from "../../hook/useFetch";
// import Genres from "./../../../components/genres/Genres";
// import CircleRating from "./../../../components/circleRating/CircleRating";
import Img from "../../components/lazyLoadingimg/img";
import PosterFallback from "./../../assets/no-poster.png";
import KnownFor from "./knownFor/KnownFor";
// import { PlayIcon } from "../PlayButton";
// import VideoPopup from "../../../components/videopopup/Videopopup";


 
const Text = () => {

    // const [show,setShow] = useState(false);
    // const [videoId,setVideoId]=useState(null);

    // const {mediaType,id} = useParams();
    // const {data,loading}= useFetch(`/${mediaType}/${id}`);

    const {personid} = useParams();
    const {data,loading}= useFetch(`/person/${personid}`);

   

    const {url} = useSelector((state) => state.home)
    

    // const _genres = data?.genres?.map((g) => g.id);

    // const director=crew?.filter((f) => f.job === "Director");
    // const writer=crew?.filter((f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer");
    
    return (
        <div className="detailsBanner">
            {!loading ? (
                <div>
                    <div className="backdrop-img">
                        <Img src={url.profile+data?.profile_path}/>
                    </div>
                    <div className="opacity-layer"></div>
                    <ContentWrapper>
                        <div className="content">
                            <div className="left">
                                {data?.profile_path ?(
                                    <Img className="posterImg"  src={url.profile+data?.profile_path}/>
                                ) : (
                                    <Img className="posterImg"  src={PosterFallback}/>
                                )}
                            </div>
                            <div className="right">
                                <div className="title">
                                    {`${data?.name || data?.title} `}
                                </div>
                                {/* <div className="subtitle">
                                    {
                                        data?.biography
                                    }
                                </div> */}
                                {/* <Genres data={_genres}/> */}

                                {/* <div className="row">
                                    <CircleRating rating={data?.vote_average.toFixed(1)}/>
                                    <div className="playbtn"
                                     onClick={()=>{
                                        setVideoId(video[0]?.key)
                                        setShow(true);
                                       
                                     }}>
                                        <PlayIcon/>
                                        <span className="text">
                                            Watch Trailer
                                        </span>
                                    </div>
                                </div> */}

                                <div className="overview" style={{marginTop:"30px"}}>
                                    <div className="heading">Biography</div>
                                    <div className="description">
                                        {data?.biography}
                                    </div>
                                </div>
                                <div className="info">
                                    {data?.known_for_department && (
                                        <div className="infoItem">
                                            <span className="text bold">
                                                Known For:{" "}
                                            </span>
                                            <span className="text">
                                                {data?.known_for_department}
                                            </span>
                                        </div>
                                    )}
                                    {data?.birthday && (
                                        <div className="infoItem">
                                            <span className="text bold">
                                                  Birthday:{" "}
                                            </span>
                                            <span className="text">
                                                {dayjs(data.birthday).format("MMM D,YYYY")}
                                            </span>
                                        </div>
                                    )}
                                      {data?.gender && (
                                        <div className="infoItem">
                                            <span className="text bold">
                                                 Gender:{" "}
                                            </span>
                                            <span className="text">
                                                {data.gender === 1 ? "Female" : "Male"}
                                            </span>
                                        </div>
                                    )}

                                </div>
                                {/* {director?.length > 0 && (
                                    <div className="info">
                                        <span className="text bold">
                                            Director:{" "}
                                        </span>
                                        <span className="text">
                                            {director?.map((d,i) => (
                                                <span key={i}>
                                                    {d.name}
                                                    {director.length -1 != i && ", "}
                                                 </span>

                                            ))}
                                        </span>

                                    </div>
                                )} */}
                                 {/* {writer?.length > 0 && (
                                    <div className="info">
                                        <span className="text bold">
                                            Writer:{" "}
                                        </span>
                                        <span className="text">
                                            {writer?.map((d,i) => (
                                                <span key={i}>
                                                    {d.name}
                                                    {writer.length -1 != i && ", "}
                                                 </span>

                                            ))}
                                        </span>

                                    </div>
                                )} */}
                                    {/* {data?.created_by?.length > 0 && (
                                    <div className="info">
                                        <span className="text bold">
                                            Creater:{" "}
                                        </span>
                                        <span className="text">
                                            {data.created_by?.map((d,i) => (
                                                <span key={i}>
                                                    {d.name}
                                                    {data.created_by.length -1 != i && ", "}
                                                 </span>

                                            ))}
                                        </span>

                                    </div>
                                )} */}


                            </div>
                        </div>
                        {/* <VideoPopup 

                        show={show}
                        setShow={setShow}
                        videoId={videoId}
                        setVideoId={setVideoId}
                         /> */}
                    </ContentWrapper>
                    <div>
                        <KnownFor personId={personid}/>
                    </div>
                 </div>
                  
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default Text;