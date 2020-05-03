import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import inputId from '../../util/shortid';

export default class ContactFrom extends Component {
  state = { name: '', number: '' };

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSet = e => {
    e.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    this.props.handleSubmit(e);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSet}>
        <label className={styles.label} htmlFor={inputId.name}>
          Name{' '}
          <input
            type="text"
            value={name}
            placeholder="name"
            onChange={this.handleChange}
            id={inputId.name}
            name="name"
            className={styles.input}
          />
        </label>

        <label className={styles.label} htmlFor={inputId.number}>
          Number
          <input
            type="tel"
            placeholder="999-99-99"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            required
            value={number}
            onChange={this.handleChange}
            id={inputId.number}
            name="number"
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.submit}>
          Add contact
        </button>
      </form>
    );
  }
}
