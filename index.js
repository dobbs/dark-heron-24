addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("Hello, Dark Heron", {
      status: 200,
      headers: {
        "content-type": "text/plain",
      },
    }),
  );
});
