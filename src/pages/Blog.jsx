import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Blog() {
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
      <h2>Blog</h2>
    </section>
  );
}
