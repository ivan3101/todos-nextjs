import React, {Component} from 'react';
import App from "next/app";
import {Head} from "next/document";
import ResetStyles from "../components/reset-styles/reset-styles";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>ToDo App</title>
        </Head>
        <ResetStyles />

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
