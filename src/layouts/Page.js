import React from 'react';
import classNames from "classnames";
import {useModal} from "../utils/hooks/modal/useModal";
import Footer from "../components/ui/footer/Footer";

function Page({children}) {
  const modal = useModal();

  return (
    <div className={classNames(
      'page',
      {'blur' : modal.isOpen}
    )}>
      <header className="header">
      </header>
      {children}
      <Footer/>
    </div>
  )
}

export default Page;