import React, { Component } from 'react'
import { connect } from 'react-redux'
// custom imports

class VideoDetail extends Component {

	render() {
		if ( !this.props.video )
			return ( <div className="video-detail col-md-8"> Loading... </div> )
		// video detail available
		// const videoId = this.props.video.id.videoId
		// const videoURL = `https://youtube.com/embed/${videoId}`
		// const title = this.props.video.snippet.title
		// const description = this.props.video.snippet.description
		// return (
		// 	<div className="video-detail col-md-8">
		// 		<div className="embed-responsive embed-responsive-16by9">
		// 			<iframe src={videoURL} className="embed-responsive-item"></iframe>
		// 		</div>
		// 		<div className="details">
		// 			<div>{title}</div>
		// 			<div>{description}</div>
		// 		</div>
		// 	</div>
		// )
		return (
			<div className="video-detail col-md-8"> 
				<h3>Showing details for: </h3>
				<div>{this.props.video.title} - {this.props.video.desc}</div>
			</div>
		)
	}

}

const mapStateToProps = (state) => {
	return {
		video: state.currentVideo
	}
}

export default connect(mapStateToProps)(VideoDetail)