import React, {Component} from 'react';
import App from "next/app";
import ResetStyles from "../components/reset-styles/reset-styles";
import Head from "next/head";

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
