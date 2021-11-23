import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const BtnSecaoAdm = (btn) => {
  return (
    <>
      <Link to={btn.link}>
        <div className="d-grid gap-2">
          <Button variant="primary" size="lg">
            {btn.text}
          </Button>
        </div>
      </Link>
    </>
  );
};

export default BtnSecaoAdm;
