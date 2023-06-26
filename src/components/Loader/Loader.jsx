import React from 'react';
import { createPortal } from 'react-dom';
import { Backdrop } from './Styled';
import { ThreeDots } from 'react-loader-spinner';

const loaderRoot = document.querySelector('#loader-root');

export function Loader() {
  return createPortal(
    <Backdrop>
      <ThreeDots
        height="50"
        width="50"
        radius="9"
        color="#f57c00"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Backdrop>,
    loaderRoot
  );
}
