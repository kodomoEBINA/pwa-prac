import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Delete from '@material-ui/icons/Delete';
import FileUpload from '@material-ui/icons/FileUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import Save from '@material-ui/icons/Save';
// import FileInput from 'react-file-input';
// import ImageUploader from 'react-images-upload';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});


// IconLabelButtons(props) {
//   const { classes } = props;
//   return (
//     <div>
//       <Button className={classes.button} variant="raised" color="default">
//         Delete
//         <Delete className={classes.rightIcon} />
//       </Button>
//       <Button className={classes.button} variant="raised" color="primary">
//         Send
//         <Icon className={classes.rightIcon}>send</Icon>
//       </Button>
//       <Button className={classes.button} variant="raised" color="secondary">
//         Upload
//         <FileUpload className={classes.rightIcon} />
//       </Button>
//       {/* <Button className={classes.button} variant="raised" disabled color="secondary">
//         <KeyboardVoice className={classes.leftIcon} />
//         Talk
//       </Button>
//       <Button className={classes.button} variant="raised" size="small">
//         <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
//         Save
//       </Button> */}
//     </div>
//   );
// }

// const uploadclick = () => {
//   this.refs.fileUpload.click();
// };

// const setImage = (fileData) => {
//   const reader = new FileReader();
//   const url = reader.readAsDataURL(fileData);
//   reader.onloadend = (e) => {
//     this.setState({
//       file: fileData,
//       photoURL: reader.result,
//       isUploadedImage: true,
//     });
//   };
// };


// export default class MyUploader extends Component {
//   render() {
//       return (
//           <ImagesUploader
//               url="http://localhost:9090/notmultiple"
//               optimisticPreviews
//               multiple={false}
//               onLoadEnd={(err) => {
//                   if (err) {
//                       console.error(err);
//                   }
//               }}
//               label="Upload a picture"
//               />
//       );
//   }
// }

class Top extends React.Component {
    //   uploadFile(e) {
    //     this.setState({
    //       file: e.target.files[0]
    //     });
    //   }

    // sendFile() {
    //   const formData = new FormData();
    //   formData.append('file', this.state.file);
    //   $.ajax({
    //     type: 'POST',
    //     dataType: 'json',
    //     data: formData,
    //     processData: false,
    //     contentType: false,
    //     url: '/apis/send_file'
    //   });
    // }

    // constructor(props) {
    //   super(props);
    //   this.state = { pictures: [] };
    //   this.onDrop = this.onDrop.bind(this);
    // }

    // onDrop(picture) {
    //   this.setState({
    //     pictures: this.state.pictures.concat(picture),
    //   });
    // }


    render() {
        // const { classes } = props;
        return (
            <article>
                {/* <Button variant="raised" color="secondary" onChange={this.onDrop}>
          Upload
          <FileUpload />
        </Button> */}
                {/* <Button className={classes.button} variant="raised" color="default">
          Delete
          <Delete className={classes.rightIcon} />
        </Button>
        <Button className={classes.button} variant="raised" color="primary" onClick={this.sendFile.bind(this)}> */}
                {/* <Button className={classes.button} variant="raised" color="primary">
          Send
          <Icon className={classes.rightIcon}>send</Icon>
        </Button> */}
                {/* <List component="nav">
          <ListItem button>
            <ListItemText primary="Top" />
          </ListItem>
        </List> */}

                <ImagesUploader
                    url="http://localhost:9090/notmultiple"
                    optimisticPreviews
                    multiple={false}
                    onLoadEnd={(err) => {
                        if (err) {
                            console.error(err);
                        }
                    }}
                    label="Upload a picture"
                />
            </article>
        );
    }
}


// Top.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default Top;
export default withStyles(styles)(Top);
