import React from 'react';
import PropTypes from 'prop-types';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import Header from './Header.jsx';


class Top extends React.Component {
  componentDidMount() {
    this.props.loadHome();
  }
  render() {
    if (this.props.Top.isLoaded) {
      return (
        <article>
          <Header />
          <ImagesUploader
            url="https://yabatani-engine.firebaseapp.com/"
            optimisticPreviews
            multiple={false}
            onLoadEnd={(err) => {
              if (err) {
                console.error(err);
              }
            }}
          // label="Upload a picture"
          />
        </article>
      );
    }
    return (
      <article>
        <Loader />
      </article>
    );
  }
}

Top.propTypes = {
  Top: PropTypes.object.isRequired,
  loadHome: PropTypes.func.isRequired
};

// class Home extends React.Component {
//   componentDidMount() {
//     this.props.loadHome();
//   }

//   render() {
//     if (this.props.home.isLoaded) {
//       return (
//         <article>
//           <Header />
//           <Subheader>Home</Subheader>
//           <List>
//             <ListItem primaryText="Foo" leftIcon={<FontIcon className="material-icons">grade</FontIcon>} />
//             <ListItem primaryText="Bar" leftIcon={<FontIcon className="material-icons">favorite</FontIcon>} />
//             <ListItem primaryText="Baz" leftIcon={<FontIcon className="material-icons">android</FontIcon>} />
//           </List>

//         </article>
//       );
//     }
//     return (
//       <article>
//         <Loader />
//       </article>
//     );
//   }
// }

// Home.propTypes = {
//   home: PropTypes.object.isRequired,
//   loadHome: PropTypes.func.isRequired
// };


export default Top;
