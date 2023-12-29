import axios from "axios";
import React, { useEffect, useState } from "react";

export default function About() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get()
      .then(() => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section>
      <h2>About</h2>
    </section>
  );
}
