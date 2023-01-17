import { Component } from 'react';
import PropTypes from 'prop-types';

import s from '../Modal/Modal.module.css';

export class Modal extends Component {
  render() {
    const { largeImageURL } = this.props;
    return (
      <div className={s.Overlay} onClick={this.handleKeyDown}>
        <div className={s.Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onModalClose: PropTypes.func,
  largeImageURL: PropTypes.string.isRequired,
};
