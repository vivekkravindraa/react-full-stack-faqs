import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import Gist from "react-gist";

import tagsData from "../data/tags";

import "../styles.css";

export default function SetCard({ faq }) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>
          <b>{faq.number}. {faq.question}</b>
          </CardTitle>
          {faq.type === "Code" ? (
            <Gist id={faq.answer.slice(-32)} />
          ) : (
            <CardText>{faq.answer}</CardText>
          )}

          <CardText>Tags: {faq.tags.map((tag) => <a href="https://8snib.sse.codesandbox.io/tag/">#{tag}</a>)}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}